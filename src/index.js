// import '/src/style.css';

import { list } from '/modules/task.js';

// Selector
const toDo = document.querySelector('.to-do-list');

list.forEach((list) => {
  toDo.innerHTML += `
   <li>
       <input type="checkbox">
       <span>${list.description}</span>
       <i class="fa-solid fa-ellipsis-vertical"></i>
  </li>    
  <hr>              
  `;
});