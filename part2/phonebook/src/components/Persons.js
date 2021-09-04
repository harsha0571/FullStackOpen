import React from 'react'
import Person from './Person'
const Persons = ({ filter, fn, array }) => {
    return (
        <div>
            {
                filter.map(person => {
                    return (
                        <Person key={person.name} setPersons={fn} persons={array} person={person} />
                    )
                })
            }
        </div>
    )
}

export default Persons
