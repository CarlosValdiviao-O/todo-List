import { renderTodo, updateValues } from "./display";
import { addChildElement } from "./functions";

const body = document.querySelector('body');
const background = document.querySelector('#background');

background.addEventListener('click', () => {
    document.querySelector('form').remove();
    background.classList.remove('active')
});

function pushTodo (project) {
    project.addTodo(todo.value, date.value, description.value, priority.value);  
    renderTodo(project.todos[project.todos.length-1], project); 
}

function createForm (project, type, picked) {
    background.classList.add('active');
    const form = addChildElement(body, 'form', '#form');
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
        const button = addChildElement(form, 'button');
        button.type = 'button';
        button.textContent = 'ADD TODO';
        button.addEventListener('click', () => {
            pushTodo(project);
            form.remove();
            background.classList.remove('active');
        })
    }
    else {
        const button = addChildElement(form, 'button');
        button.type = 'button';
        button.textContent = 'EDIT TODO';
        todo.value = picked.name;
        date.value = picked.date;
        description.value = picked.description;
        priority.value = picked.priority;
        button.addEventListener('click', () => {
            project.editTodo(picked, [todo.value, date.value, description.value, priority.value]);
            updateValues(picked, project);
            form.remove();
            background.classList.remove('active');
        })
    }
}

export {pushTodo, createForm}