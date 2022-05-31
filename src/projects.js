
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

    const addTodo = (name, dat, des, pri, sta) => {
        let newTodo = todo(name, dat, des, pri, sta);
        todos.push(newTodo);
    }

    const removeTodo = (todo) => {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
    }

    const editTodo = (todo, array) => {
        let index = todos.indexOf(todo);
        updateTodo(todos[index], array);
    }

    function updateTodo(todo, array) {
        todo.name = array[0];
        todo.date = array[1];
        todo.description = array[2];
        todo.priority = array[3]; 
        todo.status = array[4];
    }
    
    return {
        addTodo, name, todos, removeTodo, editTodo, updateTodo
    }   

}


const todo = (name, dat, des, pri, sta) => {

    let date,
    description,
    priority,
    status;

    if (dat !== undefined) {
        date = dat;
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