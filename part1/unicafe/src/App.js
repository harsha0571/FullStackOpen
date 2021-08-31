import { useState } from 'react'

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>

      </div>
    )
  }
  return (


    <table>
      <tbody>
        <tr>
          <td> <h1>statistics</h1> </td>
        </tr>

        <StatLine title='good' value={good} />


        <StatLine title='neutral' value={neutral} />


        <StatLine title='bad' value={bad} />


        <StatLine title='total' value={bad + good + neutral} />


        <StatLine title='average' value={((good * 1) + (bad * -1)) / (bad + good + neutral)} />


        <StatLine title='postive' value={(good) / (good + bad + neutral)} />

      </tbody>
    </table>

  )
}

const Btn = (props) => {
  return (

    <button onClick={props.handle}>{props.text}</button>
  )
}
const StatLine = (props) => {
  return (
    <tr>
      <td>{props.title}:</td>
      <td>{props.value} </td>
    </tr>

  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (value) => {
    setGood(value)
  }
  const setToBad = (value) => {
    setBad(value)
  }
  const setToNeutral = (value) => {
    setNeutral(value)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Btn handle={() => setToGood(good + 1)} text="good" />
      <Btn handle={() => setToBad(bad + 1)} text="bad" />
      <Btn handle={() => setToNeutral(neutral + 1)} text="neutral" />
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  );
}

export default App;
