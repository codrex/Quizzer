import React from 'react';
import Screen from '../../common/Screen';
import Button from '../../common/Button';
import { icons } from '../../../constant';
import './start-screen.scss';

function StartScreen() {
  return (
    <Screen className="start-screen" icons={icons}>
      <h1 className="header start-screen__header">Quizzer</h1>
      <main className="start-screen__main">
        <h2 className="start-screen__lead-text"> How much do you think you know stuff?</h2>
        <p className="start-screen__sub-text"> Take a short quiz and find out!</p>
        <Button text="Start quiz" />
      </main>
      <footer className="start-screen__footer">
        <p className="start-screen__sub-text">Powered by</p>
        <h2 className="start-screen__sub-text">Rexyz</h2>
      </footer>
    </Screen>
  );
}

export default StartScreen;
