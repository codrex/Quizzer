import { combineReducers } from 'redux';
import { setCategories, setCategory } from './categories';
import { setQuestions } from './questions';
import { setFetching } from './fetching';
import { rounds } from './rounds';
import defaultState from './defaultSate';


const reducers = combineReducers({
  categories: setCategories,
  questions: setQuestions,
  fetching: setFetching,
  category: setCategory,
  rounds,
  defaultState,
});

export default reducers;
