var My=e=>{throw TypeError(e)};var Hf=(e,t,n)=>t.has(e)||My("Cannot "+n);var D=(e,t,n)=>(Hf(e,t,"read from private field"),n?n.call(e):t.get(e)),le=(e,t,n)=>t.has(e)?My("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Q=(e,t,n,i)=>(Hf(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),Ct=(e,t,n)=>(Hf(e,t,"access private method"),n);var dc=(e,t,n,i)=>({set _(r){Q(e,t,r,n)},get _(){return D(e,t,i)}});function _j(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Lj(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D2={exports:{}},Ad={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nj=Symbol.for("react.transitional.element"),Bj=Symbol.for("react.fragment");function _2(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var r in t)r!=="key"&&(n[r]=t[r])}else n=t;return t=n.ref,{$$typeof:Nj,type:e,key:i,ref:t!==void 0?t:null,props:n}}Ad.Fragment=Bj;Ad.jsx=_2;Ad.jsxs=_2;D2.exports=Ad;var c=D2.exports,L2={exports:{}},I={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=Symbol.for("react.transitional.element"),Uj=Symbol.for("react.portal"),Vj=Symbol.for("react.fragment"),Pj=Symbol.for("react.strict_mode"),Hj=Symbol.for("react.profiler"),Fj=Symbol.for("react.consumer"),qj=Symbol.for("react.context"),Gj=Symbol.for("react.forward_ref"),Yj=Symbol.for("react.suspense"),Kj=Symbol.for("react.memo"),N2=Symbol.for("react.lazy"),Xj=Symbol.for("react.activity"),Oy=Symbol.iterator;function Qj(e){return e===null||typeof e!="object"?null:(e=Oy&&e[Oy]||e["@@iterator"],typeof e=="function"?e:null)}var B2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U2=Object.assign,V2={};function Po(e,t,n){this.props=e,this.context=t,this.refs=V2,this.updater=n||B2}Po.prototype.isReactComponent={};Po.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P2(){}P2.prototype=Po.prototype;function f0(e,t,n){this.props=e,this.context=t,this.refs=V2,this.updater=n||B2}var h0=f0.prototype=new P2;h0.constructor=f0;U2(h0,Po.prototype);h0.isPureReactComponent=!0;var Dy=Array.isArray;function bm(){}var $e={H:null,A:null,T:null,S:null},H2=Object.prototype.hasOwnProperty;function m0(e,t,n){var i=n.ref;return{$$typeof:d0,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Ij(e,t){return m0(e.type,t,e.props)}function p0(e){return typeof e=="object"&&e!==null&&e.$$typeof===d0}function Zj(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _y=/\/+/g;function Ff(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zj(""+e.key):t.toString(36)}function Jj(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(bm,bm):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function za(e,t,n,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"bigint":case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case d0:case Uj:o=!0;break;case N2:return o=e._init,za(o(e._payload),t,n,i,r)}}if(o)return r=r(e),o=i===""?"."+Ff(e,0):i,Dy(r)?(n="",o!=null&&(n=o.replace(_y,"$&/")+"/"),za(r,t,n,"",function(u){return u})):r!=null&&(p0(r)&&(r=Ij(r,n+(r.key==null||e&&e.key===r.key?"":(""+r.key).replace(_y,"$&/")+"/")+o)),t.push(r)),1;o=0;var s=i===""?".":i+":";if(Dy(e))for(var l=0;l<e.length;l++)i=e[l],a=s+Ff(i,l),o+=za(i,t,n,a,r);else if(l=Qj(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=s+Ff(i,l++),o+=za(i,t,n,a,r);else if(a==="object"){if(typeof e.then=="function")return za(Jj(e),t,n,i,r);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return o}function fc(e,t,n){if(e==null)return e;var i=[],r=0;return za(e,i,"","",function(a){return t.call(n,a,r++)}),i}function Wj(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ly=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},e4={map:fc,forEach:function(e,t,n){fc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fc(e,function(){t++}),t},toArray:function(e){return fc(e,function(t){return t})||[]},only:function(e){if(!p0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Activity=Xj;I.Children=e4;I.Component=Po;I.Fragment=Vj;I.Profiler=Hj;I.PureComponent=f0;I.StrictMode=Pj;I.Suspense=Yj;I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$e;I.__COMPILER_RUNTIME={__proto__:null,c:function(e){return $e.H.useMemoCache(e)}};I.cache=function(e){return function(){return e.apply(null,arguments)}};I.cacheSignal=function(){return null};I.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=U2({},e.props),r=e.key;if(t!=null)for(a in t.key!==void 0&&(r=""+t.key),t)!H2.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];i.children=o}return m0(e.type,r,i)};I.createContext=function(e){return e={$$typeof:qj,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Fj,_context:e},e};I.createElement=function(e,t,n){var i,r={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)H2.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(r[i]=t[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];r.children=s}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return m0(e,a,r)};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Gj,render:e}};I.isValidElement=p0;I.lazy=function(e){return{$$typeof:N2,_payload:{_status:-1,_result:e},_init:Wj}};I.memo=function(e,t){return{$$typeof:Kj,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=$e.T,n={};$e.T=n;try{var i=e(),r=$e.S;r!==null&&r(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(bm,Ly)}catch(a){Ly(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),$e.T=t}};I.unstable_useCacheRefresh=function(){return $e.H.useCacheRefresh()};I.use=function(e){return $e.H.use(e)};I.useActionState=function(e,t,n){return $e.H.useActionState(e,t,n)};I.useCallback=function(e,t){return $e.H.useCallback(e,t)};I.useContext=function(e){return $e.H.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e,t){return $e.H.useDeferredValue(e,t)};I.useEffect=function(e,t){return $e.H.useEffect(e,t)};I.useEffectEvent=function(e){return $e.H.useEffectEvent(e)};I.useId=function(){return $e.H.useId()};I.useImperativeHandle=function(e,t,n){return $e.H.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return $e.H.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return $e.H.useLayoutEffect(e,t)};I.useMemo=function(e,t){return $e.H.useMemo(e,t)};I.useOptimistic=function(e,t){return $e.H.useOptimistic(e,t)};I.useReducer=function(e,t,n){return $e.H.useReducer(e,t,n)};I.useRef=function(e){return $e.H.useRef(e)};I.useState=function(e){return $e.H.useState(e)};I.useSyncExternalStore=function(e,t,n){return $e.H.useSyncExternalStore(e,t,n)};I.useTransition=function(){return $e.H.useTransition()};I.version="19.2.0";L2.exports=I;var w=L2.exports;const wn=Lj(w),vm=_j({__proto__:null,default:wn},[w]);var F2={exports:{}},kd={},q2={exports:{}},G2={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,U){var z=$.length;$.push(U);e:for(;0<z;){var B=z-1>>>1,Y=$[B];if(0<r(Y,U))$[B]=U,$[z]=Y,z=B;else break e}}function n($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var U=$[0],z=$.pop();if(z!==U){$[0]=z;e:for(var B=0,Y=$.length,te=Y>>>1;B<te;){var F=2*(B+1)-1,G=$[F],me=F+1,Me=$[me];if(0>r(G,z))me<Y&&0>r(Me,G)?($[B]=Me,$[me]=z,B=me):($[B]=G,$[F]=z,B=F);else if(me<Y&&0>r(Me,z))$[B]=Me,$[me]=z,B=me;else break e}}return U}function r($,U){var z=$.sortIndex-U.sortIndex;return z!==0?z:$.id-U.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],d=1,f=null,h=3,m=!1,p=!1,b=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function v($){for(var U=n(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=$)i(u),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(u)}}function A($){if(b=!1,v($),!p)if(n(l)!==null)p=!0,E||(E=!0,T());else{var U=n(u);U!==null&&q(A,U.startTime-$)}}var E=!1,j=-1,k=5,O=-1;function _(){return S?!0:!(e.unstable_now()-O<k)}function P(){if(S=!1,E){var $=e.unstable_now();O=$;var U=!0;try{e:{p=!1,b&&(b=!1,y(j),j=-1),m=!0;var z=h;try{t:{for(v($),f=n(l);f!==null&&!(f.expirationTime>$&&_());){var B=f.callback;if(typeof B=="function"){f.callback=null,h=f.priorityLevel;var Y=B(f.expirationTime<=$);if($=e.unstable_now(),typeof Y=="function"){f.callback=Y,v($),U=!0;break t}f===n(l)&&i(l),v($)}else i(l);f=n(l)}if(f!==null)U=!0;else{var te=n(u);te!==null&&q(A,te.startTime-$),U=!1}}break e}finally{f=null,h=z,m=!1}U=void 0}}finally{U?T():E=!1}}}var T;if(typeof x=="function")T=function(){x(P)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,N=V.port2;V.port1.onmessage=P,T=function(){N.postMessage(null)}}else T=function(){g(P,0)};function q($,U){j=g(function(){$(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_next=function($){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var z=h;h=U;try{return $()}finally{h=z}},e.unstable_requestPaint=function(){S=!0},e.unstable_runWithPriority=function($,U){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var z=h;h=$;try{return U()}finally{h=z}},e.unstable_scheduleCallback=function($,U,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,$){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=z+Y,$={id:d++,callback:U,priorityLevel:$,startTime:z,expirationTime:Y,sortIndex:-1},z>B?($.sortIndex=z,t(u,$),n(l)===null&&$===n(u)&&(b?(y(j),j=-1):b=!0,q(A,z-B))):($.sortIndex=Y,t(l,$),p||m||(p=!0,E||(E=!0,T()))),$},e.unstable_shouldYield=_,e.unstable_wrapCallback=function($){var U=h;return function(){var z=h;h=U;try{return $.apply(this,arguments)}finally{h=z}}}})(G2);q2.exports=G2;var t4=q2.exports,Y2={exports:{}},Ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n4=w;function K2(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ui(){}var $t={d:{f:Ui,r:function(){throw Error(K2(522))},D:Ui,C:Ui,L:Ui,m:Ui,X:Ui,S:Ui,M:Ui},p:0,findDOMNode:null},i4=Symbol.for("react.portal");function r4(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i4,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Os=n4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Rd(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$t;Ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(K2(299));return r4(e,t,null,n)};Ot.flushSync=function(e){var t=Os.T,n=$t.p;try{if(Os.T=null,$t.p=2,e)return e()}finally{Os.T=t,$t.p=n,$t.d.f()}};Ot.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,$t.d.C(e,t))};Ot.prefetchDNS=function(e){typeof e=="string"&&$t.d.D(e)};Ot.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Rd(n,t.crossOrigin),r=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?$t.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:a}):n==="script"&&$t.d.X(e,{crossOrigin:i,integrity:r,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ot.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Rd(t.as,t.crossOrigin);$t.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&$t.d.M(e)};Ot.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Rd(n,t.crossOrigin);$t.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ot.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Rd(t.as,t.crossOrigin);$t.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else $t.d.m(e)};Ot.requestFormReset=function(e){$t.d.r(e)};Ot.unstable_batchedUpdates=function(e,t){return e(t)};Ot.useFormState=function(e,t,n){return Os.H.useFormState(e,t,n)};Ot.useFormStatus=function(){return Os.H.useHostTransitionStatus()};Ot.version="19.2.0";function X2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X2)}catch(e){console.error(e)}}X2(),Y2.exports=Ot;var Q2=Y2.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at=t4,I2=w,a4=Q2;function L(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Z2(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function J2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function W2(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ny(e){if(Nl(e)!==e)throw Error(L(188))}function o4(e){var t=e.alternate;if(!t){if(t=Nl(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Ny(r),e;if(a===i)return Ny(r),t;a=a.sibling}throw Error(L(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==i)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function ew(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ew(e),t!==null)return t;e=e.sibling}return null}var ze=Object.assign,s4=Symbol.for("react.element"),hc=Symbol.for("react.transitional.element"),Cs=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),tw=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),nw=Symbol.for("react.consumer"),vi=Symbol.for("react.context"),g0=Symbol.for("react.forward_ref"),Sm=Symbol.for("react.suspense"),Cm=Symbol.for("react.suspense_list"),y0=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Tm=Symbol.for("react.activity"),l4=Symbol.for("react.memo_cache_sentinel"),By=Symbol.iterator;function ls(e){return e===null||typeof e!="object"?null:(e=By&&e[By]||e["@@iterator"],typeof e=="function"?e:null)}var c4=Symbol.for("react.client.reference");function jm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===c4?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Da:return"Fragment";case wm:return"Profiler";case tw:return"StrictMode";case Sm:return"Suspense";case Cm:return"SuspenseList";case Tm:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Cs:return"Portal";case vi:return e.displayName||"Context";case nw:return(e._context.displayName||"Context")+".Consumer";case g0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case y0:return t=e.displayName||null,t!==null?t:jm(e.type)||"Memo";case Fi:t=e._payload,e=e._init;try{return jm(e(t))}catch{}}return null}var Ts=Array.isArray,X=I2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=a4.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Qr={pending:!1,data:null,method:null,action:null},Em=[],_a=-1;function ri(e){return{current:e}}function dt(e){0>_a||(e.current=Em[_a],Em[_a]=null,_a--)}function Ee(e,t){_a++,Em[_a]=e.current,e.current=t}var ei=ri(null),tl=ri(null),or=ri(null),Du=ri(null);function _u(e,t){switch(Ee(or,t),Ee(tl,e),Ee(ei,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?q1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=q1(t),e=S5(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(ei),Ee(ei,e)}function yo(){dt(ei),dt(tl),dt(or)}function Am(e){e.memoizedState!==null&&Ee(Du,e);var t=ei.current,n=S5(t,e.type);t!==n&&(Ee(tl,e),Ee(ei,n))}function Lu(e){tl.current===e&&(dt(ei),dt(tl)),Du.current===e&&(dt(Du),fl._currentValue=Qr)}var qf,Uy;function Mr(e){if(qf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qf=t&&t[1]||"",Uy=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qf+e+Uy}var Gf=!1;function Yf(e,t){if(!e||Gf)return"";Gf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(m){var h=m}Reflect.construct(e,[],f)}else{try{f.call()}catch(m){h=m}e.call(f.prototype)}}else{try{throw Error()}catch(m){h=m}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(m){if(m&&h&&typeof m.stack=="string")return[m.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split(`
`),u=s.split(`
`);for(r=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++;if(i===l.length||r===u.length)for(i=l.length-1,r=u.length-1;1<=i&&0<=r&&l[i]!==u[r];)r--;for(;1<=i&&0<=r;i--,r--)if(l[i]!==u[r]){if(i!==1||r!==1)do if(i--,r--,0>r||l[i]!==u[r]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=r);break}}}finally{Gf=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Mr(n):""}function u4(e,t){switch(e.tag){case 26:case 27:case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return e.child!==t&&t!==null?Mr("Suspense Fallback"):Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 15:return Yf(e.type,!1);case 11:return Yf(e.type.render,!1);case 1:return Yf(e.type,!0);case 31:return Mr("Activity");default:return""}}function Vy(e){try{var t="",n=null;do t+=u4(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var km=Object.prototype.hasOwnProperty,x0=at.unstable_scheduleCallback,Kf=at.unstable_cancelCallback,d4=at.unstable_shouldYield,f4=at.unstable_requestPaint,en=at.unstable_now,h4=at.unstable_getCurrentPriorityLevel,iw=at.unstable_ImmediatePriority,rw=at.unstable_UserBlockingPriority,Nu=at.unstable_NormalPriority,m4=at.unstable_LowPriority,aw=at.unstable_IdlePriority,p4=at.log,g4=at.unstable_setDisableYieldValue,Bl=null,tn=null;function tr(e){if(typeof p4=="function"&&g4(e),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(Bl,e)}catch{}}var nn=Math.clz32?Math.clz32:b4,y4=Math.log,x4=Math.LN2;function b4(e){return e>>>=0,e===0?32:31-(y4(e)/x4|0)|0}var mc=256,pc=262144,gc=4194304;function Or(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $d(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=i&134217727;return s!==0?(i=s&~a,i!==0?r=Or(i):(o&=s,o!==0?r=Or(o):n||(n=s&~e,n!==0&&(r=Or(n))))):(s=i&~a,s!==0?r=Or(s):o!==0?r=Or(o):n||(n=i&~e,n!==0&&(r=Or(n)))),r===0?0:t!==0&&t!==r&&!(t&a)&&(a=r&-r,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:r}function Ul(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function v4(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ow(){var e=gc;return gc<<=1,!(gc&62914560)&&(gc=4194304),e}function Xf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function w4(e,t,n,i,r,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=o&~n;0<n;){var d=31-nn(n),f=1<<d;s[d]=0,l[d]=-1;var h=u[d];if(h!==null)for(u[d]=null,d=0;d<h.length;d++){var m=h[d];m!==null&&(m.lane&=-536870913)}n&=~f}i!==0&&sw(e,i,0),a!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function sw(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-nn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function lw(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-nn(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function cw(e,t){var n=t&-t;return n=n&42?1:b0(n),n&(e.suspendedLanes|t)?0:n}function b0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function v0(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function uw(){var e=he.p;return e!==0?e:(e=window.event,e===void 0?32:O5(e.type))}function Py(e,t){var n=he.p;try{return he.p=e,t()}finally{he.p=n}}var jr=Math.random().toString(36).slice(2),bt="__reactFiber$"+jr,Gt="__reactProps$"+jr,Ho="__reactContainer$"+jr,Rm="__reactEvents$"+jr,S4="__reactListeners$"+jr,C4="__reactHandles$"+jr,Hy="__reactResources$"+jr,Pl="__reactMarker$"+jr;function w0(e){delete e[bt],delete e[Gt],delete e[Rm],delete e[S4],delete e[C4]}function La(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ho]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Q1(e);e!==null;){if(n=e[bt])return n;e=Q1(e)}return t}e=n,n=e.parentNode}return null}function Fo(e){if(e=e[bt]||e[Ho]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function js(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(L(33))}function Ja(e){var t=e[Hy];return t||(t=e[Hy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[Pl]=!0}var dw=new Set,fw={};function ma(e,t){xo(e,t),xo(e+"Capture",t)}function xo(e,t){for(fw[e]=t,e=0;e<t.length;e++)dw.add(t[e])}var T4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fy={},qy={};function j4(e){return km.call(qy,e)?!0:km.call(Fy,e)?!1:T4.test(e)?qy[e]=!0:(Fy[e]=!0,!1)}function tu(e,t,n){if(j4(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function yc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function si(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function mn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E4(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $m(e){if(!e._valueTracker){var t=hw(e)?"checked":"value";e._valueTracker=E4(e,t,""+e[t])}}function mw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hw(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Bu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var A4=/[\n"\\]/g;function xn(e){return e.replace(A4,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zm(e,t,n,i,r,a,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+mn(t)):e.value!==""+mn(t)&&(e.value=""+mn(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Mm(e,o,mn(t)):n!=null?Mm(e,o,mn(n)):i!=null&&e.removeAttribute("value"),r==null&&a!=null&&(e.defaultChecked=!!a),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+mn(s):e.removeAttribute("name")}function pw(e,t,n,i,r,a,o,s){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){$m(e);return}n=n!=null?""+mn(n):"",t=t!=null?""+mn(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=s?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),$m(e)}function Mm(e,t,n){t==="number"&&Bu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Wa(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function gw(e,t,n){if(t!=null&&(t=""+mn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+mn(n):""}function yw(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(L(92));if(Ts(i)){if(1<i.length)throw Error(L(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=mn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),$m(e)}function bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var k4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gy(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||k4.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xw(e,t,n){if(t!=null&&typeof t!="object")throw Error(L(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&Gy(e,r,i)}else for(var a in t)t.hasOwnProperty(a)&&Gy(e,a,t[a])}function S0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nu(e){return $4.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function wi(){}var Om=null;function C0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,eo=null;function Yy(e){var t=Fo(e);if(t&&(e=t.stateNode)){var n=e[Gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(zm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+xn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[Gt]||null;if(!r)throw Error(L(90));zm(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&mw(i)}break e;case"textarea":gw(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Wa(e,!!n.multiple,t,!1)}}}var Qf=!1;function bw(e,t,n){if(Qf)return e(t,n);Qf=!0;try{var i=e(t);return i}finally{if(Qf=!1,(Na!==null||eo!==null)&&(Hd(),Na&&(t=Na,e=eo,eo=Na=null,Yy(t),e)))for(t=0;t<e.length;t++)Yy(e[t])}}function nl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Gt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dm=!1;if(Ai)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Dm=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Dm=!1}var nr=null,T0=null,iu=null;function vw(){if(iu)return iu;var e,t=T0,n=t.length,i,r="value"in nr?nr.value:nr.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[a-i];i++);return iu=r.slice(e,1<i?1-i:void 0)}function ru(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xc(){return!0}function Ky(){return!1}function Kt(e){function t(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?xc:Ky,this.isPropagationStopped=Ky,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=Kt(pa),Hl=ze({},pa,{view:0,detail:0}),z4=Kt(Hl),If,Zf,us,Md=ze({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:j0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==us&&(us&&e.type==="mousemove"?(If=e.screenX-us.screenX,Zf=e.screenY-us.screenY):Zf=If=0,us=e),If)},movementY:function(e){return"movementY"in e?e.movementY:Zf}}),Xy=Kt(Md),M4=ze({},Md,{dataTransfer:0}),O4=Kt(M4),D4=ze({},Hl,{relatedTarget:0}),Jf=Kt(D4),_4=ze({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),L4=Kt(_4),N4=ze({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B4=Kt(N4),U4=ze({},pa,{data:0}),Qy=Kt(U4),V4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=H4[e])?!!t[e]:!1}function j0(){return F4}var q4=ze({},Hl,{key:function(e){if(e.key){var t=V4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ru(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:j0,charCode:function(e){return e.type==="keypress"?ru(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ru(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G4=Kt(q4),Y4=ze({},Md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iy=Kt(Y4),K4=ze({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:j0}),X4=Kt(K4),Q4=ze({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),I4=Kt(Q4),Z4=ze({},Md,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J4=Kt(Z4),W4=ze({},pa,{newState:0,oldState:0}),eE=Kt(W4),tE=[9,13,27,32],E0=Ai&&"CompositionEvent"in window,Ds=null;Ai&&"documentMode"in document&&(Ds=document.documentMode);var nE=Ai&&"TextEvent"in window&&!Ds,ww=Ai&&(!E0||Ds&&8<Ds&&11>=Ds),Zy=" ",Jy=!1;function Sw(e,t){switch(e){case"keyup":return tE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ba=!1;function iE(e,t){switch(e){case"compositionend":return Cw(t);case"keypress":return t.which!==32?null:(Jy=!0,Zy);case"textInput":return e=t.data,e===Zy&&Jy?null:e;default:return null}}function rE(e,t){if(Ba)return e==="compositionend"||!E0&&Sw(e,t)?(e=vw(),iu=T0=nr=null,Ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ww&&t.locale!=="ko"?null:t.data;default:return null}}var aE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!aE[e.type]:t==="textarea"}function Tw(e,t,n,i){Na?eo?eo.push(i):eo=[i]:Na=i,t=nd(t,"onChange"),0<t.length&&(n=new zd("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var _s=null,il=null;function oE(e){b5(e,0)}function Od(e){var t=js(e);if(mw(t))return e}function e1(e,t){if(e==="change")return t}var jw=!1;if(Ai){var Wf;if(Ai){var eh="oninput"in document;if(!eh){var t1=document.createElement("div");t1.setAttribute("oninput","return;"),eh=typeof t1.oninput=="function"}Wf=eh}else Wf=!1;jw=Wf&&(!document.documentMode||9<document.documentMode)}function n1(){_s&&(_s.detachEvent("onpropertychange",Ew),il=_s=null)}function Ew(e){if(e.propertyName==="value"&&Od(il)){var t=[];Tw(t,il,e,C0(e)),bw(oE,t)}}function sE(e,t,n){e==="focusin"?(n1(),_s=t,il=n,_s.attachEvent("onpropertychange",Ew)):e==="focusout"&&n1()}function lE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Od(il)}function cE(e,t){if(e==="click")return Od(t)}function uE(e,t){if(e==="input"||e==="change")return Od(t)}function dE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:dE;function rl(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!km.call(t,r)||!sn(e[r],t[r]))return!1}return!0}function i1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r1(e,t){var n=i1(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=i1(n)}}function Aw(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Aw(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kw(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bu(e.document)}return t}function A0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fE=Ai&&"documentMode"in document&&11>=document.documentMode,Ua=null,_m=null,Ls=null,Lm=!1;function a1(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lm||Ua==null||Ua!==Bu(i)||(i=Ua,"selectionStart"in i&&A0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ls&&rl(Ls,i)||(Ls=i,i=nd(_m,"onSelect"),0<i.length&&(t=new zd("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ua)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Va={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},th={},Rw={};Ai&&(Rw=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function ga(e){if(th[e])return th[e];if(!Va[e])return e;var t=Va[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rw)return th[e]=t[n];return e}var $w=ga("animationend"),zw=ga("animationiteration"),Mw=ga("animationstart"),hE=ga("transitionrun"),mE=ga("transitionstart"),pE=ga("transitioncancel"),Ow=ga("transitionend"),Dw=new Map,Nm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nm.push("scrollEnd");function Vn(e,t){Dw.set(e,t),ma(t,[e])}var Uu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hn=[],Pa=0,k0=0;function Dd(){for(var e=Pa,t=k0=Pa=0;t<e;){var n=hn[t];hn[t++]=null;var i=hn[t];hn[t++]=null;var r=hn[t];hn[t++]=null;var a=hn[t];if(hn[t++]=null,i!==null&&r!==null){var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}a!==0&&_w(n,r,a)}}function _d(e,t,n,i){hn[Pa++]=e,hn[Pa++]=t,hn[Pa++]=n,hn[Pa++]=i,k0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function R0(e,t,n,i){return _d(e,t,n,i),Vu(e)}function ya(e,t){return _d(e,null,null,t),Vu(e)}function _w(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(r=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,r&&t!==null&&(r=31-nn(n),e=a.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),a):null}function Vu(e){if(50<Gs)throw Gs=0,rp=null,Error(L(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ha={};function gE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,n,i){return new gE(e,t,n,i)}function $0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,t){var n=e.alternate;return n===null?(n=Zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Lw(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function au(e,t,n,i,r,a){var o=0;if(i=e,typeof e=="function")$0(e)&&(o=1);else if(typeof e=="string")o=wA(e,n,ei.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tm:return e=Zt(31,n,t,r),e.elementType=Tm,e.lanes=a,e;case Da:return Ir(n.children,r,a,t);case tw:o=8,r|=24;break;case wm:return e=Zt(12,n,t,r|2),e.elementType=wm,e.lanes=a,e;case Sm:return e=Zt(13,n,t,r),e.elementType=Sm,e.lanes=a,e;case Cm:return e=Zt(19,n,t,r),e.elementType=Cm,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vi:o=10;break e;case nw:o=9;break e;case g0:o=11;break e;case y0:o=14;break e;case Fi:o=16,i=null;break e}o=29,n=Error(L(130,e===null?"null":typeof e,"")),i=null}return t=Zt(o,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function Ir(e,t,n,i){return e=Zt(7,e,i,t),e.lanes=n,e}function nh(e,t,n){return e=Zt(6,e,null,t),e.lanes=n,e}function Nw(e){var t=Zt(18,null,null,0);return t.stateNode=e,t}function ih(e,t,n){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var o1=new WeakMap;function bn(e,t){if(typeof e=="object"&&e!==null){var n=o1.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Vy(t)},o1.set(e,t),t)}return{value:e,source:t,stack:Vy(t)}}var Fa=[],qa=0,Pu=null,al=0,pn=[],gn=0,yr=null,Zn=1,Jn="";function gi(e,t){Fa[qa++]=al,Fa[qa++]=Pu,Pu=e,al=t}function Bw(e,t,n){pn[gn++]=Zn,pn[gn++]=Jn,pn[gn++]=yr,yr=e;var i=Zn;e=Jn;var r=32-nn(i)-1;i&=~(1<<r),n+=1;var a=32-nn(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Zn=1<<32-nn(t)+r|n<<r|i,Jn=a+e}else Zn=1<<a|n<<r|i,Jn=e}function z0(e){e.return!==null&&(gi(e,1),Bw(e,1,0))}function M0(e){for(;e===Pu;)Pu=Fa[--qa],Fa[qa]=null,al=Fa[--qa],Fa[qa]=null;for(;e===yr;)yr=pn[--gn],pn[gn]=null,Jn=pn[--gn],pn[gn]=null,Zn=pn[--gn],pn[gn]=null}function Uw(e,t){pn[gn++]=Zn,pn[gn++]=Jn,pn[gn++]=yr,Zn=t.id,Jn=t.overflow,yr=e}var vt=null,Re=null,ce=!1,sr=null,vn=!1,Bm=Error(L(519));function xr(e){var t=Error(L(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ol(bn(t,e)),Bm}function s1(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[bt]=e,t[Gt]=i,n){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(n=0;n<ul.length;n++)ie(ul[n],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),pw(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),yw(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||w5(t.textContent,n)?(i.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),i.onScroll!=null&&ie("scroll",t),i.onScrollEnd!=null&&ie("scrollend",t),i.onClick!=null&&(t.onclick=wi),t=!0):t=!1,t||xr(e,!0)}function l1(e){for(vt=e.return;vt;)switch(vt.tag){case 5:case 31:case 13:vn=!1;return;case 27:case 3:vn=!0;return;default:vt=vt.return}}function wa(e){if(e!==vt)return!1;if(!ce)return l1(e),ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cp(e.type,e.memoizedProps)),n=!n),n&&Re&&xr(e),l1(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));Re=X1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));Re=X1(e)}else t===27?(t=Re,Er(e.type)?(e=hp,hp=null,Re=e):Re=t):Re=vt?Tn(e.stateNode.nextSibling):null;return!0}function aa(){Re=vt=null,ce=!1}function rh(){var e=sr;return e!==null&&(Vt===null?Vt=e:Vt.push.apply(Vt,e),sr=null),e}function ol(e){sr===null?sr=[e]:sr.push(e)}var Um=ri(null),xa=null,Si=null;function Gi(e,t,n){Ee(Um,t._currentValue),t._currentValue=n}function Ti(e){e._currentValue=Um.current,dt(Um)}function Vm(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Pm(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var a=r.dependencies;if(a!==null){var o=r.child;a=a.firstContext;e:for(;a!==null;){var s=a;a=r;for(var l=0;l<t.length;l++)if(s.context===t[l]){a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Vm(a.return,n,e),i||(o=null);break e}a=s.next}}else if(r.tag===18){if(o=r.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vm(o,n,e),o=null}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}}function qo(e,t,n,i){e=null;for(var r=t,a=!1;r!==null;){if(!a){if(r.flags&524288)a=!0;else if(r.flags&262144)break}if(r.tag===10){var o=r.alternate;if(o===null)throw Error(L(387));if(o=o.memoizedProps,o!==null){var s=r.type;sn(r.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(r===Du.current){if(o=r.alternate,o===null)throw Error(L(387));o.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(fl):e=[fl])}r=r.return}e!==null&&Pm(t,e,n,i),t.flags|=262144}function Hu(e){for(e=e.firstContext;e!==null;){if(!sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){xa=e,Si=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wt(e){return Vw(xa,e)}function bc(e,t){return xa===null&&oa(e),Vw(e,t)}function Vw(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Si===null){if(e===null)throw Error(L(308));Si=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Si=Si.next=t;return n}var yE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},xE=at.unstable_scheduleCallback,bE=at.unstable_NormalPriority,et={$$typeof:vi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function O0(){return{controller:new yE,data:new Map,refCount:0}}function Fl(e){e.refCount--,e.refCount===0&&xE(bE,function(){e.controller.abort()})}var Ns=null,Hm=0,vo=0,to=null;function vE(e,t){if(Ns===null){var n=Ns=[];Hm=0,vo=rg(),to={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Hm++,t.then(c1,c1),t}function c1(){if(--Hm===0&&Ns!==null){to!==null&&(to.status="fulfilled");var e=Ns;Ns=null,vo=0,to=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var u1=X.S;X.S=function(e,t){e5=en(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vE(e,t),u1!==null&&u1(e,t)};var Zr=ri(null);function D0(){var e=Zr.current;return e!==null?e:Te.pooledCache}function ou(e,t){t===null?Ee(Zr,Zr.current):Ee(Zr,t.pool)}function Pw(){var e=D0();return e===null?null:{parent:et._currentValue,pool:e}}var Go=Error(L(460)),_0=Error(L(474)),Ld=Error(L(542)),Fu={then:function(){}};function d1(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hw(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(wi,wi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,h1(e),e;default:if(typeof t.status=="string")t.then(wi,wi);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(L(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,h1(e),e}throw Jr=t,Go}}function Dr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Jr=n,Go):n}}var Jr=null;function f1(){if(Jr===null)throw Error(L(459));var e=Jr;return Jr=null,e}function h1(e){if(e===Go||e===Ld)throw Error(L(483))}var no=null,sl=0;function vc(e){var t=sl;return sl+=1,no===null&&(no=[]),Hw(no,e,t)}function ds(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wc(e,t){throw t.$$typeof===s4?Error(L(525)):(e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fw(e){function t(g,y){if(e){var x=g.deletions;x===null?(g.deletions=[y],g.flags|=16):x.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function i(g){for(var y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function r(g,y){return g=Ci(g,y),g.index=0,g.sibling=null,g}function a(g,y,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<y?(g.flags|=67108866,y):x):(g.flags|=67108866,y)):(g.flags|=1048576,y)}function o(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function s(g,y,x,v){return y===null||y.tag!==6?(y=nh(x,g.mode,v),y.return=g,y):(y=r(y,x),y.return=g,y)}function l(g,y,x,v){var A=x.type;return A===Da?d(g,y,x.props.children,v,x.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Fi&&Dr(A)===y.type)?(y=r(y,x.props),ds(y,x),y.return=g,y):(y=au(x.type,x.key,x.props,null,g.mode,v),ds(y,x),y.return=g,y)}function u(g,y,x,v){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=ih(x,g.mode,v),y.return=g,y):(y=r(y,x.children||[]),y.return=g,y)}function d(g,y,x,v,A){return y===null||y.tag!==7?(y=Ir(x,g.mode,v,A),y.return=g,y):(y=r(y,x),y.return=g,y)}function f(g,y,x){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=nh(""+y,g.mode,x),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hc:return x=au(y.type,y.key,y.props,null,g.mode,x),ds(x,y),x.return=g,x;case Cs:return y=ih(y,g.mode,x),y.return=g,y;case Fi:return y=Dr(y),f(g,y,x)}if(Ts(y)||ls(y))return y=Ir(y,g.mode,x,null),y.return=g,y;if(typeof y.then=="function")return f(g,vc(y),x);if(y.$$typeof===vi)return f(g,bc(g,y),x);wc(g,y)}return null}function h(g,y,x,v){var A=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return A!==null?null:s(g,y,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hc:return x.key===A?l(g,y,x,v):null;case Cs:return x.key===A?u(g,y,x,v):null;case Fi:return x=Dr(x),h(g,y,x,v)}if(Ts(x)||ls(x))return A!==null?null:d(g,y,x,v,null);if(typeof x.then=="function")return h(g,y,vc(x),v);if(x.$$typeof===vi)return h(g,y,bc(g,x),v);wc(g,x)}return null}function m(g,y,x,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return g=g.get(x)||null,s(y,g,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hc:return g=g.get(v.key===null?x:v.key)||null,l(y,g,v,A);case Cs:return g=g.get(v.key===null?x:v.key)||null,u(y,g,v,A);case Fi:return v=Dr(v),m(g,y,x,v,A)}if(Ts(v)||ls(v))return g=g.get(x)||null,d(y,g,v,A,null);if(typeof v.then=="function")return m(g,y,x,vc(v),A);if(v.$$typeof===vi)return m(g,y,x,bc(y,v),A);wc(y,v)}return null}function p(g,y,x,v){for(var A=null,E=null,j=y,k=y=0,O=null;j!==null&&k<x.length;k++){j.index>k?(O=j,j=null):O=j.sibling;var _=h(g,j,x[k],v);if(_===null){j===null&&(j=O);break}e&&j&&_.alternate===null&&t(g,j),y=a(_,y,k),E===null?A=_:E.sibling=_,E=_,j=O}if(k===x.length)return n(g,j),ce&&gi(g,k),A;if(j===null){for(;k<x.length;k++)j=f(g,x[k],v),j!==null&&(y=a(j,y,k),E===null?A=j:E.sibling=j,E=j);return ce&&gi(g,k),A}for(j=i(j);k<x.length;k++)O=m(j,g,k,x[k],v),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?k:O.key),y=a(O,y,k),E===null?A=O:E.sibling=O,E=O);return e&&j.forEach(function(P){return t(g,P)}),ce&&gi(g,k),A}function b(g,y,x,v){if(x==null)throw Error(L(151));for(var A=null,E=null,j=y,k=y=0,O=null,_=x.next();j!==null&&!_.done;k++,_=x.next()){j.index>k?(O=j,j=null):O=j.sibling;var P=h(g,j,_.value,v);if(P===null){j===null&&(j=O);break}e&&j&&P.alternate===null&&t(g,j),y=a(P,y,k),E===null?A=P:E.sibling=P,E=P,j=O}if(_.done)return n(g,j),ce&&gi(g,k),A;if(j===null){for(;!_.done;k++,_=x.next())_=f(g,_.value,v),_!==null&&(y=a(_,y,k),E===null?A=_:E.sibling=_,E=_);return ce&&gi(g,k),A}for(j=i(j);!_.done;k++,_=x.next())_=m(j,g,k,_.value,v),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?k:_.key),y=a(_,y,k),E===null?A=_:E.sibling=_,E=_);return e&&j.forEach(function(T){return t(g,T)}),ce&&gi(g,k),A}function S(g,y,x,v){if(typeof x=="object"&&x!==null&&x.type===Da&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case hc:e:{for(var A=x.key;y!==null;){if(y.key===A){if(A=x.type,A===Da){if(y.tag===7){n(g,y.sibling),v=r(y,x.props.children),v.return=g,g=v;break e}}else if(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Fi&&Dr(A)===y.type){n(g,y.sibling),v=r(y,x.props),ds(v,x),v.return=g,g=v;break e}n(g,y);break}else t(g,y);y=y.sibling}x.type===Da?(v=Ir(x.props.children,g.mode,v,x.key),v.return=g,g=v):(v=au(x.type,x.key,x.props,null,g.mode,v),ds(v,x),v.return=g,g=v)}return o(g);case Cs:e:{for(A=x.key;y!==null;){if(y.key===A)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(g,y.sibling),v=r(y,x.children||[]),v.return=g,g=v;break e}else{n(g,y);break}else t(g,y);y=y.sibling}v=ih(x,g.mode,v),v.return=g,g=v}return o(g);case Fi:return x=Dr(x),S(g,y,x,v)}if(Ts(x))return p(g,y,x,v);if(ls(x)){if(A=ls(x),typeof A!="function")throw Error(L(150));return x=A.call(x),b(g,y,x,v)}if(typeof x.then=="function")return S(g,y,vc(x),v);if(x.$$typeof===vi)return S(g,y,bc(g,x),v);wc(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,y!==null&&y.tag===6?(n(g,y.sibling),v=r(y,x),v.return=g,g=v):(n(g,y),v=nh(x,g.mode,v),v.return=g,g=v),o(g)):n(g,y)}return function(g,y,x,v){try{sl=0;var A=S(g,y,x,v);return no=null,A}catch(j){if(j===Go||j===Ld)throw j;var E=Zt(29,j,null,g.mode);return E.lanes=v,E.return=g,E}finally{}}}var sa=Fw(!0),qw=Fw(!1),qi=!1;function L0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function lr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,fe&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Vu(e),_w(e,null,n),t}return _d(e,i,t,n),Vu(e)}function Bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,lw(e,n)}}function ah(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qm=!1;function Us(){if(qm){var e=to;if(e!==null)throw e}}function Vs(e,t,n,i){qm=!1;var r=e.updateQueue;qi=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;o=0,d=u=l=null,s=a;do{var h=s.lane&-536870913,m=h!==s.lane;if(m?(oe&h)===h:(i&h)===h){h!==0&&h===vo&&(qm=!0),d!==null&&(d=d.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var p=e,b=s;h=t;var S=n;switch(b.tag){case 1:if(p=b.payload,typeof p=="function"){f=p.call(S,f,h);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=b.payload,h=typeof p=="function"?p.call(S,f,h):p,h==null)break e;f=ze({},f,h);break e;case 2:qi=!0}}h=s.callback,h!==null&&(e.flags|=64,m&&(e.flags|=8192),m=r.callbacks,m===null?r.callbacks=[h]:m.push(h))}else m={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=m,l=f):d=d.next=m,o|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;m=s,s=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,a===null&&(r.shared.lanes=0),vr|=o,e.lanes=o,e.memoizedState=f}}function Gw(e,t){if(typeof e!="function")throw Error(L(191,e));e.call(t)}function Yw(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Gw(n[e],t)}var wo=ri(null),qu=ri(0);function m1(e,t){e=zi,Ee(qu,e),Ee(wo,t),zi=e|t.baseLanes}function Gm(){Ee(qu,zi),Ee(wo,wo.current)}function N0(){zi=qu.current,dt(wo),dt(qu)}var ln=ri(null),Cn=null;function Yi(e){var t=e.alternate;Ee(Ke,Ke.current&1),Ee(ln,e),Cn===null&&(t===null||wo.current!==null||t.memoizedState!==null)&&(Cn=e)}function Ym(e){Ee(Ke,Ke.current),Ee(ln,e),Cn===null&&(Cn=e)}function Kw(e){e.tag===22?(Ee(Ke,Ke.current),Ee(ln,e),Cn===null&&(Cn=e)):Ki()}function Ki(){Ee(Ke,Ke.current),Ee(ln,ln.current)}function It(e){dt(ln),Cn===e&&(Cn=null),dt(Ke)}var Ke=ri(0);function Gu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||dp(n)||fp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ki=0,J=null,Ce=null,Je=null,Yu=!1,io=!1,la=!1,Ku=0,ll=0,ro=null,SE=0;function Ue(){throw Error(L(321))}function B0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function U0(e,t,n,i,r,a){return ki=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?TS:I0,la=!1,a=n(i,r),la=!1,io&&(a=Qw(t,n,i,r)),Xw(e),a}function Xw(e){X.H=cl;var t=Ce!==null&&Ce.next!==null;if(ki=0,Je=Ce=J=null,Yu=!1,ll=0,ro=null,t)throw Error(L(300));e===null||it||(e=e.dependencies,e!==null&&Hu(e)&&(it=!0))}function Qw(e,t,n,i){J=e;var r=0;do{if(io&&(ro=null),ll=0,io=!1,25<=r)throw Error(L(301));if(r+=1,Je=Ce=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}X.H=jS,a=t(n,i)}while(io);return a}function CE(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?ql(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(J.flags|=1024),t}function V0(){var e=Ku!==0;return Ku=0,e}function P0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function H0(e){if(Yu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yu=!1}ki=0,Je=Ce=J=null,io=!1,ll=Ku=0,ro=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?J.memoizedState=Je=e:Je=Je.next=e,Je}function Xe(){if(Ce===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Je===null?J.memoizedState:Je.next;if(t!==null)Je=t,Ce=e;else{if(e===null)throw J.alternate===null?Error(L(467)):Error(L(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Je===null?J.memoizedState=Je=e:Je=Je.next=e}return Je}function Nd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var t=ll;return ll+=1,ro===null&&(ro=[]),e=Hw(ro,e,t),t=J,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?TS:I0),e}function Bd(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===vi)return wt(e)}throw Error(L(438,String(e)))}function F0(e){var t=null,n=J.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=J.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Nd(),J.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=l4;return t.index++,n}function Ri(e,t){return typeof t=="function"?t(e):t}function su(e){var t=Xe();return q0(t,Ce,e)}function q0(e,t,n){var i=e.queue;if(i===null)throw Error(L(311));i.lastRenderedReducer=n;var r=e.baseQueue,a=i.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}t.baseQueue=r=a,i.pending=null}if(a=e.baseState,r===null)e.memoizedState=a;else{t=r.next;var s=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(oe&f)===f:(ki&f)===f){var h=u.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===vo&&(d=!0);else if((ki&h)===h){u=u.next,h===vo&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=f,o=a):l=l.next=f,J.lanes|=h,vr|=h;f=u.action,la&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else h={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=h,o=a):l=l.next=h,J.lanes|=f,vr|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=s,!sn(a,e.memoizedState)&&(it=!0,d&&(n=to,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,i.lastRenderedState=a}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function oh(e){var t=Xe(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);sn(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Iw(e,t,n){var i=J,r=Xe(),a=ce;if(a){if(n===void 0)throw Error(L(407));n=n()}else n=t();var o=!sn((Ce||r).memoizedState,n);if(o&&(r.memoizedState=n,it=!0),r=r.queue,G0(Ww.bind(null,i,r,e),[e]),r.getSnapshot!==t||o||Je!==null&&Je.memoizedState.tag&1){if(i.flags|=2048,So(9,{destroy:void 0},Jw.bind(null,i,r,n,t),null),Te===null)throw Error(L(349));a||ki&127||Zw(i,t,n)}return n}function Zw(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t=Nd(),J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jw(e,t,n,i){t.value=n,t.getSnapshot=i,eS(t)&&tS(e)}function Ww(e,t,n){return n(function(){eS(t)&&tS(e)})}function eS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function tS(e){var t=ya(e,2);t!==null&&Ht(t,e,2)}function Km(e){var t=kt();if(typeof e=="function"){var n=e;if(e=n(),la){tr(!0);try{n()}finally{tr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t}function nS(e,t,n,i){return e.baseState=n,q0(e,Ce,typeof i=="function"?i:Ri)}function TE(e,t,n,i,r){if(Vd(e))throw Error(L(485));if(e=t.action,e!==null){var a={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){a.listeners.push(o)}};X.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,iS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function iS(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var a=X.T,o={};X.T=o;try{var s=n(r,i),l=X.S;l!==null&&l(o,s),p1(e,t,s)}catch(u){Xm(e,t,u)}finally{a!==null&&o.types!==null&&(a.types=o.types),X.T=a}}else try{a=n(r,i),p1(e,t,a)}catch(u){Xm(e,t,u)}}function p1(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){g1(e,t,i)},function(i){return Xm(e,t,i)}):g1(e,t,n)}function g1(e,t,n){t.status="fulfilled",t.value=n,rS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,iS(e,n)))}function Xm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,rS(t),t=t.next;while(t!==i)}e.action=null}function rS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function aS(e,t){return t}function y1(e,t){if(ce){var n=Te.formState;if(n!==null){e:{var i=J;if(ce){if(Re){t:{for(var r=Re,a=vn;r.nodeType!==8;){if(!a){r=null;break t}if(r=Tn(r.nextSibling),r===null){r=null;break t}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){Re=Tn(r.nextSibling),i=r.data==="F!";break e}}xr(i)}i=!1}i&&(t=n[0])}}return n=kt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aS,lastRenderedState:t},n.queue=i,n=wS.bind(null,J,i),i.dispatch=n,i=Km(!1),a=Q0.bind(null,J,!1,i.queue),i=kt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=TE.bind(null,J,r,a,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function x1(e){var t=Xe();return oS(t,Ce,e)}function oS(e,t,n){if(t=q0(e,t,aS)[0],e=su(Ri)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ql(t)}catch(o){throw o===Go?Ld:o}else i=t;t=Xe();var r=t.queue,a=r.dispatch;return n!==t.memoizedState&&(J.flags|=2048,So(9,{destroy:void 0},jE.bind(null,r,n),null)),[i,a,e]}function jE(e,t){e.action=t}function b1(e){var t=Xe(),n=Ce;if(n!==null)return oS(t,n,e);Xe(),t=t.memoizedState,n=Xe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function So(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=J.updateQueue,t===null&&(t=Nd(),J.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function sS(){return Xe().memoizedState}function lu(e,t,n,i){var r=kt();J.flags|=e,r.memoizedState=So(1|t,{destroy:void 0},n,i===void 0?null:i)}function Ud(e,t,n,i){var r=Xe();i=i===void 0?null:i;var a=r.memoizedState.inst;Ce!==null&&i!==null&&B0(i,Ce.memoizedState.deps)?r.memoizedState=So(t,a,n,i):(J.flags|=e,r.memoizedState=So(1|t,a,n,i))}function v1(e,t){lu(8390656,8,e,t)}function G0(e,t){Ud(2048,8,e,t)}function EE(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=Nd(),J.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function lS(e){var t=Xe().memoizedState;return EE({ref:t,nextImpl:e}),function(){if(fe&2)throw Error(L(440));return t.impl.apply(void 0,arguments)}}function cS(e,t){return Ud(4,2,e,t)}function uS(e,t){return Ud(4,4,e,t)}function dS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fS(e,t,n){n=n!=null?n.concat([e]):null,Ud(4,4,dS.bind(null,t,e),n)}function Y0(){}function hS(e,t){var n=Xe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&B0(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function mS(e,t){var n=Xe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&B0(t,i[1]))return i[0];if(i=e(),la){tr(!0);try{e()}finally{tr(!1)}}return n.memoizedState=[i,t],i}function K0(e,t,n){return n===void 0||ki&1073741824&&!(oe&261930)?e.memoizedState=t:(e.memoizedState=n,e=n5(),J.lanes|=e,vr|=e,n)}function pS(e,t,n,i){return sn(n,t)?n:wo.current!==null?(e=K0(e,n,i),sn(e,t)||(it=!0),e):!(ki&42)||ki&1073741824&&!(oe&261930)?(it=!0,e.memoizedState=n):(e=n5(),J.lanes|=e,vr|=e,t)}function gS(e,t,n,i,r){var a=he.p;he.p=a!==0&&8>a?a:8;var o=X.T,s={};X.T=s,Q0(e,!1,t,n);try{var l=r(),u=X.S;if(u!==null&&u(s,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=wE(l,i);Ps(e,t,d,rn(e))}else Ps(e,t,i,rn(e))}catch(f){Ps(e,t,{then:function(){},status:"rejected",reason:f},rn())}finally{he.p=a,o!==null&&s.types!==null&&(o.types=s.types),X.T=o}}function AE(){}function Qm(e,t,n,i){if(e.tag!==5)throw Error(L(476));var r=yS(e).queue;gS(e,r,t,Qr,n===null?AE:function(){return xS(e),n(i)})}function yS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Qr,baseState:Qr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:Qr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xS(e){var t=yS(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},rn())}function X0(){return wt(fl)}function bS(){return Xe().memoizedState}function vS(){return Xe().memoizedState}function kE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=rn();e=lr(n);var i=cr(t,e,n);i!==null&&(Ht(i,t,n),Bs(i,t,n)),t={cache:O0()},e.payload=t;return}t=t.return}}function RE(e,t,n){var i=rn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vd(e)?SS(t,n):(n=R0(e,t,n,i),n!==null&&(Ht(n,e,i),CS(n,t,i)))}function wS(e,t,n){var i=rn();Ps(e,t,n,i)}function Ps(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vd(e))SS(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,sn(s,o))return _d(e,t,r,0),Te===null&&Dd(),!1}catch{}finally{}if(n=R0(e,t,r,i),n!==null)return Ht(n,e,i),CS(n,t,i),!0}return!1}function Q0(e,t,n,i){if(i={lane:2,revertLane:rg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Vd(e)){if(t)throw Error(L(479))}else t=R0(e,n,i,2),t!==null&&Ht(t,e,2)}function Vd(e){var t=e.alternate;return e===J||t!==null&&t===J}function SS(e,t){io=Yu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function CS(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,lw(e,n)}}var cl={readContext:wt,use:Bd,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};cl.useEffectEvent=Ue;var TS={readContext:wt,use:Bd,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:v1,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,lu(4194308,4,dS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lu(4194308,4,e,t)},useInsertionEffect:function(e,t){lu(4,2,e,t)},useMemo:function(e,t){var n=kt();t=t===void 0?null:t;var i=e();if(la){tr(!0);try{e()}finally{tr(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=kt();if(n!==void 0){var r=n(t);if(la){tr(!0);try{n(t)}finally{tr(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=RE.bind(null,J,e),[i.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=Km(e);var t=e.queue,n=wS.bind(null,J,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Y0,useDeferredValue:function(e,t){var n=kt();return K0(n,e,t)},useTransition:function(){var e=Km(!1);return e=gS.bind(null,J,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=J,r=kt();if(ce){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Te===null)throw Error(L(349));oe&127||Zw(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,v1(Ww.bind(null,i,a,e),[e]),i.flags|=2048,So(9,{destroy:void 0},Jw.bind(null,i,a,n,t),null),n},useId:function(){var e=kt(),t=Te.identifierPrefix;if(ce){var n=Jn,i=Zn;n=(i&~(1<<32-nn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ku++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=SE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:X0,useFormState:y1,useActionState:y1,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Q0.bind(null,J,!0,n),n.dispatch=t,[e,t]},useMemoCache:F0,useCacheRefresh:function(){return kt().memoizedState=kE.bind(null,J)},useEffectEvent:function(e){var t=kt(),n={impl:e};return t.memoizedState=n,function(){if(fe&2)throw Error(L(440));return n.impl.apply(void 0,arguments)}}},I0={readContext:wt,use:Bd,useCallback:hS,useContext:wt,useEffect:G0,useImperativeHandle:fS,useInsertionEffect:cS,useLayoutEffect:uS,useMemo:mS,useReducer:su,useRef:sS,useState:function(){return su(Ri)},useDebugValue:Y0,useDeferredValue:function(e,t){var n=Xe();return pS(n,Ce.memoizedState,e,t)},useTransition:function(){var e=su(Ri)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:Iw,useId:bS,useHostTransitionStatus:X0,useFormState:x1,useActionState:x1,useOptimistic:function(e,t){var n=Xe();return nS(n,Ce,e,t)},useMemoCache:F0,useCacheRefresh:vS};I0.useEffectEvent=lS;var jS={readContext:wt,use:Bd,useCallback:hS,useContext:wt,useEffect:G0,useImperativeHandle:fS,useInsertionEffect:cS,useLayoutEffect:uS,useMemo:mS,useReducer:oh,useRef:sS,useState:function(){return oh(Ri)},useDebugValue:Y0,useDeferredValue:function(e,t){var n=Xe();return Ce===null?K0(n,e,t):pS(n,Ce.memoizedState,e,t)},useTransition:function(){var e=oh(Ri)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:Iw,useId:bS,useHostTransitionStatus:X0,useFormState:b1,useActionState:b1,useOptimistic:function(e,t){var n=Xe();return Ce!==null?nS(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:F0,useCacheRefresh:vS};jS.useEffectEvent=lS;function sh(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Im={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=rn(),r=lr(i);r.payload=t,n!=null&&(r.callback=n),t=cr(e,r,i),t!==null&&(Ht(t,e,i),Bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=rn(),r=lr(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=cr(e,r,i),t!==null&&(Ht(t,e,i),Bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rn(),i=lr(n);i.tag=2,t!=null&&(i.callback=t),t=cr(e,i,n),t!==null&&(Ht(t,e,n),Bs(t,e,n))}};function w1(e,t,n,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!rl(n,i)||!rl(r,a):!0}function S1(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Im.enqueueReplaceState(t,t.state,null)}function ca(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ze({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function ES(e){Uu(e)}function AS(e){console.error(e)}function kS(e){Uu(e)}function Xu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function C1(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Zm(e,t,n){return n=lr(n),n.tag=3,n.payload={element:null},n.callback=function(){Xu(e,t)},n}function RS(e){return e=lr(e),e.tag=3,e}function $S(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var a=i.value;e.payload=function(){return r(a)},e.callback=function(){C1(t,n,i)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){C1(t,n,i),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function $E(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&qo(t,n,r,!0),n=ln.current,n!==null){switch(n.tag){case 31:case 13:return Cn===null?Wu():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Fu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),xh(e,i,r)),!1;case 22:return n.flags|=65536,i===Fu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),xh(e,i,r)),!1}throw Error(L(435,n.tag))}return xh(e,i,r),Wu(),!1}if(ce)return t=ln.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Bm&&(e=Error(L(422),{cause:i}),ol(bn(e,n)))):(i!==Bm&&(t=Error(L(423),{cause:i}),ol(bn(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=bn(i,n),r=Zm(e.stateNode,i,r),ah(e,r),Ge!==4&&(Ge=2)),!1;var a=Error(L(520),{cause:i});if(a=bn(a,n),qs===null?qs=[a]:qs.push(a),Ge!==4&&(Ge=2),t===null)return!0;i=bn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Zm(n.stateNode,i,e),ah(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ur===null||!ur.has(a))))return n.flags|=65536,r&=-r,n.lanes|=r,r=RS(r),$S(r,e,n,i),ah(n,r),!1}n=n.return}while(n!==null);return!1}var Z0=Error(L(461)),it=!1;function yt(e,t,n,i){t.child=e===null?qw(t,null,n,i):sa(t,e.child,n,i)}function T1(e,t,n,i,r){n=n.render;var a=t.ref;if("ref"in i){var o={};for(var s in i)s!=="ref"&&(o[s]=i[s])}else o=i;return oa(t),i=U0(e,t,n,o,a,r),s=V0(),e!==null&&!it?(P0(e,t,r),$i(e,t,r)):(ce&&s&&z0(t),t.flags|=1,yt(e,t,i,r),t.child)}function j1(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!$0(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,zS(e,t,a,i,r)):(e=au(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!J0(e,r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(o,i)&&e.ref===t.ref)return $i(e,t,r)}return t.flags|=1,e=Ci(a,i),e.ref=t.ref,e.return=t,t.child=e}function zS(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if(rl(a,i)&&e.ref===t.ref)if(it=!1,t.pendingProps=i=a,J0(e,r))e.flags&131072&&(it=!0);else return t.lanes=e.lanes,$i(e,t,r)}return Jm(e,t,n,i,r)}function MS(e,t,n,i){var r=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~a}else i=0,t.child=null;return E1(e,t,a,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ou(t,a!==null?a.cachePool:null),a!==null?m1(t,a):Gm(),Kw(t);else return i=t.lanes=536870912,E1(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ou(t,a.cachePool),m1(t,a),Ki(),t.memoizedState=null):(e!==null&&ou(t,null),Gm(),Ki());return yt(e,t,r,n),t.child}function Es(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function E1(e,t,n,i,r){var a=D0();return a=a===null?null:{parent:et._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ou(t,null),Gm(),Kw(t),e!==null&&qo(e,t,i,!0),t.childLanes=r,null}function cu(e,t){return t=Qu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function A1(e,t,n){return sa(t,e.child,null,n),e=cu(t,t.pendingProps),e.flags|=2,It(t),t.memoizedState=null,e}function zE(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(i.mode==="hidden")return e=cu(t,i),t.lanes=536870912,Es(null,e);if(Ym(t),(e=Re)?(e=T5(e,vn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yr!==null?{id:Zn,overflow:Jn}:null,retryLane:536870912,hydrationErrors:null},n=Nw(e),n.return=t,t.child=n,vt=t,Re=null)):e=null,e===null)throw xr(t);return t.lanes=536870912,null}return cu(t,i)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(Ym(t),r)if(t.flags&256)t.flags&=-257,t=A1(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(L(558));else if(it||qo(e,t,n,!1),r=(n&e.childLanes)!==0,it||r){if(i=Te,i!==null&&(o=cw(i,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,ya(e,o),Ht(i,e,o),Z0;Wu(),t=A1(e,t,n)}else e=a.treeContext,Re=Tn(o.nextSibling),vt=t,ce=!0,sr=null,vn=!1,e!==null&&Uw(t,e),t=cu(t,i),t.flags|=4096;return t}return e=Ci(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function uu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(L(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jm(e,t,n,i,r){return oa(t),n=U0(e,t,n,i,void 0,r),i=V0(),e!==null&&!it?(P0(e,t,r),$i(e,t,r)):(ce&&i&&z0(t),t.flags|=1,yt(e,t,n,r),t.child)}function k1(e,t,n,i,r,a){return oa(t),t.updateQueue=null,n=Qw(t,i,n,r),Xw(e),i=V0(),e!==null&&!it?(P0(e,t,a),$i(e,t,a)):(ce&&i&&z0(t),t.flags|=1,yt(e,t,n,a),t.child)}function R1(e,t,n,i,r){if(oa(t),t.stateNode===null){var a=Ha,o=n.contextType;typeof o=="object"&&o!==null&&(a=wt(o)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Im,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},L0(t),o=n.contextType,a.context=typeof o=="object"&&o!==null?wt(o):Ha,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(sh(t,n,o,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(o=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),o!==a.state&&Im.enqueueReplaceState(a,a.state,null),Vs(t,i,a,r),Us(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,l=ca(n,s);a.props=l;var u=a.context,d=n.contextType;o=Ha,typeof d=="object"&&d!==null&&(o=wt(d));var f=n.getDerivedStateFromProps;d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s||u!==o)&&S1(t,a,i,o),qi=!1;var h=t.memoizedState;a.state=h,Vs(t,i,a,r),Us(),u=t.memoizedState,s||h!==u||qi?(typeof f=="function"&&(sh(t,n,f,i),u=t.memoizedState),(l=qi||w1(t,n,l,i,h,u,o))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=u),a.props=i,a.state=u,a.context=o,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Fm(e,t),o=t.memoizedProps,d=ca(n,o),a.props=d,f=t.pendingProps,h=a.context,u=n.contextType,l=Ha,typeof u=="object"&&u!==null&&(l=wt(u)),s=n.getDerivedStateFromProps,(u=typeof s=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&S1(t,a,i,l),qi=!1,h=t.memoizedState,a.state=h,Vs(t,i,a,r),Us();var m=t.memoizedState;o!==f||h!==m||qi||e!==null&&e.dependencies!==null&&Hu(e.dependencies)?(typeof s=="function"&&(sh(t,n,s,i),m=t.memoizedState),(d=qi||w1(t,n,d,i,h,m,l)||e!==null&&e.dependencies!==null&&Hu(e.dependencies))?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=m),a.props=i,a.state=m,a.context=l,i=d):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,uu(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=sa(t,e.child,null,r),t.child=sa(t,null,n,r)):yt(e,t,n,r),t.memoizedState=a.state,e=t.child):e=$i(e,t,r),e}function $1(e,t,n,i){return aa(),t.flags|=256,yt(e,t,n,i),t.child}var lh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ch(e){return{baseLanes:e,cachePool:Pw()}}function uh(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Wt),e}function OS(e,t,n){var i=t.pendingProps,r=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),o&&(r=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(r?Yi(t):Ki(),(e=Re)?(e=T5(e,vn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yr!==null?{id:Zn,overflow:Jn}:null,retryLane:536870912,hydrationErrors:null},n=Nw(e),n.return=t,t.child=n,vt=t,Re=null)):e=null,e===null)throw xr(t);return fp(e)?t.lanes=32:t.lanes=536870912,null}var s=i.children;return i=i.fallback,r?(Ki(),r=t.mode,s=Qu({mode:"hidden",children:s},r),i=Ir(i,r,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=ch(n),i.childLanes=uh(e,o,n),t.memoizedState=lh,Es(null,i)):(Yi(t),Wm(t,s))}var l=e.memoizedState;if(l!==null&&(s=l.dehydrated,s!==null)){if(a)t.flags&256?(Yi(t),t.flags&=-257,t=dh(e,t,n)):t.memoizedState!==null?(Ki(),t.child=e.child,t.flags|=128,t=null):(Ki(),s=i.fallback,r=t.mode,i=Qu({mode:"visible",children:i.children},r),s=Ir(s,r,n,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,sa(t,e.child,null,n),i=t.child,i.memoizedState=ch(n),i.childLanes=uh(e,o,n),t.memoizedState=lh,t=Es(null,i));else if(Yi(t),fp(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var u=o.dgst;o=u,i=Error(L(419)),i.stack="",i.digest=o,ol({value:i,source:null,stack:null}),t=dh(e,t,n)}else if(it||qo(e,t,n,!1),o=(n&e.childLanes)!==0,it||o){if(o=Te,o!==null&&(i=cw(o,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ya(e,i),Ht(o,e,i),Z0;dp(s)||Wu(),t=dh(e,t,n)}else dp(s)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=Tn(s.nextSibling),vt=t,ce=!0,sr=null,vn=!1,e!==null&&Uw(t,e),t=Wm(t,i.children),t.flags|=4096);return t}return r?(Ki(),s=i.fallback,r=t.mode,l=e.child,u=l.sibling,i=Ci(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?s=Ci(u,s):(s=Ir(s,r,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Es(null,i),i=t.child,s=e.child.memoizedState,s===null?s=ch(n):(r=s.cachePool,r!==null?(l=et._currentValue,r=r.parent!==l?{parent:l,pool:l}:r):r=Pw(),s={baseLanes:s.baseLanes|n,cachePool:r}),i.memoizedState=s,i.childLanes=uh(e,o,n),t.memoizedState=lh,Es(e.child,i)):(Yi(t),n=e.child,e=n.sibling,n=Ci(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Wm(e,t){return t=Qu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qu(e,t){return e=Zt(22,e,null,t),e.lanes=0,e}function dh(e,t,n){return sa(t,e.child,null,n),e=Wm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function z1(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Vm(e.return,t,n)}function fh(e,t,n,i,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r,o.treeForkCount=a)}function DS(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;i=i.children;var o=Ke.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,Ee(Ke,o),yt(e,t,i,n),i=ce?al:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z1(e,n,t);else if(e.tag===19)z1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Gu(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),fh(t,!1,r,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Gu(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}fh(t,!0,n,null,a,i);break;case"together":fh(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function $i(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vr|=t.lanes,!(n&t.childLanes))if(e!==null){if(qo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function J0(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Hu(e)))}function ME(e,t,n){switch(t.tag){case 3:_u(t,t.stateNode.containerInfo),Gi(t,et,e.memoizedState.cache),aa();break;case 27:case 5:Am(t);break;case 4:_u(t,t.stateNode.containerInfo);break;case 10:Gi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ym(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Yi(t),t.flags|=128,null):n&t.child.childLanes?OS(e,t,n):(Yi(t),e=$i(e,t,n),e!==null?e.sibling:null);Yi(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(qo(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return DS(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ee(Ke,Ke.current),i)break;return null;case 22:return t.lanes=0,MS(e,t,n,t.pendingProps);case 24:Gi(t,et,e.memoizedState.cache)}return $i(e,t,n)}function _S(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!J0(e,n)&&!(t.flags&128))return it=!1,ME(e,t,n);it=!!(e.flags&131072)}else it=!1,ce&&t.flags&1048576&&Bw(t,al,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Dr(t.elementType),t.type=e,typeof e=="function")$0(e)?(i=ca(e,i),t.tag=1,t=R1(null,t,e,i,n)):(t.tag=0,t=Jm(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===g0){t.tag=11,t=T1(null,t,e,i,n);break e}else if(r===y0){t.tag=14,t=j1(null,t,e,i,n);break e}}throw t=jm(e)||e,Error(L(306,t,""))}}return t;case 0:return Jm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=ca(i,t.pendingProps),R1(e,t,i,r,n);case 3:e:{if(_u(t,t.stateNode.containerInfo),e===null)throw Error(L(387));i=t.pendingProps;var a=t.memoizedState;r=a.element,Fm(e,t),Vs(t,i,null,n);var o=t.memoizedState;if(i=o.cache,Gi(t,et,i),i!==a.cache&&Pm(t,[et],n,!0),Us(),i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=$1(e,t,i,n);break e}else if(i!==r){r=bn(Error(L(424)),t),ol(r),t=$1(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Tn(e.firstChild),vt=t,ce=!0,sr=null,vn=!0,n=qw(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(aa(),i===r){t=$i(e,t,n);break e}yt(e,t,i,n)}t=t.child}return t;case 26:return uu(e,t),e===null?(n=Z1(t.type,null,t.pendingProps,null))?t.memoizedState=n:ce||(n=t.type,e=t.pendingProps,i=id(or.current).createElement(n),i[bt]=t,i[Gt]=e,St(i,n,e),ct(i),t.stateNode=i):t.memoizedState=Z1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Am(t),e===null&&ce&&(i=t.stateNode=j5(t.type,t.pendingProps,or.current),vt=t,vn=!0,r=Re,Er(t.type)?(hp=r,Re=Tn(i.firstChild)):Re=r),yt(e,t,t.pendingProps.children,n),uu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((r=i=Re)&&(i=lA(i,t.type,t.pendingProps,vn),i!==null?(t.stateNode=i,vt=t,Re=Tn(i.firstChild),vn=!1,r=!0):r=!1),r||xr(t)),Am(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,cp(r,a)?i=null:o!==null&&cp(r,o)&&(t.flags|=32),t.memoizedState!==null&&(r=U0(e,t,CE,null,null,n),fl._currentValue=r),uu(e,t),yt(e,t,i,n),t.child;case 6:return e===null&&ce&&((e=n=Re)&&(n=cA(n,t.pendingProps,vn),n!==null?(t.stateNode=n,vt=t,Re=null,e=!0):e=!1),e||xr(t)),null;case 13:return OS(e,t,n);case 4:return _u(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=sa(t,null,i,n):yt(e,t,i,n),t.child;case 11:return T1(e,t,t.type,t.pendingProps,n);case 7:return yt(e,t,t.pendingProps,n),t.child;case 8:return yt(e,t,t.pendingProps.children,n),t.child;case 12:return yt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Gi(t,t.type,i.value),yt(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,oa(t),r=wt(r),i=i(r),t.flags|=1,yt(e,t,i,n),t.child;case 14:return j1(e,t,t.type,t.pendingProps,n);case 15:return zS(e,t,t.type,t.pendingProps,n);case 19:return DS(e,t,n);case 31:return zE(e,t,n);case 22:return MS(e,t,n,t.pendingProps);case 24:return oa(t),i=wt(et),e===null?(r=D0(),r===null&&(r=Te,a=O0(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=n),r=a),t.memoizedState={parent:i,cache:r},L0(t),Gi(t,et,r)):(e.lanes&n&&(Fm(e,t),Vs(t,null,null,n),Us()),r=e.memoizedState,a=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Gi(t,et,i)):(i=a.cache,Gi(t,et,i),i!==r.cache&&Pm(t,[et],n,!0))),yt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(L(156,t.tag))}function li(e){e.flags|=4}function hh(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(a5())e.flags|=8192;else throw Jr=Fu,_0}else e.flags&=-16777217}function M1(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!k5(t))if(a5())e.flags|=8192;else throw Jr=Fu,_0}function Sc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ow():536870912,e.lanes|=t,Co|=t)}function fs(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function OE(e,t,n){var i=t.pendingProps;switch(M0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ti(et),yo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(wa(t)?li(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rh())),Ae(t),null;case 26:var r=t.type,a=t.memoizedState;return e===null?(li(t),a!==null?(Ae(t),M1(t,a)):(Ae(t),hh(t,r,null,i,n))):a?a!==e.memoizedState?(li(t),Ae(t),M1(t,a)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&li(t),Ae(t),hh(t,r,e,i,n)),null;case 27:if(Lu(t),n=or.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&li(t);else{if(!i){if(t.stateNode===null)throw Error(L(166));return Ae(t),null}e=ei.current,wa(t)?s1(t):(e=j5(r,i,n),t.stateNode=e,li(t))}return Ae(t),null;case 5:if(Lu(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&li(t);else{if(!i){if(t.stateNode===null)throw Error(L(166));return Ae(t),null}if(a=ei.current,wa(t))s1(t);else{var o=id(or.current);switch(a){case 1:a=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:a=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":a=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":a=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":a=o.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?o.createElement(r,{is:i.is}):o.createElement(r)}}a[bt]=t,a[Gt]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;e:switch(St(a,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&li(t)}}return Ae(t),hh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&li(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(L(166));if(e=or.current,wa(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=vt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[bt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||w5(e.nodeValue,n)),e||xr(t,!0)}else e=id(e).createTextNode(i),e[bt]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=wa(t),n!==null){if(e===null){if(!i)throw Error(L(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(557));e[bt]=t}else aa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=rh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(It(t),t):(It(t),null);if(t.flags&128)throw Error(L(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=wa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(L(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(L(317));r[bt]=t}else aa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),r=!1}else r=rh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(It(t),t):(It(t),null)}return It(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Sc(t,t.updateQueue),Ae(t),null);case 4:return yo(),e===null&&ag(t.stateNode.containerInfo),Ae(t),null;case 10:return Ti(t.type),Ae(t),null;case 19:if(dt(Ke),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)fs(i,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Gu(e),a!==null){for(t.flags|=128,fs(i,!1),e=a.updateQueue,t.updateQueue=e,Sc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Lw(n,e),n=n.sibling;return Ee(Ke,Ke.current&1|2),ce&&gi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&en()>Zu&&(t.flags|=128,r=!0,fs(i,!1),t.lanes=4194304)}else{if(!r)if(e=Gu(a),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Sc(t,e),fs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ce)return Ae(t),null}else 2*en()-i.renderingStartTime>Zu&&n!==536870912&&(t.flags|=128,r=!0,fs(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=en(),e.sibling=null,n=Ke.current,Ee(Ke,r?n&1|2:n&1),ce&&gi(t,i.treeForkCount),e):(Ae(t),null);case 22:case 23:return It(t),N0(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&Sc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&dt(Zr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ti(et),Ae(t),null;case 25:return null;case 30:return null}throw Error(L(156,t.tag))}function DE(e,t){switch(M0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ti(et),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Lu(t),null;case 31:if(t.memoizedState!==null){if(It(t),t.alternate===null)throw Error(L(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(It(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return dt(Ke),null;case 4:return yo(),null;case 10:return Ti(t.type),null;case 22:case 23:return It(t),N0(),e!==null&&dt(Zr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ti(et),null;case 25:return null;default:return null}}function LS(e,t){switch(M0(t),t.tag){case 3:Ti(et),yo();break;case 26:case 27:case 5:Lu(t);break;case 4:yo();break;case 31:t.memoizedState!==null&&It(t);break;case 13:It(t);break;case 19:dt(Ke);break;case 10:Ti(t.type);break;case 22:case 23:It(t),N0(),e!==null&&dt(Zr);break;case 24:Ti(et)}}function Gl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var a=n.create,o=n.inst;i=a(),o.destroy=i}n=n.next}while(n!==r)}}catch(s){we(t,t.return,s)}}function br(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var a=r.next;i=a;do{if((i.tag&e)===e){var o=i.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,r=t;var l=n,u=s;try{u()}catch(d){we(r,l,d)}}}i=i.next}while(i!==a)}}catch(d){we(t,t.return,d)}}function NS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Yw(t,n)}catch(i){we(e,e.return,i)}}}function BS(e,t,n){n.props=ca(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){we(e,t,i)}}function Hs(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){we(e,t,r)}}function Wn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){we(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function US(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){we(e,e.return,r)}}function mh(e,t,n){try{var i=e.stateNode;nA(i,e.type,n,t),i[Gt]=t}catch(r){we(e,e.return,r)}}function VS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Er(e.type)||e.tag===4}function ph(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||VS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Er(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ep(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(i!==4&&(i===27&&Er(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ep(e,t,n),e=e.sibling;e!==null;)ep(e,t,n),e=e.sibling}function Iu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Er(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Iu(e,t,n),e=e.sibling;e!==null;)Iu(e,t,n),e=e.sibling}function PS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);St(t,i,n),t[bt]=e,t[Gt]=n}catch(a){we(e,e.return,a)}}var xi=!1,We=!1,gh=!1,O1=typeof WeakSet=="function"?WeakSet:Set,st=null;function _E(e,t){if(e=e.containerInfo,sp=sd,e=kw(e),A0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(s=o+r),f!==a||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===e)break t;if(h===n&&++u===r&&(s=o),h===a&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lp={focusedElem:e,selectionRange:n},sd=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,r=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var p=ca(n.type,r);e=i.getSnapshotBeforeUpdate(p,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(b){we(n,n.return,b)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)up(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":up(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(L(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function HS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ui(e,n),i&4&&Gl(5,n);break;case 1:if(ui(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){we(n,n.return,o)}else{var r=ca(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){we(n,n.return,o)}}i&64&&NS(n),i&512&&Hs(n,n.return);break;case 3:if(ui(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Yw(e,t)}catch(o){we(n,n.return,o)}}break;case 27:t===null&&i&4&&PS(n);case 26:case 5:ui(e,n),t===null&&i&4&&US(n),i&512&&Hs(n,n.return);break;case 12:ui(e,n);break;case 31:ui(e,n),i&4&&GS(e,n);break;case 13:ui(e,n),i&4&&YS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qE.bind(null,n),uA(e,n))));break;case 22:if(i=n.memoizedState!==null||xi,!i){t=t!==null&&t.memoizedState!==null||We,r=xi;var a=We;xi=i,(We=t)&&!a?hi(e,n,(n.subtreeFlags&8772)!==0):ui(e,n),xi=r,We=a}break;case 30:break;default:ui(e,n)}}function FS(e){var t=e.alternate;t!==null&&(e.alternate=null,FS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&w0(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,Ut=!1;function ci(e,t,n){for(n=n.child;n!==null;)qS(e,t,n),n=n.sibling}function qS(e,t,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 26:We||Wn(n,t),ci(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||Wn(n,t);var i=De,r=Ut;Er(n.type)&&(De=n.stateNode,Ut=!1),ci(e,t,n),Ys(n.stateNode),De=i,Ut=r;break;case 5:We||Wn(n,t);case 6:if(i=De,r=Ut,De=null,ci(e,t,n),De=i,Ut=r,De!==null)if(Ut)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(n.stateNode)}catch(a){we(n,t,a)}else try{De.removeChild(n.stateNode)}catch(a){we(n,t,a)}break;case 18:De!==null&&(Ut?(e=De,Y1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ao(e)):Y1(De,n.stateNode));break;case 4:i=De,r=Ut,De=n.stateNode.containerInfo,Ut=!0,ci(e,t,n),De=i,Ut=r;break;case 0:case 11:case 14:case 15:br(2,n,t),We||br(4,n,t),ci(e,t,n);break;case 1:We||(Wn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&BS(n,t,i)),ci(e,t,n);break;case 21:ci(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,ci(e,t,n),We=i;break;default:ci(e,t,n)}}function GS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ao(e)}catch(n){we(t,t.return,n)}}}function YS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(n){we(t,t.return,n)}}function LE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new O1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new O1),t;default:throw Error(L(435,e.tag))}}function Cc(e,t){var n=LE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=GE.bind(null,e,i);i.then(r,r)}})}function Lt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(Er(s.type)){De=s.stateNode,Ut=!1;break e}break;case 5:De=s.stateNode,Ut=!1;break e;case 3:case 4:De=s.stateNode.containerInfo,Ut=!0;break e}s=s.return}if(De===null)throw Error(L(160));qS(a,o,r),De=null,Ut=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)KS(t,e),t=t.sibling}var Bn=null;function KS(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Lt(t,e),Nt(e),i&4&&(br(3,e,e.return),Gl(3,e),br(5,e,e.return));break;case 1:Lt(t,e),Nt(e),i&512&&(We||n===null||Wn(n,n.return)),i&64&&xi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Bn;if(Lt(t,e),Nt(e),i&512&&(We||n===null||Wn(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Pl]||a[bt]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(i),r.head.insertBefore(a,r.querySelector("head > title"))),St(a,i,n),a[bt]=e,ct(a),i=a;break e;case"link":var o=W1("link","href",r).get(i+(n.href||""));if(o){for(var s=0;s<o.length;s++)if(a=o[s],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break t}}a=r.createElement(i),St(a,i,n),r.head.appendChild(a);break;case"meta":if(o=W1("meta","content",r).get(i+(n.content||""))){for(s=0;s<o.length;s++)if(a=o[s],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(s,1);break t}}a=r.createElement(i),St(a,i,n),r.head.appendChild(a);break;default:throw Error(L(468,i))}a[bt]=e,ct(a),i=a}e.stateNode=i}else ex(r,e.type,e.stateNode);else e.stateNode=J1(r,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?ex(r,e.type,e.stateNode):J1(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&mh(e,e.memoizedProps,n.memoizedProps)}break;case 27:Lt(t,e),Nt(e),i&512&&(We||n===null||Wn(n,n.return)),n!==null&&i&4&&mh(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Lt(t,e),Nt(e),i&512&&(We||n===null||Wn(n,n.return)),e.flags&32){r=e.stateNode;try{bo(r,"")}catch(p){we(e,e.return,p)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,mh(e,r,n!==null?n.memoizedProps:r)),i&1024&&(gh=!0);break;case 6:if(Lt(t,e),Nt(e),i&4){if(e.stateNode===null)throw Error(L(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){we(e,e.return,p)}}break;case 3:if(hu=null,r=Bn,Bn=rd(t.containerInfo),Lt(t,e),Bn=r,Nt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(p){we(e,e.return,p)}gh&&(gh=!1,XS(e));break;case 4:i=Bn,Bn=rd(e.stateNode.containerInfo),Lt(t,e),Nt(e),Bn=i;break;case 12:Lt(t,e),Nt(e);break;case 31:Lt(t,e),Nt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cc(e,i)));break;case 13:Lt(t,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Pd=en()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cc(e,i)));break;case 22:r=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=xi,d=We;if(xi=u||r,We=d||l,Lt(t,e),We=d,xi=u,Nt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||l||xi||We||_r(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,r)o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=l.stateNode;var f=l.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;s.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(p){we(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=r?"":l.memoizedProps}catch(p){we(l,l.return,p)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;r?K1(m,!0):K1(l.stateNode,!1)}catch(p){we(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Cc(e,n))));break;case 19:Lt(t,e),Nt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cc(e,i)));break;case 30:break;case 21:break;default:Lt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(VS(i)){n=i;break}i=i.return}if(n==null)throw Error(L(160));switch(n.tag){case 27:var r=n.stateNode,a=ph(e);Iu(e,a,r);break;case 5:var o=n.stateNode;n.flags&32&&(bo(o,""),n.flags&=-33);var s=ph(e);Iu(e,s,o);break;case 3:case 4:var l=n.stateNode.containerInfo,u=ph(e);ep(e,u,l);break;default:throw Error(L(161))}}catch(d){we(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function XS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;XS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ui(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)HS(e,t.alternate,t),t=t.sibling}function _r(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:br(4,t,t.return),_r(t);break;case 1:Wn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&BS(t,t.return,n),_r(t);break;case 27:Ys(t.stateNode);case 26:case 5:Wn(t,t.return),_r(t);break;case 22:t.memoizedState===null&&_r(t);break;case 30:_r(t);break;default:_r(t)}e=e.sibling}}function hi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:hi(r,a,n),Gl(4,a);break;case 1:if(hi(r,a,n),i=a,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(u){we(i,i.return,u)}if(i=a,r=i.updateQueue,r!==null){var s=i.stateNode;try{var l=r.shared.hiddenCallbacks;if(l!==null)for(r.shared.hiddenCallbacks=null,r=0;r<l.length;r++)Gw(l[r],s)}catch(u){we(i,i.return,u)}}n&&o&64&&NS(a),Hs(a,a.return);break;case 27:PS(a);case 26:case 5:hi(r,a,n),n&&i===null&&o&4&&US(a),Hs(a,a.return);break;case 12:hi(r,a,n);break;case 31:hi(r,a,n),n&&o&4&&GS(r,a);break;case 13:hi(r,a,n),n&&o&4&&YS(r,a);break;case 22:a.memoizedState===null&&hi(r,a,n),Hs(a,a.return);break;case 30:break;default:hi(r,a,n)}t=t.sibling}}function W0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fl(n))}function eg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e))}function Mn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)QS(e,t,n,i),t=t.sibling}function QS(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Mn(e,t,n,i),r&2048&&Gl(9,t);break;case 1:Mn(e,t,n,i);break;case 3:Mn(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e)));break;case 12:if(r&2048){Mn(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){we(t,t.return,l)}}else Mn(e,t,n,i);break;case 31:Mn(e,t,n,i);break;case 13:Mn(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState!==null?a._visibility&2?Mn(e,t,n,i):Fs(e,t):a._visibility&2?Mn(e,t,n,i):(a._visibility|=2,Ma(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&W0(o,t);break;case 24:Mn(e,t,n,i),r&2048&&eg(t.alternate,t);break;default:Mn(e,t,n,i)}}function Ma(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,o=t,s=n,l=i,u=o.flags;switch(o.tag){case 0:case 11:case 15:Ma(a,o,s,l,r),Gl(8,o);break;case 23:break;case 22:var d=o.stateNode;o.memoizedState!==null?d._visibility&2?Ma(a,o,s,l,r):Fs(a,o):(d._visibility|=2,Ma(a,o,s,l,r)),r&&u&2048&&W0(o.alternate,o);break;case 24:Ma(a,o,s,l,r),r&&u&2048&&eg(o.alternate,o);break;default:Ma(a,o,s,l,r)}t=t.sibling}}function Fs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Fs(n,i),r&2048&&W0(i.alternate,i);break;case 24:Fs(n,i),r&2048&&eg(i.alternate,i);break;default:Fs(n,i)}t=t.sibling}}var As=8192;function Sa(e,t,n){if(e.subtreeFlags&As)for(e=e.child;e!==null;)IS(e,t,n),e=e.sibling}function IS(e,t,n){switch(e.tag){case 26:Sa(e,t,n),e.flags&As&&e.memoizedState!==null&&SA(n,Bn,e.memoizedState,e.memoizedProps);break;case 5:Sa(e,t,n);break;case 3:case 4:var i=Bn;Bn=rd(e.stateNode.containerInfo),Sa(e,t,n),Bn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=As,As=16777216,Sa(e,t,n),As=i):Sa(e,t,n));break;default:Sa(e,t,n)}}function ZS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hs(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];st=i,WS(i,e)}ZS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)JS(e),e=e.sibling}function JS(e){switch(e.tag){case 0:case 11:case 15:hs(e),e.flags&2048&&br(9,e,e.return);break;case 3:hs(e);break;case 12:hs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,du(e)):hs(e);break;default:hs(e)}}function du(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];st=i,WS(i,e)}ZS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:br(8,t,t.return),du(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,du(t));break;default:du(t)}e=e.sibling}}function WS(e,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:br(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,st=i;else e:for(n=e;st!==null;){i=st;var r=i.sibling,a=i.return;if(FS(i),i===n){st=null;break e}if(r!==null){r.return=a,st=r;break e}st=a}}}var NE={getCacheForType:function(e){var t=wt(et),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return wt(et).controller.signal}},BE=typeof WeakMap=="function"?WeakMap:Map,fe=0,Te=null,ae=null,oe=0,ve=0,Qt=null,ir=!1,Yo=!1,tg=!1,zi=0,Ge=0,vr=0,Wr=0,ng=0,Wt=0,Co=0,qs=null,Vt=null,tp=!1,Pd=0,e5=0,Zu=1/0,Ju=null,ur=null,rt=0,dr=null,To=null,ji=0,np=0,ip=null,t5=null,Gs=0,rp=null;function rn(){return fe&2&&oe!==0?oe&-oe:X.T!==null?rg():uw()}function n5(){if(Wt===0)if(!(oe&536870912)||ce){var e=pc;pc<<=1,!(pc&3932160)&&(pc=262144),Wt=e}else Wt=536870912;return e=ln.current,e!==null&&(e.flags|=32),Wt}function Ht(e,t,n){(e===Te&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(jo(e,0),rr(e,oe,Wt,!1)),Vl(e,n),(!(fe&2)||e!==Te)&&(e===Te&&(!(fe&2)&&(Wr|=n),Ge===4&&rr(e,oe,Wt,!1)),ai(e))}function i5(e,t,n){if(fe&6)throw Error(L(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ul(e,t),r=i?PE(e,t):yh(e,t,!0),a=i;do{if(r===0){Yo&&!i&&rr(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!UE(n)){r=yh(e,t,!1),a=!1;continue}if(r===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;r=qs;var l=s.current.memoizedState.isDehydrated;if(l&&(jo(s,o).flags|=256),o=yh(s,o,!1),o!==2){if(tg&&!l){s.errorRecoveryDisabledLanes|=a,Wr|=a,r=4;break e}a=Vt,Vt=r,a!==null&&(Vt===null?Vt=a:Vt.push.apply(Vt,a))}r=o}if(a=!1,r!==2)continue}}if(r===1){jo(e,0),rr(e,t,0,!0);break}e:{switch(i=e,a=r,a){case 0:case 1:throw Error(L(345));case 4:if((t&4194048)!==t)break;case 6:rr(i,t,Wt,!ir);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(L(329))}if((t&62914560)===t&&(r=Pd+300-en(),10<r)){if(rr(i,t,Wt,!ir),$d(i,0,!0)!==0)break e;ji=t,i.timeoutHandle=C5(D1.bind(null,i,n,Vt,Ju,tp,t,Wt,Wr,Co,ir,a,"Throttled",-0,0),r);break e}D1(i,n,Vt,Ju,tp,t,Wt,Wr,Co,ir,a,null,-0,0)}}break}while(!0);ai(e)}function D1(e,t,n,i,r,a,o,s,l,u,d,f,h,m){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wi},IS(t,a,f);var p=(a&62914560)===a?Pd-en():(a&4194048)===a?e5-en():0;if(p=CA(f,p),p!==null){ji=a,e.cancelPendingCommit=p(L1.bind(null,e,t,a,n,i,r,o,s,l,d,f,null,h,m)),rr(e,a,o,!u);return}}L1(e,t,a,n,i,r,o,s,l)}function UE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!sn(a(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t,n,i){t&=~ng,t&=~Wr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var a=31-nn(r),o=1<<a;i[a]=-1,r&=~o}n!==0&&sw(e,n,t)}function Hd(){return fe&6?!0:(Yl(0),!1)}function ig(){if(ae!==null){if(ve===0)var e=ae.return;else e=ae,Si=xa=null,H0(e),no=null,sl=0,e=ae;for(;e!==null;)LS(e.alternate,e),e=e.return;ae=null}}function jo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,aA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ji=0,ig(),Te=e,ae=n=Ci(e.current,null),oe=t,ve=0,Qt=null,ir=!1,Yo=Ul(e,t),tg=!1,Co=Wt=ng=Wr=vr=Ge=0,Vt=qs=null,tp=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-nn(i),a=1<<r;t|=e[r],i&=~a}return zi=t,Dd(),n}function r5(e,t){J=null,X.H=cl,t===Go||t===Ld?(t=f1(),ve=3):t===_0?(t=f1(),ve=4):ve=t===Z0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qt=t,ae===null&&(Ge=1,Xu(e,bn(t,e.current)))}function a5(){var e=ln.current;return e===null?!0:(oe&4194048)===oe?Cn===null:(oe&62914560)===oe||oe&536870912?e===Cn:!1}function o5(){var e=X.H;return X.H=cl,e===null?cl:e}function s5(){var e=X.A;return X.A=NE,e}function Wu(){Ge=4,ir||(oe&4194048)!==oe&&ln.current!==null||(Yo=!0),!(vr&134217727)&&!(Wr&134217727)||Te===null||rr(Te,oe,Wt,!1)}function yh(e,t,n){var i=fe;fe|=2;var r=o5(),a=s5();(Te!==e||oe!==t)&&(Ju=null,jo(e,t)),t=!1;var o=Ge;e:do try{if(ve!==0&&ae!==null){var s=ae,l=Qt;switch(ve){case 8:ig(),o=6;break e;case 3:case 2:case 9:case 6:ln.current===null&&(t=!0);var u=ve;if(ve=0,Qt=null,Ga(e,s,l,u),n&&Yo){o=0;break e}break;default:u=ve,ve=0,Qt=null,Ga(e,s,l,u)}}VE(),o=Ge;break}catch(d){r5(e,d)}while(!0);return t&&e.shellSuspendCounter++,Si=xa=null,fe=i,X.H=r,X.A=a,ae===null&&(Te=null,oe=0,Dd()),o}function VE(){for(;ae!==null;)l5(ae)}function PE(e,t){var n=fe;fe|=2;var i=o5(),r=s5();Te!==e||oe!==t?(Ju=null,Zu=en()+500,jo(e,t)):Yo=Ul(e,t);e:do try{if(ve!==0&&ae!==null){t=ae;var a=Qt;t:switch(ve){case 1:ve=0,Qt=null,Ga(e,t,a,1);break;case 2:case 9:if(d1(a)){ve=0,Qt=null,_1(t);break}t=function(){ve!==2&&ve!==9||Te!==e||(ve=7),ai(e)},a.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:d1(a)?(ve=0,Qt=null,_1(t)):(ve=0,Qt=null,Ga(e,t,a,7));break;case 5:var o=null;switch(ae.tag){case 26:o=ae.memoizedState;case 5:case 27:var s=ae;if(o?k5(o):s.stateNode.complete){ve=0,Qt=null;var l=s.sibling;if(l!==null)ae=l;else{var u=s.return;u!==null?(ae=u,Fd(u)):ae=null}break t}}ve=0,Qt=null,Ga(e,t,a,5);break;case 6:ve=0,Qt=null,Ga(e,t,a,6);break;case 8:ig(),Ge=6;break e;default:throw Error(L(462))}}HE();break}catch(d){r5(e,d)}while(!0);return Si=xa=null,X.H=i,X.A=r,fe=n,ae!==null?0:(Te=null,oe=0,Dd(),Ge)}function HE(){for(;ae!==null&&!d4();)l5(ae)}function l5(e){var t=_S(e.alternate,e,zi);e.memoizedProps=e.pendingProps,t===null?Fd(e):ae=t}function _1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=k1(n,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=k1(n,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:H0(t);default:LS(n,t),t=ae=Lw(t,zi),t=_S(n,t,zi)}e.memoizedProps=e.pendingProps,t===null?Fd(e):ae=t}function Ga(e,t,n,i){Si=xa=null,H0(t),no=null,sl=0;var r=t.return;try{if($E(e,r,t,n,oe)){Ge=1,Xu(e,bn(n,e.current)),ae=null;return}}catch(a){if(r!==null)throw ae=r,a;Ge=1,Xu(e,bn(n,e.current)),ae=null;return}t.flags&32768?(ce||i===1?e=!0:Yo||oe&536870912?e=!1:(ir=e=!0,(i===2||i===9||i===3||i===6)&&(i=ln.current,i!==null&&i.tag===13&&(i.flags|=16384))),c5(t,e)):Fd(t)}function Fd(e){var t=e;do{if(t.flags&32768){c5(t,ir);return}e=t.return;var n=OE(t.alternate,t,zi);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Ge===0&&(Ge=5)}function c5(e,t){do{var n=DE(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);Ge=6,ae=null}function L1(e,t,n,i,r,a,o,s,l){e.cancelPendingCommit=null;do qd();while(rt!==0);if(fe&6)throw Error(L(327));if(t!==null){if(t===e.current)throw Error(L(177));if(a=t.lanes|t.childLanes,a|=k0,w4(e,n,a,o,s,l),e===Te&&(ae=Te=null,oe=0),To=t,dr=e,ji=n,np=a,ip=r,t5=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,YE(Nu,function(){return m5(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=X.T,X.T=null,r=he.p,he.p=2,o=fe,fe|=4;try{_E(e,t,n)}finally{fe=o,he.p=r,X.T=i}}rt=1,u5(),d5(),f5()}}function u5(){if(rt===1){rt=0;var e=dr,t=To,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=X.T,X.T=null;var i=he.p;he.p=2;var r=fe;fe|=4;try{KS(t,e);var a=lp,o=kw(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Aw(s.ownerDocument.documentElement,s)){if(l!==null&&A0(s)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(d,s.value.length);else{var f=s.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var m=h.getSelection(),p=s.textContent.length,b=Math.min(l.start,p),S=l.end===void 0?b:Math.min(l.end,p);!m.extend&&b>S&&(o=S,S=b,b=o);var g=r1(s,b),y=r1(s,S);if(g&&y&&(m.rangeCount!==1||m.anchorNode!==g.node||m.anchorOffset!==g.offset||m.focusNode!==y.node||m.focusOffset!==y.offset)){var x=f.createRange();x.setStart(g.node,g.offset),m.removeAllRanges(),b>S?(m.addRange(x),m.extend(y.node,y.offset)):(x.setEnd(y.node,y.offset),m.addRange(x))}}}}for(f=[],m=s;m=m.parentNode;)m.nodeType===1&&f.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<f.length;s++){var v=f[s];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}sd=!!sp,lp=sp=null}finally{fe=r,he.p=i,X.T=n}}e.current=t,rt=2}}function d5(){if(rt===2){rt=0;var e=dr,t=To,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=X.T,X.T=null;var i=he.p;he.p=2;var r=fe;fe|=4;try{HS(e,t.alternate,t)}finally{fe=r,he.p=i,X.T=n}}rt=3}}function f5(){if(rt===4||rt===3){rt=0,f4();var e=dr,t=To,n=ji,i=t5;t.subtreeFlags&10256||t.flags&10256?rt=5:(rt=0,To=dr=null,h5(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ur=null),v0(n),t=t.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=X.T,r=he.p,he.p=2,X.T=null;try{for(var a=e.onRecoverableError,o=0;o<i.length;o++){var s=i[o];a(s.value,{componentStack:s.stack})}}finally{X.T=t,he.p=r}}ji&3&&qd(),ai(e),r=e.pendingLanes,n&261930&&r&42?e===rp?Gs++:(Gs=0,rp=e):Gs=0,Yl(0)}}function h5(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fl(t)))}function qd(){return u5(),d5(),f5(),m5()}function m5(){if(rt!==5)return!1;var e=dr,t=np;np=0;var n=v0(ji),i=X.T,r=he.p;try{he.p=32>n?32:n,X.T=null,n=ip,ip=null;var a=dr,o=ji;if(rt=0,To=dr=null,ji=0,fe&6)throw Error(L(331));var s=fe;if(fe|=4,JS(a.current),QS(a,a.current,o,n),fe=s,Yl(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Bl,a)}catch{}return!0}finally{he.p=r,X.T=i,h5(e,t)}}function N1(e,t,n){t=bn(n,t),t=Zm(e.stateNode,t,2),e=cr(e,t,2),e!==null&&(Vl(e,2),ai(e))}function we(e,t,n){if(e.tag===3)N1(e,e,n);else for(;t!==null;){if(t.tag===3){N1(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){e=bn(n,e),n=RS(2),i=cr(t,n,2),i!==null&&($S(n,i,t,e),Vl(i,2),ai(i));break}}t=t.return}}function xh(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new BE;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(tg=!0,r.add(n),e=FE.bind(null,e,t,n),t.then(e,e))}function FE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(oe&n)===n&&(Ge===4||Ge===3&&(oe&62914560)===oe&&300>en()-Pd?!(fe&2)&&jo(e,0):ng|=n,Co===oe&&(Co=0)),ai(e)}function p5(e,t){t===0&&(t=ow()),e=ya(e,t),e!==null&&(Vl(e,t),ai(e))}function qE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),p5(e,n)}function GE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(L(314))}i!==null&&i.delete(t),p5(e,n)}function YE(e,t){return x0(e,t)}var ed=null,Oa=null,ap=!1,td=!1,bh=!1,ar=0;function ai(e){e!==Oa&&e.next===null&&(Oa===null?ed=Oa=e:Oa=Oa.next=e),td=!0,ap||(ap=!0,XE())}function Yl(e,t){if(!bh&&td){bh=!0;do for(var n=!1,i=ed;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var a=0;else{var o=i.suspendedLanes,s=i.pingedLanes;a=(1<<31-nn(42|e)+1)-1,a&=r&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,B1(i,a))}else a=oe,a=$d(i,i===Te?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(a&3)||Ul(i,a)||(n=!0,B1(i,a));i=i.next}while(n);bh=!1}}function KE(){g5()}function g5(){td=ap=!1;var e=0;ar!==0&&rA()&&(e=ar);for(var t=en(),n=null,i=ed;i!==null;){var r=i.next,a=y5(i,t);a===0?(i.next=null,n===null?ed=r:n.next=r,r===null&&(Oa=n)):(n=i,(e!==0||a&3)&&(td=!0)),i=r}rt!==0&&rt!==5||Yl(e),ar!==0&&(ar=0)}function y5(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-nn(a),s=1<<o,l=r[o];l===-1?(!(s&n)||s&i)&&(r[o]=v4(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(t=Te,n=oe,n=$d(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Kf(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ul(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Kf(i),v0(n)){case 2:case 8:n=rw;break;case 32:n=Nu;break;case 268435456:n=aw;break;default:n=Nu}return i=x5.bind(null,e),n=x0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Kf(i),e.callbackPriority=2,e.callbackNode=null,2}function x5(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(qd()&&e.callbackNode!==n)return null;var i=oe;return i=$d(e,e===Te?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(i5(e,i,t),y5(e,en()),e.callbackNode!=null&&e.callbackNode===n?x5.bind(null,e):null)}function B1(e,t){if(qd())return null;i5(e,t,!0)}function XE(){oA(function(){fe&6?x0(iw,KE):g5()})}function rg(){if(ar===0){var e=vo;e===0&&(e=mc,mc<<=1,!(mc&261888)&&(mc=256)),ar=e}return ar}function U1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nu(""+e)}function V1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function QE(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var a=U1((r[Gt]||null).action),o=i.submitter;o&&(t=(t=o[Gt]||null)?U1(t.formAction):o.getAttribute("formAction"),t!==null&&(a=t,o=null));var s=new zd("action","action",null,i,r);e.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ar!==0){var l=o?V1(r,o):new FormData(r);Qm(n,{pending:!0,data:l,method:r.method,action:a},null,l)}}else typeof a=="function"&&(s.preventDefault(),l=o?V1(r,o):new FormData(r),Qm(n,{pending:!0,data:l,method:r.method,action:a},a,l))},currentTarget:r}]})}}for(var vh=0;vh<Nm.length;vh++){var wh=Nm[vh],IE=wh.toLowerCase(),ZE=wh[0].toUpperCase()+wh.slice(1);Vn(IE,"on"+ZE)}Vn($w,"onAnimationEnd");Vn(zw,"onAnimationIteration");Vn(Mw,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(hE,"onTransitionRun");Vn(mE,"onTransitionStart");Vn(pE,"onTransitionCancel");Vn(Ow,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function b5(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;a=s,r.currentTarget=u;try{a(r)}catch(d){Uu(d)}r.currentTarget=null,a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;a=s,r.currentTarget=u;try{a(r)}catch(d){Uu(d)}r.currentTarget=null,a=l}}}}function ie(e,t){var n=t[Rm];n===void 0&&(n=t[Rm]=new Set);var i=e+"__bubble";n.has(i)||(v5(t,e,2,!1),n.add(i))}function Sh(e,t,n){var i=0;t&&(i|=4),v5(n,e,i,t)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function ag(e){if(!e[Tc]){e[Tc]=!0,dw.forEach(function(n){n!=="selectionchange"&&(JE.has(n)||Sh(n,!1,e),Sh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tc]||(t[Tc]=!0,Sh("selectionchange",!1,t))}}function v5(e,t,n,i){switch(O5(t)){case 2:var r=EA;break;case 8:r=AA;break;default:r=cg}n=r.bind(null,t,n,e),r=void 0,!Dm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ch(e,t,n,i,r){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===r)return;o=o.return}for(;s!==null;){if(o=La(s),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){i=a=o;continue e}s=s.parentNode}}i=i.return}bw(function(){var u=a,d=C0(n),f=[];e:{var h=Dw.get(e);if(h!==void 0){var m=zd,p=e;switch(e){case"keypress":if(ru(n)===0)break e;case"keydown":case"keyup":m=G4;break;case"focusin":p="focus",m=Jf;break;case"focusout":p="blur",m=Jf;break;case"beforeblur":case"afterblur":m=Jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=O4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=X4;break;case $w:case zw:case Mw:m=L4;break;case Ow:m=I4;break;case"scroll":case"scrollend":m=z4;break;case"wheel":m=J4;break;case"copy":case"cut":case"paste":m=B4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Iy;break;case"toggle":case"beforetoggle":m=eE}var b=(t&4)!==0,S=!b&&(e==="scroll"||e==="scrollend"),g=b?h!==null?h+"Capture":null:h;b=[];for(var y=u,x;y!==null;){var v=y;if(x=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||x===null||g===null||(v=nl(y,g),v!=null&&b.push(dl(y,v,x))),S)break;y=y.return}0<b.length&&(h=new m(h,p,null,n,d),f.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==Om&&(p=n.relatedTarget||n.fromElement)&&(La(p)||p[Ho]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(p=n.relatedTarget||n.toElement,m=u,p=p?La(p):null,p!==null&&(S=Nl(p),b=p.tag,p!==S||b!==5&&b!==27&&b!==6)&&(p=null)):(m=null,p=u),m!==p)){if(b=Xy,v="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=Iy,v="onPointerLeave",g="onPointerEnter",y="pointer"),S=m==null?h:js(m),x=p==null?h:js(p),h=new b(v,y+"leave",m,n,d),h.target=S,h.relatedTarget=x,v=null,La(d)===u&&(b=new b(g,y+"enter",p,n,d),b.target=x,b.relatedTarget=S,v=b),S=v,m&&p)t:{for(b=WE,g=m,y=p,x=0,v=g;v;v=b(v))x++;v=0;for(var A=y;A;A=b(A))v++;for(;0<x-v;)g=b(g),x--;for(;0<v-x;)y=b(y),v--;for(;x--;){if(g===y||y!==null&&g===y.alternate){b=g;break t}g=b(g),y=b(y)}b=null}else b=null;m!==null&&P1(f,h,m,b,!1),p!==null&&S!==null&&P1(f,S,p,b,!0)}}e:{if(h=u?js(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var E=e1;else if(Wy(h))if(jw)E=uE;else{E=lE;var j=sE}else m=h.nodeName,!m||m.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?u&&S0(u.elementType)&&(E=e1):E=cE;if(E&&(E=E(e,u))){Tw(f,E,n,d);break e}j&&j(e,h,u),e==="focusout"&&u&&h.type==="number"&&u.memoizedProps.value!=null&&Mm(h,"number",h.value)}switch(j=u?js(u):window,e){case"focusin":(Wy(j)||j.contentEditable==="true")&&(Ua=j,_m=u,Ls=null);break;case"focusout":Ls=_m=Ua=null;break;case"mousedown":Lm=!0;break;case"contextmenu":case"mouseup":case"dragend":Lm=!1,a1(f,n,d);break;case"selectionchange":if(fE)break;case"keydown":case"keyup":a1(f,n,d)}var k;if(E0)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ba?Sw(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ww&&n.locale!=="ko"&&(Ba||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ba&&(k=vw()):(nr=d,T0="value"in nr?nr.value:nr.textContent,Ba=!0)),j=nd(u,O),0<j.length&&(O=new Qy(O,e,null,n,d),f.push({event:O,listeners:j}),k?O.data=k:(k=Cw(n),k!==null&&(O.data=k)))),(k=nE?iE(e,n):rE(e,n))&&(O=nd(u,"onBeforeInput"),0<O.length&&(j=new Qy("onBeforeInput","beforeinput",null,n,d),f.push({event:j,listeners:O}),j.data=k)),QE(f,e,u,n,d)}b5(f,t)})}function dl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nd(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=nl(e,n),r!=null&&i.unshift(dl(e,r,a)),r=nl(e,t),r!=null&&i.push(dl(e,r,a))),e.tag===3)return i;e=e.return}return[]}function WE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function P1(e,t,n,i,r){for(var a=t._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(s=s.tag,l!==null&&l===i)break;s!==5&&s!==26&&s!==27||u===null||(l=u,r?(u=nl(n,a),u!=null&&o.unshift(dl(n,u,l))):r||(u=nl(n,a),u!=null&&o.push(dl(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var eA=/\r\n?/g,tA=/\u0000|\uFFFD/g;function H1(e){return(typeof e=="string"?e:""+e).replace(eA,`
`).replace(tA,"")}function w5(e,t){return t=H1(t),H1(e)===t}function Se(e,t,n,i,r,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||bo(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&bo(e,""+i);break;case"className":yc(e,"class",i);break;case"tabIndex":yc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":yc(e,n,i);break;case"style":xw(e,i,a);break;case"data":if(t!=="object"){yc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=nu(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",r.name,r,null),Se(e,t,"formEncType",r.formEncType,r,null),Se(e,t,"formMethod",r.formMethod,r,null),Se(e,t,"formTarget",r.formTarget,r,null)):(Se(e,t,"encType",r.encType,r,null),Se(e,t,"method",r.method,r,null),Se(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=nu(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=wi);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(L(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(L(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=nu(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ie("beforetoggle",e),ie("toggle",e),tu(e,"popover",i);break;case"xlinkActuate":si(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":si(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":si(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":si(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":si(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":si(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":si(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":si(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":si(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":tu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=R4.get(n)||n,tu(e,n,i))}}function op(e,t,n,i,r,a){switch(n){case"style":xw(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(L(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(L(60));e.innerHTML=n}}break;case"children":typeof i=="string"?bo(e,i):(typeof i=="number"||typeof i=="bigint")&&bo(e,""+i);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"onClick":i!=null&&(e.onclick=wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fw.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),a=e[Gt]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,r),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):tu(e,n,i)}}}function St(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var i=!1,r=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(L(137,t));default:Se(e,t,a,o,n,null)}}r&&Se(e,t,"srcSet",n.srcSet,n,null),i&&Se(e,t,"src",n.src,n,null);return;case"input":ie("invalid",e);var s=a=o=r=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":r=d;break;case"type":o=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":a=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(L(137,t));break;default:Se(e,t,i,d,n,null)}}pw(e,a,s,l,u,o,r,!1);return;case"select":ie("invalid",e),i=o=a=null;for(r in n)if(n.hasOwnProperty(r)&&(s=n[r],s!=null))switch(r){case"value":a=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:Se(e,t,r,s,n,null)}t=a,n=o,e.multiple=!!i,t!=null?Wa(e,!!i,t,!1):n!=null&&Wa(e,!!i,n,!0);return;case"textarea":ie("invalid",e),a=r=i=null;for(o in n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":r=s;break;case"children":a=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(L(91));break;default:Se(e,t,o,s,n,null)}yw(e,i,r,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Se(e,t,l,i,n,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(i=0;i<ul.length;i++)ie(ul[i],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(L(137,t));default:Se(e,t,u,i,n,null)}return;default:if(S0(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&op(e,t,d,i,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(i=n[s],i!=null&&Se(e,t,s,i,n,null))}function nA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,o=null,s=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(m)||Se(e,t,m,null,i,f)}}for(var h in i){var m=i[h];if(f=n[h],i.hasOwnProperty(h)&&(m!=null||f!=null))switch(h){case"type":a=m;break;case"name":r=m;break;case"checked":u=m;break;case"defaultChecked":d=m;break;case"value":o=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(L(137,t));break;default:m!==f&&Se(e,t,h,m,i,f)}}zm(e,o,s,l,u,d,a,r);return;case"select":m=o=s=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":m=l;default:i.hasOwnProperty(a)||Se(e,t,a,null,i,l)}for(r in i)if(a=i[r],l=n[r],i.hasOwnProperty(r)&&(a!=null||l!=null))switch(r){case"value":h=a;break;case"defaultValue":s=a;break;case"multiple":o=a;default:a!==l&&Se(e,t,r,a,i,l)}t=s,n=o,i=m,h!=null?Wa(e,!!n,h,!1):!!i!=!!n&&(t!=null?Wa(e,!!n,t,!0):Wa(e,!!n,n?[]:"",!1));return;case"textarea":m=h=null;for(s in n)if(r=n[s],n.hasOwnProperty(s)&&r!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Se(e,t,s,null,i,r)}for(o in i)if(r=i[o],a=n[o],i.hasOwnProperty(o)&&(r!=null||a!=null))switch(o){case"value":h=r;break;case"defaultValue":m=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(L(91));break;default:r!==a&&Se(e,t,o,r,i,a)}gw(e,h,m);return;case"option":for(var p in n)if(h=n[p],n.hasOwnProperty(p)&&h!=null&&!i.hasOwnProperty(p))switch(p){case"selected":e.selected=!1;break;default:Se(e,t,p,null,i,h)}for(l in i)if(h=i[l],m=n[l],i.hasOwnProperty(l)&&h!==m&&(h!=null||m!=null))switch(l){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:Se(e,t,l,h,i,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)h=n[b],n.hasOwnProperty(b)&&h!=null&&!i.hasOwnProperty(b)&&Se(e,t,b,null,i,h);for(u in i)if(h=i[u],m=n[u],i.hasOwnProperty(u)&&h!==m&&(h!=null||m!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(L(137,t));break;default:Se(e,t,u,h,i,m)}return;default:if(S0(t)){for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!==void 0&&!i.hasOwnProperty(S)&&op(e,t,S,void 0,i,h);for(d in i)h=i[d],m=n[d],!i.hasOwnProperty(d)||h===m||h===void 0&&m===void 0||op(e,t,d,h,i,m);return}}for(var g in n)h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g)&&Se(e,t,g,null,i,h);for(f in i)h=i[f],m=n[f],!i.hasOwnProperty(f)||h===m||h==null&&m==null||Se(e,t,f,h,i,m)}function F1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],a=r.transferSize,o=r.initiatorType,s=r.duration;if(a&&s&&F1(o)){for(o=0,s=r.responseEnd,i+=1;i<n.length;i++){var l=n[i],u=l.startTime;if(u>s)break;var d=l.transferSize,f=l.initiatorType;d&&F1(f)&&(l=l.responseEnd,o+=d*(l<s?1:(s-u)/(l-u)))}if(--i,t+=8*(a+o)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sp=null,lp=null;function id(e){return e.nodeType===9?e:e.ownerDocument}function q1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S5(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Th=null;function rA(){var e=window.event;return e&&e.type==="popstate"?e===Th?!1:(Th=e,!0):(Th=null,!1)}var C5=typeof setTimeout=="function"?setTimeout:void 0,aA=typeof clearTimeout=="function"?clearTimeout:void 0,G1=typeof Promise=="function"?Promise:void 0,oA=typeof queueMicrotask=="function"?queueMicrotask:typeof G1<"u"?function(e){return G1.resolve(null).then(e).catch(sA)}:C5;function sA(e){setTimeout(function(){throw e})}function Er(e){return e==="head"}function Y1(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Ao(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ys(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ys(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Pl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=o}}else n==="body"&&Ys(e.ownerDocument.body);n=r}while(n);Ao(t)}function K1(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function up(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":up(n),w0(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function lA(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Tn(e.nextSibling),e===null)break}return null}function cA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Tn(e.nextSibling),e===null))return null;return e}function T5(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tn(e.nextSibling),e===null))return null;return e}function dp(e){return e.data==="$?"||e.data==="$~"}function fp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hp=null;function X1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Tn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Q1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function j5(e,t,n){switch(t=id(n),e){case"html":if(e=t.documentElement,!e)throw Error(L(452));return e;case"head":if(e=t.head,!e)throw Error(L(453));return e;case"body":if(e=t.body,!e)throw Error(L(454));return e;default:throw Error(L(451))}}function Ys(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);w0(e)}var En=new Map,I1=new Set;function rd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Li=he.d;he.d={f:dA,r:fA,D:hA,C:mA,L:pA,m:gA,X:xA,S:yA,M:bA};function dA(){var e=Li.f(),t=Hd();return e||t}function fA(e){var t=Fo(e);t!==null&&t.tag===5&&t.type==="form"?xS(t):Li.r(e)}var Ko=typeof document>"u"?null:document;function E5(e,t,n){var i=Ko;if(i&&typeof t=="string"&&t){var r=xn(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),I1.has(r)||(I1.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),St(t,"link",e),ct(t),i.head.appendChild(t)))}}function hA(e){Li.D(e),E5("dns-prefetch",e,null)}function mA(e,t){Li.C(e,t),E5("preconnect",e,t)}function pA(e,t,n){Li.L(e,t,n);var i=Ko;if(i&&e&&t){var r='link[rel="preload"][as="'+xn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+xn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+xn(n.imageSizes)+'"]')):r+='[href="'+xn(e)+'"]';var a=r;switch(t){case"style":a=Eo(e);break;case"script":a=Xo(e)}En.has(a)||(e=ze({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),En.set(a,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Kl(a))||t==="script"&&i.querySelector(Xl(a))||(t=i.createElement("link"),St(t,"link",e),ct(t),i.head.appendChild(t)))}}function gA(e,t){Li.m(e,t);var n=Ko;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+xn(i)+'"][href="'+xn(e)+'"]',a=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Xo(e)}if(!En.has(a)&&(e=ze({rel:"modulepreload",href:e},t),En.set(a,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xl(a)))return}i=n.createElement("link"),St(i,"link",e),ct(i),n.head.appendChild(i)}}}function yA(e,t,n){Li.S(e,t,n);var i=Ko;if(i&&e){var r=Ja(i).hoistableStyles,a=Eo(e);t=t||"default";var o=r.get(a);if(!o){var s={loading:0,preload:null};if(o=i.querySelector(Kl(a)))s.loading=5;else{e=ze({rel:"stylesheet",href:e,"data-precedence":t},n),(n=En.get(a))&&og(e,n);var l=o=i.createElement("link");ct(l),St(l,"link",e),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,fu(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:s},r.set(a,o)}}}function xA(e,t){Li.X(e,t);var n=Ko;if(n&&e){var i=Ja(n).hoistableScripts,r=Xo(e),a=i.get(r);a||(a=n.querySelector(Xl(r)),a||(e=ze({src:e,async:!0},t),(t=En.get(r))&&sg(e,t),a=n.createElement("script"),ct(a),St(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}function bA(e,t){Li.M(e,t);var n=Ko;if(n&&e){var i=Ja(n).hoistableScripts,r=Xo(e),a=i.get(r);a||(a=n.querySelector(Xl(r)),a||(e=ze({src:e,async:!0,type:"module"},t),(t=En.get(r))&&sg(e,t),a=n.createElement("script"),ct(a),St(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}function Z1(e,t,n,i){var r=(r=or.current)?rd(r):null;if(!r)throw Error(L(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Eo(n.href),n=Ja(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Eo(n.href);var a=Ja(r).hoistableStyles,o=a.get(e);if(o||(r=r.ownerDocument||r,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=r.querySelector(Kl(e)))&&!a._p&&(o.instance=a,o.state.loading=5),En.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},En.set(e,n),a||vA(r,e,n,o.state))),t&&i===null)throw Error(L(528,""));return o}if(t&&i!==null)throw Error(L(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xo(n),n=Ja(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(L(444,e))}}function Eo(e){return'href="'+xn(e)+'"'}function Kl(e){return'link[rel="stylesheet"]['+e+"]"}function A5(e){return ze({},e,{"data-precedence":e.precedence,precedence:null})}function vA(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),St(t,"link",n),ct(t),e.head.appendChild(t))}function Xo(e){return'[src="'+xn(e)+'"]'}function Xl(e){return"script[async]"+e}function J1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+xn(n.href)+'"]');if(i)return t.instance=i,ct(i),i;var r=ze({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ct(i),St(i,"style",r),fu(i,n.precedence,e),t.instance=i;case"stylesheet":r=Eo(n.href);var a=e.querySelector(Kl(r));if(a)return t.state.loading|=4,t.instance=a,ct(a),a;i=A5(n),(r=En.get(r))&&og(i,r),a=(e.ownerDocument||e).createElement("link"),ct(a);var o=a;return o._p=new Promise(function(s,l){o.onload=s,o.onerror=l}),St(a,"link",i),t.state.loading|=4,fu(a,n.precedence,e),t.instance=a;case"script":return a=Xo(n.src),(r=e.querySelector(Xl(a)))?(t.instance=r,ct(r),r):(i=n,(r=En.get(a))&&(i=ze({},n),sg(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),ct(r),St(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(L(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,fu(i,n.precedence,e));return t.instance}function fu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,a=r,o=0;o<i.length;o++){var s=i[o];if(s.dataset.precedence===t)a=s;else if(a!==r)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function og(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hu=null;function W1(e,t,n){if(hu===null){var i=new Map,r=hu=new Map;r.set(n,i)}else r=hu,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var a=n[r];if(!(a[Pl]||a[bt]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var o=a.getAttribute(t)||"";o=e+o;var s=i.get(o);s?s.push(a):i.set(o,[a])}}return i}function ex(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function wA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function k5(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function SA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var r=Eo(i.href),a=t.querySelector(Kl(r));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ad.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,ct(a);return}a=t.ownerDocument||t,i=A5(i),(r=En.get(r))&&og(i,r),a=a.createElement("link"),ct(a);var o=a;o._p=new Promise(function(s,l){o.onload=s,o.onerror=l}),St(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ad.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var jh=0;function CA(e,t){return e.stylesheets&&e.count===0&&mu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&jh===0&&(jh=62500*iA());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>jh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function ad(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var od=null;function mu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,od=new Map,t.forEach(TA,e),od=null,ad.call(e))}function TA(e,t){if(!(t.state.loading&4)){var n=od.get(e);if(n)var i=n.get(null);else{n=new Map,od.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var o=r[a];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),i=o)}i&&n.set(null,i)}r=t.instance,o=r.getAttribute("data-precedence"),a=n.get(o)||i,a===i&&n.set(null,r),n.set(o,r),this.count++,i=ad.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),a?a.parentNode.insertBefore(r,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var fl={$$typeof:vi,Provider:null,Consumer:null,_currentValue:Qr,_currentValue2:Qr,_threadCount:0};function jA(e,t,n,i,r,a,o,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xf(0),this.hiddenUpdates=Xf(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function R5(e,t,n,i,r,a,o,s,l,u,d,f){return e=new jA(e,t,n,o,l,u,d,f,s),t=1,a===!0&&(t|=24),a=Zt(3,null,null,t),e.current=a,a.stateNode=e,t=O0(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},L0(a),e}function $5(e){return e?(e=Ha,e):Ha}function z5(e,t,n,i,r,a){r=$5(r),i.context===null?i.context=r:i.pendingContext=r,i=lr(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=cr(e,i,t),n!==null&&(Ht(n,e,t),Bs(n,e,t))}function tx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lg(e,t){tx(e,t),(e=e.alternate)&&tx(e,t)}function M5(e){if(e.tag===13||e.tag===31){var t=ya(e,67108864);t!==null&&Ht(t,e,67108864),lg(e,67108864)}}function nx(e){if(e.tag===13||e.tag===31){var t=rn();t=b0(t);var n=ya(e,t);n!==null&&Ht(n,e,t),lg(e,t)}}var sd=!0;function EA(e,t,n,i){var r=X.T;X.T=null;var a=he.p;try{he.p=2,cg(e,t,n,i)}finally{he.p=a,X.T=r}}function AA(e,t,n,i){var r=X.T;X.T=null;var a=he.p;try{he.p=8,cg(e,t,n,i)}finally{he.p=a,X.T=r}}function cg(e,t,n,i){if(sd){var r=mp(i);if(r===null)Ch(e,t,i,ld,n),ix(e,i);else if(RA(r,e,t,n,i))i.stopPropagation();else if(ix(e,i),t&4&&-1<kA.indexOf(e)){for(;r!==null;){var a=Fo(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Or(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-nn(o);s.entanglements[1]|=l,o&=~l}ai(a),!(fe&6)&&(Zu=en()+500,Yl(0))}}break;case 31:case 13:s=ya(a,2),s!==null&&Ht(s,a,2),Hd(),lg(a,2)}if(a=mp(i),a===null&&Ch(e,t,i,ld,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Ch(e,t,i,null,n)}}function mp(e){return e=C0(e),ug(e)}var ld=null;function ug(e){if(ld=null,e=La(e),e!==null){var t=Nl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=J2(t),e!==null)return e;e=null}else if(n===31){if(e=W2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ld=e,null}function O5(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(h4()){case iw:return 2;case rw:return 8;case Nu:case m4:return 32;case aw:return 268435456;default:return 32}default:return 32}}var pp=!1,fr=null,hr=null,mr=null,hl=new Map,ml=new Map,Xi=[],kA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ix(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":hl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(t.pointerId)}}function ms(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=Fo(t),t!==null&&M5(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function RA(e,t,n,i,r){switch(t){case"focusin":return fr=ms(fr,e,t,n,i,r),!0;case"dragenter":return hr=ms(hr,e,t,n,i,r),!0;case"mouseover":return mr=ms(mr,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return hl.set(a,ms(hl.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,ml.set(a,ms(ml.get(a)||null,e,t,n,i,r)),!0}return!1}function D5(e){var t=La(e.target);if(t!==null){var n=Nl(t);if(n!==null){if(t=n.tag,t===13){if(t=J2(n),t!==null){e.blockedOn=t,Py(e.priority,function(){nx(n)});return}}else if(t===31){if(t=W2(n),t!==null){e.blockedOn=t,Py(e.priority,function(){nx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Om=i,n.target.dispatchEvent(i),Om=null}else return t=Fo(n),t!==null&&M5(t),e.blockedOn=n,!1;t.shift()}return!0}function rx(e,t,n){pu(e)&&n.delete(t)}function $A(){pp=!1,fr!==null&&pu(fr)&&(fr=null),hr!==null&&pu(hr)&&(hr=null),mr!==null&&pu(mr)&&(mr=null),hl.forEach(rx),ml.forEach(rx)}function jc(e,t){e.blockedOn===t&&(e.blockedOn=null,pp||(pp=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,$A)))}var Ec=null;function ax(e){Ec!==e&&(Ec=e,at.unstable_scheduleCallback(at.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(ug(i||n)===null)continue;break}var a=Fo(n);a!==null&&(e.splice(t,3),t-=3,Qm(a,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Ao(e){function t(l){return jc(l,e)}fr!==null&&jc(fr,e),hr!==null&&jc(hr,e),mr!==null&&jc(mr,e),hl.forEach(t),ml.forEach(t);for(var n=0;n<Xi.length;n++){var i=Xi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)D5(n),n.blockedOn===null&&Xi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],a=n[i+1],o=r[Gt]||null;if(typeof a=="function")o||ax(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(r=a,o=a[Gt]||null)s=o.formAction;else if(ug(r)!==null)continue}else s=o.action;typeof s=="function"?n[i+1]=s:(n.splice(i,3),i-=3),ax(n)}}}function _5(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(o){return r=o})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function dg(e){this._internalRoot=e}Gd.prototype.render=dg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));var n=t.current,i=rn();z5(n,i,e,t,null,null)};Gd.prototype.unmount=dg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;z5(e.current,2,null,e,null,null),Hd(),t[Ho]=null}};function Gd(e){this._internalRoot=e}Gd.prototype.unstable_scheduleHydration=function(e){if(e){var t=uw();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xi.length&&t!==0&&t<Xi[n].priority;n++);Xi.splice(n,0,e),n===0&&D5(e)}};var ox=I2.version;if(ox!=="19.2.0")throw Error(L(527,ox,"19.2.0"));he.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=o4(t),e=e!==null?ew(e):null,e=e===null?null:e.stateNode,e};var zA={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Bl=Ac.inject(zA),tn=Ac}catch{}}kd.createRoot=function(e,t){if(!Z2(e))throw Error(L(299));var n=!1,i="",r=ES,a=AS,o=kS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=R5(e,1,!1,null,null,n,i,null,r,a,o,_5),e[Ho]=t.current,ag(e),new dg(t)};kd.hydrateRoot=function(e,t,n){if(!Z2(e))throw Error(L(299));var i=!1,r="",a=ES,o=AS,s=kS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=R5(e,1,!0,t,n??null,i,r,l,a,o,s,_5),t.context=$5(null),n=t.current,i=rn(),i=b0(i),r=lr(i),r.callback=null,cr(n,r,i),n=i,t.current.lanes=n,Vl(t,n),ai(t),e[Ho]=t.current,ag(e),new Gd(t)};kd.version="19.2.0";function L5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L5)}catch(e){console.error(e)}}L5(),F2.exports=kd;var MA=F2.exports,ut=function(){return ut=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ut.apply(this,arguments)};function ko(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,a;i<r;i++)(a||!(i in t))&&(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}var ke="-ms-",Ks="-moz-",ge="-webkit-",N5="comm",Yd="rule",fg="decl",OA="@import",B5="@keyframes",DA="@layer",U5=Math.abs,hg=String.fromCharCode,gp=Object.assign;function _A(e,t){return lt(e,0)^45?(((t<<2^lt(e,0))<<2^lt(e,1))<<2^lt(e,2))<<2^lt(e,3):0}function V5(e){return e.trim()}function pi(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function gu(e,t,n){return e.indexOf(t,n)}function lt(e,t){return e.charCodeAt(t)|0}function Ro(e,t,n){return e.slice(t,n)}function Xn(e){return e.length}function P5(e){return e.length}function ks(e,t){return t.push(e),e}function LA(e,t){return e.map(t).join("")}function sx(e,t){return e.filter(function(n){return!pi(n,t)})}var Kd=1,$o=1,H5=0,An=0,tt=0,Qo="";function Xd(e,t,n,i,r,a,o,s){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:Kd,column:$o,length:o,return:"",siblings:s}}function Vi(e,t){return gp(Xd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ca(e){for(;e.root;)e=Vi(e.root,{children:[e]});ks(e,e.siblings)}function NA(){return tt}function BA(){return tt=An>0?lt(Qo,--An):0,$o--,tt===10&&($o=1,Kd--),tt}function Un(){return tt=An<H5?lt(Qo,An++):0,$o++,tt===10&&($o=1,Kd++),tt}function ea(){return lt(Qo,An)}function yu(){return An}function Qd(e,t){return Ro(Qo,e,t)}function yp(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function UA(e){return Kd=$o=1,H5=Xn(Qo=e),An=0,[]}function VA(e){return Qo="",e}function Eh(e){return V5(Qd(An-1,xp(e===91?e+2:e===40?e+1:e)))}function PA(e){for(;(tt=ea())&&tt<33;)Un();return yp(e)>2||yp(tt)>3?"":" "}function HA(e,t){for(;--t&&Un()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return Qd(e,yu()+(t<6&&ea()==32&&Un()==32))}function xp(e){for(;Un();)switch(tt){case e:return An;case 34:case 39:e!==34&&e!==39&&xp(tt);break;case 40:e===41&&xp(e);break;case 92:Un();break}return An}function FA(e,t){for(;Un()&&e+tt!==57;)if(e+tt===84&&ea()===47)break;return"/*"+Qd(t,An-1)+"*"+hg(e===47?e:Un())}function qA(e){for(;!yp(ea());)Un();return Qd(e,An)}function GA(e){return VA(xu("",null,null,null,[""],e=UA(e),0,[0],e))}function xu(e,t,n,i,r,a,o,s,l){for(var u=0,d=0,f=o,h=0,m=0,p=0,b=1,S=1,g=1,y=0,x="",v=r,A=a,E=i,j=x;S;)switch(p=y,y=Un()){case 40:if(p!=108&&lt(j,f-1)==58){gu(j+=ee(Eh(y),"&","&\f"),"&\f",U5(u?s[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:j+=Eh(y);break;case 9:case 10:case 13:case 32:j+=PA(p);break;case 92:j+=HA(yu()-1,7);continue;case 47:switch(ea()){case 42:case 47:ks(YA(FA(Un(),yu()),t,n,l),l);break;default:j+="/"}break;case 123*b:s[u++]=Xn(j)*g;case 125*b:case 59:case 0:switch(y){case 0:case 125:S=0;case 59+d:g==-1&&(j=ee(j,/\f/g,"")),m>0&&Xn(j)-f&&ks(m>32?cx(j+";",i,n,f-1,l):cx(ee(j," ","")+";",i,n,f-2,l),l);break;case 59:j+=";";default:if(ks(E=lx(j,t,n,u,d,r,s,x,v=[],A=[],f,a),a),y===123)if(d===0)xu(j,t,E,E,v,a,f,s,A);else switch(h===99&&lt(j,3)===110?100:h){case 100:case 108:case 109:case 115:xu(e,E,E,i&&ks(lx(e,E,E,0,0,r,s,x,r,v=[],f,A),A),r,A,f,s,i?v:A);break;default:xu(j,E,E,E,[""],A,0,s,A)}}u=d=m=0,b=g=1,x=j="",f=o;break;case 58:f=1+Xn(j),m=p;default:if(b<1){if(y==123)--b;else if(y==125&&b++==0&&BA()==125)continue}switch(j+=hg(y),y*b){case 38:g=d>0?1:(j+="\f",-1);break;case 44:s[u++]=(Xn(j)-1)*g,g=1;break;case 64:ea()===45&&(j+=Eh(Un())),h=ea(),d=f=Xn(x=j+=qA(yu())),y++;break;case 45:p===45&&Xn(j)==2&&(b=0)}}return a}function lx(e,t,n,i,r,a,o,s,l,u,d,f){for(var h=r-1,m=r===0?a:[""],p=P5(m),b=0,S=0,g=0;b<i;++b)for(var y=0,x=Ro(e,h+1,h=U5(S=o[b])),v=e;y<p;++y)(v=V5(S>0?m[y]+" "+x:ee(x,/&\f/g,m[y])))&&(l[g++]=v);return Xd(e,t,n,r===0?Yd:s,l,u,d,f)}function YA(e,t,n,i){return Xd(e,t,n,N5,hg(NA()),Ro(e,2,-2),0,i)}function cx(e,t,n,i,r){return Xd(e,t,n,fg,Ro(e,0,i),Ro(e,i+1,-1),i,r)}function F5(e,t,n){switch(_A(e,t)){case 5103:return ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+e+e;case 4789:return Ks+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+e+Ks+e+ke+e+e;case 5936:switch(lt(e,t+11)){case 114:return ge+e+ke+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ge+e+ke+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ge+e+ke+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ge+e+ke+e+e;case 6165:return ge+e+ke+"flex-"+e+e;case 5187:return ge+e+ee(e,/(\w+).+(:[^]+)/,ge+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return ge+e+ke+"flex-item-"+ee(e,/flex-|-self/g,"")+(pi(e,/flex-|baseline/)?"":ke+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return ge+e+ke+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return ge+e+ke+ee(e,"shrink","negative")+e;case 5292:return ge+e+ke+ee(e,"basis","preferred-size")+e;case 6060:return ge+"box-"+ee(e,"-grow","")+ge+e+ke+ee(e,"grow","positive")+e;case 4554:return ge+ee(e,/([^-])(transform)/g,"$1"+ge+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+e+e;case 4200:if(!pi(e,/flex-|baseline/))return ke+"grid-column-align"+Ro(e,t)+e;break;case 2592:case 3360:return ke+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,r){return t=r,pi(i.props,/grid-\w+-end/)})?~gu(e+(n=n[t].value),"span",0)?e:ke+ee(e,"-start","")+e+ke+"grid-row-span:"+(~gu(n,"span",0)?pi(n,/\d+/):+pi(n,/\d+/)-+pi(e,/\d+/))+";":ke+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return pi(i.props,/grid-\w+-start/)})?e:ke+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(e)-1-t>6)switch(lt(e,t+1)){case 109:if(lt(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+Ks+(lt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gu(e,"stretch",0)?F5(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,a,o,s,l,u){return ke+r+":"+a+u+(o?ke+r+"-span:"+(s?l:+l-+a)+u:"")+e});case 4949:if(lt(e,t+6)===121)return ee(e,":",":"+ge)+e;break;case 6444:switch(lt(e,lt(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(lt(e,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+ke+"$2box$3")+e;case 100:return ee(e,":",":"+ke)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function cd(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function KA(e,t,n,i){switch(e.type){case DA:if(e.children.length)break;case OA:case fg:return e.return=e.return||e.value;case N5:return"";case B5:return e.return=e.value+"{"+cd(e.children,i)+"}";case Yd:if(!Xn(e.value=e.props.join(",")))return""}return Xn(n=cd(e.children,i))?e.return=e.value+"{"+n+"}":""}function XA(e){var t=P5(e);return function(n,i,r,a){for(var o="",s=0;s<t;s++)o+=e[s](n,i,r,a)||"";return o}}function QA(e){return function(t){t.root||(t=t.return)&&e(t)}}function IA(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case fg:e.return=F5(e.value,e.length,n);return;case B5:return cd([Vi(e,{value:ee(e.value,"@","@"+ge)})],i);case Yd:if(e.length)return LA(n=e.props,function(r){switch(pi(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ca(Vi(e,{props:[ee(r,/:(read-\w+)/,":"+Ks+"$1")]})),Ca(Vi(e,{props:[r]})),gp(e,{props:sx(n,i)});break;case"::placeholder":Ca(Vi(e,{props:[ee(r,/:(plac\w+)/,":"+ge+"input-$1")]})),Ca(Vi(e,{props:[ee(r,/:(plac\w+)/,":"+Ks+"$1")]})),Ca(Vi(e,{props:[ee(r,/:(plac\w+)/,ke+"input-$1")]})),Ca(Vi(e,{props:[r]})),gp(e,{props:sx(n,i)});break}return""})}}var ZA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xt={},zo=typeof process<"u"&&Xt!==void 0&&(Xt.REACT_APP_SC_ATTR||Xt.SC_ATTR)||"data-styled",q5="active",G5="data-styled-version",Id="6.1.19",mg=`/*!sc*/
`,ud=typeof window<"u"&&typeof document<"u",JA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==""?Xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.SC_DISABLE_SPEEDY!==void 0&&Xt.SC_DISABLE_SPEEDY!==""&&Xt.SC_DISABLE_SPEEDY!=="false"&&Xt.SC_DISABLE_SPEEDY),WA={},Zd=Object.freeze([]),Mo=Object.freeze({});function Y5(e,t,n){return n===void 0&&(n=Mo),e.theme!==n.theme&&e.theme||t||n.theme}var K5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ek=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tk=/(^-|-$)/g;function ux(e){return e.replace(ek,"-").replace(tk,"")}var nk=/(a)(d)/gi,kc=52,dx=function(e){return String.fromCharCode(e+(e>25?39:97))};function bp(e){var t,n="";for(t=Math.abs(e);t>kc;t=t/kc|0)n=dx(t%kc)+n;return(dx(t%kc)+n).replace(nk,"$1-$2")}var Ah,X5=5381,Ya=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Q5=function(e){return Ya(X5,e)};function pg(e){return bp(Q5(e)>>>0)}function ik(e){return e.displayName||e.name||"Component"}function kh(e){return typeof e=="string"&&!0}var I5=typeof Symbol=="function"&&Symbol.for,Z5=I5?Symbol.for("react.memo"):60115,rk=I5?Symbol.for("react.forward_ref"):60112,ak={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ok={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},J5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sk=((Ah={})[rk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ah[Z5]=J5,Ah);function fx(e){return("type"in(t=e)&&t.type.$$typeof)===Z5?J5:"$$typeof"in e?sk[e.$$typeof]:ak;var t}var lk=Object.defineProperty,ck=Object.getOwnPropertyNames,hx=Object.getOwnPropertySymbols,uk=Object.getOwnPropertyDescriptor,dk=Object.getPrototypeOf,mx=Object.prototype;function W5(e,t,n){if(typeof t!="string"){if(mx){var i=dk(t);i&&i!==mx&&W5(e,i,n)}var r=ck(t);hx&&(r=r.concat(hx(t)));for(var a=fx(e),o=fx(t),s=0;s<r.length;++s){var l=r[s];if(!(l in ok||n&&n[l]||o&&l in o||a&&l in a)){var u=uk(t,l);try{lk(e,l,u)}catch{}}}}return e}function ua(e){return typeof e=="function"}function gg(e){return typeof e=="object"&&"styledComponentId"in e}function Br(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function dd(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function pl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function vp(e,t,n){if(n===void 0&&(n=!1),!n&&!pl(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=vp(e[i],t[i]);else if(pl(t))for(var i in t)e[i]=vp(e[i],t[i]);return e}function yg(e,t){Object.defineProperty(e,"toString",{value:t})}function da(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,a=r;t>=a;)if((a<<=1)<0)throw da(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),r=i+n;this.groupSizes[t]=0;for(var a=i;a<r;a++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],r=this.indexOfGroup(t),a=r+i,o=r;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(mg);return n},e}(),bu=new Map,fd=new Map,vu=1,Rc=function(e){if(bu.has(e))return bu.get(e);for(;fd.has(vu);)vu++;var t=vu++;return bu.set(e,t),fd.set(t,e),t},hk=function(e,t){vu=t+1,bu.set(e,t),fd.set(t,e)},mk="style[".concat(zo,"][").concat(G5,'="').concat(Id,'"]'),pk=new RegExp("^".concat(zo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gk=function(e,t,n){for(var i,r=n.split(","),a=0,o=r.length;a<o;a++)(i=r[a])&&e.registerName(t,i)},yk=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(mg),r=[],a=0,o=i.length;a<o;a++){var s=i[a].trim();if(s){var l=s.match(pk);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(hk(d,u),gk(e,d,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(s)}}},px=function(e){for(var t=document.querySelectorAll(mk),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(zo)!==q5&&(yk(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function xk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var eC=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(s){var l=Array.from(s.querySelectorAll("style[".concat(zo,"]")));return l[l.length-1]}(n),a=r!==void 0?r.nextSibling:null;i.setAttribute(zo,q5),i.setAttribute(G5,Id);var o=xk();return o&&i.setAttribute("nonce",o),n.insertBefore(i,a),i},bk=function(){function e(t){this.element=eC(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,a=i.length;r<a;r++){var o=i[r];if(o.ownerNode===n)return o}throw da(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),vk=function(){function e(t){this.element=eC(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),gx=ud,Sk={isServer:!ud,useCSSOMInjection:!JA},hd=function(){function e(t,n,i){t===void 0&&(t=Mo),n===void 0&&(n={});var r=this;this.options=ut(ut({},Sk),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&ud&&gx&&(gx=!1,px(this)),yg(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",u=function(f){var h=function(g){return fd.get(g)}(f);if(h===void 0)return"continue";var m=a.names.get(h),p=o.getGroup(f);if(m===void 0||!m.size||p.length===0)return"continue";var b="".concat(zo,".g").concat(f,'[id="').concat(h,'"]'),S="";m!==void 0&&m.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),l+="".concat(p).concat(b,'{content:"').concat(S,'"}').concat(mg)},d=0;d<s;d++)u(d);return l}(r)})}return e.registerId=function(t){return Rc(t)},e.prototype.rehydrate=function(){!this.server&&ud&&px(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ut(ut({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new wk(r):i?new bk(r):new vk(r)}(this.options),new fk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Rc(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Rc(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Rc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ck=/&/g,Tk=/^\s*\/\/.*$/gm;function tC(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=tC(n.children,t)),n})}function jk(e){var t,n,i,r=Mo,a=r.options,o=a===void 0?Mo:a,s=r.plugins,l=s===void 0?Zd:s,u=function(h,m,p){return p.startsWith(n)&&p.endsWith(n)&&p.replaceAll(n,"").length>0?".".concat(t):h},d=l.slice();d.push(function(h){h.type===Yd&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Ck,n).replace(i,u))}),o.prefix&&d.push(IA),d.push(KA);var f=function(h,m,p,b){m===void 0&&(m=""),p===void 0&&(p=""),b===void 0&&(b="&"),t=b,n=m,i=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(Tk,""),g=GA(p||m?"".concat(p," ").concat(m," { ").concat(S," }"):S);o.namespace&&(g=tC(g,o.namespace));var y=[];return cd(g,XA(d.concat(QA(function(x){return y.push(x)})))),y};return f.hash=l.length?l.reduce(function(h,m){return m.name||da(15),Ya(h,m.name)},X5).toString():"",f}var Ek=new hd,wp=jk(),nC=wn.createContext({shouldForwardProp:void 0,styleSheet:Ek,stylis:wp});nC.Consumer;wn.createContext(void 0);function Sp(){return w.useContext(nC)}var iC=function(){function e(t,n){var i=this;this.inject=function(r,a){a===void 0&&(a=wp);var o=i.name+a.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,a(i.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,yg(this,function(){throw da(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=wp),this.name+t.hash},e}(),Ak=function(e){return e>="A"&&e<="Z"};function yx(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;Ak(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var rC=function(e){return e==null||e===!1||e===""},aC=function(e){var t,n,i=[];for(var r in e){var a=e[r];e.hasOwnProperty(r)&&!rC(a)&&(Array.isArray(a)&&a.isCss||ua(a)?i.push("".concat(yx(r),":"),a,";"):pl(a)?i.push.apply(i,ko(ko(["".concat(r," {")],aC(a),!1),["}"],!1)):i.push("".concat(yx(r),": ").concat((t=r,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ZA||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function pr(e,t,n,i){if(rC(e))return[];if(gg(e))return[".".concat(e.styledComponentId)];if(ua(e)){if(!ua(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var r=e(t);return pr(r,t,n,i)}var a;return e instanceof iC?n?(e.inject(n,i),[e.getName(i)]):[e]:pl(e)?aC(e):Array.isArray(e)?Array.prototype.concat.apply(Zd,e.map(function(o){return pr(o,t,n,i)})):[e.toString()]}function oC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ua(n)&&!gg(n))return!1}return!0}var kk=Q5(Id),Rk=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&oC(t),this.componentId=n,this.baseHash=Ya(kk,n),this.baseStyle=i,hd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Br(r,this.staticRulesId);else{var a=dd(pr(this.rules,t,n,i)),o=bp(Ya(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=i(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}r=Br(r,o),this.staticRulesId=o}else{for(var l=Ya(this.baseHash,i.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=dd(pr(f,t,n,i));l=Ya(l,h+d),u+=h}}if(u){var m=bp(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,i(u,".".concat(m),void 0,this.componentId)),r=Br(r,m)}}return r},e}(),gl=wn.createContext(void 0);gl.Consumer;function $k(e){var t=wn.useContext(gl),n=w.useMemo(function(){return function(i,r){if(!i)throw da(14);if(ua(i)){var a=i(r);return a}if(Array.isArray(i)||typeof i!="object")throw da(8);return r?ut(ut({},r),i):i}(e.theme,t)},[e.theme,t]);return e.children?wn.createElement(gl.Provider,{value:n},e.children):null}var Rh={};function zk(e,t,n){var i=gg(e),r=e,a=!kh(e),o=t.attrs,s=o===void 0?Zd:o,l=t.componentId,u=l===void 0?function(v,A){var E=typeof v!="string"?"sc":ux(v);Rh[E]=(Rh[E]||0)+1;var j="".concat(E,"-").concat(pg(Id+E+Rh[E]));return A?"".concat(A,"-").concat(j):j}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(v){return kh(v)?"styled.".concat(v):"Styled(".concat(ik(v),")")}(e):d,h=t.displayName&&t.componentId?"".concat(ux(t.displayName),"-").concat(t.componentId):t.componentId||u,m=i&&r.attrs?r.attrs.concat(s).filter(Boolean):s,p=t.shouldForwardProp;if(i&&r.shouldForwardProp){var b=r.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;p=function(v,A){return b(v,A)&&S(v,A)}}else p=b}var g=new Rk(n,h,i?r.componentStyle:void 0);function y(v,A){return function(E,j,k){var O=E.attrs,_=E.componentStyle,P=E.defaultProps,T=E.foldedComponentIds,V=E.styledComponentId,N=E.target,q=wn.useContext(gl),$=Sp(),U=E.shouldForwardProp||$.shouldForwardProp,z=Y5(j,q,P)||Mo,B=function(Me,Dt,H){for(var ne,W=ut(ut({},Dt),{className:void 0,theme:H}),ye=0;ye<Me.length;ye+=1){var cn=ua(ne=Me[ye])?ne(W):ne;for(var _t in cn)W[_t]=_t==="className"?Br(W[_t],cn[_t]):_t==="style"?ut(ut({},W[_t]),cn[_t]):cn[_t]}return Dt.className&&(W.className=Br(W.className,Dt.className)),W}(O,j,z),Y=B.as||N,te={};for(var F in B)B[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&B.theme===z||(F==="forwardedAs"?te.as=B.forwardedAs:U&&!U(F,Y)||(te[F]=B[F]));var G=function(Me,Dt){var H=Sp(),ne=Me.generateAndInjectStyles(Dt,H.styleSheet,H.stylis);return ne}(_,B),me=Br(T,V);return G&&(me+=" "+G),B.className&&(me+=" "+B.className),te[kh(Y)&&!K5.has(Y)?"class":"className"]=me,k&&(te.ref=k),w.createElement(Y,te)}(x,v,A)}y.displayName=f;var x=wn.forwardRef(y);return x.attrs=m,x.componentStyle=g,x.displayName=f,x.shouldForwardProp=p,x.foldedComponentIds=i?Br(r.foldedComponentIds,r.styledComponentId):"",x.styledComponentId=h,x.target=i?r.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?function(A){for(var E=[],j=1;j<arguments.length;j++)E[j-1]=arguments[j];for(var k=0,O=E;k<O.length;k++)vp(A,O[k],!0);return A}({},r.defaultProps,v):v}}),yg(x,function(){return".".concat(x.styledComponentId)}),a&&W5(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function xx(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var bx=function(e){return Object.assign(e,{isCss:!0})};function xg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ua(e)||pl(e))return bx(pr(xx(Zd,ko([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?pr(i):bx(pr(xx(i,t)))}function Cp(e,t,n){if(n===void 0&&(n=Mo),!t)throw da(1,t);var i=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,xg.apply(void 0,ko([r],a,!1)))};return i.attrs=function(r){return Cp(e,t,ut(ut({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Cp(e,t,ut(ut({},n),r))},i}var sC=function(e){return Cp(zk,e)},C=sC;K5.forEach(function(e){C[e]=sC(e)});var Mk=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=oC(t),hd.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,r){var a=r(dd(pr(this.rules,n,i,r)),""),o=this.componentId+t;i.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,r){t>2&&hd.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,r)},e}();function Ok(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=xg.apply(void 0,ko([e],t,!1)),r="sc-global-".concat(pg(JSON.stringify(i))),a=new Mk(i,r),o=function(l){var u=Sp(),d=wn.useContext(gl),f=wn.useRef(u.styleSheet.allocateGSInstance(r)).current;return u.styleSheet.server&&s(f,l,u.styleSheet,d,u.stylis),wn.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,l,u.styleSheet,d,u.stylis),function(){return a.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,f,h){if(a.isStatic)a.renderStyles(l,WA,d,h);else{var m=ut(ut({},u),{theme:Y5(u,f,o.defaultProps)});a.renderStyles(l,m,d,h)}}return wn.memo(o)}function Jd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=dd(xg.apply(void 0,ko([e],t,!1))),r=pg(i);return new iC(r,i)}var Wd=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Dk={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},Qi,u0,j2,_k=(j2=class{constructor(){le(this,Qi,Dk);le(this,u0,!1)}setTimeoutProvider(e){Q(this,Qi,e)}setTimeout(e,t){return D(this,Qi).setTimeout(e,t)}clearTimeout(e){D(this,Qi).clearTimeout(e)}setInterval(e,t){return D(this,Qi).setInterval(e,t)}clearInterval(e){D(this,Qi).clearInterval(e)}},Qi=new WeakMap,u0=new WeakMap,j2),Tp=new _k;function Lk(e){setTimeout(e,0)}var ef=typeof window>"u"||"Deno"in globalThis;function _n(){}function Nk(e,t){return typeof e=="function"?e(t):e}function Bk(e){return typeof e=="number"&&e>=0&&e!==1/0}function Uk(e,t){return Math.max(e+(t||0)-Date.now(),0)}function jp(e,t){return typeof e=="function"?e(t):e}function Vk(e,t){return typeof e=="function"?e(t):e}function vx(e,t){const{type:n="all",exact:i,fetchStatus:r,predicate:a,queryKey:o,stale:s}=e;if(o){if(i){if(t.queryHash!==bg(o,t.options))return!1}else if(!xl(t.queryKey,o))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||r&&r!==t.state.fetchStatus||a&&!a(t))}function wx(e,t){const{exact:n,status:i,predicate:r,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(yl(t.options.mutationKey)!==yl(a))return!1}else if(!xl(t.options.mutationKey,a))return!1}return!(i&&t.state.status!==i||r&&!r(t))}function bg(e,t){return((t==null?void 0:t.queryKeyHashFn)||yl)(e)}function yl(e){return JSON.stringify(e,(t,n)=>Ep(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function xl(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>xl(e[n],t[n])):!1}var Pk=Object.prototype.hasOwnProperty;function lC(e,t){if(e===t)return e;const n=Sx(e)&&Sx(t);if(!n&&!(Ep(e)&&Ep(t)))return t;const r=(n?e:Object.keys(e)).length,a=n?t:Object.keys(t),o=a.length,s=n?new Array(o):{};let l=0;for(let u=0;u<o;u++){const d=n?u:a[u],f=e[d],h=t[d];if(f===h){s[d]=f,(n?u<r:Pk.call(e,d))&&l++;continue}if(f===null||h===null||typeof f!="object"||typeof h!="object"){s[d]=h;continue}const m=lC(f,h);s[d]=m,m===f&&l++}return r===o&&l===r?e:s}function Sx(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Ep(e){if(!Cx(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Cx(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Cx(e){return Object.prototype.toString.call(e)==="[object Object]"}function Hk(e){return new Promise(t=>{Tp.setTimeout(t,e)})}function Fk(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?lC(e,t):t}function qk(e,t,n=0){const i=[...e,t];return n&&i.length>n?i.slice(1):i}function Gk(e,t,n=0){const i=[t,...e];return n&&i.length>n?i.slice(0,-1):i}var vg=Symbol();function cC(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===vg?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Fr,Ii,lo,E2,Yk=(E2=class extends Wd{constructor(){super();le(this,Fr);le(this,Ii);le(this,lo);Q(this,lo,t=>{if(!ef&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){D(this,Ii)||this.setEventListener(D(this,lo))}onUnsubscribe(){var t;this.hasListeners()||((t=D(this,Ii))==null||t.call(this),Q(this,Ii,void 0))}setEventListener(t){var n;Q(this,lo,t),(n=D(this,Ii))==null||n.call(this),Q(this,Ii,t(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(t){D(this,Fr)!==t&&(Q(this,Fr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof D(this,Fr)=="boolean"?D(this,Fr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Fr=new WeakMap,Ii=new WeakMap,lo=new WeakMap,E2),uC=new Yk;function Kk(){let e,t;const n=new Promise((r,a)=>{e=r,t=a});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),e(r)},n.reject=r=>{i({status:"rejected",reason:r}),t(r)},n}var Xk=Lk;function Qk(){let e=[],t=0,n=s=>{s()},i=s=>{s()},r=Xk;const a=s=>{t?e.push(s):r(()=>{n(s)})},o=()=>{const s=e;e=[],s.length&&r(()=>{i(()=>{s.forEach(l=>{n(l)})})})};return{batch:s=>{let l;t++;try{l=s()}finally{t--,t||o()}return l},batchCalls:s=>(...l)=>{a(()=>{s(...l)})},schedule:a,setNotifyFunction:s=>{n=s},setBatchNotifyFunction:s=>{i=s},setScheduler:s=>{r=s}}}var Rt=Qk(),co,Zi,uo,A2,Ik=(A2=class extends Wd{constructor(){super();le(this,co,!0);le(this,Zi);le(this,uo);Q(this,uo,t=>{if(!ef&&window.addEventListener){const n=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){D(this,Zi)||this.setEventListener(D(this,uo))}onUnsubscribe(){var t;this.hasListeners()||((t=D(this,Zi))==null||t.call(this),Q(this,Zi,void 0))}setEventListener(t){var n;Q(this,uo,t),(n=D(this,Zi))==null||n.call(this),Q(this,Zi,t(this.setOnline.bind(this)))}setOnline(t){D(this,co)!==t&&(Q(this,co,t),this.listeners.forEach(i=>{i(t)}))}isOnline(){return D(this,co)}},co=new WeakMap,Zi=new WeakMap,uo=new WeakMap,A2),md=new Ik;function Zk(e){return Math.min(1e3*2**e,3e4)}function dC(e){return(e??"online")==="online"?md.isOnline():!0}var Ap=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function fC(e){let t=!1,n=0,i;const r=Kk(),a=()=>r.status!=="pending",o=b=>{var S;if(!a()){const g=new Ap(b);h(g),(S=e.onCancel)==null||S.call(e,g)}},s=()=>{t=!0},l=()=>{t=!1},u=()=>uC.isFocused()&&(e.networkMode==="always"||md.isOnline())&&e.canRun(),d=()=>dC(e.networkMode)&&e.canRun(),f=b=>{a()||(i==null||i(),r.resolve(b))},h=b=>{a()||(i==null||i(),r.reject(b))},m=()=>new Promise(b=>{var S;i=g=>{(a()||u())&&b(g)},(S=e.onPause)==null||S.call(e)}).then(()=>{var b;i=void 0,a()||(b=e.onContinue)==null||b.call(e)}),p=()=>{if(a())return;let b;const S=n===0?e.initialPromise:void 0;try{b=S??e.fn()}catch(g){b=Promise.reject(g)}Promise.resolve(b).then(f).catch(g=>{var E;if(a())return;const y=e.retry??(ef?0:3),x=e.retryDelay??Zk,v=typeof x=="function"?x(n,g):x,A=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,g);if(t||!A){h(g);return}n++,(E=e.onFail)==null||E.call(e,n,g),Hk(v).then(()=>u()?void 0:m()).then(()=>{t?h(g):p()})})};return{promise:r,status:()=>r.status,cancel:o,continue:()=>(i==null||i(),r),cancelRetry:s,continueRetry:l,canStart:d,start:()=>(d()?p():m().then(p),r)}}var qr,k2,hC=(k2=class{constructor(){le(this,qr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Bk(this.gcTime)&&Q(this,qr,Tp.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(ef?1/0:5*60*1e3))}clearGcTimeout(){D(this,qr)&&(Tp.clearTimeout(D(this,qr)),Q(this,qr,void 0))}},qr=new WeakMap,k2),Gr,fo,fn,Yr,ot,Dl,Kr,Ln,mi,R2,Jk=(R2=class extends hC{constructor(t){super();le(this,Ln);le(this,Gr);le(this,fo);le(this,fn);le(this,Yr);le(this,ot);le(this,Dl);le(this,Kr);Q(this,Kr,!1),Q(this,Dl,t.defaultOptions),this.setOptions(t.options),this.observers=[],Q(this,Yr,t.client),Q(this,fn,D(this,Yr).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Q(this,Gr,jx(this.options)),this.state=t.state??D(this,Gr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=D(this,ot))==null?void 0:t.promise}setOptions(t){if(this.options={...D(this,Dl),...t},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=jx(this.options);n.data!==void 0&&(this.setState(Tx(n.data,n.dataUpdatedAt)),Q(this,Gr,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&D(this,fn).remove(this)}setData(t,n){const i=Fk(this.state.data,t,this.options);return Ct(this,Ln,mi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(t,n){Ct(this,Ln,mi).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var i,r;const n=(i=D(this,ot))==null?void 0:i.promise;return(r=D(this,ot))==null||r.cancel(t),n?n.then(_n).catch(_n):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(D(this,Gr))}isActive(){return this.observers.some(t=>Vk(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===vg||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>jp(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!Uk(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(i=>i.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=D(this,ot))==null||n.continue()}onOnline(){var n;const t=this.observers.find(i=>i.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=D(this,ot))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),D(this,fn).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(D(this,ot)&&(D(this,Kr)?D(this,ot).cancel({revert:!0}):D(this,ot).cancelRetry()),this.scheduleGc()),D(this,fn).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ct(this,Ln,mi).call(this,{type:"invalidate"})}async fetch(t,n){var l,u,d,f,h,m,p,b,S,g,y,x;if(this.state.fetchStatus!=="idle"&&((l=D(this,ot))==null?void 0:l.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(D(this,ot))return D(this,ot).continueRetry(),D(this,ot).promise}if(t&&this.setOptions(t),!this.options.queryFn){const v=this.observers.find(A=>A.options.queryFn);v&&this.setOptions(v.options)}const i=new AbortController,r=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(Q(this,Kr,!0),i.signal)})},a=()=>{const v=cC(this.options,n),E=(()=>{const j={client:D(this,Yr),queryKey:this.queryKey,meta:this.meta};return r(j),j})();return Q(this,Kr,!1),this.options.persister?this.options.persister(v,E,this):v(E)},s=(()=>{const v={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:D(this,Yr),state:this.state,fetchFn:a};return r(v),v})();(u=this.options.behavior)==null||u.onFetch(s,this),Q(this,fo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=s.fetchOptions)==null?void 0:d.meta))&&Ct(this,Ln,mi).call(this,{type:"fetch",meta:(f=s.fetchOptions)==null?void 0:f.meta}),Q(this,ot,fC({initialPromise:n==null?void 0:n.initialPromise,fn:s.fetchFn,onCancel:v=>{v instanceof Ap&&v.revert&&this.setState({...D(this,fo),fetchStatus:"idle"}),i.abort()},onFail:(v,A)=>{Ct(this,Ln,mi).call(this,{type:"failed",failureCount:v,error:A})},onPause:()=>{Ct(this,Ln,mi).call(this,{type:"pause"})},onContinue:()=>{Ct(this,Ln,mi).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0}));try{const v=await D(this,ot).start();if(v===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(v),(m=(h=D(this,fn).config).onSuccess)==null||m.call(h,v,this),(b=(p=D(this,fn).config).onSettled)==null||b.call(p,v,this.state.error,this),v}catch(v){if(v instanceof Ap){if(v.silent)return D(this,ot).promise;if(v.revert){if(this.state.data===void 0)throw v;return this.state.data}}throw Ct(this,Ln,mi).call(this,{type:"error",error:v}),(g=(S=D(this,fn).config).onError)==null||g.call(S,v,this),(x=(y=D(this,fn).config).onSettled)==null||x.call(y,this.state.data,v,this),v}finally{this.scheduleGc()}}},Gr=new WeakMap,fo=new WeakMap,fn=new WeakMap,Yr=new WeakMap,ot=new WeakMap,Dl=new WeakMap,Kr=new WeakMap,Ln=new WeakSet,mi=function(t){const n=i=>{switch(t.type){case"failed":return{...i,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Wk(i.data,this.options),fetchMeta:t.meta??null};case"success":const r={...i,...Tx(t.data,t.dataUpdatedAt),dataUpdateCount:i.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return Q(this,fo,t.manual?r:void 0),r;case"error":const a=t.error;return{...i,error:a,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...t.state}}};this.state=n(this.state),Rt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),D(this,fn).notify({query:this,type:"updated",action:t})})},R2);function Wk(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:dC(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Tx(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function jx(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,i=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}function Ex(e){return{onFetch:(t,n)=>{var d,f,h,m,p;const i=t.options,r=(h=(f=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:h.direction,a=((m=t.state.data)==null?void 0:m.pages)||[],o=((p=t.state.data)==null?void 0:p.pageParams)||[];let s={pages:[],pageParams:[]},l=0;const u=async()=>{let b=!1;const S=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(t.signal.aborted?b=!0:t.signal.addEventListener("abort",()=>{b=!0}),t.signal)})},g=cC(t.options,t.fetchOptions),y=async(x,v,A)=>{if(b)return Promise.reject();if(v==null&&x.pages.length)return Promise.resolve(x);const j=(()=>{const P={client:t.client,queryKey:t.queryKey,pageParam:v,direction:A?"backward":"forward",meta:t.options.meta};return S(P),P})(),k=await g(j),{maxPages:O}=t.options,_=A?Gk:qk;return{pages:_(x.pages,k,O),pageParams:_(x.pageParams,v,O)}};if(r&&a.length){const x=r==="backward",v=x?e8:Ax,A={pages:a,pageParams:o},E=v(i,A);s=await y(A,E,x)}else{const x=e??a.length;do{const v=l===0?o[0]??i.initialPageParam:Ax(i,s);if(l>0&&v==null)break;s=await y(s,v),l++}while(l<x)}return s};t.options.persister?t.fetchFn=()=>{var b,S;return(S=(b=t.options).persister)==null?void 0:S.call(b,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Ax(e,{pages:t,pageParams:n}){const i=t.length-1;return t.length>0?e.getNextPageParam(t[i],t,n[i],n):void 0}function e8(e,{pages:t,pageParams:n}){var i;return t.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,t[0],t,n[0],n):void 0}var _l,Gn,At,Xr,Yn,Pi,$2,t8=($2=class extends hC{constructor(t){super();le(this,Yn);le(this,_l);le(this,Gn);le(this,At);le(this,Xr);Q(this,_l,t.client),this.mutationId=t.mutationId,Q(this,At,t.mutationCache),Q(this,Gn,[]),this.state=t.state||n8(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){D(this,Gn).includes(t)||(D(this,Gn).push(t),this.clearGcTimeout(),D(this,At).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Q(this,Gn,D(this,Gn).filter(n=>n!==t)),this.scheduleGc(),D(this,At).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){D(this,Gn).length||(this.state.status==="pending"?this.scheduleGc():D(this,At).remove(this))}continue(){var t;return((t=D(this,Xr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,s,l,u,d,f,h,m,p,b,S,g,y,x,v,A,E,j,k,O;const n=()=>{Ct(this,Yn,Pi).call(this,{type:"continue"})},i={client:D(this,_l),meta:this.options.meta,mutationKey:this.options.mutationKey};Q(this,Xr,fC({fn:()=>this.options.mutationFn?this.options.mutationFn(t,i):Promise.reject(new Error("No mutationFn found")),onFail:(_,P)=>{Ct(this,Yn,Pi).call(this,{type:"failed",failureCount:_,error:P})},onPause:()=>{Ct(this,Yn,Pi).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>D(this,At).canRun(this)}));const r=this.state.status==="pending",a=!D(this,Xr).canStart();try{if(r)n();else{Ct(this,Yn,Pi).call(this,{type:"pending",variables:t,isPaused:a}),await((s=(o=D(this,At).config).onMutate)==null?void 0:s.call(o,t,this,i));const P=await((u=(l=this.options).onMutate)==null?void 0:u.call(l,t,i));P!==this.state.context&&Ct(this,Yn,Pi).call(this,{type:"pending",context:P,variables:t,isPaused:a})}const _=await D(this,Xr).start();return await((f=(d=D(this,At).config).onSuccess)==null?void 0:f.call(d,_,t,this.state.context,this,i)),await((m=(h=this.options).onSuccess)==null?void 0:m.call(h,_,t,this.state.context,i)),await((b=(p=D(this,At).config).onSettled)==null?void 0:b.call(p,_,null,this.state.variables,this.state.context,this,i)),await((g=(S=this.options).onSettled)==null?void 0:g.call(S,_,null,t,this.state.context,i)),Ct(this,Yn,Pi).call(this,{type:"success",data:_}),_}catch(_){try{throw await((x=(y=D(this,At).config).onError)==null?void 0:x.call(y,_,t,this.state.context,this,i)),await((A=(v=this.options).onError)==null?void 0:A.call(v,_,t,this.state.context,i)),await((j=(E=D(this,At).config).onSettled)==null?void 0:j.call(E,void 0,_,this.state.variables,this.state.context,this,i)),await((O=(k=this.options).onSettled)==null?void 0:O.call(k,void 0,_,t,this.state.context,i)),_}finally{Ct(this,Yn,Pi).call(this,{type:"error",error:_})}}finally{D(this,At).runNext(this)}}},_l=new WeakMap,Gn=new WeakMap,At=new WeakMap,Xr=new WeakMap,Yn=new WeakSet,Pi=function(t){const n=i=>{switch(t.type){case"failed":return{...i,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...i,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:t.error,failureCount:i.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Rt.batch(()=>{D(this,Gn).forEach(i=>{i.onMutationUpdate(t)}),D(this,At).notify({mutation:this,type:"updated",action:t})})},$2);function n8(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var yi,Nn,Ll,z2,i8=(z2=class extends Wd{constructor(t={}){super();le(this,yi);le(this,Nn);le(this,Ll);this.config=t,Q(this,yi,new Set),Q(this,Nn,new Map),Q(this,Ll,0)}build(t,n,i){const r=new t8({client:t,mutationCache:this,mutationId:++dc(this,Ll)._,options:t.defaultMutationOptions(n),state:i});return this.add(r),r}add(t){D(this,yi).add(t);const n=$c(t);if(typeof n=="string"){const i=D(this,Nn).get(n);i?i.push(t):D(this,Nn).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(D(this,yi).delete(t)){const n=$c(t);if(typeof n=="string"){const i=D(this,Nn).get(n);if(i)if(i.length>1){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}else i[0]===t&&D(this,Nn).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=$c(t);if(typeof n=="string"){const i=D(this,Nn).get(n),r=i==null?void 0:i.find(a=>a.state.status==="pending");return!r||r===t}else return!0}runNext(t){var i;const n=$c(t);if(typeof n=="string"){const r=(i=D(this,Nn).get(n))==null?void 0:i.find(a=>a!==t&&a.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Rt.batch(()=>{D(this,yi).forEach(t=>{this.notify({type:"removed",mutation:t})}),D(this,yi).clear(),D(this,Nn).clear()})}getAll(){return Array.from(D(this,yi))}find(t){const n={exact:!0,...t};return this.getAll().find(i=>wx(n,i))}findAll(t={}){return this.getAll().filter(n=>wx(t,n))}notify(t){Rt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Rt.batch(()=>Promise.all(t.map(n=>n.continue().catch(_n))))}},yi=new WeakMap,Nn=new WeakMap,Ll=new WeakMap,z2);function $c(e){var t;return(t=e.options.scope)==null?void 0:t.id}var Kn,M2,r8=(M2=class extends Wd{constructor(t={}){super();le(this,Kn);this.config=t,Q(this,Kn,new Map)}build(t,n,i){const r=n.queryKey,a=n.queryHash??bg(r,n);let o=this.get(a);return o||(o=new Jk({client:t,queryKey:r,queryHash:a,options:t.defaultQueryOptions(n),state:i,defaultOptions:t.getQueryDefaults(r)}),this.add(o)),o}add(t){D(this,Kn).has(t.queryHash)||(D(this,Kn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=D(this,Kn).get(t.queryHash);n&&(t.destroy(),n===t&&D(this,Kn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Rt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return D(this,Kn).get(t)}getAll(){return[...D(this,Kn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(i=>vx(n,i))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(i=>vx(t,i)):n}notify(t){Rt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Rt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Rt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Kn=new WeakMap,M2),He,Ji,Wi,ho,mo,er,po,go,O2,a8=(O2=class{constructor(e={}){le(this,He);le(this,Ji);le(this,Wi);le(this,ho);le(this,mo);le(this,er);le(this,po);le(this,go);Q(this,He,e.queryCache||new r8),Q(this,Ji,e.mutationCache||new i8),Q(this,Wi,e.defaultOptions||{}),Q(this,ho,new Map),Q(this,mo,new Map),Q(this,er,0)}mount(){dc(this,er)._++,D(this,er)===1&&(Q(this,po,uC.subscribe(async e=>{e&&(await this.resumePausedMutations(),D(this,He).onFocus())})),Q(this,go,md.subscribe(async e=>{e&&(await this.resumePausedMutations(),D(this,He).onOnline())})))}unmount(){var e,t;dc(this,er)._--,D(this,er)===0&&((e=D(this,po))==null||e.call(this),Q(this,po,void 0),(t=D(this,go))==null||t.call(this),Q(this,go,void 0))}isFetching(e){return D(this,He).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return D(this,Ji).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=D(this,He).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=D(this,He).build(this,t),i=n.state.data;return i===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(jp(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(i))}getQueriesData(e){return D(this,He).findAll(e).map(({queryKey:t,state:n})=>{const i=n.data;return[t,i]})}setQueryData(e,t,n){const i=this.defaultQueryOptions({queryKey:e}),r=D(this,He).get(i.queryHash),a=r==null?void 0:r.state.data,o=Nk(t,a);if(o!==void 0)return D(this,He).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return Rt.batch(()=>D(this,He).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=D(this,He).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=D(this,He);Rt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=D(this,He);return Rt.batch(()=>(n.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},i=Rt.batch(()=>D(this,He).findAll(e).map(r=>r.cancel(n)));return Promise.all(i).then(_n).catch(_n)}invalidateQueries(e,t={}){return Rt.batch(()=>(D(this,He).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},i=Rt.batch(()=>D(this,He).findAll(e).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let a=r.fetch(void 0,n);return n.throwOnError||(a=a.catch(_n)),r.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(i).then(_n)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=D(this,He).build(this,t);return n.isStaleByTime(jp(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(_n).catch(_n)}fetchInfiniteQuery(e){return e.behavior=Ex(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(_n).catch(_n)}ensureInfiniteQueryData(e){return e.behavior=Ex(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return md.isOnline()?D(this,Ji).resumePausedMutations():Promise.resolve()}getQueryCache(){return D(this,He)}getMutationCache(){return D(this,Ji)}getDefaultOptions(){return D(this,Wi)}setDefaultOptions(e){Q(this,Wi,e)}setQueryDefaults(e,t){D(this,ho).set(yl(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...D(this,ho).values()],n={};return t.forEach(i=>{xl(e,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(e,t){D(this,mo).set(yl(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...D(this,mo).values()],n={};return t.forEach(i=>{xl(e,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...D(this,Wi).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=bg(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===vg&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...D(this,Wi).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){D(this,He).clear(),D(this,Ji).clear()}},He=new WeakMap,Ji=new WeakMap,Wi=new WeakMap,ho=new WeakMap,mo=new WeakMap,er=new WeakMap,po=new WeakMap,go=new WeakMap,O2),o8=w.createContext(void 0),s8=({client:e,children:t})=>(w.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),c.jsx(o8.Provider,{value:e,children:t}));const l8={colors:{red:{100:"#FDEAEA",200:"#FACACA",300:"#F59A9A",400:"#F06A6A",500:"#EB3A3A",600:"#D42C2C",700:"#A82222",800:"#7A1919",900:"#AB2522"},orange:{100:"#FDF2E9",200:"#FCE4CE",300:"#FAD5A5",400:"#F8C67C",500:"#F6B653",600:"#F4A52A",700:"#E8941A",800:"#D08310",900:"#EF752B"},primary:"#AB2522",secondary:"#EF752B",background:"#121212",text:"#ffffff",error:"#ff6b6b",success:"#4caf50"}},c8=Ok`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Montserrat", sans-serif;
        background-color: ${({theme:e})=>e.colors.background};
        color: ${({theme:e})=>e.colors.text};
        line-height: 1.6;
        overflow-x: hidden;
        max-width: 100vw;
        width: 100%;
        position: relative;
    }

    #root {
        overflow-x: hidden;
        max-width: 100vw;
        width: 100%;
        position: relative;
    }
    
    html {
        overflow-x: hidden;
        max-width: 100vw;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
    }

    input, textarea, select {
        font-family: inherit;
    }

        /* Custom Scrollbar */
    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    ::-webkit-scrollbar-track {
        background: ${({theme:e})=>e.colors.background};
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
        border-radius: 6px;
        border: 2px solid ${({theme:e})=>e.colors.background};
    }

    ::-webkit-scrollbar-thumb:hover {
        box-shadow: 0 0 10px ${({theme:e})=>e.colors.primary};
    }



`;/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var kx="popstate";function u8(e={}){function t(i,r){let{pathname:a,search:o,hash:s}=i.location;return kp("",{pathname:a,search:o,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:bl(r)}return f8(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function d8(){return Math.random().toString(36).substring(2,10)}function Rx(e,t){return{usr:e.state,key:e.key,idx:t}}function kp(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Io(t):t,state:n,key:t&&t.key||i||d8()}}function bl({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Io(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function f8(e,t,n,i={}){let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,s="POP",l=null,u=d();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function d(){return(o.state||{idx:null}).idx}function f(){s="POP";let S=d(),g=S==null?null:S-u;u=S,l&&l({action:s,location:b.location,delta:g})}function h(S,g){s="PUSH";let y=kp(b.location,S,g);u=d()+1;let x=Rx(y,u),v=b.createHref(y);try{o.pushState(x,"",v)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(v)}a&&l&&l({action:s,location:b.location,delta:1})}function m(S,g){s="REPLACE";let y=kp(b.location,S,g);u=d();let x=Rx(y,u),v=b.createHref(y);o.replaceState(x,"",v),a&&l&&l({action:s,location:b.location,delta:0})}function p(S){return h8(S)}let b={get action(){return s},get location(){return e(r,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(kx,f),l=S,()=>{r.removeEventListener(kx,f),l=null}},createHref(S){return t(r,S)},createURL:p,encodeLocation(S){let g=p(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:m,go(S){return o.go(S)}};return b}function h8(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Le(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:bl(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function mC(e,t,n="/"){return m8(e,t,n,!1)}function m8(e,t,n,i){let r=typeof t=="string"?Io(t):t,a=Mi(r.pathname||"/",n);if(a==null)return null;let o=pC(e);p8(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let u=E8(a);s=T8(o[l],u,i)}return s}function pC(e,t=[],n=[],i="",r=!1){let a=(o,s,l=r,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(i)&&l)return;Le(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length)}let f=Ei([i,d.relativePath]),h=n.concat(d);o.children&&o.children.length>0&&(Le(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),pC(o.children,t,h,f,l)),!(o.path==null&&!o.index)&&t.push({path:f,score:S8(f,o.index),routesMeta:h})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,s);else for(let u of gC(o.path))a(o,s,!0,u)}),t}function gC(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let o=gC(i.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),r&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function p8(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:C8(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var g8=/^:[\w-]+$/,y8=3,x8=2,b8=1,v8=10,w8=-2,$x=e=>e==="*";function S8(e,t){let n=e.split("/"),i=n.length;return n.some($x)&&(i+=w8),t&&(i+=x8),n.filter(r=>!$x(r)).reduce((r,a)=>r+(g8.test(a)?y8:a===""?b8:v8),i)}function C8(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function T8(e,t,n=!1){let{routesMeta:i}=e,r={},a="/",o=[];for(let s=0;s<i.length;++s){let l=i[s],u=s===i.length-1,d=a==="/"?t:t.slice(a.length)||"/",f=pd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=pd({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Ei([a,f.pathname]),pathnameBase:z8(Ei([a,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(a=Ei([a,f.pathnameBase]))}return o}function pd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=j8(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((u,{paramName:d,isOptional:f},h)=>{if(d==="*"){let p=s[h]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}const m=s[h];return f&&!m?u[d]=void 0:u[d]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function j8(e,t=!1,n=!0){kn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(i.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function E8(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return kn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}var A8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k8=e=>A8.test(e);function R8(e,t="/"){let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?Io(e):e,a;if(n)if(k8(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),kn(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${n}`)}n.startsWith("/")?a=zx(n.substring(1),"/"):a=zx(n,t)}else a=t;return{pathname:a,search:M8(i),hash:O8(r)}}function zx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function $h(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $8(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wg(e){let t=$8(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Sg(e,t,n,i=!1){let r;typeof e=="string"?r=Io(e):(r={...e},Le(!r.pathname||!r.pathname.includes("?"),$h("?","pathname","search",r)),Le(!r.pathname||!r.pathname.includes("#"),$h("#","pathname","hash",r)),Le(!r.search||!r.search.includes("#"),$h("#","search","hash",r)));let a=e===""||r.pathname==="",o=a?"/":r.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=R8(r,s),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var Ei=e=>e.join("/").replace(/\/\/+/g,"/"),z8=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M8=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O8=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function D8(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yC=["POST","PUT","PATCH","DELETE"];new Set(yC);var _8=["GET",...yC];new Set(_8);var Zo=w.createContext(null);Zo.displayName="DataRouter";var tf=w.createContext(null);tf.displayName="DataRouterState";w.createContext(!1);var xC=w.createContext({isTransitioning:!1});xC.displayName="ViewTransition";var L8=w.createContext(new Map);L8.displayName="Fetchers";var N8=w.createContext(null);N8.displayName="Await";var Pn=w.createContext(null);Pn.displayName="Navigation";var Ql=w.createContext(null);Ql.displayName="Location";var Rn=w.createContext({outlet:null,matches:[],isDataRoute:!1});Rn.displayName="Route";var Cg=w.createContext(null);Cg.displayName="RouteError";function B8(e,{relative:t}={}){Le(Jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=w.useContext(Pn),{hash:r,pathname:a,search:o}=Il(e,{relative:t}),s=a;return n!=="/"&&(s=a==="/"?n:Ei([n,a])),i.createHref({pathname:s,search:o,hash:r})}function Jo(){return w.useContext(Ql)!=null}function Ni(){return Le(Jo(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Ql).location}var bC="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vC(e){w.useContext(Pn).static||w.useLayoutEffect(e)}function nf(){let{isDataRoute:e}=w.useContext(Rn);return e?e6():U8()}function U8(){Le(Jo(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Zo),{basename:t,navigator:n}=w.useContext(Pn),{matches:i}=w.useContext(Rn),{pathname:r}=Ni(),a=JSON.stringify(wg(i)),o=w.useRef(!1);return vC(()=>{o.current=!0}),w.useCallback((l,u={})=>{if(kn(o.current,bC),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=Sg(l,JSON.parse(a),r,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Ei([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,a,r,e])}var V8=w.createContext(null);function P8(e){let t=w.useContext(Rn).outlet;return w.useMemo(()=>t&&w.createElement(V8.Provider,{value:e},t),[t,e])}function H8(){let{matches:e}=w.useContext(Rn),t=e[e.length-1];return t?t.params:{}}function Il(e,{relative:t}={}){let{matches:n}=w.useContext(Rn),{pathname:i}=Ni(),r=JSON.stringify(wg(n));return w.useMemo(()=>Sg(e,JSON.parse(r),i,t==="path"),[e,r,i,t])}function F8(e,t){return wC(e,t)}function wC(e,t,n,i,r){var y;Le(Jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=w.useContext(Pn),{matches:o}=w.useContext(Rn),s=o[o.length-1],l=s?s.params:{},u=s?s.pathname:"/",d=s?s.pathnameBase:"/",f=s&&s.route;{let x=f&&f.path||"";SC(u,!f||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let h=Ni(),m;if(t){let x=typeof t=="string"?Io(t):t;Le(d==="/"||((y=x.pathname)==null?void 0:y.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${x.pathname}" was given in the \`location\` prop.`),m=x}else m=h;let p=m.pathname||"/",b=p;if(d!=="/"){let x=d.replace(/^\//,"").split("/");b="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let S=mC(e,{pathname:b});kn(f||S!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),kn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=X8(S&&S.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Ei([d,a.encodeLocation?a.encodeLocation(x.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?d:Ei([d,a.encodeLocation?a.encodeLocation(x.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),o,n,i,r);return t&&g?w.createElement(Ql.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},g):g}function q8(){let e=W8(),t=D8(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:a},"ErrorBoundary")," or"," ",w.createElement("code",{style:a},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:r},n):null,o)}var G8=w.createElement(q8,null),Y8=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?w.createElement(Rn.Provider,{value:this.props.routeContext},w.createElement(Cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function K8({routeContext:e,match:t,children:n}){let i=w.useContext(Zo);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Rn.Provider,{value:e},n)}function X8(e,t=[],n=null,i=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n==null?void 0:n.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);Le(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,d+1))}let s=!1,l=-1;if(n)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(l=d),f.route.id){let{loaderData:h,errors:m}=n,p=f.route.loader&&!h.hasOwnProperty(f.route.id)&&(!m||m[f.route.id]===void 0);if(f.route.lazy||p){s=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}let u=n&&i?(d,f)=>{var h,m;i(d,{location:n.location,params:((m=(h=n.matches)==null?void 0:h[0])==null?void 0:m.params)??{},errorInfo:f})}:void 0;return a.reduceRight((d,f,h)=>{let m,p=!1,b=null,S=null;n&&(m=o&&f.route.id?o[f.route.id]:void 0,b=f.route.errorElement||G8,s&&(l<0&&h===0?(SC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,S=null):l===h&&(p=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,h+1)),y=()=>{let x;return m?x=b:p?x=S:f.route.Component?x=w.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,w.createElement(K8,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(Y8,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:u}):y()},null)}function Tg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q8(e){let t=w.useContext(Zo);return Le(t,Tg(e)),t}function I8(e){let t=w.useContext(tf);return Le(t,Tg(e)),t}function Z8(e){let t=w.useContext(Rn);return Le(t,Tg(e)),t}function jg(e){let t=Z8(e),n=t.matches[t.matches.length-1];return Le(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function J8(){return jg("useRouteId")}function W8(){var i;let e=w.useContext(Cg),t=I8("useRouteError"),n=jg("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function e6(){let{router:e}=Q8("useNavigate"),t=jg("useNavigate"),n=w.useRef(!1);return vC(()=>{n.current=!0}),w.useCallback(async(r,a={})=>{kn(n.current,bC),n.current&&(typeof r=="number"?e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t])}var Mx={};function SC(e,t,n){!t&&!Mx[e]&&(Mx[e]=!0,kn(!1,n))}w.memo(t6);function t6({routes:e,future:t,state:n,unstable_onError:i}){return wC(e,void 0,n,i,t)}function CC({to:e,replace:t,state:n,relative:i}){Le(Jo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:r}=w.useContext(Pn);kn(!r,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=w.useContext(Rn),{pathname:o}=Ni(),s=nf(),l=Sg(e,wg(a),o,i==="path"),u=JSON.stringify(l);return w.useEffect(()=>{s(JSON.parse(u),{replace:t,state:n,relative:i})},[s,u,i,t,n]),null}function n6(e){return P8(e.context)}function On(e){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function i6({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:r,static:a=!1}){Le(!Jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),s=w.useMemo(()=>({basename:o,navigator:r,static:a,future:{}}),[o,r,a]);typeof n=="string"&&(n=Io(n));let{pathname:l="/",search:u="",hash:d="",state:f=null,key:h="default"}=n,m=w.useMemo(()=>{let p=Mi(l,o);return p==null?null:{location:{pathname:p,search:u,hash:d,state:f,key:h},navigationType:i}},[o,l,u,d,f,h,i]);return kn(m!=null,`<Router basename="${o}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:w.createElement(Pn.Provider,{value:s},w.createElement(Ql.Provider,{children:t,value:m}))}function r6({children:e,location:t}){return F8(Rp(e),t)}function Rp(e,t=[]){let n=[];return w.Children.forEach(e,(i,r)=>{if(!w.isValidElement(i))return;let a=[...t,r];if(i.type===w.Fragment){n.push.apply(n,Rp(i.props.children,a));return}Le(i.type===On,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Rp(i.props.children,a)),n.push(o)}),n}var wu="get",Su="application/x-www-form-urlencoded";function rf(e){return e!=null&&typeof e.tagName=="string"}function a6(e){return rf(e)&&e.tagName.toLowerCase()==="button"}function o6(e){return rf(e)&&e.tagName.toLowerCase()==="form"}function s6(e){return rf(e)&&e.tagName.toLowerCase()==="input"}function l6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function c6(e,t){return e.button===0&&(!t||t==="_self")&&!l6(e)}var zc=null;function u6(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var d6=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zh(e){return e!=null&&!d6.has(e)?(kn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Su}"`),null):e}function f6(e,t){let n,i,r,a,o;if(o6(e)){let s=e.getAttribute("action");i=s?Mi(s,t):null,n=e.getAttribute("method")||wu,r=zh(e.getAttribute("enctype"))||Su,a=new FormData(e)}else if(a6(e)||s6(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||s.getAttribute("action");if(i=l?Mi(l,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||wu,r=zh(e.getAttribute("formenctype"))||zh(s.getAttribute("enctype"))||Su,a=new FormData(s,e),!u6()){let{name:u,type:d,value:f}=e;if(d==="image"){let h=u?`${u}.`:"";a.append(`${h}x`,"0"),a.append(`${h}y`,"0")}else u&&a.append(u,f)}}else{if(rf(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=wu,i=null,r=Su,o=e}return a&&r==="text/plain"&&(o=a,a=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Eg(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function h6(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Mi(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function m6(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function p6(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function g6(e,t,n){let i=await Promise.all(e.map(async r=>{let a=t.routes[r.route.id];if(a){let o=await m6(a,n);return o.links?o.links():[]}return[]}));return v6(i.flat(1).filter(p6).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Ox(e,t,n,i,r,a){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,s=(l,u)=>{var d;return n[u].pathname!==l.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return a==="assets"?t.filter((l,u)=>o(l,u)||s(l,u)):a==="data"?t.filter((l,u)=>{var f;let d=i.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(o(l,u)||s(l,u))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function y6(e,t,{includeHydrateFallback:n}={}){return x6(e.map(i=>{let r=t.routes[i.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1))}function x6(e){return[...new Set(e)]}function b6(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function v6(e,t){let n=new Set;return new Set(t),e.reduce((i,r)=>{let a=JSON.stringify(b6(r));return n.has(a)||(n.add(a),i.push({key:a,link:r})),i},[])}function TC(){let e=w.useContext(Zo);return Eg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function w6(){let e=w.useContext(tf);return Eg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ag=w.createContext(void 0);Ag.displayName="FrameworkContext";function jC(){let e=w.useContext(Ag);return Eg(e,"You must render this element inside a <HydratedRouter> element"),e}function S6(e,t){let n=w.useContext(Ag),[i,r]=w.useState(!1),[a,o]=w.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=t,h=w.useRef(null);w.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let b=g=>{g.forEach(y=>{o(y.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return h.current&&S.observe(h.current),()=>{S.disconnect()}}},[e]),w.useEffect(()=>{if(i){let b=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(b)}}},[i]);let m=()=>{r(!0)},p=()=>{r(!1),o(!1)};return n?e!=="intent"?[a,h,{}]:[a,h,{onFocus:ps(s,m),onBlur:ps(l,p),onMouseEnter:ps(u,m),onMouseLeave:ps(d,p),onTouchStart:ps(f,m)}]:[!1,h,{}]}function ps(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function C6({page:e,...t}){let{router:n}=TC(),i=w.useMemo(()=>mC(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?w.createElement(j6,{page:e,matches:i,...t}):null}function T6(e){let{manifest:t,routeModules:n}=jC(),[i,r]=w.useState([]);return w.useEffect(()=>{let a=!1;return g6(e,t,n).then(o=>{a||r(o)}),()=>{a=!0}},[e,t,n]),i}function j6({page:e,matches:t,...n}){let i=Ni(),{manifest:r,routeModules:a}=jC(),{basename:o}=TC(),{loaderData:s,matches:l}=w6(),u=w.useMemo(()=>Ox(e,t,l,r,i,"data"),[e,t,l,r,i]),d=w.useMemo(()=>Ox(e,t,l,r,i,"assets"),[e,t,l,r,i]),f=w.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let p=new Set,b=!1;if(t.forEach(g=>{var x;let y=r.routes[g.route.id];!y||!y.hasLoader||(!u.some(v=>v.route.id===g.route.id)&&g.route.id in s&&((x=a[g.route.id])!=null&&x.shouldRevalidate)||y.hasClientLoader?b=!0:p.add(g.route.id))}),p.size===0)return[];let S=h6(e,o,"data");return b&&p.size>0&&S.searchParams.set("_routes",t.filter(g=>p.has(g.route.id)).map(g=>g.route.id).join(",")),[S.pathname+S.search]},[o,s,i,r,u,t,e,a]),h=w.useMemo(()=>y6(d,r),[d,r]),m=T6(d);return w.createElement(w.Fragment,null,f.map(p=>w.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...n})),h.map(p=>w.createElement("link",{key:p,rel:"modulepreload",href:p,...n})),m.map(({key:p,link:b})=>w.createElement("link",{key:p,nonce:n.nonce,...b})))}function E6(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var EC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{EC&&(window.__reactRouterVersion="7.9.6")}catch{}function A6({basename:e,children:t,window:n}){let i=w.useRef();i.current==null&&(i.current=u8({window:n,v5Compat:!0}));let r=i.current,[a,o]=w.useState({action:r.action,location:r.location}),s=w.useCallback(l=>{w.startTransition(()=>o(l))},[o]);return w.useLayoutEffect(()=>r.listen(s),[r,s]),w.createElement(i6,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:r})}var AC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wo=w.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:r,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:d,viewTransition:f,...h},m){let{basename:p}=w.useContext(Pn),b=typeof u=="string"&&AC.test(u),S,g=!1;if(typeof u=="string"&&b&&(S=u,EC))try{let O=new URL(window.location.href),_=u.startsWith("//")?new URL(O.protocol+u):new URL(u),P=Mi(_.pathname,p);_.origin===O.origin&&P!=null?u=P+_.search+_.hash:g=!0}catch{kn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=B8(u,{relative:r}),[x,v,A]=S6(i,h),E=z6(u,{replace:o,state:s,target:l,preventScrollReset:d,relative:r,viewTransition:f});function j(O){t&&t(O),O.defaultPrevented||E(O)}let k=w.createElement("a",{...h,...A,href:S||y,onClick:g||a?t:j,ref:E6(m,v),target:l,"data-discover":!b&&n==="render"?"true":void 0});return x&&!b?w.createElement(w.Fragment,null,k,w.createElement(C6,{page:y})):k});Wo.displayName="Link";var k6=w.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:r=!1,style:a,to:o,viewTransition:s,children:l,...u},d){let f=Il(o,{relative:u.relative}),h=Ni(),m=w.useContext(tf),{navigator:p,basename:b}=w.useContext(Pn),S=m!=null&&L6(f)&&s===!0,g=p.encodeLocation?p.encodeLocation(f).pathname:f.pathname,y=h.pathname,x=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(y=y.toLowerCase(),x=x?x.toLowerCase():null,g=g.toLowerCase()),x&&b&&(x=Mi(x,b)||x);const v=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let A=y===g||!r&&y.startsWith(g)&&y.charAt(v)==="/",E=x!=null&&(x===g||!r&&x.startsWith(g)&&x.charAt(g.length)==="/"),j={isActive:A,isPending:E,isTransitioning:S},k=A?t:void 0,O;typeof i=="function"?O=i(j):O=[i,A?"active":null,E?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let _=typeof a=="function"?a(j):a;return w.createElement(Wo,{...u,"aria-current":k,className:O,ref:d,style:_,to:o,viewTransition:s},typeof l=="function"?l(j):l)});k6.displayName="NavLink";var R6=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:r,state:a,method:o=wu,action:s,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,...h},m)=>{let p=D6(),b=_6(s,{relative:u}),S=o.toLowerCase()==="get"?"get":"post",g=typeof s=="string"&&AC.test(s),y=x=>{if(l&&l(x),x.defaultPrevented)return;x.preventDefault();let v=x.nativeEvent.submitter,A=(v==null?void 0:v.getAttribute("formmethod"))||o;p(v||x.currentTarget,{fetcherKey:t,method:A,navigate:n,replace:r,state:a,relative:u,preventScrollReset:d,viewTransition:f})};return w.createElement("form",{ref:m,method:S,action:b,onSubmit:i?l:y,...h,"data-discover":!g&&e==="render"?"true":void 0})});R6.displayName="Form";function $6(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kC(e){let t=w.useContext(Zo);return Le(t,$6(e)),t}function z6(e,{target:t,replace:n,state:i,preventScrollReset:r,relative:a,viewTransition:o}={}){let s=nf(),l=Ni(),u=Il(e,{relative:a});return w.useCallback(d=>{if(c6(d,t)){d.preventDefault();let f=n!==void 0?n:bl(l)===bl(u);s(e,{replace:f,state:i,preventScrollReset:r,relative:a,viewTransition:o})}},[l,s,u,n,i,t,e,r,a,o])}var M6=0,O6=()=>`__${String(++M6)}__`;function D6(){let{router:e}=kC("useSubmit"),{basename:t}=w.useContext(Pn),n=J8();return w.useCallback(async(i,r={})=>{let{action:a,method:o,encType:s,formData:l,body:u}=f6(i,t);if(r.navigate===!1){let d=r.fetcherKey||O6();await e.fetch(d,n,r.action||a,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||s,flushSync:r.flushSync})}else await e.navigate(r.action||a,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||s,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[e,t,n])}function _6(e,{relative:t}={}){let{basename:n}=w.useContext(Pn),i=w.useContext(Rn);Le(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),a={...Il(e||".",{relative:t})},o=Ni();if(e==null){a.search=o.search;let s=new URLSearchParams(a.search),l=s.getAll("index");if(l.some(d=>d==="")){s.delete("index"),l.filter(f=>f).forEach(f=>s.append("index",f));let d=s.toString();a.search=d?`?${d}`:""}}return(!e||e===".")&&r.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Ei([n,a.pathname])),bl(a)}function L6(e,{relative:t}={}){let n=w.useContext(xC);Le(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=kC("useViewTransitionState"),r=Il(e,{relative:t});if(!n.isTransitioning)return!1;let a=Mi(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Mi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return pd(r.pathname,o)!=null||pd(r.pathname,a)!=null}function RC(e,t){return function(){return e.apply(t,arguments)}}const{toString:N6}=Object.prototype,{getPrototypeOf:kg}=Object,{iterator:af,toStringTag:$C}=Symbol,of=(e=>t=>{const n=N6.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Hn=e=>(e=e.toLowerCase(),t=>of(t)===e),sf=e=>t=>typeof t===e,{isArray:es}=Array,Oo=sf("undefined");function Zl(e){return e!==null&&!Oo(e)&&e.constructor!==null&&!Oo(e.constructor)&&Ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const zC=Hn("ArrayBuffer");function B6(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&zC(e.buffer),t}const U6=sf("string"),Ft=sf("function"),MC=sf("number"),Jl=e=>e!==null&&typeof e=="object",V6=e=>e===!0||e===!1,Cu=e=>{if(of(e)!=="object")return!1;const t=kg(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!($C in e)&&!(af in e)},P6=e=>{if(!Jl(e)||Zl(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},H6=Hn("Date"),F6=Hn("File"),q6=Hn("Blob"),G6=Hn("FileList"),Y6=e=>Jl(e)&&Ft(e.pipe),K6=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ft(e.append)&&((t=of(e))==="formdata"||t==="object"&&Ft(e.toString)&&e.toString()==="[object FormData]"))},X6=Hn("URLSearchParams"),[Q6,I6,Z6,J6]=["ReadableStream","Request","Response","Headers"].map(Hn),W6=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let i,r;if(typeof e!="object"&&(e=[e]),es(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{if(Zl(e))return;const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let s;for(i=0;i<o;i++)s=a[i],t.call(null,e[s],s,e)}}function OC(e,t){if(Zl(e))return null;t=t.toLowerCase();const n=Object.keys(e);let i=n.length,r;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const Ur=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,DC=e=>!Oo(e)&&e!==Ur;function $p(){const{caseless:e,skipUndefined:t}=DC(this)&&this||{},n={},i=(r,a)=>{const o=e&&OC(n,a)||a;Cu(n[o])&&Cu(r)?n[o]=$p(n[o],r):Cu(r)?n[o]=$p({},r):es(r)?n[o]=r.slice():(!t||!Oo(r))&&(n[o]=r)};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&Wl(arguments[r],i);return n}const eR=(e,t,n,{allOwnKeys:i}={})=>(Wl(t,(r,a)=>{n&&Ft(r)?e[a]=RC(r,n):e[a]=r},{allOwnKeys:i}),e),tR=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),nR=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},iR=(e,t,n,i)=>{let r,a,o;const s={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),a=r.length;a-- >0;)o=r[a],(!i||i(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&kg(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},rR=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return i!==-1&&i===n},aR=e=>{if(!e)return null;if(es(e))return e;let t=e.length;if(!MC(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},oR=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&kg(Uint8Array)),sR=(e,t)=>{const i=(e&&e[af]).call(e);let r;for(;(r=i.next())&&!r.done;){const a=r.value;t.call(e,a[0],a[1])}},lR=(e,t)=>{let n;const i=[];for(;(n=e.exec(t))!==null;)i.push(n);return i},cR=Hn("HTMLFormElement"),uR=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Dx=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),dR=Hn("RegExp"),_C=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};Wl(n,(r,a)=>{let o;(o=t(r,a,e))!==!1&&(i[a]=o||r)}),Object.defineProperties(e,i)},fR=e=>{_C(e,(t,n)=>{if(Ft(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=e[n];if(Ft(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},hR=(e,t)=>{const n={},i=r=>{r.forEach(a=>{n[a]=!0})};return es(e)?i(e):i(String(e).split(t)),n},mR=()=>{},pR=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function gR(e){return!!(e&&Ft(e.append)&&e[$C]==="FormData"&&e[af])}const yR=e=>{const t=new Array(10),n=(i,r)=>{if(Jl(i)){if(t.indexOf(i)>=0)return;if(Zl(i))return i;if(!("toJSON"in i)){t[r]=i;const a=es(i)?[]:{};return Wl(i,(o,s)=>{const l=n(o,r+1);!Oo(l)&&(a[s]=l)}),t[r]=void 0,a}}return i};return n(e,0)},xR=Hn("AsyncFunction"),bR=e=>e&&(Jl(e)||Ft(e))&&Ft(e.then)&&Ft(e.catch),LC=((e,t)=>e?setImmediate:t?((n,i)=>(Ur.addEventListener("message",({source:r,data:a})=>{r===Ur&&a===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Ur.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ft(Ur.postMessage)),vR=typeof queueMicrotask<"u"?queueMicrotask.bind(Ur):typeof process<"u"&&process.nextTick||LC,wR=e=>e!=null&&Ft(e[af]),R={isArray:es,isArrayBuffer:zC,isBuffer:Zl,isFormData:K6,isArrayBufferView:B6,isString:U6,isNumber:MC,isBoolean:V6,isObject:Jl,isPlainObject:Cu,isEmptyObject:P6,isReadableStream:Q6,isRequest:I6,isResponse:Z6,isHeaders:J6,isUndefined:Oo,isDate:H6,isFile:F6,isBlob:q6,isRegExp:dR,isFunction:Ft,isStream:Y6,isURLSearchParams:X6,isTypedArray:oR,isFileList:G6,forEach:Wl,merge:$p,extend:eR,trim:W6,stripBOM:tR,inherits:nR,toFlatObject:iR,kindOf:of,kindOfTest:Hn,endsWith:rR,toArray:aR,forEachEntry:sR,matchAll:lR,isHTMLForm:cR,hasOwnProperty:Dx,hasOwnProp:Dx,reduceDescriptors:_C,freezeMethods:fR,toObjectSet:hR,toCamelCase:uR,noop:mR,toFiniteNumber:pR,findKey:OC,global:Ur,isContextDefined:DC,isSpecCompliantForm:gR,toJSONObject:yR,isAsyncFn:xR,isThenable:bR,setImmediate:LC,asap:vR,isIterable:wR};function Z(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}R.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.status}}});const NC=Z.prototype,BC={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{BC[e]={value:e}});Object.defineProperties(Z,BC);Object.defineProperty(NC,"isAxiosError",{value:!0});Z.from=(e,t,n,i,r,a)=>{const o=Object.create(NC);R.toFlatObject(e,o,function(d){return d!==Error.prototype},u=>u!=="isAxiosError");const s=e&&e.message?e.message:"Error",l=t==null&&e?e.code:t;return Z.call(o,s,l,n,i,r),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",a&&Object.assign(o,a),o};const SR=null;function zp(e){return R.isPlainObject(e)||R.isArray(e)}function UC(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function _x(e,t,n){return e?e.concat(t).map(function(r,a){return r=UC(r),!n&&a?"["+r+"]":r}).join(n?".":""):t}function CR(e){return R.isArray(e)&&!e.some(zp)}const TR=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function lf(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,S){return!R.isUndefined(S[b])});const i=n.metaTokens,r=n.visitor||d,a=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(r))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(R.isDate(p))return p.toISOString();if(R.isBoolean(p))return p.toString();if(!l&&R.isBlob(p))throw new Z("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(p)||R.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,b,S){let g=p;if(p&&!S&&typeof p=="object"){if(R.endsWith(b,"{}"))b=i?b:b.slice(0,-2),p=JSON.stringify(p);else if(R.isArray(p)&&CR(p)||(R.isFileList(p)||R.endsWith(b,"[]"))&&(g=R.toArray(p)))return b=UC(b),g.forEach(function(x,v){!(R.isUndefined(x)||x===null)&&t.append(o===!0?_x([b],v,a):o===null?b:b+"[]",u(x))}),!1}return zp(p)?!0:(t.append(_x(S,b,a),u(p)),!1)}const f=[],h=Object.assign(TR,{defaultVisitor:d,convertValue:u,isVisitable:zp});function m(p,b){if(!R.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(p),R.forEach(p,function(g,y){(!(R.isUndefined(g)||g===null)&&r.call(t,g,R.isString(y)?y.trim():y,b,h))===!0&&m(g,b?b.concat(y):[y])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Lx(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function Rg(e,t){this._pairs=[],e&&lf(e,this,t)}const VC=Rg.prototype;VC.append=function(t,n){this._pairs.push([t,n])};VC.toString=function(t){const n=t?function(i){return t.call(this,i,Lx)}:Lx;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function jR(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function PC(e,t,n){if(!t)return e;const i=n&&n.encode||jR;R.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let a;if(r?a=r(t,n):a=R.isURLSearchParams(t)?t.toString():new Rg(t,n).toString(i),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Nx{constructor(){this.handlers=[]}use(t,n,i){return this.handlers.push({fulfilled:t,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(i){i!==null&&t(i)})}}const HC={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ER=typeof URLSearchParams<"u"?URLSearchParams:Rg,AR=typeof FormData<"u"?FormData:null,kR=typeof Blob<"u"?Blob:null,RR={isBrowser:!0,classes:{URLSearchParams:ER,FormData:AR,Blob:kR},protocols:["http","https","file","blob","url","data"]},$g=typeof window<"u"&&typeof document<"u",Mp=typeof navigator=="object"&&navigator||void 0,$R=$g&&(!Mp||["ReactNative","NativeScript","NS"].indexOf(Mp.product)<0),zR=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",MR=$g&&window.location.href||"http://localhost",OR=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$g,hasStandardBrowserEnv:$R,hasStandardBrowserWebWorkerEnv:zR,navigator:Mp,origin:MR},Symbol.toStringTag,{value:"Module"})),jt={...OR,...RR};function DR(e,t){return lf(e,new jt.classes.URLSearchParams,{visitor:function(n,i,r,a){return jt.isNode&&R.isBuffer(n)?(this.append(i,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}function _R(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function LR(e){const t={},n=Object.keys(e);let i;const r=n.length;let a;for(i=0;i<r;i++)a=n[i],t[a]=e[a];return t}function FC(e){function t(n,i,r,a){let o=n[a++];if(o==="__proto__")return!0;const s=Number.isFinite(+o),l=a>=n.length;return o=!o&&R.isArray(r)?r.length:o,l?(R.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!s):((!r[o]||!R.isObject(r[o]))&&(r[o]=[]),t(n,i,r[o],a)&&R.isArray(r[o])&&(r[o]=LR(r[o])),!s)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(i,r)=>{t(_R(i),r,n,0)}),n}return null}function NR(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(e)}const ec={transitional:HC,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,a=R.isObject(t);if(a&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return r?JSON.stringify(FC(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t)||R.isReadableStream(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(a){if(i.indexOf("application/x-www-form-urlencoded")>-1)return DR(t,this.formSerializer).toString();if((s=R.isFileList(t))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return lf(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return a||r?(n.setContentType("application/json",!1),NR(t)):t}],transformResponse:[function(t){const n=this.transitional||ec.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(R.isResponse(t)||R.isReadableStream(t))return t;if(t&&R.isString(t)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t,this.parseReviver)}catch(s){if(o)throw s.name==="SyntaxError"?Z.from(s,Z.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{ec.headers[e]={}});const BR=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),UR=e=>{const t={};let n,i,r;return e&&e.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||t[n]&&BR[n])&&(n==="set-cookie"?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)}),t},Bx=Symbol("internals");function gs(e){return e&&String(e).trim().toLowerCase()}function Tu(e){return e===!1||e==null?e:R.isArray(e)?e.map(Tu):String(e)}function VR(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}const PR=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Mh(e,t,n,i,r){if(R.isFunction(i))return i.call(this,t,n);if(r&&(t=n),!!R.isString(t)){if(R.isString(i))return t.indexOf(i)!==-1;if(R.isRegExp(i))return i.test(t)}}function HR(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,i)=>n.toUpperCase()+i)}function FR(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+n,{value:function(r,a,o){return this[i].call(this,t,r,a,o)},configurable:!0})})}let qt=class{constructor(t){t&&this.set(t)}set(t,n,i){const r=this;function a(s,l,u){const d=gs(l);if(!d)throw new Error("header name must be a non-empty string");const f=R.findKey(r,d);(!f||r[f]===void 0||u===!0||u===void 0&&r[f]!==!1)&&(r[f||l]=Tu(s))}const o=(s,l)=>R.forEach(s,(u,d)=>a(u,d,l));if(R.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(R.isString(t)&&(t=t.trim())&&!PR(t))o(UR(t),n);else if(R.isObject(t)&&R.isIterable(t)){let s={},l,u;for(const d of t){if(!R.isArray(d))throw TypeError("Object iterator must return a key-value pair");s[u=d[0]]=(l=s[u])?R.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}o(s,n)}else t!=null&&a(n,t,i);return this}get(t,n){if(t=gs(t),t){const i=R.findKey(this,t);if(i){const r=this[i];if(!n)return r;if(n===!0)return VR(r);if(R.isFunction(n))return n.call(this,r,i);if(R.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=gs(t),t){const i=R.findKey(this,t);return!!(i&&this[i]!==void 0&&(!n||Mh(this,this[i],i,n)))}return!1}delete(t,n){const i=this;let r=!1;function a(o){if(o=gs(o),o){const s=R.findKey(i,o);s&&(!n||Mh(i,i[s],s,n))&&(delete i[s],r=!0)}}return R.isArray(t)?t.forEach(a):a(t),r}clear(t){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const a=n[i];(!t||Mh(this,this[a],a,t,!0))&&(delete this[a],r=!0)}return r}normalize(t){const n=this,i={};return R.forEach(this,(r,a)=>{const o=R.findKey(i,a);if(o){n[o]=Tu(r),delete n[a];return}const s=t?HR(a):String(a).trim();s!==a&&delete n[a],n[s]=Tu(r),i[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=t&&R.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const i=new this(t);return n.forEach(r=>i.set(r)),i}static accessor(t){const i=(this[Bx]=this[Bx]={accessors:{}}).accessors,r=this.prototype;function a(o){const s=gs(o);i[s]||(FR(r,o),i[s]=!0)}return R.isArray(t)?t.forEach(a):a(t),this}};qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(qt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[n]=i}}});R.freezeMethods(qt);function Oh(e,t){const n=this||ec,i=t||n,r=qt.from(i.headers);let a=i.data;return R.forEach(e,function(s){a=s.call(n,a,r.normalize(),t?t.status:void 0)}),r.normalize(),a}function qC(e){return!!(e&&e.__CANCEL__)}function ts(e,t,n){Z.call(this,e??"canceled",Z.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(ts,Z,{__CANCEL__:!0});function GC(e,t,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(new Z("Request failed with status code "+n.status,[Z.ERR_BAD_REQUEST,Z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function qR(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function GR(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r=0,a=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=i[a];o||(o=u),n[r]=l,i[r]=u;let f=a,h=0;for(;f!==r;)h+=n[f++],f=f%e;if(r=(r+1)%e,r===a&&(a=(a+1)%e),u-o<t)return;const m=d&&u-d;return m?Math.round(h*1e3/m):void 0}}function YR(e,t){let n=0,i=1e3/t,r,a;const o=(u,d=Date.now())=>{n=d,r=null,a&&(clearTimeout(a),a=null),e(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=i?o(u,d):(r=u,a||(a=setTimeout(()=>{a=null,o(r)},i-f)))},()=>r&&o(r)]}const gd=(e,t,n=3)=>{let i=0;const r=GR(50,250);return YR(a=>{const o=a.loaded,s=a.lengthComputable?a.total:void 0,l=o-i,u=r(l),d=o<=s;i=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:u||void 0,estimated:u&&s&&d?(s-o)/u:void 0,event:a,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(f)},n)},Ux=(e,t)=>{const n=e!=null;return[i=>t[0]({lengthComputable:n,total:e,loaded:i}),t[1]]},Vx=e=>(...t)=>R.asap(()=>e(...t)),KR=jt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,jt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,XR=jt.hasStandardBrowserEnv?{write(e,t,n,i,r,a,o){if(typeof document>"u")return;const s=[`${e}=${encodeURIComponent(t)}`];R.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),R.isString(i)&&s.push(`path=${i}`),R.isString(r)&&s.push(`domain=${r}`),a===!0&&s.push("secure"),R.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function QR(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function IR(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function YC(e,t,n){let i=!QR(t);return e&&(i||n==!1)?IR(e,t):t}const Px=e=>e instanceof qt?{...e}:e;function fa(e,t){t=t||{};const n={};function i(u,d,f,h){return R.isPlainObject(u)&&R.isPlainObject(d)?R.merge.call({caseless:h},u,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function r(u,d,f,h){if(R.isUndefined(d)){if(!R.isUndefined(u))return i(void 0,u,f,h)}else return i(u,d,f,h)}function a(u,d){if(!R.isUndefined(d))return i(void 0,d)}function o(u,d){if(R.isUndefined(d)){if(!R.isUndefined(u))return i(void 0,u)}else return i(void 0,d)}function s(u,d,f){if(f in t)return i(u,d);if(f in e)return i(void 0,u)}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(u,d,f)=>r(Px(u),Px(d),f,!0)};return R.forEach(Object.keys({...e,...t}),function(d){const f=l[d]||r,h=f(e[d],t[d],d);R.isUndefined(h)&&f!==s||(n[d]=h)}),n}const KC=e=>{const t=fa({},e);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:a,headers:o,auth:s}=t;if(t.headers=o=qt.from(o),t.url=PC(YC(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&o.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),R.isFormData(n)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(R.isFunction(n.getHeaders)){const l=n.getHeaders(),u=["content-type","content-length"];Object.entries(l).forEach(([d,f])=>{u.includes(d.toLowerCase())&&o.set(d,f)})}}if(jt.hasStandardBrowserEnv&&(i&&R.isFunction(i)&&(i=i(t)),i||i!==!1&&KR(t.url))){const l=r&&a&&XR.read(a);l&&o.set(r,l)}return t},ZR=typeof XMLHttpRequest<"u",JR=ZR&&function(e){return new Promise(function(n,i){const r=KC(e);let a=r.data;const o=qt.from(r.headers).normalize();let{responseType:s,onUploadProgress:l,onDownloadProgress:u}=r,d,f,h,m,p;function b(){m&&m(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let S=new XMLHttpRequest;S.open(r.method.toUpperCase(),r.url,!0),S.timeout=r.timeout;function g(){if(!S)return;const x=qt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),A={data:!s||s==="text"||s==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:x,config:e,request:S};GC(function(j){n(j),b()},function(j){i(j),b()},A),S=null}"onloadend"in S?S.onloadend=g:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(g)},S.onabort=function(){S&&(i(new Z("Request aborted",Z.ECONNABORTED,e,S)),S=null)},S.onerror=function(v){const A=v&&v.message?v.message:"Network Error",E=new Z(A,Z.ERR_NETWORK,e,S);E.event=v||null,i(E),S=null},S.ontimeout=function(){let v=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const A=r.transitional||HC;r.timeoutErrorMessage&&(v=r.timeoutErrorMessage),i(new Z(v,A.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,e,S)),S=null},a===void 0&&o.setContentType(null),"setRequestHeader"in S&&R.forEach(o.toJSON(),function(v,A){S.setRequestHeader(A,v)}),R.isUndefined(r.withCredentials)||(S.withCredentials=!!r.withCredentials),s&&s!=="json"&&(S.responseType=r.responseType),u&&([h,p]=gd(u,!0),S.addEventListener("progress",h)),l&&S.upload&&([f,m]=gd(l),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(d=x=>{S&&(i(!x||x.type?new ts(null,e,S):x),S.abort(),S=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const y=qR(r.url);if(y&&jt.protocols.indexOf(y)===-1){i(new Z("Unsupported protocol "+y+":",Z.ERR_BAD_REQUEST,e));return}S.send(a||null)})},WR=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let i=new AbortController,r;const a=function(u){if(!r){r=!0,s();const d=u instanceof Error?u:this.reason;i.abort(d instanceof Z?d:new ts(d instanceof Error?d.message:d))}};let o=t&&setTimeout(()=>{o=null,a(new Z(`timeout ${t} of ms exceeded`,Z.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(a):u.removeEventListener("abort",a)}),e=null)};e.forEach(u=>u.addEventListener("abort",a));const{signal:l}=i;return l.unsubscribe=()=>R.asap(s),l}},e$=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let i=0,r;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},t$=async function*(e,t){for await(const n of n$(e))yield*e$(n,t)},n$=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:i}=await t.read();if(n)break;yield i}}finally{await t.cancel()}},Hx=(e,t,n,i)=>{const r=t$(e,t);let a=0,o,s=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await r.next();if(u){s(),l.close();return}let f=d.byteLength;if(n){let h=a+=f;n(h)}l.enqueue(new Uint8Array(d))}catch(u){throw s(u),u}},cancel(l){return s(l),r.return()}},{highWaterMark:2})},Fx=64*1024,{isFunction:Mc}=R,i$=(({Request:e,Response:t})=>({Request:e,Response:t}))(R.global),{ReadableStream:qx,TextEncoder:Gx}=R.global,Yx=(e,...t)=>{try{return!!e(...t)}catch{return!1}},r$=e=>{e=R.merge.call({skipUndefined:!0},i$,e);const{fetch:t,Request:n,Response:i}=e,r=t?Mc(t):typeof fetch=="function",a=Mc(n),o=Mc(i);if(!r)return!1;const s=r&&Mc(qx),l=r&&(typeof Gx=="function"?(p=>b=>p.encode(b))(new Gx):async p=>new Uint8Array(await new n(p).arrayBuffer())),u=a&&s&&Yx(()=>{let p=!1;const b=new n(jt.origin,{body:new qx,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!b}),d=o&&s&&Yx(()=>R.isReadableStream(new i("").body)),f={stream:d&&(p=>p.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!f[p]&&(f[p]=(b,S)=>{let g=b&&b[p];if(g)return g.call(b);throw new Z(`Response type '${p}' is not supported`,Z.ERR_NOT_SUPPORT,S)})});const h=async p=>{if(p==null)return 0;if(R.isBlob(p))return p.size;if(R.isSpecCompliantForm(p))return(await new n(jt.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(R.isArrayBufferView(p)||R.isArrayBuffer(p))return p.byteLength;if(R.isURLSearchParams(p)&&(p=p+""),R.isString(p))return(await l(p)).byteLength},m=async(p,b)=>{const S=R.toFiniteNumber(p.getContentLength());return S??h(b)};return async p=>{let{url:b,method:S,data:g,signal:y,cancelToken:x,timeout:v,onDownloadProgress:A,onUploadProgress:E,responseType:j,headers:k,withCredentials:O="same-origin",fetchOptions:_}=KC(p),P=t||fetch;j=j?(j+"").toLowerCase():"text";let T=WR([y,x&&x.toAbortSignal()],v),V=null;const N=T&&T.unsubscribe&&(()=>{T.unsubscribe()});let q;try{if(E&&u&&S!=="get"&&S!=="head"&&(q=await m(k,g))!==0){let te=new n(b,{method:"POST",body:g,duplex:"half"}),F;if(R.isFormData(g)&&(F=te.headers.get("content-type"))&&k.setContentType(F),te.body){const[G,me]=Ux(q,gd(Vx(E)));g=Hx(te.body,Fx,G,me)}}R.isString(O)||(O=O?"include":"omit");const $=a&&"credentials"in n.prototype,U={..._,signal:T,method:S.toUpperCase(),headers:k.normalize().toJSON(),body:g,duplex:"half",credentials:$?O:void 0};V=a&&new n(b,U);let z=await(a?P(V,_):P(b,U));const B=d&&(j==="stream"||j==="response");if(d&&(A||B&&N)){const te={};["status","statusText","headers"].forEach(Me=>{te[Me]=z[Me]});const F=R.toFiniteNumber(z.headers.get("content-length")),[G,me]=A&&Ux(F,gd(Vx(A),!0))||[];z=new i(Hx(z.body,Fx,G,()=>{me&&me(),N&&N()}),te)}j=j||"text";let Y=await f[R.findKey(f,j)||"text"](z,p);return!B&&N&&N(),await new Promise((te,F)=>{GC(te,F,{data:Y,headers:qt.from(z.headers),status:z.status,statusText:z.statusText,config:p,request:V})})}catch($){throw N&&N(),$&&$.name==="TypeError"&&/Load failed|fetch/i.test($.message)?Object.assign(new Z("Network Error",Z.ERR_NETWORK,p,V),{cause:$.cause||$}):Z.from($,$&&$.code,p,V)}}},a$=new Map,XC=e=>{let t=e&&e.env||{};const{fetch:n,Request:i,Response:r}=t,a=[i,r,n];let o=a.length,s=o,l,u,d=a$;for(;s--;)l=a[s],u=d.get(l),u===void 0&&d.set(l,u=s?new Map:r$(t)),d=u;return u};XC();const zg={http:SR,xhr:JR,fetch:{get:XC}};R.forEach(zg,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Kx=e=>`- ${e}`,o$=e=>R.isFunction(e)||e===null||e===!1;function s$(e,t){e=R.isArray(e)?e:[e];const{length:n}=e;let i,r;const a={};for(let o=0;o<n;o++){i=e[o];let s;if(r=i,!o$(i)&&(r=zg[(s=String(i)).toLowerCase()],r===void 0))throw new Z(`Unknown adapter '${s}'`);if(r&&(R.isFunction(r)||(r=r.get(t))))break;a[s||"#"+o]=r}if(!r){const o=Object.entries(a).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=n?o.length>1?`since :
`+o.map(Kx).join(`
`):" "+Kx(o[0]):"as no adapter specified";throw new Z("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r}const QC={getAdapter:s$,adapters:zg};function Dh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ts(null,e)}function Xx(e){return Dh(e),e.headers=qt.from(e.headers),e.data=Oh.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),QC.getAdapter(e.adapter||ec.adapter,e)(e).then(function(i){return Dh(e),i.data=Oh.call(e,e.transformResponse,i),i.headers=qt.from(i.headers),i},function(i){return qC(i)||(Dh(e),i&&i.response&&(i.response.data=Oh.call(e,e.transformResponse,i.response),i.response.headers=qt.from(i.response.headers))),Promise.reject(i)})}const IC="1.13.2",cf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{cf[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const Qx={};cf.transitional=function(t,n,i){function r(a,o){return"[Axios v"+IC+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return(a,o,s)=>{if(t===!1)throw new Z(r(o," has been removed"+(n?" in "+n:"")),Z.ERR_DEPRECATED);return n&&!Qx[o]&&(Qx[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,s):!0}};cf.spelling=function(t){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function l$(e,t,n){if(typeof e!="object")throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const a=i[r],o=t[a];if(o){const s=e[a],l=s===void 0||o(s,a,e);if(l!==!0)throw new Z("option "+a+" must be "+l,Z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Z("Unknown option "+a,Z.ERR_BAD_OPTION)}}const ju={assertOptions:l$,validators:cf},Fn=ju.validators;let ta=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Nx,response:new Nx}}async request(t,n){try{return await this._request(t,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const a=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?a&&!String(i.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+a):i.stack=a}catch{}}throw i}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=fa(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:a}=n;i!==void 0&&ju.assertOptions(i,{silentJSONParsing:Fn.transitional(Fn.boolean),forcedJSONParsing:Fn.transitional(Fn.boolean),clarifyTimeoutError:Fn.transitional(Fn.boolean)},!1),r!=null&&(R.isFunction(r)?n.paramsSerializer={serialize:r}:ju.assertOptions(r,{encode:Fn.function,serialize:Fn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ju.assertOptions(n,{baseUrl:Fn.spelling("baseURL"),withXsrfToken:Fn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=a&&R.merge(a.common,a[n.method]);a&&R.forEach(["delete","get","head","post","put","patch","common"],p=>{delete a[p]}),n.headers=qt.concat(o,a);const s=[];let l=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(l=l&&b.synchronous,s.unshift(b.fulfilled,b.rejected))});const u=[];this.interceptors.response.forEach(function(b){u.push(b.fulfilled,b.rejected)});let d,f=0,h;if(!l){const p=[Xx.bind(this),void 0];for(p.unshift(...s),p.push(...u),h=p.length,d=Promise.resolve(n);f<h;)d=d.then(p[f++],p[f++]);return d}h=s.length;let m=n;for(;f<h;){const p=s[f++],b=s[f++];try{m=p(m)}catch(S){b.call(this,S);break}}try{d=Xx.call(this,m)}catch(p){return Promise.reject(p)}for(f=0,h=u.length;f<h;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=fa(this.defaults,t);const n=YC(t.baseURL,t.url,t.allowAbsoluteUrls);return PC(n,t.params,t.paramsSerializer)}};R.forEach(["delete","get","head","options"],function(t){ta.prototype[t]=function(n,i){return this.request(fa(i||{},{method:t,url:n,data:(i||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(i){return function(a,o,s){return this.request(fa(s||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}ta.prototype[t]=n(),ta.prototype[t+"Form"]=n(!0)});let c$=class ZC{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const i=this;this.promise.then(r=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](r);i._listeners=null}),this.promise.then=r=>{let a;const o=new Promise(s=>{i.subscribe(s),a=s}).then(r);return o.cancel=function(){i.unsubscribe(a)},o},t(function(a,o,s){i.reason||(i.reason=new ts(a,o,s),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=i=>{t.abort(i)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new ZC(function(r){t=r}),cancel:t}}};function u$(e){return function(n){return e.apply(null,n)}}function d$(e){return R.isObject(e)&&e.isAxiosError===!0}const Op={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Op).forEach(([e,t])=>{Op[t]=e});function JC(e){const t=new ta(e),n=RC(ta.prototype.request,t);return R.extend(n,ta.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return JC(fa(e,r))},n}const Qe=JC(ec);Qe.Axios=ta;Qe.CanceledError=ts;Qe.CancelToken=c$;Qe.isCancel=qC;Qe.VERSION=IC;Qe.toFormData=lf;Qe.AxiosError=Z;Qe.Cancel=Qe.CanceledError;Qe.all=function(t){return Promise.all(t)};Qe.spread=u$;Qe.isAxiosError=d$;Qe.mergeConfig=fa;Qe.AxiosHeaders=qt;Qe.formToJSON=e=>FC(R.isHTMLForm(e)?new FormData(e):e);Qe.getAdapter=QC.getAdapter;Qe.HttpStatusCode=Op;Qe.default=Qe;const{Axios:mH,AxiosError:pH,CanceledError:gH,isCancel:yH,CancelToken:xH,VERSION:bH,all:vH,Cancel:wH,isAxiosError:SH,spread:CH,toFormData:TH,AxiosHeaders:jH,HttpStatusCode:EH,formToJSON:AH,getAdapter:kH,mergeConfig:RH}=Qe,Mg=Qe.create({baseURL:"http://localhost:8080/api",headers:{"Content-Type":"application/json"},withCredentials:!0});Mg.interceptors.request.use(e=>{const t=localStorage.getItem("@forgefit:token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));Mg.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("@forgefit:token"),localStorage.removeItem("@forgefit:user"),window.location.href="/login"),Promise.reject(e)});const Ix={login:async(e,t)=>(await Mg.post("/login",{email:e,senha:t})).data,logout:()=>{localStorage.removeItem("@forgefit:token"),localStorage.removeItem("@forgefit:user")}},WC=w.createContext(void 0),_h="@forgefit:user",Lh="@forgefit:token",f$=({children:e})=>{const[t,n]=w.useState(null),[i,r]=w.useState(!0),a=h=>{try{localStorage.setItem(_h,JSON.stringify(h))}catch(m){console.error("Erro ao salvar dados do usuário:",m)}},o=()=>{try{const h=localStorage.getItem(_h),m=localStorage.getItem(Lh);if(h&&m)return JSON.parse(h)}catch(h){console.error("Erro ao carregar dados do usuário:",h)}return null},s=()=>{try{localStorage.removeItem(_h),localStorage.removeItem(Lh)}catch(h){console.error("Erro ao limpar dados do usuário:",h)}},l=w.useCallback(async(h,m)=>{r(!0);try{const p=await Ix.login(h,m);if(!p.sucesso||!p.user)throw new Error(p.mensagem||"Erro ao fazer login");const b="jwt-token-"+Date.now();localStorage.setItem(Lh,b);const S={id:p.user.id,name:p.user.name,avatar:p.user.avatar,role:p.user.role,matricula:p.user.matricula,pontuacaoTotal:p.user.pontuacaoTotal,creditos:p.user.creditos};a(S),n(S)}catch(p){throw console.error("Erro ao fazer login:",p),p}finally{r(!1)}},[]),u=w.useCallback(()=>{Ix.logout(),s(),n(null)},[]),d=w.useCallback(async()=>{r(!0);try{const h=o();n(h||null)}catch(h){console.error("Erro ao carregar dados do usuário:",h),n(null)}finally{r(!1)}},[]);w.useEffect(()=>{d()},[d]);const f={user:t,loading:i,setUser:n,refreshUser:d,login:l,logout:u};return c.jsx(WC.Provider,{value:f,children:e})},ns=()=>{const e=w.useContext(WC);if(e===void 0)throw new Error("useUser must be used within a UserProvider");return e},h$=C.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 50% 50%, ${({theme:e})=>e.colors.primary}15 0%, transparent 70%);
        animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
    }
`,m$=C.img`
    width: 150px;
    height: auto;
    margin-bottom: 2rem;
    filter: drop-shadow(0 0 20px ${({theme:e})=>e.colors.primary}80);
    animation: float 3s ease-in-out infinite;
    z-index: 1;

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @media (max-width: 48rem) {
        width: 120px;
    }
`,p$=C.div`
    position: relative;
    z-index: 1;

    .spinner {
        width: 60px;
        height: 60px;
        border: 4px solid ${({theme:e})=>e.colors.primary}30;
        border-top: 4px solid ${({theme:e})=>e.colors.primary};
        border-radius: 50%;
        animation: spin 1s linear infinite;
        box-shadow: 0 0 20px ${({theme:e})=>e.colors.primary}40;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 48rem) {
        .spinner {
            width: 50px;
            height: 50px;
        }
    }
`,g$=C.p`
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInOut 2s ease-in-out infinite;
    z-index: 1;

    @keyframes fadeInOut {
        0%,
        100% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
    }

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`,Og="/assets/logo-INNEkeZC.png",eT=()=>c.jsxs(h$,{children:[c.jsx(m$,{src:Og,alt:"ForgeFit"}),c.jsx(p$,{children:c.jsx("div",{className:"spinner"})}),c.jsx(g$,{children:"Carregando..."})]}),y$="/assets/background-ZhnjlJlz.mp4",x$="/assets/gym-CRwzoXov.jpg",b$="/assets/image1-D2klLU27.png",v$="/assets/image2-BbrRvf2u.png",w$="/assets/image3-CLqS0A-C.png",S$="/assets/image4-BwDKQ-a8.png",C$=C.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5rem;
    background-color: transparent;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
    }
`,T$=C.img`
    height: 10rem;
    width: auto;

    @media (max-width: 48rem) {
        height: 6rem;
    }
`,j$=C.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`,E$=C.nav`
    display: flex;
    gap: 1rem;

    @media (max-width: 48rem) {
        display: none;
    }
`,Oc=C.a`
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`,Nh=C.section`
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    background-color: ${({theme:e})=>e.colors.background};
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: ${({theme:e})=>e.colors.text};
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    p {
        font-size: 1.25rem;
        line-height: 1.8;
        color: ${({theme:e})=>e.colors.text};
        max-width: 75rem;
        margin: 0 auto;
    }
`,A$=C.img`
    width: 100vw;
    height: 20rem;
    margin-top: 2rem;
    margin-left: calc(-50vw + 50%);
    border-radius: 0;
    object-fit: cover;
    object-position: center;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
`,k$=C.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    display: block;
`,R$=C.div`
    position: relative;
    width: 100%;
    height: 100vh;
`,$$=C.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    padding: 0 1rem;

    p {
        text-align: center;
        font-size: clamp(1.5rem, 5vw, 3.2rem);
        font-weight: bold;
        padding: 2rem;
        border-radius: 0.5rem;
        max-width: 90%;
        overflow: hidden;
        line-height: 1.4;

        @media (max-width: 48rem) {
            font-size: clamp(1rem, 6vw, 6rem);
            padding: 1rem;
            white-space: normal;
            word-wrap: break-word;
        }
    }
`,z$=C.span`
    display: inline-block;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeIn 1s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;C.div`
    position: relative;
    z-index: 1;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;const M$=C.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 3rem;
    width: 100%;
    max-width: 1200px;
`,Dc=C.div`
    display: flex;
    flex-direction: ${({reverse:e})=>e?"row-reverse":"row"};
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,_c=C.div`
    flex: 1;
    min-width: 300px;
    height: 300px;
    background: #1a1a1a;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: 100%;
    }
`,Lc=C.div`
    flex: 1;
    text-align: left;

    h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: ${({theme:e})=>e.colors.primary};
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: ${({theme:e})=>e.colors.text};
    }
`,O$=C.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    width: 100%;
    max-width: 1000px;

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-top: 2rem;
    }
`,Bh=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    .icon {
        margin-bottom: 1rem;
        color: ${({theme:e})=>e.colors.primary};
        display: flex;
        justify-content: center;
    }

    h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: ${({theme:e})=>e.colors.primary};
    }

    p {
        font-size: 1rem;
        color: ${({theme:e})=>e.colors.text};
        margin: 0;
        word-break: break-word;
    }

    a {
        color: ${({theme:e})=>e.colors.text};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: ${({theme:e})=>e.colors.primary};
        }
    }

    @media (max-width: 48rem) {
        padding: 1.5rem;

        h3 {
            font-size: 1.2rem;
        }

        .icon {
            svg {
                width: 40px;
                height: 40px;
            }
        }
    }
`,D$=C.footer`
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    color: white;
    padding: 2rem;
    text-align: center;
    font-size: 1rem;

    p {
        margin: 0.5rem 0;
        line-height: 1.6;
    }

    strong {
        font-weight: 600;
    }

    a {
        color: white;
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.8;
            text-decoration: underline;
        }
    }
`,tT=e=>{switch(e){case"sm":return"0.5rem 1rem";case"lg":return"0.875rem 2rem";default:return"0.75rem 1.5rem"}},nT=e=>{switch(e){case"sm":return"0.875rem";case"lg":return"1rem";default:return"1rem"}},iT=e=>{switch(e){case"sm":return"100px";case"lg":return"140px";default:return"120px"}},rT=(e,t)=>e==="primary"?`
            background: linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary});
            color: white;

            &:hover:not(:disabled) {
                box-shadow: 
                    0 0 10px rgba(239, 68, 68, 0.6),
                    0 0 10px rgba(249, 115, 22, 0.4),
                    0 6px 20px rgba(171, 37, 34, 0.4);
            }

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
                box-shadow: none;
            }
        `:`
            background: transparent;
            color: ${t.colors.text};
            border: 2px solid ${t.colors.primary};

            &:hover:not(:disabled) {
                background: ${t.colors.primary}20;
                box-shadow: 
                    0 0 10px rgba(239, 68, 68, 0.3),
                    0 0 10px rgba(249, 115, 22, 0.2);
            }

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
                background: transparent;
            }
        `,_$=C.button`
    padding: ${({size:e="md"})=>tT(e)};
    border-radius: 0.5rem;
    font-size: ${({size:e="md"})=>nT(e)};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: ${({size:e="md"})=>iT(e)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;

    ${({variant:e="primary",theme:t})=>rT(e,t)}

    @media (max-width: 48rem) {
        width: 100%;
        min-width: auto;
        padding: 0.75rem 1.5rem;
    }
`,L$=C(Wo)`
    padding: ${({size:e="md"})=>tT(e)};
    border-radius: 0.5rem;
    font-size: ${({size:e="md"})=>nT(e)};
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    min-width: ${({size:e="md"})=>iT(e)};

    ${({variant:e="primary",theme:t})=>rT(e,t)}

    @media (max-width: 48rem) {
        width: 100%;
        min-width: auto;
        padding: 0.75rem 1.5rem;
    }
`,Mt=({children:e,variant:t="primary",size:n="md",...i})=>c.jsx(_$,{variant:t,size:n,...i,children:e}),N$=({to:e,children:t,variant:n="primary",size:i="md"})=>c.jsx(L$,{to:e,variant:n,size:i,children:t});/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B$=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),U$=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,i)=>i?i.toUpperCase():n.toLowerCase()),Zx=e=>{const t=U$(e);return t.charAt(0).toUpperCase()+t.slice(1)},aT=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim(),V$=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P$={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H$=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:a,iconNode:o,...s},l)=>w.createElement("svg",{ref:l,...P$,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:aT("lucide",r),...!a&&!V$(s)&&{"aria-hidden":"true"},...s},[...o.map(([u,d])=>w.createElement(u,d)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(e,t)=>{const n=w.forwardRef(({className:i,...r},a)=>w.createElement(H$,{ref:a,iconNode:t,className:aT(`lucide-${B$(Zx(e))}`,`lucide-${e}`,i),...r}));return n.displayName=Zx(e),n};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F$=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],q$=se("activity",F$);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G$=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Y$=se("award",G$);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K$=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],X$=se("book-open",K$);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q$=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Do=se("calendar",Q$);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I$=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Z$=se("chart-column",I$);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J$=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],W$=se("check",J$);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ez=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],tz=se("circle-alert",ez);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nz=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],iz=se("copy",nz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rz=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],az=se("droplets",rz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oz=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],Dg=se("dumbbell",oz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sz=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],lz=se("file-text",sz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cz=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],uz=se("flame",cz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dz=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],fz=se("funnel",dz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hz=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Jx=se("history",hz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mz=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],vl=se("image",mz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pz=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],gz=se("log-out",pz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yz=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],xz=se("log-in",yz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bz=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],wl=se("map-pin",bz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vz=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],wz=se("menu",vz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],oT=se("message-square",Sz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cz=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Tz=se("phone",Cz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jz=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],sT=se("plus",jz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ez=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Az=se("scale",Ez);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kz=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],Rz=se("scroll",kz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $z=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],zz=se("search",$z);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Oz=se("shield",Mz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dz=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],_z=se("square-pen",Dz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lz=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ta=se("star",Lz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nz=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Bz=se("trash-2",Nz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uz=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Nc=se("trending-down",Uz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vz=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Rs=se("trending-up",Vz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pz=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Hz=se("triangle-alert",Pz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fz=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Sl=se("trophy",Fz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qz=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Gz=se("type",qz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yz=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_o=se("users",Yz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uf=se("x",Kz),_g=w.createContext({});function Lg(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ng=typeof window<"u",lT=Ng?w.useLayoutEffect:w.useEffect,df=w.createContext(null);function Bg(e,t){e.indexOf(t)===-1&&e.push(t)}function Ug(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Oi=(e,t,n)=>n>t?t:n<e?e:n;let Vg=()=>{};const Di={},cT=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function uT(e){return typeof e=="object"&&e!==null}const dT=e=>/^0[^.\s]+$/u.test(e);function Pg(e){let t;return()=>(t===void 0&&(t=e()),t)}const jn=e=>e,Xz=(e,t)=>n=>t(e(n)),tc=(...e)=>e.reduce(Xz),Cl=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i};class Hg{constructor(){this.subscriptions=[]}add(t){return Bg(this.subscriptions,t),()=>Ug(this.subscriptions,t)}notify(t,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,i);else for(let a=0;a<r;a++){const o=this.subscriptions[a];o&&o(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ti=e=>e*1e3,Sn=e=>e/1e3;function fT(e,t){return t?e*(1e3/t):0}const hT=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Qz=1e-7,Iz=12;function Zz(e,t,n,i,r){let a,o,s=0;do o=t+(n-t)/2,a=hT(o,i,r)-e,a>0?n=o:t=o;while(Math.abs(a)>Qz&&++s<Iz);return o}function nc(e,t,n,i){if(e===t&&n===i)return jn;const r=a=>Zz(a,0,1,e,n);return a=>a===0||a===1?a:hT(r(a),t,i)}const mT=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,pT=e=>t=>1-e(1-t),gT=nc(.33,1.53,.69,.99),Fg=pT(gT),yT=mT(Fg),xT=e=>(e*=2)<1?.5*Fg(e):.5*(2-Math.pow(2,-10*(e-1))),qg=e=>1-Math.sin(Math.acos(e)),bT=pT(qg),vT=mT(qg),Jz=nc(.42,0,1,1),Wz=nc(0,0,.58,1),wT=nc(.42,0,.58,1),eM=e=>Array.isArray(e)&&typeof e[0]!="number",ST=e=>Array.isArray(e)&&typeof e[0]=="number",tM={linear:jn,easeIn:Jz,easeInOut:wT,easeOut:Wz,circIn:qg,circInOut:vT,circOut:bT,backIn:Fg,backInOut:yT,backOut:gT,anticipate:xT},nM=e=>typeof e=="string",Wx=e=>{if(ST(e)){Vg(e.length===4);const[t,n,i,r]=e;return nc(t,n,i,r)}else if(nM(e))return tM[e];return e},Bc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function iM(e,t){let n=new Set,i=new Set,r=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function l(d){o.has(d)&&(u.schedule(d),e()),d(s)}const u={schedule:(d,f=!1,h=!1)=>{const p=h&&r?n:i;return f&&o.add(d),p.has(d)||p.add(d),d},cancel:d=>{i.delete(d),o.delete(d)},process:d=>{if(s=d,r){a=!0;return}r=!0,[n,i]=[i,n],n.forEach(l),n.clear(),r=!1,a&&(a=!1,u.process(d))}};return u}const rM=40;function CT(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Bc.reduce((x,v)=>(x[v]=iM(a),x),{}),{setup:s,read:l,resolveKeyframes:u,preUpdate:d,update:f,preRender:h,render:m,postRender:p}=o,b=()=>{const x=Di.useManualTiming?r.timestamp:performance.now();n=!1,Di.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(x-r.timestamp,rM),1)),r.timestamp=x,r.isProcessing=!0,s.process(r),l.process(r),u.process(r),d.process(r),f.process(r),h.process(r),m.process(r),p.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(b))},S=()=>{n=!0,i=!0,r.isProcessing||e(b)};return{schedule:Bc.reduce((x,v)=>{const A=o[v];return x[v]=(E,j=!1,k=!1)=>(n||S(),A.schedule(E,j,k)),x},{}),cancel:x=>{for(let v=0;v<Bc.length;v++)o[Bc[v]].cancel(x)},state:r,steps:o}}const{schedule:_e,cancel:wr,state:gt,steps:Uh}=CT(typeof requestAnimationFrame<"u"?requestAnimationFrame:jn,!0);let Eu;function aM(){Eu=void 0}const Pt={now:()=>(Eu===void 0&&Pt.set(gt.isProcessing||Di.useManualTiming?gt.timestamp:performance.now()),Eu),set:e=>{Eu=e,queueMicrotask(aM)}},TT=e=>t=>typeof t=="string"&&t.startsWith(e),Gg=TT("--"),oM=TT("var(--"),Yg=e=>oM(e)?sM.test(e.split("/*")[0].trim()):!1,sM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,is={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Tl={...is,transform:e=>Oi(0,1,e)},Uc={...is,default:1},Xs=e=>Math.round(e*1e5)/1e5,Kg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lM(e){return e==null}const cM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Xg=(e,t)=>n=>!!(typeof n=="string"&&cM.test(n)&&n.startsWith(e)||t&&!lM(n)&&Object.prototype.hasOwnProperty.call(n,t)),jT=(e,t,n)=>i=>{if(typeof i!="string")return i;const[r,a,o,s]=i.match(Kg);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},uM=e=>Oi(0,255,e),Vh={...is,transform:e=>Math.round(uM(e))},Vr={test:Xg("rgb","red"),parse:jT("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+Vh.transform(e)+", "+Vh.transform(t)+", "+Vh.transform(n)+", "+Xs(Tl.transform(i))+")"};function dM(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Dp={test:Xg("#"),parse:dM,transform:Vr.transform},ic=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Hi=ic("deg"),ni=ic("%"),K=ic("px"),fM=ic("vh"),hM=ic("vw"),eb={...ni,parse:e=>ni.parse(e)/100,transform:e=>ni.transform(e*100)},Ka={test:Xg("hsl","hue"),parse:jT("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+ni.transform(Xs(t))+", "+ni.transform(Xs(n))+", "+Xs(Tl.transform(i))+")"},Ze={test:e=>Vr.test(e)||Dp.test(e)||Ka.test(e),parse:e=>Vr.test(e)?Vr.parse(e):Ka.test(e)?Ka.parse(e):Dp.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Vr.transform(e):Ka.transform(e),getAnimatableNone:e=>{const t=Ze.parse(e);return t.alpha=0,Ze.transform(t)}},mM=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pM(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Kg))==null?void 0:t.length)||0)+(((n=e.match(mM))==null?void 0:n.length)||0)>0}const ET="number",AT="color",gM="var",yM="var(",tb="${}",xM=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function jl(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let a=0;const s=t.replace(xM,l=>(Ze.test(l)?(i.color.push(a),r.push(AT),n.push(Ze.parse(l))):l.startsWith(yM)?(i.var.push(a),r.push(gM),n.push(l)):(i.number.push(a),r.push(ET),n.push(parseFloat(l))),++a,tb)).split(tb);return{values:n,split:s,indexes:i,types:r}}function kT(e){return jl(e).values}function RT(e){const{split:t,types:n}=jl(e),i=t.length;return r=>{let a="";for(let o=0;o<i;o++)if(a+=t[o],r[o]!==void 0){const s=n[o];s===ET?a+=Xs(r[o]):s===AT?a+=Ze.transform(r[o]):a+=r[o]}return a}}const bM=e=>typeof e=="number"?0:Ze.test(e)?Ze.getAnimatableNone(e):e;function vM(e){const t=kT(e);return RT(e)(t.map(bM))}const Sr={test:pM,parse:kT,createTransformer:RT,getAnimatableNone:vM};function Ph(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function wM({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let r=0,a=0,o=0;if(!t)r=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=Ph(l,s,e+1/3),a=Ph(l,s,e),o=Ph(l,s,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:i}}function yd(e,t){return n=>n>0?t:e}const Ne=(e,t,n)=>e+(t-e)*n,Hh=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},SM=[Dp,Vr,Ka],CM=e=>SM.find(t=>t.test(e));function nb(e){const t=CM(e);if(!t)return!1;let n=t.parse(e);return t===Ka&&(n=wM(n)),n}const ib=(e,t)=>{const n=nb(e),i=nb(t);if(!n||!i)return yd(e,t);const r={...n};return a=>(r.red=Hh(n.red,i.red,a),r.green=Hh(n.green,i.green,a),r.blue=Hh(n.blue,i.blue,a),r.alpha=Ne(n.alpha,i.alpha,a),Vr.transform(r))},_p=new Set(["none","hidden"]);function TM(e,t){return _p.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function jM(e,t){return n=>Ne(e,t,n)}function Qg(e){return typeof e=="number"?jM:typeof e=="string"?Yg(e)?yd:Ze.test(e)?ib:kM:Array.isArray(e)?$T:typeof e=="object"?Ze.test(e)?ib:EM:yd}function $T(e,t){const n=[...e],i=n.length,r=e.map((a,o)=>Qg(a)(a,t[o]));return a=>{for(let o=0;o<i;o++)n[o]=r[o](a);return n}}function EM(e,t){const n={...e,...t},i={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(i[r]=Qg(e[r])(e[r],t[r]));return r=>{for(const a in i)n[a]=i[a](r);return n}}function AM(e,t){const n=[],i={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const a=t.types[r],o=e.indexes[a][i[a]],s=e.values[o]??0;n[r]=s,i[a]++}return n}const kM=(e,t)=>{const n=Sr.createTransformer(t),i=jl(e),r=jl(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?_p.has(e)&&!r.values.length||_p.has(t)&&!i.values.length?TM(e,t):tc($T(AM(i,r),r.values),n):yd(e,t)};function zT(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ne(e,t,n):Qg(e)(e,t)}const RM=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>_e.update(t,n),stop:()=>wr(t),now:()=>gt.isProcessing?gt.timestamp:Pt.now()}},MT=(e,t,n=10)=>{let i="";const r=Math.max(Math.round(t/n),2);for(let a=0;a<r;a++)i+=Math.round(e(a/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},xd=2e4;function Ig(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<xd;)t+=n,i=e.next(t);return t>=xd?1/0:t}function $M(e,t=100,n){const i=n({...e,keyframes:[0,t]}),r=Math.min(Ig(i),xd);return{type:"keyframes",ease:a=>i.next(r*a).value/t,duration:Sn(r)}}const zM=5;function OT(e,t,n){const i=Math.max(t-zM,0);return fT(n-e(i),t-i)}const qe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Fh=.001;function MM({duration:e=qe.duration,bounce:t=qe.bounce,velocity:n=qe.velocity,mass:i=qe.mass}){let r,a,o=1-t;o=Oi(qe.minDamping,qe.maxDamping,o),e=Oi(qe.minDuration,qe.maxDuration,Sn(e)),o<1?(r=u=>{const d=u*o,f=d*e,h=d-n,m=Lp(u,o),p=Math.exp(-f);return Fh-h/m*p},a=u=>{const f=u*o*e,h=f*n+n,m=Math.pow(o,2)*Math.pow(u,2)*e,p=Math.exp(-f),b=Lp(Math.pow(u,2),o);return(-r(u)+Fh>0?-1:1)*((h-m)*p)/b}):(r=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Fh+d*f},a=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const s=5/e,l=DM(r,a,s);if(e=ti(e),isNaN(l))return{stiffness:qe.stiffness,damping:qe.damping,duration:e};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:e}}}const OM=12;function DM(e,t,n){let i=n;for(let r=1;r<OM;r++)i=i-e(i)/t(i);return i}function Lp(e,t){return e*Math.sqrt(1-t*t)}const _M=["duration","bounce"],LM=["stiffness","damping","mass"];function rb(e,t){return t.some(n=>e[n]!==void 0)}function NM(e){let t={velocity:qe.velocity,stiffness:qe.stiffness,damping:qe.damping,mass:qe.mass,isResolvedFromDuration:!1,...e};if(!rb(e,LM)&&rb(e,_M))if(e.visualDuration){const n=e.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,a=2*Oi(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:qe.mass,stiffness:r,damping:a}}else{const n=MM(e);t={...t,...n,mass:qe.mass},t.isResolvedFromDuration=!0}return t}function bd(e=qe.visualDuration,t=qe.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:r}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:u,mass:d,duration:f,velocity:h,isResolvedFromDuration:m}=NM({...n,velocity:-Sn(n.velocity||0)}),p=h||0,b=u/(2*Math.sqrt(l*d)),S=o-a,g=Sn(Math.sqrt(l/d)),y=Math.abs(S)<5;i||(i=y?qe.restSpeed.granular:qe.restSpeed.default),r||(r=y?qe.restDelta.granular:qe.restDelta.default);let x;if(b<1){const A=Lp(g,b);x=E=>{const j=Math.exp(-b*g*E);return o-j*((p+b*g*S)/A*Math.sin(A*E)+S*Math.cos(A*E))}}else if(b===1)x=A=>o-Math.exp(-g*A)*(S+(p+g*S)*A);else{const A=g*Math.sqrt(b*b-1);x=E=>{const j=Math.exp(-b*g*E),k=Math.min(A*E,300);return o-j*((p+b*g*S)*Math.sinh(k)+A*S*Math.cosh(k))/A}}const v={calculatedDuration:m&&f||null,next:A=>{const E=x(A);if(m)s.done=A>=f;else{let j=A===0?p:0;b<1&&(j=A===0?ti(p):OT(x,A,E));const k=Math.abs(j)<=i,O=Math.abs(o-E)<=r;s.done=k&&O}return s.value=s.done?o:E,s},toString:()=>{const A=Math.min(Ig(v),xd),E=MT(j=>v.next(A*j).value,A,30);return A+"ms "+E},toTransition:()=>{}};return v}bd.applyToOptions=e=>{const t=$M(e,100,bd);return e.ease=t.ease,e.duration=ti(t.duration),e.type="keyframes",e};function Np({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},m=k=>s!==void 0&&k<s||l!==void 0&&k>l,p=k=>s===void 0?l:l===void 0||Math.abs(s-k)<Math.abs(l-k)?s:l;let b=n*t;const S=f+b,g=o===void 0?S:o(S);g!==S&&(b=g-f);const y=k=>-b*Math.exp(-k/i),x=k=>g+y(k),v=k=>{const O=y(k),_=x(k);h.done=Math.abs(O)<=u,h.value=h.done?g:_};let A,E;const j=k=>{m(h.value)&&(A=k,E=bd({keyframes:[h.value,p(h.value)],velocity:OT(x,k,h.value),damping:r,stiffness:a,restDelta:u,restSpeed:d}))};return j(0),{calculatedDuration:null,next:k=>{let O=!1;return!E&&A===void 0&&(O=!0,v(k),j(k)),A!==void 0&&k>=A?E.next(k-A):(!O&&v(k),h)}}}function BM(e,t,n){const i=[],r=n||Di.mix||zT,a=e.length-1;for(let o=0;o<a;o++){let s=r(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||jn:t;s=tc(l,s)}i.push(s)}return i}function UM(e,t,{clamp:n=!0,ease:i,mixer:r}={}){const a=e.length;if(Vg(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=BM(t,i,r),l=s.length,u=d=>{if(o&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const h=Cl(e[f],e[f+1],d);return s[f](h)};return n?d=>u(Oi(e[0],e[a-1],d)):u}function VM(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=Cl(0,t,i);e.push(Ne(n,1,r))}}function PM(e){const t=[0];return VM(t,e.length-1),t}function HM(e,t){return e.map(n=>n*t)}function FM(e,t){return e.map(()=>t||wT).splice(0,e.length-1)}function Qs({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const r=eM(i)?i.map(Wx):Wx(i),a={done:!1,value:t[0]},o=HM(n&&n.length===t.length?n:PM(t),e),s=UM(o,t,{ease:Array.isArray(r)?r:FM(t,r)});return{calculatedDuration:e,next:l=>(a.value=s(l),a.done=l>=e,a)}}const qM=e=>e!==null;function Zg(e,{repeat:t,repeatType:n="loop"},i,r=1){const a=e.filter(qM),s=r<0||t&&n!=="loop"&&t%2===1?0:a.length-1;return!s||i===void 0?a[s]:i}const GM={decay:Np,inertia:Np,tween:Qs,keyframes:Qs,spring:bd};function DT(e){typeof e.type=="string"&&(e.type=GM[e.type])}class Jg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const YM=e=>e/100;class Wg extends Jg{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==Pt.now()&&this.tick(Pt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;DT(t);const{type:n=Qs,repeat:i=0,repeatDelay:r=0,repeatType:a,velocity:o=0}=t;let{keyframes:s}=t;const l=n||Qs;l!==Qs&&typeof s[0]!="number"&&(this.mixKeyframes=tc(YM,zT(s[0],s[1])),s=[0,100]);const u=l({...t,keyframes:s});a==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...s].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Ig(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:i,totalDuration:r,mixKeyframes:a,mirroredGenerator:o,resolvedDuration:s,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:u=0,keyframes:d,repeat:f,repeatType:h,repeatDelay:m,type:p,onUpdate:b,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-r/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let x=this.currentTime,v=i;if(f){const k=Math.min(this.currentTime,r)/s;let O=Math.floor(k),_=k%1;!_&&k>=1&&(_=1),_===1&&O--,O=Math.min(O,f+1),!!(O%2)&&(h==="reverse"?(_=1-_,m&&(_-=m/s)):h==="mirror"&&(v=o)),x=Oi(0,1,_)*s}const A=y?{done:!1,value:d[0]}:v.next(x);a&&(A.value=a(A.value));let{done:E}=A;!y&&l!==null&&(E=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return j&&p!==Np&&(A.value=Zg(d,this.options,S,this.speed)),b&&b(A.value),j&&this.finish(),A}then(t,n){return this.finished.then(t,n)}get duration(){return Sn(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Sn(t)}get time(){return Sn(this.currentTime)}set time(t){var n;t=ti(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Pt.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Sn(this.currentTime))}play(){var r,a;if(this.isStopped)return;const{driver:t=RM,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(a=(r=this.options).onPlay)==null||a.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Pt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function KM(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Pr=e=>e*180/Math.PI,Bp=e=>{const t=Pr(Math.atan2(e[1],e[0]));return Up(t)},XM={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Bp,rotateZ:Bp,skewX:e=>Pr(Math.atan(e[1])),skewY:e=>Pr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Up=e=>(e=e%360,e<0&&(e+=360),e),ab=Bp,ob=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),sb=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),QM={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ob,scaleY:sb,scale:e=>(ob(e)+sb(e))/2,rotateX:e=>Up(Pr(Math.atan2(e[6],e[5]))),rotateY:e=>Up(Pr(Math.atan2(-e[2],e[0]))),rotateZ:ab,rotate:ab,skewX:e=>Pr(Math.atan(e[4])),skewY:e=>Pr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Vp(e){return e.includes("scale")?1:0}function Pp(e,t){if(!e||e==="none")return Vp(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=QM,r=n;else{const s=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=XM,r=s}if(!r)return Vp(t);const a=i[t],o=r[1].split(",").map(ZM);return typeof a=="function"?a(o):o[a]}const IM=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Pp(n,t)};function ZM(e){return parseFloat(e.trim())}const rs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],as=new Set(rs),lb=e=>e===is||e===K,JM=new Set(["x","y","z"]),WM=rs.filter(e=>!JM.has(e));function eO(e){const t=[];return WM.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t}const na={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Pp(t,"x"),y:(e,{transform:t})=>Pp(t,"y")};na.translateX=na.x;na.translateY=na.y;const ia=new Set;let Hp=!1,Fp=!1,qp=!1;function _T(){if(Fp){const e=Array.from(ia).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),n=new Map;t.forEach(i=>{const r=eO(i);r.length&&(n.set(i,r),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([a,o])=>{var s;(s=i.getValue(a))==null||s.set(o)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Fp=!1,Hp=!1,ia.forEach(e=>e.complete(qp)),ia.clear()}function LT(){ia.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Fp=!0)})}function tO(){qp=!0,LT(),_T(),qp=!1}class ey{constructor(t,n,i,r,a,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=i,this.motionValue=r,this.element=a,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(ia.add(this),Hp||(Hp=!0,_e.read(LT),_e.resolveKeyframes(_T))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:i,motionValue:r}=this;if(t[0]===null){const a=r==null?void 0:r.get(),o=t[t.length-1];if(a!==void 0)t[0]=a;else if(i&&n){const s=i.readValue(n,o);s!=null&&(t[0]=s)}t[0]===void 0&&(t[0]=o),r&&a===void 0&&r.set(t[0])}KM(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ia.delete(this)}cancel(){this.state==="scheduled"&&(ia.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nO=e=>e.startsWith("--");function iO(e,t,n){nO(t)?e.style.setProperty(t,n):e.style[t]=n}const rO=Pg(()=>window.ScrollTimeline!==void 0),aO={};function oO(e,t){const n=Pg(e);return()=>aO[t]??n()}const NT=oO(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),$s=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,cb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:$s([0,.65,.55,1]),circOut:$s([.55,0,1,.45]),backIn:$s([.31,.01,.66,-.59]),backOut:$s([.33,1.53,.69,.99])};function BT(e,t){if(e)return typeof e=="function"?NT()?MT(e,t):"ease-out":ST(e)?$s(e):Array.isArray(e)?e.map(n=>BT(n,t)||cb.easeOut):cb[e]}function sO(e,t,n,{delay:i=0,duration:r=300,repeat:a=0,repeatType:o="loop",ease:s="easeOut",times:l}={},u=void 0){const d={[t]:n};l&&(d.offset=l);const f=BT(s,r);Array.isArray(f)&&(d.easing=f);const h={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"};return u&&(h.pseudoElement=u),e.animate(d,h)}function UT(e){return typeof e=="function"&&"applyToOptions"in e}function lO({type:e,...t}){return UT(e)&&NT()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class cO extends Jg{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:i,keyframes:r,pseudoElement:a,allowFlatten:o=!1,finalKeyframe:s,onComplete:l}=t;this.isPseudoElement=!!a,this.allowFlatten=o,this.options=t,Vg(typeof t.type!="string");const u=lO(t);this.animation=sO(n,i,r,u,a),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const d=Zg(r,this.options,s,this.speed);this.updateMotionValue?this.updateMotionValue(d):iO(n,i,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,i;const t=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Sn(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Sn(t)}get time(){return Sn(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=ti(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&rO()?(this.animation.timeline=t,jn):n(this)}}const VT={anticipate:xT,backInOut:yT,circInOut:vT};function uO(e){return e in VT}function dO(e){typeof e.ease=="string"&&uO(e.ease)&&(e.ease=VT[e.ease])}const ub=10;class fO extends cO{constructor(t){dO(t),DT(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:i,onComplete:r,element:a,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const s=new Wg({...o,autoplay:!1}),l=ti(this.finishedTime??this.time);n.setWithVelocity(s.sample(l-ub).value,s.sample(l).value,ub),s.stop()}}const db=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Sr.test(e)||e==="0")&&!e.startsWith("url("));function hO(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function mO(e,t,n,i){const r=e[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=db(r,t),s=db(a,t);return!o||!s?!1:hO(e)||(n==="spring"||UT(n))&&i}function Gp(e){e.duration=0,e.type="keyframes"}const pO=new Set(["opacity","clipPath","filter","transform"]),gO=Pg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function yO(e){var d;const{motionValue:t,name:n,repeatDelay:i,repeatType:r,damping:a,type:o}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=t.owner.getProps();return gO()&&n&&pO.has(n)&&(n!=="transform"||!u)&&!l&&!i&&r!=="mirror"&&a!==0&&o!=="inertia"}const xO=40;class bO extends Jg{constructor({autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:a=0,repeatType:o="loop",keyframes:s,name:l,motionValue:u,element:d,...f}){var p;super(),this.stop=()=>{var b,S;this._animation&&(this._animation.stop(),(b=this.stopTimeline)==null||b.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=Pt.now();const h={autoplay:t,delay:n,type:i,repeat:r,repeatDelay:a,repeatType:o,name:l,motionValue:u,element:d,...f},m=(d==null?void 0:d.KeyframeResolver)||ey;this.keyframeResolver=new m(s,(b,S,g)=>this.onKeyframesResolved(b,S,h,!g),l,u,d),(p=this.keyframeResolver)==null||p.scheduleResolve()}onKeyframesResolved(t,n,i,r){this.keyframeResolver=void 0;const{name:a,type:o,velocity:s,delay:l,isHandoff:u,onUpdate:d}=i;this.resolvedAt=Pt.now(),mO(t,a,o,s)||((Di.instantAnimations||!l)&&(d==null||d(Zg(t,i,n))),t[0]=t[t.length-1],Gp(i),i.repeat=0);const h={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>xO?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:t},m=!u&&yO(h)?new fO({...h,element:h.motionValue.owner.current}):new Wg(h);m.finished.then(()=>this.notifyFinished()).catch(jn),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),tO()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const vO=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wO(e){const t=vO.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${n??i}`,r]}function PT(e,t,n=1){const[i,r]=wO(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);if(a){const o=a.trim();return cT(o)?parseFloat(o):o}return Yg(r)?PT(r,t,n+1):r}function ty(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const HT=new Set(["width","height","top","left","right","bottom",...rs]),SO={test:e=>e==="auto",parse:e=>e},FT=e=>t=>t.test(e),qT=[is,K,ni,Hi,hM,fM,SO],fb=e=>qT.find(FT(e));function CO(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||dT(e):!0}const TO=new Set(["brightness","contrast","saturate","opacity"]);function jO(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Kg)||[];if(!i)return e;const r=n.replace(i,"");let a=TO.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+r+")"}const EO=/\b([a-z-]*)\(.*?\)/gu,Yp={...Sr,getAnimatableNone:e=>{const t=e.match(EO);return t?t.map(jO).join(" "):e}},hb={...is,transform:Math.round},AO={rotate:Hi,rotateX:Hi,rotateY:Hi,rotateZ:Hi,scale:Uc,scaleX:Uc,scaleY:Uc,scaleZ:Uc,skew:Hi,skewX:Hi,skewY:Hi,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:Tl,originX:eb,originY:eb,originZ:K},ny={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,backgroundPositionX:K,backgroundPositionY:K,...AO,zIndex:hb,fillOpacity:Tl,strokeOpacity:Tl,numOctaves:hb},kO={...ny,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:Yp,WebkitFilter:Yp},GT=e=>kO[e];function YT(e,t){let n=GT(e);return n!==Yp&&(n=Sr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const RO=new Set(["auto","none","0"]);function $O(e,t,n){let i=0,r;for(;i<e.length&&!r;){const a=e[i];typeof a=="string"&&!RO.has(a)&&jl(a).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=YT(n,r)}class zO extends ey{constructor(t,n,i,r,a){super(t,n,i,r,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Yg(u))){const d=PT(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!HT.has(i)||t.length!==2)return;const[r,a]=t,o=fb(r),s=fb(a);if(o!==s)if(lb(o)&&lb(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else na[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,i=[];for(let r=0;r<t.length;r++)(t[r]===null||CO(t[r]))&&i.push(r);i.length&&$O(t,i,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=na[i](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&t.getValue(i,r).jump(r,!1)}measureEndState(){var s;const{element:t,name:n,unresolvedKeyframes:i}=this;if(!t||!t.current)return;const r=t.getValue(n);r&&r.jump(this.measuredOrigin,!1);const a=i.length-1,o=i[a];i[a]=na[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(s=this.removedTransforms)!=null&&s.length&&this.removedTransforms.forEach(([l,u])=>{t.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function KT(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const r=document.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}const XT=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function QT(e){return uT(e)&&"offsetHeight"in e}const mb=30,MO=e=>!isNaN(parseFloat(e));class OO{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var a;const r=Pt.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Pt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=MO(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Hg);const i=this.events[t].add(n);return t==="change"?()=>{i(),_e.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Pt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>mb)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,mb);return fT(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Lo(e,t){return new OO(e,t)}const{schedule:iy}=CT(queueMicrotask,!1),Dn={x:!1,y:!1};function IT(){return Dn.x||Dn.y}function DO(e){return e==="x"||e==="y"?Dn[e]?null:(Dn[e]=!0,()=>{Dn[e]=!1}):Dn.x||Dn.y?null:(Dn.x=Dn.y=!0,()=>{Dn.x=Dn.y=!1})}function ZT(e,t){const n=KT(e),i=new AbortController,r={passive:!0,...t,signal:i.signal};return[n,r,()=>i.abort()]}function pb(e){return!(e.pointerType==="touch"||IT())}function _O(e,t,n={}){const[i,r,a]=ZT(e,n),o=s=>{if(!pb(s))return;const{target:l}=s,u=t(l,s);if(typeof u!="function"||!l)return;const d=f=>{pb(f)&&(u(f),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,r)};return i.forEach(s=>{s.addEventListener("pointerenter",o,r)}),a}const JT=(e,t)=>t?e===t?!0:JT(e,t.parentElement):!1,ry=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,LO=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function NO(e){return LO.has(e.tagName)||e.tabIndex!==-1}const Au=new WeakSet;function gb(e){return t=>{t.key==="Enter"&&e(t)}}function qh(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const BO=(e,t)=>{const n=e.currentTarget;if(!n)return;const i=gb(()=>{if(Au.has(n))return;qh(n,"down");const r=gb(()=>{qh(n,"up")}),a=()=>qh(n,"cancel");n.addEventListener("keyup",r,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",i,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),t)};function yb(e){return ry(e)&&!IT()}function UO(e,t,n={}){const[i,r,a]=ZT(e,n),o=s=>{const l=s.currentTarget;if(!yb(s))return;Au.add(l);const u=t(l,s),d=(m,p)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),Au.has(l)&&Au.delete(l),yb(m)&&typeof u=="function"&&u(m,{success:p})},f=m=>{d(m,l===window||l===document||n.useGlobalTarget||JT(l,m.target))},h=m=>{d(m,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",h,r)};return i.forEach(s=>{(n.useGlobalTarget?window:s).addEventListener("pointerdown",o,r),QT(s)&&(s.addEventListener("focus",u=>BO(u,r)),!NO(s)&&!s.hasAttribute("tabindex")&&(s.tabIndex=0))}),a}function WT(e){return uT(e)&&"ownerSVGElement"in e}function VO(e){return WT(e)&&e.tagName==="svg"}const Et=e=>!!(e&&e.getVelocity),PO=[...qT,Ze,Sr],HO=e=>PO.find(FT(e)),ay=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function xb(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function FO(...e){return t=>{let n=!1;const i=e.map(r=>{const a=xb(r,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let r=0;r<i.length;r++){const a=i[r];typeof a=="function"?a():xb(e[r],null)}}}}function qO(...e){return w.useCallback(FO(...e),e)}class GO extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const i=n.offsetParent,r=QT(i)&&i.offsetWidth||0,a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left}return null}componentDidUpdate(){}render(){return this.props.children}}function YO({children:e,isPresent:t,anchorX:n,root:i}){const r=w.useId(),a=w.useRef(null),o=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:s}=w.useContext(ay),l=qO(a,e==null?void 0:e.ref);return w.useInsertionEffect(()=>{const{width:u,height:d,top:f,left:h,right:m}=o.current;if(t||!a.current||!u||!d)return;const p=n==="left"?`left: ${h}`:`right: ${m}`;a.current.dataset.motionPopId=r;const b=document.createElement("style");s&&(b.nonce=s);const S=i??document.head;return S.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            ${p}px !important;
            top: ${f}px !important;
          }
        `),()=>{S.contains(b)&&S.removeChild(b)}},[t]),c.jsx(GO,{isPresent:t,childRef:a,sizeRef:o,children:w.cloneElement(e,{ref:l})})}const KO=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:a,mode:o,anchorX:s,root:l})=>{const u=Lg(XO),d=w.useId();let f=!0,h=w.useMemo(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:r,onExitComplete:m=>{u.set(m,!0);for(const p of u.values())if(!p)return;i&&i()},register:m=>(u.set(m,!1),()=>u.delete(m))}),[n,u,i]);return a&&f&&(h={...h}),w.useMemo(()=>{u.forEach((m,p)=>u.set(p,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&i&&i()},[n]),o==="popLayout"&&(e=c.jsx(YO,{isPresent:n,anchorX:s,root:l,children:e})),c.jsx(df.Provider,{value:h,children:e})};function XO(){return new Map}function e3(e=!0){const t=w.useContext(df);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=t,a=w.useId();w.useEffect(()=>{if(e)return r(a)},[e]);const o=w.useCallback(()=>e&&i&&i(a),[a,i,e]);return!n&&i?[!1,o]:[!0]}const Vc=e=>e.key||"";function bb(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const t3=({children:e,custom:t,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:a="sync",propagate:o=!1,anchorX:s="left",root:l})=>{const[u,d]=e3(o),f=w.useMemo(()=>bb(e),[e]),h=o&&!u?[]:f.map(Vc),m=w.useRef(!0),p=w.useRef(f),b=Lg(()=>new Map),[S,g]=w.useState(f),[y,x]=w.useState(f);lT(()=>{m.current=!1,p.current=f;for(let E=0;E<y.length;E++){const j=Vc(y[E]);h.includes(j)?b.delete(j):b.get(j)!==!0&&b.set(j,!1)}},[y,h.length,h.join("-")]);const v=[];if(f!==S){let E=[...f];for(let j=0;j<y.length;j++){const k=y[j],O=Vc(k);h.includes(O)||(E.splice(j,0,k),v.push(k))}return a==="wait"&&v.length&&(E=v),x(bb(E)),g(f),null}const{forceRender:A}=w.useContext(_g);return c.jsx(c.Fragment,{children:y.map(E=>{const j=Vc(E),k=o&&!u?!1:f===y||h.includes(j),O=()=>{if(b.has(j))b.set(j,!0);else return;let _=!0;b.forEach(P=>{P||(_=!1)}),_&&(A==null||A(),x(p.current),o&&(d==null||d()),i&&i())};return c.jsx(KO,{isPresent:k,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:r,mode:a,root:l,onExitComplete:k?void 0:O,anchorX:s,children:E},j)})})},n3=w.createContext({strict:!1}),vb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},No={};for(const e in vb)No[e]={isEnabled:t=>vb[e].some(n=>!!t[n])};function QO(e){for(const t in e)No[t]={...No[t],...e[t]}}const IO=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function vd(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||IO.has(e)}let i3=e=>!vd(e);function ZO(e){typeof e=="function"&&(i3=t=>t.startsWith("on")?!vd(t):e(t))}try{ZO(require("@emotion/is-prop-valid").default)}catch{}function JO(e,t,n){const i={};for(const r in e)r==="values"&&typeof e.values=="object"||(i3(r)||n===!0&&vd(r)||!t&&!vd(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}const ff=w.createContext({});function hf(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function El(e){return typeof e=="string"||Array.isArray(e)}const oy=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sy=["initial",...oy];function mf(e){return hf(e.animate)||sy.some(t=>El(e[t]))}function r3(e){return!!(mf(e)||e.variants)}function WO(e,t){if(mf(e)){const{initial:n,animate:i}=e;return{initial:n===!1||El(n)?n:void 0,animate:El(i)?i:void 0}}return e.inherit!==!1?t:{}}function eD(e){const{initial:t,animate:n}=WO(e,w.useContext(ff));return w.useMemo(()=>({initial:t,animate:n}),[wb(t),wb(n)])}function wb(e){return Array.isArray(e)?e.join(" "):e}const Al={};function tD(e){for(const t in e)Al[t]=e[t],Gg(t)&&(Al[t].isCSSVariable=!0)}function a3(e,{layout:t,layoutId:n}){return as.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Al[e]||e==="opacity")}const nD={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iD=rs.length;function rD(e,t,n){let i="",r=!0;for(let a=0;a<iD;a++){const o=rs[a],s=e[o];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(o.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=XT(s,ny[o]);if(!l){r=!1;const d=nD[o]||o;i+=`${d}(${u}) `}n&&(t[o]=u)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}function ly(e,t,n){const{style:i,vars:r,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const u=t[l];if(as.has(l)){o=!0;continue}else if(Gg(l)){r[l]=u;continue}else{const d=XT(u,ny[l]);l.startsWith("origin")?(s=!0,a[l]=d):i[l]=d}}if(t.transform||(o||n?i.transform=rD(t,e.transform,n):i.transform&&(i.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:d=0}=a;i.transformOrigin=`${l} ${u} ${d}`}}const cy=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function o3(e,t,n){for(const i in t)!Et(t[i])&&!a3(i,n)&&(e[i]=t[i])}function aD({transformTemplate:e},t){return w.useMemo(()=>{const n=cy();return ly(n,t,e),Object.assign({},n.vars,n.style)},[t])}function oD(e,t){const n=e.style||{},i={};return o3(i,n,e),Object.assign(i,aD(e,t)),i}function sD(e,t){const n={},i=oD(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const lD={offset:"stroke-dashoffset",array:"stroke-dasharray"},cD={offset:"strokeDashoffset",array:"strokeDasharray"};function uD(e,t,n=1,i=0,r=!0){e.pathLength=1;const a=r?lD:cD;e[a.offset]=K.transform(-i);const o=K.transform(t),s=K.transform(n);e[a.array]=`${o} ${s}`}function s3(e,{attrX:t,attrY:n,attrScale:i,pathLength:r,pathSpacing:a=1,pathOffset:o=0,...s},l,u,d){if(ly(e,s,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:h}=e;f.transform&&(h.transform=f.transform,delete f.transform),(h.transform||f.transformOrigin)&&(h.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),h.transform&&(h.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&uD(f,r,a,o,!1)}const l3=()=>({...cy(),attrs:{}}),c3=e=>typeof e=="string"&&e.toLowerCase()==="svg";function dD(e,t,n,i){const r=w.useMemo(()=>{const a=l3();return s3(a,t,c3(i),e.transformTemplate,e.style),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};o3(a,e.style,e),r.style={...a,...r.style}}return r}const fD=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function uy(e){return typeof e!="string"||e.includes("-")?!1:!!(fD.indexOf(e)>-1||/[A-Z]/u.test(e))}function hD(e,t,n,{latestValues:i},r,a=!1){const s=(uy(e)?dD:sD)(t,i,r,e),l=JO(t,typeof e=="string",a),u=e!==w.Fragment?{...l,...s,ref:n}:{},{children:d}=t,f=w.useMemo(()=>Et(d)?d.get():d,[d]);return w.createElement(e,{...u,children:f})}function Sb(e){const t=[{},{}];return e==null||e.values.forEach((n,i)=>{t[0][i]=n.get(),t[1][i]=n.getVelocity()}),t}function dy(e,t,n,i){if(typeof t=="function"){const[r,a]=Sb(i);t=t(n!==void 0?n:e.custom,r,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[r,a]=Sb(i);t=t(n!==void 0?n:e.custom,r,a)}return t}function ku(e){return Et(e)?e.get():e}function mD({scrapeMotionValuesFromProps:e,createRenderState:t},n,i,r){return{latestValues:pD(n,i,r,e),renderState:t()}}function pD(e,t,n,i){const r={},a=i(e,{});for(const h in a)r[h]=ku(a[h]);let{initial:o,animate:s}=e;const l=mf(e),u=r3(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?s:o;if(f&&typeof f!="boolean"&&!hf(f)){const h=Array.isArray(f)?f:[f];for(let m=0;m<h.length;m++){const p=dy(e,h[m]);if(p){const{transitionEnd:b,transition:S,...g}=p;for(const y in g){let x=g[y];if(Array.isArray(x)){const v=d?x.length-1:0;x=x[v]}x!==null&&(r[y]=x)}for(const y in b)r[y]=b[y]}}}return r}const u3=e=>(t,n)=>{const i=w.useContext(ff),r=w.useContext(df),a=()=>mD(e,t,i,r);return n?a():Lg(a)};function fy(e,t,n){var a;const{style:i}=e,r={};for(const o in i)(Et(i[o])||t.style&&Et(t.style[o])||a3(o,e)||((a=n==null?void 0:n.getValue(o))==null?void 0:a.liveStyle)!==void 0)&&(r[o]=i[o]);return r}const gD=u3({scrapeMotionValuesFromProps:fy,createRenderState:cy});function d3(e,t,n){const i=fy(e,t,n);for(const r in e)if(Et(e[r])||Et(t[r])){const a=rs.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[a]=e[r]}return i}const yD=u3({scrapeMotionValuesFromProps:d3,createRenderState:l3}),xD=Symbol.for("motionComponentSymbol");function Xa(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function bD(e,t,n){return w.useCallback(i=>{i&&e.onMount&&e.onMount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):Xa(n)&&(n.current=i))},[t])}const hy=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),vD="framerAppearId",f3="data-"+hy(vD),h3=w.createContext({});function wD(e,t,n,i,r){var b,S;const{visualElement:a}=w.useContext(ff),o=w.useContext(n3),s=w.useContext(df),l=w.useContext(ay).reducedMotion,u=w.useRef(null);i=i||o.renderer,!u.current&&i&&(u.current=i(e,{visualState:t,parent:a,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:l}));const d=u.current,f=w.useContext(h3);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&SD(u.current,n,r,f);const h=w.useRef(!1);w.useInsertionEffect(()=>{d&&h.current&&d.update(n,s)});const m=n[f3],p=w.useRef(!!m&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,m))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,m)));return lT(()=>{d&&(h.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),d.scheduleRenderMicrotask(),p.current&&d.animationState&&d.animationState.animateChanges())}),w.useEffect(()=>{d&&(!p.current&&d.animationState&&d.animationState.animateChanges(),p.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)==null||g.call(window,m)}),p.current=!1),d.enteringChildren=void 0)}),d}function SD(e,t,n,i){const{layoutId:r,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:m3(e.parent)),e.projection.setOptions({layoutId:r,layout:a,alwaysMeasureLayout:!!o||s&&Xa(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:u})}function m3(e){if(e)return e.options.allowProjection!==!1?e.projection:m3(e.parent)}function Gh(e,{forwardMotionProps:t=!1}={},n,i){n&&QO(n);const r=uy(e)?yD:gD;function a(s,l){let u;const d={...w.useContext(ay),...s,layoutId:CD(s)},{isStatic:f}=d,h=eD(s),m=r(s,f);if(!f&&Ng){TD();const p=jD(d);u=p.MeasureLayout,h.visualElement=wD(e,m,d,i,p.ProjectionNode)}return c.jsxs(ff.Provider,{value:h,children:[u&&h.visualElement?c.jsx(u,{visualElement:h.visualElement,...d}):null,hD(e,s,bD(m,h.visualElement,l),m,f,t)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const o=w.forwardRef(a);return o[xD]=e,o}function CD({layoutId:e}){const t=w.useContext(_g).id;return t&&e!==void 0?t+"-"+e:e}function TD(e,t){w.useContext(n3).strict}function jD(e){const{drag:t,layout:n}=No;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function ED(e,t){if(typeof Proxy>"u")return Gh;const n=new Map,i=(a,o)=>Gh(a,o,e,t),r=(a,o)=>i(a,o);return new Proxy(r,{get:(a,o)=>o==="create"?i:(n.has(o)||n.set(o,Gh(o,void 0,e,t)),n.get(o))})}function p3({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function AD({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function kD(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Yh(e){return e===void 0||e===1}function Kp({scale:e,scaleX:t,scaleY:n}){return!Yh(e)||!Yh(t)||!Yh(n)}function Lr(e){return Kp(e)||g3(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function g3(e){return Cb(e.x)||Cb(e.y)}function Cb(e){return e&&e!=="0%"}function wd(e,t,n){const i=e-n,r=t*i;return n+r}function Tb(e,t,n,i,r){return r!==void 0&&(e=wd(e,r,i)),wd(e,n,i)+t}function Xp(e,t=0,n=1,i,r){e.min=Tb(e.min,t,n,i,r),e.max=Tb(e.max,t,n,i,r)}function y3(e,{x:t,y:n}){Xp(e.x,t.translate,t.scale,t.originPoint),Xp(e.y,n.translate,n.scale,n.originPoint)}const jb=.999999999999,Eb=1.0000000000001;function RD(e,t,n,i=!1){const r=n.length;if(!r)return;t.x=t.y=1;let a,o;for(let s=0;s<r;s++){a=n[s],o=a.projectionDelta;const{visualElement:l}=a.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ia(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,y3(e,o)),i&&Lr(a.latestValues)&&Ia(e,a.latestValues))}t.x<Eb&&t.x>jb&&(t.x=1),t.y<Eb&&t.y>jb&&(t.y=1)}function Qa(e,t){e.min=e.min+t,e.max=e.max+t}function Ab(e,t,n,i,r=.5){const a=Ne(e.min,e.max,r);Xp(e,t,n,a,i)}function Ia(e,t){Ab(e.x,t.x,t.scaleX,t.scale,t.originX),Ab(e.y,t.y,t.scaleY,t.scale,t.originY)}function x3(e,t){return p3(kD(e.getBoundingClientRect(),t))}function $D(e,t,n){const i=x3(e,n),{scroll:r}=t;return r&&(Qa(i.x,r.offset.x),Qa(i.y,r.offset.y)),i}const kb=()=>({translate:0,scale:1,origin:0,originPoint:0}),Za=()=>({x:kb(),y:kb()}),Rb=()=>({min:0,max:0}),Ye=()=>({x:Rb(),y:Rb()}),Qp={current:null},b3={current:!1};function zD(){if(b3.current=!0,!!Ng)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Qp.current=e.matches;e.addEventListener("change",t),t()}else Qp.current=!1}const MD=new WeakMap;function OD(e,t,n){for(const i in t){const r=t[i],a=n[i];if(Et(r))e.addValue(i,r);else if(Et(a))e.addValue(i,Lo(r,{owner:e}));else if(a!==r)if(e.hasValue(i)){const o=e.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=e.getStaticValue(i);e.addValue(i,Lo(o!==void 0?o:r,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const $b=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class DD{scrapeMotionValuesFromProps(t,n,i){return{}}constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ey,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=Pt.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,_e.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=mf(n),this.isVariantNode=r3(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const m=f[h];l[h]!==void 0&&Et(m)&&m.set(l[h])}}mount(t){var n;this.current=t,MD.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),b3.current||zD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qp.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),wr(this.notifyUpdate),wr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=as.has(t);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&_e.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{r(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in No){const n=No[t];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[t]&&r&&i(this.props)&&(this.features[t]=new r(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ye()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<$b.length;i++){const r=$b[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const a="on"+r,o=t[a];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=OD(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const i=this.values.get(t);n!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=Lo(n===null?void 0:n,{owner:this}),this.addValue(t,i)),i}readValue(t,n){let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(cT(i)||dT(i))?i=parseFloat(i):!HO(i)&&Sr.test(n)&&(i=YT(t,n)),this.setBaseTarget(t,Et(i)?i.get():i)),Et(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var a;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=dy(this.props,n,(a=this.presenceContext)==null?void 0:a.custom);o&&(i=o[t])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!Et(r)?r:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Hg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){iy.render(this.render)}}class v3 extends DD{constructor(){super(...arguments),this.KeyframeResolver=zO}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Et(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function w3(e,{style:t,vars:n},i,r){const a=e.style;let o;for(o in t)a[o]=t[o];r==null||r.applyProjectionStyles(a,i);for(o in n)a.setProperty(o,n[o])}function _D(e){return window.getComputedStyle(e)}class LD extends v3{constructor(){super(...arguments),this.type="html",this.renderInstance=w3}readValueFromInstance(t,n){var i;if(as.has(n))return(i=this.projection)!=null&&i.isProjecting?Vp(n):IM(t,n);{const r=_D(t),a=(Gg(n)?r.getPropertyValue(n):r[n])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:n}){return x3(t,n)}build(t,n,i){ly(t,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,n,i){return fy(t,n,i)}}const S3=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ND(e,t,n,i){w3(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(S3.has(r)?r:hy(r),t.attrs[r])}class BD extends v3{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ye}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(as.has(n)){const i=GT(n);return i&&i.default||0}return n=S3.has(n)?n:hy(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,i){return d3(t,n,i)}build(t,n,i){s3(t,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,n,i,r){ND(t,n,i,r)}mount(t){this.isSVGTag=c3(t.tagName),super.mount(t)}}const UD=(e,t)=>uy(e)?new BD(t):new LD(t,{allowProjection:e!==w.Fragment});function ao(e,t,n){const i=e.getProps();return dy(i,t,n!==void 0?n:i.custom,e)}const Ip=e=>Array.isArray(e);function VD(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Lo(n))}function PD(e){return Ip(e)?e[e.length-1]||0:e}function HD(e,t){const n=ao(e,t);let{transitionEnd:i={},transition:r={},...a}=n||{};a={...a,...i};for(const o in a){const s=PD(a[o]);VD(e,o,s)}}function FD(e){return!!(Et(e)&&e.add)}function Zp(e,t){const n=e.getValue("willChange");if(FD(n))return n.add(t);if(!n&&Di.WillChange){const i=new Di.WillChange("auto");e.addValue("willChange",i),i.add(t)}}function C3(e){return e.props[f3]}const qD=e=>e!==null;function GD(e,{repeat:t,repeatType:n="loop"},i){const r=e.filter(qD),a=t&&n!=="loop"&&t%2===1?0:r.length-1;return r[a]}const YD={type:"spring",stiffness:500,damping:25,restSpeed:10},KD=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),XD={type:"keyframes",duration:.8},QD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ID=(e,{keyframes:t})=>t.length>2?XD:as.has(e)?e.startsWith("scale")?KD(t[1]):YD:QD;function ZD({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:a,repeatType:o,repeatDelay:s,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const my=(e,t,n,i={},r,a)=>o=>{const s=ty(i,e)||{},l=s.delay||i.delay||0;let{elapsed:u=0}=i;u=u-ti(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:h=>{t.set(h),s.onUpdate&&s.onUpdate(h)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:r};ZD(s)||Object.assign(d,ID(e,d)),d.duration&&(d.duration=ti(d.duration)),d.repeatDelay&&(d.repeatDelay=ti(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Gp(d),d.delay===0&&(f=!0)),(Di.instantAnimations||Di.skipAnimations)&&(f=!0,Gp(d),d.delay=0),d.allowFlatten=!s.type&&!s.ease,f&&!a&&t.get()!==void 0){const h=GD(d.keyframes,s);if(h!==void 0){_e.update(()=>{d.onUpdate(h),d.onComplete()});return}}return s.isSync?new Wg(d):new bO(d)};function JD({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function T3(e,t,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;i&&(a=i);const l=[],u=r&&e.animationState&&e.animationState.getState()[r];for(const d in s){const f=e.getValue(d,e.latestValues[d]??null),h=s[d];if(h===void 0||u&&JD(u,d))continue;const m={delay:n,...ty(a||{},d)},p=f.get();if(p!==void 0&&!f.isAnimating&&!Array.isArray(h)&&h===p&&!m.velocity)continue;let b=!1;if(window.MotionHandoffAnimation){const g=C3(e);if(g){const y=window.MotionHandoffAnimation(g,d,_e);y!==null&&(m.startTime=y,b=!0)}}Zp(e,d),f.start(my(d,f,h,e.shouldReduceMotion&&HT.has(d)?{type:!1}:m,e,b));const S=f.animation;S&&l.push(S)}return o&&Promise.all(l).then(()=>{_e.update(()=>{o&&HD(e,o)})}),l}function j3(e,t,n,i=0,r=1){const a=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),o=e.size,s=(o-1)*i;return typeof n=="function"?n(a,o):r===1?a*i:s-a*i}function Jp(e,t,n={}){var l;const i=ao(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const a=i?()=>Promise.all(T3(e,i,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=r;return WD(e,t,u,d,f,h,n)}:()=>Promise.resolve(),{when:s}=r;if(s){const[u,d]=s==="beforeChildren"?[a,o]:[o,a];return u().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function WD(e,t,n=0,i=0,r=0,a=1,o){const s=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),s.push(Jp(l,t,{...o,delay:n+(typeof i=="function"?0:i)+j3(e.variantChildren,l,i,r,a)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(s)}function e7(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const r=t.map(a=>Jp(e,a,n));i=Promise.all(r)}else if(typeof t=="string")i=Jp(e,t,n);else{const r=typeof t=="function"?ao(e,t,n.custom):t;i=Promise.all(T3(e,r,n))}return i.then(()=>{e.notify("AnimationComplete",t)})}function E3(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}const t7=sy.length;function A3(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?A3(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<t7;n++){const i=sy[n],r=e.props[i];(El(r)||r===!1)&&(t[i]=r)}return t}const n7=[...oy].reverse(),i7=oy.length;function r7(e){return t=>Promise.all(t.map(({animation:n,options:i})=>e7(e,n,i)))}function a7(e){let t=r7(e),n=zb(),i=!0;const r=l=>(u,d)=>{var h;const f=ao(e,d,l==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(f){const{transition:m,transitionEnd:p,...b}=f;u={...u,...b,...p}}return u};function a(l){t=l(e)}function o(l){const{props:u}=e,d=A3(e.parent)||{},f=[],h=new Set;let m={},p=1/0;for(let S=0;S<i7;S++){const g=n7[S],y=n[g],x=u[g]!==void 0?u[g]:d[g],v=El(x),A=g===l?y.isActive:null;A===!1&&(p=S);let E=x===d[g]&&x!==u[g]&&v;if(E&&i&&e.manuallyAnimateOnMount&&(E=!1),y.protectedKeys={...m},!y.isActive&&A===null||!x&&!y.prevProp||hf(x)||typeof x=="boolean")continue;const j=o7(y.prevProp,x);let k=j||g===l&&y.isActive&&!E&&v||S>p&&v,O=!1;const _=Array.isArray(x)?x:[x];let P=_.reduce(r(g),{});A===!1&&(P={});const{prevResolvedValues:T={}}=y,V={...T,...P},N=U=>{k=!0,h.has(U)&&(O=!0,h.delete(U)),y.needsAnimating[U]=!0;const z=e.getValue(U);z&&(z.liveStyle=!1)};for(const U in V){const z=P[U],B=T[U];if(m.hasOwnProperty(U))continue;let Y=!1;Ip(z)&&Ip(B)?Y=!E3(z,B):Y=z!==B,Y?z!=null?N(U):h.add(U):z!==void 0&&h.has(U)?N(U):y.protectedKeys[U]=!0}y.prevProp=x,y.prevResolvedValues=P,y.isActive&&(m={...m,...P}),i&&e.blockInitialAnimation&&(k=!1);const q=E&&j;k&&(!q||O)&&f.push(..._.map(U=>{const z={type:g};if(typeof U=="string"&&i&&!q&&e.manuallyAnimateOnMount&&e.parent){const{parent:B}=e,Y=ao(B,U);if(B.enteringChildren&&Y){const{delayChildren:te}=Y.transition||{};z.delay=j3(B.enteringChildren,e,te)}}return{animation:U,options:z}}))}if(h.size){const S={};if(typeof u.initial!="boolean"){const g=ao(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(S.transition=g.transition)}h.forEach(g=>{const y=e.getBaseTarget(g),x=e.getValue(g);x&&(x.liveStyle=!0),S[g]=y??null}),f.push({animation:S})}let b=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(b=!1),i=!1,b?t(f):Promise.resolve()}function s(l,u){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(h=>{var m;return(m=h.animationState)==null?void 0:m.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=zb()}}}function o7(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!E3(t,e):!1}function $r(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zb(){return{animate:$r(!0),whileInView:$r(),whileHover:$r(),whileTap:$r(),whileDrag:$r(),whileFocus:$r(),exit:$r()}}class Ar{constructor(t){this.isMounted=!1,this.node=t}update(){}}class s7 extends Ar{constructor(t){super(t),t.animationState||(t.animationState=a7(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();hf(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let l7=0;class c7 extends Ar{constructor(){super(...arguments),this.id=l7++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const r=this.node.animationState.setActive("exit",!t);n&&!t&&r.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const u7={animation:{Feature:s7},exit:{Feature:c7}};function kl(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}function rc(e){return{point:{x:e.pageX,y:e.pageY}}}const d7=e=>t=>ry(t)&&e(t,rc(t));function Is(e,t,n,i){return kl(e,t,d7(n),i)}const k3=1e-4,f7=1-k3,h7=1+k3,R3=.01,m7=0-R3,p7=0+R3;function zt(e){return e.max-e.min}function g7(e,t,n){return Math.abs(e-t)<=n}function Mb(e,t,n,i=.5){e.origin=i,e.originPoint=Ne(t.min,t.max,e.origin),e.scale=zt(n)/zt(t),e.translate=Ne(n.min,n.max,e.origin)-e.originPoint,(e.scale>=f7&&e.scale<=h7||isNaN(e.scale))&&(e.scale=1),(e.translate>=m7&&e.translate<=p7||isNaN(e.translate))&&(e.translate=0)}function Zs(e,t,n,i){Mb(e.x,t.x,n.x,i?i.originX:void 0),Mb(e.y,t.y,n.y,i?i.originY:void 0)}function Ob(e,t,n){e.min=n.min+t.min,e.max=e.min+zt(t)}function y7(e,t,n){Ob(e.x,t.x,n.x),Ob(e.y,t.y,n.y)}function Db(e,t,n){e.min=t.min-n.min,e.max=e.min+zt(t)}function Js(e,t,n){Db(e.x,t.x,n.x),Db(e.y,t.y,n.y)}function dn(e){return[e("x"),e("y")]}const $3=({current:e})=>e?e.ownerDocument.defaultView:null,_b=(e,t)=>Math.abs(e-t);function x7(e,t){const n=_b(e.x,t.x),i=_b(e.y,t.y);return Math.sqrt(n**2+i**2)}class z3{constructor(t,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:a=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Xh(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,p=x7(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!p)return;const{point:b}=h,{timestamp:S}=gt;this.history.push({...b,timestamp:S});const{onStart:g,onMove:y}=this.handlers;m||(g&&g(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,h)},this.handlePointerMove=(h,m)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Kh(m,this.transformPagePoint),_e.update(this.updatePoint,!0)},this.handlePointerUp=(h,m)=>{this.end();const{onEnd:p,onSessionEnd:b,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Xh(h.type==="pointercancel"?this.lastMoveEventInfo:Kh(m,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,g),b&&b(h,g)},!ry(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const s=rc(t),l=Kh(s,this.transformPagePoint),{point:u}=l,{timestamp:d}=gt;this.history=[{...u,timestamp:d}];const{onSessionStart:f}=n;f&&f(t,Xh(l,this.history)),this.removeListeners=tc(Is(this.contextWindow,"pointermove",this.handlePointerMove),Is(this.contextWindow,"pointerup",this.handlePointerUp),Is(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),wr(this.updatePoint)}}function Kh(e,t){return t?{point:t(e.point)}:e}function Lb(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Xh({point:e},t){return{point:e,delta:Lb(e,M3(t)),offset:Lb(e,b7(t)),velocity:v7(t,.1)}}function b7(e){return e[0]}function M3(e){return e[e.length-1]}function v7(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=M3(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>ti(t)));)n--;if(!i)return{x:0,y:0};const a=Sn(r.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const o={x:(r.x-i.x)/a,y:(r.y-i.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function w7(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?Ne(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?Ne(n,e,i.max):Math.min(e,n)),e}function Nb(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function S7(e,{top:t,left:n,bottom:i,right:r}){return{x:Nb(e.x,n,r),y:Nb(e.y,t,i)}}function Bb(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function C7(e,t){return{x:Bb(e.x,t.x),y:Bb(e.y,t.y)}}function T7(e,t){let n=.5;const i=zt(e),r=zt(t);return r>i?n=Cl(t.min,t.max-i,e.min):i>r&&(n=Cl(e.min,e.max-r,t.min)),Oi(0,1,n)}function j7(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Wp=.35;function E7(e=Wp){return e===!1?e=0:e===!0&&(e=Wp),{x:Ub(e,"left","right"),y:Ub(e,"top","bottom")}}function Ub(e,t,n){return{min:Vb(e,t),max:Vb(e,n)}}function Vb(e,t){return typeof e=="number"?e:e[t]||0}const A7=new WeakMap;class k7{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ye(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const a=f=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(rc(f).point)},o=(f,h)=>{const{drag:m,dragPropagation:p,onDragStart:b}=this.getProps();if(m&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=DO(m),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),dn(g=>{let y=this.getAxisMotionValue(g).get()||0;if(ni.test(y)){const{projection:x}=this.visualElement;if(x&&x.layout){const v=x.layout.layoutBox[g];v&&(y=zt(v)*(parseFloat(y)/100))}}this.originPoint[g]=y}),b&&_e.postRender(()=>b(f,h)),Zp(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},s=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h;const{dragPropagation:m,dragDirectionLock:p,onDirectionLock:b,onDrag:S}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:g}=h;if(p&&this.currentDirection===null){this.currentDirection=R7(g),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",h.point,g),this.updateAxis("y",h.point,g),this.visualElement.render(),S&&S(f,h)},l=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h,this.stop(f,h),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>dn(f=>{var h;return this.getAnimationState(f)==="paused"&&((h=this.getAxisMotionValue(f).animation)==null?void 0:h.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new z3(t,{onSessionStart:a,onStart:o,onMove:s,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:i,contextWindow:$3(this.visualElement)})}stop(t,n){const i=t||this.latestPointerEvent,r=n||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:s}=this.getProps();s&&_e.postRender(()=>s(i,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:r}=this.getProps();if(!i||!Pc(t,r,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=w7(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var a;const{dragConstraints:t,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,r=this.constraints;t&&Xa(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=S7(i.layoutBox,t):this.constraints=!1,this.elastic=E7(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&dn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=j7(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Xa(t))return!1;const i=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const a=$D(i,r.root,this.visualElement.getTransformPagePoint());let o=C7(r.layout.layoutBox,a);if(n){const s=n(AD(o));this.hasMutatedConstraints=!!s,s&&(o=p3(s))}return o}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=dn(d=>{if(!Pc(d,n,this.currentDirection))return;let f=l&&l[d]||{};o&&(f={min:0,max:0});const h=r?200:1e6,m=r?40:1e7,p={type:"inertia",velocity:i?t[d]:0,bounceStiffness:h,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(d,p)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return Zp(this.visualElement,t),i.start(my(t,i,0,n,this.visualElement,!1))}stopAnimation(){dn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){dn(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){dn(n=>{const{drag:i}=this.getProps();if(!Pc(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,a=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:s}=r.layout.layoutBox[n];a.set(t[n]-Ne(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Xa(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};dn(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const l=s.get();r[o]=T7({min:l,max:l},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),dn(o=>{if(!Pc(o,t,null))return;const s=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];s.set(Ne(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;A7.set(this.visualElement,this);const t=this.visualElement.current,n=Is(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Xa(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,a=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),_e.read(i);const o=kl(window,"resize",()=>this.scalePositionWithinConstraints()),s=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(dn(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:a=!1,dragElastic:o=Wp,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function Pc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function R7(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class $7 extends Ar{constructor(t){super(t),this.removeGroupControls=jn,this.removeListeners=jn,this.controls=new k7(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Pb=e=>(t,n)=>{e&&_e.postRender(()=>e(t,n))};class z7 extends Ar{constructor(){super(...arguments),this.removePointerDownListener=jn}onPointerDown(t){this.session=new z3(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:$3(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Pb(t),onStart:Pb(n),onMove:i,onEnd:(a,o)=>{delete this.session,r&&_e.postRender(()=>r(a,o))}}}mount(){this.removePointerDownListener=Is(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ru={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hb(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ys={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(K.test(e))e=parseFloat(e);else return e;const n=Hb(e,t.target.x),i=Hb(e,t.target.y);return`${n}% ${i}%`}},M7={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,r=Sr.parse(e);if(r.length>5)return i;const a=Sr.createTransformer(e),o=typeof r[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;r[0+o]/=s,r[1+o]/=l;const u=Ne(s,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),a(r)}};let Qh=!1;class O7 extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:a}=t;tD(D7),a&&(n.group&&n.group.add(a),i&&i.register&&r&&i.register(a),Qh&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Ru.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:r,isPresent:a}=this.props,{projection:o}=i;return o&&(o.isPresent=a,Qh=!0,r||t.layoutDependency!==n||n===void 0||t.isPresent!==a?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||_e.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),iy.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=t;Qh=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function O3(e){const[t,n]=e3(),i=w.useContext(_g);return c.jsx(O7,{...e,layoutGroup:i,switchLayoutGroup:w.useContext(h3),isPresent:t,safeToRemove:n})}const D7={borderRadius:{...ys,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ys,borderTopRightRadius:ys,borderBottomLeftRadius:ys,borderBottomRightRadius:ys,boxShadow:M7};function _7(e,t,n){const i=Et(e)?e:Lo(e);return i.start(my("",i,t,n)),i.animation}const L7=(e,t)=>e.depth-t.depth;class N7{constructor(){this.children=[],this.isDirty=!1}add(t){Bg(this.children,t),this.isDirty=!0}remove(t){Ug(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(L7),this.isDirty=!1,this.children.forEach(t)}}function B7(e,t){const n=Pt.now(),i=({timestamp:r})=>{const a=r-n;a>=t&&(wr(i),e(a-t))};return _e.setup(i,!0),()=>wr(i)}const D3=["TopLeft","TopRight","BottomLeft","BottomRight"],U7=D3.length,Fb=e=>typeof e=="string"?parseFloat(e):e,qb=e=>typeof e=="number"||K.test(e);function V7(e,t,n,i,r,a){r?(e.opacity=Ne(0,n.opacity??1,P7(i)),e.opacityExit=Ne(t.opacity??1,0,H7(i))):a&&(e.opacity=Ne(t.opacity??1,n.opacity??1,i));for(let o=0;o<U7;o++){const s=`border${D3[o]}Radius`;let l=Gb(t,s),u=Gb(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||qb(l)===qb(u)?(e[s]=Math.max(Ne(Fb(l),Fb(u),i),0),(ni.test(u)||ni.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=Ne(t.rotate||0,n.rotate||0,i))}function Gb(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const P7=_3(0,.5,bT),H7=_3(.5,.95,jn);function _3(e,t,n){return i=>i<e?0:i>t?1:n(Cl(e,t,i))}function Yb(e,t){e.min=t.min,e.max=t.max}function un(e,t){Yb(e.x,t.x),Yb(e.y,t.y)}function Kb(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Xb(e,t,n,i,r){return e-=t,e=wd(e,1/n,i),r!==void 0&&(e=wd(e,1/r,i)),e}function F7(e,t=0,n=1,i=.5,r,a=e,o=e){if(ni.test(t)&&(t=parseFloat(t),t=Ne(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=Ne(a.min,a.max,i);e===a&&(s-=t),e.min=Xb(e.min,t,n,s,r),e.max=Xb(e.max,t,n,s,r)}function Qb(e,t,[n,i,r],a,o){F7(e,t[n],t[i],t[r],t.scale,a,o)}const q7=["x","scaleX","originX"],G7=["y","scaleY","originY"];function Ib(e,t,n,i){Qb(e.x,t,q7,n?n.x:void 0,i?i.x:void 0),Qb(e.y,t,G7,n?n.y:void 0,i?i.y:void 0)}function Zb(e){return e.translate===0&&e.scale===1}function L3(e){return Zb(e.x)&&Zb(e.y)}function Jb(e,t){return e.min===t.min&&e.max===t.max}function Y7(e,t){return Jb(e.x,t.x)&&Jb(e.y,t.y)}function Wb(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function N3(e,t){return Wb(e.x,t.x)&&Wb(e.y,t.y)}function ev(e){return zt(e.x)/zt(e.y)}function tv(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class K7{constructor(){this.members=[]}add(t){Bg(this.members,t),t.scheduleRender()}remove(t){if(Ug(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const a=this.members[r];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function X7(e,t,n){let i="";const r=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((r||a||o)&&(i=`translate3d(${r}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:h,skewX:m,skewY:p}=n;u&&(i=`perspective(${u}px) ${i}`),d&&(i+=`rotate(${d}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),m&&(i+=`skewX(${m}deg) `),p&&(i+=`skewY(${p}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(i+=`scale(${s}, ${l})`),i||"none"}const Ih=["","X","Y","Z"],Q7=1e3;let I7=0;function Zh(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function B3(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=C3(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",_e,!(r||a))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&B3(i)}function U3({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},s=t==null?void 0:t()){this.id=I7++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(W7),this.nodes.forEach(i9),this.nodes.forEach(r9),this.nodes.forEach(e9)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new N7)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Hg),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const l=this.eventHandlers.get(o);l&&l.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=WT(o)&&!VO(o),this.instance=o;const{layoutId:s,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||s)&&(this.isLayoutDirty=!0),e){let d,f=0;const h=()=>this.root.updateBlockedByResize=!1;_e.read(()=>{f=window.innerWidth}),e(o,()=>{const m=window.innerWidth;m!==f&&(f=m,this.root.updateBlockedByResize=!0,d&&d(),d=B7(h,250),Ru.hasAnimatedSinceResize&&(Ru.hasAnimatedSinceResize=!1,this.nodes.forEach(rv)))})}s&&this.root.registerSharedNode(s,this),this.options.animate!==!1&&u&&(s||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||u.getDefaultTransition()||c9,{onLayoutAnimationStart:b,onLayoutAnimationComplete:S}=u.getProps(),g=!this.targetLayout||!N3(this.targetLayout,m),y=!f&&h;if(this.options.layoutRoot||this.resumeFrom||y||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...ty(p,"layout"),onPlay:b,onComplete:S};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(d,y)}else f||rv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),wr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(a9),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&B3(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(nv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(iv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(n9),this.nodes.forEach(Z7),this.nodes.forEach(J7)):this.nodes.forEach(iv),this.clearAllSnapshots();const s=Pt.now();gt.delta=Oi(0,1e3/60,s-gt.timestamp),gt.timestamp=s,gt.isProcessing=!0,Uh.update.process(gt),Uh.preRender.process(gt),Uh.render.process(gt),gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,iy.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(t9),this.sharedNodes.forEach(o9)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!zt(this.snapshot.measuredBox.x)&&!zt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ye(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!L3(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&this.instance&&(s||Lr(this.latestValues)||d)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return o&&(l=this.removeTransform(l)),u9(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:o}=this.options;if(!o)return Ye();const s=o.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(d9))){const{scroll:d}=this.root;d&&(Qa(s.x,d.offset.x),Qa(s.y,d.offset.y))}return s}removeElementScroll(o){var l;const s=Ye();if(un(s,o),(l=this.scroll)!=null&&l.wasRoot)return s;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&un(s,o),Qa(s.x,f.offset.x),Qa(s.y,f.offset.y))}return s}applyTransform(o,s=!1){const l=Ye();un(l,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Ia(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Lr(d.latestValues)&&Ia(l,d.latestValues)}return Lr(this.latestValues)&&Ia(l,this.latestValues),l}removeTransform(o){const s=Ye();un(s,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Lr(u.latestValues))continue;Kp(u.latestValues)&&u.updateSnapshot();const d=Ye(),f=u.measurePageBox();un(d,f),Ib(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Lr(this.latestValues)&&Ib(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var h;const s=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=s.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==s;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=gt.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ye(),this.relativeTargetOrigin=Ye(),Js(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ye(),this.targetWithTransforms=Ye()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):un(this.target,this.layout.layoutBox),y3(this.target,this.targetDelta)):un(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ye(),this.relativeTargetOrigin=Ye(),Js(this.relativeTargetOrigin,this.target,m.target),un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Kp(this.parent.latestValues)||g3(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var p;const o=this.getLead(),s=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty)&&(l=!1),s&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===gt.timestamp&&(l=!1),l)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;un(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,h=this.treeScale.y;RD(this.layoutCorrected,this.treeScale,this.path,s),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ye());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Kb(this.prevProjectionDelta.x,this.projectionDelta.x),Kb(this.prevProjectionDelta.y,this.projectionDelta.y)),Zs(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!tv(this.projectionDelta.x,this.prevProjectionDelta.x)||!tv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)==null||s.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Za(),this.projectionDelta=Za(),this.projectionDeltaWithTransform=Za()}setAnimationOrigin(o,s=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Za();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const h=Ye(),m=l?l.source:void 0,p=this.layout?this.layout.source:void 0,b=m!==p,S=this.getStack(),g=!S||S.members.length<=1,y=!!(b&&!g&&this.options.crossfade===!0&&!this.path.some(l9));this.animationProgress=0;let x;this.mixTargetDelta=v=>{const A=v/1e3;av(f.x,o.x,A),av(f.y,o.y,A),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Js(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),s9(this.relativeTarget,this.relativeTargetOrigin,h,A),x&&Y7(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ye()),un(x,this.relativeTarget)),b&&(this.animationValues=d,V7(d,u,this.latestValues,A,y,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var s,l,u;this.notifyListeners("animationStart"),(s=this.currentAnimation)==null||s.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(wr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_e.update(()=>{Ru.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Lo(0)),this.currentAnimation=_7(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Q7),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:d}=o;if(!(!s||!l||!u)){if(this!==o&&this.layout&&u&&V3(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ye();const f=zt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=zt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}un(s,l),Ia(s,d),Zs(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new K7),this.sharedNodes.get(o).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var s;const{layoutId:o}=this.options;return o?((s=this.getStack())==null?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:o}=this.options;return o?(s=this.getStack())==null?void 0:s.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&Zh("z",o,u,this.animationValues);for(let d=0;d<Ih.length;d++)Zh(`rotate${Ih[d]}`,o,u,this.animationValues),Zh(`skew${Ih[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}applyProjectionStyles(o,s){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=ku(s==null?void 0:s.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=ku(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Lr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let f=X7(this.projectionDeltaWithTransform,this.treeScale,d);l&&(f=l(d,f)),o.transform=f;const{x:h,y:m}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,u.animationValues?o.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const p in Al){if(d[p]===void 0)continue;const{correct:b,applyTo:S,isCSSVariable:g}=Al[p],y=f==="none"?d[p]:b(d[p],u);if(S){const x=S.length;for(let v=0;v<x;v++)o[S[v]]=y}else g?this.options.visualElement.renderState.vars[p]=y:o[p]=y}this.options.layoutId&&(o.pointerEvents=u===this?ku(s==null?void 0:s.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)==null?void 0:s.stop()}),this.root.nodes.forEach(nv),this.root.sharedNodes.clear()}}}function Z7(e){e.updateLayout()}function J7(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=e.layout,{animationType:a}=e.options,o=t.source!==e.layout.source;a==="size"?dn(f=>{const h=o?t.measuredBox[f]:t.layoutBox[f],m=zt(h);h.min=i[f].min,h.max=h.min+m}):V3(a,t.layoutBox,i)&&dn(f=>{const h=o?t.measuredBox[f]:t.layoutBox[f],m=zt(i[f]);h.max=h.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const s=Za();Zs(s,i,t.layoutBox);const l=Za();o?Zs(l,e.applyTransform(r,!0),t.measuredBox):Zs(l,i,t.layoutBox);const u=!L3(s);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:m}=f;if(h&&m){const p=Ye();Js(p,t.layoutBox,h.layoutBox);const b=Ye();Js(b,i,m.layoutBox),N3(p,b)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=p,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function W7(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function e9(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function t9(e){e.clearSnapshot()}function nv(e){e.clearMeasurements()}function iv(e){e.isLayoutDirty=!1}function n9(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function rv(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function i9(e){e.resolveTargetDelta()}function r9(e){e.calcProjection()}function a9(e){e.resetSkewAndRotation()}function o9(e){e.removeLeadSnapshot()}function av(e,t,n){e.translate=Ne(t.translate,0,n),e.scale=Ne(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ov(e,t,n,i){e.min=Ne(t.min,n.min,i),e.max=Ne(t.max,n.max,i)}function s9(e,t,n,i){ov(e.x,t.x,n.x,i),ov(e.y,t.y,n.y,i)}function l9(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const c9={duration:.45,ease:[.4,0,.1,1]},sv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),lv=sv("applewebkit/")&&!sv("chrome/")?Math.round:jn;function cv(e){e.min=lv(e.min),e.max=lv(e.max)}function u9(e){cv(e.x),cv(e.y)}function V3(e,t,n){return e==="position"||e==="preserve-aspect"&&!g7(ev(t),ev(n),.2)}function d9(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const f9=U3({attachResizeListener:(e,t)=>kl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jh={current:void 0},P3=U3({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Jh.current){const e=new f9({});e.mount(window),e.setOptions({layoutScroll:!0}),Jh.current=e}return Jh.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),h9={pan:{Feature:z7},drag:{Feature:$7,ProjectionNode:P3,MeasureLayout:O3}};function uv(e,t,n){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,a=i[r];a&&_e.postRender(()=>a(t,rc(t)))}class m9 extends Ar{mount(){const{current:t}=this.node;t&&(this.unmount=_O(t,(n,i)=>(uv(this.node,i,"Start"),r=>uv(this.node,r,"End"))))}unmount(){}}class p9 extends Ar{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tc(kl(this.node.current,"focus",()=>this.onFocus()),kl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function dv(e,t,n){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),a=i[r];a&&_e.postRender(()=>a(t,rc(t)))}class g9 extends Ar{mount(){const{current:t}=this.node;t&&(this.unmount=UO(t,(n,i)=>(dv(this.node,i,"Start"),(r,{success:a})=>dv(this.node,r,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const e0=new WeakMap,Wh=new WeakMap,y9=e=>{const t=e0.get(e.target);t&&t(e)},x9=e=>{e.forEach(y9)};function b9({root:e,...t}){const n=e||document;Wh.has(n)||Wh.set(n,{});const i=Wh.get(n),r=JSON.stringify(t);return i[r]||(i[r]=new IntersectionObserver(x9,{root:e,...t})),i[r]}function v9(e,t,n){const i=b9(t);return e0.set(e,n),i.observe(e),()=>{e0.delete(e),i.unobserve(e)}}const w9={some:0,all:1};class S9 extends Ar{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:w9[r]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(l)};return v9(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(C9(t,n))&&this.startObserver()}unmount(){}}function C9({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const T9={inView:{Feature:S9},tap:{Feature:g9},focus:{Feature:p9},hover:{Feature:m9}},j9={layout:{ProjectionNode:P3,MeasureLayout:O3}},E9={...u7,...T9,...h9,...j9},re=ED(E9,UD),A9={some:0,all:1};function k9(e,t,{root:n,margin:i,amount:r="some"}={}){const a=KT(e),o=new WeakMap,s=u=>{u.forEach(d=>{const f=o.get(d.target);if(d.isIntersecting!==!!f)if(d.isIntersecting){const h=t(d.target,d);typeof h=="function"?o.set(d.target,h):l.unobserve(d.target)}else typeof f=="function"&&(f(d),o.delete(d.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:i,threshold:typeof r=="number"?r:A9[r]});return a.forEach(u=>l.observe(u)),()=>l.disconnect()}function R9(e,{root:t,margin:n,amount:i,once:r=!1,initial:a=!1}={}){const[o,s]=w.useState(a);return w.useEffect(()=>{if(!e.current||r&&o)return;const l=()=>(s(!0),r?void 0:()=>s(!1)),u={root:t&&t.current||void 0,margin:n,amount:i};return k9(e.current,l,u)},[t,e,n,r,i]),o}const Fe={fadeInUp:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},fadeInLeft:{hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.4,ease:"easeOut"}}},fadeInRight:{hidden:{opacity:0,x:20},visible:{opacity:1,x:0,transition:{duration:.4,ease:"easeOut"}}},staggerContainer:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05,delayChildren:.05}}}},$9=(e,t={})=>{const n=Array.from({length:e},()=>w.useRef(null)),i=n.map(r=>R9(r,{once:!0,amount:.3,...t}));return n.map((r,a)=>({ref:r,isInView:i[a]}))},fv=["Na ForgeFit, nós não apenas levantamos ferro","Nós forjamos força!"],z9=()=>{const[e,t]=w.useState(0),[n,i,r,a,o,s,l,u,d]=$9(9);return w.useEffect(()=>{const f=setInterval(()=>{t(h=>(h+1)%fv.length)},3e3);return()=>clearInterval(f)},[]),c.jsxs(c.Fragment,{children:[c.jsxs(R$,{id:"inicio",children:[c.jsxs(C$,{children:[c.jsx(T$,{src:Og,alt:"ForgeFit"}),c.jsxs(j$,{children:[c.jsxs(E$,{children:[c.jsx(Oc,{href:"#inicio",children:"Início"}),c.jsx(Oc,{href:"#sobre",children:"Sobre"}),c.jsx(Oc,{href:"#servicos",children:"Serviços"}),c.jsx(Oc,{href:"#contato",children:"Contato"})]}),c.jsx(N$,{to:"/login",children:"Entrar"})]})]}),c.jsxs(k$,{autoPlay:!0,muted:!0,loop:!0,children:[c.jsx("source",{src:y$,type:"video/mp4"}),"Seu navegador não suporta vídeo."]}),c.jsx($$,{children:c.jsx("p",{children:c.jsx(z$,{children:fv[e]},e)})})]}),c.jsxs(Nh,{id:"sobre",children:[c.jsxs(re.div,{ref:n.ref,initial:"hidden",animate:n.isInView?"visible":"hidden",variants:Fe.fadeInUp,children:[c.jsx("h2",{children:"Bem-vindo à ForgeFit"}),c.jsx("p",{children:"Bem-vindo à ForgeFit, a plataforma desenhada para forjar resultados. Unificamos a gestão completa das suas aulas, planos de treino inteligentes, acompanhamento de progresso em tempo real e um sistema de gamificação envolvente. Dê aos seus alunos as ferramentas para conquistar sua melhor versão e leve sua academia a um patamar lendário."})]}),c.jsx(re.div,{ref:i.ref,initial:"hidden",animate:i.isInView?"visible":"hidden",variants:Fe.fadeInUp,children:c.jsx(A$,{src:x$,alt:"Academia ForgeFit"})})]}),c.jsxs(Nh,{id:"servicos",children:[c.jsxs(re.div,{ref:r.ref,initial:"hidden",animate:r.isInView?"visible":"hidden",variants:Fe.fadeInUp,children:[c.jsx("h2",{children:"As Ferramentas da Sua Forja"}),c.jsx("p",{children:"Explore o arsenal completo da ForgeFit. Cada ferramenta foi desenhada para otimizar sua gestão, engajar seus alunos e transformar seu espaço em uma verdadeira arena de resultados."})]}),c.jsxs(M$,{children:[c.jsx(re.div,{ref:a.ref,initial:"hidden",animate:a.isInView?"visible":"hidden",variants:Fe.fadeInLeft,children:c.jsxs(Dc,{children:[c.jsx(_c,{children:c.jsx("img",{src:b$,alt:"Planos de Treino"})}),c.jsxs(Lc,{children:[c.jsx("h3",{children:"Planos de Treino: A Jornada do Herói"}),c.jsx("p",{children:"Dê aos seus instrutores o poder de mestres-ferreiros. Nossa plataforma permite criar e atribuir planos de treino 100% personalizados, adaptados aos objetivos de cada aluno. De iniciantes a guerreiros veteranos, cada um terá sua jornada perfeitamente traçada para a vitória."})]})]})}),c.jsx(re.div,{ref:o.ref,initial:"hidden",animate:o.isInView?"visible":"hidden",variants:Fe.fadeInRight,children:c.jsxs(Dc,{reverse:!0,children:[c.jsx(_c,{children:c.jsx("img",{src:v$,alt:"Gestão de Aulas"})}),c.jsxs(Lc,{children:[c.jsx("h3",{children:"Gestão de Aulas: Organize Suas Legiões"}),c.jsx("p",{children:"Comande suas modalidades com precisão. Crie, agende e gerencie todas as suas aulas—seja Yoga, Spinning ou Treinamento Funcional—em um calendário centralizado. Facilite a inscrição dos alunos e otimize a ocupação da sua academia sem esforço."})]})]})}),c.jsx(re.div,{ref:s.ref,initial:"hidden",animate:s.isInView?"visible":"hidden",variants:Fe.fadeInLeft,children:c.jsxs(Dc,{children:[c.jsx(_c,{children:c.jsx("img",{src:w$,alt:"Progresso Real"})}),c.jsxs(Lc,{children:[c.jsx("h3",{children:"Progresso Real: O Espelho da Evolução"}),c.jsx("p",{children:"O que não é medido, não pode ser conquistado. Permita que seus alunos registrem dados corporais, integrem resultados de bioimpedância e visualizem seu progresso em gráficos claros. Transforme dados brutos em motivação pura e resultados visíveis."})]})]})}),c.jsx(re.div,{ref:l.ref,initial:"hidden",animate:l.isInView?"visible":"hidden",variants:Fe.fadeInRight,children:c.jsxs(Dc,{reverse:!0,children:[c.jsx(_c,{children:c.jsx("img",{src:S$,alt:"Gamificação"})}),c.jsxs(Lc,{children:[c.jsx("h3",{children:"Gamificação: A Arena dos Campeões"}),c.jsx("p",{children:"Transforme o treino em uma competição épica. Crie torneios sazonais, desafios de check-in e rankings para ver quem treina mais. Premie seus alunos mais dedicados e veja o engajamento, a retenção e o espírito de comunidade da sua academia dispararem."})]})]})})]})]}),c.jsxs(Nh,{id:"contato",children:[c.jsxs(re.div,{ref:u.ref,initial:"hidden",animate:u.isInView?"visible":"hidden",variants:Fe.fadeInUp,children:[c.jsx("h2",{children:"Entre em Contato"}),c.jsx("p",{children:"Pronto para forjar sua academia? Entre em contato conosco e descubra como a ForgeFit pode transformar sua gestão e engajar seus alunos como nunca."})]}),c.jsx(re.div,{ref:d.ref,initial:"hidden",animate:d.isInView?"visible":"hidden",variants:Fe.staggerContainer,children:c.jsxs(O$,{children:[c.jsx(re.div,{variants:Fe.fadeInUp,children:c.jsxs(Bh,{children:[c.jsx("div",{className:"icon",children:c.jsx(Rz,{size:48,strokeWidth:1.5})}),c.jsx("h3",{children:"Email"}),c.jsx("p",{children:c.jsx("a",{href:"mailto:contato@forgefit.com",children:"contato@forgefit.com"})})]})}),c.jsx(re.div,{variants:Fe.fadeInUp,children:c.jsxs(Bh,{children:[c.jsx("div",{className:"icon",children:c.jsx(Tz,{size:48,strokeWidth:1.5})}),c.jsx("h3",{children:"Telefone"}),c.jsx("p",{children:c.jsx("a",{href:"tel:+5511999999999",children:"(81) 94002-8922"})})]})}),c.jsx(re.div,{variants:Fe.fadeInUp,children:c.jsxs(Bh,{children:[c.jsx("div",{className:"icon",children:c.jsx(wl,{size:48,strokeWidth:1.5})}),c.jsx("h3",{children:"Localização"}),c.jsx("p",{children:"Av. Cais do Apolo, 77, Recife"})]})})]})})]}),c.jsxs(D$,{children:[c.jsxs("p",{children:["Projeto desenvolvido para a disciplina de ",c.jsx("strong",{children:"Requisitos, Projeto de Software e Validação"})," na ",c.jsx("strong",{children:"CESAR School"})]}),c.jsxs("p",{children:[c.jsx("a",{href:"https://www.linkedin.com/in/https://www.linkedin.com/in/gustavo-mourato-1802b328a/",target:"_blank",rel:"noopener noreferrer",children:"Gustavo Mourato"})," • ",c.jsx("a",{href:"https://www.linkedin.com/in/leogutzeit/",target:"_blank",rel:"noopener noreferrer",children:"Leonardo Gutzeit"})," • ",c.jsx("a",{href:"https://www.linkedin.com/in/paulorosadodev/",target:"_blank",rel:"noopener noreferrer",children:"Paulo Rosado"})," • ",c.jsx("a",{href:"https://www.linkedin.com/in/thomazrlima//",target:"_blank",rel:"noopener noreferrer",children:"Thomaz Lima"})," • ",c.jsx("a",{href:"https://www.linkedin.com/in/viniciusdeandradejordao/",target:"_blank",rel:"noopener noreferrer",children:"Vinicius de Andrade"})]})]})]})},M9=C.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    @media (min-width: 48rem) {
        flex-direction: row;
    }
`,O9=C.div`
    flex: 2;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/src/assets/gym.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    min-height: 40vh;

    @media (min-width: 48rem) {
        min-height: 100vh;
    }

    @media (max-width: 47.9375rem) {
        display: none;
    }
`,D9=C.p`
    font-size: 4rem;
    font-weight: 600;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeIn 1s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,_9=C.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    background-color: ${({theme:e})=>e.colors.background};
    min-height: 100vh;
    overflow-y: auto;
`,L9=C.img`
    width: 20rem;
    height: auto;
    margin-bottom: 1.25rem;
`,N9=C(Wo)`
    align-self: center;
`,B9=C.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;C.div`
    display: flex;
    flex-direction: column;
`;C.label`
    color: ${({theme:e})=>e.colors.primary};
    margin-bottom: 0.3125rem;
    font-size: 0.875rem;
    font-weight: 600;
`;C.input`
    padding: 0.75rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.25rem;
    font-size: 1rem;
`;const hv=C.span`
    margin-top: 0rem;
    font-size: 0.875rem;
    color: ${({theme:e})=>e.colors.text};
    text-align: center;
`;C.p`
    text-align: center;
    margin-top: 1.25rem;
    color: ${({theme:e})=>e.colors.text};
`;C(Wo)`
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;const U9=C.div`
    display: flex;
    flex-direction: column;
`,V9=C.label`
    color: ${({theme:e,variant:t})=>t==="classic"?"theme.colors.text":e.colors.text};
    margin-bottom: 0.3125rem;
    font-size: 0.875rem;
    font-weight: 600;
`,P9=C.input`
    padding: 0.75rem;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;

    background-color: ${({theme:e,variant:t})=>t==="classic"?"#fff":e.colors.background};
    color: ${({theme:e,variant:t})=>t==="classic"?"#0f172a":e.colors.text};
    border-radius: ${({variant:e})=>e==="classic"?"0.5rem":"0.25rem"};
    border: ${({variant:e,theme:t})=>e==="classic"?`1px solid ${t.colors.primary}33`:"2px solid"};
    ${({variant:e,theme:t})=>e==="gradient"?`border-image: linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary}) 1;`:""}

    &::placeholder {
        color: ${({theme:e,variant:t})=>t==="classic"?"#0f172a80":`${e.colors.text}80`};
    }

    &:focus {
        box-shadow: ${({variant:e,theme:t})=>e==="classic"?"0 6px 18px rgba(15, 23, 42, 0.08)":`0 0 0 3px ${t.colors.primary}22`};
    }
`,Sd=({label:e,type:t,placeholder:n,id:i,value:r,onChange:a,required:o,variant:s="gradient"})=>c.jsxs(U9,{children:[c.jsx(V9,{htmlFor:i,variant:s,children:e}),c.jsx(P9,{id:i,type:t,placeholder:n,value:r,onChange:a,required:o,variant:s})]}),mv=["Forje seu destino","Seja sua própria lenda","Honre sua jornada","Domine seus medos","A glória te espera","Músculos de aço","Supere-se a cada dia","Conquiste a si mesmo","Força indomável","Corpo de guerreiro","Desafie seus limites"],H9=()=>{const[e,t]=w.useState(0),[n,i]=w.useState(""),[r,a]=w.useState(""),[o,s]=w.useState(""),[l,u]=w.useState(!1),{login:d}=ns(),f=nf();w.useEffect(()=>{const m=setInterval(()=>{t(p=>(p+1)%mv.length)},3e3);return()=>clearInterval(m)},[]);const h=async m=>{m.preventDefault(),s(""),u(!0);try{await d(n,r),f("/aulas")}catch{s("Email ou senha inválidos. Tente novamente.")}finally{u(!1)}};return c.jsxs(M9,{children:[c.jsx(O9,{children:c.jsx("div",{children:c.jsx(D9,{children:mv[e]},e)})}),c.jsxs(_9,{children:[c.jsx(N9,{to:"/",children:c.jsx(L9,{src:"/src/assets/logo.png",alt:"ForgeFit Logo"})}),c.jsxs(B9,{onSubmit:h,children:[c.jsx(Sd,{label:"Email:",type:"email",placeholder:"Digite seu email",id:"email",value:n,onChange:m=>i(m.target.value),variant:"classic",required:!0}),c.jsx(Sd,{label:"Senha:",type:"password",placeholder:"Digite sua senha",id:"password",value:r,onChange:m=>a(m.target.value),variant:"classic",required:!0}),o&&c.jsx(hv,{style:{color:"#EF752B",marginTop:"-0.5rem"},children:o}),c.jsx(Mt,{type:"submit",disabled:l,children:l?"ENTRANDO...":"ENTRAR"}),c.jsx(hv,{children:"Você receberá seu acesso por email após efetuar a matrícula."})]})]})]})},F9=C.div`
    min-height: 100vh;
    background-color: ${({theme:e})=>e.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
        margin-top: 5rem;
    }
`;C.header`
    text-align: center;
    margin-bottom: 3rem;

    p {
        font-size: 1.2rem;
        color: ${({theme:e})=>e.colors.text};
        margin-top: 1rem;
    }

    @media (max-width: 48rem) {
        margin-bottom: 2rem;

        p {
            font-size: 1rem;
        }
    }
`;C.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`;C.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
`;C.button`
    padding: 0.75rem 1.5rem;
    border: 2px solid;
    border-image: ${({active:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary}) 1`:"none"};
    border-color: ${({active:e,theme:t})=>e?"transparent":t.colors.primary};
    background: ${({active:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary})`:"transparent"};
    color: ${({active:e})=>e?"white":({theme:t})=>t.colors.text};
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
`;const Hc=C.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
    gap: 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
        gap: 1.5rem;
    }

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`,ac=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    overflow: hidden;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    &:hover {
        box-shadow:
            0 4px 12px rgba(239, 68, 68, 0.3),
            0 0 20px rgba(249, 115, 22, 0.2);
    }
`,pv=C.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;

    ${ac}:hover & {
        transform: scale(1.05);
    }
`,gv=C.div`
    padding: 1.5rem;
`,yv=C.h3`
    font-size: 1.5rem;
    color: ${({theme:e})=>e.colors.primary};
    margin-bottom: 1rem;
`,ja=C.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.75rem;
    font-size: 0.95rem;

    svg {
        color: ${({theme:e})=>e.colors.primary};
    }
`,xv=C.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid ${({theme:e})=>e.colors.primary}33;
    gap: 0.75rem;
    min-height: 2.5rem;

    span {
        color: ${({theme:e})=>e.colors.text};
        font-size: 0.85rem;
        line-height: 1.3;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    button {
        flex-shrink: 0;
        min-width: fit-content;
        font-size: 0.85rem !important;
        padding: 0.5rem 0.75rem !important;
        height: auto;
        white-space: nowrap;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;

        span {
            font-size: 0.8rem;
        }

        button {
            font-size: 0.8rem !important;
            padding: 0.5rem !important;
        }
    }
`,q9=C.div`
    text-align: center;
    padding: 4rem 2rem;
    color: ${({theme:e})=>e.colors.text};

    svg {
        color: ${({theme:e})=>e.colors.primary};
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
    }
`,bv=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}33;
    border-radius: 0.5rem;
    overflow: hidden;
`,vv=C.div`
    width: 100%;
    height: 200px;
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.background} 0%, ${({theme:e})=>e.colors.primary}20 25%, ${({theme:e})=>e.colors.secondary}20 50%, ${({theme:e})=>e.colors.primary}20 75%, ${({theme:e})=>e.colors.background} 100%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }
`,wv=C.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,G9=C.div`
    padding: 0.625rem 1.25rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}33;
    border-radius: 0.5rem;
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.background} 0%, ${({theme:e})=>e.colors.primary}20 25%, ${({theme:e})=>e.colors.secondary}20 50%, ${({theme:e})=>e.colors.primary}20 75%, ${({theme:e})=>e.colors.background} 100%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;
    min-width: 90px;
    height: 42px;
    flex-shrink: 0;
    white-space: nowrap;
    box-sizing: border-box;

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 0.875rem;
        height: 38px;
        min-width: 70px;
    }
`;C.div`
    height: 2.5rem;
    width: 250px;
    border-radius: 0.5rem;
    max-width: 1400px;
    margin: 0 auto 1.5rem auto;
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.background} 0%, ${({theme:e})=>e.colors.primary}20 25%, ${({theme:e})=>e.colors.secondary}20 50%, ${({theme:e})=>e.colors.primary}20 75%, ${({theme:e})=>e.colors.background} 100%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }

    @media (max-width: 48rem) {
        height: 2rem;
        width: 200px;
        margin-bottom: 1rem;
    }
`;const Y9=C.div`
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`,Sv=C.section`
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        margin-bottom: 2rem;
    }
`,Fc=C.h1`
    font-size: 3rem;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 auto 1.5rem auto;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        padding: 0 0.5rem;
    }

    @media (max-width: 48rem) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding: 0;
    }
`,K9=C.div`
    margin-bottom: 2rem;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`,X9=C(ac)`
    position: relative;

    &::before {
        content: "✓ Inscrito";
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.success}, ${({theme:e})=>e.colors.success});
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 1;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
`,Q9=C(ac)`
    position: relative;

    &::before {
        content: "⏳ Aguardando";
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: linear-gradient(135deg, #f97316, #fb923c);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 1;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
`,I9=C(Mt)`
    background: transparent !important;
    color: ${({theme:e})=>e.colors.error} !important;
    border: 2px solid ${({theme:e})=>e.colors.error} !important;
    font-size: 0.8rem !important;
    padding: 0.4rem 0.75rem !important;
    white-space: nowrap !important;

    &:hover:not(:disabled) {
        background: ${({theme:e})=>e.colors.error}15 !important;
        box-shadow: 0 0 10px ${({theme:e})=>e.colors.error}40 !important;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,Z9=C(ac)`
    position: relative;
    border-image: linear-gradient(135deg, #3b82f6, #1d4ed8) 1;

    &::before {
        content: "⭐ Avaliar";
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 1;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    &:hover {
        box-shadow:
            0 4px 12px rgba(59, 130, 246, 0.3),
            0 0 20px rgba(29, 78, 216, 0.2);
    }
`,J9=C(Mt)`
    background: transparent !important;
    color: #f97316 !important;
    border: 2px solid #f97316 !important;
    font-size: 0.8rem !important;
    padding: 0.4rem 0.75rem !important;
    white-space: nowrap !important;

    &:hover:not(:disabled) {
        background: #f9731615 !important;
        box-shadow: 0 0 10px #f9731640 !important;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,W9=C(Mt)`
    background: transparent !important;
    color: #f97316 !important;
    border: 2px solid #f97316 !important;
    font-size: 0.8rem !important;
    padding: 0.4rem 0.75rem !important;
    white-space: nowrap !important;

    &:hover:not(:disabled) {
        background: #f9731615 !important;
        box-shadow: 0 0 10px #f9731640 !important;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,e_=C.div`
    text-align: center;
    padding: 2rem;
    color: ${({theme:e})=>e.colors.text};
    background: ${({theme:e})=>e.colors.background};
    border: 2px dashed ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.75rem;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    svg {
        color: ${({theme:e})=>e.colors.primary};
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        margin: 0;
    }
`,t_=[{id:1,name:"Yoga Matinal",instructor:"Ana Silva",category:"Yoga",schedule:"Seg - 07:00",capacity:20,enrolled:15,location:"Sala 1",image:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",enrollmentStatus:"to_evaluate",waitingList:0,isClassFinished:!0},{id:2,name:"Spinning Intenso",instructor:"Carlos Mendes",category:"Spinning",schedule:"Ter - 18:00",capacity:25,enrolled:22,location:"Sala 2",image:"https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500",enrollmentStatus:"enrolled",waitingList:0},{id:3,name:"Funcional Cross",instructor:"Pedro Santos",category:"Funcional",schedule:"Qua - 19:00",capacity:15,enrolled:15,location:"Área Externa",image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",enrollmentStatus:"waiting_list",waitingList:3},{id:4,name:"Pilates",instructor:"Mariana Costa",category:"Pilates",schedule:"Sáb - 08:00",capacity:12,enrolled:10,location:"Sala 3",image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",enrollmentStatus:"not_enrolled",waitingList:0},{id:5,name:"Muay Thai",instructor:"Roberto Oliveira",category:"Luta",schedule:"Sex - 19:30",capacity:20,enrolled:20,location:"Ring de Luta",image:"https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=500",enrollmentStatus:"not_enrolled",waitingList:2}],n_=["Todas","Yoga","Spinning","Funcional","Pilates","Dança","Luta"],i_=async()=>(await new Promise(e=>setTimeout(e,500)),t_),r_=async()=>(await new Promise(e=>setTimeout(e,200)),n_),a_=C.form`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
`,o_=C.input`
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    outline: none;
    transition: all 0.3s ease;
    width: 100%;

    &::placeholder {
        color: ${({theme:e})=>e.colors.text}80;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.9rem;
    }
`,s_=C.button`
    padding: 0.75rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    border: none;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 48rem) {
        padding: 0.625rem;
    }
`,l_=({placeholder:e="Buscar...",onSearch:t,initialValue:n=""})=>{const[i,r]=w.useState(n),a=s=>{s.preventDefault(),t(i)},o=s=>{r(s.target.value)};return c.jsxs(a_,{onSubmit:a,children:[c.jsx(o_,{type:"text",placeholder:e,value:i,onChange:o}),c.jsx(s_,{type:"submit",children:c.jsx(zz,{size:20})})]})},c_=C.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    width: 100%;

    /* Custom Scrollbar for Filter Section */
    &::-webkit-scrollbar {
        height: 4px;
    }

    &::-webkit-scrollbar-track {
        background: ${({theme:e})=>e.colors.background};
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.secondary}, ${({theme:e})=>e.colors.primary});
    }

    @media (max-width: 48rem) {
        gap: 0.5rem;
        padding-bottom: 0.25rem;
    }
`,u_=C.button`
    padding: 0.625rem 1.25rem;
    border: 2px solid;
    border-image: ${({active:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary}) 1`:"none"};
    border-color: ${({active:e,theme:t})=>e?"transparent":t.colors.primary};
    background: ${({active:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary})`:"transparent"};
    color: ${({active:e})=>e?"white":({theme:t})=>t.colors.text};
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    white-space: nowrap;
    flex-shrink: 0;

    &:hover {
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 0.875rem;
        font-size: 0.85rem;
    }
`,d_=({categories:e,selectedCategory:t,onCategoryChange:n})=>c.jsx(c_,{children:e.map(i=>c.jsx(u_,{active:t===i,onClick:()=>n(i),children:i},i))}),f_=C.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        padding: 0 0.5rem;
        gap: 1.5rem;
    }

    @media (max-width: 48rem) {
        gap: 1.5rem;
        padding: 0;
    }
`,h_=({searchPlaceholder:e="Buscar aulas, instrutores ou locais...",onSearch:t,categories:n,selectedCategory:i,onCategoryChange:r,initialSearchValue:a=""})=>c.jsxs(f_,{children:[c.jsx(l_,{placeholder:e,onSearch:t,initialValue:a}),c.jsx(d_,{categories:n,selectedCategory:i,onCategoryChange:r})]}),m_=Jd`
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
`,p_=C.div`
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};
    border-radius: ${({borderRadius:e})=>e};
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.background} 0%, ${({theme:e})=>e.colors.primary}20 25%, ${({theme:e})=>e.colors.secondary}20 50%, ${({theme:e})=>e.colors.primary}20 75%, ${({theme:e})=>e.colors.background} 100%);
    background-size: 1000px 100%;
    animation: ${m_} 2s infinite linear;
`,Bt=({width:e="100%",height:t="20px",borderRadius:n="0.25rem",className:i})=>c.jsx(p_,{width:e,height:t,borderRadius:n,className:i}),g_=Jd`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,y_=Jd`
    from {
        opacity: 0;
        transform: scale(0.9) translateY(-20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`,x_=C.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: ${({isOpen:e})=>e?"flex":"none"};
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: ${g_} 0.3s ease-out;
    padding: 1rem;
    box-sizing: border-box;
`,b_=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.75rem;
    position: relative;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    animation: ${y_} 0.3s ease-out;
    box-shadow:
        0 25px 80px rgba(171, 37, 34, 0.15),
        0 0 20px rgba(239, 117, 43, 0.1);
    margin: auto;

    @media (max-width: 64rem) {
        max-width: 700px;
        width: 90%;
    }

    @media (max-width: 48rem) {
        max-width: 95%;
        width: 95%;
        max-height: 85vh;
    }
`,v_=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem 1rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.primary}33;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem 0.75rem;
    }
`,w_=C.h2`
    color: ${({theme:e})=>e.colors.text};
    margin: 0;
    font-size: 1.5rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`,S_=C.button`
    background: none;
    border: none;
    color: ${({theme:e})=>e.colors.text};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
        background: ${({theme:e})=>e.colors.primary}20;
        color: ${({theme:e})=>e.colors.primary};
        transform: scale(1.1);
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`,C_=C.div`
    padding: 1.5rem 2rem;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
    }
`,T_=C.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    padding: 1rem 2rem 1.5rem;
    border-top: 1px solid ${({theme:e})=>e.colors.primary}33;

    @media (max-width: 48rem) {
        padding: 0.75rem 1.5rem 1rem;
        flex-direction: column-reverse;
        gap: 0.75rem;
    }
`,os=({isOpen:e,onClose:t,title:n,children:i,footer:r,closeOnOverlayClick:a=!0,closeOnEsc:o=!0})=>{w.useEffect(()=>{if(!o||!e)return;const l=u=>{u.key==="Escape"&&t()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[e,t,o]),w.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]);const s=l=>{a&&l.target===l.currentTarget&&t()};return e?Q2.createPortal(c.jsx(x_,{isOpen:e,onClick:s,children:c.jsxs(b_,{children:[n&&c.jsxs(v_,{children:[c.jsx(w_,{children:n}),c.jsx(S_,{onClick:t,"aria-label":"Fechar modal",children:c.jsx(uf,{})})]}),c.jsx(C_,{children:i}),r&&c.jsx(T_,{children:r})]})}),document.body):null},Bo=({children:e,onClick:t,variant:n="secondary",disabled:i=!1,type:r="button"})=>c.jsx(Mt,{type:r,variant:n,onClick:t,disabled:i,size:"lg",children:e}),j_=C.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 64rem) {
        flex-direction: column;
        gap: 1.5rem;
    }
`,E_=C.div`
    flex: 0 0 300px;
    height: 250px;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    @media (max-width: 64rem) {
        flex: none;
        width: 100%;
        height: 200px;
    }

    @media (max-width: 48rem) {
        height: 180px;
    }
`,A_=C.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
`,k_=C.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;

    @media (max-width: 64rem) {
        min-height: auto;
    }
`,R_=C.h3`
    font-size: 1.5rem;
    color: ${({theme:e})=>e.colors.text};
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`,$_=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
`,em=C.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({theme:e})=>e.colors.text};
    font-size: 0.95rem;
    padding: 0.5rem;
    background: ${({theme:e})=>e.colors.background};
    border: 1px solid ${({theme:e})=>e.colors.primary}20;
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
        background: ${({theme:e})=>e.colors.primary}10;
        border-color: ${({theme:e})=>e.colors.primary}40;
    }

    svg {
        color: ${({theme:e})=>e.colors.primary};
        flex-shrink: 0;
    }

    strong {
        color: ${({theme:e})=>e.colors.primary};
        margin-right: 0.5rem;
    }
`,z_=C.div`
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}15, ${({theme:e})=>e.colors.secondary}15);
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}60, ${({theme:e})=>e.colors.secondary}60) 1;
    border-radius: 0.75rem;
    padding: 1rem;
    text-align: center;
    margin-top: 1rem;

    p {
        margin: 0;
        color: ${({theme:e})=>e.colors.text};
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .capacity-info {
        font-weight: 600;
        font-size: 1rem;
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-top: 0.5rem;
    }
`,Cv=C.p`
    color: ${({theme:e})=>e.colors.error};
    font-size: 0.9rem;
    text-align: center;
    margin: 1rem 0 0 0;
    padding: 0.75rem;
    background: ${({theme:e})=>e.colors.error}10;
    border: 1px solid ${({theme:e})=>e.colors.error}30;
    border-radius: 0.5rem;
`,M_=({isOpen:e,onClose:t,classData:n,onConfirm:i,isLoading:r=!1})=>{if(!n)return null;const a=n.enrolled>=n.capacity,o=n.capacity-n.enrolled,s=()=>{i(n.id)},l=c.jsxs(c.Fragment,{children:[c.jsx(Bo,{variant:"secondary",onClick:t,disabled:r,children:"Cancelar"}),c.jsx(Bo,{variant:"primary",onClick:s,disabled:r,children:r?"Processando...":a?"Entrar na Lista de Espera":"Confirmar Inscrição"})]});return c.jsxs(os,{isOpen:e,onClose:t,title:"Confirmar Inscrição",footer:l,closeOnOverlayClick:!r,closeOnEsc:!r,children:[c.jsxs(j_,{children:[c.jsx(E_,{children:c.jsx(A_,{src:n.image,alt:n.name})}),c.jsxs(k_,{children:[c.jsxs("div",{children:[c.jsx(R_,{children:n.name}),c.jsxs($_,{children:[c.jsxs(em,{children:[c.jsx(_o,{size:18}),c.jsxs("span",{children:[c.jsx("strong",{children:"Instrutor(a):"})," ",n.instructor]})]}),c.jsxs(em,{children:[c.jsx(Do,{size:18}),c.jsxs("span",{children:[c.jsx("strong",{children:"Horário:"})," ",n.schedule]})]}),c.jsxs(em,{children:[c.jsx(wl,{size:18}),c.jsxs("span",{children:[c.jsx("strong",{children:"Local:"})," ",n.location]})]})]})]}),c.jsx(z_,{children:a?c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Esta aula está lotada!"}),c.jsxs("p",{className:"capacity-info",children:["Pessoas na fila de espera: ",n.waitingList||0]})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Você está prestes a se inscrever nesta aula."}),c.jsxs("p",{className:"capacity-info",children:["Vagas disponíveis: ",o," de ",n.capacity]})]})})]})]}),a&&c.jsx(Cv,{style:{color:"#f97316",borderColor:"#f9731630",background:"#f9731610"},children:"Você será adicionado à lista de espera e será notificado quando uma vaga estiver disponível."}),o<=3&&!a&&c.jsxs(Cv,{style:{color:"#f97316",borderColor:"#f9731630",background:"#f9731610"},children:["Atenção: Restam apenas ",o," vaga",o!==1?"s":""," ",o!==1?"disponíveis":"disponível","!"]})]})},O_=C.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 64rem) {
        flex-direction: column;
        gap: 1.5rem;
    }
`,D_=C.div`
    flex: 0 0 250px;
    height: 200px;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    @media (max-width: 64rem) {
        flex: none;
        width: 100%;
        height: 180px;
    }

    @media (max-width: 48rem) {
        height: 160px;
    }
`,__=C.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`,L_=C.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,N_=C.h3`
    font-size: 1.3rem;
    color: ${({theme:e})=>e.colors.text};
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 1.1rem;
    }
`,B_=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,tm=C.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({theme:e})=>e.colors.text};
    font-size: 0.9rem;
    padding: 0.25rem;

    svg {
        color: ${({theme:e})=>e.colors.primary};
        flex-shrink: 0;
    }

    strong {
        color: ${({theme:e})=>e.colors.primary};
        margin-right: 0.5rem;
    }
`,U_=C.div`
    background: ${({theme:e})=>e.colors.error}10;
    border: 2px solid ${({theme:e})=>e.colors.error}30;
    border-radius: 0.75rem;
    padding: 1rem;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
        color: ${({theme:e})=>e.colors.error};
        flex-shrink: 0;
    }

    p {
        margin: 0;
        color: ${({theme:e})=>e.colors.text};
        font-size: 0.9rem;
        line-height: 1.4;

        @media (max-width: 48rem) {
            font-size: 0.8rem;
        }
    }
`,V_=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    background: ${({theme:e})=>e.colors.background};
    width: 100%;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: stretch;
        gap: 1.5rem;
        padding: 1rem;
    }
`,P_=C.div`
    flex: 1;
    max-width: 400px;
    text-align: left;
    padding-left: 0;

    h4 {
        margin: 0 0 0.5rem 0;
        color: ${({theme:e})=>e.colors.primary};
        font-size: 0.9rem;
        font-weight: 600;
    }

    p {
        margin: 0;
        color: ${({theme:e})=>e.colors.text};
        font-size: 0.8rem;
        line-height: 1.4;
    }

    .refund-amount {
        color: #10b981;
        font-weight: 600;
        font-size: 0.85rem;
    }

    .no-refund {
        color: #f97316;
        font-weight: 600;
        font-size: 0.85rem;
    }

    @media (max-width: 48rem) {
        max-width: none;
        text-align: left;
    }
`,H_=C.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 48rem) {
        justify-content: center;
        width: 100%;

        button {
            flex: 1;
        }
    }
`,F_=({isOpen:e,onClose:t,classData:n,onConfirm:i,isLoading:r=!1})=>{if(!n)return null;const a=n.enrollmentStatus==="waiting_list",s=(()=>{if(a)return null;const d=50;switch(n.id){case 1:return{isEligible:!0,amount:d,reason:"Cancelamento com mais de 24h de antecedência"};case 2:return{isEligible:!0,amount:d*.5,reason:"Cancelamento com menos de 24h"};case 3:return{isEligible:!1,amount:0,reason:"Aula já iniciada ou cancelamento muito próximo"};case 4:return{isEligible:!0,amount:d,reason:"Cancelamento dentro do prazo permitido"};case 5:return{isEligible:!0,amount:d*.75,reason:"Cancelamento com 12h de antecedência"};default:return{isEligible:!1,amount:0,reason:"Aula não elegível para reembolso"}}})(),l=()=>{i(n.id)},u=c.jsxs(V_,{style:{justifyContent:a?"flex-end":"space-between"},children:[!a&&s&&c.jsxs(P_,{children:[c.jsx("h4",{children:"Informações de Reembolso"}),s.isEligible?c.jsxs("p",{children:[c.jsxs("span",{className:"refund-amount",children:["Valor do reembolso: R$ ",s.amount.toFixed(2)]}),c.jsx("br",{}),c.jsx("small",{children:s.reason})]}):c.jsxs("p",{children:[c.jsx("span",{className:"no-refund",children:"Não elegível para reembolso"}),c.jsx("br",{}),c.jsx("small",{children:s.reason})]})]}),c.jsxs(H_,{children:[c.jsx(Bo,{variant:"secondary",onClick:t,disabled:r,children:"Cancelar"}),c.jsx(Bo,{variant:"primary",onClick:l,disabled:r,children:r?a?"Saindo da fila...":"Cancelando...":a?"Confirmar Saída":"Confirmar Cancelamento"})]})]});return c.jsxs(os,{isOpen:e,onClose:t,title:a?"Sair da Lista de Espera":"Cancelar Inscrição",footer:u,closeOnOverlayClick:!r,closeOnEsc:!r,children:[c.jsxs(O_,{children:[c.jsx(D_,{children:c.jsx(__,{src:n.image,alt:n.name})}),c.jsx(L_,{children:c.jsxs("div",{children:[c.jsx(N_,{children:n.name}),c.jsxs(B_,{children:[c.jsxs(tm,{children:[c.jsx(_o,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Instrutor(a):"})," ",n.instructor]})]}),c.jsxs(tm,{children:[c.jsx(Do,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Horário:"})," ",n.schedule]})]}),c.jsxs(tm,{children:[c.jsx(wl,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Local:"})," ",n.location]})]})]})]})})]}),c.jsxs(U_,{children:[c.jsx(tz,{size:20}),c.jsx("p",{children:a?c.jsxs(c.Fragment,{children:[c.jsx("strong",{children:"Tem certeza que deseja sair da lista de espera?"}),c.jsx("br",{}),"Você perderá sua posição na fila e precisará se inscrever novamente."]}):c.jsxs(c.Fragment,{children:[c.jsx("strong",{children:"Tem certeza que deseja cancelar sua inscrição?"}),c.jsx("br",{}),"Esta ação não pode ser desfeita e sua vaga será disponibilizada para outros alunos."]})})]})]})},Rl={black:"#000",white:"#fff"},Ea={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Aa={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},ka={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Ra={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},$a={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},xs={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},q_={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function ha(e,...t){const n=new URL(`https://mui.com/production-error/?code=${e}`);return t.forEach(i=>n.searchParams.append("args[]",i)),`Minified MUI error #${e}; visit ${n} for the full message.`}const G_="$$material";function t0(){return t0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t0.apply(null,arguments)}function Y_(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function K_(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var X_=function(){function e(n){var i=this;this._insertTag=function(r){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,a),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(K_(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Y_(r);try{a.insertRule(i,a.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Tt="-ms-",Cd="-moz-",ue="-webkit-",H3="comm",py="rule",gy="decl",Q_="@import",F3="@keyframes",I_="@layer",Z_=Math.abs,pf=String.fromCharCode,J_=Object.assign;function W_(e,t){return xt(e,0)^45?(((t<<2^xt(e,0))<<2^xt(e,1))<<2^xt(e,2))<<2^xt(e,3):0}function q3(e){return e.trim()}function eL(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function n0(e,t){return e.indexOf(t)}function xt(e,t){return e.charCodeAt(t)|0}function $l(e,t,n){return e.slice(t,n)}function Qn(e){return e.length}function yy(e){return e.length}function qc(e,t){return t.push(e),e}function tL(e,t){return e.map(t).join("")}var gf=1,Uo=1,G3=0,Yt=0,nt=0,ss="";function yf(e,t,n,i,r,a,o){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:gf,column:Uo,length:o,return:""}}function bs(e,t){return J_(yf("",null,null,"",null,null,0),e,{length:-e.length},t)}function nL(){return nt}function iL(){return nt=Yt>0?xt(ss,--Yt):0,Uo--,nt===10&&(Uo=1,gf--),nt}function an(){return nt=Yt<G3?xt(ss,Yt++):0,Uo++,nt===10&&(Uo=1,gf++),nt}function ii(){return xt(ss,Yt)}function $u(){return Yt}function oc(e,t){return $l(ss,e,t)}function zl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y3(e){return gf=Uo=1,G3=Qn(ss=e),Yt=0,[]}function K3(e){return ss="",e}function zu(e){return q3(oc(Yt-1,i0(e===91?e+2:e===40?e+1:e)))}function rL(e){for(;(nt=ii())&&nt<33;)an();return zl(e)>2||zl(nt)>3?"":" "}function aL(e,t){for(;--t&&an()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return oc(e,$u()+(t<6&&ii()==32&&an()==32))}function i0(e){for(;an();)switch(nt){case e:return Yt;case 34:case 39:e!==34&&e!==39&&i0(nt);break;case 40:e===41&&i0(e);break;case 92:an();break}return Yt}function oL(e,t){for(;an()&&e+nt!==57;)if(e+nt===84&&ii()===47)break;return"/*"+oc(t,Yt-1)+"*"+pf(e===47?e:an())}function sL(e){for(;!zl(ii());)an();return oc(e,Yt)}function lL(e){return K3(Mu("",null,null,null,[""],e=Y3(e),0,[0],e))}function Mu(e,t,n,i,r,a,o,s,l){for(var u=0,d=0,f=o,h=0,m=0,p=0,b=1,S=1,g=1,y=0,x="",v=r,A=a,E=i,j=x;S;)switch(p=y,y=an()){case 40:if(p!=108&&xt(j,f-1)==58){n0(j+=de(zu(y),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:j+=zu(y);break;case 9:case 10:case 13:case 32:j+=rL(p);break;case 92:j+=aL($u()-1,7);continue;case 47:switch(ii()){case 42:case 47:qc(cL(oL(an(),$u()),t,n),l);break;default:j+="/"}break;case 123*b:s[u++]=Qn(j)*g;case 125*b:case 59:case 0:switch(y){case 0:case 125:S=0;case 59+d:g==-1&&(j=de(j,/\f/g,"")),m>0&&Qn(j)-f&&qc(m>32?jv(j+";",i,n,f-1):jv(de(j," ","")+";",i,n,f-2),l);break;case 59:j+=";";default:if(qc(E=Tv(j,t,n,u,d,r,s,x,v=[],A=[],f),a),y===123)if(d===0)Mu(j,t,E,E,v,a,f,s,A);else switch(h===99&&xt(j,3)===110?100:h){case 100:case 108:case 109:case 115:Mu(e,E,E,i&&qc(Tv(e,E,E,0,0,r,s,x,r,v=[],f),A),r,A,f,s,i?v:A);break;default:Mu(j,E,E,E,[""],A,0,s,A)}}u=d=m=0,b=g=1,x=j="",f=o;break;case 58:f=1+Qn(j),m=p;default:if(b<1){if(y==123)--b;else if(y==125&&b++==0&&iL()==125)continue}switch(j+=pf(y),y*b){case 38:g=d>0?1:(j+="\f",-1);break;case 44:s[u++]=(Qn(j)-1)*g,g=1;break;case 64:ii()===45&&(j+=zu(an())),h=ii(),d=f=Qn(x=j+=sL($u())),y++;break;case 45:p===45&&Qn(j)==2&&(b=0)}}return a}function Tv(e,t,n,i,r,a,o,s,l,u,d){for(var f=r-1,h=r===0?a:[""],m=yy(h),p=0,b=0,S=0;p<i;++p)for(var g=0,y=$l(e,f+1,f=Z_(b=o[p])),x=e;g<m;++g)(x=q3(b>0?h[g]+" "+y:de(y,/&\f/g,h[g])))&&(l[S++]=x);return yf(e,t,n,r===0?py:s,l,u,d)}function cL(e,t,n){return yf(e,t,n,H3,pf(nL()),$l(e,2,-2),0)}function jv(e,t,n,i){return yf(e,t,n,gy,$l(e,0,i),$l(e,i+1,-1),i)}function oo(e,t){for(var n="",i=yy(e),r=0;r<i;r++)n+=t(e[r],r,e,t)||"";return n}function uL(e,t,n,i){switch(e.type){case I_:if(e.children.length)break;case Q_:case gy:return e.return=e.return||e.value;case H3:return"";case F3:return e.return=e.value+"{"+oo(e.children,i)+"}";case py:e.value=e.props.join(",")}return Qn(n=oo(e.children,i))?e.return=e.value+"{"+n+"}":""}function dL(e){var t=yy(e);return function(n,i,r,a){for(var o="",s=0;s<t;s++)o+=e[s](n,i,r,a)||"";return o}}function fL(e){return function(t){t.root||(t=t.return)&&e(t)}}function X3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var hL=function(t,n,i){for(var r=0,a=0;r=a,a=ii(),r===38&&a===12&&(n[i]=1),!zl(a);)an();return oc(t,Yt)},mL=function(t,n){var i=-1,r=44;do switch(zl(r)){case 0:r===38&&ii()===12&&(n[i]=1),t[i]+=hL(Yt-1,n,i);break;case 2:t[i]+=zu(r);break;case 4:if(r===44){t[++i]=ii()===58?"&\f":"",n[i]=t[i].length;break}default:t[i]+=pf(r)}while(r=an());return t},pL=function(t,n){return K3(mL(Y3(t),n))},Ev=new WeakMap,gL=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,i=t.parent,r=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ev.get(i))&&!r){Ev.set(t,!0);for(var a=[],o=pL(n,a),s=i.props,l=0,u=0;l<o.length;l++)for(var d=0;d<s.length;d++,u++)t.props[u]=a[l]?o[l].replace(/&\f/g,s[d]):s[d]+" "+o[l]}}},yL=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Q3(e,t){switch(W_(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Cd+e+Tt+e+e;case 6828:case 4268:return ue+e+Tt+e+e;case 6165:return ue+e+Tt+"flex-"+e+e;case 5187:return ue+e+de(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+Tt+"flex-$1$2")+e;case 5443:return ue+e+Tt+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ue+e+Tt+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+Tt+de(e,"shrink","negative")+e;case 5292:return ue+e+Tt+de(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+de(e,"-grow","")+ue+e+Tt+de(e,"grow","positive")+e;case 4554:return ue+de(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+Tt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qn(e)-1-t>6)switch(xt(e,t+1)){case 109:if(xt(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Cd+(xt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~n0(e,"stretch")?Q3(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(xt(e,t+1)!==115)break;case 6444:switch(xt(e,Qn(e)-3-(~n0(e,"!important")&&10))){case 107:return de(e,":",":"+ue)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(xt(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+Tt+"$2box$3")+e}break;case 5936:switch(xt(e,t+11)){case 114:return ue+e+Tt+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+Tt+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+Tt+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+Tt+e+e}return e}var xL=function(t,n,i,r){if(t.length>-1&&!t.return)switch(t.type){case gy:t.return=Q3(t.value,t.length);break;case F3:return oo([bs(t,{value:de(t.value,"@","@"+ue)})],r);case py:if(t.length)return tL(t.props,function(a){switch(eL(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return oo([bs(t,{props:[de(a,/:(read-\w+)/,":"+Cd+"$1")]})],r);case"::placeholder":return oo([bs(t,{props:[de(a,/:(plac\w+)/,":"+ue+"input-$1")]}),bs(t,{props:[de(a,/:(plac\w+)/,":"+Cd+"$1")]}),bs(t,{props:[de(a,/:(plac\w+)/,Tt+"input-$1")]})],r)}return""})}},bL=[xL],vL=function(t){var n=t.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(b){var S=b.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var r=t.stylisPlugins||bL,a={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var S=b.getAttribute("data-emotion").split(" "),g=1;g<S.length;g++)a[S[g]]=!0;s.push(b)});var l,u=[gL,yL];{var d,f=[uL,fL(function(b){d.insert(b)})],h=dL(u.concat(r,f)),m=function(S){return oo(lL(S),h)};l=function(S,g,y,x){d=y,m(S?S+"{"+g.styles+"}":g.styles),x&&(p.inserted[g.name]=!0)}}var p={key:n,sheet:new X_({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return p.sheet.hydrate(s),p},wL=!0;function SL(e,t,n){var i="";return n.split(" ").forEach(function(r){e[r]!==void 0?t.push(e[r]+";"):r&&(i+=r+" ")}),i}var I3=function(t,n,i){var r=t.key+"-"+n.name;(i===!1||wL===!1)&&t.registered[r]===void 0&&(t.registered[r]=n.styles)},CL=function(t,n,i){I3(t,n,i);var r=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+r:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function TL(e){for(var t=0,n,i=0,r=e.length;r>=4;++i,r-=4)n=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(r){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var jL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},EL=/[A-Z]|^ms/g,AL=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Z3=function(t){return t.charCodeAt(1)===45},Av=function(t){return t!=null&&typeof t!="boolean"},nm=X3(function(e){return Z3(e)?e:e.replace(EL,"-$&").toLowerCase()}),kv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(AL,function(i,r,a){return In={name:r,styles:a,next:In},r})}return jL[t]!==1&&!Z3(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ml(e,t,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return In={name:r.name,styles:r.styles,next:In},r.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)In={name:o.name,styles:o.styles,next:In},o=o.next;var s=a.styles+";";return s}return kL(e,t,n)}case"function":{if(e!==void 0){var l=In,u=n(e);return In=l,Ml(e,t,u)}break}}var d=n;if(t==null)return d;var f=t[d];return f!==void 0?f:d}function kL(e,t,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Ml(e,t,n[r])+";";else for(var a in n){var o=n[a];if(typeof o!="object"){var s=o;t!=null&&t[s]!==void 0?i+=a+"{"+t[s]+"}":Av(s)&&(i+=nm(a)+":"+kv(a,s)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)Av(o[l])&&(i+=nm(a)+":"+kv(a,o[l])+";");else{var u=Ml(e,t,o);switch(a){case"animation":case"animationName":{i+=nm(a)+":"+u+";";break}default:i+=a+"{"+u+"}"}}}return i}var Rv=/label:\s*([^\s;{]+)\s*(;|$)/g,In;function J3(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,r="";In=void 0;var a=e[0];if(a==null||a.raw===void 0)i=!1,r+=Ml(n,t,a);else{var o=a;r+=o[0]}for(var s=1;s<e.length;s++)if(r+=Ml(n,t,e[s]),i){var l=a;r+=l[s]}Rv.lastIndex=0;for(var u="",d;(d=Rv.exec(r))!==null;)u+="-"+d[1];var f=TL(r)+u;return{name:f,styles:r,next:In}}var RL=function(t){return t()},$L=vm.useInsertionEffect?vm.useInsertionEffect:!1,zL=$L||RL,W3=w.createContext(typeof HTMLElement<"u"?vL({key:"css"}):null);W3.Provider;var ML=function(t){return w.forwardRef(function(n,i){var r=w.useContext(W3);return t(n,r,i)})},OL=w.createContext({}),DL=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_L=X3(function(e){return DL.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),LL=_L,NL=function(t){return t!=="theme"},$v=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?LL:NL},zv=function(t,n,i){var r;if(n){var a=n.shouldForwardProp;r=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof r!="function"&&i&&(r=t.__emotion_forwardProp),r},BL=function(t){var n=t.cache,i=t.serialized,r=t.isStringTag;return I3(n,i,r),zL(function(){return CL(n,i,r)}),null},UL=function e(t,n){var i=t.__emotion_real===t,r=i&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=zv(t,n,i),l=s||$v(r),u=!l("as");return function(){var d=arguments,f=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&f.push("label:"+a+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{var h=d[0];f.push(h[0]);for(var m=d.length,p=1;p<m;p++)f.push(d[p],h[p])}var b=ML(function(S,g,y){var x=u&&S.as||r,v="",A=[],E=S;if(S.theme==null){E={};for(var j in S)E[j]=S[j];E.theme=w.useContext(OL)}typeof S.className=="string"?v=SL(g.registered,A,S.className):S.className!=null&&(v=S.className+" ");var k=J3(f.concat(A),g.registered,E);v+=g.key+"-"+k.name,o!==void 0&&(v+=" "+o);var O=u&&s===void 0?$v(x):l,_={};for(var P in S)u&&P==="as"||O(P)&&(_[P]=S[P]);return _.className=v,y&&(_.ref=y),w.createElement(w.Fragment,null,w.createElement(BL,{cache:g,serialized:k,isStringTag:typeof x=="string"}),w.createElement(x,_))});return b.displayName=a!==void 0?a:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=r,b.__emotion_styles=f,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+o}}),b.withComponent=function(S,g){var y=e(S,t0({},n,g,{shouldForwardProp:zv(b,g,!0)}));return y.apply(void 0,f)},b}},VL=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],r0=UL.bind(null);VL.forEach(function(e){r0[e]=r0(e)});function PL(e,t){return r0(e,t)}function HL(e,t){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}const Mv=[];function ra(e){return Mv[0]=e,J3(Mv)}var ej={exports:{}},je={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy=Symbol.for("react.transitional.element"),by=Symbol.for("react.portal"),xf=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),vf=Symbol.for("react.profiler"),wf=Symbol.for("react.consumer"),Sf=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),Af=Symbol.for("react.lazy"),FL=Symbol.for("react.view_transition"),qL=Symbol.for("react.client.reference");function $n(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xy:switch(e=e.type,e){case xf:case vf:case bf:case Tf:case jf:case FL:return e;default:switch(e=e&&e.$$typeof,e){case Sf:case Cf:case Af:case Ef:return e;case wf:return e;default:return t}}case by:return t}}}je.ContextConsumer=wf;je.ContextProvider=Sf;je.Element=xy;je.ForwardRef=Cf;je.Fragment=xf;je.Lazy=Af;je.Memo=Ef;je.Portal=by;je.Profiler=vf;je.StrictMode=bf;je.Suspense=Tf;je.SuspenseList=jf;je.isContextConsumer=function(e){return $n(e)===wf};je.isContextProvider=function(e){return $n(e)===Sf};je.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xy};je.isForwardRef=function(e){return $n(e)===Cf};je.isFragment=function(e){return $n(e)===xf};je.isLazy=function(e){return $n(e)===Af};je.isMemo=function(e){return $n(e)===Ef};je.isPortal=function(e){return $n(e)===by};je.isProfiler=function(e){return $n(e)===vf};je.isStrictMode=function(e){return $n(e)===bf};je.isSuspense=function(e){return $n(e)===Tf};je.isSuspenseList=function(e){return $n(e)===jf};je.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xf||e===vf||e===bf||e===Tf||e===jf||typeof e=="object"&&e!==null&&(e.$$typeof===Af||e.$$typeof===Ef||e.$$typeof===Sf||e.$$typeof===wf||e.$$typeof===Cf||e.$$typeof===qL||e.getModuleId!==void 0)};je.typeOf=$n;ej.exports=je;var tj=ej.exports;function bi(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function nj(e){if(w.isValidElement(e)||tj.isValidElementType(e)||!bi(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=nj(e[n])}),t}function on(e,t,n={clone:!0}){const i=n.clone?{...e}:e;return bi(e)&&bi(t)&&Object.keys(t).forEach(r=>{w.isValidElement(t[r])||tj.isValidElementType(t[r])?i[r]=t[r]:bi(t[r])&&Object.prototype.hasOwnProperty.call(e,r)&&bi(e[r])?i[r]=on(e[r],t[r],n):n.clone?i[r]=bi(t[r])?nj(t[r]):t[r]:i[r]=t[r]}),i}const GL=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,i)=>n.val-i.val),t.reduce((n,i)=>({...n,[i.key]:i.val}),{})};function YL(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:i=5,...r}=e,a=GL(t),o=Object.keys(a);function s(h){return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n})`}function l(h){return`@media (max-width:${(typeof t[h]=="number"?t[h]:h)-i/100}${n})`}function u(h,m){const p=o.indexOf(m);return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n}) and (max-width:${(p!==-1&&typeof t[o[p]]=="number"?t[o[p]]:m)-i/100}${n})`}function d(h){return o.indexOf(h)+1<o.length?u(h,o[o.indexOf(h)+1]):s(h)}function f(h){const m=o.indexOf(h);return m===0?s(o[1]):m===o.length-1?l(o[m]):u(h,o[o.indexOf(h)+1]).replace("@media","@media not all and")}return{keys:o,values:a,up:s,down:l,between:u,only:d,not:f,unit:n,...r}}function Ov(e,t){if(!e.containerQueries)return t;const n=Object.keys(t).filter(i=>i.startsWith("@container")).sort((i,r)=>{var o,s;const a=/min-width:\s*([0-9.]+)/;return+(((o=i.match(a))==null?void 0:o[1])||0)-+(((s=r.match(a))==null?void 0:s[1])||0)});return n.length?n.reduce((i,r)=>{const a=t[r];return delete i[r],i[r]=a,i},{...t}):t}function KL(e,t){return t==="@"||t.startsWith("@")&&(e.some(n=>t.startsWith(`@${n}`))||!!t.match(/^@\d/))}function XL(e,t){const n=t.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,i,r]=n,a=Number.isNaN(+i)?i||0:+i;return e.containerQueries(r).up(a)}function QL(e){const t=(a,o)=>a.replace("@media",o?`@container ${o}`:"@container");function n(a,o){a.up=(...s)=>t(e.breakpoints.up(...s),o),a.down=(...s)=>t(e.breakpoints.down(...s),o),a.between=(...s)=>t(e.breakpoints.between(...s),o),a.only=(...s)=>t(e.breakpoints.only(...s),o),a.not=(...s)=>{const l=t(e.breakpoints.not(...s),o);return l.includes("not all and")?l.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):l}}const i={},r=a=>(n(i,a),i);return n(r),{...e,containerQueries:r}}const IL={borderRadius:4};function Ws(e,t){return t?on(e,t,{clone:!1}):e}const kf={xs:0,sm:600,md:900,lg:1200,xl:1536},Dv={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${kf[e]}px)`},ZL={containerQueries:e=>({up:t=>{let n=typeof t=="number"?t:kf[t]||t;return typeof n=="number"&&(n=`${n}px`),e?`@container ${e} (min-width:${n})`:`@container (min-width:${n})`}})};function _i(e,t,n){const i=e.theme||{};if(Array.isArray(t)){const a=i.breakpoints||Dv;return t.reduce((o,s,l)=>(o[a.up(a.keys[l])]=n(t[l]),o),{})}if(typeof t=="object"){const a=i.breakpoints||Dv;return Object.keys(t).reduce((o,s)=>{if(KL(a.keys,s)){const l=XL(i.containerQueries?i:ZL,s);l&&(o[l]=n(t[s],s))}else if(Object.keys(a.values||kf).includes(s)){const l=a.up(s);o[l]=n(t[s],s)}else{const l=s;o[l]=t[l]}return o},{})}return n(t)}function JL(e={}){var n;return((n=e.keys)==null?void 0:n.reduce((i,r)=>{const a=e.up(r);return i[a]={},i},{}))||{}}function _v(e,t){return e.reduce((n,i)=>{const r=n[i];return(!r||Object.keys(r).length===0)&&delete n[i],n},t)}function Cr(e){if(typeof e!="string")throw new Error(ha(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Rf(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const i=`vars.${t}`.split(".").reduce((r,a)=>r&&r[a]?r[a]:null,e);if(i!=null)return i}return t.split(".").reduce((i,r)=>i&&i[r]!=null?i[r]:null,e)}function Td(e,t,n,i=n){let r;return typeof e=="function"?r=e(n):Array.isArray(e)?r=e[n]||i:r=Rf(e,n)||i,t&&(r=t(r,i,e)),r}function Ie(e){const{prop:t,cssProperty:n=e.prop,themeKey:i,transform:r}=e,a=o=>{if(o[t]==null)return null;const s=o[t],l=o.theme,u=Rf(l,i)||{};return _i(o,s,f=>{let h=Td(u,r,f);return f===h&&typeof f=="string"&&(h=Td(u,r,`${t}${f==="default"?"":Cr(f)}`,f)),n===!1?h:{[n]:h}})};return a.propTypes={},a.filterProps=[t],a}function WL(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const eN={m:"margin",p:"padding"},tN={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Lv={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},nN=WL(e=>{if(e.length>2)if(Lv[e])e=Lv[e];else return[e];const[t,n]=e.split(""),i=eN[t],r=tN[n]||"";return Array.isArray(r)?r.map(a=>i+a):[i+r]}),vy=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],wy=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...vy,...wy];function sc(e,t,n,i){const r=Rf(e,t,!0)??n;return typeof r=="number"||typeof r=="string"?a=>typeof a=="string"?a:typeof r=="string"?r.startsWith("var(")&&a===0?0:r.startsWith("var(")&&a===1?r:`calc(${a} * ${r})`:r*a:Array.isArray(r)?a=>{if(typeof a=="string")return a;const o=Math.abs(a),s=r[o];return a>=0?s:typeof s=="number"?-s:typeof s=="string"&&s.startsWith("var(")?`calc(-1 * ${s})`:`-${s}`}:typeof r=="function"?r:()=>{}}function Sy(e){return sc(e,"spacing",8)}function lc(e,t){return typeof t=="string"||t==null?t:e(t)}function iN(e,t){return n=>e.reduce((i,r)=>(i[r]=lc(t,n),i),{})}function rN(e,t,n,i){if(!t.includes(n))return null;const r=nN(n),a=iN(r,i),o=e[n];return _i(e,o,a)}function ij(e,t){const n=Sy(e.theme);return Object.keys(e).map(i=>rN(e,t,i,n)).reduce(Ws,{})}function Ve(e){return ij(e,vy)}Ve.propTypes={};Ve.filterProps=vy;function Pe(e){return ij(e,wy)}Pe.propTypes={};Pe.filterProps=wy;function rj(e=8,t=Sy({spacing:e})){if(e.mui)return e;const n=(...i)=>(i.length===0?[1]:i).map(a=>{const o=t(a);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function $f(...e){const t=e.reduce((i,r)=>(r.filterProps.forEach(a=>{i[a]=r}),i),{}),n=i=>Object.keys(i).reduce((r,a)=>t[a]?Ws(r,t[a](i)):r,{});return n.propTypes={},n.filterProps=e.reduce((i,r)=>i.concat(r.filterProps),[]),n}function yn(e){return typeof e!="number"?e:`${e}px solid`}function zn(e,t){return Ie({prop:e,themeKey:"borders",transform:t})}const aN=zn("border",yn),oN=zn("borderTop",yn),sN=zn("borderRight",yn),lN=zn("borderBottom",yn),cN=zn("borderLeft",yn),uN=zn("borderColor"),dN=zn("borderTopColor"),fN=zn("borderRightColor"),hN=zn("borderBottomColor"),mN=zn("borderLeftColor"),pN=zn("outline",yn),gN=zn("outlineColor"),zf=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=sc(e.theme,"shape.borderRadius",4),n=i=>({borderRadius:lc(t,i)});return _i(e,e.borderRadius,n)}return null};zf.propTypes={};zf.filterProps=["borderRadius"];$f(aN,oN,sN,lN,cN,uN,dN,fN,hN,mN,zf,pN,gN);const Mf=e=>{if(e.gap!==void 0&&e.gap!==null){const t=sc(e.theme,"spacing",8),n=i=>({gap:lc(t,i)});return _i(e,e.gap,n)}return null};Mf.propTypes={};Mf.filterProps=["gap"];const Of=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=sc(e.theme,"spacing",8),n=i=>({columnGap:lc(t,i)});return _i(e,e.columnGap,n)}return null};Of.propTypes={};Of.filterProps=["columnGap"];const Df=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=sc(e.theme,"spacing",8),n=i=>({rowGap:lc(t,i)});return _i(e,e.rowGap,n)}return null};Df.propTypes={};Df.filterProps=["rowGap"];const yN=Ie({prop:"gridColumn"}),xN=Ie({prop:"gridRow"}),bN=Ie({prop:"gridAutoFlow"}),vN=Ie({prop:"gridAutoColumns"}),wN=Ie({prop:"gridAutoRows"}),SN=Ie({prop:"gridTemplateColumns"}),CN=Ie({prop:"gridTemplateRows"}),TN=Ie({prop:"gridTemplateAreas"}),jN=Ie({prop:"gridArea"});$f(Mf,Of,Df,yN,xN,bN,vN,wN,SN,CN,TN,jN);function so(e,t){return t==="grey"?t:e}const EN=Ie({prop:"color",themeKey:"palette",transform:so}),AN=Ie({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:so}),kN=Ie({prop:"backgroundColor",themeKey:"palette",transform:so});$f(EN,AN,kN);function Jt(e){return e<=1&&e!==0?`${e*100}%`:e}const RN=Ie({prop:"width",transform:Jt}),Cy=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,a,o,s,l;const i=((o=(a=(r=e.theme)==null?void 0:r.breakpoints)==null?void 0:a.values)==null?void 0:o[n])||kf[n];return i?((l=(s=e.theme)==null?void 0:s.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:Jt(n)}};return _i(e,e.maxWidth,t)}return null};Cy.filterProps=["maxWidth"];const $N=Ie({prop:"minWidth",transform:Jt}),zN=Ie({prop:"height",transform:Jt}),MN=Ie({prop:"maxHeight",transform:Jt}),ON=Ie({prop:"minHeight",transform:Jt});Ie({prop:"size",cssProperty:"width",transform:Jt});Ie({prop:"size",cssProperty:"height",transform:Jt});const DN=Ie({prop:"boxSizing"});$f(RN,Cy,$N,zN,MN,ON,DN);const _f={border:{themeKey:"borders",transform:yn},borderTop:{themeKey:"borders",transform:yn},borderRight:{themeKey:"borders",transform:yn},borderBottom:{themeKey:"borders",transform:yn},borderLeft:{themeKey:"borders",transform:yn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:yn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:zf},color:{themeKey:"palette",transform:so},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:so},backgroundColor:{themeKey:"palette",transform:so},p:{style:Pe},pt:{style:Pe},pr:{style:Pe},pb:{style:Pe},pl:{style:Pe},px:{style:Pe},py:{style:Pe},padding:{style:Pe},paddingTop:{style:Pe},paddingRight:{style:Pe},paddingBottom:{style:Pe},paddingLeft:{style:Pe},paddingX:{style:Pe},paddingY:{style:Pe},paddingInline:{style:Pe},paddingInlineStart:{style:Pe},paddingInlineEnd:{style:Pe},paddingBlock:{style:Pe},paddingBlockStart:{style:Pe},paddingBlockEnd:{style:Pe},m:{style:Ve},mt:{style:Ve},mr:{style:Ve},mb:{style:Ve},ml:{style:Ve},mx:{style:Ve},my:{style:Ve},margin:{style:Ve},marginTop:{style:Ve},marginRight:{style:Ve},marginBottom:{style:Ve},marginLeft:{style:Ve},marginX:{style:Ve},marginY:{style:Ve},marginInline:{style:Ve},marginInlineStart:{style:Ve},marginInlineEnd:{style:Ve},marginBlock:{style:Ve},marginBlockStart:{style:Ve},marginBlockEnd:{style:Ve},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Mf},rowGap:{style:Df},columnGap:{style:Of},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Jt},maxWidth:{style:Cy},minWidth:{transform:Jt},height:{transform:Jt},maxHeight:{transform:Jt},minHeight:{transform:Jt},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function _N(...e){const t=e.reduce((i,r)=>i.concat(Object.keys(r)),[]),n=new Set(t);return e.every(i=>n.size===Object.keys(i).length)}function LN(e,t){return typeof e=="function"?e(t):e}function NN(){function e(n,i,r,a){const o={[n]:i,theme:r},s=a[n];if(!s)return{[n]:i};const{cssProperty:l=n,themeKey:u,transform:d,style:f}=s;if(i==null)return null;if(u==="typography"&&i==="inherit")return{[n]:i};const h=Rf(r,u)||{};return f?f(o):_i(o,i,p=>{let b=Td(h,d,p);return p===b&&typeof p=="string"&&(b=Td(h,d,`${n}${p==="default"?"":Cr(p)}`,p)),l===!1?b:{[l]:b}})}function t(n){const{sx:i,theme:r={},nested:a}=n||{};if(!i)return null;const o=r.unstable_sxConfig??_f;function s(l){let u=l;if(typeof l=="function")u=l(r);else if(typeof l!="object")return l;if(!u)return null;const d=JL(r.breakpoints),f=Object.keys(d);let h=d;return Object.keys(u).forEach(m=>{const p=LN(u[m],r);if(p!=null)if(typeof p=="object")if(o[m])h=Ws(h,e(m,p,r,o));else{const b=_i({theme:r},p,S=>({[m]:S}));_N(b,p)?h[m]=t({sx:p,theme:r,nested:!0}):h=Ws(h,b)}else h=Ws(h,e(m,p,r,o))}),!a&&r.modularCssLayers?{"@layer sx":Ov(r,_v(f,h))}:Ov(r,_v(f,h))}return Array.isArray(i)?i.map(s):s(i)}return t}const Vo=NN();Vo.filterProps=["sx"];function BN(e,t){var i;const n=this;if(n.vars){if(!((i=n.colorSchemes)!=null&&i[e])||typeof n.getColorSchemeSelector!="function")return{};let r=n.getColorSchemeSelector(e);return r==="&"?t:((r.includes("data-")||r.includes("."))&&(r=`*:where(${r.replace(/\s*&$/,"")}) &`),{[r]:t})}return n.palette.mode===e?t:{}}function aj(e={},...t){const{breakpoints:n={},palette:i={},spacing:r,shape:a={},...o}=e,s=YL(n),l=rj(r);let u=on({breakpoints:s,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:l,shape:{...IL,...a}},o);return u=QL(u),u.applyStyles=BN,u=t.reduce((d,f)=>on(d,f),u),u.unstable_sxConfig={..._f,...o==null?void 0:o.unstable_sxConfig},u.unstable_sx=function(f){return Vo({sx:f,theme:this})},u}const Nv=e=>e,UN=()=>{let e=Nv;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Nv}}},VN=UN();function oj(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=oj(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function gr(){for(var e,t,n=0,i="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=oj(e))&&(i&&(i+=" "),i+=t);return i}const PN={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ty(e,t,n="Mui"){const i=PN[t];return i?`${n}-${i}`:`${VN.generate(e)}-${t}`}function sj(e,t,n="Mui"){const i={};return t.forEach(r=>{i[r]=Ty(e,r,n)}),i}function lj(e){const{variants:t,...n}=e,i={variants:t,style:ra(n),isProcessed:!0};return i.style===n||t&&t.forEach(r=>{typeof r.style!="function"&&(r.style=ra(r.style))}),i}const HN=aj();function im(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function Hr(e,t){return t&&e&&typeof e=="object"&&e.styles&&!e.styles.startsWith("@layer")&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}function FN(e){return e?(t,n)=>n[e]:null}function qN(e,t,n){e.theme=KN(e.theme)?n:e.theme[t]||e.theme}function Ou(e,t,n){const i=typeof t=="function"?t(e):t;if(Array.isArray(i))return i.flatMap(r=>Ou(e,r,n));if(Array.isArray(i==null?void 0:i.variants)){let r;if(i.isProcessed)r=n?Hr(i.style,n):i.style;else{const{variants:a,...o}=i;r=n?Hr(ra(o),n):o}return cj(e,i.variants,[r],n)}return i!=null&&i.isProcessed?n?Hr(ra(i.style),n):i.style:n?Hr(ra(i),n):i}function cj(e,t,n=[],i=void 0){var a;let r;e:for(let o=0;o<t.length;o+=1){const s=t[o];if(typeof s.props=="function"){if(r??(r={...e,...e.ownerState,ownerState:e.ownerState}),!s.props(r))continue}else for(const l in s.props)if(e[l]!==s.props[l]&&((a=e.ownerState)==null?void 0:a[l])!==s.props[l])continue e;typeof s.style=="function"?(r??(r={...e,...e.ownerState,ownerState:e.ownerState}),n.push(i?Hr(ra(s.style(r)),i):s.style(r))):n.push(i?Hr(ra(s.style),i):s.style)}return n}function GN(e={}){const{themeId:t,defaultTheme:n=HN,rootShouldForwardProp:i=im,slotShouldForwardProp:r=im}=e;function a(s){qN(s,t,n)}return(s,l={})=>{HL(s,E=>E.filter(j=>j!==Vo));const{name:u,slot:d,skipVariantsResolver:f,skipSx:h,overridesResolver:m=FN(QN(d)),...p}=l,b=u&&u.startsWith("Mui")||d?"components":"custom",S=f!==void 0?f:d&&d!=="Root"&&d!=="root"||!1,g=h||!1;let y=im;d==="Root"||d==="root"?y=i:d?y=r:XN(s)&&(y=void 0);const x=PL(s,{shouldForwardProp:y,label:YN(),...p}),v=E=>{if(E.__emotion_real===E)return E;if(typeof E=="function")return function(k){return Ou(k,E,k.theme.modularCssLayers?b:void 0)};if(bi(E)){const j=lj(E);return function(O){return j.variants?Ou(O,j,O.theme.modularCssLayers?b:void 0):O.theme.modularCssLayers?Hr(j.style,b):j.style}}return E},A=(...E)=>{const j=[],k=E.map(v),O=[];if(j.push(a),u&&m&&O.push(function(V){var U,z;const q=(z=(U=V.theme.components)==null?void 0:U[u])==null?void 0:z.styleOverrides;if(!q)return null;const $={};for(const B in q)$[B]=Ou(V,q[B],V.theme.modularCssLayers?"theme":void 0);return m(V,$)}),u&&!S&&O.push(function(V){var $,U;const N=V.theme,q=(U=($=N==null?void 0:N.components)==null?void 0:$[u])==null?void 0:U.variants;return q?cj(V,q,[],V.theme.modularCssLayers?"theme":void 0):null}),g||O.push(Vo),Array.isArray(k[0])){const T=k.shift(),V=new Array(j.length).fill(""),N=new Array(O.length).fill("");let q;q=[...V,...T,...N],q.raw=[...V,...T.raw,...N],j.unshift(q)}const _=[...j,...k,...O],P=x(..._);return s.muiName&&(P.muiName=s.muiName),P};return x.withConfig&&(A.withConfig=x.withConfig),A}}function YN(e,t){return void 0}function KN(e){for(const t in e)return!1;return!0}function XN(e){return typeof e=="string"&&e.charCodeAt(0)>96}function QN(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}function a0(e,t,n=!1){const i={...t};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const a=r;if(a==="components"||a==="slots")i[a]={...e[a],...i[a]};else if(a==="componentsProps"||a==="slotProps"){const o=e[a],s=t[a];if(!s)i[a]=o||{};else if(!o)i[a]=s;else{i[a]={...s};for(const l in o)if(Object.prototype.hasOwnProperty.call(o,l)){const u=l;i[a][u]=a0(o[u],s[u],n)}}}else a==="className"&&n&&t.className?i.className=gr(e==null?void 0:e.className,t==null?void 0:t.className):a==="style"&&n&&t.style?i.style={...e==null?void 0:e.style,...t==null?void 0:t.style}:i[a]===void 0&&(i[a]=e[a])}return i}function uj(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}function jy(e,t=0,n=1){return uj(e,t,n)}function IN(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function Tr(e){if(e.type)return e;if(e.charAt(0)==="#")return Tr(IN(e));const t=e.indexOf("("),n=e.substring(0,t);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(ha(9,e));let i=e.substring(t+1,e.length-1),r;if(n==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(r))throw new Error(ha(10,r))}else i=i.split(",");return i=i.map(a=>parseFloat(a)),{type:n,values:i,colorSpace:r}}const ZN=e=>{const t=Tr(e);return t.values.slice(0,3).map((n,i)=>t.type.includes("hsl")&&i!==0?`${n}%`:n).join(" ")},zs=(e,t)=>{try{return ZN(e)}catch{return e}};function Lf(e){const{type:t,colorSpace:n}=e;let{values:i}=e;return t.includes("rgb")?i=i.map((r,a)=>a<3?parseInt(r,10):r):t.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),t.includes("color")?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${t}(${i})`}function dj(e){e=Tr(e);const{values:t}=e,n=t[0],i=t[1]/100,r=t[2]/100,a=i*Math.min(r,1-r),o=(u,d=(u+n/30)%12)=>r-a*Math.max(Math.min(d-3,9-d,1),-1);let s="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return e.type==="hsla"&&(s+="a",l.push(t[3])),Lf({type:s,values:l})}function o0(e){e=Tr(e);let t=e.type==="hsl"||e.type==="hsla"?Tr(dj(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function JN(e,t){const n=o0(e),i=o0(t);return(Math.max(n,i)+.05)/(Math.min(n,i)+.05)}function fj(e,t){return e=Tr(e),t=jy(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Lf(e)}function zr(e,t,n){try{return fj(e,t)}catch{return e}}function Nf(e,t){if(e=Tr(e),t=jy(t),e.type.includes("hsl"))e.values[2]*=1-t;else if(e.type.includes("rgb")||e.type.includes("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Lf(e)}function xe(e,t,n){try{return Nf(e,t)}catch{return e}}function Bf(e,t){if(e=Tr(e),t=jy(t),e.type.includes("hsl"))e.values[2]+=(100-e.values[2])*t;else if(e.type.includes("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.includes("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Lf(e)}function be(e,t,n){try{return Bf(e,t)}catch{return e}}function WN(e,t=.15){return o0(e)>.5?Nf(e,t):Bf(e,t)}function Gc(e,t,n){try{return WN(e,t)}catch{return e}}const eB=w.createContext(),tB=()=>w.useContext(eB)??!1,nB=w.createContext(void 0);function iB(e){const{theme:t,name:n,props:i}=e;if(!t||!t.components||!t.components[n])return i;const r=t.components[n];return r.defaultProps?a0(r.defaultProps,i,t.components.mergeClassNameAndStyle):!r.styleOverrides&&!r.variants?a0(r,i,t.components.mergeClassNameAndStyle):i}function rB({props:e,name:t}){const n=w.useContext(nB);return iB({props:e,name:t,theme:{components:n}})}let Bv=0;function aB(e){const[t,n]=w.useState(e),i=e||t;return w.useEffect(()=>{t==null&&(Bv+=1,n(`mui-${Bv}`))},[t]),i}const oB={...vm},Uv=oB.useId;function hj(e){if(Uv!==void 0){const t=Uv();return e??t}return aB(e)}const Vv={theme:void 0};function sB(e){let t,n;return function(r){let a=t;return(a===void 0||r.theme!==n)&&(Vv.theme=r.theme,a=lj(e(Vv)),t=a,n=r.theme),a}}function lB(e=""){function t(...i){if(!i.length)return"";const r=i[0];return typeof r=="string"&&!r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${e?`${e}-`:""}${r}${t(...i.slice(1))})`:`, ${r}`}return(i,...r)=>`var(--${e?`${e}-`:""}${i}${t(...r)})`}const Pv=(e,t,n,i=[])=>{let r=e;t.forEach((a,o)=>{o===t.length-1?Array.isArray(r)?r[Number(a)]=n:r&&typeof r=="object"&&(r[a]=n):r&&typeof r=="object"&&(r[a]||(r[a]=i.includes(a)?[]:{}),r=r[a])})},cB=(e,t,n)=>{function i(r,a=[],o=[]){Object.entries(r).forEach(([s,l])=>{(!n||n&&!n([...a,s]))&&l!=null&&(typeof l=="object"&&Object.keys(l).length>0?i(l,[...a,s],Array.isArray(l)?[...o,s]:o):t([...a,s],l,o))})}i(e)},uB=(e,t)=>typeof t=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>e.includes(i))||e[e.length-1].toLowerCase().includes("opacity")?t:`${t}px`:t;function rm(e,t){const{prefix:n,shouldSkipGeneratingVar:i}=t||{},r={},a={},o={};return cB(e,(s,l,u)=>{if((typeof l=="string"||typeof l=="number")&&(!i||!i(s,l))){const d=`--${n?`${n}-`:""}${s.join("-")}`,f=uB(s,l);Object.assign(r,{[d]:f}),Pv(a,s,`var(${d})`,u),Pv(o,s,`var(${d}, ${f})`,u)}},s=>s[0]==="vars"),{css:r,vars:a,varsWithDefaults:o}}function dB(e,t={}){const{getSelector:n=g,disableCssColorScheme:i,colorSchemeSelector:r,enableContrastVars:a}=t,{colorSchemes:o={},components:s,defaultColorScheme:l="light",...u}=e,{vars:d,css:f,varsWithDefaults:h}=rm(u,t);let m=h;const p={},{[l]:b,...S}=o;if(Object.entries(S||{}).forEach(([v,A])=>{const{vars:E,css:j,varsWithDefaults:k}=rm(A,t);m=on(m,k),p[v]={css:j,vars:E}}),b){const{css:v,vars:A,varsWithDefaults:E}=rm(b,t);m=on(m,E),p[l]={css:v,vars:A}}function g(v,A){var j,k;let E=r;if(r==="class"&&(E=".%s"),r==="data"&&(E="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(E=`[${r}="%s"]`),v){if(E==="media")return e.defaultColorScheme===v?":root":{[`@media (prefers-color-scheme: ${((k=(j=o[v])==null?void 0:j.palette)==null?void 0:k.mode)||v})`]:{":root":A}};if(E)return e.defaultColorScheme===v?`:root, ${E.replace("%s",String(v))}`:E.replace("%s",String(v))}return":root"}return{vars:m,generateThemeVars:()=>{let v={...d};return Object.entries(p).forEach(([,{vars:A}])=>{v=on(v,A)}),v},generateStyleSheets:()=>{var O,_;const v=[],A=e.defaultColorScheme||"light";function E(P,T){Object.keys(T).length&&v.push(typeof P=="string"?{[P]:{...T}}:P)}E(n(void 0,{...f}),f);const{[A]:j,...k}=p;if(j){const{css:P}=j,T=(_=(O=o[A])==null?void 0:O.palette)==null?void 0:_.mode,V=!i&&T?{colorScheme:T,...P}:{...P};E(n(A,{...V}),V)}return Object.entries(k).forEach(([P,{css:T}])=>{var q,$;const V=($=(q=o[P])==null?void 0:q.palette)==null?void 0:$.mode,N=!i&&V?{colorScheme:V,...T}:{...T};E(n(P,{...N}),N)}),a&&v.push({":root":{"--__l-threshold":"0.7","--__l":"clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)","--__a":"clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"}}),v}}}function fB(e){return function(n){return e==="media"?`@media (prefers-color-scheme: ${n})`:e?e.startsWith("data-")&&!e.includes("%s")?`[${e}="${n}"] &`:e==="class"?`.${n} &`:e==="data"?`[data-${n}] &`:`${e.replace("%s",n)} &`:"&"}}function mj(e,t,n=void 0){const i={};for(const r in e){const a=e[r];let o="",s=!0;for(let l=0;l<a.length;l+=1){const u=a[l];u&&(o+=(s===!0?"":" ")+t(u),s=!1,n&&n[u]&&(o+=" "+n[u]))}i[r]=o}return i}function pj(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Rl.white,default:Rl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const gj=pj();function yj(){return{text:{primary:Rl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Rl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const s0=yj();function Hv(e,t,n,i){const r=i.light||i,a=i.dark||i*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Bf(e.main,r):t==="dark"&&(e.dark=Nf(e.main,a)))}function Fv(e,t,n,i,r){const a=r.light||r,o=r.dark||r*1.5;t[n]||(t.hasOwnProperty(i)?t[n]=t[i]:n==="light"?t.light=`color-mix(in ${e}, ${t.main}, #fff ${(a*100).toFixed(0)}%)`:n==="dark"&&(t.dark=`color-mix(in ${e}, ${t.main}, #000 ${(o*100).toFixed(0)}%)`))}function hB(e="light"){return e==="dark"?{main:ka[200],light:ka[50],dark:ka[400]}:{main:ka[700],light:ka[400],dark:ka[800]}}function mB(e="light"){return e==="dark"?{main:Aa[200],light:Aa[50],dark:Aa[400]}:{main:Aa[500],light:Aa[300],dark:Aa[700]}}function pB(e="light"){return e==="dark"?{main:Ea[500],light:Ea[300],dark:Ea[700]}:{main:Ea[700],light:Ea[400],dark:Ea[800]}}function gB(e="light"){return e==="dark"?{main:Ra[400],light:Ra[300],dark:Ra[700]}:{main:Ra[700],light:Ra[500],dark:Ra[900]}}function yB(e="light"){return e==="dark"?{main:$a[400],light:$a[300],dark:$a[700]}:{main:$a[800],light:$a[500],dark:$a[900]}}function xB(e="light"){return e==="dark"?{main:xs[400],light:xs[300],dark:xs[700]}:{main:"#ed6c02",light:xs[500],dark:xs[900]}}function bB(e){return`oklch(from ${e} var(--__l) 0 h / var(--__a))`}function Ey(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:i=.2,colorSpace:r,...a}=e,o=e.primary||hB(t),s=e.secondary||mB(t),l=e.error||pB(t),u=e.info||gB(t),d=e.success||yB(t),f=e.warning||xB(t);function h(S){return r?bB(S):JN(S,s0.text.primary)>=n?s0.text.primary:gj.text.primary}const m=({color:S,name:g,mainShade:y=500,lightShade:x=300,darkShade:v=700})=>{if(S={...S},!S.main&&S[y]&&(S.main=S[y]),!S.hasOwnProperty("main"))throw new Error(ha(11,g?` (${g})`:"",y));if(typeof S.main!="string")throw new Error(ha(12,g?` (${g})`:"",JSON.stringify(S.main)));return r?(Fv(r,S,"light",x,i),Fv(r,S,"dark",v,i)):(Hv(S,"light",x,i),Hv(S,"dark",v,i)),S.contrastText||(S.contrastText=h(S.main)),S};let p;return t==="light"?p=pj():t==="dark"&&(p=yj()),on({common:{...Rl},mode:t,primary:m({color:o,name:"primary"}),secondary:m({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:l,name:"error"}),warning:m({color:f,name:"warning"}),info:m({color:u,name:"info"}),success:m({color:d,name:"success"}),grey:q_,contrastThreshold:n,getContrastText:h,augmentColor:m,tonalOffset:i,...p},a)}function vB(e){const t={};return Object.entries(e).forEach(i=>{const[r,a]=i;typeof a=="object"&&(t[r]=`${a.fontStyle?`${a.fontStyle} `:""}${a.fontVariant?`${a.fontVariant} `:""}${a.fontWeight?`${a.fontWeight} `:""}${a.fontStretch?`${a.fontStretch} `:""}${a.fontSize||""}${a.lineHeight?`/${a.lineHeight} `:""}${a.fontFamily||""}`)}),t}function wB(e,t){return{toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}},...t}}function SB(e){return Math.round(e*1e5)/1e5}const qv={textTransform:"uppercase"},Gv='"Roboto", "Helvetica", "Arial", sans-serif';function CB(e,t){const{fontFamily:n=Gv,fontSize:i=14,fontWeightLight:r=300,fontWeightRegular:a=400,fontWeightMedium:o=500,fontWeightBold:s=700,htmlFontSize:l=16,allVariants:u,pxToRem:d,...f}=typeof t=="function"?t(e):t,h=i/14,m=d||(S=>`${S/l*h}rem`),p=(S,g,y,x,v)=>({fontFamily:n,fontWeight:S,fontSize:m(g),lineHeight:y,...n===Gv?{letterSpacing:`${SB(x/g)}em`}:{},...v,...u}),b={h1:p(r,96,1.167,-1.5),h2:p(r,60,1.2,-.5),h3:p(a,48,1.167,0),h4:p(a,34,1.235,.25),h5:p(a,24,1.334,0),h6:p(o,20,1.6,.15),subtitle1:p(a,16,1.75,.15),subtitle2:p(o,14,1.57,.1),body1:p(a,16,1.5,.15),body2:p(a,14,1.43,.15),button:p(o,14,1.75,.4,qv),caption:p(a,12,1.66,.4),overline:p(a,12,2.66,1,qv),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return on({htmlFontSize:l,pxToRem:m,fontFamily:n,fontSize:i,fontWeightLight:r,fontWeightRegular:a,fontWeightMedium:o,fontWeightBold:s,...b},f,{clone:!1})}const TB=.2,jB=.14,EB=.12;function Oe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${TB})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${jB})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${EB})`].join(",")}const AB=["none",Oe(0,2,1,-1,0,1,1,0,0,1,3,0),Oe(0,3,1,-2,0,2,2,0,0,1,5,0),Oe(0,3,3,-2,0,3,4,0,0,1,8,0),Oe(0,2,4,-1,0,4,5,0,0,1,10,0),Oe(0,3,5,-1,0,5,8,0,0,1,14,0),Oe(0,3,5,-1,0,6,10,0,0,1,18,0),Oe(0,4,5,-2,0,7,10,1,0,2,16,1),Oe(0,5,5,-3,0,8,10,1,0,3,14,2),Oe(0,5,6,-3,0,9,12,1,0,3,16,2),Oe(0,6,6,-3,0,10,14,1,0,4,18,3),Oe(0,6,7,-4,0,11,15,1,0,4,20,3),Oe(0,7,8,-4,0,12,17,2,0,5,22,4),Oe(0,7,8,-4,0,13,19,2,0,5,24,4),Oe(0,7,9,-4,0,14,21,2,0,5,26,4),Oe(0,8,9,-5,0,15,22,2,0,6,28,5),Oe(0,8,10,-5,0,16,24,2,0,6,30,5),Oe(0,8,11,-5,0,17,26,2,0,6,32,5),Oe(0,9,11,-5,0,18,28,2,0,7,34,6),Oe(0,9,12,-6,0,19,29,2,0,7,36,6),Oe(0,10,13,-6,0,20,31,3,0,8,38,7),Oe(0,10,13,-6,0,21,33,3,0,8,40,7),Oe(0,10,14,-6,0,22,35,3,0,8,42,7),Oe(0,11,14,-7,0,23,36,3,0,9,44,8),Oe(0,11,15,-7,0,24,38,3,0,9,46,8)],kB={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},RB={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Yv(e){return`${Math.round(e)}ms`}function $B(e){if(!e)return 0;const t=e/36;return Math.min(Math.round((4+15*t**.25+t/5)*10),3e3)}function zB(e){const t={...kB,...e.easing},n={...RB,...e.duration};return{getAutoHeightDuration:$B,create:(r=["all"],a={})=>{const{duration:o=n.standard,easing:s=t.easeInOut,delay:l=0,...u}=a;return(Array.isArray(r)?r:[r]).map(d=>`${d} ${typeof o=="string"?o:Yv(o)} ${s} ${typeof l=="string"?l:Yv(l)}`).join(",")},...e,easing:t,duration:n}}const MB={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function OB(e){return bi(e)||typeof e>"u"||typeof e=="string"||typeof e=="boolean"||typeof e=="number"||Array.isArray(e)}function xj(e={}){const t={...e};function n(i){const r=Object.entries(i);for(let a=0;a<r.length;a++){const[o,s]=r[a];!OB(s)||o.startsWith("unstable_")?delete i[o]:bi(s)&&(i[o]={...s},n(i[o]))}}return n(t),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Kv(e){return typeof e=="number"?`${(e*100).toFixed(0)}%`:`calc((${e}) * 100%)`}const DB=e=>{if(!Number.isNaN(+e))return+e;const t=e.match(/\d*\.?\d+/g);if(!t)return 0;let n=0;for(let i=0;i<t.length;i+=1)n+=+t[i];return n};function _B(e){Object.assign(e,{alpha(t,n){const i=this||e;return i.colorSpace?`oklch(from ${t} l c h / ${typeof n=="string"?`calc(${n})`:n})`:i.vars?`rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof n=="string"?`calc(${n})`:n})`:fj(t,DB(n))},lighten(t,n){const i=this||e;return i.colorSpace?`color-mix(in ${i.colorSpace}, ${t}, #fff ${Kv(n)})`:Bf(t,n)},darken(t,n){const i=this||e;return i.colorSpace?`color-mix(in ${i.colorSpace}, ${t}, #000 ${Kv(n)})`:Nf(t,n)}})}function l0(e={},...t){const{breakpoints:n,mixins:i={},spacing:r,palette:a={},transitions:o={},typography:s={},shape:l,colorSpace:u,...d}=e;if(e.vars&&e.generateThemeVars===void 0)throw new Error(ha(20));const f=Ey({...a,colorSpace:u}),h=aj(e);let m=on(h,{mixins:wB(h.breakpoints,i),palette:f,shadows:AB.slice(),typography:CB(f,s),transitions:zB(o),zIndex:{...MB}});return m=on(m,d),m=t.reduce((p,b)=>on(p,b),m),m.unstable_sxConfig={..._f,...d==null?void 0:d.unstable_sxConfig},m.unstable_sx=function(b){return Vo({sx:b,theme:this})},m.toRuntimeSource=xj,_B(m),m}function LB(e){let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,Math.round(t*10)/1e3}const NB=[...Array(25)].map((e,t)=>{if(t===0)return"none";const n=LB(t);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function bj(e){return{inputPlaceholder:e==="dark"?.5:.42,inputUnderline:e==="dark"?.7:.42,switchTrackDisabled:e==="dark"?.2:.12,switchTrack:e==="dark"?.3:.38}}function vj(e){return e==="dark"?NB:[]}function BB(e){const{palette:t={mode:"light"},opacity:n,overlays:i,colorSpace:r,...a}=e,o=Ey({...t,colorSpace:r});return{palette:o,opacity:{...bj(o.mode),...n},overlays:i||vj(o.mode),...a}}function UB(e){var t;return!!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||e[0]==="palette"&&!!((t=e[1])!=null&&t.match(/(mode|contrastThreshold|tonalOffset)/))}const VB=e=>[...[...Array(25)].map((t,n)=>`--${e?`${e}-`:""}overlays-${n}`),`--${e?`${e}-`:""}palette-AppBar-darkBg`,`--${e?`${e}-`:""}palette-AppBar-darkColor`],PB=e=>(t,n)=>{const i=e.rootSelector||":root",r=e.colorSchemeSelector;let a=r;if(r==="class"&&(a=".%s"),r==="data"&&(a="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(a=`[${r}="%s"]`),e.defaultColorScheme===t){if(t==="dark"){const o={};return VB(e.cssVarPrefix).forEach(s=>{o[s]=n[s],delete n[s]}),a==="media"?{[i]:n,"@media (prefers-color-scheme: dark)":{[i]:o}}:a?{[a.replace("%s",t)]:o,[`${i}, ${a.replace("%s",t)}`]:n}:{[i]:{...n,...o}}}if(a&&a!=="media")return`${i}, ${a.replace("%s",String(t))}`}else if(t){if(a==="media")return{[`@media (prefers-color-scheme: ${String(t)})`]:{[i]:n}};if(a)return a.replace("%s",String(t))}return i};function HB(e,t){t.forEach(n=>{e[n]||(e[n]={})})}function M(e,t,n){!e[t]&&n&&(e[t]=n)}function Ms(e){return typeof e!="string"||!e.startsWith("hsl")?e:dj(e)}function di(e,t){`${t}Channel`in e||(e[`${t}Channel`]=zs(Ms(e[t])))}function FB(e){return typeof e=="number"?`${e}px`:typeof e=="string"||typeof e=="function"||Array.isArray(e)?e:"8px"}const qn=e=>{try{return e()}catch{}},qB=(e="mui")=>lB(e);function am(e,t,n,i,r){if(!n)return;n=n===!0?{}:n;const a=r==="dark"?"dark":"light";if(!i){t[r]=BB({...n,palette:{mode:a,...n==null?void 0:n.palette},colorSpace:e});return}const{palette:o,...s}=l0({...i,palette:{mode:a,...n==null?void 0:n.palette},colorSpace:e});return t[r]={...n,palette:o,opacity:{...bj(a),...n==null?void 0:n.opacity},overlays:(n==null?void 0:n.overlays)||vj(a)},s}function GB(e={},...t){const{colorSchemes:n={light:!0},defaultColorScheme:i,disableCssColorScheme:r=!1,cssVarPrefix:a="mui",nativeColor:o=!1,shouldSkipGeneratingVar:s=UB,colorSchemeSelector:l=n.light&&n.dark?"media":void 0,rootSelector:u=":root",...d}=e,f=Object.keys(n)[0],h=i||(n.light&&f!=="light"?"light":f),m=qB(a),{[h]:p,light:b,dark:S,...g}=n,y={...g};let x=p;if((h==="dark"&&!("dark"in n)||h==="light"&&!("light"in n))&&(x=!0),!x)throw new Error(ha(21,h));let v;o&&(v="oklch");const A=am(v,y,x,d,h);b&&!y.light&&am(v,y,b,void 0,"light"),S&&!y.dark&&am(v,y,S,void 0,"dark");let E={defaultColorScheme:h,...A,cssVarPrefix:a,colorSchemeSelector:l,rootSelector:u,getCssVar:m,colorSchemes:y,font:{...vB(A.typography),...A.font},spacing:FB(d.spacing)};Object.keys(E.colorSchemes).forEach(P=>{const T=E.colorSchemes[P].palette,V=q=>{const $=q.split("-"),U=$[1],z=$[2];return m(q,T[U][z])};T.mode==="light"&&(M(T.common,"background","#fff"),M(T.common,"onBackground","#000")),T.mode==="dark"&&(M(T.common,"background","#000"),M(T.common,"onBackground","#fff"));function N(q,$,U){if(v){let z;return q===zr&&(z=`transparent ${((1-U)*100).toFixed(0)}%`),q===xe&&(z=`#000 ${(U*100).toFixed(0)}%`),q===be&&(z=`#fff ${(U*100).toFixed(0)}%`),`color-mix(in ${v}, ${$}, ${z})`}return q($,U)}if(HB(T,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),T.mode==="light"){M(T.Alert,"errorColor",N(xe,T.error.light,.6)),M(T.Alert,"infoColor",N(xe,T.info.light,.6)),M(T.Alert,"successColor",N(xe,T.success.light,.6)),M(T.Alert,"warningColor",N(xe,T.warning.light,.6)),M(T.Alert,"errorFilledBg",V("palette-error-main")),M(T.Alert,"infoFilledBg",V("palette-info-main")),M(T.Alert,"successFilledBg",V("palette-success-main")),M(T.Alert,"warningFilledBg",V("palette-warning-main")),M(T.Alert,"errorFilledColor",qn(()=>T.getContrastText(T.error.main))),M(T.Alert,"infoFilledColor",qn(()=>T.getContrastText(T.info.main))),M(T.Alert,"successFilledColor",qn(()=>T.getContrastText(T.success.main))),M(T.Alert,"warningFilledColor",qn(()=>T.getContrastText(T.warning.main))),M(T.Alert,"errorStandardBg",N(be,T.error.light,.9)),M(T.Alert,"infoStandardBg",N(be,T.info.light,.9)),M(T.Alert,"successStandardBg",N(be,T.success.light,.9)),M(T.Alert,"warningStandardBg",N(be,T.warning.light,.9)),M(T.Alert,"errorIconColor",V("palette-error-main")),M(T.Alert,"infoIconColor",V("palette-info-main")),M(T.Alert,"successIconColor",V("palette-success-main")),M(T.Alert,"warningIconColor",V("palette-warning-main")),M(T.AppBar,"defaultBg",V("palette-grey-100")),M(T.Avatar,"defaultBg",V("palette-grey-400")),M(T.Button,"inheritContainedBg",V("palette-grey-300")),M(T.Button,"inheritContainedHoverBg",V("palette-grey-A100")),M(T.Chip,"defaultBorder",V("palette-grey-400")),M(T.Chip,"defaultAvatarColor",V("palette-grey-700")),M(T.Chip,"defaultIconColor",V("palette-grey-700")),M(T.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),M(T.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),M(T.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),M(T.LinearProgress,"primaryBg",N(be,T.primary.main,.62)),M(T.LinearProgress,"secondaryBg",N(be,T.secondary.main,.62)),M(T.LinearProgress,"errorBg",N(be,T.error.main,.62)),M(T.LinearProgress,"infoBg",N(be,T.info.main,.62)),M(T.LinearProgress,"successBg",N(be,T.success.main,.62)),M(T.LinearProgress,"warningBg",N(be,T.warning.main,.62)),M(T.Skeleton,"bg",v?N(zr,T.text.primary,.11):`rgba(${V("palette-text-primaryChannel")} / 0.11)`),M(T.Slider,"primaryTrack",N(be,T.primary.main,.62)),M(T.Slider,"secondaryTrack",N(be,T.secondary.main,.62)),M(T.Slider,"errorTrack",N(be,T.error.main,.62)),M(T.Slider,"infoTrack",N(be,T.info.main,.62)),M(T.Slider,"successTrack",N(be,T.success.main,.62)),M(T.Slider,"warningTrack",N(be,T.warning.main,.62));const q=v?N(xe,T.background.default,.6825):Gc(T.background.default,.8);M(T.SnackbarContent,"bg",q),M(T.SnackbarContent,"color",qn(()=>v?s0.text.primary:T.getContrastText(q))),M(T.SpeedDialAction,"fabHoverBg",Gc(T.background.paper,.15)),M(T.StepConnector,"border",V("palette-grey-400")),M(T.StepContent,"border",V("palette-grey-400")),M(T.Switch,"defaultColor",V("palette-common-white")),M(T.Switch,"defaultDisabledColor",V("palette-grey-100")),M(T.Switch,"primaryDisabledColor",N(be,T.primary.main,.62)),M(T.Switch,"secondaryDisabledColor",N(be,T.secondary.main,.62)),M(T.Switch,"errorDisabledColor",N(be,T.error.main,.62)),M(T.Switch,"infoDisabledColor",N(be,T.info.main,.62)),M(T.Switch,"successDisabledColor",N(be,T.success.main,.62)),M(T.Switch,"warningDisabledColor",N(be,T.warning.main,.62)),M(T.TableCell,"border",N(be,N(zr,T.divider,1),.88)),M(T.Tooltip,"bg",N(zr,T.grey[700],.92))}if(T.mode==="dark"){M(T.Alert,"errorColor",N(be,T.error.light,.6)),M(T.Alert,"infoColor",N(be,T.info.light,.6)),M(T.Alert,"successColor",N(be,T.success.light,.6)),M(T.Alert,"warningColor",N(be,T.warning.light,.6)),M(T.Alert,"errorFilledBg",V("palette-error-dark")),M(T.Alert,"infoFilledBg",V("palette-info-dark")),M(T.Alert,"successFilledBg",V("palette-success-dark")),M(T.Alert,"warningFilledBg",V("palette-warning-dark")),M(T.Alert,"errorFilledColor",qn(()=>T.getContrastText(T.error.dark))),M(T.Alert,"infoFilledColor",qn(()=>T.getContrastText(T.info.dark))),M(T.Alert,"successFilledColor",qn(()=>T.getContrastText(T.success.dark))),M(T.Alert,"warningFilledColor",qn(()=>T.getContrastText(T.warning.dark))),M(T.Alert,"errorStandardBg",N(xe,T.error.light,.9)),M(T.Alert,"infoStandardBg",N(xe,T.info.light,.9)),M(T.Alert,"successStandardBg",N(xe,T.success.light,.9)),M(T.Alert,"warningStandardBg",N(xe,T.warning.light,.9)),M(T.Alert,"errorIconColor",V("palette-error-main")),M(T.Alert,"infoIconColor",V("palette-info-main")),M(T.Alert,"successIconColor",V("palette-success-main")),M(T.Alert,"warningIconColor",V("palette-warning-main")),M(T.AppBar,"defaultBg",V("palette-grey-900")),M(T.AppBar,"darkBg",V("palette-background-paper")),M(T.AppBar,"darkColor",V("palette-text-primary")),M(T.Avatar,"defaultBg",V("palette-grey-600")),M(T.Button,"inheritContainedBg",V("palette-grey-800")),M(T.Button,"inheritContainedHoverBg",V("palette-grey-700")),M(T.Chip,"defaultBorder",V("palette-grey-700")),M(T.Chip,"defaultAvatarColor",V("palette-grey-300")),M(T.Chip,"defaultIconColor",V("palette-grey-300")),M(T.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),M(T.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),M(T.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),M(T.LinearProgress,"primaryBg",N(xe,T.primary.main,.5)),M(T.LinearProgress,"secondaryBg",N(xe,T.secondary.main,.5)),M(T.LinearProgress,"errorBg",N(xe,T.error.main,.5)),M(T.LinearProgress,"infoBg",N(xe,T.info.main,.5)),M(T.LinearProgress,"successBg",N(xe,T.success.main,.5)),M(T.LinearProgress,"warningBg",N(xe,T.warning.main,.5)),M(T.Skeleton,"bg",v?N(zr,T.text.primary,.13):`rgba(${V("palette-text-primaryChannel")} / 0.13)`),M(T.Slider,"primaryTrack",N(xe,T.primary.main,.5)),M(T.Slider,"secondaryTrack",N(xe,T.secondary.main,.5)),M(T.Slider,"errorTrack",N(xe,T.error.main,.5)),M(T.Slider,"infoTrack",N(xe,T.info.main,.5)),M(T.Slider,"successTrack",N(xe,T.success.main,.5)),M(T.Slider,"warningTrack",N(xe,T.warning.main,.5));const q=v?N(be,T.background.default,.985):Gc(T.background.default,.98);M(T.SnackbarContent,"bg",q),M(T.SnackbarContent,"color",qn(()=>v?gj.text.primary:T.getContrastText(q))),M(T.SpeedDialAction,"fabHoverBg",Gc(T.background.paper,.15)),M(T.StepConnector,"border",V("palette-grey-600")),M(T.StepContent,"border",V("palette-grey-600")),M(T.Switch,"defaultColor",V("palette-grey-300")),M(T.Switch,"defaultDisabledColor",V("palette-grey-600")),M(T.Switch,"primaryDisabledColor",N(xe,T.primary.main,.55)),M(T.Switch,"secondaryDisabledColor",N(xe,T.secondary.main,.55)),M(T.Switch,"errorDisabledColor",N(xe,T.error.main,.55)),M(T.Switch,"infoDisabledColor",N(xe,T.info.main,.55)),M(T.Switch,"successDisabledColor",N(xe,T.success.main,.55)),M(T.Switch,"warningDisabledColor",N(xe,T.warning.main,.55)),M(T.TableCell,"border",N(xe,N(zr,T.divider,1),.68)),M(T.Tooltip,"bg",N(zr,T.grey[700],.92))}di(T.background,"default"),di(T.background,"paper"),di(T.common,"background"),di(T.common,"onBackground"),di(T,"divider"),Object.keys(T).forEach(q=>{const $=T[q];q!=="tonalOffset"&&$&&typeof $=="object"&&($.main&&M(T[q],"mainChannel",zs(Ms($.main))),$.light&&M(T[q],"lightChannel",zs(Ms($.light))),$.dark&&M(T[q],"darkChannel",zs(Ms($.dark))),$.contrastText&&M(T[q],"contrastTextChannel",zs(Ms($.contrastText))),q==="text"&&(di(T[q],"primary"),di(T[q],"secondary")),q==="action"&&($.active&&di(T[q],"active"),$.selected&&di(T[q],"selected")))})}),E=t.reduce((P,T)=>on(P,T),E);const j={prefix:a,disableCssColorScheme:r,shouldSkipGeneratingVar:s,getSelector:PB(E),enableContrastVars:o},{vars:k,generateThemeVars:O,generateStyleSheets:_}=dB(E,j);return E.vars=k,Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([P,T])=>{E[P]=T}),E.generateThemeVars=O,E.generateStyleSheets=_,E.generateSpacing=function(){return rj(d.spacing,Sy(this))},E.getColorSchemeSelector=fB(l),E.spacing=E.generateSpacing(),E.shouldSkipGeneratingVar=s,E.unstable_sxConfig={..._f,...d==null?void 0:d.unstable_sxConfig},E.unstable_sx=function(T){return Vo({sx:T,theme:this})},E.toRuntimeSource=xj,E}function Xv(e,t,n){e.colorSchemes&&n&&(e.colorSchemes[t]={...n!==!0&&n,palette:Ey({...n===!0?{}:n.palette,mode:t})})}function YB(e={},...t){const{palette:n,cssVariables:i=!1,colorSchemes:r=n?void 0:{light:!0},defaultColorScheme:a=n==null?void 0:n.mode,...o}=e,s=a||"light",l=r==null?void 0:r[s],u={...r,...n?{[s]:{...typeof l!="boolean"&&l,palette:n}}:void 0};if(i===!1){if(!("colorSchemes"in e))return l0(e,...t);let d=n;"palette"in e||u[s]&&(u[s]!==!0?d=u[s].palette:s==="dark"&&(d={mode:"dark"}));const f=l0({...e,palette:d},...t);return f.defaultColorScheme=s,f.colorSchemes=u,f.palette.mode==="light"&&(f.colorSchemes.light={...u.light!==!0&&u.light,palette:f.palette},Xv(f,"dark",u.dark)),f.palette.mode==="dark"&&(f.colorSchemes.dark={...u.dark!==!0&&u.dark,palette:f.palette},Xv(f,"light",u.light)),f}return!n&&!("light"in u)&&s==="light"&&(u.light=!0),GB({...o,colorSchemes:u,defaultColorScheme:s,...typeof i!="boolean"&&i},...t)}const KB=YB();function wj(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const XB=e=>wj(e)&&e!=="classes",cc=GN({themeId:G_,defaultTheme:KB,rootShouldForwardProp:XB}),Ay=sB;function Sj(e){return rB(e)}function QB(e){return Ty("MuiSvgIcon",e)}sj("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const IB=e=>{const{color:t,fontSize:n,classes:i}=e,r={root:["root",t!=="inherit"&&`color${Cr(t)}`,`fontSize${Cr(n)}`]};return mj(r,QB,i)},ZB=cc("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Cr(n.color)}`],t[`fontSize${Cr(n.fontSize)}`]]}})(Ay(({theme:e})=>{var t,n,i,r,a,o,s,l,u,d,f,h,m,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(r=(t=e.transitions)==null?void 0:t.create)==null?void 0:r.call(t,"fill",{duration:(i=(n=(e.vars??e).transitions)==null?void 0:n.duration)==null?void 0:i.shorter}),variants:[{props:b=>!b.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((o=(a=e.typography)==null?void 0:a.pxToRem)==null?void 0:o.call(a,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((l=(s=e.typography)==null?void 0:s.pxToRem)==null?void 0:l.call(s,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((d=(u=e.typography)==null?void 0:u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter(([,b])=>b&&b.main).map(([b])=>{var S,g;return{props:{color:b},style:{color:(g=(S=(e.vars??e).palette)==null?void 0:S[b])==null?void 0:g.main}}}),{props:{color:"action"},style:{color:(h=(f=(e.vars??e).palette)==null?void 0:f.action)==null?void 0:h.active}},{props:{color:"disabled"},style:{color:(p=(m=(e.vars??e).palette)==null?void 0:m.action)==null?void 0:p.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),c0=w.forwardRef(function(t,n){const i=Sj({props:t,name:"MuiSvgIcon"}),{children:r,className:a,color:o="inherit",component:s="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:f,viewBox:h="0 0 24 24",...m}=i,p=w.isValidElement(r)&&r.type==="svg",b={...i,color:o,component:s,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:h,hasSvgAsChild:p},S={};d||(S.viewBox=h);const g=IB(b);return c.jsxs(ZB,{as:s,className:gr(g.root,a),focusable:"false",color:u,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n,...S,...m,...p&&r.props,ownerState:b,children:[p?r.props.children:r,f?c.jsx("title",{children:f}):null]})});c0.muiName="SvgIcon";function Cj(e,t){function n(i,r){return c.jsx(c0,{"data-testid":void 0,ref:r,...i,children:e})}return n.muiName=c0.muiName,w.memo(w.forwardRef(n))}function JB(e){const{controlled:t,default:n}=e,{current:i}=w.useRef(t!==void 0),[r,a]=w.useState(n),o=i?t:r,s=w.useCallback(l=>{i||a(l)},[]);return[o,s]}function Tj(...e){const t=w.useRef(void 0),n=w.useCallback(i=>{const r=e.map(a=>{if(a==null)return null;if(typeof a=="function"){const o=a,s=o(i);return typeof s=="function"?s:()=>{o(null)}}return a.current=i,()=>{a.current=null}});return()=>{r.forEach(a=>a==null?void 0:a())}},e);return w.useMemo(()=>e.every(i=>i==null)?null:i=>{t.current&&(t.current(),t.current=void 0),i!=null&&(t.current=n(i))},e)}function WB(e){return typeof e=="string"}function eU(e,t,n){return e===void 0||WB(e)?t:{...t,ownerState:{...t.ownerState,...n}}}function tU(e,t,n){return typeof e=="function"?e(t,n):e}function nU(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(i=>i.match(/^on[A-Z]/)&&typeof e[i]=="function"&&!t.includes(i)).forEach(i=>{n[i]=e[i]}),n}function Qv(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function iU(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:i,externalForwardedProps:r,className:a}=e;if(!t){const m=gr(n==null?void 0:n.className,a,r==null?void 0:r.className,i==null?void 0:i.className),p={...n==null?void 0:n.style,...r==null?void 0:r.style,...i==null?void 0:i.style},b={...n,...r,...i};return m.length>0&&(b.className=m),Object.keys(p).length>0&&(b.style=p),{props:b,internalRef:void 0}}const o=nU({...r,...i}),s=Qv(i),l=Qv(r),u=t(o),d=gr(u==null?void 0:u.className,n==null?void 0:n.className,a,r==null?void 0:r.className,i==null?void 0:i.className),f={...u==null?void 0:u.style,...n==null?void 0:n.style,...r==null?void 0:r.style,...i==null?void 0:i.style},h={...u,...n,...l,...s};return d.length>0&&(h.className=d),Object.keys(f).length>0&&(h.style=f),{props:h,internalRef:u.ref}}function el(e,t){const{className:n,elementType:i,ownerState:r,externalForwardedProps:a,internalForwardedProps:o,shouldForwardComponentProp:s=!1,...l}=t,{component:u,slots:d={[e]:void 0},slotProps:f={[e]:void 0},...h}=a,m=d[e]||i,p=tU(f[e],r),{props:{component:b,...S},internalRef:g}=iU({className:n,...l,externalForwardedProps:e==="root"?h:void 0,externalSlotProps:p}),y=Tj(g,p==null?void 0:p.ref,t.ref),x=e==="root"?b||u:b,v=eU(m,{...e==="root"&&!u&&!d[e]&&o,...e!=="root"&&!d[e]&&o,...S,...x&&!s&&{as:x},...x&&s&&{component:x},ref:y},r);return[m,v]}function Iv(e){try{return e.matches(":focus-visible")}catch{}return!1}const rU={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},aU=Cj(c.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})),oU=Cj(c.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}));function sU(e){return Ty("MuiRating",e)}const vs=sj("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function lU(e){const t=e.toString().split(".")[1];return t?t.length:0}function om(e,t){if(e==null)return e;const n=Math.round(e/t)*t;return Number(n.toFixed(lU(t)))}const cU=e=>{const{classes:t,size:n,readOnly:i,disabled:r,emptyValueFocused:a,focusVisible:o}=e,s={root:["root",`size${Cr(n)}`,r&&"disabled",o&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[a&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return mj(s,sU,t)},uU=cc("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${vs.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${Cr(n.size)}`],n.readOnly&&t.readOnly]}})(Ay(({theme:e})=>({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${vs.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${vs.focusVisible} .${vs.iconActive}`]:{outline:"1px solid #999"},[`& .${vs.visuallyHidden}`]:rU,variants:[{props:{size:"small"},style:{fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:e.typography.pxToRem(30)}},{props:({ownerState:t})=>t.readOnly,style:{pointerEvents:"none"}}]}))),jj=cc("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:e})=>e.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),dU=cc("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.iconEmpty&&t.iconEmpty,n.iconFilled&&t.iconFilled,n.iconHover&&t.iconHover,n.iconFocus&&t.iconFocus,n.iconActive&&t.iconActive]}})(Ay(({theme:e})=>({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:t})=>t.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:t})=>t.iconEmpty,style:{color:(e.vars||e).palette.action.disabled}}]}))),fU=cc("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>wj(e)&&e!=="iconActive",overridesResolver:(e,t)=>{const{iconActive:n}=e;return[t.decimal,n&&t.iconActive]}})({position:"relative",variants:[{props:({iconActive:e})=>e,style:{transform:"scale(1.2)"}}]});function hU(e){const{value:t,...n}=e;return c.jsx("span",{...n})}function Zv(e){const{classes:t,disabled:n,emptyIcon:i,focus:r,getLabelText:a,highlightSelectedOnly:o,hover:s,icon:l,IconContainerComponent:u,isActive:d,itemValue:f,labelProps:h,name:m,onBlur:p,onChange:b,onClick:S,onFocus:g,readOnly:y,ownerState:x,ratingValue:v,ratingValueRounded:A,slots:E={},slotProps:j={}}=e,k=o?f===v:f<=v,O=f<=s,_=f<=r,P=f===A,T=`${m}-${hj()}`,V={slots:E,slotProps:j},[N,q]=el("icon",{elementType:dU,className:gr(t.icon,k?t.iconFilled:t.iconEmpty,O&&t.iconHover,_&&t.iconFocus,d&&t.iconActive),externalForwardedProps:V,ownerState:{...x,iconEmpty:!k,iconFilled:k,iconHover:O,iconFocus:_,iconActive:d},additionalProps:{value:f},internalForwardedProps:{as:u}}),[$,U]=el("label",{elementType:jj,externalForwardedProps:V,ownerState:{...x,emptyValueFocused:void 0},additionalProps:{style:h==null?void 0:h.style,htmlFor:T}}),z=c.jsx(N,{...q,children:i&&!k?i:l});return y?c.jsx("span",{...h,children:z}):c.jsxs(w.Fragment,{children:[c.jsxs($,{...U,children:[z,c.jsx("span",{className:t.visuallyHidden,children:a(f)})]}),c.jsx("input",{className:t.visuallyHidden,onFocus:g,onBlur:p,onChange:b,onClick:S,disabled:n,value:f,id:T,type:"radio",name:m,checked:P})]})}const mU=c.jsx(aU,{fontSize:"inherit"}),pU=c.jsx(oU,{fontSize:"inherit"});function gU(e){return`${e||"0"} Star${e!==1?"s":""}`}const sm=w.forwardRef(function(t,n){const i=Sj({name:"MuiRating",props:t}),{component:r="span",className:a,defaultValue:o=null,disabled:s=!1,emptyIcon:l=pU,emptyLabelText:u="Empty",getLabelText:d=gU,highlightSelectedOnly:f=!1,icon:h=mU,IconContainerComponent:m=hU,max:p=5,name:b,onChange:S,onChangeActive:g,onMouseLeave:y,onMouseMove:x,precision:v=1,readOnly:A=!1,size:E="medium",value:j,slots:k={},slotProps:O={},..._}=i,P=hj(b),[T,V]=JB({controlled:j,default:o}),N=om(T,v),q=tB(),[{hover:$,focus:U},z]=w.useState({hover:-1,focus:-1});let B=N;$!==-1&&(B=$),U!==-1&&(B=U);const[Y,te]=w.useState(!1),F=w.useRef(),G=Tj(F,n),me=pe=>{x&&x(pe);const Be=F.current,{right:ft,left:uc,width:ba}=Be.getBoundingClientRect();let va;q?va=(ft-pe.clientX)/ba:va=(pe.clientX-uc)/ba;let oi=om(p*va+v/2,v);oi=uj(oi,v,p),z(kr=>kr.hover===oi&&kr.focus===oi?kr:{hover:oi,focus:oi}),te(!1),g&&$!==oi&&g(pe,oi)},Me=pe=>{y&&y(pe);const Be=-1;z({hover:Be,focus:Be}),g&&$!==Be&&g(pe,Be)},Dt=pe=>{let Be=pe.target.value===""?null:parseFloat(pe.target.value);$!==-1&&(Be=$),V(Be),S&&S(pe,Be)},H=pe=>{pe.clientX===0&&pe.clientY===0||(z({hover:-1,focus:-1}),V(null),S&&parseFloat(pe.target.value)===N&&S(pe,null))},ne=pe=>{Iv(pe.target)&&te(!0);const Be=parseFloat(pe.target.value);z(ft=>({hover:ft.hover,focus:Be}))},W=pe=>{if($!==-1)return;Iv(pe.target)||te(!1);const Be=-1;z(ft=>({hover:ft.hover,focus:Be}))},[ye,cn]=w.useState(!1),_t={...i,component:r,defaultValue:o,disabled:s,emptyIcon:l,emptyLabelText:u,emptyValueFocused:ye,focusVisible:Y,getLabelText:d,icon:h,IconContainerComponent:m,max:p,precision:v,readOnly:A,size:E},Bi=cU(_t),Vf={slots:k,slotProps:O},[$j,zj]=el("root",{ref:G,className:gr(Bi.root,a),elementType:uU,externalForwardedProps:{...Vf,..._,component:r},getSlotProps:pe=>({...pe,onMouseMove:Be=>{var ft;me(Be),(ft=pe.onMouseMove)==null||ft.call(pe,Be)},onMouseLeave:Be=>{var ft;Me(Be),(ft=pe.onMouseLeave)==null||ft.call(pe,Be)}}),ownerState:_t,additionalProps:{role:A?"img":null,"aria-label":A?d(B):null}}),[Mj,Oj]=el("label",{className:gr(Bi.label,Bi.labelEmptyValue),elementType:jj,externalForwardedProps:Vf,ownerState:_t}),[Dj,zy]=el("decimal",{className:Bi.decimal,elementType:fU,externalForwardedProps:Vf,ownerState:_t});return c.jsxs($j,{...zj,children:[Array.from(new Array(p)).map((pe,Be)=>{const ft=Be+1,uc={classes:Bi,disabled:s,emptyIcon:l,focus:U,getLabelText:d,highlightSelectedOnly:f,hover:$,icon:h,IconContainerComponent:m,name:P,onBlur:W,onChange:Dt,onClick:H,onFocus:ne,ratingValue:B,ratingValueRounded:N,readOnly:A,ownerState:_t,slots:k,slotProps:O},ba=ft===Math.ceil(B)&&($!==-1||U!==-1);if(v<1){const va=Array.from(new Array(1/v));return w.createElement(Dj,{...zy,key:ft,className:gr(zy.className,ba&&Bi.iconActive),iconActive:ba},va.map((oi,kr)=>{const Pf=om(ft-1+(kr+1)*v,v);return c.jsx(Zv,{...uc,isActive:!1,itemValue:Pf,labelProps:{style:va.length-1===kr?{}:{width:Pf===B?`${(kr+1)*v*100}%`:"0%",overflow:"hidden",position:"absolute"}}},Pf)}))}return c.jsx(Zv,{...uc,isActive:ba,itemValue:ft},ft)}),!A&&!s&&c.jsxs(Mj,{...Oj,children:[c.jsx("input",{className:Bi.visuallyHidden,value:"",id:`${P}-empty`,type:"radio",name:P,checked:N==null,onFocus:()=>cn(!0),onBlur:()=>cn(!1),onChange:Dt}),c.jsx("span",{className:Bi.visuallyHidden,children:u})]})]})}),yU=C.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        align-items: flex-start;
    }
`,xU=C.div`
    text-align: right;
    flex: 1;
    min-width: 0;
    max-width: 100%;
    word-wrap: break-word;

    h3 {
        margin: 0;
        margin-bottom: 0.25rem;
        color: ${({theme:e})=>e.colors.primary};
        font-size: 1.25rem;
        word-wrap: break-word;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
        color: ${({theme:e})=>e.colors.text};
        word-wrap: break-word;
    }

    @media (max-width: 48rem) {
        text-align: right;

        h3 {
            font-size: 1rem;
            line-height: 1.2;
        }

        p {
            font-size: 0.8rem;
            line-height: 1.2;
        }
    }
`,bU=C.h2`
    font-size: 1.5rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: left;
    margin: 0;
    flex: 1;
    min-width: 0;
    word-wrap: break-word;

    @media (max-width: 48rem) {
        font-size: 1.1rem;
        text-align: left;
        line-height: 1.2;
    }
`,vU=C.div`
    margin-bottom: 2rem;
    width: 100%;
    box-sizing: border-box;
`,lm=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    > div:first-child {
        flex: 1;
        min-width: 0;
        max-width: 100%;

        @media (max-width: 48rem) {
            text-align: center;
            width: 100%;
            margin-bottom: 0.5rem;
        }
    }

    .MuiRating-root {
        flex-shrink: 0;

        @media (max-width: 48rem) {
            justify-content: center;
            align-self: center;
        }
    }
`,Yc=C.label`
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.25rem;
    display: block;
    font-size: 1rem;

    @media (max-width: 48rem) {
        text-align: center;
        font-size: 0.95rem;
    }
`,cm=C.p`
    font-size: 0.8rem !important;
    color: ${({theme:e})=>e.colors.text}99 !important;
    margin: 0 !important;
    line-height: 1.4;
    word-wrap: break-word;
    hyphens: auto;

    @media (max-width: 48rem) {
        text-align: center !important;
        font-size: 0.75rem !important;
        line-height: 1.3;
        padding: 0 0.5rem;
    }
`,wU=C.div`
    margin-bottom: 2rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`,SU=C.textarea`
    width: 100%;
    min-height: 100px;
    padding: 0.75rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}33;
    border-radius: 0.5rem;
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    font-family: inherit;
    font-size: 0.9rem;
    resize: none;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
    }

    &::placeholder {
        color: ${({theme:e})=>e.colors.text}66;
    }

    @media (max-width: 48rem) {
        min-height: 80px;
        font-size: 0.85rem;
        padding: 0.6rem;
    }
`,CU=C.div`
    display: flex;
    gap: 1rem;
    justify-content: right;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        flex-direction: column;
        gap: 0.75rem;
    }

    button {
        min-width: 120px;

        @media (max-width: 48rem) {
            width: 100%;
            min-width: unset;
            justify-content: center;
        }
    }
`,Jv=({isOpen:e,onClose:t,classData:n,onConfirm:i,isLoading:r=!1})=>{const[a,o]=w.useState({didatica:0,atencao:0,pontualidade:0}),[s,l]=w.useState(""),u=(m,p)=>{o(b=>({...b,[m]:p||0}))},d=()=>{if(!n)return;const m={...a,comentarios:s.trim()||void 0};i(n.id,m),o({didatica:0,atencao:0,pontualidade:0}),l("")},f=()=>{o({didatica:0,atencao:0,pontualidade:0}),l(""),t()},h=a.didatica>0&&a.atencao>0&&a.pontualidade>0;return n?c.jsxs(os,{isOpen:e,onClose:f,children:[c.jsxs(yU,{children:[c.jsx(bU,{children:"Avaliar Aula"}),c.jsxs(xU,{children:[c.jsx("h3",{children:n.name}),c.jsxs("p",{children:["Professor(a): ",n.instructor]})]})]}),c.jsxs(vU,{children:[c.jsxs(lm,{children:[c.jsxs("div",{children:[c.jsx(Yc,{children:"Didática"}),c.jsx(cm,{children:"Como você avalia o método de ensino e clareza das explicações?"})]}),c.jsx(sm,{value:a.didatica,onChange:(m,p)=>u("didatica",p),icon:c.jsx(Ta,{size:24,fill:"currentColor"}),emptyIcon:c.jsx(Ta,{size:24}),size:"large",sx:{"& .MuiRating-iconFilled":{color:"#f97316"},"& .MuiRating-iconEmpty":{color:"#666666"},"& .MuiRating-iconHover":{color:"#f97316"},"@media (max-width: 768px)":{"& .MuiRating-icon":{fontSize:"2rem"}}}})]}),c.jsxs(lm,{children:[c.jsxs("div",{children:[c.jsx(Yc,{children:"Atenção"}),c.jsx(cm,{children:"O professor foi atencioso com os alunos e suas necessidades?"})]}),c.jsx(sm,{value:a.atencao,onChange:(m,p)=>u("atencao",p),icon:c.jsx(Ta,{size:24,fill:"currentColor"}),emptyIcon:c.jsx(Ta,{size:24}),size:"large",sx:{"& .MuiRating-iconFilled":{color:"#f97316"},"& .MuiRating-iconEmpty":{color:"#666666"},"& .MuiRating-iconHover":{color:"#f97316"},"@media (max-width: 768px)":{"& .MuiRating-icon":{fontSize:"2rem"}}}})]}),c.jsxs(lm,{children:[c.jsxs("div",{children:[c.jsx(Yc,{children:"Pontualidade"}),c.jsx(cm,{children:"A aula começou e terminou no horário previsto?"})]}),c.jsx(sm,{value:a.pontualidade,onChange:(m,p)=>u("pontualidade",p),icon:c.jsx(Ta,{size:24,fill:"currentColor"}),emptyIcon:c.jsx(Ta,{size:24}),size:"large",sx:{"& .MuiRating-iconFilled":{color:"#f97316"},"& .MuiRating-iconEmpty":{color:"#666666"},"& .MuiRating-iconHover":{color:"#f97316"},"@media (max-width: 768px)":{"& .MuiRating-icon":{fontSize:"2rem"}}}})]})]}),c.jsxs(wU,{children:[c.jsx(Yc,{children:"Comentários (opcional)"}),c.jsx(SU,{value:s,onChange:m=>l(m.target.value),placeholder:"Deixe seus comentários sobre a aula...",maxLength:500}),c.jsxs("span",{style:{fontSize:"0.8rem",color:"#666",textAlign:"right",display:"block"},children:[s.length,"/500"]})]}),c.jsxs(CU,{children:[c.jsx(Mt,{variant:"secondary",onClick:f,disabled:r,children:"Cancelar"}),c.jsx(Mt,{onClick:d,disabled:!h||r,children:r?"Enviando...":"Enviar Avaliação"})]})]}):null},TU=()=>{const[e,t]=w.useState("Todas"),[n,i]=w.useState(""),[r,a]=w.useState([]),[o,s]=w.useState([]),[l,u]=w.useState(!0),[d,f]=w.useState(null),[h,m]=w.useState(null),[p,b]=w.useState(!1),[S,g]=w.useState(!1),[y,x]=w.useState(null),[v,A]=w.useState(!1),[E,j]=w.useState(!1),[k,O]=w.useState(null),[_,P]=w.useState(!1),[T,V]=w.useState(!1);w.useEffect(()=>{(async()=>{try{u(!0),f(null);const[ne,W]=await Promise.all([i_(),r_()]);a(ne),s(W)}catch(ne){f("Erro ao carregar dados. Tente novamente."),console.error("Erro ao carregar dados:",ne)}finally{u(!1)}})()},[]);const N=H=>{i(H)},q=H=>{m(H),b(!0)},$=()=>{b(!1),m(null)},U=async H=>{try{g(!0),await new Promise(W=>setTimeout(W,1500)),a(W=>W.map(ye=>ye.id===H?{...ye,enrolled:ye.enrolled>=ye.capacity?ye.enrolled:ye.enrolled+1,enrollmentStatus:ye.enrolled>=ye.capacity?"waiting_list":"enrolled",waitingList:ye.enrolled>=ye.capacity?ye.waitingList+1:ye.waitingList}:ye)),$();const ne=r.find(W=>W.id===H);ne&&ne.enrolled>=ne.capacity?console.log("Adicionado à lista de espera!"):console.log("Inscrição realizada com sucesso!")}catch(ne){console.error("Erro ao realizar inscrição:",ne)}finally{g(!1)}},z=async H=>{try{j(!0),await new Promise(ne=>setTimeout(ne,500)),a(ne=>ne.map(W=>W.id===H?{...W,enrolled:W.enrollmentStatus==="enrolled"?Math.max(0,W.enrolled-1):W.enrolled,enrollmentStatus:"not_enrolled",waitingList:W.enrollmentStatus==="waiting_list"?Math.max(0,W.waitingList-1):W.waitingList}:W)),Y(),console.log("Cancelamento realizado com sucesso!")}catch(ne){console.error("Erro ao cancelar inscrição:",ne)}finally{j(!1)}},B=H=>{x(H),A(!0)},Y=()=>{A(!1),x(null)},te=H=>{O(H),P(!0)},F=()=>{P(!1),O(null)},G=async(H,ne)=>{try{V(!0),await new Promise(W=>setTimeout(W,1e3)),a(W=>W.map(ye=>ye.id===H?{...ye,enrollmentStatus:"not_enrolled",userRating:ne}:ye)),F(),console.log("Avaliação realizada com sucesso!")}catch(W){console.error("Erro ao realizar avaliação:",W)}finally{V(!1)}},me=r.filter(H=>H.enrollmentStatus==="enrolled"||H.enrollmentStatus==="waiting_list"||H.enrollmentStatus==="to_evaluate"),Me=r.filter(H=>{if(H.enrollmentStatus!=="not_enrolled")return!1;const ne=H.category.trim(),W=e.trim(),ye=W==="Todas"||ne===W,cn=n===""||H.name.toLowerCase().includes(n.toLowerCase())||H.instructor.toLowerCase().includes(n.toLowerCase())||H.location.toLowerCase().includes(n.toLowerCase());return ye&&cn}),Dt=()=>l?c.jsxs(c.Fragment,{children:[c.jsxs(Sv,{children:[c.jsx(Fc,{children:"Minhas Aulas"}),c.jsx(Hc,{children:[...Array(2)].map((H,ne)=>c.jsxs(bv,{children:[c.jsx(vv,{}),c.jsxs(wv,{children:[c.jsx(Bt,{height:"28px",width:"70%"}),c.jsx(Bt,{height:"18px",width:"60%"}),c.jsx(Bt,{height:"18px",width:"55%"}),c.jsx(Bt,{height:"18px",width:"50%"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[c.jsx(Bt,{height:"18px",width:"100px"}),c.jsx(Bt,{height:"36px",width:"80px",borderRadius:"0.25rem"})]})]})]},`enrolled-skeleton-${ne}`))})]}),c.jsx(Fc,{children:"Aulas Disponíveis"}),c.jsx(Y9,{children:c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[c.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%"},children:[c.jsx("div",{style:{flex:1},children:c.jsx(Bt,{height:"48px",borderRadius:"0.5rem"})}),c.jsx(Bt,{height:"48px",width:"48px",borderRadius:"0.5rem"})]}),c.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-start",flexWrap:"nowrap",overflowX:"auto",paddingBottom:"0.5rem"},children:[...Array(5)].map((H,ne)=>c.jsx(G9,{},ne))})]})}),c.jsx(Hc,{children:[...Array(6)].map((H,ne)=>c.jsxs(bv,{children:[c.jsx(vv,{}),c.jsxs(wv,{children:[c.jsx(Bt,{height:"28px",width:"70%"}),c.jsx(Bt,{height:"18px",width:"60%"}),c.jsx(Bt,{height:"18px",width:"55%"}),c.jsx(Bt,{height:"18px",width:"50%"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[c.jsx(Bt,{height:"18px",width:"100px"}),c.jsx(Bt,{height:"36px",width:"120px",borderRadius:"0.25rem"})]})]})]},`available-skeleton-${ne}`))})]}):d?c.jsx("p",{style:{color:"#ef4444",textAlign:"center",marginTop:"2rem"},children:d}):c.jsxs(c.Fragment,{children:[c.jsxs(Sv,{children:[c.jsx(Fc,{children:"Minhas Aulas"}),me.length>0?c.jsx(Hc,{as:re.div,initial:"hidden",animate:"visible",variants:Fe.staggerContainer,children:me.map(H=>{let ne=X9,W="Cancelar",ye=I9,cn=()=>B(H);return H.enrollmentStatus==="waiting_list"?(ne=Q9,W="Sair da Fila",ye=W9):H.enrollmentStatus==="to_evaluate"&&(ne=Z9,W="Avaliar",ye=J9,cn=()=>te(H)),c.jsx(re.div,{variants:Fe.fadeInUp,children:c.jsxs(ne,{children:[c.jsx(pv,{src:H.image,alt:H.name}),c.jsxs(gv,{children:[c.jsx(yv,{children:H.name}),c.jsxs(ja,{children:[c.jsx(_o,{size:18}),c.jsx("span",{children:H.instructor})]}),c.jsxs(ja,{children:[c.jsx(Do,{size:18}),c.jsx("span",{children:H.schedule})]}),c.jsxs(ja,{children:[c.jsx(wl,{size:18}),c.jsx("span",{children:H.location})]}),c.jsxs(xv,{children:[c.jsx("span",{children:H.enrollmentStatus==="waiting_list"?c.jsxs(c.Fragment,{children:[c.jsx("span",{style:{color:"#f97316",fontWeight:"600"},children:H.enrolled+H.waitingList}),"/",H.capacity," alunos"]}):H.enrollmentStatus==="to_evaluate"?"Aguardando avaliação":`${H.enrolled}/${H.capacity} alunos`}),c.jsx(ye,{onClick:cn,size:"sm",children:W})]})]})]})},`enrolled-${H.id}`)})},`enrolled-grid-${me.map(H=>H.id).join("-")}`):c.jsx(re.div,{initial:"hidden",animate:"visible",variants:Fe.fadeInUp,children:c.jsxs(e_,{children:[c.jsx(X$,{size:48}),c.jsx("p",{children:"Você ainda não está inscrito em nenhuma aula"})]})})]}),c.jsx(Fc,{children:"Aulas Disponíveis"}),c.jsx(K9,{children:c.jsx(h_,{onSearch:N,categories:o,selectedCategory:e,onCategoryChange:t})}),Me.length>0?c.jsx(Hc,{as:re.div,initial:"hidden",animate:"visible",variants:Fe.staggerContainer,children:Me.map(H=>c.jsx(re.div,{variants:Fe.fadeInUp,children:c.jsxs(ac,{children:[c.jsx(pv,{src:H.image,alt:H.name}),c.jsxs(gv,{children:[c.jsx(yv,{children:H.name}),c.jsxs(ja,{children:[c.jsx(_o,{size:18}),c.jsx("span",{children:H.instructor})]}),c.jsxs(ja,{children:[c.jsx(Do,{size:18}),c.jsx("span",{children:H.schedule})]}),c.jsxs(ja,{children:[c.jsx(wl,{size:18}),c.jsx("span",{children:H.location})]}),c.jsxs(xv,{children:[c.jsx("span",{children:H.waitingList>0?c.jsxs(c.Fragment,{children:[c.jsx("span",{style:{color:"#f97316",fontWeight:"600"},children:H.enrolled+H.waitingList}),"/",H.capacity," alunos"]}):`${H.enrolled}/${H.capacity} alunos`}),c.jsx(Mt,{onClick:()=>q(H),children:H.enrolled>=H.capacity?"Entrar na Fila":"Inscrever-se"})]})]})]})},`available-${H.id}`))},`available-grid-${Me.map(H=>H.id).join("-")}-${e}`):c.jsx(re.div,{initial:"hidden",animate:"visible",variants:Fe.fadeInUp,children:c.jsxs(q9,{children:[c.jsx(fz,{size:48}),c.jsx("p",{children:"Nenhuma aula disponível encontrada com os filtros aplicados"})]})})]});return c.jsxs(F9,{children:[Dt(),c.jsx(M_,{isOpen:p,onClose:$,classData:h,onConfirm:U,isLoading:S}),c.jsx(F_,{isOpen:v,onClose:Y,classData:y,onConfirm:z,isLoading:E}),c.jsx(Jv,{isOpen:_,onClose:F,classData:k,onConfirm:G,isLoading:T}),c.jsx(Jv,{isOpen:_,onClose:F,classData:k,onConfirm:G,isLoading:T})]})},Ej=[{id:1,name:"Paulo Rosado",score:12500,avatar:"https://avatars.githubusercontent.com/u/117609505?v=4"},{id:2,name:"Gustavo Mourato",score:11800,avatar:"https://avatars.githubusercontent.com/u/142419362?v=4"},{id:3,name:"Vinícius Jordão",score:10200,avatar:"https://avatars.githubusercontent.com/u/142420325?v=4"},{id:4,name:"Thomaz Lima",score:9500,avatar:"https://avatars.githubusercontent.com/u/126795323?v=4"},{id:5,name:"João Marcelo",score:8900,avatar:"https://avatars.githubusercontent.com/u/142419624?v=4"},{id:6,name:"Gabriel Albuquerque",score:8200,avatar:"https://avatars.githubusercontent.com/u/142417669?v=4"},{id:7,name:"Evaldo Galdino",score:7600,avatar:"https://avatars.githubusercontent.com/u/97982032?v=4"},{id:8,name:"Luan Kato",score:7100,avatar:"https://avatars.githubusercontent.com/u/142417782?v=4"},{id:9,name:"Ana Clara",score:6500,avatar:"https://avatars.githubusercontent.com/u/142419823?v=4"},{id:10,name:"Sophia Gallindo",score:6200,avatar:"https://avatars.githubusercontent.com/u/67246528?v=4"}],jU=()=>new Promise(e=>{setTimeout(()=>{e(Ej)},1500)}),EU=()=>new Promise(e=>{setTimeout(()=>{e(Ej)},1500)}),AU=C.div`
    width: ${({$size:e})=>e}px;
    height: ${({$size:e})=>e}px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({$size:e})=>e*.4}px;
    font-weight: bold;
    color: white;
    background: ${({$hasImage:e})=>e?"transparent":"linear-gradient(135deg, #AB2522, #EF752B)"};
    flex-shrink: 0;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`,Ol=({name:e,avatar:t,size:n=60,className:i})=>{const r=a=>a.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2);return c.jsx(AU,{$hasImage:!!t,$size:n,className:i,children:t?c.jsx("img",{src:t,alt:e}):r(e)})},Aj=C.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
    padding: 2rem 0;
    position: relative;

    @media (max-width: 48rem) {
        gap: 0.75rem;
        padding: 1rem 0;
    }
`,kU=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({$position:e})=>e===1?2:e===2?1:3};
`,RU=C.div`
    position: relative;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
    animation: float 3s ease-in-out infinite;
    animation-delay: ${({$position:e})=>e*.2}s;

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @media (max-width: 48rem) {
        & > div {
            width: ${({$position:e})=>e===1?"65px":"55px"} !important;
            height: ${({$position:e})=>e===1?"65px":"55px"} !important;
            font-size: ${({$position:e})=>e===1?"1.5rem":"1.3rem"} !important;
        }
    }
`,$U=C.div`
    position: absolute;
    top: -2.1rem;
    left: 50%;
    font-size: 2rem;
    animation: bounce 2s ease-in-out infinite;

    @keyframes bounce {
        0%,
        100% {
            transform: translateX(-50%) translateY(0) rotate(-10deg);
        }
        50% {
            transform: translateX(-50%) translateY(-5px) rotate(0deg);
        }
    }

    @media (max-width: 48rem) {
        top: -1.5rem;
        font-size: 1.5rem;
        left: 3.1rem;
    }
`,zU=C.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 100%;
`,MU=C.h3`
    font-size: ${({$position:e})=>e===1?"1.25rem":"1.1rem"};
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;

    @media (max-width: 48rem) {
        font-size: ${({$position:e})=>e===1?"0.75rem":"0.7rem"};
    }
`,OU=C.span`
    font-size: ${({$position:e})=>e===1?"1.5rem":"1.25rem"};
    color: ${({theme:e})=>e.colors.text};
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: ${({$position:e})=>e===1?"0.9rem":"0.8rem"};
    }
`,DU=C.div`
    width: 120px;
    height: ${({$position:e})=>e===1?"150px":e===2?"120px":"90px"};
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}40, ${({theme:e})=>e.colors.secondary}40);
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    transition: all 0.3s ease;

    @media (max-width: 48rem) {
        width: 70px;
        height: ${({$position:e})=>e===1?"90px":e===2?"75px":"60px"};
        font-size: 1.8rem;
    }
`,_U=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({$position:e})=>e===1?2:e===2?1:3};
`,LU=C.div`
    width: ${({$position:e})=>e===1?"120px":"100px"};
    height: ${({$position:e})=>e===1?"120px":"100px"};
    border-radius: 50%;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    @media (max-width: 48rem) {
        width: ${({$position:e})=>e===1?"65px":"55px"};
        height: ${({$position:e})=>e===1?"65px":"55px"};
    }
`,Wv=C.div`
    width: ${({width:e})=>e||"100px"};
    height: ${({height:e})=>e||"20px"};
    border-radius: 4px;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`,NU=C.div`
    width: 120px;
    height: ${({$position:e})=>e===1?"150px":e===2?"120px":"90px"};
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 0.5rem 0.5rem 0 0;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    @media (max-width: 48rem) {
        width: 70px;
        height: ${({$position:e})=>e===1?"90px":e===2?"75px":"60px"};
    }
`,jd=({topThree:e,formatScore:t,animated:n=!0})=>{const i=a=>{switch(a){case 1:return"🥇";case 2:return"🥈";case 3:return"🥉";default:return null}},r={initial:{opacity:0,y:50},animate:{opacity:1,y:0}};return e.length<3?null:c.jsx(Aj,{children:e.map((a,o)=>{const s=o+1,l=n?re.div:"div",u=n?{initial:r.initial,animate:r.animate,transition:{delay:o*.2,duration:.5}}:{};return c.jsxs(kU,{$position:s,as:l,...u,children:[c.jsxs(RU,{$position:s,children:[s===1&&c.jsx($U,{children:"👑"}),c.jsx(Ol,{name:a.name,avatar:a.avatar,size:s===1?120:100})]}),c.jsxs(zU,{children:[c.jsx(MU,{$position:s,children:a.name}),c.jsxs(OU,{$position:s,children:[t(a.score)," pts"]})]}),c.jsx(DU,{$position:s,children:i(s)})]},a.id)})})},kj=C.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,BU=C.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    }

    &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 4px 20px ${({theme:e})=>e.colors.primary}30;
        transform: translateX(5px);
    }

    @media (max-width: 48rem) {
        gap: 1rem;
        padding: 1rem;
    }
`,UU=C.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.text};
    min-width: 50px;
    text-align: center;

    @media (max-width: 48rem) {
        font-size: 1.4rem;
        min-width: 40px;
    }
`,VU=C.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
    overflow: hidden;
`,PU=C.h4`
    font-size: 1.2rem;
    color: ${({theme:e})=>e.colors.text};
    font-weight: 600;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`,HU=C.span`
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: right;
    min-width: 100px;

    @media (max-width: 48rem) {
        font-size: 1.2rem;
        min-width: 80px;
    }
`,FU=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.5rem;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 1rem;
    }
`,qU=C.div`
    width: ${({$position:e})=>e===1?"120px":"100px"};
    height: ${({$position:e})=>e===1?"120px":"100px"};
    border-radius: 50%;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    @media (max-width: 48rem) {
        width: ${({$position:e})=>e===1?"90px":"75px"};
        height: ${({$position:e})=>e===1?"90px":"75px"};
    }
`,um=C.div`
    width: ${({width:e})=>e||"100px"};
    height: ${({height:e})=>e||"20px"};
    border-radius: 4px;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`,ky=({members:e,formatScore:t,startPosition:n=4,animated:i=!0})=>{const r={initial:{opacity:0,x:-50},animate:{opacity:1,x:0}};return e.length===0?null:c.jsx(kj,{children:e.map((a,o)=>{const s=o+n,l=i?re.div:"div",u=i?{initial:r.initial,animate:r.animate,transition:{delay:o*.1,duration:.3}}:{};return c.jsxs(BU,{$position:s,as:l,...u,children:[c.jsxs(UU,{children:["#",s]}),c.jsx(Ol,{name:a.name,avatar:a.avatar,size:60}),c.jsx(VU,{children:c.jsx(PU,{children:a.name})}),c.jsxs(HU,{children:[t(a.score)," pts"]})]},a.id)})})},Ed=()=>c.jsx(Aj,{children:[2,1,3].map(e=>c.jsxs(_U,{$position:e,children:[c.jsx(LU,{$position:e}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[c.jsx(Wv,{width:e===1?"120px":"100px",height:"20px"}),c.jsx(Wv,{width:e===1?"100px":"80px",height:"24px"})]}),c.jsx(NU,{$position:e})]},e))}),Ry=({count:e=7})=>c.jsx(kj,{children:[...Array(e)].map((t,n)=>c.jsxs(FU,{children:[c.jsx(um,{width:"50px",height:"30px"}),c.jsx(qU,{$position:4,style:{width:"60px",height:"60px"}}),c.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"0.5rem"},children:c.jsx(um,{width:"150px",height:"20px"})}),c.jsx(um,{width:"100px",height:"24px"})]},n))}),GU=C.div`
    min-height: 100vh;
    background-color: ${({theme:e})=>e.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
        margin-top: 5rem;
    }
`,YU=C.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    gap: 2rem;

    @media (max-width: 64rem) {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }

    @media (max-width: 48rem) {
        margin-bottom: 2rem;
    }
`,KU=C.div`
    flex: 1;

    p {
        font-size: 1.2rem;
        color: ${({theme:e})=>e.colors.text};
        margin-top: 1rem;
        opacity: 0.8;
    }

    @media (max-width: 48rem) {
        p {
            font-size: 1rem;
        }
    }
`,XU=C.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`,QU=C.div`
    display: flex;
    gap: 1rem;
    flex-shrink: 0;

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`,e2=C.button`
    padding: 0.75rem 2rem;
    border: 2px solid;
    border-image: ${({$active:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary}) 1`:"none"};
    border-color: ${({$active:e,theme:t})=>e?"transparent":t.colors.primary};
    background: ${({$active:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary})`:"transparent"};
    color: ${({$active:e})=>e?"white":({theme:t})=>t.colors.text};
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1.5rem;
        font-size: 0.9rem;
    }
`,IU=C.div`
    max-width: 1200px;
    margin: 0 auto;
`;C.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;
    padding: 2rem;

    @media (max-width: 48rem) {
        gap: 1rem;
        padding: 1rem;
        margin-bottom: 3rem;
    }
`;C(re.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    order: ${({$position:e})=>e===1?2:e===2?1:3};

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`;C.div`
    position: relative;
    overflow: visible;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-radius: 50%;

    @media (max-width: 48rem) {
        & > div {
            width: ${({$position:e})=>e===1?"90px":"75px"} !important;
            height: ${({$position:e})=>e===1?"90px":"75px"} !important;
            font-size: ${({$position:e})=>e===1?"2rem":"1.8rem"} !important;
        }
    }
`;C.div`
    position: absolute;
    top: -49px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5rem;
    z-index: 10;

    @media (max-width: 48rem) {
        top: -25px;
        font-size: 2rem;
    }
`;C.div`
    text-align: center;
`;C.h3`
    font-size: ${({$position:e})=>e===1?"1.3rem":"1.1rem"};
    color: ${({theme:e})=>e.colors.text};
    margin: 0;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: ${({$position:e})=>e===1?"1rem":"0.9rem"};
    }
`;C.p`
    font-size: ${({$position:e})=>e===1?"1.5rem":"1.2rem"};
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0.5rem 0 0 0;
    font-weight: bold;

    @media (max-width: 48rem) {
        font-size: ${({$position:e})=>e===1?"1.2rem":"1rem"};
    }
`;C.div`
    width: 120px;
    height: ${({$position:e})=>e===1?"140px":e===2?"110px":"80px"};
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}60, ${({theme:e})=>e.colors.secondary}60);
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);

    @media (max-width: 48rem) {
        width: 90px;
        height: ${({$position:e})=>e===1?"100px":e===2?"80px":"60px"};
        font-size: 1.5rem;
    }
`;C.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;

    @media (max-width: 48rem) {
        padding: 0;
    }
`;C(re.div)`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    }

    &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 4px 20px ${({theme:e})=>e.colors.primary}30;
        transform: translateX(5px);
    }

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 1rem;
    }
`;C.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.text};
    min-width: 50px;
    text-align: center;

    @media (max-width: 48rem) {
        font-size: 1.4rem;
        min-width: 40px;
    }
`;C.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;C.h3`
    font-size: 1.2rem;
    color: ${({theme:e})=>e.colors.text};
    margin: 0;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;C.span`
    font-size: 0.9rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;

    @media (max-width: 48rem) {
        font-size: 0.8rem;
    }
`;C.div`
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: right;
    min-width: 100px;

    @media (max-width: 48rem) {
        font-size: 1.2rem;
        min-width: 80px;
    }
`;const ZU=C.div`
    text-align: center;
    padding: 4rem 2rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.6;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
    }
`,JU=()=>{const[e,t]=w.useState("monthly"),[n,i]=w.useState([]),[r,a]=w.useState(!0);w.useEffect(()=>{(async()=>{a(!0);try{const d=e==="all-time"?await jU():await EU();i(d)}catch(d){console.error("Erro ao carregar ranking:",d),i([])}finally{a(!1)}})()},[e]);const o=n.slice(0,3),s=n.slice(3),l=u=>u.toLocaleString("pt-BR");return c.jsxs(GU,{children:[c.jsxs(YU,{children:[c.jsxs(KU,{children:[c.jsx(XU,{children:"Ranking de Alunos"}),c.jsx("p",{children:"Conquiste pontos e suba no ranking!"})]}),c.jsxs(QU,{children:[c.jsxs(e2,{$active:e==="monthly",onClick:()=>t("monthly"),disabled:r,children:[c.jsx(Sl,{size:18,style:{marginRight:"0.5rem",verticalAlign:"middle"}}),"Este Mês"]}),c.jsxs(e2,{$active:e==="all-time",onClick:()=>t("all-time"),disabled:r,children:[c.jsx(Sl,{size:18,style:{marginRight:"0.5rem",verticalAlign:"middle"}}),"Sempre"]})]})]}),c.jsx(IU,{children:r?c.jsxs(c.Fragment,{children:[c.jsx(Ed,{}),c.jsx(Ry,{count:7})]}):c.jsxs(c.Fragment,{children:[c.jsx(jd,{topThree:o,formatScore:l,animated:!0}),s.length>0?c.jsx(ky,{members:s,formatScore:l,startPosition:4,animated:!0}):o.length===0&&c.jsxs(ZU,{children:[c.jsx("h3",{children:"Nenhum resultado encontrado"}),c.jsx("p",{children:"O ranking está vazio no momento."})]})]})})]})},dm=C.div`
    min-height: 100vh;
    background-color: ${({theme:e})=>e.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
        margin-top: 5rem;
    }
`,fm=C.header`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        margin-bottom: 2rem;
        flex-direction: column;
        text-align: center;
    }
`,hm=C.div`
    flex: 1;

    p {
        font-size: 1.2rem;
        color: ${({theme:e})=>e.colors.text};
        margin-top: 0.5rem;
        opacity: 0.8;
    }

    @media (max-width: 48rem) {
        p {
            font-size: 1rem;
        }
    }
`,t2=C.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`,mm=C.div`
    max-width: 1400px;
    margin: 0 auto;
`,n2=C.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (min-width: 48rem) and (max-width: 97rem) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
    }
`,Kc=C(re.div)`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    }

    @media (max-width: 48rem) {
        padding: 1rem;
    }
`,Xc=C.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    svg {
        color: ${({theme:e})=>e.colors.primary};
        flex-shrink: 0;
    }
`,Qc=C.h3`
    font-size: 0.95rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
    margin: 0;
    font-weight: 500;
`,Ic=C.div`
    font-size: 2rem;
    font-weight: bold;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
    }
`,Zc=C.div`
    font-size: 0.9rem;
    color: ${({$isPositive:e})=>e?"#4caf50":"#f97316"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        color: inherit;
    }
`,i2=C.div`
    margin-top: 3rem;
`,r2=C.h2`
    font-size: 1.8rem;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
        color: ${({theme:e})=>e.colors.primary};
    }

    @media (max-width: 48rem) {
        font-size: 1.4rem;
    }
`,a2=C.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,WU=C(re.div)`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    }

    &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 4px 20px ${({theme:e})=>e.colors.primary}30;
        transform: translateX(5px);
    }

    @media (max-width: 48rem) {
        padding: 1.5rem;
    }
`,eV=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`,tV=C.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
`,nV=C.div`
    font-size: 0.95rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;
`,iV=C.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    @media (max-width: 48rem) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
    }
`,ht=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`,mt=C.span`
    font-size: 0.85rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;
`,pt=C.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
`,rV=C.div`
    text-align: center;
    padding: 4rem 2rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.6;

    svg {
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
    }
`,aV=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    }
`,fi=C.div`
    width: ${({width:e})=>e||"100%"};
    height: ${({height:e})=>e||"20px"};
    margin-bottom: ${({$marginBottom:e})=>e||"0"};
    border-radius: 4px;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`,oV=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 2rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    }

    @media (max-width: 48rem) {
        padding: 1.5rem;
    }
`,sV=[{id:1,dataDaAvaliacao:new Date("2024-09-15"),professorResponsavel:"Prof. João Silva",massaGordaPercentual:22.5,massaGordaKg:18.5,massaMagraKg:63.5,massaMuscularEsqueleticaKg:35.2,aguaCorporalTotalPercentual:55.8,gorduraVisceralNivel:8,taxaMetabolicaBasalKcal:1650,massaOsseaKg:3.2,indiceDeMassaCorporal:24.8,bracoRelaxadoCm:32.5,bracoContraidoCm:34.8,antebracoCm:27.3,toraxPeitoralCm:98.5,cinturaCm:85.2,abdomenCm:88.7,quadrilCm:102.3,coxaCm:58.4,panturrilhaCm:38.6},{id:2,dataDaAvaliacao:new Date("2024-10-20"),professorResponsavel:"Prof. João Silva",massaGordaPercentual:20.8,massaGordaKg:17.2,massaMagraKg:65.8,massaMuscularEsqueleticaKg:36.5,aguaCorporalTotalPercentual:57.2,gorduraVisceralNivel:7,taxaMetabolicaBasalKcal:1680,massaOsseaKg:3.3,indiceDeMassaCorporal:24.3,bracoRelaxadoCm:33.1,bracoContraidoCm:35.4,antebracoCm:27.5,toraxPeitoralCm:99.2,cinturaCm:83.5,abdomenCm:86.4,quadrilCm:101.8,coxaCm:58.9,panturrilhaCm:39.1},{id:3,dataDaAvaliacao:new Date("2024-11-14"),professorResponsavel:"Prof. Maria Santos",massaGordaPercentual:19.2,massaGordaKg:16.1,massaMagraKg:67.9,massaMuscularEsqueleticaKg:37.8,aguaCorporalTotalPercentual:58.5,gorduraVisceralNivel:6,taxaMetabolicaBasalKcal:1710,massaOsseaKg:3.4,indiceDeMassaCorporal:23.9,bracoRelaxadoCm:33.8,bracoContraidoCm:36.2,antebracoCm:27.8,toraxPeitoralCm:100.5,cinturaCm:81.8,abdomenCm:84.2,quadrilCm:101.2,coxaCm:59.5,panturrilhaCm:39.8}],lV=()=>new Promise(e=>{setTimeout(()=>{const t=[...sV].sort((n,i)=>new Date(i.dataDaAvaliacao).getTime()-new Date(n.dataDaAvaliacao).getTime());e(t)},1500)});function cV(){const{user:e,loading:t}=ns(),[n,i]=w.useState([]),[r,a]=w.useState(!0);w.useEffect(()=>{(async()=>{a(!0);const h=await lV();i(h),a(!1)})()},[]);const o=n[0],s=n[1],l=(f,h)=>{const m=f-h;return{value:Math.abs(m).toFixed(1),isPositive:m<0}},u=(f,h)=>{const m=f-h;return{value:Math.abs(m).toFixed(1),isPositive:m>0}},d=f=>new Date(f).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});return r||t?c.jsxs(dm,{children:[c.jsxs(fm,{children:[c.jsx(fi,{width:"80px",height:"80px",style:{borderRadius:"50%",flexShrink:0}}),c.jsxs(hm,{children:[c.jsx(fi,{width:"250px",height:"48px",$marginBottom:"0.5rem"}),c.jsx(fi,{width:"350px",height:"24px"})]})]}),c.jsxs(mm,{children:[c.jsx(n2,{children:[1,2,3,4].map(f=>c.jsxs(aV,{children:[c.jsx(fi,{width:"60%",height:"16px",$marginBottom:"1rem"}),c.jsx(fi,{width:"80%",height:"32px",$marginBottom:"0.5rem"}),c.jsx(fi,{width:"40%",height:"16px"})]},f))}),c.jsxs(i2,{children:[c.jsxs(r2,{children:[c.jsx(Jx,{size:24}),"Histórico de Avaliações"]}),c.jsx(a2,{children:[1,2,3].map(f=>c.jsxs(oV,{children:[c.jsx(fi,{width:"40%",height:"20px",$marginBottom:"1.5rem"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem"},children:[1,2,3,4,5,6,7,8].map(h=>c.jsxs("div",{children:[c.jsx(fi,{width:"70%",height:"14px",$marginBottom:"0.5rem"}),c.jsx(fi,{width:"90%",height:"18px"})]},h))})]},f))})]})]})]}):n.length===0?c.jsxs(dm,{children:[c.jsxs(fm,{children:[e&&c.jsx(Ol,{name:e.name,avatar:e.avatar,size:80}),c.jsxs(hm,{children:[c.jsx(t2,{children:"Minha Evolução"}),c.jsx("p",{children:"Acompanhe seu progresso através das avaliações de bioimpedância"})]})]}),c.jsx(mm,{children:c.jsxs(rV,{children:[c.jsx(q$,{size:48}),c.jsx("h3",{children:"Nenhuma avaliação encontrada"}),c.jsx("p",{children:"Você ainda não possui avaliações de bioimpedância registradas."})]})})]}):c.jsxs(dm,{children:[c.jsxs(fm,{children:[e&&c.jsx(Ol,{name:e.name,avatar:e.avatar,size:80}),c.jsxs(hm,{children:[c.jsx(t2,{children:"Minha Evolução"}),c.jsx("p",{children:"Acompanhe seu progresso através das avaliações de bioimpedância"})]})]}),c.jsxs(mm,{children:[c.jsxs(n2,{children:[c.jsxs(Kc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:0},children:[c.jsxs(Xc,{children:[c.jsx(Az,{size:20}),c.jsx(Qc,{children:"Gordura Corporal"})]}),c.jsxs(Ic,{children:[o.massaGordaPercentual,"%"]}),s&&c.jsxs(Zc,{$isPositive:l(o.massaGordaPercentual,s.massaGordaPercentual).isPositive,children:[l(o.massaGordaPercentual,s.massaGordaPercentual).isPositive?c.jsx(Nc,{size:20}):c.jsx(Rs,{size:20}),l(o.massaGordaPercentual,s.massaGordaPercentual).value,"% desde última avaliação"]})]}),c.jsxs(Kc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1},children:[c.jsxs(Xc,{children:[c.jsx(Dg,{size:20}),c.jsx(Qc,{children:"Massa Muscular"})]}),c.jsxs(Ic,{children:[o.massaMuscularEsqueleticaKg,"kg"]}),s&&c.jsxs(Zc,{$isPositive:u(o.massaMuscularEsqueleticaKg,s.massaMuscularEsqueleticaKg).isPositive,children:[u(o.massaMuscularEsqueleticaKg,s.massaMuscularEsqueleticaKg).isPositive?c.jsx(Rs,{size:20}):c.jsx(Nc,{size:20}),u(o.massaMuscularEsqueleticaKg,s.massaMuscularEsqueleticaKg).value,"kg desde última avaliação"]})]}),c.jsxs(Kc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.2},children:[c.jsxs(Xc,{children:[c.jsx(az,{size:20}),c.jsx(Qc,{children:"Água Corporal"})]}),c.jsxs(Ic,{children:[o.aguaCorporalTotalPercentual,"%"]}),s&&c.jsxs(Zc,{$isPositive:u(o.aguaCorporalTotalPercentual,s.aguaCorporalTotalPercentual).isPositive,children:[u(o.aguaCorporalTotalPercentual,s.aguaCorporalTotalPercentual).isPositive?c.jsx(Rs,{size:20}):c.jsx(Nc,{size:20}),u(o.aguaCorporalTotalPercentual,s.aguaCorporalTotalPercentual).value,"% desde última avaliação"]})]}),c.jsxs(Kc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.3},children:[c.jsxs(Xc,{children:[c.jsx(uz,{size:20}),c.jsx(Qc,{children:"Taxa Metabólica Basal"})]}),c.jsxs(Ic,{children:[o.taxaMetabolicaBasalKcal," kcal"]}),s&&c.jsxs(Zc,{$isPositive:u(o.taxaMetabolicaBasalKcal,s.taxaMetabolicaBasalKcal).isPositive,children:[u(o.taxaMetabolicaBasalKcal,s.taxaMetabolicaBasalKcal).isPositive?c.jsx(Rs,{size:20}):c.jsx(Nc,{size:20}),u(o.taxaMetabolicaBasalKcal,s.taxaMetabolicaBasalKcal).value," kcal desde última avaliação"]})]})]}),c.jsxs(i2,{children:[c.jsxs(r2,{children:[c.jsx(Jx,{size:24}),"Histórico de Avaliações"]}),c.jsx(a2,{children:n.map((f,h)=>c.jsxs(WU,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:h*.1},children:[c.jsxs(eV,{children:[c.jsx(tV,{children:d(f.dataDaAvaliacao.toString())}),c.jsxs(nV,{children:["Professor: ",f.professorResponsavel]})]}),c.jsxs(iV,{children:[c.jsxs(ht,{children:[c.jsx(mt,{children:"Gordura Corporal"}),c.jsxs(pt,{children:[f.massaGordaPercentual,"%"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Massa Magra"}),c.jsxs(pt,{children:[f.massaMagraKg,"kg"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Massa Muscular"}),c.jsxs(pt,{children:[f.massaMuscularEsqueleticaKg,"kg"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Água Corporal"}),c.jsxs(pt,{children:[f.aguaCorporalTotalPercentual,"%"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Gordura Visceral"}),c.jsxs(pt,{children:["Nível ",f.gorduraVisceralNivel]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"TMB"}),c.jsxs(pt,{children:[f.taxaMetabolicaBasalKcal," kcal"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Massa Óssea"}),c.jsxs(pt,{children:[f.massaOsseaKg,"kg"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"IMC"}),c.jsx(pt,{children:f.indiceDeMassaCorporal})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Braço Relaxado"}),c.jsxs(pt,{children:[f.bracoRelaxadoCm,"cm"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Braço Contraído"}),c.jsxs(pt,{children:[f.bracoContraidoCm,"cm"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Antebraço"}),c.jsxs(pt,{children:[f.antebracoCm,"cm"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Peito"}),c.jsxs(pt,{children:[f.toraxPeitoralCm,"cm"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Cintura"}),c.jsxs(pt,{children:[f.cinturaCm,"cm"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Abdômen"}),c.jsxs(pt,{children:[f.abdomenCm,"cm"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Quadril"}),c.jsxs(pt,{children:[f.quadrilCm,"cm"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Coxa"}),c.jsxs(pt,{children:[f.coxaCm,"cm"]})]}),c.jsxs(ht,{children:[c.jsx(mt,{children:"Panturrilha"}),c.jsxs(pt,{children:[f.panturrilhaCm,"cm"]})]})]})]},f.id))})]})]})]})}const uV=C.div`
    min-height: 100vh;
    background-color: ${({theme:e})=>e.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
        margin-top: 5rem;
    }
`,dV=C.section`
    position: relative;
    min-height: 350px;
    display: flex;
    align-items: center;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-bottom: 2rem;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }

    @media (max-width: 48rem) {
        min-height: 300px;
    }
`,fV=C.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 64%;
    z-index: 0;
`,hV=C.div`
    position: relative;
    z-index: 2;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
    max-width: 60rem;

    @media (max-width: 48rem) {
        padding: 2rem 1.5rem;
        max-width: 100%;
    }
`,mV=C.h1`
    font-size: 2.5rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`,pV=C.p`
    font-size: 1.1rem;
    color: ${({theme:e})=>e.colors.text};
    line-height: 1.6;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`,gV=C.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
    gap: 2rem;
    width: 100%;

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`,o2=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    padding: 2rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    @media (max-width: 48rem) {
        padding: 1.5rem;
    }
`,s2=C.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    border-radius: 50%;
    color: white;

    svg {
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
`,l2=C.h2`
    font-size: 1.8rem;
    color: ${({theme:e})=>e.colors.text};
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
    }
`,c2=C.p`
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.text};
    line-height: 1.6;
    margin: 0;
    opacity: 0.9;

    @media (max-width: 48rem) {
        font-size: 0.95rem;
    }
`,yV=C.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
        max-width: 100%;

        button {
            width: 100%;
        }
    }
`,xV=C.input`
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    outline: none;
    transition: all 0.3s ease;
    width: 100%;

    &::placeholder {
        color: ${({theme:e})=>e.colors.text}80;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.9rem;
    }
`;C(Mt)`
    width: 100%;
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.875rem 1.5rem;

    ${({variant:e,theme:t})=>e==="secondary"&&`
        background: linear-gradient(135deg, ${t.colors.secondary}, ${t.colors.primary}) !important;
        
        &:hover:not(:disabled) {
            box-shadow: 0 0 20px ${t.colors.secondary}80 !important;
        }
    `}

    @media (max-width: 48rem) {
        max-width: 100%;
        font-size: 0.95rem;
    }
`;const bV=C.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,vV=C.label`
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    display: block;
`,wV=C.textarea`
    width: 100%;
    padding: 0.75rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    outline: none;
    transition: all 0.3s ease;
    resize: none;
    font-family: inherit;
    box-sizing: border-box;

    &::placeholder {
        color: ${({theme:e})=>e.colors.text}80;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    @media (max-width: 48rem) {
        font-size: 0.9rem;
    }
`,SV=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`,CV=C.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${({theme:e})=>e.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    @media (max-width: 48rem) {
        width: 120px;
        height: 120px;
    }
`,TV=C.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid ${({theme:e})=>e.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.primary};

    @media (max-width: 48rem) {
        width: 120px;
        height: 120px;

        svg {
            width: 48px;
            height: 48px;
        }
    }
`,jV=({isOpen:e,onClose:t,onConfirm:n,isLoading:i=!1})=>{const[r,a]=w.useState(""),[o,s]=w.useState(""),[l,u]=w.useState(""),d=()=>{if(!r.trim()){console.log("Nome da guilda é obrigatório");return}n({name:r,description:o,imageUrl:l}),f()},f=()=>{a(""),s(""),u(""),t()},h=c.jsxs(c.Fragment,{children:[c.jsx(Bo,{variant:"secondary",onClick:f,disabled:i,children:"Cancelar"}),c.jsx(Bo,{variant:"primary",onClick:d,disabled:i||!r.trim(),children:i?"Criando...":"Criar Guilda"})]});return c.jsx(os,{isOpen:e,onClose:f,title:"Criar Nova Guilda",footer:h,closeOnOverlayClick:!i,children:c.jsxs(bV,{children:[c.jsx(SV,{children:l?c.jsx(CV,{src:l,alt:"Avatar da Guilda"}):c.jsx(TV,{children:c.jsx(vl,{size:64})})}),c.jsx(Sd,{label:"URL da Imagem",type:"url",placeholder:"https://exemplo.com/imagem.png",id:"guild-image-url",value:l,onChange:m=>u(m.target.value)}),c.jsx(Sd,{label:"Nome da Guilda",type:"text",placeholder:"Digite o nome da guilda",id:"guild-name",value:r,onChange:m=>a(m.target.value),required:!0}),c.jsxs("div",{children:[c.jsx(vV,{htmlFor:"guild-description",children:"Descrição"}),c.jsx(wV,{id:"guild-description",placeholder:"Descreva sua guilda e seus objetivos...",value:o,onChange:m=>s(m.target.value),rows:4})]})]})})},EV=()=>{const[e,t]=w.useState(""),[n,i]=w.useState(!1),[r,a]=w.useState(!1),o=()=>{if(!e.trim()){console.log("Digite um código válido");return}console.log("Entrar em uma guilda com código:",e)},s=()=>{i(!0)},l=async u=>{try{a(!0),await new Promise(d=>setTimeout(d,1500)),console.log("Criar guilda:",u),i(!1)}catch(d){console.error("Erro ao criar guilda:",d)}finally{a(!1)}};return c.jsxs(uV,{children:[c.jsx(re.div,{initial:"hidden",animate:"visible",variants:Fe.fadeInUp,children:c.jsxs(dV,{children:[c.jsx(fV,{src:"/src/assets/image5.png",alt:"Guilda"}),c.jsxs(hV,{children:[c.jsx(mV,{children:"Bem-vindo às Guildas"}),c.jsxs(pV,{children:["Junte-se a uma guilda e treine ao lado de guerreiros que compartilham os mesmos objetivos.",c.jsx("br",{}),"Ou crie sua própria guilda e lidere seu clã rumo à glória e força suprema!"]})]})]})}),c.jsxs(gV,{as:re.div,initial:"hidden",animate:"visible",variants:Fe.staggerContainer,children:[c.jsx(re.div,{variants:Fe.fadeInUp,children:c.jsxs(o2,{children:[c.jsx(s2,{children:c.jsx(_o,{size:48})}),c.jsx(l2,{children:"Entrar em uma Guilda"}),c.jsx(c2,{children:"Digite o código da guilda fornecido pelo líder para se juntar. Participe de desafios coletivos e conquiste recompensas ao lado do seu clã."}),c.jsxs(yV,{children:[c.jsx(xV,{type:"text",placeholder:"Digite o código da guilda",value:e,onChange:u=>t(u.target.value)}),c.jsxs(Mt,{onClick:o,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",whiteSpace:"nowrap"},children:[c.jsx(xz,{size:20}),"Entrar"]})]})]})}),c.jsx(re.div,{variants:Fe.fadeInUp,children:c.jsxs(o2,{children:[c.jsx(s2,{children:c.jsx(Oz,{size:48})}),c.jsx(l2,{children:"Criar uma Guilda"}),c.jsx(c2,{children:"Seja o líder da sua própria guilda. Defina o nome, escolha o emblema e convide outros membros para se juntarem à sua jornada."}),c.jsxs(Mt,{onClick:s,style:{width:"100%",maxWidth:"250px",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[c.jsx(sT,{size:20}),"Criar Guilda"]})]})})]}),c.jsx(jV,{isOpen:n,onClose:()=>i(!1),onConfirm:l,isLoading:r})]})},Jc=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`,ws=C.label`
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,Wc=C.span`
    display: flex;
    align-items: center;
    color: ${({theme:e})=>e.colors.primary};
`,AV=C.select`
    padding: 0.75rem 1rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.5rem;
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;
    cursor: pointer;

    &:focus {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
    }

    option {
        background: ${({theme:e})=>e.colors.background};
        color: ${({theme:e})=>e.colors.text};
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.95rem;
    }
`,u2=C.input`
    padding: 0.75rem 1rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.5rem;
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
        color: ${({theme:e})=>e.colors.text}60;
    }

    &:focus {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
    }

    &[type="date"] {
        cursor: pointer;

        &::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(0.5);
        }
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.95rem;
    }
`,kV=C.textarea`
    padding: 0.75rem 1rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.5rem;
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;
    resize: none;
    font-family: inherit;
    line-height: 1.5;

    &::placeholder {
        color: ${({theme:e})=>e.colors.text}60;
    }

    &:focus {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.95rem;
    }
`,RV=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`,$V=C.img`
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`,zV=C.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: ${({theme:e})=>e.colors.error};
    color: white;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: scale(0.95);
    }
`,MV=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 2px dashed ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.6;
    gap: 0.5rem;

    svg {
        color: ${({theme:e})=>e.colors.primary};
        opacity: 0.5;
    }

    p {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 500;
    }

    span {
        font-size: 0.8rem;
        text-align: center;
        max-width: 300px;
    }
`,OV=C.button`
    padding: 0.75rem 1.5rem;
    border: 2px solid ${({theme:e})=>e.colors.text}40;
    border-radius: 0.5rem;
    background: transparent;
    color: ${({theme:e})=>e.colors.text};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 120px;

    &:hover:not(:disabled) {
        background: ${({theme:e})=>e.colors.text}10;
        border-color: ${({theme:e})=>e.colors.text}60;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (max-width: 48rem) {
        width: 100%;
        min-width: unset;
    }
`,DV=({isOpen:e,onClose:t,onSubmit:n,workouts:i})=>{const[r,a]=w.useState(""),[o,s]=w.useState(""),[l,u]=w.useState(""),[d,f]=w.useState(""),[h,m]=w.useState(""),[p,b]=w.useState(!1);w.useEffect(()=>{if(e){const E=new Date().toISOString().split("T")[0];s(E)}},[e]),w.useEffect(()=>{d.trim()&&S(d)?m(d):m("")},[d]);const S=E=>{try{return new URL(E),/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(E)}catch{return!1}},g=async E=>{if(E.preventDefault(),!r||!o)return;b(!0);const j=i.find(O=>O.id===r),k={workoutId:r,workoutName:(j==null?void 0:j.name)||"",date:o,description:l.trim()||void 0,imageUrl:h||void 0};try{await n(k),y()}catch(O){console.error("Erro ao fazer check-in:",O)}finally{b(!1)}},y=()=>{a(""),s(""),u(""),f(""),m(""),b(!1),t()},x=()=>{f(""),m("")},v=r&&o,A=c.jsxs(c.Fragment,{children:[c.jsx(OV,{type:"button",onClick:y,disabled:p,children:"Cancelar"}),c.jsx(Mt,{type:"submit",form:"checkin-form",disabled:!v||p,children:p?"Enviando...":"Fazer Check-in"})]});return c.jsx(os,{isOpen:e,onClose:y,title:"Fazer Check-in de Treino",footer:A,closeOnOverlayClick:!p,children:c.jsxs("form",{id:"checkin-form",onSubmit:g,children:[c.jsxs(Jc,{children:[c.jsxs(ws,{children:[c.jsx(Wc,{children:c.jsx(Dg,{size:18})}),"Treino *"]}),c.jsxs(AV,{value:r,onChange:E=>a(E.target.value),required:!0,children:[c.jsx("option",{value:"",children:"Selecione um treino"}),i.map(E=>c.jsx("option",{value:E.id,children:E.name},E.id))]})]}),c.jsxs(Jc,{children:[c.jsxs(ws,{children:[c.jsx(Wc,{children:c.jsx(Do,{size:18})}),"Data *"]}),c.jsx(u2,{type:"date",value:o,onChange:E=>s(E.target.value),max:new Date().toISOString().split("T")[0],required:!0})]}),c.jsxs(Jc,{children:[c.jsxs(ws,{children:[c.jsx(Wc,{children:c.jsx(oT,{size:18})}),"Mensagem (opcional)"]}),c.jsx(kV,{value:l,onChange:E=>u(E.target.value),placeholder:"Como foi seu treino? Conte para sua guilda...",rows:4,maxLength:500}),c.jsxs("span",{style:{fontSize:"0.75rem",opacity:.6,marginTop:"0.25rem",display:"block"},children:[l.length,"/500 caracteres"]})]}),c.jsxs(Jc,{children:[c.jsxs(ws,{children:[c.jsx(Wc,{children:c.jsx(vl,{size:18})}),"Imagem (opcional)"]}),c.jsx(u2,{type:"url",value:d,onChange:E=>f(E.target.value),placeholder:"Cole a URL da imagem (jpg, png, gif, webp)"})]}),h&&c.jsxs(RV,{children:[c.jsx(ws,{children:"Preview da Imagem"}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx($V,{src:h,alt:"Preview"}),c.jsx(zV,{type:"button",onClick:x,children:c.jsx(uf,{size:16})})]})]}),d&&!h&&c.jsxs(MV,{children:[c.jsx(vl,{size:32}),c.jsx("p",{children:"URL de imagem inválida"}),c.jsx("span",{children:"Certifique-se de que a URL termina com .jpg, .png, .gif ou .webp"})]})]})})},pm=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`,Ss=C.label`
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,gm=C.span`
    display: flex;
    align-items: center;
    color: ${({theme:e})=>e.colors.primary};
`,d2=C.input`
    padding: 0.75rem 1rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.5rem;
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
        color: ${({theme:e})=>e.colors.text}60;
    }

    &:focus {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.95rem;
    }
`,_V=C.textarea`
    padding: 0.75rem 1rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.5rem;
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;
    resize: none;
    font-family: inherit;
    line-height: 1.5;

    &::placeholder {
        color: ${({theme:e})=>e.colors.text}60;
    }

    &:focus {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.95rem;
    }
`,LV=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
`,NV=C.img`
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`,BV=C.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: ${({theme:e})=>e.colors.error};
    color: white;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: scale(0.95);
    }
`,UV=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 2px dashed ${({theme:e})=>e.colors.primary}40;
    border-radius: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.6;
    gap: 0.5rem;

    svg {
        color: ${({theme:e})=>e.colors.primary};
        opacity: 0.5;
    }

    p {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 500;
    }

    span {
        font-size: 0.8rem;
        text-align: center;
        max-width: 300px;
    }
`,f2=C.button`
    padding: 0.75rem 1.5rem;
    border: 2px solid ${({theme:e})=>e.colors.text}40;
    border-radius: 0.5rem;
    background: transparent;
    color: ${({theme:e})=>e.colors.text};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 120px;

    &:hover:not(:disabled) {
        background: ${({theme:e})=>e.colors.text}10;
        border-color: ${({theme:e})=>e.colors.text}60;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (max-width: 48rem) {
        width: 100%;
        min-width: unset;
    }
`,VV=C.div`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${({theme:e})=>e.colors.error}40;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`,h2=C.button`
    padding: 0.75rem 1.5rem;
    border: 2px solid ${({theme:e})=>e.colors.error};
    border-radius: 0.5rem;
    background: transparent;
    color: ${({theme:e})=>e.colors.error};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;

    &:hover:not(:disabled) {
        background: ${({theme:e})=>e.colors.error};
        color: white;
        box-shadow: 0 4px 12px ${({theme:e})=>e.colors.error}40;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,PV=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 1rem;
    gap: 1rem;

    svg {
        color: ${({theme:e})=>e.colors.error};
    }

    h3 {
        font-size: 1.5rem;
        color: ${({theme:e})=>e.colors.text};
        margin: 0;
    }

    p {
        font-size: 1rem;
        color: ${({theme:e})=>e.colors.text};
        opacity: 0.8;
        margin: 0;
        line-height: 1.6;
        max-width: 500px;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 0.5rem;

        h3 {
            font-size: 1.25rem;
        }

        p {
            font-size: 0.95rem;
        }
    }
`,HV=({isOpen:e,onClose:t,onSubmit:n,onDelete:i,guildData:r})=>{const[a,o]=w.useState(""),[s,l]=w.useState(""),[u,d]=w.useState(""),[f,h]=w.useState(""),[m,p]=w.useState(!1),[b,S]=w.useState(!1);w.useEffect(()=>{e&&(o(r.name),l(r.description||""),d(r.imageUrl||""),h(r.imageUrl||""),S(!1))},[e,r]),w.useEffect(()=>{u.trim()&&g(u)?h(u):u.trim()&&h("")},[u]);const g=_=>{try{return new URL(_),/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(_)}catch{return!1}},y=async _=>{if(_.preventDefault(),!a.trim())return;p(!0);const P={name:a.trim(),description:s.trim()||void 0,imageUrl:f||void 0};try{await n(P),x()}catch(T){console.error("Erro ao editar guilda:",T)}finally{p(!1)}},x=()=>{o(""),l(""),d(""),h(""),p(!1),S(!1),t()},v=()=>{d(""),h("")},A=()=>{S(!0)},E=async()=>{p(!0);try{await i(),x()}catch(_){console.error("Erro ao excluir guilda:",_),p(!1)}},j=()=>{S(!1)},k=a.trim(),O=b?c.jsxs(c.Fragment,{children:[c.jsx(f2,{type:"button",onClick:j,disabled:m,children:"Não, manter guilda"}),c.jsx(h2,{type:"button",onClick:E,disabled:m,children:m?"Excluindo...":"Sim, excluir guilda"})]}):c.jsxs(c.Fragment,{children:[c.jsx(f2,{type:"button",onClick:x,disabled:m,children:"Cancelar"}),c.jsx(Mt,{type:"submit",form:"edit-guild-form",disabled:!k||m,children:m?"Salvando...":"Salvar Alterações"})]});return c.jsx(os,{isOpen:e,onClose:x,title:b?"Confirmar Exclusão":"Editar Guilda",footer:O,closeOnOverlayClick:!m&&!b,children:b?c.jsxs(PV,{children:[c.jsx(Hz,{size:48}),c.jsx("h3",{children:"Tem certeza que deseja excluir esta guilda?"}),c.jsx("p",{children:"Esta ação não pode ser desfeita. Todos os membros perderão acesso à guilda e todo o histórico será perdido."})]}):c.jsxs("form",{id:"edit-guild-form",onSubmit:y,children:[c.jsxs(pm,{children:[c.jsxs(Ss,{children:[c.jsx(gm,{children:c.jsx(Gz,{size:18})}),"Nome da Guilda *"]}),c.jsx(d2,{type:"text",value:a,onChange:_=>o(_.target.value),placeholder:"Digite o nome da guilda",maxLength:50,required:!0}),c.jsxs("span",{style:{fontSize:"0.75rem",opacity:.6,marginTop:"0.25rem",display:"block"},children:[a.length,"/50 caracteres"]})]}),c.jsxs(pm,{children:[c.jsxs(Ss,{children:[c.jsx(gm,{children:c.jsx(lz,{size:18})}),"Descrição (opcional)"]}),c.jsx(_V,{value:s,onChange:_=>l(_.target.value),placeholder:"Descreva sua guilda, seus objetivos e valores...",rows:4,maxLength:300}),c.jsxs("span",{style:{fontSize:"0.75rem",opacity:.6,marginTop:"0.25rem",display:"block"},children:[s.length,"/300 caracteres"]})]}),c.jsxs(pm,{children:[c.jsxs(Ss,{children:[c.jsx(gm,{children:c.jsx(vl,{size:18})}),"Imagem da Guilda (opcional)"]}),c.jsx(d2,{type:"url",value:u,onChange:_=>d(_.target.value),placeholder:"Cole a URL da imagem (jpg, png, gif, webp)"})]}),f&&c.jsxs(LV,{children:[c.jsx(Ss,{children:"Preview da Imagem"}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx(NV,{src:f,alt:"Preview"}),c.jsx(BV,{type:"button",onClick:v,children:c.jsx(uf,{size:16})})]})]}),u&&!f&&c.jsxs(UV,{children:[c.jsx(vl,{size:32}),c.jsx("p",{children:"URL de imagem inválida"}),c.jsx("span",{children:"Certifique-se de que a URL termina com .jpg, .png, .gif ou .webp"})]}),c.jsxs(VV,{children:[c.jsx(Ss,{children:"Zona de Perigo"}),c.jsxs(h2,{type:"button",onClick:A,disabled:m,children:[c.jsx(Bz,{size:18}),"Excluir Guilda"]})]})]})})},$y=e=>new Promise(t=>setTimeout(t,e)),m2=async()=>(await new Promise(e=>setTimeout(e,800)),{name:"Guerreiros do Código",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",code:"FORGE2024",memberCount:7}),FV=async()=>(await $y(1e3),[{id:1,name:"Paulo Rosado",avatar:"https://avatars.githubusercontent.com/u/117609505?v=4",score:12500},{id:2,name:"Gustavo Mourato",avatar:"https://avatars.githubusercontent.com/u/142419362?v=4",score:11800},{id:3,name:"Vinícius Jordão",avatar:"https://avatars.githubusercontent.com/u/142420325?v=4",score:10200},{id:4,name:"Thomaz Lima",avatar:"https://avatars.githubusercontent.com/u/126795323?v=4",score:9500},{id:5,name:"João Marcelo",avatar:"https://avatars.githubusercontent.com/u/142419624?v=4",score:8900},{id:6,name:"Gabriel Albuquerque",avatar:"https://avatars.githubusercontent.com/u/142417669?v=4",score:8200},{id:7,name:"Evaldo Galdino",avatar:"https://avatars.githubusercontent.com/u/97982032?v=4",score:7600}]),p2=async()=>(await $y(900),[{id:1,userId:1,userName:"Paulo Rosado",userAvatar:"https://avatars.githubusercontent.com/u/117609505?v=4",workoutName:"Peito e Tríceps",description:"Treino pesado hoje! Consegui bater meu recorde no supino 💪",imageUrl:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",timestamp:new Date(Date.now()-2*60*60*1e3)},{id:2,userId:2,userName:"Gustavo Mourato",userAvatar:"https://avatars.githubusercontent.com/u/142419362?v=4",workoutName:"Cardio Matinal",description:"Melhor forma de começar o dia!",imageUrl:"https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80",timestamp:new Date(Date.now()-5*60*60*1e3)},{id:3,userId:3,userName:"Vinícius Jordão",userAvatar:"https://avatars.githubusercontent.com/u/142420325?v=4",workoutName:"Pernas",timestamp:new Date(Date.now()-24*60*60*1e3)}]),qV=async()=>(await $y(300),[{id:"1",name:"Peito e Tríceps"},{id:"2",name:"Costas e Bíceps"},{id:"3",name:"Pernas"},{id:"4",name:"Ombros e Abdômen"},{id:"5",name:"Cardio Matinal"},{id:"6",name:"Treino Funcional"}]),GV=C.div`
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({theme:e})=>e.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    * {
        box-sizing: border-box;
    }

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
        padding-top: 6rem;
    }
`,YV=C.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

    @media (max-width: 48rem) {
        padding: 1rem 0.75rem;
    }
`,g2=C.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 48rem) {
        flex-direction: row;
        text-align: left;
        width: auto;
        gap: 0.75rem;
        flex: 1;
    }
`,KV=C.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${({theme:e})=>e.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    @media (max-width: 48rem) {
        width: 60px;
        height: 60px;
    }
`,y2=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @media (max-width: 48rem) {
        align-items: center;
    }
`,XV=C.h1`
    font-size: 1.8rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`,QV=C.span`
    font-size: 0.9rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
`,IV=C.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`,ZV=C.button`
    background: transparent;
    border: none;
    color: ${({theme:e,$copied:t})=>t?e.colors.success:e.colors.primary};
    padding: 0.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    border-radius: 0.25rem;
    position: relative;

    &:hover {
        background: ${({theme:e,$copied:t})=>t?e.colors.success:e.colors.primary}20;
    }

    &:active {
        transform: scale(0.95);
    }
`,JV=C.span`
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    background: ${({theme:e})=>e.colors.success};
    color: white;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    animation: fadeIn 0.2s ease-in;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 4px solid transparent;
        border-top-color: ${({theme:e})=>e.colors.success};
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-4px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`,x2=C.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    button {
        width: 10rem;
        height: 3.5rem;
    }

    @media (max-width: 48rem) {
        width: auto;
        flex-direction: column;
        gap: 0.4rem;
        align-items: flex-end;

        button {
            width: 7.5rem;
            height: 2.5rem;
            font-size: 0.75rem;
            padding: 0.4rem 0.6rem;
        }
    }
`,WV=C.div`
    display: flex;
    gap: 0;
    margin-bottom: 2rem;
    align-items: center;
    position: relative;
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}20;
    border-radius: 0.5rem;
    padding: 0.25rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        margin-bottom: 0.5rem;
        overflow-x: auto;
        gap: 0;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        margin-top: -1.5rem;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`,b2=C.button`
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    color: ${({$active:e,theme:t})=>e?"white":t.colors.text};
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: ${({$active:e})=>e?"600":"500"};
    transition:
        color 0.3s ease,
        font-weight 0.3s ease;
    flex: 1;
    min-width: fit-content;
    white-space: nowrap;
    position: relative;
    z-index: 1;

    svg {
        color: ${({$active:e})=>e?"white":"currentColor"};
        transition: color 0.3s ease;
        width: 18px;
        height: 18px;
    }

    &:hover {
        color: ${({$active:e,theme:t})=>e?"white":t.colors.primary};
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`,eP=C(re.div)`
    position: absolute;
    top: -2px;
    bottom: -2px;
    right: -2px;
    left: 0;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    border-radius: 0.5rem;
    z-index: 0;
`,tP=C.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    min-height: 0;
`,nP=C(re.div)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 2rem;
    background: #1a1a1a;
    border-radius: 0.5rem;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    min-height: 0;

    /* Customizar scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.colors.primary};
        border-radius: 3px;
    }

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 0.75rem;
    }
`,iP=C.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    flex-direction: ${({$isCurrentUser:e})=>e?"row-reverse":"row"};
    margin-bottom: 0.375rem;

    @media (max-width: 48rem) {
        gap: 0.375rem;
    }
`,rP=C.div`
    background: ${({$isCurrentUser:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary})`:`${t.colors.background}`};
    border: ${({$isCurrentUser:e,theme:t})=>e?"none":`2px solid ${t.colors.primary}40`};
    border-radius: ${({$isCurrentUser:e})=>e?"1rem 1rem 0.25rem 1rem":"1rem 1rem 1rem 0.25rem"};
    padding: 1rem;
    max-width: 65%;
    transition: all 0.2s ease;
    color: ${({$isCurrentUser:e})=>e?"white":"inherit"};
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: 48rem) {
        max-width: 85%;
        padding: 0.75rem;
    }
`,aP=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    margin-bottom: 0.375rem;
`,oP=C.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`,sP=C.span`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({$isCurrentUser:e})=>e?"rgba(255, 255, 255, 0.9)":"inherit"};
`,lP=C.span`
    font-size: 0.75rem;
    color: ${({$isCurrentUser:e})=>e?"rgba(255, 255, 255, 0.7)":"inherit"};
    opacity: 0.7;

    &::before {
        content: "\u2022";
        margin-right: 0.5rem;
    }
`,cP=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,uP=C.div`
    display: inline-block;
    background: ${({$isCurrentUser:e})=>e?"linear-gradient(135deg, #1a1a1a, #292929ff)":"linear-gradient(135deg, rgba(171, 37, 34, 1), rgba(239, 117, 43, 1))"};
    padding: 0.35rem 0.85rem;
    border-radius: 1.5rem;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
    color: ${({$isCurrentUser:e})=>e?"rgba(255, 255, 255, 0.9)":"white"};
    box-shadow: none;
`,dP=C.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({$isCurrentUser:e})=>e?"rgba(255, 255, 255, 0.95)":"inherit"};
    margin: 0;
    word-wrap: break-word;
`,fP=C.img`
    width: 100%;
    max-width: 100%;
    max-height: 250px;
    border-radius: 0.5rem;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    margin-top: 0.5rem;
    display: block;

    @media (max-width: 48rem) {
        max-height: 200px;
    }
`,hP=C(re.div)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    flex: 1;
    min-height: 0;
    padding: 0.5rem 0;

    /* Customizar scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.colors.primary};
        border-radius: 3px;
    }
`;C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem 1rem 1rem 0.25rem;
    padding: 1rem;
    max-width: 65%;

    @media (max-width: 48rem) {
        max-width: 80%;
        padding: 0.875rem;
    }
`;const mP=C.div`
    width: ${({$position:e})=>e===1?"120px":"100px"};
    height: ${({$position:e})=>e===1?"120px":"100px"};
    border-radius: 50%;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    flex-shrink: 0;
    animation: shimmer 1.5s infinite;
    flex-shrink: 0;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    @media (max-width: 48rem) {
        width: ${({$position:e})=>e===1?"90px":"75px"};
        height: ${({$position:e})=>e===1?"90px":"75px"};
    }
`,eu=C.div`
    width: ${({width:e})=>e||"100px"};
    height: ${({height:e})=>e||"20px"};
    border-radius: 4px;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`,pP=Jd`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,gP=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`,yP=C.div`
    width: ${({size:e})=>e||40}px;
    height: ${({size:e})=>e||40}px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        animation: ${pP} 1s linear infinite;
        width: 100%;
        height: 100%;
    }
`,Rj=({size:e=40,color:t})=>c.jsx(gP,{children:c.jsx(yP,{size:e,color:t,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",children:[c.jsx("circle",{cx:"20",cy:"20",r:"16",stroke:"url(#gradient)",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"25 75",strokeDashoffset:"0",style:{animation:"spin 1s linear infinite",transformOrigin:"center"}}),c.jsx("defs",{children:c.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#AB2522"}),c.jsx("stop",{offset:"100%",stopColor:"#EF752B"})]})})]})})}),xP=()=>{const{user:e}=ns(),[t,n]=w.useState("messages"),i=w.useRef(null),r=w.useRef(null),a=w.useRef(null),[o,s]=w.useState({x:0,width:0}),[l,u]=w.useState(null),[d,f]=w.useState([]),[h,m]=w.useState([]),[p,b]=w.useState([]),[S,g]=w.useState(!0),[y,x]=w.useState(!0),[v,A]=w.useState(!0),[E,j]=w.useState(!1),[k,O]=w.useState(!1),[_,P]=w.useState(!1);w.useEffect(()=>{const F=()=>{const G=t==="messages"?r.current:a.current;G&&s({x:G.offsetLeft-4,width:G.offsetWidth+8.5})};return F(),window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[t]),w.useEffect(()=>{(async()=>{g(!0);try{const G=await m2();u(G)}catch(G){console.error("Erro ao carregar dados da guilda:",G)}finally{g(!1)}})()},[]),w.useEffect(()=>{(async()=>{try{const G=await qV();b(G)}catch(G){console.error("Erro ao carregar treinos disponíveis:",G)}})()},[]),w.useEffect(()=>{t==="ranking"&&(async()=>{x(!0);try{const G=await FV();f(G)}catch(G){console.error("Erro ao carregar membros:",G)}finally{x(!1)}})()},[t]),w.useEffect(()=>{t==="messages"&&(async()=>{A(!0);try{const G=await p2();m(G)}catch(G){console.error("Erro ao carregar check-ins:",G)}finally{A(!1)}})()},[t]),w.useLayoutEffect(()=>{i.current&&!v&&(i.current.scrollTop=i.current.scrollHeight)},[h,t,v]);const T=async()=>{if(l)try{await navigator.clipboard.writeText(l.code),j(!0),setTimeout(()=>j(!1),2e3)}catch(F){console.error("Erro ao copiar código:",F)}},V=()=>{P(!0)},N=async F=>{console.log("Guilda editada:",F);const G=await m2();u(G)},q=async()=>{console.log("Guilda excluída")},$=()=>{O(!0)},U=async F=>{console.log("Check-in realizado:",F);const G=await p2();m(G)},z=F=>{const me=new Date().getTime()-F.getTime(),Me=Math.floor(me/(1e3*60*60)),Dt=Math.floor(Me/24);return Me<1?`há ${Math.floor(me/6e4)} min`:Me<24?`há ${Me}h`:Dt===1?"ontem":Dt<7?`há ${Dt} dias`:F.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})},B=F=>F.toLocaleString("pt-BR"),Y=d.slice(0,3),te=d.slice(3);return c.jsxs(GV,{children:[c.jsx(YV,{children:S?c.jsxs(c.Fragment,{children:[c.jsxs(g2,{children:[c.jsx(mP,{$position:1,style:{width:"80px",height:"80px"}}),c.jsxs(y2,{children:[c.jsx(eu,{width:"200px",height:"28px"}),c.jsx(eu,{width:"150px",height:"16px"})]})]}),c.jsxs(x2,{children:[c.jsx(eu,{width:"160px",height:"48px"}),c.jsx(eu,{width:"160px",height:"48px"})]})]}):l?c.jsxs(c.Fragment,{children:[c.jsxs(g2,{children:[c.jsx(KV,{src:l.imageUrl,alt:l.name}),c.jsxs(y2,{children:[c.jsx(XV,{children:l.name}),c.jsxs(IV,{children:[c.jsxs(QV,{children:["Código: ",l.code]}),c.jsxs(ZV,{onClick:T,title:"Copiar código",$copied:E,children:[E?c.jsx(W$,{size:16}):c.jsx(iz,{size:16}),E&&c.jsx(JV,{children:"Copiado!"})]})]})]})]}),c.jsxs(x2,{children:[c.jsxs(Mt,{variant:"secondary",size:"md",onClick:V,children:[c.jsx(_z,{size:20}),"Editar"]}),c.jsxs(Mt,{variant:"primary",size:"md",onClick:$,children:[c.jsx(sT,{size:20}),"Check-in"]})]})]}):null}),c.jsxs(WV,{children:[c.jsx(eP,{layout:!0,initial:!1,animate:{x:o.x,width:o.width},transition:{type:"spring",stiffness:300,damping:30}}),c.jsxs(b2,{ref:r,$active:t==="messages",onClick:()=>n("messages"),children:[c.jsx(oT,{size:20}),"Check-ins"]}),c.jsxs(b2,{ref:a,$active:t==="ranking",onClick:()=>n("ranking"),children:[c.jsx(Sl,{size:20}),"Ranking de Membros"]})]}),c.jsx(tP,{children:c.jsxs(t3,{mode:"wait",children:[t==="messages"&&c.jsx(nP,{initial:{opacity:0,x:-20},ref:i,animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:v?c.jsx(Rj,{}):[...h].reverse().map(F=>{const G=F.userId===(e==null?void 0:e.id);return c.jsxs(iP,{$isCurrentUser:G,children:[c.jsx(Ol,{name:F.userName,avatar:F.userAvatar,size:36}),c.jsxs(rP,{$isCurrentUser:G,children:[c.jsx(aP,{children:c.jsxs(oP,{children:[c.jsx(sP,{$isCurrentUser:G,children:F.userName}),c.jsx(lP,{$isCurrentUser:G,children:z(F.timestamp)})]})}),c.jsxs(cP,{children:[c.jsxs(uP,{$isCurrentUser:G,children:["Concluiu: ",F.workoutName]}),F.description&&c.jsx(dP,{$isCurrentUser:G,children:F.description}),F.imageUrl&&c.jsx(fP,{src:F.imageUrl,alt:"Check-in"})]})]})]},F.id)})},"messages"),t==="ranking"&&c.jsx(hP,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:y?c.jsxs(c.Fragment,{children:[c.jsx(Ed,{}),c.jsx(Ry,{count:4})]}):c.jsxs(c.Fragment,{children:[c.jsx(jd,{topThree:Y,formatScore:B,animated:!0}),c.jsx(ky,{members:te,formatScore:B,startPosition:4,animated:!0})]})},"ranking")]})}),c.jsx(DV,{isOpen:k,onClose:()=>O(!1),onSubmit:U,workouts:p}),l&&c.jsx(HV,{isOpen:_,onClose:()=>P(!1),onSubmit:N,onDelete:q,guildData:{name:l.name,description:void 0,imageUrl:l.imageUrl}})]})},Uf=e=>new Promise(t=>setTimeout(t,e)),bP=(e,t)=>{const n=new Date;return e>n?"scheduled":(e<=n&&t>=n,"active")},vP=async e=>{await Uf(800);const t=new Date;t.setDate(t.getDate()+7);const n=new Date;n.setDate(n.getDate()-3);const i=bP(n,t);return{id:e,name:"Torneio de Verão 2024",endDate:t,startDate:n,status:i}},wP=async e=>(await Uf(1e3),[{id:1,name:"Guerreiros do Código",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",score:125e3,memberCount:7},{id:2,name:"Dragões de Fogo",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-dragons",score:118e3,memberCount:8},{id:3,name:"Titãs do Aço",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-titans",score:102e3,memberCount:6},{id:4,name:"Lobos Solitários",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-wolves",score:95e3,memberCount:5},{id:5,name:"Fênix Renascida",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-phoenix",score:89e3,memberCount:7},{id:6,name:"Leões da Savana",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-lions",score:82e3,memberCount:6},{id:7,name:"Águias Voadoras",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-eagles",score:76e3,memberCount:5}]),SP=async e=>(await Uf(600),[{id:1,position:1,name:"Tênis Air Jordan 1 Low",imageUrl:"https://artwalk.vtexassets.com/arquivos/ids/471003/55355-8-161-1.jpg?v=638373804812600000"},{id:2,position:2,name:"Kit Fusion Whey Protein + Bcaa + Creatina",imageUrl:"https://cdn.dooca.store/246/products/srybt6gfnzv3gebzl1stcskrbxp1y4qhqtpg.jpg?v=1628278164"},{id:3,position:3,name:"Kit Whey 100% + Creatina Max Titanium",imageUrl:"https://images.tcdn.com.br/img/img_prod/632109/kit_whey_100_900g_creatina_300g_max_titanium_3188_1_f37b70466255a1e6f2ca0b0c171f57b5.jpg"}]),CP=async()=>(await Uf(800),[{id:1,name:"Guerreiros do Código",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",score:125e3,memberCount:7},{id:2,name:"Dragões de Fogo",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-dragons",score:118e3,memberCount:8},{id:3,name:"Titãs do Aço",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-titans",score:102e3,memberCount:6}]),v2=C.div`
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({theme:e})=>e.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    * {
        box-sizing: border-box;
    }

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
        padding-top: 6rem;
    }
`,TP=C.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 120px;

    @media (max-width: 48rem) {
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        padding: 1rem 0.75rem;
        min-height: 90px;
    }
`,jP=C.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;

    @media (max-width: 48rem) {
        flex-direction: row;
        text-align: left;
        width: auto;
        gap: 0.75rem;
        flex: 1;
    }
`,EP=C.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    min-height: 80px;
    justify-content: center;

    @media (max-width: 48rem) {
        gap: 0.25rem;
        min-height: 60px;
    }
`,AP=C.h1`
    font-size: 1.8rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`,kP=C.span`
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
    font-weight: 500;

    @media (max-width: 48rem) {
        font-size: 0.875rem;
    }
`,RP=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
    padding: 3rem 2rem;
    text-align: center;
`,$P=C.h1`
    font-size: 2rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-weight: 700;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
    }
`,zP=C.div`
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 0.875rem;
    }
`,MP=C.div`
    font-size: 1.5rem;
    color: white;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`,OP=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
    padding: 3rem 2rem;
    text-align: center;
`,DP=C.p`
    font-size: 1.25rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`,_P=C.h2`
    font-size: 2rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 2rem 0;
    font-weight: 700;
    text-align: center;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
`,LP=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    padding: 2rem 0;
    width: 100%;
`,NP=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    min-height: 400px;
    width: 100%;
`,BP=C.div`
    display: flex;
    gap: 0;
    margin-bottom: 2rem;
    align-items: center;
    position: relative;
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}20;
    border-radius: 0.5rem;
    padding: 0.25rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        margin-bottom: 0.5rem;
        overflow-x: auto;
        gap: 0;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        margin-top: -1.5rem;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`,w2=C.button`
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    color: ${({$active:e,theme:t})=>e?"white":t.colors.text};
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: ${({$active:e})=>e?"600":"500"};
    transition:
        color 0.3s ease,
        font-weight 0.3s ease;
    flex: 1;
    min-width: fit-content;
    white-space: nowrap;
    position: relative;
    z-index: 1;

    svg {
        color: ${({$active:e})=>e?"white":"currentColor"};
        transition: color 0.3s ease;
        width: 18px;
        height: 18px;
    }

    &:hover {
        color: ${({$active:e,theme:t})=>e?"white":t.colors.primary};
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`,UP=C(re.div)`
    position: absolute;
    top: -2px;
    bottom: -2px;
    right: -2px;
    left: 0;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    border-radius: 0.5rem;
    z-index: 0;
`,VP=C.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    min-height: 0;
`,S2=C(re.div)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    flex: 1;
    min-height: 0;
    padding: 0.5rem 0;

    /* Customizar scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.colors.primary};
        border-radius: 3px;
    }
`,PP=C(re.div)`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: stretch;
    justify-content: flex-start;
    box-sizing: border-box;
    min-height: 0;
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;

    /* Customizar scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.colors.primary};
        border-radius: 3px;
    }
`,C2=C.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 1.5rem 2rem;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 1rem;
    }
`,HP=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${({theme:e})=>e.colors.primary}80;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
        gap: 1rem;
    }
`,FP=C.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 0.5rem;
    flex-shrink: 0;

    @media (max-width: 48rem) {
        width: 60px;
        height: 60px;
    }
`,ym=C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
        gap: 1rem;
    }
`;C.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
    padding: 2rem 0;
    position: relative;
    width: 100%;

    @media (max-width: 48rem) {
        gap: 0.75rem;
        padding: 1rem 0;
    }
`;C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({$position:e})=>e===1?2:e===2?1:3};
`;C.div`
    position: relative;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
    animation: float 3s ease-in-out infinite;
    animation-delay: ${({$position:e})=>e*.2}s;

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    img {
        width: ${({$position:e})=>e===1?"200px":"150px"};
        height: auto;
        object-fit: contain;
        border-radius: 0.5rem;

        @media (max-width: 48rem) {
            width: ${({$position:e})=>e===1?"120px":"100px"};
        }
    }
`;C.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 150px;
    width: 100%;

    @media (max-width: 48rem) {
        max-width: 100px;
    }
`;C.div`
    width: 120px;
    height: ${({$position:e})=>e===1?"150px":e===2?"120px":"90px"};
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}40, ${({theme:e})=>e.colors.secondary}40);
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({$position:e})=>e===1?"3rem":e===2?"2.5rem":"2rem"};
    transition: all 0.3s ease;

    @media (max-width: 48rem) {
        width: 70px;
        height: ${({$position:e})=>e===1?"90px":e===2?"75px":"60px"};
        font-size: ${({$position:e})=>e===1?"1.8rem":e===2?"1.5rem":"1.2rem"};
    }
`;C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({$position:e})=>e===1?2:e===2?1:3};
`;C.div`
    width: 120px;
    height: ${({$position:e})=>e===1?"150px":e===2?"120px":"90px"};
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 0.5rem 0.5rem 0 0;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    @media (max-width: 48rem) {
        width: 70px;
        height: ${({$position:e})=>e===1?"90px":e===2?"75px":"60px"};
    }
`;C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: all 0.2s ease;
    box-sizing: border-box;
    flex: 1;
    max-width: 300px;

    &:hover {
        border-color: ${({theme:e})=>e.colors.primary}80;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 0.75rem;
        max-width: 100%;
    }
`;const qP=C.div`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    flex-shrink: 0;
    min-width: 50px;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
        min-width: 40px;
    }
`;C.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    object-fit: contain;
    border-radius: 0.5rem;

    @media (max-width: 48rem) {
        max-width: 150px;
    }
`;const GP=C.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: white;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
    flex: 1;
    line-height: 1.4;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;C.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    flex: 1;
    max-width: 300px;

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 0.75rem;
        max-width: 100%;
    }
`;const Nr=C.div`
    width: ${({width:e})=>e||"100px"};
    height: ${({height:e})=>e||"20px"};
    border-radius: 4px;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;C(Nr)`
    border-radius: 0.5rem;
`;const xm=C.div`
    width: ${({$position:e})=>e===1?"200px":"150px"};
    height: ${({$position:e})=>e===1?"200px":"150px"};
    border-radius: 0.5rem;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    @media (max-width: 48rem) {
        width: ${({$position:e})=>e===1?"120px":"100px"};
        height: ${({$position:e})=>e===1?"120px":"100px"};
    }
`,YP=()=>{const{id:e}=H8(),t=e?parseInt(e,10):1,[n,i]=w.useState("ranking"),r=w.useRef(null),a=w.useRef(null),[o,s]=w.useState({x:0,width:0}),[l,u]=w.useState(null),[d,f]=w.useState([]),[h,m]=w.useState([]),[p,b]=w.useState(null),[S,g]=w.useState(!0),[y,x]=w.useState(!0),[v,A]=w.useState(!0),[E,j]=w.useState(!1),[k,O]=w.useState("");w.useEffect(()=>{const z=()=>{const B=n==="ranking"?r.current:a.current;B&&s({x:B.offsetLeft-4,width:B.offsetWidth+8.5})};return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[n]),w.useEffect(()=>{!S&&(l==null?void 0:l.status)==="active"&&setTimeout(()=>{const B=n==="ranking"?r.current:a.current;B&&s({x:B.offsetLeft-4,width:B.offsetWidth+8.5})},0)},[S,l==null?void 0:l.status,n]),w.useEffect(()=>{(async()=>{g(!0);try{const B=await vP(t);u(B)}catch(B){console.error("Erro ao carregar dados do torneio:",B)}finally{g(!1)}})()},[t]),w.useEffect(()=>{const z=async()=>{x(!0);try{const B=await wP(t);f(B)}catch(B){console.error("Erro ao carregar ranking:",B)}finally{x(!1)}};n==="ranking"&&(l==null?void 0:l.status)==="active"&&z()},[n,t,l==null?void 0:l.status]),w.useEffect(()=>{const z=async()=>{A(!0);try{const B=await SP(t);m(B)}catch(B){console.error("Erro ao carregar premiações:",B)}finally{A(!1)}};n==="prizes"&&(l==null?void 0:l.status)==="active"&&z()},[n,t,l==null?void 0:l.status]),w.useEffect(()=>{(async()=>{if((l==null?void 0:l.status)!=="active"){j(!0);try{const B=await CP();b(B)}catch(B){console.error("Erro ao carregar último pódio:",B)}finally{j(!1)}}})()},[l==null?void 0:l.status]);const _=z=>{const B=new Date,Y=z.getTime()-B.getTime();if(Y<=0)return"Torneio encerrado";const te=Math.floor(Y/(1e3*60*60*24)),F=Math.floor(Y%(1e3*60*60*24)/(1e3*60*60)),G=Math.floor(Y%(1e3*60*60)/(1e3*60));return te>0?`Termina em ${te} dia${te>1?"s":""} e ${F}h`:F>0?`Termina em ${F}h e ${G}min`:`Termina em ${G}min`},P=w.useCallback(z=>{const B=new Date,Y=z.getTime()-B.getTime();if(Y<=0)return"Torneio iniciado";const te=Math.floor(Y/(1e3*60*60*24)),F=Math.floor(Y%(1e3*60*60*24)/(1e3*60*60)),G=Math.floor(Y%(1e3*60*60)/(1e3*60)),me=Math.floor(Y%(1e3*60)/1e3);return te>0?`${te} dia${te>1?"s":""}, ${F}h e ${G}min`:F>0?`${F}h, ${G}min e ${me}s`:G>0?`${G}min e ${me}s`:`${me}s`},[]);w.useEffect(()=>{if((l==null?void 0:l.status)!=="scheduled"||!l.startDate){O("");return}const z=()=>{O(P(l.startDate))};z();const B=setInterval(z,1e3);return()=>clearInterval(B)},[l==null?void 0:l.status,l==null?void 0:l.startDate,P]);const T=z=>z.toLocaleString("pt-BR"),V=d.slice(0,3).map(z=>({id:z.id,name:z.name,avatar:z.imageUrl,score:z.score})),N=d.slice(3).map(z=>({id:z.id,name:z.name,avatar:z.imageUrl,score:z.score})),q=(p==null?void 0:p.slice(0,3).map(z=>({id:z.id,name:z.name,avatar:z.imageUrl,score:z.score})))||[],$=(l==null?void 0:l.status)==="active",U=(l==null?void 0:l.status)==="scheduled";return S?c.jsx(v2,{children:c.jsx(NP,{children:c.jsx(Rj,{size:60})})}):c.jsxs(v2,{children:[$&&c.jsxs(c.Fragment,{children:[c.jsx(TP,{children:l&&c.jsx(jP,{children:c.jsxs(EP,{children:[c.jsx(AP,{children:l.name}),c.jsx(kP,{children:_(l.endDate)})]})})}),c.jsxs(BP,{children:[c.jsx(UP,{layout:!0,initial:!1,animate:{x:o.x,width:o.width},transition:{type:"spring",stiffness:300,damping:30}}),c.jsxs(w2,{ref:r,$active:n==="ranking",onClick:()=>i("ranking"),children:[c.jsx(Sl,{size:20}),"Ranking de Guildas"]}),c.jsxs(w2,{ref:a,$active:n==="prizes",onClick:()=>i("prizes"),children:[c.jsx(Y$,{size:20}),"Premiações"]})]})]}),c.jsx(VP,{children:$?c.jsxs(t3,{mode:"wait",children:[n==="ranking"&&c.jsx(S2,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:y?c.jsxs(c.Fragment,{children:[c.jsx(Ed,{}),c.jsx(Ry,{count:4})]}):c.jsxs(c.Fragment,{children:[c.jsx(jd,{topThree:V,formatScore:T,animated:!0}),c.jsx(ky,{members:N,formatScore:T,startPosition:4,animated:!0})]})},"ranking"),n==="prizes"&&c.jsx(PP,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:v?c.jsxs(C2,{children:[c.jsxs(ym,{children:[c.jsx(Nr,{width:"50px",height:"24px"}),c.jsx(xm,{$position:1,style:{width:"80px",height:"80px"}}),c.jsx(Nr,{width:"200px",height:"20px",style:{flex:1}})]}),c.jsxs(ym,{children:[c.jsx(Nr,{width:"50px",height:"24px"}),c.jsx(xm,{$position:2,style:{width:"80px",height:"80px"}}),c.jsx(Nr,{width:"200px",height:"20px",style:{flex:1}})]}),c.jsxs(ym,{children:[c.jsx(Nr,{width:"50px",height:"24px"}),c.jsx(xm,{$position:3,style:{width:"80px",height:"80px"}}),c.jsx(Nr,{width:"200px",height:"20px",style:{flex:1}})]})]}):c.jsx(C2,{children:h.map((z,B)=>c.jsxs(HP,{as:re.div,initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:B*.15,duration:.5},children:[c.jsxs(qP,{children:["#",z.position]}),c.jsx(FP,{src:z.imageUrl,alt:z.name}),c.jsx(GP,{children:z.name})]},z.id))})},"prizes")]}):U?c.jsx(RP,{as:re.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:l&&c.jsxs(c.Fragment,{children:[c.jsx($P,{children:l.name}),c.jsx(zP,{children:"Começa em:"}),c.jsx(MP,{children:k||P(l.startDate)})]})}):c.jsx(S2,{as:re.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:E?c.jsx(c.Fragment,{children:c.jsx(Ed,{})}):p&&p.length>0?c.jsxs(LP,{children:[c.jsx(_P,{children:"Últimos vencedores:"}),c.jsx(jd,{topThree:q,formatScore:T,animated:!0})]}):c.jsx(OP,{children:c.jsx(DP,{children:"Nenhum torneio anterior encontrado"})})})})]})},KP=C.aside`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    background: ${({theme:e})=>e.colors.background};
    border-right: 2px solid;
    border-image: linear-gradient(180deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    z-index: 1000;
    transition: transform 0.3s ease;
    overflow-y: auto;
    overflow-x: hidden;

    /* Customizar scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.colors.primary};
        border-radius: 3px;
    }

    @media (max-width: 48rem) {
        transform: translateX(${({$isOpen:e})=>e?"0":"-100%"});
        box-shadow: ${({$isOpen:e})=>e?"4px 0 12px rgba(0, 0, 0, 0.3)":"none"};
    }

    @media (max-height: 700px) {
        padding: 0.5rem 0;
    }
`,XP=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem 1.5rem;
    position: relative;
    flex-shrink: 0;

    .close {
        display: none;
        position: absolute;
        right: 1rem;

        @media (max-width: 48rem) {
            display: flex;
        }
    }

    @media (max-height: 700px) {
        padding: 0 1rem 1rem;
    }
`,QP=C.img`
    height: 10rem;
    width: auto;
    max-width: 100%;
    object-fit: contain;

    @media (max-height: 700px) {
        height: 8rem;
        margin-top: 1rem;
    }

    @media (max-height: 600px) {
        height: 4rem;
    }
`,T2=C.button`
    display: none;
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    z-index: 999;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem;
    color: white;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
    }

    @media (max-width: 48rem) {
        display: flex;
    }

    &.close {
        position: static;
        background: transparent;
        padding: 0.5rem;

        &:hover {
            box-shadow: none;
            background: ${({theme:e})=>e.colors.primary}22;
        }
    }
`,IP=C.div`
    display: none;

    @media (max-width: 48rem) {
        display: ${({$isOpen:e})=>e?"block":"none"};
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
`,ZP=C.ul`
    list-style: none;
    padding: 1rem 0;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-height: 700px) {
        padding: 0.5rem 0;
    }
`,JP=C.li`
    margin-bottom: 0.5rem;

    @media (max-height: 700px) {
        margin-bottom: 0.25rem;
    }
`,WP=C(Wo)`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    color: ${({$isActive:e,theme:t})=>e?"white":t.colors.text};
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    background: ${({$isActive:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary})`:"transparent"};
    margin: 0 1rem;
    border-radius: 0.5rem;
    white-space: nowrap;

    svg {
        color: ${({$isActive:e})=>e?"white":"currentColor"};
        flex-shrink: 0;
    }

    &:hover {
        background: ${({$isActive:e,theme:t})=>e?`linear-gradient(135deg, ${t.colors.primary}, ${t.colors.secondary})`:`${t.colors.primary}22`};
        transform: translateX(5px);
    }

    span {
        font-weight: ${({$isActive:e})=>e?"600":"400"};
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (max-height: 700px) {
        padding: 0.75rem 1rem;
        gap: 0.75rem;
        font-size: 0.9rem;

        svg {
            width: 18px;
            height: 18px;
        }
    }

    @media (max-height: 600px) {
        padding: 0.6rem 0.875rem;
        gap: 0.625rem;
        font-size: 0.85rem;

        svg {
            width: 16px;
            height: 16px;
        }
    }
`,eH=C.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    margin: 0 1rem;
    border: none;
    background: transparent;
    color: ${({theme:e})=>e.colors.text};
    cursor: pointer;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    font-size: 1rem;
    white-space: nowrap;
    flex-shrink: 0;
    margin-top: auto;

    svg {
        flex-shrink: 0;
    }

    &:hover {
        background: ${({theme:e})=>e.colors.primary}22;
        transform: translateX(5px);
    }

    @media (max-height: 700px) {
        padding: 0.75rem 1rem;
        gap: 0.75rem;
        font-size: 0.9rem;

        svg {
            width: 18px;
            height: 18px;
        }
    }

    @media (max-height: 600px) {
        padding: 0.6rem 0.875rem;
        gap: 0.625rem;
        font-size: 0.85rem;

        svg {
            width: 16px;
            height: 16px;
        }
    }
`,tH=[{path:"/aulas",label:"Aulas",icon:c.jsx(Do,{size:20})},{path:"/treinos",label:"Treinos",icon:c.jsx(Dg,{size:20})},{path:"/guilda",label:"Guilda",icon:c.jsx(_o,{size:20})},{path:"/torneio",label:"Torneio",icon:c.jsx(Sl,{size:20})},{path:"/ranking",label:"Ranking",icon:c.jsx(Z$,{size:20})},{path:"/evolucao",label:"Evolução",icon:c.jsx(Rs,{size:20})}],nH=()=>{const[e,t]=w.useState(!1),n=Ni(),i=nf(),{logout:r}=ns(),a=()=>{r(),i("/")},o=()=>{t(!e)},s=()=>{t(!1)};return c.jsxs(c.Fragment,{children:[c.jsx(T2,{onClick:o,children:c.jsx(wz,{size:24})}),c.jsx(IP,{$isOpen:e,onClick:s}),c.jsxs(KP,{$isOpen:e,children:[c.jsxs(XP,{children:[c.jsx(QP,{src:Og,alt:"ForgeFit"}),c.jsx(T2,{onClick:o,className:"close",children:c.jsx(uf,{size:24})})]}),c.jsx(ZP,{children:tH.map(l=>{const u=n.pathname===l.path||n.pathname.startsWith(l.path+"/");return c.jsx(JP,{children:c.jsxs(WP,{to:l.path,$isActive:u,onClick:s,children:[l.icon,c.jsx("span",{children:l.label})]})},l.path)})}),c.jsxs(eH,{onClick:a,children:[c.jsx(gz,{size:20}),c.jsx("span",{children:"Sair"})]})]})]})},iH=C.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({theme:e})=>e.colors.background};
    overflow-x: hidden;
    max-width: 100vw;
    width: 100%;
    position: relative;
    box-sizing: border-box;
`,rH=C.main`
    flex: 1;
    margin-left: 280px;
    min-height: 100vh;
    width: calc(100% - 280px);
    max-width: calc(100vw - 280px);
    overflow-x: hidden;
    box-sizing: border-box;
    position: relative;
    padding: 0;

    @media (max-width: 48rem) {
        margin-left: 0;
        width: 100%;
        max-width: 100vw;
        padding: 0;
    }
`,aH=()=>c.jsxs(iH,{children:[c.jsx(nH,{}),c.jsx(rH,{children:c.jsx(n6,{})})]}),oH=({children:e})=>{const{user:t,loading:n}=ns();return n?c.jsx(eT,{}):t?c.jsx(c.Fragment,{children:e}):c.jsx(CC,{to:"/login",replace:!0})},sH=({children:e})=>{const{user:t,loading:n}=ns();return n?c.jsx(eT,{}):t?c.jsx(CC,{to:"/aulas",replace:!0}):c.jsx(c.Fragment,{children:e})},lH=()=>c.jsx(A6,{children:c.jsxs(r6,{children:[c.jsx(On,{path:"/",element:c.jsx(z9,{})}),c.jsx(On,{path:"/login",element:c.jsx(sH,{children:c.jsx(H9,{})})}),c.jsxs(On,{element:c.jsx(oH,{children:c.jsx(aH,{})}),children:[c.jsx(On,{path:"/aulas",element:c.jsx(TU,{})}),c.jsx(On,{path:"/treinos",element:c.jsx("div",{style:{padding:"2rem",color:"white"},children:"Treinos em construção"})}),c.jsx(On,{path:"/torneio/",element:c.jsx(YP,{})}),c.jsx(On,{path:"/ranking",element:c.jsx(JU,{})}),c.jsx(On,{path:"/evolucao",element:c.jsx(cV,{})}),c.jsx(On,{path:"/guilda",element:c.jsx(EV,{})}),c.jsx(On,{path:"/guilda/:id",element:c.jsx(xP,{})})]})]})}),cH=new a8({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:1,staleTime:5*60*1e3}}});function uH(){return c.jsx(s8,{client:cH,children:c.jsxs($k,{theme:l8,children:[c.jsx(c8,{}),c.jsx(f$,{children:c.jsx(lH,{})})]})})}MA.createRoot(document.getElementById("root")).render(c.jsx(w.StrictMode,{children:c.jsx(uH,{})}));
