(function(e){function r(r){for(var t,u,c=r[0],l=r[1],a=r[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);s&&s(r);while(d.length)d.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,r=0;r<i.length;r++){for(var n=i[r],t=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(t=!1)}t&&(i.splice(r--,1),e=u(u.s=n[0]))}return e}var t={},o={app:0},i=[];function u(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=t,u.d=function(e,r,n){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)u.d(n,t,function(r){return e[r]}.bind(null,t));return n},u.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/vue-double-music-player/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=r,c=c.slice();for(var a=0;a<c.length;a++)r(c[a]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,r,n){e.exports=n("56d7")},"56d7":function(e,r,n){"use strict";n.r(r);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),o=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"video",attrs:{id:"app"}},e._l(e.videosUrl,(function(r,t){return n("div",{key:t},[n("div",{staticClass:"input-container"},[n("label",{attrs:{for:"first-video-url"}},[e._v("Link url ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:r.url,expression:"video.url"}],attrs:{type:"text",name:"first-video"},domProps:{value:r.url},on:{input:function(n){n.target.composing||e.$set(r,"url",n.target.value)}}})]),n("div",[n("youtube",{attrs:{"video-id":e.returnFirstVideoId(r.url),"player-width":"100%","player-height":"250px",host:"https://www.youtube-nocookie.com"}})],1)])})),0)},i=[],u=n("f6dd");t["a"].use(u["a"]);var c={name:"App",data:function(){return{videosUrl:[{url:""},{url:""}]}},methods:{returnFirstVideoId:function(e){return Object(u["b"])(e)}}},l=c,a=(n("cf25"),n("2877")),s=Object(a["a"])(l,o,i,!1,null,null,null),f=s.exports,d=n("9483");Object(d["a"])("".concat("/vue-double-music-player/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(f)}}).$mount("#app")},cf25:function(e,r,n){"use strict";n("fea6")},fea6:function(e,r,n){}});
//# sourceMappingURL=app.9f77d90c.js.map