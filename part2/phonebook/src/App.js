import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import services from './services/Route'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [field, setField] = useState('')

  useEffect(() => {
    console.log('effect')
    services.getAll()
      .then(persons => {
        console.log('promise fulfilled')
        setPersons(persons)
      })
  }, [])

  const handleName = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)

  }
  const handleNum = (e) => {
    console.log(e.target.value)
    setNewNum(e.target.value)

  }

  const handleField = (e) => {


    console.log(e.target.value)
    setField(e.target.value)

  }
  const addPerson = (e) => {

    e.preventDefault()

    const tempName = {
      name: newName,
      number: newNum
    }


    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is aleardy part of the phonebook`)
      setNewName('')
      setNewNum('')
    }
    else {
      setPersons(persons.concat(tempName))
      services.create(tempName)
        .then(newPerson => console.log(newPerson))
      setNewName('')
      setNewNum('')
    }


  }
  const filterPersons = persons.filter(
    persons => {
      return (persons.name.toLowerCase().includes(field.toLowerCase()));
    }
  )
  return (
    <div>
      <h2>Phonebook</h2>

      <h2>Filter from list</h2>
      <Filter field={field} handleField={handleField} />
      <h2>Add a new number</h2>
      <form onSubmit={addPerson}>
        <div>
          <PersonForm text='name:' value={newName} changeFn={handleName} />
          <PersonForm text="ph no:" value={newNum} changeFn={handleNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons filter={filterPersons} />
    </div>
  )
}

export default App