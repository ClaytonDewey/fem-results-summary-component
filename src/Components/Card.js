const Card = ({ category, score, icon }) => {
  return (
    <div className={`card__summary card--${category.toLowerCase()}`}>
      <img src={icon} alt='reaction' />
      <div className='card__title'>{category}</div>
      <div className='card__score'>
        {score} <span> / 100</span>
      </div>
    </div>
  );
};

export default Card;
