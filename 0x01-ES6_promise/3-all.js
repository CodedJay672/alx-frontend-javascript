// import uploadImage and createUser files
import { uploadPhoto, createUser } from "./utils";


function handleProfileSignup(){
  // using Promise.all() call the createUser and UploadPhoto
  //functions in utils.

  // return the body object value and first/last names from
  // createUser()
  Promise.all([uploadPhoto(), createUser()]).then((arrayOfResults) => {
    // do something
    // try console.log
    console.log(`${arrayOfResults[0].body} ${arrayOfResults[1].firstName} ${arrayOfResults[1].lastName}`);
  }).catch((e) => {
    console.log("Signup system offline")
  })
}

export default handleProfileSignup;