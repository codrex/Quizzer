import React, { PureComponent } from 'react';
import {
  number, string, func, oneOf,
} from 'prop-types';
import { PAUSE, PLAY, STOP } from '../../../constant';
import './timer.scss';

const ONE_SEC = 1000;
const DASH_ARRAY = 28.27;

/* eslint-disable react/destructuring-assignment, camelcase */
class Timer extends PureComponent {
  timeOutId = 0;

  static getDashOffset(offset, dashArray) {
    const offsetInFloat = offset / 100;
    return dashArray * (1 - offsetInFloat);
  }

  state = {
    dashOffset: DASH_ARRAY,
    currentTime: this.props.time,
    dashRate: 100 / this.props.time,
    playState: this.props.playState,
  };

  componentDidMount() {
    const { playState } = this.state;
    this.handleTimerState(playState, true);
  }

  componentWillUnmount() {
    clearInterval(this.timeOutId);
  }

  startTimerUpdate = () => {
    const { time } = this.props;
    const { currentTime } = this.state;
    this.setState({ currentTime: currentTime || time });
    this.timeOutId = this.updateTimer();
  };

  stopTimer = (init = false) => {
    const { onTimeUp } = this.props;
    this.setState({ dashOffset: DASH_ARRAY, currentTime: 0 }, () => {
      clearInterval(this.timeOutId);
      console.log('oooofoooofofofppp====================', this.state);
    });
    if (!init) onTimeUp();
  };

  updateTimer = () => {
    const setIntervalId = setInterval(() => {
      const { currentTime, dashRate } = this.state;
      const { time } = this.props;
      if (currentTime <= 0) {
        this.stopTimer();
      } else {
        const offset = (time - (currentTime - 1)) * dashRate;
        const dashOffset = Timer.getDashOffset(offset, DASH_ARRAY);
        this.setState({ currentTime: currentTime - 1, dashOffset });
      }
    }, ONE_SEC);
    return setIntervalId;
  };

  setPlayState = (playState, cb, init = false) => {
    this.setState({ playState }, () => {
      if (cb) cb(playState, init);
    });
  };

  handleTimerState = (playState, init) => {
    switch (playState) {
      case STOP:
        this.stopTimer(init);
        break;
      case PLAY:
        this.startTimerUpdate();
        break;
      case PAUSE:
        clearInterval(this.timeOutId);
        break;
      default:
        break;
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { playState, time } = nextProps;
    if (playState !== this.state.playState) {
      this.setPlayState(playState, this.handleTimerState, true);
    }
    const { currentTime } = this.state;
    if (currentTime === 0 || time === 0) {
      this.setState({ currentTime: time });
    }
  }

  render() {
    const { currentTime, dashOffset } = this.state;
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
            strokeDasharray={`${DASH_ARRAY}`}
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
  onTimeUp: func,
  playState: oneOf([PLAY, PAUSE, STOP]),
};

Timer.defaultProps = {
  time: 60,
  topStrokeColor: '#e6e644',
  bottomStrokeColor: '#e6e6e6',
  textColor: '#000',
  onTimeUp: () => {},
  playState: STOP,
};
export default Timer;
