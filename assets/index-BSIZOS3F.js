(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function My(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function Ey(o){if(Object.prototype.hasOwnProperty.call(o,"__esModule"))return o;var e=o.default;if(typeof e=="function"){var i=function r(){var l=!1;try{l=this instanceof r}catch{}return l?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(o).forEach(function(r){var l=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(i,r,l.get?l:{enumerable:!0,get:function(){return o[r]}})}),i}var _d={exports:{}},Pl={};var cg;function Ty(){if(cg)return Pl;cg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var p=null;if(f!==void 0&&(p=""+f),l.key!==void 0&&(p=""+l.key),"key"in l){f={};for(var m in l)m!=="key"&&(f[m]=l[m])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:p,ref:l!==void 0?l:null,props:f}}return Pl.Fragment=e,Pl.jsx=i,Pl.jsxs=i,Pl}var ug;function Ay(){return ug||(ug=1,_d.exports=Ty()),_d.exports}var bt=Ay(),vd={exports:{}},Nt={};var fg;function wy(){if(fg)return Nt;fg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.iterator;function A(G){return G===null||typeof G!="object"?null:(G=E&&G[E]||G["@@iterator"],typeof G=="function"?G:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,T={};function M(G,pe,De){this.props=G,this.context=pe,this.refs=T,this.updater=De||D}M.prototype.isReactComponent={},M.prototype.setState=function(G,pe){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,pe,"setState")},M.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function q(){}q.prototype=M.prototype;function H(G,pe,De){this.props=G,this.context=pe,this.refs=T,this.updater=De||D}var V=H.prototype=new q;V.constructor=H,N(V,M.prototype),V.isPureReactComponent=!0;var K=Array.isArray;function I(){}var X={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function P(G,pe,De){var Fe=De.ref;return{$$typeof:o,type:G,key:pe,ref:Fe!==void 0?Fe:null,props:De}}function O(G,pe){return P(G.type,pe,G.props)}function J(G){return typeof G=="object"&&G!==null&&G.$$typeof===o}function re(G){var pe={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(De){return pe[De]})}var oe=/\/+/g;function Se(G,pe){return typeof G=="object"&&G!==null&&G.key!=null?re(""+G.key):pe.toString(36)}function ye(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(I,I):(G.status="pending",G.then(function(pe){G.status==="pending"&&(G.status="fulfilled",G.value=pe)},function(pe){G.status==="pending"&&(G.status="rejected",G.reason=pe)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function z(G,pe,De,Fe,et){var he=typeof G;(he==="undefined"||he==="boolean")&&(G=null);var ve=!1;if(G===null)ve=!0;else switch(he){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(G.$$typeof){case o:case e:ve=!0;break;case b:return ve=G._init,z(ve(G._payload),pe,De,Fe,et)}}if(ve)return et=et(G),ve=Fe===""?"."+Se(G,0):Fe,K(et)?(De="",ve!=null&&(De=ve.replace(oe,"$&/")+"/"),z(et,pe,De,"",function(ft){return ft})):et!=null&&(J(et)&&(et=O(et,De+(et.key==null||G&&G.key===et.key?"":(""+et.key).replace(oe,"$&/")+"/")+ve)),pe.push(et)),1;ve=0;var ke=Fe===""?".":Fe+":";if(K(G))for(var rt=0;rt<G.length;rt++)Fe=G[rt],he=ke+Se(Fe,rt),ve+=z(Fe,pe,De,he,et);else if(rt=A(G),typeof rt=="function")for(G=rt.call(G),rt=0;!(Fe=G.next()).done;)Fe=Fe.value,he=ke+Se(Fe,rt++),ve+=z(Fe,pe,De,he,et);else if(he==="object"){if(typeof G.then=="function")return z(ye(G),pe,De,Fe,et);throw pe=String(G),Error("Objects are not valid as a React child (found: "+(pe==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":pe)+"). If you meant to render a collection of children, use an array instead.")}return ve}function $(G,pe,De){if(G==null)return G;var Fe=[],et=0;return z(G,Fe,"","",function(he){return pe.call(De,he,et++)}),Fe}function ne(G){if(G._status===-1){var pe=G._result;pe=pe(),pe.then(function(De){(G._status===0||G._status===-1)&&(G._status=1,G._result=De)},function(De){(G._status===0||G._status===-1)&&(G._status=2,G._result=De)}),G._status===-1&&(G._status=0,G._result=pe)}if(G._status===1)return G._result.default;throw G._result}var Re=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(pe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)},Ce={map:$,forEach:function(G,pe,De){$(G,function(){pe.apply(this,arguments)},De)},count:function(G){var pe=0;return $(G,function(){pe++}),pe},toArray:function(G){return $(G,function(pe){return pe})||[]},only:function(G){if(!J(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return Nt.Activity=v,Nt.Children=Ce,Nt.Component=M,Nt.Fragment=i,Nt.Profiler=l,Nt.PureComponent=H,Nt.StrictMode=r,Nt.Suspense=_,Nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,Nt.__COMPILER_RUNTIME={__proto__:null,c:function(G){return X.H.useMemoCache(G)}},Nt.cache=function(G){return function(){return G.apply(null,arguments)}},Nt.cacheSignal=function(){return null},Nt.cloneElement=function(G,pe,De){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var Fe=N({},G.props),et=G.key;if(pe!=null)for(he in pe.key!==void 0&&(et=""+pe.key),pe)!fe.call(pe,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&pe.ref===void 0||(Fe[he]=pe[he]);var he=arguments.length-2;if(he===1)Fe.children=De;else if(1<he){for(var ve=Array(he),ke=0;ke<he;ke++)ve[ke]=arguments[ke+2];Fe.children=ve}return P(G.type,et,Fe)},Nt.createContext=function(G){return G={$$typeof:p,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:f,_context:G},G},Nt.createElement=function(G,pe,De){var Fe,et={},he=null;if(pe!=null)for(Fe in pe.key!==void 0&&(he=""+pe.key),pe)fe.call(pe,Fe)&&Fe!=="key"&&Fe!=="__self"&&Fe!=="__source"&&(et[Fe]=pe[Fe]);var ve=arguments.length-2;if(ve===1)et.children=De;else if(1<ve){for(var ke=Array(ve),rt=0;rt<ve;rt++)ke[rt]=arguments[rt+2];et.children=ke}if(G&&G.defaultProps)for(Fe in ve=G.defaultProps,ve)et[Fe]===void 0&&(et[Fe]=ve[Fe]);return P(G,he,et)},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(G){return{$$typeof:m,render:G}},Nt.isValidElement=J,Nt.lazy=function(G){return{$$typeof:b,_payload:{_status:-1,_result:G},_init:ne}},Nt.memo=function(G,pe){return{$$typeof:x,type:G,compare:pe===void 0?null:pe}},Nt.startTransition=function(G){var pe=X.T,De={};X.T=De;try{var Fe=G(),et=X.S;et!==null&&et(De,Fe),typeof Fe=="object"&&Fe!==null&&typeof Fe.then=="function"&&Fe.then(I,Re)}catch(he){Re(he)}finally{pe!==null&&De.types!==null&&(pe.types=De.types),X.T=pe}},Nt.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},Nt.use=function(G){return X.H.use(G)},Nt.useActionState=function(G,pe,De){return X.H.useActionState(G,pe,De)},Nt.useCallback=function(G,pe){return X.H.useCallback(G,pe)},Nt.useContext=function(G){return X.H.useContext(G)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(G,pe){return X.H.useDeferredValue(G,pe)},Nt.useEffect=function(G,pe){return X.H.useEffect(G,pe)},Nt.useEffectEvent=function(G){return X.H.useEffectEvent(G)},Nt.useId=function(){return X.H.useId()},Nt.useImperativeHandle=function(G,pe,De){return X.H.useImperativeHandle(G,pe,De)},Nt.useInsertionEffect=function(G,pe){return X.H.useInsertionEffect(G,pe)},Nt.useLayoutEffect=function(G,pe){return X.H.useLayoutEffect(G,pe)},Nt.useMemo=function(G,pe){return X.H.useMemo(G,pe)},Nt.useOptimistic=function(G,pe){return X.H.useOptimistic(G,pe)},Nt.useReducer=function(G,pe,De){return X.H.useReducer(G,pe,De)},Nt.useRef=function(G){return X.H.useRef(G)},Nt.useState=function(G){return X.H.useState(G)},Nt.useSyncExternalStore=function(G,pe,De){return X.H.useSyncExternalStore(G,pe,De)},Nt.useTransition=function(){return X.H.useTransition()},Nt.version="19.2.0",Nt}var hg;function Zp(){return hg||(hg=1,vd.exports=wy()),vd.exports}var yt=Zp(),yd={exports:{}},Fl={},Sd={exports:{}},bd={};var dg;function Ry(){return dg||(dg=1,(function(o){function e(z,$){var ne=z.length;z.push($);e:for(;0<ne;){var Re=ne-1>>>1,Ce=z[Re];if(0<l(Ce,$))z[Re]=$,z[ne]=Ce,ne=Re;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],ne=z.pop();if(ne!==$){z[0]=ne;e:for(var Re=0,Ce=z.length,G=Ce>>>1;Re<G;){var pe=2*(Re+1)-1,De=z[pe],Fe=pe+1,et=z[Fe];if(0>l(De,ne))Fe<Ce&&0>l(et,De)?(z[Re]=et,z[Fe]=ne,Re=Fe):(z[Re]=De,z[pe]=ne,Re=pe);else if(Fe<Ce&&0>l(et,ne))z[Re]=et,z[Fe]=ne,Re=Fe;else break e}}return $}function l(z,$){var ne=z.sortIndex-$.sortIndex;return ne!==0?ne:z.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var p=Date,m=p.now();o.unstable_now=function(){return p.now()-m}}var _=[],x=[],b=1,v=null,E=3,A=!1,D=!1,N=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function V(z){for(var $=i(x);$!==null;){if($.callback===null)r(x);else if($.startTime<=z)r(x),$.sortIndex=$.expirationTime,e(_,$);else break;$=i(x)}}function K(z){if(N=!1,V(z),!D)if(i(_)!==null)D=!0,I||(I=!0,re());else{var $=i(x);$!==null&&ye(K,$.startTime-z)}}var I=!1,X=-1,fe=5,P=-1;function O(){return T?!0:!(o.unstable_now()-P<fe)}function J(){if(T=!1,I){var z=o.unstable_now();P=z;var $=!0;try{e:{D=!1,N&&(N=!1,q(X),X=-1),A=!0;var ne=E;try{t:{for(V(z),v=i(_);v!==null&&!(v.expirationTime>z&&O());){var Re=v.callback;if(typeof Re=="function"){v.callback=null,E=v.priorityLevel;var Ce=Re(v.expirationTime<=z);if(z=o.unstable_now(),typeof Ce=="function"){v.callback=Ce,V(z),$=!0;break t}v===i(_)&&r(_),V(z)}else r(_);v=i(_)}if(v!==null)$=!0;else{var G=i(x);G!==null&&ye(K,G.startTime-z),$=!1}}break e}finally{v=null,E=ne,A=!1}$=void 0}}finally{$?re():I=!1}}}var re;if(typeof H=="function")re=function(){H(J)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Se=oe.port2;oe.port1.onmessage=J,re=function(){Se.postMessage(null)}}else re=function(){M(J,0)};function ye(z,$){X=M(function(){z(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(z){switch(E){case 1:case 2:case 3:var $=3;break;default:$=E}var ne=E;E=$;try{return z()}finally{E=ne}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=E;E=z;try{return $()}finally{E=ne}},o.unstable_scheduleCallback=function(z,$,ne){var Re=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Re+ne:Re):ne=Re,z){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=ne+Ce,z={id:b++,callback:$,priorityLevel:z,startTime:ne,expirationTime:Ce,sortIndex:-1},ne>Re?(z.sortIndex=ne,e(x,z),i(_)===null&&z===i(x)&&(N?(q(X),X=-1):N=!0,ye(K,ne-Re))):(z.sortIndex=Ce,e(_,z),D||A||(D=!0,I||(I=!0,re()))),z},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(z){var $=E;return function(){var ne=E;E=$;try{return z.apply(this,arguments)}finally{E=ne}}}})(bd)),bd}var pg;function Cy(){return pg||(pg=1,Sd.exports=Ry()),Sd.exports}var Md={exports:{}},ri={};var mg;function Dy(){if(mg)return ri;mg=1;var o=Zp();function e(_){var x="https://react.dev/errors/"+_;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)x+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+_+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function f(_,x,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:_,containerInfo:x,implementation:b}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,x){if(_==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return ri.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ri.createPortal=function(_,x){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(e(299));return f(_,x,null,b)},ri.flushSync=function(_){var x=p.T,b=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=x,r.p=b,r.d.f()}},ri.preconnect=function(_,x){typeof _=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,r.d.C(_,x))},ri.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},ri.preinit=function(_,x){if(typeof _=="string"&&x&&typeof x.as=="string"){var b=x.as,v=m(b,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,A=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;b==="style"?r.d.S(_,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:A}):b==="script"&&r.d.X(_,{crossOrigin:v,integrity:E,fetchPriority:A,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},ri.preinitModule=function(_,x){if(typeof _=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var b=m(x.as,x.crossOrigin);r.d.M(_,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&r.d.M(_)},ri.preload=function(_,x){if(typeof _=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var b=x.as,v=m(b,x.crossOrigin);r.d.L(_,b,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},ri.preloadModule=function(_,x){if(typeof _=="string")if(x){var b=m(x.as,x.crossOrigin);r.d.m(_,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else r.d.m(_)},ri.requestFormReset=function(_){r.d.r(_)},ri.unstable_batchedUpdates=function(_,x){return _(x)},ri.useFormState=function(_,x,b){return p.H.useFormState(_,x,b)},ri.useFormStatus=function(){return p.H.useHostTransitionStatus()},ri.version="19.2.0",ri}var xg;function Uy(){if(xg)return Md.exports;xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Md.exports=Dy(),Md.exports}var gg;function Ly(){if(gg)return Fl;gg=1;var o=Cy(),e=Zp(),i=Uy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function p(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(r(188))}function x(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return _(u),t;if(h===s)return _(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=h;else{for(var y=!1,U=u.child;U;){if(U===a){y=!0,a=u,s=h;break}if(U===s){y=!0,s=u,a=h;break}U=U.sibling}if(!y){for(U=h.child;U;){if(U===a){y=!0,a=h,s=u;break}if(U===s){y=!0,s=h,a=u;break}U=U.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function b(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=b(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),H=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function Se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case K:return"Suspense";case I:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case H:return t.displayName||"Context";case q:return(t._context.displayName||"Context")+".Consumer";case V:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return n=t.displayName||null,n!==null?n:Se(t.type)||"Memo";case fe:n=t._payload,t=t._init;try{return Se(t(n))}catch{}}return null}var ye=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Re=[],Ce=-1;function G(t){return{current:t}}function pe(t){0>Ce||(t.current=Re[Ce],Re[Ce]=null,Ce--)}function De(t,n){Ce++,Re[Ce]=t.current,t.current=n}var Fe=G(null),et=G(null),he=G(null),ve=G(null);function ke(t,n){switch(De(he,n),De(et,t),De(Fe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Lx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Lx(n),t=Nx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}pe(Fe),De(Fe,t)}function rt(){pe(Fe),pe(et),pe(he)}function ft(t){t.memoizedState!==null&&De(ve,t);var n=Fe.current,a=Nx(n,t.type);n!==a&&(De(et,t),De(Fe,a))}function be(t){et.current===t&&(pe(Fe),pe(et)),ve.current===t&&(pe(ve),Ul._currentValue=ne)}var Ve,Ke;function ht(t){if(Ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ve=n&&n[1]||"",Ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+t+Ke}var W=!1;function xt(t,n){if(!t||W)return"";W=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(_e){var de=_e}Reflect.construct(t,[],we)}else{try{we.call()}catch(_e){de=_e}t.call(we.prototype)}}else{try{throw Error()}catch(_e){de=_e}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(_e){if(_e&&de&&typeof _e.stack=="string")return[_e.stack,de.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),y=h[0],U=h[1];if(y&&U){var Y=y.split(`
`),ue=U.split(`
`);for(u=s=0;s<Y.length&&!Y[s].includes("DetermineComponentFrameRoot");)s++;for(;u<ue.length&&!ue[u].includes("DetermineComponentFrameRoot");)u++;if(s===Y.length||u===ue.length)for(s=Y.length-1,u=ue.length-1;1<=s&&0<=u&&Y[s]!==ue[u];)u--;for(;1<=s&&0<=u;s--,u--)if(Y[s]!==ue[u]){if(s!==1||u!==1)do if(s--,u--,0>u||Y[s]!==ue[u]){var Me=`
`+Y[s].replace(" at new "," at ");return t.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",t.displayName)),Me}while(1<=s&&0<=u);break}}}finally{W=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ht(a):""}function Rt(t,n){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return xt(t.type,!1);case 11:return xt(t.type.render,!1);case 1:return xt(t.type,!0);case 31:return ht("Activity");default:return""}}function Tt(t){try{var n="",a=null;do n+=Rt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var We=Object.prototype.hasOwnProperty,Gt=o.unstable_scheduleCallback,ct=o.unstable_cancelCallback,gt=o.unstable_shouldYield,B=o.unstable_requestPaint,R=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,Ee=o.unstable_ImmediatePriority,Le=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,qe=o.unstable_IdlePriority,_t=o.log,Ie=o.unstable_setDisableYieldValue,Ne=null,Pe=null;function ot(t){if(typeof _t=="function"&&Ie(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(Ne,t)}catch{}}var lt=Math.clz32?Math.clz32:j,Ye=Math.log,Et=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Ye(t)/Et|0)|0}var Xe=256,He=262144,Ge=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ae(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var U=s&134217727;return U!==0?(s=U&~h,s!==0?u=Ue(s):(y&=U,y!==0?u=Ue(y):a||(a=U&~t,a!==0&&(u=Ue(a))))):(U=s&~h,U!==0?u=Ue(U):y!==0?u=Ue(y):a||(a=s&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var t=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),t}function $t(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Yn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,n,a,s,u,h){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var U=t.entanglements,Y=t.expirationTimes,ue=t.hiddenUpdates;for(a=y&~a;0<a;){var Me=31-lt(a),we=1<<Me;U[Me]=0,Y[Me]=-1;var de=ue[Me];if(de!==null)for(ue[Me]=null,Me=0;Me<de.length;Me++){var _e=de[Me];_e!==null&&(_e.lane&=-536870913)}a&=~we}s!==0&&Es(t,s,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function Es(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-lt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Vr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-lt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Gr(t,n){var a=n&-n;return a=(a&42)!==0?1:ci(a),(a&(t.suspendedLanes|n))!==0?0:a}function ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function w(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Sa(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:ng(t.type))}function kt(t,n){var a=$.p;try{return $.p=t,n()}finally{$.p=a}}var ui=Math.random().toString(36).slice(2),En="__reactFiber$"+ui,yn="__reactProps$"+ui,ni="__reactContainer$"+ui,tr="__reactEvents$"+ui,Vo="__reactListeners$"+ui,Go="__reactHandles$"+ui,Ts="__reactResources$"+ui,ba="__reactMarker$"+ui;function kr(t){delete t[En],delete t[yn],delete t[tr],delete t[Vo],delete t[Go]}function la(t){var n=t[En];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ni]||a[En]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Hx(t);t!==null;){if(a=t[En])return a;t=Hx(t)}return n}t=a,a=t.parentNode}return null}function L(t){if(t=t[En]||t[ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ee(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function xe(t){var n=t[Ts];return n||(n=t[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function le(t){t[ba]=!0}var ie=new Set,Be={};function ze(t,n){Qe(t,n),Qe(t+"Capture",n)}function Qe(t,n){for(Be[t]=n,t=0;t<n.length;t++)ie.add(n[t])}var Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vt={},Mt={};function at(t){return We.call(Mt,t)?!0:We.call(vt,t)?!1:Je.test(t)?Mt[t]=!0:(vt[t]=!0,!1)}function Lt(t,n,a){if(at(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function en(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function It(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,h=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function sn(t){if(!t._valueTracker){var n=It(t)?"checked":"value";t._valueTracker=dt(t,n,""+t[n])}}function Vt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=It(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function cn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oi=/[\n"\\]/g;function un(t){return t.replace(Oi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Yi(t,n,a,s,u,h,y,U){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Xt(n)):t.value!==""+Xt(n)&&(t.value=""+Xt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,y,Xt(n)):a!=null?Tn(t,y,Xt(a)):s!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?t.name=""+Xt(U):t.removeAttribute("name")}function Dt(t,n,a,s,u,h,y,U){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){sn(t);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,U||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=U?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),sn(t)}function Tn(t,n,a){n==="number"&&cn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Un(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pn(t,n,a){if(n!=null&&(n=""+Xt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Xt(a):""}function Gn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ye(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Xt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),sn(t)}function Pi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var mi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ko(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||mi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xo(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ko(t,u,s)}else for(var h in n)n.hasOwnProperty(h)&&ko(t,h,n[h])}function As(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),af=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ws(t){return af.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var Wo=null;function qo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,Zi=null;function Yo(t){var n=L(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Yi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[yn]||null;if(!u)throw Error(r(90));Yi(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Vt(s)}break e;case"textarea":Pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Un(t,!!a.multiple,n,!1)}}}var Rs=!1;function $l(t,n,a){if(Rs)return t(n,a);Rs=!0;try{var s=t(n);return s}finally{if(Rs=!1,(nr!==null||Zi!==null)&&(jc(),nr&&(n=nr,t=Zi,Zi=nr=null,Yo(n),t)))for(n=0;n<t.length;n++)Yo(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=!1;if(Ki)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){jo=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{jo=!1}var Qi=null,Zo=null,Cs=null;function ec(){if(Cs)return Cs;var t,n=Zo,a=n.length,s,u="value"in Qi?Qi.value:Qi.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===u[h-s];s++);return Cs=u.slice(t,1<s?1-s:void 0)}function Ds(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Us(){return!0}function tc(){return!1}function Ln(t){function n(a,s,u,h,y){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Us:tc,this.isPropagationStopped=tc,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),n}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wr=Ln(Ma),qr=v({},Ma,{view:0,detail:0}),rf=Ln(qr),Ko,Qo,Yr,Ls=v({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(Ko=t.screenX-Yr.screenX,Qo=t.screenY-Yr.screenY):Qo=Ko=0,Yr=t),Ko)},movementY:function(t){return"movementY"in t?t.movementY:Qo}}),nc=Ln(Ls),sf=v({},Ls,{dataTransfer:0}),of=Ln(sf),lf=v({},qr,{relatedTarget:0}),Ns=Ln(lf),Os=v({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),cf=Ln(Os),ca=v({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uf=Ln(ca),ff=v({},Ma,{data:0}),Ps=Ln(ff),ic={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jo(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=df[t])?!!n[t]:!1}function jr(){return Jo}var pf=v({},qr,{key:function(t){if(t.key){var n=ic[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jr,charCode:function(t){return t.type==="keypress"?Ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ac=Ln(pf),mf=v({},Ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=Ln(mf),xf=v({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jr}),gf=Ln(xf),_f=v({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Ln(_f),yf=v({},Ls,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=Ln(yf),bf=v({},Ma,{newState:0,oldState:0}),Mf=Ln(bf),Ef=[9,13,27,32],$o=Ki&&"CompositionEvent"in window,Zr=null;Ki&&"documentMode"in document&&(Zr=document.documentMode);var Tf=Ki&&"TextEvent"in window&&!Zr,sc=Ki&&(!$o||Zr&&8<Zr&&11>=Zr),oc=" ",Fs=!1;function lc(t,n){switch(t){case"keyup":return Ef.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function Af(t,n){switch(t){case"compositionend":return cc(n);case"keypress":return n.which!==32?null:(Fs=!0,oc);case"textInput":return t=n.data,t===oc&&Fs?null:t;default:return null}}function wf(t,n){if(ar)return t==="compositionend"||!$o&&lc(t,n)?(t=ec(),Cs=Zo=Qi=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sc&&n.locale!=="ko"?null:n.data;default:return null}}var zs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!zs[t.type]:n==="textarea"}function fc(t,n,a,s){nr?Zi?Zi.push(s):Zi=[s]:nr=s,n=tu(n,"onChange"),0<n.length&&(a=new Wr("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var rr=null,Kr=null;function Rf(t){Ax(t,0)}function Bs(t){var n=ee(t);if(Vt(n))return t}function Is(t,n){if(t==="change")return n}var hc=!1;if(Ki){var Ea;if(Ki){var el="oninput"in document;if(!el){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),el=typeof dc.oninput=="function"}Ea=el}else Ea=!1;hc=Ea&&(!document.documentMode||9<document.documentMode)}function pc(){rr&&(rr.detachEvent("onpropertychange",mc),Kr=rr=null)}function mc(t){if(t.propertyName==="value"&&Bs(Kr)){var n=[];fc(n,Kr,t,qo(t)),$l(Rf,n)}}function Cf(t,n,a){t==="focusin"?(pc(),rr=n,Kr=a,rr.attachEvent("onpropertychange",mc)):t==="focusout"&&pc()}function Df(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bs(Kr)}function Uf(t,n){if(t==="click")return Bs(n)}function Lf(t,n){if(t==="input"||t==="change")return Bs(n)}function Nf(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:Nf;function Qr(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!We.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function xc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gc(t,n){var a=xc(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xc(a)}}function Fn(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fn(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tl(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=cn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=cn(t.document)}return n}function Jr(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ji=Ki&&"documentMode"in document&&11>=document.documentMode,Ta=null,Hs=null,sr=null,or=!1;function nl(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;or||Ta==null||Ta!==cn(s)||(s=Ta,"selectionStart"in s&&Jr(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),sr&&Qr(sr,s)||(sr=s,s=tu(Hs,"onSelect"),0<s.length&&(n=new Wr("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ta)))}function ua(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var c={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},d={},g={};Ki&&(g=document.createElement("div").style,"AnimationEvent"in window||(delete c.animationend.animation,delete c.animationiteration.animation,delete c.animationstart.animation),"TransitionEvent"in window||delete c.transitionend.transition);function S(t){if(d[t])return d[t];if(!c[t])return t;var n=c[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in g)return d[t]=n[a];return t}var C=S("animationend"),F=S("animationiteration"),k=S("animationstart"),Z=S("transitionrun"),ge=S("transitionstart"),Oe=S("transitioncancel"),je=S("transitionend"),st=new Map,pt="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pt.push("scrollEnd");function tt(t,n){st.set(t,n),ze(n,[t])}var At=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Pt=[],bn=0,gn=0;function ii(){for(var t=bn,n=gn=bn=0;n<t;){var a=Pt[n];Pt[n++]=null;var s=Pt[n];Pt[n++]=null;var u=Pt[n];Pt[n++]=null;var h=Pt[n];if(Pt[n++]=null,s!==null&&u!==null){var y=s.pending;y===null?u.next=u:(u.next=y.next,y.next=u),s.pending=u}h!==0&&wa(a,u,h)}}function ai(t,n,a,s){Pt[bn++]=t,Pt[bn++]=n,Pt[bn++]=a,Pt[bn++]=s,gn|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Aa(t,n,a,s){return ai(t,n,a,s),An(t)}function jn(t,n){return ai(t,null,null,n),An(t)}function wa(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-lt(a),t=h.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),h):null}function An(t){if(50<El)throw El=0,Gh=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vs={};function sv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,n,a,s){return new sv(t,n,a,s)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ra(t,n){var a=t.alternate;return a===null?(a=Ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _c(t,n,a,s,u,h){var y=0;if(s=t,typeof t=="function")Of(t)&&(y=1);else if(typeof t=="string")y=fy(t,a,Fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=Ei(31,a,n,u),t.elementType=P,t.lanes=h,t;case N:return $r(a.children,u,h,n);case T:y=8,u|=24;break;case M:return t=Ei(12,a,n,u|2),t.elementType=M,t.lanes=h,t;case K:return t=Ei(13,a,n,u),t.elementType=K,t.lanes=h,t;case I:return t=Ei(19,a,n,u),t.elementType=I,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:y=10;break e;case q:y=9;break e;case V:y=11;break e;case X:y=14;break e;case fe:y=16,s=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Ei(y,a,n,u),n.elementType=t,n.type=s,n.lanes=h,n}function $r(t,n,a,s){return t=Ei(7,t,s,n),t.lanes=a,t}function Pf(t,n,a){return t=Ei(6,t,null,n),t.lanes=a,t}function cm(t){var n=Ei(18,null,null,0);return n.stateNode=t,n}function Ff(t,n,a){return n=Ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var um=new WeakMap;function Fi(t,n){if(typeof t=="object"&&t!==null){var a=um.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Tt(n)},um.set(t,n),n)}return{value:t,source:n,stack:Tt(n)}}var Gs=[],ks=0,vc=null,il=0,zi=[],Bi=0,lr=null,fa=1,ha="";function Ca(t,n){Gs[ks++]=il,Gs[ks++]=vc,vc=t,il=n}function fm(t,n,a){zi[Bi++]=fa,zi[Bi++]=ha,zi[Bi++]=lr,lr=t;var s=fa;t=ha;var u=32-lt(s)-1;s&=~(1<<u),a+=1;var h=32-lt(n)+u;if(30<h){var y=u-u%5;h=(s&(1<<y)-1).toString(32),s>>=y,u-=y,fa=1<<32-lt(n)+u|a<<u|s,ha=h+t}else fa=1<<h|a<<u|s,ha=t}function zf(t){t.return!==null&&(Ca(t,1),fm(t,1,0))}function Bf(t){for(;t===vc;)vc=Gs[--ks],Gs[ks]=null,il=Gs[--ks],Gs[ks]=null;for(;t===lr;)lr=zi[--Bi],zi[Bi]=null,ha=zi[--Bi],zi[Bi]=null,fa=zi[--Bi],zi[Bi]=null}function hm(t,n){zi[Bi++]=fa,zi[Bi++]=ha,zi[Bi++]=lr,fa=n.id,ha=n.overflow,lr=t}var Qn=null,_n=null,Jt=!1,cr=null,Ii=!1,If=Error(r(519));function ur(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw al(Fi(n,t)),If}function dm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[En]=t,n[yn]=s,a){case"dialog":qt("cancel",n),qt("close",n);break;case"iframe":case"object":case"embed":qt("load",n);break;case"video":case"audio":for(a=0;a<Al.length;a++)qt(Al[a],n);break;case"source":qt("error",n);break;case"img":case"image":case"link":qt("error",n),qt("load",n);break;case"details":qt("toggle",n);break;case"input":qt("invalid",n),Dt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":qt("invalid",n);break;case"textarea":qt("invalid",n),Gn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Dx(n.textContent,a)?(s.popover!=null&&(qt("beforetoggle",n),qt("toggle",n)),s.onScroll!=null&&qt("scroll",n),s.onScrollEnd!=null&&qt("scrollend",n),s.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||ur(t,!0)}function pm(t){for(Qn=t.return;Qn;)switch(Qn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Qn=Qn.return}}function Xs(t){if(t!==Qn)return!1;if(!Jt)return pm(t),Jt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&_n&&ur(t),pm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));_n=Ix(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));_n=Ix(t)}else n===27?(n=_n,Er(t.type)?(t=ld,ld=null,_n=t):_n=n):_n=Qn?Vi(t.stateNode.nextSibling):null;return!0}function es(){_n=Qn=null,Jt=!1}function Hf(){var t=cr;return t!==null&&(vi===null?vi=t:vi.push.apply(vi,t),cr=null),t}function al(t){cr===null?cr=[t]:cr.push(t)}var Vf=G(null),ts=null,Da=null;function fr(t,n,a){De(Vf,n._currentValue),n._currentValue=a}function Ua(t){t._currentValue=Vf.current,pe(Vf)}function Gf(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function kf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var U=h;h=u;for(var Y=0;Y<n.length;Y++)if(U.context===n[Y]){h.lanes|=a,U=h.alternate,U!==null&&(U.lanes|=a),Gf(h.return,a,t),s||(y=null);break e}h=U.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),Gf(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Ws(t,n,a,s){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var U=u.type;fi(u.pendingProps.value,y.value)||(t!==null?t.push(U):t=[U])}}else if(u===ve.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}u=u.return}t!==null&&kf(n,t,a,s),n.flags|=262144}function yc(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ns(t){ts=t,Da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Jn(t){return mm(ts,t)}function Sc(t,n){return ts===null&&ns(t),mm(t,n)}function mm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Da===null){if(t===null)throw Error(r(308));Da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Da=Da.next=n;return a}var ov=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lv=o.unstable_scheduleCallback,cv=o.unstable_NormalPriority,zn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new ov,data:new Map,refCount:0}}function rl(t){t.refCount--,t.refCount===0&&lv(cv,function(){t.controller.abort()})}var sl=null,Wf=0,qs=0,Ys=null;function uv(t,n){if(sl===null){var a=sl=[];Wf=0,qs=jh(),Ys={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Wf++,n.then(xm,xm),n}function xm(){if(--Wf===0&&sl!==null){Ys!==null&&(Ys.status="fulfilled");var t=sl;sl=null,qs=0,Ys=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var gm=z.S;z.S=function(t,n){ex=R(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uv(t,n),gm!==null&&gm(t,n)};var is=G(null);function qf(){var t=is.current;return t!==null?t:xn.pooledCache}function bc(t,n){n===null?De(is,is.current):De(is,n.pool)}function _m(){var t=qf();return t===null?null:{parent:zn._currentValue,pool:t}}var js=Error(r(460)),Yf=Error(r(474)),Mc=Error(r(542)),Ec={then:function(){}};function vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ym(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bm(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=xn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bm(t),t}throw rs=n,js}}function as(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rs=a,js):a}}var rs=null;function Sm(){if(rs===null)throw Error(r(459));var t=rs;return rs=null,t}function bm(t){if(t===js||t===Mc)throw Error(r(483))}var Zs=null,ol=0;function Tc(t){var n=ol;return ol+=1,Zs===null&&(Zs=[]),ym(Zs,t,n)}function ll(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ac(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Mm(t){function n(te,Q){if(t){var ce=te.deletions;ce===null?(te.deletions=[Q],te.flags|=16):ce.push(Q)}}function a(te,Q){if(!t)return null;for(;Q!==null;)n(te,Q),Q=Q.sibling;return null}function s(te){for(var Q=new Map;te!==null;)te.key!==null?Q.set(te.key,te):Q.set(te.index,te),te=te.sibling;return Q}function u(te,Q){return te=Ra(te,Q),te.index=0,te.sibling=null,te}function h(te,Q,ce){return te.index=ce,t?(ce=te.alternate,ce!==null?(ce=ce.index,ce<Q?(te.flags|=67108866,Q):ce):(te.flags|=67108866,Q)):(te.flags|=1048576,Q)}function y(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function U(te,Q,ce,Te){return Q===null||Q.tag!==6?(Q=Pf(ce,te.mode,Te),Q.return=te,Q):(Q=u(Q,ce),Q.return=te,Q)}function Y(te,Q,ce,Te){var St=ce.type;return St===N?Me(te,Q,ce.props.children,Te,ce.key):Q!==null&&(Q.elementType===St||typeof St=="object"&&St!==null&&St.$$typeof===fe&&as(St)===Q.type)?(Q=u(Q,ce.props),ll(Q,ce),Q.return=te,Q):(Q=_c(ce.type,ce.key,ce.props,null,te.mode,Te),ll(Q,ce),Q.return=te,Q)}function ue(te,Q,ce,Te){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ce.containerInfo||Q.stateNode.implementation!==ce.implementation?(Q=Ff(ce,te.mode,Te),Q.return=te,Q):(Q=u(Q,ce.children||[]),Q.return=te,Q)}function Me(te,Q,ce,Te,St){return Q===null||Q.tag!==7?(Q=$r(ce,te.mode,Te,St),Q.return=te,Q):(Q=u(Q,ce),Q.return=te,Q)}function we(te,Q,ce){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Pf(""+Q,te.mode,ce),Q.return=te,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case A:return ce=_c(Q.type,Q.key,Q.props,null,te.mode,ce),ll(ce,Q),ce.return=te,ce;case D:return Q=Ff(Q,te.mode,ce),Q.return=te,Q;case fe:return Q=as(Q),we(te,Q,ce)}if(ye(Q)||re(Q))return Q=$r(Q,te.mode,ce,null),Q.return=te,Q;if(typeof Q.then=="function")return we(te,Tc(Q),ce);if(Q.$$typeof===H)return we(te,Sc(te,Q),ce);Ac(te,Q)}return null}function de(te,Q,ce,Te){var St=Q!==null?Q.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return St!==null?null:U(te,Q,""+ce,Te);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case A:return ce.key===St?Y(te,Q,ce,Te):null;case D:return ce.key===St?ue(te,Q,ce,Te):null;case fe:return ce=as(ce),de(te,Q,ce,Te)}if(ye(ce)||re(ce))return St!==null?null:Me(te,Q,ce,Te,null);if(typeof ce.then=="function")return de(te,Q,Tc(ce),Te);if(ce.$$typeof===H)return de(te,Q,Sc(te,ce),Te);Ac(te,ce)}return null}function _e(te,Q,ce,Te,St){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return te=te.get(ce)||null,U(Q,te,""+Te,St);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case A:return te=te.get(Te.key===null?ce:Te.key)||null,Y(Q,te,Te,St);case D:return te=te.get(Te.key===null?ce:Te.key)||null,ue(Q,te,Te,St);case fe:return Te=as(Te),_e(te,Q,ce,Te,St)}if(ye(Te)||re(Te))return te=te.get(ce)||null,Me(Q,te,Te,St,null);if(typeof Te.then=="function")return _e(te,Q,ce,Tc(Te),St);if(Te.$$typeof===H)return _e(te,Q,ce,Sc(Q,Te),St);Ac(Q,Te)}return null}function ut(te,Q,ce,Te){for(var St=null,tn=null,mt=Q,zt=Q=0,Kt=null;mt!==null&&zt<ce.length;zt++){mt.index>zt?(Kt=mt,mt=null):Kt=mt.sibling;var nn=de(te,mt,ce[zt],Te);if(nn===null){mt===null&&(mt=Kt);break}t&&mt&&nn.alternate===null&&n(te,mt),Q=h(nn,Q,zt),tn===null?St=nn:tn.sibling=nn,tn=nn,mt=Kt}if(zt===ce.length)return a(te,mt),Jt&&Ca(te,zt),St;if(mt===null){for(;zt<ce.length;zt++)mt=we(te,ce[zt],Te),mt!==null&&(Q=h(mt,Q,zt),tn===null?St=mt:tn.sibling=mt,tn=mt);return Jt&&Ca(te,zt),St}for(mt=s(mt);zt<ce.length;zt++)Kt=_e(mt,te,zt,ce[zt],Te),Kt!==null&&(t&&Kt.alternate!==null&&mt.delete(Kt.key===null?zt:Kt.key),Q=h(Kt,Q,zt),tn===null?St=Kt:tn.sibling=Kt,tn=Kt);return t&&mt.forEach(function(Cr){return n(te,Cr)}),Jt&&Ca(te,zt),St}function wt(te,Q,ce,Te){if(ce==null)throw Error(r(151));for(var St=null,tn=null,mt=Q,zt=Q=0,Kt=null,nn=ce.next();mt!==null&&!nn.done;zt++,nn=ce.next()){mt.index>zt?(Kt=mt,mt=null):Kt=mt.sibling;var Cr=de(te,mt,nn.value,Te);if(Cr===null){mt===null&&(mt=Kt);break}t&&mt&&Cr.alternate===null&&n(te,mt),Q=h(Cr,Q,zt),tn===null?St=Cr:tn.sibling=Cr,tn=Cr,mt=Kt}if(nn.done)return a(te,mt),Jt&&Ca(te,zt),St;if(mt===null){for(;!nn.done;zt++,nn=ce.next())nn=we(te,nn.value,Te),nn!==null&&(Q=h(nn,Q,zt),tn===null?St=nn:tn.sibling=nn,tn=nn);return Jt&&Ca(te,zt),St}for(mt=s(mt);!nn.done;zt++,nn=ce.next())nn=_e(mt,te,zt,nn.value,Te),nn!==null&&(t&&nn.alternate!==null&&mt.delete(nn.key===null?zt:nn.key),Q=h(nn,Q,zt),tn===null?St=nn:tn.sibling=nn,tn=nn);return t&&mt.forEach(function(by){return n(te,by)}),Jt&&Ca(te,zt),St}function dn(te,Q,ce,Te){if(typeof ce=="object"&&ce!==null&&ce.type===N&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case A:e:{for(var St=ce.key;Q!==null;){if(Q.key===St){if(St=ce.type,St===N){if(Q.tag===7){a(te,Q.sibling),Te=u(Q,ce.props.children),Te.return=te,te=Te;break e}}else if(Q.elementType===St||typeof St=="object"&&St!==null&&St.$$typeof===fe&&as(St)===Q.type){a(te,Q.sibling),Te=u(Q,ce.props),ll(Te,ce),Te.return=te,te=Te;break e}a(te,Q);break}else n(te,Q);Q=Q.sibling}ce.type===N?(Te=$r(ce.props.children,te.mode,Te,ce.key),Te.return=te,te=Te):(Te=_c(ce.type,ce.key,ce.props,null,te.mode,Te),ll(Te,ce),Te.return=te,te=Te)}return y(te);case D:e:{for(St=ce.key;Q!==null;){if(Q.key===St)if(Q.tag===4&&Q.stateNode.containerInfo===ce.containerInfo&&Q.stateNode.implementation===ce.implementation){a(te,Q.sibling),Te=u(Q,ce.children||[]),Te.return=te,te=Te;break e}else{a(te,Q);break}else n(te,Q);Q=Q.sibling}Te=Ff(ce,te.mode,Te),Te.return=te,te=Te}return y(te);case fe:return ce=as(ce),dn(te,Q,ce,Te)}if(ye(ce))return ut(te,Q,ce,Te);if(re(ce)){if(St=re(ce),typeof St!="function")throw Error(r(150));return ce=St.call(ce),wt(te,Q,ce,Te)}if(typeof ce.then=="function")return dn(te,Q,Tc(ce),Te);if(ce.$$typeof===H)return dn(te,Q,Sc(te,ce),Te);Ac(te,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint"?(ce=""+ce,Q!==null&&Q.tag===6?(a(te,Q.sibling),Te=u(Q,ce),Te.return=te,te=Te):(a(te,Q),Te=Pf(ce,te.mode,Te),Te.return=te,te=Te),y(te)):a(te,Q)}return function(te,Q,ce,Te){try{ol=0;var St=dn(te,Q,ce,Te);return Zs=null,St}catch(mt){if(mt===js||mt===Mc)throw mt;var tn=Ei(29,mt,null,te.mode);return tn.lanes=Te,tn.return=te,tn}finally{}}}var ss=Mm(!0),Em=Mm(!1),hr=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function dr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(rn&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=An(t),wa(t,null,a),n}return ai(t,s,n,a),An(t)}function cl(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Vr(t,a)}}function Kf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qf=!1;function ul(){if(Qf){var t=Ys;if(t!==null)throw t}}function fl(t,n,a,s){Qf=!1;var u=t.updateQueue;hr=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var Y=U,ue=Y.next;Y.next=null,y===null?h=ue:y.next=ue,y=Y;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,U=Me.lastBaseUpdate,U!==y&&(U===null?Me.firstBaseUpdate=ue:U.next=ue,Me.lastBaseUpdate=Y))}if(h!==null){var we=u.baseState;y=0,Me=ue=Y=null,U=h;do{var de=U.lane&-536870913,_e=de!==U.lane;if(_e?(Zt&de)===de:(s&de)===de){de!==0&&de===qs&&(Qf=!0),Me!==null&&(Me=Me.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});e:{var ut=t,wt=U;de=n;var dn=a;switch(wt.tag){case 1:if(ut=wt.payload,typeof ut=="function"){we=ut.call(dn,we,de);break e}we=ut;break e;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=wt.payload,de=typeof ut=="function"?ut.call(dn,we,de):ut,de==null)break e;we=v({},we,de);break e;case 2:hr=!0}}de=U.callback,de!==null&&(t.flags|=64,_e&&(t.flags|=8192),_e=u.callbacks,_e===null?u.callbacks=[de]:_e.push(de))}else _e={lane:de,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Me===null?(ue=Me=_e,Y=we):Me=Me.next=_e,y|=de;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,u.lastBaseUpdate=_e,u.shared.pending=null}}while(!0);Me===null&&(Y=we),u.baseState=Y,u.firstBaseUpdate=ue,u.lastBaseUpdate=Me,h===null&&(u.shared.lanes=0),vr|=y,t.lanes=y,t.memoizedState=we}}function Tm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Tm(a[t],n)}var Ks=G(null),wc=G(0);function wm(t,n){t=Ha,De(wc,t),De(Ks,n),Ha=t|n.baseLanes}function Jf(){De(wc,Ha),De(Ks,Ks.current)}function $f(){Ha=wc.current,pe(Ks),pe(wc)}var Ti=G(null),Hi=null;function mr(t){var n=t.alternate;De(Nn,Nn.current&1),De(Ti,t),Hi===null&&(n===null||Ks.current!==null||n.memoizedState!==null)&&(Hi=t)}function eh(t){De(Nn,Nn.current),De(Ti,t),Hi===null&&(Hi=t)}function Rm(t){t.tag===22?(De(Nn,Nn.current),De(Ti,t),Hi===null&&(Hi=t)):xr()}function xr(){De(Nn,Nn.current),De(Ti,Ti.current)}function Ai(t){pe(Ti),Hi===t&&(Hi=null),pe(Nn)}var Nn=G(0);function Rc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||od(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var La=0,Ft=null,fn=null,Bn=null,Cc=!1,Qs=!1,os=!1,Dc=0,hl=0,Js=null,hv=0;function wn(){throw Error(r(321))}function th(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function nh(t,n,a,s,u,h){return La=h,Ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?f0:gh,os=!1,h=a(s,u),os=!1,Qs&&(h=Dm(n,a,s,u)),Cm(t),h}function Cm(t){z.H=ml;var n=fn!==null&&fn.next!==null;if(La=0,Bn=fn=Ft=null,Cc=!1,hl=0,Js=null,n)throw Error(r(300));t===null||In||(t=t.dependencies,t!==null&&yc(t)&&(In=!0))}function Dm(t,n,a,s){Ft=t;var u=0;do{if(Qs&&(Js=null),hl=0,Qs=!1,25<=u)throw Error(r(301));if(u+=1,Bn=fn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=h0,h=n(a,s)}while(Qs);return h}function dv(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?dl(n):n,t=t.useState()[0],(fn!==null?fn.memoizedState:null)!==t&&(Ft.flags|=1024),n}function ih(){var t=Dc!==0;return Dc=0,t}function ah(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rh(t){if(Cc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cc=!1}La=0,Bn=fn=Ft=null,Qs=!1,hl=Dc=0,Js=null}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?Ft.memoizedState=Bn=t:Bn=Bn.next=t,Bn}function On(){if(fn===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=fn.next;var n=Bn===null?Ft.memoizedState:Bn.next;if(n!==null)Bn=n,fn=t;else{if(t===null)throw Ft.alternate===null?Error(r(467)):Error(r(310));fn=t,t={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},Bn===null?Ft.memoizedState=Bn=t:Bn=Bn.next=t}return Bn}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(t){var n=hl;return hl+=1,Js===null&&(Js=[]),t=ym(Js,t,n),n=Ft,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?f0:gh),t}function Lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dl(t);if(t.$$typeof===H)return Jn(t)}throw Error(r(438,String(t)))}function sh(t){var n=null,a=Ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Ft.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Uc(),Ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=O;return n.index++,a}function Na(t,n){return typeof n=="function"?n(t):n}function Nc(t){var n=On();return oh(n,fn,t)}function oh(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,h=s.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,s.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var U=y=null,Y=null,ue=n,Me=!1;do{var we=ue.lane&-536870913;if(we!==ue.lane?(Zt&we)===we:(La&we)===we){var de=ue.revertLane;if(de===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),we===qs&&(Me=!0);else if((La&de)===de){ue=ue.next,de===qs&&(Me=!0);continue}else we={lane:0,revertLane:ue.revertLane,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},Y===null?(U=Y=we,y=h):Y=Y.next=we,Ft.lanes|=de,vr|=de;we=ue.action,os&&a(h,we),h=ue.hasEagerState?ue.eagerState:a(h,we)}else de={lane:we,revertLane:ue.revertLane,gesture:ue.gesture,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},Y===null?(U=Y=de,y=h):Y=Y.next=de,Ft.lanes|=we,vr|=we;ue=ue.next}while(ue!==null&&ue!==n);if(Y===null?y=h:Y.next=U,!fi(h,t.memoizedState)&&(In=!0,Me&&(a=Ys,a!==null)))throw a;t.memoizedState=h,t.baseState=y,t.baseQueue=Y,s.lastRenderedState=h}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function lh(t){var n=On(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);fi(h,n.memoizedState)||(In=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Um(t,n,a){var s=Ft,u=On(),h=Jt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!fi((fn||u).memoizedState,a);if(y&&(u.memoizedState=a,In=!0),u=u.queue,fh(Om.bind(null,s,u,t),[t]),u.getSnapshot!==n||y||Bn!==null&&Bn.memoizedState.tag&1){if(s.flags|=2048,$s(9,{destroy:void 0},Nm.bind(null,s,u,a,n),null),xn===null)throw Error(r(349));h||(La&127)!==0||Lm(s,n,a)}return a}function Lm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ft.updateQueue,n===null?(n=Uc(),Ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,s){n.value=a,n.getSnapshot=s,Pm(n)&&Fm(t)}function Om(t,n,a){return a(function(){Pm(n)&&Fm(t)})}function Pm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function Fm(t){var n=jn(t,2);n!==null&&yi(n,t,2)}function ch(t){var n=hi();if(typeof t=="function"){var a=t;if(t=a(),os){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},n}function zm(t,n,a,s){return t.baseState=a,oh(t,fn,typeof s=="function"?s:Na)}function pv(t,n,a,s,u){if(Fc(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};z.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Bm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Bm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var h=z.T,y={};z.T=y;try{var U=a(u,s),Y=z.S;Y!==null&&Y(y,U),Im(t,n,U)}catch(ue){uh(t,n,ue)}finally{h!==null&&y.types!==null&&(h.types=y.types),z.T=h}}else try{h=a(u,s),Im(t,n,h)}catch(ue){uh(t,n,ue)}}function Im(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Hm(t,n,s)},function(s){return uh(t,n,s)}):Hm(t,n,a)}function Hm(t,n,a){n.status="fulfilled",n.value=a,Vm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Bm(t,a)))}function uh(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Vm(n),n=n.next;while(n!==s)}t.action=null}function Vm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Gm(t,n){return n}function km(t,n){if(Jt){var a=xn.formState;if(a!==null){e:{var s=Ft;if(Jt){if(_n){t:{for(var u=_n,h=Ii;u.nodeType!==8;){if(!h){u=null;break t}if(u=Vi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){_n=Vi(u.nextSibling),s=u.data==="F!";break e}}ur(s)}s=!1}s&&(n=a[0])}}return a=hi(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:n},a.queue=s,a=l0.bind(null,Ft,s),s.dispatch=a,s=ch(!1),h=xh.bind(null,Ft,!1,s.queue),s=hi(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=pv.bind(null,Ft,u,h,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Xm(t){var n=On();return Wm(n,fn,t)}function Wm(t,n,a){if(n=oh(t,n,Gm)[0],t=Nc(Na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=dl(n)}catch(y){throw y===js?Mc:y}else s=n;n=On();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Ft.flags|=2048,$s(9,{destroy:void 0},mv.bind(null,u,a),null)),[s,h,t]}function mv(t,n){t.action=n}function qm(t){var n=On(),a=fn;if(a!==null)return Wm(n,a,t);On(),n=n.memoizedState,a=On();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function $s(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=Ft.updateQueue,n===null&&(n=Uc(),Ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Ym(){return On().memoizedState}function Oc(t,n,a,s){var u=hi();Ft.flags|=t,u.memoizedState=$s(1|n,{destroy:void 0},a,s===void 0?null:s)}function Pc(t,n,a,s){var u=On();s=s===void 0?null:s;var h=u.memoizedState.inst;fn!==null&&s!==null&&th(s,fn.memoizedState.deps)?u.memoizedState=$s(n,h,a,s):(Ft.flags|=t,u.memoizedState=$s(1|n,h,a,s))}function jm(t,n){Oc(8390656,8,t,n)}function fh(t,n){Pc(2048,8,t,n)}function xv(t){Ft.flags|=4;var n=Ft.updateQueue;if(n===null)n=Uc(),Ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Zm(t){var n=On().memoizedState;return xv({ref:n,nextImpl:t}),function(){if((rn&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Km(t,n){return Pc(4,2,t,n)}function Qm(t,n){return Pc(4,4,t,n)}function Jm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $m(t,n,a){a=a!=null?a.concat([t]):null,Pc(4,4,Jm.bind(null,n,t),a)}function hh(){}function e0(t,n){var a=On();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&th(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function t0(t,n){var a=On();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&th(n,s[1]))return s[0];if(s=t(),os){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s}function dh(t,n,a){return a===void 0||(La&1073741824)!==0&&(Zt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=nx(),Ft.lanes|=t,vr|=t,a)}function n0(t,n,a,s){return fi(a,n)?a:Ks.current!==null?(t=dh(t,a,s),fi(t,n)||(In=!0),t):(La&42)===0||(La&1073741824)!==0&&(Zt&261930)===0?(In=!0,t.memoizedState=a):(t=nx(),Ft.lanes|=t,vr|=t,n)}function i0(t,n,a,s,u){var h=$.p;$.p=h!==0&&8>h?h:8;var y=z.T,U={};z.T=U,xh(t,!1,n,a);try{var Y=u(),ue=z.S;if(ue!==null&&ue(U,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var Me=fv(Y,s);pl(t,n,Me,Ci(t))}else pl(t,n,s,Ci(t))}catch(we){pl(t,n,{then:function(){},status:"rejected",reason:we},Ci())}finally{$.p=h,y!==null&&U.types!==null&&(y.types=U.types),z.T=y}}function gv(){}function ph(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=a0(t).queue;i0(t,u,n,ne,a===null?gv:function(){return r0(t),a(s)})}function a0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function r0(t){var n=a0(t);n.next===null&&(n=t.alternate.memoizedState),pl(t,n.next.queue,{},Ci())}function mh(){return Jn(Ul)}function s0(){return On().memoizedState}function o0(){return On().memoizedState}function _v(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ci();t=dr(a);var s=pr(n,t,a);s!==null&&(yi(s,n,a),cl(s,n,a)),n={cache:Xf()},t.payload=n;return}n=n.return}}function vv(t,n,a){var s=Ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fc(t)?c0(n,a):(a=Aa(t,n,a,s),a!==null&&(yi(a,t,s),u0(a,n,s)))}function l0(t,n,a){var s=Ci();pl(t,n,a,s)}function pl(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fc(t))c0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,U=h(y,a);if(u.hasEagerState=!0,u.eagerState=U,fi(U,y))return ai(t,n,u,0),xn===null&&ii(),!1}catch{}finally{}if(a=Aa(t,n,u,s),a!==null)return yi(a,t,s),u0(a,n,s),!0}return!1}function xh(t,n,a,s){if(s={lane:2,revertLane:jh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Fc(t)){if(n)throw Error(r(479))}else n=Aa(t,a,s,2),n!==null&&yi(n,t,2)}function Fc(t){var n=t.alternate;return t===Ft||n!==null&&n===Ft}function c0(t,n){Qs=Cc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function u0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Vr(t,a)}}var ml={readContext:Jn,use:Lc,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn};ml.useEffectEvent=wn;var f0={readContext:Jn,use:Lc,useCallback:function(t,n){return hi().memoizedState=[t,n===void 0?null:n],t},useContext:Jn,useEffect:jm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Oc(4194308,4,Jm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Oc(4194308,4,t,n)},useInsertionEffect:function(t,n){Oc(4,2,t,n)},useMemo:function(t,n){var a=hi();n=n===void 0?null:n;var s=t();if(os){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=hi();if(a!==void 0){var u=a(n);if(os){ot(!0);try{a(n)}finally{ot(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=vv.bind(null,Ft,t),[s.memoizedState,t]},useRef:function(t){var n=hi();return t={current:t},n.memoizedState=t},useState:function(t){t=ch(t);var n=t.queue,a=l0.bind(null,Ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hh,useDeferredValue:function(t,n){var a=hi();return dh(a,t,n)},useTransition:function(){var t=ch(!1);return t=i0.bind(null,Ft,t.queue,!0,!1),hi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Ft,u=hi();if(Jt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),xn===null)throw Error(r(349));(Zt&127)!==0||Lm(s,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,jm(Om.bind(null,s,h,t),[t]),s.flags|=2048,$s(9,{destroy:void 0},Nm.bind(null,s,h,a,n),null),a},useId:function(){var t=hi(),n=xn.identifierPrefix;if(Jt){var a=ha,s=fa;a=(s&~(1<<32-lt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mh,useFormState:km,useActionState:km,useOptimistic:function(t){var n=hi();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xh.bind(null,Ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:sh,useCacheRefresh:function(){return hi().memoizedState=_v.bind(null,Ft)},useEffectEvent:function(t){var n=hi(),a={impl:t};return n.memoizedState=a,function(){if((rn&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},gh={readContext:Jn,use:Lc,useCallback:e0,useContext:Jn,useEffect:fh,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:t0,useReducer:Nc,useRef:Ym,useState:function(){return Nc(Na)},useDebugValue:hh,useDeferredValue:function(t,n){var a=On();return n0(a,fn.memoizedState,t,n)},useTransition:function(){var t=Nc(Na)[0],n=On().memoizedState;return[typeof t=="boolean"?t:dl(t),n]},useSyncExternalStore:Um,useId:s0,useHostTransitionStatus:mh,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=On();return zm(a,fn,t,n)},useMemoCache:sh,useCacheRefresh:o0};gh.useEffectEvent=Zm;var h0={readContext:Jn,use:Lc,useCallback:e0,useContext:Jn,useEffect:fh,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:t0,useReducer:lh,useRef:Ym,useState:function(){return lh(Na)},useDebugValue:hh,useDeferredValue:function(t,n){var a=On();return fn===null?dh(a,t,n):n0(a,fn.memoizedState,t,n)},useTransition:function(){var t=lh(Na)[0],n=On().memoizedState;return[typeof t=="boolean"?t:dl(t),n]},useSyncExternalStore:Um,useId:s0,useHostTransitionStatus:mh,useFormState:qm,useActionState:qm,useOptimistic:function(t,n){var a=On();return fn!==null?zm(a,fn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sh,useCacheRefresh:o0};h0.useEffectEvent=Zm;function _h(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Ci(),u=dr(s);u.payload=n,a!=null&&(u.callback=a),n=pr(t,u,s),n!==null&&(yi(n,t,s),cl(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Ci(),u=dr(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pr(t,u,s),n!==null&&(yi(n,t,s),cl(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ci(),s=dr(a);s.tag=2,n!=null&&(s.callback=n),n=pr(t,s,a),n!==null&&(yi(n,t,a),cl(n,t,a))}};function d0(t,n,a,s,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,y):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,s)||!Qr(u,h):!0}function p0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&vh.enqueueReplaceState(n,n.state,null)}function ls(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function m0(t){At(t)}function x0(t){console.error(t)}function g0(t){At(t)}function zc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function _0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yh(t,n,a){return a=dr(a),a.tag=3,a.payload={element:null},a.callback=function(){zc(t,n)},a}function v0(t){return t=dr(t),t.tag=3,t}function y0(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;t.payload=function(){return u(h)},t.callback=function(){_0(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){_0(n,a,s),typeof u!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var U=s.stack;this.componentDidCatch(s.value,{componentStack:U!==null?U:""})})}function yv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,u,!0),a=Ti.current,a!==null){switch(a.tag){case 31:case 13:return Hi===null?Zc():a.alternate===null&&Rn===0&&(Rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Wh(t,s,u)),!1;case 22:return a.flags|=65536,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Wh(t,s,u)),!1}throw Error(r(435,a.tag))}return Wh(t,s,u),Zc(),!1}if(Jt)return n=Ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==If&&(t=Error(r(422),{cause:s}),al(Fi(t,a)))):(s!==If&&(n=Error(r(423),{cause:s}),al(Fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Fi(s,a),u=yh(t.stateNode,s,u),Kf(t,u),Rn!==4&&(Rn=2)),!1;var h=Error(r(520),{cause:s});if(h=Fi(h,a),Ml===null?Ml=[h]:Ml.push(h),Rn!==4&&(Rn=2),n===null)return!0;s=Fi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yh(a.stateNode,s,t),Kf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yr===null||!yr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=v0(u),y0(u,t,a,s),Kf(a,u),!1}a=a.return}while(a!==null);return!1}var Sh=Error(r(461)),In=!1;function $n(t,n,a,s){n.child=t===null?Em(n,null,a,s):ss(n,t.child,a,s)}function S0(t,n,a,s,u){a=a.render;var h=n.ref;if("ref"in s){var y={};for(var U in s)U!=="ref"&&(y[U]=s[U])}else y=s;return ns(n),s=nh(t,n,a,y,h,u),U=ih(),t!==null&&!In?(ah(t,n,u),Oa(t,n,u)):(Jt&&U&&zf(n),n.flags|=1,$n(t,n,s,u),n.child)}function b0(t,n,a,s,u){if(t===null){var h=a.type;return typeof h=="function"&&!Of(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,M0(t,n,h,s,u)):(t=_c(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Ch(t,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(y,s)&&t.ref===n.ref)return Oa(t,n,u)}return n.flags|=1,t=Ra(h,s),t.ref=n.ref,t.return=n,n.child=t}function M0(t,n,a,s,u){if(t!==null){var h=t.memoizedProps;if(Qr(h,s)&&t.ref===n.ref)if(In=!1,n.pendingProps=s=h,Ch(t,u))(t.flags&131072)!==0&&(In=!0);else return n.lanes=t.lanes,Oa(t,n,u)}return bh(t,n,a,s,u)}function E0(t,n,a,s){var u=s.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~h}else s=0,n.child=null;return T0(t,n,h,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bc(n,h!==null?h.cachePool:null),h!==null?wm(n,h):Jf(),Rm(n);else return s=n.lanes=536870912,T0(t,n,h!==null?h.baseLanes|a:a,a,s)}else h!==null?(bc(n,h.cachePool),wm(n,h),xr(),n.memoizedState=null):(t!==null&&bc(n,null),Jf(),xr());return $n(t,n,u,a),n.child}function xl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function T0(t,n,a,s,u){var h=qf();return h=h===null?null:{parent:zn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&bc(n,null),Jf(),Rm(n),t!==null&&Ws(t,n,s,!0),n.childLanes=u,null}function Bc(t,n){return n=Hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function A0(t,n,a){return ss(n,t.child,null,a),t=Bc(n,n.pendingProps),t.flags|=2,Ai(n),n.memoizedState=null,t}function Sv(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Jt){if(s.mode==="hidden")return t=Bc(n,s),n.lanes=536870912,xl(null,t);if(eh(n),(t=_n)?(t=Bx(t,Ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:lr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,Qn=n,_n=null)):t=null,t===null)throw ur(n);return n.lanes=536870912,null}return Bc(n,s)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(eh(n),u)if(n.flags&256)n.flags&=-257,n=A0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(In||Ws(t,n,a,!1),u=(a&t.childLanes)!==0,In||u){if(s=xn,s!==null&&(y=Gr(s,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,jn(t,y),yi(s,t,y),Sh;Zc(),n=A0(t,n,a)}else t=h.treeContext,_n=Vi(y.nextSibling),Qn=n,Jt=!0,cr=null,Ii=!1,t!==null&&hm(n,t),n=Bc(n,s),n.flags|=4096;return n}return t=Ra(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ic(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bh(t,n,a,s,u){return ns(n),a=nh(t,n,a,s,void 0,u),s=ih(),t!==null&&!In?(ah(t,n,u),Oa(t,n,u)):(Jt&&s&&zf(n),n.flags|=1,$n(t,n,a,u),n.child)}function w0(t,n,a,s,u,h){return ns(n),n.updateQueue=null,a=Dm(n,s,a,u),Cm(t),s=ih(),t!==null&&!In?(ah(t,n,h),Oa(t,n,h)):(Jt&&s&&zf(n),n.flags|=1,$n(t,n,a,h),n.child)}function R0(t,n,a,s,u){if(ns(n),n.stateNode===null){var h=Vs,y=a.contextType;typeof y=="object"&&y!==null&&(h=Jn(y)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=vh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},jf(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Jn(y):Vs,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(_h(n,a,y,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&vh.enqueueReplaceState(h,h.state,null),fl(n,s,h,u),ul(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var U=n.memoizedProps,Y=ls(a,U);h.props=Y;var ue=h.context,Me=a.contextType;y=Vs,typeof Me=="object"&&Me!==null&&(y=Jn(Me));var we=a.getDerivedStateFromProps;Me=typeof we=="function"||typeof h.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,Me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(U||ue!==y)&&p0(n,h,s,y),hr=!1;var de=n.memoizedState;h.state=de,fl(n,s,h,u),ul(),ue=n.memoizedState,U||de!==ue||hr?(typeof we=="function"&&(_h(n,a,we,s),ue=n.memoizedState),(Y=hr||d0(n,a,Y,s,de,ue,y))?(Me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ue),h.props=s,h.state=ue,h.context=y,s=Y):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Zf(t,n),y=n.memoizedProps,Me=ls(a,y),h.props=Me,we=n.pendingProps,de=h.context,ue=a.contextType,Y=Vs,typeof ue=="object"&&ue!==null&&(Y=Jn(ue)),U=a.getDerivedStateFromProps,(ue=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==we||de!==Y)&&p0(n,h,s,Y),hr=!1,de=n.memoizedState,h.state=de,fl(n,s,h,u),ul();var _e=n.memoizedState;y!==we||de!==_e||hr||t!==null&&t.dependencies!==null&&yc(t.dependencies)?(typeof U=="function"&&(_h(n,a,U,s),_e=n.memoizedState),(Me=hr||d0(n,a,Me,s,de,_e,Y)||t!==null&&t.dependencies!==null&&yc(t.dependencies))?(ue||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,_e,Y),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,_e,Y)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=_e),h.props=s,h.state=_e,h.context=Y,s=Me):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,Ic(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=ss(n,t.child,null,u),n.child=ss(n,null,a,u)):$n(t,n,a,u),n.memoizedState=h.state,t=n.child):t=Oa(t,n,u),t}function C0(t,n,a,s){return es(),n.flags|=256,$n(t,n,a,s),n.child}var Mh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eh(t){return{baseLanes:t,cachePool:_m()}}function Th(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Ri),t}function D0(t,n,a){var s=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Jt){if(u?mr(n):xr(),(t=_n)?(t=Bx(t,Ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:lr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,Qn=n,_n=null)):t=null,t===null)throw ur(n);return od(t)?n.lanes=32:n.lanes=536870912,null}var U=s.children;return s=s.fallback,u?(xr(),u=n.mode,U=Hc({mode:"hidden",children:U},u),s=$r(s,u,a,null),U.return=n,s.return=n,U.sibling=s,n.child=U,s=n.child,s.memoizedState=Eh(a),s.childLanes=Th(t,y,a),n.memoizedState=Mh,xl(null,s)):(mr(n),Ah(n,U))}var Y=t.memoizedState;if(Y!==null&&(U=Y.dehydrated,U!==null)){if(h)n.flags&256?(mr(n),n.flags&=-257,n=wh(t,n,a)):n.memoizedState!==null?(xr(),n.child=t.child,n.flags|=128,n=null):(xr(),U=s.fallback,u=n.mode,s=Hc({mode:"visible",children:s.children},u),U=$r(U,u,a,null),U.flags|=2,s.return=n,U.return=n,s.sibling=U,n.child=s,ss(n,t.child,null,a),s=n.child,s.memoizedState=Eh(a),s.childLanes=Th(t,y,a),n.memoizedState=Mh,n=xl(null,s));else if(mr(n),od(U)){if(y=U.nextSibling&&U.nextSibling.dataset,y)var ue=y.dgst;y=ue,s=Error(r(419)),s.stack="",s.digest=y,al({value:s,source:null,stack:null}),n=wh(t,n,a)}else if(In||Ws(t,n,a,!1),y=(a&t.childLanes)!==0,In||y){if(y=xn,y!==null&&(s=Gr(y,a),s!==0&&s!==Y.retryLane))throw Y.retryLane=s,jn(t,s),yi(y,t,s),Sh;sd(U)||Zc(),n=wh(t,n,a)}else sd(U)?(n.flags|=192,n.child=t.child,n=null):(t=Y.treeContext,_n=Vi(U.nextSibling),Qn=n,Jt=!0,cr=null,Ii=!1,t!==null&&hm(n,t),n=Ah(n,s.children),n.flags|=4096);return n}return u?(xr(),U=s.fallback,u=n.mode,Y=t.child,ue=Y.sibling,s=Ra(Y,{mode:"hidden",children:s.children}),s.subtreeFlags=Y.subtreeFlags&65011712,ue!==null?U=Ra(ue,U):(U=$r(U,u,a,null),U.flags|=2),U.return=n,s.return=n,s.sibling=U,n.child=s,xl(null,s),s=n.child,U=t.child.memoizedState,U===null?U=Eh(a):(u=U.cachePool,u!==null?(Y=zn._currentValue,u=u.parent!==Y?{parent:Y,pool:Y}:u):u=_m(),U={baseLanes:U.baseLanes|a,cachePool:u}),s.memoizedState=U,s.childLanes=Th(t,y,a),n.memoizedState=Mh,xl(t.child,s)):(mr(n),a=t.child,t=a.sibling,a=Ra(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Ah(t,n){return n=Hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hc(t,n){return t=Ei(22,t,null,n),t.lanes=0,t}function wh(t,n,a){return ss(n,t.child,null,a),t=Ah(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function U0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Gf(t.return,n,a)}function Rh(t,n,a,s,u,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function L0(t,n,a){var s=n.pendingProps,u=s.revealOrder,h=s.tail;s=s.children;var y=Nn.current,U=(y&2)!==0;if(U?(y=y&1|2,n.flags|=128):y&=1,De(Nn,y),$n(t,n,s,a),s=Jt?il:0,!U&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,a,n);else if(t.tag===19)U0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Rc(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rh(n,!1,u,a,h,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Rc(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Rh(n,!0,a,null,h,s);break;case"together":Rh(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),vr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ch(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yc(t)))}function bv(t,n,a){switch(n.tag){case 3:ke(n,n.stateNode.containerInfo),fr(n,zn,t.memoizedState.cache),es();break;case 27:case 5:ft(n);break;case 4:ke(n,n.stateNode.containerInfo);break;case 10:fr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,eh(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(mr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?D0(t,n,a):(mr(n),t=Oa(t,n,a),t!==null?t.sibling:null);mr(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ws(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return L0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),De(Nn,Nn.current),s)break;return null;case 22:return n.lanes=0,E0(t,n,a,n.pendingProps);case 24:fr(n,zn,t.memoizedState.cache)}return Oa(t,n,a)}function N0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)In=!0;else{if(!Ch(t,a)&&(n.flags&128)===0)return In=!1,bv(t,n,a);In=(t.flags&131072)!==0}else In=!1,Jt&&(n.flags&1048576)!==0&&fm(n,il,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=as(n.elementType),n.type=t,typeof t=="function")Of(t)?(s=ls(t,s),n.tag=1,n=R0(null,n,t,s,a)):(n.tag=0,n=bh(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===V){n.tag=11,n=S0(null,n,t,s,a);break e}else if(u===X){n.tag=14,n=b0(null,n,t,s,a);break e}}throw n=Se(t)||t,Error(r(306,n,""))}}return n;case 0:return bh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ls(s,n.pendingProps),R0(t,n,s,u,a);case 3:e:{if(ke(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var h=n.memoizedState;u=h.element,Zf(t,n),fl(n,s,null,a);var y=n.memoizedState;if(s=y.cache,fr(n,zn,s),s!==h.cache&&kf(n,[zn],a,!0),ul(),s=y.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=C0(t,n,s,a);break e}else if(s!==u){u=Fi(Error(r(424)),n),al(u),n=C0(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_n=Vi(t.firstChild),Qn=n,Jt=!0,cr=null,Ii=!0,a=Em(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(es(),s===u){n=Oa(t,n,a);break e}$n(t,n,s,a)}n=n.child}return n;case 26:return Ic(t,n),t===null?(a=Xx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Jt||(a=n.type,t=n.pendingProps,s=nu(he.current).createElement(a),s[En]=n,s[yn]=t,ei(s,a,t),le(s),n.stateNode=s):n.memoizedState=Xx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ft(n),t===null&&Jt&&(s=n.stateNode=Vx(n.type,n.pendingProps,he.current),Qn=n,Ii=!0,u=_n,Er(n.type)?(ld=u,_n=Vi(s.firstChild)):_n=u),$n(t,n,n.pendingProps.children,a),Ic(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Jt&&((u=s=_n)&&(s=Jv(s,n.type,n.pendingProps,Ii),s!==null?(n.stateNode=s,Qn=n,_n=Vi(s.firstChild),Ii=!1,u=!0):u=!1),u||ur(n)),ft(n),u=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,s=h.children,id(u,h)?s=null:y!==null&&id(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=nh(t,n,dv,null,null,a),Ul._currentValue=u),Ic(t,n),$n(t,n,s,a),n.child;case 6:return t===null&&Jt&&((t=a=_n)&&(a=$v(a,n.pendingProps,Ii),a!==null?(n.stateNode=a,Qn=n,_n=null,t=!0):t=!1),t||ur(n)),null;case 13:return D0(t,n,a);case 4:return ke(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ss(n,null,s,a):$n(t,n,s,a),n.child;case 11:return S0(t,n,n.type,n.pendingProps,a);case 7:return $n(t,n,n.pendingProps,a),n.child;case 8:return $n(t,n,n.pendingProps.children,a),n.child;case 12:return $n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fr(n,n.type,s.value),$n(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ns(n),u=Jn(u),s=s(u),n.flags|=1,$n(t,n,s,a),n.child;case 14:return b0(t,n,n.type,n.pendingProps,a);case 15:return M0(t,n,n.type,n.pendingProps,a);case 19:return L0(t,n,a);case 31:return Sv(t,n,a);case 22:return E0(t,n,a,n.pendingProps);case 24:return ns(n),s=Jn(zn),t===null?(u=qf(),u===null&&(u=xn,h=Xf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:s,cache:u},jf(n),fr(n,zn,u)):((t.lanes&a)!==0&&(Zf(t,n),fl(n,null,null,a),ul()),u=t.memoizedState,h=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fr(n,zn,s)):(s=h.cache,fr(n,zn,s),s!==u.cache&&kf(n,[zn],a,!0))),$n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Pa(t){t.flags|=4}function Dh(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(sx())t.flags|=8192;else throw rs=Ec,Yf}else t.flags&=-16777217}function O0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zx(n))if(sx())t.flags|=8192;else throw rs=Ec,Yf}function Vc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?it():536870912,t.lanes|=n,io|=n)}function gl(t,n){if(!Jt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function vn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Mv(t,n,a){var s=n.pendingProps;switch(Bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ua(zn),rt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hf())),vn(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(Pa(n),h!==null?(vn(n),O0(n,h)):(vn(n),Dh(n,u,null,s,a))):h?h!==t.memoizedState?(Pa(n),vn(n),O0(n,h)):(vn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Pa(n),vn(n),Dh(n,u,t,s,a)),null;case 27:if(be(n),a=he.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return vn(n),null}t=Fe.current,Xs(n)?dm(n):(t=Vx(u,s,a),n.stateNode=t,Pa(n))}return vn(n),null;case 5:if(be(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return vn(n),null}if(h=Fe.current,Xs(n))dm(n);else{var y=nu(he.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof s.is=="string"?y.createElement("select",{is:s.is}):y.createElement("select"),s.multiple?h.multiple=!0:s.size&&(h.size=s.size);break;default:h=typeof s.is=="string"?y.createElement(u,{is:s.is}):y.createElement(u)}}h[En]=n,h[yn]=s;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;e:switch(ei(h,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Pa(n)}}return vn(n),Dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=he.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Qn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[En]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Dx(t.nodeValue,a)),t||ur(n,!0)}else t=nu(t).createTextNode(s),t[En]=n,n.stateNode=t}return vn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Xs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[En]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),t=!1}else a=Hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Ai(n),n):(Ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return vn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[En]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=Hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ai(n),n):(Ai(n),null)}return Ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),h=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Vc(n,n.updateQueue),vn(n),null);case 4:return rt(),t===null&&Jh(n.stateNode.containerInfo),vn(n),null;case 10:return Ua(n.type),vn(n),null;case 19:if(pe(Nn),s=n.memoizedState,s===null)return vn(n),null;if(u=(n.flags&128)!==0,h=s.rendering,h===null)if(u)gl(s,!1);else{if(Rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Rc(t),h!==null){for(n.flags|=128,gl(s,!1),t=h.updateQueue,n.updateQueue=t,Vc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lm(a,t),a=a.sibling;return De(Nn,Nn.current&1|2),Jt&&Ca(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&R()>qc&&(n.flags|=128,u=!0,gl(s,!1),n.lanes=4194304)}else{if(!u)if(t=Rc(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Vc(n,t),gl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!h.alternate&&!Jt)return vn(n),null}else 2*R()-s.renderingStartTime>qc&&a!==536870912&&(n.flags|=128,u=!0,gl(s,!1),n.lanes=4194304);s.isBackwards?(h.sibling=n.child,n.child=h):(t=s.last,t!==null?t.sibling=h:n.child=h,s.last=h)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=R(),t.sibling=null,a=Nn.current,De(Nn,u?a&1|2:a&1),Jt&&Ca(n,s.treeForkCount),t):(vn(n),null);case 22:case 23:return Ai(n),$f(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&Vc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&pe(is),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ua(zn),vn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ev(t,n){switch(Bf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ua(zn),rt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return be(n),null;case 31:if(n.memoizedState!==null){if(Ai(n),n.alternate===null)throw Error(r(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return pe(Nn),null;case 4:return rt(),null;case 10:return Ua(n.type),null;case 22:case 23:return Ai(n),$f(),t!==null&&pe(is),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ua(zn),null;case 25:return null;default:return null}}function P0(t,n){switch(Bf(n),n.tag){case 3:Ua(zn),rt();break;case 26:case 27:case 5:be(n);break;case 4:rt();break;case 31:n.memoizedState!==null&&Ai(n);break;case 13:Ai(n);break;case 19:pe(Nn);break;case 10:Ua(n.type);break;case 22:case 23:Ai(n),$f(),t!==null&&pe(is);break;case 24:Ua(zn)}}function _l(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var h=a.create,y=a.inst;s=h(),y.destroy=s}a=a.next}while(a!==u)}}catch(U){ln(n,n.return,U)}}function gr(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){var y=s.inst,U=y.destroy;if(U!==void 0){y.destroy=void 0,u=n;var Y=a,ue=U;try{ue()}catch(Me){ln(u,Y,Me)}}}s=s.next}while(s!==h)}}catch(Me){ln(n,n.return,Me)}}function F0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Am(n,a)}catch(s){ln(t,t.return,s)}}}function z0(t,n,a){a.props=ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ln(t,n,s)}}function vl(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){ln(t,n,u)}}function da(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ln(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ln(t,n,u)}else a.current=null}function B0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ln(t,t.return,u)}}function Uh(t,n,a){try{var s=t.stateNode;qv(s,t.type,a,n),s[yn]=n}catch(u){ln(t,t.return,u)}}function I0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Er(t.type)||t.tag===4}function Lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(s!==4&&(s===27&&Er(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Nh(t,n,a),t=t.sibling;t!==null;)Nh(t,n,a),t=t.sibling}function Gc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Er(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gc(t,n,a),t=t.sibling;t!==null;)Gc(t,n,a),t=t.sibling}function H0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ei(n,s,a),n[En]=t,n[yn]=a}catch(h){ln(t,t.return,h)}}var Fa=!1,Hn=!1,Oh=!1,V0=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function Tv(t,n){if(t=t.containerInfo,td=cu,t=tl(t),Jr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var y=0,U=-1,Y=-1,ue=0,Me=0,we=t,de=null;t:for(;;){for(var _e;we!==a||u!==0&&we.nodeType!==3||(U=y+u),we!==h||s!==0&&we.nodeType!==3||(Y=y+s),we.nodeType===3&&(y+=we.nodeValue.length),(_e=we.firstChild)!==null;)de=we,we=_e;for(;;){if(we===t)break t;if(de===a&&++ue===u&&(U=y),de===h&&++Me===s&&(Y=y),(_e=we.nextSibling)!==null)break;we=de,de=we.parentNode}we=_e}a=U===-1||Y===-1?null:{start:U,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},cu=!1,Zn=n;Zn!==null;)if(n=Zn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Zn=t;else for(;Zn!==null;){switch(n=Zn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var ut=ls(a.type,u);t=s.getSnapshotBeforeUpdate(ut,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(wt){ln(a,a.return,wt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Zn=t;break}Zn=n.return}}function G0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),s&4&&_l(5,a);break;case 1:if(Ba(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){ln(a,a.return,y)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){ln(a,a.return,y)}}s&64&&F0(a),s&512&&vl(a,a.return);break;case 3:if(Ba(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(t,n)}catch(y){ln(a,a.return,y)}}break;case 27:n===null&&s&4&&H0(a);case 26:case 5:Ba(t,a),n===null&&s&4&&B0(a),s&512&&vl(a,a.return);break;case 12:Ba(t,a);break;case 31:Ba(t,a),s&4&&W0(t,a);break;case 13:Ba(t,a),s&4&&q0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ov.bind(null,a),ey(t,a))));break;case 22:if(s=a.memoizedState!==null||Fa,!s){n=n!==null&&n.memoizedState!==null||Hn,u=Fa;var h=Hn;Fa=s,(Hn=n)&&!h?Ia(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),Fa=u,Hn=h}break;case 30:break;default:Ba(t,a)}}function k0(t){var n=t.alternate;n!==null&&(t.alternate=null,k0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&kr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Sn=null,xi=!1;function za(t,n,a){for(a=a.child;a!==null;)X0(t,n,a),a=a.sibling}function X0(t,n,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:Hn||da(a,n),za(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||da(a,n);var s=Sn,u=xi;Er(a.type)&&(Sn=a.stateNode,xi=!1),za(t,n,a),Rl(a.stateNode),Sn=s,xi=u;break;case 5:Hn||da(a,n);case 6:if(s=Sn,u=xi,Sn=null,za(t,n,a),Sn=s,xi=u,Sn!==null)if(xi)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(h){ln(a,n,h)}else try{Sn.removeChild(a.stateNode)}catch(h){ln(a,n,h)}break;case 18:Sn!==null&&(xi?(t=Sn,Fx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fo(t)):Fx(Sn,a.stateNode));break;case 4:s=Sn,u=xi,Sn=a.stateNode.containerInfo,xi=!0,za(t,n,a),Sn=s,xi=u;break;case 0:case 11:case 14:case 15:gr(2,a,n),Hn||gr(4,a,n),za(t,n,a);break;case 1:Hn||(da(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&z0(a,n,s)),za(t,n,a);break;case 21:za(t,n,a);break;case 22:Hn=(s=Hn)||a.memoizedState!==null,za(t,n,a),Hn=s;break;default:za(t,n,a)}}function W0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fo(t)}catch(a){ln(n,n.return,a)}}}function q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fo(t)}catch(a){ln(n,n.return,a)}}function Av(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new V0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new V0),n;default:throw Error(r(435,t.tag))}}function kc(t,n){var a=Av(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Pv.bind(null,t,s);s.then(u,u)}})}function gi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=t,y=n,U=y;e:for(;U!==null;){switch(U.tag){case 27:if(Er(U.type)){Sn=U.stateNode,xi=!1;break e}break;case 5:Sn=U.stateNode,xi=!1;break e;case 3:case 4:Sn=U.stateNode.containerInfo,xi=!0;break e}U=U.return}if(Sn===null)throw Error(r(160));X0(h,y,u),Sn=null,xi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Y0(n,t),n=n.sibling}var $i=null;function Y0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:gi(n,t),_i(t),s&4&&(gr(3,t,t.return),_l(3,t),gr(5,t,t.return));break;case 1:gi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),s&64&&Fa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=$i;if(gi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ba]||h[En]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),ei(h,s,a),h[En]=t,le(h),s=h;break e;case"link":var y=Yx("link","href",u).get(s+(a.href||""));if(y){for(var U=0;U<y.length;U++)if(h=y[U],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(U,1);break t}}h=u.createElement(s),ei(h,s,a),u.head.appendChild(h);break;case"meta":if(y=Yx("meta","content",u).get(s+(a.content||""))){for(U=0;U<y.length;U++)if(h=y[U],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(U,1);break t}}h=u.createElement(s),ei(h,s,a),u.head.appendChild(h);break;default:throw Error(r(468,s))}h[En]=t,le(h),s=h}t.stateNode=s}else jx(u,t.type,t.stateNode);else t.stateNode=qx(u,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?jx(u,t.type,t.stateNode):qx(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Uh(t,t.memoizedProps,a.memoizedProps)}break;case 27:gi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),a!==null&&s&4&&Uh(t,t.memoizedProps,a.memoizedProps);break;case 5:if(gi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),t.flags&32){u=t.stateNode;try{Pi(u,"")}catch(ut){ln(t,t.return,ut)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Uh(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Oh=!0);break;case 6:if(gi(n,t),_i(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ut){ln(t,t.return,ut)}}break;case 3:if(ru=null,u=$i,$i=iu(n.containerInfo),gi(n,t),$i=u,_i(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fo(n.containerInfo)}catch(ut){ln(t,t.return,ut)}Oh&&(Oh=!1,j0(t));break;case 4:s=$i,$i=iu(t.stateNode.containerInfo),gi(n,t),_i(t),$i=s;break;case 12:gi(n,t),_i(t);break;case 31:gi(n,t),_i(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 13:gi(n,t),_i(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wc=R()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 22:u=t.memoizedState!==null;var Y=a!==null&&a.memoizedState!==null,ue=Fa,Me=Hn;if(Fa=ue||u,Hn=Me||Y,gi(n,t),Hn=Me,Fa=ue,_i(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||Y||Fa||Hn||cs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){Y=a=n;try{if(h=Y.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{U=Y.stateNode;var we=Y.memoizedProps.style,de=we!=null&&we.hasOwnProperty("display")?we.display:null;U.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(ut){ln(Y,Y.return,ut)}}}else if(n.tag===6){if(a===null){Y=n;try{Y.stateNode.nodeValue=u?"":Y.memoizedProps}catch(ut){ln(Y,Y.return,ut)}}}else if(n.tag===18){if(a===null){Y=n;try{var _e=Y.stateNode;u?zx(_e,!0):zx(Y.stateNode,!1)}catch(ut){ln(Y,Y.return,ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,kc(t,a))));break;case 19:gi(n,t),_i(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 30:break;case 21:break;default:gi(n,t),_i(t)}}function _i(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(I0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Lh(t);Gc(t,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(Pi(y,""),a.flags&=-33);var U=Lh(t);Gc(t,U,y);break;case 3:case 4:var Y=a.stateNode.containerInfo,ue=Lh(t);Nh(t,ue,Y);break;default:throw Error(r(161))}}catch(Me){ln(t,t.return,Me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function j0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;j0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)G0(t,n.alternate,n),n=n.sibling}function cs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:gr(4,n,n.return),cs(n);break;case 1:da(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&z0(n,n.return,a),cs(n);break;case 27:Rl(n.stateNode);case 26:case 5:da(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}t=t.sibling}}function Ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:Ia(u,h,a),_l(4,h);break;case 1:if(Ia(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ue){ln(s,s.return,ue)}if(s=h,u=s.updateQueue,u!==null){var U=s.stateNode;try{var Y=u.shared.hiddenCallbacks;if(Y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Y.length;u++)Tm(Y[u],U)}catch(ue){ln(s,s.return,ue)}}a&&y&64&&F0(h),vl(h,h.return);break;case 27:H0(h);case 26:case 5:Ia(u,h,a),a&&s===null&&y&4&&B0(h),vl(h,h.return);break;case 12:Ia(u,h,a);break;case 31:Ia(u,h,a),a&&y&4&&W0(u,h);break;case 13:Ia(u,h,a),a&&y&4&&q0(u,h);break;case 22:h.memoizedState===null&&Ia(u,h,a),vl(h,h.return);break;case 30:break;default:Ia(u,h,a)}n=n.sibling}}function Ph(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&rl(a))}function Fh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rl(t))}function ea(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(t,n,a,s),n=n.sibling}function Z0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ea(t,n,a,s),u&2048&&_l(9,n);break;case 1:ea(t,n,a,s);break;case 3:ea(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rl(t)));break;case 12:if(u&2048){ea(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,U=h.onPostCommit;typeof U=="function"&&U(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Y){ln(n,n.return,Y)}}else ea(t,n,a,s);break;case 31:ea(t,n,a,s);break;case 13:ea(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?ea(t,n,a,s):yl(t,n):h._visibility&2?ea(t,n,a,s):(h._visibility|=2,eo(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ph(y,n);break;case 24:ea(t,n,a,s),u&2048&&Fh(n.alternate,n);break;default:ea(t,n,a,s)}}function eo(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,y=n,U=a,Y=s,ue=y.flags;switch(y.tag){case 0:case 11:case 15:eo(h,y,U,Y,u),_l(8,y);break;case 23:break;case 22:var Me=y.stateNode;y.memoizedState!==null?Me._visibility&2?eo(h,y,U,Y,u):yl(h,y):(Me._visibility|=2,eo(h,y,U,Y,u)),u&&ue&2048&&Ph(y.alternate,y);break;case 24:eo(h,y,U,Y,u),u&&ue&2048&&Fh(y.alternate,y);break;default:eo(h,y,U,Y,u)}n=n.sibling}}function yl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:yl(a,s),u&2048&&Ph(s.alternate,s);break;case 24:yl(a,s),u&2048&&Fh(s.alternate,s);break;default:yl(a,s)}n=n.sibling}}var Sl=8192;function to(t,n,a){if(t.subtreeFlags&Sl)for(t=t.child;t!==null;)K0(t,n,a),t=t.sibling}function K0(t,n,a){switch(t.tag){case 26:to(t,n,a),t.flags&Sl&&t.memoizedState!==null&&hy(a,$i,t.memoizedState,t.memoizedProps);break;case 5:to(t,n,a);break;case 3:case 4:var s=$i;$i=iu(t.stateNode.containerInfo),to(t,n,a),$i=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Sl,Sl=16777216,to(t,n,a),Sl=s):to(t,n,a));break;default:to(t,n,a)}}function Q0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,$0(s,t)}Q0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)J0(t),t=t.sibling}function J0(t){switch(t.tag){case 0:case 11:case 15:bl(t),t.flags&2048&&gr(9,t,t.return);break;case 3:bl(t);break;case 12:bl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xc(t)):bl(t);break;default:bl(t)}}function Xc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,$0(s,t)}Q0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:gr(8,n,n.return),Xc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xc(n));break;default:Xc(n)}t=t.sibling}}function $0(t,n){for(;Zn!==null;){var a=Zn;switch(a.tag){case 0:case 11:case 15:gr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:rl(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Zn=s;else e:for(a=t;Zn!==null;){s=Zn;var u=s.sibling,h=s.return;if(k0(s),s===a){Zn=null;break e}if(u!==null){u.return=h,Zn=u;break e}Zn=h}}}var wv={getCacheForType:function(t){var n=Jn(zn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Jn(zn).controller.signal}},Rv=typeof WeakMap=="function"?WeakMap:Map,rn=0,xn=null,Wt=null,Zt=0,on=0,wi=null,_r=!1,no=!1,zh=!1,Ha=0,Rn=0,vr=0,us=0,Bh=0,Ri=0,io=0,Ml=null,vi=null,Ih=!1,Wc=0,ex=0,qc=1/0,Yc=null,yr=null,kn=0,Sr=null,ao=null,Va=0,Hh=0,Vh=null,tx=null,El=0,Gh=null;function Ci(){return(rn&2)!==0&&Zt!==0?Zt&-Zt:z.T!==null?jh():Sa()}function nx(){if(Ri===0)if((Zt&536870912)===0||Jt){var t=He;He<<=1,(He&3932160)===0&&(He=262144),Ri=t}else Ri=536870912;return t=Ti.current,t!==null&&(t.flags|=32),Ri}function yi(t,n,a){(t===xn&&(on===2||on===9)||t.cancelPendingCommit!==null)&&(ro(t,0),br(t,Zt,Ri,!1)),Yn(t,a),((rn&2)===0||t!==xn)&&(t===xn&&((rn&2)===0&&(us|=a),Rn===4&&br(t,Zt,Ri,!1)),pa(t))}function ix(t,n,a){if((rn&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||nt(t,n),u=s?Uv(t,n):Xh(t,n,!0),h=s;do{if(u===0){no&&!s&&br(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Cv(a)){u=Xh(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var U=t;u=Ml;var Y=U.current.memoizedState.isDehydrated;if(Y&&(ro(U,y).flags|=256),y=Xh(U,y,!1),y!==2){if(zh&&!Y){U.errorRecoveryDisabledLanes|=h,us|=h,u=4;break e}h=vi,vi=u,h!==null&&(vi===null?vi=h:vi.push.apply(vi,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){ro(t,0),br(t,n,0,!0);break}e:{switch(s=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:br(s,n,Ri,!_r);break e;case 2:vi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wc+300-R(),10<u)){if(br(s,n,Ri,!_r),Ae(s,0,!0)!==0)break e;Va=n,s.timeoutHandle=Ox(ax.bind(null,s,a,vi,Yc,Ih,n,Ri,us,io,_r,h,"Throttled",-0,0),u);break e}ax(s,a,vi,Yc,Ih,n,Ri,us,io,_r,h,null,-0,0)}}break}while(!0);pa(t)}function ax(t,n,a,s,u,h,y,U,Y,ue,Me,we,de,_e){if(t.timeoutHandle=-1,we=n.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},K0(n,h,we);var ut=(h&62914560)===h?Wc-R():(h&4194048)===h?ex-R():0;if(ut=dy(we,ut),ut!==null){Va=h,t.cancelPendingCommit=ut(hx.bind(null,t,n,h,a,s,u,y,U,Y,Me,we,null,de,_e)),br(t,h,y,!ue);return}}hx(t,n,h,a,s,u,y,U,Y)}function Cv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!fi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function br(t,n,a,s){n&=~Bh,n&=~us,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var h=31-lt(u),y=1<<h;s[h]=-1,u&=~y}a!==0&&Es(t,a,n)}function jc(){return(rn&6)===0?(Tl(0),!1):!0}function kh(){if(Wt!==null){if(on===0)var t=Wt.return;else t=Wt,Da=ts=null,rh(t),Zs=null,ol=0,t=Wt;for(;t!==null;)P0(t.alternate,t),t=t.return;Wt=null}}function ro(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Va=0,kh(),xn=t,Wt=a=Ra(t.current,null),Zt=n,on=0,wi=null,_r=!1,no=nt(t,n),zh=!1,io=Ri=Bh=us=vr=Rn=0,vi=Ml=null,Ih=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-lt(s),h=1<<u;n|=t[u],s&=~h}return Ha=n,ii(),a}function rx(t,n){Ft=null,z.H=ml,n===js||n===Mc?(n=Sm(),on=3):n===Yf?(n=Sm(),on=4):on=n===Sh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wi=n,Wt===null&&(Rn=1,zc(t,Fi(n,t.current)))}function sx(){var t=Ti.current;return t===null?!0:(Zt&4194048)===Zt?Hi===null:(Zt&62914560)===Zt||(Zt&536870912)!==0?t===Hi:!1}function ox(){var t=z.H;return z.H=ml,t===null?ml:t}function lx(){var t=z.A;return z.A=wv,t}function Zc(){Rn=4,_r||(Zt&4194048)!==Zt&&Ti.current!==null||(no=!0),(vr&134217727)===0&&(us&134217727)===0||xn===null||br(xn,Zt,Ri,!1)}function Xh(t,n,a){var s=rn;rn|=2;var u=ox(),h=lx();(xn!==t||Zt!==n)&&(Yc=null,ro(t,n)),n=!1;var y=Rn;e:do try{if(on!==0&&Wt!==null){var U=Wt,Y=wi;switch(on){case 8:kh(),y=6;break e;case 3:case 2:case 9:case 6:Ti.current===null&&(n=!0);var ue=on;if(on=0,wi=null,so(t,U,Y,ue),a&&no){y=0;break e}break;default:ue=on,on=0,wi=null,so(t,U,Y,ue)}}Dv(),y=Rn;break}catch(Me){rx(t,Me)}while(!0);return n&&t.shellSuspendCounter++,Da=ts=null,rn=s,z.H=u,z.A=h,Wt===null&&(xn=null,Zt=0,ii()),y}function Dv(){for(;Wt!==null;)cx(Wt)}function Uv(t,n){var a=rn;rn|=2;var s=ox(),u=lx();xn!==t||Zt!==n?(Yc=null,qc=R()+500,ro(t,n)):no=nt(t,n);e:do try{if(on!==0&&Wt!==null){n=Wt;var h=wi;t:switch(on){case 1:on=0,wi=null,so(t,n,h,1);break;case 2:case 9:if(vm(h)){on=0,wi=null,ux(n);break}n=function(){on!==2&&on!==9||xn!==t||(on=7),pa(t)},h.then(n,n);break e;case 3:on=7;break e;case 4:on=5;break e;case 7:vm(h)?(on=0,wi=null,ux(n)):(on=0,wi=null,so(t,n,h,7));break;case 5:var y=null;switch(Wt.tag){case 26:y=Wt.memoizedState;case 5:case 27:var U=Wt;if(y?Zx(y):U.stateNode.complete){on=0,wi=null;var Y=U.sibling;if(Y!==null)Wt=Y;else{var ue=U.return;ue!==null?(Wt=ue,Kc(ue)):Wt=null}break t}}on=0,wi=null,so(t,n,h,5);break;case 6:on=0,wi=null,so(t,n,h,6);break;case 8:kh(),Rn=6;break e;default:throw Error(r(462))}}Lv();break}catch(Me){rx(t,Me)}while(!0);return Da=ts=null,z.H=s,z.A=u,rn=a,Wt!==null?0:(xn=null,Zt=0,ii(),Rn)}function Lv(){for(;Wt!==null&&!gt();)cx(Wt)}function cx(t){var n=N0(t.alternate,t,Ha);t.memoizedProps=t.pendingProps,n===null?Kc(t):Wt=n}function ux(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=w0(a,n,n.pendingProps,n.type,void 0,Zt);break;case 11:n=w0(a,n,n.pendingProps,n.type.render,n.ref,Zt);break;case 5:rh(n);default:P0(a,n),n=Wt=lm(n,Ha),n=N0(a,n,Ha)}t.memoizedProps=t.pendingProps,n===null?Kc(t):Wt=n}function so(t,n,a,s){Da=ts=null,rh(n),Zs=null,ol=0;var u=n.return;try{if(yv(t,u,n,a,Zt)){Rn=1,zc(t,Fi(a,t.current)),Wt=null;return}}catch(h){if(u!==null)throw Wt=u,h;Rn=1,zc(t,Fi(a,t.current)),Wt=null;return}n.flags&32768?(Jt||s===1?t=!0:no||(Zt&536870912)!==0?t=!1:(_r=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),fx(n,t)):Kc(n)}function Kc(t){var n=t;do{if((n.flags&32768)!==0){fx(n,_r);return}t=n.return;var a=Mv(n.alternate,n,Ha);if(a!==null){Wt=a;return}if(n=n.sibling,n!==null){Wt=n;return}Wt=n=t}while(n!==null);Rn===0&&(Rn=5)}function fx(t,n){do{var a=Ev(t.alternate,t);if(a!==null){a.flags&=32767,Wt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Wt=t;return}Wt=t=a}while(t!==null);Rn=6,Wt=null}function hx(t,n,a,s,u,h,y,U,Y){t.cancelPendingCommit=null;do Qc();while(kn!==0);if((rn&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=gn,li(t,a,h,y,U,Y),t===xn&&(Wt=xn=null,Zt=0),ao=n,Sr=t,Va=a,Hh=h,Vh=u,tx=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fv(ae,function(){return gx(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,u=$.p,$.p=2,y=rn,rn|=4;try{Tv(t,n,a)}finally{rn=y,$.p=u,z.T=s}}kn=1,dx(),px(),mx()}}function dx(){if(kn===1){kn=0;var t=Sr,n=ao,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=$.p;$.p=2;var u=rn;rn|=4;try{Y0(n,t);var h=nd,y=tl(t.containerInfo),U=h.focusedElem,Y=h.selectionRange;if(y!==U&&U&&U.ownerDocument&&Fn(U.ownerDocument.documentElement,U)){if(Y!==null&&Jr(U)){var ue=Y.start,Me=Y.end;if(Me===void 0&&(Me=ue),"selectionStart"in U)U.selectionStart=ue,U.selectionEnd=Math.min(Me,U.value.length);else{var we=U.ownerDocument||document,de=we&&we.defaultView||window;if(de.getSelection){var _e=de.getSelection(),ut=U.textContent.length,wt=Math.min(Y.start,ut),dn=Y.end===void 0?wt:Math.min(Y.end,ut);!_e.extend&&wt>dn&&(y=dn,dn=wt,wt=y);var te=gc(U,wt),Q=gc(U,dn);if(te&&Q&&(_e.rangeCount!==1||_e.anchorNode!==te.node||_e.anchorOffset!==te.offset||_e.focusNode!==Q.node||_e.focusOffset!==Q.offset)){var ce=we.createRange();ce.setStart(te.node,te.offset),_e.removeAllRanges(),wt>dn?(_e.addRange(ce),_e.extend(Q.node,Q.offset)):(ce.setEnd(Q.node,Q.offset),_e.addRange(ce))}}}}for(we=[],_e=U;_e=_e.parentNode;)_e.nodeType===1&&we.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<we.length;U++){var Te=we[U];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}cu=!!td,nd=td=null}finally{rn=u,$.p=s,z.T=a}}t.current=n,kn=2}}function px(){if(kn===2){kn=0;var t=Sr,n=ao,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=$.p;$.p=2;var u=rn;rn|=4;try{G0(t,n.alternate,n)}finally{rn=u,$.p=s,z.T=a}}kn=3}}function mx(){if(kn===4||kn===3){kn=0,B();var t=Sr,n=ao,a=Va,s=tx;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?kn=5:(kn=0,ao=Sr=null,xx(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(yr=null),w(a),n=n.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(Ne,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,u=$.p,$.p=2,z.T=null;try{for(var h=t.onRecoverableError,y=0;y<s.length;y++){var U=s[y];h(U.value,{componentStack:U.stack})}}finally{z.T=n,$.p=u}}(Va&3)!==0&&Qc(),pa(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Gh?El++:(El=0,Gh=t):El=0,Tl(0)}}function xx(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,rl(n)))}function Qc(){return dx(),px(),mx(),gx()}function gx(){if(kn!==5)return!1;var t=Sr,n=Hh;Hh=0;var a=w(Va),s=z.T,u=$.p;try{$.p=32>a?32:a,z.T=null,a=Vh,Vh=null;var h=Sr,y=Va;if(kn=0,ao=Sr=null,Va=0,(rn&6)!==0)throw Error(r(331));var U=rn;if(rn|=4,J0(h.current),Z0(h,h.current,y,a),rn=U,Tl(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(Ne,h)}catch{}return!0}finally{$.p=u,z.T=s,xx(t,n)}}function _x(t,n,a){n=Fi(a,n),n=yh(t.stateNode,n,2),t=pr(t,n,2),t!==null&&(Yn(t,2),pa(t))}function ln(t,n,a){if(t.tag===3)_x(t,t,a);else for(;n!==null;){if(n.tag===3){_x(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(yr===null||!yr.has(s))){t=Fi(a,t),a=v0(2),s=pr(n,a,2),s!==null&&(y0(a,s,n,t),Yn(s,2),pa(s));break}}n=n.return}}function Wh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Rv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(zh=!0,u.add(a),t=Nv.bind(null,t,n,a),n.then(t,t))}function Nv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,xn===t&&(Zt&a)===a&&(Rn===4||Rn===3&&(Zt&62914560)===Zt&&300>R()-Wc?(rn&2)===0&&ro(t,0):Bh|=a,io===Zt&&(io=0)),pa(t)}function vx(t,n){n===0&&(n=it()),t=jn(t,n),t!==null&&(Yn(t,n),pa(t))}function Ov(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vx(t,a)}function Pv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),vx(t,a)}function Fv(t,n){return Gt(t,n)}var Jc=null,oo=null,qh=!1,$c=!1,Yh=!1,Mr=0;function pa(t){t!==oo&&t.next===null&&(oo===null?Jc=oo=t:oo=oo.next=t),$c=!0,qh||(qh=!0,Bv())}function Tl(t,n){if(!Yh&&$c){Yh=!0;do for(var a=!1,s=Jc;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var y=s.suspendedLanes,U=s.pingedLanes;h=(1<<31-lt(42|t)+1)-1,h&=u&~(y&~U),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Mx(s,h))}else h=Zt,h=Ae(s,s===xn?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||nt(s,h)||(a=!0,Mx(s,h));s=s.next}while(a);Yh=!1}}function zv(){yx()}function yx(){$c=qh=!1;var t=0;Mr!==0&&jv()&&(t=Mr);for(var n=R(),a=null,s=Jc;s!==null;){var u=s.next,h=Sx(s,n);h===0?(s.next=null,a===null?Jc=u:a.next=u,u===null&&(oo=a)):(a=s,(t!==0||(h&3)!==0)&&($c=!0)),s=u}kn!==0&&kn!==5||Tl(t),Mr!==0&&(Mr=0)}function Sx(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-lt(h),U=1<<y,Y=u[y];Y===-1?((U&a)===0||(U&s)!==0)&&(u[y]=Ct(U,n)):Y<=n&&(t.expiredLanes|=U),h&=~U}if(n=xn,a=Zt,a=Ae(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(on===2||on===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ct(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ct(s),w(a)){case 2:case 8:a=Le;break;case 32:a=ae;break;case 268435456:a=qe;break;default:a=ae}return s=bx.bind(null,t),a=Gt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ct(s),t.callbackPriority=2,t.callbackNode=null,2}function bx(t,n){if(kn!==0&&kn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qc()&&t.callbackNode!==a)return null;var s=Zt;return s=Ae(t,t===xn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ix(t,s,n),Sx(t,R()),t.callbackNode!=null&&t.callbackNode===a?bx.bind(null,t):null)}function Mx(t,n){if(Qc())return null;ix(t,n,!0)}function Bv(){Kv(function(){(rn&6)!==0?Gt(Ee,zv):yx()})}function jh(){if(Mr===0){var t=qs;t===0&&(t=Xe,Xe<<=1,(Xe&261888)===0&&(Xe=256)),Mr=t}return Mr}function Ex(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ws(""+t)}function Tx(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Iv(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var h=Ex((u[yn]||null).action),y=s.submitter;y&&(n=(n=y[yn]||null)?Ex(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var U=new Wr("action","action",null,s,u);t.push({event:U,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Mr!==0){var Y=y?Tx(u,y):new FormData(u);ph(a,{pending:!0,data:Y,method:u.method,action:h},null,Y)}}else typeof h=="function"&&(U.preventDefault(),Y=y?Tx(u,y):new FormData(u),ph(a,{pending:!0,data:Y,method:u.method,action:h},h,Y))},currentTarget:u}]})}}for(var Zh=0;Zh<pt.length;Zh++){var Kh=pt[Zh],Hv=Kh.toLowerCase(),Vv=Kh[0].toUpperCase()+Kh.slice(1);tt(Hv,"on"+Vv)}tt(C,"onAnimationEnd"),tt(F,"onAnimationIteration"),tt(k,"onAnimationStart"),tt("dblclick","onDoubleClick"),tt("focusin","onFocus"),tt("focusout","onBlur"),tt(Z,"onTransitionRun"),tt(ge,"onTransitionStart"),tt(Oe,"onTransitionCancel"),tt(je,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function Ax(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var y=s.length-1;0<=y;y--){var U=s[y],Y=U.instance,ue=U.currentTarget;if(U=U.listener,Y!==h&&u.isPropagationStopped())break e;h=U,u.currentTarget=ue;try{h(u)}catch(Me){At(Me)}u.currentTarget=null,h=Y}else for(y=0;y<s.length;y++){if(U=s[y],Y=U.instance,ue=U.currentTarget,U=U.listener,Y!==h&&u.isPropagationStopped())break e;h=U,u.currentTarget=ue;try{h(u)}catch(Me){At(Me)}u.currentTarget=null,h=Y}}}}function qt(t,n){var a=n[tr];a===void 0&&(a=n[tr]=new Set);var s=t+"__bubble";a.has(s)||(wx(n,t,2,!1),a.add(s))}function Qh(t,n,a){var s=0;n&&(s|=4),wx(a,t,s,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Jh(t){if(!t[eu]){t[eu]=!0,ie.forEach(function(a){a!=="selectionchange"&&(Gv.has(a)||Qh(a,!1,t),Qh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[eu]||(n[eu]=!0,Qh("selectionchange",!1,n))}}function wx(t,n,a,s){switch(ng(n)){case 2:var u=xy;break;case 8:u=gy;break;default:u=dd}a=u.bind(null,n,a,t),u=void 0,!jo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $h(t,n,a,s,u){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var U=s.stateNode.containerInfo;if(U===u)break;if(y===4)for(y=s.return;y!==null;){var Y=y.tag;if((Y===3||Y===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;U!==null;){if(y=la(U),y===null)return;if(Y=y.tag,Y===5||Y===6||Y===26||Y===27){s=h=y;continue e}U=U.parentNode}}s=s.return}$l(function(){var ue=h,Me=qo(a),we=[];e:{var de=st.get(t);if(de!==void 0){var _e=Wr,ut=t;switch(t){case"keypress":if(Ds(a)===0)break e;case"keydown":case"keyup":_e=ac;break;case"focusin":ut="focus",_e=Ns;break;case"focusout":ut="blur",_e=Ns;break;case"beforeblur":case"afterblur":_e=Ns;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=gf;break;case C:case F:case k:_e=cf;break;case je:_e=vf;break;case"scroll":case"scrollend":_e=rf;break;case"wheel":_e=Sf;break;case"copy":case"cut":case"paste":_e=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=rc;break;case"toggle":case"beforetoggle":_e=Mf}var wt=(n&4)!==0,dn=!wt&&(t==="scroll"||t==="scrollend"),te=wt?de!==null?de+"Capture":null:de;wt=[];for(var Q=ue,ce;Q!==null;){var Te=Q;if(ce=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||ce===null||te===null||(Te=Xr(Q,te),Te!=null&&wt.push(wl(Q,Te,ce))),dn)break;Q=Q.return}0<wt.length&&(de=new _e(de,ut,null,a,Me),we.push({event:de,listeners:wt}))}}if((n&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",_e=t==="mouseout"||t==="pointerout",de&&a!==Wo&&(ut=a.relatedTarget||a.fromElement)&&(la(ut)||ut[ni]))break e;if((_e||de)&&(de=Me.window===Me?Me:(de=Me.ownerDocument)?de.defaultView||de.parentWindow:window,_e?(ut=a.relatedTarget||a.toElement,_e=ue,ut=ut?la(ut):null,ut!==null&&(dn=f(ut),wt=ut.tag,ut!==dn||wt!==5&&wt!==27&&wt!==6)&&(ut=null)):(_e=null,ut=ue),_e!==ut)){if(wt=nc,Te="onMouseLeave",te="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(wt=rc,Te="onPointerLeave",te="onPointerEnter",Q="pointer"),dn=_e==null?de:ee(_e),ce=ut==null?de:ee(ut),de=new wt(Te,Q+"leave",_e,a,Me),de.target=dn,de.relatedTarget=ce,Te=null,la(Me)===ue&&(wt=new wt(te,Q+"enter",ut,a,Me),wt.target=ce,wt.relatedTarget=dn,Te=wt),dn=Te,_e&&ut)t:{for(wt=kv,te=_e,Q=ut,ce=0,Te=te;Te;Te=wt(Te))ce++;Te=0;for(var St=Q;St;St=wt(St))Te++;for(;0<ce-Te;)te=wt(te),ce--;for(;0<Te-ce;)Q=wt(Q),Te--;for(;ce--;){if(te===Q||Q!==null&&te===Q.alternate){wt=te;break t}te=wt(te),Q=wt(Q)}wt=null}else wt=null;_e!==null&&Rx(we,de,_e,wt,!1),ut!==null&&dn!==null&&Rx(we,dn,ut,wt,!0)}}e:{if(de=ue?ee(ue):window,_e=de.nodeName&&de.nodeName.toLowerCase(),_e==="select"||_e==="input"&&de.type==="file")var tn=Is;else if(uc(de))if(hc)tn=Lf;else{tn=Df;var mt=Cf}else _e=de.nodeName,!_e||_e.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?ue&&As(ue.elementType)&&(tn=Is):tn=Uf;if(tn&&(tn=tn(t,ue))){fc(we,tn,a,Me);break e}mt&&mt(t,de,ue),t==="focusout"&&ue&&de.type==="number"&&ue.memoizedProps.value!=null&&Tn(de,"number",de.value)}switch(mt=ue?ee(ue):window,t){case"focusin":(uc(mt)||mt.contentEditable==="true")&&(Ta=mt,Hs=ue,sr=null);break;case"focusout":sr=Hs=Ta=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,nl(we,a,Me);break;case"selectionchange":if(Ji)break;case"keydown":case"keyup":nl(we,a,Me)}var zt;if($o)e:{switch(t){case"compositionstart":var Kt="onCompositionStart";break e;case"compositionend":Kt="onCompositionEnd";break e;case"compositionupdate":Kt="onCompositionUpdate";break e}Kt=void 0}else ar?lc(t,a)&&(Kt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(sc&&a.locale!=="ko"&&(ar||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&ar&&(zt=ec()):(Qi=Me,Zo="value"in Qi?Qi.value:Qi.textContent,ar=!0)),mt=tu(ue,Kt),0<mt.length&&(Kt=new Ps(Kt,t,null,a,Me),we.push({event:Kt,listeners:mt}),zt?Kt.data=zt:(zt=cc(a),zt!==null&&(Kt.data=zt)))),(zt=Tf?Af(t,a):wf(t,a))&&(Kt=tu(ue,"onBeforeInput"),0<Kt.length&&(mt=new Ps("onBeforeInput","beforeinput",null,a,Me),we.push({event:mt,listeners:Kt}),mt.data=zt)),Iv(we,t,ue,a,Me)}Ax(we,n)})}function wl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Xr(t,a),u!=null&&s.unshift(wl(t,u,h)),u=Xr(t,n),u!=null&&s.push(wl(t,u,h))),t.tag===3)return s;t=t.return}return[]}function kv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Rx(t,n,a,s,u){for(var h=n._reactName,y=[];a!==null&&a!==s;){var U=a,Y=U.alternate,ue=U.stateNode;if(U=U.tag,Y!==null&&Y===s)break;U!==5&&U!==26&&U!==27||ue===null||(Y=ue,u?(ue=Xr(a,h),ue!=null&&y.unshift(wl(a,ue,Y))):u||(ue=Xr(a,h),ue!=null&&y.push(wl(a,ue,Y)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Xv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Cx(t){return(typeof t=="string"?t:""+t).replace(Xv,`
`).replace(Wv,"")}function Dx(t,n){return n=Cx(n),Cx(t)===n}function hn(t,n,a,s,u,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pi(t,""+s);break;case"className":jt(t,"class",s);break;case"tabIndex":jt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":jt(t,a,s);break;case"style":Xo(t,s,h);break;case"data":if(n!=="object"){jt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ws(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&hn(t,n,"name",u.name,u,null),hn(t,n,"formEncType",u.formEncType,u,null),hn(t,n,"formMethod",u.formMethod,u,null),hn(t,n,"formTarget",u.formTarget,u,null)):(hn(t,n,"encType",u.encType,u,null),hn(t,n,"method",u.method,u,null),hn(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ws(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ji);break;case"onScroll":s!=null&&qt("scroll",t);break;case"onScrollEnd":s!=null&&qt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ws(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":qt("beforetoggle",t),qt("toggle",t),Lt(t,"popover",s);break;case"xlinkActuate":en(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":en(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":en(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":en(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":en(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":en(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":en(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":en(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":en(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Lt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=nf.get(a)||a,Lt(t,a,s))}}function ed(t,n,a,s,u,h){switch(a){case"style":Xo(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Pi(t,s):(typeof s=="number"||typeof s=="bigint")&&Pi(t,""+s);break;case"onScroll":s!=null&&qt("scroll",t);break;case"onScrollEnd":s!=null&&qt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Be.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Lt(t,a,s)}}}function ei(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qt("error",t),qt("load",t);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:hn(t,n,h,y,a,null)}}u&&hn(t,n,"srcSet",a.srcSet,a,null),s&&hn(t,n,"src",a.src,a,null);return;case"input":qt("invalid",t);var U=h=y=u=null,Y=null,ue=null;for(s in a)if(a.hasOwnProperty(s)){var Me=a[s];if(Me!=null)switch(s){case"name":u=Me;break;case"type":y=Me;break;case"checked":Y=Me;break;case"defaultChecked":ue=Me;break;case"value":h=Me;break;case"defaultValue":U=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(r(137,n));break;default:hn(t,n,s,Me,a,null)}}Dt(t,h,U,Y,ue,y,u,!1);return;case"select":qt("invalid",t),s=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":h=U;break;case"defaultValue":y=U;break;case"multiple":s=U;default:hn(t,n,u,U,a,null)}n=h,a=y,t.multiple=!!s,n!=null?Un(t,!!s,n,!1):a!=null&&Un(t,!!s,a,!0);return;case"textarea":qt("invalid",t),h=u=s=null;for(y in a)if(a.hasOwnProperty(y)&&(U=a[y],U!=null))switch(y){case"value":s=U;break;case"defaultValue":u=U;break;case"children":h=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(91));break;default:hn(t,n,y,U,a,null)}Gn(t,s,u,h);return;case"option":for(Y in a)if(a.hasOwnProperty(Y)&&(s=a[Y],s!=null))switch(Y){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:hn(t,n,Y,s,a,null)}return;case"dialog":qt("beforetoggle",t),qt("toggle",t),qt("cancel",t),qt("close",t);break;case"iframe":case"object":qt("load",t);break;case"video":case"audio":for(s=0;s<Al.length;s++)qt(Al[s],t);break;case"image":qt("error",t),qt("load",t);break;case"details":qt("toggle",t);break;case"embed":case"source":case"link":qt("error",t),qt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ue in a)if(a.hasOwnProperty(ue)&&(s=a[ue],s!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:hn(t,n,ue,s,a,null)}return;default:if(As(n)){for(Me in a)a.hasOwnProperty(Me)&&(s=a[Me],s!==void 0&&ed(t,n,Me,s,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(s=a[U],s!=null&&hn(t,n,U,s,a,null))}function qv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,U=null,Y=null,ue=null,Me=null;for(_e in a){var we=a[_e];if(a.hasOwnProperty(_e)&&we!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":Y=we;default:s.hasOwnProperty(_e)||hn(t,n,_e,null,s,we)}}for(var de in s){var _e=s[de];if(we=a[de],s.hasOwnProperty(de)&&(_e!=null||we!=null))switch(de){case"type":h=_e;break;case"name":u=_e;break;case"checked":ue=_e;break;case"defaultChecked":Me=_e;break;case"value":y=_e;break;case"defaultValue":U=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:_e!==we&&hn(t,n,de,_e,s,we)}}Yi(t,y,U,Y,ue,Me,h,u);return;case"select":_e=y=U=de=null;for(h in a)if(Y=a[h],a.hasOwnProperty(h)&&Y!=null)switch(h){case"value":break;case"multiple":_e=Y;default:s.hasOwnProperty(h)||hn(t,n,h,null,s,Y)}for(u in s)if(h=s[u],Y=a[u],s.hasOwnProperty(u)&&(h!=null||Y!=null))switch(u){case"value":de=h;break;case"defaultValue":U=h;break;case"multiple":y=h;default:h!==Y&&hn(t,n,u,h,s,Y)}n=U,a=y,s=_e,de!=null?Un(t,!!a,de,!1):!!s!=!!a&&(n!=null?Un(t,!!a,n,!0):Un(t,!!a,a?[]:"",!1));return;case"textarea":_e=de=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!s.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:hn(t,n,U,null,s,u)}for(y in s)if(u=s[y],h=a[y],s.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":de=u;break;case"defaultValue":_e=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&hn(t,n,y,u,s,h)}Pn(t,de,_e);return;case"option":for(var ut in a)if(de=a[ut],a.hasOwnProperty(ut)&&de!=null&&!s.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:hn(t,n,ut,null,s,de)}for(Y in s)if(de=s[Y],_e=a[Y],s.hasOwnProperty(Y)&&de!==_e&&(de!=null||_e!=null))switch(Y){case"selected":t.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:hn(t,n,Y,de,s,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var wt in a)de=a[wt],a.hasOwnProperty(wt)&&de!=null&&!s.hasOwnProperty(wt)&&hn(t,n,wt,null,s,de);for(ue in s)if(de=s[ue],_e=a[ue],s.hasOwnProperty(ue)&&de!==_e&&(de!=null||_e!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:hn(t,n,ue,de,s,_e)}return;default:if(As(n)){for(var dn in a)de=a[dn],a.hasOwnProperty(dn)&&de!==void 0&&!s.hasOwnProperty(dn)&&ed(t,n,dn,void 0,s,de);for(Me in s)de=s[Me],_e=a[Me],!s.hasOwnProperty(Me)||de===_e||de===void 0&&_e===void 0||ed(t,n,Me,de,s,_e);return}}for(var te in a)de=a[te],a.hasOwnProperty(te)&&de!=null&&!s.hasOwnProperty(te)&&hn(t,n,te,null,s,de);for(we in s)de=s[we],_e=a[we],!s.hasOwnProperty(we)||de===_e||de==null&&_e==null||hn(t,n,we,de,s,_e)}function Ux(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],h=u.transferSize,y=u.initiatorType,U=u.duration;if(h&&U&&Ux(y)){for(y=0,U=u.responseEnd,s+=1;s<a.length;s++){var Y=a[s],ue=Y.startTime;if(ue>U)break;var Me=Y.transferSize,we=Y.initiatorType;Me&&Ux(we)&&(Y=Y.responseEnd,y+=Me*(Y<U?1:(U-ue)/(Y-ue)))}if(--s,n+=8*(h+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var td=null,nd=null;function nu(t){return t.nodeType===9?t:t.ownerDocument}function Lx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function jv(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var Ox=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,Px=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Px<"u"?function(t){return Px.resolve(null).then(t).catch(Qv)}:Ox;function Qv(t){setTimeout(function(){throw t})}function Er(t){return t==="head"}function Fx(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),fo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Rl(a);for(var h=a.firstChild;h;){var y=h.nextSibling,U=h.nodeName;h[ba]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&Rl(t.ownerDocument.body);a=u}while(a);fo(n)}function zx(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jv(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Vi(t.nextSibling),t===null)break}return null}function $v(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Vi(t.nextSibling),t===null))return null;return t}function Bx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Vi(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ey(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function Ix(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Hx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Vx(t,n,a){switch(n=nu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Rl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);kr(t)}var Gi=new Map,Gx=new Set;function iu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ga=$.d;$.d={f:ty,r:ny,D:iy,C:ay,L:ry,m:sy,X:ly,S:oy,M:cy};function ty(){var t=Ga.f(),n=jc();return t||n}function ny(t){var n=L(t);n!==null&&n.tag===5&&n.type==="form"?r0(n):Ga.r(t)}var lo=typeof document>"u"?null:document;function kx(t,n,a){var s=lo;if(s&&typeof n=="string"&&n){var u=un(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Gx.has(u)||(Gx.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),ei(n,"link",t),le(n),s.head.appendChild(n)))}}function iy(t){Ga.D(t),kx("dns-prefetch",t,null)}function ay(t,n){Ga.C(t,n),kx("preconnect",t,n)}function ry(t,n,a){Ga.L(t,n,a);var s=lo;if(s&&t&&n){var u='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(t)+'"]';var h=u;switch(n){case"style":h=co(t);break;case"script":h=uo(t)}Gi.has(h)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Gi.set(h,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Cl(h))||n==="script"&&s.querySelector(Dl(h))||(n=s.createElement("link"),ei(n,"link",t),le(n),s.head.appendChild(n)))}}function sy(t,n){Ga.m(t,n);var a=lo;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+un(s)+'"][href="'+un(t)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=uo(t)}if(!Gi.has(h)&&(t=v({rel:"modulepreload",href:t},n),Gi.set(h,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dl(h)))return}s=a.createElement("link"),ei(s,"link",t),le(s),a.head.appendChild(s)}}}function oy(t,n,a){Ga.S(t,n,a);var s=lo;if(s&&t){var u=xe(s).hoistableStyles,h=co(t);n=n||"default";var y=u.get(h);if(!y){var U={loading:0,preload:null};if(y=s.querySelector(Cl(h)))U.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Gi.get(h))&&cd(t,a);var Y=y=s.createElement("link");le(Y),ei(Y,"link",t),Y._p=new Promise(function(ue,Me){Y.onload=ue,Y.onerror=Me}),Y.addEventListener("load",function(){U.loading|=1}),Y.addEventListener("error",function(){U.loading|=2}),U.loading|=4,au(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:U},u.set(h,y)}}}function ly(t,n){Ga.X(t,n);var a=lo;if(a&&t){var s=xe(a).hoistableScripts,u=uo(t),h=s.get(u);h||(h=a.querySelector(Dl(u)),h||(t=v({src:t,async:!0},n),(n=Gi.get(u))&&ud(t,n),h=a.createElement("script"),le(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function cy(t,n){Ga.M(t,n);var a=lo;if(a&&t){var s=xe(a).hoistableScripts,u=uo(t),h=s.get(u);h||(h=a.querySelector(Dl(u)),h||(t=v({src:t,async:!0,type:"module"},n),(n=Gi.get(u))&&ud(t,n),h=a.createElement("script"),le(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function Xx(t,n,a,s){var u=(u=he.current)?iu(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=co(a.href),a=xe(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=co(a.href);var h=xe(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(Cl(t)))&&!h._p&&(y.instance=h,y.state.loading=5),Gi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gi.set(t,a),h||uy(u,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=uo(a),a=xe(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function co(t){return'href="'+un(t)+'"'}function Cl(t){return'link[rel="stylesheet"]['+t+"]"}function Wx(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function uy(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),ei(n,"link",a),le(n),t.head.appendChild(n))}function uo(t){return'[src="'+un(t)+'"]'}function Dl(t){return"script[async]"+t}function qx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(s)return n.instance=s,le(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),le(s),ei(s,"style",u),au(s,a.precedence,t),n.instance=s;case"stylesheet":u=co(a.href);var h=t.querySelector(Cl(u));if(h)return n.state.loading|=4,n.instance=h,le(h),h;s=Wx(a),(u=Gi.get(u))&&cd(s,u),h=(t.ownerDocument||t).createElement("link"),le(h);var y=h;return y._p=new Promise(function(U,Y){y.onload=U,y.onerror=Y}),ei(h,"link",s),n.state.loading|=4,au(h,a.precedence,t),n.instance=h;case"script":return h=uo(a.src),(u=t.querySelector(Dl(h)))?(n.instance=u,le(u),u):(s=a,(u=Gi.get(h))&&(s=v({},a),ud(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),le(u),ei(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,au(s,a.precedence,t));return n.instance}function au(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,y=0;y<s.length;y++){var U=s[y];if(U.dataset.precedence===n)h=U;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ru=null;function Yx(t,n,a){if(ru===null){var s=new Map,u=ru=new Map;u.set(a,s)}else u=ru,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[ba]||h[En]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var U=s.get(y);U?U.push(h):s.set(y,[h])}}return s}function jx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=co(s.href),h=n.querySelector(Cl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=su.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,le(h);return}h=n.ownerDocument||n,s=Wx(s),(u=Gi.get(u))&&cd(s,u),h=h.createElement("link"),le(h);var y=h;y._p=new Promise(function(U,Y){y.onload=U,y.onerror=Y}),ei(h,"link",s),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=su.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fd=0;function dy(t,n){return t.stylesheets&&t.count===0&&lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&fd===0&&(fd=62500*Yv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>fd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ou=null;function lu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ou=new Map,n.forEach(py,t),ou=null,su.call(t))}function py(t,n){if(!(n.state.loading&4)){var a=ou.get(t);if(a)var s=a.get(null);else{a=new Map,ou.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||s,h===s&&a.set(null,u),a.set(y,u),this.count++,s=su.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ul={$$typeof:H,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function my(t,n,a,s,u,h,y,U,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$t(0),this.hiddenUpdates=$t(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function Kx(t,n,a,s,u,h,y,U,Y,ue,Me,we){return t=new my(t,n,a,y,Y,ue,Me,we,U),n=1,h===!0&&(n|=24),h=Ei(3,null,null,n),t.current=h,h.stateNode=t,n=Xf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},jf(h),t}function Qx(t){return t?(t=Vs,t):Vs}function Jx(t,n,a,s,u,h){u=Qx(u),s.context===null?s.context=u:s.pendingContext=u,s=dr(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=pr(t,s,n),a!==null&&(yi(a,t,n),cl(a,t,n))}function $x(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){$x(t,n),(t=t.alternate)&&$x(t,n)}function eg(t){if(t.tag===13||t.tag===31){var n=jn(t,67108864);n!==null&&yi(n,t,67108864),hd(t,67108864)}}function tg(t){if(t.tag===13||t.tag===31){var n=Ci();n=ci(n);var a=jn(t,n);a!==null&&yi(a,t,n),hd(t,n)}}var cu=!0;function xy(t,n,a,s){var u=z.T;z.T=null;var h=$.p;try{$.p=2,dd(t,n,a,s)}finally{$.p=h,z.T=u}}function gy(t,n,a,s){var u=z.T;z.T=null;var h=$.p;try{$.p=8,dd(t,n,a,s)}finally{$.p=h,z.T=u}}function dd(t,n,a,s){if(cu){var u=pd(s);if(u===null)$h(t,n,s,uu,a),ig(t,s);else if(vy(u,t,n,a,s))s.stopPropagation();else if(ig(t,s),n&4&&-1<_y.indexOf(t)){for(;u!==null;){var h=L(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Ue(h.pendingLanes);if(y!==0){var U=h;for(U.pendingLanes|=2,U.entangledLanes|=2;y;){var Y=1<<31-lt(y);U.entanglements[1]|=Y,y&=~Y}pa(h),(rn&6)===0&&(qc=R()+500,Tl(0))}}break;case 31:case 13:U=jn(h,2),U!==null&&yi(U,h,2),jc(),hd(h,2)}if(h=pd(s),h===null&&$h(t,n,s,uu,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else $h(t,n,s,null,a)}}function pd(t){return t=qo(t),md(t)}var uu=null;function md(t){if(uu=null,t=la(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=p(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uu=t,null}function ng(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case Ee:return 2;case Le:return 8;case ae:case Ze:return 32;case qe:return 268435456;default:return 32}default:return 32}}var xd=!1,Tr=null,Ar=null,wr=null,Ll=new Map,Nl=new Map,Rr=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ig(t,n){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(n.pointerId)}}function Ol(t,n,a,s,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},n!==null&&(n=L(n),n!==null&&eg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function vy(t,n,a,s,u){switch(n){case"focusin":return Tr=Ol(Tr,t,n,a,s,u),!0;case"dragenter":return Ar=Ol(Ar,t,n,a,s,u),!0;case"mouseover":return wr=Ol(wr,t,n,a,s,u),!0;case"pointerover":var h=u.pointerId;return Ll.set(h,Ol(Ll.get(h)||null,t,n,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,Nl.set(h,Ol(Nl.get(h)||null,t,n,a,s,u)),!0}return!1}function ag(t){var n=la(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=p(a),n!==null){t.blockedOn=n,kt(t.priority,function(){tg(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,kt(t.priority,function(){tg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Wo=s,a.target.dispatchEvent(s),Wo=null}else return n=L(a),n!==null&&eg(n),t.blockedOn=a,!1;n.shift()}return!0}function rg(t,n,a){fu(t)&&a.delete(n)}function yy(){xd=!1,Tr!==null&&fu(Tr)&&(Tr=null),Ar!==null&&fu(Ar)&&(Ar=null),wr!==null&&fu(wr)&&(wr=null),Ll.forEach(rg),Nl.forEach(rg)}function hu(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yy)))}var du=null;function sg(t){du!==t&&(du=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){du===t&&(du=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(md(s||a)===null)continue;break}var h=L(a);h!==null&&(t.splice(n,3),n-=3,ph(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function fo(t){function n(Y){return hu(Y,t)}Tr!==null&&hu(Tr,t),Ar!==null&&hu(Ar,t),wr!==null&&hu(wr,t),Ll.forEach(n),Nl.forEach(n);for(var a=0;a<Rr.length;a++){var s=Rr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)ag(a),a.blockedOn===null&&Rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],y=u[yn]||null;if(typeof h=="function")y||sg(a);else if(y){var U=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[yn]||null)U=y.formAction;else if(md(u)!==null)continue}else U=y.action;typeof U=="function"?a[s+1]=U:(a.splice(s,3),s-=3),sg(a)}}}function og(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gd(t){this._internalRoot=t}pu.prototype.render=gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Ci();Jx(a,s,t,n,null,null)},pu.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jx(t.current,2,null,t,null,null),jc(),n[ni]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Sa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Rr.length&&n!==0&&n<Rr[a].priority;a++);Rr.splice(a,0,t),a===0&&ag(t)}};var lg=e.version;if(lg!=="19.2.0")throw Error(r(527,lg,"19.2.0"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=x(n),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var Sy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Ne=mu.inject(Sy),Pe=mu}catch{}}return Fl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=m0,h=x0,y=g0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Kx(t,1,!1,null,null,a,s,null,u,h,y,og),t[ni]=n.current,Jh(t),new gd(n)},Fl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",h=m0,y=x0,U=g0,Y=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.formState!==void 0&&(Y=a.formState)),n=Kx(t,1,!0,n,a??null,s,u,Y,h,y,U,og),n.context=Qx(null),a=n.current,s=Ci(),s=ci(s),u=dr(s),u.callback=null,pr(a,u,s),a=s,n.current.lanes=a,Yn(n,a),pa(n),t[ni]=n.current,Jh(t),new pu(n)},Fl.version="19.2.0",Fl}var _g;function Ny(){if(_g)return yd.exports;_g=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yd.exports=Ly(),yd.exports}var Oy=Ny();const Kp="181",Co={ROTATE:0,DOLLY:1,PAN:2},Ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,vg=1,Fy=2,R_=1,zy=2,Za=3,Hr=0,Mi=1,xa=2,Ja=0,Do=1,yg=2,Sg=3,bg=4,By=5,gs=100,Iy=101,Hy=102,Vy=103,Gy=104,ky=200,Xy=201,Wy=202,qy=203,rp=204,sp=205,Yy=206,jy=207,Zy=208,Ky=209,Qy=210,Jy=211,$y=212,eS=213,tS=214,op=0,lp=1,cp=2,Lo=3,up=4,fp=5,hp=6,dp=7,C_=0,nS=1,iS=2,Ir=0,aS=1,rS=2,sS=3,oS=4,lS=5,cS=6,uS=7,D_=300,No=301,Oo=302,pp=303,mp=304,Ku=306,xp=1e3,Ka=1001,gp=1002,Li=1003,fS=1004,xu=1005,qi=1006,Ed=1007,vs=1008,va=1009,U_=1010,L_=1011,ql=1012,Qp=1013,ys=1014,Qa=1015,zo=1016,Jp=1017,$p=1018,Yl=1020,N_=35902,O_=35899,P_=1021,F_=1022,ra=1023,jl=1026,Zl=1027,z_=1028,em=1029,tm=1030,nm=1031,im=1033,Iu=33776,Hu=33777,Vu=33778,Gu=33779,_p=35840,vp=35841,yp=35842,Sp=35843,bp=36196,Mp=37492,Ep=37496,Tp=37808,Ap=37809,wp=37810,Rp=37811,Cp=37812,Dp=37813,Up=37814,Lp=37815,Np=37816,Op=37817,Pp=37818,Fp=37819,zp=37820,Bp=37821,Ip=36492,Hp=36494,Vp=36495,Gp=36283,kp=36284,Xp=36285,Wp=36286,hS=3200,dS=3201,B_=0,pS=1,zr="",Xi="srgb",Po="srgb-linear",Wu="linear",pn="srgb",ho=7680,Mg=519,mS=512,xS=513,gS=514,I_=515,_S=516,vS=517,yS=518,SS=519,Eg=35044,Tg="300 es",ga=2e3,qu=2001;function H_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bS(){const o=Yu("canvas");return o.style.display="block",o}const Ag={};function wg(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ut(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Cn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Kl(...o){const e=o.join(" ");e in Ag||(Ag[e]=!0,Ut(...o))}function MS(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}class Ms{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,p=l.length;f<p;f++)l[f].call(this,e);e.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,qp=180/Math.PI;function Ql(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(si[o&255]+si[o>>8&255]+si[o>>16&255]+si[o>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[i&63|128]+si[i>>8&255]+"-"+si[i>>16&255]+si[i>>24&255]+si[r&255]+si[r>>8&255]+si[r>>16&255]+si[r>>24&255]).toLowerCase()}function Yt(o,e,i){return Math.max(e,Math.min(i,o))}function ES(o,e){return(o%e+e)%e}function Td(o,e,i){return(1-i)*o+i*e}function zl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Si(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const TS={DEG2RAD:ku};class Ot{constructor(e=0,i=0){Ot.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Yt(this.x,e.x,i.x),this.y=Yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Yt(this.x,e,i),this.y=Yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,p=this.y-e.y;return this.x=f*r-p*l+e.x,this.y=f*l+p*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ss{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,p,m){let _=r[l+0],x=r[l+1],b=r[l+2],v=r[l+3],E=f[p+0],A=f[p+1],D=f[p+2],N=f[p+3];if(m<=0){e[i+0]=_,e[i+1]=x,e[i+2]=b,e[i+3]=v;return}if(m>=1){e[i+0]=E,e[i+1]=A,e[i+2]=D,e[i+3]=N;return}if(v!==N||_!==E||x!==A||b!==D){let T=_*E+x*A+b*D+v*N;T<0&&(E=-E,A=-A,D=-D,N=-N,T=-T);let M=1-m;if(T<.9995){const q=Math.acos(T),H=Math.sin(q);M=Math.sin(M*q)/H,m=Math.sin(m*q)/H,_=_*M+E*m,x=x*M+A*m,b=b*M+D*m,v=v*M+N*m}else{_=_*M+E*m,x=x*M+A*m,b=b*M+D*m,v=v*M+N*m;const q=1/Math.sqrt(_*_+x*x+b*b+v*v);_*=q,x*=q,b*=q,v*=q}}e[i]=_,e[i+1]=x,e[i+2]=b,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,f,p){const m=r[l],_=r[l+1],x=r[l+2],b=r[l+3],v=f[p],E=f[p+1],A=f[p+2],D=f[p+3];return e[i]=m*D+b*v+_*A-x*E,e[i+1]=_*D+b*E+x*v-m*A,e[i+2]=x*D+b*A+m*E-_*v,e[i+3]=b*D-m*v-_*E-x*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,p=e._order,m=Math.cos,_=Math.sin,x=m(r/2),b=m(l/2),v=m(f/2),E=_(r/2),A=_(l/2),D=_(f/2);switch(p){case"XYZ":this._x=E*b*v+x*A*D,this._y=x*A*v-E*b*D,this._z=x*b*D+E*A*v,this._w=x*b*v-E*A*D;break;case"YXZ":this._x=E*b*v+x*A*D,this._y=x*A*v-E*b*D,this._z=x*b*D-E*A*v,this._w=x*b*v+E*A*D;break;case"ZXY":this._x=E*b*v-x*A*D,this._y=x*A*v+E*b*D,this._z=x*b*D+E*A*v,this._w=x*b*v-E*A*D;break;case"ZYX":this._x=E*b*v-x*A*D,this._y=x*A*v+E*b*D,this._z=x*b*D-E*A*v,this._w=x*b*v+E*A*D;break;case"YZX":this._x=E*b*v+x*A*D,this._y=x*A*v+E*b*D,this._z=x*b*D-E*A*v,this._w=x*b*v-E*A*D;break;case"XZY":this._x=E*b*v-x*A*D,this._y=x*A*v-E*b*D,this._z=x*b*D+E*A*v,this._w=x*b*v+E*A*D;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],p=i[1],m=i[5],_=i[9],x=i[2],b=i[6],v=i[10],E=r+m+v;if(E>0){const A=.5/Math.sqrt(E+1);this._w=.25/A,this._x=(b-_)*A,this._y=(f-x)*A,this._z=(p-l)*A}else if(r>m&&r>v){const A=2*Math.sqrt(1+r-m-v);this._w=(b-_)/A,this._x=.25*A,this._y=(l+p)/A,this._z=(f+x)/A}else if(m>v){const A=2*Math.sqrt(1+m-r-v);this._w=(f-x)/A,this._x=(l+p)/A,this._y=.25*A,this._z=(_+b)/A}else{const A=2*Math.sqrt(1+v-r-m);this._w=(p-l)/A,this._x=(f+x)/A,this._y=(_+b)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,p=e._w,m=i._x,_=i._y,x=i._z,b=i._w;return this._x=r*b+p*m+l*x-f*_,this._y=l*b+p*_+f*m-r*x,this._z=f*b+p*x+r*_-l*m,this._w=p*b-r*m-l*_-f*x,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,f=e._z,p=e._w,m=this.dot(e);m<0&&(r=-r,l=-l,f=-f,p=-p,m=-m);let _=1-i;if(m<.9995){const x=Math.acos(m),b=Math.sin(x);_=Math.sin(_*x)/b,i=Math.sin(i*x)/b,this._x=this._x*_+r*i,this._y=this._y*_+l*i,this._z=this._z*_+f*i,this._w=this._w*_+p*i,this._onChangeCallback()}else this._x=this._x*_+r*i,this._y=this._y*_+l*i,this._z=this._z*_+f*i,this._w=this._w*_+p*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class me{constructor(e=0,i=0,r=0){me.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Rg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Rg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,p=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*p,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*p,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*p,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,p=e.y,m=e.z,_=e.w,x=2*(p*l-m*r),b=2*(m*i-f*l),v=2*(f*r-p*i);return this.x=i+_*x+p*v-m*b,this.y=r+_*b+m*x-f*v,this.z=l+_*v+f*b-p*x,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Yt(this.x,e.x,i.x),this.y=Yt(this.y,e.y,i.y),this.z=Yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Yt(this.x,e,i),this.y=Yt(this.y,e,i),this.z=Yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,p=i.x,m=i.y,_=i.z;return this.x=l*_-f*m,this.y=f*p-r*_,this.z=r*m-l*p,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new me,Rg=new Ss;class Bt{constructor(e,i,r,l,f,p,m,_,x){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,m,_,x)}set(e,i,r,l,f,p,m,_,x){const b=this.elements;return b[0]=e,b[1]=l,b[2]=m,b[3]=i,b[4]=f,b[5]=_,b[6]=r,b[7]=p,b[8]=x,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],m=r[3],_=r[6],x=r[1],b=r[4],v=r[7],E=r[2],A=r[5],D=r[8],N=l[0],T=l[3],M=l[6],q=l[1],H=l[4],V=l[7],K=l[2],I=l[5],X=l[8];return f[0]=p*N+m*q+_*K,f[3]=p*T+m*H+_*I,f[6]=p*M+m*V+_*X,f[1]=x*N+b*q+v*K,f[4]=x*T+b*H+v*I,f[7]=x*M+b*V+v*X,f[2]=E*N+A*q+D*K,f[5]=E*T+A*H+D*I,f[8]=E*M+A*V+D*X,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],x=e[7],b=e[8];return i*p*b-i*m*x-r*f*b+r*m*_+l*f*x-l*p*_}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],x=e[7],b=e[8],v=b*p-m*x,E=m*_-b*f,A=x*f-p*_,D=i*v+r*E+l*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/D;return e[0]=v*N,e[1]=(l*x-b*r)*N,e[2]=(m*r-l*p)*N,e[3]=E*N,e[4]=(b*i-l*_)*N,e[5]=(l*f-m*i)*N,e[6]=A*N,e[7]=(r*_-x*i)*N,e[8]=(p*i-r*f)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,p,m){const _=Math.cos(f),x=Math.sin(f);return this.set(r*_,r*x,-r*(_*p+x*m)+p+e,-l*x,l*_,-l*(-x*p+_*m)+m+i,0,0,1),this}scale(e,i){return this.premultiply(wd.makeScale(e,i)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,i){return this.premultiply(wd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new Bt,Cg=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dg=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const o={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(l,f,p){return this.enabled===!1||f===p||!f||!p||(this.spaces[f].transfer===pn&&(l.r=$a(l.r),l.g=$a(l.g),l.b=$a(l.b)),this.spaces[f].primaries!==this.spaces[p].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[p].fromXYZ)),this.spaces[p].transfer===pn&&(l.r=Uo(l.r),l.g=Uo(l.g),l.b=Uo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===zr?Wu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,p){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Kl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Kl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Po]:{primaries:e,whitePoint:r,transfer:Wu,toXYZ:Cg,fromXYZ:Dg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Xi},outputColorSpaceConfig:{drawingBufferColorSpace:Xi}},[Xi]:{primaries:e,whitePoint:r,transfer:pn,toXYZ:Cg,fromXYZ:Dg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Xi}}}),o}const an=AS();function $a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let po;class wS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{po===void 0&&(po=Yu("canvas")),po.width=e.width,po.height=e.height;const l=po.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=po}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let p=0;p<f.length;p++)f[p]=$a(f[p]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($a(i[r]/255)*255):i[r]=$a(i[r]);return{data:i,width:e.width,height:e.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Ql(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let p=0,m=l.length;p<m;p++)l[p].isDataTexture?f.push(Rd(l[p].image)):f.push(Rd(l[p]))}else f=Rd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let CS=0;const Cd=new me;class pi extends Ms{constructor(e=pi.DEFAULT_IMAGE,i=pi.DEFAULT_MAPPING,r=Ka,l=Ka,f=qi,p=vs,m=ra,_=va,x=pi.DEFAULT_ANISOTROPY,b=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Ql(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=p,this.anisotropy=x,this.format=m,this.internalFormat=null,this.type=_,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=b,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){Ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xp:e.x=e.x-Math.floor(e.x);break;case Ka:e.x=e.x<0?0:1;break;case gp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xp:e.y=e.y-Math.floor(e.y);break;case Ka:e.y=e.y<0?0:1;break;case gp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=D_;pi.DEFAULT_ANISOTROPY=1;class Dn{constructor(e=0,i=0,r=0,l=1){Dn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,p=e.elements;return this.x=p[0]*i+p[4]*r+p[8]*l+p[12]*f,this.y=p[1]*i+p[5]*r+p[9]*l+p[13]*f,this.z=p[2]*i+p[6]*r+p[10]*l+p[14]*f,this.w=p[3]*i+p[7]*r+p[11]*l+p[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const _=e.elements,x=_[0],b=_[4],v=_[8],E=_[1],A=_[5],D=_[9],N=_[2],T=_[6],M=_[10];if(Math.abs(b-E)<.01&&Math.abs(v-N)<.01&&Math.abs(D-T)<.01){if(Math.abs(b+E)<.1&&Math.abs(v+N)<.1&&Math.abs(D+T)<.1&&Math.abs(x+A+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(x+1)/2,V=(A+1)/2,K=(M+1)/2,I=(b+E)/4,X=(v+N)/4,fe=(D+T)/4;return H>V&&H>K?H<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(H),l=I/r,f=X/r):V>K?V<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(V),r=I/l,f=fe/l):K<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(K),r=X/f,l=fe/f),this.set(r,l,f,i),this}let q=Math.sqrt((T-D)*(T-D)+(v-N)*(v-N)+(E-b)*(E-b));return Math.abs(q)<.001&&(q=1),this.x=(T-D)/q,this.y=(v-N)/q,this.z=(E-b)/q,this.w=Math.acos((x+A+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Yt(this.x,e.x,i.x),this.y=Yt(this.y,e.y,i.y),this.z=Yt(this.z,e.z,i.z),this.w=Yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Yt(this.x,e,i),this.y=Yt(this.y,e,i),this.z=Yt(this.z,e,i),this.w=Yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DS extends Ms{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Dn(0,0,e,i),this.scissorTest=!1,this.viewport=new Dn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new pi(l);this.textures=[];const p=r.count;for(let m=0;m<p;m++)this.textures[m]=f.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:qi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new am(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends DS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class V_ extends pi{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class US extends pi{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=new me(1/0,1/0,1/0),i=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ta.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ta.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ta.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let p=0,m=f.count;p<m;p++)e.isMesh===!0?e.getVertexPosition(p,ta):ta.fromBufferAttribute(f,p),ta.applyMatrix4(e.matrixWorld),this.expandByPoint(ta);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gu.copy(r.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const l=e.children;for(let f=0,p=l.length;f<p;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ta),ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bl),_u.subVectors(this.max,Bl),mo.subVectors(e.a,Bl),xo.subVectors(e.b,Bl),go.subVectors(e.c,Bl),Dr.subVectors(xo,mo),Ur.subVectors(go,xo),fs.subVectors(mo,go);let i=[0,-Dr.z,Dr.y,0,-Ur.z,Ur.y,0,-fs.z,fs.y,Dr.z,0,-Dr.x,Ur.z,0,-Ur.x,fs.z,0,-fs.x,-Dr.y,Dr.x,0,-Ur.y,Ur.x,0,-fs.y,fs.x,0];return!Dd(i,mo,xo,go,_u)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,mo,xo,go,_u))?!1:(vu.crossVectors(Dr,Ur),i=[vu.x,vu.y,vu.z],Dd(i,mo,xo,go,_u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ta).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ta).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ka=[new me,new me,new me,new me,new me,new me,new me,new me],ta=new me,gu=new Bo,mo=new me,xo=new me,go=new me,Dr=new me,Ur=new me,fs=new me,Bl=new me,_u=new me,vu=new me,hs=new me;function Dd(o,e,i,r,l){for(let f=0,p=o.length-3;f<=p;f+=3){hs.fromArray(o,f);const m=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),_=e.dot(hs),x=i.dot(hs),b=r.dot(hs);if(Math.max(-Math.max(_,x,b),Math.min(_,x,b))>m)return!1}return!0}const LS=new Bo,Il=new me,Ud=new me;class Qu{constructor(e=new me,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):LS.setFromPoints(e).getCenter(r);let l=0;for(let f=0,p=e.length;f<p;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Il.subVectors(e,this.center);const i=Il.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Il,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Il.copy(e.center).add(Ud)),this.expandByPoint(Il.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xa=new me,Ld=new me,yu=new me,Lr=new me,Nd=new me,Su=new me,Od=new me;class Ju{constructor(e=new me,i=new me(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Xa.copy(this.origin).addScaledVector(this.direction,i),Xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ld.copy(e).add(i).multiplyScalar(.5),yu.copy(i).sub(e).normalize(),Lr.copy(this.origin).sub(Ld);const f=e.distanceTo(i)*.5,p=-this.direction.dot(yu),m=Lr.dot(this.direction),_=-Lr.dot(yu),x=Lr.lengthSq(),b=Math.abs(1-p*p);let v,E,A,D;if(b>0)if(v=p*_-m,E=p*m-_,D=f*b,v>=0)if(E>=-D)if(E<=D){const N=1/b;v*=N,E*=N,A=v*(v+p*E+2*m)+E*(p*v+E+2*_)+x}else E=f,v=Math.max(0,-(p*E+m)),A=-v*v+E*(E+2*_)+x;else E=-f,v=Math.max(0,-(p*E+m)),A=-v*v+E*(E+2*_)+x;else E<=-D?(v=Math.max(0,-(-p*f+m)),E=v>0?-f:Math.min(Math.max(-f,-_),f),A=-v*v+E*(E+2*_)+x):E<=D?(v=0,E=Math.min(Math.max(-f,-_),f),A=E*(E+2*_)+x):(v=Math.max(0,-(p*f+m)),E=v>0?f:Math.min(Math.max(-f,-_),f),A=-v*v+E*(E+2*_)+x);else E=p>0?-f:f,v=Math.max(0,-(p*E+m)),A=-v*v+E*(E+2*_)+x;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ld).addScaledVector(yu,E),A}intersectSphere(e,i){Xa.subVectors(e.center,this.origin);const r=Xa.dot(this.direction),l=Xa.dot(Xa)-r*r,f=e.radius*e.radius;if(l>f)return null;const p=Math.sqrt(f-l),m=r-p,_=r+p;return _<0?null:m<0?this.at(_,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,p,m,_;const x=1/this.direction.x,b=1/this.direction.y,v=1/this.direction.z,E=this.origin;return x>=0?(r=(e.min.x-E.x)*x,l=(e.max.x-E.x)*x):(r=(e.max.x-E.x)*x,l=(e.min.x-E.x)*x),b>=0?(f=(e.min.y-E.y)*b,p=(e.max.y-E.y)*b):(f=(e.max.y-E.y)*b,p=(e.min.y-E.y)*b),r>p||f>l||((f>r||isNaN(r))&&(r=f),(p<l||isNaN(l))&&(l=p),v>=0?(m=(e.min.z-E.z)*v,_=(e.max.z-E.z)*v):(m=(e.max.z-E.z)*v,_=(e.min.z-E.z)*v),r>_||m>l)||((m>r||r!==r)&&(r=m),(_<l||l!==l)&&(l=_),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Xa)!==null}intersectTriangle(e,i,r,l,f){Nd.subVectors(i,e),Su.subVectors(r,e),Od.crossVectors(Nd,Su);let p=this.direction.dot(Od),m;if(p>0){if(l)return null;m=1}else if(p<0)m=-1,p=-p;else return null;Lr.subVectors(this.origin,e);const _=m*this.direction.dot(Su.crossVectors(Lr,Su));if(_<0)return null;const x=m*this.direction.dot(Nd.cross(Lr));if(x<0||_+x>p)return null;const b=-m*Lr.dot(Od);return b<0?null:this.at(b/p,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mn{constructor(e,i,r,l,f,p,m,_,x,b,v,E,A,D,N,T){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,m,_,x,b,v,E,A,D,N,T)}set(e,i,r,l,f,p,m,_,x,b,v,E,A,D,N,T){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=f,M[5]=p,M[9]=m,M[13]=_,M[2]=x,M[6]=b,M[10]=v,M[14]=E,M[3]=A,M[7]=D,M[11]=N,M[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/_o.setFromMatrixColumn(e,0).length(),f=1/_o.setFromMatrixColumn(e,1).length(),p=1/_o.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*p,i[9]=r[9]*p,i[10]=r[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,p=Math.cos(r),m=Math.sin(r),_=Math.cos(l),x=Math.sin(l),b=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const E=p*b,A=p*v,D=m*b,N=m*v;i[0]=_*b,i[4]=-_*v,i[8]=x,i[1]=A+D*x,i[5]=E-N*x,i[9]=-m*_,i[2]=N-E*x,i[6]=D+A*x,i[10]=p*_}else if(e.order==="YXZ"){const E=_*b,A=_*v,D=x*b,N=x*v;i[0]=E+N*m,i[4]=D*m-A,i[8]=p*x,i[1]=p*v,i[5]=p*b,i[9]=-m,i[2]=A*m-D,i[6]=N+E*m,i[10]=p*_}else if(e.order==="ZXY"){const E=_*b,A=_*v,D=x*b,N=x*v;i[0]=E-N*m,i[4]=-p*v,i[8]=D+A*m,i[1]=A+D*m,i[5]=p*b,i[9]=N-E*m,i[2]=-p*x,i[6]=m,i[10]=p*_}else if(e.order==="ZYX"){const E=p*b,A=p*v,D=m*b,N=m*v;i[0]=_*b,i[4]=D*x-A,i[8]=E*x+N,i[1]=_*v,i[5]=N*x+E,i[9]=A*x-D,i[2]=-x,i[6]=m*_,i[10]=p*_}else if(e.order==="YZX"){const E=p*_,A=p*x,D=m*_,N=m*x;i[0]=_*b,i[4]=N-E*v,i[8]=D*v+A,i[1]=v,i[5]=p*b,i[9]=-m*b,i[2]=-x*b,i[6]=A*v+D,i[10]=E-N*v}else if(e.order==="XZY"){const E=p*_,A=p*x,D=m*_,N=m*x;i[0]=_*b,i[4]=-v,i[8]=x*b,i[1]=E*v+N,i[5]=p*b,i[9]=A*v-D,i[2]=D*v-A,i[6]=m*b,i[10]=N*v+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,OS)}lookAt(e,i,r){const l=this.elements;return Di.subVectors(e,i),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Nr.crossVectors(r,Di),Nr.lengthSq()===0&&(Math.abs(r.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Nr.crossVectors(r,Di)),Nr.normalize(),bu.crossVectors(Di,Nr),l[0]=Nr.x,l[4]=bu.x,l[8]=Di.x,l[1]=Nr.y,l[5]=bu.y,l[9]=Di.y,l[2]=Nr.z,l[6]=bu.z,l[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],m=r[4],_=r[8],x=r[12],b=r[1],v=r[5],E=r[9],A=r[13],D=r[2],N=r[6],T=r[10],M=r[14],q=r[3],H=r[7],V=r[11],K=r[15],I=l[0],X=l[4],fe=l[8],P=l[12],O=l[1],J=l[5],re=l[9],oe=l[13],Se=l[2],ye=l[6],z=l[10],$=l[14],ne=l[3],Re=l[7],Ce=l[11],G=l[15];return f[0]=p*I+m*O+_*Se+x*ne,f[4]=p*X+m*J+_*ye+x*Re,f[8]=p*fe+m*re+_*z+x*Ce,f[12]=p*P+m*oe+_*$+x*G,f[1]=b*I+v*O+E*Se+A*ne,f[5]=b*X+v*J+E*ye+A*Re,f[9]=b*fe+v*re+E*z+A*Ce,f[13]=b*P+v*oe+E*$+A*G,f[2]=D*I+N*O+T*Se+M*ne,f[6]=D*X+N*J+T*ye+M*Re,f[10]=D*fe+N*re+T*z+M*Ce,f[14]=D*P+N*oe+T*$+M*G,f[3]=q*I+H*O+V*Se+K*ne,f[7]=q*X+H*J+V*ye+K*Re,f[11]=q*fe+H*re+V*z+K*Ce,f[15]=q*P+H*oe+V*$+K*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],p=e[1],m=e[5],_=e[9],x=e[13],b=e[2],v=e[6],E=e[10],A=e[14],D=e[3],N=e[7],T=e[11],M=e[15];return D*(+f*_*v-l*x*v-f*m*E+r*x*E+l*m*A-r*_*A)+N*(+i*_*A-i*x*E+f*p*E-l*p*A+l*x*b-f*_*b)+T*(+i*x*v-i*m*A-f*p*v+r*p*A+f*m*b-r*x*b)+M*(-l*m*b-i*_*v+i*m*E+l*p*v-r*p*E+r*_*b)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],x=e[7],b=e[8],v=e[9],E=e[10],A=e[11],D=e[12],N=e[13],T=e[14],M=e[15],q=v*T*x-N*E*x+N*_*A-m*T*A-v*_*M+m*E*M,H=D*E*x-b*T*x-D*_*A+p*T*A+b*_*M-p*E*M,V=b*N*x-D*v*x+D*m*A-p*N*A-b*m*M+p*v*M,K=D*v*_-b*N*_-D*m*E+p*N*E+b*m*T-p*v*T,I=i*q+r*H+l*V+f*K;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/I;return e[0]=q*X,e[1]=(N*E*f-v*T*f-N*l*A+r*T*A+v*l*M-r*E*M)*X,e[2]=(m*T*f-N*_*f+N*l*x-r*T*x-m*l*M+r*_*M)*X,e[3]=(v*_*f-m*E*f-v*l*x+r*E*x+m*l*A-r*_*A)*X,e[4]=H*X,e[5]=(b*T*f-D*E*f+D*l*A-i*T*A-b*l*M+i*E*M)*X,e[6]=(D*_*f-p*T*f-D*l*x+i*T*x+p*l*M-i*_*M)*X,e[7]=(p*E*f-b*_*f+b*l*x-i*E*x-p*l*A+i*_*A)*X,e[8]=V*X,e[9]=(D*v*f-b*N*f-D*r*A+i*N*A+b*r*M-i*v*M)*X,e[10]=(p*N*f-D*m*f+D*r*x-i*N*x-p*r*M+i*m*M)*X,e[11]=(b*m*f-p*v*f-b*r*x+i*v*x+p*r*A-i*m*A)*X,e[12]=K*X,e[13]=(b*N*l-D*v*l+D*r*E-i*N*E-b*r*T+i*v*T)*X,e[14]=(D*m*l-p*N*l-D*r*_+i*N*_+p*r*T-i*m*T)*X,e[15]=(p*v*l-b*m*l+b*r*_-i*v*_-p*r*E+i*m*E)*X,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,p=e.x,m=e.y,_=e.z,x=f*p,b=f*m;return this.set(x*p+r,x*m-l*_,x*_+l*m,0,x*m+l*_,b*m+r,b*_-l*p,0,x*_-l*m,b*_+l*p,f*_*_+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,p){return this.set(1,r,f,0,e,1,p,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,p=i._y,m=i._z,_=i._w,x=f+f,b=p+p,v=m+m,E=f*x,A=f*b,D=f*v,N=p*b,T=p*v,M=m*v,q=_*x,H=_*b,V=_*v,K=r.x,I=r.y,X=r.z;return l[0]=(1-(N+M))*K,l[1]=(A+V)*K,l[2]=(D-H)*K,l[3]=0,l[4]=(A-V)*I,l[5]=(1-(E+M))*I,l[6]=(T+q)*I,l[7]=0,l[8]=(D+H)*X,l[9]=(T-q)*X,l[10]=(1-(E+N))*X,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=_o.set(l[0],l[1],l[2]).length();const p=_o.set(l[4],l[5],l[6]).length(),m=_o.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],na.copy(this);const x=1/f,b=1/p,v=1/m;return na.elements[0]*=x,na.elements[1]*=x,na.elements[2]*=x,na.elements[4]*=b,na.elements[5]*=b,na.elements[6]*=b,na.elements[8]*=v,na.elements[9]*=v,na.elements[10]*=v,i.setFromRotationMatrix(na),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,f,p,m=ga,_=!1){const x=this.elements,b=2*f/(i-e),v=2*f/(r-l),E=(i+e)/(i-e),A=(r+l)/(r-l);let D,N;if(_)D=f/(p-f),N=p*f/(p-f);else if(m===ga)D=-(p+f)/(p-f),N=-2*p*f/(p-f);else if(m===qu)D=-p/(p-f),N=-p*f/(p-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return x[0]=b,x[4]=0,x[8]=E,x[12]=0,x[1]=0,x[5]=v,x[9]=A,x[13]=0,x[2]=0,x[6]=0,x[10]=D,x[14]=N,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(e,i,r,l,f,p,m=ga,_=!1){const x=this.elements,b=2/(i-e),v=2/(r-l),E=-(i+e)/(i-e),A=-(r+l)/(r-l);let D,N;if(_)D=1/(p-f),N=p/(p-f);else if(m===ga)D=-2/(p-f),N=-(p+f)/(p-f);else if(m===qu)D=-1/(p-f),N=-f/(p-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return x[0]=b,x[4]=0,x[8]=0,x[12]=E,x[1]=0,x[5]=v,x[9]=0,x[13]=A,x[2]=0,x[6]=0,x[10]=D,x[14]=N,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _o=new me,na=new Mn,NS=new me(0,0,0),OS=new me(1,1,1),Nr=new me,bu=new me,Di=new me,Ug=new Mn,Lg=new Ss;class ya{constructor(e=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],p=l[4],m=l[8],_=l[1],x=l[5],b=l[9],v=l[2],E=l[6],A=l[10];switch(i){case"XYZ":this._y=Math.asin(Yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-b,A),this._z=Math.atan2(-p,f)):(this._x=Math.atan2(E,x),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(m,A),this._z=Math.atan2(_,x)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-v,A),this._z=Math.atan2(-p,x)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(E,A),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-p,x));break;case"YZX":this._z=Math.asin(Yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-b,x),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(m,A));break;case"XZY":this._z=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(E,x),this._y=Math.atan2(m,f)):(this._x=Math.atan2(-b,A),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ug,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Lg.setFromEuler(this),this.setFromQuaternion(Lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PS=0;const Ng=new me,vo=new Ss,Wa=new Mn,Mu=new me,Hl=new me,FS=new me,zS=new Ss,Og=new me(1,0,0),Pg=new me(0,1,0),Fg=new me(0,0,1),zg={type:"added"},BS={type:"removed"},yo={type:"childadded",child:null},Pd={type:"childremoved",child:null};class ti extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new me,i=new ya,r=new Ss,l=new me(1,1,1);function f(){r.setFromEuler(i,!1)}function p(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Mn},normalMatrix:{value:new Bt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vo.setFromAxisAngle(e,i),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,i){return vo.setFromAxisAngle(e,i),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(Og,e)}rotateY(e){return this.rotateOnAxis(Pg,e)}rotateZ(e){return this.rotateOnAxis(Fg,e)}translateOnAxis(e,i){return Ng.copy(e).applyQuaternion(this.quaternion),this.position.add(Ng.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Og,e)}translateY(e){return this.translateOnAxis(Pg,e)}translateZ(e){return this.translateOnAxis(Fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mu.copy(e):Mu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(Hl,Mu,this.up):Wa.lookAt(Mu,Hl,this.up),this.quaternion.setFromRotationMatrix(Wa),l&&(Wa.extractRotation(l.matrixWorld),vo.setFromRotationMatrix(Wa),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Cn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zg),yo.child=e,this.dispatchEvent(yo),yo.child=null):Cn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(BS),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zg),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const p=this.children[r].getObjectByProperty(e,i);if(p!==void 0)return p}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(m,_){return m[_.uuid]===void 0&&(m[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const _=m.shapes;if(Array.isArray(_))for(let x=0,b=_.length;x<b;x++){const v=_[x];f(e.shapes,v)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let _=0,x=this.material.length;_<x;_++)m.push(f(e.materials,this.material[_]));l.material=m}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const _=this.animations[m];l.animations.push(f(e.animations,_))}}if(i){const m=p(e.geometries),_=p(e.materials),x=p(e.textures),b=p(e.images),v=p(e.shapes),E=p(e.skeletons),A=p(e.animations),D=p(e.nodes);m.length>0&&(r.geometries=m),_.length>0&&(r.materials=_),x.length>0&&(r.textures=x),b.length>0&&(r.images=b),v.length>0&&(r.shapes=v),E.length>0&&(r.skeletons=E),A.length>0&&(r.animations=A),D.length>0&&(r.nodes=D)}return r.object=l,r;function p(m){const _=[];for(const x in m){const b=m[x];delete b.metadata,_.push(b)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new me(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ia=new me,qa=new me,Fd=new me,Ya=new me,So=new me,bo=new me,Bg=new me,zd=new me,Bd=new me,Id=new me,Hd=new Dn,Vd=new Dn,Gd=new Dn;class aa{constructor(e=new me,i=new me,r=new me){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),ia.subVectors(e,i),l.cross(ia);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){ia.subVectors(l,i),qa.subVectors(r,i),Fd.subVectors(e,i);const p=ia.dot(ia),m=ia.dot(qa),_=ia.dot(Fd),x=qa.dot(qa),b=qa.dot(Fd),v=p*x-m*m;if(v===0)return f.set(0,0,0),null;const E=1/v,A=(x*_-m*b)*E,D=(p*b-m*_)*E;return f.set(1-A-D,D,A)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(e,i,r,l,f,p,m,_){return this.getBarycoord(e,i,r,l,Ya)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Ya.x),_.addScaledVector(p,Ya.y),_.addScaledVector(m,Ya.z),_)}static getInterpolatedAttribute(e,i,r,l,f,p){return Hd.setScalar(0),Vd.setScalar(0),Gd.setScalar(0),Hd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),Gd.fromBufferAttribute(e,l),p.setScalar(0),p.addScaledVector(Hd,f.x),p.addScaledVector(Vd,f.y),p.addScaledVector(Gd,f.z),p}static isFrontFacing(e,i,r,l){return ia.subVectors(r,i),qa.subVectors(e,i),ia.cross(qa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),ia.cross(qa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return aa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return aa.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let p,m;So.subVectors(l,r),bo.subVectors(f,r),zd.subVectors(e,r);const _=So.dot(zd),x=bo.dot(zd);if(_<=0&&x<=0)return i.copy(r);Bd.subVectors(e,l);const b=So.dot(Bd),v=bo.dot(Bd);if(b>=0&&v<=b)return i.copy(l);const E=_*v-b*x;if(E<=0&&_>=0&&b<=0)return p=_/(_-b),i.copy(r).addScaledVector(So,p);Id.subVectors(e,f);const A=So.dot(Id),D=bo.dot(Id);if(D>=0&&A<=D)return i.copy(f);const N=A*x-_*D;if(N<=0&&x>=0&&D<=0)return m=x/(x-D),i.copy(r).addScaledVector(bo,m);const T=b*D-A*v;if(T<=0&&v-b>=0&&A-D>=0)return Bg.subVectors(f,l),m=(v-b)/(v-b+(A-D)),i.copy(l).addScaledVector(Bg,m);const M=1/(T+N+E);return p=N*M,m=E*M,i.copy(r).addScaledVector(So,p).addScaledVector(bo,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function kd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Qt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=an.workingColorSpace){return this.r=e,this.g=i,this.b=r,an.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=an.workingColorSpace){if(e=ES(e,1),i=Yt(i,0,1),r=Yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,p=2*r-f;this.r=kd(p,f,e+1/3),this.g=kd(p,f,e),this.b=kd(p,f,e-1/3)}return an.colorSpaceToWorking(this,l),this}setStyle(e,i=Xi){function r(f){f!==void 0&&parseFloat(f)<1&&Ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const p=l[1],m=l[2];switch(p){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:Ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],p=f.length;if(p===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(f,16),i);Ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Xi){const r=G_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):Ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return an.workingToColorSpace(oi.copy(this),e),Math.round(Yt(oi.r*255,0,255))*65536+Math.round(Yt(oi.g*255,0,255))*256+Math.round(Yt(oi.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=an.workingColorSpace){an.workingToColorSpace(oi.copy(this),i);const r=oi.r,l=oi.g,f=oi.b,p=Math.max(r,l,f),m=Math.min(r,l,f);let _,x;const b=(m+p)/2;if(m===p)_=0,x=0;else{const v=p-m;switch(x=b<=.5?v/(p+m):v/(2-p-m),p){case r:_=(l-f)/v+(l<f?6:0);break;case l:_=(f-r)/v+2;break;case f:_=(r-l)/v+4;break}_/=6}return e.h=_,e.s=x,e.l=b,e}getRGB(e,i=an.workingColorSpace){return an.workingToColorSpace(oi.copy(this),i),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=Xi){an.workingToColorSpace(oi.copy(this),e);const i=oi.r,r=oi.g,l=oi.b;return e!==Xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+i,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Or),e.getHSL(Eu);const r=Td(Or.h,Eu.h,i),l=Td(Or.s,Eu.s,i),f=Td(Or.l,Eu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new Qt;Qt.NAMES=G_;let IS=0;class Io extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ql(),this.name="",this.type="Material",this.blending=Do,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=sp,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){Ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rp&&(r.blendSrc=this.blendSrc),this.blendDst!==sp&&(r.blendDst=this.blendDst),this.blendEquation!==gs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}if(i){const f=l(e.textures),p=l(e.images);f.length>0&&(r.textures=f),p.length>0&&(r.images=p)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class k_ extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=C_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vn=new me,Tu=new Ot;let HS=0;class _a{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Eg,this.updateRanges=[],this.gpuType=Qa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(e),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix3(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=zl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),l=Si(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),l=Si(l,this.array),f=Si(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eg&&(e.usage=this.usage),e}}class X_ extends _a{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class W_ extends _a{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ni extends _a{constructor(e,i,r){super(new Float32Array(e),i,r)}}let VS=0;const ki=new Mn,Xd=new ti,Mo=new me,Ui=new Bo,Vl=new Bo,Kn=new me;class oa extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?W_:X_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new Bt().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,i,r){return ki.makeTranslation(e,i,r),this.applyMatrix4(ki),this}scale(e,i,r){return ki.makeScale(e,i,r),this.applyMatrix4(ki),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const p=e[l];r.push(p.x,p.y,p.z||0)}this.setAttribute("position",new Ni(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];Ui.setFromBufferAttribute(f),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new me,1/0);return}if(e){const r=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),i)for(let f=0,p=i.length;f<p;f++){const m=i[f];Vl.setFromBufferAttribute(m),this.morphTargetsRelative?(Kn.addVectors(Ui.min,Vl.min),Ui.expandByPoint(Kn),Kn.addVectors(Ui.max,Vl.max),Ui.expandByPoint(Kn)):(Ui.expandByPoint(Vl.min),Ui.expandByPoint(Vl.max))}Ui.getCenter(r);let l=0;for(let f=0,p=e.count;f<p;f++)Kn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Kn));if(i)for(let f=0,p=i.length;f<p;f++){const m=i[f],_=this.morphTargetsRelative;for(let x=0,b=m.count;x<b;x++)Kn.fromBufferAttribute(m,x),_&&(Mo.fromBufferAttribute(e,x),Kn.add(Mo)),l=Math.max(l,r.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _a(new Float32Array(4*r.count),4));const p=this.getAttribute("tangent"),m=[],_=[];for(let fe=0;fe<r.count;fe++)m[fe]=new me,_[fe]=new me;const x=new me,b=new me,v=new me,E=new Ot,A=new Ot,D=new Ot,N=new me,T=new me;function M(fe,P,O){x.fromBufferAttribute(r,fe),b.fromBufferAttribute(r,P),v.fromBufferAttribute(r,O),E.fromBufferAttribute(f,fe),A.fromBufferAttribute(f,P),D.fromBufferAttribute(f,O),b.sub(x),v.sub(x),A.sub(E),D.sub(E);const J=1/(A.x*D.y-D.x*A.y);isFinite(J)&&(N.copy(b).multiplyScalar(D.y).addScaledVector(v,-A.y).multiplyScalar(J),T.copy(v).multiplyScalar(A.x).addScaledVector(b,-D.x).multiplyScalar(J),m[fe].add(N),m[P].add(N),m[O].add(N),_[fe].add(T),_[P].add(T),_[O].add(T))}let q=this.groups;q.length===0&&(q=[{start:0,count:e.count}]);for(let fe=0,P=q.length;fe<P;++fe){const O=q[fe],J=O.start,re=O.count;for(let oe=J,Se=J+re;oe<Se;oe+=3)M(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const H=new me,V=new me,K=new me,I=new me;function X(fe){K.fromBufferAttribute(l,fe),I.copy(K);const P=m[fe];H.copy(P),H.sub(K.multiplyScalar(K.dot(P))).normalize(),V.crossVectors(I,P);const J=V.dot(_[fe])<0?-1:1;p.setXYZW(fe,H.x,H.y,H.z,J)}for(let fe=0,P=q.length;fe<P;++fe){const O=q[fe],J=O.start,re=O.count;for(let oe=J,Se=J+re;oe<Se;oe+=3)X(e.getX(oe+0)),X(e.getX(oe+1)),X(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _a(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let E=0,A=r.count;E<A;E++)r.setXYZ(E,0,0,0);const l=new me,f=new me,p=new me,m=new me,_=new me,x=new me,b=new me,v=new me;if(e)for(let E=0,A=e.count;E<A;E+=3){const D=e.getX(E+0),N=e.getX(E+1),T=e.getX(E+2);l.fromBufferAttribute(i,D),f.fromBufferAttribute(i,N),p.fromBufferAttribute(i,T),b.subVectors(p,f),v.subVectors(l,f),b.cross(v),m.fromBufferAttribute(r,D),_.fromBufferAttribute(r,N),x.fromBufferAttribute(r,T),m.add(b),_.add(b),x.add(b),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(N,_.x,_.y,_.z),r.setXYZ(T,x.x,x.y,x.z)}else for(let E=0,A=i.count;E<A;E+=3)l.fromBufferAttribute(i,E+0),f.fromBufferAttribute(i,E+1),p.fromBufferAttribute(i,E+2),b.subVectors(p,f),v.subVectors(l,f),b.cross(v),r.setXYZ(E+0,b.x,b.y,b.z),r.setXYZ(E+1,b.x,b.y,b.z),r.setXYZ(E+2,b.x,b.y,b.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Kn.fromBufferAttribute(e,i),Kn.normalize(),e.setXYZ(i,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function e(m,_){const x=m.array,b=m.itemSize,v=m.normalized,E=new x.constructor(_.length*b);let A=0,D=0;for(let N=0,T=_.length;N<T;N++){m.isInterleavedBufferAttribute?A=_[N]*m.data.stride+m.offset:A=_[N]*b;for(let M=0;M<b;M++)E[D++]=x[A++]}return new _a(E,b,v)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,r=this.index.array,l=this.attributes;for(const m in l){const _=l[m],x=e(_,r);i.setAttribute(m,x)}const f=this.morphAttributes;for(const m in f){const _=[],x=f[m];for(let b=0,v=x.length;b<v;b++){const E=x[b],A=e(E,r);_.push(A)}i.morphAttributes[m]=_}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let m=0,_=p.length;m<_;m++){const x=p[m];i.addGroup(x.start,x.count,x.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const x in _)_[x]!==void 0&&(e[x]=_[x]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const x=r[_];e.data.attributes[_]=x.toJSON(e.data)}const l={};let f=!1;for(const _ in this.morphAttributes){const x=this.morphAttributes[_],b=[];for(let v=0,E=x.length;v<E;v++){const A=x[v];b.push(A.toJSON(e.data))}b.length>0&&(l[_]=b,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(e.data.groups=JSON.parse(JSON.stringify(p)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const x in l){const b=l[x];this.setAttribute(x,b.clone(i))}const f=e.morphAttributes;for(const x in f){const b=[],v=f[x];for(let E=0,A=v.length;E<A;E++)b.push(v[E].clone(i));this.morphAttributes[x]=b}this.morphTargetsRelative=e.morphTargetsRelative;const p=e.groups;for(let x=0,b=p.length;x<b;x++){const v=p[x];this.addGroup(v.start,v.count,v.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ig=new Mn,ds=new Ju,Au=new Qu,Hg=new me,wu=new me,Ru=new me,Cu=new me,Wd=new me,Du=new me,Vg=new me,Uu=new me;class sa extends ti{constructor(e=new oa,i=new k_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const m=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,p=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(f&&m){Du.set(0,0,0);for(let _=0,x=f.length;_<x;_++){const b=m[_],v=f[_];b!==0&&(Wd.fromBufferAttribute(v,e),p?Du.addScaledVector(Wd,b):Du.addScaledVector(Wd.sub(i),b))}i.add(Du)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(f),ds.copy(e.ray).recast(e.near),!(Au.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Au,Hg)===null||ds.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(Ig.copy(f).invert(),ds.copy(e.ray).applyMatrix4(Ig),!(r.boundingBox!==null&&ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ds)))}_computeIntersections(e,i,r){let l;const f=this.geometry,p=this.material,m=f.index,_=f.attributes.position,x=f.attributes.uv,b=f.attributes.uv1,v=f.attributes.normal,E=f.groups,A=f.drawRange;if(m!==null)if(Array.isArray(p))for(let D=0,N=E.length;D<N;D++){const T=E[D],M=p[T.materialIndex],q=Math.max(T.start,A.start),H=Math.min(m.count,Math.min(T.start+T.count,A.start+A.count));for(let V=q,K=H;V<K;V+=3){const I=m.getX(V),X=m.getX(V+1),fe=m.getX(V+2);l=Lu(this,M,e,r,x,b,v,I,X,fe),l&&(l.faceIndex=Math.floor(V/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const D=Math.max(0,A.start),N=Math.min(m.count,A.start+A.count);for(let T=D,M=N;T<M;T+=3){const q=m.getX(T),H=m.getX(T+1),V=m.getX(T+2);l=Lu(this,p,e,r,x,b,v,q,H,V),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(p))for(let D=0,N=E.length;D<N;D++){const T=E[D],M=p[T.materialIndex],q=Math.max(T.start,A.start),H=Math.min(_.count,Math.min(T.start+T.count,A.start+A.count));for(let V=q,K=H;V<K;V+=3){const I=V,X=V+1,fe=V+2;l=Lu(this,M,e,r,x,b,v,I,X,fe),l&&(l.faceIndex=Math.floor(V/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const D=Math.max(0,A.start),N=Math.min(_.count,A.start+A.count);for(let T=D,M=N;T<M;T+=3){const q=T,H=T+1,V=T+2;l=Lu(this,p,e,r,x,b,v,q,H,V),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}}}function GS(o,e,i,r,l,f,p,m){let _;if(e.side===Mi?_=r.intersectTriangle(p,f,l,!0,m):_=r.intersectTriangle(l,f,p,e.side===Hr,m),_===null)return null;Uu.copy(m),Uu.applyMatrix4(o.matrixWorld);const x=i.ray.origin.distanceTo(Uu);return x<i.near||x>i.far?null:{distance:x,point:Uu.clone(),object:o}}function Lu(o,e,i,r,l,f,p,m,_,x){o.getVertexPosition(m,wu),o.getVertexPosition(_,Ru),o.getVertexPosition(x,Cu);const b=GS(o,e,i,r,wu,Ru,Cu,Vg);if(b){const v=new me;aa.getBarycoord(Vg,wu,Ru,Cu,v),l&&(b.uv=aa.getInterpolatedAttribute(l,m,_,x,v,new Ot)),f&&(b.uv1=aa.getInterpolatedAttribute(f,m,_,x,v,new Ot)),p&&(b.normal=aa.getInterpolatedAttribute(p,m,_,x,v,new me),b.normal.dot(r.direction)>0&&b.normal.multiplyScalar(-1));const E={a:m,b:_,c:x,normal:new me,materialIndex:0};aa.getNormal(wu,Ru,Cu,E.normal),b.face=E,b.barycoord=v}return b}class Jl extends oa{constructor(e=1,i=1,r=1,l=1,f=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:p};const m=this;l=Math.floor(l),f=Math.floor(f),p=Math.floor(p);const _=[],x=[],b=[],v=[];let E=0,A=0;D("z","y","x",-1,-1,r,i,e,p,f,0),D("z","y","x",1,-1,r,i,-e,p,f,1),D("x","z","y",1,1,e,r,i,l,p,2),D("x","z","y",1,-1,e,r,-i,l,p,3),D("x","y","z",1,-1,e,i,r,l,f,4),D("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(_),this.setAttribute("position",new Ni(x,3)),this.setAttribute("normal",new Ni(b,3)),this.setAttribute("uv",new Ni(v,2));function D(N,T,M,q,H,V,K,I,X,fe,P){const O=V/X,J=K/fe,re=V/2,oe=K/2,Se=I/2,ye=X+1,z=fe+1;let $=0,ne=0;const Re=new me;for(let Ce=0;Ce<z;Ce++){const G=Ce*J-oe;for(let pe=0;pe<ye;pe++){const De=pe*O-re;Re[N]=De*q,Re[T]=G*H,Re[M]=Se,x.push(Re.x,Re.y,Re.z),Re[N]=0,Re[T]=0,Re[M]=I>0?1:-1,b.push(Re.x,Re.y,Re.z),v.push(pe/X),v.push(1-Ce/fe),$+=1}}for(let Ce=0;Ce<fe;Ce++)for(let G=0;G<X;G++){const pe=E+G+ye*Ce,De=E+G+ye*(Ce+1),Fe=E+(G+1)+ye*(Ce+1),et=E+(G+1)+ye*Ce;_.push(pe,De,et),_.push(De,Fe,et),ne+=6}m.addGroup(A,ne,P),A+=ne,E+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function di(o){const e={};for(let i=0;i<o.length;i++){const r=Fo(o[i]);for(const l in r)e[l]=r[l]}return e}function kS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function q_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:an.workingColorSpace}const XS={clone:Fo,merge:di};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=kS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const p=this.uniforms[l].value;p&&p.isTexture?i.uniforms[l]={type:"t",value:p.toJSON(e).uuid}:p&&p.isColor?i.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[l]={type:"m4",value:p.toArray()}:i.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Y_ extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=ga,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new me,Gg=new Ot,kg=new Ot;class Wi extends Y_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,i){return this.getViewBounds(e,Gg,kg),i.subVectors(kg,Gg)}setViewOffset(e,i,r,l,f,p){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ku*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const p=this.view;if(this.view!==null&&this.view.enabled){const _=p.fullWidth,x=p.fullHeight;f+=p.offsetX*l/_,i-=p.offsetY*r/x,l*=p.width/_,r*=p.height/x}const m=this.filmOffset;m!==0&&(f+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Eo=-90,To=1;class YS extends ti{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wi(Eo,To,e,i);l.layers=this.layers,this.add(l);const f=new Wi(Eo,To,e,i);f.layers=this.layers,this.add(f);const p=new Wi(Eo,To,e,i);p.layers=this.layers,this.add(p);const m=new Wi(Eo,To,e,i);m.layers=this.layers,this.add(m);const _=new Wi(Eo,To,e,i);_.layers=this.layers,this.add(_);const x=new Wi(Eo,To,e,i);x.layers=this.layers,this.add(x)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,p,m,_]=i;for(const x of i)this.remove(x);if(e===ga)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const x of i)this.add(x),x.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,p,m,_,x,b]=this.children,v=e.getRenderTarget(),E=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),D=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,p),e.setRenderTarget(r,2,l),e.render(i,m),e.setRenderTarget(r,3,l),e.render(i,_),e.setRenderTarget(r,4,l),e.render(i,x),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,l),e.render(i,b),e.setRenderTarget(v,E,A),e.xr.enabled=D,r.texture.needsPMREMUpdate=!0}}class j_ extends pi{constructor(e=[],i=No,r,l,f,p,m,_,x,b){super(e,i,r,l,f,p,m,_,x,b),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends bs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new j_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jl(5,5,5),f=new er({name:"CubemapFromEquirect",uniforms:Fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mi,blending:Ja});f.uniforms.tEquirect.value=i;const p=new sa(l,f),m=i.minFilter;return i.minFilter===vs&&(i.minFilter=qi),new YS(1,10,this).update(e,p),i.minFilter=m,p.geometry.dispose(),p.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let p=0;p<6;p++)e.setRenderTarget(this,p),e.clear(i,r,l);e.setRenderTarget(f)}}class Xl extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZS={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,p=null;const m=this._targetRay,_=this._grip,x=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(x&&e.hand){p=!0;for(const N of e.hand.values()){const T=i.getJointPose(N,r),M=this._getHandJoint(x,N);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}const b=x.joints["index-finger-tip"],v=x.joints["thumb-tip"],E=b.position.distanceTo(v.position),A=.02,D=.005;x.inputState.pinching&&E>A+D?(x.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!x.inputState.pinching&&E<=A-D&&(x.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return m!==null&&(m.visible=l!==null),_!==null&&(_.visible=f!==null),x!==null&&(x.visible=p!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Xl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class KS extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class QS extends pi{constructor(e=null,i=1,r=1,l,f,p,m,_,x=Li,b=Li,v,E){super(null,p,m,_,x,b,l,f,v,E),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new me,JS=new me,$S=new Bt;class Fr{constructor(e=new me(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yd.subVectors(r,i).cross(JS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$S.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Qu,eb=new Ot(.5,.5),Nu=new me;class sm{constructor(e=new Fr,i=new Fr,r=new Fr,l=new Fr,f=new Fr,p=new Fr){this.planes=[e,i,r,l,f,p]}set(e,i,r,l,f,p){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(f),m[5].copy(p),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ga,r=!1){const l=this.planes,f=e.elements,p=f[0],m=f[1],_=f[2],x=f[3],b=f[4],v=f[5],E=f[6],A=f[7],D=f[8],N=f[9],T=f[10],M=f[11],q=f[12],H=f[13],V=f[14],K=f[15];if(l[0].setComponents(x-p,A-b,M-D,K-q).normalize(),l[1].setComponents(x+p,A+b,M+D,K+q).normalize(),l[2].setComponents(x+m,A+v,M+N,K+H).normalize(),l[3].setComponents(x-m,A-v,M-N,K-H).normalize(),r)l[4].setComponents(_,E,T,V).normalize(),l[5].setComponents(x-_,A-E,M-T,K-V).normalize();else if(l[4].setComponents(x-_,A-E,M-T,K-V).normalize(),i===ga)l[5].setComponents(x+_,A+E,M+T,K+V).normalize();else if(i===qu)l[5].setComponents(_,E,T,V).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const i=eb.distanceTo(e.center);return ps.radius=.7071067811865476+i,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nu.x=l.normal.x>0?e.max.x:e.min.x,Nu.y=l.normal.y>0?e.max.y:e.min.y,Nu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z_ extends Io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ju=new me,Zu=new me,Xg=new Mn,Gl=new Ju,Ou=new Qu,jd=new me,Wg=new me;class tb extends ti{constructor(e=new oa,i=new Z_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,f=i.count;l<f;l++)ju.fromBufferAttribute(i,l-1),Zu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=ju.distanceTo(Zu);e.setAttribute("lineDistance",new Ni(r,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,p=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(l),Ou.radius+=f,e.ray.intersectsSphere(Ou)===!1)return;Xg.copy(l).invert(),Gl.copy(e.ray).applyMatrix4(Xg);const m=f/((this.scale.x+this.scale.y+this.scale.z)/3),_=m*m,x=this.isLineSegments?2:1,b=r.index,E=r.attributes.position;if(b!==null){const A=Math.max(0,p.start),D=Math.min(b.count,p.start+p.count);for(let N=A,T=D-1;N<T;N+=x){const M=b.getX(N),q=b.getX(N+1),H=Pu(this,e,Gl,_,M,q,N);H&&i.push(H)}if(this.isLineLoop){const N=b.getX(D-1),T=b.getX(A),M=Pu(this,e,Gl,_,N,T,D-1);M&&i.push(M)}}else{const A=Math.max(0,p.start),D=Math.min(E.count,p.start+p.count);for(let N=A,T=D-1;N<T;N+=x){const M=Pu(this,e,Gl,_,N,N+1,N);M&&i.push(M)}if(this.isLineLoop){const N=Pu(this,e,Gl,_,D-1,A,D-1);N&&i.push(N)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const m=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}}function Pu(o,e,i,r,l,f,p){const m=o.geometry.attributes.position;if(ju.fromBufferAttribute(m,l),Zu.fromBufferAttribute(m,f),i.distanceSqToSegment(ju,Zu,jd,Wg)>r)return;jd.applyMatrix4(o.matrixWorld);const x=e.ray.origin.distanceTo(jd);if(!(x<e.near||x>e.far))return{distance:x,point:Wg.clone().applyMatrix4(o.matrixWorld),index:p,face:null,faceIndex:null,barycoord:null,object:o}}const qg=new me,Yg=new me;class nb extends tb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,f=i.count;l<f;l+=2)qg.fromBufferAttribute(i,l),Yg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+qg.distanceTo(Yg);e.setAttribute("lineDistance",new Ni(r,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class K_ extends pi{constructor(e,i,r=ys,l,f,p,m=Li,_=Li,x,b=jl,v=1){if(b!==jl&&b!==Zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const E={width:e,height:i,depth:v};super(E,l,f,p,m,_,b,r,x),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Q_ extends pi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $u extends oa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,p=i/2,m=Math.floor(r),_=Math.floor(l),x=m+1,b=_+1,v=e/m,E=i/_,A=[],D=[],N=[],T=[];for(let M=0;M<b;M++){const q=M*E-p;for(let H=0;H<x;H++){const V=H*v-f;D.push(V,-q,0),N.push(0,0,1),T.push(H/m),T.push(1-M/_)}}for(let M=0;M<_;M++)for(let q=0;q<m;q++){const H=q+x*M,V=q+x*(M+1),K=q+1+x*(M+1),I=q+1+x*M;A.push(H,V,I),A.push(V,K,I)}this.setIndex(A),this.setAttribute("position",new Ni(D,3)),this.setAttribute("normal",new Ni(N,3)),this.setAttribute("uv",new Ni(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ao extends Io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B_,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ib extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class J_ extends ti{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Zd=new Mn,jg=new me,Zg=new me;class rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=va,this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sm,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;jg.setFromMatrixPosition(e.matrixWorld),i.position.copy(jg),Zg.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Zg),i.updateMatrixWorld(),Zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $_ extends Y_{constructor(e=-1,i=1,r=1,l=-1,f=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=p,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,p=r+e,m=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const x=(this.right-this.left)/this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=x*this.view.offsetX,p=f+x*this.view.width,m-=b*this.view.offsetY,_=m-b*this.view.height}this.projectionMatrix.makeOrthographic(f,p,m,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sb extends rb{constructor(){super(new $_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kg extends J_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new sb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ob extends J_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class lb extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qg=new Mn;class cb{constructor(e,i,r=0,l=1/0){this.ray=new Ju(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new rm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Cn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Qg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qg),this}intersectObject(e,i=!0,r=[]){return Yp(e,this,r,i),r.sort(Jg),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Yp(e[l],this,r,i);return r.sort(Jg),r}}function Jg(o,e){return o.distance-e.distance}function Yp(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let p=0,m=f.length;p<m;p++)Yp(f[p],e,i,!0)}}class $g{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Yt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ub extends nb{constructor(e=10,i=10,r=4473924,l=8947848){r=new Qt(r),l=new Qt(l);const f=i/2,p=e/i,m=e/2,_=[],x=[];for(let E=0,A=0,D=-m;E<=i;E++,D+=p){_.push(-m,0,D,m,0,D),_.push(D,0,-m,D,0,m);const N=E===f?r:l;N.toArray(x,A),A+=3,N.toArray(x,A),A+=3,N.toArray(x,A),A+=3,N.toArray(x,A),A+=3}const b=new oa;b.setAttribute("position",new Ni(_,3)),b.setAttribute("color",new Ni(x,3));const v=new Z_({vertexColors:!0,toneMapped:!1});super(b,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fb extends Ms{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ut("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function e_(o,e,i,r){const l=hb(r);switch(i){case P_:return o*e;case z_:return o*e/l.components*l.byteLength;case em:return o*e/l.components*l.byteLength;case tm:return o*e*2/l.components*l.byteLength;case nm:return o*e*2/l.components*l.byteLength;case F_:return o*e*3/l.components*l.byteLength;case ra:return o*e*4/l.components*l.byteLength;case im:return o*e*4/l.components*l.byteLength;case Iu:case Hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vu:case Gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vp:case Sp:return Math.max(o,16)*Math.max(e,8)/4;case _p:case yp:return Math.max(o,8)*Math.max(e,8)/2;case bp:case Mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case zp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ip:case Hp:case Vp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Gp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xp:case Wp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hb(o){switch(o){case va:case U_:return{byteLength:1,components:1};case ql:case L_:case zo:return{byteLength:2,components:1};case Jp:case $p:return{byteLength:2,components:4};case ys:case Qp:case Qa:return{byteLength:4,components:1};case N_:case O_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);function ev(){let o=null,e=!1,i=null,r=null;function l(f,p){i(f,p),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function db(o){const e=new WeakMap;function i(m,_){const x=m.array,b=m.usage,v=x.byteLength,E=o.createBuffer();o.bindBuffer(_,E),o.bufferData(_,x,b),m.onUploadCallback();let A;if(x instanceof Float32Array)A=o.FLOAT;else if(typeof Float16Array<"u"&&x instanceof Float16Array)A=o.HALF_FLOAT;else if(x instanceof Uint16Array)m.isFloat16BufferAttribute?A=o.HALF_FLOAT:A=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)A=o.SHORT;else if(x instanceof Uint32Array)A=o.UNSIGNED_INT;else if(x instanceof Int32Array)A=o.INT;else if(x instanceof Int8Array)A=o.BYTE;else if(x instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:E,type:A,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:v}}function r(m,_,x){const b=_.array,v=_.updateRanges;if(o.bindBuffer(x,m),v.length===0)o.bufferSubData(x,0,b);else{v.sort((A,D)=>A.start-D.start);let E=0;for(let A=1;A<v.length;A++){const D=v[E],N=v[A];N.start<=D.start+D.count+1?D.count=Math.max(D.count,N.start+N.count-D.start):(++E,v[E]=N)}v.length=E+1;for(let A=0,D=v.length;A<D;A++){const N=v[A];o.bufferSubData(x,N.start*b.BYTES_PER_ELEMENT,b,N.start,N.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=e.get(m);_&&(o.deleteBuffer(_.buffer),e.delete(m))}function p(m,_){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const b=e.get(m);(!b||b.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const x=e.get(m);if(x===void 0)e.set(m,i(m,_));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(x.buffer,m,_),x.version=m.version}}return{get:l,remove:f,update:p}}var pb=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
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
} // validated`,wb=`#ifdef USE_IRIDESCENCE
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
#endif`,Rb=`#ifdef USE_BUMPMAP
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
#endif`,xM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
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
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
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
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_E=`uniform samplerCube tCube;
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
}`,wE=`#include <common>
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
}`,RE=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:xb,alphamap_pars_fragment:gb,alphatest_fragment:_b,alphatest_pars_fragment:vb,aomap_fragment:yb,aomap_pars_fragment:Sb,batching_pars_vertex:bb,batching_vertex:Mb,begin_vertex:Eb,beginnormal_vertex:Tb,bsdfs:Ab,iridescence_fragment:wb,bumpmap_pars_fragment:Rb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Nb,color_pars_fragment:Ob,color_pars_vertex:Pb,color_vertex:Fb,common:zb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Hb,displacementmap_vertex:Vb,emissivemap_fragment:Gb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:sM,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:aM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:lM,lights_phong_fragment:cM,lights_phong_pars_fragment:uM,lights_physical_fragment:fM,lights_physical_pars_fragment:hM,lights_fragment_begin:dM,lights_fragment_maps:pM,lights_fragment_end:mM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:vM,map_fragment:yM,map_pars_fragment:SM,map_particle_fragment:bM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:TM,morphinstance_vertex:AM,morphcolor_vertex:wM,morphnormal_vertex:RM,morphtarget_pars_vertex:CM,morphtarget_vertex:DM,normal_fragment_begin:UM,normal_fragment_maps:LM,normal_pars_fragment:NM,normal_pars_vertex:OM,normal_vertex:PM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:zM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:HM,opaque_fragment:VM,packing:GM,premultiplied_alpha_fragment:kM,project_vertex:XM,dithering_fragment:WM,dithering_pars_fragment:qM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:KM,shadowmap_vertex:QM,shadowmask_pars_fragment:JM,skinbase_vertex:$M,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:aE,tonemapping_fragment:rE,tonemapping_pars_fragment:sE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:fE,worldpos_vertex:hE,background_vert:dE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:xE,cube_vert:gE,cube_frag:_E,depth_vert:vE,depth_frag:yE,distanceRGBA_vert:SE,distanceRGBA_frag:bE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:wE,meshbasic_frag:RE,meshlambert_vert:CE,meshlambert_frag:DE,meshmatcap_vert:UE,meshmatcap_frag:LE,meshnormal_vert:NE,meshnormal_frag:OE,meshphong_vert:PE,meshphong_frag:FE,meshphysical_vert:zE,meshphysical_frag:BE,meshtoon_vert:IE,meshtoon_frag:HE,points_vert:VE,points_frag:GE,shadow_vert:kE,shadow_frag:XE,sprite_vert:WE,sprite_frag:qE},$e={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ma={basic:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:di([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:di([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:di([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:di([$e.points,$e.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:di([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:di([$e.common,$e.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:di([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:di([$e.sprite,$e.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:di([$e.common,$e.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:di([$e.lights,$e.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ma.physical={uniforms:di([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Fu={r:0,b:0,g:0},ms=new ya,YE=new Mn;function jE(o,e,i,r,l,f,p){const m=new Qt(0);let _=f===!0?0:1,x,b,v=null,E=0,A=null;function D(H){let V=H.isScene===!0?H.background:null;return V&&V.isTexture&&(V=(H.backgroundBlurriness>0?i:e).get(V)),V}function N(H){let V=!1;const K=D(H);K===null?M(m,_):K&&K.isColor&&(M(K,1),V=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,p):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,p),(o.autoClear||V)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(H,V){const K=D(V);K&&(K.isCubeTexture||K.mapping===Ku)?(b===void 0&&(b=new sa(new Jl(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Fo(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(I,X,fe){this.matrixWorld.copyPosition(fe.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(b)),ms.copy(V.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,K.isCubeTexture&&K.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),b.material.uniforms.envMap.value=K,b.material.uniforms.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1,b.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(ms)),b.material.toneMapped=an.getTransfer(K.colorSpace)!==pn,(v!==K||E!==K.version||A!==o.toneMapping)&&(b.material.needsUpdate=!0,v=K,E=K.version,A=o.toneMapping),b.layers.enableAll(),H.unshift(b,b.geometry,b.material,0,0,null)):K&&K.isTexture&&(x===void 0&&(x=new sa(new $u(2,2),new er({name:"BackgroundMaterial",uniforms:Fo(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(x)),x.material.uniforms.t2D.value=K,x.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,x.material.toneMapped=an.getTransfer(K.colorSpace)!==pn,K.matrixAutoUpdate===!0&&K.updateMatrix(),x.material.uniforms.uvTransform.value.copy(K.matrix),(v!==K||E!==K.version||A!==o.toneMapping)&&(x.material.needsUpdate=!0,v=K,E=K.version,A=o.toneMapping),x.layers.enableAll(),H.unshift(x,x.geometry,x.material,0,0,null))}function M(H,V){H.getRGB(Fu,q_(o)),r.buffers.color.setClear(Fu.r,Fu.g,Fu.b,V,p)}function q(){b!==void 0&&(b.geometry.dispose(),b.material.dispose(),b=void 0),x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0)}return{getClearColor:function(){return m},setClearColor:function(H,V=1){m.set(H),_=V,M(m,_)},getClearAlpha:function(){return _},setClearAlpha:function(H){_=H,M(m,_)},render:N,addToRenderList:T,dispose:q}}function ZE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=E(null);let f=l,p=!1;function m(O,J,re,oe,Se){let ye=!1;const z=v(oe,re,J);f!==z&&(f=z,x(f.object)),ye=A(O,oe,re,Se),ye&&D(O,oe,re,Se),Se!==null&&e.update(Se,o.ELEMENT_ARRAY_BUFFER),(ye||p)&&(p=!1,V(O,J,re,oe),Se!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Se).buffer))}function _(){return o.createVertexArray()}function x(O){return o.bindVertexArray(O)}function b(O){return o.deleteVertexArray(O)}function v(O,J,re){const oe=re.wireframe===!0;let Se=r[O.id];Se===void 0&&(Se={},r[O.id]=Se);let ye=Se[J.id];ye===void 0&&(ye={},Se[J.id]=ye);let z=ye[oe];return z===void 0&&(z=E(_()),ye[oe]=z),z}function E(O){const J=[],re=[],oe=[];for(let Se=0;Se<i;Se++)J[Se]=0,re[Se]=0,oe[Se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:re,attributeDivisors:oe,object:O,attributes:{},index:null}}function A(O,J,re,oe){const Se=f.attributes,ye=J.attributes;let z=0;const $=re.getAttributes();for(const ne in $)if($[ne].location>=0){const Ce=Se[ne];let G=ye[ne];if(G===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(G=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(G=O.instanceColor)),Ce===void 0||Ce.attribute!==G||G&&Ce.data!==G.data)return!0;z++}return f.attributesNum!==z||f.index!==oe}function D(O,J,re,oe){const Se={},ye=J.attributes;let z=0;const $=re.getAttributes();for(const ne in $)if($[ne].location>=0){let Ce=ye[ne];Ce===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(Ce=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(Ce=O.instanceColor));const G={};G.attribute=Ce,Ce&&Ce.data&&(G.data=Ce.data),Se[ne]=G,z++}f.attributes=Se,f.attributesNum=z,f.index=oe}function N(){const O=f.newAttributes;for(let J=0,re=O.length;J<re;J++)O[J]=0}function T(O){M(O,0)}function M(O,J){const re=f.newAttributes,oe=f.enabledAttributes,Se=f.attributeDivisors;re[O]=1,oe[O]===0&&(o.enableVertexAttribArray(O),oe[O]=1),Se[O]!==J&&(o.vertexAttribDivisor(O,J),Se[O]=J)}function q(){const O=f.newAttributes,J=f.enabledAttributes;for(let re=0,oe=J.length;re<oe;re++)J[re]!==O[re]&&(o.disableVertexAttribArray(re),J[re]=0)}function H(O,J,re,oe,Se,ye,z){z===!0?o.vertexAttribIPointer(O,J,re,Se,ye):o.vertexAttribPointer(O,J,re,oe,Se,ye)}function V(O,J,re,oe){N();const Se=oe.attributes,ye=re.getAttributes(),z=J.defaultAttributeValues;for(const $ in ye){const ne=ye[$];if(ne.location>=0){let Re=Se[$];if(Re===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(Re=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(Re=O.instanceColor)),Re!==void 0){const Ce=Re.normalized,G=Re.itemSize,pe=e.get(Re);if(pe===void 0)continue;const De=pe.buffer,Fe=pe.type,et=pe.bytesPerElement,he=Fe===o.INT||Fe===o.UNSIGNED_INT||Re.gpuType===Qp;if(Re.isInterleavedBufferAttribute){const ve=Re.data,ke=ve.stride,rt=Re.offset;if(ve.isInstancedInterleavedBuffer){for(let ft=0;ft<ne.locationSize;ft++)M(ne.location+ft,ve.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ft=0;ft<ne.locationSize;ft++)T(ne.location+ft);o.bindBuffer(o.ARRAY_BUFFER,De);for(let ft=0;ft<ne.locationSize;ft++)H(ne.location+ft,G/ne.locationSize,Fe,Ce,ke*et,(rt+G/ne.locationSize*ft)*et,he)}else{if(Re.isInstancedBufferAttribute){for(let ve=0;ve<ne.locationSize;ve++)M(ne.location+ve,Re.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let ve=0;ve<ne.locationSize;ve++)T(ne.location+ve);o.bindBuffer(o.ARRAY_BUFFER,De);for(let ve=0;ve<ne.locationSize;ve++)H(ne.location+ve,G/ne.locationSize,Fe,Ce,G*et,G/ne.locationSize*ve*et,he)}}else if(z!==void 0){const Ce=z[$];if(Ce!==void 0)switch(Ce.length){case 2:o.vertexAttrib2fv(ne.location,Ce);break;case 3:o.vertexAttrib3fv(ne.location,Ce);break;case 4:o.vertexAttrib4fv(ne.location,Ce);break;default:o.vertexAttrib1fv(ne.location,Ce)}}}}q()}function K(){fe();for(const O in r){const J=r[O];for(const re in J){const oe=J[re];for(const Se in oe)b(oe[Se].object),delete oe[Se];delete J[re]}delete r[O]}}function I(O){if(r[O.id]===void 0)return;const J=r[O.id];for(const re in J){const oe=J[re];for(const Se in oe)b(oe[Se].object),delete oe[Se];delete J[re]}delete r[O.id]}function X(O){for(const J in r){const re=r[J];if(re[O.id]===void 0)continue;const oe=re[O.id];for(const Se in oe)b(oe[Se].object),delete oe[Se];delete re[O.id]}}function fe(){P(),p=!0,f!==l&&(f=l,x(f.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:fe,resetDefaultState:P,dispose:K,releaseStatesOfGeometry:I,releaseStatesOfProgram:X,initAttributes:N,enableAttribute:T,disableUnusedAttributes:q}}function KE(o,e,i){let r;function l(x){r=x}function f(x,b){o.drawArrays(r,x,b),i.update(b,r,1)}function p(x,b,v){v!==0&&(o.drawArraysInstanced(r,x,b,v),i.update(b,r,v))}function m(x,b,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,x,0,b,0,v);let A=0;for(let D=0;D<v;D++)A+=b[D];i.update(A,r,1)}function _(x,b,v,E){if(v===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let D=0;D<x.length;D++)p(x[D],b[D],E[D]);else{A.multiDrawArraysInstancedWEBGL(r,x,0,b,0,E,0,v);let D=0;for(let N=0;N<v;N++)D+=b[N]*E[N];i.update(D,r,1)}}this.setMode=l,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function QE(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function p(X){return!(X!==ra&&r.convert(X)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(X){const fe=X===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(X!==va&&r.convert(X)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&X!==Qa&&!fe)}function _(X){if(X==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let x=i.precision!==void 0?i.precision:"highp";const b=_(x);b!==x&&(Ut("WebGLRenderer:",x,"not supported, using",b,"instead."),x=b);const v=i.logarithmicDepthBuffer===!0,E=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),A=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),q=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),V=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),K=D>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:p,textureTypeReadable:m,precision:x,logarithmicDepthBuffer:v,reversedDepthBuffer:E,maxTextures:A,maxVertexTextures:D,maxTextureSize:N,maxCubemapSize:T,maxAttributes:M,maxVertexUniforms:q,maxVaryings:H,maxFragmentUniforms:V,vertexTextures:K,maxSamples:I}}function JE(o){const e=this;let i=null,r=0,l=!1,f=!1;const p=new Fr,m=new Bt,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(v,E){const A=v.length!==0||E||r!==0||l;return l=E,r=v.length,A},this.beginShadows=function(){f=!0,b(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,E){i=b(v,E,0)},this.setState=function(v,E,A){const D=v.clippingPlanes,N=v.clipIntersection,T=v.clipShadows,M=o.get(v);if(!l||D===null||D.length===0||f&&!T)f?b(null):x();else{const q=f?0:r,H=q*4;let V=M.clippingState||null;_.value=V,V=b(D,E,H,A);for(let K=0;K!==H;++K)V[K]=i[K];M.clippingState=V,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=q}};function x(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function b(v,E,A,D){const N=v!==null?v.length:0;let T=null;if(N!==0){if(T=_.value,D!==!0||T===null){const M=A+N*4,q=E.matrixWorldInverse;m.getNormalMatrix(q),(T===null||T.length<M)&&(T=new Float32Array(M));for(let H=0,V=A;H!==N;++H,V+=4)p.copy(v[H]).applyMatrix4(q,m),p.normal.toArray(T,V),T[V+3]=p.constant}_.value=T,_.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,T}}function $E(o){let e=new WeakMap;function i(p,m){return m===pp?p.mapping=No:m===mp&&(p.mapping=Oo),p}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===pp||m===mp)if(e.has(p)){const _=e.get(p).texture;return i(_,p.mapping)}else{const _=p.image;if(_&&_.height>0){const x=new jS(_.height);return x.fromEquirectangularTexture(o,p),e.set(p,x),p.addEventListener("dispose",l),i(x.texture,p.mapping)}else return null}}return p}function l(p){const m=p.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const Br=4,t_=[.125,.215,.35,.446,.526,.582],_s=20,e1=256,kl=new $_,n_=new Qt;let Kd=null,Qd=0,Jd=0,$d=!1;const t1=new me;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,f={}){const{size:p=256,position:m=t1}=f;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(p);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,r,l,_,m),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===No||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:zo,format:ra,colorSpace:Po,depthBuffer:!1},l=a_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n1(f)),this._blurMaterial=a1(f,e,i)}return l}_compileMaterial(e){const i=new sa(new oa,e);this._renderer.compile(i,kl)}_sceneToCubeUV(e,i,r,l,f){const _=new Wi(90,1,i,r),x=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],v=this._renderer,E=v.autoClear,A=v.toneMapping;v.getClearColor(n_),v.toneMapping=Ir,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new Jl,new k_({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,T=N.material;let M=!1;const q=e.background;q?q.isColor&&(T.color.copy(q),e.background=null,M=!0):(T.color.copy(n_),M=!0);for(let H=0;H<6;H++){const V=H%3;V===0?(_.up.set(0,x[H],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+b[H],f.y,f.z)):V===1?(_.up.set(0,0,x[H]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+b[H],f.z)):(_.up.set(0,x[H],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+b[H]));const K=this._cubeSize;wo(l,V*K,H>2?K:0,K,K),v.setRenderTarget(l),M&&v.render(N,_),v.render(e,_)}v.toneMapping=A,v.autoClear=E,e.background=q}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===No||e.mapping===Oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const f=l?this._cubemapMaterial:this._equirectMaterial,p=this._lodMeshes[0];p.material=f;const m=f.uniforms;m.envMap.value=e;const _=this._cubeSize;wo(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(p,kl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,f=this._pingPongRenderTarget;if(this._ggxMaterial===null){const q=3*Math.max(this._cubeSize,16),H=4*this._cubeSize;this._ggxMaterial=i1(this._lodMax,q,H)}const p=this._ggxMaterial,m=this._lodMeshes[r];m.material=p;const _=p.uniforms,x=r/(this._lodMeshes.length-1),b=i/(this._lodMeshes.length-1),v=Math.sqrt(x*x-b*b),E=.05+x*.95,A=v*E,{_lodMax:D}=this,N=this._sizeLods[r],T=3*N*(r>D-Br?r-D+Br:0),M=4*(this._cubeSize-N);_.envMap.value=e.texture,_.roughness.value=A,_.mipInt.value=D-i,wo(f,T,M,3*N,2*N),l.setRenderTarget(f),l.render(m,kl),_.envMap.value=f.texture,_.roughness.value=0,_.mipInt.value=D-r,wo(e,T,M,3*N,2*N),l.setRenderTarget(e),l.render(m,kl)}_blur(e,i,r,l,f){const p=this._pingPongRenderTarget;this._halfBlur(e,p,i,r,l,"latitudinal",f),this._halfBlur(p,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,p,m){const _=this._renderer,x=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&Cn("blur direction must be either latitudinal or longitudinal!");const b=3,v=this._lodMeshes[l];v.material=x;const E=x.uniforms,A=this._sizeLods[r]-1,D=isFinite(f)?Math.PI/(2*A):2*Math.PI/(2*_s-1),N=f/D,T=isFinite(f)?1+Math.floor(b*N):_s;T>_s&&Ut(`sigmaRadians, ${f}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${_s}`);const M=[];let q=0;for(let X=0;X<_s;++X){const fe=X/N,P=Math.exp(-fe*fe/2);M.push(P),X===0?q+=P:X<T&&(q+=2*P)}for(let X=0;X<M.length;X++)M[X]=M[X]/q;E.envMap.value=e.texture,E.samples.value=T,E.weights.value=M,E.latitudinal.value=p==="latitudinal",m&&(E.poleAxis.value=m);const{_lodMax:H}=this;E.dTheta.value=D,E.mipInt.value=H-r;const V=this._sizeLods[l],K=3*V*(l>H-Br?l-H+Br:0),I=4*(this._cubeSize-V);wo(i,K,I,3*V,2*V),_.setRenderTarget(i),_.render(v,kl)}}function n1(o){const e=[],i=[],r=[];let l=o;const f=o-Br+1+t_.length;for(let p=0;p<f;p++){const m=Math.pow(2,l);e.push(m);let _=1/m;p>o-Br?_=t_[p-o+Br-1]:p===0&&(_=0),i.push(_);const x=1/(m-2),b=-x,v=1+x,E=[b,b,v,b,v,v,b,b,v,v,b,v],A=6,D=6,N=3,T=2,M=1,q=new Float32Array(N*D*A),H=new Float32Array(T*D*A),V=new Float32Array(M*D*A);for(let I=0;I<A;I++){const X=I%3*2/3-1,fe=I>2?0:-1,P=[X,fe,0,X+2/3,fe,0,X+2/3,fe+1,0,X,fe,0,X+2/3,fe+1,0,X,fe+1,0];q.set(P,N*D*I),H.set(E,T*D*I);const O=[I,I,I,I,I,I];V.set(O,M*D*I)}const K=new oa;K.setAttribute("position",new _a(q,N)),K.setAttribute("uv",new _a(H,T)),K.setAttribute("faceIndex",new _a(V,M)),r.push(new sa(K,null)),l>Br&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function a_(o,e,i){const r=new bs(o,e,i);return r.texture.mapping=Ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wo(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function i1(o,e,i){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function a1(o,e,i){const r=new Float32Array(_s),l=new me(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function r_(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function s_(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

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
	`}function r1(o){let e=new WeakMap,i=null;function r(m){if(m&&m.isTexture){const _=m.mapping,x=_===pp||_===mp,b=_===No||_===Oo;if(x||b){let v=e.get(m);const E=v!==void 0?v.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==E)return i===null&&(i=new i_(o)),v=x?i.fromEquirectangular(m,v):i.fromCubemap(m,v),v.texture.pmremVersion=m.pmremVersion,e.set(m,v),v.texture;if(v!==void 0)return v.texture;{const A=m.image;return x&&A&&A.height>0||b&&A&&l(A)?(i===null&&(i=new i_(o)),v=x?i.fromEquirectangular(m):i.fromCubemap(m),v.texture.pmremVersion=m.pmremVersion,e.set(m,v),m.addEventListener("dispose",f),v.texture):null}}}return m}function l(m){let _=0;const x=6;for(let b=0;b<x;b++)m[b]!==void 0&&_++;return _===x}function f(m){const _=m.target;_.removeEventListener("dispose",f);const x=e.get(_);x!==void 0&&(e.delete(_),x.dispose())}function p(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function s1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Kl("WebGLRenderer: "+r+" extension not supported."),l}}}function o1(o,e,i,r){const l={},f=new WeakMap;function p(v){const E=v.target;E.index!==null&&e.remove(E.index);for(const D in E.attributes)e.remove(E.attributes[D]);E.removeEventListener("dispose",p),delete l[E.id];const A=f.get(E);A&&(e.remove(A),f.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function m(v,E){return l[E.id]===!0||(E.addEventListener("dispose",p),l[E.id]=!0,i.memory.geometries++),E}function _(v){const E=v.attributes;for(const A in E)e.update(E[A],o.ARRAY_BUFFER)}function x(v){const E=[],A=v.index,D=v.attributes.position;let N=0;if(A!==null){const q=A.array;N=A.version;for(let H=0,V=q.length;H<V;H+=3){const K=q[H+0],I=q[H+1],X=q[H+2];E.push(K,I,I,X,X,K)}}else if(D!==void 0){const q=D.array;N=D.version;for(let H=0,V=q.length/3-1;H<V;H+=3){const K=H+0,I=H+1,X=H+2;E.push(K,I,I,X,X,K)}}else return;const T=new(H_(E)?W_:X_)(E,1);T.version=N;const M=f.get(v);M&&e.remove(M),f.set(v,T)}function b(v){const E=f.get(v);if(E){const A=v.index;A!==null&&E.version<A.version&&x(v)}else x(v);return f.get(v)}return{get:m,update:_,getWireframeAttribute:b}}function l1(o,e,i){let r;function l(E){r=E}let f,p;function m(E){f=E.type,p=E.bytesPerElement}function _(E,A){o.drawElements(r,A,f,E*p),i.update(A,r,1)}function x(E,A,D){D!==0&&(o.drawElementsInstanced(r,A,f,E*p,D),i.update(A,r,D))}function b(E,A,D){if(D===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,A,0,f,E,0,D);let T=0;for(let M=0;M<D;M++)T+=A[M];i.update(T,r,1)}function v(E,A,D,N){if(D===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let M=0;M<E.length;M++)x(E[M]/p,A[M],N[M]);else{T.multiDrawElementsInstancedWEBGL(r,A,0,f,E,0,N,0,D);let M=0;for(let q=0;q<D;q++)M+=A[q]*N[q];i.update(M,r,1)}}this.setMode=l,this.setIndex=m,this.render=_,this.renderInstances=x,this.renderMultiDraw=b,this.renderMultiDrawInstances=v}function c1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,p,m){switch(i.calls++,p){case o.TRIANGLES:i.triangles+=m*(f/3);break;case o.LINES:i.lines+=m*(f/2);break;case o.LINE_STRIP:i.lines+=m*(f-1);break;case o.LINE_LOOP:i.lines+=m*f;break;case o.POINTS:i.points+=m*f;break;default:Cn("WebGLInfo: Unknown draw mode:",p);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function u1(o,e,i){const r=new WeakMap,l=new Dn;function f(p,m,_){const x=p.morphTargetInfluences,b=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,v=b!==void 0?b.length:0;let E=r.get(m);if(E===void 0||E.count!==v){let O=function(){fe.dispose(),r.delete(m),m.removeEventListener("dispose",O)};var A=O;E!==void 0&&E.texture.dispose();const D=m.morphAttributes.position!==void 0,N=m.morphAttributes.normal!==void 0,T=m.morphAttributes.color!==void 0,M=m.morphAttributes.position||[],q=m.morphAttributes.normal||[],H=m.morphAttributes.color||[];let V=0;D===!0&&(V=1),N===!0&&(V=2),T===!0&&(V=3);let K=m.attributes.position.count*V,I=1;K>e.maxTextureSize&&(I=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const X=new Float32Array(K*I*4*v),fe=new V_(X,K,I,v);fe.type=Qa,fe.needsUpdate=!0;const P=V*4;for(let J=0;J<v;J++){const re=M[J],oe=q[J],Se=H[J],ye=K*I*4*J;for(let z=0;z<re.count;z++){const $=z*P;D===!0&&(l.fromBufferAttribute(re,z),X[ye+$+0]=l.x,X[ye+$+1]=l.y,X[ye+$+2]=l.z,X[ye+$+3]=0),N===!0&&(l.fromBufferAttribute(oe,z),X[ye+$+4]=l.x,X[ye+$+5]=l.y,X[ye+$+6]=l.z,X[ye+$+7]=0),T===!0&&(l.fromBufferAttribute(Se,z),X[ye+$+8]=l.x,X[ye+$+9]=l.y,X[ye+$+10]=l.z,X[ye+$+11]=Se.itemSize===4?l.w:1)}}E={count:v,texture:fe,size:new Ot(K,I)},r.set(m,E),m.addEventListener("dispose",O)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",p.morphTexture,i);else{let D=0;for(let T=0;T<x.length;T++)D+=x[T];const N=m.morphTargetsRelative?1:1-D;_.getUniforms().setValue(o,"morphTargetBaseInfluence",N),_.getUniforms().setValue(o,"morphTargetInfluences",x)}_.getUniforms().setValue(o,"morphTargetsTexture",E.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",E.size)}return{update:f}}function f1(o,e,i,r){let l=new WeakMap;function f(_){const x=r.render.frame,b=_.geometry,v=e.get(_,b);if(l.get(v)!==x&&(e.update(v),l.set(v,x)),_.isInstancedMesh&&(_.hasEventListener("dispose",m)===!1&&_.addEventListener("dispose",m),l.get(_)!==x&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),l.set(_,x))),_.isSkinnedMesh){const E=_.skeleton;l.get(E)!==x&&(E.update(),l.set(E,x))}return v}function p(){l=new WeakMap}function m(_){const x=_.target;x.removeEventListener("dispose",m),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:p}}const tv=new pi,o_=new K_(1,1),nv=new V_,iv=new US,av=new j_,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),h_=new Float32Array(4);function Ho(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=l_[l];if(f===void 0&&(f=new Float32Array(l),l_[l]=f),e!==0){r.toArray(f,0);for(let p=1,m=0;p!==e;++p)m+=i,o[p].toArray(f,m)}return f}function Wn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function qn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function tf(o,e){let i=c_[e];i===void 0&&(i=new Int32Array(e),c_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function h1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function d1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2fv(this.addr,e),qn(i,e)}}function p1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Wn(i,e))return;o.uniform3fv(this.addr,e),qn(i,e)}}function m1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4fv(this.addr,e),qn(i,e)}}function x1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;h_.set(r),o.uniformMatrix2fv(this.addr,!1,h_),qn(i,r)}}function g1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;f_.set(r),o.uniformMatrix3fv(this.addr,!1,f_),qn(i,r)}}function _1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;u_.set(r),o.uniformMatrix4fv(this.addr,!1,u_),qn(i,r)}}function v1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2iv(this.addr,e),qn(i,e)}}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wn(i,e))return;o.uniform3iv(this.addr,e),qn(i,e)}}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4iv(this.addr,e),qn(i,e)}}function M1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function E1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2uiv(this.addr,e),qn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wn(i,e))return;o.uniform3uiv(this.addr,e),qn(i,e)}}function A1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4uiv(this.addr,e),qn(i,e)}}function w1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(o_.compareFunction=I_,f=o_):f=tv,i.setTexture2D(e||f,l)}function R1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||iv,l)}function C1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||av,l)}function D1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||nv,l)}function U1(o){switch(o){case 5126:return h1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return x1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return b1;case 5125:return M1;case 36294:return E1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return D1}}function L1(o,e){o.uniform1fv(this.addr,e)}function N1(o,e){const i=Ho(e,this.size,2);o.uniform2fv(this.addr,i)}function O1(o,e){const i=Ho(e,this.size,3);o.uniform3fv(this.addr,i)}function P1(o,e){const i=Ho(e,this.size,4);o.uniform4fv(this.addr,i)}function F1(o,e){const i=Ho(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function z1(o,e){const i=Ho(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function B1(o,e){const i=Ho(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function I1(o,e){o.uniform1iv(this.addr,e)}function H1(o,e){o.uniform2iv(this.addr,e)}function V1(o,e){o.uniform3iv(this.addr,e)}function G1(o,e){o.uniform4iv(this.addr,e)}function k1(o,e){o.uniform1uiv(this.addr,e)}function X1(o,e){o.uniform2uiv(this.addr,e)}function W1(o,e){o.uniform3uiv(this.addr,e)}function q1(o,e){o.uniform4uiv(this.addr,e)}function Y1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture2D(e[p]||tv,f[p])}function j1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture3D(e[p]||iv,f[p])}function Z1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTextureCube(e[p]||av,f[p])}function K1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture2DArray(e[p]||nv,f[p])}function Q1(o){switch(o){case 5126:return L1;case 35664:return N1;case 35665:return O1;case 35666:return P1;case 35674:return F1;case 35675:return z1;case 35676:return B1;case 5124:case 35670:return I1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return k1;case 36294:return X1;case 36295:return W1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return K1}}class J1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=U1(i.type)}}class $1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q1(i.type)}}class e3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,p=l.length;f!==p;++f){const m=l[f];m.setValue(e,i[m.id],r)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function d_(o,e){o.seq.push(e),o.map[e.id]=e}function t3(o,e,i){const r=o.name,l=r.length;for(ep.lastIndex=0;;){const f=ep.exec(r),p=ep.lastIndex;let m=f[1];const _=f[2]==="]",x=f[3];if(_&&(m=m|0),x===void 0||x==="["&&p+2===l){d_(i,x===void 0?new J1(m,o,e):new $1(m,o,e));break}else{let v=i.map[m];v===void 0&&(v=new e3(m),d_(i,v)),i=v}}}class Xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),p=e.getUniformLocation(i,f.name);t3(f,p,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,p=i.length;f!==p;++f){const m=i[f],_=r[m.id];_.needsUpdate!==!1&&m.setValue(e,_.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const p=e[l];p.id in i&&r.push(p)}return r}}function p_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const n3=37297;let i3=0;function a3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let p=l;p<f;p++){const m=p+1;r.push(`${m===e?">":" "} ${m}: ${i[p]}`)}return r.join(`
`)}const m_=new Bt;function r3(o){an._getMatrix(m_,an.workingColorSpace,o);const e=`mat3( ${m_.elements.map(i=>i.toFixed(4))} )`;switch(an.getTransfer(o)){case Wu:return[e,"LinearTransferOETF"];case pn:return[e,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function x_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const p=/ERROR: 0:(\d+)/.exec(f);if(p){const m=parseInt(p[1]);return i.toUpperCase()+`

`+f+`

`+a3(o.getShaderSource(e),m)}else return f}function s3(o,e){const i=r3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function o3(o,e){let i;switch(e){case aS:i="Linear";break;case rS:i="Reinhard";break;case sS:i="Cineon";break;case oS:i="ACESFilmic";break;case cS:i="AgX";break;case uS:i="Neutral";break;case lS:i="Custom";break;default:Ut("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zu=new me;function l3(){an.getLuminanceCoefficients(zu);const o=zu.x.toFixed(4),e=zu.y.toFixed(4),i=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function u3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function f3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),p=f.name;let m=1;f.type===o.FLOAT_MAT2&&(m=2),f.type===o.FLOAT_MAT3&&(m=3),f.type===o.FLOAT_MAT4&&(m=4),i[p]={type:f.type,location:o.getAttribLocation(e,p),locationSize:m}}return i}function Wl(o){return o!==""}function g_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h3=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(o){return o.replace(h3,p3)}const d3=new Map;function p3(o,e){let i=Ht[e];if(i===void 0){const r=d3.get(e);if(r!==void 0)i=Ht[r],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jp(i)}const m3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(o){return o.replace(m3,x3)}function x3(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function y_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function g3(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===zy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Za&&(e="SHADOWMAP_TYPE_VSM"),e}function _3(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case No:case Oo:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v3(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function y3(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case C_:e="ENVMAP_BLENDING_MULTIPLY";break;case nS:e="ENVMAP_BLENDING_MIX";break;case iS:e="ENVMAP_BLENDING_ADD";break}return e}function S3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b3(o,e,i,r){const l=o.getContext(),f=i.defines;let p=i.vertexShader,m=i.fragmentShader;const _=g3(i),x=_3(i),b=v3(i),v=y3(i),E=S3(i),A=c3(i),D=u3(f),N=l.createProgram();let T,M,q=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(T=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Wl).join(`
`),T.length>0&&(T+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Wl).join(`
`),M.length>0&&(M+=`
`)):(T=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+b:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),M=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.envMap?"#define "+b:"",i.envMap?"#define "+v:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ir?"#define TONE_MAPPING":"",i.toneMapping!==Ir?Ht.tonemapping_pars_fragment:"",i.toneMapping!==Ir?o3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,s3("linearToOutputTexel",i.outputColorSpace),l3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wl).join(`
`)),p=jp(p),p=g_(p,i),p=__(p,i),m=jp(m),m=g_(m,i),m=__(m,i),p=v_(p),m=v_(m),i.isRawShaderMaterial!==!0&&(q=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,M=["#define varying in",i.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const H=q+T+p,V=q+M+m,K=p_(l,l.VERTEX_SHADER,H),I=p_(l,l.FRAGMENT_SHADER,V);l.attachShader(N,K),l.attachShader(N,I),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function X(J){if(o.debug.checkShaderErrors){const re=l.getProgramInfoLog(N)||"",oe=l.getShaderInfoLog(K)||"",Se=l.getShaderInfoLog(I)||"",ye=re.trim(),z=oe.trim(),$=Se.trim();let ne=!0,Re=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,N,K,I);else{const Ce=x_(l,K,"vertex"),G=x_(l,I,"fragment");Cn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+ye+`
`+Ce+`
`+G)}else ye!==""?Ut("WebGLProgram: Program Info Log:",ye):(z===""||$==="")&&(Re=!1);Re&&(J.diagnostics={runnable:ne,programLog:ye,vertexShader:{log:z,prefix:T},fragmentShader:{log:$,prefix:M}})}l.deleteShader(K),l.deleteShader(I),fe=new Xu(l,N),P=f3(l,N)}let fe;this.getUniforms=function(){return fe===void 0&&X(this),fe};let P;this.getAttributes=function(){return P===void 0&&X(this),P};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(N,n3)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=i3++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=K,this.fragmentShader=I,this}let M3=0;class E3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),p=this._getShaderCacheForMaterial(e);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(f)===!1&&(p.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new T3(e),i.set(e,r)),r}}class T3{constructor(e){this.id=M3++,this.code=e,this.usedTimes=0}}function A3(o,e,i,r,l,f,p){const m=new rm,_=new E3,x=new Set,b=[],v=l.logarithmicDepthBuffer,E=l.vertexTextures;let A=l.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(P){return x.add(P),P===0?"uv":`uv${P}`}function T(P,O,J,re,oe){const Se=re.fog,ye=oe.geometry,z=P.isMeshStandardMaterial?re.environment:null,$=(P.isMeshStandardMaterial?i:e).get(P.envMap||z),ne=$&&$.mapping===Ku?$.image.height:null,Re=D[P.type];P.precision!==null&&(A=l.getMaxPrecision(P.precision),A!==P.precision&&Ut("WebGLProgram.getParameters:",P.precision,"not supported, using",A,"instead."));const Ce=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,G=Ce!==void 0?Ce.length:0;let pe=0;ye.morphAttributes.position!==void 0&&(pe=1),ye.morphAttributes.normal!==void 0&&(pe=2),ye.morphAttributes.color!==void 0&&(pe=3);let De,Fe,et,he;if(Re){const $t=ma[Re];De=$t.vertexShader,Fe=$t.fragmentShader}else De=P.vertexShader,Fe=P.fragmentShader,_.update(P),et=_.getVertexShaderID(P),he=_.getFragmentShaderID(P);const ve=o.getRenderTarget(),ke=o.state.buffers.depth.getReversed(),rt=oe.isInstancedMesh===!0,ft=oe.isBatchedMesh===!0,be=!!P.map,Ve=!!P.matcap,Ke=!!$,ht=!!P.aoMap,W=!!P.lightMap,xt=!!P.bumpMap,Rt=!!P.normalMap,Tt=!!P.displacementMap,We=!!P.emissiveMap,Gt=!!P.metalnessMap,ct=!!P.roughnessMap,gt=P.anisotropy>0,B=P.clearcoat>0,R=P.dispersion>0,se=P.iridescence>0,Ee=P.sheen>0,Le=P.transmission>0,ae=gt&&!!P.anisotropyMap,Ze=B&&!!P.clearcoatMap,qe=B&&!!P.clearcoatNormalMap,_t=B&&!!P.clearcoatRoughnessMap,Ie=se&&!!P.iridescenceMap,Ne=se&&!!P.iridescenceThicknessMap,Pe=Ee&&!!P.sheenColorMap,ot=Ee&&!!P.sheenRoughnessMap,lt=!!P.specularMap,Ye=!!P.specularColorMap,Et=!!P.specularIntensityMap,j=Le&&!!P.transmissionMap,Xe=Le&&!!P.thicknessMap,He=!!P.gradientMap,Ge=!!P.alphaMap,Ue=P.alphaTest>0,Ae=!!P.alphaHash,nt=!!P.extensions;let Ct=Ir;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ct=o.toneMapping);const it={shaderID:Re,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:Fe,defines:P.defines,customVertexShaderID:et,customFragmentShaderID:he,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:A,batching:ft,batchingColor:ft&&oe._colorsTexture!==null,instancing:rt,instancingColor:rt&&oe.instanceColor!==null,instancingMorph:rt&&oe.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Po,alphaToCoverage:!!P.alphaToCoverage,map:be,matcap:Ve,envMap:Ke,envMapMode:Ke&&$.mapping,envMapCubeUVHeight:ne,aoMap:ht,lightMap:W,bumpMap:xt,normalMap:Rt,displacementMap:E&&Tt,emissiveMap:We,normalMapObjectSpace:Rt&&P.normalMapType===pS,normalMapTangentSpace:Rt&&P.normalMapType===B_,metalnessMap:Gt,roughnessMap:ct,anisotropy:gt,anisotropyMap:ae,clearcoat:B,clearcoatMap:Ze,clearcoatNormalMap:qe,clearcoatRoughnessMap:_t,dispersion:R,iridescence:se,iridescenceMap:Ie,iridescenceThicknessMap:Ne,sheen:Ee,sheenColorMap:Pe,sheenRoughnessMap:ot,specularMap:lt,specularColorMap:Ye,specularIntensityMap:Et,transmission:Le,transmissionMap:j,thicknessMap:Xe,gradientMap:He,opaque:P.transparent===!1&&P.blending===Do&&P.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ue,alphaHash:Ae,combine:P.combine,mapUv:be&&N(P.map.channel),aoMapUv:ht&&N(P.aoMap.channel),lightMapUv:W&&N(P.lightMap.channel),bumpMapUv:xt&&N(P.bumpMap.channel),normalMapUv:Rt&&N(P.normalMap.channel),displacementMapUv:Tt&&N(P.displacementMap.channel),emissiveMapUv:We&&N(P.emissiveMap.channel),metalnessMapUv:Gt&&N(P.metalnessMap.channel),roughnessMapUv:ct&&N(P.roughnessMap.channel),anisotropyMapUv:ae&&N(P.anisotropyMap.channel),clearcoatMapUv:Ze&&N(P.clearcoatMap.channel),clearcoatNormalMapUv:qe&&N(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&N(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&N(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&N(P.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&N(P.sheenColorMap.channel),sheenRoughnessMapUv:ot&&N(P.sheenRoughnessMap.channel),specularMapUv:lt&&N(P.specularMap.channel),specularColorMapUv:Ye&&N(P.specularColorMap.channel),specularIntensityMapUv:Et&&N(P.specularIntensityMap.channel),transmissionMapUv:j&&N(P.transmissionMap.channel),thicknessMapUv:Xe&&N(P.thicknessMap.channel),alphaMapUv:Ge&&N(P.alphaMap.channel),vertexTangents:!!ye.attributes.tangent&&(Rt||gt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ye.attributes.uv&&(be||Ge),fog:!!Se,useFog:P.fog===!0,fogExp2:!!Se&&Se.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ke,skinning:oe.isSkinnedMesh===!0,morphTargets:ye.morphAttributes.position!==void 0,morphNormals:ye.morphAttributes.normal!==void 0,morphColors:ye.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:pe,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ct,decodeVideoTexture:be&&P.map.isVideoTexture===!0&&an.getTransfer(P.map.colorSpace)===pn,decodeVideoTextureEmissive:We&&P.emissiveMap.isVideoTexture===!0&&an.getTransfer(P.emissiveMap.colorSpace)===pn,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===xa,flipSided:P.side===Mi,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:nt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&P.extensions.multiDraw===!0||ft)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return it.vertexUv1s=x.has(1),it.vertexUv2s=x.has(2),it.vertexUv3s=x.has(3),x.clear(),it}function M(P){const O=[];if(P.shaderID?O.push(P.shaderID):(O.push(P.customVertexShaderID),O.push(P.customFragmentShaderID)),P.defines!==void 0)for(const J in P.defines)O.push(J),O.push(P.defines[J]);return P.isRawShaderMaterial===!1&&(q(O,P),H(O,P),O.push(o.outputColorSpace)),O.push(P.customProgramCacheKey),O.join()}function q(P,O){P.push(O.precision),P.push(O.outputColorSpace),P.push(O.envMapMode),P.push(O.envMapCubeUVHeight),P.push(O.mapUv),P.push(O.alphaMapUv),P.push(O.lightMapUv),P.push(O.aoMapUv),P.push(O.bumpMapUv),P.push(O.normalMapUv),P.push(O.displacementMapUv),P.push(O.emissiveMapUv),P.push(O.metalnessMapUv),P.push(O.roughnessMapUv),P.push(O.anisotropyMapUv),P.push(O.clearcoatMapUv),P.push(O.clearcoatNormalMapUv),P.push(O.clearcoatRoughnessMapUv),P.push(O.iridescenceMapUv),P.push(O.iridescenceThicknessMapUv),P.push(O.sheenColorMapUv),P.push(O.sheenRoughnessMapUv),P.push(O.specularMapUv),P.push(O.specularColorMapUv),P.push(O.specularIntensityMapUv),P.push(O.transmissionMapUv),P.push(O.thicknessMapUv),P.push(O.combine),P.push(O.fogExp2),P.push(O.sizeAttenuation),P.push(O.morphTargetsCount),P.push(O.morphAttributeCount),P.push(O.numDirLights),P.push(O.numPointLights),P.push(O.numSpotLights),P.push(O.numSpotLightMaps),P.push(O.numHemiLights),P.push(O.numRectAreaLights),P.push(O.numDirLightShadows),P.push(O.numPointLightShadows),P.push(O.numSpotLightShadows),P.push(O.numSpotLightShadowsWithMaps),P.push(O.numLightProbes),P.push(O.shadowMapType),P.push(O.toneMapping),P.push(O.numClippingPlanes),P.push(O.numClipIntersection),P.push(O.depthPacking)}function H(P,O){m.disableAll(),O.supportsVertexTextures&&m.enable(0),O.instancing&&m.enable(1),O.instancingColor&&m.enable(2),O.instancingMorph&&m.enable(3),O.matcap&&m.enable(4),O.envMap&&m.enable(5),O.normalMapObjectSpace&&m.enable(6),O.normalMapTangentSpace&&m.enable(7),O.clearcoat&&m.enable(8),O.iridescence&&m.enable(9),O.alphaTest&&m.enable(10),O.vertexColors&&m.enable(11),O.vertexAlphas&&m.enable(12),O.vertexUv1s&&m.enable(13),O.vertexUv2s&&m.enable(14),O.vertexUv3s&&m.enable(15),O.vertexTangents&&m.enable(16),O.anisotropy&&m.enable(17),O.alphaHash&&m.enable(18),O.batching&&m.enable(19),O.dispersion&&m.enable(20),O.batchingColor&&m.enable(21),O.gradientMap&&m.enable(22),P.push(m.mask),m.disableAll(),O.fog&&m.enable(0),O.useFog&&m.enable(1),O.flatShading&&m.enable(2),O.logarithmicDepthBuffer&&m.enable(3),O.reversedDepthBuffer&&m.enable(4),O.skinning&&m.enable(5),O.morphTargets&&m.enable(6),O.morphNormals&&m.enable(7),O.morphColors&&m.enable(8),O.premultipliedAlpha&&m.enable(9),O.shadowMapEnabled&&m.enable(10),O.doubleSided&&m.enable(11),O.flipSided&&m.enable(12),O.useDepthPacking&&m.enable(13),O.dithering&&m.enable(14),O.transmission&&m.enable(15),O.sheen&&m.enable(16),O.opaque&&m.enable(17),O.pointsUvs&&m.enable(18),O.decodeVideoTexture&&m.enable(19),O.decodeVideoTextureEmissive&&m.enable(20),O.alphaToCoverage&&m.enable(21),P.push(m.mask)}function V(P){const O=D[P.type];let J;if(O){const re=ma[O];J=XS.clone(re.uniforms)}else J=P.uniforms;return J}function K(P,O){let J;for(let re=0,oe=b.length;re<oe;re++){const Se=b[re];if(Se.cacheKey===O){J=Se,++J.usedTimes;break}}return J===void 0&&(J=new b3(o,O,P,f),b.push(J)),J}function I(P){if(--P.usedTimes===0){const O=b.indexOf(P);b[O]=b[b.length-1],b.pop(),P.destroy()}}function X(P){_.remove(P)}function fe(){_.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:V,acquireProgram:K,releaseProgram:I,releaseShaderCache:X,programs:b,dispose:fe}}function w3(){let o=new WeakMap;function e(p){return o.has(p)}function i(p){let m=o.get(p);return m===void 0&&(m={},o.set(p,m)),m}function r(p){o.delete(p)}function l(p,m,_){o.get(p)[m]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function R3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function S_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function b_(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function p(v,E,A,D,N,T){let M=o[e];return M===void 0?(M={id:v.id,object:v,geometry:E,material:A,groupOrder:D,renderOrder:v.renderOrder,z:N,group:T},o[e]=M):(M.id=v.id,M.object=v,M.geometry=E,M.material=A,M.groupOrder=D,M.renderOrder=v.renderOrder,M.z=N,M.group=T),e++,M}function m(v,E,A,D,N,T){const M=p(v,E,A,D,N,T);A.transmission>0?r.push(M):A.transparent===!0?l.push(M):i.push(M)}function _(v,E,A,D,N,T){const M=p(v,E,A,D,N,T);A.transmission>0?r.unshift(M):A.transparent===!0?l.unshift(M):i.unshift(M)}function x(v,E){i.length>1&&i.sort(v||R3),r.length>1&&r.sort(E||S_),l.length>1&&l.sort(E||S_)}function b(){for(let v=e,E=o.length;v<E;v++){const A=o[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:m,unshift:_,finish:b,sort:x}}function C3(){let o=new WeakMap;function e(r,l){const f=o.get(r);let p;return f===void 0?(p=new b_,o.set(r,[p])):l>=f.length?(p=new b_,f.push(p)):p=f[l],p}function i(){o=new WeakMap}return{get:e,dispose:i}}function D3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new me,color:new Qt};break;case"SpotLight":i={position:new me,direction:new me,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new me,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new me,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":i={color:new Qt,position:new me,halfWidth:new me,halfHeight:new me};break}return o[e.id]=i,i}}}function U3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let L3=0;function N3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function O3(o){const e=new D3,i=U3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)r.probe.push(new me);const l=new me,f=new Mn,p=new Mn;function m(x){let b=0,v=0,E=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let A=0,D=0,N=0,T=0,M=0,q=0,H=0,V=0,K=0,I=0,X=0;x.sort(N3);for(let P=0,O=x.length;P<O;P++){const J=x[P],re=J.color,oe=J.intensity,Se=J.distance,ye=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)b+=re.r*oe,v+=re.g*oe,E+=re.b*oe;else if(J.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(J.sh.coefficients[z],oe);X++}else if(J.isDirectionalLight){const z=e.get(J);if(z.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const $=J.shadow,ne=i.get(J);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,r.directionalShadow[A]=ne,r.directionalShadowMap[A]=ye,r.directionalShadowMatrix[A]=J.shadow.matrix,q++}r.directional[A]=z,A++}else if(J.isSpotLight){const z=e.get(J);z.position.setFromMatrixPosition(J.matrixWorld),z.color.copy(re).multiplyScalar(oe),z.distance=Se,z.coneCos=Math.cos(J.angle),z.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),z.decay=J.decay,r.spot[N]=z;const $=J.shadow;if(J.map&&(r.spotLightMap[K]=J.map,K++,$.updateMatrices(J),J.castShadow&&I++),r.spotLightMatrix[N]=$.matrix,J.castShadow){const ne=i.get(J);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,r.spotShadow[N]=ne,r.spotShadowMap[N]=ye,V++}N++}else if(J.isRectAreaLight){const z=e.get(J);z.color.copy(re).multiplyScalar(oe),z.halfWidth.set(J.width*.5,0,0),z.halfHeight.set(0,J.height*.5,0),r.rectArea[T]=z,T++}else if(J.isPointLight){const z=e.get(J);if(z.color.copy(J.color).multiplyScalar(J.intensity),z.distance=J.distance,z.decay=J.decay,J.castShadow){const $=J.shadow,ne=i.get(J);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,ne.shadowCameraNear=$.camera.near,ne.shadowCameraFar=$.camera.far,r.pointShadow[D]=ne,r.pointShadowMap[D]=ye,r.pointShadowMatrix[D]=J.shadow.matrix,H++}r.point[D]=z,D++}else if(J.isHemisphereLight){const z=e.get(J);z.skyColor.copy(J.color).multiplyScalar(oe),z.groundColor.copy(J.groundColor).multiplyScalar(oe),r.hemi[M]=z,M++}}T>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=b,r.ambient[1]=v,r.ambient[2]=E;const fe=r.hash;(fe.directionalLength!==A||fe.pointLength!==D||fe.spotLength!==N||fe.rectAreaLength!==T||fe.hemiLength!==M||fe.numDirectionalShadows!==q||fe.numPointShadows!==H||fe.numSpotShadows!==V||fe.numSpotMaps!==K||fe.numLightProbes!==X)&&(r.directional.length=A,r.spot.length=N,r.rectArea.length=T,r.point.length=D,r.hemi.length=M,r.directionalShadow.length=q,r.directionalShadowMap.length=q,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=V,r.spotShadowMap.length=V,r.directionalShadowMatrix.length=q,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=V+K-I,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=X,fe.directionalLength=A,fe.pointLength=D,fe.spotLength=N,fe.rectAreaLength=T,fe.hemiLength=M,fe.numDirectionalShadows=q,fe.numPointShadows=H,fe.numSpotShadows=V,fe.numSpotMaps=K,fe.numLightProbes=X,r.version=L3++)}function _(x,b){let v=0,E=0,A=0,D=0,N=0;const T=b.matrixWorldInverse;for(let M=0,q=x.length;M<q;M++){const H=x[M];if(H.isDirectionalLight){const V=r.directional[v];V.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),V.direction.sub(l),V.direction.transformDirection(T),v++}else if(H.isSpotLight){const V=r.spot[A];V.position.setFromMatrixPosition(H.matrixWorld),V.position.applyMatrix4(T),V.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),V.direction.sub(l),V.direction.transformDirection(T),A++}else if(H.isRectAreaLight){const V=r.rectArea[D];V.position.setFromMatrixPosition(H.matrixWorld),V.position.applyMatrix4(T),p.identity(),f.copy(H.matrixWorld),f.premultiply(T),p.extractRotation(f),V.halfWidth.set(H.width*.5,0,0),V.halfHeight.set(0,H.height*.5,0),V.halfWidth.applyMatrix4(p),V.halfHeight.applyMatrix4(p),D++}else if(H.isPointLight){const V=r.point[E];V.position.setFromMatrixPosition(H.matrixWorld),V.position.applyMatrix4(T),E++}else if(H.isHemisphereLight){const V=r.hemi[N];V.direction.setFromMatrixPosition(H.matrixWorld),V.direction.transformDirection(T),N++}}}return{setup:m,setupView:_,state:r}}function M_(o){const e=new O3(o),i=[],r=[];function l(b){x.camera=b,i.length=0,r.length=0}function f(b){i.push(b)}function p(b){r.push(b)}function m(){e.setup(i)}function _(b){e.setupView(i,b)}const x={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:x,setupLights:m,setupLightsView:_,pushLight:f,pushShadow:p}}function P3(o){let e=new WeakMap;function i(l,f=0){const p=e.get(l);let m;return p===void 0?(m=new M_(o),e.set(l,[m])):f>=p.length?(m=new M_(o),p.push(m)):m=p[f],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const F3=`void main() {
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
}`;function B3(o,e,i){let r=new sm;const l=new Ot,f=new Ot,p=new Dn,m=new ib({depthPacking:dS}),_=new ab,x={},b=i.maxTextureSize,v={[Hr]:Mi,[Mi]:Hr,[xa]:xa},E=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:F3,fragmentShader:z3}),A=E.clone();A.defines.HORIZONTAL_PASS=1;const D=new oa;D.setAttribute("position",new _a(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new sa(D,E),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let M=this.type;this.render=function(I,X,fe){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||I.length===0)return;const P=o.getRenderTarget(),O=o.getActiveCubeFace(),J=o.getActiveMipmapLevel(),re=o.state;re.setBlending(Ja),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const oe=M!==Za&&this.type===Za,Se=M===Za&&this.type!==Za;for(let ye=0,z=I.length;ye<z;ye++){const $=I[ye],ne=$.shadow;if(ne===void 0){Ut("WebGLShadowMap:",$,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;l.copy(ne.mapSize);const Re=ne.getFrameExtents();if(l.multiply(Re),f.copy(ne.mapSize),(l.x>b||l.y>b)&&(l.x>b&&(f.x=Math.floor(b/Re.x),l.x=f.x*Re.x,ne.mapSize.x=f.x),l.y>b&&(f.y=Math.floor(b/Re.y),l.y=f.y*Re.y,ne.mapSize.y=f.y)),ne.map===null||oe===!0||Se===!0){const G=this.type!==Za?{minFilter:Li,magFilter:Li}:{};ne.map!==null&&ne.map.dispose(),ne.map=new bs(l.x,l.y,G),ne.map.texture.name=$.name+".shadowMap",ne.camera.updateProjectionMatrix()}o.setRenderTarget(ne.map),o.clear();const Ce=ne.getViewportCount();for(let G=0;G<Ce;G++){const pe=ne.getViewport(G);p.set(f.x*pe.x,f.y*pe.y,f.x*pe.z,f.y*pe.w),re.viewport(p),ne.updateMatrices($,G),r=ne.getFrustum(),V(X,fe,ne.camera,$,this.type)}ne.isPointLightShadow!==!0&&this.type===Za&&q(ne,fe),ne.needsUpdate=!1}M=this.type,T.needsUpdate=!1,o.setRenderTarget(P,O,J)};function q(I,X){const fe=e.update(N);E.defines.VSM_SAMPLES!==I.blurSamples&&(E.defines.VSM_SAMPLES=I.blurSamples,A.defines.VSM_SAMPLES=I.blurSamples,E.needsUpdate=!0,A.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bs(l.x,l.y)),E.uniforms.shadow_pass.value=I.map.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(X,null,fe,E,N,null),A.uniforms.shadow_pass.value=I.mapPass.texture,A.uniforms.resolution.value=I.mapSize,A.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(X,null,fe,A,N,null)}function H(I,X,fe,P){let O=null;const J=fe.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(J!==void 0)O=J;else if(O=fe.isPointLight===!0?_:m,o.localClippingEnabled&&X.clipShadows===!0&&Array.isArray(X.clippingPlanes)&&X.clippingPlanes.length!==0||X.displacementMap&&X.displacementScale!==0||X.alphaMap&&X.alphaTest>0||X.map&&X.alphaTest>0||X.alphaToCoverage===!0){const re=O.uuid,oe=X.uuid;let Se=x[re];Se===void 0&&(Se={},x[re]=Se);let ye=Se[oe];ye===void 0&&(ye=O.clone(),Se[oe]=ye,X.addEventListener("dispose",K)),O=ye}if(O.visible=X.visible,O.wireframe=X.wireframe,P===Za?O.side=X.shadowSide!==null?X.shadowSide:X.side:O.side=X.shadowSide!==null?X.shadowSide:v[X.side],O.alphaMap=X.alphaMap,O.alphaTest=X.alphaToCoverage===!0?.5:X.alphaTest,O.map=X.map,O.clipShadows=X.clipShadows,O.clippingPlanes=X.clippingPlanes,O.clipIntersection=X.clipIntersection,O.displacementMap=X.displacementMap,O.displacementScale=X.displacementScale,O.displacementBias=X.displacementBias,O.wireframeLinewidth=X.wireframeLinewidth,O.linewidth=X.linewidth,fe.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const re=o.properties.get(O);re.light=fe}return O}function V(I,X,fe,P,O){if(I.visible===!1)return;if(I.layers.test(X.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&O===Za)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,I.matrixWorld);const oe=e.update(I),Se=I.material;if(Array.isArray(Se)){const ye=oe.groups;for(let z=0,$=ye.length;z<$;z++){const ne=ye[z],Re=Se[ne.materialIndex];if(Re&&Re.visible){const Ce=H(I,Re,P,O);I.onBeforeShadow(o,I,X,fe,oe,Ce,ne),o.renderBufferDirect(fe,null,oe,Ce,I,ne),I.onAfterShadow(o,I,X,fe,oe,Ce,ne)}}}else if(Se.visible){const ye=H(I,Se,P,O);I.onBeforeShadow(o,I,X,fe,oe,ye,null),o.renderBufferDirect(fe,null,oe,ye,I,null),I.onAfterShadow(o,I,X,fe,oe,ye,null)}}const re=I.children;for(let oe=0,Se=re.length;oe<Se;oe++)V(re[oe],X,fe,P,O)}function K(I){I.target.removeEventListener("dispose",K);for(const fe in x){const P=x[fe],O=I.target.uuid;O in P&&(P[O].dispose(),delete P[O])}}}const I3={[op]:lp,[cp]:hp,[up]:dp,[Lo]:fp,[lp]:op,[hp]:cp,[dp]:up,[fp]:Lo};function H3(o,e){function i(){let j=!1;const Xe=new Dn;let He=null;const Ge=new Dn(0,0,0,0);return{setMask:function(Ue){He!==Ue&&!j&&(o.colorMask(Ue,Ue,Ue,Ue),He=Ue)},setLocked:function(Ue){j=Ue},setClear:function(Ue,Ae,nt,Ct,it){it===!0&&(Ue*=Ct,Ae*=Ct,nt*=Ct),Xe.set(Ue,Ae,nt,Ct),Ge.equals(Xe)===!1&&(o.clearColor(Ue,Ae,nt,Ct),Ge.copy(Xe))},reset:function(){j=!1,He=null,Ge.set(-1,0,0,0)}}}function r(){let j=!1,Xe=!1,He=null,Ge=null,Ue=null;return{setReversed:function(Ae){if(Xe!==Ae){const nt=e.get("EXT_clip_control");Ae?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Xe=Ae;const Ct=Ue;Ue=null,this.setClear(Ct)}},getReversed:function(){return Xe},setTest:function(Ae){Ae?ve(o.DEPTH_TEST):ke(o.DEPTH_TEST)},setMask:function(Ae){He!==Ae&&!j&&(o.depthMask(Ae),He=Ae)},setFunc:function(Ae){if(Xe&&(Ae=I3[Ae]),Ge!==Ae){switch(Ae){case op:o.depthFunc(o.NEVER);break;case lp:o.depthFunc(o.ALWAYS);break;case cp:o.depthFunc(o.LESS);break;case Lo:o.depthFunc(o.LEQUAL);break;case up:o.depthFunc(o.EQUAL);break;case fp:o.depthFunc(o.GEQUAL);break;case hp:o.depthFunc(o.GREATER);break;case dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ge=Ae}},setLocked:function(Ae){j=Ae},setClear:function(Ae){Ue!==Ae&&(Xe&&(Ae=1-Ae),o.clearDepth(Ae),Ue=Ae)},reset:function(){j=!1,He=null,Ge=null,Ue=null,Xe=!1}}}function l(){let j=!1,Xe=null,He=null,Ge=null,Ue=null,Ae=null,nt=null,Ct=null,it=null;return{setTest:function($t){j||($t?ve(o.STENCIL_TEST):ke(o.STENCIL_TEST))},setMask:function($t){Xe!==$t&&!j&&(o.stencilMask($t),Xe=$t)},setFunc:function($t,Yn,li){(He!==$t||Ge!==Yn||Ue!==li)&&(o.stencilFunc($t,Yn,li),He=$t,Ge=Yn,Ue=li)},setOp:function($t,Yn,li){(Ae!==$t||nt!==Yn||Ct!==li)&&(o.stencilOp($t,Yn,li),Ae=$t,nt=Yn,Ct=li)},setLocked:function($t){j=$t},setClear:function($t){it!==$t&&(o.clearStencil($t),it=$t)},reset:function(){j=!1,Xe=null,He=null,Ge=null,Ue=null,Ae=null,nt=null,Ct=null,it=null}}}const f=new i,p=new r,m=new l,_=new WeakMap,x=new WeakMap;let b={},v={},E=new WeakMap,A=[],D=null,N=!1,T=null,M=null,q=null,H=null,V=null,K=null,I=null,X=new Qt(0,0,0),fe=0,P=!1,O=null,J=null,re=null,oe=null,Se=null;const ye=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ne)[1]),z=$>=1):ne.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),z=$>=2);let Re=null,Ce={};const G=o.getParameter(o.SCISSOR_BOX),pe=o.getParameter(o.VIEWPORT),De=new Dn().fromArray(G),Fe=new Dn().fromArray(pe);function et(j,Xe,He,Ge){const Ue=new Uint8Array(4),Ae=o.createTexture();o.bindTexture(j,Ae),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let nt=0;nt<He;nt++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Xe,0,o.RGBA,1,1,Ge,0,o.RGBA,o.UNSIGNED_BYTE,Ue):o.texImage2D(Xe+nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ue);return Ae}const he={};he[o.TEXTURE_2D]=et(o.TEXTURE_2D,o.TEXTURE_2D,1),he[o.TEXTURE_CUBE_MAP]=et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[o.TEXTURE_2D_ARRAY]=et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),he[o.TEXTURE_3D]=et(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),ve(o.DEPTH_TEST),p.setFunc(Lo),xt(!1),Rt(vg),ve(o.CULL_FACE),ht(Ja);function ve(j){b[j]!==!0&&(o.enable(j),b[j]=!0)}function ke(j){b[j]!==!1&&(o.disable(j),b[j]=!1)}function rt(j,Xe){return v[j]!==Xe?(o.bindFramebuffer(j,Xe),v[j]=Xe,j===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Xe),j===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Xe),!0):!1}function ft(j,Xe){let He=A,Ge=!1;if(j){He=E.get(Xe),He===void 0&&(He=[],E.set(Xe,He));const Ue=j.textures;if(He.length!==Ue.length||He[0]!==o.COLOR_ATTACHMENT0){for(let Ae=0,nt=Ue.length;Ae<nt;Ae++)He[Ae]=o.COLOR_ATTACHMENT0+Ae;He.length=Ue.length,Ge=!0}}else He[0]!==o.BACK&&(He[0]=o.BACK,Ge=!0);Ge&&o.drawBuffers(He)}function be(j){return D!==j?(o.useProgram(j),D=j,!0):!1}const Ve={[gs]:o.FUNC_ADD,[Iy]:o.FUNC_SUBTRACT,[Hy]:o.FUNC_REVERSE_SUBTRACT};Ve[Vy]=o.MIN,Ve[Gy]=o.MAX;const Ke={[ky]:o.ZERO,[Xy]:o.ONE,[Wy]:o.SRC_COLOR,[rp]:o.SRC_ALPHA,[Qy]:o.SRC_ALPHA_SATURATE,[Zy]:o.DST_COLOR,[Yy]:o.DST_ALPHA,[qy]:o.ONE_MINUS_SRC_COLOR,[sp]:o.ONE_MINUS_SRC_ALPHA,[Ky]:o.ONE_MINUS_DST_COLOR,[jy]:o.ONE_MINUS_DST_ALPHA,[Jy]:o.CONSTANT_COLOR,[$y]:o.ONE_MINUS_CONSTANT_COLOR,[eS]:o.CONSTANT_ALPHA,[tS]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(j,Xe,He,Ge,Ue,Ae,nt,Ct,it,$t){if(j===Ja){N===!0&&(ke(o.BLEND),N=!1);return}if(N===!1&&(ve(o.BLEND),N=!0),j!==By){if(j!==T||$t!==P){if((M!==gs||V!==gs)&&(o.blendEquation(o.FUNC_ADD),M=gs,V=gs),$t)switch(j){case Do:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yg:o.blendFunc(o.ONE,o.ONE);break;case Sg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Cn("WebGLState: Invalid blending: ",j);break}else switch(j){case Do:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Sg:Cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bg:Cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Cn("WebGLState: Invalid blending: ",j);break}q=null,H=null,K=null,I=null,X.set(0,0,0),fe=0,T=j,P=$t}return}Ue=Ue||Xe,Ae=Ae||He,nt=nt||Ge,(Xe!==M||Ue!==V)&&(o.blendEquationSeparate(Ve[Xe],Ve[Ue]),M=Xe,V=Ue),(He!==q||Ge!==H||Ae!==K||nt!==I)&&(o.blendFuncSeparate(Ke[He],Ke[Ge],Ke[Ae],Ke[nt]),q=He,H=Ge,K=Ae,I=nt),(Ct.equals(X)===!1||it!==fe)&&(o.blendColor(Ct.r,Ct.g,Ct.b,it),X.copy(Ct),fe=it),T=j,P=!1}function W(j,Xe){j.side===xa?ke(o.CULL_FACE):ve(o.CULL_FACE);let He=j.side===Mi;Xe&&(He=!He),xt(He),j.blending===Do&&j.transparent===!1?ht(Ja):ht(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),p.setFunc(j.depthFunc),p.setTest(j.depthTest),p.setMask(j.depthWrite),f.setMask(j.colorWrite);const Ge=j.stencilWrite;m.setTest(Ge),Ge&&(m.setMask(j.stencilWriteMask),m.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),m.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),We(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):ke(o.SAMPLE_ALPHA_TO_COVERAGE)}function xt(j){O!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),O=j)}function Rt(j){j!==Py?(ve(o.CULL_FACE),j!==J&&(j===vg?o.cullFace(o.BACK):j===Fy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ke(o.CULL_FACE),J=j}function Tt(j){j!==re&&(z&&o.lineWidth(j),re=j)}function We(j,Xe,He){j?(ve(o.POLYGON_OFFSET_FILL),(oe!==Xe||Se!==He)&&(o.polygonOffset(Xe,He),oe=Xe,Se=He)):ke(o.POLYGON_OFFSET_FILL)}function Gt(j){j?ve(o.SCISSOR_TEST):ke(o.SCISSOR_TEST)}function ct(j){j===void 0&&(j=o.TEXTURE0+ye-1),Re!==j&&(o.activeTexture(j),Re=j)}function gt(j,Xe,He){He===void 0&&(Re===null?He=o.TEXTURE0+ye-1:He=Re);let Ge=Ce[He];Ge===void 0&&(Ge={type:void 0,texture:void 0},Ce[He]=Ge),(Ge.type!==j||Ge.texture!==Xe)&&(Re!==He&&(o.activeTexture(He),Re=He),o.bindTexture(j,Xe||he[j]),Ge.type=j,Ge.texture=Xe)}function B(){const j=Ce[Re];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function se(){try{o.compressedTexImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Ee(){try{o.texSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Le(){try{o.texSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function ae(){try{o.compressedTexSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function qe(){try{o.texStorage2D(...arguments)}catch(j){j("WebGLState:",j)}}function _t(){try{o.texStorage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Ie(){try{o.texImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Ne(){try{o.texImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Pe(j){De.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),De.copy(j))}function ot(j){Fe.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Fe.copy(j))}function lt(j,Xe){let He=x.get(Xe);He===void 0&&(He=new WeakMap,x.set(Xe,He));let Ge=He.get(j);Ge===void 0&&(Ge=o.getUniformBlockIndex(Xe,j.name),He.set(j,Ge))}function Ye(j,Xe){const Ge=x.get(Xe).get(j);_.get(Xe)!==Ge&&(o.uniformBlockBinding(Xe,Ge,j.__bindingPointIndex),_.set(Xe,Ge))}function Et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),p.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),b={},Re=null,Ce={},v={},E=new WeakMap,A=[],D=null,N=!1,T=null,M=null,q=null,H=null,V=null,K=null,I=null,X=new Qt(0,0,0),fe=0,P=!1,O=null,J=null,re=null,oe=null,Se=null,De.set(0,0,o.canvas.width,o.canvas.height),Fe.set(0,0,o.canvas.width,o.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:ve,disable:ke,bindFramebuffer:rt,drawBuffers:ft,useProgram:be,setBlending:ht,setMaterial:W,setFlipSided:xt,setCullFace:Rt,setLineWidth:Tt,setPolygonOffset:We,setScissorTest:Gt,activeTexture:ct,bindTexture:gt,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:se,texImage2D:Ie,texImage3D:Ne,updateUBOMapping:lt,uniformBlockBinding:Ye,texStorage2D:qe,texStorage3D:_t,texSubImage2D:Ee,texSubImage3D:Le,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ze,scissor:Pe,viewport:ot,reset:Et}}function V3(o,e,i,r,l,f,p){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new Ot,b=new WeakMap;let v;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(B,R){return A?new OffscreenCanvas(B,R):Yu("canvas")}function N(B,R,se){let Ee=1;const Le=gt(B);if((Le.width>se||Le.height>se)&&(Ee=se/Math.max(Le.width,Le.height)),Ee<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ae=Math.floor(Ee*Le.width),Ze=Math.floor(Ee*Le.height);v===void 0&&(v=D(ae,Ze));const qe=R?D(ae,Ze):v;return qe.width=ae,qe.height=Ze,qe.getContext("2d").drawImage(B,0,0,ae,Ze),Ut("WebGLRenderer: Texture has been resized from ("+Le.width+"x"+Le.height+") to ("+ae+"x"+Ze+")."),qe}else return"data"in B&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Le.width+"x"+Le.height+")."),B;return B}function T(B){return B.generateMipmaps}function M(B){o.generateMipmap(B)}function q(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function H(B,R,se,Ee,Le=!1){if(B!==null){if(o[B]!==void 0)return o[B];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ae=R;if(R===o.RED&&(se===o.FLOAT&&(ae=o.R32F),se===o.HALF_FLOAT&&(ae=o.R16F),se===o.UNSIGNED_BYTE&&(ae=o.R8)),R===o.RED_INTEGER&&(se===o.UNSIGNED_BYTE&&(ae=o.R8UI),se===o.UNSIGNED_SHORT&&(ae=o.R16UI),se===o.UNSIGNED_INT&&(ae=o.R32UI),se===o.BYTE&&(ae=o.R8I),se===o.SHORT&&(ae=o.R16I),se===o.INT&&(ae=o.R32I)),R===o.RG&&(se===o.FLOAT&&(ae=o.RG32F),se===o.HALF_FLOAT&&(ae=o.RG16F),se===o.UNSIGNED_BYTE&&(ae=o.RG8)),R===o.RG_INTEGER&&(se===o.UNSIGNED_BYTE&&(ae=o.RG8UI),se===o.UNSIGNED_SHORT&&(ae=o.RG16UI),se===o.UNSIGNED_INT&&(ae=o.RG32UI),se===o.BYTE&&(ae=o.RG8I),se===o.SHORT&&(ae=o.RG16I),se===o.INT&&(ae=o.RG32I)),R===o.RGB_INTEGER&&(se===o.UNSIGNED_BYTE&&(ae=o.RGB8UI),se===o.UNSIGNED_SHORT&&(ae=o.RGB16UI),se===o.UNSIGNED_INT&&(ae=o.RGB32UI),se===o.BYTE&&(ae=o.RGB8I),se===o.SHORT&&(ae=o.RGB16I),se===o.INT&&(ae=o.RGB32I)),R===o.RGBA_INTEGER&&(se===o.UNSIGNED_BYTE&&(ae=o.RGBA8UI),se===o.UNSIGNED_SHORT&&(ae=o.RGBA16UI),se===o.UNSIGNED_INT&&(ae=o.RGBA32UI),se===o.BYTE&&(ae=o.RGBA8I),se===o.SHORT&&(ae=o.RGBA16I),se===o.INT&&(ae=o.RGBA32I)),R===o.RGB&&(se===o.UNSIGNED_INT_5_9_9_9_REV&&(ae=o.RGB9_E5),se===o.UNSIGNED_INT_10F_11F_11F_REV&&(ae=o.R11F_G11F_B10F)),R===o.RGBA){const Ze=Le?Wu:an.getTransfer(Ee);se===o.FLOAT&&(ae=o.RGBA32F),se===o.HALF_FLOAT&&(ae=o.RGBA16F),se===o.UNSIGNED_BYTE&&(ae=Ze===pn?o.SRGB8_ALPHA8:o.RGBA8),se===o.UNSIGNED_SHORT_4_4_4_4&&(ae=o.RGBA4),se===o.UNSIGNED_SHORT_5_5_5_1&&(ae=o.RGB5_A1)}return(ae===o.R16F||ae===o.R32F||ae===o.RG16F||ae===o.RG32F||ae===o.RGBA16F||ae===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function V(B,R){let se;return B?R===null||R===ys||R===Yl?se=o.DEPTH24_STENCIL8:R===Qa?se=o.DEPTH32F_STENCIL8:R===ql&&(se=o.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ys||R===Yl?se=o.DEPTH_COMPONENT24:R===Qa?se=o.DEPTH_COMPONENT32F:R===ql&&(se=o.DEPTH_COMPONENT16),se}function K(B,R){return T(B)===!0||B.isFramebufferTexture&&B.minFilter!==Li&&B.minFilter!==qi?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function I(B){const R=B.target;R.removeEventListener("dispose",I),fe(R),R.isVideoTexture&&b.delete(R)}function X(B){const R=B.target;R.removeEventListener("dispose",X),O(R)}function fe(B){const R=r.get(B);if(R.__webglInit===void 0)return;const se=B.source,Ee=E.get(se);if(Ee){const Le=Ee[R.__cacheKey];Le.usedTimes--,Le.usedTimes===0&&P(B),Object.keys(Ee).length===0&&E.delete(se)}r.remove(B)}function P(B){const R=r.get(B);o.deleteTexture(R.__webglTexture);const se=B.source,Ee=E.get(se);delete Ee[R.__cacheKey],p.memory.textures--}function O(B){const R=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(R.__webglFramebuffer[Ee]))for(let Le=0;Le<R.__webglFramebuffer[Ee].length;Le++)o.deleteFramebuffer(R.__webglFramebuffer[Ee][Le]);else o.deleteFramebuffer(R.__webglFramebuffer[Ee]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[Ee])}else{if(Array.isArray(R.__webglFramebuffer))for(let Ee=0;Ee<R.__webglFramebuffer.length;Ee++)o.deleteFramebuffer(R.__webglFramebuffer[Ee]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Ee=0;Ee<R.__webglColorRenderbuffer.length;Ee++)R.__webglColorRenderbuffer[Ee]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[Ee]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const se=B.textures;for(let Ee=0,Le=se.length;Ee<Le;Ee++){const ae=r.get(se[Ee]);ae.__webglTexture&&(o.deleteTexture(ae.__webglTexture),p.memory.textures--),r.remove(se[Ee])}r.remove(B)}let J=0;function re(){J=0}function oe(){const B=J;return B>=l.maxTextures&&Ut("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),J+=1,B}function Se(B){const R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function ye(B,R){const se=r.get(B);if(B.isVideoTexture&&Gt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&se.__version!==B.version){const Ee=B.image;if(Ee===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{he(se,B,R);return}}else B.isExternalTexture&&(se.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,se.__webglTexture,o.TEXTURE0+R)}function z(B,R){const se=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&se.__version!==B.version){he(se,B,R);return}else B.isExternalTexture&&(se.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,se.__webglTexture,o.TEXTURE0+R)}function $(B,R){const se=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&se.__version!==B.version){he(se,B,R);return}i.bindTexture(o.TEXTURE_3D,se.__webglTexture,o.TEXTURE0+R)}function ne(B,R){const se=r.get(B);if(B.version>0&&se.__version!==B.version){ve(se,B,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,se.__webglTexture,o.TEXTURE0+R)}const Re={[xp]:o.REPEAT,[Ka]:o.CLAMP_TO_EDGE,[gp]:o.MIRRORED_REPEAT},Ce={[Li]:o.NEAREST,[fS]:o.NEAREST_MIPMAP_NEAREST,[xu]:o.NEAREST_MIPMAP_LINEAR,[qi]:o.LINEAR,[Ed]:o.LINEAR_MIPMAP_NEAREST,[vs]:o.LINEAR_MIPMAP_LINEAR},G={[mS]:o.NEVER,[SS]:o.ALWAYS,[xS]:o.LESS,[I_]:o.LEQUAL,[gS]:o.EQUAL,[yS]:o.GEQUAL,[_S]:o.GREATER,[vS]:o.NOTEQUAL};function pe(B,R){if(R.type===Qa&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===qi||R.magFilter===Ed||R.magFilter===xu||R.magFilter===vs||R.minFilter===qi||R.minFilter===Ed||R.minFilter===xu||R.minFilter===vs)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,Re[R.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,Re[R.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,Re[R.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,Ce[R.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,Ce[R.minFilter]),R.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,G[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Li||R.minFilter!==xu&&R.minFilter!==vs||R.type===Qa&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");o.texParameterf(B,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function De(B,R){let se=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",I));const Ee=R.source;let Le=E.get(Ee);Le===void 0&&(Le={},E.set(Ee,Le));const ae=Se(R);if(ae!==B.__cacheKey){Le[ae]===void 0&&(Le[ae]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,se=!0),Le[ae].usedTimes++;const Ze=Le[B.__cacheKey];Ze!==void 0&&(Le[B.__cacheKey].usedTimes--,Ze.usedTimes===0&&P(R)),B.__cacheKey=ae,B.__webglTexture=Le[ae].texture}return se}function Fe(B,R,se){return Math.floor(Math.floor(B/se)/R)}function et(B,R,se,Ee){const ae=B.updateRanges;if(ae.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,se,Ee,R.data);else{ae.sort((Ne,Pe)=>Ne.start-Pe.start);let Ze=0;for(let Ne=1;Ne<ae.length;Ne++){const Pe=ae[Ze],ot=ae[Ne],lt=Pe.start+Pe.count,Ye=Fe(ot.start,R.width,4),Et=Fe(Pe.start,R.width,4);ot.start<=lt+1&&Ye===Et&&Fe(ot.start+ot.count-1,R.width,4)===Ye?Pe.count=Math.max(Pe.count,ot.start+ot.count-Pe.start):(++Ze,ae[Ze]=ot)}ae.length=Ze+1;const qe=o.getParameter(o.UNPACK_ROW_LENGTH),_t=o.getParameter(o.UNPACK_SKIP_PIXELS),Ie=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Ne=0,Pe=ae.length;Ne<Pe;Ne++){const ot=ae[Ne],lt=Math.floor(ot.start/4),Ye=Math.ceil(ot.count/4),Et=lt%R.width,j=Math.floor(lt/R.width),Xe=Ye,He=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Et),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,Et,j,Xe,He,se,Ee,R.data)}B.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,qe),o.pixelStorei(o.UNPACK_SKIP_PIXELS,_t),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ie)}}function he(B,R,se){let Ee=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Ee=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Ee=o.TEXTURE_3D);const Le=De(B,R),ae=R.source;i.bindTexture(Ee,B.__webglTexture,o.TEXTURE0+se);const Ze=r.get(ae);if(ae.version!==Ze.__version||Le===!0){i.activeTexture(o.TEXTURE0+se);const qe=an.getPrimaries(an.workingColorSpace),_t=R.colorSpace===zr?null:an.getPrimaries(R.colorSpace),Ie=R.colorSpace===zr||qe===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ne=N(R.image,!1,l.maxTextureSize);Ne=ct(R,Ne);const Pe=f.convert(R.format,R.colorSpace),ot=f.convert(R.type);let lt=H(R.internalFormat,Pe,ot,R.colorSpace,R.isVideoTexture);pe(Ee,R);let Ye;const Et=R.mipmaps,j=R.isVideoTexture!==!0,Xe=Ze.__version===void 0||Le===!0,He=ae.dataReady,Ge=K(R,Ne);if(R.isDepthTexture)lt=V(R.format===Zl,R.type),Xe&&(j?i.texStorage2D(o.TEXTURE_2D,1,lt,Ne.width,Ne.height):i.texImage2D(o.TEXTURE_2D,0,lt,Ne.width,Ne.height,0,Pe,ot,null));else if(R.isDataTexture)if(Et.length>0){j&&Xe&&i.texStorage2D(o.TEXTURE_2D,Ge,lt,Et[0].width,Et[0].height);for(let Ue=0,Ae=Et.length;Ue<Ae;Ue++)Ye=Et[Ue],j?He&&i.texSubImage2D(o.TEXTURE_2D,Ue,0,0,Ye.width,Ye.height,Pe,ot,Ye.data):i.texImage2D(o.TEXTURE_2D,Ue,lt,Ye.width,Ye.height,0,Pe,ot,Ye.data);R.generateMipmaps=!1}else j?(Xe&&i.texStorage2D(o.TEXTURE_2D,Ge,lt,Ne.width,Ne.height),He&&et(R,Ne,Pe,ot)):i.texImage2D(o.TEXTURE_2D,0,lt,Ne.width,Ne.height,0,Pe,ot,Ne.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){j&&Xe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,lt,Et[0].width,Et[0].height,Ne.depth);for(let Ue=0,Ae=Et.length;Ue<Ae;Ue++)if(Ye=Et[Ue],R.format!==ra)if(Pe!==null)if(j){if(He)if(R.layerUpdates.size>0){const nt=e_(Ye.width,Ye.height,R.format,R.type);for(const Ct of R.layerUpdates){const it=Ye.data.subarray(Ct*nt/Ye.data.BYTES_PER_ELEMENT,(Ct+1)*nt/Ye.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,Ct,Ye.width,Ye.height,1,Pe,it)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,0,Ye.width,Ye.height,Ne.depth,Pe,Ye.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ue,lt,Ye.width,Ye.height,Ne.depth,0,Ye.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?He&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ue,0,0,0,Ye.width,Ye.height,Ne.depth,Pe,ot,Ye.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ue,lt,Ye.width,Ye.height,Ne.depth,0,Pe,ot,Ye.data)}else{j&&Xe&&i.texStorage2D(o.TEXTURE_2D,Ge,lt,Et[0].width,Et[0].height);for(let Ue=0,Ae=Et.length;Ue<Ae;Ue++)Ye=Et[Ue],R.format!==ra?Pe!==null?j?He&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ue,0,0,Ye.width,Ye.height,Pe,Ye.data):i.compressedTexImage2D(o.TEXTURE_2D,Ue,lt,Ye.width,Ye.height,0,Ye.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?He&&i.texSubImage2D(o.TEXTURE_2D,Ue,0,0,Ye.width,Ye.height,Pe,ot,Ye.data):i.texImage2D(o.TEXTURE_2D,Ue,lt,Ye.width,Ye.height,0,Pe,ot,Ye.data)}else if(R.isDataArrayTexture)if(j){if(Xe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,lt,Ne.width,Ne.height,Ne.depth),He)if(R.layerUpdates.size>0){const Ue=e_(Ne.width,Ne.height,R.format,R.type);for(const Ae of R.layerUpdates){const nt=Ne.data.subarray(Ae*Ue/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*Ue/Ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ae,Ne.width,Ne.height,1,Pe,ot,nt)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,Pe,ot,Ne.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,lt,Ne.width,Ne.height,Ne.depth,0,Pe,ot,Ne.data);else if(R.isData3DTexture)j?(Xe&&i.texStorage3D(o.TEXTURE_3D,Ge,lt,Ne.width,Ne.height,Ne.depth),He&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,Pe,ot,Ne.data)):i.texImage3D(o.TEXTURE_3D,0,lt,Ne.width,Ne.height,Ne.depth,0,Pe,ot,Ne.data);else if(R.isFramebufferTexture){if(Xe)if(j)i.texStorage2D(o.TEXTURE_2D,Ge,lt,Ne.width,Ne.height);else{let Ue=Ne.width,Ae=Ne.height;for(let nt=0;nt<Ge;nt++)i.texImage2D(o.TEXTURE_2D,nt,lt,Ue,Ae,0,Pe,ot,null),Ue>>=1,Ae>>=1}}else if(Et.length>0){if(j&&Xe){const Ue=gt(Et[0]);i.texStorage2D(o.TEXTURE_2D,Ge,lt,Ue.width,Ue.height)}for(let Ue=0,Ae=Et.length;Ue<Ae;Ue++)Ye=Et[Ue],j?He&&i.texSubImage2D(o.TEXTURE_2D,Ue,0,0,Pe,ot,Ye):i.texImage2D(o.TEXTURE_2D,Ue,lt,Pe,ot,Ye);R.generateMipmaps=!1}else if(j){if(Xe){const Ue=gt(Ne);i.texStorage2D(o.TEXTURE_2D,Ge,lt,Ue.width,Ue.height)}He&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,ot,Ne)}else i.texImage2D(o.TEXTURE_2D,0,lt,Pe,ot,Ne);T(R)&&M(Ee),Ze.__version=ae.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function ve(B,R,se){if(R.image.length!==6)return;const Ee=De(B,R),Le=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+se);const ae=r.get(Le);if(Le.version!==ae.__version||Ee===!0){i.activeTexture(o.TEXTURE0+se);const Ze=an.getPrimaries(an.workingColorSpace),qe=R.colorSpace===zr?null:an.getPrimaries(R.colorSpace),_t=R.colorSpace===zr||Ze===qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ie=R.isCompressedTexture||R.image[0].isCompressedTexture,Ne=R.image[0]&&R.image[0].isDataTexture,Pe=[];for(let Ae=0;Ae<6;Ae++)!Ie&&!Ne?Pe[Ae]=N(R.image[Ae],!0,l.maxCubemapSize):Pe[Ae]=Ne?R.image[Ae].image:R.image[Ae],Pe[Ae]=ct(R,Pe[Ae]);const ot=Pe[0],lt=f.convert(R.format,R.colorSpace),Ye=f.convert(R.type),Et=H(R.internalFormat,lt,Ye,R.colorSpace),j=R.isVideoTexture!==!0,Xe=ae.__version===void 0||Ee===!0,He=Le.dataReady;let Ge=K(R,ot);pe(o.TEXTURE_CUBE_MAP,R);let Ue;if(Ie){j&&Xe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,Et,ot.width,ot.height);for(let Ae=0;Ae<6;Ae++){Ue=Pe[Ae].mipmaps;for(let nt=0;nt<Ue.length;nt++){const Ct=Ue[nt];R.format!==ra?lt!==null?j?He&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt,0,0,Ct.width,Ct.height,lt,Ct.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt,Et,Ct.width,Ct.height,0,Ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?He&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt,0,0,Ct.width,Ct.height,lt,Ye,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt,Et,Ct.width,Ct.height,0,lt,Ye,Ct.data)}}}else{if(Ue=R.mipmaps,j&&Xe){Ue.length>0&&Ge++;const Ae=gt(Pe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,Et,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ne){j?He&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Pe[Ae].width,Pe[Ae].height,lt,Ye,Pe[Ae].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Et,Pe[Ae].width,Pe[Ae].height,0,lt,Ye,Pe[Ae].data);for(let nt=0;nt<Ue.length;nt++){const it=Ue[nt].image[Ae].image;j?He&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt+1,0,0,it.width,it.height,lt,Ye,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt+1,Et,it.width,it.height,0,lt,Ye,it.data)}}else{j?He&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,lt,Ye,Pe[Ae]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Et,lt,Ye,Pe[Ae]);for(let nt=0;nt<Ue.length;nt++){const Ct=Ue[nt];j?He&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt+1,0,0,lt,Ye,Ct.image[Ae]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt+1,Et,lt,Ye,Ct.image[Ae])}}}T(R)&&M(o.TEXTURE_CUBE_MAP),ae.__version=Le.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function ke(B,R,se,Ee,Le,ae){const Ze=f.convert(se.format,se.colorSpace),qe=f.convert(se.type),_t=H(se.internalFormat,Ze,qe,se.colorSpace),Ie=r.get(R),Ne=r.get(se);if(Ne.__renderTarget=R,!Ie.__hasExternalTextures){const Pe=Math.max(1,R.width>>ae),ot=Math.max(1,R.height>>ae);Le===o.TEXTURE_3D||Le===o.TEXTURE_2D_ARRAY?i.texImage3D(Le,ae,_t,Pe,ot,R.depth,0,Ze,qe,null):i.texImage2D(Le,ae,_t,Pe,ot,0,Ze,qe,null)}i.bindFramebuffer(o.FRAMEBUFFER,B),We(R)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,Le,Ne.__webglTexture,0,Tt(R)):(Le===o.TEXTURE_2D||Le>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Le<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Ee,Le,Ne.__webglTexture,ae),i.bindFramebuffer(o.FRAMEBUFFER,null)}function rt(B,R,se){if(o.bindRenderbuffer(o.RENDERBUFFER,B),R.depthBuffer){const Ee=R.depthTexture,Le=Ee&&Ee.isDepthTexture?Ee.type:null,ae=V(R.stencilBuffer,Le),Ze=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=Tt(R);We(R)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qe,ae,R.width,R.height):se?o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,ae,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ae,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,B)}else{const Ee=R.textures;for(let Le=0;Le<Ee.length;Le++){const ae=Ee[Le],Ze=f.convert(ae.format,ae.colorSpace),qe=f.convert(ae.type),_t=H(ae.internalFormat,Ze,qe,ae.colorSpace),Ie=Tt(R);se&&We(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,_t,R.width,R.height):We(R)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie,_t,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,_t,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ft(B,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(R.depthTexture);Ee.__renderTarget=R,(!Ee.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ye(R.depthTexture,0);const Le=Ee.__webglTexture,ae=Tt(R);if(R.depthTexture.format===jl)We(R)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Le,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Le,0);else if(R.depthTexture.format===Zl)We(R)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Le,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Le,0);else throw new Error("Unknown depthTexture format")}function be(B){const R=r.get(B),se=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){const Ee=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Ee){const Le=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Ee.removeEventListener("dispose",Le)};Ee.addEventListener("dispose",Le),R.__depthDisposeCallback=Le}R.__boundDepthTexture=Ee}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");const Ee=B.texture.mipmaps;Ee&&Ee.length>0?ft(R.__webglFramebuffer[0],B):ft(R.__webglFramebuffer,B)}else if(se){R.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[Ee]),R.__webglDepthbuffer[Ee]===void 0)R.__webglDepthbuffer[Ee]=o.createRenderbuffer(),rt(R.__webglDepthbuffer[Ee],B,!1);else{const Le=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer[Ee];o.bindRenderbuffer(o.RENDERBUFFER,ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,ae)}}else{const Ee=B.texture.mipmaps;if(Ee&&Ee.length>0?i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),rt(R.__webglDepthbuffer,B,!1);else{const Le=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,ae)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ve(B,R,se){const Ee=r.get(B);R!==void 0&&ke(Ee.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),se!==void 0&&be(B)}function Ke(B){const R=B.texture,se=r.get(B),Ee=r.get(R);B.addEventListener("dispose",X);const Le=B.textures,ae=B.isWebGLCubeRenderTarget===!0,Ze=Le.length>1;if(Ze||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=o.createTexture()),Ee.__version=R.version,p.memory.textures++),ae){se.__webglFramebuffer=[];for(let qe=0;qe<6;qe++)if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer[qe]=[];for(let _t=0;_t<R.mipmaps.length;_t++)se.__webglFramebuffer[qe][_t]=o.createFramebuffer()}else se.__webglFramebuffer[qe]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer=[];for(let qe=0;qe<R.mipmaps.length;qe++)se.__webglFramebuffer[qe]=o.createFramebuffer()}else se.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let qe=0,_t=Le.length;qe<_t;qe++){const Ie=r.get(Le[qe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=o.createTexture(),p.memory.textures++)}if(B.samples>0&&We(B)===!1){se.__webglMultisampledFramebuffer=o.createFramebuffer(),se.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let qe=0;qe<Le.length;qe++){const _t=Le[qe];se.__webglColorRenderbuffer[qe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,se.__webglColorRenderbuffer[qe]);const Ie=f.convert(_t.format,_t.colorSpace),Ne=f.convert(_t.type),Pe=H(_t.internalFormat,Ie,Ne,_t.colorSpace,B.isXRRenderTarget===!0),ot=Tt(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,ot,Pe,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,se.__webglColorRenderbuffer[qe])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(se.__webglDepthRenderbuffer=o.createRenderbuffer(),rt(se.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ae){i.bindTexture(o.TEXTURE_CUBE_MAP,Ee.__webglTexture),pe(o.TEXTURE_CUBE_MAP,R);for(let qe=0;qe<6;qe++)if(R.mipmaps&&R.mipmaps.length>0)for(let _t=0;_t<R.mipmaps.length;_t++)ke(se.__webglFramebuffer[qe][_t],B,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+qe,_t);else ke(se.__webglFramebuffer[qe],B,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0);T(R)&&M(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let qe=0,_t=Le.length;qe<_t;qe++){const Ie=Le[qe],Ne=r.get(Ie);let Pe=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Pe=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Ne.__webglTexture),pe(Pe,Ie),ke(se.__webglFramebuffer,B,Ie,o.COLOR_ATTACHMENT0+qe,Pe,0),T(Ie)&&M(Pe)}i.unbindTexture()}else{let qe=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(qe=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(qe,Ee.__webglTexture),pe(qe,R),R.mipmaps&&R.mipmaps.length>0)for(let _t=0;_t<R.mipmaps.length;_t++)ke(se.__webglFramebuffer[_t],B,R,o.COLOR_ATTACHMENT0,qe,_t);else ke(se.__webglFramebuffer,B,R,o.COLOR_ATTACHMENT0,qe,0);T(R)&&M(qe),i.unbindTexture()}B.depthBuffer&&be(B)}function ht(B){const R=B.textures;for(let se=0,Ee=R.length;se<Ee;se++){const Le=R[se];if(T(Le)){const ae=q(B),Ze=r.get(Le).__webglTexture;i.bindTexture(ae,Ze),M(ae),i.unbindTexture()}}}const W=[],xt=[];function Rt(B){if(B.samples>0){if(We(B)===!1){const R=B.textures,se=B.width,Ee=B.height;let Le=o.COLOR_BUFFER_BIT;const ae=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=r.get(B),qe=R.length>1;if(qe)for(let Ie=0;Ie<R.length;Ie++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const _t=B.texture.mipmaps;_t&&_t.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Ie=0;Ie<R.length;Ie++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Le|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Le|=o.STENCIL_BUFFER_BIT)),qe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ie]);const Ne=r.get(R[Ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ne,0)}o.blitFramebuffer(0,0,se,Ee,0,0,se,Ee,Le,o.NEAREST),_===!0&&(W.length=0,xt.length=0,W.push(o.COLOR_ATTACHMENT0+Ie),B.depthBuffer&&B.resolveDepthBuffer===!1&&(W.push(ae),xt.push(ae),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,xt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,W))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),qe)for(let Ie=0;Ie<R.length;Ie++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ie]);const Ne=r.get(R[Ie]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,Ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&_){const R=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Tt(B){return Math.min(l.maxSamples,B.samples)}function We(B){const R=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Gt(B){const R=p.render.frame;b.get(B)!==R&&(b.set(B,R),B.update())}function ct(B,R){const se=B.colorSpace,Ee=B.format,Le=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||se!==Po&&se!==zr&&(an.getTransfer(se)===pn?(Ee!==ra||Le!==va)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Cn("WebGLTextures: Unsupported texture color space:",se)),R}function gt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(x.width=B.naturalWidth||B.width,x.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(x.width=B.displayWidth,x.height=B.displayHeight):(x.width=B.width,x.height=B.height),x}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.setTexture2D=ye,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=ne,this.rebindTextures=Ve,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=We}function G3(o,e){function i(r,l=zr){let f;const p=an.getTransfer(l);if(r===va)return o.UNSIGNED_BYTE;if(r===Jp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return o.UNSIGNED_SHORT_5_5_5_1;if(r===N_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===O_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===U_)return o.BYTE;if(r===L_)return o.SHORT;if(r===ql)return o.UNSIGNED_SHORT;if(r===Qp)return o.INT;if(r===ys)return o.UNSIGNED_INT;if(r===Qa)return o.FLOAT;if(r===zo)return o.HALF_FLOAT;if(r===P_)return o.ALPHA;if(r===F_)return o.RGB;if(r===ra)return o.RGBA;if(r===jl)return o.DEPTH_COMPONENT;if(r===Zl)return o.DEPTH_STENCIL;if(r===z_)return o.RED;if(r===em)return o.RED_INTEGER;if(r===tm)return o.RG;if(r===nm)return o.RG_INTEGER;if(r===im)return o.RGBA_INTEGER;if(r===Iu||r===Hu||r===Vu||r===Gu)if(p===pn)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Iu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Iu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_p||r===vp||r===yp||r===Sp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===_p)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bp||r===Mp||r===Ep)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===bp||r===Mp)return p===pn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Ep)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tp||r===Ap||r===wp||r===Rp||r===Cp||r===Dp||r===Up||r===Lp||r===Np||r===Op||r===Pp||r===Fp||r===zp||r===Bp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Tp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ap)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Up)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Np)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Op)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ip||r===Hp||r===Vp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Ip)return p===pn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gp||r===kp||r===Xp||r===Wp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Gp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===kp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const k3=`
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

}`;class W3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new er({vertexShader:k3,fragmentShader:X3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sa(new $u(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q3 extends Ms{constructor(e,i){super();const r=this;let l=null,f=1,p=null,m="local-floor",_=1,x=null,b=null,v=null,E=null,A=null,D=null;const N=typeof XRWebGLBinding<"u",T=new W3,M={},q=i.getContextAttributes();let H=null,V=null;const K=[],I=[],X=new Ot;let fe=null;const P=new Wi;P.viewport=new Dn;const O=new Wi;O.viewport=new Dn;const J=[P,O],re=new lb;let oe=null,Se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let ve=K[he];return ve===void 0&&(ve=new qd,K[he]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(he){let ve=K[he];return ve===void 0&&(ve=new qd,K[he]=ve),ve.getGripSpace()},this.getHand=function(he){let ve=K[he];return ve===void 0&&(ve=new qd,K[he]=ve),ve.getHandSpace()};function ye(he){const ve=I.indexOf(he.inputSource);if(ve===-1)return;const ke=K[ve];ke!==void 0&&(ke.update(he.inputSource,he.frame,x||p),ke.dispatchEvent({type:he.type,data:he.inputSource}))}function z(){l.removeEventListener("select",ye),l.removeEventListener("selectstart",ye),l.removeEventListener("selectend",ye),l.removeEventListener("squeeze",ye),l.removeEventListener("squeezestart",ye),l.removeEventListener("squeezeend",ye),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",$);for(let he=0;he<K.length;he++){const ve=I[he];ve!==null&&(I[he]=null,K[he].disconnect(ve))}oe=null,Se=null,T.reset();for(const he in M)delete M[he];e.setRenderTarget(H),A=null,E=null,v=null,l=null,V=null,et.stop(),r.isPresenting=!1,e.setPixelRatio(fe),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){f=he,r.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){m=he,r.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||p},this.setReferenceSpace=function(he){x=he},this.getBaseLayer=function(){return E!==null?E:A},this.getBinding=function(){return v===null&&N&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return D},this.getSession=function(){return l},this.setSession=async function(he){if(l=he,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",ye),l.addEventListener("selectstart",ye),l.addEventListener("selectend",ye),l.addEventListener("squeeze",ye),l.addEventListener("squeezestart",ye),l.addEventListener("squeezeend",ye),l.addEventListener("end",z),l.addEventListener("inputsourceschange",$),q.xrCompatible!==!0&&await i.makeXRCompatible(),fe=e.getPixelRatio(),e.getSize(X),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,rt=null,ft=null;q.depth&&(ft=q.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ke=q.stencil?Zl:jl,rt=q.stencil?Yl:ys);const be={colorFormat:i.RGBA8,depthFormat:ft,scaleFactor:f};v=this.getBinding(),E=v.createProjectionLayer(be),l.updateRenderState({layers:[E]}),e.setPixelRatio(1),e.setSize(E.textureWidth,E.textureHeight,!1),V=new bs(E.textureWidth,E.textureHeight,{format:ra,type:va,depthTexture:new K_(E.textureWidth,E.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:q.stencil,colorSpace:e.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const ke={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:f};A=new XRWebGLLayer(l,i,ke),l.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),V=new bs(A.framebufferWidth,A.framebufferHeight,{format:ra,type:va,colorSpace:e.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1})}V.isXRRenderTarget=!0,this.setFoveation(_),x=null,p=await l.requestReferenceSpace(m),et.setContext(l),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function $(he){for(let ve=0;ve<he.removed.length;ve++){const ke=he.removed[ve],rt=I.indexOf(ke);rt>=0&&(I[rt]=null,K[rt].disconnect(ke))}for(let ve=0;ve<he.added.length;ve++){const ke=he.added[ve];let rt=I.indexOf(ke);if(rt===-1){for(let be=0;be<K.length;be++)if(be>=I.length){I.push(ke),rt=be;break}else if(I[be]===null){I[be]=ke,rt=be;break}if(rt===-1)break}const ft=K[rt];ft&&ft.connect(ke)}}const ne=new me,Re=new me;function Ce(he,ve,ke){ne.setFromMatrixPosition(ve.matrixWorld),Re.setFromMatrixPosition(ke.matrixWorld);const rt=ne.distanceTo(Re),ft=ve.projectionMatrix.elements,be=ke.projectionMatrix.elements,Ve=ft[14]/(ft[10]-1),Ke=ft[14]/(ft[10]+1),ht=(ft[9]+1)/ft[5],W=(ft[9]-1)/ft[5],xt=(ft[8]-1)/ft[0],Rt=(be[8]+1)/be[0],Tt=Ve*xt,We=Ve*Rt,Gt=rt/(-xt+Rt),ct=Gt*-xt;if(ve.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(ct),he.translateZ(Gt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),ft[10]===-1)he.projectionMatrix.copy(ve.projectionMatrix),he.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const gt=Ve+Gt,B=Ke+Gt,R=Tt-ct,se=We+(rt-ct),Ee=ht*Ke/B*gt,Le=W*Ke/B*gt;he.projectionMatrix.makePerspective(R,se,Ee,Le,gt,B),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function G(he,ve){ve===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(ve.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(l===null)return;let ve=he.near,ke=he.far;T.texture!==null&&(T.depthNear>0&&(ve=T.depthNear),T.depthFar>0&&(ke=T.depthFar)),re.near=O.near=P.near=ve,re.far=O.far=P.far=ke,(oe!==re.near||Se!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),oe=re.near,Se=re.far),re.layers.mask=he.layers.mask|6,P.layers.mask=re.layers.mask&3,O.layers.mask=re.layers.mask&5;const rt=he.parent,ft=re.cameras;G(re,rt);for(let be=0;be<ft.length;be++)G(ft[be],rt);ft.length===2?Ce(re,P,O):re.projectionMatrix.copy(P.projectionMatrix),pe(he,re,rt)};function pe(he,ve,ke){ke===null?he.matrix.copy(ve.matrixWorld):(he.matrix.copy(ke.matrixWorld),he.matrix.invert(),he.matrix.multiply(ve.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(ve.projectionMatrix),he.projectionMatrixInverse.copy(ve.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=qp*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(E===null&&A===null))return _},this.setFoveation=function(he){_=he,E!==null&&(E.fixedFoveation=he),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=he)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(re)},this.getCameraTexture=function(he){return M[he]};let De=null;function Fe(he,ve){if(b=ve.getViewerPose(x||p),D=ve,b!==null){const ke=b.views;A!==null&&(e.setRenderTargetFramebuffer(V,A.framebuffer),e.setRenderTarget(V));let rt=!1;ke.length!==re.cameras.length&&(re.cameras.length=0,rt=!0);for(let Ke=0;Ke<ke.length;Ke++){const ht=ke[Ke];let W=null;if(A!==null)W=A.getViewport(ht);else{const Rt=v.getViewSubImage(E,ht);W=Rt.viewport,Ke===0&&(e.setRenderTargetTextures(V,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(V))}let xt=J[Ke];xt===void 0&&(xt=new Wi,xt.layers.enable(Ke),xt.viewport=new Dn,J[Ke]=xt),xt.matrix.fromArray(ht.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(ht.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(W.x,W.y,W.width,W.height),Ke===0&&(re.matrix.copy(xt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),rt===!0&&re.cameras.push(xt)}const ft=l.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){v=r.getBinding();const Ke=v.getDepthInformation(ke[0]);Ke&&Ke.isValid&&Ke.texture&&T.init(Ke,l.renderState)}if(ft&&ft.includes("camera-access")&&N){e.state.unbindTexture(),v=r.getBinding();for(let Ke=0;Ke<ke.length;Ke++){const ht=ke[Ke].camera;if(ht){let W=M[ht];W||(W=new Q_,M[ht]=W);const xt=v.getCameraImage(ht);W.sourceTexture=xt}}}}for(let ke=0;ke<K.length;ke++){const rt=I[ke],ft=K[ke];rt!==null&&ft!==void 0&&ft.update(rt,ve,x||p)}De&&De(he,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),D=null}const et=new ev;et.setAnimationLoop(Fe),this.setAnimationLoop=function(he){De=he},this.dispose=function(){}}}const xs=new ya,Y3=new Mn;function j3(o,e){function i(T,M){T.matrixAutoUpdate===!0&&T.updateMatrix(),M.value.copy(T.matrix)}function r(T,M){M.color.getRGB(T.fogColor.value,q_(o)),M.isFog?(T.fogNear.value=M.near,T.fogFar.value=M.far):M.isFogExp2&&(T.fogDensity.value=M.density)}function l(T,M,q,H,V){M.isMeshBasicMaterial||M.isMeshLambertMaterial?f(T,M):M.isMeshToonMaterial?(f(T,M),v(T,M)):M.isMeshPhongMaterial?(f(T,M),b(T,M)):M.isMeshStandardMaterial?(f(T,M),E(T,M),M.isMeshPhysicalMaterial&&A(T,M,V)):M.isMeshMatcapMaterial?(f(T,M),D(T,M)):M.isMeshDepthMaterial?f(T,M):M.isMeshDistanceMaterial?(f(T,M),N(T,M)):M.isMeshNormalMaterial?f(T,M):M.isLineBasicMaterial?(p(T,M),M.isLineDashedMaterial&&m(T,M)):M.isPointsMaterial?_(T,M,q,H):M.isSpriteMaterial?x(T,M):M.isShadowMaterial?(T.color.value.copy(M.color),T.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function f(T,M){T.opacity.value=M.opacity,M.color&&T.diffuse.value.copy(M.color),M.emissive&&T.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.bumpMap&&(T.bumpMap.value=M.bumpMap,i(M.bumpMap,T.bumpMapTransform),T.bumpScale.value=M.bumpScale,M.side===Mi&&(T.bumpScale.value*=-1)),M.normalMap&&(T.normalMap.value=M.normalMap,i(M.normalMap,T.normalMapTransform),T.normalScale.value.copy(M.normalScale),M.side===Mi&&T.normalScale.value.negate()),M.displacementMap&&(T.displacementMap.value=M.displacementMap,i(M.displacementMap,T.displacementMapTransform),T.displacementScale.value=M.displacementScale,T.displacementBias.value=M.displacementBias),M.emissiveMap&&(T.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,T.emissiveMapTransform)),M.specularMap&&(T.specularMap.value=M.specularMap,i(M.specularMap,T.specularMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest);const q=e.get(M),H=q.envMap,V=q.envMapRotation;H&&(T.envMap.value=H,xs.copy(V),xs.x*=-1,xs.y*=-1,xs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),T.envMapRotation.value.setFromMatrix4(Y3.makeRotationFromEuler(xs)),T.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=M.reflectivity,T.ior.value=M.ior,T.refractionRatio.value=M.refractionRatio),M.lightMap&&(T.lightMap.value=M.lightMap,T.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,T.lightMapTransform)),M.aoMap&&(T.aoMap.value=M.aoMap,T.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,T.aoMapTransform))}function p(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform))}function m(T,M){T.dashSize.value=M.dashSize,T.totalSize.value=M.dashSize+M.gapSize,T.scale.value=M.scale}function _(T,M,q,H){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.size.value=M.size*q,T.scale.value=H*.5,M.map&&(T.map.value=M.map,i(M.map,T.uvTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function x(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.rotation.value=M.rotation,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function b(T,M){T.specular.value.copy(M.specular),T.shininess.value=Math.max(M.shininess,1e-4)}function v(T,M){M.gradientMap&&(T.gradientMap.value=M.gradientMap)}function E(T,M){T.metalness.value=M.metalness,M.metalnessMap&&(T.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,T.metalnessMapTransform)),T.roughness.value=M.roughness,M.roughnessMap&&(T.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,T.roughnessMapTransform)),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)}function A(T,M,q){T.ior.value=M.ior,M.sheen>0&&(T.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),T.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(T.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,T.sheenColorMapTransform)),M.sheenRoughnessMap&&(T.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,T.sheenRoughnessMapTransform))),M.clearcoat>0&&(T.clearcoat.value=M.clearcoat,T.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(T.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,T.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(T.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Mi&&T.clearcoatNormalScale.value.negate())),M.dispersion>0&&(T.dispersion.value=M.dispersion),M.iridescence>0&&(T.iridescence.value=M.iridescence,T.iridescenceIOR.value=M.iridescenceIOR,T.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(T.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,T.iridescenceMapTransform)),M.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),M.transmission>0&&(T.transmission.value=M.transmission,T.transmissionSamplerMap.value=q.texture,T.transmissionSamplerSize.value.set(q.width,q.height),M.transmissionMap&&(T.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,T.transmissionMapTransform)),T.thickness.value=M.thickness,M.thicknessMap&&(T.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=M.attenuationDistance,T.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(T.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(T.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=M.specularIntensity,T.specularColor.value.copy(M.specularColor),M.specularColorMap&&(T.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,T.specularColorMapTransform)),M.specularIntensityMap&&(T.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,T.specularIntensityMapTransform))}function D(T,M){M.matcap&&(T.matcap.value=M.matcap)}function N(T,M){const q=e.get(M).light;T.referencePosition.value.setFromMatrixPosition(q.matrixWorld),T.nearDistance.value=q.shadow.camera.near,T.farDistance.value=q.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Z3(o,e,i,r){let l={},f={},p=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(q,H){const V=H.program;r.uniformBlockBinding(q,V)}function x(q,H){let V=l[q.id];V===void 0&&(D(q),V=b(q),l[q.id]=V,q.addEventListener("dispose",T));const K=H.program;r.updateUBOMapping(q,K);const I=e.render.frame;f[q.id]!==I&&(E(q),f[q.id]=I)}function b(q){const H=v();q.__bindingPointIndex=H;const V=o.createBuffer(),K=q.__size,I=q.usage;return o.bindBuffer(o.UNIFORM_BUFFER,V),o.bufferData(o.UNIFORM_BUFFER,K,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,H,V),V}function v(){for(let q=0;q<m;q++)if(p.indexOf(q)===-1)return p.push(q),q;return Cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(q){const H=l[q.id],V=q.uniforms,K=q.__cache;o.bindBuffer(o.UNIFORM_BUFFER,H);for(let I=0,X=V.length;I<X;I++){const fe=Array.isArray(V[I])?V[I]:[V[I]];for(let P=0,O=fe.length;P<O;P++){const J=fe[P];if(A(J,I,P,K)===!0){const re=J.__offset,oe=Array.isArray(J.value)?J.value:[J.value];let Se=0;for(let ye=0;ye<oe.length;ye++){const z=oe[ye],$=N(z);typeof z=="number"||typeof z=="boolean"?(J.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,re+Se,J.__data)):z.isMatrix3?(J.__data[0]=z.elements[0],J.__data[1]=z.elements[1],J.__data[2]=z.elements[2],J.__data[3]=0,J.__data[4]=z.elements[3],J.__data[5]=z.elements[4],J.__data[6]=z.elements[5],J.__data[7]=0,J.__data[8]=z.elements[6],J.__data[9]=z.elements[7],J.__data[10]=z.elements[8],J.__data[11]=0):(z.toArray(J.__data,Se),Se+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,re,J.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function A(q,H,V,K){const I=q.value,X=H+"_"+V;if(K[X]===void 0)return typeof I=="number"||typeof I=="boolean"?K[X]=I:K[X]=I.clone(),!0;{const fe=K[X];if(typeof I=="number"||typeof I=="boolean"){if(fe!==I)return K[X]=I,!0}else if(fe.equals(I)===!1)return fe.copy(I),!0}return!1}function D(q){const H=q.uniforms;let V=0;const K=16;for(let X=0,fe=H.length;X<fe;X++){const P=Array.isArray(H[X])?H[X]:[H[X]];for(let O=0,J=P.length;O<J;O++){const re=P[O],oe=Array.isArray(re.value)?re.value:[re.value];for(let Se=0,ye=oe.length;Se<ye;Se++){const z=oe[Se],$=N(z),ne=V%K,Re=ne%$.boundary,Ce=ne+Re;V+=Re,Ce!==0&&K-Ce<$.storage&&(V+=K-Ce),re.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=V,V+=$.storage}}}const I=V%K;return I>0&&(V+=K-I),q.__size=V,q.__cache={},this}function N(q){const H={boundary:0,storage:0};return typeof q=="number"||typeof q=="boolean"?(H.boundary=4,H.storage=4):q.isVector2?(H.boundary=8,H.storage=8):q.isVector3||q.isColor?(H.boundary=16,H.storage=12):q.isVector4?(H.boundary=16,H.storage=16):q.isMatrix3?(H.boundary=48,H.storage=48):q.isMatrix4?(H.boundary=64,H.storage=64):q.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ut("WebGLRenderer: Unsupported uniform value type.",q),H}function T(q){const H=q.target;H.removeEventListener("dispose",T);const V=p.indexOf(H.__bindingPointIndex);p.splice(V,1),o.deleteBuffer(l[H.id]),delete l[H.id],delete f[H.id]}function M(){for(const q in l)o.deleteBuffer(l[q]);p=[],l={},f={}}return{bind:_,update:x,dispose:M}}const K3=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ja=null;function Q3(){return ja===null&&(ja=new QS(K3,32,32,tm,zo),ja.minFilter=qi,ja.magFilter=qi,ja.wrapS=Ka,ja.wrapT=Ka,ja.generateMipmaps=!1,ja.needsUpdate=!0),ja}class J3{constructor(e={}){const{canvas:i=bS(),context:r=null,depth:l=!0,stencil:f=!1,alpha:p=!1,antialias:m=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:x=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:E=!1}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=p;const D=new Set([im,nm,em]),N=new Set([va,ys,ql,Yl,Jp,$p]),T=new Uint32Array(4),M=new Int32Array(4);let q=null,H=null;const V=[],K=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let X=!1;this._outputColorSpace=Xi;let fe=0,P=0,O=null,J=-1,re=null;const oe=new Dn,Se=new Dn;let ye=null;const z=new Qt(0);let $=0,ne=i.width,Re=i.height,Ce=1,G=null,pe=null;const De=new Dn(0,0,ne,Re),Fe=new Dn(0,0,ne,Re);let et=!1;const he=new sm;let ve=!1,ke=!1;const rt=new Mn,ft=new me,be=new Dn,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function ht(){return O===null?Ce:1}let W=r;function xt(L,ee){return i.getContext(L,ee)}try{const L={alpha:!0,depth:l,stencil:f,antialias:m,premultipliedAlpha:_,preserveDrawingBuffer:x,powerPreference:b,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kp}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Ae,!1),i.addEventListener("webglcontextcreationerror",nt,!1),W===null){const ee="webgl2";if(W=xt(ee,L),W===null)throw xt(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw L("WebGLRenderer: "+L.message),L}let Rt,Tt,We,Gt,ct,gt,B,R,se,Ee,Le,ae,Ze,qe,_t,Ie,Ne,Pe,ot,lt,Ye,Et,j,Xe;function He(){Rt=new s1(W),Rt.init(),Et=new G3(W,Rt),Tt=new QE(W,Rt,e,Et),We=new H3(W,Rt),Tt.reversedDepthBuffer&&E&&We.buffers.depth.setReversed(!0),Gt=new c1(W),ct=new w3,gt=new V3(W,Rt,We,ct,Tt,Et,Gt),B=new $E(I),R=new r1(I),se=new db(W),j=new ZE(W,se),Ee=new o1(W,se,Gt,j),Le=new f1(W,Ee,se,Gt),ot=new u1(W,Tt,gt),Ie=new JE(ct),ae=new A3(I,B,R,Rt,Tt,j,Ie),Ze=new j3(I,ct),qe=new C3,_t=new P3(Rt),Pe=new jE(I,B,R,We,Le,A,_),Ne=new B3(I,Le,Tt),Xe=new Z3(W,Gt,Tt,We),lt=new KE(W,Rt,Gt),Ye=new l1(W,Rt,Gt),Gt.programs=ae.programs,I.capabilities=Tt,I.extensions=Rt,I.properties=ct,I.renderLists=qe,I.shadowMap=Ne,I.state=We,I.info=Gt}He();const Ge=new q3(I,W);this.xr=Ge,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=Rt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Rt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(L){L!==void 0&&(Ce=L,this.setSize(ne,Re,!1))},this.getSize=function(L){return L.set(ne,Re)},this.setSize=function(L,ee,xe=!0){if(Ge.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=L,Re=ee,i.width=Math.floor(L*Ce),i.height=Math.floor(ee*Ce),xe===!0&&(i.style.width=L+"px",i.style.height=ee+"px"),this.setViewport(0,0,L,ee)},this.getDrawingBufferSize=function(L){return L.set(ne*Ce,Re*Ce).floor()},this.setDrawingBufferSize=function(L,ee,xe){ne=L,Re=ee,Ce=xe,i.width=Math.floor(L*xe),i.height=Math.floor(ee*xe),this.setViewport(0,0,L,ee)},this.getCurrentViewport=function(L){return L.copy(oe)},this.getViewport=function(L){return L.copy(De)},this.setViewport=function(L,ee,xe,le){L.isVector4?De.set(L.x,L.y,L.z,L.w):De.set(L,ee,xe,le),We.viewport(oe.copy(De).multiplyScalar(Ce).round())},this.getScissor=function(L){return L.copy(Fe)},this.setScissor=function(L,ee,xe,le){L.isVector4?Fe.set(L.x,L.y,L.z,L.w):Fe.set(L,ee,xe,le),We.scissor(Se.copy(Fe).multiplyScalar(Ce).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(L){We.setScissorTest(et=L)},this.setOpaqueSort=function(L){G=L},this.setTransparentSort=function(L){pe=L},this.getClearColor=function(L){return L.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(L=!0,ee=!0,xe=!0){let le=0;if(L){let ie=!1;if(O!==null){const Be=O.texture.format;ie=D.has(Be)}if(ie){const Be=O.texture.type,ze=N.has(Be),Qe=Pe.getClearColor(),Je=Pe.getClearAlpha(),vt=Qe.r,Mt=Qe.g,at=Qe.b;ze?(T[0]=vt,T[1]=Mt,T[2]=at,T[3]=Je,W.clearBufferuiv(W.COLOR,0,T)):(M[0]=vt,M[1]=Mt,M[2]=at,M[3]=Je,W.clearBufferiv(W.COLOR,0,M))}else le|=W.COLOR_BUFFER_BIT}ee&&(le|=W.DEPTH_BUFFER_BIT),xe&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Ae,!1),i.removeEventListener("webglcontextcreationerror",nt,!1),Pe.dispose(),qe.dispose(),_t.dispose(),ct.dispose(),B.dispose(),R.dispose(),Le.dispose(),j.dispose(),Xe.dispose(),ae.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Vr),Ge.removeEventListener("sessionend",Gr),ci.stop()};function Ue(L){L.preventDefault(),wg("WebGLRenderer: Context Lost."),X=!0}function Ae(){wg("WebGLRenderer: Context Restored."),X=!1;const L=Gt.autoReset,ee=Ne.enabled,xe=Ne.autoUpdate,le=Ne.needsUpdate,ie=Ne.type;He(),Gt.autoReset=L,Ne.enabled=ee,Ne.autoUpdate=xe,Ne.needsUpdate=le,Ne.type=ie}function nt(L){Cn("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ct(L){const ee=L.target;ee.removeEventListener("dispose",Ct),it(ee)}function it(L){$t(L),ct.remove(L)}function $t(L){const ee=ct.get(L).programs;ee!==void 0&&(ee.forEach(function(xe){ae.releaseProgram(xe)}),L.isShaderMaterial&&ae.releaseShaderCache(L))}this.renderBufferDirect=function(L,ee,xe,le,ie,Be){ee===null&&(ee=Ve);const ze=ie.isMesh&&ie.matrixWorld.determinant()<0,Qe=Vo(L,ee,xe,le,ie);We.setMaterial(le,ze);let Je=xe.index,vt=1;if(le.wireframe===!0){if(Je=Ee.getWireframeAttribute(xe),Je===void 0)return;vt=2}const Mt=xe.drawRange,at=xe.attributes.position;let Lt=Mt.start*vt,jt=(Mt.start+Mt.count)*vt;Be!==null&&(Lt=Math.max(Lt,Be.start*vt),jt=Math.min(jt,(Be.start+Be.count)*vt)),Je!==null?(Lt=Math.max(Lt,0),jt=Math.min(jt,Je.count)):at!=null&&(Lt=Math.max(Lt,0),jt=Math.min(jt,at.count));const en=jt-Lt;if(en<0||en===1/0)return;j.setup(ie,le,Qe,xe,Je);let Xt,It=lt;if(Je!==null&&(Xt=se.get(Je),It=Ye,It.setIndex(Xt)),ie.isMesh)le.wireframe===!0?(We.setLineWidth(le.wireframeLinewidth*ht()),It.setMode(W.LINES)):It.setMode(W.TRIANGLES);else if(ie.isLine){let dt=le.linewidth;dt===void 0&&(dt=1),We.setLineWidth(dt*ht()),ie.isLineSegments?It.setMode(W.LINES):ie.isLineLoop?It.setMode(W.LINE_LOOP):It.setMode(W.LINE_STRIP)}else ie.isPoints?It.setMode(W.POINTS):ie.isSprite&&It.setMode(W.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)Kl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))It.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const dt=ie._multiDrawStarts,sn=ie._multiDrawCounts,Vt=ie._multiDrawCount,cn=Je?se.get(Je).bytesPerElement:1,Oi=ct.get(le).currentProgram.getUniforms();for(let un=0;un<Vt;un++)Oi.setValue(W,"_gl_DrawID",un),It.render(dt[un]/cn,sn[un])}else if(ie.isInstancedMesh)It.renderInstances(Lt,en,ie.count);else if(xe.isInstancedBufferGeometry){const dt=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,sn=Math.min(xe.instanceCount,dt);It.renderInstances(Lt,en,sn)}else It.render(Lt,en)};function Yn(L,ee,xe){L.transparent===!0&&L.side===xa&&L.forceSinglePass===!1?(L.side=Mi,L.needsUpdate=!0,yn(L,ee,xe),L.side=Hr,L.needsUpdate=!0,yn(L,ee,xe),L.side=xa):yn(L,ee,xe)}this.compile=function(L,ee,xe=null){xe===null&&(xe=L),H=_t.get(xe),H.init(ee),K.push(H),xe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ee.layers)&&(H.pushLight(ie),ie.castShadow&&H.pushShadow(ie))}),L!==xe&&L.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ee.layers)&&(H.pushLight(ie),ie.castShadow&&H.pushShadow(ie))}),H.setupLights();const le=new Set;return L.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Be=ie.material;if(Be)if(Array.isArray(Be))for(let ze=0;ze<Be.length;ze++){const Qe=Be[ze];Yn(Qe,xe,ie),le.add(Qe)}else Yn(Be,xe,ie),le.add(Be)}),H=K.pop(),le},this.compileAsync=function(L,ee,xe=null){const le=this.compile(L,ee,xe);return new Promise(ie=>{function Be(){if(le.forEach(function(ze){ct.get(ze).currentProgram.isReady()&&le.delete(ze)}),le.size===0){ie(L);return}setTimeout(Be,10)}Rt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let li=null;function Es(L){li&&li(L)}function Vr(){ci.stop()}function Gr(){ci.start()}const ci=new ev;ci.setAnimationLoop(Es),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(L){li=L,Ge.setAnimationLoop(L),L===null?ci.stop():ci.start()},Ge.addEventListener("sessionstart",Vr),Ge.addEventListener("sessionend",Gr),this.render=function(L,ee){if(ee!==void 0&&ee.isCamera!==!0){Cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(ee),ee=Ge.getCamera()),L.isScene===!0&&L.onBeforeRender(I,L,ee,O),H=_t.get(L,K.length),H.init(ee),K.push(H),rt.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),he.setFromProjectionMatrix(rt,ga,ee.reversedDepth),ke=this.localClippingEnabled,ve=Ie.init(this.clippingPlanes,ke),q=qe.get(L,V.length),q.init(),V.push(q),Ge.enabled===!0&&Ge.isPresenting===!0){const Be=I.xr.getDepthSensingMesh();Be!==null&&w(Be,ee,-1/0,I.sortObjects)}w(L,ee,0,I.sortObjects),q.finish(),I.sortObjects===!0&&q.sort(G,pe),Ke=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Ke&&Pe.addToRenderList(q,L),this.info.render.frame++,ve===!0&&Ie.beginShadows();const xe=H.state.shadowsArray;Ne.render(xe,L,ee),ve===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=q.opaque,ie=q.transmissive;if(H.setupLights(),ee.isArrayCamera){const Be=ee.cameras;if(ie.length>0)for(let ze=0,Qe=Be.length;ze<Qe;ze++){const Je=Be[ze];kt(le,ie,L,Je)}Ke&&Pe.render(L);for(let ze=0,Qe=Be.length;ze<Qe;ze++){const Je=Be[ze];Sa(q,L,Je,Je.viewport)}}else ie.length>0&&kt(le,ie,L,ee),Ke&&Pe.render(L),Sa(q,L,ee);O!==null&&P===0&&(gt.updateMultisampleRenderTarget(O),gt.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(I,L,ee),j.resetDefaultState(),J=-1,re=null,K.pop(),K.length>0?(H=K[K.length-1],ve===!0&&Ie.setGlobalState(I.clippingPlanes,H.state.camera)):H=null,V.pop(),V.length>0?q=V[V.length-1]:q=null};function w(L,ee,xe,le){if(L.visible===!1)return;if(L.layers.test(ee.layers)){if(L.isGroup)xe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ee);else if(L.isLight)H.pushLight(L),L.castShadow&&H.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||he.intersectsSprite(L)){le&&be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(rt);const ze=Le.update(L),Qe=L.material;Qe.visible&&q.push(L,ze,Qe,xe,be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||he.intersectsObject(L))){const ze=Le.update(L),Qe=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),be.copy(L.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),be.copy(ze.boundingSphere.center)),be.applyMatrix4(L.matrixWorld).applyMatrix4(rt)),Array.isArray(Qe)){const Je=ze.groups;for(let vt=0,Mt=Je.length;vt<Mt;vt++){const at=Je[vt],Lt=Qe[at.materialIndex];Lt&&Lt.visible&&q.push(L,ze,Lt,xe,be.z,at)}}else Qe.visible&&q.push(L,ze,Qe,xe,be.z,null)}}const Be=L.children;for(let ze=0,Qe=Be.length;ze<Qe;ze++)w(Be[ze],ee,xe,le)}function Sa(L,ee,xe,le){const{opaque:ie,transmissive:Be,transparent:ze}=L;H.setupLightsView(xe),ve===!0&&Ie.setGlobalState(I.clippingPlanes,xe),le&&We.viewport(oe.copy(le)),ie.length>0&&ui(ie,ee,xe),Be.length>0&&ui(Be,ee,xe),ze.length>0&&ui(ze,ee,xe),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function kt(L,ee,xe,le){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;H.state.transmissionRenderTarget[le.id]===void 0&&(H.state.transmissionRenderTarget[le.id]=new bs(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?zo:va,minFilter:vs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:an.workingColorSpace}));const Be=H.state.transmissionRenderTarget[le.id],ze=le.viewport||oe;Be.setSize(ze.z*I.transmissionResolutionScale,ze.w*I.transmissionResolutionScale);const Qe=I.getRenderTarget(),Je=I.getActiveCubeFace(),vt=I.getActiveMipmapLevel();I.setRenderTarget(Be),I.getClearColor(z),$=I.getClearAlpha(),$<1&&I.setClearColor(16777215,.5),I.clear(),Ke&&Pe.render(xe);const Mt=I.toneMapping;I.toneMapping=Ir;const at=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),H.setupLightsView(le),ve===!0&&Ie.setGlobalState(I.clippingPlanes,le),ui(L,xe,le),gt.updateMultisampleRenderTarget(Be),gt.updateRenderTargetMipmap(Be),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let jt=0,en=ee.length;jt<en;jt++){const Xt=ee[jt],{object:It,geometry:dt,material:sn,group:Vt}=Xt;if(sn.side===xa&&It.layers.test(le.layers)){const cn=sn.side;sn.side=Mi,sn.needsUpdate=!0,En(It,xe,le,dt,sn,Vt),sn.side=cn,sn.needsUpdate=!0,Lt=!0}}Lt===!0&&(gt.updateMultisampleRenderTarget(Be),gt.updateRenderTargetMipmap(Be))}I.setRenderTarget(Qe,Je,vt),I.setClearColor(z,$),at!==void 0&&(le.viewport=at),I.toneMapping=Mt}function ui(L,ee,xe){const le=ee.isScene===!0?ee.overrideMaterial:null;for(let ie=0,Be=L.length;ie<Be;ie++){const ze=L[ie],{object:Qe,geometry:Je,group:vt}=ze;let Mt=ze.material;Mt.allowOverride===!0&&le!==null&&(Mt=le),Qe.layers.test(xe.layers)&&En(Qe,ee,xe,Je,Mt,vt)}}function En(L,ee,xe,le,ie,Be){L.onBeforeRender(I,ee,xe,le,ie,Be),L.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ie.onBeforeRender(I,ee,xe,le,L,Be),ie.transparent===!0&&ie.side===xa&&ie.forceSinglePass===!1?(ie.side=Mi,ie.needsUpdate=!0,I.renderBufferDirect(xe,ee,le,ie,L,Be),ie.side=Hr,ie.needsUpdate=!0,I.renderBufferDirect(xe,ee,le,ie,L,Be),ie.side=xa):I.renderBufferDirect(xe,ee,le,ie,L,Be),L.onAfterRender(I,ee,xe,le,ie,Be)}function yn(L,ee,xe){ee.isScene!==!0&&(ee=Ve);const le=ct.get(L),ie=H.state.lights,Be=H.state.shadowsArray,ze=ie.state.version,Qe=ae.getParameters(L,ie.state,Be,ee,xe),Je=ae.getProgramCacheKey(Qe);let vt=le.programs;le.environment=L.isMeshStandardMaterial?ee.environment:null,le.fog=ee.fog,le.envMap=(L.isMeshStandardMaterial?R:B).get(L.envMap||le.environment),le.envMapRotation=le.environment!==null&&L.envMap===null?ee.environmentRotation:L.envMapRotation,vt===void 0&&(L.addEventListener("dispose",Ct),vt=new Map,le.programs=vt);let Mt=vt.get(Je);if(Mt!==void 0){if(le.currentProgram===Mt&&le.lightsStateVersion===ze)return tr(L,Qe),Mt}else Qe.uniforms=ae.getUniforms(L),L.onBeforeCompile(Qe,I),Mt=ae.acquireProgram(Qe,Je),vt.set(Je,Mt),le.uniforms=Qe.uniforms;const at=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(at.clippingPlanes=Ie.uniform),tr(L,Qe),le.needsLights=Ts(L),le.lightsStateVersion=ze,le.needsLights&&(at.ambientLightColor.value=ie.state.ambient,at.lightProbe.value=ie.state.probe,at.directionalLights.value=ie.state.directional,at.directionalLightShadows.value=ie.state.directionalShadow,at.spotLights.value=ie.state.spot,at.spotLightShadows.value=ie.state.spotShadow,at.rectAreaLights.value=ie.state.rectArea,at.ltc_1.value=ie.state.rectAreaLTC1,at.ltc_2.value=ie.state.rectAreaLTC2,at.pointLights.value=ie.state.point,at.pointLightShadows.value=ie.state.pointShadow,at.hemisphereLights.value=ie.state.hemi,at.directionalShadowMap.value=ie.state.directionalShadowMap,at.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,at.spotShadowMap.value=ie.state.spotShadowMap,at.spotLightMatrix.value=ie.state.spotLightMatrix,at.spotLightMap.value=ie.state.spotLightMap,at.pointShadowMap.value=ie.state.pointShadowMap,at.pointShadowMatrix.value=ie.state.pointShadowMatrix),le.currentProgram=Mt,le.uniformsList=null,Mt}function ni(L){if(L.uniformsList===null){const ee=L.currentProgram.getUniforms();L.uniformsList=Xu.seqWithValue(ee.seq,L.uniforms)}return L.uniformsList}function tr(L,ee){const xe=ct.get(L);xe.outputColorSpace=ee.outputColorSpace,xe.batching=ee.batching,xe.batchingColor=ee.batchingColor,xe.instancing=ee.instancing,xe.instancingColor=ee.instancingColor,xe.instancingMorph=ee.instancingMorph,xe.skinning=ee.skinning,xe.morphTargets=ee.morphTargets,xe.morphNormals=ee.morphNormals,xe.morphColors=ee.morphColors,xe.morphTargetsCount=ee.morphTargetsCount,xe.numClippingPlanes=ee.numClippingPlanes,xe.numIntersection=ee.numClipIntersection,xe.vertexAlphas=ee.vertexAlphas,xe.vertexTangents=ee.vertexTangents,xe.toneMapping=ee.toneMapping}function Vo(L,ee,xe,le,ie){ee.isScene!==!0&&(ee=Ve),gt.resetTextureUnits();const Be=ee.fog,ze=le.isMeshStandardMaterial?ee.environment:null,Qe=O===null?I.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Po,Je=(le.isMeshStandardMaterial?R:B).get(le.envMap||ze),vt=le.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,Mt=!!xe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),at=!!xe.morphAttributes.position,Lt=!!xe.morphAttributes.normal,jt=!!xe.morphAttributes.color;let en=Ir;le.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(en=I.toneMapping);const Xt=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,It=Xt!==void 0?Xt.length:0,dt=ct.get(le),sn=H.state.lights;if(ve===!0&&(ke===!0||L!==re)){const Pn=L===re&&le.id===J;Ie.setState(le,L,Pn)}let Vt=!1;le.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==sn.state.version||dt.outputColorSpace!==Qe||ie.isBatchedMesh&&dt.batching===!1||!ie.isBatchedMesh&&dt.batching===!0||ie.isBatchedMesh&&dt.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&dt.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&dt.instancing===!1||!ie.isInstancedMesh&&dt.instancing===!0||ie.isSkinnedMesh&&dt.skinning===!1||!ie.isSkinnedMesh&&dt.skinning===!0||ie.isInstancedMesh&&dt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&dt.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&dt.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&dt.instancingMorph===!1&&ie.morphTexture!==null||dt.envMap!==Je||le.fog===!0&&dt.fog!==Be||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Ie.numPlanes||dt.numIntersection!==Ie.numIntersection)||dt.vertexAlphas!==vt||dt.vertexTangents!==Mt||dt.morphTargets!==at||dt.morphNormals!==Lt||dt.morphColors!==jt||dt.toneMapping!==en||dt.morphTargetsCount!==It)&&(Vt=!0):(Vt=!0,dt.__version=le.version);let cn=dt.currentProgram;Vt===!0&&(cn=yn(le,ee,ie));let Oi=!1,un=!1,Yi=!1;const Dt=cn.getUniforms(),Tn=dt.uniforms;if(We.useProgram(cn.program)&&(Oi=!0,un=!0,Yi=!0),le.id!==J&&(J=le.id,un=!0),Oi||re!==L){We.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Dt.setValue(W,"projectionMatrix",L.projectionMatrix),Dt.setValue(W,"viewMatrix",L.matrixWorldInverse);const Gn=Dt.map.cameraPosition;Gn!==void 0&&Gn.setValue(W,ft.setFromMatrixPosition(L.matrixWorld)),Tt.logarithmicDepthBuffer&&Dt.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Dt.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),re!==L&&(re=L,un=!0,Yi=!0)}if(ie.isSkinnedMesh){Dt.setOptional(W,ie,"bindMatrix"),Dt.setOptional(W,ie,"bindMatrixInverse");const Pn=ie.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Dt.setValue(W,"boneTexture",Pn.boneTexture,gt))}ie.isBatchedMesh&&(Dt.setOptional(W,ie,"batchingTexture"),Dt.setValue(W,"batchingTexture",ie._matricesTexture,gt),Dt.setOptional(W,ie,"batchingIdTexture"),Dt.setValue(W,"batchingIdTexture",ie._indirectTexture,gt),Dt.setOptional(W,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Dt.setValue(W,"batchingColorTexture",ie._colorsTexture,gt));const Un=xe.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ot.update(ie,xe,cn),(un||dt.receiveShadow!==ie.receiveShadow)&&(dt.receiveShadow=ie.receiveShadow,Dt.setValue(W,"receiveShadow",ie.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Tn.envMap.value=Je,Tn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&ee.environment!==null&&(Tn.envMapIntensity.value=ee.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=Q3()),un&&(Dt.setValue(W,"toneMappingExposure",I.toneMappingExposure),dt.needsLights&&Go(Tn,Yi),Be&&le.fog===!0&&Ze.refreshFogUniforms(Tn,Be),Ze.refreshMaterialUniforms(Tn,le,Ce,Re,H.state.transmissionRenderTarget[L.id]),Xu.upload(W,ni(dt),Tn,gt)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Xu.upload(W,ni(dt),Tn,gt),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Dt.setValue(W,"center",ie.center),Dt.setValue(W,"modelViewMatrix",ie.modelViewMatrix),Dt.setValue(W,"normalMatrix",ie.normalMatrix),Dt.setValue(W,"modelMatrix",ie.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Pn=le.uniformsGroups;for(let Gn=0,Pi=Pn.length;Gn<Pi;Gn++){const mi=Pn[Gn];Xe.update(mi,cn),Xe.bind(mi,cn)}}return cn}function Go(L,ee){L.ambientLightColor.needsUpdate=ee,L.lightProbe.needsUpdate=ee,L.directionalLights.needsUpdate=ee,L.directionalLightShadows.needsUpdate=ee,L.pointLights.needsUpdate=ee,L.pointLightShadows.needsUpdate=ee,L.spotLights.needsUpdate=ee,L.spotLightShadows.needsUpdate=ee,L.rectAreaLights.needsUpdate=ee,L.hemisphereLights.needsUpdate=ee}function Ts(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,ee,xe){const le=ct.get(L);le.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),ct.get(L.texture).__webglTexture=ee,ct.get(L.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:xe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,ee){const xe=ct.get(L);xe.__webglFramebuffer=ee,xe.__useDefaultFramebuffer=ee===void 0};const ba=W.createFramebuffer();this.setRenderTarget=function(L,ee=0,xe=0){O=L,fe=ee,P=xe;let le=!0,ie=null,Be=!1,ze=!1;if(L){const Je=ct.get(L);if(Je.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(W.FRAMEBUFFER,null),le=!1;else if(Je.__webglFramebuffer===void 0)gt.setupRenderTarget(L);else if(Je.__hasExternalTextures)gt.rebindTextures(L,ct.get(L.texture).__webglTexture,ct.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const at=L.depthTexture;if(Je.__boundDepthTexture!==at){if(at!==null&&ct.has(at)&&(L.width!==at.image.width||L.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(L)}}const vt=L.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ze=!0);const Mt=ct.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Mt[ee])?ie=Mt[ee][xe]:ie=Mt[ee],Be=!0):L.samples>0&&gt.useMultisampledRTT(L)===!1?ie=ct.get(L).__webglMultisampledFramebuffer:Array.isArray(Mt)?ie=Mt[xe]:ie=Mt,oe.copy(L.viewport),Se.copy(L.scissor),ye=L.scissorTest}else oe.copy(De).multiplyScalar(Ce).floor(),Se.copy(Fe).multiplyScalar(Ce).floor(),ye=et;if(xe!==0&&(ie=ba),We.bindFramebuffer(W.FRAMEBUFFER,ie)&&le&&We.drawBuffers(L,ie),We.viewport(oe),We.scissor(Se),We.setScissorTest(ye),Be){const Je=ct.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Je.__webglTexture,xe)}else if(ze){const Je=ee;for(let vt=0;vt<L.textures.length;vt++){const Mt=ct.get(L.textures[vt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+vt,Mt.__webglTexture,xe,Je)}}else if(L!==null&&xe!==0){const Je=ct.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Je.__webglTexture,xe)}J=-1},this.readRenderTargetPixels=function(L,ee,xe,le,ie,Be,ze,Qe=0){if(!(L&&L.isWebGLRenderTarget)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ct.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(Je=Je[ze]),Je){We.bindFramebuffer(W.FRAMEBUFFER,Je);try{const vt=L.textures[Qe],Mt=vt.format,at=vt.type;if(!Tt.textureFormatReadable(Mt)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(at)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=L.width-le&&xe>=0&&xe<=L.height-ie&&(L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Qe),W.readPixels(ee,xe,le,ie,Et.convert(Mt),Et.convert(at),Be))}finally{const vt=O!==null?ct.get(O).__webglFramebuffer:null;We.bindFramebuffer(W.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(L,ee,xe,le,ie,Be,ze,Qe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ct.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(Je=Je[ze]),Je)if(ee>=0&&ee<=L.width-le&&xe>=0&&xe<=L.height-ie){We.bindFramebuffer(W.FRAMEBUFFER,Je);const vt=L.textures[Qe],Mt=vt.format,at=vt.type;if(!Tt.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Lt),W.bufferData(W.PIXEL_PACK_BUFFER,Be.byteLength,W.STREAM_READ),L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Qe),W.readPixels(ee,xe,le,ie,Et.convert(Mt),Et.convert(at),0);const jt=O!==null?ct.get(O).__webglFramebuffer:null;We.bindFramebuffer(W.FRAMEBUFFER,jt);const en=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await MS(W,en,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Lt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Be),W.deleteBuffer(Lt),W.deleteSync(en),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,ee=null,xe=0){const le=Math.pow(2,-xe),ie=Math.floor(L.image.width*le),Be=Math.floor(L.image.height*le),ze=ee!==null?ee.x:0,Qe=ee!==null?ee.y:0;gt.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,xe,0,0,ze,Qe,ie,Be),We.unbindTexture()};const kr=W.createFramebuffer(),la=W.createFramebuffer();this.copyTextureToTexture=function(L,ee,xe=null,le=null,ie=0,Be=null){Be===null&&(ie!==0?(Kl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Be=ie,ie=0):Be=0);let ze,Qe,Je,vt,Mt,at,Lt,jt,en;const Xt=L.isCompressedTexture?L.mipmaps[Be]:L.image;if(xe!==null)ze=xe.max.x-xe.min.x,Qe=xe.max.y-xe.min.y,Je=xe.isBox3?xe.max.z-xe.min.z:1,vt=xe.min.x,Mt=xe.min.y,at=xe.isBox3?xe.min.z:0;else{const Un=Math.pow(2,-ie);ze=Math.floor(Xt.width*Un),Qe=Math.floor(Xt.height*Un),L.isDataArrayTexture?Je=Xt.depth:L.isData3DTexture?Je=Math.floor(Xt.depth*Un):Je=1,vt=0,Mt=0,at=0}le!==null?(Lt=le.x,jt=le.y,en=le.z):(Lt=0,jt=0,en=0);const It=Et.convert(ee.format),dt=Et.convert(ee.type);let sn;ee.isData3DTexture?(gt.setTexture3D(ee,0),sn=W.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(gt.setTexture2DArray(ee,0),sn=W.TEXTURE_2D_ARRAY):(gt.setTexture2D(ee,0),sn=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ee.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ee.unpackAlignment);const Vt=W.getParameter(W.UNPACK_ROW_LENGTH),cn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Oi=W.getParameter(W.UNPACK_SKIP_PIXELS),un=W.getParameter(W.UNPACK_SKIP_ROWS),Yi=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Xt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Xt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,vt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Mt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,at);const Dt=L.isDataArrayTexture||L.isData3DTexture,Tn=ee.isDataArrayTexture||ee.isData3DTexture;if(L.isDepthTexture){const Un=ct.get(L),Pn=ct.get(ee),Gn=ct.get(Un.__renderTarget),Pi=ct.get(Pn.__renderTarget);We.bindFramebuffer(W.READ_FRAMEBUFFER,Gn.__webglFramebuffer),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let mi=0;mi<Je;mi++)Dt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ct.get(L).__webglTexture,ie,at+mi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ct.get(ee).__webglTexture,Be,en+mi)),W.blitFramebuffer(vt,Mt,ze,Qe,Lt,jt,ze,Qe,W.DEPTH_BUFFER_BIT,W.NEAREST);We.bindFramebuffer(W.READ_FRAMEBUFFER,null),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ie!==0||L.isRenderTargetTexture||ct.has(L)){const Un=ct.get(L),Pn=ct.get(ee);We.bindFramebuffer(W.READ_FRAMEBUFFER,kr),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,la);for(let Gn=0;Gn<Je;Gn++)Dt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Un.__webglTexture,ie,at+Gn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Un.__webglTexture,ie),Tn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pn.__webglTexture,Be,en+Gn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pn.__webglTexture,Be),ie!==0?W.blitFramebuffer(vt,Mt,ze,Qe,Lt,jt,ze,Qe,W.COLOR_BUFFER_BIT,W.NEAREST):Tn?W.copyTexSubImage3D(sn,Be,Lt,jt,en+Gn,vt,Mt,ze,Qe):W.copyTexSubImage2D(sn,Be,Lt,jt,vt,Mt,ze,Qe);We.bindFramebuffer(W.READ_FRAMEBUFFER,null),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Tn?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(sn,Be,Lt,jt,en,ze,Qe,Je,It,dt,Xt.data):ee.isCompressedArrayTexture?W.compressedTexSubImage3D(sn,Be,Lt,jt,en,ze,Qe,Je,It,Xt.data):W.texSubImage3D(sn,Be,Lt,jt,en,ze,Qe,Je,It,dt,Xt):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Be,Lt,jt,ze,Qe,It,dt,Xt.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Be,Lt,jt,Xt.width,Xt.height,It,Xt.data):W.texSubImage2D(W.TEXTURE_2D,Be,Lt,jt,ze,Qe,It,dt,Xt);W.pixelStorei(W.UNPACK_ROW_LENGTH,Vt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,cn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Oi),W.pixelStorei(W.UNPACK_SKIP_ROWS,un),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Yi),Be===0&&ee.generateMipmaps&&W.generateMipmap(sn),We.unbindTexture()},this.initRenderTarget=function(L){ct.get(L).__webglFramebuffer===void 0&&gt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?gt.setTextureCube(L,0):L.isData3DTexture?gt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?gt.setTexture2DArray(L,0):gt.setTexture2D(L,0),We.unbindTexture()},this.resetState=function(){fe=0,P=0,O=null,We.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=an._getDrawingBufferColorSpace(e),i.unpackColorSpace=an._getUnpackColorSpace()}}const E_={type:"change"},om={type:"start"},rv={type:"end"},Bu=new Ju,T_=new Fr,$3=Math.cos(70*TS.DEG2RAD),Xn=new me,bi=2*Math.PI,mn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tp=1e-6;class eT extends fb{constructor(e,i=null){super(e,i),this.state=mn.NONE,this.target=new me,this.cursor=new me,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Co.ROTATE,MIDDLE:Co.DOLLY,RIGHT:Co.PAN},this.touches={ONE:Ro.ROTATE,TWO:Ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new me,this._lastQuaternion=new Ss,this._lastTargetPosition=new me,this._quat=new Ss().setFromUnitVectors(e.up,new me(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $g,this._sphericalDelta=new $g,this._scale=1,this._panOffset=new me,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new me,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nT.bind(this),this._onPointerDown=tT.bind(this),this._onPointerUp=iT.bind(this),this._onContextMenu=uT.bind(this),this._onMouseWheel=sT.bind(this),this._onKeyDown=oT.bind(this),this._onTouchStart=lT.bind(this),this._onTouchMove=cT.bind(this),this._onMouseDown=aT.bind(this),this._onMouseMove=rT.bind(this),this._interceptControlDown=fT.bind(this),this._interceptControlUp=hT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(E_),this.update(),this.state=mn.NONE}update(e=null){const i=this.object.position;Xn.copy(i).sub(this.target),Xn.applyQuaternion(this._quat),this._spherical.setFromVector3(Xn),this.autoRotate&&this.state===mn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=bi:r>Math.PI&&(r-=bi),l<-Math.PI?l+=bi:l>Math.PI&&(l-=bi),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const p=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=p!=this._spherical.radius}if(Xn.setFromSpherical(this._spherical),Xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let p=null;if(this.object.isPerspectiveCamera){const m=Xn.length();p=this._clampDistance(m*this._scale);const _=m-p;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),f=!!_}else if(this.object.isOrthographicCamera){const m=new me(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=_!==this.object.zoom;const x=new me(this._mouse.x,this._mouse.y,0);x.unproject(this.object),this.object.position.sub(x).add(m),this.object.updateMatrixWorld(),p=Xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;p!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(p).add(this.object.position):(Bu.origin.copy(this.object.position),Bu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bu.direction))<$3?this.object.lookAt(this.target):(T_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bu.intersectPlane(T_,this.target))))}else if(this.object.isOrthographicCamera){const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),p!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>tp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tp||this._lastTargetPosition.distanceToSquared(this.target)>tp?(this.dispatchEvent(E_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bi/60*this.autoRotateSpeed*e:bi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Xn.setFromMatrixColumn(i,0),Xn.multiplyScalar(-e),this._panOffset.add(Xn)}_panUp(e,i){this.screenSpacePanning===!0?Xn.setFromMatrixColumn(i,1):(Xn.setFromMatrixColumn(i,0),Xn.crossVectors(this.object.up,Xn)),Xn.multiplyScalar(e),this._panOffset.add(Xn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Xn.copy(l).sub(this.target);let f=Xn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,p=r.width,m=r.height;this._mouse.x=l/p*2-1,this._mouse.y=-(f/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/i.clientHeight),this._rotateUp(bi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/i.clientHeight),this._rotateUp(bi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const p=(e.pageX+i.x)*.5,m=(e.pageY+i.y)*.5;this._updateZoomParameters(p,m)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Ot,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function tT(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function nT(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function iT(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rv),this.state=mn.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function aT(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=mn.DOLLY;break;case Co.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=mn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=mn.ROTATE}break;case Co.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=mn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=mn.PAN}break;default:this.state=mn.NONE}this.state!==mn.NONE&&this.dispatchEvent(om)}function rT(o){switch(this.state){case mn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case mn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case mn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function sT(o){this.enabled===!1||this.enableZoom===!1||this.state!==mn.NONE||(o.preventDefault(),this.dispatchEvent(om),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(rv))}function oT(o){this.enabled!==!1&&this._handleKeyDown(o)}function lT(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=mn.TOUCH_ROTATE;break;case Ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=mn.TOUCH_PAN;break;default:this.state=mn.NONE}break;case 2:switch(this.touches.TWO){case Ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=mn.TOUCH_DOLLY_PAN;break;case Ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=mn.TOUCH_DOLLY_ROTATE;break;default:this.state=mn.NONE}break;default:this.state=mn.NONE}this.state!==mn.NONE&&this.dispatchEvent(om)}function cT(o){switch(this._trackPointer(o),this.state){case mn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case mn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case mn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case mn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=mn.NONE}}function uT(o){this.enabled!==!1&&o.preventDefault()}function fT(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hT(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var np={exports:{}};const dT={},pT=Object.freeze(Object.defineProperty({__proto__:null,default:dT},Symbol.toStringTag,{value:"Module"})),ip=Ey(pT);var A_;function mT(){return A_||(A_=1,(function(o,e){var i=(()=>{var r=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(r=r||__filename),(function(l={}){var f,p=l,m,_,x=new Promise((c,d)=>{m=c,_=d}),b=typeof window=="object",v=typeof importScripts=="function",E=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",A=Object.assign({},p),D="./this.program",N=(c,d)=>{throw d},T="";function M(c){return p.locateFile?p.locateFile(c,T):T+c}var q,H;if(E){var V=ip,K=ip;T=__dirname+"/",H=c=>{c=We(c)?new URL(c):K.normalize(c);var d=V.readFileSync(c);return d},q=(c,d=!0)=>(c=We(c)?new URL(c):K.normalize(c),new Promise((g,S)=>{V.readFile(c,d?void 0:"utf8",(C,F)=>{C?S(C):g(d?F.buffer:F)})})),!p.thisProgram&&process.argv.length>1&&(D=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),N=(c,d)=>{throw process.exitCode=c,d}}else(b||v)&&(v?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),r&&(T=r),T.startsWith("blob:")?T="":T=T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),v&&(H=c=>{var d=new XMLHttpRequest;return d.open("GET",c,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),q=c=>We(c)?new Promise((d,g)=>{var S=new XMLHttpRequest;S.open("GET",c,!0),S.responseType="arraybuffer",S.onload=()=>{if(S.status==200||S.status==0&&S.response){d(S.response);return}g(S.status)},S.onerror=g,S.send(null)}):fetch(c,{credentials:"same-origin"}).then(d=>d.ok?d.arrayBuffer():Promise.reject(new Error(d.status+" : "+d.url))));var I=p.print||console.log.bind(console),X=p.printErr||console.error.bind(console);Object.assign(p,A),A=null,p.arguments&&p.arguments,p.thisProgram&&(D=p.thisProgram);var fe=p.wasmBinary,P,O=!1;function J(c,d){c||xt(d)}var re,oe,Se,ye,z,$,ne,Re;function Ce(){var c=P.buffer;p.HEAP8=re=new Int8Array(c),p.HEAP16=Se=new Int16Array(c),p.HEAPU8=oe=new Uint8Array(c),p.HEAPU16=ye=new Uint16Array(c),p.HEAP32=z=new Int32Array(c),p.HEAPU32=$=new Uint32Array(c),p.HEAPF32=ne=new Float32Array(c),p.HEAPF64=Re=new Float64Array(c)}var G=[],pe=[],De=[],Fe=!1;function et(){var c=p.preRun;c&&(typeof c=="function"&&(c=[c]),c.forEach(ke)),_t(G)}function he(){Fe=!0,!p.noFSInit&&!w.initialized&&w.init(),w.ignorePermissions=!1,_t(pe)}function ve(){var c=p.postRun;c&&(typeof c=="function"&&(c=[c]),c.forEach(ft)),_t(De)}function ke(c){G.unshift(c)}function rt(c){pe.unshift(c)}function ft(c){De.unshift(c)}var be=0,Ve=null;function Ke(c){return c}function ht(c){be++,p.monitorRunDependencies?.(be)}function W(c){if(be--,p.monitorRunDependencies?.(be),be==0&&Ve){var d=Ve;Ve=null,d()}}function xt(c){p.onAbort?.(c),c="Aborted("+c+")",X(c),O=!0,c+=". Build with -sASSERTIONS for more info.",Fe&&sr();var d=new WebAssembly.RuntimeError(c);throw _(d),d}var Rt="data:application/octet-stream;base64,",Tt=c=>c.startsWith(Rt),We=c=>c.startsWith("file://");function Gt(){var c="occt-import-js.wasm";return Tt(c)?c:M(c)}var ct;function gt(c){if(c==ct&&fe)return new Uint8Array(fe);if(H)return H(c);throw"both async and sync fetching of the wasm failed"}function B(c){return fe?Promise.resolve().then(()=>gt(c)):q(c).then(d=>new Uint8Array(d),()=>gt(c))}function R(c,d,g){return B(c).then(S=>WebAssembly.instantiate(S,d)).then(g,S=>{X(`failed to asynchronously prepare wasm: ${S}`),xt(S)})}function se(c,d,g,S){return!c&&typeof WebAssembly.instantiateStreaming=="function"&&!Tt(d)&&!We(d)&&!E&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(C=>{var F=WebAssembly.instantiateStreaming(C,g);return F.then(S,function(k){return X(`wasm streaming compile failed: ${k}`),X("falling back to ArrayBuffer instantiation"),R(d,g,S)})}):R(d,g,S)}function Ee(){return{a:gc}}function Le(){var c=Ee();function d(S,C){return Fn=S.exports,P=Fn._,Ce(),Yo=Fn.ba,rt(Fn.$),W(),Fn}ht();function g(S){d(S.instance)}if(p.instantiateWasm)try{return p.instantiateWasm(c,d)}catch(S){X(`Module.instantiateWasm callback failed with error: ${S}`),_(S)}return ct??=Gt(),se(fe,ct,c,g).catch(_),{}}var ae,Ze;function qe(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var _t=c=>{c.forEach(d=>d(p))};p.noExitRuntime;var Ie={isAbs:c=>c.charAt(0)==="/",splitPath:c=>{var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return d.exec(c).slice(1)},normalizeArray:(c,d)=>{for(var g=0,S=c.length-1;S>=0;S--){var C=c[S];C==="."?c.splice(S,1):C===".."?(c.splice(S,1),g++):g&&(c.splice(S,1),g--)}if(d)for(;g;g--)c.unshift("..");return c},normalize:c=>{var d=Ie.isAbs(c),g=c.substr(-1)==="/";return c=Ie.normalizeArray(c.split("/").filter(S=>!!S),!d).join("/"),!c&&!d&&(c="."),c&&g&&(c+="/"),(d?"/":"")+c},dirname:c=>{var d=Ie.splitPath(c),g=d[0],S=d[1];return!g&&!S?".":(S&&(S=S.substr(0,S.length-1)),g+S)},basename:c=>{if(c==="/")return"/";c=Ie.normalize(c),c=c.replace(/\/$/,"");var d=c.lastIndexOf("/");return d===-1?c:c.substr(d+1)},join:(...c)=>Ie.normalize(c.join("/")),join2:(c,d)=>Ie.normalize(c+"/"+d)},Ne=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return S=>crypto.getRandomValues(S);if(E)try{var c=ip,d=c.randomFillSync;if(d)return S=>c.randomFillSync(S);var g=c.randomBytes;return S=>(S.set(g(S.byteLength)),S)}catch{}xt("initRandomDevice")},Pe=c=>(Pe=Ne())(c),ot={resolve:(...c)=>{for(var d="",g=!1,S=c.length-1;S>=-1&&!g;S--){var C=S>=0?c[S]:w.cwd();if(typeof C!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!C)return"";d=C+"/"+d,g=Ie.isAbs(C)}return d=Ie.normalizeArray(d.split("/").filter(F=>!!F),!g).join("/"),(g?"/":"")+d||"."},relative:(c,d)=>{c=ot.resolve(c).substr(1),d=ot.resolve(d).substr(1);function g(Oe){for(var je=0;je<Oe.length&&Oe[je]==="";je++);for(var st=Oe.length-1;st>=0&&Oe[st]==="";st--);return je>st?[]:Oe.slice(je,st-je+1)}for(var S=g(c.split("/")),C=g(d.split("/")),F=Math.min(S.length,C.length),k=F,Z=0;Z<F;Z++)if(S[Z]!==C[Z]){k=Z;break}for(var ge=[],Z=k;Z<S.length;Z++)ge.push("..");return ge=ge.concat(C.slice(k)),ge.join("/")}},lt=typeof TextDecoder<"u"?new TextDecoder:void 0,Ye=(c,d=0,g=NaN)=>{for(var S=d+g,C=d;c[C]&&!(C>=S);)++C;if(C-d>16&&c.buffer&&lt)return lt.decode(c.subarray(d,C));for(var F="";d<C;){var k=c[d++];if(!(k&128)){F+=String.fromCharCode(k);continue}var Z=c[d++]&63;if((k&224)==192){F+=String.fromCharCode((k&31)<<6|Z);continue}var ge=c[d++]&63;if((k&240)==224?k=(k&15)<<12|Z<<6|ge:k=(k&7)<<18|Z<<12|ge<<6|c[d++]&63,k<65536)F+=String.fromCharCode(k);else{var Oe=k-65536;F+=String.fromCharCode(55296|Oe>>10,56320|Oe&1023)}}return F},Et=[],j=c=>{for(var d=0,g=0;g<c.length;++g){var S=c.charCodeAt(g);S<=127?d++:S<=2047?d+=2:S>=55296&&S<=57343?(d+=4,++g):d+=3}return d},Xe=(c,d,g,S)=>{if(!(S>0))return 0;for(var C=g,F=g+S-1,k=0;k<c.length;++k){var Z=c.charCodeAt(k);if(Z>=55296&&Z<=57343){var ge=c.charCodeAt(++k);Z=65536+((Z&1023)<<10)|ge&1023}if(Z<=127){if(g>=F)break;d[g++]=Z}else if(Z<=2047){if(g+1>=F)break;d[g++]=192|Z>>6,d[g++]=128|Z&63}else if(Z<=65535){if(g+2>=F)break;d[g++]=224|Z>>12,d[g++]=128|Z>>6&63,d[g++]=128|Z&63}else{if(g+3>=F)break;d[g++]=240|Z>>18,d[g++]=128|Z>>12&63,d[g++]=128|Z>>6&63,d[g++]=128|Z&63}}return d[g]=0,g-C};function He(c,d,g){var S=j(c)+1,C=new Array(S),F=Xe(c,C,0,C.length);return C.length=F,C}var Ge=()=>{if(!Et.length){var c=null;if(E){var d=256,g=Buffer.alloc(d),S=0,C=process.stdin.fd;try{S=V.readSync(C,g,0,d)}catch(F){if(F.toString().includes("EOF"))S=0;else throw F}S>0&&(c=g.slice(0,S).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(c=window.prompt("Input: "),c!==null&&(c+=`
`));if(!c)return null;Et=He(c)}return Et.shift()},Ue={ttys:[],init(){},shutdown(){},register(c,d){Ue.ttys[c]={input:[],output:[],ops:d},w.registerDevice(c,Ue.stream_ops)},stream_ops:{open(c){var d=Ue.ttys[c.node.rdev];if(!d)throw new w.ErrnoError(43);c.tty=d,c.seekable=!1},close(c){c.tty.ops.fsync(c.tty)},fsync(c){c.tty.ops.fsync(c.tty)},read(c,d,g,S,C){if(!c.tty||!c.tty.ops.get_char)throw new w.ErrnoError(60);for(var F=0,k=0;k<S;k++){var Z;try{Z=c.tty.ops.get_char(c.tty)}catch{throw new w.ErrnoError(29)}if(Z===void 0&&F===0)throw new w.ErrnoError(6);if(Z==null)break;F++,d[g+k]=Z}return F&&(c.node.timestamp=Date.now()),F},write(c,d,g,S,C){if(!c.tty||!c.tty.ops.put_char)throw new w.ErrnoError(60);try{for(var F=0;F<S;F++)c.tty.ops.put_char(c.tty,d[g+F])}catch{throw new w.ErrnoError(29)}return S&&(c.node.timestamp=Date.now()),F}},default_tty_ops:{get_char(c){return Ge()},put_char(c,d){d===null||d===10?(I(Ye(c.output)),c.output=[]):d!=0&&c.output.push(d)},fsync(c){c.output&&c.output.length>0&&(I(Ye(c.output)),c.output=[])},ioctl_tcgets(c){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(c,d,g){return 0},ioctl_tiocgwinsz(c){return[24,80]}},default_tty1_ops:{put_char(c,d){d===null||d===10?(X(Ye(c.output)),c.output=[]):d!=0&&c.output.push(d)},fsync(c){c.output&&c.output.length>0&&(X(Ye(c.output)),c.output=[])}}},Ae=(c,d)=>{oe.fill(0,c,c+d)},nt=(c,d)=>Math.ceil(c/d)*d,Ct=c=>{c=nt(c,65536);var d=Hs(65536,c);return d&&Ae(d,c),d},it={ops_table:null,mount(c){return it.createNode(null,"/",16895,0)},createNode(c,d,g,S){if(w.isBlkdev(g)||w.isFIFO(g))throw new w.ErrnoError(63);it.ops_table||={dir:{node:{getattr:it.node_ops.getattr,setattr:it.node_ops.setattr,lookup:it.node_ops.lookup,mknod:it.node_ops.mknod,rename:it.node_ops.rename,unlink:it.node_ops.unlink,rmdir:it.node_ops.rmdir,readdir:it.node_ops.readdir,symlink:it.node_ops.symlink},stream:{llseek:it.stream_ops.llseek}},file:{node:{getattr:it.node_ops.getattr,setattr:it.node_ops.setattr},stream:{llseek:it.stream_ops.llseek,read:it.stream_ops.read,write:it.stream_ops.write,allocate:it.stream_ops.allocate,mmap:it.stream_ops.mmap,msync:it.stream_ops.msync}},link:{node:{getattr:it.node_ops.getattr,setattr:it.node_ops.setattr,readlink:it.node_ops.readlink},stream:{}},chrdev:{node:{getattr:it.node_ops.getattr,setattr:it.node_ops.setattr},stream:w.chrdev_stream_ops}};var C=w.createNode(c,d,g,S);return w.isDir(C.mode)?(C.node_ops=it.ops_table.dir.node,C.stream_ops=it.ops_table.dir.stream,C.contents={}):w.isFile(C.mode)?(C.node_ops=it.ops_table.file.node,C.stream_ops=it.ops_table.file.stream,C.usedBytes=0,C.contents=null):w.isLink(C.mode)?(C.node_ops=it.ops_table.link.node,C.stream_ops=it.ops_table.link.stream):w.isChrdev(C.mode)&&(C.node_ops=it.ops_table.chrdev.node,C.stream_ops=it.ops_table.chrdev.stream),C.timestamp=Date.now(),c&&(c.contents[d]=C,c.timestamp=C.timestamp),C},getFileDataAsTypedArray(c){return c.contents?c.contents.subarray?c.contents.subarray(0,c.usedBytes):new Uint8Array(c.contents):new Uint8Array(0)},expandFileStorage(c,d){var g=c.contents?c.contents.length:0;if(!(g>=d)){var S=1024*1024;d=Math.max(d,g*(g<S?2:1.125)>>>0),g!=0&&(d=Math.max(d,256));var C=c.contents;c.contents=new Uint8Array(d),c.usedBytes>0&&c.contents.set(C.subarray(0,c.usedBytes),0)}},resizeFileStorage(c,d){if(c.usedBytes!=d)if(d==0)c.contents=null,c.usedBytes=0;else{var g=c.contents;c.contents=new Uint8Array(d),g&&c.contents.set(g.subarray(0,Math.min(d,c.usedBytes))),c.usedBytes=d}},node_ops:{getattr(c){var d={};return d.dev=w.isChrdev(c.mode)?c.id:1,d.ino=c.id,d.mode=c.mode,d.nlink=1,d.uid=0,d.gid=0,d.rdev=c.rdev,w.isDir(c.mode)?d.size=4096:w.isFile(c.mode)?d.size=c.usedBytes:w.isLink(c.mode)?d.size=c.link.length:d.size=0,d.atime=new Date(c.timestamp),d.mtime=new Date(c.timestamp),d.ctime=new Date(c.timestamp),d.blksize=4096,d.blocks=Math.ceil(d.size/d.blksize),d},setattr(c,d){d.mode!==void 0&&(c.mode=d.mode),d.timestamp!==void 0&&(c.timestamp=d.timestamp),d.size!==void 0&&it.resizeFileStorage(c,d.size)},lookup(c,d){throw w.genericErrors[44]},mknod(c,d,g,S){return it.createNode(c,d,g,S)},rename(c,d,g){if(w.isDir(c.mode)){var S;try{S=w.lookupNode(d,g)}catch{}if(S)for(var C in S.contents)throw new w.ErrnoError(55)}delete c.parent.contents[c.name],c.parent.timestamp=Date.now(),c.name=g,d.contents[g]=c,d.timestamp=c.parent.timestamp},unlink(c,d){delete c.contents[d],c.timestamp=Date.now()},rmdir(c,d){var g=w.lookupNode(c,d);for(var S in g.contents)throw new w.ErrnoError(55);delete c.contents[d],c.timestamp=Date.now()},readdir(c){var d=[".",".."];for(var g of Object.keys(c.contents))d.push(g);return d},symlink(c,d,g){var S=it.createNode(c,d,41471,0);return S.link=g,S},readlink(c){if(!w.isLink(c.mode))throw new w.ErrnoError(28);return c.link}},stream_ops:{read(c,d,g,S,C){var F=c.node.contents;if(C>=c.node.usedBytes)return 0;var k=Math.min(c.node.usedBytes-C,S);if(k>8&&F.subarray)d.set(F.subarray(C,C+k),g);else for(var Z=0;Z<k;Z++)d[g+Z]=F[C+Z];return k},write(c,d,g,S,C,F){if(d.buffer===re.buffer&&(F=!1),!S)return 0;var k=c.node;if(k.timestamp=Date.now(),d.subarray&&(!k.contents||k.contents.subarray)){if(F)return k.contents=d.subarray(g,g+S),k.usedBytes=S,S;if(k.usedBytes===0&&C===0)return k.contents=d.slice(g,g+S),k.usedBytes=S,S;if(C+S<=k.usedBytes)return k.contents.set(d.subarray(g,g+S),C),S}if(it.expandFileStorage(k,C+S),k.contents.subarray&&d.subarray)k.contents.set(d.subarray(g,g+S),C);else for(var Z=0;Z<S;Z++)k.contents[C+Z]=d[g+Z];return k.usedBytes=Math.max(k.usedBytes,C+S),S},llseek(c,d,g){var S=d;if(g===1?S+=c.position:g===2&&w.isFile(c.node.mode)&&(S+=c.node.usedBytes),S<0)throw new w.ErrnoError(28);return S},allocate(c,d,g){it.expandFileStorage(c.node,d+g),c.node.usedBytes=Math.max(c.node.usedBytes,d+g)},mmap(c,d,g,S,C){if(!w.isFile(c.node.mode))throw new w.ErrnoError(43);var F,k,Z=c.node.contents;if(!(C&2)&&Z&&Z.buffer===re.buffer)k=!1,F=Z.byteOffset;else{if(k=!0,F=Ct(d),!F)throw new w.ErrnoError(48);Z&&((g>0||g+d<Z.length)&&(Z.subarray?Z=Z.subarray(g,g+d):Z=Array.prototype.slice.call(Z,g,g+d)),re.set(Z,F))}return{ptr:F,allocated:k}},msync(c,d,g,S,C){return it.stream_ops.write(c,d,0,S,g,!1),0}}},$t=(c,d,g,S)=>{var C=`al ${c}`;q(c).then(F=>{d(new Uint8Array(F)),C&&W()},F=>{if(g)g();else throw`Loading data file "${c}" failed.`}),C&&ht()},Yn=(c,d,g,S,C,F)=>{w.createDataFile(c,d,g,S,C,F)},li=p.preloadPlugins||[],Es=(c,d,g,S)=>{typeof Browser<"u"&&Browser.init();var C=!1;return li.forEach(F=>{C||F.canHandle(d)&&(F.handle(c,d,g,S),C=!0)}),C},Vr=(c,d,g,S,C,F,k,Z,ge,Oe)=>{var je=d?ot.resolve(Ie.join2(c,d)):c;function st(pt){function tt(At){Oe?.(),Z||Yn(c,d,At,S,C,ge),F?.(),W()}Es(pt,je,tt,()=>{k?.(),W()})||tt(pt)}ht(),typeof g=="string"?$t(g,st,k):st(g)},Gr=c=>{var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},g=d[c];if(typeof g>"u")throw new Error(`Unknown file open mode: ${c}`);return g},ci=(c,d)=>{var g=0;return c&&(g|=365),d&&(g|=146),g},w={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(c){this.name="ErrnoError",this.errno=c}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(c){this.node=c}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(c){this.shared.flags=c}get position(){return this.shared.position}set position(c){this.shared.position=c}},FSNode:class{constructor(c,d,g,S){c||(c=this),this.parent=c,this.mount=c.mount,this.mounted=null,this.id=w.nextInode++,this.name=d,this.mode=g,this.node_ops={},this.stream_ops={},this.rdev=S,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(c){c?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(c){c?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return w.isDir(this.mode)}get isDevice(){return w.isChrdev(this.mode)}},lookupPath(c,d={}){if(c=ot.resolve(c),!c)return{path:"",node:null};var g={follow_mount:!0,recurse_count:0};if(d=Object.assign(g,d),d.recurse_count>8)throw new w.ErrnoError(32);for(var S=c.split("/").filter(st=>!!st),C=w.root,F="/",k=0;k<S.length;k++){var Z=k===S.length-1;if(Z&&d.parent)break;if(C=w.lookupNode(C,S[k]),F=Ie.join2(F,S[k]),w.isMountpoint(C)&&(!Z||Z&&d.follow_mount)&&(C=C.mounted.root),!Z||d.follow)for(var ge=0;w.isLink(C.mode);){var Oe=w.readlink(F);F=ot.resolve(Ie.dirname(F),Oe);var je=w.lookupPath(F,{recurse_count:d.recurse_count+1});if(C=je.node,ge++>40)throw new w.ErrnoError(32)}}return{path:F,node:C}},getPath(c){for(var d;;){if(w.isRoot(c)){var g=c.mount.mountpoint;return d?g[g.length-1]!=="/"?`${g}/${d}`:g+d:g}d=d?`${c.name}/${d}`:c.name,c=c.parent}},hashName(c,d){for(var g=0,S=0;S<d.length;S++)g=(g<<5)-g+d.charCodeAt(S)|0;return(c+g>>>0)%w.nameTable.length},hashAddNode(c){var d=w.hashName(c.parent.id,c.name);c.name_next=w.nameTable[d],w.nameTable[d]=c},hashRemoveNode(c){var d=w.hashName(c.parent.id,c.name);if(w.nameTable[d]===c)w.nameTable[d]=c.name_next;else for(var g=w.nameTable[d];g;){if(g.name_next===c){g.name_next=c.name_next;break}g=g.name_next}},lookupNode(c,d){var g=w.mayLookup(c);if(g)throw new w.ErrnoError(g);for(var S=w.hashName(c.id,d),C=w.nameTable[S];C;C=C.name_next){var F=C.name;if(C.parent.id===c.id&&F===d)return C}return w.lookup(c,d)},createNode(c,d,g,S){var C=new w.FSNode(c,d,g,S);return w.hashAddNode(C),C},destroyNode(c){w.hashRemoveNode(c)},isRoot(c){return c===c.parent},isMountpoint(c){return!!c.mounted},isFile(c){return(c&61440)===32768},isDir(c){return(c&61440)===16384},isLink(c){return(c&61440)===40960},isChrdev(c){return(c&61440)===8192},isBlkdev(c){return(c&61440)===24576},isFIFO(c){return(c&61440)===4096},isSocket(c){return(c&49152)===49152},flagsToPermissionString(c){var d=["r","w","rw"][c&3];return c&512&&(d+="w"),d},nodePermissions(c,d){return w.ignorePermissions?0:d.includes("r")&&!(c.mode&292)||d.includes("w")&&!(c.mode&146)||d.includes("x")&&!(c.mode&73)?2:0},mayLookup(c){if(!w.isDir(c.mode))return 54;var d=w.nodePermissions(c,"x");return d||(c.node_ops.lookup?0:2)},mayCreate(c,d){try{var g=w.lookupNode(c,d);return 20}catch{}return w.nodePermissions(c,"wx")},mayDelete(c,d,g){var S;try{S=w.lookupNode(c,d)}catch(F){return F.errno}var C=w.nodePermissions(c,"wx");if(C)return C;if(g){if(!w.isDir(S.mode))return 54;if(w.isRoot(S)||w.getPath(S)===w.cwd())return 10}else if(w.isDir(S.mode))return 31;return 0},mayOpen(c,d){return c?w.isLink(c.mode)?32:w.isDir(c.mode)&&(w.flagsToPermissionString(d)!=="r"||d&512)?31:w.nodePermissions(c,w.flagsToPermissionString(d)):44},MAX_OPEN_FDS:4096,nextfd(){for(var c=0;c<=w.MAX_OPEN_FDS;c++)if(!w.streams[c])return c;throw new w.ErrnoError(33)},getStreamChecked(c){var d=w.getStream(c);if(!d)throw new w.ErrnoError(8);return d},getStream:c=>w.streams[c],createStream(c,d=-1){return c=Object.assign(new w.FSStream,c),d==-1&&(d=w.nextfd()),c.fd=d,w.streams[d]=c,c},closeStream(c){w.streams[c]=null},dupStream(c,d=-1){var g=w.createStream(c,d);return g.stream_ops?.dup?.(g),g},chrdev_stream_ops:{open(c){var d=w.getDevice(c.node.rdev);c.stream_ops=d.stream_ops,c.stream_ops.open?.(c)},llseek(){throw new w.ErrnoError(70)}},major:c=>c>>8,minor:c=>c&255,makedev:(c,d)=>c<<8|d,registerDevice(c,d){w.devices[c]={stream_ops:d}},getDevice:c=>w.devices[c],getMounts(c){for(var d=[],g=[c];g.length;){var S=g.pop();d.push(S),g.push(...S.mounts)}return d},syncfs(c,d){typeof c=="function"&&(d=c,c=!1),w.syncFSRequests++,w.syncFSRequests>1&&X(`warning: ${w.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var g=w.getMounts(w.root.mount),S=0;function C(k){return w.syncFSRequests--,d(k)}function F(k){if(k)return F.errored?void 0:(F.errored=!0,C(k));++S>=g.length&&C(null)}g.forEach(k=>{if(!k.type.syncfs)return F(null);k.type.syncfs(k,c,F)})},mount(c,d,g){var S=g==="/",C=!g,F;if(S&&w.root)throw new w.ErrnoError(10);if(!S&&!C){var k=w.lookupPath(g,{follow_mount:!1});if(g=k.path,F=k.node,w.isMountpoint(F))throw new w.ErrnoError(10);if(!w.isDir(F.mode))throw new w.ErrnoError(54)}var Z={type:c,opts:d,mountpoint:g,mounts:[]},ge=c.mount(Z);return ge.mount=Z,Z.root=ge,S?w.root=ge:F&&(F.mounted=Z,F.mount&&F.mount.mounts.push(Z)),ge},unmount(c){var d=w.lookupPath(c,{follow_mount:!1});if(!w.isMountpoint(d.node))throw new w.ErrnoError(28);var g=d.node,S=g.mounted,C=w.getMounts(S);Object.keys(w.nameTable).forEach(k=>{for(var Z=w.nameTable[k];Z;){var ge=Z.name_next;C.includes(Z.mount)&&w.destroyNode(Z),Z=ge}}),g.mounted=null;var F=g.mount.mounts.indexOf(S);g.mount.mounts.splice(F,1)},lookup(c,d){return c.node_ops.lookup(c,d)},mknod(c,d,g){var S=w.lookupPath(c,{parent:!0}),C=S.node,F=Ie.basename(c);if(!F||F==="."||F==="..")throw new w.ErrnoError(28);var k=w.mayCreate(C,F);if(k)throw new w.ErrnoError(k);if(!C.node_ops.mknod)throw new w.ErrnoError(63);return C.node_ops.mknod(C,F,d,g)},create(c,d){return d=d!==void 0?d:438,d&=4095,d|=32768,w.mknod(c,d,0)},mkdir(c,d){return d=d!==void 0?d:511,d&=1023,d|=16384,w.mknod(c,d,0)},mkdirTree(c,d){for(var g=c.split("/"),S="",C=0;C<g.length;++C)if(g[C]){S+="/"+g[C];try{w.mkdir(S,d)}catch(F){if(F.errno!=20)throw F}}},mkdev(c,d,g){return typeof g>"u"&&(g=d,d=438),d|=8192,w.mknod(c,d,g)},symlink(c,d){if(!ot.resolve(c))throw new w.ErrnoError(44);var g=w.lookupPath(d,{parent:!0}),S=g.node;if(!S)throw new w.ErrnoError(44);var C=Ie.basename(d),F=w.mayCreate(S,C);if(F)throw new w.ErrnoError(F);if(!S.node_ops.symlink)throw new w.ErrnoError(63);return S.node_ops.symlink(S,C,c)},rename(c,d){var g=Ie.dirname(c),S=Ie.dirname(d),C=Ie.basename(c),F=Ie.basename(d),k,Z,ge;if(k=w.lookupPath(c,{parent:!0}),Z=k.node,k=w.lookupPath(d,{parent:!0}),ge=k.node,!Z||!ge)throw new w.ErrnoError(44);if(Z.mount!==ge.mount)throw new w.ErrnoError(75);var Oe=w.lookupNode(Z,C),je=ot.relative(c,S);if(je.charAt(0)!==".")throw new w.ErrnoError(28);if(je=ot.relative(d,g),je.charAt(0)!==".")throw new w.ErrnoError(55);var st;try{st=w.lookupNode(ge,F)}catch{}if(Oe!==st){var pt=w.isDir(Oe.mode),tt=w.mayDelete(Z,C,pt);if(tt)throw new w.ErrnoError(tt);if(tt=st?w.mayDelete(ge,F,pt):w.mayCreate(ge,F),tt)throw new w.ErrnoError(tt);if(!Z.node_ops.rename)throw new w.ErrnoError(63);if(w.isMountpoint(Oe)||st&&w.isMountpoint(st))throw new w.ErrnoError(10);if(ge!==Z&&(tt=w.nodePermissions(Z,"w"),tt))throw new w.ErrnoError(tt);w.hashRemoveNode(Oe);try{Z.node_ops.rename(Oe,ge,F),Oe.parent=ge}catch(At){throw At}finally{w.hashAddNode(Oe)}}},rmdir(c){var d=w.lookupPath(c,{parent:!0}),g=d.node,S=Ie.basename(c),C=w.lookupNode(g,S),F=w.mayDelete(g,S,!0);if(F)throw new w.ErrnoError(F);if(!g.node_ops.rmdir)throw new w.ErrnoError(63);if(w.isMountpoint(C))throw new w.ErrnoError(10);g.node_ops.rmdir(g,S),w.destroyNode(C)},readdir(c){var d=w.lookupPath(c,{follow:!0}),g=d.node;if(!g.node_ops.readdir)throw new w.ErrnoError(54);return g.node_ops.readdir(g)},unlink(c){var d=w.lookupPath(c,{parent:!0}),g=d.node;if(!g)throw new w.ErrnoError(44);var S=Ie.basename(c),C=w.lookupNode(g,S),F=w.mayDelete(g,S,!1);if(F)throw new w.ErrnoError(F);if(!g.node_ops.unlink)throw new w.ErrnoError(63);if(w.isMountpoint(C))throw new w.ErrnoError(10);g.node_ops.unlink(g,S),w.destroyNode(C)},readlink(c){var d=w.lookupPath(c),g=d.node;if(!g)throw new w.ErrnoError(44);if(!g.node_ops.readlink)throw new w.ErrnoError(28);return ot.resolve(w.getPath(g.parent),g.node_ops.readlink(g))},stat(c,d){var g=w.lookupPath(c,{follow:!d}),S=g.node;if(!S)throw new w.ErrnoError(44);if(!S.node_ops.getattr)throw new w.ErrnoError(63);return S.node_ops.getattr(S)},lstat(c){return w.stat(c,!0)},chmod(c,d,g){var S;if(typeof c=="string"){var C=w.lookupPath(c,{follow:!g});S=C.node}else S=c;if(!S.node_ops.setattr)throw new w.ErrnoError(63);S.node_ops.setattr(S,{mode:d&4095|S.mode&-4096,timestamp:Date.now()})},lchmod(c,d){w.chmod(c,d,!0)},fchmod(c,d){var g=w.getStreamChecked(c);w.chmod(g.node,d)},chown(c,d,g,S){var C;if(typeof c=="string"){var F=w.lookupPath(c,{follow:!S});C=F.node}else C=c;if(!C.node_ops.setattr)throw new w.ErrnoError(63);C.node_ops.setattr(C,{timestamp:Date.now()})},lchown(c,d,g){w.chown(c,d,g,!0)},fchown(c,d,g){var S=w.getStreamChecked(c);w.chown(S.node,d,g)},truncate(c,d){if(d<0)throw new w.ErrnoError(28);var g;if(typeof c=="string"){var S=w.lookupPath(c,{follow:!0});g=S.node}else g=c;if(!g.node_ops.setattr)throw new w.ErrnoError(63);if(w.isDir(g.mode))throw new w.ErrnoError(31);if(!w.isFile(g.mode))throw new w.ErrnoError(28);var C=w.nodePermissions(g,"w");if(C)throw new w.ErrnoError(C);g.node_ops.setattr(g,{size:d,timestamp:Date.now()})},ftruncate(c,d){var g=w.getStreamChecked(c);if((g.flags&2097155)===0)throw new w.ErrnoError(28);w.truncate(g.node,d)},utime(c,d,g){var S=w.lookupPath(c,{follow:!0}),C=S.node;C.node_ops.setattr(C,{timestamp:Math.max(d,g)})},open(c,d,g){if(c==="")throw new w.ErrnoError(44);d=typeof d=="string"?Gr(d):d,d&64?(g=typeof g>"u"?438:g,g=g&4095|32768):g=0;var S;if(typeof c=="object")S=c;else{c=Ie.normalize(c);try{var C=w.lookupPath(c,{follow:!(d&131072)});S=C.node}catch{}}var F=!1;if(d&64)if(S){if(d&128)throw new w.ErrnoError(20)}else S=w.mknod(c,g,0),F=!0;if(!S)throw new w.ErrnoError(44);if(w.isChrdev(S.mode)&&(d&=-513),d&65536&&!w.isDir(S.mode))throw new w.ErrnoError(54);if(!F){var k=w.mayOpen(S,d);if(k)throw new w.ErrnoError(k)}d&512&&!F&&w.truncate(S,0),d&=-131713;var Z=w.createStream({node:S,path:w.getPath(S),flags:d,seekable:!0,position:0,stream_ops:S.stream_ops,ungotten:[],error:!1});return Z.stream_ops.open&&Z.stream_ops.open(Z),p.logReadFiles&&!(d&1)&&(c in w.readFiles||(w.readFiles[c]=1)),Z},close(c){if(w.isClosed(c))throw new w.ErrnoError(8);c.getdents&&(c.getdents=null);try{c.stream_ops.close&&c.stream_ops.close(c)}catch(d){throw d}finally{w.closeStream(c.fd)}c.fd=null},isClosed(c){return c.fd===null},llseek(c,d,g){if(w.isClosed(c))throw new w.ErrnoError(8);if(!c.seekable||!c.stream_ops.llseek)throw new w.ErrnoError(70);if(g!=0&&g!=1&&g!=2)throw new w.ErrnoError(28);return c.position=c.stream_ops.llseek(c,d,g),c.ungotten=[],c.position},read(c,d,g,S,C){if(S<0||C<0)throw new w.ErrnoError(28);if(w.isClosed(c))throw new w.ErrnoError(8);if((c.flags&2097155)===1)throw new w.ErrnoError(8);if(w.isDir(c.node.mode))throw new w.ErrnoError(31);if(!c.stream_ops.read)throw new w.ErrnoError(28);var F=typeof C<"u";if(!F)C=c.position;else if(!c.seekable)throw new w.ErrnoError(70);var k=c.stream_ops.read(c,d,g,S,C);return F||(c.position+=k),k},write(c,d,g,S,C,F){if(S<0||C<0)throw new w.ErrnoError(28);if(w.isClosed(c))throw new w.ErrnoError(8);if((c.flags&2097155)===0)throw new w.ErrnoError(8);if(w.isDir(c.node.mode))throw new w.ErrnoError(31);if(!c.stream_ops.write)throw new w.ErrnoError(28);c.seekable&&c.flags&1024&&w.llseek(c,0,2);var k=typeof C<"u";if(!k)C=c.position;else if(!c.seekable)throw new w.ErrnoError(70);var Z=c.stream_ops.write(c,d,g,S,C,F);return k||(c.position+=Z),Z},allocate(c,d,g){if(w.isClosed(c))throw new w.ErrnoError(8);if(d<0||g<=0)throw new w.ErrnoError(28);if((c.flags&2097155)===0)throw new w.ErrnoError(8);if(!w.isFile(c.node.mode)&&!w.isDir(c.node.mode))throw new w.ErrnoError(43);if(!c.stream_ops.allocate)throw new w.ErrnoError(138);c.stream_ops.allocate(c,d,g)},mmap(c,d,g,S,C){if((S&2)!==0&&(C&2)===0&&(c.flags&2097155)!==2)throw new w.ErrnoError(2);if((c.flags&2097155)===1)throw new w.ErrnoError(2);if(!c.stream_ops.mmap)throw new w.ErrnoError(43);if(!d)throw new w.ErrnoError(28);return c.stream_ops.mmap(c,d,g,S,C)},msync(c,d,g,S,C){return c.stream_ops.msync?c.stream_ops.msync(c,d,g,S,C):0},ioctl(c,d,g){if(!c.stream_ops.ioctl)throw new w.ErrnoError(59);return c.stream_ops.ioctl(c,d,g)},readFile(c,d={}){if(d.flags=d.flags||0,d.encoding=d.encoding||"binary",d.encoding!=="utf8"&&d.encoding!=="binary")throw new Error(`Invalid encoding type "${d.encoding}"`);var g,S=w.open(c,d.flags),C=w.stat(c),F=C.size,k=new Uint8Array(F);return w.read(S,k,0,F,0),d.encoding==="utf8"?g=Ye(k):d.encoding==="binary"&&(g=k),w.close(S),g},writeFile(c,d,g={}){g.flags=g.flags||577;var S=w.open(c,g.flags,g.mode);if(typeof d=="string"){var C=new Uint8Array(j(d)+1),F=Xe(d,C,0,C.length);w.write(S,C,0,F,void 0,g.canOwn)}else if(ArrayBuffer.isView(d))w.write(S,d,0,d.byteLength,void 0,g.canOwn);else throw new Error("Unsupported data type");w.close(S)},cwd:()=>w.currentPath,chdir(c){var d=w.lookupPath(c,{follow:!0});if(d.node===null)throw new w.ErrnoError(44);if(!w.isDir(d.node.mode))throw new w.ErrnoError(54);var g=w.nodePermissions(d.node,"x");if(g)throw new w.ErrnoError(g);w.currentPath=d.path},createDefaultDirectories(){w.mkdir("/tmp"),w.mkdir("/home"),w.mkdir("/home/web_user")},createDefaultDevices(){w.mkdir("/dev"),w.registerDevice(w.makedev(1,3),{read:()=>0,write:(S,C,F,k,Z)=>k}),w.mkdev("/dev/null",w.makedev(1,3)),Ue.register(w.makedev(5,0),Ue.default_tty_ops),Ue.register(w.makedev(6,0),Ue.default_tty1_ops),w.mkdev("/dev/tty",w.makedev(5,0)),w.mkdev("/dev/tty1",w.makedev(6,0));var c=new Uint8Array(1024),d=0,g=()=>(d===0&&(d=Pe(c).byteLength),c[--d]);w.createDevice("/dev","random",g),w.createDevice("/dev","urandom",g),w.mkdir("/dev/shm"),w.mkdir("/dev/shm/tmp")},createSpecialDirectories(){w.mkdir("/proc");var c=w.mkdir("/proc/self");w.mkdir("/proc/self/fd"),w.mount({mount(){var d=w.createNode(c,"fd",16895,73);return d.node_ops={lookup(g,S){var C=+S,F=w.getStreamChecked(C),k={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>F.path}};return k.parent=k,k}},d}},{},"/proc/self/fd")},createStandardStreams(c,d,g){c?w.createDevice("/dev","stdin",c):w.symlink("/dev/tty","/dev/stdin"),d?w.createDevice("/dev","stdout",null,d):w.symlink("/dev/tty","/dev/stdout"),g?w.createDevice("/dev","stderr",null,g):w.symlink("/dev/tty1","/dev/stderr"),w.open("/dev/stdin",0),w.open("/dev/stdout",1),w.open("/dev/stderr",1)},staticInit(){[44].forEach(c=>{w.genericErrors[c]=new w.ErrnoError(c),w.genericErrors[c].stack="<generic error, no stack>"}),w.nameTable=new Array(4096),w.mount(it,{},"/"),w.createDefaultDirectories(),w.createDefaultDevices(),w.createSpecialDirectories(),w.filesystems={MEMFS:it}},init(c,d,g){w.initialized=!0,c??=p.stdin,d??=p.stdout,g??=p.stderr,w.createStandardStreams(c,d,g)},quit(){w.initialized=!1;for(var c=0;c<w.streams.length;c++){var d=w.streams[c];d&&w.close(d)}},findObject(c,d){var g=w.analyzePath(c,d);return g.exists?g.object:null},analyzePath(c,d){try{var g=w.lookupPath(c,{follow:!d});c=g.path}catch{}var S={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var g=w.lookupPath(c,{parent:!0});S.parentExists=!0,S.parentPath=g.path,S.parentObject=g.node,S.name=Ie.basename(c),g=w.lookupPath(c,{follow:!d}),S.exists=!0,S.path=g.path,S.object=g.node,S.name=g.node.name,S.isRoot=g.path==="/"}catch(C){S.error=C.errno}return S},createPath(c,d,g,S){c=typeof c=="string"?c:w.getPath(c);for(var C=d.split("/").reverse();C.length;){var F=C.pop();if(F){var k=Ie.join2(c,F);try{w.mkdir(k)}catch{}c=k}}return k},createFile(c,d,g,S,C){var F=Ie.join2(typeof c=="string"?c:w.getPath(c),d),k=ci(S,C);return w.create(F,k)},createDataFile(c,d,g,S,C,F){var k=d;c&&(c=typeof c=="string"?c:w.getPath(c),k=d?Ie.join2(c,d):c);var Z=ci(S,C),ge=w.create(k,Z);if(g){if(typeof g=="string"){for(var Oe=new Array(g.length),je=0,st=g.length;je<st;++je)Oe[je]=g.charCodeAt(je);g=Oe}w.chmod(ge,Z|146);var pt=w.open(ge,577);w.write(pt,g,0,g.length,0,F),w.close(pt),w.chmod(ge,Z)}},createDevice(c,d,g,S){var C=Ie.join2(typeof c=="string"?c:w.getPath(c),d),F=ci(!!g,!!S);w.createDevice.major??=64;var k=w.makedev(w.createDevice.major++,0);return w.registerDevice(k,{open(Z){Z.seekable=!1},close(Z){S?.buffer?.length&&S(10)},read(Z,ge,Oe,je,st){for(var pt=0,tt=0;tt<je;tt++){var At;try{At=g()}catch{throw new w.ErrnoError(29)}if(At===void 0&&pt===0)throw new w.ErrnoError(6);if(At==null)break;pt++,ge[Oe+tt]=At}return pt&&(Z.node.timestamp=Date.now()),pt},write(Z,ge,Oe,je,st){for(var pt=0;pt<je;pt++)try{S(ge[Oe+pt])}catch{throw new w.ErrnoError(29)}return je&&(Z.node.timestamp=Date.now()),pt}}),w.mkdev(C,F,k)},forceLoadFile(c){if(c.isDevice||c.isFolder||c.link||c.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{c.contents=H(c.url),c.usedBytes=c.contents.length}catch{throw new w.ErrnoError(29)}},createLazyFile(c,d,g,S,C){class F{constructor(){this.lengthKnown=!1,this.chunks=[]}get(tt){if(!(tt>this.length-1||tt<0)){var At=tt%this.chunkSize,Pt=tt/this.chunkSize|0;return this.getter(Pt)[At]}}setDataGetter(tt){this.getter=tt}cacheLength(){var tt=new XMLHttpRequest;if(tt.open("HEAD",g,!1),tt.send(null),!(tt.status>=200&&tt.status<300||tt.status===304))throw new Error("Couldn't load "+g+". Status: "+tt.status);var At=Number(tt.getResponseHeader("Content-length")),Pt,bn=(Pt=tt.getResponseHeader("Accept-Ranges"))&&Pt==="bytes",gn=(Pt=tt.getResponseHeader("Content-Encoding"))&&Pt==="gzip",ii=1024*1024;bn||(ii=At);var ai=(jn,wa)=>{if(jn>wa)throw new Error("invalid range ("+jn+", "+wa+") or no bytes requested!");if(wa>At-1)throw new Error("only "+At+" bytes available! programmer error!");var An=new XMLHttpRequest;if(An.open("GET",g,!1),At!==ii&&An.setRequestHeader("Range","bytes="+jn+"-"+wa),An.responseType="arraybuffer",An.overrideMimeType&&An.overrideMimeType("text/plain; charset=x-user-defined"),An.send(null),!(An.status>=200&&An.status<300||An.status===304))throw new Error("Couldn't load "+g+". Status: "+An.status);return An.response!==void 0?new Uint8Array(An.response||[]):He(An.responseText||"")},Aa=this;Aa.setDataGetter(jn=>{var wa=jn*ii,An=(jn+1)*ii-1;if(An=Math.min(An,At-1),typeof Aa.chunks[jn]>"u"&&(Aa.chunks[jn]=ai(wa,An)),typeof Aa.chunks[jn]>"u")throw new Error("doXHR failed!");return Aa.chunks[jn]}),(gn||!At)&&(ii=At=1,At=this.getter(0).length,ii=At,I("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=At,this._chunkSize=ii,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!v)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var k=new F,Z={isDevice:!1,contents:k}}else var Z={isDevice:!1,url:g};var ge=w.createFile(c,d,Z,S,C);Z.contents?ge.contents=Z.contents:Z.url&&(ge.contents=null,ge.url=Z.url),Object.defineProperties(ge,{usedBytes:{get:function(){return this.contents.length}}});var Oe={},je=Object.keys(ge.stream_ops);je.forEach(pt=>{var tt=ge.stream_ops[pt];Oe[pt]=(...At)=>(w.forceLoadFile(ge),tt(...At))});function st(pt,tt,At,Pt,bn){var gn=pt.node.contents;if(bn>=gn.length)return 0;var ii=Math.min(gn.length-bn,Pt);if(gn.slice)for(var ai=0;ai<ii;ai++)tt[At+ai]=gn[bn+ai];else for(var ai=0;ai<ii;ai++)tt[At+ai]=gn.get(bn+ai);return ii}return Oe.read=(pt,tt,At,Pt,bn)=>(w.forceLoadFile(ge),st(pt,tt,At,Pt,bn)),Oe.mmap=(pt,tt,At,Pt,bn)=>{w.forceLoadFile(ge);var gn=Ct(tt);if(!gn)throw new w.ErrnoError(48);return st(pt,re,gn,tt,At),{ptr:gn,allocated:!0}},ge.stream_ops=Oe,ge}},Sa=(c,d)=>c?Ye(oe,c,d):"",kt={DEFAULT_POLLMASK:5,calculateAt(c,d,g){if(Ie.isAbs(d))return d;var S;if(c===-100)S=w.cwd();else{var C=kt.getStreamFromFD(c);S=C.path}if(d.length==0){if(!g)throw new w.ErrnoError(44);return S}return Ie.join2(S,d)},doStat(c,d,g){var S=c(d);z[g>>2]=S.dev,z[g+4>>2]=S.mode,$[g+8>>2]=S.nlink,z[g+12>>2]=S.uid,z[g+16>>2]=S.gid,z[g+20>>2]=S.rdev,Ze=[S.size>>>0,(ae=S.size,+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],z[g+24>>2]=Ze[0],z[g+28>>2]=Ze[1],z[g+32>>2]=4096,z[g+36>>2]=S.blocks;var C=S.atime.getTime(),F=S.mtime.getTime(),k=S.ctime.getTime();return Ze=[Math.floor(C/1e3)>>>0,(ae=Math.floor(C/1e3),+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],z[g+40>>2]=Ze[0],z[g+44>>2]=Ze[1],$[g+48>>2]=C%1e3*1e3*1e3,Ze=[Math.floor(F/1e3)>>>0,(ae=Math.floor(F/1e3),+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],z[g+56>>2]=Ze[0],z[g+60>>2]=Ze[1],$[g+64>>2]=F%1e3*1e3*1e3,Ze=[Math.floor(k/1e3)>>>0,(ae=Math.floor(k/1e3),+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],z[g+72>>2]=Ze[0],z[g+76>>2]=Ze[1],$[g+80>>2]=k%1e3*1e3*1e3,Ze=[S.ino>>>0,(ae=S.ino,+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],z[g+88>>2]=Ze[0],z[g+92>>2]=Ze[1],0},doMsync(c,d,g,S,C){if(!w.isFile(d.node.mode))throw new w.ErrnoError(43);if(S&2)return 0;var F=oe.slice(c,c+g);w.msync(d,F,C,g,S)},getStreamFromFD(c){var d=w.getStreamChecked(c);return d},varargs:void 0,getStr(c){var d=Sa(c);return d}};function ui(c,d){try{return c=kt.getStr(c),w.chmod(c,d),0}catch(g){if(typeof w>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function En(c,d,g,S){try{if(d=kt.getStr(d),d=kt.calculateAt(c,d),g&-8)return-28;var C=w.lookupPath(d,{follow:!0}),F=C.node;if(!F)return-44;var k="";return g&4&&(k+="r"),g&2&&(k+="w"),g&1&&(k+="x"),k&&w.nodePermissions(F,k)?-2:0}catch(Z){if(typeof w>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function yn(){var c=z[+kt.varargs>>2];return kt.varargs+=4,c}var ni=yn;function tr(c,d,g){kt.varargs=g;try{var S=kt.getStreamFromFD(c);switch(d){case 0:{var C=yn();if(C<0)return-28;for(;w.streams[C];)C++;var F;return F=w.dupStream(S,C),F.fd}case 1:case 2:return 0;case 3:return S.flags;case 4:{var C=yn();return S.flags|=C,0}case 12:{var C=ni(),k=0;return Se[C+k>>1]=2,0}case 13:case 14:return 0}return-28}catch(Z){if(typeof w>"u"||Z.name!=="ErrnoError")throw Z;return-Z.errno}}function Vo(c,d){try{var g=kt.getStreamFromFD(c);return kt.doStat(w.stat,g.path,d)}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Go(c,d,g){kt.varargs=g;try{var S=kt.getStreamFromFD(c);switch(d){case 21509:return S.tty?0:-59;case 21505:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tcgets){var C=S.tty.ops.ioctl_tcgets(S),F=ni();z[F>>2]=C.c_iflag||0,z[F+4>>2]=C.c_oflag||0,z[F+8>>2]=C.c_cflag||0,z[F+12>>2]=C.c_lflag||0;for(var k=0;k<32;k++)re[F+k+17]=C.c_cc[k]||0;return 0}return 0}case 21510:case 21511:case 21512:return S.tty?0:-59;case 21506:case 21507:case 21508:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tcsets){for(var F=ni(),Z=z[F>>2],ge=z[F+4>>2],Oe=z[F+8>>2],je=z[F+12>>2],st=[],k=0;k<32;k++)st.push(re[F+k+17]);return S.tty.ops.ioctl_tcsets(S.tty,d,{c_iflag:Z,c_oflag:ge,c_cflag:Oe,c_lflag:je,c_cc:st})}return 0}case 21519:{if(!S.tty)return-59;var F=ni();return z[F>>2]=0,0}case 21520:return S.tty?-28:-59;case 21531:{var F=ni();return w.ioctl(S,d,F)}case 21523:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tiocgwinsz){var pt=S.tty.ops.ioctl_tiocgwinsz(S.tty),F=ni();Se[F>>1]=pt[0],Se[F+2>>1]=pt[1]}return 0}case 21524:return S.tty?0:-59;case 21515:return S.tty?0:-59;default:return-28}}catch(tt){if(typeof w>"u"||tt.name!=="ErrnoError")throw tt;return-tt.errno}}function Ts(c,d){try{return c=kt.getStr(c),kt.doStat(w.lstat,c,d)}catch(g){if(typeof w>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function ba(c,d,g,S){try{d=kt.getStr(d);var C=S&256,F=S&4096;return S=S&-6401,d=kt.calculateAt(c,d,F),kt.doStat(C?w.lstat:w.stat,d,g)}catch(k){if(typeof w>"u"||k.name!=="ErrnoError")throw k;return-k.errno}}function kr(c,d,g,S){kt.varargs=S;try{d=kt.getStr(d),d=kt.calculateAt(c,d);var C=S?yn():0;return w.open(d,g,C).fd}catch(F){if(typeof w>"u"||F.name!=="ErrnoError")throw F;return-F.errno}}function la(c){try{return c=kt.getStr(c),w.rmdir(c),0}catch(d){if(typeof w>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function L(c,d){try{return c=kt.getStr(c),kt.doStat(w.stat,c,d)}catch(g){if(typeof w>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function ee(c,d,g){try{return d=kt.getStr(d),d=kt.calculateAt(c,d),g===0?w.unlink(d):g===512?w.rmdir(d):xt("Invalid flags passed to unlinkat"),0}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}var xe=()=>{xt("")},le=(c,d,g,S,C)=>{},ie=()=>{for(var c=new Array(256),d=0;d<256;++d)c[d]=String.fromCharCode(d);Be=c},Be,ze=c=>{for(var d="",g=c;oe[g];)d+=Be[oe[g++]];return d},Qe={},Je={},vt={},Mt,at=c=>{throw new Mt(c)},Lt,jt=c=>{throw new Lt(c)},en=(c,d,g)=>{c.forEach(Z=>vt[Z]=d);function S(Z){var ge=g(Z);ge.length!==c.length&&jt("Mismatched type converter count");for(var Oe=0;Oe<c.length;++Oe)It(c[Oe],ge[Oe])}var C=new Array(d.length),F=[],k=0;d.forEach((Z,ge)=>{Je.hasOwnProperty(Z)?C[ge]=Je[Z]:(F.push(Z),Qe.hasOwnProperty(Z)||(Qe[Z]=[]),Qe[Z].push(()=>{C[ge]=Je[Z],++k,k===F.length&&S(C)}))}),F.length===0&&S(C)};function Xt(c,d,g={}){var S=d.name;if(c||at(`type "${S}" must have a positive integer typeid pointer`),Je.hasOwnProperty(c)){if(g.ignoreDuplicateRegistrations)return;at(`Cannot register type '${S}' twice`)}if(Je[c]=d,delete vt[c],Qe.hasOwnProperty(c)){var C=Qe[c];delete Qe[c],C.forEach(F=>F())}}function It(c,d,g={}){return Xt(c,d,g)}var dt=8,sn=(c,d,g,S)=>{d=ze(d),It(c,{name:d,fromWireType:function(C){return!!C},toWireType:function(C,F){return F?g:S},argPackAdvance:dt,readValueFromPointer:function(C){return this.fromWireType(oe[C])},destructorFunction:null})},Vt=[],cn=[],Oi=c=>{c>9&&--cn[c+1]===0&&(cn[c]=void 0,Vt.push(c))},un=()=>cn.length/2-5-Vt.length,Yi=()=>{cn.push(0,1,void 0,1,null,1,!0,1,!1,1),p.count_emval_handles=un},Dt={toValue:c=>(c||at("Cannot use deleted val. handle = "+c),cn[c]),toHandle:c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const d=Vt.pop()||cn.length;return cn[d]=c,cn[d+1]=1,d}}}};function Tn(c){return this.fromWireType($[c>>2])}var Un={name:"emscripten::val",fromWireType:c=>{var d=Dt.toValue(c);return Oi(c),d},toWireType:(c,d)=>Dt.toHandle(d),argPackAdvance:dt,readValueFromPointer:Tn,destructorFunction:null},Pn=c=>It(c,Un),Gn=(c,d)=>{switch(d){case 4:return function(g){return this.fromWireType(ne[g>>2])};case 8:return function(g){return this.fromWireType(Re[g>>3])};default:throw new TypeError(`invalid float width (${d}): ${c}`)}},Pi=(c,d,g)=>{d=ze(d),It(c,{name:d,fromWireType:S=>S,toWireType:(S,C)=>C,argPackAdvance:dt,readValueFromPointer:Gn(d,g),destructorFunction:null})},mi=(c,d)=>Object.defineProperty(d,"name",{value:c}),ko=c=>{for(;c.length;){var d=c.pop(),g=c.pop();g(d)}};function Xo(c){for(var d=1;d<c.length;++d)if(c[d]!==null&&c[d].destructorFunction===void 0)return!0;return!1}function As(c,d){if(!(c instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof c} which is not a function`);var g=mi(c.name||"unknownFunctionName",function(){});g.prototype=c.prototype;var S=new g,C=c.apply(S,d);return C instanceof Object?C:S}function nf(c,d,g,S){for(var C=Xo(c),F=c.length-2,k=[],Z=["fn"],ge=0;ge<F;++ge)k.push(`arg${ge}`),Z.push(`arg${ge}Wired`);k=k.join(","),Z=Z.join(",");var Oe=`return function (${k}) {
`;C&&(Oe+=`var destructors = [];
`);for(var je=C?"destructors":"null",st=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],ge=0;ge<F;++ge)Oe+=`var arg${ge}Wired = argType${ge}['toWireType'](${je}, arg${ge});
`,st.push(`argType${ge}`);if(Oe+=(g||S?"var rv = ":"")+`invoker(${Z});
`,C)Oe+=`runDestructors(destructors);
`;else for(var ge=2;ge<c.length;++ge){var pt=ge===1?"thisWired":"arg"+(ge-2)+"Wired";c[ge].destructorFunction!==null&&(Oe+=`${pt}_dtor(${pt});
`,st.push(`${pt}_dtor`))}return g&&(Oe+=`var ret = retType['fromWireType'](rv);
return ret;
`),Oe+=`}
`,[st,Oe]}function af(c,d,g,S,C,F){var k=d.length;k<2&&at("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Z=d[1]!==null&&g!==null,ge=Xo(d),Oe=d[0].name!=="void",je=[c,at,S,C,ko,d[0],d[1]],st=0;st<k-2;++st)je.push(d[st+2]);if(!ge)for(var st=2;st<d.length;++st)d[st].destructorFunction!==null&&je.push(d[st].destructorFunction);let[pt,tt]=nf(d,Z,Oe,F);pt.push(tt);var At=As(Function,pt)(...je);return mi(c,At)}var ws=(c,d,g)=>{if(c[d].overloadTable===void 0){var S=c[d];c[d]=function(...C){return c[d].overloadTable.hasOwnProperty(C.length)||at(`Function '${g}' called with an invalid number of arguments (${C.length}) - expects one of (${c[d].overloadTable})!`),c[d].overloadTable[C.length].apply(this,C)},c[d].overloadTable=[],c[d].overloadTable[S.argCount]=S}},ji=(c,d,g)=>{p.hasOwnProperty(c)?((g===void 0||p[c].overloadTable!==void 0&&p[c].overloadTable[g]!==void 0)&&at(`Cannot register public name '${c}' twice`),ws(p,c,c),p.hasOwnProperty(g)&&at(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),p[c].overloadTable[g]=d):(p[c]=d,g!==void 0&&(p[c].numArguments=g))},Wo=(c,d)=>{for(var g=[],S=0;S<c;S++)g.push($[d+S*4>>2]);return g},qo=(c,d,g)=>{p.hasOwnProperty(c)||jt("Replacing nonexistent public symbol"),p[c].overloadTable!==void 0&&g!==void 0?p[c].overloadTable[g]=d:(p[c]=d,p[c].argCount=g)},nr=(c,d,g)=>{c=c.replace(/p/g,"i");var S=p["dynCall_"+c];return S(d,...g)},Zi=[],Yo,Rs=c=>{var d=Zi[c];return d||(c>=Zi.length&&(Zi.length=c+1),Zi[c]=d=Yo.get(c)),d},$l=(c,d,g=[])=>{if(c.includes("j"))return nr(c,d,g);var S=Rs(d)(...g);return S},Xr=(c,d)=>(...g)=>$l(c,d,g),Ki=(c,d)=>{c=ze(c);function g(){return c.includes("j")?Xr(c,d):Rs(d)}var S=g();return typeof S!="function"&&at(`unknown function pointer with signature ${c}: ${d}`),S},jo=(c,d)=>{var g=mi(d,function(S){this.name=d,this.message=S;var C=new Error(S).stack;C!==void 0&&(this.stack=this.toString()+`
`+C.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(c.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g},ir,Qi=c=>{var d=tl(c),g=ze(d);return Ji(d),g},Zo=(c,d)=>{var g=[],S={};function C(F){if(!S[F]&&!Je[F]){if(vt[F]){vt[F].forEach(C);return}g.push(F),S[F]=!0}}throw d.forEach(C),new ir(`${c}: `+g.map(Qi).join([", "]))},Cs=c=>{c=c.trim();const d=c.indexOf("(");return d!==-1?c.substr(0,d):c},ec=(c,d,g,S,C,F,k,Z)=>{var ge=Wo(d,g);c=ze(c),c=Cs(c),C=Ki(S,C),ji(c,function(){Zo(`Cannot call ${c} due to unbound types`,ge)},d-1),en([],ge,Oe=>{var je=[Oe[0],null].concat(Oe.slice(1));return qo(c,af(c,je,null,C,F,k),d-1),[]})},Ds=(c,d,g)=>{switch(d){case 1:return g?S=>re[S]:S=>oe[S];case 2:return g?S=>Se[S>>1]:S=>ye[S>>1];case 4:return g?S=>z[S>>2]:S=>$[S>>2];default:throw new TypeError(`invalid integer width (${d}): ${c}`)}},Us=(c,d,g,S,C)=>{d=ze(d);var F=je=>je;if(S===0){var k=32-8*g;F=je=>je<<k>>>k}var Z=d.includes("unsigned"),ge=(je,st)=>{},Oe;Z?Oe=function(je,st){return ge(st,this.name),st>>>0}:Oe=function(je,st){return ge(st,this.name),st},It(c,{name:d,fromWireType:F,toWireType:Oe,argPackAdvance:dt,readValueFromPointer:Ds(d,g,S!==0),destructorFunction:null})},tc=(c,d,g)=>{var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],C=S[d];function F(k){var Z=$[k>>2],ge=$[k+4>>2];return new C(re.buffer,ge,Z)}g=ze(g),It(c,{name:g,fromWireType:F,argPackAdvance:dt,readValueFromPointer:F},{ignoreDuplicateRegistrations:!0})},Ln=(c,d,g)=>Xe(c,oe,d,g),Ma=(c,d)=>{d=ze(d);var g=d==="std::string";It(c,{name:d,fromWireType(S){var C=$[S>>2],F=S+4,k;if(g)for(var Z=F,ge=0;ge<=C;++ge){var Oe=F+ge;if(ge==C||oe[Oe]==0){var je=Oe-Z,st=Sa(Z,je);k===void 0?k=st:(k+="\0",k+=st),Z=Oe+1}}else{for(var pt=new Array(C),ge=0;ge<C;++ge)pt[ge]=String.fromCharCode(oe[F+ge]);k=pt.join("")}return Ji(S),k},toWireType(S,C){C instanceof ArrayBuffer&&(C=new Uint8Array(C));var F,k=typeof C=="string";k||C instanceof Uint8Array||C instanceof Uint8ClampedArray||C instanceof Int8Array||at("Cannot pass non-string to std::string"),g&&k?F=j(C):F=C.length;var Z=Jr(4+F+1),ge=Z+4;if($[Z>>2]=F,g&&k)Ln(C,ge,F+1);else if(k)for(var Oe=0;Oe<F;++Oe){var je=C.charCodeAt(Oe);je>255&&(Ji(ge),at("String has UTF-16 code units that do not fit in 8 bits")),oe[ge+Oe]=je}else for(var Oe=0;Oe<F;++Oe)oe[ge+Oe]=C[Oe];return S!==null&&S.push(Ji,Z),Z},argPackAdvance:dt,readValueFromPointer:Tn,destructorFunction(S){Ji(S)}})},Wr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,qr=(c,d)=>{for(var g=c,S=g>>1,C=S+d/2;!(S>=C)&&ye[S];)++S;if(g=S<<1,g-c>32&&Wr)return Wr.decode(oe.subarray(c,g));for(var F="",k=0;!(k>=d/2);++k){var Z=Se[c+k*2>>1];if(Z==0)break;F+=String.fromCharCode(Z)}return F},rf=(c,d,g)=>{if(g??=2147483647,g<2)return 0;g-=2;for(var S=d,C=g<c.length*2?g/2:c.length,F=0;F<C;++F){var k=c.charCodeAt(F);Se[d>>1]=k,d+=2}return Se[d>>1]=0,d-S},Ko=c=>c.length*2,Qo=(c,d)=>{for(var g=0,S="";!(g>=d/4);){var C=z[c+g*4>>2];if(C==0)break;if(++g,C>=65536){var F=C-65536;S+=String.fromCharCode(55296|F>>10,56320|F&1023)}else S+=String.fromCharCode(C)}return S},Yr=(c,d,g)=>{if(g??=2147483647,g<4)return 0;for(var S=d,C=S+g-4,F=0;F<c.length;++F){var k=c.charCodeAt(F);if(k>=55296&&k<=57343){var Z=c.charCodeAt(++F);k=65536+((k&1023)<<10)|Z&1023}if(z[d>>2]=k,d+=4,d+4>C)break}return z[d>>2]=0,d-S},Ls=c=>{for(var d=0,g=0;g<c.length;++g){var S=c.charCodeAt(g);S>=55296&&S<=57343&&++g,d+=4}return d},nc=(c,d,g)=>{g=ze(g);var S,C,F,k;d===2?(S=qr,C=rf,k=Ko,F=Z=>ye[Z>>1]):d===4&&(S=Qo,C=Yr,k=Ls,F=Z=>$[Z>>2]),It(c,{name:g,fromWireType:Z=>{for(var ge=$[Z>>2],Oe,je=Z+4,st=0;st<=ge;++st){var pt=Z+4+st*d;if(st==ge||F(pt)==0){var tt=pt-je,At=S(je,tt);Oe===void 0?Oe=At:(Oe+="\0",Oe+=At),je=pt+d}}return Ji(Z),Oe},toWireType:(Z,ge)=>{typeof ge!="string"&&at(`Cannot pass non-string to C++ string type ${g}`);var Oe=k(ge),je=Jr(4+Oe+d);return $[je>>2]=Oe/d,C(ge,je+4,Oe+d),Z!==null&&Z.push(Ji,je),je},argPackAdvance:dt,readValueFromPointer:Tn,destructorFunction(Z){Ji(Z)}})},sf=(c,d)=>{d=ze(d),It(c,{isVoid:!0,name:d,argPackAdvance:0,fromWireType:()=>{},toWireType:(g,S)=>{}})},of=1,lf=()=>of,Ns=c=>{for(var d=c.split("."),g=0;g<4;g++){var S=Number(d[g]);if(isNaN(S))return null;d[g]=S}return(d[0]|d[1]<<8|d[2]<<16|d[3]<<24)>>>0},Os=c=>parseInt(c),cf=c=>{var d,g,S,C,F=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,k=[];if(!F.test(c))return null;if(c==="::")return[0,0,0,0,0,0,0,0];for(c.startsWith("::")?c=c.replace("::","Z:"):c=c.replace("::",":Z:"),c.indexOf(".")>0?(c=c.replace(new RegExp("[.]","g"),":"),d=c.split(":"),d[d.length-4]=Os(d[d.length-4])+Os(d[d.length-3])*256,d[d.length-3]=Os(d[d.length-2])+Os(d[d.length-1])*256,d=d.slice(0,d.length-2)):d=c.split(":"),S=0,C=0,g=0;g<d.length;g++)if(typeof d[g]=="string")if(d[g]==="Z"){for(C=0;C<8-d.length+1;C++)k[g+C]=0;S=C-1}else k[g+S]=Ta(parseInt(d[g],16));else k[g+S]=d[g];return[k[1]<<16|k[0],k[3]<<16|k[2],k[5]<<16|k[4],k[7]<<16|k[6]]},ca={address_map:{id:1,addrs:{},names:{}},lookup_name(c){var d=Ns(c);if(d!==null||(d=cf(c),d!==null))return c;var g;if(ca.address_map.addrs[c])g=ca.address_map.addrs[c];else{var S=ca.address_map.id++;J(S<65535,"exceeded max address mappings of 65535"),g="172.29."+(S&255)+"."+(S&65280),ca.address_map.names[g]=c,ca.address_map.addrs[c]=g}return g},lookup_addr(c){return ca.address_map.names[c]?ca.address_map.names[c]:null}},uf=c=>{var d=Sa(c);return Ns(ca.lookup_name(d))},ff=(c,d,g)=>oe.copyWithin(c,d,d+g),Ps=(c,d)=>{var g=Je[c];return g===void 0&&at(`${d} has unknown type ${Qi(c)}`),g},ic=(c,d,g)=>{var S=[],C=c.toWireType(S,g);return S.length&&($[d>>2]=Dt.toHandle(S)),C},hf=(c,d,g)=>(c=Dt.toValue(c),d=Ps(d,"emval::as"),ic(d,g,c)),df={},Jo=c=>{var d=df[c];return d===void 0?ze(c):d},jr=[],pf=(c,d,g,S,C)=>(c=jr[c],d=Dt.toValue(d),g=Jo(g),c(d,d[g],S,C)),ac=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),mf=c=>c===0?Dt.toHandle(ac()):(c=Jo(c),Dt.toHandle(ac()[c])),rc=c=>{var d=jr.length;return jr.push(c),d},xf=(c,d)=>{for(var g=new Array(c),S=0;S<c;++S)g[S]=Ps($[d+S*4>>2],"parameter "+S);return g},gf=(c,d,g)=>{var S=xf(c,d),C=S.shift();c--;var F=`return function (obj, func, destructorsRef, args) {
`,k=0,Z=[];g===0&&Z.push("obj");for(var ge=["retType"],Oe=[C],je=0;je<c;++je)Z.push("arg"+je),ge.push("argType"+je),Oe.push(S[je]),F+=`  var arg${je} = argType${je}.readValueFromPointer(args${k?"+"+k:""});
`,k+=S[je].argPackAdvance;var st=g===1?"new func":"func.call";F+=`  var rv = ${st}(${Z.join(", ")});
`,C.isVoid||(ge.push("emval_returnValue"),Oe.push(ic),F+=`  return emval_returnValue(retType, destructorsRef, rv);
`),F+=`};
`,ge.push(F);var pt=As(Function,ge)(...Oe),tt=`methodCaller<(${S.map(At=>At.name).join(", ")}) => ${C.name}>`;return rc(mi(tt,pt))},_f=(c,d)=>(c=Dt.toValue(c),d=Dt.toValue(d),Dt.toHandle(c[d])),vf=c=>{c>9&&(cn[c+1]+=1)},yf=()=>Dt.toHandle([]),Sf=c=>Dt.toHandle(Jo(c)),bf=()=>Dt.toHandle({}),Mf=c=>{var d=Dt.toValue(c);ko(d),Oi(c)},Ef=(c,d,g)=>{c=Dt.toValue(c),d=Dt.toValue(d),g=Dt.toValue(g),c[d]=g},$o=(c,d)=>{c=Ps(c,"_emval_take_value");var g=c.readValueFromPointer(d);return Dt.toHandle(g)},Zr=c=>c%4===0&&(c%100!==0||c%400===0),Tf=[0,31,60,91,121,152,182,213,244,274,305,335],sc=[0,31,59,90,120,151,181,212,243,273,304,334],oc=c=>{var d=Zr(c.getFullYear()),g=d?Tf:sc,S=g[c.getMonth()]+c.getDate()-1;return S},Fs=(c,d)=>d+2097152>>>0<4194305-!!c?(c>>>0)+d*4294967296:NaN;function lc(c,d,g){var S=Fs(c,d),C=new Date(S*1e3);z[g>>2]=C.getSeconds(),z[g+4>>2]=C.getMinutes(),z[g+8>>2]=C.getHours(),z[g+12>>2]=C.getDate(),z[g+16>>2]=C.getMonth(),z[g+20>>2]=C.getFullYear()-1900,z[g+24>>2]=C.getDay();var F=oc(C)|0;z[g+28>>2]=F,z[g+36>>2]=-(C.getTimezoneOffset()*60);var k=new Date(C.getFullYear(),0,1),Z=new Date(C.getFullYear(),6,1).getTimezoneOffset(),ge=k.getTimezoneOffset(),Oe=(Z!=ge&&C.getTimezoneOffset()==Math.min(ge,Z))|0;z[g+32>>2]=Oe}function cc(c,d,g,S,C,F,k){var Z=Fs(F,k);try{var ge=kt.getStreamFromFD(C);g&2&&kt.doMsync(c,ge,d,S,Z)}catch(Oe){if(typeof w>"u"||Oe.name!=="ErrnoError")throw Oe;return-Oe.errno}}var ar=(c,d,g,S)=>{var C=new Date().getFullYear(),F=new Date(C,0,1),k=new Date(C,6,1),Z=F.getTimezoneOffset(),ge=k.getTimezoneOffset(),Oe=Math.max(Z,ge);$[c>>2]=Oe*60,z[d>>2]=+(Z!=ge);var je=tt=>{var At=tt>=0?"-":"+",Pt=Math.abs(tt),bn=String(Math.floor(Pt/60)).padStart(2,"0"),gn=String(Pt%60).padStart(2,"0");return`UTC${At}${bn}${gn}`},st=je(Z),pt=je(ge);ge<Z?(Ln(st,g,17),Ln(pt,S,17)):(Ln(st,S,17),Ln(pt,g,17))},Af=()=>Date.now();function wf(){return new Error().stack.toString()}var zs=c=>{zs.shown||={},zs.shown[c]||(zs.shown[c]=1,E&&(c="warning: "+c),X(c))};function uc(c){var d=wf(),g=d.lastIndexOf("_emscripten_log"),S=d.lastIndexOf("_emscripten_get_callstack"),C=d.indexOf(`
`,Math.max(g,S))+1;d=d.slice(C),c&8&&typeof emscripten_source_map>"u"&&(zs('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),c^=8,c|=16);var F=d.split(`
`);d="";var k=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),Z=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),ge=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Oe in F){var je=F[Oe],st="",pt="",tt=0,At=0,Pt=ge.exec(je);if(Pt&&Pt.length==5)st=Pt[1],pt=Pt[2],tt=Pt[3],At=Pt[4];else if(Pt=k.exec(je)||Z.exec(je),Pt&&Pt.length>=4)st=Pt[1],pt=Pt[2],tt=Pt[3],At=Pt[4]|0;else{d+=je+`
`;continue}var bn=!1;if(c&8){var gn=emscripten_source_map.originalPositionFor({line:tt,column:At});bn=gn?.source,bn&&(c&64&&(gn.source=gn.source.substring(gn.source.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=`    at ${st} (${gn.source}:${gn.line}:${gn.column})
`)}(c&16||!bn)&&(c&64&&(pt=pt.substring(pt.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=(bn?`     = ${st}`:`    at ${st}`)+` (${pt}:${tt}:${At})
`)}return d=d.replace(/\s+$/,""),d}function fc(c,d,g){var S=uc(c);if(!d||g<=0)return j(S)+1;var C=Ln(S,d,g);return C+1}var rr=()=>2147483648,Kr=()=>rr(),Rf=c=>{var d=P.buffer,g=(c-d.byteLength+65535)/65536|0;try{return P.grow(g),Ce(),1}catch{}},Bs=c=>{var d=oe.length;c>>>=0;var g=rr();if(c>g)return!1;for(var S=1;S<=4;S*=2){var C=d*(1+.2/S);C=Math.min(C,c+100663296);var F=Math.min(g,nt(Math.max(c,C),65536)),k=Rf(F);if(k)return!0}return!1},Is={},hc=()=>D||"./this.program",Ea=()=>{if(!Ea.strings){var c=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:c,_:hc()};for(var g in Is)Is[g]===void 0?delete d[g]:d[g]=Is[g];var S=[];for(var g in d)S.push(`${g}=${d[g]}`);Ea.strings=S}return Ea.strings},el=(c,d)=>{for(var g=0;g<c.length;++g)re[d++]=c.charCodeAt(g);re[d]=0},dc=(c,d)=>{var g=0;return Ea().forEach((S,C)=>{var F=d+g;$[c+C*4>>2]=F,el(S,F),g+=S.length+1}),0},pc=(c,d)=>{var g=Ea();$[c>>2]=g.length;var S=0;return g.forEach(C=>S+=C.length+1),$[d>>2]=S,0},mc=c=>{N(c,new qe(c))},Cf=(c,d)=>{mc(c)},Df=Cf;function Uf(c){try{var d=kt.getStreamFromFD(c);return w.close(d),0}catch(g){if(typeof w>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var Lf=(c,d,g,S)=>{for(var C=0,F=0;F<g;F++){var k=$[d>>2],Z=$[d+4>>2];d+=8;var ge=w.read(c,re,k,Z,S);if(ge<0)return-1;if(C+=ge,ge<Z)break}return C};function Nf(c,d,g,S){try{var C=kt.getStreamFromFD(c),F=Lf(C,d,g);return $[S>>2]=F,0}catch(k){if(typeof w>"u"||k.name!=="ErrnoError")throw k;return k.errno}}function fi(c,d,g,S,C){var F=Fs(d,g);try{if(isNaN(F))return 61;var k=kt.getStreamFromFD(c);return w.llseek(k,F,S),Ze=[k.position>>>0,(ae=k.position,+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],z[C>>2]=Ze[0],z[C+4>>2]=Ze[1],k.getdents&&F===0&&S===0&&(k.getdents=null),0}catch(Z){if(typeof w>"u"||Z.name!=="ErrnoError")throw Z;return Z.errno}}var Qr=(c,d,g,S)=>{for(var C=0,F=0;F<g;F++){var k=$[d>>2],Z=$[d+4>>2];d+=8;var ge=w.write(c,re,k,Z,S);if(ge<0)return-1;if(C+=ge,ge<Z)break}return C};function xc(c,d,g,S){try{var C=kt.getStreamFromFD(c),F=Qr(C,d,g);return $[S>>2]=F,0}catch(k){if(typeof w>"u"||k.name!=="ErrnoError")throw k;return k.errno}}w.createPreloadedFile=Vr,w.staticInit(),ie(),Mt=p.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},Lt=p.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},Yi(),ir=p.UnboundTypeError=jo(Error,"UnboundTypeError");var gc={M:ui,N:En,h:tr,I:Vo,Q:Go,F:Ts,G:ba,j:kr,B:la,H:L,C:ee,A:xe,w:le,V:sn,U:Pn,n:Pi,f:ec,b:Us,a:tc,m:Ma,i:nc,W:sf,J:lf,x:uf,L:ff,e:hf,q:pf,T:Oi,u:mf,p:gf,k:_f,Y:vf,X:yf,r:Sf,Z:bf,o:Mf,c:Ef,d:$o,t:lc,s:cc,O:ar,K:Af,R:fc,z:Kr,y:Bs,D:dc,E:pc,S:Df,g:Uf,P:Nf,v:fi,l:xc},Fn=Le(),tl=c=>(tl=Fn.aa)(c),Jr=c=>(Jr=Fn.ca)(c),Ji=c=>(Ji=Fn.da)(c),Ta=c=>(Ta=Fn.ea)(c),Hs=(c,d)=>(Hs=Fn.fa)(c,d),sr=()=>(sr=Fn.ga)();p.dynCall_viijii=(c,d,g,S,C,F,k)=>(p.dynCall_viijii=Fn.ha)(c,d,g,S,C,F,k),p.dynCall_viiiiji=(c,d,g,S,C,F,k,Z)=>(p.dynCall_viiiiji=Fn.ia)(c,d,g,S,C,F,k,Z),p.dynCall_jiji=(c,d,g,S,C)=>(p.dynCall_jiji=Fn.ja)(c,d,g,S,C),p.dynCall_iiiiij=(c,d,g,S,C,F,k)=>(p.dynCall_iiiiij=Fn.ka)(c,d,g,S,C,F,k),p.dynCall_iiiiijj=(c,d,g,S,C,F,k,Z,ge)=>(p.dynCall_iiiiijj=Fn.la)(c,d,g,S,C,F,k,Z,ge),p.dynCall_iiiiiijj=(c,d,g,S,C,F,k,Z,ge,Oe)=>(p.dynCall_iiiiiijj=Fn.ma)(c,d,g,S,C,F,k,Z,ge,Oe);var or,nl;Ve=function c(){or||ua(),or||(Ve=c)};function ua(){if(be>0||!nl&&(nl=1,et(),be>0))return;function c(){or||(or=1,p.calledRun=1,!O&&(he(),m(p),p.onRuntimeInitialized?.(),ve()))}p.setStatus?(p.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>p.setStatus(""),1),c()},1)):c()}if(p.preInit)for(typeof p.preInit=="function"&&(p.preInit=[p.preInit]);p.preInit.length>0;)p.preInit.pop()();return ua(),f=x,f})})();o.exports=i})(np)),np.exports}var xT=mT();const gT=My(xT),_T="/step-3d-viewer/assets/occt-import-js-BhHfLpto.wasm";let ap=null;const vT={linearUnit:"millimeter",linearDeflectionType:"bounding_box_ratio",linearDeflection:.003,angularDeflection:.4};function w_(){return ap||(ap=gT({locateFile:()=>_T})),ap}const yT="Перетащите .step/.stp файл в область просмотра или воспользуйтесь панелью управления.",ST="Загружаем движок OpenCascade...";function bT(){const o=yt.useRef(null),e=yt.useRef(null),i=yt.useRef(null),r=yt.useRef(null),l=yt.useRef(null),f=yt.useRef(null),p=yt.useRef(0),m=yt.useRef(null),_=yt.useRef(new cb),x=yt.useRef(new Ot),b=yt.useRef(null),v=yt.useRef(null),E=-1e-4,[A,D]=yt.useState(ST),[N,T]=yt.useState(null),[M,q]=yt.useState(!1),[H,V]=yt.useState(!1),[K,I]=yt.useState(!1),[X,fe]=yt.useState(!1),[P,O]=yt.useState("#ffad0d"),[J,re]=yt.useState(null),oe=yt.useCallback(be=>{const Ve=b.current;if(Ve&&Ve.material instanceof Ao){const Ke=Ve.userData.baseEmissiveHex;typeof Ke=="number"&&Ve.material.emissive.setHex(Ke)}be&&be.material instanceof Ao?(be.userData.baseEmissiveHex===void 0&&(be.userData.baseEmissiveHex=be.material.emissive.getHex()),be.material.emissive.setHex(2964090),b.current=be,re(be.name||"Без имени"),typeof be.userData.paintColorHex=="string"&&O(be.userData.paintColorHex)):(b.current=null,re(null))},[O]),Se=yt.useCallback((be,Ve)=>{const Ke=e.current,ht=r.current,W=m.current;if(!Ke||!ht||!W)return null;const xt=Ke.domElement.getBoundingClientRect();x.current.x=(be-xt.left)/xt.width*2-1,x.current.y=-((Ve-xt.top)/xt.height)*2+1,_.current.setFromCamera(x.current,ht);const Tt=_.current.intersectObjects(W.children,!0).find(We=>We.object instanceof sa&&We.object.visible&&!We.object.userData?.extinguished);return Tt?Tt.object:null},[]),ye=yt.useCallback((be,Ve)=>{const Ke=Se(be,Ve);return oe(Ke),!!Ke},[Se,oe]);yt.useEffect(()=>{let be=!0;return w_().then(()=>{be&&(fe(!0),D(yT))}).catch(Ve=>{console.error(Ve),be&&(T("Не удалось загрузить движок OpenCascade"),D("Попробуйте обновить страницу"))}),()=>{be=!1}},[]),yt.useEffect(()=>{if(!o.current)return;const be=new KS;be.background=new Qt("#06070f"),i.current=be;const Ve=new J3({antialias:!0,alpha:!0});Ve.setPixelRatio(window.devicePixelRatio),e.current=Ve;const Ke=new Wi(45,1,.1,2e3);Ke.position.set(4,4,4),r.current=Ke;const ht=new eT(Ke,Ve.domElement);ht.enableDamping=!0,ht.dampingFactor=.08,l.current=ht;const W=new ob(16777215,.6),xt=new Kg(16777215,.85);xt.position.set(5,10,4);const Rt=new Kg(16777215,.45);Rt.position.set(-4,-6,-5),be.add(W,xt,Rt);const Tt=new ub(60,60,3093826,1842985);Tt.position.y=E,(Array.isArray(Tt.material)?Tt.material:[Tt.material]).forEach(R=>{R.transparent=!0,R.opacity=.4,R.depthWrite=!1}),Tt.visible=!0,v.current=Tt,be.add(Tt);const Gt=o.current;Gt.appendChild(Ve.domElement);const ct=R=>{if(R.button===2)return;const se=Se(R.clientX,R.clientY);oe(se)},gt=()=>{if(!Gt||!r.current)return;const{clientWidth:R,clientHeight:se}=Gt;Ve.setSize(R,se);const Ee=r.current;Ee.aspect=R/Math.max(se,1),Ee.updateProjectionMatrix()};gt(),window.addEventListener("resize",gt),Ve.domElement.addEventListener("pointerdown",ct);const B=()=>{ht.update(),Ve.render(be,Ke),f.current=requestAnimationFrame(B)};return B(),()=>{window.removeEventListener("resize",gt),Ve.domElement.removeEventListener("pointerdown",ct),f.current&&cancelAnimationFrame(f.current),ht.dispose(),Ve.dispose(),v.current&&i.current?.children.includes(v.current)&&i.current.remove(v.current),v.current=null,Gt.contains(Ve.domElement)&&Gt.removeChild(Ve.domElement)}},[oe,Se]);const z=yt.useCallback(()=>{!i.current||!m.current||(i.current.remove(m.current),m.current.traverse(be=>{be instanceof sa&&(be.geometry.dispose(),Array.isArray(be.material)?be.material.forEach(Ve=>Ve.dispose()):be.material.dispose())}),m.current=null,v.current&&(v.current.visible=!0,v.current.position.y=E),oe(null))},[oe]),$=yt.useCallback(be=>{const Ve=r.current,Ke=l.current;if(!Ve||!Ke)return;be.updateMatrixWorld(!0);const ht=new Bo().setFromObject(be),W=ht.getSize(new me),xt=ht.getCenter(new me);be.position.sub(xt);const Rt=Math.max(W.x,W.y,W.z),Tt=Rt===0?5:Rt*1.6,We=new me(1.5,1,1.2).normalize();Ve.position.copy(We.multiplyScalar(Tt)),Ve.near=Math.max(Tt/200,.01),Ve.far=Tt*20,Ve.updateProjectionMatrix(),Ke.target.set(0,0,0),Ke.update()},[]),ne=yt.useCallback(be=>{if(!i.current)return;z();const Ve=new Xl;be.meshes.forEach((Ke,ht)=>{const W=new oa,xt=Ke.attributes.position?.array??[];W.setAttribute("position",new Ni(xt,3));const Rt=Ke.attributes.normal?.array;Rt?.length?W.setAttribute("normal",new Ni(Rt,3)):W.computeVertexNormals(),Ke.index?.array?.length&&W.setIndex(Ke.index.array);const Tt=Ke.color??Ke.brep_faces?.find(B=>B.color)?.color??[.82,.86,.92],We=new Qt(Tt[0],Tt[1],Tt[2]),Gt=new Ao({color:We,metalness:.15,roughness:.35,side:xa}),ct=`#${We.getHexString()}`,gt=new sa(W,Gt);gt.name=Ke.name??`Mesh-${ht+1}`,gt.userData.originalColorHex=ct,gt.userData.paintColorHex=ct,Ve.add(gt)}),i.current.add(Ve),m.current=Ve,I(!0),$(Ve),v.current&&(v.current.visible=!1),oe(null)},[z,$,oe]),Re=yt.useCallback(()=>{const be=b.current;return!be||!(be.material instanceof Ao)?!1:(be.material.color.set(P),be.material.needsUpdate=!0,be.userData.paintColorHex=P,!0)},[P]),Ce=yt.useCallback(be=>{const Ve=b.current;return!Ve||!(Ve.material instanceof Ao)?!1:(Ve.material.color.set(be),Ve.material.needsUpdate=!0,Ve.userData.paintColorHex=be,O(be),!0)},[]),G=yt.useCallback(()=>{const be=b.current;if(!be||!(be.material instanceof Ao))return!1;const Ve=be.userData.originalColorHex||"#d5dde8";return be.material.color.set(Ve),be.material.needsUpdate=!0,be.userData.paintColorHex=Ve,!0},[]),pe=yt.useCallback(()=>{const be=b.current;return be?(be.visible=!1,be.userData.extinguished=!0,oe(null),!0):!1},[oe]),De=yt.useCallback(async(be,Ve)=>{q(!0),T(null),D(`Импортируем ${Ve}...`);try{const Ke=await w_(),ht=new Uint8Array(be),W=Ke.ReadStepFile(ht,vT);if(!W?.success||!W.meshes?.length)throw new Error("OCCT вернул пустой результат");ne(W),D(`Готово: ${Ve} (${W.meshes.length} объектов)`)}catch(Ke){console.error(Ke),I(!1),v.current&&(v.current.visible=!0,v.current.position.y=E);const ht=Ke instanceof Error?Ke.message:"Неизвестная ошибка при импорте файла";T(ht),D("Импорт не удался")}finally{q(!1)}},[ne]),Fe=yt.useCallback(async be=>{const Ve=await be.arrayBuffer();await De(Ve,be.name)},[De]),et=yt.useCallback(async be=>{const Ve=be.target.files?.[0];Ve&&await Fe(Ve),be.target.value=""},[Fe]),he=yt.useCallback(async(be,Ve="пример",Ke)=>{D(`Загружаем ${Ve}...`),T(null);try{const ht=await fetch(be);if(!ht.ok)throw new Error("Не удалось получить пример");const W=await ht.arrayBuffer();await De(W,Ke??`${Ve}.step`)}catch(ht){console.error(ht),T(ht instanceof Error?ht.message:"Ошибка загрузки примера"),D("Попробуйте другой файл")}},[De]),ve=yt.useCallback(async be=>{be.preventDefault(),p.current=0,V(!1);const Ve=be.dataTransfer.files?.[0];Ve&&await Fe(Ve)},[Fe]),ke=yt.useCallback(be=>{be.preventDefault(),be.dataTransfer.dropEffect="copy"},[]),rt=yt.useCallback(be=>{be.preventDefault(),p.current+=1,V(!0)},[]),ft=yt.useCallback(be=>{be.preventDefault(),p.current=Math.max(p.current-1,0),p.current===0&&V(!1)},[]);return{canvasHostRef:o,status:A,error:N,isLoading:M,occtReady:X,hasModel:K,isDragActive:H,controlsDisabled:!X||M,handleDragEnter:rt,handleDragLeave:ft,handleDragOver:ke,handleDrop:ve,handleFileInput:et,loadSample:he,selectionColor:P,setSelectionColor:O,selectedMeshName:J,applyColorToSelection:Re,applyColorToSelectionWithValue:Ce,resetSelectionColor:G,extinguishSelection:pe,selectMeshAtScreenPosition:ye}}function MT({canvasRef:o,hasModel:e,isDragActive:i,isLoading:r,isPanelOpen:l,panelId:f,onContextMenu:p,onTouchStart:m,onTouchMove:_,onTouchEnd:x,onDragEnter:b,onDragLeave:v,onDragOver:E,onDrop:A,onTogglePanel:D,children:N}){return bt.jsxs("section",{className:`viewer ${i?"viewer--active":""}`,onContextMenu:p,onTouchStart:m,onTouchMove:_,onTouchEnd:x,onDragEnter:b,onDragOver:E,onDragLeave:v,onDrop:A,children:[bt.jsx("div",{ref:o,className:"viewer__canvas"}),!e&&bt.jsxs("div",{className:"viewer__placeholder",children:[bt.jsx("p",{children:"Сюда можно перетащить .step/.stp файл."}),bt.jsx("p",{className:"muted",children:"Либо воспользуйтесь панелью управления."})]}),i&&bt.jsx("div",{className:"viewer__drop-hint",children:"Отпустите файл, чтобы начать импорт"}),r&&bt.jsxs("div",{className:"viewer__loading","aria-live":"polite",children:[bt.jsx("div",{className:"viewer__loading-spinner"}),bt.jsx("p",{children:"Импортируем модель..."})]}),!l&&bt.jsx("button",{type:"button",className:"panel-toggle","aria-expanded":!1,"aria-controls":f,onClick:D,children:"Меню"}),N]})}function ET({samples:o,disabled:e,onSelect:i}){return bt.jsxs("section",{className:"sample-library","aria-label":"Библиотека примеров",children:[bt.jsxs("div",{className:"sample-library__header",children:[bt.jsx("p",{className:"section-label",children:"Библиотека примеров"}),bt.jsx("span",{className:"sample-library__count",children:o.length})]}),bt.jsxs("div",{className:"sample-library__list",children:[o.length===0&&bt.jsxs("span",{className:"sample-library__empty",children:["Добавьте .step/.stp файлы в папку ",bt.jsx("code",{children:"public/models"})]}),o.map(r=>bt.jsxs("button",{type:"button",className:"sample-card",onClick:()=>i(r),disabled:e,title:`Открыть ${r.fileName}`,children:[bt.jsx("span",{className:"sample-card__label",children:r.label}),bt.jsx("span",{className:"sample-card__meta",children:r.fileName})]},r.fileName))]})]})}function TT({className:o,ariaHidden:e,error:i,isLoading:r,controlsDisabled:l,onFileChange:f,onHidePanel:p,selectionColor:m,onSelectionColorChange:_,selectedMeshName:x,onApplyColor:b,onResetColor:v,samples:E,onSampleSelect:A,children:D}){return bt.jsxs("aside",{id:"control-panel",className:o,"aria-hidden":e,children:[bt.jsx("button",{type:"button",className:"panel-close",onClick:p,"aria-label":"Скрыть меню",children:bt.jsx("span",{"aria-hidden":"true",children:"←"})}),bt.jsxs("div",{className:"panel__header",children:[bt.jsx("p",{className:"eyebrow",children:"WebAssembly + three.js"}),bt.jsx("h1",{children:"STEP 3D Viewer"}),bt.jsx("p",{className:"subtitle",children:"Просмотр .step/.stp файлов прямо в браузере: загрузите свой файл или воспользуйтесь готовым примером."})]}),bt.jsxs("div",{className:"controls",children:[bt.jsxs("label",{className:"file-input","data-disabled":l,children:[bt.jsx("input",{type:"file",accept:".step,.stp,model/step,application/step",onChange:f,disabled:l}),bt.jsx("span",{children:"Выбрать .step файл"})]}),r&&bt.jsx("div",{className:"loader","aria-live":"polite"})]}),bt.jsx(ET,{samples:E,disabled:l,onSelect:A}),i&&bt.jsx("div",{className:"error-banner",children:i}),bt.jsxs("div",{className:"color-controls",children:[bt.jsxs("div",{className:"color-input",children:[bt.jsx("label",{htmlFor:"color-picker",children:"Цвет"}),bt.jsx("input",{id:"color-picker",type:"color",value:m,onChange:_,"aria-label":"Выбор цвета для выделения"})]}),bt.jsxs("div",{className:"selection-info",children:[bt.jsx("span",{className:"selection-label",children:x?`Выбрано: ${x}`:"Ничего не выбрано"}),bt.jsxs("div",{className:"selection-actions",children:[bt.jsx("button",{type:"button",className:"secondary",onClick:b,disabled:!x,children:"Применить цвет"}),bt.jsx("button",{type:"button",className:"ghost",onClick:v,disabled:!x,children:"Сбросить"})]})]})]}),D]})}function AT({x:o,y:e,onExtinguish:i,onChangeColor:r,currentColor:l}){const f=p=>{p.stopPropagation()};return bt.jsxs("div",{className:"context-menu",style:{top:`${e}px`,left:`${o}px`},role:"menu",onClick:f,onPointerDown:f,children:[bt.jsxs("div",{className:"context-menu__group",children:[bt.jsx("p",{className:"context-menu__label",children:"Цвет выделения"}),bt.jsx("input",{type:"color","aria-label":"Выбрать цвет выделенного тела",value:l,onChange:p=>r(p.target.value)})]}),bt.jsx("button",{type:"button",role:"menuitem",onClick:i,children:"Погасить выделенное тело"})]})}const wT=[{fileName:"ins100.stp",url:"/step-3d-viewer/models/ins100.stp"},{fileName:"masterpact-lv864962.stp",url:"/step-3d-viewer/models/masterpact-lv864962.stp"},{fileName:"nsx-lv432956.stp",url:"/step-3d-viewer/models/nsx-lv432956.stp"}],RT=o=>o.replace(/\.(step|stp)$/i,"").replace(/[-_]+/g," "),CT=wT.map(({fileName:o,url:e})=>({label:RT(o),fileName:o,url:e})).sort((o,e)=>o.label.localeCompare(e.label,"ru"));function DT(){const o=bT(),{selectMeshAtScreenPosition:e,selectedMeshName:i}=o,[r,l]=yt.useState(!1),[f,p]=yt.useState(!1),[m,_]=yt.useState(null),x=yt.useRef(null),b=yt.useRef(null);yt.useEffect(()=>{const V=window.matchMedia("(max-width: 768px)"),K=X=>{p(X),X&&l(!1)};K(V.matches);const I=X=>{K(X.matches),X.matches&&l(!1)};return V.addEventListener?V.addEventListener("change",I):V.addListener(I),()=>{V.removeEventListener?V.removeEventListener("change",I):V.removeListener(I)}},[]);const v=yt.useMemo(()=>["control-panel",f?"control-panel--mobile":"",r?"control-panel--open":"control-panel--collapsed"].filter(Boolean).join(" "),[f,r]),E="control-panel",A=yt.useCallback(()=>{x.current!==null&&(window.clearTimeout(x.current),x.current=null)},[]),D=yt.useCallback((V,K)=>!e(V,K)&&!i?(_(null),!1):(_({x:V,y:K}),!0),[e,i]),N=yt.useCallback(V=>{V.preventDefault(),V.stopPropagation(),D(V.clientX,V.clientY)},[D]),T=yt.useCallback(V=>{if(V.touches.length!==1){A();return}const K=V.touches[0];b.current={x:K.clientX,y:K.clientY},A(),x.current=window.setTimeout(()=>{const I=b.current;I&&(D(I.x,I.y),A())},550)},[A,D]),M=yt.useCallback(V=>{if(!b.current)return;const K=V.touches[0],I=K.clientX-b.current.x,X=K.clientY-b.current.y;Math.hypot(I,X)>15&&A()},[A]),q=yt.useCallback(()=>{A(),b.current=null},[A]);yt.useEffect(()=>{if(!m)return;const V=I=>{I.button!==0&&I.pointerType!=="touch"||_(null)},K=()=>_(null);return window.addEventListener("pointerdown",V),window.addEventListener("resize",K),()=>{window.removeEventListener("pointerdown",V),window.removeEventListener("resize",K)}},[m]),yt.useEffect(()=>()=>{A()},[A]),yt.useEffect(()=>{i||_(null)},[i]);const H=()=>{o.extinguishSelection(),_(null)};return bt.jsx("div",{className:"app","data-panel-open":r,"data-mobile-layout":f,children:bt.jsxs(MT,{canvasRef:o.canvasHostRef,hasModel:o.hasModel,isDragActive:o.isDragActive,isLoading:o.isLoading,isPanelOpen:r,panelId:E,onContextMenu:N,onTouchStart:T,onTouchMove:M,onTouchEnd:q,onDragEnter:o.handleDragEnter,onDragLeave:o.handleDragLeave,onDragOver:o.handleDragOver,onDrop:o.handleDrop,onTogglePanel:()=>l(!0),children:[bt.jsx(TT,{className:v,ariaHidden:!r,error:o.error,isLoading:o.isLoading,controlsDisabled:o.controlsDisabled,onFileChange:o.handleFileInput,onHidePanel:()=>l(!1),selectionColor:o.selectionColor,onSelectionColorChange:V=>o.setSelectionColor(V.target.value),selectedMeshName:o.selectedMeshName,onApplyColor:o.applyColorToSelection,onResetColor:o.resetSelectionColor,samples:CT,onSampleSelect:V=>o.loadSample(V.url,V.label,V.fileName)}),m&&bt.jsx(AT,{x:m.x,y:m.y,onExtinguish:H,onChangeColor:V=>o.applyColorToSelectionWithValue(V),currentColor:o.selectionColor})]})})}Oy.createRoot(document.getElementById("root")).render(bt.jsx(yt.StrictMode,{children:bt.jsx(DT,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/step-3d-viewer/sw.js").catch(e=>{console.error("Service worker registration failed:",e)})});
