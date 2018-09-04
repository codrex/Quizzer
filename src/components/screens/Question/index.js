import React, { PureComponent } from 'react';
import {
  number, string, arrayOf, func, oneOf,
} from 'prop-types';
import isEqual from 'lodash.isequal';
import { decodeEscapedString } from '../../../utils';
import {
  PAUSE, PLAY, STOP, colors,
} from '../../../constant';

import Screen from '../../common/Screen';
import AnimatedIcon from '../../common/AnimatedIcon';
import Button from '../../common/Button';
import Timer from '../../common/Timer';

import './question.scss';

/* eslint-disable react/destructuring-assignment */

class Question extends PureComponent {
  static buildSelection(className = '', icon = '') {
    return {
      className,
      icon,
    };
  }

  timeOutId = 0;

  state = {
    selection: '',
    answer: '',
    options: this.props.options,
    time: this.props.time,
  };

  componentWillUnmount() {
    clearTimeout(this.timeOutId);
  }

  onOptionSelected = selection => () => {
    const { answer } = this.state;
    const { updateScore } = this.props;
    if (answer) return;
    if (selection === this.props.answer) updateScore(1);
    this.setState({ selection });
    this.handleTimeUp();
  };

  getSelectionClass = (option) => {
    const { selection, answer } = this.state;
    const { buildSelection } = Question;
    if (option === answer) return buildSelection('question__option--correct', 'faCheck');
    if (option === selection) return buildSelection('question__option--incorrect', 'faTimes');
    return '';
  };

  handleTimeUp = () => {
    const { answer, getNextQuestion } = this.props;
    this.setState({ answer, time: 0 });
    getNextQuestion();
  };

  resetQuiz = () => {
    const { resetQuiz } = this.props;
    this.setState({ answer: '' });
    resetQuiz();
  };

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps({ time: nextTime, options: nextOptions = [], answer }) {
    const { time, options = [] } = this.state;
    if (nextTime !== time) {
      this.setState({ time: nextTime });
    }

    if (!isEqual(options.sort(), nextOptions.sort())) {
      this.setState({ options: nextOptions });
    }

    if (answer !== this.props.answer) {
      this.setState({ answer: '' });
    }
  }

  renderIcons() {
    const { icons } = this.props;
    return icons.map(icon => <AnimatedIcon icon={icon} className="question__icon" key={icon} />);
  }

  renderTopSection() {
    const { number: questionNumber, playState } = this.props;
    const { time } = this.state;
    return (
      <div className="question__top">
        <div className="question__number number-font" data-number={`0${questionNumber}`}>
          {`0${questionNumber}`}
        </div>
        <Timer
          textColor="#fff"
          topStrokeColor="#fff"
          bottomStrokeColor="rgba(255,255,255, 0.2)"
          onTimeUp={this.handleTimeUp}
          time={time}
          playState={playState}
        />
        <div className="question__icons">{this.renderIcons()}</div>
      </div>
    );
  }

  renderBottomSection() {
    const { question } = this.props;
    const { options } = this.state;
    return (
      <div className="question__bottom">
        <p className="question__question">{decodeEscapedString(question)}</p>
        <ul className="question__options">
          {options.map((option) => {
            const { className = '' } = this.getSelectionClass(option);
            return (
              <div
                key={option}
                className={`question__option ${className}`}
                onClick={this.onOptionSelected(option)}
                role="presentation"
              >
                <p>{decodeEscapedString(option)}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  renderMenu() {
    const { gotoCategories, gotoHome, resetQuiz } = this.props;
    return (
      <div className="question__menu">
        <Button className="question__menu__btn" icon="faHome" handleClick={gotoHome} />
        <Button className="question__menu__btn" icon="faList" handleClick={gotoCategories} />
        <Button className="question__menu__btn" icon="faRedoAlt" handleClick={resetQuiz} />
      </div>
    );
  }

  render() {
    const { question, number: questionNumber } = this.props;
    return (
      <Screen className="question" bgColor={colors[questionNumber - 1]}>
        {this.renderTopSection()}
        {question && this.renderBottomSection()}
        {this.renderMenu()}
      </Screen>
    );
  }
}

Question.propTypes = {
  number: number.isRequired,
  icons: arrayOf(string),
  question: string.isRequired,
  options: arrayOf(string).isRequired,
  answer: string.isRequired,
  getNextQuestion: func,
  time: number,
  playState: oneOf([PLAY, PAUSE, STOP]).isRequired,
  gotoHome: func.isRequired,
  gotoCategories: func.isRequired,
  resetQuiz: func.isRequired,
  updateScore: func.isRequired,
};

Question.defaultProps = {
  icons: [],
  getNextQuestion: () => {},
  time: 30,
};

export default Question;
