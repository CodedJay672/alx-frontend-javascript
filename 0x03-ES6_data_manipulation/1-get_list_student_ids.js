export default function getListStudentIds(arg) {
  if (arg instanceof Array) {
    return arg.map(({ id }) => id);
  }
  return [];
}
