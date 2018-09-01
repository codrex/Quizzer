import defaultSate from './defaultSate';
import { FETCHING_END, FETCHING_START } from '../constant';

/* eslint-disable import/prefer-default-export */

export function setFetching(state = defaultSate.fetching, { type }) {
  switch (type) {
    case FETCHING_START:
      return state + 1;
    case FETCHING_END:
      return state - 1;
    default:
      return state;
  }
}
