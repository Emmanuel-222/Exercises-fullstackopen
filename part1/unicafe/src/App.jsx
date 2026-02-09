import { useState } from "react";

const Statistic = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({name, handleClick}) => {
  return <button onClick={handleClick}>{name}</button>;
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? "0 %" : (good / all) * 100 + " %";

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button name="good" handleClick={() => setGood(good + 1)} />
        <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button name="bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <>
        <h1>Statistic</h1>
        {all === 0 ? (
          <p>No feedback given</p>
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={average}
            positive={positive}
          />
        )}
      </>
    </div>
  );
};

export default App;
