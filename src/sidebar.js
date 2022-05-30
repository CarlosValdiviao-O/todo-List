import { addChildElement } from "./functions";
import {on, off, emit} from "./pubsub";

const sidebar = document.querySelector('#sidebar');


function startSidebar (projects) {
    for (let i=0; i<projects.length; i++){
        displayProject(projects[i]);
    }
}

function displayProject (project) {
    let newProject = addChildElement(sidebar, 'button', '.project');
    newProject.textContent =project.name;
    newProject.addEventListener('click', () => switchTab(project));
}

function switchTab (project) {
    emit('switchTab', project);
}

export {startSidebar}