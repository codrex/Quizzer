import {
  SET_CATEGORIES, SET_QUESTIONS,
} from '../constant';


export function setCategories(payload) {
  return {
    type: SET_CATEGORIES,
    payload,
  };
}

export function setQuestions(payload) {
  return {
    type: SET_QUESTIONS,
    payload,
  };
}

export function dispatchAction(type) {
  return { type };
}
