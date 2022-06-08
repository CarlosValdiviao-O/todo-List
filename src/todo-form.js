import { renderTodo, updateValues, createAddButton } from "./display";
import { addChildElement, hideContents, restoreContents } from "./functions";
import { format } from 'date-fns';
import { getDatabase, moveTodo, checkTab, getIndexOfProject } from ".";
import Cancel from './icons/cancel.svg';
import Confirm from './icons/confirm.svg';

const display = document.querySelector('#display');

function pushTodo (project, todo, date, description, priority) {
    project.addTodo(todo.value, date.value, description.value, priority.value);  
    renderTodo(project.todos[project.todos.length-1], project); 
}

function createForm (project, type, picked, div) {
    if (document.querySelector('#move-form'))
    document.querySelector('#move-form').remove();
    let form;
    if (type == 'project') {
        form = addChildElement(display, 'form', '#new-todo');
    }
    else {
        hideContents(div);
        form = addChildElement(div, 'form');
    }

    const div1 = addChildElement(form, 'div');
    const todo = addChildElement(div1, 'input', '#todo');
    todo.type = 'text';
    todo.focus();
    const instructions = addChildElement(div1, 'p', '.instructions');
    instructions.textContent = '*Name must be at least one character long';
    instructions.classList.add('hide');
    let label1 = addChildElement(div1, 'label');
    label1.for = 'todo';
    label1.textContent = 'Name:';

    const div2 = addChildElement(form, 'div');
    const date = addChildElement(div2, 'input', '#date');
    date.type = 'date';
    let label2 = addChildElement(div2, 'label');
    label2.for = 'date';
    label2.textContent = 'Duedate:';

    const div3 = addChildElement(form, 'div', '#description-div');
    const description = addChildElement(div3, 'textarea', '#description');
    description.name = 'description';
    description.cols = 30;
    description.rows = 3;
    let label3 = addChildElement(div3, 'label');
    label3.for = 'description';
    label3.textContent = 'Description:';

    const div4 = addChildElement(form, 'div', '.buttons');
    let label4 = addChildElement(div4, 'label');
    label4.textContent = 'Priority:';
    const priority = addChildElement(div4, 'select', '#priority');
    label4.for = 'priority';
    priority.name = 'priority';
    const low = addChildElement(priority, 'option');
    low.value = 'low';
    low.textContent = 'Low';
    low.selected = true;
    const medium = addChildElement(priority, 'option');
    medium.value = 'medium';
    medium.textContent = 'Medium';
    const high = addChildElement(priority, 'option');
    high.value = 'high'; 
    high.textContent = 'High';
    const button = addChildElement(div4, 'button');
    if (type == 'project') {
        document.querySelector('#add-todo').remove();
        button.addEventListener('click', () => {
            if (todo.value.length < 1) {
                instructions.classList.remove('hide');
                return;  
            } 
            pushTodo(project, todo, date, description, priority);
            form.remove();
            createAddButton(project);
        });
    }
    else {
        todo.value = picked.name;
        if (picked.date == '') date.value = picked.date;
        else date.value = format(new Date(picked.date), 'yyyy-MM-dd');
        description.value = picked.description;
        priority.value = picked.priority;
        button.addEventListener('click', () => {
            if (todo.value.length < 1) {
                instructions.classList.remove('hide');
                return;  
            } 
            project.editTodo(picked, [todo.value, date.value, description.value, priority.value]);
            updateValues(picked, div);
            form.remove();
            restoreContents(div);
            let tab = JSON.parse(localStorage.getItem('tab'));
            if (tab == 'today' || tab == 'week')
            checkTab();
        });
    }
    button.type = 'button';
    let confirm = addChildElement(button, 'img');
    confirm.src = Confirm;
    confirm.title = 'Confirm';
    let cancel = addChildElement(div4, 'button');
    let cancelIcon = addChildElement(cancel, 'img');
    cancelIcon.src = Cancel;
    cancelIcon.title = 'Cancel';
    cancel.addEventListener('click', () => {
        if (type == 'project') {
            form.remove();
            createAddButton();
        }
        else {
            form.remove();
            restoreContents(div);
        }
    })
}

function createMoveOptions (todo, project, div) {
    if (document.querySelector('#move-form'))
    document.querySelector('#move-form').remove();
    let options = addChildElement(div.childNodes[3], 'div', '#move-form');
    let database = getDatabase();
    let projects = database.projects;
    for (let i=0; i<projects.length; i++) {
        let option = addChildElement(options, 'button');
        option.textContent = projects[i].name;
        option.dataset.value = i;
        if (i == getIndexOfProject(todo))
        option.classList = 'current';
        option.addEventListener('click', () => moveTodo(todo, project, div, option.dataset.value));
    }
    
}

export {pushTodo, createForm, createMoveOptions}