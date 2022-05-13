/**
 *
 * @param {object} promise
 * @returns {function}
 */
const wrapPromise = (promise) => {
  // initial 'state' of the promise object
  let status = 'pending';
  let response;

  // Resolves the promise object
  // If successful, update status to success and store response
  // if failed, update status to error and store error
  // Need this function to 'throw' a promise to inform React.Suspense that it is trying resolve
  const suspense = async () => {
    try {
      response = await promise;
      status = 'success';
    } catch (err) {
      status = 'error';
      response = err;
    }
  };

  // React.Suspense will be expecting to invoke a 'read' function to receive a promise to
  // determine what to do (loading, error, success; show component)
  // throw promises to Suspense if status is pending or when an error occurs
  // return a promise if successful
  function read() {
    switch (status) {
      case 'pending':
        console.log('pending');
        throw suspense();
      case 'error':
        throw response;
      default:
        console.log('hio');
        return response;
    }
  }

  return { read };
};

export default wrapPromise;
