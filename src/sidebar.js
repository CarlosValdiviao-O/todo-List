import { addChildElement } from "./functions";
import { startDisplay } from "./display";

const sidebar = document.querySelector('#sidebar');
const form = document.querySelector('#todo-form')

function startSidebar (projects) {
    for (let i=0; i<projects.length; i++){
        displayProject(projects[i]);
    }
}

function displayProject (project) {
    let newProject = addChildElement(sidebar, 'button', '.project');
    newProject.textContent = project.name;
    newProject.addEventListener('click', () => switchTab(project));
}

function switchTab (project) {
    startDisplay(project);
    //form.lastElementChild.remove();
}

export {startSidebar}