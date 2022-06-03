import {project, projects, todo} from  "./projects";
import {startDisplay} from "./display";
import {startSidebar} from "./sidebar";
import "./style.css";
import { displayHome, displayToday, displayWeek } from "./groups";

let database = projects();
//localStorage.clear();
checkLocalStorage(); 

function updateStorage() {
    localStorage.setItem('database', JSON.stringify(database));
}

function saveTab (project) {
    if (database.projects.includes(project))
    localStorage.setItem('tab', database.projects.indexOf(project));
    else
    localStorage.setItem('tab', JSON.stringify(project));
}

function checkLocalStorage () {
    if (localStorage.database) {
        createDatabase();
    }
    else {
        database.projects[0] = project('Example');
        let today = new Date();
        database.projects[0].todos[0] = todo('Todo1', today, 'Do something', 'medium');
        database.projects[0].todos[1] = todo('Todo2', today, 'Do some other stuff', 'low');
        database.projects[0].todos[2] = todo('Todo3', today, 'Enter this page', 'high', true);
    }
}

function createDatabase () {
    let local = JSON.parse(localStorage.getItem('database'));
    for (let i=0; i<local.projects.length; i++) {
        database.projects[i] = project(local.projects[i].name);
        for (let j=0; j<local.projects[i].todos.length; j++) {
            let name = local.projects[i].todos[j].name;
            let date = local.projects[i].todos[j].date;
            let description = local.projects[i].todos[j].description;
            let priority = local.projects[i].todos[j].priority;
            let status = local.projects[i].todos[j].status;
            database.projects[i].todos[j] = todo(name, date, description, priority, status); 
        }
    }
}

function checkTab() {

    if(localStorage.tab) {
        let tab = JSON.parse(localStorage.getItem('tab'));
        if (database.projects.includes(database.projects[tab])) {
            startDisplay(database.projects[tab]);
            return;
        }
        if (tab == 'today') {
            displayToday(database);
            return;
        }
        if (tab == 'week') {
            displayWeek(database);
            return;
        }
    }
   
    displayHome (database);
    
}

function getDatabase () {
    return database;
}

function moveTodo (todo, project, div, index) {
    project.moveTodo(todo, database.projects[index]);
    let tab = JSON.parse(localStorage.getItem('tab'));
    if (tab == database.projects.indexOf(project))
    div.remove();
    if (document.querySelector('#move-form'))
    document.querySelector('#move-form').remove();
}

checkTab();
startSidebar(database);

export { updateStorage, saveTab, checkTab, getDatabase, moveTodo }