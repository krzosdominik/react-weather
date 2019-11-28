(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),o=(a(27),a(28),a(29),a(6)),m=function(){return c.a.createElement("header",{className:"mb-3"},c.a.createElement("nav",{className:"navbar navbar-dark bg-secondary"},c.a.createElement("a",{className:"navbar-brand pl-4",href:"/"},c.a.createElement("img",{src:"http://openweathermap.org/img/wn/11n.png",alt:"logo"}),"Pogodynka")))},i=a(9),s=a(4),u=a(7),d=a.n(u),h=a(8),p=function(){var e="https://api.openweathermap.org/data/2.5/",t="a56758b068e0436e0cacd6e5ef99693d";return{fetchWeather:function(a,n,c,r){return fetch("".concat(e,"weather?q=").concat(a,",").concat(n,"&appid=").concat(t,"&units=metric&lang=pl")).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")}))},fetchForecast:function(a,n,c,r){return fetch("".concat(e,"forecast?q=").concat(a,",").concat(n,"&appid=").concat(t,"&units=metric&lang=pl")).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")}))}}}(),E=function(){var e=Object(i.g)(),t=e.city,a=e.code,r=Object(n.useState)(null),l=Object(s.a)(r,2),o=l[0],m=l[1],u=Object(n.useState)(null),E=Object(s.a)(u,2),f=E[0],w=E[1];if(Object(n.useEffect)((function(){p.fetchWeather(t,a).then((function(e){return m(e)})).catch((function(e){return w(e)}))}),[t,a]),f)return c.a.createElement("div",{className:"alert alert-danger"},"Ups, wyst\u0105pi\u0142 problem. Sprawd\u017a poprawno\u015b\u0107 wpisanych danych lub po\u0142\u0105czenie z sieci\u0105!");if(!o)return null;var b=o.weather.map((function(e){return"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png")}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"badge-dark rounded",style:{textAlign:"center"}},Object(h.capitalize)(d()(o.dt_txt).format("dddd"))),c.a.createElement("section",{className:"alert alert-secondary weather"},c.a.createElement("h1",null,c.a.createElement("i",{className:"fa fa-building-o","aria-hidden":"true"})," ",o.name),c.a.createElement("h2",null,c.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"})," ",d()(o.dt_txt).format("LT")),c.a.createElement("figure",{className:"d-flex justify-content-center"},b.map((function(e){return c.a.createElement("img",{key:e,src:e,alt:"weather icon"})}))),c.a.createElement("h2",{className:"alert alert-light text-center"},o.weather.map((function(e){return Object(h.capitalize)(e.description)})).join(" / ")),c.a.createElement("table",{className:"table table-striped text-center"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Temperetura"),c.a.createElement("td",{className:"font-weight-bold"},o.main.temp," \u2103")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Wilgotno\u015b\u0107"),c.a.createElement("td",{className:"font-weight-bold"},o.main.humidity," %")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Ci\u015bnienie"),c.a.createElement("td",{className:"font-weight-bold"},o.main.pressure," hPa")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Zachmurzenie"),c.a.createElement("td",{className:"font-weight-bold"},o.clouds.all," %")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Si\u0142a wiatru"),c.a.createElement("td",{className:"font-weight-bold"},(.36*o.wind.speed).toFixed(2)," km/h"))))))},f=function(e){var t=e.city,a=e.forecast;if(!a)return null;var n=a.weather.map((function(e){return"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png")}));return c.a.createElement("section",{className:"alert alert-secondary weather"},c.a.createElement("h1",null,c.a.createElement("i",{className:"fa fa-building-o","aria-hidden":"true"})," ",t),c.a.createElement("h2",null,c.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"})," ",d()(a.dt_txt).locale("pl").format("LT")),c.a.createElement("figure",{className:"d-flex justify-content-center"},n.map((function(e){return c.a.createElement("img",{key:e,src:e,alt:"weather icon"})}))),c.a.createElement("h2",{className:"alert alert-light text-center"},a.weather.map((function(e){return Object(h.capitalize)(e.description)})).join(" / ")),c.a.createElement("table",{className:"table table-striped text-center"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Temperetura"),c.a.createElement("td",{className:"font-weight-bold"},a.main.temp," \u2103")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Wilgotno\u015b\u0107"),c.a.createElement("td",{className:"font-weight-bold"},a.main.humidity," %")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Ci\u015bnienie"),c.a.createElement("td",{className:"font-weight-bold"},a.main.pressure," hPa")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Zachmurzenie"),c.a.createElement("td",{className:"font-weight-bold"},a.clouds.all," %")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Si\u0142a wiatru"),c.a.createElement("td",{className:"font-weight-bold"},(.36*a.wind.speed).toFixed(2)," km/h")))))},w=function(){var e=Object(i.g)(),t=e.city,a=e.code,r=Object(n.useState)(null),l=Object(s.a)(r,2),o=l[0],m=l[1],u=Object(n.useState)(null),E=Object(s.a)(u,2),w=E[0],b=E[1];return Object(n.useEffect)((function(){p.fetchForecast(t,a).then((function(e){var t=e.list,a=Object(h.groupBy)(t,(function(e){return e.dt_txt.split(" ")[0]}));m(Object.entries(a))})).catch((function(e){return b(e)}))}),[t,a]),w?c.a.createElement("div",{className:"alert alert-danger"},"Ups, wyst\u0105pi\u0142 problem. Sprawd\u017a poprawno\u015b\u0107 wpisanych danych lub po\u0142\u0105czenie z sieci\u0105!"):o?o.map((function(e){var a=Object(s.a)(e,2),n=a[0],r=a[1];return c.a.createElement("div",{key:n},c.a.createElement("h1",{className:"badge-dark rounded text-center"},Object(h.capitalize)(d()(n).locale("pl").format("dddd"))),r.map((function(e){return c.a.createElement(f,{key:e.dt_txt,forecast:e,city:t})})))})):null},b=function(){var e=Object(i.f)(),t=Object(i.g)(),a=t.city,r=t.code,l=Object(n.useState)(a),o=Object(s.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)(r),h=Object(s.a)(d,2),p=h[0],E=h[1],f=Object(n.useState)(!0),w=Object(s.a)(f,2),b=w[0],g=w[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),m&&p.length>=2?(g(!0),e.push("/".concat(m,"/").concat(p,"/weather"))):g(!1)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-center"},"Podaj nazw\u0119 miasta"),c.a.createElement("input",{type:"text",name:"city",value:m,placeholder:"Nazwa miasta",onChange:function(e){u(e.target.value)},maxLength:"15",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-center"},"Podaj kod kraju"),c.a.createElement("input",{type:"text",name:"code",value:p,placeholder:"Kod kraju, np. pl",onChange:function(e){E(e.target.value)},maxLength:"5",className:"form-control"})),c.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Pobierz dane")),!b&&c.a.createElement("div",{className:"alert alert-danger mt-3"},"Nazwa miasta i kod kraju s\u0105 wymagane do prawid\u0142owego dzia\u0142ania aplikacji!"))},g=function(){var e=Object(i.g)(),t=e.city,a=e.code;return c.a.createElement("ul",{className:"nav nav-tabs my-3"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{exact:!0,to:"/".concat(t,"/").concat(a,"/weather"),activeClassName:"active",className:"nav-link"},"Aktualna pogoda")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"/".concat(t,"/").concat(a,"/forecast"),activeClassName:"active",className:"nav-link"},"Prognoza pogody")))},N=function(){return c.a.createElement("section",null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(b,null)),c.a.createElement(i.a,{path:"/:city/:code/weather"},c.a.createElement(b,null),c.a.createElement(g,null),c.a.createElement(E,null)),c.a.createElement(i.a,{path:"/:city/:code/forecast"},c.a.createElement(b,null),c.a.createElement(g,null),c.a.createElement(w,null))))},v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,null,c.a.createElement(m,null),c.a.createElement("div",{className:"container"},c.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f7566a6f.chunk.js.map