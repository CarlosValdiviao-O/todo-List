import { updateStorage } from ".";

const projects = () => {

    let projects = [];

    const addProject = (name) => {
        let newProject = project(name);
        projects.push(newProject);
        updateStorage();
    }

    const removeProject = (project) => {
        let index = projects.indexOf(project);
        projects.splice(index, 1);
        updateStorage();
    }

    const updateProject = (project, newName) => {
        let index = projects.indexOf(project);
        projects[index].name = newName;
        updateStorage();
    }

    return {
        addProject, removeProject, projects, updateProject
    }
}

const project = (name) => {
    
    let todos = [];

    const addTodo = (name, dat, des, pri, sta) => {
        let newTodo = todo(name, dat.replace(/-/g, '\/'), des, pri, sta);
        todos.push(newTodo);
        updateStorage();
    }

    const removeTodo = (todo) => {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
        updateStorage();
    }

    const editTodo = (todo, array) => {
        let index = todos.indexOf(todo);
        updateTodo(todos[index], array);
    }

    function updateTodo(todo, array) {
        todo.name = array[0];
        if (array[1] == '') todo.date = '';
        else todo.date = new Date(array[1].replace(/-/g, '\/'));
        todo.description = array[2];
        todo.priority = array[3]; 
        todo.status = array[4];
        updateStorage();
    }

    function moveTodo (todo, project) {
        project.todos.push(todo);
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
        updateStorage();
    }
    
    return {
        addTodo, name, todos, removeTodo, editTodo, updateTodo, moveTodo
    }   

}


const todo = (name, dat, des, pri, sta) => {

    let date,
    description,
    priority,
    status;

    if (dat != undefined && dat != '') {
        date = new Date(dat);
    }
    else date = '';

    if (des != undefined) {
        description = des;
    }
    else description = '';

    if (pri != undefined) {
        priority = pri;
    }
    else priority = 'low';

    if (sta != undefined) {
        status = sta;
    }
    else status = false;
        
    return {
        name, date, description, priority, status
    }
}

export {project,  projects, todo}