export default function getStudentByLocation(arg, loc) {
  return arg.filter((x) => x.location === loc);
}
