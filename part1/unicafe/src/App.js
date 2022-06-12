import { useState } from "react";

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  return (
    <div>
      <table>
        <tr>good {props.good}</tr>
        <tr>neutral {props.neutral}</tr>
        <tr>bad {props.bad}</tr>
        <tr>all {all}</tr>
        <tr>average {all / 3}</tr>
        <tr>positive {(props.good / all) * 100} %</tr>
      </table>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
