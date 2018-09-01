import defaultSate from './defaultSate';
import { SET_CATEGORIES, SET_CATEGORY } from '../constant';


export function setCategories(state = defaultSate.categories, { type, payload }) {
  switch (type) {
    case SET_CATEGORIES:
      return payload;
    default:
      return state;
  }
}

export function setCategory(state = defaultSate.category, { type, category }) {
  switch (type) {
    case SET_CATEGORY:
      return category;
    default:
      return state;
  }
}
