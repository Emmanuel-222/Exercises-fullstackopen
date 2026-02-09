import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  // Create array to store votes count for each anecdote in the ancedotes array. Initialize all counts to 0.
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    // Make a copy of the votes array and increment the count for the currently selected anecdote.
    const copy = [...votes];
    // Now the copy array has a different state from the votes array it originate from.
    copy[selected] += 1;
    setVotes(copy);
  };

  const mostVotes = Math.max(...votes);
  const indexOfMostVotes = votes.indexOf(mostVotes);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>
        {/* In here I set votes array to copy because copy array has the updated state for anecdote that have been voted for */}
        <button onClick={handleVote}>vote</button>
        <button
          onClick={() =>
            setSelected(Math.ceil(Math.random() * (anecdotes.length - 1)))
          }
        >
          next anecdotes
        </button>
      </div>
      {/* then in here I am showing the votes which was set from copy array above based on the selected anecdote */}
      <div>has {votes[selected]} votes</div>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[indexOfMostVotes]}</div>
      <div>has {mostVotes} votes</div>
    </>
  );
};

export default App;
