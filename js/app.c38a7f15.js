(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],u=0,f=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,n=1;n<o.length;n++){var l=o[n];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/balut-website/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2e04":function(t,e,o){},"52be":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],r=(o("5c0b"),o("2877")),n={},l=Object(r["a"])(n,a,i,!1,null,null,null),c=l.exports,d=o("9483");Object(d["a"])("".concat("/balut-website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var u=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid flex-center"},[o("button",{staticClass:"btn btn-primary ",on:{click:t.clearLocalStorage}},[t._v("New Game")])]),o("section",{staticClass:"section-scorecard flex-center container-fluid"},[o("BalutCard")],1)])},g=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-md-6 col-lg-6"},[o("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Insert value")]),o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeModal}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._m(0),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("Close")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addScoreToRow}},[t._v("Save")])])])])]),o("div",{staticClass:"table-responsive-md"},[o("table",{staticClass:"table table-bordered"},[t._m(1),o("tbody",[o("tr",[o("td",t._g({attrs:{id:"fours"}},null!=this.categoryButton.fours?{click:t.openModal}:{}),[t._v("Fours")]),t._l(t.categories.fours,(function(e,s){return o("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),o("td",{staticClass:"cell-width js-row-score",attrs:{id:"fours-score"}}),o("td",{staticClass:"cell-width js-row-points",attrs:{id:"fours-points"}})],2),o("tr",[o("td",t._g({attrs:{id:"fives"}},null!=this.categoryButton.fives?{click:t.openModal}:{}),[t._v("Fives")]),t._l(t.categories.fives,(function(e,s){return o("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),o("td",{staticClass:"cell-width js-row-score",attrs:{id:"fives-score"}}),o("td",{staticClass:"cell-width js-row-points",attrs:{id:"fives-points"}})],2),o("tr",[o("td",t._g({attrs:{id:"sixes"}},null!=this.categoryButton.sixes?{click:t.openModal}:{}),[t._v("Sixes")]),t._l(t.categories.sixes,(function(e,s){return o("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),o("td",{staticClass:"cell-width js-row-score",attrs:{id:"sixes-score"}}),o("td",{staticClass:"cell-width js-row-points",attrs:{id:"sixes-points"}})],2),o("tr",[o("td",t._g({attrs:{id:"straight"}},null!=this.categoryButton.straight?{click:t.openModal}:{}),[t._v("Straight")]),t._l(t.categories.straight,(function(e,s){return o("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),o("td",{staticClass:"cell-width js-row-score",attrs:{id:"straight-score"}}),o("td",{staticClass:"cell-width js-row-points",attrs:{id:"straight-points"}})],2),o("tr",[o("td",t._g({attrs:{id:"fullhouse"}},null!=this.categoryButton.fullhouse?{click:t.openModal}:{}),[t._v("Full House")]),t._l(t.categories.fullhouse,(function(e,s){return o("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),o("td",{staticClass:"cell-width js-row-score",attrs:{id:"fullhouse-score"}}),o("td",{staticClass:"cell-width js-row-points",attrs:{id:"fullhouse-points"}})],2),o("tr",[o("td",t._g({attrs:{id:"choice"}},null!=this.categoryButton.choice?{click:t.openModal}:{}),[t._v("Choice")]),t._l(t.categories.choice,(function(e,s){return o("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),o("td",{staticClass:"cell-width js-row-score",attrs:{id:"choice-score"}}),o("td",{staticClass:"cell-width js-row-points",attrs:{id:"choice-points"}})],2),o("tr",[o("td",t._g({attrs:{id:"balut"}},null!=this.categoryButton.balut?{click:t.openModal}:{}),[t._v("Balut")]),t._l(t.categories.balut,(function(e,s){return o("td",{key:s,staticClass:"cell-width",attrs:{id:s}},[t._v(t._s(e))])})),o("td",{staticClass:"cell-width js-row-score",attrs:{id:"balut-score"}}),o("td",{staticClass:"cell-width js-row-points",attrs:{id:"balut-points"}})],2),t._m(2),t._m(3)])])]),o("button",{staticClass:"btn btn-secondary",attrs:{id:"strikeOutButton"},on:{click:t.toggleStrikeOut}},[t._v("Enable Strikeout")])])},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-body"},[o("input",{attrs:{id:"inputValue",type:"number"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{id:"player",colspan:"5"}},[t._v("You")]),o("th",{attrs:{id:"playerScore"}},[t._v("Score")]),o("th",{attrs:{id:"playerPoints"}},[t._v("Points")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("td",{staticClass:"scorebg1",attrs:{colspan:"5"}},[t._v("Total Score")]),o("td",{staticClass:"scorebg1",attrs:{id:"total-score"}}),o("td",{staticClass:"scorebg1",attrs:{id:"total-points"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("td",{staticClass:"scorebg1",attrs:{colspan:"6"}},[t._v("Total Points")]),o("td",{staticClass:"scorebg1",attrs:{id:"final-points"}})])}],v=(o("99af"),o("7db0"),o("4160"),o("4fad"),o("b64b"),o("07ac"),o("159b"),o("3835")),b="categories-values",p={name:"BalutCard",data:function(){return{categories:{fours:{"fours-1":"","fours-2":"","fours-3":"","fours-4":""},fives:{"fives-1":"","fives-2":"","fives-3":"","fives-4":""},sixes:{"sixes-1":"","sixes-2":"","sixes-3":"","sixes-4":""},straight:{"straight-1":"","straight-2":"","straight-3":"","straight-4":""},fullhouse:{"fullhouse-1":"","fullhouse-2":"","fullhouse-3":"","fullhouse-4":""},choice:{"choice-1":"","choice-2":"","choice-3":"","choice-4":""},balut:{"balut-1":"","balut-2":"","balut-3":"","balut-4":""}},modal:{categoryName:"",categoryPlace:"",strikeOut:"off"},categoriesScore:{fours:0,fives:0,sixes:0,straight:0,fullhouse:0,choice:0,balut:0},categoryPoints:{fours:0,fives:0,sixes:0,straight:0,fullhouse:0,choice:0,balut:0,totalScore:0},categoryButton:{fours:1,fives:1,sixes:1,straight:1,fullhouse:1,choice:1,balut:1}}},created:function(){null!==localStorage.getItem(b)&&(this.categories=JSON.parse(localStorage.getItem(b)))},mounted:function(){this.calculateLocalStorageRowScore(),this.calculateTotalPoints()},methods:{openModal:function(t){var e=t.target.id;if(this.addCategoryToModal(e),"on"===this.modal.strikeOut){var o=this.$data.categories[this.modal.categoryName];o[this.modal.categoryPlace]="/",this.modal.strikeOut="off";var s=document.getElementById("strikeOutButton");return s.classList.remove("btn-warning"),s.classList.add("btn-secondary"),s.innerHTML="Enable Strike-out",localStorage.setItem(b,JSON.stringify(this.categories)),void this.toggleAddFunctionalityOnRow(o)}var a=document.getElementsByTagName("body");a[0].classList.add("modal-open");var i=document.createElement("div");i.classList.add("modal-backdrop","fade","show"),a[0].appendChild(i);var r=document.getElementById("exampleModal");r.classList.add("show"),r.style.display="block",r.removeAttribute("aria-hidden"),document.getElementById("inputValue").focus()},closeModal:function(){var t=document.getElementsByClassName("modal-backdrop");t[0].parentNode.removeChild(t[0]);var e=document.getElementsByTagName("body");e[0].classList.remove("modal-open");var o=document.getElementById("exampleModal");o.classList.remove("show"),o.style.display="none",o.setAttribute("aria-hidden","true"),this.modal.categoryName="",this.modal.categoryPlace="",document.getElementById("inputValue").value=""},addCategoryToModal:function(t){var e=this.$data.categories[t];console.log(e),this.modal.categoryName=t;var o=Object.keys(e).find((function(t){return""===e[t]}));console.log("cellName: "+o),this.modal.categoryPlace=o},addScoreToRow:function(){var t=document.getElementById("inputValue").value;if(""!==t){console.log(t);var e=this.$data.categories[this.modal.categoryName];e[this.modal.categoryPlace]=t,this.calculateRowScore(e),localStorage.setItem(b,JSON.stringify(this.categories)),this.toggleAddFunctionalityOnRow(e),this.closeModal()}else console.log("Missing value")},toggleStrikeOut:function(t){if("off"===this.modal.strikeOut){this.modal.strikeOut="on";var e=t.target;e.classList.remove("btn-secondary"),e.classList.add("btn-warning"),e.innerHTML="Disable Strike-out"}else{this.modal.strikeOut="off";var o=t.target;o.classList.remove("btn-warning"),o.classList.add("btn-secondary"),o.innerHTML="Enable Strike-out"}},calculateRowScore:function(t){for(var e=0,o=0,s=Object.entries(t);o<s.length;o++){var a=Object(v["a"])(s[o],2),i=a[0],r=a[1];console.log("".concat(i,": ").concat(r));var n=parseInt(r);n===n&&(e+=n),console.log(e)}this.categoriesScore[this.modal.categoryName]=e;var l=this.modal.categoryName+"-score";console.log(l),document.getElementById(l).innerHTML=e,this.toggleAddFunctionalityOnRow(t),this.calculateTotalScore()},clearLocalStorage:function(){localStorage.removeItem(b)},calculateLocalStorageRowScore:function(){var t=this,e=this.categories;Object.keys(e).forEach((function(o){t.modal.categoryName=o,t.calculateRowScore(e[o]),console.log(o)}))},calculateTotalScore:function(){for(var t=0,e=document.querySelectorAll(".js-row-score"),o=0;o<e.length;o++)t+=parseInt(e[o].innerHTML);document.getElementById("total-score").innerHTML=t},toggleAddFunctionalityOnRow:function(t){var e=this.modal.categoryName,o=Object.keys(t).find((function(e){return""===t[e]}));console.log(o),"undefined"==typeof o&&(this.categoryButton[e]=null,this.calculateRowPoints(e),this.calculateTotalPoints())},calculateRowPoints:function(t){var e,o=t+"-score",s=t+"-points",a=0;switch(t){case"fours":a=52,this.addRowPointsToHtml(o,s,a,t);break;case"fives":a=65,this.addRowPointsToHtml(o,s,a,t);break;case"sixes":a=78,this.addRowPointsToHtml(o,s,a,t);break;case"straight":e=Object.values(this.categories[t]).find((function(t){return"/"===t})),console.log(e),"undefined"==typeof e?(document.getElementById(s).innerHTML=4,this.categoryPoints[t]=4):document.getElementById(s).innerHTML=0;break;case"fullhouse":e=Object.values(this.categories[t]).find((function(t){return"/"===t})),"undefined"==typeof e?(document.getElementById(s).innerHTML=3,this.categoryPoints[t]=3):document.getElementById(s).innerHTML=0;break;case"choice":a=100,this.addRowPointsToHtml(o,s,a,t);break;case"balut":var i=0,r=this.categories.balut;Object.values(r).forEach((function(t){var e=parseInt(t);e===e&&(i+=2,console.log("balut total points = "+i))})),document.getElementById(s).innerHTML=i,this.categoryPoints[t]=i;break}},addRowPointsToHtml:function(t,e,o,s){var a=document.getElementById(t).innerHTML;console.log("RowScore: "+a),parseInt(a)>=o?(document.getElementById(e).innerHTML=2,this.categoryPoints[s]=2):document.getElementById(e).innerHTML=0},calculateTotalPoints:function(){var t=0,e=this.categoryPoints;Object.values(e).forEach((function(e){t+=e})),document.getElementById("final-points").innerHTML=t}}},y=p,w=(o("e44c"),Object(r["a"])(y,h,m,!1,null,"944c09a2",null)),_=w.exports,C={name:"Home",components:{BalutCard:_},methods:{clearLocalStorage:function(){window.confirm("Do you want to start a new game?")&&(localStorage.removeItem("categories-values"),location.reload(),console.log("test"))}}},k=C,S=(o("6fdd"),Object(r["a"])(k,f,g,!1,null,"1b2fbd4e",null)),O=S.exports;s["a"].use(u["a"]);var M=[{path:"/",name:"Home",component:O}],j=new u["a"]({mode:"history",base:"/balut-website/",routes:M}),B=j;s["a"].config.productionTip=!1,new s["a"]({router:B,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var s=o("9c0c"),a=o.n(s);a.a},"6fdd":function(t,e,o){"use strict";var s=o("52be"),a=o.n(s);a.a},"9c0c":function(t,e,o){},e44c:function(t,e,o){"use strict";var s=o("2e04"),a=o.n(s);a.a}});
//# sourceMappingURL=app.c38a7f15.js.map