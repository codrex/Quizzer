import React from 'react';
import { func } from 'prop-types';
import Screen from '../../common/Screen';
import Button from '../../common/Button';
import { icons } from '../../../constant';
import './start.scss';

function Start({ selectCategory }) {
  return (
    <Screen className="start" icons={icons}>
      <h1 className="header start__header">Quizzer</h1>
      <main className="start__main">
        <h2 className="start__lead-text"> How much do you think you know stuff?</h2>
        <p className="start__sub-text"> Take a short quiz and find out!</p>
        <Button text="Start quiz" handleClick={selectCategory} />
      </main>
      <footer className="start__footer">
        <p className="start__sub-text">Powered by</p>
        <h2 className="start__sub-text">Rexyz</h2>
      </footer>
    </Screen>
  );
}

Start.propTypes = {
  selectCategory: func.isRequired,
};

export default Start;
