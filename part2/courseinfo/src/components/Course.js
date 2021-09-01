
import Header from './Header'
import Total from './Total'
import Content from './Content'

const Course = ({ courses }) => {
    return (
        <div>
            {
                courses.map(course => {
                    return (
                        <div>
                            <Header key={course.id} course={course} />
                            <Content key={course.id + 10000} course={course} />
                            <Total key={course.id + 20000} course={course} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Course
