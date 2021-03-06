import React, { useState } from 'react'


const App = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {

    setSelected(getRandomInt(7))

  }
  const handleVote = () => {
    const b = votes
    b[selected] += 1
    setVotes([...b])
  }

  const maxVote = () => {

    var max = votes[0];
    var maxIndex = 0;

    for (var i = 1; i < votes.length; i++) {
      if (votes[i] > max) {
        maxIndex = i;
        max = votes[i];
      }
    }

    return maxIndex;
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const a = Array(7).fill(0)
  const [votes, setVotes] = useState(a)
  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={handleClick}>next anecdote</button>
      <button onClick={handleVote}>vote for this</button>
      <br />
      Most popular Annecdote:
      <br />
      {anecdotes[maxVote()]}
      and has {votes[maxVote()]}

    </div >
  )
}

export default App
