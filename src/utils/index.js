/* eslint-disable camelcase */

function getRandomNumber(start = 0, end = 1) {
  return Math.floor(Math.random() * end) + start;
}
export function formatQuestion(question) {
  const { incorrect_answers = [], correct_answer, ...rest } = question;
  const randomNum = getRandomNumber(0, incorrect_answers.length);
  const options = [...incorrect_answers];
  options.splice(randomNum, 0, correct_answer);
  return {
    ...rest,
    options,
    answer: correct_answer,
  };
}

export function arrayToObject(array, key) {
  let obj = {};
  if (Array.isArray(array)) {
    obj = array.reduce((acc, value) => ({ ...acc, [value[key]]: value }), {});
  }
  return obj;
}

export function decodeEscapedString(eString) {
  const parser = new window.DOMParser();
  const dom = parser.parseFromString(eString, 'text/html');
  const decodedString = dom.body.textContent;
  if (typeof decodedString !== 'string') return '';
  return decodedString;
}

export function saveToLocalStorage(key = '', value = '') {
  window.localStorage.setItem(key, value);
}

export function queryLocalStorage(key = '') {
  const value = window.localStorage.getItem(key);
  return value || '';
}
