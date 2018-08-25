import defaultSate from './defaultSate';
import { SET_QUESTIONS } from '../constant';

/* eslint-disable import/prefer-default-export */

export function setQuestions(initialState = defaultSate.questions, { type, payload }) {
  const nextState = {
    [SET_QUESTIONS]: payload,
  };
  return nextState[type] || initialState;
}
