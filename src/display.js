import { addChildElement } from "./functions";
import { createForm, createMoveOptions } from "./todo-form";

const tab = document.querySelector('#display');

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
    let container = createTodo(todo, project);
    updateValues(todo, container);
};

function createTodo (todo, project) {
    let container = addChildElement(tab, 'div', '.todo');
    let name = addChildElement(container, 'h4', '.name');
    let date = addChildElement(container, 'p', '.date');
    let description = addChildElement(container, 'p', '.description');
    container.dataset.priority = todo.priority;
    container.style = setBackground(container.dataset.priority);
    let check = addChildElement(container, 'input', '.checkbox');
    check.type = 'checkbox';
    check.addEventListener('change', () => project.editTodo(todo, [name.textContent, date.textContent, description.textContent, container.dataset.priority, check.checked]));
    let move = addChildElement(container, 'button', '.move');
    move.textContent = '->';
    move.addEventListener('click', () => createMoveOptions(todo, project, container));
    let edit = addChildElement(container, 'button', '.edit');
    edit.textContent = 'edit';
    edit.addEventListener('click', () => createForm(project, 'edit', todo, container));
    let deleteTodo = addChildElement(container, 'button', '.delete');
    deleteTodo.textContent = 'delete';
    deleteTodo.addEventListener('click', () => removeTodo(todo, project, container));
    return container;
}

function updateValues (todo, container) {
    container.childNodes[0].textContent = todo.name;
    if (todo.date == '') container.childNodes[1].textContent = todo.date;
    else  container.childNodes[1].textContent = todo.date.toDateString();
    container.childNodes[2].textContent = todo.description;
    container.childNodes[3].checked = todo.status;
    container.dataset.priority = todo.priority;
    container.style = setBackground(container.dataset.priority);
}

function removeTodo(todo, project, container) {
    container.remove();
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
    startDisplay, renderTodo, updateValues, createAddButton, removeContents
}