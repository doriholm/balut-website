(function(t){function e(e){for(var s,i,l=e[0],c=e[1],n=e[2],u=0,f=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,n||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/balut-website/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var n=0;n<l.length;n++)e(l[n]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"52be":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("5c0b"),a("2877")),l={},c=Object(i["a"])(l,o,r,!1,null,null,null),n=c.exports,d=a("9483");Object(d["a"])("".concat("/balut-website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var u=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid flex-center"},[a("button",{staticClass:"btn btn-primary ",on:{click:t.clearLocalStorage}},[t._v("New Game")])]),a("section",{staticClass:"section-scorecard flex-center container-fluid"},[a("BalutCard")],1)])},h=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 col-lg-6"},[a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Insert value")]),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._m(0),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addScoreToRow}},[t._v("Save")])])])])]),a("div",{staticClass:"table-responsive-md"},[a("table",{staticClass:"table table-bordered"},[t._m(1),a("tbody",[a("tr",[a("td",{attrs:{id:"fours"},on:{click:t.openModal}},[t._v("Fours")]),t._l(t.categories.fours,(function(e,s){return a("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),a("td",{staticClass:"cell-width",attrs:{id:"fours-score"}}),a("td",{staticClass:"cell-width",attrs:{id:"fours-points"}})],2),a("tr",[a("td",{attrs:{id:"fives"},on:{click:t.openModal}},[t._v("Fives")]),t._l(t.categories.fives,(function(e,s){return a("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),a("td",{staticClass:"cell-width",attrs:{id:"fives-score"}}),a("td",{staticClass:"cell-width",attrs:{id:"fives-points"}})],2),a("tr",[a("td",{attrs:{id:"sixes"},on:{click:t.openModal}},[t._v("Sixes")]),t._l(t.categories.sixes,(function(e,s){return a("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),a("td",{staticClass:"cell-width",attrs:{id:"sixes-score"}}),a("td",{staticClass:"cell-width",attrs:{id:"sixes-points"}})],2),a("tr",[a("td",{attrs:{id:"straight"},on:{click:t.openModal}},[t._v("Straight")]),t._l(t.categories.straight,(function(e,s){return a("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),a("td",{staticClass:"cell-width",attrs:{id:"straight-score"}}),a("td",{staticClass:"cell-width",attrs:{id:"straight-points"}})],2),a("tr",[a("td",{attrs:{id:"fullhouse"},on:{click:t.openModal}},[t._v("Full House")]),t._l(t.categories.fullhouse,(function(e,s){return a("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),a("td",{staticClass:"cell-width",attrs:{id:"fullhouse-score"}}),a("td",{staticClass:"cell-width",attrs:{id:"fullhouse-points"}})],2),a("tr",[a("td",{attrs:{id:"choice"},on:{click:t.openModal}},[t._v("Choice")]),t._l(t.categories.choice,(function(e,s){return a("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),a("td",{staticClass:"cell-width",attrs:{id:"choice-score"}}),a("td",{staticClass:"cell-width",attrs:{id:"choice-points"}})],2),a("tr",[a("td",{attrs:{id:"balut"},on:{click:t.openModal}},[t._v("Balut")]),t._l(t.categories.balut,(function(e,s){return a("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),a("td",{staticClass:"cell-width",attrs:{id:"balut-score"}}),a("td",{staticClass:"cell-width",attrs:{id:"balut-points"}})],2),t._m(2),t._m(3)])])]),a("button",{staticClass:"btn btn-secondary",attrs:{id:"strikeOutButton"},on:{click:t.toggleStrikeOut}},[t._v("Enable Strikeout")])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body"},[a("input",{attrs:{id:"inputValue",type:"number"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{id:"player",colspan:"5"}},[t._v("You")]),a("th",{attrs:{id:"playerScore"}},[t._v("Score")]),a("th",{attrs:{id:"playerPoints"}},[t._v("Points")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"scorebg1",attrs:{colspan:"5"}},[t._v("Total Score")]),a("td",{staticClass:"scorebg1",attrs:{id:"total-score"}}),a("td",{staticClass:"scorebg1",attrs:{id:"total-points"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"scorebg1",attrs:{colspan:"5"}},[t._v("Total Points")]),a("td",{staticClass:"scorebg1",attrs:{id:"final-points",colspan:"2"}})])}],m=(a("99af"),a("7db0"),a("4160"),a("4fad"),a("b64b"),a("159b"),a("3835")),b="categories-values",p={name:"BalutCard",data:function(){return{categories:{fours:{"fours-1":"","fours-2":"","fours-3":"","fours-4":""},fives:{"fives-1":"","fives-2":"","fives-3":"","fives-4":""},sixes:{"sixes-1":"","sixes-2":"","sixes-3":"","sixes-4":""},straight:{"straight-1":"","straight-2":"","straight-3":"","straight-4":""},fullhouse:{"fullhouse-1":"","fullhouse-2":"","fullhouse-3":"","fullhouse-4":""},choice:{"choice-1":"","choice-2":"","choice-3":"","choice-4":""},balut:{"balut-1":"","balut-2":"","balut-3":"","balut-4":""}},modal:{categoryName:"",categoryPlace:"",strikeOut:"off"},categoriesScore:{fours:0,fives:0,sixes:0,straight:0,fullhouse:0,choice:0,balut:0}}},created:function(){null!==localStorage.getItem(b)&&(this.categories=JSON.parse(localStorage.getItem(b)))},mounted:function(){this.calculateLocalStorageRowScore()},methods:{openModal:function(t){var e=t.target.id;if(this.addCategoryToModal(e),"on"===this.modal.strikeOut){var a=this.$data.categories[this.modal.categoryName];a[this.modal.categoryPlace]="/",this.modal.strikeOut="off";var s=document.getElementById("strikeOutButton");return s.classList.remove("btn-warning"),s.classList.add("btn-secondary"),s.innerHTML="Enable Strike-out",void localStorage.setItem(b,JSON.stringify(this.categories))}var o=document.getElementsByTagName("body");o[0].classList.add("modal-open");var r=document.createElement("div");r.classList.add("modal-backdrop","fade","show"),o[0].appendChild(r);var i=document.getElementById("exampleModal");i.classList.add("show"),i.style.display="block",i.removeAttribute("aria-hidden")},closeModal:function(){var t=document.getElementsByClassName("modal-backdrop");t[0].parentNode.removeChild(t[0]);var e=document.getElementsByTagName("body");e[0].classList.remove("modal-open");var a=document.getElementById("exampleModal");a.classList.remove("show"),a.style.display="none",a.setAttribute("aria-hidden","true"),this.modal.categoryName="",this.modal.categoryPlace="",document.getElementById("inputValue").value=""},addCategoryToModal:function(t){var e=this.$data.categories[t];console.log(e),this.modal.categoryName=t;var a=Object.keys(e).find((function(t){return""===e[t]}));console.log(a),this.modal.categoryPlace=a},addScoreToRow:function(){var t=document.getElementById("inputValue").value;if(""!==t){console.log(t);var e=this.$data.categories[this.modal.categoryName];e[this.modal.categoryPlace]=t,this.calculateScore(e),this.closeModal(),localStorage.setItem(b,JSON.stringify(this.categories))}else console.log("Missing value")},toggleStrikeOut:function(t){if("off"===this.modal.strikeOut){this.modal.strikeOut="on";var e=t.target;e.classList.remove("btn-secondary"),e.classList.add("btn-warning"),e.innerHTML="Disable Strike-out"}else{this.modal.strikeOut="off";var a=t.target;a.classList.remove("btn-warning"),a.classList.add("btn-secondary"),a.innerHTML="Enable Strike-out"}},calculateScore:function(t){for(var e=0,a=0,s=Object.entries(t);a<s.length;a++){var o=Object(m["a"])(s[a],2),r=o[0],i=o[1];console.log("".concat(r,": ").concat(i));var l=parseInt(i);l===l&&(e+=l),console.log(e)}this.categoriesScore[this.modal.categoryName]=e;var c=this.modal.categoryName+"-score";console.log(c),document.getElementById(c).innerHTML=e},clearLocalStorage:function(){localStorage.removeItem(b)},calculateLocalStorageRowScore:function(){var t=this,e=this.categories;Object.keys(e).forEach((function(a){t.modal.categoryName=a,t.calculateScore(e[a]),console.log(a)}))}}},y=p,_=(a("6ed7"),Object(i["a"])(y,g,v,!1,null,"9619038a",null)),w=_.exports,C={name:"Home",components:{BalutCard:w},methods:{clearLocalStorage:function(){window.confirm("Do you want to start a new game?")&&(localStorage.removeItem("categories-values"),location.reload(),console.log("test"))}}},k=C,S=(a("6fdd"),Object(i["a"])(k,f,h,!1,null,"1b2fbd4e",null)),O=S.exports;s["a"].use(u["a"]);var x=[{path:"/",name:"Home",component:O}],M=new u["a"]({mode:"history",base:"/balut-website/",routes:x}),E=M;s["a"].config.productionTip=!1,new s["a"]({router:E,render:function(t){return t(n)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"6ed7":function(t,e,a){"use strict";var s=a("df00"),o=a.n(s);o.a},"6fdd":function(t,e,a){"use strict";var s=a("52be"),o=a.n(s);o.a},"9c0c":function(t,e,a){},df00:function(t,e,a){}});
//# sourceMappingURL=app.6d9de28b.js.map