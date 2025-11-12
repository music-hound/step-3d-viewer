(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function My(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function Ey(o){if(Object.prototype.hasOwnProperty.call(o,"__esModule"))return o;var e=o.default;if(typeof e=="function"){var i=function r(){var l=!1;try{l=this instanceof r}catch{}return l?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(o).forEach(function(r){var l=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(i,r,l.get?l:{enumerable:!0,get:function(){return o[r]}})}),i}var xd={exports:{}},Ol={};var cg;function Ty(){if(cg)return Ol;cg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var p=null;if(f!==void 0&&(p=""+f),l.key!==void 0&&(p=""+l.key),"key"in l){f={};for(var m in l)m!=="key"&&(f[m]=l[m])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:p,ref:l!==void 0?l:null,props:f}}return Ol.Fragment=e,Ol.jsx=i,Ol.jsxs=i,Ol}var ug;function Ay(){return ug||(ug=1,xd.exports=Ty()),xd.exports}var Et=Ay(),vd={exports:{}},Dt={};var fg;function Ry(){if(fg)return Dt;fg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),E=Symbol.iterator;function A(H){return H===null||typeof H!="object"?null:(H=E&&H[E]||H["@@iterator"],typeof H=="function"?H:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,T={};function M(H,me,De){this.props=H,this.context=me,this.refs=T,this.updater=De||U}M.prototype.isReactComponent={},M.prototype.setState=function(H,me){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,me,"setState")},M.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function X(){}X.prototype=M.prototype;function I(H,me,De){this.props=H,this.context=me,this.refs=T,this.updater=De||U}var Y=I.prototype=new X;Y.constructor=I,N(Y,M.prototype),Y.isPureReactComponent=!0;var ee=Array.isArray;function V(){}var k={H:null,A:null,T:null,S:null},he=Object.prototype.hasOwnProperty;function P(H,me,De){var Fe=De.ref;return{$$typeof:o,type:H,key:me,ref:Fe!==void 0?Fe:null,props:De}}function O(H,me){return P(H.type,me,H.props)}function J(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function se(H){var me={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(De){return me[De]})}var ue=/\/+/g;function Me(H,me){return typeof H=="object"&&H!==null&&H.key!=null?se(""+H.key):me.toString(36)}function Se(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(V,V):(H.status="pending",H.then(function(me){H.status==="pending"&&(H.status="fulfilled",H.value=me)},function(me){H.status==="pending"&&(H.status="rejected",H.reason=me)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function z(H,me,De,Fe,$e){var de=typeof H;(de==="undefined"||de==="boolean")&&(H=null);var Q=!1;if(H===null)Q=!0;else switch(de){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(H.$$typeof){case o:case e:Q=!0;break;case S:return Q=H._init,z(Q(H._payload),me,De,Fe,$e)}}if(Q)return $e=$e(H),Q=Fe===""?"."+Me(H,0):Fe,ee($e)?(De="",Q!=null&&(De=Q.replace(ue,"$&/")+"/"),z($e,me,De,"",function(ke){return ke})):$e!=null&&(J($e)&&($e=O($e,De+($e.key==null||H&&H.key===$e.key?"":(""+$e.key).replace(ue,"$&/")+"/")+Q)),me.push($e)),1;Q=0;var ye=Fe===""?".":Fe+":";if(ee(H))for(var Ie=0;Ie<H.length;Ie++)Fe=H[Ie],de=ye+Me(Fe,Ie),Q+=z(Fe,me,De,de,$e);else if(Ie=A(H),typeof Ie=="function")for(H=Ie.call(H),Ie=0;!(Fe=H.next()).done;)Fe=Fe.value,de=ye+Me(Fe,Ie++),Q+=z(Fe,me,De,de,$e);else if(de==="object"){if(typeof H.then=="function")return z(Se(H),me,De,Fe,$e);throw me=String(H),Error("Objects are not valid as a React child (found: "+(me==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":me)+"). If you meant to render a collection of children, use an array instead.")}return Q}function $(H,me,De){if(H==null)return H;var Fe=[],$e=0;return z(H,Fe,"","",function(de){return me.call(De,de,$e++)}),Fe}function ie(H){if(H._status===-1){var me=H._result;me=me(),me.then(function(De){(H._status===0||H._status===-1)&&(H._status=1,H._result=De)},function(De){(H._status===0||H._status===-1)&&(H._status=2,H._result=De)}),H._status===-1&&(H._status=0,H._result=me)}if(H._status===1)return H._result.default;throw H._result}var Te=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var me=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(me))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)},Ce={map:$,forEach:function(H,me,De){$(H,function(){me.apply(this,arguments)},De)},count:function(H){var me=0;return $(H,function(){me++}),me},toArray:function(H){return $(H,function(me){return me})||[]},only:function(H){if(!J(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return Dt.Activity=b,Dt.Children=Ce,Dt.Component=M,Dt.Fragment=i,Dt.Profiler=l,Dt.PureComponent=I,Dt.StrictMode=r,Dt.Suspense=x,Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,Dt.__COMPILER_RUNTIME={__proto__:null,c:function(H){return k.H.useMemoCache(H)}},Dt.cache=function(H){return function(){return H.apply(null,arguments)}},Dt.cacheSignal=function(){return null},Dt.cloneElement=function(H,me,De){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var Fe=N({},H.props),$e=H.key;if(me!=null)for(de in me.key!==void 0&&($e=""+me.key),me)!he.call(me,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&me.ref===void 0||(Fe[de]=me[de]);var de=arguments.length-2;if(de===1)Fe.children=De;else if(1<de){for(var Q=Array(de),ye=0;ye<de;ye++)Q[ye]=arguments[ye+2];Fe.children=Q}return P(H.type,$e,Fe)},Dt.createContext=function(H){return H={$$typeof:p,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},Dt.createElement=function(H,me,De){var Fe,$e={},de=null;if(me!=null)for(Fe in me.key!==void 0&&(de=""+me.key),me)he.call(me,Fe)&&Fe!=="key"&&Fe!=="__self"&&Fe!=="__source"&&($e[Fe]=me[Fe]);var Q=arguments.length-2;if(Q===1)$e.children=De;else if(1<Q){for(var ye=Array(Q),Ie=0;Ie<Q;Ie++)ye[Ie]=arguments[Ie+2];$e.children=ye}if(H&&H.defaultProps)for(Fe in Q=H.defaultProps,Q)$e[Fe]===void 0&&($e[Fe]=Q[Fe]);return P(H,de,$e)},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(H){return{$$typeof:m,render:H}},Dt.isValidElement=J,Dt.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:ie}},Dt.memo=function(H,me){return{$$typeof:_,type:H,compare:me===void 0?null:me}},Dt.startTransition=function(H){var me=k.T,De={};k.T=De;try{var Fe=H(),$e=k.S;$e!==null&&$e(De,Fe),typeof Fe=="object"&&Fe!==null&&typeof Fe.then=="function"&&Fe.then(V,Te)}catch(de){Te(de)}finally{me!==null&&De.types!==null&&(me.types=De.types),k.T=me}},Dt.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},Dt.use=function(H){return k.H.use(H)},Dt.useActionState=function(H,me,De){return k.H.useActionState(H,me,De)},Dt.useCallback=function(H,me){return k.H.useCallback(H,me)},Dt.useContext=function(H){return k.H.useContext(H)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(H,me){return k.H.useDeferredValue(H,me)},Dt.useEffect=function(H,me){return k.H.useEffect(H,me)},Dt.useEffectEvent=function(H){return k.H.useEffectEvent(H)},Dt.useId=function(){return k.H.useId()},Dt.useImperativeHandle=function(H,me,De){return k.H.useImperativeHandle(H,me,De)},Dt.useInsertionEffect=function(H,me){return k.H.useInsertionEffect(H,me)},Dt.useLayoutEffect=function(H,me){return k.H.useLayoutEffect(H,me)},Dt.useMemo=function(H,me){return k.H.useMemo(H,me)},Dt.useOptimistic=function(H,me){return k.H.useOptimistic(H,me)},Dt.useReducer=function(H,me,De){return k.H.useReducer(H,me,De)},Dt.useRef=function(H){return k.H.useRef(H)},Dt.useState=function(H){return k.H.useState(H)},Dt.useSyncExternalStore=function(H,me,De){return k.H.useSyncExternalStore(H,me,De)},Dt.useTransition=function(){return k.H.useTransition()},Dt.version="19.2.0",Dt}var hg;function Zp(){return hg||(hg=1,vd.exports=Ry()),vd.exports}var Ft=Zp(),yd={exports:{}},Pl={},Sd={exports:{}},bd={};var dg;function wy(){return dg||(dg=1,(function(o){function e(z,$){var ie=z.length;z.push($);e:for(;0<ie;){var Te=ie-1>>>1,Ce=z[Te];if(0<l(Ce,$))z[Te]=$,z[ie]=Ce,ie=Te;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],ie=z.pop();if(ie!==$){z[0]=ie;e:for(var Te=0,Ce=z.length,H=Ce>>>1;Te<H;){var me=2*(Te+1)-1,De=z[me],Fe=me+1,$e=z[Fe];if(0>l(De,ie))Fe<Ce&&0>l($e,De)?(z[Te]=$e,z[Fe]=ie,Te=Fe):(z[Te]=De,z[me]=ie,Te=me);else if(Fe<Ce&&0>l($e,ie))z[Te]=$e,z[Fe]=ie,Te=Fe;else break e}}return $}function l(z,$){var ie=z.sortIndex-$.sortIndex;return ie!==0?ie:z.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var p=Date,m=p.now();o.unstable_now=function(){return p.now()-m}}var x=[],_=[],S=1,b=null,E=3,A=!1,U=!1,N=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function Y(z){for(var $=i(_);$!==null;){if($.callback===null)r(_);else if($.startTime<=z)r(_),$.sortIndex=$.expirationTime,e(x,$);else break;$=i(_)}}function ee(z){if(N=!1,Y(z),!U)if(i(x)!==null)U=!0,V||(V=!0,se());else{var $=i(_);$!==null&&Se(ee,$.startTime-z)}}var V=!1,k=-1,he=5,P=-1;function O(){return T?!0:!(o.unstable_now()-P<he)}function J(){if(T=!1,V){var z=o.unstable_now();P=z;var $=!0;try{e:{U=!1,N&&(N=!1,X(k),k=-1),A=!0;var ie=E;try{t:{for(Y(z),b=i(x);b!==null&&!(b.expirationTime>z&&O());){var Te=b.callback;if(typeof Te=="function"){b.callback=null,E=b.priorityLevel;var Ce=Te(b.expirationTime<=z);if(z=o.unstable_now(),typeof Ce=="function"){b.callback=Ce,Y(z),$=!0;break t}b===i(x)&&r(x),Y(z)}else r(x);b=i(x)}if(b!==null)$=!0;else{var H=i(_);H!==null&&Se(ee,H.startTime-z),$=!1}}break e}finally{b=null,E=ie,A=!1}$=void 0}}finally{$?se():V=!1}}}var se;if(typeof I=="function")se=function(){I(J)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Me=ue.port2;ue.port1.onmessage=J,se=function(){Me.postMessage(null)}}else se=function(){M(J,0)};function Se(z,$){k=M(function(){z(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(z){switch(E){case 1:case 2:case 3:var $=3;break;default:$=E}var ie=E;E=$;try{return z()}finally{E=ie}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=E;E=z;try{return $()}finally{E=ie}},o.unstable_scheduleCallback=function(z,$,ie){var Te=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Te+ie:Te):ie=Te,z){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=ie+Ce,z={id:S++,callback:$,priorityLevel:z,startTime:ie,expirationTime:Ce,sortIndex:-1},ie>Te?(z.sortIndex=ie,e(_,z),i(x)===null&&z===i(_)&&(N?(X(k),k=-1):N=!0,Se(ee,ie-Te))):(z.sortIndex=Ce,e(x,z),U||A||(U=!0,V||(V=!0,se()))),z},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(z){var $=E;return function(){var ie=E;E=$;try{return z.apply(this,arguments)}finally{E=ie}}}})(bd)),bd}var pg;function Cy(){return pg||(pg=1,Sd.exports=wy()),Sd.exports}var Md={exports:{}},ri={};var mg;function Dy(){if(mg)return ri;mg=1;var o=Zp();function e(x){var _="https://react.dev/errors/"+x;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)_+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function f(x,_,S){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:x,containerInfo:_,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,_){if(x==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return ri.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ri.createPortal=function(x,_){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return f(x,_,null,S)},ri.flushSync=function(x){var _=p.T,S=r.p;try{if(p.T=null,r.p=2,x)return x()}finally{p.T=_,r.p=S,r.d.f()}},ri.preconnect=function(x,_){typeof x=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(x,_))},ri.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},ri.preinit=function(x,_){if(typeof x=="string"&&_&&typeof _.as=="string"){var S=_.as,b=m(S,_.crossOrigin),E=typeof _.integrity=="string"?_.integrity:void 0,A=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;S==="style"?r.d.S(x,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:b,integrity:E,fetchPriority:A}):S==="script"&&r.d.X(x,{crossOrigin:b,integrity:E,fetchPriority:A,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},ri.preinitModule=function(x,_){if(typeof x=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var S=m(_.as,_.crossOrigin);r.d.M(x,{crossOrigin:S,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&r.d.M(x)},ri.preload=function(x,_){if(typeof x=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var S=_.as,b=m(S,_.crossOrigin);r.d.L(x,S,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},ri.preloadModule=function(x,_){if(typeof x=="string")if(_){var S=m(_.as,_.crossOrigin);r.d.m(x,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:S,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else r.d.m(x)},ri.requestFormReset=function(x){r.d.r(x)},ri.unstable_batchedUpdates=function(x,_){return x(_)},ri.useFormState=function(x,_,S){return p.H.useFormState(x,_,S)},ri.useFormStatus=function(){return p.H.useHostTransitionStatus()},ri.version="19.2.0",ri}var _g;function Uy(){if(_g)return Md.exports;_g=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Md.exports=Dy(),Md.exports}var gg;function Ly(){if(gg)return Pl;gg=1;var o=Cy(),e=Zp(),i=Uy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function p(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function x(t){if(f(t)!==t)throw Error(r(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return x(u),t;if(h===s)return x(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=h;else{for(var v=!1,D=u.child;D;){if(D===a){v=!0,a=u,s=h;break}if(D===s){v=!0,s=u,a=h;break}D=D.sibling}if(!v){for(D=h.child;D;){if(D===a){v=!0,a=h,s=u;break}if(D===s){v=!0,s=h,a=u;break}D=D.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,E=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),I=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function Me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case ee:return"Suspense";case V:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case I:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:Me(t.type)||"Memo";case he:n=t._payload,t=t._init;try{return Me(t(n))}catch{}}return null}var Se=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Te=[],Ce=-1;function H(t){return{current:t}}function me(t){0>Ce||(t.current=Te[Ce],Te[Ce]=null,Ce--)}function De(t,n){Ce++,Te[Ce]=t.current,t.current=n}var Fe=H(null),$e=H(null),de=H(null),Q=H(null);function ye(t,n){switch(De(de,n),De($e,t),De(Fe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?L_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=L_(n),t=N_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}me(Fe),De(Fe,t)}function Ie(){me(Fe),me($e),me(de)}function ke(t){t.memoizedState!==null&&De(Q,t);var n=Fe.current,a=N_(n,t.type);n!==a&&(De($e,t),De(Fe,a))}function tt(t){$e.current===t&&(me(Fe),me($e)),Q.current===t&&(me(Q),Dl._currentValue=ie)}var Jt,_t;function At(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+_t}var W=!1;function gt(t,n){if(!t||W)return"";W=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(ve){var pe=ve}Reflect.construct(t,[],we)}else{try{we.call()}catch(ve){pe=ve}t.call(we.prototype)}}else{try{throw Error()}catch(ve){pe=ve}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(ve){if(ve&&pe&&typeof ve.stack=="string")return[ve.stack,pe.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),v=h[0],D=h[1];if(v&&D){var q=v.split(`
`),fe=D.split(`
`);for(u=s=0;s<q.length&&!q[s].includes("DetermineComponentFrameRoot");)s++;for(;u<fe.length&&!fe[u].includes("DetermineComponentFrameRoot");)u++;if(s===q.length||u===fe.length)for(s=q.length-1,u=fe.length-1;1<=s&&0<=u&&q[s]!==fe[u];)u--;for(;1<=s&&0<=u;s--,u--)if(q[s]!==fe[u]){if(s!==1||u!==1)do if(s--,u--,0>u||q[s]!==fe[u]){var be=`
`+q[s].replace(" at new "," at ");return t.displayName&&be.includes("<anonymous>")&&(be=be.replace("<anonymous>",t.displayName)),be}while(1<=s&&0<=u);break}}}finally{W=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?At(a):""}function Tt(t,n){switch(t.tag){case 26:case 27:case 5:return At(t.type);case 16:return At("Lazy");case 13:return t.child!==n&&n!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return At("Activity");default:return""}}function Vt(t){try{var n="",a=null;do n+=Tt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var qe=Object.prototype.hasOwnProperty,Lt=o.unstable_scheduleCallback,st=o.unstable_cancelCallback,yt=o.unstable_shouldYield,B=o.unstable_requestPaint,w=o.unstable_now,oe=o.unstable_getCurrentPriorityLevel,Ae=o.unstable_ImmediatePriority,Le=o.unstable_UserBlockingPriority,re=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,We=o.unstable_IdlePriority,dt=o.log,He=o.unstable_setDisableYieldValue,Ne=null,Pe=null;function ot(t){if(typeof dt=="function"&&He(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(Ne,t)}catch{}}var lt=Math.clz32?Math.clz32:j,Ye=Math.log,vt=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Ye(t)/vt|0)|0}var Xe=256,Ve=262144,Ge=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Re(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,h=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var D=s&134217727;return D!==0?(s=D&~h,s!==0?u=Ue(s):(v&=D,v!==0?u=Ue(v):a||(a=D&~t,a!==0&&(u=Ue(a))))):(D=s&~h,D!==0?u=Ue(D):v!==0?u=Ue(v):a||(a=s&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Mt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var t=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),t}function $t(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Yn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,n,a,s,u,h){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var D=t.entanglements,q=t.expirationTimes,fe=t.hiddenUpdates;for(a=v&~a;0<a;){var be=31-lt(a),we=1<<be;D[be]=0,q[be]=-1;var pe=fe[be];if(pe!==null)for(fe[be]=null,be=0;be<pe.length;be++){var ve=pe[be];ve!==null&&(ve.lane&=-536870913)}a&=~we}s!==0&&Ts(t,s,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(v&~n))}function Ts(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-lt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Vr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-lt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Gr(t,n){var a=n&-n;return a=(a&42)!==0?1:ci(a),(a&(t.suspendedLanes|n))!==0?0:a}function ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function R(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Sa(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:ng(t.type))}function Gt(t,n){var a=$.p;try{return $.p=t,n()}finally{$.p=a}}var ui=Math.random().toString(36).slice(2),En="__reactFiber$"+ui,yn="__reactProps$"+ui,ni="__reactContainer$"+ui,tr="__reactEvents$"+ui,Ho="__reactListeners$"+ui,Vo="__reactHandles$"+ui,As="__reactResources$"+ui,ba="__reactMarker$"+ui;function kr(t){delete t[En],delete t[yn],delete t[tr],delete t[Ho],delete t[Vo]}function la(t){var n=t[En];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ni]||a[En]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=H_(t);t!==null;){if(a=t[En])return a;t=H_(t)}return n}t=a,a=t.parentNode}return null}function L(t){if(t=t[En]||t[ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function te(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ge(t){var n=t[As];return n||(n=t[As]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function le(t){t[ba]=!0}var ae=new Set,Be={};function ze(t,n){Ke(t,n),Ke(t+"Capture",n)}function Ke(t,n){for(Be[t]=n,t=0;t<n.length;t++)ae.add(n[t])}var Qe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pt={},xt={};function at(t){return qe.call(xt,t)?!0:qe.call(pt,t)?!1:Qe.test(t)?xt[t]=!0:(pt[t]=!0,!1)}function Ct(t,n,a){if(at(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Yt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function en(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ut(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,h=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,h.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function sn(t){if(!t._valueTracker){var n=Bt(t)?"checked":"value";t._valueTracker=ut(t,n,""+t[n])}}function Ht(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Bt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function cn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oi=/[\n"\\]/g;function un(t){return t.replace(Oi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Yi(t,n,a,s,u,h,v,D){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+kt(n)):t.value!==""+kt(n)&&(t.value=""+kt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,v,kt(n)):a!=null?Tn(t,v,kt(a)):s!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+kt(D):t.removeAttribute("name")}function Rt(t,n,a,s,u,h,v,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){sn(t);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,D||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=D?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),sn(t)}function Tn(t,n,a){n==="number"&&cn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Un(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pn(t,n,a){if(n!=null&&(n=""+kt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+kt(a):""}function Gn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Se(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=kt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),sn(t)}function Pi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var mi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Go(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||mi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ko(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Go(t,u,s)}else for(var h in n)n.hasOwnProperty(h)&&Go(t,h,n[h])}function Rs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),af=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ws(t){return af.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var Xo=null;function Wo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,Zi=null;function qo(t){var n=L(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Yi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[yn]||null;if(!u)throw Error(r(90));Yi(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ht(s)}break e;case"textarea":Pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Un(t,!!a.multiple,n,!1)}}}var Cs=!1;function $l(t,n,a){if(Cs)return t(n,a);Cs=!0;try{var s=t(n);return s}finally{if(Cs=!1,(nr!==null||Zi!==null)&&(jc(),nr&&(n=nr,t=Zi,Zi=nr=null,qo(n),t)))for(n=0;n<t.length;n++)qo(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(Ki)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{Yo=!1}var Qi=null,jo=null,Ds=null;function ec(){if(Ds)return Ds;var t,n=jo,a=n.length,s,u="value"in Qi?Qi.value:Qi.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[h-s];s++);return Ds=u.slice(t,1<s?1-s:void 0)}function Us(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ls(){return!0}function tc(){return!1}function Ln(t){function n(a,s,u,h,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ls:tc,this.isPropagationStopped=tc,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),n}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wr=Ln(Ma),qr=b({},Ma,{view:0,detail:0}),rf=Ln(qr),Zo,Ko,Yr,Ns=b({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(Zo=t.screenX-Yr.screenX,Ko=t.screenY-Yr.screenY):Ko=Zo=0,Yr=t),Zo)},movementY:function(t){return"movementY"in t?t.movementY:Ko}}),nc=Ln(Ns),sf=b({},Ns,{dataTransfer:0}),of=Ln(sf),lf=b({},qr,{relatedTarget:0}),Os=Ln(lf),Ps=b({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),cf=Ln(Ps),ca=b({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uf=Ln(ca),ff=b({},Ma,{data:0}),Fs=Ln(ff),ic={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qo(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=df[t])?!!n[t]:!1}function jr(){return Qo}var pf=b({},qr,{key:function(t){if(t.key){var n=ic[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jr,charCode:function(t){return t.type==="keypress"?Us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ac=Ln(pf),mf=b({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=Ln(mf),_f=b({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jr}),gf=Ln(_f),xf=b({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Ln(xf),yf=b({},Ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=Ln(yf),bf=b({},Ma,{newState:0,oldState:0}),Mf=Ln(bf),Ef=[9,13,27,32],Jo=Ki&&"CompositionEvent"in window,Zr=null;Ki&&"documentMode"in document&&(Zr=document.documentMode);var Tf=Ki&&"TextEvent"in window&&!Zr,sc=Ki&&(!Jo||Zr&&8<Zr&&11>=Zr),oc=" ",zs=!1;function lc(t,n){switch(t){case"keyup":return Ef.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function Af(t,n){switch(t){case"compositionend":return cc(n);case"keypress":return n.which!==32?null:(zs=!0,oc);case"textInput":return t=n.data,t===oc&&zs?null:t;default:return null}}function Rf(t,n){if(ar)return t==="compositionend"||!Jo&&lc(t,n)?(t=ec(),Ds=jo=Qi=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sc&&n.locale!=="ko"?null:n.data;default:return null}}var Bs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Bs[t.type]:n==="textarea"}function fc(t,n,a,s){nr?Zi?Zi.push(s):Zi=[s]:nr=s,n=tu(n,"onChange"),0<n.length&&(a=new Wr("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var rr=null,Kr=null;function wf(t){A_(t,0)}function Is(t){var n=te(t);if(Ht(n))return t}function Hs(t,n){if(t==="change")return n}var hc=!1;if(Ki){var Ea;if(Ki){var $o="oninput"in document;if(!$o){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),$o=typeof dc.oninput=="function"}Ea=$o}else Ea=!1;hc=Ea&&(!document.documentMode||9<document.documentMode)}function pc(){rr&&(rr.detachEvent("onpropertychange",mc),Kr=rr=null)}function mc(t){if(t.propertyName==="value"&&Is(Kr)){var n=[];fc(n,Kr,t,Wo(t)),$l(wf,n)}}function Cf(t,n,a){t==="focusin"?(pc(),rr=n,Kr=a,rr.attachEvent("onpropertychange",mc)):t==="focusout"&&pc()}function Df(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Is(Kr)}function Uf(t,n){if(t==="click")return Is(n)}function Lf(t,n){if(t==="input"||t==="change")return Is(n)}function Nf(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:Nf;function Qr(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!qe.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function _c(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gc(t,n){var a=_c(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_c(a)}}function Fn(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fn(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function el(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=cn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=cn(t.document)}return n}function Jr(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ji=Ki&&"documentMode"in document&&11>=document.documentMode,Ta=null,Vs=null,sr=null,or=!1;function tl(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;or||Ta==null||Ta!==cn(s)||(s=Ta,"selectionStart"in s&&Jr(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),sr&&Qr(sr,s)||(sr=s,s=tu(Vs,"onSelect"),0<s.length&&(n=new Wr("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ta)))}function ua(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var c={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},d={},g={};Ki&&(g=document.createElement("div").style,"AnimationEvent"in window||(delete c.animationend.animation,delete c.animationiteration.animation,delete c.animationstart.animation),"TransitionEvent"in window||delete c.transitionend.transition);function y(t){if(d[t])return d[t];if(!c[t])return t;var n=c[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in g)return d[t]=n[a];return t}var C=y("animationend"),F=y("animationiteration"),G=y("animationstart"),Z=y("transitionrun"),xe=y("transitionstart"),Oe=y("transitioncancel"),je=y("transitionend"),rt=new Map,ft="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ft.push("scrollEnd");function et(t,n){rt.set(t,n),ze(n,[t])}var St=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Nt=[],bn=0,gn=0;function ii(){for(var t=bn,n=gn=bn=0;n<t;){var a=Nt[n];Nt[n++]=null;var s=Nt[n];Nt[n++]=null;var u=Nt[n];Nt[n++]=null;var h=Nt[n];if(Nt[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}h!==0&&Ra(a,u,h)}}function ai(t,n,a,s){Nt[bn++]=t,Nt[bn++]=n,Nt[bn++]=a,Nt[bn++]=s,gn|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Aa(t,n,a,s){return ai(t,n,a,s),An(t)}function jn(t,n){return ai(t,null,null,n),An(t)}function Ra(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-lt(a),t=h.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),h):null}function An(t){if(50<Ml)throw Ml=0,Gh=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function sv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,n,a,s){return new sv(t,n,a,s)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wa(t,n){var a=t.alternate;return a===null?(a=Ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xc(t,n,a,s,u,h){var v=0;if(s=t,typeof t=="function")Of(t)&&(v=1);else if(typeof t=="string")v=fy(t,a,Fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=Ei(31,a,n,u),t.elementType=P,t.lanes=h,t;case N:return $r(a.children,u,h,n);case T:v=8,u|=24;break;case M:return t=Ei(12,a,n,u|2),t.elementType=M,t.lanes=h,t;case ee:return t=Ei(13,a,n,u),t.elementType=ee,t.lanes=h,t;case V:return t=Ei(19,a,n,u),t.elementType=V,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:v=10;break e;case X:v=9;break e;case Y:v=11;break e;case k:v=14;break e;case he:v=16,s=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Ei(v,a,n,u),n.elementType=t,n.type=s,n.lanes=h,n}function $r(t,n,a,s){return t=Ei(7,t,s,n),t.lanes=a,t}function Pf(t,n,a){return t=Ei(6,t,null,n),t.lanes=a,t}function cm(t){var n=Ei(18,null,null,0);return n.stateNode=t,n}function Ff(t,n,a){return n=Ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var um=new WeakMap;function Fi(t,n){if(typeof t=="object"&&t!==null){var a=um.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Vt(n)},um.set(t,n),n)}return{value:t,source:n,stack:Vt(n)}}var ks=[],Xs=0,vc=null,nl=0,zi=[],Bi=0,lr=null,fa=1,ha="";function Ca(t,n){ks[Xs++]=nl,ks[Xs++]=vc,vc=t,nl=n}function fm(t,n,a){zi[Bi++]=fa,zi[Bi++]=ha,zi[Bi++]=lr,lr=t;var s=fa;t=ha;var u=32-lt(s)-1;s&=~(1<<u),a+=1;var h=32-lt(n)+u;if(30<h){var v=u-u%5;h=(s&(1<<v)-1).toString(32),s>>=v,u-=v,fa=1<<32-lt(n)+u|a<<u|s,ha=h+t}else fa=1<<h|a<<u|s,ha=t}function zf(t){t.return!==null&&(Ca(t,1),fm(t,1,0))}function Bf(t){for(;t===vc;)vc=ks[--Xs],ks[Xs]=null,nl=ks[--Xs],ks[Xs]=null;for(;t===lr;)lr=zi[--Bi],zi[Bi]=null,ha=zi[--Bi],zi[Bi]=null,fa=zi[--Bi],zi[Bi]=null}function hm(t,n){zi[Bi++]=fa,zi[Bi++]=ha,zi[Bi++]=lr,fa=n.id,ha=n.overflow,lr=t}var Qn=null,xn=null,Qt=!1,cr=null,Ii=!1,If=Error(r(519));function ur(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(Fi(n,t)),If}function dm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[En]=t,n[yn]=s,a){case"dialog":Wt("cancel",n),Wt("close",n);break;case"iframe":case"object":case"embed":Wt("load",n);break;case"video":case"audio":for(a=0;a<Tl.length;a++)Wt(Tl[a],n);break;case"source":Wt("error",n);break;case"img":case"image":case"link":Wt("error",n),Wt("load",n);break;case"details":Wt("toggle",n);break;case"input":Wt("invalid",n),Rt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Wt("invalid",n);break;case"textarea":Wt("invalid",n),Gn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||D_(n.textContent,a)?(s.popover!=null&&(Wt("beforetoggle",n),Wt("toggle",n)),s.onScroll!=null&&Wt("scroll",n),s.onScrollEnd!=null&&Wt("scrollend",n),s.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||ur(t,!0)}function pm(t){for(Qn=t.return;Qn;)switch(Qn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Qn=Qn.return}}function Ws(t){if(t!==Qn)return!1;if(!Qt)return pm(t),Qt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&xn&&ur(t),pm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));xn=I_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));xn=I_(t)}else n===27?(n=xn,Er(t.type)?(t=ld,ld=null,xn=t):xn=n):xn=Qn?Vi(t.stateNode.nextSibling):null;return!0}function es(){xn=Qn=null,Qt=!1}function Hf(){var t=cr;return t!==null&&(vi===null?vi=t:vi.push.apply(vi,t),cr=null),t}function il(t){cr===null?cr=[t]:cr.push(t)}var Vf=H(null),ts=null,Da=null;function fr(t,n,a){De(Vf,n._currentValue),n._currentValue=a}function Ua(t){t._currentValue=Vf.current,me(Vf)}function Gf(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function kf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var v=u.child;h=h.firstContext;e:for(;h!==null;){var D=h;h=u;for(var q=0;q<n.length;q++)if(D.context===n[q]){h.lanes|=a,D=h.alternate,D!==null&&(D.lanes|=a),Gf(h.return,a,t),s||(v=null);break e}h=D.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),Gf(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function qs(t,n,a,s){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var D=u.type;fi(u.pendingProps.value,v.value)||(t!==null?t.push(D):t=[D])}}else if(u===Q.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Dl):t=[Dl])}u=u.return}t!==null&&kf(n,t,a,s),n.flags|=262144}function yc(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ns(t){ts=t,Da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Jn(t){return mm(ts,t)}function Sc(t,n){return ts===null&&ns(t),mm(t,n)}function mm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Da===null){if(t===null)throw Error(r(308));Da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Da=Da.next=n;return a}var ov=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lv=o.unstable_scheduleCallback,cv=o.unstable_NormalPriority,zn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new ov,data:new Map,refCount:0}}function al(t){t.refCount--,t.refCount===0&&lv(cv,function(){t.controller.abort()})}var rl=null,Wf=0,Ys=0,js=null;function uv(t,n){if(rl===null){var a=rl=[];Wf=0,Ys=jh(),js={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Wf++,n.then(_m,_m),n}function _m(){if(--Wf===0&&rl!==null){js!==null&&(js.status="fulfilled");var t=rl;rl=null,Ys=0,js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var gm=z.S;z.S=function(t,n){e_=w(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uv(t,n),gm!==null&&gm(t,n)};var is=H(null);function qf(){var t=is.current;return t!==null?t:_n.pooledCache}function bc(t,n){n===null?De(is,is.current):De(is,n.pool)}function xm(){var t=qf();return t===null?null:{parent:zn._currentValue,pool:t}}var Zs=Error(r(460)),Yf=Error(r(474)),Mc=Error(r(542)),Ec={then:function(){}};function vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ym(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bm(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=_n,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bm(t),t}throw rs=n,Zs}}function as(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rs=a,Zs):a}}var rs=null;function Sm(){if(rs===null)throw Error(r(459));var t=rs;return rs=null,t}function bm(t){if(t===Zs||t===Mc)throw Error(r(483))}var Ks=null,sl=0;function Tc(t){var n=sl;return sl+=1,Ks===null&&(Ks=[]),ym(Ks,t,n)}function ol(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ac(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Mm(t){function n(ne,K){if(t){var ce=ne.deletions;ce===null?(ne.deletions=[K],ne.flags|=16):ce.push(K)}}function a(ne,K){if(!t)return null;for(;K!==null;)n(ne,K),K=K.sibling;return null}function s(ne){for(var K=new Map;ne!==null;)ne.key!==null?K.set(ne.key,ne):K.set(ne.index,ne),ne=ne.sibling;return K}function u(ne,K){return ne=wa(ne,K),ne.index=0,ne.sibling=null,ne}function h(ne,K,ce){return ne.index=ce,t?(ce=ne.alternate,ce!==null?(ce=ce.index,ce<K?(ne.flags|=67108866,K):ce):(ne.flags|=67108866,K)):(ne.flags|=1048576,K)}function v(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function D(ne,K,ce,Ee){return K===null||K.tag!==6?(K=Pf(ce,ne.mode,Ee),K.return=ne,K):(K=u(K,ce),K.return=ne,K)}function q(ne,K,ce,Ee){var mt=ce.type;return mt===N?be(ne,K,ce.props.children,Ee,ce.key):K!==null&&(K.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===he&&as(mt)===K.type)?(K=u(K,ce.props),ol(K,ce),K.return=ne,K):(K=xc(ce.type,ce.key,ce.props,null,ne.mode,Ee),ol(K,ce),K.return=ne,K)}function fe(ne,K,ce,Ee){return K===null||K.tag!==4||K.stateNode.containerInfo!==ce.containerInfo||K.stateNode.implementation!==ce.implementation?(K=Ff(ce,ne.mode,Ee),K.return=ne,K):(K=u(K,ce.children||[]),K.return=ne,K)}function be(ne,K,ce,Ee,mt){return K===null||K.tag!==7?(K=$r(ce,ne.mode,Ee,mt),K.return=ne,K):(K=u(K,ce),K.return=ne,K)}function we(ne,K,ce){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Pf(""+K,ne.mode,ce),K.return=ne,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case A:return ce=xc(K.type,K.key,K.props,null,ne.mode,ce),ol(ce,K),ce.return=ne,ce;case U:return K=Ff(K,ne.mode,ce),K.return=ne,K;case he:return K=as(K),we(ne,K,ce)}if(Se(K)||se(K))return K=$r(K,ne.mode,ce,null),K.return=ne,K;if(typeof K.then=="function")return we(ne,Tc(K),ce);if(K.$$typeof===I)return we(ne,Sc(ne,K),ce);Ac(ne,K)}return null}function pe(ne,K,ce,Ee){var mt=K!==null?K.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return mt!==null?null:D(ne,K,""+ce,Ee);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case A:return ce.key===mt?q(ne,K,ce,Ee):null;case U:return ce.key===mt?fe(ne,K,ce,Ee):null;case he:return ce=as(ce),pe(ne,K,ce,Ee)}if(Se(ce)||se(ce))return mt!==null?null:be(ne,K,ce,Ee,null);if(typeof ce.then=="function")return pe(ne,K,Tc(ce),Ee);if(ce.$$typeof===I)return pe(ne,K,Sc(ne,ce),Ee);Ac(ne,ce)}return null}function ve(ne,K,ce,Ee,mt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ne=ne.get(ce)||null,D(K,ne,""+Ee,mt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case A:return ne=ne.get(Ee.key===null?ce:Ee.key)||null,q(K,ne,Ee,mt);case U:return ne=ne.get(Ee.key===null?ce:Ee.key)||null,fe(K,ne,Ee,mt);case he:return Ee=as(Ee),ve(ne,K,ce,Ee,mt)}if(Se(Ee)||se(Ee))return ne=ne.get(ce)||null,be(K,ne,Ee,mt,null);if(typeof Ee.then=="function")return ve(ne,K,ce,Tc(Ee),mt);if(Ee.$$typeof===I)return ve(ne,K,ce,Sc(K,Ee),mt);Ac(K,Ee)}return null}function ct(ne,K,ce,Ee){for(var mt=null,tn=null,ht=K,Pt=K=0,Zt=null;ht!==null&&Pt<ce.length;Pt++){ht.index>Pt?(Zt=ht,ht=null):Zt=ht.sibling;var nn=pe(ne,ht,ce[Pt],Ee);if(nn===null){ht===null&&(ht=Zt);break}t&&ht&&nn.alternate===null&&n(ne,ht),K=h(nn,K,Pt),tn===null?mt=nn:tn.sibling=nn,tn=nn,ht=Zt}if(Pt===ce.length)return a(ne,ht),Qt&&Ca(ne,Pt),mt;if(ht===null){for(;Pt<ce.length;Pt++)ht=we(ne,ce[Pt],Ee),ht!==null&&(K=h(ht,K,Pt),tn===null?mt=ht:tn.sibling=ht,tn=ht);return Qt&&Ca(ne,Pt),mt}for(ht=s(ht);Pt<ce.length;Pt++)Zt=ve(ht,ne,Pt,ce[Pt],Ee),Zt!==null&&(t&&Zt.alternate!==null&&ht.delete(Zt.key===null?Pt:Zt.key),K=h(Zt,K,Pt),tn===null?mt=Zt:tn.sibling=Zt,tn=Zt);return t&&ht.forEach(function(Cr){return n(ne,Cr)}),Qt&&Ca(ne,Pt),mt}function bt(ne,K,ce,Ee){if(ce==null)throw Error(r(151));for(var mt=null,tn=null,ht=K,Pt=K=0,Zt=null,nn=ce.next();ht!==null&&!nn.done;Pt++,nn=ce.next()){ht.index>Pt?(Zt=ht,ht=null):Zt=ht.sibling;var Cr=pe(ne,ht,nn.value,Ee);if(Cr===null){ht===null&&(ht=Zt);break}t&&ht&&Cr.alternate===null&&n(ne,ht),K=h(Cr,K,Pt),tn===null?mt=Cr:tn.sibling=Cr,tn=Cr,ht=Zt}if(nn.done)return a(ne,ht),Qt&&Ca(ne,Pt),mt;if(ht===null){for(;!nn.done;Pt++,nn=ce.next())nn=we(ne,nn.value,Ee),nn!==null&&(K=h(nn,K,Pt),tn===null?mt=nn:tn.sibling=nn,tn=nn);return Qt&&Ca(ne,Pt),mt}for(ht=s(ht);!nn.done;Pt++,nn=ce.next())nn=ve(ht,ne,Pt,nn.value,Ee),nn!==null&&(t&&nn.alternate!==null&&ht.delete(nn.key===null?Pt:nn.key),K=h(nn,K,Pt),tn===null?mt=nn:tn.sibling=nn,tn=nn);return t&&ht.forEach(function(by){return n(ne,by)}),Qt&&Ca(ne,Pt),mt}function dn(ne,K,ce,Ee){if(typeof ce=="object"&&ce!==null&&ce.type===N&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case A:e:{for(var mt=ce.key;K!==null;){if(K.key===mt){if(mt=ce.type,mt===N){if(K.tag===7){a(ne,K.sibling),Ee=u(K,ce.props.children),Ee.return=ne,ne=Ee;break e}}else if(K.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===he&&as(mt)===K.type){a(ne,K.sibling),Ee=u(K,ce.props),ol(Ee,ce),Ee.return=ne,ne=Ee;break e}a(ne,K);break}else n(ne,K);K=K.sibling}ce.type===N?(Ee=$r(ce.props.children,ne.mode,Ee,ce.key),Ee.return=ne,ne=Ee):(Ee=xc(ce.type,ce.key,ce.props,null,ne.mode,Ee),ol(Ee,ce),Ee.return=ne,ne=Ee)}return v(ne);case U:e:{for(mt=ce.key;K!==null;){if(K.key===mt)if(K.tag===4&&K.stateNode.containerInfo===ce.containerInfo&&K.stateNode.implementation===ce.implementation){a(ne,K.sibling),Ee=u(K,ce.children||[]),Ee.return=ne,ne=Ee;break e}else{a(ne,K);break}else n(ne,K);K=K.sibling}Ee=Ff(ce,ne.mode,Ee),Ee.return=ne,ne=Ee}return v(ne);case he:return ce=as(ce),dn(ne,K,ce,Ee)}if(Se(ce))return ct(ne,K,ce,Ee);if(se(ce)){if(mt=se(ce),typeof mt!="function")throw Error(r(150));return ce=mt.call(ce),bt(ne,K,ce,Ee)}if(typeof ce.then=="function")return dn(ne,K,Tc(ce),Ee);if(ce.$$typeof===I)return dn(ne,K,Sc(ne,ce),Ee);Ac(ne,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint"?(ce=""+ce,K!==null&&K.tag===6?(a(ne,K.sibling),Ee=u(K,ce),Ee.return=ne,ne=Ee):(a(ne,K),Ee=Pf(ce,ne.mode,Ee),Ee.return=ne,ne=Ee),v(ne)):a(ne,K)}return function(ne,K,ce,Ee){try{sl=0;var mt=dn(ne,K,ce,Ee);return Ks=null,mt}catch(ht){if(ht===Zs||ht===Mc)throw ht;var tn=Ei(29,ht,null,ne.mode);return tn.lanes=Ee,tn.return=ne,tn}finally{}}}var ss=Mm(!0),Em=Mm(!1),hr=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function dr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(rn&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=An(t),Ra(t,null,a),n}return ai(t,s,n,a),An(t)}function ll(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Vr(t,a)}}function Kf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qf=!1;function cl(){if(Qf){var t=js;if(t!==null)throw t}}function ul(t,n,a,s){Qf=!1;var u=t.updateQueue;hr=!1;var h=u.firstBaseUpdate,v=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var q=D,fe=q.next;q.next=null,v===null?h=fe:v.next=fe,v=q;var be=t.alternate;be!==null&&(be=be.updateQueue,D=be.lastBaseUpdate,D!==v&&(D===null?be.firstBaseUpdate=fe:D.next=fe,be.lastBaseUpdate=q))}if(h!==null){var we=u.baseState;v=0,be=fe=q=null,D=h;do{var pe=D.lane&-536870913,ve=pe!==D.lane;if(ve?(jt&pe)===pe:(s&pe)===pe){pe!==0&&pe===Ys&&(Qf=!0),be!==null&&(be=be.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var ct=t,bt=D;pe=n;var dn=a;switch(bt.tag){case 1:if(ct=bt.payload,typeof ct=="function"){we=ct.call(dn,we,pe);break e}we=ct;break e;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=bt.payload,pe=typeof ct=="function"?ct.call(dn,we,pe):ct,pe==null)break e;we=b({},we,pe);break e;case 2:hr=!0}}pe=D.callback,pe!==null&&(t.flags|=64,ve&&(t.flags|=8192),ve=u.callbacks,ve===null?u.callbacks=[pe]:ve.push(pe))}else ve={lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},be===null?(fe=be=ve,q=we):be=be.next=ve,v|=pe;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,u.lastBaseUpdate=ve,u.shared.pending=null}}while(!0);be===null&&(q=we),u.baseState=q,u.firstBaseUpdate=fe,u.lastBaseUpdate=be,h===null&&(u.shared.lanes=0),vr|=v,t.lanes=v,t.memoizedState=we}}function Tm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Tm(a[t],n)}var Qs=H(null),Rc=H(0);function Rm(t,n){t=Ha,De(Rc,t),De(Qs,n),Ha=t|n.baseLanes}function Jf(){De(Rc,Ha),De(Qs,Qs.current)}function $f(){Ha=Rc.current,me(Qs),me(Rc)}var Ti=H(null),Hi=null;function mr(t){var n=t.alternate;De(Nn,Nn.current&1),De(Ti,t),Hi===null&&(n===null||Qs.current!==null||n.memoizedState!==null)&&(Hi=t)}function eh(t){De(Nn,Nn.current),De(Ti,t),Hi===null&&(Hi=t)}function wm(t){t.tag===22?(De(Nn,Nn.current),De(Ti,t),Hi===null&&(Hi=t)):_r()}function _r(){De(Nn,Nn.current),De(Ti,Ti.current)}function Ai(t){me(Ti),Hi===t&&(Hi=null),me(Nn)}var Nn=H(0);function wc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||od(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var La=0,Ot=null,fn=null,Bn=null,Cc=!1,Js=!1,os=!1,Dc=0,fl=0,$s=null,hv=0;function Rn(){throw Error(r(321))}function th(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function nh(t,n,a,s,u,h){return La=h,Ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?f0:gh,os=!1,h=a(s,u),os=!1,Js&&(h=Dm(n,a,s,u)),Cm(t),h}function Cm(t){z.H=pl;var n=fn!==null&&fn.next!==null;if(La=0,Bn=fn=Ot=null,Cc=!1,fl=0,$s=null,n)throw Error(r(300));t===null||In||(t=t.dependencies,t!==null&&yc(t)&&(In=!0))}function Dm(t,n,a,s){Ot=t;var u=0;do{if(Js&&($s=null),fl=0,Js=!1,25<=u)throw Error(r(301));if(u+=1,Bn=fn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=h0,h=n(a,s)}while(Js);return h}function dv(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?hl(n):n,t=t.useState()[0],(fn!==null?fn.memoizedState:null)!==t&&(Ot.flags|=1024),n}function ih(){var t=Dc!==0;return Dc=0,t}function ah(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rh(t){if(Cc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cc=!1}La=0,Bn=fn=Ot=null,Js=!1,fl=Dc=0,$s=null}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?Ot.memoizedState=Bn=t:Bn=Bn.next=t,Bn}function On(){if(fn===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=fn.next;var n=Bn===null?Ot.memoizedState:Bn.next;if(n!==null)Bn=n,fn=t;else{if(t===null)throw Ot.alternate===null?Error(r(467)):Error(r(310));fn=t,t={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},Bn===null?Ot.memoizedState=Bn=t:Bn=Bn.next=t}return Bn}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(t){var n=fl;return fl+=1,$s===null&&($s=[]),t=ym($s,t,n),n=Ot,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?f0:gh),t}function Lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hl(t);if(t.$$typeof===I)return Jn(t)}throw Error(r(438,String(t)))}function sh(t){var n=null,a=Ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Ot.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Uc(),Ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=O;return n.index++,a}function Na(t,n){return typeof n=="function"?n(t):n}function Nc(t){var n=On();return oh(n,fn,t)}function oh(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,h=s.pending;if(h!==null){if(u!==null){var v=u.next;u.next=h.next,h.next=v}n.baseQueue=u=h,s.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var D=v=null,q=null,fe=n,be=!1;do{var we=fe.lane&-536870913;if(we!==fe.lane?(jt&we)===we:(La&we)===we){var pe=fe.revertLane;if(pe===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),we===Ys&&(be=!0);else if((La&pe)===pe){fe=fe.next,pe===Ys&&(be=!0);continue}else we={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},q===null?(D=q=we,v=h):q=q.next=we,Ot.lanes|=pe,vr|=pe;we=fe.action,os&&a(h,we),h=fe.hasEagerState?fe.eagerState:a(h,we)}else pe={lane:we,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},q===null?(D=q=pe,v=h):q=q.next=pe,Ot.lanes|=we,vr|=we;fe=fe.next}while(fe!==null&&fe!==n);if(q===null?v=h:q.next=D,!fi(h,t.memoizedState)&&(In=!0,be&&(a=js,a!==null)))throw a;t.memoizedState=h,t.baseState=v,t.baseQueue=q,s.lastRenderedState=h}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function lh(t){var n=On(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do h=t(h,v.action),v=v.next;while(v!==u);fi(h,n.memoizedState)||(In=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Um(t,n,a){var s=Ot,u=On(),h=Qt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!fi((fn||u).memoizedState,a);if(v&&(u.memoizedState=a,In=!0),u=u.queue,fh(Om.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||Bn!==null&&Bn.memoizedState.tag&1){if(s.flags|=2048,eo(9,{destroy:void 0},Nm.bind(null,s,u,a,n),null),_n===null)throw Error(r(349));h||(La&127)!==0||Lm(s,n,a)}return a}function Lm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ot.updateQueue,n===null?(n=Uc(),Ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,s){n.value=a,n.getSnapshot=s,Pm(n)&&Fm(t)}function Om(t,n,a){return a(function(){Pm(n)&&Fm(t)})}function Pm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function Fm(t){var n=jn(t,2);n!==null&&yi(n,t,2)}function ch(t){var n=hi();if(typeof t=="function"){var a=t;if(t=a(),os){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},n}function zm(t,n,a,s){return t.baseState=a,oh(t,fn,typeof s=="function"?s:Na)}function pv(t,n,a,s,u){if(Fc(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};z.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Bm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Bm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var h=z.T,v={};z.T=v;try{var D=a(u,s),q=z.S;q!==null&&q(v,D),Im(t,n,D)}catch(fe){uh(t,n,fe)}finally{h!==null&&v.types!==null&&(h.types=v.types),z.T=h}}else try{h=a(u,s),Im(t,n,h)}catch(fe){uh(t,n,fe)}}function Im(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Hm(t,n,s)},function(s){return uh(t,n,s)}):Hm(t,n,a)}function Hm(t,n,a){n.status="fulfilled",n.value=a,Vm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Bm(t,a)))}function uh(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Vm(n),n=n.next;while(n!==s)}t.action=null}function Vm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Gm(t,n){return n}function km(t,n){if(Qt){var a=_n.formState;if(a!==null){e:{var s=Ot;if(Qt){if(xn){t:{for(var u=xn,h=Ii;u.nodeType!==8;){if(!h){u=null;break t}if(u=Vi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){xn=Vi(u.nextSibling),s=u.data==="F!";break e}}ur(s)}s=!1}s&&(n=a[0])}}return a=hi(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:n},a.queue=s,a=l0.bind(null,Ot,s),s.dispatch=a,s=ch(!1),h=_h.bind(null,Ot,!1,s.queue),s=hi(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=pv.bind(null,Ot,u,h,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Xm(t){var n=On();return Wm(n,fn,t)}function Wm(t,n,a){if(n=oh(t,n,Gm)[0],t=Nc(Na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=hl(n)}catch(v){throw v===Zs?Mc:v}else s=n;n=On();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Ot.flags|=2048,eo(9,{destroy:void 0},mv.bind(null,u,a),null)),[s,h,t]}function mv(t,n){t.action=n}function qm(t){var n=On(),a=fn;if(a!==null)return Wm(n,a,t);On(),n=n.memoizedState,a=On();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function eo(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=Ot.updateQueue,n===null&&(n=Uc(),Ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Ym(){return On().memoizedState}function Oc(t,n,a,s){var u=hi();Ot.flags|=t,u.memoizedState=eo(1|n,{destroy:void 0},a,s===void 0?null:s)}function Pc(t,n,a,s){var u=On();s=s===void 0?null:s;var h=u.memoizedState.inst;fn!==null&&s!==null&&th(s,fn.memoizedState.deps)?u.memoizedState=eo(n,h,a,s):(Ot.flags|=t,u.memoizedState=eo(1|n,h,a,s))}function jm(t,n){Oc(8390656,8,t,n)}function fh(t,n){Pc(2048,8,t,n)}function _v(t){Ot.flags|=4;var n=Ot.updateQueue;if(n===null)n=Uc(),Ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Zm(t){var n=On().memoizedState;return _v({ref:n,nextImpl:t}),function(){if((rn&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Km(t,n){return Pc(4,2,t,n)}function Qm(t,n){return Pc(4,4,t,n)}function Jm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $m(t,n,a){a=a!=null?a.concat([t]):null,Pc(4,4,Jm.bind(null,n,t),a)}function hh(){}function e0(t,n){var a=On();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&th(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function t0(t,n){var a=On();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&th(n,s[1]))return s[0];if(s=t(),os){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s}function dh(t,n,a){return a===void 0||(La&1073741824)!==0&&(jt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=n_(),Ot.lanes|=t,vr|=t,a)}function n0(t,n,a,s){return fi(a,n)?a:Qs.current!==null?(t=dh(t,a,s),fi(t,n)||(In=!0),t):(La&42)===0||(La&1073741824)!==0&&(jt&261930)===0?(In=!0,t.memoizedState=a):(t=n_(),Ot.lanes|=t,vr|=t,n)}function i0(t,n,a,s,u){var h=$.p;$.p=h!==0&&8>h?h:8;var v=z.T,D={};z.T=D,_h(t,!1,n,a);try{var q=u(),fe=z.S;if(fe!==null&&fe(D,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var be=fv(q,s);dl(t,n,be,Ci(t))}else dl(t,n,s,Ci(t))}catch(we){dl(t,n,{then:function(){},status:"rejected",reason:we},Ci())}finally{$.p=h,v!==null&&D.types!==null&&(v.types=D.types),z.T=v}}function gv(){}function ph(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=a0(t).queue;i0(t,u,n,ie,a===null?gv:function(){return r0(t),a(s)})}function a0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function r0(t){var n=a0(t);n.next===null&&(n=t.alternate.memoizedState),dl(t,n.next.queue,{},Ci())}function mh(){return Jn(Dl)}function s0(){return On().memoizedState}function o0(){return On().memoizedState}function xv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ci();t=dr(a);var s=pr(n,t,a);s!==null&&(yi(s,n,a),ll(s,n,a)),n={cache:Xf()},t.payload=n;return}n=n.return}}function vv(t,n,a){var s=Ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fc(t)?c0(n,a):(a=Aa(t,n,a,s),a!==null&&(yi(a,t,s),u0(a,n,s)))}function l0(t,n,a){var s=Ci();dl(t,n,a,s)}function dl(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fc(t))c0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,D=h(v,a);if(u.hasEagerState=!0,u.eagerState=D,fi(D,v))return ai(t,n,u,0),_n===null&&ii(),!1}catch{}finally{}if(a=Aa(t,n,u,s),a!==null)return yi(a,t,s),u0(a,n,s),!0}return!1}function _h(t,n,a,s){if(s={lane:2,revertLane:jh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Fc(t)){if(n)throw Error(r(479))}else n=Aa(t,a,s,2),n!==null&&yi(n,t,2)}function Fc(t){var n=t.alternate;return t===Ot||n!==null&&n===Ot}function c0(t,n){Js=Cc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function u0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Vr(t,a)}}var pl={readContext:Jn,use:Lc,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useLayoutEffect:Rn,useInsertionEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useSyncExternalStore:Rn,useId:Rn,useHostTransitionStatus:Rn,useFormState:Rn,useActionState:Rn,useOptimistic:Rn,useMemoCache:Rn,useCacheRefresh:Rn};pl.useEffectEvent=Rn;var f0={readContext:Jn,use:Lc,useCallback:function(t,n){return hi().memoizedState=[t,n===void 0?null:n],t},useContext:Jn,useEffect:jm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Oc(4194308,4,Jm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Oc(4194308,4,t,n)},useInsertionEffect:function(t,n){Oc(4,2,t,n)},useMemo:function(t,n){var a=hi();n=n===void 0?null:n;var s=t();if(os){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=hi();if(a!==void 0){var u=a(n);if(os){ot(!0);try{a(n)}finally{ot(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=vv.bind(null,Ot,t),[s.memoizedState,t]},useRef:function(t){var n=hi();return t={current:t},n.memoizedState=t},useState:function(t){t=ch(t);var n=t.queue,a=l0.bind(null,Ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hh,useDeferredValue:function(t,n){var a=hi();return dh(a,t,n)},useTransition:function(){var t=ch(!1);return t=i0.bind(null,Ot,t.queue,!0,!1),hi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Ot,u=hi();if(Qt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),_n===null)throw Error(r(349));(jt&127)!==0||Lm(s,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,jm(Om.bind(null,s,h,t),[t]),s.flags|=2048,eo(9,{destroy:void 0},Nm.bind(null,s,h,a,n),null),a},useId:function(){var t=hi(),n=_n.identifierPrefix;if(Qt){var a=ha,s=fa;a=(s&~(1<<32-lt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mh,useFormState:km,useActionState:km,useOptimistic:function(t){var n=hi();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_h.bind(null,Ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:sh,useCacheRefresh:function(){return hi().memoizedState=xv.bind(null,Ot)},useEffectEvent:function(t){var n=hi(),a={impl:t};return n.memoizedState=a,function(){if((rn&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},gh={readContext:Jn,use:Lc,useCallback:e0,useContext:Jn,useEffect:fh,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:t0,useReducer:Nc,useRef:Ym,useState:function(){return Nc(Na)},useDebugValue:hh,useDeferredValue:function(t,n){var a=On();return n0(a,fn.memoizedState,t,n)},useTransition:function(){var t=Nc(Na)[0],n=On().memoizedState;return[typeof t=="boolean"?t:hl(t),n]},useSyncExternalStore:Um,useId:s0,useHostTransitionStatus:mh,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=On();return zm(a,fn,t,n)},useMemoCache:sh,useCacheRefresh:o0};gh.useEffectEvent=Zm;var h0={readContext:Jn,use:Lc,useCallback:e0,useContext:Jn,useEffect:fh,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:t0,useReducer:lh,useRef:Ym,useState:function(){return lh(Na)},useDebugValue:hh,useDeferredValue:function(t,n){var a=On();return fn===null?dh(a,t,n):n0(a,fn.memoizedState,t,n)},useTransition:function(){var t=lh(Na)[0],n=On().memoizedState;return[typeof t=="boolean"?t:hl(t),n]},useSyncExternalStore:Um,useId:s0,useHostTransitionStatus:mh,useFormState:qm,useActionState:qm,useOptimistic:function(t,n){var a=On();return fn!==null?zm(a,fn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sh,useCacheRefresh:o0};h0.useEffectEvent=Zm;function xh(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:b({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Ci(),u=dr(s);u.payload=n,a!=null&&(u.callback=a),n=pr(t,u,s),n!==null&&(yi(n,t,s),ll(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Ci(),u=dr(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pr(t,u,s),n!==null&&(yi(n,t,s),ll(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ci(),s=dr(a);s.tag=2,n!=null&&(s.callback=n),n=pr(t,s,a),n!==null&&(yi(n,t,a),ll(n,t,a))}};function d0(t,n,a,s,u,h,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,v):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,s)||!Qr(u,h):!0}function p0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&vh.enqueueReplaceState(n,n.state,null)}function ls(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=b({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function m0(t){St(t)}function _0(t){console.error(t)}function g0(t){St(t)}function zc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function x0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yh(t,n,a){return a=dr(a),a.tag=3,a.payload={element:null},a.callback=function(){zc(t,n)},a}function v0(t){return t=dr(t),t.tag=3,t}function y0(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;t.payload=function(){return u(h)},t.callback=function(){x0(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){x0(n,a,s),typeof u!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var D=s.stack;this.componentDidCatch(s.value,{componentStack:D!==null?D:""})})}function yv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,u,!0),a=Ti.current,a!==null){switch(a.tag){case 31:case 13:return Hi===null?Zc():a.alternate===null&&wn===0&&(wn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Wh(t,s,u)),!1;case 22:return a.flags|=65536,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Wh(t,s,u)),!1}throw Error(r(435,a.tag))}return Wh(t,s,u),Zc(),!1}if(Qt)return n=Ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==If&&(t=Error(r(422),{cause:s}),il(Fi(t,a)))):(s!==If&&(n=Error(r(423),{cause:s}),il(Fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Fi(s,a),u=yh(t.stateNode,s,u),Kf(t,u),wn!==4&&(wn=2)),!1;var h=Error(r(520),{cause:s});if(h=Fi(h,a),bl===null?bl=[h]:bl.push(h),wn!==4&&(wn=2),n===null)return!0;s=Fi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yh(a.stateNode,s,t),Kf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yr===null||!yr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=v0(u),y0(u,t,a,s),Kf(a,u),!1}a=a.return}while(a!==null);return!1}var Sh=Error(r(461)),In=!1;function $n(t,n,a,s){n.child=t===null?Em(n,null,a,s):ss(n,t.child,a,s)}function S0(t,n,a,s,u){a=a.render;var h=n.ref;if("ref"in s){var v={};for(var D in s)D!=="ref"&&(v[D]=s[D])}else v=s;return ns(n),s=nh(t,n,a,v,h,u),D=ih(),t!==null&&!In?(ah(t,n,u),Oa(t,n,u)):(Qt&&D&&zf(n),n.flags|=1,$n(t,n,s,u),n.child)}function b0(t,n,a,s,u){if(t===null){var h=a.type;return typeof h=="function"&&!Of(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,M0(t,n,h,s,u)):(t=xc(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Ch(t,u)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(v,s)&&t.ref===n.ref)return Oa(t,n,u)}return n.flags|=1,t=wa(h,s),t.ref=n.ref,t.return=n,n.child=t}function M0(t,n,a,s,u){if(t!==null){var h=t.memoizedProps;if(Qr(h,s)&&t.ref===n.ref)if(In=!1,n.pendingProps=s=h,Ch(t,u))(t.flags&131072)!==0&&(In=!0);else return n.lanes=t.lanes,Oa(t,n,u)}return bh(t,n,a,s,u)}function E0(t,n,a,s){var u=s.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~h}else s=0,n.child=null;return T0(t,n,h,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bc(n,h!==null?h.cachePool:null),h!==null?Rm(n,h):Jf(),wm(n);else return s=n.lanes=536870912,T0(t,n,h!==null?h.baseLanes|a:a,a,s)}else h!==null?(bc(n,h.cachePool),Rm(n,h),_r(),n.memoizedState=null):(t!==null&&bc(n,null),Jf(),_r());return $n(t,n,u,a),n.child}function ml(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function T0(t,n,a,s,u){var h=qf();return h=h===null?null:{parent:zn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&bc(n,null),Jf(),wm(n),t!==null&&qs(t,n,s,!0),n.childLanes=u,null}function Bc(t,n){return n=Hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function A0(t,n,a){return ss(n,t.child,null,a),t=Bc(n,n.pendingProps),t.flags|=2,Ai(n),n.memoizedState=null,t}function Sv(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Qt){if(s.mode==="hidden")return t=Bc(n,s),n.lanes=536870912,ml(null,t);if(eh(n),(t=xn)?(t=B_(t,Ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:lr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,Qn=n,xn=null)):t=null,t===null)throw ur(n);return n.lanes=536870912,null}return Bc(n,s)}var h=t.memoizedState;if(h!==null){var v=h.dehydrated;if(eh(n),u)if(n.flags&256)n.flags&=-257,n=A0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(In||qs(t,n,a,!1),u=(a&t.childLanes)!==0,In||u){if(s=_n,s!==null&&(v=Gr(s,a),v!==0&&v!==h.retryLane))throw h.retryLane=v,jn(t,v),yi(s,t,v),Sh;Zc(),n=A0(t,n,a)}else t=h.treeContext,xn=Vi(v.nextSibling),Qn=n,Qt=!0,cr=null,Ii=!1,t!==null&&hm(n,t),n=Bc(n,s),n.flags|=4096;return n}return t=wa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ic(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bh(t,n,a,s,u){return ns(n),a=nh(t,n,a,s,void 0,u),s=ih(),t!==null&&!In?(ah(t,n,u),Oa(t,n,u)):(Qt&&s&&zf(n),n.flags|=1,$n(t,n,a,u),n.child)}function R0(t,n,a,s,u,h){return ns(n),n.updateQueue=null,a=Dm(n,s,a,u),Cm(t),s=ih(),t!==null&&!In?(ah(t,n,h),Oa(t,n,h)):(Qt&&s&&zf(n),n.flags|=1,$n(t,n,a,h),n.child)}function w0(t,n,a,s,u){if(ns(n),n.stateNode===null){var h=Gs,v=a.contextType;typeof v=="object"&&v!==null&&(h=Jn(v)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=vh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},jf(n),v=a.contextType,h.context=typeof v=="object"&&v!==null?Jn(v):Gs,h.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(xh(n,a,v,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&vh.enqueueReplaceState(h,h.state,null),ul(n,s,h,u),cl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var D=n.memoizedProps,q=ls(a,D);h.props=q;var fe=h.context,be=a.contextType;v=Gs,typeof be=="object"&&be!==null&&(v=Jn(be));var we=a.getDerivedStateFromProps;be=typeof we=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,be||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||fe!==v)&&p0(n,h,s,v),hr=!1;var pe=n.memoizedState;h.state=pe,ul(n,s,h,u),cl(),fe=n.memoizedState,D||pe!==fe||hr?(typeof we=="function"&&(xh(n,a,we,s),fe=n.memoizedState),(q=hr||d0(n,a,q,s,pe,fe,v))?(be||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=fe),h.props=s,h.state=fe,h.context=v,s=q):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Zf(t,n),v=n.memoizedProps,be=ls(a,v),h.props=be,we=n.pendingProps,pe=h.context,fe=a.contextType,q=Gs,typeof fe=="object"&&fe!==null&&(q=Jn(fe)),D=a.getDerivedStateFromProps,(fe=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==we||pe!==q)&&p0(n,h,s,q),hr=!1,pe=n.memoizedState,h.state=pe,ul(n,s,h,u),cl();var ve=n.memoizedState;v!==we||pe!==ve||hr||t!==null&&t.dependencies!==null&&yc(t.dependencies)?(typeof D=="function"&&(xh(n,a,D,s),ve=n.memoizedState),(be=hr||d0(n,a,be,s,pe,ve,q)||t!==null&&t.dependencies!==null&&yc(t.dependencies))?(fe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ve,q),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ve,q)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ve),h.props=s,h.state=ve,h.context=q,s=be):(typeof h.componentDidUpdate!="function"||v===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,Ic(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=ss(n,t.child,null,u),n.child=ss(n,null,a,u)):$n(t,n,a,u),n.memoizedState=h.state,t=n.child):t=Oa(t,n,u),t}function C0(t,n,a,s){return es(),n.flags|=256,$n(t,n,a,s),n.child}var Mh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eh(t){return{baseLanes:t,cachePool:xm()}}function Th(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=wi),t}function D0(t,n,a){var s=n.pendingProps,u=!1,h=(n.flags&128)!==0,v;if((v=h)||(v=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Qt){if(u?mr(n):_r(),(t=xn)?(t=B_(t,Ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:lr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,Qn=n,xn=null)):t=null,t===null)throw ur(n);return od(t)?n.lanes=32:n.lanes=536870912,null}var D=s.children;return s=s.fallback,u?(_r(),u=n.mode,D=Hc({mode:"hidden",children:D},u),s=$r(s,u,a,null),D.return=n,s.return=n,D.sibling=s,n.child=D,s=n.child,s.memoizedState=Eh(a),s.childLanes=Th(t,v,a),n.memoizedState=Mh,ml(null,s)):(mr(n),Ah(n,D))}var q=t.memoizedState;if(q!==null&&(D=q.dehydrated,D!==null)){if(h)n.flags&256?(mr(n),n.flags&=-257,n=Rh(t,n,a)):n.memoizedState!==null?(_r(),n.child=t.child,n.flags|=128,n=null):(_r(),D=s.fallback,u=n.mode,s=Hc({mode:"visible",children:s.children},u),D=$r(D,u,a,null),D.flags|=2,s.return=n,D.return=n,s.sibling=D,n.child=s,ss(n,t.child,null,a),s=n.child,s.memoizedState=Eh(a),s.childLanes=Th(t,v,a),n.memoizedState=Mh,n=ml(null,s));else if(mr(n),od(D)){if(v=D.nextSibling&&D.nextSibling.dataset,v)var fe=v.dgst;v=fe,s=Error(r(419)),s.stack="",s.digest=v,il({value:s,source:null,stack:null}),n=Rh(t,n,a)}else if(In||qs(t,n,a,!1),v=(a&t.childLanes)!==0,In||v){if(v=_n,v!==null&&(s=Gr(v,a),s!==0&&s!==q.retryLane))throw q.retryLane=s,jn(t,s),yi(v,t,s),Sh;sd(D)||Zc(),n=Rh(t,n,a)}else sd(D)?(n.flags|=192,n.child=t.child,n=null):(t=q.treeContext,xn=Vi(D.nextSibling),Qn=n,Qt=!0,cr=null,Ii=!1,t!==null&&hm(n,t),n=Ah(n,s.children),n.flags|=4096);return n}return u?(_r(),D=s.fallback,u=n.mode,q=t.child,fe=q.sibling,s=wa(q,{mode:"hidden",children:s.children}),s.subtreeFlags=q.subtreeFlags&65011712,fe!==null?D=wa(fe,D):(D=$r(D,u,a,null),D.flags|=2),D.return=n,s.return=n,s.sibling=D,n.child=s,ml(null,s),s=n.child,D=t.child.memoizedState,D===null?D=Eh(a):(u=D.cachePool,u!==null?(q=zn._currentValue,u=u.parent!==q?{parent:q,pool:q}:u):u=xm(),D={baseLanes:D.baseLanes|a,cachePool:u}),s.memoizedState=D,s.childLanes=Th(t,v,a),n.memoizedState=Mh,ml(t.child,s)):(mr(n),a=t.child,t=a.sibling,a=wa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Ah(t,n){return n=Hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hc(t,n){return t=Ei(22,t,null,n),t.lanes=0,t}function Rh(t,n,a){return ss(n,t.child,null,a),t=Ah(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function U0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Gf(t.return,n,a)}function wh(t,n,a,s,u,h){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=h)}function L0(t,n,a){var s=n.pendingProps,u=s.revealOrder,h=s.tail;s=s.children;var v=Nn.current,D=(v&2)!==0;if(D?(v=v&1|2,n.flags|=128):v&=1,De(Nn,v),$n(t,n,s,a),s=Qt?nl:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,a,n);else if(t.tag===19)U0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&wc(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wh(n,!1,u,a,h,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&wc(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}wh(n,!0,a,null,h,s);break;case"together":wh(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),vr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=wa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=wa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ch(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yc(t)))}function bv(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),fr(n,zn,t.memoizedState.cache),es();break;case 27:case 5:ke(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:fr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,eh(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(mr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?D0(t,n,a):(mr(n),t=Oa(t,n,a),t!==null?t.sibling:null);mr(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qs(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return L0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),De(Nn,Nn.current),s)break;return null;case 22:return n.lanes=0,E0(t,n,a,n.pendingProps);case 24:fr(n,zn,t.memoizedState.cache)}return Oa(t,n,a)}function N0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)In=!0;else{if(!Ch(t,a)&&(n.flags&128)===0)return In=!1,bv(t,n,a);In=(t.flags&131072)!==0}else In=!1,Qt&&(n.flags&1048576)!==0&&fm(n,nl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=as(n.elementType),n.type=t,typeof t=="function")Of(t)?(s=ls(t,s),n.tag=1,n=w0(null,n,t,s,a)):(n.tag=0,n=bh(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===Y){n.tag=11,n=S0(null,n,t,s,a);break e}else if(u===k){n.tag=14,n=b0(null,n,t,s,a);break e}}throw n=Me(t)||t,Error(r(306,n,""))}}return n;case 0:return bh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ls(s,n.pendingProps),w0(t,n,s,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var h=n.memoizedState;u=h.element,Zf(t,n),ul(n,s,null,a);var v=n.memoizedState;if(s=v.cache,fr(n,zn,s),s!==h.cache&&kf(n,[zn],a,!0),cl(),s=v.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=C0(t,n,s,a);break e}else if(s!==u){u=Fi(Error(r(424)),n),il(u),n=C0(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(xn=Vi(t.firstChild),Qn=n,Qt=!0,cr=null,Ii=!0,a=Em(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(es(),s===u){n=Oa(t,n,a);break e}$n(t,n,s,a)}n=n.child}return n;case 26:return Ic(t,n),t===null?(a=X_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Qt||(a=n.type,t=n.pendingProps,s=nu(de.current).createElement(a),s[En]=n,s[yn]=t,ei(s,a,t),le(s),n.stateNode=s):n.memoizedState=X_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ke(n),t===null&&Qt&&(s=n.stateNode=V_(n.type,n.pendingProps,de.current),Qn=n,Ii=!0,u=xn,Er(n.type)?(ld=u,xn=Vi(s.firstChild)):xn=u),$n(t,n,n.pendingProps.children,a),Ic(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Qt&&((u=s=xn)&&(s=Jv(s,n.type,n.pendingProps,Ii),s!==null?(n.stateNode=s,Qn=n,xn=Vi(s.firstChild),Ii=!1,u=!0):u=!1),u||ur(n)),ke(n),u=n.type,h=n.pendingProps,v=t!==null?t.memoizedProps:null,s=h.children,id(u,h)?s=null:v!==null&&id(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=nh(t,n,dv,null,null,a),Dl._currentValue=u),Ic(t,n),$n(t,n,s,a),n.child;case 6:return t===null&&Qt&&((t=a=xn)&&(a=$v(a,n.pendingProps,Ii),a!==null?(n.stateNode=a,Qn=n,xn=null,t=!0):t=!1),t||ur(n)),null;case 13:return D0(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ss(n,null,s,a):$n(t,n,s,a),n.child;case 11:return S0(t,n,n.type,n.pendingProps,a);case 7:return $n(t,n,n.pendingProps,a),n.child;case 8:return $n(t,n,n.pendingProps.children,a),n.child;case 12:return $n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fr(n,n.type,s.value),$n(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ns(n),u=Jn(u),s=s(u),n.flags|=1,$n(t,n,s,a),n.child;case 14:return b0(t,n,n.type,n.pendingProps,a);case 15:return M0(t,n,n.type,n.pendingProps,a);case 19:return L0(t,n,a);case 31:return Sv(t,n,a);case 22:return E0(t,n,a,n.pendingProps);case 24:return ns(n),s=Jn(zn),t===null?(u=qf(),u===null&&(u=_n,h=Xf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:s,cache:u},jf(n),fr(n,zn,u)):((t.lanes&a)!==0&&(Zf(t,n),ul(n,null,null,a),cl()),u=t.memoizedState,h=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fr(n,zn,s)):(s=h.cache,fr(n,zn,s),s!==u.cache&&kf(n,[zn],a,!0))),$n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Pa(t){t.flags|=4}function Dh(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(s_())t.flags|=8192;else throw rs=Ec,Yf}else t.flags&=-16777217}function O0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Z_(n))if(s_())t.flags|=8192;else throw rs=Ec,Yf}function Vc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?it():536870912,t.lanes|=n,ao|=n)}function _l(t,n){if(!Qt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function vn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Mv(t,n,a){var s=n.pendingProps;switch(Bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ua(zn),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?Pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hf())),vn(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(Pa(n),h!==null?(vn(n),O0(n,h)):(vn(n),Dh(n,u,null,s,a))):h?h!==t.memoizedState?(Pa(n),vn(n),O0(n,h)):(vn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Pa(n),vn(n),Dh(n,u,t,s,a)),null;case 27:if(tt(n),a=de.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return vn(n),null}t=Fe.current,Ws(n)?dm(n):(t=V_(u,s,a),n.stateNode=t,Pa(n))}return vn(n),null;case 5:if(tt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return vn(n),null}if(h=Fe.current,Ws(n))dm(n);else{var v=nu(de.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?h.multiple=!0:s.size&&(h.size=s.size);break;default:h=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}h[En]=n,h[yn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=h;e:switch(ei(h,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Pa(n)}}return vn(n),Dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=de.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Qn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[En]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||D_(t.nodeValue,a)),t||ur(n,!0)}else t=nu(t).createTextNode(s),t[En]=n,n.stateNode=t}return vn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ws(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[En]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),t=!1}else a=Hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Ai(n),n):(Ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return vn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ws(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[En]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=Hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ai(n),n):(Ai(n),null)}return Ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),h=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Vc(n,n.updateQueue),vn(n),null);case 4:return Ie(),t===null&&Jh(n.stateNode.containerInfo),vn(n),null;case 10:return Ua(n.type),vn(n),null;case 19:if(me(Nn),s=n.memoizedState,s===null)return vn(n),null;if(u=(n.flags&128)!==0,h=s.rendering,h===null)if(u)_l(s,!1);else{if(wn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=wc(t),h!==null){for(n.flags|=128,_l(s,!1),t=h.updateQueue,n.updateQueue=t,Vc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lm(a,t),a=a.sibling;return De(Nn,Nn.current&1|2),Qt&&Ca(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&w()>qc&&(n.flags|=128,u=!0,_l(s,!1),n.lanes=4194304)}else{if(!u)if(t=wc(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Vc(n,t),_l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!h.alternate&&!Qt)return vn(n),null}else 2*w()-s.renderingStartTime>qc&&a!==536870912&&(n.flags|=128,u=!0,_l(s,!1),n.lanes=4194304);s.isBackwards?(h.sibling=n.child,n.child=h):(t=s.last,t!==null?t.sibling=h:n.child=h,s.last=h)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=w(),t.sibling=null,a=Nn.current,De(Nn,u?a&1|2:a&1),Qt&&Ca(n,s.treeForkCount),t):(vn(n),null);case 22:case 23:return Ai(n),$f(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&Vc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&me(is),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ua(zn),vn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ev(t,n){switch(Bf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ua(zn),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return tt(n),null;case 31:if(n.memoizedState!==null){if(Ai(n),n.alternate===null)throw Error(r(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return me(Nn),null;case 4:return Ie(),null;case 10:return Ua(n.type),null;case 22:case 23:return Ai(n),$f(),t!==null&&me(is),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ua(zn),null;case 25:return null;default:return null}}function P0(t,n){switch(Bf(n),n.tag){case 3:Ua(zn),Ie();break;case 26:case 27:case 5:tt(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&Ai(n);break;case 13:Ai(n);break;case 19:me(Nn);break;case 10:Ua(n.type);break;case 22:case 23:Ai(n),$f(),t!==null&&me(is);break;case 24:Ua(zn)}}function gl(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var h=a.create,v=a.inst;s=h(),v.destroy=s}a=a.next}while(a!==u)}}catch(D){ln(n,n.return,D)}}function gr(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){var v=s.inst,D=v.destroy;if(D!==void 0){v.destroy=void 0,u=n;var q=a,fe=D;try{fe()}catch(be){ln(u,q,be)}}}s=s.next}while(s!==h)}}catch(be){ln(n,n.return,be)}}function F0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Am(n,a)}catch(s){ln(t,t.return,s)}}}function z0(t,n,a){a.props=ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ln(t,n,s)}}function xl(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){ln(t,n,u)}}function da(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ln(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ln(t,n,u)}else a.current=null}function B0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ln(t,t.return,u)}}function Uh(t,n,a){try{var s=t.stateNode;qv(s,t.type,a,n),s[yn]=n}catch(u){ln(t,t.return,u)}}function I0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Er(t.type)||t.tag===4}function Lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(s!==4&&(s===27&&Er(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Nh(t,n,a),t=t.sibling;t!==null;)Nh(t,n,a),t=t.sibling}function Gc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Er(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gc(t,n,a),t=t.sibling;t!==null;)Gc(t,n,a),t=t.sibling}function H0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ei(n,s,a),n[En]=t,n[yn]=a}catch(h){ln(t,t.return,h)}}var Fa=!1,Hn=!1,Oh=!1,V0=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function Tv(t,n){if(t=t.containerInfo,td=cu,t=el(t),Jr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var v=0,D=-1,q=-1,fe=0,be=0,we=t,pe=null;t:for(;;){for(var ve;we!==a||u!==0&&we.nodeType!==3||(D=v+u),we!==h||s!==0&&we.nodeType!==3||(q=v+s),we.nodeType===3&&(v+=we.nodeValue.length),(ve=we.firstChild)!==null;)pe=we,we=ve;for(;;){if(we===t)break t;if(pe===a&&++fe===u&&(D=v),pe===h&&++be===s&&(q=v),(ve=we.nextSibling)!==null)break;we=pe,pe=we.parentNode}we=ve}a=D===-1||q===-1?null:{start:D,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},cu=!1,Zn=n;Zn!==null;)if(n=Zn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Zn=t;else for(;Zn!==null;){switch(n=Zn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var ct=ls(a.type,u);t=s.getSnapshotBeforeUpdate(ct,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(bt){ln(a,a.return,bt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Zn=t;break}Zn=n.return}}function G0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),s&4&&gl(5,a);break;case 1:if(Ba(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){ln(a,a.return,v)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){ln(a,a.return,v)}}s&64&&F0(a),s&512&&xl(a,a.return);break;case 3:if(Ba(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(t,n)}catch(v){ln(a,a.return,v)}}break;case 27:n===null&&s&4&&H0(a);case 26:case 5:Ba(t,a),n===null&&s&4&&B0(a),s&512&&xl(a,a.return);break;case 12:Ba(t,a);break;case 31:Ba(t,a),s&4&&W0(t,a);break;case 13:Ba(t,a),s&4&&q0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ov.bind(null,a),ey(t,a))));break;case 22:if(s=a.memoizedState!==null||Fa,!s){n=n!==null&&n.memoizedState!==null||Hn,u=Fa;var h=Hn;Fa=s,(Hn=n)&&!h?Ia(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),Fa=u,Hn=h}break;case 30:break;default:Ba(t,a)}}function k0(t){var n=t.alternate;n!==null&&(t.alternate=null,k0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&kr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Sn=null,_i=!1;function za(t,n,a){for(a=a.child;a!==null;)X0(t,n,a),a=a.sibling}function X0(t,n,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:Hn||da(a,n),za(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||da(a,n);var s=Sn,u=_i;Er(a.type)&&(Sn=a.stateNode,_i=!1),za(t,n,a),Rl(a.stateNode),Sn=s,_i=u;break;case 5:Hn||da(a,n);case 6:if(s=Sn,u=_i,Sn=null,za(t,n,a),Sn=s,_i=u,Sn!==null)if(_i)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(h){ln(a,n,h)}else try{Sn.removeChild(a.stateNode)}catch(h){ln(a,n,h)}break;case 18:Sn!==null&&(_i?(t=Sn,F_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ho(t)):F_(Sn,a.stateNode));break;case 4:s=Sn,u=_i,Sn=a.stateNode.containerInfo,_i=!0,za(t,n,a),Sn=s,_i=u;break;case 0:case 11:case 14:case 15:gr(2,a,n),Hn||gr(4,a,n),za(t,n,a);break;case 1:Hn||(da(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&z0(a,n,s)),za(t,n,a);break;case 21:za(t,n,a);break;case 22:Hn=(s=Hn)||a.memoizedState!==null,za(t,n,a),Hn=s;break;default:za(t,n,a)}}function W0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ho(t)}catch(a){ln(n,n.return,a)}}}function q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ho(t)}catch(a){ln(n,n.return,a)}}function Av(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new V0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new V0),n;default:throw Error(r(435,t.tag))}}function kc(t,n){var a=Av(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Pv.bind(null,t,s);s.then(u,u)}})}function gi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=t,v=n,D=v;e:for(;D!==null;){switch(D.tag){case 27:if(Er(D.type)){Sn=D.stateNode,_i=!1;break e}break;case 5:Sn=D.stateNode,_i=!1;break e;case 3:case 4:Sn=D.stateNode.containerInfo,_i=!0;break e}D=D.return}if(Sn===null)throw Error(r(160));X0(h,v,u),Sn=null,_i=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Y0(n,t),n=n.sibling}var $i=null;function Y0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:gi(n,t),xi(t),s&4&&(gr(3,t,t.return),gl(3,t),gr(5,t,t.return));break;case 1:gi(n,t),xi(t),s&512&&(Hn||a===null||da(a,a.return)),s&64&&Fa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=$i;if(gi(n,t),xi(t),s&512&&(Hn||a===null||da(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ba]||h[En]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),ei(h,s,a),h[En]=t,le(h),s=h;break e;case"link":var v=Y_("link","href",u).get(s+(a.href||""));if(v){for(var D=0;D<v.length;D++)if(h=v[D],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(D,1);break t}}h=u.createElement(s),ei(h,s,a),u.head.appendChild(h);break;case"meta":if(v=Y_("meta","content",u).get(s+(a.content||""))){for(D=0;D<v.length;D++)if(h=v[D],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(D,1);break t}}h=u.createElement(s),ei(h,s,a),u.head.appendChild(h);break;default:throw Error(r(468,s))}h[En]=t,le(h),s=h}t.stateNode=s}else j_(u,t.type,t.stateNode);else t.stateNode=q_(u,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?j_(u,t.type,t.stateNode):q_(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Uh(t,t.memoizedProps,a.memoizedProps)}break;case 27:gi(n,t),xi(t),s&512&&(Hn||a===null||da(a,a.return)),a!==null&&s&4&&Uh(t,t.memoizedProps,a.memoizedProps);break;case 5:if(gi(n,t),xi(t),s&512&&(Hn||a===null||da(a,a.return)),t.flags&32){u=t.stateNode;try{Pi(u,"")}catch(ct){ln(t,t.return,ct)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Uh(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Oh=!0);break;case 6:if(gi(n,t),xi(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ct){ln(t,t.return,ct)}}break;case 3:if(ru=null,u=$i,$i=iu(n.containerInfo),gi(n,t),$i=u,xi(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(n.containerInfo)}catch(ct){ln(t,t.return,ct)}Oh&&(Oh=!1,j0(t));break;case 4:s=$i,$i=iu(t.stateNode.containerInfo),gi(n,t),xi(t),$i=s;break;case 12:gi(n,t),xi(t);break;case 31:gi(n,t),xi(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 13:gi(n,t),xi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wc=w()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 22:u=t.memoizedState!==null;var q=a!==null&&a.memoizedState!==null,fe=Fa,be=Hn;if(Fa=fe||u,Hn=be||q,gi(n,t),Hn=be,Fa=fe,xi(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||q||Fa||Hn||cs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){q=a=n;try{if(h=q.stateNode,u)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{D=q.stateNode;var we=q.memoizedProps.style,pe=we!=null&&we.hasOwnProperty("display")?we.display:null;D.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(ct){ln(q,q.return,ct)}}}else if(n.tag===6){if(a===null){q=n;try{q.stateNode.nodeValue=u?"":q.memoizedProps}catch(ct){ln(q,q.return,ct)}}}else if(n.tag===18){if(a===null){q=n;try{var ve=q.stateNode;u?z_(ve,!0):z_(q.stateNode,!1)}catch(ct){ln(q,q.return,ct)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,kc(t,a))));break;case 19:gi(n,t),xi(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 30:break;case 21:break;default:gi(n,t),xi(t)}}function xi(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(I0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Lh(t);Gc(t,h,u);break;case 5:var v=a.stateNode;a.flags&32&&(Pi(v,""),a.flags&=-33);var D=Lh(t);Gc(t,D,v);break;case 3:case 4:var q=a.stateNode.containerInfo,fe=Lh(t);Nh(t,fe,q);break;default:throw Error(r(161))}}catch(be){ln(t,t.return,be)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function j0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;j0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)G0(t,n.alternate,n),n=n.sibling}function cs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:gr(4,n,n.return),cs(n);break;case 1:da(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&z0(n,n.return,a),cs(n);break;case 27:Rl(n.stateNode);case 26:case 5:da(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}t=t.sibling}}function Ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,h=n,v=h.flags;switch(h.tag){case 0:case 11:case 15:Ia(u,h,a),gl(4,h);break;case 1:if(Ia(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(fe){ln(s,s.return,fe)}if(s=h,u=s.updateQueue,u!==null){var D=s.stateNode;try{var q=u.shared.hiddenCallbacks;if(q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<q.length;u++)Tm(q[u],D)}catch(fe){ln(s,s.return,fe)}}a&&v&64&&F0(h),xl(h,h.return);break;case 27:H0(h);case 26:case 5:Ia(u,h,a),a&&s===null&&v&4&&B0(h),xl(h,h.return);break;case 12:Ia(u,h,a);break;case 31:Ia(u,h,a),a&&v&4&&W0(u,h);break;case 13:Ia(u,h,a),a&&v&4&&q0(u,h);break;case 22:h.memoizedState===null&&Ia(u,h,a),xl(h,h.return);break;case 30:break;default:Ia(u,h,a)}n=n.sibling}}function Ph(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&al(a))}function Fh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&al(t))}function ea(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(t,n,a,s),n=n.sibling}function Z0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ea(t,n,a,s),u&2048&&gl(9,n);break;case 1:ea(t,n,a,s);break;case 3:ea(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&al(t)));break;case 12:if(u&2048){ea(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,v=h.id,D=h.onPostCommit;typeof D=="function"&&D(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(q){ln(n,n.return,q)}}else ea(t,n,a,s);break;case 31:ea(t,n,a,s);break;case 13:ea(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,v=n.alternate,n.memoizedState!==null?h._visibility&2?ea(t,n,a,s):vl(t,n):h._visibility&2?ea(t,n,a,s):(h._visibility|=2,to(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ph(v,n);break;case 24:ea(t,n,a,s),u&2048&&Fh(n.alternate,n);break;default:ea(t,n,a,s)}}function to(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,v=n,D=a,q=s,fe=v.flags;switch(v.tag){case 0:case 11:case 15:to(h,v,D,q,u),gl(8,v);break;case 23:break;case 22:var be=v.stateNode;v.memoizedState!==null?be._visibility&2?to(h,v,D,q,u):vl(h,v):(be._visibility|=2,to(h,v,D,q,u)),u&&fe&2048&&Ph(v.alternate,v);break;case 24:to(h,v,D,q,u),u&&fe&2048&&Fh(v.alternate,v);break;default:to(h,v,D,q,u)}n=n.sibling}}function vl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:vl(a,s),u&2048&&Ph(s.alternate,s);break;case 24:vl(a,s),u&2048&&Fh(s.alternate,s);break;default:vl(a,s)}n=n.sibling}}var yl=8192;function no(t,n,a){if(t.subtreeFlags&yl)for(t=t.child;t!==null;)K0(t,n,a),t=t.sibling}function K0(t,n,a){switch(t.tag){case 26:no(t,n,a),t.flags&yl&&t.memoizedState!==null&&hy(a,$i,t.memoizedState,t.memoizedProps);break;case 5:no(t,n,a);break;case 3:case 4:var s=$i;$i=iu(t.stateNode.containerInfo),no(t,n,a),$i=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=yl,yl=16777216,no(t,n,a),yl=s):no(t,n,a));break;default:no(t,n,a)}}function Q0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,$0(s,t)}Q0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)J0(t),t=t.sibling}function J0(t){switch(t.tag){case 0:case 11:case 15:Sl(t),t.flags&2048&&gr(9,t,t.return);break;case 3:Sl(t);break;case 12:Sl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xc(t)):Sl(t);break;default:Sl(t)}}function Xc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,$0(s,t)}Q0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:gr(8,n,n.return),Xc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xc(n));break;default:Xc(n)}t=t.sibling}}function $0(t,n){for(;Zn!==null;){var a=Zn;switch(a.tag){case 0:case 11:case 15:gr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:al(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Zn=s;else e:for(a=t;Zn!==null;){s=Zn;var u=s.sibling,h=s.return;if(k0(s),s===a){Zn=null;break e}if(u!==null){u.return=h,Zn=u;break e}Zn=h}}}var Rv={getCacheForType:function(t){var n=Jn(zn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Jn(zn).controller.signal}},wv=typeof WeakMap=="function"?WeakMap:Map,rn=0,_n=null,Xt=null,jt=0,on=0,Ri=null,xr=!1,io=!1,zh=!1,Ha=0,wn=0,vr=0,us=0,Bh=0,wi=0,ao=0,bl=null,vi=null,Ih=!1,Wc=0,e_=0,qc=1/0,Yc=null,yr=null,kn=0,Sr=null,ro=null,Va=0,Hh=0,Vh=null,t_=null,Ml=0,Gh=null;function Ci(){return(rn&2)!==0&&jt!==0?jt&-jt:z.T!==null?jh():Sa()}function n_(){if(wi===0)if((jt&536870912)===0||Qt){var t=Ve;Ve<<=1,(Ve&3932160)===0&&(Ve=262144),wi=t}else wi=536870912;return t=Ti.current,t!==null&&(t.flags|=32),wi}function yi(t,n,a){(t===_n&&(on===2||on===9)||t.cancelPendingCommit!==null)&&(so(t,0),br(t,jt,wi,!1)),Yn(t,a),((rn&2)===0||t!==_n)&&(t===_n&&((rn&2)===0&&(us|=a),wn===4&&br(t,jt,wi,!1)),pa(t))}function i_(t,n,a){if((rn&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||nt(t,n),u=s?Uv(t,n):Xh(t,n,!0),h=s;do{if(u===0){io&&!s&&br(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Cv(a)){u=Xh(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var D=t;u=bl;var q=D.current.memoizedState.isDehydrated;if(q&&(so(D,v).flags|=256),v=Xh(D,v,!1),v!==2){if(zh&&!q){D.errorRecoveryDisabledLanes|=h,us|=h,u=4;break e}h=vi,vi=u,h!==null&&(vi===null?vi=h:vi.push.apply(vi,h))}u=v}if(h=!1,u!==2)continue}}if(u===1){so(t,0),br(t,n,0,!0);break}e:{switch(s=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:br(s,n,wi,!xr);break e;case 2:vi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wc+300-w(),10<u)){if(br(s,n,wi,!xr),Re(s,0,!0)!==0)break e;Va=n,s.timeoutHandle=O_(a_.bind(null,s,a,vi,Yc,Ih,n,wi,us,ao,xr,h,"Throttled",-0,0),u);break e}a_(s,a,vi,Yc,Ih,n,wi,us,ao,xr,h,null,-0,0)}}break}while(!0);pa(t)}function a_(t,n,a,s,u,h,v,D,q,fe,be,we,pe,ve){if(t.timeoutHandle=-1,we=n.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},K0(n,h,we);var ct=(h&62914560)===h?Wc-w():(h&4194048)===h?e_-w():0;if(ct=dy(we,ct),ct!==null){Va=h,t.cancelPendingCommit=ct(h_.bind(null,t,n,h,a,s,u,v,D,q,be,we,null,pe,ve)),br(t,h,v,!fe);return}}h_(t,n,h,a,s,u,v,D,q)}function Cv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!fi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function br(t,n,a,s){n&=~Bh,n&=~us,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var h=31-lt(u),v=1<<h;s[h]=-1,u&=~v}a!==0&&Ts(t,a,n)}function jc(){return(rn&6)===0?(El(0),!1):!0}function kh(){if(Xt!==null){if(on===0)var t=Xt.return;else t=Xt,Da=ts=null,rh(t),Ks=null,sl=0,t=Xt;for(;t!==null;)P0(t.alternate,t),t=t.return;Xt=null}}function so(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Va=0,kh(),_n=t,Xt=a=wa(t.current,null),jt=n,on=0,Ri=null,xr=!1,io=nt(t,n),zh=!1,ao=wi=Bh=us=vr=wn=0,vi=bl=null,Ih=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-lt(s),h=1<<u;n|=t[u],s&=~h}return Ha=n,ii(),a}function r_(t,n){Ot=null,z.H=pl,n===Zs||n===Mc?(n=Sm(),on=3):n===Yf?(n=Sm(),on=4):on=n===Sh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ri=n,Xt===null&&(wn=1,zc(t,Fi(n,t.current)))}function s_(){var t=Ti.current;return t===null?!0:(jt&4194048)===jt?Hi===null:(jt&62914560)===jt||(jt&536870912)!==0?t===Hi:!1}function o_(){var t=z.H;return z.H=pl,t===null?pl:t}function l_(){var t=z.A;return z.A=Rv,t}function Zc(){wn=4,xr||(jt&4194048)!==jt&&Ti.current!==null||(io=!0),(vr&134217727)===0&&(us&134217727)===0||_n===null||br(_n,jt,wi,!1)}function Xh(t,n,a){var s=rn;rn|=2;var u=o_(),h=l_();(_n!==t||jt!==n)&&(Yc=null,so(t,n)),n=!1;var v=wn;e:do try{if(on!==0&&Xt!==null){var D=Xt,q=Ri;switch(on){case 8:kh(),v=6;break e;case 3:case 2:case 9:case 6:Ti.current===null&&(n=!0);var fe=on;if(on=0,Ri=null,oo(t,D,q,fe),a&&io){v=0;break e}break;default:fe=on,on=0,Ri=null,oo(t,D,q,fe)}}Dv(),v=wn;break}catch(be){r_(t,be)}while(!0);return n&&t.shellSuspendCounter++,Da=ts=null,rn=s,z.H=u,z.A=h,Xt===null&&(_n=null,jt=0,ii()),v}function Dv(){for(;Xt!==null;)c_(Xt)}function Uv(t,n){var a=rn;rn|=2;var s=o_(),u=l_();_n!==t||jt!==n?(Yc=null,qc=w()+500,so(t,n)):io=nt(t,n);e:do try{if(on!==0&&Xt!==null){n=Xt;var h=Ri;t:switch(on){case 1:on=0,Ri=null,oo(t,n,h,1);break;case 2:case 9:if(vm(h)){on=0,Ri=null,u_(n);break}n=function(){on!==2&&on!==9||_n!==t||(on=7),pa(t)},h.then(n,n);break e;case 3:on=7;break e;case 4:on=5;break e;case 7:vm(h)?(on=0,Ri=null,u_(n)):(on=0,Ri=null,oo(t,n,h,7));break;case 5:var v=null;switch(Xt.tag){case 26:v=Xt.memoizedState;case 5:case 27:var D=Xt;if(v?Z_(v):D.stateNode.complete){on=0,Ri=null;var q=D.sibling;if(q!==null)Xt=q;else{var fe=D.return;fe!==null?(Xt=fe,Kc(fe)):Xt=null}break t}}on=0,Ri=null,oo(t,n,h,5);break;case 6:on=0,Ri=null,oo(t,n,h,6);break;case 8:kh(),wn=6;break e;default:throw Error(r(462))}}Lv();break}catch(be){r_(t,be)}while(!0);return Da=ts=null,z.H=s,z.A=u,rn=a,Xt!==null?0:(_n=null,jt=0,ii(),wn)}function Lv(){for(;Xt!==null&&!yt();)c_(Xt)}function c_(t){var n=N0(t.alternate,t,Ha);t.memoizedProps=t.pendingProps,n===null?Kc(t):Xt=n}function u_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=R0(a,n,n.pendingProps,n.type,void 0,jt);break;case 11:n=R0(a,n,n.pendingProps,n.type.render,n.ref,jt);break;case 5:rh(n);default:P0(a,n),n=Xt=lm(n,Ha),n=N0(a,n,Ha)}t.memoizedProps=t.pendingProps,n===null?Kc(t):Xt=n}function oo(t,n,a,s){Da=ts=null,rh(n),Ks=null,sl=0;var u=n.return;try{if(yv(t,u,n,a,jt)){wn=1,zc(t,Fi(a,t.current)),Xt=null;return}}catch(h){if(u!==null)throw Xt=u,h;wn=1,zc(t,Fi(a,t.current)),Xt=null;return}n.flags&32768?(Qt||s===1?t=!0:io||(jt&536870912)!==0?t=!1:(xr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),f_(n,t)):Kc(n)}function Kc(t){var n=t;do{if((n.flags&32768)!==0){f_(n,xr);return}t=n.return;var a=Mv(n.alternate,n,Ha);if(a!==null){Xt=a;return}if(n=n.sibling,n!==null){Xt=n;return}Xt=n=t}while(n!==null);wn===0&&(wn=5)}function f_(t,n){do{var a=Ev(t.alternate,t);if(a!==null){a.flags&=32767,Xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Xt=t;return}Xt=t=a}while(t!==null);wn=6,Xt=null}function h_(t,n,a,s,u,h,v,D,q){t.cancelPendingCommit=null;do Qc();while(kn!==0);if((rn&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=gn,li(t,a,h,v,D,q),t===_n&&(Xt=_n=null,jt=0),ro=n,Sr=t,Va=a,Hh=h,Vh=u,t_=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fv(re,function(){return g_(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,u=$.p,$.p=2,v=rn,rn|=4;try{Tv(t,n,a)}finally{rn=v,$.p=u,z.T=s}}kn=1,d_(),p_(),m_()}}function d_(){if(kn===1){kn=0;var t=Sr,n=ro,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=$.p;$.p=2;var u=rn;rn|=4;try{Y0(n,t);var h=nd,v=el(t.containerInfo),D=h.focusedElem,q=h.selectionRange;if(v!==D&&D&&D.ownerDocument&&Fn(D.ownerDocument.documentElement,D)){if(q!==null&&Jr(D)){var fe=q.start,be=q.end;if(be===void 0&&(be=fe),"selectionStart"in D)D.selectionStart=fe,D.selectionEnd=Math.min(be,D.value.length);else{var we=D.ownerDocument||document,pe=we&&we.defaultView||window;if(pe.getSelection){var ve=pe.getSelection(),ct=D.textContent.length,bt=Math.min(q.start,ct),dn=q.end===void 0?bt:Math.min(q.end,ct);!ve.extend&&bt>dn&&(v=dn,dn=bt,bt=v);var ne=gc(D,bt),K=gc(D,dn);if(ne&&K&&(ve.rangeCount!==1||ve.anchorNode!==ne.node||ve.anchorOffset!==ne.offset||ve.focusNode!==K.node||ve.focusOffset!==K.offset)){var ce=we.createRange();ce.setStart(ne.node,ne.offset),ve.removeAllRanges(),bt>dn?(ve.addRange(ce),ve.extend(K.node,K.offset)):(ce.setEnd(K.node,K.offset),ve.addRange(ce))}}}}for(we=[],ve=D;ve=ve.parentNode;)ve.nodeType===1&&we.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<we.length;D++){var Ee=we[D];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}cu=!!td,nd=td=null}finally{rn=u,$.p=s,z.T=a}}t.current=n,kn=2}}function p_(){if(kn===2){kn=0;var t=Sr,n=ro,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=$.p;$.p=2;var u=rn;rn|=4;try{G0(t,n.alternate,n)}finally{rn=u,$.p=s,z.T=a}}kn=3}}function m_(){if(kn===4||kn===3){kn=0,B();var t=Sr,n=ro,a=Va,s=t_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?kn=5:(kn=0,ro=Sr=null,__(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(yr=null),R(a),n=n.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(Ne,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,u=$.p,$.p=2,z.T=null;try{for(var h=t.onRecoverableError,v=0;v<s.length;v++){var D=s[v];h(D.value,{componentStack:D.stack})}}finally{z.T=n,$.p=u}}(Va&3)!==0&&Qc(),pa(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Gh?Ml++:(Ml=0,Gh=t):Ml=0,El(0)}}function __(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,al(n)))}function Qc(){return d_(),p_(),m_(),g_()}function g_(){if(kn!==5)return!1;var t=Sr,n=Hh;Hh=0;var a=R(Va),s=z.T,u=$.p;try{$.p=32>a?32:a,z.T=null,a=Vh,Vh=null;var h=Sr,v=Va;if(kn=0,ro=Sr=null,Va=0,(rn&6)!==0)throw Error(r(331));var D=rn;if(rn|=4,J0(h.current),Z0(h,h.current,v,a),rn=D,El(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(Ne,h)}catch{}return!0}finally{$.p=u,z.T=s,__(t,n)}}function x_(t,n,a){n=Fi(a,n),n=yh(t.stateNode,n,2),t=pr(t,n,2),t!==null&&(Yn(t,2),pa(t))}function ln(t,n,a){if(t.tag===3)x_(t,t,a);else for(;n!==null;){if(n.tag===3){x_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(yr===null||!yr.has(s))){t=Fi(a,t),a=v0(2),s=pr(n,a,2),s!==null&&(y0(a,s,n,t),Yn(s,2),pa(s));break}}n=n.return}}function Wh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(zh=!0,u.add(a),t=Nv.bind(null,t,n,a),n.then(t,t))}function Nv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,_n===t&&(jt&a)===a&&(wn===4||wn===3&&(jt&62914560)===jt&&300>w()-Wc?(rn&2)===0&&so(t,0):Bh|=a,ao===jt&&(ao=0)),pa(t)}function v_(t,n){n===0&&(n=it()),t=jn(t,n),t!==null&&(Yn(t,n),pa(t))}function Ov(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),v_(t,a)}function Pv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),v_(t,a)}function Fv(t,n){return Lt(t,n)}var Jc=null,lo=null,qh=!1,$c=!1,Yh=!1,Mr=0;function pa(t){t!==lo&&t.next===null&&(lo===null?Jc=lo=t:lo=lo.next=t),$c=!0,qh||(qh=!0,Bv())}function El(t,n){if(!Yh&&$c){Yh=!0;do for(var a=!1,s=Jc;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var v=s.suspendedLanes,D=s.pingedLanes;h=(1<<31-lt(42|t)+1)-1,h&=u&~(v&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,M_(s,h))}else h=jt,h=Re(s,s===_n?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||nt(s,h)||(a=!0,M_(s,h));s=s.next}while(a);Yh=!1}}function zv(){y_()}function y_(){$c=qh=!1;var t=0;Mr!==0&&jv()&&(t=Mr);for(var n=w(),a=null,s=Jc;s!==null;){var u=s.next,h=S_(s,n);h===0?(s.next=null,a===null?Jc=u:a.next=u,u===null&&(lo=a)):(a=s,(t!==0||(h&3)!==0)&&($c=!0)),s=u}kn!==0&&kn!==5||El(t),Mr!==0&&(Mr=0)}function S_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var v=31-lt(h),D=1<<v,q=u[v];q===-1?((D&a)===0||(D&s)!==0)&&(u[v]=Mt(D,n)):q<=n&&(t.expiredLanes|=D),h&=~D}if(n=_n,a=jt,a=Re(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(on===2||on===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&st(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&st(s),R(a)){case 2:case 8:a=Le;break;case 32:a=re;break;case 268435456:a=We;break;default:a=re}return s=b_.bind(null,t),a=Lt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&st(s),t.callbackPriority=2,t.callbackNode=null,2}function b_(t,n){if(kn!==0&&kn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qc()&&t.callbackNode!==a)return null;var s=jt;return s=Re(t,t===_n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(i_(t,s,n),S_(t,w()),t.callbackNode!=null&&t.callbackNode===a?b_.bind(null,t):null)}function M_(t,n){if(Qc())return null;i_(t,n,!0)}function Bv(){Kv(function(){(rn&6)!==0?Lt(Ae,zv):y_()})}function jh(){if(Mr===0){var t=Ys;t===0&&(t=Xe,Xe<<=1,(Xe&261888)===0&&(Xe=256)),Mr=t}return Mr}function E_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ws(""+t)}function T_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Iv(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var h=E_((u[yn]||null).action),v=s.submitter;v&&(n=(n=v[yn]||null)?E_(n.formAction):v.getAttribute("formAction"),n!==null&&(h=n,v=null));var D=new Wr("action","action",null,s,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Mr!==0){var q=v?T_(u,v):new FormData(u);ph(a,{pending:!0,data:q,method:u.method,action:h},null,q)}}else typeof h=="function"&&(D.preventDefault(),q=v?T_(u,v):new FormData(u),ph(a,{pending:!0,data:q,method:u.method,action:h},h,q))},currentTarget:u}]})}}for(var Zh=0;Zh<ft.length;Zh++){var Kh=ft[Zh],Hv=Kh.toLowerCase(),Vv=Kh[0].toUpperCase()+Kh.slice(1);et(Hv,"on"+Vv)}et(C,"onAnimationEnd"),et(F,"onAnimationIteration"),et(G,"onAnimationStart"),et("dblclick","onDoubleClick"),et("focusin","onFocus"),et("focusout","onBlur"),et(Z,"onTransitionRun"),et(xe,"onTransitionStart"),et(Oe,"onTransitionCancel"),et(je,"onTransitionEnd"),Ke("onMouseEnter",["mouseout","mouseover"]),Ke("onMouseLeave",["mouseout","mouseover"]),Ke("onPointerEnter",["pointerout","pointerover"]),Ke("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function A_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var v=s.length-1;0<=v;v--){var D=s[v],q=D.instance,fe=D.currentTarget;if(D=D.listener,q!==h&&u.isPropagationStopped())break e;h=D,u.currentTarget=fe;try{h(u)}catch(be){St(be)}u.currentTarget=null,h=q}else for(v=0;v<s.length;v++){if(D=s[v],q=D.instance,fe=D.currentTarget,D=D.listener,q!==h&&u.isPropagationStopped())break e;h=D,u.currentTarget=fe;try{h(u)}catch(be){St(be)}u.currentTarget=null,h=q}}}}function Wt(t,n){var a=n[tr];a===void 0&&(a=n[tr]=new Set);var s=t+"__bubble";a.has(s)||(R_(n,t,2,!1),a.add(s))}function Qh(t,n,a){var s=0;n&&(s|=4),R_(a,t,s,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Jh(t){if(!t[eu]){t[eu]=!0,ae.forEach(function(a){a!=="selectionchange"&&(Gv.has(a)||Qh(a,!1,t),Qh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[eu]||(n[eu]=!0,Qh("selectionchange",!1,n))}}function R_(t,n,a,s){switch(ng(n)){case 2:var u=_y;break;case 8:u=gy;break;default:u=dd}a=u.bind(null,n,a,t),u=void 0,!Yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $h(t,n,a,s,u){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var D=s.stateNode.containerInfo;if(D===u)break;if(v===4)for(v=s.return;v!==null;){var q=v.tag;if((q===3||q===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;D!==null;){if(v=la(D),v===null)return;if(q=v.tag,q===5||q===6||q===26||q===27){s=h=v;continue e}D=D.parentNode}}s=s.return}$l(function(){var fe=h,be=Wo(a),we=[];e:{var pe=rt.get(t);if(pe!==void 0){var ve=Wr,ct=t;switch(t){case"keypress":if(Us(a)===0)break e;case"keydown":case"keyup":ve=ac;break;case"focusin":ct="focus",ve=Os;break;case"focusout":ct="blur",ve=Os;break;case"beforeblur":case"afterblur":ve=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=gf;break;case C:case F:case G:ve=cf;break;case je:ve=vf;break;case"scroll":case"scrollend":ve=rf;break;case"wheel":ve=Sf;break;case"copy":case"cut":case"paste":ve=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=rc;break;case"toggle":case"beforetoggle":ve=Mf}var bt=(n&4)!==0,dn=!bt&&(t==="scroll"||t==="scrollend"),ne=bt?pe!==null?pe+"Capture":null:pe;bt=[];for(var K=fe,ce;K!==null;){var Ee=K;if(ce=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||ce===null||ne===null||(Ee=Xr(K,ne),Ee!=null&&bt.push(Al(K,Ee,ce))),dn)break;K=K.return}0<bt.length&&(pe=new ve(pe,ct,null,a,be),we.push({event:pe,listeners:bt}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ve=t==="mouseout"||t==="pointerout",pe&&a!==Xo&&(ct=a.relatedTarget||a.fromElement)&&(la(ct)||ct[ni]))break e;if((ve||pe)&&(pe=be.window===be?be:(pe=be.ownerDocument)?pe.defaultView||pe.parentWindow:window,ve?(ct=a.relatedTarget||a.toElement,ve=fe,ct=ct?la(ct):null,ct!==null&&(dn=f(ct),bt=ct.tag,ct!==dn||bt!==5&&bt!==27&&bt!==6)&&(ct=null)):(ve=null,ct=fe),ve!==ct)){if(bt=nc,Ee="onMouseLeave",ne="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(bt=rc,Ee="onPointerLeave",ne="onPointerEnter",K="pointer"),dn=ve==null?pe:te(ve),ce=ct==null?pe:te(ct),pe=new bt(Ee,K+"leave",ve,a,be),pe.target=dn,pe.relatedTarget=ce,Ee=null,la(be)===fe&&(bt=new bt(ne,K+"enter",ct,a,be),bt.target=ce,bt.relatedTarget=dn,Ee=bt),dn=Ee,ve&&ct)t:{for(bt=kv,ne=ve,K=ct,ce=0,Ee=ne;Ee;Ee=bt(Ee))ce++;Ee=0;for(var mt=K;mt;mt=bt(mt))Ee++;for(;0<ce-Ee;)ne=bt(ne),ce--;for(;0<Ee-ce;)K=bt(K),Ee--;for(;ce--;){if(ne===K||K!==null&&ne===K.alternate){bt=ne;break t}ne=bt(ne),K=bt(K)}bt=null}else bt=null;ve!==null&&w_(we,pe,ve,bt,!1),ct!==null&&dn!==null&&w_(we,dn,ct,bt,!0)}}e:{if(pe=fe?te(fe):window,ve=pe.nodeName&&pe.nodeName.toLowerCase(),ve==="select"||ve==="input"&&pe.type==="file")var tn=Hs;else if(uc(pe))if(hc)tn=Lf;else{tn=Df;var ht=Cf}else ve=pe.nodeName,!ve||ve.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?fe&&Rs(fe.elementType)&&(tn=Hs):tn=Uf;if(tn&&(tn=tn(t,fe))){fc(we,tn,a,be);break e}ht&&ht(t,pe,fe),t==="focusout"&&fe&&pe.type==="number"&&fe.memoizedProps.value!=null&&Tn(pe,"number",pe.value)}switch(ht=fe?te(fe):window,t){case"focusin":(uc(ht)||ht.contentEditable==="true")&&(Ta=ht,Vs=fe,sr=null);break;case"focusout":sr=Vs=Ta=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,tl(we,a,be);break;case"selectionchange":if(Ji)break;case"keydown":case"keyup":tl(we,a,be)}var Pt;if(Jo)e:{switch(t){case"compositionstart":var Zt="onCompositionStart";break e;case"compositionend":Zt="onCompositionEnd";break e;case"compositionupdate":Zt="onCompositionUpdate";break e}Zt=void 0}else ar?lc(t,a)&&(Zt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Zt="onCompositionStart");Zt&&(sc&&a.locale!=="ko"&&(ar||Zt!=="onCompositionStart"?Zt==="onCompositionEnd"&&ar&&(Pt=ec()):(Qi=be,jo="value"in Qi?Qi.value:Qi.textContent,ar=!0)),ht=tu(fe,Zt),0<ht.length&&(Zt=new Fs(Zt,t,null,a,be),we.push({event:Zt,listeners:ht}),Pt?Zt.data=Pt:(Pt=cc(a),Pt!==null&&(Zt.data=Pt)))),(Pt=Tf?Af(t,a):Rf(t,a))&&(Zt=tu(fe,"onBeforeInput"),0<Zt.length&&(ht=new Fs("onBeforeInput","beforeinput",null,a,be),we.push({event:ht,listeners:Zt}),ht.data=Pt)),Iv(we,t,fe,a,be)}A_(we,n)})}function Al(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Xr(t,a),u!=null&&s.unshift(Al(t,u,h)),u=Xr(t,n),u!=null&&s.push(Al(t,u,h))),t.tag===3)return s;t=t.return}return[]}function kv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function w_(t,n,a,s,u){for(var h=n._reactName,v=[];a!==null&&a!==s;){var D=a,q=D.alternate,fe=D.stateNode;if(D=D.tag,q!==null&&q===s)break;D!==5&&D!==26&&D!==27||fe===null||(q=fe,u?(fe=Xr(a,h),fe!=null&&v.unshift(Al(a,fe,q))):u||(fe=Xr(a,h),fe!=null&&v.push(Al(a,fe,q)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Xv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function C_(t){return(typeof t=="string"?t:""+t).replace(Xv,`
`).replace(Wv,"")}function D_(t,n){return n=C_(n),C_(t)===n}function hn(t,n,a,s,u,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pi(t,""+s);break;case"className":Yt(t,"class",s);break;case"tabIndex":Yt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(t,a,s);break;case"style":ko(t,s,h);break;case"data":if(n!=="object"){Yt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ws(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&hn(t,n,"name",u.name,u,null),hn(t,n,"formEncType",u.formEncType,u,null),hn(t,n,"formMethod",u.formMethod,u,null),hn(t,n,"formTarget",u.formTarget,u,null)):(hn(t,n,"encType",u.encType,u,null),hn(t,n,"method",u.method,u,null),hn(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ws(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ji);break;case"onScroll":s!=null&&Wt("scroll",t);break;case"onScrollEnd":s!=null&&Wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ws(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Wt("beforetoggle",t),Wt("toggle",t),Ct(t,"popover",s);break;case"xlinkActuate":en(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":en(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":en(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":en(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":en(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":en(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":en(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":en(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":en(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ct(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=nf.get(a)||a,Ct(t,a,s))}}function ed(t,n,a,s,u,h){switch(a){case"style":ko(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Pi(t,s):(typeof s=="number"||typeof s=="bigint")&&Pi(t,""+s);break;case"onScroll":s!=null&&Wt("scroll",t);break;case"onScrollEnd":s!=null&&Wt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Be.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ct(t,a,s)}}}function ei(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",t),Wt("load",t);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:hn(t,n,h,v,a,null)}}u&&hn(t,n,"srcSet",a.srcSet,a,null),s&&hn(t,n,"src",a.src,a,null);return;case"input":Wt("invalid",t);var D=h=v=u=null,q=null,fe=null;for(s in a)if(a.hasOwnProperty(s)){var be=a[s];if(be!=null)switch(s){case"name":u=be;break;case"type":v=be;break;case"checked":q=be;break;case"defaultChecked":fe=be;break;case"value":h=be;break;case"defaultValue":D=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(r(137,n));break;default:hn(t,n,s,be,a,null)}}Rt(t,h,D,q,fe,v,u,!1);return;case"select":Wt("invalid",t),s=v=h=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":h=D;break;case"defaultValue":v=D;break;case"multiple":s=D;default:hn(t,n,u,D,a,null)}n=h,a=v,t.multiple=!!s,n!=null?Un(t,!!s,n,!1):a!=null&&Un(t,!!s,a,!0);return;case"textarea":Wt("invalid",t),h=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(D=a[v],D!=null))switch(v){case"value":s=D;break;case"defaultValue":u=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:hn(t,n,v,D,a,null)}Gn(t,s,u,h);return;case"option":for(q in a)if(a.hasOwnProperty(q)&&(s=a[q],s!=null))switch(q){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:hn(t,n,q,s,a,null)}return;case"dialog":Wt("beforetoggle",t),Wt("toggle",t),Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":Wt("load",t);break;case"video":case"audio":for(s=0;s<Tl.length;s++)Wt(Tl[s],t);break;case"image":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"embed":case"source":case"link":Wt("error",t),Wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(fe in a)if(a.hasOwnProperty(fe)&&(s=a[fe],s!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:hn(t,n,fe,s,a,null)}return;default:if(Rs(n)){for(be in a)a.hasOwnProperty(be)&&(s=a[be],s!==void 0&&ed(t,n,be,s,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(s=a[D],s!=null&&hn(t,n,D,s,a,null))}function qv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,v=null,D=null,q=null,fe=null,be=null;for(ve in a){var we=a[ve];if(a.hasOwnProperty(ve)&&we!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":q=we;default:s.hasOwnProperty(ve)||hn(t,n,ve,null,s,we)}}for(var pe in s){var ve=s[pe];if(we=a[pe],s.hasOwnProperty(pe)&&(ve!=null||we!=null))switch(pe){case"type":h=ve;break;case"name":u=ve;break;case"checked":fe=ve;break;case"defaultChecked":be=ve;break;case"value":v=ve;break;case"defaultValue":D=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:ve!==we&&hn(t,n,pe,ve,s,we)}}Yi(t,v,D,q,fe,be,h,u);return;case"select":ve=v=D=pe=null;for(h in a)if(q=a[h],a.hasOwnProperty(h)&&q!=null)switch(h){case"value":break;case"multiple":ve=q;default:s.hasOwnProperty(h)||hn(t,n,h,null,s,q)}for(u in s)if(h=s[u],q=a[u],s.hasOwnProperty(u)&&(h!=null||q!=null))switch(u){case"value":pe=h;break;case"defaultValue":D=h;break;case"multiple":v=h;default:h!==q&&hn(t,n,u,h,s,q)}n=D,a=v,s=ve,pe!=null?Un(t,!!a,pe,!1):!!s!=!!a&&(n!=null?Un(t,!!a,n,!0):Un(t,!!a,a?[]:"",!1));return;case"textarea":ve=pe=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!s.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:hn(t,n,D,null,s,u)}for(v in s)if(u=s[v],h=a[v],s.hasOwnProperty(v)&&(u!=null||h!=null))switch(v){case"value":pe=u;break;case"defaultValue":ve=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&hn(t,n,v,u,s,h)}Pn(t,pe,ve);return;case"option":for(var ct in a)if(pe=a[ct],a.hasOwnProperty(ct)&&pe!=null&&!s.hasOwnProperty(ct))switch(ct){case"selected":t.selected=!1;break;default:hn(t,n,ct,null,s,pe)}for(q in s)if(pe=s[q],ve=a[q],s.hasOwnProperty(q)&&pe!==ve&&(pe!=null||ve!=null))switch(q){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:hn(t,n,q,pe,s,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var bt in a)pe=a[bt],a.hasOwnProperty(bt)&&pe!=null&&!s.hasOwnProperty(bt)&&hn(t,n,bt,null,s,pe);for(fe in s)if(pe=s[fe],ve=a[fe],s.hasOwnProperty(fe)&&pe!==ve&&(pe!=null||ve!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:hn(t,n,fe,pe,s,ve)}return;default:if(Rs(n)){for(var dn in a)pe=a[dn],a.hasOwnProperty(dn)&&pe!==void 0&&!s.hasOwnProperty(dn)&&ed(t,n,dn,void 0,s,pe);for(be in s)pe=s[be],ve=a[be],!s.hasOwnProperty(be)||pe===ve||pe===void 0&&ve===void 0||ed(t,n,be,pe,s,ve);return}}for(var ne in a)pe=a[ne],a.hasOwnProperty(ne)&&pe!=null&&!s.hasOwnProperty(ne)&&hn(t,n,ne,null,s,pe);for(we in s)pe=s[we],ve=a[we],!s.hasOwnProperty(we)||pe===ve||pe==null&&ve==null||hn(t,n,we,pe,s,ve)}function U_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],h=u.transferSize,v=u.initiatorType,D=u.duration;if(h&&D&&U_(v)){for(v=0,D=u.responseEnd,s+=1;s<a.length;s++){var q=a[s],fe=q.startTime;if(fe>D)break;var be=q.transferSize,we=q.initiatorType;be&&U_(we)&&(q=q.responseEnd,v+=be*(q<D?1:(D-fe)/(q-fe)))}if(--s,n+=8*(h+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var td=null,nd=null;function nu(t){return t.nodeType===9?t:t.ownerDocument}function L_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function jv(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var O_=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(t){return P_.resolve(null).then(t).catch(Qv)}:O_;function Qv(t){setTimeout(function(){throw t})}function Er(t){return t==="head"}function F_(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ho(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Rl(a);for(var h=a.firstChild;h;){var v=h.nextSibling,D=h.nodeName;h[ba]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=v}}else a==="body"&&Rl(t.ownerDocument.body);a=u}while(a);ho(n)}function z_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jv(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Vi(t.nextSibling),t===null)break}return null}function $v(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Vi(t.nextSibling),t===null))return null;return t}function B_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Vi(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ey(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function I_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function H_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function V_(t,n,a){switch(n=nu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Rl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);kr(t)}var Gi=new Map,G_=new Set;function iu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ga=$.d;$.d={f:ty,r:ny,D:iy,C:ay,L:ry,m:sy,X:ly,S:oy,M:cy};function ty(){var t=Ga.f(),n=jc();return t||n}function ny(t){var n=L(t);n!==null&&n.tag===5&&n.type==="form"?r0(n):Ga.r(t)}var co=typeof document>"u"?null:document;function k_(t,n,a){var s=co;if(s&&typeof n=="string"&&n){var u=un(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),G_.has(u)||(G_.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),ei(n,"link",t),le(n),s.head.appendChild(n)))}}function iy(t){Ga.D(t),k_("dns-prefetch",t,null)}function ay(t,n){Ga.C(t,n),k_("preconnect",t,n)}function ry(t,n,a){Ga.L(t,n,a);var s=co;if(s&&t&&n){var u='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(t)+'"]';var h=u;switch(n){case"style":h=uo(t);break;case"script":h=fo(t)}Gi.has(h)||(t=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Gi.set(h,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(wl(h))||n==="script"&&s.querySelector(Cl(h))||(n=s.createElement("link"),ei(n,"link",t),le(n),s.head.appendChild(n)))}}function sy(t,n){Ga.m(t,n);var a=co;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+un(s)+'"][href="'+un(t)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fo(t)}if(!Gi.has(h)&&(t=b({rel:"modulepreload",href:t},n),Gi.set(h,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cl(h)))return}s=a.createElement("link"),ei(s,"link",t),le(s),a.head.appendChild(s)}}}function oy(t,n,a){Ga.S(t,n,a);var s=co;if(s&&t){var u=ge(s).hoistableStyles,h=uo(t);n=n||"default";var v=u.get(h);if(!v){var D={loading:0,preload:null};if(v=s.querySelector(wl(h)))D.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Gi.get(h))&&cd(t,a);var q=v=s.createElement("link");le(q),ei(q,"link",t),q._p=new Promise(function(fe,be){q.onload=fe,q.onerror=be}),q.addEventListener("load",function(){D.loading|=1}),q.addEventListener("error",function(){D.loading|=2}),D.loading|=4,au(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:D},u.set(h,v)}}}function ly(t,n){Ga.X(t,n);var a=co;if(a&&t){var s=ge(a).hoistableScripts,u=fo(t),h=s.get(u);h||(h=a.querySelector(Cl(u)),h||(t=b({src:t,async:!0},n),(n=Gi.get(u))&&ud(t,n),h=a.createElement("script"),le(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function cy(t,n){Ga.M(t,n);var a=co;if(a&&t){var s=ge(a).hoistableScripts,u=fo(t),h=s.get(u);h||(h=a.querySelector(Cl(u)),h||(t=b({src:t,async:!0,type:"module"},n),(n=Gi.get(u))&&ud(t,n),h=a.createElement("script"),le(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function X_(t,n,a,s){var u=(u=de.current)?iu(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=uo(a.href),a=ge(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=uo(a.href);var h=ge(u).hoistableStyles,v=h.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,v),(h=u.querySelector(wl(t)))&&!h._p&&(v.instance=h,v.state.loading=5),Gi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gi.set(t,a),h||uy(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fo(a),a=ge(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function uo(t){return'href="'+un(t)+'"'}function wl(t){return'link[rel="stylesheet"]['+t+"]"}function W_(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function uy(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),ei(n,"link",a),le(n),t.head.appendChild(n))}function fo(t){return'[src="'+un(t)+'"]'}function Cl(t){return"script[async]"+t}function q_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(s)return n.instance=s,le(s),s;var u=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),le(s),ei(s,"style",u),au(s,a.precedence,t),n.instance=s;case"stylesheet":u=uo(a.href);var h=t.querySelector(wl(u));if(h)return n.state.loading|=4,n.instance=h,le(h),h;s=W_(a),(u=Gi.get(u))&&cd(s,u),h=(t.ownerDocument||t).createElement("link"),le(h);var v=h;return v._p=new Promise(function(D,q){v.onload=D,v.onerror=q}),ei(h,"link",s),n.state.loading|=4,au(h,a.precedence,t),n.instance=h;case"script":return h=fo(a.src),(u=t.querySelector(Cl(h)))?(n.instance=u,le(u),u):(s=a,(u=Gi.get(h))&&(s=b({},a),ud(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),le(u),ei(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,au(s,a.precedence,t));return n.instance}function au(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,v=0;v<s.length;v++){var D=s[v];if(D.dataset.precedence===n)h=D;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ru=null;function Y_(t,n,a){if(ru===null){var s=new Map,u=ru=new Map;u.set(a,s)}else u=ru,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[ba]||h[En]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(n)||"";v=t+v;var D=s.get(v);D?D.push(h):s.set(v,[h])}}return s}function j_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Z_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=uo(s.href),h=n.querySelector(wl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=su.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,le(h);return}h=n.ownerDocument||n,s=W_(s),(u=Gi.get(u))&&cd(s,u),h=h.createElement("link"),le(h);var v=h;v._p=new Promise(function(D,q){v.onload=D,v.onerror=q}),ei(h,"link",s),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=su.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fd=0;function dy(t,n){return t.stylesheets&&t.count===0&&lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&fd===0&&(fd=62500*Yv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>fd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ou=null;function lu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ou=new Map,n.forEach(py,t),ou=null,su.call(t))}function py(t,n){if(!(n.state.loading&4)){var a=ou.get(t);if(a)var s=a.get(null);else{a=new Map,ou.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var v=u[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),h=a.get(v)||s,h===s&&a.set(null,u),a.set(v,u),this.count++,s=su.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Dl={$$typeof:I,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function my(t,n,a,s,u,h,v,D,q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$t(0),this.hiddenUpdates=$t(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function K_(t,n,a,s,u,h,v,D,q,fe,be,we){return t=new my(t,n,a,v,q,fe,be,we,D),n=1,h===!0&&(n|=24),h=Ei(3,null,null,n),t.current=h,h.stateNode=t,n=Xf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},jf(h),t}function Q_(t){return t?(t=Gs,t):Gs}function J_(t,n,a,s,u,h){u=Q_(u),s.context===null?s.context=u:s.pendingContext=u,s=dr(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=pr(t,s,n),a!==null&&(yi(a,t,n),ll(a,t,n))}function $_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){$_(t,n),(t=t.alternate)&&$_(t,n)}function eg(t){if(t.tag===13||t.tag===31){var n=jn(t,67108864);n!==null&&yi(n,t,67108864),hd(t,67108864)}}function tg(t){if(t.tag===13||t.tag===31){var n=Ci();n=ci(n);var a=jn(t,n);a!==null&&yi(a,t,n),hd(t,n)}}var cu=!0;function _y(t,n,a,s){var u=z.T;z.T=null;var h=$.p;try{$.p=2,dd(t,n,a,s)}finally{$.p=h,z.T=u}}function gy(t,n,a,s){var u=z.T;z.T=null;var h=$.p;try{$.p=8,dd(t,n,a,s)}finally{$.p=h,z.T=u}}function dd(t,n,a,s){if(cu){var u=pd(s);if(u===null)$h(t,n,s,uu,a),ig(t,s);else if(vy(u,t,n,a,s))s.stopPropagation();else if(ig(t,s),n&4&&-1<xy.indexOf(t)){for(;u!==null;){var h=L(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=Ue(h.pendingLanes);if(v!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;v;){var q=1<<31-lt(v);D.entanglements[1]|=q,v&=~q}pa(h),(rn&6)===0&&(qc=w()+500,El(0))}}break;case 31:case 13:D=jn(h,2),D!==null&&yi(D,h,2),jc(),hd(h,2)}if(h=pd(s),h===null&&$h(t,n,s,uu,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else $h(t,n,s,null,a)}}function pd(t){return t=Wo(t),md(t)}var uu=null;function md(t){if(uu=null,t=la(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=p(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uu=t,null}function ng(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oe()){case Ae:return 2;case Le:return 8;case re:case Ze:return 32;case We:return 268435456;default:return 32}default:return 32}}var _d=!1,Tr=null,Ar=null,Rr=null,Ul=new Map,Ll=new Map,wr=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ig(t,n){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(n.pointerId)}}function Nl(t,n,a,s,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},n!==null&&(n=L(n),n!==null&&eg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function vy(t,n,a,s,u){switch(n){case"focusin":return Tr=Nl(Tr,t,n,a,s,u),!0;case"dragenter":return Ar=Nl(Ar,t,n,a,s,u),!0;case"mouseover":return Rr=Nl(Rr,t,n,a,s,u),!0;case"pointerover":var h=u.pointerId;return Ul.set(h,Nl(Ul.get(h)||null,t,n,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,Ll.set(h,Nl(Ll.get(h)||null,t,n,a,s,u)),!0}return!1}function ag(t){var n=la(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=p(a),n!==null){t.blockedOn=n,Gt(t.priority,function(){tg(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,Gt(t.priority,function(){tg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Xo=s,a.target.dispatchEvent(s),Xo=null}else return n=L(a),n!==null&&eg(n),t.blockedOn=a,!1;n.shift()}return!0}function rg(t,n,a){fu(t)&&a.delete(n)}function yy(){_d=!1,Tr!==null&&fu(Tr)&&(Tr=null),Ar!==null&&fu(Ar)&&(Ar=null),Rr!==null&&fu(Rr)&&(Rr=null),Ul.forEach(rg),Ll.forEach(rg)}function hu(t,n){t.blockedOn===n&&(t.blockedOn=null,_d||(_d=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yy)))}var du=null;function sg(t){du!==t&&(du=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){du===t&&(du=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(md(s||a)===null)continue;break}var h=L(a);h!==null&&(t.splice(n,3),n-=3,ph(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ho(t){function n(q){return hu(q,t)}Tr!==null&&hu(Tr,t),Ar!==null&&hu(Ar,t),Rr!==null&&hu(Rr,t),Ul.forEach(n),Ll.forEach(n);for(var a=0;a<wr.length;a++){var s=wr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)ag(a),a.blockedOn===null&&wr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],v=u[yn]||null;if(typeof h=="function")v||sg(a);else if(v){var D=null;if(h&&h.hasAttribute("formAction")){if(u=h,v=h[yn]||null)D=v.formAction;else if(md(u)!==null)continue}else D=v.action;typeof D=="function"?a[s+1]=D:(a.splice(s,3),s-=3),sg(a)}}}function og(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gd(t){this._internalRoot=t}pu.prototype.render=gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Ci();J_(a,s,t,n,null,null)},pu.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;J_(t.current,2,null,t,null,null),jc(),n[ni]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Sa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wr.length&&n!==0&&n<wr[a].priority;a++);wr.splice(a,0,t),a===0&&ag(t)}};var lg=e.version;if(lg!=="19.2.0")throw Error(r(527,lg,"19.2.0"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=_(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var Sy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Ne=mu.inject(Sy),Pe=mu}catch{}}return Pl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=m0,h=_0,v=g0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=K_(t,1,!1,null,null,a,s,null,u,h,v,og),t[ni]=n.current,Jh(t),new gd(n)},Pl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",h=m0,v=_0,D=g0,q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(q=a.formState)),n=K_(t,1,!0,n,a??null,s,u,q,h,v,D,og),n.context=Q_(null),a=n.current,s=Ci(),s=ci(s),u=dr(s),u.callback=null,pr(a,u,s),a=s,n.current.lanes=a,Yn(n,a),pa(n),t[ni]=n.current,Jh(t),new pu(n)},Pl.version="19.2.0",Pl}var xg;function Ny(){if(xg)return yd.exports;xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yd.exports=Ly(),yd.exports}var Oy=Ny();const Kp="181",Co={ROTATE:0,DOLLY:1,PAN:2},wo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,vg=1,Fy=2,wx=1,zy=2,Za=3,Hr=0,Mi=1,_a=2,Ja=0,Do=1,yg=2,Sg=3,bg=4,By=5,gs=100,Iy=101,Hy=102,Vy=103,Gy=104,ky=200,Xy=201,Wy=202,qy=203,rp=204,sp=205,Yy=206,jy=207,Zy=208,Ky=209,Qy=210,Jy=211,$y=212,eS=213,tS=214,op=0,lp=1,cp=2,Lo=3,up=4,fp=5,hp=6,dp=7,Cx=0,nS=1,iS=2,Ir=0,aS=1,rS=2,sS=3,oS=4,lS=5,cS=6,uS=7,Dx=300,No=301,Oo=302,pp=303,mp=304,Ku=306,_p=1e3,Ka=1001,gp=1002,Li=1003,fS=1004,_u=1005,qi=1006,Ed=1007,vs=1008,va=1009,Ux=1010,Lx=1011,ql=1012,Qp=1013,ys=1014,Qa=1015,zo=1016,Jp=1017,$p=1018,Yl=1020,Nx=35902,Ox=35899,Px=1021,Fx=1022,ra=1023,jl=1026,Zl=1027,zx=1028,em=1029,tm=1030,nm=1031,im=1033,Iu=33776,Hu=33777,Vu=33778,Gu=33779,xp=35840,vp=35841,yp=35842,Sp=35843,bp=36196,Mp=37492,Ep=37496,Tp=37808,Ap=37809,Rp=37810,wp=37811,Cp=37812,Dp=37813,Up=37814,Lp=37815,Np=37816,Op=37817,Pp=37818,Fp=37819,zp=37820,Bp=37821,Ip=36492,Hp=36494,Vp=36495,Gp=36283,kp=36284,Xp=36285,Wp=36286,hS=3200,dS=3201,Bx=0,pS=1,zr="",Xi="srgb",Po="srgb-linear",Wu="linear",pn="srgb",po=7680,Mg=519,mS=512,_S=513,gS=514,Ix=515,xS=516,vS=517,yS=518,SS=519,Eg=35044,Tg="300 es",ga=2e3,qu=2001;function Hx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bS(){const o=Yu("canvas");return o.style.display="block",o}const Ag={};function Rg(...o){const e="THREE."+o.shift();console.log(e,...o)}function wt(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Cn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Kl(...o){const e=o.join(" ");e in Ag||(Ag[e]=!0,wt(...o))}function MS(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,p=l.length;f<p;f++)l[f].call(this,e);e.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,qp=180/Math.PI;function Ql(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(si[o&255]+si[o>>8&255]+si[o>>16&255]+si[o>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[i&63|128]+si[i>>8&255]+"-"+si[i>>16&255]+si[i>>24&255]+si[r&255]+si[r>>8&255]+si[r>>16&255]+si[r>>24&255]).toLowerCase()}function qt(o,e,i){return Math.max(e,Math.min(i,o))}function ES(o,e){return(o%e+e)%e}function Td(o,e,i){return(1-i)*o+i*e}function Fl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Si(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const TS={DEG2RAD:ku};class Ut{constructor(e=0,i=0){Ut.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=qt(this.x,e.x,i.x),this.y=qt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=qt(this.x,e,i),this.y=qt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(qt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,p=this.y-e.y;return this.x=f*r-p*l+e.x,this.y=f*l+p*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ss{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,p,m){let x=r[l+0],_=r[l+1],S=r[l+2],b=r[l+3],E=f[p+0],A=f[p+1],U=f[p+2],N=f[p+3];if(m<=0){e[i+0]=x,e[i+1]=_,e[i+2]=S,e[i+3]=b;return}if(m>=1){e[i+0]=E,e[i+1]=A,e[i+2]=U,e[i+3]=N;return}if(b!==N||x!==E||_!==A||S!==U){let T=x*E+_*A+S*U+b*N;T<0&&(E=-E,A=-A,U=-U,N=-N,T=-T);let M=1-m;if(T<.9995){const X=Math.acos(T),I=Math.sin(X);M=Math.sin(M*X)/I,m=Math.sin(m*X)/I,x=x*M+E*m,_=_*M+A*m,S=S*M+U*m,b=b*M+N*m}else{x=x*M+E*m,_=_*M+A*m,S=S*M+U*m,b=b*M+N*m;const X=1/Math.sqrt(x*x+_*_+S*S+b*b);x*=X,_*=X,S*=X,b*=X}}e[i]=x,e[i+1]=_,e[i+2]=S,e[i+3]=b}static multiplyQuaternionsFlat(e,i,r,l,f,p){const m=r[l],x=r[l+1],_=r[l+2],S=r[l+3],b=f[p],E=f[p+1],A=f[p+2],U=f[p+3];return e[i]=m*U+S*b+x*A-_*E,e[i+1]=x*U+S*E+_*b-m*A,e[i+2]=_*U+S*A+m*E-x*b,e[i+3]=S*U-m*b-x*E-_*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,p=e._order,m=Math.cos,x=Math.sin,_=m(r/2),S=m(l/2),b=m(f/2),E=x(r/2),A=x(l/2),U=x(f/2);switch(p){case"XYZ":this._x=E*S*b+_*A*U,this._y=_*A*b-E*S*U,this._z=_*S*U+E*A*b,this._w=_*S*b-E*A*U;break;case"YXZ":this._x=E*S*b+_*A*U,this._y=_*A*b-E*S*U,this._z=_*S*U-E*A*b,this._w=_*S*b+E*A*U;break;case"ZXY":this._x=E*S*b-_*A*U,this._y=_*A*b+E*S*U,this._z=_*S*U+E*A*b,this._w=_*S*b-E*A*U;break;case"ZYX":this._x=E*S*b-_*A*U,this._y=_*A*b+E*S*U,this._z=_*S*U-E*A*b,this._w=_*S*b+E*A*U;break;case"YZX":this._x=E*S*b+_*A*U,this._y=_*A*b+E*S*U,this._z=_*S*U-E*A*b,this._w=_*S*b-E*A*U;break;case"XZY":this._x=E*S*b-_*A*U,this._y=_*A*b-E*S*U,this._z=_*S*U+E*A*b,this._w=_*S*b+E*A*U;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],p=i[1],m=i[5],x=i[9],_=i[2],S=i[6],b=i[10],E=r+m+b;if(E>0){const A=.5/Math.sqrt(E+1);this._w=.25/A,this._x=(S-x)*A,this._y=(f-_)*A,this._z=(p-l)*A}else if(r>m&&r>b){const A=2*Math.sqrt(1+r-m-b);this._w=(S-x)/A,this._x=.25*A,this._y=(l+p)/A,this._z=(f+_)/A}else if(m>b){const A=2*Math.sqrt(1+m-r-b);this._w=(f-_)/A,this._x=(l+p)/A,this._y=.25*A,this._z=(x+S)/A}else{const A=2*Math.sqrt(1+b-r-m);this._w=(p-l)/A,this._x=(f+_)/A,this._y=(x+S)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,p=e._w,m=i._x,x=i._y,_=i._z,S=i._w;return this._x=r*S+p*m+l*_-f*x,this._y=l*S+p*x+f*m-r*_,this._z=f*S+p*_+r*x-l*m,this._w=p*S-r*m-l*x-f*_,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,f=e._z,p=e._w,m=this.dot(e);m<0&&(r=-r,l=-l,f=-f,p=-p,m=-m);let x=1-i;if(m<.9995){const _=Math.acos(m),S=Math.sin(_);x=Math.sin(x*_)/S,i=Math.sin(i*_)/S,this._x=this._x*x+r*i,this._y=this._y*x+l*i,this._z=this._z*x+f*i,this._w=this._w*x+p*i,this._onChangeCallback()}else this._x=this._x*x+r*i,this._y=this._y*x+l*i,this._z=this._z*x+f*i,this._w=this._w*x+p*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _e{constructor(e=0,i=0,r=0){_e.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(wg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(wg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,p=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*p,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*p,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*p,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,p=e.y,m=e.z,x=e.w,_=2*(p*l-m*r),S=2*(m*i-f*l),b=2*(f*r-p*i);return this.x=i+x*_+p*b-m*S,this.y=r+x*S+m*_-f*b,this.z=l+x*b+f*S-p*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=qt(this.x,e.x,i.x),this.y=qt(this.y,e.y,i.y),this.z=qt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=qt(this.x,e,i),this.y=qt(this.y,e,i),this.z=qt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,p=i.x,m=i.y,x=i.z;return this.x=l*x-f*m,this.y=f*p-r*x,this.z=r*m-l*p,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(qt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new _e,wg=new Ss;class zt{constructor(e,i,r,l,f,p,m,x,_){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,m,x,_)}set(e,i,r,l,f,p,m,x,_){const S=this.elements;return S[0]=e,S[1]=l,S[2]=m,S[3]=i,S[4]=f,S[5]=x,S[6]=r,S[7]=p,S[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],m=r[3],x=r[6],_=r[1],S=r[4],b=r[7],E=r[2],A=r[5],U=r[8],N=l[0],T=l[3],M=l[6],X=l[1],I=l[4],Y=l[7],ee=l[2],V=l[5],k=l[8];return f[0]=p*N+m*X+x*ee,f[3]=p*T+m*I+x*V,f[6]=p*M+m*Y+x*k,f[1]=_*N+S*X+b*ee,f[4]=_*T+S*I+b*V,f[7]=_*M+S*Y+b*k,f[2]=E*N+A*X+U*ee,f[5]=E*T+A*I+U*V,f[8]=E*M+A*Y+U*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],x=e[6],_=e[7],S=e[8];return i*p*S-i*m*_-r*f*S+r*m*x+l*f*_-l*p*x}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],x=e[6],_=e[7],S=e[8],b=S*p-m*_,E=m*x-S*f,A=_*f-p*x,U=i*b+r*E+l*A;if(U===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/U;return e[0]=b*N,e[1]=(l*_-S*r)*N,e[2]=(m*r-l*p)*N,e[3]=E*N,e[4]=(S*i-l*x)*N,e[5]=(l*f-m*i)*N,e[6]=A*N,e[7]=(r*x-_*i)*N,e[8]=(p*i-r*f)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,p,m){const x=Math.cos(f),_=Math.sin(f);return this.set(r*x,r*_,-r*(x*p+_*m)+p+e,-l*_,l*x,-l*(-_*p+x*m)+m+i,0,0,1),this}scale(e,i){return this.premultiply(Rd.makeScale(e,i)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new zt,Cg=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dg=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const o={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(l,f,p){return this.enabled===!1||f===p||!f||!p||(this.spaces[f].transfer===pn&&(l.r=$a(l.r),l.g=$a(l.g),l.b=$a(l.b)),this.spaces[f].primaries!==this.spaces[p].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[p].fromXYZ)),this.spaces[p].transfer===pn&&(l.r=Uo(l.r),l.g=Uo(l.g),l.b=Uo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===zr?Wu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,p){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Kl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Kl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Po]:{primaries:e,whitePoint:r,transfer:Wu,toXYZ:Cg,fromXYZ:Dg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Xi},outputColorSpaceConfig:{drawingBufferColorSpace:Xi}},[Xi]:{primaries:e,whitePoint:r,transfer:pn,toXYZ:Cg,fromXYZ:Dg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Xi}}}),o}const an=AS();function $a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mo;class RS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mo===void 0&&(mo=Yu("canvas")),mo.width=e.width,mo.height=e.height;const l=mo.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=mo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let p=0;p<f.length;p++)f[p]=$a(f[p]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($a(i[r]/255)*255):i[r]=$a(i[r]);return{data:i,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wS=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Ql(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let p=0,m=l.length;p<m;p++)l[p].isDataTexture?f.push(wd(l[p].image)):f.push(wd(l[p]))}else f=wd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function wd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?RS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let CS=0;const Cd=new _e;class pi extends Es{constructor(e=pi.DEFAULT_IMAGE,i=pi.DEFAULT_MAPPING,r=Ka,l=Ka,f=qi,p=vs,m=ra,x=va,_=pi.DEFAULT_ANISOTROPY,S=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Ql(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=p,this.anisotropy=_,this.format=m,this.internalFormat=null,this.type=x,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){wt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){wt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _p:e.x=e.x-Math.floor(e.x);break;case Ka:e.x=e.x<0?0:1;break;case gp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _p:e.y=e.y-Math.floor(e.y);break;case Ka:e.y=e.y<0?0:1;break;case gp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=Dx;pi.DEFAULT_ANISOTROPY=1;class Dn{constructor(e=0,i=0,r=0,l=1){Dn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,p=e.elements;return this.x=p[0]*i+p[4]*r+p[8]*l+p[12]*f,this.y=p[1]*i+p[5]*r+p[9]*l+p[13]*f,this.z=p[2]*i+p[6]*r+p[10]*l+p[14]*f,this.w=p[3]*i+p[7]*r+p[11]*l+p[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const x=e.elements,_=x[0],S=x[4],b=x[8],E=x[1],A=x[5],U=x[9],N=x[2],T=x[6],M=x[10];if(Math.abs(S-E)<.01&&Math.abs(b-N)<.01&&Math.abs(U-T)<.01){if(Math.abs(S+E)<.1&&Math.abs(b+N)<.1&&Math.abs(U+T)<.1&&Math.abs(_+A+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(_+1)/2,Y=(A+1)/2,ee=(M+1)/2,V=(S+E)/4,k=(b+N)/4,he=(U+T)/4;return I>Y&&I>ee?I<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(I),l=V/r,f=k/r):Y>ee?Y<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(Y),r=V/l,f=he/l):ee<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(ee),r=k/f,l=he/f),this.set(r,l,f,i),this}let X=Math.sqrt((T-U)*(T-U)+(b-N)*(b-N)+(E-S)*(E-S));return Math.abs(X)<.001&&(X=1),this.x=(T-U)/X,this.y=(b-N)/X,this.z=(E-S)/X,this.w=Math.acos((_+A+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=qt(this.x,e.x,i.x),this.y=qt(this.y,e.y,i.y),this.z=qt(this.z,e.z,i.z),this.w=qt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=qt(this.x,e,i),this.y=qt(this.y,e,i),this.z=qt(this.z,e,i),this.w=qt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DS extends Es{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Dn(0,0,e,i),this.scissorTest=!1,this.viewport=new Dn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new pi(l);this.textures=[];const p=r.count;for(let m=0;m<p;m++)this.textures[m]=f.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:qi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new am(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends DS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Vx extends pi{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class US extends pi{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(e=new _e(1/0,1/0,1/0),i=new _e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ta.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ta.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ta.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let p=0,m=f.count;p<m;p++)e.isMesh===!0?e.getVertexPosition(p,ta):ta.fromBufferAttribute(f,p),ta.applyMatrix4(e.matrixWorld),this.expandByPoint(ta);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gu.copy(r.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const l=e.children;for(let f=0,p=l.length;f<p;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ta),ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zl),xu.subVectors(this.max,zl),_o.subVectors(e.a,zl),go.subVectors(e.b,zl),xo.subVectors(e.c,zl),Dr.subVectors(go,_o),Ur.subVectors(xo,go),fs.subVectors(_o,xo);let i=[0,-Dr.z,Dr.y,0,-Ur.z,Ur.y,0,-fs.z,fs.y,Dr.z,0,-Dr.x,Ur.z,0,-Ur.x,fs.z,0,-fs.x,-Dr.y,Dr.x,0,-Ur.y,Ur.x,0,-fs.y,fs.x,0];return!Dd(i,_o,go,xo,xu)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,_o,go,xo,xu))?!1:(vu.crossVectors(Dr,Ur),i=[vu.x,vu.y,vu.z],Dd(i,_o,go,xo,xu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ta).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ta).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ka=[new _e,new _e,new _e,new _e,new _e,new _e,new _e,new _e],ta=new _e,gu=new Ms,_o=new _e,go=new _e,xo=new _e,Dr=new _e,Ur=new _e,fs=new _e,zl=new _e,xu=new _e,vu=new _e,hs=new _e;function Dd(o,e,i,r,l){for(let f=0,p=o.length-3;f<=p;f+=3){hs.fromArray(o,f);const m=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),x=e.dot(hs),_=i.dot(hs),S=r.dot(hs);if(Math.max(-Math.max(x,_,S),Math.min(x,_,S))>m)return!1}return!0}const LS=new Ms,Bl=new _e,Ud=new _e;class Qu{constructor(e=new _e,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):LS.setFromPoints(e).getCenter(r);let l=0;for(let f=0,p=e.length;f<p;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bl.subVectors(e,this.center);const i=Bl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bl.copy(e.center).add(Ud)),this.expandByPoint(Bl.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xa=new _e,Ld=new _e,yu=new _e,Lr=new _e,Nd=new _e,Su=new _e,Od=new _e;class Ju{constructor(e=new _e,i=new _e(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Xa.copy(this.origin).addScaledVector(this.direction,i),Xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ld.copy(e).add(i).multiplyScalar(.5),yu.copy(i).sub(e).normalize(),Lr.copy(this.origin).sub(Ld);const f=e.distanceTo(i)*.5,p=-this.direction.dot(yu),m=Lr.dot(this.direction),x=-Lr.dot(yu),_=Lr.lengthSq(),S=Math.abs(1-p*p);let b,E,A,U;if(S>0)if(b=p*x-m,E=p*m-x,U=f*S,b>=0)if(E>=-U)if(E<=U){const N=1/S;b*=N,E*=N,A=b*(b+p*E+2*m)+E*(p*b+E+2*x)+_}else E=f,b=Math.max(0,-(p*E+m)),A=-b*b+E*(E+2*x)+_;else E=-f,b=Math.max(0,-(p*E+m)),A=-b*b+E*(E+2*x)+_;else E<=-U?(b=Math.max(0,-(-p*f+m)),E=b>0?-f:Math.min(Math.max(-f,-x),f),A=-b*b+E*(E+2*x)+_):E<=U?(b=0,E=Math.min(Math.max(-f,-x),f),A=E*(E+2*x)+_):(b=Math.max(0,-(p*f+m)),E=b>0?f:Math.min(Math.max(-f,-x),f),A=-b*b+E*(E+2*x)+_);else E=p>0?-f:f,b=Math.max(0,-(p*E+m)),A=-b*b+E*(E+2*x)+_;return r&&r.copy(this.origin).addScaledVector(this.direction,b),l&&l.copy(Ld).addScaledVector(yu,E),A}intersectSphere(e,i){Xa.subVectors(e.center,this.origin);const r=Xa.dot(this.direction),l=Xa.dot(Xa)-r*r,f=e.radius*e.radius;if(l>f)return null;const p=Math.sqrt(f-l),m=r-p,x=r+p;return x<0?null:m<0?this.at(x,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,p,m,x;const _=1/this.direction.x,S=1/this.direction.y,b=1/this.direction.z,E=this.origin;return _>=0?(r=(e.min.x-E.x)*_,l=(e.max.x-E.x)*_):(r=(e.max.x-E.x)*_,l=(e.min.x-E.x)*_),S>=0?(f=(e.min.y-E.y)*S,p=(e.max.y-E.y)*S):(f=(e.max.y-E.y)*S,p=(e.min.y-E.y)*S),r>p||f>l||((f>r||isNaN(r))&&(r=f),(p<l||isNaN(l))&&(l=p),b>=0?(m=(e.min.z-E.z)*b,x=(e.max.z-E.z)*b):(m=(e.max.z-E.z)*b,x=(e.min.z-E.z)*b),r>x||m>l)||((m>r||r!==r)&&(r=m),(x<l||l!==l)&&(l=x),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Xa)!==null}intersectTriangle(e,i,r,l,f){Nd.subVectors(i,e),Su.subVectors(r,e),Od.crossVectors(Nd,Su);let p=this.direction.dot(Od),m;if(p>0){if(l)return null;m=1}else if(p<0)m=-1,p=-p;else return null;Lr.subVectors(this.origin,e);const x=m*this.direction.dot(Su.crossVectors(Lr,Su));if(x<0)return null;const _=m*this.direction.dot(Nd.cross(Lr));if(_<0||x+_>p)return null;const S=-m*Lr.dot(Od);return S<0?null:this.at(S/p,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mn{constructor(e,i,r,l,f,p,m,x,_,S,b,E,A,U,N,T){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,m,x,_,S,b,E,A,U,N,T)}set(e,i,r,l,f,p,m,x,_,S,b,E,A,U,N,T){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=f,M[5]=p,M[9]=m,M[13]=x,M[2]=_,M[6]=S,M[10]=b,M[14]=E,M[3]=A,M[7]=U,M[11]=N,M[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/vo.setFromMatrixColumn(e,0).length(),f=1/vo.setFromMatrixColumn(e,1).length(),p=1/vo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*p,i[9]=r[9]*p,i[10]=r[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,p=Math.cos(r),m=Math.sin(r),x=Math.cos(l),_=Math.sin(l),S=Math.cos(f),b=Math.sin(f);if(e.order==="XYZ"){const E=p*S,A=p*b,U=m*S,N=m*b;i[0]=x*S,i[4]=-x*b,i[8]=_,i[1]=A+U*_,i[5]=E-N*_,i[9]=-m*x,i[2]=N-E*_,i[6]=U+A*_,i[10]=p*x}else if(e.order==="YXZ"){const E=x*S,A=x*b,U=_*S,N=_*b;i[0]=E+N*m,i[4]=U*m-A,i[8]=p*_,i[1]=p*b,i[5]=p*S,i[9]=-m,i[2]=A*m-U,i[6]=N+E*m,i[10]=p*x}else if(e.order==="ZXY"){const E=x*S,A=x*b,U=_*S,N=_*b;i[0]=E-N*m,i[4]=-p*b,i[8]=U+A*m,i[1]=A+U*m,i[5]=p*S,i[9]=N-E*m,i[2]=-p*_,i[6]=m,i[10]=p*x}else if(e.order==="ZYX"){const E=p*S,A=p*b,U=m*S,N=m*b;i[0]=x*S,i[4]=U*_-A,i[8]=E*_+N,i[1]=x*b,i[5]=N*_+E,i[9]=A*_-U,i[2]=-_,i[6]=m*x,i[10]=p*x}else if(e.order==="YZX"){const E=p*x,A=p*_,U=m*x,N=m*_;i[0]=x*S,i[4]=N-E*b,i[8]=U*b+A,i[1]=b,i[5]=p*S,i[9]=-m*S,i[2]=-_*S,i[6]=A*b+U,i[10]=E-N*b}else if(e.order==="XZY"){const E=p*x,A=p*_,U=m*x,N=m*_;i[0]=x*S,i[4]=-b,i[8]=_*S,i[1]=E*b+N,i[5]=p*S,i[9]=A*b-U,i[2]=U*b-A,i[6]=m*S,i[10]=N*b+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,OS)}lookAt(e,i,r){const l=this.elements;return Di.subVectors(e,i),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Nr.crossVectors(r,Di),Nr.lengthSq()===0&&(Math.abs(r.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Nr.crossVectors(r,Di)),Nr.normalize(),bu.crossVectors(Di,Nr),l[0]=Nr.x,l[4]=bu.x,l[8]=Di.x,l[1]=Nr.y,l[5]=bu.y,l[9]=Di.y,l[2]=Nr.z,l[6]=bu.z,l[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],m=r[4],x=r[8],_=r[12],S=r[1],b=r[5],E=r[9],A=r[13],U=r[2],N=r[6],T=r[10],M=r[14],X=r[3],I=r[7],Y=r[11],ee=r[15],V=l[0],k=l[4],he=l[8],P=l[12],O=l[1],J=l[5],se=l[9],ue=l[13],Me=l[2],Se=l[6],z=l[10],$=l[14],ie=l[3],Te=l[7],Ce=l[11],H=l[15];return f[0]=p*V+m*O+x*Me+_*ie,f[4]=p*k+m*J+x*Se+_*Te,f[8]=p*he+m*se+x*z+_*Ce,f[12]=p*P+m*ue+x*$+_*H,f[1]=S*V+b*O+E*Me+A*ie,f[5]=S*k+b*J+E*Se+A*Te,f[9]=S*he+b*se+E*z+A*Ce,f[13]=S*P+b*ue+E*$+A*H,f[2]=U*V+N*O+T*Me+M*ie,f[6]=U*k+N*J+T*Se+M*Te,f[10]=U*he+N*se+T*z+M*Ce,f[14]=U*P+N*ue+T*$+M*H,f[3]=X*V+I*O+Y*Me+ee*ie,f[7]=X*k+I*J+Y*Se+ee*Te,f[11]=X*he+I*se+Y*z+ee*Ce,f[15]=X*P+I*ue+Y*$+ee*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],p=e[1],m=e[5],x=e[9],_=e[13],S=e[2],b=e[6],E=e[10],A=e[14],U=e[3],N=e[7],T=e[11],M=e[15];return U*(+f*x*b-l*_*b-f*m*E+r*_*E+l*m*A-r*x*A)+N*(+i*x*A-i*_*E+f*p*E-l*p*A+l*_*S-f*x*S)+T*(+i*_*b-i*m*A-f*p*b+r*p*A+f*m*S-r*_*S)+M*(-l*m*S-i*x*b+i*m*E+l*p*b-r*p*E+r*x*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],x=e[6],_=e[7],S=e[8],b=e[9],E=e[10],A=e[11],U=e[12],N=e[13],T=e[14],M=e[15],X=b*T*_-N*E*_+N*x*A-m*T*A-b*x*M+m*E*M,I=U*E*_-S*T*_-U*x*A+p*T*A+S*x*M-p*E*M,Y=S*N*_-U*b*_+U*m*A-p*N*A-S*m*M+p*b*M,ee=U*b*x-S*N*x-U*m*E+p*N*E+S*m*T-p*b*T,V=i*X+r*I+l*Y+f*ee;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/V;return e[0]=X*k,e[1]=(N*E*f-b*T*f-N*l*A+r*T*A+b*l*M-r*E*M)*k,e[2]=(m*T*f-N*x*f+N*l*_-r*T*_-m*l*M+r*x*M)*k,e[3]=(b*x*f-m*E*f-b*l*_+r*E*_+m*l*A-r*x*A)*k,e[4]=I*k,e[5]=(S*T*f-U*E*f+U*l*A-i*T*A-S*l*M+i*E*M)*k,e[6]=(U*x*f-p*T*f-U*l*_+i*T*_+p*l*M-i*x*M)*k,e[7]=(p*E*f-S*x*f+S*l*_-i*E*_-p*l*A+i*x*A)*k,e[8]=Y*k,e[9]=(U*b*f-S*N*f-U*r*A+i*N*A+S*r*M-i*b*M)*k,e[10]=(p*N*f-U*m*f+U*r*_-i*N*_-p*r*M+i*m*M)*k,e[11]=(S*m*f-p*b*f-S*r*_+i*b*_+p*r*A-i*m*A)*k,e[12]=ee*k,e[13]=(S*N*l-U*b*l+U*r*E-i*N*E-S*r*T+i*b*T)*k,e[14]=(U*m*l-p*N*l-U*r*x+i*N*x+p*r*T-i*m*T)*k,e[15]=(p*b*l-S*m*l+S*r*x-i*b*x-p*r*E+i*m*E)*k,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,p=e.x,m=e.y,x=e.z,_=f*p,S=f*m;return this.set(_*p+r,_*m-l*x,_*x+l*m,0,_*m+l*x,S*m+r,S*x-l*p,0,_*x-l*m,S*x+l*p,f*x*x+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,p){return this.set(1,r,f,0,e,1,p,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,p=i._y,m=i._z,x=i._w,_=f+f,S=p+p,b=m+m,E=f*_,A=f*S,U=f*b,N=p*S,T=p*b,M=m*b,X=x*_,I=x*S,Y=x*b,ee=r.x,V=r.y,k=r.z;return l[0]=(1-(N+M))*ee,l[1]=(A+Y)*ee,l[2]=(U-I)*ee,l[3]=0,l[4]=(A-Y)*V,l[5]=(1-(E+M))*V,l[6]=(T+X)*V,l[7]=0,l[8]=(U+I)*k,l[9]=(T-X)*k,l[10]=(1-(E+N))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=vo.set(l[0],l[1],l[2]).length();const p=vo.set(l[4],l[5],l[6]).length(),m=vo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],na.copy(this);const _=1/f,S=1/p,b=1/m;return na.elements[0]*=_,na.elements[1]*=_,na.elements[2]*=_,na.elements[4]*=S,na.elements[5]*=S,na.elements[6]*=S,na.elements[8]*=b,na.elements[9]*=b,na.elements[10]*=b,i.setFromRotationMatrix(na),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,f,p,m=ga,x=!1){const _=this.elements,S=2*f/(i-e),b=2*f/(r-l),E=(i+e)/(i-e),A=(r+l)/(r-l);let U,N;if(x)U=f/(p-f),N=p*f/(p-f);else if(m===ga)U=-(p+f)/(p-f),N=-2*p*f/(p-f);else if(m===qu)U=-p/(p-f),N=-p*f/(p-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return _[0]=S,_[4]=0,_[8]=E,_[12]=0,_[1]=0,_[5]=b,_[9]=A,_[13]=0,_[2]=0,_[6]=0,_[10]=U,_[14]=N,_[3]=0,_[7]=0,_[11]=-1,_[15]=0,this}makeOrthographic(e,i,r,l,f,p,m=ga,x=!1){const _=this.elements,S=2/(i-e),b=2/(r-l),E=-(i+e)/(i-e),A=-(r+l)/(r-l);let U,N;if(x)U=1/(p-f),N=p/(p-f);else if(m===ga)U=-2/(p-f),N=-(p+f)/(p-f);else if(m===qu)U=-1/(p-f),N=-f/(p-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return _[0]=S,_[4]=0,_[8]=0,_[12]=E,_[1]=0,_[5]=b,_[9]=0,_[13]=A,_[2]=0,_[6]=0,_[10]=U,_[14]=N,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const vo=new _e,na=new Mn,NS=new _e(0,0,0),OS=new _e(1,1,1),Nr=new _e,bu=new _e,Di=new _e,Ug=new Mn,Lg=new Ss;class ya{constructor(e=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],p=l[4],m=l[8],x=l[1],_=l[5],S=l[9],b=l[2],E=l[6],A=l[10];switch(i){case"XYZ":this._y=Math.asin(qt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,A),this._z=Math.atan2(-p,f)):(this._x=Math.atan2(E,_),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(m,A),this._z=Math.atan2(x,_)):(this._y=Math.atan2(-b,f),this._z=0);break;case"ZXY":this._x=Math.asin(qt(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-b,A),this._z=Math.atan2(-p,_)):(this._y=0,this._z=Math.atan2(x,f));break;case"ZYX":this._y=Math.asin(-qt(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(E,A),this._z=Math.atan2(x,f)):(this._x=0,this._z=Math.atan2(-p,_));break;case"YZX":this._z=Math.asin(qt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(-S,_),this._y=Math.atan2(-b,f)):(this._x=0,this._y=Math.atan2(m,A));break;case"XZY":this._z=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(E,_),this._y=Math.atan2(m,f)):(this._x=Math.atan2(-S,A),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ug,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Lg.setFromEuler(this),this.setFromQuaternion(Lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PS=0;const Ng=new _e,yo=new Ss,Wa=new Mn,Mu=new _e,Il=new _e,FS=new _e,zS=new Ss,Og=new _e(1,0,0),Pg=new _e(0,1,0),Fg=new _e(0,0,1),zg={type:"added"},BS={type:"removed"},So={type:"childadded",child:null},Pd={type:"childremoved",child:null};class ti extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new _e,i=new ya,r=new Ss,l=new _e(1,1,1);function f(){r.setFromEuler(i,!1)}function p(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Mn},normalMatrix:{value:new zt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yo.setFromAxisAngle(e,i),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,i){return yo.setFromAxisAngle(e,i),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(Og,e)}rotateY(e){return this.rotateOnAxis(Pg,e)}rotateZ(e){return this.rotateOnAxis(Fg,e)}translateOnAxis(e,i){return Ng.copy(e).applyQuaternion(this.quaternion),this.position.add(Ng.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Og,e)}translateY(e){return this.translateOnAxis(Pg,e)}translateZ(e){return this.translateOnAxis(Fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mu.copy(e):Mu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(Il,Mu,this.up):Wa.lookAt(Mu,Il,this.up),this.quaternion.setFromRotationMatrix(Wa),l&&(Wa.extractRotation(l.matrixWorld),yo.setFromRotationMatrix(Wa),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Cn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zg),So.child=e,this.dispatchEvent(So),So.child=null):Cn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(BS),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zg),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const p=this.children[r].getObjectByProperty(e,i);if(p!==void 0)return p}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(m,x){return m[x.uuid]===void 0&&(m[x.uuid]=x.toJSON(e)),x.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const x=m.shapes;if(Array.isArray(x))for(let _=0,S=x.length;_<S;_++){const b=x[_];f(e.shapes,b)}else f(e.shapes,x)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let x=0,_=this.material.length;x<_;x++)m.push(f(e.materials,this.material[x]));l.material=m}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const x=this.animations[m];l.animations.push(f(e.animations,x))}}if(i){const m=p(e.geometries),x=p(e.materials),_=p(e.textures),S=p(e.images),b=p(e.shapes),E=p(e.skeletons),A=p(e.animations),U=p(e.nodes);m.length>0&&(r.geometries=m),x.length>0&&(r.materials=x),_.length>0&&(r.textures=_),S.length>0&&(r.images=S),b.length>0&&(r.shapes=b),E.length>0&&(r.skeletons=E),A.length>0&&(r.animations=A),U.length>0&&(r.nodes=U)}return r.object=l,r;function p(m){const x=[];for(const _ in m){const S=m[_];delete S.metadata,x.push(S)}return x}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new _e(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ia=new _e,qa=new _e,Fd=new _e,Ya=new _e,bo=new _e,Mo=new _e,Bg=new _e,zd=new _e,Bd=new _e,Id=new _e,Hd=new Dn,Vd=new Dn,Gd=new Dn;class aa{constructor(e=new _e,i=new _e,r=new _e){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),ia.subVectors(e,i),l.cross(ia);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){ia.subVectors(l,i),qa.subVectors(r,i),Fd.subVectors(e,i);const p=ia.dot(ia),m=ia.dot(qa),x=ia.dot(Fd),_=qa.dot(qa),S=qa.dot(Fd),b=p*_-m*m;if(b===0)return f.set(0,0,0),null;const E=1/b,A=(_*x-m*S)*E,U=(p*S-m*x)*E;return f.set(1-A-U,U,A)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(e,i,r,l,f,p,m,x){return this.getBarycoord(e,i,r,l,Ya)===null?(x.x=0,x.y=0,"z"in x&&(x.z=0),"w"in x&&(x.w=0),null):(x.setScalar(0),x.addScaledVector(f,Ya.x),x.addScaledVector(p,Ya.y),x.addScaledVector(m,Ya.z),x)}static getInterpolatedAttribute(e,i,r,l,f,p){return Hd.setScalar(0),Vd.setScalar(0),Gd.setScalar(0),Hd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),Gd.fromBufferAttribute(e,l),p.setScalar(0),p.addScaledVector(Hd,f.x),p.addScaledVector(Vd,f.y),p.addScaledVector(Gd,f.z),p}static isFrontFacing(e,i,r,l){return ia.subVectors(r,i),qa.subVectors(e,i),ia.cross(qa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),ia.cross(qa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return aa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return aa.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let p,m;bo.subVectors(l,r),Mo.subVectors(f,r),zd.subVectors(e,r);const x=bo.dot(zd),_=Mo.dot(zd);if(x<=0&&_<=0)return i.copy(r);Bd.subVectors(e,l);const S=bo.dot(Bd),b=Mo.dot(Bd);if(S>=0&&b<=S)return i.copy(l);const E=x*b-S*_;if(E<=0&&x>=0&&S<=0)return p=x/(x-S),i.copy(r).addScaledVector(bo,p);Id.subVectors(e,f);const A=bo.dot(Id),U=Mo.dot(Id);if(U>=0&&A<=U)return i.copy(f);const N=A*_-x*U;if(N<=0&&_>=0&&U<=0)return m=_/(_-U),i.copy(r).addScaledVector(Mo,m);const T=S*U-A*b;if(T<=0&&b-S>=0&&A-U>=0)return Bg.subVectors(f,l),m=(b-S)/(b-S+(A-U)),i.copy(l).addScaledVector(Bg,m);const M=1/(T+N+E);return p=N*M,m=E*M,i.copy(r).addScaledVector(bo,p).addScaledVector(Mo,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function kd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Kt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=an.workingColorSpace){return this.r=e,this.g=i,this.b=r,an.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=an.workingColorSpace){if(e=ES(e,1),i=qt(i,0,1),r=qt(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,p=2*r-f;this.r=kd(p,f,e+1/3),this.g=kd(p,f,e),this.b=kd(p,f,e-1/3)}return an.colorSpaceToWorking(this,l),this}setStyle(e,i=Xi){function r(f){f!==void 0&&parseFloat(f)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const p=l[1],m=l[2];switch(p){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:wt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],p=f.length;if(p===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(f,16),i);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Xi){const r=Gx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return an.workingToColorSpace(oi.copy(this),e),Math.round(qt(oi.r*255,0,255))*65536+Math.round(qt(oi.g*255,0,255))*256+Math.round(qt(oi.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=an.workingColorSpace){an.workingToColorSpace(oi.copy(this),i);const r=oi.r,l=oi.g,f=oi.b,p=Math.max(r,l,f),m=Math.min(r,l,f);let x,_;const S=(m+p)/2;if(m===p)x=0,_=0;else{const b=p-m;switch(_=S<=.5?b/(p+m):b/(2-p-m),p){case r:x=(l-f)/b+(l<f?6:0);break;case l:x=(f-r)/b+2;break;case f:x=(r-l)/b+4;break}x/=6}return e.h=x,e.s=_,e.l=S,e}getRGB(e,i=an.workingColorSpace){return an.workingToColorSpace(oi.copy(this),i),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=Xi){an.workingToColorSpace(oi.copy(this),e);const i=oi.r,r=oi.g,l=oi.b;return e!==Xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+i,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Or),e.getHSL(Eu);const r=Td(Or.h,Eu.h,i),l=Td(Or.s,Eu.s,i),f=Td(Or.l,Eu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new Kt;Kt.NAMES=Gx;let IS=0;class Bo extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ql(),this.name="",this.type="Material",this.blending=Do,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=sp,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){wt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){wt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rp&&(r.blendSrc=this.blendSrc),this.blendDst!==sp&&(r.blendDst=this.blendDst),this.blendEquation!==gs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(r.stencilFail=this.stencilFail),this.stencilZFail!==po&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}if(i){const f=l(e.textures),p=l(e.images);f.length>0&&(r.textures=f),p.length>0&&(r.images=p)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kx extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=Cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vn=new _e,Tu=new Ut;let HS=0;class xa{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Eg,this.updateRanges=[],this.gpuType=Qa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(e),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix3(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Fl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),l=Si(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),l=Si(l,this.array),f=Si(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eg&&(e.usage=this.usage),e}}class Xx extends xa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Wx extends xa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ni extends xa{constructor(e,i,r){super(new Float32Array(e),i,r)}}let VS=0;const ki=new Mn,Xd=new ti,Eo=new _e,Ui=new Ms,Hl=new Ms,Kn=new _e;class oa extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hx(e)?Wx:Xx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new zt().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,i,r){return ki.makeTranslation(e,i,r),this.applyMatrix4(ki),this}scale(e,i,r){return ki.makeScale(e,i,r),this.applyMatrix4(ki),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const p=e[l];r.push(p.x,p.y,p.z||0)}this.setAttribute("position",new Ni(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _e(-1/0,-1/0,-1/0),new _e(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];Ui.setFromBufferAttribute(f),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _e,1/0);return}if(e){const r=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),i)for(let f=0,p=i.length;f<p;f++){const m=i[f];Hl.setFromBufferAttribute(m),this.morphTargetsRelative?(Kn.addVectors(Ui.min,Hl.min),Ui.expandByPoint(Kn),Kn.addVectors(Ui.max,Hl.max),Ui.expandByPoint(Kn)):(Ui.expandByPoint(Hl.min),Ui.expandByPoint(Hl.max))}Ui.getCenter(r);let l=0;for(let f=0,p=e.count;f<p;f++)Kn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Kn));if(i)for(let f=0,p=i.length;f<p;f++){const m=i[f],x=this.morphTargetsRelative;for(let _=0,S=m.count;_<S;_++)Kn.fromBufferAttribute(m,_),x&&(Eo.fromBufferAttribute(e,_),Kn.add(Eo)),l=Math.max(l,r.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xa(new Float32Array(4*r.count),4));const p=this.getAttribute("tangent"),m=[],x=[];for(let he=0;he<r.count;he++)m[he]=new _e,x[he]=new _e;const _=new _e,S=new _e,b=new _e,E=new Ut,A=new Ut,U=new Ut,N=new _e,T=new _e;function M(he,P,O){_.fromBufferAttribute(r,he),S.fromBufferAttribute(r,P),b.fromBufferAttribute(r,O),E.fromBufferAttribute(f,he),A.fromBufferAttribute(f,P),U.fromBufferAttribute(f,O),S.sub(_),b.sub(_),A.sub(E),U.sub(E);const J=1/(A.x*U.y-U.x*A.y);isFinite(J)&&(N.copy(S).multiplyScalar(U.y).addScaledVector(b,-A.y).multiplyScalar(J),T.copy(b).multiplyScalar(A.x).addScaledVector(S,-U.x).multiplyScalar(J),m[he].add(N),m[P].add(N),m[O].add(N),x[he].add(T),x[P].add(T),x[O].add(T))}let X=this.groups;X.length===0&&(X=[{start:0,count:e.count}]);for(let he=0,P=X.length;he<P;++he){const O=X[he],J=O.start,se=O.count;for(let ue=J,Me=J+se;ue<Me;ue+=3)M(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const I=new _e,Y=new _e,ee=new _e,V=new _e;function k(he){ee.fromBufferAttribute(l,he),V.copy(ee);const P=m[he];I.copy(P),I.sub(ee.multiplyScalar(ee.dot(P))).normalize(),Y.crossVectors(V,P);const J=Y.dot(x[he])<0?-1:1;p.setXYZW(he,I.x,I.y,I.z,J)}for(let he=0,P=X.length;he<P;++he){const O=X[he],J=O.start,se=O.count;for(let ue=J,Me=J+se;ue<Me;ue+=3)k(e.getX(ue+0)),k(e.getX(ue+1)),k(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let E=0,A=r.count;E<A;E++)r.setXYZ(E,0,0,0);const l=new _e,f=new _e,p=new _e,m=new _e,x=new _e,_=new _e,S=new _e,b=new _e;if(e)for(let E=0,A=e.count;E<A;E+=3){const U=e.getX(E+0),N=e.getX(E+1),T=e.getX(E+2);l.fromBufferAttribute(i,U),f.fromBufferAttribute(i,N),p.fromBufferAttribute(i,T),S.subVectors(p,f),b.subVectors(l,f),S.cross(b),m.fromBufferAttribute(r,U),x.fromBufferAttribute(r,N),_.fromBufferAttribute(r,T),m.add(S),x.add(S),_.add(S),r.setXYZ(U,m.x,m.y,m.z),r.setXYZ(N,x.x,x.y,x.z),r.setXYZ(T,_.x,_.y,_.z)}else for(let E=0,A=i.count;E<A;E+=3)l.fromBufferAttribute(i,E+0),f.fromBufferAttribute(i,E+1),p.fromBufferAttribute(i,E+2),S.subVectors(p,f),b.subVectors(l,f),S.cross(b),r.setXYZ(E+0,S.x,S.y,S.z),r.setXYZ(E+1,S.x,S.y,S.z),r.setXYZ(E+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Kn.fromBufferAttribute(e,i),Kn.normalize(),e.setXYZ(i,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function e(m,x){const _=m.array,S=m.itemSize,b=m.normalized,E=new _.constructor(x.length*S);let A=0,U=0;for(let N=0,T=x.length;N<T;N++){m.isInterleavedBufferAttribute?A=x[N]*m.data.stride+m.offset:A=x[N]*S;for(let M=0;M<S;M++)E[U++]=_[A++]}return new xa(E,S,b)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,r=this.index.array,l=this.attributes;for(const m in l){const x=l[m],_=e(x,r);i.setAttribute(m,_)}const f=this.morphAttributes;for(const m in f){const x=[],_=f[m];for(let S=0,b=_.length;S<b;S++){const E=_[S],A=e(E,r);x.push(A)}i.morphAttributes[m]=x}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let m=0,x=p.length;m<x;m++){const _=p[m];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const x=this.parameters;for(const _ in x)x[_]!==void 0&&(e[_]=x[_]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const x in r){const _=r[x];e.data.attributes[x]=_.toJSON(e.data)}const l={};let f=!1;for(const x in this.morphAttributes){const _=this.morphAttributes[x],S=[];for(let b=0,E=_.length;b<E;b++){const A=_[b];S.push(A.toJSON(e.data))}S.length>0&&(l[x]=S,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(e.data.groups=JSON.parse(JSON.stringify(p)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const _ in l){const S=l[_];this.setAttribute(_,S.clone(i))}const f=e.morphAttributes;for(const _ in f){const S=[],b=f[_];for(let E=0,A=b.length;E<A;E++)S.push(b[E].clone(i));this.morphAttributes[_]=S}this.morphTargetsRelative=e.morphTargetsRelative;const p=e.groups;for(let _=0,S=p.length;_<S;_++){const b=p[_];this.addGroup(b.start,b.count,b.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const x=e.boundingSphere;return x!==null&&(this.boundingSphere=x.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ig=new Mn,ds=new Ju,Au=new Qu,Hg=new _e,Ru=new _e,wu=new _e,Cu=new _e,Wd=new _e,Du=new _e,Vg=new _e,Uu=new _e;class sa extends ti{constructor(e=new oa,i=new kx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const m=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,p=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(f&&m){Du.set(0,0,0);for(let x=0,_=f.length;x<_;x++){const S=m[x],b=f[x];S!==0&&(Wd.fromBufferAttribute(b,e),p?Du.addScaledVector(Wd,S):Du.addScaledVector(Wd.sub(i),S))}i.add(Du)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(f),ds.copy(e.ray).recast(e.near),!(Au.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Au,Hg)===null||ds.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(Ig.copy(f).invert(),ds.copy(e.ray).applyMatrix4(Ig),!(r.boundingBox!==null&&ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ds)))}_computeIntersections(e,i,r){let l;const f=this.geometry,p=this.material,m=f.index,x=f.attributes.position,_=f.attributes.uv,S=f.attributes.uv1,b=f.attributes.normal,E=f.groups,A=f.drawRange;if(m!==null)if(Array.isArray(p))for(let U=0,N=E.length;U<N;U++){const T=E[U],M=p[T.materialIndex],X=Math.max(T.start,A.start),I=Math.min(m.count,Math.min(T.start+T.count,A.start+A.count));for(let Y=X,ee=I;Y<ee;Y+=3){const V=m.getX(Y),k=m.getX(Y+1),he=m.getX(Y+2);l=Lu(this,M,e,r,_,S,b,V,k,he),l&&(l.faceIndex=Math.floor(Y/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const U=Math.max(0,A.start),N=Math.min(m.count,A.start+A.count);for(let T=U,M=N;T<M;T+=3){const X=m.getX(T),I=m.getX(T+1),Y=m.getX(T+2);l=Lu(this,p,e,r,_,S,b,X,I,Y),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}else if(x!==void 0)if(Array.isArray(p))for(let U=0,N=E.length;U<N;U++){const T=E[U],M=p[T.materialIndex],X=Math.max(T.start,A.start),I=Math.min(x.count,Math.min(T.start+T.count,A.start+A.count));for(let Y=X,ee=I;Y<ee;Y+=3){const V=Y,k=Y+1,he=Y+2;l=Lu(this,M,e,r,_,S,b,V,k,he),l&&(l.faceIndex=Math.floor(Y/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const U=Math.max(0,A.start),N=Math.min(x.count,A.start+A.count);for(let T=U,M=N;T<M;T+=3){const X=T,I=T+1,Y=T+2;l=Lu(this,p,e,r,_,S,b,X,I,Y),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}}}function GS(o,e,i,r,l,f,p,m){let x;if(e.side===Mi?x=r.intersectTriangle(p,f,l,!0,m):x=r.intersectTriangle(l,f,p,e.side===Hr,m),x===null)return null;Uu.copy(m),Uu.applyMatrix4(o.matrixWorld);const _=i.ray.origin.distanceTo(Uu);return _<i.near||_>i.far?null:{distance:_,point:Uu.clone(),object:o}}function Lu(o,e,i,r,l,f,p,m,x,_){o.getVertexPosition(m,Ru),o.getVertexPosition(x,wu),o.getVertexPosition(_,Cu);const S=GS(o,e,i,r,Ru,wu,Cu,Vg);if(S){const b=new _e;aa.getBarycoord(Vg,Ru,wu,Cu,b),l&&(S.uv=aa.getInterpolatedAttribute(l,m,x,_,b,new Ut)),f&&(S.uv1=aa.getInterpolatedAttribute(f,m,x,_,b,new Ut)),p&&(S.normal=aa.getInterpolatedAttribute(p,m,x,_,b,new _e),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const E={a:m,b:x,c:_,normal:new _e,materialIndex:0};aa.getNormal(Ru,wu,Cu,E.normal),S.face=E,S.barycoord=b}return S}class Jl extends oa{constructor(e=1,i=1,r=1,l=1,f=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:p};const m=this;l=Math.floor(l),f=Math.floor(f),p=Math.floor(p);const x=[],_=[],S=[],b=[];let E=0,A=0;U("z","y","x",-1,-1,r,i,e,p,f,0),U("z","y","x",1,-1,r,i,-e,p,f,1),U("x","z","y",1,1,e,r,i,l,p,2),U("x","z","y",1,-1,e,r,-i,l,p,3),U("x","y","z",1,-1,e,i,r,l,f,4),U("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(x),this.setAttribute("position",new Ni(_,3)),this.setAttribute("normal",new Ni(S,3)),this.setAttribute("uv",new Ni(b,2));function U(N,T,M,X,I,Y,ee,V,k,he,P){const O=Y/k,J=ee/he,se=Y/2,ue=ee/2,Me=V/2,Se=k+1,z=he+1;let $=0,ie=0;const Te=new _e;for(let Ce=0;Ce<z;Ce++){const H=Ce*J-ue;for(let me=0;me<Se;me++){const De=me*O-se;Te[N]=De*X,Te[T]=H*I,Te[M]=Me,_.push(Te.x,Te.y,Te.z),Te[N]=0,Te[T]=0,Te[M]=V>0?1:-1,S.push(Te.x,Te.y,Te.z),b.push(me/k),b.push(1-Ce/he),$+=1}}for(let Ce=0;Ce<he;Ce++)for(let H=0;H<k;H++){const me=E+H+Se*Ce,De=E+H+Se*(Ce+1),Fe=E+(H+1)+Se*(Ce+1),$e=E+(H+1)+Se*Ce;x.push(me,De,$e),x.push(De,Fe,$e),ie+=6}m.addGroup(A,ie,P),A+=ie,E+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function di(o){const e={};for(let i=0;i<o.length;i++){const r=Fo(o[i]);for(const l in r)e[l]=r[l]}return e}function kS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function qx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:an.workingColorSpace}const XS={clone:Fo,merge:di};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=kS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const p=this.uniforms[l].value;p&&p.isTexture?i.uniforms[l]={type:"t",value:p.toJSON(e).uuid}:p&&p.isColor?i.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[l]={type:"m4",value:p.toArray()}:i.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Yx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=ga,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new _e,Gg=new Ut,kg=new Ut;class Wi extends Yx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,i){return this.getViewBounds(e,Gg,kg),i.subVectors(kg,Gg)}setViewOffset(e,i,r,l,f,p){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ku*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const p=this.view;if(this.view!==null&&this.view.enabled){const x=p.fullWidth,_=p.fullHeight;f+=p.offsetX*l/x,i-=p.offsetY*r/_,l*=p.width/x,r*=p.height/_}const m=this.filmOffset;m!==0&&(f+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const To=-90,Ao=1;class YS extends ti{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wi(To,Ao,e,i);l.layers=this.layers,this.add(l);const f=new Wi(To,Ao,e,i);f.layers=this.layers,this.add(f);const p=new Wi(To,Ao,e,i);p.layers=this.layers,this.add(p);const m=new Wi(To,Ao,e,i);m.layers=this.layers,this.add(m);const x=new Wi(To,Ao,e,i);x.layers=this.layers,this.add(x);const _=new Wi(To,Ao,e,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,p,m,x]=i;for(const _ of i)this.remove(_);if(e===ga)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(e===qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,p,m,x,_,S]=this.children,b=e.getRenderTarget(),E=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),U=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,p),e.setRenderTarget(r,2,l),e.render(i,m),e.setRenderTarget(r,3,l),e.render(i,x),e.setRenderTarget(r,4,l),e.render(i,_),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(b,E,A),e.xr.enabled=U,r.texture.needsPMREMUpdate=!0}}class jx extends pi{constructor(e=[],i=No,r,l,f,p,m,x,_,S){super(e,i,r,l,f,p,m,x,_,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends bs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new jx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jl(5,5,5),f=new er({name:"CubemapFromEquirect",uniforms:Fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mi,blending:Ja});f.uniforms.tEquirect.value=i;const p=new sa(l,f),m=i.minFilter;return i.minFilter===vs&&(i.minFilter=qi),new YS(1,10,this).update(e,p),i.minFilter=m,p.geometry.dispose(),p.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let p=0;p<6;p++)e.setRenderTarget(this,p),e.clear(i,r,l);e.setRenderTarget(f)}}class Xl extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZS={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _e),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,p=null;const m=this._targetRay,x=this._grip,_=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(_&&e.hand){p=!0;for(const N of e.hand.values()){const T=i.getJointPose(N,r),M=this._getHandJoint(_,N);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}const S=_.joints["index-finger-tip"],b=_.joints["thumb-tip"],E=S.position.distanceTo(b.position),A=.02,U=.005;_.inputState.pinching&&E>A+U?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&E<=A-U&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else x!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,f.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(f.linearVelocity)):x.hasLinearVelocity=!1,f.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(f.angularVelocity)):x.hasAngularVelocity=!1));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return m!==null&&(m.visible=l!==null),x!==null&&(x.visible=f!==null),_!==null&&(_.visible=p!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Xl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class KS extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class QS extends pi{constructor(e=null,i=1,r=1,l,f,p,m,x,_=Li,S=Li,b,E){super(null,p,m,x,_,S,l,f,b,E),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new _e,JS=new _e,$S=new zt;class Fr{constructor(e=new _e(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yd.subVectors(r,i).cross(JS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$S.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Qu,eb=new Ut(.5,.5),Nu=new _e;class sm{constructor(e=new Fr,i=new Fr,r=new Fr,l=new Fr,f=new Fr,p=new Fr){this.planes=[e,i,r,l,f,p]}set(e,i,r,l,f,p){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(f),m[5].copy(p),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ga,r=!1){const l=this.planes,f=e.elements,p=f[0],m=f[1],x=f[2],_=f[3],S=f[4],b=f[5],E=f[6],A=f[7],U=f[8],N=f[9],T=f[10],M=f[11],X=f[12],I=f[13],Y=f[14],ee=f[15];if(l[0].setComponents(_-p,A-S,M-U,ee-X).normalize(),l[1].setComponents(_+p,A+S,M+U,ee+X).normalize(),l[2].setComponents(_+m,A+b,M+N,ee+I).normalize(),l[3].setComponents(_-m,A-b,M-N,ee-I).normalize(),r)l[4].setComponents(x,E,T,Y).normalize(),l[5].setComponents(_-x,A-E,M-T,ee-Y).normalize();else if(l[4].setComponents(_-x,A-E,M-T,ee-Y).normalize(),i===ga)l[5].setComponents(_+x,A+E,M+T,ee+Y).normalize();else if(i===qu)l[5].setComponents(x,E,T,Y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const i=eb.distanceTo(e.center);return ps.radius=.7071067811865476+i,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nu.x=l.normal.x>0?e.max.x:e.min.x,Nu.y=l.normal.y>0?e.max.y:e.min.y,Nu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zx extends Bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ju=new _e,Zu=new _e,Xg=new Mn,Vl=new Ju,Ou=new Qu,jd=new _e,Wg=new _e;class tb extends ti{constructor(e=new oa,i=new Zx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,f=i.count;l<f;l++)ju.fromBufferAttribute(i,l-1),Zu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=ju.distanceTo(Zu);e.setAttribute("lineDistance",new Ni(r,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,p=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(l),Ou.radius+=f,e.ray.intersectsSphere(Ou)===!1)return;Xg.copy(l).invert(),Vl.copy(e.ray).applyMatrix4(Xg);const m=f/((this.scale.x+this.scale.y+this.scale.z)/3),x=m*m,_=this.isLineSegments?2:1,S=r.index,E=r.attributes.position;if(S!==null){const A=Math.max(0,p.start),U=Math.min(S.count,p.start+p.count);for(let N=A,T=U-1;N<T;N+=_){const M=S.getX(N),X=S.getX(N+1),I=Pu(this,e,Vl,x,M,X,N);I&&i.push(I)}if(this.isLineLoop){const N=S.getX(U-1),T=S.getX(A),M=Pu(this,e,Vl,x,N,T,U-1);M&&i.push(M)}}else{const A=Math.max(0,p.start),U=Math.min(E.count,p.start+p.count);for(let N=A,T=U-1;N<T;N+=_){const M=Pu(this,e,Vl,x,N,N+1,N);M&&i.push(M)}if(this.isLineLoop){const N=Pu(this,e,Vl,x,U-1,A,U-1);N&&i.push(N)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const m=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}}function Pu(o,e,i,r,l,f,p){const m=o.geometry.attributes.position;if(ju.fromBufferAttribute(m,l),Zu.fromBufferAttribute(m,f),i.distanceSqToSegment(ju,Zu,jd,Wg)>r)return;jd.applyMatrix4(o.matrixWorld);const _=e.ray.origin.distanceTo(jd);if(!(_<e.near||_>e.far))return{distance:_,point:Wg.clone().applyMatrix4(o.matrixWorld),index:p,face:null,faceIndex:null,barycoord:null,object:o}}const qg=new _e,Yg=new _e;class nb extends tb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,f=i.count;l<f;l+=2)qg.fromBufferAttribute(i,l),Yg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+qg.distanceTo(Yg);e.setAttribute("lineDistance",new Ni(r,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kx extends pi{constructor(e,i,r=ys,l,f,p,m=Li,x=Li,_,S=jl,b=1){if(S!==jl&&S!==Zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const E={width:e,height:i,depth:b};super(E,l,f,p,m,x,S,r,_),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qx extends pi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $u extends oa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,p=i/2,m=Math.floor(r),x=Math.floor(l),_=m+1,S=x+1,b=e/m,E=i/x,A=[],U=[],N=[],T=[];for(let M=0;M<S;M++){const X=M*E-p;for(let I=0;I<_;I++){const Y=I*b-f;U.push(Y,-X,0),N.push(0,0,1),T.push(I/m),T.push(1-M/x)}}for(let M=0;M<x;M++)for(let X=0;X<m;X++){const I=X+_*M,Y=X+_*(M+1),ee=X+1+_*(M+1),V=X+1+_*M;A.push(I,Y,V),A.push(Y,ee,V)}this.setIndex(A),this.setAttribute("position",new Ni(U,3)),this.setAttribute("normal",new Ni(N,3)),this.setAttribute("uv",new Ni(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gl extends Bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bx,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ib extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jx extends ti{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Zd=new Mn,jg=new _e,Zg=new _e;class rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=va,this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sm,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;jg.setFromMatrixPosition(e.matrixWorld),i.position.copy(jg),Zg.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Zg),i.updateMatrixWorld(),Zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $x extends Yx{constructor(e=-1,i=1,r=1,l=-1,f=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=p,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,p=r+e,m=l+i,x=l-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,p=f+_*this.view.width,m-=S*this.view.offsetY,x=m-S*this.view.height}this.projectionMatrix.makeOrthographic(f,p,m,x,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sb extends rb{constructor(){super(new $x(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kg extends Jx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new sb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ob extends Jx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class lb extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qg=new Mn;class cb{constructor(e,i,r=0,l=1/0){this.ray=new Ju(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new rm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Cn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Qg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qg),this}intersectObject(e,i=!0,r=[]){return Yp(e,this,r,i),r.sort(Jg),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Yp(e[l],this,r,i);return r.sort(Jg),r}}function Jg(o,e){return o.distance-e.distance}function Yp(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let p=0,m=f.length;p<m;p++)Yp(f[p],e,i,!0)}}class $g{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(qt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ub extends nb{constructor(e=10,i=10,r=4473924,l=8947848){r=new Kt(r),l=new Kt(l);const f=i/2,p=e/i,m=e/2,x=[],_=[];for(let E=0,A=0,U=-m;E<=i;E++,U+=p){x.push(-m,0,U,m,0,U),x.push(U,0,-m,U,0,m);const N=E===f?r:l;N.toArray(_,A),A+=3,N.toArray(_,A),A+=3,N.toArray(_,A),A+=3,N.toArray(_,A),A+=3}const S=new oa;S.setAttribute("position",new Ni(x,3)),S.setAttribute("color",new Ni(_,3));const b=new Zx({vertexColors:!0,toneMapped:!1});super(S,b),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fb extends Es{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){wt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ex(o,e,i,r){const l=hb(r);switch(i){case Px:return o*e;case zx:return o*e/l.components*l.byteLength;case em:return o*e/l.components*l.byteLength;case tm:return o*e*2/l.components*l.byteLength;case nm:return o*e*2/l.components*l.byteLength;case Fx:return o*e*3/l.components*l.byteLength;case ra:return o*e*4/l.components*l.byteLength;case im:return o*e*4/l.components*l.byteLength;case Iu:case Hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vu:case Gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vp:case Sp:return Math.max(o,16)*Math.max(e,8)/4;case xp:case yp:return Math.max(o,8)*Math.max(e,8)/2;case bp:case Mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case wp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case zp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ip:case Hp:case Vp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Gp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xp:case Wp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hb(o){switch(o){case va:case Ux:return{byteLength:1,components:1};case ql:case Lx:case zo:return{byteLength:2,components:1};case Jp:case $p:return{byteLength:2,components:4};case ys:case Qp:case Qa:return{byteLength:4,components:1};case Nx:case Ox:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);function ev(){let o=null,e=!1,i=null,r=null;function l(f,p){i(f,p),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function db(o){const e=new WeakMap;function i(m,x){const _=m.array,S=m.usage,b=_.byteLength,E=o.createBuffer();o.bindBuffer(x,E),o.bufferData(x,_,S),m.onUploadCallback();let A;if(_ instanceof Float32Array)A=o.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)A=o.HALF_FLOAT;else if(_ instanceof Uint16Array)m.isFloat16BufferAttribute?A=o.HALF_FLOAT:A=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)A=o.SHORT;else if(_ instanceof Uint32Array)A=o.UNSIGNED_INT;else if(_ instanceof Int32Array)A=o.INT;else if(_ instanceof Int8Array)A=o.BYTE;else if(_ instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:A,bytesPerElement:_.BYTES_PER_ELEMENT,version:m.version,size:b}}function r(m,x,_){const S=x.array,b=x.updateRanges;if(o.bindBuffer(_,m),b.length===0)o.bufferSubData(_,0,S);else{b.sort((A,U)=>A.start-U.start);let E=0;for(let A=1;A<b.length;A++){const U=b[E],N=b[A];N.start<=U.start+U.count+1?U.count=Math.max(U.count,N.start+N.count-U.start):(++E,b[E]=N)}b.length=E+1;for(let A=0,U=b.length;A<U;A++){const N=b[A];o.bufferSubData(_,N.start*S.BYTES_PER_ELEMENT,S,N.start,N.count)}x.clearUpdateRanges()}x.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const x=e.get(m);x&&(o.deleteBuffer(x.buffer),e.delete(m))}function p(m,x){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const S=e.get(m);(!S||S.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const _=e.get(m);if(_===void 0)e.set(m,i(m,x));else if(_.version<m.version){if(_.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(_.buffer,m,x),_.version=m.version}}return{get:l,remove:f,update:p}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
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
#endif`,_b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
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
#endif`,Sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bb=`#ifdef USE_BATCHING
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
#endif`,Mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,wb=`#ifdef USE_BUMPMAP
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zb=`#define PI 3.141592653589793
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
} // validated`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ib=`vec3 transformedNormal = objectNormal;
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
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
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
}`,nM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fM=`PhysicalMaterial material;
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
#endif`,hM=`uniform sampler2D dfgLUT;
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
}`,dM=`
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
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
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MM=`#if defined( USE_POINTS_UV )
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
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
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
#endif`,DM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FM=`#ifdef USE_NORMALMAP
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
#endif`,zM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JM=`float getShadowMask() {
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
}`,$M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
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
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#ifdef USE_TRANSMISSION
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,yE=`#if DEPTH_PACKING == 3200
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
}`,SE=`#define DISTANCE
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
}`,bE=`#define DISTANCE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
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
}`,AE=`uniform vec3 diffuse;
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
}`,RE=`#include <common>
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
}`,wE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,DE=`#define LAMBERT
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
}`,UE=`#define MATCAP
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
}`,LE=`#define MATCAP
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
}`,NE=`#define NORMAL
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
}`,OE=`#define NORMAL
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
}`,PE=`#define PHONG
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
}`,FE=`#define PHONG
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
}`,zE=`#define STANDARD
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
}`,BE=`#define STANDARD
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
}`,IE=`#define TOON
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
}`,HE=`#define TOON
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
}`,VE=`uniform float size;
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
}`,GE=`uniform vec3 diffuse;
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
}`,kE=`#include <common>
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
}`,XE=`uniform vec3 color;
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
}`,WE=`uniform float rotation;
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
}`,qE=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:_b,alphamap_pars_fragment:gb,alphatest_fragment:xb,alphatest_pars_fragment:vb,aomap_fragment:yb,aomap_pars_fragment:Sb,batching_pars_vertex:bb,batching_vertex:Mb,begin_vertex:Eb,beginnormal_vertex:Tb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Nb,color_pars_fragment:Ob,color_pars_vertex:Pb,color_vertex:Fb,common:zb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Hb,displacementmap_vertex:Vb,emissivemap_fragment:Gb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:sM,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:aM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:lM,lights_phong_fragment:cM,lights_phong_pars_fragment:uM,lights_physical_fragment:fM,lights_physical_pars_fragment:hM,lights_fragment_begin:dM,lights_fragment_maps:pM,lights_fragment_end:mM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:vM,map_fragment:yM,map_pars_fragment:SM,map_particle_fragment:bM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:TM,morphinstance_vertex:AM,morphcolor_vertex:RM,morphnormal_vertex:wM,morphtarget_pars_vertex:CM,morphtarget_vertex:DM,normal_fragment_begin:UM,normal_fragment_maps:LM,normal_pars_fragment:NM,normal_pars_vertex:OM,normal_vertex:PM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:zM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:HM,opaque_fragment:VM,packing:GM,premultiplied_alpha_fragment:kM,project_vertex:XM,dithering_fragment:WM,dithering_pars_fragment:qM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:KM,shadowmap_vertex:QM,shadowmask_pars_fragment:JM,skinbase_vertex:$M,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:aE,tonemapping_fragment:rE,tonemapping_pars_fragment:sE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:fE,worldpos_vertex:hE,background_vert:dE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:_E,cube_vert:gE,cube_frag:xE,depth_vert:vE,depth_frag:yE,distanceRGBA_vert:SE,distanceRGBA_frag:bE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:RE,meshbasic_frag:wE,meshlambert_vert:CE,meshlambert_frag:DE,meshmatcap_vert:UE,meshmatcap_frag:LE,meshnormal_vert:NE,meshnormal_frag:OE,meshphong_vert:PE,meshphong_frag:FE,meshphysical_vert:zE,meshphysical_frag:BE,meshtoon_vert:IE,meshtoon_frag:HE,points_vert:VE,points_frag:GE,shadow_vert:kE,shadow_frag:XE,sprite_vert:WE,sprite_frag:qE},Je={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ma={basic:{uniforms:di([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:di([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Kt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:di([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:di([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:di([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Kt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:di([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:di([Je.points,Je.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:di([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:di([Je.common,Je.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:di([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:di([Je.sprite,Je.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:di([Je.common,Je.displacementmap,{referencePosition:{value:new _e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:di([Je.lights,Je.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};ma.physical={uniforms:di([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Fu={r:0,b:0,g:0},ms=new ya,YE=new Mn;function jE(o,e,i,r,l,f,p){const m=new Kt(0);let x=f===!0?0:1,_,S,b=null,E=0,A=null;function U(I){let Y=I.isScene===!0?I.background:null;return Y&&Y.isTexture&&(Y=(I.backgroundBlurriness>0?i:e).get(Y)),Y}function N(I){let Y=!1;const ee=U(I);ee===null?M(m,x):ee&&ee.isColor&&(M(ee,1),Y=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,p):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,p),(o.autoClear||Y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(I,Y){const ee=U(Y);ee&&(ee.isCubeTexture||ee.mapping===Ku)?(S===void 0&&(S=new sa(new Jl(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Fo(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(V,k,he){this.matrixWorld.copyPosition(he.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),ms.copy(Y.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,ee.isCubeTexture&&ee.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),S.material.uniforms.envMap.value=ee,S.material.uniforms.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=Y.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=Y.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(ms)),S.material.toneMapped=an.getTransfer(ee.colorSpace)!==pn,(b!==ee||E!==ee.version||A!==o.toneMapping)&&(S.material.needsUpdate=!0,b=ee,E=ee.version,A=o.toneMapping),S.layers.enableAll(),I.unshift(S,S.geometry,S.material,0,0,null)):ee&&ee.isTexture&&(_===void 0&&(_=new sa(new $u(2,2),new er({name:"BackgroundMaterial",uniforms:Fo(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(_)),_.material.uniforms.t2D.value=ee,_.material.uniforms.backgroundIntensity.value=Y.backgroundIntensity,_.material.toneMapped=an.getTransfer(ee.colorSpace)!==pn,ee.matrixAutoUpdate===!0&&ee.updateMatrix(),_.material.uniforms.uvTransform.value.copy(ee.matrix),(b!==ee||E!==ee.version||A!==o.toneMapping)&&(_.material.needsUpdate=!0,b=ee,E=ee.version,A=o.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null))}function M(I,Y){I.getRGB(Fu,qx(o)),r.buffers.color.setClear(Fu.r,Fu.g,Fu.b,Y,p)}function X(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return m},setClearColor:function(I,Y=1){m.set(I),x=Y,M(m,x)},getClearAlpha:function(){return x},setClearAlpha:function(I){x=I,M(m,x)},render:N,addToRenderList:T,dispose:X}}function ZE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=E(null);let f=l,p=!1;function m(O,J,se,ue,Me){let Se=!1;const z=b(ue,se,J);f!==z&&(f=z,_(f.object)),Se=A(O,ue,se,Me),Se&&U(O,ue,se,Me),Me!==null&&e.update(Me,o.ELEMENT_ARRAY_BUFFER),(Se||p)&&(p=!1,Y(O,J,se,ue),Me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Me).buffer))}function x(){return o.createVertexArray()}function _(O){return o.bindVertexArray(O)}function S(O){return o.deleteVertexArray(O)}function b(O,J,se){const ue=se.wireframe===!0;let Me=r[O.id];Me===void 0&&(Me={},r[O.id]=Me);let Se=Me[J.id];Se===void 0&&(Se={},Me[J.id]=Se);let z=Se[ue];return z===void 0&&(z=E(x()),Se[ue]=z),z}function E(O){const J=[],se=[],ue=[];for(let Me=0;Me<i;Me++)J[Me]=0,se[Me]=0,ue[Me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:se,attributeDivisors:ue,object:O,attributes:{},index:null}}function A(O,J,se,ue){const Me=f.attributes,Se=J.attributes;let z=0;const $=se.getAttributes();for(const ie in $)if($[ie].location>=0){const Ce=Me[ie];let H=Se[ie];if(H===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(H=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(H=O.instanceColor)),Ce===void 0||Ce.attribute!==H||H&&Ce.data!==H.data)return!0;z++}return f.attributesNum!==z||f.index!==ue}function U(O,J,se,ue){const Me={},Se=J.attributes;let z=0;const $=se.getAttributes();for(const ie in $)if($[ie].location>=0){let Ce=Se[ie];Ce===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(Ce=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(Ce=O.instanceColor));const H={};H.attribute=Ce,Ce&&Ce.data&&(H.data=Ce.data),Me[ie]=H,z++}f.attributes=Me,f.attributesNum=z,f.index=ue}function N(){const O=f.newAttributes;for(let J=0,se=O.length;J<se;J++)O[J]=0}function T(O){M(O,0)}function M(O,J){const se=f.newAttributes,ue=f.enabledAttributes,Me=f.attributeDivisors;se[O]=1,ue[O]===0&&(o.enableVertexAttribArray(O),ue[O]=1),Me[O]!==J&&(o.vertexAttribDivisor(O,J),Me[O]=J)}function X(){const O=f.newAttributes,J=f.enabledAttributes;for(let se=0,ue=J.length;se<ue;se++)J[se]!==O[se]&&(o.disableVertexAttribArray(se),J[se]=0)}function I(O,J,se,ue,Me,Se,z){z===!0?o.vertexAttribIPointer(O,J,se,Me,Se):o.vertexAttribPointer(O,J,se,ue,Me,Se)}function Y(O,J,se,ue){N();const Me=ue.attributes,Se=se.getAttributes(),z=J.defaultAttributeValues;for(const $ in Se){const ie=Se[$];if(ie.location>=0){let Te=Me[$];if(Te===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(Te=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(Te=O.instanceColor)),Te!==void 0){const Ce=Te.normalized,H=Te.itemSize,me=e.get(Te);if(me===void 0)continue;const De=me.buffer,Fe=me.type,$e=me.bytesPerElement,de=Fe===o.INT||Fe===o.UNSIGNED_INT||Te.gpuType===Qp;if(Te.isInterleavedBufferAttribute){const Q=Te.data,ye=Q.stride,Ie=Te.offset;if(Q.isInstancedInterleavedBuffer){for(let ke=0;ke<ie.locationSize;ke++)M(ie.location+ke,Q.meshPerAttribute);O.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ke=0;ke<ie.locationSize;ke++)T(ie.location+ke);o.bindBuffer(o.ARRAY_BUFFER,De);for(let ke=0;ke<ie.locationSize;ke++)I(ie.location+ke,H/ie.locationSize,Fe,Ce,ye*$e,(Ie+H/ie.locationSize*ke)*$e,de)}else{if(Te.isInstancedBufferAttribute){for(let Q=0;Q<ie.locationSize;Q++)M(ie.location+Q,Te.meshPerAttribute);O.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Q=0;Q<ie.locationSize;Q++)T(ie.location+Q);o.bindBuffer(o.ARRAY_BUFFER,De);for(let Q=0;Q<ie.locationSize;Q++)I(ie.location+Q,H/ie.locationSize,Fe,Ce,H*$e,H/ie.locationSize*Q*$e,de)}}else if(z!==void 0){const Ce=z[$];if(Ce!==void 0)switch(Ce.length){case 2:o.vertexAttrib2fv(ie.location,Ce);break;case 3:o.vertexAttrib3fv(ie.location,Ce);break;case 4:o.vertexAttrib4fv(ie.location,Ce);break;default:o.vertexAttrib1fv(ie.location,Ce)}}}}X()}function ee(){he();for(const O in r){const J=r[O];for(const se in J){const ue=J[se];for(const Me in ue)S(ue[Me].object),delete ue[Me];delete J[se]}delete r[O]}}function V(O){if(r[O.id]===void 0)return;const J=r[O.id];for(const se in J){const ue=J[se];for(const Me in ue)S(ue[Me].object),delete ue[Me];delete J[se]}delete r[O.id]}function k(O){for(const J in r){const se=r[J];if(se[O.id]===void 0)continue;const ue=se[O.id];for(const Me in ue)S(ue[Me].object),delete ue[Me];delete se[O.id]}}function he(){P(),p=!0,f!==l&&(f=l,_(f.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:he,resetDefaultState:P,dispose:ee,releaseStatesOfGeometry:V,releaseStatesOfProgram:k,initAttributes:N,enableAttribute:T,disableUnusedAttributes:X}}function KE(o,e,i){let r;function l(_){r=_}function f(_,S){o.drawArrays(r,_,S),i.update(S,r,1)}function p(_,S,b){b!==0&&(o.drawArraysInstanced(r,_,S,b),i.update(S,r,b))}function m(_,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,_,0,S,0,b);let A=0;for(let U=0;U<b;U++)A+=S[U];i.update(A,r,1)}function x(_,S,b,E){if(b===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let U=0;U<_.length;U++)p(_[U],S[U],E[U]);else{A.multiDrawArraysInstancedWEBGL(r,_,0,S,0,E,0,b);let U=0;for(let N=0;N<b;N++)U+=S[N]*E[N];i.update(U,r,1)}}this.setMode=l,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=x}function QE(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function p(k){return!(k!==ra&&r.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(k){const he=k===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==va&&r.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Qa&&!he)}function x(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const S=x(_);S!==_&&(wt("WebGLRenderer:",_,"not supported, using",S,"instead."),_=S);const b=i.logarithmicDepthBuffer===!0,E=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),A=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),X=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),Y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),ee=U>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:x,textureFormatReadable:p,textureTypeReadable:m,precision:_,logarithmicDepthBuffer:b,reversedDepthBuffer:E,maxTextures:A,maxVertexTextures:U,maxTextureSize:N,maxCubemapSize:T,maxAttributes:M,maxVertexUniforms:X,maxVaryings:I,maxFragmentUniforms:Y,vertexTextures:ee,maxSamples:V}}function JE(o){const e=this;let i=null,r=0,l=!1,f=!1;const p=new Fr,m=new zt,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(b,E){const A=b.length!==0||E||r!==0||l;return l=E,r=b.length,A},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(b,E){i=S(b,E,0)},this.setState=function(b,E,A){const U=b.clippingPlanes,N=b.clipIntersection,T=b.clipShadows,M=o.get(b);if(!l||U===null||U.length===0||f&&!T)f?S(null):_();else{const X=f?0:r,I=X*4;let Y=M.clippingState||null;x.value=Y,Y=S(U,E,I,A);for(let ee=0;ee!==I;++ee)Y[ee]=i[ee];M.clippingState=Y,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=X}};function _(){x.value!==i&&(x.value=i,x.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(b,E,A,U){const N=b!==null?b.length:0;let T=null;if(N!==0){if(T=x.value,U!==!0||T===null){const M=A+N*4,X=E.matrixWorldInverse;m.getNormalMatrix(X),(T===null||T.length<M)&&(T=new Float32Array(M));for(let I=0,Y=A;I!==N;++I,Y+=4)p.copy(b[I]).applyMatrix4(X,m),p.normal.toArray(T,Y),T[Y+3]=p.constant}x.value=T,x.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,T}}function $E(o){let e=new WeakMap;function i(p,m){return m===pp?p.mapping=No:m===mp&&(p.mapping=Oo),p}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===pp||m===mp)if(e.has(p)){const x=e.get(p).texture;return i(x,p.mapping)}else{const x=p.image;if(x&&x.height>0){const _=new jS(x.height);return _.fromEquirectangularTexture(o,p),e.set(p,_),p.addEventListener("dispose",l),i(_.texture,p.mapping)}else return null}}return p}function l(p){const m=p.target;m.removeEventListener("dispose",l);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const Br=4,tx=[.125,.215,.35,.446,.526,.582],xs=20,e1=256,kl=new $x,nx=new Kt;let Kd=null,Qd=0,Jd=0,$d=!1;const t1=new _e;class ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,f={}){const{size:p=256,position:m=t1}=f;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(p);const x=this._allocateTargets();return x.depthBuffer=!0,this._sceneToCubeUV(e,r,l,x,m),i>0&&this._blur(x,0,0,i),this._applyPMREM(x),this._cleanup(x),x}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===No||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:zo,format:ra,colorSpace:Po,depthBuffer:!1},l=ax(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ax(e,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n1(f)),this._blurMaterial=a1(f,e,i)}return l}_compileMaterial(e){const i=new sa(new oa,e);this._renderer.compile(i,kl)}_sceneToCubeUV(e,i,r,l,f){const x=new Wi(90,1,i,r),_=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],b=this._renderer,E=b.autoClear,A=b.toneMapping;b.getClearColor(nx),b.toneMapping=Ir,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(l),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new Jl,new kx({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,T=N.material;let M=!1;const X=e.background;X?X.isColor&&(T.color.copy(X),e.background=null,M=!0):(T.color.copy(nx),M=!0);for(let I=0;I<6;I++){const Y=I%3;Y===0?(x.up.set(0,_[I],0),x.position.set(f.x,f.y,f.z),x.lookAt(f.x+S[I],f.y,f.z)):Y===1?(x.up.set(0,0,_[I]),x.position.set(f.x,f.y,f.z),x.lookAt(f.x,f.y+S[I],f.z)):(x.up.set(0,_[I],0),x.position.set(f.x,f.y,f.z),x.lookAt(f.x,f.y,f.z+S[I]));const ee=this._cubeSize;Ro(l,Y*ee,I>2?ee:0,ee,ee),b.setRenderTarget(l),M&&b.render(N,x),b.render(e,x)}b.toneMapping=A,b.autoClear=E,e.background=X}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===No||e.mapping===Oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rx());const f=l?this._cubemapMaterial:this._equirectMaterial,p=this._lodMeshes[0];p.material=f;const m=f.uniforms;m.envMap.value=e;const x=this._cubeSize;Ro(i,0,0,3*x,2*x),r.setRenderTarget(i),r.render(p,kl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,f=this._pingPongRenderTarget;if(this._ggxMaterial===null){const X=3*Math.max(this._cubeSize,16),I=4*this._cubeSize;this._ggxMaterial=i1(this._lodMax,X,I)}const p=this._ggxMaterial,m=this._lodMeshes[r];m.material=p;const x=p.uniforms,_=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),b=Math.sqrt(_*_-S*S),E=.05+_*.95,A=b*E,{_lodMax:U}=this,N=this._sizeLods[r],T=3*N*(r>U-Br?r-U+Br:0),M=4*(this._cubeSize-N);x.envMap.value=e.texture,x.roughness.value=A,x.mipInt.value=U-i,Ro(f,T,M,3*N,2*N),l.setRenderTarget(f),l.render(m,kl),x.envMap.value=f.texture,x.roughness.value=0,x.mipInt.value=U-r,Ro(e,T,M,3*N,2*N),l.setRenderTarget(e),l.render(m,kl)}_blur(e,i,r,l,f){const p=this._pingPongRenderTarget;this._halfBlur(e,p,i,r,l,"latitudinal",f),this._halfBlur(p,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,p,m){const x=this._renderer,_=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&Cn("blur direction must be either latitudinal or longitudinal!");const S=3,b=this._lodMeshes[l];b.material=_;const E=_.uniforms,A=this._sizeLods[r]-1,U=isFinite(f)?Math.PI/(2*A):2*Math.PI/(2*xs-1),N=f/U,T=isFinite(f)?1+Math.floor(S*N):xs;T>xs&&wt(`sigmaRadians, ${f}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${xs}`);const M=[];let X=0;for(let k=0;k<xs;++k){const he=k/N,P=Math.exp(-he*he/2);M.push(P),k===0?X+=P:k<T&&(X+=2*P)}for(let k=0;k<M.length;k++)M[k]=M[k]/X;E.envMap.value=e.texture,E.samples.value=T,E.weights.value=M,E.latitudinal.value=p==="latitudinal",m&&(E.poleAxis.value=m);const{_lodMax:I}=this;E.dTheta.value=U,E.mipInt.value=I-r;const Y=this._sizeLods[l],ee=3*Y*(l>I-Br?l-I+Br:0),V=4*(this._cubeSize-Y);Ro(i,ee,V,3*Y,2*Y),x.setRenderTarget(i),x.render(b,kl)}}function n1(o){const e=[],i=[],r=[];let l=o;const f=o-Br+1+tx.length;for(let p=0;p<f;p++){const m=Math.pow(2,l);e.push(m);let x=1/m;p>o-Br?x=tx[p-o+Br-1]:p===0&&(x=0),i.push(x);const _=1/(m-2),S=-_,b=1+_,E=[S,S,b,S,b,b,S,S,b,b,S,b],A=6,U=6,N=3,T=2,M=1,X=new Float32Array(N*U*A),I=new Float32Array(T*U*A),Y=new Float32Array(M*U*A);for(let V=0;V<A;V++){const k=V%3*2/3-1,he=V>2?0:-1,P=[k,he,0,k+2/3,he,0,k+2/3,he+1,0,k,he,0,k+2/3,he+1,0,k,he+1,0];X.set(P,N*U*V),I.set(E,T*U*V);const O=[V,V,V,V,V,V];Y.set(O,M*U*V)}const ee=new oa;ee.setAttribute("position",new xa(X,N)),ee.setAttribute("uv",new xa(I,T)),ee.setAttribute("faceIndex",new xa(Y,M)),r.push(new sa(ee,null)),l>Br&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function ax(o,e,i){const r=new bs(o,e,i);return r.texture.mapping=Ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ro(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function i1(o,e,i){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function a1(o,e,i){const r=new Float32Array(xs),l=new _e(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function rx(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function sx(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}function r1(o){let e=new WeakMap,i=null;function r(m){if(m&&m.isTexture){const x=m.mapping,_=x===pp||x===mp,S=x===No||x===Oo;if(_||S){let b=e.get(m);const E=b!==void 0?b.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==E)return i===null&&(i=new ix(o)),b=_?i.fromEquirectangular(m,b):i.fromCubemap(m,b),b.texture.pmremVersion=m.pmremVersion,e.set(m,b),b.texture;if(b!==void 0)return b.texture;{const A=m.image;return _&&A&&A.height>0||S&&A&&l(A)?(i===null&&(i=new ix(o)),b=_?i.fromEquirectangular(m):i.fromCubemap(m),b.texture.pmremVersion=m.pmremVersion,e.set(m,b),m.addEventListener("dispose",f),b.texture):null}}}return m}function l(m){let x=0;const _=6;for(let S=0;S<_;S++)m[S]!==void 0&&x++;return x===_}function f(m){const x=m.target;x.removeEventListener("dispose",f);const _=e.get(x);_!==void 0&&(e.delete(x),_.dispose())}function p(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function s1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Kl("WebGLRenderer: "+r+" extension not supported."),l}}}function o1(o,e,i,r){const l={},f=new WeakMap;function p(b){const E=b.target;E.index!==null&&e.remove(E.index);for(const U in E.attributes)e.remove(E.attributes[U]);E.removeEventListener("dispose",p),delete l[E.id];const A=f.get(E);A&&(e.remove(A),f.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function m(b,E){return l[E.id]===!0||(E.addEventListener("dispose",p),l[E.id]=!0,i.memory.geometries++),E}function x(b){const E=b.attributes;for(const A in E)e.update(E[A],o.ARRAY_BUFFER)}function _(b){const E=[],A=b.index,U=b.attributes.position;let N=0;if(A!==null){const X=A.array;N=A.version;for(let I=0,Y=X.length;I<Y;I+=3){const ee=X[I+0],V=X[I+1],k=X[I+2];E.push(ee,V,V,k,k,ee)}}else if(U!==void 0){const X=U.array;N=U.version;for(let I=0,Y=X.length/3-1;I<Y;I+=3){const ee=I+0,V=I+1,k=I+2;E.push(ee,V,V,k,k,ee)}}else return;const T=new(Hx(E)?Wx:Xx)(E,1);T.version=N;const M=f.get(b);M&&e.remove(M),f.set(b,T)}function S(b){const E=f.get(b);if(E){const A=b.index;A!==null&&E.version<A.version&&_(b)}else _(b);return f.get(b)}return{get:m,update:x,getWireframeAttribute:S}}function l1(o,e,i){let r;function l(E){r=E}let f,p;function m(E){f=E.type,p=E.bytesPerElement}function x(E,A){o.drawElements(r,A,f,E*p),i.update(A,r,1)}function _(E,A,U){U!==0&&(o.drawElementsInstanced(r,A,f,E*p,U),i.update(A,r,U))}function S(E,A,U){if(U===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,A,0,f,E,0,U);let T=0;for(let M=0;M<U;M++)T+=A[M];i.update(T,r,1)}function b(E,A,U,N){if(U===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let M=0;M<E.length;M++)_(E[M]/p,A[M],N[M]);else{T.multiDrawElementsInstancedWEBGL(r,A,0,f,E,0,N,0,U);let M=0;for(let X=0;X<U;X++)M+=A[X]*N[X];i.update(M,r,1)}}this.setMode=l,this.setIndex=m,this.render=x,this.renderInstances=_,this.renderMultiDraw=S,this.renderMultiDrawInstances=b}function c1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,p,m){switch(i.calls++,p){case o.TRIANGLES:i.triangles+=m*(f/3);break;case o.LINES:i.lines+=m*(f/2);break;case o.LINE_STRIP:i.lines+=m*(f-1);break;case o.LINE_LOOP:i.lines+=m*f;break;case o.POINTS:i.points+=m*f;break;default:Cn("WebGLInfo: Unknown draw mode:",p);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function u1(o,e,i){const r=new WeakMap,l=new Dn;function f(p,m,x){const _=p.morphTargetInfluences,S=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,b=S!==void 0?S.length:0;let E=r.get(m);if(E===void 0||E.count!==b){let O=function(){he.dispose(),r.delete(m),m.removeEventListener("dispose",O)};var A=O;E!==void 0&&E.texture.dispose();const U=m.morphAttributes.position!==void 0,N=m.morphAttributes.normal!==void 0,T=m.morphAttributes.color!==void 0,M=m.morphAttributes.position||[],X=m.morphAttributes.normal||[],I=m.morphAttributes.color||[];let Y=0;U===!0&&(Y=1),N===!0&&(Y=2),T===!0&&(Y=3);let ee=m.attributes.position.count*Y,V=1;ee>e.maxTextureSize&&(V=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const k=new Float32Array(ee*V*4*b),he=new Vx(k,ee,V,b);he.type=Qa,he.needsUpdate=!0;const P=Y*4;for(let J=0;J<b;J++){const se=M[J],ue=X[J],Me=I[J],Se=ee*V*4*J;for(let z=0;z<se.count;z++){const $=z*P;U===!0&&(l.fromBufferAttribute(se,z),k[Se+$+0]=l.x,k[Se+$+1]=l.y,k[Se+$+2]=l.z,k[Se+$+3]=0),N===!0&&(l.fromBufferAttribute(ue,z),k[Se+$+4]=l.x,k[Se+$+5]=l.y,k[Se+$+6]=l.z,k[Se+$+7]=0),T===!0&&(l.fromBufferAttribute(Me,z),k[Se+$+8]=l.x,k[Se+$+9]=l.y,k[Se+$+10]=l.z,k[Se+$+11]=Me.itemSize===4?l.w:1)}}E={count:b,texture:he,size:new Ut(ee,V)},r.set(m,E),m.addEventListener("dispose",O)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)x.getUniforms().setValue(o,"morphTexture",p.morphTexture,i);else{let U=0;for(let T=0;T<_.length;T++)U+=_[T];const N=m.morphTargetsRelative?1:1-U;x.getUniforms().setValue(o,"morphTargetBaseInfluence",N),x.getUniforms().setValue(o,"morphTargetInfluences",_)}x.getUniforms().setValue(o,"morphTargetsTexture",E.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",E.size)}return{update:f}}function f1(o,e,i,r){let l=new WeakMap;function f(x){const _=r.render.frame,S=x.geometry,b=e.get(x,S);if(l.get(b)!==_&&(e.update(b),l.set(b,_)),x.isInstancedMesh&&(x.hasEventListener("dispose",m)===!1&&x.addEventListener("dispose",m),l.get(x)!==_&&(i.update(x.instanceMatrix,o.ARRAY_BUFFER),x.instanceColor!==null&&i.update(x.instanceColor,o.ARRAY_BUFFER),l.set(x,_))),x.isSkinnedMesh){const E=x.skeleton;l.get(E)!==_&&(E.update(),l.set(E,_))}return b}function p(){l=new WeakMap}function m(x){const _=x.target;_.removeEventListener("dispose",m),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:p}}const tv=new pi,ox=new Kx(1,1),nv=new Vx,iv=new US,av=new jx,lx=[],cx=[],ux=new Float32Array(16),fx=new Float32Array(9),hx=new Float32Array(4);function Io(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=lx[l];if(f===void 0&&(f=new Float32Array(l),lx[l]=f),e!==0){r.toArray(f,0);for(let p=1,m=0;p!==e;++p)m+=i,o[p].toArray(f,m)}return f}function Wn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function qn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function tf(o,e){let i=cx[e];i===void 0&&(i=new Int32Array(e),cx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function h1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function d1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2fv(this.addr,e),qn(i,e)}}function p1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Wn(i,e))return;o.uniform3fv(this.addr,e),qn(i,e)}}function m1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4fv(this.addr,e),qn(i,e)}}function _1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;hx.set(r),o.uniformMatrix2fv(this.addr,!1,hx),qn(i,r)}}function g1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;fx.set(r),o.uniformMatrix3fv(this.addr,!1,fx),qn(i,r)}}function x1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;ux.set(r),o.uniformMatrix4fv(this.addr,!1,ux),qn(i,r)}}function v1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2iv(this.addr,e),qn(i,e)}}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wn(i,e))return;o.uniform3iv(this.addr,e),qn(i,e)}}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4iv(this.addr,e),qn(i,e)}}function M1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function E1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2uiv(this.addr,e),qn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wn(i,e))return;o.uniform3uiv(this.addr,e),qn(i,e)}}function A1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4uiv(this.addr,e),qn(i,e)}}function R1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(ox.compareFunction=Ix,f=ox):f=tv,i.setTexture2D(e||f,l)}function w1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||iv,l)}function C1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||av,l)}function D1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||nv,l)}function U1(o){switch(o){case 5126:return h1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return _1;case 35675:return g1;case 35676:return x1;case 5124:case 35670:return v1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return b1;case 5125:return M1;case 36294:return E1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return D1}}function L1(o,e){o.uniform1fv(this.addr,e)}function N1(o,e){const i=Io(e,this.size,2);o.uniform2fv(this.addr,i)}function O1(o,e){const i=Io(e,this.size,3);o.uniform3fv(this.addr,i)}function P1(o,e){const i=Io(e,this.size,4);o.uniform4fv(this.addr,i)}function F1(o,e){const i=Io(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function z1(o,e){const i=Io(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function B1(o,e){const i=Io(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function I1(o,e){o.uniform1iv(this.addr,e)}function H1(o,e){o.uniform2iv(this.addr,e)}function V1(o,e){o.uniform3iv(this.addr,e)}function G1(o,e){o.uniform4iv(this.addr,e)}function k1(o,e){o.uniform1uiv(this.addr,e)}function X1(o,e){o.uniform2uiv(this.addr,e)}function W1(o,e){o.uniform3uiv(this.addr,e)}function q1(o,e){o.uniform4uiv(this.addr,e)}function Y1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture2D(e[p]||tv,f[p])}function j1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture3D(e[p]||iv,f[p])}function Z1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTextureCube(e[p]||av,f[p])}function K1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture2DArray(e[p]||nv,f[p])}function Q1(o){switch(o){case 5126:return L1;case 35664:return N1;case 35665:return O1;case 35666:return P1;case 35674:return F1;case 35675:return z1;case 35676:return B1;case 5124:case 35670:return I1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return k1;case 36294:return X1;case 36295:return W1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return K1}}class J1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=U1(i.type)}}class $1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q1(i.type)}}class e3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,p=l.length;f!==p;++f){const m=l[f];m.setValue(e,i[m.id],r)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function dx(o,e){o.seq.push(e),o.map[e.id]=e}function t3(o,e,i){const r=o.name,l=r.length;for(ep.lastIndex=0;;){const f=ep.exec(r),p=ep.lastIndex;let m=f[1];const x=f[2]==="]",_=f[3];if(x&&(m=m|0),_===void 0||_==="["&&p+2===l){dx(i,_===void 0?new J1(m,o,e):new $1(m,o,e));break}else{let b=i.map[m];b===void 0&&(b=new e3(m),dx(i,b)),i=b}}}class Xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),p=e.getUniformLocation(i,f.name);t3(f,p,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,p=i.length;f!==p;++f){const m=i[f],x=r[m.id];x.needsUpdate!==!1&&m.setValue(e,x.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const p=e[l];p.id in i&&r.push(p)}return r}}function px(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const n3=37297;let i3=0;function a3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let p=l;p<f;p++){const m=p+1;r.push(`${m===e?">":" "} ${m}: ${i[p]}`)}return r.join(`
`)}const mx=new zt;function r3(o){an._getMatrix(mx,an.workingColorSpace,o);const e=`mat3( ${mx.elements.map(i=>i.toFixed(4))} )`;switch(an.getTransfer(o)){case Wu:return[e,"LinearTransferOETF"];case pn:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _x(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const p=/ERROR: 0:(\d+)/.exec(f);if(p){const m=parseInt(p[1]);return i.toUpperCase()+`

`+f+`

`+a3(o.getShaderSource(e),m)}else return f}function s3(o,e){const i=r3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function o3(o,e){let i;switch(e){case aS:i="Linear";break;case rS:i="Reinhard";break;case sS:i="Cineon";break;case oS:i="ACESFilmic";break;case cS:i="AgX";break;case uS:i="Neutral";break;case lS:i="Custom";break;default:wt("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zu=new _e;function l3(){an.getLuminanceCoefficients(zu);const o=zu.x.toFixed(4),e=zu.y.toFixed(4),i=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function u3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function f3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),p=f.name;let m=1;f.type===o.FLOAT_MAT2&&(m=2),f.type===o.FLOAT_MAT3&&(m=3),f.type===o.FLOAT_MAT4&&(m=4),i[p]={type:f.type,location:o.getAttribLocation(e,p),locationSize:m}}return i}function Wl(o){return o!==""}function gx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h3=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(o){return o.replace(h3,p3)}const d3=new Map;function p3(o,e){let i=It[e];if(i===void 0){const r=d3.get(e);if(r!==void 0)i=It[r],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jp(i)}const m3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vx(o){return o.replace(m3,_3)}function _3(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function yx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function g3(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===zy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Za&&(e="SHADOWMAP_TYPE_VSM"),e}function x3(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case No:case Oo:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v3(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function y3(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Cx:e="ENVMAP_BLENDING_MULTIPLY";break;case nS:e="ENVMAP_BLENDING_MIX";break;case iS:e="ENVMAP_BLENDING_ADD";break}return e}function S3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b3(o,e,i,r){const l=o.getContext(),f=i.defines;let p=i.vertexShader,m=i.fragmentShader;const x=g3(i),_=x3(i),S=v3(i),b=y3(i),E=S3(i),A=c3(i),U=u3(f),N=l.createProgram();let T,M,X=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(T=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,U].filter(Wl).join(`
`),T.length>0&&(T+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,U].filter(Wl).join(`
`),M.length>0&&(M+=`
`)):(T=[yx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,U,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),M=[yx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,U,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",i.envMap?"#define "+b:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ir?"#define TONE_MAPPING":"",i.toneMapping!==Ir?It.tonemapping_pars_fragment:"",i.toneMapping!==Ir?o3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,s3("linearToOutputTexel",i.outputColorSpace),l3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wl).join(`
`)),p=jp(p),p=gx(p,i),p=xx(p,i),m=jp(m),m=gx(m,i),m=xx(m,i),p=vx(p),m=vx(m),i.isRawShaderMaterial!==!0&&(X=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,M=["#define varying in",i.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const I=X+T+p,Y=X+M+m,ee=px(l,l.VERTEX_SHADER,I),V=px(l,l.FRAGMENT_SHADER,Y);l.attachShader(N,ee),l.attachShader(N,V),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function k(J){if(o.debug.checkShaderErrors){const se=l.getProgramInfoLog(N)||"",ue=l.getShaderInfoLog(ee)||"",Me=l.getShaderInfoLog(V)||"",Se=se.trim(),z=ue.trim(),$=Me.trim();let ie=!0,Te=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,N,ee,V);else{const Ce=_x(l,ee,"vertex"),H=_x(l,V,"fragment");Cn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+Se+`
`+Ce+`
`+H)}else Se!==""?wt("WebGLProgram: Program Info Log:",Se):(z===""||$==="")&&(Te=!1);Te&&(J.diagnostics={runnable:ie,programLog:Se,vertexShader:{log:z,prefix:T},fragmentShader:{log:$,prefix:M}})}l.deleteShader(ee),l.deleteShader(V),he=new Xu(l,N),P=f3(l,N)}let he;this.getUniforms=function(){return he===void 0&&k(this),he};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(N,n3)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=i3++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=ee,this.fragmentShader=V,this}let M3=0;class E3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),p=this._getShaderCacheForMaterial(e);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(f)===!1&&(p.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new T3(e),i.set(e,r)),r}}class T3{constructor(e){this.id=M3++,this.code=e,this.usedTimes=0}}function A3(o,e,i,r,l,f,p){const m=new rm,x=new E3,_=new Set,S=[],b=l.logarithmicDepthBuffer,E=l.vertexTextures;let A=l.precision;const U={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(P){return _.add(P),P===0?"uv":`uv${P}`}function T(P,O,J,se,ue){const Me=se.fog,Se=ue.geometry,z=P.isMeshStandardMaterial?se.environment:null,$=(P.isMeshStandardMaterial?i:e).get(P.envMap||z),ie=$&&$.mapping===Ku?$.image.height:null,Te=U[P.type];P.precision!==null&&(A=l.getMaxPrecision(P.precision),A!==P.precision&&wt("WebGLProgram.getParameters:",P.precision,"not supported, using",A,"instead."));const Ce=Se.morphAttributes.position||Se.morphAttributes.normal||Se.morphAttributes.color,H=Ce!==void 0?Ce.length:0;let me=0;Se.morphAttributes.position!==void 0&&(me=1),Se.morphAttributes.normal!==void 0&&(me=2),Se.morphAttributes.color!==void 0&&(me=3);let De,Fe,$e,de;if(Te){const $t=ma[Te];De=$t.vertexShader,Fe=$t.fragmentShader}else De=P.vertexShader,Fe=P.fragmentShader,x.update(P),$e=x.getVertexShaderID(P),de=x.getFragmentShaderID(P);const Q=o.getRenderTarget(),ye=o.state.buffers.depth.getReversed(),Ie=ue.isInstancedMesh===!0,ke=ue.isBatchedMesh===!0,tt=!!P.map,Jt=!!P.matcap,_t=!!$,At=!!P.aoMap,W=!!P.lightMap,gt=!!P.bumpMap,Tt=!!P.normalMap,Vt=!!P.displacementMap,qe=!!P.emissiveMap,Lt=!!P.metalnessMap,st=!!P.roughnessMap,yt=P.anisotropy>0,B=P.clearcoat>0,w=P.dispersion>0,oe=P.iridescence>0,Ae=P.sheen>0,Le=P.transmission>0,re=yt&&!!P.anisotropyMap,Ze=B&&!!P.clearcoatMap,We=B&&!!P.clearcoatNormalMap,dt=B&&!!P.clearcoatRoughnessMap,He=oe&&!!P.iridescenceMap,Ne=oe&&!!P.iridescenceThicknessMap,Pe=Ae&&!!P.sheenColorMap,ot=Ae&&!!P.sheenRoughnessMap,lt=!!P.specularMap,Ye=!!P.specularColorMap,vt=!!P.specularIntensityMap,j=Le&&!!P.transmissionMap,Xe=Le&&!!P.thicknessMap,Ve=!!P.gradientMap,Ge=!!P.alphaMap,Ue=P.alphaTest>0,Re=!!P.alphaHash,nt=!!P.extensions;let Mt=Ir;P.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Mt=o.toneMapping);const it={shaderID:Te,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:Fe,defines:P.defines,customVertexShaderID:$e,customFragmentShaderID:de,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:A,batching:ke,batchingColor:ke&&ue._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ue.instanceColor!==null,instancingMorph:Ie&&ue.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:Q===null?o.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Po,alphaToCoverage:!!P.alphaToCoverage,map:tt,matcap:Jt,envMap:_t,envMapMode:_t&&$.mapping,envMapCubeUVHeight:ie,aoMap:At,lightMap:W,bumpMap:gt,normalMap:Tt,displacementMap:E&&Vt,emissiveMap:qe,normalMapObjectSpace:Tt&&P.normalMapType===pS,normalMapTangentSpace:Tt&&P.normalMapType===Bx,metalnessMap:Lt,roughnessMap:st,anisotropy:yt,anisotropyMap:re,clearcoat:B,clearcoatMap:Ze,clearcoatNormalMap:We,clearcoatRoughnessMap:dt,dispersion:w,iridescence:oe,iridescenceMap:He,iridescenceThicknessMap:Ne,sheen:Ae,sheenColorMap:Pe,sheenRoughnessMap:ot,specularMap:lt,specularColorMap:Ye,specularIntensityMap:vt,transmission:Le,transmissionMap:j,thicknessMap:Xe,gradientMap:Ve,opaque:P.transparent===!1&&P.blending===Do&&P.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ue,alphaHash:Re,combine:P.combine,mapUv:tt&&N(P.map.channel),aoMapUv:At&&N(P.aoMap.channel),lightMapUv:W&&N(P.lightMap.channel),bumpMapUv:gt&&N(P.bumpMap.channel),normalMapUv:Tt&&N(P.normalMap.channel),displacementMapUv:Vt&&N(P.displacementMap.channel),emissiveMapUv:qe&&N(P.emissiveMap.channel),metalnessMapUv:Lt&&N(P.metalnessMap.channel),roughnessMapUv:st&&N(P.roughnessMap.channel),anisotropyMapUv:re&&N(P.anisotropyMap.channel),clearcoatMapUv:Ze&&N(P.clearcoatMap.channel),clearcoatNormalMapUv:We&&N(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&N(P.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&N(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&N(P.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&N(P.sheenColorMap.channel),sheenRoughnessMapUv:ot&&N(P.sheenRoughnessMap.channel),specularMapUv:lt&&N(P.specularMap.channel),specularColorMapUv:Ye&&N(P.specularColorMap.channel),specularIntensityMapUv:vt&&N(P.specularIntensityMap.channel),transmissionMapUv:j&&N(P.transmissionMap.channel),thicknessMapUv:Xe&&N(P.thicknessMap.channel),alphaMapUv:Ge&&N(P.alphaMap.channel),vertexTangents:!!Se.attributes.tangent&&(Tt||yt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!Se.attributes.color&&Se.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!Se.attributes.uv&&(tt||Ge),fog:!!Me,useFog:P.fog===!0,fogExp2:!!Me&&Me.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:ye,skinning:ue.isSkinnedMesh===!0,morphTargets:Se.morphAttributes.position!==void 0,morphNormals:Se.morphAttributes.normal!==void 0,morphColors:Se.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:me,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:Mt,decodeVideoTexture:tt&&P.map.isVideoTexture===!0&&an.getTransfer(P.map.colorSpace)===pn,decodeVideoTextureEmissive:qe&&P.emissiveMap.isVideoTexture===!0&&an.getTransfer(P.emissiveMap.colorSpace)===pn,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===_a,flipSided:P.side===Mi,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:nt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&P.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return it.vertexUv1s=_.has(1),it.vertexUv2s=_.has(2),it.vertexUv3s=_.has(3),_.clear(),it}function M(P){const O=[];if(P.shaderID?O.push(P.shaderID):(O.push(P.customVertexShaderID),O.push(P.customFragmentShaderID)),P.defines!==void 0)for(const J in P.defines)O.push(J),O.push(P.defines[J]);return P.isRawShaderMaterial===!1&&(X(O,P),I(O,P),O.push(o.outputColorSpace)),O.push(P.customProgramCacheKey),O.join()}function X(P,O){P.push(O.precision),P.push(O.outputColorSpace),P.push(O.envMapMode),P.push(O.envMapCubeUVHeight),P.push(O.mapUv),P.push(O.alphaMapUv),P.push(O.lightMapUv),P.push(O.aoMapUv),P.push(O.bumpMapUv),P.push(O.normalMapUv),P.push(O.displacementMapUv),P.push(O.emissiveMapUv),P.push(O.metalnessMapUv),P.push(O.roughnessMapUv),P.push(O.anisotropyMapUv),P.push(O.clearcoatMapUv),P.push(O.clearcoatNormalMapUv),P.push(O.clearcoatRoughnessMapUv),P.push(O.iridescenceMapUv),P.push(O.iridescenceThicknessMapUv),P.push(O.sheenColorMapUv),P.push(O.sheenRoughnessMapUv),P.push(O.specularMapUv),P.push(O.specularColorMapUv),P.push(O.specularIntensityMapUv),P.push(O.transmissionMapUv),P.push(O.thicknessMapUv),P.push(O.combine),P.push(O.fogExp2),P.push(O.sizeAttenuation),P.push(O.morphTargetsCount),P.push(O.morphAttributeCount),P.push(O.numDirLights),P.push(O.numPointLights),P.push(O.numSpotLights),P.push(O.numSpotLightMaps),P.push(O.numHemiLights),P.push(O.numRectAreaLights),P.push(O.numDirLightShadows),P.push(O.numPointLightShadows),P.push(O.numSpotLightShadows),P.push(O.numSpotLightShadowsWithMaps),P.push(O.numLightProbes),P.push(O.shadowMapType),P.push(O.toneMapping),P.push(O.numClippingPlanes),P.push(O.numClipIntersection),P.push(O.depthPacking)}function I(P,O){m.disableAll(),O.supportsVertexTextures&&m.enable(0),O.instancing&&m.enable(1),O.instancingColor&&m.enable(2),O.instancingMorph&&m.enable(3),O.matcap&&m.enable(4),O.envMap&&m.enable(5),O.normalMapObjectSpace&&m.enable(6),O.normalMapTangentSpace&&m.enable(7),O.clearcoat&&m.enable(8),O.iridescence&&m.enable(9),O.alphaTest&&m.enable(10),O.vertexColors&&m.enable(11),O.vertexAlphas&&m.enable(12),O.vertexUv1s&&m.enable(13),O.vertexUv2s&&m.enable(14),O.vertexUv3s&&m.enable(15),O.vertexTangents&&m.enable(16),O.anisotropy&&m.enable(17),O.alphaHash&&m.enable(18),O.batching&&m.enable(19),O.dispersion&&m.enable(20),O.batchingColor&&m.enable(21),O.gradientMap&&m.enable(22),P.push(m.mask),m.disableAll(),O.fog&&m.enable(0),O.useFog&&m.enable(1),O.flatShading&&m.enable(2),O.logarithmicDepthBuffer&&m.enable(3),O.reversedDepthBuffer&&m.enable(4),O.skinning&&m.enable(5),O.morphTargets&&m.enable(6),O.morphNormals&&m.enable(7),O.morphColors&&m.enable(8),O.premultipliedAlpha&&m.enable(9),O.shadowMapEnabled&&m.enable(10),O.doubleSided&&m.enable(11),O.flipSided&&m.enable(12),O.useDepthPacking&&m.enable(13),O.dithering&&m.enable(14),O.transmission&&m.enable(15),O.sheen&&m.enable(16),O.opaque&&m.enable(17),O.pointsUvs&&m.enable(18),O.decodeVideoTexture&&m.enable(19),O.decodeVideoTextureEmissive&&m.enable(20),O.alphaToCoverage&&m.enable(21),P.push(m.mask)}function Y(P){const O=U[P.type];let J;if(O){const se=ma[O];J=XS.clone(se.uniforms)}else J=P.uniforms;return J}function ee(P,O){let J;for(let se=0,ue=S.length;se<ue;se++){const Me=S[se];if(Me.cacheKey===O){J=Me,++J.usedTimes;break}}return J===void 0&&(J=new b3(o,O,P,f),S.push(J)),J}function V(P){if(--P.usedTimes===0){const O=S.indexOf(P);S[O]=S[S.length-1],S.pop(),P.destroy()}}function k(P){x.remove(P)}function he(){x.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:Y,acquireProgram:ee,releaseProgram:V,releaseShaderCache:k,programs:S,dispose:he}}function R3(){let o=new WeakMap;function e(p){return o.has(p)}function i(p){let m=o.get(p);return m===void 0&&(m={},o.set(p,m)),m}function r(p){o.delete(p)}function l(p,m,x){o.get(p)[m]=x}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function w3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Sx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function bx(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function p(b,E,A,U,N,T){let M=o[e];return M===void 0?(M={id:b.id,object:b,geometry:E,material:A,groupOrder:U,renderOrder:b.renderOrder,z:N,group:T},o[e]=M):(M.id=b.id,M.object=b,M.geometry=E,M.material=A,M.groupOrder=U,M.renderOrder=b.renderOrder,M.z=N,M.group=T),e++,M}function m(b,E,A,U,N,T){const M=p(b,E,A,U,N,T);A.transmission>0?r.push(M):A.transparent===!0?l.push(M):i.push(M)}function x(b,E,A,U,N,T){const M=p(b,E,A,U,N,T);A.transmission>0?r.unshift(M):A.transparent===!0?l.unshift(M):i.unshift(M)}function _(b,E){i.length>1&&i.sort(b||w3),r.length>1&&r.sort(E||Sx),l.length>1&&l.sort(E||Sx)}function S(){for(let b=e,E=o.length;b<E;b++){const A=o[b];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:m,unshift:x,finish:S,sort:_}}function C3(){let o=new WeakMap;function e(r,l){const f=o.get(r);let p;return f===void 0?(p=new bx,o.set(r,[p])):l>=f.length?(p=new bx,f.push(p)):p=f[l],p}function i(){o=new WeakMap}return{get:e,dispose:i}}function D3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new _e,color:new Kt};break;case"SpotLight":i={position:new _e,direction:new _e,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new _e,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new _e,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":i={color:new Kt,position:new _e,halfWidth:new _e,halfHeight:new _e};break}return o[e.id]=i,i}}}function U3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let L3=0;function N3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function O3(o){const e=new D3,i=U3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)r.probe.push(new _e);const l=new _e,f=new Mn,p=new Mn;function m(_){let S=0,b=0,E=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let A=0,U=0,N=0,T=0,M=0,X=0,I=0,Y=0,ee=0,V=0,k=0;_.sort(N3);for(let P=0,O=_.length;P<O;P++){const J=_[P],se=J.color,ue=J.intensity,Me=J.distance,Se=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)S+=se.r*ue,b+=se.g*ue,E+=se.b*ue;else if(J.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(J.sh.coefficients[z],ue);k++}else if(J.isDirectionalLight){const z=e.get(J);if(z.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const $=J.shadow,ie=i.get(J);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,r.directionalShadow[A]=ie,r.directionalShadowMap[A]=Se,r.directionalShadowMatrix[A]=J.shadow.matrix,X++}r.directional[A]=z,A++}else if(J.isSpotLight){const z=e.get(J);z.position.setFromMatrixPosition(J.matrixWorld),z.color.copy(se).multiplyScalar(ue),z.distance=Me,z.coneCos=Math.cos(J.angle),z.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),z.decay=J.decay,r.spot[N]=z;const $=J.shadow;if(J.map&&(r.spotLightMap[ee]=J.map,ee++,$.updateMatrices(J),J.castShadow&&V++),r.spotLightMatrix[N]=$.matrix,J.castShadow){const ie=i.get(J);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,r.spotShadow[N]=ie,r.spotShadowMap[N]=Se,Y++}N++}else if(J.isRectAreaLight){const z=e.get(J);z.color.copy(se).multiplyScalar(ue),z.halfWidth.set(J.width*.5,0,0),z.halfHeight.set(0,J.height*.5,0),r.rectArea[T]=z,T++}else if(J.isPointLight){const z=e.get(J);if(z.color.copy(J.color).multiplyScalar(J.intensity),z.distance=J.distance,z.decay=J.decay,J.castShadow){const $=J.shadow,ie=i.get(J);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,r.pointShadow[U]=ie,r.pointShadowMap[U]=Se,r.pointShadowMatrix[U]=J.shadow.matrix,I++}r.point[U]=z,U++}else if(J.isHemisphereLight){const z=e.get(J);z.skyColor.copy(J.color).multiplyScalar(ue),z.groundColor.copy(J.groundColor).multiplyScalar(ue),r.hemi[M]=z,M++}}T>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Je.LTC_FLOAT_1,r.rectAreaLTC2=Je.LTC_FLOAT_2):(r.rectAreaLTC1=Je.LTC_HALF_1,r.rectAreaLTC2=Je.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=b,r.ambient[2]=E;const he=r.hash;(he.directionalLength!==A||he.pointLength!==U||he.spotLength!==N||he.rectAreaLength!==T||he.hemiLength!==M||he.numDirectionalShadows!==X||he.numPointShadows!==I||he.numSpotShadows!==Y||he.numSpotMaps!==ee||he.numLightProbes!==k)&&(r.directional.length=A,r.spot.length=N,r.rectArea.length=T,r.point.length=U,r.hemi.length=M,r.directionalShadow.length=X,r.directionalShadowMap.length=X,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=Y,r.spotShadowMap.length=Y,r.directionalShadowMatrix.length=X,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=Y+ee-V,r.spotLightMap.length=ee,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=k,he.directionalLength=A,he.pointLength=U,he.spotLength=N,he.rectAreaLength=T,he.hemiLength=M,he.numDirectionalShadows=X,he.numPointShadows=I,he.numSpotShadows=Y,he.numSpotMaps=ee,he.numLightProbes=k,r.version=L3++)}function x(_,S){let b=0,E=0,A=0,U=0,N=0;const T=S.matrixWorldInverse;for(let M=0,X=_.length;M<X;M++){const I=_[M];if(I.isDirectionalLight){const Y=r.directional[b];Y.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),Y.direction.sub(l),Y.direction.transformDirection(T),b++}else if(I.isSpotLight){const Y=r.spot[A];Y.position.setFromMatrixPosition(I.matrixWorld),Y.position.applyMatrix4(T),Y.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),Y.direction.sub(l),Y.direction.transformDirection(T),A++}else if(I.isRectAreaLight){const Y=r.rectArea[U];Y.position.setFromMatrixPosition(I.matrixWorld),Y.position.applyMatrix4(T),p.identity(),f.copy(I.matrixWorld),f.premultiply(T),p.extractRotation(f),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),Y.halfWidth.applyMatrix4(p),Y.halfHeight.applyMatrix4(p),U++}else if(I.isPointLight){const Y=r.point[E];Y.position.setFromMatrixPosition(I.matrixWorld),Y.position.applyMatrix4(T),E++}else if(I.isHemisphereLight){const Y=r.hemi[N];Y.direction.setFromMatrixPosition(I.matrixWorld),Y.direction.transformDirection(T),N++}}}return{setup:m,setupView:x,state:r}}function Mx(o){const e=new O3(o),i=[],r=[];function l(S){_.camera=S,i.length=0,r.length=0}function f(S){i.push(S)}function p(S){r.push(S)}function m(){e.setup(i)}function x(S){e.setupView(i,S)}const _={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:_,setupLights:m,setupLightsView:x,pushLight:f,pushShadow:p}}function P3(o){let e=new WeakMap;function i(l,f=0){const p=e.get(l);let m;return p===void 0?(m=new Mx(o),e.set(l,[m])):f>=p.length?(m=new Mx(o),p.push(m)):m=p[f],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const F3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z3=`uniform sampler2D shadow_pass;
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
}`;function B3(o,e,i){let r=new sm;const l=new Ut,f=new Ut,p=new Dn,m=new ib({depthPacking:dS}),x=new ab,_={},S=i.maxTextureSize,b={[Hr]:Mi,[Mi]:Hr,[_a]:_a},E=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:F3,fragmentShader:z3}),A=E.clone();A.defines.HORIZONTAL_PASS=1;const U=new oa;U.setAttribute("position",new xa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new sa(U,E),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wx;let M=this.type;this.render=function(V,k,he){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||V.length===0)return;const P=o.getRenderTarget(),O=o.getActiveCubeFace(),J=o.getActiveMipmapLevel(),se=o.state;se.setBlending(Ja),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ue=M!==Za&&this.type===Za,Me=M===Za&&this.type!==Za;for(let Se=0,z=V.length;Se<z;Se++){const $=V[Se],ie=$.shadow;if(ie===void 0){wt("WebGLShadowMap:",$,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;l.copy(ie.mapSize);const Te=ie.getFrameExtents();if(l.multiply(Te),f.copy(ie.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(f.x=Math.floor(S/Te.x),l.x=f.x*Te.x,ie.mapSize.x=f.x),l.y>S&&(f.y=Math.floor(S/Te.y),l.y=f.y*Te.y,ie.mapSize.y=f.y)),ie.map===null||ue===!0||Me===!0){const H=this.type!==Za?{minFilter:Li,magFilter:Li}:{};ie.map!==null&&ie.map.dispose(),ie.map=new bs(l.x,l.y,H),ie.map.texture.name=$.name+".shadowMap",ie.camera.updateProjectionMatrix()}o.setRenderTarget(ie.map),o.clear();const Ce=ie.getViewportCount();for(let H=0;H<Ce;H++){const me=ie.getViewport(H);p.set(f.x*me.x,f.y*me.y,f.x*me.z,f.y*me.w),se.viewport(p),ie.updateMatrices($,H),r=ie.getFrustum(),Y(k,he,ie.camera,$,this.type)}ie.isPointLightShadow!==!0&&this.type===Za&&X(ie,he),ie.needsUpdate=!1}M=this.type,T.needsUpdate=!1,o.setRenderTarget(P,O,J)};function X(V,k){const he=e.update(N);E.defines.VSM_SAMPLES!==V.blurSamples&&(E.defines.VSM_SAMPLES=V.blurSamples,A.defines.VSM_SAMPLES=V.blurSamples,E.needsUpdate=!0,A.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new bs(l.x,l.y)),E.uniforms.shadow_pass.value=V.map.texture,E.uniforms.resolution.value=V.mapSize,E.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(k,null,he,E,N,null),A.uniforms.shadow_pass.value=V.mapPass.texture,A.uniforms.resolution.value=V.mapSize,A.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(k,null,he,A,N,null)}function I(V,k,he,P){let O=null;const J=he.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(J!==void 0)O=J;else if(O=he.isPointLight===!0?x:m,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const se=O.uuid,ue=k.uuid;let Me=_[se];Me===void 0&&(Me={},_[se]=Me);let Se=Me[ue];Se===void 0&&(Se=O.clone(),Me[ue]=Se,k.addEventListener("dispose",ee)),O=Se}if(O.visible=k.visible,O.wireframe=k.wireframe,P===Za?O.side=k.shadowSide!==null?k.shadowSide:k.side:O.side=k.shadowSide!==null?k.shadowSide:b[k.side],O.alphaMap=k.alphaMap,O.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,O.map=k.map,O.clipShadows=k.clipShadows,O.clippingPlanes=k.clippingPlanes,O.clipIntersection=k.clipIntersection,O.displacementMap=k.displacementMap,O.displacementScale=k.displacementScale,O.displacementBias=k.displacementBias,O.wireframeLinewidth=k.wireframeLinewidth,O.linewidth=k.linewidth,he.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const se=o.properties.get(O);se.light=he}return O}function Y(V,k,he,P,O){if(V.visible===!1)return;if(V.layers.test(k.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&O===Za)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,V.matrixWorld);const ue=e.update(V),Me=V.material;if(Array.isArray(Me)){const Se=ue.groups;for(let z=0,$=Se.length;z<$;z++){const ie=Se[z],Te=Me[ie.materialIndex];if(Te&&Te.visible){const Ce=I(V,Te,P,O);V.onBeforeShadow(o,V,k,he,ue,Ce,ie),o.renderBufferDirect(he,null,ue,Ce,V,ie),V.onAfterShadow(o,V,k,he,ue,Ce,ie)}}}else if(Me.visible){const Se=I(V,Me,P,O);V.onBeforeShadow(o,V,k,he,ue,Se,null),o.renderBufferDirect(he,null,ue,Se,V,null),V.onAfterShadow(o,V,k,he,ue,Se,null)}}const se=V.children;for(let ue=0,Me=se.length;ue<Me;ue++)Y(se[ue],k,he,P,O)}function ee(V){V.target.removeEventListener("dispose",ee);for(const he in _){const P=_[he],O=V.target.uuid;O in P&&(P[O].dispose(),delete P[O])}}}const I3={[op]:lp,[cp]:hp,[up]:dp,[Lo]:fp,[lp]:op,[hp]:cp,[dp]:up,[fp]:Lo};function H3(o,e){function i(){let j=!1;const Xe=new Dn;let Ve=null;const Ge=new Dn(0,0,0,0);return{setMask:function(Ue){Ve!==Ue&&!j&&(o.colorMask(Ue,Ue,Ue,Ue),Ve=Ue)},setLocked:function(Ue){j=Ue},setClear:function(Ue,Re,nt,Mt,it){it===!0&&(Ue*=Mt,Re*=Mt,nt*=Mt),Xe.set(Ue,Re,nt,Mt),Ge.equals(Xe)===!1&&(o.clearColor(Ue,Re,nt,Mt),Ge.copy(Xe))},reset:function(){j=!1,Ve=null,Ge.set(-1,0,0,0)}}}function r(){let j=!1,Xe=!1,Ve=null,Ge=null,Ue=null;return{setReversed:function(Re){if(Xe!==Re){const nt=e.get("EXT_clip_control");Re?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Xe=Re;const Mt=Ue;Ue=null,this.setClear(Mt)}},getReversed:function(){return Xe},setTest:function(Re){Re?Q(o.DEPTH_TEST):ye(o.DEPTH_TEST)},setMask:function(Re){Ve!==Re&&!j&&(o.depthMask(Re),Ve=Re)},setFunc:function(Re){if(Xe&&(Re=I3[Re]),Ge!==Re){switch(Re){case op:o.depthFunc(o.NEVER);break;case lp:o.depthFunc(o.ALWAYS);break;case cp:o.depthFunc(o.LESS);break;case Lo:o.depthFunc(o.LEQUAL);break;case up:o.depthFunc(o.EQUAL);break;case fp:o.depthFunc(o.GEQUAL);break;case hp:o.depthFunc(o.GREATER);break;case dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ge=Re}},setLocked:function(Re){j=Re},setClear:function(Re){Ue!==Re&&(Xe&&(Re=1-Re),o.clearDepth(Re),Ue=Re)},reset:function(){j=!1,Ve=null,Ge=null,Ue=null,Xe=!1}}}function l(){let j=!1,Xe=null,Ve=null,Ge=null,Ue=null,Re=null,nt=null,Mt=null,it=null;return{setTest:function($t){j||($t?Q(o.STENCIL_TEST):ye(o.STENCIL_TEST))},setMask:function($t){Xe!==$t&&!j&&(o.stencilMask($t),Xe=$t)},setFunc:function($t,Yn,li){(Ve!==$t||Ge!==Yn||Ue!==li)&&(o.stencilFunc($t,Yn,li),Ve=$t,Ge=Yn,Ue=li)},setOp:function($t,Yn,li){(Re!==$t||nt!==Yn||Mt!==li)&&(o.stencilOp($t,Yn,li),Re=$t,nt=Yn,Mt=li)},setLocked:function($t){j=$t},setClear:function($t){it!==$t&&(o.clearStencil($t),it=$t)},reset:function(){j=!1,Xe=null,Ve=null,Ge=null,Ue=null,Re=null,nt=null,Mt=null,it=null}}}const f=new i,p=new r,m=new l,x=new WeakMap,_=new WeakMap;let S={},b={},E=new WeakMap,A=[],U=null,N=!1,T=null,M=null,X=null,I=null,Y=null,ee=null,V=null,k=new Kt(0,0,0),he=0,P=!1,O=null,J=null,se=null,ue=null,Me=null;const Se=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const ie=o.getParameter(o.VERSION);ie.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ie)[1]),z=$>=1):ie.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),z=$>=2);let Te=null,Ce={};const H=o.getParameter(o.SCISSOR_BOX),me=o.getParameter(o.VIEWPORT),De=new Dn().fromArray(H),Fe=new Dn().fromArray(me);function $e(j,Xe,Ve,Ge){const Ue=new Uint8Array(4),Re=o.createTexture();o.bindTexture(j,Re),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let nt=0;nt<Ve;nt++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Xe,0,o.RGBA,1,1,Ge,0,o.RGBA,o.UNSIGNED_BYTE,Ue):o.texImage2D(Xe+nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ue);return Re}const de={};de[o.TEXTURE_2D]=$e(o.TEXTURE_2D,o.TEXTURE_2D,1),de[o.TEXTURE_CUBE_MAP]=$e(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[o.TEXTURE_2D_ARRAY]=$e(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),de[o.TEXTURE_3D]=$e(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Q(o.DEPTH_TEST),p.setFunc(Lo),gt(!1),Tt(vg),Q(o.CULL_FACE),At(Ja);function Q(j){S[j]!==!0&&(o.enable(j),S[j]=!0)}function ye(j){S[j]!==!1&&(o.disable(j),S[j]=!1)}function Ie(j,Xe){return b[j]!==Xe?(o.bindFramebuffer(j,Xe),b[j]=Xe,j===o.DRAW_FRAMEBUFFER&&(b[o.FRAMEBUFFER]=Xe),j===o.FRAMEBUFFER&&(b[o.DRAW_FRAMEBUFFER]=Xe),!0):!1}function ke(j,Xe){let Ve=A,Ge=!1;if(j){Ve=E.get(Xe),Ve===void 0&&(Ve=[],E.set(Xe,Ve));const Ue=j.textures;if(Ve.length!==Ue.length||Ve[0]!==o.COLOR_ATTACHMENT0){for(let Re=0,nt=Ue.length;Re<nt;Re++)Ve[Re]=o.COLOR_ATTACHMENT0+Re;Ve.length=Ue.length,Ge=!0}}else Ve[0]!==o.BACK&&(Ve[0]=o.BACK,Ge=!0);Ge&&o.drawBuffers(Ve)}function tt(j){return U!==j?(o.useProgram(j),U=j,!0):!1}const Jt={[gs]:o.FUNC_ADD,[Iy]:o.FUNC_SUBTRACT,[Hy]:o.FUNC_REVERSE_SUBTRACT};Jt[Vy]=o.MIN,Jt[Gy]=o.MAX;const _t={[ky]:o.ZERO,[Xy]:o.ONE,[Wy]:o.SRC_COLOR,[rp]:o.SRC_ALPHA,[Qy]:o.SRC_ALPHA_SATURATE,[Zy]:o.DST_COLOR,[Yy]:o.DST_ALPHA,[qy]:o.ONE_MINUS_SRC_COLOR,[sp]:o.ONE_MINUS_SRC_ALPHA,[Ky]:o.ONE_MINUS_DST_COLOR,[jy]:o.ONE_MINUS_DST_ALPHA,[Jy]:o.CONSTANT_COLOR,[$y]:o.ONE_MINUS_CONSTANT_COLOR,[eS]:o.CONSTANT_ALPHA,[tS]:o.ONE_MINUS_CONSTANT_ALPHA};function At(j,Xe,Ve,Ge,Ue,Re,nt,Mt,it,$t){if(j===Ja){N===!0&&(ye(o.BLEND),N=!1);return}if(N===!1&&(Q(o.BLEND),N=!0),j!==By){if(j!==T||$t!==P){if((M!==gs||Y!==gs)&&(o.blendEquation(o.FUNC_ADD),M=gs,Y=gs),$t)switch(j){case Do:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yg:o.blendFunc(o.ONE,o.ONE);break;case Sg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Cn("WebGLState: Invalid blending: ",j);break}else switch(j){case Do:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Sg:Cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bg:Cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Cn("WebGLState: Invalid blending: ",j);break}X=null,I=null,ee=null,V=null,k.set(0,0,0),he=0,T=j,P=$t}return}Ue=Ue||Xe,Re=Re||Ve,nt=nt||Ge,(Xe!==M||Ue!==Y)&&(o.blendEquationSeparate(Jt[Xe],Jt[Ue]),M=Xe,Y=Ue),(Ve!==X||Ge!==I||Re!==ee||nt!==V)&&(o.blendFuncSeparate(_t[Ve],_t[Ge],_t[Re],_t[nt]),X=Ve,I=Ge,ee=Re,V=nt),(Mt.equals(k)===!1||it!==he)&&(o.blendColor(Mt.r,Mt.g,Mt.b,it),k.copy(Mt),he=it),T=j,P=!1}function W(j,Xe){j.side===_a?ye(o.CULL_FACE):Q(o.CULL_FACE);let Ve=j.side===Mi;Xe&&(Ve=!Ve),gt(Ve),j.blending===Do&&j.transparent===!1?At(Ja):At(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),p.setFunc(j.depthFunc),p.setTest(j.depthTest),p.setMask(j.depthWrite),f.setMask(j.colorWrite);const Ge=j.stencilWrite;m.setTest(Ge),Ge&&(m.setMask(j.stencilWriteMask),m.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),m.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),qe(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Q(o.SAMPLE_ALPHA_TO_COVERAGE):ye(o.SAMPLE_ALPHA_TO_COVERAGE)}function gt(j){O!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),O=j)}function Tt(j){j!==Py?(Q(o.CULL_FACE),j!==J&&(j===vg?o.cullFace(o.BACK):j===Fy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ye(o.CULL_FACE),J=j}function Vt(j){j!==se&&(z&&o.lineWidth(j),se=j)}function qe(j,Xe,Ve){j?(Q(o.POLYGON_OFFSET_FILL),(ue!==Xe||Me!==Ve)&&(o.polygonOffset(Xe,Ve),ue=Xe,Me=Ve)):ye(o.POLYGON_OFFSET_FILL)}function Lt(j){j?Q(o.SCISSOR_TEST):ye(o.SCISSOR_TEST)}function st(j){j===void 0&&(j=o.TEXTURE0+Se-1),Te!==j&&(o.activeTexture(j),Te=j)}function yt(j,Xe,Ve){Ve===void 0&&(Te===null?Ve=o.TEXTURE0+Se-1:Ve=Te);let Ge=Ce[Ve];Ge===void 0&&(Ge={type:void 0,texture:void 0},Ce[Ve]=Ge),(Ge.type!==j||Ge.texture!==Xe)&&(Te!==Ve&&(o.activeTexture(Ve),Te=Ve),o.bindTexture(j,Xe||de[j]),Ge.type=j,Ge.texture=Xe)}function B(){const j=Ce[Te];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function oe(){try{o.compressedTexImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Ae(){try{o.texSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Le(){try{o.texSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function re(){try{o.compressedTexSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function We(){try{o.texStorage2D(...arguments)}catch(j){j("WebGLState:",j)}}function dt(){try{o.texStorage3D(...arguments)}catch(j){j("WebGLState:",j)}}function He(){try{o.texImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Ne(){try{o.texImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Pe(j){De.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),De.copy(j))}function ot(j){Fe.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Fe.copy(j))}function lt(j,Xe){let Ve=_.get(Xe);Ve===void 0&&(Ve=new WeakMap,_.set(Xe,Ve));let Ge=Ve.get(j);Ge===void 0&&(Ge=o.getUniformBlockIndex(Xe,j.name),Ve.set(j,Ge))}function Ye(j,Xe){const Ge=_.get(Xe).get(j);x.get(Xe)!==Ge&&(o.uniformBlockBinding(Xe,Ge,j.__bindingPointIndex),x.set(Xe,Ge))}function vt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),p.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},Te=null,Ce={},b={},E=new WeakMap,A=[],U=null,N=!1,T=null,M=null,X=null,I=null,Y=null,ee=null,V=null,k=new Kt(0,0,0),he=0,P=!1,O=null,J=null,se=null,ue=null,Me=null,De.set(0,0,o.canvas.width,o.canvas.height),Fe.set(0,0,o.canvas.width,o.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:Q,disable:ye,bindFramebuffer:Ie,drawBuffers:ke,useProgram:tt,setBlending:At,setMaterial:W,setFlipSided:gt,setCullFace:Tt,setLineWidth:Vt,setPolygonOffset:qe,setScissorTest:Lt,activeTexture:st,bindTexture:yt,unbindTexture:B,compressedTexImage2D:w,compressedTexImage3D:oe,texImage2D:He,texImage3D:Ne,updateUBOMapping:lt,uniformBlockBinding:Ye,texStorage2D:We,texStorage3D:dt,texSubImage2D:Ae,texSubImage3D:Le,compressedTexSubImage2D:re,compressedTexSubImage3D:Ze,scissor:Pe,viewport:ot,reset:vt}}function V3(o,e,i,r,l,f,p){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Ut,S=new WeakMap;let b;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(B,w){return A?new OffscreenCanvas(B,w):Yu("canvas")}function N(B,w,oe){let Ae=1;const Le=yt(B);if((Le.width>oe||Le.height>oe)&&(Ae=oe/Math.max(Le.width,Le.height)),Ae<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const re=Math.floor(Ae*Le.width),Ze=Math.floor(Ae*Le.height);b===void 0&&(b=U(re,Ze));const We=w?U(re,Ze):b;return We.width=re,We.height=Ze,We.getContext("2d").drawImage(B,0,0,re,Ze),wt("WebGLRenderer: Texture has been resized from ("+Le.width+"x"+Le.height+") to ("+re+"x"+Ze+")."),We}else return"data"in B&&wt("WebGLRenderer: Image in DataTexture is too big ("+Le.width+"x"+Le.height+")."),B;return B}function T(B){return B.generateMipmaps}function M(B){o.generateMipmap(B)}function X(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(B,w,oe,Ae,Le=!1){if(B!==null){if(o[B]!==void 0)return o[B];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let re=w;if(w===o.RED&&(oe===o.FLOAT&&(re=o.R32F),oe===o.HALF_FLOAT&&(re=o.R16F),oe===o.UNSIGNED_BYTE&&(re=o.R8)),w===o.RED_INTEGER&&(oe===o.UNSIGNED_BYTE&&(re=o.R8UI),oe===o.UNSIGNED_SHORT&&(re=o.R16UI),oe===o.UNSIGNED_INT&&(re=o.R32UI),oe===o.BYTE&&(re=o.R8I),oe===o.SHORT&&(re=o.R16I),oe===o.INT&&(re=o.R32I)),w===o.RG&&(oe===o.FLOAT&&(re=o.RG32F),oe===o.HALF_FLOAT&&(re=o.RG16F),oe===o.UNSIGNED_BYTE&&(re=o.RG8)),w===o.RG_INTEGER&&(oe===o.UNSIGNED_BYTE&&(re=o.RG8UI),oe===o.UNSIGNED_SHORT&&(re=o.RG16UI),oe===o.UNSIGNED_INT&&(re=o.RG32UI),oe===o.BYTE&&(re=o.RG8I),oe===o.SHORT&&(re=o.RG16I),oe===o.INT&&(re=o.RG32I)),w===o.RGB_INTEGER&&(oe===o.UNSIGNED_BYTE&&(re=o.RGB8UI),oe===o.UNSIGNED_SHORT&&(re=o.RGB16UI),oe===o.UNSIGNED_INT&&(re=o.RGB32UI),oe===o.BYTE&&(re=o.RGB8I),oe===o.SHORT&&(re=o.RGB16I),oe===o.INT&&(re=o.RGB32I)),w===o.RGBA_INTEGER&&(oe===o.UNSIGNED_BYTE&&(re=o.RGBA8UI),oe===o.UNSIGNED_SHORT&&(re=o.RGBA16UI),oe===o.UNSIGNED_INT&&(re=o.RGBA32UI),oe===o.BYTE&&(re=o.RGBA8I),oe===o.SHORT&&(re=o.RGBA16I),oe===o.INT&&(re=o.RGBA32I)),w===o.RGB&&(oe===o.UNSIGNED_INT_5_9_9_9_REV&&(re=o.RGB9_E5),oe===o.UNSIGNED_INT_10F_11F_11F_REV&&(re=o.R11F_G11F_B10F)),w===o.RGBA){const Ze=Le?Wu:an.getTransfer(Ae);oe===o.FLOAT&&(re=o.RGBA32F),oe===o.HALF_FLOAT&&(re=o.RGBA16F),oe===o.UNSIGNED_BYTE&&(re=Ze===pn?o.SRGB8_ALPHA8:o.RGBA8),oe===o.UNSIGNED_SHORT_4_4_4_4&&(re=o.RGBA4),oe===o.UNSIGNED_SHORT_5_5_5_1&&(re=o.RGB5_A1)}return(re===o.R16F||re===o.R32F||re===o.RG16F||re===o.RG32F||re===o.RGBA16F||re===o.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function Y(B,w){let oe;return B?w===null||w===ys||w===Yl?oe=o.DEPTH24_STENCIL8:w===Qa?oe=o.DEPTH32F_STENCIL8:w===ql&&(oe=o.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ys||w===Yl?oe=o.DEPTH_COMPONENT24:w===Qa?oe=o.DEPTH_COMPONENT32F:w===ql&&(oe=o.DEPTH_COMPONENT16),oe}function ee(B,w){return T(B)===!0||B.isFramebufferTexture&&B.minFilter!==Li&&B.minFilter!==qi?Math.log2(Math.max(w.width,w.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?w.mipmaps.length:1}function V(B){const w=B.target;w.removeEventListener("dispose",V),he(w),w.isVideoTexture&&S.delete(w)}function k(B){const w=B.target;w.removeEventListener("dispose",k),O(w)}function he(B){const w=r.get(B);if(w.__webglInit===void 0)return;const oe=B.source,Ae=E.get(oe);if(Ae){const Le=Ae[w.__cacheKey];Le.usedTimes--,Le.usedTimes===0&&P(B),Object.keys(Ae).length===0&&E.delete(oe)}r.remove(B)}function P(B){const w=r.get(B);o.deleteTexture(w.__webglTexture);const oe=B.source,Ae=E.get(oe);delete Ae[w.__cacheKey],p.memory.textures--}function O(B){const w=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++){if(Array.isArray(w.__webglFramebuffer[Ae]))for(let Le=0;Le<w.__webglFramebuffer[Ae].length;Le++)o.deleteFramebuffer(w.__webglFramebuffer[Ae][Le]);else o.deleteFramebuffer(w.__webglFramebuffer[Ae]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[Ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let Ae=0;Ae<w.__webglFramebuffer.length;Ae++)o.deleteFramebuffer(w.__webglFramebuffer[Ae]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Ae=0;Ae<w.__webglColorRenderbuffer.length;Ae++)w.__webglColorRenderbuffer[Ae]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[Ae]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const oe=B.textures;for(let Ae=0,Le=oe.length;Ae<Le;Ae++){const re=r.get(oe[Ae]);re.__webglTexture&&(o.deleteTexture(re.__webglTexture),p.memory.textures--),r.remove(oe[Ae])}r.remove(B)}let J=0;function se(){J=0}function ue(){const B=J;return B>=l.maxTextures&&wt("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),J+=1,B}function Me(B){const w=[];return w.push(B.wrapS),w.push(B.wrapT),w.push(B.wrapR||0),w.push(B.magFilter),w.push(B.minFilter),w.push(B.anisotropy),w.push(B.internalFormat),w.push(B.format),w.push(B.type),w.push(B.generateMipmaps),w.push(B.premultiplyAlpha),w.push(B.flipY),w.push(B.unpackAlignment),w.push(B.colorSpace),w.join()}function Se(B,w){const oe=r.get(B);if(B.isVideoTexture&&Lt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&oe.__version!==B.version){const Ae=B.image;if(Ae===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{de(oe,B,w);return}}else B.isExternalTexture&&(oe.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,oe.__webglTexture,o.TEXTURE0+w)}function z(B,w){const oe=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&oe.__version!==B.version){de(oe,B,w);return}else B.isExternalTexture&&(oe.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,oe.__webglTexture,o.TEXTURE0+w)}function $(B,w){const oe=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&oe.__version!==B.version){de(oe,B,w);return}i.bindTexture(o.TEXTURE_3D,oe.__webglTexture,o.TEXTURE0+w)}function ie(B,w){const oe=r.get(B);if(B.version>0&&oe.__version!==B.version){Q(oe,B,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,oe.__webglTexture,o.TEXTURE0+w)}const Te={[_p]:o.REPEAT,[Ka]:o.CLAMP_TO_EDGE,[gp]:o.MIRRORED_REPEAT},Ce={[Li]:o.NEAREST,[fS]:o.NEAREST_MIPMAP_NEAREST,[_u]:o.NEAREST_MIPMAP_LINEAR,[qi]:o.LINEAR,[Ed]:o.LINEAR_MIPMAP_NEAREST,[vs]:o.LINEAR_MIPMAP_LINEAR},H={[mS]:o.NEVER,[SS]:o.ALWAYS,[_S]:o.LESS,[Ix]:o.LEQUAL,[gS]:o.EQUAL,[yS]:o.GEQUAL,[xS]:o.GREATER,[vS]:o.NOTEQUAL};function me(B,w){if(w.type===Qa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===qi||w.magFilter===Ed||w.magFilter===_u||w.magFilter===vs||w.minFilter===qi||w.minFilter===Ed||w.minFilter===_u||w.minFilter===vs)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,Te[w.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,Te[w.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,Te[w.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,Ce[w.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,Ce[w.minFilter]),w.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,H[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Li||w.minFilter!==_u&&w.minFilter!==vs||w.type===Qa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");o.texParameterf(B,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function De(B,w){let oe=!1;B.__webglInit===void 0&&(B.__webglInit=!0,w.addEventListener("dispose",V));const Ae=w.source;let Le=E.get(Ae);Le===void 0&&(Le={},E.set(Ae,Le));const re=Me(w);if(re!==B.__cacheKey){Le[re]===void 0&&(Le[re]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,oe=!0),Le[re].usedTimes++;const Ze=Le[B.__cacheKey];Ze!==void 0&&(Le[B.__cacheKey].usedTimes--,Ze.usedTimes===0&&P(w)),B.__cacheKey=re,B.__webglTexture=Le[re].texture}return oe}function Fe(B,w,oe){return Math.floor(Math.floor(B/oe)/w)}function $e(B,w,oe,Ae){const re=B.updateRanges;if(re.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,oe,Ae,w.data);else{re.sort((Ne,Pe)=>Ne.start-Pe.start);let Ze=0;for(let Ne=1;Ne<re.length;Ne++){const Pe=re[Ze],ot=re[Ne],lt=Pe.start+Pe.count,Ye=Fe(ot.start,w.width,4),vt=Fe(Pe.start,w.width,4);ot.start<=lt+1&&Ye===vt&&Fe(ot.start+ot.count-1,w.width,4)===Ye?Pe.count=Math.max(Pe.count,ot.start+ot.count-Pe.start):(++Ze,re[Ze]=ot)}re.length=Ze+1;const We=o.getParameter(o.UNPACK_ROW_LENGTH),dt=o.getParameter(o.UNPACK_SKIP_PIXELS),He=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Ne=0,Pe=re.length;Ne<Pe;Ne++){const ot=re[Ne],lt=Math.floor(ot.start/4),Ye=Math.ceil(ot.count/4),vt=lt%w.width,j=Math.floor(lt/w.width),Xe=Ye,Ve=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,vt),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,vt,j,Xe,Ve,oe,Ae,w.data)}B.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,We),o.pixelStorei(o.UNPACK_SKIP_PIXELS,dt),o.pixelStorei(o.UNPACK_SKIP_ROWS,He)}}function de(B,w,oe){let Ae=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ae=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ae=o.TEXTURE_3D);const Le=De(B,w),re=w.source;i.bindTexture(Ae,B.__webglTexture,o.TEXTURE0+oe);const Ze=r.get(re);if(re.version!==Ze.__version||Le===!0){i.activeTexture(o.TEXTURE0+oe);const We=an.getPrimaries(an.workingColorSpace),dt=w.colorSpace===zr?null:an.getPrimaries(w.colorSpace),He=w.colorSpace===zr||We===dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Ne=N(w.image,!1,l.maxTextureSize);Ne=st(w,Ne);const Pe=f.convert(w.format,w.colorSpace),ot=f.convert(w.type);let lt=I(w.internalFormat,Pe,ot,w.colorSpace,w.isVideoTexture);me(Ae,w);let Ye;const vt=w.mipmaps,j=w.isVideoTexture!==!0,Xe=Ze.__version===void 0||Le===!0,Ve=re.dataReady,Ge=ee(w,Ne);if(w.isDepthTexture)lt=Y(w.format===Zl,w.type),Xe&&(j?i.texStorage2D(o.TEXTURE_2D,1,lt,Ne.width,Ne.height):i.texImage2D(o.TEXTURE_2D,0,lt,Ne.width,Ne.height,0,Pe,ot,null));else if(w.isDataTexture)if(vt.length>0){j&&Xe&&i.texStorage2D(o.TEXTURE_2D,Ge,lt,vt[0].width,vt[0].height);for(let Ue=0,Re=vt.length;Ue<Re;Ue++)Ye=vt[Ue],j?Ve&&i.texSubImage2D(o.TEXTURE_2D,Ue,0,0,Ye.width,Ye.height,Pe,ot,Ye.data):i.texImage2D(o.TEXTURE_2D,Ue,lt,Ye.width,Ye.height,0,Pe,ot,Ye.data);w.generateMipmaps=!1}else j?(Xe&&i.texStorage2D(o.TEXTURE_2D,Ge,lt,Ne.width,Ne.height),Ve&&$e(w,Ne,Pe,ot)):i.texImage2D(o.TEXTURE_2D,0,lt,Ne.width,Ne.height,0,Pe,ot,Ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){j&&Xe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,lt,vt[0].width,vt[0].height,Ne.depth);for(let Ue=0,Re=vt.length;Ue<Re;Ue++)if(Ye=vt[Ue],w.format!==ra)if(Pe!==null)if(j){if(Ve)if(w.layerUpdates.size>0){const nt=ex(Ye.width,Ye.height,w.format,w.type);for(const Mt of w.layerUpdates){const it=Ye.data.subarray(Mt*nt/Ye.data.BYTES_PER_ELEMENT,(Mt+1)*nt/Ye.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,Mt,Ye.width,Ye.height,1,Pe,it)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,0,Ye.width,Ye.height,Ne.depth,Pe,Ye.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ue,lt,Ye.width,Ye.height,Ne.depth,0,Ye.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ve&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,0,Ye.width,Ye.height,Ne.depth,Pe,ot,Ye.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ue,lt,Ye.width,Ye.height,Ne.depth,0,Pe,ot,Ye.data)}else{j&&Xe&&i.texStorage2D(o.TEXTURE_2D,Ge,lt,vt[0].width,vt[0].height);for(let Ue=0,Re=vt.length;Ue<Re;Ue++)Ye=vt[Ue],w.format!==ra?Pe!==null?j?Ve&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ue,0,0,Ye.width,Ye.height,Pe,Ye.data):i.compressedTexImage2D(o.TEXTURE_2D,Ue,lt,Ye.width,Ye.height,0,Ye.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ve&&i.texSubImage2D(o.TEXTURE_2D,Ue,0,0,Ye.width,Ye.height,Pe,ot,Ye.data):i.texImage2D(o.TEXTURE_2D,Ue,lt,Ye.width,Ye.height,0,Pe,ot,Ye.data)}else if(w.isDataArrayTexture)if(j){if(Xe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,lt,Ne.width,Ne.height,Ne.depth),Ve)if(w.layerUpdates.size>0){const Ue=ex(Ne.width,Ne.height,w.format,w.type);for(const Re of w.layerUpdates){const nt=Ne.data.subarray(Re*Ue/Ne.data.BYTES_PER_ELEMENT,(Re+1)*Ue/Ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Re,Ne.width,Ne.height,1,Pe,ot,nt)}w.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,Pe,ot,Ne.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,lt,Ne.width,Ne.height,Ne.depth,0,Pe,ot,Ne.data);else if(w.isData3DTexture)j?(Xe&&i.texStorage3D(o.TEXTURE_3D,Ge,lt,Ne.width,Ne.height,Ne.depth),Ve&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,Pe,ot,Ne.data)):i.texImage3D(o.TEXTURE_3D,0,lt,Ne.width,Ne.height,Ne.depth,0,Pe,ot,Ne.data);else if(w.isFramebufferTexture){if(Xe)if(j)i.texStorage2D(o.TEXTURE_2D,Ge,lt,Ne.width,Ne.height);else{let Ue=Ne.width,Re=Ne.height;for(let nt=0;nt<Ge;nt++)i.texImage2D(o.TEXTURE_2D,nt,lt,Ue,Re,0,Pe,ot,null),Ue>>=1,Re>>=1}}else if(vt.length>0){if(j&&Xe){const Ue=yt(vt[0]);i.texStorage2D(o.TEXTURE_2D,Ge,lt,Ue.width,Ue.height)}for(let Ue=0,Re=vt.length;Ue<Re;Ue++)Ye=vt[Ue],j?Ve&&i.texSubImage2D(o.TEXTURE_2D,Ue,0,0,Pe,ot,Ye):i.texImage2D(o.TEXTURE_2D,Ue,lt,Pe,ot,Ye);w.generateMipmaps=!1}else if(j){if(Xe){const Ue=yt(Ne);i.texStorage2D(o.TEXTURE_2D,Ge,lt,Ue.width,Ue.height)}Ve&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,ot,Ne)}else i.texImage2D(o.TEXTURE_2D,0,lt,Pe,ot,Ne);T(w)&&M(Ae),Ze.__version=re.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function Q(B,w,oe){if(w.image.length!==6)return;const Ae=De(B,w),Le=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+oe);const re=r.get(Le);if(Le.version!==re.__version||Ae===!0){i.activeTexture(o.TEXTURE0+oe);const Ze=an.getPrimaries(an.workingColorSpace),We=w.colorSpace===zr?null:an.getPrimaries(w.colorSpace),dt=w.colorSpace===zr||Ze===We?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const He=w.isCompressedTexture||w.image[0].isCompressedTexture,Ne=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let Re=0;Re<6;Re++)!He&&!Ne?Pe[Re]=N(w.image[Re],!0,l.maxCubemapSize):Pe[Re]=Ne?w.image[Re].image:w.image[Re],Pe[Re]=st(w,Pe[Re]);const ot=Pe[0],lt=f.convert(w.format,w.colorSpace),Ye=f.convert(w.type),vt=I(w.internalFormat,lt,Ye,w.colorSpace),j=w.isVideoTexture!==!0,Xe=re.__version===void 0||Ae===!0,Ve=Le.dataReady;let Ge=ee(w,ot);me(o.TEXTURE_CUBE_MAP,w);let Ue;if(He){j&&Xe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,vt,ot.width,ot.height);for(let Re=0;Re<6;Re++){Ue=Pe[Re].mipmaps;for(let nt=0;nt<Ue.length;nt++){const Mt=Ue[nt];w.format!==ra?lt!==null?j?Ve&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,0,0,Mt.width,Mt.height,lt,Mt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,vt,Mt.width,Mt.height,0,Mt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ve&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,0,0,Mt.width,Mt.height,lt,Ye,Mt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,vt,Mt.width,Mt.height,0,lt,Ye,Mt.data)}}}else{if(Ue=w.mipmaps,j&&Xe){Ue.length>0&&Ge++;const Re=yt(Pe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,vt,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Ne){j?Ve&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Pe[Re].width,Pe[Re].height,lt,Ye,Pe[Re].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,vt,Pe[Re].width,Pe[Re].height,0,lt,Ye,Pe[Re].data);for(let nt=0;nt<Ue.length;nt++){const it=Ue[nt].image[Re].image;j?Ve&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,0,0,it.width,it.height,lt,Ye,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,vt,it.width,it.height,0,lt,Ye,it.data)}}else{j?Ve&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,lt,Ye,Pe[Re]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,vt,lt,Ye,Pe[Re]);for(let nt=0;nt<Ue.length;nt++){const Mt=Ue[nt];j?Ve&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,0,0,lt,Ye,Mt.image[Re]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,vt,lt,Ye,Mt.image[Re])}}}T(w)&&M(o.TEXTURE_CUBE_MAP),re.__version=Le.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function ye(B,w,oe,Ae,Le,re){const Ze=f.convert(oe.format,oe.colorSpace),We=f.convert(oe.type),dt=I(oe.internalFormat,Ze,We,oe.colorSpace),He=r.get(w),Ne=r.get(oe);if(Ne.__renderTarget=w,!He.__hasExternalTextures){const Pe=Math.max(1,w.width>>re),ot=Math.max(1,w.height>>re);Le===o.TEXTURE_3D||Le===o.TEXTURE_2D_ARRAY?i.texImage3D(Le,re,dt,Pe,ot,w.depth,0,Ze,We,null):i.texImage2D(Le,re,dt,Pe,ot,0,Ze,We,null)}i.bindFramebuffer(o.FRAMEBUFFER,B),qe(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ae,Le,Ne.__webglTexture,0,Vt(w)):(Le===o.TEXTURE_2D||Le>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Le<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Ae,Le,Ne.__webglTexture,re),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ie(B,w,oe){if(o.bindRenderbuffer(o.RENDERBUFFER,B),w.depthBuffer){const Ae=w.depthTexture,Le=Ae&&Ae.isDepthTexture?Ae.type:null,re=Y(w.stencilBuffer,Le),Ze=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=Vt(w);qe(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,re,w.width,w.height):oe?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,re,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,re,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,B)}else{const Ae=w.textures;for(let Le=0;Le<Ae.length;Le++){const re=Ae[Le],Ze=f.convert(re.format,re.colorSpace),We=f.convert(re.type),dt=I(re.internalFormat,Ze,We,re.colorSpace),He=Vt(w);oe&&qe(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,He,dt,w.width,w.height):qe(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,He,dt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,dt,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(B,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ae=r.get(w.depthTexture);Ae.__renderTarget=w,(!Ae.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Se(w.depthTexture,0);const Le=Ae.__webglTexture,re=Vt(w);if(w.depthTexture.format===jl)qe(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Le,0,re):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Le,0);else if(w.depthTexture.format===Zl)qe(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Le,0,re):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Le,0);else throw new Error("Unknown depthTexture format")}function tt(B){const w=r.get(B),oe=B.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==B.depthTexture){const Ae=B.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ae){const Le=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ae.removeEventListener("dispose",Le)};Ae.addEventListener("dispose",Le),w.__depthDisposeCallback=Le}w.__boundDepthTexture=Ae}if(B.depthTexture&&!w.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");const Ae=B.texture.mipmaps;Ae&&Ae.length>0?ke(w.__webglFramebuffer[0],B):ke(w.__webglFramebuffer,B)}else if(oe){w.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[Ae]),w.__webglDepthbuffer[Ae]===void 0)w.__webglDepthbuffer[Ae]=o.createRenderbuffer(),Ie(w.__webglDepthbuffer[Ae],B,!1);else{const Le=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[Ae];o.bindRenderbuffer(o.RENDERBUFFER,re),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,re)}}else{const Ae=B.texture.mipmaps;if(Ae&&Ae.length>0?i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Ie(w.__webglDepthbuffer,B,!1);else{const Le=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,re),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,re)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Jt(B,w,oe){const Ae=r.get(B);w!==void 0&&ye(Ae.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),oe!==void 0&&tt(B)}function _t(B){const w=B.texture,oe=r.get(B),Ae=r.get(w);B.addEventListener("dispose",k);const Le=B.textures,re=B.isWebGLCubeRenderTarget===!0,Ze=Le.length>1;if(Ze||(Ae.__webglTexture===void 0&&(Ae.__webglTexture=o.createTexture()),Ae.__version=w.version,p.memory.textures++),re){oe.__webglFramebuffer=[];for(let We=0;We<6;We++)if(w.mipmaps&&w.mipmaps.length>0){oe.__webglFramebuffer[We]=[];for(let dt=0;dt<w.mipmaps.length;dt++)oe.__webglFramebuffer[We][dt]=o.createFramebuffer()}else oe.__webglFramebuffer[We]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){oe.__webglFramebuffer=[];for(let We=0;We<w.mipmaps.length;We++)oe.__webglFramebuffer[We]=o.createFramebuffer()}else oe.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let We=0,dt=Le.length;We<dt;We++){const He=r.get(Le[We]);He.__webglTexture===void 0&&(He.__webglTexture=o.createTexture(),p.memory.textures++)}if(B.samples>0&&qe(B)===!1){oe.__webglMultisampledFramebuffer=o.createFramebuffer(),oe.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let We=0;We<Le.length;We++){const dt=Le[We];oe.__webglColorRenderbuffer[We]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,oe.__webglColorRenderbuffer[We]);const He=f.convert(dt.format,dt.colorSpace),Ne=f.convert(dt.type),Pe=I(dt.internalFormat,He,Ne,dt.colorSpace,B.isXRRenderTarget===!0),ot=Vt(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,ot,Pe,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,oe.__webglColorRenderbuffer[We])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(oe.__webglDepthRenderbuffer=o.createRenderbuffer(),Ie(oe.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(re){i.bindTexture(o.TEXTURE_CUBE_MAP,Ae.__webglTexture),me(o.TEXTURE_CUBE_MAP,w);for(let We=0;We<6;We++)if(w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)ye(oe.__webglFramebuffer[We][dt],B,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+We,dt);else ye(oe.__webglFramebuffer[We],B,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0);T(w)&&M(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let We=0,dt=Le.length;We<dt;We++){const He=Le[We],Ne=r.get(He);let Pe=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Pe=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Ne.__webglTexture),me(Pe,He),ye(oe.__webglFramebuffer,B,He,o.COLOR_ATTACHMENT0+We,Pe,0),T(He)&&M(Pe)}i.unbindTexture()}else{let We=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(We=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(We,Ae.__webglTexture),me(We,w),w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)ye(oe.__webglFramebuffer[dt],B,w,o.COLOR_ATTACHMENT0,We,dt);else ye(oe.__webglFramebuffer,B,w,o.COLOR_ATTACHMENT0,We,0);T(w)&&M(We),i.unbindTexture()}B.depthBuffer&&tt(B)}function At(B){const w=B.textures;for(let oe=0,Ae=w.length;oe<Ae;oe++){const Le=w[oe];if(T(Le)){const re=X(B),Ze=r.get(Le).__webglTexture;i.bindTexture(re,Ze),M(re),i.unbindTexture()}}}const W=[],gt=[];function Tt(B){if(B.samples>0){if(qe(B)===!1){const w=B.textures,oe=B.width,Ae=B.height;let Le=o.COLOR_BUFFER_BIT;const re=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=r.get(B),We=w.length>1;if(We)for(let He=0;He<w.length;He++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const dt=B.texture.mipmaps;dt&&dt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let He=0;He<w.length;He++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Le|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Le|=o.STENCIL_BUFFER_BIT)),We){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[He]);const Ne=r.get(w[He]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ne,0)}o.blitFramebuffer(0,0,oe,Ae,0,0,oe,Ae,Le,o.NEAREST),x===!0&&(W.length=0,gt.length=0,W.push(o.COLOR_ATTACHMENT0+He),B.depthBuffer&&B.resolveDepthBuffer===!1&&(W.push(re),gt.push(re),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,gt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,W))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),We)for(let He=0;He<w.length;He++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[He]);const Ne=r.get(w[He]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,Ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&x){const w=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Vt(B){return Math.min(l.maxSamples,B.samples)}function qe(B){const w=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Lt(B){const w=p.render.frame;S.get(B)!==w&&(S.set(B,w),B.update())}function st(B,w){const oe=B.colorSpace,Ae=B.format,Le=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||oe!==Po&&oe!==zr&&(an.getTransfer(oe)===pn?(Ae!==ra||Le!==va)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Cn("WebGLTextures: Unsupported texture color space:",oe)),w}function yt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(_.width=B.naturalWidth||B.width,_.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(_.width=B.displayWidth,_.height=B.displayHeight):(_.width=B.width,_.height=B.height),_}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.setTexture2D=Se,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=Jt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=qe}function G3(o,e){function i(r,l=zr){let f;const p=an.getTransfer(l);if(r===va)return o.UNSIGNED_BYTE;if(r===Jp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Nx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ox)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ux)return o.BYTE;if(r===Lx)return o.SHORT;if(r===ql)return o.UNSIGNED_SHORT;if(r===Qp)return o.INT;if(r===ys)return o.UNSIGNED_INT;if(r===Qa)return o.FLOAT;if(r===zo)return o.HALF_FLOAT;if(r===Px)return o.ALPHA;if(r===Fx)return o.RGB;if(r===ra)return o.RGBA;if(r===jl)return o.DEPTH_COMPONENT;if(r===Zl)return o.DEPTH_STENCIL;if(r===zx)return o.RED;if(r===em)return o.RED_INTEGER;if(r===tm)return o.RG;if(r===nm)return o.RG_INTEGER;if(r===im)return o.RGBA_INTEGER;if(r===Iu||r===Hu||r===Vu||r===Gu)if(p===pn)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Iu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Iu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xp||r===vp||r===yp||r===Sp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===xp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bp||r===Mp||r===Ep)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===bp||r===Mp)return p===pn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Ep)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tp||r===Ap||r===Rp||r===wp||r===Cp||r===Dp||r===Up||r===Lp||r===Np||r===Op||r===Pp||r===Fp||r===zp||r===Bp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Tp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ap)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Up)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Np)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Op)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ip||r===Hp||r===Vp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Ip)return p===pn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gp||r===kp||r===Xp||r===Wp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Gp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===kp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const k3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X3=`
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

}`;class W3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Qx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new er({vertexShader:k3,fragmentShader:X3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sa(new $u(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q3 extends Es{constructor(e,i){super();const r=this;let l=null,f=1,p=null,m="local-floor",x=1,_=null,S=null,b=null,E=null,A=null,U=null;const N=typeof XRWebGLBinding<"u",T=new W3,M={},X=i.getContextAttributes();let I=null,Y=null;const ee=[],V=[],k=new Ut;let he=null;const P=new Wi;P.viewport=new Dn;const O=new Wi;O.viewport=new Dn;const J=[P,O],se=new lb;let ue=null,Me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let Q=ee[de];return Q===void 0&&(Q=new qd,ee[de]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(de){let Q=ee[de];return Q===void 0&&(Q=new qd,ee[de]=Q),Q.getGripSpace()},this.getHand=function(de){let Q=ee[de];return Q===void 0&&(Q=new qd,ee[de]=Q),Q.getHandSpace()};function Se(de){const Q=V.indexOf(de.inputSource);if(Q===-1)return;const ye=ee[Q];ye!==void 0&&(ye.update(de.inputSource,de.frame,_||p),ye.dispatchEvent({type:de.type,data:de.inputSource}))}function z(){l.removeEventListener("select",Se),l.removeEventListener("selectstart",Se),l.removeEventListener("selectend",Se),l.removeEventListener("squeeze",Se),l.removeEventListener("squeezestart",Se),l.removeEventListener("squeezeend",Se),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",$);for(let de=0;de<ee.length;de++){const Q=V[de];Q!==null&&(V[de]=null,ee[de].disconnect(Q))}ue=null,Me=null,T.reset();for(const de in M)delete M[de];e.setRenderTarget(I),A=null,E=null,b=null,l=null,Y=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio(he),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){f=de,r.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){m=de,r.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||p},this.setReferenceSpace=function(de){_=de},this.getBaseLayer=function(){return E!==null?E:A},this.getBinding=function(){return b===null&&N&&(b=new XRWebGLBinding(l,i)),b},this.getFrame=function(){return U},this.getSession=function(){return l},this.setSession=async function(de){if(l=de,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",Se),l.addEventListener("selectstart",Se),l.addEventListener("selectend",Se),l.addEventListener("squeeze",Se),l.addEventListener("squeezestart",Se),l.addEventListener("squeezeend",Se),l.addEventListener("end",z),l.addEventListener("inputsourceschange",$),X.xrCompatible!==!0&&await i.makeXRCompatible(),he=e.getPixelRatio(),e.getSize(k),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ie=null,ke=null;X.depth&&(ke=X.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=X.stencil?Zl:jl,Ie=X.stencil?Yl:ys);const tt={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:f};b=this.getBinding(),E=b.createProjectionLayer(tt),l.updateRenderState({layers:[E]}),e.setPixelRatio(1),e.setSize(E.textureWidth,E.textureHeight,!1),Y=new bs(E.textureWidth,E.textureHeight,{format:ra,type:va,depthTexture:new Kx(E.textureWidth,E.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:X.stencil,colorSpace:e.outputColorSpace,samples:X.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const ye={antialias:X.antialias,alpha:!0,depth:X.depth,stencil:X.stencil,framebufferScaleFactor:f};A=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),Y=new bs(A.framebufferWidth,A.framebufferHeight,{format:ra,type:va,colorSpace:e.outputColorSpace,stencilBuffer:X.stencil,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1})}Y.isXRRenderTarget=!0,this.setFoveation(x),_=null,p=await l.requestReferenceSpace(m),$e.setContext(l),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function $(de){for(let Q=0;Q<de.removed.length;Q++){const ye=de.removed[Q],Ie=V.indexOf(ye);Ie>=0&&(V[Ie]=null,ee[Ie].disconnect(ye))}for(let Q=0;Q<de.added.length;Q++){const ye=de.added[Q];let Ie=V.indexOf(ye);if(Ie===-1){for(let tt=0;tt<ee.length;tt++)if(tt>=V.length){V.push(ye),Ie=tt;break}else if(V[tt]===null){V[tt]=ye,Ie=tt;break}if(Ie===-1)break}const ke=ee[Ie];ke&&ke.connect(ye)}}const ie=new _e,Te=new _e;function Ce(de,Q,ye){ie.setFromMatrixPosition(Q.matrixWorld),Te.setFromMatrixPosition(ye.matrixWorld);const Ie=ie.distanceTo(Te),ke=Q.projectionMatrix.elements,tt=ye.projectionMatrix.elements,Jt=ke[14]/(ke[10]-1),_t=ke[14]/(ke[10]+1),At=(ke[9]+1)/ke[5],W=(ke[9]-1)/ke[5],gt=(ke[8]-1)/ke[0],Tt=(tt[8]+1)/tt[0],Vt=Jt*gt,qe=Jt*Tt,Lt=Ie/(-gt+Tt),st=Lt*-gt;if(Q.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(st),de.translateZ(Lt),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),ke[10]===-1)de.projectionMatrix.copy(Q.projectionMatrix),de.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const yt=Jt+Lt,B=_t+Lt,w=Vt-st,oe=qe+(Ie-st),Ae=At*_t/B*yt,Le=W*_t/B*yt;de.projectionMatrix.makePerspective(w,oe,Ae,Le,yt,B),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function H(de,Q){Q===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(Q.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(l===null)return;let Q=de.near,ye=de.far;T.texture!==null&&(T.depthNear>0&&(Q=T.depthNear),T.depthFar>0&&(ye=T.depthFar)),se.near=O.near=P.near=Q,se.far=O.far=P.far=ye,(ue!==se.near||Me!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),ue=se.near,Me=se.far),se.layers.mask=de.layers.mask|6,P.layers.mask=se.layers.mask&3,O.layers.mask=se.layers.mask&5;const Ie=de.parent,ke=se.cameras;H(se,Ie);for(let tt=0;tt<ke.length;tt++)H(ke[tt],Ie);ke.length===2?Ce(se,P,O):se.projectionMatrix.copy(P.projectionMatrix),me(de,se,Ie)};function me(de,Q,ye){ye===null?de.matrix.copy(Q.matrixWorld):(de.matrix.copy(ye.matrixWorld),de.matrix.invert(),de.matrix.multiply(Q.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(Q.projectionMatrix),de.projectionMatrixInverse.copy(Q.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=qp*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(E===null&&A===null))return x},this.setFoveation=function(de){x=de,E!==null&&(E.fixedFoveation=de),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=de)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(se)},this.getCameraTexture=function(de){return M[de]};let De=null;function Fe(de,Q){if(S=Q.getViewerPose(_||p),U=Q,S!==null){const ye=S.views;A!==null&&(e.setRenderTargetFramebuffer(Y,A.framebuffer),e.setRenderTarget(Y));let Ie=!1;ye.length!==se.cameras.length&&(se.cameras.length=0,Ie=!0);for(let _t=0;_t<ye.length;_t++){const At=ye[_t];let W=null;if(A!==null)W=A.getViewport(At);else{const Tt=b.getViewSubImage(E,At);W=Tt.viewport,_t===0&&(e.setRenderTargetTextures(Y,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(Y))}let gt=J[_t];gt===void 0&&(gt=new Wi,gt.layers.enable(_t),gt.viewport=new Dn,J[_t]=gt),gt.matrix.fromArray(At.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(At.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(W.x,W.y,W.width,W.height),_t===0&&(se.matrix.copy(gt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Ie===!0&&se.cameras.push(gt)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){b=r.getBinding();const _t=b.getDepthInformation(ye[0]);_t&&_t.isValid&&_t.texture&&T.init(_t,l.renderState)}if(ke&&ke.includes("camera-access")&&N){e.state.unbindTexture(),b=r.getBinding();for(let _t=0;_t<ye.length;_t++){const At=ye[_t].camera;if(At){let W=M[At];W||(W=new Qx,M[At]=W);const gt=b.getCameraImage(At);W.sourceTexture=gt}}}}for(let ye=0;ye<ee.length;ye++){const Ie=V[ye],ke=ee[ye];Ie!==null&&ke!==void 0&&ke.update(Ie,Q,_||p)}De&&De(de,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),U=null}const $e=new ev;$e.setAnimationLoop(Fe),this.setAnimationLoop=function(de){De=de},this.dispose=function(){}}}const _s=new ya,Y3=new Mn;function j3(o,e){function i(T,M){T.matrixAutoUpdate===!0&&T.updateMatrix(),M.value.copy(T.matrix)}function r(T,M){M.color.getRGB(T.fogColor.value,qx(o)),M.isFog?(T.fogNear.value=M.near,T.fogFar.value=M.far):M.isFogExp2&&(T.fogDensity.value=M.density)}function l(T,M,X,I,Y){M.isMeshBasicMaterial||M.isMeshLambertMaterial?f(T,M):M.isMeshToonMaterial?(f(T,M),b(T,M)):M.isMeshPhongMaterial?(f(T,M),S(T,M)):M.isMeshStandardMaterial?(f(T,M),E(T,M),M.isMeshPhysicalMaterial&&A(T,M,Y)):M.isMeshMatcapMaterial?(f(T,M),U(T,M)):M.isMeshDepthMaterial?f(T,M):M.isMeshDistanceMaterial?(f(T,M),N(T,M)):M.isMeshNormalMaterial?f(T,M):M.isLineBasicMaterial?(p(T,M),M.isLineDashedMaterial&&m(T,M)):M.isPointsMaterial?x(T,M,X,I):M.isSpriteMaterial?_(T,M):M.isShadowMaterial?(T.color.value.copy(M.color),T.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function f(T,M){T.opacity.value=M.opacity,M.color&&T.diffuse.value.copy(M.color),M.emissive&&T.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.bumpMap&&(T.bumpMap.value=M.bumpMap,i(M.bumpMap,T.bumpMapTransform),T.bumpScale.value=M.bumpScale,M.side===Mi&&(T.bumpScale.value*=-1)),M.normalMap&&(T.normalMap.value=M.normalMap,i(M.normalMap,T.normalMapTransform),T.normalScale.value.copy(M.normalScale),M.side===Mi&&T.normalScale.value.negate()),M.displacementMap&&(T.displacementMap.value=M.displacementMap,i(M.displacementMap,T.displacementMapTransform),T.displacementScale.value=M.displacementScale,T.displacementBias.value=M.displacementBias),M.emissiveMap&&(T.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,T.emissiveMapTransform)),M.specularMap&&(T.specularMap.value=M.specularMap,i(M.specularMap,T.specularMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest);const X=e.get(M),I=X.envMap,Y=X.envMapRotation;I&&(T.envMap.value=I,_s.copy(Y),_s.x*=-1,_s.y*=-1,_s.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),T.envMapRotation.value.setFromMatrix4(Y3.makeRotationFromEuler(_s)),T.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=M.reflectivity,T.ior.value=M.ior,T.refractionRatio.value=M.refractionRatio),M.lightMap&&(T.lightMap.value=M.lightMap,T.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,T.lightMapTransform)),M.aoMap&&(T.aoMap.value=M.aoMap,T.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,T.aoMapTransform))}function p(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform))}function m(T,M){T.dashSize.value=M.dashSize,T.totalSize.value=M.dashSize+M.gapSize,T.scale.value=M.scale}function x(T,M,X,I){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.size.value=M.size*X,T.scale.value=I*.5,M.map&&(T.map.value=M.map,i(M.map,T.uvTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function _(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.rotation.value=M.rotation,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function S(T,M){T.specular.value.copy(M.specular),T.shininess.value=Math.max(M.shininess,1e-4)}function b(T,M){M.gradientMap&&(T.gradientMap.value=M.gradientMap)}function E(T,M){T.metalness.value=M.metalness,M.metalnessMap&&(T.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,T.metalnessMapTransform)),T.roughness.value=M.roughness,M.roughnessMap&&(T.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,T.roughnessMapTransform)),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)}function A(T,M,X){T.ior.value=M.ior,M.sheen>0&&(T.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),T.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(T.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,T.sheenColorMapTransform)),M.sheenRoughnessMap&&(T.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,T.sheenRoughnessMapTransform))),M.clearcoat>0&&(T.clearcoat.value=M.clearcoat,T.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(T.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,T.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(T.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Mi&&T.clearcoatNormalScale.value.negate())),M.dispersion>0&&(T.dispersion.value=M.dispersion),M.iridescence>0&&(T.iridescence.value=M.iridescence,T.iridescenceIOR.value=M.iridescenceIOR,T.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(T.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,T.iridescenceMapTransform)),M.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),M.transmission>0&&(T.transmission.value=M.transmission,T.transmissionSamplerMap.value=X.texture,T.transmissionSamplerSize.value.set(X.width,X.height),M.transmissionMap&&(T.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,T.transmissionMapTransform)),T.thickness.value=M.thickness,M.thicknessMap&&(T.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=M.attenuationDistance,T.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(T.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(T.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=M.specularIntensity,T.specularColor.value.copy(M.specularColor),M.specularColorMap&&(T.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,T.specularColorMapTransform)),M.specularIntensityMap&&(T.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,T.specularIntensityMapTransform))}function U(T,M){M.matcap&&(T.matcap.value=M.matcap)}function N(T,M){const X=e.get(M).light;T.referencePosition.value.setFromMatrixPosition(X.matrixWorld),T.nearDistance.value=X.shadow.camera.near,T.farDistance.value=X.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Z3(o,e,i,r){let l={},f={},p=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function x(X,I){const Y=I.program;r.uniformBlockBinding(X,Y)}function _(X,I){let Y=l[X.id];Y===void 0&&(U(X),Y=S(X),l[X.id]=Y,X.addEventListener("dispose",T));const ee=I.program;r.updateUBOMapping(X,ee);const V=e.render.frame;f[X.id]!==V&&(E(X),f[X.id]=V)}function S(X){const I=b();X.__bindingPointIndex=I;const Y=o.createBuffer(),ee=X.__size,V=X.usage;return o.bindBuffer(o.UNIFORM_BUFFER,Y),o.bufferData(o.UNIFORM_BUFFER,ee,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,Y),Y}function b(){for(let X=0;X<m;X++)if(p.indexOf(X)===-1)return p.push(X),X;return Cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(X){const I=l[X.id],Y=X.uniforms,ee=X.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let V=0,k=Y.length;V<k;V++){const he=Array.isArray(Y[V])?Y[V]:[Y[V]];for(let P=0,O=he.length;P<O;P++){const J=he[P];if(A(J,V,P,ee)===!0){const se=J.__offset,ue=Array.isArray(J.value)?J.value:[J.value];let Me=0;for(let Se=0;Se<ue.length;Se++){const z=ue[Se],$=N(z);typeof z=="number"||typeof z=="boolean"?(J.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,se+Me,J.__data)):z.isMatrix3?(J.__data[0]=z.elements[0],J.__data[1]=z.elements[1],J.__data[2]=z.elements[2],J.__data[3]=0,J.__data[4]=z.elements[3],J.__data[5]=z.elements[4],J.__data[6]=z.elements[5],J.__data[7]=0,J.__data[8]=z.elements[6],J.__data[9]=z.elements[7],J.__data[10]=z.elements[8],J.__data[11]=0):(z.toArray(J.__data,Me),Me+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,J.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function A(X,I,Y,ee){const V=X.value,k=I+"_"+Y;if(ee[k]===void 0)return typeof V=="number"||typeof V=="boolean"?ee[k]=V:ee[k]=V.clone(),!0;{const he=ee[k];if(typeof V=="number"||typeof V=="boolean"){if(he!==V)return ee[k]=V,!0}else if(he.equals(V)===!1)return he.copy(V),!0}return!1}function U(X){const I=X.uniforms;let Y=0;const ee=16;for(let k=0,he=I.length;k<he;k++){const P=Array.isArray(I[k])?I[k]:[I[k]];for(let O=0,J=P.length;O<J;O++){const se=P[O],ue=Array.isArray(se.value)?se.value:[se.value];for(let Me=0,Se=ue.length;Me<Se;Me++){const z=ue[Me],$=N(z),ie=Y%ee,Te=ie%$.boundary,Ce=ie+Te;Y+=Te,Ce!==0&&ee-Ce<$.storage&&(Y+=ee-Ce),se.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=Y,Y+=$.storage}}}const V=Y%ee;return V>0&&(Y+=ee-V),X.__size=Y,X.__cache={},this}function N(X){const I={boundary:0,storage:0};return typeof X=="number"||typeof X=="boolean"?(I.boundary=4,I.storage=4):X.isVector2?(I.boundary=8,I.storage=8):X.isVector3||X.isColor?(I.boundary=16,I.storage=12):X.isVector4?(I.boundary=16,I.storage=16):X.isMatrix3?(I.boundary=48,I.storage=48):X.isMatrix4?(I.boundary=64,I.storage=64):X.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):wt("WebGLRenderer: Unsupported uniform value type.",X),I}function T(X){const I=X.target;I.removeEventListener("dispose",T);const Y=p.indexOf(I.__bindingPointIndex);p.splice(Y,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete f[I.id]}function M(){for(const X in l)o.deleteBuffer(l[X]);p=[],l={},f={}}return{bind:x,update:_,dispose:M}}const K3=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ja=null;function Q3(){return ja===null&&(ja=new QS(K3,32,32,tm,zo),ja.minFilter=qi,ja.magFilter=qi,ja.wrapS=Ka,ja.wrapT=Ka,ja.generateMipmaps=!1,ja.needsUpdate=!0),ja}class J3{constructor(e={}){const{canvas:i=bS(),context:r=null,depth:l=!0,stencil:f=!1,alpha:p=!1,antialias:m=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:_=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:E=!1}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=p;const U=new Set([im,nm,em]),N=new Set([va,ys,ql,Yl,Jp,$p]),T=new Uint32Array(4),M=new Int32Array(4);let X=null,I=null;const Y=[],ee=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let k=!1;this._outputColorSpace=Xi;let he=0,P=0,O=null,J=-1,se=null;const ue=new Dn,Me=new Dn;let Se=null;const z=new Kt(0);let $=0,ie=i.width,Te=i.height,Ce=1,H=null,me=null;const De=new Dn(0,0,ie,Te),Fe=new Dn(0,0,ie,Te);let $e=!1;const de=new sm;let Q=!1,ye=!1;const Ie=new Mn,ke=new _e,tt=new Dn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function At(){return O===null?Ce:1}let W=r;function gt(L,te){return i.getContext(L,te)}try{const L={alpha:!0,depth:l,stencil:f,antialias:m,premultipliedAlpha:x,preserveDrawingBuffer:_,powerPreference:S,failIfMajorPerformanceCaveat:b};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kp}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Re,!1),i.addEventListener("webglcontextcreationerror",nt,!1),W===null){const te="webgl2";if(W=gt(te,L),W===null)throw gt(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw L("WebGLRenderer: "+L.message),L}let Tt,Vt,qe,Lt,st,yt,B,w,oe,Ae,Le,re,Ze,We,dt,He,Ne,Pe,ot,lt,Ye,vt,j,Xe;function Ve(){Tt=new s1(W),Tt.init(),vt=new G3(W,Tt),Vt=new QE(W,Tt,e,vt),qe=new H3(W,Tt),Vt.reversedDepthBuffer&&E&&qe.buffers.depth.setReversed(!0),Lt=new c1(W),st=new R3,yt=new V3(W,Tt,qe,st,Vt,vt,Lt),B=new $E(V),w=new r1(V),oe=new db(W),j=new ZE(W,oe),Ae=new o1(W,oe,Lt,j),Le=new f1(W,Ae,oe,Lt),ot=new u1(W,Vt,yt),He=new JE(st),re=new A3(V,B,w,Tt,Vt,j,He),Ze=new j3(V,st),We=new C3,dt=new P3(Tt),Pe=new jE(V,B,w,qe,Le,A,x),Ne=new B3(V,Le,Vt),Xe=new Z3(W,Lt,Vt,qe),lt=new KE(W,Tt,Lt),Ye=new l1(W,Tt,Lt),Lt.programs=re.programs,V.capabilities=Vt,V.extensions=Tt,V.properties=st,V.renderLists=We,V.shadowMap=Ne,V.state=qe,V.info=Lt}Ve();const Ge=new q3(V,W);this.xr=Ge,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=Tt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Tt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(L){L!==void 0&&(Ce=L,this.setSize(ie,Te,!1))},this.getSize=function(L){return L.set(ie,Te)},this.setSize=function(L,te,ge=!0){if(Ge.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=L,Te=te,i.width=Math.floor(L*Ce),i.height=Math.floor(te*Ce),ge===!0&&(i.style.width=L+"px",i.style.height=te+"px"),this.setViewport(0,0,L,te)},this.getDrawingBufferSize=function(L){return L.set(ie*Ce,Te*Ce).floor()},this.setDrawingBufferSize=function(L,te,ge){ie=L,Te=te,Ce=ge,i.width=Math.floor(L*ge),i.height=Math.floor(te*ge),this.setViewport(0,0,L,te)},this.getCurrentViewport=function(L){return L.copy(ue)},this.getViewport=function(L){return L.copy(De)},this.setViewport=function(L,te,ge,le){L.isVector4?De.set(L.x,L.y,L.z,L.w):De.set(L,te,ge,le),qe.viewport(ue.copy(De).multiplyScalar(Ce).round())},this.getScissor=function(L){return L.copy(Fe)},this.setScissor=function(L,te,ge,le){L.isVector4?Fe.set(L.x,L.y,L.z,L.w):Fe.set(L,te,ge,le),qe.scissor(Me.copy(Fe).multiplyScalar(Ce).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(L){qe.setScissorTest($e=L)},this.setOpaqueSort=function(L){H=L},this.setTransparentSort=function(L){me=L},this.getClearColor=function(L){return L.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(L=!0,te=!0,ge=!0){let le=0;if(L){let ae=!1;if(O!==null){const Be=O.texture.format;ae=U.has(Be)}if(ae){const Be=O.texture.type,ze=N.has(Be),Ke=Pe.getClearColor(),Qe=Pe.getClearAlpha(),pt=Ke.r,xt=Ke.g,at=Ke.b;ze?(T[0]=pt,T[1]=xt,T[2]=at,T[3]=Qe,W.clearBufferuiv(W.COLOR,0,T)):(M[0]=pt,M[1]=xt,M[2]=at,M[3]=Qe,W.clearBufferiv(W.COLOR,0,M))}else le|=W.COLOR_BUFFER_BIT}te&&(le|=W.DEPTH_BUFFER_BIT),ge&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Re,!1),i.removeEventListener("webglcontextcreationerror",nt,!1),Pe.dispose(),We.dispose(),dt.dispose(),st.dispose(),B.dispose(),w.dispose(),Le.dispose(),j.dispose(),Xe.dispose(),re.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Vr),Ge.removeEventListener("sessionend",Gr),ci.stop()};function Ue(L){L.preventDefault(),Rg("WebGLRenderer: Context Lost."),k=!0}function Re(){Rg("WebGLRenderer: Context Restored."),k=!1;const L=Lt.autoReset,te=Ne.enabled,ge=Ne.autoUpdate,le=Ne.needsUpdate,ae=Ne.type;Ve(),Lt.autoReset=L,Ne.enabled=te,Ne.autoUpdate=ge,Ne.needsUpdate=le,Ne.type=ae}function nt(L){Cn("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Mt(L){const te=L.target;te.removeEventListener("dispose",Mt),it(te)}function it(L){$t(L),st.remove(L)}function $t(L){const te=st.get(L).programs;te!==void 0&&(te.forEach(function(ge){re.releaseProgram(ge)}),L.isShaderMaterial&&re.releaseShaderCache(L))}this.renderBufferDirect=function(L,te,ge,le,ae,Be){te===null&&(te=Jt);const ze=ae.isMesh&&ae.matrixWorld.determinant()<0,Ke=Ho(L,te,ge,le,ae);qe.setMaterial(le,ze);let Qe=ge.index,pt=1;if(le.wireframe===!0){if(Qe=Ae.getWireframeAttribute(ge),Qe===void 0)return;pt=2}const xt=ge.drawRange,at=ge.attributes.position;let Ct=xt.start*pt,Yt=(xt.start+xt.count)*pt;Be!==null&&(Ct=Math.max(Ct,Be.start*pt),Yt=Math.min(Yt,(Be.start+Be.count)*pt)),Qe!==null?(Ct=Math.max(Ct,0),Yt=Math.min(Yt,Qe.count)):at!=null&&(Ct=Math.max(Ct,0),Yt=Math.min(Yt,at.count));const en=Yt-Ct;if(en<0||en===1/0)return;j.setup(ae,le,Ke,ge,Qe);let kt,Bt=lt;if(Qe!==null&&(kt=oe.get(Qe),Bt=Ye,Bt.setIndex(kt)),ae.isMesh)le.wireframe===!0?(qe.setLineWidth(le.wireframeLinewidth*At()),Bt.setMode(W.LINES)):Bt.setMode(W.TRIANGLES);else if(ae.isLine){let ut=le.linewidth;ut===void 0&&(ut=1),qe.setLineWidth(ut*At()),ae.isLineSegments?Bt.setMode(W.LINES):ae.isLineLoop?Bt.setMode(W.LINE_LOOP):Bt.setMode(W.LINE_STRIP)}else ae.isPoints?Bt.setMode(W.POINTS):ae.isSprite&&Bt.setMode(W.TRIANGLES);if(ae.isBatchedMesh)if(ae._multiDrawInstances!==null)Kl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount,ae._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const ut=ae._multiDrawStarts,sn=ae._multiDrawCounts,Ht=ae._multiDrawCount,cn=Qe?oe.get(Qe).bytesPerElement:1,Oi=st.get(le).currentProgram.getUniforms();for(let un=0;un<Ht;un++)Oi.setValue(W,"_gl_DrawID",un),Bt.render(ut[un]/cn,sn[un])}else if(ae.isInstancedMesh)Bt.renderInstances(Ct,en,ae.count);else if(ge.isInstancedBufferGeometry){const ut=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,sn=Math.min(ge.instanceCount,ut);Bt.renderInstances(Ct,en,sn)}else Bt.render(Ct,en)};function Yn(L,te,ge){L.transparent===!0&&L.side===_a&&L.forceSinglePass===!1?(L.side=Mi,L.needsUpdate=!0,yn(L,te,ge),L.side=Hr,L.needsUpdate=!0,yn(L,te,ge),L.side=_a):yn(L,te,ge)}this.compile=function(L,te,ge=null){ge===null&&(ge=L),I=dt.get(ge),I.init(te),ee.push(I),ge.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),L!==ge&&L.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),I.setupLights();const le=new Set;return L.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Be=ae.material;if(Be)if(Array.isArray(Be))for(let ze=0;ze<Be.length;ze++){const Ke=Be[ze];Yn(Ke,ge,ae),le.add(Ke)}else Yn(Be,ge,ae),le.add(Be)}),I=ee.pop(),le},this.compileAsync=function(L,te,ge=null){const le=this.compile(L,te,ge);return new Promise(ae=>{function Be(){if(le.forEach(function(ze){st.get(ze).currentProgram.isReady()&&le.delete(ze)}),le.size===0){ae(L);return}setTimeout(Be,10)}Tt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let li=null;function Ts(L){li&&li(L)}function Vr(){ci.stop()}function Gr(){ci.start()}const ci=new ev;ci.setAnimationLoop(Ts),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(L){li=L,Ge.setAnimationLoop(L),L===null?ci.stop():ci.start()},Ge.addEventListener("sessionstart",Vr),Ge.addEventListener("sessionend",Gr),this.render=function(L,te){if(te!==void 0&&te.isCamera!==!0){Cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(te),te=Ge.getCamera()),L.isScene===!0&&L.onBeforeRender(V,L,te,O),I=dt.get(L,ee.length),I.init(te),ee.push(I),Ie.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),de.setFromProjectionMatrix(Ie,ga,te.reversedDepth),ye=this.localClippingEnabled,Q=He.init(this.clippingPlanes,ye),X=We.get(L,Y.length),X.init(),Y.push(X),Ge.enabled===!0&&Ge.isPresenting===!0){const Be=V.xr.getDepthSensingMesh();Be!==null&&R(Be,te,-1/0,V.sortObjects)}R(L,te,0,V.sortObjects),X.finish(),V.sortObjects===!0&&X.sort(H,me),_t=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,_t&&Pe.addToRenderList(X,L),this.info.render.frame++,Q===!0&&He.beginShadows();const ge=I.state.shadowsArray;Ne.render(ge,L,te),Q===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=X.opaque,ae=X.transmissive;if(I.setupLights(),te.isArrayCamera){const Be=te.cameras;if(ae.length>0)for(let ze=0,Ke=Be.length;ze<Ke;ze++){const Qe=Be[ze];Gt(le,ae,L,Qe)}_t&&Pe.render(L);for(let ze=0,Ke=Be.length;ze<Ke;ze++){const Qe=Be[ze];Sa(X,L,Qe,Qe.viewport)}}else ae.length>0&&Gt(le,ae,L,te),_t&&Pe.render(L),Sa(X,L,te);O!==null&&P===0&&(yt.updateMultisampleRenderTarget(O),yt.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(V,L,te),j.resetDefaultState(),J=-1,se=null,ee.pop(),ee.length>0?(I=ee[ee.length-1],Q===!0&&He.setGlobalState(V.clippingPlanes,I.state.camera)):I=null,Y.pop(),Y.length>0?X=Y[Y.length-1]:X=null};function R(L,te,ge,le){if(L.visible===!1)return;if(L.layers.test(te.layers)){if(L.isGroup)ge=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(te);else if(L.isLight)I.pushLight(L),L.castShadow&&I.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||de.intersectsSprite(L)){le&&tt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ie);const ze=Le.update(L),Ke=L.material;Ke.visible&&X.push(L,ze,Ke,ge,tt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||de.intersectsObject(L))){const ze=Le.update(L),Ke=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),tt.copy(L.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),tt.copy(ze.boundingSphere.center)),tt.applyMatrix4(L.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ke)){const Qe=ze.groups;for(let pt=0,xt=Qe.length;pt<xt;pt++){const at=Qe[pt],Ct=Ke[at.materialIndex];Ct&&Ct.visible&&X.push(L,ze,Ct,ge,tt.z,at)}}else Ke.visible&&X.push(L,ze,Ke,ge,tt.z,null)}}const Be=L.children;for(let ze=0,Ke=Be.length;ze<Ke;ze++)R(Be[ze],te,ge,le)}function Sa(L,te,ge,le){const{opaque:ae,transmissive:Be,transparent:ze}=L;I.setupLightsView(ge),Q===!0&&He.setGlobalState(V.clippingPlanes,ge),le&&qe.viewport(ue.copy(le)),ae.length>0&&ui(ae,te,ge),Be.length>0&&ui(Be,te,ge),ze.length>0&&ui(ze,te,ge),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Gt(L,te,ge,le){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;I.state.transmissionRenderTarget[le.id]===void 0&&(I.state.transmissionRenderTarget[le.id]=new bs(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?zo:va,minFilter:vs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:an.workingColorSpace}));const Be=I.state.transmissionRenderTarget[le.id],ze=le.viewport||ue;Be.setSize(ze.z*V.transmissionResolutionScale,ze.w*V.transmissionResolutionScale);const Ke=V.getRenderTarget(),Qe=V.getActiveCubeFace(),pt=V.getActiveMipmapLevel();V.setRenderTarget(Be),V.getClearColor(z),$=V.getClearAlpha(),$<1&&V.setClearColor(16777215,.5),V.clear(),_t&&Pe.render(ge);const xt=V.toneMapping;V.toneMapping=Ir;const at=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),I.setupLightsView(le),Q===!0&&He.setGlobalState(V.clippingPlanes,le),ui(L,ge,le),yt.updateMultisampleRenderTarget(Be),yt.updateRenderTargetMipmap(Be),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Yt=0,en=te.length;Yt<en;Yt++){const kt=te[Yt],{object:Bt,geometry:ut,material:sn,group:Ht}=kt;if(sn.side===_a&&Bt.layers.test(le.layers)){const cn=sn.side;sn.side=Mi,sn.needsUpdate=!0,En(Bt,ge,le,ut,sn,Ht),sn.side=cn,sn.needsUpdate=!0,Ct=!0}}Ct===!0&&(yt.updateMultisampleRenderTarget(Be),yt.updateRenderTargetMipmap(Be))}V.setRenderTarget(Ke,Qe,pt),V.setClearColor(z,$),at!==void 0&&(le.viewport=at),V.toneMapping=xt}function ui(L,te,ge){const le=te.isScene===!0?te.overrideMaterial:null;for(let ae=0,Be=L.length;ae<Be;ae++){const ze=L[ae],{object:Ke,geometry:Qe,group:pt}=ze;let xt=ze.material;xt.allowOverride===!0&&le!==null&&(xt=le),Ke.layers.test(ge.layers)&&En(Ke,te,ge,Qe,xt,pt)}}function En(L,te,ge,le,ae,Be){L.onBeforeRender(V,te,ge,le,ae,Be),L.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ae.onBeforeRender(V,te,ge,le,L,Be),ae.transparent===!0&&ae.side===_a&&ae.forceSinglePass===!1?(ae.side=Mi,ae.needsUpdate=!0,V.renderBufferDirect(ge,te,le,ae,L,Be),ae.side=Hr,ae.needsUpdate=!0,V.renderBufferDirect(ge,te,le,ae,L,Be),ae.side=_a):V.renderBufferDirect(ge,te,le,ae,L,Be),L.onAfterRender(V,te,ge,le,ae,Be)}function yn(L,te,ge){te.isScene!==!0&&(te=Jt);const le=st.get(L),ae=I.state.lights,Be=I.state.shadowsArray,ze=ae.state.version,Ke=re.getParameters(L,ae.state,Be,te,ge),Qe=re.getProgramCacheKey(Ke);let pt=le.programs;le.environment=L.isMeshStandardMaterial?te.environment:null,le.fog=te.fog,le.envMap=(L.isMeshStandardMaterial?w:B).get(L.envMap||le.environment),le.envMapRotation=le.environment!==null&&L.envMap===null?te.environmentRotation:L.envMapRotation,pt===void 0&&(L.addEventListener("dispose",Mt),pt=new Map,le.programs=pt);let xt=pt.get(Qe);if(xt!==void 0){if(le.currentProgram===xt&&le.lightsStateVersion===ze)return tr(L,Ke),xt}else Ke.uniforms=re.getUniforms(L),L.onBeforeCompile(Ke,V),xt=re.acquireProgram(Ke,Qe),pt.set(Qe,xt),le.uniforms=Ke.uniforms;const at=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(at.clippingPlanes=He.uniform),tr(L,Ke),le.needsLights=As(L),le.lightsStateVersion=ze,le.needsLights&&(at.ambientLightColor.value=ae.state.ambient,at.lightProbe.value=ae.state.probe,at.directionalLights.value=ae.state.directional,at.directionalLightShadows.value=ae.state.directionalShadow,at.spotLights.value=ae.state.spot,at.spotLightShadows.value=ae.state.spotShadow,at.rectAreaLights.value=ae.state.rectArea,at.ltc_1.value=ae.state.rectAreaLTC1,at.ltc_2.value=ae.state.rectAreaLTC2,at.pointLights.value=ae.state.point,at.pointLightShadows.value=ae.state.pointShadow,at.hemisphereLights.value=ae.state.hemi,at.directionalShadowMap.value=ae.state.directionalShadowMap,at.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,at.spotShadowMap.value=ae.state.spotShadowMap,at.spotLightMatrix.value=ae.state.spotLightMatrix,at.spotLightMap.value=ae.state.spotLightMap,at.pointShadowMap.value=ae.state.pointShadowMap,at.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.currentProgram=xt,le.uniformsList=null,xt}function ni(L){if(L.uniformsList===null){const te=L.currentProgram.getUniforms();L.uniformsList=Xu.seqWithValue(te.seq,L.uniforms)}return L.uniformsList}function tr(L,te){const ge=st.get(L);ge.outputColorSpace=te.outputColorSpace,ge.batching=te.batching,ge.batchingColor=te.batchingColor,ge.instancing=te.instancing,ge.instancingColor=te.instancingColor,ge.instancingMorph=te.instancingMorph,ge.skinning=te.skinning,ge.morphTargets=te.morphTargets,ge.morphNormals=te.morphNormals,ge.morphColors=te.morphColors,ge.morphTargetsCount=te.morphTargetsCount,ge.numClippingPlanes=te.numClippingPlanes,ge.numIntersection=te.numClipIntersection,ge.vertexAlphas=te.vertexAlphas,ge.vertexTangents=te.vertexTangents,ge.toneMapping=te.toneMapping}function Ho(L,te,ge,le,ae){te.isScene!==!0&&(te=Jt),yt.resetTextureUnits();const Be=te.fog,ze=le.isMeshStandardMaterial?te.environment:null,Ke=O===null?V.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Po,Qe=(le.isMeshStandardMaterial?w:B).get(le.envMap||ze),pt=le.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,xt=!!ge.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),at=!!ge.morphAttributes.position,Ct=!!ge.morphAttributes.normal,Yt=!!ge.morphAttributes.color;let en=Ir;le.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(en=V.toneMapping);const kt=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,Bt=kt!==void 0?kt.length:0,ut=st.get(le),sn=I.state.lights;if(Q===!0&&(ye===!0||L!==se)){const Pn=L===se&&le.id===J;He.setState(le,L,Pn)}let Ht=!1;le.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==sn.state.version||ut.outputColorSpace!==Ke||ae.isBatchedMesh&&ut.batching===!1||!ae.isBatchedMesh&&ut.batching===!0||ae.isBatchedMesh&&ut.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&ut.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&ut.instancing===!1||!ae.isInstancedMesh&&ut.instancing===!0||ae.isSkinnedMesh&&ut.skinning===!1||!ae.isSkinnedMesh&&ut.skinning===!0||ae.isInstancedMesh&&ut.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&ut.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&ut.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&ut.instancingMorph===!1&&ae.morphTexture!==null||ut.envMap!==Qe||le.fog===!0&&ut.fog!==Be||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==He.numPlanes||ut.numIntersection!==He.numIntersection)||ut.vertexAlphas!==pt||ut.vertexTangents!==xt||ut.morphTargets!==at||ut.morphNormals!==Ct||ut.morphColors!==Yt||ut.toneMapping!==en||ut.morphTargetsCount!==Bt)&&(Ht=!0):(Ht=!0,ut.__version=le.version);let cn=ut.currentProgram;Ht===!0&&(cn=yn(le,te,ae));let Oi=!1,un=!1,Yi=!1;const Rt=cn.getUniforms(),Tn=ut.uniforms;if(qe.useProgram(cn.program)&&(Oi=!0,un=!0,Yi=!0),le.id!==J&&(J=le.id,un=!0),Oi||se!==L){qe.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Rt.setValue(W,"projectionMatrix",L.projectionMatrix),Rt.setValue(W,"viewMatrix",L.matrixWorldInverse);const Gn=Rt.map.cameraPosition;Gn!==void 0&&Gn.setValue(W,ke.setFromMatrixPosition(L.matrixWorld)),Vt.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),se!==L&&(se=L,un=!0,Yi=!0)}if(ae.isSkinnedMesh){Rt.setOptional(W,ae,"bindMatrix"),Rt.setOptional(W,ae,"bindMatrixInverse");const Pn=ae.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Rt.setValue(W,"boneTexture",Pn.boneTexture,yt))}ae.isBatchedMesh&&(Rt.setOptional(W,ae,"batchingTexture"),Rt.setValue(W,"batchingTexture",ae._matricesTexture,yt),Rt.setOptional(W,ae,"batchingIdTexture"),Rt.setValue(W,"batchingIdTexture",ae._indirectTexture,yt),Rt.setOptional(W,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Rt.setValue(W,"batchingColorTexture",ae._colorsTexture,yt));const Un=ge.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ot.update(ae,ge,cn),(un||ut.receiveShadow!==ae.receiveShadow)&&(ut.receiveShadow=ae.receiveShadow,Rt.setValue(W,"receiveShadow",ae.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Tn.envMap.value=Qe,Tn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&te.environment!==null&&(Tn.envMapIntensity.value=te.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=Q3()),un&&(Rt.setValue(W,"toneMappingExposure",V.toneMappingExposure),ut.needsLights&&Vo(Tn,Yi),Be&&le.fog===!0&&Ze.refreshFogUniforms(Tn,Be),Ze.refreshMaterialUniforms(Tn,le,Ce,Te,I.state.transmissionRenderTarget[L.id]),Xu.upload(W,ni(ut),Tn,yt)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Xu.upload(W,ni(ut),Tn,yt),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Rt.setValue(W,"center",ae.center),Rt.setValue(W,"modelViewMatrix",ae.modelViewMatrix),Rt.setValue(W,"normalMatrix",ae.normalMatrix),Rt.setValue(W,"modelMatrix",ae.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Pn=le.uniformsGroups;for(let Gn=0,Pi=Pn.length;Gn<Pi;Gn++){const mi=Pn[Gn];Xe.update(mi,cn),Xe.bind(mi,cn)}}return cn}function Vo(L,te){L.ambientLightColor.needsUpdate=te,L.lightProbe.needsUpdate=te,L.directionalLights.needsUpdate=te,L.directionalLightShadows.needsUpdate=te,L.pointLights.needsUpdate=te,L.pointLightShadows.needsUpdate=te,L.spotLights.needsUpdate=te,L.spotLightShadows.needsUpdate=te,L.rectAreaLights.needsUpdate=te,L.hemisphereLights.needsUpdate=te}function As(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,te,ge){const le=st.get(L);le.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),st.get(L.texture).__webglTexture=te,st.get(L.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ge,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,te){const ge=st.get(L);ge.__webglFramebuffer=te,ge.__useDefaultFramebuffer=te===void 0};const ba=W.createFramebuffer();this.setRenderTarget=function(L,te=0,ge=0){O=L,he=te,P=ge;let le=!0,ae=null,Be=!1,ze=!1;if(L){const Qe=st.get(L);if(Qe.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(W.FRAMEBUFFER,null),le=!1;else if(Qe.__webglFramebuffer===void 0)yt.setupRenderTarget(L);else if(Qe.__hasExternalTextures)yt.rebindTextures(L,st.get(L.texture).__webglTexture,st.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const at=L.depthTexture;if(Qe.__boundDepthTexture!==at){if(at!==null&&st.has(at)&&(L.width!==at.image.width||L.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(L)}}const pt=L.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(ze=!0);const xt=st.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(xt[te])?ae=xt[te][ge]:ae=xt[te],Be=!0):L.samples>0&&yt.useMultisampledRTT(L)===!1?ae=st.get(L).__webglMultisampledFramebuffer:Array.isArray(xt)?ae=xt[ge]:ae=xt,ue.copy(L.viewport),Me.copy(L.scissor),Se=L.scissorTest}else ue.copy(De).multiplyScalar(Ce).floor(),Me.copy(Fe).multiplyScalar(Ce).floor(),Se=$e;if(ge!==0&&(ae=ba),qe.bindFramebuffer(W.FRAMEBUFFER,ae)&&le&&qe.drawBuffers(L,ae),qe.viewport(ue),qe.scissor(Me),qe.setScissorTest(Se),Be){const Qe=st.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+te,Qe.__webglTexture,ge)}else if(ze){const Qe=te;for(let pt=0;pt<L.textures.length;pt++){const xt=st.get(L.textures[pt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+pt,xt.__webglTexture,ge,Qe)}}else if(L!==null&&ge!==0){const Qe=st.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qe.__webglTexture,ge)}J=-1},this.readRenderTargetPixels=function(L,te,ge,le,ae,Be,ze,Ke=0){if(!(L&&L.isWebGLRenderTarget)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=st.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(Qe=Qe[ze]),Qe){qe.bindFramebuffer(W.FRAMEBUFFER,Qe);try{const pt=L.textures[Ke],xt=pt.format,at=pt.type;if(!Vt.textureFormatReadable(xt)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(at)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=L.width-le&&ge>=0&&ge<=L.height-ae&&(L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ke),W.readPixels(te,ge,le,ae,vt.convert(xt),vt.convert(at),Be))}finally{const pt=O!==null?st.get(O).__webglFramebuffer:null;qe.bindFramebuffer(W.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(L,te,ge,le,ae,Be,ze,Ke=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=st.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(Qe=Qe[ze]),Qe)if(te>=0&&te<=L.width-le&&ge>=0&&ge<=L.height-ae){qe.bindFramebuffer(W.FRAMEBUFFER,Qe);const pt=L.textures[Ke],xt=pt.format,at=pt.type;if(!Vt.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ct),W.bufferData(W.PIXEL_PACK_BUFFER,Be.byteLength,W.STREAM_READ),L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ke),W.readPixels(te,ge,le,ae,vt.convert(xt),vt.convert(at),0);const Yt=O!==null?st.get(O).__webglFramebuffer:null;qe.bindFramebuffer(W.FRAMEBUFFER,Yt);const en=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await MS(W,en,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ct),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Be),W.deleteBuffer(Ct),W.deleteSync(en),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,te=null,ge=0){const le=Math.pow(2,-ge),ae=Math.floor(L.image.width*le),Be=Math.floor(L.image.height*le),ze=te!==null?te.x:0,Ke=te!==null?te.y:0;yt.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,ge,0,0,ze,Ke,ae,Be),qe.unbindTexture()};const kr=W.createFramebuffer(),la=W.createFramebuffer();this.copyTextureToTexture=function(L,te,ge=null,le=null,ae=0,Be=null){Be===null&&(ae!==0?(Kl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Be=ae,ae=0):Be=0);let ze,Ke,Qe,pt,xt,at,Ct,Yt,en;const kt=L.isCompressedTexture?L.mipmaps[Be]:L.image;if(ge!==null)ze=ge.max.x-ge.min.x,Ke=ge.max.y-ge.min.y,Qe=ge.isBox3?ge.max.z-ge.min.z:1,pt=ge.min.x,xt=ge.min.y,at=ge.isBox3?ge.min.z:0;else{const Un=Math.pow(2,-ae);ze=Math.floor(kt.width*Un),Ke=Math.floor(kt.height*Un),L.isDataArrayTexture?Qe=kt.depth:L.isData3DTexture?Qe=Math.floor(kt.depth*Un):Qe=1,pt=0,xt=0,at=0}le!==null?(Ct=le.x,Yt=le.y,en=le.z):(Ct=0,Yt=0,en=0);const Bt=vt.convert(te.format),ut=vt.convert(te.type);let sn;te.isData3DTexture?(yt.setTexture3D(te,0),sn=W.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(yt.setTexture2DArray(te,0),sn=W.TEXTURE_2D_ARRAY):(yt.setTexture2D(te,0),sn=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment);const Ht=W.getParameter(W.UNPACK_ROW_LENGTH),cn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Oi=W.getParameter(W.UNPACK_SKIP_PIXELS),un=W.getParameter(W.UNPACK_SKIP_ROWS),Yi=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,kt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,kt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,pt),W.pixelStorei(W.UNPACK_SKIP_ROWS,xt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,at);const Rt=L.isDataArrayTexture||L.isData3DTexture,Tn=te.isDataArrayTexture||te.isData3DTexture;if(L.isDepthTexture){const Un=st.get(L),Pn=st.get(te),Gn=st.get(Un.__renderTarget),Pi=st.get(Pn.__renderTarget);qe.bindFramebuffer(W.READ_FRAMEBUFFER,Gn.__webglFramebuffer),qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let mi=0;mi<Qe;mi++)Rt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(L).__webglTexture,ae,at+mi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(te).__webglTexture,Be,en+mi)),W.blitFramebuffer(pt,xt,ze,Ke,Ct,Yt,ze,Ke,W.DEPTH_BUFFER_BIT,W.NEAREST);qe.bindFramebuffer(W.READ_FRAMEBUFFER,null),qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ae!==0||L.isRenderTargetTexture||st.has(L)){const Un=st.get(L),Pn=st.get(te);qe.bindFramebuffer(W.READ_FRAMEBUFFER,kr),qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,la);for(let Gn=0;Gn<Qe;Gn++)Rt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Un.__webglTexture,ae,at+Gn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Un.__webglTexture,ae),Tn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pn.__webglTexture,Be,en+Gn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pn.__webglTexture,Be),ae!==0?W.blitFramebuffer(pt,xt,ze,Ke,Ct,Yt,ze,Ke,W.COLOR_BUFFER_BIT,W.NEAREST):Tn?W.copyTexSubImage3D(sn,Be,Ct,Yt,en+Gn,pt,xt,ze,Ke):W.copyTexSubImage2D(sn,Be,Ct,Yt,pt,xt,ze,Ke);qe.bindFramebuffer(W.READ_FRAMEBUFFER,null),qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Tn?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(sn,Be,Ct,Yt,en,ze,Ke,Qe,Bt,ut,kt.data):te.isCompressedArrayTexture?W.compressedTexSubImage3D(sn,Be,Ct,Yt,en,ze,Ke,Qe,Bt,kt.data):W.texSubImage3D(sn,Be,Ct,Yt,en,ze,Ke,Qe,Bt,ut,kt):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Be,Ct,Yt,ze,Ke,Bt,ut,kt.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Be,Ct,Yt,kt.width,kt.height,Bt,kt.data):W.texSubImage2D(W.TEXTURE_2D,Be,Ct,Yt,ze,Ke,Bt,ut,kt);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ht),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,cn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Oi),W.pixelStorei(W.UNPACK_SKIP_ROWS,un),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Yi),Be===0&&te.generateMipmaps&&W.generateMipmap(sn),qe.unbindTexture()},this.initRenderTarget=function(L){st.get(L).__webglFramebuffer===void 0&&yt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?yt.setTextureCube(L,0):L.isData3DTexture?yt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?yt.setTexture2DArray(L,0):yt.setTexture2D(L,0),qe.unbindTexture()},this.resetState=function(){he=0,P=0,O=null,qe.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=an._getDrawingBufferColorSpace(e),i.unpackColorSpace=an._getUnpackColorSpace()}}const Ex={type:"change"},om={type:"start"},rv={type:"end"},Bu=new Ju,Tx=new Fr,$3=Math.cos(70*TS.DEG2RAD),Xn=new _e,bi=2*Math.PI,mn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tp=1e-6;class eT extends fb{constructor(e,i=null){super(e,i),this.state=mn.NONE,this.target=new _e,this.cursor=new _e,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Co.ROTATE,MIDDLE:Co.DOLLY,RIGHT:Co.PAN},this.touches={ONE:wo.ROTATE,TWO:wo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new _e,this._lastQuaternion=new Ss,this._lastTargetPosition=new _e,this._quat=new Ss().setFromUnitVectors(e.up,new _e(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $g,this._sphericalDelta=new $g,this._scale=1,this._panOffset=new _e,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new _e,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nT.bind(this),this._onPointerDown=tT.bind(this),this._onPointerUp=iT.bind(this),this._onContextMenu=uT.bind(this),this._onMouseWheel=sT.bind(this),this._onKeyDown=oT.bind(this),this._onTouchStart=lT.bind(this),this._onTouchMove=cT.bind(this),this._onMouseDown=aT.bind(this),this._onMouseMove=rT.bind(this),this._interceptControlDown=fT.bind(this),this._interceptControlUp=hT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ex),this.update(),this.state=mn.NONE}update(e=null){const i=this.object.position;Xn.copy(i).sub(this.target),Xn.applyQuaternion(this._quat),this._spherical.setFromVector3(Xn),this.autoRotate&&this.state===mn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=bi:r>Math.PI&&(r-=bi),l<-Math.PI?l+=bi:l>Math.PI&&(l-=bi),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const p=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=p!=this._spherical.radius}if(Xn.setFromSpherical(this._spherical),Xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let p=null;if(this.object.isPerspectiveCamera){const m=Xn.length();p=this._clampDistance(m*this._scale);const x=m-p;this.object.position.addScaledVector(this._dollyDirection,x),this.object.updateMatrixWorld(),f=!!x}else if(this.object.isOrthographicCamera){const m=new _e(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const x=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=x!==this.object.zoom;const _=new _e(this._mouse.x,this._mouse.y,0);_.unproject(this.object),this.object.position.sub(_).add(m),this.object.updateMatrixWorld(),p=Xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;p!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(p).add(this.object.position):(Bu.origin.copy(this.object.position),Bu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bu.direction))<$3?this.object.lookAt(this.target):(Tx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bu.intersectPlane(Tx,this.target))))}else if(this.object.isOrthographicCamera){const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),p!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>tp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tp||this._lastTargetPosition.distanceToSquared(this.target)>tp?(this.dispatchEvent(Ex),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bi/60*this.autoRotateSpeed*e:bi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Xn.setFromMatrixColumn(i,0),Xn.multiplyScalar(-e),this._panOffset.add(Xn)}_panUp(e,i){this.screenSpacePanning===!0?Xn.setFromMatrixColumn(i,1):(Xn.setFromMatrixColumn(i,0),Xn.crossVectors(this.object.up,Xn)),Xn.multiplyScalar(e),this._panOffset.add(Xn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Xn.copy(l).sub(this.target);let f=Xn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,p=r.width,m=r.height;this._mouse.x=l/p*2-1,this._mouse.y=-(f/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/i.clientHeight),this._rotateUp(bi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/i.clientHeight),this._rotateUp(bi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const p=(e.pageX+i.x)*.5,m=(e.pageY+i.y)*.5;this._updateZoomParameters(p,m)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Ut,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function tT(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function nT(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function iT(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rv),this.state=mn.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function aT(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=mn.DOLLY;break;case Co.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=mn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=mn.ROTATE}break;case Co.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=mn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=mn.PAN}break;default:this.state=mn.NONE}this.state!==mn.NONE&&this.dispatchEvent(om)}function rT(o){switch(this.state){case mn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case mn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case mn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function sT(o){this.enabled===!1||this.enableZoom===!1||this.state!==mn.NONE||(o.preventDefault(),this.dispatchEvent(om),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(rv))}function oT(o){this.enabled!==!1&&this._handleKeyDown(o)}function lT(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case wo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=mn.TOUCH_ROTATE;break;case wo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=mn.TOUCH_PAN;break;default:this.state=mn.NONE}break;case 2:switch(this.touches.TWO){case wo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=mn.TOUCH_DOLLY_PAN;break;case wo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=mn.TOUCH_DOLLY_ROTATE;break;default:this.state=mn.NONE}break;default:this.state=mn.NONE}this.state!==mn.NONE&&this.dispatchEvent(om)}function cT(o){switch(this._trackPointer(o),this.state){case mn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case mn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case mn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case mn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=mn.NONE}}function uT(o){this.enabled!==!1&&o.preventDefault()}function fT(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hT(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var np={exports:{}};const dT={},pT=Object.freeze(Object.defineProperty({__proto__:null,default:dT},Symbol.toStringTag,{value:"Module"})),ip=Ey(pT);var Ax;function mT(){return Ax||(Ax=1,(function(o,e){var i=(()=>{var r=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(r=r||__filename),(function(l={}){var f,p=l,m,x,_=new Promise((c,d)=>{m=c,x=d}),S=typeof window=="object",b=typeof importScripts=="function",E=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",A=Object.assign({},p),U="./this.program",N=(c,d)=>{throw d},T="";function M(c){return p.locateFile?p.locateFile(c,T):T+c}var X,I;if(E){var Y=ip,ee=ip;T=__dirname+"/",I=c=>{c=qe(c)?new URL(c):ee.normalize(c);var d=Y.readFileSync(c);return d},X=(c,d=!0)=>(c=qe(c)?new URL(c):ee.normalize(c),new Promise((g,y)=>{Y.readFile(c,d?void 0:"utf8",(C,F)=>{C?y(C):g(d?F.buffer:F)})})),!p.thisProgram&&process.argv.length>1&&(U=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),N=(c,d)=>{throw process.exitCode=c,d}}else(S||b)&&(b?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),r&&(T=r),T.startsWith("blob:")?T="":T=T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),b&&(I=c=>{var d=new XMLHttpRequest;return d.open("GET",c,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),X=c=>qe(c)?new Promise((d,g)=>{var y=new XMLHttpRequest;y.open("GET",c,!0),y.responseType="arraybuffer",y.onload=()=>{if(y.status==200||y.status==0&&y.response){d(y.response);return}g(y.status)},y.onerror=g,y.send(null)}):fetch(c,{credentials:"same-origin"}).then(d=>d.ok?d.arrayBuffer():Promise.reject(new Error(d.status+" : "+d.url))));var V=p.print||console.log.bind(console),k=p.printErr||console.error.bind(console);Object.assign(p,A),A=null,p.arguments&&p.arguments,p.thisProgram&&(U=p.thisProgram);var he=p.wasmBinary,P,O=!1;function J(c,d){c||gt(d)}var se,ue,Me,Se,z,$,ie,Te;function Ce(){var c=P.buffer;p.HEAP8=se=new Int8Array(c),p.HEAP16=Me=new Int16Array(c),p.HEAPU8=ue=new Uint8Array(c),p.HEAPU16=Se=new Uint16Array(c),p.HEAP32=z=new Int32Array(c),p.HEAPU32=$=new Uint32Array(c),p.HEAPF32=ie=new Float32Array(c),p.HEAPF64=Te=new Float64Array(c)}var H=[],me=[],De=[],Fe=!1;function $e(){var c=p.preRun;c&&(typeof c=="function"&&(c=[c]),c.forEach(ye)),dt(H)}function de(){Fe=!0,!p.noFSInit&&!R.initialized&&R.init(),R.ignorePermissions=!1,dt(me)}function Q(){var c=p.postRun;c&&(typeof c=="function"&&(c=[c]),c.forEach(ke)),dt(De)}function ye(c){H.unshift(c)}function Ie(c){me.unshift(c)}function ke(c){De.unshift(c)}var tt=0,Jt=null;function _t(c){return c}function At(c){tt++,p.monitorRunDependencies?.(tt)}function W(c){if(tt--,p.monitorRunDependencies?.(tt),tt==0&&Jt){var d=Jt;Jt=null,d()}}function gt(c){p.onAbort?.(c),c="Aborted("+c+")",k(c),O=!0,c+=". Build with -sASSERTIONS for more info.",Fe&&sr();var d=new WebAssembly.RuntimeError(c);throw x(d),d}var Tt="data:application/octet-stream;base64,",Vt=c=>c.startsWith(Tt),qe=c=>c.startsWith("file://");function Lt(){var c="occt-import-js.wasm";return Vt(c)?c:M(c)}var st;function yt(c){if(c==st&&he)return new Uint8Array(he);if(I)return I(c);throw"both async and sync fetching of the wasm failed"}function B(c){return he?Promise.resolve().then(()=>yt(c)):X(c).then(d=>new Uint8Array(d),()=>yt(c))}function w(c,d,g){return B(c).then(y=>WebAssembly.instantiate(y,d)).then(g,y=>{k(`failed to asynchronously prepare wasm: ${y}`),gt(y)})}function oe(c,d,g,y){return!c&&typeof WebAssembly.instantiateStreaming=="function"&&!Vt(d)&&!qe(d)&&!E&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(C=>{var F=WebAssembly.instantiateStreaming(C,g);return F.then(y,function(G){return k(`wasm streaming compile failed: ${G}`),k("falling back to ArrayBuffer instantiation"),w(d,g,y)})}):w(d,g,y)}function Ae(){return{a:gc}}function Le(){var c=Ae();function d(y,C){return Fn=y.exports,P=Fn._,Ce(),qo=Fn.ba,Ie(Fn.$),W(),Fn}At();function g(y){d(y.instance)}if(p.instantiateWasm)try{return p.instantiateWasm(c,d)}catch(y){k(`Module.instantiateWasm callback failed with error: ${y}`),x(y)}return st??=Lt(),oe(he,st,c,g).catch(x),{}}var re,Ze;function We(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var dt=c=>{c.forEach(d=>d(p))};p.noExitRuntime;var He={isAbs:c=>c.charAt(0)==="/",splitPath:c=>{var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return d.exec(c).slice(1)},normalizeArray:(c,d)=>{for(var g=0,y=c.length-1;y>=0;y--){var C=c[y];C==="."?c.splice(y,1):C===".."?(c.splice(y,1),g++):g&&(c.splice(y,1),g--)}if(d)for(;g;g--)c.unshift("..");return c},normalize:c=>{var d=He.isAbs(c),g=c.substr(-1)==="/";return c=He.normalizeArray(c.split("/").filter(y=>!!y),!d).join("/"),!c&&!d&&(c="."),c&&g&&(c+="/"),(d?"/":"")+c},dirname:c=>{var d=He.splitPath(c),g=d[0],y=d[1];return!g&&!y?".":(y&&(y=y.substr(0,y.length-1)),g+y)},basename:c=>{if(c==="/")return"/";c=He.normalize(c),c=c.replace(/\/$/,"");var d=c.lastIndexOf("/");return d===-1?c:c.substr(d+1)},join:(...c)=>He.normalize(c.join("/")),join2:(c,d)=>He.normalize(c+"/"+d)},Ne=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return y=>crypto.getRandomValues(y);if(E)try{var c=ip,d=c.randomFillSync;if(d)return y=>c.randomFillSync(y);var g=c.randomBytes;return y=>(y.set(g(y.byteLength)),y)}catch{}gt("initRandomDevice")},Pe=c=>(Pe=Ne())(c),ot={resolve:(...c)=>{for(var d="",g=!1,y=c.length-1;y>=-1&&!g;y--){var C=y>=0?c[y]:R.cwd();if(typeof C!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!C)return"";d=C+"/"+d,g=He.isAbs(C)}return d=He.normalizeArray(d.split("/").filter(F=>!!F),!g).join("/"),(g?"/":"")+d||"."},relative:(c,d)=>{c=ot.resolve(c).substr(1),d=ot.resolve(d).substr(1);function g(Oe){for(var je=0;je<Oe.length&&Oe[je]==="";je++);for(var rt=Oe.length-1;rt>=0&&Oe[rt]==="";rt--);return je>rt?[]:Oe.slice(je,rt-je+1)}for(var y=g(c.split("/")),C=g(d.split("/")),F=Math.min(y.length,C.length),G=F,Z=0;Z<F;Z++)if(y[Z]!==C[Z]){G=Z;break}for(var xe=[],Z=G;Z<y.length;Z++)xe.push("..");return xe=xe.concat(C.slice(G)),xe.join("/")}},lt=typeof TextDecoder<"u"?new TextDecoder:void 0,Ye=(c,d=0,g=NaN)=>{for(var y=d+g,C=d;c[C]&&!(C>=y);)++C;if(C-d>16&&c.buffer&&lt)return lt.decode(c.subarray(d,C));for(var F="";d<C;){var G=c[d++];if(!(G&128)){F+=String.fromCharCode(G);continue}var Z=c[d++]&63;if((G&224)==192){F+=String.fromCharCode((G&31)<<6|Z);continue}var xe=c[d++]&63;if((G&240)==224?G=(G&15)<<12|Z<<6|xe:G=(G&7)<<18|Z<<12|xe<<6|c[d++]&63,G<65536)F+=String.fromCharCode(G);else{var Oe=G-65536;F+=String.fromCharCode(55296|Oe>>10,56320|Oe&1023)}}return F},vt=[],j=c=>{for(var d=0,g=0;g<c.length;++g){var y=c.charCodeAt(g);y<=127?d++:y<=2047?d+=2:y>=55296&&y<=57343?(d+=4,++g):d+=3}return d},Xe=(c,d,g,y)=>{if(!(y>0))return 0;for(var C=g,F=g+y-1,G=0;G<c.length;++G){var Z=c.charCodeAt(G);if(Z>=55296&&Z<=57343){var xe=c.charCodeAt(++G);Z=65536+((Z&1023)<<10)|xe&1023}if(Z<=127){if(g>=F)break;d[g++]=Z}else if(Z<=2047){if(g+1>=F)break;d[g++]=192|Z>>6,d[g++]=128|Z&63}else if(Z<=65535){if(g+2>=F)break;d[g++]=224|Z>>12,d[g++]=128|Z>>6&63,d[g++]=128|Z&63}else{if(g+3>=F)break;d[g++]=240|Z>>18,d[g++]=128|Z>>12&63,d[g++]=128|Z>>6&63,d[g++]=128|Z&63}}return d[g]=0,g-C};function Ve(c,d,g){var y=j(c)+1,C=new Array(y),F=Xe(c,C,0,C.length);return C.length=F,C}var Ge=()=>{if(!vt.length){var c=null;if(E){var d=256,g=Buffer.alloc(d),y=0,C=process.stdin.fd;try{y=Y.readSync(C,g,0,d)}catch(F){if(F.toString().includes("EOF"))y=0;else throw F}y>0&&(c=g.slice(0,y).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(c=window.prompt("Input: "),c!==null&&(c+=`
`));if(!c)return null;vt=Ve(c)}return vt.shift()},Ue={ttys:[],init(){},shutdown(){},register(c,d){Ue.ttys[c]={input:[],output:[],ops:d},R.registerDevice(c,Ue.stream_ops)},stream_ops:{open(c){var d=Ue.ttys[c.node.rdev];if(!d)throw new R.ErrnoError(43);c.tty=d,c.seekable=!1},close(c){c.tty.ops.fsync(c.tty)},fsync(c){c.tty.ops.fsync(c.tty)},read(c,d,g,y,C){if(!c.tty||!c.tty.ops.get_char)throw new R.ErrnoError(60);for(var F=0,G=0;G<y;G++){var Z;try{Z=c.tty.ops.get_char(c.tty)}catch{throw new R.ErrnoError(29)}if(Z===void 0&&F===0)throw new R.ErrnoError(6);if(Z==null)break;F++,d[g+G]=Z}return F&&(c.node.timestamp=Date.now()),F},write(c,d,g,y,C){if(!c.tty||!c.tty.ops.put_char)throw new R.ErrnoError(60);try{for(var F=0;F<y;F++)c.tty.ops.put_char(c.tty,d[g+F])}catch{throw new R.ErrnoError(29)}return y&&(c.node.timestamp=Date.now()),F}},default_tty_ops:{get_char(c){return Ge()},put_char(c,d){d===null||d===10?(V(Ye(c.output)),c.output=[]):d!=0&&c.output.push(d)},fsync(c){c.output&&c.output.length>0&&(V(Ye(c.output)),c.output=[])},ioctl_tcgets(c){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(c,d,g){return 0},ioctl_tiocgwinsz(c){return[24,80]}},default_tty1_ops:{put_char(c,d){d===null||d===10?(k(Ye(c.output)),c.output=[]):d!=0&&c.output.push(d)},fsync(c){c.output&&c.output.length>0&&(k(Ye(c.output)),c.output=[])}}},Re=(c,d)=>{ue.fill(0,c,c+d)},nt=(c,d)=>Math.ceil(c/d)*d,Mt=c=>{c=nt(c,65536);var d=Vs(65536,c);return d&&Re(d,c),d},it={ops_table:null,mount(c){return it.createNode(null,"/",16895,0)},createNode(c,d,g,y){if(R.isBlkdev(g)||R.isFIFO(g))throw new R.ErrnoError(63);it.ops_table||={dir:{node:{getattr:it.node_ops.getattr,setattr:it.node_ops.setattr,lookup:it.node_ops.lookup,mknod:it.node_ops.mknod,rename:it.node_ops.rename,unlink:it.node_ops.unlink,rmdir:it.node_ops.rmdir,readdir:it.node_ops.readdir,symlink:it.node_ops.symlink},stream:{llseek:it.stream_ops.llseek}},file:{node:{getattr:it.node_ops.getattr,setattr:it.node_ops.setattr},stream:{llseek:it.stream_ops.llseek,read:it.stream_ops.read,write:it.stream_ops.write,allocate:it.stream_ops.allocate,mmap:it.stream_ops.mmap,msync:it.stream_ops.msync}},link:{node:{getattr:it.node_ops.getattr,setattr:it.node_ops.setattr,readlink:it.node_ops.readlink},stream:{}},chrdev:{node:{getattr:it.node_ops.getattr,setattr:it.node_ops.setattr},stream:R.chrdev_stream_ops}};var C=R.createNode(c,d,g,y);return R.isDir(C.mode)?(C.node_ops=it.ops_table.dir.node,C.stream_ops=it.ops_table.dir.stream,C.contents={}):R.isFile(C.mode)?(C.node_ops=it.ops_table.file.node,C.stream_ops=it.ops_table.file.stream,C.usedBytes=0,C.contents=null):R.isLink(C.mode)?(C.node_ops=it.ops_table.link.node,C.stream_ops=it.ops_table.link.stream):R.isChrdev(C.mode)&&(C.node_ops=it.ops_table.chrdev.node,C.stream_ops=it.ops_table.chrdev.stream),C.timestamp=Date.now(),c&&(c.contents[d]=C,c.timestamp=C.timestamp),C},getFileDataAsTypedArray(c){return c.contents?c.contents.subarray?c.contents.subarray(0,c.usedBytes):new Uint8Array(c.contents):new Uint8Array(0)},expandFileStorage(c,d){var g=c.contents?c.contents.length:0;if(!(g>=d)){var y=1024*1024;d=Math.max(d,g*(g<y?2:1.125)>>>0),g!=0&&(d=Math.max(d,256));var C=c.contents;c.contents=new Uint8Array(d),c.usedBytes>0&&c.contents.set(C.subarray(0,c.usedBytes),0)}},resizeFileStorage(c,d){if(c.usedBytes!=d)if(d==0)c.contents=null,c.usedBytes=0;else{var g=c.contents;c.contents=new Uint8Array(d),g&&c.contents.set(g.subarray(0,Math.min(d,c.usedBytes))),c.usedBytes=d}},node_ops:{getattr(c){var d={};return d.dev=R.isChrdev(c.mode)?c.id:1,d.ino=c.id,d.mode=c.mode,d.nlink=1,d.uid=0,d.gid=0,d.rdev=c.rdev,R.isDir(c.mode)?d.size=4096:R.isFile(c.mode)?d.size=c.usedBytes:R.isLink(c.mode)?d.size=c.link.length:d.size=0,d.atime=new Date(c.timestamp),d.mtime=new Date(c.timestamp),d.ctime=new Date(c.timestamp),d.blksize=4096,d.blocks=Math.ceil(d.size/d.blksize),d},setattr(c,d){d.mode!==void 0&&(c.mode=d.mode),d.timestamp!==void 0&&(c.timestamp=d.timestamp),d.size!==void 0&&it.resizeFileStorage(c,d.size)},lookup(c,d){throw R.genericErrors[44]},mknod(c,d,g,y){return it.createNode(c,d,g,y)},rename(c,d,g){if(R.isDir(c.mode)){var y;try{y=R.lookupNode(d,g)}catch{}if(y)for(var C in y.contents)throw new R.ErrnoError(55)}delete c.parent.contents[c.name],c.parent.timestamp=Date.now(),c.name=g,d.contents[g]=c,d.timestamp=c.parent.timestamp},unlink(c,d){delete c.contents[d],c.timestamp=Date.now()},rmdir(c,d){var g=R.lookupNode(c,d);for(var y in g.contents)throw new R.ErrnoError(55);delete c.contents[d],c.timestamp=Date.now()},readdir(c){var d=[".",".."];for(var g of Object.keys(c.contents))d.push(g);return d},symlink(c,d,g){var y=it.createNode(c,d,41471,0);return y.link=g,y},readlink(c){if(!R.isLink(c.mode))throw new R.ErrnoError(28);return c.link}},stream_ops:{read(c,d,g,y,C){var F=c.node.contents;if(C>=c.node.usedBytes)return 0;var G=Math.min(c.node.usedBytes-C,y);if(G>8&&F.subarray)d.set(F.subarray(C,C+G),g);else for(var Z=0;Z<G;Z++)d[g+Z]=F[C+Z];return G},write(c,d,g,y,C,F){if(d.buffer===se.buffer&&(F=!1),!y)return 0;var G=c.node;if(G.timestamp=Date.now(),d.subarray&&(!G.contents||G.contents.subarray)){if(F)return G.contents=d.subarray(g,g+y),G.usedBytes=y,y;if(G.usedBytes===0&&C===0)return G.contents=d.slice(g,g+y),G.usedBytes=y,y;if(C+y<=G.usedBytes)return G.contents.set(d.subarray(g,g+y),C),y}if(it.expandFileStorage(G,C+y),G.contents.subarray&&d.subarray)G.contents.set(d.subarray(g,g+y),C);else for(var Z=0;Z<y;Z++)G.contents[C+Z]=d[g+Z];return G.usedBytes=Math.max(G.usedBytes,C+y),y},llseek(c,d,g){var y=d;if(g===1?y+=c.position:g===2&&R.isFile(c.node.mode)&&(y+=c.node.usedBytes),y<0)throw new R.ErrnoError(28);return y},allocate(c,d,g){it.expandFileStorage(c.node,d+g),c.node.usedBytes=Math.max(c.node.usedBytes,d+g)},mmap(c,d,g,y,C){if(!R.isFile(c.node.mode))throw new R.ErrnoError(43);var F,G,Z=c.node.contents;if(!(C&2)&&Z&&Z.buffer===se.buffer)G=!1,F=Z.byteOffset;else{if(G=!0,F=Mt(d),!F)throw new R.ErrnoError(48);Z&&((g>0||g+d<Z.length)&&(Z.subarray?Z=Z.subarray(g,g+d):Z=Array.prototype.slice.call(Z,g,g+d)),se.set(Z,F))}return{ptr:F,allocated:G}},msync(c,d,g,y,C){return it.stream_ops.write(c,d,0,y,g,!1),0}}},$t=(c,d,g,y)=>{var C=`al ${c}`;X(c).then(F=>{d(new Uint8Array(F)),C&&W()},F=>{if(g)g();else throw`Loading data file "${c}" failed.`}),C&&At()},Yn=(c,d,g,y,C,F)=>{R.createDataFile(c,d,g,y,C,F)},li=p.preloadPlugins||[],Ts=(c,d,g,y)=>{typeof Browser<"u"&&Browser.init();var C=!1;return li.forEach(F=>{C||F.canHandle(d)&&(F.handle(c,d,g,y),C=!0)}),C},Vr=(c,d,g,y,C,F,G,Z,xe,Oe)=>{var je=d?ot.resolve(He.join2(c,d)):c;function rt(ft){function et(St){Oe?.(),Z||Yn(c,d,St,y,C,xe),F?.(),W()}Ts(ft,je,et,()=>{G?.(),W()})||et(ft)}At(),typeof g=="string"?$t(g,rt,G):rt(g)},Gr=c=>{var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},g=d[c];if(typeof g>"u")throw new Error(`Unknown file open mode: ${c}`);return g},ci=(c,d)=>{var g=0;return c&&(g|=365),d&&(g|=146),g},R={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(c){this.name="ErrnoError",this.errno=c}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(c){this.node=c}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(c){this.shared.flags=c}get position(){return this.shared.position}set position(c){this.shared.position=c}},FSNode:class{constructor(c,d,g,y){c||(c=this),this.parent=c,this.mount=c.mount,this.mounted=null,this.id=R.nextInode++,this.name=d,this.mode=g,this.node_ops={},this.stream_ops={},this.rdev=y,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(c){c?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(c){c?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return R.isDir(this.mode)}get isDevice(){return R.isChrdev(this.mode)}},lookupPath(c,d={}){if(c=ot.resolve(c),!c)return{path:"",node:null};var g={follow_mount:!0,recurse_count:0};if(d=Object.assign(g,d),d.recurse_count>8)throw new R.ErrnoError(32);for(var y=c.split("/").filter(rt=>!!rt),C=R.root,F="/",G=0;G<y.length;G++){var Z=G===y.length-1;if(Z&&d.parent)break;if(C=R.lookupNode(C,y[G]),F=He.join2(F,y[G]),R.isMountpoint(C)&&(!Z||Z&&d.follow_mount)&&(C=C.mounted.root),!Z||d.follow)for(var xe=0;R.isLink(C.mode);){var Oe=R.readlink(F);F=ot.resolve(He.dirname(F),Oe);var je=R.lookupPath(F,{recurse_count:d.recurse_count+1});if(C=je.node,xe++>40)throw new R.ErrnoError(32)}}return{path:F,node:C}},getPath(c){for(var d;;){if(R.isRoot(c)){var g=c.mount.mountpoint;return d?g[g.length-1]!=="/"?`${g}/${d}`:g+d:g}d=d?`${c.name}/${d}`:c.name,c=c.parent}},hashName(c,d){for(var g=0,y=0;y<d.length;y++)g=(g<<5)-g+d.charCodeAt(y)|0;return(c+g>>>0)%R.nameTable.length},hashAddNode(c){var d=R.hashName(c.parent.id,c.name);c.name_next=R.nameTable[d],R.nameTable[d]=c},hashRemoveNode(c){var d=R.hashName(c.parent.id,c.name);if(R.nameTable[d]===c)R.nameTable[d]=c.name_next;else for(var g=R.nameTable[d];g;){if(g.name_next===c){g.name_next=c.name_next;break}g=g.name_next}},lookupNode(c,d){var g=R.mayLookup(c);if(g)throw new R.ErrnoError(g);for(var y=R.hashName(c.id,d),C=R.nameTable[y];C;C=C.name_next){var F=C.name;if(C.parent.id===c.id&&F===d)return C}return R.lookup(c,d)},createNode(c,d,g,y){var C=new R.FSNode(c,d,g,y);return R.hashAddNode(C),C},destroyNode(c){R.hashRemoveNode(c)},isRoot(c){return c===c.parent},isMountpoint(c){return!!c.mounted},isFile(c){return(c&61440)===32768},isDir(c){return(c&61440)===16384},isLink(c){return(c&61440)===40960},isChrdev(c){return(c&61440)===8192},isBlkdev(c){return(c&61440)===24576},isFIFO(c){return(c&61440)===4096},isSocket(c){return(c&49152)===49152},flagsToPermissionString(c){var d=["r","w","rw"][c&3];return c&512&&(d+="w"),d},nodePermissions(c,d){return R.ignorePermissions?0:d.includes("r")&&!(c.mode&292)||d.includes("w")&&!(c.mode&146)||d.includes("x")&&!(c.mode&73)?2:0},mayLookup(c){if(!R.isDir(c.mode))return 54;var d=R.nodePermissions(c,"x");return d||(c.node_ops.lookup?0:2)},mayCreate(c,d){try{var g=R.lookupNode(c,d);return 20}catch{}return R.nodePermissions(c,"wx")},mayDelete(c,d,g){var y;try{y=R.lookupNode(c,d)}catch(F){return F.errno}var C=R.nodePermissions(c,"wx");if(C)return C;if(g){if(!R.isDir(y.mode))return 54;if(R.isRoot(y)||R.getPath(y)===R.cwd())return 10}else if(R.isDir(y.mode))return 31;return 0},mayOpen(c,d){return c?R.isLink(c.mode)?32:R.isDir(c.mode)&&(R.flagsToPermissionString(d)!=="r"||d&512)?31:R.nodePermissions(c,R.flagsToPermissionString(d)):44},MAX_OPEN_FDS:4096,nextfd(){for(var c=0;c<=R.MAX_OPEN_FDS;c++)if(!R.streams[c])return c;throw new R.ErrnoError(33)},getStreamChecked(c){var d=R.getStream(c);if(!d)throw new R.ErrnoError(8);return d},getStream:c=>R.streams[c],createStream(c,d=-1){return c=Object.assign(new R.FSStream,c),d==-1&&(d=R.nextfd()),c.fd=d,R.streams[d]=c,c},closeStream(c){R.streams[c]=null},dupStream(c,d=-1){var g=R.createStream(c,d);return g.stream_ops?.dup?.(g),g},chrdev_stream_ops:{open(c){var d=R.getDevice(c.node.rdev);c.stream_ops=d.stream_ops,c.stream_ops.open?.(c)},llseek(){throw new R.ErrnoError(70)}},major:c=>c>>8,minor:c=>c&255,makedev:(c,d)=>c<<8|d,registerDevice(c,d){R.devices[c]={stream_ops:d}},getDevice:c=>R.devices[c],getMounts(c){for(var d=[],g=[c];g.length;){var y=g.pop();d.push(y),g.push(...y.mounts)}return d},syncfs(c,d){typeof c=="function"&&(d=c,c=!1),R.syncFSRequests++,R.syncFSRequests>1&&k(`warning: ${R.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var g=R.getMounts(R.root.mount),y=0;function C(G){return R.syncFSRequests--,d(G)}function F(G){if(G)return F.errored?void 0:(F.errored=!0,C(G));++y>=g.length&&C(null)}g.forEach(G=>{if(!G.type.syncfs)return F(null);G.type.syncfs(G,c,F)})},mount(c,d,g){var y=g==="/",C=!g,F;if(y&&R.root)throw new R.ErrnoError(10);if(!y&&!C){var G=R.lookupPath(g,{follow_mount:!1});if(g=G.path,F=G.node,R.isMountpoint(F))throw new R.ErrnoError(10);if(!R.isDir(F.mode))throw new R.ErrnoError(54)}var Z={type:c,opts:d,mountpoint:g,mounts:[]},xe=c.mount(Z);return xe.mount=Z,Z.root=xe,y?R.root=xe:F&&(F.mounted=Z,F.mount&&F.mount.mounts.push(Z)),xe},unmount(c){var d=R.lookupPath(c,{follow_mount:!1});if(!R.isMountpoint(d.node))throw new R.ErrnoError(28);var g=d.node,y=g.mounted,C=R.getMounts(y);Object.keys(R.nameTable).forEach(G=>{for(var Z=R.nameTable[G];Z;){var xe=Z.name_next;C.includes(Z.mount)&&R.destroyNode(Z),Z=xe}}),g.mounted=null;var F=g.mount.mounts.indexOf(y);g.mount.mounts.splice(F,1)},lookup(c,d){return c.node_ops.lookup(c,d)},mknod(c,d,g){var y=R.lookupPath(c,{parent:!0}),C=y.node,F=He.basename(c);if(!F||F==="."||F==="..")throw new R.ErrnoError(28);var G=R.mayCreate(C,F);if(G)throw new R.ErrnoError(G);if(!C.node_ops.mknod)throw new R.ErrnoError(63);return C.node_ops.mknod(C,F,d,g)},create(c,d){return d=d!==void 0?d:438,d&=4095,d|=32768,R.mknod(c,d,0)},mkdir(c,d){return d=d!==void 0?d:511,d&=1023,d|=16384,R.mknod(c,d,0)},mkdirTree(c,d){for(var g=c.split("/"),y="",C=0;C<g.length;++C)if(g[C]){y+="/"+g[C];try{R.mkdir(y,d)}catch(F){if(F.errno!=20)throw F}}},mkdev(c,d,g){return typeof g>"u"&&(g=d,d=438),d|=8192,R.mknod(c,d,g)},symlink(c,d){if(!ot.resolve(c))throw new R.ErrnoError(44);var g=R.lookupPath(d,{parent:!0}),y=g.node;if(!y)throw new R.ErrnoError(44);var C=He.basename(d),F=R.mayCreate(y,C);if(F)throw new R.ErrnoError(F);if(!y.node_ops.symlink)throw new R.ErrnoError(63);return y.node_ops.symlink(y,C,c)},rename(c,d){var g=He.dirname(c),y=He.dirname(d),C=He.basename(c),F=He.basename(d),G,Z,xe;if(G=R.lookupPath(c,{parent:!0}),Z=G.node,G=R.lookupPath(d,{parent:!0}),xe=G.node,!Z||!xe)throw new R.ErrnoError(44);if(Z.mount!==xe.mount)throw new R.ErrnoError(75);var Oe=R.lookupNode(Z,C),je=ot.relative(c,y);if(je.charAt(0)!==".")throw new R.ErrnoError(28);if(je=ot.relative(d,g),je.charAt(0)!==".")throw new R.ErrnoError(55);var rt;try{rt=R.lookupNode(xe,F)}catch{}if(Oe!==rt){var ft=R.isDir(Oe.mode),et=R.mayDelete(Z,C,ft);if(et)throw new R.ErrnoError(et);if(et=rt?R.mayDelete(xe,F,ft):R.mayCreate(xe,F),et)throw new R.ErrnoError(et);if(!Z.node_ops.rename)throw new R.ErrnoError(63);if(R.isMountpoint(Oe)||rt&&R.isMountpoint(rt))throw new R.ErrnoError(10);if(xe!==Z&&(et=R.nodePermissions(Z,"w"),et))throw new R.ErrnoError(et);R.hashRemoveNode(Oe);try{Z.node_ops.rename(Oe,xe,F),Oe.parent=xe}catch(St){throw St}finally{R.hashAddNode(Oe)}}},rmdir(c){var d=R.lookupPath(c,{parent:!0}),g=d.node,y=He.basename(c),C=R.lookupNode(g,y),F=R.mayDelete(g,y,!0);if(F)throw new R.ErrnoError(F);if(!g.node_ops.rmdir)throw new R.ErrnoError(63);if(R.isMountpoint(C))throw new R.ErrnoError(10);g.node_ops.rmdir(g,y),R.destroyNode(C)},readdir(c){var d=R.lookupPath(c,{follow:!0}),g=d.node;if(!g.node_ops.readdir)throw new R.ErrnoError(54);return g.node_ops.readdir(g)},unlink(c){var d=R.lookupPath(c,{parent:!0}),g=d.node;if(!g)throw new R.ErrnoError(44);var y=He.basename(c),C=R.lookupNode(g,y),F=R.mayDelete(g,y,!1);if(F)throw new R.ErrnoError(F);if(!g.node_ops.unlink)throw new R.ErrnoError(63);if(R.isMountpoint(C))throw new R.ErrnoError(10);g.node_ops.unlink(g,y),R.destroyNode(C)},readlink(c){var d=R.lookupPath(c),g=d.node;if(!g)throw new R.ErrnoError(44);if(!g.node_ops.readlink)throw new R.ErrnoError(28);return ot.resolve(R.getPath(g.parent),g.node_ops.readlink(g))},stat(c,d){var g=R.lookupPath(c,{follow:!d}),y=g.node;if(!y)throw new R.ErrnoError(44);if(!y.node_ops.getattr)throw new R.ErrnoError(63);return y.node_ops.getattr(y)},lstat(c){return R.stat(c,!0)},chmod(c,d,g){var y;if(typeof c=="string"){var C=R.lookupPath(c,{follow:!g});y=C.node}else y=c;if(!y.node_ops.setattr)throw new R.ErrnoError(63);y.node_ops.setattr(y,{mode:d&4095|y.mode&-4096,timestamp:Date.now()})},lchmod(c,d){R.chmod(c,d,!0)},fchmod(c,d){var g=R.getStreamChecked(c);R.chmod(g.node,d)},chown(c,d,g,y){var C;if(typeof c=="string"){var F=R.lookupPath(c,{follow:!y});C=F.node}else C=c;if(!C.node_ops.setattr)throw new R.ErrnoError(63);C.node_ops.setattr(C,{timestamp:Date.now()})},lchown(c,d,g){R.chown(c,d,g,!0)},fchown(c,d,g){var y=R.getStreamChecked(c);R.chown(y.node,d,g)},truncate(c,d){if(d<0)throw new R.ErrnoError(28);var g;if(typeof c=="string"){var y=R.lookupPath(c,{follow:!0});g=y.node}else g=c;if(!g.node_ops.setattr)throw new R.ErrnoError(63);if(R.isDir(g.mode))throw new R.ErrnoError(31);if(!R.isFile(g.mode))throw new R.ErrnoError(28);var C=R.nodePermissions(g,"w");if(C)throw new R.ErrnoError(C);g.node_ops.setattr(g,{size:d,timestamp:Date.now()})},ftruncate(c,d){var g=R.getStreamChecked(c);if((g.flags&2097155)===0)throw new R.ErrnoError(28);R.truncate(g.node,d)},utime(c,d,g){var y=R.lookupPath(c,{follow:!0}),C=y.node;C.node_ops.setattr(C,{timestamp:Math.max(d,g)})},open(c,d,g){if(c==="")throw new R.ErrnoError(44);d=typeof d=="string"?Gr(d):d,d&64?(g=typeof g>"u"?438:g,g=g&4095|32768):g=0;var y;if(typeof c=="object")y=c;else{c=He.normalize(c);try{var C=R.lookupPath(c,{follow:!(d&131072)});y=C.node}catch{}}var F=!1;if(d&64)if(y){if(d&128)throw new R.ErrnoError(20)}else y=R.mknod(c,g,0),F=!0;if(!y)throw new R.ErrnoError(44);if(R.isChrdev(y.mode)&&(d&=-513),d&65536&&!R.isDir(y.mode))throw new R.ErrnoError(54);if(!F){var G=R.mayOpen(y,d);if(G)throw new R.ErrnoError(G)}d&512&&!F&&R.truncate(y,0),d&=-131713;var Z=R.createStream({node:y,path:R.getPath(y),flags:d,seekable:!0,position:0,stream_ops:y.stream_ops,ungotten:[],error:!1});return Z.stream_ops.open&&Z.stream_ops.open(Z),p.logReadFiles&&!(d&1)&&(c in R.readFiles||(R.readFiles[c]=1)),Z},close(c){if(R.isClosed(c))throw new R.ErrnoError(8);c.getdents&&(c.getdents=null);try{c.stream_ops.close&&c.stream_ops.close(c)}catch(d){throw d}finally{R.closeStream(c.fd)}c.fd=null},isClosed(c){return c.fd===null},llseek(c,d,g){if(R.isClosed(c))throw new R.ErrnoError(8);if(!c.seekable||!c.stream_ops.llseek)throw new R.ErrnoError(70);if(g!=0&&g!=1&&g!=2)throw new R.ErrnoError(28);return c.position=c.stream_ops.llseek(c,d,g),c.ungotten=[],c.position},read(c,d,g,y,C){if(y<0||C<0)throw new R.ErrnoError(28);if(R.isClosed(c))throw new R.ErrnoError(8);if((c.flags&2097155)===1)throw new R.ErrnoError(8);if(R.isDir(c.node.mode))throw new R.ErrnoError(31);if(!c.stream_ops.read)throw new R.ErrnoError(28);var F=typeof C<"u";if(!F)C=c.position;else if(!c.seekable)throw new R.ErrnoError(70);var G=c.stream_ops.read(c,d,g,y,C);return F||(c.position+=G),G},write(c,d,g,y,C,F){if(y<0||C<0)throw new R.ErrnoError(28);if(R.isClosed(c))throw new R.ErrnoError(8);if((c.flags&2097155)===0)throw new R.ErrnoError(8);if(R.isDir(c.node.mode))throw new R.ErrnoError(31);if(!c.stream_ops.write)throw new R.ErrnoError(28);c.seekable&&c.flags&1024&&R.llseek(c,0,2);var G=typeof C<"u";if(!G)C=c.position;else if(!c.seekable)throw new R.ErrnoError(70);var Z=c.stream_ops.write(c,d,g,y,C,F);return G||(c.position+=Z),Z},allocate(c,d,g){if(R.isClosed(c))throw new R.ErrnoError(8);if(d<0||g<=0)throw new R.ErrnoError(28);if((c.flags&2097155)===0)throw new R.ErrnoError(8);if(!R.isFile(c.node.mode)&&!R.isDir(c.node.mode))throw new R.ErrnoError(43);if(!c.stream_ops.allocate)throw new R.ErrnoError(138);c.stream_ops.allocate(c,d,g)},mmap(c,d,g,y,C){if((y&2)!==0&&(C&2)===0&&(c.flags&2097155)!==2)throw new R.ErrnoError(2);if((c.flags&2097155)===1)throw new R.ErrnoError(2);if(!c.stream_ops.mmap)throw new R.ErrnoError(43);if(!d)throw new R.ErrnoError(28);return c.stream_ops.mmap(c,d,g,y,C)},msync(c,d,g,y,C){return c.stream_ops.msync?c.stream_ops.msync(c,d,g,y,C):0},ioctl(c,d,g){if(!c.stream_ops.ioctl)throw new R.ErrnoError(59);return c.stream_ops.ioctl(c,d,g)},readFile(c,d={}){if(d.flags=d.flags||0,d.encoding=d.encoding||"binary",d.encoding!=="utf8"&&d.encoding!=="binary")throw new Error(`Invalid encoding type "${d.encoding}"`);var g,y=R.open(c,d.flags),C=R.stat(c),F=C.size,G=new Uint8Array(F);return R.read(y,G,0,F,0),d.encoding==="utf8"?g=Ye(G):d.encoding==="binary"&&(g=G),R.close(y),g},writeFile(c,d,g={}){g.flags=g.flags||577;var y=R.open(c,g.flags,g.mode);if(typeof d=="string"){var C=new Uint8Array(j(d)+1),F=Xe(d,C,0,C.length);R.write(y,C,0,F,void 0,g.canOwn)}else if(ArrayBuffer.isView(d))R.write(y,d,0,d.byteLength,void 0,g.canOwn);else throw new Error("Unsupported data type");R.close(y)},cwd:()=>R.currentPath,chdir(c){var d=R.lookupPath(c,{follow:!0});if(d.node===null)throw new R.ErrnoError(44);if(!R.isDir(d.node.mode))throw new R.ErrnoError(54);var g=R.nodePermissions(d.node,"x");if(g)throw new R.ErrnoError(g);R.currentPath=d.path},createDefaultDirectories(){R.mkdir("/tmp"),R.mkdir("/home"),R.mkdir("/home/web_user")},createDefaultDevices(){R.mkdir("/dev"),R.registerDevice(R.makedev(1,3),{read:()=>0,write:(y,C,F,G,Z)=>G}),R.mkdev("/dev/null",R.makedev(1,3)),Ue.register(R.makedev(5,0),Ue.default_tty_ops),Ue.register(R.makedev(6,0),Ue.default_tty1_ops),R.mkdev("/dev/tty",R.makedev(5,0)),R.mkdev("/dev/tty1",R.makedev(6,0));var c=new Uint8Array(1024),d=0,g=()=>(d===0&&(d=Pe(c).byteLength),c[--d]);R.createDevice("/dev","random",g),R.createDevice("/dev","urandom",g),R.mkdir("/dev/shm"),R.mkdir("/dev/shm/tmp")},createSpecialDirectories(){R.mkdir("/proc");var c=R.mkdir("/proc/self");R.mkdir("/proc/self/fd"),R.mount({mount(){var d=R.createNode(c,"fd",16895,73);return d.node_ops={lookup(g,y){var C=+y,F=R.getStreamChecked(C),G={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>F.path}};return G.parent=G,G}},d}},{},"/proc/self/fd")},createStandardStreams(c,d,g){c?R.createDevice("/dev","stdin",c):R.symlink("/dev/tty","/dev/stdin"),d?R.createDevice("/dev","stdout",null,d):R.symlink("/dev/tty","/dev/stdout"),g?R.createDevice("/dev","stderr",null,g):R.symlink("/dev/tty1","/dev/stderr"),R.open("/dev/stdin",0),R.open("/dev/stdout",1),R.open("/dev/stderr",1)},staticInit(){[44].forEach(c=>{R.genericErrors[c]=new R.ErrnoError(c),R.genericErrors[c].stack="<generic error, no stack>"}),R.nameTable=new Array(4096),R.mount(it,{},"/"),R.createDefaultDirectories(),R.createDefaultDevices(),R.createSpecialDirectories(),R.filesystems={MEMFS:it}},init(c,d,g){R.initialized=!0,c??=p.stdin,d??=p.stdout,g??=p.stderr,R.createStandardStreams(c,d,g)},quit(){R.initialized=!1;for(var c=0;c<R.streams.length;c++){var d=R.streams[c];d&&R.close(d)}},findObject(c,d){var g=R.analyzePath(c,d);return g.exists?g.object:null},analyzePath(c,d){try{var g=R.lookupPath(c,{follow:!d});c=g.path}catch{}var y={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var g=R.lookupPath(c,{parent:!0});y.parentExists=!0,y.parentPath=g.path,y.parentObject=g.node,y.name=He.basename(c),g=R.lookupPath(c,{follow:!d}),y.exists=!0,y.path=g.path,y.object=g.node,y.name=g.node.name,y.isRoot=g.path==="/"}catch(C){y.error=C.errno}return y},createPath(c,d,g,y){c=typeof c=="string"?c:R.getPath(c);for(var C=d.split("/").reverse();C.length;){var F=C.pop();if(F){var G=He.join2(c,F);try{R.mkdir(G)}catch{}c=G}}return G},createFile(c,d,g,y,C){var F=He.join2(typeof c=="string"?c:R.getPath(c),d),G=ci(y,C);return R.create(F,G)},createDataFile(c,d,g,y,C,F){var G=d;c&&(c=typeof c=="string"?c:R.getPath(c),G=d?He.join2(c,d):c);var Z=ci(y,C),xe=R.create(G,Z);if(g){if(typeof g=="string"){for(var Oe=new Array(g.length),je=0,rt=g.length;je<rt;++je)Oe[je]=g.charCodeAt(je);g=Oe}R.chmod(xe,Z|146);var ft=R.open(xe,577);R.write(ft,g,0,g.length,0,F),R.close(ft),R.chmod(xe,Z)}},createDevice(c,d,g,y){var C=He.join2(typeof c=="string"?c:R.getPath(c),d),F=ci(!!g,!!y);R.createDevice.major??=64;var G=R.makedev(R.createDevice.major++,0);return R.registerDevice(G,{open(Z){Z.seekable=!1},close(Z){y?.buffer?.length&&y(10)},read(Z,xe,Oe,je,rt){for(var ft=0,et=0;et<je;et++){var St;try{St=g()}catch{throw new R.ErrnoError(29)}if(St===void 0&&ft===0)throw new R.ErrnoError(6);if(St==null)break;ft++,xe[Oe+et]=St}return ft&&(Z.node.timestamp=Date.now()),ft},write(Z,xe,Oe,je,rt){for(var ft=0;ft<je;ft++)try{y(xe[Oe+ft])}catch{throw new R.ErrnoError(29)}return je&&(Z.node.timestamp=Date.now()),ft}}),R.mkdev(C,F,G)},forceLoadFile(c){if(c.isDevice||c.isFolder||c.link||c.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{c.contents=I(c.url),c.usedBytes=c.contents.length}catch{throw new R.ErrnoError(29)}},createLazyFile(c,d,g,y,C){class F{constructor(){this.lengthKnown=!1,this.chunks=[]}get(et){if(!(et>this.length-1||et<0)){var St=et%this.chunkSize,Nt=et/this.chunkSize|0;return this.getter(Nt)[St]}}setDataGetter(et){this.getter=et}cacheLength(){var et=new XMLHttpRequest;if(et.open("HEAD",g,!1),et.send(null),!(et.status>=200&&et.status<300||et.status===304))throw new Error("Couldn't load "+g+". Status: "+et.status);var St=Number(et.getResponseHeader("Content-length")),Nt,bn=(Nt=et.getResponseHeader("Accept-Ranges"))&&Nt==="bytes",gn=(Nt=et.getResponseHeader("Content-Encoding"))&&Nt==="gzip",ii=1024*1024;bn||(ii=St);var ai=(jn,Ra)=>{if(jn>Ra)throw new Error("invalid range ("+jn+", "+Ra+") or no bytes requested!");if(Ra>St-1)throw new Error("only "+St+" bytes available! programmer error!");var An=new XMLHttpRequest;if(An.open("GET",g,!1),St!==ii&&An.setRequestHeader("Range","bytes="+jn+"-"+Ra),An.responseType="arraybuffer",An.overrideMimeType&&An.overrideMimeType("text/plain; charset=x-user-defined"),An.send(null),!(An.status>=200&&An.status<300||An.status===304))throw new Error("Couldn't load "+g+". Status: "+An.status);return An.response!==void 0?new Uint8Array(An.response||[]):Ve(An.responseText||"")},Aa=this;Aa.setDataGetter(jn=>{var Ra=jn*ii,An=(jn+1)*ii-1;if(An=Math.min(An,St-1),typeof Aa.chunks[jn]>"u"&&(Aa.chunks[jn]=ai(Ra,An)),typeof Aa.chunks[jn]>"u")throw new Error("doXHR failed!");return Aa.chunks[jn]}),(gn||!St)&&(ii=St=1,St=this.getter(0).length,ii=St,V("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=St,this._chunkSize=ii,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!b)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var G=new F,Z={isDevice:!1,contents:G}}else var Z={isDevice:!1,url:g};var xe=R.createFile(c,d,Z,y,C);Z.contents?xe.contents=Z.contents:Z.url&&(xe.contents=null,xe.url=Z.url),Object.defineProperties(xe,{usedBytes:{get:function(){return this.contents.length}}});var Oe={},je=Object.keys(xe.stream_ops);je.forEach(ft=>{var et=xe.stream_ops[ft];Oe[ft]=(...St)=>(R.forceLoadFile(xe),et(...St))});function rt(ft,et,St,Nt,bn){var gn=ft.node.contents;if(bn>=gn.length)return 0;var ii=Math.min(gn.length-bn,Nt);if(gn.slice)for(var ai=0;ai<ii;ai++)et[St+ai]=gn[bn+ai];else for(var ai=0;ai<ii;ai++)et[St+ai]=gn.get(bn+ai);return ii}return Oe.read=(ft,et,St,Nt,bn)=>(R.forceLoadFile(xe),rt(ft,et,St,Nt,bn)),Oe.mmap=(ft,et,St,Nt,bn)=>{R.forceLoadFile(xe);var gn=Mt(et);if(!gn)throw new R.ErrnoError(48);return rt(ft,se,gn,et,St),{ptr:gn,allocated:!0}},xe.stream_ops=Oe,xe}},Sa=(c,d)=>c?Ye(ue,c,d):"",Gt={DEFAULT_POLLMASK:5,calculateAt(c,d,g){if(He.isAbs(d))return d;var y;if(c===-100)y=R.cwd();else{var C=Gt.getStreamFromFD(c);y=C.path}if(d.length==0){if(!g)throw new R.ErrnoError(44);return y}return He.join2(y,d)},doStat(c,d,g){var y=c(d);z[g>>2]=y.dev,z[g+4>>2]=y.mode,$[g+8>>2]=y.nlink,z[g+12>>2]=y.uid,z[g+16>>2]=y.gid,z[g+20>>2]=y.rdev,Ze=[y.size>>>0,(re=y.size,+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],z[g+24>>2]=Ze[0],z[g+28>>2]=Ze[1],z[g+32>>2]=4096,z[g+36>>2]=y.blocks;var C=y.atime.getTime(),F=y.mtime.getTime(),G=y.ctime.getTime();return Ze=[Math.floor(C/1e3)>>>0,(re=Math.floor(C/1e3),+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],z[g+40>>2]=Ze[0],z[g+44>>2]=Ze[1],$[g+48>>2]=C%1e3*1e3*1e3,Ze=[Math.floor(F/1e3)>>>0,(re=Math.floor(F/1e3),+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],z[g+56>>2]=Ze[0],z[g+60>>2]=Ze[1],$[g+64>>2]=F%1e3*1e3*1e3,Ze=[Math.floor(G/1e3)>>>0,(re=Math.floor(G/1e3),+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],z[g+72>>2]=Ze[0],z[g+76>>2]=Ze[1],$[g+80>>2]=G%1e3*1e3*1e3,Ze=[y.ino>>>0,(re=y.ino,+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],z[g+88>>2]=Ze[0],z[g+92>>2]=Ze[1],0},doMsync(c,d,g,y,C){if(!R.isFile(d.node.mode))throw new R.ErrnoError(43);if(y&2)return 0;var F=ue.slice(c,c+g);R.msync(d,F,C,g,y)},getStreamFromFD(c){var d=R.getStreamChecked(c);return d},varargs:void 0,getStr(c){var d=Sa(c);return d}};function ui(c,d){try{return c=Gt.getStr(c),R.chmod(c,d),0}catch(g){if(typeof R>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function En(c,d,g,y){try{if(d=Gt.getStr(d),d=Gt.calculateAt(c,d),g&-8)return-28;var C=R.lookupPath(d,{follow:!0}),F=C.node;if(!F)return-44;var G="";return g&4&&(G+="r"),g&2&&(G+="w"),g&1&&(G+="x"),G&&R.nodePermissions(F,G)?-2:0}catch(Z){if(typeof R>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function yn(){var c=z[+Gt.varargs>>2];return Gt.varargs+=4,c}var ni=yn;function tr(c,d,g){Gt.varargs=g;try{var y=Gt.getStreamFromFD(c);switch(d){case 0:{var C=yn();if(C<0)return-28;for(;R.streams[C];)C++;var F;return F=R.dupStream(y,C),F.fd}case 1:case 2:return 0;case 3:return y.flags;case 4:{var C=yn();return y.flags|=C,0}case 12:{var C=ni(),G=0;return Me[C+G>>1]=2,0}case 13:case 14:return 0}return-28}catch(Z){if(typeof R>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function Ho(c,d){try{var g=Gt.getStreamFromFD(c);return Gt.doStat(R.stat,g.path,d)}catch(y){if(typeof R>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function Vo(c,d,g){Gt.varargs=g;try{var y=Gt.getStreamFromFD(c);switch(d){case 21509:return y.tty?0:-59;case 21505:{if(!y.tty)return-59;if(y.tty.ops.ioctl_tcgets){var C=y.tty.ops.ioctl_tcgets(y),F=ni();z[F>>2]=C.c_iflag||0,z[F+4>>2]=C.c_oflag||0,z[F+8>>2]=C.c_cflag||0,z[F+12>>2]=C.c_lflag||0;for(var G=0;G<32;G++)se[F+G+17]=C.c_cc[G]||0;return 0}return 0}case 21510:case 21511:case 21512:return y.tty?0:-59;case 21506:case 21507:case 21508:{if(!y.tty)return-59;if(y.tty.ops.ioctl_tcsets){for(var F=ni(),Z=z[F>>2],xe=z[F+4>>2],Oe=z[F+8>>2],je=z[F+12>>2],rt=[],G=0;G<32;G++)rt.push(se[F+G+17]);return y.tty.ops.ioctl_tcsets(y.tty,d,{c_iflag:Z,c_oflag:xe,c_cflag:Oe,c_lflag:je,c_cc:rt})}return 0}case 21519:{if(!y.tty)return-59;var F=ni();return z[F>>2]=0,0}case 21520:return y.tty?-28:-59;case 21531:{var F=ni();return R.ioctl(y,d,F)}case 21523:{if(!y.tty)return-59;if(y.tty.ops.ioctl_tiocgwinsz){var ft=y.tty.ops.ioctl_tiocgwinsz(y.tty),F=ni();Me[F>>1]=ft[0],Me[F+2>>1]=ft[1]}return 0}case 21524:return y.tty?0:-59;case 21515:return y.tty?0:-59;default:return-28}}catch(et){if(typeof R>"u"||et.name!=="ErrnoError")throw et;return-et.errno}}function As(c,d){try{return c=Gt.getStr(c),Gt.doStat(R.lstat,c,d)}catch(g){if(typeof R>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function ba(c,d,g,y){try{d=Gt.getStr(d);var C=y&256,F=y&4096;return y=y&-6401,d=Gt.calculateAt(c,d,F),Gt.doStat(C?R.lstat:R.stat,d,g)}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return-G.errno}}function kr(c,d,g,y){Gt.varargs=y;try{d=Gt.getStr(d),d=Gt.calculateAt(c,d);var C=y?yn():0;return R.open(d,g,C).fd}catch(F){if(typeof R>"u"||F.name!=="ErrnoError")throw F;return-F.errno}}function la(c){try{return c=Gt.getStr(c),R.rmdir(c),0}catch(d){if(typeof R>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function L(c,d){try{return c=Gt.getStr(c),Gt.doStat(R.stat,c,d)}catch(g){if(typeof R>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function te(c,d,g){try{return d=Gt.getStr(d),d=Gt.calculateAt(c,d),g===0?R.unlink(d):g===512?R.rmdir(d):gt("Invalid flags passed to unlinkat"),0}catch(y){if(typeof R>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}var ge=()=>{gt("")},le=(c,d,g,y,C)=>{},ae=()=>{for(var c=new Array(256),d=0;d<256;++d)c[d]=String.fromCharCode(d);Be=c},Be,ze=c=>{for(var d="",g=c;ue[g];)d+=Be[ue[g++]];return d},Ke={},Qe={},pt={},xt,at=c=>{throw new xt(c)},Ct,Yt=c=>{throw new Ct(c)},en=(c,d,g)=>{c.forEach(Z=>pt[Z]=d);function y(Z){var xe=g(Z);xe.length!==c.length&&Yt("Mismatched type converter count");for(var Oe=0;Oe<c.length;++Oe)Bt(c[Oe],xe[Oe])}var C=new Array(d.length),F=[],G=0;d.forEach((Z,xe)=>{Qe.hasOwnProperty(Z)?C[xe]=Qe[Z]:(F.push(Z),Ke.hasOwnProperty(Z)||(Ke[Z]=[]),Ke[Z].push(()=>{C[xe]=Qe[Z],++G,G===F.length&&y(C)}))}),F.length===0&&y(C)};function kt(c,d,g={}){var y=d.name;if(c||at(`type "${y}" must have a positive integer typeid pointer`),Qe.hasOwnProperty(c)){if(g.ignoreDuplicateRegistrations)return;at(`Cannot register type '${y}' twice`)}if(Qe[c]=d,delete pt[c],Ke.hasOwnProperty(c)){var C=Ke[c];delete Ke[c],C.forEach(F=>F())}}function Bt(c,d,g={}){return kt(c,d,g)}var ut=8,sn=(c,d,g,y)=>{d=ze(d),Bt(c,{name:d,fromWireType:function(C){return!!C},toWireType:function(C,F){return F?g:y},argPackAdvance:ut,readValueFromPointer:function(C){return this.fromWireType(ue[C])},destructorFunction:null})},Ht=[],cn=[],Oi=c=>{c>9&&--cn[c+1]===0&&(cn[c]=void 0,Ht.push(c))},un=()=>cn.length/2-5-Ht.length,Yi=()=>{cn.push(0,1,void 0,1,null,1,!0,1,!1,1),p.count_emval_handles=un},Rt={toValue:c=>(c||at("Cannot use deleted val. handle = "+c),cn[c]),toHandle:c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const d=Ht.pop()||cn.length;return cn[d]=c,cn[d+1]=1,d}}}};function Tn(c){return this.fromWireType($[c>>2])}var Un={name:"emscripten::val",fromWireType:c=>{var d=Rt.toValue(c);return Oi(c),d},toWireType:(c,d)=>Rt.toHandle(d),argPackAdvance:ut,readValueFromPointer:Tn,destructorFunction:null},Pn=c=>Bt(c,Un),Gn=(c,d)=>{switch(d){case 4:return function(g){return this.fromWireType(ie[g>>2])};case 8:return function(g){return this.fromWireType(Te[g>>3])};default:throw new TypeError(`invalid float width (${d}): ${c}`)}},Pi=(c,d,g)=>{d=ze(d),Bt(c,{name:d,fromWireType:y=>y,toWireType:(y,C)=>C,argPackAdvance:ut,readValueFromPointer:Gn(d,g),destructorFunction:null})},mi=(c,d)=>Object.defineProperty(d,"name",{value:c}),Go=c=>{for(;c.length;){var d=c.pop(),g=c.pop();g(d)}};function ko(c){for(var d=1;d<c.length;++d)if(c[d]!==null&&c[d].destructorFunction===void 0)return!0;return!1}function Rs(c,d){if(!(c instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof c} which is not a function`);var g=mi(c.name||"unknownFunctionName",function(){});g.prototype=c.prototype;var y=new g,C=c.apply(y,d);return C instanceof Object?C:y}function nf(c,d,g,y){for(var C=ko(c),F=c.length-2,G=[],Z=["fn"],xe=0;xe<F;++xe)G.push(`arg${xe}`),Z.push(`arg${xe}Wired`);G=G.join(","),Z=Z.join(",");var Oe=`return function (${G}) {
`;C&&(Oe+=`var destructors = [];
`);for(var je=C?"destructors":"null",rt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],xe=0;xe<F;++xe)Oe+=`var arg${xe}Wired = argType${xe}['toWireType'](${je}, arg${xe});
`,rt.push(`argType${xe}`);if(Oe+=(g||y?"var rv = ":"")+`invoker(${Z});
`,C)Oe+=`runDestructors(destructors);
`;else for(var xe=2;xe<c.length;++xe){var ft=xe===1?"thisWired":"arg"+(xe-2)+"Wired";c[xe].destructorFunction!==null&&(Oe+=`${ft}_dtor(${ft});
`,rt.push(`${ft}_dtor`))}return g&&(Oe+=`var ret = retType['fromWireType'](rv);
return ret;
`),Oe+=`}
`,[rt,Oe]}function af(c,d,g,y,C,F){var G=d.length;G<2&&at("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Z=d[1]!==null&&g!==null,xe=ko(d),Oe=d[0].name!=="void",je=[c,at,y,C,Go,d[0],d[1]],rt=0;rt<G-2;++rt)je.push(d[rt+2]);if(!xe)for(var rt=2;rt<d.length;++rt)d[rt].destructorFunction!==null&&je.push(d[rt].destructorFunction);let[ft,et]=nf(d,Z,Oe,F);ft.push(et);var St=Rs(Function,ft)(...je);return mi(c,St)}var ws=(c,d,g)=>{if(c[d].overloadTable===void 0){var y=c[d];c[d]=function(...C){return c[d].overloadTable.hasOwnProperty(C.length)||at(`Function '${g}' called with an invalid number of arguments (${C.length}) - expects one of (${c[d].overloadTable})!`),c[d].overloadTable[C.length].apply(this,C)},c[d].overloadTable=[],c[d].overloadTable[y.argCount]=y}},ji=(c,d,g)=>{p.hasOwnProperty(c)?((g===void 0||p[c].overloadTable!==void 0&&p[c].overloadTable[g]!==void 0)&&at(`Cannot register public name '${c}' twice`),ws(p,c,c),p.hasOwnProperty(g)&&at(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),p[c].overloadTable[g]=d):(p[c]=d,g!==void 0&&(p[c].numArguments=g))},Xo=(c,d)=>{for(var g=[],y=0;y<c;y++)g.push($[d+y*4>>2]);return g},Wo=(c,d,g)=>{p.hasOwnProperty(c)||Yt("Replacing nonexistent public symbol"),p[c].overloadTable!==void 0&&g!==void 0?p[c].overloadTable[g]=d:(p[c]=d,p[c].argCount=g)},nr=(c,d,g)=>{c=c.replace(/p/g,"i");var y=p["dynCall_"+c];return y(d,...g)},Zi=[],qo,Cs=c=>{var d=Zi[c];return d||(c>=Zi.length&&(Zi.length=c+1),Zi[c]=d=qo.get(c)),d},$l=(c,d,g=[])=>{if(c.includes("j"))return nr(c,d,g);var y=Cs(d)(...g);return y},Xr=(c,d)=>(...g)=>$l(c,d,g),Ki=(c,d)=>{c=ze(c);function g(){return c.includes("j")?Xr(c,d):Cs(d)}var y=g();return typeof y!="function"&&at(`unknown function pointer with signature ${c}: ${d}`),y},Yo=(c,d)=>{var g=mi(d,function(y){this.name=d,this.message=y;var C=new Error(y).stack;C!==void 0&&(this.stack=this.toString()+`
`+C.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(c.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g},ir,Qi=c=>{var d=el(c),g=ze(d);return Ji(d),g},jo=(c,d)=>{var g=[],y={};function C(F){if(!y[F]&&!Qe[F]){if(pt[F]){pt[F].forEach(C);return}g.push(F),y[F]=!0}}throw d.forEach(C),new ir(`${c}: `+g.map(Qi).join([", "]))},Ds=c=>{c=c.trim();const d=c.indexOf("(");return d!==-1?c.substr(0,d):c},ec=(c,d,g,y,C,F,G,Z)=>{var xe=Xo(d,g);c=ze(c),c=Ds(c),C=Ki(y,C),ji(c,function(){jo(`Cannot call ${c} due to unbound types`,xe)},d-1),en([],xe,Oe=>{var je=[Oe[0],null].concat(Oe.slice(1));return Wo(c,af(c,je,null,C,F,G),d-1),[]})},Us=(c,d,g)=>{switch(d){case 1:return g?y=>se[y]:y=>ue[y];case 2:return g?y=>Me[y>>1]:y=>Se[y>>1];case 4:return g?y=>z[y>>2]:y=>$[y>>2];default:throw new TypeError(`invalid integer width (${d}): ${c}`)}},Ls=(c,d,g,y,C)=>{d=ze(d);var F=je=>je;if(y===0){var G=32-8*g;F=je=>je<<G>>>G}var Z=d.includes("unsigned"),xe=(je,rt)=>{},Oe;Z?Oe=function(je,rt){return xe(rt,this.name),rt>>>0}:Oe=function(je,rt){return xe(rt,this.name),rt},Bt(c,{name:d,fromWireType:F,toWireType:Oe,argPackAdvance:ut,readValueFromPointer:Us(d,g,y!==0),destructorFunction:null})},tc=(c,d,g)=>{var y=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],C=y[d];function F(G){var Z=$[G>>2],xe=$[G+4>>2];return new C(se.buffer,xe,Z)}g=ze(g),Bt(c,{name:g,fromWireType:F,argPackAdvance:ut,readValueFromPointer:F},{ignoreDuplicateRegistrations:!0})},Ln=(c,d,g)=>Xe(c,ue,d,g),Ma=(c,d)=>{d=ze(d);var g=d==="std::string";Bt(c,{name:d,fromWireType(y){var C=$[y>>2],F=y+4,G;if(g)for(var Z=F,xe=0;xe<=C;++xe){var Oe=F+xe;if(xe==C||ue[Oe]==0){var je=Oe-Z,rt=Sa(Z,je);G===void 0?G=rt:(G+="\0",G+=rt),Z=Oe+1}}else{for(var ft=new Array(C),xe=0;xe<C;++xe)ft[xe]=String.fromCharCode(ue[F+xe]);G=ft.join("")}return Ji(y),G},toWireType(y,C){C instanceof ArrayBuffer&&(C=new Uint8Array(C));var F,G=typeof C=="string";G||C instanceof Uint8Array||C instanceof Uint8ClampedArray||C instanceof Int8Array||at("Cannot pass non-string to std::string"),g&&G?F=j(C):F=C.length;var Z=Jr(4+F+1),xe=Z+4;if($[Z>>2]=F,g&&G)Ln(C,xe,F+1);else if(G)for(var Oe=0;Oe<F;++Oe){var je=C.charCodeAt(Oe);je>255&&(Ji(xe),at("String has UTF-16 code units that do not fit in 8 bits")),ue[xe+Oe]=je}else for(var Oe=0;Oe<F;++Oe)ue[xe+Oe]=C[Oe];return y!==null&&y.push(Ji,Z),Z},argPackAdvance:ut,readValueFromPointer:Tn,destructorFunction(y){Ji(y)}})},Wr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,qr=(c,d)=>{for(var g=c,y=g>>1,C=y+d/2;!(y>=C)&&Se[y];)++y;if(g=y<<1,g-c>32&&Wr)return Wr.decode(ue.subarray(c,g));for(var F="",G=0;!(G>=d/2);++G){var Z=Me[c+G*2>>1];if(Z==0)break;F+=String.fromCharCode(Z)}return F},rf=(c,d,g)=>{if(g??=2147483647,g<2)return 0;g-=2;for(var y=d,C=g<c.length*2?g/2:c.length,F=0;F<C;++F){var G=c.charCodeAt(F);Me[d>>1]=G,d+=2}return Me[d>>1]=0,d-y},Zo=c=>c.length*2,Ko=(c,d)=>{for(var g=0,y="";!(g>=d/4);){var C=z[c+g*4>>2];if(C==0)break;if(++g,C>=65536){var F=C-65536;y+=String.fromCharCode(55296|F>>10,56320|F&1023)}else y+=String.fromCharCode(C)}return y},Yr=(c,d,g)=>{if(g??=2147483647,g<4)return 0;for(var y=d,C=y+g-4,F=0;F<c.length;++F){var G=c.charCodeAt(F);if(G>=55296&&G<=57343){var Z=c.charCodeAt(++F);G=65536+((G&1023)<<10)|Z&1023}if(z[d>>2]=G,d+=4,d+4>C)break}return z[d>>2]=0,d-y},Ns=c=>{for(var d=0,g=0;g<c.length;++g){var y=c.charCodeAt(g);y>=55296&&y<=57343&&++g,d+=4}return d},nc=(c,d,g)=>{g=ze(g);var y,C,F,G;d===2?(y=qr,C=rf,G=Zo,F=Z=>Se[Z>>1]):d===4&&(y=Ko,C=Yr,G=Ns,F=Z=>$[Z>>2]),Bt(c,{name:g,fromWireType:Z=>{for(var xe=$[Z>>2],Oe,je=Z+4,rt=0;rt<=xe;++rt){var ft=Z+4+rt*d;if(rt==xe||F(ft)==0){var et=ft-je,St=y(je,et);Oe===void 0?Oe=St:(Oe+="\0",Oe+=St),je=ft+d}}return Ji(Z),Oe},toWireType:(Z,xe)=>{typeof xe!="string"&&at(`Cannot pass non-string to C++ string type ${g}`);var Oe=G(xe),je=Jr(4+Oe+d);return $[je>>2]=Oe/d,C(xe,je+4,Oe+d),Z!==null&&Z.push(Ji,je),je},argPackAdvance:ut,readValueFromPointer:Tn,destructorFunction(Z){Ji(Z)}})},sf=(c,d)=>{d=ze(d),Bt(c,{isVoid:!0,name:d,argPackAdvance:0,fromWireType:()=>{},toWireType:(g,y)=>{}})},of=1,lf=()=>of,Os=c=>{for(var d=c.split("."),g=0;g<4;g++){var y=Number(d[g]);if(isNaN(y))return null;d[g]=y}return(d[0]|d[1]<<8|d[2]<<16|d[3]<<24)>>>0},Ps=c=>parseInt(c),cf=c=>{var d,g,y,C,F=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,G=[];if(!F.test(c))return null;if(c==="::")return[0,0,0,0,0,0,0,0];for(c.startsWith("::")?c=c.replace("::","Z:"):c=c.replace("::",":Z:"),c.indexOf(".")>0?(c=c.replace(new RegExp("[.]","g"),":"),d=c.split(":"),d[d.length-4]=Ps(d[d.length-4])+Ps(d[d.length-3])*256,d[d.length-3]=Ps(d[d.length-2])+Ps(d[d.length-1])*256,d=d.slice(0,d.length-2)):d=c.split(":"),y=0,C=0,g=0;g<d.length;g++)if(typeof d[g]=="string")if(d[g]==="Z"){for(C=0;C<8-d.length+1;C++)G[g+C]=0;y=C-1}else G[g+y]=Ta(parseInt(d[g],16));else G[g+y]=d[g];return[G[1]<<16|G[0],G[3]<<16|G[2],G[5]<<16|G[4],G[7]<<16|G[6]]},ca={address_map:{id:1,addrs:{},names:{}},lookup_name(c){var d=Os(c);if(d!==null||(d=cf(c),d!==null))return c;var g;if(ca.address_map.addrs[c])g=ca.address_map.addrs[c];else{var y=ca.address_map.id++;J(y<65535,"exceeded max address mappings of 65535"),g="172.29."+(y&255)+"."+(y&65280),ca.address_map.names[g]=c,ca.address_map.addrs[c]=g}return g},lookup_addr(c){return ca.address_map.names[c]?ca.address_map.names[c]:null}},uf=c=>{var d=Sa(c);return Os(ca.lookup_name(d))},ff=(c,d,g)=>ue.copyWithin(c,d,d+g),Fs=(c,d)=>{var g=Qe[c];return g===void 0&&at(`${d} has unknown type ${Qi(c)}`),g},ic=(c,d,g)=>{var y=[],C=c.toWireType(y,g);return y.length&&($[d>>2]=Rt.toHandle(y)),C},hf=(c,d,g)=>(c=Rt.toValue(c),d=Fs(d,"emval::as"),ic(d,g,c)),df={},Qo=c=>{var d=df[c];return d===void 0?ze(c):d},jr=[],pf=(c,d,g,y,C)=>(c=jr[c],d=Rt.toValue(d),g=Qo(g),c(d,d[g],y,C)),ac=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),mf=c=>c===0?Rt.toHandle(ac()):(c=Qo(c),Rt.toHandle(ac()[c])),rc=c=>{var d=jr.length;return jr.push(c),d},_f=(c,d)=>{for(var g=new Array(c),y=0;y<c;++y)g[y]=Fs($[d+y*4>>2],"parameter "+y);return g},gf=(c,d,g)=>{var y=_f(c,d),C=y.shift();c--;var F=`return function (obj, func, destructorsRef, args) {
`,G=0,Z=[];g===0&&Z.push("obj");for(var xe=["retType"],Oe=[C],je=0;je<c;++je)Z.push("arg"+je),xe.push("argType"+je),Oe.push(y[je]),F+=`  var arg${je} = argType${je}.readValueFromPointer(args${G?"+"+G:""});
`,G+=y[je].argPackAdvance;var rt=g===1?"new func":"func.call";F+=`  var rv = ${rt}(${Z.join(", ")});
`,C.isVoid||(xe.push("emval_returnValue"),Oe.push(ic),F+=`  return emval_returnValue(retType, destructorsRef, rv);
`),F+=`};
`,xe.push(F);var ft=Rs(Function,xe)(...Oe),et=`methodCaller<(${y.map(St=>St.name).join(", ")}) => ${C.name}>`;return rc(mi(et,ft))},xf=(c,d)=>(c=Rt.toValue(c),d=Rt.toValue(d),Rt.toHandle(c[d])),vf=c=>{c>9&&(cn[c+1]+=1)},yf=()=>Rt.toHandle([]),Sf=c=>Rt.toHandle(Qo(c)),bf=()=>Rt.toHandle({}),Mf=c=>{var d=Rt.toValue(c);Go(d),Oi(c)},Ef=(c,d,g)=>{c=Rt.toValue(c),d=Rt.toValue(d),g=Rt.toValue(g),c[d]=g},Jo=(c,d)=>{c=Fs(c,"_emval_take_value");var g=c.readValueFromPointer(d);return Rt.toHandle(g)},Zr=c=>c%4===0&&(c%100!==0||c%400===0),Tf=[0,31,60,91,121,152,182,213,244,274,305,335],sc=[0,31,59,90,120,151,181,212,243,273,304,334],oc=c=>{var d=Zr(c.getFullYear()),g=d?Tf:sc,y=g[c.getMonth()]+c.getDate()-1;return y},zs=(c,d)=>d+2097152>>>0<4194305-!!c?(c>>>0)+d*4294967296:NaN;function lc(c,d,g){var y=zs(c,d),C=new Date(y*1e3);z[g>>2]=C.getSeconds(),z[g+4>>2]=C.getMinutes(),z[g+8>>2]=C.getHours(),z[g+12>>2]=C.getDate(),z[g+16>>2]=C.getMonth(),z[g+20>>2]=C.getFullYear()-1900,z[g+24>>2]=C.getDay();var F=oc(C)|0;z[g+28>>2]=F,z[g+36>>2]=-(C.getTimezoneOffset()*60);var G=new Date(C.getFullYear(),0,1),Z=new Date(C.getFullYear(),6,1).getTimezoneOffset(),xe=G.getTimezoneOffset(),Oe=(Z!=xe&&C.getTimezoneOffset()==Math.min(xe,Z))|0;z[g+32>>2]=Oe}function cc(c,d,g,y,C,F,G){var Z=zs(F,G);try{var xe=Gt.getStreamFromFD(C);g&2&&Gt.doMsync(c,xe,d,y,Z)}catch(Oe){if(typeof R>"u"||Oe.name!=="ErrnoError")throw Oe;return-Oe.errno}}var ar=(c,d,g,y)=>{var C=new Date().getFullYear(),F=new Date(C,0,1),G=new Date(C,6,1),Z=F.getTimezoneOffset(),xe=G.getTimezoneOffset(),Oe=Math.max(Z,xe);$[c>>2]=Oe*60,z[d>>2]=+(Z!=xe);var je=et=>{var St=et>=0?"-":"+",Nt=Math.abs(et),bn=String(Math.floor(Nt/60)).padStart(2,"0"),gn=String(Nt%60).padStart(2,"0");return`UTC${St}${bn}${gn}`},rt=je(Z),ft=je(xe);xe<Z?(Ln(rt,g,17),Ln(ft,y,17)):(Ln(rt,y,17),Ln(ft,g,17))},Af=()=>Date.now();function Rf(){return new Error().stack.toString()}var Bs=c=>{Bs.shown||={},Bs.shown[c]||(Bs.shown[c]=1,E&&(c="warning: "+c),k(c))};function uc(c){var d=Rf(),g=d.lastIndexOf("_emscripten_log"),y=d.lastIndexOf("_emscripten_get_callstack"),C=d.indexOf(`
`,Math.max(g,y))+1;d=d.slice(C),c&8&&typeof emscripten_source_map>"u"&&(Bs('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),c^=8,c|=16);var F=d.split(`
`);d="";var G=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),Z=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),xe=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Oe in F){var je=F[Oe],rt="",ft="",et=0,St=0,Nt=xe.exec(je);if(Nt&&Nt.length==5)rt=Nt[1],ft=Nt[2],et=Nt[3],St=Nt[4];else if(Nt=G.exec(je)||Z.exec(je),Nt&&Nt.length>=4)rt=Nt[1],ft=Nt[2],et=Nt[3],St=Nt[4]|0;else{d+=je+`
`;continue}var bn=!1;if(c&8){var gn=emscripten_source_map.originalPositionFor({line:et,column:St});bn=gn?.source,bn&&(c&64&&(gn.source=gn.source.substring(gn.source.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=`    at ${rt} (${gn.source}:${gn.line}:${gn.column})
`)}(c&16||!bn)&&(c&64&&(ft=ft.substring(ft.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=(bn?`     = ${rt}`:`    at ${rt}`)+` (${ft}:${et}:${St})
`)}return d=d.replace(/\s+$/,""),d}function fc(c,d,g){var y=uc(c);if(!d||g<=0)return j(y)+1;var C=Ln(y,d,g);return C+1}var rr=()=>2147483648,Kr=()=>rr(),wf=c=>{var d=P.buffer,g=(c-d.byteLength+65535)/65536|0;try{return P.grow(g),Ce(),1}catch{}},Is=c=>{var d=ue.length;c>>>=0;var g=rr();if(c>g)return!1;for(var y=1;y<=4;y*=2){var C=d*(1+.2/y);C=Math.min(C,c+100663296);var F=Math.min(g,nt(Math.max(c,C),65536)),G=wf(F);if(G)return!0}return!1},Hs={},hc=()=>U||"./this.program",Ea=()=>{if(!Ea.strings){var c=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:c,_:hc()};for(var g in Hs)Hs[g]===void 0?delete d[g]:d[g]=Hs[g];var y=[];for(var g in d)y.push(`${g}=${d[g]}`);Ea.strings=y}return Ea.strings},$o=(c,d)=>{for(var g=0;g<c.length;++g)se[d++]=c.charCodeAt(g);se[d]=0},dc=(c,d)=>{var g=0;return Ea().forEach((y,C)=>{var F=d+g;$[c+C*4>>2]=F,$o(y,F),g+=y.length+1}),0},pc=(c,d)=>{var g=Ea();$[c>>2]=g.length;var y=0;return g.forEach(C=>y+=C.length+1),$[d>>2]=y,0},mc=c=>{N(c,new We(c))},Cf=(c,d)=>{mc(c)},Df=Cf;function Uf(c){try{var d=Gt.getStreamFromFD(c);return R.close(d),0}catch(g){if(typeof R>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var Lf=(c,d,g,y)=>{for(var C=0,F=0;F<g;F++){var G=$[d>>2],Z=$[d+4>>2];d+=8;var xe=R.read(c,se,G,Z,y);if(xe<0)return-1;if(C+=xe,xe<Z)break}return C};function Nf(c,d,g,y){try{var C=Gt.getStreamFromFD(c),F=Lf(C,d,g);return $[y>>2]=F,0}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return G.errno}}function fi(c,d,g,y,C){var F=zs(d,g);try{if(isNaN(F))return 61;var G=Gt.getStreamFromFD(c);return R.llseek(G,F,y),Ze=[G.position>>>0,(re=G.position,+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],z[C>>2]=Ze[0],z[C+4>>2]=Ze[1],G.getdents&&F===0&&y===0&&(G.getdents=null),0}catch(Z){if(typeof R>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}var Qr=(c,d,g,y)=>{for(var C=0,F=0;F<g;F++){var G=$[d>>2],Z=$[d+4>>2];d+=8;var xe=R.write(c,se,G,Z,y);if(xe<0)return-1;if(C+=xe,xe<Z)break}return C};function _c(c,d,g,y){try{var C=Gt.getStreamFromFD(c),F=Qr(C,d,g);return $[y>>2]=F,0}catch(G){if(typeof R>"u"||G.name!=="ErrnoError")throw G;return G.errno}}R.createPreloadedFile=Vr,R.staticInit(),ae(),xt=p.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},Ct=p.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},Yi(),ir=p.UnboundTypeError=Yo(Error,"UnboundTypeError");var gc={M:ui,N:En,h:tr,I:Ho,Q:Vo,F:As,G:ba,j:kr,B:la,H:L,C:te,A:ge,w:le,V:sn,U:Pn,n:Pi,f:ec,b:Ls,a:tc,m:Ma,i:nc,W:sf,J:lf,x:uf,L:ff,e:hf,q:pf,T:Oi,u:mf,p:gf,k:xf,Y:vf,X:yf,r:Sf,Z:bf,o:Mf,c:Ef,d:Jo,t:lc,s:cc,O:ar,K:Af,R:fc,z:Kr,y:Is,D:dc,E:pc,S:Df,g:Uf,P:Nf,v:fi,l:_c},Fn=Le(),el=c=>(el=Fn.aa)(c),Jr=c=>(Jr=Fn.ca)(c),Ji=c=>(Ji=Fn.da)(c),Ta=c=>(Ta=Fn.ea)(c),Vs=(c,d)=>(Vs=Fn.fa)(c,d),sr=()=>(sr=Fn.ga)();p.dynCall_viijii=(c,d,g,y,C,F,G)=>(p.dynCall_viijii=Fn.ha)(c,d,g,y,C,F,G),p.dynCall_viiiiji=(c,d,g,y,C,F,G,Z)=>(p.dynCall_viiiiji=Fn.ia)(c,d,g,y,C,F,G,Z),p.dynCall_jiji=(c,d,g,y,C)=>(p.dynCall_jiji=Fn.ja)(c,d,g,y,C),p.dynCall_iiiiij=(c,d,g,y,C,F,G)=>(p.dynCall_iiiiij=Fn.ka)(c,d,g,y,C,F,G),p.dynCall_iiiiijj=(c,d,g,y,C,F,G,Z,xe)=>(p.dynCall_iiiiijj=Fn.la)(c,d,g,y,C,F,G,Z,xe),p.dynCall_iiiiiijj=(c,d,g,y,C,F,G,Z,xe,Oe)=>(p.dynCall_iiiiiijj=Fn.ma)(c,d,g,y,C,F,G,Z,xe,Oe);var or,tl;Jt=function c(){or||ua(),or||(Jt=c)};function ua(){if(tt>0||!tl&&(tl=1,$e(),tt>0))return;function c(){or||(or=1,p.calledRun=1,!O&&(de(),m(p),p.onRuntimeInitialized?.(),Q()))}p.setStatus?(p.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>p.setStatus(""),1),c()},1)):c()}if(p.preInit)for(typeof p.preInit=="function"&&(p.preInit=[p.preInit]);p.preInit.length>0;)p.preInit.pop()();return ua(),f=_,f})})();o.exports=i})(np)),np.exports}var _T=mT();const gT=My(_T),xT="/step-3D-viewer/assets/occt-import-js-BhHfLpto.wasm";let ap=null;const vT={linearUnit:"millimeter",linearDeflectionType:"bounding_box_ratio",linearDeflection:.003,angularDeflection:.4};function Rx(){return ap||(ap=gT({locateFile:()=>xT})),ap}const yT="Перетащите .step/.stp файл в область просмотра или воспользуйтесь панелью управления.",ST="Загружаем движок OpenCascade...";function bT(){const o=Ft.useRef(null),e=Ft.useRef(null),i=Ft.useRef(null),r=Ft.useRef(null),l=Ft.useRef(null),f=Ft.useRef(null),p=Ft.useRef(0),m=Ft.useRef(null),x=Ft.useRef(null),_=-1e-4,S=Ft.useRef(new cb),b=Ft.useRef(new Ut),E=Ft.useRef(null),[A,U]=Ft.useState(ST),[N,T]=Ft.useState(null),[M,X]=Ft.useState(!1),[I,Y]=Ft.useState(!1),[ee,V]=Ft.useState(!1),[k,he]=Ft.useState(!1),[P,O]=Ft.useState("#ffad0d"),[J,se]=Ft.useState(null),ue=Ft.useCallback(Q=>{const ye=E.current;if(ye&&ye.material instanceof Gl){const Ie=ye.userData.baseEmissiveHex;typeof Ie=="number"&&ye.material.emissive.setHex(Ie)}Q&&Q.material instanceof Gl?(Q.userData.baseEmissiveHex===void 0&&(Q.userData.baseEmissiveHex=Q.material.emissive.getHex()),Q.material.emissive.setHex(2964090),E.current=Q,se(Q.name||"Без имени"),typeof Q.userData.paintColorHex=="string"&&O(Q.userData.paintColorHex)):(E.current=null,se(null))},[O]);Ft.useEffect(()=>{let Q=!0;return Rx().then(()=>{Q&&(he(!0),U(yT))}).catch(ye=>{console.error(ye),Q&&(T("Не удалось загрузить движок OpenCascade"),U("Попробуйте обновить страницу"))}),()=>{Q=!1}},[]),Ft.useEffect(()=>{if(!o.current)return;const Q=new KS;Q.background=new Kt("#06070f"),i.current=Q;const ye=new J3({antialias:!0,alpha:!0});ye.setPixelRatio(window.devicePixelRatio),e.current=ye;const Ie=new Wi(45,1,.1,2e3);Ie.position.set(4,4,4),r.current=Ie;const ke=new eT(Ie,ye.domElement);ke.enableDamping=!0,ke.dampingFactor=.08,l.current=ke;const tt=new ob(16777215,.6),Jt=new Kg(16777215,.85);Jt.position.set(5,10,4);const _t=new Kg(16777215,.45);_t.position.set(-4,-6,-5),Q.add(tt,Jt,_t);const At=new ub(20,20,3093826,1842985);At.position.y=_,x.current=At,Q.add(At);const W=o.current;W.appendChild(ye.domElement);const gt=qe=>{if(!r.current||!m.current){ue(null);return}const Lt=ye.domElement.getBoundingClientRect();b.current.x=(qe.clientX-Lt.left)/Lt.width*2-1,b.current.y=-((qe.clientY-Lt.top)/Lt.height)*2+1,S.current.setFromCamera(b.current,r.current);const st=m.current.children,yt=S.current.intersectObjects(st,!0);if(yt.length>0){const B=yt[0].object;B instanceof sa?ue(B):ue(null)}else ue(null)},Tt=()=>{if(!W||!r.current)return;const{clientWidth:qe,clientHeight:Lt}=W;ye.setSize(qe,Lt);const st=r.current;st.aspect=qe/Math.max(Lt,1),st.updateProjectionMatrix()};Tt(),window.addEventListener("resize",Tt),ye.domElement.addEventListener("pointerdown",gt);const Vt=()=>{ke.update(),ye.render(Q,Ie),f.current=requestAnimationFrame(Vt)};return Vt(),()=>{window.removeEventListener("resize",Tt),ye.domElement.removeEventListener("pointerdown",gt),f.current&&cancelAnimationFrame(f.current),ke.dispose(),ye.dispose(),W.contains(ye.domElement)&&W.removeChild(ye.domElement)}},[ue]);const Me=Ft.useCallback(()=>{!i.current||!m.current||(i.current.remove(m.current),m.current.traverse(Q=>{Q instanceof sa&&(Q.geometry.dispose(),Array.isArray(Q.material)?Q.material.forEach(ye=>ye.dispose()):Q.material.dispose())}),m.current=null,x.current&&(x.current.position.y=_),ue(null))},[ue]),Se=Ft.useCallback(Q=>{const ye=r.current,Ie=l.current;if(!ye||!Ie)return;Q.updateMatrixWorld(!0);const ke=new Ms().setFromObject(Q),tt=ke.getSize(new _e),Jt=ke.getCenter(new _e);Q.position.sub(Jt);const _t=Math.max(tt.x,tt.y,tt.z),At=_t===0?5:_t*1.6,W=new _e(1.5,1,1.2).normalize();ye.position.copy(W.multiplyScalar(At)),ye.near=Math.max(At/200,.01),ye.far=At*20,ye.updateProjectionMatrix(),Ie.target.set(0,0,0),Ie.update()},[]),z=Ft.useCallback(Q=>{if(!i.current)return;Me();const ye=new Xl;Q.meshes.forEach((tt,Jt)=>{const _t=new oa,At=tt.attributes.position?.array??[];_t.setAttribute("position",new Ni(At,3));const W=tt.attributes.normal?.array;W?.length?_t.setAttribute("normal",new Ni(W,3)):_t.computeVertexNormals(),tt.index?.array?.length&&_t.setIndex(tt.index.array);const gt=tt.color??tt.brep_faces?.find(st=>st.color)?.color??[.82,.86,.92],Tt=new Kt(gt[0],gt[1],gt[2]),Vt=new Gl({color:Tt,metalness:.15,roughness:.35,side:_a}),qe=`#${Tt.getHexString()}`,Lt=new sa(_t,Vt);Lt.name=tt.name??`Mesh-${Jt+1}`,Lt.userData.originalColorHex=qe,Lt.userData.paintColorHex=qe,ye.add(Lt)}),i.current.add(ye),m.current=ye,V(!0),Se(ye);const ke=new Ms().setFromObject(ye).min.y-.002;x.current&&(x.current.position.y=Number.isFinite(ke)?ke:_,x.current.visible=!0),ue(null)},[Me,Se,ue]),$=Ft.useCallback(()=>{const Q=E.current;return!Q||!(Q.material instanceof Gl)?!1:(Q.material.color.set(P),Q.material.needsUpdate=!0,Q.userData.paintColorHex=P,!0)},[P]),ie=Ft.useCallback(()=>{const Q=E.current;if(!Q||!(Q.material instanceof Gl))return!1;const ye=Q.userData.originalColorHex||"#d5dde8";return Q.material.color.set(ye),Q.material.needsUpdate=!0,Q.userData.paintColorHex=ye,!0},[]),Te=Ft.useCallback(async(Q,ye)=>{X(!0),T(null),U(`Импортируем ${ye}...`);try{const Ie=await Rx(),ke=new Uint8Array(Q),tt=Ie.ReadStepFile(ke,vT);if(!tt?.success||!tt.meshes?.length)throw new Error("OCCT вернул пустой результат");z(tt),U(`Готово: ${ye} (${tt.meshes.length} объектов)`)}catch(Ie){console.error(Ie),V(!1);const ke=Ie instanceof Error?Ie.message:"Неизвестная ошибка при импорте файла";T(ke),U("Импорт не удался")}finally{X(!1)}},[z]),Ce=Ft.useCallback(async Q=>{const ye=await Q.arrayBuffer();await Te(ye,Q.name)},[Te]),H=Ft.useCallback(async Q=>{const ye=Q.target.files?.[0];ye&&await Ce(ye),Q.target.value=""},[Ce]),me=Ft.useCallback(async(Q,ye="пример",Ie)=>{U(`Загружаем ${ye}...`),T(null);try{const ke=await fetch(Q);if(!ke.ok)throw new Error("Не удалось получить пример");const tt=await ke.arrayBuffer();await Te(tt,Ie??`${ye}.step`)}catch(ke){console.error(ke),T(ke instanceof Error?ke.message:"Ошибка загрузки примера"),U("Попробуйте другой файл")}},[Te]),De=Ft.useCallback(async Q=>{Q.preventDefault(),p.current=0,Y(!1);const ye=Q.dataTransfer.files?.[0];ye&&await Ce(ye)},[Ce]),Fe=Ft.useCallback(Q=>{Q.preventDefault(),Q.dataTransfer.dropEffect="copy"},[]),$e=Ft.useCallback(Q=>{Q.preventDefault(),p.current+=1,Y(!0)},[]),de=Ft.useCallback(Q=>{Q.preventDefault(),p.current=Math.max(p.current-1,0),p.current===0&&Y(!1)},[]);return{canvasHostRef:o,status:A,error:N,isLoading:M,occtReady:k,hasModel:ee,isDragActive:I,controlsDisabled:!k||M,handleDragEnter:$e,handleDragLeave:de,handleDragOver:Fe,handleDrop:De,handleFileInput:H,loadSample:me,selectionColor:P,setSelectionColor:O,selectedMeshName:J,applyColorToSelection:$,resetSelectionColor:ie}}function MT({canvasRef:o,hasModel:e,isDragActive:i,isLoading:r,isPanelOpen:l,panelId:f,onDragEnter:p,onDragLeave:m,onDragOver:x,onDrop:_,onTogglePanel:S,children:b}){return Et.jsxs("section",{className:`viewer ${i?"viewer--active":""}`,onDragEnter:p,onDragOver:x,onDragLeave:m,onDrop:_,children:[Et.jsx("div",{ref:o,className:"viewer__canvas"}),!e&&Et.jsxs("div",{className:"viewer__placeholder",children:[Et.jsx("p",{children:"Сюда можно перетащить .step/.stp файл."}),Et.jsx("p",{className:"muted",children:"Либо воспользуйтесь панелью управления."})]}),i&&Et.jsx("div",{className:"viewer__drop-hint",children:"Отпустите файл, чтобы начать импорт"}),r&&Et.jsxs("div",{className:"viewer__loading","aria-live":"polite",children:[Et.jsx("div",{className:"viewer__loading-spinner"}),Et.jsx("p",{children:"Импортируем модель..."})]}),!l&&Et.jsx("button",{type:"button",className:"panel-toggle","aria-expanded":!1,"aria-controls":f,onClick:S,children:"Меню"}),b]})}function ET({samples:o,disabled:e,onSelect:i}){return Et.jsxs("section",{className:"sample-library","aria-label":"Библиотека примеров",children:[Et.jsxs("div",{className:"sample-library__header",children:[Et.jsx("p",{className:"section-label",children:"Библиотека примеров"}),Et.jsx("span",{className:"sample-library__count",children:o.length})]}),Et.jsxs("div",{className:"sample-library__list",children:[o.length===0&&Et.jsxs("span",{className:"sample-library__empty",children:["Добавьте .step/.stp файлы в папку ",Et.jsx("code",{children:"public/models"})]}),o.map(r=>Et.jsxs("button",{type:"button",className:"sample-card",onClick:()=>i(r),disabled:e,title:`Открыть ${r.fileName}`,children:[Et.jsx("span",{className:"sample-card__label",children:r.label}),Et.jsx("span",{className:"sample-card__meta",children:r.fileName})]},r.fileName))]})]})}function TT({className:o,ariaHidden:e,error:i,isLoading:r,controlsDisabled:l,onFileChange:f,onHidePanel:p,selectionColor:m,onSelectionColorChange:x,selectedMeshName:_,onApplyColor:S,onResetColor:b,samples:E,onSampleSelect:A,children:U}){return Et.jsxs("aside",{id:"control-panel",className:o,"aria-hidden":e,children:[Et.jsx("button",{type:"button",className:"panel-close",onClick:p,"aria-label":"Скрыть меню",children:Et.jsx("span",{"aria-hidden":"true",children:"←"})}),Et.jsxs("div",{className:"panel__header",children:[Et.jsx("p",{className:"eyebrow",children:"WebAssembly + three.js"}),Et.jsx("h1",{children:"STEP 3D Viewer"}),Et.jsx("p",{className:"subtitle",children:"Просмотр .step/.stp файлов прямо в браузере: загрузите свой файл или воспользуйтесь готовым примером."})]}),Et.jsxs("div",{className:"controls",children:[Et.jsxs("label",{className:"file-input","data-disabled":l,children:[Et.jsx("input",{type:"file",accept:".step,.stp,model/step,application/step",onChange:f,disabled:l}),Et.jsx("span",{children:"Выбрать .step файл"})]}),r&&Et.jsx("div",{className:"loader","aria-live":"polite"})]}),Et.jsx(ET,{samples:E,disabled:l,onSelect:A}),i&&Et.jsx("div",{className:"error-banner",children:i}),Et.jsxs("div",{className:"color-controls",children:[Et.jsxs("div",{className:"color-input",children:[Et.jsx("label",{htmlFor:"color-picker",children:"Цвет"}),Et.jsx("input",{id:"color-picker",type:"color",value:m,onChange:x,"aria-label":"Выбор цвета для выделения"})]}),Et.jsxs("div",{className:"selection-info",children:[Et.jsx("span",{className:"selection-label",children:_?`Выбрано: ${_}`:"Ничего не выбрано"}),Et.jsxs("div",{className:"selection-actions",children:[Et.jsx("button",{type:"button",className:"secondary",onClick:S,disabled:!_,children:"Применить цвет"}),Et.jsx("button",{type:"button",className:"ghost",onClick:b,disabled:!_,children:"Сбросить"})]})]})]}),U]})}const AT=[{fileName:"ins100.stp",url:"/models/ins100.stp"},{fileName:"masterpact-lv864962.stp",url:"/models/masterpact-lv864962.stp"},{fileName:"nsx-lv432956.stp",url:"/models/nsx-lv432956.stp"}],RT=o=>o.replace(/\.(step|stp)$/i,"").replace(/[-_]+/g," "),wT=AT.map(({fileName:o,url:e})=>({label:RT(o),fileName:o,url:e})).sort((o,e)=>o.label.localeCompare(e.label,"ru"));function CT(){const o=bT(),[e,i]=Ft.useState(!1),[r,l]=Ft.useState(!1);Ft.useEffect(()=>{const m=window.matchMedia("(max-width: 768px)"),x=S=>{l(S),S&&i(!1)};x(m.matches);const _=S=>{x(S.matches),S.matches&&i(!1)};return m.addEventListener?m.addEventListener("change",_):m.addListener(_),()=>{m.removeEventListener?m.removeEventListener("change",_):m.removeListener(_)}},[]);const f=Ft.useMemo(()=>["control-panel",r?"control-panel--mobile":"",e?"control-panel--open":"control-panel--collapsed"].filter(Boolean).join(" "),[r,e]);return Et.jsx("div",{className:"app","data-panel-open":e,"data-mobile-layout":r,children:Et.jsx(MT,{canvasRef:o.canvasHostRef,hasModel:o.hasModel,isDragActive:o.isDragActive,isLoading:o.isLoading,isPanelOpen:e,panelId:"control-panel",onDragEnter:o.handleDragEnter,onDragLeave:o.handleDragLeave,onDragOver:o.handleDragOver,onDrop:o.handleDrop,onTogglePanel:()=>i(!0),children:Et.jsx(TT,{className:f,ariaHidden:!e,error:o.error,isLoading:o.isLoading,controlsDisabled:o.controlsDisabled,onFileChange:o.handleFileInput,onHidePanel:()=>i(!1),selectionColor:o.selectionColor,onSelectionColorChange:m=>o.setSelectionColor(m.target.value),selectedMeshName:o.selectedMeshName,onApplyColor:o.applyColorToSelection,onResetColor:o.resetSelectionColor,samples:wT,onSampleSelect:m=>o.loadSample(m.url,m.label,m.fileName)})})})}Oy.createRoot(document.getElementById("root")).render(Et.jsx(Ft.StrictMode,{children:Et.jsx(CT,{})}));
