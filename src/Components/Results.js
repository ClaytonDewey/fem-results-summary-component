const Results = () => {
  return (
    <div class='results'>
      <header class='results__header'>
        <h1>Your Result</h1>
      </header>

      <div class='results__score'>
        <span>76</span>
        of 100
      </div>

      <div class='results__body'>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Results;
