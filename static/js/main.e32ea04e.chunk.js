(this.webpackJsonpecard=this.webpackJsonpecard||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(5),r=n.n(s),o=(n(10),n(2)),a=(n(4),n.p+"static/media/Christmas.b7a14860.jpg"),l=n(0);var j=function(e){var t=e.greeting,n=e.body,c=e.closing,i=e.setCustomize,s=e.preview,r=e.setPreview,o=e.email;return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:a,className:"App-logo",alt:"Christmas images"}),Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:n}),Object(l.jsx)("p",{children:c}),s?Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){i(!0),r(!1)},children:"ContinueEditing"}),Object(l.jsx)("button",{onClick:function(){var e="mailto:".concat(o);e+="?subject=E-Card",e+="&body=You have received an e-greeting card.",e+="%0D%0A%0D%0A",e+="Go To Greeting Card",e+="%0D%0A";var i="https://eyobel7k.github.io/ecard";i+="?greeting=".concat(encodeURIComponent(t)),i+="&body=".concat(encodeURIComponent(n)),i+="&closing=".concat(encodeURIComponent(c)),e+=encodeURIComponent(i),console.log(e),window.open(e)},children:"Send"})]}):Object(l.jsx)("button",{className:"App-link",onClick:function(){return i(!0)},children:"Reshare This Card"})]})})};function b(e){var t=e.email,n=e.setEmail,c=e.greeting,i=e.setGreeting,s=e.body,r=e.setBody,o=e.closing,j=e.setClosing,b=e.setPreview,d=e.setCustomize;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"instructions",children:[Object(l.jsx)("img",{src:a,alt:"Christmas image ",className:"thumb"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"How to Reshare:"}),Object(l.jsx)("br",{}),"Write your own custom message below"]})]}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"Email",children:"Recipient Email "}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"email",type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Recipient Email"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"Greeting",children:"Greeting "}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"greeting",type:"text",value:c,placeholder:"Greeting",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"body",children:"Body "}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{name:"Body",type:"textarea",value:s,onChange:function(e){return r(e.target.value)},placeholder:"Body",rows:"3"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"closing",children:"Closing "}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{name:"closing",type:"text",value:o,placeholder:"Recipient Email",onChange:function(e){return j(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(t,c,s,o),b(!0),d(!1)},children:"Preview Greeting Card"})]})]})}var d=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)("Dear Mom,"),r=Object(o.a)(s,2),a=r[0],d=r[1],u=Object(c.useState)("Have a comforting and Joyous holiday"),g=Object(o.a)(u,2),h=g[0],m=g[1],O=Object(c.useState)("Love your son, Eyob"),x=Object(o.a)(O,2),p=x[0],v=x[1],C=Object(c.useState)(!1),y=Object(o.a)(C,2),f=y[0],w=y[1],E=Object(c.useState)(!1),F=Object(o.a)(E,2),R=F[0],S=F[1];return Object(l.jsx)(l.Fragment,{children:f?Object(l.jsx)(b,{email:n,setEmail:i,greeting:a,setGreeting:d,body:h,setBody:m,closing:p,setClosing:v,setPreview:S,setCustomize:w}):Object(l.jsx)(j,{email:n,greeting:a,body:h,closing:p,setCustomize:w,preview:R,setPreview:S})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),u()},4:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e32ea04e.chunk.js.map