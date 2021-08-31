import React from 'react'
import Part from './Part'
const Content = (props) => {
    const part1 = props.part1
    const part2 = props.part2
    const part3 = props.part3
    const exercises1 = props.exercises1
    const exercises2 = props.exercises2
    const exercises3 = props.exercises3
    return (
        <div>
            <Part part={part1} exercise={exercises1} />
            <Part part={part2} exercise={exercises2} />
            <Part part={part3} exercise={exercises3} />
        </div>
    )
}

export default Content
