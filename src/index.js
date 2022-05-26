import {project, todo} from  "./projects";
import {on, off, emit} from "./pubsub";
import {startDisplay} from "./display";


let projects = [];

projects[0] = project('one');
projects[1] = project('two');
projects[0].addTodo({name: 'lol', array: []});
projects[1].addTodo([1, 5, 3]);
projects[1].addTodo(todo('lel', '8246', 'dosomething'));

localStorage.setItem('projects', JSON.stringify(projects));

let newObj =JSON.parse(localStorage.getItem('projects'));

console.log(newObj);

function switchTab (tab) {
    emit('switchTab', tab);
};

startDisplay();

switchTab(projects[1]);