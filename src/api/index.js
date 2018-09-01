import axios from 'axios';
import { getCategoriesUrl, getQuestionsUrl, baseUrl } from '../constant';


async function makeReq(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
}

export function getQuestions(category) {
  const url = `${baseUrl}${getQuestionsUrl}${category}`;
  return makeReq(url);
}

export async function getCategories() {
  const url = `${baseUrl}${getCategoriesUrl}`;
  return makeReq(url);
}
