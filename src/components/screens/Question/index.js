import React, { PureComponent } from 'react';
import {
  number, string, arrayOf, func, oneOf,
} from 'prop-types';
import isEqual from 'lodash.isequal';
import Screen from '../../common/Screen';
import AnimatedIcon from '../../common/AnimatedIcon';
import Timer from '../../common/Timer';
import { decodeEscapedString } from '../../../utils';
import { PAUSE, PLAY, STOP } from '../../../constant';
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

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps({ time: nextTime, options: nextOptions = [] }) {
    const { time, options = [] } = this.state;
    if (nextTime !== time) {
      this.setState({ time: nextTime });
    }
    if (!isEqual(options.sort(), nextOptions.sort())) {
      this.setState({ options: nextOptions });
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
        {this.renderIcons()}
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
            const { className, icon } = this.getSelectionClass(option);
            return (
              <div
                key={option}
                className={`question__option ${className}`}
                onClick={this.onOptionSelected(option)}
                role="presentation"
              >
                <p>
                  {decodeEscapedString(option)}
                  {icon && <AnimatedIcon icon={icon} />}
                </p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    const { pageColor, question } = this.props;
    return (
      <Screen className="question" bgColor={pageColor}>
        {this.renderTopSection()}
        {question && this.renderBottomSection()}
      </Screen>
    );
  }
}

Question.propTypes = {
  number: number.isRequired,
  icons: arrayOf(string),
  question: string.isRequired,
  options: arrayOf(string).isRequired,
  pageColor: string,
  answer: string.isRequired,
  getNextQuestion: func,
  time: number,
  playState: oneOf([PLAY, PAUSE, STOP]).isRequired,
};

Question.defaultProps = {
  pageColor: 'crimson',
  icons: [],
  getNextQuestion: () => {},
  time: 30,
};

export default Question;
