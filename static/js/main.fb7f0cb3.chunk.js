(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),a=c(5),r=c(0),j=c.n(r),l=c(2),i=c(1),b=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsxs)("div",{className:"navdar-brand",children:[Object(i.jsx)(a.b,{className:"navbar-item",to:"/",children:"LOGO"}),Object(i.jsx)(a.b,{className:"navbar-item",to:"/home",children:"Home page"}),Object(i.jsx)(a.b,{className:"navbar-item",to:"/people",children:"Peope page"})]})})})},o=function(){return Object(i.jsx)("h1",{className:"subtitle",children:"Home page"})},h=function(e){var t=e.person;return Object(i.jsx)(i.Fragment,{children:Object.values(t).slice(0,Object.values(t).length-1).map((function(e){return Object(i.jsx)("td",{children:e},t.born)}))})},d=c(4);function u(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}))}var O=j.a.createContext(null),x=function(e){var t=e.children,c=Object(r.useState)(null),n=Object(d.a)(c,2),s=n[0],a=n[1];return Object(r.useEffect)((function(){u().then((function(e){a(e)}))}),[]),Object(i.jsx)(O.Provider,{value:s,children:t})},p=["name","sex","born","died","father","mother"],m=function(){var e=Object(r.useContext)(O);return Object(i.jsxs)("table",{className:"table",style:{borderCollapse:"collapse"},children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{children:p.map((function(e){return Object(i.jsx)("th",{children:Object(i.jsx)("abbr",{title:e,children:e.toUpperCase()})})}))})}),e&&e.map((function(e){return Object(i.jsx)("tbody",{children:Object(i.jsx)(h,{person:e})},e.died)}))]})},f=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"subtitle",children:"People table"}),Object(i.jsx)(m,{})]})},v=function(){return Object(i.jsx)("h1",{className:"subtitle",style:{color:"red"},children:"Page not found"})},N=(c(14),function(){return Object(i.jsx)(x,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(b,{}),Object(i.jsx)("section",{className:"section",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"Main title"}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",element:Object(i.jsx)(o,{})}),Object(i.jsx)(l.a,{path:"/home",element:Object(i.jsx)(o,{})}),Object(i.jsx)(l.a,{path:"/people",element:Object(i.jsx)(f,{})}),Object(i.jsx)(l.a,{path:"*",element:Object(i.jsx)(v,{})})]})]})})]})})});s.a.render(Object(i.jsx)(a.a,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fb7f0cb3.chunk.js.map