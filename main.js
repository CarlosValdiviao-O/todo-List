(()=>{"use strict";const e=e=>{let t=[];return{addTodo:e=>{t.push(e)},name:e,todos:t,removeTodo:e=>{let o=t.indexOf(e);t.splice(o,1)}}};let t={};const o=(e,t,o)=>{let n=document.createElement(`${t}`);return e.appendChild(n),null!=o&&("."==o[0]?n.className=o.substr(1):"#"==o[0]&&(n.id=o.substr(1))),n},n=document.querySelector("#display");function d(e,t){!function(e,t){let d=o(n,"div",".todo"),l=(o(d,"h4"),o(d,"button",".delete"));l.textContent="delete",l.addEventListener("click",(()=>function(e,t){let o=Array.from(document.querySelectorAll(".todo")),n=t.todos.indexOf(e);t.removeTodo(e),o[n].remove()}(e,t)))}(e,t),function(e,t){Array.from(document.querySelectorAll(".todo"))[t.todos.indexOf(e)].childNodes[0].textContent=e.name}(e,t)}let l=[];l[0]=e("one"),l[1]=e("two"),l[0].addTodo({name:"lol",array:[]}),l[1].addTodo([1,5,3]),l[1].addTodo(((e,t,o,n)=>{let d,l,r;return d=t,l=o,{name:"lel",date:d,description:l,priority:r,status:!1}})(0,"8246","dosomething")),localStorage.setItem("projects",JSON.stringify(l));let r=JSON.parse(localStorage.getItem("projects"));var s;console.log(r),s=function(e){o(n,"h3",".header").textContent=e.name;for(let t=0;t<e.todos.length;t++)d(e.todos[t],e)},console.log("on"),t.switchTab=t.switchTab||[],t.switchTab.push(s),function(e){var o;o=e,console.log("emit"),t.switchTab&&t.switchTab.forEach((function(e){e(o)}))}(l[1])})();