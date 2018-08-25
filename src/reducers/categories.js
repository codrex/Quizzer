import defaultSate from './defaultSate';
import { SET_CATEGORIES } from '../constant';

/* eslint-disable import/prefer-default-export */

export function setCategories(initialState = defaultSate.categories, { type, payload }) {
  const nextState = {
    [SET_CATEGORIES]: payload,
  };
  return nextState[type] || initialState;
}
