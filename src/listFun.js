// eslint-disable-next-line import/no-mutable-exports
export let ListArray = [];

const localList = JSON.parse(localStorage.getItem('ListArray'));
if (localList !== null) {
  ListArray = localList;
}

function saveTolocal() {
  localStorage.setItem('ListArray', JSON.stringify(ListArray));
}

// eslint-disable-next-line import/prefer-default-export
export function completeTask(task) {
  ListArray[task.value].isCompleted = task.checked;
  saveTolocal();
}

// eslint-disable-next-line import/prefer-default-export
export function addTask(value) {
  const obj = { id: ListArray.length, description: value, isCompleted: false };
  ListArray.push(obj);
  saveTolocal();
  return obj;
}

export function editTask(task) {
  const id = task.id.replace('des', '');
  ListArray[id].description = task.value;
  saveTolocal();
  return id;
}

export function deleteTask(task) {
  const id = task.id[6];
  ListArray.splice(id, 1);
  for (let i = 0; i < ListArray.length; i += 1) {
    ListArray[i].id = i;
  }
  const List = document.querySelectorAll('.list');
  const listGroup = document.querySelector('.list-group');
  listGroup.removeChild(List[id]);
  saveTolocal();
}

export function deleteAllFinishTask() {
  const result = ListArray.filter((b) => b.isCompleted === true).map((a) => a);
  for (let i = 0; i < result.length; i += 1) {
    ListArray.splice(result[i].id, 1);
    const List = document.querySelectorAll('.list');
    const listGroup = document.querySelector('.list-group');
    listGroup.removeChild(List[i]);
  }
  for (let i = 0; i < ListArray.length; i += 1) {
    ListArray[i].id = i;
    ListArray[i].isCompleted = false;
    const checkbox = document.querySelectorAll('.checkBox');
    for (let j = 0; j < checkbox.length; j += 1) {
      checkbox[i].checked = false;
    }
    saveTolocal();
  }
}
