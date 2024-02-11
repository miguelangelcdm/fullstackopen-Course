import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / (good + neutral + bad);
  const positive = (good / (good + neutral + bad)) * 100;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "5%" }}>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${positive} %`} />
          </tbody>
        </table>
      </div>
    </>
  );
};

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <div style={{ display: "flex", gap: "5%" }}>
          <Button onClick={handleGoodClick} text="good" />
          <Button onClick={handleNeutralClick} text="neutral" />
          <Button onClick={handleBadClick} text="bad" />
        </div>
      </div>
      <h1>Statistics</h1>
      {good || neutral || bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div style={{ marginTop: "2rem" }}>No feedback given</div>
      )}
    </>
  );
};

export default App;
