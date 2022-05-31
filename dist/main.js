/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uBAAuB;AAC3B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: 1px solid black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTodo": () => (/* binding */ renderTodo),
/* harmony export */   "startDisplay": () => (/* binding */ startDisplay)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-form */ "./src/todo-form.js");



const tab = document.querySelector('#display');
const form = document.querySelector('#form')

function startDisplay (project) {
    render(project);
}

function render(project) {
    removeContents();
    let header = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(tab, 'h3', '.header');
    header.textContent = project.name;
    for (let i = 0; i<project.todos.length ; i++) {
        renderTodo(project.todos[i], project);
    }
    createAddButton (project);
}

function renderTodo (todo, project) {
    createTodo(todo, project);
    updateValues(todo, project);
};

function createTodo (todo, project) {
    let container = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(tab, 'div', '.todo');
    let name = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'h4');
    let date = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'p');
    let description = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'p', '.description');
    container.dataset.priority = todo.priority;
    container.style = setBackground(container.dataset.priority);
    let check = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'input', '.checkbox');
    check.type = 'checkbox';
    check.addEventListener('change', () => project.editTodo(todo, [name.textContent, date.textContent, description.textContent, container.dataset.priority, check.checked]));
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
    todos[index].dataset.priority = todo.priority;
}

function removeTodo(todo, project) {
    let todos = Array.from(document.querySelectorAll('.todo'));
    let index = project.todos.indexOf(todo);
    todos[index].remove();
    project.removeTodo(todo);
}

function removeContents() {
    for (let i=tab.childNodes.length-1; i>=0; i--){
        tab.childNodes[i].remove();
    }
}

function setBackground(priority) {
    if (priority == 'high')
    return 'border-color: red';
    else if (priority == 'medium')
    return 'border-color: yellow';
    else return 'border-color: green';
}

function createAddButton (project) {
    let button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(tab, 'button', '#add-todo');
    button.textContent = '+';
    button.addEventListener('click', () => (0,_todo_form__WEBPACK_IMPORTED_MODULE_1__.createForm)(project, 'project'));
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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



const sidebar = document.querySelector('#sidebar');
const form = document.querySelector('#todo-form')

function startSidebar (projects) {
    for (let i=0; i<projects.length; i++){
        displayProject(projects[i]);
    }
}

function displayProject (project) {
    let newProject = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(sidebar, 'button', '.project');
    newProject.textContent = project.name;
    newProject.addEventListener('click', () => switchTab(project));
}

function switchTab (project) {
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.startDisplay)(project);
    //form.lastElementChild.remove();
}



/***/ }),

/***/ "./src/todo-form.js":
/*!**************************!*\
  !*** ./src/todo-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "pushTodo": () => (/* binding */ pushTodo)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");



//const add = document.querySelector('#submit-todo');
//const todo = document.querySelector('#todo');
//const date = document.querySelector('#date');
//const description = document.querySelector('#description');
//const priority = document.querySelector('#priority');

const body = document.querySelector('body');

function pushTodo (project) {
    project.addTodo(todo.value, date.value, description.value, priority.value);  
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(project.todos[project.todos.length-1], project); 
}

function createForm (project, type) {
    const form = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(body, 'form', '#form');
    const div1 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(form, 'div');
    const todo = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(div1, 'input', '#todo');
    todo.type = 'text';
    const div2 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(form, 'div');
    const date = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(div2, 'input', '#date');
    date.type = 'date';
    const div3 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(form, 'div');
    const description = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(div3, 'textarea', '#description');
    description.name = 'description';
    description.cols = 30;
    description.rows = 5;
    const div4 = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(form, 'div');
    const priority = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(div4, 'select', '#priority');
    priority.name = 'priority';
    const low = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(priority, 'option');
    low.value = 'low';
    low.textContent = 'Low';
    low.selected = true;
    const medium = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(priority, 'option');
    medium.value = 'medium';
    medium.textContent = 'Medium';
    const high = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(priority, 'option');
    high.value = 'high'; 
    high.textContent = 'High';
    if (type == 'project') {
        const button = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(form, 'button');
        button.type = 'button';
        button.textContent = 'ADD TODO';
        button.addEventListener('click', () => {
            pushTodo(project);
            form.remove();
        })
    }
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





let database = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projects)();

database.projects[0] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.project)('one');
database.projects[1] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.project)('two');
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

(0,_display__WEBPACK_IMPORTED_MODULE_1__.startDisplay)(database.projects[1]);
(0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.startSidebar)(database.projects);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNsQjs7QUFFckIsZUFBZSxtREFBUTs7QUFFdkIsdUJBQXVCLGtEQUFPO0FBQzlCLHVCQUF1QixrREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBWTtBQUNaLHNEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIi4vdG9kby1mb3JtXCI7XG5cbmNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Jyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKVxuXG5mdW5jdGlvbiBzdGFydERpc3BsYXkgKHByb2plY3QpIHtcbiAgICByZW5kZXIocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcihwcm9qZWN0KSB7XG4gICAgcmVtb3ZlQ29udGVudHMoKTtcbiAgICBsZXQgaGVhZGVyID0gYWRkQ2hpbGRFbGVtZW50KHRhYiwgJ2gzJywgJy5oZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8cHJvamVjdC50b2Rvcy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgcmVuZGVyVG9kbyhwcm9qZWN0LnRvZG9zW2ldLCBwcm9qZWN0KTtcbiAgICB9XG4gICAgY3JlYXRlQWRkQnV0dG9uIChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kbyAodG9kbywgcHJvamVjdCkge1xuICAgIGNyZWF0ZVRvZG8odG9kbywgcHJvamVjdCk7XG4gICAgdXBkYXRlVmFsdWVzKHRvZG8sIHByb2plY3QpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyAodG9kbywgcHJvamVjdCkge1xuICAgIGxldCBjb250YWluZXIgPSBhZGRDaGlsZEVsZW1lbnQodGFiLCAnZGl2JywgJy50b2RvJyk7XG4gICAgbGV0IG5hbWUgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnaDQnKTtcbiAgICBsZXQgZGF0ZSA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdwJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ3AnLCAnLmRlc2NyaXB0aW9uJyk7XG4gICAgY29udGFpbmVyLmRhdGFzZXQucHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAgIGNvbnRhaW5lci5zdHlsZSA9IHNldEJhY2tncm91bmQoY29udGFpbmVyLmRhdGFzZXQucHJpb3JpdHkpO1xuICAgIGxldCBjaGVjayA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdpbnB1dCcsICcuY2hlY2tib3gnKTtcbiAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBwcm9qZWN0LmVkaXRUb2RvKHRvZG8sIFtuYW1lLnRleHRDb250ZW50LCBkYXRlLnRleHRDb250ZW50LCBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCwgY29udGFpbmVyLmRhdGFzZXQucHJpb3JpdHksIGNoZWNrLmNoZWNrZWRdKSk7XG4gICAgbGV0IGRlbGV0ZVRvZG8gPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnYnV0dG9uJywgJy5kZWxldGUnKTtcbiAgICBkZWxldGVUb2RvLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZVRvZG8odG9kbywgcHJvamVjdCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZXMgKHRvZG8sIHByb2plY3QpIHtcbiAgICBsZXQgdG9kb3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJykpO1xuICAgIGxldCBpbmRleCA9IHByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb3NbaW5kZXhdLmNoaWxkTm9kZXNbM10uY2hlY2tlZCA9IHRvZG8uc3RhdHVzO1xuICAgIHRvZG9zW2luZGV4XS5kYXRhc2V0LnByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvLCBwcm9qZWN0KSB7XG4gICAgbGV0IHRvZG9zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpKTtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0LnRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgdG9kb3NbaW5kZXhdLnJlbW92ZSgpO1xuICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29udGVudHMoKSB7XG4gICAgZm9yIChsZXQgaT10YWIuY2hpbGROb2Rlcy5sZW5ndGgtMTsgaT49MDsgaS0tKXtcbiAgICAgICAgdGFiLmNoaWxkTm9kZXNbaV0ucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKHByaW9yaXR5KSB7XG4gICAgaWYgKHByaW9yaXR5ID09ICdoaWdoJylcbiAgICByZXR1cm4gJ2JvcmRlci1jb2xvcjogcmVkJztcbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PSAnbWVkaXVtJylcbiAgICByZXR1cm4gJ2JvcmRlci1jb2xvcjogeWVsbG93JztcbiAgICBlbHNlIHJldHVybiAnYm9yZGVyLWNvbG9yOiBncmVlbic7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbiAocHJvamVjdCkge1xuICAgIGxldCBidXR0b24gPSBhZGRDaGlsZEVsZW1lbnQodGFiLCAnYnV0dG9uJywgJyNhZGQtdG9kbycpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVGb3JtKHByb2plY3QsICdwcm9qZWN0JykpO1xufVxuXG5leHBvcnQge1xuICAgIHN0YXJ0RGlzcGxheSwgcmVuZGVyVG9kb1xufVxuXG4iLCJjb25zdCBhZGRDaGlsZEVsZW1lbnQgPSAocGFyZW50LCBlbGVtZW50LCBjc3MpID0+IHtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50fWApO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbG0pOyBcbiAgICBpZiAoY3NzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY3NzWzBdID09ICcuJyApXG4gICAgICAgIGVsbS5jbGFzc05hbWUgPSBjc3Muc3Vic3RyKDEpO1xuICAgICAgICBlbHNlIGlmIChjc3NbMF0gPT0gJyMnKVxuICAgICAgICBlbG0uaWQgPSBjc3Muc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiBlbG07XG59XG5cbmV4cG9ydCB7YWRkQ2hpbGRFbGVtZW50fTsiLCJcbmNvbnN0IHByb2plY3RzID0gKCkgPT4ge1xuXG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBwcm9qZWN0c1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKG5hbWUsIGRhdCwgZGVzLCBwcmksIHN0YSkgPT4ge1xuICAgICAgICBsZXQgbmV3VG9kbyA9IHRvZG8obmFtZSwgZGF0LCBkZXMsIHByaSwgc3RhKTtcbiAgICAgICAgdG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gdG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VG9kbyA9ICh0b2RvLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSB0b2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgICAgICB1cGRhdGVUb2RvKHRvZG9zW2luZGV4XSwgYXJyYXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG8odG9kbywgYXJyYXkpIHtcbiAgICAgICAgdG9kby5uYW1lID0gYXJyYXlbMF07XG4gICAgICAgIHRvZG8uZGF0ZSA9IGFycmF5WzFdO1xuICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gYXJyYXlbMl07XG4gICAgICAgIHRvZG8ucHJpb3JpdHkgPSBhcnJheVszXTsgXG4gICAgICAgIHRvZG8uc3RhdHVzID0gYXJyYXlbNF07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRvZG8sIG5hbWUsIHRvZG9zLCByZW1vdmVUb2RvLCBlZGl0VG9kbywgdXBkYXRlVG9kb1xuICAgIH0gICBcblxufVxuXG5cbmNvbnN0IHRvZG8gPSAobmFtZSwgZGF0LCBkZXMsIHByaSwgc3RhKSA9PiB7XG5cbiAgICBsZXQgZGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwcmlvcml0eSxcbiAgICBzdGF0dXM7XG5cbiAgICBpZiAoZGF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGF0ZSA9IGRhdDtcbiAgICB9XG4gICAgZWxzZSBkYXRlID0gJyc7XG5cbiAgICBpZiAoZGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlcztcbiAgICB9XG4gICAgZWxzZSBkZXNjcmlwdGlvbiA9ICcnO1xuXG4gICAgaWYgKHByaSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJpb3JpdHkgPSBwcmk7XG4gICAgfVxuICAgIGVsc2UgcHJpb3JpdHkgPSAnbG93JztcblxuICAgIGlmIChzdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXR1cyA9IHN0YTtcbiAgICB9XG4gICAgZWxzZSBzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXNcbiAgICB9XG59XG5cblxuXG5leHBvcnQge3Byb2plY3QsICBwcm9qZWN0cywgdG9kb30iLCJpbXBvcnQgeyBhZGRDaGlsZEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHN0YXJ0RGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpXG5cbmZ1bmN0aW9uIHN0YXJ0U2lkZWJhciAocHJvamVjdHMpIHtcbiAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0c1tpXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdCAocHJvamVjdCkge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gYWRkQ2hpbGRFbGVtZW50KHNpZGViYXIsICdidXR0b24nLCAnLnByb2plY3QnKTtcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUYWIocHJvamVjdCkpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUYWIgKHByb2plY3QpIHtcbiAgICBzdGFydERpc3BsYXkocHJvamVjdCk7XG4gICAgLy9mb3JtLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7c3RhcnRTaWRlYmFyfSIsImltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBhZGRDaGlsZEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuLy9jb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXRvZG8nKTtcbi8vY29uc3QgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XG4vL2NvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuLy9jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuLy9jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5mdW5jdGlvbiBwdXNoVG9kbyAocHJvamVjdCkge1xuICAgIHByb2plY3QuYWRkVG9kbyh0b2RvLnZhbHVlLCBkYXRlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgcHJpb3JpdHkudmFsdWUpOyAgXG4gICAgcmVuZGVyVG9kbyhwcm9qZWN0LnRvZG9zW3Byb2plY3QudG9kb3MubGVuZ3RoLTFdLCBwcm9qZWN0KTsgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0gKHByb2plY3QsIHR5cGUpIHtcbiAgICBjb25zdCBmb3JtID0gYWRkQ2hpbGRFbGVtZW50KGJvZHksICdmb3JtJywgJyNmb3JtJyk7XG4gICAgY29uc3QgZGl2MSA9IGFkZENoaWxkRWxlbWVudChmb3JtLCAnZGl2Jyk7XG4gICAgY29uc3QgdG9kbyA9IGFkZENoaWxkRWxlbWVudChkaXYxLCAnaW5wdXQnLCAnI3RvZG8nKTtcbiAgICB0b2RvLnR5cGUgPSAndGV4dCc7XG4gICAgY29uc3QgZGl2MiA9IGFkZENoaWxkRWxlbWVudChmb3JtLCAnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZSA9IGFkZENoaWxkRWxlbWVudChkaXYyLCAnaW5wdXQnLCAnI2RhdGUnKTtcbiAgICBkYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgY29uc3QgZGl2MyA9IGFkZENoaWxkRWxlbWVudChmb3JtLCAnZGl2Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRDaGlsZEVsZW1lbnQoZGl2MywgJ3RleHRhcmVhJywgJyNkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uLmNvbHMgPSAzMDtcbiAgICBkZXNjcmlwdGlvbi5yb3dzID0gNTtcbiAgICBjb25zdCBkaXY0ID0gYWRkQ2hpbGRFbGVtZW50KGZvcm0sICdkaXYnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGFkZENoaWxkRWxlbWVudChkaXY0LCAnc2VsZWN0JywgJyNwcmlvcml0eScpO1xuICAgIHByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIGNvbnN0IGxvdyA9IGFkZENoaWxkRWxlbWVudChwcmlvcml0eSwgJ29wdGlvbicpO1xuICAgIGxvdy52YWx1ZSA9ICdsb3cnO1xuICAgIGxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIGxvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgY29uc3QgbWVkaXVtID0gYWRkQ2hpbGRFbGVtZW50KHByaW9yaXR5LCAnb3B0aW9uJyk7XG4gICAgbWVkaXVtLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgbWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgY29uc3QgaGlnaCA9IGFkZENoaWxkRWxlbWVudChwcmlvcml0eSwgJ29wdGlvbicpO1xuICAgIGhpZ2gudmFsdWUgPSAnaGlnaCc7IFxuICAgIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgaWYgKHR5cGUgPT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFkZENoaWxkRWxlbWVudChmb3JtLCAnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBREQgVE9ETyc7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHB1c2hUb2RvKHByb2plY3QpO1xuICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7cHVzaFRvZG8sIGNyZWF0ZUZvcm19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtwcm9qZWN0LCBwcm9qZWN0cywgdG9kb30gZnJvbSAgXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQge3N0YXJ0RGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHtzdGFydFNpZGViYXJ9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBkYXRhYmFzZSA9IHByb2plY3RzKCk7XG5cbmRhdGFiYXNlLnByb2plY3RzWzBdID0gcHJvamVjdCgnb25lJyk7XG5kYXRhYmFzZS5wcm9qZWN0c1sxXSA9IHByb2plY3QoJ3R3bycpO1xuZGF0YWJhc2UucHJvamVjdHNbMF0uYWRkVG9kbygnbG9sJyk7XG5kYXRhYmFzZS5wcm9qZWN0c1swXS5hZGRUb2RvKCcxJywgNSwgMywgJycsIHRydWUpO1xuZGF0YWJhc2UucHJvamVjdHNbMV0uYWRkVG9kbygnbGVsJywgJzgyNDYnLCAnZG9zb21ldGhpbmcnLCAnaGlnaCcsIHRydWUpO1xuLy9cbi8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGFiYXNlJywgSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2UpKTtcbi8vXG4vL2xldCBuZXdPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhYmFzZScpKTtcbi8vXG4vL2NvbnNvbGUubG9nKG5ld09iaik7XG4vL1xuXG5zdGFydERpc3BsYXkoZGF0YWJhc2UucHJvamVjdHNbMV0pO1xuc3RhcnRTaWRlYmFyKGRhdGFiYXNlLnByb2plY3RzKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=