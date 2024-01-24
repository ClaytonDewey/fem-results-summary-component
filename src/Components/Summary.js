import iconReaction from '../assets/images/icon-reaction.svg';
import iconMemory from '../assets/images/icon-memory.svg';
import iconVerbal from '../assets/images/icon-verbal.svg';
import iconVisual from '../assets/images/icon-visual.svg';

const Summary = () => {
  return (
    <div class='summary'>
      <div class='summary__header'>
        <h2>Summary</h2>
      </div>

      <div class='card__container'>
        <div class='card__summary card--reaction'>
          <img src={iconReaction} alt='reaction' />
          <div class='card__title'>Reaction</div>
          <div class='card__score'>
            80 <span> / 100</span>
          </div>
        </div>

        <div class='card__summary card--memory'>
          <img src={iconMemory} alt='memory' />
          <div class='card__title'>Memory</div>
          <div class='card__score'>
            92 <span> / 100</span>
          </div>
        </div>

        <div class='card__summary card--verbal'>
          <img src={iconVerbal} alt='verbal' />
          <div class='card__title'>Verbal</div>
          <div class='card__score'>
            61 <span> / 100</span>
          </div>
        </div>

        <div class='card__summary card--visual'>
          <img src={iconVisual} alt='visual' />
          <div class='card__title'>Visual</div>
          <div class='card__score'>
            72 <span> / 100</span>
          </div>
        </div>
      </div>

      <button>Continue</button>
    </div>
  );
};

export default Summary;
