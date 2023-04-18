export default function taskBlock(trueOrFalse) {
  let task;
  let task2;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  task = false;
  task2 = true;

  return [task, task2];
}
