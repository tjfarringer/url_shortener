(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(77)},35:function(e,t,n){},37:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),l=n.n(o),i=(n(35),n(11)),c=n.n(i),s=n(22),u=n(23),m=n(24),p=n(27),h=n(25),d=n(28),f=(n(37),n(38),n(39),n(26)),g=n.n(f),v=n(7),b=n.n(v),w=n(40),U=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target,console.log(n.elements),console.log(n.elements.originalUrl.value),console.log(n.elements.shortBaseUrl.value),e.next=7,w.post("/api/url",{originalUrl:n.elements.originalUrl.value,shortBaseUrl:n.elements.shortBaseUrl.value});case 7:e.sent;case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{onSubmit:this.onClick},r.a.createElement(b.a.Group,{controlId:"originalUrl"},r.a.createElement(b.a.Label,null,"Original URL"),r.a.createElement(b.a.Control,{ref:"originalUrl",type:"string",placeholder:"Original URL"})),r.a.createElement(b.a.Group,{controlId:"shortBaseUrl"},r.a.createElement(b.a.Label,null,"Enter short URL prefix"),r.a.createElement(b.a.Control,{ref:"shortBaseUrl",type:"string",placeholder:"Short Base URL"}),r.a.createElement(b.a.Text,{className:"text-muted"},"This is the base url that will be used to build the short url.")),r.a.createElement(g.a,{variant:"primary",type:"submit"},"Submit")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.cf534e2a.chunk.js.map