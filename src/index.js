import './style.css';
import { completeTask } from './listMethode.js';

const listGroup = document.querySelector('.list-group');
let ListArray = [
  { id: 0, description: 'task number 1', isCompleted: false },
  { id: 1, description: 'task number 2', isCompleted: false },
  { id: 2, description: 'task number 3', isCompleted: false },
];

function AddListItem() {
  for (let i = 0; i < ListArray.length; i += 1) {
    const list = document.createElement('li');
    const checkBox = document.createElement('input');
    const span = document.createElement('span');
    const move = document.createElement('a');
    const icon = document.createElement('i');
    list.classList.add('list-group-item');
    checkBox.classList.add('form-check-input');
    checkBox.classList.add('me-1');
    checkBox.classList.add('checkBox');
    icon.classList.add('fa');
    icon.classList.add('fa-ellipsis-v');
    checkBox.type = 'checkbox';
    span.innerHTML = ListArray[i].description;
    move.href = '#';
    checkBox.value = ListArray[i].id;
    checkBox.checked = ListArray[i].isCompleted;
    move.appendChild(icon);
    list.appendChild(checkBox);
    list.appendChild(span);
    list.appendChild(move);
    listGroup.appendChild(list);
  }
}

function checkBox() {
  const checkboxAll = document.querySelectorAll('.checkBox');
  for (let i = 0; i < checkboxAll.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    checkboxAll[i].addEventListener('click', () => { completeTask(checkboxAll[i], ListArray); });
  }
}

window.addEventListener('load', () => {
  const localList = JSON.parse(localStorage.getItem('listArray'));
  if (localList !== null) {
    ListArray = localList;
  }
  AddListItem();
  checkBox();
});
