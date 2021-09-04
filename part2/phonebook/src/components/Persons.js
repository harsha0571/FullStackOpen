import React from 'react'
import Person from './Person'
const Persons = ({ filter }) => {
    return (
        <div>
            {
                filter.map(person => {
                    return (
                        <Person key={person.name} person={person} />
                    )
                })
            }
        </div>
    )
}

export default Persons
