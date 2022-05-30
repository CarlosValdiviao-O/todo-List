import { add } from "date-fns";
import { addChildElement } from "./functions";
import {on, off, emit} from "./pubsub";


const tab = document.querySelector('#display');

function startDisplay () {
    on('switchTab', render);
}

function render(project) {
    removeContents();
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
    container.addEventListener('click', () => bindTodo(todo));
    let name = addChildElement(container, 'h4');
    let date = addChildElement(container, 'p');
    let description = addChildElement(container, 'p', '.description');
    let check = addChildElement(container, 'input', '.checkbox');
    check.type = 'checkbox';
    check.addEventListener('change', () => emit('updateTodo', [name.textContent, date.textContent, description.textContent, 'low', check.checked]));
    //fix priority
    let deleteTodo = addChildElement(container, 'button', '.delete');
    deleteTodo.textContent = 'delete';
    deleteTodo.addEventListener('click', () => removeTodo(todo, project));
}

function updateValues (todo, project) {
    let todos = Array.from(document.querySelectorAll('.todo'));
    let index = project.todos.indexOf(todo);
    todos[index].childNodes[0].textContent = todo.name;
    todos[index].childNodes[1].textContent = todo.date;
    todos[index].childNodes[2].textContent = todo.description;
    todos[index].childNodes[3].checked = todo.status;
}

function removeTodo(todo, project) {
    let todos = Array.from(document.querySelectorAll('.todo'));
    let index = project.todos.indexOf(todo);
    emit('removeTodo', todo);
    todos[index].remove();
}

function removeContents() {
    for (let i=tab.childNodes.length-1; i>=0; i--){
        tab.childNodes[i].remove();
    }
}

function bindTodo (todo) {
    emit ('bindTodo', todo);
}

export {
    startDisplay
}

