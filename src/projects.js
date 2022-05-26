const project = (name) => {
    
    let todos = [];

    const addTodo = (todo) => {
        todos.push(todo);
    }

    const removeTodo = (todo) => {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
    }
    
    return {
        addTodo, name, todos, removeTodo
    }   

}

const todo = (name, dat, des, pri) => {
    
    let date,
        description,
        priority,
        status = false;

    if (dat != undefined) {
        date = dat;
    }

    if (des != undefined) {
        description = des;
    }

    if (pri != undefined) {
        priority = pri;
    }
    
    return {
        name, date, description, priority, status
    }
}



export {project, todo}