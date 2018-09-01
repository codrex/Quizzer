import { combineReducers } from 'redux';
import defaultSate from './defaultSate';
import { SET_QUESTIONS, UPDATE_CURRENT_ROUND } from '../constant';

/* eslint-disable import/prefer-default-export */

function setTotalRounds(state = defaultSate.rounds.total, { type, payload = [] }) {
  switch (type) {
    case SET_QUESTIONS:
      return payload.length;
    default:
      return state;
  }
}

function setCurrentRound(state = defaultSate.rounds.current, { type, round = {} }) {
  const { current } = round;
  switch (type) {
    case UPDATE_CURRENT_ROUND:
      return current === undefined ? state : current;
    default:
      return state;
  }
}

function setPlayState(state = defaultSate.rounds.playState, { type, round = {} }) {
  const { playState } = round;
  switch (type) {
    case UPDATE_CURRENT_ROUND:
      return playState === undefined ? state : playState;
    default:
      return state;
  }
}

export const rounds = combineReducers({
  total: setTotalRounds,
  current: setCurrentRound,
  playState: setPlayState,
  defaultSate: defaultSate.rounds,
});
