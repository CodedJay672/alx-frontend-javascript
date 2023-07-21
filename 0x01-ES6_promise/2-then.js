function handleResponseFromAPI(promise) {
  return promise.then(() => { 
      return {status: 200, body: 'success' };
    })
    .catch(() => new Error('Oops! something broke'))
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
