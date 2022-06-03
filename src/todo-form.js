import { renderTodo, updateValues, createAddButton } from "./display";
import { addChildElement, hideContents, restoreContents } from "./functions";
import { format } from 'date-fns';
import { getDatabase, moveTodo, checkTab } from ".";

const display = document.querySelector('#display');

function pushTodo (project) {
    project.addTodo(todo.value, date.value, description.value, priority.value);  
    renderTodo(project.todos[project.todos.length-1], project); 
}

function createForm (project, type, picked, div) {
    let form;
    if (type == 'project') {
        form = addChildElement(display, 'form');
    }
    else {
        hideContents(div);
        form = addChildElement(div, 'form');
    }
    const div1 = addChildElement(form, 'div');
    const todo = addChildElement(div1, 'input', '#todo');
    todo.type = 'text';
    const div2 = addChildElement(form, 'div');
    const date = addChildElement(div2, 'input', '#date');
    date.type = 'date';
    const div3 = addChildElement(form, 'div');
    const description = addChildElement(div3, 'textarea', '#description');
    description.name = 'description';
    description.cols = 30;
    description.rows = 5;
    const div4 = addChildElement(form, 'div');
    const priority = addChildElement(div4, 'select', '#priority');
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
    if (type == 'project') {
        document.querySelector('#add-todo').remove();
        const button = addChildElement(form, 'button');
        button.type = 'button';
        button.textContent = 'ADD TODO';
        button.addEventListener('click', () => {
            pushTodo(project);
            form.remove();
            createAddButton(project);
        })
    }
    else {
        const button = addChildElement(form, 'button');
        button.type = 'button';
        button.textContent = 'EDIT TODO';
        todo.value = picked.name;
        if (picked.date == '') date.value = picked.date;
        else date.value = format(new Date(picked.date), 'yyyy-MM-dd');
        description.value = picked.description;
        priority.value = picked.priority;
        button.addEventListener('click', () => {
            project.editTodo(picked, [todo.value, date.value, description.value, priority.value]);
            updateValues(picked, div);
            form.remove();
            restoreContents(div);
            checkTab();
        })
    }
    let cancel = addChildElement(form, 'button');
    cancel.textContent = 'Q';
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
    let options = addChildElement(div, 'select', '#move-form');
    let database = getDatabase();
    let projects = database.projects;
    for (let i=0; i<projects.length; i++) {
        let option = addChildElement(options, 'option');
        option.textContent = projects[i].name;
        option.value = i;
        if (i == projects.indexOf(project))
        option.selected = true;
    }
    options.addEventListener('change', () => moveTodo(todo, project, div, options.value));
}

export {pushTodo, createForm, createMoveOptions}