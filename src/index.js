import './style.css';
import {
  completeTask, addTask, editTask, deleteTask, deleteAllFinishTask, ListArray,
} from './listFun.js';

const listGroup = document.querySelector('.list-group');
const inputTask = document.querySelector('.addList');
const addToList = document.getElementById('addToList');
const clearAll = document.querySelector('.clear');

function AddListItem(listObj) {
  const list = document.createElement('li');
  const checkBox = document.createElement('input');
  const editInput = document.createElement('input');
  const move = document.createElement('a');
  const icon = document.createElement('i');

  list.classList.add('list-group-item');
  checkBox.classList.add('form-check-input');
  checkBox.classList.add('me-1');
  checkBox.classList.add('checkBox');
  icon.classList.add('fa');
  icon.classList.add('fa-ellipsis-v');
  icon.classList.add('deleteButton');
  editInput.classList.add('description');
  list.classList.add('list');

  checkBox.type = 'checkbox';
  move.href = '#';
  checkBox.value = listObj.id;
  checkBox.checked = listObj.isCompleted;
  editInput.value = listObj.description;
  editInput.id = `des${listObj.id}`;
  icon.id = `delete${listObj.id}`;

  move.appendChild(icon);
  list.appendChild(checkBox);
  list.appendChild(editInput);
  list.appendChild(move);
  listGroup.appendChild(list);
}

function loadData() {
  const localList = JSON.parse(localStorage.getItem('listArray'));
  if (localList !== null) {
    ListArray = localList;
  }
  for (let i = 0; i < ListArray.length; i += 1) {
    AddListItem(ListArray[i]);
  }
}

function checkBox() {
  const checkboxAll = document.querySelectorAll('.checkBox');
  for (let i = 0; i < checkboxAll.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    checkboxAll[i].addEventListener('input', () => { completeTask(checkboxAll[i]); });
  }
}

function clickSpan() {
  const description = document.querySelectorAll('.description');
  const deleteButton = document.querySelectorAll('.deleteButton');
  if (description !== null) {
    for (let i = 0; i < description.length; i += 1) {
      description[i].addEventListener('focus', () => {
        document.getElementById(`delete${i}`).classList.remove('fa-ellipsis-v');
        document.getElementById(`delete${i}`).classList.add('fa-trash');
      });
      description[i].addEventListener('blur', () => {
        document.getElementById(`delete${i}`).classList.add('fa-ellipsis-v');
        document.getElementById(`delete${i}`).classList.remove('fa-trash');
      });
      description[i].addEventListener('input', () => {
        editTask(description[i]);
      });
    }
  }
  if (deleteButton !== null) {
    // eslint-disable-next-line no-loop-func
    for (let i = 0; i < deleteButton.length; i += 1) {
      deleteButton[i].addEventListener('click', () => {
        deleteTask(deleteButton[i]);
      });
    }
  }
}

addToList.addEventListener('click', () => {
  const obj = addTask(inputTask.value);
  AddListItem(obj);
  clickSpan();
});

clearAll.addEventListener('click', () => {
  deleteAllFinishTask();
});

window.addEventListener('load', () => {
  loadData();
  checkBox();
  clickSpan();
});