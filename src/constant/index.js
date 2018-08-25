// eslint-disable-next-line
export const icons = ['faPercentage', 'faBasketballBall', 'faCameraRetro', 'faNewspaper'];
export const categories = [
  {
    value: 12,
    name: 'music',
    icons: ['faMicrophoneAlt', 'faHeadphones', 'faMusic', 'faDrum', 'faDrumSteelPan'],
  },
  {
    name: 'book',
    value: 10,
    icons: ['faBook', 'faPen', 'faParagraph', 'faPaperClip', 'faNewsPaper'],
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
    icons: ['faHome', 'faGlobal', 'faArchway', 'faCrow', 'faAnchor'],
  },
  {
    name: 'general',
    value: 9,
    icons: ['faPercentage', 'faBasketballBall', 'faCameraRetro', 'faNewsPaper'],
  },
  {
    name: 'art',
    value: 24,
    icons: ['faBuilding', 'faBrush', 'faMagic', 'faPalette', 'faQuoteRight'],
  },
  {
    name: 'vehicles',
    value: 28,
    icons: ['faCar', 'faBus', 'faShip', 'faTruck', 'faSubway'],
  },
];

export const baseUrl = 'http://localhost:8000';
export const getQuestionsUrl = '/api/quiz?category=';
export const getCategoriesUrl = '/api/quiz/categories';


export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
