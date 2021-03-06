import { takeLatest, call, put } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import { getCategories, getQuestions } from '../api';
import {
  FETCH_CATEGORIES,
  FETCH_QUESTIONS,
  ROUTES,
  GENERAL_CATEGORY,
  CATEGORY_KEY,
} from '../constant';
import {
  setCategories,
  setQuestions,
  fetchingEnd,
  fetchingStart,
  setCategory,
  setError,
} from '../actions';
import { arrayToObject, queryLocalStorage } from '../utils';

export function* fetchCategories() {
  try {
    let payload = yield call(getCategories);
    payload = arrayToObject(payload.data, 'value');
    const category = queryLocalStorage(CATEGORY_KEY) || GENERAL_CATEGORY;
    yield put(setCategories(payload));
    yield put(setCategory(payload[category]));
  } catch (error) {
    yield put(
      setError(ROUTES.categories, { message: 'Error occurred while fetching categories', error }),
    );
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
    yield put(
      setError(ROUTES.question, { message: 'Error occurred while fetching questions', error }),
    );
  }
}
//= ===========Watchers===================//

export function* watchFetchCategories() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}

export function* watchFetchQuestions() {
  yield takeLatest(FETCH_QUESTIONS, fetchQuestions);
}
