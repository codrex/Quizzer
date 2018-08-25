import React, { PureComponent } from 'react';
import { number, string, arrayOf } from 'prop-types';
import Screen from '../../common/Screen';
import AnimatedIcon from '../../common/AnimatedIcon';
import Timer from '../../common/Timer';
import './question.scss';

class Question extends PureComponent {
  state = {
    // hasAnswer: false,
    // hasCorrectAnswer: false,
    selectedOptionClass: '',
    selectedOption: '',
  };

  onOptionSelected = option => () => {
    const { answer } = this.props;
    const selectedOptionClass = answer === option ? 'question__option--correct' : 'question__option--incorrect';
    this.setState({ selectedOptionClass, selectedOption: option });
  };

  renderIcons() {
    const { icons } = this.props;
    return icons.map(icon => <AnimatedIcon icon={icon} className="question__icon" />);
  }

  renderTopSection() {
    const { questionNumber } = this.props;
    return (
      <div className="question__top">
        {this.renderIcons()}
        <div className="question__number number-font" data-number={`0${questionNumber}`}>
          {`0${questionNumber}`}
        </div>
        <Timer textColor="#fff" topStrokeColor="#fff" bottomStrokeColor="rgba(255,255,255, 0.2)" />
      </div>
    );
  }

  renderBottomSection() {
    const { question, options } = this.props;
    const { selectedOptionClass, selectedOption } = this.state;
    return (
      <div className="question__bottom">
        <p className="question__question">{question}</p>
        <ul className="question__options">
          {options.map(option => (
            <div
              className={`question__option ${selectedOption === option ? selectedOptionClass : ''}`}
              onClick={this.onOptionSelected(option)}
              role="presentation"
            >
              <p>
                {option}
                <AnimatedIcon icon="faCheck" />
              </p>
            </div>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { pageColor } = this.props;
    return (
      <Screen className="question" bgColor={pageColor}>
        {this.renderTopSection()}
        {this.renderBottomSection()}
      </Screen>
    );
  }
}

Question.propTypes = {
  questionNumber: number.isRequired,
  icons: arrayOf(string).isRequired,
  question: string.isRequired,
  options: arrayOf(string).isRequired,
  pageColor: string,
  answer: string.isRequired,
};

Question.defaultProps = {
  pageColor: 'crimson',
};

export default Question;
