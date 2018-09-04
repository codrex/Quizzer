// eslint-disable-next-line
export const icons = ['faPercentage', 'faBasketballBall', 'faCameraRetro', 'faNewspaper'];
export const colors = ['#2980b9', '#9b59b6', '#34495e', '#c79a38', '#e4744a'];
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CATEGORY = 'SET_CATEGORY';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const FETCHING_START = 'FETCHING/START';
export const FETCHING_END = 'FETCHING/END';
export const START_QUIZ = 'QUIZ/START';
export const END_QUIZ = 'QUIZ/END';
export const NEXT_QUIZ = 'QUIZ/NEXT';
export const RESET_QUIZ = 'QUIZ/RESET';
export const UPDATE_SCORE = 'SCORE/UPDATE';
export const RESET_SCORE = 'SCORE/RESET';
export const UPDATE_CURRENT_ROUND = 'ROUND/CURRENT/UPDATE';
export const ROUTE_CHANGED = '@@router/LOCATION_CHANGE';

export const ROUTES = {
  categories: '/categories',
  start: '/',
  end: '/end',
  question: '/question',
};

export const PLAY = 'PLAY';
export const STOP = 'STOP';
export const PAUSE = 'PAUSE';

export const baseUrl = 'http://localhost:8000';
export const getQuestionsUrl = '/api/quiz?category=';
export const getCategoriesUrl = '/api/quiz/categories';

export const GENERAL_CATEGORY = '9';
export const CATEGORY_KEY = 'CATEGORY';
