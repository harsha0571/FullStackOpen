import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')

  const handleName = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)

  }
  const addName = (e) => {

    e.preventDefault()

    const name = {
      name: newName,
      id: persons.length + 1
    }

    setPersons(persons.concat(name))
    setNewName('')

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input type='text' value={newName} onChange={handleName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => {
          return (
            <div key={person.id}>
              {person.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default App