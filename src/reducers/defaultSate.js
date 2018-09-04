import { STOP } from '../constant';

const state = {
  categories: [],
  category: {},
  questions: [],
  fetching: 0,
  rounds: {
    total: 0,
    current: 0,
    playState: STOP,
  },
  score: 0,
};
export default state;
