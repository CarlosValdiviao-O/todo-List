import { addChildElement, hideContents, restoreContents } from "./functions";
import { startDisplay } from "./display";
import { startGroups } from './groups';
import { checkTab, saveTab } from ".";

const sidebar = document.querySelector('#sidebar');

function startSidebar (database) {
    startGroups(database);
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
    let edit = addChildElement(div, 'button', '.edit');
    edit.textContent = 'edit';
    edit.addEventListener('click', () => editProject(database, project, div));
    let erase = addChildElement(div, 'button', '.delete');
    erase.textContent = 'x';
    erase.addEventListener('click', () => removeProject(database, project));
}

function switchTab (project) {
    startDisplay(project);
    saveTab(project);
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
    checkTab();
}

function editProject (database, project, div) {
    hideContents(div);
    let container = addChildElement(div, 'div');
    let input = addChildElement(container, 'input');
    input.value = project.name;
    let button = addChildElement (container, 'button');
    button.textContent = 'v/';
    button.addEventListener('click', () => {
        database.updateProject(project, input.value);
        div.childNodes[0].textContent = input.value;
        restoreContents(div);
        container.remove();
    })
    let cancel = addChildElement(container, 'button');
    cancel.textContent = 'Q';
    cancel.addEventListener('click', () => {
        restoreContents(div);
        container.remove();
    })
}

export {startSidebar }