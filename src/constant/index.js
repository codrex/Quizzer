// eslint-disable-next-line
export const icons = ['faPercentage', 'faBasketballBall', 'faCameraRetro', 'faNewspaper'];
export const categories = [
  {
    value: 12,
    name: 'music',
    icons: ['faMicrophoneAlt', 'faHeadphones', 'faMusic', 'faAudioDescription', 'faPlay'],
  },
  {
    name: 'book',
    value: 10,
    icons: ['faBook', 'faPencilAlt', 'faParagraph', 'faPaperclip', 'faNewspaper'],
  },
  {
    name: 'film',
    value: 11,
    icons: ['faFilm', 'faCameraRetro', 'faImages', 'faMusic', 'faVideo'],
  },
  {
    name: 'computers',
    value: 18,
    icons: ['faLaptop', 'faHdd', 'faServer', 'faMemory', 'faDatabase'],
  },
  {
    name: 'sport',
    value: 21,
    icons: ['faBasketballBall', 'faFootballBall', 'faDumbbell', 'faFutbol', 'faTableTennis'],
  },
  {
    name: 'mathematics',
    value: 19,
    icons: ['faDivide', 'faEquals', 'faPercentage', 'faPlus', 'faTimes'],
  },
  {
    name: 'history',
    value: 23,
    icons: ['faHome', 'faGlobe', 'faArchive', 'faCrow', 'faAnchor'],
  },
  {
    name: 'general',
    value: 9,
    icons: ['faPercentage', 'faBasketballBall', 'faCameraRetro', 'faNewspaper', 'faHome'],
  },
  {
    name: 'art',
    value: 24,
    icons: ['faBuilding', 'faEraser', 'faMagic', 'faPalette', 'faQuoteRight'],
  },
  {
    name: 'vehicles',
    value: 28,
    icons: ['faCar', 'faBus', 'faShip', 'faTruck', 'faSubway'],
  },
];

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
export const UPDATE_CURRENT_ROUND = 'ROUND/CURRENT/UPDATE';
export const ROUTE_CHANGED = '@@router/LOCATION_CHANGE';

export const ROUTES = {
  categories: '/categories',
  start: '/',
  question: '/question',
};

export const PLAY = 'PLAY';
export const STOP = 'STOP';
export const PAUSE = 'PAUSE';

export const baseUrl = 'http://localhost:8000';
export const getQuestionsUrl = '/api/quiz?category=';
export const getCategoriesUrl = '/api/quiz/categories';

export const GENERAL_CATEGORY = '9';
