import { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState([0, 0, 0, 0, 0, 0, 0]);
  console.log(votes);
  console.log(selected);
  console.log(Math.max(...votes));
  const handleClick = () => {
    setVote(
      votes.map((e, i) => {
        if (i === selected) {
          return e + 1;
        }
        return e;
      })
    );
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Button
        handleClick={() => {
          setSelected(Math.floor(Math.random() * 7));
        }}
        text="next anecdote"
      />
      <h2>Current vote is {votes[selected]}</h2>
      <button onClick={handleClick}>Vote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  );
};

export default App;
