import React from 'react'

const PersonForm = ({ text, value, changeFn }) => {
    return (
        <div>
            {text} <input type='text' value={value} onChange={changeFn} required />
        </div>
    )
}

export default PersonForm
