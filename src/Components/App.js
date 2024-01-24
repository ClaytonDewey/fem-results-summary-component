import React from 'react';
import { Results, Summary } from '.';

function App() {
  return (
    <>
      <main className='container'>
        <Results />
        <Summary />
      </main>
      <footer className='attribution visually-hidden'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          rel='noreferrer'
          target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://www.claytondewey.com' rel='noreferrer' target='_blank'>
          Clayton Dewey
        </a>
        .
      </footer>{' '}
    </>
  );
}

export default App;
