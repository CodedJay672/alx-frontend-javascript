export default function getStudentIdsSum(arg) {
  return arg.reduce(
    (accumulator, obj) => accumulator + obj.id, 0,
  );
}
