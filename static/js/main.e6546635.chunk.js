(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),l=a.n(c),r=(a(17),a(8)),i=a(2),s=a(3),d=a(4),u=a(1),m=function(e){var t=e.id,a=e.text,n=e.date,c=e.handleDeleteNote;return o.a.createElement(u.motion.div,Object.assign({className:"note"},f),o.a.createElement("span",null,a),o.a.createElement("div",{className:"note-footer"},o.a.createElement("small",null,n),o.a.createElement(d.a,{className:"delete-icon",size:"1.3em",onClick:function(){return c(t)}})))},h=function(e){var t=e.handleAddNote,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],r=c[1];return o.a.createElement(u.motion.div,Object.assign({className:"note new"},f),o.a.createElement("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note...",value:l,onChange:function(e){200-e.target.value.length>=0&&r(e.target.value)}}),o.a.createElement("div",{className:"note-footer"},o.a.createElement("small",null,200-l.length," Remaining"),o.a.createElement("button",{className:"save",onClick:function(){l.trim().length>0&&(t(l),r(""))}},"Save")))},f={initial:{y:"10%",opacity:0},animate:{y:0,opacity:1},transition:{duration:.4,ease:"easeInOut"}},E=function(e){var t=e.notes,a=e.handleAddNote,n=e.handleDeleteNote;return o.a.createElement("div",{className:"notes-list"},t.map(function(e){return o.a.createElement(m,{id:e.id,text:e.text,date:e.date,handleDeleteNote:n})}),o.a.createElement(h,{handleAddNote:a}))},N=function(e){var t=e.handleSearchNote;return o.a.createElement("div",{className:"search"},o.a.createElement(d.b,{className:"search-icons",size:"1.3em"}),o.a.createElement("input",{type:"text",placeholder:"Type to search...",onChange:function(e){t(e.target.value)}}))},g=function(e){var t=e.handleToggleDarkMode,a=e.handleReset,n=e.handleDeleteAll;return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Notes"),o.a.createElement("div",{className:"top-right-buttons"},o.a.createElement("button",{onClick:function(){t(function(e){return!e})},className:"toggle"},"Toggle Mode"),o.a.createElement("button",{onClick:function(){a()},className:"reset"},"Reset"),o.a.createElement("button",{onClick:function(){n()},className:"reset"},"Delete All")))},b=function(){var e=[{id:Object(s.a)(),text:"This is my FIRST Note!",date:"15/04/2021"},{id:Object(s.a)(),text:"You can ADD or DELETE notes.",date:"21/04/2021"},{id:Object(s.a)(),text:"See what happens if you refresh or reopen the tab!",date:"28/04/2021"},{id:Object(s.a)(),text:"Toggle between DARK and LIGHT mode to have some FUN!",date:"30/04/2021"}],t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],l=a[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),m=u[0],h=u[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),v=b[0],p=b[1];Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&(l(e),console.log("hihi"))},[]),Object(n.useEffect)(function(){localStorage.setItem("react-notes-app-data",JSON.stringify(c))},[c]);return o.a.createElement("div",{className:"".concat(m&&"dark-mode"," light-mode")},o.a.createElement("div",{className:"container"},o.a.createElement(g,{handleToggleDarkMode:h,handleReset:function(){l(e)},handleDeleteAll:function(){l([])}}),o.a.createElement(N,{handleSearchNote:p}),o.a.createElement(E,{notes:c.filter(function(e){return e.text.toLowerCase().includes(v.toLowerCase())}),handleAddNote:function(e){var t=new Date,a={id:Object(s.a)(),text:e,date:t.toLocaleDateString()},n=[].concat(Object(r.a)(c),[a]);l(n)},handleDeleteNote:function(e){var t=c.filter(function(t){return t.id!==e});l(t)}})))};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(b,null))},9:function(e,t,a){e.exports=a(28)}},[[9,2,1]]]);
//# sourceMappingURL=main.e6546635.chunk.js.map