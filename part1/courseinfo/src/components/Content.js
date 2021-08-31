import React from 'react'
import Part from './Part'
const Content = (props) => {
    const part1 = props.part1
    const part2 = props.part2
    const part3 = props.part3

    return (
        <div>
            <Part part={part1.name} exercise={part1.exercises} />
            <Part part={part2.name} exercise={part2.exercises} />
            <Part part={part3.name} exercise={part3.exercises} />
        </div>
    )
}

export default Content
