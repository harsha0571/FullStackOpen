import React from 'react'

const Total = (props) => {
    const part1 = props.part1
    const part2 = props.part2
    const part3 = props.part3
    return (
        <div>
            <p>Number of exercises {part1.exercises + part3.exercises + part2.exercises}</p>
        </div>
    )
}

export default Total
