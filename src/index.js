import {project, projects, todo} from  "./projects";
import {startDisplay} from "./display";
import {startSidebar} from "./sidebar";
import "./style.css";

let database = projects();

database.projects[0] = project('one');
database.projects[1] = project('two');
database.projects[0].addTodo('lol');
database.projects[0].addTodo('1', 5, 3, '', true);
database.projects[1].addTodo('lel', '8246', 'dosomething', 'high', true);
//
//localStorage.setItem('database', JSON.stringify(database));
//
//let newObj = JSON.parse(localStorage.getItem('database'));
//
//console.log(newObj);
//

startDisplay(database.projects[1]);
startSidebar(database.projects);


