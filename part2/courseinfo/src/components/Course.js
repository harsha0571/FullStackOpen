
import Header from './Header'
import Total from './Total'
import Content from './Content'
const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course} />
            <Total parts={course} />
        </div>
    )
}

export default Course
