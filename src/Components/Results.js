import { useEffect, useState } from 'react';
import data from '../data.json';

const Results = () => {
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const scoreArray = data.map((item) => {
      return item.score;
    });

    const sum = scoreArray.reduce((acc, cur) => acc + cur, 0);
    setTotalScore(Math.floor(sum / scoreArray.length));
  }, [totalScore]);

  return (
    <div className='results'>
      <header className='results__header'>
        <h1>Your Result</h1>
      </header>

      <div className='results__score'>
        <span>{totalScore}</span>
        of 100
      </div>

      <div className='results__body'>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Results;
