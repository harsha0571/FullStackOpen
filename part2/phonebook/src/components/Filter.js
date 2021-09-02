import React from 'react'

const Filter = ({ field, handleField }) => {
    return (
        <div>
            <input type='text' value={field} onChange={handleField} />
        </div>
    )
}

export default Filter
