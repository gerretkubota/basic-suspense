/**
 * 
 * @param {object} promise 
 * @returns {function}
 */
const wrapPromise = (promise) => {
  // initial 'state' of promise
  // will be updated accordingly
  let status = 'pending';
  let response;

  // function that will be thrown to React.Suspense initially, to indicate
  // that the promise is in the process of returning a value from an async call
  const suspense = async () => {
    try {
      // if successful store result and update status
      response = await promise;
      status = 'success';
    } catch (err) {
      // if failed store error and update status
      status = 'error';
      response = err;
    }
  }

  // this function will be captured and indicate React.Suspense
  // what the process is for resolving the promise object
  // 'throwing' a promise informs React.Suspense that it's in the process of working with a
  // process that has not been fulfilled (if no error occurs). This allows React.Suspense
  // to render the fallback component
  const read = () => {
    switch (status) {
      case 'pending':
        throw suspense();
      case 'error':
        throw response;
      default:
        return response;
    }
  }

  return { read }
};

export default wrapPromise;