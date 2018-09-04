import { takeLatest, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { replace } from 'connected-react-router';
import {
  START_QUIZ,
  END_QUIZ,
  NEXT_QUIZ,
  FETCH_QUESTIONS,
  PLAY,
  STOP,
  ROUTE_CHANGED,
  ROUTES,
  GENERAL_CATEGORY,
  RESET_QUIZ,
  CATEGORY_KEY,
} from '../constant';
import {
  updateCurrentRound, setCategory, endQuiz, fetchQuestions, resetScore,
} from '../actions';
import { queryLocalStorage, saveToLocalStorage } from '../utils';

const round = {
  current: 0,
  playState: STOP,
};
const categoryToFetch = queryLocalStorage(CATEGORY_KEY) || GENERAL_CATEGORY;


function shouldPerformActionOnRouteChange(payload, route) {
  const {
    location: { pathname },
  } = payload;
  return pathname !== route;
}

export function* start() {
  const nextRound = {
    playState: PLAY,
  };
  yield put(updateCurrentRound(nextRound));
}

export function* resetQuiz() {
  yield put(fetchQuestions(categoryToFetch));
  yield put(updateCurrentRound(round));
  yield put(resetScore());
}

export function* next() {
  const { current, total } = yield select(state => state.rounds);
  yield put(endQuiz());
  const waitTime = current === 0 ? 0 : 2000;
  yield delay(waitTime);

  if (current === total) {
    yield put(replace(ROUTES.end));
    yield put(updateCurrentRound(round));
    return;
  }

  const nextRound = {
    current: current + 1,
    playState: PLAY,
  };
  if (nextRound.current <= total) {
    yield put(updateCurrentRound(nextRound));
  }
}

export function* end() {
  const nextRound = {
    playState: STOP,
  };
  yield put(updateCurrentRound(nextRound));
}

export function* updateCategory({ category }) {
  const currentCategory = yield select(state => state.categories[category]);
  if (currentCategory) {
    saveToLocalStorage(CATEGORY_KEY, category);
    yield put(setCategory(currentCategory));
  }
}

export function* categoryPageReset({ payload }) {
  const { categories } = ROUTES;
  if (shouldPerformActionOnRouteChange(payload, categories)) return;
  yield put(resetScore());
  yield put(updateCurrentRound(round));
}

export function* initializeQuestionPage({ payload }) {
  const { question } = ROUTES;
  if (shouldPerformActionOnRouteChange(payload, question)) return;
  const hasQuestions = yield select(state => state.questions.length > 0);
  if (!hasQuestions) {
    yield put(fetchQuestions(categoryToFetch));
    return;
  }
  yield next();
}

//= ===========Watchers===================//

export function* watchStart() {
  yield takeLatest(START_QUIZ, start);
}
export function* watchEnd() {
  yield takeLatest(END_QUIZ, end);
}
export function* watchNext() {
  yield takeLatest(NEXT_QUIZ, next);
}

export function* watchUpdateCategory() {
  yield takeLatest(FETCH_QUESTIONS, updateCategory);
}

export function* watchResetQuiz() {
  yield takeLatest(RESET_QUIZ, resetQuiz);
}

export function* watchLocationChange() {
  yield takeLatest(ROUTE_CHANGED, categoryPageReset);
  yield takeLatest(ROUTE_CHANGED, initializeQuestionPage);
}
