/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startDisplay": () => (/* binding */ startDisplay)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");





const tab = document.querySelector('#display');

function startDisplay () {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.on)('switchTab', render);
}

function render(project) {
    removeContents();
    let header = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(tab, 'h3', '.header');
    header.textContent = project.name;
    for (let i = 0; i<project.todos.length ; i++) {
        renderTodo(project.todos[i], project);
    }
    
}

function renderTodo (todo, project) {
    createTodo(todo, project);
    updateValues(todo, project);
};

function createTodo (todo, project) {
    let container = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(tab, 'div', '.todo');
    container.addEventListener('click', () => bindTodo(todo));
    let name = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'h4');
    let date = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'p');
    let description = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'p', '.description');
    let check = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'input', '.checkbox');
    check.type = 'checkbox';
    check.addEventListener('change', () => (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.emit)('updateTodo', [name.textContent, date.textContent, description.textContent, 'low', check.checked]));
    //fix priority
    let deleteTodo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'button', '.delete');
    deleteTodo.textContent = 'delete';
    deleteTodo.addEventListener('click', () => removeTodo(todo, project));
}

function updateValues (todo, project) {
    let todos = Array.from(document.querySelectorAll('.todo'));
    let index = project.todos.indexOf(todo);
    todos[index].childNodes[0].textContent = todo.name;
    todos[index].childNodes[1].textContent = todo.date;
    todos[index].childNodes[2].textContent = todo.description;
    todos[index].childNodes[3].checked = todo.status;
}

function removeTodo(todo, project) {
    let todos = Array.from(document.querySelectorAll('.todo'));
    let index = project.todos.indexOf(todo);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.emit)('removeTodo', todo);
    todos[index].remove();
}

function removeContents() {
    for (let i=tab.childNodes.length-1; i>=0; i--){
        tab.childNodes[i].remove();
    }
}

function bindTodo (todo) {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.emit) ('bindTodo', todo);
}





/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChildElement": () => (/* binding */ addChildElement)
/* harmony export */ });
const addChildElement = (parent, element, css) => {
    let elm = document.createElement(`${element}`);
    parent.appendChild(elm); 
    if (css != undefined) {
        if (css[0] == '.' )
        elm.className = css.substr(1);
        else if (css[0] == '#')
        elm.id = css.substr(1);
    }

    return elm;
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


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

    ;(0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.on)('switchTab', bindEvents);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.on)('bindTodo', bindTodo);

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
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.on)('removeTodo', removeTodo);
        }
        else {
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.off)('removeTodo', removeTodo);
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
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.on)('updateTodo', updateTodo);
        }
        else {
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.off)('updateTodo', updateTodo);
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





/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "on": () => (/* binding */ on)
/* harmony export */ });


let events = {};

const on = (eventName, fn) =>  {
  events[eventName] = events[eventName] || [];
  events[eventName].push(fn);
};

const off  = (eventName, fn) => {
  if (events[eventName]) {
    for (let i = 0; i < events[eventName].length; i++) {
      if (events[eventName][i] === fn) {
        events[eventName].splice(i, 1);
        break;
      }
    };
  }
};

const emit = (eventName, data) => {
  if (events[eventName]) {
    events[eventName].forEach(function(fn) {
      fn(data);
    });
  }
}



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startSidebar": () => (/* binding */ startSidebar)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");



const sidebar = document.querySelector('#sidebar');


function startSidebar (projects) {
    for (let i=0; i<projects.length; i++){
        displayProject(projects[i]);
    }
}

function displayProject (project) {
    let newProject = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(sidebar, 'button', '.project');
    newProject.textContent =project.name;
    newProject.addEventListener('click', () => switchTab(project));
}

function switchTab (project) {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.emit)('switchTab', project);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");






let database = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projects)();

database.projects[0] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.project)('one');
database.projects[1] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.project)('two');
database.projects[0].addTodo((0,_projects__WEBPACK_IMPORTED_MODULE_0__.todo)('lol'));
database.projects[1].addTodo((0,_projects__WEBPACK_IMPORTED_MODULE_0__.todo)(1, 5, 3));
database.projects[1].addTodo((0,_projects__WEBPACK_IMPORTED_MODULE_0__.todo)('lel', '8246', 'dosomething', 'low', true));

localStorage.setItem('database', JSON.stringify(database));

let newObj = JSON.parse(localStorage.getItem('database'));

console.log(newObj);

function switchTab (tab) {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.emit)('switchTab', tab);
};

(0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.on)('removeTodo', ()=>{
    console.log(database);
});

(0,_display__WEBPACK_IMPORTED_MODULE_2__.startDisplay)();
(0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.startSidebar)(database.projects);

switchTab(database.projects[1]);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQU87QUFDOUIsNkJBQTZCLCtDQUFJO0FBQ2pDLDZCQUE2QiwrQ0FBSTtBQUNqQyw2QkFBNkIsK0NBQUk7O0FBRWpDOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSw2Q0FBSTtBQUNSOztBQUVBLDJDQUFFO0FBQ0Y7QUFDQSxDQUFDOztBQUVELHNEQUFZO0FBQ1osc0RBQVk7O0FBRVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtvbiwgb2ZmLCBlbWl0fSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuXG5jb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xuXG5mdW5jdGlvbiBzdGFydERpc3BsYXkgKCkge1xuICAgIG9uKCdzd2l0Y2hUYWInLCByZW5kZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXIocHJvamVjdCkge1xuICAgIHJlbW92ZUNvbnRlbnRzKCk7XG4gICAgbGV0IGhlYWRlciA9IGFkZENoaWxkRWxlbWVudCh0YWIsICdoMycsICcuaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPHByb2plY3QudG9kb3MubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIHJlbmRlclRvZG8ocHJvamVjdC50b2Rvc1tpXSwgcHJvamVjdCk7XG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvICh0b2RvLCBwcm9qZWN0KSB7XG4gICAgY3JlYXRlVG9kbyh0b2RvLCBwcm9qZWN0KTtcbiAgICB1cGRhdGVWYWx1ZXModG9kbywgcHJvamVjdCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvICh0b2RvLCBwcm9qZWN0KSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGFkZENoaWxkRWxlbWVudCh0YWIsICdkaXYnLCAnLnRvZG8nKTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBiaW5kVG9kbyh0b2RvKSk7XG4gICAgbGV0IG5hbWUgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnaDQnKTtcbiAgICBsZXQgZGF0ZSA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdwJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ3AnLCAnLmRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IGNoZWNrID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2lucHV0JywgJy5jaGVja2JveCcpO1xuICAgIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGVtaXQoJ3VwZGF0ZVRvZG8nLCBbbmFtZS50ZXh0Q29udGVudCwgZGF0ZS50ZXh0Q29udGVudCwgZGVzY3JpcHRpb24udGV4dENvbnRlbnQsICdsb3cnLCBjaGVjay5jaGVja2VkXSkpO1xuICAgIC8vZml4IHByaW9yaXR5XG4gICAgbGV0IGRlbGV0ZVRvZG8gPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnYnV0dG9uJywgJy5kZWxldGUnKTtcbiAgICBkZWxldGVUb2RvLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZVRvZG8odG9kbywgcHJvamVjdCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZXMgKHRvZG8sIHByb2plY3QpIHtcbiAgICBsZXQgdG9kb3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJykpO1xuICAgIGxldCBpbmRleCA9IHByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb3NbaW5kZXhdLmNoaWxkTm9kZXNbM10uY2hlY2tlZCA9IHRvZG8uc3RhdHVzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8sIHByb2plY3QpIHtcbiAgICBsZXQgdG9kb3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJykpO1xuICAgIGxldCBpbmRleCA9IHByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICBlbWl0KCdyZW1vdmVUb2RvJywgdG9kbyk7XG4gICAgdG9kb3NbaW5kZXhdLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb250ZW50cygpIHtcbiAgICBmb3IgKGxldCBpPXRhYi5jaGlsZE5vZGVzLmxlbmd0aC0xOyBpPj0wOyBpLS0pe1xuICAgICAgICB0YWIuY2hpbGROb2Rlc1tpXS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRUb2RvICh0b2RvKSB7XG4gICAgZW1pdCAoJ2JpbmRUb2RvJywgdG9kbyk7XG59XG5cbmV4cG9ydCB7XG4gICAgc3RhcnREaXNwbGF5XG59XG5cbiIsImNvbnN0IGFkZENoaWxkRWxlbWVudCA9IChwYXJlbnQsIGVsZW1lbnQsIGNzcykgPT4ge1xuICAgIGxldCBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnR9YCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsbSk7IFxuICAgIGlmIChjc3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjc3NbMF0gPT0gJy4nIClcbiAgICAgICAgZWxtLmNsYXNzTmFtZSA9IGNzcy5zdWJzdHIoMSk7XG4gICAgICAgIGVsc2UgaWYgKGNzc1swXSA9PSAnIycpXG4gICAgICAgIGVsbS5pZCA9IGNzcy5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsbTtcbn1cblxuZXhwb3J0IHthZGRDaGlsZEVsZW1lbnR9OyIsImltcG9ydCB7IG9mZiwgb24sIGVtaXQgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgcHJvamVjdHMgPSAoKSA9PiB7XG5cbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIHByb2plY3RzXG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSB0b2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIG9uKCdzd2l0Y2hUYWInLCBiaW5kRXZlbnRzKTtcbiAgICBvbignYmluZFRvZG8nLCBiaW5kVG9kbyk7XG5cbiAgICBmdW5jdGlvbiBiaW5kVG9kbyh0b2RvKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvZG9zW2ldID09IHRvZG8pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2Rvc1tpXSk7XG4gICAgICAgICAgICAgICAgdG9kb3NbaV0uYmluZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvZG9zW2ldLmJpbmQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cyAocHJvamVjdCkge1xuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgIG9uKCdyZW1vdmVUb2RvJywgcmVtb3ZlVG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmYoJ3JlbW92ZVRvZG8nLCByZW1vdmVUb2RvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRvZG8sIG5hbWUsIHRvZG9zXG4gICAgfSAgIFxuXG59XG5cbmNvbnN0IHRvZG8gPSAobmFtZSwgZGF0LCBkZXMsIHByaSwgc3RhKSA9PiB7XG4gICAgXG4gICAgbGV0IGRhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgcHJpb3JpdHksXG4gICAgc3RhdHVzO1xuXG4gICAgaWYgKGRhdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGF0ZSA9IGRhdDtcbiAgICB9XG5cbiAgICBpZiAoZGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlcztcbiAgICB9XG5cbiAgICBpZiAocHJpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBwcmlvcml0eSA9IHByaTtcbiAgICB9XG5cbiAgICBpZiAoc3RhICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGF0dXMgPSBzdGE7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZCA9ICAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcbiAgICAgICAgICAgIG9uKCd1cGRhdGVUb2RvJywgdXBkYXRlVG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmYoJ3VwZGF0ZVRvZG8nLCB1cGRhdGVUb2RvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG8oYXJyYXkpIHtcbiAgICAgICAgbmFtZSA9IGFycmF5WzBdO1xuICAgICAgICBkYXRlID0gYXJyYXlbMV07XG4gICAgICAgIGRlc2NyaXB0aW9uID0gYXJyYXlbMl07XG4gICAgICAgIHByaW9yaXR5ID0gYXJyYXlbM107IFxuICAgICAgICBzdGF0dXMgPSBhcnJheVs0XTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGJpbmRcbiAgICB9XG59XG5cblxuXG5leHBvcnQge3Byb2plY3QsIHRvZG8sIHByb2plY3RzfSIsIlxuXG5sZXQgZXZlbnRzID0ge307XG5cbmNvbnN0IG9uID0gKGV2ZW50TmFtZSwgZm4pID0+ICB7XG4gIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xufTtcblxuY29uc3Qgb2ZmICA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBlbWl0ID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICBmbihkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge29uLCBvZmYsIGVtaXR9OyIsImltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtvbiwgb2ZmLCBlbWl0fSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG5cblxuZnVuY3Rpb24gc3RhcnRTaWRlYmFyIChwcm9qZWN0cykge1xuICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RzW2ldKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBhZGRDaGlsZEVsZW1lbnQoc2lkZWJhciwgJ2J1dHRvbicsICcucHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPXByb2plY3QubmFtZTtcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoVGFiKHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVGFiIChwcm9qZWN0KSB7XG4gICAgZW1pdCgnc3dpdGNoVGFiJywgcHJvamVjdCk7XG59XG5cbmV4cG9ydCB7c3RhcnRTaWRlYmFyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwcm9qZWN0LCB0b2RvLCBwcm9qZWN0c30gZnJvbSAgXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQge29uLCBvZmYsIGVtaXR9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHtzdGFydERpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7c3RhcnRTaWRlYmFyfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5cblxubGV0IGRhdGFiYXNlID0gcHJvamVjdHMoKTtcblxuZGF0YWJhc2UucHJvamVjdHNbMF0gPSBwcm9qZWN0KCdvbmUnKTtcbmRhdGFiYXNlLnByb2plY3RzWzFdID0gcHJvamVjdCgndHdvJyk7XG5kYXRhYmFzZS5wcm9qZWN0c1swXS5hZGRUb2RvKHRvZG8oJ2xvbCcpKTtcbmRhdGFiYXNlLnByb2plY3RzWzFdLmFkZFRvZG8odG9kbygxLCA1LCAzKSk7XG5kYXRhYmFzZS5wcm9qZWN0c1sxXS5hZGRUb2RvKHRvZG8oJ2xlbCcsICc4MjQ2JywgJ2Rvc29tZXRoaW5nJywgJ2xvdycsIHRydWUpKTtcblxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGFiYXNlJywgSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2UpKTtcblxubGV0IG5ld09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFiYXNlJykpO1xuXG5jb25zb2xlLmxvZyhuZXdPYmopO1xuXG5mdW5jdGlvbiBzd2l0Y2hUYWIgKHRhYikge1xuICAgIGVtaXQoJ3N3aXRjaFRhYicsIHRhYik7XG59O1xuXG5vbigncmVtb3ZlVG9kbycsICgpPT57XG4gICAgY29uc29sZS5sb2coZGF0YWJhc2UpO1xufSk7XG5cbnN0YXJ0RGlzcGxheSgpO1xuc3RhcnRTaWRlYmFyKGRhdGFiYXNlLnByb2plY3RzKTtcblxuc3dpdGNoVGFiKGRhdGFiYXNlLnByb2plY3RzWzFdKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9