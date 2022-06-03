import { addChildElement } from "./functions";
import { renderTodo, removeContents } from "./display";
import { saveTab } from ".";

const sidebar = document.querySelector('#sidebar');
const display = document.querySelector('#display');

function startGroups (database) {
    const home = addChildElement(sidebar, 'button');
    home.textContent = 'Home';
    home.addEventListener('click', () => displayHome(database));
    const today = addChildElement(sidebar, 'button');
    today.textContent = 'Today';
    today.addEventListener('click', () => displayToday(database));
    const week = addChildElement(sidebar, 'button');
    week.textContent = 'This Week';
}

function displayHome (database) {
    removeContents();
    saveTab('home');
    let header = addChildElement(display, 'h3');
    header.textContent = 'Home';
    for (let i=0; i<database.projects.length; i++) {
        for(let j=0; j<database.projects[i].todos.length; j++){
            renderTodo(database.projects[i].todos[j], database.projects[i]);
        }
    }
}

function displayToday(database) {
    removeContents();
    saveTab('today');
    let today = new Date();
    let header = addChildElement(display, 'h3');
    header.textContent = 'Today';
    for (let i=0; i<database.projects.length; i++) {
        for(let j=0; j<database.projects[i].todos.length; j++){
            if (database.projects[i].todos[j].date != '' && database.projects[i].todos[j].date.toDateString() == today.toDateString())
            renderTodo(database.projects[i].todos[j], database.projects[i]);
        }
    }
}

export { startGroups, displayHome, displayToday }