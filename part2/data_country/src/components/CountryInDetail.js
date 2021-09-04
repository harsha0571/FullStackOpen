import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
require('dotenv').config()
const CountryInDetail = ({ country }) => {

    const [weather, setWeather] = useState({})
    const [toggle, setToggle] = useState(false)
    useEffect(() => {

        const api_key = process.env.REACT_APP_API_KEY

        const params = {
            access_key: api_key,
            query: country.capital
        }

        axios
            .get('http://api.weatherstack.com/current', { params })
            .then(response => {
                console.log('weather recieved')
                setWeather(response.data)
                console.log(response.data)
            })
    }, [country.capital])

    const showWeather = () => {
        if (toggle) {
            return (
                <div>
                    <h2>Weather in {country.capital} </h2>
                    <h3>temperature:{weather.current.temperature} celsius</h3>
                    <img alt={country.capital} src={weather.current.weather_icons[0]} widht="230px" height="auto" />
                    <p>Wind speed {weather.current.wind_speed} mph in {weather.current.wind_dir} direction</p>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>{country.name}</h1>

            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>

            <h2>Languages:</h2>
            <ul>
                {

                    country.languages.map(lang => {
                        return (
                            <li key={lang.name}> {lang.name}</li>
                        )
                    })
                }
            </ul>
            <img alt={country.name} src={country.flag} width="300px" height="auto" />
            <button onClick={() => { setToggle(!toggle) }}> show weather</button>
            {
                showWeather()
            }
        </div>
    )
}

export default CountryInDetail
