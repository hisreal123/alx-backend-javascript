export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; //eslint-disable-line no-unused-
    const task2 = false;
  }

  return [task, task2];
}