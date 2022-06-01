import {project, projects, todo} from  "./projects";
import {startDisplay} from "./display";
import {startSidebar} from "./sidebar";
import "./style.css";

let database = projects();
checkLocalStorage(); 

function updateStorage() {
    localStorage.setItem('database', JSON.stringify(database));
}

function checkLocalStorage () {
    if (localStorage.database) {
        createDatabase();
    }
    else {
        database.projects[0] = project('Example');
        //fix dates
        database.projects[0].todos[0] = todo('Todo1', 'date', 'Do something', 'medium');
        database.projects[0].todos[1] = todo('Todo2', 'date', 'Do some other stuff', 'low');
        database.projects[0].todos[2] = todo('Todo3', 'date', 'Enter this page', 'high', true);
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

startDisplay(database.projects[0]);
startSidebar(database);

export { updateStorage }