import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', no: '34-45344' },
    { name: 'Ada Lovelace', no: '39-44-5323523' },
    { name: 'Dan Abramov', no: '12-43-234345' },
    { name: 'Mary Poppendieck', no: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [field, setField] = useState('')

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
      no: newNum
    }


    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is aleardy part of the phonebook`)
      setNewName('')
      setNewNum('')
    }
    else {
      setPersons(persons.concat(tempName))
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