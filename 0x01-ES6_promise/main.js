import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const res = handleResponseFromAPI(promise);

console.log(res);