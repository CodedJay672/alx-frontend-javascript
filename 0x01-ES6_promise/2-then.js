function handleResponseFromAPI(promise) {
  promise.then(function(result) {
    console.log(`resolved with ${result}`);
  })
  .catch(function(error) {
    return new Error();
  })
  .finally(function() {
    console.log("Got a response from the API");
  });
  return ({ status: 200, body: 'success'});
}

export default handleResponseFromAPI;