import { addChildElement, hideContents, restoreContents } from "./functions";
import { startDisplay } from "./display";
import { startGroups } from './groups';
import { checkTab, saveTab } from ".";
import Edit from './icons/edit.svg';
import Erase from './icons/delete.svg';
import Cancel from './icons/cancel.svg';
import Confirm from './icons/confirm.svg';

const sidebar = document.querySelector('#sidebar');

function startSidebar (database) {
    startGroups(database);
    let title = addChildElement(sidebar, 'h3');
    title.textContent = 'Projects';
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
    newProject.addEventListener('click', () => switchTab(project, div));
    let edit = addChildElement(div, 'button', '.edit');
    let editIcon = addChildElement(edit, 'img');
    editIcon.src = Edit;
    edit.title = 'Edit Project';
    edit.addEventListener('click', () => editProject(database, project, div));
    let erase = addChildElement(div, 'button', '.delete');
    let eraseIcon = addChildElement(erase, 'img');
    eraseIcon.src = Erase;
    erase.title = 'Delete Project';
    erase.addEventListener('click', () => removeProject(database, project));
}

function switchTab (project, div) {
    focusProject(div);
    startDisplay(project);
    saveTab(project);
}

function createAddProjectButton (database) {
    let button = addChildElement(sidebar, 'button', '#add-project');
    button.textContent = '+ Add Project';
    button.addEventListener('click', () => displayInput(database));
}

function displayInput (database) {
    document.querySelector('#add-project').remove();
    let container = addChildElement(sidebar, 'div', '#new-project');
    container.classList = 'project';
    let input = addChildElement(container, 'input');
    input.setAttribute('maxlength', 25);
    input.type = 'text';
    input.focus();
    let button = addChildElement(container, 'button', '#push-project');
    let confirm = addChildElement(button, 'img');
    confirm.src = Confirm;
    confirm.title = 'Confirm';
    input.addEventListener('keydown', function (e) {
        if (e.keyCode == 13) {
            pushProject(database, input.value)
        }
    } );
    button.addEventListener('click', () => pushProject(database, input.value));
    let cancel = addChildElement(container, 'button', '.cancel');
    cancel.addEventListener('click', () => {
        document.querySelector('#new-project').remove();
        createAddProjectButton (database);
    })
    let cancelIcon = addChildElement(cancel, 'img');
    cancelIcon.src = Cancel;
    cancelIcon.title = 'Cancel';
}

function pushProject (database, project) {
    document.querySelector('#new-project').remove();
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
    input.setAttribute('maxlength', 25);
    input.focus();
    input.addEventListener('keydown', function (e) {
        if (e.keyCode == 13) {
            database.updateProject(project, input.value);
            div.childNodes[0].textContent = input.value;
            restoreContents(div);
            container.remove();
        }
    } );
    let button = addChildElement (container, 'button');
    let confirm = addChildElement(button, 'img');
    confirm.src = Confirm;
    button.title = 'Confirm';
    button.addEventListener('click', () => {
        database.updateProject(project, input.value);
        div.childNodes[0].textContent = input.value;
        restoreContents(div);
        container.remove();
    })
    let cancel = addChildElement(container, 'button');
    let cancelIcon = addChildElement(cancel, 'img');
    cancelIcon.src = Cancel;
    cancel.title = 'Cancel';
    cancel.addEventListener('click', () => {
        restoreContents(div);
        container.remove();
    })
}

function focusProject (tab) {
    if (document.querySelector('.current')){
        document.querySelector('.current').classList.remove('current');
    }
    tab.classList.add('current');
}

export {startSidebar, focusProject }