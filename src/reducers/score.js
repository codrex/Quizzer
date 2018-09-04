import defaultSate from './defaultSate';
import { UPDATE_SCORE, RESET_SCORE } from '../constant';

/* eslint-disable import/prefer-default-export */

export function updateScore(state = defaultSate.score, { type, score }) {
  switch (type) {
    case UPDATE_SCORE:
      return state + score;
    case RESET_SCORE:
      return 0;
    default:
      return state;
  }
}
