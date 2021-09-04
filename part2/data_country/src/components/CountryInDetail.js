import React from 'react'

const CountryInDetail = ({ country }) => {
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
        </div>
    )
}

export default CountryInDetail
