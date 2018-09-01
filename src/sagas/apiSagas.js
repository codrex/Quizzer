import { takeLatest, call, put } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import { getCategories, getQuestions } from '../api';
import {
  FETCH_CATEGORIES, FETCH_QUESTIONS, ROUTES, GENERAL_CATEGORY,
} from '../constant';
import {
  setCategories, setQuestions, fetchingEnd, fetchingStart, setCategory,
} from '../actions';
import { arrayToObject } from '../utils';

export function* fetchCategories() {
  try {
    let payload = yield call(getCategories);
    payload = arrayToObject(payload.data, 'value');
    yield put(setCategories(payload));
    yield put(setCategory(payload[GENERAL_CATEGORY]));
  } catch (error) {
    console.log(String(error));
  }
}

export function* fetchQuestions({ category }) {
  try {
    yield put(fetchingStart());
    const {
      data: { results },
    } = yield call(getQuestions, category);
    yield put(setQuestions(results));
    yield put(fetchingEnd());
    yield put(replace(ROUTES.question));
  } catch (error) {
    console.log(error);
  }
}
//= ===========Watchers===================//

export function* watchFetchCategories() {
  console.log('FETCH_CATEGORIES');
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}

export function* watchFetchQuestions() {
  yield takeLatest(FETCH_QUESTIONS, fetchQuestions);
}
