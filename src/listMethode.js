function saveTolocal(listArray) {
  localStorage.setItem('listArray', JSON.stringify(listArray));
}

// eslint-disable-next-line import/prefer-default-export
export function completeTask(task, listArray) {
  listArray[task.value].isCompleted = task.checked;
  saveTolocal(listArray);
}
