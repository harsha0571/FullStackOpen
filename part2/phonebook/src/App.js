import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      no: '34-45344'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const handleName = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)

  }
  const handleNum = (e) => {
    console.log(e.target.value)
    setNewNum(e.target.value)

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleName} />
        </div>
        <div>
          ph no: <input type='text' value={newNum} onChange={handleNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => {
          return (
            <div key={person.name}>
              {person.name}  {person.no}
            </div>
          )
        })
      }
    </div>
  )
}

export default App