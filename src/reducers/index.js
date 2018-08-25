import { combineReducers } from 'redux';
import { setCategories } from './categories';
import { setQuestions } from './questions';
import defaultState from './defaultSate';


const reducers = combineReducers({
  categories: setCategories,
  questions: setQuestions,
  defaultState,
});

export default reducers;
