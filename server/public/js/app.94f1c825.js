(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("PostHandler"),n("SiteFooter")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-container",class:{"fade-in":!t.tasksDone,"fade-out":t.tasksDone}},[r("figure",{ref:"logo",staticClass:"logo",class:{"":!t.tasksDone,"slide-out":t.tasksDone}},[r("img",{attrs:{alt:"Boxkat CRUD logo",src:n("cf05")}})]),r("div",{staticClass:"create-new-post"},[t._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-new-post"},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createPost(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),r("button",{on:{click:t.createPost}},[t._v("Add!")])]),r("hr"),t.error?r("p",{staticClass:"error"},[t._v(" "+t._s(t.error)+" ")]):t._e(),r("div",{staticClass:"post-wrapper"},t._l(t.posts,(function(e,n){return r("div",{key:e._id,ref:"post",refInFor:!0,staticClass:"post",attrs:{index:n},on:{click:function(e){e.target.classList.toggle("is-done"),t.taskFinished()}}},[r("div",{staticClass:"post-date"},[t._v(" "+t._s(e.createdAt.getDate()+"/"+(e.createdAt.getMonth()+1)+"/"+e.createdAt.getFullYear())+" ")]),r("span",{staticClass:"post-text"},[t._v(" "+t._s(e.text)+" ")]),t._v(" "),r("br"),r("button",{staticClass:"toggle-update",on:{click:function(e){return t.showUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.updateText,expression:"updateText"}],staticClass:"update-post",attrs:{type:"text",id:n,placeholder:[[e.text]]},domProps:{value:t.updateText},on:{keyup:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.updatePost(e._id,t.text),n.target.parentNode.classList.toggle("update-show")},input:function(e){e.target.composing||(t.updateText=e.target.value)}}}),r("button",{staticClass:"update-post",on:{click:function(n){t.updatePost(e._id,t.text),n.target.parentNode.classList.toggle("update-show")}}}),r("button",{staticClass:"cancel-update",on:{click:function(t){return t.target.parentNode.classList.toggle("update-show")}}}),r("button",{staticClass:"delete-post",on:{click:function(n){return t.deletePost(e._id)}}},[r("i",{staticClass:"fas fa-trash-alt"})])])})),0)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"create-new-post"}},[t._v("Write down what you need to get done. "),n("br"),t._v(" Click on a task to finish. "),n("br"),t._v(" When all tasks are finished, the list will disappear.")])}],i=(n("498a"),n("96cf"),n("1da1")),u=(n("d81d"),n("d3b7"),n("5530")),l=n("d4ec"),p=n("bee2"),d=n("bc3a"),f=n.n(d),h="api/posts/",g=function(){function t(){Object(l["a"])(this,t)}return Object(p["a"])(t,null,[{key:"getPosts",value:function(){return new Promise((function(t,e){f.a.get(h).then((function(e){var n=e.data;t(n.map((function(t){return Object(u["a"])(Object(u["a"])({},t),{},{createdAt:new Date(t.createdAt)})})))})).catch((function(t){e(t)}))}))}},{key:"createPost",value:function(t){return f.a.post(h,{text:t})}},{key:"deletePost",value:function(t){return f.a.delete("".concat(h).concat(t))}},{key:"deleteAllPosts",value:function(){return f.a.delete(h)}},{key:"updatePost",value:function(t,e){return f.a.patch("".concat(h).concat(t),{text:e})}}]),t}(),m=g,v={name:"PostHandler",data:function(){return{posts:[],error:"",text:"",updateText:"",tasksDone:!1}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getPosts();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},mounted:function(){this.slideLogoRight()},methods:{createPost:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!=t.text.trim().length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,m.createPost(t.text);case 4:return e.next=6,m.getPosts();case 6:t.posts=e.sent,t.text="";case 8:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,m.deletePost(t);case 2:return n.next=4,m.getPosts();case 4:e.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()},deleteAll:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.deleteAllPosts();case 2:return e.next=4,m.getPosts();case 4:t.posts=e.sent;case 5:case"end":return e.stop()}}),e)})))()},updatePost:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=e.updateText.trim().length){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,m.updatePost(t,e.updateText);case 4:return n.next=6,m.getPosts();case 6:e.posts=n.sent,e.updateText="";case 8:case"end":return n.stop()}}),n)})))()},slideLogoRight:function(){var t=this;setTimeout((function(){t.$refs.logo.classList.add("slide-right")}),500)},scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},showUpdate:function(){var t=document.getElementsByClassName("post update-show");console.log(t),t.length>0||event.target.parentNode.classList.toggle("update-show")},taskFinished:function(){var t=this,e=document.getElementsByClassName("post is-done"),r=document.getElementsByClassName("post");if(e.length>=r.length){var o=document.createElement("audio");o.pause(),o.volume=.25,this.scrollToTop(),o.src=n("57ee"),o.play(),this.tasksDone=!0,setTimeout((function(){t.deleteAll()}),3e3),setTimeout((function(){t.tasksDone=!1}),3500),setTimeout((function(){t.slideLogoRight()}),4e3)}}}},b=v,x=(n("69a8"),n("2877")),k=Object(x["a"])(b,s,c,!1,null,"6410ea42",null),w=k.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("span",{staticClass:"credit"},[n("p",[t._v("CRUD-app made by Nils Paulsson (nipa1902) for DT162G project.")]),n("a",{attrs:{href:"https://icons8.com/icon/VFaz7MkjAiu0/checkmark"}},[t._v("Checkmark icon by Icons8")]),n("br"),n("a",{attrs:{href:"https://icons8.com/icon/70yRC8npwT3d/ok"}},[t._v("Ok icon by Icons8")]),n("br"),n("a",{attrs:{href:"https://fontawesome.com/license"}},[t._v("Edit icon by Font Awesome")])])])}],P={name:"SiteFooter",data:function(){return{}}},O=P,C=(n("defb"),Object(x["a"])(O,y,_,!1,null,"5b7c4750",null)),j=C.exports,T={name:"App",components:{PostHandler:w,SiteFooter:j}},R=T,A=(n("034f"),Object(x["a"])(R,o,a,!1,null,null,null)),D=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(D)}}).$mount("#app")},"57ee":function(t,e,n){t.exports=n.p+"media/alltasksdone.b4905267.mp3"},"69a8":function(t,e,n){"use strict";var r=n("873a"),o=n.n(r);o.a},8084:function(t,e,n){},"85ec":function(t,e,n){},"873a":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.1449d615.png"},defb:function(t,e,n){"use strict";var r=n("8084"),o=n.n(r);o.a}});
//# sourceMappingURL=app.94f1c825.js.map