'use strict';

console.log('funguju!');

const tasks = ['Vyprat ponožky', 'Naučit se funkce vyšších řádů', 'Nakoupit na víkend'];

const updateTasks = (array) => {
  const listElm = document.querySelector('.todo__tasks');
  listElm.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    listElm.innerHTML += `<div class="task">${tasks[i]}</div>`;
  };
};
updateTasks(tasks);

const addToTasks = (event) => {
  const userInput = document.querySelector('#new-task').value;
  tasks.push(userInput);
  updateTasks(tasks);
}

const btnElm = document.querySelector('.btn-add');
btnElm.addEventListener('click', addToTasks);



