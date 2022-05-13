import wrapPromise from './wrapPromise';
import axios from 'axios';

/**
 * 
 * @param {string} url 
 * @returns {promise}
 */
const fetchData = (url) => {
  const promise = axios.get(url);

  return wrapPromise(promise);
}

export default fetchData;