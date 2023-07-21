function handleResponseFromAPI(promise) {
  promise.then((e) => {
    return { status: 200, body: success };
  }).then((e) => {
    console.log("Got a response from the API");
  }).catch((e) => {
    new Error();
  })
}