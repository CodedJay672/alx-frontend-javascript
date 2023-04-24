export default function getListStudentIds(arg) {
  if (typeof arg !== 'object' || arg.length === 0) {
    return [];
  }
  return arg.map(({ id }) => id);
}
