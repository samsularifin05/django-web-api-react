(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(18),i=n.n(o),s=n(8),l=n(2),u=(n(24),n(1)),j=function(){return Object(u.jsx)("div",{className:"app-header",children:Object(u.jsx)("h1",{children:"Note List"})})},b=n(6),d=n(10),f=n(13),p=function(e){return new Date(e.updated).toLocaleDateString()},h=function(e){var t=e.body.split("\n")[0];return t.length>45?t.slice(0,45):t},O=function(e){var t=h(e),n=e.body.replaceAll("\n"," ");return(n=n.replaceAll(t,"")).length>45?n.slice(0,45)+"...":n},v=function(e){var t=e.note;return Object(u.jsx)(s.b,{to:"/note/".concat(t.id),children:Object(u.jsxs)("div",{className:"notes-list-item",children:[Object(u.jsx)("h3",{children:h(t)}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:p(t)}),O(t)]})]})})},x=["title","titleId"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function w(e,t){var n=e.title,a=e.titleId,o=y(e,x);return c.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},o),void 0===n?c.createElement("title",{id:a},"add"):n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var g,E=c.forwardRef(w),N=(n.p,function(){return Object(u.jsx)(s.b,{to:"/note/new",className:"floating-button",children:Object(u.jsx)(E,{})})}),k=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){var t,n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"notes",children:[Object(u.jsxs)("div",{className:"notes-header",children:[Object(u.jsx)("h2",{className:"notes-title",children:"\u2636 Notes"}),Object(u.jsx)("p",{className:"notes-count",children:n.length})]}),Object(u.jsx)("div",{className:"notes-list",children:n.map((function(e,t){return Object(u.jsx)(v,{note:e},t)}))}),Object(u.jsx)(N,{})]})},S=n(16),C=["title","titleId"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function T(e,t){var n=e.title,r=e.titleId,a=I(e,C);return c.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"chevron-left"):n?c.createElement("title",{id:r},n):null,g||(g=c.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"})))}var D=c.forwardRef(T),J=(n.p,function(e){var t=e.match,n=e.history,r=t.params.id,a=Object(c.useState)(null),o=Object(f.a)(a,2),i=o[0],s=o[1];Object(c.useEffect)((function(){l()}),[r]);var l=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){var t,n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/notes/".concat(r,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,s(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/".concat(r,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/".concat(r,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n.push("/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){console.log("NOTE:",i),"new"!==r&&""==i.body?h():"new"!==r?p():"new"===r&&null!==i.body&&j(),n.push("/")};return Object(u.jsxs)("div",{className:"note",children:[Object(u.jsxs)("div",{className:"note-header",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(D,{onClick:O})}),"new"!==r?Object(u.jsx)("button",{onClick:h,children:"Delete"}):Object(u.jsx)("button",{onClick:O,children:"Done"})]}),Object(u.jsx)("textarea",{onChange:function(e){var t;t=e.target.value,s((function(e){return Object(S.a)(Object(S.a)({},e),{},{body:t})})),console.log("Handle Change:",i)},value:null===i||void 0===i?void 0:i.body})]})});var B=function(){return Object(u.jsx)(s.a,{children:Object(u.jsx)("div",{className:"container dark",children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(j,{}),Object(u.jsx)(l.a,{path:"/",exact:!0,component:k}),Object(u.jsx)(l.a,{path:"/note/:id",component:J})]})})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.cd402144.chunk.js.map