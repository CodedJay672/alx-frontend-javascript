// import uploadImage and createUser files
import { uploadPhoto, createUser } from "./utils";


function handleProfileSignup(){
  // using Promise.all() call the createUser and UploadPhoto
  //functions in utils.

  // return the body object value and first/last names from
  // createUser()
  Promise.all([uploadPhoto(), createUser()]).then((arrayOfResults) => {
    arrayOfResults.forEach((item) => {
      if (item.get['body']) console.log(item.body);
      if (item.get['firstName']) console.log(item.firstName);
      if (item.get['lastName']) console.log(item.lastName);
    })
  }).catch((e) => {
    console.log("Signup system offline")
  })
}

export default handleProfileSignup;



