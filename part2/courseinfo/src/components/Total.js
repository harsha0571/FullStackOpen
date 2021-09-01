import React from 'react'

const Total = (props) => {
    const array = props.parts.parts
    const reducer = (accumulator, curVal) => accumulator + curVal.exercises;
    let total = array.reduce(reducer, 0)
    return (
        <div>
            <p>Number of exercises {total} </p>
        </div>
    )
}

export default Total
