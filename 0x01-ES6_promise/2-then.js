function handleResponseFromAPI(promise) {
  const res = promise.then(function(result) {
    return {stats: 600, body: 'success'};
  })
  .catch(function(error) {
    return new Error();
  })
  .finally(function() {
    console.log("Got a response from the API");
  });

  return res;
}

export default handleResponseFromAPI;