import {project, todo, projects} from  "./projects";
import {on, off, emit} from "./pubsub";
import {startDisplay} from "./display";
import {startSidebar} from "./sidebar";


let database = projects();

database.projects[0] = project('one');
database.projects[1] = project('two');
database.projects[0].addTodo(todo('lol'));
database.projects[1].addTodo(todo(1, 5, 3));
database.projects[1].addTodo(todo('lel', '8246', 'dosomething', 'low', true));

localStorage.setItem('database', JSON.stringify(database));

let newObj = JSON.parse(localStorage.getItem('database'));

console.log(newObj);

function switchTab (tab) {
    emit('switchTab', tab);
};

on('removeTodo', ()=>{
    console.log(database);
});

startDisplay();
startSidebar(database.projects);

switchTab(database.projects[1]);

