import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(FirstName, lastName, fileName) {
  return Promise.all([signUpUser(FirstName, lastName), uploadPhoto(fileName)])
  .then(([arrayOfResult]) => {
    return [
      {
        status: 200,
        value: arrayOfResult[0]
      },
      {
        status: 200,
        value: arrayOfResult[1]
      }
    ]
  }).catch((error) => {
    return [
      {
        status: 404,
        value: error
      },
      {
        status: 404,
        value: error
      }
    ]
  })
}