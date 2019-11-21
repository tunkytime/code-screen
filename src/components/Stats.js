import React, { useState } from "react";

const Stats = () => {
  const [numbers, setNumbers] = useState("");
  const [stats, setStats] = useState({});

  // Problem #3: Stat Calculation
  const calculateStats = str => {
    let array = createArrayOfNumbers(str);

    // sum calculation
    let sum = array.reduce((previous, current) => (current += previous));

    // mean calculation
    let mean = findMean(array);

    // min calculation
    array.sort((a, b) => a - b);
    let min = array[0];

    // max calculation
    array.sort((a, b) => b - a);
    let max = array[0];

    // median calculation
    array.sort((a, b) => a - b);
    let lowMiddle = Math.floor((array.length - 1) / 2);
    let highMiddle = Math.ceil((array.length - 1) / 2);
    let median = (array[lowMiddle] + array[highMiddle]) / 2;

    setStats({
      Mean: mean,
      Min: min,
      Max: max,
      Median: median,
      Sum: sum,
      StdDev: standardDeviation(array, mean)
    });
  };

  // helper functions
  const createArrayOfNumbers = str => {
    str = str.trim().split(" ");
    let numArr = [];
    for (const e of str) {
      numArr.push(parseInt(e));
    }
    return numArr;
  };

  const findMean = array => {
    let sum = array.reduce((sum, value) => {
      return sum + value;
    }, 0);

    let mean = sum / array.length;
    return mean;
  };

  const standardDeviation = (array, mean) => {
    let squareDiffs = array.map(value => {
      let diff = value - mean;
      let sqrDiff = diff * diff;
      return sqrDiff;
    });

    let meanSquareDiff = findMean(squareDiffs);

    let stdDev = Math.sqrt(meanSquareDiff);
    return stdDev;
  };

  return (
    <section className="question">
      <h3>Problem #3: Stat Calculation</h3>
      <input
        value={numbers}
        onChange={e => setNumbers(e.target.value)}
        placeholder="Numbers"
        type="text"
        name="numbers"
      />
      <br></br>
      <button
        style={{ marginTop: 10 }}
        className="btn"
        onClick={() => calculateStats(numbers)}
      >
        Calculate Stats
      </button>
      <ul>
        <li>Mean: {stats.Sum}</li>
        <li>Min: {stats.Min}</li>
        <li>Max: {stats.Max}</li>
        <li>Median: {stats.Median}</li>
        <li>Sum: {stats.Sum}</li>
        <li>Standard Deviation: {stats.StdDev}</li>
      </ul>
    </section>
  );
};

export default Stats;
