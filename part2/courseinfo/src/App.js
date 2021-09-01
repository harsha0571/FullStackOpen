
import Course from './components/Course'
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>

      <Course course={course} />
      {/* <Header course={course} />
      <Content parts={course} />
      <Total parts={course} /> */}

    </div>
  );
}

export default App;
