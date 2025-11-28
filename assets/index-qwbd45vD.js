(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function Ay(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function wy(o){if(Object.prototype.hasOwnProperty.call(o,"__esModule"))return o;var e=o.default;if(typeof e=="function"){var i=function r(){var l=!1;try{l=this instanceof r}catch{}return l?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(o).forEach(function(r){var l=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(i,r,l.get?l:{enumerable:!0,get:function(){return o[r]}})}),i}var vd={exports:{}},Pl={};var ux;function Ry(){if(ux)return Pl;ux=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var p=null;if(f!==void 0&&(p=""+f),l.key!==void 0&&(p=""+l.key),"key"in l){f={};for(var m in l)m!=="key"&&(f[m]=l[m])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:p,ref:l!==void 0?l:null,props:f}}return Pl.Fragment=e,Pl.jsx=i,Pl.jsxs=i,Pl}var fx;function Cy(){return fx||(fx=1,vd.exports=Ry()),vd.exports}var We=Cy(),yd={exports:{}},Ct={};var hx;function Dy(){if(hx)return Ct;hx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),E=Symbol.iterator;function A(I){return I===null||typeof I!="object"?null:(I=E&&I[E]||I["@@iterator"],typeof I=="function"?I:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,T={};function M(I,re,we){this.props=I,this.context=re,this.refs=T,this.updater=we||U}M.prototype.isReactComponent={},M.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function X(){}X.prototype=M.prototype;function H(I,re,we){this.props=I,this.context=re,this.refs=T,this.updater=we||U}var q=H.prototype=new X;q.constructor=H,L(q,M.prototype),q.isPureReactComponent=!0;var Q=Array.isArray;function V(){}var k={H:null,A:null,T:null,S:null},ue=Object.prototype.hasOwnProperty;function F(I,re,we){var ze=we.ref;return{$$typeof:o,type:I,key:re,ref:ze!==void 0?ze:null,props:we}}function O(I,re){return F(I.type,re,I.props)}function K(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ae(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(we){return re[we]})}var le=/\/+/g;function Te(I,re){return typeof I=="object"&&I!==null&&I.key!=null?ae(""+I.key):re.toString(36)}function Me(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(V,V):(I.status="pending",I.then(function(re){I.status==="pending"&&(I.status="fulfilled",I.value=re)},function(re){I.status==="pending"&&(I.status="rejected",I.reason=re)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,re,we,ze,et){var me=typeof I;(me==="undefined"||me==="boolean")&&(I=null);var Se=!1;if(I===null)Se=!0;else switch(me){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(I.$$typeof){case o:case e:Se=!0;break;case b:return Se=I._init,B(Se(I._payload),re,we,ze,et)}}if(Se)return et=et(I),Se=ze===""?"."+Te(I,0):ze,Q(et)?(we="",Se!=null&&(we=Se.replace(le,"$&/")+"/"),B(et,re,we,"",function(ft){return ft})):et!=null&&(K(et)&&(et=O(et,we+(et.key==null||I&&I.key===et.key?"":(""+et.key).replace(le,"$&/")+"/")+Se)),re.push(et)),1;Se=0;var qe=ze===""?".":ze+":";if(Q(I))for(var lt=0;lt<I.length;lt++)ze=I[lt],me=qe+Te(ze,lt),Se+=B(ze,re,we,me,et);else if(lt=A(I),typeof lt=="function")for(I=lt.call(I),lt=0;!(ze=I.next()).done;)ze=ze.value,me=qe+Te(ze,lt++),Se+=B(ze,re,we,me,et);else if(me==="object"){if(typeof I.then=="function")return B(Me(I),re,we,ze,et);throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return Se}function $(I,re,we){if(I==null)return I;var ze=[],et=0;return B(I,ze,"","",function(me){return re.call(we,me,et++)}),ze}function te(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(we){(I._status===0||I._status===-1)&&(I._status=1,I._result=we)},function(we){(I._status===0||I._status===-1)&&(I._status=2,I._result=we)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var Re=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},ce={map:$,forEach:function(I,re,we){$(I,function(){re.apply(this,arguments)},we)},count:function(I){var re=0;return $(I,function(){re++}),re},toArray:function(I){return $(I,function(re){return re})||[]},only:function(I){if(!K(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Ct.Activity=S,Ct.Children=ce,Ct.Component=M,Ct.Fragment=i,Ct.Profiler=l,Ct.PureComponent=H,Ct.StrictMode=r,Ct.Suspense=_,Ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,Ct.__COMPILER_RUNTIME={__proto__:null,c:function(I){return k.H.useMemoCache(I)}},Ct.cache=function(I){return function(){return I.apply(null,arguments)}},Ct.cacheSignal=function(){return null},Ct.cloneElement=function(I,re,we){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var ze=L({},I.props),et=I.key;if(re!=null)for(me in re.key!==void 0&&(et=""+re.key),re)!ue.call(re,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&re.ref===void 0||(ze[me]=re[me]);var me=arguments.length-2;if(me===1)ze.children=we;else if(1<me){for(var Se=Array(me),qe=0;qe<me;qe++)Se[qe]=arguments[qe+2];ze.children=Se}return F(I.type,et,ze)},Ct.createContext=function(I){return I={$$typeof:p,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},Ct.createElement=function(I,re,we){var ze,et={},me=null;if(re!=null)for(ze in re.key!==void 0&&(me=""+re.key),re)ue.call(re,ze)&&ze!=="key"&&ze!=="__self"&&ze!=="__source"&&(et[ze]=re[ze]);var Se=arguments.length-2;if(Se===1)et.children=we;else if(1<Se){for(var qe=Array(Se),lt=0;lt<Se;lt++)qe[lt]=arguments[lt+2];et.children=qe}if(I&&I.defaultProps)for(ze in Se=I.defaultProps,Se)et[ze]===void 0&&(et[ze]=Se[ze]);return F(I,me,et)},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(I){return{$$typeof:m,render:I}},Ct.isValidElement=K,Ct.lazy=function(I){return{$$typeof:b,_payload:{_status:-1,_result:I},_init:te}},Ct.memo=function(I,re){return{$$typeof:g,type:I,compare:re===void 0?null:re}},Ct.startTransition=function(I){var re=k.T,we={};k.T=we;try{var ze=I(),et=k.S;et!==null&&et(we,ze),typeof ze=="object"&&ze!==null&&typeof ze.then=="function"&&ze.then(V,Re)}catch(me){Re(me)}finally{re!==null&&we.types!==null&&(re.types=we.types),k.T=re}},Ct.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},Ct.use=function(I){return k.H.use(I)},Ct.useActionState=function(I,re,we){return k.H.useActionState(I,re,we)},Ct.useCallback=function(I,re){return k.H.useCallback(I,re)},Ct.useContext=function(I){return k.H.useContext(I)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(I,re){return k.H.useDeferredValue(I,re)},Ct.useEffect=function(I,re){return k.H.useEffect(I,re)},Ct.useEffectEvent=function(I){return k.H.useEffectEvent(I)},Ct.useId=function(){return k.H.useId()},Ct.useImperativeHandle=function(I,re,we){return k.H.useImperativeHandle(I,re,we)},Ct.useInsertionEffect=function(I,re){return k.H.useInsertionEffect(I,re)},Ct.useLayoutEffect=function(I,re){return k.H.useLayoutEffect(I,re)},Ct.useMemo=function(I,re){return k.H.useMemo(I,re)},Ct.useOptimistic=function(I,re){return k.H.useOptimistic(I,re)},Ct.useReducer=function(I,re,we){return k.H.useReducer(I,re,we)},Ct.useRef=function(I){return k.H.useRef(I)},Ct.useState=function(I){return k.H.useState(I)},Ct.useSyncExternalStore=function(I,re,we){return k.H.useSyncExternalStore(I,re,we)},Ct.useTransition=function(){return k.H.useTransition()},Ct.version="19.2.0",Ct}var dx;function Kp(){return dx||(dx=1,yd.exports=Dy()),yd.exports}var Ze=Kp(),Sd={exports:{}},Fl={},bd={exports:{}},Md={};var px;function Uy(){return px||(px=1,(function(o){function e(B,$){var te=B.length;B.push($);e:for(;0<te;){var Re=te-1>>>1,ce=B[Re];if(0<l(ce,$))B[Re]=$,B[te]=ce,te=Re;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var $=B[0],te=B.pop();if(te!==$){B[0]=te;e:for(var Re=0,ce=B.length,I=ce>>>1;Re<I;){var re=2*(Re+1)-1,we=B[re],ze=re+1,et=B[ze];if(0>l(we,te))ze<ce&&0>l(et,we)?(B[Re]=et,B[ze]=te,Re=ze):(B[Re]=we,B[re]=te,Re=re);else if(ze<ce&&0>l(et,te))B[Re]=et,B[ze]=te,Re=ze;else break e}}return $}function l(B,$){var te=B.sortIndex-$.sortIndex;return te!==0?te:B.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var p=Date,m=p.now();o.unstable_now=function(){return p.now()-m}}var _=[],g=[],b=1,S=null,E=3,A=!1,U=!1,L=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function q(B){for(var $=i(g);$!==null;){if($.callback===null)r(g);else if($.startTime<=B)r(g),$.sortIndex=$.expirationTime,e(_,$);else break;$=i(g)}}function Q(B){if(L=!1,q(B),!U)if(i(_)!==null)U=!0,V||(V=!0,ae());else{var $=i(g);$!==null&&Me(Q,$.startTime-B)}}var V=!1,k=-1,ue=5,F=-1;function O(){return T?!0:!(o.unstable_now()-F<ue)}function K(){if(T=!1,V){var B=o.unstable_now();F=B;var $=!0;try{e:{U=!1,L&&(L=!1,X(k),k=-1),A=!0;var te=E;try{t:{for(q(B),S=i(_);S!==null&&!(S.expirationTime>B&&O());){var Re=S.callback;if(typeof Re=="function"){S.callback=null,E=S.priorityLevel;var ce=Re(S.expirationTime<=B);if(B=o.unstable_now(),typeof ce=="function"){S.callback=ce,q(B),$=!0;break t}S===i(_)&&r(_),q(B)}else r(_);S=i(_)}if(S!==null)$=!0;else{var I=i(g);I!==null&&Me(Q,I.startTime-B),$=!1}}break e}finally{S=null,E=te,A=!1}$=void 0}}finally{$?ae():V=!1}}}var ae;if(typeof H=="function")ae=function(){H(K)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Te=le.port2;le.port1.onmessage=K,ae=function(){Te.postMessage(null)}}else ae=function(){M(K,0)};function Me(B,$){k=M(function(){B(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(B){switch(E){case 1:case 2:case 3:var $=3;break;default:$=E}var te=E;E=$;try{return B()}finally{E=te}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=E;E=B;try{return $()}finally{E=te}},o.unstable_scheduleCallback=function(B,$,te){var Re=o.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Re+te:Re):te=Re,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=te+ce,B={id:b++,callback:$,priorityLevel:B,startTime:te,expirationTime:ce,sortIndex:-1},te>Re?(B.sortIndex=te,e(g,B),i(_)===null&&B===i(g)&&(L?(X(k),k=-1):L=!0,Me(Q,te-Re))):(B.sortIndex=ce,e(_,B),U||A||(U=!0,V||(V=!0,ae()))),B},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(B){var $=E;return function(){var te=E;E=$;try{return B.apply(this,arguments)}finally{E=te}}}})(Md)),Md}var mx;function Ly(){return mx||(mx=1,bd.exports=Uy()),bd.exports}var Ed={exports:{}},ri={};var gx;function Ny(){if(gx)return ri;gx=1;var o=Kp();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function f(_,g,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:_,containerInfo:g,implementation:b}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ri.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ri.createPortal=function(_,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return f(_,g,null,b)},ri.flushSync=function(_){var g=p.T,b=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=g,r.p=b,r.d.f()}},ri.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},ri.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},ri.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var b=g.as,S=m(b,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:A}):b==="script"&&r.d.X(_,{crossOrigin:S,integrity:E,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ri.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=m(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(_)},ri.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,S=m(b,g.crossOrigin);r.d.L(_,b,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ri.preloadModule=function(_,g){if(typeof _=="string")if(g){var b=m(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(_)},ri.requestFormReset=function(_){r.d.r(_)},ri.unstable_batchedUpdates=function(_,g){return _(g)},ri.useFormState=function(_,g,b){return p.H.useFormState(_,g,b)},ri.useFormStatus=function(){return p.H.useHostTransitionStatus()},ri.version="19.2.0",ri}var xx;function Oy(){if(xx)return Ed.exports;xx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ed.exports=Ny(),Ed.exports}var _x;function Py(){if(_x)return Fl;_x=1;var o=Ly(),e=Kp(),i=Oy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function p(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return _(u),t;if(h===s)return _(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=h;else{for(var v=!1,D=u.child;D;){if(D===a){v=!0,a=u,s=h;break}if(D===s){v=!0,s=u,a=h;break}D=D.sibling}if(!v){for(D=h.child;D;){if(D===a){v=!0,a=h,s=u;break}if(D===s){v=!0,s=h,a=u;break}D=D.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function b(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=b(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,E=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function Te(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case Q:return"Suspense";case V:return"SuspenseList";case F:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case H:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:Te(t.type)||"Memo";case ue:n=t._payload,t=t._init;try{return Te(t(n))}catch{}}return null}var Me=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},Re=[],ce=-1;function I(t){return{current:t}}function re(t){0>ce||(t.current=Re[ce],Re[ce]=null,ce--)}function we(t,n){ce++,Re[ce]=t.current,t.current=n}var ze=I(null),et=I(null),me=I(null),Se=I(null);function qe(t,n){switch(we(me,n),we(et,t),we(ze,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ng(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ng(n),t=Og(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}re(ze),we(ze,t)}function lt(){re(ze),re(et),re(me)}function ft(t){t.memoizedState!==null&&we(Se,t);var n=ze.current,a=Og(n,t.type);n!==a&&(we(et,t),we(ze,a))}function yt(t){et.current===t&&(re(ze),re(et)),Se.current===t&&(re(Se),Ul._currentValue=te)}var rn,Tt;function Ot(t){if(rn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);rn=n&&n[1]||"",Tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+t+Tt}var Y=!1;function Et(t,n){if(!t||Y)return"";Y=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ne=function(){throw Error()};if(Object.defineProperty(Ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ne,[])}catch(ye){var ge=ye}Reflect.construct(t,[],Ne)}else{try{Ne.call()}catch(ye){ge=ye}t.call(Ne.prototype)}}else{try{throw Error()}catch(ye){ge=ye}(Ne=t())&&typeof Ne.catch=="function"&&Ne.catch(function(){})}}catch(ye){if(ye&&ge&&typeof ye.stack=="string")return[ye.stack,ge.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),v=h[0],D=h[1];if(v&&D){var W=v.split(`
`),de=D.split(`
`);for(u=s=0;s<W.length&&!W[s].includes("DetermineComponentFrameRoot");)s++;for(;u<de.length&&!de[u].includes("DetermineComponentFrameRoot");)u++;if(s===W.length||u===de.length)for(s=W.length-1,u=de.length-1;1<=s&&0<=u&&W[s]!==de[u];)u--;for(;1<=s&&0<=u;s--,u--)if(W[s]!==de[u]){if(s!==1||u!==1)do if(s--,u--,0>u||W[s]!==de[u]){var Ae=`
`+W[s].replace(" at new "," at ");return t.displayName&&Ae.includes("<anonymous>")&&(Ae=Ae.replace("<anonymous>",t.displayName)),Ae}while(1<=s&&0<=u);break}}}finally{Y=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ot(a):""}function Ut(t,n){switch(t.tag){case 26:case 27:case 5:return Ot(t.type);case 16:return Ot("Lazy");case 13:return t.child!==n&&n!==null?Ot("Suspense Fallback"):Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 15:return Et(t.type,!1);case 11:return Et(t.type.render,!1);case 1:return Et(t.type,!0);case 31:return Ot("Activity");default:return""}}function Kt(t){try{var n="",a=null;do n+=Ut(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var at=Object.prototype.hasOwnProperty,nn=o.unstable_scheduleCallback,pe=o.unstable_cancelCallback,Ee=o.unstable_shouldYield,P=o.unstable_requestPaint,w=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,be=o.unstable_ImmediatePriority,De=o.unstable_UserBlockingPriority,ee=o.unstable_NormalPriority,Ie=o.unstable_LowPriority,Ge=o.unstable_IdlePriority,ht=o.log,Be=o.unstable_setDisableYieldValue,Ue=null,Oe=null;function tt(t){if(typeof ht=="function"&&Be(t),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(Ue,t)}catch{}}var it=Math.clz32?Math.clz32:j,je=Math.log,vt=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(je(t)/vt|0)|0}var Ye=256,ke=262144,Xe=4194304;function Pe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Le(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,h=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var D=s&134217727;return D!==0?(s=D&~h,s!==0?u=Pe(s):(v&=D,v!==0?u=Pe(v):a||(a=D&~t,a!==0&&(u=Pe(a))))):(D=s&~h,D!==0?u=Pe(D):v!==0?u=Pe(v):a||(a=s&~t,a!==0&&(u=Pe(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Mt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function st(){var t=Xe;return Xe<<=1,(Xe&62914560)===0&&(Xe=4194304),t}function Qt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Yn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,n,a,s,u,h){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var D=t.entanglements,W=t.expirationTimes,de=t.hiddenUpdates;for(a=v&~a;0<a;){var Ae=31-it(a),Ne=1<<Ae;D[Ae]=0,W[Ae]=-1;var ge=de[Ae];if(ge!==null)for(de[Ae]=null,Ae=0;Ae<ge.length;Ae++){var ye=ge[Ae];ye!==null&&(ye.lane&=-536870913)}a&=~Ne}s!==0&&Ts(t,s,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(v&~n))}function Ts(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-it(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Gr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-it(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function kr(t,n){var a=n&-n;return a=(a&42)!==0?1:ci(a),(a&(t.suspendedLanes|n))!==0?0:a}function ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function R(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Sa(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:ix(t.type))}function Ht(t,n){var a=$.p;try{return $.p=t,n()}finally{$.p=a}}var ui=Math.random().toString(36).slice(2),En="__reactFiber$"+ui,yn="__reactProps$"+ui,ni="__reactContainer$"+ui,tr="__reactEvents$"+ui,Vo="__reactListeners$"+ui,Go="__reactHandles$"+ui,As="__reactResources$"+ui,ba="__reactMarker$"+ui;function Xr(t){delete t[En],delete t[yn],delete t[tr],delete t[Vo],delete t[Go]}function la(t){var n=t[En];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ni]||a[En]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[En])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function N(t){if(t=t[En]||t[ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ie(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function _e(t){var n=t[As];return n||(n=t[As]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fe(t){t[ba]=!0}var oe=new Set,Ve={};function He(t,n){Qe(t,n),Qe(t+"Capture",n)}function Qe(t,n){for(Ve[t]=n,t=0;t<n.length;t++)oe.add(n[t])}var Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gt={},_t={};function ot(t){return at.call(_t,t)?!0:at.call(gt,t)?!1:Je.test(t)?_t[t]=!0:(gt[t]=!0,!1)}function Rt(t,n,a){if(ot(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Wt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Jt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,h=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,h.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function sn(t){if(!t._valueTracker){var n=zt(t)?"checked":"value";t._valueTracker=dt(t,n,""+t[n])}}function It(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=zt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function cn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pi=/[\n"\\]/g;function un(t){return t.replace(Pi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ji(t,n,a,s,u,h,v,D){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Vt(n)):t.value!==""+Vt(n)&&(t.value=""+Vt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,v,Vt(n)):a!=null?Tn(t,v,Vt(a)):s!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+Vt(D):t.removeAttribute("name")}function At(t,n,a,s,u,h,v,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){sn(t);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,D||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=D?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),sn(t)}function Tn(t,n,a){n==="number"&&cn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Un(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pn(t,n,a){if(n!=null&&(n=""+Vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Vt(a):""}function Gn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Me(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Vt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),sn(t)}function Fi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var mi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ko(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||mi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xo(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ko(t,u,s)}else for(var h in n)n.hasOwnProperty(h)&&ko(t,h,n[h])}function ws(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rs(t){return rf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var Wo=null;function qo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,Ki=null;function Yo(t){var n=N(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ji(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[yn]||null;if(!u)throw Error(r(90));ji(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&It(s)}break e;case"textarea":Pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Un(t,!!a.multiple,n,!1)}}}var Cs=!1;function $l(t,n,a){if(Cs)return t(n,a);Cs=!0;try{var s=t(n);return s}finally{if(Cs=!1,(nr!==null||Ki!==null)&&(jc(),nr&&(n=nr,t=Ki,Ki=nr=null,Yo(n),t)))for(n=0;n<t.length;n++)Yo(t[n])}}function Wr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=!1;if(Qi)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){jo=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{jo=!1}var Ji=null,Zo=null,Ds=null;function ec(){if(Ds)return Ds;var t,n=Zo,a=n.length,s,u="value"in Ji?Ji.value:Ji.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[h-s];s++);return Ds=u.slice(t,1<s?1-s:void 0)}function Us(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ls(){return!0}function tc(){return!1}function Ln(t){function n(a,s,u,h,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ls:tc,this.isPropagationStopped=tc,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),n}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qr=Ln(Ma),Yr=S({},Ma,{view:0,detail:0}),sf=Ln(Yr),Ko,Qo,jr,Ns=S({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jr&&(jr&&t.type==="mousemove"?(Ko=t.screenX-jr.screenX,Qo=t.screenY-jr.screenY):Qo=Ko=0,jr=t),Ko)},movementY:function(t){return"movementY"in t?t.movementY:Qo}}),nc=Ln(Ns),of=S({},Ns,{dataTransfer:0}),lf=Ln(of),cf=S({},Yr,{relatedTarget:0}),Os=Ln(cf),Ps=S({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Ln(Ps),ca=S({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ff=Ln(ca),hf=S({},Ma,{data:0}),Fs=Ln(hf),ic={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jo(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=pf[t])?!!n[t]:!1}function Zr(){return Jo}var mf=S({},Yr,{key:function(t){if(t.key){var n=ic[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?df[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zr,charCode:function(t){return t.type==="keypress"?Us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ac=Ln(mf),gf=S({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=Ln(gf),xf=S({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zr}),_f=Ln(xf),vf=S({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),yf=Ln(vf),Sf=S({},Ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=Ln(Sf),Mf=S({},Ma,{newState:0,oldState:0}),Ef=Ln(Mf),Tf=[9,13,27,32],$o=Qi&&"CompositionEvent"in window,Kr=null;Qi&&"documentMode"in document&&(Kr=document.documentMode);var Af=Qi&&"TextEvent"in window&&!Kr,sc=Qi&&(!$o||Kr&&8<Kr&&11>=Kr),oc=" ",zs=!1;function lc(t,n){switch(t){case"keyup":return Tf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function wf(t,n){switch(t){case"compositionend":return cc(n);case"keypress":return n.which!==32?null:(zs=!0,oc);case"textInput":return t=n.data,t===oc&&zs?null:t;default:return null}}function Rf(t,n){if(ar)return t==="compositionend"||!$o&&lc(t,n)?(t=ec(),Ds=Zo=Ji=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sc&&n.locale!=="ko"?null:n.data;default:return null}}var Bs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Bs[t.type]:n==="textarea"}function fc(t,n,a,s){nr?Ki?Ki.push(s):Ki=[s]:nr=s,n=tu(n,"onChange"),0<n.length&&(a=new qr("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var rr=null,Qr=null;function Cf(t){wg(t,0)}function Is(t){var n=ie(t);if(It(n))return t}function Hs(t,n){if(t==="change")return n}var hc=!1;if(Qi){var Ea;if(Qi){var el="oninput"in document;if(!el){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),el=typeof dc.oninput=="function"}Ea=el}else Ea=!1;hc=Ea&&(!document.documentMode||9<document.documentMode)}function pc(){rr&&(rr.detachEvent("onpropertychange",mc),Qr=rr=null)}function mc(t){if(t.propertyName==="value"&&Is(Qr)){var n=[];fc(n,Qr,t,qo(t)),$l(Cf,n)}}function Df(t,n,a){t==="focusin"?(pc(),rr=n,Qr=a,rr.attachEvent("onpropertychange",mc)):t==="focusout"&&pc()}function Uf(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Is(Qr)}function Lf(t,n){if(t==="click")return Is(n)}function Nf(t,n){if(t==="input"||t==="change")return Is(n)}function Of(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:Of;function Jr(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!at.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function gc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xc(t,n){var a=gc(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gc(a)}}function Fn(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fn(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tl(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=cn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=cn(t.document)}return n}function $r(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $i=Qi&&"documentMode"in document&&11>=document.documentMode,Ta=null,Vs=null,sr=null,or=!1;function nl(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;or||Ta==null||Ta!==cn(s)||(s=Ta,"selectionStart"in s&&$r(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),sr&&Jr(sr,s)||(sr=s,s=tu(Vs,"onSelect"),0<s.length&&(n=new qr("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ta)))}function ua(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var c={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},d={},x={};Qi&&(x=document.createElement("div").style,"AnimationEvent"in window||(delete c.animationend.animation,delete c.animationiteration.animation,delete c.animationstart.animation),"TransitionEvent"in window||delete c.transitionend.transition);function y(t){if(d[t])return d[t];if(!c[t])return t;var n=c[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in x)return d[t]=n[a];return t}var C=y("animationend"),z=y("animationiteration"),G=y("animationstart"),Z=y("transitionrun"),ve=y("transitionstart"),Fe=y("transitioncancel"),Ke=y("transitionend"),ct=new Map,pt="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pt.push("scrollEnd");function nt(t,n){ct.set(t,n),He(n,[t])}var St=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Lt=[],bn=0,xn=0;function ii(){for(var t=bn,n=xn=bn=0;n<t;){var a=Lt[n];Lt[n++]=null;var s=Lt[n];Lt[n++]=null;var u=Lt[n];Lt[n++]=null;var h=Lt[n];if(Lt[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}h!==0&&wa(a,u,h)}}function ai(t,n,a,s){Lt[bn++]=t,Lt[bn++]=n,Lt[bn++]=a,Lt[bn++]=s,xn|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Aa(t,n,a,s){return ai(t,n,a,s),An(t)}function jn(t,n){return ai(t,null,null,n),An(t)}function wa(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-it(a),t=h.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),h):null}function An(t){if(50<El)throw El=0,kh=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function cv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,n,a,s){return new cv(t,n,a,s)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ra(t,n){var a=t.alternate;return a===null?(a=Ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function cm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _c(t,n,a,s,u,h){var v=0;if(s=t,typeof t=="function")Pf(t)&&(v=1);else if(typeof t=="string")v=py(t,a,ze.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case F:return t=Ei(31,a,n,u),t.elementType=F,t.lanes=h,t;case L:return es(a.children,u,h,n);case T:v=8,u|=24;break;case M:return t=Ei(12,a,n,u|2),t.elementType=M,t.lanes=h,t;case Q:return t=Ei(13,a,n,u),t.elementType=Q,t.lanes=h,t;case V:return t=Ei(19,a,n,u),t.elementType=V,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:v=10;break e;case X:v=9;break e;case q:v=11;break e;case k:v=14;break e;case ue:v=16,s=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Ei(v,a,n,u),n.elementType=t,n.type=s,n.lanes=h,n}function es(t,n,a,s){return t=Ei(7,t,s,n),t.lanes=a,t}function Ff(t,n,a){return t=Ei(6,t,null,n),t.lanes=a,t}function um(t){var n=Ei(18,null,null,0);return n.stateNode=t,n}function zf(t,n,a){return n=Ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var fm=new WeakMap;function zi(t,n){if(typeof t=="object"&&t!==null){var a=fm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Kt(n)},fm.set(t,n),n)}return{value:t,source:n,stack:Kt(n)}}var ks=[],Xs=0,vc=null,il=0,Bi=[],Ii=0,lr=null,fa=1,ha="";function Ca(t,n){ks[Xs++]=il,ks[Xs++]=vc,vc=t,il=n}function hm(t,n,a){Bi[Ii++]=fa,Bi[Ii++]=ha,Bi[Ii++]=lr,lr=t;var s=fa;t=ha;var u=32-it(s)-1;s&=~(1<<u),a+=1;var h=32-it(n)+u;if(30<h){var v=u-u%5;h=(s&(1<<v)-1).toString(32),s>>=v,u-=v,fa=1<<32-it(n)+u|a<<u|s,ha=h+t}else fa=1<<h|a<<u|s,ha=t}function Bf(t){t.return!==null&&(Ca(t,1),hm(t,1,0))}function If(t){for(;t===vc;)vc=ks[--Xs],ks[Xs]=null,il=ks[--Xs],ks[Xs]=null;for(;t===lr;)lr=Bi[--Ii],Bi[Ii]=null,ha=Bi[--Ii],Bi[Ii]=null,fa=Bi[--Ii],Bi[Ii]=null}function dm(t,n){Bi[Ii++]=fa,Bi[Ii++]=ha,Bi[Ii++]=lr,fa=n.id,ha=n.overflow,lr=t}var Qn=null,_n=null,jt=!1,cr=null,Hi=!1,Hf=Error(r(519));function ur(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw al(zi(n,t)),Hf}function pm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[En]=t,n[yn]=s,a){case"dialog":kt("cancel",n),kt("close",n);break;case"iframe":case"object":case"embed":kt("load",n);break;case"video":case"audio":for(a=0;a<Al.length;a++)kt(Al[a],n);break;case"source":kt("error",n);break;case"img":case"image":case"link":kt("error",n),kt("load",n);break;case"details":kt("toggle",n);break;case"input":kt("invalid",n),At(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":kt("invalid",n);break;case"textarea":kt("invalid",n),Gn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ug(n.textContent,a)?(s.popover!=null&&(kt("beforetoggle",n),kt("toggle",n)),s.onScroll!=null&&kt("scroll",n),s.onScrollEnd!=null&&kt("scrollend",n),s.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||ur(t,!0)}function mm(t){for(Qn=t.return;Qn;)switch(Qn.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Qn=Qn.return}}function Ws(t){if(t!==Qn)return!1;if(!jt)return mm(t),jt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&_n&&ur(t),mm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));_n=Hg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));_n=Hg(t)}else n===27?(n=_n,Er(t.type)?(t=cd,cd=null,_n=t):_n=n):_n=Qn?Gi(t.stateNode.nextSibling):null;return!0}function ts(){_n=Qn=null,jt=!1}function Vf(){var t=cr;return t!==null&&(vi===null?vi=t:vi.push.apply(vi,t),cr=null),t}function al(t){cr===null?cr=[t]:cr.push(t)}var Gf=I(null),ns=null,Da=null;function fr(t,n,a){we(Gf,n._currentValue),n._currentValue=a}function Ua(t){t._currentValue=Gf.current,re(Gf)}function kf(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Xf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var v=u.child;h=h.firstContext;e:for(;h!==null;){var D=h;h=u;for(var W=0;W<n.length;W++)if(D.context===n[W]){h.lanes|=a,D=h.alternate,D!==null&&(D.lanes|=a),kf(h.return,a,t),s||(v=null);break e}h=D.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),kf(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function qs(t,n,a,s){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var D=u.type;fi(u.pendingProps.value,v.value)||(t!==null?t.push(D):t=[D])}}else if(u===Se.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}u=u.return}t!==null&&Xf(n,t,a,s),n.flags|=262144}function yc(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function is(t){ns=t,Da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Jn(t){return gm(ns,t)}function Sc(t,n){return ns===null&&is(t),gm(t,n)}function gm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Da===null){if(t===null)throw Error(r(308));Da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Da=Da.next=n;return a}var uv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},fv=o.unstable_scheduleCallback,hv=o.unstable_NormalPriority,zn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wf(){return{controller:new uv,data:new Map,refCount:0}}function rl(t){t.refCount--,t.refCount===0&&fv(hv,function(){t.controller.abort()})}var sl=null,qf=0,Ys=0,js=null;function dv(t,n){if(sl===null){var a=sl=[];qf=0,Ys=Zh(),js={status:"pending",value:void 0,then:function(s){a.push(s)}}}return qf++,n.then(xm,xm),n}function xm(){if(--qf===0&&sl!==null){js!==null&&(js.status="fulfilled");var t=sl;sl=null,Ys=0,js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function pv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var _m=B.S;B.S=function(t,n){tg=w(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dv(t,n),_m!==null&&_m(t,n)};var as=I(null);function Yf(){var t=as.current;return t!==null?t:gn.pooledCache}function bc(t,n){n===null?we(as,as.current):we(as,n.pool)}function vm(){var t=Yf();return t===null?null:{parent:zn._currentValue,pool:t}}var Zs=Error(r(460)),jf=Error(r(474)),Mc=Error(r(542)),Ec={then:function(){}};function ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mm(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=gn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mm(t),t}throw ss=n,Zs}}function rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ss=a,Zs):a}}var ss=null;function bm(){if(ss===null)throw Error(r(459));var t=ss;return ss=null,t}function Mm(t){if(t===Zs||t===Mc)throw Error(r(483))}var Ks=null,ol=0;function Tc(t){var n=ol;return ol+=1,Ks===null&&(Ks=[]),Sm(Ks,t,n)}function ll(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ac(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Em(t){function n(se,J){if(t){var he=se.deletions;he===null?(se.deletions=[J],se.flags|=16):he.push(J)}}function a(se,J){if(!t)return null;for(;J!==null;)n(se,J),J=J.sibling;return null}function s(se){for(var J=new Map;se!==null;)se.key!==null?J.set(se.key,se):J.set(se.index,se),se=se.sibling;return J}function u(se,J){return se=Ra(se,J),se.index=0,se.sibling=null,se}function h(se,J,he){return se.index=he,t?(he=se.alternate,he!==null?(he=he.index,he<J?(se.flags|=67108866,J):he):(se.flags|=67108866,J)):(se.flags|=1048576,J)}function v(se){return t&&se.alternate===null&&(se.flags|=67108866),se}function D(se,J,he,Ce){return J===null||J.tag!==6?(J=Ff(he,se.mode,Ce),J.return=se,J):(J=u(J,he),J.return=se,J)}function W(se,J,he,Ce){var xt=he.type;return xt===L?Ae(se,J,he.props.children,Ce,he.key):J!==null&&(J.elementType===xt||typeof xt=="object"&&xt!==null&&xt.$$typeof===ue&&rs(xt)===J.type)?(J=u(J,he.props),ll(J,he),J.return=se,J):(J=_c(he.type,he.key,he.props,null,se.mode,Ce),ll(J,he),J.return=se,J)}function de(se,J,he,Ce){return J===null||J.tag!==4||J.stateNode.containerInfo!==he.containerInfo||J.stateNode.implementation!==he.implementation?(J=zf(he,se.mode,Ce),J.return=se,J):(J=u(J,he.children||[]),J.return=se,J)}function Ae(se,J,he,Ce,xt){return J===null||J.tag!==7?(J=es(he,se.mode,Ce,xt),J.return=se,J):(J=u(J,he),J.return=se,J)}function Ne(se,J,he){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=Ff(""+J,se.mode,he),J.return=se,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case A:return he=_c(J.type,J.key,J.props,null,se.mode,he),ll(he,J),he.return=se,he;case U:return J=zf(J,se.mode,he),J.return=se,J;case ue:return J=rs(J),Ne(se,J,he)}if(Me(J)||ae(J))return J=es(J,se.mode,he,null),J.return=se,J;if(typeof J.then=="function")return Ne(se,Tc(J),he);if(J.$$typeof===H)return Ne(se,Sc(se,J),he);Ac(se,J)}return null}function ge(se,J,he,Ce){var xt=J!==null?J.key:null;if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return xt!==null?null:D(se,J,""+he,Ce);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case A:return he.key===xt?W(se,J,he,Ce):null;case U:return he.key===xt?de(se,J,he,Ce):null;case ue:return he=rs(he),ge(se,J,he,Ce)}if(Me(he)||ae(he))return xt!==null?null:Ae(se,J,he,Ce,null);if(typeof he.then=="function")return ge(se,J,Tc(he),Ce);if(he.$$typeof===H)return ge(se,J,Sc(se,he),Ce);Ac(se,he)}return null}function ye(se,J,he,Ce,xt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number"||typeof Ce=="bigint")return se=se.get(he)||null,D(J,se,""+Ce,xt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case A:return se=se.get(Ce.key===null?he:Ce.key)||null,W(J,se,Ce,xt);case U:return se=se.get(Ce.key===null?he:Ce.key)||null,de(J,se,Ce,xt);case ue:return Ce=rs(Ce),ye(se,J,he,Ce,xt)}if(Me(Ce)||ae(Ce))return se=se.get(he)||null,Ae(J,se,Ce,xt,null);if(typeof Ce.then=="function")return ye(se,J,he,Tc(Ce),xt);if(Ce.$$typeof===H)return ye(se,J,he,Sc(J,Ce),xt);Ac(J,Ce)}return null}function ut(se,J,he,Ce){for(var xt=null,$t=null,mt=J,Pt=J=0,Yt=null;mt!==null&&Pt<he.length;Pt++){mt.index>Pt?(Yt=mt,mt=null):Yt=mt.sibling;var en=ge(se,mt,he[Pt],Ce);if(en===null){mt===null&&(mt=Yt);break}t&&mt&&en.alternate===null&&n(se,mt),J=h(en,J,Pt),$t===null?xt=en:$t.sibling=en,$t=en,mt=Yt}if(Pt===he.length)return a(se,mt),jt&&Ca(se,Pt),xt;if(mt===null){for(;Pt<he.length;Pt++)mt=Ne(se,he[Pt],Ce),mt!==null&&(J=h(mt,J,Pt),$t===null?xt=mt:$t.sibling=mt,$t=mt);return jt&&Ca(se,Pt),xt}for(mt=s(mt);Pt<he.length;Pt++)Yt=ye(mt,se,Pt,he[Pt],Ce),Yt!==null&&(t&&Yt.alternate!==null&&mt.delete(Yt.key===null?Pt:Yt.key),J=h(Yt,J,Pt),$t===null?xt=Yt:$t.sibling=Yt,$t=Yt);return t&&mt.forEach(function(Cr){return n(se,Cr)}),jt&&Ca(se,Pt),xt}function bt(se,J,he,Ce){if(he==null)throw Error(r(151));for(var xt=null,$t=null,mt=J,Pt=J=0,Yt=null,en=he.next();mt!==null&&!en.done;Pt++,en=he.next()){mt.index>Pt?(Yt=mt,mt=null):Yt=mt.sibling;var Cr=ge(se,mt,en.value,Ce);if(Cr===null){mt===null&&(mt=Yt);break}t&&mt&&Cr.alternate===null&&n(se,mt),J=h(Cr,J,Pt),$t===null?xt=Cr:$t.sibling=Cr,$t=Cr,mt=Yt}if(en.done)return a(se,mt),jt&&Ca(se,Pt),xt;if(mt===null){for(;!en.done;Pt++,en=he.next())en=Ne(se,en.value,Ce),en!==null&&(J=h(en,J,Pt),$t===null?xt=en:$t.sibling=en,$t=en);return jt&&Ca(se,Pt),xt}for(mt=s(mt);!en.done;Pt++,en=he.next())en=ye(mt,se,Pt,en.value,Ce),en!==null&&(t&&en.alternate!==null&&mt.delete(en.key===null?Pt:en.key),J=h(en,J,Pt),$t===null?xt=en:$t.sibling=en,$t=en);return t&&mt.forEach(function(Ty){return n(se,Ty)}),jt&&Ca(se,Pt),xt}function dn(se,J,he,Ce){if(typeof he=="object"&&he!==null&&he.type===L&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case A:e:{for(var xt=he.key;J!==null;){if(J.key===xt){if(xt=he.type,xt===L){if(J.tag===7){a(se,J.sibling),Ce=u(J,he.props.children),Ce.return=se,se=Ce;break e}}else if(J.elementType===xt||typeof xt=="object"&&xt!==null&&xt.$$typeof===ue&&rs(xt)===J.type){a(se,J.sibling),Ce=u(J,he.props),ll(Ce,he),Ce.return=se,se=Ce;break e}a(se,J);break}else n(se,J);J=J.sibling}he.type===L?(Ce=es(he.props.children,se.mode,Ce,he.key),Ce.return=se,se=Ce):(Ce=_c(he.type,he.key,he.props,null,se.mode,Ce),ll(Ce,he),Ce.return=se,se=Ce)}return v(se);case U:e:{for(xt=he.key;J!==null;){if(J.key===xt)if(J.tag===4&&J.stateNode.containerInfo===he.containerInfo&&J.stateNode.implementation===he.implementation){a(se,J.sibling),Ce=u(J,he.children||[]),Ce.return=se,se=Ce;break e}else{a(se,J);break}else n(se,J);J=J.sibling}Ce=zf(he,se.mode,Ce),Ce.return=se,se=Ce}return v(se);case ue:return he=rs(he),dn(se,J,he,Ce)}if(Me(he))return ut(se,J,he,Ce);if(ae(he)){if(xt=ae(he),typeof xt!="function")throw Error(r(150));return he=xt.call(he),bt(se,J,he,Ce)}if(typeof he.then=="function")return dn(se,J,Tc(he),Ce);if(he.$$typeof===H)return dn(se,J,Sc(se,he),Ce);Ac(se,he)}return typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint"?(he=""+he,J!==null&&J.tag===6?(a(se,J.sibling),Ce=u(J,he),Ce.return=se,se=Ce):(a(se,J),Ce=Ff(he,se.mode,Ce),Ce.return=se,se=Ce),v(se)):a(se,J)}return function(se,J,he,Ce){try{ol=0;var xt=dn(se,J,he,Ce);return Ks=null,xt}catch(mt){if(mt===Zs||mt===Mc)throw mt;var $t=Ei(29,mt,null,se.mode);return $t.lanes=Ce,$t.return=se,$t}finally{}}}var os=Em(!0),Tm=Em(!1),hr=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function dr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(an&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=An(t),wa(t,null,a),n}return ai(t,s,n,a),An(t)}function cl(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Gr(t,a)}}function Qf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Jf=!1;function ul(){if(Jf){var t=js;if(t!==null)throw t}}function fl(t,n,a,s){Jf=!1;var u=t.updateQueue;hr=!1;var h=u.firstBaseUpdate,v=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var W=D,de=W.next;W.next=null,v===null?h=de:v.next=de,v=W;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,D=Ae.lastBaseUpdate,D!==v&&(D===null?Ae.firstBaseUpdate=de:D.next=de,Ae.lastBaseUpdate=W))}if(h!==null){var Ne=u.baseState;v=0,Ae=de=W=null,D=h;do{var ge=D.lane&-536870913,ye=ge!==D.lane;if(ye?(qt&ge)===ge:(s&ge)===ge){ge!==0&&ge===Ys&&(Jf=!0),Ae!==null&&(Ae=Ae.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var ut=t,bt=D;ge=n;var dn=a;switch(bt.tag){case 1:if(ut=bt.payload,typeof ut=="function"){Ne=ut.call(dn,Ne,ge);break e}Ne=ut;break e;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=bt.payload,ge=typeof ut=="function"?ut.call(dn,Ne,ge):ut,ge==null)break e;Ne=S({},Ne,ge);break e;case 2:hr=!0}}ge=D.callback,ge!==null&&(t.flags|=64,ye&&(t.flags|=8192),ye=u.callbacks,ye===null?u.callbacks=[ge]:ye.push(ge))}else ye={lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Ae===null?(de=Ae=ye,W=Ne):Ae=Ae.next=ye,v|=ge;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);Ae===null&&(W=Ne),u.baseState=W,u.firstBaseUpdate=de,u.lastBaseUpdate=Ae,h===null&&(u.shared.lanes=0),vr|=v,t.lanes=v,t.memoizedState=Ne}}function Am(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function wm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Am(a[t],n)}var Qs=I(null),wc=I(0);function Rm(t,n){t=Ha,we(wc,t),we(Qs,n),Ha=t|n.baseLanes}function $f(){we(wc,Ha),we(Qs,Qs.current)}function eh(){Ha=wc.current,re(Qs),re(wc)}var Ti=I(null),Vi=null;function mr(t){var n=t.alternate;we(Nn,Nn.current&1),we(Ti,t),Vi===null&&(n===null||Qs.current!==null||n.memoizedState!==null)&&(Vi=t)}function th(t){we(Nn,Nn.current),we(Ti,t),Vi===null&&(Vi=t)}function Cm(t){t.tag===22?(we(Nn,Nn.current),we(Ti,t),Vi===null&&(Vi=t)):gr()}function gr(){we(Nn,Nn.current),we(Ti,Ti.current)}function Ai(t){re(Ti),Vi===t&&(Vi=null),re(Nn)}var Nn=I(0);function Rc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||ld(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var La=0,Nt=null,fn=null,Bn=null,Cc=!1,Js=!1,ls=!1,Dc=0,hl=0,$s=null,mv=0;function wn(){throw Error(r(321))}function nh(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function ih(t,n,a,s,u,h){return La=h,Nt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?h0:_h,ls=!1,h=a(s,u),ls=!1,Js&&(h=Um(n,a,s,u)),Dm(t),h}function Dm(t){B.H=ml;var n=fn!==null&&fn.next!==null;if(La=0,Bn=fn=Nt=null,Cc=!1,hl=0,$s=null,n)throw Error(r(300));t===null||In||(t=t.dependencies,t!==null&&yc(t)&&(In=!0))}function Um(t,n,a,s){Nt=t;var u=0;do{if(Js&&($s=null),hl=0,Js=!1,25<=u)throw Error(r(301));if(u+=1,Bn=fn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=d0,h=n(a,s)}while(Js);return h}function gv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?dl(n):n,t=t.useState()[0],(fn!==null?fn.memoizedState:null)!==t&&(Nt.flags|=1024),n}function ah(){var t=Dc!==0;return Dc=0,t}function rh(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sh(t){if(Cc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cc=!1}La=0,Bn=fn=Nt=null,Js=!1,hl=Dc=0,$s=null}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?Nt.memoizedState=Bn=t:Bn=Bn.next=t,Bn}function On(){if(fn===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=fn.next;var n=Bn===null?Nt.memoizedState:Bn.next;if(n!==null)Bn=n,fn=t;else{if(t===null)throw Nt.alternate===null?Error(r(467)):Error(r(310));fn=t,t={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},Bn===null?Nt.memoizedState=Bn=t:Bn=Bn.next=t}return Bn}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(t){var n=hl;return hl+=1,$s===null&&($s=[]),t=Sm($s,t,n),n=Nt,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?h0:_h),t}function Lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dl(t);if(t.$$typeof===H)return Jn(t)}throw Error(r(438,String(t)))}function oh(t){var n=null,a=Nt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Nt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Uc(),Nt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=O;return n.index++,a}function Na(t,n){return typeof n=="function"?n(t):n}function Nc(t){var n=On();return lh(n,fn,t)}function lh(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,h=s.pending;if(h!==null){if(u!==null){var v=u.next;u.next=h.next,h.next=v}n.baseQueue=u=h,s.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var D=v=null,W=null,de=n,Ae=!1;do{var Ne=de.lane&-536870913;if(Ne!==de.lane?(qt&Ne)===Ne:(La&Ne)===Ne){var ge=de.revertLane;if(ge===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),Ne===Ys&&(Ae=!0);else if((La&ge)===ge){de=de.next,ge===Ys&&(Ae=!0);continue}else Ne={lane:0,revertLane:de.revertLane,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},W===null?(D=W=Ne,v=h):W=W.next=Ne,Nt.lanes|=ge,vr|=ge;Ne=de.action,ls&&a(h,Ne),h=de.hasEagerState?de.eagerState:a(h,Ne)}else ge={lane:Ne,revertLane:de.revertLane,gesture:de.gesture,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},W===null?(D=W=ge,v=h):W=W.next=ge,Nt.lanes|=Ne,vr|=Ne;de=de.next}while(de!==null&&de!==n);if(W===null?v=h:W.next=D,!fi(h,t.memoizedState)&&(In=!0,Ae&&(a=js,a!==null)))throw a;t.memoizedState=h,t.baseState=v,t.baseQueue=W,s.lastRenderedState=h}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function ch(t){var n=On(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do h=t(h,v.action),v=v.next;while(v!==u);fi(h,n.memoizedState)||(In=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Lm(t,n,a){var s=Nt,u=On(),h=jt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!fi((fn||u).memoizedState,a);if(v&&(u.memoizedState=a,In=!0),u=u.queue,hh(Pm.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||Bn!==null&&Bn.memoizedState.tag&1){if(s.flags|=2048,eo(9,{destroy:void 0},Om.bind(null,s,u,a,n),null),gn===null)throw Error(r(349));h||(La&127)!==0||Nm(s,n,a)}return a}function Nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Nt.updateQueue,n===null?(n=Uc(),Nt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Om(t,n,a,s){n.value=a,n.getSnapshot=s,Fm(n)&&zm(t)}function Pm(t,n,a){return a(function(){Fm(n)&&zm(t)})}function Fm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function zm(t){var n=jn(t,2);n!==null&&yi(n,t,2)}function uh(t){var n=hi();if(typeof t=="function"){var a=t;if(t=a(),ls){tt(!0);try{a()}finally{tt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},n}function Bm(t,n,a,s){return t.baseState=a,lh(t,fn,typeof s=="function"?s:Na)}function xv(t,n,a,s,u){if(Fc(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};B.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Im(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Im(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var h=B.T,v={};B.T=v;try{var D=a(u,s),W=B.S;W!==null&&W(v,D),Hm(t,n,D)}catch(de){fh(t,n,de)}finally{h!==null&&v.types!==null&&(h.types=v.types),B.T=h}}else try{h=a(u,s),Hm(t,n,h)}catch(de){fh(t,n,de)}}function Hm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Vm(t,n,s)},function(s){return fh(t,n,s)}):Vm(t,n,a)}function Vm(t,n,a){n.status="fulfilled",n.value=a,Gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function fh(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==s)}t.action=null}function Gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function km(t,n){return n}function Xm(t,n){if(jt){var a=gn.formState;if(a!==null){e:{var s=Nt;if(jt){if(_n){t:{for(var u=_n,h=Hi;u.nodeType!==8;){if(!h){u=null;break t}if(u=Gi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){_n=Gi(u.nextSibling),s=u.data==="F!";break e}}ur(s)}s=!1}s&&(n=a[0])}}return a=hi(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:km,lastRenderedState:n},a.queue=s,a=c0.bind(null,Nt,s),s.dispatch=a,s=uh(!1),h=xh.bind(null,Nt,!1,s.queue),s=hi(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=xv.bind(null,Nt,u,h,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Wm(t){var n=On();return qm(n,fn,t)}function qm(t,n,a){if(n=lh(t,n,km)[0],t=Nc(Na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=dl(n)}catch(v){throw v===Zs?Mc:v}else s=n;n=On();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Nt.flags|=2048,eo(9,{destroy:void 0},_v.bind(null,u,a),null)),[s,h,t]}function _v(t,n){t.action=n}function Ym(t){var n=On(),a=fn;if(a!==null)return qm(n,a,t);On(),n=n.memoizedState,a=On();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function eo(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=Nt.updateQueue,n===null&&(n=Uc(),Nt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function jm(){return On().memoizedState}function Oc(t,n,a,s){var u=hi();Nt.flags|=t,u.memoizedState=eo(1|n,{destroy:void 0},a,s===void 0?null:s)}function Pc(t,n,a,s){var u=On();s=s===void 0?null:s;var h=u.memoizedState.inst;fn!==null&&s!==null&&nh(s,fn.memoizedState.deps)?u.memoizedState=eo(n,h,a,s):(Nt.flags|=t,u.memoizedState=eo(1|n,h,a,s))}function Zm(t,n){Oc(8390656,8,t,n)}function hh(t,n){Pc(2048,8,t,n)}function vv(t){Nt.flags|=4;var n=Nt.updateQueue;if(n===null)n=Uc(),Nt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Km(t){var n=On().memoizedState;return vv({ref:n,nextImpl:t}),function(){if((an&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Qm(t,n){return Pc(4,2,t,n)}function Jm(t,n){return Pc(4,4,t,n)}function $m(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function e0(t,n,a){a=a!=null?a.concat([t]):null,Pc(4,4,$m.bind(null,n,t),a)}function dh(){}function t0(t,n){var a=On();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&nh(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function n0(t,n){var a=On();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&nh(n,s[1]))return s[0];if(s=t(),ls){tt(!0);try{t()}finally{tt(!1)}}return a.memoizedState=[s,n],s}function ph(t,n,a){return a===void 0||(La&1073741824)!==0&&(qt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ig(),Nt.lanes|=t,vr|=t,a)}function i0(t,n,a,s){return fi(a,n)?a:Qs.current!==null?(t=ph(t,a,s),fi(t,n)||(In=!0),t):(La&42)===0||(La&1073741824)!==0&&(qt&261930)===0?(In=!0,t.memoizedState=a):(t=ig(),Nt.lanes|=t,vr|=t,n)}function a0(t,n,a,s,u){var h=$.p;$.p=h!==0&&8>h?h:8;var v=B.T,D={};B.T=D,xh(t,!1,n,a);try{var W=u(),de=B.S;if(de!==null&&de(D,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Ae=pv(W,s);pl(t,n,Ae,Ci(t))}else pl(t,n,s,Ci(t))}catch(Ne){pl(t,n,{then:function(){},status:"rejected",reason:Ne},Ci())}finally{$.p=h,v!==null&&D.types!==null&&(v.types=D.types),B.T=v}}function yv(){}function mh(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=r0(t).queue;a0(t,u,n,te,a===null?yv:function(){return s0(t),a(s)})}function r0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function s0(t){var n=r0(t);n.next===null&&(n=t.alternate.memoizedState),pl(t,n.next.queue,{},Ci())}function gh(){return Jn(Ul)}function o0(){return On().memoizedState}function l0(){return On().memoizedState}function Sv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ci();t=dr(a);var s=pr(n,t,a);s!==null&&(yi(s,n,a),cl(s,n,a)),n={cache:Wf()},t.payload=n;return}n=n.return}}function bv(t,n,a){var s=Ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fc(t)?u0(n,a):(a=Aa(t,n,a,s),a!==null&&(yi(a,t,s),f0(a,n,s)))}function c0(t,n,a){var s=Ci();pl(t,n,a,s)}function pl(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fc(t))u0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,D=h(v,a);if(u.hasEagerState=!0,u.eagerState=D,fi(D,v))return ai(t,n,u,0),gn===null&&ii(),!1}catch{}finally{}if(a=Aa(t,n,u,s),a!==null)return yi(a,t,s),f0(a,n,s),!0}return!1}function xh(t,n,a,s){if(s={lane:2,revertLane:Zh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Fc(t)){if(n)throw Error(r(479))}else n=Aa(t,a,s,2),n!==null&&yi(n,t,2)}function Fc(t){var n=t.alternate;return t===Nt||n!==null&&n===Nt}function u0(t,n){Js=Cc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function f0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Gr(t,a)}}var ml={readContext:Jn,use:Lc,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn};ml.useEffectEvent=wn;var h0={readContext:Jn,use:Lc,useCallback:function(t,n){return hi().memoizedState=[t,n===void 0?null:n],t},useContext:Jn,useEffect:Zm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Oc(4194308,4,$m.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Oc(4194308,4,t,n)},useInsertionEffect:function(t,n){Oc(4,2,t,n)},useMemo:function(t,n){var a=hi();n=n===void 0?null:n;var s=t();if(ls){tt(!0);try{t()}finally{tt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=hi();if(a!==void 0){var u=a(n);if(ls){tt(!0);try{a(n)}finally{tt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=bv.bind(null,Nt,t),[s.memoizedState,t]},useRef:function(t){var n=hi();return t={current:t},n.memoizedState=t},useState:function(t){t=uh(t);var n=t.queue,a=c0.bind(null,Nt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:dh,useDeferredValue:function(t,n){var a=hi();return ph(a,t,n)},useTransition:function(){var t=uh(!1);return t=a0.bind(null,Nt,t.queue,!0,!1),hi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Nt,u=hi();if(jt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),gn===null)throw Error(r(349));(qt&127)!==0||Nm(s,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Zm(Pm.bind(null,s,h,t),[t]),s.flags|=2048,eo(9,{destroy:void 0},Om.bind(null,s,h,a,n),null),a},useId:function(){var t=hi(),n=gn.identifierPrefix;if(jt){var a=ha,s=fa;a=(s&~(1<<32-it(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=mv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:gh,useFormState:Xm,useActionState:Xm,useOptimistic:function(t){var n=hi();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xh.bind(null,Nt,!0,a),a.dispatch=n,[t,n]},useMemoCache:oh,useCacheRefresh:function(){return hi().memoizedState=Sv.bind(null,Nt)},useEffectEvent:function(t){var n=hi(),a={impl:t};return n.memoizedState=a,function(){if((an&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},_h={readContext:Jn,use:Lc,useCallback:t0,useContext:Jn,useEffect:hh,useImperativeHandle:e0,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:n0,useReducer:Nc,useRef:jm,useState:function(){return Nc(Na)},useDebugValue:dh,useDeferredValue:function(t,n){var a=On();return i0(a,fn.memoizedState,t,n)},useTransition:function(){var t=Nc(Na)[0],n=On().memoizedState;return[typeof t=="boolean"?t:dl(t),n]},useSyncExternalStore:Lm,useId:o0,useHostTransitionStatus:gh,useFormState:Wm,useActionState:Wm,useOptimistic:function(t,n){var a=On();return Bm(a,fn,t,n)},useMemoCache:oh,useCacheRefresh:l0};_h.useEffectEvent=Km;var d0={readContext:Jn,use:Lc,useCallback:t0,useContext:Jn,useEffect:hh,useImperativeHandle:e0,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:n0,useReducer:ch,useRef:jm,useState:function(){return ch(Na)},useDebugValue:dh,useDeferredValue:function(t,n){var a=On();return fn===null?ph(a,t,n):i0(a,fn.memoizedState,t,n)},useTransition:function(){var t=ch(Na)[0],n=On().memoizedState;return[typeof t=="boolean"?t:dl(t),n]},useSyncExternalStore:Lm,useId:o0,useHostTransitionStatus:gh,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,n){var a=On();return fn!==null?Bm(a,fn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:oh,useCacheRefresh:l0};d0.useEffectEvent=Km;function vh(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Ci(),u=dr(s);u.payload=n,a!=null&&(u.callback=a),n=pr(t,u,s),n!==null&&(yi(n,t,s),cl(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Ci(),u=dr(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pr(t,u,s),n!==null&&(yi(n,t,s),cl(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ci(),s=dr(a);s.tag=2,n!=null&&(s.callback=n),n=pr(t,s,a),n!==null&&(yi(n,t,a),cl(n,t,a))}};function p0(t,n,a,s,u,h,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,v):n.prototype&&n.prototype.isPureReactComponent?!Jr(a,s)||!Jr(u,h):!0}function m0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&yh.enqueueReplaceState(n,n.state,null)}function cs(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function g0(t){St(t)}function x0(t){console.error(t)}function _0(t){St(t)}function zc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function v0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sh(t,n,a){return a=dr(a),a.tag=3,a.payload={element:null},a.callback=function(){zc(t,n)},a}function y0(t){return t=dr(t),t.tag=3,t}function S0(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;t.payload=function(){return u(h)},t.callback=function(){v0(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){v0(n,a,s),typeof u!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var D=s.stack;this.componentDidCatch(s.value,{componentStack:D!==null?D:""})})}function Mv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,u,!0),a=Ti.current,a!==null){switch(a.tag){case 31:case 13:return Vi===null?Zc():a.alternate===null&&Rn===0&&(Rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),qh(t,s,u)),!1;case 22:return a.flags|=65536,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),qh(t,s,u)),!1}throw Error(r(435,a.tag))}return qh(t,s,u),Zc(),!1}if(jt)return n=Ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Hf&&(t=Error(r(422),{cause:s}),al(zi(t,a)))):(s!==Hf&&(n=Error(r(423),{cause:s}),al(zi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=zi(s,a),u=Sh(t.stateNode,s,u),Qf(t,u),Rn!==4&&(Rn=2)),!1;var h=Error(r(520),{cause:s});if(h=zi(h,a),Ml===null?Ml=[h]:Ml.push(h),Rn!==4&&(Rn=2),n===null)return!0;s=zi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sh(a.stateNode,s,t),Qf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yr===null||!yr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=y0(u),S0(u,t,a,s),Qf(a,u),!1}a=a.return}while(a!==null);return!1}var bh=Error(r(461)),In=!1;function $n(t,n,a,s){n.child=t===null?Tm(n,null,a,s):os(n,t.child,a,s)}function b0(t,n,a,s,u){a=a.render;var h=n.ref;if("ref"in s){var v={};for(var D in s)D!=="ref"&&(v[D]=s[D])}else v=s;return is(n),s=ih(t,n,a,v,h,u),D=ah(),t!==null&&!In?(rh(t,n,u),Oa(t,n,u)):(jt&&D&&Bf(n),n.flags|=1,$n(t,n,s,u),n.child)}function M0(t,n,a,s,u){if(t===null){var h=a.type;return typeof h=="function"&&!Pf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,E0(t,n,h,s,u)):(t=_c(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Dh(t,u)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(v,s)&&t.ref===n.ref)return Oa(t,n,u)}return n.flags|=1,t=Ra(h,s),t.ref=n.ref,t.return=n,n.child=t}function E0(t,n,a,s,u){if(t!==null){var h=t.memoizedProps;if(Jr(h,s)&&t.ref===n.ref)if(In=!1,n.pendingProps=s=h,Dh(t,u))(t.flags&131072)!==0&&(In=!0);else return n.lanes=t.lanes,Oa(t,n,u)}return Mh(t,n,a,s,u)}function T0(t,n,a,s){var u=s.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~h}else s=0,n.child=null;return A0(t,n,h,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bc(n,h!==null?h.cachePool:null),h!==null?Rm(n,h):$f(),Cm(n);else return s=n.lanes=536870912,A0(t,n,h!==null?h.baseLanes|a:a,a,s)}else h!==null?(bc(n,h.cachePool),Rm(n,h),gr(),n.memoizedState=null):(t!==null&&bc(n,null),$f(),gr());return $n(t,n,u,a),n.child}function gl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function A0(t,n,a,s,u){var h=Yf();return h=h===null?null:{parent:zn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&bc(n,null),$f(),Cm(n),t!==null&&qs(t,n,s,!0),n.childLanes=u,null}function Bc(t,n){return n=Hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function w0(t,n,a){return os(n,t.child,null,a),t=Bc(n,n.pendingProps),t.flags|=2,Ai(n),n.memoizedState=null,t}function Ev(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(jt){if(s.mode==="hidden")return t=Bc(n,s),n.lanes=536870912,gl(null,t);if(th(n),(t=_n)?(t=Ig(t,Hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:lr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},a=um(t),a.return=n,n.child=a,Qn=n,_n=null)):t=null,t===null)throw ur(n);return n.lanes=536870912,null}return Bc(n,s)}var h=t.memoizedState;if(h!==null){var v=h.dehydrated;if(th(n),u)if(n.flags&256)n.flags&=-257,n=w0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(In||qs(t,n,a,!1),u=(a&t.childLanes)!==0,In||u){if(s=gn,s!==null&&(v=kr(s,a),v!==0&&v!==h.retryLane))throw h.retryLane=v,jn(t,v),yi(s,t,v),bh;Zc(),n=w0(t,n,a)}else t=h.treeContext,_n=Gi(v.nextSibling),Qn=n,jt=!0,cr=null,Hi=!1,t!==null&&dm(n,t),n=Bc(n,s),n.flags|=4096;return n}return t=Ra(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ic(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Mh(t,n,a,s,u){return is(n),a=ih(t,n,a,s,void 0,u),s=ah(),t!==null&&!In?(rh(t,n,u),Oa(t,n,u)):(jt&&s&&Bf(n),n.flags|=1,$n(t,n,a,u),n.child)}function R0(t,n,a,s,u,h){return is(n),n.updateQueue=null,a=Um(n,s,a,u),Dm(t),s=ah(),t!==null&&!In?(rh(t,n,h),Oa(t,n,h)):(jt&&s&&Bf(n),n.flags|=1,$n(t,n,a,h),n.child)}function C0(t,n,a,s,u){if(is(n),n.stateNode===null){var h=Gs,v=a.contextType;typeof v=="object"&&v!==null&&(h=Jn(v)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=yh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},Zf(n),v=a.contextType,h.context=typeof v=="object"&&v!==null?Jn(v):Gs,h.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(vh(n,a,v,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&yh.enqueueReplaceState(h,h.state,null),fl(n,s,h,u),ul(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var D=n.memoizedProps,W=cs(a,D);h.props=W;var de=h.context,Ae=a.contextType;v=Gs,typeof Ae=="object"&&Ae!==null&&(v=Jn(Ae));var Ne=a.getDerivedStateFromProps;Ae=typeof Ne=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,Ae||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||de!==v)&&m0(n,h,s,v),hr=!1;var ge=n.memoizedState;h.state=ge,fl(n,s,h,u),ul(),de=n.memoizedState,D||ge!==de||hr?(typeof Ne=="function"&&(vh(n,a,Ne,s),de=n.memoizedState),(W=hr||p0(n,a,W,s,ge,de,v))?(Ae||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=de),h.props=s,h.state=de,h.context=v,s=W):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Kf(t,n),v=n.memoizedProps,Ae=cs(a,v),h.props=Ae,Ne=n.pendingProps,ge=h.context,de=a.contextType,W=Gs,typeof de=="object"&&de!==null&&(W=Jn(de)),D=a.getDerivedStateFromProps,(de=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==Ne||ge!==W)&&m0(n,h,s,W),hr=!1,ge=n.memoizedState,h.state=ge,fl(n,s,h,u),ul();var ye=n.memoizedState;v!==Ne||ge!==ye||hr||t!==null&&t.dependencies!==null&&yc(t.dependencies)?(typeof D=="function"&&(vh(n,a,D,s),ye=n.memoizedState),(Ae=hr||p0(n,a,Ae,s,ge,ye,W)||t!==null&&t.dependencies!==null&&yc(t.dependencies))?(de||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ye,W),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ye,W)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ye),h.props=s,h.state=ye,h.context=W,s=Ae):(typeof h.componentDidUpdate!="function"||v===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,Ic(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=os(n,t.child,null,u),n.child=os(n,null,a,u)):$n(t,n,a,u),n.memoizedState=h.state,t=n.child):t=Oa(t,n,u),t}function D0(t,n,a,s){return ts(),n.flags|=256,$n(t,n,a,s),n.child}var Eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(t){return{baseLanes:t,cachePool:vm()}}function Ah(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Ri),t}function U0(t,n,a){var s=n.pendingProps,u=!1,h=(n.flags&128)!==0,v;if((v=h)||(v=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(jt){if(u?mr(n):gr(),(t=_n)?(t=Ig(t,Hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:lr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},a=um(t),a.return=n,n.child=a,Qn=n,_n=null)):t=null,t===null)throw ur(n);return ld(t)?n.lanes=32:n.lanes=536870912,null}var D=s.children;return s=s.fallback,u?(gr(),u=n.mode,D=Hc({mode:"hidden",children:D},u),s=es(s,u,a,null),D.return=n,s.return=n,D.sibling=s,n.child=D,s=n.child,s.memoizedState=Th(a),s.childLanes=Ah(t,v,a),n.memoizedState=Eh,gl(null,s)):(mr(n),wh(n,D))}var W=t.memoizedState;if(W!==null&&(D=W.dehydrated,D!==null)){if(h)n.flags&256?(mr(n),n.flags&=-257,n=Rh(t,n,a)):n.memoizedState!==null?(gr(),n.child=t.child,n.flags|=128,n=null):(gr(),D=s.fallback,u=n.mode,s=Hc({mode:"visible",children:s.children},u),D=es(D,u,a,null),D.flags|=2,s.return=n,D.return=n,s.sibling=D,n.child=s,os(n,t.child,null,a),s=n.child,s.memoizedState=Th(a),s.childLanes=Ah(t,v,a),n.memoizedState=Eh,n=gl(null,s));else if(mr(n),ld(D)){if(v=D.nextSibling&&D.nextSibling.dataset,v)var de=v.dgst;v=de,s=Error(r(419)),s.stack="",s.digest=v,al({value:s,source:null,stack:null}),n=Rh(t,n,a)}else if(In||qs(t,n,a,!1),v=(a&t.childLanes)!==0,In||v){if(v=gn,v!==null&&(s=kr(v,a),s!==0&&s!==W.retryLane))throw W.retryLane=s,jn(t,s),yi(v,t,s),bh;od(D)||Zc(),n=Rh(t,n,a)}else od(D)?(n.flags|=192,n.child=t.child,n=null):(t=W.treeContext,_n=Gi(D.nextSibling),Qn=n,jt=!0,cr=null,Hi=!1,t!==null&&dm(n,t),n=wh(n,s.children),n.flags|=4096);return n}return u?(gr(),D=s.fallback,u=n.mode,W=t.child,de=W.sibling,s=Ra(W,{mode:"hidden",children:s.children}),s.subtreeFlags=W.subtreeFlags&65011712,de!==null?D=Ra(de,D):(D=es(D,u,a,null),D.flags|=2),D.return=n,s.return=n,s.sibling=D,n.child=s,gl(null,s),s=n.child,D=t.child.memoizedState,D===null?D=Th(a):(u=D.cachePool,u!==null?(W=zn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=vm(),D={baseLanes:D.baseLanes|a,cachePool:u}),s.memoizedState=D,s.childLanes=Ah(t,v,a),n.memoizedState=Eh,gl(t.child,s)):(mr(n),a=t.child,t=a.sibling,a=Ra(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function wh(t,n){return n=Hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hc(t,n){return t=Ei(22,t,null,n),t.lanes=0,t}function Rh(t,n,a){return os(n,t.child,null,a),t=wh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function L0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),kf(t.return,n,a)}function Ch(t,n,a,s,u,h){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=h)}function N0(t,n,a){var s=n.pendingProps,u=s.revealOrder,h=s.tail;s=s.children;var v=Nn.current,D=(v&2)!==0;if(D?(v=v&1|2,n.flags|=128):v&=1,we(Nn,v),$n(t,n,s,a),s=jt?il:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&L0(t,a,n);else if(t.tag===19)L0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Rc(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ch(n,!1,u,a,h,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Rc(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ch(n,!0,a,null,h,s);break;case"together":Ch(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),vr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Dh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yc(t)))}function Tv(t,n,a){switch(n.tag){case 3:qe(n,n.stateNode.containerInfo),fr(n,zn,t.memoizedState.cache),ts();break;case 27:case 5:ft(n);break;case 4:qe(n,n.stateNode.containerInfo);break;case 10:fr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,th(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(mr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?U0(t,n,a):(mr(n),t=Oa(t,n,a),t!==null?t.sibling:null);mr(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qs(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return N0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),we(Nn,Nn.current),s)break;return null;case 22:return n.lanes=0,T0(t,n,a,n.pendingProps);case 24:fr(n,zn,t.memoizedState.cache)}return Oa(t,n,a)}function O0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)In=!0;else{if(!Dh(t,a)&&(n.flags&128)===0)return In=!1,Tv(t,n,a);In=(t.flags&131072)!==0}else In=!1,jt&&(n.flags&1048576)!==0&&hm(n,il,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=rs(n.elementType),n.type=t,typeof t=="function")Pf(t)?(s=cs(t,s),n.tag=1,n=C0(null,n,t,s,a)):(n.tag=0,n=Mh(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===q){n.tag=11,n=b0(null,n,t,s,a);break e}else if(u===k){n.tag=14,n=M0(null,n,t,s,a);break e}}throw n=Te(t)||t,Error(r(306,n,""))}}return n;case 0:return Mh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=cs(s,n.pendingProps),C0(t,n,s,u,a);case 3:e:{if(qe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var h=n.memoizedState;u=h.element,Kf(t,n),fl(n,s,null,a);var v=n.memoizedState;if(s=v.cache,fr(n,zn,s),s!==h.cache&&Xf(n,[zn],a,!0),ul(),s=v.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=D0(t,n,s,a);break e}else if(s!==u){u=zi(Error(r(424)),n),al(u),n=D0(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_n=Gi(t.firstChild),Qn=n,jt=!0,cr=null,Hi=!0,a=Tm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ts(),s===u){n=Oa(t,n,a);break e}$n(t,n,s,a)}n=n.child}return n;case 26:return Ic(t,n),t===null?(a=Wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:jt||(a=n.type,t=n.pendingProps,s=nu(me.current).createElement(a),s[En]=n,s[yn]=t,ei(s,a,t),fe(s),n.stateNode=s):n.memoizedState=Wg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ft(n),t===null&&jt&&(s=n.stateNode=Gg(n.type,n.pendingProps,me.current),Qn=n,Hi=!0,u=_n,Er(n.type)?(cd=u,_n=Gi(s.firstChild)):_n=u),$n(t,n,n.pendingProps.children,a),Ic(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&jt&&((u=s=_n)&&(s=ty(s,n.type,n.pendingProps,Hi),s!==null?(n.stateNode=s,Qn=n,_n=Gi(s.firstChild),Hi=!1,u=!0):u=!1),u||ur(n)),ft(n),u=n.type,h=n.pendingProps,v=t!==null?t.memoizedProps:null,s=h.children,ad(u,h)?s=null:v!==null&&ad(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=ih(t,n,gv,null,null,a),Ul._currentValue=u),Ic(t,n),$n(t,n,s,a),n.child;case 6:return t===null&&jt&&((t=a=_n)&&(a=ny(a,n.pendingProps,Hi),a!==null?(n.stateNode=a,Qn=n,_n=null,t=!0):t=!1),t||ur(n)),null;case 13:return U0(t,n,a);case 4:return qe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=os(n,null,s,a):$n(t,n,s,a),n.child;case 11:return b0(t,n,n.type,n.pendingProps,a);case 7:return $n(t,n,n.pendingProps,a),n.child;case 8:return $n(t,n,n.pendingProps.children,a),n.child;case 12:return $n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fr(n,n.type,s.value),$n(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,is(n),u=Jn(u),s=s(u),n.flags|=1,$n(t,n,s,a),n.child;case 14:return M0(t,n,n.type,n.pendingProps,a);case 15:return E0(t,n,n.type,n.pendingProps,a);case 19:return N0(t,n,a);case 31:return Ev(t,n,a);case 22:return T0(t,n,a,n.pendingProps);case 24:return is(n),s=Jn(zn),t===null?(u=Yf(),u===null&&(u=gn,h=Wf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:s,cache:u},Zf(n),fr(n,zn,u)):((t.lanes&a)!==0&&(Kf(t,n),fl(n,null,null,a),ul()),u=t.memoizedState,h=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fr(n,zn,s)):(s=h.cache,fr(n,zn,s),s!==u.cache&&Xf(n,[zn],a,!0))),$n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Pa(t){t.flags|=4}function Uh(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(og())t.flags|=8192;else throw ss=Ec,jf}else t.flags&=-16777217}function P0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Kg(n))if(og())t.flags|=8192;else throw ss=Ec,jf}function Vc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?st():536870912,t.lanes|=n,ao|=n)}function xl(t,n){if(!jt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function vn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Av(t,n,a){var s=n.pendingProps;switch(If(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ua(zn),lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?Pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vf())),vn(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(Pa(n),h!==null?(vn(n),P0(n,h)):(vn(n),Uh(n,u,null,s,a))):h?h!==t.memoizedState?(Pa(n),vn(n),P0(n,h)):(vn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Pa(n),vn(n),Uh(n,u,t,s,a)),null;case 27:if(yt(n),a=me.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return vn(n),null}t=ze.current,Ws(n)?pm(n):(t=Gg(u,s,a),n.stateNode=t,Pa(n))}return vn(n),null;case 5:if(yt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return vn(n),null}if(h=ze.current,Ws(n))pm(n);else{var v=nu(me.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?h.multiple=!0:s.size&&(h.size=s.size);break;default:h=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}h[En]=n,h[yn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=h;e:switch(ei(h,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Pa(n)}}return vn(n),Uh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=me.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Qn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[En]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ug(t.nodeValue,a)),t||ur(n,!0)}else t=nu(t).createTextNode(s),t[En]=n,n.stateNode=t}return vn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ws(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[En]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),t=!1}else a=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Ai(n),n):(Ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return vn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ws(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[En]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ai(n),n):(Ai(n),null)}return Ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),h=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Vc(n,n.updateQueue),vn(n),null);case 4:return lt(),t===null&&$h(n.stateNode.containerInfo),vn(n),null;case 10:return Ua(n.type),vn(n),null;case 19:if(re(Nn),s=n.memoizedState,s===null)return vn(n),null;if(u=(n.flags&128)!==0,h=s.rendering,h===null)if(u)xl(s,!1);else{if(Rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Rc(t),h!==null){for(n.flags|=128,xl(s,!1),t=h.updateQueue,n.updateQueue=t,Vc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)cm(a,t),a=a.sibling;return we(Nn,Nn.current&1|2),jt&&Ca(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&w()>qc&&(n.flags|=128,u=!0,xl(s,!1),n.lanes=4194304)}else{if(!u)if(t=Rc(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Vc(n,t),xl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!h.alternate&&!jt)return vn(n),null}else 2*w()-s.renderingStartTime>qc&&a!==536870912&&(n.flags|=128,u=!0,xl(s,!1),n.lanes=4194304);s.isBackwards?(h.sibling=n.child,n.child=h):(t=s.last,t!==null?t.sibling=h:n.child=h,s.last=h)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=w(),t.sibling=null,a=Nn.current,we(Nn,u?a&1|2:a&1),jt&&Ca(n,s.treeForkCount),t):(vn(n),null);case 22:case 23:return Ai(n),eh(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&Vc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&re(as),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ua(zn),vn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function wv(t,n){switch(If(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ua(zn),lt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return yt(n),null;case 31:if(n.memoizedState!==null){if(Ai(n),n.alternate===null)throw Error(r(340));ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return re(Nn),null;case 4:return lt(),null;case 10:return Ua(n.type),null;case 22:case 23:return Ai(n),eh(),t!==null&&re(as),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ua(zn),null;case 25:return null;default:return null}}function F0(t,n){switch(If(n),n.tag){case 3:Ua(zn),lt();break;case 26:case 27:case 5:yt(n);break;case 4:lt();break;case 31:n.memoizedState!==null&&Ai(n);break;case 13:Ai(n);break;case 19:re(Nn);break;case 10:Ua(n.type);break;case 22:case 23:Ai(n),eh(),t!==null&&re(as);break;case 24:Ua(zn)}}function _l(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var h=a.create,v=a.inst;s=h(),v.destroy=s}a=a.next}while(a!==u)}}catch(D){ln(n,n.return,D)}}function xr(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){var v=s.inst,D=v.destroy;if(D!==void 0){v.destroy=void 0,u=n;var W=a,de=D;try{de()}catch(Ae){ln(u,W,Ae)}}}s=s.next}while(s!==h)}}catch(Ae){ln(n,n.return,Ae)}}function z0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{wm(n,a)}catch(s){ln(t,t.return,s)}}}function B0(t,n,a){a.props=cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ln(t,n,s)}}function vl(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){ln(t,n,u)}}function da(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ln(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ln(t,n,u)}else a.current=null}function I0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ln(t,t.return,u)}}function Lh(t,n,a){try{var s=t.stateNode;Zv(s,t.type,a,n),s[yn]=n}catch(u){ln(t,t.return,u)}}function H0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Er(t.type)||t.tag===4}function Nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oh(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(s!==4&&(s===27&&Er(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Oh(t,n,a),t=t.sibling;t!==null;)Oh(t,n,a),t=t.sibling}function Gc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Er(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gc(t,n,a),t=t.sibling;t!==null;)Gc(t,n,a),t=t.sibling}function V0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ei(n,s,a),n[En]=t,n[yn]=a}catch(h){ln(t,t.return,h)}}var Fa=!1,Hn=!1,Ph=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function Rv(t,n){if(t=t.containerInfo,nd=cu,t=tl(t),$r(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var v=0,D=-1,W=-1,de=0,Ae=0,Ne=t,ge=null;t:for(;;){for(var ye;Ne!==a||u!==0&&Ne.nodeType!==3||(D=v+u),Ne!==h||s!==0&&Ne.nodeType!==3||(W=v+s),Ne.nodeType===3&&(v+=Ne.nodeValue.length),(ye=Ne.firstChild)!==null;)ge=Ne,Ne=ye;for(;;){if(Ne===t)break t;if(ge===a&&++de===u&&(D=v),ge===h&&++Ae===s&&(W=v),(ye=Ne.nextSibling)!==null)break;Ne=ge,ge=Ne.parentNode}Ne=ye}a=D===-1||W===-1?null:{start:D,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:t,selectionRange:a},cu=!1,Zn=n;Zn!==null;)if(n=Zn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Zn=t;else for(;Zn!==null;){switch(n=Zn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var ut=cs(a.type,u);t=s.getSnapshotBeforeUpdate(ut,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(bt){ln(a,a.return,bt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Zn=t;break}Zn=n.return}}function k0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),s&4&&_l(5,a);break;case 1:if(Ba(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){ln(a,a.return,v)}else{var u=cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){ln(a,a.return,v)}}s&64&&z0(a),s&512&&vl(a,a.return);break;case 3:if(Ba(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wm(t,n)}catch(v){ln(a,a.return,v)}}break;case 27:n===null&&s&4&&V0(a);case 26:case 5:Ba(t,a),n===null&&s&4&&I0(a),s&512&&vl(a,a.return);break;case 12:Ba(t,a);break;case 31:Ba(t,a),s&4&&q0(t,a);break;case 13:Ba(t,a),s&4&&Y0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=zv.bind(null,a),iy(t,a))));break;case 22:if(s=a.memoizedState!==null||Fa,!s){n=n!==null&&n.memoizedState!==null||Hn,u=Fa;var h=Hn;Fa=s,(Hn=n)&&!h?Ia(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),Fa=u,Hn=h}break;case 30:break;default:Ba(t,a)}}function X0(t){var n=t.alternate;n!==null&&(t.alternate=null,X0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Xr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Sn=null,gi=!1;function za(t,n,a){for(a=a.child;a!==null;)W0(t,n,a),a=a.sibling}function W0(t,n,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Ue,a)}catch{}switch(a.tag){case 26:Hn||da(a,n),za(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||da(a,n);var s=Sn,u=gi;Er(a.type)&&(Sn=a.stateNode,gi=!1),za(t,n,a),Rl(a.stateNode),Sn=s,gi=u;break;case 5:Hn||da(a,n);case 6:if(s=Sn,u=gi,Sn=null,za(t,n,a),Sn=s,gi=u,Sn!==null)if(gi)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(h){ln(a,n,h)}else try{Sn.removeChild(a.stateNode)}catch(h){ln(a,n,h)}break;case 18:Sn!==null&&(gi?(t=Sn,zg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ho(t)):zg(Sn,a.stateNode));break;case 4:s=Sn,u=gi,Sn=a.stateNode.containerInfo,gi=!0,za(t,n,a),Sn=s,gi=u;break;case 0:case 11:case 14:case 15:xr(2,a,n),Hn||xr(4,a,n),za(t,n,a);break;case 1:Hn||(da(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&B0(a,n,s)),za(t,n,a);break;case 21:za(t,n,a);break;case 22:Hn=(s=Hn)||a.memoizedState!==null,za(t,n,a),Hn=s;break;default:za(t,n,a)}}function q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ho(t)}catch(a){ln(n,n.return,a)}}}function Y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ho(t)}catch(a){ln(n,n.return,a)}}function Cv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new G0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new G0),n;default:throw Error(r(435,t.tag))}}function kc(t,n){var a=Cv(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Bv.bind(null,t,s);s.then(u,u)}})}function xi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=t,v=n,D=v;e:for(;D!==null;){switch(D.tag){case 27:if(Er(D.type)){Sn=D.stateNode,gi=!1;break e}break;case 5:Sn=D.stateNode,gi=!1;break e;case 3:case 4:Sn=D.stateNode.containerInfo,gi=!0;break e}D=D.return}if(Sn===null)throw Error(r(160));W0(h,v,u),Sn=null,gi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)j0(n,t),n=n.sibling}var ea=null;function j0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xi(n,t),_i(t),s&4&&(xr(3,t,t.return),_l(3,t),xr(5,t,t.return));break;case 1:xi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),s&64&&Fa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ea;if(xi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ba]||h[En]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),ei(h,s,a),h[En]=t,fe(h),s=h;break e;case"link":var v=jg("link","href",u).get(s+(a.href||""));if(v){for(var D=0;D<v.length;D++)if(h=v[D],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(D,1);break t}}h=u.createElement(s),ei(h,s,a),u.head.appendChild(h);break;case"meta":if(v=jg("meta","content",u).get(s+(a.content||""))){for(D=0;D<v.length;D++)if(h=v[D],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(D,1);break t}}h=u.createElement(s),ei(h,s,a),u.head.appendChild(h);break;default:throw Error(r(468,s))}h[En]=t,fe(h),s=h}t.stateNode=s}else Zg(u,t.type,t.stateNode);else t.stateNode=Yg(u,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?Zg(u,t.type,t.stateNode):Yg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Lh(t,t.memoizedProps,a.memoizedProps)}break;case 27:xi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),a!==null&&s&4&&Lh(t,t.memoizedProps,a.memoizedProps);break;case 5:if(xi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),t.flags&32){u=t.stateNode;try{Fi(u,"")}catch(ut){ln(t,t.return,ut)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Lh(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Ph=!0);break;case 6:if(xi(n,t),_i(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ut){ln(t,t.return,ut)}}break;case 3:if(ru=null,u=ea,ea=iu(n.containerInfo),xi(n,t),ea=u,_i(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(n.containerInfo)}catch(ut){ln(t,t.return,ut)}Ph&&(Ph=!1,Z0(t));break;case 4:s=ea,ea=iu(t.stateNode.containerInfo),xi(n,t),_i(t),ea=s;break;case 12:xi(n,t),_i(t);break;case 31:xi(n,t),_i(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 13:xi(n,t),_i(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wc=w()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 22:u=t.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,de=Fa,Ae=Hn;if(Fa=de||u,Hn=Ae||W,xi(n,t),Hn=Ae,Fa=de,_i(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||Fa||Hn||us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(h=W.stateNode,u)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{D=W.stateNode;var Ne=W.memoizedProps.style,ge=Ne!=null&&Ne.hasOwnProperty("display")?Ne.display:null;D.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(ut){ln(W,W.return,ut)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(ut){ln(W,W.return,ut)}}}else if(n.tag===18){if(a===null){W=n;try{var ye=W.stateNode;u?Bg(ye,!0):Bg(W.stateNode,!1)}catch(ut){ln(W,W.return,ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,kc(t,a))));break;case 19:xi(n,t),_i(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 30:break;case 21:break;default:xi(n,t),_i(t)}}function _i(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(H0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Nh(t);Gc(t,h,u);break;case 5:var v=a.stateNode;a.flags&32&&(Fi(v,""),a.flags&=-33);var D=Nh(t);Gc(t,D,v);break;case 3:case 4:var W=a.stateNode.containerInfo,de=Nh(t);Oh(t,de,W);break;default:throw Error(r(161))}}catch(Ae){ln(t,t.return,Ae)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Z0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Z0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)k0(t,n.alternate,n),n=n.sibling}function us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xr(4,n,n.return),us(n);break;case 1:da(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&B0(n,n.return,a),us(n);break;case 27:Rl(n.stateNode);case 26:case 5:da(n,n.return),us(n);break;case 22:n.memoizedState===null&&us(n);break;case 30:us(n);break;default:us(n)}t=t.sibling}}function Ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,h=n,v=h.flags;switch(h.tag){case 0:case 11:case 15:Ia(u,h,a),_l(4,h);break;case 1:if(Ia(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(de){ln(s,s.return,de)}if(s=h,u=s.updateQueue,u!==null){var D=s.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)Am(W[u],D)}catch(de){ln(s,s.return,de)}}a&&v&64&&z0(h),vl(h,h.return);break;case 27:V0(h);case 26:case 5:Ia(u,h,a),a&&s===null&&v&4&&I0(h),vl(h,h.return);break;case 12:Ia(u,h,a);break;case 31:Ia(u,h,a),a&&v&4&&q0(u,h);break;case 13:Ia(u,h,a),a&&v&4&&Y0(u,h);break;case 22:h.memoizedState===null&&Ia(u,h,a),vl(h,h.return);break;case 30:break;default:Ia(u,h,a)}n=n.sibling}}function Fh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&rl(a))}function zh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rl(t))}function ta(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)K0(t,n,a,s),n=n.sibling}function K0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ta(t,n,a,s),u&2048&&_l(9,n);break;case 1:ta(t,n,a,s);break;case 3:ta(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rl(t)));break;case 12:if(u&2048){ta(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,v=h.id,D=h.onPostCommit;typeof D=="function"&&D(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){ln(n,n.return,W)}}else ta(t,n,a,s);break;case 31:ta(t,n,a,s);break;case 13:ta(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,v=n.alternate,n.memoizedState!==null?h._visibility&2?ta(t,n,a,s):yl(t,n):h._visibility&2?ta(t,n,a,s):(h._visibility|=2,to(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Fh(v,n);break;case 24:ta(t,n,a,s),u&2048&&zh(n.alternate,n);break;default:ta(t,n,a,s)}}function to(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,v=n,D=a,W=s,de=v.flags;switch(v.tag){case 0:case 11:case 15:to(h,v,D,W,u),_l(8,v);break;case 23:break;case 22:var Ae=v.stateNode;v.memoizedState!==null?Ae._visibility&2?to(h,v,D,W,u):yl(h,v):(Ae._visibility|=2,to(h,v,D,W,u)),u&&de&2048&&Fh(v.alternate,v);break;case 24:to(h,v,D,W,u),u&&de&2048&&zh(v.alternate,v);break;default:to(h,v,D,W,u)}n=n.sibling}}function yl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:yl(a,s),u&2048&&Fh(s.alternate,s);break;case 24:yl(a,s),u&2048&&zh(s.alternate,s);break;default:yl(a,s)}n=n.sibling}}var Sl=8192;function no(t,n,a){if(t.subtreeFlags&Sl)for(t=t.child;t!==null;)Q0(t,n,a),t=t.sibling}function Q0(t,n,a){switch(t.tag){case 26:no(t,n,a),t.flags&Sl&&t.memoizedState!==null&&my(a,ea,t.memoizedState,t.memoizedProps);break;case 5:no(t,n,a);break;case 3:case 4:var s=ea;ea=iu(t.stateNode.containerInfo),no(t,n,a),ea=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Sl,Sl=16777216,no(t,n,a),Sl=s):no(t,n,a));break;default:no(t,n,a)}}function J0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,eg(s,t)}J0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$0(t),t=t.sibling}function $0(t){switch(t.tag){case 0:case 11:case 15:bl(t),t.flags&2048&&xr(9,t,t.return);break;case 3:bl(t);break;case 12:bl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xc(t)):bl(t);break;default:bl(t)}}function Xc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,eg(s,t)}J0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xr(8,n,n.return),Xc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xc(n));break;default:Xc(n)}t=t.sibling}}function eg(t,n){for(;Zn!==null;){var a=Zn;switch(a.tag){case 0:case 11:case 15:xr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:rl(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Zn=s;else e:for(a=t;Zn!==null;){s=Zn;var u=s.sibling,h=s.return;if(X0(s),s===a){Zn=null;break e}if(u!==null){u.return=h,Zn=u;break e}Zn=h}}}var Dv={getCacheForType:function(t){var n=Jn(zn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Jn(zn).controller.signal}},Uv=typeof WeakMap=="function"?WeakMap:Map,an=0,gn=null,Gt=null,qt=0,on=0,wi=null,_r=!1,io=!1,Bh=!1,Ha=0,Rn=0,vr=0,fs=0,Ih=0,Ri=0,ao=0,Ml=null,vi=null,Hh=!1,Wc=0,tg=0,qc=1/0,Yc=null,yr=null,kn=0,Sr=null,ro=null,Va=0,Vh=0,Gh=null,ng=null,El=0,kh=null;function Ci(){return(an&2)!==0&&qt!==0?qt&-qt:B.T!==null?Zh():Sa()}function ig(){if(Ri===0)if((qt&536870912)===0||jt){var t=ke;ke<<=1,(ke&3932160)===0&&(ke=262144),Ri=t}else Ri=536870912;return t=Ti.current,t!==null&&(t.flags|=32),Ri}function yi(t,n,a){(t===gn&&(on===2||on===9)||t.cancelPendingCommit!==null)&&(so(t,0),br(t,qt,Ri,!1)),Yn(t,a),((an&2)===0||t!==gn)&&(t===gn&&((an&2)===0&&(fs|=a),Rn===4&&br(t,qt,Ri,!1)),pa(t))}function ag(t,n,a){if((an&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||rt(t,n),u=s?Ov(t,n):Wh(t,n,!0),h=s;do{if(u===0){io&&!s&&br(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Lv(a)){u=Wh(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var D=t;u=Ml;var W=D.current.memoizedState.isDehydrated;if(W&&(so(D,v).flags|=256),v=Wh(D,v,!1),v!==2){if(Bh&&!W){D.errorRecoveryDisabledLanes|=h,fs|=h,u=4;break e}h=vi,vi=u,h!==null&&(vi===null?vi=h:vi.push.apply(vi,h))}u=v}if(h=!1,u!==2)continue}}if(u===1){so(t,0),br(t,n,0,!0);break}e:{switch(s=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:br(s,n,Ri,!_r);break e;case 2:vi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wc+300-w(),10<u)){if(br(s,n,Ri,!_r),Le(s,0,!0)!==0)break e;Va=n,s.timeoutHandle=Pg(rg.bind(null,s,a,vi,Yc,Hh,n,Ri,fs,ao,_r,h,"Throttled",-0,0),u);break e}rg(s,a,vi,Yc,Hh,n,Ri,fs,ao,_r,h,null,-0,0)}}break}while(!0);pa(t)}function rg(t,n,a,s,u,h,v,D,W,de,Ae,Ne,ge,ye){if(t.timeoutHandle=-1,Ne=n.subtreeFlags,Ne&8192||(Ne&16785408)===16785408){Ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Q0(n,h,Ne);var ut=(h&62914560)===h?Wc-w():(h&4194048)===h?tg-w():0;if(ut=gy(Ne,ut),ut!==null){Va=h,t.cancelPendingCommit=ut(dg.bind(null,t,n,h,a,s,u,v,D,W,Ae,Ne,null,ge,ye)),br(t,h,v,!de);return}}dg(t,n,h,a,s,u,v,D,W)}function Lv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!fi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function br(t,n,a,s){n&=~Ih,n&=~fs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var h=31-it(u),v=1<<h;s[h]=-1,u&=~v}a!==0&&Ts(t,a,n)}function jc(){return(an&6)===0?(Tl(0),!1):!0}function Xh(){if(Gt!==null){if(on===0)var t=Gt.return;else t=Gt,Da=ns=null,sh(t),Ks=null,ol=0,t=Gt;for(;t!==null;)F0(t.alternate,t),t=t.return;Gt=null}}function so(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Jv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Va=0,Xh(),gn=t,Gt=a=Ra(t.current,null),qt=n,on=0,wi=null,_r=!1,io=rt(t,n),Bh=!1,ao=Ri=Ih=fs=vr=Rn=0,vi=Ml=null,Hh=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-it(s),h=1<<u;n|=t[u],s&=~h}return Ha=n,ii(),a}function sg(t,n){Nt=null,B.H=ml,n===Zs||n===Mc?(n=bm(),on=3):n===jf?(n=bm(),on=4):on=n===bh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wi=n,Gt===null&&(Rn=1,zc(t,zi(n,t.current)))}function og(){var t=Ti.current;return t===null?!0:(qt&4194048)===qt?Vi===null:(qt&62914560)===qt||(qt&536870912)!==0?t===Vi:!1}function lg(){var t=B.H;return B.H=ml,t===null?ml:t}function cg(){var t=B.A;return B.A=Dv,t}function Zc(){Rn=4,_r||(qt&4194048)!==qt&&Ti.current!==null||(io=!0),(vr&134217727)===0&&(fs&134217727)===0||gn===null||br(gn,qt,Ri,!1)}function Wh(t,n,a){var s=an;an|=2;var u=lg(),h=cg();(gn!==t||qt!==n)&&(Yc=null,so(t,n)),n=!1;var v=Rn;e:do try{if(on!==0&&Gt!==null){var D=Gt,W=wi;switch(on){case 8:Xh(),v=6;break e;case 3:case 2:case 9:case 6:Ti.current===null&&(n=!0);var de=on;if(on=0,wi=null,oo(t,D,W,de),a&&io){v=0;break e}break;default:de=on,on=0,wi=null,oo(t,D,W,de)}}Nv(),v=Rn;break}catch(Ae){sg(t,Ae)}while(!0);return n&&t.shellSuspendCounter++,Da=ns=null,an=s,B.H=u,B.A=h,Gt===null&&(gn=null,qt=0,ii()),v}function Nv(){for(;Gt!==null;)ug(Gt)}function Ov(t,n){var a=an;an|=2;var s=lg(),u=cg();gn!==t||qt!==n?(Yc=null,qc=w()+500,so(t,n)):io=rt(t,n);e:do try{if(on!==0&&Gt!==null){n=Gt;var h=wi;t:switch(on){case 1:on=0,wi=null,oo(t,n,h,1);break;case 2:case 9:if(ym(h)){on=0,wi=null,fg(n);break}n=function(){on!==2&&on!==9||gn!==t||(on=7),pa(t)},h.then(n,n);break e;case 3:on=7;break e;case 4:on=5;break e;case 7:ym(h)?(on=0,wi=null,fg(n)):(on=0,wi=null,oo(t,n,h,7));break;case 5:var v=null;switch(Gt.tag){case 26:v=Gt.memoizedState;case 5:case 27:var D=Gt;if(v?Kg(v):D.stateNode.complete){on=0,wi=null;var W=D.sibling;if(W!==null)Gt=W;else{var de=D.return;de!==null?(Gt=de,Kc(de)):Gt=null}break t}}on=0,wi=null,oo(t,n,h,5);break;case 6:on=0,wi=null,oo(t,n,h,6);break;case 8:Xh(),Rn=6;break e;default:throw Error(r(462))}}Pv();break}catch(Ae){sg(t,Ae)}while(!0);return Da=ns=null,B.H=s,B.A=u,an=a,Gt!==null?0:(gn=null,qt=0,ii(),Rn)}function Pv(){for(;Gt!==null&&!Ee();)ug(Gt)}function ug(t){var n=O0(t.alternate,t,Ha);t.memoizedProps=t.pendingProps,n===null?Kc(t):Gt=n}function fg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=R0(a,n,n.pendingProps,n.type,void 0,qt);break;case 11:n=R0(a,n,n.pendingProps,n.type.render,n.ref,qt);break;case 5:sh(n);default:F0(a,n),n=Gt=cm(n,Ha),n=O0(a,n,Ha)}t.memoizedProps=t.pendingProps,n===null?Kc(t):Gt=n}function oo(t,n,a,s){Da=ns=null,sh(n),Ks=null,ol=0;var u=n.return;try{if(Mv(t,u,n,a,qt)){Rn=1,zc(t,zi(a,t.current)),Gt=null;return}}catch(h){if(u!==null)throw Gt=u,h;Rn=1,zc(t,zi(a,t.current)),Gt=null;return}n.flags&32768?(jt||s===1?t=!0:io||(qt&536870912)!==0?t=!1:(_r=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),hg(n,t)):Kc(n)}function Kc(t){var n=t;do{if((n.flags&32768)!==0){hg(n,_r);return}t=n.return;var a=Av(n.alternate,n,Ha);if(a!==null){Gt=a;return}if(n=n.sibling,n!==null){Gt=n;return}Gt=n=t}while(n!==null);Rn===0&&(Rn=5)}function hg(t,n){do{var a=wv(t.alternate,t);if(a!==null){a.flags&=32767,Gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Gt=t;return}Gt=t=a}while(t!==null);Rn=6,Gt=null}function dg(t,n,a,s,u,h,v,D,W){t.cancelPendingCommit=null;do Qc();while(kn!==0);if((an&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=xn,li(t,a,h,v,D,W),t===gn&&(Gt=gn=null,qt=0),ro=n,Sr=t,Va=a,Vh=h,Gh=u,ng=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Iv(ee,function(){return _g(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,u=$.p,$.p=2,v=an,an|=4;try{Rv(t,n,a)}finally{an=v,$.p=u,B.T=s}}kn=1,pg(),mg(),gg()}}function pg(){if(kn===1){kn=0;var t=Sr,n=ro,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=$.p;$.p=2;var u=an;an|=4;try{j0(n,t);var h=id,v=tl(t.containerInfo),D=h.focusedElem,W=h.selectionRange;if(v!==D&&D&&D.ownerDocument&&Fn(D.ownerDocument.documentElement,D)){if(W!==null&&$r(D)){var de=W.start,Ae=W.end;if(Ae===void 0&&(Ae=de),"selectionStart"in D)D.selectionStart=de,D.selectionEnd=Math.min(Ae,D.value.length);else{var Ne=D.ownerDocument||document,ge=Ne&&Ne.defaultView||window;if(ge.getSelection){var ye=ge.getSelection(),ut=D.textContent.length,bt=Math.min(W.start,ut),dn=W.end===void 0?bt:Math.min(W.end,ut);!ye.extend&&bt>dn&&(v=dn,dn=bt,bt=v);var se=xc(D,bt),J=xc(D,dn);if(se&&J&&(ye.rangeCount!==1||ye.anchorNode!==se.node||ye.anchorOffset!==se.offset||ye.focusNode!==J.node||ye.focusOffset!==J.offset)){var he=Ne.createRange();he.setStart(se.node,se.offset),ye.removeAllRanges(),bt>dn?(ye.addRange(he),ye.extend(J.node,J.offset)):(he.setEnd(J.node,J.offset),ye.addRange(he))}}}}for(Ne=[],ye=D;ye=ye.parentNode;)ye.nodeType===1&&Ne.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Ne.length;D++){var Ce=Ne[D];Ce.element.scrollLeft=Ce.left,Ce.element.scrollTop=Ce.top}}cu=!!nd,id=nd=null}finally{an=u,$.p=s,B.T=a}}t.current=n,kn=2}}function mg(){if(kn===2){kn=0;var t=Sr,n=ro,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=$.p;$.p=2;var u=an;an|=4;try{k0(t,n.alternate,n)}finally{an=u,$.p=s,B.T=a}}kn=3}}function gg(){if(kn===4||kn===3){kn=0,P();var t=Sr,n=ro,a=Va,s=ng;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?kn=5:(kn=0,ro=Sr=null,xg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(yr=null),R(a),n=n.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Ue,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,u=$.p,$.p=2,B.T=null;try{for(var h=t.onRecoverableError,v=0;v<s.length;v++){var D=s[v];h(D.value,{componentStack:D.stack})}}finally{B.T=n,$.p=u}}(Va&3)!==0&&Qc(),pa(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===kh?El++:(El=0,kh=t):El=0,Tl(0)}}function xg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,rl(n)))}function Qc(){return pg(),mg(),gg(),_g()}function _g(){if(kn!==5)return!1;var t=Sr,n=Vh;Vh=0;var a=R(Va),s=B.T,u=$.p;try{$.p=32>a?32:a,B.T=null,a=Gh,Gh=null;var h=Sr,v=Va;if(kn=0,ro=Sr=null,Va=0,(an&6)!==0)throw Error(r(331));var D=an;if(an|=4,$0(h.current),K0(h,h.current,v,a),an=D,Tl(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Ue,h)}catch{}return!0}finally{$.p=u,B.T=s,xg(t,n)}}function vg(t,n,a){n=zi(a,n),n=Sh(t.stateNode,n,2),t=pr(t,n,2),t!==null&&(Yn(t,2),pa(t))}function ln(t,n,a){if(t.tag===3)vg(t,t,a);else for(;n!==null;){if(n.tag===3){vg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(yr===null||!yr.has(s))){t=zi(a,t),a=y0(2),s=pr(n,a,2),s!==null&&(S0(a,s,n,t),Yn(s,2),pa(s));break}}n=n.return}}function qh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Uv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Bh=!0,u.add(a),t=Fv.bind(null,t,n,a),n.then(t,t))}function Fv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,gn===t&&(qt&a)===a&&(Rn===4||Rn===3&&(qt&62914560)===qt&&300>w()-Wc?(an&2)===0&&so(t,0):Ih|=a,ao===qt&&(ao=0)),pa(t)}function yg(t,n){n===0&&(n=st()),t=jn(t,n),t!==null&&(Yn(t,n),pa(t))}function zv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),yg(t,a)}function Bv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),yg(t,a)}function Iv(t,n){return nn(t,n)}var Jc=null,lo=null,Yh=!1,$c=!1,jh=!1,Mr=0;function pa(t){t!==lo&&t.next===null&&(lo===null?Jc=lo=t:lo=lo.next=t),$c=!0,Yh||(Yh=!0,Vv())}function Tl(t,n){if(!jh&&$c){jh=!0;do for(var a=!1,s=Jc;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var v=s.suspendedLanes,D=s.pingedLanes;h=(1<<31-it(42|t)+1)-1,h&=u&~(v&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Eg(s,h))}else h=qt,h=Le(s,s===gn?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||rt(s,h)||(a=!0,Eg(s,h));s=s.next}while(a);jh=!1}}function Hv(){Sg()}function Sg(){$c=Yh=!1;var t=0;Mr!==0&&Qv()&&(t=Mr);for(var n=w(),a=null,s=Jc;s!==null;){var u=s.next,h=bg(s,n);h===0?(s.next=null,a===null?Jc=u:a.next=u,u===null&&(lo=a)):(a=s,(t!==0||(h&3)!==0)&&($c=!0)),s=u}kn!==0&&kn!==5||Tl(t),Mr!==0&&(Mr=0)}function bg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var v=31-it(h),D=1<<v,W=u[v];W===-1?((D&a)===0||(D&s)!==0)&&(u[v]=Mt(D,n)):W<=n&&(t.expiredLanes|=D),h&=~D}if(n=gn,a=qt,a=Le(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(on===2||on===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&pe(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&pe(s),R(a)){case 2:case 8:a=De;break;case 32:a=ee;break;case 268435456:a=Ge;break;default:a=ee}return s=Mg.bind(null,t),a=nn(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&pe(s),t.callbackPriority=2,t.callbackNode=null,2}function Mg(t,n){if(kn!==0&&kn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qc()&&t.callbackNode!==a)return null;var s=qt;return s=Le(t,t===gn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ag(t,s,n),bg(t,w()),t.callbackNode!=null&&t.callbackNode===a?Mg.bind(null,t):null)}function Eg(t,n){if(Qc())return null;ag(t,n,!0)}function Vv(){$v(function(){(an&6)!==0?nn(be,Hv):Sg()})}function Zh(){if(Mr===0){var t=Ys;t===0&&(t=Ye,Ye<<=1,(Ye&261888)===0&&(Ye=256)),Mr=t}return Mr}function Tg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rs(""+t)}function Ag(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Gv(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var h=Tg((u[yn]||null).action),v=s.submitter;v&&(n=(n=v[yn]||null)?Tg(n.formAction):v.getAttribute("formAction"),n!==null&&(h=n,v=null));var D=new qr("action","action",null,s,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Mr!==0){var W=v?Ag(u,v):new FormData(u);mh(a,{pending:!0,data:W,method:u.method,action:h},null,W)}}else typeof h=="function"&&(D.preventDefault(),W=v?Ag(u,v):new FormData(u),mh(a,{pending:!0,data:W,method:u.method,action:h},h,W))},currentTarget:u}]})}}for(var Kh=0;Kh<pt.length;Kh++){var Qh=pt[Kh],kv=Qh.toLowerCase(),Xv=Qh[0].toUpperCase()+Qh.slice(1);nt(kv,"on"+Xv)}nt(C,"onAnimationEnd"),nt(z,"onAnimationIteration"),nt(G,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(Z,"onTransitionRun"),nt(ve,"onTransitionStart"),nt(Fe,"onTransitionCancel"),nt(Ke,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),He("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),He("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),He("onBeforeInput",["compositionend","keypress","textInput","paste"]),He("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function wg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var v=s.length-1;0<=v;v--){var D=s[v],W=D.instance,de=D.currentTarget;if(D=D.listener,W!==h&&u.isPropagationStopped())break e;h=D,u.currentTarget=de;try{h(u)}catch(Ae){St(Ae)}u.currentTarget=null,h=W}else for(v=0;v<s.length;v++){if(D=s[v],W=D.instance,de=D.currentTarget,D=D.listener,W!==h&&u.isPropagationStopped())break e;h=D,u.currentTarget=de;try{h(u)}catch(Ae){St(Ae)}u.currentTarget=null,h=W}}}}function kt(t,n){var a=n[tr];a===void 0&&(a=n[tr]=new Set);var s=t+"__bubble";a.has(s)||(Rg(n,t,2,!1),a.add(s))}function Jh(t,n,a){var s=0;n&&(s|=4),Rg(a,t,s,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function $h(t){if(!t[eu]){t[eu]=!0,oe.forEach(function(a){a!=="selectionchange"&&(Wv.has(a)||Jh(a,!1,t),Jh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[eu]||(n[eu]=!0,Jh("selectionchange",!1,n))}}function Rg(t,n,a,s){switch(ix(n)){case 2:var u=vy;break;case 8:u=yy;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!jo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ed(t,n,a,s,u){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var D=s.stateNode.containerInfo;if(D===u)break;if(v===4)for(v=s.return;v!==null;){var W=v.tag;if((W===3||W===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;D!==null;){if(v=la(D),v===null)return;if(W=v.tag,W===5||W===6||W===26||W===27){s=h=v;continue e}D=D.parentNode}}s=s.return}$l(function(){var de=h,Ae=qo(a),Ne=[];e:{var ge=ct.get(t);if(ge!==void 0){var ye=qr,ut=t;switch(t){case"keypress":if(Us(a)===0)break e;case"keydown":case"keyup":ye=ac;break;case"focusin":ut="focus",ye=Os;break;case"focusout":ut="blur",ye=Os;break;case"beforeblur":case"afterblur":ye=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=_f;break;case C:case z:case G:ye=uf;break;case Ke:ye=yf;break;case"scroll":case"scrollend":ye=sf;break;case"wheel":ye=bf;break;case"copy":case"cut":case"paste":ye=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=rc;break;case"toggle":case"beforetoggle":ye=Ef}var bt=(n&4)!==0,dn=!bt&&(t==="scroll"||t==="scrollend"),se=bt?ge!==null?ge+"Capture":null:ge;bt=[];for(var J=de,he;J!==null;){var Ce=J;if(he=Ce.stateNode,Ce=Ce.tag,Ce!==5&&Ce!==26&&Ce!==27||he===null||se===null||(Ce=Wr(J,se),Ce!=null&&bt.push(wl(J,Ce,he))),dn)break;J=J.return}0<bt.length&&(ge=new ye(ge,ut,null,a,Ae),Ne.push({event:ge,listeners:bt}))}}if((n&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ge&&a!==Wo&&(ut=a.relatedTarget||a.fromElement)&&(la(ut)||ut[ni]))break e;if((ye||ge)&&(ge=Ae.window===Ae?Ae:(ge=Ae.ownerDocument)?ge.defaultView||ge.parentWindow:window,ye?(ut=a.relatedTarget||a.toElement,ye=de,ut=ut?la(ut):null,ut!==null&&(dn=f(ut),bt=ut.tag,ut!==dn||bt!==5&&bt!==27&&bt!==6)&&(ut=null)):(ye=null,ut=de),ye!==ut)){if(bt=nc,Ce="onMouseLeave",se="onMouseEnter",J="mouse",(t==="pointerout"||t==="pointerover")&&(bt=rc,Ce="onPointerLeave",se="onPointerEnter",J="pointer"),dn=ye==null?ge:ie(ye),he=ut==null?ge:ie(ut),ge=new bt(Ce,J+"leave",ye,a,Ae),ge.target=dn,ge.relatedTarget=he,Ce=null,la(Ae)===de&&(bt=new bt(se,J+"enter",ut,a,Ae),bt.target=he,bt.relatedTarget=dn,Ce=bt),dn=Ce,ye&&ut)t:{for(bt=qv,se=ye,J=ut,he=0,Ce=se;Ce;Ce=bt(Ce))he++;Ce=0;for(var xt=J;xt;xt=bt(xt))Ce++;for(;0<he-Ce;)se=bt(se),he--;for(;0<Ce-he;)J=bt(J),Ce--;for(;he--;){if(se===J||J!==null&&se===J.alternate){bt=se;break t}se=bt(se),J=bt(J)}bt=null}else bt=null;ye!==null&&Cg(Ne,ge,ye,bt,!1),ut!==null&&dn!==null&&Cg(Ne,dn,ut,bt,!0)}}e:{if(ge=de?ie(de):window,ye=ge.nodeName&&ge.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ge.type==="file")var $t=Hs;else if(uc(ge))if(hc)$t=Nf;else{$t=Uf;var mt=Df}else ye=ge.nodeName,!ye||ye.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?de&&ws(de.elementType)&&($t=Hs):$t=Lf;if($t&&($t=$t(t,de))){fc(Ne,$t,a,Ae);break e}mt&&mt(t,ge,de),t==="focusout"&&de&&ge.type==="number"&&de.memoizedProps.value!=null&&Tn(ge,"number",ge.value)}switch(mt=de?ie(de):window,t){case"focusin":(uc(mt)||mt.contentEditable==="true")&&(Ta=mt,Vs=de,sr=null);break;case"focusout":sr=Vs=Ta=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,nl(Ne,a,Ae);break;case"selectionchange":if($i)break;case"keydown":case"keyup":nl(Ne,a,Ae)}var Pt;if($o)e:{switch(t){case"compositionstart":var Yt="onCompositionStart";break e;case"compositionend":Yt="onCompositionEnd";break e;case"compositionupdate":Yt="onCompositionUpdate";break e}Yt=void 0}else ar?lc(t,a)&&(Yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Yt="onCompositionStart");Yt&&(sc&&a.locale!=="ko"&&(ar||Yt!=="onCompositionStart"?Yt==="onCompositionEnd"&&ar&&(Pt=ec()):(Ji=Ae,Zo="value"in Ji?Ji.value:Ji.textContent,ar=!0)),mt=tu(de,Yt),0<mt.length&&(Yt=new Fs(Yt,t,null,a,Ae),Ne.push({event:Yt,listeners:mt}),Pt?Yt.data=Pt:(Pt=cc(a),Pt!==null&&(Yt.data=Pt)))),(Pt=Af?wf(t,a):Rf(t,a))&&(Yt=tu(de,"onBeforeInput"),0<Yt.length&&(mt=new Fs("onBeforeInput","beforeinput",null,a,Ae),Ne.push({event:mt,listeners:Yt}),mt.data=Pt)),Gv(Ne,t,de,a,Ae)}wg(Ne,n)})}function wl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Wr(t,a),u!=null&&s.unshift(wl(t,u,h)),u=Wr(t,n),u!=null&&s.push(wl(t,u,h))),t.tag===3)return s;t=t.return}return[]}function qv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Cg(t,n,a,s,u){for(var h=n._reactName,v=[];a!==null&&a!==s;){var D=a,W=D.alternate,de=D.stateNode;if(D=D.tag,W!==null&&W===s)break;D!==5&&D!==26&&D!==27||de===null||(W=de,u?(de=Wr(a,h),de!=null&&v.unshift(wl(a,de,W))):u||(de=Wr(a,h),de!=null&&v.push(wl(a,de,W)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Yv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(Yv,`
`).replace(jv,"")}function Ug(t,n){return n=Dg(n),Dg(t)===n}function hn(t,n,a,s,u,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Fi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Fi(t,""+s);break;case"className":Wt(t,"class",s);break;case"tabIndex":Wt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Wt(t,a,s);break;case"style":Xo(t,s,h);break;case"data":if(n!=="object"){Wt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Rs(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&hn(t,n,"name",u.name,u,null),hn(t,n,"formEncType",u.formEncType,u,null),hn(t,n,"formMethod",u.formMethod,u,null),hn(t,n,"formTarget",u.formTarget,u,null)):(hn(t,n,"encType",u.encType,u,null),hn(t,n,"method",u.method,u,null),hn(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Rs(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Zi);break;case"onScroll":s!=null&&kt("scroll",t);break;case"onScrollEnd":s!=null&&kt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Rs(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":kt("beforetoggle",t),kt("toggle",t),Rt(t,"popover",s);break;case"xlinkActuate":Jt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Jt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Jt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Jt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Jt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Jt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Jt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Jt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Jt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Rt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=af.get(a)||a,Rt(t,a,s))}}function td(t,n,a,s,u,h){switch(a){case"style":Xo(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Fi(t,s):(typeof s=="number"||typeof s=="bigint")&&Fi(t,""+s);break;case"onScroll":s!=null&&kt("scroll",t);break;case"onScrollEnd":s!=null&&kt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ve.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Rt(t,a,s)}}}function ei(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",t),kt("load",t);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:hn(t,n,h,v,a,null)}}u&&hn(t,n,"srcSet",a.srcSet,a,null),s&&hn(t,n,"src",a.src,a,null);return;case"input":kt("invalid",t);var D=h=v=u=null,W=null,de=null;for(s in a)if(a.hasOwnProperty(s)){var Ae=a[s];if(Ae!=null)switch(s){case"name":u=Ae;break;case"type":v=Ae;break;case"checked":W=Ae;break;case"defaultChecked":de=Ae;break;case"value":h=Ae;break;case"defaultValue":D=Ae;break;case"children":case"dangerouslySetInnerHTML":if(Ae!=null)throw Error(r(137,n));break;default:hn(t,n,s,Ae,a,null)}}At(t,h,D,W,de,v,u,!1);return;case"select":kt("invalid",t),s=v=h=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":h=D;break;case"defaultValue":v=D;break;case"multiple":s=D;default:hn(t,n,u,D,a,null)}n=h,a=v,t.multiple=!!s,n!=null?Un(t,!!s,n,!1):a!=null&&Un(t,!!s,a,!0);return;case"textarea":kt("invalid",t),h=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(D=a[v],D!=null))switch(v){case"value":s=D;break;case"defaultValue":u=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:hn(t,n,v,D,a,null)}Gn(t,s,u,h);return;case"option":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:hn(t,n,W,s,a,null)}return;case"dialog":kt("beforetoggle",t),kt("toggle",t),kt("cancel",t),kt("close",t);break;case"iframe":case"object":kt("load",t);break;case"video":case"audio":for(s=0;s<Al.length;s++)kt(Al[s],t);break;case"image":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"embed":case"source":case"link":kt("error",t),kt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(de in a)if(a.hasOwnProperty(de)&&(s=a[de],s!=null))switch(de){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:hn(t,n,de,s,a,null)}return;default:if(ws(n)){for(Ae in a)a.hasOwnProperty(Ae)&&(s=a[Ae],s!==void 0&&td(t,n,Ae,s,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(s=a[D],s!=null&&hn(t,n,D,s,a,null))}function Zv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,v=null,D=null,W=null,de=null,Ae=null;for(ye in a){var Ne=a[ye];if(a.hasOwnProperty(ye)&&Ne!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":W=Ne;default:s.hasOwnProperty(ye)||hn(t,n,ye,null,s,Ne)}}for(var ge in s){var ye=s[ge];if(Ne=a[ge],s.hasOwnProperty(ge)&&(ye!=null||Ne!=null))switch(ge){case"type":h=ye;break;case"name":u=ye;break;case"checked":de=ye;break;case"defaultChecked":Ae=ye;break;case"value":v=ye;break;case"defaultValue":D=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(r(137,n));break;default:ye!==Ne&&hn(t,n,ge,ye,s,Ne)}}ji(t,v,D,W,de,Ae,h,u);return;case"select":ye=v=D=ge=null;for(h in a)if(W=a[h],a.hasOwnProperty(h)&&W!=null)switch(h){case"value":break;case"multiple":ye=W;default:s.hasOwnProperty(h)||hn(t,n,h,null,s,W)}for(u in s)if(h=s[u],W=a[u],s.hasOwnProperty(u)&&(h!=null||W!=null))switch(u){case"value":ge=h;break;case"defaultValue":D=h;break;case"multiple":v=h;default:h!==W&&hn(t,n,u,h,s,W)}n=D,a=v,s=ye,ge!=null?Un(t,!!a,ge,!1):!!s!=!!a&&(n!=null?Un(t,!!a,n,!0):Un(t,!!a,a?[]:"",!1));return;case"textarea":ye=ge=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!s.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:hn(t,n,D,null,s,u)}for(v in s)if(u=s[v],h=a[v],s.hasOwnProperty(v)&&(u!=null||h!=null))switch(v){case"value":ge=u;break;case"defaultValue":ye=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&hn(t,n,v,u,s,h)}Pn(t,ge,ye);return;case"option":for(var ut in a)if(ge=a[ut],a.hasOwnProperty(ut)&&ge!=null&&!s.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:hn(t,n,ut,null,s,ge)}for(W in s)if(ge=s[W],ye=a[W],s.hasOwnProperty(W)&&ge!==ye&&(ge!=null||ye!=null))switch(W){case"selected":t.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:hn(t,n,W,ge,s,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var bt in a)ge=a[bt],a.hasOwnProperty(bt)&&ge!=null&&!s.hasOwnProperty(bt)&&hn(t,n,bt,null,s,ge);for(de in s)if(ge=s[de],ye=a[de],s.hasOwnProperty(de)&&ge!==ye&&(ge!=null||ye!=null))switch(de){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:hn(t,n,de,ge,s,ye)}return;default:if(ws(n)){for(var dn in a)ge=a[dn],a.hasOwnProperty(dn)&&ge!==void 0&&!s.hasOwnProperty(dn)&&td(t,n,dn,void 0,s,ge);for(Ae in s)ge=s[Ae],ye=a[Ae],!s.hasOwnProperty(Ae)||ge===ye||ge===void 0&&ye===void 0||td(t,n,Ae,ge,s,ye);return}}for(var se in a)ge=a[se],a.hasOwnProperty(se)&&ge!=null&&!s.hasOwnProperty(se)&&hn(t,n,se,null,s,ge);for(Ne in s)ge=s[Ne],ye=a[Ne],!s.hasOwnProperty(Ne)||ge===ye||ge==null&&ye==null||hn(t,n,Ne,ge,s,ye)}function Lg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],h=u.transferSize,v=u.initiatorType,D=u.duration;if(h&&D&&Lg(v)){for(v=0,D=u.responseEnd,s+=1;s<a.length;s++){var W=a[s],de=W.startTime;if(de>D)break;var Ae=W.transferSize,Ne=W.initiatorType;Ae&&Lg(Ne)&&(W=W.responseEnd,v+=Ae*(W<D?1:(D-de)/(W-de)))}if(--s,n+=8*(h+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nd=null,id=null;function nu(t){return t.nodeType===9?t:t.ownerDocument}function Ng(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Og(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function Qv(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var Pg=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(t){return Fg.resolve(null).then(t).catch(ey)}:Pg;function ey(t){setTimeout(function(){throw t})}function Er(t){return t==="head"}function zg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ho(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Rl(a);for(var h=a.firstChild;h;){var v=h.nextSibling,D=h.nodeName;h[ba]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=v}}else a==="body"&&Rl(t.ownerDocument.body);a=u}while(a);ho(n)}function Bg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),Xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ty(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Gi(t.nextSibling),t===null)break}return null}function ny(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Gi(t.nextSibling),t===null))return null;return t}function Ig(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Gi(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$?"||t.data==="$~"}function ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function iy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var cd=null;function Hg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Gg(t,n,a){switch(n=nu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Rl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Xr(t)}var ki=new Map,kg=new Set;function iu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ga=$.d;$.d={f:ay,r:ry,D:sy,C:oy,L:ly,m:cy,X:fy,S:uy,M:hy};function ay(){var t=Ga.f(),n=jc();return t||n}function ry(t){var n=N(t);n!==null&&n.tag===5&&n.type==="form"?s0(n):Ga.r(t)}var co=typeof document>"u"?null:document;function Xg(t,n,a){var s=co;if(s&&typeof n=="string"&&n){var u=un(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),kg.has(u)||(kg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),ei(n,"link",t),fe(n),s.head.appendChild(n)))}}function sy(t){Ga.D(t),Xg("dns-prefetch",t,null)}function oy(t,n){Ga.C(t,n),Xg("preconnect",t,n)}function ly(t,n,a){Ga.L(t,n,a);var s=co;if(s&&t&&n){var u='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(t)+'"]';var h=u;switch(n){case"style":h=uo(t);break;case"script":h=fo(t)}ki.has(h)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ki.set(h,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Cl(h))||n==="script"&&s.querySelector(Dl(h))||(n=s.createElement("link"),ei(n,"link",t),fe(n),s.head.appendChild(n)))}}function cy(t,n){Ga.m(t,n);var a=co;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+un(s)+'"][href="'+un(t)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fo(t)}if(!ki.has(h)&&(t=S({rel:"modulepreload",href:t},n),ki.set(h,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dl(h)))return}s=a.createElement("link"),ei(s,"link",t),fe(s),a.head.appendChild(s)}}}function uy(t,n,a){Ga.S(t,n,a);var s=co;if(s&&t){var u=_e(s).hoistableStyles,h=uo(t);n=n||"default";var v=u.get(h);if(!v){var D={loading:0,preload:null};if(v=s.querySelector(Cl(h)))D.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ki.get(h))&&ud(t,a);var W=v=s.createElement("link");fe(W),ei(W,"link",t),W._p=new Promise(function(de,Ae){W.onload=de,W.onerror=Ae}),W.addEventListener("load",function(){D.loading|=1}),W.addEventListener("error",function(){D.loading|=2}),D.loading|=4,au(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:D},u.set(h,v)}}}function fy(t,n){Ga.X(t,n);var a=co;if(a&&t){var s=_e(a).hoistableScripts,u=fo(t),h=s.get(u);h||(h=a.querySelector(Dl(u)),h||(t=S({src:t,async:!0},n),(n=ki.get(u))&&fd(t,n),h=a.createElement("script"),fe(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function hy(t,n){Ga.M(t,n);var a=co;if(a&&t){var s=_e(a).hoistableScripts,u=fo(t),h=s.get(u);h||(h=a.querySelector(Dl(u)),h||(t=S({src:t,async:!0,type:"module"},n),(n=ki.get(u))&&fd(t,n),h=a.createElement("script"),fe(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function Wg(t,n,a,s){var u=(u=me.current)?iu(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=uo(a.href),a=_e(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=uo(a.href);var h=_e(u).hoistableStyles,v=h.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,v),(h=u.querySelector(Cl(t)))&&!h._p&&(v.instance=h,v.state.loading=5),ki.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ki.set(t,a),h||dy(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fo(a),a=_e(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function uo(t){return'href="'+un(t)+'"'}function Cl(t){return'link[rel="stylesheet"]['+t+"]"}function qg(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function dy(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),ei(n,"link",a),fe(n),t.head.appendChild(n))}function fo(t){return'[src="'+un(t)+'"]'}function Dl(t){return"script[async]"+t}function Yg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(s)return n.instance=s,fe(s),s;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),fe(s),ei(s,"style",u),au(s,a.precedence,t),n.instance=s;case"stylesheet":u=uo(a.href);var h=t.querySelector(Cl(u));if(h)return n.state.loading|=4,n.instance=h,fe(h),h;s=qg(a),(u=ki.get(u))&&ud(s,u),h=(t.ownerDocument||t).createElement("link"),fe(h);var v=h;return v._p=new Promise(function(D,W){v.onload=D,v.onerror=W}),ei(h,"link",s),n.state.loading|=4,au(h,a.precedence,t),n.instance=h;case"script":return h=fo(a.src),(u=t.querySelector(Dl(h)))?(n.instance=u,fe(u),u):(s=a,(u=ki.get(h))&&(s=S({},a),fd(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),fe(u),ei(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,au(s,a.precedence,t));return n.instance}function au(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,v=0;v<s.length;v++){var D=s[v];if(D.dataset.precedence===n)h=D;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ru=null;function jg(t,n,a){if(ru===null){var s=new Map,u=ru=new Map;u.set(a,s)}else u=ru,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[ba]||h[En]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(n)||"";v=t+v;var D=s.get(v);D?D.push(h):s.set(v,[h])}}return s}function Zg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function py(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Kg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function my(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=uo(s.href),h=n.querySelector(Cl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=su.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,fe(h);return}h=n.ownerDocument||n,s=qg(s),(u=ki.get(u))&&ud(s,u),h=h.createElement("link"),fe(h);var v=h;v._p=new Promise(function(D,W){v.onload=D,v.onerror=W}),ei(h,"link",s),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=su.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var hd=0;function gy(t,n){return t.stylesheets&&t.count===0&&lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&hd===0&&(hd=62500*Kv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>hd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ou=null;function lu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ou=new Map,n.forEach(xy,t),ou=null,su.call(t))}function xy(t,n){if(!(n.state.loading&4)){var a=ou.get(t);if(a)var s=a.get(null);else{a=new Map,ou.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var v=u[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),h=a.get(v)||s,h===s&&a.set(null,u),a.set(v,u),this.count++,s=su.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ul={$$typeof:H,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function _y(t,n,a,s,u,h,v,D,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qt(0),this.hiddenUpdates=Qt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function Qg(t,n,a,s,u,h,v,D,W,de,Ae,Ne){return t=new _y(t,n,a,v,W,de,Ae,Ne,D),n=1,h===!0&&(n|=24),h=Ei(3,null,null,n),t.current=h,h.stateNode=t,n=Wf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},Zf(h),t}function Jg(t){return t?(t=Gs,t):Gs}function $g(t,n,a,s,u,h){u=Jg(u),s.context===null?s.context=u:s.pendingContext=u,s=dr(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=pr(t,s,n),a!==null&&(yi(a,t,n),cl(a,t,n))}function ex(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){ex(t,n),(t=t.alternate)&&ex(t,n)}function tx(t){if(t.tag===13||t.tag===31){var n=jn(t,67108864);n!==null&&yi(n,t,67108864),dd(t,67108864)}}function nx(t){if(t.tag===13||t.tag===31){var n=Ci();n=ci(n);var a=jn(t,n);a!==null&&yi(a,t,n),dd(t,n)}}var cu=!0;function vy(t,n,a,s){var u=B.T;B.T=null;var h=$.p;try{$.p=2,pd(t,n,a,s)}finally{$.p=h,B.T=u}}function yy(t,n,a,s){var u=B.T;B.T=null;var h=$.p;try{$.p=8,pd(t,n,a,s)}finally{$.p=h,B.T=u}}function pd(t,n,a,s){if(cu){var u=md(s);if(u===null)ed(t,n,s,uu,a),ax(t,s);else if(by(u,t,n,a,s))s.stopPropagation();else if(ax(t,s),n&4&&-1<Sy.indexOf(t)){for(;u!==null;){var h=N(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=Pe(h.pendingLanes);if(v!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;v;){var W=1<<31-it(v);D.entanglements[1]|=W,v&=~W}pa(h),(an&6)===0&&(qc=w()+500,Tl(0))}}break;case 31:case 13:D=jn(h,2),D!==null&&yi(D,h,2),jc(),dd(h,2)}if(h=md(s),h===null&&ed(t,n,s,uu,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else ed(t,n,s,null,a)}}function md(t){return t=qo(t),gd(t)}var uu=null;function gd(t){if(uu=null,t=la(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=p(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uu=t,null}function ix(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case be:return 2;case De:return 8;case ee:case Ie:return 32;case Ge:return 268435456;default:return 32}default:return 32}}var xd=!1,Tr=null,Ar=null,wr=null,Ll=new Map,Nl=new Map,Rr=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ax(t,n){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(n.pointerId)}}function Ol(t,n,a,s,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},n!==null&&(n=N(n),n!==null&&tx(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function by(t,n,a,s,u){switch(n){case"focusin":return Tr=Ol(Tr,t,n,a,s,u),!0;case"dragenter":return Ar=Ol(Ar,t,n,a,s,u),!0;case"mouseover":return wr=Ol(wr,t,n,a,s,u),!0;case"pointerover":var h=u.pointerId;return Ll.set(h,Ol(Ll.get(h)||null,t,n,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,Nl.set(h,Ol(Nl.get(h)||null,t,n,a,s,u)),!0}return!1}function rx(t){var n=la(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=p(a),n!==null){t.blockedOn=n,Ht(t.priority,function(){nx(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,Ht(t.priority,function(){nx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Wo=s,a.target.dispatchEvent(s),Wo=null}else return n=N(a),n!==null&&tx(n),t.blockedOn=a,!1;n.shift()}return!0}function sx(t,n,a){fu(t)&&a.delete(n)}function My(){xd=!1,Tr!==null&&fu(Tr)&&(Tr=null),Ar!==null&&fu(Ar)&&(Ar=null),wr!==null&&fu(wr)&&(wr=null),Ll.forEach(sx),Nl.forEach(sx)}function hu(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,My)))}var du=null;function ox(t){du!==t&&(du=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){du===t&&(du=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(gd(s||a)===null)continue;break}var h=N(a);h!==null&&(t.splice(n,3),n-=3,mh(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ho(t){function n(W){return hu(W,t)}Tr!==null&&hu(Tr,t),Ar!==null&&hu(Ar,t),wr!==null&&hu(wr,t),Ll.forEach(n),Nl.forEach(n);for(var a=0;a<Rr.length;a++){var s=Rr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)rx(a),a.blockedOn===null&&Rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],v=u[yn]||null;if(typeof h=="function")v||ox(a);else if(v){var D=null;if(h&&h.hasAttribute("formAction")){if(u=h,v=h[yn]||null)D=v.formAction;else if(gd(u)!==null)continue}else D=v.action;typeof D=="function"?a[s+1]=D:(a.splice(s,3),s-=3),ox(a)}}}function lx(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}pu.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Ci();$g(a,s,t,n,null,null)},pu.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;$g(t.current,2,null,t,null,null),jc(),n[ni]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Sa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Rr.length&&n!==0&&n<Rr[a].priority;a++);Rr.splice(a,0,t),a===0&&rx(t)}};var cx=e.version;if(cx!=="19.2.0")throw Error(r(527,cx,"19.2.0"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var Ey={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Ue=mu.inject(Ey),Oe=mu}catch{}}return Fl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=g0,h=x0,v=_0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Qg(t,1,!1,null,null,a,s,null,u,h,v,lx),t[ni]=n.current,$h(t),new _d(n)},Fl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",h=g0,v=x0,D=_0,W=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(W=a.formState)),n=Qg(t,1,!0,n,a??null,s,u,W,h,v,D,lx),n.context=Jg(null),a=n.current,s=Ci(),s=ci(s),u=dr(s),u.callback=null,pr(a,u,s),a=s,n.current.lanes=a,Yn(n,a),pa(n),t[ni]=n.current,$h(t),new pu(n)},Fl.version="19.2.0",Fl}var vx;function Fy(){if(vx)return Sd.exports;vx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Sd.exports=Py(),Sd.exports}var zy=Fy();const Qp="181",Co={ROTATE:0,DOLLY:1,PAN:2},Ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},By=0,yx=1,Iy=2,C_=1,Hy=2,Za=3,Vr=0,Mi=1,ga=2,Ja=0,Do=1,Sx=2,bx=3,Mx=4,Vy=5,_s=100,Gy=101,ky=102,Xy=103,Wy=104,qy=200,Yy=201,jy=202,Zy=203,sp=204,op=205,Ky=206,Qy=207,Jy=208,$y=209,eS=210,tS=211,nS=212,iS=213,aS=214,lp=0,cp=1,up=2,Lo=3,fp=4,hp=5,dp=6,pp=7,D_=0,rS=1,sS=2,Hr=0,oS=1,lS=2,cS=3,uS=4,fS=5,hS=6,dS=7,U_=300,No=301,Oo=302,mp=303,gp=304,Qu=306,xp=1e3,Ka=1001,_p=1002,Ni=1003,pS=1004,gu=1005,Yi=1006,Td=1007,ys=1008,va=1009,L_=1010,N_=1011,ql=1012,Jp=1013,Ss=1014,Qa=1015,zo=1016,$p=1017,em=1018,Yl=1020,O_=35902,P_=35899,F_=1021,z_=1022,sa=1023,jl=1026,Zl=1027,B_=1028,tm=1029,nm=1030,im=1031,am=1033,Iu=33776,Hu=33777,Vu=33778,Gu=33779,vp=35840,yp=35841,Sp=35842,bp=35843,Mp=36196,Ep=37492,Tp=37496,Ap=37808,wp=37809,Rp=37810,Cp=37811,Dp=37812,Up=37813,Lp=37814,Np=37815,Op=37816,Pp=37817,Fp=37818,zp=37819,Bp=37820,Ip=37821,Hp=36492,Vp=36494,Gp=36495,kp=36283,Xp=36284,Wp=36285,qp=36286,mS=3200,gS=3201,I_=0,xS=1,Br="",Wi="srgb",Po="srgb-linear",qu="linear",pn="srgb",po=7680,Ex=519,_S=512,vS=513,yS=514,H_=515,SS=516,bS=517,MS=518,ES=519,Tx=35044,Ax="300 es",xa=2e3,Yu=2001;function V_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ju(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function TS(){const o=ju("canvas");return o.style.display="block",o}const wx={};function Rx(...o){const e="THREE."+o.shift();console.log(e,...o)}function wt(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Cn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Kl(...o){const e=o.join(" ");e in wx||(wx[e]=!0,wt(...o))}function AS(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,p=l.length;f<p;f++)l[f].call(this,e);e.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,Yp=180/Math.PI;function Ql(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(si[o&255]+si[o>>8&255]+si[o>>16&255]+si[o>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[i&63|128]+si[i>>8&255]+"-"+si[i>>16&255]+si[i>>24&255]+si[r&255]+si[r>>8&255]+si[r>>16&255]+si[r>>24&255]).toLowerCase()}function Xt(o,e,i){return Math.max(e,Math.min(i,o))}function wS(o,e){return(o%e+e)%e}function Ad(o,e,i){return(1-i)*o+i*e}function zl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Si(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const RS={DEG2RAD:ku};class Dt{constructor(e=0,i=0){Dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,p=this.y-e.y;return this.x=f*r-p*l+e.x,this.y=f*l+p*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,p,m){let _=r[l+0],g=r[l+1],b=r[l+2],S=r[l+3],E=f[p+0],A=f[p+1],U=f[p+2],L=f[p+3];if(m<=0){e[i+0]=_,e[i+1]=g,e[i+2]=b,e[i+3]=S;return}if(m>=1){e[i+0]=E,e[i+1]=A,e[i+2]=U,e[i+3]=L;return}if(S!==L||_!==E||g!==A||b!==U){let T=_*E+g*A+b*U+S*L;T<0&&(E=-E,A=-A,U=-U,L=-L,T=-T);let M=1-m;if(T<.9995){const X=Math.acos(T),H=Math.sin(X);M=Math.sin(M*X)/H,m=Math.sin(m*X)/H,_=_*M+E*m,g=g*M+A*m,b=b*M+U*m,S=S*M+L*m}else{_=_*M+E*m,g=g*M+A*m,b=b*M+U*m,S=S*M+L*m;const X=1/Math.sqrt(_*_+g*g+b*b+S*S);_*=X,g*=X,b*=X,S*=X}}e[i]=_,e[i+1]=g,e[i+2]=b,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,f,p){const m=r[l],_=r[l+1],g=r[l+2],b=r[l+3],S=f[p],E=f[p+1],A=f[p+2],U=f[p+3];return e[i]=m*U+b*S+_*A-g*E,e[i+1]=_*U+b*E+g*S-m*A,e[i+2]=g*U+b*A+m*E-_*S,e[i+3]=b*U-m*S-_*E-g*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,p=e._order,m=Math.cos,_=Math.sin,g=m(r/2),b=m(l/2),S=m(f/2),E=_(r/2),A=_(l/2),U=_(f/2);switch(p){case"XYZ":this._x=E*b*S+g*A*U,this._y=g*A*S-E*b*U,this._z=g*b*U+E*A*S,this._w=g*b*S-E*A*U;break;case"YXZ":this._x=E*b*S+g*A*U,this._y=g*A*S-E*b*U,this._z=g*b*U-E*A*S,this._w=g*b*S+E*A*U;break;case"ZXY":this._x=E*b*S-g*A*U,this._y=g*A*S+E*b*U,this._z=g*b*U+E*A*S,this._w=g*b*S-E*A*U;break;case"ZYX":this._x=E*b*S-g*A*U,this._y=g*A*S+E*b*U,this._z=g*b*U-E*A*S,this._w=g*b*S+E*A*U;break;case"YZX":this._x=E*b*S+g*A*U,this._y=g*A*S+E*b*U,this._z=g*b*U-E*A*S,this._w=g*b*S-E*A*U;break;case"XZY":this._x=E*b*S-g*A*U,this._y=g*A*S-E*b*U,this._z=g*b*U+E*A*S,this._w=g*b*S+E*A*U;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],p=i[1],m=i[5],_=i[9],g=i[2],b=i[6],S=i[10],E=r+m+S;if(E>0){const A=.5/Math.sqrt(E+1);this._w=.25/A,this._x=(b-_)*A,this._y=(f-g)*A,this._z=(p-l)*A}else if(r>m&&r>S){const A=2*Math.sqrt(1+r-m-S);this._w=(b-_)/A,this._x=.25*A,this._y=(l+p)/A,this._z=(f+g)/A}else if(m>S){const A=2*Math.sqrt(1+m-r-S);this._w=(f-g)/A,this._x=(l+p)/A,this._y=.25*A,this._z=(_+b)/A}else{const A=2*Math.sqrt(1+S-r-m);this._w=(p-l)/A,this._x=(f+g)/A,this._y=(_+b)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,p=e._w,m=i._x,_=i._y,g=i._z,b=i._w;return this._x=r*b+p*m+l*g-f*_,this._y=l*b+p*_+f*m-r*g,this._z=f*b+p*g+r*_-l*m,this._w=p*b-r*m-l*_-f*g,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,f=e._z,p=e._w,m=this.dot(e);m<0&&(r=-r,l=-l,f=-f,p=-p,m=-m);let _=1-i;if(m<.9995){const g=Math.acos(m),b=Math.sin(g);_=Math.sin(_*g)/b,i=Math.sin(i*g)/b,this._x=this._x*_+r*i,this._y=this._y*_+l*i,this._z=this._z*_+f*i,this._w=this._w*_+p*i,this._onChangeCallback()}else this._x=this._x*_+r*i,this._y=this._y*_+l*i,this._z=this._z*_+f*i,this._w=this._w*_+p*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class xe{constructor(e=0,i=0,r=0){xe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Cx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Cx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,p=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*p,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*p,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*p,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,p=e.y,m=e.z,_=e.w,g=2*(p*l-m*r),b=2*(m*i-f*l),S=2*(f*r-p*i);return this.x=i+_*g+p*S-m*b,this.y=r+_*b+m*g-f*S,this.z=l+_*S+f*b-p*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this.z=Xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this.z=Xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,p=i.x,m=i.y,_=i.z;return this.x=l*_-f*m,this.y=f*p-r*_,this.z=r*m-l*p,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wd=new xe,Cx=new bs;class Ft{constructor(e,i,r,l,f,p,m,_,g){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,m,_,g)}set(e,i,r,l,f,p,m,_,g){const b=this.elements;return b[0]=e,b[1]=l,b[2]=m,b[3]=i,b[4]=f,b[5]=_,b[6]=r,b[7]=p,b[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],m=r[3],_=r[6],g=r[1],b=r[4],S=r[7],E=r[2],A=r[5],U=r[8],L=l[0],T=l[3],M=l[6],X=l[1],H=l[4],q=l[7],Q=l[2],V=l[5],k=l[8];return f[0]=p*L+m*X+_*Q,f[3]=p*T+m*H+_*V,f[6]=p*M+m*q+_*k,f[1]=g*L+b*X+S*Q,f[4]=g*T+b*H+S*V,f[7]=g*M+b*q+S*k,f[2]=E*L+A*X+U*Q,f[5]=E*T+A*H+U*V,f[8]=E*M+A*q+U*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],g=e[7],b=e[8];return i*p*b-i*m*g-r*f*b+r*m*_+l*f*g-l*p*_}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],g=e[7],b=e[8],S=b*p-m*g,E=m*_-b*f,A=g*f-p*_,U=i*S+r*E+l*A;if(U===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/U;return e[0]=S*L,e[1]=(l*g-b*r)*L,e[2]=(m*r-l*p)*L,e[3]=E*L,e[4]=(b*i-l*_)*L,e[5]=(l*f-m*i)*L,e[6]=A*L,e[7]=(r*_-g*i)*L,e[8]=(p*i-r*f)*L,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,p,m){const _=Math.cos(f),g=Math.sin(f);return this.set(r*_,r*g,-r*(_*p+g*m)+p+e,-l*g,l*_,-l*(-g*p+_*m)+m+i,0,0,1),this}scale(e,i){return this.premultiply(Rd.makeScale(e,i)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new Ft,Dx=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ux=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CS(){const o={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(l,f,p){return this.enabled===!1||f===p||!f||!p||(this.spaces[f].transfer===pn&&(l.r=$a(l.r),l.g=$a(l.g),l.b=$a(l.b)),this.spaces[f].primaries!==this.spaces[p].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[p].fromXYZ)),this.spaces[p].transfer===pn&&(l.r=Uo(l.r),l.g=Uo(l.g),l.b=Uo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Br?qu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,p){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Kl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Kl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Po]:{primaries:e,whitePoint:r,transfer:qu,toXYZ:Dx,fromXYZ:Ux,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wi},outputColorSpaceConfig:{drawingBufferColorSpace:Wi}},[Wi]:{primaries:e,whitePoint:r,transfer:pn,toXYZ:Dx,fromXYZ:Ux,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wi}}}),o}const tn=CS();function $a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mo;class DS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mo===void 0&&(mo=ju("canvas")),mo.width=e.width,mo.height=e.height;const l=mo.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=mo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ju("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let p=0;p<f.length;p++)f[p]=$a(f[p]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($a(i[r]/255)*255):i[r]=$a(i[r]);return{data:i,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let US=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Ql(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let p=0,m=l.length;p<m;p++)l[p].isDataTexture?f.push(Cd(l[p].image)):f.push(Cd(l[p]))}else f=Cd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?DS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let LS=0;const Dd=new xe;class pi extends Es{constructor(e=pi.DEFAULT_IMAGE,i=pi.DEFAULT_MAPPING,r=Ka,l=Ka,f=Yi,p=ys,m=sa,_=va,g=pi.DEFAULT_ANISOTROPY,b=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ql(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=p,this.anisotropy=g,this.format=m,this.internalFormat=null,this.type=_,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=b,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dd).x}get height(){return this.source.getSize(Dd).y}get depth(){return this.source.getSize(Dd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){wt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){wt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xp:e.x=e.x-Math.floor(e.x);break;case Ka:e.x=e.x<0?0:1;break;case _p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xp:e.y=e.y-Math.floor(e.y);break;case Ka:e.y=e.y<0?0:1;break;case _p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=U_;pi.DEFAULT_ANISOTROPY=1;class Dn{constructor(e=0,i=0,r=0,l=1){Dn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,p=e.elements;return this.x=p[0]*i+p[4]*r+p[8]*l+p[12]*f,this.y=p[1]*i+p[5]*r+p[9]*l+p[13]*f,this.z=p[2]*i+p[6]*r+p[10]*l+p[14]*f,this.w=p[3]*i+p[7]*r+p[11]*l+p[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const _=e.elements,g=_[0],b=_[4],S=_[8],E=_[1],A=_[5],U=_[9],L=_[2],T=_[6],M=_[10];if(Math.abs(b-E)<.01&&Math.abs(S-L)<.01&&Math.abs(U-T)<.01){if(Math.abs(b+E)<.1&&Math.abs(S+L)<.1&&Math.abs(U+T)<.1&&Math.abs(g+A+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(g+1)/2,q=(A+1)/2,Q=(M+1)/2,V=(b+E)/4,k=(S+L)/4,ue=(U+T)/4;return H>q&&H>Q?H<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(H),l=V/r,f=k/r):q>Q?q<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(q),r=V/l,f=ue/l):Q<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(Q),r=k/f,l=ue/f),this.set(r,l,f,i),this}let X=Math.sqrt((T-U)*(T-U)+(S-L)*(S-L)+(E-b)*(E-b));return Math.abs(X)<.001&&(X=1),this.x=(T-U)/X,this.y=(S-L)/X,this.z=(E-b)/X,this.w=Math.acos((g+A+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this.z=Xt(this.z,e.z,i.z),this.w=Xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this.z=Xt(this.z,e,i),this.w=Xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NS extends Es{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Dn(0,0,e,i),this.scissorTest=!1,this.viewport=new Dn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new pi(l);this.textures=[];const p=r.count;for(let m=0;m<p;m++)this.textures[m]=f.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new rm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends NS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class G_ extends pi{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OS extends pi{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=new xe(1/0,1/0,1/0),i=new xe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(na.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(na.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=na.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let p=0,m=f.count;p<m;p++)e.isMesh===!0?e.getVertexPosition(p,na):na.fromBufferAttribute(f,p),na.applyMatrix4(e.matrixWorld),this.expandByPoint(na);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xu.copy(r.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const l=e.children;for(let f=0,p=l.length;f<p;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,na),na.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bl),_u.subVectors(this.max,Bl),go.subVectors(e.a,Bl),xo.subVectors(e.b,Bl),_o.subVectors(e.c,Bl),Dr.subVectors(xo,go),Ur.subVectors(_o,xo),hs.subVectors(go,_o);let i=[0,-Dr.z,Dr.y,0,-Ur.z,Ur.y,0,-hs.z,hs.y,Dr.z,0,-Dr.x,Ur.z,0,-Ur.x,hs.z,0,-hs.x,-Dr.y,Dr.x,0,-Ur.y,Ur.x,0,-hs.y,hs.x,0];return!Ud(i,go,xo,_o,_u)||(i=[1,0,0,0,1,0,0,0,1],!Ud(i,go,xo,_o,_u))?!1:(vu.crossVectors(Dr,Ur),i=[vu.x,vu.y,vu.z],Ud(i,go,xo,_o,_u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,na).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(na).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ka=[new xe,new xe,new xe,new xe,new xe,new xe,new xe,new xe],na=new xe,xu=new Bo,go=new xe,xo=new xe,_o=new xe,Dr=new xe,Ur=new xe,hs=new xe,Bl=new xe,_u=new xe,vu=new xe,ds=new xe;function Ud(o,e,i,r,l){for(let f=0,p=o.length-3;f<=p;f+=3){ds.fromArray(o,f);const m=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),_=e.dot(ds),g=i.dot(ds),b=r.dot(ds);if(Math.max(-Math.max(_,g,b),Math.min(_,g,b))>m)return!1}return!0}const PS=new Bo,Il=new xe,Ld=new xe;class Ju{constructor(e=new xe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):PS.setFromPoints(e).getCenter(r);let l=0;for(let f=0,p=e.length;f<p;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Il.subVectors(e,this.center);const i=Il.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Il,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Il.copy(e.center).add(Ld)),this.expandByPoint(Il.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xa=new xe,Nd=new xe,yu=new xe,Lr=new xe,Od=new xe,Su=new xe,Pd=new xe;class $u{constructor(e=new xe,i=new xe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Xa.copy(this.origin).addScaledVector(this.direction,i),Xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Nd.copy(e).add(i).multiplyScalar(.5),yu.copy(i).sub(e).normalize(),Lr.copy(this.origin).sub(Nd);const f=e.distanceTo(i)*.5,p=-this.direction.dot(yu),m=Lr.dot(this.direction),_=-Lr.dot(yu),g=Lr.lengthSq(),b=Math.abs(1-p*p);let S,E,A,U;if(b>0)if(S=p*_-m,E=p*m-_,U=f*b,S>=0)if(E>=-U)if(E<=U){const L=1/b;S*=L,E*=L,A=S*(S+p*E+2*m)+E*(p*S+E+2*_)+g}else E=f,S=Math.max(0,-(p*E+m)),A=-S*S+E*(E+2*_)+g;else E=-f,S=Math.max(0,-(p*E+m)),A=-S*S+E*(E+2*_)+g;else E<=-U?(S=Math.max(0,-(-p*f+m)),E=S>0?-f:Math.min(Math.max(-f,-_),f),A=-S*S+E*(E+2*_)+g):E<=U?(S=0,E=Math.min(Math.max(-f,-_),f),A=E*(E+2*_)+g):(S=Math.max(0,-(p*f+m)),E=S>0?f:Math.min(Math.max(-f,-_),f),A=-S*S+E*(E+2*_)+g);else E=p>0?-f:f,S=Math.max(0,-(p*E+m)),A=-S*S+E*(E+2*_)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Nd).addScaledVector(yu,E),A}intersectSphere(e,i){Xa.subVectors(e.center,this.origin);const r=Xa.dot(this.direction),l=Xa.dot(Xa)-r*r,f=e.radius*e.radius;if(l>f)return null;const p=Math.sqrt(f-l),m=r-p,_=r+p;return _<0?null:m<0?this.at(_,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,p,m,_;const g=1/this.direction.x,b=1/this.direction.y,S=1/this.direction.z,E=this.origin;return g>=0?(r=(e.min.x-E.x)*g,l=(e.max.x-E.x)*g):(r=(e.max.x-E.x)*g,l=(e.min.x-E.x)*g),b>=0?(f=(e.min.y-E.y)*b,p=(e.max.y-E.y)*b):(f=(e.max.y-E.y)*b,p=(e.min.y-E.y)*b),r>p||f>l||((f>r||isNaN(r))&&(r=f),(p<l||isNaN(l))&&(l=p),S>=0?(m=(e.min.z-E.z)*S,_=(e.max.z-E.z)*S):(m=(e.max.z-E.z)*S,_=(e.min.z-E.z)*S),r>_||m>l)||((m>r||r!==r)&&(r=m),(_<l||l!==l)&&(l=_),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Xa)!==null}intersectTriangle(e,i,r,l,f){Od.subVectors(i,e),Su.subVectors(r,e),Pd.crossVectors(Od,Su);let p=this.direction.dot(Pd),m;if(p>0){if(l)return null;m=1}else if(p<0)m=-1,p=-p;else return null;Lr.subVectors(this.origin,e);const _=m*this.direction.dot(Su.crossVectors(Lr,Su));if(_<0)return null;const g=m*this.direction.dot(Od.cross(Lr));if(g<0||_+g>p)return null;const b=-m*Lr.dot(Pd);return b<0?null:this.at(b/p,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mn{constructor(e,i,r,l,f,p,m,_,g,b,S,E,A,U,L,T){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,m,_,g,b,S,E,A,U,L,T)}set(e,i,r,l,f,p,m,_,g,b,S,E,A,U,L,T){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=f,M[5]=p,M[9]=m,M[13]=_,M[2]=g,M[6]=b,M[10]=S,M[14]=E,M[3]=A,M[7]=U,M[11]=L,M[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/vo.setFromMatrixColumn(e,0).length(),f=1/vo.setFromMatrixColumn(e,1).length(),p=1/vo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*p,i[9]=r[9]*p,i[10]=r[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,p=Math.cos(r),m=Math.sin(r),_=Math.cos(l),g=Math.sin(l),b=Math.cos(f),S=Math.sin(f);if(e.order==="XYZ"){const E=p*b,A=p*S,U=m*b,L=m*S;i[0]=_*b,i[4]=-_*S,i[8]=g,i[1]=A+U*g,i[5]=E-L*g,i[9]=-m*_,i[2]=L-E*g,i[6]=U+A*g,i[10]=p*_}else if(e.order==="YXZ"){const E=_*b,A=_*S,U=g*b,L=g*S;i[0]=E+L*m,i[4]=U*m-A,i[8]=p*g,i[1]=p*S,i[5]=p*b,i[9]=-m,i[2]=A*m-U,i[6]=L+E*m,i[10]=p*_}else if(e.order==="ZXY"){const E=_*b,A=_*S,U=g*b,L=g*S;i[0]=E-L*m,i[4]=-p*S,i[8]=U+A*m,i[1]=A+U*m,i[5]=p*b,i[9]=L-E*m,i[2]=-p*g,i[6]=m,i[10]=p*_}else if(e.order==="ZYX"){const E=p*b,A=p*S,U=m*b,L=m*S;i[0]=_*b,i[4]=U*g-A,i[8]=E*g+L,i[1]=_*S,i[5]=L*g+E,i[9]=A*g-U,i[2]=-g,i[6]=m*_,i[10]=p*_}else if(e.order==="YZX"){const E=p*_,A=p*g,U=m*_,L=m*g;i[0]=_*b,i[4]=L-E*S,i[8]=U*S+A,i[1]=S,i[5]=p*b,i[9]=-m*b,i[2]=-g*b,i[6]=A*S+U,i[10]=E-L*S}else if(e.order==="XZY"){const E=p*_,A=p*g,U=m*_,L=m*g;i[0]=_*b,i[4]=-S,i[8]=g*b,i[1]=E*S+L,i[5]=p*b,i[9]=A*S-U,i[2]=U*S-A,i[6]=m*b,i[10]=L*S+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FS,e,zS)}lookAt(e,i,r){const l=this.elements;return Di.subVectors(e,i),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Nr.crossVectors(r,Di),Nr.lengthSq()===0&&(Math.abs(r.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Nr.crossVectors(r,Di)),Nr.normalize(),bu.crossVectors(Di,Nr),l[0]=Nr.x,l[4]=bu.x,l[8]=Di.x,l[1]=Nr.y,l[5]=bu.y,l[9]=Di.y,l[2]=Nr.z,l[6]=bu.z,l[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],m=r[4],_=r[8],g=r[12],b=r[1],S=r[5],E=r[9],A=r[13],U=r[2],L=r[6],T=r[10],M=r[14],X=r[3],H=r[7],q=r[11],Q=r[15],V=l[0],k=l[4],ue=l[8],F=l[12],O=l[1],K=l[5],ae=l[9],le=l[13],Te=l[2],Me=l[6],B=l[10],$=l[14],te=l[3],Re=l[7],ce=l[11],I=l[15];return f[0]=p*V+m*O+_*Te+g*te,f[4]=p*k+m*K+_*Me+g*Re,f[8]=p*ue+m*ae+_*B+g*ce,f[12]=p*F+m*le+_*$+g*I,f[1]=b*V+S*O+E*Te+A*te,f[5]=b*k+S*K+E*Me+A*Re,f[9]=b*ue+S*ae+E*B+A*ce,f[13]=b*F+S*le+E*$+A*I,f[2]=U*V+L*O+T*Te+M*te,f[6]=U*k+L*K+T*Me+M*Re,f[10]=U*ue+L*ae+T*B+M*ce,f[14]=U*F+L*le+T*$+M*I,f[3]=X*V+H*O+q*Te+Q*te,f[7]=X*k+H*K+q*Me+Q*Re,f[11]=X*ue+H*ae+q*B+Q*ce,f[15]=X*F+H*le+q*$+Q*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],p=e[1],m=e[5],_=e[9],g=e[13],b=e[2],S=e[6],E=e[10],A=e[14],U=e[3],L=e[7],T=e[11],M=e[15];return U*(+f*_*S-l*g*S-f*m*E+r*g*E+l*m*A-r*_*A)+L*(+i*_*A-i*g*E+f*p*E-l*p*A+l*g*b-f*_*b)+T*(+i*g*S-i*m*A-f*p*S+r*p*A+f*m*b-r*g*b)+M*(-l*m*b-i*_*S+i*m*E+l*p*S-r*p*E+r*_*b)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],g=e[7],b=e[8],S=e[9],E=e[10],A=e[11],U=e[12],L=e[13],T=e[14],M=e[15],X=S*T*g-L*E*g+L*_*A-m*T*A-S*_*M+m*E*M,H=U*E*g-b*T*g-U*_*A+p*T*A+b*_*M-p*E*M,q=b*L*g-U*S*g+U*m*A-p*L*A-b*m*M+p*S*M,Q=U*S*_-b*L*_-U*m*E+p*L*E+b*m*T-p*S*T,V=i*X+r*H+l*q+f*Q;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/V;return e[0]=X*k,e[1]=(L*E*f-S*T*f-L*l*A+r*T*A+S*l*M-r*E*M)*k,e[2]=(m*T*f-L*_*f+L*l*g-r*T*g-m*l*M+r*_*M)*k,e[3]=(S*_*f-m*E*f-S*l*g+r*E*g+m*l*A-r*_*A)*k,e[4]=H*k,e[5]=(b*T*f-U*E*f+U*l*A-i*T*A-b*l*M+i*E*M)*k,e[6]=(U*_*f-p*T*f-U*l*g+i*T*g+p*l*M-i*_*M)*k,e[7]=(p*E*f-b*_*f+b*l*g-i*E*g-p*l*A+i*_*A)*k,e[8]=q*k,e[9]=(U*S*f-b*L*f-U*r*A+i*L*A+b*r*M-i*S*M)*k,e[10]=(p*L*f-U*m*f+U*r*g-i*L*g-p*r*M+i*m*M)*k,e[11]=(b*m*f-p*S*f-b*r*g+i*S*g+p*r*A-i*m*A)*k,e[12]=Q*k,e[13]=(b*L*l-U*S*l+U*r*E-i*L*E-b*r*T+i*S*T)*k,e[14]=(U*m*l-p*L*l-U*r*_+i*L*_+p*r*T-i*m*T)*k,e[15]=(p*S*l-b*m*l+b*r*_-i*S*_-p*r*E+i*m*E)*k,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,p=e.x,m=e.y,_=e.z,g=f*p,b=f*m;return this.set(g*p+r,g*m-l*_,g*_+l*m,0,g*m+l*_,b*m+r,b*_-l*p,0,g*_-l*m,b*_+l*p,f*_*_+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,p){return this.set(1,r,f,0,e,1,p,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,p=i._y,m=i._z,_=i._w,g=f+f,b=p+p,S=m+m,E=f*g,A=f*b,U=f*S,L=p*b,T=p*S,M=m*S,X=_*g,H=_*b,q=_*S,Q=r.x,V=r.y,k=r.z;return l[0]=(1-(L+M))*Q,l[1]=(A+q)*Q,l[2]=(U-H)*Q,l[3]=0,l[4]=(A-q)*V,l[5]=(1-(E+M))*V,l[6]=(T+X)*V,l[7]=0,l[8]=(U+H)*k,l[9]=(T-X)*k,l[10]=(1-(E+L))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=vo.set(l[0],l[1],l[2]).length();const p=vo.set(l[4],l[5],l[6]).length(),m=vo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],ia.copy(this);const g=1/f,b=1/p,S=1/m;return ia.elements[0]*=g,ia.elements[1]*=g,ia.elements[2]*=g,ia.elements[4]*=b,ia.elements[5]*=b,ia.elements[6]*=b,ia.elements[8]*=S,ia.elements[9]*=S,ia.elements[10]*=S,i.setFromRotationMatrix(ia),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,f,p,m=xa,_=!1){const g=this.elements,b=2*f/(i-e),S=2*f/(r-l),E=(i+e)/(i-e),A=(r+l)/(r-l);let U,L;if(_)U=f/(p-f),L=p*f/(p-f);else if(m===xa)U=-(p+f)/(p-f),L=-2*p*f/(p-f);else if(m===Yu)U=-p/(p-f),L=-p*f/(p-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return g[0]=b,g[4]=0,g[8]=E,g[12]=0,g[1]=0,g[5]=S,g[9]=A,g[13]=0,g[2]=0,g[6]=0,g[10]=U,g[14]=L,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,f,p,m=xa,_=!1){const g=this.elements,b=2/(i-e),S=2/(r-l),E=-(i+e)/(i-e),A=-(r+l)/(r-l);let U,L;if(_)U=1/(p-f),L=p/(p-f);else if(m===xa)U=-2/(p-f),L=-(p+f)/(p-f);else if(m===Yu)U=-1/(p-f),L=-f/(p-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return g[0]=b,g[4]=0,g[8]=0,g[12]=E,g[1]=0,g[5]=S,g[9]=0,g[13]=A,g[2]=0,g[6]=0,g[10]=U,g[14]=L,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const vo=new xe,ia=new Mn,FS=new xe(0,0,0),zS=new xe(1,1,1),Nr=new xe,bu=new xe,Di=new xe,Lx=new Mn,Nx=new bs;class ya{constructor(e=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],p=l[4],m=l[8],_=l[1],g=l[5],b=l[9],S=l[2],E=l[6],A=l[10];switch(i){case"XYZ":this._y=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-b,A),this._z=Math.atan2(-p,f)):(this._x=Math.atan2(E,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(m,A),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-S,f),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-S,A),this._z=Math.atan2(-p,g)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Xt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(E,A),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-p,g));break;case"YZX":this._z=Math.asin(Xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-b,g),this._y=Math.atan2(-S,f)):(this._x=0,this._y=Math.atan2(m,A));break;case"XZY":this._z=Math.asin(-Xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(E,g),this._y=Math.atan2(m,f)):(this._x=Math.atan2(-b,A),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Lx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Nx.setFromEuler(this),this.setFromQuaternion(Nx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BS=0;const Ox=new xe,yo=new bs,Wa=new Mn,Mu=new xe,Hl=new xe,IS=new xe,HS=new bs,Px=new xe(1,0,0),Fx=new xe(0,1,0),zx=new xe(0,0,1),Bx={type:"added"},VS={type:"removed"},So={type:"childadded",child:null},Fd={type:"childremoved",child:null};class ti extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new xe,i=new ya,r=new bs,l=new xe(1,1,1);function f(){r.setFromEuler(i,!1)}function p(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Mn},normalMatrix:{value:new Ft}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yo.setFromAxisAngle(e,i),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,i){return yo.setFromAxisAngle(e,i),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(Px,e)}rotateY(e){return this.rotateOnAxis(Fx,e)}rotateZ(e){return this.rotateOnAxis(zx,e)}translateOnAxis(e,i){return Ox.copy(e).applyQuaternion(this.quaternion),this.position.add(Ox.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Px,e)}translateY(e){return this.translateOnAxis(Fx,e)}translateZ(e){return this.translateOnAxis(zx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mu.copy(e):Mu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(Hl,Mu,this.up):Wa.lookAt(Mu,Hl,this.up),this.quaternion.setFromRotationMatrix(Wa),l&&(Wa.extractRotation(l.matrixWorld),yo.setFromRotationMatrix(Wa),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Cn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bx),So.child=e,this.dispatchEvent(So),So.child=null):Cn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VS),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bx),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const p=this.children[r].getObjectByProperty(e,i);if(p!==void 0)return p}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,e,IS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,HS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(m,_){return m[_.uuid]===void 0&&(m[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const _=m.shapes;if(Array.isArray(_))for(let g=0,b=_.length;g<b;g++){const S=_[g];f(e.shapes,S)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let _=0,g=this.material.length;_<g;_++)m.push(f(e.materials,this.material[_]));l.material=m}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const _=this.animations[m];l.animations.push(f(e.animations,_))}}if(i){const m=p(e.geometries),_=p(e.materials),g=p(e.textures),b=p(e.images),S=p(e.shapes),E=p(e.skeletons),A=p(e.animations),U=p(e.nodes);m.length>0&&(r.geometries=m),_.length>0&&(r.materials=_),g.length>0&&(r.textures=g),b.length>0&&(r.images=b),S.length>0&&(r.shapes=S),E.length>0&&(r.skeletons=E),A.length>0&&(r.animations=A),U.length>0&&(r.nodes=U)}return r.object=l,r;function p(m){const _=[];for(const g in m){const b=m[g];delete b.metadata,_.push(b)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new xe(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const aa=new xe,qa=new xe,zd=new xe,Ya=new xe,bo=new xe,Mo=new xe,Ix=new xe,Bd=new xe,Id=new xe,Hd=new xe,Vd=new Dn,Gd=new Dn,kd=new Dn;class ra{constructor(e=new xe,i=new xe,r=new xe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),aa.subVectors(e,i),l.cross(aa);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){aa.subVectors(l,i),qa.subVectors(r,i),zd.subVectors(e,i);const p=aa.dot(aa),m=aa.dot(qa),_=aa.dot(zd),g=qa.dot(qa),b=qa.dot(zd),S=p*g-m*m;if(S===0)return f.set(0,0,0),null;const E=1/S,A=(g*_-m*b)*E,U=(p*b-m*_)*E;return f.set(1-A-U,U,A)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(e,i,r,l,f,p,m,_){return this.getBarycoord(e,i,r,l,Ya)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Ya.x),_.addScaledVector(p,Ya.y),_.addScaledVector(m,Ya.z),_)}static getInterpolatedAttribute(e,i,r,l,f,p){return Vd.setScalar(0),Gd.setScalar(0),kd.setScalar(0),Vd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,r),kd.fromBufferAttribute(e,l),p.setScalar(0),p.addScaledVector(Vd,f.x),p.addScaledVector(Gd,f.y),p.addScaledVector(kd,f.z),p}static isFrontFacing(e,i,r,l){return aa.subVectors(r,i),qa.subVectors(e,i),aa.cross(qa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return aa.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),aa.cross(qa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ra.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ra.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return ra.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return ra.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ra.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let p,m;bo.subVectors(l,r),Mo.subVectors(f,r),Bd.subVectors(e,r);const _=bo.dot(Bd),g=Mo.dot(Bd);if(_<=0&&g<=0)return i.copy(r);Id.subVectors(e,l);const b=bo.dot(Id),S=Mo.dot(Id);if(b>=0&&S<=b)return i.copy(l);const E=_*S-b*g;if(E<=0&&_>=0&&b<=0)return p=_/(_-b),i.copy(r).addScaledVector(bo,p);Hd.subVectors(e,f);const A=bo.dot(Hd),U=Mo.dot(Hd);if(U>=0&&A<=U)return i.copy(f);const L=A*g-_*U;if(L<=0&&g>=0&&U<=0)return m=g/(g-U),i.copy(r).addScaledVector(Mo,m);const T=b*U-A*S;if(T<=0&&S-b>=0&&A-U>=0)return Ix.subVectors(f,l),m=(S-b)/(S-b+(A-U)),i.copy(l).addScaledVector(Ix,m);const M=1/(T+L+E);return p=L*M,m=E*M,i.copy(r).addScaledVector(bo,p).addScaledVector(Mo,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function Xd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Zt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=tn.workingColorSpace){return this.r=e,this.g=i,this.b=r,tn.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=tn.workingColorSpace){if(e=wS(e,1),i=Xt(i,0,1),r=Xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,p=2*r-f;this.r=Xd(p,f,e+1/3),this.g=Xd(p,f,e),this.b=Xd(p,f,e-1/3)}return tn.colorSpaceToWorking(this,l),this}setStyle(e,i=Wi){function r(f){f!==void 0&&parseFloat(f)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const p=l[1],m=l[2];switch(p){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:wt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],p=f.length;if(p===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(f,16),i);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Wi){const r=k_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wi){return tn.workingToColorSpace(oi.copy(this),e),Math.round(Xt(oi.r*255,0,255))*65536+Math.round(Xt(oi.g*255,0,255))*256+Math.round(Xt(oi.b*255,0,255))}getHexString(e=Wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=tn.workingColorSpace){tn.workingToColorSpace(oi.copy(this),i);const r=oi.r,l=oi.g,f=oi.b,p=Math.max(r,l,f),m=Math.min(r,l,f);let _,g;const b=(m+p)/2;if(m===p)_=0,g=0;else{const S=p-m;switch(g=b<=.5?S/(p+m):S/(2-p-m),p){case r:_=(l-f)/S+(l<f?6:0);break;case l:_=(f-r)/S+2;break;case f:_=(r-l)/S+4;break}_/=6}return e.h=_,e.s=g,e.l=b,e}getRGB(e,i=tn.workingColorSpace){return tn.workingToColorSpace(oi.copy(this),i),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=Wi){tn.workingToColorSpace(oi.copy(this),e);const i=oi.r,r=oi.g,l=oi.b;return e!==Wi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+i,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Or),e.getHSL(Eu);const r=Ad(Or.h,Eu.h,i),l=Ad(Or.s,Eu.s,i),f=Ad(Or.l,Eu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new Zt;Zt.NAMES=k_;let GS=0;class Io extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ql(),this.name="",this.type="Material",this.blending=Do,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=op,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ex,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){wt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){wt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(r.blending=this.blending),this.side!==Vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sp&&(r.blendSrc=this.blendSrc),this.blendDst!==op&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ex&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(r.stencilFail=this.stencilFail),this.stencilZFail!==po&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}if(i){const f=l(e.textures),p=l(e.images);f.length>0&&(r.textures=f),p.length>0&&(r.images=p)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class X_ extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=D_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vn=new xe,Tu=new Dt;let kS=0;class _a{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Tx,this.updateRanges=[],this.gpuType=Qa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(e),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix3(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=zl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),l=Si(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),l=Si(l,this.array),f=Si(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tx&&(e.usage=this.usage),e}}class W_ extends _a{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class q_ extends _a{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Oi extends _a{constructor(e,i,r){super(new Float32Array(e),i,r)}}let XS=0;const Xi=new Mn,Wd=new ti,Eo=new xe,Ui=new Bo,Vl=new Bo,Kn=new xe;class oa extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V_(e)?q_:W_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new Ft().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,i,r){return Xi.makeTranslation(e,i,r),this.applyMatrix4(Xi),this}scale(e,i,r){return Xi.makeScale(e,i,r),this.applyMatrix4(Xi),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const p=e[l];r.push(p.x,p.y,p.z||0)}this.setAttribute("position",new Oi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new xe(-1/0,-1/0,-1/0),new xe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];Ui.setFromBufferAttribute(f),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ju);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new xe,1/0);return}if(e){const r=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),i)for(let f=0,p=i.length;f<p;f++){const m=i[f];Vl.setFromBufferAttribute(m),this.morphTargetsRelative?(Kn.addVectors(Ui.min,Vl.min),Ui.expandByPoint(Kn),Kn.addVectors(Ui.max,Vl.max),Ui.expandByPoint(Kn)):(Ui.expandByPoint(Vl.min),Ui.expandByPoint(Vl.max))}Ui.getCenter(r);let l=0;for(let f=0,p=e.count;f<p;f++)Kn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Kn));if(i)for(let f=0,p=i.length;f<p;f++){const m=i[f],_=this.morphTargetsRelative;for(let g=0,b=m.count;g<b;g++)Kn.fromBufferAttribute(m,g),_&&(Eo.fromBufferAttribute(e,g),Kn.add(Eo)),l=Math.max(l,r.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _a(new Float32Array(4*r.count),4));const p=this.getAttribute("tangent"),m=[],_=[];for(let ue=0;ue<r.count;ue++)m[ue]=new xe,_[ue]=new xe;const g=new xe,b=new xe,S=new xe,E=new Dt,A=new Dt,U=new Dt,L=new xe,T=new xe;function M(ue,F,O){g.fromBufferAttribute(r,ue),b.fromBufferAttribute(r,F),S.fromBufferAttribute(r,O),E.fromBufferAttribute(f,ue),A.fromBufferAttribute(f,F),U.fromBufferAttribute(f,O),b.sub(g),S.sub(g),A.sub(E),U.sub(E);const K=1/(A.x*U.y-U.x*A.y);isFinite(K)&&(L.copy(b).multiplyScalar(U.y).addScaledVector(S,-A.y).multiplyScalar(K),T.copy(S).multiplyScalar(A.x).addScaledVector(b,-U.x).multiplyScalar(K),m[ue].add(L),m[F].add(L),m[O].add(L),_[ue].add(T),_[F].add(T),_[O].add(T))}let X=this.groups;X.length===0&&(X=[{start:0,count:e.count}]);for(let ue=0,F=X.length;ue<F;++ue){const O=X[ue],K=O.start,ae=O.count;for(let le=K,Te=K+ae;le<Te;le+=3)M(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const H=new xe,q=new xe,Q=new xe,V=new xe;function k(ue){Q.fromBufferAttribute(l,ue),V.copy(Q);const F=m[ue];H.copy(F),H.sub(Q.multiplyScalar(Q.dot(F))).normalize(),q.crossVectors(V,F);const K=q.dot(_[ue])<0?-1:1;p.setXYZW(ue,H.x,H.y,H.z,K)}for(let ue=0,F=X.length;ue<F;++ue){const O=X[ue],K=O.start,ae=O.count;for(let le=K,Te=K+ae;le<Te;le+=3)k(e.getX(le+0)),k(e.getX(le+1)),k(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _a(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let E=0,A=r.count;E<A;E++)r.setXYZ(E,0,0,0);const l=new xe,f=new xe,p=new xe,m=new xe,_=new xe,g=new xe,b=new xe,S=new xe;if(e)for(let E=0,A=e.count;E<A;E+=3){const U=e.getX(E+0),L=e.getX(E+1),T=e.getX(E+2);l.fromBufferAttribute(i,U),f.fromBufferAttribute(i,L),p.fromBufferAttribute(i,T),b.subVectors(p,f),S.subVectors(l,f),b.cross(S),m.fromBufferAttribute(r,U),_.fromBufferAttribute(r,L),g.fromBufferAttribute(r,T),m.add(b),_.add(b),g.add(b),r.setXYZ(U,m.x,m.y,m.z),r.setXYZ(L,_.x,_.y,_.z),r.setXYZ(T,g.x,g.y,g.z)}else for(let E=0,A=i.count;E<A;E+=3)l.fromBufferAttribute(i,E+0),f.fromBufferAttribute(i,E+1),p.fromBufferAttribute(i,E+2),b.subVectors(p,f),S.subVectors(l,f),b.cross(S),r.setXYZ(E+0,b.x,b.y,b.z),r.setXYZ(E+1,b.x,b.y,b.z),r.setXYZ(E+2,b.x,b.y,b.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Kn.fromBufferAttribute(e,i),Kn.normalize(),e.setXYZ(i,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function e(m,_){const g=m.array,b=m.itemSize,S=m.normalized,E=new g.constructor(_.length*b);let A=0,U=0;for(let L=0,T=_.length;L<T;L++){m.isInterleavedBufferAttribute?A=_[L]*m.data.stride+m.offset:A=_[L]*b;for(let M=0;M<b;M++)E[U++]=g[A++]}return new _a(E,b,S)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,r=this.index.array,l=this.attributes;for(const m in l){const _=l[m],g=e(_,r);i.setAttribute(m,g)}const f=this.morphAttributes;for(const m in f){const _=[],g=f[m];for(let b=0,S=g.length;b<S;b++){const E=g[b],A=e(E,r);_.push(A)}i.morphAttributes[m]=_}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let m=0,_=p.length;m<_;m++){const g=p[m];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(e[g]=_[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const g=r[_];e.data.attributes[_]=g.toJSON(e.data)}const l={};let f=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],b=[];for(let S=0,E=g.length;S<E;S++){const A=g[S];b.push(A.toJSON(e.data))}b.length>0&&(l[_]=b,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(e.data.groups=JSON.parse(JSON.stringify(p)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const g in l){const b=l[g];this.setAttribute(g,b.clone(i))}const f=e.morphAttributes;for(const g in f){const b=[],S=f[g];for(let E=0,A=S.length;E<A;E++)b.push(S[E].clone(i));this.morphAttributes[g]=b}this.morphTargetsRelative=e.morphTargetsRelative;const p=e.groups;for(let g=0,b=p.length;g<b;g++){const S=p[g];this.addGroup(S.start,S.count,S.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hx=new Mn,ps=new $u,Au=new Ju,Vx=new xe,wu=new xe,Ru=new xe,Cu=new xe,qd=new xe,Du=new xe,Gx=new xe,Uu=new xe;class Li extends ti{constructor(e=new oa,i=new X_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const m=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,p=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(f&&m){Du.set(0,0,0);for(let _=0,g=f.length;_<g;_++){const b=m[_],S=f[_];b!==0&&(qd.fromBufferAttribute(S,e),p?Du.addScaledVector(qd,b):Du.addScaledVector(qd.sub(i),b))}i.add(Du)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(f),ps.copy(e.ray).recast(e.near),!(Au.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Au,Vx)===null||ps.origin.distanceToSquared(Vx)>(e.far-e.near)**2))&&(Hx.copy(f).invert(),ps.copy(e.ray).applyMatrix4(Hx),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ps)))}_computeIntersections(e,i,r){let l;const f=this.geometry,p=this.material,m=f.index,_=f.attributes.position,g=f.attributes.uv,b=f.attributes.uv1,S=f.attributes.normal,E=f.groups,A=f.drawRange;if(m!==null)if(Array.isArray(p))for(let U=0,L=E.length;U<L;U++){const T=E[U],M=p[T.materialIndex],X=Math.max(T.start,A.start),H=Math.min(m.count,Math.min(T.start+T.count,A.start+A.count));for(let q=X,Q=H;q<Q;q+=3){const V=m.getX(q),k=m.getX(q+1),ue=m.getX(q+2);l=Lu(this,M,e,r,g,b,S,V,k,ue),l&&(l.faceIndex=Math.floor(q/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const U=Math.max(0,A.start),L=Math.min(m.count,A.start+A.count);for(let T=U,M=L;T<M;T+=3){const X=m.getX(T),H=m.getX(T+1),q=m.getX(T+2);l=Lu(this,p,e,r,g,b,S,X,H,q),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(p))for(let U=0,L=E.length;U<L;U++){const T=E[U],M=p[T.materialIndex],X=Math.max(T.start,A.start),H=Math.min(_.count,Math.min(T.start+T.count,A.start+A.count));for(let q=X,Q=H;q<Q;q+=3){const V=q,k=q+1,ue=q+2;l=Lu(this,M,e,r,g,b,S,V,k,ue),l&&(l.faceIndex=Math.floor(q/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const U=Math.max(0,A.start),L=Math.min(_.count,A.start+A.count);for(let T=U,M=L;T<M;T+=3){const X=T,H=T+1,q=T+2;l=Lu(this,p,e,r,g,b,S,X,H,q),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}}}function WS(o,e,i,r,l,f,p,m){let _;if(e.side===Mi?_=r.intersectTriangle(p,f,l,!0,m):_=r.intersectTriangle(l,f,p,e.side===Vr,m),_===null)return null;Uu.copy(m),Uu.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Uu);return g<i.near||g>i.far?null:{distance:g,point:Uu.clone(),object:o}}function Lu(o,e,i,r,l,f,p,m,_,g){o.getVertexPosition(m,wu),o.getVertexPosition(_,Ru),o.getVertexPosition(g,Cu);const b=WS(o,e,i,r,wu,Ru,Cu,Gx);if(b){const S=new xe;ra.getBarycoord(Gx,wu,Ru,Cu,S),l&&(b.uv=ra.getInterpolatedAttribute(l,m,_,g,S,new Dt)),f&&(b.uv1=ra.getInterpolatedAttribute(f,m,_,g,S,new Dt)),p&&(b.normal=ra.getInterpolatedAttribute(p,m,_,g,S,new xe),b.normal.dot(r.direction)>0&&b.normal.multiplyScalar(-1));const E={a:m,b:_,c:g,normal:new xe,materialIndex:0};ra.getNormal(wu,Ru,Cu,E.normal),b.face=E,b.barycoord=S}return b}class Jl extends oa{constructor(e=1,i=1,r=1,l=1,f=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:p};const m=this;l=Math.floor(l),f=Math.floor(f),p=Math.floor(p);const _=[],g=[],b=[],S=[];let E=0,A=0;U("z","y","x",-1,-1,r,i,e,p,f,0),U("z","y","x",1,-1,r,i,-e,p,f,1),U("x","z","y",1,1,e,r,i,l,p,2),U("x","z","y",1,-1,e,r,-i,l,p,3),U("x","y","z",1,-1,e,i,r,l,f,4),U("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(_),this.setAttribute("position",new Oi(g,3)),this.setAttribute("normal",new Oi(b,3)),this.setAttribute("uv",new Oi(S,2));function U(L,T,M,X,H,q,Q,V,k,ue,F){const O=q/k,K=Q/ue,ae=q/2,le=Q/2,Te=V/2,Me=k+1,B=ue+1;let $=0,te=0;const Re=new xe;for(let ce=0;ce<B;ce++){const I=ce*K-le;for(let re=0;re<Me;re++){const we=re*O-ae;Re[L]=we*X,Re[T]=I*H,Re[M]=Te,g.push(Re.x,Re.y,Re.z),Re[L]=0,Re[T]=0,Re[M]=V>0?1:-1,b.push(Re.x,Re.y,Re.z),S.push(re/k),S.push(1-ce/ue),$+=1}}for(let ce=0;ce<ue;ce++)for(let I=0;I<k;I++){const re=E+I+Me*ce,we=E+I+Me*(ce+1),ze=E+(I+1)+Me*(ce+1),et=E+(I+1)+Me*ce;_.push(re,we,et),_.push(we,ze,et),te+=6}m.addGroup(A,te,F),A+=te,E+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function di(o){const e={};for(let i=0;i<o.length;i++){const r=Fo(o[i]);for(const l in r)e[l]=r[l]}return e}function qS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Y_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tn.workingColorSpace}const YS={clone:Fo,merge:di};var jS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=qS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const p=this.uniforms[l].value;p&&p.isTexture?i.uniforms[l]={type:"t",value:p.toJSON(e).uuid}:p&&p.isColor?i.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[l]={type:"m4",value:p.toArray()}:i.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class j_ extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new xe,kx=new Dt,Xx=new Dt;class qi extends j_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yp*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,i){return this.getViewBounds(e,kx,Xx),i.subVectors(Xx,kx)}setViewOffset(e,i,r,l,f,p){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ku*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const p=this.view;if(this.view!==null&&this.view.enabled){const _=p.fullWidth,g=p.fullHeight;f+=p.offsetX*l/_,i-=p.offsetY*r/g,l*=p.width/_,r*=p.height/g}const m=this.filmOffset;m!==0&&(f+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const To=-90,Ao=1;class KS extends ti{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qi(To,Ao,e,i);l.layers=this.layers,this.add(l);const f=new qi(To,Ao,e,i);f.layers=this.layers,this.add(f);const p=new qi(To,Ao,e,i);p.layers=this.layers,this.add(p);const m=new qi(To,Ao,e,i);m.layers=this.layers,this.add(m);const _=new qi(To,Ao,e,i);_.layers=this.layers,this.add(_);const g=new qi(To,Ao,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,p,m,_]=i;for(const g of i)this.remove(g);if(e===xa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===Yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,p,m,_,g,b]=this.children,S=e.getRenderTarget(),E=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),U=e.xr.enabled;e.xr.enabled=!1;const L=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,p),e.setRenderTarget(r,2,l),e.render(i,m),e.setRenderTarget(r,3,l),e.render(i,_),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=L,e.setRenderTarget(r,5,l),e.render(i,b),e.setRenderTarget(S,E,A),e.xr.enabled=U,r.texture.needsPMREMUpdate=!0}}class Z_ extends pi{constructor(e=[],i=No,r,l,f,p,m,_,g,b){super(e,i,r,l,f,p,m,_,g,b),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QS extends Ms{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Z_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Jl(5,5,5),f=new er({name:"CubemapFromEquirect",uniforms:Fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mi,blending:Ja});f.uniforms.tEquirect.value=i;const p=new Li(l,f),m=i.minFilter;return i.minFilter===ys&&(i.minFilter=Yi),new KS(1,10,this).update(e,p),i.minFilter=m,p.geometry.dispose(),p.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let p=0;p<6;p++)e.setRenderTarget(this,p),e.clear(i,r,l);e.setRenderTarget(f)}}class Xl extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class Yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new xe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new xe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new xe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new xe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,p=null;const m=this._targetRay,_=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){p=!0;for(const L of e.hand.values()){const T=i.getJointPose(L,r),M=this._getHandJoint(g,L);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}const b=g.joints["index-finger-tip"],S=g.joints["thumb-tip"],E=b.position.distanceTo(S.position),A=.02,U=.005;g.inputState.pinching&&E>A+U?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&E<=A-U&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return m!==null&&(m.visible=l!==null),_!==null&&(_.visible=f!==null),g!==null&&(g.visible=p!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Xl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class $S extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class eb extends pi{constructor(e=null,i=1,r=1,l,f,p,m,_,g=Ni,b=Ni,S,E){super(null,p,m,_,g,b,l,f,S,E),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new xe,tb=new xe,nb=new Ft;class zr{constructor(e=new xe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=jd.subVectors(r,i).cross(tb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(jd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||nb.getNormalMatrix(e),l=this.coplanarPoint(jd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Ju,ib=new Dt(.5,.5),Nu=new xe;class om{constructor(e=new zr,i=new zr,r=new zr,l=new zr,f=new zr,p=new zr){this.planes=[e,i,r,l,f,p]}set(e,i,r,l,f,p){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(f),m[5].copy(p),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=xa,r=!1){const l=this.planes,f=e.elements,p=f[0],m=f[1],_=f[2],g=f[3],b=f[4],S=f[5],E=f[6],A=f[7],U=f[8],L=f[9],T=f[10],M=f[11],X=f[12],H=f[13],q=f[14],Q=f[15];if(l[0].setComponents(g-p,A-b,M-U,Q-X).normalize(),l[1].setComponents(g+p,A+b,M+U,Q+X).normalize(),l[2].setComponents(g+m,A+S,M+L,Q+H).normalize(),l[3].setComponents(g-m,A-S,M-L,Q-H).normalize(),r)l[4].setComponents(_,E,T,q).normalize(),l[5].setComponents(g-_,A-E,M-T,Q-q).normalize();else if(l[4].setComponents(g-_,A-E,M-T,Q-q).normalize(),i===xa)l[5].setComponents(g+_,A+E,M+T,Q+q).normalize();else if(i===Yu)l[5].setComponents(_,E,T,q).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const i=ib.distanceTo(e.center);return ms.radius=.7071067811865476+i,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nu.x=l.normal.x>0?e.max.x:e.min.x,Nu.y=l.normal.y>0?e.max.y:e.min.y,Nu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class K_ extends Io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zu=new xe,Ku=new xe,Wx=new Mn,Gl=new $u,Ou=new Ju,Zd=new xe,qx=new xe;class ab extends ti{constructor(e=new oa,i=new K_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,f=i.count;l<f;l++)Zu.fromBufferAttribute(i,l-1),Ku.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Zu.distanceTo(Ku);e.setAttribute("lineDistance",new Oi(r,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,p=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(l),Ou.radius+=f,e.ray.intersectsSphere(Ou)===!1)return;Wx.copy(l).invert(),Gl.copy(e.ray).applyMatrix4(Wx);const m=f/((this.scale.x+this.scale.y+this.scale.z)/3),_=m*m,g=this.isLineSegments?2:1,b=r.index,E=r.attributes.position;if(b!==null){const A=Math.max(0,p.start),U=Math.min(b.count,p.start+p.count);for(let L=A,T=U-1;L<T;L+=g){const M=b.getX(L),X=b.getX(L+1),H=Pu(this,e,Gl,_,M,X,L);H&&i.push(H)}if(this.isLineLoop){const L=b.getX(U-1),T=b.getX(A),M=Pu(this,e,Gl,_,L,T,U-1);M&&i.push(M)}}else{const A=Math.max(0,p.start),U=Math.min(E.count,p.start+p.count);for(let L=A,T=U-1;L<T;L+=g){const M=Pu(this,e,Gl,_,L,L+1,L);M&&i.push(M)}if(this.isLineLoop){const L=Pu(this,e,Gl,_,U-1,A,U-1);L&&i.push(L)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const m=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}}function Pu(o,e,i,r,l,f,p){const m=o.geometry.attributes.position;if(Zu.fromBufferAttribute(m,l),Ku.fromBufferAttribute(m,f),i.distanceSqToSegment(Zu,Ku,Zd,qx)>r)return;Zd.applyMatrix4(o.matrixWorld);const g=e.ray.origin.distanceTo(Zd);if(!(g<e.near||g>e.far))return{distance:g,point:qx.clone().applyMatrix4(o.matrixWorld),index:p,face:null,faceIndex:null,barycoord:null,object:o}}const Yx=new xe,jx=new xe;class rb extends ab{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,f=i.count;l<f;l+=2)Yx.fromBufferAttribute(i,l),jx.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Yx.distanceTo(jx);e.setAttribute("lineDistance",new Oi(r,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q_ extends pi{constructor(e,i,r=Ss,l,f,p,m=Ni,_=Ni,g,b=jl,S=1){if(b!==jl&&b!==Zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const E={width:e,height:i,depth:S};super(E,l,f,p,m,_,b,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class J_ extends pi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ef extends oa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,p=i/2,m=Math.floor(r),_=Math.floor(l),g=m+1,b=_+1,S=e/m,E=i/_,A=[],U=[],L=[],T=[];for(let M=0;M<b;M++){const X=M*E-p;for(let H=0;H<g;H++){const q=H*S-f;U.push(q,-X,0),L.push(0,0,1),T.push(H/m),T.push(1-M/_)}}for(let M=0;M<_;M++)for(let X=0;X<m;X++){const H=X+g*M,q=X+g*(M+1),Q=X+1+g*(M+1),V=X+1+g*M;A.push(H,q,V),A.push(q,Q,V)}this.setIndex(A),this.setAttribute("position",new Oi(U,3)),this.setAttribute("normal",new Oi(L,3)),this.setAttribute("uv",new Oi(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fr extends Io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I_,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sb extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ob extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $_ extends ti{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Kd=new Mn,Zx=new xe,Kx=new xe;class lb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=va,this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new om,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Zx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zx),Kx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Kx),i.updateMatrixWorld(),Kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ev extends j_{constructor(e=-1,i=1,r=1,l=-1,f=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=p,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,p=r+e,m=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,p=f+g*this.view.width,m-=b*this.view.offsetY,_=m-b*this.view.height}this.projectionMatrix.makeOrthographic(f,p,m,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cb extends lb{constructor(){super(new ev(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qx extends $_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new cb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ub extends $_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class fb extends qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jx=new Mn;class hb{constructor(e,i,r=0,l=1/0){this.ray=new $u(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new sm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Cn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Jx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jx),this}intersectObject(e,i=!0,r=[]){return jp(e,this,r,i),r.sort($x),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)jp(e[l],this,r,i);return r.sort($x),r}}function $x(o,e){return o.distance-e.distance}function jp(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let p=0,m=f.length;p<m;p++)jp(f[p],e,i,!0)}}class e_{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Xt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class db extends rb{constructor(e=10,i=10,r=4473924,l=8947848){r=new Zt(r),l=new Zt(l);const f=i/2,p=e/i,m=e/2,_=[],g=[];for(let E=0,A=0,U=-m;E<=i;E++,U+=p){_.push(-m,0,U,m,0,U),_.push(U,0,-m,U,0,m);const L=E===f?r:l;L.toArray(g,A),A+=3,L.toArray(g,A),A+=3,L.toArray(g,A),A+=3,L.toArray(g,A),A+=3}const b=new oa;b.setAttribute("position",new Oi(_,3)),b.setAttribute("color",new Oi(g,3));const S=new K_({vertexColors:!0,toneMapped:!1});super(b,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class pb extends Es{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){wt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function t_(o,e,i,r){const l=mb(r);switch(i){case F_:return o*e;case B_:return o*e/l.components*l.byteLength;case tm:return o*e/l.components*l.byteLength;case nm:return o*e*2/l.components*l.byteLength;case im:return o*e*2/l.components*l.byteLength;case z_:return o*e*3/l.components*l.byteLength;case sa:return o*e*4/l.components*l.byteLength;case am:return o*e*4/l.components*l.byteLength;case Iu:case Hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vu:case Gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yp:case bp:return Math.max(o,16)*Math.max(e,8)/4;case vp:case Sp:return Math.max(o,8)*Math.max(e,8)/2;case Mp:case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Np:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ip:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Hp:case Vp:case Gp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case kp:case Xp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wp:case qp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mb(o){switch(o){case va:case L_:return{byteLength:1,components:1};case ql:case N_:case zo:return{byteLength:2,components:1};case $p:case em:return{byteLength:2,components:4};case Ss:case Jp:case Qa:return{byteLength:4,components:1};case O_:case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);function tv(){let o=null,e=!1,i=null,r=null;function l(f,p){i(f,p),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function gb(o){const e=new WeakMap;function i(m,_){const g=m.array,b=m.usage,S=g.byteLength,E=o.createBuffer();o.bindBuffer(_,E),o.bufferData(_,g,b),m.onUploadCallback();let A;if(g instanceof Float32Array)A=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)A=o.HALF_FLOAT;else if(g instanceof Uint16Array)m.isFloat16BufferAttribute?A=o.HALF_FLOAT:A=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=o.SHORT;else if(g instanceof Uint32Array)A=o.UNSIGNED_INT;else if(g instanceof Int32Array)A=o.INT;else if(g instanceof Int8Array)A=o.BYTE;else if(g instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:m.version,size:S}}function r(m,_,g){const b=_.array,S=_.updateRanges;if(o.bindBuffer(g,m),S.length===0)o.bufferSubData(g,0,b);else{S.sort((A,U)=>A.start-U.start);let E=0;for(let A=1;A<S.length;A++){const U=S[E],L=S[A];L.start<=U.start+U.count+1?U.count=Math.max(U.count,L.start+L.count-U.start):(++E,S[E]=L)}S.length=E+1;for(let A=0,U=S.length;A<U;A++){const L=S[A];o.bufferSubData(g,L.start*b.BYTES_PER_ELEMENT,b,L.start,L.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=e.get(m);_&&(o.deleteBuffer(_.buffer),e.delete(m))}function p(m,_){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const b=e.get(m);(!b||b.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const g=e.get(m);if(g===void 0)e.set(m,i(m,_));else if(g.version<m.version){if(g.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,m,_),g.version=m.version}}return{get:l,remove:f,update:p}}var xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_b=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Db=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ub=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ME=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:xb,alphahash_pars_fragment:_b,alphamap_fragment:vb,alphamap_pars_fragment:yb,alphatest_fragment:Sb,alphatest_pars_fragment:bb,aomap_fragment:Mb,aomap_pars_fragment:Eb,batching_pars_vertex:Tb,batching_vertex:Ab,begin_vertex:wb,beginnormal_vertex:Rb,bsdfs:Cb,iridescence_fragment:Db,bumpmap_pars_fragment:Ub,clipping_planes_fragment:Lb,clipping_planes_pars_fragment:Nb,clipping_planes_pars_vertex:Ob,clipping_planes_vertex:Pb,color_fragment:Fb,color_pars_fragment:zb,color_pars_vertex:Bb,color_vertex:Ib,common:Hb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:Gb,displacementmap_pars_vertex:kb,displacementmap_vertex:Xb,emissivemap_fragment:Wb,emissivemap_pars_fragment:qb,colorspace_fragment:Yb,colorspace_pars_fragment:jb,envmap_fragment:Zb,envmap_common_pars_fragment:Kb,envmap_pars_fragment:Qb,envmap_pars_vertex:Jb,envmap_physical_pars_fragment:cM,envmap_vertex:$b,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:aM,lightmap_pars_fragment:rM,lights_lambert_fragment:sM,lights_lambert_pars_fragment:oM,lights_pars_begin:lM,lights_toon_fragment:uM,lights_toon_pars_fragment:fM,lights_phong_fragment:hM,lights_phong_pars_fragment:dM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:xM,lights_fragment_end:_M,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:bM,map_fragment:MM,map_pars_fragment:EM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:wM,metalnessmap_pars_fragment:RM,morphinstance_vertex:CM,morphcolor_vertex:DM,morphnormal_vertex:UM,morphtarget_pars_vertex:LM,morphtarget_vertex:NM,normal_fragment_begin:OM,normal_fragment_maps:PM,normal_pars_fragment:FM,normal_pars_vertex:zM,normal_vertex:BM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:kM,opaque_fragment:XM,packing:WM,premultiplied_alpha_fragment:qM,project_vertex:YM,dithering_fragment:jM,dithering_pars_fragment:ZM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:$M,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:aE,skinnormal_vertex:rE,specularmap_fragment:sE,specularmap_pars_fragment:oE,tonemapping_fragment:lE,tonemapping_pars_fragment:cE,transmission_fragment:uE,transmission_pars_fragment:fE,uv_pars_fragment:hE,uv_pars_vertex:dE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:xE,backgroundCube_vert:_E,backgroundCube_frag:vE,cube_vert:yE,cube_frag:SE,depth_vert:bE,depth_frag:ME,distanceRGBA_vert:EE,distanceRGBA_frag:TE,equirect_vert:AE,equirect_frag:wE,linedashed_vert:RE,linedashed_frag:CE,meshbasic_vert:DE,meshbasic_frag:UE,meshlambert_vert:LE,meshlambert_frag:NE,meshmatcap_vert:OE,meshmatcap_frag:PE,meshnormal_vert:FE,meshnormal_frag:zE,meshphong_vert:BE,meshphong_frag:IE,meshphysical_vert:HE,meshphysical_frag:VE,meshtoon_vert:GE,meshtoon_frag:kE,points_vert:XE,points_frag:WE,shadow_vert:qE,shadow_frag:YE,sprite_vert:jE,sprite_frag:ZE},$e={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ma={basic:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:di([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:di([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:di([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:di([$e.points,$e.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:di([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:di([$e.common,$e.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:di([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:di([$e.sprite,$e.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:di([$e.common,$e.displacementmap,{referencePosition:{value:new xe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:di([$e.lights,$e.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};ma.physical={uniforms:di([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Fu={r:0,b:0,g:0},gs=new ya,KE=new Mn;function QE(o,e,i,r,l,f,p){const m=new Zt(0);let _=f===!0?0:1,g,b,S=null,E=0,A=null;function U(H){let q=H.isScene===!0?H.background:null;return q&&q.isTexture&&(q=(H.backgroundBlurriness>0?i:e).get(q)),q}function L(H){let q=!1;const Q=U(H);Q===null?M(m,_):Q&&Q.isColor&&(M(Q,1),q=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,p):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,p),(o.autoClear||q)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(H,q){const Q=U(q);Q&&(Q.isCubeTexture||Q.mapping===Qu)?(b===void 0&&(b=new Li(new Jl(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Fo(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(V,k,ue){this.matrixWorld.copyPosition(ue.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(b)),gs.copy(q.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,Q.isCubeTexture&&Q.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),b.material.uniforms.envMap.value=Q,b.material.uniforms.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1,b.material.uniforms.backgroundBlurriness.value=q.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=q.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(gs)),b.material.toneMapped=tn.getTransfer(Q.colorSpace)!==pn,(S!==Q||E!==Q.version||A!==o.toneMapping)&&(b.material.needsUpdate=!0,S=Q,E=Q.version,A=o.toneMapping),b.layers.enableAll(),H.unshift(b,b.geometry,b.material,0,0,null)):Q&&Q.isTexture&&(g===void 0&&(g=new Li(new ef(2,2),new er({name:"BackgroundMaterial",uniforms:Fo(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=Q,g.material.uniforms.backgroundIntensity.value=q.backgroundIntensity,g.material.toneMapped=tn.getTransfer(Q.colorSpace)!==pn,Q.matrixAutoUpdate===!0&&Q.updateMatrix(),g.material.uniforms.uvTransform.value.copy(Q.matrix),(S!==Q||E!==Q.version||A!==o.toneMapping)&&(g.material.needsUpdate=!0,S=Q,E=Q.version,A=o.toneMapping),g.layers.enableAll(),H.unshift(g,g.geometry,g.material,0,0,null))}function M(H,q){H.getRGB(Fu,Y_(o)),r.buffers.color.setClear(Fu.r,Fu.g,Fu.b,q,p)}function X(){b!==void 0&&(b.geometry.dispose(),b.material.dispose(),b=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return m},setClearColor:function(H,q=1){m.set(H),_=q,M(m,_)},getClearAlpha:function(){return _},setClearAlpha:function(H){_=H,M(m,_)},render:L,addToRenderList:T,dispose:X}}function JE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=E(null);let f=l,p=!1;function m(O,K,ae,le,Te){let Me=!1;const B=S(le,ae,K);f!==B&&(f=B,g(f.object)),Me=A(O,le,ae,Te),Me&&U(O,le,ae,Te),Te!==null&&e.update(Te,o.ELEMENT_ARRAY_BUFFER),(Me||p)&&(p=!1,q(O,K,ae,le),Te!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Te).buffer))}function _(){return o.createVertexArray()}function g(O){return o.bindVertexArray(O)}function b(O){return o.deleteVertexArray(O)}function S(O,K,ae){const le=ae.wireframe===!0;let Te=r[O.id];Te===void 0&&(Te={},r[O.id]=Te);let Me=Te[K.id];Me===void 0&&(Me={},Te[K.id]=Me);let B=Me[le];return B===void 0&&(B=E(_()),Me[le]=B),B}function E(O){const K=[],ae=[],le=[];for(let Te=0;Te<i;Te++)K[Te]=0,ae[Te]=0,le[Te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ae,attributeDivisors:le,object:O,attributes:{},index:null}}function A(O,K,ae,le){const Te=f.attributes,Me=K.attributes;let B=0;const $=ae.getAttributes();for(const te in $)if($[te].location>=0){const ce=Te[te];let I=Me[te];if(I===void 0&&(te==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),te==="instanceColor"&&O.instanceColor&&(I=O.instanceColor)),ce===void 0||ce.attribute!==I||I&&ce.data!==I.data)return!0;B++}return f.attributesNum!==B||f.index!==le}function U(O,K,ae,le){const Te={},Me=K.attributes;let B=0;const $=ae.getAttributes();for(const te in $)if($[te].location>=0){let ce=Me[te];ce===void 0&&(te==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),te==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor));const I={};I.attribute=ce,ce&&ce.data&&(I.data=ce.data),Te[te]=I,B++}f.attributes=Te,f.attributesNum=B,f.index=le}function L(){const O=f.newAttributes;for(let K=0,ae=O.length;K<ae;K++)O[K]=0}function T(O){M(O,0)}function M(O,K){const ae=f.newAttributes,le=f.enabledAttributes,Te=f.attributeDivisors;ae[O]=1,le[O]===0&&(o.enableVertexAttribArray(O),le[O]=1),Te[O]!==K&&(o.vertexAttribDivisor(O,K),Te[O]=K)}function X(){const O=f.newAttributes,K=f.enabledAttributes;for(let ae=0,le=K.length;ae<le;ae++)K[ae]!==O[ae]&&(o.disableVertexAttribArray(ae),K[ae]=0)}function H(O,K,ae,le,Te,Me,B){B===!0?o.vertexAttribIPointer(O,K,ae,Te,Me):o.vertexAttribPointer(O,K,ae,le,Te,Me)}function q(O,K,ae,le){L();const Te=le.attributes,Me=ae.getAttributes(),B=K.defaultAttributeValues;for(const $ in Me){const te=Me[$];if(te.location>=0){let Re=Te[$];if(Re===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(Re=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(Re=O.instanceColor)),Re!==void 0){const ce=Re.normalized,I=Re.itemSize,re=e.get(Re);if(re===void 0)continue;const we=re.buffer,ze=re.type,et=re.bytesPerElement,me=ze===o.INT||ze===o.UNSIGNED_INT||Re.gpuType===Jp;if(Re.isInterleavedBufferAttribute){const Se=Re.data,qe=Se.stride,lt=Re.offset;if(Se.isInstancedInterleavedBuffer){for(let ft=0;ft<te.locationSize;ft++)M(te.location+ft,Se.meshPerAttribute);O.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ft=0;ft<te.locationSize;ft++)T(te.location+ft);o.bindBuffer(o.ARRAY_BUFFER,we);for(let ft=0;ft<te.locationSize;ft++)H(te.location+ft,I/te.locationSize,ze,ce,qe*et,(lt+I/te.locationSize*ft)*et,me)}else{if(Re.isInstancedBufferAttribute){for(let Se=0;Se<te.locationSize;Se++)M(te.location+Se,Re.meshPerAttribute);O.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Se=0;Se<te.locationSize;Se++)T(te.location+Se);o.bindBuffer(o.ARRAY_BUFFER,we);for(let Se=0;Se<te.locationSize;Se++)H(te.location+Se,I/te.locationSize,ze,ce,I*et,I/te.locationSize*Se*et,me)}}else if(B!==void 0){const ce=B[$];if(ce!==void 0)switch(ce.length){case 2:o.vertexAttrib2fv(te.location,ce);break;case 3:o.vertexAttrib3fv(te.location,ce);break;case 4:o.vertexAttrib4fv(te.location,ce);break;default:o.vertexAttrib1fv(te.location,ce)}}}}X()}function Q(){ue();for(const O in r){const K=r[O];for(const ae in K){const le=K[ae];for(const Te in le)b(le[Te].object),delete le[Te];delete K[ae]}delete r[O]}}function V(O){if(r[O.id]===void 0)return;const K=r[O.id];for(const ae in K){const le=K[ae];for(const Te in le)b(le[Te].object),delete le[Te];delete K[ae]}delete r[O.id]}function k(O){for(const K in r){const ae=r[K];if(ae[O.id]===void 0)continue;const le=ae[O.id];for(const Te in le)b(le[Te].object),delete le[Te];delete ae[O.id]}}function ue(){F(),p=!0,f!==l&&(f=l,g(f.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:ue,resetDefaultState:F,dispose:Q,releaseStatesOfGeometry:V,releaseStatesOfProgram:k,initAttributes:L,enableAttribute:T,disableUnusedAttributes:X}}function $E(o,e,i){let r;function l(g){r=g}function f(g,b){o.drawArrays(r,g,b),i.update(b,r,1)}function p(g,b,S){S!==0&&(o.drawArraysInstanced(r,g,b,S),i.update(b,r,S))}function m(g,b,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,b,0,S);let A=0;for(let U=0;U<S;U++)A+=b[U];i.update(A,r,1)}function _(g,b,S,E){if(S===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let U=0;U<g.length;U++)p(g[U],b[U],E[U]);else{A.multiDrawArraysInstancedWEBGL(r,g,0,b,0,E,0,S);let U=0;for(let L=0;L<S;L++)U+=b[L]*E[L];i.update(U,r,1)}}this.setMode=l,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function e1(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function p(k){return!(k!==sa&&r.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(k){const ue=k===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==va&&r.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Qa&&!ue)}function _(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const b=_(g);b!==g&&(wt("WebGLRenderer:",g,"not supported, using",b,"instead."),g=b);const S=i.logarithmicDepthBuffer===!0,E=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),A=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),X=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),q=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Q=U>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:p,textureTypeReadable:m,precision:g,logarithmicDepthBuffer:S,reversedDepthBuffer:E,maxTextures:A,maxVertexTextures:U,maxTextureSize:L,maxCubemapSize:T,maxAttributes:M,maxVertexUniforms:X,maxVaryings:H,maxFragmentUniforms:q,vertexTextures:Q,maxSamples:V}}function t1(o){const e=this;let i=null,r=0,l=!1,f=!1;const p=new zr,m=new Ft,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(S,E){const A=S.length!==0||E||r!==0||l;return l=E,r=S.length,A},this.beginShadows=function(){f=!0,b(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(S,E){i=b(S,E,0)},this.setState=function(S,E,A){const U=S.clippingPlanes,L=S.clipIntersection,T=S.clipShadows,M=o.get(S);if(!l||U===null||U.length===0||f&&!T)f?b(null):g();else{const X=f?0:r,H=X*4;let q=M.clippingState||null;_.value=q,q=b(U,E,H,A);for(let Q=0;Q!==H;++Q)q[Q]=i[Q];M.clippingState=q,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=X}};function g(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function b(S,E,A,U){const L=S!==null?S.length:0;let T=null;if(L!==0){if(T=_.value,U!==!0||T===null){const M=A+L*4,X=E.matrixWorldInverse;m.getNormalMatrix(X),(T===null||T.length<M)&&(T=new Float32Array(M));for(let H=0,q=A;H!==L;++H,q+=4)p.copy(S[H]).applyMatrix4(X,m),p.normal.toArray(T,q),T[q+3]=p.constant}_.value=T,_.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,T}}function n1(o){let e=new WeakMap;function i(p,m){return m===mp?p.mapping=No:m===gp&&(p.mapping=Oo),p}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===mp||m===gp)if(e.has(p)){const _=e.get(p).texture;return i(_,p.mapping)}else{const _=p.image;if(_&&_.height>0){const g=new QS(_.height);return g.fromEquirectangularTexture(o,p),e.set(p,g),p.addEventListener("dispose",l),i(g.texture,p.mapping)}else return null}}return p}function l(p){const m=p.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const Ir=4,n_=[.125,.215,.35,.446,.526,.582],vs=20,i1=256,kl=new ev,i_=new Zt;let Qd=null,Jd=0,$d=0,ep=!1;const a1=new xe;class a_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,f={}){const{size:p=256,position:m=a1}=f;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(p);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,r,l,_,m),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qd,Jd,$d),this._renderer.xr.enabled=ep,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===No||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:zo,format:sa,colorSpace:Po,depthBuffer:!1},l=r_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(e,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=r1(f)),this._blurMaterial=o1(f,e,i)}return l}_compileMaterial(e){const i=new Li(new oa,e);this._renderer.compile(i,kl)}_sceneToCubeUV(e,i,r,l,f){const _=new qi(90,1,i,r),g=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],S=this._renderer,E=S.autoClear,A=S.toneMapping;S.getClearColor(i_),S.toneMapping=Hr,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Jl,new X_({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,T=L.material;let M=!1;const X=e.background;X?X.isColor&&(T.color.copy(X),e.background=null,M=!0):(T.color.copy(i_),M=!0);for(let H=0;H<6;H++){const q=H%3;q===0?(_.up.set(0,g[H],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+b[H],f.y,f.z)):q===1?(_.up.set(0,0,g[H]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+b[H],f.z)):(_.up.set(0,g[H],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+b[H]));const Q=this._cubeSize;wo(l,q*Q,H>2?Q:0,Q,Q),S.setRenderTarget(l),M&&S.render(L,_),S.render(e,_)}S.toneMapping=A,S.autoClear=E,e.background=X}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===No||e.mapping===Oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=o_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());const f=l?this._cubemapMaterial:this._equirectMaterial,p=this._lodMeshes[0];p.material=f;const m=f.uniforms;m.envMap.value=e;const _=this._cubeSize;wo(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(p,kl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,f=this._pingPongRenderTarget;if(this._ggxMaterial===null){const X=3*Math.max(this._cubeSize,16),H=4*this._cubeSize;this._ggxMaterial=s1(this._lodMax,X,H)}const p=this._ggxMaterial,m=this._lodMeshes[r];m.material=p;const _=p.uniforms,g=r/(this._lodMeshes.length-1),b=i/(this._lodMeshes.length-1),S=Math.sqrt(g*g-b*b),E=.05+g*.95,A=S*E,{_lodMax:U}=this,L=this._sizeLods[r],T=3*L*(r>U-Ir?r-U+Ir:0),M=4*(this._cubeSize-L);_.envMap.value=e.texture,_.roughness.value=A,_.mipInt.value=U-i,wo(f,T,M,3*L,2*L),l.setRenderTarget(f),l.render(m,kl),_.envMap.value=f.texture,_.roughness.value=0,_.mipInt.value=U-r,wo(e,T,M,3*L,2*L),l.setRenderTarget(e),l.render(m,kl)}_blur(e,i,r,l,f){const p=this._pingPongRenderTarget;this._halfBlur(e,p,i,r,l,"latitudinal",f),this._halfBlur(p,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,p,m){const _=this._renderer,g=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&Cn("blur direction must be either latitudinal or longitudinal!");const b=3,S=this._lodMeshes[l];S.material=g;const E=g.uniforms,A=this._sizeLods[r]-1,U=isFinite(f)?Math.PI/(2*A):2*Math.PI/(2*vs-1),L=f/U,T=isFinite(f)?1+Math.floor(b*L):vs;T>vs&&wt(`sigmaRadians, ${f}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${vs}`);const M=[];let X=0;for(let k=0;k<vs;++k){const ue=k/L,F=Math.exp(-ue*ue/2);M.push(F),k===0?X+=F:k<T&&(X+=2*F)}for(let k=0;k<M.length;k++)M[k]=M[k]/X;E.envMap.value=e.texture,E.samples.value=T,E.weights.value=M,E.latitudinal.value=p==="latitudinal",m&&(E.poleAxis.value=m);const{_lodMax:H}=this;E.dTheta.value=U,E.mipInt.value=H-r;const q=this._sizeLods[l],Q=3*q*(l>H-Ir?l-H+Ir:0),V=4*(this._cubeSize-q);wo(i,Q,V,3*q,2*q),_.setRenderTarget(i),_.render(S,kl)}}function r1(o){const e=[],i=[],r=[];let l=o;const f=o-Ir+1+n_.length;for(let p=0;p<f;p++){const m=Math.pow(2,l);e.push(m);let _=1/m;p>o-Ir?_=n_[p-o+Ir-1]:p===0&&(_=0),i.push(_);const g=1/(m-2),b=-g,S=1+g,E=[b,b,S,b,S,S,b,b,S,S,b,S],A=6,U=6,L=3,T=2,M=1,X=new Float32Array(L*U*A),H=new Float32Array(T*U*A),q=new Float32Array(M*U*A);for(let V=0;V<A;V++){const k=V%3*2/3-1,ue=V>2?0:-1,F=[k,ue,0,k+2/3,ue,0,k+2/3,ue+1,0,k,ue,0,k+2/3,ue+1,0,k,ue+1,0];X.set(F,L*U*V),H.set(E,T*U*V);const O=[V,V,V,V,V,V];q.set(O,M*U*V)}const Q=new oa;Q.setAttribute("position",new _a(X,L)),Q.setAttribute("uv",new _a(H,T)),Q.setAttribute("faceIndex",new _a(q,M)),r.push(new Li(Q,null)),l>Ir&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function r_(o,e,i){const r=new Ms(o,e,i);return r.texture.mapping=Qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wo(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function s1(o,e,i){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function o1(o,e,i){const r=new Float32Array(vs),l=new xe(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function s_(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function o_(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function tf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l1(o){let e=new WeakMap,i=null;function r(m){if(m&&m.isTexture){const _=m.mapping,g=_===mp||_===gp,b=_===No||_===Oo;if(g||b){let S=e.get(m);const E=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==E)return i===null&&(i=new a_(o)),S=g?i.fromEquirectangular(m,S):i.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,e.set(m,S),S.texture;if(S!==void 0)return S.texture;{const A=m.image;return g&&A&&A.height>0||b&&A&&l(A)?(i===null&&(i=new a_(o)),S=g?i.fromEquirectangular(m):i.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,e.set(m,S),m.addEventListener("dispose",f),S.texture):null}}}return m}function l(m){let _=0;const g=6;for(let b=0;b<g;b++)m[b]!==void 0&&_++;return _===g}function f(m){const _=m.target;_.removeEventListener("dispose",f);const g=e.get(_);g!==void 0&&(e.delete(_),g.dispose())}function p(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function c1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Kl("WebGLRenderer: "+r+" extension not supported."),l}}}function u1(o,e,i,r){const l={},f=new WeakMap;function p(S){const E=S.target;E.index!==null&&e.remove(E.index);for(const U in E.attributes)e.remove(E.attributes[U]);E.removeEventListener("dispose",p),delete l[E.id];const A=f.get(E);A&&(e.remove(A),f.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function m(S,E){return l[E.id]===!0||(E.addEventListener("dispose",p),l[E.id]=!0,i.memory.geometries++),E}function _(S){const E=S.attributes;for(const A in E)e.update(E[A],o.ARRAY_BUFFER)}function g(S){const E=[],A=S.index,U=S.attributes.position;let L=0;if(A!==null){const X=A.array;L=A.version;for(let H=0,q=X.length;H<q;H+=3){const Q=X[H+0],V=X[H+1],k=X[H+2];E.push(Q,V,V,k,k,Q)}}else if(U!==void 0){const X=U.array;L=U.version;for(let H=0,q=X.length/3-1;H<q;H+=3){const Q=H+0,V=H+1,k=H+2;E.push(Q,V,V,k,k,Q)}}else return;const T=new(V_(E)?q_:W_)(E,1);T.version=L;const M=f.get(S);M&&e.remove(M),f.set(S,T)}function b(S){const E=f.get(S);if(E){const A=S.index;A!==null&&E.version<A.version&&g(S)}else g(S);return f.get(S)}return{get:m,update:_,getWireframeAttribute:b}}function f1(o,e,i){let r;function l(E){r=E}let f,p;function m(E){f=E.type,p=E.bytesPerElement}function _(E,A){o.drawElements(r,A,f,E*p),i.update(A,r,1)}function g(E,A,U){U!==0&&(o.drawElementsInstanced(r,A,f,E*p,U),i.update(A,r,U))}function b(E,A,U){if(U===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,A,0,f,E,0,U);let T=0;for(let M=0;M<U;M++)T+=A[M];i.update(T,r,1)}function S(E,A,U,L){if(U===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let M=0;M<E.length;M++)g(E[M]/p,A[M],L[M]);else{T.multiDrawElementsInstancedWEBGL(r,A,0,f,E,0,L,0,U);let M=0;for(let X=0;X<U;X++)M+=A[X]*L[X];i.update(M,r,1)}}this.setMode=l,this.setIndex=m,this.render=_,this.renderInstances=g,this.renderMultiDraw=b,this.renderMultiDrawInstances=S}function h1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,p,m){switch(i.calls++,p){case o.TRIANGLES:i.triangles+=m*(f/3);break;case o.LINES:i.lines+=m*(f/2);break;case o.LINE_STRIP:i.lines+=m*(f-1);break;case o.LINE_LOOP:i.lines+=m*f;break;case o.POINTS:i.points+=m*f;break;default:Cn("WebGLInfo: Unknown draw mode:",p);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function d1(o,e,i){const r=new WeakMap,l=new Dn;function f(p,m,_){const g=p.morphTargetInfluences,b=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,S=b!==void 0?b.length:0;let E=r.get(m);if(E===void 0||E.count!==S){let O=function(){ue.dispose(),r.delete(m),m.removeEventListener("dispose",O)};var A=O;E!==void 0&&E.texture.dispose();const U=m.morphAttributes.position!==void 0,L=m.morphAttributes.normal!==void 0,T=m.morphAttributes.color!==void 0,M=m.morphAttributes.position||[],X=m.morphAttributes.normal||[],H=m.morphAttributes.color||[];let q=0;U===!0&&(q=1),L===!0&&(q=2),T===!0&&(q=3);let Q=m.attributes.position.count*q,V=1;Q>e.maxTextureSize&&(V=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const k=new Float32Array(Q*V*4*S),ue=new G_(k,Q,V,S);ue.type=Qa,ue.needsUpdate=!0;const F=q*4;for(let K=0;K<S;K++){const ae=M[K],le=X[K],Te=H[K],Me=Q*V*4*K;for(let B=0;B<ae.count;B++){const $=B*F;U===!0&&(l.fromBufferAttribute(ae,B),k[Me+$+0]=l.x,k[Me+$+1]=l.y,k[Me+$+2]=l.z,k[Me+$+3]=0),L===!0&&(l.fromBufferAttribute(le,B),k[Me+$+4]=l.x,k[Me+$+5]=l.y,k[Me+$+6]=l.z,k[Me+$+7]=0),T===!0&&(l.fromBufferAttribute(Te,B),k[Me+$+8]=l.x,k[Me+$+9]=l.y,k[Me+$+10]=l.z,k[Me+$+11]=Te.itemSize===4?l.w:1)}}E={count:S,texture:ue,size:new Dt(Q,V)},r.set(m,E),m.addEventListener("dispose",O)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",p.morphTexture,i);else{let U=0;for(let T=0;T<g.length;T++)U+=g[T];const L=m.morphTargetsRelative?1:1-U;_.getUniforms().setValue(o,"morphTargetBaseInfluence",L),_.getUniforms().setValue(o,"morphTargetInfluences",g)}_.getUniforms().setValue(o,"morphTargetsTexture",E.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",E.size)}return{update:f}}function p1(o,e,i,r){let l=new WeakMap;function f(_){const g=r.render.frame,b=_.geometry,S=e.get(_,b);if(l.get(S)!==g&&(e.update(S),l.set(S,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",m)===!1&&_.addEventListener("dispose",m),l.get(_)!==g&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),l.set(_,g))),_.isSkinnedMesh){const E=_.skeleton;l.get(E)!==g&&(E.update(),l.set(E,g))}return S}function p(){l=new WeakMap}function m(_){const g=_.target;g.removeEventListener("dispose",m),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const nv=new pi,l_=new Q_(1,1),iv=new G_,av=new OS,rv=new Z_,c_=[],u_=[],f_=new Float32Array(16),h_=new Float32Array(9),d_=new Float32Array(4);function Ho(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=c_[l];if(f===void 0&&(f=new Float32Array(l),c_[l]=f),e!==0){r.toArray(f,0);for(let p=1,m=0;p!==e;++p)m+=i,o[p].toArray(f,m)}return f}function Wn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function qn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function nf(o,e){let i=u_[e];i===void 0&&(i=new Int32Array(e),u_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function m1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function g1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2fv(this.addr,e),qn(i,e)}}function x1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Wn(i,e))return;o.uniform3fv(this.addr,e),qn(i,e)}}function _1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4fv(this.addr,e),qn(i,e)}}function v1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;d_.set(r),o.uniformMatrix2fv(this.addr,!1,d_),qn(i,r)}}function y1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;h_.set(r),o.uniformMatrix3fv(this.addr,!1,h_),qn(i,r)}}function S1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;f_.set(r),o.uniformMatrix4fv(this.addr,!1,f_),qn(i,r)}}function b1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function M1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2iv(this.addr,e),qn(i,e)}}function E1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wn(i,e))return;o.uniform3iv(this.addr,e),qn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4iv(this.addr,e),qn(i,e)}}function A1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function w1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2uiv(this.addr,e),qn(i,e)}}function R1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wn(i,e))return;o.uniform3uiv(this.addr,e),qn(i,e)}}function C1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4uiv(this.addr,e),qn(i,e)}}function D1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(l_.compareFunction=H_,f=l_):f=nv,i.setTexture2D(e||f,l)}function U1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||av,l)}function L1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||rv,l)}function N1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||iv,l)}function O1(o){switch(o){case 5126:return m1;case 35664:return g1;case 35665:return x1;case 35666:return _1;case 35674:return v1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return b1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return A1;case 36294:return w1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return N1}}function P1(o,e){o.uniform1fv(this.addr,e)}function F1(o,e){const i=Ho(e,this.size,2);o.uniform2fv(this.addr,i)}function z1(o,e){const i=Ho(e,this.size,3);o.uniform3fv(this.addr,i)}function B1(o,e){const i=Ho(e,this.size,4);o.uniform4fv(this.addr,i)}function I1(o,e){const i=Ho(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function H1(o,e){const i=Ho(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function V1(o,e){const i=Ho(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function G1(o,e){o.uniform1iv(this.addr,e)}function k1(o,e){o.uniform2iv(this.addr,e)}function X1(o,e){o.uniform3iv(this.addr,e)}function W1(o,e){o.uniform4iv(this.addr,e)}function q1(o,e){o.uniform1uiv(this.addr,e)}function Y1(o,e){o.uniform2uiv(this.addr,e)}function j1(o,e){o.uniform3uiv(this.addr,e)}function Z1(o,e){o.uniform4uiv(this.addr,e)}function K1(o,e,i){const r=this.cache,l=e.length,f=nf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture2D(e[p]||nv,f[p])}function Q1(o,e,i){const r=this.cache,l=e.length,f=nf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture3D(e[p]||av,f[p])}function J1(o,e,i){const r=this.cache,l=e.length,f=nf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTextureCube(e[p]||rv,f[p])}function $1(o,e,i){const r=this.cache,l=e.length,f=nf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture2DArray(e[p]||iv,f[p])}function e3(o){switch(o){case 5126:return P1;case 35664:return F1;case 35665:return z1;case 35666:return B1;case 35674:return I1;case 35675:return H1;case 35676:return V1;case 5124:case 35670:return G1;case 35667:case 35671:return k1;case 35668:case 35672:return X1;case 35669:case 35673:return W1;case 5125:return q1;case 36294:return Y1;case 36295:return j1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return $1}}class t3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=O1(i.type)}}class n3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=e3(i.type)}}class i3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,p=l.length;f!==p;++f){const m=l[f];m.setValue(e,i[m.id],r)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function p_(o,e){o.seq.push(e),o.map[e.id]=e}function a3(o,e,i){const r=o.name,l=r.length;for(tp.lastIndex=0;;){const f=tp.exec(r),p=tp.lastIndex;let m=f[1];const _=f[2]==="]",g=f[3];if(_&&(m=m|0),g===void 0||g==="["&&p+2===l){p_(i,g===void 0?new t3(m,o,e):new n3(m,o,e));break}else{let S=i.map[m];S===void 0&&(S=new i3(m),p_(i,S)),i=S}}}class Xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),p=e.getUniformLocation(i,f.name);a3(f,p,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,p=i.length;f!==p;++f){const m=i[f],_=r[m.id];_.needsUpdate!==!1&&m.setValue(e,_.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const p=e[l];p.id in i&&r.push(p)}return r}}function m_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const r3=37297;let s3=0;function o3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let p=l;p<f;p++){const m=p+1;r.push(`${m===e?">":" "} ${m}: ${i[p]}`)}return r.join(`
`)}const g_=new Ft;function l3(o){tn._getMatrix(g_,tn.workingColorSpace,o);const e=`mat3( ${g_.elements.map(i=>i.toFixed(4))} )`;switch(tn.getTransfer(o)){case qu:return[e,"LinearTransferOETF"];case pn:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function x_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const p=/ERROR: 0:(\d+)/.exec(f);if(p){const m=parseInt(p[1]);return i.toUpperCase()+`

`+f+`

`+o3(o.getShaderSource(e),m)}else return f}function c3(o,e){const i=l3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function u3(o,e){let i;switch(e){case oS:i="Linear";break;case lS:i="Reinhard";break;case cS:i="Cineon";break;case uS:i="ACESFilmic";break;case hS:i="AgX";break;case dS:i="Neutral";break;case fS:i="Custom";break;default:wt("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zu=new xe;function f3(){tn.getLuminanceCoefficients(zu);const o=zu.x.toFixed(4),e=zu.y.toFixed(4),i=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function d3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function p3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),p=f.name;let m=1;f.type===o.FLOAT_MAT2&&(m=2),f.type===o.FLOAT_MAT3&&(m=3),f.type===o.FLOAT_MAT4&&(m=4),i[p]={type:f.type,location:o.getAttribLocation(e,p),locationSize:m}}return i}function Wl(o){return o!==""}function __(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(o){return o.replace(m3,x3)}const g3=new Map;function x3(o,e){let i=Bt[e];if(i===void 0){const r=g3.get(e);if(r!==void 0)i=Bt[r],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zp(i)}const _3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y_(o){return o.replace(_3,v3)}function v3(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function S_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y3(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===C_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Hy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Za&&(e="SHADOWMAP_TYPE_VSM"),e}function S3(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case No:case Oo:e="ENVMAP_TYPE_CUBE";break;case Qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b3(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function M3(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case D_:e="ENVMAP_BLENDING_MULTIPLY";break;case rS:e="ENVMAP_BLENDING_MIX";break;case sS:e="ENVMAP_BLENDING_ADD";break}return e}function E3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function T3(o,e,i,r){const l=o.getContext(),f=i.defines;let p=i.vertexShader,m=i.fragmentShader;const _=y3(i),g=S3(i),b=b3(i),S=M3(i),E=E3(i),A=h3(i),U=d3(f),L=l.createProgram();let T,M,X=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(T=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,U].filter(Wl).join(`
`),T.length>0&&(T+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,U].filter(Wl).join(`
`),M.length>0&&(M+=`
`)):(T=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,U,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+b:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),M=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,U,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+b:"",i.envMap?"#define "+S:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hr?"#define TONE_MAPPING":"",i.toneMapping!==Hr?Bt.tonemapping_pars_fragment:"",i.toneMapping!==Hr?u3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,c3("linearToOutputTexel",i.outputColorSpace),f3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wl).join(`
`)),p=Zp(p),p=__(p,i),p=v_(p,i),m=Zp(m),m=__(m,i),m=v_(m,i),p=y_(p),m=y_(m),i.isRawShaderMaterial!==!0&&(X=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,M=["#define varying in",i.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const H=X+T+p,q=X+M+m,Q=m_(l,l.VERTEX_SHADER,H),V=m_(l,l.FRAGMENT_SHADER,q);l.attachShader(L,Q),l.attachShader(L,V),i.index0AttributeName!==void 0?l.bindAttribLocation(L,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(L,0,"position"),l.linkProgram(L);function k(K){if(o.debug.checkShaderErrors){const ae=l.getProgramInfoLog(L)||"",le=l.getShaderInfoLog(Q)||"",Te=l.getShaderInfoLog(V)||"",Me=ae.trim(),B=le.trim(),$=Te.trim();let te=!0,Re=!0;if(l.getProgramParameter(L,l.LINK_STATUS)===!1)if(te=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,L,Q,V);else{const ce=x_(l,Q,"vertex"),I=x_(l,V,"fragment");Cn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(L,l.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+Me+`
`+ce+`
`+I)}else Me!==""?wt("WebGLProgram: Program Info Log:",Me):(B===""||$==="")&&(Re=!1);Re&&(K.diagnostics={runnable:te,programLog:Me,vertexShader:{log:B,prefix:T},fragmentShader:{log:$,prefix:M}})}l.deleteShader(Q),l.deleteShader(V),ue=new Xu(l,L),F=p3(l,L)}let ue;this.getUniforms=function(){return ue===void 0&&k(this),ue};let F;this.getAttributes=function(){return F===void 0&&k(this),F};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(L,r3)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(L),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=s3++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=Q,this.fragmentShader=V,this}let A3=0;class w3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),p=this._getShaderCacheForMaterial(e);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(f)===!1&&(p.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new R3(e),i.set(e,r)),r}}class R3{constructor(e){this.id=A3++,this.code=e,this.usedTimes=0}}function C3(o,e,i,r,l,f,p){const m=new sm,_=new w3,g=new Set,b=[],S=l.logarithmicDepthBuffer,E=l.vertexTextures;let A=l.precision;const U={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(F){return g.add(F),F===0?"uv":`uv${F}`}function T(F,O,K,ae,le){const Te=ae.fog,Me=le.geometry,B=F.isMeshStandardMaterial?ae.environment:null,$=(F.isMeshStandardMaterial?i:e).get(F.envMap||B),te=$&&$.mapping===Qu?$.image.height:null,Re=U[F.type];F.precision!==null&&(A=l.getMaxPrecision(F.precision),A!==F.precision&&wt("WebGLProgram.getParameters:",F.precision,"not supported, using",A,"instead."));const ce=Me.morphAttributes.position||Me.morphAttributes.normal||Me.morphAttributes.color,I=ce!==void 0?ce.length:0;let re=0;Me.morphAttributes.position!==void 0&&(re=1),Me.morphAttributes.normal!==void 0&&(re=2),Me.morphAttributes.color!==void 0&&(re=3);let we,ze,et,me;if(Re){const Qt=ma[Re];we=Qt.vertexShader,ze=Qt.fragmentShader}else we=F.vertexShader,ze=F.fragmentShader,_.update(F),et=_.getVertexShaderID(F),me=_.getFragmentShaderID(F);const Se=o.getRenderTarget(),qe=o.state.buffers.depth.getReversed(),lt=le.isInstancedMesh===!0,ft=le.isBatchedMesh===!0,yt=!!F.map,rn=!!F.matcap,Tt=!!$,Ot=!!F.aoMap,Y=!!F.lightMap,Et=!!F.bumpMap,Ut=!!F.normalMap,Kt=!!F.displacementMap,at=!!F.emissiveMap,nn=!!F.metalnessMap,pe=!!F.roughnessMap,Ee=F.anisotropy>0,P=F.clearcoat>0,w=F.dispersion>0,ne=F.iridescence>0,be=F.sheen>0,De=F.transmission>0,ee=Ee&&!!F.anisotropyMap,Ie=P&&!!F.clearcoatMap,Ge=P&&!!F.clearcoatNormalMap,ht=P&&!!F.clearcoatRoughnessMap,Be=ne&&!!F.iridescenceMap,Ue=ne&&!!F.iridescenceThicknessMap,Oe=be&&!!F.sheenColorMap,tt=be&&!!F.sheenRoughnessMap,it=!!F.specularMap,je=!!F.specularColorMap,vt=!!F.specularIntensityMap,j=De&&!!F.transmissionMap,Ye=De&&!!F.thicknessMap,ke=!!F.gradientMap,Xe=!!F.alphaMap,Pe=F.alphaTest>0,Le=!!F.alphaHash,rt=!!F.extensions;let Mt=Hr;F.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Mt=o.toneMapping);const st={shaderID:Re,shaderType:F.type,shaderName:F.name,vertexShader:we,fragmentShader:ze,defines:F.defines,customVertexShaderID:et,customFragmentShaderID:me,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:A,batching:ft,batchingColor:ft&&le._colorsTexture!==null,instancing:lt,instancingColor:lt&&le.instanceColor!==null,instancingMorph:lt&&le.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Po,alphaToCoverage:!!F.alphaToCoverage,map:yt,matcap:rn,envMap:Tt,envMapMode:Tt&&$.mapping,envMapCubeUVHeight:te,aoMap:Ot,lightMap:Y,bumpMap:Et,normalMap:Ut,displacementMap:E&&Kt,emissiveMap:at,normalMapObjectSpace:Ut&&F.normalMapType===xS,normalMapTangentSpace:Ut&&F.normalMapType===I_,metalnessMap:nn,roughnessMap:pe,anisotropy:Ee,anisotropyMap:ee,clearcoat:P,clearcoatMap:Ie,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ht,dispersion:w,iridescence:ne,iridescenceMap:Be,iridescenceThicknessMap:Ue,sheen:be,sheenColorMap:Oe,sheenRoughnessMap:tt,specularMap:it,specularColorMap:je,specularIntensityMap:vt,transmission:De,transmissionMap:j,thicknessMap:Ye,gradientMap:ke,opaque:F.transparent===!1&&F.blending===Do&&F.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Pe,alphaHash:Le,combine:F.combine,mapUv:yt&&L(F.map.channel),aoMapUv:Ot&&L(F.aoMap.channel),lightMapUv:Y&&L(F.lightMap.channel),bumpMapUv:Et&&L(F.bumpMap.channel),normalMapUv:Ut&&L(F.normalMap.channel),displacementMapUv:Kt&&L(F.displacementMap.channel),emissiveMapUv:at&&L(F.emissiveMap.channel),metalnessMapUv:nn&&L(F.metalnessMap.channel),roughnessMapUv:pe&&L(F.roughnessMap.channel),anisotropyMapUv:ee&&L(F.anisotropyMap.channel),clearcoatMapUv:Ie&&L(F.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&L(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&L(F.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&L(F.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&L(F.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&L(F.sheenColorMap.channel),sheenRoughnessMapUv:tt&&L(F.sheenRoughnessMap.channel),specularMapUv:it&&L(F.specularMap.channel),specularColorMapUv:je&&L(F.specularColorMap.channel),specularIntensityMapUv:vt&&L(F.specularIntensityMap.channel),transmissionMapUv:j&&L(F.transmissionMap.channel),thicknessMapUv:Ye&&L(F.thicknessMap.channel),alphaMapUv:Xe&&L(F.alphaMap.channel),vertexTangents:!!Me.attributes.tangent&&(Ut||Ee),vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!Me.attributes.color&&Me.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!Me.attributes.uv&&(yt||Xe),fog:!!Te,useFog:F.fog===!0,fogExp2:!!Te&&Te.isFogExp2,flatShading:F.flatShading===!0&&F.wireframe===!1,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:qe,skinning:le.isSkinnedMesh===!0,morphTargets:Me.morphAttributes.position!==void 0,morphNormals:Me.morphAttributes.normal!==void 0,morphColors:Me.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:F.dithering,shadowMapEnabled:o.shadowMap.enabled&&K.length>0,shadowMapType:o.shadowMap.type,toneMapping:Mt,decodeVideoTexture:yt&&F.map.isVideoTexture===!0&&tn.getTransfer(F.map.colorSpace)===pn,decodeVideoTextureEmissive:at&&F.emissiveMap.isVideoTexture===!0&&tn.getTransfer(F.emissiveMap.colorSpace)===pn,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===ga,flipSided:F.side===Mi,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionClipCullDistance:rt&&F.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&F.extensions.multiDraw===!0||ft)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:F.customProgramCacheKey()};return st.vertexUv1s=g.has(1),st.vertexUv2s=g.has(2),st.vertexUv3s=g.has(3),g.clear(),st}function M(F){const O=[];if(F.shaderID?O.push(F.shaderID):(O.push(F.customVertexShaderID),O.push(F.customFragmentShaderID)),F.defines!==void 0)for(const K in F.defines)O.push(K),O.push(F.defines[K]);return F.isRawShaderMaterial===!1&&(X(O,F),H(O,F),O.push(o.outputColorSpace)),O.push(F.customProgramCacheKey),O.join()}function X(F,O){F.push(O.precision),F.push(O.outputColorSpace),F.push(O.envMapMode),F.push(O.envMapCubeUVHeight),F.push(O.mapUv),F.push(O.alphaMapUv),F.push(O.lightMapUv),F.push(O.aoMapUv),F.push(O.bumpMapUv),F.push(O.normalMapUv),F.push(O.displacementMapUv),F.push(O.emissiveMapUv),F.push(O.metalnessMapUv),F.push(O.roughnessMapUv),F.push(O.anisotropyMapUv),F.push(O.clearcoatMapUv),F.push(O.clearcoatNormalMapUv),F.push(O.clearcoatRoughnessMapUv),F.push(O.iridescenceMapUv),F.push(O.iridescenceThicknessMapUv),F.push(O.sheenColorMapUv),F.push(O.sheenRoughnessMapUv),F.push(O.specularMapUv),F.push(O.specularColorMapUv),F.push(O.specularIntensityMapUv),F.push(O.transmissionMapUv),F.push(O.thicknessMapUv),F.push(O.combine),F.push(O.fogExp2),F.push(O.sizeAttenuation),F.push(O.morphTargetsCount),F.push(O.morphAttributeCount),F.push(O.numDirLights),F.push(O.numPointLights),F.push(O.numSpotLights),F.push(O.numSpotLightMaps),F.push(O.numHemiLights),F.push(O.numRectAreaLights),F.push(O.numDirLightShadows),F.push(O.numPointLightShadows),F.push(O.numSpotLightShadows),F.push(O.numSpotLightShadowsWithMaps),F.push(O.numLightProbes),F.push(O.shadowMapType),F.push(O.toneMapping),F.push(O.numClippingPlanes),F.push(O.numClipIntersection),F.push(O.depthPacking)}function H(F,O){m.disableAll(),O.supportsVertexTextures&&m.enable(0),O.instancing&&m.enable(1),O.instancingColor&&m.enable(2),O.instancingMorph&&m.enable(3),O.matcap&&m.enable(4),O.envMap&&m.enable(5),O.normalMapObjectSpace&&m.enable(6),O.normalMapTangentSpace&&m.enable(7),O.clearcoat&&m.enable(8),O.iridescence&&m.enable(9),O.alphaTest&&m.enable(10),O.vertexColors&&m.enable(11),O.vertexAlphas&&m.enable(12),O.vertexUv1s&&m.enable(13),O.vertexUv2s&&m.enable(14),O.vertexUv3s&&m.enable(15),O.vertexTangents&&m.enable(16),O.anisotropy&&m.enable(17),O.alphaHash&&m.enable(18),O.batching&&m.enable(19),O.dispersion&&m.enable(20),O.batchingColor&&m.enable(21),O.gradientMap&&m.enable(22),F.push(m.mask),m.disableAll(),O.fog&&m.enable(0),O.useFog&&m.enable(1),O.flatShading&&m.enable(2),O.logarithmicDepthBuffer&&m.enable(3),O.reversedDepthBuffer&&m.enable(4),O.skinning&&m.enable(5),O.morphTargets&&m.enable(6),O.morphNormals&&m.enable(7),O.morphColors&&m.enable(8),O.premultipliedAlpha&&m.enable(9),O.shadowMapEnabled&&m.enable(10),O.doubleSided&&m.enable(11),O.flipSided&&m.enable(12),O.useDepthPacking&&m.enable(13),O.dithering&&m.enable(14),O.transmission&&m.enable(15),O.sheen&&m.enable(16),O.opaque&&m.enable(17),O.pointsUvs&&m.enable(18),O.decodeVideoTexture&&m.enable(19),O.decodeVideoTextureEmissive&&m.enable(20),O.alphaToCoverage&&m.enable(21),F.push(m.mask)}function q(F){const O=U[F.type];let K;if(O){const ae=ma[O];K=YS.clone(ae.uniforms)}else K=F.uniforms;return K}function Q(F,O){let K;for(let ae=0,le=b.length;ae<le;ae++){const Te=b[ae];if(Te.cacheKey===O){K=Te,++K.usedTimes;break}}return K===void 0&&(K=new T3(o,O,F,f),b.push(K)),K}function V(F){if(--F.usedTimes===0){const O=b.indexOf(F);b[O]=b[b.length-1],b.pop(),F.destroy()}}function k(F){_.remove(F)}function ue(){_.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:q,acquireProgram:Q,releaseProgram:V,releaseShaderCache:k,programs:b,dispose:ue}}function D3(){let o=new WeakMap;function e(p){return o.has(p)}function i(p){let m=o.get(p);return m===void 0&&(m={},o.set(p,m)),m}function r(p){o.delete(p)}function l(p,m,_){o.get(p)[m]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function U3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function b_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function M_(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function p(S,E,A,U,L,T){let M=o[e];return M===void 0?(M={id:S.id,object:S,geometry:E,material:A,groupOrder:U,renderOrder:S.renderOrder,z:L,group:T},o[e]=M):(M.id=S.id,M.object=S,M.geometry=E,M.material=A,M.groupOrder=U,M.renderOrder=S.renderOrder,M.z=L,M.group=T),e++,M}function m(S,E,A,U,L,T){const M=p(S,E,A,U,L,T);A.transmission>0?r.push(M):A.transparent===!0?l.push(M):i.push(M)}function _(S,E,A,U,L,T){const M=p(S,E,A,U,L,T);A.transmission>0?r.unshift(M):A.transparent===!0?l.unshift(M):i.unshift(M)}function g(S,E){i.length>1&&i.sort(S||U3),r.length>1&&r.sort(E||b_),l.length>1&&l.sort(E||b_)}function b(){for(let S=e,E=o.length;S<E;S++){const A=o[S];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:m,unshift:_,finish:b,sort:g}}function L3(){let o=new WeakMap;function e(r,l){const f=o.get(r);let p;return f===void 0?(p=new M_,o.set(r,[p])):l>=f.length?(p=new M_,f.push(p)):p=f[l],p}function i(){o=new WeakMap}return{get:e,dispose:i}}function N3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new xe,color:new Zt};break;case"SpotLight":i={position:new xe,direction:new xe,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new xe,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new xe,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":i={color:new Zt,position:new xe,halfWidth:new xe,halfHeight:new xe};break}return o[e.id]=i,i}}}function O3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let P3=0;function F3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function z3(o){const e=new N3,i=O3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new xe);const l=new xe,f=new Mn,p=new Mn;function m(g){let b=0,S=0,E=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let A=0,U=0,L=0,T=0,M=0,X=0,H=0,q=0,Q=0,V=0,k=0;g.sort(F3);for(let F=0,O=g.length;F<O;F++){const K=g[F],ae=K.color,le=K.intensity,Te=K.distance,Me=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)b+=ae.r*le,S+=ae.g*le,E+=ae.b*le;else if(K.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(K.sh.coefficients[B],le);k++}else if(K.isDirectionalLight){const B=e.get(K);if(B.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const $=K.shadow,te=i.get(K);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,r.directionalShadow[A]=te,r.directionalShadowMap[A]=Me,r.directionalShadowMatrix[A]=K.shadow.matrix,X++}r.directional[A]=B,A++}else if(K.isSpotLight){const B=e.get(K);B.position.setFromMatrixPosition(K.matrixWorld),B.color.copy(ae).multiplyScalar(le),B.distance=Te,B.coneCos=Math.cos(K.angle),B.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),B.decay=K.decay,r.spot[L]=B;const $=K.shadow;if(K.map&&(r.spotLightMap[Q]=K.map,Q++,$.updateMatrices(K),K.castShadow&&V++),r.spotLightMatrix[L]=$.matrix,K.castShadow){const te=i.get(K);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,r.spotShadow[L]=te,r.spotShadowMap[L]=Me,q++}L++}else if(K.isRectAreaLight){const B=e.get(K);B.color.copy(ae).multiplyScalar(le),B.halfWidth.set(K.width*.5,0,0),B.halfHeight.set(0,K.height*.5,0),r.rectArea[T]=B,T++}else if(K.isPointLight){const B=e.get(K);if(B.color.copy(K.color).multiplyScalar(K.intensity),B.distance=K.distance,B.decay=K.decay,K.castShadow){const $=K.shadow,te=i.get(K);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,r.pointShadow[U]=te,r.pointShadowMap[U]=Me,r.pointShadowMatrix[U]=K.shadow.matrix,H++}r.point[U]=B,U++}else if(K.isHemisphereLight){const B=e.get(K);B.skyColor.copy(K.color).multiplyScalar(le),B.groundColor.copy(K.groundColor).multiplyScalar(le),r.hemi[M]=B,M++}}T>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=b,r.ambient[1]=S,r.ambient[2]=E;const ue=r.hash;(ue.directionalLength!==A||ue.pointLength!==U||ue.spotLength!==L||ue.rectAreaLength!==T||ue.hemiLength!==M||ue.numDirectionalShadows!==X||ue.numPointShadows!==H||ue.numSpotShadows!==q||ue.numSpotMaps!==Q||ue.numLightProbes!==k)&&(r.directional.length=A,r.spot.length=L,r.rectArea.length=T,r.point.length=U,r.hemi.length=M,r.directionalShadow.length=X,r.directionalShadowMap.length=X,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=q,r.spotShadowMap.length=q,r.directionalShadowMatrix.length=X,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=q+Q-V,r.spotLightMap.length=Q,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=k,ue.directionalLength=A,ue.pointLength=U,ue.spotLength=L,ue.rectAreaLength=T,ue.hemiLength=M,ue.numDirectionalShadows=X,ue.numPointShadows=H,ue.numSpotShadows=q,ue.numSpotMaps=Q,ue.numLightProbes=k,r.version=P3++)}function _(g,b){let S=0,E=0,A=0,U=0,L=0;const T=b.matrixWorldInverse;for(let M=0,X=g.length;M<X;M++){const H=g[M];if(H.isDirectionalLight){const q=r.directional[S];q.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),q.direction.sub(l),q.direction.transformDirection(T),S++}else if(H.isSpotLight){const q=r.spot[A];q.position.setFromMatrixPosition(H.matrixWorld),q.position.applyMatrix4(T),q.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),q.direction.sub(l),q.direction.transformDirection(T),A++}else if(H.isRectAreaLight){const q=r.rectArea[U];q.position.setFromMatrixPosition(H.matrixWorld),q.position.applyMatrix4(T),p.identity(),f.copy(H.matrixWorld),f.premultiply(T),p.extractRotation(f),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),q.halfWidth.applyMatrix4(p),q.halfHeight.applyMatrix4(p),U++}else if(H.isPointLight){const q=r.point[E];q.position.setFromMatrixPosition(H.matrixWorld),q.position.applyMatrix4(T),E++}else if(H.isHemisphereLight){const q=r.hemi[L];q.direction.setFromMatrixPosition(H.matrixWorld),q.direction.transformDirection(T),L++}}}return{setup:m,setupView:_,state:r}}function E_(o){const e=new z3(o),i=[],r=[];function l(b){g.camera=b,i.length=0,r.length=0}function f(b){i.push(b)}function p(b){r.push(b)}function m(){e.setup(i)}function _(b){e.setupView(i,b)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:m,setupLightsView:_,pushLight:f,pushShadow:p}}function B3(o){let e=new WeakMap;function i(l,f=0){const p=e.get(l);let m;return p===void 0?(m=new E_(o),e.set(l,[m])):f>=p.length?(m=new E_(o),p.push(m)):m=p[f],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const I3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V3(o,e,i){let r=new om;const l=new Dt,f=new Dt,p=new Dn,m=new sb({depthPacking:gS}),_=new ob,g={},b=i.maxTextureSize,S={[Vr]:Mi,[Mi]:Vr,[ga]:ga},E=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:I3,fragmentShader:H3}),A=E.clone();A.defines.HORIZONTAL_PASS=1;const U=new oa;U.setAttribute("position",new _a(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Li(U,E),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C_;let M=this.type;this.render=function(V,k,ue){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||V.length===0)return;const F=o.getRenderTarget(),O=o.getActiveCubeFace(),K=o.getActiveMipmapLevel(),ae=o.state;ae.setBlending(Ja),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const le=M!==Za&&this.type===Za,Te=M===Za&&this.type!==Za;for(let Me=0,B=V.length;Me<B;Me++){const $=V[Me],te=$.shadow;if(te===void 0){wt("WebGLShadowMap:",$,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;l.copy(te.mapSize);const Re=te.getFrameExtents();if(l.multiply(Re),f.copy(te.mapSize),(l.x>b||l.y>b)&&(l.x>b&&(f.x=Math.floor(b/Re.x),l.x=f.x*Re.x,te.mapSize.x=f.x),l.y>b&&(f.y=Math.floor(b/Re.y),l.y=f.y*Re.y,te.mapSize.y=f.y)),te.map===null||le===!0||Te===!0){const I=this.type!==Za?{minFilter:Ni,magFilter:Ni}:{};te.map!==null&&te.map.dispose(),te.map=new Ms(l.x,l.y,I),te.map.texture.name=$.name+".shadowMap",te.camera.updateProjectionMatrix()}o.setRenderTarget(te.map),o.clear();const ce=te.getViewportCount();for(let I=0;I<ce;I++){const re=te.getViewport(I);p.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),ae.viewport(p),te.updateMatrices($,I),r=te.getFrustum(),q(k,ue,te.camera,$,this.type)}te.isPointLightShadow!==!0&&this.type===Za&&X(te,ue),te.needsUpdate=!1}M=this.type,T.needsUpdate=!1,o.setRenderTarget(F,O,K)};function X(V,k){const ue=e.update(L);E.defines.VSM_SAMPLES!==V.blurSamples&&(E.defines.VSM_SAMPLES=V.blurSamples,A.defines.VSM_SAMPLES=V.blurSamples,E.needsUpdate=!0,A.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ms(l.x,l.y)),E.uniforms.shadow_pass.value=V.map.texture,E.uniforms.resolution.value=V.mapSize,E.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(k,null,ue,E,L,null),A.uniforms.shadow_pass.value=V.mapPass.texture,A.uniforms.resolution.value=V.mapSize,A.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(k,null,ue,A,L,null)}function H(V,k,ue,F){let O=null;const K=ue.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(K!==void 0)O=K;else if(O=ue.isPointLight===!0?_:m,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const ae=O.uuid,le=k.uuid;let Te=g[ae];Te===void 0&&(Te={},g[ae]=Te);let Me=Te[le];Me===void 0&&(Me=O.clone(),Te[le]=Me,k.addEventListener("dispose",Q)),O=Me}if(O.visible=k.visible,O.wireframe=k.wireframe,F===Za?O.side=k.shadowSide!==null?k.shadowSide:k.side:O.side=k.shadowSide!==null?k.shadowSide:S[k.side],O.alphaMap=k.alphaMap,O.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,O.map=k.map,O.clipShadows=k.clipShadows,O.clippingPlanes=k.clippingPlanes,O.clipIntersection=k.clipIntersection,O.displacementMap=k.displacementMap,O.displacementScale=k.displacementScale,O.displacementBias=k.displacementBias,O.wireframeLinewidth=k.wireframeLinewidth,O.linewidth=k.linewidth,ue.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const ae=o.properties.get(O);ae.light=ue}return O}function q(V,k,ue,F,O){if(V.visible===!1)return;if(V.layers.test(k.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&O===Za)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,V.matrixWorld);const le=e.update(V),Te=V.material;if(Array.isArray(Te)){const Me=le.groups;for(let B=0,$=Me.length;B<$;B++){const te=Me[B],Re=Te[te.materialIndex];if(Re&&Re.visible){const ce=H(V,Re,F,O);V.onBeforeShadow(o,V,k,ue,le,ce,te),o.renderBufferDirect(ue,null,le,ce,V,te),V.onAfterShadow(o,V,k,ue,le,ce,te)}}}else if(Te.visible){const Me=H(V,Te,F,O);V.onBeforeShadow(o,V,k,ue,le,Me,null),o.renderBufferDirect(ue,null,le,Me,V,null),V.onAfterShadow(o,V,k,ue,le,Me,null)}}const ae=V.children;for(let le=0,Te=ae.length;le<Te;le++)q(ae[le],k,ue,F,O)}function Q(V){V.target.removeEventListener("dispose",Q);for(const ue in g){const F=g[ue],O=V.target.uuid;O in F&&(F[O].dispose(),delete F[O])}}}const G3={[lp]:cp,[up]:dp,[fp]:pp,[Lo]:hp,[cp]:lp,[dp]:up,[pp]:fp,[hp]:Lo};function k3(o,e){function i(){let j=!1;const Ye=new Dn;let ke=null;const Xe=new Dn(0,0,0,0);return{setMask:function(Pe){ke!==Pe&&!j&&(o.colorMask(Pe,Pe,Pe,Pe),ke=Pe)},setLocked:function(Pe){j=Pe},setClear:function(Pe,Le,rt,Mt,st){st===!0&&(Pe*=Mt,Le*=Mt,rt*=Mt),Ye.set(Pe,Le,rt,Mt),Xe.equals(Ye)===!1&&(o.clearColor(Pe,Le,rt,Mt),Xe.copy(Ye))},reset:function(){j=!1,ke=null,Xe.set(-1,0,0,0)}}}function r(){let j=!1,Ye=!1,ke=null,Xe=null,Pe=null;return{setReversed:function(Le){if(Ye!==Le){const rt=e.get("EXT_clip_control");Le?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ye=Le;const Mt=Pe;Pe=null,this.setClear(Mt)}},getReversed:function(){return Ye},setTest:function(Le){Le?Se(o.DEPTH_TEST):qe(o.DEPTH_TEST)},setMask:function(Le){ke!==Le&&!j&&(o.depthMask(Le),ke=Le)},setFunc:function(Le){if(Ye&&(Le=G3[Le]),Xe!==Le){switch(Le){case lp:o.depthFunc(o.NEVER);break;case cp:o.depthFunc(o.ALWAYS);break;case up:o.depthFunc(o.LESS);break;case Lo:o.depthFunc(o.LEQUAL);break;case fp:o.depthFunc(o.EQUAL);break;case hp:o.depthFunc(o.GEQUAL);break;case dp:o.depthFunc(o.GREATER);break;case pp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xe=Le}},setLocked:function(Le){j=Le},setClear:function(Le){Pe!==Le&&(Ye&&(Le=1-Le),o.clearDepth(Le),Pe=Le)},reset:function(){j=!1,ke=null,Xe=null,Pe=null,Ye=!1}}}function l(){let j=!1,Ye=null,ke=null,Xe=null,Pe=null,Le=null,rt=null,Mt=null,st=null;return{setTest:function(Qt){j||(Qt?Se(o.STENCIL_TEST):qe(o.STENCIL_TEST))},setMask:function(Qt){Ye!==Qt&&!j&&(o.stencilMask(Qt),Ye=Qt)},setFunc:function(Qt,Yn,li){(ke!==Qt||Xe!==Yn||Pe!==li)&&(o.stencilFunc(Qt,Yn,li),ke=Qt,Xe=Yn,Pe=li)},setOp:function(Qt,Yn,li){(Le!==Qt||rt!==Yn||Mt!==li)&&(o.stencilOp(Qt,Yn,li),Le=Qt,rt=Yn,Mt=li)},setLocked:function(Qt){j=Qt},setClear:function(Qt){st!==Qt&&(o.clearStencil(Qt),st=Qt)},reset:function(){j=!1,Ye=null,ke=null,Xe=null,Pe=null,Le=null,rt=null,Mt=null,st=null}}}const f=new i,p=new r,m=new l,_=new WeakMap,g=new WeakMap;let b={},S={},E=new WeakMap,A=[],U=null,L=!1,T=null,M=null,X=null,H=null,q=null,Q=null,V=null,k=new Zt(0,0,0),ue=0,F=!1,O=null,K=null,ae=null,le=null,Te=null;const Me=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const te=o.getParameter(o.VERSION);te.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(te)[1]),B=$>=1):te.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),B=$>=2);let Re=null,ce={};const I=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),we=new Dn().fromArray(I),ze=new Dn().fromArray(re);function et(j,Ye,ke,Xe){const Pe=new Uint8Array(4),Le=o.createTexture();o.bindTexture(j,Le),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<ke;rt++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ye,0,o.RGBA,1,1,Xe,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(Ye+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return Le}const me={};me[o.TEXTURE_2D]=et(o.TEXTURE_2D,o.TEXTURE_2D,1),me[o.TEXTURE_CUBE_MAP]=et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[o.TEXTURE_2D_ARRAY]=et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),me[o.TEXTURE_3D]=et(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Se(o.DEPTH_TEST),p.setFunc(Lo),Et(!1),Ut(yx),Se(o.CULL_FACE),Ot(Ja);function Se(j){b[j]!==!0&&(o.enable(j),b[j]=!0)}function qe(j){b[j]!==!1&&(o.disable(j),b[j]=!1)}function lt(j,Ye){return S[j]!==Ye?(o.bindFramebuffer(j,Ye),S[j]=Ye,j===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ye),j===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ye),!0):!1}function ft(j,Ye){let ke=A,Xe=!1;if(j){ke=E.get(Ye),ke===void 0&&(ke=[],E.set(Ye,ke));const Pe=j.textures;if(ke.length!==Pe.length||ke[0]!==o.COLOR_ATTACHMENT0){for(let Le=0,rt=Pe.length;Le<rt;Le++)ke[Le]=o.COLOR_ATTACHMENT0+Le;ke.length=Pe.length,Xe=!0}}else ke[0]!==o.BACK&&(ke[0]=o.BACK,Xe=!0);Xe&&o.drawBuffers(ke)}function yt(j){return U!==j?(o.useProgram(j),U=j,!0):!1}const rn={[_s]:o.FUNC_ADD,[Gy]:o.FUNC_SUBTRACT,[ky]:o.FUNC_REVERSE_SUBTRACT};rn[Xy]=o.MIN,rn[Wy]=o.MAX;const Tt={[qy]:o.ZERO,[Yy]:o.ONE,[jy]:o.SRC_COLOR,[sp]:o.SRC_ALPHA,[eS]:o.SRC_ALPHA_SATURATE,[Jy]:o.DST_COLOR,[Ky]:o.DST_ALPHA,[Zy]:o.ONE_MINUS_SRC_COLOR,[op]:o.ONE_MINUS_SRC_ALPHA,[$y]:o.ONE_MINUS_DST_COLOR,[Qy]:o.ONE_MINUS_DST_ALPHA,[tS]:o.CONSTANT_COLOR,[nS]:o.ONE_MINUS_CONSTANT_COLOR,[iS]:o.CONSTANT_ALPHA,[aS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ot(j,Ye,ke,Xe,Pe,Le,rt,Mt,st,Qt){if(j===Ja){L===!0&&(qe(o.BLEND),L=!1);return}if(L===!1&&(Se(o.BLEND),L=!0),j!==Vy){if(j!==T||Qt!==F){if((M!==_s||q!==_s)&&(o.blendEquation(o.FUNC_ADD),M=_s,q=_s),Qt)switch(j){case Do:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sx:o.blendFunc(o.ONE,o.ONE);break;case bx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Cn("WebGLState: Invalid blending: ",j);break}else switch(j){case Do:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case bx:Cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mx:Cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Cn("WebGLState: Invalid blending: ",j);break}X=null,H=null,Q=null,V=null,k.set(0,0,0),ue=0,T=j,F=Qt}return}Pe=Pe||Ye,Le=Le||ke,rt=rt||Xe,(Ye!==M||Pe!==q)&&(o.blendEquationSeparate(rn[Ye],rn[Pe]),M=Ye,q=Pe),(ke!==X||Xe!==H||Le!==Q||rt!==V)&&(o.blendFuncSeparate(Tt[ke],Tt[Xe],Tt[Le],Tt[rt]),X=ke,H=Xe,Q=Le,V=rt),(Mt.equals(k)===!1||st!==ue)&&(o.blendColor(Mt.r,Mt.g,Mt.b,st),k.copy(Mt),ue=st),T=j,F=!1}function Y(j,Ye){j.side===ga?qe(o.CULL_FACE):Se(o.CULL_FACE);let ke=j.side===Mi;Ye&&(ke=!ke),Et(ke),j.blending===Do&&j.transparent===!1?Ot(Ja):Ot(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),p.setFunc(j.depthFunc),p.setTest(j.depthTest),p.setMask(j.depthWrite),f.setMask(j.colorWrite);const Xe=j.stencilWrite;m.setTest(Xe),Xe&&(m.setMask(j.stencilWriteMask),m.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),m.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),at(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Se(o.SAMPLE_ALPHA_TO_COVERAGE):qe(o.SAMPLE_ALPHA_TO_COVERAGE)}function Et(j){O!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),O=j)}function Ut(j){j!==By?(Se(o.CULL_FACE),j!==K&&(j===yx?o.cullFace(o.BACK):j===Iy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):qe(o.CULL_FACE),K=j}function Kt(j){j!==ae&&(B&&o.lineWidth(j),ae=j)}function at(j,Ye,ke){j?(Se(o.POLYGON_OFFSET_FILL),(le!==Ye||Te!==ke)&&(o.polygonOffset(Ye,ke),le=Ye,Te=ke)):qe(o.POLYGON_OFFSET_FILL)}function nn(j){j?Se(o.SCISSOR_TEST):qe(o.SCISSOR_TEST)}function pe(j){j===void 0&&(j=o.TEXTURE0+Me-1),Re!==j&&(o.activeTexture(j),Re=j)}function Ee(j,Ye,ke){ke===void 0&&(Re===null?ke=o.TEXTURE0+Me-1:ke=Re);let Xe=ce[ke];Xe===void 0&&(Xe={type:void 0,texture:void 0},ce[ke]=Xe),(Xe.type!==j||Xe.texture!==Ye)&&(Re!==ke&&(o.activeTexture(ke),Re=ke),o.bindTexture(j,Ye||me[j]),Xe.type=j,Xe.texture=Ye)}function P(){const j=ce[Re];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function ne(){try{o.compressedTexImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function be(){try{o.texSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function De(){try{o.texSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function ee(){try{o.compressedTexSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Ie(){try{o.compressedTexSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Ge(){try{o.texStorage2D(...arguments)}catch(j){j("WebGLState:",j)}}function ht(){try{o.texStorage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Be(){try{o.texImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Ue(){try{o.texImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Oe(j){we.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),we.copy(j))}function tt(j){ze.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),ze.copy(j))}function it(j,Ye){let ke=g.get(Ye);ke===void 0&&(ke=new WeakMap,g.set(Ye,ke));let Xe=ke.get(j);Xe===void 0&&(Xe=o.getUniformBlockIndex(Ye,j.name),ke.set(j,Xe))}function je(j,Ye){const Xe=g.get(Ye).get(j);_.get(Ye)!==Xe&&(o.uniformBlockBinding(Ye,Xe,j.__bindingPointIndex),_.set(Ye,Xe))}function vt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),p.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),b={},Re=null,ce={},S={},E=new WeakMap,A=[],U=null,L=!1,T=null,M=null,X=null,H=null,q=null,Q=null,V=null,k=new Zt(0,0,0),ue=0,F=!1,O=null,K=null,ae=null,le=null,Te=null,we.set(0,0,o.canvas.width,o.canvas.height),ze.set(0,0,o.canvas.width,o.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:Se,disable:qe,bindFramebuffer:lt,drawBuffers:ft,useProgram:yt,setBlending:Ot,setMaterial:Y,setFlipSided:Et,setCullFace:Ut,setLineWidth:Kt,setPolygonOffset:at,setScissorTest:nn,activeTexture:pe,bindTexture:Ee,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:ne,texImage2D:Be,texImage3D:Ue,updateUBOMapping:it,uniformBlockBinding:je,texStorage2D:Ge,texStorage3D:ht,texSubImage2D:be,texSubImage3D:De,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ie,scissor:Oe,viewport:tt,reset:vt}}function X3(o,e,i,r,l,f,p){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Dt,b=new WeakMap;let S;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(P,w){return A?new OffscreenCanvas(P,w):ju("canvas")}function L(P,w,ne){let be=1;const De=Ee(P);if((De.width>ne||De.height>ne)&&(be=ne/Math.max(De.width,De.height)),be<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(be*De.width),Ie=Math.floor(be*De.height);S===void 0&&(S=U(ee,Ie));const Ge=w?U(ee,Ie):S;return Ge.width=ee,Ge.height=Ie,Ge.getContext("2d").drawImage(P,0,0,ee,Ie),wt("WebGLRenderer: Texture has been resized from ("+De.width+"x"+De.height+") to ("+ee+"x"+Ie+")."),Ge}else return"data"in P&&wt("WebGLRenderer: Image in DataTexture is too big ("+De.width+"x"+De.height+")."),P;return P}function T(P){return P.generateMipmaps}function M(P){o.generateMipmap(P)}function X(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function H(P,w,ne,be,De=!1){if(P!==null){if(o[P]!==void 0)return o[P];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=w;if(w===o.RED&&(ne===o.FLOAT&&(ee=o.R32F),ne===o.HALF_FLOAT&&(ee=o.R16F),ne===o.UNSIGNED_BYTE&&(ee=o.R8)),w===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ee=o.R8UI),ne===o.UNSIGNED_SHORT&&(ee=o.R16UI),ne===o.UNSIGNED_INT&&(ee=o.R32UI),ne===o.BYTE&&(ee=o.R8I),ne===o.SHORT&&(ee=o.R16I),ne===o.INT&&(ee=o.R32I)),w===o.RG&&(ne===o.FLOAT&&(ee=o.RG32F),ne===o.HALF_FLOAT&&(ee=o.RG16F),ne===o.UNSIGNED_BYTE&&(ee=o.RG8)),w===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ee=o.RG8UI),ne===o.UNSIGNED_SHORT&&(ee=o.RG16UI),ne===o.UNSIGNED_INT&&(ee=o.RG32UI),ne===o.BYTE&&(ee=o.RG8I),ne===o.SHORT&&(ee=o.RG16I),ne===o.INT&&(ee=o.RG32I)),w===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ee=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(ee=o.RGB16UI),ne===o.UNSIGNED_INT&&(ee=o.RGB32UI),ne===o.BYTE&&(ee=o.RGB8I),ne===o.SHORT&&(ee=o.RGB16I),ne===o.INT&&(ee=o.RGB32I)),w===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ee=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(ee=o.RGBA16UI),ne===o.UNSIGNED_INT&&(ee=o.RGBA32UI),ne===o.BYTE&&(ee=o.RGBA8I),ne===o.SHORT&&(ee=o.RGBA16I),ne===o.INT&&(ee=o.RGBA32I)),w===o.RGB&&(ne===o.UNSIGNED_INT_5_9_9_9_REV&&(ee=o.RGB9_E5),ne===o.UNSIGNED_INT_10F_11F_11F_REV&&(ee=o.R11F_G11F_B10F)),w===o.RGBA){const Ie=De?qu:tn.getTransfer(be);ne===o.FLOAT&&(ee=o.RGBA32F),ne===o.HALF_FLOAT&&(ee=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(ee=Ie===pn?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(ee=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(ee=o.RGB5_A1)}return(ee===o.R16F||ee===o.R32F||ee===o.RG16F||ee===o.RG32F||ee===o.RGBA16F||ee===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function q(P,w){let ne;return P?w===null||w===Ss||w===Yl?ne=o.DEPTH24_STENCIL8:w===Qa?ne=o.DEPTH32F_STENCIL8:w===ql&&(ne=o.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ss||w===Yl?ne=o.DEPTH_COMPONENT24:w===Qa?ne=o.DEPTH_COMPONENT32F:w===ql&&(ne=o.DEPTH_COMPONENT16),ne}function Q(P,w){return T(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ni&&P.minFilter!==Yi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function V(P){const w=P.target;w.removeEventListener("dispose",V),ue(w),w.isVideoTexture&&b.delete(w)}function k(P){const w=P.target;w.removeEventListener("dispose",k),O(w)}function ue(P){const w=r.get(P);if(w.__webglInit===void 0)return;const ne=P.source,be=E.get(ne);if(be){const De=be[w.__cacheKey];De.usedTimes--,De.usedTimes===0&&F(P),Object.keys(be).length===0&&E.delete(ne)}r.remove(P)}function F(P){const w=r.get(P);o.deleteTexture(w.__webglTexture);const ne=P.source,be=E.get(ne);delete be[w.__cacheKey],p.memory.textures--}function O(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(w.__webglFramebuffer[be]))for(let De=0;De<w.__webglFramebuffer[be].length;De++)o.deleteFramebuffer(w.__webglFramebuffer[be][De]);else o.deleteFramebuffer(w.__webglFramebuffer[be]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[be])}else{if(Array.isArray(w.__webglFramebuffer))for(let be=0;be<w.__webglFramebuffer.length;be++)o.deleteFramebuffer(w.__webglFramebuffer[be]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let be=0;be<w.__webglColorRenderbuffer.length;be++)w.__webglColorRenderbuffer[be]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[be]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ne=P.textures;for(let be=0,De=ne.length;be<De;be++){const ee=r.get(ne[be]);ee.__webglTexture&&(o.deleteTexture(ee.__webglTexture),p.memory.textures--),r.remove(ne[be])}r.remove(P)}let K=0;function ae(){K=0}function le(){const P=K;return P>=l.maxTextures&&wt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),K+=1,P}function Te(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Me(P,w){const ne=r.get(P);if(P.isVideoTexture&&nn(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ne.__version!==P.version){const be=P.image;if(be===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{me(ne,P,w);return}}else P.isExternalTexture&&(ne.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+w)}function B(P,w){const ne=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){me(ne,P,w);return}else P.isExternalTexture&&(ne.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+w)}function $(P,w){const ne=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){me(ne,P,w);return}i.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+w)}function te(P,w){const ne=r.get(P);if(P.version>0&&ne.__version!==P.version){Se(ne,P,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+w)}const Re={[xp]:o.REPEAT,[Ka]:o.CLAMP_TO_EDGE,[_p]:o.MIRRORED_REPEAT},ce={[Ni]:o.NEAREST,[pS]:o.NEAREST_MIPMAP_NEAREST,[gu]:o.NEAREST_MIPMAP_LINEAR,[Yi]:o.LINEAR,[Td]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},I={[_S]:o.NEVER,[ES]:o.ALWAYS,[vS]:o.LESS,[H_]:o.LEQUAL,[yS]:o.EQUAL,[MS]:o.GEQUAL,[SS]:o.GREATER,[bS]:o.NOTEQUAL};function re(P,w){if(w.type===Qa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Yi||w.magFilter===Td||w.magFilter===gu||w.magFilter===ys||w.minFilter===Yi||w.minFilter===Td||w.minFilter===gu||w.minFilter===ys)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Re[w.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Re[w.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Re[w.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,ce[w.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,I[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ni||w.minFilter!==gu&&w.minFilter!==ys||w.type===Qa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function we(P,w){let ne=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",V));const be=w.source;let De=E.get(be);De===void 0&&(De={},E.set(be,De));const ee=Te(w);if(ee!==P.__cacheKey){De[ee]===void 0&&(De[ee]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,ne=!0),De[ee].usedTimes++;const Ie=De[P.__cacheKey];Ie!==void 0&&(De[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&F(w)),P.__cacheKey=ee,P.__webglTexture=De[ee].texture}return ne}function ze(P,w,ne){return Math.floor(Math.floor(P/ne)/w)}function et(P,w,ne,be){const ee=P.updateRanges;if(ee.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,ne,be,w.data);else{ee.sort((Ue,Oe)=>Ue.start-Oe.start);let Ie=0;for(let Ue=1;Ue<ee.length;Ue++){const Oe=ee[Ie],tt=ee[Ue],it=Oe.start+Oe.count,je=ze(tt.start,w.width,4),vt=ze(Oe.start,w.width,4);tt.start<=it+1&&je===vt&&ze(tt.start+tt.count-1,w.width,4)===je?Oe.count=Math.max(Oe.count,tt.start+tt.count-Oe.start):(++Ie,ee[Ie]=tt)}ee.length=Ie+1;const Ge=o.getParameter(o.UNPACK_ROW_LENGTH),ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Be=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Ue=0,Oe=ee.length;Ue<Oe;Ue++){const tt=ee[Ue],it=Math.floor(tt.start/4),je=Math.ceil(tt.count/4),vt=it%w.width,j=Math.floor(it/w.width),Ye=je,ke=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,vt),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,vt,j,Ye,ke,ne,be,w.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ge),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Be)}}function me(P,w,ne){let be=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(be=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(be=o.TEXTURE_3D);const De=we(P,w),ee=w.source;i.bindTexture(be,P.__webglTexture,o.TEXTURE0+ne);const Ie=r.get(ee);if(ee.version!==Ie.__version||De===!0){i.activeTexture(o.TEXTURE0+ne);const Ge=tn.getPrimaries(tn.workingColorSpace),ht=w.colorSpace===Br?null:tn.getPrimaries(w.colorSpace),Be=w.colorSpace===Br||Ge===ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Ue=L(w.image,!1,l.maxTextureSize);Ue=pe(w,Ue);const Oe=f.convert(w.format,w.colorSpace),tt=f.convert(w.type);let it=H(w.internalFormat,Oe,tt,w.colorSpace,w.isVideoTexture);re(be,w);let je;const vt=w.mipmaps,j=w.isVideoTexture!==!0,Ye=Ie.__version===void 0||De===!0,ke=ee.dataReady,Xe=Q(w,Ue);if(w.isDepthTexture)it=q(w.format===Zl,w.type),Ye&&(j?i.texStorage2D(o.TEXTURE_2D,1,it,Ue.width,Ue.height):i.texImage2D(o.TEXTURE_2D,0,it,Ue.width,Ue.height,0,Oe,tt,null));else if(w.isDataTexture)if(vt.length>0){j&&Ye&&i.texStorage2D(o.TEXTURE_2D,Xe,it,vt[0].width,vt[0].height);for(let Pe=0,Le=vt.length;Pe<Le;Pe++)je=vt[Pe],j?ke&&i.texSubImage2D(o.TEXTURE_2D,Pe,0,0,je.width,je.height,Oe,tt,je.data):i.texImage2D(o.TEXTURE_2D,Pe,it,je.width,je.height,0,Oe,tt,je.data);w.generateMipmaps=!1}else j?(Ye&&i.texStorage2D(o.TEXTURE_2D,Xe,it,Ue.width,Ue.height),ke&&et(w,Ue,Oe,tt)):i.texImage2D(o.TEXTURE_2D,0,it,Ue.width,Ue.height,0,Oe,tt,Ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){j&&Ye&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xe,it,vt[0].width,vt[0].height,Ue.depth);for(let Pe=0,Le=vt.length;Pe<Le;Pe++)if(je=vt[Pe],w.format!==sa)if(Oe!==null)if(j){if(ke)if(w.layerUpdates.size>0){const rt=t_(je.width,je.height,w.format,w.type);for(const Mt of w.layerUpdates){const st=je.data.subarray(Mt*rt/je.data.BYTES_PER_ELEMENT,(Mt+1)*rt/je.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Pe,0,0,Mt,je.width,je.height,1,Oe,st)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Pe,0,0,0,je.width,je.height,Ue.depth,Oe,je.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Pe,it,je.width,je.height,Ue.depth,0,je.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?ke&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Pe,0,0,0,je.width,je.height,Ue.depth,Oe,tt,je.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Pe,it,je.width,je.height,Ue.depth,0,Oe,tt,je.data)}else{j&&Ye&&i.texStorage2D(o.TEXTURE_2D,Xe,it,vt[0].width,vt[0].height);for(let Pe=0,Le=vt.length;Pe<Le;Pe++)je=vt[Pe],w.format!==sa?Oe!==null?j?ke&&i.compressedTexSubImage2D(o.TEXTURE_2D,Pe,0,0,je.width,je.height,Oe,je.data):i.compressedTexImage2D(o.TEXTURE_2D,Pe,it,je.width,je.height,0,je.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?ke&&i.texSubImage2D(o.TEXTURE_2D,Pe,0,0,je.width,je.height,Oe,tt,je.data):i.texImage2D(o.TEXTURE_2D,Pe,it,je.width,je.height,0,Oe,tt,je.data)}else if(w.isDataArrayTexture)if(j){if(Ye&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xe,it,Ue.width,Ue.height,Ue.depth),ke)if(w.layerUpdates.size>0){const Pe=t_(Ue.width,Ue.height,w.format,w.type);for(const Le of w.layerUpdates){const rt=Ue.data.subarray(Le*Pe/Ue.data.BYTES_PER_ELEMENT,(Le+1)*Pe/Ue.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Le,Ue.width,Ue.height,1,Oe,tt,rt)}w.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ue.width,Ue.height,Ue.depth,Oe,tt,Ue.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,it,Ue.width,Ue.height,Ue.depth,0,Oe,tt,Ue.data);else if(w.isData3DTexture)j?(Ye&&i.texStorage3D(o.TEXTURE_3D,Xe,it,Ue.width,Ue.height,Ue.depth),ke&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ue.width,Ue.height,Ue.depth,Oe,tt,Ue.data)):i.texImage3D(o.TEXTURE_3D,0,it,Ue.width,Ue.height,Ue.depth,0,Oe,tt,Ue.data);else if(w.isFramebufferTexture){if(Ye)if(j)i.texStorage2D(o.TEXTURE_2D,Xe,it,Ue.width,Ue.height);else{let Pe=Ue.width,Le=Ue.height;for(let rt=0;rt<Xe;rt++)i.texImage2D(o.TEXTURE_2D,rt,it,Pe,Le,0,Oe,tt,null),Pe>>=1,Le>>=1}}else if(vt.length>0){if(j&&Ye){const Pe=Ee(vt[0]);i.texStorage2D(o.TEXTURE_2D,Xe,it,Pe.width,Pe.height)}for(let Pe=0,Le=vt.length;Pe<Le;Pe++)je=vt[Pe],j?ke&&i.texSubImage2D(o.TEXTURE_2D,Pe,0,0,Oe,tt,je):i.texImage2D(o.TEXTURE_2D,Pe,it,Oe,tt,je);w.generateMipmaps=!1}else if(j){if(Ye){const Pe=Ee(Ue);i.texStorage2D(o.TEXTURE_2D,Xe,it,Pe.width,Pe.height)}ke&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,tt,Ue)}else i.texImage2D(o.TEXTURE_2D,0,it,Oe,tt,Ue);T(w)&&M(be),Ie.__version=ee.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Se(P,w,ne){if(w.image.length!==6)return;const be=we(P,w),De=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+ne);const ee=r.get(De);if(De.version!==ee.__version||be===!0){i.activeTexture(o.TEXTURE0+ne);const Ie=tn.getPrimaries(tn.workingColorSpace),Ge=w.colorSpace===Br?null:tn.getPrimaries(w.colorSpace),ht=w.colorSpace===Br||Ie===Ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Be=w.isCompressedTexture||w.image[0].isCompressedTexture,Ue=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let Le=0;Le<6;Le++)!Be&&!Ue?Oe[Le]=L(w.image[Le],!0,l.maxCubemapSize):Oe[Le]=Ue?w.image[Le].image:w.image[Le],Oe[Le]=pe(w,Oe[Le]);const tt=Oe[0],it=f.convert(w.format,w.colorSpace),je=f.convert(w.type),vt=H(w.internalFormat,it,je,w.colorSpace),j=w.isVideoTexture!==!0,Ye=ee.__version===void 0||be===!0,ke=De.dataReady;let Xe=Q(w,tt);re(o.TEXTURE_CUBE_MAP,w);let Pe;if(Be){j&&Ye&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,vt,tt.width,tt.height);for(let Le=0;Le<6;Le++){Pe=Oe[Le].mipmaps;for(let rt=0;rt<Pe.length;rt++){const Mt=Pe[rt];w.format!==sa?it!==null?j?ke&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,rt,0,0,Mt.width,Mt.height,it,Mt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,rt,vt,Mt.width,Mt.height,0,Mt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ke&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,rt,0,0,Mt.width,Mt.height,it,je,Mt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,rt,vt,Mt.width,Mt.height,0,it,je,Mt.data)}}}else{if(Pe=w.mipmaps,j&&Ye){Pe.length>0&&Xe++;const Le=Ee(Oe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,vt,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(Ue){j?ke&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Oe[Le].width,Oe[Le].height,it,je,Oe[Le].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,vt,Oe[Le].width,Oe[Le].height,0,it,je,Oe[Le].data);for(let rt=0;rt<Pe.length;rt++){const st=Pe[rt].image[Le].image;j?ke&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,rt+1,0,0,st.width,st.height,it,je,st.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,rt+1,vt,st.width,st.height,0,it,je,st.data)}}else{j?ke&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,it,je,Oe[Le]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,vt,it,je,Oe[Le]);for(let rt=0;rt<Pe.length;rt++){const Mt=Pe[rt];j?ke&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,rt+1,0,0,it,je,Mt.image[Le]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,rt+1,vt,it,je,Mt.image[Le])}}}T(w)&&M(o.TEXTURE_CUBE_MAP),ee.__version=De.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function qe(P,w,ne,be,De,ee){const Ie=f.convert(ne.format,ne.colorSpace),Ge=f.convert(ne.type),ht=H(ne.internalFormat,Ie,Ge,ne.colorSpace),Be=r.get(w),Ue=r.get(ne);if(Ue.__renderTarget=w,!Be.__hasExternalTextures){const Oe=Math.max(1,w.width>>ee),tt=Math.max(1,w.height>>ee);De===o.TEXTURE_3D||De===o.TEXTURE_2D_ARRAY?i.texImage3D(De,ee,ht,Oe,tt,w.depth,0,Ie,Ge,null):i.texImage2D(De,ee,ht,Oe,tt,0,Ie,Ge,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),at(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,be,De,Ue.__webglTexture,0,Kt(w)):(De===o.TEXTURE_2D||De>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&De<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,be,De,Ue.__webglTexture,ee),i.bindFramebuffer(o.FRAMEBUFFER,null)}function lt(P,w,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,P),w.depthBuffer){const be=w.depthTexture,De=be&&be.isDepthTexture?be.type:null,ee=q(w.stencilBuffer,De),Ie=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=Kt(w);at(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ge,ee,w.width,w.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ge,ee,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ee,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,P)}else{const be=w.textures;for(let De=0;De<be.length;De++){const ee=be[De],Ie=f.convert(ee.format,ee.colorSpace),Ge=f.convert(ee.type),ht=H(ee.internalFormat,Ie,Ge,ee.colorSpace),Be=Kt(w);ne&&at(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Be,ht,w.width,w.height):at(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Be,ht,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ht,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ft(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(w.depthTexture);be.__renderTarget=w,(!be.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Me(w.depthTexture,0);const De=be.__webglTexture,ee=Kt(w);if(w.depthTexture.format===jl)at(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,De,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,De,0);else if(w.depthTexture.format===Zl)at(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,De,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,De,0);else throw new Error("Unknown depthTexture format")}function yt(P){const w=r.get(P),ne=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const be=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),be){const De=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,be.removeEventListener("dispose",De)};be.addEventListener("dispose",De),w.__depthDisposeCallback=De}w.__boundDepthTexture=be}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const be=P.texture.mipmaps;be&&be.length>0?ft(w.__webglFramebuffer[0],P):ft(w.__webglFramebuffer,P)}else if(ne){w.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[be]),w.__webglDepthbuffer[be]===void 0)w.__webglDepthbuffer[be]=o.createRenderbuffer(),lt(w.__webglDepthbuffer[be],P,!1);else{const De=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[be];o.bindRenderbuffer(o.RENDERBUFFER,ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,De,o.RENDERBUFFER,ee)}}else{const be=P.texture.mipmaps;if(be&&be.length>0?i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),lt(w.__webglDepthbuffer,P,!1);else{const De=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,De,o.RENDERBUFFER,ee)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function rn(P,w,ne){const be=r.get(P);w!==void 0&&qe(be.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&yt(P)}function Tt(P){const w=P.texture,ne=r.get(P),be=r.get(w);P.addEventListener("dispose",k);const De=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Ie=De.length>1;if(Ie||(be.__webglTexture===void 0&&(be.__webglTexture=o.createTexture()),be.__version=w.version,p.memory.textures++),ee){ne.__webglFramebuffer=[];for(let Ge=0;Ge<6;Ge++)if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[Ge]=[];for(let ht=0;ht<w.mipmaps.length;ht++)ne.__webglFramebuffer[Ge][ht]=o.createFramebuffer()}else ne.__webglFramebuffer[Ge]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ge=0;Ge<w.mipmaps.length;Ge++)ne.__webglFramebuffer[Ge]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let Ge=0,ht=De.length;Ge<ht;Ge++){const Be=r.get(De[Ge]);Be.__webglTexture===void 0&&(Be.__webglTexture=o.createTexture(),p.memory.textures++)}if(P.samples>0&&at(P)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ge=0;Ge<De.length;Ge++){const ht=De[Ge];ne.__webglColorRenderbuffer[Ge]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ge]);const Be=f.convert(ht.format,ht.colorSpace),Ue=f.convert(ht.type),Oe=H(ht.internalFormat,Be,Ue,ht.colorSpace,P.isXRRenderTarget===!0),tt=Kt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,tt,Oe,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ge])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),lt(ne.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ee){i.bindTexture(o.TEXTURE_CUBE_MAP,be.__webglTexture),re(o.TEXTURE_CUBE_MAP,w);for(let Ge=0;Ge<6;Ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)qe(ne.__webglFramebuffer[Ge][ht],P,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,ht);else qe(ne.__webglFramebuffer[Ge],P,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0);T(w)&&M(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let Ge=0,ht=De.length;Ge<ht;Ge++){const Be=De[Ge],Ue=r.get(Be);let Oe=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Oe=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Oe,Ue.__webglTexture),re(Oe,Be),qe(ne.__webglFramebuffer,P,Be,o.COLOR_ATTACHMENT0+Ge,Oe,0),T(Be)&&M(Oe)}i.unbindTexture()}else{let Ge=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ge=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ge,be.__webglTexture),re(Ge,w),w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)qe(ne.__webglFramebuffer[ht],P,w,o.COLOR_ATTACHMENT0,Ge,ht);else qe(ne.__webglFramebuffer,P,w,o.COLOR_ATTACHMENT0,Ge,0);T(w)&&M(Ge),i.unbindTexture()}P.depthBuffer&&yt(P)}function Ot(P){const w=P.textures;for(let ne=0,be=w.length;ne<be;ne++){const De=w[ne];if(T(De)){const ee=X(P),Ie=r.get(De).__webglTexture;i.bindTexture(ee,Ie),M(ee),i.unbindTexture()}}}const Y=[],Et=[];function Ut(P){if(P.samples>0){if(at(P)===!1){const w=P.textures,ne=P.width,be=P.height;let De=o.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=r.get(P),Ge=w.length>1;if(Ge)for(let Be=0;Be<w.length;Be++)i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const ht=P.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(De|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(De|=o.STENCIL_BUFFER_BIT)),Ge){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Be]);const Ue=r.get(w[Be]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ue,0)}o.blitFramebuffer(0,0,ne,be,0,0,ne,be,De,o.NEAREST),_===!0&&(Y.length=0,Et.length=0,Y.push(o.COLOR_ATTACHMENT0+Be),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Y.push(ee),Et.push(ee),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Et)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Y))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ge)for(let Be=0;Be<w.length;Be++){i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Be]);const Ue=r.get(w[Be]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.TEXTURE_2D,Ue,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&_){const w=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Kt(P){return Math.min(l.maxSamples,P.samples)}function at(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function nn(P){const w=p.render.frame;b.get(P)!==w&&(b.set(P,w),P.update())}function pe(P,w){const ne=P.colorSpace,be=P.format,De=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ne!==Po&&ne!==Br&&(tn.getTransfer(ne)===pn?(be!==sa||De!==va)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Cn("WebGLTextures: Unsupported texture color space:",ne)),w}function Ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(g.width=P.naturalWidth||P.width,g.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(g.width=P.displayWidth,g.height=P.displayHeight):(g.width=P.width,g.height=P.height),g}this.allocateTextureUnit=le,this.resetTextureUnits=ae,this.setTexture2D=Me,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=te,this.rebindTextures=rn,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=at}function W3(o,e){function i(r,l=Br){let f;const p=tn.getTransfer(l);if(r===va)return o.UNSIGNED_BYTE;if(r===$p)return o.UNSIGNED_SHORT_4_4_4_4;if(r===em)return o.UNSIGNED_SHORT_5_5_5_1;if(r===O_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===P_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===L_)return o.BYTE;if(r===N_)return o.SHORT;if(r===ql)return o.UNSIGNED_SHORT;if(r===Jp)return o.INT;if(r===Ss)return o.UNSIGNED_INT;if(r===Qa)return o.FLOAT;if(r===zo)return o.HALF_FLOAT;if(r===F_)return o.ALPHA;if(r===z_)return o.RGB;if(r===sa)return o.RGBA;if(r===jl)return o.DEPTH_COMPONENT;if(r===Zl)return o.DEPTH_STENCIL;if(r===B_)return o.RED;if(r===tm)return o.RED_INTEGER;if(r===nm)return o.RG;if(r===im)return o.RG_INTEGER;if(r===am)return o.RGBA_INTEGER;if(r===Iu||r===Hu||r===Vu||r===Gu)if(p===pn)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Iu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Iu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vp||r===yp||r===Sp||r===bp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===vp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mp||r===Ep||r===Tp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Mp||r===Ep)return p===pn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Tp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ap||r===wp||r===Rp||r===Cp||r===Dp||r===Up||r===Lp||r===Np||r===Op||r===Pp||r===Fp||r===zp||r===Bp||r===Ip)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Ap)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Up)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Np)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Op)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ip)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hp||r===Vp||r===Gp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Hp)return p===pn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kp||r===Xp||r===Wp||r===qp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===kp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Xp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const q3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new J_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new er({vertexShader:q3,fragmentShader:Y3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new ef(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z3 extends Es{constructor(e,i){super();const r=this;let l=null,f=1,p=null,m="local-floor",_=1,g=null,b=null,S=null,E=null,A=null,U=null;const L=typeof XRWebGLBinding<"u",T=new j3,M={},X=i.getContextAttributes();let H=null,q=null;const Q=[],V=[],k=new Dt;let ue=null;const F=new qi;F.viewport=new Dn;const O=new qi;O.viewport=new Dn;const K=[F,O],ae=new fb;let le=null,Te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let Se=Q[me];return Se===void 0&&(Se=new Yd,Q[me]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(me){let Se=Q[me];return Se===void 0&&(Se=new Yd,Q[me]=Se),Se.getGripSpace()},this.getHand=function(me){let Se=Q[me];return Se===void 0&&(Se=new Yd,Q[me]=Se),Se.getHandSpace()};function Me(me){const Se=V.indexOf(me.inputSource);if(Se===-1)return;const qe=Q[Se];qe!==void 0&&(qe.update(me.inputSource,me.frame,g||p),qe.dispatchEvent({type:me.type,data:me.inputSource}))}function B(){l.removeEventListener("select",Me),l.removeEventListener("selectstart",Me),l.removeEventListener("selectend",Me),l.removeEventListener("squeeze",Me),l.removeEventListener("squeezestart",Me),l.removeEventListener("squeezeend",Me),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",$);for(let me=0;me<Q.length;me++){const Se=V[me];Se!==null&&(V[me]=null,Q[me].disconnect(Se))}le=null,Te=null,T.reset();for(const me in M)delete M[me];e.setRenderTarget(H),A=null,E=null,S=null,l=null,q=null,et.stop(),r.isPresenting=!1,e.setPixelRatio(ue),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){f=me,r.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){m=me,r.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||p},this.setReferenceSpace=function(me){g=me},this.getBaseLayer=function(){return E!==null?E:A},this.getBinding=function(){return S===null&&L&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return U},this.getSession=function(){return l},this.setSession=async function(me){if(l=me,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",Me),l.addEventListener("selectstart",Me),l.addEventListener("selectend",Me),l.addEventListener("squeeze",Me),l.addEventListener("squeezestart",Me),l.addEventListener("squeezeend",Me),l.addEventListener("end",B),l.addEventListener("inputsourceschange",$),X.xrCompatible!==!0&&await i.makeXRCompatible(),ue=e.getPixelRatio(),e.getSize(k),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let qe=null,lt=null,ft=null;X.depth&&(ft=X.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,qe=X.stencil?Zl:jl,lt=X.stencil?Yl:Ss);const yt={colorFormat:i.RGBA8,depthFormat:ft,scaleFactor:f};S=this.getBinding(),E=S.createProjectionLayer(yt),l.updateRenderState({layers:[E]}),e.setPixelRatio(1),e.setSize(E.textureWidth,E.textureHeight,!1),q=new Ms(E.textureWidth,E.textureHeight,{format:sa,type:va,depthTexture:new Q_(E.textureWidth,E.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,qe),stencilBuffer:X.stencil,colorSpace:e.outputColorSpace,samples:X.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const qe={antialias:X.antialias,alpha:!0,depth:X.depth,stencil:X.stencil,framebufferScaleFactor:f};A=new XRWebGLLayer(l,i,qe),l.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),q=new Ms(A.framebufferWidth,A.framebufferHeight,{format:sa,type:va,colorSpace:e.outputColorSpace,stencilBuffer:X.stencil,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1})}q.isXRRenderTarget=!0,this.setFoveation(_),g=null,p=await l.requestReferenceSpace(m),et.setContext(l),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function $(me){for(let Se=0;Se<me.removed.length;Se++){const qe=me.removed[Se],lt=V.indexOf(qe);lt>=0&&(V[lt]=null,Q[lt].disconnect(qe))}for(let Se=0;Se<me.added.length;Se++){const qe=me.added[Se];let lt=V.indexOf(qe);if(lt===-1){for(let yt=0;yt<Q.length;yt++)if(yt>=V.length){V.push(qe),lt=yt;break}else if(V[yt]===null){V[yt]=qe,lt=yt;break}if(lt===-1)break}const ft=Q[lt];ft&&ft.connect(qe)}}const te=new xe,Re=new xe;function ce(me,Se,qe){te.setFromMatrixPosition(Se.matrixWorld),Re.setFromMatrixPosition(qe.matrixWorld);const lt=te.distanceTo(Re),ft=Se.projectionMatrix.elements,yt=qe.projectionMatrix.elements,rn=ft[14]/(ft[10]-1),Tt=ft[14]/(ft[10]+1),Ot=(ft[9]+1)/ft[5],Y=(ft[9]-1)/ft[5],Et=(ft[8]-1)/ft[0],Ut=(yt[8]+1)/yt[0],Kt=rn*Et,at=rn*Ut,nn=lt/(-Et+Ut),pe=nn*-Et;if(Se.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(pe),me.translateZ(nn),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),ft[10]===-1)me.projectionMatrix.copy(Se.projectionMatrix),me.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const Ee=rn+nn,P=Tt+nn,w=Kt-pe,ne=at+(lt-pe),be=Ot*Tt/P*Ee,De=Y*Tt/P*Ee;me.projectionMatrix.makePerspective(w,ne,be,De,Ee,P),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function I(me,Se){Se===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(Se.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(l===null)return;let Se=me.near,qe=me.far;T.texture!==null&&(T.depthNear>0&&(Se=T.depthNear),T.depthFar>0&&(qe=T.depthFar)),ae.near=O.near=F.near=Se,ae.far=O.far=F.far=qe,(le!==ae.near||Te!==ae.far)&&(l.updateRenderState({depthNear:ae.near,depthFar:ae.far}),le=ae.near,Te=ae.far),ae.layers.mask=me.layers.mask|6,F.layers.mask=ae.layers.mask&3,O.layers.mask=ae.layers.mask&5;const lt=me.parent,ft=ae.cameras;I(ae,lt);for(let yt=0;yt<ft.length;yt++)I(ft[yt],lt);ft.length===2?ce(ae,F,O):ae.projectionMatrix.copy(F.projectionMatrix),re(me,ae,lt)};function re(me,Se,qe){qe===null?me.matrix.copy(Se.matrixWorld):(me.matrix.copy(qe.matrixWorld),me.matrix.invert(),me.matrix.multiply(Se.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(Se.projectionMatrix),me.projectionMatrixInverse.copy(Se.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=Yp*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(E===null&&A===null))return _},this.setFoveation=function(me){_=me,E!==null&&(E.fixedFoveation=me),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=me)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(ae)},this.getCameraTexture=function(me){return M[me]};let we=null;function ze(me,Se){if(b=Se.getViewerPose(g||p),U=Se,b!==null){const qe=b.views;A!==null&&(e.setRenderTargetFramebuffer(q,A.framebuffer),e.setRenderTarget(q));let lt=!1;qe.length!==ae.cameras.length&&(ae.cameras.length=0,lt=!0);for(let Tt=0;Tt<qe.length;Tt++){const Ot=qe[Tt];let Y=null;if(A!==null)Y=A.getViewport(Ot);else{const Ut=S.getViewSubImage(E,Ot);Y=Ut.viewport,Tt===0&&(e.setRenderTargetTextures(q,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(q))}let Et=K[Tt];Et===void 0&&(Et=new qi,Et.layers.enable(Tt),Et.viewport=new Dn,K[Tt]=Et),Et.matrix.fromArray(Ot.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Ot.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Y.x,Y.y,Y.width,Y.height),Tt===0&&(ae.matrix.copy(Et.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),lt===!0&&ae.cameras.push(Et)}const ft=l.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){S=r.getBinding();const Tt=S.getDepthInformation(qe[0]);Tt&&Tt.isValid&&Tt.texture&&T.init(Tt,l.renderState)}if(ft&&ft.includes("camera-access")&&L){e.state.unbindTexture(),S=r.getBinding();for(let Tt=0;Tt<qe.length;Tt++){const Ot=qe[Tt].camera;if(Ot){let Y=M[Ot];Y||(Y=new J_,M[Ot]=Y);const Et=S.getCameraImage(Ot);Y.sourceTexture=Et}}}}for(let qe=0;qe<Q.length;qe++){const lt=V[qe],ft=Q[qe];lt!==null&&ft!==void 0&&ft.update(lt,Se,g||p)}we&&we(me,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),U=null}const et=new tv;et.setAnimationLoop(ze),this.setAnimationLoop=function(me){we=me},this.dispose=function(){}}}const xs=new ya,K3=new Mn;function Q3(o,e){function i(T,M){T.matrixAutoUpdate===!0&&T.updateMatrix(),M.value.copy(T.matrix)}function r(T,M){M.color.getRGB(T.fogColor.value,Y_(o)),M.isFog?(T.fogNear.value=M.near,T.fogFar.value=M.far):M.isFogExp2&&(T.fogDensity.value=M.density)}function l(T,M,X,H,q){M.isMeshBasicMaterial||M.isMeshLambertMaterial?f(T,M):M.isMeshToonMaterial?(f(T,M),S(T,M)):M.isMeshPhongMaterial?(f(T,M),b(T,M)):M.isMeshStandardMaterial?(f(T,M),E(T,M),M.isMeshPhysicalMaterial&&A(T,M,q)):M.isMeshMatcapMaterial?(f(T,M),U(T,M)):M.isMeshDepthMaterial?f(T,M):M.isMeshDistanceMaterial?(f(T,M),L(T,M)):M.isMeshNormalMaterial?f(T,M):M.isLineBasicMaterial?(p(T,M),M.isLineDashedMaterial&&m(T,M)):M.isPointsMaterial?_(T,M,X,H):M.isSpriteMaterial?g(T,M):M.isShadowMaterial?(T.color.value.copy(M.color),T.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function f(T,M){T.opacity.value=M.opacity,M.color&&T.diffuse.value.copy(M.color),M.emissive&&T.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.bumpMap&&(T.bumpMap.value=M.bumpMap,i(M.bumpMap,T.bumpMapTransform),T.bumpScale.value=M.bumpScale,M.side===Mi&&(T.bumpScale.value*=-1)),M.normalMap&&(T.normalMap.value=M.normalMap,i(M.normalMap,T.normalMapTransform),T.normalScale.value.copy(M.normalScale),M.side===Mi&&T.normalScale.value.negate()),M.displacementMap&&(T.displacementMap.value=M.displacementMap,i(M.displacementMap,T.displacementMapTransform),T.displacementScale.value=M.displacementScale,T.displacementBias.value=M.displacementBias),M.emissiveMap&&(T.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,T.emissiveMapTransform)),M.specularMap&&(T.specularMap.value=M.specularMap,i(M.specularMap,T.specularMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest);const X=e.get(M),H=X.envMap,q=X.envMapRotation;H&&(T.envMap.value=H,xs.copy(q),xs.x*=-1,xs.y*=-1,xs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),T.envMapRotation.value.setFromMatrix4(K3.makeRotationFromEuler(xs)),T.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=M.reflectivity,T.ior.value=M.ior,T.refractionRatio.value=M.refractionRatio),M.lightMap&&(T.lightMap.value=M.lightMap,T.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,T.lightMapTransform)),M.aoMap&&(T.aoMap.value=M.aoMap,T.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,T.aoMapTransform))}function p(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform))}function m(T,M){T.dashSize.value=M.dashSize,T.totalSize.value=M.dashSize+M.gapSize,T.scale.value=M.scale}function _(T,M,X,H){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.size.value=M.size*X,T.scale.value=H*.5,M.map&&(T.map.value=M.map,i(M.map,T.uvTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function g(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.rotation.value=M.rotation,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function b(T,M){T.specular.value.copy(M.specular),T.shininess.value=Math.max(M.shininess,1e-4)}function S(T,M){M.gradientMap&&(T.gradientMap.value=M.gradientMap)}function E(T,M){T.metalness.value=M.metalness,M.metalnessMap&&(T.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,T.metalnessMapTransform)),T.roughness.value=M.roughness,M.roughnessMap&&(T.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,T.roughnessMapTransform)),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)}function A(T,M,X){T.ior.value=M.ior,M.sheen>0&&(T.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),T.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(T.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,T.sheenColorMapTransform)),M.sheenRoughnessMap&&(T.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,T.sheenRoughnessMapTransform))),M.clearcoat>0&&(T.clearcoat.value=M.clearcoat,T.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(T.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,T.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(T.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Mi&&T.clearcoatNormalScale.value.negate())),M.dispersion>0&&(T.dispersion.value=M.dispersion),M.iridescence>0&&(T.iridescence.value=M.iridescence,T.iridescenceIOR.value=M.iridescenceIOR,T.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(T.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,T.iridescenceMapTransform)),M.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),M.transmission>0&&(T.transmission.value=M.transmission,T.transmissionSamplerMap.value=X.texture,T.transmissionSamplerSize.value.set(X.width,X.height),M.transmissionMap&&(T.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,T.transmissionMapTransform)),T.thickness.value=M.thickness,M.thicknessMap&&(T.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=M.attenuationDistance,T.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(T.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(T.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=M.specularIntensity,T.specularColor.value.copy(M.specularColor),M.specularColorMap&&(T.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,T.specularColorMapTransform)),M.specularIntensityMap&&(T.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,T.specularIntensityMapTransform))}function U(T,M){M.matcap&&(T.matcap.value=M.matcap)}function L(T,M){const X=e.get(M).light;T.referencePosition.value.setFromMatrixPosition(X.matrixWorld),T.nearDistance.value=X.shadow.camera.near,T.farDistance.value=X.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function J3(o,e,i,r){let l={},f={},p=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(X,H){const q=H.program;r.uniformBlockBinding(X,q)}function g(X,H){let q=l[X.id];q===void 0&&(U(X),q=b(X),l[X.id]=q,X.addEventListener("dispose",T));const Q=H.program;r.updateUBOMapping(X,Q);const V=e.render.frame;f[X.id]!==V&&(E(X),f[X.id]=V)}function b(X){const H=S();X.__bindingPointIndex=H;const q=o.createBuffer(),Q=X.__size,V=X.usage;return o.bindBuffer(o.UNIFORM_BUFFER,q),o.bufferData(o.UNIFORM_BUFFER,Q,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,H,q),q}function S(){for(let X=0;X<m;X++)if(p.indexOf(X)===-1)return p.push(X),X;return Cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(X){const H=l[X.id],q=X.uniforms,Q=X.__cache;o.bindBuffer(o.UNIFORM_BUFFER,H);for(let V=0,k=q.length;V<k;V++){const ue=Array.isArray(q[V])?q[V]:[q[V]];for(let F=0,O=ue.length;F<O;F++){const K=ue[F];if(A(K,V,F,Q)===!0){const ae=K.__offset,le=Array.isArray(K.value)?K.value:[K.value];let Te=0;for(let Me=0;Me<le.length;Me++){const B=le[Me],$=L(B);typeof B=="number"||typeof B=="boolean"?(K.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,ae+Te,K.__data)):B.isMatrix3?(K.__data[0]=B.elements[0],K.__data[1]=B.elements[1],K.__data[2]=B.elements[2],K.__data[3]=0,K.__data[4]=B.elements[3],K.__data[5]=B.elements[4],K.__data[6]=B.elements[5],K.__data[7]=0,K.__data[8]=B.elements[6],K.__data[9]=B.elements[7],K.__data[10]=B.elements[8],K.__data[11]=0):(B.toArray(K.__data,Te),Te+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ae,K.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function A(X,H,q,Q){const V=X.value,k=H+"_"+q;if(Q[k]===void 0)return typeof V=="number"||typeof V=="boolean"?Q[k]=V:Q[k]=V.clone(),!0;{const ue=Q[k];if(typeof V=="number"||typeof V=="boolean"){if(ue!==V)return Q[k]=V,!0}else if(ue.equals(V)===!1)return ue.copy(V),!0}return!1}function U(X){const H=X.uniforms;let q=0;const Q=16;for(let k=0,ue=H.length;k<ue;k++){const F=Array.isArray(H[k])?H[k]:[H[k]];for(let O=0,K=F.length;O<K;O++){const ae=F[O],le=Array.isArray(ae.value)?ae.value:[ae.value];for(let Te=0,Me=le.length;Te<Me;Te++){const B=le[Te],$=L(B),te=q%Q,Re=te%$.boundary,ce=te+Re;q+=Re,ce!==0&&Q-ce<$.storage&&(q+=Q-ce),ae.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=q,q+=$.storage}}}const V=q%Q;return V>0&&(q+=Q-V),X.__size=q,X.__cache={},this}function L(X){const H={boundary:0,storage:0};return typeof X=="number"||typeof X=="boolean"?(H.boundary=4,H.storage=4):X.isVector2?(H.boundary=8,H.storage=8):X.isVector3||X.isColor?(H.boundary=16,H.storage=12):X.isVector4?(H.boundary=16,H.storage=16):X.isMatrix3?(H.boundary=48,H.storage=48):X.isMatrix4?(H.boundary=64,H.storage=64):X.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):wt("WebGLRenderer: Unsupported uniform value type.",X),H}function T(X){const H=X.target;H.removeEventListener("dispose",T);const q=p.indexOf(H.__bindingPointIndex);p.splice(q,1),o.deleteBuffer(l[H.id]),delete l[H.id],delete f[H.id]}function M(){for(const X in l)o.deleteBuffer(l[X]);p=[],l={},f={}}return{bind:_,update:g,dispose:M}}const $3=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ja=null;function eT(){return ja===null&&(ja=new eb($3,32,32,nm,zo),ja.minFilter=Yi,ja.magFilter=Yi,ja.wrapS=Ka,ja.wrapT=Ka,ja.generateMipmaps=!1,ja.needsUpdate=!0),ja}class tT{constructor(e={}){const{canvas:i=TS(),context:r=null,depth:l=!0,stencil:f=!1,alpha:p=!1,antialias:m=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:E=!1}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=p;const U=new Set([am,im,tm]),L=new Set([va,Ss,ql,Yl,$p,em]),T=new Uint32Array(4),M=new Int32Array(4);let X=null,H=null;const q=[],Q=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let k=!1;this._outputColorSpace=Wi;let ue=0,F=0,O=null,K=-1,ae=null;const le=new Dn,Te=new Dn;let Me=null;const B=new Zt(0);let $=0,te=i.width,Re=i.height,ce=1,I=null,re=null;const we=new Dn(0,0,te,Re),ze=new Dn(0,0,te,Re);let et=!1;const me=new om;let Se=!1,qe=!1;const lt=new Mn,ft=new xe,yt=new Dn,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Ot(){return O===null?ce:1}let Y=r;function Et(N,ie){return i.getContext(N,ie)}try{const N={alpha:!0,depth:l,stencil:f,antialias:m,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:b,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qp}`),i.addEventListener("webglcontextlost",Pe,!1),i.addEventListener("webglcontextrestored",Le,!1),i.addEventListener("webglcontextcreationerror",rt,!1),Y===null){const ie="webgl2";if(Y=Et(ie,N),Y===null)throw Et(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw N("WebGLRenderer: "+N.message),N}let Ut,Kt,at,nn,pe,Ee,P,w,ne,be,De,ee,Ie,Ge,ht,Be,Ue,Oe,tt,it,je,vt,j,Ye;function ke(){Ut=new c1(Y),Ut.init(),vt=new W3(Y,Ut),Kt=new e1(Y,Ut,e,vt),at=new k3(Y,Ut),Kt.reversedDepthBuffer&&E&&at.buffers.depth.setReversed(!0),nn=new h1(Y),pe=new D3,Ee=new X3(Y,Ut,at,pe,Kt,vt,nn),P=new n1(V),w=new l1(V),ne=new gb(Y),j=new JE(Y,ne),be=new u1(Y,ne,nn,j),De=new p1(Y,be,ne,nn),tt=new d1(Y,Kt,Ee),Be=new t1(pe),ee=new C3(V,P,w,Ut,Kt,j,Be),Ie=new Q3(V,pe),Ge=new L3,ht=new B3(Ut),Oe=new QE(V,P,w,at,De,A,_),Ue=new V3(V,De,Kt),Ye=new J3(Y,nn,Kt,at),it=new $E(Y,Ut,nn),je=new f1(Y,Ut,nn),nn.programs=ee.programs,V.capabilities=Kt,V.extensions=Ut,V.properties=pe,V.renderLists=Ge,V.shadowMap=Ue,V.state=at,V.info=nn}ke();const Xe=new Z3(V,Y);this.xr=Xe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const N=Ut.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ut.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(N){N!==void 0&&(ce=N,this.setSize(te,Re,!1))},this.getSize=function(N){return N.set(te,Re)},this.setSize=function(N,ie,_e=!0){if(Xe.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}te=N,Re=ie,i.width=Math.floor(N*ce),i.height=Math.floor(ie*ce),_e===!0&&(i.style.width=N+"px",i.style.height=ie+"px"),this.setViewport(0,0,N,ie)},this.getDrawingBufferSize=function(N){return N.set(te*ce,Re*ce).floor()},this.setDrawingBufferSize=function(N,ie,_e){te=N,Re=ie,ce=_e,i.width=Math.floor(N*_e),i.height=Math.floor(ie*_e),this.setViewport(0,0,N,ie)},this.getCurrentViewport=function(N){return N.copy(le)},this.getViewport=function(N){return N.copy(we)},this.setViewport=function(N,ie,_e,fe){N.isVector4?we.set(N.x,N.y,N.z,N.w):we.set(N,ie,_e,fe),at.viewport(le.copy(we).multiplyScalar(ce).round())},this.getScissor=function(N){return N.copy(ze)},this.setScissor=function(N,ie,_e,fe){N.isVector4?ze.set(N.x,N.y,N.z,N.w):ze.set(N,ie,_e,fe),at.scissor(Te.copy(ze).multiplyScalar(ce).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(N){at.setScissorTest(et=N)},this.setOpaqueSort=function(N){I=N},this.setTransparentSort=function(N){re=N},this.getClearColor=function(N){return N.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(N=!0,ie=!0,_e=!0){let fe=0;if(N){let oe=!1;if(O!==null){const Ve=O.texture.format;oe=U.has(Ve)}if(oe){const Ve=O.texture.type,He=L.has(Ve),Qe=Oe.getClearColor(),Je=Oe.getClearAlpha(),gt=Qe.r,_t=Qe.g,ot=Qe.b;He?(T[0]=gt,T[1]=_t,T[2]=ot,T[3]=Je,Y.clearBufferuiv(Y.COLOR,0,T)):(M[0]=gt,M[1]=_t,M[2]=ot,M[3]=Je,Y.clearBufferiv(Y.COLOR,0,M))}else fe|=Y.COLOR_BUFFER_BIT}ie&&(fe|=Y.DEPTH_BUFFER_BIT),_e&&(fe|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",Le,!1),i.removeEventListener("webglcontextcreationerror",rt,!1),Oe.dispose(),Ge.dispose(),ht.dispose(),pe.dispose(),P.dispose(),w.dispose(),De.dispose(),j.dispose(),Ye.dispose(),ee.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Gr),Xe.removeEventListener("sessionend",kr),ci.stop()};function Pe(N){N.preventDefault(),Rx("WebGLRenderer: Context Lost."),k=!0}function Le(){Rx("WebGLRenderer: Context Restored."),k=!1;const N=nn.autoReset,ie=Ue.enabled,_e=Ue.autoUpdate,fe=Ue.needsUpdate,oe=Ue.type;ke(),nn.autoReset=N,Ue.enabled=ie,Ue.autoUpdate=_e,Ue.needsUpdate=fe,Ue.type=oe}function rt(N){Cn("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Mt(N){const ie=N.target;ie.removeEventListener("dispose",Mt),st(ie)}function st(N){Qt(N),pe.remove(N)}function Qt(N){const ie=pe.get(N).programs;ie!==void 0&&(ie.forEach(function(_e){ee.releaseProgram(_e)}),N.isShaderMaterial&&ee.releaseShaderCache(N))}this.renderBufferDirect=function(N,ie,_e,fe,oe,Ve){ie===null&&(ie=rn);const He=oe.isMesh&&oe.matrixWorld.determinant()<0,Qe=Vo(N,ie,_e,fe,oe);at.setMaterial(fe,He);let Je=_e.index,gt=1;if(fe.wireframe===!0){if(Je=be.getWireframeAttribute(_e),Je===void 0)return;gt=2}const _t=_e.drawRange,ot=_e.attributes.position;let Rt=_t.start*gt,Wt=(_t.start+_t.count)*gt;Ve!==null&&(Rt=Math.max(Rt,Ve.start*gt),Wt=Math.min(Wt,(Ve.start+Ve.count)*gt)),Je!==null?(Rt=Math.max(Rt,0),Wt=Math.min(Wt,Je.count)):ot!=null&&(Rt=Math.max(Rt,0),Wt=Math.min(Wt,ot.count));const Jt=Wt-Rt;if(Jt<0||Jt===1/0)return;j.setup(oe,fe,Qe,_e,Je);let Vt,zt=it;if(Je!==null&&(Vt=ne.get(Je),zt=je,zt.setIndex(Vt)),oe.isMesh)fe.wireframe===!0?(at.setLineWidth(fe.wireframeLinewidth*Ot()),zt.setMode(Y.LINES)):zt.setMode(Y.TRIANGLES);else if(oe.isLine){let dt=fe.linewidth;dt===void 0&&(dt=1),at.setLineWidth(dt*Ot()),oe.isLineSegments?zt.setMode(Y.LINES):oe.isLineLoop?zt.setMode(Y.LINE_LOOP):zt.setMode(Y.LINE_STRIP)}else oe.isPoints?zt.setMode(Y.POINTS):oe.isSprite&&zt.setMode(Y.TRIANGLES);if(oe.isBatchedMesh)if(oe._multiDrawInstances!==null)Kl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount,oe._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))zt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const dt=oe._multiDrawStarts,sn=oe._multiDrawCounts,It=oe._multiDrawCount,cn=Je?ne.get(Je).bytesPerElement:1,Pi=pe.get(fe).currentProgram.getUniforms();for(let un=0;un<It;un++)Pi.setValue(Y,"_gl_DrawID",un),zt.render(dt[un]/cn,sn[un])}else if(oe.isInstancedMesh)zt.renderInstances(Rt,Jt,oe.count);else if(_e.isInstancedBufferGeometry){const dt=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,sn=Math.min(_e.instanceCount,dt);zt.renderInstances(Rt,Jt,sn)}else zt.render(Rt,Jt)};function Yn(N,ie,_e){N.transparent===!0&&N.side===ga&&N.forceSinglePass===!1?(N.side=Mi,N.needsUpdate=!0,yn(N,ie,_e),N.side=Vr,N.needsUpdate=!0,yn(N,ie,_e),N.side=ga):yn(N,ie,_e)}this.compile=function(N,ie,_e=null){_e===null&&(_e=N),H=ht.get(_e),H.init(ie),Q.push(H),_e.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ie.layers)&&(H.pushLight(oe),oe.castShadow&&H.pushShadow(oe))}),N!==_e&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ie.layers)&&(H.pushLight(oe),oe.castShadow&&H.pushShadow(oe))}),H.setupLights();const fe=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ve=oe.material;if(Ve)if(Array.isArray(Ve))for(let He=0;He<Ve.length;He++){const Qe=Ve[He];Yn(Qe,_e,oe),fe.add(Qe)}else Yn(Ve,_e,oe),fe.add(Ve)}),H=Q.pop(),fe},this.compileAsync=function(N,ie,_e=null){const fe=this.compile(N,ie,_e);return new Promise(oe=>{function Ve(){if(fe.forEach(function(He){pe.get(He).currentProgram.isReady()&&fe.delete(He)}),fe.size===0){oe(N);return}setTimeout(Ve,10)}Ut.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let li=null;function Ts(N){li&&li(N)}function Gr(){ci.stop()}function kr(){ci.start()}const ci=new tv;ci.setAnimationLoop(Ts),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(N){li=N,Xe.setAnimationLoop(N),N===null?ci.stop():ci.start()},Xe.addEventListener("sessionstart",Gr),Xe.addEventListener("sessionend",kr),this.render=function(N,ie){if(ie!==void 0&&ie.isCamera!==!0){Cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(ie),ie=Xe.getCamera()),N.isScene===!0&&N.onBeforeRender(V,N,ie,O),H=ht.get(N,Q.length),H.init(ie),Q.push(H),lt.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),me.setFromProjectionMatrix(lt,xa,ie.reversedDepth),qe=this.localClippingEnabled,Se=Be.init(this.clippingPlanes,qe),X=Ge.get(N,q.length),X.init(),q.push(X),Xe.enabled===!0&&Xe.isPresenting===!0){const Ve=V.xr.getDepthSensingMesh();Ve!==null&&R(Ve,ie,-1/0,V.sortObjects)}R(N,ie,0,V.sortObjects),X.finish(),V.sortObjects===!0&&X.sort(I,re),Tt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Tt&&Oe.addToRenderList(X,N),this.info.render.frame++,Se===!0&&Be.beginShadows();const _e=H.state.shadowsArray;Ue.render(_e,N,ie),Se===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=X.opaque,oe=X.transmissive;if(H.setupLights(),ie.isArrayCamera){const Ve=ie.cameras;if(oe.length>0)for(let He=0,Qe=Ve.length;He<Qe;He++){const Je=Ve[He];Ht(fe,oe,N,Je)}Tt&&Oe.render(N);for(let He=0,Qe=Ve.length;He<Qe;He++){const Je=Ve[He];Sa(X,N,Je,Je.viewport)}}else oe.length>0&&Ht(fe,oe,N,ie),Tt&&Oe.render(N),Sa(X,N,ie);O!==null&&F===0&&(Ee.updateMultisampleRenderTarget(O),Ee.updateRenderTargetMipmap(O)),N.isScene===!0&&N.onAfterRender(V,N,ie),j.resetDefaultState(),K=-1,ae=null,Q.pop(),Q.length>0?(H=Q[Q.length-1],Se===!0&&Be.setGlobalState(V.clippingPlanes,H.state.camera)):H=null,q.pop(),q.length>0?X=q[q.length-1]:X=null};function R(N,ie,_e,fe){if(N.visible===!1)return;if(N.layers.test(ie.layers)){if(N.isGroup)_e=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ie);else if(N.isLight)H.pushLight(N),N.castShadow&&H.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||me.intersectsSprite(N)){fe&&yt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(lt);const He=De.update(N),Qe=N.material;Qe.visible&&X.push(N,He,Qe,_e,yt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||me.intersectsObject(N))){const He=De.update(N),Qe=N.material;if(fe&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),yt.copy(N.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),yt.copy(He.boundingSphere.center)),yt.applyMatrix4(N.matrixWorld).applyMatrix4(lt)),Array.isArray(Qe)){const Je=He.groups;for(let gt=0,_t=Je.length;gt<_t;gt++){const ot=Je[gt],Rt=Qe[ot.materialIndex];Rt&&Rt.visible&&X.push(N,He,Rt,_e,yt.z,ot)}}else Qe.visible&&X.push(N,He,Qe,_e,yt.z,null)}}const Ve=N.children;for(let He=0,Qe=Ve.length;He<Qe;He++)R(Ve[He],ie,_e,fe)}function Sa(N,ie,_e,fe){const{opaque:oe,transmissive:Ve,transparent:He}=N;H.setupLightsView(_e),Se===!0&&Be.setGlobalState(V.clippingPlanes,_e),fe&&at.viewport(le.copy(fe)),oe.length>0&&ui(oe,ie,_e),Ve.length>0&&ui(Ve,ie,_e),He.length>0&&ui(He,ie,_e),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Ht(N,ie,_e,fe){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;H.state.transmissionRenderTarget[fe.id]===void 0&&(H.state.transmissionRenderTarget[fe.id]=new Ms(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?zo:va,minFilter:ys,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tn.workingColorSpace}));const Ve=H.state.transmissionRenderTarget[fe.id],He=fe.viewport||le;Ve.setSize(He.z*V.transmissionResolutionScale,He.w*V.transmissionResolutionScale);const Qe=V.getRenderTarget(),Je=V.getActiveCubeFace(),gt=V.getActiveMipmapLevel();V.setRenderTarget(Ve),V.getClearColor(B),$=V.getClearAlpha(),$<1&&V.setClearColor(16777215,.5),V.clear(),Tt&&Oe.render(_e);const _t=V.toneMapping;V.toneMapping=Hr;const ot=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),H.setupLightsView(fe),Se===!0&&Be.setGlobalState(V.clippingPlanes,fe),ui(N,_e,fe),Ee.updateMultisampleRenderTarget(Ve),Ee.updateRenderTargetMipmap(Ve),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Wt=0,Jt=ie.length;Wt<Jt;Wt++){const Vt=ie[Wt],{object:zt,geometry:dt,material:sn,group:It}=Vt;if(sn.side===ga&&zt.layers.test(fe.layers)){const cn=sn.side;sn.side=Mi,sn.needsUpdate=!0,En(zt,_e,fe,dt,sn,It),sn.side=cn,sn.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ee.updateMultisampleRenderTarget(Ve),Ee.updateRenderTargetMipmap(Ve))}V.setRenderTarget(Qe,Je,gt),V.setClearColor(B,$),ot!==void 0&&(fe.viewport=ot),V.toneMapping=_t}function ui(N,ie,_e){const fe=ie.isScene===!0?ie.overrideMaterial:null;for(let oe=0,Ve=N.length;oe<Ve;oe++){const He=N[oe],{object:Qe,geometry:Je,group:gt}=He;let _t=He.material;_t.allowOverride===!0&&fe!==null&&(_t=fe),Qe.layers.test(_e.layers)&&En(Qe,ie,_e,Je,_t,gt)}}function En(N,ie,_e,fe,oe,Ve){N.onBeforeRender(V,ie,_e,fe,oe,Ve),N.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(V,ie,_e,fe,N,Ve),oe.transparent===!0&&oe.side===ga&&oe.forceSinglePass===!1?(oe.side=Mi,oe.needsUpdate=!0,V.renderBufferDirect(_e,ie,fe,oe,N,Ve),oe.side=Vr,oe.needsUpdate=!0,V.renderBufferDirect(_e,ie,fe,oe,N,Ve),oe.side=ga):V.renderBufferDirect(_e,ie,fe,oe,N,Ve),N.onAfterRender(V,ie,_e,fe,oe,Ve)}function yn(N,ie,_e){ie.isScene!==!0&&(ie=rn);const fe=pe.get(N),oe=H.state.lights,Ve=H.state.shadowsArray,He=oe.state.version,Qe=ee.getParameters(N,oe.state,Ve,ie,_e),Je=ee.getProgramCacheKey(Qe);let gt=fe.programs;fe.environment=N.isMeshStandardMaterial?ie.environment:null,fe.fog=ie.fog,fe.envMap=(N.isMeshStandardMaterial?w:P).get(N.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&N.envMap===null?ie.environmentRotation:N.envMapRotation,gt===void 0&&(N.addEventListener("dispose",Mt),gt=new Map,fe.programs=gt);let _t=gt.get(Je);if(_t!==void 0){if(fe.currentProgram===_t&&fe.lightsStateVersion===He)return tr(N,Qe),_t}else Qe.uniforms=ee.getUniforms(N),N.onBeforeCompile(Qe,V),_t=ee.acquireProgram(Qe,Je),gt.set(Je,_t),fe.uniforms=Qe.uniforms;const ot=fe.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ot.clippingPlanes=Be.uniform),tr(N,Qe),fe.needsLights=As(N),fe.lightsStateVersion=He,fe.needsLights&&(ot.ambientLightColor.value=oe.state.ambient,ot.lightProbe.value=oe.state.probe,ot.directionalLights.value=oe.state.directional,ot.directionalLightShadows.value=oe.state.directionalShadow,ot.spotLights.value=oe.state.spot,ot.spotLightShadows.value=oe.state.spotShadow,ot.rectAreaLights.value=oe.state.rectArea,ot.ltc_1.value=oe.state.rectAreaLTC1,ot.ltc_2.value=oe.state.rectAreaLTC2,ot.pointLights.value=oe.state.point,ot.pointLightShadows.value=oe.state.pointShadow,ot.hemisphereLights.value=oe.state.hemi,ot.directionalShadowMap.value=oe.state.directionalShadowMap,ot.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,ot.spotShadowMap.value=oe.state.spotShadowMap,ot.spotLightMatrix.value=oe.state.spotLightMatrix,ot.spotLightMap.value=oe.state.spotLightMap,ot.pointShadowMap.value=oe.state.pointShadowMap,ot.pointShadowMatrix.value=oe.state.pointShadowMatrix),fe.currentProgram=_t,fe.uniformsList=null,_t}function ni(N){if(N.uniformsList===null){const ie=N.currentProgram.getUniforms();N.uniformsList=Xu.seqWithValue(ie.seq,N.uniforms)}return N.uniformsList}function tr(N,ie){const _e=pe.get(N);_e.outputColorSpace=ie.outputColorSpace,_e.batching=ie.batching,_e.batchingColor=ie.batchingColor,_e.instancing=ie.instancing,_e.instancingColor=ie.instancingColor,_e.instancingMorph=ie.instancingMorph,_e.skinning=ie.skinning,_e.morphTargets=ie.morphTargets,_e.morphNormals=ie.morphNormals,_e.morphColors=ie.morphColors,_e.morphTargetsCount=ie.morphTargetsCount,_e.numClippingPlanes=ie.numClippingPlanes,_e.numIntersection=ie.numClipIntersection,_e.vertexAlphas=ie.vertexAlphas,_e.vertexTangents=ie.vertexTangents,_e.toneMapping=ie.toneMapping}function Vo(N,ie,_e,fe,oe){ie.isScene!==!0&&(ie=rn),Ee.resetTextureUnits();const Ve=ie.fog,He=fe.isMeshStandardMaterial?ie.environment:null,Qe=O===null?V.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Po,Je=(fe.isMeshStandardMaterial?w:P).get(fe.envMap||He),gt=fe.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,_t=!!_e.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),ot=!!_e.morphAttributes.position,Rt=!!_e.morphAttributes.normal,Wt=!!_e.morphAttributes.color;let Jt=Hr;fe.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Jt=V.toneMapping);const Vt=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,zt=Vt!==void 0?Vt.length:0,dt=pe.get(fe),sn=H.state.lights;if(Se===!0&&(qe===!0||N!==ae)){const Pn=N===ae&&fe.id===K;Be.setState(fe,N,Pn)}let It=!1;fe.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==sn.state.version||dt.outputColorSpace!==Qe||oe.isBatchedMesh&&dt.batching===!1||!oe.isBatchedMesh&&dt.batching===!0||oe.isBatchedMesh&&dt.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&dt.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&dt.instancing===!1||!oe.isInstancedMesh&&dt.instancing===!0||oe.isSkinnedMesh&&dt.skinning===!1||!oe.isSkinnedMesh&&dt.skinning===!0||oe.isInstancedMesh&&dt.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&dt.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&dt.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&dt.instancingMorph===!1&&oe.morphTexture!==null||dt.envMap!==Je||fe.fog===!0&&dt.fog!==Ve||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Be.numPlanes||dt.numIntersection!==Be.numIntersection)||dt.vertexAlphas!==gt||dt.vertexTangents!==_t||dt.morphTargets!==ot||dt.morphNormals!==Rt||dt.morphColors!==Wt||dt.toneMapping!==Jt||dt.morphTargetsCount!==zt)&&(It=!0):(It=!0,dt.__version=fe.version);let cn=dt.currentProgram;It===!0&&(cn=yn(fe,ie,oe));let Pi=!1,un=!1,ji=!1;const At=cn.getUniforms(),Tn=dt.uniforms;if(at.useProgram(cn.program)&&(Pi=!0,un=!0,ji=!0),fe.id!==K&&(K=fe.id,un=!0),Pi||ae!==N){at.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),At.setValue(Y,"projectionMatrix",N.projectionMatrix),At.setValue(Y,"viewMatrix",N.matrixWorldInverse);const Gn=At.map.cameraPosition;Gn!==void 0&&Gn.setValue(Y,ft.setFromMatrixPosition(N.matrixWorld)),Kt.logarithmicDepthBuffer&&At.setValue(Y,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&At.setValue(Y,"isOrthographic",N.isOrthographicCamera===!0),ae!==N&&(ae=N,un=!0,ji=!0)}if(oe.isSkinnedMesh){At.setOptional(Y,oe,"bindMatrix"),At.setOptional(Y,oe,"bindMatrixInverse");const Pn=oe.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),At.setValue(Y,"boneTexture",Pn.boneTexture,Ee))}oe.isBatchedMesh&&(At.setOptional(Y,oe,"batchingTexture"),At.setValue(Y,"batchingTexture",oe._matricesTexture,Ee),At.setOptional(Y,oe,"batchingIdTexture"),At.setValue(Y,"batchingIdTexture",oe._indirectTexture,Ee),At.setOptional(Y,oe,"batchingColorTexture"),oe._colorsTexture!==null&&At.setValue(Y,"batchingColorTexture",oe._colorsTexture,Ee));const Un=_e.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&tt.update(oe,_e,cn),(un||dt.receiveShadow!==oe.receiveShadow)&&(dt.receiveShadow=oe.receiveShadow,At.setValue(Y,"receiveShadow",oe.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(Tn.envMap.value=Je,Tn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&ie.environment!==null&&(Tn.envMapIntensity.value=ie.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=eT()),un&&(At.setValue(Y,"toneMappingExposure",V.toneMappingExposure),dt.needsLights&&Go(Tn,ji),Ve&&fe.fog===!0&&Ie.refreshFogUniforms(Tn,Ve),Ie.refreshMaterialUniforms(Tn,fe,ce,Re,H.state.transmissionRenderTarget[N.id]),Xu.upload(Y,ni(dt),Tn,Ee)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Xu.upload(Y,ni(dt),Tn,Ee),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&At.setValue(Y,"center",oe.center),At.setValue(Y,"modelViewMatrix",oe.modelViewMatrix),At.setValue(Y,"normalMatrix",oe.normalMatrix),At.setValue(Y,"modelMatrix",oe.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Pn=fe.uniformsGroups;for(let Gn=0,Fi=Pn.length;Gn<Fi;Gn++){const mi=Pn[Gn];Ye.update(mi,cn),Ye.bind(mi,cn)}}return cn}function Go(N,ie){N.ambientLightColor.needsUpdate=ie,N.lightProbe.needsUpdate=ie,N.directionalLights.needsUpdate=ie,N.directionalLightShadows.needsUpdate=ie,N.pointLights.needsUpdate=ie,N.pointLightShadows.needsUpdate=ie,N.spotLights.needsUpdate=ie,N.spotLightShadows.needsUpdate=ie,N.rectAreaLights.needsUpdate=ie,N.hemisphereLights.needsUpdate=ie}function As(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(N,ie,_e){const fe=pe.get(N);fe.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),pe.get(N.texture).__webglTexture=ie,pe.get(N.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:_e,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,ie){const _e=pe.get(N);_e.__webglFramebuffer=ie,_e.__useDefaultFramebuffer=ie===void 0};const ba=Y.createFramebuffer();this.setRenderTarget=function(N,ie=0,_e=0){O=N,ue=ie,F=_e;let fe=!0,oe=null,Ve=!1,He=!1;if(N){const Je=pe.get(N);if(Je.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(Y.FRAMEBUFFER,null),fe=!1;else if(Je.__webglFramebuffer===void 0)Ee.setupRenderTarget(N);else if(Je.__hasExternalTextures)Ee.rebindTextures(N,pe.get(N.texture).__webglTexture,pe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ot=N.depthTexture;if(Je.__boundDepthTexture!==ot){if(ot!==null&&pe.has(ot)&&(N.width!==ot.image.width||N.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(N)}}const gt=N.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(He=!0);const _t=pe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(_t[ie])?oe=_t[ie][_e]:oe=_t[ie],Ve=!0):N.samples>0&&Ee.useMultisampledRTT(N)===!1?oe=pe.get(N).__webglMultisampledFramebuffer:Array.isArray(_t)?oe=_t[_e]:oe=_t,le.copy(N.viewport),Te.copy(N.scissor),Me=N.scissorTest}else le.copy(we).multiplyScalar(ce).floor(),Te.copy(ze).multiplyScalar(ce).floor(),Me=et;if(_e!==0&&(oe=ba),at.bindFramebuffer(Y.FRAMEBUFFER,oe)&&fe&&at.drawBuffers(N,oe),at.viewport(le),at.scissor(Te),at.setScissorTest(Me),Ve){const Je=pe.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Je.__webglTexture,_e)}else if(He){const Je=ie;for(let gt=0;gt<N.textures.length;gt++){const _t=pe.get(N.textures[gt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+gt,_t.__webglTexture,_e,Je)}}else if(N!==null&&_e!==0){const Je=pe.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Je.__webglTexture,_e)}K=-1},this.readRenderTargetPixels=function(N,ie,_e,fe,oe,Ve,He,Qe=0){if(!(N&&N.isWebGLRenderTarget)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=pe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&He!==void 0&&(Je=Je[He]),Je){at.bindFramebuffer(Y.FRAMEBUFFER,Je);try{const gt=N.textures[Qe],_t=gt.format,ot=gt.type;if(!Kt.textureFormatReadable(_t)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(ot)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=N.width-fe&&_e>=0&&_e<=N.height-oe&&(N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Qe),Y.readPixels(ie,_e,fe,oe,vt.convert(_t),vt.convert(ot),Ve))}finally{const gt=O!==null?pe.get(O).__webglFramebuffer:null;at.bindFramebuffer(Y.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(N,ie,_e,fe,oe,Ve,He,Qe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=pe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&He!==void 0&&(Je=Je[He]),Je)if(ie>=0&&ie<=N.width-fe&&_e>=0&&_e<=N.height-oe){at.bindFramebuffer(Y.FRAMEBUFFER,Je);const gt=N.textures[Qe],_t=gt.format,ot=gt.type;if(!Kt.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Rt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ve.byteLength,Y.STREAM_READ),N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Qe),Y.readPixels(ie,_e,fe,oe,vt.convert(_t),vt.convert(ot),0);const Wt=O!==null?pe.get(O).__webglFramebuffer:null;at.bindFramebuffer(Y.FRAMEBUFFER,Wt);const Jt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await AS(Y,Jt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Rt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ve),Y.deleteBuffer(Rt),Y.deleteSync(Jt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,ie=null,_e=0){const fe=Math.pow(2,-_e),oe=Math.floor(N.image.width*fe),Ve=Math.floor(N.image.height*fe),He=ie!==null?ie.x:0,Qe=ie!==null?ie.y:0;Ee.setTexture2D(N,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,_e,0,0,He,Qe,oe,Ve),at.unbindTexture()};const Xr=Y.createFramebuffer(),la=Y.createFramebuffer();this.copyTextureToTexture=function(N,ie,_e=null,fe=null,oe=0,Ve=null){Ve===null&&(oe!==0?(Kl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ve=oe,oe=0):Ve=0);let He,Qe,Je,gt,_t,ot,Rt,Wt,Jt;const Vt=N.isCompressedTexture?N.mipmaps[Ve]:N.image;if(_e!==null)He=_e.max.x-_e.min.x,Qe=_e.max.y-_e.min.y,Je=_e.isBox3?_e.max.z-_e.min.z:1,gt=_e.min.x,_t=_e.min.y,ot=_e.isBox3?_e.min.z:0;else{const Un=Math.pow(2,-oe);He=Math.floor(Vt.width*Un),Qe=Math.floor(Vt.height*Un),N.isDataArrayTexture?Je=Vt.depth:N.isData3DTexture?Je=Math.floor(Vt.depth*Un):Je=1,gt=0,_t=0,ot=0}fe!==null?(Rt=fe.x,Wt=fe.y,Jt=fe.z):(Rt=0,Wt=0,Jt=0);const zt=vt.convert(ie.format),dt=vt.convert(ie.type);let sn;ie.isData3DTexture?(Ee.setTexture3D(ie,0),sn=Y.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(Ee.setTexture2DArray(ie,0),sn=Y.TEXTURE_2D_ARRAY):(Ee.setTexture2D(ie,0),sn=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ie.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ie.unpackAlignment);const It=Y.getParameter(Y.UNPACK_ROW_LENGTH),cn=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Pi=Y.getParameter(Y.UNPACK_SKIP_PIXELS),un=Y.getParameter(Y.UNPACK_SKIP_ROWS),ji=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Vt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Vt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,gt),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,_t),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ot);const At=N.isDataArrayTexture||N.isData3DTexture,Tn=ie.isDataArrayTexture||ie.isData3DTexture;if(N.isDepthTexture){const Un=pe.get(N),Pn=pe.get(ie),Gn=pe.get(Un.__renderTarget),Fi=pe.get(Pn.__renderTarget);at.bindFramebuffer(Y.READ_FRAMEBUFFER,Gn.__webglFramebuffer),at.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let mi=0;mi<Je;mi++)At&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,pe.get(N).__webglTexture,oe,ot+mi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,pe.get(ie).__webglTexture,Ve,Jt+mi)),Y.blitFramebuffer(gt,_t,He,Qe,Rt,Wt,He,Qe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);at.bindFramebuffer(Y.READ_FRAMEBUFFER,null),at.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||pe.has(N)){const Un=pe.get(N),Pn=pe.get(ie);at.bindFramebuffer(Y.READ_FRAMEBUFFER,Xr),at.bindFramebuffer(Y.DRAW_FRAMEBUFFER,la);for(let Gn=0;Gn<Je;Gn++)At?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Un.__webglTexture,oe,ot+Gn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Un.__webglTexture,oe),Tn?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Pn.__webglTexture,Ve,Jt+Gn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pn.__webglTexture,Ve),oe!==0?Y.blitFramebuffer(gt,_t,He,Qe,Rt,Wt,He,Qe,Y.COLOR_BUFFER_BIT,Y.NEAREST):Tn?Y.copyTexSubImage3D(sn,Ve,Rt,Wt,Jt+Gn,gt,_t,He,Qe):Y.copyTexSubImage2D(sn,Ve,Rt,Wt,gt,_t,He,Qe);at.bindFramebuffer(Y.READ_FRAMEBUFFER,null),at.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Tn?N.isDataTexture||N.isData3DTexture?Y.texSubImage3D(sn,Ve,Rt,Wt,Jt,He,Qe,Je,zt,dt,Vt.data):ie.isCompressedArrayTexture?Y.compressedTexSubImage3D(sn,Ve,Rt,Wt,Jt,He,Qe,Je,zt,Vt.data):Y.texSubImage3D(sn,Ve,Rt,Wt,Jt,He,Qe,Je,zt,dt,Vt):N.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ve,Rt,Wt,He,Qe,zt,dt,Vt.data):N.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ve,Rt,Wt,Vt.width,Vt.height,zt,Vt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ve,Rt,Wt,He,Qe,zt,dt,Vt);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,It),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,cn),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Pi),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,un),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ji),Ve===0&&ie.generateMipmaps&&Y.generateMipmap(sn),at.unbindTexture()},this.initRenderTarget=function(N){pe.get(N).__webglFramebuffer===void 0&&Ee.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Ee.setTextureCube(N,0):N.isData3DTexture?Ee.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Ee.setTexture2DArray(N,0):Ee.setTexture2D(N,0),at.unbindTexture()},this.resetState=function(){ue=0,F=0,O=null,at.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=tn._getDrawingBufferColorSpace(e),i.unpackColorSpace=tn._getUnpackColorSpace()}}const T_={type:"change"},lm={type:"start"},sv={type:"end"},Bu=new $u,A_=new zr,nT=Math.cos(70*RS.DEG2RAD),Xn=new xe,bi=2*Math.PI,mn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},np=1e-6;class iT extends pb{constructor(e,i=null){super(e,i),this.state=mn.NONE,this.target=new xe,this.cursor=new xe,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Co.ROTATE,MIDDLE:Co.DOLLY,RIGHT:Co.PAN},this.touches={ONE:Ro.ROTATE,TWO:Ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new xe,this._lastQuaternion=new bs,this._lastTargetPosition=new xe,this._quat=new bs().setFromUnitVectors(e.up,new xe(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new e_,this._sphericalDelta=new e_,this._scale=1,this._panOffset=new xe,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new xe,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rT.bind(this),this._onPointerDown=aT.bind(this),this._onPointerUp=sT.bind(this),this._onContextMenu=dT.bind(this),this._onMouseWheel=cT.bind(this),this._onKeyDown=uT.bind(this),this._onTouchStart=fT.bind(this),this._onTouchMove=hT.bind(this),this._onMouseDown=oT.bind(this),this._onMouseMove=lT.bind(this),this._interceptControlDown=pT.bind(this),this._interceptControlUp=mT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(T_),this.update(),this.state=mn.NONE}update(e=null){const i=this.object.position;Xn.copy(i).sub(this.target),Xn.applyQuaternion(this._quat),this._spherical.setFromVector3(Xn),this.autoRotate&&this.state===mn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=bi:r>Math.PI&&(r-=bi),l<-Math.PI?l+=bi:l>Math.PI&&(l-=bi),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const p=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=p!=this._spherical.radius}if(Xn.setFromSpherical(this._spherical),Xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let p=null;if(this.object.isPerspectiveCamera){const m=Xn.length();p=this._clampDistance(m*this._scale);const _=m-p;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),f=!!_}else if(this.object.isOrthographicCamera){const m=new xe(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=_!==this.object.zoom;const g=new xe(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(m),this.object.updateMatrixWorld(),p=Xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;p!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(p).add(this.object.position):(Bu.origin.copy(this.object.position),Bu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bu.direction))<nT?this.object.lookAt(this.target):(A_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bu.intersectPlane(A_,this.target))))}else if(this.object.isOrthographicCamera){const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),p!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>np||8*(1-this._lastQuaternion.dot(this.object.quaternion))>np||this._lastTargetPosition.distanceToSquared(this.target)>np?(this.dispatchEvent(T_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bi/60*this.autoRotateSpeed*e:bi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Xn.setFromMatrixColumn(i,0),Xn.multiplyScalar(-e),this._panOffset.add(Xn)}_panUp(e,i){this.screenSpacePanning===!0?Xn.setFromMatrixColumn(i,1):(Xn.setFromMatrixColumn(i,0),Xn.crossVectors(this.object.up,Xn)),Xn.multiplyScalar(e),this._panOffset.add(Xn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Xn.copy(l).sub(this.target);let f=Xn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,p=r.width,m=r.height;this._mouse.x=l/p*2-1,this._mouse.y=-(f/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/i.clientHeight),this._rotateUp(bi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/i.clientHeight),this._rotateUp(bi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const p=(e.pageX+i.x)*.5,m=(e.pageY+i.y)*.5;this._updateZoomParameters(p,m)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Dt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function aT(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function rT(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function sT(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sv),this.state=mn.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function oT(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=mn.DOLLY;break;case Co.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=mn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=mn.ROTATE}break;case Co.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=mn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=mn.PAN}break;default:this.state=mn.NONE}this.state!==mn.NONE&&this.dispatchEvent(lm)}function lT(o){switch(this.state){case mn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case mn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case mn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function cT(o){this.enabled===!1||this.enableZoom===!1||this.state!==mn.NONE||(o.preventDefault(),this.dispatchEvent(lm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(sv))}function uT(o){this.enabled!==!1&&this._handleKeyDown(o)}function fT(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=mn.TOUCH_ROTATE;break;case Ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=mn.TOUCH_PAN;break;default:this.state=mn.NONE}break;case 2:switch(this.touches.TWO){case Ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=mn.TOUCH_DOLLY_PAN;break;case Ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=mn.TOUCH_DOLLY_ROTATE;break;default:this.state=mn.NONE}break;default:this.state=mn.NONE}this.state!==mn.NONE&&this.dispatchEvent(lm)}function hT(o){switch(this._trackPointer(o),this.state){case mn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case mn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case mn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case mn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=mn.NONE}}function dT(o){this.enabled!==!1&&o.preventDefault()}function pT(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mT(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ip={exports:{}};const gT={},xT=Object.freeze(Object.defineProperty({__proto__:null,default:gT},Symbol.toStringTag,{value:"Module"})),ap=wy(xT);var w_;function _T(){return w_||(w_=1,(function(o,e){var i=(()=>{var r=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(r=r||__filename),(function(l={}){var f,p=l,m,_,g=new Promise((c,d)=>{m=c,_=d}),b=typeof window=="object",S=typeof importScripts=="function",E=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",A=Object.assign({},p),U="./this.program",L=(c,d)=>{throw d},T="";function M(c){return p.locateFile?p.locateFile(c,T):T+c}var X,H;if(E){var q=ap,Q=ap;T=__dirname+"/",H=c=>{c=at(c)?new URL(c):Q.normalize(c);var d=q.readFileSync(c);return d},X=(c,d=!0)=>(c=at(c)?new URL(c):Q.normalize(c),new Promise((x,y)=>{q.readFile(c,d?void 0:"utf8",(C,z)=>{C?y(C):x(d?z.buffer:z)})})),!p.thisProgram&&process.argv.length>1&&(U=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),L=(c,d)=>{throw process.exitCode=c,d}}else(b||S)&&(S?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),r&&(T=r),T.startsWith("blob:")?T="":T=T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),S&&(H=c=>{var d=new XMLHttpRequest;return d.open("GET",c,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),X=c=>at(c)?new Promise((d,x)=>{var y=new XMLHttpRequest;y.open("GET",c,!0),y.responseType="arraybuffer",y.onload=()=>{if(y.status==200||y.status==0&&y.response){d(y.response);return}x(y.status)},y.onerror=x,y.send(null)}):fetch(c,{credentials:"same-origin"}).then(d=>d.ok?d.arrayBuffer():Promise.reject(new Error(d.status+" : "+d.url))));var V=p.print||console.log.bind(console),k=p.printErr||console.error.bind(console);Object.assign(p,A),A=null,p.arguments&&p.arguments,p.thisProgram&&(U=p.thisProgram);var ue=p.wasmBinary,F,O=!1;function K(c,d){c||Et(d)}var ae,le,Te,Me,B,$,te,Re;function ce(){var c=F.buffer;p.HEAP8=ae=new Int8Array(c),p.HEAP16=Te=new Int16Array(c),p.HEAPU8=le=new Uint8Array(c),p.HEAPU16=Me=new Uint16Array(c),p.HEAP32=B=new Int32Array(c),p.HEAPU32=$=new Uint32Array(c),p.HEAPF32=te=new Float32Array(c),p.HEAPF64=Re=new Float64Array(c)}var I=[],re=[],we=[],ze=!1;function et(){var c=p.preRun;c&&(typeof c=="function"&&(c=[c]),c.forEach(qe)),ht(I)}function me(){ze=!0,!p.noFSInit&&!R.initialized&&R.init(),R.ignorePermissions=!1,ht(re)}function Se(){var c=p.postRun;c&&(typeof c=="function"&&(c=[c]),c.forEach(ft)),ht(we)}function qe(c){I.unshift(c)}function lt(c){re.unshift(c)}function ft(c){we.unshift(c)}var yt=0,rn=null;function Tt(c){return c}function Ot(c){yt++,p.monitorRunDependencies?.(yt)}function Y(c){if(yt--,p.monitorRunDependencies?.(yt),yt==0&&rn){var d=rn;rn=null,d()}}function Et(c){p.onAbort?.(c),c="Aborted("+c+")",k(c),O=!0,c+=". Build with -sASSERTIONS for more info.",ze&&sr();var d=new WebAssembly.RuntimeError(c);throw _(d),d}var Ut="data:application/octet-stream;base64,",Kt=c=>c.startsWith(Ut),at=c=>c.startsWith("file://");function nn(){var c="occt-import-js.wasm";return Kt(c)?c:M(c)}var pe;function Ee(c){if(c==pe&&ue)return new Uint8Array(ue);if(H)return H(c);throw"both async and sync fetching of the wasm failed"}function P(c){return ue?Promise.resolve().then(()=>Ee(c)):X(c).then(d=>new Uint8Array(d),()=>Ee(c))}function w(c,d,x){return P(c).then(y=>WebAssembly.instantiate(y,d)).then(x,y=>{k(`failed to asynchronously prepare wasm: ${y}`),Et(y)})}function ne(c,d,x,y){return!c&&typeof WebAssembly.instantiateStreaming=="function"&&!Kt(d)&&!at(d)&&!E&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(C=>{var z=WebAssembly.instantiateStreaming(C,x);return z.then(y,function(G){return k(`wasm streaming compile failed: ${G}`),k("falling back to ArrayBuffer instantiation"),w(d,x,y)})}):w(d,x,y)}function be(){return{a:xc}}function De(){var c=be();function d(y,C){return Fn=y.exports,F=Fn._,ce(),Yo=Fn.ba,lt(Fn.$),Y(),Fn}Ot();function x(y){d(y.instance)}if(p.instantiateWasm)try{return p.instantiateWasm(c,d)}catch(y){k(`Module.instantiateWasm callback failed with error: ${y}`),_(y)}return pe??=nn(),ne(ue,pe,c,x).catch(_),{}}var ee,Ie;function Ge(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var ht=c=>{c.forEach(d=>d(p))};p.noExitRuntime;var Be={isAbs:c=>c.charAt(0)==="/",splitPath:c=>{var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return d.exec(c).slice(1)},normalizeArray:(c,d)=>{for(var x=0,y=c.length-1;y>=0;y--){var C=c[y];C==="."?c.splice(y,1):C===".."?(c.splice(y,1),x++):x&&(c.splice(y,1),x--)}if(d)for(;x;x--)c.unshift("..");return c},normalize:c=>{var d=Be.isAbs(c),x=c.substr(-1)==="/";return c=Be.normalizeArray(c.split("/").filter(y=>!!y),!d).join("/"),!c&&!d&&(c="."),c&&x&&(c+="/"),(d?"/":"")+c},dirname:c=>{var d=Be.splitPath(c),x=d[0],y=d[1];return!x&&!y?".":(y&&(y=y.substr(0,y.length-1)),x+y)},basename:c=>{if(c==="/")return"/";c=Be.normalize(c),c=c.replace(/\/$/,"");var d=c.lastIndexOf("/");return d===-1?c:c.substr(d+1)},join:(...c)=>Be.normalize(c.join("/")),join2:(c,d)=>Be.normalize(c+"/"+d)},Ue=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return y=>crypto.getRandomValues(y);if(E)try{var c=ap,d=c.randomFillSync;if(d)return y=>c.randomFillSync(y);var x=c.randomBytes;return y=>(y.set(x(y.byteLength)),y)}catch{}Et("initRandomDevice")},Oe=c=>(Oe=Ue())(c),tt={resolve:(...c)=>{for(var d="",x=!1,y=c.length-1;y>=-1&&!x;y--){var C=y>=0?c[y]:R.cwd();if(typeof C!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!C)return"";d=C+"/"+d,x=Be.isAbs(C)}return d=Be.normalizeArray(d.split("/").filter(z=>!!z),!x).join("/"),(x?"/":"")+d||"."},relative:(c,d)=>{c=tt.resolve(c).substr(1),d=tt.resolve(d).substr(1);function x(Fe){for(var Ke=0;Ke<Fe.length&&Fe[Ke]==="";Ke++);for(var ct=Fe.length-1;ct>=0&&Fe[ct]==="";ct--);return Ke>ct?[]:Fe.slice(Ke,ct-Ke+1)}for(var y=x(c.split("/")),C=x(d.split("/")),z=Math.min(y.length,C.length),G=z,Z=0;Z<z;Z++)if(y[Z]!==C[Z]){G=Z;break}for(var ve=[],Z=G;Z<y.length;Z++)ve.push("..");return ve=ve.concat(C.slice(G)),ve.join("/")}},it=typeof TextDecoder<"u"?new TextDecoder:void 0,je=(c,d=0,x=NaN)=>{for(var y=d+x,C=d;c[C]&&!(C>=y);)++C;if(C-d>16&&c.buffer&&it)return it.decode(c.subarray(d,C));for(var z="";d<C;){var G=c[d++];if(!(G&128)){z+=String.fromCharCode(G);continue}var Z=c[d++]&63;if((G&224)==192){z+=String.fromCharCode((G&31)<<6|Z);continue}var ve=c[d++]&63;if((G&240)==224?G=(G&15)<<12|Z<<6|ve:G=(G&7)<<18|Z<<12|ve<<6|c[d++]&63,G<65536)z+=String.fromCharCode(G);else{var Fe=G-65536;z+=String.fromCharCode(55296|Fe>>10,56320|Fe&1023)}}return z},vt=[],j=c=>{for(var d=0,x=0;x<c.length;++x){var y=c.charCodeAt(x);y<=127?d++:y<=2047?d+=2:y>=55296&&y<=57343?(d+=4,++x):d+=3}return d},Ye=(c,d,x,y)=>{if(!(y>0))return 0;for(var C=x,z=x+y-1,G=0;G<c.length;++G){var Z=c.charCodeAt(G);if(Z>=55296&&Z<=57343){var ve=c.charCodeAt(++G);Z=65536+((Z&1023)<<10)|ve&1023}if(Z<=127){if(x>=z)break;d[x++]=Z}else if(Z<=2047){if(x+1>=z)break;d[x++]=192|Z>>6,d[x++]=128|Z&63}else if(Z<=65535){if(x+2>=z)break;d[x++]=224|Z>>12,d[x++]=128|Z>>6&63,d[x++]=128|Z&63}else{if(x+3>=z)break;d[x++]=240|Z>>18,d[x++]=128|Z>>12&63,d[x++]=128|Z>>6&63,d[x++]=128|Z&63}}return d[x]=0,x-C};function ke(c,d,x){var y=j(c)+1,C=new Array(y),z=Ye(c,C,0,C.length);return C.length=z,C}var Xe=()=>{if(!vt.length){var c=null;if(E){var d=256,x=Buffer.alloc(d),y=0,C=process.stdin.fd;try{y=q.readSync(C,x,0,d)}catch(z){if(z.toString().includes("EOF"))y=0;else throw z}y>0&&(c=x.slice(0,y).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(c=window.prompt("Input: "),c!==null&&(c+=`
`));if(!c)return null;vt=ke(c)}return vt.shift()},Pe={ttys:[],init(){},shutdown(){},register(c,d){Pe.ttys[c]={input:[],output:[],ops:d},R.registerDevice(c,Pe.stream_ops)},stream_ops:{open(c){var d=Pe.ttys[c.node.rdev];if(!d)throw new R.ErrnoError(43);c.tty=d,c.seekable=!1},close(c){c.tty.ops.fsync(c.tty)},fsync(c){c.tty.ops.fsync(c.tty)},read(c,d,x,y,C){if(!c.tty||!c.tty.ops.get_char)throw new R.ErrnoError(60);for(var z=0,G=0;G<y;G++){var Z;try{Z=c.tty.ops.get_char(c.tty)}catch{throw new R.ErrnoError(29)}if(Z===void 0&&z===0)throw new R.ErrnoError(6);if(Z==null)break;z++,d[x+G]=Z}return z&&(c.node.timestamp=Date.now()),z},write(c,d,x,y,C){if(!c.tty||!c.tty.ops.put_char)throw new R.ErrnoError(60);try{for(var z=0;z<y;z++)c.tty.ops.put_char(c.tty,d[x+z])}catch{throw new R.ErrnoError(29)}return y&&(c.node.timestamp=Date.now()),z}},default_tty_ops:{get_char(c){return Xe()},put_char(c,d){d===null||d===10?(V(je(c.output)),c.output=[]):d!=0&&c.output.push(d)},fsync(c){c.output&&c.output.length>0&&(V(je(c.output)),c.output=[])},ioctl_tcgets(c){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(c,d,x){return 0},ioctl_tiocgwinsz(c){return[24,80]}},default_tty1_ops:{put_char(c,d){d===null||d===10?(k(je(c.output)),c.output=[]):d!=0&&c.output.push(d)},fsync(c){c.output&&c.output.length>0&&(k(je(c.output)),c.output=[])}}},Le=(c,d)=>{le.fill(0,c,c+d)},rt=(c,d)=>Math.ceil(c/d)*d,Mt=c=>{c=rt(c,65536);var d=Vs(65536,c);return d&&Le(d,c),d},st={ops_table:null,mount(c){return st.createNode(null,"/",16895,0)},createNode(c,d,x,y){if(R.isBlkdev(x)||R.isFIFO(x))throw new R.ErrnoError(63);st.ops_table||={dir:{node:{getattr:st.node_ops.getattr,setattr:st.node_ops.setattr,lookup:st.node_ops.lookup,mknod:st.node_ops.mknod,rename:st.node_ops.rename,unlink:st.node_ops.unlink,rmdir:st.node_ops.rmdir,readdir:st.node_ops.readdir,symlink:st.node_ops.symlink},stream:{llseek:st.stream_ops.llseek}},file:{node:{getattr:st.node_ops.getattr,setattr:st.node_ops.setattr},stream:{llseek:st.stream_ops.llseek,read:st.stream_ops.read,write:st.stream_ops.write,allocate:st.stream_ops.allocate,mmap:st.stream_ops.mmap,msync:st.stream_ops.msync}},link:{node:{getattr:st.node_ops.getattr,setattr:st.node_ops.setattr,readlink:st.node_ops.readlink},stream:{}},chrdev:{node:{getattr:st.node_ops.getattr,setattr:st.node_ops.setattr},stream:R.chrdev_stream_ops}};var C=R.createNode(c,d,x,y);return R.isDir(C.mode)?(C.node_ops=st.ops_table.dir.node,C.stream_ops=st.ops_table.dir.stream,C.contents={}):R.isFile(C.mode)?(C.node_ops=st.ops_table.file.node,C.stream_ops=st.ops_table.file.stream,C.usedBytes=0,C.contents=null):R.isLink(C.mode)?(C.node_ops=st.ops_table.link.node,C.stream_ops=st.ops_table.link.stream):R.isChrdev(C.mode)&&(C.node_ops=st.ops_table.chrdev.node,C.stream_ops=st.ops_table.chrdev.stream),C.timestamp=Date.now(),c&&(c.contents[d]=C,c.timestamp=C.timestamp),C},getFileDataAsTypedArray(c){return c.contents?c.contents.subarray?c.contents.subarray(0,c.usedBytes):new Uint8Array(c.contents):new Uint8Array(0)},expandFileStorage(c,d){var x=c.contents?c.contents.length:0;if(!(x>=d)){var y=1024*1024;d=Math.max(d,x*(x<y?2:1.125)>>>0),x!=0&&(d=Math.max(d,256));var C=c.contents;c.contents=new Uint8Array(d),c.usedBytes>0&&c.contents.set(C.subarray(0,c.usedBytes),0)}},resizeFileStorage(c,d){if(c.usedBytes!=d)if(d==0)c.contents=null,c.usedBytes=0;else{var x=c.contents;c.contents=new Uint8Array(d),x&&c.contents.set(x.subarray(0,Math.min(d,c.usedBytes))),c.usedBytes=d}},node_ops:{getattr(c){var d={};return d.dev=R.isChrdev(c.mode)?c.id:1,d.ino=c.id,d.mode=c.mode,d.nlink=1,d.uid=0,d.gid=0,d.rdev=c.rdev,R.isDir(c.mode)?d.size=4096:R.isFile(c.mode)?d.size=c.usedBytes:R.isLink(c.mode)?d.size=c.link.length:d.size=0,d.atime=new Date(c.timestamp),d.mtime=new Date(c.timestamp),d.ctime=new Date(c.timestamp),d.blksize=4096,d.blocks=Math.ceil(d.size/d.blksize),d},setattr(c,d){d.mode!==void 0&&(c.mode=d.mode),d.timestamp!==void 0&&(c.timestamp=d.timestamp),d.size!==void 0&&st.resizeFileStorage(c,d.size)},lookup(c,d){throw R.genericErrors[44]},mknod(c,d,x,y){return st.createNode(c,d,x,y)},rename(c,d,x){if(R.isDir(c.mode)){var y;try{y=R.lookupNode(d,x)}catch{}if(y)for(var C in y.contents)throw new R.ErrnoError(55)}delete c.parent.contents[c.name],c.parent.timestamp=Date.now(),c.name=x,d.contents[x]=c,d.timestamp=c.parent.timestamp},unlink(c,d){delete c.contents[d],c.timestamp=Date.now()},rmdir(c,d){var x=R.lookupNode(c,d);for(var y in x.contents)throw new R.ErrnoError(55);delete c.contents[d],c.timestamp=Date.now()},readdir(c){var d=[".",".."];for(var x of Object.keys(c.contents))d.push(x);return d},symlink(c,d,x){var y=st.createNode(c,d,41471,0);return y.link=x,y},readlink(c){if(!R.isLink(c.mode))throw new R.ErrnoError(28);return c.link}},stream_ops:{read(c,d,x,y,C){var z=c.node.contents;if(C>=c.node.usedBytes)return 0;var G=Math.min(c.node.usedBytes-C,y);if(G>8&&z.subarray)d.set(z.subarray(C,C+G),x);else for(var Z=0;Z<G;Z++)d[x+Z]=z[C+Z];return G},write(c,d,x,y,C,z){if(d.buffer===ae.buffer&&(z=!1),!y)return 0;var G=c.node;if(G.timestamp=Date.now(),d.subarray&&(!G.contents||G.contents.subarray)){if(z)return G.contents=d.subarray(x,x+y),G.usedBytes=y,y;if(G.usedBytes===0&&C===0)return G.contents=d.slice(x,x+y),G.usedBytes=y,y;if(C+y<=G.usedBytes)return G.contents.set(d.subarray(x,x+y),C),y}if(st.expandFileStorage(G,C+y),G.contents.subarray&&d.subarray)G.contents.set(d.subarray(x,x+y),C);else for(var Z=0;Z<y;Z++)G.contents[C+Z]=d[x+Z];return G.usedBytes=Math.max(G.usedBytes,C+y),y},llseek(c,d,x){var y=d;if(x===1?y+=c.position:x===2&&R.isFile(c.node.mode)&&(y+=c.node.usedBytes),y<0)throw new R.ErrnoError(28);return y},allocate(c,d,x){st.expandFileStorage(c.node,d+x),c.node.usedBytes=Math.max(c.node.usedBytes,d+x)},mmap(c,d,x,y,C){if(!R.isFile(c.node.mode))throw new R.ErrnoError(43);var z,G,Z=c.node.contents;if(!(C&2)&&Z&&Z.buffer===ae.buffer)G=!1,z=Z.byteOffset;else{if(G=!0,z=Mt(d),!z)throw new R.ErrnoError(48);Z&&((x>0||x+d<Z.length)&&(Z.subarray?Z=Z.subarray(x,x+d):Z=Array.prototype.slice.call(Z,x,x+d)),ae.set(Z,z))}return{ptr:z,allocated:G}},msync(c,d,x,y,C){return st.stream_ops.write(c,d,0,y,x,!1),0}}},Qt=(c,d,x,y)=>{var C=`al ${c}`;X(c).then(z=>{d(new Uint8Array(z)),C&&Y()},z=>{if(x)x();else throw`Loading data file "${c}" failed.`}),C&&Ot()},Yn=(c,d,x,y,C,z)=>{R.createDataFile(c,d,x,y,C,z)},li=p.preloadPlugins||[],Ts=(c,d,x,y)=>{typeof Browser<"u"&&Browser.init();var C=!1;return li.forEach(z=>{C||z.canHandle(d)&&(z.handle(c,d,x,y),C=!0)}),C},Gr=(c,d,x,y,C,z,G,Z,ve,Fe)=>{var Ke=d?tt.resolve(Be.join2(c,d)):c;function ct(pt){function nt(St){Fe?.(),Z||Yn(c,d,St,y,C,ve),z?.(),Y()}Ts(pt,Ke,nt,()=>{G?.(),Y()})||nt(pt)}Ot(),typeof x=="string"?Qt(x,ct,G):ct(x)},kr=c=>{var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},x=d[c];if(typeof x>"u")throw new Error(`Unknown file open mode: ${c}`);return x},ci=(c,d)=>{var x=0;return c&&(x|=365),d&&(x|=146),x},R={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(c){this.name="ErrnoError",this.errno=c}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(c){this.node=c}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(c){this.shared.flags=c}get position(){return this.shared.position}set position(c){this.shared.position=c}},FSNode:class{constructor(c,d,x,y){c||(c=this),this.parent=c,this.mount=c.mount,this.mounted=null,this.id=R.nextInode++,this.name=d,this.mode=x,this.node_ops={},this.stream_ops={},this.rdev=y,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(c){c?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(c){c?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return R.isDir(this.mode)}get isDevice(){return R.isChrdev(this.mode)}},lookupPath(c,d={}){if(c=tt.resolve(c),!c)return{path:"",node:null};var x={follow_mount:!0,recurse_count:0};if(d=Object.assign(x,d),d.recurse_count>8)throw new R.ErrnoError(32);for(var y=c.split("/").filter(ct=>!!ct),C=R.root,z="/",G=0;G<y.length;G++){var Z=G===y.length-1;if(Z&&d.parent)break;if(C=R.lookupNode(C,y[G]),z=Be.join2(z,y[G]),R.isMountpoint(C)&&(!Z||Z&&d.follow_mount)&&(C=C.mounted.root),!Z||d.follow)for(var ve=0;R.isLink(C.mode);){var Fe=R.readlink(z);z=tt.resolve(Be.dirname(z),Fe);var Ke=R.lookupPath(z,{recurse_count:d.recurse_count+1});if(C=Ke.node,ve++>40)throw new R.ErrnoError(32)}}return{path:z,node:C}},getPath(c){for(var d;;){if(R.isRoot(c)){var x=c.mount.mountpoint;return d?x[x.length-1]!=="/"?`${x}/${d}`:x+d:x}d=d?`${c.name}/${d}`:c.name,c=c.parent}},hashName(c,d){for(var x=0,y=0;y<d.length;y++)x=(x<<5)-x+d.charCodeAt(y)|0;return(c+x>>>0)%R.nameTable.length},hashAddNode(c){var d=R.hashName(c.parent.id,c.name);c.name_next=R.nameTable[d],R.nameTable[d]=c},hashRemoveNode(c){var d=R.hashName(c.parent.id,c.name);if(R.nameTable[d]===c)R.nameTable[d]=c.name_next;else for(var x=R.nameTable[d];x;){if(x.name_next===c){x.name_next=c.name_next;break}x=x.name_next}},lookupNode(c,d){var x=R.mayLookup(c);if(x)throw new R.ErrnoError(x);for(var y=R.hashName(c.id,d),C=R.nameTable[y];C;C=C.name_next){var z=C.name;if(C.parent.id===c.id&&z===d)return C}return R.lookup(c,d)},createNode(c,d,x,y){var C=new R.FSNode(c,d,x,y);return R.hashAddNode(C),C},destroyNode(c){R.hashRemoveNode(c)},isRoot(c){return c===c.parent},isMountpoint(c){return!!c.mounted},isFile(c){return(c&61440)===32768},isDir(c){return(c&61440)===16384},isLink(c){return(c&61440)===40960},isChrdev(c){return(c&61440)===8192},isBlkdev(c){return(c&61440)===24576},isFIFO(c){return(c&61440)===4096},isSocket(c){return(c&49152)===49152},flagsToPermissionString(c){var d=["r","w","rw"][c&3];return c&512&&(d+="w"),d},nodePermissions(c,d){return R.ignorePermissions?0:d.includes("r")&&!(c.mode&292)||d.includes("w")&&!(c.mode&146)||d.includes("x")&&!(c.mode&73)?2:0},mayLookup(c){if(!R.isDir(c.mode))return 54;var d=R.nodePermissions(c,"x");return d||(c.node_ops.lookup?0:2)},mayCreate(c,d){try{var x=R.lookupNode(c,d);return 20}catch{}return R.nodePermissions(c,"wx")},mayDelete(c,d,x){var y;try{y=R.lookupNode(c,d)}catch(z){return z.errno}var C=R.nodePermissions(c,"wx");if(C)return C;if(x){if(!R.isDir(y.mode))return 54;if(R.isRoot(y)||R.getPath(y)===R.cwd())return 10}else if(R.isDir(y.mode))return 31;return 0},mayOpen(c,d){return c?R.isLink(c.mode)?32:R.isDir(c.mode)&&(R.flagsToPermissionString(d)!=="r"||d&512)?31:R.nodePermissions(c,R.flagsToPermissionString(d)):44},MAX_OPEN_FDS:4096,nextfd(){for(var c=0;c<=R.MAX_OPEN_FDS;c++)if(!R.streams[c])return c;throw new R.ErrnoError(33)},getStreamChecked(c){var d=R.getStream(c);if(!d)throw new R.ErrnoError(8);return d},getStream:c=>R.streams[c],createStream(c,d=-1){return c=Object.assign(new R.FSStream,c),d==-1&&(d=R.nextfd()),c.fd=d,R.streams[d]=c,c},closeStream(c){R.streams[c]=null},dupStream(c,d=-1){var x=R.createStream(c,d);return x.stream_ops?.dup?.(x),x},chrdev_stream_ops:{open(c){var d=R.getDevice(c.node.rdev);c.stream_ops=d.stream_ops,c.stream_ops.open?.(c)},llseek(){throw new R.ErrnoError(70)}},major:c=>c>>8,minor:c=>c&255,makedev:(c,d)=>c<<8|d,registerDevice(c,d){R.devices[c]={stream_ops:d}},getDevice:c=>R.devices[c],getMounts(c){for(var d=[],x=[c];x.length;){var y=x.pop();d.push(y),x.push(...y.mounts)}return d},syncfs(c,d){typeof c=="function"&&(d=c,c=!1),R.syncFSRequests++,R.syncFSRequests>1&&k(`warning: ${R.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var x=R.getMounts(R.root.mount),y=0;function C(G){return R.syncFSRequests--,d(G)}function z(G){if(G)return z.errored?void 0:(z.errored=!0,C(G));++y>=x.length&&C(null)}x.forEach(G=>{if(!G.type.syncfs)return z(null);G.type.syncfs(G,c,z)})},mount(c,d,x){var y=x==="/",C=!x,z;if(y&&R.root)throw new R.ErrnoError(10);if(!y&&!C){var G=R.lookupPath(x,{follow_mount:!1});if(x=G.path,z=G.node,R.isMountpoint(z))throw new R.ErrnoError(10);if(!R.isDir(z.mode))throw new R.ErrnoError(54)}var Z={type:c,opts:d,mountpoint:x,mounts:[]},ve=c.mount(Z);return ve.mount=Z,Z.root=ve,y?R.root=ve:z&&(z.mounted=Z,z.mount&&z.mount.mounts.push(Z)),ve},unmount(c){var d=R.lookupPath(c,{follow_mount:!1});if(!R.isMountpoint(d.node))throw new R.ErrnoError(28);var x=d.node,y=x.mounted,C=R.getMounts(y);Object.keys(R.nameTable).forEach(G=>{for(var Z=R.nameTable[G];Z;){var ve=Z.name_next;C.includes(Z.mount)&&R.destroyNode(Z),Z=ve}}),x.mounted=null;var z=x.mount.mounts.indexOf(y);x.mount.mounts.splice(z,1)},lookup(c,d){return c.node_ops.lookup(c,d)},mknod(c,d,x){var y=R.lookupPath(c,{parent:!0}),C=y.node,z=Be.basename(c);if(!z||z==="."||z==="..")throw new R.ErrnoError(28);var G=R.mayCreate(C,z);if(G)throw new R.ErrnoError(G);if(!C.node_ops.mknod)throw new R.ErrnoError(63);return C.node_ops.mknod(C,z,d,x)},create(c,d){return d=d!==void 0?d:438,d&=4095,d|=32768,R.mknod(c,d,0)},mkdir(c,d){return d=d!==void 0?d:511,d&=1023,d|=16384,R.mknod(c,d,0)},mkdirTree(c,d){for(var x=c.split("/"),y="",C=0;C<x.length;++C)if(x[C]){y+="/"+x[C];try{R.mkdir(y,d)}catch(z){if(z.errno!=20)throw z}}},mkdev(c,d,x){return typeof x>"u"&&(x=d,d=438),d|=8192,R.mknod(c,d,x)},symlink(c,d){if(!tt.resolve(c))throw new R.ErrnoError(44);var x=R.lookupPath(d,{parent:!0}),y=x.node;if(!y)throw new R.ErrnoError(44);var C=Be.basename(d),z=R.mayCreate(y,C);if(z)throw new R.ErrnoError(z);if(!y.node_ops.symlink)throw new R.ErrnoError(63);return y.node_ops.symlink(y,C,c)},rename(c,d){var x=Be.dirname(c),y=Be.dirname(d),C=Be.basename(c),z=Be.basename(d),G,Z,ve;if(G=R.lookupPath(c,{parent:!0}),Z=G.node,G=R.lookupPath(d,{parent:!0}),ve=G.node,!Z||!ve)throw new R.ErrnoError(44);if(Z.mount!==ve.mount)throw new R.ErrnoError(75);var Fe=R.lookupNode(Z,C),Ke=tt.relative(c,y);if(Ke.charAt(0)!==".")throw new R.ErrnoError(28);if(Ke=tt.relative(d,x),Ke.charAt(0)!==".")throw new R.ErrnoError(55);var ct;try{ct=R.lookupNode(ve,z)}catch{}if(Fe!==ct){var pt=R.isDir(Fe.mode),nt=R.mayDelete(Z,C,pt);if(nt)throw new R.ErrnoError(nt);if(nt=ct?R.mayDelete(ve,z,pt):R.mayCreate(ve,z),nt)throw new R.ErrnoError(nt);if(!Z.node_ops.rename)throw new R.ErrnoError(63);if(R.isMountpoint(Fe)||ct&&R.isMountpoint(ct))throw new R.ErrnoError(10);if(ve!==Z&&(nt=R.nodePermissions(Z,"w"),nt))throw new R.ErrnoError(nt);R.hashRemoveNode(Fe);try{Z.node_ops.rename(Fe,ve,z),Fe.parent=ve}catch(St){throw St}finally{R.hashAddNode(Fe)}}},rmdir(c){var d=R.lookupPath(c,{parent:!0}),x=d.node,y=Be.basename(c),C=R.lookupNode(x,y),z=R.mayDelete(x,y,!0);if(z)throw new R.ErrnoError(z);if(!x.node_ops.rmdir)throw new R.ErrnoError(63);if(R.isMountpoint(C))throw new R.ErrnoError(10);x.node_ops.rmdir(x,y),R.destroyNode(C)},readdir(c){var d=R.lookupPath(c,{follow:!0}),x=d.node;if(!x.node_ops.readdir)throw new R.ErrnoError(54);return x.node_ops.readdir(x)},unlink(c){var d=R.lookupPath(c,{parent:!0}),x=d.node;if(!x)throw new R.ErrnoError(44);var y=Be.basename(c),C=R.lookupNode(x,y),z=R.mayDelete(x,y,!1);if(z)throw new R.ErrnoError(z);if(!x.node_ops.unlink)throw new R.ErrnoError(63);if(R.isMountpoint(C))throw new R.ErrnoError(10);x.node_ops.unlink(x,y),R.destroyNode(C)},readlink(c){var d=R.lookupPath(c),x=d.node;if(!x)throw new R.ErrnoError(44);if(!x.node_ops.readlink)throw new R.ErrnoError(28);return tt.resolve(R.getPath(x.parent),x.node_ops.readlink(x))},stat(c,d){var x=R.lookupPath(c,{follow:!d}),y=x.node;if(!y)throw new R.ErrnoError(44);if(!y.node_ops.getattr)throw new R.ErrnoError(63);return y.node_ops.getattr(y)},lstat(c){return R.stat(c,!0)},chmod(c,d,x){var y;if(typeof c=="string"){var C=R.lookupPath(c,{follow:!x});y=C.node}else y=c;if(!y.node_ops.setattr)throw new R.ErrnoError(63);y.node_ops.setattr(y,{mode:d&4095|y.mode&-4096,timestamp:Date.now()})},lchmod(c,d){R.chmod(c,d,!0)},fchmod(c,d){var x=R.getStreamChecked(c);R.chmod(x.node,d)},chown(c,d,x,y){var C;if(typeof c=="string"){var z=R.lookupPath(c,{follow:!y});C=z.node}else C=c;if(!C.node_ops.setattr)throw new R.ErrnoError(63);C.node_ops.setattr(C,{timestamp:Date.now()})},lchown(c,d,x){R.chown(c,d,x,!0)},fchown(c,d,x){var y=R.getStreamChecked(c);R.chown(y.node,d,x)},truncate(c,d){if(d<0)throw new R.ErrnoError(28);var x;if(typeof c=="string"){var y=R.lookupPath(c,{follow:!0});x=y.node}else x=c;if(!x.node_ops.setattr)throw new R.ErrnoError(63);if(R.isDir(x.mode))throw new R.ErrnoError(31);if(!R.isFile(x.mode))throw new R.ErrnoError(28);var C=R.nodePermissions(x,"w");if(C)throw new R.ErrnoError(C);x.node_ops.setattr(x,{size:d,timestamp:Date.now()})},ftruncate(c,d){var x=R.getStreamChecked(c);if((x.flags&2097155)===0)throw new R.ErrnoError(28);R.truncate(x.node,d)},utime(c,d,x){var y=R.lookupPath(c,{follow:!0}),C=y.node;C.node_ops.setattr(C,{timestamp:Math.max(d,x)})},open(c,d,x){if(c==="")throw new R.ErrnoError(44);d=typeof d=="string"?kr(d):d,d&64?(x=typeof x>"u"?438:x,x=x&4095|32768):x=0;var y;if(typeof c=="object")y=c;else{c=Be.normalize(c);try{var C=R.lookupPath(c,{follow:!(d&131072)});y=C.node}catch{}}var z=!1;if(d&64)if(y){if(d&128)throw new R.ErrnoError(20)}else y=R.mknod(c,x,0),z=!0;if(!y)throw new R.ErrnoError(44);if(R.isChrdev(y.mode)&&(d&=-513),d&65536&&!R.isDir(y.mode))throw new R.ErrnoError(54);if(!z){var G=R.mayOpen(y,d);if(G)throw new R.ErrnoError(G)}d&512&&!z&&R.truncate(y,0),d&=-131713;var Z=R.createStream({node:y,path:R.getPath(y),flags:d,seekable:!0,position:0,stream_ops:y.stream_ops,ungotten:[],error:!1});return Z.stream_ops.open&&Z.stream_ops.open(Z),p.logReadFiles&&!(d&1)&&(c in R.readFiles||(R.readFiles[c]=1)),Z},close(c){if(R.isClosed(c))throw new R.ErrnoError(8);c.getdents&&(c.getdents=null);try{c.stream_ops.close&&c.stream_ops.close(c)}catch(d){throw d}finally{R.closeStream(c.fd)}c.fd=null},isClosed(c){return c.fd===null},llseek(c,d,x){if(R.isClosed(c))throw new R.ErrnoError(8);if(!c.seekable||!c.stream_ops.llseek)throw new R.ErrnoError(70);if(x!=0&&x!=1&&x!=2)throw new R.ErrnoError(28);return c.position=c.stream_ops.llseek(c,d,x),c.ungotten=[],c.position},read(c,d,x,y,C){if(y<0||C<0)throw new R.ErrnoError(28);if(R.isClosed(c))throw new R.ErrnoError(8);if((c.flags&2097155)===1)throw new R.ErrnoError(8);if(R.isDir(c.node.mode))throw new R.ErrnoError(31);if(!c.stream_ops.read)throw new R.ErrnoError(28);var z=typeof C<"u";if(!z)C=c.position;else if(!c.seekable)throw new R.ErrnoError(70);var G=c.stream_ops.read(c,d,x,y,C);return z||(c.position+=G),G},write(c,d,x,y,C,z){if(y<0||C<0)throw new R.ErrnoError(28);if(R.isClosed(c))throw new R.ErrnoError(8);if((c.flags&2097155)===0)throw new R.ErrnoError(8);if(R.isDir(c.node.mode))throw new R.ErrnoError(31);if(!c.stream_ops.write)throw new R.ErrnoError(28);c.seekable&&c.flags&1024&&R.llseek(c,0,2);var G=typeof C<"u";if(!G)C=c.position;else if(!c.seekable)throw new R.ErrnoError(70);var Z=c.stream_ops.write(c,d,x,y,C,z);return G||(c.position+=Z),Z},allocate(c,d,x){if(R.isClosed(c))throw new R.ErrnoError(8);if(d<0||x<=0)throw new R.ErrnoError(28);if((c.flags&2097155)===0)throw new R.ErrnoError(8);if(!R.isFile(c.node.mode)&&!R.isDir(c.node.mode))throw new R.ErrnoError(43);if(!c.stream_ops.allocate)throw new R.ErrnoError(138);c.stream_ops.allocate(c,d,x)},mmap(c,d,x,y,C){if((y&2)!==0&&(C&2)===0&&(c.flags&2097155)!==2)throw new R.ErrnoError(2);if((c.flags&2097155)===1)throw new R.ErrnoError(2);if(!c.stream_ops.mmap)throw new R.ErrnoError(43);if(!d)throw new R.ErrnoError(28);return c.stream_ops.mmap(c,d,x,y,C)},msync(c,d,x,y,C){return c.stream_ops.msync?c.stream_ops.msync(c,d,x,y,C):0},ioctl(c,d,x){if(!c.stream_ops.ioctl)throw new R.ErrnoError(59);return c.stream_ops.ioctl(c,d,x)},readFile(c,d={}){if(d.flags=d.flags||0,d.encoding=d.encoding||"binary",d.encoding!=="utf8"&&d.encoding!=="binary")throw new Error(`Invalid encoding type "${d.encoding}"`);var x,y=R.open(c,d.flags),C=R.stat(c),z=C.size,G=new Uint8Array(z);return R.read(y,G,0,z,0),d.encoding==="utf8"?x=je(G):d.encoding==="binary"&&(x=G),R.close(y),x},writeFile(c,d,x={}){x.flags=x.flags||577;var y=R.open(c,x.flags,x.mode);if(typeof d=="string"){var C=new Uint8Array(j(d)+1),z=Ye(d,C,0,C.length);R.write(y,C,0,z,void 0,x.canOwn)}else if(ArrayBuffer.isView(d))R.write(y,d,0,d.byteLength,void 0,x.canOwn);else throw new Error("Unsupported data type");R.close(y)},cwd:()=>R.currentPath,chdir(c){var d=R.lookupPath(c,{follow:!0});if(d.node===null)throw new R.ErrnoError(44);if(!R.isDir(d.node.mode))throw new R.ErrnoError(54);var x=R.nodePermissions(d.node,"x");if(x)throw new R.ErrnoError(x);R.currentPath=d.path},createDefaultDirectories(){R.mkdir("/tmp"),R.mkdir("/home"),R.mkdir("/home/web_user")},createDefaultDevices(){R.mkdir("/dev"),R.registerDevice(R.makedev(1,3),{read:()=>0,write:(y,C,z,G,Z)=>G}),R.mkdev("/dev/null",R.makedev(1,3)),Pe.register(R.makedev(5,0),Pe.default_tty_ops),Pe.register(R.makedev(6,0),Pe.default_tty1_ops),R.mkdev("/dev/tty",R.makedev(5,0)),R.mkdev("/dev/tty1",R.makedev(6,0));var c=new Uint8Array(1024),d=0,x=()=>(d===0&&(d=Oe(c).byteLength),c[--d]);R.createDevice("/dev","random",x),R.createDevice("/dev","urandom",x),R.mkdir("/dev/shm"),R.mkdir("/dev/shm/tmp")},createSpecialDirectories(){R.mkdir("/proc");var c=R.mkdir("/proc/self");R.mkdir("/proc/self/fd"),R.mount({mount(){var d=R.createNode(c,"fd",16895,73);return d.node_ops={lookup(x,y){var C=+y,z=R.getStreamChecked(C),G={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>z.path}};return G.parent=G,G}},d}},{},"/proc/self/fd")},createStandardStreams(c,d,x){c?R.createDevice("/dev","stdin",c):R.symlink("/dev/tty","/dev/stdin"),d?R.createDevice("/dev","stdout",null,d):R.symlink("/dev/tty","/dev/stdout"),x?R.createDevice("/dev","stderr",null,x):R.symlink("/dev/tty1","/dev/stderr"),R.open("/dev/stdin",0),R.open("/dev/stdout",1),R.open("/dev/stderr",1)},staticInit(){[44].forEach(c=>{R.genericErrors[c]=new R.ErrnoError(c),R.genericErrors[c].stack="<generic error, no stack>"}),R.nameTable=new Array(4096),R.mount(st,{},"/"),R.createDefaultDirectories(),R.createDefaultDevices(),R.createSpecialDirectories(),R.filesystems={MEMFS:st}},init(c,d,x){R.initialized=!0,c??=p.stdin,d??=p.stdout,x??=p.stderr,R.createStandardStreams(c,d,x)},quit(){R.initialized=!1;for(var c=0;c<R.streams.length;c++){var d=R.streams[c];d&&R.close(d)}},findObject(c,d){var x=R.analyzePath(c,d);return x.exists?x.object:null},analyzePath(c,d){try{var x=R.lookupPath(c,{follow:!d});c=x.path}catch{}var y={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var x=R.lookupPath(c,{parent:!0});y.parentExists=!0,y.parentPath=x.path,y.parentObject=x.node,y.name=Be.basename(c),x=R.lookupPath(c,{follow:!d}),y.exists=!0,y.path=x.path,y.object=x.node,y.name=x.node.name,y.isRoot=x.path==="/"}catch(C){y.error=C.errno}return y},createPath(c,d,x,y){c=typeof c=="string"?c:R.getPath(c);for(var C=d.split("/").reverse();C.length;){var z=C.pop();if(z){var G=Be.join2(c,z);try{R.mkdir(G)}catch{}c=G}}return G},createFile(c,d,x,y,C){var z=Be.join2(typeof c=="string"?c:R.getPath(c),d),G=ci(y,C);return R.create(z,G)},createDataFile(c,d,x,y,C,z){var G=d;c&&(c=typeof c=="string"?c:R.getPath(c),G=d?Be.join2(c,d):c);var Z=ci(y,C),ve=R.create(G,Z);if(x){if(typeof x=="string"){for(var Fe=new Array(x.length),Ke=0,ct=x.length;Ke<ct;++Ke)Fe[Ke]=x.charCodeAt(Ke);x=Fe}R.chmod(ve,Z|146);var pt=R.open(ve,577);R.write(pt,x,0,x.length,0,z),R.close(pt),R.chmod(ve,Z)}},createDevice(c,d,x,y){var C=Be.join2(typeof c=="string"?c:R.getPath(c),d),z=ci(!!x,!!y);R.createDevice.major??=64;var G=R.makedev(R.createDevice.major++,0);return R.registerDevice(G,{open(Z){Z.seekable=!1},close(Z){y?.buffer?.length&&y(10)},read(Z,ve,Fe,Ke,ct){for(var pt=0,nt=0;nt<Ke;nt++){var St;try{St=x()}catch{throw new R.ErrnoError(29)}if(St===void 0&&pt===0)throw new R.ErrnoError(6);if(St==null)break;pt++,ve[Fe+nt]=St}return pt&&(Z.node.timestamp=Date.now()),pt},write(Z,ve,Fe,Ke,ct){for(var pt=0;pt<Ke;pt++)try{y(ve[Fe+pt])}catch{throw new R.ErrnoError(29)}return Ke&&(Z.node.timestamp=Date.now()),pt}}),R.mkdev(C,z,G)},forceLoadFile(c){if(c.isDevice||c.isFolder||c.link||c.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{c.contents=H(c.url),c.usedBytes=c.contents.length}catch{throw new R.ErrnoError(29)}},createLazyFile(c,d,x,y,C){class z{constructor(){this.lengthKnown=!1,this.chunks=[]}get(nt){if(!(nt>this.length-1||nt<0)){var St=nt%this.chunkSize,Lt=nt/this.chunkSize|0;return this.getter(Lt)[St]}}setDataGetter(nt){this.getter=nt}cacheLength(){var nt=new XMLHttpRequest;if(nt.open("HEAD",x,!1),nt.send(null),!(nt.status>=200&&nt.status<300||nt.status===304))throw new Error("Couldn't load "+x+". Status: "+nt.status);var St=Number(nt.getResponseHeader("Content-length")),Lt,bn=(Lt=nt.getResponseHeader("Accept-Ranges"))&&Lt==="bytes",xn=(Lt=nt.getResponseHeader("Content-Encoding"))&&Lt==="gzip",ii=1024*1024;bn||(ii=St);var ai=(jn,wa)=>{if(jn>wa)throw new Error("invalid range ("+jn+", "+wa+") or no bytes requested!");if(wa>St-1)throw new Error("only "+St+" bytes available! programmer error!");var An=new XMLHttpRequest;if(An.open("GET",x,!1),St!==ii&&An.setRequestHeader("Range","bytes="+jn+"-"+wa),An.responseType="arraybuffer",An.overrideMimeType&&An.overrideMimeType("text/plain; charset=x-user-defined"),An.send(null),!(An.status>=200&&An.status<300||An.status===304))throw new Error("Couldn't load "+x+". Status: "+An.status);return An.response!==void 0?new Uint8Array(An.response||[]):ke(An.responseText||"")},Aa=this;Aa.setDataGetter(jn=>{var wa=jn*ii,An=(jn+1)*ii-1;if(An=Math.min(An,St-1),typeof Aa.chunks[jn]>"u"&&(Aa.chunks[jn]=ai(wa,An)),typeof Aa.chunks[jn]>"u")throw new Error("doXHR failed!");return Aa.chunks[jn]}),(xn||!St)&&(ii=St=1,St=this.getter(0).length,ii=St,V("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=St,this._chunkSize=ii,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!S)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var G=new z,Z={isDevice:!1,contents:G}}else var Z={isDevice:!1,url:x};var ve=R.createFile(c,d,Z,y,C);Z.contents?ve.contents=Z.contents:Z.url&&(ve.contents=null,ve.url=Z.url),Object.defineProperties(ve,{usedBytes:{get:function(){return this.contents.length}}});var Fe={},Ke=Object.keys(ve.stream_ops);Ke.forEach(pt=>{var nt=ve.stream_ops[pt];Fe[pt]=(...St)=>(R.forceLoadFile(ve),nt(...St))});function ct(pt,nt,St,Lt,bn){var xn=pt.node.contents;if(bn>=xn.length)return 0;var ii=Math.min(xn.length-bn,Lt);if(xn.slice)for(var ai=0;ai<ii;ai++)nt[St+ai]=xn[bn+ai];else for(var ai=0;ai<ii;ai++)nt[St+ai]=xn.get(bn+ai);return ii}return Fe.read=(pt,nt,St,Lt,bn)=>(R.forceLoadFile(ve),ct(pt,nt,St,Lt,bn)),Fe.mmap=(pt,nt,St,Lt,bn)=>{R.forceLoadFile(ve);var xn=Mt(nt);if(!xn)throw new R.ErrnoError(48);return ct(pt,ae,xn,nt,St),{ptr:xn,allocated:!0}},ve.stream_ops=Fe,ve}},Sa=(c,d)=>c?je(le,c,d):"",Ht={DEFAULT_POLLMASK:5,calculateAt(c,d,x){if(Be.isAbs(d))return d;var y;if(c===-100)y=R.cwd();else{var C=Ht.getStreamFromFD(c);y=C.path}if(d.length==0){if(!x)throw new R.ErrnoError(44);return y}return Be.join2(y,d)},doStat(c,d,x){var y=c(d);B[x>>2]=y.dev,B[x+4>>2]=y.mode,$[x+8>>2]=y.nlink,B[x+12>>2]=y.uid,B[x+16>>2]=y.gid,B[x+20>>2]=y.rdev,Ie=[y.size>>>0,(ee=y.size,+Math.abs(ee)>=1?ee>0?+Math.floor(ee/4294967296)>>>0:~~+Math.ceil((ee-+(~~ee>>>0))/4294967296)>>>0:0)],B[x+24>>2]=Ie[0],B[x+28>>2]=Ie[1],B[x+32>>2]=4096,B[x+36>>2]=y.blocks;var C=y.atime.getTime(),z=y.mtime.getTime(),G=y.ctime.getTime();return Ie=[Math.floor(C/1e3)>>>0,(ee=Math.floor(C/1e3),+Math.abs(ee)>=1?ee>0?+Math.floor(ee/4294967296)>>>0:~~+Math.ceil((ee-+(~~ee>>>0))/4294967296)>>>0:0)],B[x+40>>2]=Ie[0],B[x+44>>2]=Ie[1],$[x+48>>2]=C%1e3*1e3*1e3,Ie=[Math.floor(z/1e3)>>>0,(ee=Math.floor(z/1e3),+Math.abs(ee)>=1?ee>0?+Math.floor(ee/4294967296)>>>0:~~+Math.ceil((ee-+(~~ee>>>0))/4294967296)>>>0:0)],B[x+56>>2]=Ie[0],B[x+60>>2]=Ie[1],$[x+64>>2]=z%1e3*1e3*1e3,Ie=[Math.floor(G/1e3)>>>0,(ee=Math.floor(G/1e3),+Math.abs(ee)>=1?ee>0?+Math.floor(ee/4294967296)>>>0:~~+Math.ceil((ee-+(~~ee>>>0))/4294967296)>>>0:0)],B[x+72>>2]=Ie[0],B[x+76>>2]=Ie[1],$[x+80>>2]=G%1e3*1e3*1e3,Ie=[y.ino>>>0,(ee=y.ino,+Math.abs(ee)>=1?ee>0?+Math.floor(ee/4294967296)>>>0:~~+Math.ceil((ee-+(~~ee>>>0))/4294967296)>>>0:0)],B[x+88>>2]=Ie[0],B[x+92>>2]=Ie[1],0},doMsync(c,d,x,y,C){if(!R.isFile(d.node.mode))throw new R.ErrnoError(43);if(y&2)return 0;var z=le.slice(c,c+x);R.msync(d,z,C,x,y)},getStreamFromFD(c){var d=R.getStreamChecked(c);return d},varargs:void 0,getStr(c){var d=Sa(c);return d}};function ui(c,d){try{return c=Ht.getStr(c),R.chmod(c,d),0}catch(x){if(typeof R>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function En(c,d,x,y){try{if(d=Ht.getStr(d),d=Ht.calculateAt(c,d),x&-8)return-28;var C=R.lookupPath(d,{follow:!0}),z=C.node;if(!z)return-44;var G="";return x&4&&(G+="r"),x&2&&(G+="w"),x&1&&(G+="x"),G&&R.nodePermissions(z,G)?-2:0}catch(Z){if(typeof R>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function yn(){var c=B[+Ht.varargs>>2];return Ht.varargs+=4,c}var ni=yn;function tr(c,d,x){Ht.varargs=x;try{var y=Ht.getStreamFromFD(c);switch(d){case 0:{var C=yn();if(C<0)return-28;for(;R.streams[C];)C++;var z;return z=R.dupStream(y,C),z.fd}case 1:case 2:return 0;case 3:return y.flags;case 4:{var C=yn();return y.flags|=C,0}case 12:{var C=ni(),G=0;return Te[C+G>>1]=2,0}case 13:case 14:return 0}return-28}catch(Z){if(typeof R>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function Vo(c,d){try{var x=Ht.getStreamFromFD(c);return Ht.doStat(R.stat,x.path,d)}catch(y){if(typeof R>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function Go(c,d,x){Ht.varargs=x;try{var y=Ht.getStreamFromFD(c);switch(d){case 21509:return y.tty?0:-59;case 21505:{if(!y.tty)return-59;if(y.tty.ops.ioctl_tcgets){var C=y.tty.ops.ioctl_tcgets(y),z=ni();B[z>>2]=C.c_iflag||0,B[z+4>>2]=C.c_oflag||0,B[z+8>>2]=C.c_cflag||0,B[z+12>>2]=C.c_lflag||0;for(var G=0;G<32;G++)ae[z+G+17]=C.c_cc[G]||0;return 0}return 0}case 21510:case 21511:case 21512:return y.tty?0:-59;case 21506:case 21507:case 21508:{if(!y.tty)return-59;if(y.tty.ops.ioctl_tcsets){for(var z=ni(),Z=B[z>>2],ve=B[z+4>>2],Fe=B[z+8>>2],Ke=B[z+12>>2],ct=[],G=0;G<32;G++)ct.push(ae[z+G+17]);return y.tty.ops.ioctl_tcsets(y.tty,d,{c_iflag:Z,c_oflag:ve,c_cflag:Fe,c_lflag:Ke,c_cc:ct})}return 0}case 21519:{if(!y.tty)return-59;var z=ni();return B[z>>2]=0,0}case 21520:return y.tty?-28:-59;case 21531:{var z=ni();return R.ioctl(y,d,z)}case 21523:{if(!y.tty)return-59;if(y.tty.ops.ioctl_tiocgwinsz){var pt=y.tty.ops.ioctl_tiocgwinsz(y.tty),z=ni();Te[z>>1]=pt[0],Te[z+2>>1]=pt[1]}return 0}case 21524:return y.tty?0:-59;case 21515:return y.tty?0:-59;default:return-28}}catch(nt){if(typeof R>"u"||nt.name!=="ErrnoError")throw nt;return-nt.errno}}function As(c,d){try{return c=Ht.getStr(c),Ht.doStat(R.lstat,c,d)}catch(x){if(typeof R>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function ba(c,d,x,y){try{d=Ht.getStr(d);var C=y&256,z=y&4096;return y=y&-6401,d=Ht.calculateAt(c,d,z),Ht.doStat(C?R.lstat:R.stat,d,x)}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return-G.errno}}function Xr(c,d,x,y){Ht.varargs=y;try{d=Ht.getStr(d),d=Ht.calculateAt(c,d);var C=y?yn():0;return R.open(d,x,C).fd}catch(z){if(typeof R>"u"||z.name!=="ErrnoError")throw z;return-z.errno}}function la(c){try{return c=Ht.getStr(c),R.rmdir(c),0}catch(d){if(typeof R>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function N(c,d){try{return c=Ht.getStr(c),Ht.doStat(R.stat,c,d)}catch(x){if(typeof R>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function ie(c,d,x){try{return d=Ht.getStr(d),d=Ht.calculateAt(c,d),x===0?R.unlink(d):x===512?R.rmdir(d):Et("Invalid flags passed to unlinkat"),0}catch(y){if(typeof R>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}var _e=()=>{Et("")},fe=(c,d,x,y,C)=>{},oe=()=>{for(var c=new Array(256),d=0;d<256;++d)c[d]=String.fromCharCode(d);Ve=c},Ve,He=c=>{for(var d="",x=c;le[x];)d+=Ve[le[x++]];return d},Qe={},Je={},gt={},_t,ot=c=>{throw new _t(c)},Rt,Wt=c=>{throw new Rt(c)},Jt=(c,d,x)=>{c.forEach(Z=>gt[Z]=d);function y(Z){var ve=x(Z);ve.length!==c.length&&Wt("Mismatched type converter count");for(var Fe=0;Fe<c.length;++Fe)zt(c[Fe],ve[Fe])}var C=new Array(d.length),z=[],G=0;d.forEach((Z,ve)=>{Je.hasOwnProperty(Z)?C[ve]=Je[Z]:(z.push(Z),Qe.hasOwnProperty(Z)||(Qe[Z]=[]),Qe[Z].push(()=>{C[ve]=Je[Z],++G,G===z.length&&y(C)}))}),z.length===0&&y(C)};function Vt(c,d,x={}){var y=d.name;if(c||ot(`type "${y}" must have a positive integer typeid pointer`),Je.hasOwnProperty(c)){if(x.ignoreDuplicateRegistrations)return;ot(`Cannot register type '${y}' twice`)}if(Je[c]=d,delete gt[c],Qe.hasOwnProperty(c)){var C=Qe[c];delete Qe[c],C.forEach(z=>z())}}function zt(c,d,x={}){return Vt(c,d,x)}var dt=8,sn=(c,d,x,y)=>{d=He(d),zt(c,{name:d,fromWireType:function(C){return!!C},toWireType:function(C,z){return z?x:y},argPackAdvance:dt,readValueFromPointer:function(C){return this.fromWireType(le[C])},destructorFunction:null})},It=[],cn=[],Pi=c=>{c>9&&--cn[c+1]===0&&(cn[c]=void 0,It.push(c))},un=()=>cn.length/2-5-It.length,ji=()=>{cn.push(0,1,void 0,1,null,1,!0,1,!1,1),p.count_emval_handles=un},At={toValue:c=>(c||ot("Cannot use deleted val. handle = "+c),cn[c]),toHandle:c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const d=It.pop()||cn.length;return cn[d]=c,cn[d+1]=1,d}}}};function Tn(c){return this.fromWireType($[c>>2])}var Un={name:"emscripten::val",fromWireType:c=>{var d=At.toValue(c);return Pi(c),d},toWireType:(c,d)=>At.toHandle(d),argPackAdvance:dt,readValueFromPointer:Tn,destructorFunction:null},Pn=c=>zt(c,Un),Gn=(c,d)=>{switch(d){case 4:return function(x){return this.fromWireType(te[x>>2])};case 8:return function(x){return this.fromWireType(Re[x>>3])};default:throw new TypeError(`invalid float width (${d}): ${c}`)}},Fi=(c,d,x)=>{d=He(d),zt(c,{name:d,fromWireType:y=>y,toWireType:(y,C)=>C,argPackAdvance:dt,readValueFromPointer:Gn(d,x),destructorFunction:null})},mi=(c,d)=>Object.defineProperty(d,"name",{value:c}),ko=c=>{for(;c.length;){var d=c.pop(),x=c.pop();x(d)}};function Xo(c){for(var d=1;d<c.length;++d)if(c[d]!==null&&c[d].destructorFunction===void 0)return!0;return!1}function ws(c,d){if(!(c instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof c} which is not a function`);var x=mi(c.name||"unknownFunctionName",function(){});x.prototype=c.prototype;var y=new x,C=c.apply(y,d);return C instanceof Object?C:y}function af(c,d,x,y){for(var C=Xo(c),z=c.length-2,G=[],Z=["fn"],ve=0;ve<z;++ve)G.push(`arg${ve}`),Z.push(`arg${ve}Wired`);G=G.join(","),Z=Z.join(",");var Fe=`return function (${G}) {
`;C&&(Fe+=`var destructors = [];
`);for(var Ke=C?"destructors":"null",ct=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],ve=0;ve<z;++ve)Fe+=`var arg${ve}Wired = argType${ve}['toWireType'](${Ke}, arg${ve});
`,ct.push(`argType${ve}`);if(Fe+=(x||y?"var rv = ":"")+`invoker(${Z});
`,C)Fe+=`runDestructors(destructors);
`;else for(var ve=2;ve<c.length;++ve){var pt=ve===1?"thisWired":"arg"+(ve-2)+"Wired";c[ve].destructorFunction!==null&&(Fe+=`${pt}_dtor(${pt});
`,ct.push(`${pt}_dtor`))}return x&&(Fe+=`var ret = retType['fromWireType'](rv);
return ret;
`),Fe+=`}
`,[ct,Fe]}function rf(c,d,x,y,C,z){var G=d.length;G<2&&ot("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Z=d[1]!==null&&x!==null,ve=Xo(d),Fe=d[0].name!=="void",Ke=[c,ot,y,C,ko,d[0],d[1]],ct=0;ct<G-2;++ct)Ke.push(d[ct+2]);if(!ve)for(var ct=2;ct<d.length;++ct)d[ct].destructorFunction!==null&&Ke.push(d[ct].destructorFunction);let[pt,nt]=af(d,Z,Fe,z);pt.push(nt);var St=ws(Function,pt)(...Ke);return mi(c,St)}var Rs=(c,d,x)=>{if(c[d].overloadTable===void 0){var y=c[d];c[d]=function(...C){return c[d].overloadTable.hasOwnProperty(C.length)||ot(`Function '${x}' called with an invalid number of arguments (${C.length}) - expects one of (${c[d].overloadTable})!`),c[d].overloadTable[C.length].apply(this,C)},c[d].overloadTable=[],c[d].overloadTable[y.argCount]=y}},Zi=(c,d,x)=>{p.hasOwnProperty(c)?((x===void 0||p[c].overloadTable!==void 0&&p[c].overloadTable[x]!==void 0)&&ot(`Cannot register public name '${c}' twice`),Rs(p,c,c),p.hasOwnProperty(x)&&ot(`Cannot register multiple overloads of a function with the same number of arguments (${x})!`),p[c].overloadTable[x]=d):(p[c]=d,x!==void 0&&(p[c].numArguments=x))},Wo=(c,d)=>{for(var x=[],y=0;y<c;y++)x.push($[d+y*4>>2]);return x},qo=(c,d,x)=>{p.hasOwnProperty(c)||Wt("Replacing nonexistent public symbol"),p[c].overloadTable!==void 0&&x!==void 0?p[c].overloadTable[x]=d:(p[c]=d,p[c].argCount=x)},nr=(c,d,x)=>{c=c.replace(/p/g,"i");var y=p["dynCall_"+c];return y(d,...x)},Ki=[],Yo,Cs=c=>{var d=Ki[c];return d||(c>=Ki.length&&(Ki.length=c+1),Ki[c]=d=Yo.get(c)),d},$l=(c,d,x=[])=>{if(c.includes("j"))return nr(c,d,x);var y=Cs(d)(...x);return y},Wr=(c,d)=>(...x)=>$l(c,d,x),Qi=(c,d)=>{c=He(c);function x(){return c.includes("j")?Wr(c,d):Cs(d)}var y=x();return typeof y!="function"&&ot(`unknown function pointer with signature ${c}: ${d}`),y},jo=(c,d)=>{var x=mi(d,function(y){this.name=d,this.message=y;var C=new Error(y).stack;C!==void 0&&(this.stack=this.toString()+`
`+C.replace(/^Error(:[^\n]*)?\n/,""))});return x.prototype=Object.create(c.prototype),x.prototype.constructor=x,x.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},x},ir,Ji=c=>{var d=tl(c),x=He(d);return $i(d),x},Zo=(c,d)=>{var x=[],y={};function C(z){if(!y[z]&&!Je[z]){if(gt[z]){gt[z].forEach(C);return}x.push(z),y[z]=!0}}throw d.forEach(C),new ir(`${c}: `+x.map(Ji).join([", "]))},Ds=c=>{c=c.trim();const d=c.indexOf("(");return d!==-1?c.substr(0,d):c},ec=(c,d,x,y,C,z,G,Z)=>{var ve=Wo(d,x);c=He(c),c=Ds(c),C=Qi(y,C),Zi(c,function(){Zo(`Cannot call ${c} due to unbound types`,ve)},d-1),Jt([],ve,Fe=>{var Ke=[Fe[0],null].concat(Fe.slice(1));return qo(c,rf(c,Ke,null,C,z,G),d-1),[]})},Us=(c,d,x)=>{switch(d){case 1:return x?y=>ae[y]:y=>le[y];case 2:return x?y=>Te[y>>1]:y=>Me[y>>1];case 4:return x?y=>B[y>>2]:y=>$[y>>2];default:throw new TypeError(`invalid integer width (${d}): ${c}`)}},Ls=(c,d,x,y,C)=>{d=He(d);var z=Ke=>Ke;if(y===0){var G=32-8*x;z=Ke=>Ke<<G>>>G}var Z=d.includes("unsigned"),ve=(Ke,ct)=>{},Fe;Z?Fe=function(Ke,ct){return ve(ct,this.name),ct>>>0}:Fe=function(Ke,ct){return ve(ct,this.name),ct},zt(c,{name:d,fromWireType:z,toWireType:Fe,argPackAdvance:dt,readValueFromPointer:Us(d,x,y!==0),destructorFunction:null})},tc=(c,d,x)=>{var y=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],C=y[d];function z(G){var Z=$[G>>2],ve=$[G+4>>2];return new C(ae.buffer,ve,Z)}x=He(x),zt(c,{name:x,fromWireType:z,argPackAdvance:dt,readValueFromPointer:z},{ignoreDuplicateRegistrations:!0})},Ln=(c,d,x)=>Ye(c,le,d,x),Ma=(c,d)=>{d=He(d);var x=d==="std::string";zt(c,{name:d,fromWireType(y){var C=$[y>>2],z=y+4,G;if(x)for(var Z=z,ve=0;ve<=C;++ve){var Fe=z+ve;if(ve==C||le[Fe]==0){var Ke=Fe-Z,ct=Sa(Z,Ke);G===void 0?G=ct:(G+="\0",G+=ct),Z=Fe+1}}else{for(var pt=new Array(C),ve=0;ve<C;++ve)pt[ve]=String.fromCharCode(le[z+ve]);G=pt.join("")}return $i(y),G},toWireType(y,C){C instanceof ArrayBuffer&&(C=new Uint8Array(C));var z,G=typeof C=="string";G||C instanceof Uint8Array||C instanceof Uint8ClampedArray||C instanceof Int8Array||ot("Cannot pass non-string to std::string"),x&&G?z=j(C):z=C.length;var Z=$r(4+z+1),ve=Z+4;if($[Z>>2]=z,x&&G)Ln(C,ve,z+1);else if(G)for(var Fe=0;Fe<z;++Fe){var Ke=C.charCodeAt(Fe);Ke>255&&($i(ve),ot("String has UTF-16 code units that do not fit in 8 bits")),le[ve+Fe]=Ke}else for(var Fe=0;Fe<z;++Fe)le[ve+Fe]=C[Fe];return y!==null&&y.push($i,Z),Z},argPackAdvance:dt,readValueFromPointer:Tn,destructorFunction(y){$i(y)}})},qr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Yr=(c,d)=>{for(var x=c,y=x>>1,C=y+d/2;!(y>=C)&&Me[y];)++y;if(x=y<<1,x-c>32&&qr)return qr.decode(le.subarray(c,x));for(var z="",G=0;!(G>=d/2);++G){var Z=Te[c+G*2>>1];if(Z==0)break;z+=String.fromCharCode(Z)}return z},sf=(c,d,x)=>{if(x??=2147483647,x<2)return 0;x-=2;for(var y=d,C=x<c.length*2?x/2:c.length,z=0;z<C;++z){var G=c.charCodeAt(z);Te[d>>1]=G,d+=2}return Te[d>>1]=0,d-y},Ko=c=>c.length*2,Qo=(c,d)=>{for(var x=0,y="";!(x>=d/4);){var C=B[c+x*4>>2];if(C==0)break;if(++x,C>=65536){var z=C-65536;y+=String.fromCharCode(55296|z>>10,56320|z&1023)}else y+=String.fromCharCode(C)}return y},jr=(c,d,x)=>{if(x??=2147483647,x<4)return 0;for(var y=d,C=y+x-4,z=0;z<c.length;++z){var G=c.charCodeAt(z);if(G>=55296&&G<=57343){var Z=c.charCodeAt(++z);G=65536+((G&1023)<<10)|Z&1023}if(B[d>>2]=G,d+=4,d+4>C)break}return B[d>>2]=0,d-y},Ns=c=>{for(var d=0,x=0;x<c.length;++x){var y=c.charCodeAt(x);y>=55296&&y<=57343&&++x,d+=4}return d},nc=(c,d,x)=>{x=He(x);var y,C,z,G;d===2?(y=Yr,C=sf,G=Ko,z=Z=>Me[Z>>1]):d===4&&(y=Qo,C=jr,G=Ns,z=Z=>$[Z>>2]),zt(c,{name:x,fromWireType:Z=>{for(var ve=$[Z>>2],Fe,Ke=Z+4,ct=0;ct<=ve;++ct){var pt=Z+4+ct*d;if(ct==ve||z(pt)==0){var nt=pt-Ke,St=y(Ke,nt);Fe===void 0?Fe=St:(Fe+="\0",Fe+=St),Ke=pt+d}}return $i(Z),Fe},toWireType:(Z,ve)=>{typeof ve!="string"&&ot(`Cannot pass non-string to C++ string type ${x}`);var Fe=G(ve),Ke=$r(4+Fe+d);return $[Ke>>2]=Fe/d,C(ve,Ke+4,Fe+d),Z!==null&&Z.push($i,Ke),Ke},argPackAdvance:dt,readValueFromPointer:Tn,destructorFunction(Z){$i(Z)}})},of=(c,d)=>{d=He(d),zt(c,{isVoid:!0,name:d,argPackAdvance:0,fromWireType:()=>{},toWireType:(x,y)=>{}})},lf=1,cf=()=>lf,Os=c=>{for(var d=c.split("."),x=0;x<4;x++){var y=Number(d[x]);if(isNaN(y))return null;d[x]=y}return(d[0]|d[1]<<8|d[2]<<16|d[3]<<24)>>>0},Ps=c=>parseInt(c),uf=c=>{var d,x,y,C,z=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,G=[];if(!z.test(c))return null;if(c==="::")return[0,0,0,0,0,0,0,0];for(c.startsWith("::")?c=c.replace("::","Z:"):c=c.replace("::",":Z:"),c.indexOf(".")>0?(c=c.replace(new RegExp("[.]","g"),":"),d=c.split(":"),d[d.length-4]=Ps(d[d.length-4])+Ps(d[d.length-3])*256,d[d.length-3]=Ps(d[d.length-2])+Ps(d[d.length-1])*256,d=d.slice(0,d.length-2)):d=c.split(":"),y=0,C=0,x=0;x<d.length;x++)if(typeof d[x]=="string")if(d[x]==="Z"){for(C=0;C<8-d.length+1;C++)G[x+C]=0;y=C-1}else G[x+y]=Ta(parseInt(d[x],16));else G[x+y]=d[x];return[G[1]<<16|G[0],G[3]<<16|G[2],G[5]<<16|G[4],G[7]<<16|G[6]]},ca={address_map:{id:1,addrs:{},names:{}},lookup_name(c){var d=Os(c);if(d!==null||(d=uf(c),d!==null))return c;var x;if(ca.address_map.addrs[c])x=ca.address_map.addrs[c];else{var y=ca.address_map.id++;K(y<65535,"exceeded max address mappings of 65535"),x="172.29."+(y&255)+"."+(y&65280),ca.address_map.names[x]=c,ca.address_map.addrs[c]=x}return x},lookup_addr(c){return ca.address_map.names[c]?ca.address_map.names[c]:null}},ff=c=>{var d=Sa(c);return Os(ca.lookup_name(d))},hf=(c,d,x)=>le.copyWithin(c,d,d+x),Fs=(c,d)=>{var x=Je[c];return x===void 0&&ot(`${d} has unknown type ${Ji(c)}`),x},ic=(c,d,x)=>{var y=[],C=c.toWireType(y,x);return y.length&&($[d>>2]=At.toHandle(y)),C},df=(c,d,x)=>(c=At.toValue(c),d=Fs(d,"emval::as"),ic(d,x,c)),pf={},Jo=c=>{var d=pf[c];return d===void 0?He(c):d},Zr=[],mf=(c,d,x,y,C)=>(c=Zr[c],d=At.toValue(d),x=Jo(x),c(d,d[x],y,C)),ac=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),gf=c=>c===0?At.toHandle(ac()):(c=Jo(c),At.toHandle(ac()[c])),rc=c=>{var d=Zr.length;return Zr.push(c),d},xf=(c,d)=>{for(var x=new Array(c),y=0;y<c;++y)x[y]=Fs($[d+y*4>>2],"parameter "+y);return x},_f=(c,d,x)=>{var y=xf(c,d),C=y.shift();c--;var z=`return function (obj, func, destructorsRef, args) {
`,G=0,Z=[];x===0&&Z.push("obj");for(var ve=["retType"],Fe=[C],Ke=0;Ke<c;++Ke)Z.push("arg"+Ke),ve.push("argType"+Ke),Fe.push(y[Ke]),z+=`  var arg${Ke} = argType${Ke}.readValueFromPointer(args${G?"+"+G:""});
`,G+=y[Ke].argPackAdvance;var ct=x===1?"new func":"func.call";z+=`  var rv = ${ct}(${Z.join(", ")});
`,C.isVoid||(ve.push("emval_returnValue"),Fe.push(ic),z+=`  return emval_returnValue(retType, destructorsRef, rv);
`),z+=`};
`,ve.push(z);var pt=ws(Function,ve)(...Fe),nt=`methodCaller<(${y.map(St=>St.name).join(", ")}) => ${C.name}>`;return rc(mi(nt,pt))},vf=(c,d)=>(c=At.toValue(c),d=At.toValue(d),At.toHandle(c[d])),yf=c=>{c>9&&(cn[c+1]+=1)},Sf=()=>At.toHandle([]),bf=c=>At.toHandle(Jo(c)),Mf=()=>At.toHandle({}),Ef=c=>{var d=At.toValue(c);ko(d),Pi(c)},Tf=(c,d,x)=>{c=At.toValue(c),d=At.toValue(d),x=At.toValue(x),c[d]=x},$o=(c,d)=>{c=Fs(c,"_emval_take_value");var x=c.readValueFromPointer(d);return At.toHandle(x)},Kr=c=>c%4===0&&(c%100!==0||c%400===0),Af=[0,31,60,91,121,152,182,213,244,274,305,335],sc=[0,31,59,90,120,151,181,212,243,273,304,334],oc=c=>{var d=Kr(c.getFullYear()),x=d?Af:sc,y=x[c.getMonth()]+c.getDate()-1;return y},zs=(c,d)=>d+2097152>>>0<4194305-!!c?(c>>>0)+d*4294967296:NaN;function lc(c,d,x){var y=zs(c,d),C=new Date(y*1e3);B[x>>2]=C.getSeconds(),B[x+4>>2]=C.getMinutes(),B[x+8>>2]=C.getHours(),B[x+12>>2]=C.getDate(),B[x+16>>2]=C.getMonth(),B[x+20>>2]=C.getFullYear()-1900,B[x+24>>2]=C.getDay();var z=oc(C)|0;B[x+28>>2]=z,B[x+36>>2]=-(C.getTimezoneOffset()*60);var G=new Date(C.getFullYear(),0,1),Z=new Date(C.getFullYear(),6,1).getTimezoneOffset(),ve=G.getTimezoneOffset(),Fe=(Z!=ve&&C.getTimezoneOffset()==Math.min(ve,Z))|0;B[x+32>>2]=Fe}function cc(c,d,x,y,C,z,G){var Z=zs(z,G);try{var ve=Ht.getStreamFromFD(C);x&2&&Ht.doMsync(c,ve,d,y,Z)}catch(Fe){if(typeof R>"u"||Fe.name!=="ErrnoError")throw Fe;return-Fe.errno}}var ar=(c,d,x,y)=>{var C=new Date().getFullYear(),z=new Date(C,0,1),G=new Date(C,6,1),Z=z.getTimezoneOffset(),ve=G.getTimezoneOffset(),Fe=Math.max(Z,ve);$[c>>2]=Fe*60,B[d>>2]=+(Z!=ve);var Ke=nt=>{var St=nt>=0?"-":"+",Lt=Math.abs(nt),bn=String(Math.floor(Lt/60)).padStart(2,"0"),xn=String(Lt%60).padStart(2,"0");return`UTC${St}${bn}${xn}`},ct=Ke(Z),pt=Ke(ve);ve<Z?(Ln(ct,x,17),Ln(pt,y,17)):(Ln(ct,y,17),Ln(pt,x,17))},wf=()=>Date.now();function Rf(){return new Error().stack.toString()}var Bs=c=>{Bs.shown||={},Bs.shown[c]||(Bs.shown[c]=1,E&&(c="warning: "+c),k(c))};function uc(c){var d=Rf(),x=d.lastIndexOf("_emscripten_log"),y=d.lastIndexOf("_emscripten_get_callstack"),C=d.indexOf(`
`,Math.max(x,y))+1;d=d.slice(C),c&8&&typeof emscripten_source_map>"u"&&(Bs('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),c^=8,c|=16);var z=d.split(`
`);d="";var G=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),Z=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),ve=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Fe in z){var Ke=z[Fe],ct="",pt="",nt=0,St=0,Lt=ve.exec(Ke);if(Lt&&Lt.length==5)ct=Lt[1],pt=Lt[2],nt=Lt[3],St=Lt[4];else if(Lt=G.exec(Ke)||Z.exec(Ke),Lt&&Lt.length>=4)ct=Lt[1],pt=Lt[2],nt=Lt[3],St=Lt[4]|0;else{d+=Ke+`
`;continue}var bn=!1;if(c&8){var xn=emscripten_source_map.originalPositionFor({line:nt,column:St});bn=xn?.source,bn&&(c&64&&(xn.source=xn.source.substring(xn.source.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=`    at ${ct} (${xn.source}:${xn.line}:${xn.column})
`)}(c&16||!bn)&&(c&64&&(pt=pt.substring(pt.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=(bn?`     = ${ct}`:`    at ${ct}`)+` (${pt}:${nt}:${St})
`)}return d=d.replace(/\s+$/,""),d}function fc(c,d,x){var y=uc(c);if(!d||x<=0)return j(y)+1;var C=Ln(y,d,x);return C+1}var rr=()=>2147483648,Qr=()=>rr(),Cf=c=>{var d=F.buffer,x=(c-d.byteLength+65535)/65536|0;try{return F.grow(x),ce(),1}catch{}},Is=c=>{var d=le.length;c>>>=0;var x=rr();if(c>x)return!1;for(var y=1;y<=4;y*=2){var C=d*(1+.2/y);C=Math.min(C,c+100663296);var z=Math.min(x,rt(Math.max(c,C),65536)),G=Cf(z);if(G)return!0}return!1},Hs={},hc=()=>U||"./this.program",Ea=()=>{if(!Ea.strings){var c=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:c,_:hc()};for(var x in Hs)Hs[x]===void 0?delete d[x]:d[x]=Hs[x];var y=[];for(var x in d)y.push(`${x}=${d[x]}`);Ea.strings=y}return Ea.strings},el=(c,d)=>{for(var x=0;x<c.length;++x)ae[d++]=c.charCodeAt(x);ae[d]=0},dc=(c,d)=>{var x=0;return Ea().forEach((y,C)=>{var z=d+x;$[c+C*4>>2]=z,el(y,z),x+=y.length+1}),0},pc=(c,d)=>{var x=Ea();$[c>>2]=x.length;var y=0;return x.forEach(C=>y+=C.length+1),$[d>>2]=y,0},mc=c=>{L(c,new Ge(c))},Df=(c,d)=>{mc(c)},Uf=Df;function Lf(c){try{var d=Ht.getStreamFromFD(c);return R.close(d),0}catch(x){if(typeof R>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var Nf=(c,d,x,y)=>{for(var C=0,z=0;z<x;z++){var G=$[d>>2],Z=$[d+4>>2];d+=8;var ve=R.read(c,ae,G,Z,y);if(ve<0)return-1;if(C+=ve,ve<Z)break}return C};function Of(c,d,x,y){try{var C=Ht.getStreamFromFD(c),z=Nf(C,d,x);return $[y>>2]=z,0}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return G.errno}}function fi(c,d,x,y,C){var z=zs(d,x);try{if(isNaN(z))return 61;var G=Ht.getStreamFromFD(c);return R.llseek(G,z,y),Ie=[G.position>>>0,(ee=G.position,+Math.abs(ee)>=1?ee>0?+Math.floor(ee/4294967296)>>>0:~~+Math.ceil((ee-+(~~ee>>>0))/4294967296)>>>0:0)],B[C>>2]=Ie[0],B[C+4>>2]=Ie[1],G.getdents&&z===0&&y===0&&(G.getdents=null),0}catch(Z){if(typeof R>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}var Jr=(c,d,x,y)=>{for(var C=0,z=0;z<x;z++){var G=$[d>>2],Z=$[d+4>>2];d+=8;var ve=R.write(c,ae,G,Z,y);if(ve<0)return-1;if(C+=ve,ve<Z)break}return C};function gc(c,d,x,y){try{var C=Ht.getStreamFromFD(c),z=Jr(C,d,x);return $[y>>2]=z,0}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return G.errno}}R.createPreloadedFile=Gr,R.staticInit(),oe(),_t=p.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},Rt=p.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},ji(),ir=p.UnboundTypeError=jo(Error,"UnboundTypeError");var xc={M:ui,N:En,h:tr,I:Vo,Q:Go,F:As,G:ba,j:Xr,B:la,H:N,C:ie,A:_e,w:fe,V:sn,U:Pn,n:Fi,f:ec,b:Ls,a:tc,m:Ma,i:nc,W:of,J:cf,x:ff,L:hf,e:df,q:mf,T:Pi,u:gf,p:_f,k:vf,Y:yf,X:Sf,r:bf,Z:Mf,o:Ef,c:Tf,d:$o,t:lc,s:cc,O:ar,K:wf,R:fc,z:Qr,y:Is,D:dc,E:pc,S:Uf,g:Lf,P:Of,v:fi,l:gc},Fn=De(),tl=c=>(tl=Fn.aa)(c),$r=c=>($r=Fn.ca)(c),$i=c=>($i=Fn.da)(c),Ta=c=>(Ta=Fn.ea)(c),Vs=(c,d)=>(Vs=Fn.fa)(c,d),sr=()=>(sr=Fn.ga)();p.dynCall_viijii=(c,d,x,y,C,z,G)=>(p.dynCall_viijii=Fn.ha)(c,d,x,y,C,z,G),p.dynCall_viiiiji=(c,d,x,y,C,z,G,Z)=>(p.dynCall_viiiiji=Fn.ia)(c,d,x,y,C,z,G,Z),p.dynCall_jiji=(c,d,x,y,C)=>(p.dynCall_jiji=Fn.ja)(c,d,x,y,C),p.dynCall_iiiiij=(c,d,x,y,C,z,G)=>(p.dynCall_iiiiij=Fn.ka)(c,d,x,y,C,z,G),p.dynCall_iiiiijj=(c,d,x,y,C,z,G,Z,ve)=>(p.dynCall_iiiiijj=Fn.la)(c,d,x,y,C,z,G,Z,ve),p.dynCall_iiiiiijj=(c,d,x,y,C,z,G,Z,ve,Fe)=>(p.dynCall_iiiiiijj=Fn.ma)(c,d,x,y,C,z,G,Z,ve,Fe);var or,nl;rn=function c(){or||ua(),or||(rn=c)};function ua(){if(yt>0||!nl&&(nl=1,et(),yt>0))return;function c(){or||(or=1,p.calledRun=1,!O&&(me(),m(p),p.onRuntimeInitialized?.(),Se()))}p.setStatus?(p.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>p.setStatus(""),1),c()},1)):c()}if(p.preInit)for(typeof p.preInit=="function"&&(p.preInit=[p.preInit]);p.preInit.length>0;)p.preInit.pop()();return ua(),f=g,f})})();o.exports=i})(ip)),ip.exports}var vT=_T();const yT=Ay(vT),ST="/step-3d-viewer/assets/occt-import-js-BhHfLpto.wasm";let rp=null;const bT={linearUnit:"millimeter",linearDeflectionType:"bounding_box_ratio",linearDeflection:.003,angularDeflection:.4};function R_(){return rp||(rp=yT({locateFile:()=>ST})),rp}const MT="Перетащите .step/.stp файл в область просмотра или воспользуйтесь панелью управления.",ET="Загружаем движок OpenCascade...",ov=o=>{if(!o)return"";const e=o.replace(/"/g,"").trim();return e||""},TT=o=>{const e=new Map;if(!o)return e;const i=(r,l)=>{const f=ov(r.name),p=f?[...l,f]:l;Array.isArray(r.meshes)&&r.meshes.forEach(m=>{if(typeof m=="number"&&!e.has(m)){const _=p[p.length-1]||f;_&&e.set(m,_)}}),r.children?.forEach(m=>i(m,p))};return i(o,[]),e};function AT(){const o=Ze.useRef(null),e=Ze.useRef(null),i=Ze.useRef(null),r=Ze.useRef(null),l=Ze.useRef(null),f=Ze.useRef(null),p=Ze.useRef(0),m=Ze.useRef(null),_=Ze.useRef(new hb),g=Ze.useRef(new Dt),b=Ze.useRef(null),S=Ze.useRef(new Map),E=Ze.useRef(null),A=-1e-4,[U,L]=Ze.useState(ET),[T,M]=Ze.useState(null),[X,H]=Ze.useState(!1),[q,Q]=Ze.useState(!1),[V,k]=Ze.useState(!1),[ue,F]=Ze.useState(!1),[O,K]=Ze.useState("#ffad0d"),[ae,le]=Ze.useState(null),[Te,Me]=Ze.useState(null),[B,$]=Ze.useState([]),te=Ze.useCallback(pe=>{const Ee=b.current;if(Ee&&Ee.material instanceof Fr){const P=Ee.userData.baseEmissiveHex;typeof P=="number"&&Ee.material.emissive.setHex(P)}pe&&pe.material instanceof Fr?(pe.userData.baseEmissiveHex===void 0&&(pe.userData.baseEmissiveHex=pe.material.emissive.getHex()),pe.material.emissive.setHex(2964090),b.current=pe,le(pe.name||"Без имени"),Me(pe.uuid),typeof pe.userData.paintColorHex=="string"&&K(pe.userData.paintColorHex)):(b.current=null,le(null),Me(null))},[K]),Re=Ze.useCallback(pe=>{const Ee=m.current;Ee&&Ee.traverse(P=>{P instanceof Li&&pe(P)})},[]),ce=Ze.useCallback((pe,Ee)=>{const P=e.current,w=r.current,ne=m.current;if(!P||!w||!ne)return null;const be=P.domElement.getBoundingClientRect();g.current.x=(pe-be.left)/be.width*2-1,g.current.y=-((Ee-be.top)/be.height)*2+1,_.current.setFromCamera(g.current,w);const ee=_.current.intersectObjects(ne.children,!0).find(Ie=>Ie.object instanceof Li&&Ie.object.visible&&!Ie.object.userData?.extinguished);return ee?ee.object:null},[]),I=Ze.useCallback((pe,Ee)=>{const P=ce(pe,Ee);return te(P),!!P},[ce,te]),re=Ze.useCallback(()=>{const pe=m.current;if(!pe){$([]);return}const Ee=[];pe.traverse(P=>{P instanceof Li&&Ee.push({id:P.uuid,label:P.name||`Тело ${Ee.length+1}`,visible:P.visible})}),$(Ee)},[]),we=Ze.useCallback(pe=>{const Ee=S.current.get(pe);return te(Ee??null),!!Ee},[te]);Ze.useEffect(()=>{let pe=!0;return R_().then(()=>{pe&&(F(!0),L(MT))}).catch(Ee=>{console.error(Ee),pe&&(M("Не удалось загрузить движок OpenCascade"),L("Попробуйте обновить страницу"))}),()=>{pe=!1}},[]),Ze.useEffect(()=>{if(!o.current)return;const pe=new $S;pe.background=null,i.current=pe;const Ee=new tT({antialias:!0,alpha:!0});Ee.setClearColor(0,0),Ee.setPixelRatio(window.devicePixelRatio),e.current=Ee;const P=new qi(45,1,.1,2e3);P.position.set(4,4,4),r.current=P;const w=new iT(P,Ee.domElement);w.enableDamping=!0,w.dampingFactor=.08,l.current=w;const ne=new ub(16777215,.6),be=new Qx(16777215,.85);be.position.set(5,10,4);const De=new Qx(16777215,.45);De.position.set(-4,-6,-5),pe.add(ne,be,De);const ee=new db(60,60,3093826,1842985);ee.position.y=A,(Array.isArray(ee.material)?ee.material:[ee.material]).forEach(Oe=>{Oe.transparent=!0,Oe.opacity=.4,Oe.depthWrite=!1}),ee.visible=!0,E.current=ee,pe.add(ee);const Ge=o.current;Ge.appendChild(Ee.domElement);const ht=Oe=>{if(Oe.button===2)return;const tt=ce(Oe.clientX,Oe.clientY);te(tt)},Be=()=>{if(!Ge||!r.current)return;const{clientWidth:Oe,clientHeight:tt}=Ge;Ee.setSize(Oe,tt);const it=r.current;it.aspect=Oe/Math.max(tt,1),it.updateProjectionMatrix()};Be(),window.addEventListener("resize",Be),Ee.domElement.addEventListener("pointerdown",ht);const Ue=()=>{w.update(),Ee.render(pe,P),f.current=requestAnimationFrame(Ue)};return Ue(),()=>{window.removeEventListener("resize",Be),Ee.domElement.removeEventListener("pointerdown",ht),f.current&&cancelAnimationFrame(f.current),w.dispose(),Ee.dispose(),E.current&&i.current?.children.includes(E.current)&&i.current.remove(E.current),E.current=null,Ge.contains(Ee.domElement)&&Ge.removeChild(Ee.domElement)}},[te,ce]);const ze=Ze.useCallback(()=>{!i.current||!m.current||(i.current.remove(m.current),m.current.traverse(pe=>{pe instanceof Li&&(pe.geometry.dispose(),Array.isArray(pe.material)?pe.material.forEach(Ee=>Ee.dispose()):pe.material.dispose())}),m.current=null,S.current.clear(),$([]),E.current&&(E.current.visible=!0,E.current.position.y=A),te(null))},[te]),et=Ze.useCallback(pe=>{const Ee=r.current,P=l.current;if(!Ee||!P)return;pe.updateMatrixWorld(!0);const w=new Bo().setFromObject(pe),ne=w.getSize(new xe),be=w.getCenter(new xe);pe.position.sub(be);const De=Math.max(ne.x,ne.y,ne.z),ee=De===0?5:De*1.6,Ie=new xe(1.5,1,1.2).normalize();Ee.position.copy(Ie.multiplyScalar(ee)),Ee.near=Math.max(ee/200,.01),Ee.far=ee*20,Ee.updateProjectionMatrix(),P.target.set(0,0,0),P.update()},[]),me=Ze.useCallback(pe=>{if(!i.current)return;ze();const Ee=new Xl;S.current.clear();const P=TT(pe.root);pe.meshes.forEach((w,ne)=>{const be=new oa,De=w.attributes.position?.array??[];be.setAttribute("position",new Oi(De,3));const ee=w.attributes.normal?.array;ee?.length?be.setAttribute("normal",new Oi(ee,3)):be.computeVertexNormals(),w.index?.array?.length&&be.setIndex(w.index.array);const Ie=w.color??w.brep_faces?.find(je=>je.color)?.color??[.82,.86,.92],Ge=new Zt(Ie[0],Ie[1],Ie[2]),ht=new Fr({color:Ge,metalness:.15,roughness:.35,side:ga}),Be=`#${Ge.getHexString()}`,Ue=new Li(be,ht),Oe=`Тело ${ne+1}`,it=P.get(ne)||ov(w.name)||Oe;Ue.name=it,Ue.userData.originalColorHex=Be,Ue.userData.paintColorHex=Be,Ee.add(Ue),S.current.set(Ue.uuid,Ue)}),i.current.add(Ee),m.current=Ee,k(!0),et(Ee),E.current&&(E.current.visible=!1),te(null),re()},[ze,et,te,re]),Se=Ze.useCallback(()=>{const pe=b.current;return!pe||!(pe.material instanceof Fr)?!1:(pe.material.color.set(O),pe.material.needsUpdate=!0,pe.userData.paintColorHex=O,!0)},[O]),qe=Ze.useCallback(pe=>{const Ee=b.current;return!Ee||!(Ee.material instanceof Fr)?!1:(Ee.material.color.set(pe),Ee.material.needsUpdate=!0,Ee.userData.paintColorHex=pe,K(pe),!0)},[]),lt=Ze.useCallback(()=>{const pe=b.current;if(!pe||!(pe.material instanceof Fr))return!1;const Ee=pe.userData.originalColorHex||"#d5dde8";return pe.material.color.set(Ee),pe.material.needsUpdate=!0,pe.userData.paintColorHex=Ee,!0},[]),ft=Ze.useCallback(()=>{const pe=[];return Re(Ee=>{if(!(Ee.material instanceof Fr))return;const P=typeof Ee.userData.paintColorHex=="string"?Ee.userData.paintColorHex:`#${Ee.material.color.getHexString()}`;pe.push({name:Ee.name||"",color:P,visible:Ee.visible})}),pe.length?{version:1,generatedAt:new Date().toISOString(),meshes:pe}:null},[Re]),yt=Ze.useCallback(pe=>{if(!pe||pe.version!==1)return!1;const Ee=new Map,P=[];return Re(w=>{P.push(w);const ne=w.name||"__noname__";Ee.has(ne)||Ee.set(ne,[]),Ee.get(ne).push(w)}),P.length?(pe.meshes.forEach((w,ne)=>{const be=w.name||"__noname__";let ee=Ee.get(be)?.shift();if(ee||(ee=P[ne]),!ee||!(ee.material instanceof Fr))return;const Ie=w.color||"#d5dde8";ee.material.color.set(Ie),ee.material.needsUpdate=!0,ee.userData.paintColorHex=Ie,ee.visible=w.visible!==!1}),(!b.current||!b.current.visible)&&te(null),re(),!0):!1},[Re,te,re]),rn=Ze.useCallback(()=>{const pe=b.current;return pe?(pe.visible=!1,pe.userData.extinguished=!0,te(null),re(),!0):!1},[re,te]),Tt=Ze.useCallback(async(pe,Ee)=>{H(!0),M(null),L(`Импортируем ${Ee}...`);try{const P=await R_(),w=new Uint8Array(pe),ne=P.ReadStepFile(w,bT);if(!ne?.success||!ne.meshes?.length)throw new Error("OCCT вернул пустой результат");me(ne),L(`Готово: ${Ee} (${ne.meshes.length} объектов)`)}catch(P){console.error(P),k(!1),E.current&&(E.current.visible=!0,E.current.position.y=A);const w=P instanceof Error?P.message:"Неизвестная ошибка при импорте файла";M(w),L("Импорт не удался")}finally{H(!1)}},[me]),Ot=Ze.useCallback(async pe=>{const Ee=await pe.arrayBuffer();await Tt(Ee,pe.name)},[Tt]),Y=Ze.useCallback(async pe=>{const Ee=pe.target.files?.[0];Ee&&await Ot(Ee),pe.target.value=""},[Ot]),Et=Ze.useCallback(async(pe,Ee="пример",P)=>{L(`Загружаем ${Ee}...`),M(null);try{const w=await fetch(pe);if(!w.ok)throw new Error("Не удалось получить пример");const ne=await w.arrayBuffer();await Tt(ne,P??`${Ee}.step`)}catch(w){console.error(w),M(w instanceof Error?w.message:"Ошибка загрузки примера"),L("Попробуйте другой файл")}},[Tt]),Ut=Ze.useCallback(async pe=>{pe.preventDefault(),p.current=0,Q(!1);const Ee=pe.dataTransfer.files?.[0];Ee&&await Ot(Ee)},[Ot]),Kt=Ze.useCallback(pe=>{pe.preventDefault(),pe.dataTransfer.dropEffect="copy"},[]),at=Ze.useCallback(pe=>{pe.preventDefault(),p.current+=1,Q(!0)},[]),nn=Ze.useCallback(pe=>{pe.preventDefault(),p.current=Math.max(p.current-1,0),p.current===0&&Q(!1)},[]);return{canvasHostRef:o,status:U,error:T,isLoading:X,occtReady:ue,hasModel:V,isDragActive:q,controlsDisabled:!ue||X,handleDragEnter:at,handleDragLeave:nn,handleDragOver:Kt,handleDrop:Ut,handleFileInput:Y,loadSample:Et,selectionColor:O,setSelectionColor:K,selectedMeshName:ae,selectedMeshId:Te,applyColorToSelection:Se,applyColorToSelectionWithValue:qe,resetSelectionColor:lt,extinguishSelection:rn,selectMeshAtScreenPosition:I,selectMeshById:we,serializeSceneState:ft,applySceneState:yt,meshTree:B}}function wT({canvasRef:o,hasModel:e,isDragActive:i,isLoading:r,isPanelOpen:l,panelId:f,onContextMenu:p,onTouchStart:m,onTouchMove:_,onTouchEnd:g,onDragEnter:b,onDragLeave:S,onDragOver:E,onDrop:A,onTogglePanel:U,children:L}){return We.jsxs("section",{className:`viewer ${i?"viewer--active":""}`,onContextMenu:p,onTouchStart:m,onTouchMove:_,onTouchEnd:g,onDragEnter:b,onDragOver:E,onDragLeave:S,onDrop:A,children:[We.jsx("div",{ref:o,className:"viewer__canvas"}),!e&&We.jsxs("div",{className:"viewer__placeholder",children:[We.jsx("p",{children:"Сюда можно перетащить .step/.stp файл."}),We.jsx("p",{className:"muted",children:"Либо воспользуйтесь панелью управления."})]}),i&&We.jsx("div",{className:"viewer__drop-hint",children:"Отпустите файл, чтобы начать импорт"}),r&&We.jsxs("div",{className:"viewer__loading","aria-live":"polite",children:[We.jsx("div",{className:"viewer__loading-spinner"}),We.jsx("p",{children:"Импортируем модель..."})]}),!l&&We.jsx("button",{type:"button",className:"panel-toggle","aria-expanded":!1,"aria-controls":f,onClick:U,children:"Меню"}),L]})}function RT({samples:o,disabled:e,onSelect:i}){return We.jsxs("section",{className:"sample-library","aria-label":"Библиотека примеров",children:[We.jsxs("div",{className:"sample-library__header",children:[We.jsx("p",{className:"section-label",children:"Библиотека примеров"}),We.jsx("span",{className:"sample-library__count",children:o.length})]}),We.jsxs("div",{className:"sample-library__list",children:[o.length===0&&We.jsxs("span",{className:"sample-library__empty",children:["Добавьте .step/.stp файлы в папку ",We.jsx("code",{children:"public/models"})]}),o.map(r=>We.jsxs("button",{type:"button",className:"sample-card",onClick:()=>i(r),disabled:e,title:`Открыть ${r.fileName}`,children:[We.jsx("span",{className:"sample-card__label",children:r.label}),We.jsx("span",{className:"sample-card__meta",children:r.fileName})]},r.fileName))]})]})}function CT({nodes:o,selectedId:e,onSelect:i,disabled:r}){return We.jsxs("div",{className:"model-tree",children:[We.jsxs("div",{className:"model-tree__header",children:[We.jsx("p",{className:"section-label",children:"Дерево модели"}),We.jsx("span",{className:"model-tree__count",children:o.length})]}),We.jsxs("div",{className:"model-tree__list",role:"tree",children:[o.map(l=>We.jsxs("button",{type:"button",role:"treeitem",className:"model-tree__item","data-selected":l.id===e,onClick:()=>i(l.id),disabled:r,"aria-selected":l.id===e,children:[We.jsx("span",{className:"model-tree__item-label",children:l.label}),!l.visible&&We.jsx("span",{className:"model-tree__item-muted",children:"скрыто"})]},l.id)),!o.length&&We.jsx("p",{className:"model-tree__empty",children:"Загрузите модель, чтобы увидеть список тел."})]})]})}function DT({className:o,ariaHidden:e,error:i,isLoading:r,controlsDisabled:l,onFileChange:f,onHidePanel:p,selectionColor:m,onSelectionColorChange:_,selectedMeshName:g,onApplyColor:b,onResetColor:S,colorPalette:E,onSelectPaletteColor:A,onAddPaletteColor:U,onRemovePaletteColor:L,canAddPaletteColor:T,onSaveSceneState:M,onLoadSceneState:X,sceneStateDisabled:H,samples:q,onSampleSelect:Q,modelTree:V,selectedMeshId:k,onSelectTreeNode:ue,children:F}){const O=Ze.useRef(null),K=ae=>{const le=ae.target.files?.[0];le&&X(le),ae.target.value=""};return We.jsxs("aside",{id:"control-panel",className:o,"aria-hidden":e,children:[We.jsx("button",{type:"button",className:"panel-close",onClick:p,"aria-label":"Скрыть меню",children:We.jsx("span",{"aria-hidden":"true",children:"←"})}),We.jsxs("div",{className:"panel__header",children:[We.jsx("p",{className:"eyebrow",children:"WebAssembly + three.js"}),We.jsx("h1",{children:"STEP 3D Viewer"})]}),We.jsxs("div",{className:"controls",children:[We.jsxs("label",{className:"file-input","data-disabled":l,children:[We.jsx("input",{type:"file",accept:".step,.stp,.STEP,.STP,model/step,application/step",onChange:f,disabled:l}),We.jsx("span",{children:"Выбрать .step файл"})]}),r&&We.jsx("div",{className:"loader","aria-live":"polite"})]}),We.jsx(RT,{samples:q,disabled:l,onSelect:Q}),We.jsx(CT,{nodes:V,selectedId:k,onSelect:ue,disabled:r}),i&&We.jsx("div",{className:"error-banner",children:i}),We.jsxs("div",{className:"color-controls",children:[We.jsxs("div",{className:"color-input",children:[We.jsx("label",{htmlFor:"color-picker",children:"Цвет"}),We.jsx("input",{id:"color-picker",type:"color",value:m,onChange:_,"aria-label":"Выбор цвета для выделения"})]}),We.jsxs("div",{className:"selection-info",children:[We.jsx("span",{className:"selection-label",children:g?`Выбрано: ${g}`:"Ничего не выбрано"}),We.jsxs("div",{className:"selection-actions",children:[We.jsx("button",{type:"button",className:"ghost",onClick:b,disabled:!g,children:"Применить"}),We.jsx("button",{type:"button",className:"ghost",onClick:S,disabled:!g,children:"Сбросить"})]})]})]}),We.jsxs("div",{className:"color-palette",children:[We.jsxs("div",{className:"color-palette__header",children:[We.jsx("p",{className:"section-label",children:"Палитра"}),We.jsx("button",{type:"button",className:"ghost",onClick:U,disabled:!T,children:"Добавить цвет"})]}),We.jsxs("div",{className:"color-palette__list",children:[E.map(ae=>We.jsxs("button",{type:"button",className:"color-swatch","aria-label":`Цвет ${ae}`,onClick:()=>A(ae),style:{background:ae},children:[We.jsx("span",{className:"color-swatch__value",children:ae.toUpperCase()}),We.jsx("span",{className:"color-swatch__remove",role:"button","aria-label":"Удалить цвет из палитры",onClick:le=>{le.stopPropagation(),L(ae)},children:"×"})]},ae)),E.length===0&&We.jsx("p",{className:"color-palette__empty",children:"Пока пусто — добавьте текущий цвет."})]})]}),We.jsxs("div",{className:"scene-state-actions",children:[We.jsx("p",{className:"section-label",children:"Изменения"}),We.jsxs("div",{className:"scene-state-actions__buttons",children:[We.jsx("button",{type:"button",className:"ghost",onClick:M,disabled:H,children:"Сохранить"}),We.jsx("button",{type:"button",className:"ghost",onClick:()=>O.current?.click(),disabled:H,children:"Загрузить"})]}),We.jsx("input",{ref:O,type:"file",accept:"application/json",onChange:K,style:{display:"none"}})]}),F]})}function UT({x:o,y:e,onExtinguish:i,onChangeColor:r,currentColor:l,palette:f,onPaletteColorSelect:p,canApplyColor:m}){const _=g=>{g.stopPropagation()};return We.jsxs("div",{className:"context-menu",style:{top:`${e}px`,left:`${o}px`},role:"menu",onClick:_,onPointerDown:_,children:[We.jsxs("div",{className:"context-menu__group",children:[We.jsx("p",{className:"context-menu__label",children:"Цвет выделения"}),We.jsx("input",{type:"color","aria-label":"Выбрать цвет выделенного тела",value:l,onChange:g=>r(g.target.value)})]}),f.length>0&&We.jsxs("div",{className:"context-menu__palette",children:[We.jsx("p",{className:"context-menu__label",children:"Палитра"}),We.jsx("div",{className:"context-menu__swatches",children:f.map(g=>We.jsx("button",{type:"button",className:"context-menu__swatch",style:{background:g},onClick:()=>p(g),disabled:!m,"aria-label":`Применить цвет ${g}`,children:g.toUpperCase()},g))})]}),We.jsx("button",{type:"button",role:"menuitem",onClick:i,children:"Погасить выделенное тело"})]})}function LT({theme:o,onToggle:e}){const i=o==="light"?"тёмную":"светлую";return We.jsxs("button",{type:"button",className:"theme-toggle",onClick:e,"aria-label":`Переключить на ${i} тему`,children:[We.jsx("span",{className:"theme-toggle__icon","aria-hidden":"true",children:o==="light"?"☾":"☀︎"}),o==="light"?"Тёмная":"Светлая"]})}const NT=[{fileName:"ins100.stp",url:"/step-3d-viewer/models/ins100.stp"},{fileName:"masterpact-lv864962.stp",url:"/step-3d-viewer/models/masterpact-lv864962.stp"},{fileName:"nsx-lv432956.stp",url:"/step-3d-viewer/models/nsx-lv432956.stp"},{fileName:"v3_ABC -Naked- Assembly.STEP",url:"/step-3d-viewer/models/v3_ABC -Naked- Assembly.STEP"}],OT=o=>o.replace(/\.(step|stp)$/i,"").replace(/[-_]+/g," "),PT=NT.map(({fileName:o,url:e})=>({label:OT(o),fileName:o,url:e})).sort((o,e)=>o.label.localeCompare(e.label,"ru")),Wu=o=>{if(typeof o!="string")return o;const e=o.trim().toLowerCase();return e.startsWith("#")?/^#[0-9a-f]{8}$/.test(e)?`#${e.slice(1,7)}`:/^#[0-9a-f]{6}$/.test(e)?e:/^#[0-9a-f]{4}$/.test(e)?`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:/^#[0-9a-f]{3}$/.test(e)?`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:e:e},FT=["#ff920dff","#4c6dffff","#8bc34aff","#ff0000ff"],zT=FT.map(o=>Wu(o)),lv="step-viewer-theme",BT=()=>{if(typeof window>"u")return"dark";const o=window.localStorage?.getItem(lv);return o==="dark"||o==="light"?o:window.matchMedia?.("(prefers-color-scheme: light)")?.matches?"light":"dark"};function IT(){const o=AT(),{selectMeshAtScreenPosition:e,selectedMeshName:i,serializeSceneState:r,applySceneState:l,hasModel:f}=o,[p,m]=Ze.useState(!1),[_,g]=Ze.useState(!1),[b,S]=Ze.useState(null),E=Ze.useRef(null),A=Ze.useRef(null),[U,L]=Ze.useState(zT),[T,M]=Ze.useState(()=>BT()),X=Ze.useCallback(()=>{M(ce=>ce==="dark"?"light":"dark")},[]);Ze.useEffect(()=>{typeof window>"u"||window.localStorage?.setItem(lv,T)},[T]),Ze.useEffect(()=>{const ce=window.matchMedia("(max-width: 768px)"),I=we=>{g(we),we&&m(!1)};I(ce.matches);const re=we=>{I(we.matches),we.matches&&m(!1)};return ce.addEventListener?ce.addEventListener("change",re):ce.addListener(re),()=>{ce.removeEventListener?ce.removeEventListener("change",re):ce.removeListener(re)}},[]);const H=Ze.useMemo(()=>["control-panel",_?"control-panel--mobile":"",p?"control-panel--open":"control-panel--collapsed"].filter(Boolean).join(" "),[_,p]),q="control-panel",Q=Ze.useMemo(()=>Wu(o.selectionColor),[o.selectionColor]),V=Ze.useMemo(()=>!U.includes(Q),[U,Q]),k=Ze.useCallback(()=>{const ce=r();if(!ce){alert("Нет модели для сохранения.");return}const I=new Blob([JSON.stringify(ce,null,2)],{type:"application/json"}),re=URL.createObjectURL(I),we=document.createElement("a");we.href=re,we.download=`step-viewer-state-${new Date().toISOString().replace(/[:.]/g,"-")}.json`,we.click(),URL.revokeObjectURL(re)},[r]),ue=Ze.useCallback(async ce=>{try{const I=await ce.text(),re=JSON.parse(I);l(re)||alert("Не удалось применить сохранённое состояние.")}catch(I){console.error(I),alert("Не удалось прочитать файл состояния.")}},[l]),F=Ze.useCallback(ce=>{o.setSelectionColor(Wu(ce))},[o]),O=Ze.useCallback(()=>{L(ce=>ce.includes(Q)?ce:[...ce,Q])},[Q]),K=Ze.useCallback(ce=>{L(I=>I.filter(re=>re!==ce))},[]),ae=Ze.useCallback(ce=>{const I=Wu(ce);o.applyColorToSelectionWithValue(I),S(null)},[o]),le=Ze.useCallback(()=>{E.current!==null&&(window.clearTimeout(E.current),E.current=null)},[]),Te=Ze.useCallback((ce,I)=>!e(ce,I)&&!i?(S(null),!1):(S({x:ce,y:I}),!0),[e,i]),Me=Ze.useCallback(ce=>{ce.preventDefault(),ce.stopPropagation(),Te(ce.clientX,ce.clientY)},[Te]),B=Ze.useCallback(ce=>{if(ce.touches.length!==1){le();return}const I=ce.touches[0];A.current={x:I.clientX,y:I.clientY},le(),E.current=window.setTimeout(()=>{const re=A.current;re&&(Te(re.x,re.y),le())},550)},[le,Te]),$=Ze.useCallback(ce=>{if(!A.current)return;const I=ce.touches[0],re=I.clientX-A.current.x,we=I.clientY-A.current.y;Math.hypot(re,we)>15&&le()},[le]),te=Ze.useCallback(()=>{le(),A.current=null},[le]);Ze.useEffect(()=>{if(!b)return;const ce=re=>{re.button!==0&&re.pointerType!=="touch"||S(null)},I=()=>S(null);return window.addEventListener("pointerdown",ce),window.addEventListener("resize",I),()=>{window.removeEventListener("pointerdown",ce),window.removeEventListener("resize",I)}},[b]),Ze.useEffect(()=>()=>{le()},[le]),Ze.useEffect(()=>{i||S(null)},[i]);const Re=()=>{o.extinguishSelection(),S(null)};return We.jsx("div",{className:"app","data-panel-open":p,"data-mobile-layout":_,"data-theme":T,children:We.jsxs(wT,{canvasRef:o.canvasHostRef,hasModel:o.hasModel,isDragActive:o.isDragActive,isLoading:o.isLoading,isPanelOpen:p,panelId:q,onContextMenu:Me,onTouchStart:B,onTouchMove:$,onTouchEnd:te,onDragEnter:o.handleDragEnter,onDragLeave:o.handleDragLeave,onDragOver:o.handleDragOver,onDrop:o.handleDrop,onTogglePanel:()=>m(!0),children:[We.jsx(DT,{className:H,ariaHidden:!p,error:o.error,isLoading:o.isLoading,controlsDisabled:o.controlsDisabled,onFileChange:o.handleFileInput,onHidePanel:()=>m(!1),selectionColor:o.selectionColor,onSelectionColorChange:ce=>o.setSelectionColor(ce.target.value),selectedMeshName:o.selectedMeshName,onApplyColor:o.applyColorToSelection,onResetColor:o.resetSelectionColor,colorPalette:U,onSelectPaletteColor:F,onAddPaletteColor:O,onRemovePaletteColor:K,canAddPaletteColor:V,onSaveSceneState:k,onLoadSceneState:ue,sceneStateDisabled:!f,samples:PT,onSampleSelect:ce=>o.loadSample(ce.url,ce.label,ce.fileName),modelTree:o.meshTree,selectedMeshId:o.selectedMeshId,onSelectTreeNode:ce=>o.selectMeshById(ce)}),We.jsx(LT,{theme:T,onToggle:X}),b&&We.jsx(UT,{x:b.x,y:b.y,onExtinguish:Re,onChangeColor:ce=>o.applyColorToSelectionWithValue(ce),currentColor:o.selectionColor,palette:U,onPaletteColorSelect:ae,canApplyColor:!!o.selectedMeshName})]})})}zy.createRoot(document.getElementById("root")).render(We.jsx(Ze.StrictMode,{children:We.jsx(IT,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/step-3d-viewer/sw.js").catch(e=>{console.error("Service worker registration failed:",e)})});
