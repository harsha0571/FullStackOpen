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

    <div>
      <h1>statistics</h1>
      <p>   good:    {good}</p>
      <p>   neutral: {neutral}</p>
      <p>   bad:     {bad}</p>
      <p>   total:   {bad + good + neutral}</p>
      <p>   average: {((good * 1) + (bad * -1)) / (bad + good + neutral)}</p>
      <p>   positive: {(good) / (good + bad + neutral)}%</p>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => { setGood(good + 1) }} > good </button>
      <button onClick={() => { setNeutral(neutral + 1) }} > neutral </button>
      <button onClick={() => { setBad(bad + 1) }} > bad </button>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  );
}

export default App;
