export default function updateStudentGradeByCity(arg, city, newGrades) {
  return arg.filter((items) => items.location === city).map((obj) => {
    const myObj = obj;
    for (let x = 0; x < newGrades.length; x += 1) {
      if (myObj.id === newGrades[x].studentId) {
        myObj.grade = newGrades[x].grade;
        break;
      } else {
        myObj.grade = 'N/A';
        break;
      }
    }
    return myObj;
  });
}
