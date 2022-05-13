import axios from 'axios';
import wrapPromise from './wrapPromise';

const fetchData = (url) => {
  const promise = axios.get(url);

  return wrapPromise(promise);
};

export default fetchData;
