import { addChildElement } from "./functions";
import {on, off, emit} from "./pubsub";


const tab = document.querySelector('#display');

function startDisplay () {
    on('switchTab', render);
}

function render(project) {
    let header = addChildElement(tab, 'h3', '.header');
    header.textContent = project.name;
    for (let i = 0; i<project.todos.length ; i++) {
        renderTodo(project.todos[i], project);
    }
    
}

function renderTodo (todo, project) {
    createTodo(todo, project);
    updateValues(todo, project);
};

function createTodo (todo, project) {
    let container = addChildElement(tab, 'div', '.todo');
    let name = addChildElement(container, 'h4');
    let deleteTodo = addChildElement(container, 'button', '.delete');
    deleteTodo.textContent = 'delete';
    deleteTodo.addEventListener('click', () => removeTodo(todo, project));
}

function updateValues (todo, project) {
    let todos = Array.from(document.querySelectorAll('.todo'));
    let index = project.todos.indexOf(todo);
    todos[index].childNodes[0].textContent = todo.name;
}

function removeTodo(todo, project) {
    let todos = Array.from(document.querySelectorAll('.todo'));
    let index = project.todos.indexOf(todo);
    project.removeTodo(todo);
    todos[index].remove();
}

export {
    startDisplay
}

