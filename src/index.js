import populateList from './populate.js';
import addNewTask from './add.js';

// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = './style.css';
// document.getElementsByTagName('head')[0].appendChild(link);

const addNewTaskInput = document.querySelector('#text');
const addTaskBtn = document.querySelector('.addbtn');
const removeCompletedTask = document.querySelector('.delete-btn');

addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTask(addNewTaskInput);
});

removeCompletedTask.addEventListener('click', (e) => {
  e.preventDefault();
  populateList();
});

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  populateList();
});