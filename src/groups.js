import { addChildElement } from "./functions";
import { renderTodo, removeContents } from "./display";
import { saveTab } from ".";
import { focusProject } from "./sidebar";

const sidebar = document.querySelector('#sidebar');
const display = document.querySelector('#display');

function startGroups (database) {
    const home = addChildElement(sidebar, 'button');
    home.textContent = 'Home';
    home.addEventListener('click', () => displayHome(database, home));
    const today = addChildElement(sidebar, 'button');
    today.textContent = 'Today';
    today.addEventListener('click', () => displayToday(database, today));
    const week = addChildElement(sidebar, 'button');
    week.textContent = 'This Week';
    week.addEventListener('click', () => displayWeek(database, week));
}

function displayHome (database, tab) {
    focusProject (tab);
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

function displayToday(database, tab) {
    focusProject (tab);
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

function displayWeek (database, tab) {
    focusProject (tab);
    removeContents();
    saveTab('week');
    let today = new Date();
    let header = addChildElement(display, 'h3');
    header.textContent = 'This Week';
    let dayOfWeek = today.getDay();
    let start = new Date();
    start.setDate(today.getDate() - dayOfWeek);
    start.setHours(0, 0, 0);
    let end = new Date();
    end.setDate(today.getDate() - dayOfWeek + 7);
    end.setHours(0, 0, 0);
    for (let i=0; i<database.projects.length; i++) {
        for(let j=0; j<database.projects[i].todos.length; j++){
            let todoDate = database.projects[i].todos[j].date;
            if (todoDate != '' && todoDate > start && todoDate <end)
            renderTodo(database.projects[i].todos[j], database.projects[i]);
        }
    }
}

export { startGroups, displayHome, displayToday, displayWeek }