import React, { PureComponent } from 'react';
import { func, number } from 'prop-types';
import Screen from '../../common/Screen';
import Button from '../../common/Button';
import AnimatedIcon from '../../common/AnimatedIcon';
import { icons } from '../../../constant';
import './end.scss';

class End extends PureComponent {
  getIcon() {
    const { score } = this.props;
    if (score <= 2) return 'faFrown';
    if (score <= 4) return 'faMeh';
    if (score === 5) return 'faSmile';
    return 'faSmile';
  }

  render() {
    const {
      gotoCategories, gotoHome, resetQuiz, score = 0,
    } = this.props;
    return (
      <Screen className="end" icons={icons}>
        <AnimatedIcon icon={this.getIcon()} className="end__icon" />
        <p className="end__text">
          You scored
          {` ${score} `}
          points
        </p>
        <div className="end__buttons">
          <Button text="play again" handleClick={resetQuiz} icon="faRedoAlt" />
          <Button text="Select category" handleClick={gotoCategories} icon="faList" />
          <Button text="Home screen" handleClick={gotoHome} icon="faHome" />
        </div>
      </Screen>
    );
  }
}

End.propTypes = {
  score: number.isRequired,
  gotoHome: func.isRequired,
  gotoCategories: func.isRequired,
  resetQuiz: func.isRequired,
};

export default End;
