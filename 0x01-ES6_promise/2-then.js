function handleResponseFromAPI(promise) {
  return promise.then(function(result) {
    return {stats: 600, body: 'success'};
  })
  .catch(function(error) {
    return new Error();
  })
  .finally(function() {
    console.log("Got a response from the API");
  });
}

export default handleResponseFromAPI;