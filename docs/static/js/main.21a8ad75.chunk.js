(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),s=n(2),o=n(9),u=n(0),j=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(o.a)(t))})),i(""))},children:Object(u.jsx)("input",{type:"text",placeholder:"buscar",value:a,onChange:function(t){i(t.target.value)}})})},d=n(10),l=n(6),b=n.n(l),f=n(8),m=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,c,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"BHzrVw5bm8RmxyqDHF6i4qP9iH3UesCm",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=").concat("BHzrVw5bm8RmxyqDHF6i4qP9iH3UesCm"),t.next=4,fetch(n);case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,images:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){var e=t.id,n=t.title,c=t.images;return console.log(e,n,c),Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInDown",children:[Object(u.jsx)("img",{src:c,alt:n}),Object(u.jsx)("p",{children:n})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){m(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(g,Object(d.a)({},t),t.id)}))})]})},p=function(){var t=Object(c.useState)(["Futbol"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})},O=(n(17),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))});i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.21a8ad75.chunk.js.map