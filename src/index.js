import './style.css';

const listGroup = document.querySelector('.list-group');
const ListArray = [
  { id: 1, description: '1111111111111', isCompleted: false },
  { id: 2, description: '2222222222222', isCompleted: false },
  { id: 3, description: '3333333333333', isCompleted: false },
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
    icon.classList.add('fa');
    icon.classList.add('fa-ellipsis-v');
    checkBox.type = 'checkbox';
    span.innerHTML = ListArray[i].description;
    move.href = '#';
    move.appendChild(icon);
    list.appendChild(checkBox);
    list.appendChild(span);
    list.appendChild(move);
    listGroup.appendChild(list);
  }
}

window.addEventListener('load', () => {
  AddListItem();
});
