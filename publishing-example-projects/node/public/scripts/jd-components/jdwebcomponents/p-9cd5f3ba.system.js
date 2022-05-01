var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function l(e){try{o(r.next(e))}catch(e){i(e)}}function s(e){try{o(r["throw"](e))}catch(e){i(e)}}function o(e){e.done?n(e.value):a(e.value).then(l,s)}o((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(t){return o([e,t])}}function o(l){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:n.label++;return{value:l[1],done:false};case 5:n.label++;a=l[1];l=[0];continue;case 7:l=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1];i=l;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(l);break}if(i[2])n.ops.pop();n.trys.pop();continue}l=t.call(e,n)}catch(e){l=[6,e];a=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++){if(i||!(r in t)){if(!i)i=Array.prototype.slice.call(t,0,r);i[r]=t[r]}}return e.concat(i||Array.prototype.slice.call(t))};System.register([],(function(e,t){"use strict";return{execute:function(){var n=this;var r="jdwebcomponents";var a;var i;var l=false;var s=false;var o=typeof window!=="undefined"?window:{};var u=o.document||{head:{}};var f={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var $=e("p",(function(e){return Promise.resolve(e)}));var c=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var v=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],i=n[2];var l=p(e,r);var s=d(t,i);var o=h(r);f.ael(l,a,s,o);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return f.rel(l,a,s,o)}))}))}};var d=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}}}catch(e){he(e)}}};var p=function(e,t){if(t&16)return u.body;return e};var h=function(e){return(e&2)!==0};var m="{visibility:hidden}.hydrated{visibility:inherit}";var g=function(e,t){if(t===void 0){t=""}{return function(){return}}};var y=function(e,t){{return function(){return}}};var b=new WeakMap;var w=function(e,t,n){var r=ye.get(e);if(c&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}ye.set(e,r)};var _=function(e,t,n,r){var a=R(t);var i=ye.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var l=b.get(e);var s=void 0;if(!l){b.set(e,l=new Set)}if(!l.has(a)){{{s=u.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[i],false)}}return a};var S=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=t.$flags$;var a=g("attachStyles",t.$tagName$);var i=_(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(r&10){n["s-sc"]=i;n.classList.add(i+"-h")}a()};var R=function(e,t){return"sc-"+e.$tagName$};var N={};var x=function(e){return e!=null};var L=function(e){e=typeof e;return e==="object"||e==="function"};var C=e("h",(function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var i=false;var l=false;var s=[];var o=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!L(a)){a=String(a)}if(i&&l){s[s.length-1].$text$+=a}else{s.push(i?E(null,a):a)}l=i}}};o(n);if(t){{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var f=E(e,null);f.$attrs$=t;if(s.length>0){f.$children$=s}return f}));var E=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}return n};var j=e("H",{});var P=function(e){return e&&e.$tag$===j};var M=function(e,t,n,r,a,i){if(n!==r){var l=pe(e,t);var s=t.toLowerCase();if(t==="class"){var u=e.classList;var $=A(n);var c=A(r);u.remove.apply(u,$.filter((function(e){return e&&!c.includes(e)})));u.add.apply(u,c.filter((function(e){return e&&!$.includes(e)})))}else if(t==="ref"){if(r){r(e)}}else if(!l&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(pe(o,s)){t=s.slice(2)}else{t=s[2]+t.slice(3)}if(n){f.rel(e,t,n,false)}if(r){f.ael(e,t,r,false)}}else{var v=L(r);if((l||v&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var d=r==null?"":r;if(t==="list"){l=false}else if(n==null||e[t]!=d){e[t]=d}}else{e[t]=r}}catch(e){}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!l||i&4||a)&&!v){r=r===true?"":r;{e.setAttribute(t,r)}}}}};var k=/\s/;var A=function(e){return!e?[]:e.split(k)};var I=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||N;var l=t.$attrs$||N;{for(r in i){if(!(r in l)){M(a,r,i[r],undefined,n,t.$flags$)}}}for(r in l){M(a,r,i[r],l[r],n,t.$flags$)}};var O=function(e,t,n,r){var i=t.$children$[n];var s=0;var o;var f;if(i.$text$!==null){o=i.$elm$=u.createTextNode(i.$text$)}else{o=i.$elm$=u.createElement(i.$tag$);{I(null,i,l)}if(x(a)&&o["s-si"]!==a){o.classList.add(o["s-si"]=a)}if(i.$children$){for(s=0;s<i.$children$.length;++s){f=O(e,i,s);if(f){o.appendChild(f)}}}}return o};var T=function(e,t,n,r,a,l){var s=e;var o;if(s.shadowRoot&&s.tagName===i){s=s.shadowRoot}for(;a<=l;++a){if(r[a]){o=O(null,n,a);if(o){r[a].$elm$=o;s.insertBefore(o,t)}}}};var z=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;H(r);a.remove()}}};var U=function(e,t,n,r){var a=0;var i=0;var l=t.length-1;var s=t[0];var o=t[l];var u=r.length-1;var f=r[0];var $=r[u];var c;while(a<=l&&i<=u){if(s==null){s=t[++a]}else if(o==null){o=t[--l]}else if(f==null){f=r[++i]}else if($==null){$=r[--u]}else if(q(s,f)){B(s,f);s=t[++a];f=r[++i]}else if(q(o,$)){B(o,$);o=t[--l];$=r[--u]}else if(q(s,$)){B(s,$);e.insertBefore(s.$elm$,o.$elm$.nextSibling);s=t[++a];$=r[--u]}else if(q(o,f)){B(o,f);e.insertBefore(o.$elm$,s.$elm$);o=t[--l];f=r[++i]}else{{c=O(t&&t[i],n,i);f=r[++i]}if(c){{s.$elm$.parentNode.insertBefore(c,s.$elm$)}}}}if(a>l){T(e,r[u+1]==null?null:r[u+1].$elm$,n,r,i,u)}else if(i>u){z(t,a,l)}};var q=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var B=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;if(s===null){{if(i==="slot");else{I(e,t,l)}}if(r!==null&&a!==null){U(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}T(n,null,t,a,0,a.length-1)}else if(r!==null){z(r,0,r.length-1)}}else if(e.$text$!==s){n.data=s}};var H=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(H)}};var V=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var l=e.$vnode$||E(null,null);var s=P(t)?t:C(null,null,t);i=n.tagName;if(r.$attrsToReflect$){s.$attrs$=s.$attrs$||{};r.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return s.$attrs$[r]=n[t]}))}s.$tag$=null;s.$flags$|=4;e.$vnode$=s;s.$elm$=l.$elm$=n.shadowRoot||n;{a=n["s-sc"]}B(l,s)};var W=e("g",(function(e){return ce(e).$hostElement$}));var D=e("c",(function(e,t,n){var r=W(e);return{emit:function(e){return F(r,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}}));var F=function(e,t,n){var r=f.ce(t,n);e.dispatchEvent(r);return r};var G=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var J=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}G(e,e.$ancestorComponent$);var n=function(){return K(e,t)};return xe(n)};var K=function(e,t){var n=g("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return ee(r,t,n)}));e.$queuedListeners$=null}}{a=ee(r,"componentWillLoad")}}else{{a=ee(r,"componentWillUpdate")}}n();return te(a,(function(){return Q(e,r,t)}))};var Q=function(e,t,r){return __awaiter(n,void 0,void 0,(function(){var n,a,i,l,s,o;return __generator(this,(function(u){n=e.$hostElement$;a=g("update",e.$cmpMeta$.$tagName$);i=n["s-rc"];if(r){S(e)}l=g("render",e.$cmpMeta$.$tagName$);{X(e,t)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}l();a();{s=n["s-p"];o=function(){return Y(e)};if(s.length===0){o()}else{Promise.all(s).then(o);e.$flags$|=4;s.length=0}}return[2]}))}))};var X=function(e,t,n){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{V(e,t)}}}}catch(t){he(t,e.$hostElement$)}return null};var Y=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=g("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ne(n)}{ee(a,"componentDidLoad")}r();{e.$onReadyResolve$(n);if(!i){Z()}}}else{{ee(a,"componentDidUpdate")}r()}{e.$onInstanceResolve$(n)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ne((function(){return J(e,false)}))}e.$flags$&=~(4|512)}};var Z=function(e){{ne(u.documentElement)}Ne((function(){return F(o,"appload",{detail:{namespace:r}})}))};var ee=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(e){he(e)}}return undefined};var te=function(e,t){return e&&e.then?e.then(t):t()};var ne=function(e){return e.classList.add("hydrated")};var re=function(e,t){if(e!=null&&!L(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var ae=function(e,t){return ce(e).$instanceValues$.get(t)};var ie=function(e,t,n,r){var a=ce(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(t);var s=a.$flags$;var o=a.$lazyInstance$;n=re(n,r.$members$[t][0]);var u=Number.isNaN(l)&&Number.isNaN(n);var f=n!==l&&!u;if((!(s&8)||l===undefined)&&f){a.$instanceValues$.set(t,n);if(o){if(r.$watchers$&&s&128){var $=r.$watchers$[t];if($){$.map((function(e){try{o[e](n,l,t)}catch(e){he(e,i)}}))}}if((s&(2|16))===2){J(a,false)}}}};var le=function(e,t,n){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,r,{get:function(){return ae(this,r)},set:function(e){ie(this,r,e,t)},configurable:true,enumerable:true})}else if(n&1&&i&64){Object.defineProperty(a,r,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var n=ce(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;f.jmp((function(){var t=i.get(e);if(r.hasOwnProperty(t)){n=r[t];delete r[t]}else if(a.hasOwnProperty(t)&&typeof r[t]==="number"&&r[t]==n){return}r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var n=e[0],r=e[1];var a=r[1]||n;i.set(a,n);if(r[0]&512){t.$attrsToReflect$.push([n,a])}return a}))}}return e};var se=function(e,t,r,a,i){return __awaiter(n,void 0,void 0,(function(){var e,n,a,l,s,o,u;return __generator(this,(function(f){switch(f.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=ge(r);if(!i.then)return[3,2];e=y();return[4,i];case 1:i=f.sent();e();f.label=2;case 2:if(!i.isProxied){{r.$watchers$=i.watchers}le(i,r,2);i.isProxied=true}n=g("createInstance",r.$tagName$);{t.$flags$|=8}try{new i(t)}catch(e){he(e)}{t.$flags$&=~8}{t.$flags$|=128}n();if(i.style){a=i.style;l=R(r);if(!ye.has(l)){s=g("registerStyles",r.$tagName$);w(l,a,!!(r.$flags$&1));s()}}f.label=3;case 3:o=t.$ancestorComponent$;u=function(){return J(t,true)};if(o&&o["s-rc"]){o["s-rc"].push(u)}else{u()}return[2]}}))}))};var oe=function(e){if((f.$flags$&1)===0){var t=ce(e);var n=t.$cmpMeta$;var r=g("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){G(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{se(e,t,n)}}else{v(e,t,n.$listeners$)}r()}};var ue=function(e){if((f.$flags$&1)===0){var t=ce(e);var n=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}{ee(n,"disconnectedCallback")}}};var fe=e("b",(function(e,t){if(t===void 0){t={}}var n=g();var r=[];var a=t.exclude||[];var i=o.customElements;var l=u.head;var s=l.querySelector("meta[charset]");var $=u.createElement("style");var c=[];var v;var d=true;Object.assign(f,t);f.$resourcesUrl$=new URL(t.resourcesUrl||"./",u.baseURI).href;e.map((function(e){e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}{n.$listeners$=t[3]}{n.$attrsToReflect$=[]}{n.$watchers$={}}var l=n.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;de(t,n);if(n.$flags$&1){{{t.attachShadow({mode:"open"})}}}return r}t.prototype.connectedCallback=function(){var e=this;if(v){clearTimeout(v);v=null}if(d){c.push(this)}else{f.jmp((function(){return oe(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;f.jmp((function(){return ue(e)}))};t.prototype.componentOnReady=function(){return ce(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){r.push(l);i.define(l,le(s,n,1))}}))}));{$.innerHTML=r+m;$.setAttribute("data-styles","");l.insertBefore($,s?s.nextSibling:l.firstChild)}d=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{f.jmp((function(){return v=setTimeout(Z,30)}))}}n()}));var $e=new WeakMap;var ce=function(e){return $e.get(e)};var ve=e("r",(function(e,t){return $e.set(t.$lazyInstance$=e,t)}));var de=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}))}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}v(e,n,t.$listeners$);return $e.set(e,n)};var pe=function(e,t){return t in e};var he=function(e,t){return(0,console.error)(e,t)};var me=new Map;var ge=function(e,n,r){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=me.get(i);if(l){return l[a]}return t.import("./".concat(i,".entry.js").concat("")).then((function(e){{me.set(i,e)}return e[a]}),he)};var ye=new Map;var be=[];var we=[];var _e=function(e,t){return function(n){e.push(n);if(!s){s=true;if(t&&f.$flags$&4){Ne(Re)}else{f.raf(Re)}}}};var Se=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){he(e)}}e.length=0};var Re=function(){Se(be);{Se(we);if(s=be.length>0){f.raf(Re)}}};var Ne=function(e){return $().then(e)};var xe=_e(we,true)}}}));