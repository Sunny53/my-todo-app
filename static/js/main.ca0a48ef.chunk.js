(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(5),a=n.n(r),i=(n(13),n(7)),o=n(8),d=n(0),l=function(t){var e=t.setTodo,n=t.len,c="";return Object(d.jsx)("div",{className:"Form_container",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==(c=t.target.firstChild.value)&&e((function(t){return[].concat(Object(o.a)(t),[{id:n,todo:c}])})),t.target.firstChild.value=""},children:[Object(d.jsx)("input",{type:"text",placeholder:"Write a Task..."}),Object(d.jsx)("button",{class:"add_btn",type:"submit",children:"Add"}),Object(d.jsx)("button",{class:"clear_btn",onClick:function(){e((function(t){return[]}))},children:"Clear all"})]})})},u=function(){var t=new Date;return Object(d.jsxs)("div",{className:"Header",children:[Object(d.jsx)("h1",{children:"Sunny's To-do App"}),Object(d.jsxs)("h2",{children:[["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],", ",["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ",t.getDate()+", "+t.getFullYear()]})]})},j=n(6),b=function(t){var e=t.todoList,n=t.setTodo;return Object(d.jsx)("div",{className:"list_container",children:Object(d.jsx)("ul",{children:Object(d.jsx)("div",{children:e.map((function(t){return Object(d.jsx)("div",{className:"task_item",children:Object(d.jsxs)("li",{children:[t.todo," ",Object(d.jsx)(j.a,{class:"close_btn",onClick:function(){n(e.filter((function(e){return e.id!==t.id})))}})]})})}))})})})};var h=function(){var t=Object(c.useState)([{id:0,todo:"this is a sample task"}]),e=Object(i.a)(t,2),n=e[0],s=e[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)(l,{setTodo:s,len:n.length}),Object(d.jsx)(b,{todoList:n,setTodo:s})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),r(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.ca0a48ef.chunk.js.map