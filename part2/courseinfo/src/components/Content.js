import React from 'react'
import Part from './Part'
const Content = (props) => {

    const parts = props.course.parts
    return (
        <div>

            {
                parts.map(part => {
                    return (

                        <Part key={part.id} part={part.name} exercise={part.exercises} />

                    )
                })
            }

            {/* <Part part={parts[1].name} exercise={parts[1].exercises} />
             <Part part={parts[2].name} exercise={parts[2].exercises} />  */}


        </div>
    )
}

export default Content
