import { off, on, emit } from "./pubsub";

const projects = () => {

    let projects = [];

    const addProject = (project) => {
        projects.push(project);
    }

    const removeProject = (project) => {
        let index = projects.indexOf(project);
        projects.splice(index, 1);
    }

    return {
        addProject, removeProject, projects
    }
}

const project = (name) => {
    
    let todos = [];

    const addTodo = (todo) => {
        todos.push(todo);
    }

    const removeTodo = (todo) => {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
    }

    on('switchTab', bindEvents);
    on('bindTodo', bindTodo);

    function bindTodo(todo) {
        for (let i=0; i<todos.length; i++) {
            if (todos[i] == todo) {
                console.log(todos[i]);
                todos[i].bind(true);
            }
            else {
                todos[i].bind(false);
            }
        }
    }

    function bindEvents (project) {
        if (project.name == name) {
            on('removeTodo', removeTodo);
        }
        else {
            off('removeTodo', removeTodo);
        }
    }

    return {
        addTodo, name, todos
    }   

}

const todo = (name, dat, des, pri, sta) => {
    
    let date,
    description,
    priority,
    status;

    if (dat != undefined) {
        date = dat;
    }

    if (des != undefined) {
        description = des;
    }

    if (pri != undefined) {
        priority = pri;
    }

    if (sta != undefined) {
        status = sta;
    }

    const bind =  (value) => {
        if (value == true) {
            on('updateTodo', updateTodo);
        }
        else {
            off('updateTodo', updateTodo);
        }
    }

    function updateTodo(array) {
        name = array[0];
        date = array[1];
        description = array[2];
        priority = array[3]; 
        status = array[4];
    }
    
    return {
        name, date, description, priority, status, bind
    }
}



export {project, todo, projects}