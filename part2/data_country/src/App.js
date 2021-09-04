import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountryInDetail from './components/CountryInDetail'

const App = () => {

  const [field, setField] = useState('')
  const [countries, setCountries] = useState([])

  // const handleField = (e) => {
  //   setField(e.target.value)
  // }
  useEffect(() => {

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const filtered = countries.filter(country => {
    return (country.name.toLowerCase().includes(field.toLowerCase()))
  })
  const toShow = () => {
    console.log(filtered.length)
    if (filtered.length > 10) {
      return (
        <div>too many results refine query</div>
      )
    }
    else if (filtered.length > 1) {
      return (
        filtered.map(country => {
          return (
            <Country key={country.name} country={country} />
          )
        })
      )
    }
    else if (filtered.length === 1) {
      return (
        <CountryInDetail country={filtered[0]} />
      )
    }
  }
  return (
    <div>
      <div>
        find countries <input type='text' value={field} onChange={(e) => setField(e.target.value)} />
      </div>
      <br />
      <div>
        List:
        {toShow()}
      </div>
    </div>
  );
}

export default App;
