export default function getListStudentIds(arg) {
  if (typeof arg !== 'object') {
    return [];
  }
  return arg.map(({ id }) => id);
}
