import defaultSate from './defaultSate';
import { ERROR_OCCURRED } from '../constant';

/* eslint-disable import/prefer-default-export */

export function setError(state = defaultSate.error, { type, name, error }) {
  switch (type) {
    case ERROR_OCCURRED:
      return { ...state, [name]: error };
    default:
      return state;
  }
}
