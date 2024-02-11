import { useState } from "react";
import "./App.css";

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
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const maxVotesPosition = votes.indexOf(Math.max(...votes));
  const mostRatedAnecdote = anecdotes[maxVotesPosition];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div className="anecdote">{anecdotes[selected]}</div>
        <div>{votes[selected]} votes</div>
      </div>
      <div className="anecdote-buttons">
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </div>
      <div style={{ marginBlock: "20px", width: "100%"}}>
        <span>Anecdote with most votes: </span>
        <div style={{ display:'flex',flexDirection:'column',alignItems:'center' }}>
          <div style={{margin:'10px 20px',maxWidth:'50vw'}}>{mostRatedAnecdote}</div>
          <span className="max-votes">with {Math.max(...votes)} votes</span>
        </div>
      </div>
    </>
  );
};

export default App;
