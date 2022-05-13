import axios from 'axios';
import wrapPromise from './wrapPromise';

/**
 *
 * @param {string} url
 * @returns {promise}
 */
const fetchData = (url) => {
  const promise = axios.get(url);

  return wrapPromise(promise);
};

export default fetchData;
