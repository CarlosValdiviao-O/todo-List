import { addChildElement } from "./functions";
import { createForm, createMoveOptions } from "./todo-form";
import Edit from './icons/edit.svg';
import Erase from './icons/delete.svg';
import Move from './icons/move.svg';

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
    let check = addChildElement(container, 'input', '.checkbox');
    check.type = 'checkbox';
    check.addEventListener('change', () => project.editTodo(todo, [name.textContent, date.textContent, todo.description, container.dataset.priority, check.checked]));
    check.addEventListener('change', () => setChecked(container, check.checked));
    let name = addChildElement(container, 'h4', '.name');
    let date = addChildElement(container, 'p', '.date');
    date.title = 'Duedate';
    container.dataset.priority = todo.priority;
    let buttons = addChildElement(container, 'div', '.buttons');
    buttons.style = setBackground(container.dataset.priority);
    let move = addChildElement(buttons, 'button', '.move');
    let moveIcon =addChildElement(move, 'img');
    moveIcon.src = Move;
    move.title = 'Move to different project';
    move.addEventListener('click', () => createMoveOptions(todo, project, container));
    let edit = addChildElement(buttons, 'button', '.edit');
    let editIcon = addChildElement(edit, 'img');
    editIcon.src = Edit;
    edit.title = 'Edit Todo';
    edit.addEventListener('click', () => createForm(project, 'edit', todo, container));
    let deleteTodo = addChildElement(buttons, 'button', '.delete');
    let deleteIcon = addChildElement(deleteTodo, 'img');
    deleteIcon.src = Erase;
    deleteTodo.title = 'Delete Todo'
    deleteTodo.addEventListener('click', () => removeTodo(todo, project, container));
    return container;
}

function updateValues (todo, container) {
    container.childNodes[1].textContent = todo.name;
    if (todo.date == '') container.childNodes[2].textContent = todo.date;
    else  container.childNodes[2].textContent = todo.date.toDateString();
    container.childNodes[0].checked = todo.status;
    container.dataset.priority = todo.priority;
    container.childNodes[3].style = setBackground(container.dataset.priority);
    setChecked(container, container.childNodes[0].checked);
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
    return 'background-color: red';
    else if (priority == 'medium')
    return 'background-color: #f5f512';
    else return 'background-color: green';
}

function setChecked (div, value) {
    if (value == true) 
    div.classList.add('checked');
    else
    div.classList.remove('checked');
}

function createAddButton (project) {
    let button = addChildElement(tab, 'button', '#add-todo');
    button.textContent = '+';
    button.addEventListener('click', () => createForm(project, 'project'));
}

export {
    startDisplay, renderTodo, updateValues, createAddButton, removeContents
}