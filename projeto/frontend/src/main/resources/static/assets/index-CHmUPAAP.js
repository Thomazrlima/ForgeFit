function Jj(e,n){for(var r=0;r<n.length;r++){const a=n[r];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const c=Object.getOwnPropertyDescriptor(a,s);c&&Object.defineProperty(e,s,c.get?c:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();function Wj(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tm={exports:{}},Rs={};var db;function eE(){if(db)return Rs;db=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(a,s,c){var u=null;if(c!==void 0&&(u=""+c),s.key!==void 0&&(u=""+s.key),"key"in s){c={};for(var f in s)f!=="key"&&(c[f]=s[f])}else c=s;return s=c.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:c}}return Rs.Fragment=n,Rs.jsx=r,Rs.jsxs=r,Rs}var fb;function tE(){return fb||(fb=1,tm.exports=eE()),tm.exports}var h=tE(),nm={exports:{}},ve={};var hb;function nE(){if(hb)return ve;hb=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function C(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,A={};function R(z,V,I){this.props=z,this.context=V,this.refs=A,this.updater=I||w}R.prototype.isReactComponent={},R.prototype.setState=function(z,V){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,V,"setState")},R.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function O(){}O.prototype=R.prototype;function $(z,V,I){this.props=z,this.context=V,this.refs=A,this.updater=I||w}var N=$.prototype=new O;N.constructor=$,S(N,R.prototype),N.isPureReactComponent=!0;var P=Array.isArray;function _(){}var L={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function ie(z,V,I){var oe=I.ref;return{$$typeof:e,type:z,key:V,ref:oe!==void 0?oe:null,props:I}}function se(z,V){return ie(z.type,V,z.props)}function le(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function k(z){var V={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(I){return V[I]})}var ae=/\/+/g;function ne(z,V){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):V.toString(36)}function ce(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(_,_):(z.status="pending",z.then(function(V){z.status==="pending"&&(z.status="fulfilled",z.value=V)},function(V){z.status==="pending"&&(z.status="rejected",z.reason=V)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,V,I,oe,de){var ye=typeof z;(ye==="undefined"||ye==="boolean")&&(z=null);var te=!1;if(z===null)te=!0;else switch(ye){case"bigint":case"string":case"number":te=!0;break;case"object":switch(z.$$typeof){case e:case n:te=!0;break;case y:return te=z._init,B(te(z._payload),V,I,oe,de)}}if(te)return de=de(z),te=oe===""?"."+ne(z,0):oe,P(de)?(I="",te!=null&&(I=te.replace(ae,"$&/")+"/"),B(de,V,I,"",function(Me){return Me})):de!=null&&(le(de)&&(de=se(de,I+(de.key==null||z&&z.key===de.key?"":(""+de.key).replace(ae,"$&/")+"/")+te)),V.push(de)),1;te=0;var ge=oe===""?".":oe+":";if(P(z))for(var fe=0;fe<z.length;fe++)oe=z[fe],ye=ge+ne(oe,fe),te+=B(oe,V,I,ye,de);else if(fe=C(z),typeof fe=="function")for(z=fe.call(z),fe=0;!(oe=z.next()).done;)oe=oe.value,ye=ge+ne(oe,fe++),te+=B(oe,V,I,ye,de);else if(ye==="object"){if(typeof z.then=="function")return B(ce(z),V,I,oe,de);throw V=String(z),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return te}function Z(z,V,I){if(z==null)return z;var oe=[],de=0;return B(z,oe,"","",function(ye){return V.call(I,ye,de++)}),oe}function K(z){if(z._status===-1){var V=z._result;V=V(),V.then(function(I){(z._status===0||z._status===-1)&&(z._status=1,z._result=I)},function(I){(z._status===0||z._status===-1)&&(z._status=2,z._result=I)}),z._status===-1&&(z._status=0,z._result=V)}if(z._status===1)return z._result.default;throw z._result}var re=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},he={map:Z,forEach:function(z,V,I){Z(z,function(){V.apply(this,arguments)},I)},count:function(z){var V=0;return Z(z,function(){V++}),V},toArray:function(z){return Z(z,function(V){return V})||[]},only:function(z){if(!le(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ve.Activity=x,ve.Children=he,ve.Component=R,ve.Fragment=r,ve.Profiler=s,ve.PureComponent=$,ve.StrictMode=a,ve.Suspense=p,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ve.__COMPILER_RUNTIME={__proto__:null,c:function(z){return L.H.useMemoCache(z)}},ve.cache=function(z){return function(){return z.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(z,V,I){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var oe=S({},z.props),de=z.key;if(V!=null)for(ye in V.key!==void 0&&(de=""+V.key),V)!ee.call(V,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&V.ref===void 0||(oe[ye]=V[ye]);var ye=arguments.length-2;if(ye===1)oe.children=I;else if(1<ye){for(var te=Array(ye),ge=0;ge<ye;ge++)te[ge]=arguments[ge+2];oe.children=te}return ie(z.type,de,oe)},ve.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ve.createElement=function(z,V,I){var oe,de={},ye=null;if(V!=null)for(oe in V.key!==void 0&&(ye=""+V.key),V)ee.call(V,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(de[oe]=V[oe]);var te=arguments.length-2;if(te===1)de.children=I;else if(1<te){for(var ge=Array(te),fe=0;fe<te;fe++)ge[fe]=arguments[fe+2];de.children=ge}if(z&&z.defaultProps)for(oe in te=z.defaultProps,te)de[oe]===void 0&&(de[oe]=te[oe]);return ie(z,ye,de)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(z){return{$$typeof:f,render:z}},ve.isValidElement=le,ve.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:K}},ve.memo=function(z,V){return{$$typeof:g,type:z,compare:V===void 0?null:V}},ve.startTransition=function(z){var V=L.T,I={};L.T=I;try{var oe=z(),de=L.S;de!==null&&de(I,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(_,re)}catch(ye){re(ye)}finally{V!==null&&I.types!==null&&(V.types=I.types),L.T=V}},ve.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ve.use=function(z){return L.H.use(z)},ve.useActionState=function(z,V,I){return L.H.useActionState(z,V,I)},ve.useCallback=function(z,V){return L.H.useCallback(z,V)},ve.useContext=function(z){return L.H.useContext(z)},ve.useDebugValue=function(){},ve.useDeferredValue=function(z,V){return L.H.useDeferredValue(z,V)},ve.useEffect=function(z,V){return L.H.useEffect(z,V)},ve.useEffectEvent=function(z){return L.H.useEffectEvent(z)},ve.useId=function(){return L.H.useId()},ve.useImperativeHandle=function(z,V,I){return L.H.useImperativeHandle(z,V,I)},ve.useInsertionEffect=function(z,V){return L.H.useInsertionEffect(z,V)},ve.useLayoutEffect=function(z,V){return L.H.useLayoutEffect(z,V)},ve.useMemo=function(z,V){return L.H.useMemo(z,V)},ve.useOptimistic=function(z,V){return L.H.useOptimistic(z,V)},ve.useReducer=function(z,V,I){return L.H.useReducer(z,V,I)},ve.useRef=function(z){return L.H.useRef(z)},ve.useState=function(z){return L.H.useState(z)},ve.useSyncExternalStore=function(z,V,I){return L.H.useSyncExternalStore(z,V,I)},ve.useTransition=function(){return L.H.useTransition()},ve.version="19.2.0",ve}var mb;function Ip(){return mb||(mb=1,nm.exports=nE()),nm.exports}var j=Ip();const Ln=Wj(j),tp=Jj({__proto__:null,default:Ln},[j]);var im={exports:{}},zs={},rm={exports:{}},am={};var pb;function iE(){return pb||(pb=1,(function(e){function n(B,Z){var K=B.length;B.push(Z);e:for(;0<K;){var re=K-1>>>1,he=B[re];if(0<s(he,Z))B[re]=Z,B[K]=he,K=re;else break e}}function r(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var Z=B[0],K=B.pop();if(K!==Z){B[0]=K;e:for(var re=0,he=B.length,z=he>>>1;re<z;){var V=2*(re+1)-1,I=B[V],oe=V+1,de=B[oe];if(0>s(I,K))oe<he&&0>s(de,I)?(B[re]=de,B[oe]=K,re=oe):(B[re]=I,B[V]=K,re=V);else if(oe<he&&0>s(de,K))B[re]=de,B[oe]=K,re=oe;else break e}}return Z}function s(B,Z){var K=B.sortIndex-Z.sortIndex;return K!==0?K:B.id-Z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],g=[],y=1,x=null,v=3,C=!1,w=!1,S=!1,A=!1,R=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var Z=r(g);Z!==null;){if(Z.callback===null)a(g);else if(Z.startTime<=B)a(g),Z.sortIndex=Z.expirationTime,n(p,Z);else break;Z=r(g)}}function P(B){if(S=!1,N(B),!w)if(r(p)!==null)w=!0,_||(_=!0,k());else{var Z=r(g);Z!==null&&ce(P,Z.startTime-B)}}var _=!1,L=-1,ee=5,ie=-1;function se(){return A?!0:!(e.unstable_now()-ie<ee)}function le(){if(A=!1,_){var B=e.unstable_now();ie=B;var Z=!0;try{e:{w=!1,S&&(S=!1,O(L),L=-1),C=!0;var K=v;try{t:{for(N(B),x=r(p);x!==null&&!(x.expirationTime>B&&se());){var re=x.callback;if(typeof re=="function"){x.callback=null,v=x.priorityLevel;var he=re(x.expirationTime<=B);if(B=e.unstable_now(),typeof he=="function"){x.callback=he,N(B),Z=!0;break t}x===r(p)&&a(p),N(B)}else a(p);x=r(p)}if(x!==null)Z=!0;else{var z=r(g);z!==null&&ce(P,z.startTime-B),Z=!1}}break e}finally{x=null,v=K,C=!1}Z=void 0}}finally{Z?k():_=!1}}}var k;if(typeof $=="function")k=function(){$(le)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ne=ae.port2;ae.port1.onmessage=le,k=function(){ne.postMessage(null)}}else k=function(){R(le,0)};function ce(B,Z){L=R(function(){B(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var K=v;v=Z;try{return B()}finally{v=K}},e.unstable_requestPaint=function(){A=!0},e.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=v;v=B;try{return Z()}finally{v=K}},e.unstable_scheduleCallback=function(B,Z,K){var re=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,B){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=K+he,B={id:y++,callback:Z,priorityLevel:B,startTime:K,expirationTime:he,sortIndex:-1},K>re?(B.sortIndex=K,n(g,B),r(p)===null&&B===r(g)&&(S?(O(L),L=-1):S=!0,ce(P,K-re))):(B.sortIndex=he,n(p,B),w||C||(w=!0,_||(_=!0,k()))),B},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(B){var Z=v;return function(){var K=v;v=Z;try{return B.apply(this,arguments)}finally{v=K}}}})(am)),am}var gb;function rE(){return gb||(gb=1,rm.exports=iE()),rm.exports}var om={exports:{}},Vt={};var yb;function aE(){if(yb)return Vt;yb=1;var e=Ip();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(p,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:x==null?null:""+x,children:p,containerInfo:g,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Vt.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return c(p,g,null,y)},Vt.flushSync=function(p){var g=u.T,y=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=g,a.p=y,a.d.f()}},Vt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Vt.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Vt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,x=f(y,g.crossOrigin),v=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:C}):y==="script"&&a.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Vt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=f(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Vt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=f(y,g.crossOrigin);a.d.L(p,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Vt.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=f(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Vt.requestFormReset=function(p){a.d.r(p)},Vt.unstable_batchedUpdates=function(p,g){return p(g)},Vt.useFormState=function(p,g,y){return u.H.useFormState(p,g,y)},Vt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Vt.version="19.2.0",Vt}var xb;function Pw(){if(xb)return om.exports;xb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),om.exports=aE(),om.exports}var bb;function oE(){if(bb)return zs;bb=1;var e=rE(),n=Ip(),r=Pw();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function g(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),t;if(m===l)return p(d),i;m=m.sibling}throw Error(a(188))}if(o.return!==l.return)o=d,l=m;else{for(var b=!1,T=d.child;T;){if(T===o){b=!0,o=d,l=m;break}if(T===l){b=!0,l=d,o=m;break}T=T.sibling}if(!b){for(T=m.child;T;){if(T===o){b=!0,o=m,l=d;break}if(T===l){b=!0,l=m,o=d;break}T=T.sibling}if(!b)throw Error(a(189))}}if(o.alternate!==l)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),$=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case S:return"Fragment";case R:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case _:return"SuspenseList";case ie:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case $:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return i=t.displayName||null,i!==null?i:ne(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return ne(t(i))}catch{}}return null}var ce=Array.isArray,B=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},re=[],he=-1;function z(t){return{current:t}}function V(t){0>he||(t.current=re[he],re[he]=null,he--)}function I(t,i){he++,re[he]=t.current,t.current=i}var oe=z(null),de=z(null),ye=z(null),te=z(null);function ge(t,i){switch(I(ye,i),I(de,t),I(oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Dx(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Dx(i),t=_x(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(oe),I(oe,t)}function fe(){V(oe),V(de),V(ye)}function Me(t){t.memoizedState!==null&&I(te,t);var i=oe.current,o=_x(i,t.type);i!==o&&(I(de,t),I(oe,o))}function Rt(t){de.current===t&&(V(oe),V(de)),te.current===t&&(V(te),js._currentValue=K)}var Ct,Fn;function qn(t){if(Ct===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);Ct=i&&i[1]||"",Fn=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+Fn}var Oo=!1;function Do(t,i){if(!t||Oo)return"";Oo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(Y){var q=Y}Reflect.construct(t,[],W)}else{try{W.call()}catch(Y){q=Y}t.call(W.prototype)}}else{try{throw Error()}catch(Y){q=Y}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(Y){if(Y&&q&&typeof Y.stack=="string")return[Y.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],T=m[1];if(b&&T){var M=b.split(`
`),F=T.split(`
`);for(d=l=0;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;for(;d<F.length&&!F[d].includes("DetermineComponentFrameRoot");)d++;if(l===M.length||d===F.length)for(l=M.length-1,d=F.length-1;1<=l&&0<=d&&M[l]!==F[d];)d--;for(;1<=l&&0<=d;l--,d--)if(M[l]!==F[d]){if(l!==1||d!==1)do if(l--,d--,0>d||M[l]!==F[d]){var X=`
`+M[l].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=l&&0<=d);break}}}finally{Oo=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?qn(o):""}function Pd(t,i){switch(t.tag){case 26:case 27:case 5:return qn(t.type);case 16:return qn("Lazy");case 13:return t.child!==i&&i!==null?qn("Suspense Fallback"):qn("Suspense");case 19:return qn("SuspenseList");case 0:case 15:return Do(t.type,!1);case 11:return Do(t.type.render,!1);case 1:return Do(t.type,!0);case 31:return qn("Activity");default:return""}}function $l(t){try{var i="",o=null;do i+=Pd(t,o),o=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var _o=Object.prototype.hasOwnProperty,ra=e.unstable_scheduleCallback,Be=e.unstable_cancelCallback,Je=e.unstable_shouldYield,sn=e.unstable_requestPaint,Tt=e.unstable_now,Pi=e.unstable_getCurrentPriorityLevel,fi=e.unstable_ImmediatePriority,wn=e.unstable_UserBlockingPriority,Sn=e.unstable_NormalPriority,Lo=e.unstable_LowPriority,mg=e.unstable_IdlePriority,DT=e.log,_T=e.unstable_setDisableYieldValue,No=null,ln=null;function Hi(t){if(typeof DT=="function"&&_T(t),ln&&typeof ln.setStrictMode=="function")try{ln.setStrictMode(No,t)}catch{}}var cn=Math.clz32?Math.clz32:BT,LT=Math.log,NT=Math.LN2;function BT(t){return t>>>=0,t===0?32:31-(LT(t)/NT|0)|0}var Ol=256,Dl=262144,_l=4194304;function Sr(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ll(t,i,o){var l=t.pendingLanes;if(l===0)return 0;var d=0,m=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~m,l!==0?d=Sr(l):(b&=T,b!==0?d=Sr(b):o||(o=T&~t,o!==0&&(d=Sr(o))))):(T=l&~m,T!==0?d=Sr(T):b!==0?d=Sr(b):o||(o=l&~t,o!==0&&(d=Sr(o)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,o=i&-i,m>=o||m===32&&(o&4194048)!==0)?i:d}function Bo(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function UT(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pg(){var t=_l;return _l<<=1,(_l&62914560)===0&&(_l=4194304),t}function Hd(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Uo(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function VT(t,i,o,l,d,m){var b=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var T=t.entanglements,M=t.expirationTimes,F=t.hiddenUpdates;for(o=b&~o;0<o;){var X=31-cn(o),W=1<<X;T[X]=0,M[X]=-1;var q=F[X];if(q!==null)for(F[X]=null,X=0;X<q.length;X++){var Y=q[X];Y!==null&&(Y.lane&=-536870913)}o&=~W}l!==0&&gg(t,l,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(b&~i))}function gg(t,i,o){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-cn(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|o&261930}function yg(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-cn(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}function xg(t,i){var o=i&-i;return o=(o&42)!==0?1:Fd(o),(o&(t.suspendedLanes|i))!==0?0:o}function Fd(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qd(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bg(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:rb(t.type))}function vg(t,i){var o=Z.p;try{return Z.p=t,i()}finally{Z.p=o}}var Fi=Math.random().toString(36).slice(2),zt="__reactFiber$"+Fi,Xt="__reactProps$"+Fi,aa="__reactContainer$"+Fi,Gd="__reactEvents$"+Fi,PT="__reactListeners$"+Fi,HT="__reactHandles$"+Fi,wg="__reactResources$"+Fi,Vo="__reactMarker$"+Fi;function Yd(t){delete t[zt],delete t[Xt],delete t[Gd],delete t[PT],delete t[HT]}function oa(t){var i=t[zt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[aa]||o[zt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Hx(t);t!==null;){if(o=t[zt])return o;t=Hx(t)}return i}t=o,o=t.parentNode}return null}function sa(t){if(t=t[zt]||t[aa]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Po(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function la(t){var i=t[wg];return i||(i=t[wg]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function jt(t){t[Vo]=!0}var Sg=new Set,Cg={};function Cr(t,i){ca(t,i),ca(t+"Capture",i)}function ca(t,i){for(Cg[t]=i,t=0;t<i.length;t++)Sg.add(i[t])}var FT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tg={},jg={};function qT(t){return _o.call(jg,t)?!0:_o.call(Tg,t)?!1:FT.test(t)?jg[t]=!0:(Tg[t]=!0,!1)}function Nl(t,i,o){if(qT(i))if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+o)}}function Bl(t,i,o){if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+o)}}function hi(t,i,o,l){if(l===null)t.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(i,o,""+l)}}function Cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Eg(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function GT(t,i,o){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){o=""+b,m.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Kd(t){if(!t._valueTracker){var i=Eg(t)?"checked":"value";t._valueTracker=GT(t,i,""+t[i])}}function Ag(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Eg(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var YT=/[\n"\\]/g;function Tn(t){return t.replace(YT,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xd(t,i,o,l,d,m,b,T){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Cn(i)):t.value!==""+Cn(i)&&(t.value=""+Cn(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Qd(t,b,Cn(i)):o!=null?Qd(t,b,Cn(o)):l!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Cn(T):t.removeAttribute("name")}function kg(t,i,o,l,d,m,b,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Kd(t);return}o=o!=null?""+Cn(o):"",i=i!=null?""+Cn(i):o,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Kd(t)}function Qd(t,i,o){i==="number"&&Ul(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function ua(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Cn(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Rg(t,i,o){if(i!=null&&(i=""+Cn(i),i!==t.value&&(t.value=i),o==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=o!=null?""+Cn(o):""}function zg(t,i,o,l){if(i==null){if(l!=null){if(o!=null)throw Error(a(92));if(ce(l)){if(1<l.length)throw Error(a(93));l=l[0]}o=l}o==null&&(o=""),i=o}o=Cn(i),t.defaultValue=o,l=t.textContent,l===o&&l!==""&&l!==null&&(t.value=l),Kd(t)}function da(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var KT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mg(t,i,o){var l=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,o):typeof o!="number"||o===0||KT.has(i)?i==="float"?t.cssFloat=o:t[i]=(""+o).trim():t[i]=o+"px"}function $g(t,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&o[d]!==l&&Mg(t,d,l)}else for(var m in i)i.hasOwnProperty(m)&&Mg(t,m,i[m])}function Id(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var XT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),QT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(t){return QT.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function mi(){}var Zd=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fa=null,ha=null;function Og(t){var i=sa(t);if(i&&(t=i.stateNode)){var o=t[Xt]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xd(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Tn(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=l[Xt]||null;if(!d)throw Error(a(90));Xd(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<o.length;i++)l=o[i],l.form===t.form&&Ag(l)}break e;case"textarea":Rg(t,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&ua(t,!!o.multiple,i,!1)}}}var Wd=!1;function Dg(t,i,o){if(Wd)return t(i,o);Wd=!0;try{var l=t(i);return l}finally{if(Wd=!1,(fa!==null||ha!==null)&&(Ac(),fa&&(i=fa,t=ha,ha=fa=null,Og(i),t)))for(i=0;i<t.length;i++)Og(t[i])}}function Ho(t,i){var o=t.stateNode;if(o===null)return null;var l=o[Xt]||null;if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=!1;if(pi)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){ef=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{ef=!1}var qi=null,tf=null,Pl=null;function _g(){if(Pl)return Pl;var t,i=tf,o=i.length,l,d="value"in qi?qi.value:qi.textContent,m=d.length;for(t=0;t<o&&i[t]===d[t];t++);var b=o-t;for(l=1;l<=b&&i[o-l]===d[m-l];l++);return Pl=d.slice(t,1<l?1-l:void 0)}function Hl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function Lg(){return!1}function Qt(t){function i(o,l,d,m,b){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(o=t[T],this[T]=o?o(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fl:Lg,this.isPropagationStopped=Lg,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),i}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Qt(Tr),qo=x({},Tr,{view:0,detail:0}),IT=Qt(qo),nf,rf,Go,Gl=x({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Go&&(Go&&t.type==="mousemove"?(nf=t.screenX-Go.screenX,rf=t.screenY-Go.screenY):rf=nf=0,Go=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),Ng=Qt(Gl),ZT=x({},Gl,{dataTransfer:0}),JT=Qt(ZT),WT=x({},qo,{relatedTarget:0}),af=Qt(WT),e3=x({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),t3=Qt(e3),n3=x({},Tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i3=Qt(n3),r3=x({},Tr,{data:0}),Bg=Qt(r3),a3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l3(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=s3[t])?!!i[t]:!1}function of(){return l3}var c3=x({},qo,{key:function(t){if(t.key){var i=a3[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u3=Qt(c3),d3=x({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ug=Qt(d3),f3=x({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),h3=Qt(f3),m3=x({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),p3=Qt(m3),g3=x({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y3=Qt(g3),x3=x({},Tr,{newState:0,oldState:0}),b3=Qt(x3),v3=[9,13,27,32],sf=pi&&"CompositionEvent"in window,Yo=null;pi&&"documentMode"in document&&(Yo=document.documentMode);var w3=pi&&"TextEvent"in window&&!Yo,Vg=pi&&(!sf||Yo&&8<Yo&&11>=Yo),Pg=" ",Hg=!1;function Fg(t,i){switch(t){case"keyup":return v3.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ma=!1;function S3(t,i){switch(t){case"compositionend":return qg(i);case"keypress":return i.which!==32?null:(Hg=!0,Pg);case"textInput":return t=i.data,t===Pg&&Hg?null:t;default:return null}}function C3(t,i){if(ma)return t==="compositionend"||!sf&&Fg(t,i)?(t=_g(),Pl=tf=qi=null,ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vg&&i.locale!=="ko"?null:i.data;default:return null}}var T3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!T3[t.type]:i==="textarea"}function Yg(t,i,o,l){fa?ha?ha.push(l):ha=[l]:fa=l,i=Dc(i,"onChange"),0<i.length&&(o=new ql("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var Ko=null,Xo=null;function j3(t){kx(t,0)}function Yl(t){var i=Po(t);if(Ag(i))return t}function Kg(t,i){if(t==="change")return i}var Xg=!1;if(pi){var lf;if(pi){var cf="oninput"in document;if(!cf){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),cf=typeof Qg.oninput=="function"}lf=cf}else lf=!1;Xg=lf&&(!document.documentMode||9<document.documentMode)}function Ig(){Ko&&(Ko.detachEvent("onpropertychange",Zg),Xo=Ko=null)}function Zg(t){if(t.propertyName==="value"&&Yl(Xo)){var i=[];Yg(i,Xo,t,Jd(t)),Dg(j3,i)}}function E3(t,i,o){t==="focusin"?(Ig(),Ko=i,Xo=o,Ko.attachEvent("onpropertychange",Zg)):t==="focusout"&&Ig()}function A3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Xo)}function k3(t,i){if(t==="click")return Yl(i)}function R3(t,i){if(t==="input"||t==="change")return Yl(i)}function z3(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var un=typeof Object.is=="function"?Object.is:z3;function Qo(t,i){if(un(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!_o.call(i,d)||!un(t[d],i[d]))return!1}return!0}function Jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wg(t,i){var o=Jg(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Jg(o)}}function ey(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ey(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ty(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Ul(t.document);i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ul(t.document)}return i}function uf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var M3=pi&&"documentMode"in document&&11>=document.documentMode,pa=null,df=null,Io=null,ff=!1;function ny(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ff||pa==null||pa!==Ul(l)||(l=pa,"selectionStart"in l&&uf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Io&&Qo(Io,l)||(Io=l,l=Dc(df,"onSelect"),0<l.length&&(i=new ql("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=pa)))}function jr(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ga={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionrun:jr("Transition","TransitionRun"),transitionstart:jr("Transition","TransitionStart"),transitioncancel:jr("Transition","TransitionCancel"),transitionend:jr("Transition","TransitionEnd")},hf={},iy={};pi&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function Er(t){if(hf[t])return hf[t];if(!ga[t])return t;var i=ga[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in iy)return hf[t]=i[o];return t}var ry=Er("animationend"),ay=Er("animationiteration"),oy=Er("animationstart"),$3=Er("transitionrun"),O3=Er("transitionstart"),D3=Er("transitioncancel"),sy=Er("transitionend"),ly=new Map,mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mf.push("scrollEnd");function Gn(t,i){ly.set(t,i),Cr(i,[t])}var Kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},jn=[],ya=0,pf=0;function Xl(){for(var t=ya,i=pf=ya=0;i<t;){var o=jn[i];jn[i++]=null;var l=jn[i];jn[i++]=null;var d=jn[i];jn[i++]=null;var m=jn[i];if(jn[i++]=null,l!==null&&d!==null){var b=l.pending;b===null?d.next=d:(d.next=b.next,b.next=d),l.pending=d}m!==0&&cy(o,d,m)}}function Ql(t,i,o,l){jn[ya++]=t,jn[ya++]=i,jn[ya++]=o,jn[ya++]=l,pf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function gf(t,i,o,l){return Ql(t,i,o,l),Il(t)}function Ar(t,i){return Ql(t,null,null,i),Il(t)}function cy(t,i,o){t.lanes|=o;var l=t.alternate;l!==null&&(l.lanes|=o);for(var d=!1,m=t.return;m!==null;)m.childLanes|=o,l=m.alternate,l!==null&&(l.childLanes|=o),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&i!==null&&(d=31-cn(o),t=m.hiddenUpdates,l=t[d],l===null?t[d]=[i]:l.push(i),i.lane=o|536870912),m):null}function Il(t){if(50<xs)throw xs=0,jh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var xa={};function _3(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,i,o,l){return new _3(t,i,o,l)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gi(t,i){var o=t.alternate;return o===null?(o=dn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function uy(t,i){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,i=o.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zl(t,i,o,l,d,m){var b=0;if(l=t,typeof t=="function")yf(t)&&(b=1);else if(typeof t=="string")b=Vj(t,o,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ie:return t=dn(31,o,i,d),t.elementType=ie,t.lanes=m,t;case S:return kr(o.children,d,m,i);case A:b=8,d|=24;break;case R:return t=dn(12,o,i,d|2),t.elementType=R,t.lanes=m,t;case P:return t=dn(13,o,i,d),t.elementType=P,t.lanes=m,t;case _:return t=dn(19,o,i,d),t.elementType=_,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $:b=10;break e;case O:b=9;break e;case N:b=11;break e;case L:b=14;break e;case ee:b=16,l=null;break e}b=29,o=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=dn(b,o,i,d),i.elementType=t,i.type=l,i.lanes=m,i}function kr(t,i,o,l){return t=dn(7,t,l,i),t.lanes=o,t}function xf(t,i,o){return t=dn(6,t,null,i),t.lanes=o,t}function dy(t){var i=dn(18,null,null,0);return i.stateNode=t,i}function bf(t,i,o){return i=dn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var fy=new WeakMap;function En(t,i){if(typeof t=="object"&&t!==null){var o=fy.get(t);return o!==void 0?o:(i={value:t,source:i,stack:$l(i)},fy.set(t,i),i)}return{value:t,source:i,stack:$l(i)}}var ba=[],va=0,Jl=null,Zo=0,An=[],kn=0,Gi=null,ei=1,ti="";function yi(t,i){ba[va++]=Zo,ba[va++]=Jl,Jl=t,Zo=i}function hy(t,i,o){An[kn++]=ei,An[kn++]=ti,An[kn++]=Gi,Gi=t;var l=ei;t=ti;var d=32-cn(l)-1;l&=~(1<<d),o+=1;var m=32-cn(i)+d;if(30<m){var b=d-d%5;m=(l&(1<<b)-1).toString(32),l>>=b,d-=b,ei=1<<32-cn(i)+d|o<<d|l,ti=m+t}else ei=1<<m|o<<d|l,ti=t}function vf(t){t.return!==null&&(yi(t,1),hy(t,1,0))}function wf(t){for(;t===Jl;)Jl=ba[--va],ba[va]=null,Zo=ba[--va],ba[va]=null;for(;t===Gi;)Gi=An[--kn],An[kn]=null,ti=An[--kn],An[kn]=null,ei=An[--kn],An[kn]=null}function my(t,i){An[kn++]=ei,An[kn++]=ti,An[kn++]=Gi,ei=i.id,ti=i.overflow,Gi=t}var Mt=null,Qe=null,$e=!1,Yi=null,Rn=!1,Sf=Error(a(519));function Ki(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(En(i,t)),Sf}function py(t){var i=t.stateNode,o=t.type,l=t.memoizedProps;switch(i[zt]=t,i[Xt]=l,o){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(o=0;o<vs.length;o++)Ee(vs[o],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),kg(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),zg(i,l.value,l.defaultValue,l.children)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||l.suppressHydrationWarning===!0||$x(i.textContent,o)?(l.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),l.onScroll!=null&&Ee("scroll",i),l.onScrollEnd!=null&&Ee("scrollend",i),l.onClick!=null&&(i.onclick=mi),i=!0):i=!1,i||Ki(t,!0)}function gy(t){for(Mt=t.return;Mt;)switch(Mt.tag){case 5:case 31:case 13:Rn=!1;return;case 27:case 3:Rn=!0;return;default:Mt=Mt.return}}function wa(t){if(t!==Mt)return!1;if(!$e)return gy(t),$e=!0,!1;var i=t.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||Vh(t.type,t.memoizedProps)),o=!o),o&&Qe&&Ki(t),gy(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Qe=Px(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Qe=Px(t)}else i===27?(i=Qe,sr(t.type)?(t=Gh,Gh=null,Qe=t):Qe=i):Qe=Mt?Mn(t.stateNode.nextSibling):null;return!0}function Rr(){Qe=Mt=null,$e=!1}function Cf(){var t=Yi;return t!==null&&(Wt===null?Wt=t:Wt.push.apply(Wt,t),Yi=null),t}function Jo(t){Yi===null?Yi=[t]:Yi.push(t)}var Tf=z(null),zr=null,xi=null;function Xi(t,i,o){I(Tf,i._currentValue),i._currentValue=o}function bi(t){t._currentValue=Tf.current,V(Tf)}function jf(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Ef(t,i,o,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=d;for(var M=0;M<i.length;M++)if(T.context===i[M]){m.lanes|=o,T=m.alternate,T!==null&&(T.lanes|=o),jf(m.return,o,t),l||(b=null);break e}m=T.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(a(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),jf(b,o,t),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===t){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function Sa(t,i,o,l){t=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var T=d.type;un(d.pendingProps.value,b.value)||(t!==null?t.push(T):t=[T])}}else if(d===te.current){if(b=d.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(js):t=[js])}d=d.return}t!==null&&Ef(i,t,o,l),i.flags|=262144}function Wl(t){for(t=t.firstContext;t!==null;){if(!un(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Mr(t){zr=t,xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $t(t){return yy(zr,t)}function ec(t,i){return zr===null&&Mr(t),yy(t,i)}function yy(t,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},xi===null){if(t===null)throw Error(a(308));xi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else xi=xi.next=i;return o}var L3=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(o,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(o){return o()})}},N3=e.unstable_scheduleCallback,B3=e.unstable_NormalPriority,pt={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Af(){return{controller:new L3,data:new Map,refCount:0}}function Wo(t){t.refCount--,t.refCount===0&&N3(B3,function(){t.controller.abort()})}var es=null,kf=0,Ca=0,Ta=null;function U3(t,i){if(es===null){var o=es=[];kf=0,Ca=Mh(),Ta={status:"pending",value:void 0,then:function(l){o.push(l)}}}return kf++,i.then(xy,xy),i}function xy(){if(--kf===0&&es!==null){Ta!==null&&(Ta.status="fulfilled");var t=es;es=null,Ca=0,Ta=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function V3(t,i){var o=[],l={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<o.length;d++)(0,o[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),l}var by=B.S;B.S=function(t,i){nx=Tt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&U3(t,i),by!==null&&by(t,i)};var $r=z(null);function Rf(){var t=$r.current;return t!==null?t:Xe.pooledCache}function tc(t,i){i===null?I($r,$r.current):I($r,i.pool)}function vy(){var t=Rf();return t===null?null:{parent:pt._currentValue,pool:t}}var ja=Error(a(460)),zf=Error(a(474)),nc=Error(a(542)),ic={then:function(){}};function wy(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sy(t,i,o){switch(o=t[o],o===void 0?t.push(i):o!==i&&(i.then(mi,mi),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ty(t),t;default:if(typeof i.status=="string")i.then(mi,mi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ty(t),t}throw Dr=i,ja}}function Or(t){try{var i=t._init;return i(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Dr=o,ja):o}}var Dr=null;function Cy(){if(Dr===null)throw Error(a(459));var t=Dr;return Dr=null,t}function Ty(t){if(t===ja||t===nc)throw Error(a(483))}var Ea=null,ts=0;function rc(t){var i=ts;return ts+=1,Ea===null&&(Ea=[]),Sy(Ea,t,i)}function ns(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ac(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function jy(t){function i(U,D){if(t){var H=U.deletions;H===null?(U.deletions=[D],U.flags|=16):H.push(D)}}function o(U,D){if(!t)return null;for(;D!==null;)i(U,D),D=D.sibling;return null}function l(U){for(var D=new Map;U!==null;)U.key!==null?D.set(U.key,U):D.set(U.index,U),U=U.sibling;return D}function d(U,D){return U=gi(U,D),U.index=0,U.sibling=null,U}function m(U,D,H){return U.index=H,t?(H=U.alternate,H!==null?(H=H.index,H<D?(U.flags|=67108866,D):H):(U.flags|=67108866,D)):(U.flags|=1048576,D)}function b(U){return t&&U.alternate===null&&(U.flags|=67108866),U}function T(U,D,H,J){return D===null||D.tag!==6?(D=xf(H,U.mode,J),D.return=U,D):(D=d(D,H),D.return=U,D)}function M(U,D,H,J){var pe=H.type;return pe===S?X(U,D,H.props.children,J,H.key):D!==null&&(D.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ee&&Or(pe)===D.type)?(D=d(D,H.props),ns(D,H),D.return=U,D):(D=Zl(H.type,H.key,H.props,null,U.mode,J),ns(D,H),D.return=U,D)}function F(U,D,H,J){return D===null||D.tag!==4||D.stateNode.containerInfo!==H.containerInfo||D.stateNode.implementation!==H.implementation?(D=bf(H,U.mode,J),D.return=U,D):(D=d(D,H.children||[]),D.return=U,D)}function X(U,D,H,J,pe){return D===null||D.tag!==7?(D=kr(H,U.mode,J,pe),D.return=U,D):(D=d(D,H),D.return=U,D)}function W(U,D,H){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=xf(""+D,U.mode,H),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case C:return H=Zl(D.type,D.key,D.props,null,U.mode,H),ns(H,D),H.return=U,H;case w:return D=bf(D,U.mode,H),D.return=U,D;case ee:return D=Or(D),W(U,D,H)}if(ce(D)||k(D))return D=kr(D,U.mode,H,null),D.return=U,D;if(typeof D.then=="function")return W(U,rc(D),H);if(D.$$typeof===$)return W(U,ec(U,D),H);ac(U,D)}return null}function q(U,D,H,J){var pe=D!==null?D.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return pe!==null?null:T(U,D,""+H,J);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case C:return H.key===pe?M(U,D,H,J):null;case w:return H.key===pe?F(U,D,H,J):null;case ee:return H=Or(H),q(U,D,H,J)}if(ce(H)||k(H))return pe!==null?null:X(U,D,H,J,null);if(typeof H.then=="function")return q(U,D,rc(H),J);if(H.$$typeof===$)return q(U,D,ec(U,H),J);ac(U,H)}return null}function Y(U,D,H,J,pe){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return U=U.get(H)||null,T(D,U,""+J,pe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case C:return U=U.get(J.key===null?H:J.key)||null,M(D,U,J,pe);case w:return U=U.get(J.key===null?H:J.key)||null,F(D,U,J,pe);case ee:return J=Or(J),Y(U,D,H,J,pe)}if(ce(J)||k(J))return U=U.get(H)||null,X(D,U,J,pe,null);if(typeof J.then=="function")return Y(U,D,H,rc(J),pe);if(J.$$typeof===$)return Y(U,D,H,ec(D,J),pe);ac(D,J)}return null}function ue(U,D,H,J){for(var pe=null,Oe=null,me=D,Ce=D=0,Re=null;me!==null&&Ce<H.length;Ce++){me.index>Ce?(Re=me,me=null):Re=me.sibling;var De=q(U,me,H[Ce],J);if(De===null){me===null&&(me=Re);break}t&&me&&De.alternate===null&&i(U,me),D=m(De,D,Ce),Oe===null?pe=De:Oe.sibling=De,Oe=De,me=Re}if(Ce===H.length)return o(U,me),$e&&yi(U,Ce),pe;if(me===null){for(;Ce<H.length;Ce++)me=W(U,H[Ce],J),me!==null&&(D=m(me,D,Ce),Oe===null?pe=me:Oe.sibling=me,Oe=me);return $e&&yi(U,Ce),pe}for(me=l(me);Ce<H.length;Ce++)Re=Y(me,U,Ce,H[Ce],J),Re!==null&&(t&&Re.alternate!==null&&me.delete(Re.key===null?Ce:Re.key),D=m(Re,D,Ce),Oe===null?pe=Re:Oe.sibling=Re,Oe=Re);return t&&me.forEach(function(fr){return i(U,fr)}),$e&&yi(U,Ce),pe}function xe(U,D,H,J){if(H==null)throw Error(a(151));for(var pe=null,Oe=null,me=D,Ce=D=0,Re=null,De=H.next();me!==null&&!De.done;Ce++,De=H.next()){me.index>Ce?(Re=me,me=null):Re=me.sibling;var fr=q(U,me,De.value,J);if(fr===null){me===null&&(me=Re);break}t&&me&&fr.alternate===null&&i(U,me),D=m(fr,D,Ce),Oe===null?pe=fr:Oe.sibling=fr,Oe=fr,me=Re}if(De.done)return o(U,me),$e&&yi(U,Ce),pe;if(me===null){for(;!De.done;Ce++,De=H.next())De=W(U,De.value,J),De!==null&&(D=m(De,D,Ce),Oe===null?pe=De:Oe.sibling=De,Oe=De);return $e&&yi(U,Ce),pe}for(me=l(me);!De.done;Ce++,De=H.next())De=Y(me,U,Ce,De.value,J),De!==null&&(t&&De.alternate!==null&&me.delete(De.key===null?Ce:De.key),D=m(De,D,Ce),Oe===null?pe=De:Oe.sibling=De,Oe=De);return t&&me.forEach(function(Zj){return i(U,Zj)}),$e&&yi(U,Ce),pe}function Ye(U,D,H,J){if(typeof H=="object"&&H!==null&&H.type===S&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case C:e:{for(var pe=H.key;D!==null;){if(D.key===pe){if(pe=H.type,pe===S){if(D.tag===7){o(U,D.sibling),J=d(D,H.props.children),J.return=U,U=J;break e}}else if(D.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ee&&Or(pe)===D.type){o(U,D.sibling),J=d(D,H.props),ns(J,H),J.return=U,U=J;break e}o(U,D);break}else i(U,D);D=D.sibling}H.type===S?(J=kr(H.props.children,U.mode,J,H.key),J.return=U,U=J):(J=Zl(H.type,H.key,H.props,null,U.mode,J),ns(J,H),J.return=U,U=J)}return b(U);case w:e:{for(pe=H.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===H.containerInfo&&D.stateNode.implementation===H.implementation){o(U,D.sibling),J=d(D,H.children||[]),J.return=U,U=J;break e}else{o(U,D);break}else i(U,D);D=D.sibling}J=bf(H,U.mode,J),J.return=U,U=J}return b(U);case ee:return H=Or(H),Ye(U,D,H,J)}if(ce(H))return ue(U,D,H,J);if(k(H)){if(pe=k(H),typeof pe!="function")throw Error(a(150));return H=pe.call(H),xe(U,D,H,J)}if(typeof H.then=="function")return Ye(U,D,rc(H),J);if(H.$$typeof===$)return Ye(U,D,ec(U,H),J);ac(U,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,D!==null&&D.tag===6?(o(U,D.sibling),J=d(D,H),J.return=U,U=J):(o(U,D),J=xf(H,U.mode,J),J.return=U,U=J),b(U)):o(U,D)}return function(U,D,H,J){try{ts=0;var pe=Ye(U,D,H,J);return Ea=null,pe}catch(me){if(me===ja||me===nc)throw me;var Oe=dn(29,me,null,U.mode);return Oe.lanes=J,Oe.return=U,Oe}finally{}}}var _r=jy(!0),Ey=jy(!1),Qi=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $f(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ii(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Zi(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_e&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=Il(t),cy(t,null,o),i}return Ql(t,l,i,o),Il(t)}function is(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,yg(t,o)}}function Of(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}var Df=!1;function rs(){if(Df){var t=Ta;if(t!==null)throw t}}function as(t,i,o,l){Df=!1;var d=t.updateQueue;Qi=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var M=T,F=M.next;M.next=null,b===null?m=F:b.next=F,b=M;var X=t.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==b&&(T===null?X.firstBaseUpdate=F:T.next=F,X.lastBaseUpdate=M))}if(m!==null){var W=d.baseState;b=0,X=F=M=null,T=m;do{var q=T.lane&-536870913,Y=q!==T.lane;if(Y?(ke&q)===q:(l&q)===q){q!==0&&q===Ca&&(Df=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ue=t,xe=T;q=i;var Ye=o;switch(xe.tag){case 1:if(ue=xe.payload,typeof ue=="function"){W=ue.call(Ye,W,q);break e}W=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=xe.payload,q=typeof ue=="function"?ue.call(Ye,W,q):ue,q==null)break e;W=x({},W,q);break e;case 2:Qi=!0}}q=T.callback,q!==null&&(t.flags|=64,Y&&(t.flags|=8192),Y=d.callbacks,Y===null?d.callbacks=[q]:Y.push(q))}else Y={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(F=X=Y,M=W):X=X.next=Y,b|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;Y=T,T=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);X===null&&(M=W),d.baseState=M,d.firstBaseUpdate=F,d.lastBaseUpdate=X,m===null&&(d.shared.lanes=0),nr|=b,t.lanes=b,t.memoizedState=W}}function Ay(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function ky(t,i){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)Ay(o[t],i)}var Aa=z(null),oc=z(0);function Ry(t,i){t=ki,I(oc,t),I(Aa,i),ki=t|i.baseLanes}function _f(){I(oc,ki),I(Aa,Aa.current)}function Lf(){ki=oc.current,V(Aa),V(oc)}var fn=z(null),zn=null;function Ji(t){var i=t.alternate;I(ut,ut.current&1),I(fn,t),zn===null&&(i===null||Aa.current!==null||i.memoizedState!==null)&&(zn=t)}function Nf(t){I(ut,ut.current),I(fn,t),zn===null&&(zn=t)}function zy(t){t.tag===22?(I(ut,ut.current),I(fn,t),zn===null&&(zn=t)):Wi()}function Wi(){I(ut,ut.current),I(fn,fn.current)}function hn(t){V(fn),zn===t&&(zn=null),V(ut)}var ut=z(0);function sc(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Fh(o)||qh(o)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var vi=0,we=null,qe=null,gt=null,lc=!1,ka=!1,Lr=!1,cc=0,os=0,Ra=null,P3=0;function rt(){throw Error(a(321))}function Bf(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!un(t[o],i[o]))return!1;return!0}function Uf(t,i,o,l,d,m){return vi=m,we=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?h1:eh,Lr=!1,m=o(l,d),Lr=!1,ka&&(m=$y(i,o,l,d)),My(t),m}function My(t){B.H=cs;var i=qe!==null&&qe.next!==null;if(vi=0,gt=qe=we=null,lc=!1,os=0,Ra=null,i)throw Error(a(300));t===null||yt||(t=t.dependencies,t!==null&&Wl(t)&&(yt=!0))}function $y(t,i,o,l){we=t;var d=0;do{if(ka&&(Ra=null),os=0,ka=!1,25<=d)throw Error(a(301));if(d+=1,gt=qe=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=m1,m=i(o,l)}while(ka);return m}function H3(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?ss(i):i,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(we.flags|=1024),i}function Vf(){var t=cc!==0;return cc=0,t}function Pf(t,i,o){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~o}function Hf(t){if(lc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}lc=!1}vi=0,gt=qe=we=null,ka=!1,os=cc=0,Ra=null}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?we.memoizedState=gt=t:gt=gt.next=t,gt}function dt(){if(qe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var i=gt===null?we.memoizedState:gt.next;if(i!==null)gt=i,qe=t;else{if(t===null)throw we.alternate===null?Error(a(467)):Error(a(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},gt===null?we.memoizedState=gt=t:gt=gt.next=t}return gt}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ss(t){var i=os;return os+=1,Ra===null&&(Ra=[]),t=Sy(Ra,t,i),i=we,(gt===null?i.memoizedState:gt.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?h1:eh),t}function dc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ss(t);if(t.$$typeof===$)return $t(t)}throw Error(a(438,String(t)))}function Ff(t){var i=null,o=we.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=uc(),we.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(t),l=0;l<t;l++)o[l]=se;return i.index++,o}function wi(t,i){return typeof i=="function"?i(t):i}function fc(t){var i=dt();return qf(i,qe,t)}function qf(t,i,o){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=o;var d=t.baseQueue,m=l.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}i.baseQueue=d=m,l.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{i=d.next;var T=b=null,M=null,F=i,X=!1;do{var W=F.lane&-536870913;if(W!==F.lane?(ke&W)===W:(vi&W)===W){var q=F.revertLane;if(q===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),W===Ca&&(X=!0);else if((vi&q)===q){F=F.next,q===Ca&&(X=!0);continue}else W={lane:0,revertLane:F.revertLane,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},M===null?(T=M=W,b=m):M=M.next=W,we.lanes|=q,nr|=q;W=F.action,Lr&&o(m,W),m=F.hasEagerState?F.eagerState:o(m,W)}else q={lane:W,revertLane:F.revertLane,gesture:F.gesture,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},M===null?(T=M=q,b=m):M=M.next=q,we.lanes|=W,nr|=W;F=F.next}while(F!==null&&F!==i);if(M===null?b=m:M.next=T,!un(m,t.memoizedState)&&(yt=!0,X&&(o=Ta,o!==null)))throw o;t.memoizedState=m,t.baseState=b,t.baseQueue=M,l.lastRenderedState=m}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Gf(t){var i=dt(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var b=d=d.next;do m=t(m,b.action),b=b.next;while(b!==d);un(m,i.memoizedState)||(yt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,l]}function Oy(t,i,o){var l=we,d=dt(),m=$e;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=i();var b=!un((qe||d).memoizedState,o);if(b&&(d.memoizedState=o,yt=!0),d=d.queue,Xf(Ly.bind(null,l,d,t),[t]),d.getSnapshot!==i||b||gt!==null&&gt.memoizedState.tag&1){if(l.flags|=2048,za(9,{destroy:void 0},_y.bind(null,l,d,o,i),null),Xe===null)throw Error(a(349));m||(vi&127)!==0||Dy(l,i,o)}return o}function Dy(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=we.updateQueue,i===null?(i=uc(),we.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function _y(t,i,o,l){i.value=o,i.getSnapshot=l,Ny(i)&&By(t)}function Ly(t,i,o){return o(function(){Ny(i)&&By(t)})}function Ny(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!un(t,o)}catch{return!0}}function By(t){var i=Ar(t,2);i!==null&&en(i,t,2)}function Yf(t){var i=qt();if(typeof t=="function"){var o=t;if(t=o(),Lr){Hi(!0);try{o()}finally{Hi(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:t},i}function Uy(t,i,o,l){return t.baseState=o,qf(t,qe,typeof l=="function"?l:wi)}function F3(t,i,o,l,d){if(pc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};B.T!==null?o(!0):m.isTransition=!1,l(m),o=i.pending,o===null?(m.next=i.pending=m,Vy(i,m)):(m.next=o.next,i.pending=o.next=m)}}function Vy(t,i){var o=i.action,l=i.payload,d=t.state;if(i.isTransition){var m=B.T,b={};B.T=b;try{var T=o(d,l),M=B.S;M!==null&&M(b,T),Py(t,i,T)}catch(F){Kf(t,i,F)}finally{m!==null&&b.types!==null&&(m.types=b.types),B.T=m}}else try{m=o(d,l),Py(t,i,m)}catch(F){Kf(t,i,F)}}function Py(t,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){Hy(t,i,l)},function(l){return Kf(t,i,l)}):Hy(t,i,o)}function Hy(t,i,o){i.status="fulfilled",i.value=o,Fy(i),t.state=o,i=t.pending,i!==null&&(o=i.next,o===i?t.pending=null:(o=o.next,i.next=o,Vy(t,o)))}function Kf(t,i,o){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=o,Fy(i),i=i.next;while(i!==l)}t.action=null}function Fy(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function qy(t,i){return i}function Gy(t,i){if($e){var o=Xe.formState;if(o!==null){e:{var l=we;if($e){if(Qe){t:{for(var d=Qe,m=Rn;d.nodeType!==8;){if(!m){d=null;break t}if(d=Mn(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Qe=Mn(d.nextSibling),l=d.data==="F!";break e}}Ki(l)}l=!1}l&&(i=o[0])}}return o=qt(),o.memoizedState=o.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qy,lastRenderedState:i},o.queue=l,o=u1.bind(null,we,l),l.dispatch=o,l=Yf(!1),m=Wf.bind(null,we,!1,l.queue),l=qt(),d={state:i,dispatch:null,action:t,pending:null},l.queue=d,o=F3.bind(null,we,d,m,o),d.dispatch=o,l.memoizedState=t,[i,o,!1]}function Yy(t){var i=dt();return Ky(i,qe,t)}function Ky(t,i,o){if(i=qf(t,i,qy)[0],t=fc(wi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ss(i)}catch(b){throw b===ja?nc:b}else l=i;i=dt();var d=i.queue,m=d.dispatch;return o!==i.memoizedState&&(we.flags|=2048,za(9,{destroy:void 0},q3.bind(null,d,o),null)),[l,m,t]}function q3(t,i){t.action=i}function Xy(t){var i=dt(),o=qe;if(o!==null)return Ky(i,o,t);dt(),i=i.memoizedState,o=dt();var l=o.queue.dispatch;return o.memoizedState=t,[i,l,!1]}function za(t,i,o,l){return t={tag:t,create:o,deps:l,inst:i,next:null},i=we.updateQueue,i===null&&(i=uc(),we.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t),t}function Qy(){return dt().memoizedState}function hc(t,i,o,l){var d=qt();we.flags|=t,d.memoizedState=za(1|i,{destroy:void 0},o,l===void 0?null:l)}function mc(t,i,o,l){var d=dt();l=l===void 0?null:l;var m=d.memoizedState.inst;qe!==null&&l!==null&&Bf(l,qe.memoizedState.deps)?d.memoizedState=za(i,m,o,l):(we.flags|=t,d.memoizedState=za(1|i,m,o,l))}function Iy(t,i){hc(8390656,8,t,i)}function Xf(t,i){mc(2048,8,t,i)}function G3(t){we.flags|=4;var i=we.updateQueue;if(i===null)i=uc(),we.updateQueue=i,i.events=[t];else{var o=i.events;o===null?i.events=[t]:o.push(t)}}function Zy(t){var i=dt().memoizedState;return G3({ref:i,nextImpl:t}),function(){if((_e&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Jy(t,i){return mc(4,2,t,i)}function Wy(t,i){return mc(4,4,t,i)}function e1(t,i){if(typeof i=="function"){t=t();var o=i(t);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function t1(t,i,o){o=o!=null?o.concat([t]):null,mc(4,4,e1.bind(null,i,t),o)}function Qf(){}function n1(t,i){var o=dt();i=i===void 0?null:i;var l=o.memoizedState;return i!==null&&Bf(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function i1(t,i){var o=dt();i=i===void 0?null:i;var l=o.memoizedState;if(i!==null&&Bf(i,l[1]))return l[0];if(l=t(),Lr){Hi(!0);try{t()}finally{Hi(!1)}}return o.memoizedState=[l,i],l}function If(t,i,o){return o===void 0||(vi&1073741824)!==0&&(ke&261930)===0?t.memoizedState=i:(t.memoizedState=o,t=rx(),we.lanes|=t,nr|=t,o)}function r1(t,i,o,l){return un(o,i)?o:Aa.current!==null?(t=If(t,o,l),un(t,i)||(yt=!0),t):(vi&42)===0||(vi&1073741824)!==0&&(ke&261930)===0?(yt=!0,t.memoizedState=o):(t=rx(),we.lanes|=t,nr|=t,i)}function a1(t,i,o,l,d){var m=Z.p;Z.p=m!==0&&8>m?m:8;var b=B.T,T={};B.T=T,Wf(t,!1,i,o);try{var M=d(),F=B.S;if(F!==null&&F(T,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var X=V3(M,l);ls(t,i,X,gn(t))}else ls(t,i,l,gn(t))}catch(W){ls(t,i,{then:function(){},status:"rejected",reason:W},gn())}finally{Z.p=m,b!==null&&T.types!==null&&(b.types=T.types),B.T=b}}function Y3(){}function Zf(t,i,o,l){if(t.tag!==5)throw Error(a(476));var d=o1(t).queue;a1(t,d,i,K,o===null?Y3:function(){return s1(t),o(l)})}function o1(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:K},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:o},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function s1(t){var i=o1(t);i.next===null&&(i=t.alternate.memoizedState),ls(t,i.next.queue,{},gn())}function Jf(){return $t(js)}function l1(){return dt().memoizedState}function c1(){return dt().memoizedState}function K3(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var o=gn();t=Ii(o);var l=Zi(i,t,o);l!==null&&(en(l,i,o),is(l,i,o)),i={cache:Af()},t.payload=i;return}i=i.return}}function X3(t,i,o){var l=gn();o={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},pc(t)?d1(i,o):(o=gf(t,i,o,l),o!==null&&(en(o,t,l),f1(o,i,l)))}function u1(t,i,o){var l=gn();ls(t,i,o,l)}function ls(t,i,o,l){var d={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(pc(t))d1(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,T=m(b,o);if(d.hasEagerState=!0,d.eagerState=T,un(T,b))return Ql(t,i,d,0),Xe===null&&Xl(),!1}catch{}finally{}if(o=gf(t,i,d,l),o!==null)return en(o,t,l),f1(o,i,l),!0}return!1}function Wf(t,i,o,l){if(l={lane:2,revertLane:Mh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(i)throw Error(a(479))}else i=gf(t,o,l,2),i!==null&&en(i,t,2)}function pc(t){var i=t.alternate;return t===we||i!==null&&i===we}function d1(t,i){ka=lc=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function f1(t,i,o){if((o&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,yg(t,o)}}var cs={readContext:$t,use:dc,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt};cs.useEffectEvent=rt;var h1={readContext:$t,use:dc,useCallback:function(t,i){return qt().memoizedState=[t,i===void 0?null:i],t},useContext:$t,useEffect:Iy,useImperativeHandle:function(t,i,o){o=o!=null?o.concat([t]):null,hc(4194308,4,e1.bind(null,i,t),o)},useLayoutEffect:function(t,i){return hc(4194308,4,t,i)},useInsertionEffect:function(t,i){hc(4,2,t,i)},useMemo:function(t,i){var o=qt();i=i===void 0?null:i;var l=t();if(Lr){Hi(!0);try{t()}finally{Hi(!1)}}return o.memoizedState=[l,i],l},useReducer:function(t,i,o){var l=qt();if(o!==void 0){var d=o(i);if(Lr){Hi(!0);try{o(i)}finally{Hi(!1)}}}else d=i;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=X3.bind(null,we,t),[l.memoizedState,t]},useRef:function(t){var i=qt();return t={current:t},i.memoizedState=t},useState:function(t){t=Yf(t);var i=t.queue,o=u1.bind(null,we,i);return i.dispatch=o,[t.memoizedState,o]},useDebugValue:Qf,useDeferredValue:function(t,i){var o=qt();return If(o,t,i)},useTransition:function(){var t=Yf(!1);return t=a1.bind(null,we,t.queue,!0,!1),qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,o){var l=we,d=qt();if($e){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),Xe===null)throw Error(a(349));(ke&127)!==0||Dy(l,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Iy(Ly.bind(null,l,m,t),[t]),l.flags|=2048,za(9,{destroy:void 0},_y.bind(null,l,m,o,i),null),o},useId:function(){var t=qt(),i=Xe.identifierPrefix;if($e){var o=ti,l=ei;o=(l&~(1<<32-cn(l)-1)).toString(32)+o,i="_"+i+"R_"+o,o=cc++,0<o&&(i+="H"+o.toString(32)),i+="_"}else o=P3++,i="_"+i+"r_"+o.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Jf,useFormState:Gy,useActionState:Gy,useOptimistic:function(t){var i=qt();i.memoizedState=i.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=Wf.bind(null,we,!0,o),o.dispatch=i,[t,i]},useMemoCache:Ff,useCacheRefresh:function(){return qt().memoizedState=K3.bind(null,we)},useEffectEvent:function(t){var i=qt(),o={impl:t};return i.memoizedState=o,function(){if((_e&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},eh={readContext:$t,use:dc,useCallback:n1,useContext:$t,useEffect:Xf,useImperativeHandle:t1,useInsertionEffect:Jy,useLayoutEffect:Wy,useMemo:i1,useReducer:fc,useRef:Qy,useState:function(){return fc(wi)},useDebugValue:Qf,useDeferredValue:function(t,i){var o=dt();return r1(o,qe.memoizedState,t,i)},useTransition:function(){var t=fc(wi)[0],i=dt().memoizedState;return[typeof t=="boolean"?t:ss(t),i]},useSyncExternalStore:Oy,useId:l1,useHostTransitionStatus:Jf,useFormState:Yy,useActionState:Yy,useOptimistic:function(t,i){var o=dt();return Uy(o,qe,t,i)},useMemoCache:Ff,useCacheRefresh:c1};eh.useEffectEvent=Zy;var m1={readContext:$t,use:dc,useCallback:n1,useContext:$t,useEffect:Xf,useImperativeHandle:t1,useInsertionEffect:Jy,useLayoutEffect:Wy,useMemo:i1,useReducer:Gf,useRef:Qy,useState:function(){return Gf(wi)},useDebugValue:Qf,useDeferredValue:function(t,i){var o=dt();return qe===null?If(o,t,i):r1(o,qe.memoizedState,t,i)},useTransition:function(){var t=Gf(wi)[0],i=dt().memoizedState;return[typeof t=="boolean"?t:ss(t),i]},useSyncExternalStore:Oy,useId:l1,useHostTransitionStatus:Jf,useFormState:Xy,useActionState:Xy,useOptimistic:function(t,i){var o=dt();return qe!==null?Uy(o,qe,t,i):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Ff,useCacheRefresh:c1};m1.useEffectEvent=Zy;function th(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:x({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var nh={enqueueSetState:function(t,i,o){t=t._reactInternals;var l=gn(),d=Ii(l);d.payload=i,o!=null&&(d.callback=o),i=Zi(t,d,l),i!==null&&(en(i,t,l),is(i,t,l))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=gn(),d=Ii(l);d.tag=1,d.payload=i,o!=null&&(d.callback=o),i=Zi(t,d,l),i!==null&&(en(i,t,l),is(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=gn(),l=Ii(o);l.tag=2,i!=null&&(l.callback=i),i=Zi(t,l,o),i!==null&&(en(i,t,o),is(i,t,o))}};function p1(t,i,o,l,d,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!Qo(o,l)||!Qo(d,m):!0}function g1(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&nh.enqueueReplaceState(i,i.state,null)}function Nr(t,i){var o=i;if("ref"in i){o={};for(var l in i)l!=="ref"&&(o[l]=i[l])}if(t=t.defaultProps){o===i&&(o=x({},o));for(var d in t)o[d]===void 0&&(o[d]=t[d])}return o}function y1(t){Kl(t)}function x1(t){console.error(t)}function b1(t){Kl(t)}function gc(t,i){try{var o=t.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function v1(t,i,o){try{var l=t.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ih(t,i,o){return o=Ii(o),o.tag=3,o.payload={element:null},o.callback=function(){gc(t,i)},o}function w1(t){return t=Ii(t),t.tag=3,t}function S1(t,i,o,l){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;t.payload=function(){return d(m)},t.callback=function(){v1(i,o,l)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){v1(i,o,l),typeof d!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Q3(t,i,o,l,d){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=o.alternate,i!==null&&Sa(i,o,d,!0),o=fn.current,o!==null){switch(o.tag){case 31:case 13:return zn===null?kc():o.alternate===null&&at===0&&(at=3),o.flags&=-257,o.flags|=65536,o.lanes=d,l===ic?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([l]):i.add(l),kh(t,l,d)),!1;case 22:return o.flags|=65536,l===ic?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([l]):o.add(l)),kh(t,l,d)),!1}throw Error(a(435,o.tag))}return kh(t,l,d),kc(),!1}if($e)return i=fn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==Sf&&(t=Error(a(422),{cause:l}),Jo(En(t,o)))):(l!==Sf&&(i=Error(a(423),{cause:l}),Jo(En(i,o))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=En(l,o),d=ih(t.stateNode,l,d),Of(t,d),at!==4&&(at=2)),!1;var m=Error(a(520),{cause:l});if(m=En(m,o),ys===null?ys=[m]:ys.push(m),at!==4&&(at=2),i===null)return!0;l=En(l,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,t=d&-d,o.lanes|=t,t=ih(o.stateNode,l,t),Of(o,t),!1;case 1:if(i=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ir===null||!ir.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=w1(d),S1(d,t,o,l),Of(o,d),!1}o=o.return}while(o!==null);return!1}var rh=Error(a(461)),yt=!1;function Ot(t,i,o,l){i.child=t===null?Ey(i,null,o,l):_r(i,t.child,o,l)}function C1(t,i,o,l,d){o=o.render;var m=i.ref;if("ref"in l){var b={};for(var T in l)T!=="ref"&&(b[T]=l[T])}else b=l;return Mr(i),l=Uf(t,i,o,b,m,d),T=Vf(),t!==null&&!yt?(Pf(t,i,d),Si(t,i,d)):($e&&T&&vf(i),i.flags|=1,Ot(t,i,l,d),i.child)}function T1(t,i,o,l,d){if(t===null){var m=o.type;return typeof m=="function"&&!yf(m)&&m.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=m,j1(t,i,m,l,d)):(t=Zl(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!fh(t,d)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:Qo,o(b,l)&&t.ref===i.ref)return Si(t,i,d)}return i.flags|=1,t=gi(m,l),t.ref=i.ref,t.return=i,i.child=t}function j1(t,i,o,l,d){if(t!==null){var m=t.memoizedProps;if(Qo(m,l)&&t.ref===i.ref)if(yt=!1,i.pendingProps=l=m,fh(t,d))(t.flags&131072)!==0&&(yt=!0);else return i.lanes=t.lanes,Si(t,i,d)}return ah(t,i,o,l,d)}function E1(t,i,o,l){var d=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,t!==null){for(l=i.child=t.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~m}else l=0,i.child=null;return A1(t,i,m,o,l)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&tc(i,m!==null?m.cachePool:null),m!==null?Ry(i,m):_f(),zy(i);else return l=i.lanes=536870912,A1(t,i,m!==null?m.baseLanes|o:o,o,l)}else m!==null?(tc(i,m.cachePool),Ry(i,m),Wi(),i.memoizedState=null):(t!==null&&tc(i,null),_f(),Wi());return Ot(t,i,d,o),i.child}function us(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function A1(t,i,o,l,d){var m=Rf();return m=m===null?null:{parent:pt._currentValue,pool:m},i.memoizedState={baseLanes:o,cachePool:m},t!==null&&tc(i,null),_f(),zy(i),t!==null&&Sa(t,i,l,!0),i.childLanes=d,null}function yc(t,i){return i=bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function k1(t,i,o){return _r(i,t.child,null,o),t=yc(i,i.pendingProps),t.flags|=2,hn(i),i.memoizedState=null,t}function I3(t,i,o){var l=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,t===null){if($e){if(l.mode==="hidden")return t=yc(i,l),i.lanes=536870912,us(null,t);if(Nf(i),(t=Qe)?(t=Vx(t,Rn),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Gi!==null?{id:ei,overflow:ti}:null,retryLane:536870912,hydrationErrors:null},o=dy(t),o.return=i,i.child=o,Mt=i,Qe=null)):t=null,t===null)throw Ki(i);return i.lanes=536870912,null}return yc(i,l)}var m=t.memoizedState;if(m!==null){var b=m.dehydrated;if(Nf(i),d)if(i.flags&256)i.flags&=-257,i=k1(t,i,o);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(yt||Sa(t,i,o,!1),d=(o&t.childLanes)!==0,yt||d){if(l=Xe,l!==null&&(b=xg(l,o),b!==0&&b!==m.retryLane))throw m.retryLane=b,Ar(t,b),en(l,t,b),rh;kc(),i=k1(t,i,o)}else t=m.treeContext,Qe=Mn(b.nextSibling),Mt=i,$e=!0,Yi=null,Rn=!1,t!==null&&my(i,t),i=yc(i,l),i.flags|=4096;return i}return t=gi(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function xc(t,i){var o=i.ref;if(o===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(t===null||t.ref!==o)&&(i.flags|=4194816)}}function ah(t,i,o,l,d){return Mr(i),o=Uf(t,i,o,l,void 0,d),l=Vf(),t!==null&&!yt?(Pf(t,i,d),Si(t,i,d)):($e&&l&&vf(i),i.flags|=1,Ot(t,i,o,d),i.child)}function R1(t,i,o,l,d,m){return Mr(i),i.updateQueue=null,o=$y(i,l,o,d),My(t),l=Vf(),t!==null&&!yt?(Pf(t,i,m),Si(t,i,m)):($e&&l&&vf(i),i.flags|=1,Ot(t,i,o,m),i.child)}function z1(t,i,o,l,d){if(Mr(i),i.stateNode===null){var m=xa,b=o.contextType;typeof b=="object"&&b!==null&&(m=$t(b)),m=new o(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=nh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Mf(i),b=o.contextType,m.context=typeof b=="object"&&b!==null?$t(b):xa,m.state=i.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(th(i,o,b,l),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&nh.enqueueReplaceState(m,m.state,null),as(i,l,m,d),rs(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var T=i.memoizedProps,M=Nr(o,T);m.props=M;var F=m.context,X=o.contextType;b=xa,typeof X=="object"&&X!==null&&(b=$t(X));var W=o.getDerivedStateFromProps;X=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||F!==b)&&g1(i,m,l,b),Qi=!1;var q=i.memoizedState;m.state=q,as(i,l,m,d),rs(),F=i.memoizedState,T||q!==F||Qi?(typeof W=="function"&&(th(i,o,W,l),F=i.memoizedState),(M=Qi||p1(i,o,M,l,q,F,b))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),m.props=l,m.state=F,m.context=b,l=M):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,$f(t,i),b=i.memoizedProps,X=Nr(o,b),m.props=X,W=i.pendingProps,q=m.context,F=o.contextType,M=xa,typeof F=="object"&&F!==null&&(M=$t(F)),T=o.getDerivedStateFromProps,(F=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==W||q!==M)&&g1(i,m,l,M),Qi=!1,q=i.memoizedState,m.state=q,as(i,l,m,d),rs();var Y=i.memoizedState;b!==W||q!==Y||Qi||t!==null&&t.dependencies!==null&&Wl(t.dependencies)?(typeof T=="function"&&(th(i,o,T,l),Y=i.memoizedState),(X=Qi||p1(i,o,X,l,q,Y,M)||t!==null&&t.dependencies!==null&&Wl(t.dependencies))?(F||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,Y,M),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,Y,M)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Y),m.props=l,m.state=Y,m.context=M,l=X):(typeof m.componentDidUpdate!="function"||b===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,xc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=_r(i,t.child,null,d),i.child=_r(i,null,o,d)):Ot(t,i,o,d),i.memoizedState=m.state,t=i.child):t=Si(t,i,d),t}function M1(t,i,o,l){return Rr(),i.flags|=256,Ot(t,i,o,l),i.child}var oh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sh(t){return{baseLanes:t,cachePool:vy()}}function lh(t,i,o){return t=t!==null?t.childLanes&~o:0,i&&(t|=pn),t}function $1(t,i,o){var l=i.pendingProps,d=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=t!==null&&t.memoizedState===null?!1:(ut.current&2)!==0),b&&(d=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if($e){if(d?Ji(i):Wi(),(t=Qe)?(t=Vx(t,Rn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Gi!==null?{id:ei,overflow:ti}:null,retryLane:536870912,hydrationErrors:null},o=dy(t),o.return=i,i.child=o,Mt=i,Qe=null)):t=null,t===null)throw Ki(i);return qh(t)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,d?(Wi(),d=i.mode,T=bc({mode:"hidden",children:T},d),l=kr(l,d,o,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=sh(o),l.childLanes=lh(t,b,o),i.memoizedState=oh,us(null,l)):(Ji(i),ch(i,T))}var M=t.memoizedState;if(M!==null&&(T=M.dehydrated,T!==null)){if(m)i.flags&256?(Ji(i),i.flags&=-257,i=uh(t,i,o)):i.memoizedState!==null?(Wi(),i.child=t.child,i.flags|=128,i=null):(Wi(),T=l.fallback,d=i.mode,l=bc({mode:"visible",children:l.children},d),T=kr(T,d,o,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,_r(i,t.child,null,o),l=i.child,l.memoizedState=sh(o),l.childLanes=lh(t,b,o),i.memoizedState=oh,i=us(null,l));else if(Ji(i),qh(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var F=b.dgst;b=F,l=Error(a(419)),l.stack="",l.digest=b,Jo({value:l,source:null,stack:null}),i=uh(t,i,o)}else if(yt||Sa(t,i,o,!1),b=(o&t.childLanes)!==0,yt||b){if(b=Xe,b!==null&&(l=xg(b,o),l!==0&&l!==M.retryLane))throw M.retryLane=l,Ar(t,l),en(b,t,l),rh;Fh(T)||kc(),i=uh(t,i,o)}else Fh(T)?(i.flags|=192,i.child=t.child,i=null):(t=M.treeContext,Qe=Mn(T.nextSibling),Mt=i,$e=!0,Yi=null,Rn=!1,t!==null&&my(i,t),i=ch(i,l.children),i.flags|=4096);return i}return d?(Wi(),T=l.fallback,d=i.mode,M=t.child,F=M.sibling,l=gi(M,{mode:"hidden",children:l.children}),l.subtreeFlags=M.subtreeFlags&65011712,F!==null?T=gi(F,T):(T=kr(T,d,o,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,us(null,l),l=i.child,T=t.child.memoizedState,T===null?T=sh(o):(d=T.cachePool,d!==null?(M=pt._currentValue,d=d.parent!==M?{parent:M,pool:M}:d):d=vy(),T={baseLanes:T.baseLanes|o,cachePool:d}),l.memoizedState=T,l.childLanes=lh(t,b,o),i.memoizedState=oh,us(t.child,l)):(Ji(i),o=t.child,t=o.sibling,o=gi(o,{mode:"visible",children:l.children}),o.return=i,o.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=o,i.memoizedState=null,o)}function ch(t,i){return i=bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function bc(t,i){return t=dn(22,t,null,i),t.lanes=0,t}function uh(t,i,o){return _r(i,t.child,null,o),t=ch(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function O1(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),jf(t.return,i,o)}function dh(t,i,o,l,d,m){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=o,b.tailMode=d,b.treeForkCount=m)}function D1(t,i,o){var l=i.pendingProps,d=l.revealOrder,m=l.tail;l=l.children;var b=ut.current,T=(b&2)!==0;if(T?(b=b&1|2,i.flags|=128):b&=1,I(ut,b),Ot(t,i,l,o),l=$e?Zo:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&O1(t,o,i);else if(t.tag===19)O1(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&sc(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),dh(i,!1,d,o,m,l);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&sc(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}dh(i,!0,o,null,m,l);break;case"together":dh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Si(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),nr|=i.lanes,(o&i.childLanes)===0)if(t!==null){if(Sa(t,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,o=gi(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=gi(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function fh(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Wl(t)))}function Z3(t,i,o){switch(i.tag){case 3:ge(i,i.stateNode.containerInfo),Xi(i,pt,t.memoizedState.cache),Rr();break;case 27:case 5:Me(i);break;case 4:ge(i,i.stateNode.containerInfo);break;case 10:Xi(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Nf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ji(i),i.flags|=128,null):(o&i.child.childLanes)!==0?$1(t,i,o):(Ji(i),t=Si(t,i,o),t!==null?t.sibling:null);Ji(i);break;case 19:var d=(t.flags&128)!==0;if(l=(o&i.childLanes)!==0,l||(Sa(t,i,o,!1),l=(o&i.childLanes)!==0),d){if(l)return D1(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),I(ut,ut.current),l)break;return null;case 22:return i.lanes=0,E1(t,i,o,i.pendingProps);case 24:Xi(i,pt,t.memoizedState.cache)}return Si(t,i,o)}function _1(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps)yt=!0;else{if(!fh(t,o)&&(i.flags&128)===0)return yt=!1,Z3(t,i,o);yt=(t.flags&131072)!==0}else yt=!1,$e&&(i.flags&1048576)!==0&&hy(i,Zo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Or(i.elementType),i.type=t,typeof t=="function")yf(t)?(l=Nr(t,l),i.tag=1,i=z1(null,i,t,l,o)):(i.tag=0,i=ah(null,i,t,l,o));else{if(t!=null){var d=t.$$typeof;if(d===N){i.tag=11,i=C1(null,i,t,l,o);break e}else if(d===L){i.tag=14,i=T1(null,i,t,l,o);break e}}throw i=ne(t)||t,Error(a(306,i,""))}}return i;case 0:return ah(t,i,i.type,i.pendingProps,o);case 1:return l=i.type,d=Nr(l,i.pendingProps),z1(t,i,l,d,o);case 3:e:{if(ge(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;d=m.element,$f(t,i),as(i,l,null,o);var b=i.memoizedState;if(l=b.cache,Xi(i,pt,l),l!==m.cache&&Ef(i,[pt],o,!0),rs(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=M1(t,i,l,o);break e}else if(l!==d){d=En(Error(a(424)),i),Jo(d),i=M1(t,i,l,o);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=Mn(t.firstChild),Mt=i,$e=!0,Yi=null,Rn=!0,o=Ey(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Rr(),l===d){i=Si(t,i,o);break e}Ot(t,i,l,o)}i=i.child}return i;case 26:return xc(t,i),t===null?(o=Yx(i.type,null,i.pendingProps,null))?i.memoizedState=o:$e||(o=i.type,t=i.pendingProps,l=_c(ye.current).createElement(o),l[zt]=i,l[Xt]=t,Dt(l,o,t),jt(l),i.stateNode=l):i.memoizedState=Yx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Me(i),t===null&&$e&&(l=i.stateNode=Fx(i.type,i.pendingProps,ye.current),Mt=i,Rn=!0,d=Qe,sr(i.type)?(Gh=d,Qe=Mn(l.firstChild)):Qe=d),Ot(t,i,i.pendingProps.children,o),xc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&$e&&((d=l=Qe)&&(l=Aj(l,i.type,i.pendingProps,Rn),l!==null?(i.stateNode=l,Mt=i,Qe=Mn(l.firstChild),Rn=!1,d=!0):d=!1),d||Ki(i)),Me(i),d=i.type,m=i.pendingProps,b=t!==null?t.memoizedProps:null,l=m.children,Vh(d,m)?l=null:b!==null&&Vh(d,b)&&(i.flags|=32),i.memoizedState!==null&&(d=Uf(t,i,H3,null,null,o),js._currentValue=d),xc(t,i),Ot(t,i,l,o),i.child;case 6:return t===null&&$e&&((t=o=Qe)&&(o=kj(o,i.pendingProps,Rn),o!==null?(i.stateNode=o,Mt=i,Qe=null,t=!0):t=!1),t||Ki(i)),null;case 13:return $1(t,i,o);case 4:return ge(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=_r(i,null,l,o):Ot(t,i,l,o),i.child;case 11:return C1(t,i,i.type,i.pendingProps,o);case 7:return Ot(t,i,i.pendingProps,o),i.child;case 8:return Ot(t,i,i.pendingProps.children,o),i.child;case 12:return Ot(t,i,i.pendingProps.children,o),i.child;case 10:return l=i.pendingProps,Xi(i,i.type,l.value),Ot(t,i,l.children,o),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,Mr(i),d=$t(d),l=l(d),i.flags|=1,Ot(t,i,l,o),i.child;case 14:return T1(t,i,i.type,i.pendingProps,o);case 15:return j1(t,i,i.type,i.pendingProps,o);case 19:return D1(t,i,o);case 31:return I3(t,i,o);case 22:return E1(t,i,o,i.pendingProps);case 24:return Mr(i),l=$t(pt),t===null?(d=Rf(),d===null&&(d=Xe,m=Af(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),i.memoizedState={parent:l,cache:d},Mf(i),Xi(i,pt,d)):((t.lanes&o)!==0&&($f(t,i),as(i,null,null,o),rs()),d=t.memoizedState,m=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),Xi(i,pt,l)):(l=m.cache,Xi(i,pt,l),l!==d.cache&&Ef(i,[pt],o,!0))),Ot(t,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ci(t){t.flags|=4}function hh(t,i,o,l,d){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(lx())t.flags|=8192;else throw Dr=ic,zf}else t.flags&=-16777217}function L1(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zx(i))if(lx())t.flags|=8192;else throw Dr=ic,zf}function vc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?pg():536870912,t.lanes|=i,Da|=i)}function ds(t,i){if(!$e)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Ie(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function J3(t,i,o){var l=i.pendingProps;switch(wf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(i),null;case 1:return Ie(i),null;case 3:return o=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),bi(pt),fe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(wa(i)?Ci(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Cf())),Ie(i),null;case 26:var d=i.type,m=i.memoizedState;return t===null?(Ci(i),m!==null?(Ie(i),L1(i,m)):(Ie(i),hh(i,d,null,l,o))):m?m!==t.memoizedState?(Ci(i),Ie(i),L1(i,m)):(Ie(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ci(i),Ie(i),hh(i,d,t,l,o)),null;case 27:if(Rt(i),o=ye.current,d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ci(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ie(i),null}t=oe.current,wa(i)?py(i):(t=Fx(d,l,o),i.stateNode=t,Ci(i))}return Ie(i),null;case 5:if(Rt(i),d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ci(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ie(i),null}if(m=oe.current,wa(i))py(i);else{var b=_c(ye.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(d,{is:l.is}):b.createElement(d)}}m[zt]=i,m[Xt]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;e:switch(Dt(m,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ci(i)}}return Ie(i),hh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,o),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ci(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ye.current,wa(i)){if(t=i.stateNode,o=i.memoizedProps,l=null,d=Mt,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[zt]=i,t=!!(t.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||$x(t.nodeValue,o)),t||Ki(i,!0)}else t=_c(t).createTextNode(l),t[zt]=i,i.stateNode=t}return Ie(i),null;case 31:if(o=i.memoizedState,t===null||t.memoizedState!==null){if(l=wa(i),o!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[zt]=i}else Rr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ie(i),t=!1}else o=Cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return i.flags&256?(hn(i),i):(hn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ie(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=wa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[zt]=i}else Rr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ie(i),d=!1}else d=Cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(hn(i),i):(hn(i),null)}return hn(i),(i.flags&128)!==0?(i.lanes=o,i):(o=l!==null,t=t!==null&&t.memoizedState!==null,o&&(l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)),o!==t&&o&&(i.child.flags|=8192),vc(i,i.updateQueue),Ie(i),null);case 4:return fe(),t===null&&_h(i.stateNode.containerInfo),Ie(i),null;case 10:return bi(i.type),Ie(i),null;case 19:if(V(ut),l=i.memoizedState,l===null)return Ie(i),null;if(d=(i.flags&128)!==0,m=l.rendering,m===null)if(d)ds(l,!1);else{if(at!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=sc(t),m!==null){for(i.flags|=128,ds(l,!1),t=m.updateQueue,i.updateQueue=t,vc(i,t),i.subtreeFlags=0,t=o,o=i.child;o!==null;)uy(o,t),o=o.sibling;return I(ut,ut.current&1|2),$e&&yi(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Tt()>jc&&(i.flags|=128,d=!0,ds(l,!1),i.lanes=4194304)}else{if(!d)if(t=sc(m),t!==null){if(i.flags|=128,d=!0,t=t.updateQueue,i.updateQueue=t,vc(i,t),ds(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!$e)return Ie(i),null}else 2*Tt()-l.renderingStartTime>jc&&o!==536870912&&(i.flags|=128,d=!0,ds(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Tt(),t.sibling=null,o=ut.current,I(ut,d?o&1|2:o&1),$e&&yi(i,l.treeForkCount),t):(Ie(i),null);case 22:case 23:return hn(i),Lf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(o&536870912)!==0&&(i.flags&128)===0&&(Ie(i),i.subtreeFlags&6&&(i.flags|=8192)):Ie(i),o=i.updateQueue,o!==null&&vc(i,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==o&&(i.flags|=2048),t!==null&&V($r),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),bi(pt),Ie(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function W3(t,i){switch(wf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return bi(pt),fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Rt(i),null;case 31:if(i.memoizedState!==null){if(hn(i),i.alternate===null)throw Error(a(340));Rr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(hn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Rr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return V(ut),null;case 4:return fe(),null;case 10:return bi(i.type),null;case 22:case 23:return hn(i),Lf(),t!==null&&V($r),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return bi(pt),null;case 25:return null;default:return null}}function N1(t,i){switch(wf(i),i.tag){case 3:bi(pt),fe();break;case 26:case 27:case 5:Rt(i);break;case 4:fe();break;case 31:i.memoizedState!==null&&hn(i);break;case 13:hn(i);break;case 19:V(ut);break;case 10:bi(i.type);break;case 22:case 23:hn(i),Lf(),t!==null&&V($r);break;case 24:bi(pt)}}function fs(t,i){try{var o=i.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var d=l.next;o=d;do{if((o.tag&t)===t){l=void 0;var m=o.create,b=o.inst;l=m(),b.destroy=l}o=o.next}while(o!==d)}}catch(T){Pe(i,i.return,T)}}function er(t,i,o){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&t)===t){var b=l.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,d=i;var M=o,F=T;try{F()}catch(X){Pe(d,M,X)}}}l=l.next}while(l!==m)}}catch(X){Pe(i,i.return,X)}}function B1(t){var i=t.updateQueue;if(i!==null){var o=t.stateNode;try{ky(i,o)}catch(l){Pe(t,t.return,l)}}}function U1(t,i,o){o.props=Nr(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(l){Pe(t,i,l)}}function hs(t,i){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof o=="function"?t.refCleanup=o(l):o.current=l}}catch(d){Pe(t,i,d)}}function ni(t,i){var o=t.ref,l=t.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(d){Pe(t,i,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Pe(t,i,d)}else o.current=null}function V1(t){var i=t.type,o=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break e;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(d){Pe(t,t.return,d)}}function mh(t,i,o){try{var l=t.stateNode;wj(l,t.type,o,i),l[Xt]=i}catch(d){Pe(t,t.return,d)}}function P1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function ph(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gh(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(t),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=mi));else if(l!==4&&(l===27&&sr(t.type)&&(o=t.stateNode,i=null),t=t.child,t!==null))for(gh(t,i,o),t=t.sibling;t!==null;)gh(t,i,o),t=t.sibling}function wc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(l===27&&sr(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(wc(t,i,o),t=t.sibling;t!==null;)wc(t,i,o),t=t.sibling}function H1(t){var i=t.stateNode,o=t.memoizedProps;try{for(var l=t.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Dt(i,l,o),i[zt]=t,i[Xt]=o}catch(m){Pe(t,t.return,m)}}var Ti=!1,xt=!1,yh=!1,F1=typeof WeakSet=="function"?WeakSet:Set,Et=null;function ej(t,i){if(t=t.containerInfo,Bh=Hc,t=ty(t),uf(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,T=-1,M=-1,F=0,X=0,W=t,q=null;t:for(;;){for(var Y;W!==o||d!==0&&W.nodeType!==3||(T=b+d),W!==m||l!==0&&W.nodeType!==3||(M=b+l),W.nodeType===3&&(b+=W.nodeValue.length),(Y=W.firstChild)!==null;)q=W,W=Y;for(;;){if(W===t)break t;if(q===o&&++F===d&&(T=b),q===m&&++X===l&&(M=b),(Y=W.nextSibling)!==null)break;W=q,q=W.parentNode}W=Y}o=T===-1||M===-1?null:{start:T,end:M}}else o=null}o=o||{start:0,end:0}}else o=null;for(Uh={focusedElem:t,selectionRange:o},Hc=!1,Et=i;Et!==null;)if(i=Et,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Et=t;else for(;Et!==null;){switch(i=Et,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)d=t[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,o=i,d=m.memoizedProps,m=m.memoizedState,l=o.stateNode;try{var ue=Nr(o.type,d);t=l.getSnapshotBeforeUpdate(ue,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(xe){Pe(o,o.return,xe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,o=t.nodeType,o===9)Hh(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Et=t;break}Et=i.return}}function q1(t,i,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:Ei(t,o),l&4&&fs(5,o);break;case 1:if(Ei(t,o),l&4)if(t=o.stateNode,i===null)try{t.componentDidMount()}catch(b){Pe(o,o.return,b)}else{var d=Nr(o.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(d,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Pe(o,o.return,b)}}l&64&&B1(o),l&512&&hs(o,o.return);break;case 3:if(Ei(t,o),l&64&&(t=o.updateQueue,t!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{ky(t,i)}catch(b){Pe(o,o.return,b)}}break;case 27:i===null&&l&4&&H1(o);case 26:case 5:Ei(t,o),i===null&&l&4&&V1(o),l&512&&hs(o,o.return);break;case 12:Ei(t,o);break;case 31:Ei(t,o),l&4&&K1(t,o);break;case 13:Ei(t,o),l&4&&X1(t,o),l&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=cj.bind(null,o),Rj(t,o))));break;case 22:if(l=o.memoizedState!==null||Ti,!l){i=i!==null&&i.memoizedState!==null||xt,d=Ti;var m=xt;Ti=l,(xt=i)&&!m?Ai(t,o,(o.subtreeFlags&8772)!==0):Ei(t,o),Ti=d,xt=m}break;case 30:break;default:Ei(t,o)}}function G1(t){var i=t.alternate;i!==null&&(t.alternate=null,G1(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Yd(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,It=!1;function ji(t,i,o){for(o=o.child;o!==null;)Y1(t,i,o),o=o.sibling}function Y1(t,i,o){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(No,o)}catch{}switch(o.tag){case 26:xt||ni(o,i),ji(t,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:xt||ni(o,i);var l=We,d=It;sr(o.type)&&(We=o.stateNode,It=!1),ji(t,i,o),Ss(o.stateNode),We=l,It=d;break;case 5:xt||ni(o,i);case 6:if(l=We,d=It,We=null,ji(t,i,o),We=l,It=d,We!==null)if(It)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(o.stateNode)}catch(m){Pe(o,i,m)}else try{We.removeChild(o.stateNode)}catch(m){Pe(o,i,m)}break;case 18:We!==null&&(It?(t=We,Bx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),Ha(t)):Bx(We,o.stateNode));break;case 4:l=We,d=It,We=o.stateNode.containerInfo,It=!0,ji(t,i,o),We=l,It=d;break;case 0:case 11:case 14:case 15:er(2,o,i),xt||er(4,o,i),ji(t,i,o);break;case 1:xt||(ni(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"&&U1(o,i,l)),ji(t,i,o);break;case 21:ji(t,i,o);break;case 22:xt=(l=xt)||o.memoizedState!==null,ji(t,i,o),xt=l;break;default:ji(t,i,o)}}function K1(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ha(t)}catch(o){Pe(i,i.return,o)}}}function X1(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ha(t)}catch(o){Pe(i,i.return,o)}}function tj(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new F1),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new F1),i;default:throw Error(a(435,t.tag))}}function Sc(t,i){var o=tj(t);i.forEach(function(l){if(!o.has(l)){o.add(l);var d=uj.bind(null,t,l);l.then(d,d)}})}function Zt(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l],m=t,b=i,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(sr(T.type)){We=T.stateNode,It=!1;break e}break;case 5:We=T.stateNode,It=!1;break e;case 3:case 4:We=T.stateNode.containerInfo,It=!0;break e}T=T.return}if(We===null)throw Error(a(160));Y1(m,b,d),We=null,It=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Q1(i,t),i=i.sibling}var Yn=null;function Q1(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(i,t),Jt(t),l&4&&(er(3,t,t.return),fs(3,t),er(5,t,t.return));break;case 1:Zt(i,t),Jt(t),l&512&&(xt||o===null||ni(o,o.return)),l&64&&Ti&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var d=Yn;if(Zt(i,t),Jt(t),l&512&&(xt||o===null||ni(o,o.return)),l&4){var m=o!==null?o.memoizedState:null;if(l=t.memoizedState,o===null)if(l===null)if(t.stateNode===null){e:{l=t.type,o=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Vo]||m[zt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),Dt(m,l,o),m[zt]=t,jt(m),l=m;break e;case"link":var b=Qx("link","href",d).get(l+(o.href||""));if(b){for(var T=0;T<b.length;T++)if(m=b[T],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(T,1);break t}}m=d.createElement(l),Dt(m,l,o),d.head.appendChild(m);break;case"meta":if(b=Qx("meta","content",d).get(l+(o.content||""))){for(T=0;T<b.length;T++)if(m=b[T],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(T,1);break t}}m=d.createElement(l),Dt(m,l,o),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[zt]=t,jt(m),l=m}t.stateNode=l}else Ix(d,t.type,t.stateNode);else t.stateNode=Xx(d,l,t.memoizedProps);else m!==l?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,l===null?Ix(d,t.type,t.stateNode):Xx(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&mh(t,t.memoizedProps,o.memoizedProps)}break;case 27:Zt(i,t),Jt(t),l&512&&(xt||o===null||ni(o,o.return)),o!==null&&l&4&&mh(t,t.memoizedProps,o.memoizedProps);break;case 5:if(Zt(i,t),Jt(t),l&512&&(xt||o===null||ni(o,o.return)),t.flags&32){d=t.stateNode;try{da(d,"")}catch(ue){Pe(t,t.return,ue)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,mh(t,d,o!==null?o.memoizedProps:d)),l&1024&&(yh=!0);break;case 6:if(Zt(i,t),Jt(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,o=t.stateNode;try{o.nodeValue=l}catch(ue){Pe(t,t.return,ue)}}break;case 3:if(Bc=null,d=Yn,Yn=Lc(i.containerInfo),Zt(i,t),Yn=d,Jt(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Ha(i.containerInfo)}catch(ue){Pe(t,t.return,ue)}yh&&(yh=!1,I1(t));break;case 4:l=Yn,Yn=Lc(t.stateNode.containerInfo),Zt(i,t),Jt(t),Yn=l;break;case 12:Zt(i,t),Jt(t);break;case 31:Zt(i,t),Jt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 13:Zt(i,t),Jt(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Tc=Tt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 22:d=t.memoizedState!==null;var M=o!==null&&o.memoizedState!==null,F=Ti,X=xt;if(Ti=F||d,xt=X||M,Zt(i,t),xt=X,Ti=F,Jt(t),l&8192)e:for(i=t.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(o===null||M||Ti||xt||Br(t)),o=null,i=t;;){if(i.tag===5||i.tag===26){if(o===null){M=o=i;try{if(m=M.stateNode,d)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=M.stateNode;var W=M.memoizedProps.style,q=W!=null&&W.hasOwnProperty("display")?W.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ue){Pe(M,M.return,ue)}}}else if(i.tag===6){if(o===null){M=i;try{M.stateNode.nodeValue=d?"":M.memoizedProps}catch(ue){Pe(M,M.return,ue)}}}else if(i.tag===18){if(o===null){M=i;try{var Y=M.stateNode;d?Ux(Y,!0):Ux(M.stateNode,!1)}catch(ue){Pe(M,M.return,ue)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,Sc(t,o))));break;case 19:Zt(i,t),Jt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 30:break;case 21:break;default:Zt(i,t),Jt(t)}}function Jt(t){var i=t.flags;if(i&2){try{for(var o,l=t.return;l!==null;){if(P1(l)){o=l;break}l=l.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var d=o.stateNode,m=ph(t);wc(t,m,d);break;case 5:var b=o.stateNode;o.flags&32&&(da(b,""),o.flags&=-33);var T=ph(t);wc(t,T,b);break;case 3:case 4:var M=o.stateNode.containerInfo,F=ph(t);gh(t,F,M);break;default:throw Error(a(161))}}catch(X){Pe(t,t.return,X)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function I1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;I1(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ei(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)q1(t,i.alternate,i),i=i.sibling}function Br(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:er(4,i,i.return),Br(i);break;case 1:ni(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&U1(i,i.return,o),Br(i);break;case 27:Ss(i.stateNode);case 26:case 5:ni(i,i.return),Br(i);break;case 22:i.memoizedState===null&&Br(i);break;case 30:Br(i);break;default:Br(i)}t=t.sibling}}function Ai(t,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=t,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ai(d,m,o),fs(4,m);break;case 1:if(Ai(d,m,o),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(F){Pe(l,l.return,F)}if(l=m,d=l.updateQueue,d!==null){var T=l.stateNode;try{var M=d.shared.hiddenCallbacks;if(M!==null)for(d.shared.hiddenCallbacks=null,d=0;d<M.length;d++)Ay(M[d],T)}catch(F){Pe(l,l.return,F)}}o&&b&64&&B1(m),hs(m,m.return);break;case 27:H1(m);case 26:case 5:Ai(d,m,o),o&&l===null&&b&4&&V1(m),hs(m,m.return);break;case 12:Ai(d,m,o);break;case 31:Ai(d,m,o),o&&b&4&&K1(d,m);break;case 13:Ai(d,m,o),o&&b&4&&X1(d,m);break;case 22:m.memoizedState===null&&Ai(d,m,o),hs(m,m.return);break;case 30:break;default:Ai(d,m,o)}i=i.sibling}}function xh(t,i){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&Wo(o))}function bh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Wo(t))}function Kn(t,i,o,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Z1(t,i,o,l),i=i.sibling}function Z1(t,i,o,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:Kn(t,i,o,l),d&2048&&fs(9,i);break;case 1:Kn(t,i,o,l);break;case 3:Kn(t,i,o,l),d&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Wo(t)));break;case 12:if(d&2048){Kn(t,i,o,l),t=i.stateNode;try{var m=i.memoizedProps,b=m.id,T=m.onPostCommit;typeof T=="function"&&T(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(M){Pe(i,i.return,M)}}else Kn(t,i,o,l);break;case 31:Kn(t,i,o,l);break;case 13:Kn(t,i,o,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Kn(t,i,o,l):ms(t,i):m._visibility&2?Kn(t,i,o,l):(m._visibility|=2,Ma(t,i,o,l,(i.subtreeFlags&10256)!==0||!1)),d&2048&&xh(b,i);break;case 24:Kn(t,i,o,l),d&2048&&bh(i.alternate,i);break;default:Kn(t,i,o,l)}}function Ma(t,i,o,l,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,b=i,T=o,M=l,F=b.flags;switch(b.tag){case 0:case 11:case 15:Ma(m,b,T,M,d),fs(8,b);break;case 23:break;case 22:var X=b.stateNode;b.memoizedState!==null?X._visibility&2?Ma(m,b,T,M,d):ms(m,b):(X._visibility|=2,Ma(m,b,T,M,d)),d&&F&2048&&xh(b.alternate,b);break;case 24:Ma(m,b,T,M,d),d&&F&2048&&bh(b.alternate,b);break;default:Ma(m,b,T,M,d)}i=i.sibling}}function ms(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=t,l=i,d=l.flags;switch(l.tag){case 22:ms(o,l),d&2048&&xh(l.alternate,l);break;case 24:ms(o,l),d&2048&&bh(l.alternate,l);break;default:ms(o,l)}i=i.sibling}}var ps=8192;function $a(t,i,o){if(t.subtreeFlags&ps)for(t=t.child;t!==null;)J1(t,i,o),t=t.sibling}function J1(t,i,o){switch(t.tag){case 26:$a(t,i,o),t.flags&ps&&t.memoizedState!==null&&Pj(o,Yn,t.memoizedState,t.memoizedProps);break;case 5:$a(t,i,o);break;case 3:case 4:var l=Yn;Yn=Lc(t.stateNode.containerInfo),$a(t,i,o),Yn=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ps,ps=16777216,$a(t,i,o),ps=l):$a(t,i,o));break;default:$a(t,i,o)}}function W1(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function gs(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];Et=l,tx(l,t)}W1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ex(t),t=t.sibling}function ex(t){switch(t.tag){case 0:case 11:case 15:gs(t),t.flags&2048&&er(9,t,t.return);break;case 3:gs(t);break;case 12:gs(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Cc(t)):gs(t);break;default:gs(t)}}function Cc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];Et=l,tx(l,t)}W1(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:er(8,i,i.return),Cc(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,Cc(i));break;default:Cc(i)}t=t.sibling}}function tx(t,i){for(;Et!==null;){var o=Et;switch(o.tag){case 0:case 11:case 15:er(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wo(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,Et=l;else e:for(o=t;Et!==null;){l=Et;var d=l.sibling,m=l.return;if(G1(l),l===o){Et=null;break e}if(d!==null){d.return=m,Et=d;break e}Et=m}}}var nj={getCacheForType:function(t){var i=$t(pt),o=i.data.get(t);return o===void 0&&(o=t(),i.data.set(t,o)),o},cacheSignal:function(){return $t(pt).controller.signal}},ij=typeof WeakMap=="function"?WeakMap:Map,_e=0,Xe=null,je=null,ke=0,Ve=0,mn=null,tr=!1,Oa=!1,vh=!1,ki=0,at=0,nr=0,Ur=0,wh=0,pn=0,Da=0,ys=null,Wt=null,Sh=!1,Tc=0,nx=0,jc=1/0,Ec=null,ir=null,St=0,rr=null,_a=null,Ri=0,Ch=0,Th=null,ix=null,xs=0,jh=null;function gn(){return(_e&2)!==0&&ke!==0?ke&-ke:B.T!==null?Mh():bg()}function rx(){if(pn===0)if((ke&536870912)===0||$e){var t=Dl;Dl<<=1,(Dl&3932160)===0&&(Dl=262144),pn=t}else pn=536870912;return t=fn.current,t!==null&&(t.flags|=32),pn}function en(t,i,o){(t===Xe&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)&&(La(t,0),ar(t,ke,pn,!1)),Uo(t,o),((_e&2)===0||t!==Xe)&&(t===Xe&&((_e&2)===0&&(Ur|=o),at===4&&ar(t,ke,pn,!1)),ii(t))}function ax(t,i,o){if((_e&6)!==0)throw Error(a(327));var l=!o&&(i&127)===0&&(i&t.expiredLanes)===0||Bo(t,i),d=l?oj(t,i):Ah(t,i,!0),m=l;do{if(d===0){Oa&&!l&&ar(t,i,0,!1);break}else{if(o=t.current.alternate,m&&!rj(o)){d=Ah(t,i,!1),m=!1;continue}if(d===2){if(m=i,t.errorRecoveryDisabledLanes&m)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var T=t;d=ys;var M=T.current.memoizedState.isDehydrated;if(M&&(La(T,b).flags|=256),b=Ah(T,b,!1),b!==2){if(vh&&!M){T.errorRecoveryDisabledLanes|=m,Ur|=m,d=4;break e}m=Wt,Wt=d,m!==null&&(Wt===null?Wt=m:Wt.push.apply(Wt,m))}d=b}if(m=!1,d!==2)continue}}if(d===1){La(t,0),ar(t,i,0,!0);break}e:{switch(l=t,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ar(l,i,pn,!tr);break e;case 2:Wt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=Tc+300-Tt(),10<d)){if(ar(l,i,pn,!tr),Ll(l,0,!0)!==0)break e;Ri=i,l.timeoutHandle=Lx(ox.bind(null,l,o,Wt,Ec,Sh,i,pn,Ur,Da,tr,m,"Throttled",-0,0),d);break e}ox(l,o,Wt,Ec,Sh,i,pn,Ur,Da,tr,m,null,-0,0)}}break}while(!0);ii(t)}function ox(t,i,o,l,d,m,b,T,M,F,X,W,q,Y){if(t.timeoutHandle=-1,W=i.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mi},J1(i,m,W);var ue=(m&62914560)===m?Tc-Tt():(m&4194048)===m?nx-Tt():0;if(ue=Hj(W,ue),ue!==null){Ri=m,t.cancelPendingCommit=ue(mx.bind(null,t,i,m,o,l,d,b,T,M,X,W,null,q,Y)),ar(t,m,b,!F);return}}mx(t,i,m,o,l,d,b,T,M)}function rj(t){for(var i=t;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var d=o[l],m=d.getSnapshot;d=d.value;try{if(!un(m(),d))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i,o,l){i&=~wh,i&=~Ur,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var d=i;0<d;){var m=31-cn(d),b=1<<m;l[m]=-1,d&=~b}o!==0&&gg(t,o,i)}function Ac(){return(_e&6)===0?(bs(0),!1):!0}function Eh(){if(je!==null){if(Ve===0)var t=je.return;else t=je,xi=zr=null,Hf(t),Ea=null,ts=0,t=je;for(;t!==null;)N1(t.alternate,t),t=t.return;je=null}}function La(t,i){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,Tj(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Ri=0,Eh(),Xe=t,je=o=gi(t.current,null),ke=i,Ve=0,mn=null,tr=!1,Oa=Bo(t,i),vh=!1,Da=pn=wh=Ur=nr=at=0,Wt=ys=null,Sh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var d=31-cn(l),m=1<<d;i|=t[d],l&=~m}return ki=i,Xl(),o}function sx(t,i){we=null,B.H=cs,i===ja||i===nc?(i=Cy(),Ve=3):i===zf?(i=Cy(),Ve=4):Ve=i===rh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,je===null&&(at=1,gc(t,En(i,t.current)))}function lx(){var t=fn.current;return t===null?!0:(ke&4194048)===ke?zn===null:(ke&62914560)===ke||(ke&536870912)!==0?t===zn:!1}function cx(){var t=B.H;return B.H=cs,t===null?cs:t}function ux(){var t=B.A;return B.A=nj,t}function kc(){at=4,tr||(ke&4194048)!==ke&&fn.current!==null||(Oa=!0),(nr&134217727)===0&&(Ur&134217727)===0||Xe===null||ar(Xe,ke,pn,!1)}function Ah(t,i,o){var l=_e;_e|=2;var d=cx(),m=ux();(Xe!==t||ke!==i)&&(Ec=null,La(t,i)),i=!1;var b=at;e:do try{if(Ve!==0&&je!==null){var T=je,M=mn;switch(Ve){case 8:Eh(),b=6;break e;case 3:case 2:case 9:case 6:fn.current===null&&(i=!0);var F=Ve;if(Ve=0,mn=null,Na(t,T,M,F),o&&Oa){b=0;break e}break;default:F=Ve,Ve=0,mn=null,Na(t,T,M,F)}}aj(),b=at;break}catch(X){sx(t,X)}while(!0);return i&&t.shellSuspendCounter++,xi=zr=null,_e=l,B.H=d,B.A=m,je===null&&(Xe=null,ke=0,Xl()),b}function aj(){for(;je!==null;)dx(je)}function oj(t,i){var o=_e;_e|=2;var l=cx(),d=ux();Xe!==t||ke!==i?(Ec=null,jc=Tt()+500,La(t,i)):Oa=Bo(t,i);e:do try{if(Ve!==0&&je!==null){i=je;var m=mn;t:switch(Ve){case 1:Ve=0,mn=null,Na(t,i,m,1);break;case 2:case 9:if(wy(m)){Ve=0,mn=null,fx(i);break}i=function(){Ve!==2&&Ve!==9||Xe!==t||(Ve=7),ii(t)},m.then(i,i);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:wy(m)?(Ve=0,mn=null,fx(i)):(Ve=0,mn=null,Na(t,i,m,7));break;case 5:var b=null;switch(je.tag){case 26:b=je.memoizedState;case 5:case 27:var T=je;if(b?Zx(b):T.stateNode.complete){Ve=0,mn=null;var M=T.sibling;if(M!==null)je=M;else{var F=T.return;F!==null?(je=F,Rc(F)):je=null}break t}}Ve=0,mn=null,Na(t,i,m,5);break;case 6:Ve=0,mn=null,Na(t,i,m,6);break;case 8:Eh(),at=6;break e;default:throw Error(a(462))}}sj();break}catch(X){sx(t,X)}while(!0);return xi=zr=null,B.H=l,B.A=d,_e=o,je!==null?0:(Xe=null,ke=0,Xl(),at)}function sj(){for(;je!==null&&!Je();)dx(je)}function dx(t){var i=_1(t.alternate,t,ki);t.memoizedProps=t.pendingProps,i===null?Rc(t):je=i}function fx(t){var i=t,o=i.alternate;switch(i.tag){case 15:case 0:i=R1(o,i,i.pendingProps,i.type,void 0,ke);break;case 11:i=R1(o,i,i.pendingProps,i.type.render,i.ref,ke);break;case 5:Hf(i);default:N1(o,i),i=je=uy(i,ki),i=_1(o,i,ki)}t.memoizedProps=t.pendingProps,i===null?Rc(t):je=i}function Na(t,i,o,l){xi=zr=null,Hf(i),Ea=null,ts=0;var d=i.return;try{if(Q3(t,d,i,o,ke)){at=1,gc(t,En(o,t.current)),je=null;return}}catch(m){if(d!==null)throw je=d,m;at=1,gc(t,En(o,t.current)),je=null;return}i.flags&32768?($e||l===1?t=!0:Oa||(ke&536870912)!==0?t=!1:(tr=t=!0,(l===2||l===9||l===3||l===6)&&(l=fn.current,l!==null&&l.tag===13&&(l.flags|=16384))),hx(i,t)):Rc(i)}function Rc(t){var i=t;do{if((i.flags&32768)!==0){hx(i,tr);return}t=i.return;var o=J3(i.alternate,i,ki);if(o!==null){je=o;return}if(i=i.sibling,i!==null){je=i;return}je=i=t}while(i!==null);at===0&&(at=5)}function hx(t,i){do{var o=W3(t.alternate,t);if(o!==null){o.flags&=32767,je=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(t=t.sibling,t!==null)){je=t;return}je=t=o}while(t!==null);at=6,je=null}function mx(t,i,o,l,d,m,b,T,M){t.cancelPendingCommit=null;do zc();while(St!==0);if((_e&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=pf,VT(t,o,m,b,T,M),t===Xe&&(je=Xe=null,ke=0),_a=i,rr=t,Ri=o,Ch=m,Th=d,ix=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dj(Sn,function(){return bx(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,d=Z.p,Z.p=2,b=_e,_e|=4;try{ej(t,i,o)}finally{_e=b,Z.p=d,B.T=l}}St=1,px(),gx(),yx()}}function px(){if(St===1){St=0;var t=rr,i=_a,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null;var l=Z.p;Z.p=2;var d=_e;_e|=4;try{Q1(i,t);var m=Uh,b=ty(t.containerInfo),T=m.focusedElem,M=m.selectionRange;if(b!==T&&T&&T.ownerDocument&&ey(T.ownerDocument.documentElement,T)){if(M!==null&&uf(T)){var F=M.start,X=M.end;if(X===void 0&&(X=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(X,T.value.length);else{var W=T.ownerDocument||document,q=W&&W.defaultView||window;if(q.getSelection){var Y=q.getSelection(),ue=T.textContent.length,xe=Math.min(M.start,ue),Ye=M.end===void 0?xe:Math.min(M.end,ue);!Y.extend&&xe>Ye&&(b=Ye,Ye=xe,xe=b);var U=Wg(T,xe),D=Wg(T,Ye);if(U&&D&&(Y.rangeCount!==1||Y.anchorNode!==U.node||Y.anchorOffset!==U.offset||Y.focusNode!==D.node||Y.focusOffset!==D.offset)){var H=W.createRange();H.setStart(U.node,U.offset),Y.removeAllRanges(),xe>Ye?(Y.addRange(H),Y.extend(D.node,D.offset)):(H.setEnd(D.node,D.offset),Y.addRange(H))}}}}for(W=[],Y=T;Y=Y.parentNode;)Y.nodeType===1&&W.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<W.length;T++){var J=W[T];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Hc=!!Bh,Uh=Bh=null}finally{_e=d,Z.p=l,B.T=o}}t.current=i,St=2}}function gx(){if(St===2){St=0;var t=rr,i=_a,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=B.T,B.T=null;var l=Z.p;Z.p=2;var d=_e;_e|=4;try{q1(t,i.alternate,i)}finally{_e=d,Z.p=l,B.T=o}}St=3}}function yx(){if(St===4||St===3){St=0,sn();var t=rr,i=_a,o=Ri,l=ix;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?St=5:(St=0,_a=rr=null,xx(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(ir=null),qd(o),i=i.stateNode,ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(No,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,d=Z.p,Z.p=2,B.T=null;try{for(var m=t.onRecoverableError,b=0;b<l.length;b++){var T=l[b];m(T.value,{componentStack:T.stack})}}finally{B.T=i,Z.p=d}}(Ri&3)!==0&&zc(),ii(t),d=t.pendingLanes,(o&261930)!==0&&(d&42)!==0?t===jh?xs++:(xs=0,jh=t):xs=0,bs(0)}}function xx(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Wo(i)))}function zc(){return px(),gx(),yx(),bx()}function bx(){if(St!==5)return!1;var t=rr,i=Ch;Ch=0;var o=qd(Ri),l=B.T,d=Z.p;try{Z.p=32>o?32:o,B.T=null,o=Th,Th=null;var m=rr,b=Ri;if(St=0,_a=rr=null,Ri=0,(_e&6)!==0)throw Error(a(331));var T=_e;if(_e|=4,ex(m.current),Z1(m,m.current,b,o),_e=T,bs(0,!1),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(No,m)}catch{}return!0}finally{Z.p=d,B.T=l,xx(t,i)}}function vx(t,i,o){i=En(o,i),i=ih(t.stateNode,i,2),t=Zi(t,i,2),t!==null&&(Uo(t,2),ii(t))}function Pe(t,i,o){if(t.tag===3)vx(t,t,o);else for(;i!==null;){if(i.tag===3){vx(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=En(o,t),o=w1(2),l=Zi(i,o,2),l!==null&&(S1(o,l,i,t),Uo(l,2),ii(l));break}}i=i.return}}function kh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new ij;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(vh=!0,d.add(o),t=lj.bind(null,t,i,o),i.then(t,t))}function lj(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,Xe===t&&(ke&o)===o&&(at===4||at===3&&(ke&62914560)===ke&&300>Tt()-Tc?(_e&2)===0&&La(t,0):wh|=o,Da===ke&&(Da=0)),ii(t)}function wx(t,i){i===0&&(i=pg()),t=Ar(t,i),t!==null&&(Uo(t,i),ii(t))}function cj(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),wx(t,o)}function uj(t,i){var o=0;switch(t.tag){case 31:case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),wx(t,o)}function dj(t,i){return ra(t,i)}var Mc=null,Ba=null,Rh=!1,$c=!1,zh=!1,or=0;function ii(t){t!==Ba&&t.next===null&&(Ba===null?Mc=Ba=t:Ba=Ba.next=t),$c=!0,Rh||(Rh=!0,hj())}function bs(t,i){if(!zh&&$c){zh=!0;do for(var o=!1,l=Mc;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var b=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-cn(42|t)+1)-1,m&=d&~(b&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,jx(l,m))}else m=ke,m=Ll(l,l===Xe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Bo(l,m)||(o=!0,jx(l,m));l=l.next}while(o);zh=!1}}function fj(){Sx()}function Sx(){$c=Rh=!1;var t=0;or!==0&&Cj()&&(t=or);for(var i=Tt(),o=null,l=Mc;l!==null;){var d=l.next,m=Cx(l,i);m===0?(l.next=null,o===null?Mc=d:o.next=d,d===null&&(Ba=o)):(o=l,(t!==0||(m&3)!==0)&&($c=!0)),l=d}St!==0&&St!==5||bs(t),or!==0&&(or=0)}function Cx(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var b=31-cn(m),T=1<<b,M=d[b];M===-1?((T&o)===0||(T&l)!==0)&&(d[b]=UT(T,i)):M<=i&&(t.expiredLanes|=T),m&=~T}if(i=Xe,o=ke,o=Ll(t,t===i?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,o===0||t===i&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Be(l),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Bo(t,o)){if(i=o&-o,i===t.callbackPriority)return i;switch(l!==null&&Be(l),qd(o)){case 2:case 8:o=wn;break;case 32:o=Sn;break;case 268435456:o=mg;break;default:o=Sn}return l=Tx.bind(null,t),o=ra(o,l),t.callbackPriority=i,t.callbackNode=o,i}return l!==null&&l!==null&&Be(l),t.callbackPriority=2,t.callbackNode=null,2}function Tx(t,i){if(St!==0&&St!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(zc()&&t.callbackNode!==o)return null;var l=ke;return l=Ll(t,t===Xe?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(ax(t,l,i),Cx(t,Tt()),t.callbackNode!=null&&t.callbackNode===o?Tx.bind(null,t):null)}function jx(t,i){if(zc())return null;ax(t,i,!0)}function hj(){jj(function(){(_e&6)!==0?ra(fi,fj):Sx()})}function Mh(){if(or===0){var t=Ca;t===0&&(t=Ol,Ol<<=1,(Ol&261888)===0&&(Ol=256)),or=t}return or}function Ex(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vl(""+t)}function Ax(t,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,t.id&&o.setAttribute("form",t.id),i.parentNode.insertBefore(o,i),t=new FormData(t),o.parentNode.removeChild(o),t}function mj(t,i,o,l,d){if(i==="submit"&&o&&o.stateNode===d){var m=Ex((d[Xt]||null).action),b=l.submitter;b&&(i=(i=b[Xt]||null)?Ex(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var T=new ql("action","action",null,l,d);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(or!==0){var M=b?Ax(d,b):new FormData(d);Zf(o,{pending:!0,data:M,method:d.method,action:m},null,M)}}else typeof m=="function"&&(T.preventDefault(),M=b?Ax(d,b):new FormData(d),Zf(o,{pending:!0,data:M,method:d.method,action:m},m,M))},currentTarget:d}]})}}for(var $h=0;$h<mf.length;$h++){var Oh=mf[$h],pj=Oh.toLowerCase(),gj=Oh[0].toUpperCase()+Oh.slice(1);Gn(pj,"on"+gj)}Gn(ry,"onAnimationEnd"),Gn(ay,"onAnimationIteration"),Gn(oy,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn($3,"onTransitionRun"),Gn(O3,"onTransitionStart"),Gn(D3,"onTransitionCancel"),Gn(sy,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yj=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vs));function kx(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var T=l[b],M=T.instance,F=T.currentTarget;if(T=T.listener,M!==m&&d.isPropagationStopped())break e;m=T,d.currentTarget=F;try{m(d)}catch(X){Kl(X)}d.currentTarget=null,m=M}else for(b=0;b<l.length;b++){if(T=l[b],M=T.instance,F=T.currentTarget,T=T.listener,M!==m&&d.isPropagationStopped())break e;m=T,d.currentTarget=F;try{m(d)}catch(X){Kl(X)}d.currentTarget=null,m=M}}}}function Ee(t,i){var o=i[Gd];o===void 0&&(o=i[Gd]=new Set);var l=t+"__bubble";o.has(l)||(Rx(i,t,2,!1),o.add(l))}function Dh(t,i,o){var l=0;i&&(l|=4),Rx(o,t,l,i)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function _h(t){if(!t[Oc]){t[Oc]=!0,Sg.forEach(function(o){o!=="selectionchange"&&(yj.has(o)||Dh(o,!1,t),Dh(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Oc]||(i[Oc]=!0,Dh("selectionchange",!1,i))}}function Rx(t,i,o,l){switch(rb(i)){case 2:var d=Gj;break;case 8:d=Yj;break;default:d=Ih}o=d.bind(null,i,o,t),d=void 0,!ef||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Lh(t,i,o,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var T=l.stateNode.containerInfo;if(T===d)break;if(b===4)for(b=l.return;b!==null;){var M=b.tag;if((M===3||M===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;T!==null;){if(b=oa(T),b===null)return;if(M=b.tag,M===5||M===6||M===26||M===27){l=m=b;continue e}T=T.parentNode}}l=l.return}Dg(function(){var F=m,X=Jd(o),W=[];e:{var q=ly.get(t);if(q!==void 0){var Y=ql,ue=t;switch(t){case"keypress":if(Hl(o)===0)break e;case"keydown":case"keyup":Y=u3;break;case"focusin":ue="focus",Y=af;break;case"focusout":ue="blur",Y=af;break;case"beforeblur":case"afterblur":Y=af;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=JT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=h3;break;case ry:case ay:case oy:Y=t3;break;case sy:Y=p3;break;case"scroll":case"scrollend":Y=IT;break;case"wheel":Y=y3;break;case"copy":case"cut":case"paste":Y=i3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Ug;break;case"toggle":case"beforetoggle":Y=b3}var xe=(i&4)!==0,Ye=!xe&&(t==="scroll"||t==="scrollend"),U=xe?q!==null?q+"Capture":null:q;xe=[];for(var D=F,H;D!==null;){var J=D;if(H=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||H===null||U===null||(J=Ho(D,U),J!=null&&xe.push(ws(D,J,H))),Ye)break;D=D.return}0<xe.length&&(q=new Y(q,ue,null,o,X),W.push({event:q,listeners:xe}))}}if((i&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",q&&o!==Zd&&(ue=o.relatedTarget||o.fromElement)&&(oa(ue)||ue[aa]))break e;if((Y||q)&&(q=X.window===X?X:(q=X.ownerDocument)?q.defaultView||q.parentWindow:window,Y?(ue=o.relatedTarget||o.toElement,Y=F,ue=ue?oa(ue):null,ue!==null&&(Ye=c(ue),xe=ue.tag,ue!==Ye||xe!==5&&xe!==27&&xe!==6)&&(ue=null)):(Y=null,ue=F),Y!==ue)){if(xe=Ng,J="onMouseLeave",U="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(xe=Ug,J="onPointerLeave",U="onPointerEnter",D="pointer"),Ye=Y==null?q:Po(Y),H=ue==null?q:Po(ue),q=new xe(J,D+"leave",Y,o,X),q.target=Ye,q.relatedTarget=H,J=null,oa(X)===F&&(xe=new xe(U,D+"enter",ue,o,X),xe.target=H,xe.relatedTarget=Ye,J=xe),Ye=J,Y&&ue)t:{for(xe=xj,U=Y,D=ue,H=0,J=U;J;J=xe(J))H++;J=0;for(var pe=D;pe;pe=xe(pe))J++;for(;0<H-J;)U=xe(U),H--;for(;0<J-H;)D=xe(D),J--;for(;H--;){if(U===D||D!==null&&U===D.alternate){xe=U;break t}U=xe(U),D=xe(D)}xe=null}else xe=null;Y!==null&&zx(W,q,Y,xe,!1),ue!==null&&Ye!==null&&zx(W,Ye,ue,xe,!0)}}e:{if(q=F?Po(F):window,Y=q.nodeName&&q.nodeName.toLowerCase(),Y==="select"||Y==="input"&&q.type==="file")var Oe=Kg;else if(Gg(q))if(Xg)Oe=R3;else{Oe=A3;var me=E3}else Y=q.nodeName,!Y||Y.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?F&&Id(F.elementType)&&(Oe=Kg):Oe=k3;if(Oe&&(Oe=Oe(t,F))){Yg(W,Oe,o,X);break e}me&&me(t,q,F),t==="focusout"&&F&&q.type==="number"&&F.memoizedProps.value!=null&&Qd(q,"number",q.value)}switch(me=F?Po(F):window,t){case"focusin":(Gg(me)||me.contentEditable==="true")&&(pa=me,df=F,Io=null);break;case"focusout":Io=df=pa=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,ny(W,o,X);break;case"selectionchange":if(M3)break;case"keydown":case"keyup":ny(W,o,X)}var Ce;if(sf)e:{switch(t){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else ma?Fg(t,o)&&(Re="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Re="onCompositionStart");Re&&(Vg&&o.locale!=="ko"&&(ma||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&ma&&(Ce=_g()):(qi=X,tf="value"in qi?qi.value:qi.textContent,ma=!0)),me=Dc(F,Re),0<me.length&&(Re=new Bg(Re,t,null,o,X),W.push({event:Re,listeners:me}),Ce?Re.data=Ce:(Ce=qg(o),Ce!==null&&(Re.data=Ce)))),(Ce=w3?S3(t,o):C3(t,o))&&(Re=Dc(F,"onBeforeInput"),0<Re.length&&(me=new Bg("onBeforeInput","beforeinput",null,o,X),W.push({event:me,listeners:Re}),me.data=Ce)),mj(W,t,F,o,X)}kx(W,i)})}function ws(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Dc(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Ho(t,o),d!=null&&l.unshift(ws(t,d,m)),d=Ho(t,i),d!=null&&l.push(ws(t,d,m))),t.tag===3)return l;t=t.return}return[]}function xj(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zx(t,i,o,l,d){for(var m=i._reactName,b=[];o!==null&&o!==l;){var T=o,M=T.alternate,F=T.stateNode;if(T=T.tag,M!==null&&M===l)break;T!==5&&T!==26&&T!==27||F===null||(M=F,d?(F=Ho(o,m),F!=null&&b.unshift(ws(o,F,M))):d||(F=Ho(o,m),F!=null&&b.push(ws(o,F,M)))),o=o.return}b.length!==0&&t.push({event:i,listeners:b})}var bj=/\r\n?/g,vj=/\u0000|\uFFFD/g;function Mx(t){return(typeof t=="string"?t:""+t).replace(bj,`
`).replace(vj,"")}function $x(t,i){return i=Mx(i),Mx(t)===i}function Ge(t,i,o,l,d,m){switch(o){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||da(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&da(t,""+l);break;case"className":Bl(t,"class",l);break;case"tabIndex":Bl(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Bl(t,o,l);break;case"style":$g(t,l,m);break;case"data":if(i!=="object"){Bl(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||o!=="href")){t.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(o);break}l=Vl(""+l),t.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(i!=="input"&&Ge(t,i,"name",d.name,d,null),Ge(t,i,"formEncType",d.formEncType,d,null),Ge(t,i,"formMethod",d.formMethod,d,null),Ge(t,i,"formTarget",d.formTarget,d,null)):(Ge(t,i,"encType",d.encType,d,null),Ge(t,i,"method",d.method,d,null),Ge(t,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(o);break}l=Vl(""+l),t.setAttribute(o,l);break;case"onClick":l!=null&&(t.onclick=mi);break;case"onScroll":l!=null&&Ee("scroll",t);break;case"onScrollEnd":l!=null&&Ee("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}o=Vl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,""+l):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":l===!0?t.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(o,l):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(o,l):t.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(o):t.setAttribute(o,l);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Nl(t,"popover",l);break;case"xlinkActuate":hi(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":hi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":hi(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":hi(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":hi(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":hi(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":hi(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":hi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":hi(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Nl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=XT.get(o)||o,Nl(t,o,l))}}function Nh(t,i,o,l,d,m){switch(o){case"style":$g(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"children":typeof l=="string"?da(t,l):(typeof l=="number"||typeof l=="bigint")&&da(t,""+l);break;case"onScroll":l!=null&&Ee("scroll",t);break;case"onScrollEnd":l!=null&&Ee("scrollend",t);break;case"onClick":l!=null&&(t.onclick=mi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cg.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),i=o.slice(2,d?o.length-7:void 0),m=t[Xt]||null,m=m!=null?m[o]:null,typeof m=="function"&&t.removeEventListener(i,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(i,l,d);break e}o in t?t[o]=l:l===!0?t.setAttribute(o,""):Nl(t,o,l)}}}function Dt(t,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var l=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(t,i,m,b,o,null)}}d&&Ge(t,i,"srcSet",o.srcSet,o,null),l&&Ge(t,i,"src",o.src,o,null);return;case"input":Ee("invalid",t);var T=m=b=d=null,M=null,F=null;for(l in o)if(o.hasOwnProperty(l)){var X=o[l];if(X!=null)switch(l){case"name":d=X;break;case"type":b=X;break;case"checked":M=X;break;case"defaultChecked":F=X;break;case"value":m=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,i));break;default:Ge(t,i,l,X,o,null)}}kg(t,m,T,M,F,b,d,!1);return;case"select":Ee("invalid",t),l=b=m=null;for(d in o)if(o.hasOwnProperty(d)&&(T=o[d],T!=null))switch(d){case"value":m=T;break;case"defaultValue":b=T;break;case"multiple":l=T;default:Ge(t,i,d,T,o,null)}i=m,o=b,t.multiple=!!l,i!=null?ua(t,!!l,i,!1):o!=null&&ua(t,!!l,o,!0);return;case"textarea":Ee("invalid",t),m=d=l=null;for(b in o)if(o.hasOwnProperty(b)&&(T=o[b],T!=null))switch(b){case"value":l=T;break;case"defaultValue":d=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ge(t,i,b,T,o,null)}zg(t,l,d,m);return;case"option":for(M in o)if(o.hasOwnProperty(M)&&(l=o[M],l!=null))switch(M){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ge(t,i,M,l,o,null)}return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(l=0;l<vs.length;l++)Ee(vs[l],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in o)if(o.hasOwnProperty(F)&&(l=o[F],l!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(t,i,F,l,o,null)}return;default:if(Id(i)){for(X in o)o.hasOwnProperty(X)&&(l=o[X],l!==void 0&&Nh(t,i,X,l,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(l=o[T],l!=null&&Ge(t,i,T,l,o,null))}function wj(t,i,o,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,T=null,M=null,F=null,X=null;for(Y in o){var W=o[Y];if(o.hasOwnProperty(Y)&&W!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":M=W;default:l.hasOwnProperty(Y)||Ge(t,i,Y,null,l,W)}}for(var q in l){var Y=l[q];if(W=o[q],l.hasOwnProperty(q)&&(Y!=null||W!=null))switch(q){case"type":m=Y;break;case"name":d=Y;break;case"checked":F=Y;break;case"defaultChecked":X=Y;break;case"value":b=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,i));break;default:Y!==W&&Ge(t,i,q,Y,l,W)}}Xd(t,b,T,M,F,X,m,d);return;case"select":Y=b=T=q=null;for(m in o)if(M=o[m],o.hasOwnProperty(m)&&M!=null)switch(m){case"value":break;case"multiple":Y=M;default:l.hasOwnProperty(m)||Ge(t,i,m,null,l,M)}for(d in l)if(m=l[d],M=o[d],l.hasOwnProperty(d)&&(m!=null||M!=null))switch(d){case"value":q=m;break;case"defaultValue":T=m;break;case"multiple":b=m;default:m!==M&&Ge(t,i,d,m,l,M)}i=T,o=b,l=Y,q!=null?ua(t,!!o,q,!1):!!l!=!!o&&(i!=null?ua(t,!!o,i,!0):ua(t,!!o,o?[]:"",!1));return;case"textarea":Y=q=null;for(T in o)if(d=o[T],o.hasOwnProperty(T)&&d!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(t,i,T,null,l,d)}for(b in l)if(d=l[b],m=o[b],l.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":q=d;break;case"defaultValue":Y=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&Ge(t,i,b,d,l,m)}Rg(t,q,Y);return;case"option":for(var ue in o)if(q=o[ue],o.hasOwnProperty(ue)&&q!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":t.selected=!1;break;default:Ge(t,i,ue,null,l,q)}for(M in l)if(q=l[M],Y=o[M],l.hasOwnProperty(M)&&q!==Y&&(q!=null||Y!=null))switch(M){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ge(t,i,M,q,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in o)q=o[xe],o.hasOwnProperty(xe)&&q!=null&&!l.hasOwnProperty(xe)&&Ge(t,i,xe,null,l,q);for(F in l)if(q=l[F],Y=o[F],l.hasOwnProperty(F)&&q!==Y&&(q!=null||Y!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,i));break;default:Ge(t,i,F,q,l,Y)}return;default:if(Id(i)){for(var Ye in o)q=o[Ye],o.hasOwnProperty(Ye)&&q!==void 0&&!l.hasOwnProperty(Ye)&&Nh(t,i,Ye,void 0,l,q);for(X in l)q=l[X],Y=o[X],!l.hasOwnProperty(X)||q===Y||q===void 0&&Y===void 0||Nh(t,i,X,q,l,Y);return}}for(var U in o)q=o[U],o.hasOwnProperty(U)&&q!=null&&!l.hasOwnProperty(U)&&Ge(t,i,U,null,l,q);for(W in l)q=l[W],Y=o[W],!l.hasOwnProperty(W)||q===Y||q==null&&Y==null||Ge(t,i,W,q,l,Y)}function Ox(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sj(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var d=o[l],m=d.transferSize,b=d.initiatorType,T=d.duration;if(m&&T&&Ox(b)){for(b=0,T=d.responseEnd,l+=1;l<o.length;l++){var M=o[l],F=M.startTime;if(F>T)break;var X=M.transferSize,W=M.initiatorType;X&&Ox(W)&&(M=M.responseEnd,b+=X*(M<T?1:(T-F)/(M-F)))}if(--l,i+=8*(m+b)/(d.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bh=null,Uh=null;function _c(t){return t.nodeType===9?t:t.ownerDocument}function Dx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _x(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Vh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ph=null;function Cj(){var t=window.event;return t&&t.type==="popstate"?t===Ph?!1:(Ph=t,!0):(Ph=null,!1)}var Lx=typeof setTimeout=="function"?setTimeout:void 0,Tj=typeof clearTimeout=="function"?clearTimeout:void 0,Nx=typeof Promise=="function"?Promise:void 0,jj=typeof queueMicrotask=="function"?queueMicrotask:typeof Nx<"u"?function(t){return Nx.resolve(null).then(t).catch(Ej)}:Lx;function Ej(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function Bx(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(l===0){t.removeChild(d),Ha(i);return}l--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")l++;else if(o==="html")Ss(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,Ss(o);for(var m=o.firstChild;m;){var b=m.nextSibling,T=m.nodeName;m[Vo]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=b}}else o==="body"&&Ss(t.ownerDocument.body);o=d}while(o);Ha(i)}function Ux(t,i){var o=t;t=0;do{var l=o.nextSibling;if(o.nodeType===1?i?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(i?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=l}while(o)}function Hh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Hh(o),Yd(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function Aj(t,i,o,l){for(;t.nodeType===1;){var d=o;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Vo])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Mn(t.nextSibling),t===null)break}return null}function kj(t,i,o){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Mn(t.nextSibling),t===null))return null;return t}function Vx(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Mn(t.nextSibling),t===null))return null;return t}function Fh(t){return t.data==="$?"||t.data==="$~"}function qh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Rj(t,i){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||o.readyState!=="loading")i();else{var l=function(){i(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Mn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Gh=null;function Px(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(i===0)return Mn(t.nextSibling);i--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||i++}t=t.nextSibling}return null}function Hx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(i===0)return t;i--}else o!=="/$"&&o!=="/&"||i++}t=t.previousSibling}return null}function Fx(t,i,o){switch(i=_c(o),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ss(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yd(t)}var $n=new Map,qx=new Set;function Lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var zi=Z.d;Z.d={f:zj,r:Mj,D:$j,C:Oj,L:Dj,m:_j,X:Nj,S:Lj,M:Bj};function zj(){var t=zi.f(),i=Ac();return t||i}function Mj(t){var i=sa(t);i!==null&&i.tag===5&&i.type==="form"?s1(i):zi.r(t)}var Ua=typeof document>"u"?null:document;function Gx(t,i,o){var l=Ua;if(l&&typeof i=="string"&&i){var d=Tn(i);d='link[rel="'+t+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),qx.has(d)||(qx.add(d),t={rel:t,crossOrigin:o,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),Dt(i,"link",t),jt(i),l.head.appendChild(i)))}}function $j(t){zi.D(t),Gx("dns-prefetch",t,null)}function Oj(t,i){zi.C(t,i),Gx("preconnect",t,i)}function Dj(t,i,o){zi.L(t,i,o);var l=Ua;if(l&&t&&i){var d='link[rel="preload"][as="'+Tn(i)+'"]';i==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Tn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Tn(o.imageSizes)+'"]')):d+='[href="'+Tn(t)+'"]';var m=d;switch(i){case"style":m=Va(t);break;case"script":m=Pa(t)}$n.has(m)||(t=x({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:t,as:i},o),$n.set(m,t),l.querySelector(d)!==null||i==="style"&&l.querySelector(Cs(m))||i==="script"&&l.querySelector(Ts(m))||(i=l.createElement("link"),Dt(i,"link",t),jt(i),l.head.appendChild(i)))}}function _j(t,i){zi.m(t,i);var o=Ua;if(o&&t){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+Tn(l)+'"][href="'+Tn(t)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Pa(t)}if(!$n.has(m)&&(t=x({rel:"modulepreload",href:t},i),$n.set(m,t),o.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ts(m)))return}l=o.createElement("link"),Dt(l,"link",t),jt(l),o.head.appendChild(l)}}}function Lj(t,i,o){zi.S(t,i,o);var l=Ua;if(l&&t){var d=la(l).hoistableStyles,m=Va(t);i=i||"default";var b=d.get(m);if(!b){var T={loading:0,preload:null};if(b=l.querySelector(Cs(m)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},o),(o=$n.get(m))&&Yh(t,o);var M=b=l.createElement("link");jt(M),Dt(M,"link",t),M._p=new Promise(function(F,X){M.onload=F,M.onerror=X}),M.addEventListener("load",function(){T.loading|=1}),M.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Nc(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:T},d.set(m,b)}}}function Nj(t,i){zi.X(t,i);var o=Ua;if(o&&t){var l=la(o).hoistableScripts,d=Pa(t),m=l.get(d);m||(m=o.querySelector(Ts(d)),m||(t=x({src:t,async:!0},i),(i=$n.get(d))&&Kh(t,i),m=o.createElement("script"),jt(m),Dt(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function Bj(t,i){zi.M(t,i);var o=Ua;if(o&&t){var l=la(o).hoistableScripts,d=Pa(t),m=l.get(d);m||(m=o.querySelector(Ts(d)),m||(t=x({src:t,async:!0,type:"module"},i),(i=$n.get(d))&&Kh(t,i),m=o.createElement("script"),jt(m),Dt(m,"link",t),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function Yx(t,i,o,l){var d=(d=ye.current)?Lc(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=Va(o.href),o=la(d).hoistableStyles,l=o.get(i),l||(l={type:"style",instance:null,count:0,state:null},o.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=Va(o.href);var m=la(d).hoistableStyles,b=m.get(t);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,b),(m=d.querySelector(Cs(t)))&&!m._p&&(b.instance=m,b.state.loading=5),$n.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},$n.set(t,o),m||Uj(d,t,o,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Pa(o),o=la(d).hoistableScripts,l=o.get(i),l||(l={type:"script",instance:null,count:0,state:null},o.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Va(t){return'href="'+Tn(t)+'"'}function Cs(t){return'link[rel="stylesheet"]['+t+"]"}function Kx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Uj(t,i,o,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dt(i,"link",o),jt(i),t.head.appendChild(i))}function Pa(t){return'[src="'+Tn(t)+'"]'}function Ts(t){return"script[async]"+t}function Xx(t,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Tn(o.href)+'"]');if(l)return i.instance=l,jt(l),l;var d=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),jt(l),Dt(l,"style",d),Nc(l,o.precedence,t),i.instance=l;case"stylesheet":d=Va(o.href);var m=t.querySelector(Cs(d));if(m)return i.state.loading|=4,i.instance=m,jt(m),m;l=Kx(o),(d=$n.get(d))&&Yh(l,d),m=(t.ownerDocument||t).createElement("link"),jt(m);var b=m;return b._p=new Promise(function(T,M){b.onload=T,b.onerror=M}),Dt(m,"link",l),i.state.loading|=4,Nc(m,o.precedence,t),i.instance=m;case"script":return m=Pa(o.src),(d=t.querySelector(Ts(m)))?(i.instance=d,jt(d),d):(l=o,(d=$n.get(m))&&(l=x({},o),Kh(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),jt(d),Dt(d,"link",l),t.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Nc(l,o.precedence,t));return i.instance}function Nc(t,i,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,b=0;b<l.length;b++){var T=l[b];if(T.dataset.precedence===i)m=T;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(t,i.firstChild))}function Yh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Kh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Bc=null;function Qx(t,i,o){if(Bc===null){var l=new Map,d=Bc=new Map;d.set(o,l)}else d=Bc,l=d.get(o),l||(l=new Map,d.set(o,l));if(l.has(t))return l;for(l.set(t,null),o=o.getElementsByTagName(t),d=0;d<o.length;d++){var m=o[d];if(!(m[Vo]||m[zt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=t+b;var T=l.get(b);T?T.push(m):l.set(b,[m])}}return l}function Ix(t,i,o){t=t.ownerDocument||t,t.head.insertBefore(o,i==="title"?t.querySelector("head > title"):null)}function Vj(t,i,o){if(o===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Zx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Pj(t,i,o,l){if(o.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=Va(l.href),m=i.querySelector(Cs(d));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Uc.bind(t),i.then(t,t)),o.state.loading|=4,o.instance=m,jt(m);return}m=i.ownerDocument||i,l=Kx(l),(d=$n.get(d))&&Yh(l,d),m=m.createElement("link"),jt(m);var b=m;b._p=new Promise(function(T,M){b.onload=T,b.onerror=M}),Dt(m,"link",l),o.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,i),(i=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Uc.bind(t),i.addEventListener("load",o),i.addEventListener("error",o))}}var Xh=0;function Hj(t,i){return t.stylesheets&&t.count===0&&Pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var l=setTimeout(function(){if(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Xh===0&&(Xh=62500*Sj());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Xh?50:800)+i);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function Pc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,i.forEach(Fj,t),Vc=null,Uc.call(t))}function Fj(t,i){if(!(i.state.loading&4)){var o=Vc.get(t);if(o)var l=o.get(null);else{o=new Map,Vc.set(t,o);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),l=b)}l&&o.set(null,l)}d=i.instance,b=d.getAttribute("data-precedence"),m=o.get(b)||l,m===l&&o.set(null,d),o.set(b,d),this.count++,l=Uc.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),i.state.loading|=4}}var js={$$typeof:$,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function qj(t,i,o,l,d,m,b,T,M){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hd(0),this.hiddenUpdates=Hd(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function Jx(t,i,o,l,d,m,b,T,M,F,X,W){return t=new qj(t,i,o,b,M,F,X,W,T),i=1,m===!0&&(i|=24),m=dn(3,null,null,i),t.current=m,m.stateNode=t,i=Af(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:o,cache:i},Mf(m),t}function Wx(t){return t?(t=xa,t):xa}function eb(t,i,o,l,d,m){d=Wx(d),l.context===null?l.context=d:l.pendingContext=d,l=Ii(i),l.payload={element:o},m=m===void 0?null:m,m!==null&&(l.callback=m),o=Zi(t,l,i),o!==null&&(en(o,t,i),is(o,t,i))}function tb(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Qh(t,i){tb(t,i),(t=t.alternate)&&tb(t,i)}function nb(t){if(t.tag===13||t.tag===31){var i=Ar(t,67108864);i!==null&&en(i,t,67108864),Qh(t,67108864)}}function ib(t){if(t.tag===13||t.tag===31){var i=gn();i=Fd(i);var o=Ar(t,i);o!==null&&en(o,t,i),Qh(t,i)}}var Hc=!0;function Gj(t,i,o,l){var d=B.T;B.T=null;var m=Z.p;try{Z.p=2,Ih(t,i,o,l)}finally{Z.p=m,B.T=d}}function Yj(t,i,o,l){var d=B.T;B.T=null;var m=Z.p;try{Z.p=8,Ih(t,i,o,l)}finally{Z.p=m,B.T=d}}function Ih(t,i,o,l){if(Hc){var d=Zh(l);if(d===null)Lh(t,i,l,Fc,o),ab(t,l);else if(Xj(d,t,i,o,l))l.stopPropagation();else if(ab(t,l),i&4&&-1<Kj.indexOf(t)){for(;d!==null;){var m=sa(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Sr(m.pendingLanes);if(b!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var M=1<<31-cn(b);T.entanglements[1]|=M,b&=~M}ii(m),(_e&6)===0&&(jc=Tt()+500,bs(0))}}break;case 31:case 13:T=Ar(m,2),T!==null&&en(T,m,2),Ac(),Qh(m,2)}if(m=Zh(l),m===null&&Lh(t,i,l,Fc,o),m===d)break;d=m}d!==null&&l.stopPropagation()}else Lh(t,i,l,null,o)}}function Zh(t){return t=Jd(t),Jh(t)}var Fc=null;function Jh(t){if(Fc=null,t=oa(t),t!==null){var i=c(t);if(i===null)t=null;else{var o=i.tag;if(o===13){if(t=u(i),t!==null)return t;t=null}else if(o===31){if(t=f(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Fc=t,null}function rb(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pi()){case fi:return 2;case wn:return 8;case Sn:case Lo:return 32;case mg:return 268435456;default:return 32}default:return 32}}var Wh=!1,lr=null,cr=null,ur=null,Es=new Map,As=new Map,dr=[],Kj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ab(t,i){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Es.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(i.pointerId)}}function ks(t,i,o,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=sa(i),i!==null&&nb(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Xj(t,i,o,l,d){switch(i){case"focusin":return lr=ks(lr,t,i,o,l,d),!0;case"dragenter":return cr=ks(cr,t,i,o,l,d),!0;case"mouseover":return ur=ks(ur,t,i,o,l,d),!0;case"pointerover":var m=d.pointerId;return Es.set(m,ks(Es.get(m)||null,t,i,o,l,d)),!0;case"gotpointercapture":return m=d.pointerId,As.set(m,ks(As.get(m)||null,t,i,o,l,d)),!0}return!1}function ob(t){var i=oa(t.target);if(i!==null){var o=c(i);if(o!==null){if(i=o.tag,i===13){if(i=u(o),i!==null){t.blockedOn=i,vg(t.priority,function(){ib(o)});return}}else if(i===31){if(i=f(o),i!==null){t.blockedOn=i,vg(t.priority,function(){ib(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Zh(t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Zd=l,o.target.dispatchEvent(l),Zd=null}else return i=sa(o),i!==null&&nb(i),t.blockedOn=o,!1;i.shift()}return!0}function sb(t,i,o){qc(t)&&o.delete(i)}function Qj(){Wh=!1,lr!==null&&qc(lr)&&(lr=null),cr!==null&&qc(cr)&&(cr=null),ur!==null&&qc(ur)&&(ur=null),Es.forEach(sb),As.forEach(sb)}function Gc(t,i){t.blockedOn===i&&(t.blockedOn=null,Wh||(Wh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Qj)))}var Yc=null;function lb(t){Yc!==t&&(Yc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var i=0;i<t.length;i+=3){var o=t[i],l=t[i+1],d=t[i+2];if(typeof l!="function"){if(Jh(l||o)===null)continue;break}var m=sa(o);m!==null&&(t.splice(i,3),i-=3,Zf(m,{pending:!0,data:d,method:o.method,action:l},l,d))}}))}function Ha(t){function i(M){return Gc(M,t)}lr!==null&&Gc(lr,t),cr!==null&&Gc(cr,t),ur!==null&&Gc(ur,t),Es.forEach(i),As.forEach(i);for(var o=0;o<dr.length;o++){var l=dr[o];l.blockedOn===t&&(l.blockedOn=null)}for(;0<dr.length&&(o=dr[0],o.blockedOn===null);)ob(o),o.blockedOn===null&&dr.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var d=o[l],m=o[l+1],b=d[Xt]||null;if(typeof m=="function")b||lb(o);else if(b){var T=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[Xt]||null)T=b.formAction;else if(Jh(d)!==null)continue}else T=b.action;typeof T=="function"?o[l+1]=T:(o.splice(l,3),l-=3),lb(o)}}}function cb(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return d=b})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function em(t){this._internalRoot=t}Kc.prototype.render=em.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,l=gn();eb(o,l,t,i,null,null)},Kc.prototype.unmount=em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;eb(t.current,2,null,t,null,null),Ac(),i[aa]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var i=bg();t={blockedOn:null,target:t,priority:i};for(var o=0;o<dr.length&&i!==0&&i<dr[o].priority;o++);dr.splice(o,0,t),o===0&&ob(t)}};var ub=n.version;if(ub!=="19.2.0")throw Error(a(527,ub,"19.2.0"));Z.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=g(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Ij={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{No=Xc.inject(Ij),ln=Xc}catch{}}return zs.createRoot=function(t,i){if(!s(t))throw Error(a(299));var o=!1,l="",d=y1,m=x1,b=b1;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Jx(t,1,!1,null,null,o,l,null,d,m,b,cb),t[aa]=i.current,_h(t),new em(i)},zs.hydrateRoot=function(t,i,o){if(!s(t))throw Error(a(299));var l=!1,d="",m=y1,b=x1,T=b1,M=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.formState!==void 0&&(M=o.formState)),i=Jx(t,1,!0,i,o??null,l,d,M,m,b,T,cb),i.context=Wx(null),o=i.current,l=gn(),l=Fd(l),d=Ii(l),d.callback=null,Zi(o,d,l),o=l,i.current.lanes=o,Uo(i,o),ii(i),t[aa]=i.current,_h(t),new Kc(i)},zs.version="19.2.0",zs}var vb;function sE(){if(vb)return im.exports;vb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),im.exports=oE(),im.exports}var lE=sE(),kt=function(){return kt=Object.assign||function(n){for(var r,a=1,s=arguments.length;a<s;a++){r=arguments[a];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(n[c]=r[c])}return n},kt.apply(this,arguments)};function oo(e,n,r){if(r||arguments.length===2)for(var a=0,s=n.length,c;a<s;a++)(c||!(a in n))&&(c||(c=Array.prototype.slice.call(n,0,a)),c[a]=n[a]);return e.concat(c||Array.prototype.slice.call(n))}var Ze="-ms-",qs="-moz-",Ue="-webkit-",Hw="comm",rd="rule",Zp="decl",cE="@import",Fw="@keyframes",uE="@layer",qw=Math.abs,Jp=String.fromCharCode,np=Object.assign;function dE(e,n){return At(e,0)^45?(((n<<2^At(e,0))<<2^At(e,1))<<2^At(e,2))<<2^At(e,3):0}function Gw(e){return e.trim()}function Oi(e,n){return(e=n.exec(e))?e[0]:e}function Te(e,n,r){return e.replace(n,r)}function Su(e,n,r){return e.indexOf(n,r)}function At(e,n){return e.charCodeAt(n)|0}function so(e,n,r){return e.slice(n,r)}function oi(e){return e.length}function Yw(e){return e.length}function Us(e,n){return n.push(e),e}function fE(e,n){return e.map(n).join("")}function wb(e,n){return e.filter(function(r){return!Oi(r,n)})}var ad=1,lo=1,Kw=0,Un=0,vt=0,vo="";function od(e,n,r,a,s,c,u,f){return{value:e,root:n,parent:r,type:a,props:s,children:c,line:ad,column:lo,length:u,return:"",siblings:f}}function hr(e,n){return np(od("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Fa(e){for(;e.root;)e=hr(e.root,{children:[e]});Us(e,e.siblings)}function hE(){return vt}function mE(){return vt=Un>0?At(vo,--Un):0,lo--,vt===10&&(lo=1,ad--),vt}function Zn(){return vt=Un<Kw?At(vo,Un++):0,lo++,vt===10&&(lo=1,ad++),vt}function Qr(){return At(vo,Un)}function Cu(){return Un}function sd(e,n){return so(vo,e,n)}function ip(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pE(e){return ad=lo=1,Kw=oi(vo=e),Un=0,[]}function gE(e){return vo="",e}function sm(e){return Gw(sd(Un-1,rp(e===91?e+2:e===40?e+1:e)))}function yE(e){for(;(vt=Qr())&&vt<33;)Zn();return ip(e)>2||ip(vt)>3?"":" "}function xE(e,n){for(;--n&&Zn()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return sd(e,Cu()+(n<6&&Qr()==32&&Zn()==32))}function rp(e){for(;Zn();)switch(vt){case e:return Un;case 34:case 39:e!==34&&e!==39&&rp(vt);break;case 40:e===41&&rp(e);break;case 92:Zn();break}return Un}function bE(e,n){for(;Zn()&&e+vt!==57;)if(e+vt===84&&Qr()===47)break;return"/*"+sd(n,Un-1)+"*"+Jp(e===47?e:Zn())}function vE(e){for(;!ip(Qr());)Zn();return sd(e,Un)}function wE(e){return gE(Tu("",null,null,null,[""],e=pE(e),0,[0],e))}function Tu(e,n,r,a,s,c,u,f,p){for(var g=0,y=0,x=u,v=0,C=0,w=0,S=1,A=1,R=1,O=0,$="",N=s,P=c,_=a,L=$;A;)switch(w=O,O=Zn()){case 40:if(w!=108&&At(L,x-1)==58){Su(L+=Te(sm(O),"&","&\f"),"&\f",qw(g?f[g-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:L+=sm(O);break;case 9:case 10:case 13:case 32:L+=yE(w);break;case 92:L+=xE(Cu()-1,7);continue;case 47:switch(Qr()){case 42:case 47:Us(SE(bE(Zn(),Cu()),n,r,p),p);break;default:L+="/"}break;case 123*S:f[g++]=oi(L)*R;case 125*S:case 59:case 0:switch(O){case 0:case 125:A=0;case 59+y:R==-1&&(L=Te(L,/\f/g,"")),C>0&&oi(L)-x&&Us(C>32?Cb(L+";",a,r,x-1,p):Cb(Te(L," ","")+";",a,r,x-2,p),p);break;case 59:L+=";";default:if(Us(_=Sb(L,n,r,g,y,s,f,$,N=[],P=[],x,c),c),O===123)if(y===0)Tu(L,n,_,_,N,c,x,f,P);else switch(v===99&&At(L,3)===110?100:v){case 100:case 108:case 109:case 115:Tu(e,_,_,a&&Us(Sb(e,_,_,0,0,s,f,$,s,N=[],x,P),P),s,P,x,f,a?N:P);break;default:Tu(L,_,_,_,[""],P,0,f,P)}}g=y=C=0,S=R=1,$=L="",x=u;break;case 58:x=1+oi(L),C=w;default:if(S<1){if(O==123)--S;else if(O==125&&S++==0&&mE()==125)continue}switch(L+=Jp(O),O*S){case 38:R=y>0?1:(L+="\f",-1);break;case 44:f[g++]=(oi(L)-1)*R,R=1;break;case 64:Qr()===45&&(L+=sm(Zn())),v=Qr(),y=x=oi($=L+=vE(Cu())),O++;break;case 45:w===45&&oi(L)==2&&(S=0)}}return c}function Sb(e,n,r,a,s,c,u,f,p,g,y,x){for(var v=s-1,C=s===0?c:[""],w=Yw(C),S=0,A=0,R=0;S<a;++S)for(var O=0,$=so(e,v+1,v=qw(A=u[S])),N=e;O<w;++O)(N=Gw(A>0?C[O]+" "+$:Te($,/&\f/g,C[O])))&&(p[R++]=N);return od(e,n,r,s===0?rd:f,p,g,y,x)}function SE(e,n,r,a){return od(e,n,r,Hw,Jp(hE()),so(e,2,-2),0,a)}function Cb(e,n,r,a,s){return od(e,n,r,Zp,so(e,0,a),so(e,a+1,-1),a,s)}function Xw(e,n,r){switch(dE(e,n)){case 5103:return Ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ue+e+e;case 4789:return qs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ue+e+qs+e+Ze+e+e;case 5936:switch(At(e,n+11)){case 114:return Ue+e+Ze+Te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ue+e+Ze+Te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ue+e+Ze+Te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ue+e+Ze+e+e;case 6165:return Ue+e+Ze+"flex-"+e+e;case 5187:return Ue+e+Te(e,/(\w+).+(:[^]+)/,Ue+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return Ue+e+Ze+"flex-item-"+Te(e,/flex-|-self/g,"")+(Oi(e,/flex-|baseline/)?"":Ze+"grid-row-"+Te(e,/flex-|-self/g,""))+e;case 4675:return Ue+e+Ze+"flex-line-pack"+Te(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ue+e+Ze+Te(e,"shrink","negative")+e;case 5292:return Ue+e+Ze+Te(e,"basis","preferred-size")+e;case 6060:return Ue+"box-"+Te(e,"-grow","")+Ue+e+Ze+Te(e,"grow","positive")+e;case 4554:return Ue+Te(e,/([^-])(transform)/g,"$1"+Ue+"$2")+e;case 6187:return Te(Te(Te(e,/(zoom-|grab)/,Ue+"$1"),/(image-set)/,Ue+"$1"),e,"")+e;case 5495:case 3959:return Te(e,/(image-set\([^]*)/,Ue+"$1$`$1");case 4968:return Te(Te(e,/(.+:)(flex-)?(.*)/,Ue+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ue+e+e;case 4200:if(!Oi(e,/flex-|baseline/))return Ze+"grid-column-align"+so(e,n)+e;break;case 2592:case 3360:return Ze+Te(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(a,s){return n=s,Oi(a.props,/grid-\w+-end/)})?~Su(e+(r=r[n].value),"span",0)?e:Ze+Te(e,"-start","")+e+Ze+"grid-row-span:"+(~Su(r,"span",0)?Oi(r,/\d+/):+Oi(r,/\d+/)-+Oi(e,/\d+/))+";":Ze+Te(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(a){return Oi(a.props,/grid-\w+-start/)})?e:Ze+Te(Te(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Te(e,/(.+)-inline(.+)/,Ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oi(e)-1-n>6)switch(At(e,n+1)){case 109:if(At(e,n+4)!==45)break;case 102:return Te(e,/(.+:)(.+)-([^]+)/,"$1"+Ue+"$2-$3$1"+qs+(At(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~Su(e,"stretch",0)?Xw(Te(e,"stretch","fill-available"),n,r)+e:e}break;case 5152:case 5920:return Te(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,s,c,u,f,p,g){return Ze+s+":"+c+g+(u?Ze+s+"-span:"+(f?p:+p-+c)+g:"")+e});case 4949:if(At(e,n+6)===121)return Te(e,":",":"+Ue)+e;break;case 6444:switch(At(e,At(e,14)===45?18:11)){case 120:return Te(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ue+(At(e,14)===45?"inline-":"")+"box$3$1"+Ue+"$2$3$1"+Ze+"$2box$3")+e;case 100:return Te(e,":",":"+Ze)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Te(e,"scroll-","scroll-snap-")+e}return e}function Vu(e,n){for(var r="",a=0;a<e.length;a++)r+=n(e[a],a,e,n)||"";return r}function CE(e,n,r,a){switch(e.type){case uE:if(e.children.length)break;case cE:case Zp:return e.return=e.return||e.value;case Hw:return"";case Fw:return e.return=e.value+"{"+Vu(e.children,a)+"}";case rd:if(!oi(e.value=e.props.join(",")))return""}return oi(r=Vu(e.children,a))?e.return=e.value+"{"+r+"}":""}function TE(e){var n=Yw(e);return function(r,a,s,c){for(var u="",f=0;f<n;f++)u+=e[f](r,a,s,c)||"";return u}}function jE(e){return function(n){n.root||(n=n.return)&&e(n)}}function EE(e,n,r,a){if(e.length>-1&&!e.return)switch(e.type){case Zp:e.return=Xw(e.value,e.length,r);return;case Fw:return Vu([hr(e,{value:Te(e.value,"@","@"+Ue)})],a);case rd:if(e.length)return fE(r=e.props,function(s){switch(Oi(s,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fa(hr(e,{props:[Te(s,/:(read-\w+)/,":"+qs+"$1")]})),Fa(hr(e,{props:[s]})),np(e,{props:wb(r,a)});break;case"::placeholder":Fa(hr(e,{props:[Te(s,/:(plac\w+)/,":"+Ue+"input-$1")]})),Fa(hr(e,{props:[Te(s,/:(plac\w+)/,":"+qs+"$1")]})),Fa(hr(e,{props:[Te(s,/:(plac\w+)/,Ze+"input-$1")]})),Fa(hr(e,{props:[s]})),np(e,{props:wb(r,a)});break}return""})}}var AE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yn={},co=typeof process<"u"&&yn!==void 0&&(yn.REACT_APP_SC_ATTR||yn.SC_ATTR)||"data-styled",Qw="active",Iw="data-styled-version",ld="6.1.19",Wp=`/*!sc*/
`,Pu=typeof window<"u"&&typeof document<"u",kE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yn!==void 0&&yn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yn.REACT_APP_SC_DISABLE_SPEEDY!==""?yn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yn!==void 0&&yn.SC_DISABLE_SPEEDY!==void 0&&yn.SC_DISABLE_SPEEDY!==""&&yn.SC_DISABLE_SPEEDY!=="false"&&yn.SC_DISABLE_SPEEDY),RE={},cd=Object.freeze([]),uo=Object.freeze({});function Zw(e,n,r){return r===void 0&&(r=uo),e.theme!==r.theme&&e.theme||n||r.theme}var Jw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ME=/(^-|-$)/g;function Tb(e){return e.replace(zE,"-").replace(ME,"")}var $E=/(a)(d)/gi,Qc=52,jb=function(e){return String.fromCharCode(e+(e>25?39:97))};function ap(e){var n,r="";for(n=Math.abs(e);n>Qc;n=n/Qc|0)r=jb(n%Qc)+r;return(jb(n%Qc)+r).replace($E,"$1-$2")}var lm,Ww=5381,Za=function(e,n){for(var r=n.length;r;)e=33*e^n.charCodeAt(--r);return e},eS=function(e){return Za(Ww,e)};function e0(e){return ap(eS(e)>>>0)}function OE(e){return e.displayName||e.name||"Component"}function cm(e){return typeof e=="string"&&!0}var tS=typeof Symbol=="function"&&Symbol.for,nS=tS?Symbol.for("react.memo"):60115,DE=tS?Symbol.for("react.forward_ref"):60112,_E={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},iS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},NE=((lm={})[DE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lm[nS]=iS,lm);function Eb(e){return("type"in(n=e)&&n.type.$$typeof)===nS?iS:"$$typeof"in e?NE[e.$$typeof]:_E;var n}var BE=Object.defineProperty,UE=Object.getOwnPropertyNames,Ab=Object.getOwnPropertySymbols,VE=Object.getOwnPropertyDescriptor,PE=Object.getPrototypeOf,kb=Object.prototype;function rS(e,n,r){if(typeof n!="string"){if(kb){var a=PE(n);a&&a!==kb&&rS(e,a,r)}var s=UE(n);Ab&&(s=s.concat(Ab(n)));for(var c=Eb(e),u=Eb(n),f=0;f<s.length;++f){var p=s[f];if(!(p in LE||r&&r[p]||u&&p in u||c&&p in c)){var g=VE(n,p);try{BE(e,p,g)}catch{}}}}return e}function ea(e){return typeof e=="function"}function t0(e){return typeof e=="object"&&"styledComponentId"in e}function qr(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Hu(e,n){if(e.length===0)return"";for(var r=e[0],a=1;a<e.length;a++)r+=e[a];return r}function Js(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function op(e,n,r){if(r===void 0&&(r=!1),!r&&!Js(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var a=0;a<n.length;a++)e[a]=op(e[a],n[a]);else if(Js(n))for(var a in n)e[a]=op(e[a],n[a]);return e}function n0(e,n){Object.defineProperty(e,"toString",{value:n})}function ta(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var HE=(function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},e.prototype.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,s=a.length,c=s;n>=c;)if((c<<=1)<0)throw ta(16,"".concat(n));this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var u=s;u<c;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(n+1),p=(u=0,r.length);u<p;u++)this.tag.insertRule(f,r[u])&&(this.groupSizes[n]++,f++)},e.prototype.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),s=a+r;this.groupSizes[n]=0;for(var c=a;c<s;c++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],s=this.indexOfGroup(n),c=s+a,u=s;u<c;u++)r+="".concat(this.tag.getRule(u)).concat(Wp);return r},e})(),ju=new Map,Fu=new Map,Eu=1,Ic=function(e){if(ju.has(e))return ju.get(e);for(;Fu.has(Eu);)Eu++;var n=Eu++;return ju.set(e,n),Fu.set(n,e),n},FE=function(e,n){Eu=n+1,ju.set(e,n),Fu.set(n,e)},qE="style[".concat(co,"][").concat(Iw,'="').concat(ld,'"]'),GE=new RegExp("^".concat(co,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YE=function(e,n,r){for(var a,s=r.split(","),c=0,u=s.length;c<u;c++)(a=s[c])&&e.registerName(n,a)},KE=function(e,n){for(var r,a=((r=n.textContent)!==null&&r!==void 0?r:"").split(Wp),s=[],c=0,u=a.length;c<u;c++){var f=a[c].trim();if(f){var p=f.match(GE);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(FE(y,g),YE(e,y,p[3]),e.getTag().insertRules(g,s)),s.length=0}else s.push(f)}}},Rb=function(e){for(var n=document.querySelectorAll(qE),r=0,a=n.length;r<a;r++){var s=n[r];s&&s.getAttribute(co)!==Qw&&(KE(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function XE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var aS=function(e){var n=document.head,r=e||n,a=document.createElement("style"),s=(function(f){var p=Array.from(f.querySelectorAll("style[".concat(co,"]")));return p[p.length-1]})(r),c=s!==void 0?s.nextSibling:null;a.setAttribute(co,Qw),a.setAttribute(Iw,ld);var u=XE();return u&&a.setAttribute("nonce",u),r.insertBefore(a,c),a},QE=(function(){function e(n){this.element=aS(n),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,s=0,c=a.length;s<c;s++){var u=a[s];if(u.ownerNode===r)return u}throw ta(17)})(this.element),this.length=0}return e.prototype.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var r=this.sheet.cssRules[n];return r&&r.cssText?r.cssText:""},e})(),IE=(function(){function e(n){this.element=aS(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e})(),ZE=(function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e})(),zb=Pu,JE={isServer:!Pu,useCSSOMInjection:!kE},qu=(function(){function e(n,r,a){n===void 0&&(n=uo),r===void 0&&(r={});var s=this;this.options=kt(kt({},JE),n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Pu&&zb&&(zb=!1,Rb(this)),n0(this,function(){return(function(c){for(var u=c.getTag(),f=u.length,p="",g=function(x){var v=(function(R){return Fu.get(R)})(x);if(v===void 0)return"continue";var C=c.names.get(v),w=u.getGroup(x);if(C===void 0||!C.size||w.length===0)return"continue";var S="".concat(co,".g").concat(x,'[id="').concat(v,'"]'),A="";C!==void 0&&C.forEach(function(R){R.length>0&&(A+="".concat(R,","))}),p+="".concat(w).concat(S,'{content:"').concat(A,'"}').concat(Wp)},y=0;y<f;y++)g(y);return p})(s)})}return e.registerId=function(n){return Ic(n)},e.prototype.rehydrate=function(){!this.server&&Pu&&Rb(this)},e.prototype.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(kt(kt({},this.options),n),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=(function(r){var a=r.useCSSOMInjection,s=r.target;return r.isServer?new ZE(s):a?new QE(s):new IE(s)})(this.options),new HE(n)));var n},e.prototype.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.prototype.registerName=function(n,r){if(Ic(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},e.prototype.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(Ic(n),a)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(Ic(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e})(),WE=/&/g,e4=/^\s*\/\/.*$/gm;function oS(e,n){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(n," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(n," ")),r.props=r.props.map(function(a){return"".concat(n," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=oS(r.children,n)),r})}function t4(e){var n,r,a,s=uo,c=s.options,u=c===void 0?uo:c,f=s.plugins,p=f===void 0?cd:f,g=function(v,C,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(n):v},y=p.slice();y.push(function(v){v.type===rd&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(WE,r).replace(a,g))}),u.prefix&&y.push(EE),y.push(CE);var x=function(v,C,w,S){C===void 0&&(C=""),w===void 0&&(w=""),S===void 0&&(S="&"),n=S,r=C,a=new RegExp("\\".concat(r,"\\b"),"g");var A=v.replace(e4,""),R=wE(w||C?"".concat(w," ").concat(C," { ").concat(A," }"):A);u.namespace&&(R=oS(R,u.namespace));var O=[];return Vu(R,TE(y.concat(jE(function($){return O.push($)})))),O};return x.hash=p.length?p.reduce(function(v,C){return C.name||ta(15),Za(v,C.name)},Ww).toString():"",x}var n4=new qu,sp=t4(),sS=Ln.createContext({shouldForwardProp:void 0,styleSheet:n4,stylis:sp});sS.Consumer;Ln.createContext(void 0);function lp(){return j.useContext(sS)}var lS=(function(){function e(n,r){var a=this;this.inject=function(s,c){c===void 0&&(c=sp);var u=a.name+c.hash;s.hasNameForId(a.id,u)||s.insertRules(a.id,u,c(a.rules,u,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=r,n0(this,function(){throw ta(12,String(a.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=sp),this.name+n.hash},e})(),i4=function(e){return e>="A"&&e<="Z"};function Mb(e){for(var n="",r=0;r<e.length;r++){var a=e[r];if(r===1&&a==="-"&&e[0]==="-")return e;i4(a)?n+="-"+a.toLowerCase():n+=a}return n.startsWith("ms-")?"-"+n:n}var cS=function(e){return e==null||e===!1||e===""},uS=function(e){var n,r,a=[];for(var s in e){var c=e[s];e.hasOwnProperty(s)&&!cS(c)&&(Array.isArray(c)&&c.isCss||ea(c)?a.push("".concat(Mb(s),":"),c,";"):Js(c)?a.push.apply(a,oo(oo(["".concat(s," {")],uS(c),!1),["}"],!1)):a.push("".concat(Mb(s),": ").concat((n=s,(r=c)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||n in AE||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function pr(e,n,r,a){if(cS(e))return[];if(t0(e))return[".".concat(e.styledComponentId)];if(ea(e)){if(!ea(c=e)||c.prototype&&c.prototype.isReactComponent||!n)return[e];var s=e(n);return pr(s,n,r,a)}var c;return e instanceof lS?r?(e.inject(r,a),[e.getName(a)]):[e]:Js(e)?uS(e):Array.isArray(e)?Array.prototype.concat.apply(cd,e.map(function(u){return pr(u,n,r,a)})):[e.toString()]}function dS(e){for(var n=0;n<e.length;n+=1){var r=e[n];if(ea(r)&&!t0(r))return!1}return!0}var r4=eS(ld),a4=(function(){function e(n,r,a){this.rules=n,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&dS(n),this.componentId=r,this.baseHash=Za(r4,r),this.baseStyle=a,qu.registerId(r)}return e.prototype.generateAndInjectStyles=function(n,r,a){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=qr(s,this.staticRulesId);else{var c=Hu(pr(this.rules,n,r,a)),u=ap(Za(this.baseHash,c)>>>0);if(!r.hasNameForId(this.componentId,u)){var f=a(c,".".concat(u),void 0,this.componentId);r.insertRules(this.componentId,u,f)}s=qr(s,u),this.staticRulesId=u}else{for(var p=Za(this.baseHash,a.hash),g="",y=0;y<this.rules.length;y++){var x=this.rules[y];if(typeof x=="string")g+=x;else if(x){var v=Hu(pr(x,n,r,a));p=Za(p,v+y),g+=v}}if(g){var C=ap(p>>>0);r.hasNameForId(this.componentId,C)||r.insertRules(this.componentId,C,a(g,".".concat(C),void 0,this.componentId)),s=qr(s,C)}}return s},e})(),Ws=Ln.createContext(void 0);Ws.Consumer;function o4(e){var n=Ln.useContext(Ws),r=j.useMemo(function(){return(function(a,s){if(!a)throw ta(14);if(ea(a)){var c=a(s);return c}if(Array.isArray(a)||typeof a!="object")throw ta(8);return s?kt(kt({},s),a):a})(e.theme,n)},[e.theme,n]);return e.children?Ln.createElement(Ws.Provider,{value:r},e.children):null}var um={};function s4(e,n,r){var a=t0(e),s=e,c=!cm(e),u=n.attrs,f=u===void 0?cd:u,p=n.componentId,g=p===void 0?(function(N,P){var _=typeof N!="string"?"sc":Tb(N);um[_]=(um[_]||0)+1;var L="".concat(_,"-").concat(e0(ld+_+um[_]));return P?"".concat(P,"-").concat(L):L})(n.displayName,n.parentComponentId):p,y=n.displayName,x=y===void 0?(function(N){return cm(N)?"styled.".concat(N):"Styled(".concat(OE(N),")")})(e):y,v=n.displayName&&n.componentId?"".concat(Tb(n.displayName),"-").concat(n.componentId):n.componentId||g,C=a&&s.attrs?s.attrs.concat(f).filter(Boolean):f,w=n.shouldForwardProp;if(a&&s.shouldForwardProp){var S=s.shouldForwardProp;if(n.shouldForwardProp){var A=n.shouldForwardProp;w=function(N,P){return S(N,P)&&A(N,P)}}else w=S}var R=new a4(r,v,a?s.componentStyle:void 0);function O(N,P){return(function(_,L,ee){var ie=_.attrs,se=_.componentStyle,le=_.defaultProps,k=_.foldedComponentIds,ae=_.styledComponentId,ne=_.target,ce=Ln.useContext(Ws),B=lp(),Z=_.shouldForwardProp||B.shouldForwardProp,K=Zw(L,ce,le)||uo,re=(function(de,ye,te){for(var ge,fe=kt(kt({},ye),{className:void 0,theme:te}),Me=0;Me<de.length;Me+=1){var Rt=ea(ge=de[Me])?ge(fe):ge;for(var Ct in Rt)fe[Ct]=Ct==="className"?qr(fe[Ct],Rt[Ct]):Ct==="style"?kt(kt({},fe[Ct]),Rt[Ct]):Rt[Ct]}return ye.className&&(fe.className=qr(fe.className,ye.className)),fe})(ie,L,K),he=re.as||ne,z={};for(var V in re)re[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&re.theme===K||(V==="forwardedAs"?z.as=re.forwardedAs:Z&&!Z(V,he)||(z[V]=re[V]));var I=(function(de,ye){var te=lp(),ge=de.generateAndInjectStyles(ye,te.styleSheet,te.stylis);return ge})(se,re),oe=qr(k,ae);return I&&(oe+=" "+I),re.className&&(oe+=" "+re.className),z[cm(he)&&!Jw.has(he)?"class":"className"]=oe,ee&&(z.ref=ee),j.createElement(he,z)})($,N,P)}O.displayName=x;var $=Ln.forwardRef(O);return $.attrs=C,$.componentStyle=R,$.displayName=x,$.shouldForwardProp=w,$.foldedComponentIds=a?qr(s.foldedComponentIds,s.styledComponentId):"",$.styledComponentId=v,$.target=a?s.target:e,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=a?(function(P){for(var _=[],L=1;L<arguments.length;L++)_[L-1]=arguments[L];for(var ee=0,ie=_;ee<ie.length;ee++)op(P,ie[ee],!0);return P})({},s.defaultProps,N):N}}),n0($,function(){return".".concat($.styledComponentId)}),c&&rS($,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function $b(e,n){for(var r=[e[0]],a=0,s=n.length;a<s;a+=1)r.push(n[a],e[a+1]);return r}var Ob=function(e){return Object.assign(e,{isCss:!0})};function i0(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(ea(e)||Js(e))return Ob(pr($b(cd,oo([e],n,!0))));var a=e;return n.length===0&&a.length===1&&typeof a[0]=="string"?pr(a):Ob(pr($b(a,n)))}function cp(e,n,r){if(r===void 0&&(r=uo),!n)throw ta(1,n);var a=function(s){for(var c=[],u=1;u<arguments.length;u++)c[u-1]=arguments[u];return e(n,r,i0.apply(void 0,oo([s],c,!1)))};return a.attrs=function(s){return cp(e,n,kt(kt({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},a.withConfig=function(s){return cp(e,n,kt(kt({},r),s))},a}var fS=function(e){return cp(s4,e)},E=fS;Jw.forEach(function(e){E[e]=fS(e)});var l4=(function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=dS(n),qu.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,r,a,s){var c=s(Hu(pr(this.rules,r,a,s)),""),u=this.componentId+n;a.insertRules(u,u,c)},e.prototype.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,r,a,s){n>2&&qu.registerId(this.componentId+n),this.removeStyles(n,a),this.createStyles(n,r,a,s)},e})();function c4(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=i0.apply(void 0,oo([e],n,!1)),s="sc-global-".concat(e0(JSON.stringify(a))),c=new l4(a,s),u=function(p){var g=lp(),y=Ln.useContext(Ws),x=Ln.useRef(g.styleSheet.allocateGSInstance(s)).current;return g.styleSheet.server&&f(x,p,g.styleSheet,y,g.stylis),Ln.useLayoutEffect(function(){if(!g.styleSheet.server)return f(x,p,g.styleSheet,y,g.stylis),function(){return c.removeStyles(x,g.styleSheet)}},[x,p,g.styleSheet,y,g.stylis]),null};function f(p,g,y,x,v){if(c.isStatic)c.renderStyles(p,RE,y,v);else{var C=kt(kt({},g),{theme:Zw(g,x,u.defaultProps)});c.renderStyles(p,C,y,v)}}return Ln.memo(u)}function ud(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=Hu(i0.apply(void 0,oo([e],n,!1))),s=e0(a);return new lS(s,a)}var dd=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},u4={setTimeout:(e,n)=>setTimeout(e,n),clearTimeout:e=>clearTimeout(e),setInterval:(e,n)=>setInterval(e,n),clearInterval:e=>clearInterval(e)},d4=class{#e=u4;#t=!1;setTimeoutProvider(e){this.#e=e}setTimeout(e,n){return this.#e.setTimeout(e,n)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,n){return this.#e.setInterval(e,n)}clearInterval(e){this.#e.clearInterval(e)}},up=new d4;function f4(e){setTimeout(e,0)}var fd=typeof window>"u"||"Deno"in globalThis;function In(){}function h4(e,n){return typeof e=="function"?e(n):e}function m4(e){return typeof e=="number"&&e>=0&&e!==1/0}function p4(e,n){return Math.max(e+(n||0)-Date.now(),0)}function dp(e,n){return typeof e=="function"?e(n):e}function g4(e,n){return typeof e=="function"?e(n):e}function Db(e,n){const{type:r="all",exact:a,fetchStatus:s,predicate:c,queryKey:u,stale:f}=e;if(u){if(a){if(n.queryHash!==r0(u,n.options))return!1}else if(!tl(n.queryKey,u))return!1}if(r!=="all"){const p=n.isActive();if(r==="active"&&!p||r==="inactive"&&p)return!1}return!(typeof f=="boolean"&&n.isStale()!==f||s&&s!==n.state.fetchStatus||c&&!c(n))}function _b(e,n){const{exact:r,status:a,predicate:s,mutationKey:c}=e;if(c){if(!n.options.mutationKey)return!1;if(r){if(el(n.options.mutationKey)!==el(c))return!1}else if(!tl(n.options.mutationKey,c))return!1}return!(a&&n.state.status!==a||s&&!s(n))}function r0(e,n){return(n?.queryKeyHashFn||el)(e)}function el(e){return JSON.stringify(e,(n,r)=>fp(r)?Object.keys(r).sort().reduce((a,s)=>(a[s]=r[s],a),{}):r)}function tl(e,n){return e===n?!0:typeof e!=typeof n?!1:e&&n&&typeof e=="object"&&typeof n=="object"?Object.keys(n).every(r=>tl(e[r],n[r])):!1}var y4=Object.prototype.hasOwnProperty;function hS(e,n){if(e===n)return e;const r=Lb(e)&&Lb(n);if(!r&&!(fp(e)&&fp(n)))return n;const s=(r?e:Object.keys(e)).length,c=r?n:Object.keys(n),u=c.length,f=r?new Array(u):{};let p=0;for(let g=0;g<u;g++){const y=r?g:c[g],x=e[y],v=n[y];if(x===v){f[y]=x,(r?g<s:y4.call(e,y))&&p++;continue}if(x===null||v===null||typeof x!="object"||typeof v!="object"){f[y]=v;continue}const C=hS(x,v);f[y]=C,C===x&&p++}return s===u&&p===s?e:f}function Lb(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function fp(e){if(!Nb(e))return!1;const n=e.constructor;if(n===void 0)return!0;const r=n.prototype;return!(!Nb(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Nb(e){return Object.prototype.toString.call(e)==="[object Object]"}function x4(e){return new Promise(n=>{up.setTimeout(n,e)})}function b4(e,n,r){return typeof r.structuralSharing=="function"?r.structuralSharing(e,n):r.structuralSharing!==!1?hS(e,n):n}function v4(e,n,r=0){const a=[...e,n];return r&&a.length>r?a.slice(1):a}function w4(e,n,r=0){const a=[n,...e];return r&&a.length>r?a.slice(0,-1):a}var a0=Symbol();function mS(e,n){return!e.queryFn&&n?.initialPromise?()=>n.initialPromise:!e.queryFn||e.queryFn===a0?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var S4=class extends dd{#e;#t;#n;constructor(){super(),this.#n=e=>{if(!fd&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(n=>{typeof n=="boolean"?this.setFocused(n):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},pS=new S4;function C4(){let e,n;const r=new Promise((s,c)=>{e=s,n=c});r.status="pending",r.catch(()=>{});function a(s){Object.assign(r,s),delete r.resolve,delete r.reject}return r.resolve=s=>{a({status:"fulfilled",value:s}),e(s)},r.reject=s=>{a({status:"rejected",reason:s}),n(s)},r}var T4=f4;function j4(){let e=[],n=0,r=f=>{f()},a=f=>{f()},s=T4;const c=f=>{n?e.push(f):s(()=>{r(f)})},u=()=>{const f=e;e=[],f.length&&s(()=>{a(()=>{f.forEach(p=>{r(p)})})})};return{batch:f=>{let p;n++;try{p=f()}finally{n--,n||u()}return p},batchCalls:f=>(...p)=>{c(()=>{f(...p)})},schedule:c,setNotifyFunction:f=>{r=f},setBatchNotifyFunction:f=>{a=f},setScheduler:f=>{s=f}}}var Gt=j4(),E4=class extends dd{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(!fd&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(r=>{r(e)}))}isOnline(){return this.#e}},Gu=new E4;function A4(e){return Math.min(1e3*2**e,3e4)}function gS(e){return(e??"online")==="online"?Gu.isOnline():!0}var hp=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function yS(e){let n=!1,r=0,a;const s=C4(),c=()=>s.status!=="pending",u=S=>{if(!c()){const A=new hp(S);v(A),e.onCancel?.(A)}},f=()=>{n=!0},p=()=>{n=!1},g=()=>pS.isFocused()&&(e.networkMode==="always"||Gu.isOnline())&&e.canRun(),y=()=>gS(e.networkMode)&&e.canRun(),x=S=>{c()||(a?.(),s.resolve(S))},v=S=>{c()||(a?.(),s.reject(S))},C=()=>new Promise(S=>{a=A=>{(c()||g())&&S(A)},e.onPause?.()}).then(()=>{a=void 0,c()||e.onContinue?.()}),w=()=>{if(c())return;let S;const A=r===0?e.initialPromise:void 0;try{S=A??e.fn()}catch(R){S=Promise.reject(R)}Promise.resolve(S).then(x).catch(R=>{if(c())return;const O=e.retry??(fd?0:3),$=e.retryDelay??A4,N=typeof $=="function"?$(r,R):$,P=O===!0||typeof O=="number"&&r<O||typeof O=="function"&&O(r,R);if(n||!P){v(R);return}r++,e.onFail?.(r,R),x4(N).then(()=>g()?void 0:C()).then(()=>{n?v(R):w()})})};return{promise:s,status:()=>s.status,cancel:u,continue:()=>(a?.(),s),cancelRetry:f,continueRetry:p,canStart:y,start:()=>(y()?w():C().then(w),s)}}var xS=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),m4(this.gcTime)&&(this.#e=up.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(fd?1/0:300*1e3))}clearGcTimeout(){this.#e&&(up.clearTimeout(this.#e),this.#e=void 0)}},k4=class extends xS{#e;#t;#n;#r;#i;#o;#s;constructor(e){super(),this.#s=!1,this.#o=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#r=e.client,this.#n=this.#r.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=Ub(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(e){if(this.options={...this.#o,...e},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=Ub(this.options);n.data!==void 0&&(this.setState(Bb(n.data,n.dataUpdatedAt)),this.#e=n)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(e,n){const r=b4(this.state.data,e,this.options);return this.#a({data:r,type:"success",dataUpdatedAt:n?.updatedAt,manual:n?.manual}),r}setState(e,n){this.#a({type:"setState",state:e,setStateOptions:n})}cancel(e){const n=this.#i?.promise;return this.#i?.cancel(e),n?n.then(In).catch(In):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>g4(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===a0||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>dp(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!p4(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(n=>n.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(n=>n.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.#i&&(this.#s?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#a({type:"invalidate"})}async fetch(e,n){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&n?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(p=>p.options.queryFn);f&&this.setOptions(f.options)}const r=new AbortController,a=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(this.#s=!0,r.signal)})},s=()=>{const f=mS(this.options,n),g=(()=>{const y={client:this.#r,queryKey:this.queryKey,meta:this.meta};return a(y),y})();return this.#s=!1,this.options.persister?this.options.persister(f,g,this):f(g)},u=(()=>{const f={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:this.#r,state:this.state,fetchFn:s};return a(f),f})();this.options.behavior?.onFetch(u,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==u.fetchOptions?.meta)&&this.#a({type:"fetch",meta:u.fetchOptions?.meta}),this.#i=yS({initialPromise:n?.initialPromise,fn:u.fetchFn,onCancel:f=>{f instanceof hp&&f.revert&&this.setState({...this.#t,fetchStatus:"idle"}),r.abort()},onFail:(f,p)=>{this.#a({type:"failed",failureCount:f,error:p})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode,canRun:()=>!0});try{const f=await this.#i.start();if(f===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(f),this.#n.config.onSuccess?.(f,this),this.#n.config.onSettled?.(f,this.state.error,this),f}catch(f){if(f instanceof hp){if(f.silent)return this.#i.promise;if(f.revert){if(this.state.data===void 0)throw f;return this.state.data}}throw this.#a({type:"error",error:f}),this.#n.config.onError?.(f,this),this.#n.config.onSettled?.(this.state.data,f,this),f}finally{this.scheduleGc()}}#a(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...R4(r.data,this.options),fetchMeta:e.meta??null};case"success":const a={...r,...Bb(e.data,e.dataUpdatedAt),dataUpdateCount:r.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=e.manual?a:void 0,a;case"error":const s=e.error;return{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Gt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:e})})}};function R4(e,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:gS(n.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Bb(e,n){return{data:e,dataUpdatedAt:n??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Ub(e){const n=typeof e.initialData=="function"?e.initialData():e.initialData,r=n!==void 0,a=r?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:r?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}function Vb(e){return{onFetch:(n,r)=>{const a=n.options,s=n.fetchOptions?.meta?.fetchMore?.direction,c=n.state.data?.pages||[],u=n.state.data?.pageParams||[];let f={pages:[],pageParams:[]},p=0;const g=async()=>{let y=!1;const x=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(n.signal.aborted?y=!0:n.signal.addEventListener("abort",()=>{y=!0}),n.signal)})},v=mS(n.options,n.fetchOptions),C=async(w,S,A)=>{if(y)return Promise.reject();if(S==null&&w.pages.length)return Promise.resolve(w);const O=(()=>{const _={client:n.client,queryKey:n.queryKey,pageParam:S,direction:A?"backward":"forward",meta:n.options.meta};return x(_),_})(),$=await v(O),{maxPages:N}=n.options,P=A?w4:v4;return{pages:P(w.pages,$,N),pageParams:P(w.pageParams,S,N)}};if(s&&c.length){const w=s==="backward",S=w?z4:Pb,A={pages:c,pageParams:u},R=S(a,A);f=await C(A,R,w)}else{const w=e??c.length;do{const S=p===0?u[0]??a.initialPageParam:Pb(a,f);if(p>0&&S==null)break;f=await C(f,S),p++}while(p<w)}return f};n.options.persister?n.fetchFn=()=>n.options.persister?.(g,{client:n.client,queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},r):n.fetchFn=g}}}function Pb(e,{pages:n,pageParams:r}){const a=n.length-1;return n.length>0?e.getNextPageParam(n[a],n,r[a],r):void 0}function z4(e,{pages:n,pageParams:r}){return n.length>0?e.getPreviousPageParam?.(n[0],n,r[0],r):void 0}var M4=class extends xS{#e;#t;#n;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||$4(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(n=>n!==e),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){const n=()=>{this.#i({type:"continue"})},r={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=yS({fn:()=>this.options.mutationFn?this.options.mutationFn(e,r):Promise.reject(new Error("No mutationFn found")),onFail:(c,u)=>{this.#i({type:"failed",failureCount:c,error:u})},onPause:()=>{this.#i({type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});const a=this.state.status==="pending",s=!this.#r.canStart();try{if(a)n();else{this.#i({type:"pending",variables:e,isPaused:s}),await this.#n.config.onMutate?.(e,this,r);const u=await this.options.onMutate?.(e,r);u!==this.state.context&&this.#i({type:"pending",context:u,variables:e,isPaused:s})}const c=await this.#r.start();return await this.#n.config.onSuccess?.(c,e,this.state.context,this,r),await this.options.onSuccess?.(c,e,this.state.context,r),await this.#n.config.onSettled?.(c,null,this.state.variables,this.state.context,this,r),await this.options.onSettled?.(c,null,e,this.state.context,r),this.#i({type:"success",data:c}),c}catch(c){try{throw await this.#n.config.onError?.(c,e,this.state.context,this,r),await this.options.onError?.(c,e,this.state.context,r),await this.#n.config.onSettled?.(void 0,c,this.state.variables,this.state.context,this,r),await this.options.onSettled?.(void 0,c,e,this.state.context,r),c}finally{this.#i({type:"error",error:c})}}finally{this.#n.runNext(this)}}#i(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Gt.batch(()=>{this.#t.forEach(r=>{r.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:"updated",action:e})})}};function $4(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var O4=class extends dd{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,n,r){const a=new M4({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(n),state:r});return this.add(a),a}add(e){this.#e.add(e);const n=Zc(e);if(typeof n=="string"){const r=this.#t.get(n);r?r.push(e):this.#t.set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const n=Zc(e);if(typeof n=="string"){const r=this.#t.get(n);if(r)if(r.length>1){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}else r[0]===e&&this.#t.delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=Zc(e);if(typeof n=="string"){const a=this.#t.get(n)?.find(s=>s.state.status==="pending");return!a||a===e}else return!0}runNext(e){const n=Zc(e);return typeof n=="string"?this.#t.get(n)?.find(a=>a!==e&&a.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Gt.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const n={exact:!0,...e};return this.getAll().find(r=>_b(n,r))}findAll(e={}){return this.getAll().filter(n=>_b(e,n))}notify(e){Gt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return Gt.batch(()=>Promise.all(e.map(n=>n.continue().catch(In))))}};function Zc(e){return e.options.scope?.id}var D4=class extends dd{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,n,r){const a=n.queryKey,s=n.queryHash??r0(a,n);let c=this.get(s);return c||(c=new k4({client:e,queryKey:a,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(a)}),this.add(c)),c}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=this.#e.get(e.queryHash);n&&(e.destroy(),n===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Gt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Db(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Db(e,r)):n}notify(e){Gt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){Gt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Gt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},_4=class{#e;#t;#n;#r;#i;#o;#s;#a;constructor(e={}){this.#e=e.queryCache||new D4,this.#t=e.mutationCache||new O4,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#o=0}mount(){this.#o++,this.#o===1&&(this.#s=pS.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#a=Gu.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#o--,this.#o===0&&(this.#s?.(),this.#s=void 0,this.#a?.(),this.#a=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const n=this.defaultQueryOptions({queryKey:e});return this.#e.get(n.queryHash)?.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),r=this.#e.build(this,n),a=r.state.data;return a===void 0?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime(dp(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(a))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:n,state:r})=>{const a=r.data;return[n,a]})}setQueryData(e,n,r){const a=this.defaultQueryOptions({queryKey:e}),c=this.#e.get(a.queryHash)?.state.data,u=h4(n,c);if(u!==void 0)return this.#e.build(this,a).setData(u,{...r,manual:!0})}setQueriesData(e,n,r){return Gt.batch(()=>this.#e.findAll(e).map(({queryKey:a})=>[a,this.setQueryData(a,n,r)]))}getQueryState(e){const n=this.defaultQueryOptions({queryKey:e});return this.#e.get(n.queryHash)?.state}removeQueries(e){const n=this.#e;Gt.batch(()=>{n.findAll(e).forEach(r=>{n.remove(r)})})}resetQueries(e,n){const r=this.#e;return Gt.batch(()=>(r.findAll(e).forEach(a=>{a.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const r={revert:!0,...n},a=Gt.batch(()=>this.#e.findAll(e).map(s=>s.cancel(r)));return Promise.all(a).then(In).catch(In)}invalidateQueries(e,n={}){return Gt.batch(()=>(this.#e.findAll(e).forEach(r=>{r.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},n)))}refetchQueries(e,n={}){const r={...n,cancelRefetch:n.cancelRefetch??!0},a=Gt.batch(()=>this.#e.findAll(e).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let c=s.fetch(void 0,r);return r.throwOnError||(c=c.catch(In)),s.state.fetchStatus==="paused"?Promise.resolve():c}));return Promise.all(a).then(In)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const r=this.#e.build(this,n);return r.isStaleByTime(dp(n.staleTime,r))?r.fetch(n):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(In).catch(In)}fetchInfiniteQuery(e){return e.behavior=Vb(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(In).catch(In)}ensureInfiniteQueryData(e){return e.behavior=Vb(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Gu.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,n){this.#r.set(el(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...this.#r.values()],r={};return n.forEach(a=>{tl(e,a.queryKey)&&Object.assign(r,a.defaultOptions)}),r}setMutationDefaults(e,n){this.#i.set(el(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...this.#i.values()],r={};return n.forEach(a=>{tl(e,a.mutationKey)&&Object.assign(r,a.defaultOptions)}),r}defaultQueryOptions(e){if(e._defaulted)return e;const n={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=r0(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===a0&&(n.enabled=!1),n}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},L4=j.createContext(void 0),N4=({client:e,children:n})=>(j.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),h.jsx(L4.Provider,{value:e,children:n}));const B4={colors:{red:{100:"#FDEAEA",200:"#FACACA",300:"#F59A9A",400:"#F06A6A",500:"#EB3A3A",600:"#D42C2C",700:"#A82222",800:"#7A1919",900:"#AB2522"},orange:{100:"#FDF2E9",200:"#FCE4CE",300:"#FAD5A5",400:"#F8C67C",500:"#F6B653",600:"#F4A52A",700:"#E8941A",800:"#D08310",900:"#EF752B"},primary:"#AB2522",secondary:"#EF752B",background:"#121212",text:"#ffffff",error:"#ff6b6b",success:"#4caf50"}},U4=c4`

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



`;var Hb="popstate";function V4(e={}){function n(a,s){let{pathname:c,search:u,hash:f}=a.location;return mp("",{pathname:c,search:u,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(a,s){return typeof s=="string"?s:nl(s)}return H4(n,r,null,e)}function nt(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Vn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function P4(){return Math.random().toString(36).substring(2,10)}function Fb(e,n){return{usr:e.state,key:e.key,idx:n}}function mp(e,n,r=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?wo(n):n,state:r,key:n&&n.key||a||P4()}}function nl({pathname:e="/",search:n="",hash:r=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function wo(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substring(r),e=e.substring(0,r));let a=e.indexOf("?");a>=0&&(n.search=e.substring(a),e=e.substring(0,a)),e&&(n.pathname=e)}return n}function H4(e,n,r,a={}){let{window:s=document.defaultView,v5Compat:c=!1}=a,u=s.history,f="POP",p=null,g=y();g==null&&(g=0,u.replaceState({...u.state,idx:g},""));function y(){return(u.state||{idx:null}).idx}function x(){f="POP";let A=y(),R=A==null?null:A-g;g=A,p&&p({action:f,location:S.location,delta:R})}function v(A,R){f="PUSH";let O=mp(S.location,A,R);g=y()+1;let $=Fb(O,g),N=S.createHref(O);try{u.pushState($,"",N)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;s.location.assign(N)}c&&p&&p({action:f,location:S.location,delta:1})}function C(A,R){f="REPLACE";let O=mp(S.location,A,R);g=y();let $=Fb(O,g),N=S.createHref(O);u.replaceState($,"",N),c&&p&&p({action:f,location:S.location,delta:0})}function w(A){return F4(A)}let S={get action(){return f},get location(){return e(s,u)},listen(A){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(Hb,x),p=A,()=>{s.removeEventListener(Hb,x),p=null}},createHref(A){return n(s,A)},createURL:w,encodeLocation(A){let R=w(A);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:v,replace:C,go(A){return u.go(A)}};return S}function F4(e,n=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),nt(r,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:nl(e);return a=a.replace(/ $/,"%20"),!n&&a.startsWith("//")&&(a=r+a),new URL(a,r)}function bS(e,n,r="/"){return q4(e,n,r,!1)}function q4(e,n,r,a){let s=typeof n=="string"?wo(n):n,c=Li(s.pathname||"/",r);if(c==null)return null;let u=vS(e);G4(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let g=nA(c);f=eA(u[p],g,a)}return f}function vS(e,n=[],r=[],a="",s=!1){let c=(u,f,p=s,g)=>{let y={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(a)&&p)return;nt(y.relativePath.startsWith(a),`Absolute route path "${y.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(a.length)}let x=_i([a,y.relativePath]),v=r.concat(y);u.children&&u.children.length>0&&(nt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),vS(u.children,n,v,x,p)),!(u.path==null&&!u.index)&&n.push({path:x,score:J4(x,u.index),routesMeta:v})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))c(u,f);else for(let p of wS(u.path))c(u,f,!0,p)}),n}function wS(e){let n=e.split("/");if(n.length===0)return[];let[r,...a]=n,s=r.endsWith("?"),c=r.replace(/\?$/,"");if(a.length===0)return s?[c,""]:[c];let u=wS(a.join("/")),f=[];return f.push(...u.map(p=>p===""?c:[c,p].join("/"))),s&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function G4(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:W4(n.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var Y4=/^:[\w-]+$/,K4=3,X4=2,Q4=1,I4=10,Z4=-2,qb=e=>e==="*";function J4(e,n){let r=e.split("/"),a=r.length;return r.some(qb)&&(a+=Z4),n&&(a+=X4),r.filter(s=>!qb(s)).reduce((s,c)=>s+(Y4.test(c)?K4:c===""?Q4:I4),a)}function W4(e,n){return e.length===n.length&&e.slice(0,-1).every((a,s)=>a===n[s])?e[e.length-1]-n[n.length-1]:0}function eA(e,n,r=!1){let{routesMeta:a}=e,s={},c="/",u=[];for(let f=0;f<a.length;++f){let p=a[f],g=f===a.length-1,y=c==="/"?n:n.slice(c.length)||"/",x=Yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),v=p.route;if(!x&&g&&r&&!a[a.length-1].route.index&&(x=Yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!x)return null;Object.assign(s,x.params),u.push({params:s,pathname:_i([c,x.pathname]),pathnameBase:sA(_i([c,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(c=_i([c,x.pathnameBase]))}return u}function Yu(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=tA(e.path,e.caseSensitive,e.end),s=n.match(r);if(!s)return null;let c=s[0],u=c.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((g,{paramName:y,isOptional:x},v)=>{if(y==="*"){let w=f[v]||"";u=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const C=f[v];return x&&!C?g[y]=void 0:g[y]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:u,pattern:e}}function tA(e,n=!1,r=!0){Vn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(a.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),a]}function nA(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Vn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function Li(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}var iA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rA=e=>iA.test(e);function aA(e,n="/"){let{pathname:r,search:a="",hash:s=""}=typeof e=="string"?wo(e):e,c;if(r)if(rA(r))c=r;else{if(r.includes("//")){let u=r;r=r.replace(/\/\/+/g,"/"),Vn(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${r}`)}r.startsWith("/")?c=Gb(r.substring(1),"/"):c=Gb(r,n)}else c=n;return{pathname:c,search:lA(a),hash:cA(s)}}function Gb(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function dm(e,n,r,a){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oA(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function o0(e){let n=oA(e);return n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase)}function s0(e,n,r,a=!1){let s;typeof e=="string"?s=wo(e):(s={...e},nt(!s.pathname||!s.pathname.includes("?"),dm("?","pathname","search",s)),nt(!s.pathname||!s.pathname.includes("#"),dm("#","pathname","hash",s)),nt(!s.search||!s.search.includes("#"),dm("#","search","hash",s)));let c=e===""||s.pathname==="",u=c?"/":s.pathname,f;if(u==null)f=r;else{let x=n.length-1;if(!a&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),x-=1;s.pathname=v.join("/")}f=x>=0?n[x]:"/"}let p=aA(s,f),g=u&&u!=="/"&&u.endsWith("/"),y=(c||u===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var _i=e=>e.join("/").replace(/\/\/+/g,"/"),sA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var SS=["POST","PUT","PATCH","DELETE"];new Set(SS);var dA=["GET",...SS];new Set(dA);var So=j.createContext(null);So.displayName="DataRouter";var hd=j.createContext(null);hd.displayName="DataRouterState";j.createContext(!1);var CS=j.createContext({isTransitioning:!1});CS.displayName="ViewTransition";var fA=j.createContext(new Map);fA.displayName="Fetchers";var hA=j.createContext(null);hA.displayName="Await";var Jn=j.createContext(null);Jn.displayName="Navigation";var yl=j.createContext(null);yl.displayName="Location";var Pn=j.createContext({outlet:null,matches:[],isDataRoute:!1});Pn.displayName="Route";var l0=j.createContext(null);l0.displayName="RouteError";function mA(e,{relative:n}={}){nt(Co(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=j.useContext(Jn),{hash:s,pathname:c,search:u}=xl(e,{relative:n}),f=c;return r!=="/"&&(f=c==="/"?r:_i([r,c])),a.createHref({pathname:f,search:u,hash:s})}function Co(){return j.useContext(yl)!=null}function Vi(){return nt(Co(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(yl).location}var TS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jS(e){j.useContext(Jn).static||j.useLayoutEffect(e)}function md(){let{isDataRoute:e}=j.useContext(Pn);return e?zA():pA()}function pA(){nt(Co(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(So),{basename:n,navigator:r}=j.useContext(Jn),{matches:a}=j.useContext(Pn),{pathname:s}=Vi(),c=JSON.stringify(o0(a)),u=j.useRef(!1);return jS(()=>{u.current=!0}),j.useCallback((p,g={})=>{if(Vn(u.current,TS),!u.current)return;if(typeof p=="number"){r.go(p);return}let y=s0(p,JSON.parse(c),s,g.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:_i([n,y.pathname])),(g.replace?r.replace:r.push)(y,g.state,g)},[n,r,c,s,e])}var gA=j.createContext(null);function yA(e){let n=j.useContext(Pn).outlet;return j.useMemo(()=>n&&j.createElement(gA.Provider,{value:e},n),[n,e])}function xA(){let{matches:e}=j.useContext(Pn),n=e[e.length-1];return n?n.params:{}}function xl(e,{relative:n}={}){let{matches:r}=j.useContext(Pn),{pathname:a}=Vi(),s=JSON.stringify(o0(r));return j.useMemo(()=>s0(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function bA(e,n){return ES(e,n)}function ES(e,n,r,a,s){nt(Co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=j.useContext(Jn),{matches:u}=j.useContext(Pn),f=u[u.length-1],p=f?f.params:{},g=f?f.pathname:"/",y=f?f.pathnameBase:"/",x=f&&f.route;{let O=x&&x.path||"";AS(g,!x||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let v=Vi(),C;if(n){let O=typeof n=="string"?wo(n):n;nt(y==="/"||O.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${O.pathname}" was given in the \`location\` prop.`),C=O}else C=v;let w=C.pathname||"/",S=w;if(y!=="/"){let O=y.replace(/^\//,"").split("/");S="/"+w.replace(/^\//,"").split("/").slice(O.length).join("/")}let A=bS(e,{pathname:S});Vn(x||A!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Vn(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=TA(A&&A.map(O=>Object.assign({},O,{params:Object.assign({},p,O.params),pathname:_i([y,c.encodeLocation?c.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?y:_i([y,c.encodeLocation?c.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),u,r,a,s);return n&&R?j.createElement(yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},R):R}function vA(){let e=RA(),n=uA(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:c},"ErrorBoundary")," or"," ",j.createElement("code",{style:c},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},n),r?j.createElement("pre",{style:s},r):null,u)}var wA=j.createElement(vA,null),SA=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){this.props.onError?this.props.onError(e,n):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?j.createElement(Pn.Provider,{value:this.props.routeContext},j.createElement(l0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function CA({routeContext:e,match:n,children:r}){let a=j.useContext(So);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Pn.Provider,{value:e},r)}function TA(e,n=[],r=null,a=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let c=e,u=r?.errors;if(u!=null){let y=c.findIndex(x=>x.route.id&&u?.[x.route.id]!==void 0);nt(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,y+1))}let f=!1,p=-1;if(r)for(let y=0;y<c.length;y++){let x=c[y];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=y),x.route.id){let{loaderData:v,errors:C}=r,w=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!C||C[x.route.id]===void 0);if(x.route.lazy||w){f=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let g=r&&a?(y,x)=>{a(y,{location:r.location,params:r.matches?.[0]?.params??{},errorInfo:x})}:void 0;return c.reduceRight((y,x,v)=>{let C,w=!1,S=null,A=null;r&&(C=u&&x.route.id?u[x.route.id]:void 0,S=x.route.errorElement||wA,f&&(p<0&&v===0?(AS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,A=null):p===v&&(w=!0,A=x.route.hydrateFallbackElement||null)));let R=n.concat(c.slice(0,v+1)),O=()=>{let $;return C?$=S:w?$=A:x.route.Component?$=j.createElement(x.route.Component,null):x.route.element?$=x.route.element:$=y,j.createElement(CA,{match:x,routeContext:{outlet:y,matches:R,isDataRoute:r!=null},children:$})};return r&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?j.createElement(SA,{location:r.location,revalidation:r.revalidation,component:S,error:C,children:O(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:g}):O()},null)}function c0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jA(e){let n=j.useContext(So);return nt(n,c0(e)),n}function EA(e){let n=j.useContext(hd);return nt(n,c0(e)),n}function AA(e){let n=j.useContext(Pn);return nt(n,c0(e)),n}function u0(e){let n=AA(e),r=n.matches[n.matches.length-1];return nt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function kA(){return u0("useRouteId")}function RA(){let e=j.useContext(l0),n=EA("useRouteError"),r=u0("useRouteError");return e!==void 0?e:n.errors?.[r]}function zA(){let{router:e}=jA("useNavigate"),n=u0("useNavigate"),r=j.useRef(!1);return jS(()=>{r.current=!0}),j.useCallback(async(s,c={})=>{Vn(r.current,TS),r.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:n,...c}))},[e,n])}var Yb={};function AS(e,n,r){!n&&!Yb[e]&&(Yb[e]=!0,Vn(!1,r))}j.memo(MA);function MA({routes:e,future:n,state:r,unstable_onError:a}){return ES(e,void 0,r,a,n)}function kS({to:e,replace:n,state:r,relative:a}){nt(Co(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=j.useContext(Jn);Vn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=j.useContext(Pn),{pathname:u}=Vi(),f=md(),p=s0(e,o0(c),u,a==="path"),g=JSON.stringify(p);return j.useEffect(()=>{f(JSON.parse(g),{replace:n,state:r,relative:a})},[f,g,a,n,r]),null}function $A(e){return yA(e.context)}function Xn(e){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function OA({basename:e="/",children:n=null,location:r,navigationType:a="POP",navigator:s,static:c=!1}){nt(!Co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=j.useMemo(()=>({basename:u,navigator:s,static:c,future:{}}),[u,s,c]);typeof r=="string"&&(r=wo(r));let{pathname:p="/",search:g="",hash:y="",state:x=null,key:v="default"}=r,C=j.useMemo(()=>{let w=Li(p,u);return w==null?null:{location:{pathname:w,search:g,hash:y,state:x,key:v},navigationType:a}},[u,p,g,y,x,v,a]);return Vn(C!=null,`<Router basename="${u}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:j.createElement(Jn.Provider,{value:f},j.createElement(yl.Provider,{children:n,value:C}))}function DA({children:e,location:n}){return bA(pp(e),n)}function pp(e,n=[]){let r=[];return j.Children.forEach(e,(a,s)=>{if(!j.isValidElement(a))return;let c=[...n,s];if(a.type===j.Fragment){r.push.apply(r,pp(a.props.children,c));return}nt(a.type===Xn,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=pp(a.props.children,c)),r.push(u)}),r}var Au="get",ku="application/x-www-form-urlencoded";function pd(e){return e!=null&&typeof e.tagName=="string"}function _A(e){return pd(e)&&e.tagName.toLowerCase()==="button"}function LA(e){return pd(e)&&e.tagName.toLowerCase()==="form"}function NA(e){return pd(e)&&e.tagName.toLowerCase()==="input"}function BA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function UA(e,n){return e.button===0&&(!n||n==="_self")&&!BA(e)}var Jc=null;function VA(){if(Jc===null)try{new FormData(document.createElement("form"),0),Jc=!1}catch{Jc=!0}return Jc}var PA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fm(e){return e!=null&&!PA.has(e)?(Vn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ku}"`),null):e}function HA(e,n){let r,a,s,c,u;if(LA(e)){let f=e.getAttribute("action");a=f?Li(f,n):null,r=e.getAttribute("method")||Au,s=fm(e.getAttribute("enctype"))||ku,c=new FormData(e)}else if(_A(e)||NA(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(a=p?Li(p,n):null,r=e.getAttribute("formmethod")||f.getAttribute("method")||Au,s=fm(e.getAttribute("formenctype"))||fm(f.getAttribute("enctype"))||ku,c=new FormData(f,e),!VA()){let{name:g,type:y,value:x}=e;if(y==="image"){let v=g?`${g}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else g&&c.append(g,x)}}else{if(pd(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Au,a=null,s=ku,u=e}return c&&s==="text/plain"&&(u=c,c=void 0),{action:a,method:r.toLowerCase(),encType:s,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function d0(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function FA(e,n,r){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${r}`:n&&Li(a.pathname,n)==="/"?a.pathname=`${n.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function qA(e,n){if(e.id in n)return n[e.id];try{let r=await import(e.module);return n[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GA(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function YA(e,n,r){let a=await Promise.all(e.map(async s=>{let c=n.routes[s.route.id];if(c){let u=await qA(c,r);return u.links?u.links():[]}return[]}));return IA(a.flat(1).filter(GA).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Kb(e,n,r,a,s,c){let u=(p,g)=>r[g]?p.route.id!==r[g].route.id:!0,f=(p,g)=>r[g].pathname!==p.pathname||r[g].route.path?.endsWith("*")&&r[g].params["*"]!==p.params["*"];return c==="assets"?n.filter((p,g)=>u(p,g)||f(p,g)):c==="data"?n.filter((p,g)=>{let y=a.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,g)||f(p,g))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function KA(e,n,{includeHydrateFallback:r}={}){return XA(e.map(a=>{let s=n.routes[a.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function XA(e){return[...new Set(e)]}function QA(e){let n={},r=Object.keys(e).sort();for(let a of r)n[a]=e[a];return n}function IA(e,n){let r=new Set;return new Set(n),e.reduce((a,s)=>{let c=JSON.stringify(QA(s));return r.has(c)||(r.add(c),a.push({key:c,link:s})),a},[])}function RS(){let e=j.useContext(So);return d0(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ZA(){let e=j.useContext(hd);return d0(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var f0=j.createContext(void 0);f0.displayName="FrameworkContext";function zS(){let e=j.useContext(f0);return d0(e,"You must render this element inside a <HydratedRouter> element"),e}function JA(e,n){let r=j.useContext(f0),[a,s]=j.useState(!1),[c,u]=j.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:x}=n,v=j.useRef(null);j.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let S=R=>{R.forEach(O=>{u(O.isIntersecting)})},A=new IntersectionObserver(S,{threshold:.5});return v.current&&A.observe(v.current),()=>{A.disconnect()}}},[e]),j.useEffect(()=>{if(a){let S=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(S)}}},[a]);let C=()=>{s(!0)},w=()=>{s(!1),u(!1)};return r?e!=="intent"?[c,v,{}]:[c,v,{onFocus:Ms(f,C),onBlur:Ms(p,w),onMouseEnter:Ms(g,C),onMouseLeave:Ms(y,w),onTouchStart:Ms(x,C)}]:[!1,v,{}]}function Ms(e,n){return r=>{e&&e(r),r.defaultPrevented||n(r)}}function WA({page:e,...n}){let{router:r}=RS(),a=j.useMemo(()=>bS(r.routes,e,r.basename),[r.routes,e,r.basename]);return a?j.createElement(tk,{page:e,matches:a,...n}):null}function ek(e){let{manifest:n,routeModules:r}=zS(),[a,s]=j.useState([]);return j.useEffect(()=>{let c=!1;return YA(e,n,r).then(u=>{c||s(u)}),()=>{c=!0}},[e,n,r]),a}function tk({page:e,matches:n,...r}){let a=Vi(),{manifest:s,routeModules:c}=zS(),{basename:u}=RS(),{loaderData:f,matches:p}=ZA(),g=j.useMemo(()=>Kb(e,n,p,s,a,"data"),[e,n,p,s,a]),y=j.useMemo(()=>Kb(e,n,p,s,a,"assets"),[e,n,p,s,a]),x=j.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let w=new Set,S=!1;if(n.forEach(R=>{let O=s.routes[R.route.id];!O||!O.hasLoader||(!g.some($=>$.route.id===R.route.id)&&R.route.id in f&&c[R.route.id]?.shouldRevalidate||O.hasClientLoader?S=!0:w.add(R.route.id))}),w.size===0)return[];let A=FA(e,u,"data");return S&&w.size>0&&A.searchParams.set("_routes",n.filter(R=>w.has(R.route.id)).map(R=>R.route.id).join(",")),[A.pathname+A.search]},[u,f,a,s,g,n,e,c]),v=j.useMemo(()=>KA(y,s),[y,s]),C=ek(y);return j.createElement(j.Fragment,null,x.map(w=>j.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),v.map(w=>j.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),C.map(({key:w,link:S})=>j.createElement("link",{key:w,nonce:r.nonce,...S})))}function nk(...e){return n=>{e.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})}}var MS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{MS&&(window.__reactRouterVersion="7.9.6")}catch{}function ik({basename:e,children:n,window:r}){let a=j.useRef();a.current==null&&(a.current=V4({window:r,v5Compat:!0}));let s=a.current,[c,u]=j.useState({action:s.action,location:s.location}),f=j.useCallback(p=>{j.startTransition(()=>u(p))},[u]);return j.useLayoutEffect(()=>s.listen(f),[s,f]),j.createElement(OA,{basename:e,children:n,location:c.location,navigationType:c.action,navigator:s})}var $S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,To=j.forwardRef(function({onClick:n,discover:r="render",prefetch:a="none",relative:s,reloadDocument:c,replace:u,state:f,target:p,to:g,preventScrollReset:y,viewTransition:x,...v},C){let{basename:w}=j.useContext(Jn),S=typeof g=="string"&&$S.test(g),A,R=!1;if(typeof g=="string"&&S&&(A=g,MS))try{let ie=new URL(window.location.href),se=g.startsWith("//")?new URL(ie.protocol+g):new URL(g),le=Li(se.pathname,w);se.origin===ie.origin&&le!=null?g=le+se.search+se.hash:R=!0}catch{Vn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=mA(g,{relative:s}),[$,N,P]=JA(a,v),_=sk(g,{replace:u,state:f,target:p,preventScrollReset:y,relative:s,viewTransition:x});function L(ie){n&&n(ie),ie.defaultPrevented||_(ie)}let ee=j.createElement("a",{...v,...P,href:A||O,onClick:R||c?n:L,ref:nk(C,N),target:p,"data-discover":!S&&r==="render"?"true":void 0});return $&&!S?j.createElement(j.Fragment,null,ee,j.createElement(WA,{page:O})):ee});To.displayName="Link";var rk=j.forwardRef(function({"aria-current":n="page",caseSensitive:r=!1,className:a="",end:s=!1,style:c,to:u,viewTransition:f,children:p,...g},y){let x=xl(u,{relative:g.relative}),v=Vi(),C=j.useContext(hd),{navigator:w,basename:S}=j.useContext(Jn),A=C!=null&&fk(x)&&f===!0,R=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,O=v.pathname,$=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;r||(O=O.toLowerCase(),$=$?$.toLowerCase():null,R=R.toLowerCase()),$&&S&&($=Li($,S)||$);const N=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let P=O===R||!s&&O.startsWith(R)&&O.charAt(N)==="/",_=$!=null&&($===R||!s&&$.startsWith(R)&&$.charAt(R.length)==="/"),L={isActive:P,isPending:_,isTransitioning:A},ee=P?n:void 0,ie;typeof a=="function"?ie=a(L):ie=[a,P?"active":null,_?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let se=typeof c=="function"?c(L):c;return j.createElement(To,{...g,"aria-current":ee,className:ie,ref:y,style:se,to:u,viewTransition:f},typeof p=="function"?p(L):p)});rk.displayName="NavLink";var ak=j.forwardRef(({discover:e="render",fetcherKey:n,navigate:r,reloadDocument:a,replace:s,state:c,method:u=Au,action:f,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:x,...v},C)=>{let w=uk(),S=dk(f,{relative:g}),A=u.toLowerCase()==="get"?"get":"post",R=typeof f=="string"&&$S.test(f),O=$=>{if(p&&p($),$.defaultPrevented)return;$.preventDefault();let N=$.nativeEvent.submitter,P=N?.getAttribute("formmethod")||u;w(N||$.currentTarget,{fetcherKey:n,method:P,navigate:r,replace:s,state:c,relative:g,preventScrollReset:y,viewTransition:x})};return j.createElement("form",{ref:C,method:A,action:S,onSubmit:a?p:O,...v,"data-discover":!R&&e==="render"?"true":void 0})});ak.displayName="Form";function ok(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OS(e){let n=j.useContext(So);return nt(n,ok(e)),n}function sk(e,{target:n,replace:r,state:a,preventScrollReset:s,relative:c,viewTransition:u}={}){let f=md(),p=Vi(),g=xl(e,{relative:c});return j.useCallback(y=>{if(UA(y,n)){y.preventDefault();let x=r!==void 0?r:nl(p)===nl(g);f(e,{replace:x,state:a,preventScrollReset:s,relative:c,viewTransition:u})}},[p,f,g,r,a,n,e,s,c,u])}var lk=0,ck=()=>`__${String(++lk)}__`;function uk(){let{router:e}=OS("useSubmit"),{basename:n}=j.useContext(Jn),r=kA();return j.useCallback(async(a,s={})=>{let{action:c,method:u,encType:f,formData:p,body:g}=HA(a,n);if(s.navigate===!1){let y=s.fetcherKey||ck();await e.fetch(y,r,s.action||c,{preventScrollReset:s.preventScrollReset,formData:p,body:g,formMethod:s.method||u,formEncType:s.encType||f,flushSync:s.flushSync})}else await e.navigate(s.action||c,{preventScrollReset:s.preventScrollReset,formData:p,body:g,formMethod:s.method||u,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,n,r])}function dk(e,{relative:n}={}){let{basename:r}=j.useContext(Jn),a=j.useContext(Pn);nt(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),c={...xl(e||".",{relative:n})},u=Vi();if(e==null){c.search=u.search;let f=new URLSearchParams(c.search),p=f.getAll("index");if(p.some(y=>y==="")){f.delete("index"),p.filter(x=>x).forEach(x=>f.append("index",x));let y=f.toString();c.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:_i([r,c.pathname])),nl(c)}function fk(e,{relative:n}={}){let r=j.useContext(CS);nt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=OS("useViewTransitionState"),s=xl(e,{relative:n});if(!r.isTransitioning)return!1;let c=Li(r.currentLocation.pathname,a)||r.currentLocation.pathname,u=Li(r.nextLocation.pathname,a)||r.nextLocation.pathname;return Yu(s.pathname,u)!=null||Yu(s.pathname,c)!=null}var hk=Pw();function DS(e,n){return function(){return e.apply(n,arguments)}}const{toString:mk}=Object.prototype,{getPrototypeOf:h0}=Object,{iterator:gd,toStringTag:_S}=Symbol,yd=(e=>n=>{const r=mk.call(n);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Wn=e=>(e=e.toLowerCase(),n=>yd(n)===e),xd=e=>n=>typeof n===e,{isArray:jo}=Array,fo=xd("undefined");function bl(e){return e!==null&&!fo(e)&&e.constructor!==null&&!fo(e.constructor)&&rn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const LS=Wn("ArrayBuffer");function pk(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&LS(e.buffer),n}const gk=xd("string"),rn=xd("function"),NS=xd("number"),vl=e=>e!==null&&typeof e=="object",yk=e=>e===!0||e===!1,Ru=e=>{if(yd(e)!=="object")return!1;const n=h0(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(_S in e)&&!(gd in e)},xk=e=>{if(!vl(e)||bl(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},bk=Wn("Date"),vk=Wn("File"),wk=Wn("Blob"),Sk=Wn("FileList"),Ck=e=>vl(e)&&rn(e.pipe),Tk=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||rn(e.append)&&((n=yd(e))==="formdata"||n==="object"&&rn(e.toString)&&e.toString()==="[object FormData]"))},jk=Wn("URLSearchParams"),[Ek,Ak,kk,Rk]=["ReadableStream","Request","Response","Headers"].map(Wn),zk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wl(e,n,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let a,s;if(typeof e!="object"&&(e=[e]),jo(e))for(a=0,s=e.length;a<s;a++)n.call(null,e[a],a,e);else{if(bl(e))return;const c=r?Object.getOwnPropertyNames(e):Object.keys(e),u=c.length;let f;for(a=0;a<u;a++)f=c[a],n.call(null,e[f],f,e)}}function BS(e,n){if(bl(e))return null;n=n.toLowerCase();const r=Object.keys(e);let a=r.length,s;for(;a-- >0;)if(s=r[a],n===s.toLowerCase())return s;return null}const Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,US=e=>!fo(e)&&e!==Gr;function gp(){const{caseless:e,skipUndefined:n}=US(this)&&this||{},r={},a=(s,c)=>{const u=e&&BS(r,c)||c;Ru(r[u])&&Ru(s)?r[u]=gp(r[u],s):Ru(s)?r[u]=gp({},s):jo(s)?r[u]=s.slice():(!n||!fo(s))&&(r[u]=s)};for(let s=0,c=arguments.length;s<c;s++)arguments[s]&&wl(arguments[s],a);return r}const Mk=(e,n,r,{allOwnKeys:a}={})=>(wl(n,(s,c)=>{r&&rn(s)?e[c]=DS(s,r):e[c]=s},{allOwnKeys:a}),e),$k=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ok=(e,n,r,a)=>{e.prototype=Object.create(n.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),r&&Object.assign(e.prototype,r)},Dk=(e,n,r,a)=>{let s,c,u;const f={};if(n=n||{},e==null)return n;do{for(s=Object.getOwnPropertyNames(e),c=s.length;c-- >0;)u=s[c],(!a||a(u,e,n))&&!f[u]&&(n[u]=e[u],f[u]=!0);e=r!==!1&&h0(e)}while(e&&(!r||r(e,n))&&e!==Object.prototype);return n},_k=(e,n,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=n.length;const a=e.indexOf(n,r);return a!==-1&&a===r},Lk=e=>{if(!e)return null;if(jo(e))return e;let n=e.length;if(!NS(n))return null;const r=new Array(n);for(;n-- >0;)r[n]=e[n];return r},Nk=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&h0(Uint8Array)),Bk=(e,n)=>{const a=(e&&e[gd]).call(e);let s;for(;(s=a.next())&&!s.done;){const c=s.value;n.call(e,c[0],c[1])}},Uk=(e,n)=>{let r;const a=[];for(;(r=e.exec(n))!==null;)a.push(r);return a},Vk=Wn("HTMLFormElement"),Pk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,s){return a.toUpperCase()+s}),Xb=(({hasOwnProperty:e})=>(n,r)=>e.call(n,r))(Object.prototype),Hk=Wn("RegExp"),VS=(e,n)=>{const r=Object.getOwnPropertyDescriptors(e),a={};wl(r,(s,c)=>{let u;(u=n(s,c,e))!==!1&&(a[c]=u||s)}),Object.defineProperties(e,a)},Fk=e=>{VS(e,(n,r)=>{if(rn(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const a=e[r];if(rn(a)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},qk=(e,n)=>{const r={},a=s=>{s.forEach(c=>{r[c]=!0})};return jo(e)?a(e):a(String(e).split(n)),r},Gk=()=>{},Yk=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function Kk(e){return!!(e&&rn(e.append)&&e[_S]==="FormData"&&e[gd])}const Xk=e=>{const n=new Array(10),r=(a,s)=>{if(vl(a)){if(n.indexOf(a)>=0)return;if(bl(a))return a;if(!("toJSON"in a)){n[s]=a;const c=jo(a)?[]:{};return wl(a,(u,f)=>{const p=r(u,s+1);!fo(p)&&(c[f]=p)}),n[s]=void 0,c}}return a};return r(e,0)},Qk=Wn("AsyncFunction"),Ik=e=>e&&(vl(e)||rn(e))&&rn(e.then)&&rn(e.catch),PS=((e,n)=>e?setImmediate:n?((r,a)=>(Gr.addEventListener("message",({source:s,data:c})=>{s===Gr&&c===r&&a.length&&a.shift()()},!1),s=>{a.push(s),Gr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",rn(Gr.postMessage)),Zk=typeof queueMicrotask<"u"?queueMicrotask.bind(Gr):typeof process<"u"&&process.nextTick||PS,Jk=e=>e!=null&&rn(e[gd]),G={isArray:jo,isArrayBuffer:LS,isBuffer:bl,isFormData:Tk,isArrayBufferView:pk,isString:gk,isNumber:NS,isBoolean:yk,isObject:vl,isPlainObject:Ru,isEmptyObject:xk,isReadableStream:Ek,isRequest:Ak,isResponse:kk,isHeaders:Rk,isUndefined:fo,isDate:bk,isFile:vk,isBlob:wk,isRegExp:Hk,isFunction:rn,isStream:Ck,isURLSearchParams:jk,isTypedArray:Nk,isFileList:Sk,forEach:wl,merge:gp,extend:Mk,trim:zk,stripBOM:$k,inherits:Ok,toFlatObject:Dk,kindOf:yd,kindOfTest:Wn,endsWith:_k,toArray:Lk,forEachEntry:Bk,matchAll:Uk,isHTMLForm:Vk,hasOwnProperty:Xb,hasOwnProp:Xb,reduceDescriptors:VS,freezeMethods:Fk,toObjectSet:qk,toCamelCase:Pk,noop:Gk,toFiniteNumber:Yk,findKey:BS,global:Gr,isContextDefined:US,isSpecCompliantForm:Kk,toJSONObject:Xk,isAsyncFn:Qk,isThenable:Ik,setImmediate:PS,asap:Zk,isIterable:Jk};function Se(e,n,r,a,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),r&&(this.config=r),a&&(this.request=a),s&&(this.response=s,this.status=s.status?s.status:null)}G.inherits(Se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.status}}});const HS=Se.prototype,FS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{FS[e]={value:e}});Object.defineProperties(Se,FS);Object.defineProperty(HS,"isAxiosError",{value:!0});Se.from=(e,n,r,a,s,c)=>{const u=Object.create(HS);G.toFlatObject(e,u,function(y){return y!==Error.prototype},g=>g!=="isAxiosError");const f=e&&e.message?e.message:"Error",p=n==null&&e?e.code:n;return Se.call(u,f,p,r,a,s),e&&u.cause==null&&Object.defineProperty(u,"cause",{value:e,configurable:!0}),u.name=e&&e.name||"Error",c&&Object.assign(u,c),u};const Wk=null;function yp(e){return G.isPlainObject(e)||G.isArray(e)}function qS(e){return G.endsWith(e,"[]")?e.slice(0,-2):e}function Qb(e,n,r){return e?e.concat(n).map(function(s,c){return s=qS(s),!r&&c?"["+s+"]":s}).join(r?".":""):n}function e8(e){return G.isArray(e)&&!e.some(yp)}const t8=G.toFlatObject(G,{},null,function(n){return/^is[A-Z]/.test(n)});function bd(e,n,r){if(!G.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,r=G.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,A){return!G.isUndefined(A[S])});const a=r.metaTokens,s=r.visitor||y,c=r.dots,u=r.indexes,p=(r.Blob||typeof Blob<"u"&&Blob)&&G.isSpecCompliantForm(n);if(!G.isFunction(s))throw new TypeError("visitor must be a function");function g(w){if(w===null)return"";if(G.isDate(w))return w.toISOString();if(G.isBoolean(w))return w.toString();if(!p&&G.isBlob(w))throw new Se("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(w)||G.isTypedArray(w)?p&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function y(w,S,A){let R=w;if(w&&!A&&typeof w=="object"){if(G.endsWith(S,"{}"))S=a?S:S.slice(0,-2),w=JSON.stringify(w);else if(G.isArray(w)&&e8(w)||(G.isFileList(w)||G.endsWith(S,"[]"))&&(R=G.toArray(w)))return S=qS(S),R.forEach(function($,N){!(G.isUndefined($)||$===null)&&n.append(u===!0?Qb([S],N,c):u===null?S:S+"[]",g($))}),!1}return yp(w)?!0:(n.append(Qb(A,S,c),g(w)),!1)}const x=[],v=Object.assign(t8,{defaultVisitor:y,convertValue:g,isVisitable:yp});function C(w,S){if(!G.isUndefined(w)){if(x.indexOf(w)!==-1)throw Error("Circular reference detected in "+S.join("."));x.push(w),G.forEach(w,function(R,O){(!(G.isUndefined(R)||R===null)&&s.call(n,R,G.isString(O)?O.trim():O,S,v))===!0&&C(R,S?S.concat(O):[O])}),x.pop()}}if(!G.isObject(e))throw new TypeError("data must be an object");return C(e),n}function Ib(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return n[a]})}function m0(e,n){this._pairs=[],e&&bd(e,this,n)}const GS=m0.prototype;GS.append=function(n,r){this._pairs.push([n,r])};GS.toString=function(n){const r=n?function(a){return n.call(this,a,Ib)}:Ib;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function n8(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function YS(e,n,r){if(!n)return e;const a=r&&r.encode||n8;G.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let c;if(s?c=s(n,r):c=G.isURLSearchParams(n)?n.toString():new m0(n,r).toString(a),c){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class Zb{constructor(){this.handlers=[]}use(n,r,a){return this.handlers.push({fulfilled:n,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){G.forEach(this.handlers,function(a){a!==null&&n(a)})}}const KS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},i8=typeof URLSearchParams<"u"?URLSearchParams:m0,r8=typeof FormData<"u"?FormData:null,a8=typeof Blob<"u"?Blob:null,o8={isBrowser:!0,classes:{URLSearchParams:i8,FormData:r8,Blob:a8},protocols:["http","https","file","blob","url","data"]},p0=typeof window<"u"&&typeof document<"u",xp=typeof navigator=="object"&&navigator||void 0,s8=p0&&(!xp||["ReactNative","NativeScript","NS"].indexOf(xp.product)<0),l8=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",c8=p0&&window.location.href||"http://localhost",u8=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:p0,hasStandardBrowserEnv:s8,hasStandardBrowserWebWorkerEnv:l8,navigator:xp,origin:c8},Symbol.toStringTag,{value:"Module"})),Ht={...u8,...o8};function d8(e,n){return bd(e,new Ht.classes.URLSearchParams,{visitor:function(r,a,s,c){return Ht.isNode&&G.isBuffer(r)?(this.append(a,r.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...n})}function f8(e){return G.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function h8(e){const n={},r=Object.keys(e);let a;const s=r.length;let c;for(a=0;a<s;a++)c=r[a],n[c]=e[c];return n}function XS(e){function n(r,a,s,c){let u=r[c++];if(u==="__proto__")return!0;const f=Number.isFinite(+u),p=c>=r.length;return u=!u&&G.isArray(s)?s.length:u,p?(G.hasOwnProp(s,u)?s[u]=[s[u],a]:s[u]=a,!f):((!s[u]||!G.isObject(s[u]))&&(s[u]=[]),n(r,a,s[u],c)&&G.isArray(s[u])&&(s[u]=h8(s[u])),!f)}if(G.isFormData(e)&&G.isFunction(e.entries)){const r={};return G.forEachEntry(e,(a,s)=>{n(f8(a),s,r,0)}),r}return null}function m8(e,n,r){if(G.isString(e))try{return(n||JSON.parse)(e),G.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}const Sl={transitional:KS,adapter:["xhr","http","fetch"],transformRequest:[function(n,r){const a=r.getContentType()||"",s=a.indexOf("application/json")>-1,c=G.isObject(n);if(c&&G.isHTMLForm(n)&&(n=new FormData(n)),G.isFormData(n))return s?JSON.stringify(XS(n)):n;if(G.isArrayBuffer(n)||G.isBuffer(n)||G.isStream(n)||G.isFile(n)||G.isBlob(n)||G.isReadableStream(n))return n;if(G.isArrayBufferView(n))return n.buffer;if(G.isURLSearchParams(n))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let f;if(c){if(a.indexOf("application/x-www-form-urlencoded")>-1)return d8(n,this.formSerializer).toString();if((f=G.isFileList(n))||a.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return bd(f?{"files[]":n}:n,p&&new p,this.formSerializer)}}return c||s?(r.setContentType("application/json",!1),m8(n)):n}],transformResponse:[function(n){const r=this.transitional||Sl.transitional,a=r&&r.forcedJSONParsing,s=this.responseType==="json";if(G.isResponse(n)||G.isReadableStream(n))return n;if(n&&G.isString(n)&&(a&&!this.responseType||s)){const u=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(n,this.parseReviver)}catch(f){if(u)throw f.name==="SyntaxError"?Se.from(f,Se.ERR_BAD_RESPONSE,this,null,this.response):f}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],e=>{Sl.headers[e]={}});const p8=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),g8=e=>{const n={};let r,a,s;return e&&e.split(`
`).forEach(function(u){s=u.indexOf(":"),r=u.substring(0,s).trim().toLowerCase(),a=u.substring(s+1).trim(),!(!r||n[r]&&p8[r])&&(r==="set-cookie"?n[r]?n[r].push(a):n[r]=[a]:n[r]=n[r]?n[r]+", "+a:a)}),n},Jb=Symbol("internals");function $s(e){return e&&String(e).trim().toLowerCase()}function zu(e){return e===!1||e==null?e:G.isArray(e)?e.map(zu):String(e)}function y8(e){const n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)n[a[1]]=a[2];return n}const x8=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function hm(e,n,r,a,s){if(G.isFunction(a))return a.call(this,n,r);if(s&&(n=r),!!G.isString(n)){if(G.isString(a))return n.indexOf(a)!==-1;if(G.isRegExp(a))return a.test(n)}}function b8(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,r,a)=>r.toUpperCase()+a)}function v8(e,n){const r=G.toCamelCase(" "+n);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{value:function(s,c,u){return this[a].call(this,n,s,c,u)},configurable:!0})})}let an=class{constructor(n){n&&this.set(n)}set(n,r,a){const s=this;function c(f,p,g){const y=$s(p);if(!y)throw new Error("header name must be a non-empty string");const x=G.findKey(s,y);(!x||s[x]===void 0||g===!0||g===void 0&&s[x]!==!1)&&(s[x||p]=zu(f))}const u=(f,p)=>G.forEach(f,(g,y)=>c(g,y,p));if(G.isPlainObject(n)||n instanceof this.constructor)u(n,r);else if(G.isString(n)&&(n=n.trim())&&!x8(n))u(g8(n),r);else if(G.isObject(n)&&G.isIterable(n)){let f={},p,g;for(const y of n){if(!G.isArray(y))throw TypeError("Object iterator must return a key-value pair");f[g=y[0]]=(p=f[g])?G.isArray(p)?[...p,y[1]]:[p,y[1]]:y[1]}u(f,r)}else n!=null&&c(r,n,a);return this}get(n,r){if(n=$s(n),n){const a=G.findKey(this,n);if(a){const s=this[a];if(!r)return s;if(r===!0)return y8(s);if(G.isFunction(r))return r.call(this,s,a);if(G.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,r){if(n=$s(n),n){const a=G.findKey(this,n);return!!(a&&this[a]!==void 0&&(!r||hm(this,this[a],a,r)))}return!1}delete(n,r){const a=this;let s=!1;function c(u){if(u=$s(u),u){const f=G.findKey(a,u);f&&(!r||hm(a,a[f],f,r))&&(delete a[f],s=!0)}}return G.isArray(n)?n.forEach(c):c(n),s}clear(n){const r=Object.keys(this);let a=r.length,s=!1;for(;a--;){const c=r[a];(!n||hm(this,this[c],c,n,!0))&&(delete this[c],s=!0)}return s}normalize(n){const r=this,a={};return G.forEach(this,(s,c)=>{const u=G.findKey(a,c);if(u){r[u]=zu(s),delete r[c];return}const f=n?b8(c):String(c).trim();f!==c&&delete r[c],r[f]=zu(s),a[f]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const r=Object.create(null);return G.forEach(this,(a,s)=>{a!=null&&a!==!1&&(r[s]=n&&G.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,r])=>n+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...r){const a=new this(n);return r.forEach(s=>a.set(s)),a}static accessor(n){const a=(this[Jb]=this[Jb]={accessors:{}}).accessors,s=this.prototype;function c(u){const f=$s(u);a[f]||(v8(s,u),a[f]=!0)}return G.isArray(n)?n.forEach(c):c(n),this}};an.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(an.prototype,({value:e},n)=>{let r=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(a){this[r]=a}}});G.freezeMethods(an);function mm(e,n){const r=this||Sl,a=n||r,s=an.from(a.headers);let c=a.data;return G.forEach(e,function(f){c=f.call(r,c,s.normalize(),n?n.status:void 0)}),s.normalize(),c}function QS(e){return!!(e&&e.__CANCEL__)}function Eo(e,n,r){Se.call(this,e??"canceled",Se.ERR_CANCELED,n,r),this.name="CanceledError"}G.inherits(Eo,Se,{__CANCEL__:!0});function IS(e,n,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?e(r):n(new Se("Request failed with status code "+r.status,[Se.ERR_BAD_REQUEST,Se.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function w8(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function S8(e,n){e=e||10;const r=new Array(e),a=new Array(e);let s=0,c=0,u;return n=n!==void 0?n:1e3,function(p){const g=Date.now(),y=a[c];u||(u=g),r[s]=p,a[s]=g;let x=c,v=0;for(;x!==s;)v+=r[x++],x=x%e;if(s=(s+1)%e,s===c&&(c=(c+1)%e),g-u<n)return;const C=y&&g-y;return C?Math.round(v*1e3/C):void 0}}function C8(e,n){let r=0,a=1e3/n,s,c;const u=(g,y=Date.now())=>{r=y,s=null,c&&(clearTimeout(c),c=null),e(...g)};return[(...g)=>{const y=Date.now(),x=y-r;x>=a?u(g,y):(s=g,c||(c=setTimeout(()=>{c=null,u(s)},a-x)))},()=>s&&u(s)]}const Ku=(e,n,r=3)=>{let a=0;const s=S8(50,250);return C8(c=>{const u=c.loaded,f=c.lengthComputable?c.total:void 0,p=u-a,g=s(p),y=u<=f;a=u;const x={loaded:u,total:f,progress:f?u/f:void 0,bytes:p,rate:g||void 0,estimated:g&&f&&y?(f-u)/g:void 0,event:c,lengthComputable:f!=null,[n?"download":"upload"]:!0};e(x)},r)},Wb=(e,n)=>{const r=e!=null;return[a=>n[0]({lengthComputable:r,total:e,loaded:a}),n[1]]},ev=e=>(...n)=>G.asap(()=>e(...n)),T8=Ht.hasStandardBrowserEnv?((e,n)=>r=>(r=new URL(r,Ht.origin),e.protocol===r.protocol&&e.host===r.host&&(n||e.port===r.port)))(new URL(Ht.origin),Ht.navigator&&/(msie|trident)/i.test(Ht.navigator.userAgent)):()=>!0,j8=Ht.hasStandardBrowserEnv?{write(e,n,r,a,s,c,u){if(typeof document>"u")return;const f=[`${e}=${encodeURIComponent(n)}`];G.isNumber(r)&&f.push(`expires=${new Date(r).toUTCString()}`),G.isString(a)&&f.push(`path=${a}`),G.isString(s)&&f.push(`domain=${s}`),c===!0&&f.push("secure"),G.isString(u)&&f.push(`SameSite=${u}`),document.cookie=f.join("; ")},read(e){if(typeof document>"u")return null;const n=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return n?decodeURIComponent(n[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function E8(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function A8(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function ZS(e,n,r){let a=!E8(n);return e&&(a||r==!1)?A8(e,n):n}const tv=e=>e instanceof an?{...e}:e;function na(e,n){n=n||{};const r={};function a(g,y,x,v){return G.isPlainObject(g)&&G.isPlainObject(y)?G.merge.call({caseless:v},g,y):G.isPlainObject(y)?G.merge({},y):G.isArray(y)?y.slice():y}function s(g,y,x,v){if(G.isUndefined(y)){if(!G.isUndefined(g))return a(void 0,g,x,v)}else return a(g,y,x,v)}function c(g,y){if(!G.isUndefined(y))return a(void 0,y)}function u(g,y){if(G.isUndefined(y)){if(!G.isUndefined(g))return a(void 0,g)}else return a(void 0,y)}function f(g,y,x){if(x in n)return a(g,y);if(x in e)return a(void 0,g)}const p={url:c,method:c,data:c,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f,headers:(g,y,x)=>s(tv(g),tv(y),x,!0)};return G.forEach(Object.keys({...e,...n}),function(y){const x=p[y]||s,v=x(e[y],n[y],y);G.isUndefined(v)&&x!==f||(r[y]=v)}),r}const JS=e=>{const n=na({},e);let{data:r,withXSRFToken:a,xsrfHeaderName:s,xsrfCookieName:c,headers:u,auth:f}=n;if(n.headers=u=an.from(u),n.url=YS(ZS(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),f&&u.set("Authorization","Basic "+btoa((f.username||"")+":"+(f.password?unescape(encodeURIComponent(f.password)):""))),G.isFormData(r)){if(Ht.hasStandardBrowserEnv||Ht.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if(G.isFunction(r.getHeaders)){const p=r.getHeaders(),g=["content-type","content-length"];Object.entries(p).forEach(([y,x])=>{g.includes(y.toLowerCase())&&u.set(y,x)})}}if(Ht.hasStandardBrowserEnv&&(a&&G.isFunction(a)&&(a=a(n)),a||a!==!1&&T8(n.url))){const p=s&&c&&j8.read(c);p&&u.set(s,p)}return n},k8=typeof XMLHttpRequest<"u",R8=k8&&function(e){return new Promise(function(r,a){const s=JS(e);let c=s.data;const u=an.from(s.headers).normalize();let{responseType:f,onUploadProgress:p,onDownloadProgress:g}=s,y,x,v,C,w;function S(){C&&C(),w&&w(),s.cancelToken&&s.cancelToken.unsubscribe(y),s.signal&&s.signal.removeEventListener("abort",y)}let A=new XMLHttpRequest;A.open(s.method.toUpperCase(),s.url,!0),A.timeout=s.timeout;function R(){if(!A)return;const $=an.from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),P={data:!f||f==="text"||f==="json"?A.responseText:A.response,status:A.status,statusText:A.statusText,headers:$,config:e,request:A};IS(function(L){r(L),S()},function(L){a(L),S()},P),A=null}"onloadend"in A?A.onloadend=R:A.onreadystatechange=function(){!A||A.readyState!==4||A.status===0&&!(A.responseURL&&A.responseURL.indexOf("file:")===0)||setTimeout(R)},A.onabort=function(){A&&(a(new Se("Request aborted",Se.ECONNABORTED,e,A)),A=null)},A.onerror=function(N){const P=N&&N.message?N.message:"Network Error",_=new Se(P,Se.ERR_NETWORK,e,A);_.event=N||null,a(_),A=null},A.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||KS;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),a(new Se(N,P.clarifyTimeoutError?Se.ETIMEDOUT:Se.ECONNABORTED,e,A)),A=null},c===void 0&&u.setContentType(null),"setRequestHeader"in A&&G.forEach(u.toJSON(),function(N,P){A.setRequestHeader(P,N)}),G.isUndefined(s.withCredentials)||(A.withCredentials=!!s.withCredentials),f&&f!=="json"&&(A.responseType=s.responseType),g&&([v,w]=Ku(g,!0),A.addEventListener("progress",v)),p&&A.upload&&([x,C]=Ku(p),A.upload.addEventListener("progress",x),A.upload.addEventListener("loadend",C)),(s.cancelToken||s.signal)&&(y=$=>{A&&(a(!$||$.type?new Eo(null,e,A):$),A.abort(),A=null)},s.cancelToken&&s.cancelToken.subscribe(y),s.signal&&(s.signal.aborted?y():s.signal.addEventListener("abort",y)));const O=w8(s.url);if(O&&Ht.protocols.indexOf(O)===-1){a(new Se("Unsupported protocol "+O+":",Se.ERR_BAD_REQUEST,e));return}A.send(c||null)})},z8=(e,n)=>{const{length:r}=e=e?e.filter(Boolean):[];if(n||r){let a=new AbortController,s;const c=function(g){if(!s){s=!0,f();const y=g instanceof Error?g:this.reason;a.abort(y instanceof Se?y:new Eo(y instanceof Error?y.message:y))}};let u=n&&setTimeout(()=>{u=null,c(new Se(`timeout ${n} of ms exceeded`,Se.ETIMEDOUT))},n);const f=()=>{e&&(u&&clearTimeout(u),u=null,e.forEach(g=>{g.unsubscribe?g.unsubscribe(c):g.removeEventListener("abort",c)}),e=null)};e.forEach(g=>g.addEventListener("abort",c));const{signal:p}=a;return p.unsubscribe=()=>G.asap(f),p}},M8=function*(e,n){let r=e.byteLength;if(r<n){yield e;return}let a=0,s;for(;a<r;)s=a+n,yield e.slice(a,s),a=s},$8=async function*(e,n){for await(const r of O8(e))yield*M8(r,n)},O8=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:r,value:a}=await n.read();if(r)break;yield a}}finally{await n.cancel()}},nv=(e,n,r,a)=>{const s=$8(e,n);let c=0,u,f=p=>{u||(u=!0,a&&a(p))};return new ReadableStream({async pull(p){try{const{done:g,value:y}=await s.next();if(g){f(),p.close();return}let x=y.byteLength;if(r){let v=c+=x;r(v)}p.enqueue(new Uint8Array(y))}catch(g){throw f(g),g}},cancel(p){return f(p),s.return()}},{highWaterMark:2})},iv=64*1024,{isFunction:Wc}=G,D8=(({Request:e,Response:n})=>({Request:e,Response:n}))(G.global),{ReadableStream:rv,TextEncoder:av}=G.global,ov=(e,...n)=>{try{return!!e(...n)}catch{return!1}},_8=e=>{e=G.merge.call({skipUndefined:!0},D8,e);const{fetch:n,Request:r,Response:a}=e,s=n?Wc(n):typeof fetch=="function",c=Wc(r),u=Wc(a);if(!s)return!1;const f=s&&Wc(rv),p=s&&(typeof av=="function"?(w=>S=>w.encode(S))(new av):async w=>new Uint8Array(await new r(w).arrayBuffer())),g=c&&f&&ov(()=>{let w=!1;const S=new r(Ht.origin,{body:new rv,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return w&&!S}),y=u&&f&&ov(()=>G.isReadableStream(new a("").body)),x={stream:y&&(w=>w.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!x[w]&&(x[w]=(S,A)=>{let R=S&&S[w];if(R)return R.call(S);throw new Se(`Response type '${w}' is not supported`,Se.ERR_NOT_SUPPORT,A)})});const v=async w=>{if(w==null)return 0;if(G.isBlob(w))return w.size;if(G.isSpecCompliantForm(w))return(await new r(Ht.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(G.isArrayBufferView(w)||G.isArrayBuffer(w))return w.byteLength;if(G.isURLSearchParams(w)&&(w=w+""),G.isString(w))return(await p(w)).byteLength},C=async(w,S)=>{const A=G.toFiniteNumber(w.getContentLength());return A??v(S)};return async w=>{let{url:S,method:A,data:R,signal:O,cancelToken:$,timeout:N,onDownloadProgress:P,onUploadProgress:_,responseType:L,headers:ee,withCredentials:ie="same-origin",fetchOptions:se}=JS(w),le=n||fetch;L=L?(L+"").toLowerCase():"text";let k=z8([O,$&&$.toAbortSignal()],N),ae=null;const ne=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let ce;try{if(_&&g&&A!=="get"&&A!=="head"&&(ce=await C(ee,R))!==0){let z=new r(S,{method:"POST",body:R,duplex:"half"}),V;if(G.isFormData(R)&&(V=z.headers.get("content-type"))&&ee.setContentType(V),z.body){const[I,oe]=Wb(ce,Ku(ev(_)));R=nv(z.body,iv,I,oe)}}G.isString(ie)||(ie=ie?"include":"omit");const B=c&&"credentials"in r.prototype,Z={...se,signal:k,method:A.toUpperCase(),headers:ee.normalize().toJSON(),body:R,duplex:"half",credentials:B?ie:void 0};ae=c&&new r(S,Z);let K=await(c?le(ae,se):le(S,Z));const re=y&&(L==="stream"||L==="response");if(y&&(P||re&&ne)){const z={};["status","statusText","headers"].forEach(de=>{z[de]=K[de]});const V=G.toFiniteNumber(K.headers.get("content-length")),[I,oe]=P&&Wb(V,Ku(ev(P),!0))||[];K=new a(nv(K.body,iv,I,()=>{oe&&oe(),ne&&ne()}),z)}L=L||"text";let he=await x[G.findKey(x,L)||"text"](K,w);return!re&&ne&&ne(),await new Promise((z,V)=>{IS(z,V,{data:he,headers:an.from(K.headers),status:K.status,statusText:K.statusText,config:w,request:ae})})}catch(B){throw ne&&ne(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new Se("Network Error",Se.ERR_NETWORK,w,ae),{cause:B.cause||B}):Se.from(B,B&&B.code,w,ae)}}},L8=new Map,WS=e=>{let n=e&&e.env||{};const{fetch:r,Request:a,Response:s}=n,c=[a,s,r];let u=c.length,f=u,p,g,y=L8;for(;f--;)p=c[f],g=y.get(p),g===void 0&&y.set(p,g=f?new Map:_8(n)),y=g;return g};WS();const g0={http:Wk,xhr:R8,fetch:{get:WS}};G.forEach(g0,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const sv=e=>`- ${e}`,N8=e=>G.isFunction(e)||e===null||e===!1;function B8(e,n){e=G.isArray(e)?e:[e];const{length:r}=e;let a,s;const c={};for(let u=0;u<r;u++){a=e[u];let f;if(s=a,!N8(a)&&(s=g0[(f=String(a)).toLowerCase()],s===void 0))throw new Se(`Unknown adapter '${f}'`);if(s&&(G.isFunction(s)||(s=s.get(n))))break;c[f||"#"+u]=s}if(!s){const u=Object.entries(c).map(([p,g])=>`adapter ${p} `+(g===!1?"is not supported by the environment":"is not available in the build"));let f=r?u.length>1?`since :
`+u.map(sv).join(`
`):" "+sv(u[0]):"as no adapter specified";throw new Se("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return s}const e5={getAdapter:B8,adapters:g0};function pm(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Eo(null,e)}function lv(e){return pm(e),e.headers=an.from(e.headers),e.data=mm.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),e5.getAdapter(e.adapter||Sl.adapter,e)(e).then(function(a){return pm(e),a.data=mm.call(e,e.transformResponse,a),a.headers=an.from(a.headers),a},function(a){return QS(a)||(pm(e),a&&a.response&&(a.response.data=mm.call(e,e.transformResponse,a.response),a.response.headers=an.from(a.response.headers))),Promise.reject(a)})}const t5="1.13.2",vd={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{vd[e]=function(a){return typeof a===e||"a"+(n<1?"n ":" ")+e}});const cv={};vd.transitional=function(n,r,a){function s(c,u){return"[Axios v"+t5+"] Transitional option '"+c+"'"+u+(a?". "+a:"")}return(c,u,f)=>{if(n===!1)throw new Se(s(u," has been removed"+(r?" in "+r:"")),Se.ERR_DEPRECATED);return r&&!cv[u]&&(cv[u]=!0,console.warn(s(u," has been deprecated since v"+r+" and will be removed in the near future"))),n?n(c,u,f):!0}};vd.spelling=function(n){return(r,a)=>(console.warn(`${a} is likely a misspelling of ${n}`),!0)};function U8(e,n,r){if(typeof e!="object")throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let s=a.length;for(;s-- >0;){const c=a[s],u=n[c];if(u){const f=e[c],p=f===void 0||u(f,c,e);if(p!==!0)throw new Se("option "+c+" must be "+p,Se.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Se("Unknown option "+c,Se.ERR_BAD_OPTION)}}const Mu={assertOptions:U8,validators:vd},ri=Mu.validators;let Ir=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Zb,response:new Zb}}async request(n,r){try{return await this._request(n,r)}catch(a){if(a instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const c=s.stack?s.stack.replace(/^.+\n/,""):"";try{a.stack?c&&!String(a.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+c):a.stack=c}catch{}}throw a}}_request(n,r){typeof n=="string"?(r=r||{},r.url=n):r=n||{},r=na(this.defaults,r);const{transitional:a,paramsSerializer:s,headers:c}=r;a!==void 0&&Mu.assertOptions(a,{silentJSONParsing:ri.transitional(ri.boolean),forcedJSONParsing:ri.transitional(ri.boolean),clarifyTimeoutError:ri.transitional(ri.boolean)},!1),s!=null&&(G.isFunction(s)?r.paramsSerializer={serialize:s}:Mu.assertOptions(s,{encode:ri.function,serialize:ri.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Mu.assertOptions(r,{baseUrl:ri.spelling("baseURL"),withXsrfToken:ri.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let u=c&&G.merge(c.common,c[r.method]);c&&G.forEach(["delete","get","head","post","put","patch","common"],w=>{delete c[w]}),r.headers=an.concat(u,c);const f=[];let p=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(r)===!1||(p=p&&S.synchronous,f.unshift(S.fulfilled,S.rejected))});const g=[];this.interceptors.response.forEach(function(S){g.push(S.fulfilled,S.rejected)});let y,x=0,v;if(!p){const w=[lv.bind(this),void 0];for(w.unshift(...f),w.push(...g),v=w.length,y=Promise.resolve(r);x<v;)y=y.then(w[x++],w[x++]);return y}v=f.length;let C=r;for(;x<v;){const w=f[x++],S=f[x++];try{C=w(C)}catch(A){S.call(this,A);break}}try{y=lv.call(this,C)}catch(w){return Promise.reject(w)}for(x=0,v=g.length;x<v;)y=y.then(g[x++],g[x++]);return y}getUri(n){n=na(this.defaults,n);const r=ZS(n.baseURL,n.url,n.allowAbsoluteUrls);return YS(r,n.params,n.paramsSerializer)}};G.forEach(["delete","get","head","options"],function(n){Ir.prototype[n]=function(r,a){return this.request(na(a||{},{method:n,url:r,data:(a||{}).data}))}});G.forEach(["post","put","patch"],function(n){function r(a){return function(c,u,f){return this.request(na(f||{},{method:n,headers:a?{"Content-Type":"multipart/form-data"}:{},url:c,data:u}))}}Ir.prototype[n]=r(),Ir.prototype[n+"Form"]=r(!0)});let V8=class n5{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(c){r=c});const a=this;this.promise.then(s=>{if(!a._listeners)return;let c=a._listeners.length;for(;c-- >0;)a._listeners[c](s);a._listeners=null}),this.promise.then=s=>{let c;const u=new Promise(f=>{a.subscribe(f),c=f}).then(s);return u.cancel=function(){a.unsubscribe(c)},u},n(function(c,u,f){a.reason||(a.reason=new Eo(c,u,f),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const r=this._listeners.indexOf(n);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const n=new AbortController,r=a=>{n.abort(a)};return this.subscribe(r),n.signal.unsubscribe=()=>this.unsubscribe(r),n.signal}static source(){let n;return{token:new n5(function(s){n=s}),cancel:n}}};function P8(e){return function(r){return e.apply(null,r)}}function H8(e){return G.isObject(e)&&e.isAxiosError===!0}const bp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(bp).forEach(([e,n])=>{bp[n]=e});function i5(e){const n=new Ir(e),r=DS(Ir.prototype.request,n);return G.extend(r,Ir.prototype,n,{allOwnKeys:!0}),G.extend(r,n,null,{allOwnKeys:!0}),r.create=function(s){return i5(na(e,s))},r}const ht=i5(Sl);ht.Axios=Ir;ht.CanceledError=Eo;ht.CancelToken=V8;ht.isCancel=QS;ht.VERSION=t5;ht.toFormData=bd;ht.AxiosError=Se;ht.Cancel=ht.CanceledError;ht.all=function(n){return Promise.all(n)};ht.spread=P8;ht.isAxiosError=H8;ht.mergeConfig=na;ht.AxiosHeaders=an;ht.formToJSON=e=>XS(G.isHTMLForm(e)?new FormData(e):e);ht.getAdapter=e5.getAdapter;ht.HttpStatusCode=bp;ht.default=ht;const{Axios:qU,AxiosError:GU,CanceledError:YU,isCancel:KU,CancelToken:XU,VERSION:QU,all:IU,Cancel:ZU,isAxiosError:JU,spread:WU,toFormData:eV,AxiosHeaders:tV,HttpStatusCode:nV,formToJSON:iV,getAdapter:rV,mergeConfig:aV}=ht,y0=ht.create({baseURL:"http://localhost:8080/api",headers:{"Content-Type":"application/json"},withCredentials:!0});y0.interceptors.request.use(e=>{const n=localStorage.getItem("@forgefit:token");return n&&(e.headers.Authorization=`Bearer ${n}`),e},e=>Promise.reject(e));y0.interceptors.response.use(e=>e,e=>(e.response?.status===401&&(localStorage.removeItem("@forgefit:token"),localStorage.removeItem("@forgefit:user"),window.location.href="/login"),Promise.reject(e)));const uv={login:async(e,n)=>(await y0.post("/login",{email:e,senha:n})).data,logout:()=>{localStorage.removeItem("@forgefit:token"),localStorage.removeItem("@forgefit:user")}},r5=j.createContext(void 0),gm="@forgefit:user",ym="@forgefit:token",F8=({children:e})=>{const[n,r]=j.useState(null),[a,s]=j.useState(!0),c=v=>{try{localStorage.setItem(gm,JSON.stringify(v))}catch(C){console.error("Erro ao salvar dados do usuário:",C)}},u=()=>{try{const v=localStorage.getItem(gm),C=localStorage.getItem(ym);if(v&&C)return JSON.parse(v)}catch(v){console.error("Erro ao carregar dados do usuário:",v)}return null},f=()=>{try{localStorage.removeItem(gm),localStorage.removeItem(ym)}catch(v){console.error("Erro ao limpar dados do usuário:",v)}},p=j.useCallback(async(v,C)=>{s(!0);try{const w=await uv.login(v,C);if(!w.sucesso||!w.user)throw new Error(w.mensagem||"Erro ao fazer login");const S="jwt-token-"+Date.now();localStorage.setItem(ym,S);const A={id:w.user.id,name:w.user.name,avatar:w.user.avatar,role:w.user.role,matricula:w.user.matricula,pontuacaoTotal:w.user.pontuacaoTotal,creditos:w.user.creditos};c(A),r(A)}catch(w){throw console.error("Erro ao fazer login:",w),w}finally{s(!1)}},[]),g=j.useCallback(()=>{uv.logout(),f(),r(null)},[]),y=j.useCallback(async()=>{s(!0);try{const v=u();r(v||null)}catch(v){console.error("Erro ao carregar dados do usuário:",v),r(null)}finally{s(!1)}},[]);j.useEffect(()=>{y()},[y]);const x={user:n,loading:a,setUser:r,refreshUser:y,login:p,logout:g};return h.jsx(r5.Provider,{value:x,children:e})},Ao=()=>{const e=j.useContext(r5);if(e===void 0)throw new Error("useUser must be used within a UserProvider");return e},q8=E.div`
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
`,G8=E.img`
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
`,Y8=E.div`
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
`,K8=E.p`
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
`,x0="/assets/logo-INNEkeZC.png",a5=()=>h.jsxs(q8,{children:[h.jsx(G8,{src:x0,alt:"ForgeFit"}),h.jsx(Y8,{children:h.jsx("div",{className:"spinner"})}),h.jsx(K8,{children:"Carregando..."})]}),X8="/assets/background-ZhnjlJlz.mp4",Q8="/assets/gym-CRwzoXov.jpg",I8="/assets/image1-D2klLU27.png",Z8="/assets/image2-BbrRvf2u.png",J8="/assets/image3-CLqS0A-C.png",W8="/assets/image4-BwDKQ-a8.png",eR=E.header`
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
`,tR=E.img`
    height: 10rem;
    width: auto;

    @media (max-width: 48rem) {
        height: 6rem;
    }
`,nR=E.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`,iR=E.nav`
    display: flex;
    gap: 1rem;

    @media (max-width: 48rem) {
        display: none;
    }
`,eu=E.a`
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`,xm=E.section`
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
`,rR=E.img`
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
`,aR=E.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    display: block;
`,oR=E.div`
    position: relative;
    width: 100%;
    height: 100vh;
`,sR=E.div`
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
`,lR=E.span`
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
`;E.div`
    position: relative;
    z-index: 1;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;const cR=E.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 3rem;
    width: 100%;
    max-width: 1200px;
`,tu=E.div`
    display: flex;
    flex-direction: ${({reverse:e})=>e?"row-reverse":"row"};
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,nu=E.div`
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
`,iu=E.div`
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
`,uR=E.div`
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
`,bm=E.div`
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
`,dR=E.footer`
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
`,o5=e=>{switch(e){case"sm":return"0.5rem 1rem";case"lg":return"0.875rem 2rem";default:return"0.75rem 1.5rem"}},s5=e=>{switch(e){case"sm":return"0.875rem";case"lg":return"1rem";default:return"1rem"}},l5=e=>{switch(e){case"sm":return"100px";case"lg":return"140px";default:return"120px"}},c5=(e,n)=>e==="primary"?`
            background: linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary});
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
            color: ${n.colors.text};
            border: 2px solid ${n.colors.primary};

            &:hover:not(:disabled) {
                background: ${n.colors.primary}20;
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
        `,fR=E.button`
    padding: ${({size:e="md"})=>o5(e)};
    border-radius: 0.5rem;
    font-size: ${({size:e="md"})=>s5(e)};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: ${({size:e="md"})=>l5(e)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;

    ${({variant:e="primary",theme:n})=>c5(e,n)}

    @media (max-width: 48rem) {
        width: 100%;
        min-width: auto;
        padding: 0.75rem 1.5rem;
    }
`,hR=E(To)`
    padding: ${({size:e="md"})=>o5(e)};
    border-radius: 0.5rem;
    font-size: ${({size:e="md"})=>s5(e)};
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    min-width: ${({size:e="md"})=>l5(e)};

    ${({variant:e="primary",theme:n})=>c5(e,n)}

    @media (max-width: 48rem) {
        width: 100%;
        min-width: auto;
        padding: 0.75rem 1.5rem;
    }
`,Kt=({children:e,variant:n="primary",size:r="md",...a})=>h.jsx(fR,{variant:n,size:r,...a,children:e}),mR=({to:e,children:n,variant:r="primary",size:a="md"})=>h.jsx(hR,{to:e,variant:r,size:a,children:n});const pR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gR=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,r,a)=>a?a.toUpperCase():r.toLowerCase()),dv=e=>{const n=gR(e);return n.charAt(0).toUpperCase()+n.slice(1)},u5=(...e)=>e.filter((n,r,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===r).join(" ").trim(),yR=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};var xR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const bR=j.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:s="",children:c,iconNode:u,...f},p)=>j.createElement("svg",{ref:p,...xR,width:n,height:n,stroke:e,strokeWidth:a?Number(r)*24/Number(n):r,className:u5("lucide",s),...!c&&!yR(f)&&{"aria-hidden":"true"},...f},[...u.map(([g,y])=>j.createElement(g,y)),...Array.isArray(c)?c:[c]]));const ze=(e,n)=>{const r=j.forwardRef(({className:a,...s},c)=>j.createElement(bR,{ref:c,iconNode:n,className:u5(`lucide-${pR(dv(e))}`,`lucide-${e}`,a),...s}));return r.displayName=dv(e),r};const vR=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],wR=ze("activity",vR);const SR=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],CR=ze("award",SR);const TR=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],jR=ze("book-open",TR);const ER=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ho=ze("calendar",ER);const AR=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],kR=ze("chart-column",AR);const RR=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zR=ze("check",RR);const MR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],$R=ze("circle-alert",MR);const OR=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],DR=ze("copy",OR);const _R=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],LR=ze("droplets",_R);const NR=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],b0=ze("dumbbell",NR);const BR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],UR=ze("file-text",BR);const VR=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],PR=ze("flame",VR);const HR=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],FR=ze("funnel",HR);const qR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],fv=ze("history",qR);const GR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],il=ze("image",GR);const YR=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],KR=ze("log-out",YR);const XR=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],QR=ze("log-in",XR);const IR=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],rl=ze("map-pin",IR);const ZR=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],JR=ze("menu",ZR);const WR=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],d5=ze("message-square",WR);const e6=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],t6=ze("phone",e6);const n6=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],f5=ze("plus",n6);const i6=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],r6=ze("scale",i6);const a6=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],o6=ze("scroll",a6);const s6=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],l6=ze("search",s6);const c6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],u6=ze("shield",c6);const d6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],f6=ze("square-pen",d6);const h6=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],qa=ze("star",h6);const m6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],p6=ze("trash-2",m6);const g6=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],ru=ze("trending-down",g6);const y6=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Vs=ze("trending-up",y6);const x6=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],b6=ze("triangle-alert",x6);const v6=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],al=ze("trophy",v6);const w6=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],S6=ze("type",w6);const C6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],mo=ze("users",C6);const T6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wd=ze("x",T6),v0=j.createContext({});function w0(e){const n=j.useRef(null);return n.current===null&&(n.current=e()),n.current}const S0=typeof window<"u",h5=S0?j.useLayoutEffect:j.useEffect,Sd=j.createContext(null);function C0(e,n){e.indexOf(n)===-1&&e.push(n)}function T0(e,n){const r=e.indexOf(n);r>-1&&e.splice(r,1)}const Ni=(e,n,r)=>r>n?n:r<e?e:r;let j0=()=>{};const Bi={},m5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function p5(e){return typeof e=="object"&&e!==null}const g5=e=>/^0[^.\s]+$/u.test(e);function E0(e){let n;return()=>(n===void 0&&(n=e()),n)}const Bn=e=>e,j6=(e,n)=>r=>n(e(r)),Cl=(...e)=>e.reduce(j6),ol=(e,n,r)=>{const a=n-e;return a===0?1:(r-e)/a};class A0{constructor(){this.subscriptions=[]}add(n){return C0(this.subscriptions,n),()=>T0(this.subscriptions,n)}notify(n,r,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](n,r,a);else for(let c=0;c<s;c++){const u=this.subscriptions[c];u&&u(n,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ci=e=>e*1e3,Nn=e=>e/1e3;function y5(e,n){return n?e*(1e3/n):0}const x5=(e,n,r)=>(((1-3*r+3*n)*e+(3*r-6*n))*e+3*n)*e,E6=1e-7,A6=12;function k6(e,n,r,a,s){let c,u,f=0;do u=n+(r-n)/2,c=x5(u,a,s)-e,c>0?r=u:n=u;while(Math.abs(c)>E6&&++f<A6);return u}function Tl(e,n,r,a){if(e===n&&r===a)return Bn;const s=c=>k6(c,0,1,e,r);return c=>c===0||c===1?c:x5(s(c),n,a)}const b5=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,v5=e=>n=>1-e(1-n),w5=Tl(.33,1.53,.69,.99),k0=v5(w5),S5=b5(k0),C5=e=>(e*=2)<1?.5*k0(e):.5*(2-Math.pow(2,-10*(e-1))),R0=e=>1-Math.sin(Math.acos(e)),T5=v5(R0),j5=b5(R0),R6=Tl(.42,0,1,1),z6=Tl(0,0,.58,1),E5=Tl(.42,0,.58,1),M6=e=>Array.isArray(e)&&typeof e[0]!="number",A5=e=>Array.isArray(e)&&typeof e[0]=="number",$6={linear:Bn,easeIn:R6,easeInOut:E5,easeOut:z6,circIn:R0,circInOut:j5,circOut:T5,backIn:k0,backInOut:S5,backOut:w5,anticipate:C5},O6=e=>typeof e=="string",hv=e=>{if(A5(e)){j0(e.length===4);const[n,r,a,s]=e;return Tl(n,r,a,s)}else if(O6(e))return $6[e];return e},au=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function D6(e,n){let r=new Set,a=new Set,s=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(y){u.has(y)&&(g.schedule(y),e()),y(f)}const g={schedule:(y,x=!1,v=!1)=>{const w=v&&s?r:a;return x&&u.add(y),w.has(y)||w.add(y),y},cancel:y=>{a.delete(y),u.delete(y)},process:y=>{if(f=y,s){c=!0;return}s=!0,[r,a]=[a,r],r.forEach(p),r.clear(),s=!1,c&&(c=!1,g.process(y))}};return g}const _6=40;function k5(e,n){let r=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},c=()=>r=!0,u=au.reduce(($,N)=>($[N]=D6(c),$),{}),{setup:f,read:p,resolveKeyframes:g,preUpdate:y,update:x,preRender:v,render:C,postRender:w}=u,S=()=>{const $=Bi.useManualTiming?s.timestamp:performance.now();r=!1,Bi.useManualTiming||(s.delta=a?1e3/60:Math.max(Math.min($-s.timestamp,_6),1)),s.timestamp=$,s.isProcessing=!0,f.process(s),p.process(s),g.process(s),y.process(s),x.process(s),v.process(s),C.process(s),w.process(s),s.isProcessing=!1,r&&n&&(a=!1,e(S))},A=()=>{r=!0,a=!0,s.isProcessing||e(S)};return{schedule:au.reduce(($,N)=>{const P=u[N];return $[N]=(_,L=!1,ee=!1)=>(r||A(),P.schedule(_,L,ee)),$},{}),cancel:$=>{for(let N=0;N<au.length;N++)u[au[N]].cancel($)},state:s,steps:u}}const{schedule:tt,cancel:yr,state:Bt,steps:vm}=k5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Bn,!0);let $u;function L6(){$u=void 0}const nn={now:()=>($u===void 0&&nn.set(Bt.isProcessing||Bi.useManualTiming?Bt.timestamp:performance.now()),$u),set:e=>{$u=e,queueMicrotask(L6)}},R5=e=>n=>typeof n=="string"&&n.startsWith(e),z0=R5("--"),N6=R5("var(--"),M0=e=>N6(e)?B6.test(e.split("/*")[0].trim()):!1,B6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ko={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},sl={...ko,transform:e=>Ni(0,1,e)},ou={...ko,default:1},Gs=e=>Math.round(e*1e5)/1e5,$0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function U6(e){return e==null}const V6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,O0=(e,n)=>r=>!!(typeof r=="string"&&V6.test(r)&&r.startsWith(e)||n&&!U6(r)&&Object.prototype.hasOwnProperty.call(r,n)),z5=(e,n,r)=>a=>{if(typeof a!="string")return a;const[s,c,u,f]=a.match($0);return{[e]:parseFloat(s),[n]:parseFloat(c),[r]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},P6=e=>Ni(0,255,e),wm={...ko,transform:e=>Math.round(P6(e))},Yr={test:O0("rgb","red"),parse:z5("red","green","blue"),transform:({red:e,green:n,blue:r,alpha:a=1})=>"rgba("+wm.transform(e)+", "+wm.transform(n)+", "+wm.transform(r)+", "+Gs(sl.transform(a))+")"};function H6(e){let n="",r="",a="",s="";return e.length>5?(n=e.substring(1,3),r=e.substring(3,5),a=e.substring(5,7),s=e.substring(7,9)):(n=e.substring(1,2),r=e.substring(2,3),a=e.substring(3,4),s=e.substring(4,5),n+=n,r+=r,a+=a,s+=s),{red:parseInt(n,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const vp={test:O0("#"),parse:H6,transform:Yr.transform},jl=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),mr=jl("deg"),ui=jl("%"),be=jl("px"),F6=jl("vh"),q6=jl("vw"),mv={...ui,parse:e=>ui.parse(e)/100,transform:e=>ui.transform(e*100)},Ja={test:O0("hsl","hue"),parse:z5("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:r,alpha:a=1})=>"hsla("+Math.round(e)+", "+ui.transform(Gs(n))+", "+ui.transform(Gs(r))+", "+Gs(sl.transform(a))+")"},bt={test:e=>Yr.test(e)||vp.test(e)||Ja.test(e),parse:e=>Yr.test(e)?Yr.parse(e):Ja.test(e)?Ja.parse(e):vp.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Yr.transform(e):Ja.transform(e),getAnimatableNone:e=>{const n=bt.parse(e);return n.alpha=0,bt.transform(n)}},G6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Y6(e){return isNaN(e)&&typeof e=="string"&&(e.match($0)?.length||0)+(e.match(G6)?.length||0)>0}const M5="number",$5="color",K6="var",X6="var(",pv="${}",Q6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ll(e){const n=e.toString(),r=[],a={color:[],number:[],var:[]},s=[];let c=0;const f=n.replace(Q6,p=>(bt.test(p)?(a.color.push(c),s.push($5),r.push(bt.parse(p))):p.startsWith(X6)?(a.var.push(c),s.push(K6),r.push(p)):(a.number.push(c),s.push(M5),r.push(parseFloat(p))),++c,pv)).split(pv);return{values:r,split:f,indexes:a,types:s}}function O5(e){return ll(e).values}function D5(e){const{split:n,types:r}=ll(e),a=n.length;return s=>{let c="";for(let u=0;u<a;u++)if(c+=n[u],s[u]!==void 0){const f=r[u];f===M5?c+=Gs(s[u]):f===$5?c+=bt.transform(s[u]):c+=s[u]}return c}}const I6=e=>typeof e=="number"?0:bt.test(e)?bt.getAnimatableNone(e):e;function Z6(e){const n=O5(e);return D5(e)(n.map(I6))}const xr={test:Y6,parse:O5,createTransformer:D5,getAnimatableNone:Z6};function Sm(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(n-e)*6*r:r<1/2?n:r<2/3?e+(n-e)*(2/3-r)*6:e}function J6({hue:e,saturation:n,lightness:r,alpha:a}){e/=360,n/=100,r/=100;let s=0,c=0,u=0;if(!n)s=c=u=r;else{const f=r<.5?r*(1+n):r+n-r*n,p=2*r-f;s=Sm(p,f,e+1/3),c=Sm(p,f,e),u=Sm(p,f,e-1/3)}return{red:Math.round(s*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:a}}function Xu(e,n){return r=>r>0?n:e}const it=(e,n,r)=>e+(n-e)*r,Cm=(e,n,r)=>{const a=e*e,s=r*(n*n-a)+a;return s<0?0:Math.sqrt(s)},W6=[vp,Yr,Ja],ez=e=>W6.find(n=>n.test(e));function gv(e){const n=ez(e);if(!n)return!1;let r=n.parse(e);return n===Ja&&(r=J6(r)),r}const yv=(e,n)=>{const r=gv(e),a=gv(n);if(!r||!a)return Xu(e,n);const s={...r};return c=>(s.red=Cm(r.red,a.red,c),s.green=Cm(r.green,a.green,c),s.blue=Cm(r.blue,a.blue,c),s.alpha=it(r.alpha,a.alpha,c),Yr.transform(s))},wp=new Set(["none","hidden"]);function tz(e,n){return wp.has(e)?r=>r<=0?e:n:r=>r>=1?n:e}function nz(e,n){return r=>it(e,n,r)}function D0(e){return typeof e=="number"?nz:typeof e=="string"?M0(e)?Xu:bt.test(e)?yv:az:Array.isArray(e)?_5:typeof e=="object"?bt.test(e)?yv:iz:Xu}function _5(e,n){const r=[...e],a=r.length,s=e.map((c,u)=>D0(c)(c,n[u]));return c=>{for(let u=0;u<a;u++)r[u]=s[u](c);return r}}function iz(e,n){const r={...e,...n},a={};for(const s in r)e[s]!==void 0&&n[s]!==void 0&&(a[s]=D0(e[s])(e[s],n[s]));return s=>{for(const c in a)r[c]=a[c](s);return r}}function rz(e,n){const r=[],a={color:0,var:0,number:0};for(let s=0;s<n.values.length;s++){const c=n.types[s],u=e.indexes[c][a[c]],f=e.values[u]??0;r[s]=f,a[c]++}return r}const az=(e,n)=>{const r=xr.createTransformer(n),a=ll(e),s=ll(n);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?wp.has(e)&&!s.values.length||wp.has(n)&&!a.values.length?tz(e,n):Cl(_5(rz(a,s),s.values),r):Xu(e,n)};function L5(e,n,r){return typeof e=="number"&&typeof n=="number"&&typeof r=="number"?it(e,n,r):D0(e)(e,n)}const oz=e=>{const n=({timestamp:r})=>e(r);return{start:(r=!0)=>tt.update(n,r),stop:()=>yr(n),now:()=>Bt.isProcessing?Bt.timestamp:nn.now()}},N5=(e,n,r=10)=>{let a="";const s=Math.max(Math.round(n/r),2);for(let c=0;c<s;c++)a+=Math.round(e(c/(s-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Qu=2e4;function _0(e){let n=0;const r=50;let a=e.next(n);for(;!a.done&&n<Qu;)n+=r,a=e.next(n);return n>=Qu?1/0:n}function sz(e,n=100,r){const a=r({...e,keyframes:[0,n]}),s=Math.min(_0(a),Qu);return{type:"keyframes",ease:c=>a.next(s*c).value/n,duration:Nn(s)}}const lz=5;function B5(e,n,r){const a=Math.max(n-lz,0);return y5(r-e(a),n-a)}const ct={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Tm=.001;function cz({duration:e=ct.duration,bounce:n=ct.bounce,velocity:r=ct.velocity,mass:a=ct.mass}){let s,c,u=1-n;u=Ni(ct.minDamping,ct.maxDamping,u),e=Ni(ct.minDuration,ct.maxDuration,Nn(e)),u<1?(s=g=>{const y=g*u,x=y*e,v=y-r,C=Sp(g,u),w=Math.exp(-x);return Tm-v/C*w},c=g=>{const x=g*u*e,v=x*r+r,C=Math.pow(u,2)*Math.pow(g,2)*e,w=Math.exp(-x),S=Sp(Math.pow(g,2),u);return(-s(g)+Tm>0?-1:1)*((v-C)*w)/S}):(s=g=>{const y=Math.exp(-g*e),x=(g-r)*e+1;return-Tm+y*x},c=g=>{const y=Math.exp(-g*e),x=(r-g)*(e*e);return y*x});const f=5/e,p=dz(s,c,f);if(e=ci(e),isNaN(p))return{stiffness:ct.stiffness,damping:ct.damping,duration:e};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:u*2*Math.sqrt(a*g),duration:e}}}const uz=12;function dz(e,n,r){let a=r;for(let s=1;s<uz;s++)a=a-e(a)/n(a);return a}function Sp(e,n){return e*Math.sqrt(1-n*n)}const fz=["duration","bounce"],hz=["stiffness","damping","mass"];function xv(e,n){return n.some(r=>e[r]!==void 0)}function mz(e){let n={velocity:ct.velocity,stiffness:ct.stiffness,damping:ct.damping,mass:ct.mass,isResolvedFromDuration:!1,...e};if(!xv(e,hz)&&xv(e,fz))if(e.visualDuration){const r=e.visualDuration,a=2*Math.PI/(r*1.2),s=a*a,c=2*Ni(.05,1,1-(e.bounce||0))*Math.sqrt(s);n={...n,mass:ct.mass,stiffness:s,damping:c}}else{const r=cz(e);n={...n,...r,mass:ct.mass},n.isResolvedFromDuration=!0}return n}function Iu(e=ct.visualDuration,n=ct.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:s}=r;const c=r.keyframes[0],u=r.keyframes[r.keyframes.length-1],f={done:!1,value:c},{stiffness:p,damping:g,mass:y,duration:x,velocity:v,isResolvedFromDuration:C}=mz({...r,velocity:-Nn(r.velocity||0)}),w=v||0,S=g/(2*Math.sqrt(p*y)),A=u-c,R=Nn(Math.sqrt(p/y)),O=Math.abs(A)<5;a||(a=O?ct.restSpeed.granular:ct.restSpeed.default),s||(s=O?ct.restDelta.granular:ct.restDelta.default);let $;if(S<1){const P=Sp(R,S);$=_=>{const L=Math.exp(-S*R*_);return u-L*((w+S*R*A)/P*Math.sin(P*_)+A*Math.cos(P*_))}}else if(S===1)$=P=>u-Math.exp(-R*P)*(A+(w+R*A)*P);else{const P=R*Math.sqrt(S*S-1);$=_=>{const L=Math.exp(-S*R*_),ee=Math.min(P*_,300);return u-L*((w+S*R*A)*Math.sinh(ee)+P*A*Math.cosh(ee))/P}}const N={calculatedDuration:C&&x||null,next:P=>{const _=$(P);if(C)f.done=P>=x;else{let L=P===0?w:0;S<1&&(L=P===0?ci(w):B5($,P,_));const ee=Math.abs(L)<=a,ie=Math.abs(u-_)<=s;f.done=ee&&ie}return f.value=f.done?u:_,f},toString:()=>{const P=Math.min(_0(N),Qu),_=N5(L=>N.next(P*L).value,P,30);return P+"ms "+_},toTransition:()=>{}};return N}Iu.applyToOptions=e=>{const n=sz(e,100,Iu);return e.ease=n.ease,e.duration=ci(n.duration),e.type="keyframes",e};function Cp({keyframes:e,velocity:n=0,power:r=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:p,restDelta:g=.5,restSpeed:y}){const x=e[0],v={done:!1,value:x},C=ee=>f!==void 0&&ee<f||p!==void 0&&ee>p,w=ee=>f===void 0?p:p===void 0||Math.abs(f-ee)<Math.abs(p-ee)?f:p;let S=r*n;const A=x+S,R=u===void 0?A:u(A);R!==A&&(S=R-x);const O=ee=>-S*Math.exp(-ee/a),$=ee=>R+O(ee),N=ee=>{const ie=O(ee),se=$(ee);v.done=Math.abs(ie)<=g,v.value=v.done?R:se};let P,_;const L=ee=>{C(v.value)&&(P=ee,_=Iu({keyframes:[v.value,w(v.value)],velocity:B5($,ee,v.value),damping:s,stiffness:c,restDelta:g,restSpeed:y}))};return L(0),{calculatedDuration:null,next:ee=>{let ie=!1;return!_&&P===void 0&&(ie=!0,N(ee),L(ee)),P!==void 0&&ee>=P?_.next(ee-P):(!ie&&N(ee),v)}}}function pz(e,n,r){const a=[],s=r||Bi.mix||L5,c=e.length-1;for(let u=0;u<c;u++){let f=s(e[u],e[u+1]);if(n){const p=Array.isArray(n)?n[u]||Bn:n;f=Cl(p,f)}a.push(f)}return a}function gz(e,n,{clamp:r=!0,ease:a,mixer:s}={}){const c=e.length;if(j0(c===n.length),c===1)return()=>n[0];if(c===2&&n[0]===n[1])return()=>n[1];const u=e[0]===e[1];e[0]>e[c-1]&&(e=[...e].reverse(),n=[...n].reverse());const f=pz(n,a,s),p=f.length,g=y=>{if(u&&y<e[0])return n[0];let x=0;if(p>1)for(;x<e.length-2&&!(y<e[x+1]);x++);const v=ol(e[x],e[x+1],y);return f[x](v)};return r?y=>g(Ni(e[0],e[c-1],y)):g}function yz(e,n){const r=e[e.length-1];for(let a=1;a<=n;a++){const s=ol(0,n,a);e.push(it(r,1,s))}}function xz(e){const n=[0];return yz(n,e.length-1),n}function bz(e,n){return e.map(r=>r*n)}function vz(e,n){return e.map(()=>n||E5).splice(0,e.length-1)}function Ys({duration:e=300,keyframes:n,times:r,ease:a="easeInOut"}){const s=M6(a)?a.map(hv):hv(a),c={done:!1,value:n[0]},u=bz(r&&r.length===n.length?r:xz(n),e),f=gz(u,n,{ease:Array.isArray(s)?s:vz(n,s)});return{calculatedDuration:e,next:p=>(c.value=f(p),c.done=p>=e,c)}}const wz=e=>e!==null;function L0(e,{repeat:n,repeatType:r="loop"},a,s=1){const c=e.filter(wz),f=s<0||n&&r!=="loop"&&n%2===1?0:c.length-1;return!f||a===void 0?c[f]:a}const Sz={decay:Cp,inertia:Cp,tween:Ys,keyframes:Ys,spring:Iu};function U5(e){typeof e.type=="string"&&(e.type=Sz[e.type])}class N0{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,r){return this.finished.then(n,r)}}const Cz=e=>e/100;class B0 extends N0{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==nn.now()&&this.tick(nn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;U5(n);const{type:r=Ys,repeat:a=0,repeatDelay:s=0,repeatType:c,velocity:u=0}=n;let{keyframes:f}=n;const p=r||Ys;p!==Ys&&typeof f[0]!="number"&&(this.mixKeyframes=Cl(Cz,L5(f[0],f[1])),f=[0,100]);const g=p({...n,keyframes:f});c==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...f].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=_0(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+s,this.totalDuration=this.resolvedDuration*(a+1)-s,this.generator=g}updateTime(n){const r=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(n,r=!1){const{generator:a,totalDuration:s,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:y,repeat:x,repeatType:v,repeatDelay:C,type:w,onUpdate:S,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-s/this.speed,this.startTime)),r?this.currentTime=n:this.updateTime(n);const R=this.currentTime-g*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?R<0:R>s;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let $=this.currentTime,N=a;if(x){const ee=Math.min(this.currentTime,s)/f;let ie=Math.floor(ee),se=ee%1;!se&&ee>=1&&(se=1),se===1&&ie--,ie=Math.min(ie,x+1),!!(ie%2)&&(v==="reverse"?(se=1-se,C&&(se-=C/f)):v==="mirror"&&(N=u)),$=Ni(0,1,se)*f}const P=O?{done:!1,value:y[0]}:N.next($);c&&(P.value=c(P.value));let{done:_}=P;!O&&p!==null&&(_=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const L=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&_);return L&&w!==Cp&&(P.value=L0(y,this.options,A,this.speed)),S&&S(P.value),L&&this.finish(),P}then(n,r){return this.finished.then(n,r)}get duration(){return Nn(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Nn(n)}get time(){return Nn(this.currentTime)}set time(n){n=ci(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(n){this.updateTime(nn.now());const r=this.playbackSpeed!==n;this.playbackSpeed=n,r&&(this.time=Nn(this.currentTime))}play(){if(this.isStopped)return;const{driver:n=oz,startTime:r}=this.options;this.driver||(this.driver=n(s=>this.tick(s))),this.options.onPlay?.();const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=r??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(nn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),n.observe(this)}}function Tz(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const Kr=e=>e*180/Math.PI,Tp=e=>{const n=Kr(Math.atan2(e[1],e[0]));return jp(n)},jz={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Tp,rotateZ:Tp,skewX:e=>Kr(Math.atan(e[1])),skewY:e=>Kr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},jp=e=>(e=e%360,e<0&&(e+=360),e),bv=Tp,vv=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),wv=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ez={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:vv,scaleY:wv,scale:e=>(vv(e)+wv(e))/2,rotateX:e=>jp(Kr(Math.atan2(e[6],e[5]))),rotateY:e=>jp(Kr(Math.atan2(-e[2],e[0]))),rotateZ:bv,rotate:bv,skewX:e=>Kr(Math.atan(e[4])),skewY:e=>Kr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ep(e){return e.includes("scale")?1:0}function Ap(e,n){if(!e||e==="none")return Ep(n);const r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(r)a=Ez,s=r;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=jz,s=f}if(!s)return Ep(n);const c=a[n],u=s[1].split(",").map(kz);return typeof c=="function"?c(u):u[c]}const Az=(e,n)=>{const{transform:r="none"}=getComputedStyle(e);return Ap(r,n)};function kz(e){return parseFloat(e.trim())}const Ro=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zo=new Set(Ro),Sv=e=>e===ko||e===be,Rz=new Set(["x","y","z"]),zz=Ro.filter(e=>!Rz.has(e));function Mz(e){const n=[];return zz.forEach(r=>{const a=e.getValue(r);a!==void 0&&(n.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),n}const Zr={width:({x:e},{paddingLeft:n="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(n)-parseFloat(r),height:({y:e},{paddingTop:n="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(n)-parseFloat(r),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Ap(n,"x"),y:(e,{transform:n})=>Ap(n,"y")};Zr.translateX=Zr.x;Zr.translateY=Zr.y;const Jr=new Set;let kp=!1,Rp=!1,zp=!1;function V5(){if(Rp){const e=Array.from(Jr).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),r=new Map;n.forEach(a=>{const s=Mz(a);s.length&&(r.set(a,s),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const s=r.get(a);s&&s.forEach(([c,u])=>{a.getValue(c)?.set(u)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Rp=!1,kp=!1,Jr.forEach(e=>e.complete(zp)),Jr.clear()}function P5(){Jr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Rp=!0)})}function $z(){zp=!0,P5(),V5(),zp=!1}class U0{constructor(n,r,a,s,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=r,this.name=a,this.motionValue=s,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Jr.add(this),kp||(kp=!0,tt.read(P5),tt.resolveKeyframes(V5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:r,element:a,motionValue:s}=this;if(n[0]===null){const c=s?.get(),u=n[n.length-1];if(c!==void 0)n[0]=c;else if(a&&r){const f=a.readValue(r,u);f!=null&&(n[0]=f)}n[0]===void 0&&(n[0]=u),s&&c===void 0&&s.set(n[0])}Tz(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Jr.delete(this)}cancel(){this.state==="scheduled"&&(Jr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Oz=e=>e.startsWith("--");function Dz(e,n,r){Oz(n)?e.style.setProperty(n,r):e.style[n]=r}const _z=E0(()=>window.ScrollTimeline!==void 0),Lz={};function Nz(e,n){const r=E0(e);return()=>Lz[n]??r()}const H5=Nz(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ps=([e,n,r,a])=>`cubic-bezier(${e}, ${n}, ${r}, ${a})`,Cv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ps([0,.65,.55,1]),circOut:Ps([.55,0,1,.45]),backIn:Ps([.31,.01,.66,-.59]),backOut:Ps([.33,1.53,.69,.99])};function F5(e,n){if(e)return typeof e=="function"?H5()?N5(e,n):"ease-out":A5(e)?Ps(e):Array.isArray(e)?e.map(r=>F5(r,n)||Cv.easeOut):Cv[e]}function Bz(e,n,r,{delay:a=0,duration:s=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:p}={},g=void 0){const y={[n]:r};p&&(y.offset=p);const x=F5(f,s);Array.isArray(x)&&(y.easing=x);const v={delay:a,duration:s,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return g&&(v.pseudoElement=g),e.animate(y,v)}function q5(e){return typeof e=="function"&&"applyToOptions"in e}function Uz({type:e,...n}){return q5(e)&&H5()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class Vz extends N0{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,!n)return;const{element:r,name:a,keyframes:s,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:p}=n;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=n,j0(typeof n.type!="string");const g=Uz(n);this.animation=Bz(r,a,s,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=L0(s,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(y):Dz(r,a,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const n=this.animation.effect?.getComputedTiming?.().duration||0;return Nn(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+Nn(n)}get time(){return Nn(Number(this.animation.currentTime)||0)}set time(n){this.finishedTime=null,this.animation.currentTime=ci(n)}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(n){this.animation.startTime=n}attachTimeline({timeline:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,n&&_z()?(this.animation.timeline=n,Bn):r(this)}}const G5={anticipate:C5,backInOut:S5,circInOut:j5};function Pz(e){return e in G5}function Hz(e){typeof e.ease=="string"&&Pz(e.ease)&&(e.ease=G5[e.ease])}const Tv=10;class Fz extends Vz{constructor(n){Hz(n),U5(n),super(n),n.startTime&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:r,onUpdate:a,onComplete:s,element:c,...u}=this.options;if(!r)return;if(n!==void 0){r.set(n);return}const f=new B0({...u,autoplay:!1}),p=ci(this.finishedTime??this.time);r.setWithVelocity(f.sample(p-Tv).value,f.sample(p).value,Tv),f.stop()}}const jv=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(xr.test(e)||e==="0")&&!e.startsWith("url("));function qz(e){const n=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}function Gz(e,n,r,a){const s=e[0];if(s===null)return!1;if(n==="display"||n==="visibility")return!0;const c=e[e.length-1],u=jv(s,n),f=jv(c,n);return!u||!f?!1:qz(e)||(r==="spring"||q5(r))&&a}function Mp(e){e.duration=0,e.type="keyframes"}const Yz=new Set(["opacity","clipPath","filter","transform"]),Kz=E0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Xz(e){const{motionValue:n,name:r,repeatDelay:a,repeatType:s,damping:c,type:u}=e;if(!(n?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=n.owner.getProps();return Kz()&&r&&Yz.has(r)&&(r!=="transform"||!g)&&!p&&!a&&s!=="mirror"&&c!==0&&u!=="inertia"}const Qz=40;class Iz extends N0{constructor({autoplay:n=!0,delay:r=0,type:a="keyframes",repeat:s=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:p,motionValue:g,element:y,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=nn.now();const v={autoplay:n,delay:r,type:a,repeat:s,repeatDelay:c,repeatType:u,name:p,motionValue:g,element:y,...x},C=y?.KeyframeResolver||U0;this.keyframeResolver=new C(f,(w,S,A)=>this.onKeyframesResolved(w,S,v,!A),p,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(n,r,a,s){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:p,isHandoff:g,onUpdate:y}=a;this.resolvedAt=nn.now(),Gz(n,c,u,f)||((Bi.instantAnimations||!p)&&y?.(L0(n,a,r)),n[0]=n[n.length-1],Mp(a),a.repeat=0);const v={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>Qz?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...a,keyframes:n},C=!g&&Xz(v)?new Fz({...v,element:v.motionValue.owner.current}):new B0(v);C.finished.then(()=>this.notifyFinished()).catch(Bn),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(n,r){return this.finished.finally(n).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),$z()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Zz=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Jz(e){const n=Zz.exec(e);if(!n)return[,];const[,r,a,s]=n;return[`--${r??a}`,s]}function Y5(e,n,r=1){const[a,s]=Jz(e);if(!a)return;const c=window.getComputedStyle(n).getPropertyValue(a);if(c){const u=c.trim();return m5(u)?parseFloat(u):u}return M0(s)?Y5(s,n,r+1):s}function V0(e,n){return e?.[n]??e?.default??e}const K5=new Set(["width","height","top","left","right","bottom",...Ro]),Wz={test:e=>e==="auto",parse:e=>e},X5=e=>n=>n.test(e),Q5=[ko,be,ui,mr,q6,F6,Wz],Ev=e=>Q5.find(X5(e));function eM(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||g5(e):!0}const tM=new Set(["brightness","contrast","saturate","opacity"]);function nM(e){const[n,r]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=r.match($0)||[];if(!a)return e;const s=r.replace(a,"");let c=tM.has(n)?1:0;return a!==r&&(c*=100),n+"("+c+s+")"}const iM=/\b([a-z-]*)\(.*?\)/gu,$p={...xr,getAnimatableNone:e=>{const n=e.match(iM);return n?n.map(nM).join(" "):e}},Av={...ko,transform:Math.round},rM={rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:ou,scaleX:ou,scaleY:ou,scaleZ:ou,skew:mr,skewX:mr,skewY:mr,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:sl,originX:mv,originY:mv,originZ:be},P0={borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,backgroundPositionX:be,backgroundPositionY:be,...rM,zIndex:Av,fillOpacity:sl,strokeOpacity:sl,numOctaves:Av},aM={...P0,color:bt,backgroundColor:bt,outlineColor:bt,fill:bt,stroke:bt,borderColor:bt,borderTopColor:bt,borderRightColor:bt,borderBottomColor:bt,borderLeftColor:bt,filter:$p,WebkitFilter:$p},I5=e=>aM[e];function Z5(e,n){let r=I5(e);return r!==$p&&(r=xr),r.getAnimatableNone?r.getAnimatableNone(n):void 0}const oM=new Set(["auto","none","0"]);function sM(e,n,r){let a=0,s;for(;a<e.length&&!s;){const c=e[a];typeof c=="string"&&!oM.has(c)&&ll(c).values.length&&(s=e[a]),a++}if(s&&r)for(const c of n)e[c]=Z5(r,s)}class lM extends U0{constructor(n,r,a,s,c){super(n,r,a,s,c,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let p=0;p<n.length;p++){let g=n[p];if(typeof g=="string"&&(g=g.trim(),M0(g))){const y=Y5(g,r.current);y!==void 0&&(n[p]=y),p===n.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!K5.has(a)||n.length!==2)return;const[s,c]=n,u=Ev(s),f=Ev(c);if(u!==f)if(Sv(u)&&Sv(f))for(let p=0;p<n.length;p++){const g=n[p];typeof g=="string"&&(n[p]=parseFloat(g))}else Zr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:r}=this,a=[];for(let s=0;s<n.length;s++)(n[s]===null||eM(n[s]))&&a.push(s);a.length&&sM(n,a,r)}measureInitialState(){const{element:n,unresolvedKeyframes:r,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Zr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),r[0]=this.measuredOrigin;const s=r[r.length-1];s!==void 0&&n.getValue(a,s).jump(s,!1)}measureEndState(){const{element:n,name:r,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const c=a.length-1,u=a[c];a[c]=Zr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,p])=>{n.getValue(f).set(p)}),this.resolveNoneKeyframes()}}function J5(e,n,r){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const s=document.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}const W5=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function eC(e){return p5(e)&&"offsetHeight"in e}const kv=30,cM=e=>!isNaN(parseFloat(e));class uM{constructor(n,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{const s=nn.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=r.owner}setCurrent(n){this.current=n,this.updatedAt=nn.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=cM(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,r){this.events[n]||(this.events[n]=new A0);const a=this.events[n].add(r);return n==="change"?()=>{a(),tt.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,r){this.passiveEffect=n,this.stopPassiveEffect=r}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,r=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=nn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>kv)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,kv);return y5(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(n){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=n(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function po(e,n){return new uM(e,n)}const{schedule:H0}=k5(queueMicrotask,!1),Qn={x:!1,y:!1};function tC(){return Qn.x||Qn.y}function dM(e){return e==="x"||e==="y"?Qn[e]?null:(Qn[e]=!0,()=>{Qn[e]=!1}):Qn.x||Qn.y?null:(Qn.x=Qn.y=!0,()=>{Qn.x=Qn.y=!1})}function nC(e,n){const r=J5(e),a=new AbortController,s={passive:!0,...n,signal:a.signal};return[r,s,()=>a.abort()]}function Rv(e){return!(e.pointerType==="touch"||tC())}function fM(e,n,r={}){const[a,s,c]=nC(e,r),u=f=>{if(!Rv(f))return;const{target:p}=f,g=n(p,f);if(typeof g!="function"||!p)return;const y=x=>{Rv(x)&&(g(x),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,s)};return a.forEach(f=>{f.addEventListener("pointerenter",u,s)}),c}const iC=(e,n)=>n?e===n?!0:iC(e,n.parentElement):!1,F0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,hM=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function mM(e){return hM.has(e.tagName)||e.tabIndex!==-1}const Ou=new WeakSet;function zv(e){return n=>{n.key==="Enter"&&e(n)}}function jm(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const pM=(e,n)=>{const r=e.currentTarget;if(!r)return;const a=zv(()=>{if(Ou.has(r))return;jm(r,"down");const s=zv(()=>{jm(r,"up")}),c=()=>jm(r,"cancel");r.addEventListener("keyup",s,n),r.addEventListener("blur",c,n)});r.addEventListener("keydown",a,n),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),n)};function Mv(e){return F0(e)&&!tC()}function gM(e,n,r={}){const[a,s,c]=nC(e,r),u=f=>{const p=f.currentTarget;if(!Mv(f))return;Ou.add(p);const g=n(p,f),y=(C,w)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",v),Ou.has(p)&&Ou.delete(p),Mv(C)&&typeof g=="function"&&g(C,{success:w})},x=C=>{y(C,p===window||p===document||r.useGlobalTarget||iC(p,C.target))},v=C=>{y(C,!1)};window.addEventListener("pointerup",x,s),window.addEventListener("pointercancel",v,s)};return a.forEach(f=>{(r.useGlobalTarget?window:f).addEventListener("pointerdown",u,s),eC(f)&&(f.addEventListener("focus",g=>pM(g,s)),!mM(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function rC(e){return p5(e)&&"ownerSVGElement"in e}function yM(e){return rC(e)&&e.tagName==="svg"}const Ft=e=>!!(e&&e.getVelocity),xM=[...Q5,bt,xr],bM=e=>xM.find(X5(e)),q0=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function $v(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function vM(...e){return n=>{let r=!1;const a=e.map(s=>{const c=$v(s,n);return!r&&typeof c=="function"&&(r=!0),c});if(r)return()=>{for(let s=0;s<a.length;s++){const c=a[s];typeof c=="function"?c():$v(e[s],null)}}}}function wM(...e){return j.useCallback(vM(...e),e)}class SM extends j.Component{getSnapshotBeforeUpdate(n){const r=this.props.childRef.current;if(r&&n.isPresent&&!this.props.isPresent){const a=r.offsetParent,s=eC(a)&&a.offsetWidth||0,c=this.props.sizeRef.current;c.height=r.offsetHeight||0,c.width=r.offsetWidth||0,c.top=r.offsetTop,c.left=r.offsetLeft,c.right=s-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function CM({children:e,isPresent:n,anchorX:r,root:a}){const s=j.useId(),c=j.useRef(null),u=j.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=j.useContext(q0),p=wM(c,e?.ref);return j.useInsertionEffect(()=>{const{width:g,height:y,top:x,left:v,right:C}=u.current;if(n||!c.current||!g||!y)return;const w=r==="left"?`left: ${v}`:`right: ${C}`;c.current.dataset.motionPopId=s;const S=document.createElement("style");f&&(S.nonce=f);const A=a??document.head;return A.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${y}px !important;
            ${w}px !important;
            top: ${x}px !important;
          }
        `),()=>{A.contains(S)&&A.removeChild(S)}},[n]),h.jsx(SM,{isPresent:n,childRef:c,sizeRef:u,children:j.cloneElement(e,{ref:p})})}const TM=({children:e,initial:n,isPresent:r,onExitComplete:a,custom:s,presenceAffectsLayout:c,mode:u,anchorX:f,root:p})=>{const g=w0(jM),y=j.useId();let x=!0,v=j.useMemo(()=>(x=!1,{id:y,initial:n,isPresent:r,custom:s,onExitComplete:C=>{g.set(C,!0);for(const w of g.values())if(!w)return;a&&a()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[r,g,a]);return c&&x&&(v={...v}),j.useMemo(()=>{g.forEach((C,w)=>g.set(w,!1))},[r]),j.useEffect(()=>{!r&&!g.size&&a&&a()},[r]),u==="popLayout"&&(e=h.jsx(CM,{isPresent:r,anchorX:f,root:p,children:e})),h.jsx(Sd.Provider,{value:v,children:e})};function jM(){return new Map}function aC(e=!0){const n=j.useContext(Sd);if(n===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:s}=n,c=j.useId();j.useEffect(()=>{if(e)return s(c)},[e]);const u=j.useCallback(()=>e&&a&&a(c),[c,a,e]);return!r&&a?[!1,u]:[!0]}const su=e=>e.key||"";function Ov(e){const n=[];return j.Children.forEach(e,r=>{j.isValidElement(r)&&n.push(r)}),n}const oC=({children:e,custom:n,initial:r=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:c="sync",propagate:u=!1,anchorX:f="left",root:p})=>{const[g,y]=aC(u),x=j.useMemo(()=>Ov(e),[e]),v=u&&!g?[]:x.map(su),C=j.useRef(!0),w=j.useRef(x),S=w0(()=>new Map),[A,R]=j.useState(x),[O,$]=j.useState(x);h5(()=>{C.current=!1,w.current=x;for(let _=0;_<O.length;_++){const L=su(O[_]);v.includes(L)?S.delete(L):S.get(L)!==!0&&S.set(L,!1)}},[O,v.length,v.join("-")]);const N=[];if(x!==A){let _=[...x];for(let L=0;L<O.length;L++){const ee=O[L],ie=su(ee);v.includes(ie)||(_.splice(L,0,ee),N.push(ee))}return c==="wait"&&N.length&&(_=N),$(Ov(_)),R(x),null}const{forceRender:P}=j.useContext(v0);return h.jsx(h.Fragment,{children:O.map(_=>{const L=su(_),ee=u&&!g?!1:x===O||v.includes(L),ie=()=>{if(S.has(L))S.set(L,!0);else return;let se=!0;S.forEach(le=>{le||(se=!1)}),se&&(P?.(),$(w.current),u&&y?.(),a&&a())};return h.jsx(TM,{isPresent:ee,initial:!C.current||r?void 0:!1,custom:n,presenceAffectsLayout:s,mode:c,root:p,onExitComplete:ee?void 0:ie,anchorX:f,children:_},L)})})},sC=j.createContext({strict:!1}),Dv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},go={};for(const e in Dv)go[e]={isEnabled:n=>Dv[e].some(r=>!!n[r])};function EM(e){for(const n in e)go[n]={...go[n],...e[n]}}const AM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Zu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||AM.has(e)}let lC=e=>!Zu(e);function kM(e){typeof e=="function"&&(lC=n=>n.startsWith("on")?!Zu(n):e(n))}try{kM(require("@emotion/is-prop-valid").default)}catch{}function RM(e,n,r){const a={};for(const s in e)s==="values"&&typeof e.values=="object"||(lC(s)||r===!0&&Zu(s)||!n&&!Zu(s)||e.draggable&&s.startsWith("onDrag"))&&(a[s]=e[s]);return a}const Cd=j.createContext({});function Td(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function cl(e){return typeof e=="string"||Array.isArray(e)}const G0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Y0=["initial",...G0];function jd(e){return Td(e.animate)||Y0.some(n=>cl(e[n]))}function cC(e){return!!(jd(e)||e.variants)}function zM(e,n){if(jd(e)){const{initial:r,animate:a}=e;return{initial:r===!1||cl(r)?r:void 0,animate:cl(a)?a:void 0}}return e.inherit!==!1?n:{}}function MM(e){const{initial:n,animate:r}=zM(e,j.useContext(Cd));return j.useMemo(()=>({initial:n,animate:r}),[_v(n),_v(r)])}function _v(e){return Array.isArray(e)?e.join(" "):e}const ul={};function $M(e){for(const n in e)ul[n]=e[n],z0(n)&&(ul[n].isCSSVariable=!0)}function uC(e,{layout:n,layoutId:r}){return zo.has(e)||e.startsWith("origin")||(n||r!==void 0)&&(!!ul[e]||e==="opacity")}const OM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},DM=Ro.length;function _M(e,n,r){let a="",s=!0;for(let c=0;c<DM;c++){const u=Ro[c],f=e[u];if(f===void 0)continue;let p=!0;if(typeof f=="number"?p=f===(u.startsWith("scale")?1:0):p=parseFloat(f)===0,!p||r){const g=W5(f,P0[u]);if(!p){s=!1;const y=OM[u]||u;a+=`${y}(${g}) `}r&&(n[u]=g)}}return a=a.trim(),r?a=r(n,s?"":a):s&&(a="none"),a}function K0(e,n,r){const{style:a,vars:s,transformOrigin:c}=e;let u=!1,f=!1;for(const p in n){const g=n[p];if(zo.has(p)){u=!0;continue}else if(z0(p)){s[p]=g;continue}else{const y=W5(g,P0[p]);p.startsWith("origin")?(f=!0,c[p]=y):a[p]=y}}if(n.transform||(u||r?a.transform=_M(n,e.transform,r):a.transform&&(a.transform="none")),f){const{originX:p="50%",originY:g="50%",originZ:y=0}=c;a.transformOrigin=`${p} ${g} ${y}`}}const X0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dC(e,n,r){for(const a in n)!Ft(n[a])&&!uC(a,r)&&(e[a]=n[a])}function LM({transformTemplate:e},n){return j.useMemo(()=>{const r=X0();return K0(r,n,e),Object.assign({},r.vars,r.style)},[n])}function NM(e,n){const r=e.style||{},a={};return dC(a,r,e),Object.assign(a,LM(e,n)),a}function BM(e,n){const r={},a=NM(e,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=a,r}const UM={offset:"stroke-dashoffset",array:"stroke-dasharray"},VM={offset:"strokeDashoffset",array:"strokeDasharray"};function PM(e,n,r=1,a=0,s=!0){e.pathLength=1;const c=s?UM:VM;e[c.offset]=be.transform(-a);const u=be.transform(n),f=be.transform(r);e[c.array]=`${u} ${f}`}function fC(e,{attrX:n,attrY:r,attrScale:a,pathLength:s,pathSpacing:c=1,pathOffset:u=0,...f},p,g,y){if(K0(e,f,g),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:v}=e;x.transform&&(v.transform=x.transform,delete x.transform),(v.transform||x.transformOrigin)&&(v.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),v.transform&&(v.transformBox=y?.transformBox??"fill-box",delete x.transformBox),n!==void 0&&(x.x=n),r!==void 0&&(x.y=r),a!==void 0&&(x.scale=a),s!==void 0&&PM(x,s,c,u,!1)}const hC=()=>({...X0(),attrs:{}}),mC=e=>typeof e=="string"&&e.toLowerCase()==="svg";function HM(e,n,r,a){const s=j.useMemo(()=>{const c=hC();return fC(c,n,mC(a),e.transformTemplate,e.style),{...c.attrs,style:{...c.style}}},[n]);if(e.style){const c={};dC(c,e.style,e),s.style={...c,...s.style}}return s}const FM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Q0(e){return typeof e!="string"||e.includes("-")?!1:!!(FM.indexOf(e)>-1||/[A-Z]/u.test(e))}function qM(e,n,r,{latestValues:a},s,c=!1){const f=(Q0(e)?HM:BM)(n,a,s,e),p=RM(n,typeof e=="string",c),g=e!==j.Fragment?{...p,...f,ref:r}:{},{children:y}=n,x=j.useMemo(()=>Ft(y)?y.get():y,[y]);return j.createElement(e,{...g,children:x})}function Lv(e){const n=[{},{}];return e?.values.forEach((r,a)=>{n[0][a]=r.get(),n[1][a]=r.getVelocity()}),n}function I0(e,n,r,a){if(typeof n=="function"){const[s,c]=Lv(a);n=n(r!==void 0?r:e.custom,s,c)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[s,c]=Lv(a);n=n(r!==void 0?r:e.custom,s,c)}return n}function Du(e){return Ft(e)?e.get():e}function GM({scrapeMotionValuesFromProps:e,createRenderState:n},r,a,s){return{latestValues:YM(r,a,s,e),renderState:n()}}function YM(e,n,r,a){const s={},c=a(e,{});for(const v in c)s[v]=Du(c[v]);let{initial:u,animate:f}=e;const p=jd(e),g=cC(e);n&&g&&!p&&e.inherit!==!1&&(u===void 0&&(u=n.initial),f===void 0&&(f=n.animate));let y=r?r.initial===!1:!1;y=y||u===!1;const x=y?f:u;if(x&&typeof x!="boolean"&&!Td(x)){const v=Array.isArray(x)?x:[x];for(let C=0;C<v.length;C++){const w=I0(e,v[C]);if(w){const{transitionEnd:S,transition:A,...R}=w;for(const O in R){let $=R[O];if(Array.isArray($)){const N=y?$.length-1:0;$=$[N]}$!==null&&(s[O]=$)}for(const O in S)s[O]=S[O]}}}return s}const pC=e=>(n,r)=>{const a=j.useContext(Cd),s=j.useContext(Sd),c=()=>GM(e,n,a,s);return r?c():w0(c)};function Z0(e,n,r){const{style:a}=e,s={};for(const c in a)(Ft(a[c])||n.style&&Ft(n.style[c])||uC(c,e)||r?.getValue(c)?.liveStyle!==void 0)&&(s[c]=a[c]);return s}const KM=pC({scrapeMotionValuesFromProps:Z0,createRenderState:X0});function gC(e,n,r){const a=Z0(e,n,r);for(const s in e)if(Ft(e[s])||Ft(n[s])){const c=Ro.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[c]=e[s]}return a}const XM=pC({scrapeMotionValuesFromProps:gC,createRenderState:hC}),QM=Symbol.for("motionComponentSymbol");function Wa(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function IM(e,n,r){return j.useCallback(a=>{a&&e.onMount&&e.onMount(a),n&&(a?n.mount(a):n.unmount()),r&&(typeof r=="function"?r(a):Wa(r)&&(r.current=a))},[n])}const J0=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ZM="framerAppearId",yC="data-"+J0(ZM),xC=j.createContext({});function JM(e,n,r,a,s){const{visualElement:c}=j.useContext(Cd),u=j.useContext(sC),f=j.useContext(Sd),p=j.useContext(q0).reducedMotion,g=j.useRef(null);a=a||u.renderer,!g.current&&a&&(g.current=a(e,{visualState:n,parent:c,props:r,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:p}));const y=g.current,x=j.useContext(xC);y&&!y.projection&&s&&(y.type==="html"||y.type==="svg")&&WM(g.current,r,s,x);const v=j.useRef(!1);j.useInsertionEffect(()=>{y&&v.current&&y.update(r,f)});const C=r[yC],w=j.useRef(!!C&&!window.MotionHandoffIsComplete?.(C)&&window.MotionHasOptimisedAnimation?.(C));return h5(()=>{y&&(v.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),w.current&&y.animationState&&y.animationState.animateChanges())}),j.useEffect(()=>{y&&(!w.current&&y.animationState&&y.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(C)}),w.current=!1),y.enteringChildren=void 0)}),y}function WM(e,n,r,a){const{layoutId:s,layout:c,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=n;e.projection=new r(e.latestValues,n["data-framer-portal-id"]?void 0:bC(e.parent)),e.projection.setOptions({layoutId:s,layout:c,alwaysMeasureLayout:!!u||f&&Wa(f),visualElement:e,animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,crossfade:y,layoutScroll:p,layoutRoot:g})}function bC(e){if(e)return e.options.allowProjection!==!1?e.projection:bC(e.parent)}function Em(e,{forwardMotionProps:n=!1}={},r,a){r&&EM(r);const s=Q0(e)?XM:KM;function c(f,p){let g;const y={...j.useContext(q0),...f,layoutId:e$(f)},{isStatic:x}=y,v=MM(f),C=s(f,x);if(!x&&S0){t$();const w=n$(y);g=w.MeasureLayout,v.visualElement=JM(e,C,y,a,w.ProjectionNode)}return h.jsxs(Cd.Provider,{value:v,children:[g&&v.visualElement?h.jsx(g,{visualElement:v.visualElement,...y}):null,qM(e,f,IM(C,v.visualElement,p),C,x,n)]})}c.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=j.forwardRef(c);return u[QM]=e,u}function e$({layoutId:e}){const n=j.useContext(v0).id;return n&&e!==void 0?n+"-"+e:e}function t$(e,n){j.useContext(sC).strict}function n$(e){const{drag:n,layout:r}=go;if(!n&&!r)return{};const a={...n,...r};return{MeasureLayout:n?.isEnabled(e)||r?.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function i$(e,n){if(typeof Proxy>"u")return Em;const r=new Map,a=(c,u)=>Em(c,u,e,n),s=(c,u)=>a(c,u);return new Proxy(s,{get:(c,u)=>u==="create"?a:(r.has(u)||r.set(u,Em(u,void 0,e,n)),r.get(u))})}function vC({top:e,left:n,right:r,bottom:a}){return{x:{min:n,max:r},y:{min:e,max:a}}}function r$({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function a$(e,n){if(!n)return e;const r=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}function Am(e){return e===void 0||e===1}function Op({scale:e,scaleX:n,scaleY:r}){return!Am(e)||!Am(n)||!Am(r)}function Hr(e){return Op(e)||wC(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function wC(e){return Nv(e.x)||Nv(e.y)}function Nv(e){return e&&e!=="0%"}function Ju(e,n,r){const a=e-r,s=n*a;return r+s}function Bv(e,n,r,a,s){return s!==void 0&&(e=Ju(e,s,a)),Ju(e,r,a)+n}function Dp(e,n=0,r=1,a,s){e.min=Bv(e.min,n,r,a,s),e.max=Bv(e.max,n,r,a,s)}function SC(e,{x:n,y:r}){Dp(e.x,n.translate,n.scale,n.originPoint),Dp(e.y,r.translate,r.scale,r.originPoint)}const Uv=.999999999999,Vv=1.0000000000001;function o$(e,n,r,a=!1){const s=r.length;if(!s)return;n.x=n.y=1;let c,u;for(let f=0;f<s;f++){c=r[f],u=c.projectionDelta;const{visualElement:p}=c.options;p&&p.props.style&&p.props.style.display==="contents"||(a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&to(e,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(n.x*=u.x.scale,n.y*=u.y.scale,SC(e,u)),a&&Hr(c.latestValues)&&to(e,c.latestValues))}n.x<Vv&&n.x>Uv&&(n.x=1),n.y<Vv&&n.y>Uv&&(n.y=1)}function eo(e,n){e.min=e.min+n,e.max=e.max+n}function Pv(e,n,r,a,s=.5){const c=it(e.min,e.max,s);Dp(e,n,r,c,a)}function to(e,n){Pv(e.x,n.x,n.scaleX,n.scale,n.originX),Pv(e.y,n.y,n.scaleY,n.scale,n.originY)}function CC(e,n){return vC(a$(e.getBoundingClientRect(),n))}function s$(e,n,r){const a=CC(e,r),{scroll:s}=n;return s&&(eo(a.x,s.offset.x),eo(a.y,s.offset.y)),a}const Hv=()=>({translate:0,scale:1,origin:0,originPoint:0}),no=()=>({x:Hv(),y:Hv()}),Fv=()=>({min:0,max:0}),ft=()=>({x:Fv(),y:Fv()}),_p={current:null},TC={current:!1};function l$(){if(TC.current=!0,!!S0)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>_p.current=e.matches;e.addEventListener("change",n),n()}else _p.current=!1}const c$=new WeakMap;function u$(e,n,r){for(const a in n){const s=n[a],c=r[a];if(Ft(s))e.addValue(a,s);else if(Ft(c))e.addValue(a,po(s,{owner:e}));else if(c!==s)if(e.hasValue(a)){const u=e.getValue(a);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=e.getStaticValue(a);e.addValue(a,po(u!==void 0?u:s,{owner:e}))}}for(const a in r)n[a]===void 0&&e.removeValue(a);return n}const qv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class d${scrapeMotionValuesFromProps(n,r,a){return{}}constructor({parent:n,props:r,presenceContext:a,reducedMotionConfig:s,blockInitialAnimation:c,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=U0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=nn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,tt.render(this.render,!1,!0))};const{latestValues:p,renderState:g}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=r.initial?{...p}:{},this.renderState=g,this.parent=n,this.props=r,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=s,this.options=f,this.blockInitialAnimation=!!c,this.isControllingVariants=jd(r),this.isVariantNode=cC(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const v in x){const C=x[v];p[v]!==void 0&&Ft(C)&&C.set(p[v])}}mount(n){this.current=n,c$.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),TC.current||l$(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:_p.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),yr(this.notifyUpdate),yr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,r){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const a=zo.has(n);a&&this.onBindTransform&&this.onBindTransform();const s=r.on("change",u=>{this.latestValues[n]=u,this.props.onUpdate&&tt.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,n,r)),this.valueSubscriptions.set(n,()=>{s(),c&&c(),r.owner&&r.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in go){const r=go[n];if(!r)continue;const{isEnabled:a,Feature:s}=r;if(!this.features[n]&&s&&a(this.props)&&(this.features[n]=new s(this)),this.features[n]){const c=this.features[n];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ft()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,r){this.latestValues[n]=r}update(n,r){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<qv.length;a++){const s=qv[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const c="on"+s,u=n[c];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=u$(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(n),()=>r.variantChildren.delete(n)}addValue(n,r){const a=this.values.get(n);r!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,r),this.values.set(n,r),this.latestValues[n]=r.get())}removeValue(n){this.values.delete(n);const r=this.valueSubscriptions.get(n);r&&(r(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,r){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&r!==void 0&&(a=po(r===null?void 0:r,{owner:this}),this.addValue(n,a)),a}readValue(n,r){let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(m5(a)||g5(a))?a=parseFloat(a):!bM(a)&&xr.test(r)&&(a=Z5(n,r)),this.setBaseTarget(n,Ft(a)?a.get():a)),Ft(a)?a.get():a}setBaseTarget(n,r){this.baseTarget[n]=r}getBaseTarget(n){const{initial:r}=this.props;let a;if(typeof r=="string"||typeof r=="object"){const c=I0(this.props,r,this.presenceContext?.custom);c&&(a=c[n])}if(r&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,n);return s!==void 0&&!Ft(s)?s:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,r){return this.events[n]||(this.events[n]=new A0),this.events[n].add(r)}notify(n,...r){this.events[n]&&this.events[n].notify(...r)}scheduleRenderMicrotask(){H0.render(this.render)}}class jC extends d${constructor(){super(...arguments),this.KeyframeResolver=lM}sortInstanceNodePosition(n,r){return n.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(n,r){return n.style?n.style[r]:void 0}removeValueFromRenderState(n,{vars:r,style:a}){delete r[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Ft(n)&&(this.childSubscription=n.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function EC(e,{style:n,vars:r},a,s){const c=e.style;let u;for(u in n)c[u]=n[u];s?.applyProjectionStyles(c,a);for(u in r)c.setProperty(u,r[u])}function f$(e){return window.getComputedStyle(e)}class h$ extends jC{constructor(){super(...arguments),this.type="html",this.renderInstance=EC}readValueFromInstance(n,r){if(zo.has(r))return this.projection?.isProjecting?Ep(r):Az(n,r);{const a=f$(n),s=(z0(r)?a.getPropertyValue(r):a[r])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(n,{transformPagePoint:r}){return CC(n,r)}build(n,r,a){K0(n,r,a.transformTemplate)}scrapeMotionValuesFromProps(n,r,a){return Z0(n,r,a)}}const AC=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function m$(e,n,r,a){EC(e,n,void 0,a);for(const s in n.attrs)e.setAttribute(AC.has(s)?s:J0(s),n.attrs[s])}class p$ extends jC{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ft}getBaseTargetFromProps(n,r){return n[r]}readValueFromInstance(n,r){if(zo.has(r)){const a=I5(r);return a&&a.default||0}return r=AC.has(r)?r:J0(r),n.getAttribute(r)}scrapeMotionValuesFromProps(n,r,a){return gC(n,r,a)}build(n,r,a){fC(n,r,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,r,a,s){m$(n,r,a,s)}mount(n){this.isSVGTag=mC(n.tagName),super.mount(n)}}const g$=(e,n)=>Q0(e)?new p$(n):new h$(n,{allowProjection:e!==j.Fragment});function io(e,n,r){const a=e.getProps();return I0(a,n,r!==void 0?r:a.custom,e)}const Lp=e=>Array.isArray(e);function y$(e,n,r){e.hasValue(n)?e.getValue(n).set(r):e.addValue(n,po(r))}function x$(e){return Lp(e)?e[e.length-1]||0:e}function b$(e,n){const r=io(e,n);let{transitionEnd:a={},transition:s={},...c}=r||{};c={...c,...a};for(const u in c){const f=x$(c[u]);y$(e,u,f)}}function v$(e){return!!(Ft(e)&&e.add)}function Np(e,n){const r=e.getValue("willChange");if(v$(r))return r.add(n);if(!r&&Bi.WillChange){const a=new Bi.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function kC(e){return e.props[yC]}const w$=e=>e!==null;function S$(e,{repeat:n,repeatType:r="loop"},a){const s=e.filter(w$),c=n&&r!=="loop"&&n%2===1?0:s.length-1;return s[c]}const C$={type:"spring",stiffness:500,damping:25,restSpeed:10},T$=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),j$={type:"keyframes",duration:.8},E$={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},A$=(e,{keyframes:n})=>n.length>2?j$:zo.has(e)?e.startsWith("scale")?T$(n[1]):C$:E$;function k$({when:e,delay:n,delayChildren:r,staggerChildren:a,staggerDirection:s,repeat:c,repeatType:u,repeatDelay:f,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const W0=(e,n,r,a={},s,c)=>u=>{const f=V0(a,e)||{},p=f.delay||a.delay||0;let{elapsed:g=0}=a;g=g-ci(p);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:n.getVelocity(),...f,delay:-g,onUpdate:v=>{n.set(v),f.onUpdate&&f.onUpdate(v)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:e,motionValue:n,element:c?void 0:s};k$(f)||Object.assign(y,A$(e,y)),y.duration&&(y.duration=ci(y.duration)),y.repeatDelay&&(y.repeatDelay=ci(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Mp(y),y.delay===0&&(x=!0)),(Bi.instantAnimations||Bi.skipAnimations)&&(x=!0,Mp(y),y.delay=0),y.allowFlatten=!f.type&&!f.ease,x&&!c&&n.get()!==void 0){const v=S$(y.keyframes,f);if(v!==void 0){tt.update(()=>{y.onUpdate(v),y.onComplete()});return}}return f.isSync?new B0(y):new Iz(y)};function R$({protectedKeys:e,needsAnimating:n},r){const a=e.hasOwnProperty(r)&&n[r]!==!0;return n[r]=!1,a}function RC(e,n,{delay:r=0,transitionOverride:a,type:s}={}){let{transition:c=e.getDefaultTransition(),transitionEnd:u,...f}=n;a&&(c=a);const p=[],g=s&&e.animationState&&e.animationState.getState()[s];for(const y in f){const x=e.getValue(y,e.latestValues[y]??null),v=f[y];if(v===void 0||g&&R$(g,y))continue;const C={delay:r,...V0(c||{},y)},w=x.get();if(w!==void 0&&!x.isAnimating&&!Array.isArray(v)&&v===w&&!C.velocity)continue;let S=!1;if(window.MotionHandoffAnimation){const R=kC(e);if(R){const O=window.MotionHandoffAnimation(R,y,tt);O!==null&&(C.startTime=O,S=!0)}}Np(e,y),x.start(W0(y,x,v,e.shouldReduceMotion&&K5.has(y)?{type:!1}:C,e,S));const A=x.animation;A&&p.push(A)}return u&&Promise.all(p).then(()=>{tt.update(()=>{u&&b$(e,u)})}),p}function zC(e,n,r,a=0,s=1){const c=Array.from(e).sort((g,y)=>g.sortNodePosition(y)).indexOf(n),u=e.size,f=(u-1)*a;return typeof r=="function"?r(c,u):s===1?c*a:f-c*a}function Bp(e,n,r={}){const a=io(e,n,r.type==="exit"?e.presenceContext?.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=a||{};r.transitionOverride&&(s=r.transitionOverride);const c=a?()=>Promise.all(RC(e,a,r)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=s;return z$(e,n,p,g,y,x,r)}:()=>Promise.resolve(),{when:f}=s;if(f){const[p,g]=f==="beforeChildren"?[c,u]:[u,c];return p().then(()=>g())}else return Promise.all([c(),u(r.delay)])}function z$(e,n,r=0,a=0,s=0,c=1,u){const f=[];for(const p of e.variantChildren)p.notify("AnimationStart",n),f.push(Bp(p,n,{...u,delay:r+(typeof a=="function"?0:a)+zC(e.variantChildren,p,a,s,c)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(f)}function M$(e,n,r={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const s=n.map(c=>Bp(e,c,r));a=Promise.all(s)}else if(typeof n=="string")a=Bp(e,n,r);else{const s=typeof n=="function"?io(e,n,r.custom):n;a=Promise.all(RC(e,s,r))}return a.then(()=>{e.notify("AnimationComplete",n)})}function MC(e,n){if(!Array.isArray(n))return!1;const r=n.length;if(r!==e.length)return!1;for(let a=0;a<r;a++)if(n[a]!==e[a])return!1;return!0}const $$=Y0.length;function $C(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?$C(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const n={};for(let r=0;r<$$;r++){const a=Y0[r],s=e.props[a];(cl(s)||s===!1)&&(n[a]=s)}return n}const O$=[...G0].reverse(),D$=G0.length;function _$(e){return n=>Promise.all(n.map(({animation:r,options:a})=>M$(e,r,a)))}function L$(e){let n=_$(e),r=Gv(),a=!0;const s=p=>(g,y)=>{const x=io(e,y,p==="exit"?e.presenceContext?.custom:void 0);if(x){const{transition:v,transitionEnd:C,...w}=x;g={...g,...w,...C}}return g};function c(p){n=p(e)}function u(p){const{props:g}=e,y=$C(e.parent)||{},x=[],v=new Set;let C={},w=1/0;for(let A=0;A<D$;A++){const R=O$[A],O=r[R],$=g[R]!==void 0?g[R]:y[R],N=cl($),P=R===p?O.isActive:null;P===!1&&(w=A);let _=$===y[R]&&$!==g[R]&&N;if(_&&a&&e.manuallyAnimateOnMount&&(_=!1),O.protectedKeys={...C},!O.isActive&&P===null||!$&&!O.prevProp||Td($)||typeof $=="boolean")continue;const L=N$(O.prevProp,$);let ee=L||R===p&&O.isActive&&!_&&N||A>w&&N,ie=!1;const se=Array.isArray($)?$:[$];let le=se.reduce(s(R),{});P===!1&&(le={});const{prevResolvedValues:k={}}=O,ae={...k,...le},ne=Z=>{ee=!0,v.has(Z)&&(ie=!0,v.delete(Z)),O.needsAnimating[Z]=!0;const K=e.getValue(Z);K&&(K.liveStyle=!1)};for(const Z in ae){const K=le[Z],re=k[Z];if(C.hasOwnProperty(Z))continue;let he=!1;Lp(K)&&Lp(re)?he=!MC(K,re):he=K!==re,he?K!=null?ne(Z):v.add(Z):K!==void 0&&v.has(Z)?ne(Z):O.protectedKeys[Z]=!0}O.prevProp=$,O.prevResolvedValues=le,O.isActive&&(C={...C,...le}),a&&e.blockInitialAnimation&&(ee=!1);const ce=_&&L;ee&&(!ce||ie)&&x.push(...se.map(Z=>{const K={type:R};if(typeof Z=="string"&&a&&!ce&&e.manuallyAnimateOnMount&&e.parent){const{parent:re}=e,he=io(re,Z);if(re.enteringChildren&&he){const{delayChildren:z}=he.transition||{};K.delay=zC(re.enteringChildren,e,z)}}return{animation:Z,options:K}}))}if(v.size){const A={};if(typeof g.initial!="boolean"){const R=io(e,Array.isArray(g.initial)?g.initial[0]:g.initial);R&&R.transition&&(A.transition=R.transition)}v.forEach(R=>{const O=e.getBaseTarget(R),$=e.getValue(R);$&&($.liveStyle=!0),A[R]=O??null}),x.push({animation:A})}let S=!!x.length;return a&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(S=!1),a=!1,S?n(x):Promise.resolve()}function f(p,g){if(r[p].isActive===g)return Promise.resolve();e.variantChildren?.forEach(x=>x.animationState?.setActive(p,g)),r[p].isActive=g;const y=u(p);for(const x in r)r[x].protectedKeys={};return y}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>r,reset:()=>{r=Gv()}}}function N$(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!MC(n,e):!1}function Vr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Gv(){return{animate:Vr(!0),whileInView:Vr(),whileHover:Vr(),whileTap:Vr(),whileDrag:Vr(),whileFocus:Vr(),exit:Vr()}}class wr{constructor(n){this.isMounted=!1,this.node=n}update(){}}class B$ extends wr{constructor(n){super(n),n.animationState||(n.animationState=L$(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Td(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:r}=this.node.prevProps||{};n!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let U$=0;class V$ extends wr{constructor(){super(...arguments),this.id=U$++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;const s=this.node.animationState.setActive("exit",!n);r&&!n&&s.then(()=>{r(this.id)})}mount(){const{register:n,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const P$={animation:{Feature:B$},exit:{Feature:V$}};function dl(e,n,r,a={passive:!0}){return e.addEventListener(n,r,a),()=>e.removeEventListener(n,r)}function El(e){return{point:{x:e.pageX,y:e.pageY}}}const H$=e=>n=>F0(n)&&e(n,El(n));function Ks(e,n,r,a){return dl(e,n,H$(r),a)}const OC=1e-4,F$=1-OC,q$=1+OC,DC=.01,G$=0-DC,Y$=0+DC;function Yt(e){return e.max-e.min}function K$(e,n,r){return Math.abs(e-n)<=r}function Yv(e,n,r,a=.5){e.origin=a,e.originPoint=it(n.min,n.max,e.origin),e.scale=Yt(r)/Yt(n),e.translate=it(r.min,r.max,e.origin)-e.originPoint,(e.scale>=F$&&e.scale<=q$||isNaN(e.scale))&&(e.scale=1),(e.translate>=G$&&e.translate<=Y$||isNaN(e.translate))&&(e.translate=0)}function Xs(e,n,r,a){Yv(e.x,n.x,r.x,a?a.originX:void 0),Yv(e.y,n.y,r.y,a?a.originY:void 0)}function Kv(e,n,r){e.min=r.min+n.min,e.max=e.min+Yt(n)}function X$(e,n,r){Kv(e.x,n.x,r.x),Kv(e.y,n.y,r.y)}function Xv(e,n,r){e.min=n.min-r.min,e.max=e.min+Yt(n)}function Qs(e,n,r){Xv(e.x,n.x,r.x),Xv(e.y,n.y,r.y)}function Dn(e){return[e("x"),e("y")]}const _C=({current:e})=>e?e.ownerDocument.defaultView:null,Qv=(e,n)=>Math.abs(e-n);function Q$(e,n){const r=Qv(e.x,n.x),a=Qv(e.y,n.y);return Math.sqrt(r**2+a**2)}class LC{constructor(n,r,{transformPagePoint:a,contextWindow:s=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Rm(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,w=Q$(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!w)return;const{point:S}=v,{timestamp:A}=Bt;this.history.push({...S,timestamp:A});const{onStart:R,onMove:O}=this.handlers;C||(R&&R(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,v)},this.handlePointerMove=(v,C)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=km(C,this.transformPagePoint),tt.update(this.updatePoint,!0)},this.handlePointerUp=(v,C)=>{this.end();const{onEnd:w,onSessionEnd:S,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Rm(v.type==="pointercancel"?this.lastMoveEventInfo:km(C,this.transformPagePoint),this.history);this.startEvent&&w&&w(v,R),S&&S(v,R)},!F0(n))return;this.dragSnapToOrigin=c,this.handlers=r,this.transformPagePoint=a,this.distanceThreshold=u,this.contextWindow=s||window;const f=El(n),p=km(f,this.transformPagePoint),{point:g}=p,{timestamp:y}=Bt;this.history=[{...g,timestamp:y}];const{onSessionStart:x}=r;x&&x(n,Rm(p,this.history)),this.removeListeners=Cl(Ks(this.contextWindow,"pointermove",this.handlePointerMove),Ks(this.contextWindow,"pointerup",this.handlePointerUp),Ks(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),yr(this.updatePoint)}}function km(e,n){return n?{point:n(e.point)}:e}function Iv(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Rm({point:e},n){return{point:e,delta:Iv(e,NC(n)),offset:Iv(e,I$(n)),velocity:Z$(n,.1)}}function I$(e){return e[0]}function NC(e){return e[e.length-1]}function Z$(e,n){if(e.length<2)return{x:0,y:0};let r=e.length-1,a=null;const s=NC(e);for(;r>=0&&(a=e[r],!(s.timestamp-a.timestamp>ci(n)));)r--;if(!a)return{x:0,y:0};const c=Nn(s.timestamp-a.timestamp);if(c===0)return{x:0,y:0};const u={x:(s.x-a.x)/c,y:(s.y-a.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function J$(e,{min:n,max:r},a){return n!==void 0&&e<n?e=a?it(n,e,a.min):Math.max(e,n):r!==void 0&&e>r&&(e=a?it(r,e,a.max):Math.min(e,r)),e}function Zv(e,n,r){return{min:n!==void 0?e.min+n:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function W$(e,{top:n,left:r,bottom:a,right:s}){return{x:Zv(e.x,r,s),y:Zv(e.y,n,a)}}function Jv(e,n){let r=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([r,a]=[a,r]),{min:r,max:a}}function eO(e,n){return{x:Jv(e.x,n.x),y:Jv(e.y,n.y)}}function tO(e,n){let r=.5;const a=Yt(e),s=Yt(n);return s>a?r=ol(n.min,n.max-a,e.min):a>s&&(r=ol(e.min,e.max-s,n.min)),Ni(0,1,r)}function nO(e,n){const r={};return n.min!==void 0&&(r.min=n.min-e.min),n.max!==void 0&&(r.max=n.max-e.min),r}const Up=.35;function iO(e=Up){return e===!1?e=0:e===!0&&(e=Up),{x:Wv(e,"left","right"),y:Wv(e,"top","bottom")}}function Wv(e,n,r){return{min:e2(e,n),max:e2(e,r)}}function e2(e,n){return typeof e=="number"?e:e[n]||0}const rO=new WeakMap;class aO{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ft(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:r=!1,distanceThreshold:a}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const c=x=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(El(x).point)},u=(x,v)=>{const{drag:C,dragPropagation:w,onDragStart:S}=this.getProps();if(C&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dM(C),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Dn(R=>{let O=this.getAxisMotionValue(R).get()||0;if(ui.test(O)){const{projection:$}=this.visualElement;if($&&$.layout){const N=$.layout.layoutBox[R];N&&(O=Yt(N)*(parseFloat(O)/100))}}this.originPoint[R]=O}),S&&tt.postRender(()=>S(x,v)),Np(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},f=(x,v)=>{this.latestPointerEvent=x,this.latestPanInfo=v;const{dragPropagation:C,dragDirectionLock:w,onDirectionLock:S,onDrag:A}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:R}=v;if(w&&this.currentDirection===null){this.currentDirection=oO(R),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",v.point,R),this.updateAxis("y",v.point,R),this.visualElement.render(),A&&A(x,v)},p=(x,v)=>{this.latestPointerEvent=x,this.latestPanInfo=v,this.stop(x,v),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Dn(x=>this.getAnimationState(x)==="paused"&&this.getAxisMotionValue(x).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new LC(n,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:a,contextWindow:_C(this.visualElement)})}stop(n,r){const a=n||this.latestPointerEvent,s=r||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!s||!a)return;const{velocity:u}=s;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&tt.postRender(()=>f(a,s))}cancel(){this.isDragging=!1;const{projection:n,animationState:r}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(n,r,a){const{drag:s}=this.getProps();if(!a||!lu(n,s,this.currentDirection))return;const c=this.getAxisMotionValue(n);let u=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(u=J$(u,this.constraints[n],this.elastic[n])),c.set(u)}resolveConstraints(){const{dragConstraints:n,dragElastic:r}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;n&&Wa(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=W$(a.layoutBox,n):this.constraints=!1,this.elastic=iO(r),s!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Dn(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=nO(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:r}=this.getProps();if(!n||!Wa(n))return!1;const a=n.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const c=s$(a,s.root,this.visualElement.getTransformPagePoint());let u=eO(s.layout.layoutBox,c);if(r){const f=r(r$(u));this.hasMutatedConstraints=!!f,f&&(u=vC(f))}return u}startAnimation(n){const{drag:r,dragMomentum:a,dragElastic:s,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},g=Dn(y=>{if(!lu(y,r,this.currentDirection))return;let x=p&&p[y]||{};u&&(x={min:0,max:0});const v=s?200:1e6,C=s?40:1e7,w={type:"inertia",velocity:a?n[y]:0,bounceStiffness:v,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...c,...x};return this.startAxisValueAnimation(y,w)});return Promise.all(g).then(f)}startAxisValueAnimation(n,r){const a=this.getAxisMotionValue(n);return Np(this.visualElement,n),a.start(W0(n,a,0,r,this.visualElement,!1))}stopAnimation(){Dn(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){Dn(n=>this.getAxisMotionValue(n).animation?.pause())}getAnimationState(n){return this.getAxisMotionValue(n).animation?.state}getAxisMotionValue(n){const r=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),s=a[r];return s||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Dn(r=>{const{drag:a}=this.getProps();if(!lu(r,a,this.currentDirection))return;const{projection:s}=this.visualElement,c=this.getAxisMotionValue(r);if(s&&s.layout){const{min:u,max:f}=s.layout.layoutBox[r];c.set(n[r]-it(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!Wa(r)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Dn(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();s[u]=tO({min:p,max:p},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Dn(u=>{if(!lu(u,n,null))return;const f=this.getAxisMotionValue(u),{min:p,max:g}=this.constraints[u];f.set(it(p,g,s[u]))})}addListeners(){if(!this.visualElement.current)return;rO.set(this.visualElement,this);const n=this.visualElement.current,r=Ks(n,"pointerdown",p=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(p)}),a=()=>{const{dragConstraints:p}=this.getProps();Wa(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,c=s.addEventListener("measure",a);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),tt.read(a);const u=dl(window,"resize",()=>this.scalePositionWithinConstraints()),f=s.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(Dn(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=p[y].translate,x.set(x.get()+p[y].translate))}),this.visualElement.render())}));return()=>{u(),r(),c(),f&&f()}}getProps(){const n=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:c=!1,dragElastic:u=Up,dragMomentum:f=!0}=n;return{...n,drag:r,dragDirectionLock:a,dragPropagation:s,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function lu(e,n,r){return(n===!0||n===e)&&(r===null||r===e)}function oO(e,n=10){let r=null;return Math.abs(e.y)>n?r="y":Math.abs(e.x)>n&&(r="x"),r}class sO extends wr{constructor(n){super(n),this.removeGroupControls=Bn,this.removeListeners=Bn,this.controls=new aO(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Bn}unmount(){this.removeGroupControls(),this.removeListeners()}}const t2=e=>(n,r)=>{e&&tt.postRender(()=>e(n,r))};class lO extends wr{constructor(){super(...arguments),this.removePointerDownListener=Bn}onPointerDown(n){this.session=new LC(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_C(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:r,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:t2(n),onStart:t2(r),onMove:a,onEnd:(c,u)=>{delete this.session,s&&tt.postRender(()=>s(c,u))}}}mount(){this.removePointerDownListener=Ks(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const _u={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function n2(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const Os={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(be.test(e))e=parseFloat(e);else return e;const r=n2(e,n.target.x),a=n2(e,n.target.y);return`${r}% ${a}%`}},cO={correct:(e,{treeScale:n,projectionDelta:r})=>{const a=e,s=xr.parse(e);if(s.length>5)return a;const c=xr.createTransformer(e),u=typeof s[0]!="number"?1:0,f=r.x.scale*n.x,p=r.y.scale*n.y;s[0+u]/=f,s[1+u]/=p;const g=it(f,p,.5);return typeof s[2+u]=="number"&&(s[2+u]/=g),typeof s[3+u]=="number"&&(s[3+u]/=g),c(s)}};let zm=!1;class uO extends j.Component{componentDidMount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:a,layoutId:s}=this.props,{projection:c}=n;$M(dO),c&&(r.group&&r.group.add(c),a&&a.register&&s&&a.register(c),zm&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),_u.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:r,visualElement:a,drag:s,isPresent:c}=this.props,{projection:u}=a;return u&&(u.isPresent=c,zm=!0,s||n.layoutDependency!==r||r===void 0||n.isPresent!==c?u.willUpdate():this.safeToRemove(),n.isPresent!==c&&(c?u.promote():u.relegate()||tt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),H0.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:s}=n;zm=!0,s&&(s.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function BC(e){const[n,r]=aC(),a=j.useContext(v0);return h.jsx(uO,{...e,layoutGroup:a,switchLayoutGroup:j.useContext(xC),isPresent:n,safeToRemove:r})}const dO={borderRadius:{...Os,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Os,borderTopRightRadius:Os,borderBottomLeftRadius:Os,borderBottomRightRadius:Os,boxShadow:cO};function fO(e,n,r){const a=Ft(e)?e:po(e);return a.start(W0("",a,n,r)),a.animation}const hO=(e,n)=>e.depth-n.depth;class mO{constructor(){this.children=[],this.isDirty=!1}add(n){C0(this.children,n),this.isDirty=!0}remove(n){T0(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(hO),this.isDirty=!1,this.children.forEach(n)}}function pO(e,n){const r=nn.now(),a=({timestamp:s})=>{const c=s-r;c>=n&&(yr(a),e(c-n))};return tt.setup(a,!0),()=>yr(a)}const UC=["TopLeft","TopRight","BottomLeft","BottomRight"],gO=UC.length,i2=e=>typeof e=="string"?parseFloat(e):e,r2=e=>typeof e=="number"||be.test(e);function yO(e,n,r,a,s,c){s?(e.opacity=it(0,r.opacity??1,xO(a)),e.opacityExit=it(n.opacity??1,0,bO(a))):c&&(e.opacity=it(n.opacity??1,r.opacity??1,a));for(let u=0;u<gO;u++){const f=`border${UC[u]}Radius`;let p=a2(n,f),g=a2(r,f);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||r2(p)===r2(g)?(e[f]=Math.max(it(i2(p),i2(g),a),0),(ui.test(g)||ui.test(p))&&(e[f]+="%")):e[f]=g}(n.rotate||r.rotate)&&(e.rotate=it(n.rotate||0,r.rotate||0,a))}function a2(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const xO=VC(0,.5,T5),bO=VC(.5,.95,Bn);function VC(e,n,r){return a=>a<e?0:a>n?1:r(ol(e,n,a))}function o2(e,n){e.min=n.min,e.max=n.max}function On(e,n){o2(e.x,n.x),o2(e.y,n.y)}function s2(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function l2(e,n,r,a,s){return e-=n,e=Ju(e,1/r,a),s!==void 0&&(e=Ju(e,1/s,a)),e}function vO(e,n=0,r=1,a=.5,s,c=e,u=e){if(ui.test(n)&&(n=parseFloat(n),n=it(u.min,u.max,n/100)-u.min),typeof n!="number")return;let f=it(c.min,c.max,a);e===c&&(f-=n),e.min=l2(e.min,n,r,f,s),e.max=l2(e.max,n,r,f,s)}function c2(e,n,[r,a,s],c,u){vO(e,n[r],n[a],n[s],n.scale,c,u)}const wO=["x","scaleX","originX"],SO=["y","scaleY","originY"];function u2(e,n,r,a){c2(e.x,n,wO,r?r.x:void 0,a?a.x:void 0),c2(e.y,n,SO,r?r.y:void 0,a?a.y:void 0)}function d2(e){return e.translate===0&&e.scale===1}function PC(e){return d2(e.x)&&d2(e.y)}function f2(e,n){return e.min===n.min&&e.max===n.max}function CO(e,n){return f2(e.x,n.x)&&f2(e.y,n.y)}function h2(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function HC(e,n){return h2(e.x,n.x)&&h2(e.y,n.y)}function m2(e){return Yt(e.x)/Yt(e.y)}function p2(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class TO{constructor(){this.members=[]}add(n){C0(this.members,n),n.scheduleRender()}remove(n){if(T0(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(n){const r=this.members.findIndex(s=>n===s);if(r===0)return!1;let a;for(let s=r;s>=0;s--){const c=this.members[s];if(c.isPresent!==!1){a=c;break}}return a?(this.promote(a),!0):!1}promote(n,r){const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.instance&&a.scheduleRender(),n.scheduleRender(),n.resumeFrom=a,r&&(n.resumeFrom.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:s}=n.options;s===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:r,resumingFrom:a}=n;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jO(e,n,r){let a="";const s=e.x.translate/n.x,c=e.y.translate/n.y,u=r?.z||0;if((s||c||u)&&(a=`translate3d(${s}px, ${c}px, ${u}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:x,rotateY:v,skewX:C,skewY:w}=r;g&&(a=`perspective(${g}px) ${a}`),y&&(a+=`rotate(${y}deg) `),x&&(a+=`rotateX(${x}deg) `),v&&(a+=`rotateY(${v}deg) `),C&&(a+=`skewX(${C}deg) `),w&&(a+=`skewY(${w}deg) `)}const f=e.x.scale*n.x,p=e.y.scale*n.y;return(f!==1||p!==1)&&(a+=`scale(${f}, ${p})`),a||"none"}const Mm=["","X","Y","Z"],EO=1e3;let AO=0;function $m(e,n,r,a){const{latestValues:s}=n;s[e]&&(r[e]=s[e],n.setStaticValue(e,0),a&&(a[e]=0))}function FC(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const r=kC(n);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:s,layoutId:c}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",tt,!(s||c))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&FC(a)}function qC({attachResizeListener:e,defaultParent:n,measureScroll:r,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(u={},f=n?.()){this.id=AO++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(zO),this.nodes.forEach(DO),this.nodes.forEach(_O),this.nodes.forEach(MO)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new mO)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new A0),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=rC(u)&&!yM(u),this.instance=u;const{layoutId:f,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),e){let y,x=0;const v=()=>this.root.updateBlockedByResize=!1;tt.read(()=>{x=window.innerWidth}),e(u,()=>{const C=window.innerWidth;C!==x&&(x=C,this.root.updateBlockedByResize=!0,y&&y(),y=pO(v,250),_u.hasAnimatedSinceResize&&(_u.hasAnimatedSinceResize=!1,this.nodes.forEach(x2)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:v,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||g.getDefaultTransition()||VO,{onLayoutAnimationStart:S,onLayoutAnimationComplete:A}=g.getProps(),R=!this.targetLayout||!HC(this.targetLayout,C),O=!x&&v;if(this.options.layoutRoot||this.resumeFrom||O||x&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const $={...V0(w,"layout"),onPlay:S,onComplete:A};(g.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($),this.setAnimationOrigin(y,O)}else x||x2(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),yr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(LO),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&FC(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(g2);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(y2);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(OO),this.nodes.forEach(kO),this.nodes.forEach(RO)):this.nodes.forEach(y2),this.clearAllSnapshots();const f=nn.now();Bt.delta=Ni(0,1e3/60,f-Bt.timestamp),Bt.timestamp=f,Bt.isProcessing=!0,vm.update.process(Bt),vm.preRender.process(Bt),vm.render.process(Bt),Bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,H0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($O),this.sharedNodes.forEach(NO)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,tt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){tt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yt(this.snapshot.measuredBox.x)&&!Yt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ft(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!PC(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;u&&this.instance&&(f||Hr(this.latestValues)||y)&&(s(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),PO(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return ft();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(HO))){const{scroll:g}=this.root;g&&(eo(f.x,g.offset.x),eo(f.y,g.offset.y))}return f}removeElementScroll(u){const f=ft();if(On(f,u),this.scroll?.wasRoot)return f;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&On(f,u),eo(f.x,y.offset.x),eo(f.y,y.offset.y))}return f}applyTransform(u,f=!1){const p=ft();On(p,u);for(let g=0;g<this.path.length;g++){const y=this.path[g];!f&&y.options.layoutScroll&&y.scroll&&y!==y.root&&to(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Hr(y.latestValues)&&to(p,y.latestValues)}return Hr(this.latestValues)&&to(p,this.latestValues),p}removeTransform(u){const f=ft();On(f,u);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!Hr(g.latestValues))continue;Op(g.latestValues)&&g.updateSnapshot();const y=ft(),x=g.measurePageBox();On(y,x),u2(f,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Hr(this.latestValues)&&u2(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=Bt.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ft(),this.relativeTargetOrigin=ft(),Qs(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),On(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ft(),this.targetWithTransforms=ft()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),X$(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):On(this.target,this.layout.layoutBox),SC(this.target,this.targetDelta)):On(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ft(),this.relativeTargetOrigin=ft(),Qs(this.relativeTargetOrigin,this.target,v.target),On(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Op(this.parent.latestValues)||wC(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Bt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;On(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,v=this.treeScale.y;o$(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=ft());const{target:C}=u;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(s2(this.prevProjectionDelta.x,this.projectionDelta.x),s2(this.prevProjectionDelta.y,this.projectionDelta.y)),Xs(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==v||!p2(this.projectionDelta.x,this.prevProjectionDelta.x)||!p2(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=no(),this.projectionDelta=no(),this.projectionDeltaWithTransform=no()}setAnimationOrigin(u,f=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},x=no();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const v=ft(),C=p?p.source:void 0,w=this.layout?this.layout.source:void 0,S=C!==w,A=this.getStack(),R=!A||A.members.length<=1,O=!!(S&&!R&&this.options.crossfade===!0&&!this.path.some(UO));this.animationProgress=0;let $;this.mixTargetDelta=N=>{const P=N/1e3;b2(x.x,u.x,P),b2(x.y,u.y,P),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qs(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),BO(this.relativeTarget,this.relativeTargetOrigin,v,P),$&&CO(this.relativeTarget,$)&&(this.isProjectionDirty=!1),$||($=ft()),On($,this.relativeTarget)),S&&(this.animationValues=y,yO(y,g,this.latestValues,P,O,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(yr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tt.update(()=>{_u.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=po(0)),this.currentAnimation=fO(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(EO),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:g,latestValues:y}=u;if(!(!f||!p||!g)){if(this!==u&&this.layout&&g&&GC(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||ft();const x=Yt(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+x;const v=Yt(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+v}On(f,p),to(f,y),Xs(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new TO),this.sharedNodes.get(u).add(f);const g=f.options.initialPromotionConfig;f.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const g={};p.z&&$m("z",u,g,this.animationValues);for(let y=0;y<Mm.length;y++)$m(`rotate${Mm[y]}`,u,g,this.animationValues),$m(`skew${Mm[y]}`,u,g,this.animationValues);u.render();for(const y in g)u.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Du(f?.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Du(f?.pointerEvents)||""),this.hasProjected&&!Hr(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=jO(this.projectionDeltaWithTransform,this.treeScale,y);p&&(x=p(y,x)),u.transform=x;const{x:v,y:C}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${C.origin*100}% 0`,g.animationValues?u.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:u.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const w in ul){if(y[w]===void 0)continue;const{correct:S,applyTo:A,isCSSVariable:R}=ul[w],O=x==="none"?y[w]:S(y[w],g);if(A){const $=A.length;for(let N=0;N<$;N++)u[A[N]]=O}else R?this.options.visualElement.renderState.vars[w]=O:u[w]=O}this.options.layoutId&&(u.pointerEvents=g===this?Du(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(g2),this.root.sharedNodes.clear()}}}function kO(e){e.updateLayout()}function RO(e){const n=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:a}=e.layout,{animationType:s}=e.options,c=n.source!==e.layout.source;s==="size"?Dn(y=>{const x=c?n.measuredBox[y]:n.layoutBox[y],v=Yt(x);x.min=r[y].min,x.max=x.min+v}):GC(s,n.layoutBox,r)&&Dn(y=>{const x=c?n.measuredBox[y]:n.layoutBox[y],v=Yt(r[y]);x.max=x.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+v)});const u=no();Xs(u,r,n.layoutBox);const f=no();c?Xs(f,e.applyTransform(a,!0),n.measuredBox):Xs(f,r,n.layoutBox);const p=!PC(u);let g=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:v}=y;if(x&&v){const C=ft();Qs(C,n.layoutBox,x.layoutBox);const w=ft();Qs(w,r,v.layoutBox),HC(C,w)||(g=!0),y.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=C,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:f,layoutDelta:u,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function zO(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function MO(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function $O(e){e.clearSnapshot()}function g2(e){e.clearMeasurements()}function y2(e){e.isLayoutDirty=!1}function OO(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function x2(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function DO(e){e.resolveTargetDelta()}function _O(e){e.calcProjection()}function LO(e){e.resetSkewAndRotation()}function NO(e){e.removeLeadSnapshot()}function b2(e,n,r){e.translate=it(n.translate,0,r),e.scale=it(n.scale,1,r),e.origin=n.origin,e.originPoint=n.originPoint}function v2(e,n,r,a){e.min=it(n.min,r.min,a),e.max=it(n.max,r.max,a)}function BO(e,n,r,a){v2(e.x,n.x,r.x,a),v2(e.y,n.y,r.y,a)}function UO(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const VO={duration:.45,ease:[.4,0,.1,1]},w2=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),S2=w2("applewebkit/")&&!w2("chrome/")?Math.round:Bn;function C2(e){e.min=S2(e.min),e.max=S2(e.max)}function PO(e){C2(e.x),C2(e.y)}function GC(e,n,r){return e==="position"||e==="preserve-aspect"&&!K$(m2(n),m2(r),.2)}function HO(e){return e!==e.root&&e.scroll?.wasRoot}const FO=qC({attachResizeListener:(e,n)=>dl(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Om={current:void 0},YC=qC({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Om.current){const e=new FO({});e.mount(window),e.setOptions({layoutScroll:!0}),Om.current=e}return Om.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),qO={pan:{Feature:lO},drag:{Feature:sO,ProjectionNode:YC,MeasureLayout:BC}};function T2(e,n,r){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",r==="Start");const s="onHover"+r,c=a[s];c&&tt.postRender(()=>c(n,El(n)))}class GO extends wr{mount(){const{current:n}=this.node;n&&(this.unmount=fM(n,(r,a)=>(T2(this.node,a,"Start"),s=>T2(this.node,s,"End"))))}unmount(){}}class YO extends wr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Cl(dl(this.node.current,"focus",()=>this.onFocus()),dl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function j2(e,n,r){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",r==="Start");const s="onTap"+(r==="End"?"":r),c=a[s];c&&tt.postRender(()=>c(n,El(n)))}class KO extends wr{mount(){const{current:n}=this.node;n&&(this.unmount=gM(n,(r,a)=>(j2(this.node,a,"Start"),(s,{success:c})=>j2(this.node,s,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Vp=new WeakMap,Dm=new WeakMap,XO=e=>{const n=Vp.get(e.target);n&&n(e)},QO=e=>{e.forEach(XO)};function IO({root:e,...n}){const r=e||document;Dm.has(r)||Dm.set(r,{});const a=Dm.get(r),s=JSON.stringify(n);return a[s]||(a[s]=new IntersectionObserver(QO,{root:e,...n})),a[s]}function ZO(e,n,r){const a=IO(n);return Vp.set(e,r),a.observe(e),()=>{Vp.delete(e),a.unobserve(e)}}const JO={some:0,all:1};class WO extends wr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:r,margin:a,amount:s="some",once:c}=n,u={root:r?r.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:JO[s]},f=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,c&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:x}=this.node.getProps(),v=g?y:x;v&&v(p)};return ZO(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:r}=this.node;["amount","margin","root"].some(eD(n,r))&&this.startObserver()}unmount(){}}function eD({viewport:e={}},{viewport:n={}}={}){return r=>e[r]!==n[r]}const tD={inView:{Feature:WO},tap:{Feature:KO},focus:{Feature:YO},hover:{Feature:GO}},nD={layout:{ProjectionNode:YC,MeasureLayout:BC}},iD={...P$,...tD,...qO,...nD},Ae=i$(iD,g$),rD={some:0,all:1};function aD(e,n,{root:r,margin:a,amount:s="some"}={}){const c=J5(e),u=new WeakMap,f=g=>{g.forEach(y=>{const x=u.get(y.target);if(y.isIntersecting!==!!x)if(y.isIntersecting){const v=n(y.target,y);typeof v=="function"?u.set(y.target,v):p.unobserve(y.target)}else typeof x=="function"&&(x(y),u.delete(y.target))})},p=new IntersectionObserver(f,{root:r,rootMargin:a,threshold:typeof s=="number"?s:rD[s]});return c.forEach(g=>p.observe(g)),()=>p.disconnect()}function oD(e,{root:n,margin:r,amount:a,once:s=!1,initial:c=!1}={}){const[u,f]=j.useState(c);return j.useEffect(()=>{if(!e.current||s&&u)return;const p=()=>(f(!0),s?void 0:()=>f(!1)),g={root:n&&n.current||void 0,margin:r,amount:a};return aD(e.current,p,g)},[n,e,r,s,a]),u}const lt={fadeInUp:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},fadeInLeft:{hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.4,ease:"easeOut"}}},fadeInRight:{hidden:{opacity:0,x:20},visible:{opacity:1,x:0,transition:{duration:.4,ease:"easeOut"}}},staggerContainer:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05,delayChildren:.05}}}},sD=(e,n={})=>{const r=Array.from({length:e},()=>j.useRef(null)),a=r.map(s=>oD(s,{once:!0,amount:.3,...n}));return r.map((s,c)=>({ref:s,isInView:a[c]}))},E2=["Na ForgeFit, nós não apenas levantamos ferro","Nós forjamos força!"],lD=()=>{const[e,n]=j.useState(0),[r,a,s,c,u,f,p,g,y]=sD(9);return j.useEffect(()=>{const x=setInterval(()=>{n(v=>(v+1)%E2.length)},3e3);return()=>clearInterval(x)},[]),h.jsxs(h.Fragment,{children:[h.jsxs(oR,{id:"inicio",children:[h.jsxs(eR,{children:[h.jsx(tR,{src:x0,alt:"ForgeFit"}),h.jsxs(nR,{children:[h.jsxs(iR,{children:[h.jsx(eu,{href:"#inicio",children:"Início"}),h.jsx(eu,{href:"#sobre",children:"Sobre"}),h.jsx(eu,{href:"#servicos",children:"Serviços"}),h.jsx(eu,{href:"#contato",children:"Contato"})]}),h.jsx(mR,{to:"/login",children:"Entrar"})]})]}),h.jsxs(aR,{autoPlay:!0,muted:!0,loop:!0,children:[h.jsx("source",{src:X8,type:"video/mp4"}),"Seu navegador não suporta vídeo."]}),h.jsx(sR,{children:h.jsx("p",{children:h.jsx(lR,{children:E2[e]},e)})})]}),h.jsxs(xm,{id:"sobre",children:[h.jsxs(Ae.div,{ref:r.ref,initial:"hidden",animate:r.isInView?"visible":"hidden",variants:lt.fadeInUp,children:[h.jsx("h2",{children:"Bem-vindo à ForgeFit"}),h.jsx("p",{children:"Bem-vindo à ForgeFit, a plataforma desenhada para forjar resultados. Unificamos a gestão completa das suas aulas, planos de treino inteligentes, acompanhamento de progresso em tempo real e um sistema de gamificação envolvente. Dê aos seus alunos as ferramentas para conquistar sua melhor versão e leve sua academia a um patamar lendário."})]}),h.jsx(Ae.div,{ref:a.ref,initial:"hidden",animate:a.isInView?"visible":"hidden",variants:lt.fadeInUp,children:h.jsx(rR,{src:Q8,alt:"Academia ForgeFit"})})]}),h.jsxs(xm,{id:"servicos",children:[h.jsxs(Ae.div,{ref:s.ref,initial:"hidden",animate:s.isInView?"visible":"hidden",variants:lt.fadeInUp,children:[h.jsx("h2",{children:"As Ferramentas da Sua Forja"}),h.jsx("p",{children:"Explore o arsenal completo da ForgeFit. Cada ferramenta foi desenhada para otimizar sua gestão, engajar seus alunos e transformar seu espaço em uma verdadeira arena de resultados."})]}),h.jsxs(cR,{children:[h.jsx(Ae.div,{ref:c.ref,initial:"hidden",animate:c.isInView?"visible":"hidden",variants:lt.fadeInLeft,children:h.jsxs(tu,{children:[h.jsx(nu,{children:h.jsx("img",{src:I8,alt:"Planos de Treino"})}),h.jsxs(iu,{children:[h.jsx("h3",{children:"Planos de Treino: A Jornada do Herói"}),h.jsx("p",{children:"Dê aos seus instrutores o poder de mestres-ferreiros. Nossa plataforma permite criar e atribuir planos de treino 100% personalizados, adaptados aos objetivos de cada aluno. De iniciantes a guerreiros veteranos, cada um terá sua jornada perfeitamente traçada para a vitória."})]})]})}),h.jsx(Ae.div,{ref:u.ref,initial:"hidden",animate:u.isInView?"visible":"hidden",variants:lt.fadeInRight,children:h.jsxs(tu,{reverse:!0,children:[h.jsx(nu,{children:h.jsx("img",{src:Z8,alt:"Gestão de Aulas"})}),h.jsxs(iu,{children:[h.jsx("h3",{children:"Gestão de Aulas: Organize Suas Legiões"}),h.jsx("p",{children:"Comande suas modalidades com precisão. Crie, agende e gerencie todas as suas aulas—seja Yoga, Spinning ou Treinamento Funcional—em um calendário centralizado. Facilite a inscrição dos alunos e otimize a ocupação da sua academia sem esforço."})]})]})}),h.jsx(Ae.div,{ref:f.ref,initial:"hidden",animate:f.isInView?"visible":"hidden",variants:lt.fadeInLeft,children:h.jsxs(tu,{children:[h.jsx(nu,{children:h.jsx("img",{src:J8,alt:"Progresso Real"})}),h.jsxs(iu,{children:[h.jsx("h3",{children:"Progresso Real: O Espelho da Evolução"}),h.jsx("p",{children:"O que não é medido, não pode ser conquistado. Permita que seus alunos registrem dados corporais, integrem resultados de bioimpedância e visualizem seu progresso em gráficos claros. Transforme dados brutos em motivação pura e resultados visíveis."})]})]})}),h.jsx(Ae.div,{ref:p.ref,initial:"hidden",animate:p.isInView?"visible":"hidden",variants:lt.fadeInRight,children:h.jsxs(tu,{reverse:!0,children:[h.jsx(nu,{children:h.jsx("img",{src:W8,alt:"Gamificação"})}),h.jsxs(iu,{children:[h.jsx("h3",{children:"Gamificação: A Arena dos Campeões"}),h.jsx("p",{children:"Transforme o treino em uma competição épica. Crie torneios sazonais, desafios de check-in e rankings para ver quem treina mais. Premie seus alunos mais dedicados e veja o engajamento, a retenção e o espírito de comunidade da sua academia dispararem."})]})]})})]})]}),h.jsxs(xm,{id:"contato",children:[h.jsxs(Ae.div,{ref:g.ref,initial:"hidden",animate:g.isInView?"visible":"hidden",variants:lt.fadeInUp,children:[h.jsx("h2",{children:"Entre em Contato"}),h.jsx("p",{children:"Pronto para forjar sua academia? Entre em contato conosco e descubra como a ForgeFit pode transformar sua gestão e engajar seus alunos como nunca."})]}),h.jsx(Ae.div,{ref:y.ref,initial:"hidden",animate:y.isInView?"visible":"hidden",variants:lt.staggerContainer,children:h.jsxs(uR,{children:[h.jsx(Ae.div,{variants:lt.fadeInUp,children:h.jsxs(bm,{children:[h.jsx("div",{className:"icon",children:h.jsx(o6,{size:48,strokeWidth:1.5})}),h.jsx("h3",{children:"Email"}),h.jsx("p",{children:h.jsx("a",{href:"mailto:contato@forgefit.com",children:"contato@forgefit.com"})})]})}),h.jsx(Ae.div,{variants:lt.fadeInUp,children:h.jsxs(bm,{children:[h.jsx("div",{className:"icon",children:h.jsx(t6,{size:48,strokeWidth:1.5})}),h.jsx("h3",{children:"Telefone"}),h.jsx("p",{children:h.jsx("a",{href:"tel:+5511999999999",children:"(81) 94002-8922"})})]})}),h.jsx(Ae.div,{variants:lt.fadeInUp,children:h.jsxs(bm,{children:[h.jsx("div",{className:"icon",children:h.jsx(rl,{size:48,strokeWidth:1.5})}),h.jsx("h3",{children:"Localização"}),h.jsx("p",{children:"Av. Cais do Apolo, 77, Recife"})]})})]})})]}),h.jsxs(dR,{children:[h.jsxs("p",{children:["Projeto desenvolvido para a disciplina de ",h.jsx("strong",{children:"Requisitos, Projeto de Software e Validação"})," na ",h.jsx("strong",{children:"CESAR School"})]}),h.jsxs("p",{children:[h.jsx("a",{href:"https://www.linkedin.com/in/https://www.linkedin.com/in/gustavo-mourato-1802b328a/",target:"_blank",rel:"noopener noreferrer",children:"Gustavo Mourato"})," • ",h.jsx("a",{href:"https://www.linkedin.com/in/leogutzeit/",target:"_blank",rel:"noopener noreferrer",children:"Leonardo Gutzeit"})," • ",h.jsx("a",{href:"https://www.linkedin.com/in/paulorosadodev/",target:"_blank",rel:"noopener noreferrer",children:"Paulo Rosado"})," • ",h.jsx("a",{href:"https://www.linkedin.com/in/thomazrlima//",target:"_blank",rel:"noopener noreferrer",children:"Thomaz Lima"})," • ",h.jsx("a",{href:"https://www.linkedin.com/in/viniciusdeandradejordao/",target:"_blank",rel:"noopener noreferrer",children:"Vinicius de Andrade"})]})]})]})},cD=E.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    @media (min-width: 48rem) {
        flex-direction: row;
    }
`,uD=E.div`
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
`,dD=E.p`
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
`,fD=E.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    background-color: ${({theme:e})=>e.colors.background};
    min-height: 100vh;
    overflow-y: auto;
`,hD=E.img`
    width: 20rem;
    height: auto;
    margin-bottom: 1.25rem;
`,mD=E(To)`
    align-self: center;
`,pD=E.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;E.div`
    display: flex;
    flex-direction: column;
`;E.label`
    color: ${({theme:e})=>e.colors.primary};
    margin-bottom: 0.3125rem;
    font-size: 0.875rem;
    font-weight: 600;
`;E.input`
    padding: 0.75rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.25rem;
    font-size: 1rem;
`;const A2=E.span`
    margin-top: 0rem;
    font-size: 0.875rem;
    color: ${({theme:e})=>e.colors.text};
    text-align: center;
`;E.p`
    text-align: center;
    margin-top: 1.25rem;
    color: ${({theme:e})=>e.colors.text};
`;E(To)`
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;const gD=E.div`
    display: flex;
    flex-direction: column;
`,yD=E.label`
    color: ${({theme:e,variant:n})=>n==="classic"?"theme.colors.text":e.colors.text};
    margin-bottom: 0.3125rem;
    font-size: 0.875rem;
    font-weight: 600;
`,xD=E.input`
    padding: 0.75rem;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;

    background-color: ${({theme:e,variant:n})=>n==="classic"?"#fff":e.colors.background};
    color: ${({theme:e,variant:n})=>n==="classic"?"#0f172a":e.colors.text};
    border-radius: ${({variant:e})=>e==="classic"?"0.5rem":"0.25rem"};
    border: ${({variant:e,theme:n})=>e==="classic"?`1px solid ${n.colors.primary}33`:"2px solid"};
    ${({variant:e,theme:n})=>e==="gradient"?`border-image: linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary}) 1;`:""}

    &::placeholder {
        color: ${({theme:e,variant:n})=>n==="classic"?"#0f172a80":`${e.colors.text}80`};
    }

    &:focus {
        box-shadow: ${({variant:e,theme:n})=>e==="classic"?"0 6px 18px rgba(15, 23, 42, 0.08)":`0 0 0 3px ${n.colors.primary}22`};
    }
`,Wu=({label:e,type:n,placeholder:r,id:a,value:s,onChange:c,required:u,variant:f="gradient"})=>h.jsxs(gD,{children:[h.jsx(yD,{htmlFor:a,variant:f,children:e}),h.jsx(xD,{id:a,type:n,placeholder:r,value:s,onChange:c,required:u,variant:f})]}),k2=["Forje seu destino","Seja sua própria lenda","Honre sua jornada","Domine seus medos","A glória te espera","Músculos de aço","Supere-se a cada dia","Conquiste a si mesmo","Força indomável","Corpo de guerreiro","Desafie seus limites"],bD=()=>{const[e,n]=j.useState(0),[r,a]=j.useState(""),[s,c]=j.useState(""),[u,f]=j.useState(""),[p,g]=j.useState(!1),{login:y}=Ao(),x=md();j.useEffect(()=>{const C=setInterval(()=>{n(w=>(w+1)%k2.length)},3e3);return()=>clearInterval(C)},[]);const v=async C=>{C.preventDefault(),f(""),g(!0);try{await y(r,s),x("/aulas")}catch{f("Email ou senha inválidos. Tente novamente.")}finally{g(!1)}};return h.jsxs(cD,{children:[h.jsx(uD,{children:h.jsx("div",{children:h.jsx(dD,{children:k2[e]},e)})}),h.jsxs(fD,{children:[h.jsx(mD,{to:"/",children:h.jsx(hD,{src:"/src/assets/logo.png",alt:"ForgeFit Logo"})}),h.jsxs(pD,{onSubmit:v,children:[h.jsx(Wu,{label:"Email:",type:"email",placeholder:"Digite seu email",id:"email",value:r,onChange:C=>a(C.target.value),variant:"classic",required:!0}),h.jsx(Wu,{label:"Senha:",type:"password",placeholder:"Digite sua senha",id:"password",value:s,onChange:C=>c(C.target.value),variant:"classic",required:!0}),u&&h.jsx(A2,{style:{color:"#EF752B",marginTop:"-0.5rem"},children:u}),h.jsx(Kt,{type:"submit",disabled:p,children:p?"ENTRANDO...":"ENTRAR"}),h.jsx(A2,{children:"Você receberá seu acesso por email após efetuar a matrícula."})]})]})]})},vD=E.div`
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
`;E.header`
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
`;E.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`;E.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
`;E.button`
    padding: 0.75rem 1.5rem;
    border: 2px solid;
    border-image: ${({active:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary}) 1`:"none"};
    border-color: ${({active:e,theme:n})=>e?"transparent":n.colors.primary};
    background: ${({active:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary})`:"transparent"};
    color: ${({active:e})=>e?"white":({theme:n})=>n.colors.text};
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
`;const cu=E.div`
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
`,Al=E.div`
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
`,R2=E.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;

    ${Al}:hover & {
        transform: scale(1.05);
    }
`,z2=E.div`
    padding: 1.5rem;
`,M2=E.h3`
    font-size: 1.5rem;
    color: ${({theme:e})=>e.colors.primary};
    margin-bottom: 1rem;
`,Ga=E.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.75rem;
    font-size: 0.95rem;

    svg {
        color: ${({theme:e})=>e.colors.primary};
    }
`,$2=E.div`
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
`,wD=E.div`
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
`,O2=E.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}33;
    border-radius: 0.5rem;
    overflow: hidden;
`,D2=E.div`
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
`,_2=E.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,SD=E.div`
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
`;E.div`
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
`;const CD=E.div`
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`,L2=E.section`
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        margin-bottom: 2rem;
    }
`,uu=E.h1`
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
`,TD=E.div`
    margin-bottom: 2rem;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`,jD=E(Al)`
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
`,ED=E(Al)`
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
`,AD=E(Kt)`
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
`,kD=E(Al)`
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
`,RD=E(Kt)`
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
`,zD=E(Kt)`
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
`,MD=E.div`
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
`,$D=[{id:1,name:"Yoga Matinal",instructor:"Ana Silva",category:"Yoga",schedule:"Seg - 07:00",capacity:20,enrolled:15,location:"Sala 1",image:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",enrollmentStatus:"to_evaluate",waitingList:0,isClassFinished:!0},{id:2,name:"Spinning Intenso",instructor:"Carlos Mendes",category:"Spinning",schedule:"Ter - 18:00",capacity:25,enrolled:22,location:"Sala 2",image:"https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500",enrollmentStatus:"enrolled",waitingList:0},{id:3,name:"Funcional Cross",instructor:"Pedro Santos",category:"Funcional",schedule:"Qua - 19:00",capacity:15,enrolled:15,location:"Área Externa",image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",enrollmentStatus:"waiting_list",waitingList:3},{id:4,name:"Pilates",instructor:"Mariana Costa",category:"Pilates",schedule:"Sáb - 08:00",capacity:12,enrolled:10,location:"Sala 3",image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",enrollmentStatus:"not_enrolled",waitingList:0},{id:5,name:"Muay Thai",instructor:"Roberto Oliveira",category:"Luta",schedule:"Sex - 19:30",capacity:20,enrolled:20,location:"Ring de Luta",image:"https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=500",enrollmentStatus:"not_enrolled",waitingList:2}],OD=["Todas","Yoga","Spinning","Funcional","Pilates","Dança","Luta"],DD=async()=>(await new Promise(e=>setTimeout(e,500)),$D),_D=async()=>(await new Promise(e=>setTimeout(e,200)),OD),LD=E.form`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
`,ND=E.input`
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
`,BD=E.button`
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
`,UD=({placeholder:e="Buscar...",onSearch:n,initialValue:r=""})=>{const[a,s]=j.useState(r),c=f=>{f.preventDefault(),n(a)},u=f=>{s(f.target.value)};return h.jsxs(LD,{onSubmit:c,children:[h.jsx(ND,{type:"text",placeholder:e,value:a,onChange:u}),h.jsx(BD,{type:"submit",children:h.jsx(l6,{size:20})})]})},VD=E.div`
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
`,PD=E.button`
    padding: 0.625rem 1.25rem;
    border: 2px solid;
    border-image: ${({active:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary}) 1`:"none"};
    border-color: ${({active:e,theme:n})=>e?"transparent":n.colors.primary};
    background: ${({active:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary})`:"transparent"};
    color: ${({active:e})=>e?"white":({theme:n})=>n.colors.text};
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
`,HD=({categories:e,selectedCategory:n,onCategoryChange:r})=>h.jsx(VD,{children:e.map(a=>h.jsx(PD,{active:n===a,onClick:()=>r(a),children:a},a))}),FD=E.div`
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
`,qD=({searchPlaceholder:e="Buscar aulas, instrutores ou locais...",onSearch:n,categories:r,selectedCategory:a,onCategoryChange:s,initialSearchValue:c=""})=>h.jsxs(FD,{children:[h.jsx(UD,{placeholder:e,onSearch:n,initialValue:c}),h.jsx(HD,{categories:r,selectedCategory:a,onCategoryChange:s})]}),GD=ud`
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
`,YD=E.div`
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};
    border-radius: ${({borderRadius:e})=>e};
    background: linear-gradient(90deg, ${({theme:e})=>e.colors.background} 0%, ${({theme:e})=>e.colors.primary}20 25%, ${({theme:e})=>e.colors.secondary}20 50%, ${({theme:e})=>e.colors.primary}20 75%, ${({theme:e})=>e.colors.background} 100%);
    background-size: 1000px 100%;
    animation: ${GD} 2s infinite linear;
`,tn=({width:e="100%",height:n="20px",borderRadius:r="0.25rem",className:a})=>h.jsx(YD,{width:e,height:n,borderRadius:r,className:a}),KD=ud`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,XD=ud`
    from {
        opacity: 0;
        transform: scale(0.9) translateY(-20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`,QD=E.div`
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
    animation: ${KD} 0.3s ease-out;
    padding: 1rem;
    box-sizing: border-box;
`,ID=E.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary}) 1;
    border-radius: 0.75rem;
    position: relative;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    animation: ${XD} 0.3s ease-out;
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
`,ZD=E.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem 1rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.primary}33;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem 0.75rem;
    }
`,JD=E.h2`
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
`,WD=E.button`
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
`,e7=E.div`
    padding: 1.5rem 2rem;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
    }
`,t7=E.div`
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
`,Mo=({isOpen:e,onClose:n,title:r,children:a,footer:s,closeOnOverlayClick:c=!0,closeOnEsc:u=!0})=>{j.useEffect(()=>{if(!u||!e)return;const p=g=>{g.key==="Escape"&&n()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[e,n,u]),j.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]);const f=p=>{c&&p.target===p.currentTarget&&n()};return e?hk.createPortal(h.jsx(QD,{isOpen:e,onClick:f,children:h.jsxs(ID,{children:[r&&h.jsxs(ZD,{children:[h.jsx(JD,{children:r}),h.jsx(WD,{onClick:n,"aria-label":"Fechar modal",children:h.jsx(wd,{})})]}),h.jsx(e7,{children:a}),s&&h.jsx(t7,{children:s})]})}),document.body):null},yo=({children:e,onClick:n,variant:r="secondary",disabled:a=!1,type:s="button"})=>h.jsx(Kt,{type:s,variant:r,onClick:n,disabled:a,size:"lg",children:e}),n7=E.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 64rem) {
        flex-direction: column;
        gap: 1.5rem;
    }
`,i7=E.div`
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
`,r7=E.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
`,a7=E.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;

    @media (max-width: 64rem) {
        min-height: auto;
    }
`,o7=E.h3`
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
`,s7=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
`,_m=E.div`
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
`,l7=E.div`
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
`,N2=E.p`
    color: ${({theme:e})=>e.colors.error};
    font-size: 0.9rem;
    text-align: center;
    margin: 1rem 0 0 0;
    padding: 0.75rem;
    background: ${({theme:e})=>e.colors.error}10;
    border: 1px solid ${({theme:e})=>e.colors.error}30;
    border-radius: 0.5rem;
`,c7=({isOpen:e,onClose:n,classData:r,onConfirm:a,isLoading:s=!1})=>{if(!r)return null;const c=r.enrolled>=r.capacity,u=r.capacity-r.enrolled,f=()=>{a(r.id)},p=h.jsxs(h.Fragment,{children:[h.jsx(yo,{variant:"secondary",onClick:n,disabled:s,children:"Cancelar"}),h.jsx(yo,{variant:"primary",onClick:f,disabled:s,children:s?"Processando...":c?"Entrar na Lista de Espera":"Confirmar Inscrição"})]});return h.jsxs(Mo,{isOpen:e,onClose:n,title:"Confirmar Inscrição",footer:p,closeOnOverlayClick:!s,closeOnEsc:!s,children:[h.jsxs(n7,{children:[h.jsx(i7,{children:h.jsx(r7,{src:r.image,alt:r.name})}),h.jsxs(a7,{children:[h.jsxs("div",{children:[h.jsx(o7,{children:r.name}),h.jsxs(s7,{children:[h.jsxs(_m,{children:[h.jsx(mo,{size:18}),h.jsxs("span",{children:[h.jsx("strong",{children:"Instrutor(a):"})," ",r.instructor]})]}),h.jsxs(_m,{children:[h.jsx(ho,{size:18}),h.jsxs("span",{children:[h.jsx("strong",{children:"Horário:"})," ",r.schedule]})]}),h.jsxs(_m,{children:[h.jsx(rl,{size:18}),h.jsxs("span",{children:[h.jsx("strong",{children:"Local:"})," ",r.location]})]})]})]}),h.jsx(l7,{children:c?h.jsxs(h.Fragment,{children:[h.jsx("p",{children:"Esta aula está lotada!"}),h.jsxs("p",{className:"capacity-info",children:["Pessoas na fila de espera: ",r.waitingList||0]})]}):h.jsxs(h.Fragment,{children:[h.jsx("p",{children:"Você está prestes a se inscrever nesta aula."}),h.jsxs("p",{className:"capacity-info",children:["Vagas disponíveis: ",u," de ",r.capacity]})]})})]})]}),c&&h.jsx(N2,{style:{color:"#f97316",borderColor:"#f9731630",background:"#f9731610"},children:"Você será adicionado à lista de espera e será notificado quando uma vaga estiver disponível."}),u<=3&&!c&&h.jsxs(N2,{style:{color:"#f97316",borderColor:"#f9731630",background:"#f9731610"},children:["Atenção: Restam apenas ",u," vaga",u!==1?"s":""," ",u!==1?"disponíveis":"disponível","!"]})]})},u7=E.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 64rem) {
        flex-direction: column;
        gap: 1.5rem;
    }
`,d7=E.div`
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
`,f7=E.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`,h7=E.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,m7=E.h3`
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
`,p7=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,Lm=E.div`
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
`,g7=E.div`
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
`,y7=E.div`
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
`,x7=E.div`
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
`,b7=E.div`
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
`,v7=({isOpen:e,onClose:n,classData:r,onConfirm:a,isLoading:s=!1})=>{if(!r)return null;const c=r.enrollmentStatus==="waiting_list",f=(()=>{if(c)return null;const y=50;switch(r.id){case 1:return{isEligible:!0,amount:y,reason:"Cancelamento com mais de 24h de antecedência"};case 2:return{isEligible:!0,amount:y*.5,reason:"Cancelamento com menos de 24h"};case 3:return{isEligible:!1,amount:0,reason:"Aula já iniciada ou cancelamento muito próximo"};case 4:return{isEligible:!0,amount:y,reason:"Cancelamento dentro do prazo permitido"};case 5:return{isEligible:!0,amount:y*.75,reason:"Cancelamento com 12h de antecedência"};default:return{isEligible:!1,amount:0,reason:"Aula não elegível para reembolso"}}})(),p=()=>{a(r.id)},g=h.jsxs(y7,{style:{justifyContent:c?"flex-end":"space-between"},children:[!c&&f&&h.jsxs(x7,{children:[h.jsx("h4",{children:"Informações de Reembolso"}),f.isEligible?h.jsxs("p",{children:[h.jsxs("span",{className:"refund-amount",children:["Valor do reembolso: R$ ",f.amount.toFixed(2)]}),h.jsx("br",{}),h.jsx("small",{children:f.reason})]}):h.jsxs("p",{children:[h.jsx("span",{className:"no-refund",children:"Não elegível para reembolso"}),h.jsx("br",{}),h.jsx("small",{children:f.reason})]})]}),h.jsxs(b7,{children:[h.jsx(yo,{variant:"secondary",onClick:n,disabled:s,children:"Cancelar"}),h.jsx(yo,{variant:"primary",onClick:p,disabled:s,children:s?c?"Saindo da fila...":"Cancelando...":c?"Confirmar Saída":"Confirmar Cancelamento"})]})]});return h.jsxs(Mo,{isOpen:e,onClose:n,title:c?"Sair da Lista de Espera":"Cancelar Inscrição",footer:g,closeOnOverlayClick:!s,closeOnEsc:!s,children:[h.jsxs(u7,{children:[h.jsx(d7,{children:h.jsx(f7,{src:r.image,alt:r.name})}),h.jsx(h7,{children:h.jsxs("div",{children:[h.jsx(m7,{children:r.name}),h.jsxs(p7,{children:[h.jsxs(Lm,{children:[h.jsx(mo,{size:16}),h.jsxs("span",{children:[h.jsx("strong",{children:"Instrutor(a):"})," ",r.instructor]})]}),h.jsxs(Lm,{children:[h.jsx(ho,{size:16}),h.jsxs("span",{children:[h.jsx("strong",{children:"Horário:"})," ",r.schedule]})]}),h.jsxs(Lm,{children:[h.jsx(rl,{size:16}),h.jsxs("span",{children:[h.jsx("strong",{children:"Local:"})," ",r.location]})]})]})]})})]}),h.jsxs(g7,{children:[h.jsx($R,{size:20}),h.jsx("p",{children:c?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"Tem certeza que deseja sair da lista de espera?"}),h.jsx("br",{}),"Você perderá sua posição na fila e precisará se inscrever novamente."]}):h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"Tem certeza que deseja cancelar sua inscrição?"}),h.jsx("br",{}),"Esta ação não pode ser desfeita e sua vaga será disponibilizada para outros alunos."]})})]})]})},fl={black:"#000",white:"#fff"},Ya={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Ka={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Xa={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Qa={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Ia={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},Ds={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},w7={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function ia(e,...n){const r=new URL(`https://mui.com/production-error/?code=${e}`);return n.forEach(a=>r.searchParams.append("args[]",a)),`Minified MUI error #${e}; visit ${r} for the full message.`}const S7="$$material";function Pp(){return Pp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Pp.apply(null,arguments)}function C7(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function T7(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var j7=(function(){function e(r){var a=this;this._insertTag=function(s){var c;a.tags.length===0?a.insertionPoint?c=a.insertionPoint.nextSibling:a.prepend?c=a.container.firstChild:c=a.before:c=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(s,c),a.tags.push(s)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(a){a.forEach(this._insertTag)},n.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(T7(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var c=C7(s);try{c.insertRule(a,c.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(a));this.ctr++},n.flush=function(){this.tags.forEach(function(a){var s;return(s=a.parentNode)==null?void 0:s.removeChild(a)}),this.tags=[],this.ctr=0},e})(),Pt="-ms-",ed="-moz-",Le="-webkit-",KC="comm",eg="rule",tg="decl",E7="@import",XC="@keyframes",A7="@layer",k7=Math.abs,Ed=String.fromCharCode,R7=Object.assign;function z7(e,n){return Ut(e,0)^45?(((n<<2^Ut(e,0))<<2^Ut(e,1))<<2^Ut(e,2))<<2^Ut(e,3):0}function QC(e){return e.trim()}function M7(e,n){return(e=n.exec(e))?e[0]:e}function Ne(e,n,r){return e.replace(n,r)}function Hp(e,n){return e.indexOf(n)}function Ut(e,n){return e.charCodeAt(n)|0}function hl(e,n,r){return e.slice(n,r)}function si(e){return e.length}function ng(e){return e.length}function du(e,n){return n.push(e),e}function $7(e,n){return e.map(n).join("")}var Ad=1,xo=1,IC=0,on=0,wt=0,$o="";function kd(e,n,r,a,s,c,u){return{value:e,root:n,parent:r,type:a,props:s,children:c,line:Ad,column:xo,length:u,return:""}}function _s(e,n){return R7(kd("",null,null,"",null,null,0),e,{length:-e.length},n)}function O7(){return wt}function D7(){return wt=on>0?Ut($o,--on):0,xo--,wt===10&&(xo=1,Ad--),wt}function bn(){return wt=on<IC?Ut($o,on++):0,xo++,wt===10&&(xo=1,Ad++),wt}function di(){return Ut($o,on)}function Lu(){return on}function kl(e,n){return hl($o,e,n)}function ml(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ZC(e){return Ad=xo=1,IC=si($o=e),on=0,[]}function JC(e){return $o="",e}function Nu(e){return QC(kl(on-1,Fp(e===91?e+2:e===40?e+1:e)))}function _7(e){for(;(wt=di())&&wt<33;)bn();return ml(e)>2||ml(wt)>3?"":" "}function L7(e,n){for(;--n&&bn()&&!(wt<48||wt>102||wt>57&&wt<65||wt>70&&wt<97););return kl(e,Lu()+(n<6&&di()==32&&bn()==32))}function Fp(e){for(;bn();)switch(wt){case e:return on;case 34:case 39:e!==34&&e!==39&&Fp(wt);break;case 40:e===41&&Fp(e);break;case 92:bn();break}return on}function N7(e,n){for(;bn()&&e+wt!==57;)if(e+wt===84&&di()===47)break;return"/*"+kl(n,on-1)+"*"+Ed(e===47?e:bn())}function B7(e){for(;!ml(di());)bn();return kl(e,on)}function U7(e){return JC(Bu("",null,null,null,[""],e=ZC(e),0,[0],e))}function Bu(e,n,r,a,s,c,u,f,p){for(var g=0,y=0,x=u,v=0,C=0,w=0,S=1,A=1,R=1,O=0,$="",N=s,P=c,_=a,L=$;A;)switch(w=O,O=bn()){case 40:if(w!=108&&Ut(L,x-1)==58){Hp(L+=Ne(Nu(O),"&","&\f"),"&\f")!=-1&&(R=-1);break}case 34:case 39:case 91:L+=Nu(O);break;case 9:case 10:case 13:case 32:L+=_7(w);break;case 92:L+=L7(Lu()-1,7);continue;case 47:switch(di()){case 42:case 47:du(V7(N7(bn(),Lu()),n,r),p);break;default:L+="/"}break;case 123*S:f[g++]=si(L)*R;case 125*S:case 59:case 0:switch(O){case 0:case 125:A=0;case 59+y:R==-1&&(L=Ne(L,/\f/g,"")),C>0&&si(L)-x&&du(C>32?U2(L+";",a,r,x-1):U2(Ne(L," ","")+";",a,r,x-2),p);break;case 59:L+=";";default:if(du(_=B2(L,n,r,g,y,s,f,$,N=[],P=[],x),c),O===123)if(y===0)Bu(L,n,_,_,N,c,x,f,P);else switch(v===99&&Ut(L,3)===110?100:v){case 100:case 108:case 109:case 115:Bu(e,_,_,a&&du(B2(e,_,_,0,0,s,f,$,s,N=[],x),P),s,P,x,f,a?N:P);break;default:Bu(L,_,_,_,[""],P,0,f,P)}}g=y=C=0,S=R=1,$=L="",x=u;break;case 58:x=1+si(L),C=w;default:if(S<1){if(O==123)--S;else if(O==125&&S++==0&&D7()==125)continue}switch(L+=Ed(O),O*S){case 38:R=y>0?1:(L+="\f",-1);break;case 44:f[g++]=(si(L)-1)*R,R=1;break;case 64:di()===45&&(L+=Nu(bn())),v=di(),y=x=si($=L+=B7(Lu())),O++;break;case 45:w===45&&si(L)==2&&(S=0)}}return c}function B2(e,n,r,a,s,c,u,f,p,g,y){for(var x=s-1,v=s===0?c:[""],C=ng(v),w=0,S=0,A=0;w<a;++w)for(var R=0,O=hl(e,x+1,x=k7(S=u[w])),$=e;R<C;++R)($=QC(S>0?v[R]+" "+O:Ne(O,/&\f/g,v[R])))&&(p[A++]=$);return kd(e,n,r,s===0?eg:f,p,g,y)}function V7(e,n,r){return kd(e,n,r,KC,Ed(O7()),hl(e,2,-2),0)}function U2(e,n,r,a){return kd(e,n,r,tg,hl(e,0,a),hl(e,a+1,-1),a)}function ro(e,n){for(var r="",a=ng(e),s=0;s<a;s++)r+=n(e[s],s,e,n)||"";return r}function P7(e,n,r,a){switch(e.type){case A7:if(e.children.length)break;case E7:case tg:return e.return=e.return||e.value;case KC:return"";case XC:return e.return=e.value+"{"+ro(e.children,a)+"}";case eg:e.value=e.props.join(",")}return si(r=ro(e.children,a))?e.return=e.value+"{"+r+"}":""}function H7(e){var n=ng(e);return function(r,a,s,c){for(var u="",f=0;f<n;f++)u+=e[f](r,a,s,c)||"";return u}}function F7(e){return function(n){n.root||(n=n.return)&&e(n)}}function WC(e){var n=Object.create(null);return function(r){return n[r]===void 0&&(n[r]=e(r)),n[r]}}var q7=function(n,r,a){for(var s=0,c=0;s=c,c=di(),s===38&&c===12&&(r[a]=1),!ml(c);)bn();return kl(n,on)},G7=function(n,r){var a=-1,s=44;do switch(ml(s)){case 0:s===38&&di()===12&&(r[a]=1),n[a]+=q7(on-1,r,a);break;case 2:n[a]+=Nu(s);break;case 4:if(s===44){n[++a]=di()===58?"&\f":"",r[a]=n[a].length;break}default:n[a]+=Ed(s)}while(s=bn());return n},Y7=function(n,r){return JC(G7(ZC(n),r))},V2=new WeakMap,K7=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var r=n.value,a=n.parent,s=n.column===a.column&&n.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(n.props.length===1&&r.charCodeAt(0)!==58&&!V2.get(a))&&!s){V2.set(n,!0);for(var c=[],u=Y7(r,c),f=a.props,p=0,g=0;p<u.length;p++)for(var y=0;y<f.length;y++,g++)n.props[g]=c[p]?u[p].replace(/&\f/g,f[y]):f[y]+" "+u[p]}}},X7=function(n){if(n.type==="decl"){var r=n.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(n.return="",n.value="")}};function eT(e,n){switch(z7(e,n)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+ed+e+Pt+e+e;case 6828:case 4268:return Le+e+Pt+e+e;case 6165:return Le+e+Pt+"flex-"+e+e;case 5187:return Le+e+Ne(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+Pt+"flex-$1$2")+e;case 5443:return Le+e+Pt+"flex-item-"+Ne(e,/flex-|-self/,"")+e;case 4675:return Le+e+Pt+"flex-line-pack"+Ne(e,/align-content|flex-|-self/,"")+e;case 5548:return Le+e+Pt+Ne(e,"shrink","negative")+e;case 5292:return Le+e+Pt+Ne(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+Ne(e,"-grow","")+Le+e+Pt+Ne(e,"grow","positive")+e;case 4554:return Le+Ne(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return Ne(Ne(Ne(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return Ne(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return Ne(Ne(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+Pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4095:case 3583:case 4068:case 2532:return Ne(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(si(e)-1-n>6)switch(Ut(e,n+1)){case 109:if(Ut(e,n+4)!==45)break;case 102:return Ne(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+ed+(Ut(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~Hp(e,"stretch")?eT(Ne(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(Ut(e,n+1)!==115)break;case 6444:switch(Ut(e,si(e)-3-(~Hp(e,"!important")&&10))){case 107:return Ne(e,":",":"+Le)+e;case 101:return Ne(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Le+(Ut(e,14)===45?"inline-":"")+"box$3$1"+Le+"$2$3$1"+Pt+"$2box$3")+e}break;case 5936:switch(Ut(e,n+11)){case 114:return Le+e+Pt+Ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+Pt+Ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+Pt+Ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Le+e+Pt+e+e}return e}var Q7=function(n,r,a,s){if(n.length>-1&&!n.return)switch(n.type){case tg:n.return=eT(n.value,n.length);break;case XC:return ro([_s(n,{value:Ne(n.value,"@","@"+Le)})],s);case eg:if(n.length)return $7(n.props,function(c){switch(M7(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ro([_s(n,{props:[Ne(c,/:(read-\w+)/,":"+ed+"$1")]})],s);case"::placeholder":return ro([_s(n,{props:[Ne(c,/:(plac\w+)/,":"+Le+"input-$1")]}),_s(n,{props:[Ne(c,/:(plac\w+)/,":"+ed+"$1")]}),_s(n,{props:[Ne(c,/:(plac\w+)/,Pt+"input-$1")]})],s)}return""})}},I7=[Q7],Z7=function(n){var r=n.key;if(r==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(S){var A=S.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var s=n.stylisPlugins||I7,c={},u,f=[];u=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(S){for(var A=S.getAttribute("data-emotion").split(" "),R=1;R<A.length;R++)c[A[R]]=!0;f.push(S)});var p,g=[K7,X7];{var y,x=[P7,F7(function(S){y.insert(S)})],v=H7(g.concat(s,x)),C=function(A){return ro(U7(A),v)};p=function(A,R,O,$){y=O,C(A?A+"{"+R.styles+"}":R.styles),$&&(w.inserted[R.name]=!0)}}var w={key:r,sheet:new j7({key:r,container:u,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:c,registered:{},insert:p};return w.sheet.hydrate(f),w},J7=!0;function W7(e,n,r){var a="";return r.split(" ").forEach(function(s){e[s]!==void 0?n.push(e[s]+";"):s&&(a+=s+" ")}),a}var tT=function(n,r,a){var s=n.key+"-"+r.name;(a===!1||J7===!1)&&n.registered[s]===void 0&&(n.registered[s]=r.styles)},e9=function(n,r,a){tT(n,r,a);var s=n.key+"-"+r.name;if(n.inserted[r.name]===void 0){var c=r;do n.insert(r===c?"."+s:"",c,n.sheet,!0),c=c.next;while(c!==void 0)}};function t9(e){for(var n=0,r,a=0,s=e.length;s>=4;++a,s-=4)r=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,n=(r&65535)*1540483477+((r>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(s){case 3:n^=(e.charCodeAt(a+2)&255)<<16;case 2:n^=(e.charCodeAt(a+1)&255)<<8;case 1:n^=e.charCodeAt(a)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var n9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},i9=/[A-Z]|^ms/g,r9=/_EMO_([^_]+?)_([^]*?)_EMO_/g,nT=function(n){return n.charCodeAt(1)===45},P2=function(n){return n!=null&&typeof n!="boolean"},Nm=WC(function(e){return nT(e)?e:e.replace(i9,"-$&").toLowerCase()}),H2=function(n,r){switch(n){case"animation":case"animationName":if(typeof r=="string")return r.replace(r9,function(a,s,c){return li={name:s,styles:c,next:li},s})}return n9[n]!==1&&!nT(n)&&typeof r=="number"&&r!==0?r+"px":r};function pl(e,n,r){if(r==null)return"";var a=r;if(a.__emotion_styles!==void 0)return a;switch(typeof r){case"boolean":return"";case"object":{var s=r;if(s.anim===1)return li={name:s.name,styles:s.styles,next:li},s.name;var c=r;if(c.styles!==void 0){var u=c.next;if(u!==void 0)for(;u!==void 0;)li={name:u.name,styles:u.styles,next:li},u=u.next;var f=c.styles+";";return f}return a9(e,n,r)}case"function":{if(e!==void 0){var p=li,g=r(e);return li=p,pl(e,n,g)}break}}var y=r;if(n==null)return y;var x=n[y];return x!==void 0?x:y}function a9(e,n,r){var a="";if(Array.isArray(r))for(var s=0;s<r.length;s++)a+=pl(e,n,r[s])+";";else for(var c in r){var u=r[c];if(typeof u!="object"){var f=u;n!=null&&n[f]!==void 0?a+=c+"{"+n[f]+"}":P2(f)&&(a+=Nm(c)+":"+H2(c,f)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&(n==null||n[u[0]]===void 0))for(var p=0;p<u.length;p++)P2(u[p])&&(a+=Nm(c)+":"+H2(c,u[p])+";");else{var g=pl(e,n,u);switch(c){case"animation":case"animationName":{a+=Nm(c)+":"+g+";";break}default:a+=c+"{"+g+"}"}}}return a}var F2=/label:\s*([^\s;{]+)\s*(;|$)/g,li;function iT(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,s="";li=void 0;var c=e[0];if(c==null||c.raw===void 0)a=!1,s+=pl(r,n,c);else{var u=c;s+=u[0]}for(var f=1;f<e.length;f++)if(s+=pl(r,n,e[f]),a){var p=c;s+=p[f]}F2.lastIndex=0;for(var g="",y;(y=F2.exec(s))!==null;)g+="-"+y[1];var x=t9(s)+g;return{name:x,styles:s,next:li}}var o9=function(n){return n()},s9=tp.useInsertionEffect?tp.useInsertionEffect:!1,l9=s9||o9,rT=j.createContext(typeof HTMLElement<"u"?Z7({key:"css"}):null);rT.Provider;var c9=function(n){return j.forwardRef(function(r,a){var s=j.useContext(rT);return n(r,s,a)})},u9=j.createContext({}),d9=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,f9=WC(function(e){return d9.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),h9=f9,m9=function(n){return n!=="theme"},q2=function(n){return typeof n=="string"&&n.charCodeAt(0)>96?h9:m9},G2=function(n,r,a){var s;if(r){var c=r.shouldForwardProp;s=n.__emotion_forwardProp&&c?function(u){return n.__emotion_forwardProp(u)&&c(u)}:c}return typeof s!="function"&&a&&(s=n.__emotion_forwardProp),s},p9=function(n){var r=n.cache,a=n.serialized,s=n.isStringTag;return tT(r,a,s),l9(function(){return e9(r,a,s)}),null},g9=function e(n,r){var a=n.__emotion_real===n,s=a&&n.__emotion_base||n,c,u;r!==void 0&&(c=r.label,u=r.target);var f=G2(n,r,a),p=f||q2(s),g=!p("as");return function(){var y=arguments,x=a&&n.__emotion_styles!==void 0?n.__emotion_styles.slice(0):[];if(c!==void 0&&x.push("label:"+c+";"),y[0]==null||y[0].raw===void 0)x.push.apply(x,y);else{var v=y[0];x.push(v[0]);for(var C=y.length,w=1;w<C;w++)x.push(y[w],v[w])}var S=c9(function(A,R,O){var $=g&&A.as||s,N="",P=[],_=A;if(A.theme==null){_={};for(var L in A)_[L]=A[L];_.theme=j.useContext(u9)}typeof A.className=="string"?N=W7(R.registered,P,A.className):A.className!=null&&(N=A.className+" ");var ee=iT(x.concat(P),R.registered,_);N+=R.key+"-"+ee.name,u!==void 0&&(N+=" "+u);var ie=g&&f===void 0?q2($):p,se={};for(var le in A)g&&le==="as"||ie(le)&&(se[le]=A[le]);return se.className=N,O&&(se.ref=O),j.createElement(j.Fragment,null,j.createElement(p9,{cache:R,serialized:ee,isStringTag:typeof $=="string"}),j.createElement($,se))});return S.displayName=c!==void 0?c:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",S.defaultProps=n.defaultProps,S.__emotion_real=S,S.__emotion_base=s,S.__emotion_styles=x,S.__emotion_forwardProp=f,Object.defineProperty(S,"toString",{value:function(){return"."+u}}),S.withComponent=function(A,R){var O=e(A,Pp({},r,R,{shouldForwardProp:G2(S,R,!0)}));return O.apply(void 0,x)},S}},y9=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],qp=g9.bind(null);y9.forEach(function(e){qp[e]=qp(e)});function x9(e,n){return qp(e,n)}function b9(e,n){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=n(e.__emotion_styles))}const Y2=[];function Wr(e){return Y2[0]=e,iT(Y2)}var Bm={exports:{}},Ke={};var K2;function v9(){if(K2)return Ke;K2=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.view_transition"),C=Symbol.for("react.client.reference");function w(S){if(typeof S=="object"&&S!==null){var A=S.$$typeof;switch(A){case e:switch(S=S.type,S){case r:case s:case a:case p:case g:case v:return S;default:switch(S=S&&S.$$typeof,S){case u:case f:case x:case y:return S;case c:return S;default:return A}}case n:return A}}}return Ke.ContextConsumer=c,Ke.ContextProvider=u,Ke.Element=e,Ke.ForwardRef=f,Ke.Fragment=r,Ke.Lazy=x,Ke.Memo=y,Ke.Portal=n,Ke.Profiler=s,Ke.StrictMode=a,Ke.Suspense=p,Ke.SuspenseList=g,Ke.isContextConsumer=function(S){return w(S)===c},Ke.isContextProvider=function(S){return w(S)===u},Ke.isElement=function(S){return typeof S=="object"&&S!==null&&S.$$typeof===e},Ke.isForwardRef=function(S){return w(S)===f},Ke.isFragment=function(S){return w(S)===r},Ke.isLazy=function(S){return w(S)===x},Ke.isMemo=function(S){return w(S)===y},Ke.isPortal=function(S){return w(S)===n},Ke.isProfiler=function(S){return w(S)===s},Ke.isStrictMode=function(S){return w(S)===a},Ke.isSuspense=function(S){return w(S)===p},Ke.isSuspenseList=function(S){return w(S)===g},Ke.isValidElementType=function(S){return typeof S=="string"||typeof S=="function"||S===r||S===s||S===a||S===p||S===g||typeof S=="object"&&S!==null&&(S.$$typeof===x||S.$$typeof===y||S.$$typeof===u||S.$$typeof===c||S.$$typeof===f||S.$$typeof===C||S.getModuleId!==void 0)},Ke.typeOf=w,Ke}var X2;function w9(){return X2||(X2=1,Bm.exports=v9()),Bm.exports}var aT=w9();function Di(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function oT(e){if(j.isValidElement(e)||aT.isValidElementType(e)||!Di(e))return e;const n={};return Object.keys(e).forEach(r=>{n[r]=oT(e[r])}),n}function vn(e,n,r={clone:!0}){const a=r.clone?{...e}:e;return Di(e)&&Di(n)&&Object.keys(n).forEach(s=>{j.isValidElement(n[s])||aT.isValidElementType(n[s])?a[s]=n[s]:Di(n[s])&&Object.prototype.hasOwnProperty.call(e,s)&&Di(e[s])?a[s]=vn(e[s],n[s],r):r.clone?a[s]=Di(n[s])?oT(n[s]):n[s]:a[s]=n[s]}),a}const S9=e=>{const n=Object.keys(e).map(r=>({key:r,val:e[r]}))||[];return n.sort((r,a)=>r.val-a.val),n.reduce((r,a)=>({...r,[a.key]:a.val}),{})};function C9(e){const{values:n={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:a=5,...s}=e,c=S9(n),u=Object.keys(c);function f(v){return`@media (min-width:${typeof n[v]=="number"?n[v]:v}${r})`}function p(v){return`@media (max-width:${(typeof n[v]=="number"?n[v]:v)-a/100}${r})`}function g(v,C){const w=u.indexOf(C);return`@media (min-width:${typeof n[v]=="number"?n[v]:v}${r}) and (max-width:${(w!==-1&&typeof n[u[w]]=="number"?n[u[w]]:C)-a/100}${r})`}function y(v){return u.indexOf(v)+1<u.length?g(v,u[u.indexOf(v)+1]):f(v)}function x(v){const C=u.indexOf(v);return C===0?f(u[1]):C===u.length-1?p(u[C]):g(v,u[u.indexOf(v)+1]).replace("@media","@media not all and")}return{keys:u,values:c,up:f,down:p,between:g,only:y,not:x,unit:r,...s}}function Q2(e,n){if(!e.containerQueries)return n;const r=Object.keys(n).filter(a=>a.startsWith("@container")).sort((a,s)=>{const c=/min-width:\s*([0-9.]+)/;return+(a.match(c)?.[1]||0)-+(s.match(c)?.[1]||0)});return r.length?r.reduce((a,s)=>{const c=n[s];return delete a[s],a[s]=c,a},{...n}):n}function T9(e,n){return n==="@"||n.startsWith("@")&&(e.some(r=>n.startsWith(`@${r}`))||!!n.match(/^@\d/))}function j9(e,n){const r=n.match(/^@([^/]+)?\/?(.+)?$/);if(!r)return null;const[,a,s]=r,c=Number.isNaN(+a)?a||0:+a;return e.containerQueries(s).up(c)}function E9(e){const n=(c,u)=>c.replace("@media",u?`@container ${u}`:"@container");function r(c,u){c.up=(...f)=>n(e.breakpoints.up(...f),u),c.down=(...f)=>n(e.breakpoints.down(...f),u),c.between=(...f)=>n(e.breakpoints.between(...f),u),c.only=(...f)=>n(e.breakpoints.only(...f),u),c.not=(...f)=>{const p=n(e.breakpoints.not(...f),u);return p.includes("not all and")?p.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):p}}const a={},s=c=>(r(a,c),a);return r(s),{...e,containerQueries:s}}const A9={borderRadius:4};function Is(e,n){return n?vn(e,n,{clone:!1}):e}const Rd={xs:0,sm:600,md:900,lg:1200,xl:1536},I2={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Rd[e]}px)`},k9={containerQueries:e=>({up:n=>{let r=typeof n=="number"?n:Rd[n]||n;return typeof r=="number"&&(r=`${r}px`),e?`@container ${e} (min-width:${r})`:`@container (min-width:${r})`}})};function Ui(e,n,r){const a=e.theme||{};if(Array.isArray(n)){const c=a.breakpoints||I2;return n.reduce((u,f,p)=>(u[c.up(c.keys[p])]=r(n[p]),u),{})}if(typeof n=="object"){const c=a.breakpoints||I2;return Object.keys(n).reduce((u,f)=>{if(T9(c.keys,f)){const p=j9(a.containerQueries?a:k9,f);p&&(u[p]=r(n[f],f))}else if(Object.keys(c.values||Rd).includes(f)){const p=c.up(f);u[p]=r(n[f],f)}else{const p=f;u[p]=n[p]}return u},{})}return r(n)}function R9(e={}){return e.keys?.reduce((r,a)=>{const s=e.up(a);return r[s]={},r},{})||{}}function Z2(e,n){return e.reduce((r,a)=>{const s=r[a];return(!s||Object.keys(s).length===0)&&delete r[a],r},n)}function br(e){if(typeof e!="string")throw new Error(ia(7));return e.charAt(0).toUpperCase()+e.slice(1)}function zd(e,n,r=!0){if(!n||typeof n!="string")return null;if(e&&e.vars&&r){const a=`vars.${n}`.split(".").reduce((s,c)=>s&&s[c]?s[c]:null,e);if(a!=null)return a}return n.split(".").reduce((a,s)=>a&&a[s]!=null?a[s]:null,e)}function td(e,n,r,a=r){let s;return typeof e=="function"?s=e(r):Array.isArray(e)?s=e[r]||a:s=zd(e,r)||a,n&&(s=n(s,a,e)),s}function mt(e){const{prop:n,cssProperty:r=e.prop,themeKey:a,transform:s}=e,c=u=>{if(u[n]==null)return null;const f=u[n],p=u.theme,g=zd(p,a)||{};return Ui(u,f,x=>{let v=td(g,s,x);return x===v&&typeof x=="string"&&(v=td(g,s,`${n}${x==="default"?"":br(x)}`,x)),r===!1?v:{[r]:v}})};return c.propTypes={},c.filterProps=[n],c}function z9(e){const n={};return r=>(n[r]===void 0&&(n[r]=e(r)),n[r])}const M9={m:"margin",p:"padding"},$9={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},J2={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},O9=z9(e=>{if(e.length>2)if(J2[e])e=J2[e];else return[e];const[n,r]=e.split(""),a=M9[n],s=$9[r]||"";return Array.isArray(s)?s.map(c=>a+c):[a+s]}),ig=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],rg=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...ig,...rg];function Rl(e,n,r,a){const s=zd(e,n,!0)??r;return typeof s=="number"||typeof s=="string"?c=>typeof c=="string"?c:typeof s=="string"?s.startsWith("var(")&&c===0?0:s.startsWith("var(")&&c===1?s:`calc(${c} * ${s})`:s*c:Array.isArray(s)?c=>{if(typeof c=="string")return c;const u=Math.abs(c),f=s[u];return c>=0?f:typeof f=="number"?-f:typeof f=="string"&&f.startsWith("var(")?`calc(-1 * ${f})`:`-${f}`}:typeof s=="function"?s:()=>{}}function ag(e){return Rl(e,"spacing",8)}function zl(e,n){return typeof n=="string"||n==null?n:e(n)}function D9(e,n){return r=>e.reduce((a,s)=>(a[s]=zl(n,r),a),{})}function _9(e,n,r,a){if(!n.includes(r))return null;const s=O9(r),c=D9(s,a),u=e[r];return Ui(e,u,c)}function sT(e,n){const r=ag(e.theme);return Object.keys(e).map(a=>_9(e,n,a,r)).reduce(Is,{})}function ot(e){return sT(e,ig)}ot.propTypes={};ot.filterProps=ig;function st(e){return sT(e,rg)}st.propTypes={};st.filterProps=rg;function lT(e=8,n=ag({spacing:e})){if(e.mui)return e;const r=(...a)=>(a.length===0?[1]:a).map(c=>{const u=n(c);return typeof u=="number"?`${u}px`:u}).join(" ");return r.mui=!0,r}function Md(...e){const n=e.reduce((a,s)=>(s.filterProps.forEach(c=>{a[c]=s}),a),{}),r=a=>Object.keys(a).reduce((s,c)=>n[c]?Is(s,n[c](a)):s,{});return r.propTypes={},r.filterProps=e.reduce((a,s)=>a.concat(s.filterProps),[]),r}function _n(e){return typeof e!="number"?e:`${e}px solid`}function Hn(e,n){return mt({prop:e,themeKey:"borders",transform:n})}const L9=Hn("border",_n),N9=Hn("borderTop",_n),B9=Hn("borderRight",_n),U9=Hn("borderBottom",_n),V9=Hn("borderLeft",_n),P9=Hn("borderColor"),H9=Hn("borderTopColor"),F9=Hn("borderRightColor"),q9=Hn("borderBottomColor"),G9=Hn("borderLeftColor"),Y9=Hn("outline",_n),K9=Hn("outlineColor"),$d=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const n=Rl(e.theme,"shape.borderRadius",4),r=a=>({borderRadius:zl(n,a)});return Ui(e,e.borderRadius,r)}return null};$d.propTypes={};$d.filterProps=["borderRadius"];Md(L9,N9,B9,U9,V9,P9,H9,F9,q9,G9,$d,Y9,K9);const Od=e=>{if(e.gap!==void 0&&e.gap!==null){const n=Rl(e.theme,"spacing",8),r=a=>({gap:zl(n,a)});return Ui(e,e.gap,r)}return null};Od.propTypes={};Od.filterProps=["gap"];const Dd=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const n=Rl(e.theme,"spacing",8),r=a=>({columnGap:zl(n,a)});return Ui(e,e.columnGap,r)}return null};Dd.propTypes={};Dd.filterProps=["columnGap"];const _d=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const n=Rl(e.theme,"spacing",8),r=a=>({rowGap:zl(n,a)});return Ui(e,e.rowGap,r)}return null};_d.propTypes={};_d.filterProps=["rowGap"];const X9=mt({prop:"gridColumn"}),Q9=mt({prop:"gridRow"}),I9=mt({prop:"gridAutoFlow"}),Z9=mt({prop:"gridAutoColumns"}),J9=mt({prop:"gridAutoRows"}),W9=mt({prop:"gridTemplateColumns"}),e_=mt({prop:"gridTemplateRows"}),t_=mt({prop:"gridTemplateAreas"}),n_=mt({prop:"gridArea"});Md(Od,Dd,_d,X9,Q9,I9,Z9,J9,W9,e_,t_,n_);function ao(e,n){return n==="grey"?n:e}const i_=mt({prop:"color",themeKey:"palette",transform:ao}),r_=mt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ao}),a_=mt({prop:"backgroundColor",themeKey:"palette",transform:ao});Md(i_,r_,a_);function xn(e){return e<=1&&e!==0?`${e*100}%`:e}const o_=mt({prop:"width",transform:xn}),og=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const n=r=>{const a=e.theme?.breakpoints?.values?.[r]||Rd[r];return a?e.theme?.breakpoints?.unit!=="px"?{maxWidth:`${a}${e.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:xn(r)}};return Ui(e,e.maxWidth,n)}return null};og.filterProps=["maxWidth"];const s_=mt({prop:"minWidth",transform:xn}),l_=mt({prop:"height",transform:xn}),c_=mt({prop:"maxHeight",transform:xn}),u_=mt({prop:"minHeight",transform:xn});mt({prop:"size",cssProperty:"width",transform:xn});mt({prop:"size",cssProperty:"height",transform:xn});const d_=mt({prop:"boxSizing"});Md(o_,og,s_,l_,c_,u_,d_);const Ld={border:{themeKey:"borders",transform:_n},borderTop:{themeKey:"borders",transform:_n},borderRight:{themeKey:"borders",transform:_n},borderBottom:{themeKey:"borders",transform:_n},borderLeft:{themeKey:"borders",transform:_n},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:_n},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:$d},color:{themeKey:"palette",transform:ao},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ao},backgroundColor:{themeKey:"palette",transform:ao},p:{style:st},pt:{style:st},pr:{style:st},pb:{style:st},pl:{style:st},px:{style:st},py:{style:st},padding:{style:st},paddingTop:{style:st},paddingRight:{style:st},paddingBottom:{style:st},paddingLeft:{style:st},paddingX:{style:st},paddingY:{style:st},paddingInline:{style:st},paddingInlineStart:{style:st},paddingInlineEnd:{style:st},paddingBlock:{style:st},paddingBlockStart:{style:st},paddingBlockEnd:{style:st},m:{style:ot},mt:{style:ot},mr:{style:ot},mb:{style:ot},ml:{style:ot},mx:{style:ot},my:{style:ot},margin:{style:ot},marginTop:{style:ot},marginRight:{style:ot},marginBottom:{style:ot},marginLeft:{style:ot},marginX:{style:ot},marginY:{style:ot},marginInline:{style:ot},marginInlineStart:{style:ot},marginInlineEnd:{style:ot},marginBlock:{style:ot},marginBlockStart:{style:ot},marginBlockEnd:{style:ot},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Od},rowGap:{style:_d},columnGap:{style:Dd},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:xn},maxWidth:{style:og},minWidth:{transform:xn},height:{transform:xn},maxHeight:{transform:xn},minHeight:{transform:xn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function f_(...e){const n=e.reduce((a,s)=>a.concat(Object.keys(s)),[]),r=new Set(n);return e.every(a=>r.size===Object.keys(a).length)}function h_(e,n){return typeof e=="function"?e(n):e}function m_(){function e(r,a,s,c){const u={[r]:a,theme:s},f=c[r];if(!f)return{[r]:a};const{cssProperty:p=r,themeKey:g,transform:y,style:x}=f;if(a==null)return null;if(g==="typography"&&a==="inherit")return{[r]:a};const v=zd(s,g)||{};return x?x(u):Ui(u,a,w=>{let S=td(v,y,w);return w===S&&typeof w=="string"&&(S=td(v,y,`${r}${w==="default"?"":br(w)}`,w)),p===!1?S:{[p]:S}})}function n(r){const{sx:a,theme:s={},nested:c}=r||{};if(!a)return null;const u=s.unstable_sxConfig??Ld;function f(p){let g=p;if(typeof p=="function")g=p(s);else if(typeof p!="object")return p;if(!g)return null;const y=R9(s.breakpoints),x=Object.keys(y);let v=y;return Object.keys(g).forEach(C=>{const w=h_(g[C],s);if(w!=null)if(typeof w=="object")if(u[C])v=Is(v,e(C,w,s,u));else{const S=Ui({theme:s},w,A=>({[C]:A}));f_(S,w)?v[C]=n({sx:w,theme:s,nested:!0}):v=Is(v,S)}else v=Is(v,e(C,w,s,u))}),!c&&s.modularCssLayers?{"@layer sx":Q2(s,Z2(x,v))}:Q2(s,Z2(x,v))}return Array.isArray(a)?a.map(f):f(a)}return n}const bo=m_();bo.filterProps=["sx"];function p_(e,n){const r=this;if(r.vars){if(!r.colorSchemes?.[e]||typeof r.getColorSchemeSelector!="function")return{};let a=r.getColorSchemeSelector(e);return a==="&"?n:((a.includes("data-")||a.includes("."))&&(a=`*:where(${a.replace(/\s*&$/,"")}) &`),{[a]:n})}return r.palette.mode===e?n:{}}function cT(e={},...n){const{breakpoints:r={},palette:a={},spacing:s,shape:c={},...u}=e,f=C9(r),p=lT(s);let g=vn({breakpoints:f,direction:"ltr",components:{},palette:{mode:"light",...a},spacing:p,shape:{...A9,...c}},u);return g=E9(g),g.applyStyles=p_,g=n.reduce((y,x)=>vn(y,x),g),g.unstable_sxConfig={...Ld,...u?.unstable_sxConfig},g.unstable_sx=function(x){return bo({sx:x,theme:this})},g}const W2=e=>e,g_=()=>{let e=W2;return{configure(n){e=n},generate(n){return e(n)},reset(){e=W2}}},y_=g_();function uT(e){var n,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(r=uT(e[n]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function gr(){for(var e,n,r=0,a="",s=arguments.length;r<s;r++)(e=arguments[r])&&(n=uT(e))&&(a&&(a+=" "),a+=n);return a}const x_={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function sg(e,n,r="Mui"){const a=x_[n];return a?`${r}-${a}`:`${y_.generate(e)}-${n}`}function dT(e,n,r="Mui"){const a={};return n.forEach(s=>{a[s]=sg(e,s,r)}),a}function fT(e){const{variants:n,...r}=e,a={variants:n,style:Wr(r),isProcessed:!0};return a.style===r||n&&n.forEach(s=>{typeof s.style!="function"&&(s.style=Wr(s.style))}),a}const b_=cT();function Um(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function Xr(e,n){return n&&e&&typeof e=="object"&&e.styles&&!e.styles.startsWith("@layer")&&(e.styles=`@layer ${n}{${String(e.styles)}}`),e}function v_(e){return e?(n,r)=>r[e]:null}function w_(e,n,r){e.theme=T_(e.theme)?r:e.theme[n]||e.theme}function Uu(e,n,r){const a=typeof n=="function"?n(e):n;if(Array.isArray(a))return a.flatMap(s=>Uu(e,s,r));if(Array.isArray(a?.variants)){let s;if(a.isProcessed)s=r?Xr(a.style,r):a.style;else{const{variants:c,...u}=a;s=r?Xr(Wr(u),r):u}return hT(e,a.variants,[s],r)}return a?.isProcessed?r?Xr(Wr(a.style),r):a.style:r?Xr(Wr(a),r):a}function hT(e,n,r=[],a=void 0){let s;e:for(let c=0;c<n.length;c+=1){const u=n[c];if(typeof u.props=="function"){if(s??={...e,...e.ownerState,ownerState:e.ownerState},!u.props(s))continue}else for(const f in u.props)if(e[f]!==u.props[f]&&e.ownerState?.[f]!==u.props[f])continue e;typeof u.style=="function"?(s??={...e,...e.ownerState,ownerState:e.ownerState},r.push(a?Xr(Wr(u.style(s)),a):u.style(s))):r.push(a?Xr(Wr(u.style),a):u.style)}return r}function S_(e={}){const{themeId:n,defaultTheme:r=b_,rootShouldForwardProp:a=Um,slotShouldForwardProp:s=Um}=e;function c(f){w_(f,n,r)}return(f,p={})=>{b9(f,_=>_.filter(L=>L!==bo));const{name:g,slot:y,skipVariantsResolver:x,skipSx:v,overridesResolver:C=v_(E_(y)),...w}=p,S=g&&g.startsWith("Mui")||y?"components":"custom",A=x!==void 0?x:y&&y!=="Root"&&y!=="root"||!1,R=v||!1;let O=Um;y==="Root"||y==="root"?O=a:y?O=s:j_(f)&&(O=void 0);const $=x9(f,{shouldForwardProp:O,label:C_(),...w}),N=_=>{if(_.__emotion_real===_)return _;if(typeof _=="function")return function(ee){return Uu(ee,_,ee.theme.modularCssLayers?S:void 0)};if(Di(_)){const L=fT(_);return function(ie){return L.variants?Uu(ie,L,ie.theme.modularCssLayers?S:void 0):ie.theme.modularCssLayers?Xr(L.style,S):L.style}}return _},P=(..._)=>{const L=[],ee=_.map(N),ie=[];if(L.push(c),g&&C&&ie.push(function(ae){const ce=ae.theme.components?.[g]?.styleOverrides;if(!ce)return null;const B={};for(const Z in ce)B[Z]=Uu(ae,ce[Z],ae.theme.modularCssLayers?"theme":void 0);return C(ae,B)}),g&&!A&&ie.push(function(ae){const ce=ae.theme?.components?.[g]?.variants;return ce?hT(ae,ce,[],ae.theme.modularCssLayers?"theme":void 0):null}),R||ie.push(bo),Array.isArray(ee[0])){const k=ee.shift(),ae=new Array(L.length).fill(""),ne=new Array(ie.length).fill("");let ce;ce=[...ae,...k,...ne],ce.raw=[...ae,...k.raw,...ne],L.unshift(ce)}const se=[...L,...ee,...ie],le=$(...se);return f.muiName&&(le.muiName=f.muiName),le};return $.withConfig&&(P.withConfig=$.withConfig),P}}function C_(e,n){return void 0}function T_(e){for(const n in e)return!1;return!0}function j_(e){return typeof e=="string"&&e.charCodeAt(0)>96}function E_(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}function Gp(e,n,r=!1){const a={...n};for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)){const c=s;if(c==="components"||c==="slots")a[c]={...e[c],...a[c]};else if(c==="componentsProps"||c==="slotProps"){const u=e[c],f=n[c];if(!f)a[c]=u||{};else if(!u)a[c]=f;else{a[c]={...f};for(const p in u)if(Object.prototype.hasOwnProperty.call(u,p)){const g=p;a[c][g]=Gp(u[g],f[g],r)}}}else c==="className"&&r&&n.className?a.className=gr(e?.className,n?.className):c==="style"&&r&&n.style?a.style={...e?.style,...n?.style}:a[c]===void 0&&(a[c]=e[c])}return a}function mT(e,n=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(n,Math.min(e,r))}function lg(e,n=0,r=1){return mT(e,n,r)}function A_(e){e=e.slice(1);const n=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(n);return r&&r[0].length===1&&(r=r.map(a=>a+a)),r?`rgb${r.length===4?"a":""}(${r.map((a,s)=>s<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function vr(e){if(e.type)return e;if(e.charAt(0)==="#")return vr(A_(e));const n=e.indexOf("("),r=e.substring(0,n);if(!["rgb","rgba","hsl","hsla","color"].includes(r))throw new Error(ia(9,e));let a=e.substring(n+1,e.length-1),s;if(r==="color"){if(a=a.split(" "),s=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(s))throw new Error(ia(10,s))}else a=a.split(",");return a=a.map(c=>parseFloat(c)),{type:r,values:a,colorSpace:s}}const k_=e=>{const n=vr(e);return n.values.slice(0,3).map((r,a)=>n.type.includes("hsl")&&a!==0?`${r}%`:r).join(" ")},Hs=(e,n)=>{try{return k_(e)}catch{return e}};function Nd(e){const{type:n,colorSpace:r}=e;let{values:a}=e;return n.includes("rgb")?a=a.map((s,c)=>c<3?parseInt(s,10):s):n.includes("hsl")&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),n.includes("color")?a=`${r} ${a.join(" ")}`:a=`${a.join(", ")}`,`${n}(${a})`}function pT(e){e=vr(e);const{values:n}=e,r=n[0],a=n[1]/100,s=n[2]/100,c=a*Math.min(s,1-s),u=(g,y=(g+r/30)%12)=>s-c*Math.max(Math.min(y-3,9-y,1),-1);let f="rgb";const p=[Math.round(u(0)*255),Math.round(u(8)*255),Math.round(u(4)*255)];return e.type==="hsla"&&(f+="a",p.push(n[3])),Nd({type:f,values:p})}function Yp(e){e=vr(e);let n=e.type==="hsl"||e.type==="hsla"?vr(pT(e)).values:e.values;return n=n.map(r=>(e.type!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*n[0]+.7152*n[1]+.0722*n[2]).toFixed(3))}function R_(e,n){const r=Yp(e),a=Yp(n);return(Math.max(r,a)+.05)/(Math.min(r,a)+.05)}function gT(e,n){return e=vr(e),n=lg(n),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${n}`:e.values[3]=n,Nd(e)}function Pr(e,n,r){try{return gT(e,n)}catch{return e}}function Bd(e,n){if(e=vr(e),n=lg(n),e.type.includes("hsl"))e.values[2]*=1-n;else if(e.type.includes("rgb")||e.type.includes("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-n;return Nd(e)}function He(e,n,r){try{return Bd(e,n)}catch{return e}}function Ud(e,n){if(e=vr(e),n=lg(n),e.type.includes("hsl"))e.values[2]+=(100-e.values[2])*n;else if(e.type.includes("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*n;else if(e.type.includes("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*n;return Nd(e)}function Fe(e,n,r){try{return Ud(e,n)}catch{return e}}function z_(e,n=.15){return Yp(e)>.5?Bd(e,n):Ud(e,n)}function fu(e,n,r){try{return z_(e,n)}catch{return e}}const M_=j.createContext(),$_=()=>j.useContext(M_)??!1,O_=j.createContext(void 0);function D_(e){const{theme:n,name:r,props:a}=e;if(!n||!n.components||!n.components[r])return a;const s=n.components[r];return s.defaultProps?Gp(s.defaultProps,a,n.components.mergeClassNameAndStyle):!s.styleOverrides&&!s.variants?Gp(s,a,n.components.mergeClassNameAndStyle):a}function __({props:e,name:n}){const r=j.useContext(O_);return D_({props:e,name:n,theme:{components:r}})}let ew=0;function L_(e){const[n,r]=j.useState(e),a=e||n;return j.useEffect(()=>{n==null&&(ew+=1,r(`mui-${ew}`))},[n]),a}const N_={...tp},tw=N_.useId;function yT(e){if(tw!==void 0){const n=tw();return e??n}return L_(e)}const nw={theme:void 0};function B_(e){let n,r;return function(s){let c=n;return(c===void 0||s.theme!==r)&&(nw.theme=s.theme,c=fT(e(nw)),n=c,r=s.theme),c}}function U_(e=""){function n(...a){if(!a.length)return"";const s=a[0];return typeof s=="string"&&!s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${e?`${e}-`:""}${s}${n(...a.slice(1))})`:`, ${s}`}return(a,...s)=>`var(--${e?`${e}-`:""}${a}${n(...s)})`}const iw=(e,n,r,a=[])=>{let s=e;n.forEach((c,u)=>{u===n.length-1?Array.isArray(s)?s[Number(c)]=r:s&&typeof s=="object"&&(s[c]=r):s&&typeof s=="object"&&(s[c]||(s[c]=a.includes(c)?[]:{}),s=s[c])})},V_=(e,n,r)=>{function a(s,c=[],u=[]){Object.entries(s).forEach(([f,p])=>{(!r||r&&!r([...c,f]))&&p!=null&&(typeof p=="object"&&Object.keys(p).length>0?a(p,[...c,f],Array.isArray(p)?[...u,f]:u):n([...c,f],p,u))})}a(e)},P_=(e,n)=>typeof n=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(a=>e.includes(a))||e[e.length-1].toLowerCase().includes("opacity")?n:`${n}px`:n;function Vm(e,n){const{prefix:r,shouldSkipGeneratingVar:a}=n||{},s={},c={},u={};return V_(e,(f,p,g)=>{if((typeof p=="string"||typeof p=="number")&&(!a||!a(f,p))){const y=`--${r?`${r}-`:""}${f.join("-")}`,x=P_(f,p);Object.assign(s,{[y]:x}),iw(c,f,`var(${y})`,g),iw(u,f,`var(${y}, ${x})`,g)}},f=>f[0]==="vars"),{css:s,vars:c,varsWithDefaults:u}}function H_(e,n={}){const{getSelector:r=R,disableCssColorScheme:a,colorSchemeSelector:s,enableContrastVars:c}=n,{colorSchemes:u={},components:f,defaultColorScheme:p="light",...g}=e,{vars:y,css:x,varsWithDefaults:v}=Vm(g,n);let C=v;const w={},{[p]:S,...A}=u;if(Object.entries(A||{}).forEach(([N,P])=>{const{vars:_,css:L,varsWithDefaults:ee}=Vm(P,n);C=vn(C,ee),w[N]={css:L,vars:_}}),S){const{css:N,vars:P,varsWithDefaults:_}=Vm(S,n);C=vn(C,_),w[p]={css:N,vars:P}}function R(N,P){let _=s;if(s==="class"&&(_=".%s"),s==="data"&&(_="[data-%s]"),s?.startsWith("data-")&&!s.includes("%s")&&(_=`[${s}="%s"]`),N){if(_==="media")return e.defaultColorScheme===N?":root":{[`@media (prefers-color-scheme: ${u[N]?.palette?.mode||N})`]:{":root":P}};if(_)return e.defaultColorScheme===N?`:root, ${_.replace("%s",String(N))}`:_.replace("%s",String(N))}return":root"}return{vars:C,generateThemeVars:()=>{let N={...y};return Object.entries(w).forEach(([,{vars:P}])=>{N=vn(N,P)}),N},generateStyleSheets:()=>{const N=[],P=e.defaultColorScheme||"light";function _(ie,se){Object.keys(se).length&&N.push(typeof ie=="string"?{[ie]:{...se}}:ie)}_(r(void 0,{...x}),x);const{[P]:L,...ee}=w;if(L){const{css:ie}=L,se=u[P]?.palette?.mode,le=!a&&se?{colorScheme:se,...ie}:{...ie};_(r(P,{...le}),le)}return Object.entries(ee).forEach(([ie,{css:se}])=>{const le=u[ie]?.palette?.mode,k=!a&&le?{colorScheme:le,...se}:{...se};_(r(ie,{...k}),k)}),c&&N.push({":root":{"--__l-threshold":"0.7","--__l":"clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)","--__a":"clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"}}),N}}}function F_(e){return function(r){return e==="media"?`@media (prefers-color-scheme: ${r})`:e?e.startsWith("data-")&&!e.includes("%s")?`[${e}="${r}"] &`:e==="class"?`.${r} &`:e==="data"?`[data-${r}] &`:`${e.replace("%s",r)} &`:"&"}}function xT(e,n,r=void 0){const a={};for(const s in e){const c=e[s];let u="",f=!0;for(let p=0;p<c.length;p+=1){const g=c[p];g&&(u+=(f===!0?"":" ")+n(g),f=!1,r&&r[g]&&(u+=" "+r[g]))}a[s]=u}return a}function bT(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:fl.white,default:fl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const vT=bT();function wT(){return{text:{primary:fl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:fl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Kp=wT();function rw(e,n,r,a){const s=a.light||a,c=a.dark||a*1.5;e[n]||(e.hasOwnProperty(r)?e[n]=e[r]:n==="light"?e.light=Ud(e.main,s):n==="dark"&&(e.dark=Bd(e.main,c)))}function aw(e,n,r,a,s){const c=s.light||s,u=s.dark||s*1.5;n[r]||(n.hasOwnProperty(a)?n[r]=n[a]:r==="light"?n.light=`color-mix(in ${e}, ${n.main}, #fff ${(c*100).toFixed(0)}%)`:r==="dark"&&(n.dark=`color-mix(in ${e}, ${n.main}, #000 ${(u*100).toFixed(0)}%)`))}function q_(e="light"){return e==="dark"?{main:Xa[200],light:Xa[50],dark:Xa[400]}:{main:Xa[700],light:Xa[400],dark:Xa[800]}}function G_(e="light"){return e==="dark"?{main:Ka[200],light:Ka[50],dark:Ka[400]}:{main:Ka[500],light:Ka[300],dark:Ka[700]}}function Y_(e="light"){return e==="dark"?{main:Ya[500],light:Ya[300],dark:Ya[700]}:{main:Ya[700],light:Ya[400],dark:Ya[800]}}function K_(e="light"){return e==="dark"?{main:Qa[400],light:Qa[300],dark:Qa[700]}:{main:Qa[700],light:Qa[500],dark:Qa[900]}}function X_(e="light"){return e==="dark"?{main:Ia[400],light:Ia[300],dark:Ia[700]}:{main:Ia[800],light:Ia[500],dark:Ia[900]}}function Q_(e="light"){return e==="dark"?{main:Ds[400],light:Ds[300],dark:Ds[700]}:{main:"#ed6c02",light:Ds[500],dark:Ds[900]}}function I_(e){return`oklch(from ${e} var(--__l) 0 h / var(--__a))`}function cg(e){const{mode:n="light",contrastThreshold:r=3,tonalOffset:a=.2,colorSpace:s,...c}=e,u=e.primary||q_(n),f=e.secondary||G_(n),p=e.error||Y_(n),g=e.info||K_(n),y=e.success||X_(n),x=e.warning||Q_(n);function v(A){return s?I_(A):R_(A,Kp.text.primary)>=r?Kp.text.primary:vT.text.primary}const C=({color:A,name:R,mainShade:O=500,lightShade:$=300,darkShade:N=700})=>{if(A={...A},!A.main&&A[O]&&(A.main=A[O]),!A.hasOwnProperty("main"))throw new Error(ia(11,R?` (${R})`:"",O));if(typeof A.main!="string")throw new Error(ia(12,R?` (${R})`:"",JSON.stringify(A.main)));return s?(aw(s,A,"light",$,a),aw(s,A,"dark",N,a)):(rw(A,"light",$,a),rw(A,"dark",N,a)),A.contrastText||(A.contrastText=v(A.main)),A};let w;return n==="light"?w=bT():n==="dark"&&(w=wT()),vn({common:{...fl},mode:n,primary:C({color:u,name:"primary"}),secondary:C({color:f,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:C({color:p,name:"error"}),warning:C({color:x,name:"warning"}),info:C({color:g,name:"info"}),success:C({color:y,name:"success"}),grey:w7,contrastThreshold:r,getContrastText:v,augmentColor:C,tonalOffset:a,...w},c)}function Z_(e){const n={};return Object.entries(e).forEach(a=>{const[s,c]=a;typeof c=="object"&&(n[s]=`${c.fontStyle?`${c.fontStyle} `:""}${c.fontVariant?`${c.fontVariant} `:""}${c.fontWeight?`${c.fontWeight} `:""}${c.fontStretch?`${c.fontStretch} `:""}${c.fontSize||""}${c.lineHeight?`/${c.lineHeight} `:""}${c.fontFamily||""}`)}),n}function J_(e,n){return{toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}},...n}}function W_(e){return Math.round(e*1e5)/1e5}const ow={textTransform:"uppercase"},sw='"Roboto", "Helvetica", "Arial", sans-serif';function eL(e,n){const{fontFamily:r=sw,fontSize:a=14,fontWeightLight:s=300,fontWeightRegular:c=400,fontWeightMedium:u=500,fontWeightBold:f=700,htmlFontSize:p=16,allVariants:g,pxToRem:y,...x}=typeof n=="function"?n(e):n,v=a/14,C=y||(A=>`${A/p*v}rem`),w=(A,R,O,$,N)=>({fontFamily:r,fontWeight:A,fontSize:C(R),lineHeight:O,...r===sw?{letterSpacing:`${W_($/R)}em`}:{},...N,...g}),S={h1:w(s,96,1.167,-1.5),h2:w(s,60,1.2,-.5),h3:w(c,48,1.167,0),h4:w(c,34,1.235,.25),h5:w(c,24,1.334,0),h6:w(u,20,1.6,.15),subtitle1:w(c,16,1.75,.15),subtitle2:w(u,14,1.57,.1),body1:w(c,16,1.5,.15),body2:w(c,14,1.43,.15),button:w(u,14,1.75,.4,ow),caption:w(c,12,1.66,.4),overline:w(c,12,2.66,1,ow),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return vn({htmlFontSize:p,pxToRem:C,fontFamily:r,fontSize:a,fontWeightLight:s,fontWeightRegular:c,fontWeightMedium:u,fontWeightBold:f,...S},x,{clone:!1})}const tL=.2,nL=.14,iL=.12;function et(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${tL})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${nL})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${iL})`].join(",")}const rL=["none",et(0,2,1,-1,0,1,1,0,0,1,3,0),et(0,3,1,-2,0,2,2,0,0,1,5,0),et(0,3,3,-2,0,3,4,0,0,1,8,0),et(0,2,4,-1,0,4,5,0,0,1,10,0),et(0,3,5,-1,0,5,8,0,0,1,14,0),et(0,3,5,-1,0,6,10,0,0,1,18,0),et(0,4,5,-2,0,7,10,1,0,2,16,1),et(0,5,5,-3,0,8,10,1,0,3,14,2),et(0,5,6,-3,0,9,12,1,0,3,16,2),et(0,6,6,-3,0,10,14,1,0,4,18,3),et(0,6,7,-4,0,11,15,1,0,4,20,3),et(0,7,8,-4,0,12,17,2,0,5,22,4),et(0,7,8,-4,0,13,19,2,0,5,24,4),et(0,7,9,-4,0,14,21,2,0,5,26,4),et(0,8,9,-5,0,15,22,2,0,6,28,5),et(0,8,10,-5,0,16,24,2,0,6,30,5),et(0,8,11,-5,0,17,26,2,0,6,32,5),et(0,9,11,-5,0,18,28,2,0,7,34,6),et(0,9,12,-6,0,19,29,2,0,7,36,6),et(0,10,13,-6,0,20,31,3,0,8,38,7),et(0,10,13,-6,0,21,33,3,0,8,40,7),et(0,10,14,-6,0,22,35,3,0,8,42,7),et(0,11,14,-7,0,23,36,3,0,9,44,8),et(0,11,15,-7,0,24,38,3,0,9,46,8)],aL={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},oL={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function lw(e){return`${Math.round(e)}ms`}function sL(e){if(!e)return 0;const n=e/36;return Math.min(Math.round((4+15*n**.25+n/5)*10),3e3)}function lL(e){const n={...aL,...e.easing},r={...oL,...e.duration};return{getAutoHeightDuration:sL,create:(s=["all"],c={})=>{const{duration:u=r.standard,easing:f=n.easeInOut,delay:p=0,...g}=c;return(Array.isArray(s)?s:[s]).map(y=>`${y} ${typeof u=="string"?u:lw(u)} ${f} ${typeof p=="string"?p:lw(p)}`).join(",")},...e,easing:n,duration:r}}const cL={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function uL(e){return Di(e)||typeof e>"u"||typeof e=="string"||typeof e=="boolean"||typeof e=="number"||Array.isArray(e)}function ST(e={}){const n={...e};function r(a){const s=Object.entries(a);for(let c=0;c<s.length;c++){const[u,f]=s[c];!uL(f)||u.startsWith("unstable_")?delete a[u]:Di(f)&&(a[u]={...f},r(a[u]))}}return r(n),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function cw(e){return typeof e=="number"?`${(e*100).toFixed(0)}%`:`calc((${e}) * 100%)`}const dL=e=>{if(!Number.isNaN(+e))return+e;const n=e.match(/\d*\.?\d+/g);if(!n)return 0;let r=0;for(let a=0;a<n.length;a+=1)r+=+n[a];return r};function fL(e){Object.assign(e,{alpha(n,r){const a=this||e;return a.colorSpace?`oklch(from ${n} l c h / ${typeof r=="string"?`calc(${r})`:r})`:a.vars?`rgba(${n.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof r=="string"?`calc(${r})`:r})`:gT(n,dL(r))},lighten(n,r){const a=this||e;return a.colorSpace?`color-mix(in ${a.colorSpace}, ${n}, #fff ${cw(r)})`:Ud(n,r)},darken(n,r){const a=this||e;return a.colorSpace?`color-mix(in ${a.colorSpace}, ${n}, #000 ${cw(r)})`:Bd(n,r)}})}function Xp(e={},...n){const{breakpoints:r,mixins:a={},spacing:s,palette:c={},transitions:u={},typography:f={},shape:p,colorSpace:g,...y}=e;if(e.vars&&e.generateThemeVars===void 0)throw new Error(ia(20));const x=cg({...c,colorSpace:g}),v=cT(e);let C=vn(v,{mixins:J_(v.breakpoints,a),palette:x,shadows:rL.slice(),typography:eL(x,f),transitions:lL(u),zIndex:{...cL}});return C=vn(C,y),C=n.reduce((w,S)=>vn(w,S),C),C.unstable_sxConfig={...Ld,...y?.unstable_sxConfig},C.unstable_sx=function(S){return bo({sx:S,theme:this})},C.toRuntimeSource=ST,fL(C),C}function hL(e){let n;return e<1?n=5.11916*e**2:n=4.5*Math.log(e+1)+2,Math.round(n*10)/1e3}const mL=[...Array(25)].map((e,n)=>{if(n===0)return"none";const r=hL(n);return`linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`});function CT(e){return{inputPlaceholder:e==="dark"?.5:.42,inputUnderline:e==="dark"?.7:.42,switchTrackDisabled:e==="dark"?.2:.12,switchTrack:e==="dark"?.3:.38}}function TT(e){return e==="dark"?mL:[]}function pL(e){const{palette:n={mode:"light"},opacity:r,overlays:a,colorSpace:s,...c}=e,u=cg({...n,colorSpace:s});return{palette:u,opacity:{...CT(u.mode),...r},overlays:a||TT(u.mode),...c}}function gL(e){return!!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||e[0]==="palette"&&!!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const yL=e=>[...[...Array(25)].map((n,r)=>`--${e?`${e}-`:""}overlays-${r}`),`--${e?`${e}-`:""}palette-AppBar-darkBg`,`--${e?`${e}-`:""}palette-AppBar-darkColor`],xL=e=>(n,r)=>{const a=e.rootSelector||":root",s=e.colorSchemeSelector;let c=s;if(s==="class"&&(c=".%s"),s==="data"&&(c="[data-%s]"),s?.startsWith("data-")&&!s.includes("%s")&&(c=`[${s}="%s"]`),e.defaultColorScheme===n){if(n==="dark"){const u={};return yL(e.cssVarPrefix).forEach(f=>{u[f]=r[f],delete r[f]}),c==="media"?{[a]:r,"@media (prefers-color-scheme: dark)":{[a]:u}}:c?{[c.replace("%s",n)]:u,[`${a}, ${c.replace("%s",n)}`]:r}:{[a]:{...r,...u}}}if(c&&c!=="media")return`${a}, ${c.replace("%s",String(n))}`}else if(n){if(c==="media")return{[`@media (prefers-color-scheme: ${String(n)})`]:{[a]:r}};if(c)return c.replace("%s",String(n))}return a};function bL(e,n){n.forEach(r=>{e[r]||(e[r]={})})}function Q(e,n,r){!e[n]&&r&&(e[n]=r)}function Fs(e){return typeof e!="string"||!e.startsWith("hsl")?e:pT(e)}function Mi(e,n){`${n}Channel`in e||(e[`${n}Channel`]=Hs(Fs(e[n])))}function vL(e){return typeof e=="number"?`${e}px`:typeof e=="string"||typeof e=="function"||Array.isArray(e)?e:"8px"}const ai=e=>{try{return e()}catch{}},wL=(e="mui")=>U_(e);function Pm(e,n,r,a,s){if(!r)return;r=r===!0?{}:r;const c=s==="dark"?"dark":"light";if(!a){n[s]=pL({...r,palette:{mode:c,...r?.palette},colorSpace:e});return}const{palette:u,...f}=Xp({...a,palette:{mode:c,...r?.palette},colorSpace:e});return n[s]={...r,palette:u,opacity:{...CT(c),...r?.opacity},overlays:r?.overlays||TT(c)},f}function SL(e={},...n){const{colorSchemes:r={light:!0},defaultColorScheme:a,disableCssColorScheme:s=!1,cssVarPrefix:c="mui",nativeColor:u=!1,shouldSkipGeneratingVar:f=gL,colorSchemeSelector:p=r.light&&r.dark?"media":void 0,rootSelector:g=":root",...y}=e,x=Object.keys(r)[0],v=a||(r.light&&x!=="light"?"light":x),C=wL(c),{[v]:w,light:S,dark:A,...R}=r,O={...R};let $=w;if((v==="dark"&&!("dark"in r)||v==="light"&&!("light"in r))&&($=!0),!$)throw new Error(ia(21,v));let N;u&&(N="oklch");const P=Pm(N,O,$,y,v);S&&!O.light&&Pm(N,O,S,void 0,"light"),A&&!O.dark&&Pm(N,O,A,void 0,"dark");let _={defaultColorScheme:v,...P,cssVarPrefix:c,colorSchemeSelector:p,rootSelector:g,getCssVar:C,colorSchemes:O,font:{...Z_(P.typography),...P.font},spacing:vL(y.spacing)};Object.keys(_.colorSchemes).forEach(le=>{const k=_.colorSchemes[le].palette,ae=ce=>{const B=ce.split("-"),Z=B[1],K=B[2];return C(ce,k[Z][K])};k.mode==="light"&&(Q(k.common,"background","#fff"),Q(k.common,"onBackground","#000")),k.mode==="dark"&&(Q(k.common,"background","#000"),Q(k.common,"onBackground","#fff"));function ne(ce,B,Z){if(N){let K;return ce===Pr&&(K=`transparent ${((1-Z)*100).toFixed(0)}%`),ce===He&&(K=`#000 ${(Z*100).toFixed(0)}%`),ce===Fe&&(K=`#fff ${(Z*100).toFixed(0)}%`),`color-mix(in ${N}, ${B}, ${K})`}return ce(B,Z)}if(bL(k,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),k.mode==="light"){Q(k.Alert,"errorColor",ne(He,k.error.light,.6)),Q(k.Alert,"infoColor",ne(He,k.info.light,.6)),Q(k.Alert,"successColor",ne(He,k.success.light,.6)),Q(k.Alert,"warningColor",ne(He,k.warning.light,.6)),Q(k.Alert,"errorFilledBg",ae("palette-error-main")),Q(k.Alert,"infoFilledBg",ae("palette-info-main")),Q(k.Alert,"successFilledBg",ae("palette-success-main")),Q(k.Alert,"warningFilledBg",ae("palette-warning-main")),Q(k.Alert,"errorFilledColor",ai(()=>k.getContrastText(k.error.main))),Q(k.Alert,"infoFilledColor",ai(()=>k.getContrastText(k.info.main))),Q(k.Alert,"successFilledColor",ai(()=>k.getContrastText(k.success.main))),Q(k.Alert,"warningFilledColor",ai(()=>k.getContrastText(k.warning.main))),Q(k.Alert,"errorStandardBg",ne(Fe,k.error.light,.9)),Q(k.Alert,"infoStandardBg",ne(Fe,k.info.light,.9)),Q(k.Alert,"successStandardBg",ne(Fe,k.success.light,.9)),Q(k.Alert,"warningStandardBg",ne(Fe,k.warning.light,.9)),Q(k.Alert,"errorIconColor",ae("palette-error-main")),Q(k.Alert,"infoIconColor",ae("palette-info-main")),Q(k.Alert,"successIconColor",ae("palette-success-main")),Q(k.Alert,"warningIconColor",ae("palette-warning-main")),Q(k.AppBar,"defaultBg",ae("palette-grey-100")),Q(k.Avatar,"defaultBg",ae("palette-grey-400")),Q(k.Button,"inheritContainedBg",ae("palette-grey-300")),Q(k.Button,"inheritContainedHoverBg",ae("palette-grey-A100")),Q(k.Chip,"defaultBorder",ae("palette-grey-400")),Q(k.Chip,"defaultAvatarColor",ae("palette-grey-700")),Q(k.Chip,"defaultIconColor",ae("palette-grey-700")),Q(k.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),Q(k.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),Q(k.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),Q(k.LinearProgress,"primaryBg",ne(Fe,k.primary.main,.62)),Q(k.LinearProgress,"secondaryBg",ne(Fe,k.secondary.main,.62)),Q(k.LinearProgress,"errorBg",ne(Fe,k.error.main,.62)),Q(k.LinearProgress,"infoBg",ne(Fe,k.info.main,.62)),Q(k.LinearProgress,"successBg",ne(Fe,k.success.main,.62)),Q(k.LinearProgress,"warningBg",ne(Fe,k.warning.main,.62)),Q(k.Skeleton,"bg",N?ne(Pr,k.text.primary,.11):`rgba(${ae("palette-text-primaryChannel")} / 0.11)`),Q(k.Slider,"primaryTrack",ne(Fe,k.primary.main,.62)),Q(k.Slider,"secondaryTrack",ne(Fe,k.secondary.main,.62)),Q(k.Slider,"errorTrack",ne(Fe,k.error.main,.62)),Q(k.Slider,"infoTrack",ne(Fe,k.info.main,.62)),Q(k.Slider,"successTrack",ne(Fe,k.success.main,.62)),Q(k.Slider,"warningTrack",ne(Fe,k.warning.main,.62));const ce=N?ne(He,k.background.default,.6825):fu(k.background.default,.8);Q(k.SnackbarContent,"bg",ce),Q(k.SnackbarContent,"color",ai(()=>N?Kp.text.primary:k.getContrastText(ce))),Q(k.SpeedDialAction,"fabHoverBg",fu(k.background.paper,.15)),Q(k.StepConnector,"border",ae("palette-grey-400")),Q(k.StepContent,"border",ae("palette-grey-400")),Q(k.Switch,"defaultColor",ae("palette-common-white")),Q(k.Switch,"defaultDisabledColor",ae("palette-grey-100")),Q(k.Switch,"primaryDisabledColor",ne(Fe,k.primary.main,.62)),Q(k.Switch,"secondaryDisabledColor",ne(Fe,k.secondary.main,.62)),Q(k.Switch,"errorDisabledColor",ne(Fe,k.error.main,.62)),Q(k.Switch,"infoDisabledColor",ne(Fe,k.info.main,.62)),Q(k.Switch,"successDisabledColor",ne(Fe,k.success.main,.62)),Q(k.Switch,"warningDisabledColor",ne(Fe,k.warning.main,.62)),Q(k.TableCell,"border",ne(Fe,ne(Pr,k.divider,1),.88)),Q(k.Tooltip,"bg",ne(Pr,k.grey[700],.92))}if(k.mode==="dark"){Q(k.Alert,"errorColor",ne(Fe,k.error.light,.6)),Q(k.Alert,"infoColor",ne(Fe,k.info.light,.6)),Q(k.Alert,"successColor",ne(Fe,k.success.light,.6)),Q(k.Alert,"warningColor",ne(Fe,k.warning.light,.6)),Q(k.Alert,"errorFilledBg",ae("palette-error-dark")),Q(k.Alert,"infoFilledBg",ae("palette-info-dark")),Q(k.Alert,"successFilledBg",ae("palette-success-dark")),Q(k.Alert,"warningFilledBg",ae("palette-warning-dark")),Q(k.Alert,"errorFilledColor",ai(()=>k.getContrastText(k.error.dark))),Q(k.Alert,"infoFilledColor",ai(()=>k.getContrastText(k.info.dark))),Q(k.Alert,"successFilledColor",ai(()=>k.getContrastText(k.success.dark))),Q(k.Alert,"warningFilledColor",ai(()=>k.getContrastText(k.warning.dark))),Q(k.Alert,"errorStandardBg",ne(He,k.error.light,.9)),Q(k.Alert,"infoStandardBg",ne(He,k.info.light,.9)),Q(k.Alert,"successStandardBg",ne(He,k.success.light,.9)),Q(k.Alert,"warningStandardBg",ne(He,k.warning.light,.9)),Q(k.Alert,"errorIconColor",ae("palette-error-main")),Q(k.Alert,"infoIconColor",ae("palette-info-main")),Q(k.Alert,"successIconColor",ae("palette-success-main")),Q(k.Alert,"warningIconColor",ae("palette-warning-main")),Q(k.AppBar,"defaultBg",ae("palette-grey-900")),Q(k.AppBar,"darkBg",ae("palette-background-paper")),Q(k.AppBar,"darkColor",ae("palette-text-primary")),Q(k.Avatar,"defaultBg",ae("palette-grey-600")),Q(k.Button,"inheritContainedBg",ae("palette-grey-800")),Q(k.Button,"inheritContainedHoverBg",ae("palette-grey-700")),Q(k.Chip,"defaultBorder",ae("palette-grey-700")),Q(k.Chip,"defaultAvatarColor",ae("palette-grey-300")),Q(k.Chip,"defaultIconColor",ae("palette-grey-300")),Q(k.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),Q(k.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),Q(k.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),Q(k.LinearProgress,"primaryBg",ne(He,k.primary.main,.5)),Q(k.LinearProgress,"secondaryBg",ne(He,k.secondary.main,.5)),Q(k.LinearProgress,"errorBg",ne(He,k.error.main,.5)),Q(k.LinearProgress,"infoBg",ne(He,k.info.main,.5)),Q(k.LinearProgress,"successBg",ne(He,k.success.main,.5)),Q(k.LinearProgress,"warningBg",ne(He,k.warning.main,.5)),Q(k.Skeleton,"bg",N?ne(Pr,k.text.primary,.13):`rgba(${ae("palette-text-primaryChannel")} / 0.13)`),Q(k.Slider,"primaryTrack",ne(He,k.primary.main,.5)),Q(k.Slider,"secondaryTrack",ne(He,k.secondary.main,.5)),Q(k.Slider,"errorTrack",ne(He,k.error.main,.5)),Q(k.Slider,"infoTrack",ne(He,k.info.main,.5)),Q(k.Slider,"successTrack",ne(He,k.success.main,.5)),Q(k.Slider,"warningTrack",ne(He,k.warning.main,.5));const ce=N?ne(Fe,k.background.default,.985):fu(k.background.default,.98);Q(k.SnackbarContent,"bg",ce),Q(k.SnackbarContent,"color",ai(()=>N?vT.text.primary:k.getContrastText(ce))),Q(k.SpeedDialAction,"fabHoverBg",fu(k.background.paper,.15)),Q(k.StepConnector,"border",ae("palette-grey-600")),Q(k.StepContent,"border",ae("palette-grey-600")),Q(k.Switch,"defaultColor",ae("palette-grey-300")),Q(k.Switch,"defaultDisabledColor",ae("palette-grey-600")),Q(k.Switch,"primaryDisabledColor",ne(He,k.primary.main,.55)),Q(k.Switch,"secondaryDisabledColor",ne(He,k.secondary.main,.55)),Q(k.Switch,"errorDisabledColor",ne(He,k.error.main,.55)),Q(k.Switch,"infoDisabledColor",ne(He,k.info.main,.55)),Q(k.Switch,"successDisabledColor",ne(He,k.success.main,.55)),Q(k.Switch,"warningDisabledColor",ne(He,k.warning.main,.55)),Q(k.TableCell,"border",ne(He,ne(Pr,k.divider,1),.68)),Q(k.Tooltip,"bg",ne(Pr,k.grey[700],.92))}Mi(k.background,"default"),Mi(k.background,"paper"),Mi(k.common,"background"),Mi(k.common,"onBackground"),Mi(k,"divider"),Object.keys(k).forEach(ce=>{const B=k[ce];ce!=="tonalOffset"&&B&&typeof B=="object"&&(B.main&&Q(k[ce],"mainChannel",Hs(Fs(B.main))),B.light&&Q(k[ce],"lightChannel",Hs(Fs(B.light))),B.dark&&Q(k[ce],"darkChannel",Hs(Fs(B.dark))),B.contrastText&&Q(k[ce],"contrastTextChannel",Hs(Fs(B.contrastText))),ce==="text"&&(Mi(k[ce],"primary"),Mi(k[ce],"secondary")),ce==="action"&&(B.active&&Mi(k[ce],"active"),B.selected&&Mi(k[ce],"selected")))})}),_=n.reduce((le,k)=>vn(le,k),_);const L={prefix:c,disableCssColorScheme:s,shouldSkipGeneratingVar:f,getSelector:xL(_),enableContrastVars:u},{vars:ee,generateThemeVars:ie,generateStyleSheets:se}=H_(_,L);return _.vars=ee,Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([le,k])=>{_[le]=k}),_.generateThemeVars=ie,_.generateStyleSheets=se,_.generateSpacing=function(){return lT(y.spacing,ag(this))},_.getColorSchemeSelector=F_(p),_.spacing=_.generateSpacing(),_.shouldSkipGeneratingVar=f,_.unstable_sxConfig={...Ld,...y?.unstable_sxConfig},_.unstable_sx=function(k){return bo({sx:k,theme:this})},_.toRuntimeSource=ST,_}function uw(e,n,r){e.colorSchemes&&r&&(e.colorSchemes[n]={...r!==!0&&r,palette:cg({...r===!0?{}:r.palette,mode:n})})}function CL(e={},...n){const{palette:r,cssVariables:a=!1,colorSchemes:s=r?void 0:{light:!0},defaultColorScheme:c=r?.mode,...u}=e,f=c||"light",p=s?.[f],g={...s,...r?{[f]:{...typeof p!="boolean"&&p,palette:r}}:void 0};if(a===!1){if(!("colorSchemes"in e))return Xp(e,...n);let y=r;"palette"in e||g[f]&&(g[f]!==!0?y=g[f].palette:f==="dark"&&(y={mode:"dark"}));const x=Xp({...e,palette:y},...n);return x.defaultColorScheme=f,x.colorSchemes=g,x.palette.mode==="light"&&(x.colorSchemes.light={...g.light!==!0&&g.light,palette:x.palette},uw(x,"dark",g.dark)),x.palette.mode==="dark"&&(x.colorSchemes.dark={...g.dark!==!0&&g.dark,palette:x.palette},uw(x,"light",g.light)),x}return!r&&!("light"in g)&&f==="light"&&(g.light=!0),SL({...u,colorSchemes:g,defaultColorScheme:f,...typeof a!="boolean"&&a},...n)}const TL=CL();function jT(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const jL=e=>jT(e)&&e!=="classes",Ml=S_({themeId:S7,defaultTheme:TL,rootShouldForwardProp:jL}),ug=B_;function ET(e){return __(e)}function EL(e){return sg("MuiSvgIcon",e)}dT("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const AL=e=>{const{color:n,fontSize:r,classes:a}=e,s={root:["root",n!=="inherit"&&`color${br(n)}`,`fontSize${br(r)}`]};return xT(s,EL,a)},kL=Ml("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.color!=="inherit"&&n[`color${br(r.color)}`],n[`fontSize${br(r.fontSize)}`]]}})(ug(({theme:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:e.transitions?.create?.("fill",{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:n=>!n.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:e.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:e.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter(([,n])=>n&&n.main).map(([n])=>({props:{color:n},style:{color:(e.vars??e).palette?.[n]?.main}})),{props:{color:"action"},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:"disabled"},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}))),Qp=j.forwardRef(function(n,r){const a=ET({props:n,name:"MuiSvgIcon"}),{children:s,className:c,color:u="inherit",component:f="svg",fontSize:p="medium",htmlColor:g,inheritViewBox:y=!1,titleAccess:x,viewBox:v="0 0 24 24",...C}=a,w=j.isValidElement(s)&&s.type==="svg",S={...a,color:u,component:f,fontSize:p,instanceFontSize:n.fontSize,inheritViewBox:y,viewBox:v,hasSvgAsChild:w},A={};y||(A.viewBox=v);const R=AL(S);return h.jsxs(kL,{as:f,className:gr(R.root,c),focusable:"false",color:g,"aria-hidden":x?void 0:!0,role:x?"img":void 0,ref:r,...A,...C,...w&&s.props,ownerState:S,children:[w?s.props.children:s,x?h.jsx("title",{children:x}):null]})});Qp.muiName="SvgIcon";function AT(e,n){function r(a,s){return h.jsx(Qp,{"data-testid":void 0,ref:s,...a,children:e})}return r.muiName=Qp.muiName,j.memo(j.forwardRef(r))}function RL(e){const{controlled:n,default:r}=e,{current:a}=j.useRef(n!==void 0),[s,c]=j.useState(r),u=a?n:s,f=j.useCallback(p=>{a||c(p)},[]);return[u,f]}function kT(...e){const n=j.useRef(void 0),r=j.useCallback(a=>{const s=e.map(c=>{if(c==null)return null;if(typeof c=="function"){const u=c,f=u(a);return typeof f=="function"?f:()=>{u(null)}}return c.current=a,()=>{c.current=null}});return()=>{s.forEach(c=>c?.())}},e);return j.useMemo(()=>e.every(a=>a==null)?null:a=>{n.current&&(n.current(),n.current=void 0),a!=null&&(n.current=r(a))},e)}function zL(e){return typeof e=="string"}function ML(e,n,r){return e===void 0||zL(e)?n:{...n,ownerState:{...n.ownerState,...r}}}function $L(e,n,r){return typeof e=="function"?e(n,r):e}function OL(e,n=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(a=>a.match(/^on[A-Z]/)&&typeof e[a]=="function"&&!n.includes(a)).forEach(a=>{r[a]=e[a]}),r}function dw(e){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{n[r]=e[r]}),n}function DL(e){const{getSlotProps:n,additionalProps:r,externalSlotProps:a,externalForwardedProps:s,className:c}=e;if(!n){const C=gr(r?.className,c,s?.className,a?.className),w={...r?.style,...s?.style,...a?.style},S={...r,...s,...a};return C.length>0&&(S.className=C),Object.keys(w).length>0&&(S.style=w),{props:S,internalRef:void 0}}const u=OL({...s,...a}),f=dw(a),p=dw(s),g=n(u),y=gr(g?.className,r?.className,c,s?.className,a?.className),x={...g?.style,...r?.style,...s?.style,...a?.style},v={...g,...r,...p,...f};return y.length>0&&(v.className=y),Object.keys(x).length>0&&(v.style=x),{props:v,internalRef:g.ref}}function Zs(e,n){const{className:r,elementType:a,ownerState:s,externalForwardedProps:c,internalForwardedProps:u,shouldForwardComponentProp:f=!1,...p}=n,{component:g,slots:y={[e]:void 0},slotProps:x={[e]:void 0},...v}=c,C=y[e]||a,w=$L(x[e],s),{props:{component:S,...A},internalRef:R}=DL({className:r,...p,externalForwardedProps:e==="root"?v:void 0,externalSlotProps:w}),O=kT(R,w?.ref,n.ref),$=e==="root"?S||g:S,N=ML(C,{...e==="root"&&!g&&!y[e]&&u,...e!=="root"&&!y[e]&&u,...A,...$&&!f&&{as:$},...$&&f&&{component:$},ref:O},s);return[C,N]}function fw(e){try{return e.matches(":focus-visible")}catch{}return!1}const _L={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},LL=AT(h.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})),NL=AT(h.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}));function BL(e){return sg("MuiRating",e)}const Ls=dT("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function UL(e){const n=e.toString().split(".")[1];return n?n.length:0}function Hm(e,n){if(e==null)return e;const r=Math.round(e/n)*n;return Number(r.toFixed(UL(n)))}const VL=e=>{const{classes:n,size:r,readOnly:a,disabled:s,emptyValueFocused:c,focusVisible:u}=e,f={root:["root",`size${br(r)}`,s&&"disabled",u&&"focusVisible",a&&"readOnly"],label:["label","pristine"],labelEmptyValue:[c&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return xT(f,BL,n)},PL=Ml("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[{[`& .${Ls.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${br(r.size)}`],r.readOnly&&n.readOnly]}})(ug(({theme:e})=>({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${Ls.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Ls.focusVisible} .${Ls.iconActive}`]:{outline:"1px solid #999"},[`& .${Ls.visuallyHidden}`]:_L,variants:[{props:{size:"small"},style:{fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:e.typography.pxToRem(30)}},{props:({ownerState:n})=>n.readOnly,style:{pointerEvents:"none"}}]}))),RT=Ml("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},n)=>[n.label,e.emptyValueFocused&&n.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:e})=>e.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),HL=Ml("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.icon,r.iconEmpty&&n.iconEmpty,r.iconFilled&&n.iconFilled,r.iconHover&&n.iconHover,r.iconFocus&&n.iconFocus,r.iconActive&&n.iconActive]}})(ug(({theme:e})=>({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:n})=>n.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:n})=>n.iconEmpty,style:{color:(e.vars||e).palette.action.disabled}}]}))),FL=Ml("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>jT(e)&&e!=="iconActive",overridesResolver:(e,n)=>{const{iconActive:r}=e;return[n.decimal,r&&n.iconActive]}})({position:"relative",variants:[{props:({iconActive:e})=>e,style:{transform:"scale(1.2)"}}]});function qL(e){const{value:n,...r}=e;return h.jsx("span",{...r})}function hw(e){const{classes:n,disabled:r,emptyIcon:a,focus:s,getLabelText:c,highlightSelectedOnly:u,hover:f,icon:p,IconContainerComponent:g,isActive:y,itemValue:x,labelProps:v,name:C,onBlur:w,onChange:S,onClick:A,onFocus:R,readOnly:O,ownerState:$,ratingValue:N,ratingValueRounded:P,slots:_={},slotProps:L={}}=e,ee=u?x===N:x<=N,ie=x<=f,se=x<=s,le=x===P,k=`${C}-${yT()}`,ae={slots:_,slotProps:L},[ne,ce]=Zs("icon",{elementType:HL,className:gr(n.icon,ee?n.iconFilled:n.iconEmpty,ie&&n.iconHover,se&&n.iconFocus,y&&n.iconActive),externalForwardedProps:ae,ownerState:{...$,iconEmpty:!ee,iconFilled:ee,iconHover:ie,iconFocus:se,iconActive:y},additionalProps:{value:x},internalForwardedProps:{as:g}}),[B,Z]=Zs("label",{elementType:RT,externalForwardedProps:ae,ownerState:{...$,emptyValueFocused:void 0},additionalProps:{style:v?.style,htmlFor:k}}),K=h.jsx(ne,{...ce,children:a&&!ee?a:p});return O?h.jsx("span",{...v,children:K}):h.jsxs(j.Fragment,{children:[h.jsxs(B,{...Z,children:[K,h.jsx("span",{className:n.visuallyHidden,children:c(x)})]}),h.jsx("input",{className:n.visuallyHidden,onFocus:R,onBlur:w,onChange:S,onClick:A,disabled:r,value:x,id:k,type:"radio",name:C,checked:le})]})}const GL=h.jsx(LL,{fontSize:"inherit"}),YL=h.jsx(NL,{fontSize:"inherit"});function KL(e){return`${e||"0"} Star${e!==1?"s":""}`}const Fm=j.forwardRef(function(n,r){const a=ET({name:"MuiRating",props:n}),{component:s="span",className:c,defaultValue:u=null,disabled:f=!1,emptyIcon:p=YL,emptyLabelText:g="Empty",getLabelText:y=KL,highlightSelectedOnly:x=!1,icon:v=GL,IconContainerComponent:C=qL,max:w=5,name:S,onChange:A,onChangeActive:R,onMouseLeave:O,onMouseMove:$,precision:N=1,readOnly:P=!1,size:_="medium",value:L,slots:ee={},slotProps:ie={},...se}=a,le=yT(S),[k,ae]=RL({controlled:L,default:u}),ne=Hm(k,N),ce=$_(),[{hover:B,focus:Z},K]=j.useState({hover:-1,focus:-1});let re=ne;B!==-1&&(re=B),Z!==-1&&(re=Z);const[he,z]=j.useState(!1),V=j.useRef(),I=kT(V,r),oe=Be=>{$&&$(Be);const Je=V.current,{right:sn,left:Tt,width:Pi}=Je.getBoundingClientRect();let fi;ce?fi=(sn-Be.clientX)/Pi:fi=(Be.clientX-Tt)/Pi;let wn=Hm(w*fi+N/2,N);wn=mT(wn,N,w),K(Sn=>Sn.hover===wn&&Sn.focus===wn?Sn:{hover:wn,focus:wn}),z(!1),R&&B!==wn&&R(Be,wn)},de=Be=>{O&&O(Be);const Je=-1;K({hover:Je,focus:Je}),R&&B!==Je&&R(Be,Je)},ye=Be=>{let Je=Be.target.value===""?null:parseFloat(Be.target.value);B!==-1&&(Je=B),ae(Je),A&&A(Be,Je)},te=Be=>{Be.clientX===0&&Be.clientY===0||(K({hover:-1,focus:-1}),ae(null),A&&parseFloat(Be.target.value)===ne&&A(Be,null))},ge=Be=>{fw(Be.target)&&z(!0);const Je=parseFloat(Be.target.value);K(sn=>({hover:sn.hover,focus:Je}))},fe=Be=>{if(B!==-1)return;fw(Be.target)||z(!1);const Je=-1;K(sn=>({hover:sn.hover,focus:Je}))},[Me,Rt]=j.useState(!1),Ct={...a,component:s,defaultValue:u,disabled:f,emptyIcon:p,emptyLabelText:g,emptyValueFocused:Me,focusVisible:he,getLabelText:y,icon:v,IconContainerComponent:C,max:w,precision:N,readOnly:P,size:_},Fn=VL(Ct),qn={slots:ee,slotProps:ie},[Oo,Do]=Zs("root",{ref:I,className:gr(Fn.root,c),elementType:PL,externalForwardedProps:{...qn,...se,component:s},getSlotProps:Be=>({...Be,onMouseMove:Je=>{oe(Je),Be.onMouseMove?.(Je)},onMouseLeave:Je=>{de(Je),Be.onMouseLeave?.(Je)}}),ownerState:Ct,additionalProps:{role:P?"img":null,"aria-label":P?y(re):null}}),[Pd,$l]=Zs("label",{className:gr(Fn.label,Fn.labelEmptyValue),elementType:RT,externalForwardedProps:qn,ownerState:Ct}),[_o,ra]=Zs("decimal",{className:Fn.decimal,elementType:FL,externalForwardedProps:qn,ownerState:Ct});return h.jsxs(Oo,{...Do,children:[Array.from(new Array(w)).map((Be,Je)=>{const sn=Je+1,Tt={classes:Fn,disabled:f,emptyIcon:p,focus:Z,getLabelText:y,highlightSelectedOnly:x,hover:B,icon:v,IconContainerComponent:C,name:le,onBlur:fe,onChange:ye,onClick:te,onFocus:ge,ratingValue:re,ratingValueRounded:ne,readOnly:P,ownerState:Ct,slots:ee,slotProps:ie},Pi=sn===Math.ceil(re)&&(B!==-1||Z!==-1);if(N<1){const fi=Array.from(new Array(1/N));return j.createElement(_o,{...ra,key:sn,className:gr(ra.className,Pi&&Fn.iconActive),iconActive:Pi},fi.map((wn,Sn)=>{const Lo=Hm(sn-1+(Sn+1)*N,N);return h.jsx(hw,{...Tt,isActive:!1,itemValue:Lo,labelProps:{style:fi.length-1===Sn?{}:{width:Lo===re?`${(Sn+1)*N*100}%`:"0%",overflow:"hidden",position:"absolute"}}},Lo)}))}return h.jsx(hw,{...Tt,isActive:Pi,itemValue:sn},sn)}),!P&&!f&&h.jsxs(Pd,{...$l,children:[h.jsx("input",{className:Fn.visuallyHidden,value:"",id:`${le}-empty`,type:"radio",name:le,checked:ne==null,onFocus:()=>Rt(!0),onBlur:()=>Rt(!1),onChange:ye}),h.jsx("span",{className:Fn.visuallyHidden,children:g})]})]})}),XL=E.div`
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
`,QL=E.div`
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
`,IL=E.h2`
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
`,ZL=E.div`
    margin-bottom: 2rem;
    width: 100%;
    box-sizing: border-box;
`,qm=E.div`
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
`,hu=E.label`
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.25rem;
    display: block;
    font-size: 1rem;

    @media (max-width: 48rem) {
        text-align: center;
        font-size: 0.95rem;
    }
`,Gm=E.p`
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
`,JL=E.div`
    margin-bottom: 2rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        margin-bottom: 1.5rem;
    }
`,WL=E.textarea`
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
`,eN=E.div`
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
`,mw=({isOpen:e,onClose:n,classData:r,onConfirm:a,isLoading:s=!1})=>{const[c,u]=j.useState({didatica:0,atencao:0,pontualidade:0}),[f,p]=j.useState(""),g=(C,w)=>{u(S=>({...S,[C]:w||0}))},y=()=>{if(!r)return;const C={...c,comentarios:f.trim()||void 0};a(r.id,C),u({didatica:0,atencao:0,pontualidade:0}),p("")},x=()=>{u({didatica:0,atencao:0,pontualidade:0}),p(""),n()},v=c.didatica>0&&c.atencao>0&&c.pontualidade>0;return r?h.jsxs(Mo,{isOpen:e,onClose:x,children:[h.jsxs(XL,{children:[h.jsx(IL,{children:"Avaliar Aula"}),h.jsxs(QL,{children:[h.jsx("h3",{children:r.name}),h.jsxs("p",{children:["Professor(a): ",r.instructor]})]})]}),h.jsxs(ZL,{children:[h.jsxs(qm,{children:[h.jsxs("div",{children:[h.jsx(hu,{children:"Didática"}),h.jsx(Gm,{children:"Como você avalia o método de ensino e clareza das explicações?"})]}),h.jsx(Fm,{value:c.didatica,onChange:(C,w)=>g("didatica",w),icon:h.jsx(qa,{size:24,fill:"currentColor"}),emptyIcon:h.jsx(qa,{size:24}),size:"large",sx:{"& .MuiRating-iconFilled":{color:"#f97316"},"& .MuiRating-iconEmpty":{color:"#666666"},"& .MuiRating-iconHover":{color:"#f97316"},"@media (max-width: 768px)":{"& .MuiRating-icon":{fontSize:"2rem"}}}})]}),h.jsxs(qm,{children:[h.jsxs("div",{children:[h.jsx(hu,{children:"Atenção"}),h.jsx(Gm,{children:"O professor foi atencioso com os alunos e suas necessidades?"})]}),h.jsx(Fm,{value:c.atencao,onChange:(C,w)=>g("atencao",w),icon:h.jsx(qa,{size:24,fill:"currentColor"}),emptyIcon:h.jsx(qa,{size:24}),size:"large",sx:{"& .MuiRating-iconFilled":{color:"#f97316"},"& .MuiRating-iconEmpty":{color:"#666666"},"& .MuiRating-iconHover":{color:"#f97316"},"@media (max-width: 768px)":{"& .MuiRating-icon":{fontSize:"2rem"}}}})]}),h.jsxs(qm,{children:[h.jsxs("div",{children:[h.jsx(hu,{children:"Pontualidade"}),h.jsx(Gm,{children:"A aula começou e terminou no horário previsto?"})]}),h.jsx(Fm,{value:c.pontualidade,onChange:(C,w)=>g("pontualidade",w),icon:h.jsx(qa,{size:24,fill:"currentColor"}),emptyIcon:h.jsx(qa,{size:24}),size:"large",sx:{"& .MuiRating-iconFilled":{color:"#f97316"},"& .MuiRating-iconEmpty":{color:"#666666"},"& .MuiRating-iconHover":{color:"#f97316"},"@media (max-width: 768px)":{"& .MuiRating-icon":{fontSize:"2rem"}}}})]})]}),h.jsxs(JL,{children:[h.jsx(hu,{children:"Comentários (opcional)"}),h.jsx(WL,{value:f,onChange:C=>p(C.target.value),placeholder:"Deixe seus comentários sobre a aula...",maxLength:500}),h.jsxs("span",{style:{fontSize:"0.8rem",color:"#666",textAlign:"right",display:"block"},children:[f.length,"/500"]})]}),h.jsxs(eN,{children:[h.jsx(Kt,{variant:"secondary",onClick:x,disabled:s,children:"Cancelar"}),h.jsx(Kt,{onClick:y,disabled:!v||s,children:s?"Enviando...":"Enviar Avaliação"})]})]}):null},tN=()=>{const[e,n]=j.useState("Todas"),[r,a]=j.useState(""),[s,c]=j.useState([]),[u,f]=j.useState([]),[p,g]=j.useState(!0),[y,x]=j.useState(null),[v,C]=j.useState(null),[w,S]=j.useState(!1),[A,R]=j.useState(!1),[O,$]=j.useState(null),[N,P]=j.useState(!1),[_,L]=j.useState(!1),[ee,ie]=j.useState(null),[se,le]=j.useState(!1),[k,ae]=j.useState(!1);j.useEffect(()=>{(async()=>{try{g(!0),x(null);const[ge,fe]=await Promise.all([DD(),_D()]);c(ge),f(fe)}catch(ge){x("Erro ao carregar dados. Tente novamente."),console.error("Erro ao carregar dados:",ge)}finally{g(!1)}})()},[]);const ne=te=>{a(te)},ce=te=>{C(te),S(!0)},B=()=>{S(!1),C(null)},Z=async te=>{try{R(!0),await new Promise(fe=>setTimeout(fe,1500)),c(fe=>fe.map(Me=>Me.id===te?{...Me,enrolled:Me.enrolled>=Me.capacity?Me.enrolled:Me.enrolled+1,enrollmentStatus:Me.enrolled>=Me.capacity?"waiting_list":"enrolled",waitingList:Me.enrolled>=Me.capacity?Me.waitingList+1:Me.waitingList}:Me)),B();const ge=s.find(fe=>fe.id===te);ge&&ge.enrolled>=ge.capacity?console.log("Adicionado à lista de espera!"):console.log("Inscrição realizada com sucesso!")}catch(ge){console.error("Erro ao realizar inscrição:",ge)}finally{R(!1)}},K=async te=>{try{L(!0),await new Promise(ge=>setTimeout(ge,500)),c(ge=>ge.map(fe=>fe.id===te?{...fe,enrolled:fe.enrollmentStatus==="enrolled"?Math.max(0,fe.enrolled-1):fe.enrolled,enrollmentStatus:"not_enrolled",waitingList:fe.enrollmentStatus==="waiting_list"?Math.max(0,fe.waitingList-1):fe.waitingList}:fe)),he(),console.log("Cancelamento realizado com sucesso!")}catch(ge){console.error("Erro ao cancelar inscrição:",ge)}finally{L(!1)}},re=te=>{$(te),P(!0)},he=()=>{P(!1),$(null)},z=te=>{ie(te),le(!0)},V=()=>{le(!1),ie(null)},I=async(te,ge)=>{try{ae(!0),await new Promise(fe=>setTimeout(fe,1e3)),c(fe=>fe.map(Me=>Me.id===te?{...Me,enrollmentStatus:"not_enrolled",userRating:ge}:Me)),V(),console.log("Avaliação realizada com sucesso!")}catch(fe){console.error("Erro ao realizar avaliação:",fe)}finally{ae(!1)}},oe=s.filter(te=>te.enrollmentStatus==="enrolled"||te.enrollmentStatus==="waiting_list"||te.enrollmentStatus==="to_evaluate"),de=s.filter(te=>{if(te.enrollmentStatus!=="not_enrolled")return!1;const ge=te.category.trim(),fe=e.trim(),Me=fe==="Todas"||ge===fe,Rt=r===""||te.name.toLowerCase().includes(r.toLowerCase())||te.instructor.toLowerCase().includes(r.toLowerCase())||te.location.toLowerCase().includes(r.toLowerCase());return Me&&Rt}),ye=()=>p?h.jsxs(h.Fragment,{children:[h.jsxs(L2,{children:[h.jsx(uu,{children:"Minhas Aulas"}),h.jsx(cu,{children:[...Array(2)].map((te,ge)=>h.jsxs(O2,{children:[h.jsx(D2,{}),h.jsxs(_2,{children:[h.jsx(tn,{height:"28px",width:"70%"}),h.jsx(tn,{height:"18px",width:"60%"}),h.jsx(tn,{height:"18px",width:"55%"}),h.jsx(tn,{height:"18px",width:"50%"}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[h.jsx(tn,{height:"18px",width:"100px"}),h.jsx(tn,{height:"36px",width:"80px",borderRadius:"0.25rem"})]})]})]},`enrolled-skeleton-${ge}`))})]}),h.jsx(uu,{children:"Aulas Disponíveis"}),h.jsx(CD,{children:h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[h.jsxs("div",{style:{display:"flex",gap:"0.5rem",width:"100%"},children:[h.jsx("div",{style:{flex:1},children:h.jsx(tn,{height:"48px",borderRadius:"0.5rem"})}),h.jsx(tn,{height:"48px",width:"48px",borderRadius:"0.5rem"})]}),h.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-start",flexWrap:"nowrap",overflowX:"auto",paddingBottom:"0.5rem"},children:[...Array(5)].map((te,ge)=>h.jsx(SD,{},ge))})]})}),h.jsx(cu,{children:[...Array(6)].map((te,ge)=>h.jsxs(O2,{children:[h.jsx(D2,{}),h.jsxs(_2,{children:[h.jsx(tn,{height:"28px",width:"70%"}),h.jsx(tn,{height:"18px",width:"60%"}),h.jsx(tn,{height:"18px",width:"55%"}),h.jsx(tn,{height:"18px",width:"50%"}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[h.jsx(tn,{height:"18px",width:"100px"}),h.jsx(tn,{height:"36px",width:"120px",borderRadius:"0.25rem"})]})]})]},`available-skeleton-${ge}`))})]}):y?h.jsx("p",{style:{color:"#ef4444",textAlign:"center",marginTop:"2rem"},children:y}):h.jsxs(h.Fragment,{children:[h.jsxs(L2,{children:[h.jsx(uu,{children:"Minhas Aulas"}),oe.length>0?h.jsx(cu,{as:Ae.div,initial:"hidden",animate:"visible",variants:lt.staggerContainer,children:oe.map(te=>{let ge=jD,fe="Cancelar",Me=AD,Rt=()=>re(te);return te.enrollmentStatus==="waiting_list"?(ge=ED,fe="Sair da Fila",Me=zD):te.enrollmentStatus==="to_evaluate"&&(ge=kD,fe="Avaliar",Me=RD,Rt=()=>z(te)),h.jsx(Ae.div,{variants:lt.fadeInUp,children:h.jsxs(ge,{children:[h.jsx(R2,{src:te.image,alt:te.name}),h.jsxs(z2,{children:[h.jsx(M2,{children:te.name}),h.jsxs(Ga,{children:[h.jsx(mo,{size:18}),h.jsx("span",{children:te.instructor})]}),h.jsxs(Ga,{children:[h.jsx(ho,{size:18}),h.jsx("span",{children:te.schedule})]}),h.jsxs(Ga,{children:[h.jsx(rl,{size:18}),h.jsx("span",{children:te.location})]}),h.jsxs($2,{children:[h.jsx("span",{children:te.enrollmentStatus==="waiting_list"?h.jsxs(h.Fragment,{children:[h.jsx("span",{style:{color:"#f97316",fontWeight:"600"},children:te.enrolled+te.waitingList}),"/",te.capacity," alunos"]}):te.enrollmentStatus==="to_evaluate"?"Aguardando avaliação":`${te.enrolled}/${te.capacity} alunos`}),h.jsx(Me,{onClick:Rt,size:"sm",children:fe})]})]})]})},`enrolled-${te.id}`)})},`enrolled-grid-${oe.map(te=>te.id).join("-")}`):h.jsx(Ae.div,{initial:"hidden",animate:"visible",variants:lt.fadeInUp,children:h.jsxs(MD,{children:[h.jsx(jR,{size:48}),h.jsx("p",{children:"Você ainda não está inscrito em nenhuma aula"})]})})]}),h.jsx(uu,{children:"Aulas Disponíveis"}),h.jsx(TD,{children:h.jsx(qD,{onSearch:ne,categories:u,selectedCategory:e,onCategoryChange:n})}),de.length>0?h.jsx(cu,{as:Ae.div,initial:"hidden",animate:"visible",variants:lt.staggerContainer,children:de.map(te=>h.jsx(Ae.div,{variants:lt.fadeInUp,children:h.jsxs(Al,{children:[h.jsx(R2,{src:te.image,alt:te.name}),h.jsxs(z2,{children:[h.jsx(M2,{children:te.name}),h.jsxs(Ga,{children:[h.jsx(mo,{size:18}),h.jsx("span",{children:te.instructor})]}),h.jsxs(Ga,{children:[h.jsx(ho,{size:18}),h.jsx("span",{children:te.schedule})]}),h.jsxs(Ga,{children:[h.jsx(rl,{size:18}),h.jsx("span",{children:te.location})]}),h.jsxs($2,{children:[h.jsx("span",{children:te.waitingList>0?h.jsxs(h.Fragment,{children:[h.jsx("span",{style:{color:"#f97316",fontWeight:"600"},children:te.enrolled+te.waitingList}),"/",te.capacity," alunos"]}):`${te.enrolled}/${te.capacity} alunos`}),h.jsx(Kt,{onClick:()=>ce(te),children:te.enrolled>=te.capacity?"Entrar na Fila":"Inscrever-se"})]})]})]})},`available-${te.id}`))},`available-grid-${de.map(te=>te.id).join("-")}-${e}`):h.jsx(Ae.div,{initial:"hidden",animate:"visible",variants:lt.fadeInUp,children:h.jsxs(wD,{children:[h.jsx(FR,{size:48}),h.jsx("p",{children:"Nenhuma aula disponível encontrada com os filtros aplicados"})]})})]});return h.jsxs(vD,{children:[ye(),h.jsx(c7,{isOpen:w,onClose:B,classData:v,onConfirm:Z,isLoading:A}),h.jsx(v7,{isOpen:N,onClose:he,classData:O,onConfirm:K,isLoading:_}),h.jsx(mw,{isOpen:se,onClose:V,classData:ee,onConfirm:I,isLoading:k}),h.jsx(mw,{isOpen:se,onClose:V,classData:ee,onConfirm:I,isLoading:k})]})},zT=[{id:1,name:"Paulo Rosado",score:12500,avatar:"https://avatars.githubusercontent.com/u/117609505?v=4"},{id:2,name:"Gustavo Mourato",score:11800,avatar:"https://avatars.githubusercontent.com/u/142419362?v=4"},{id:3,name:"Vinícius Jordão",score:10200,avatar:"https://avatars.githubusercontent.com/u/142420325?v=4"},{id:4,name:"Thomaz Lima",score:9500,avatar:"https://avatars.githubusercontent.com/u/126795323?v=4"},{id:5,name:"João Marcelo",score:8900,avatar:"https://avatars.githubusercontent.com/u/142419624?v=4"},{id:6,name:"Gabriel Albuquerque",score:8200,avatar:"https://avatars.githubusercontent.com/u/142417669?v=4"},{id:7,name:"Evaldo Galdino",score:7600,avatar:"https://avatars.githubusercontent.com/u/97982032?v=4"},{id:8,name:"Luan Kato",score:7100,avatar:"https://avatars.githubusercontent.com/u/142417782?v=4"},{id:9,name:"Ana Clara",score:6500,avatar:"https://avatars.githubusercontent.com/u/142419823?v=4"},{id:10,name:"Sophia Gallindo",score:6200,avatar:"https://avatars.githubusercontent.com/u/67246528?v=4"}],nN=()=>new Promise(e=>{setTimeout(()=>{e(zT)},1500)}),iN=()=>new Promise(e=>{setTimeout(()=>{e(zT)},1500)}),rN=E.div`
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
`,gl=({name:e,avatar:n,size:r=60,className:a})=>{const s=c=>c.split(" ").map(u=>u[0]).join("").toUpperCase().slice(0,2);return h.jsx(rN,{$hasImage:!!n,$size:r,className:a,children:n?h.jsx("img",{src:n,alt:e}):s(e)})},MT=E.div`
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
`,aN=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({$position:e})=>e===1?2:e===2?1:3};
`,oN=E.div`
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
`,sN=E.div`
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
`,lN=E.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 100%;
`,cN=E.h3`
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
`,uN=E.span`
    font-size: ${({$position:e})=>e===1?"1.5rem":"1.25rem"};
    color: ${({theme:e})=>e.colors.text};
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: ${({$position:e})=>e===1?"0.9rem":"0.8rem"};
    }
`,dN=E.div`
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
`,fN=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({$position:e})=>e===1?2:e===2?1:3};
`,hN=E.div`
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
`,pw=E.div`
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
`,mN=E.div`
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
`,nd=({topThree:e,formatScore:n,animated:r=!0})=>{const a=c=>{switch(c){case 1:return"🥇";case 2:return"🥈";case 3:return"🥉";default:return null}},s={initial:{opacity:0,y:50},animate:{opacity:1,y:0}};return e.length<3?null:h.jsx(MT,{children:e.map((c,u)=>{const f=u+1,p=r?Ae.div:"div",g=r?{initial:s.initial,animate:s.animate,transition:{delay:u*.2,duration:.5}}:{};return h.jsxs(aN,{$position:f,as:p,...g,children:[h.jsxs(oN,{$position:f,children:[f===1&&h.jsx(sN,{children:"👑"}),h.jsx(gl,{name:c.name,avatar:c.avatar,size:f===1?120:100})]}),h.jsxs(lN,{children:[h.jsx(cN,{$position:f,children:c.name}),h.jsxs(uN,{$position:f,children:[n(c.score)," pts"]})]}),h.jsx(dN,{$position:f,children:a(f)})]},c.id)})})},$T=E.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,pN=E.div`
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
`,gN=E.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.text};
    min-width: 50px;
    text-align: center;

    @media (max-width: 48rem) {
        font-size: 1.4rem;
        min-width: 40px;
    }
`,yN=E.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
    overflow: hidden;
`,xN=E.h4`
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
`,bN=E.span`
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
`,vN=E.div`
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
`,wN=E.div`
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
`,Ym=E.div`
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
`,dg=({members:e,formatScore:n,startPosition:r=4,animated:a=!0})=>{const s={initial:{opacity:0,x:-50},animate:{opacity:1,x:0}};return e.length===0?null:h.jsx($T,{children:e.map((c,u)=>{const f=u+r,p=a?Ae.div:"div",g=a?{initial:s.initial,animate:s.animate,transition:{delay:u*.1,duration:.3}}:{};return h.jsxs(pN,{$position:f,as:p,...g,children:[h.jsxs(gN,{children:["#",f]}),h.jsx(gl,{name:c.name,avatar:c.avatar,size:60}),h.jsx(yN,{children:h.jsx(xN,{children:c.name})}),h.jsxs(bN,{children:[n(c.score)," pts"]})]},c.id)})})},id=()=>h.jsx(MT,{children:[2,1,3].map(e=>h.jsxs(fN,{$position:e,children:[h.jsx(hN,{$position:e}),h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[h.jsx(pw,{width:e===1?"120px":"100px",height:"20px"}),h.jsx(pw,{width:e===1?"100px":"80px",height:"24px"})]}),h.jsx(mN,{$position:e})]},e))}),fg=({count:e=7})=>h.jsx($T,{children:[...Array(e)].map((n,r)=>h.jsxs(vN,{children:[h.jsx(Ym,{width:"50px",height:"30px"}),h.jsx(wN,{$position:4,style:{width:"60px",height:"60px"}}),h.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"0.5rem"},children:h.jsx(Ym,{width:"150px",height:"20px"})}),h.jsx(Ym,{width:"100px",height:"24px"})]},r))}),SN=E.div`
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
`,CN=E.header`
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
`,TN=E.div`
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
`,jN=E.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`,EN=E.div`
    display: flex;
    gap: 1rem;
    flex-shrink: 0;

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`,gw=E.button`
    padding: 0.75rem 2rem;
    border: 2px solid;
    border-image: ${({$active:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary}) 1`:"none"};
    border-color: ${({$active:e,theme:n})=>e?"transparent":n.colors.primary};
    background: ${({$active:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary})`:"transparent"};
    color: ${({$active:e})=>e?"white":({theme:n})=>n.colors.text};
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
`,AN=E.div`
    max-width: 1200px;
    margin: 0 auto;
`;E.div`
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
`;E(Ae.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    order: ${({$position:e})=>e===1?2:e===2?1:3};

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`;E.div`
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
`;E.div`
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
`;E.div`
    text-align: center;
`;E.h3`
    font-size: ${({$position:e})=>e===1?"1.3rem":"1.1rem"};
    color: ${({theme:e})=>e.colors.text};
    margin: 0;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: ${({$position:e})=>e===1?"1rem":"0.9rem"};
    }
`;E.p`
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
`;E.div`
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
`;E.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;

    @media (max-width: 48rem) {
        padding: 0;
    }
`;E(Ae.div)`
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
`;E.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.text};
    min-width: 50px;
    text-align: center;

    @media (max-width: 48rem) {
        font-size: 1.4rem;
        min-width: 40px;
    }
`;E.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;E.h3`
    font-size: 1.2rem;
    color: ${({theme:e})=>e.colors.text};
    margin: 0;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;E.span`
    font-size: 0.9rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;

    @media (max-width: 48rem) {
        font-size: 0.8rem;
    }
`;E.div`
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
`;const kN=E.div`
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
`,RN=()=>{const[e,n]=j.useState("monthly"),[r,a]=j.useState([]),[s,c]=j.useState(!0);j.useEffect(()=>{(async()=>{c(!0);try{const y=e==="all-time"?await nN():await iN();a(y)}catch(y){console.error("Erro ao carregar ranking:",y),a([])}finally{c(!1)}})()},[e]);const u=r.slice(0,3),f=r.slice(3),p=g=>g.toLocaleString("pt-BR");return h.jsxs(SN,{children:[h.jsxs(CN,{children:[h.jsxs(TN,{children:[h.jsx(jN,{children:"Ranking de Alunos"}),h.jsx("p",{children:"Conquiste pontos e suba no ranking!"})]}),h.jsxs(EN,{children:[h.jsxs(gw,{$active:e==="monthly",onClick:()=>n("monthly"),disabled:s,children:[h.jsx(al,{size:18,style:{marginRight:"0.5rem",verticalAlign:"middle"}}),"Este Mês"]}),h.jsxs(gw,{$active:e==="all-time",onClick:()=>n("all-time"),disabled:s,children:[h.jsx(al,{size:18,style:{marginRight:"0.5rem",verticalAlign:"middle"}}),"Sempre"]})]})]}),h.jsx(AN,{children:s?h.jsxs(h.Fragment,{children:[h.jsx(id,{}),h.jsx(fg,{count:7})]}):h.jsxs(h.Fragment,{children:[h.jsx(nd,{topThree:u,formatScore:p,animated:!0}),f.length>0?h.jsx(dg,{members:f,formatScore:p,startPosition:4,animated:!0}):u.length===0&&h.jsxs(kN,{children:[h.jsx("h3",{children:"Nenhum resultado encontrado"}),h.jsx("p",{children:"O ranking está vazio no momento."})]})]})})]})},Km=E.div`
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
`,Xm=E.header`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        margin-bottom: 2rem;
        flex-direction: column;
        text-align: center;
    }
`,Qm=E.div`
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
`,yw=E.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`,Im=E.div`
    max-width: 1400px;
    margin: 0 auto;
`,xw=E.div`
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
`,mu=E(Ae.div)`
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
`,pu=E.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    svg {
        color: ${({theme:e})=>e.colors.primary};
        flex-shrink: 0;
    }
`,gu=E.h3`
    font-size: 0.95rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
    margin: 0;
    font-weight: 500;
`,yu=E.div`
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
`,xu=E.div`
    font-size: 0.9rem;
    color: ${({$isPositive:e})=>e?"#4caf50":"#f97316"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        color: inherit;
    }
`,bw=E.div`
    margin-top: 3rem;
`,vw=E.h2`
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
`,ww=E.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,zN=E(Ae.div)`
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
`,MN=E.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`,$N=E.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
`,ON=E.div`
    font-size: 0.95rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;
`,DN=E.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    @media (max-width: 48rem) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
    }
`,_t=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`,Lt=E.span`
    font-size: 0.85rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;
`,Nt=E.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
`,_N=E.div`
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
`,LN=E.div`
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
`,$i=E.div`
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
`,NN=E.div`
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
`,BN=[{id:1,dataDaAvaliacao:new Date("2024-09-15"),professorResponsavel:"Prof. João Silva",massaGordaPercentual:22.5,massaGordaKg:18.5,massaMagraKg:63.5,massaMuscularEsqueleticaKg:35.2,aguaCorporalTotalPercentual:55.8,gorduraVisceralNivel:8,taxaMetabolicaBasalKcal:1650,massaOsseaKg:3.2,indiceDeMassaCorporal:24.8,bracoRelaxadoCm:32.5,bracoContraidoCm:34.8,antebracoCm:27.3,toraxPeitoralCm:98.5,cinturaCm:85.2,abdomenCm:88.7,quadrilCm:102.3,coxaCm:58.4,panturrilhaCm:38.6},{id:2,dataDaAvaliacao:new Date("2024-10-20"),professorResponsavel:"Prof. João Silva",massaGordaPercentual:20.8,massaGordaKg:17.2,massaMagraKg:65.8,massaMuscularEsqueleticaKg:36.5,aguaCorporalTotalPercentual:57.2,gorduraVisceralNivel:7,taxaMetabolicaBasalKcal:1680,massaOsseaKg:3.3,indiceDeMassaCorporal:24.3,bracoRelaxadoCm:33.1,bracoContraidoCm:35.4,antebracoCm:27.5,toraxPeitoralCm:99.2,cinturaCm:83.5,abdomenCm:86.4,quadrilCm:101.8,coxaCm:58.9,panturrilhaCm:39.1},{id:3,dataDaAvaliacao:new Date("2024-11-14"),professorResponsavel:"Prof. Maria Santos",massaGordaPercentual:19.2,massaGordaKg:16.1,massaMagraKg:67.9,massaMuscularEsqueleticaKg:37.8,aguaCorporalTotalPercentual:58.5,gorduraVisceralNivel:6,taxaMetabolicaBasalKcal:1710,massaOsseaKg:3.4,indiceDeMassaCorporal:23.9,bracoRelaxadoCm:33.8,bracoContraidoCm:36.2,antebracoCm:27.8,toraxPeitoralCm:100.5,cinturaCm:81.8,abdomenCm:84.2,quadrilCm:101.2,coxaCm:59.5,panturrilhaCm:39.8}],UN=()=>new Promise(e=>{setTimeout(()=>{const n=[...BN].sort((r,a)=>new Date(a.dataDaAvaliacao).getTime()-new Date(r.dataDaAvaliacao).getTime());e(n)},1500)});function VN(){const{user:e,loading:n}=Ao(),[r,a]=j.useState([]),[s,c]=j.useState(!0);j.useEffect(()=>{(async()=>{c(!0);const v=await UN();a(v),c(!1)})()},[]);const u=r[0],f=r[1],p=(x,v)=>{const C=x-v;return{value:Math.abs(C).toFixed(1),isPositive:C<0}},g=(x,v)=>{const C=x-v;return{value:Math.abs(C).toFixed(1),isPositive:C>0}},y=x=>new Date(x).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});return s||n?h.jsxs(Km,{children:[h.jsxs(Xm,{children:[h.jsx($i,{width:"80px",height:"80px",style:{borderRadius:"50%",flexShrink:0}}),h.jsxs(Qm,{children:[h.jsx($i,{width:"250px",height:"48px",$marginBottom:"0.5rem"}),h.jsx($i,{width:"350px",height:"24px"})]})]}),h.jsxs(Im,{children:[h.jsx(xw,{children:[1,2,3,4].map(x=>h.jsxs(LN,{children:[h.jsx($i,{width:"60%",height:"16px",$marginBottom:"1rem"}),h.jsx($i,{width:"80%",height:"32px",$marginBottom:"0.5rem"}),h.jsx($i,{width:"40%",height:"16px"})]},x))}),h.jsxs(bw,{children:[h.jsxs(vw,{children:[h.jsx(fv,{size:24}),"Histórico de Avaliações"]}),h.jsx(ww,{children:[1,2,3].map(x=>h.jsxs(NN,{children:[h.jsx($i,{width:"40%",height:"20px",$marginBottom:"1.5rem"}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem"},children:[1,2,3,4,5,6,7,8].map(v=>h.jsxs("div",{children:[h.jsx($i,{width:"70%",height:"14px",$marginBottom:"0.5rem"}),h.jsx($i,{width:"90%",height:"18px"})]},v))})]},x))})]})]})]}):r.length===0?h.jsxs(Km,{children:[h.jsxs(Xm,{children:[e&&h.jsx(gl,{name:e.name,avatar:e.avatar,size:80}),h.jsxs(Qm,{children:[h.jsx(yw,{children:"Minha Evolução"}),h.jsx("p",{children:"Acompanhe seu progresso através das avaliações de bioimpedância"})]})]}),h.jsx(Im,{children:h.jsxs(_N,{children:[h.jsx(wR,{size:48}),h.jsx("h3",{children:"Nenhuma avaliação encontrada"}),h.jsx("p",{children:"Você ainda não possui avaliações de bioimpedância registradas."})]})})]}):h.jsxs(Km,{children:[h.jsxs(Xm,{children:[e&&h.jsx(gl,{name:e.name,avatar:e.avatar,size:80}),h.jsxs(Qm,{children:[h.jsx(yw,{children:"Minha Evolução"}),h.jsx("p",{children:"Acompanhe seu progresso através das avaliações de bioimpedância"})]})]}),h.jsxs(Im,{children:[h.jsxs(xw,{children:[h.jsxs(mu,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:0},children:[h.jsxs(pu,{children:[h.jsx(r6,{size:20}),h.jsx(gu,{children:"Gordura Corporal"})]}),h.jsxs(yu,{children:[u.massaGordaPercentual,"%"]}),f&&h.jsxs(xu,{$isPositive:p(u.massaGordaPercentual,f.massaGordaPercentual).isPositive,children:[p(u.massaGordaPercentual,f.massaGordaPercentual).isPositive?h.jsx(ru,{size:20}):h.jsx(Vs,{size:20}),p(u.massaGordaPercentual,f.massaGordaPercentual).value,"% desde última avaliação"]})]}),h.jsxs(mu,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1},children:[h.jsxs(pu,{children:[h.jsx(b0,{size:20}),h.jsx(gu,{children:"Massa Muscular"})]}),h.jsxs(yu,{children:[u.massaMuscularEsqueleticaKg,"kg"]}),f&&h.jsxs(xu,{$isPositive:g(u.massaMuscularEsqueleticaKg,f.massaMuscularEsqueleticaKg).isPositive,children:[g(u.massaMuscularEsqueleticaKg,f.massaMuscularEsqueleticaKg).isPositive?h.jsx(Vs,{size:20}):h.jsx(ru,{size:20}),g(u.massaMuscularEsqueleticaKg,f.massaMuscularEsqueleticaKg).value,"kg desde última avaliação"]})]}),h.jsxs(mu,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.2},children:[h.jsxs(pu,{children:[h.jsx(LR,{size:20}),h.jsx(gu,{children:"Água Corporal"})]}),h.jsxs(yu,{children:[u.aguaCorporalTotalPercentual,"%"]}),f&&h.jsxs(xu,{$isPositive:g(u.aguaCorporalTotalPercentual,f.aguaCorporalTotalPercentual).isPositive,children:[g(u.aguaCorporalTotalPercentual,f.aguaCorporalTotalPercentual).isPositive?h.jsx(Vs,{size:20}):h.jsx(ru,{size:20}),g(u.aguaCorporalTotalPercentual,f.aguaCorporalTotalPercentual).value,"% desde última avaliação"]})]}),h.jsxs(mu,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.3},children:[h.jsxs(pu,{children:[h.jsx(PR,{size:20}),h.jsx(gu,{children:"Taxa Metabólica Basal"})]}),h.jsxs(yu,{children:[u.taxaMetabolicaBasalKcal," kcal"]}),f&&h.jsxs(xu,{$isPositive:g(u.taxaMetabolicaBasalKcal,f.taxaMetabolicaBasalKcal).isPositive,children:[g(u.taxaMetabolicaBasalKcal,f.taxaMetabolicaBasalKcal).isPositive?h.jsx(Vs,{size:20}):h.jsx(ru,{size:20}),g(u.taxaMetabolicaBasalKcal,f.taxaMetabolicaBasalKcal).value," kcal desde última avaliação"]})]})]}),h.jsxs(bw,{children:[h.jsxs(vw,{children:[h.jsx(fv,{size:24}),"Histórico de Avaliações"]}),h.jsx(ww,{children:r.map((x,v)=>h.jsxs(zN,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:v*.1},children:[h.jsxs(MN,{children:[h.jsx($N,{children:y(x.dataDaAvaliacao.toString())}),h.jsxs(ON,{children:["Professor: ",x.professorResponsavel]})]}),h.jsxs(DN,{children:[h.jsxs(_t,{children:[h.jsx(Lt,{children:"Gordura Corporal"}),h.jsxs(Nt,{children:[x.massaGordaPercentual,"%"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Massa Magra"}),h.jsxs(Nt,{children:[x.massaMagraKg,"kg"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Massa Muscular"}),h.jsxs(Nt,{children:[x.massaMuscularEsqueleticaKg,"kg"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Água Corporal"}),h.jsxs(Nt,{children:[x.aguaCorporalTotalPercentual,"%"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Gordura Visceral"}),h.jsxs(Nt,{children:["Nível ",x.gorduraVisceralNivel]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"TMB"}),h.jsxs(Nt,{children:[x.taxaMetabolicaBasalKcal," kcal"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Massa Óssea"}),h.jsxs(Nt,{children:[x.massaOsseaKg,"kg"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"IMC"}),h.jsx(Nt,{children:x.indiceDeMassaCorporal})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Braço Relaxado"}),h.jsxs(Nt,{children:[x.bracoRelaxadoCm,"cm"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Braço Contraído"}),h.jsxs(Nt,{children:[x.bracoContraidoCm,"cm"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Antebraço"}),h.jsxs(Nt,{children:[x.antebracoCm,"cm"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Peito"}),h.jsxs(Nt,{children:[x.toraxPeitoralCm,"cm"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Cintura"}),h.jsxs(Nt,{children:[x.cinturaCm,"cm"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Abdômen"}),h.jsxs(Nt,{children:[x.abdomenCm,"cm"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Quadril"}),h.jsxs(Nt,{children:[x.quadrilCm,"cm"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Coxa"}),h.jsxs(Nt,{children:[x.coxaCm,"cm"]})]}),h.jsxs(_t,{children:[h.jsx(Lt,{children:"Panturrilha"}),h.jsxs(Nt,{children:[x.panturrilhaCm,"cm"]})]})]})]},x.id))})]})]})]})}const PN=E.div`
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
`,HN=E.section`
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
`,FN=E.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 64%;
    z-index: 0;
`,qN=E.div`
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
`,GN=E.h1`
    font-size: 2.5rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`,YN=E.p`
    font-size: 1.1rem;
    color: ${({theme:e})=>e.colors.text};
    line-height: 1.6;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`,KN=E.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
    gap: 2rem;
    width: 100%;

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`,Sw=E.div`
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
`,Cw=E.div`
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
`,Tw=E.h2`
    font-size: 1.8rem;
    color: ${({theme:e})=>e.colors.text};
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
    }
`,jw=E.p`
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.text};
    line-height: 1.6;
    margin: 0;
    opacity: 0.9;

    @media (max-width: 48rem) {
        font-size: 0.95rem;
    }
`,XN=E.div`
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
`,QN=E.input`
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
`;E(Kt)`
    width: 100%;
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.875rem 1.5rem;

    ${({variant:e,theme:n})=>e==="secondary"&&`
        background: linear-gradient(135deg, ${n.colors.secondary}, ${n.colors.primary}) !important;
        
        &:hover:not(:disabled) {
            box-shadow: 0 0 20px ${n.colors.secondary}80 !important;
        }
    `}

    @media (max-width: 48rem) {
        max-width: 100%;
        font-size: 0.95rem;
    }
`;const IN=E.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,ZN=E.label`
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    display: block;
`,JN=E.textarea`
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
`,WN=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`,eB=E.img`
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
`,tB=E.div`
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
`,nB=({isOpen:e,onClose:n,onConfirm:r,isLoading:a=!1})=>{const[s,c]=j.useState(""),[u,f]=j.useState(""),[p,g]=j.useState(""),y=()=>{if(!s.trim()){console.log("Nome da guilda é obrigatório");return}r({name:s,description:u,imageUrl:p}),x()},x=()=>{c(""),f(""),g(""),n()},v=h.jsxs(h.Fragment,{children:[h.jsx(yo,{variant:"secondary",onClick:x,disabled:a,children:"Cancelar"}),h.jsx(yo,{variant:"primary",onClick:y,disabled:a||!s.trim(),children:a?"Criando...":"Criar Guilda"})]});return h.jsx(Mo,{isOpen:e,onClose:x,title:"Criar Nova Guilda",footer:v,closeOnOverlayClick:!a,children:h.jsxs(IN,{children:[h.jsx(WN,{children:p?h.jsx(eB,{src:p,alt:"Avatar da Guilda"}):h.jsx(tB,{children:h.jsx(il,{size:64})})}),h.jsx(Wu,{label:"URL da Imagem",type:"url",placeholder:"https://exemplo.com/imagem.png",id:"guild-image-url",value:p,onChange:C=>g(C.target.value)}),h.jsx(Wu,{label:"Nome da Guilda",type:"text",placeholder:"Digite o nome da guilda",id:"guild-name",value:s,onChange:C=>c(C.target.value),required:!0}),h.jsxs("div",{children:[h.jsx(ZN,{htmlFor:"guild-description",children:"Descrição"}),h.jsx(JN,{id:"guild-description",placeholder:"Descreva sua guilda e seus objetivos...",value:u,onChange:C=>f(C.target.value),rows:4})]})]})})},iB=()=>{const[e,n]=j.useState(""),[r,a]=j.useState(!1),[s,c]=j.useState(!1),u=()=>{if(!e.trim()){console.log("Digite um código válido");return}console.log("Entrar em uma guilda com código:",e)},f=()=>{a(!0)},p=async g=>{try{c(!0),await new Promise(y=>setTimeout(y,1500)),console.log("Criar guilda:",g),a(!1)}catch(y){console.error("Erro ao criar guilda:",y)}finally{c(!1)}};return h.jsxs(PN,{children:[h.jsx(Ae.div,{initial:"hidden",animate:"visible",variants:lt.fadeInUp,children:h.jsxs(HN,{children:[h.jsx(FN,{src:"/src/assets/image5.png",alt:"Guilda"}),h.jsxs(qN,{children:[h.jsx(GN,{children:"Bem-vindo às Guildas"}),h.jsxs(YN,{children:["Junte-se a uma guilda e treine ao lado de guerreiros que compartilham os mesmos objetivos.",h.jsx("br",{}),"Ou crie sua própria guilda e lidere seu clã rumo à glória e força suprema!"]})]})]})}),h.jsxs(KN,{as:Ae.div,initial:"hidden",animate:"visible",variants:lt.staggerContainer,children:[h.jsx(Ae.div,{variants:lt.fadeInUp,children:h.jsxs(Sw,{children:[h.jsx(Cw,{children:h.jsx(mo,{size:48})}),h.jsx(Tw,{children:"Entrar em uma Guilda"}),h.jsx(jw,{children:"Digite o código da guilda fornecido pelo líder para se juntar. Participe de desafios coletivos e conquiste recompensas ao lado do seu clã."}),h.jsxs(XN,{children:[h.jsx(QN,{type:"text",placeholder:"Digite o código da guilda",value:e,onChange:g=>n(g.target.value)}),h.jsxs(Kt,{onClick:u,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",whiteSpace:"nowrap"},children:[h.jsx(QR,{size:20}),"Entrar"]})]})]})}),h.jsx(Ae.div,{variants:lt.fadeInUp,children:h.jsxs(Sw,{children:[h.jsx(Cw,{children:h.jsx(u6,{size:48})}),h.jsx(Tw,{children:"Criar uma Guilda"}),h.jsx(jw,{children:"Seja o líder da sua própria guilda. Defina o nome, escolha o emblema e convide outros membros para se juntarem à sua jornada."}),h.jsxs(Kt,{onClick:f,style:{width:"100%",maxWidth:"250px",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[h.jsx(f5,{size:20}),"Criar Guilda"]})]})})]}),h.jsx(nB,{isOpen:r,onClose:()=>a(!1),onConfirm:p,isLoading:s})]})},bu=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`,Ns=E.label`
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,vu=E.span`
    display: flex;
    align-items: center;
    color: ${({theme:e})=>e.colors.primary};
`,rB=E.select`
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
`,Ew=E.input`
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
`,aB=E.textarea`
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
`,oB=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`,sB=E.img`
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`,lB=E.button`
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
`,cB=E.div`
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
`,uB=E.button`
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
`,dB=({isOpen:e,onClose:n,onSubmit:r,workouts:a})=>{const[s,c]=j.useState(""),[u,f]=j.useState(""),[p,g]=j.useState(""),[y,x]=j.useState(""),[v,C]=j.useState(""),[w,S]=j.useState(!1);j.useEffect(()=>{if(e){const _=new Date().toISOString().split("T")[0];f(_)}},[e]),j.useEffect(()=>{y.trim()&&A(y)?C(y):C("")},[y]);const A=_=>{try{return new URL(_),/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(_)}catch{return!1}},R=async _=>{if(_.preventDefault(),!s||!u)return;S(!0);const L=a.find(ie=>ie.id===s),ee={workoutId:s,workoutName:L?.name||"",date:u,description:p.trim()||void 0,imageUrl:v||void 0};try{await r(ee),O()}catch(ie){console.error("Erro ao fazer check-in:",ie)}finally{S(!1)}},O=()=>{c(""),f(""),g(""),x(""),C(""),S(!1),n()},$=()=>{x(""),C("")},N=s&&u,P=h.jsxs(h.Fragment,{children:[h.jsx(uB,{type:"button",onClick:O,disabled:w,children:"Cancelar"}),h.jsx(Kt,{type:"submit",form:"checkin-form",disabled:!N||w,children:w?"Enviando...":"Fazer Check-in"})]});return h.jsx(Mo,{isOpen:e,onClose:O,title:"Fazer Check-in de Treino",footer:P,closeOnOverlayClick:!w,children:h.jsxs("form",{id:"checkin-form",onSubmit:R,children:[h.jsxs(bu,{children:[h.jsxs(Ns,{children:[h.jsx(vu,{children:h.jsx(b0,{size:18})}),"Treino *"]}),h.jsxs(rB,{value:s,onChange:_=>c(_.target.value),required:!0,children:[h.jsx("option",{value:"",children:"Selecione um treino"}),a.map(_=>h.jsx("option",{value:_.id,children:_.name},_.id))]})]}),h.jsxs(bu,{children:[h.jsxs(Ns,{children:[h.jsx(vu,{children:h.jsx(ho,{size:18})}),"Data *"]}),h.jsx(Ew,{type:"date",value:u,onChange:_=>f(_.target.value),max:new Date().toISOString().split("T")[0],required:!0})]}),h.jsxs(bu,{children:[h.jsxs(Ns,{children:[h.jsx(vu,{children:h.jsx(d5,{size:18})}),"Mensagem (opcional)"]}),h.jsx(aB,{value:p,onChange:_=>g(_.target.value),placeholder:"Como foi seu treino? Conte para sua guilda...",rows:4,maxLength:500}),h.jsxs("span",{style:{fontSize:"0.75rem",opacity:.6,marginTop:"0.25rem",display:"block"},children:[p.length,"/500 caracteres"]})]}),h.jsxs(bu,{children:[h.jsxs(Ns,{children:[h.jsx(vu,{children:h.jsx(il,{size:18})}),"Imagem (opcional)"]}),h.jsx(Ew,{type:"url",value:y,onChange:_=>x(_.target.value),placeholder:"Cole a URL da imagem (jpg, png, gif, webp)"})]}),v&&h.jsxs(oB,{children:[h.jsx(Ns,{children:"Preview da Imagem"}),h.jsxs("div",{style:{position:"relative"},children:[h.jsx(sB,{src:v,alt:"Preview"}),h.jsx(lB,{type:"button",onClick:$,children:h.jsx(wd,{size:16})})]})]}),y&&!v&&h.jsxs(cB,{children:[h.jsx(il,{size:32}),h.jsx("p",{children:"URL de imagem inválida"}),h.jsx("span",{children:"Certifique-se de que a URL termina com .jpg, .png, .gif ou .webp"})]})]})})},Zm=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`,Bs=E.label`
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,Jm=E.span`
    display: flex;
    align-items: center;
    color: ${({theme:e})=>e.colors.primary};
`,Aw=E.input`
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
`,fB=E.textarea`
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
`,hB=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
`,mB=E.img`
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`,pB=E.button`
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
`,gB=E.div`
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
`,kw=E.button`
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
`,yB=E.div`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${({theme:e})=>e.colors.error}40;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`,Rw=E.button`
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
`,xB=E.div`
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
`,bB=({isOpen:e,onClose:n,onSubmit:r,onDelete:a,guildData:s})=>{const[c,u]=j.useState(""),[f,p]=j.useState(""),[g,y]=j.useState(""),[x,v]=j.useState(""),[C,w]=j.useState(!1),[S,A]=j.useState(!1);j.useEffect(()=>{e&&(u(s.name),p(s.description||""),y(s.imageUrl||""),v(s.imageUrl||""),A(!1))},[e,s]),j.useEffect(()=>{g.trim()&&R(g)?v(g):g.trim()&&v("")},[g]);const R=se=>{try{return new URL(se),/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(se)}catch{return!1}},O=async se=>{if(se.preventDefault(),!c.trim())return;w(!0);const le={name:c.trim(),description:f.trim()||void 0,imageUrl:x||void 0};try{await r(le),$()}catch(k){console.error("Erro ao editar guilda:",k)}finally{w(!1)}},$=()=>{u(""),p(""),y(""),v(""),w(!1),A(!1),n()},N=()=>{y(""),v("")},P=()=>{A(!0)},_=async()=>{w(!0);try{await a(),$()}catch(se){console.error("Erro ao excluir guilda:",se),w(!1)}},L=()=>{A(!1)},ee=c.trim(),ie=S?h.jsxs(h.Fragment,{children:[h.jsx(kw,{type:"button",onClick:L,disabled:C,children:"Não, manter guilda"}),h.jsx(Rw,{type:"button",onClick:_,disabled:C,children:C?"Excluindo...":"Sim, excluir guilda"})]}):h.jsxs(h.Fragment,{children:[h.jsx(kw,{type:"button",onClick:$,disabled:C,children:"Cancelar"}),h.jsx(Kt,{type:"submit",form:"edit-guild-form",disabled:!ee||C,children:C?"Salvando...":"Salvar Alterações"})]});return h.jsx(Mo,{isOpen:e,onClose:$,title:S?"Confirmar Exclusão":"Editar Guilda",footer:ie,closeOnOverlayClick:!C&&!S,children:S?h.jsxs(xB,{children:[h.jsx(b6,{size:48}),h.jsx("h3",{children:"Tem certeza que deseja excluir esta guilda?"}),h.jsx("p",{children:"Esta ação não pode ser desfeita. Todos os membros perderão acesso à guilda e todo o histórico será perdido."})]}):h.jsxs("form",{id:"edit-guild-form",onSubmit:O,children:[h.jsxs(Zm,{children:[h.jsxs(Bs,{children:[h.jsx(Jm,{children:h.jsx(S6,{size:18})}),"Nome da Guilda *"]}),h.jsx(Aw,{type:"text",value:c,onChange:se=>u(se.target.value),placeholder:"Digite o nome da guilda",maxLength:50,required:!0}),h.jsxs("span",{style:{fontSize:"0.75rem",opacity:.6,marginTop:"0.25rem",display:"block"},children:[c.length,"/50 caracteres"]})]}),h.jsxs(Zm,{children:[h.jsxs(Bs,{children:[h.jsx(Jm,{children:h.jsx(UR,{size:18})}),"Descrição (opcional)"]}),h.jsx(fB,{value:f,onChange:se=>p(se.target.value),placeholder:"Descreva sua guilda, seus objetivos e valores...",rows:4,maxLength:300}),h.jsxs("span",{style:{fontSize:"0.75rem",opacity:.6,marginTop:"0.25rem",display:"block"},children:[f.length,"/300 caracteres"]})]}),h.jsxs(Zm,{children:[h.jsxs(Bs,{children:[h.jsx(Jm,{children:h.jsx(il,{size:18})}),"Imagem da Guilda (opcional)"]}),h.jsx(Aw,{type:"url",value:g,onChange:se=>y(se.target.value),placeholder:"Cole a URL da imagem (jpg, png, gif, webp)"})]}),x&&h.jsxs(hB,{children:[h.jsx(Bs,{children:"Preview da Imagem"}),h.jsxs("div",{style:{position:"relative"},children:[h.jsx(mB,{src:x,alt:"Preview"}),h.jsx(pB,{type:"button",onClick:N,children:h.jsx(wd,{size:16})})]})]}),g&&!x&&h.jsxs(gB,{children:[h.jsx(il,{size:32}),h.jsx("p",{children:"URL de imagem inválida"}),h.jsx("span",{children:"Certifique-se de que a URL termina com .jpg, .png, .gif ou .webp"})]}),h.jsxs(yB,{children:[h.jsx(Bs,{children:"Zona de Perigo"}),h.jsxs(Rw,{type:"button",onClick:P,disabled:C,children:[h.jsx(p6,{size:18}),"Excluir Guilda"]})]})]})})},hg=e=>new Promise(n=>setTimeout(n,e)),zw=async()=>(await new Promise(e=>setTimeout(e,800)),{name:"Guerreiros do Código",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",code:"FORGE2024",memberCount:7}),vB=async()=>(await hg(1e3),[{id:1,name:"Paulo Rosado",avatar:"https://avatars.githubusercontent.com/u/117609505?v=4",score:12500},{id:2,name:"Gustavo Mourato",avatar:"https://avatars.githubusercontent.com/u/142419362?v=4",score:11800},{id:3,name:"Vinícius Jordão",avatar:"https://avatars.githubusercontent.com/u/142420325?v=4",score:10200},{id:4,name:"Thomaz Lima",avatar:"https://avatars.githubusercontent.com/u/126795323?v=4",score:9500},{id:5,name:"João Marcelo",avatar:"https://avatars.githubusercontent.com/u/142419624?v=4",score:8900},{id:6,name:"Gabriel Albuquerque",avatar:"https://avatars.githubusercontent.com/u/142417669?v=4",score:8200},{id:7,name:"Evaldo Galdino",avatar:"https://avatars.githubusercontent.com/u/97982032?v=4",score:7600}]),Mw=async()=>(await hg(900),[{id:1,userId:1,userName:"Paulo Rosado",userAvatar:"https://avatars.githubusercontent.com/u/117609505?v=4",workoutName:"Peito e Tríceps",description:"Treino pesado hoje! Consegui bater meu recorde no supino 💪",imageUrl:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",timestamp:new Date(Date.now()-7200*1e3)},{id:2,userId:2,userName:"Gustavo Mourato",userAvatar:"https://avatars.githubusercontent.com/u/142419362?v=4",workoutName:"Cardio Matinal",description:"Melhor forma de começar o dia!",imageUrl:"https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80",timestamp:new Date(Date.now()-300*60*1e3)},{id:3,userId:3,userName:"Vinícius Jordão",userAvatar:"https://avatars.githubusercontent.com/u/142420325?v=4",workoutName:"Pernas",timestamp:new Date(Date.now()-1440*60*1e3)}]),wB=async()=>(await hg(300),[{id:"1",name:"Peito e Tríceps"},{id:"2",name:"Costas e Bíceps"},{id:"3",name:"Pernas"},{id:"4",name:"Ombros e Abdômen"},{id:"5",name:"Cardio Matinal"},{id:"6",name:"Treino Funcional"}]),SB=E.div`
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
`,CB=E.header`
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
`,$w=E.div`
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
`,TB=E.img`
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
`,Ow=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @media (max-width: 48rem) {
        align-items: center;
    }
`,jB=E.h1`
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
`,EB=E.span`
    font-size: 0.9rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
`,AB=E.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`,kB=E.button`
    background: transparent;
    border: none;
    color: ${({theme:e,$copied:n})=>n?e.colors.success:e.colors.primary};
    padding: 0.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    border-radius: 0.25rem;
    position: relative;

    &:hover {
        background: ${({theme:e,$copied:n})=>n?e.colors.success:e.colors.primary}20;
    }

    &:active {
        transform: scale(0.95);
    }
`,RB=E.span`
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
`,Dw=E.div`
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
`,zB=E.div`
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
`,_w=E.button`
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    color: ${({$active:e,theme:n})=>e?"white":n.colors.text};
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
        color: ${({$active:e,theme:n})=>e?"white":n.colors.primary};
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`,MB=E(Ae.div)`
    position: absolute;
    top: -2px;
    bottom: -2px;
    right: -2px;
    left: 0;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    border-radius: 0.5rem;
    z-index: 0;
`,$B=E.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    min-height: 0;
`,OB=E(Ae.div)`
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
`,DB=E.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    flex-direction: ${({$isCurrentUser:e})=>e?"row-reverse":"row"};
    margin-bottom: 0.375rem;

    @media (max-width: 48rem) {
        gap: 0.375rem;
    }
`,_B=E.div`
    background: ${({$isCurrentUser:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary})`:`${n.colors.background}`};
    border: ${({$isCurrentUser:e,theme:n})=>e?"none":`2px solid ${n.colors.primary}40`};
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
`,LB=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    margin-bottom: 0.375rem;
`,NB=E.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`,BB=E.span`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({$isCurrentUser:e})=>e?"rgba(255, 255, 255, 0.9)":"inherit"};
`,UB=E.span`
    font-size: 0.75rem;
    color: ${({$isCurrentUser:e})=>e?"rgba(255, 255, 255, 0.7)":"inherit"};
    opacity: 0.7;

    &::before {
        content: "\u2022";
        margin-right: 0.5rem;
    }
`,VB=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,PB=E.div`
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
`,HB=E.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({$isCurrentUser:e})=>e?"rgba(255, 255, 255, 0.95)":"inherit"};
    margin: 0;
    word-wrap: break-word;
`,FB=E.img`
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
`,qB=E(Ae.div)`
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
`;E.div`
    background: ${({theme:e})=>e.colors.background};
    border: 2px solid ${({theme:e})=>e.colors.primary}40;
    border-radius: 1rem 1rem 1rem 0.25rem;
    padding: 1rem;
    max-width: 65%;

    @media (max-width: 48rem) {
        max-width: 80%;
        padding: 0.875rem;
    }
`;const GB=E.div`
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
`,wu=E.div`
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
`,YB=ud`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,KB=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`,XB=E.div`
    width: ${({size:e})=>e||40}px;
    height: ${({size:e})=>e||40}px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        animation: ${YB} 1s linear infinite;
        width: 100%;
        height: 100%;
    }
`,OT=({size:e=40,color:n})=>h.jsx(KB,{children:h.jsx(XB,{size:e,color:n,children:h.jsxs("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",children:[h.jsx("circle",{cx:"20",cy:"20",r:"16",stroke:"url(#gradient)",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"25 75",strokeDashoffset:"0",style:{animation:"spin 1s linear infinite",transformOrigin:"center"}}),h.jsx("defs",{children:h.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[h.jsx("stop",{offset:"0%",stopColor:"#AB2522"}),h.jsx("stop",{offset:"100%",stopColor:"#EF752B"})]})})]})})}),QB=()=>{const{user:e}=Ao(),[n,r]=j.useState("messages"),a=j.useRef(null),s=j.useRef(null),c=j.useRef(null),[u,f]=j.useState({x:0,width:0}),[p,g]=j.useState(null),[y,x]=j.useState([]),[v,C]=j.useState([]),[w,S]=j.useState([]),[A,R]=j.useState(!0),[O,$]=j.useState(!0),[N,P]=j.useState(!0),[_,L]=j.useState(!1),[ee,ie]=j.useState(!1),[se,le]=j.useState(!1);j.useEffect(()=>{const V=()=>{const I=n==="messages"?s.current:c.current;I&&f({x:I.offsetLeft-4,width:I.offsetWidth+8.5})};return V(),window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[n]),j.useEffect(()=>{(async()=>{R(!0);try{const I=await zw();g(I)}catch(I){console.error("Erro ao carregar dados da guilda:",I)}finally{R(!1)}})()},[]),j.useEffect(()=>{(async()=>{try{const I=await wB();S(I)}catch(I){console.error("Erro ao carregar treinos disponíveis:",I)}})()},[]),j.useEffect(()=>{n==="ranking"&&(async()=>{$(!0);try{const I=await vB();x(I)}catch(I){console.error("Erro ao carregar membros:",I)}finally{$(!1)}})()},[n]),j.useEffect(()=>{n==="messages"&&(async()=>{P(!0);try{const I=await Mw();C(I)}catch(I){console.error("Erro ao carregar check-ins:",I)}finally{P(!1)}})()},[n]),j.useLayoutEffect(()=>{a.current&&!N&&(a.current.scrollTop=a.current.scrollHeight)},[v,n,N]);const k=async()=>{if(p)try{await navigator.clipboard.writeText(p.code),L(!0),setTimeout(()=>L(!1),2e3)}catch(V){console.error("Erro ao copiar código:",V)}},ae=()=>{le(!0)},ne=async V=>{console.log("Guilda editada:",V);const I=await zw();g(I)},ce=async()=>{console.log("Guilda excluída")},B=()=>{ie(!0)},Z=async V=>{console.log("Check-in realizado:",V);const I=await Mw();C(I)},K=V=>{const oe=new Date().getTime()-V.getTime(),de=Math.floor(oe/(1e3*60*60)),ye=Math.floor(de/24);return de<1?`há ${Math.floor(oe/6e4)} min`:de<24?`há ${de}h`:ye===1?"ontem":ye<7?`há ${ye} dias`:V.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})},re=V=>V.toLocaleString("pt-BR"),he=y.slice(0,3),z=y.slice(3);return h.jsxs(SB,{children:[h.jsx(CB,{children:A?h.jsxs(h.Fragment,{children:[h.jsxs($w,{children:[h.jsx(GB,{$position:1,style:{width:"80px",height:"80px"}}),h.jsxs(Ow,{children:[h.jsx(wu,{width:"200px",height:"28px"}),h.jsx(wu,{width:"150px",height:"16px"})]})]}),h.jsxs(Dw,{children:[h.jsx(wu,{width:"160px",height:"48px"}),h.jsx(wu,{width:"160px",height:"48px"})]})]}):p?h.jsxs(h.Fragment,{children:[h.jsxs($w,{children:[h.jsx(TB,{src:p.imageUrl,alt:p.name}),h.jsxs(Ow,{children:[h.jsx(jB,{children:p.name}),h.jsxs(AB,{children:[h.jsxs(EB,{children:["Código: ",p.code]}),h.jsxs(kB,{onClick:k,title:"Copiar código",$copied:_,children:[_?h.jsx(zR,{size:16}):h.jsx(DR,{size:16}),_&&h.jsx(RB,{children:"Copiado!"})]})]})]})]}),h.jsxs(Dw,{children:[h.jsxs(Kt,{variant:"secondary",size:"md",onClick:ae,children:[h.jsx(f6,{size:20}),"Editar"]}),h.jsxs(Kt,{variant:"primary",size:"md",onClick:B,children:[h.jsx(f5,{size:20}),"Check-in"]})]})]}):null}),h.jsxs(zB,{children:[h.jsx(MB,{layout:!0,initial:!1,animate:{x:u.x,width:u.width},transition:{type:"spring",stiffness:300,damping:30}}),h.jsxs(_w,{ref:s,$active:n==="messages",onClick:()=>r("messages"),children:[h.jsx(d5,{size:20}),"Check-ins"]}),h.jsxs(_w,{ref:c,$active:n==="ranking",onClick:()=>r("ranking"),children:[h.jsx(al,{size:20}),"Ranking de Membros"]})]}),h.jsx($B,{children:h.jsxs(oC,{mode:"wait",children:[n==="messages"&&h.jsx(OB,{initial:{opacity:0,x:-20},ref:a,animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:N?h.jsx(OT,{}):[...v].reverse().map(V=>{const I=V.userId===e?.id;return h.jsxs(DB,{$isCurrentUser:I,children:[h.jsx(gl,{name:V.userName,avatar:V.userAvatar,size:36}),h.jsxs(_B,{$isCurrentUser:I,children:[h.jsx(LB,{children:h.jsxs(NB,{children:[h.jsx(BB,{$isCurrentUser:I,children:V.userName}),h.jsx(UB,{$isCurrentUser:I,children:K(V.timestamp)})]})}),h.jsxs(VB,{children:[h.jsxs(PB,{$isCurrentUser:I,children:["Concluiu: ",V.workoutName]}),V.description&&h.jsx(HB,{$isCurrentUser:I,children:V.description}),V.imageUrl&&h.jsx(FB,{src:V.imageUrl,alt:"Check-in"})]})]})]},V.id)})},"messages"),n==="ranking"&&h.jsx(qB,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:O?h.jsxs(h.Fragment,{children:[h.jsx(id,{}),h.jsx(fg,{count:4})]}):h.jsxs(h.Fragment,{children:[h.jsx(nd,{topThree:he,formatScore:re,animated:!0}),h.jsx(dg,{members:z,formatScore:re,startPosition:4,animated:!0})]})},"ranking")]})}),h.jsx(dB,{isOpen:ee,onClose:()=>ie(!1),onSubmit:Z,workouts:w}),p&&h.jsx(bB,{isOpen:se,onClose:()=>le(!1),onSubmit:ne,onDelete:ce,guildData:{name:p.name,description:void 0,imageUrl:p.imageUrl}})]})},Vd=e=>new Promise(n=>setTimeout(n,e)),IB=(e,n)=>{const r=new Date;return e>r?"scheduled":(e<=r&&n>=r,"active")},ZB=async e=>{await Vd(800);const n=new Date;n.setDate(n.getDate()+7);const r=new Date;r.setDate(r.getDate()-3);const a=IB(r,n);return{id:e,name:"Torneio de Verão 2024",endDate:n,startDate:r,status:a}},JB=async e=>(await Vd(1e3),[{id:1,name:"Guerreiros do Código",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",score:125e3,memberCount:7},{id:2,name:"Dragões de Fogo",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-dragons",score:118e3,memberCount:8},{id:3,name:"Titãs do Aço",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-titans",score:102e3,memberCount:6},{id:4,name:"Lobos Solitários",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-wolves",score:95e3,memberCount:5},{id:5,name:"Fênix Renascida",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-phoenix",score:89e3,memberCount:7},{id:6,name:"Leões da Savana",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-lions",score:82e3,memberCount:6},{id:7,name:"Águias Voadoras",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-eagles",score:76e3,memberCount:5}]),WB=async e=>(await Vd(600),[{id:1,position:1,name:"Tênis Air Jordan 1 Low",imageUrl:"https://artwalk.vtexassets.com/arquivos/ids/471003/55355-8-161-1.jpg?v=638373804812600000"},{id:2,position:2,name:"Kit Fusion Whey Protein + Bcaa + Creatina",imageUrl:"https://cdn.dooca.store/246/products/srybt6gfnzv3gebzl1stcskrbxp1y4qhqtpg.jpg?v=1628278164"},{id:3,position:3,name:"Kit Whey 100% + Creatina Max Titanium",imageUrl:"https://images.tcdn.com.br/img/img_prod/632109/kit_whey_100_900g_creatina_300g_max_titanium_3188_1_f37b70466255a1e6f2ca0b0c171f57b5.jpg"}]),eU=async()=>(await Vd(800),[{id:1,name:"Guerreiros do Código",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-warriors",score:125e3,memberCount:7},{id:2,name:"Dragões de Fogo",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-dragons",score:118e3,memberCount:8},{id:3,name:"Titãs do Aço",imageUrl:"https://api.dicebear.com/7.x/identicon/svg?seed=guild-titans",score:102e3,memberCount:6}]),Lw=E.div`
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
`,tU=E.header`
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
`,nU=E.div`
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
`,iU=E.div`
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
`,rU=E.h1`
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
`,aU=E.span`
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
    font-weight: 500;

    @media (max-width: 48rem) {
        font-size: 0.875rem;
    }
`,oU=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
    padding: 3rem 2rem;
    text-align: center;
`,sU=E.h1`
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
`,lU=E.div`
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 0.875rem;
    }
`,cU=E.div`
    font-size: 1.5rem;
    color: white;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`,uU=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
    padding: 3rem 2rem;
    text-align: center;
`,dU=E.p`
    font-size: 1.25rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`,fU=E.h2`
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
`,hU=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    padding: 2rem 0;
    width: 100%;
`,mU=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    min-height: 400px;
    width: 100%;
`,pU=E.div`
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
`,Nw=E.button`
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    color: ${({$active:e,theme:n})=>e?"white":n.colors.text};
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
        color: ${({$active:e,theme:n})=>e?"white":n.colors.primary};
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`,gU=E(Ae.div)`
    position: absolute;
    top: -2px;
    bottom: -2px;
    right: -2px;
    left: 0;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    border-radius: 0.5rem;
    z-index: 0;
`,yU=E.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    min-height: 0;
`,Bw=E(Ae.div)`
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
`,xU=E(Ae.div)`
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
`,Uw=E.div`
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
`,bU=E.div`
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
`,vU=E.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 0.5rem;
    flex-shrink: 0;

    @media (max-width: 48rem) {
        width: 60px;
        height: 60px;
    }
`,Wm=E.div`
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
`;E.div`
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
`;E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({$position:e})=>e===1?2:e===2?1:3};
`;E.div`
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
`;E.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 150px;
    width: 100%;

    @media (max-width: 48rem) {
        max-width: 100px;
    }
`;E.div`
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
`;E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({$position:e})=>e===1?2:e===2?1:3};
`;E.div`
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
`;E.div`
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
`;const wU=E.div`
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
`;E.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    object-fit: contain;
    border-radius: 0.5rem;

    @media (max-width: 48rem) {
        max-width: 150px;
    }
`;const SU=E.h3`
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
`;E.div`
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
`;const Fr=E.div`
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
`;E(Fr)`
    border-radius: 0.5rem;
`;const ep=E.div`
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
`,CU=()=>{const{id:e}=xA(),n=e?parseInt(e,10):1,[r,a]=j.useState("ranking"),s=j.useRef(null),c=j.useRef(null),[u,f]=j.useState({x:0,width:0}),[p,g]=j.useState(null),[y,x]=j.useState([]),[v,C]=j.useState([]),[w,S]=j.useState(null),[A,R]=j.useState(!0),[O,$]=j.useState(!0),[N,P]=j.useState(!0),[_,L]=j.useState(!1),[ee,ie]=j.useState("");j.useEffect(()=>{const K=()=>{const re=r==="ranking"?s.current:c.current;re&&f({x:re.offsetLeft-4,width:re.offsetWidth+8.5})};return K(),window.addEventListener("resize",K),()=>window.removeEventListener("resize",K)},[r]),j.useEffect(()=>{!A&&p?.status==="active"&&setTimeout(()=>{const re=r==="ranking"?s.current:c.current;re&&f({x:re.offsetLeft-4,width:re.offsetWidth+8.5})},0)},[A,p?.status,r]),j.useEffect(()=>{(async()=>{R(!0);try{const re=await ZB(n);g(re)}catch(re){console.error("Erro ao carregar dados do torneio:",re)}finally{R(!1)}})()},[n]),j.useEffect(()=>{const K=async()=>{$(!0);try{const re=await JB(n);x(re)}catch(re){console.error("Erro ao carregar ranking:",re)}finally{$(!1)}};r==="ranking"&&p?.status==="active"&&K()},[r,n,p?.status]),j.useEffect(()=>{const K=async()=>{P(!0);try{const re=await WB(n);C(re)}catch(re){console.error("Erro ao carregar premiações:",re)}finally{P(!1)}};r==="prizes"&&p?.status==="active"&&K()},[r,n,p?.status]),j.useEffect(()=>{(async()=>{if(p?.status!=="active"){L(!0);try{const re=await eU();S(re)}catch(re){console.error("Erro ao carregar último pódio:",re)}finally{L(!1)}}})()},[p?.status]);const se=K=>{const re=new Date,he=K.getTime()-re.getTime();if(he<=0)return"Torneio encerrado";const z=Math.floor(he/(1e3*60*60*24)),V=Math.floor(he%(1e3*60*60*24)/(1e3*60*60)),I=Math.floor(he%(1e3*60*60)/(1e3*60));return z>0?`Termina em ${z} dia${z>1?"s":""} e ${V}h`:V>0?`Termina em ${V}h e ${I}min`:`Termina em ${I}min`},le=j.useCallback(K=>{const re=new Date,he=K.getTime()-re.getTime();if(he<=0)return"Torneio iniciado";const z=Math.floor(he/(1e3*60*60*24)),V=Math.floor(he%(1e3*60*60*24)/(1e3*60*60)),I=Math.floor(he%(1e3*60*60)/(1e3*60)),oe=Math.floor(he%(1e3*60)/1e3);return z>0?`${z} dia${z>1?"s":""}, ${V}h e ${I}min`:V>0?`${V}h, ${I}min e ${oe}s`:I>0?`${I}min e ${oe}s`:`${oe}s`},[]);j.useEffect(()=>{if(p?.status!=="scheduled"||!p.startDate){ie("");return}const K=()=>{ie(le(p.startDate))};K();const re=setInterval(K,1e3);return()=>clearInterval(re)},[p?.status,p?.startDate,le]);const k=K=>K.toLocaleString("pt-BR"),ae=y.slice(0,3).map(K=>({id:K.id,name:K.name,avatar:K.imageUrl,score:K.score})),ne=y.slice(3).map(K=>({id:K.id,name:K.name,avatar:K.imageUrl,score:K.score})),ce=w?.slice(0,3).map(K=>({id:K.id,name:K.name,avatar:K.imageUrl,score:K.score}))||[],B=p?.status==="active",Z=p?.status==="scheduled";return A?h.jsx(Lw,{children:h.jsx(mU,{children:h.jsx(OT,{size:60})})}):h.jsxs(Lw,{children:[B&&h.jsxs(h.Fragment,{children:[h.jsx(tU,{children:p&&h.jsx(nU,{children:h.jsxs(iU,{children:[h.jsx(rU,{children:p.name}),h.jsx(aU,{children:se(p.endDate)})]})})}),h.jsxs(pU,{children:[h.jsx(gU,{layout:!0,initial:!1,animate:{x:u.x,width:u.width},transition:{type:"spring",stiffness:300,damping:30}}),h.jsxs(Nw,{ref:s,$active:r==="ranking",onClick:()=>a("ranking"),children:[h.jsx(al,{size:20}),"Ranking de Guildas"]}),h.jsxs(Nw,{ref:c,$active:r==="prizes",onClick:()=>a("prizes"),children:[h.jsx(CR,{size:20}),"Premiações"]})]})]}),h.jsx(yU,{children:B?h.jsxs(oC,{mode:"wait",children:[r==="ranking"&&h.jsx(Bw,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:O?h.jsxs(h.Fragment,{children:[h.jsx(id,{}),h.jsx(fg,{count:4})]}):h.jsxs(h.Fragment,{children:[h.jsx(nd,{topThree:ae,formatScore:k,animated:!0}),h.jsx(dg,{members:ne,formatScore:k,startPosition:4,animated:!0})]})},"ranking"),r==="prizes"&&h.jsx(xU,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:N?h.jsxs(Uw,{children:[h.jsxs(Wm,{children:[h.jsx(Fr,{width:"50px",height:"24px"}),h.jsx(ep,{$position:1,style:{width:"80px",height:"80px"}}),h.jsx(Fr,{width:"200px",height:"20px",style:{flex:1}})]}),h.jsxs(Wm,{children:[h.jsx(Fr,{width:"50px",height:"24px"}),h.jsx(ep,{$position:2,style:{width:"80px",height:"80px"}}),h.jsx(Fr,{width:"200px",height:"20px",style:{flex:1}})]}),h.jsxs(Wm,{children:[h.jsx(Fr,{width:"50px",height:"24px"}),h.jsx(ep,{$position:3,style:{width:"80px",height:"80px"}}),h.jsx(Fr,{width:"200px",height:"20px",style:{flex:1}})]})]}):h.jsx(Uw,{children:v.map((K,re)=>h.jsxs(bU,{as:Ae.div,initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:re*.15,duration:.5},children:[h.jsxs(wU,{children:["#",K.position]}),h.jsx(vU,{src:K.imageUrl,alt:K.name}),h.jsx(SU,{children:K.name})]},K.id))})},"prizes")]}):Z?h.jsx(oU,{as:Ae.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:p&&h.jsxs(h.Fragment,{children:[h.jsx(sU,{children:p.name}),h.jsx(lU,{children:"Começa em:"}),h.jsx(cU,{children:ee||le(p.startDate)})]})}):h.jsx(Bw,{as:Ae.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:_?h.jsx(h.Fragment,{children:h.jsx(id,{})}):w&&w.length>0?h.jsxs(hU,{children:[h.jsx(fU,{children:"Últimos vencedores:"}),h.jsx(nd,{topThree:ce,formatScore:k,animated:!0})]}):h.jsx(uU,{children:h.jsx(dU,{children:"Nenhum torneio anterior encontrado"})})})})]})},TU=E.aside`
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
`,jU=E.div`
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
`,EU=E.img`
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
`,Vw=E.button`
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
`,AU=E.div`
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
`,kU=E.ul`
    list-style: none;
    padding: 1rem 0;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-height: 700px) {
        padding: 0.5rem 0;
    }
`,RU=E.li`
    margin-bottom: 0.5rem;

    @media (max-height: 700px) {
        margin-bottom: 0.25rem;
    }
`,zU=E(To)`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    color: ${({$isActive:e,theme:n})=>e?"white":n.colors.text};
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    background: ${({$isActive:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary})`:"transparent"};
    margin: 0 1rem;
    border-radius: 0.5rem;
    white-space: nowrap;

    svg {
        color: ${({$isActive:e})=>e?"white":"currentColor"};
        flex-shrink: 0;
    }

    &:hover {
        background: ${({$isActive:e,theme:n})=>e?`linear-gradient(135deg, ${n.colors.primary}, ${n.colors.secondary})`:`${n.colors.primary}22`};
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
`,MU=E.button`
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
`,$U=[{path:"/aulas",label:"Aulas",icon:h.jsx(ho,{size:20})},{path:"/treinos",label:"Treinos",icon:h.jsx(b0,{size:20})},{path:"/guilda",label:"Guilda",icon:h.jsx(mo,{size:20})},{path:"/torneio",label:"Torneio",icon:h.jsx(al,{size:20})},{path:"/ranking",label:"Ranking",icon:h.jsx(kR,{size:20})},{path:"/evolucao",label:"Evolução",icon:h.jsx(Vs,{size:20})}],OU=()=>{const[e,n]=j.useState(!1),r=Vi(),a=md(),{logout:s}=Ao(),c=()=>{s(),a("/")},u=()=>{n(!e)},f=()=>{n(!1)};return h.jsxs(h.Fragment,{children:[h.jsx(Vw,{onClick:u,children:h.jsx(JR,{size:24})}),h.jsx(AU,{$isOpen:e,onClick:f}),h.jsxs(TU,{$isOpen:e,children:[h.jsxs(jU,{children:[h.jsx(EU,{src:x0,alt:"ForgeFit"}),h.jsx(Vw,{onClick:u,className:"close",children:h.jsx(wd,{size:24})})]}),h.jsx(kU,{children:$U.map(p=>{const g=r.pathname===p.path||r.pathname.startsWith(p.path+"/");return h.jsx(RU,{children:h.jsxs(zU,{to:p.path,$isActive:g,onClick:f,children:[p.icon,h.jsx("span",{children:p.label})]})},p.path)})}),h.jsxs(MU,{onClick:c,children:[h.jsx(KR,{size:20}),h.jsx("span",{children:"Sair"})]})]})]})},DU=E.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({theme:e})=>e.colors.background};
    overflow-x: hidden;
    max-width: 100vw;
    width: 100%;
    position: relative;
    box-sizing: border-box;
`,_U=E.main`
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
`,LU=()=>h.jsxs(DU,{children:[h.jsx(OU,{}),h.jsx(_U,{children:h.jsx($A,{})})]}),NU=({children:e})=>{const{user:n,loading:r}=Ao();return r?h.jsx(a5,{}):n?h.jsx(h.Fragment,{children:e}):h.jsx(kS,{to:"/login",replace:!0})},BU=({children:e})=>{const{user:n,loading:r}=Ao();return r?h.jsx(a5,{}):n?h.jsx(kS,{to:"/aulas",replace:!0}):h.jsx(h.Fragment,{children:e})},UU=()=>h.jsx(ik,{children:h.jsxs(DA,{children:[h.jsx(Xn,{path:"/",element:h.jsx(lD,{})}),h.jsx(Xn,{path:"/login",element:h.jsx(BU,{children:h.jsx(bD,{})})}),h.jsxs(Xn,{element:h.jsx(NU,{children:h.jsx(LU,{})}),children:[h.jsx(Xn,{path:"/aulas",element:h.jsx(tN,{})}),h.jsx(Xn,{path:"/treinos",element:h.jsx("div",{style:{padding:"2rem",color:"white"},children:"Treinos em construção"})}),h.jsx(Xn,{path:"/torneio/",element:h.jsx(CU,{})}),h.jsx(Xn,{path:"/ranking",element:h.jsx(RN,{})}),h.jsx(Xn,{path:"/evolucao",element:h.jsx(VN,{})}),h.jsx(Xn,{path:"/guilda",element:h.jsx(iB,{})}),h.jsx(Xn,{path:"/guilda/:id",element:h.jsx(QB,{})})]})]})}),VU=new _4({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:1,staleTime:300*1e3}}});function PU(){return h.jsx(N4,{client:VU,children:h.jsxs(o4,{theme:B4,children:[h.jsx(U4,{}),h.jsx(F8,{children:h.jsx(UU,{})})]})})}lE.createRoot(document.getElementById("root")).render(h.jsx(j.StrictMode,{children:h.jsx(PU,{})}));
