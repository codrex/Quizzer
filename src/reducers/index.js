import { combineReducers } from 'redux';
import { setCategories, setCategory } from './categories';
import { setQuestions } from './questions';
import { setFetching } from './fetching';
import { rounds } from './rounds';
import { updateScore } from './score';
import { setError } from './error';
import defaultState from './defaultSate';

const reducers = combineReducers({
  categories: setCategories,
  questions: setQuestions,
  fetching: setFetching,
  category: setCategory,
  score: updateScore,
  error: setError,
  rounds,
  defaultState,
});

export default reducers;
