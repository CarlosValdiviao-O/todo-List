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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: 1px solid black;\n}\n\nbody {\n    position: relative;\n}\n\n#background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / 40%);\n    transform: scale(0);\n}\n\n#background.active {\n    transform: scale(1);\n}\n\nform {\n    width: 400px;\n    height: max-content; \n    background-color: white;\n    position: fixed;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n    transition: 0.2s ease-in-out;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 10px;\n    border-radius: 16px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,gCAAgC;IAChC,QAAQ;IACR,SAAS;IACT,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: 1px solid black;\n}\n\nbody {\n    position: relative;\n}\n\n#background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0 0 0 / 40%);\n    transform: scale(0);\n}\n\n#background.active {\n    transform: scale(1);\n}\n\nform {\n    width: 400px;\n    height: max-content; \n    background-color: white;\n    position: fixed;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n    transition: 0.2s ease-in-out;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 10px;\n    border-radius: 16px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "startDisplay": () => (/* binding */ startDisplay),
/* harmony export */   "updateValues": () => (/* binding */ updateValues)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-form */ "./src/todo-form.js");



const tab = document.querySelector('#display');
//const form = document.querySelector('#form');

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
    let edit = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(container, 'button', '.edit');
    edit.textContent = 'edit';
    edit.addEventListener('click', () => (0,_todo_form__WEBPACK_IMPORTED_MODULE_1__.createForm)(project, 'edit', todo));
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
    todos[index].style = setBackground(todos[index].dataset.priority);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





let database = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.projects)();
checkLocalStorage(); 

function updateStorage() {
    localStorage.setItem('database', JSON.stringify(database));
}

function checkLocalStorage () {
    if (localStorage.database) {
        createDatabase();
    }
    else {
        database.projects[0] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.project)('Example');
        //fix dates
        database.projects[0].todos[0] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.todo)('Todo1', 'date', 'Do something', 'medium');
        database.projects[0].todos[1] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.todo)('Todo2', 'date', 'Do some other stuff', 'low');
        database.projects[0].todos[2] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.todo)('Todo3', 'date', 'Enter this page', 'high', true);
    }
}

function createDatabase () {
    let local = JSON.parse(localStorage.getItem('database'));
    for (let i=0; i<local.projects.length; i++) {
        database.projects[i] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.project)(local.projects[i].name);
        for (let j=0; j<local.projects[i].todos.length; j++) {
            let name = local.projects[i].todos[j].name;
            let date = local.projects[i].todos[j].date;
            let description = local.projects[i].todos[j].description;
            let priority = local.projects[i].todos[j].priority;
            let status = local.projects[i].todos[j].status;
            database.projects[i].todos[j] = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.todo)(name, date, description, priority, status); 
        }
    }
}

(0,_display__WEBPACK_IMPORTED_MODULE_1__.startDisplay)(database.projects[0]);
(0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.startSidebar)(database);



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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


const projects = () => {

    let projects = [];

    const addProject = (name) => {
        let newProject = project(name);
        projects.push(newProject);
        (0,___WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
    }

    const removeProject = (project) => {
        let index = projects.indexOf(project);
        projects.splice(index, 1);
        (0,___WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
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
        (0,___WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
    }

    const removeTodo = (todo) => {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
        (0,___WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
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
        (0,___WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
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

function startSidebar (database) {
    let projects = database.projects;
    for (let i=0; i<projects.length; i++){
        displayProject(database, projects[i]);
    }
    createAddProjectButton(database);
}

function displayProject (database, project) {
    let div = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement) (sidebar, 'div', '.project');
    let newProject = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'button');
    newProject.textContent = project.name;
    newProject.addEventListener('click', () => switchTab(project));
    let erase = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(div, 'button', '.delete');
    erase.textContent = 'x';
    erase.addEventListener('click', () => removeProject(database, project));
}

function switchTab (project) {
    (0,_display__WEBPACK_IMPORTED_MODULE_1__.startDisplay)(project);
}

function createAddProjectButton (database) {
    let button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(sidebar, 'button', '#add-project');
    button.textContent = 'NEW PROJECT';
    button.addEventListener('click', () => displayInput(database));
}

function displayInput (database) {
    document.querySelector('#add-project').remove();
    let input = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(sidebar, 'input', '#project');
    input.type = 'text';
    input.focus();
    let button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addChildElement)(sidebar, 'button', '#push-project');
    button.textContent = '+';
    button.addEventListener('click', () => pushProject(database, input.value));
}

function pushProject (database, project) {
    document.querySelector('#project').remove();
    document.querySelector('#push-project').remove(); 
    database.addProject(project);
    displayProject(database, database.projects[database.projects.length-1]);
    createAddProjectButton (database);
}

function removeProject (database, project) {
    let projects = Array.from(document.querySelectorAll('.project'));
    let index = database.projects.indexOf(project);
    projects[index].remove();
    database.removeProject(project);
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



const body = document.querySelector('body');
const background = document.querySelector('#background');

background.addEventListener('click', () => {
    document.querySelector('form').remove();
    background.classList.remove('active')
});

function pushTodo (project) {
    project.addTodo(todo.value, date.value, description.value, priority.value);  
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(project.todos[project.todos.length-1], project); 
}

function createForm (project, type, picked) {
    background.classList.add('active');
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
            background.classList.remove('active');
        })
    }
    else {
        const button = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.addChildElement)(form, 'button');
        button.type = 'button';
        button.textContent = 'EDIT TODO';
        todo.value = picked.name;
        date.value = picked.date;
        description.value = picked.description;
        priority.value = picked.priority;
        button.addEventListener('click', () => {
            project.editTodo(picked, [todo.value, date.value, description.value, priority.value]);
            (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateValues)(picked, project);
            form.remove();
            background.classList.remove('active');
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVk7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztVQ3BFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2JhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNDAlKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuI2JhY2tncm91bmQuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLFFBQVE7SUFDUixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNiYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQwJSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbiNiYWNrZ3JvdW5kLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZENoaWxkRWxlbWVudCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCIuL3RvZG8tZm9ybVwiO1xuXG5jb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xuLy9jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKTtcblxuZnVuY3Rpb24gc3RhcnREaXNwbGF5IChwcm9qZWN0KSB7XG4gICAgcmVuZGVyKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXIocHJvamVjdCkge1xuICAgIHJlbW92ZUNvbnRlbnRzKCk7XG4gICAgbGV0IGhlYWRlciA9IGFkZENoaWxkRWxlbWVudCh0YWIsICdoMycsICcuaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPHByb2plY3QudG9kb3MubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIHJlbmRlclRvZG8ocHJvamVjdC50b2Rvc1tpXSwgcHJvamVjdCk7XG4gICAgfVxuICAgIGNyZWF0ZUFkZEJ1dHRvbiAocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG8gKHRvZG8sIHByb2plY3QpIHtcbiAgICBjcmVhdGVUb2RvKHRvZG8sIHByb2plY3QpO1xuICAgIHVwZGF0ZVZhbHVlcyh0b2RvLCBwcm9qZWN0KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8gKHRvZG8sIHByb2plY3QpIHtcbiAgICBsZXQgY29udGFpbmVyID0gYWRkQ2hpbGRFbGVtZW50KHRhYiwgJ2RpdicsICcudG9kbycpO1xuICAgIGxldCBuYW1lID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2g0Jyk7XG4gICAgbGV0IGRhdGUgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAncCcpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGFkZENoaWxkRWxlbWVudChjb250YWluZXIsICdwJywgJy5kZXNjcmlwdGlvbicpO1xuICAgIGNvbnRhaW5lci5kYXRhc2V0LnByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcbiAgICBjb250YWluZXIuc3R5bGUgPSBzZXRCYWNrZ3JvdW5kKGNvbnRhaW5lci5kYXRhc2V0LnByaW9yaXR5KTtcbiAgICBsZXQgY2hlY2sgPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnaW5wdXQnLCAnLmNoZWNrYm94Jyk7XG4gICAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gcHJvamVjdC5lZGl0VG9kbyh0b2RvLCBbbmFtZS50ZXh0Q29udGVudCwgZGF0ZS50ZXh0Q29udGVudCwgZGVzY3JpcHRpb24udGV4dENvbnRlbnQsIGNvbnRhaW5lci5kYXRhc2V0LnByaW9yaXR5LCBjaGVjay5jaGVja2VkXSkpO1xuICAgIGxldCBlZGl0ID0gYWRkQ2hpbGRFbGVtZW50KGNvbnRhaW5lciwgJ2J1dHRvbicsICcuZWRpdCcpO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZUZvcm0ocHJvamVjdCwgJ2VkaXQnLCB0b2RvKSk7XG4gICAgbGV0IGRlbGV0ZVRvZG8gPSBhZGRDaGlsZEVsZW1lbnQoY29udGFpbmVyLCAnYnV0dG9uJywgJy5kZWxldGUnKTtcbiAgICBkZWxldGVUb2RvLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZVRvZG8odG9kbywgcHJvamVjdCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZXMgKHRvZG8sIHByb2plY3QpIHtcbiAgICBsZXQgdG9kb3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJykpO1xuICAgIGxldCBpbmRleCA9IHByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICB0b2Rvc1tpbmRleF0uY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb3NbaW5kZXhdLmNoaWxkTm9kZXNbM10uY2hlY2tlZCA9IHRvZG8uc3RhdHVzO1xuICAgIHRvZG9zW2luZGV4XS5kYXRhc2V0LnByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcbiAgICB0b2Rvc1tpbmRleF0uc3R5bGUgPSBzZXRCYWNrZ3JvdW5kKHRvZG9zW2luZGV4XS5kYXRhc2V0LnByaW9yaXR5KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvLCBwcm9qZWN0KSB7XG4gICAgbGV0IHRvZG9zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpKTtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0LnRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgdG9kb3NbaW5kZXhdLnJlbW92ZSgpO1xuICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29udGVudHMoKSB7XG4gICAgZm9yIChsZXQgaT10YWIuY2hpbGROb2Rlcy5sZW5ndGgtMTsgaT49MDsgaS0tKXtcbiAgICAgICAgdGFiLmNoaWxkTm9kZXNbaV0ucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKHByaW9yaXR5KSB7XG4gICAgaWYgKHByaW9yaXR5ID09ICdoaWdoJylcbiAgICByZXR1cm4gJ2JvcmRlci1jb2xvcjogcmVkJztcbiAgICBlbHNlIGlmIChwcmlvcml0eSA9PSAnbWVkaXVtJylcbiAgICByZXR1cm4gJ2JvcmRlci1jb2xvcjogeWVsbG93JztcbiAgICBlbHNlIHJldHVybiAnYm9yZGVyLWNvbG9yOiBncmVlbic7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbiAocHJvamVjdCkge1xuICAgIGxldCBidXR0b24gPSBhZGRDaGlsZEVsZW1lbnQodGFiLCAnYnV0dG9uJywgJyNhZGQtdG9kbycpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVGb3JtKHByb2plY3QsICdwcm9qZWN0JykpO1xufVxuXG5leHBvcnQge1xuICAgIHN0YXJ0RGlzcGxheSwgcmVuZGVyVG9kbywgdXBkYXRlVmFsdWVzXG59IiwiY29uc3QgYWRkQ2hpbGRFbGVtZW50ID0gKHBhcmVudCwgZWxlbWVudCwgY3NzKSA9PiB7XG4gICAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxtKTsgXG4gICAgaWYgKGNzcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNzc1swXSA9PSAnLicgKVxuICAgICAgICBlbG0uY2xhc3NOYW1lID0gY3NzLnN1YnN0cigxKTtcbiAgICAgICAgZWxzZSBpZiAoY3NzWzBdID09ICcjJylcbiAgICAgICAgZWxtLmlkID0gY3NzLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxtO1xufVxuXG5leHBvcnQge2FkZENoaWxkRWxlbWVudH07IiwiaW1wb3J0IHtwcm9qZWN0LCBwcm9qZWN0cywgdG9kb30gZnJvbSAgXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQge3N0YXJ0RGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHtzdGFydFNpZGViYXJ9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBkYXRhYmFzZSA9IHByb2plY3RzKCk7XG5jaGVja0xvY2FsU3RvcmFnZSgpOyBcblxuZnVuY3Rpb24gdXBkYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YWJhc2UnLCBKU09OLnN0cmluZ2lmeShkYXRhYmFzZSkpO1xufVxuXG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSAoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5kYXRhYmFzZSkge1xuICAgICAgICBjcmVhdGVEYXRhYmFzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGF0YWJhc2UucHJvamVjdHNbMF0gPSBwcm9qZWN0KCdFeGFtcGxlJyk7XG4gICAgICAgIC8vZml4IGRhdGVzXG4gICAgICAgIGRhdGFiYXNlLnByb2plY3RzWzBdLnRvZG9zWzBdID0gdG9kbygnVG9kbzEnLCAnZGF0ZScsICdEbyBzb21ldGhpbmcnLCAnbWVkaXVtJyk7XG4gICAgICAgIGRhdGFiYXNlLnByb2plY3RzWzBdLnRvZG9zWzFdID0gdG9kbygnVG9kbzInLCAnZGF0ZScsICdEbyBzb21lIG90aGVyIHN0dWZmJywgJ2xvdycpO1xuICAgICAgICBkYXRhYmFzZS5wcm9qZWN0c1swXS50b2Rvc1syXSA9IHRvZG8oJ1RvZG8zJywgJ2RhdGUnLCAnRW50ZXIgdGhpcyBwYWdlJywgJ2hpZ2gnLCB0cnVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGFiYXNlICgpIHtcbiAgICBsZXQgbG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhYmFzZScpKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bG9jYWwucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YWJhc2UucHJvamVjdHNbaV0gPSBwcm9qZWN0KGxvY2FsLnByb2plY3RzW2ldLm5hbWUpO1xuICAgICAgICBmb3IgKGxldCBqPTA7IGo8bG9jYWwucHJvamVjdHNbaV0udG9kb3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gbG9jYWwucHJvamVjdHNbaV0udG9kb3Nbal0ubmFtZTtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbG9jYWwucHJvamVjdHNbaV0udG9kb3Nbal0uZGF0ZTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGxvY2FsLnByb2plY3RzW2ldLnRvZG9zW2pdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gbG9jYWwucHJvamVjdHNbaV0udG9kb3Nbal0ucHJpb3JpdHk7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gbG9jYWwucHJvamVjdHNbaV0udG9kb3Nbal0uc3RhdHVzO1xuICAgICAgICAgICAgZGF0YWJhc2UucHJvamVjdHNbaV0udG9kb3Nbal0gPSB0b2RvKG5hbWUsIGRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbnN0YXJ0RGlzcGxheShkYXRhYmFzZS5wcm9qZWN0c1swXSk7XG5zdGFydFNpZGViYXIoZGF0YWJhc2UpO1xuXG5leHBvcnQgeyB1cGRhdGVTdG9yYWdlIH0iLCJpbXBvcnQgeyB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi5cIjtcblxuY29uc3QgcHJvamVjdHMgPSAoKSA9PiB7XG5cbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3QobmFtZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIHByb2plY3RzXG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAobmFtZSwgZGF0LCBkZXMsIHByaSwgc3RhKSA9PiB7XG4gICAgICAgIGxldCBuZXdUb2RvID0gdG9kbyhuYW1lLCBkYXQsIGRlcywgcHJpLCBzdGEpO1xuICAgICAgICB0b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IHRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VG9kbyA9ICh0b2RvLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSB0b2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgICAgICB1cGRhdGVUb2RvKHRvZG9zW2luZGV4XSwgYXJyYXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG8odG9kbywgYXJyYXkpIHtcbiAgICAgICAgdG9kby5uYW1lID0gYXJyYXlbMF07XG4gICAgICAgIHRvZG8uZGF0ZSA9IGFycmF5WzFdO1xuICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gYXJyYXlbMl07XG4gICAgICAgIHRvZG8ucHJpb3JpdHkgPSBhcnJheVszXTsgXG4gICAgICAgIHRvZG8uc3RhdHVzID0gYXJyYXlbNF07XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVG9kbywgbmFtZSwgdG9kb3MsIHJlbW92ZVRvZG8sIGVkaXRUb2RvLCB1cGRhdGVUb2RvXG4gICAgfSAgIFxuXG59XG5cblxuY29uc3QgdG9kbyA9IChuYW1lLCBkYXQsIGRlcywgcHJpLCBzdGEpID0+IHtcblxuICAgIGxldCBkYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByaW9yaXR5LFxuICAgIHN0YXR1cztcblxuICAgIGlmIChkYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkYXRlID0gZGF0O1xuICAgIH1cbiAgICBlbHNlIGRhdGUgPSAnJztcblxuICAgIGlmIChkZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZGVzO1xuICAgIH1cbiAgICBlbHNlIGRlc2NyaXB0aW9uID0gJyc7XG5cbiAgICBpZiAocHJpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBwcmlvcml0eSA9IHByaTtcbiAgICB9XG4gICAgZWxzZSBwcmlvcml0eSA9ICdsb3cnO1xuXG4gICAgaWYgKHN0YSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhdHVzID0gc3RhO1xuICAgIH1cbiAgICBlbHNlIHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHN0YXR1c1xuICAgIH1cbn1cblxuZXhwb3J0IHtwcm9qZWN0LCAgcHJvamVjdHMsIHRvZG99IiwiaW1wb3J0IHsgYWRkQ2hpbGRFbGVtZW50IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBzdGFydERpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuXG5mdW5jdGlvbiBzdGFydFNpZGViYXIgKGRhdGFiYXNlKSB7XG4gICAgbGV0IHByb2plY3RzID0gZGF0YWJhc2UucHJvamVjdHM7XG4gICAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGlzcGxheVByb2plY3QoZGF0YWJhc2UsIHByb2plY3RzW2ldKTtcbiAgICB9XG4gICAgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbihkYXRhYmFzZSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0IChkYXRhYmFzZSwgcHJvamVjdCkge1xuICAgIGxldCBkaXYgPSBhZGRDaGlsZEVsZW1lbnQgKHNpZGViYXIsICdkaXYnLCAnLnByb2plY3QnKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IGFkZENoaWxkRWxlbWVudChkaXYsICdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUYWIocHJvamVjdCkpO1xuICAgIGxldCBlcmFzZSA9IGFkZENoaWxkRWxlbWVudChkaXYsICdidXR0b24nLCAnLmRlbGV0ZScpO1xuICAgIGVyYXNlLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIGVyYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlUHJvamVjdChkYXRhYmFzZSwgcHJvamVjdCkpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUYWIgKHByb2plY3QpIHtcbiAgICBzdGFydERpc3BsYXkocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFByb2plY3RCdXR0b24gKGRhdGFiYXNlKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGFkZENoaWxkRWxlbWVudChzaWRlYmFyLCAnYnV0dG9uJywgJyNhZGQtcHJvamVjdCcpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdORVcgUFJPSkVDVCc7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUlucHV0KGRhdGFiYXNlKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbnB1dCAoZGF0YWJhc2UpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKS5yZW1vdmUoKTtcbiAgICBsZXQgaW5wdXQgPSBhZGRDaGlsZEVsZW1lbnQoc2lkZWJhciwgJ2lucHV0JywgJyNwcm9qZWN0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGxldCBidXR0b24gPSBhZGRDaGlsZEVsZW1lbnQoc2lkZWJhciwgJ2J1dHRvbicsICcjcHVzaC1wcm9qZWN0Jyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHB1c2hQcm9qZWN0KGRhdGFiYXNlLCBpbnB1dC52YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBwdXNoUHJvamVjdCAoZGF0YWJhc2UsIHByb2plY3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdXNoLXByb2plY3QnKS5yZW1vdmUoKTsgXG4gICAgZGF0YWJhc2UuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdChkYXRhYmFzZSwgZGF0YWJhc2UucHJvamVjdHNbZGF0YWJhc2UucHJvamVjdHMubGVuZ3RoLTFdKTtcbiAgICBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uIChkYXRhYmFzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QgKGRhdGFiYXNlLCBwcm9qZWN0KSB7XG4gICAgbGV0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpKTtcbiAgICBsZXQgaW5kZXggPSBkYXRhYmFzZS5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgIHByb2plY3RzW2luZGV4XS5yZW1vdmUoKTtcbiAgICBkYXRhYmFzZS5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xufVxuXG5leHBvcnQge3N0YXJ0U2lkZWJhcn0iLCJpbXBvcnQgeyByZW5kZXJUb2RvLCB1cGRhdGVWYWx1ZXMgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBhZGRDaGlsZEVsZW1lbnQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2dyb3VuZCcpO1xuXG5iYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZW1vdmUoKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG59KTtcblxuZnVuY3Rpb24gcHVzaFRvZG8gKHByb2plY3QpIHtcbiAgICBwcm9qZWN0LmFkZFRvZG8odG9kby52YWx1ZSwgZGF0ZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIHByaW9yaXR5LnZhbHVlKTsgIFxuICAgIHJlbmRlclRvZG8ocHJvamVjdC50b2Rvc1twcm9qZWN0LnRvZG9zLmxlbmd0aC0xXSwgcHJvamVjdCk7IFxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtIChwcm9qZWN0LCB0eXBlLCBwaWNrZWQpIHtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGNvbnN0IGZvcm0gPSBhZGRDaGlsZEVsZW1lbnQoYm9keSwgJ2Zvcm0nLCAnI2Zvcm0nKTtcbiAgICBjb25zdCBkaXYxID0gYWRkQ2hpbGRFbGVtZW50KGZvcm0sICdkaXYnKTtcbiAgICBjb25zdCB0b2RvID0gYWRkQ2hpbGRFbGVtZW50KGRpdjEsICdpbnB1dCcsICcjdG9kbycpO1xuICAgIHRvZG8udHlwZSA9ICd0ZXh0JztcbiAgICBjb25zdCBkaXYyID0gYWRkQ2hpbGRFbGVtZW50KGZvcm0sICdkaXYnKTtcbiAgICBjb25zdCBkYXRlID0gYWRkQ2hpbGRFbGVtZW50KGRpdjIsICdpbnB1dCcsICcjZGF0ZScpO1xuICAgIGRhdGUudHlwZSA9ICdkYXRlJztcbiAgICBjb25zdCBkaXYzID0gYWRkQ2hpbGRFbGVtZW50KGZvcm0sICdkaXYnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENoaWxkRWxlbWVudChkaXYzLCAndGV4dGFyZWEnLCAnI2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24ubmFtZSA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb24uY29scyA9IDMwO1xuICAgIGRlc2NyaXB0aW9uLnJvd3MgPSA1O1xuICAgIGNvbnN0IGRpdjQgPSBhZGRDaGlsZEVsZW1lbnQoZm9ybSwgJ2RpdicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gYWRkQ2hpbGRFbGVtZW50KGRpdjQsICdzZWxlY3QnLCAnI3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgY29uc3QgbG93ID0gYWRkQ2hpbGRFbGVtZW50KHByaW9yaXR5LCAnb3B0aW9uJyk7XG4gICAgbG93LnZhbHVlID0gJ2xvdyc7XG4gICAgbG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgbG93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBjb25zdCBtZWRpdW0gPSBhZGRDaGlsZEVsZW1lbnQocHJpb3JpdHksICdvcHRpb24nKTtcbiAgICBtZWRpdW0udmFsdWUgPSAnbWVkaXVtJztcbiAgICBtZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICBjb25zdCBoaWdoID0gYWRkQ2hpbGRFbGVtZW50KHByaW9yaXR5LCAnb3B0aW9uJyk7XG4gICAgaGlnaC52YWx1ZSA9ICdoaWdoJzsgXG4gICAgaGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBpZiAodHlwZSA9PSAncHJvamVjdCcpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYWRkQ2hpbGRFbGVtZW50KGZvcm0sICdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FERCBUT0RPJztcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHVzaFRvZG8ocHJvamVjdCk7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGFkZENoaWxkRWxlbWVudChmb3JtLCAnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdFRElUIFRPRE8nO1xuICAgICAgICB0b2RvLnZhbHVlID0gcGlja2VkLm5hbWU7XG4gICAgICAgIGRhdGUudmFsdWUgPSBwaWNrZWQuZGF0ZTtcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBwaWNrZWQuZGVzY3JpcHRpb247XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gcGlja2VkLnByaW9yaXR5O1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LmVkaXRUb2RvKHBpY2tlZCwgW3RvZG8udmFsdWUsIGRhdGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBwcmlvcml0eS52YWx1ZV0pO1xuICAgICAgICAgICAgdXBkYXRlVmFsdWVzKHBpY2tlZCwgcHJvamVjdCk7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7cHVzaFRvZG8sIGNyZWF0ZUZvcm19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=