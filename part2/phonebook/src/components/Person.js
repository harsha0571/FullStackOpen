import React from 'react'
import services from '../services/Route'
const Person = ({ person, setPersons, persons }) => {
    const delPerson = () => {

        if (window.confirm(`Delete ${person.name}`)) {
            services.remove(person.id)
                .then(persons => console.log(persons))
            setPersons(persons.filter(n => n.id !== person.id))
        }

    }
    return (

        <div key={person.name}>
            {person.name}  {person.number} <button onClick={() => { delPerson() }}>delete</button>
        </div >

    )
}

export default Person
