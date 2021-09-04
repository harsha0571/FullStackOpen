import React from 'react'
import { useState } from 'react'
import CountryInDetail from './CountryInDetail'
const Country = ({ country }) => {
    const [toggle, setToggle] = useState(false)

    const showHere = () => {
        if (toggle) {
            return (
                <CountryInDetail country={country} />
            )
        }
    }
    return (
        <div>
            {country.name} <button onClick={() => { setToggle(!toggle) }}> show</button>
            {
                showHere()
            }
        </div>
    )
}

export default Country
