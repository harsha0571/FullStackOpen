import React from 'react'

const Total = (props) => {
    const array = props.course.parts
    const reducer = (accumulator, curVal) => accumulator + curVal.exercises;
    let total = array.reduce(reducer, 0)
    return (
        <div>
            <p><b>Number of exercises : </b>{total}</p>
        </div>
    )
}

export default Total
