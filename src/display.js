import { addChildElement } from "./functions";
import { createForm } from "./todo-form";

const tab = document.querySelector('#display');
const form = document.querySelector('#form')

function startDisplay (project) {
    render(project);
}

function render(project) {
    removeContents();
    let header = addChildElement(tab, 'h3', '.header');
    header.textContent = project.name;
    for (let i = 0; i<project.todos.length ; i++) {
        renderTodo(project.todos[i], project);
    }
    createAddButton (project);
}

function renderTodo (todo, project) {
    createTodo(todo, project);
    updateValues(todo, project);
};

function createTodo (todo, project) {
    let container = addChildElement(tab, 'div', '.todo');
    let name = addChildElement(container, 'h4');
    let date = addChildElement(container, 'p');
    let description = addChildElement(container, 'p', '.description');
    container.dataset.priority = todo.priority;
    container.style = setBackground(container.dataset.priority);
    let check = addChildElement(container, 'input', '.checkbox');
    check.type = 'checkbox';
    check.addEventListener('change', () => project.editTodo(todo, [name.textContent, date.textContent, description.textContent, container.dataset.priority, check.checked]));
    let edit = addChildElement(container, 'button', '.edit');
    edit.textContent = 'edit';
    edit.addEventListener('click', () => createForm(project, 'edit', todo));
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
    todos[index].dataset.priority = todo.priority;
}

function removeTodo(todo, project) {
    let todos = Array.from(document.querySelectorAll('.todo'));
    let index = project.todos.indexOf(todo);
    todos[index].remove();
    project.removeTodo(todo);
}

function removeContents() {
    for (let i=tab.childNodes.length-1; i>=0; i--){
        tab.childNodes[i].remove();
    }
}

function setBackground(priority) {
    if (priority == 'high')
    return 'border-color: red';
    else if (priority == 'medium')
    return 'border-color: yellow';
    else return 'border-color: green';
}

function createAddButton (project) {
    let button = addChildElement(tab, 'button', '#add-todo');
    button.textContent = '+';
    button.addEventListener('click', () => createForm(project, 'project'));
}

export {
    startDisplay, renderTodo, updateValues
}

