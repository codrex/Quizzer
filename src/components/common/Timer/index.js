import React, { PureComponent } from 'react';
import { number, string, func } from 'prop-types';
import './timer.scss';

const ONE_SEC = 1000;
/* eslint-disable react/destructuring-assignment */
class Timer extends PureComponent {
  state = {
    dashOffset: 100 / this.props.time,
    currentTime: this.props.time,
    dashRate: 100 / this.props.time,
    dashArray: 28.27,
  };

  componentDidMount() {
    const { dashArray } = this.state;
    const dashOffset = Timer.getDashOffset(0, dashArray);
    this.setState({ dashOffset });
    this.updateTimer();
  }

  static getDashOffset(offset, dashArray) {
    const offsetInFloat = offset / 100;
    return dashArray * (1 - offsetInFloat);
  }

  updateTimer = () => {
    const setIntervalId = setInterval(() => {
      const { currentTime, dashRate, dashArray } = this.state;
      const { time, onTimeExpires } = this.props;
      if (currentTime <= 0) {
        onTimeExpires();
        clearInterval(setIntervalId);
      } else {
        const offset = (time - (currentTime - 1)) * dashRate;
        const dashOffset = Timer.getDashOffset(offset, dashArray);
        this.setState({ currentTime: currentTime - 1, dashOffset });
      }
    }, ONE_SEC);
  };

  render() {
    const { currentTime, dashArray, dashOffset } = this.state;
    const { topStrokeColor, bottomStrokeColor, textColor } = this.props;
    return (
      <div className="timer">
        <p className="timer__time number-font" style={{ color: textColor }}>
          {currentTime}
        </p>
        <svg
          aria-hidden="true"
          className="timer__circle"
          role="img"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle fill="none" stroke={bottomStrokeColor} />
          <circle
            fill="none"
            stroke={topStrokeColor}
            strokeDasharray={`${dashArray}`}
            strokeDashoffset={`${dashOffset}`}
            className="circle-two"
          />
        </svg>
      </div>
    );
  }
}

Timer.propTypes = {
  time: number,
  topStrokeColor: string,
  bottomStrokeColor: string,
  textColor: string,
  onTimeExpires: func,
};

Timer.defaultProps = {
  time: 60,
  topStrokeColor: '#e6e644',
  bottomStrokeColor: '#e6e6e6',
  textColor: '#000',
  onTimeExpires: () => {},
};
export default Timer;
