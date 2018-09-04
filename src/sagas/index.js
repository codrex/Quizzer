import { all, fork } from 'redux-saga/effects';
import { watchFetchCategories, watchFetchQuestions } from './apiSagas';
import {
  watchEnd,
  watchNext,
  watchStart,
  watchUpdateCategory,
  watchLocationChange,
  watchResetQuiz,
} from './quizSaga';

function* sagas() {
  yield all([
    fork(watchFetchCategories),
    fork(watchFetchQuestions),
    fork(watchEnd),
    fork(watchNext),
    fork(watchStart),
    fork(watchUpdateCategory),
    fork(watchLocationChange),
    fork(watchResetQuiz),
  ]);
}

export default sagas;
