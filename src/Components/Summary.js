// import iconMemory from '../assets/images/icon-memory.svg';
// import iconVerbal from '../assets/images/icon-verbal.svg';
// import iconVisual from '../assets/images/icon-visual.svg';
import { Card } from './';
import data from '../data.json';

const Summary = () => {
  return (
    <div className='summary'>
      <div className='summary__header'>
        <h2>Summary</h2>
      </div>

      <div className='card__container'>
        {data.map((item, index) => {
          const { category, score, icon } = item;
          return (
            <Card key={index} category={category} score={score} icon={icon} />
          );
        })}
      </div>

      <button className='btn'>
        Continue
        <span className='btn__helper'></span>
      </button>
    </div>
  );
};

export default Summary;
