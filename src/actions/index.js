import {
  SET_CATEGORIES,
  SET_QUESTIONS,
  FETCH_CATEGORIES,
  FETCH_QUESTIONS,
  FETCHING_END,
  FETCHING_START,
  START_QUIZ,
  END_QUIZ,
  NEXT_QUIZ,
  UPDATE_CURRENT_ROUND,
  SET_CATEGORY,
  RESET_QUIZ,
  UPDATE_SCORE,
  RESET_SCORE,
} from '../constant';

export function setCategories(payload) {
  return {
    type: SET_CATEGORIES,
    payload,
  };
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  };
}

export function setQuestions(payload) {
  return {
    type: SET_QUESTIONS,
    payload,
  };
}

export function updateScore(score) {
  return {
    type: UPDATE_SCORE,
    score,
  };
}
export function resetScore() {
  return {
    type: RESET_SCORE,
  };
}

export function fetchCategories() {
  return { type: FETCH_CATEGORIES };
}

export function fetchQuestions(category) {
  return { type: FETCH_QUESTIONS, category };
}

export function updateCurrentRound(round) {
  return { type: UPDATE_CURRENT_ROUND, round };
}

export function fetchingStart() {
  return { type: FETCHING_START };
}

export function fetchingEnd() {
  return { type: FETCHING_END };
}

export function startQuiz() {
  return { type: START_QUIZ };
}

export function endQuiz() {
  return { type: END_QUIZ };
}

export function nextQuiz() {
  return { type: NEXT_QUIZ };
}

export function resetQuiz() {
  return { type: RESET_QUIZ };
}
