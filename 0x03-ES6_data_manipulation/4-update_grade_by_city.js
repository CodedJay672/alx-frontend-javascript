export default function updateStudentGradeByCity(arg, city, newGrades) {
  return arg.filter(items => items.location === city).map(obj => {
    for (let x = 0; x < newGrades.length; x += 1) {
      if (obj.id === newGrades[x].studentId) {
        obj.grade = newGrades[x].grade;
        break;
      } else {
        obj.grade = 'N/A';
	break;
      }
    }
    return obj;
  });
}
