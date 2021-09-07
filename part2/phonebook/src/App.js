import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import services from './services/Route'
import Message from './components/Message'
const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [field, setField] = useState('')
  const intialMessage = {
    text: null,
    class: "message"
  }
  const [message, setMessage] = useState(intialMessage)

  useEffect(() => {
    console.log('effect')
    services.getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const handleName = (e) => {
    setNewName(e.target.value)

  }
  const handleNum = (e) => {
    setNewNum(e.target.value)
  }

  const handleField = (e) => {
    setField(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    const tempName = {
      name: newName,
      number: newNum
    }

    if (persons.some(person => person.name === newName)) {
      const eUser = persons.find(person => person.name === newName)
      if (window.confirm(`Update  ${eUser.name}'s number`)) {
        const uUser = { ...eUser, number: newNum }
        services.update(uUser.id, uUser)
          .then(person => {
            console.log("update:", person)
            const update = persons.map(u => (u.id === uUser.id ? uUser : u))
            setPersons(update)
          })
          .catch(err => {
            const fail = {
              text: `the user was already deleted from server`,
              class: "messageF"
            }

            if (err.response.status === 403) {
              const fail = {
                text: err.response.data.error,
                class: "messageF"
              }
              setMessage(fail)
              setTimeout(() => {
                setMessage(intialMessage)
              }, 3000)
            }
            else {
              setMessage(fail)
              setTimeout(() => {
                setMessage(intialMessage)
              }, 3000)
              setPersons(persons.filter(n => n.id !== uUser.id))
            }
          })
      }
    }
    else {
      const success = {
        text: `user created succesfully`,
        class: "message"
      }
      services.create(tempName)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setMessage(success)
          setTimeout(() => {
            setMessage(intialMessage)
          }, 3000)
        })
        .catch(err => {
          const inValid = {
            text: err.response.data.error,
            class: "messageF"
          }
          setMessage(inValid)
          setTimeout(() => {
            setMessage(intialMessage)
          }, 3000)
        })
    }
    setNewName('')
    setNewNum('')
  }
  const filterPersons = persons.filter(
    persons => {
      return (persons.name.toLowerCase().includes(field.toLowerCase()));
    }
  )
  return (
    <div>
      <h1>Phonebook with backend</h1>
      <Message message={message} />
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
      <Persons fn={setPersons} array={persons} filter={filterPersons} />
    </div>
  )
}

export default App