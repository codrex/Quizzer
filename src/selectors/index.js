import { createSelector } from 'reselect';
import { formatQuestion } from '../utils';

const getQuestions = state => state.questions;
const getCurrentRound = state => state.rounds.current;
const getPlayState = state => state.rounds.playState;
const getFetching = state => state.fetching;
const getCategory = state => state.category;

export const getCategories = state => Object.values(state.categories);
export const getQuestion = createSelector(
  [getQuestions, getCurrentRound, getCategory, getPlayState],
  (questions, round, { icons }, playState) => {
    const question = questions[round - 1] || {};
    return {
      ...formatQuestion(question),
      number: round,
      icons,
      playState,
    };
  },
);

export const getLoadingState = createSelector([getFetching], fetching => fetching > 0);
