import { renderTodo } from "./display";
import { addChildElement } from "./functions";

//const add = document.querySelector('#submit-todo');
//const todo = document.querySelector('#todo');
//const date = document.querySelector('#date');
//const description = document.querySelector('#description');
//const priority = document.querySelector('#priority');

const body = document.querySelector('body');

function pushTodo (project) {
    project.addTodo(todo.value, date.value, description.value, priority.value);  
    renderTodo(project.todos[project.todos.length-1], project); 
}

function createForm (project, type) {
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
        })
    }
}

export {pushTodo, createForm}