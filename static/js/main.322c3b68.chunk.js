(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),o=a.n(l),r=(a(16),a(6)),i=a(1),s=a(2),d=a(3),u=function(e){var t=e.id,a=e.text,n=e.date,l=e.handleDeleteNote;return c.a.createElement("div",{className:"note"},c.a.createElement("span",null,a),c.a.createElement("div",{className:"note-footer"},c.a.createElement("small",null,n),c.a.createElement(d.a,{className:"delete-icon",size:"1.3em",onClick:function(){return l(t)}})))},m=function(e){var t=e.handleAddNote,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],r=l[1];return c.a.createElement("div",{className:"note new"},c.a.createElement("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note...",value:o,onChange:function(e){200-e.target.value.length>=0&&r(e.target.value)}}),c.a.createElement("div",{className:"note-footer"},c.a.createElement("small",null,200-o.length," Remaining"),c.a.createElement("button",{className:"save",onClick:function(){o.trim().length>0&&(t(o),r(""))}},"Save")))},h=function(e){var t=e.notes,a=e.handleAddNote,n=e.handleDeleteNote;return c.a.createElement("div",{className:"notes-list"},t.map(function(e){return c.a.createElement(u,{id:e.id,text:e.text,date:e.date,handleDeleteNote:n})}),c.a.createElement(m,{handleAddNote:a}))},f=function(e){var t=e.handleSearchNote;return c.a.createElement("div",{className:"search"},c.a.createElement(d.b,{className:"search-icons",size:"1.3em"}),c.a.createElement("input",{type:"text",placeholder:"Type to search...",onChange:function(e){t(e.target.value)}}))},E=function(e){var t=e.handleToggleDarkMode;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Notes"),c.a.createElement("button",{onClick:function(){t(function(e){return!e})},className:"toggle"},"Toggle Mode"))},N=function(){var e=Object(n.useState)([{id:Object(s.a)(),text:"This is my first note!",date:"15/04/2021"},{id:Object(s.a)(),text:"This is my second note!",date:"21/04/2021"},{id:Object(s.a)(),text:"This is my third note!",date:"28/04/2021"},{id:Object(s.a)(),text:"This is my new note!",date:"30/04/2021"}]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),d=Object(i.a)(o,2),u=d[0],m=d[1],N=Object(n.useState)(!1),v=Object(i.a)(N,2),g=v[0],b=v[1];Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&(l(e),console.log("hihi"))},[]),Object(n.useEffect)(function(){localStorage.setItem("react-notes-app-data",JSON.stringify(a))},[a]);return c.a.createElement("div",{className:"".concat(g&&"dark-mode")},c.a.createElement("div",{className:"container"},c.a.createElement(E,{handleToggleDarkMode:b}),c.a.createElement(f,{handleSearchNote:m}),c.a.createElement(h,{notes:a.filter(function(e){return e.text.toLowerCase().includes(u)}),handleAddNote:function(e){var t=new Date,n={id:Object(s.a)(),text:e,date:t.toLocaleDateString()},c=[].concat(Object(r.a)(a),[n]);l(c)},handleDeleteNote:function(e){var t=a.filter(function(t){return t.id!==e});l(t)}})))};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(N,null))},7:function(e,t,a){e.exports=a(18)}},[[7,2,1]]]);
//# sourceMappingURL=main.322c3b68.chunk.js.map