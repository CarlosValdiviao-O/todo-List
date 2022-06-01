import { addChildElement } from "./functions";
import { startDisplay } from "./display";

const sidebar = document.querySelector('#sidebar');

function startSidebar (database) {
    let projects = database.projects;
    for (let i=0; i<projects.length; i++){
        displayProject(database, projects[i]);
    }
    createAddProjectButton(database);
}

function displayProject (database, project) {
    let div = addChildElement (sidebar, 'div', '.project');
    let newProject = addChildElement(div, 'button');
    newProject.textContent = project.name;
    newProject.addEventListener('click', () => switchTab(project));
    let erase = addChildElement(div, 'button', '.delete');
    erase.textContent = 'x';
    erase.addEventListener('click', () => removeProject(database, project));
}

function switchTab (project) {
    startDisplay(project);
}

function createAddProjectButton (database) {
    let button = addChildElement(sidebar, 'button', '#add-project');
    button.textContent = 'NEW PROJECT';
    button.addEventListener('click', () => displayInput(database));
}

function displayInput (database) {
    document.querySelector('#add-project').remove();
    let input = addChildElement(sidebar, 'input', '#project');
    input.type = 'text';
    input.focus();
    let button = addChildElement(sidebar, 'button', '#push-project');
    button.textContent = '+';
    button.addEventListener('click', () => pushProject(database, input.value));
}

function pushProject (database, project) {
    document.querySelector('#project').remove();
    document.querySelector('#push-project').remove(); 
    database.addProject(project);
    displayProject(database, database.projects[database.projects.length-1]);
    createAddProjectButton (database);
}

function removeProject (database, project) {
    let projects = Array.from(document.querySelectorAll('.project'));
    let index = database.projects.indexOf(project);
    projects[index].remove();
    database.removeProject(project);
}

export {startSidebar}