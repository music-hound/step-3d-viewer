(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function My(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function Ey(o){if(Object.prototype.hasOwnProperty.call(o,"__esModule"))return o;var e=o.default;if(typeof e=="function"){var i=function r(){var l=!1;try{l=this instanceof r}catch{}return l?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(o).forEach(function(r){var l=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(i,r,l.get?l:{enumerable:!0,get:function(){return o[r]}})}),i}var _d={exports:{}},Pl={};var cx;function Ty(){if(cx)return Pl;cx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var p=null;if(f!==void 0&&(p=""+f),l.key!==void 0&&(p=""+l.key),"key"in l){f={};for(var m in l)m!=="key"&&(f[m]=l[m])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:p,ref:l!==void 0?l:null,props:f}}return Pl.Fragment=e,Pl.jsx=i,Pl.jsxs=i,Pl}var ux;function Ay(){return ux||(ux=1,_d.exports=Ty()),_d.exports}var _t=Ay(),vd={exports:{}},Ut={};var fx;function wy(){if(fx)return Ut;fx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.iterator;function A(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,T={};function M(V,pe,Ue){this.props=V,this.context=pe,this.refs=T,this.updater=Ue||D}M.prototype.isReactComponent={},M.prototype.setState=function(V,pe){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,pe,"setState")},M.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function X(){}X.prototype=M.prototype;function H(V,pe,Ue){this.props=V,this.context=pe,this.refs=T,this.updater=Ue||D}var q=H.prototype=new X;q.constructor=H,P(q,M.prototype),q.isPureReactComponent=!0;var J=Array.isArray;function G(){}var W={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function O(V,pe,Ue){var Fe=Ue.ref;return{$$typeof:o,type:V,key:pe,ref:Fe!==void 0?Fe:null,props:Ue}}function N(V,pe){return O(V.type,pe,V.props)}function j(V){return typeof V=="object"&&V!==null&&V.$$typeof===o}function te(V){var pe={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ue){return pe[Ue]})}var oe=/\/+/g;function Se(V,pe){return typeof V=="object"&&V!==null&&V.key!=null?te(""+V.key):pe.toString(36)}function ye(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(G,G):(V.status="pending",V.then(function(pe){V.status==="pending"&&(V.status="fulfilled",V.value=pe)},function(pe){V.status==="pending"&&(V.status="rejected",V.reason=pe)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function B(V,pe,Ue,Fe,et){var he=typeof V;(he==="undefined"||he==="boolean")&&(V=null);var ve=!1;if(V===null)ve=!0;else switch(he){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(V.$$typeof){case o:case e:ve=!0;break;case b:return ve=V._init,B(ve(V._payload),pe,Ue,Fe,et)}}if(ve)return et=et(V),ve=Fe===""?"."+Se(V,0):Fe,J(et)?(Ue="",ve!=null&&(Ue=ve.replace(oe,"$&/")+"/"),B(et,pe,Ue,"",function(ft){return ft})):et!=null&&(j(et)&&(et=N(et,Ue+(et.key==null||V&&V.key===et.key?"":(""+et.key).replace(oe,"$&/")+"/")+ve)),pe.push(et)),1;ve=0;var Xe=Fe===""?".":Fe+":";if(J(V))for(var st=0;st<V.length;st++)Fe=V[st],he=Xe+Se(Fe,st),ve+=B(Fe,pe,Ue,he,et);else if(st=A(V),typeof st=="function")for(V=st.call(V),st=0;!(Fe=V.next()).done;)Fe=Fe.value,he=Xe+Se(Fe,st++),ve+=B(Fe,pe,Ue,he,et);else if(he==="object"){if(typeof V.then=="function")return B(ye(V),pe,Ue,Fe,et);throw pe=String(V),Error("Objects are not valid as a React child (found: "+(pe==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":pe)+"). If you meant to render a collection of children, use an array instead.")}return ve}function $(V,pe,Ue){if(V==null)return V;var Fe=[],et=0;return B(V,Fe,"","",function(he){return pe.call(Ue,he,et++)}),Fe}function ie(V){if(V._status===-1){var pe=V._result;pe=pe(),pe.then(function(Ue){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ue)},function(Ue){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ue)}),V._status===-1&&(V._status=0,V._result=pe)}if(V._status===1)return V._result.default;throw V._result}var we=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(pe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},De={map:$,forEach:function(V,pe,Ue){$(V,function(){pe.apply(this,arguments)},Ue)},count:function(V){var pe=0;return $(V,function(){pe++}),pe},toArray:function(V){return $(V,function(pe){return pe})||[]},only:function(V){if(!j(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return Ut.Activity=v,Ut.Children=De,Ut.Component=M,Ut.Fragment=i,Ut.Profiler=l,Ut.PureComponent=H,Ut.StrictMode=r,Ut.Suspense=_,Ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Ut.__COMPILER_RUNTIME={__proto__:null,c:function(V){return W.H.useMemoCache(V)}},Ut.cache=function(V){return function(){return V.apply(null,arguments)}},Ut.cacheSignal=function(){return null},Ut.cloneElement=function(V,pe,Ue){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var Fe=P({},V.props),et=V.key;if(pe!=null)for(he in pe.key!==void 0&&(et=""+pe.key),pe)!fe.call(pe,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&pe.ref===void 0||(Fe[he]=pe[he]);var he=arguments.length-2;if(he===1)Fe.children=Ue;else if(1<he){for(var ve=Array(he),Xe=0;Xe<he;Xe++)ve[Xe]=arguments[Xe+2];Fe.children=ve}return O(V.type,et,Fe)},Ut.createContext=function(V){return V={$$typeof:p,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:f,_context:V},V},Ut.createElement=function(V,pe,Ue){var Fe,et={},he=null;if(pe!=null)for(Fe in pe.key!==void 0&&(he=""+pe.key),pe)fe.call(pe,Fe)&&Fe!=="key"&&Fe!=="__self"&&Fe!=="__source"&&(et[Fe]=pe[Fe]);var ve=arguments.length-2;if(ve===1)et.children=Ue;else if(1<ve){for(var Xe=Array(ve),st=0;st<ve;st++)Xe[st]=arguments[st+2];et.children=Xe}if(V&&V.defaultProps)for(Fe in ve=V.defaultProps,ve)et[Fe]===void 0&&(et[Fe]=ve[Fe]);return O(V,he,et)},Ut.createRef=function(){return{current:null}},Ut.forwardRef=function(V){return{$$typeof:m,render:V}},Ut.isValidElement=j,Ut.lazy=function(V){return{$$typeof:b,_payload:{_status:-1,_result:V},_init:ie}},Ut.memo=function(V,pe){return{$$typeof:g,type:V,compare:pe===void 0?null:pe}},Ut.startTransition=function(V){var pe=W.T,Ue={};W.T=Ue;try{var Fe=V(),et=W.S;et!==null&&et(Ue,Fe),typeof Fe=="object"&&Fe!==null&&typeof Fe.then=="function"&&Fe.then(G,we)}catch(he){we(he)}finally{pe!==null&&Ue.types!==null&&(pe.types=Ue.types),W.T=pe}},Ut.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Ut.use=function(V){return W.H.use(V)},Ut.useActionState=function(V,pe,Ue){return W.H.useActionState(V,pe,Ue)},Ut.useCallback=function(V,pe){return W.H.useCallback(V,pe)},Ut.useContext=function(V){return W.H.useContext(V)},Ut.useDebugValue=function(){},Ut.useDeferredValue=function(V,pe){return W.H.useDeferredValue(V,pe)},Ut.useEffect=function(V,pe){return W.H.useEffect(V,pe)},Ut.useEffectEvent=function(V){return W.H.useEffectEvent(V)},Ut.useId=function(){return W.H.useId()},Ut.useImperativeHandle=function(V,pe,Ue){return W.H.useImperativeHandle(V,pe,Ue)},Ut.useInsertionEffect=function(V,pe){return W.H.useInsertionEffect(V,pe)},Ut.useLayoutEffect=function(V,pe){return W.H.useLayoutEffect(V,pe)},Ut.useMemo=function(V,pe){return W.H.useMemo(V,pe)},Ut.useOptimistic=function(V,pe){return W.H.useOptimistic(V,pe)},Ut.useReducer=function(V,pe,Ue){return W.H.useReducer(V,pe,Ue)},Ut.useRef=function(V){return W.H.useRef(V)},Ut.useState=function(V){return W.H.useState(V)},Ut.useSyncExternalStore=function(V,pe,Ue){return W.H.useSyncExternalStore(V,pe,Ue)},Ut.useTransition=function(){return W.H.useTransition()},Ut.version="19.2.0",Ut}var hx;function Zp(){return hx||(hx=1,vd.exports=wy()),vd.exports}var ht=Zp(),yd={exports:{}},Fl={},Sd={exports:{}},bd={};var dx;function Ry(){return dx||(dx=1,(function(o){function e(B,$){var ie=B.length;B.push($);e:for(;0<ie;){var we=ie-1>>>1,De=B[we];if(0<l(De,$))B[we]=$,B[ie]=De,ie=we;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var $=B[0],ie=B.pop();if(ie!==$){B[0]=ie;e:for(var we=0,De=B.length,V=De>>>1;we<V;){var pe=2*(we+1)-1,Ue=B[pe],Fe=pe+1,et=B[Fe];if(0>l(Ue,ie))Fe<De&&0>l(et,Ue)?(B[we]=et,B[Fe]=ie,we=Fe):(B[we]=Ue,B[pe]=ie,we=pe);else if(Fe<De&&0>l(et,ie))B[we]=et,B[Fe]=ie,we=Fe;else break e}}return $}function l(B,$){var ie=B.sortIndex-$.sortIndex;return ie!==0?ie:B.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var p=Date,m=p.now();o.unstable_now=function(){return p.now()-m}}var _=[],g=[],b=1,v=null,E=3,A=!1,D=!1,P=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function q(B){for(var $=i(g);$!==null;){if($.callback===null)r(g);else if($.startTime<=B)r(g),$.sortIndex=$.expirationTime,e(_,$);else break;$=i(g)}}function J(B){if(P=!1,q(B),!D)if(i(_)!==null)D=!0,G||(G=!0,te());else{var $=i(g);$!==null&&ye(J,$.startTime-B)}}var G=!1,W=-1,fe=5,O=-1;function N(){return T?!0:!(o.unstable_now()-O<fe)}function j(){if(T=!1,G){var B=o.unstable_now();O=B;var $=!0;try{e:{D=!1,P&&(P=!1,X(W),W=-1),A=!0;var ie=E;try{t:{for(q(B),v=i(_);v!==null&&!(v.expirationTime>B&&N());){var we=v.callback;if(typeof we=="function"){v.callback=null,E=v.priorityLevel;var De=we(v.expirationTime<=B);if(B=o.unstable_now(),typeof De=="function"){v.callback=De,q(B),$=!0;break t}v===i(_)&&r(_),q(B)}else r(_);v=i(_)}if(v!==null)$=!0;else{var V=i(g);V!==null&&ye(J,V.startTime-B),$=!1}}break e}finally{v=null,E=ie,A=!1}$=void 0}}finally{$?te():G=!1}}}var te;if(typeof H=="function")te=function(){H(j)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Se=oe.port2;oe.port1.onmessage=j,te=function(){Se.postMessage(null)}}else te=function(){M(j,0)};function ye(B,$){W=M(function(){B(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(B){switch(E){case 1:case 2:case 3:var $=3;break;default:$=E}var ie=E;E=$;try{return B()}finally{E=ie}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ie=E;E=B;try{return $()}finally{E=ie}},o.unstable_scheduleCallback=function(B,$,ie){var we=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?we+ie:we):ie=we,B){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=ie+De,B={id:b++,callback:$,priorityLevel:B,startTime:ie,expirationTime:De,sortIndex:-1},ie>we?(B.sortIndex=ie,e(g,B),i(_)===null&&B===i(g)&&(P?(X(W),W=-1):P=!0,ye(J,ie-we))):(B.sortIndex=De,e(_,B),D||A||(D=!0,G||(G=!0,te()))),B},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(B){var $=E;return function(){var ie=E;E=$;try{return B.apply(this,arguments)}finally{E=ie}}}})(bd)),bd}var px;function Cy(){return px||(px=1,Sd.exports=Ry()),Sd.exports}var Md={exports:{}},ri={};var mx;function Dy(){if(mx)return ri;mx=1;var o=Zp();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function f(_,g,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:_,containerInfo:g,implementation:b}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ri.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ri.createPortal=function(_,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return f(_,g,null,b)},ri.flushSync=function(_){var g=p.T,b=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=g,r.p=b,r.d.f()}},ri.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},ri.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},ri.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var b=g.as,v=m(b,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:A}):b==="script"&&r.d.X(_,{crossOrigin:v,integrity:E,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ri.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=m(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(_)},ri.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,v=m(b,g.crossOrigin);r.d.L(_,b,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ri.preloadModule=function(_,g){if(typeof _=="string")if(g){var b=m(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(_)},ri.requestFormReset=function(_){r.d.r(_)},ri.unstable_batchedUpdates=function(_,g){return _(g)},ri.useFormState=function(_,g,b){return p.H.useFormState(_,g,b)},ri.useFormStatus=function(){return p.H.useHostTransitionStatus()},ri.version="19.2.0",ri}var gx;function Uy(){if(gx)return Md.exports;gx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Md.exports=Dy(),Md.exports}var xx;function Ly(){if(xx)return Fl;xx=1;var o=Cy(),e=Zp(),i=Uy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function p(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return _(u),t;if(h===s)return _(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=h;else{for(var y=!1,U=u.child;U;){if(U===a){y=!0,a=u,s=h;break}if(U===s){y=!0,s=u,a=h;break}U=U.sibling}if(!y){for(U=h.child;U;){if(U===a){y=!0,a=h,s=u;break}if(U===s){y=!0,s=h,a=u;break}U=U.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function b(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=b(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function Se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case J:return"Suspense";case G:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case H:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return n=t.displayName||null,n!==null?n:Se(t.type)||"Memo";case fe:n=t._payload,t=t._init;try{return Se(t(n))}catch{}}return null}var ye=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},we=[],De=-1;function V(t){return{current:t}}function pe(t){0>De||(t.current=we[De],we[De]=null,De--)}function Ue(t,n){De++,we[De]=t.current,t.current=n}var Fe=V(null),et=V(null),he=V(null),ve=V(null);function Xe(t,n){switch(Ue(he,n),Ue(et,t),Ue(Fe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Lg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Lg(n),t=Ng(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}pe(Fe),Ue(Fe,t)}function st(){pe(Fe),pe(et),pe(he)}function ft(t){t.memoizedState!==null&&Ue(ve,t);var n=Fe.current,a=Ng(n,t.type);n!==a&&(Ue(et,t),Ue(Fe,a))}function Et(t){et.current===t&&(pe(Fe),pe(et)),ve.current===t&&(pe(ve),Ul._currentValue=ie)}var rn,Lt;function Me(t){if(rn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);rn=n&&n[1]||"",Lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+t+Lt}var F=!1;function Be(t,n){if(!t||F)return"";F=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(_e){var de=_e}Reflect.construct(t,[],Ce)}else{try{Ce.call()}catch(_e){de=_e}t.call(Ce.prototype)}}else{try{throw Error()}catch(_e){de=_e}(Ce=t())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(_e){if(_e&&de&&typeof _e.stack=="string")return[_e.stack,de.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),y=h[0],U=h[1];if(y&&U){var Y=y.split(`
`),ue=U.split(`
`);for(u=s=0;s<Y.length&&!Y[s].includes("DetermineComponentFrameRoot");)s++;for(;u<ue.length&&!ue[u].includes("DetermineComponentFrameRoot");)u++;if(s===Y.length||u===ue.length)for(s=Y.length-1,u=ue.length-1;1<=s&&0<=u&&Y[s]!==ue[u];)u--;for(;1<=s&&0<=u;s--,u--)if(Y[s]!==ue[u]){if(s!==1||u!==1)do if(s--,u--,0>u||Y[s]!==ue[u]){var be=`
`+Y[s].replace(" at new "," at ");return t.displayName&&be.includes("<anonymous>")&&(be=be.replace("<anonymous>",t.displayName)),be}while(1<=s&&0<=u);break}}}finally{F=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Me(a):""}function tt(t,n){switch(t.tag){case 26:case 27:case 5:return Me(t.type);case 16:return Me("Lazy");case 13:return t.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Be(t.type,!1);case 11:return Be(t.type.render,!1);case 1:return Be(t.type,!0);case 31:return Me("Activity");default:return""}}function xt(t){try{var n="",a=null;do n+=tt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var We=Object.prototype.hasOwnProperty,Bt=o.unstable_scheduleCallback,He=o.unstable_cancelCallback,dt=o.unstable_shouldYield,I=o.unstable_requestPaint,R=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,Ee=o.unstable_ImmediatePriority,Ae=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,je=o.unstable_IdlePriority,vt=o.log,Ve=o.unstable_setDisableYieldValue,Ne=null,Pe=null;function lt(t){if(typeof vt=="function"&&Ve(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(Ne,t)}catch{}}var ct=Math.clz32?Math.clz32:Z,Ze=Math.log,Mt=Math.LN2;function Z(t){return t>>>=0,t===0?32:31-(Ze(t)/Mt|0)|0}var qe=256,Ge=262144,ke=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Re(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var U=s&134217727;return U!==0?(s=U&~h,s!==0?u=Le(s):(y&=U,y!==0?u=Le(y):a||(a=U&~t,a!==0&&(u=Le(a))))):(U=s&~h,U!==0?u=Le(U):y!==0?u=Le(y):a||(a=s&~t,a!==0&&(u=Le(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function it(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function wt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var t=ke;return ke<<=1,(ke&62914560)===0&&(ke=4194304),t}function Jt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Yn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,n,a,s,u,h){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var U=t.entanglements,Y=t.expirationTimes,ue=t.hiddenUpdates;for(a=y&~a;0<a;){var be=31-ct(a),Ce=1<<be;U[be]=0,Y[be]=-1;var de=ue[be];if(de!==null)for(ue[be]=null,be=0;be<de.length;be++){var _e=de[be];_e!==null&&(_e.lane&=-536870913)}a&=~Ce}s!==0&&Ts(t,s,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function Ts(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-ct(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Gr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-ct(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function kr(t,n){var a=n&-n;return a=(a&42)!==0?1:ci(a),(a&(t.suspendedLanes|n))!==0?0:a}function ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function w(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Sa(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:nx(t.type))}function Gt(t,n){var a=$.p;try{return $.p=t,n()}finally{$.p=a}}var ui=Math.random().toString(36).slice(2),En="__reactFiber$"+ui,yn="__reactProps$"+ui,ni="__reactContainer$"+ui,tr="__reactEvents$"+ui,Vo="__reactListeners$"+ui,Go="__reactHandles$"+ui,As="__reactResources$"+ui,ba="__reactMarker$"+ui;function Xr(t){delete t[En],delete t[yn],delete t[tr],delete t[Vo],delete t[Go]}function la(t){var n=t[En];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ni]||a[En]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Hg(t);t!==null;){if(a=t[En])return a;t=Hg(t)}return n}t=a,a=t.parentNode}return null}function L(t){if(t=t[En]||t[ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ee(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ge(t){var n=t[As];return n||(n=t[As]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function le(t){t[ba]=!0}var re=new Set,Ie={};function ze(t,n){Qe(t,n),Qe(t+"Capture",n)}function Qe(t,n){for(Ie[t]=n,t=0;t<n.length;t++)re.add(n[t])}var Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yt={},bt={};function rt(t){return We.call(bt,t)?!0:We.call(yt,t)?!1:Je.test(t)?bt[t]=!0:(yt[t]=!0,!1)}function Dt(t,n,a){if(rt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Yt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function $t(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function It(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,h=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function sn(t){if(!t._valueTracker){var n=It(t)?"checked":"value";t._valueTracker=pt(t,n,""+t[n])}}function Vt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=It(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function cn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oi=/[\n"\\]/g;function un(t){return t.replace(Oi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ji(t,n,a,s,u,h,y,U){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+kt(n)):t.value!==""+kt(n)&&(t.value=""+kt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,y,kt(n)):a!=null?Tn(t,y,kt(a)):s!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?t.name=""+kt(U):t.removeAttribute("name")}function Rt(t,n,a,s,u,h,y,U){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){sn(t);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,U||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=U?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),sn(t)}function Tn(t,n,a){n==="number"&&cn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Un(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pn(t,n,a){if(n!=null&&(n=""+kt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+kt(a):""}function Gn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ye(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=kt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),sn(t)}function Pi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var mi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ko(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||mi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xo(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ko(t,u,s)}else for(var h in n)n.hasOwnProperty(h)&&ko(t,h,n[h])}function ws(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),af=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rs(t){return af.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var Wo=null;function qo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,Ki=null;function Yo(t){var n=L(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ji(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[yn]||null;if(!u)throw Error(r(90));ji(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Vt(s)}break e;case"textarea":Pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Un(t,!!a.multiple,n,!1)}}}var Cs=!1;function $l(t,n,a){if(Cs)return t(n,a);Cs=!0;try{var s=t(n);return s}finally{if(Cs=!1,(nr!==null||Ki!==null)&&(jc(),nr&&(n=nr,t=Ki,Ki=nr=null,Yo(n),t)))for(n=0;n<t.length;n++)Yo(t[n])}}function Wr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=!1;if(Qi)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){jo=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{jo=!1}var Ji=null,Zo=null,Ds=null;function ec(){if(Ds)return Ds;var t,n=Zo,a=n.length,s,u="value"in Ji?Ji.value:Ji.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===u[h-s];s++);return Ds=u.slice(t,1<s?1-s:void 0)}function Us(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ls(){return!0}function tc(){return!1}function Ln(t){function n(a,s,u,h,y){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ls:tc,this.isPropagationStopped=tc,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),n}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qr=Ln(Ma),Yr=v({},Ma,{view:0,detail:0}),rf=Ln(Yr),Ko,Qo,jr,Ns=v({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jr&&(jr&&t.type==="mousemove"?(Ko=t.screenX-jr.screenX,Qo=t.screenY-jr.screenY):Qo=Ko=0,jr=t),Ko)},movementY:function(t){return"movementY"in t?t.movementY:Qo}}),nc=Ln(Ns),sf=v({},Ns,{dataTransfer:0}),of=Ln(sf),lf=v({},Yr,{relatedTarget:0}),Os=Ln(lf),Ps=v({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),cf=Ln(Ps),ca=v({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uf=Ln(ca),ff=v({},Ma,{data:0}),Fs=Ln(ff),ic={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jo(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=df[t])?!!n[t]:!1}function Zr(){return Jo}var pf=v({},Yr,{key:function(t){if(t.key){var n=ic[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zr,charCode:function(t){return t.type==="keypress"?Us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ac=Ln(pf),mf=v({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=Ln(mf),gf=v({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zr}),xf=Ln(gf),_f=v({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Ln(_f),yf=v({},Ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=Ln(yf),bf=v({},Ma,{newState:0,oldState:0}),Mf=Ln(bf),Ef=[9,13,27,32],$o=Qi&&"CompositionEvent"in window,Kr=null;Qi&&"documentMode"in document&&(Kr=document.documentMode);var Tf=Qi&&"TextEvent"in window&&!Kr,sc=Qi&&(!$o||Kr&&8<Kr&&11>=Kr),oc=" ",zs=!1;function lc(t,n){switch(t){case"keyup":return Ef.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function Af(t,n){switch(t){case"compositionend":return cc(n);case"keypress":return n.which!==32?null:(zs=!0,oc);case"textInput":return t=n.data,t===oc&&zs?null:t;default:return null}}function wf(t,n){if(ar)return t==="compositionend"||!$o&&lc(t,n)?(t=ec(),Ds=Zo=Ji=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sc&&n.locale!=="ko"?null:n.data;default:return null}}var Bs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Bs[t.type]:n==="textarea"}function fc(t,n,a,s){nr?Ki?Ki.push(s):Ki=[s]:nr=s,n=tu(n,"onChange"),0<n.length&&(a=new qr("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var rr=null,Qr=null;function Rf(t){Ag(t,0)}function Is(t){var n=ee(t);if(Vt(n))return t}function Hs(t,n){if(t==="change")return n}var hc=!1;if(Qi){var Ea;if(Qi){var el="oninput"in document;if(!el){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),el=typeof dc.oninput=="function"}Ea=el}else Ea=!1;hc=Ea&&(!document.documentMode||9<document.documentMode)}function pc(){rr&&(rr.detachEvent("onpropertychange",mc),Qr=rr=null)}function mc(t){if(t.propertyName==="value"&&Is(Qr)){var n=[];fc(n,Qr,t,qo(t)),$l(Rf,n)}}function Cf(t,n,a){t==="focusin"?(pc(),rr=n,Qr=a,rr.attachEvent("onpropertychange",mc)):t==="focusout"&&pc()}function Df(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Is(Qr)}function Uf(t,n){if(t==="click")return Is(n)}function Lf(t,n){if(t==="input"||t==="change")return Is(n)}function Nf(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:Nf;function Jr(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!We.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function gc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xc(t,n){var a=gc(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gc(a)}}function Fn(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fn(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tl(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=cn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=cn(t.document)}return n}function $r(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $i=Qi&&"documentMode"in document&&11>=document.documentMode,Ta=null,Vs=null,sr=null,or=!1;function nl(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;or||Ta==null||Ta!==cn(s)||(s=Ta,"selectionStart"in s&&$r(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),sr&&Jr(sr,s)||(sr=s,s=tu(Vs,"onSelect"),0<s.length&&(n=new qr("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ta)))}function ua(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var c={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},d={},x={};Qi&&(x=document.createElement("div").style,"AnimationEvent"in window||(delete c.animationend.animation,delete c.animationiteration.animation,delete c.animationstart.animation),"TransitionEvent"in window||delete c.transitionend.transition);function S(t){if(d[t])return d[t];if(!c[t])return t;var n=c[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in x)return d[t]=n[a];return t}var C=S("animationend"),z=S("animationiteration"),k=S("animationstart"),K=S("transitionrun"),xe=S("transitionstart"),Oe=S("transitioncancel"),Ke=S("transitionend"),ot=new Map,mt="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mt.push("scrollEnd");function nt(t,n){ot.set(t,n),ze(n,[t])}var Tt=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ot=[],bn=0,xn=0;function ii(){for(var t=bn,n=xn=bn=0;n<t;){var a=Ot[n];Ot[n++]=null;var s=Ot[n];Ot[n++]=null;var u=Ot[n];Ot[n++]=null;var h=Ot[n];if(Ot[n++]=null,s!==null&&u!==null){var y=s.pending;y===null?u.next=u:(u.next=y.next,y.next=u),s.pending=u}h!==0&&wa(a,u,h)}}function ai(t,n,a,s){Ot[bn++]=t,Ot[bn++]=n,Ot[bn++]=a,Ot[bn++]=s,xn|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Aa(t,n,a,s){return ai(t,n,a,s),An(t)}function jn(t,n){return ai(t,null,null,n),An(t)}function wa(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-ct(a),t=h.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),h):null}function An(t){if(50<El)throw El=0,Gh=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function sv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,n,a,s){return new sv(t,n,a,s)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ra(t,n){var a=t.alternate;return a===null?(a=Ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _c(t,n,a,s,u,h){var y=0;if(s=t,typeof t=="function")Of(t)&&(y=1);else if(typeof t=="string")y=fy(t,a,Fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=Ei(31,a,n,u),t.elementType=O,t.lanes=h,t;case P:return es(a.children,u,h,n);case T:y=8,u|=24;break;case M:return t=Ei(12,a,n,u|2),t.elementType=M,t.lanes=h,t;case J:return t=Ei(13,a,n,u),t.elementType=J,t.lanes=h,t;case G:return t=Ei(19,a,n,u),t.elementType=G,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:y=10;break e;case X:y=9;break e;case q:y=11;break e;case W:y=14;break e;case fe:y=16,s=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Ei(y,a,n,u),n.elementType=t,n.type=s,n.lanes=h,n}function es(t,n,a,s){return t=Ei(7,t,s,n),t.lanes=a,t}function Pf(t,n,a){return t=Ei(6,t,null,n),t.lanes=a,t}function cm(t){var n=Ei(18,null,null,0);return n.stateNode=t,n}function Ff(t,n,a){return n=Ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var um=new WeakMap;function Fi(t,n){if(typeof t=="object"&&t!==null){var a=um.get(t);return a!==void 0?a:(n={value:t,source:n,stack:xt(n)},um.set(t,n),n)}return{value:t,source:n,stack:xt(n)}}var ks=[],Xs=0,vc=null,il=0,zi=[],Bi=0,lr=null,fa=1,ha="";function Ca(t,n){ks[Xs++]=il,ks[Xs++]=vc,vc=t,il=n}function fm(t,n,a){zi[Bi++]=fa,zi[Bi++]=ha,zi[Bi++]=lr,lr=t;var s=fa;t=ha;var u=32-ct(s)-1;s&=~(1<<u),a+=1;var h=32-ct(n)+u;if(30<h){var y=u-u%5;h=(s&(1<<y)-1).toString(32),s>>=y,u-=y,fa=1<<32-ct(n)+u|a<<u|s,ha=h+t}else fa=1<<h|a<<u|s,ha=t}function zf(t){t.return!==null&&(Ca(t,1),fm(t,1,0))}function Bf(t){for(;t===vc;)vc=ks[--Xs],ks[Xs]=null,il=ks[--Xs],ks[Xs]=null;for(;t===lr;)lr=zi[--Bi],zi[Bi]=null,ha=zi[--Bi],zi[Bi]=null,fa=zi[--Bi],zi[Bi]=null}function hm(t,n){zi[Bi++]=fa,zi[Bi++]=ha,zi[Bi++]=lr,fa=n.id,ha=n.overflow,lr=t}var Qn=null,_n=null,Qt=!1,cr=null,Ii=!1,If=Error(r(519));function ur(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw al(Fi(n,t)),If}function dm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[En]=t,n[yn]=s,a){case"dialog":Wt("cancel",n),Wt("close",n);break;case"iframe":case"object":case"embed":Wt("load",n);break;case"video":case"audio":for(a=0;a<Al.length;a++)Wt(Al[a],n);break;case"source":Wt("error",n);break;case"img":case"image":case"link":Wt("error",n),Wt("load",n);break;case"details":Wt("toggle",n);break;case"input":Wt("invalid",n),Rt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Wt("invalid",n);break;case"textarea":Wt("invalid",n),Gn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Dg(n.textContent,a)?(s.popover!=null&&(Wt("beforetoggle",n),Wt("toggle",n)),s.onScroll!=null&&Wt("scroll",n),s.onScrollEnd!=null&&Wt("scrollend",n),s.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||ur(t,!0)}function pm(t){for(Qn=t.return;Qn;)switch(Qn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Qn=Qn.return}}function Ws(t){if(t!==Qn)return!1;if(!Qt)return pm(t),Qt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&_n&&ur(t),pm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));_n=Ig(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));_n=Ig(t)}else n===27?(n=_n,Er(t.type)?(t=ld,ld=null,_n=t):_n=n):_n=Qn?Vi(t.stateNode.nextSibling):null;return!0}function ts(){_n=Qn=null,Qt=!1}function Hf(){var t=cr;return t!==null&&(vi===null?vi=t:vi.push.apply(vi,t),cr=null),t}function al(t){cr===null?cr=[t]:cr.push(t)}var Vf=V(null),ns=null,Da=null;function fr(t,n,a){Ue(Vf,n._currentValue),n._currentValue=a}function Ua(t){t._currentValue=Vf.current,pe(Vf)}function Gf(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function kf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var U=h;h=u;for(var Y=0;Y<n.length;Y++)if(U.context===n[Y]){h.lanes|=a,U=h.alternate,U!==null&&(U.lanes|=a),Gf(h.return,a,t),s||(y=null);break e}h=U.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),Gf(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function qs(t,n,a,s){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var U=u.type;fi(u.pendingProps.value,y.value)||(t!==null?t.push(U):t=[U])}}else if(u===ve.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}u=u.return}t!==null&&kf(n,t,a,s),n.flags|=262144}function yc(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function is(t){ns=t,Da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Jn(t){return mm(ns,t)}function Sc(t,n){return ns===null&&is(t),mm(t,n)}function mm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Da===null){if(t===null)throw Error(r(308));Da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Da=Da.next=n;return a}var ov=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lv=o.unstable_scheduleCallback,cv=o.unstable_NormalPriority,zn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new ov,data:new Map,refCount:0}}function rl(t){t.refCount--,t.refCount===0&&lv(cv,function(){t.controller.abort()})}var sl=null,Wf=0,Ys=0,js=null;function uv(t,n){if(sl===null){var a=sl=[];Wf=0,Ys=jh(),js={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Wf++,n.then(gm,gm),n}function gm(){if(--Wf===0&&sl!==null){js!==null&&(js.status="fulfilled");var t=sl;sl=null,Ys=0,js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var xm=B.S;B.S=function(t,n){eg=R(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uv(t,n),xm!==null&&xm(t,n)};var as=V(null);function qf(){var t=as.current;return t!==null?t:gn.pooledCache}function bc(t,n){n===null?Ue(as,as.current):Ue(as,n.pool)}function _m(){var t=qf();return t===null?null:{parent:zn._currentValue,pool:t}}var Zs=Error(r(460)),Yf=Error(r(474)),Mc=Error(r(542)),Ec={then:function(){}};function vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ym(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bm(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=gn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bm(t),t}throw ss=n,Zs}}function rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ss=a,Zs):a}}var ss=null;function Sm(){if(ss===null)throw Error(r(459));var t=ss;return ss=null,t}function bm(t){if(t===Zs||t===Mc)throw Error(r(483))}var Ks=null,ol=0;function Tc(t){var n=ol;return ol+=1,Ks===null&&(Ks=[]),ym(Ks,t,n)}function ll(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ac(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Mm(t){function n(ne,Q){if(t){var ce=ne.deletions;ce===null?(ne.deletions=[Q],ne.flags|=16):ce.push(Q)}}function a(ne,Q){if(!t)return null;for(;Q!==null;)n(ne,Q),Q=Q.sibling;return null}function s(ne){for(var Q=new Map;ne!==null;)ne.key!==null?Q.set(ne.key,ne):Q.set(ne.index,ne),ne=ne.sibling;return Q}function u(ne,Q){return ne=Ra(ne,Q),ne.index=0,ne.sibling=null,ne}function h(ne,Q,ce){return ne.index=ce,t?(ce=ne.alternate,ce!==null?(ce=ce.index,ce<Q?(ne.flags|=67108866,Q):ce):(ne.flags|=67108866,Q)):(ne.flags|=1048576,Q)}function y(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function U(ne,Q,ce,Te){return Q===null||Q.tag!==6?(Q=Pf(ce,ne.mode,Te),Q.return=ne,Q):(Q=u(Q,ce),Q.return=ne,Q)}function Y(ne,Q,ce,Te){var St=ce.type;return St===P?be(ne,Q,ce.props.children,Te,ce.key):Q!==null&&(Q.elementType===St||typeof St=="object"&&St!==null&&St.$$typeof===fe&&rs(St)===Q.type)?(Q=u(Q,ce.props),ll(Q,ce),Q.return=ne,Q):(Q=_c(ce.type,ce.key,ce.props,null,ne.mode,Te),ll(Q,ce),Q.return=ne,Q)}function ue(ne,Q,ce,Te){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ce.containerInfo||Q.stateNode.implementation!==ce.implementation?(Q=Ff(ce,ne.mode,Te),Q.return=ne,Q):(Q=u(Q,ce.children||[]),Q.return=ne,Q)}function be(ne,Q,ce,Te,St){return Q===null||Q.tag!==7?(Q=es(ce,ne.mode,Te,St),Q.return=ne,Q):(Q=u(Q,ce),Q.return=ne,Q)}function Ce(ne,Q,ce){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Pf(""+Q,ne.mode,ce),Q.return=ne,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case A:return ce=_c(Q.type,Q.key,Q.props,null,ne.mode,ce),ll(ce,Q),ce.return=ne,ce;case D:return Q=Ff(Q,ne.mode,ce),Q.return=ne,Q;case fe:return Q=rs(Q),Ce(ne,Q,ce)}if(ye(Q)||te(Q))return Q=es(Q,ne.mode,ce,null),Q.return=ne,Q;if(typeof Q.then=="function")return Ce(ne,Tc(Q),ce);if(Q.$$typeof===H)return Ce(ne,Sc(ne,Q),ce);Ac(ne,Q)}return null}function de(ne,Q,ce,Te){var St=Q!==null?Q.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return St!==null?null:U(ne,Q,""+ce,Te);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case A:return ce.key===St?Y(ne,Q,ce,Te):null;case D:return ce.key===St?ue(ne,Q,ce,Te):null;case fe:return ce=rs(ce),de(ne,Q,ce,Te)}if(ye(ce)||te(ce))return St!==null?null:be(ne,Q,ce,Te,null);if(typeof ce.then=="function")return de(ne,Q,Tc(ce),Te);if(ce.$$typeof===H)return de(ne,Q,Sc(ne,ce),Te);Ac(ne,ce)}return null}function _e(ne,Q,ce,Te,St){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return ne=ne.get(ce)||null,U(Q,ne,""+Te,St);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case A:return ne=ne.get(Te.key===null?ce:Te.key)||null,Y(Q,ne,Te,St);case D:return ne=ne.get(Te.key===null?ce:Te.key)||null,ue(Q,ne,Te,St);case fe:return Te=rs(Te),_e(ne,Q,ce,Te,St)}if(ye(Te)||te(Te))return ne=ne.get(ce)||null,be(Q,ne,Te,St,null);if(typeof Te.then=="function")return _e(ne,Q,ce,Tc(Te),St);if(Te.$$typeof===H)return _e(ne,Q,ce,Sc(Q,Te),St);Ac(Q,Te)}return null}function ut(ne,Q,ce,Te){for(var St=null,en=null,gt=Q,Ft=Q=0,Zt=null;gt!==null&&Ft<ce.length;Ft++){gt.index>Ft?(Zt=gt,gt=null):Zt=gt.sibling;var tn=de(ne,gt,ce[Ft],Te);if(tn===null){gt===null&&(gt=Zt);break}t&&gt&&tn.alternate===null&&n(ne,gt),Q=h(tn,Q,Ft),en===null?St=tn:en.sibling=tn,en=tn,gt=Zt}if(Ft===ce.length)return a(ne,gt),Qt&&Ca(ne,Ft),St;if(gt===null){for(;Ft<ce.length;Ft++)gt=Ce(ne,ce[Ft],Te),gt!==null&&(Q=h(gt,Q,Ft),en===null?St=gt:en.sibling=gt,en=gt);return Qt&&Ca(ne,Ft),St}for(gt=s(gt);Ft<ce.length;Ft++)Zt=_e(gt,ne,Ft,ce[Ft],Te),Zt!==null&&(t&&Zt.alternate!==null&&gt.delete(Zt.key===null?Ft:Zt.key),Q=h(Zt,Q,Ft),en===null?St=Zt:en.sibling=Zt,en=Zt);return t&&gt.forEach(function(Cr){return n(ne,Cr)}),Qt&&Ca(ne,Ft),St}function At(ne,Q,ce,Te){if(ce==null)throw Error(r(151));for(var St=null,en=null,gt=Q,Ft=Q=0,Zt=null,tn=ce.next();gt!==null&&!tn.done;Ft++,tn=ce.next()){gt.index>Ft?(Zt=gt,gt=null):Zt=gt.sibling;var Cr=de(ne,gt,tn.value,Te);if(Cr===null){gt===null&&(gt=Zt);break}t&&gt&&Cr.alternate===null&&n(ne,gt),Q=h(Cr,Q,Ft),en===null?St=Cr:en.sibling=Cr,en=Cr,gt=Zt}if(tn.done)return a(ne,gt),Qt&&Ca(ne,Ft),St;if(gt===null){for(;!tn.done;Ft++,tn=ce.next())tn=Ce(ne,tn.value,Te),tn!==null&&(Q=h(tn,Q,Ft),en===null?St=tn:en.sibling=tn,en=tn);return Qt&&Ca(ne,Ft),St}for(gt=s(gt);!tn.done;Ft++,tn=ce.next())tn=_e(gt,ne,Ft,tn.value,Te),tn!==null&&(t&&tn.alternate!==null&&gt.delete(tn.key===null?Ft:tn.key),Q=h(tn,Q,Ft),en===null?St=tn:en.sibling=tn,en=tn);return t&&gt.forEach(function(by){return n(ne,by)}),Qt&&Ca(ne,Ft),St}function dn(ne,Q,ce,Te){if(typeof ce=="object"&&ce!==null&&ce.type===P&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case A:e:{for(var St=ce.key;Q!==null;){if(Q.key===St){if(St=ce.type,St===P){if(Q.tag===7){a(ne,Q.sibling),Te=u(Q,ce.props.children),Te.return=ne,ne=Te;break e}}else if(Q.elementType===St||typeof St=="object"&&St!==null&&St.$$typeof===fe&&rs(St)===Q.type){a(ne,Q.sibling),Te=u(Q,ce.props),ll(Te,ce),Te.return=ne,ne=Te;break e}a(ne,Q);break}else n(ne,Q);Q=Q.sibling}ce.type===P?(Te=es(ce.props.children,ne.mode,Te,ce.key),Te.return=ne,ne=Te):(Te=_c(ce.type,ce.key,ce.props,null,ne.mode,Te),ll(Te,ce),Te.return=ne,ne=Te)}return y(ne);case D:e:{for(St=ce.key;Q!==null;){if(Q.key===St)if(Q.tag===4&&Q.stateNode.containerInfo===ce.containerInfo&&Q.stateNode.implementation===ce.implementation){a(ne,Q.sibling),Te=u(Q,ce.children||[]),Te.return=ne,ne=Te;break e}else{a(ne,Q);break}else n(ne,Q);Q=Q.sibling}Te=Ff(ce,ne.mode,Te),Te.return=ne,ne=Te}return y(ne);case fe:return ce=rs(ce),dn(ne,Q,ce,Te)}if(ye(ce))return ut(ne,Q,ce,Te);if(te(ce)){if(St=te(ce),typeof St!="function")throw Error(r(150));return ce=St.call(ce),At(ne,Q,ce,Te)}if(typeof ce.then=="function")return dn(ne,Q,Tc(ce),Te);if(ce.$$typeof===H)return dn(ne,Q,Sc(ne,ce),Te);Ac(ne,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint"?(ce=""+ce,Q!==null&&Q.tag===6?(a(ne,Q.sibling),Te=u(Q,ce),Te.return=ne,ne=Te):(a(ne,Q),Te=Pf(ce,ne.mode,Te),Te.return=ne,ne=Te),y(ne)):a(ne,Q)}return function(ne,Q,ce,Te){try{ol=0;var St=dn(ne,Q,ce,Te);return Ks=null,St}catch(gt){if(gt===Zs||gt===Mc)throw gt;var en=Ei(29,gt,null,ne.mode);return en.lanes=Te,en.return=ne,en}finally{}}}var os=Mm(!0),Em=Mm(!1),hr=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function dr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(an&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=An(t),wa(t,null,a),n}return ai(t,s,n,a),An(t)}function cl(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Gr(t,a)}}function Kf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qf=!1;function ul(){if(Qf){var t=js;if(t!==null)throw t}}function fl(t,n,a,s){Qf=!1;var u=t.updateQueue;hr=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var Y=U,ue=Y.next;Y.next=null,y===null?h=ue:y.next=ue,y=Y;var be=t.alternate;be!==null&&(be=be.updateQueue,U=be.lastBaseUpdate,U!==y&&(U===null?be.firstBaseUpdate=ue:U.next=ue,be.lastBaseUpdate=Y))}if(h!==null){var Ce=u.baseState;y=0,be=ue=Y=null,U=h;do{var de=U.lane&-536870913,_e=de!==U.lane;if(_e?(jt&de)===de:(s&de)===de){de!==0&&de===Ys&&(Qf=!0),be!==null&&(be=be.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});e:{var ut=t,At=U;de=n;var dn=a;switch(At.tag){case 1:if(ut=At.payload,typeof ut=="function"){Ce=ut.call(dn,Ce,de);break e}Ce=ut;break e;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=At.payload,de=typeof ut=="function"?ut.call(dn,Ce,de):ut,de==null)break e;Ce=v({},Ce,de);break e;case 2:hr=!0}}de=U.callback,de!==null&&(t.flags|=64,_e&&(t.flags|=8192),_e=u.callbacks,_e===null?u.callbacks=[de]:_e.push(de))}else _e={lane:de,tag:U.tag,payload:U.payload,callback:U.callback,next:null},be===null?(ue=be=_e,Y=Ce):be=be.next=_e,y|=de;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,u.lastBaseUpdate=_e,u.shared.pending=null}}while(!0);be===null&&(Y=Ce),u.baseState=Y,u.firstBaseUpdate=ue,u.lastBaseUpdate=be,h===null&&(u.shared.lanes=0),vr|=y,t.lanes=y,t.memoizedState=Ce}}function Tm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Tm(a[t],n)}var Qs=V(null),wc=V(0);function wm(t,n){t=Ha,Ue(wc,t),Ue(Qs,n),Ha=t|n.baseLanes}function Jf(){Ue(wc,Ha),Ue(Qs,Qs.current)}function $f(){Ha=wc.current,pe(Qs),pe(wc)}var Ti=V(null),Hi=null;function mr(t){var n=t.alternate;Ue(Nn,Nn.current&1),Ue(Ti,t),Hi===null&&(n===null||Qs.current!==null||n.memoizedState!==null)&&(Hi=t)}function eh(t){Ue(Nn,Nn.current),Ue(Ti,t),Hi===null&&(Hi=t)}function Rm(t){t.tag===22?(Ue(Nn,Nn.current),Ue(Ti,t),Hi===null&&(Hi=t)):gr()}function gr(){Ue(Nn,Nn.current),Ue(Ti,Ti.current)}function Ai(t){pe(Ti),Hi===t&&(Hi=null),pe(Nn)}var Nn=V(0);function Rc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||od(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var La=0,Pt=null,fn=null,Bn=null,Cc=!1,Js=!1,ls=!1,Dc=0,hl=0,$s=null,hv=0;function wn(){throw Error(r(321))}function th(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function nh(t,n,a,s,u,h){return La=h,Pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?f0:xh,ls=!1,h=a(s,u),ls=!1,Js&&(h=Dm(n,a,s,u)),Cm(t),h}function Cm(t){B.H=ml;var n=fn!==null&&fn.next!==null;if(La=0,Bn=fn=Pt=null,Cc=!1,hl=0,$s=null,n)throw Error(r(300));t===null||In||(t=t.dependencies,t!==null&&yc(t)&&(In=!0))}function Dm(t,n,a,s){Pt=t;var u=0;do{if(Js&&($s=null),hl=0,Js=!1,25<=u)throw Error(r(301));if(u+=1,Bn=fn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=h0,h=n(a,s)}while(Js);return h}function dv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?dl(n):n,t=t.useState()[0],(fn!==null?fn.memoizedState:null)!==t&&(Pt.flags|=1024),n}function ih(){var t=Dc!==0;return Dc=0,t}function ah(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rh(t){if(Cc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cc=!1}La=0,Bn=fn=Pt=null,Js=!1,hl=Dc=0,$s=null}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?Pt.memoizedState=Bn=t:Bn=Bn.next=t,Bn}function On(){if(fn===null){var t=Pt.alternate;t=t!==null?t.memoizedState:null}else t=fn.next;var n=Bn===null?Pt.memoizedState:Bn.next;if(n!==null)Bn=n,fn=t;else{if(t===null)throw Pt.alternate===null?Error(r(467)):Error(r(310));fn=t,t={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},Bn===null?Pt.memoizedState=Bn=t:Bn=Bn.next=t}return Bn}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(t){var n=hl;return hl+=1,$s===null&&($s=[]),t=ym($s,t,n),n=Pt,(Bn===null?n.memoizedState:Bn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?f0:xh),t}function Lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dl(t);if(t.$$typeof===H)return Jn(t)}throw Error(r(438,String(t)))}function sh(t){var n=null,a=Pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Pt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Uc(),Pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=N;return n.index++,a}function Na(t,n){return typeof n=="function"?n(t):n}function Nc(t){var n=On();return oh(n,fn,t)}function oh(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,h=s.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,s.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var U=y=null,Y=null,ue=n,be=!1;do{var Ce=ue.lane&-536870913;if(Ce!==ue.lane?(jt&Ce)===Ce:(La&Ce)===Ce){var de=ue.revertLane;if(de===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),Ce===Ys&&(be=!0);else if((La&de)===de){ue=ue.next,de===Ys&&(be=!0);continue}else Ce={lane:0,revertLane:ue.revertLane,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},Y===null?(U=Y=Ce,y=h):Y=Y.next=Ce,Pt.lanes|=de,vr|=de;Ce=ue.action,ls&&a(h,Ce),h=ue.hasEagerState?ue.eagerState:a(h,Ce)}else de={lane:Ce,revertLane:ue.revertLane,gesture:ue.gesture,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},Y===null?(U=Y=de,y=h):Y=Y.next=de,Pt.lanes|=Ce,vr|=Ce;ue=ue.next}while(ue!==null&&ue!==n);if(Y===null?y=h:Y.next=U,!fi(h,t.memoizedState)&&(In=!0,be&&(a=js,a!==null)))throw a;t.memoizedState=h,t.baseState=y,t.baseQueue=Y,s.lastRenderedState=h}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function lh(t){var n=On(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);fi(h,n.memoizedState)||(In=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Um(t,n,a){var s=Pt,u=On(),h=Qt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!fi((fn||u).memoizedState,a);if(y&&(u.memoizedState=a,In=!0),u=u.queue,fh(Om.bind(null,s,u,t),[t]),u.getSnapshot!==n||y||Bn!==null&&Bn.memoizedState.tag&1){if(s.flags|=2048,eo(9,{destroy:void 0},Nm.bind(null,s,u,a,n),null),gn===null)throw Error(r(349));h||(La&127)!==0||Lm(s,n,a)}return a}function Lm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Pt.updateQueue,n===null?(n=Uc(),Pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,s){n.value=a,n.getSnapshot=s,Pm(n)&&Fm(t)}function Om(t,n,a){return a(function(){Pm(n)&&Fm(t)})}function Pm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function Fm(t){var n=jn(t,2);n!==null&&yi(n,t,2)}function ch(t){var n=hi();if(typeof t=="function"){var a=t;if(t=a(),ls){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},n}function zm(t,n,a,s){return t.baseState=a,oh(t,fn,typeof s=="function"?s:Na)}function pv(t,n,a,s,u){if(Fc(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};B.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Bm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Bm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var h=B.T,y={};B.T=y;try{var U=a(u,s),Y=B.S;Y!==null&&Y(y,U),Im(t,n,U)}catch(ue){uh(t,n,ue)}finally{h!==null&&y.types!==null&&(h.types=y.types),B.T=h}}else try{h=a(u,s),Im(t,n,h)}catch(ue){uh(t,n,ue)}}function Im(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Hm(t,n,s)},function(s){return uh(t,n,s)}):Hm(t,n,a)}function Hm(t,n,a){n.status="fulfilled",n.value=a,Vm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Bm(t,a)))}function uh(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Vm(n),n=n.next;while(n!==s)}t.action=null}function Vm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Gm(t,n){return n}function km(t,n){if(Qt){var a=gn.formState;if(a!==null){e:{var s=Pt;if(Qt){if(_n){t:{for(var u=_n,h=Ii;u.nodeType!==8;){if(!h){u=null;break t}if(u=Vi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){_n=Vi(u.nextSibling),s=u.data==="F!";break e}}ur(s)}s=!1}s&&(n=a[0])}}return a=hi(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:n},a.queue=s,a=l0.bind(null,Pt,s),s.dispatch=a,s=ch(!1),h=gh.bind(null,Pt,!1,s.queue),s=hi(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=pv.bind(null,Pt,u,h,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Xm(t){var n=On();return Wm(n,fn,t)}function Wm(t,n,a){if(n=oh(t,n,Gm)[0],t=Nc(Na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=dl(n)}catch(y){throw y===Zs?Mc:y}else s=n;n=On();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Pt.flags|=2048,eo(9,{destroy:void 0},mv.bind(null,u,a),null)),[s,h,t]}function mv(t,n){t.action=n}function qm(t){var n=On(),a=fn;if(a!==null)return Wm(n,a,t);On(),n=n.memoizedState,a=On();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function eo(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=Pt.updateQueue,n===null&&(n=Uc(),Pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Ym(){return On().memoizedState}function Oc(t,n,a,s){var u=hi();Pt.flags|=t,u.memoizedState=eo(1|n,{destroy:void 0},a,s===void 0?null:s)}function Pc(t,n,a,s){var u=On();s=s===void 0?null:s;var h=u.memoizedState.inst;fn!==null&&s!==null&&th(s,fn.memoizedState.deps)?u.memoizedState=eo(n,h,a,s):(Pt.flags|=t,u.memoizedState=eo(1|n,h,a,s))}function jm(t,n){Oc(8390656,8,t,n)}function fh(t,n){Pc(2048,8,t,n)}function gv(t){Pt.flags|=4;var n=Pt.updateQueue;if(n===null)n=Uc(),Pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Zm(t){var n=On().memoizedState;return gv({ref:n,nextImpl:t}),function(){if((an&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Km(t,n){return Pc(4,2,t,n)}function Qm(t,n){return Pc(4,4,t,n)}function Jm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $m(t,n,a){a=a!=null?a.concat([t]):null,Pc(4,4,Jm.bind(null,n,t),a)}function hh(){}function e0(t,n){var a=On();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&th(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function t0(t,n){var a=On();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&th(n,s[1]))return s[0];if(s=t(),ls){lt(!0);try{t()}finally{lt(!1)}}return a.memoizedState=[s,n],s}function dh(t,n,a){return a===void 0||(La&1073741824)!==0&&(jt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ng(),Pt.lanes|=t,vr|=t,a)}function n0(t,n,a,s){return fi(a,n)?a:Qs.current!==null?(t=dh(t,a,s),fi(t,n)||(In=!0),t):(La&42)===0||(La&1073741824)!==0&&(jt&261930)===0?(In=!0,t.memoizedState=a):(t=ng(),Pt.lanes|=t,vr|=t,n)}function i0(t,n,a,s,u){var h=$.p;$.p=h!==0&&8>h?h:8;var y=B.T,U={};B.T=U,gh(t,!1,n,a);try{var Y=u(),ue=B.S;if(ue!==null&&ue(U,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var be=fv(Y,s);pl(t,n,be,Ci(t))}else pl(t,n,s,Ci(t))}catch(Ce){pl(t,n,{then:function(){},status:"rejected",reason:Ce},Ci())}finally{$.p=h,y!==null&&U.types!==null&&(y.types=U.types),B.T=y}}function xv(){}function ph(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=a0(t).queue;i0(t,u,n,ie,a===null?xv:function(){return r0(t),a(s)})}function a0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function r0(t){var n=a0(t);n.next===null&&(n=t.alternate.memoizedState),pl(t,n.next.queue,{},Ci())}function mh(){return Jn(Ul)}function s0(){return On().memoizedState}function o0(){return On().memoizedState}function _v(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ci();t=dr(a);var s=pr(n,t,a);s!==null&&(yi(s,n,a),cl(s,n,a)),n={cache:Xf()},t.payload=n;return}n=n.return}}function vv(t,n,a){var s=Ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fc(t)?c0(n,a):(a=Aa(t,n,a,s),a!==null&&(yi(a,t,s),u0(a,n,s)))}function l0(t,n,a){var s=Ci();pl(t,n,a,s)}function pl(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fc(t))c0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,U=h(y,a);if(u.hasEagerState=!0,u.eagerState=U,fi(U,y))return ai(t,n,u,0),gn===null&&ii(),!1}catch{}finally{}if(a=Aa(t,n,u,s),a!==null)return yi(a,t,s),u0(a,n,s),!0}return!1}function gh(t,n,a,s){if(s={lane:2,revertLane:jh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Fc(t)){if(n)throw Error(r(479))}else n=Aa(t,a,s,2),n!==null&&yi(n,t,2)}function Fc(t){var n=t.alternate;return t===Pt||n!==null&&n===Pt}function c0(t,n){Js=Cc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function u0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Gr(t,a)}}var ml={readContext:Jn,use:Lc,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn};ml.useEffectEvent=wn;var f0={readContext:Jn,use:Lc,useCallback:function(t,n){return hi().memoizedState=[t,n===void 0?null:n],t},useContext:Jn,useEffect:jm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Oc(4194308,4,Jm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Oc(4194308,4,t,n)},useInsertionEffect:function(t,n){Oc(4,2,t,n)},useMemo:function(t,n){var a=hi();n=n===void 0?null:n;var s=t();if(ls){lt(!0);try{t()}finally{lt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=hi();if(a!==void 0){var u=a(n);if(ls){lt(!0);try{a(n)}finally{lt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=vv.bind(null,Pt,t),[s.memoizedState,t]},useRef:function(t){var n=hi();return t={current:t},n.memoizedState=t},useState:function(t){t=ch(t);var n=t.queue,a=l0.bind(null,Pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hh,useDeferredValue:function(t,n){var a=hi();return dh(a,t,n)},useTransition:function(){var t=ch(!1);return t=i0.bind(null,Pt,t.queue,!0,!1),hi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Pt,u=hi();if(Qt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),gn===null)throw Error(r(349));(jt&127)!==0||Lm(s,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,jm(Om.bind(null,s,h,t),[t]),s.flags|=2048,eo(9,{destroy:void 0},Nm.bind(null,s,h,a,n),null),a},useId:function(){var t=hi(),n=gn.identifierPrefix;if(Qt){var a=ha,s=fa;a=(s&~(1<<32-ct(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mh,useFormState:km,useActionState:km,useOptimistic:function(t){var n=hi();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gh.bind(null,Pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:sh,useCacheRefresh:function(){return hi().memoizedState=_v.bind(null,Pt)},useEffectEvent:function(t){var n=hi(),a={impl:t};return n.memoizedState=a,function(){if((an&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},xh={readContext:Jn,use:Lc,useCallback:e0,useContext:Jn,useEffect:fh,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:t0,useReducer:Nc,useRef:Ym,useState:function(){return Nc(Na)},useDebugValue:hh,useDeferredValue:function(t,n){var a=On();return n0(a,fn.memoizedState,t,n)},useTransition:function(){var t=Nc(Na)[0],n=On().memoizedState;return[typeof t=="boolean"?t:dl(t),n]},useSyncExternalStore:Um,useId:s0,useHostTransitionStatus:mh,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=On();return zm(a,fn,t,n)},useMemoCache:sh,useCacheRefresh:o0};xh.useEffectEvent=Zm;var h0={readContext:Jn,use:Lc,useCallback:e0,useContext:Jn,useEffect:fh,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:t0,useReducer:lh,useRef:Ym,useState:function(){return lh(Na)},useDebugValue:hh,useDeferredValue:function(t,n){var a=On();return fn===null?dh(a,t,n):n0(a,fn.memoizedState,t,n)},useTransition:function(){var t=lh(Na)[0],n=On().memoizedState;return[typeof t=="boolean"?t:dl(t),n]},useSyncExternalStore:Um,useId:s0,useHostTransitionStatus:mh,useFormState:qm,useActionState:qm,useOptimistic:function(t,n){var a=On();return fn!==null?zm(a,fn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sh,useCacheRefresh:o0};h0.useEffectEvent=Zm;function _h(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Ci(),u=dr(s);u.payload=n,a!=null&&(u.callback=a),n=pr(t,u,s),n!==null&&(yi(n,t,s),cl(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Ci(),u=dr(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pr(t,u,s),n!==null&&(yi(n,t,s),cl(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ci(),s=dr(a);s.tag=2,n!=null&&(s.callback=n),n=pr(t,s,a),n!==null&&(yi(n,t,a),cl(n,t,a))}};function d0(t,n,a,s,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,y):n.prototype&&n.prototype.isPureReactComponent?!Jr(a,s)||!Jr(u,h):!0}function p0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&vh.enqueueReplaceState(n,n.state,null)}function cs(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function m0(t){Tt(t)}function g0(t){console.error(t)}function x0(t){Tt(t)}function zc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function _0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yh(t,n,a){return a=dr(a),a.tag=3,a.payload={element:null},a.callback=function(){zc(t,n)},a}function v0(t){return t=dr(t),t.tag=3,t}function y0(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;t.payload=function(){return u(h)},t.callback=function(){_0(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){_0(n,a,s),typeof u!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var U=s.stack;this.componentDidCatch(s.value,{componentStack:U!==null?U:""})})}function yv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,u,!0),a=Ti.current,a!==null){switch(a.tag){case 31:case 13:return Hi===null?Zc():a.alternate===null&&Rn===0&&(Rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Wh(t,s,u)),!1;case 22:return a.flags|=65536,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Wh(t,s,u)),!1}throw Error(r(435,a.tag))}return Wh(t,s,u),Zc(),!1}if(Qt)return n=Ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==If&&(t=Error(r(422),{cause:s}),al(Fi(t,a)))):(s!==If&&(n=Error(r(423),{cause:s}),al(Fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Fi(s,a),u=yh(t.stateNode,s,u),Kf(t,u),Rn!==4&&(Rn=2)),!1;var h=Error(r(520),{cause:s});if(h=Fi(h,a),Ml===null?Ml=[h]:Ml.push(h),Rn!==4&&(Rn=2),n===null)return!0;s=Fi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yh(a.stateNode,s,t),Kf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yr===null||!yr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=v0(u),y0(u,t,a,s),Kf(a,u),!1}a=a.return}while(a!==null);return!1}var Sh=Error(r(461)),In=!1;function $n(t,n,a,s){n.child=t===null?Em(n,null,a,s):os(n,t.child,a,s)}function S0(t,n,a,s,u){a=a.render;var h=n.ref;if("ref"in s){var y={};for(var U in s)U!=="ref"&&(y[U]=s[U])}else y=s;return is(n),s=nh(t,n,a,y,h,u),U=ih(),t!==null&&!In?(ah(t,n,u),Oa(t,n,u)):(Qt&&U&&zf(n),n.flags|=1,$n(t,n,s,u),n.child)}function b0(t,n,a,s,u){if(t===null){var h=a.type;return typeof h=="function"&&!Of(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,M0(t,n,h,s,u)):(t=_c(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Ch(t,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(y,s)&&t.ref===n.ref)return Oa(t,n,u)}return n.flags|=1,t=Ra(h,s),t.ref=n.ref,t.return=n,n.child=t}function M0(t,n,a,s,u){if(t!==null){var h=t.memoizedProps;if(Jr(h,s)&&t.ref===n.ref)if(In=!1,n.pendingProps=s=h,Ch(t,u))(t.flags&131072)!==0&&(In=!0);else return n.lanes=t.lanes,Oa(t,n,u)}return bh(t,n,a,s,u)}function E0(t,n,a,s){var u=s.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~h}else s=0,n.child=null;return T0(t,n,h,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bc(n,h!==null?h.cachePool:null),h!==null?wm(n,h):Jf(),Rm(n);else return s=n.lanes=536870912,T0(t,n,h!==null?h.baseLanes|a:a,a,s)}else h!==null?(bc(n,h.cachePool),wm(n,h),gr(),n.memoizedState=null):(t!==null&&bc(n,null),Jf(),gr());return $n(t,n,u,a),n.child}function gl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function T0(t,n,a,s,u){var h=qf();return h=h===null?null:{parent:zn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&bc(n,null),Jf(),Rm(n),t!==null&&qs(t,n,s,!0),n.childLanes=u,null}function Bc(t,n){return n=Hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function A0(t,n,a){return os(n,t.child,null,a),t=Bc(n,n.pendingProps),t.flags|=2,Ai(n),n.memoizedState=null,t}function Sv(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Qt){if(s.mode==="hidden")return t=Bc(n,s),n.lanes=536870912,gl(null,t);if(eh(n),(t=_n)?(t=Bg(t,Ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:lr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,Qn=n,_n=null)):t=null,t===null)throw ur(n);return n.lanes=536870912,null}return Bc(n,s)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(eh(n),u)if(n.flags&256)n.flags&=-257,n=A0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(In||qs(t,n,a,!1),u=(a&t.childLanes)!==0,In||u){if(s=gn,s!==null&&(y=kr(s,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,jn(t,y),yi(s,t,y),Sh;Zc(),n=A0(t,n,a)}else t=h.treeContext,_n=Vi(y.nextSibling),Qn=n,Qt=!0,cr=null,Ii=!1,t!==null&&hm(n,t),n=Bc(n,s),n.flags|=4096;return n}return t=Ra(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ic(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bh(t,n,a,s,u){return is(n),a=nh(t,n,a,s,void 0,u),s=ih(),t!==null&&!In?(ah(t,n,u),Oa(t,n,u)):(Qt&&s&&zf(n),n.flags|=1,$n(t,n,a,u),n.child)}function w0(t,n,a,s,u,h){return is(n),n.updateQueue=null,a=Dm(n,s,a,u),Cm(t),s=ih(),t!==null&&!In?(ah(t,n,h),Oa(t,n,h)):(Qt&&s&&zf(n),n.flags|=1,$n(t,n,a,h),n.child)}function R0(t,n,a,s,u){if(is(n),n.stateNode===null){var h=Gs,y=a.contextType;typeof y=="object"&&y!==null&&(h=Jn(y)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=vh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},jf(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Jn(y):Gs,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(_h(n,a,y,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&vh.enqueueReplaceState(h,h.state,null),fl(n,s,h,u),ul(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var U=n.memoizedProps,Y=cs(a,U);h.props=Y;var ue=h.context,be=a.contextType;y=Gs,typeof be=="object"&&be!==null&&(y=Jn(be));var Ce=a.getDerivedStateFromProps;be=typeof Ce=="function"||typeof h.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,be||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(U||ue!==y)&&p0(n,h,s,y),hr=!1;var de=n.memoizedState;h.state=de,fl(n,s,h,u),ul(),ue=n.memoizedState,U||de!==ue||hr?(typeof Ce=="function"&&(_h(n,a,Ce,s),ue=n.memoizedState),(Y=hr||d0(n,a,Y,s,de,ue,y))?(be||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ue),h.props=s,h.state=ue,h.context=y,s=Y):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Zf(t,n),y=n.memoizedProps,be=cs(a,y),h.props=be,Ce=n.pendingProps,de=h.context,ue=a.contextType,Y=Gs,typeof ue=="object"&&ue!==null&&(Y=Jn(ue)),U=a.getDerivedStateFromProps,(ue=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==Ce||de!==Y)&&p0(n,h,s,Y),hr=!1,de=n.memoizedState,h.state=de,fl(n,s,h,u),ul();var _e=n.memoizedState;y!==Ce||de!==_e||hr||t!==null&&t.dependencies!==null&&yc(t.dependencies)?(typeof U=="function"&&(_h(n,a,U,s),_e=n.memoizedState),(be=hr||d0(n,a,be,s,de,_e,Y)||t!==null&&t.dependencies!==null&&yc(t.dependencies))?(ue||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,_e,Y),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,_e,Y)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=_e),h.props=s,h.state=_e,h.context=Y,s=be):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,Ic(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=os(n,t.child,null,u),n.child=os(n,null,a,u)):$n(t,n,a,u),n.memoizedState=h.state,t=n.child):t=Oa(t,n,u),t}function C0(t,n,a,s){return ts(),n.flags|=256,$n(t,n,a,s),n.child}var Mh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eh(t){return{baseLanes:t,cachePool:_m()}}function Th(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Ri),t}function D0(t,n,a){var s=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Qt){if(u?mr(n):gr(),(t=_n)?(t=Bg(t,Ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:lr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,Qn=n,_n=null)):t=null,t===null)throw ur(n);return od(t)?n.lanes=32:n.lanes=536870912,null}var U=s.children;return s=s.fallback,u?(gr(),u=n.mode,U=Hc({mode:"hidden",children:U},u),s=es(s,u,a,null),U.return=n,s.return=n,U.sibling=s,n.child=U,s=n.child,s.memoizedState=Eh(a),s.childLanes=Th(t,y,a),n.memoizedState=Mh,gl(null,s)):(mr(n),Ah(n,U))}var Y=t.memoizedState;if(Y!==null&&(U=Y.dehydrated,U!==null)){if(h)n.flags&256?(mr(n),n.flags&=-257,n=wh(t,n,a)):n.memoizedState!==null?(gr(),n.child=t.child,n.flags|=128,n=null):(gr(),U=s.fallback,u=n.mode,s=Hc({mode:"visible",children:s.children},u),U=es(U,u,a,null),U.flags|=2,s.return=n,U.return=n,s.sibling=U,n.child=s,os(n,t.child,null,a),s=n.child,s.memoizedState=Eh(a),s.childLanes=Th(t,y,a),n.memoizedState=Mh,n=gl(null,s));else if(mr(n),od(U)){if(y=U.nextSibling&&U.nextSibling.dataset,y)var ue=y.dgst;y=ue,s=Error(r(419)),s.stack="",s.digest=y,al({value:s,source:null,stack:null}),n=wh(t,n,a)}else if(In||qs(t,n,a,!1),y=(a&t.childLanes)!==0,In||y){if(y=gn,y!==null&&(s=kr(y,a),s!==0&&s!==Y.retryLane))throw Y.retryLane=s,jn(t,s),yi(y,t,s),Sh;sd(U)||Zc(),n=wh(t,n,a)}else sd(U)?(n.flags|=192,n.child=t.child,n=null):(t=Y.treeContext,_n=Vi(U.nextSibling),Qn=n,Qt=!0,cr=null,Ii=!1,t!==null&&hm(n,t),n=Ah(n,s.children),n.flags|=4096);return n}return u?(gr(),U=s.fallback,u=n.mode,Y=t.child,ue=Y.sibling,s=Ra(Y,{mode:"hidden",children:s.children}),s.subtreeFlags=Y.subtreeFlags&65011712,ue!==null?U=Ra(ue,U):(U=es(U,u,a,null),U.flags|=2),U.return=n,s.return=n,s.sibling=U,n.child=s,gl(null,s),s=n.child,U=t.child.memoizedState,U===null?U=Eh(a):(u=U.cachePool,u!==null?(Y=zn._currentValue,u=u.parent!==Y?{parent:Y,pool:Y}:u):u=_m(),U={baseLanes:U.baseLanes|a,cachePool:u}),s.memoizedState=U,s.childLanes=Th(t,y,a),n.memoizedState=Mh,gl(t.child,s)):(mr(n),a=t.child,t=a.sibling,a=Ra(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Ah(t,n){return n=Hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hc(t,n){return t=Ei(22,t,null,n),t.lanes=0,t}function wh(t,n,a){return os(n,t.child,null,a),t=Ah(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function U0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Gf(t.return,n,a)}function Rh(t,n,a,s,u,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function L0(t,n,a){var s=n.pendingProps,u=s.revealOrder,h=s.tail;s=s.children;var y=Nn.current,U=(y&2)!==0;if(U?(y=y&1|2,n.flags|=128):y&=1,Ue(Nn,y),$n(t,n,s,a),s=Qt?il:0,!U&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,a,n);else if(t.tag===19)U0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Rc(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rh(n,!1,u,a,h,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Rc(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Rh(n,!0,a,null,h,s);break;case"together":Rh(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),vr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ch(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yc(t)))}function bv(t,n,a){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),fr(n,zn,t.memoizedState.cache),ts();break;case 27:case 5:ft(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:fr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,eh(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(mr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?D0(t,n,a):(mr(n),t=Oa(t,n,a),t!==null?t.sibling:null);mr(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qs(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return L0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ue(Nn,Nn.current),s)break;return null;case 22:return n.lanes=0,E0(t,n,a,n.pendingProps);case 24:fr(n,zn,t.memoizedState.cache)}return Oa(t,n,a)}function N0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)In=!0;else{if(!Ch(t,a)&&(n.flags&128)===0)return In=!1,bv(t,n,a);In=(t.flags&131072)!==0}else In=!1,Qt&&(n.flags&1048576)!==0&&fm(n,il,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=rs(n.elementType),n.type=t,typeof t=="function")Of(t)?(s=cs(t,s),n.tag=1,n=R0(null,n,t,s,a)):(n.tag=0,n=bh(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===q){n.tag=11,n=S0(null,n,t,s,a);break e}else if(u===W){n.tag=14,n=b0(null,n,t,s,a);break e}}throw n=Se(t)||t,Error(r(306,n,""))}}return n;case 0:return bh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=cs(s,n.pendingProps),R0(t,n,s,u,a);case 3:e:{if(Xe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var h=n.memoizedState;u=h.element,Zf(t,n),fl(n,s,null,a);var y=n.memoizedState;if(s=y.cache,fr(n,zn,s),s!==h.cache&&kf(n,[zn],a,!0),ul(),s=y.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=C0(t,n,s,a);break e}else if(s!==u){u=Fi(Error(r(424)),n),al(u),n=C0(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_n=Vi(t.firstChild),Qn=n,Qt=!0,cr=null,Ii=!0,a=Em(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ts(),s===u){n=Oa(t,n,a);break e}$n(t,n,s,a)}n=n.child}return n;case 26:return Ic(t,n),t===null?(a=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Qt||(a=n.type,t=n.pendingProps,s=nu(he.current).createElement(a),s[En]=n,s[yn]=t,ei(s,a,t),le(s),n.stateNode=s):n.memoizedState=Xg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ft(n),t===null&&Qt&&(s=n.stateNode=Vg(n.type,n.pendingProps,he.current),Qn=n,Ii=!0,u=_n,Er(n.type)?(ld=u,_n=Vi(s.firstChild)):_n=u),$n(t,n,n.pendingProps.children,a),Ic(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Qt&&((u=s=_n)&&(s=Jv(s,n.type,n.pendingProps,Ii),s!==null?(n.stateNode=s,Qn=n,_n=Vi(s.firstChild),Ii=!1,u=!0):u=!1),u||ur(n)),ft(n),u=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,s=h.children,id(u,h)?s=null:y!==null&&id(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=nh(t,n,dv,null,null,a),Ul._currentValue=u),Ic(t,n),$n(t,n,s,a),n.child;case 6:return t===null&&Qt&&((t=a=_n)&&(a=$v(a,n.pendingProps,Ii),a!==null?(n.stateNode=a,Qn=n,_n=null,t=!0):t=!1),t||ur(n)),null;case 13:return D0(t,n,a);case 4:return Xe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=os(n,null,s,a):$n(t,n,s,a),n.child;case 11:return S0(t,n,n.type,n.pendingProps,a);case 7:return $n(t,n,n.pendingProps,a),n.child;case 8:return $n(t,n,n.pendingProps.children,a),n.child;case 12:return $n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fr(n,n.type,s.value),$n(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,is(n),u=Jn(u),s=s(u),n.flags|=1,$n(t,n,s,a),n.child;case 14:return b0(t,n,n.type,n.pendingProps,a);case 15:return M0(t,n,n.type,n.pendingProps,a);case 19:return L0(t,n,a);case 31:return Sv(t,n,a);case 22:return E0(t,n,a,n.pendingProps);case 24:return is(n),s=Jn(zn),t===null?(u=qf(),u===null&&(u=gn,h=Xf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:s,cache:u},jf(n),fr(n,zn,u)):((t.lanes&a)!==0&&(Zf(t,n),fl(n,null,null,a),ul()),u=t.memoizedState,h=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fr(n,zn,s)):(s=h.cache,fr(n,zn,s),s!==u.cache&&kf(n,[zn],a,!0))),$n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Pa(t){t.flags|=4}function Dh(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(sg())t.flags|=8192;else throw ss=Ec,Yf}else t.flags&=-16777217}function O0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zg(n))if(sg())t.flags|=8192;else throw ss=Ec,Yf}function Vc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?at():536870912,t.lanes|=n,ao|=n)}function xl(t,n){if(!Qt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function vn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Mv(t,n,a){var s=n.pendingProps;switch(Bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ua(zn),st(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?Pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hf())),vn(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(Pa(n),h!==null?(vn(n),O0(n,h)):(vn(n),Dh(n,u,null,s,a))):h?h!==t.memoizedState?(Pa(n),vn(n),O0(n,h)):(vn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Pa(n),vn(n),Dh(n,u,t,s,a)),null;case 27:if(Et(n),a=he.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return vn(n),null}t=Fe.current,Ws(n)?dm(n):(t=Vg(u,s,a),n.stateNode=t,Pa(n))}return vn(n),null;case 5:if(Et(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return vn(n),null}if(h=Fe.current,Ws(n))dm(n);else{var y=nu(he.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof s.is=="string"?y.createElement("select",{is:s.is}):y.createElement("select"),s.multiple?h.multiple=!0:s.size&&(h.size=s.size);break;default:h=typeof s.is=="string"?y.createElement(u,{is:s.is}):y.createElement(u)}}h[En]=n,h[yn]=s;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;e:switch(ei(h,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Pa(n)}}return vn(n),Dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=he.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Qn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[En]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Dg(t.nodeValue,a)),t||ur(n,!0)}else t=nu(t).createTextNode(s),t[En]=n,n.stateNode=t}return vn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ws(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[En]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),t=!1}else a=Hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Ai(n),n):(Ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return vn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ws(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[En]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=Hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ai(n),n):(Ai(n),null)}return Ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),h=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Vc(n,n.updateQueue),vn(n),null);case 4:return st(),t===null&&Jh(n.stateNode.containerInfo),vn(n),null;case 10:return Ua(n.type),vn(n),null;case 19:if(pe(Nn),s=n.memoizedState,s===null)return vn(n),null;if(u=(n.flags&128)!==0,h=s.rendering,h===null)if(u)xl(s,!1);else{if(Rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Rc(t),h!==null){for(n.flags|=128,xl(s,!1),t=h.updateQueue,n.updateQueue=t,Vc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lm(a,t),a=a.sibling;return Ue(Nn,Nn.current&1|2),Qt&&Ca(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&R()>qc&&(n.flags|=128,u=!0,xl(s,!1),n.lanes=4194304)}else{if(!u)if(t=Rc(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Vc(n,t),xl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!h.alternate&&!Qt)return vn(n),null}else 2*R()-s.renderingStartTime>qc&&a!==536870912&&(n.flags|=128,u=!0,xl(s,!1),n.lanes=4194304);s.isBackwards?(h.sibling=n.child,n.child=h):(t=s.last,t!==null?t.sibling=h:n.child=h,s.last=h)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=R(),t.sibling=null,a=Nn.current,Ue(Nn,u?a&1|2:a&1),Qt&&Ca(n,s.treeForkCount),t):(vn(n),null);case 22:case 23:return Ai(n),$f(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&Vc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&pe(as),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ua(zn),vn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ev(t,n){switch(Bf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ua(zn),st(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Et(n),null;case 31:if(n.memoizedState!==null){if(Ai(n),n.alternate===null)throw Error(r(340));ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return pe(Nn),null;case 4:return st(),null;case 10:return Ua(n.type),null;case 22:case 23:return Ai(n),$f(),t!==null&&pe(as),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ua(zn),null;case 25:return null;default:return null}}function P0(t,n){switch(Bf(n),n.tag){case 3:Ua(zn),st();break;case 26:case 27:case 5:Et(n);break;case 4:st();break;case 31:n.memoizedState!==null&&Ai(n);break;case 13:Ai(n);break;case 19:pe(Nn);break;case 10:Ua(n.type);break;case 22:case 23:Ai(n),$f(),t!==null&&pe(as);break;case 24:Ua(zn)}}function _l(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var h=a.create,y=a.inst;s=h(),y.destroy=s}a=a.next}while(a!==u)}}catch(U){ln(n,n.return,U)}}function xr(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){var y=s.inst,U=y.destroy;if(U!==void 0){y.destroy=void 0,u=n;var Y=a,ue=U;try{ue()}catch(be){ln(u,Y,be)}}}s=s.next}while(s!==h)}}catch(be){ln(n,n.return,be)}}function F0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Am(n,a)}catch(s){ln(t,t.return,s)}}}function z0(t,n,a){a.props=cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ln(t,n,s)}}function vl(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){ln(t,n,u)}}function da(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ln(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ln(t,n,u)}else a.current=null}function B0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ln(t,t.return,u)}}function Uh(t,n,a){try{var s=t.stateNode;qv(s,t.type,a,n),s[yn]=n}catch(u){ln(t,t.return,u)}}function I0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Er(t.type)||t.tag===4}function Lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(s!==4&&(s===27&&Er(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Nh(t,n,a),t=t.sibling;t!==null;)Nh(t,n,a),t=t.sibling}function Gc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Er(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gc(t,n,a),t=t.sibling;t!==null;)Gc(t,n,a),t=t.sibling}function H0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ei(n,s,a),n[En]=t,n[yn]=a}catch(h){ln(t,t.return,h)}}var Fa=!1,Hn=!1,Oh=!1,V0=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function Tv(t,n){if(t=t.containerInfo,td=cu,t=tl(t),$r(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var y=0,U=-1,Y=-1,ue=0,be=0,Ce=t,de=null;t:for(;;){for(var _e;Ce!==a||u!==0&&Ce.nodeType!==3||(U=y+u),Ce!==h||s!==0&&Ce.nodeType!==3||(Y=y+s),Ce.nodeType===3&&(y+=Ce.nodeValue.length),(_e=Ce.firstChild)!==null;)de=Ce,Ce=_e;for(;;){if(Ce===t)break t;if(de===a&&++ue===u&&(U=y),de===h&&++be===s&&(Y=y),(_e=Ce.nextSibling)!==null)break;Ce=de,de=Ce.parentNode}Ce=_e}a=U===-1||Y===-1?null:{start:U,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},cu=!1,Zn=n;Zn!==null;)if(n=Zn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Zn=t;else for(;Zn!==null;){switch(n=Zn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var ut=cs(a.type,u);t=s.getSnapshotBeforeUpdate(ut,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(At){ln(a,a.return,At)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Zn=t;break}Zn=n.return}}function G0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),s&4&&_l(5,a);break;case 1:if(Ba(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){ln(a,a.return,y)}else{var u=cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){ln(a,a.return,y)}}s&64&&F0(a),s&512&&vl(a,a.return);break;case 3:if(Ba(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(t,n)}catch(y){ln(a,a.return,y)}}break;case 27:n===null&&s&4&&H0(a);case 26:case 5:Ba(t,a),n===null&&s&4&&B0(a),s&512&&vl(a,a.return);break;case 12:Ba(t,a);break;case 31:Ba(t,a),s&4&&W0(t,a);break;case 13:Ba(t,a),s&4&&q0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ov.bind(null,a),ey(t,a))));break;case 22:if(s=a.memoizedState!==null||Fa,!s){n=n!==null&&n.memoizedState!==null||Hn,u=Fa;var h=Hn;Fa=s,(Hn=n)&&!h?Ia(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),Fa=u,Hn=h}break;case 30:break;default:Ba(t,a)}}function k0(t){var n=t.alternate;n!==null&&(t.alternate=null,k0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Xr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Sn=null,gi=!1;function za(t,n,a){for(a=a.child;a!==null;)X0(t,n,a),a=a.sibling}function X0(t,n,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:Hn||da(a,n),za(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hn||da(a,n);var s=Sn,u=gi;Er(a.type)&&(Sn=a.stateNode,gi=!1),za(t,n,a),Rl(a.stateNode),Sn=s,gi=u;break;case 5:Hn||da(a,n);case 6:if(s=Sn,u=gi,Sn=null,za(t,n,a),Sn=s,gi=u,Sn!==null)if(gi)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(h){ln(a,n,h)}else try{Sn.removeChild(a.stateNode)}catch(h){ln(a,n,h)}break;case 18:Sn!==null&&(gi?(t=Sn,Fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ho(t)):Fg(Sn,a.stateNode));break;case 4:s=Sn,u=gi,Sn=a.stateNode.containerInfo,gi=!0,za(t,n,a),Sn=s,gi=u;break;case 0:case 11:case 14:case 15:xr(2,a,n),Hn||xr(4,a,n),za(t,n,a);break;case 1:Hn||(da(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&z0(a,n,s)),za(t,n,a);break;case 21:za(t,n,a);break;case 22:Hn=(s=Hn)||a.memoizedState!==null,za(t,n,a),Hn=s;break;default:za(t,n,a)}}function W0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ho(t)}catch(a){ln(n,n.return,a)}}}function q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ho(t)}catch(a){ln(n,n.return,a)}}function Av(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new V0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new V0),n;default:throw Error(r(435,t.tag))}}function kc(t,n){var a=Av(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Pv.bind(null,t,s);s.then(u,u)}})}function xi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=t,y=n,U=y;e:for(;U!==null;){switch(U.tag){case 27:if(Er(U.type)){Sn=U.stateNode,gi=!1;break e}break;case 5:Sn=U.stateNode,gi=!1;break e;case 3:case 4:Sn=U.stateNode.containerInfo,gi=!0;break e}U=U.return}if(Sn===null)throw Error(r(160));X0(h,y,u),Sn=null,gi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Y0(n,t),n=n.sibling}var ea=null;function Y0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xi(n,t),_i(t),s&4&&(xr(3,t,t.return),_l(3,t),xr(5,t,t.return));break;case 1:xi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),s&64&&Fa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ea;if(xi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ba]||h[En]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),ei(h,s,a),h[En]=t,le(h),s=h;break e;case"link":var y=Yg("link","href",u).get(s+(a.href||""));if(y){for(var U=0;U<y.length;U++)if(h=y[U],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(U,1);break t}}h=u.createElement(s),ei(h,s,a),u.head.appendChild(h);break;case"meta":if(y=Yg("meta","content",u).get(s+(a.content||""))){for(U=0;U<y.length;U++)if(h=y[U],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(U,1);break t}}h=u.createElement(s),ei(h,s,a),u.head.appendChild(h);break;default:throw Error(r(468,s))}h[En]=t,le(h),s=h}t.stateNode=s}else jg(u,t.type,t.stateNode);else t.stateNode=qg(u,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?jg(u,t.type,t.stateNode):qg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Uh(t,t.memoizedProps,a.memoizedProps)}break;case 27:xi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),a!==null&&s&4&&Uh(t,t.memoizedProps,a.memoizedProps);break;case 5:if(xi(n,t),_i(t),s&512&&(Hn||a===null||da(a,a.return)),t.flags&32){u=t.stateNode;try{Pi(u,"")}catch(ut){ln(t,t.return,ut)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Uh(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Oh=!0);break;case 6:if(xi(n,t),_i(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ut){ln(t,t.return,ut)}}break;case 3:if(ru=null,u=ea,ea=iu(n.containerInfo),xi(n,t),ea=u,_i(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(n.containerInfo)}catch(ut){ln(t,t.return,ut)}Oh&&(Oh=!1,j0(t));break;case 4:s=ea,ea=iu(t.stateNode.containerInfo),xi(n,t),_i(t),ea=s;break;case 12:xi(n,t),_i(t);break;case 31:xi(n,t),_i(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 13:xi(n,t),_i(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wc=R()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 22:u=t.memoizedState!==null;var Y=a!==null&&a.memoizedState!==null,ue=Fa,be=Hn;if(Fa=ue||u,Hn=be||Y,xi(n,t),Hn=be,Fa=ue,_i(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||Y||Fa||Hn||us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){Y=a=n;try{if(h=Y.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{U=Y.stateNode;var Ce=Y.memoizedProps.style,de=Ce!=null&&Ce.hasOwnProperty("display")?Ce.display:null;U.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(ut){ln(Y,Y.return,ut)}}}else if(n.tag===6){if(a===null){Y=n;try{Y.stateNode.nodeValue=u?"":Y.memoizedProps}catch(ut){ln(Y,Y.return,ut)}}}else if(n.tag===18){if(a===null){Y=n;try{var _e=Y.stateNode;u?zg(_e,!0):zg(Y.stateNode,!1)}catch(ut){ln(Y,Y.return,ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,kc(t,a))));break;case 19:xi(n,t),_i(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kc(t,s)));break;case 30:break;case 21:break;default:xi(n,t),_i(t)}}function _i(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(I0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Lh(t);Gc(t,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(Pi(y,""),a.flags&=-33);var U=Lh(t);Gc(t,U,y);break;case 3:case 4:var Y=a.stateNode.containerInfo,ue=Lh(t);Nh(t,ue,Y);break;default:throw Error(r(161))}}catch(be){ln(t,t.return,be)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function j0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;j0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)G0(t,n.alternate,n),n=n.sibling}function us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xr(4,n,n.return),us(n);break;case 1:da(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&z0(n,n.return,a),us(n);break;case 27:Rl(n.stateNode);case 26:case 5:da(n,n.return),us(n);break;case 22:n.memoizedState===null&&us(n);break;case 30:us(n);break;default:us(n)}t=t.sibling}}function Ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:Ia(u,h,a),_l(4,h);break;case 1:if(Ia(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ue){ln(s,s.return,ue)}if(s=h,u=s.updateQueue,u!==null){var U=s.stateNode;try{var Y=u.shared.hiddenCallbacks;if(Y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Y.length;u++)Tm(Y[u],U)}catch(ue){ln(s,s.return,ue)}}a&&y&64&&F0(h),vl(h,h.return);break;case 27:H0(h);case 26:case 5:Ia(u,h,a),a&&s===null&&y&4&&B0(h),vl(h,h.return);break;case 12:Ia(u,h,a);break;case 31:Ia(u,h,a),a&&y&4&&W0(u,h);break;case 13:Ia(u,h,a),a&&y&4&&q0(u,h);break;case 22:h.memoizedState===null&&Ia(u,h,a),vl(h,h.return);break;case 30:break;default:Ia(u,h,a)}n=n.sibling}}function Ph(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&rl(a))}function Fh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rl(t))}function ta(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(t,n,a,s),n=n.sibling}function Z0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ta(t,n,a,s),u&2048&&_l(9,n);break;case 1:ta(t,n,a,s);break;case 3:ta(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rl(t)));break;case 12:if(u&2048){ta(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,U=h.onPostCommit;typeof U=="function"&&U(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Y){ln(n,n.return,Y)}}else ta(t,n,a,s);break;case 31:ta(t,n,a,s);break;case 13:ta(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?ta(t,n,a,s):yl(t,n):h._visibility&2?ta(t,n,a,s):(h._visibility|=2,to(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ph(y,n);break;case 24:ta(t,n,a,s),u&2048&&Fh(n.alternate,n);break;default:ta(t,n,a,s)}}function to(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,y=n,U=a,Y=s,ue=y.flags;switch(y.tag){case 0:case 11:case 15:to(h,y,U,Y,u),_l(8,y);break;case 23:break;case 22:var be=y.stateNode;y.memoizedState!==null?be._visibility&2?to(h,y,U,Y,u):yl(h,y):(be._visibility|=2,to(h,y,U,Y,u)),u&&ue&2048&&Ph(y.alternate,y);break;case 24:to(h,y,U,Y,u),u&&ue&2048&&Fh(y.alternate,y);break;default:to(h,y,U,Y,u)}n=n.sibling}}function yl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:yl(a,s),u&2048&&Ph(s.alternate,s);break;case 24:yl(a,s),u&2048&&Fh(s.alternate,s);break;default:yl(a,s)}n=n.sibling}}var Sl=8192;function no(t,n,a){if(t.subtreeFlags&Sl)for(t=t.child;t!==null;)K0(t,n,a),t=t.sibling}function K0(t,n,a){switch(t.tag){case 26:no(t,n,a),t.flags&Sl&&t.memoizedState!==null&&hy(a,ea,t.memoizedState,t.memoizedProps);break;case 5:no(t,n,a);break;case 3:case 4:var s=ea;ea=iu(t.stateNode.containerInfo),no(t,n,a),ea=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Sl,Sl=16777216,no(t,n,a),Sl=s):no(t,n,a));break;default:no(t,n,a)}}function Q0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,$0(s,t)}Q0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)J0(t),t=t.sibling}function J0(t){switch(t.tag){case 0:case 11:case 15:bl(t),t.flags&2048&&xr(9,t,t.return);break;case 3:bl(t);break;case 12:bl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xc(t)):bl(t);break;default:bl(t)}}function Xc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,$0(s,t)}Q0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xr(8,n,n.return),Xc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xc(n));break;default:Xc(n)}t=t.sibling}}function $0(t,n){for(;Zn!==null;){var a=Zn;switch(a.tag){case 0:case 11:case 15:xr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:rl(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Zn=s;else e:for(a=t;Zn!==null;){s=Zn;var u=s.sibling,h=s.return;if(k0(s),s===a){Zn=null;break e}if(u!==null){u.return=h,Zn=u;break e}Zn=h}}}var wv={getCacheForType:function(t){var n=Jn(zn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Jn(zn).controller.signal}},Rv=typeof WeakMap=="function"?WeakMap:Map,an=0,gn=null,Xt=null,jt=0,on=0,wi=null,_r=!1,io=!1,zh=!1,Ha=0,Rn=0,vr=0,fs=0,Bh=0,Ri=0,ao=0,Ml=null,vi=null,Ih=!1,Wc=0,eg=0,qc=1/0,Yc=null,yr=null,kn=0,Sr=null,ro=null,Va=0,Hh=0,Vh=null,tg=null,El=0,Gh=null;function Ci(){return(an&2)!==0&&jt!==0?jt&-jt:B.T!==null?jh():Sa()}function ng(){if(Ri===0)if((jt&536870912)===0||Qt){var t=Ge;Ge<<=1,(Ge&3932160)===0&&(Ge=262144),Ri=t}else Ri=536870912;return t=Ti.current,t!==null&&(t.flags|=32),Ri}function yi(t,n,a){(t===gn&&(on===2||on===9)||t.cancelPendingCommit!==null)&&(so(t,0),br(t,jt,Ri,!1)),Yn(t,a),((an&2)===0||t!==gn)&&(t===gn&&((an&2)===0&&(fs|=a),Rn===4&&br(t,jt,Ri,!1)),pa(t))}function ig(t,n,a){if((an&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||it(t,n),u=s?Uv(t,n):Xh(t,n,!0),h=s;do{if(u===0){io&&!s&&br(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Cv(a)){u=Xh(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var U=t;u=Ml;var Y=U.current.memoizedState.isDehydrated;if(Y&&(so(U,y).flags|=256),y=Xh(U,y,!1),y!==2){if(zh&&!Y){U.errorRecoveryDisabledLanes|=h,fs|=h,u=4;break e}h=vi,vi=u,h!==null&&(vi===null?vi=h:vi.push.apply(vi,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){so(t,0),br(t,n,0,!0);break}e:{switch(s=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:br(s,n,Ri,!_r);break e;case 2:vi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wc+300-R(),10<u)){if(br(s,n,Ri,!_r),Re(s,0,!0)!==0)break e;Va=n,s.timeoutHandle=Og(ag.bind(null,s,a,vi,Yc,Ih,n,Ri,fs,ao,_r,h,"Throttled",-0,0),u);break e}ag(s,a,vi,Yc,Ih,n,Ri,fs,ao,_r,h,null,-0,0)}}break}while(!0);pa(t)}function ag(t,n,a,s,u,h,y,U,Y,ue,be,Ce,de,_e){if(t.timeoutHandle=-1,Ce=n.subtreeFlags,Ce&8192||(Ce&16785408)===16785408){Ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},K0(n,h,Ce);var ut=(h&62914560)===h?Wc-R():(h&4194048)===h?eg-R():0;if(ut=dy(Ce,ut),ut!==null){Va=h,t.cancelPendingCommit=ut(hg.bind(null,t,n,h,a,s,u,y,U,Y,be,Ce,null,de,_e)),br(t,h,y,!ue);return}}hg(t,n,h,a,s,u,y,U,Y)}function Cv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!fi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function br(t,n,a,s){n&=~Bh,n&=~fs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var h=31-ct(u),y=1<<h;s[h]=-1,u&=~y}a!==0&&Ts(t,a,n)}function jc(){return(an&6)===0?(Tl(0),!1):!0}function kh(){if(Xt!==null){if(on===0)var t=Xt.return;else t=Xt,Da=ns=null,rh(t),Ks=null,ol=0,t=Xt;for(;t!==null;)P0(t.alternate,t),t=t.return;Xt=null}}function so(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Va=0,kh(),gn=t,Xt=a=Ra(t.current,null),jt=n,on=0,wi=null,_r=!1,io=it(t,n),zh=!1,ao=Ri=Bh=fs=vr=Rn=0,vi=Ml=null,Ih=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-ct(s),h=1<<u;n|=t[u],s&=~h}return Ha=n,ii(),a}function rg(t,n){Pt=null,B.H=ml,n===Zs||n===Mc?(n=Sm(),on=3):n===Yf?(n=Sm(),on=4):on=n===Sh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wi=n,Xt===null&&(Rn=1,zc(t,Fi(n,t.current)))}function sg(){var t=Ti.current;return t===null?!0:(jt&4194048)===jt?Hi===null:(jt&62914560)===jt||(jt&536870912)!==0?t===Hi:!1}function og(){var t=B.H;return B.H=ml,t===null?ml:t}function lg(){var t=B.A;return B.A=wv,t}function Zc(){Rn=4,_r||(jt&4194048)!==jt&&Ti.current!==null||(io=!0),(vr&134217727)===0&&(fs&134217727)===0||gn===null||br(gn,jt,Ri,!1)}function Xh(t,n,a){var s=an;an|=2;var u=og(),h=lg();(gn!==t||jt!==n)&&(Yc=null,so(t,n)),n=!1;var y=Rn;e:do try{if(on!==0&&Xt!==null){var U=Xt,Y=wi;switch(on){case 8:kh(),y=6;break e;case 3:case 2:case 9:case 6:Ti.current===null&&(n=!0);var ue=on;if(on=0,wi=null,oo(t,U,Y,ue),a&&io){y=0;break e}break;default:ue=on,on=0,wi=null,oo(t,U,Y,ue)}}Dv(),y=Rn;break}catch(be){rg(t,be)}while(!0);return n&&t.shellSuspendCounter++,Da=ns=null,an=s,B.H=u,B.A=h,Xt===null&&(gn=null,jt=0,ii()),y}function Dv(){for(;Xt!==null;)cg(Xt)}function Uv(t,n){var a=an;an|=2;var s=og(),u=lg();gn!==t||jt!==n?(Yc=null,qc=R()+500,so(t,n)):io=it(t,n);e:do try{if(on!==0&&Xt!==null){n=Xt;var h=wi;t:switch(on){case 1:on=0,wi=null,oo(t,n,h,1);break;case 2:case 9:if(vm(h)){on=0,wi=null,ug(n);break}n=function(){on!==2&&on!==9||gn!==t||(on=7),pa(t)},h.then(n,n);break e;case 3:on=7;break e;case 4:on=5;break e;case 7:vm(h)?(on=0,wi=null,ug(n)):(on=0,wi=null,oo(t,n,h,7));break;case 5:var y=null;switch(Xt.tag){case 26:y=Xt.memoizedState;case 5:case 27:var U=Xt;if(y?Zg(y):U.stateNode.complete){on=0,wi=null;var Y=U.sibling;if(Y!==null)Xt=Y;else{var ue=U.return;ue!==null?(Xt=ue,Kc(ue)):Xt=null}break t}}on=0,wi=null,oo(t,n,h,5);break;case 6:on=0,wi=null,oo(t,n,h,6);break;case 8:kh(),Rn=6;break e;default:throw Error(r(462))}}Lv();break}catch(be){rg(t,be)}while(!0);return Da=ns=null,B.H=s,B.A=u,an=a,Xt!==null?0:(gn=null,jt=0,ii(),Rn)}function Lv(){for(;Xt!==null&&!dt();)cg(Xt)}function cg(t){var n=N0(t.alternate,t,Ha);t.memoizedProps=t.pendingProps,n===null?Kc(t):Xt=n}function ug(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=w0(a,n,n.pendingProps,n.type,void 0,jt);break;case 11:n=w0(a,n,n.pendingProps,n.type.render,n.ref,jt);break;case 5:rh(n);default:P0(a,n),n=Xt=lm(n,Ha),n=N0(a,n,Ha)}t.memoizedProps=t.pendingProps,n===null?Kc(t):Xt=n}function oo(t,n,a,s){Da=ns=null,rh(n),Ks=null,ol=0;var u=n.return;try{if(yv(t,u,n,a,jt)){Rn=1,zc(t,Fi(a,t.current)),Xt=null;return}}catch(h){if(u!==null)throw Xt=u,h;Rn=1,zc(t,Fi(a,t.current)),Xt=null;return}n.flags&32768?(Qt||s===1?t=!0:io||(jt&536870912)!==0?t=!1:(_r=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),fg(n,t)):Kc(n)}function Kc(t){var n=t;do{if((n.flags&32768)!==0){fg(n,_r);return}t=n.return;var a=Mv(n.alternate,n,Ha);if(a!==null){Xt=a;return}if(n=n.sibling,n!==null){Xt=n;return}Xt=n=t}while(n!==null);Rn===0&&(Rn=5)}function fg(t,n){do{var a=Ev(t.alternate,t);if(a!==null){a.flags&=32767,Xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Xt=t;return}Xt=t=a}while(t!==null);Rn=6,Xt=null}function hg(t,n,a,s,u,h,y,U,Y){t.cancelPendingCommit=null;do Qc();while(kn!==0);if((an&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=xn,li(t,a,h,y,U,Y),t===gn&&(Xt=gn=null,jt=0),ro=n,Sr=t,Va=a,Hh=h,Vh=u,tg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fv(ae,function(){return xg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,u=$.p,$.p=2,y=an,an|=4;try{Tv(t,n,a)}finally{an=y,$.p=u,B.T=s}}kn=1,dg(),pg(),mg()}}function dg(){if(kn===1){kn=0;var t=Sr,n=ro,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=$.p;$.p=2;var u=an;an|=4;try{Y0(n,t);var h=nd,y=tl(t.containerInfo),U=h.focusedElem,Y=h.selectionRange;if(y!==U&&U&&U.ownerDocument&&Fn(U.ownerDocument.documentElement,U)){if(Y!==null&&$r(U)){var ue=Y.start,be=Y.end;if(be===void 0&&(be=ue),"selectionStart"in U)U.selectionStart=ue,U.selectionEnd=Math.min(be,U.value.length);else{var Ce=U.ownerDocument||document,de=Ce&&Ce.defaultView||window;if(de.getSelection){var _e=de.getSelection(),ut=U.textContent.length,At=Math.min(Y.start,ut),dn=Y.end===void 0?At:Math.min(Y.end,ut);!_e.extend&&At>dn&&(y=dn,dn=At,At=y);var ne=xc(U,At),Q=xc(U,dn);if(ne&&Q&&(_e.rangeCount!==1||_e.anchorNode!==ne.node||_e.anchorOffset!==ne.offset||_e.focusNode!==Q.node||_e.focusOffset!==Q.offset)){var ce=Ce.createRange();ce.setStart(ne.node,ne.offset),_e.removeAllRanges(),At>dn?(_e.addRange(ce),_e.extend(Q.node,Q.offset)):(ce.setEnd(Q.node,Q.offset),_e.addRange(ce))}}}}for(Ce=[],_e=U;_e=_e.parentNode;)_e.nodeType===1&&Ce.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Ce.length;U++){var Te=Ce[U];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}cu=!!td,nd=td=null}finally{an=u,$.p=s,B.T=a}}t.current=n,kn=2}}function pg(){if(kn===2){kn=0;var t=Sr,n=ro,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=$.p;$.p=2;var u=an;an|=4;try{G0(t,n.alternate,n)}finally{an=u,$.p=s,B.T=a}}kn=3}}function mg(){if(kn===4||kn===3){kn=0,I();var t=Sr,n=ro,a=Va,s=tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?kn=5:(kn=0,ro=Sr=null,gg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(yr=null),w(a),n=n.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(Ne,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,u=$.p,$.p=2,B.T=null;try{for(var h=t.onRecoverableError,y=0;y<s.length;y++){var U=s[y];h(U.value,{componentStack:U.stack})}}finally{B.T=n,$.p=u}}(Va&3)!==0&&Qc(),pa(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Gh?El++:(El=0,Gh=t):El=0,Tl(0)}}function gg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,rl(n)))}function Qc(){return dg(),pg(),mg(),xg()}function xg(){if(kn!==5)return!1;var t=Sr,n=Hh;Hh=0;var a=w(Va),s=B.T,u=$.p;try{$.p=32>a?32:a,B.T=null,a=Vh,Vh=null;var h=Sr,y=Va;if(kn=0,ro=Sr=null,Va=0,(an&6)!==0)throw Error(r(331));var U=an;if(an|=4,J0(h.current),Z0(h,h.current,y,a),an=U,Tl(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(Ne,h)}catch{}return!0}finally{$.p=u,B.T=s,gg(t,n)}}function _g(t,n,a){n=Fi(a,n),n=yh(t.stateNode,n,2),t=pr(t,n,2),t!==null&&(Yn(t,2),pa(t))}function ln(t,n,a){if(t.tag===3)_g(t,t,a);else for(;n!==null;){if(n.tag===3){_g(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(yr===null||!yr.has(s))){t=Fi(a,t),a=v0(2),s=pr(n,a,2),s!==null&&(y0(a,s,n,t),Yn(s,2),pa(s));break}}n=n.return}}function Wh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Rv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(zh=!0,u.add(a),t=Nv.bind(null,t,n,a),n.then(t,t))}function Nv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,gn===t&&(jt&a)===a&&(Rn===4||Rn===3&&(jt&62914560)===jt&&300>R()-Wc?(an&2)===0&&so(t,0):Bh|=a,ao===jt&&(ao=0)),pa(t)}function vg(t,n){n===0&&(n=at()),t=jn(t,n),t!==null&&(Yn(t,n),pa(t))}function Ov(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vg(t,a)}function Pv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),vg(t,a)}function Fv(t,n){return Bt(t,n)}var Jc=null,lo=null,qh=!1,$c=!1,Yh=!1,Mr=0;function pa(t){t!==lo&&t.next===null&&(lo===null?Jc=lo=t:lo=lo.next=t),$c=!0,qh||(qh=!0,Bv())}function Tl(t,n){if(!Yh&&$c){Yh=!0;do for(var a=!1,s=Jc;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var y=s.suspendedLanes,U=s.pingedLanes;h=(1<<31-ct(42|t)+1)-1,h&=u&~(y&~U),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Mg(s,h))}else h=jt,h=Re(s,s===gn?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||it(s,h)||(a=!0,Mg(s,h));s=s.next}while(a);Yh=!1}}function zv(){yg()}function yg(){$c=qh=!1;var t=0;Mr!==0&&jv()&&(t=Mr);for(var n=R(),a=null,s=Jc;s!==null;){var u=s.next,h=Sg(s,n);h===0?(s.next=null,a===null?Jc=u:a.next=u,u===null&&(lo=a)):(a=s,(t!==0||(h&3)!==0)&&($c=!0)),s=u}kn!==0&&kn!==5||Tl(t),Mr!==0&&(Mr=0)}function Sg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-ct(h),U=1<<y,Y=u[y];Y===-1?((U&a)===0||(U&s)!==0)&&(u[y]=wt(U,n)):Y<=n&&(t.expiredLanes|=U),h&=~U}if(n=gn,a=jt,a=Re(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(on===2||on===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&He(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||it(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&He(s),w(a)){case 2:case 8:a=Ae;break;case 32:a=ae;break;case 268435456:a=je;break;default:a=ae}return s=bg.bind(null,t),a=Bt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&He(s),t.callbackPriority=2,t.callbackNode=null,2}function bg(t,n){if(kn!==0&&kn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qc()&&t.callbackNode!==a)return null;var s=jt;return s=Re(t,t===gn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ig(t,s,n),Sg(t,R()),t.callbackNode!=null&&t.callbackNode===a?bg.bind(null,t):null)}function Mg(t,n){if(Qc())return null;ig(t,n,!0)}function Bv(){Kv(function(){(an&6)!==0?Bt(Ee,zv):yg()})}function jh(){if(Mr===0){var t=Ys;t===0&&(t=qe,qe<<=1,(qe&261888)===0&&(qe=256)),Mr=t}return Mr}function Eg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rs(""+t)}function Tg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Iv(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var h=Eg((u[yn]||null).action),y=s.submitter;y&&(n=(n=y[yn]||null)?Eg(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var U=new qr("action","action",null,s,u);t.push({event:U,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Mr!==0){var Y=y?Tg(u,y):new FormData(u);ph(a,{pending:!0,data:Y,method:u.method,action:h},null,Y)}}else typeof h=="function"&&(U.preventDefault(),Y=y?Tg(u,y):new FormData(u),ph(a,{pending:!0,data:Y,method:u.method,action:h},h,Y))},currentTarget:u}]})}}for(var Zh=0;Zh<mt.length;Zh++){var Kh=mt[Zh],Hv=Kh.toLowerCase(),Vv=Kh[0].toUpperCase()+Kh.slice(1);nt(Hv,"on"+Vv)}nt(C,"onAnimationEnd"),nt(z,"onAnimationIteration"),nt(k,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(K,"onTransitionRun"),nt(xe,"onTransitionStart"),nt(Oe,"onTransitionCancel"),nt(Ke,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function Ag(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var y=s.length-1;0<=y;y--){var U=s[y],Y=U.instance,ue=U.currentTarget;if(U=U.listener,Y!==h&&u.isPropagationStopped())break e;h=U,u.currentTarget=ue;try{h(u)}catch(be){Tt(be)}u.currentTarget=null,h=Y}else for(y=0;y<s.length;y++){if(U=s[y],Y=U.instance,ue=U.currentTarget,U=U.listener,Y!==h&&u.isPropagationStopped())break e;h=U,u.currentTarget=ue;try{h(u)}catch(be){Tt(be)}u.currentTarget=null,h=Y}}}}function Wt(t,n){var a=n[tr];a===void 0&&(a=n[tr]=new Set);var s=t+"__bubble";a.has(s)||(wg(n,t,2,!1),a.add(s))}function Qh(t,n,a){var s=0;n&&(s|=4),wg(a,t,s,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Jh(t){if(!t[eu]){t[eu]=!0,re.forEach(function(a){a!=="selectionchange"&&(Gv.has(a)||Qh(a,!1,t),Qh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[eu]||(n[eu]=!0,Qh("selectionchange",!1,n))}}function wg(t,n,a,s){switch(nx(n)){case 2:var u=gy;break;case 8:u=xy;break;default:u=dd}a=u.bind(null,n,a,t),u=void 0,!jo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $h(t,n,a,s,u){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var U=s.stateNode.containerInfo;if(U===u)break;if(y===4)for(y=s.return;y!==null;){var Y=y.tag;if((Y===3||Y===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;U!==null;){if(y=la(U),y===null)return;if(Y=y.tag,Y===5||Y===6||Y===26||Y===27){s=h=y;continue e}U=U.parentNode}}s=s.return}$l(function(){var ue=h,be=qo(a),Ce=[];e:{var de=ot.get(t);if(de!==void 0){var _e=qr,ut=t;switch(t){case"keypress":if(Us(a)===0)break e;case"keydown":case"keyup":_e=ac;break;case"focusin":ut="focus",_e=Os;break;case"focusout":ut="blur",_e=Os;break;case"beforeblur":case"afterblur":_e=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=xf;break;case C:case z:case k:_e=cf;break;case Ke:_e=vf;break;case"scroll":case"scrollend":_e=rf;break;case"wheel":_e=Sf;break;case"copy":case"cut":case"paste":_e=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=rc;break;case"toggle":case"beforetoggle":_e=Mf}var At=(n&4)!==0,dn=!At&&(t==="scroll"||t==="scrollend"),ne=At?de!==null?de+"Capture":null:de;At=[];for(var Q=ue,ce;Q!==null;){var Te=Q;if(ce=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||ce===null||ne===null||(Te=Wr(Q,ne),Te!=null&&At.push(wl(Q,Te,ce))),dn)break;Q=Q.return}0<At.length&&(de=new _e(de,ut,null,a,be),Ce.push({event:de,listeners:At}))}}if((n&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",_e=t==="mouseout"||t==="pointerout",de&&a!==Wo&&(ut=a.relatedTarget||a.fromElement)&&(la(ut)||ut[ni]))break e;if((_e||de)&&(de=be.window===be?be:(de=be.ownerDocument)?de.defaultView||de.parentWindow:window,_e?(ut=a.relatedTarget||a.toElement,_e=ue,ut=ut?la(ut):null,ut!==null&&(dn=f(ut),At=ut.tag,ut!==dn||At!==5&&At!==27&&At!==6)&&(ut=null)):(_e=null,ut=ue),_e!==ut)){if(At=nc,Te="onMouseLeave",ne="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(At=rc,Te="onPointerLeave",ne="onPointerEnter",Q="pointer"),dn=_e==null?de:ee(_e),ce=ut==null?de:ee(ut),de=new At(Te,Q+"leave",_e,a,be),de.target=dn,de.relatedTarget=ce,Te=null,la(be)===ue&&(At=new At(ne,Q+"enter",ut,a,be),At.target=ce,At.relatedTarget=dn,Te=At),dn=Te,_e&&ut)t:{for(At=kv,ne=_e,Q=ut,ce=0,Te=ne;Te;Te=At(Te))ce++;Te=0;for(var St=Q;St;St=At(St))Te++;for(;0<ce-Te;)ne=At(ne),ce--;for(;0<Te-ce;)Q=At(Q),Te--;for(;ce--;){if(ne===Q||Q!==null&&ne===Q.alternate){At=ne;break t}ne=At(ne),Q=At(Q)}At=null}else At=null;_e!==null&&Rg(Ce,de,_e,At,!1),ut!==null&&dn!==null&&Rg(Ce,dn,ut,At,!0)}}e:{if(de=ue?ee(ue):window,_e=de.nodeName&&de.nodeName.toLowerCase(),_e==="select"||_e==="input"&&de.type==="file")var en=Hs;else if(uc(de))if(hc)en=Lf;else{en=Df;var gt=Cf}else _e=de.nodeName,!_e||_e.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?ue&&ws(ue.elementType)&&(en=Hs):en=Uf;if(en&&(en=en(t,ue))){fc(Ce,en,a,be);break e}gt&&gt(t,de,ue),t==="focusout"&&ue&&de.type==="number"&&ue.memoizedProps.value!=null&&Tn(de,"number",de.value)}switch(gt=ue?ee(ue):window,t){case"focusin":(uc(gt)||gt.contentEditable==="true")&&(Ta=gt,Vs=ue,sr=null);break;case"focusout":sr=Vs=Ta=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,nl(Ce,a,be);break;case"selectionchange":if($i)break;case"keydown":case"keyup":nl(Ce,a,be)}var Ft;if($o)e:{switch(t){case"compositionstart":var Zt="onCompositionStart";break e;case"compositionend":Zt="onCompositionEnd";break e;case"compositionupdate":Zt="onCompositionUpdate";break e}Zt=void 0}else ar?lc(t,a)&&(Zt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Zt="onCompositionStart");Zt&&(sc&&a.locale!=="ko"&&(ar||Zt!=="onCompositionStart"?Zt==="onCompositionEnd"&&ar&&(Ft=ec()):(Ji=be,Zo="value"in Ji?Ji.value:Ji.textContent,ar=!0)),gt=tu(ue,Zt),0<gt.length&&(Zt=new Fs(Zt,t,null,a,be),Ce.push({event:Zt,listeners:gt}),Ft?Zt.data=Ft:(Ft=cc(a),Ft!==null&&(Zt.data=Ft)))),(Ft=Tf?Af(t,a):wf(t,a))&&(Zt=tu(ue,"onBeforeInput"),0<Zt.length&&(gt=new Fs("onBeforeInput","beforeinput",null,a,be),Ce.push({event:gt,listeners:Zt}),gt.data=Ft)),Iv(Ce,t,ue,a,be)}Ag(Ce,n)})}function wl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Wr(t,a),u!=null&&s.unshift(wl(t,u,h)),u=Wr(t,n),u!=null&&s.push(wl(t,u,h))),t.tag===3)return s;t=t.return}return[]}function kv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Rg(t,n,a,s,u){for(var h=n._reactName,y=[];a!==null&&a!==s;){var U=a,Y=U.alternate,ue=U.stateNode;if(U=U.tag,Y!==null&&Y===s)break;U!==5&&U!==26&&U!==27||ue===null||(Y=ue,u?(ue=Wr(a,h),ue!=null&&y.unshift(wl(a,ue,Y))):u||(ue=Wr(a,h),ue!=null&&y.push(wl(a,ue,Y)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Xv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Cg(t){return(typeof t=="string"?t:""+t).replace(Xv,`
`).replace(Wv,"")}function Dg(t,n){return n=Cg(n),Cg(t)===n}function hn(t,n,a,s,u,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pi(t,""+s);break;case"className":Yt(t,"class",s);break;case"tabIndex":Yt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(t,a,s);break;case"style":Xo(t,s,h);break;case"data":if(n!=="object"){Yt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Rs(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&hn(t,n,"name",u.name,u,null),hn(t,n,"formEncType",u.formEncType,u,null),hn(t,n,"formMethod",u.formMethod,u,null),hn(t,n,"formTarget",u.formTarget,u,null)):(hn(t,n,"encType",u.encType,u,null),hn(t,n,"method",u.method,u,null),hn(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Rs(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Zi);break;case"onScroll":s!=null&&Wt("scroll",t);break;case"onScrollEnd":s!=null&&Wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Rs(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Wt("beforetoggle",t),Wt("toggle",t),Dt(t,"popover",s);break;case"xlinkActuate":$t(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":$t(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":$t(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":$t(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":$t(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":$t(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":$t(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":$t(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":$t(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Dt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=nf.get(a)||a,Dt(t,a,s))}}function ed(t,n,a,s,u,h){switch(a){case"style":Xo(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Pi(t,s):(typeof s=="number"||typeof s=="bigint")&&Pi(t,""+s);break;case"onScroll":s!=null&&Wt("scroll",t);break;case"onScrollEnd":s!=null&&Wt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ie.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Dt(t,a,s)}}}function ei(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",t),Wt("load",t);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:hn(t,n,h,y,a,null)}}u&&hn(t,n,"srcSet",a.srcSet,a,null),s&&hn(t,n,"src",a.src,a,null);return;case"input":Wt("invalid",t);var U=h=y=u=null,Y=null,ue=null;for(s in a)if(a.hasOwnProperty(s)){var be=a[s];if(be!=null)switch(s){case"name":u=be;break;case"type":y=be;break;case"checked":Y=be;break;case"defaultChecked":ue=be;break;case"value":h=be;break;case"defaultValue":U=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(r(137,n));break;default:hn(t,n,s,be,a,null)}}Rt(t,h,U,Y,ue,y,u,!1);return;case"select":Wt("invalid",t),s=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":h=U;break;case"defaultValue":y=U;break;case"multiple":s=U;default:hn(t,n,u,U,a,null)}n=h,a=y,t.multiple=!!s,n!=null?Un(t,!!s,n,!1):a!=null&&Un(t,!!s,a,!0);return;case"textarea":Wt("invalid",t),h=u=s=null;for(y in a)if(a.hasOwnProperty(y)&&(U=a[y],U!=null))switch(y){case"value":s=U;break;case"defaultValue":u=U;break;case"children":h=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(91));break;default:hn(t,n,y,U,a,null)}Gn(t,s,u,h);return;case"option":for(Y in a)if(a.hasOwnProperty(Y)&&(s=a[Y],s!=null))switch(Y){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:hn(t,n,Y,s,a,null)}return;case"dialog":Wt("beforetoggle",t),Wt("toggle",t),Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":Wt("load",t);break;case"video":case"audio":for(s=0;s<Al.length;s++)Wt(Al[s],t);break;case"image":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"embed":case"source":case"link":Wt("error",t),Wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ue in a)if(a.hasOwnProperty(ue)&&(s=a[ue],s!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:hn(t,n,ue,s,a,null)}return;default:if(ws(n)){for(be in a)a.hasOwnProperty(be)&&(s=a[be],s!==void 0&&ed(t,n,be,s,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(s=a[U],s!=null&&hn(t,n,U,s,a,null))}function qv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,U=null,Y=null,ue=null,be=null;for(_e in a){var Ce=a[_e];if(a.hasOwnProperty(_e)&&Ce!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":Y=Ce;default:s.hasOwnProperty(_e)||hn(t,n,_e,null,s,Ce)}}for(var de in s){var _e=s[de];if(Ce=a[de],s.hasOwnProperty(de)&&(_e!=null||Ce!=null))switch(de){case"type":h=_e;break;case"name":u=_e;break;case"checked":ue=_e;break;case"defaultChecked":be=_e;break;case"value":y=_e;break;case"defaultValue":U=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:_e!==Ce&&hn(t,n,de,_e,s,Ce)}}ji(t,y,U,Y,ue,be,h,u);return;case"select":_e=y=U=de=null;for(h in a)if(Y=a[h],a.hasOwnProperty(h)&&Y!=null)switch(h){case"value":break;case"multiple":_e=Y;default:s.hasOwnProperty(h)||hn(t,n,h,null,s,Y)}for(u in s)if(h=s[u],Y=a[u],s.hasOwnProperty(u)&&(h!=null||Y!=null))switch(u){case"value":de=h;break;case"defaultValue":U=h;break;case"multiple":y=h;default:h!==Y&&hn(t,n,u,h,s,Y)}n=U,a=y,s=_e,de!=null?Un(t,!!a,de,!1):!!s!=!!a&&(n!=null?Un(t,!!a,n,!0):Un(t,!!a,a?[]:"",!1));return;case"textarea":_e=de=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!s.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:hn(t,n,U,null,s,u)}for(y in s)if(u=s[y],h=a[y],s.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":de=u;break;case"defaultValue":_e=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&hn(t,n,y,u,s,h)}Pn(t,de,_e);return;case"option":for(var ut in a)if(de=a[ut],a.hasOwnProperty(ut)&&de!=null&&!s.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:hn(t,n,ut,null,s,de)}for(Y in s)if(de=s[Y],_e=a[Y],s.hasOwnProperty(Y)&&de!==_e&&(de!=null||_e!=null))switch(Y){case"selected":t.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:hn(t,n,Y,de,s,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var At in a)de=a[At],a.hasOwnProperty(At)&&de!=null&&!s.hasOwnProperty(At)&&hn(t,n,At,null,s,de);for(ue in s)if(de=s[ue],_e=a[ue],s.hasOwnProperty(ue)&&de!==_e&&(de!=null||_e!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:hn(t,n,ue,de,s,_e)}return;default:if(ws(n)){for(var dn in a)de=a[dn],a.hasOwnProperty(dn)&&de!==void 0&&!s.hasOwnProperty(dn)&&ed(t,n,dn,void 0,s,de);for(be in s)de=s[be],_e=a[be],!s.hasOwnProperty(be)||de===_e||de===void 0&&_e===void 0||ed(t,n,be,de,s,_e);return}}for(var ne in a)de=a[ne],a.hasOwnProperty(ne)&&de!=null&&!s.hasOwnProperty(ne)&&hn(t,n,ne,null,s,de);for(Ce in s)de=s[Ce],_e=a[Ce],!s.hasOwnProperty(Ce)||de===_e||de==null&&_e==null||hn(t,n,Ce,de,s,_e)}function Ug(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],h=u.transferSize,y=u.initiatorType,U=u.duration;if(h&&U&&Ug(y)){for(y=0,U=u.responseEnd,s+=1;s<a.length;s++){var Y=a[s],ue=Y.startTime;if(ue>U)break;var be=Y.transferSize,Ce=Y.initiatorType;be&&Ug(Ce)&&(Y=Y.responseEnd,y+=be*(Y<U?1:(U-ue)/(Y-ue)))}if(--s,n+=8*(h+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var td=null,nd=null;function nu(t){return t.nodeType===9?t:t.ownerDocument}function Lg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function jv(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(t){return Pg.resolve(null).then(t).catch(Qv)}:Og;function Qv(t){setTimeout(function(){throw t})}function Er(t){return t==="head"}function Fg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ho(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Rl(a);for(var h=a.firstChild;h;){var y=h.nextSibling,U=h.nodeName;h[ba]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&Rl(t.ownerDocument.body);a=u}while(a);ho(n)}function zg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),Xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jv(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Vi(t.nextSibling),t===null)break}return null}function $v(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Vi(t.nextSibling),t===null))return null;return t}function Bg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Vi(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ey(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function Ig(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Hg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Vg(t,n,a){switch(n=nu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Rl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Xr(t)}var Gi=new Map,Gg=new Set;function iu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ga=$.d;$.d={f:ty,r:ny,D:iy,C:ay,L:ry,m:sy,X:ly,S:oy,M:cy};function ty(){var t=Ga.f(),n=jc();return t||n}function ny(t){var n=L(t);n!==null&&n.tag===5&&n.type==="form"?r0(n):Ga.r(t)}var co=typeof document>"u"?null:document;function kg(t,n,a){var s=co;if(s&&typeof n=="string"&&n){var u=un(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Gg.has(u)||(Gg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),ei(n,"link",t),le(n),s.head.appendChild(n)))}}function iy(t){Ga.D(t),kg("dns-prefetch",t,null)}function ay(t,n){Ga.C(t,n),kg("preconnect",t,n)}function ry(t,n,a){Ga.L(t,n,a);var s=co;if(s&&t&&n){var u='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(t)+'"]';var h=u;switch(n){case"style":h=uo(t);break;case"script":h=fo(t)}Gi.has(h)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Gi.set(h,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Cl(h))||n==="script"&&s.querySelector(Dl(h))||(n=s.createElement("link"),ei(n,"link",t),le(n),s.head.appendChild(n)))}}function sy(t,n){Ga.m(t,n);var a=co;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+un(s)+'"][href="'+un(t)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fo(t)}if(!Gi.has(h)&&(t=v({rel:"modulepreload",href:t},n),Gi.set(h,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dl(h)))return}s=a.createElement("link"),ei(s,"link",t),le(s),a.head.appendChild(s)}}}function oy(t,n,a){Ga.S(t,n,a);var s=co;if(s&&t){var u=ge(s).hoistableStyles,h=uo(t);n=n||"default";var y=u.get(h);if(!y){var U={loading:0,preload:null};if(y=s.querySelector(Cl(h)))U.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Gi.get(h))&&cd(t,a);var Y=y=s.createElement("link");le(Y),ei(Y,"link",t),Y._p=new Promise(function(ue,be){Y.onload=ue,Y.onerror=be}),Y.addEventListener("load",function(){U.loading|=1}),Y.addEventListener("error",function(){U.loading|=2}),U.loading|=4,au(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:U},u.set(h,y)}}}function ly(t,n){Ga.X(t,n);var a=co;if(a&&t){var s=ge(a).hoistableScripts,u=fo(t),h=s.get(u);h||(h=a.querySelector(Dl(u)),h||(t=v({src:t,async:!0},n),(n=Gi.get(u))&&ud(t,n),h=a.createElement("script"),le(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function cy(t,n){Ga.M(t,n);var a=co;if(a&&t){var s=ge(a).hoistableScripts,u=fo(t),h=s.get(u);h||(h=a.querySelector(Dl(u)),h||(t=v({src:t,async:!0,type:"module"},n),(n=Gi.get(u))&&ud(t,n),h=a.createElement("script"),le(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function Xg(t,n,a,s){var u=(u=he.current)?iu(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=uo(a.href),a=ge(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=uo(a.href);var h=ge(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(Cl(t)))&&!h._p&&(y.instance=h,y.state.loading=5),Gi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gi.set(t,a),h||uy(u,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fo(a),a=ge(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function uo(t){return'href="'+un(t)+'"'}function Cl(t){return'link[rel="stylesheet"]['+t+"]"}function Wg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function uy(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),ei(n,"link",a),le(n),t.head.appendChild(n))}function fo(t){return'[src="'+un(t)+'"]'}function Dl(t){return"script[async]"+t}function qg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(s)return n.instance=s,le(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),le(s),ei(s,"style",u),au(s,a.precedence,t),n.instance=s;case"stylesheet":u=uo(a.href);var h=t.querySelector(Cl(u));if(h)return n.state.loading|=4,n.instance=h,le(h),h;s=Wg(a),(u=Gi.get(u))&&cd(s,u),h=(t.ownerDocument||t).createElement("link"),le(h);var y=h;return y._p=new Promise(function(U,Y){y.onload=U,y.onerror=Y}),ei(h,"link",s),n.state.loading|=4,au(h,a.precedence,t),n.instance=h;case"script":return h=fo(a.src),(u=t.querySelector(Dl(h)))?(n.instance=u,le(u),u):(s=a,(u=Gi.get(h))&&(s=v({},a),ud(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),le(u),ei(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,au(s,a.precedence,t));return n.instance}function au(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,y=0;y<s.length;y++){var U=s[y];if(U.dataset.precedence===n)h=U;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ru=null;function Yg(t,n,a){if(ru===null){var s=new Map,u=ru=new Map;u.set(a,s)}else u=ru,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[ba]||h[En]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var U=s.get(y);U?U.push(h):s.set(y,[h])}}return s}function jg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=uo(s.href),h=n.querySelector(Cl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=su.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,le(h);return}h=n.ownerDocument||n,s=Wg(s),(u=Gi.get(u))&&cd(s,u),h=h.createElement("link"),le(h);var y=h;y._p=new Promise(function(U,Y){y.onload=U,y.onerror=Y}),ei(h,"link",s),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=su.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fd=0;function dy(t,n){return t.stylesheets&&t.count===0&&lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&fd===0&&(fd=62500*Yv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>fd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ou=null;function lu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ou=new Map,n.forEach(py,t),ou=null,su.call(t))}function py(t,n){if(!(n.state.loading&4)){var a=ou.get(t);if(a)var s=a.get(null);else{a=new Map,ou.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||s,h===s&&a.set(null,u),a.set(y,u),this.count++,s=su.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ul={$$typeof:H,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function my(t,n,a,s,u,h,y,U,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jt(0),this.hiddenUpdates=Jt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function Kg(t,n,a,s,u,h,y,U,Y,ue,be,Ce){return t=new my(t,n,a,y,Y,ue,be,Ce,U),n=1,h===!0&&(n|=24),h=Ei(3,null,null,n),t.current=h,h.stateNode=t,n=Xf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},jf(h),t}function Qg(t){return t?(t=Gs,t):Gs}function Jg(t,n,a,s,u,h){u=Qg(u),s.context===null?s.context=u:s.pendingContext=u,s=dr(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=pr(t,s,n),a!==null&&(yi(a,t,n),cl(a,t,n))}function $g(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){$g(t,n),(t=t.alternate)&&$g(t,n)}function ex(t){if(t.tag===13||t.tag===31){var n=jn(t,67108864);n!==null&&yi(n,t,67108864),hd(t,67108864)}}function tx(t){if(t.tag===13||t.tag===31){var n=Ci();n=ci(n);var a=jn(t,n);a!==null&&yi(a,t,n),hd(t,n)}}var cu=!0;function gy(t,n,a,s){var u=B.T;B.T=null;var h=$.p;try{$.p=2,dd(t,n,a,s)}finally{$.p=h,B.T=u}}function xy(t,n,a,s){var u=B.T;B.T=null;var h=$.p;try{$.p=8,dd(t,n,a,s)}finally{$.p=h,B.T=u}}function dd(t,n,a,s){if(cu){var u=pd(s);if(u===null)$h(t,n,s,uu,a),ix(t,s);else if(vy(u,t,n,a,s))s.stopPropagation();else if(ix(t,s),n&4&&-1<_y.indexOf(t)){for(;u!==null;){var h=L(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Le(h.pendingLanes);if(y!==0){var U=h;for(U.pendingLanes|=2,U.entangledLanes|=2;y;){var Y=1<<31-ct(y);U.entanglements[1]|=Y,y&=~Y}pa(h),(an&6)===0&&(qc=R()+500,Tl(0))}}break;case 31:case 13:U=jn(h,2),U!==null&&yi(U,h,2),jc(),hd(h,2)}if(h=pd(s),h===null&&$h(t,n,s,uu,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else $h(t,n,s,null,a)}}function pd(t){return t=qo(t),md(t)}var uu=null;function md(t){if(uu=null,t=la(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=p(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uu=t,null}function nx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case Ee:return 2;case Ae:return 8;case ae:case Ye:return 32;case je:return 268435456;default:return 32}default:return 32}}var gd=!1,Tr=null,Ar=null,wr=null,Ll=new Map,Nl=new Map,Rr=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ix(t,n){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(n.pointerId)}}function Ol(t,n,a,s,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},n!==null&&(n=L(n),n!==null&&ex(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function vy(t,n,a,s,u){switch(n){case"focusin":return Tr=Ol(Tr,t,n,a,s,u),!0;case"dragenter":return Ar=Ol(Ar,t,n,a,s,u),!0;case"mouseover":return wr=Ol(wr,t,n,a,s,u),!0;case"pointerover":var h=u.pointerId;return Ll.set(h,Ol(Ll.get(h)||null,t,n,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,Nl.set(h,Ol(Nl.get(h)||null,t,n,a,s,u)),!0}return!1}function ax(t){var n=la(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=p(a),n!==null){t.blockedOn=n,Gt(t.priority,function(){tx(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,Gt(t.priority,function(){tx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Wo=s,a.target.dispatchEvent(s),Wo=null}else return n=L(a),n!==null&&ex(n),t.blockedOn=a,!1;n.shift()}return!0}function rx(t,n,a){fu(t)&&a.delete(n)}function yy(){gd=!1,Tr!==null&&fu(Tr)&&(Tr=null),Ar!==null&&fu(Ar)&&(Ar=null),wr!==null&&fu(wr)&&(wr=null),Ll.forEach(rx),Nl.forEach(rx)}function hu(t,n){t.blockedOn===n&&(t.blockedOn=null,gd||(gd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yy)))}var du=null;function sx(t){du!==t&&(du=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){du===t&&(du=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(md(s||a)===null)continue;break}var h=L(a);h!==null&&(t.splice(n,3),n-=3,ph(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ho(t){function n(Y){return hu(Y,t)}Tr!==null&&hu(Tr,t),Ar!==null&&hu(Ar,t),wr!==null&&hu(wr,t),Ll.forEach(n),Nl.forEach(n);for(var a=0;a<Rr.length;a++){var s=Rr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)ax(a),a.blockedOn===null&&Rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],y=u[yn]||null;if(typeof h=="function")y||sx(a);else if(y){var U=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[yn]||null)U=y.formAction;else if(md(u)!==null)continue}else U=y.action;typeof U=="function"?a[s+1]=U:(a.splice(s,3),s-=3),sx(a)}}}function ox(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xd(t){this._internalRoot=t}pu.prototype.render=xd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Ci();Jg(a,s,t,n,null,null)},pu.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jg(t.current,2,null,t,null,null),jc(),n[ni]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Sa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Rr.length&&n!==0&&n<Rr[a].priority;a++);Rr.splice(a,0,t),a===0&&ax(t)}};var lx=e.version;if(lx!=="19.2.0")throw Error(r(527,lx,"19.2.0"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var Sy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Ne=mu.inject(Sy),Pe=mu}catch{}}return Fl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=m0,h=g0,y=x0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Kg(t,1,!1,null,null,a,s,null,u,h,y,ox),t[ni]=n.current,Jh(t),new xd(n)},Fl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",h=m0,y=g0,U=x0,Y=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.formState!==void 0&&(Y=a.formState)),n=Kg(t,1,!0,n,a??null,s,u,Y,h,y,U,ox),n.context=Qg(null),a=n.current,s=Ci(),s=ci(s),u=dr(s),u.callback=null,pr(a,u,s),a=s,n.current.lanes=a,Yn(n,a),pa(n),t[ni]=n.current,Jh(t),new pu(n)},Fl.version="19.2.0",Fl}var _x;function Ny(){if(_x)return yd.exports;_x=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yd.exports=Ly(),yd.exports}var Oy=Ny();const Kp="181",Co={ROTATE:0,DOLLY:1,PAN:2},Ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,vx=1,Fy=2,R_=1,zy=2,Za=3,Vr=0,Mi=1,ga=2,Ja=0,Do=1,yx=2,Sx=3,bx=4,By=5,_s=100,Iy=101,Hy=102,Vy=103,Gy=104,ky=200,Xy=201,Wy=202,qy=203,rp=204,sp=205,Yy=206,jy=207,Zy=208,Ky=209,Qy=210,Jy=211,$y=212,eS=213,tS=214,op=0,lp=1,cp=2,Lo=3,up=4,fp=5,hp=6,dp=7,C_=0,nS=1,iS=2,Hr=0,aS=1,rS=2,sS=3,oS=4,lS=5,cS=6,uS=7,D_=300,No=301,Oo=302,pp=303,mp=304,Ku=306,gp=1e3,Ka=1001,xp=1002,Li=1003,fS=1004,gu=1005,qi=1006,Ed=1007,ys=1008,va=1009,U_=1010,L_=1011,ql=1012,Qp=1013,Ss=1014,Qa=1015,zo=1016,Jp=1017,$p=1018,Yl=1020,N_=35902,O_=35899,P_=1021,F_=1022,sa=1023,jl=1026,Zl=1027,z_=1028,em=1029,tm=1030,nm=1031,im=1033,Iu=33776,Hu=33777,Vu=33778,Gu=33779,_p=35840,vp=35841,yp=35842,Sp=35843,bp=36196,Mp=37492,Ep=37496,Tp=37808,Ap=37809,wp=37810,Rp=37811,Cp=37812,Dp=37813,Up=37814,Lp=37815,Np=37816,Op=37817,Pp=37818,Fp=37819,zp=37820,Bp=37821,Ip=36492,Hp=36494,Vp=36495,Gp=36283,kp=36284,Xp=36285,Wp=36286,hS=3200,dS=3201,B_=0,pS=1,Br="",Xi="srgb",Po="srgb-linear",Wu="linear",pn="srgb",po=7680,Mx=519,mS=512,gS=513,xS=514,I_=515,_S=516,vS=517,yS=518,SS=519,Ex=35044,Tx="300 es",xa=2e3,qu=2001;function H_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bS(){const o=Yu("canvas");return o.style.display="block",o}const Ax={};function wx(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ct(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Cn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Kl(...o){const e=o.join(" ");e in Ax||(Ax[e]=!0,Ct(...o))}function MS(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,p=l.length;f<p;f++)l[f].call(this,e);e.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,qp=180/Math.PI;function Ql(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(si[o&255]+si[o>>8&255]+si[o>>16&255]+si[o>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[i&63|128]+si[i>>8&255]+"-"+si[i>>16&255]+si[i>>24&255]+si[r&255]+si[r>>8&255]+si[r>>16&255]+si[r>>24&255]).toLowerCase()}function qt(o,e,i){return Math.max(e,Math.min(i,o))}function ES(o,e){return(o%e+e)%e}function Td(o,e,i){return(1-i)*o+i*e}function zl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Si(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const TS={DEG2RAD:ku};class Nt{constructor(e=0,i=0){Nt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=qt(this.x,e.x,i.x),this.y=qt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=qt(this.x,e,i),this.y=qt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(qt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,p=this.y-e.y;return this.x=f*r-p*l+e.x,this.y=f*l+p*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,p,m){let _=r[l+0],g=r[l+1],b=r[l+2],v=r[l+3],E=f[p+0],A=f[p+1],D=f[p+2],P=f[p+3];if(m<=0){e[i+0]=_,e[i+1]=g,e[i+2]=b,e[i+3]=v;return}if(m>=1){e[i+0]=E,e[i+1]=A,e[i+2]=D,e[i+3]=P;return}if(v!==P||_!==E||g!==A||b!==D){let T=_*E+g*A+b*D+v*P;T<0&&(E=-E,A=-A,D=-D,P=-P,T=-T);let M=1-m;if(T<.9995){const X=Math.acos(T),H=Math.sin(X);M=Math.sin(M*X)/H,m=Math.sin(m*X)/H,_=_*M+E*m,g=g*M+A*m,b=b*M+D*m,v=v*M+P*m}else{_=_*M+E*m,g=g*M+A*m,b=b*M+D*m,v=v*M+P*m;const X=1/Math.sqrt(_*_+g*g+b*b+v*v);_*=X,g*=X,b*=X,v*=X}}e[i]=_,e[i+1]=g,e[i+2]=b,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,f,p){const m=r[l],_=r[l+1],g=r[l+2],b=r[l+3],v=f[p],E=f[p+1],A=f[p+2],D=f[p+3];return e[i]=m*D+b*v+_*A-g*E,e[i+1]=_*D+b*E+g*v-m*A,e[i+2]=g*D+b*A+m*E-_*v,e[i+3]=b*D-m*v-_*E-g*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,p=e._order,m=Math.cos,_=Math.sin,g=m(r/2),b=m(l/2),v=m(f/2),E=_(r/2),A=_(l/2),D=_(f/2);switch(p){case"XYZ":this._x=E*b*v+g*A*D,this._y=g*A*v-E*b*D,this._z=g*b*D+E*A*v,this._w=g*b*v-E*A*D;break;case"YXZ":this._x=E*b*v+g*A*D,this._y=g*A*v-E*b*D,this._z=g*b*D-E*A*v,this._w=g*b*v+E*A*D;break;case"ZXY":this._x=E*b*v-g*A*D,this._y=g*A*v+E*b*D,this._z=g*b*D+E*A*v,this._w=g*b*v-E*A*D;break;case"ZYX":this._x=E*b*v-g*A*D,this._y=g*A*v+E*b*D,this._z=g*b*D-E*A*v,this._w=g*b*v+E*A*D;break;case"YZX":this._x=E*b*v+g*A*D,this._y=g*A*v+E*b*D,this._z=g*b*D-E*A*v,this._w=g*b*v-E*A*D;break;case"XZY":this._x=E*b*v-g*A*D,this._y=g*A*v-E*b*D,this._z=g*b*D+E*A*v,this._w=g*b*v+E*A*D;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],p=i[1],m=i[5],_=i[9],g=i[2],b=i[6],v=i[10],E=r+m+v;if(E>0){const A=.5/Math.sqrt(E+1);this._w=.25/A,this._x=(b-_)*A,this._y=(f-g)*A,this._z=(p-l)*A}else if(r>m&&r>v){const A=2*Math.sqrt(1+r-m-v);this._w=(b-_)/A,this._x=.25*A,this._y=(l+p)/A,this._z=(f+g)/A}else if(m>v){const A=2*Math.sqrt(1+m-r-v);this._w=(f-g)/A,this._x=(l+p)/A,this._y=.25*A,this._z=(_+b)/A}else{const A=2*Math.sqrt(1+v-r-m);this._w=(p-l)/A,this._x=(f+g)/A,this._y=(_+b)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,p=e._w,m=i._x,_=i._y,g=i._z,b=i._w;return this._x=r*b+p*m+l*g-f*_,this._y=l*b+p*_+f*m-r*g,this._z=f*b+p*g+r*_-l*m,this._w=p*b-r*m-l*_-f*g,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,f=e._z,p=e._w,m=this.dot(e);m<0&&(r=-r,l=-l,f=-f,p=-p,m=-m);let _=1-i;if(m<.9995){const g=Math.acos(m),b=Math.sin(g);_=Math.sin(_*g)/b,i=Math.sin(i*g)/b,this._x=this._x*_+r*i,this._y=this._y*_+l*i,this._z=this._z*_+f*i,this._w=this._w*_+p*i,this._onChangeCallback()}else this._x=this._x*_+r*i,this._y=this._y*_+l*i,this._z=this._z*_+f*i,this._w=this._w*_+p*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class me{constructor(e=0,i=0,r=0){me.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Rx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Rx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,p=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*p,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*p,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*p,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,p=e.y,m=e.z,_=e.w,g=2*(p*l-m*r),b=2*(m*i-f*l),v=2*(f*r-p*i);return this.x=i+_*g+p*v-m*b,this.y=r+_*b+m*g-f*v,this.z=l+_*v+f*b-p*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=qt(this.x,e.x,i.x),this.y=qt(this.y,e.y,i.y),this.z=qt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=qt(this.x,e,i),this.y=qt(this.y,e,i),this.z=qt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,p=i.x,m=i.y,_=i.z;return this.x=l*_-f*m,this.y=f*p-r*_,this.z=r*m-l*p,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(qt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new me,Rx=new bs;class zt{constructor(e,i,r,l,f,p,m,_,g){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,m,_,g)}set(e,i,r,l,f,p,m,_,g){const b=this.elements;return b[0]=e,b[1]=l,b[2]=m,b[3]=i,b[4]=f,b[5]=_,b[6]=r,b[7]=p,b[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],m=r[3],_=r[6],g=r[1],b=r[4],v=r[7],E=r[2],A=r[5],D=r[8],P=l[0],T=l[3],M=l[6],X=l[1],H=l[4],q=l[7],J=l[2],G=l[5],W=l[8];return f[0]=p*P+m*X+_*J,f[3]=p*T+m*H+_*G,f[6]=p*M+m*q+_*W,f[1]=g*P+b*X+v*J,f[4]=g*T+b*H+v*G,f[7]=g*M+b*q+v*W,f[2]=E*P+A*X+D*J,f[5]=E*T+A*H+D*G,f[8]=E*M+A*q+D*W,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],g=e[7],b=e[8];return i*p*b-i*m*g-r*f*b+r*m*_+l*f*g-l*p*_}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],g=e[7],b=e[8],v=b*p-m*g,E=m*_-b*f,A=g*f-p*_,D=i*v+r*E+l*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=v*P,e[1]=(l*g-b*r)*P,e[2]=(m*r-l*p)*P,e[3]=E*P,e[4]=(b*i-l*_)*P,e[5]=(l*f-m*i)*P,e[6]=A*P,e[7]=(r*_-g*i)*P,e[8]=(p*i-r*f)*P,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,p,m){const _=Math.cos(f),g=Math.sin(f);return this.set(r*_,r*g,-r*(_*p+g*m)+p+e,-l*g,l*_,-l*(-g*p+_*m)+m+i,0,0,1),this}scale(e,i){return this.premultiply(wd.makeScale(e,i)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,i){return this.premultiply(wd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new zt,Cx=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dx=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const o={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(l,f,p){return this.enabled===!1||f===p||!f||!p||(this.spaces[f].transfer===pn&&(l.r=$a(l.r),l.g=$a(l.g),l.b=$a(l.b)),this.spaces[f].primaries!==this.spaces[p].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[p].fromXYZ)),this.spaces[p].transfer===pn&&(l.r=Uo(l.r),l.g=Uo(l.g),l.b=Uo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Br?Wu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,p){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Kl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Kl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Po]:{primaries:e,whitePoint:r,transfer:Wu,toXYZ:Cx,fromXYZ:Dx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Xi},outputColorSpaceConfig:{drawingBufferColorSpace:Xi}},[Xi]:{primaries:e,whitePoint:r,transfer:pn,toXYZ:Cx,fromXYZ:Dx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Xi}}}),o}const nn=AS();function $a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mo;class wS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mo===void 0&&(mo=Yu("canvas")),mo.width=e.width,mo.height=e.height;const l=mo.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=mo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let p=0;p<f.length;p++)f[p]=$a(f[p]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($a(i[r]/255)*255):i[r]=$a(i[r]);return{data:i,width:e.width,height:e.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Ql(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let p=0,m=l.length;p<m;p++)l[p].isDataTexture?f.push(Rd(l[p].image)):f.push(Rd(l[p]))}else f=Rd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let CS=0;const Cd=new me;class pi extends Es{constructor(e=pi.DEFAULT_IMAGE,i=pi.DEFAULT_MAPPING,r=Ka,l=Ka,f=qi,p=ys,m=sa,_=va,g=pi.DEFAULT_ANISOTROPY,b=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Ql(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=p,this.anisotropy=g,this.format=m,this.internalFormat=null,this.type=_,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=b,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){Ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gp:e.x=e.x-Math.floor(e.x);break;case Ka:e.x=e.x<0?0:1;break;case xp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gp:e.y=e.y-Math.floor(e.y);break;case Ka:e.y=e.y<0?0:1;break;case xp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=D_;pi.DEFAULT_ANISOTROPY=1;class Dn{constructor(e=0,i=0,r=0,l=1){Dn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,p=e.elements;return this.x=p[0]*i+p[4]*r+p[8]*l+p[12]*f,this.y=p[1]*i+p[5]*r+p[9]*l+p[13]*f,this.z=p[2]*i+p[6]*r+p[10]*l+p[14]*f,this.w=p[3]*i+p[7]*r+p[11]*l+p[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const _=e.elements,g=_[0],b=_[4],v=_[8],E=_[1],A=_[5],D=_[9],P=_[2],T=_[6],M=_[10];if(Math.abs(b-E)<.01&&Math.abs(v-P)<.01&&Math.abs(D-T)<.01){if(Math.abs(b+E)<.1&&Math.abs(v+P)<.1&&Math.abs(D+T)<.1&&Math.abs(g+A+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(g+1)/2,q=(A+1)/2,J=(M+1)/2,G=(b+E)/4,W=(v+P)/4,fe=(D+T)/4;return H>q&&H>J?H<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(H),l=G/r,f=W/r):q>J?q<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(q),r=G/l,f=fe/l):J<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(J),r=W/f,l=fe/f),this.set(r,l,f,i),this}let X=Math.sqrt((T-D)*(T-D)+(v-P)*(v-P)+(E-b)*(E-b));return Math.abs(X)<.001&&(X=1),this.x=(T-D)/X,this.y=(v-P)/X,this.z=(E-b)/X,this.w=Math.acos((g+A+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=qt(this.x,e.x,i.x),this.y=qt(this.y,e.y,i.y),this.z=qt(this.z,e.z,i.z),this.w=qt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=qt(this.x,e,i),this.y=qt(this.y,e,i),this.z=qt(this.z,e,i),this.w=qt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DS extends Es{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Dn(0,0,e,i),this.scissorTest=!1,this.viewport=new Dn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new pi(l);this.textures=[];const p=r.count;for(let m=0;m<p;m++)this.textures[m]=f.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:qi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new am(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends DS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class V_ extends pi{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class US extends pi{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=new me(1/0,1/0,1/0),i=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(na.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(na.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=na.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let p=0,m=f.count;p<m;p++)e.isMesh===!0?e.getVertexPosition(p,na):na.fromBufferAttribute(f,p),na.applyMatrix4(e.matrixWorld),this.expandByPoint(na);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xu.copy(r.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const l=e.children;for(let f=0,p=l.length;f<p;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,na),na.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bl),_u.subVectors(this.max,Bl),go.subVectors(e.a,Bl),xo.subVectors(e.b,Bl),_o.subVectors(e.c,Bl),Dr.subVectors(xo,go),Ur.subVectors(_o,xo),hs.subVectors(go,_o);let i=[0,-Dr.z,Dr.y,0,-Ur.z,Ur.y,0,-hs.z,hs.y,Dr.z,0,-Dr.x,Ur.z,0,-Ur.x,hs.z,0,-hs.x,-Dr.y,Dr.x,0,-Ur.y,Ur.x,0,-hs.y,hs.x,0];return!Dd(i,go,xo,_o,_u)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,go,xo,_o,_u))?!1:(vu.crossVectors(Dr,Ur),i=[vu.x,vu.y,vu.z],Dd(i,go,xo,_o,_u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,na).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(na).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ka=[new me,new me,new me,new me,new me,new me,new me,new me],na=new me,xu=new Bo,go=new me,xo=new me,_o=new me,Dr=new me,Ur=new me,hs=new me,Bl=new me,_u=new me,vu=new me,ds=new me;function Dd(o,e,i,r,l){for(let f=0,p=o.length-3;f<=p;f+=3){ds.fromArray(o,f);const m=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),_=e.dot(ds),g=i.dot(ds),b=r.dot(ds);if(Math.max(-Math.max(_,g,b),Math.min(_,g,b))>m)return!1}return!0}const LS=new Bo,Il=new me,Ud=new me;class Qu{constructor(e=new me,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):LS.setFromPoints(e).getCenter(r);let l=0;for(let f=0,p=e.length;f<p;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Il.subVectors(e,this.center);const i=Il.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Il,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Il.copy(e.center).add(Ud)),this.expandByPoint(Il.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xa=new me,Ld=new me,yu=new me,Lr=new me,Nd=new me,Su=new me,Od=new me;class Ju{constructor(e=new me,i=new me(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Xa.copy(this.origin).addScaledVector(this.direction,i),Xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ld.copy(e).add(i).multiplyScalar(.5),yu.copy(i).sub(e).normalize(),Lr.copy(this.origin).sub(Ld);const f=e.distanceTo(i)*.5,p=-this.direction.dot(yu),m=Lr.dot(this.direction),_=-Lr.dot(yu),g=Lr.lengthSq(),b=Math.abs(1-p*p);let v,E,A,D;if(b>0)if(v=p*_-m,E=p*m-_,D=f*b,v>=0)if(E>=-D)if(E<=D){const P=1/b;v*=P,E*=P,A=v*(v+p*E+2*m)+E*(p*v+E+2*_)+g}else E=f,v=Math.max(0,-(p*E+m)),A=-v*v+E*(E+2*_)+g;else E=-f,v=Math.max(0,-(p*E+m)),A=-v*v+E*(E+2*_)+g;else E<=-D?(v=Math.max(0,-(-p*f+m)),E=v>0?-f:Math.min(Math.max(-f,-_),f),A=-v*v+E*(E+2*_)+g):E<=D?(v=0,E=Math.min(Math.max(-f,-_),f),A=E*(E+2*_)+g):(v=Math.max(0,-(p*f+m)),E=v>0?f:Math.min(Math.max(-f,-_),f),A=-v*v+E*(E+2*_)+g);else E=p>0?-f:f,v=Math.max(0,-(p*E+m)),A=-v*v+E*(E+2*_)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ld).addScaledVector(yu,E),A}intersectSphere(e,i){Xa.subVectors(e.center,this.origin);const r=Xa.dot(this.direction),l=Xa.dot(Xa)-r*r,f=e.radius*e.radius;if(l>f)return null;const p=Math.sqrt(f-l),m=r-p,_=r+p;return _<0?null:m<0?this.at(_,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,p,m,_;const g=1/this.direction.x,b=1/this.direction.y,v=1/this.direction.z,E=this.origin;return g>=0?(r=(e.min.x-E.x)*g,l=(e.max.x-E.x)*g):(r=(e.max.x-E.x)*g,l=(e.min.x-E.x)*g),b>=0?(f=(e.min.y-E.y)*b,p=(e.max.y-E.y)*b):(f=(e.max.y-E.y)*b,p=(e.min.y-E.y)*b),r>p||f>l||((f>r||isNaN(r))&&(r=f),(p<l||isNaN(l))&&(l=p),v>=0?(m=(e.min.z-E.z)*v,_=(e.max.z-E.z)*v):(m=(e.max.z-E.z)*v,_=(e.min.z-E.z)*v),r>_||m>l)||((m>r||r!==r)&&(r=m),(_<l||l!==l)&&(l=_),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Xa)!==null}intersectTriangle(e,i,r,l,f){Nd.subVectors(i,e),Su.subVectors(r,e),Od.crossVectors(Nd,Su);let p=this.direction.dot(Od),m;if(p>0){if(l)return null;m=1}else if(p<0)m=-1,p=-p;else return null;Lr.subVectors(this.origin,e);const _=m*this.direction.dot(Su.crossVectors(Lr,Su));if(_<0)return null;const g=m*this.direction.dot(Nd.cross(Lr));if(g<0||_+g>p)return null;const b=-m*Lr.dot(Od);return b<0?null:this.at(b/p,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mn{constructor(e,i,r,l,f,p,m,_,g,b,v,E,A,D,P,T){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,m,_,g,b,v,E,A,D,P,T)}set(e,i,r,l,f,p,m,_,g,b,v,E,A,D,P,T){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=f,M[5]=p,M[9]=m,M[13]=_,M[2]=g,M[6]=b,M[10]=v,M[14]=E,M[3]=A,M[7]=D,M[11]=P,M[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/vo.setFromMatrixColumn(e,0).length(),f=1/vo.setFromMatrixColumn(e,1).length(),p=1/vo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*p,i[9]=r[9]*p,i[10]=r[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,p=Math.cos(r),m=Math.sin(r),_=Math.cos(l),g=Math.sin(l),b=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const E=p*b,A=p*v,D=m*b,P=m*v;i[0]=_*b,i[4]=-_*v,i[8]=g,i[1]=A+D*g,i[5]=E-P*g,i[9]=-m*_,i[2]=P-E*g,i[6]=D+A*g,i[10]=p*_}else if(e.order==="YXZ"){const E=_*b,A=_*v,D=g*b,P=g*v;i[0]=E+P*m,i[4]=D*m-A,i[8]=p*g,i[1]=p*v,i[5]=p*b,i[9]=-m,i[2]=A*m-D,i[6]=P+E*m,i[10]=p*_}else if(e.order==="ZXY"){const E=_*b,A=_*v,D=g*b,P=g*v;i[0]=E-P*m,i[4]=-p*v,i[8]=D+A*m,i[1]=A+D*m,i[5]=p*b,i[9]=P-E*m,i[2]=-p*g,i[6]=m,i[10]=p*_}else if(e.order==="ZYX"){const E=p*b,A=p*v,D=m*b,P=m*v;i[0]=_*b,i[4]=D*g-A,i[8]=E*g+P,i[1]=_*v,i[5]=P*g+E,i[9]=A*g-D,i[2]=-g,i[6]=m*_,i[10]=p*_}else if(e.order==="YZX"){const E=p*_,A=p*g,D=m*_,P=m*g;i[0]=_*b,i[4]=P-E*v,i[8]=D*v+A,i[1]=v,i[5]=p*b,i[9]=-m*b,i[2]=-g*b,i[6]=A*v+D,i[10]=E-P*v}else if(e.order==="XZY"){const E=p*_,A=p*g,D=m*_,P=m*g;i[0]=_*b,i[4]=-v,i[8]=g*b,i[1]=E*v+P,i[5]=p*b,i[9]=A*v-D,i[2]=D*v-A,i[6]=m*b,i[10]=P*v+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,OS)}lookAt(e,i,r){const l=this.elements;return Di.subVectors(e,i),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Nr.crossVectors(r,Di),Nr.lengthSq()===0&&(Math.abs(r.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Nr.crossVectors(r,Di)),Nr.normalize(),bu.crossVectors(Di,Nr),l[0]=Nr.x,l[4]=bu.x,l[8]=Di.x,l[1]=Nr.y,l[5]=bu.y,l[9]=Di.y,l[2]=Nr.z,l[6]=bu.z,l[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],m=r[4],_=r[8],g=r[12],b=r[1],v=r[5],E=r[9],A=r[13],D=r[2],P=r[6],T=r[10],M=r[14],X=r[3],H=r[7],q=r[11],J=r[15],G=l[0],W=l[4],fe=l[8],O=l[12],N=l[1],j=l[5],te=l[9],oe=l[13],Se=l[2],ye=l[6],B=l[10],$=l[14],ie=l[3],we=l[7],De=l[11],V=l[15];return f[0]=p*G+m*N+_*Se+g*ie,f[4]=p*W+m*j+_*ye+g*we,f[8]=p*fe+m*te+_*B+g*De,f[12]=p*O+m*oe+_*$+g*V,f[1]=b*G+v*N+E*Se+A*ie,f[5]=b*W+v*j+E*ye+A*we,f[9]=b*fe+v*te+E*B+A*De,f[13]=b*O+v*oe+E*$+A*V,f[2]=D*G+P*N+T*Se+M*ie,f[6]=D*W+P*j+T*ye+M*we,f[10]=D*fe+P*te+T*B+M*De,f[14]=D*O+P*oe+T*$+M*V,f[3]=X*G+H*N+q*Se+J*ie,f[7]=X*W+H*j+q*ye+J*we,f[11]=X*fe+H*te+q*B+J*De,f[15]=X*O+H*oe+q*$+J*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],p=e[1],m=e[5],_=e[9],g=e[13],b=e[2],v=e[6],E=e[10],A=e[14],D=e[3],P=e[7],T=e[11],M=e[15];return D*(+f*_*v-l*g*v-f*m*E+r*g*E+l*m*A-r*_*A)+P*(+i*_*A-i*g*E+f*p*E-l*p*A+l*g*b-f*_*b)+T*(+i*g*v-i*m*A-f*p*v+r*p*A+f*m*b-r*g*b)+M*(-l*m*b-i*_*v+i*m*E+l*p*v-r*p*E+r*_*b)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],m=e[5],_=e[6],g=e[7],b=e[8],v=e[9],E=e[10],A=e[11],D=e[12],P=e[13],T=e[14],M=e[15],X=v*T*g-P*E*g+P*_*A-m*T*A-v*_*M+m*E*M,H=D*E*g-b*T*g-D*_*A+p*T*A+b*_*M-p*E*M,q=b*P*g-D*v*g+D*m*A-p*P*A-b*m*M+p*v*M,J=D*v*_-b*P*_-D*m*E+p*P*E+b*m*T-p*v*T,G=i*X+r*H+l*q+f*J;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/G;return e[0]=X*W,e[1]=(P*E*f-v*T*f-P*l*A+r*T*A+v*l*M-r*E*M)*W,e[2]=(m*T*f-P*_*f+P*l*g-r*T*g-m*l*M+r*_*M)*W,e[3]=(v*_*f-m*E*f-v*l*g+r*E*g+m*l*A-r*_*A)*W,e[4]=H*W,e[5]=(b*T*f-D*E*f+D*l*A-i*T*A-b*l*M+i*E*M)*W,e[6]=(D*_*f-p*T*f-D*l*g+i*T*g+p*l*M-i*_*M)*W,e[7]=(p*E*f-b*_*f+b*l*g-i*E*g-p*l*A+i*_*A)*W,e[8]=q*W,e[9]=(D*v*f-b*P*f-D*r*A+i*P*A+b*r*M-i*v*M)*W,e[10]=(p*P*f-D*m*f+D*r*g-i*P*g-p*r*M+i*m*M)*W,e[11]=(b*m*f-p*v*f-b*r*g+i*v*g+p*r*A-i*m*A)*W,e[12]=J*W,e[13]=(b*P*l-D*v*l+D*r*E-i*P*E-b*r*T+i*v*T)*W,e[14]=(D*m*l-p*P*l-D*r*_+i*P*_+p*r*T-i*m*T)*W,e[15]=(p*v*l-b*m*l+b*r*_-i*v*_-p*r*E+i*m*E)*W,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,p=e.x,m=e.y,_=e.z,g=f*p,b=f*m;return this.set(g*p+r,g*m-l*_,g*_+l*m,0,g*m+l*_,b*m+r,b*_-l*p,0,g*_-l*m,b*_+l*p,f*_*_+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,p){return this.set(1,r,f,0,e,1,p,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,p=i._y,m=i._z,_=i._w,g=f+f,b=p+p,v=m+m,E=f*g,A=f*b,D=f*v,P=p*b,T=p*v,M=m*v,X=_*g,H=_*b,q=_*v,J=r.x,G=r.y,W=r.z;return l[0]=(1-(P+M))*J,l[1]=(A+q)*J,l[2]=(D-H)*J,l[3]=0,l[4]=(A-q)*G,l[5]=(1-(E+M))*G,l[6]=(T+X)*G,l[7]=0,l[8]=(D+H)*W,l[9]=(T-X)*W,l[10]=(1-(E+P))*W,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=vo.set(l[0],l[1],l[2]).length();const p=vo.set(l[4],l[5],l[6]).length(),m=vo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],ia.copy(this);const g=1/f,b=1/p,v=1/m;return ia.elements[0]*=g,ia.elements[1]*=g,ia.elements[2]*=g,ia.elements[4]*=b,ia.elements[5]*=b,ia.elements[6]*=b,ia.elements[8]*=v,ia.elements[9]*=v,ia.elements[10]*=v,i.setFromRotationMatrix(ia),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,f,p,m=xa,_=!1){const g=this.elements,b=2*f/(i-e),v=2*f/(r-l),E=(i+e)/(i-e),A=(r+l)/(r-l);let D,P;if(_)D=f/(p-f),P=p*f/(p-f);else if(m===xa)D=-(p+f)/(p-f),P=-2*p*f/(p-f);else if(m===qu)D=-p/(p-f),P=-p*f/(p-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return g[0]=b,g[4]=0,g[8]=E,g[12]=0,g[1]=0,g[5]=v,g[9]=A,g[13]=0,g[2]=0,g[6]=0,g[10]=D,g[14]=P,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,f,p,m=xa,_=!1){const g=this.elements,b=2/(i-e),v=2/(r-l),E=-(i+e)/(i-e),A=-(r+l)/(r-l);let D,P;if(_)D=1/(p-f),P=p/(p-f);else if(m===xa)D=-2/(p-f),P=-(p+f)/(p-f);else if(m===qu)D=-1/(p-f),P=-f/(p-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return g[0]=b,g[4]=0,g[8]=0,g[12]=E,g[1]=0,g[5]=v,g[9]=0,g[13]=A,g[2]=0,g[6]=0,g[10]=D,g[14]=P,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const vo=new me,ia=new Mn,NS=new me(0,0,0),OS=new me(1,1,1),Nr=new me,bu=new me,Di=new me,Ux=new Mn,Lx=new bs;class ya{constructor(e=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],p=l[4],m=l[8],_=l[1],g=l[5],b=l[9],v=l[2],E=l[6],A=l[10];switch(i){case"XYZ":this._y=Math.asin(qt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-b,A),this._z=Math.atan2(-p,f)):(this._x=Math.atan2(E,g),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(m,A),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(qt(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-v,A),this._z=Math.atan2(-p,g)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-qt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(E,A),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-p,g));break;case"YZX":this._z=Math.asin(qt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-b,g),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(m,A));break;case"XZY":this._z=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(E,g),this._y=Math.atan2(m,f)):(this._x=Math.atan2(-b,A),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Ux.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ux,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Lx.setFromEuler(this),this.setFromQuaternion(Lx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PS=0;const Nx=new me,yo=new bs,Wa=new Mn,Mu=new me,Hl=new me,FS=new me,zS=new bs,Ox=new me(1,0,0),Px=new me(0,1,0),Fx=new me(0,0,1),zx={type:"added"},BS={type:"removed"},So={type:"childadded",child:null},Pd={type:"childremoved",child:null};class ti extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new me,i=new ya,r=new bs,l=new me(1,1,1);function f(){r.setFromEuler(i,!1)}function p(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Mn},normalMatrix:{value:new zt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yo.setFromAxisAngle(e,i),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,i){return yo.setFromAxisAngle(e,i),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(Ox,e)}rotateY(e){return this.rotateOnAxis(Px,e)}rotateZ(e){return this.rotateOnAxis(Fx,e)}translateOnAxis(e,i){return Nx.copy(e).applyQuaternion(this.quaternion),this.position.add(Nx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ox,e)}translateY(e){return this.translateOnAxis(Px,e)}translateZ(e){return this.translateOnAxis(Fx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mu.copy(e):Mu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(Hl,Mu,this.up):Wa.lookAt(Mu,Hl,this.up),this.quaternion.setFromRotationMatrix(Wa),l&&(Wa.extractRotation(l.matrixWorld),yo.setFromRotationMatrix(Wa),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Cn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zx),So.child=e,this.dispatchEvent(So),So.child=null):Cn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(BS),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zx),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const p=this.children[r].getObjectByProperty(e,i);if(p!==void 0)return p}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(m,_){return m[_.uuid]===void 0&&(m[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const _=m.shapes;if(Array.isArray(_))for(let g=0,b=_.length;g<b;g++){const v=_[g];f(e.shapes,v)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let _=0,g=this.material.length;_<g;_++)m.push(f(e.materials,this.material[_]));l.material=m}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const _=this.animations[m];l.animations.push(f(e.animations,_))}}if(i){const m=p(e.geometries),_=p(e.materials),g=p(e.textures),b=p(e.images),v=p(e.shapes),E=p(e.skeletons),A=p(e.animations),D=p(e.nodes);m.length>0&&(r.geometries=m),_.length>0&&(r.materials=_),g.length>0&&(r.textures=g),b.length>0&&(r.images=b),v.length>0&&(r.shapes=v),E.length>0&&(r.skeletons=E),A.length>0&&(r.animations=A),D.length>0&&(r.nodes=D)}return r.object=l,r;function p(m){const _=[];for(const g in m){const b=m[g];delete b.metadata,_.push(b)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new me(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const aa=new me,qa=new me,Fd=new me,Ya=new me,bo=new me,Mo=new me,Bx=new me,zd=new me,Bd=new me,Id=new me,Hd=new Dn,Vd=new Dn,Gd=new Dn;class ra{constructor(e=new me,i=new me,r=new me){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),aa.subVectors(e,i),l.cross(aa);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){aa.subVectors(l,i),qa.subVectors(r,i),Fd.subVectors(e,i);const p=aa.dot(aa),m=aa.dot(qa),_=aa.dot(Fd),g=qa.dot(qa),b=qa.dot(Fd),v=p*g-m*m;if(v===0)return f.set(0,0,0),null;const E=1/v,A=(g*_-m*b)*E,D=(p*b-m*_)*E;return f.set(1-A-D,D,A)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(e,i,r,l,f,p,m,_){return this.getBarycoord(e,i,r,l,Ya)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Ya.x),_.addScaledVector(p,Ya.y),_.addScaledVector(m,Ya.z),_)}static getInterpolatedAttribute(e,i,r,l,f,p){return Hd.setScalar(0),Vd.setScalar(0),Gd.setScalar(0),Hd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),Gd.fromBufferAttribute(e,l),p.setScalar(0),p.addScaledVector(Hd,f.x),p.addScaledVector(Vd,f.y),p.addScaledVector(Gd,f.z),p}static isFrontFacing(e,i,r,l){return aa.subVectors(r,i),qa.subVectors(e,i),aa.cross(qa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return aa.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),aa.cross(qa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ra.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ra.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return ra.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return ra.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ra.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let p,m;bo.subVectors(l,r),Mo.subVectors(f,r),zd.subVectors(e,r);const _=bo.dot(zd),g=Mo.dot(zd);if(_<=0&&g<=0)return i.copy(r);Bd.subVectors(e,l);const b=bo.dot(Bd),v=Mo.dot(Bd);if(b>=0&&v<=b)return i.copy(l);const E=_*v-b*g;if(E<=0&&_>=0&&b<=0)return p=_/(_-b),i.copy(r).addScaledVector(bo,p);Id.subVectors(e,f);const A=bo.dot(Id),D=Mo.dot(Id);if(D>=0&&A<=D)return i.copy(f);const P=A*g-_*D;if(P<=0&&g>=0&&D<=0)return m=g/(g-D),i.copy(r).addScaledVector(Mo,m);const T=b*D-A*v;if(T<=0&&v-b>=0&&A-D>=0)return Bx.subVectors(f,l),m=(v-b)/(v-b+(A-D)),i.copy(l).addScaledVector(Bx,m);const M=1/(T+P+E);return p=P*M,m=E*M,i.copy(r).addScaledVector(bo,p).addScaledVector(Mo,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function kd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Kt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=nn.workingColorSpace){return this.r=e,this.g=i,this.b=r,nn.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=nn.workingColorSpace){if(e=ES(e,1),i=qt(i,0,1),r=qt(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,p=2*r-f;this.r=kd(p,f,e+1/3),this.g=kd(p,f,e),this.b=kd(p,f,e-1/3)}return nn.colorSpaceToWorking(this,l),this}setStyle(e,i=Xi){function r(f){f!==void 0&&parseFloat(f)<1&&Ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const p=l[1],m=l[2];switch(p){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:Ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],p=f.length;if(p===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(f,16),i);Ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Xi){const r=G_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):Ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return nn.workingToColorSpace(oi.copy(this),e),Math.round(qt(oi.r*255,0,255))*65536+Math.round(qt(oi.g*255,0,255))*256+Math.round(qt(oi.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=nn.workingColorSpace){nn.workingToColorSpace(oi.copy(this),i);const r=oi.r,l=oi.g,f=oi.b,p=Math.max(r,l,f),m=Math.min(r,l,f);let _,g;const b=(m+p)/2;if(m===p)_=0,g=0;else{const v=p-m;switch(g=b<=.5?v/(p+m):v/(2-p-m),p){case r:_=(l-f)/v+(l<f?6:0);break;case l:_=(f-r)/v+2;break;case f:_=(r-l)/v+4;break}_/=6}return e.h=_,e.s=g,e.l=b,e}getRGB(e,i=nn.workingColorSpace){return nn.workingToColorSpace(oi.copy(this),i),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=Xi){nn.workingToColorSpace(oi.copy(this),e);const i=oi.r,r=oi.g,l=oi.b;return e!==Xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+i,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Or),e.getHSL(Eu);const r=Td(Or.h,Eu.h,i),l=Td(Or.s,Eu.s,i),f=Td(Or.l,Eu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new Kt;Kt.NAMES=G_;let IS=0;class Io extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ql(),this.name="",this.type="Material",this.blending=Do,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=sp,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){Ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(r.blending=this.blending),this.side!==Vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rp&&(r.blendSrc=this.blendSrc),this.blendDst!==sp&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(r.stencilFail=this.stencilFail),this.stencilZFail!==po&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}if(i){const f=l(e.textures),p=l(e.images);f.length>0&&(r.textures=f),p.length>0&&(r.images=p)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class k_ extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=C_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vn=new me,Tu=new Nt;let HS=0;class _a{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Ex,this.updateRanges=[],this.gpuType=Qa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(e),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix3(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=zl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),l=Si(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Si(i,this.array),r=Si(r,this.array),l=Si(l,this.array),f=Si(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ex&&(e.usage=this.usage),e}}class X_ extends _a{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class W_ extends _a{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ni extends _a{constructor(e,i,r){super(new Float32Array(e),i,r)}}let VS=0;const ki=new Mn,Xd=new ti,Eo=new me,Ui=new Bo,Vl=new Bo,Kn=new me;class oa extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?W_:X_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new zt().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,i,r){return ki.makeTranslation(e,i,r),this.applyMatrix4(ki),this}scale(e,i,r){return ki.makeScale(e,i,r),this.applyMatrix4(ki),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const p=e[l];r.push(p.x,p.y,p.z||0)}this.setAttribute("position",new Ni(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];Ui.setFromBufferAttribute(f),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new me,1/0);return}if(e){const r=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),i)for(let f=0,p=i.length;f<p;f++){const m=i[f];Vl.setFromBufferAttribute(m),this.morphTargetsRelative?(Kn.addVectors(Ui.min,Vl.min),Ui.expandByPoint(Kn),Kn.addVectors(Ui.max,Vl.max),Ui.expandByPoint(Kn)):(Ui.expandByPoint(Vl.min),Ui.expandByPoint(Vl.max))}Ui.getCenter(r);let l=0;for(let f=0,p=e.count;f<p;f++)Kn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Kn));if(i)for(let f=0,p=i.length;f<p;f++){const m=i[f],_=this.morphTargetsRelative;for(let g=0,b=m.count;g<b;g++)Kn.fromBufferAttribute(m,g),_&&(Eo.fromBufferAttribute(e,g),Kn.add(Eo)),l=Math.max(l,r.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _a(new Float32Array(4*r.count),4));const p=this.getAttribute("tangent"),m=[],_=[];for(let fe=0;fe<r.count;fe++)m[fe]=new me,_[fe]=new me;const g=new me,b=new me,v=new me,E=new Nt,A=new Nt,D=new Nt,P=new me,T=new me;function M(fe,O,N){g.fromBufferAttribute(r,fe),b.fromBufferAttribute(r,O),v.fromBufferAttribute(r,N),E.fromBufferAttribute(f,fe),A.fromBufferAttribute(f,O),D.fromBufferAttribute(f,N),b.sub(g),v.sub(g),A.sub(E),D.sub(E);const j=1/(A.x*D.y-D.x*A.y);isFinite(j)&&(P.copy(b).multiplyScalar(D.y).addScaledVector(v,-A.y).multiplyScalar(j),T.copy(v).multiplyScalar(A.x).addScaledVector(b,-D.x).multiplyScalar(j),m[fe].add(P),m[O].add(P),m[N].add(P),_[fe].add(T),_[O].add(T),_[N].add(T))}let X=this.groups;X.length===0&&(X=[{start:0,count:e.count}]);for(let fe=0,O=X.length;fe<O;++fe){const N=X[fe],j=N.start,te=N.count;for(let oe=j,Se=j+te;oe<Se;oe+=3)M(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const H=new me,q=new me,J=new me,G=new me;function W(fe){J.fromBufferAttribute(l,fe),G.copy(J);const O=m[fe];H.copy(O),H.sub(J.multiplyScalar(J.dot(O))).normalize(),q.crossVectors(G,O);const j=q.dot(_[fe])<0?-1:1;p.setXYZW(fe,H.x,H.y,H.z,j)}for(let fe=0,O=X.length;fe<O;++fe){const N=X[fe],j=N.start,te=N.count;for(let oe=j,Se=j+te;oe<Se;oe+=3)W(e.getX(oe+0)),W(e.getX(oe+1)),W(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _a(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let E=0,A=r.count;E<A;E++)r.setXYZ(E,0,0,0);const l=new me,f=new me,p=new me,m=new me,_=new me,g=new me,b=new me,v=new me;if(e)for(let E=0,A=e.count;E<A;E+=3){const D=e.getX(E+0),P=e.getX(E+1),T=e.getX(E+2);l.fromBufferAttribute(i,D),f.fromBufferAttribute(i,P),p.fromBufferAttribute(i,T),b.subVectors(p,f),v.subVectors(l,f),b.cross(v),m.fromBufferAttribute(r,D),_.fromBufferAttribute(r,P),g.fromBufferAttribute(r,T),m.add(b),_.add(b),g.add(b),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(P,_.x,_.y,_.z),r.setXYZ(T,g.x,g.y,g.z)}else for(let E=0,A=i.count;E<A;E+=3)l.fromBufferAttribute(i,E+0),f.fromBufferAttribute(i,E+1),p.fromBufferAttribute(i,E+2),b.subVectors(p,f),v.subVectors(l,f),b.cross(v),r.setXYZ(E+0,b.x,b.y,b.z),r.setXYZ(E+1,b.x,b.y,b.z),r.setXYZ(E+2,b.x,b.y,b.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Kn.fromBufferAttribute(e,i),Kn.normalize(),e.setXYZ(i,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function e(m,_){const g=m.array,b=m.itemSize,v=m.normalized,E=new g.constructor(_.length*b);let A=0,D=0;for(let P=0,T=_.length;P<T;P++){m.isInterleavedBufferAttribute?A=_[P]*m.data.stride+m.offset:A=_[P]*b;for(let M=0;M<b;M++)E[D++]=g[A++]}return new _a(E,b,v)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,r=this.index.array,l=this.attributes;for(const m in l){const _=l[m],g=e(_,r);i.setAttribute(m,g)}const f=this.morphAttributes;for(const m in f){const _=[],g=f[m];for(let b=0,v=g.length;b<v;b++){const E=g[b],A=e(E,r);_.push(A)}i.morphAttributes[m]=_}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let m=0,_=p.length;m<_;m++){const g=p[m];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(e[g]=_[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const g=r[_];e.data.attributes[_]=g.toJSON(e.data)}const l={};let f=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],b=[];for(let v=0,E=g.length;v<E;v++){const A=g[v];b.push(A.toJSON(e.data))}b.length>0&&(l[_]=b,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(e.data.groups=JSON.parse(JSON.stringify(p)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const g in l){const b=l[g];this.setAttribute(g,b.clone(i))}const f=e.morphAttributes;for(const g in f){const b=[],v=f[g];for(let E=0,A=v.length;E<A;E++)b.push(v[E].clone(i));this.morphAttributes[g]=b}this.morphTargetsRelative=e.morphTargetsRelative;const p=e.groups;for(let g=0,b=p.length;g<b;g++){const v=p[g];this.addGroup(v.start,v.count,v.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ix=new Mn,ps=new Ju,Au=new Qu,Hx=new me,wu=new me,Ru=new me,Cu=new me,Wd=new me,Du=new me,Vx=new me,Uu=new me;class Yi extends ti{constructor(e=new oa,i=new k_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const m=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,p=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(f&&m){Du.set(0,0,0);for(let _=0,g=f.length;_<g;_++){const b=m[_],v=f[_];b!==0&&(Wd.fromBufferAttribute(v,e),p?Du.addScaledVector(Wd,b):Du.addScaledVector(Wd.sub(i),b))}i.add(Du)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(f),ps.copy(e.ray).recast(e.near),!(Au.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Au,Hx)===null||ps.origin.distanceToSquared(Hx)>(e.far-e.near)**2))&&(Ix.copy(f).invert(),ps.copy(e.ray).applyMatrix4(Ix),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ps)))}_computeIntersections(e,i,r){let l;const f=this.geometry,p=this.material,m=f.index,_=f.attributes.position,g=f.attributes.uv,b=f.attributes.uv1,v=f.attributes.normal,E=f.groups,A=f.drawRange;if(m!==null)if(Array.isArray(p))for(let D=0,P=E.length;D<P;D++){const T=E[D],M=p[T.materialIndex],X=Math.max(T.start,A.start),H=Math.min(m.count,Math.min(T.start+T.count,A.start+A.count));for(let q=X,J=H;q<J;q+=3){const G=m.getX(q),W=m.getX(q+1),fe=m.getX(q+2);l=Lu(this,M,e,r,g,b,v,G,W,fe),l&&(l.faceIndex=Math.floor(q/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const D=Math.max(0,A.start),P=Math.min(m.count,A.start+A.count);for(let T=D,M=P;T<M;T+=3){const X=m.getX(T),H=m.getX(T+1),q=m.getX(T+2);l=Lu(this,p,e,r,g,b,v,X,H,q),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(p))for(let D=0,P=E.length;D<P;D++){const T=E[D],M=p[T.materialIndex],X=Math.max(T.start,A.start),H=Math.min(_.count,Math.min(T.start+T.count,A.start+A.count));for(let q=X,J=H;q<J;q+=3){const G=q,W=q+1,fe=q+2;l=Lu(this,M,e,r,g,b,v,G,W,fe),l&&(l.faceIndex=Math.floor(q/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const D=Math.max(0,A.start),P=Math.min(_.count,A.start+A.count);for(let T=D,M=P;T<M;T+=3){const X=T,H=T+1,q=T+2;l=Lu(this,p,e,r,g,b,v,X,H,q),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}}}function GS(o,e,i,r,l,f,p,m){let _;if(e.side===Mi?_=r.intersectTriangle(p,f,l,!0,m):_=r.intersectTriangle(l,f,p,e.side===Vr,m),_===null)return null;Uu.copy(m),Uu.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Uu);return g<i.near||g>i.far?null:{distance:g,point:Uu.clone(),object:o}}function Lu(o,e,i,r,l,f,p,m,_,g){o.getVertexPosition(m,wu),o.getVertexPosition(_,Ru),o.getVertexPosition(g,Cu);const b=GS(o,e,i,r,wu,Ru,Cu,Vx);if(b){const v=new me;ra.getBarycoord(Vx,wu,Ru,Cu,v),l&&(b.uv=ra.getInterpolatedAttribute(l,m,_,g,v,new Nt)),f&&(b.uv1=ra.getInterpolatedAttribute(f,m,_,g,v,new Nt)),p&&(b.normal=ra.getInterpolatedAttribute(p,m,_,g,v,new me),b.normal.dot(r.direction)>0&&b.normal.multiplyScalar(-1));const E={a:m,b:_,c:g,normal:new me,materialIndex:0};ra.getNormal(wu,Ru,Cu,E.normal),b.face=E,b.barycoord=v}return b}class Jl extends oa{constructor(e=1,i=1,r=1,l=1,f=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:p};const m=this;l=Math.floor(l),f=Math.floor(f),p=Math.floor(p);const _=[],g=[],b=[],v=[];let E=0,A=0;D("z","y","x",-1,-1,r,i,e,p,f,0),D("z","y","x",1,-1,r,i,-e,p,f,1),D("x","z","y",1,1,e,r,i,l,p,2),D("x","z","y",1,-1,e,r,-i,l,p,3),D("x","y","z",1,-1,e,i,r,l,f,4),D("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(_),this.setAttribute("position",new Ni(g,3)),this.setAttribute("normal",new Ni(b,3)),this.setAttribute("uv",new Ni(v,2));function D(P,T,M,X,H,q,J,G,W,fe,O){const N=q/W,j=J/fe,te=q/2,oe=J/2,Se=G/2,ye=W+1,B=fe+1;let $=0,ie=0;const we=new me;for(let De=0;De<B;De++){const V=De*j-oe;for(let pe=0;pe<ye;pe++){const Ue=pe*N-te;we[P]=Ue*X,we[T]=V*H,we[M]=Se,g.push(we.x,we.y,we.z),we[P]=0,we[T]=0,we[M]=G>0?1:-1,b.push(we.x,we.y,we.z),v.push(pe/W),v.push(1-De/fe),$+=1}}for(let De=0;De<fe;De++)for(let V=0;V<W;V++){const pe=E+V+ye*De,Ue=E+V+ye*(De+1),Fe=E+(V+1)+ye*(De+1),et=E+(V+1)+ye*De;_.push(pe,Ue,et),_.push(Ue,Fe,et),ie+=6}m.addGroup(A,ie,O),A+=ie,E+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function di(o){const e={};for(let i=0;i<o.length;i++){const r=Fo(o[i]);for(const l in r)e[l]=r[l]}return e}function kS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function q_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nn.workingColorSpace}const XS={clone:Fo,merge:di};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=kS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const p=this.uniforms[l].value;p&&p.isTexture?i.uniforms[l]={type:"t",value:p.toJSON(e).uuid}:p&&p.isColor?i.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[l]={type:"m4",value:p.toArray()}:i.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Y_ extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new me,Gx=new Nt,kx=new Nt;class Wi extends Y_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,i){return this.getViewBounds(e,Gx,kx),i.subVectors(kx,Gx)}setViewOffset(e,i,r,l,f,p){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ku*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const p=this.view;if(this.view!==null&&this.view.enabled){const _=p.fullWidth,g=p.fullHeight;f+=p.offsetX*l/_,i-=p.offsetY*r/g,l*=p.width/_,r*=p.height/g}const m=this.filmOffset;m!==0&&(f+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const To=-90,Ao=1;class YS extends ti{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wi(To,Ao,e,i);l.layers=this.layers,this.add(l);const f=new Wi(To,Ao,e,i);f.layers=this.layers,this.add(f);const p=new Wi(To,Ao,e,i);p.layers=this.layers,this.add(p);const m=new Wi(To,Ao,e,i);m.layers=this.layers,this.add(m);const _=new Wi(To,Ao,e,i);_.layers=this.layers,this.add(_);const g=new Wi(To,Ao,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,p,m,_]=i;for(const g of i)this.remove(g);if(e===xa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,p,m,_,g,b]=this.children,v=e.getRenderTarget(),E=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),D=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,p),e.setRenderTarget(r,2,l),e.render(i,m),e.setRenderTarget(r,3,l),e.render(i,_),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=P,e.setRenderTarget(r,5,l),e.render(i,b),e.setRenderTarget(v,E,A),e.xr.enabled=D,r.texture.needsPMREMUpdate=!0}}class j_ extends pi{constructor(e=[],i=No,r,l,f,p,m,_,g,b){super(e,i,r,l,f,p,m,_,g,b),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends Ms{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new j_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jl(5,5,5),f=new er({name:"CubemapFromEquirect",uniforms:Fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mi,blending:Ja});f.uniforms.tEquirect.value=i;const p=new Yi(l,f),m=i.minFilter;return i.minFilter===ys&&(i.minFilter=qi),new YS(1,10,this).update(e,p),i.minFilter=m,p.geometry.dispose(),p.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let p=0;p<6;p++)e.setRenderTarget(this,p),e.clear(i,r,l);e.setRenderTarget(f)}}class Xl extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZS={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,p=null;const m=this._targetRay,_=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){p=!0;for(const P of e.hand.values()){const T=i.getJointPose(P,r),M=this._getHandJoint(g,P);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}const b=g.joints["index-finger-tip"],v=g.joints["thumb-tip"],E=b.position.distanceTo(v.position),A=.02,D=.005;g.inputState.pinching&&E>A+D?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&E<=A-D&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return m!==null&&(m.visible=l!==null),_!==null&&(_.visible=f!==null),g!==null&&(g.visible=p!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Xl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class KS extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class QS extends pi{constructor(e=null,i=1,r=1,l,f,p,m,_,g=Li,b=Li,v,E){super(null,p,m,_,g,b,l,f,v,E),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new me,JS=new me,$S=new zt;class zr{constructor(e=new me(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yd.subVectors(r,i).cross(JS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$S.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Qu,eb=new Nt(.5,.5),Nu=new me;class sm{constructor(e=new zr,i=new zr,r=new zr,l=new zr,f=new zr,p=new zr){this.planes=[e,i,r,l,f,p]}set(e,i,r,l,f,p){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(f),m[5].copy(p),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=xa,r=!1){const l=this.planes,f=e.elements,p=f[0],m=f[1],_=f[2],g=f[3],b=f[4],v=f[5],E=f[6],A=f[7],D=f[8],P=f[9],T=f[10],M=f[11],X=f[12],H=f[13],q=f[14],J=f[15];if(l[0].setComponents(g-p,A-b,M-D,J-X).normalize(),l[1].setComponents(g+p,A+b,M+D,J+X).normalize(),l[2].setComponents(g+m,A+v,M+P,J+H).normalize(),l[3].setComponents(g-m,A-v,M-P,J-H).normalize(),r)l[4].setComponents(_,E,T,q).normalize(),l[5].setComponents(g-_,A-E,M-T,J-q).normalize();else if(l[4].setComponents(g-_,A-E,M-T,J-q).normalize(),i===xa)l[5].setComponents(g+_,A+E,M+T,J+q).normalize();else if(i===qu)l[5].setComponents(_,E,T,q).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const i=eb.distanceTo(e.center);return ms.radius=.7071067811865476+i,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nu.x=l.normal.x>0?e.max.x:e.min.x,Nu.y=l.normal.y>0?e.max.y:e.min.y,Nu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z_ extends Io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ju=new me,Zu=new me,Xx=new Mn,Gl=new Ju,Ou=new Qu,jd=new me,Wx=new me;class tb extends ti{constructor(e=new oa,i=new Z_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,f=i.count;l<f;l++)ju.fromBufferAttribute(i,l-1),Zu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=ju.distanceTo(Zu);e.setAttribute("lineDistance",new Ni(r,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,p=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(l),Ou.radius+=f,e.ray.intersectsSphere(Ou)===!1)return;Xx.copy(l).invert(),Gl.copy(e.ray).applyMatrix4(Xx);const m=f/((this.scale.x+this.scale.y+this.scale.z)/3),_=m*m,g=this.isLineSegments?2:1,b=r.index,E=r.attributes.position;if(b!==null){const A=Math.max(0,p.start),D=Math.min(b.count,p.start+p.count);for(let P=A,T=D-1;P<T;P+=g){const M=b.getX(P),X=b.getX(P+1),H=Pu(this,e,Gl,_,M,X,P);H&&i.push(H)}if(this.isLineLoop){const P=b.getX(D-1),T=b.getX(A),M=Pu(this,e,Gl,_,P,T,D-1);M&&i.push(M)}}else{const A=Math.max(0,p.start),D=Math.min(E.count,p.start+p.count);for(let P=A,T=D-1;P<T;P+=g){const M=Pu(this,e,Gl,_,P,P+1,P);M&&i.push(M)}if(this.isLineLoop){const P=Pu(this,e,Gl,_,D-1,A,D-1);P&&i.push(P)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const m=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=f}}}}}function Pu(o,e,i,r,l,f,p){const m=o.geometry.attributes.position;if(ju.fromBufferAttribute(m,l),Zu.fromBufferAttribute(m,f),i.distanceSqToSegment(ju,Zu,jd,Wx)>r)return;jd.applyMatrix4(o.matrixWorld);const g=e.ray.origin.distanceTo(jd);if(!(g<e.near||g>e.far))return{distance:g,point:Wx.clone().applyMatrix4(o.matrixWorld),index:p,face:null,faceIndex:null,barycoord:null,object:o}}const qx=new me,Yx=new me;class nb extends tb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,f=i.count;l<f;l+=2)qx.fromBufferAttribute(i,l),Yx.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+qx.distanceTo(Yx);e.setAttribute("lineDistance",new Ni(r,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class K_ extends pi{constructor(e,i,r=Ss,l,f,p,m=Li,_=Li,g,b=jl,v=1){if(b!==jl&&b!==Zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const E={width:e,height:i,depth:v};super(E,l,f,p,m,_,b,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Q_ extends pi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $u extends oa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,p=i/2,m=Math.floor(r),_=Math.floor(l),g=m+1,b=_+1,v=e/m,E=i/_,A=[],D=[],P=[],T=[];for(let M=0;M<b;M++){const X=M*E-p;for(let H=0;H<g;H++){const q=H*v-f;D.push(q,-X,0),P.push(0,0,1),T.push(H/m),T.push(1-M/_)}}for(let M=0;M<_;M++)for(let X=0;X<m;X++){const H=X+g*M,q=X+g*(M+1),J=X+1+g*(M+1),G=X+1+g*M;A.push(H,q,G),A.push(q,J,G)}this.setIndex(A),this.setAttribute("position",new Ni(D,3)),this.setAttribute("normal",new Ni(P,3)),this.setAttribute("uv",new Ni(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fr extends Io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B_,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ib extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class J_ extends ti{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Zd=new Mn,jx=new me,Zx=new me;class rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=va,this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sm,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;jx.setFromMatrixPosition(e.matrixWorld),i.position.copy(jx),Zx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Zx),i.updateMatrixWorld(),Zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $_ extends Y_{constructor(e=-1,i=1,r=1,l=-1,f=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=p,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,p=r+e,m=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,p=f+g*this.view.width,m-=b*this.view.offsetY,_=m-b*this.view.height}this.projectionMatrix.makeOrthographic(f,p,m,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sb extends rb{constructor(){super(new $_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kx extends J_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new sb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ob extends J_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class lb extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qx=new Mn;class cb{constructor(e,i,r=0,l=1/0){this.ray=new Ju(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new rm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Cn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Qx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qx),this}intersectObject(e,i=!0,r=[]){return Yp(e,this,r,i),r.sort(Jx),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Yp(e[l],this,r,i);return r.sort(Jx),r}}function Jx(o,e){return o.distance-e.distance}function Yp(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let p=0,m=f.length;p<m;p++)Yp(f[p],e,i,!0)}}class $x{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(qt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ub extends nb{constructor(e=10,i=10,r=4473924,l=8947848){r=new Kt(r),l=new Kt(l);const f=i/2,p=e/i,m=e/2,_=[],g=[];for(let E=0,A=0,D=-m;E<=i;E++,D+=p){_.push(-m,0,D,m,0,D),_.push(D,0,-m,D,0,m);const P=E===f?r:l;P.toArray(g,A),A+=3,P.toArray(g,A),A+=3,P.toArray(g,A),A+=3,P.toArray(g,A),A+=3}const b=new oa;b.setAttribute("position",new Ni(_,3)),b.setAttribute("color",new Ni(g,3));const v=new Z_({vertexColors:!0,toneMapped:!1});super(b,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fb extends Es{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ct("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function e_(o,e,i,r){const l=hb(r);switch(i){case P_:return o*e;case z_:return o*e/l.components*l.byteLength;case em:return o*e/l.components*l.byteLength;case tm:return o*e*2/l.components*l.byteLength;case nm:return o*e*2/l.components*l.byteLength;case F_:return o*e*3/l.components*l.byteLength;case sa:return o*e*4/l.components*l.byteLength;case im:return o*e*4/l.components*l.byteLength;case Iu:case Hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vu:case Gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vp:case Sp:return Math.max(o,16)*Math.max(e,8)/4;case _p:case yp:return Math.max(o,8)*Math.max(e,8)/2;case bp:case Mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case zp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ip:case Hp:case Vp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Gp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xp:case Wp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hb(o){switch(o){case va:case U_:return{byteLength:1,components:1};case ql:case L_:case zo:return{byteLength:2,components:1};case Jp:case $p:return{byteLength:2,components:4};case Ss:case Qp:case Qa:return{byteLength:4,components:1};case N_:case O_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);function ev(){let o=null,e=!1,i=null,r=null;function l(f,p){i(f,p),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function db(o){const e=new WeakMap;function i(m,_){const g=m.array,b=m.usage,v=g.byteLength,E=o.createBuffer();o.bindBuffer(_,E),o.bufferData(_,g,b),m.onUploadCallback();let A;if(g instanceof Float32Array)A=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)A=o.HALF_FLOAT;else if(g instanceof Uint16Array)m.isFloat16BufferAttribute?A=o.HALF_FLOAT:A=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=o.SHORT;else if(g instanceof Uint32Array)A=o.UNSIGNED_INT;else if(g instanceof Int32Array)A=o.INT;else if(g instanceof Int8Array)A=o.BYTE;else if(g instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:m.version,size:v}}function r(m,_,g){const b=_.array,v=_.updateRanges;if(o.bindBuffer(g,m),v.length===0)o.bufferSubData(g,0,b);else{v.sort((A,D)=>A.start-D.start);let E=0;for(let A=1;A<v.length;A++){const D=v[E],P=v[A];P.start<=D.start+D.count+1?D.count=Math.max(D.count,P.start+P.count-D.start):(++E,v[E]=P)}v.length=E+1;for(let A=0,D=v.length;A<D;A++){const P=v[A];o.bufferSubData(g,P.start*b.BYTES_PER_ELEMENT,b,P.start,P.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=e.get(m);_&&(o.deleteBuffer(_.buffer),e.delete(m))}function p(m,_){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const b=e.get(m);(!b||b.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const g=e.get(m);if(g===void 0)e.set(m,i(m,_));else if(g.version<m.version){if(g.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,m,_),g.version=m.version}}return{get:l,remove:f,update:p}}var pb=`#ifdef USE_ALPHAHASH
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
#endif`,gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xb=`#ifdef USE_ALPHAMAP
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
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
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
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xE=`varying vec3 vWorldDirection;
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
}`,Ht={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:xb,alphatest_fragment:_b,alphatest_pars_fragment:vb,aomap_fragment:yb,aomap_pars_fragment:Sb,batching_pars_vertex:bb,batching_vertex:Mb,begin_vertex:Eb,beginnormal_vertex:Tb,bsdfs:Ab,iridescence_fragment:wb,bumpmap_pars_fragment:Rb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Nb,color_pars_fragment:Ob,color_pars_vertex:Pb,color_vertex:Fb,common:zb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Hb,displacementmap_vertex:Vb,emissivemap_fragment:Gb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:sM,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:aM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:lM,lights_phong_fragment:cM,lights_phong_pars_fragment:uM,lights_physical_fragment:fM,lights_physical_pars_fragment:hM,lights_fragment_begin:dM,lights_fragment_maps:pM,lights_fragment_end:mM,logdepthbuf_fragment:gM,logdepthbuf_pars_fragment:xM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:vM,map_fragment:yM,map_pars_fragment:SM,map_particle_fragment:bM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:TM,morphinstance_vertex:AM,morphcolor_vertex:wM,morphnormal_vertex:RM,morphtarget_pars_vertex:CM,morphtarget_vertex:DM,normal_fragment_begin:UM,normal_fragment_maps:LM,normal_pars_fragment:NM,normal_pars_vertex:OM,normal_vertex:PM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:zM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:HM,opaque_fragment:VM,packing:GM,premultiplied_alpha_fragment:kM,project_vertex:XM,dithering_fragment:WM,dithering_pars_fragment:qM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:KM,shadowmap_vertex:QM,shadowmask_pars_fragment:JM,skinbase_vertex:$M,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:aE,tonemapping_fragment:rE,tonemapping_pars_fragment:sE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:fE,worldpos_vertex:hE,background_vert:dE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:xE,cube_frag:_E,depth_vert:vE,depth_frag:yE,distanceRGBA_vert:SE,distanceRGBA_frag:bE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:wE,meshbasic_frag:RE,meshlambert_vert:CE,meshlambert_frag:DE,meshmatcap_vert:UE,meshmatcap_frag:LE,meshnormal_vert:NE,meshnormal_frag:OE,meshphong_vert:PE,meshphong_frag:FE,meshphysical_vert:zE,meshphysical_frag:BE,meshtoon_vert:IE,meshtoon_frag:HE,points_vert:VE,points_frag:GE,shadow_vert:kE,shadow_frag:XE,sprite_vert:WE,sprite_frag:qE},$e={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ma={basic:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:di([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:di([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:di([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:di([$e.points,$e.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:di([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:di([$e.common,$e.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:di([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:di([$e.sprite,$e.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:di([$e.common,$e.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:di([$e.lights,$e.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ma.physical={uniforms:di([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Fu={r:0,b:0,g:0},gs=new ya,YE=new Mn;function jE(o,e,i,r,l,f,p){const m=new Kt(0);let _=f===!0?0:1,g,b,v=null,E=0,A=null;function D(H){let q=H.isScene===!0?H.background:null;return q&&q.isTexture&&(q=(H.backgroundBlurriness>0?i:e).get(q)),q}function P(H){let q=!1;const J=D(H);J===null?M(m,_):J&&J.isColor&&(M(J,1),q=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,p):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,p),(o.autoClear||q)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(H,q){const J=D(q);J&&(J.isCubeTexture||J.mapping===Ku)?(b===void 0&&(b=new Yi(new Jl(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Fo(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(G,W,fe){this.matrixWorld.copyPosition(fe.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(b)),gs.copy(q.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,J.isCubeTexture&&J.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),b.material.uniforms.envMap.value=J,b.material.uniforms.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1,b.material.uniforms.backgroundBlurriness.value=q.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=q.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(gs)),b.material.toneMapped=nn.getTransfer(J.colorSpace)!==pn,(v!==J||E!==J.version||A!==o.toneMapping)&&(b.material.needsUpdate=!0,v=J,E=J.version,A=o.toneMapping),b.layers.enableAll(),H.unshift(b,b.geometry,b.material,0,0,null)):J&&J.isTexture&&(g===void 0&&(g=new Yi(new $u(2,2),new er({name:"BackgroundMaterial",uniforms:Fo(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=J,g.material.uniforms.backgroundIntensity.value=q.backgroundIntensity,g.material.toneMapped=nn.getTransfer(J.colorSpace)!==pn,J.matrixAutoUpdate===!0&&J.updateMatrix(),g.material.uniforms.uvTransform.value.copy(J.matrix),(v!==J||E!==J.version||A!==o.toneMapping)&&(g.material.needsUpdate=!0,v=J,E=J.version,A=o.toneMapping),g.layers.enableAll(),H.unshift(g,g.geometry,g.material,0,0,null))}function M(H,q){H.getRGB(Fu,q_(o)),r.buffers.color.setClear(Fu.r,Fu.g,Fu.b,q,p)}function X(){b!==void 0&&(b.geometry.dispose(),b.material.dispose(),b=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return m},setClearColor:function(H,q=1){m.set(H),_=q,M(m,_)},getClearAlpha:function(){return _},setClearAlpha:function(H){_=H,M(m,_)},render:P,addToRenderList:T,dispose:X}}function ZE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=E(null);let f=l,p=!1;function m(N,j,te,oe,Se){let ye=!1;const B=v(oe,te,j);f!==B&&(f=B,g(f.object)),ye=A(N,oe,te,Se),ye&&D(N,oe,te,Se),Se!==null&&e.update(Se,o.ELEMENT_ARRAY_BUFFER),(ye||p)&&(p=!1,q(N,j,te,oe),Se!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Se).buffer))}function _(){return o.createVertexArray()}function g(N){return o.bindVertexArray(N)}function b(N){return o.deleteVertexArray(N)}function v(N,j,te){const oe=te.wireframe===!0;let Se=r[N.id];Se===void 0&&(Se={},r[N.id]=Se);let ye=Se[j.id];ye===void 0&&(ye={},Se[j.id]=ye);let B=ye[oe];return B===void 0&&(B=E(_()),ye[oe]=B),B}function E(N){const j=[],te=[],oe=[];for(let Se=0;Se<i;Se++)j[Se]=0,te[Se]=0,oe[Se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:oe,object:N,attributes:{},index:null}}function A(N,j,te,oe){const Se=f.attributes,ye=j.attributes;let B=0;const $=te.getAttributes();for(const ie in $)if($[ie].location>=0){const De=Se[ie];let V=ye[ie];if(V===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(V=N.instanceColor)),De===void 0||De.attribute!==V||V&&De.data!==V.data)return!0;B++}return f.attributesNum!==B||f.index!==oe}function D(N,j,te,oe){const Se={},ye=j.attributes;let B=0;const $=te.getAttributes();for(const ie in $)if($[ie].location>=0){let De=ye[ie];De===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(De=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(De=N.instanceColor));const V={};V.attribute=De,De&&De.data&&(V.data=De.data),Se[ie]=V,B++}f.attributes=Se,f.attributesNum=B,f.index=oe}function P(){const N=f.newAttributes;for(let j=0,te=N.length;j<te;j++)N[j]=0}function T(N){M(N,0)}function M(N,j){const te=f.newAttributes,oe=f.enabledAttributes,Se=f.attributeDivisors;te[N]=1,oe[N]===0&&(o.enableVertexAttribArray(N),oe[N]=1),Se[N]!==j&&(o.vertexAttribDivisor(N,j),Se[N]=j)}function X(){const N=f.newAttributes,j=f.enabledAttributes;for(let te=0,oe=j.length;te<oe;te++)j[te]!==N[te]&&(o.disableVertexAttribArray(te),j[te]=0)}function H(N,j,te,oe,Se,ye,B){B===!0?o.vertexAttribIPointer(N,j,te,Se,ye):o.vertexAttribPointer(N,j,te,oe,Se,ye)}function q(N,j,te,oe){P();const Se=oe.attributes,ye=te.getAttributes(),B=j.defaultAttributeValues;for(const $ in ye){const ie=ye[$];if(ie.location>=0){let we=Se[$];if(we===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(we=N.instanceColor)),we!==void 0){const De=we.normalized,V=we.itemSize,pe=e.get(we);if(pe===void 0)continue;const Ue=pe.buffer,Fe=pe.type,et=pe.bytesPerElement,he=Fe===o.INT||Fe===o.UNSIGNED_INT||we.gpuType===Qp;if(we.isInterleavedBufferAttribute){const ve=we.data,Xe=ve.stride,st=we.offset;if(ve.isInstancedInterleavedBuffer){for(let ft=0;ft<ie.locationSize;ft++)M(ie.location+ft,ve.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ft=0;ft<ie.locationSize;ft++)T(ie.location+ft);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let ft=0;ft<ie.locationSize;ft++)H(ie.location+ft,V/ie.locationSize,Fe,De,Xe*et,(st+V/ie.locationSize*ft)*et,he)}else{if(we.isInstancedBufferAttribute){for(let ve=0;ve<ie.locationSize;ve++)M(ie.location+ve,we.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ve=0;ve<ie.locationSize;ve++)T(ie.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let ve=0;ve<ie.locationSize;ve++)H(ie.location+ve,V/ie.locationSize,Fe,De,V*et,V/ie.locationSize*ve*et,he)}}else if(B!==void 0){const De=B[$];if(De!==void 0)switch(De.length){case 2:o.vertexAttrib2fv(ie.location,De);break;case 3:o.vertexAttrib3fv(ie.location,De);break;case 4:o.vertexAttrib4fv(ie.location,De);break;default:o.vertexAttrib1fv(ie.location,De)}}}}X()}function J(){fe();for(const N in r){const j=r[N];for(const te in j){const oe=j[te];for(const Se in oe)b(oe[Se].object),delete oe[Se];delete j[te]}delete r[N]}}function G(N){if(r[N.id]===void 0)return;const j=r[N.id];for(const te in j){const oe=j[te];for(const Se in oe)b(oe[Se].object),delete oe[Se];delete j[te]}delete r[N.id]}function W(N){for(const j in r){const te=r[j];if(te[N.id]===void 0)continue;const oe=te[N.id];for(const Se in oe)b(oe[Se].object),delete oe[Se];delete te[N.id]}}function fe(){O(),p=!0,f!==l&&(f=l,g(f.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:fe,resetDefaultState:O,dispose:J,releaseStatesOfGeometry:G,releaseStatesOfProgram:W,initAttributes:P,enableAttribute:T,disableUnusedAttributes:X}}function KE(o,e,i){let r;function l(g){r=g}function f(g,b){o.drawArrays(r,g,b),i.update(b,r,1)}function p(g,b,v){v!==0&&(o.drawArraysInstanced(r,g,b,v),i.update(b,r,v))}function m(g,b,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,b,0,v);let A=0;for(let D=0;D<v;D++)A+=b[D];i.update(A,r,1)}function _(g,b,v,E){if(v===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let D=0;D<g.length;D++)p(g[D],b[D],E[D]);else{A.multiDrawArraysInstancedWEBGL(r,g,0,b,0,E,0,v);let D=0;for(let P=0;P<v;P++)D+=b[P]*E[P];i.update(D,r,1)}}this.setMode=l,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function QE(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function p(W){return!(W!==sa&&r.convert(W)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(W){const fe=W===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(W!==va&&r.convert(W)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&W!==Qa&&!fe)}function _(W){if(W==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const b=_(g);b!==g&&(Ct("WebGLRenderer:",g,"not supported, using",b,"instead."),g=b);const v=i.logarithmicDepthBuffer===!0,E=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),A=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),X=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),q=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),J=D>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:p,textureTypeReadable:m,precision:g,logarithmicDepthBuffer:v,reversedDepthBuffer:E,maxTextures:A,maxVertexTextures:D,maxTextureSize:P,maxCubemapSize:T,maxAttributes:M,maxVertexUniforms:X,maxVaryings:H,maxFragmentUniforms:q,vertexTextures:J,maxSamples:G}}function JE(o){const e=this;let i=null,r=0,l=!1,f=!1;const p=new zr,m=new zt,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(v,E){const A=v.length!==0||E||r!==0||l;return l=E,r=v.length,A},this.beginShadows=function(){f=!0,b(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,E){i=b(v,E,0)},this.setState=function(v,E,A){const D=v.clippingPlanes,P=v.clipIntersection,T=v.clipShadows,M=o.get(v);if(!l||D===null||D.length===0||f&&!T)f?b(null):g();else{const X=f?0:r,H=X*4;let q=M.clippingState||null;_.value=q,q=b(D,E,H,A);for(let J=0;J!==H;++J)q[J]=i[J];M.clippingState=q,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=X}};function g(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function b(v,E,A,D){const P=v!==null?v.length:0;let T=null;if(P!==0){if(T=_.value,D!==!0||T===null){const M=A+P*4,X=E.matrixWorldInverse;m.getNormalMatrix(X),(T===null||T.length<M)&&(T=new Float32Array(M));for(let H=0,q=A;H!==P;++H,q+=4)p.copy(v[H]).applyMatrix4(X,m),p.normal.toArray(T,q),T[q+3]=p.constant}_.value=T,_.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,T}}function $E(o){let e=new WeakMap;function i(p,m){return m===pp?p.mapping=No:m===mp&&(p.mapping=Oo),p}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===pp||m===mp)if(e.has(p)){const _=e.get(p).texture;return i(_,p.mapping)}else{const _=p.image;if(_&&_.height>0){const g=new jS(_.height);return g.fromEquirectangularTexture(o,p),e.set(p,g),p.addEventListener("dispose",l),i(g.texture,p.mapping)}else return null}}return p}function l(p){const m=p.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const Ir=4,t_=[.125,.215,.35,.446,.526,.582],vs=20,e1=256,kl=new $_,n_=new Kt;let Kd=null,Qd=0,Jd=0,$d=!1;const t1=new me;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,f={}){const{size:p=256,position:m=t1}=f;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(p);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,r,l,_,m),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===No||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:zo,format:sa,colorSpace:Po,depthBuffer:!1},l=a_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n1(f)),this._blurMaterial=a1(f,e,i)}return l}_compileMaterial(e){const i=new Yi(new oa,e);this._renderer.compile(i,kl)}_sceneToCubeUV(e,i,r,l,f){const _=new Wi(90,1,i,r),g=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],v=this._renderer,E=v.autoClear,A=v.toneMapping;v.getClearColor(n_),v.toneMapping=Hr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new Jl,new k_({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,T=P.material;let M=!1;const X=e.background;X?X.isColor&&(T.color.copy(X),e.background=null,M=!0):(T.color.copy(n_),M=!0);for(let H=0;H<6;H++){const q=H%3;q===0?(_.up.set(0,g[H],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+b[H],f.y,f.z)):q===1?(_.up.set(0,0,g[H]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+b[H],f.z)):(_.up.set(0,g[H],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+b[H]));const J=this._cubeSize;wo(l,q*J,H>2?J:0,J,J),v.setRenderTarget(l),M&&v.render(P,_),v.render(e,_)}v.toneMapping=A,v.autoClear=E,e.background=X}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===No||e.mapping===Oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const f=l?this._cubemapMaterial:this._equirectMaterial,p=this._lodMeshes[0];p.material=f;const m=f.uniforms;m.envMap.value=e;const _=this._cubeSize;wo(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(p,kl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,f=this._pingPongRenderTarget;if(this._ggxMaterial===null){const X=3*Math.max(this._cubeSize,16),H=4*this._cubeSize;this._ggxMaterial=i1(this._lodMax,X,H)}const p=this._ggxMaterial,m=this._lodMeshes[r];m.material=p;const _=p.uniforms,g=r/(this._lodMeshes.length-1),b=i/(this._lodMeshes.length-1),v=Math.sqrt(g*g-b*b),E=.05+g*.95,A=v*E,{_lodMax:D}=this,P=this._sizeLods[r],T=3*P*(r>D-Ir?r-D+Ir:0),M=4*(this._cubeSize-P);_.envMap.value=e.texture,_.roughness.value=A,_.mipInt.value=D-i,wo(f,T,M,3*P,2*P),l.setRenderTarget(f),l.render(m,kl),_.envMap.value=f.texture,_.roughness.value=0,_.mipInt.value=D-r,wo(e,T,M,3*P,2*P),l.setRenderTarget(e),l.render(m,kl)}_blur(e,i,r,l,f){const p=this._pingPongRenderTarget;this._halfBlur(e,p,i,r,l,"latitudinal",f),this._halfBlur(p,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,p,m){const _=this._renderer,g=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&Cn("blur direction must be either latitudinal or longitudinal!");const b=3,v=this._lodMeshes[l];v.material=g;const E=g.uniforms,A=this._sizeLods[r]-1,D=isFinite(f)?Math.PI/(2*A):2*Math.PI/(2*vs-1),P=f/D,T=isFinite(f)?1+Math.floor(b*P):vs;T>vs&&Ct(`sigmaRadians, ${f}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${vs}`);const M=[];let X=0;for(let W=0;W<vs;++W){const fe=W/P,O=Math.exp(-fe*fe/2);M.push(O),W===0?X+=O:W<T&&(X+=2*O)}for(let W=0;W<M.length;W++)M[W]=M[W]/X;E.envMap.value=e.texture,E.samples.value=T,E.weights.value=M,E.latitudinal.value=p==="latitudinal",m&&(E.poleAxis.value=m);const{_lodMax:H}=this;E.dTheta.value=D,E.mipInt.value=H-r;const q=this._sizeLods[l],J=3*q*(l>H-Ir?l-H+Ir:0),G=4*(this._cubeSize-q);wo(i,J,G,3*q,2*q),_.setRenderTarget(i),_.render(v,kl)}}function n1(o){const e=[],i=[],r=[];let l=o;const f=o-Ir+1+t_.length;for(let p=0;p<f;p++){const m=Math.pow(2,l);e.push(m);let _=1/m;p>o-Ir?_=t_[p-o+Ir-1]:p===0&&(_=0),i.push(_);const g=1/(m-2),b=-g,v=1+g,E=[b,b,v,b,v,v,b,b,v,v,b,v],A=6,D=6,P=3,T=2,M=1,X=new Float32Array(P*D*A),H=new Float32Array(T*D*A),q=new Float32Array(M*D*A);for(let G=0;G<A;G++){const W=G%3*2/3-1,fe=G>2?0:-1,O=[W,fe,0,W+2/3,fe,0,W+2/3,fe+1,0,W,fe,0,W+2/3,fe+1,0,W,fe+1,0];X.set(O,P*D*G),H.set(E,T*D*G);const N=[G,G,G,G,G,G];q.set(N,M*D*G)}const J=new oa;J.setAttribute("position",new _a(X,P)),J.setAttribute("uv",new _a(H,T)),J.setAttribute("faceIndex",new _a(q,M)),r.push(new Yi(J,null)),l>Ir&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function a_(o,e,i){const r=new Ms(o,e,i);return r.texture.mapping=Ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wo(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function i1(o,e,i){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function a1(o,e,i){const r=new Float32Array(vs),l=new me(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ef(),fragmentShader:`

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
	`}function r1(o){let e=new WeakMap,i=null;function r(m){if(m&&m.isTexture){const _=m.mapping,g=_===pp||_===mp,b=_===No||_===Oo;if(g||b){let v=e.get(m);const E=v!==void 0?v.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==E)return i===null&&(i=new i_(o)),v=g?i.fromEquirectangular(m,v):i.fromCubemap(m,v),v.texture.pmremVersion=m.pmremVersion,e.set(m,v),v.texture;if(v!==void 0)return v.texture;{const A=m.image;return g&&A&&A.height>0||b&&A&&l(A)?(i===null&&(i=new i_(o)),v=g?i.fromEquirectangular(m):i.fromCubemap(m),v.texture.pmremVersion=m.pmremVersion,e.set(m,v),m.addEventListener("dispose",f),v.texture):null}}}return m}function l(m){let _=0;const g=6;for(let b=0;b<g;b++)m[b]!==void 0&&_++;return _===g}function f(m){const _=m.target;_.removeEventListener("dispose",f);const g=e.get(_);g!==void 0&&(e.delete(_),g.dispose())}function p(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function s1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Kl("WebGLRenderer: "+r+" extension not supported."),l}}}function o1(o,e,i,r){const l={},f=new WeakMap;function p(v){const E=v.target;E.index!==null&&e.remove(E.index);for(const D in E.attributes)e.remove(E.attributes[D]);E.removeEventListener("dispose",p),delete l[E.id];const A=f.get(E);A&&(e.remove(A),f.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function m(v,E){return l[E.id]===!0||(E.addEventListener("dispose",p),l[E.id]=!0,i.memory.geometries++),E}function _(v){const E=v.attributes;for(const A in E)e.update(E[A],o.ARRAY_BUFFER)}function g(v){const E=[],A=v.index,D=v.attributes.position;let P=0;if(A!==null){const X=A.array;P=A.version;for(let H=0,q=X.length;H<q;H+=3){const J=X[H+0],G=X[H+1],W=X[H+2];E.push(J,G,G,W,W,J)}}else if(D!==void 0){const X=D.array;P=D.version;for(let H=0,q=X.length/3-1;H<q;H+=3){const J=H+0,G=H+1,W=H+2;E.push(J,G,G,W,W,J)}}else return;const T=new(H_(E)?W_:X_)(E,1);T.version=P;const M=f.get(v);M&&e.remove(M),f.set(v,T)}function b(v){const E=f.get(v);if(E){const A=v.index;A!==null&&E.version<A.version&&g(v)}else g(v);return f.get(v)}return{get:m,update:_,getWireframeAttribute:b}}function l1(o,e,i){let r;function l(E){r=E}let f,p;function m(E){f=E.type,p=E.bytesPerElement}function _(E,A){o.drawElements(r,A,f,E*p),i.update(A,r,1)}function g(E,A,D){D!==0&&(o.drawElementsInstanced(r,A,f,E*p,D),i.update(A,r,D))}function b(E,A,D){if(D===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,A,0,f,E,0,D);let T=0;for(let M=0;M<D;M++)T+=A[M];i.update(T,r,1)}function v(E,A,D,P){if(D===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let M=0;M<E.length;M++)g(E[M]/p,A[M],P[M]);else{T.multiDrawElementsInstancedWEBGL(r,A,0,f,E,0,P,0,D);let M=0;for(let X=0;X<D;X++)M+=A[X]*P[X];i.update(M,r,1)}}this.setMode=l,this.setIndex=m,this.render=_,this.renderInstances=g,this.renderMultiDraw=b,this.renderMultiDrawInstances=v}function c1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,p,m){switch(i.calls++,p){case o.TRIANGLES:i.triangles+=m*(f/3);break;case o.LINES:i.lines+=m*(f/2);break;case o.LINE_STRIP:i.lines+=m*(f-1);break;case o.LINE_LOOP:i.lines+=m*f;break;case o.POINTS:i.points+=m*f;break;default:Cn("WebGLInfo: Unknown draw mode:",p);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function u1(o,e,i){const r=new WeakMap,l=new Dn;function f(p,m,_){const g=p.morphTargetInfluences,b=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,v=b!==void 0?b.length:0;let E=r.get(m);if(E===void 0||E.count!==v){let N=function(){fe.dispose(),r.delete(m),m.removeEventListener("dispose",N)};var A=N;E!==void 0&&E.texture.dispose();const D=m.morphAttributes.position!==void 0,P=m.morphAttributes.normal!==void 0,T=m.morphAttributes.color!==void 0,M=m.morphAttributes.position||[],X=m.morphAttributes.normal||[],H=m.morphAttributes.color||[];let q=0;D===!0&&(q=1),P===!0&&(q=2),T===!0&&(q=3);let J=m.attributes.position.count*q,G=1;J>e.maxTextureSize&&(G=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const W=new Float32Array(J*G*4*v),fe=new V_(W,J,G,v);fe.type=Qa,fe.needsUpdate=!0;const O=q*4;for(let j=0;j<v;j++){const te=M[j],oe=X[j],Se=H[j],ye=J*G*4*j;for(let B=0;B<te.count;B++){const $=B*O;D===!0&&(l.fromBufferAttribute(te,B),W[ye+$+0]=l.x,W[ye+$+1]=l.y,W[ye+$+2]=l.z,W[ye+$+3]=0),P===!0&&(l.fromBufferAttribute(oe,B),W[ye+$+4]=l.x,W[ye+$+5]=l.y,W[ye+$+6]=l.z,W[ye+$+7]=0),T===!0&&(l.fromBufferAttribute(Se,B),W[ye+$+8]=l.x,W[ye+$+9]=l.y,W[ye+$+10]=l.z,W[ye+$+11]=Se.itemSize===4?l.w:1)}}E={count:v,texture:fe,size:new Nt(J,G)},r.set(m,E),m.addEventListener("dispose",N)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",p.morphTexture,i);else{let D=0;for(let T=0;T<g.length;T++)D+=g[T];const P=m.morphTargetsRelative?1:1-D;_.getUniforms().setValue(o,"morphTargetBaseInfluence",P),_.getUniforms().setValue(o,"morphTargetInfluences",g)}_.getUniforms().setValue(o,"morphTargetsTexture",E.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",E.size)}return{update:f}}function f1(o,e,i,r){let l=new WeakMap;function f(_){const g=r.render.frame,b=_.geometry,v=e.get(_,b);if(l.get(v)!==g&&(e.update(v),l.set(v,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",m)===!1&&_.addEventListener("dispose",m),l.get(_)!==g&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),l.set(_,g))),_.isSkinnedMesh){const E=_.skeleton;l.get(E)!==g&&(E.update(),l.set(E,g))}return v}function p(){l=new WeakMap}function m(_){const g=_.target;g.removeEventListener("dispose",m),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const tv=new pi,o_=new K_(1,1),nv=new V_,iv=new US,av=new j_,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),h_=new Float32Array(4);function Ho(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=l_[l];if(f===void 0&&(f=new Float32Array(l),l_[l]=f),e!==0){r.toArray(f,0);for(let p=1,m=0;p!==e;++p)m+=i,o[p].toArray(f,m)}return f}function Wn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function qn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function tf(o,e){let i=c_[e];i===void 0&&(i=new Int32Array(e),c_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function h1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function d1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2fv(this.addr,e),qn(i,e)}}function p1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Wn(i,e))return;o.uniform3fv(this.addr,e),qn(i,e)}}function m1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4fv(this.addr,e),qn(i,e)}}function g1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;h_.set(r),o.uniformMatrix2fv(this.addr,!1,h_),qn(i,r)}}function x1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;f_.set(r),o.uniformMatrix3fv(this.addr,!1,f_),qn(i,r)}}function _1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Wn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),qn(i,e)}else{if(Wn(i,r))return;u_.set(r),o.uniformMatrix4fv(this.addr,!1,u_),qn(i,r)}}function v1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2iv(this.addr,e),qn(i,e)}}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wn(i,e))return;o.uniform3iv(this.addr,e),qn(i,e)}}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4iv(this.addr,e),qn(i,e)}}function M1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function E1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Wn(i,e))return;o.uniform2uiv(this.addr,e),qn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Wn(i,e))return;o.uniform3uiv(this.addr,e),qn(i,e)}}function A1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Wn(i,e))return;o.uniform4uiv(this.addr,e),qn(i,e)}}function w1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(o_.compareFunction=I_,f=o_):f=tv,i.setTexture2D(e||f,l)}function R1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||iv,l)}function C1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||av,l)}function D1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||nv,l)}function U1(o){switch(o){case 5126:return h1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return x1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return b1;case 5125:return M1;case 36294:return E1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return D1}}function L1(o,e){o.uniform1fv(this.addr,e)}function N1(o,e){const i=Ho(e,this.size,2);o.uniform2fv(this.addr,i)}function O1(o,e){const i=Ho(e,this.size,3);o.uniform3fv(this.addr,i)}function P1(o,e){const i=Ho(e,this.size,4);o.uniform4fv(this.addr,i)}function F1(o,e){const i=Ho(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function z1(o,e){const i=Ho(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function B1(o,e){const i=Ho(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function I1(o,e){o.uniform1iv(this.addr,e)}function H1(o,e){o.uniform2iv(this.addr,e)}function V1(o,e){o.uniform3iv(this.addr,e)}function G1(o,e){o.uniform4iv(this.addr,e)}function k1(o,e){o.uniform1uiv(this.addr,e)}function X1(o,e){o.uniform2uiv(this.addr,e)}function W1(o,e){o.uniform3uiv(this.addr,e)}function q1(o,e){o.uniform4uiv(this.addr,e)}function Y1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture2D(e[p]||tv,f[p])}function j1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture3D(e[p]||iv,f[p])}function Z1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTextureCube(e[p]||av,f[p])}function K1(o,e,i){const r=this.cache,l=e.length,f=tf(i,l);Wn(r,f)||(o.uniform1iv(this.addr,f),qn(r,f));for(let p=0;p!==l;++p)i.setTexture2DArray(e[p]||nv,f[p])}function Q1(o){switch(o){case 5126:return L1;case 35664:return N1;case 35665:return O1;case 35666:return P1;case 35674:return F1;case 35675:return z1;case 35676:return B1;case 5124:case 35670:return I1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return k1;case 36294:return X1;case 36295:return W1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return K1}}class J1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=U1(i.type)}}class $1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q1(i.type)}}class e3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,p=l.length;f!==p;++f){const m=l[f];m.setValue(e,i[m.id],r)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function d_(o,e){o.seq.push(e),o.map[e.id]=e}function t3(o,e,i){const r=o.name,l=r.length;for(ep.lastIndex=0;;){const f=ep.exec(r),p=ep.lastIndex;let m=f[1];const _=f[2]==="]",g=f[3];if(_&&(m=m|0),g===void 0||g==="["&&p+2===l){d_(i,g===void 0?new J1(m,o,e):new $1(m,o,e));break}else{let v=i.map[m];v===void 0&&(v=new e3(m),d_(i,v)),i=v}}}class Xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),p=e.getUniformLocation(i,f.name);t3(f,p,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,p=i.length;f!==p;++f){const m=i[f],_=r[m.id];_.needsUpdate!==!1&&m.setValue(e,_.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const p=e[l];p.id in i&&r.push(p)}return r}}function p_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const n3=37297;let i3=0;function a3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let p=l;p<f;p++){const m=p+1;r.push(`${m===e?">":" "} ${m}: ${i[p]}`)}return r.join(`
`)}const m_=new zt;function r3(o){nn._getMatrix(m_,nn.workingColorSpace,o);const e=`mat3( ${m_.elements.map(i=>i.toFixed(4))} )`;switch(nn.getTransfer(o)){case Wu:return[e,"LinearTransferOETF"];case pn:return[e,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function g_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const p=/ERROR: 0:(\d+)/.exec(f);if(p){const m=parseInt(p[1]);return i.toUpperCase()+`

`+f+`

`+a3(o.getShaderSource(e),m)}else return f}function s3(o,e){const i=r3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function o3(o,e){let i;switch(e){case aS:i="Linear";break;case rS:i="Reinhard";break;case sS:i="Cineon";break;case oS:i="ACESFilmic";break;case cS:i="AgX";break;case uS:i="Neutral";break;case lS:i="Custom";break;default:Ct("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zu=new me;function l3(){nn.getLuminanceCoefficients(zu);const o=zu.x.toFixed(4),e=zu.y.toFixed(4),i=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function u3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function f3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),p=f.name;let m=1;f.type===o.FLOAT_MAT2&&(m=2),f.type===o.FLOAT_MAT3&&(m=3),f.type===o.FLOAT_MAT4&&(m=4),i[p]={type:f.type,location:o.getAttribLocation(e,p),locationSize:m}}return i}function Wl(o){return o!==""}function x_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h3=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(o){return o.replace(h3,p3)}const d3=new Map;function p3(o,e){let i=Ht[e];if(i===void 0){const r=d3.get(e);if(r!==void 0)i=Ht[r],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jp(i)}const m3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(o){return o.replace(m3,g3)}function g3(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function y_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function x3(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===zy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Za&&(e="SHADOWMAP_TYPE_VSM"),e}function _3(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case No:case Oo:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v3(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function y3(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case C_:e="ENVMAP_BLENDING_MULTIPLY";break;case nS:e="ENVMAP_BLENDING_MIX";break;case iS:e="ENVMAP_BLENDING_ADD";break}return e}function S3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b3(o,e,i,r){const l=o.getContext(),f=i.defines;let p=i.vertexShader,m=i.fragmentShader;const _=x3(i),g=_3(i),b=v3(i),v=y3(i),E=S3(i),A=c3(i),D=u3(f),P=l.createProgram();let T,M,X=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(T=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Wl).join(`
`),T.length>0&&(T+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Wl).join(`
`),M.length>0&&(M+=`
`)):(T=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+b:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),M=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+b:"",i.envMap?"#define "+v:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hr?"#define TONE_MAPPING":"",i.toneMapping!==Hr?Ht.tonemapping_pars_fragment:"",i.toneMapping!==Hr?o3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,s3("linearToOutputTexel",i.outputColorSpace),l3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wl).join(`
`)),p=jp(p),p=x_(p,i),p=__(p,i),m=jp(m),m=x_(m,i),m=__(m,i),p=v_(p),m=v_(m),i.isRawShaderMaterial!==!0&&(X=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,M=["#define varying in",i.glslVersion===Tx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Tx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const H=X+T+p,q=X+M+m,J=p_(l,l.VERTEX_SHADER,H),G=p_(l,l.FRAGMENT_SHADER,q);l.attachShader(P,J),l.attachShader(P,G),i.index0AttributeName!==void 0?l.bindAttribLocation(P,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(P,0,"position"),l.linkProgram(P);function W(j){if(o.debug.checkShaderErrors){const te=l.getProgramInfoLog(P)||"",oe=l.getShaderInfoLog(J)||"",Se=l.getShaderInfoLog(G)||"",ye=te.trim(),B=oe.trim(),$=Se.trim();let ie=!0,we=!0;if(l.getProgramParameter(P,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,P,J,G);else{const De=g_(l,J,"vertex"),V=g_(l,G,"fragment");Cn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(P,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ye+`
`+De+`
`+V)}else ye!==""?Ct("WebGLProgram: Program Info Log:",ye):(B===""||$==="")&&(we=!1);we&&(j.diagnostics={runnable:ie,programLog:ye,vertexShader:{log:B,prefix:T},fragmentShader:{log:$,prefix:M}})}l.deleteShader(J),l.deleteShader(G),fe=new Xu(l,P),O=f3(l,P)}let fe;this.getUniforms=function(){return fe===void 0&&W(this),fe};let O;this.getAttributes=function(){return O===void 0&&W(this),O};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(P,n3)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=i3++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=J,this.fragmentShader=G,this}let M3=0;class E3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),p=this._getShaderCacheForMaterial(e);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(f)===!1&&(p.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new T3(e),i.set(e,r)),r}}class T3{constructor(e){this.id=M3++,this.code=e,this.usedTimes=0}}function A3(o,e,i,r,l,f,p){const m=new rm,_=new E3,g=new Set,b=[],v=l.logarithmicDepthBuffer,E=l.vertexTextures;let A=l.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(O){return g.add(O),O===0?"uv":`uv${O}`}function T(O,N,j,te,oe){const Se=te.fog,ye=oe.geometry,B=O.isMeshStandardMaterial?te.environment:null,$=(O.isMeshStandardMaterial?i:e).get(O.envMap||B),ie=$&&$.mapping===Ku?$.image.height:null,we=D[O.type];O.precision!==null&&(A=l.getMaxPrecision(O.precision),A!==O.precision&&Ct("WebGLProgram.getParameters:",O.precision,"not supported, using",A,"instead."));const De=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,V=De!==void 0?De.length:0;let pe=0;ye.morphAttributes.position!==void 0&&(pe=1),ye.morphAttributes.normal!==void 0&&(pe=2),ye.morphAttributes.color!==void 0&&(pe=3);let Ue,Fe,et,he;if(we){const Jt=ma[we];Ue=Jt.vertexShader,Fe=Jt.fragmentShader}else Ue=O.vertexShader,Fe=O.fragmentShader,_.update(O),et=_.getVertexShaderID(O),he=_.getFragmentShaderID(O);const ve=o.getRenderTarget(),Xe=o.state.buffers.depth.getReversed(),st=oe.isInstancedMesh===!0,ft=oe.isBatchedMesh===!0,Et=!!O.map,rn=!!O.matcap,Lt=!!$,Me=!!O.aoMap,F=!!O.lightMap,Be=!!O.bumpMap,tt=!!O.normalMap,xt=!!O.displacementMap,We=!!O.emissiveMap,Bt=!!O.metalnessMap,He=!!O.roughnessMap,dt=O.anisotropy>0,I=O.clearcoat>0,R=O.dispersion>0,se=O.iridescence>0,Ee=O.sheen>0,Ae=O.transmission>0,ae=dt&&!!O.anisotropyMap,Ye=I&&!!O.clearcoatMap,je=I&&!!O.clearcoatNormalMap,vt=I&&!!O.clearcoatRoughnessMap,Ve=se&&!!O.iridescenceMap,Ne=se&&!!O.iridescenceThicknessMap,Pe=Ee&&!!O.sheenColorMap,lt=Ee&&!!O.sheenRoughnessMap,ct=!!O.specularMap,Ze=!!O.specularColorMap,Mt=!!O.specularIntensityMap,Z=Ae&&!!O.transmissionMap,qe=Ae&&!!O.thicknessMap,Ge=!!O.gradientMap,ke=!!O.alphaMap,Le=O.alphaTest>0,Re=!!O.alphaHash,it=!!O.extensions;let wt=Hr;O.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(wt=o.toneMapping);const at={shaderID:we,shaderType:O.type,shaderName:O.name,vertexShader:Ue,fragmentShader:Fe,defines:O.defines,customVertexShaderID:et,customFragmentShaderID:he,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:A,batching:ft,batchingColor:ft&&oe._colorsTexture!==null,instancing:st,instancingColor:st&&oe.instanceColor!==null,instancingMorph:st&&oe.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Po,alphaToCoverage:!!O.alphaToCoverage,map:Et,matcap:rn,envMap:Lt,envMapMode:Lt&&$.mapping,envMapCubeUVHeight:ie,aoMap:Me,lightMap:F,bumpMap:Be,normalMap:tt,displacementMap:E&&xt,emissiveMap:We,normalMapObjectSpace:tt&&O.normalMapType===pS,normalMapTangentSpace:tt&&O.normalMapType===B_,metalnessMap:Bt,roughnessMap:He,anisotropy:dt,anisotropyMap:ae,clearcoat:I,clearcoatMap:Ye,clearcoatNormalMap:je,clearcoatRoughnessMap:vt,dispersion:R,iridescence:se,iridescenceMap:Ve,iridescenceThicknessMap:Ne,sheen:Ee,sheenColorMap:Pe,sheenRoughnessMap:lt,specularMap:ct,specularColorMap:Ze,specularIntensityMap:Mt,transmission:Ae,transmissionMap:Z,thicknessMap:qe,gradientMap:Ge,opaque:O.transparent===!1&&O.blending===Do&&O.alphaToCoverage===!1,alphaMap:ke,alphaTest:Le,alphaHash:Re,combine:O.combine,mapUv:Et&&P(O.map.channel),aoMapUv:Me&&P(O.aoMap.channel),lightMapUv:F&&P(O.lightMap.channel),bumpMapUv:Be&&P(O.bumpMap.channel),normalMapUv:tt&&P(O.normalMap.channel),displacementMapUv:xt&&P(O.displacementMap.channel),emissiveMapUv:We&&P(O.emissiveMap.channel),metalnessMapUv:Bt&&P(O.metalnessMap.channel),roughnessMapUv:He&&P(O.roughnessMap.channel),anisotropyMapUv:ae&&P(O.anisotropyMap.channel),clearcoatMapUv:Ye&&P(O.clearcoatMap.channel),clearcoatNormalMapUv:je&&P(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&P(O.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&P(O.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&P(O.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&P(O.sheenColorMap.channel),sheenRoughnessMapUv:lt&&P(O.sheenRoughnessMap.channel),specularMapUv:ct&&P(O.specularMap.channel),specularColorMapUv:Ze&&P(O.specularColorMap.channel),specularIntensityMapUv:Mt&&P(O.specularIntensityMap.channel),transmissionMapUv:Z&&P(O.transmissionMap.channel),thicknessMapUv:qe&&P(O.thicknessMap.channel),alphaMapUv:ke&&P(O.alphaMap.channel),vertexTangents:!!ye.attributes.tangent&&(tt||dt),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ye.attributes.uv&&(Et||ke),fog:!!Se,useFog:O.fog===!0,fogExp2:!!Se&&Se.isFogExp2,flatShading:O.flatShading===!0&&O.wireframe===!1,sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Xe,skinning:oe.isSkinnedMesh===!0,morphTargets:ye.morphAttributes.position!==void 0,morphNormals:ye.morphAttributes.normal!==void 0,morphColors:ye.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:pe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:O.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:wt,decodeVideoTexture:Et&&O.map.isVideoTexture===!0&&nn.getTransfer(O.map.colorSpace)===pn,decodeVideoTextureEmissive:We&&O.emissiveMap.isVideoTexture===!0&&nn.getTransfer(O.emissiveMap.colorSpace)===pn,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===ga,flipSided:O.side===Mi,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:it&&O.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&O.extensions.multiDraw===!0||ft)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return at.vertexUv1s=g.has(1),at.vertexUv2s=g.has(2),at.vertexUv3s=g.has(3),g.clear(),at}function M(O){const N=[];if(O.shaderID?N.push(O.shaderID):(N.push(O.customVertexShaderID),N.push(O.customFragmentShaderID)),O.defines!==void 0)for(const j in O.defines)N.push(j),N.push(O.defines[j]);return O.isRawShaderMaterial===!1&&(X(N,O),H(N,O),N.push(o.outputColorSpace)),N.push(O.customProgramCacheKey),N.join()}function X(O,N){O.push(N.precision),O.push(N.outputColorSpace),O.push(N.envMapMode),O.push(N.envMapCubeUVHeight),O.push(N.mapUv),O.push(N.alphaMapUv),O.push(N.lightMapUv),O.push(N.aoMapUv),O.push(N.bumpMapUv),O.push(N.normalMapUv),O.push(N.displacementMapUv),O.push(N.emissiveMapUv),O.push(N.metalnessMapUv),O.push(N.roughnessMapUv),O.push(N.anisotropyMapUv),O.push(N.clearcoatMapUv),O.push(N.clearcoatNormalMapUv),O.push(N.clearcoatRoughnessMapUv),O.push(N.iridescenceMapUv),O.push(N.iridescenceThicknessMapUv),O.push(N.sheenColorMapUv),O.push(N.sheenRoughnessMapUv),O.push(N.specularMapUv),O.push(N.specularColorMapUv),O.push(N.specularIntensityMapUv),O.push(N.transmissionMapUv),O.push(N.thicknessMapUv),O.push(N.combine),O.push(N.fogExp2),O.push(N.sizeAttenuation),O.push(N.morphTargetsCount),O.push(N.morphAttributeCount),O.push(N.numDirLights),O.push(N.numPointLights),O.push(N.numSpotLights),O.push(N.numSpotLightMaps),O.push(N.numHemiLights),O.push(N.numRectAreaLights),O.push(N.numDirLightShadows),O.push(N.numPointLightShadows),O.push(N.numSpotLightShadows),O.push(N.numSpotLightShadowsWithMaps),O.push(N.numLightProbes),O.push(N.shadowMapType),O.push(N.toneMapping),O.push(N.numClippingPlanes),O.push(N.numClipIntersection),O.push(N.depthPacking)}function H(O,N){m.disableAll(),N.supportsVertexTextures&&m.enable(0),N.instancing&&m.enable(1),N.instancingColor&&m.enable(2),N.instancingMorph&&m.enable(3),N.matcap&&m.enable(4),N.envMap&&m.enable(5),N.normalMapObjectSpace&&m.enable(6),N.normalMapTangentSpace&&m.enable(7),N.clearcoat&&m.enable(8),N.iridescence&&m.enable(9),N.alphaTest&&m.enable(10),N.vertexColors&&m.enable(11),N.vertexAlphas&&m.enable(12),N.vertexUv1s&&m.enable(13),N.vertexUv2s&&m.enable(14),N.vertexUv3s&&m.enable(15),N.vertexTangents&&m.enable(16),N.anisotropy&&m.enable(17),N.alphaHash&&m.enable(18),N.batching&&m.enable(19),N.dispersion&&m.enable(20),N.batchingColor&&m.enable(21),N.gradientMap&&m.enable(22),O.push(m.mask),m.disableAll(),N.fog&&m.enable(0),N.useFog&&m.enable(1),N.flatShading&&m.enable(2),N.logarithmicDepthBuffer&&m.enable(3),N.reversedDepthBuffer&&m.enable(4),N.skinning&&m.enable(5),N.morphTargets&&m.enable(6),N.morphNormals&&m.enable(7),N.morphColors&&m.enable(8),N.premultipliedAlpha&&m.enable(9),N.shadowMapEnabled&&m.enable(10),N.doubleSided&&m.enable(11),N.flipSided&&m.enable(12),N.useDepthPacking&&m.enable(13),N.dithering&&m.enable(14),N.transmission&&m.enable(15),N.sheen&&m.enable(16),N.opaque&&m.enable(17),N.pointsUvs&&m.enable(18),N.decodeVideoTexture&&m.enable(19),N.decodeVideoTextureEmissive&&m.enable(20),N.alphaToCoverage&&m.enable(21),O.push(m.mask)}function q(O){const N=D[O.type];let j;if(N){const te=ma[N];j=XS.clone(te.uniforms)}else j=O.uniforms;return j}function J(O,N){let j;for(let te=0,oe=b.length;te<oe;te++){const Se=b[te];if(Se.cacheKey===N){j=Se,++j.usedTimes;break}}return j===void 0&&(j=new b3(o,N,O,f),b.push(j)),j}function G(O){if(--O.usedTimes===0){const N=b.indexOf(O);b[N]=b[b.length-1],b.pop(),O.destroy()}}function W(O){_.remove(O)}function fe(){_.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:q,acquireProgram:J,releaseProgram:G,releaseShaderCache:W,programs:b,dispose:fe}}function w3(){let o=new WeakMap;function e(p){return o.has(p)}function i(p){let m=o.get(p);return m===void 0&&(m={},o.set(p,m)),m}function r(p){o.delete(p)}function l(p,m,_){o.get(p)[m]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function R3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function S_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function b_(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function p(v,E,A,D,P,T){let M=o[e];return M===void 0?(M={id:v.id,object:v,geometry:E,material:A,groupOrder:D,renderOrder:v.renderOrder,z:P,group:T},o[e]=M):(M.id=v.id,M.object=v,M.geometry=E,M.material=A,M.groupOrder=D,M.renderOrder=v.renderOrder,M.z=P,M.group=T),e++,M}function m(v,E,A,D,P,T){const M=p(v,E,A,D,P,T);A.transmission>0?r.push(M):A.transparent===!0?l.push(M):i.push(M)}function _(v,E,A,D,P,T){const M=p(v,E,A,D,P,T);A.transmission>0?r.unshift(M):A.transparent===!0?l.unshift(M):i.unshift(M)}function g(v,E){i.length>1&&i.sort(v||R3),r.length>1&&r.sort(E||S_),l.length>1&&l.sort(E||S_)}function b(){for(let v=e,E=o.length;v<E;v++){const A=o[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:m,unshift:_,finish:b,sort:g}}function C3(){let o=new WeakMap;function e(r,l){const f=o.get(r);let p;return f===void 0?(p=new b_,o.set(r,[p])):l>=f.length?(p=new b_,f.push(p)):p=f[l],p}function i(){o=new WeakMap}return{get:e,dispose:i}}function D3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new me,color:new Kt};break;case"SpotLight":i={position:new me,direction:new me,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new me,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new me,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":i={color:new Kt,position:new me,halfWidth:new me,halfHeight:new me};break}return o[e.id]=i,i}}}function U3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let L3=0;function N3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function O3(o){const e=new D3,i=U3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new me);const l=new me,f=new Mn,p=new Mn;function m(g){let b=0,v=0,E=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let A=0,D=0,P=0,T=0,M=0,X=0,H=0,q=0,J=0,G=0,W=0;g.sort(N3);for(let O=0,N=g.length;O<N;O++){const j=g[O],te=j.color,oe=j.intensity,Se=j.distance,ye=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)b+=te.r*oe,v+=te.g*oe,E+=te.b*oe;else if(j.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(j.sh.coefficients[B],oe);W++}else if(j.isDirectionalLight){const B=e.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const $=j.shadow,ie=i.get(j);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,r.directionalShadow[A]=ie,r.directionalShadowMap[A]=ye,r.directionalShadowMatrix[A]=j.shadow.matrix,X++}r.directional[A]=B,A++}else if(j.isSpotLight){const B=e.get(j);B.position.setFromMatrixPosition(j.matrixWorld),B.color.copy(te).multiplyScalar(oe),B.distance=Se,B.coneCos=Math.cos(j.angle),B.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),B.decay=j.decay,r.spot[P]=B;const $=j.shadow;if(j.map&&(r.spotLightMap[J]=j.map,J++,$.updateMatrices(j),j.castShadow&&G++),r.spotLightMatrix[P]=$.matrix,j.castShadow){const ie=i.get(j);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,r.spotShadow[P]=ie,r.spotShadowMap[P]=ye,q++}P++}else if(j.isRectAreaLight){const B=e.get(j);B.color.copy(te).multiplyScalar(oe),B.halfWidth.set(j.width*.5,0,0),B.halfHeight.set(0,j.height*.5,0),r.rectArea[T]=B,T++}else if(j.isPointLight){const B=e.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),B.distance=j.distance,B.decay=j.decay,j.castShadow){const $=j.shadow,ie=i.get(j);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,r.pointShadow[D]=ie,r.pointShadowMap[D]=ye,r.pointShadowMatrix[D]=j.shadow.matrix,H++}r.point[D]=B,D++}else if(j.isHemisphereLight){const B=e.get(j);B.skyColor.copy(j.color).multiplyScalar(oe),B.groundColor.copy(j.groundColor).multiplyScalar(oe),r.hemi[M]=B,M++}}T>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=b,r.ambient[1]=v,r.ambient[2]=E;const fe=r.hash;(fe.directionalLength!==A||fe.pointLength!==D||fe.spotLength!==P||fe.rectAreaLength!==T||fe.hemiLength!==M||fe.numDirectionalShadows!==X||fe.numPointShadows!==H||fe.numSpotShadows!==q||fe.numSpotMaps!==J||fe.numLightProbes!==W)&&(r.directional.length=A,r.spot.length=P,r.rectArea.length=T,r.point.length=D,r.hemi.length=M,r.directionalShadow.length=X,r.directionalShadowMap.length=X,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=q,r.spotShadowMap.length=q,r.directionalShadowMatrix.length=X,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=q+J-G,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=W,fe.directionalLength=A,fe.pointLength=D,fe.spotLength=P,fe.rectAreaLength=T,fe.hemiLength=M,fe.numDirectionalShadows=X,fe.numPointShadows=H,fe.numSpotShadows=q,fe.numSpotMaps=J,fe.numLightProbes=W,r.version=L3++)}function _(g,b){let v=0,E=0,A=0,D=0,P=0;const T=b.matrixWorldInverse;for(let M=0,X=g.length;M<X;M++){const H=g[M];if(H.isDirectionalLight){const q=r.directional[v];q.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),q.direction.sub(l),q.direction.transformDirection(T),v++}else if(H.isSpotLight){const q=r.spot[A];q.position.setFromMatrixPosition(H.matrixWorld),q.position.applyMatrix4(T),q.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),q.direction.sub(l),q.direction.transformDirection(T),A++}else if(H.isRectAreaLight){const q=r.rectArea[D];q.position.setFromMatrixPosition(H.matrixWorld),q.position.applyMatrix4(T),p.identity(),f.copy(H.matrixWorld),f.premultiply(T),p.extractRotation(f),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),q.halfWidth.applyMatrix4(p),q.halfHeight.applyMatrix4(p),D++}else if(H.isPointLight){const q=r.point[E];q.position.setFromMatrixPosition(H.matrixWorld),q.position.applyMatrix4(T),E++}else if(H.isHemisphereLight){const q=r.hemi[P];q.direction.setFromMatrixPosition(H.matrixWorld),q.direction.transformDirection(T),P++}}}return{setup:m,setupView:_,state:r}}function M_(o){const e=new O3(o),i=[],r=[];function l(b){g.camera=b,i.length=0,r.length=0}function f(b){i.push(b)}function p(b){r.push(b)}function m(){e.setup(i)}function _(b){e.setupView(i,b)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:m,setupLightsView:_,pushLight:f,pushShadow:p}}function P3(o){let e=new WeakMap;function i(l,f=0){const p=e.get(l);let m;return p===void 0?(m=new M_(o),e.set(l,[m])):f>=p.length?(m=new M_(o),p.push(m)):m=p[f],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const F3=`void main() {
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
}`;function B3(o,e,i){let r=new sm;const l=new Nt,f=new Nt,p=new Dn,m=new ib({depthPacking:dS}),_=new ab,g={},b=i.maxTextureSize,v={[Vr]:Mi,[Mi]:Vr,[ga]:ga},E=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:F3,fragmentShader:z3}),A=E.clone();A.defines.HORIZONTAL_PASS=1;const D=new oa;D.setAttribute("position",new _a(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new Yi(D,E),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let M=this.type;this.render=function(G,W,fe){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||G.length===0)return;const O=o.getRenderTarget(),N=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),te=o.state;te.setBlending(Ja),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const oe=M!==Za&&this.type===Za,Se=M===Za&&this.type!==Za;for(let ye=0,B=G.length;ye<B;ye++){const $=G[ye],ie=$.shadow;if(ie===void 0){Ct("WebGLShadowMap:",$,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;l.copy(ie.mapSize);const we=ie.getFrameExtents();if(l.multiply(we),f.copy(ie.mapSize),(l.x>b||l.y>b)&&(l.x>b&&(f.x=Math.floor(b/we.x),l.x=f.x*we.x,ie.mapSize.x=f.x),l.y>b&&(f.y=Math.floor(b/we.y),l.y=f.y*we.y,ie.mapSize.y=f.y)),ie.map===null||oe===!0||Se===!0){const V=this.type!==Za?{minFilter:Li,magFilter:Li}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Ms(l.x,l.y,V),ie.map.texture.name=$.name+".shadowMap",ie.camera.updateProjectionMatrix()}o.setRenderTarget(ie.map),o.clear();const De=ie.getViewportCount();for(let V=0;V<De;V++){const pe=ie.getViewport(V);p.set(f.x*pe.x,f.y*pe.y,f.x*pe.z,f.y*pe.w),te.viewport(p),ie.updateMatrices($,V),r=ie.getFrustum(),q(W,fe,ie.camera,$,this.type)}ie.isPointLightShadow!==!0&&this.type===Za&&X(ie,fe),ie.needsUpdate=!1}M=this.type,T.needsUpdate=!1,o.setRenderTarget(O,N,j)};function X(G,W){const fe=e.update(P);E.defines.VSM_SAMPLES!==G.blurSamples&&(E.defines.VSM_SAMPLES=G.blurSamples,A.defines.VSM_SAMPLES=G.blurSamples,E.needsUpdate=!0,A.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ms(l.x,l.y)),E.uniforms.shadow_pass.value=G.map.texture,E.uniforms.resolution.value=G.mapSize,E.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(W,null,fe,E,P,null),A.uniforms.shadow_pass.value=G.mapPass.texture,A.uniforms.resolution.value=G.mapSize,A.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(W,null,fe,A,P,null)}function H(G,W,fe,O){let N=null;const j=fe.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(j!==void 0)N=j;else if(N=fe.isPointLight===!0?_:m,o.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){const te=N.uuid,oe=W.uuid;let Se=g[te];Se===void 0&&(Se={},g[te]=Se);let ye=Se[oe];ye===void 0&&(ye=N.clone(),Se[oe]=ye,W.addEventListener("dispose",J)),N=ye}if(N.visible=W.visible,N.wireframe=W.wireframe,O===Za?N.side=W.shadowSide!==null?W.shadowSide:W.side:N.side=W.shadowSide!==null?W.shadowSide:v[W.side],N.alphaMap=W.alphaMap,N.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,N.map=W.map,N.clipShadows=W.clipShadows,N.clippingPlanes=W.clippingPlanes,N.clipIntersection=W.clipIntersection,N.displacementMap=W.displacementMap,N.displacementScale=W.displacementScale,N.displacementBias=W.displacementBias,N.wireframeLinewidth=W.wireframeLinewidth,N.linewidth=W.linewidth,fe.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const te=o.properties.get(N);te.light=fe}return N}function q(G,W,fe,O,N){if(G.visible===!1)return;if(G.layers.test(W.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&N===Za)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,G.matrixWorld);const oe=e.update(G),Se=G.material;if(Array.isArray(Se)){const ye=oe.groups;for(let B=0,$=ye.length;B<$;B++){const ie=ye[B],we=Se[ie.materialIndex];if(we&&we.visible){const De=H(G,we,O,N);G.onBeforeShadow(o,G,W,fe,oe,De,ie),o.renderBufferDirect(fe,null,oe,De,G,ie),G.onAfterShadow(o,G,W,fe,oe,De,ie)}}}else if(Se.visible){const ye=H(G,Se,O,N);G.onBeforeShadow(o,G,W,fe,oe,ye,null),o.renderBufferDirect(fe,null,oe,ye,G,null),G.onAfterShadow(o,G,W,fe,oe,ye,null)}}const te=G.children;for(let oe=0,Se=te.length;oe<Se;oe++)q(te[oe],W,fe,O,N)}function J(G){G.target.removeEventListener("dispose",J);for(const fe in g){const O=g[fe],N=G.target.uuid;N in O&&(O[N].dispose(),delete O[N])}}}const I3={[op]:lp,[cp]:hp,[up]:dp,[Lo]:fp,[lp]:op,[hp]:cp,[dp]:up,[fp]:Lo};function H3(o,e){function i(){let Z=!1;const qe=new Dn;let Ge=null;const ke=new Dn(0,0,0,0);return{setMask:function(Le){Ge!==Le&&!Z&&(o.colorMask(Le,Le,Le,Le),Ge=Le)},setLocked:function(Le){Z=Le},setClear:function(Le,Re,it,wt,at){at===!0&&(Le*=wt,Re*=wt,it*=wt),qe.set(Le,Re,it,wt),ke.equals(qe)===!1&&(o.clearColor(Le,Re,it,wt),ke.copy(qe))},reset:function(){Z=!1,Ge=null,ke.set(-1,0,0,0)}}}function r(){let Z=!1,qe=!1,Ge=null,ke=null,Le=null;return{setReversed:function(Re){if(qe!==Re){const it=e.get("EXT_clip_control");Re?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),qe=Re;const wt=Le;Le=null,this.setClear(wt)}},getReversed:function(){return qe},setTest:function(Re){Re?ve(o.DEPTH_TEST):Xe(o.DEPTH_TEST)},setMask:function(Re){Ge!==Re&&!Z&&(o.depthMask(Re),Ge=Re)},setFunc:function(Re){if(qe&&(Re=I3[Re]),ke!==Re){switch(Re){case op:o.depthFunc(o.NEVER);break;case lp:o.depthFunc(o.ALWAYS);break;case cp:o.depthFunc(o.LESS);break;case Lo:o.depthFunc(o.LEQUAL);break;case up:o.depthFunc(o.EQUAL);break;case fp:o.depthFunc(o.GEQUAL);break;case hp:o.depthFunc(o.GREATER);break;case dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ke=Re}},setLocked:function(Re){Z=Re},setClear:function(Re){Le!==Re&&(qe&&(Re=1-Re),o.clearDepth(Re),Le=Re)},reset:function(){Z=!1,Ge=null,ke=null,Le=null,qe=!1}}}function l(){let Z=!1,qe=null,Ge=null,ke=null,Le=null,Re=null,it=null,wt=null,at=null;return{setTest:function(Jt){Z||(Jt?ve(o.STENCIL_TEST):Xe(o.STENCIL_TEST))},setMask:function(Jt){qe!==Jt&&!Z&&(o.stencilMask(Jt),qe=Jt)},setFunc:function(Jt,Yn,li){(Ge!==Jt||ke!==Yn||Le!==li)&&(o.stencilFunc(Jt,Yn,li),Ge=Jt,ke=Yn,Le=li)},setOp:function(Jt,Yn,li){(Re!==Jt||it!==Yn||wt!==li)&&(o.stencilOp(Jt,Yn,li),Re=Jt,it=Yn,wt=li)},setLocked:function(Jt){Z=Jt},setClear:function(Jt){at!==Jt&&(o.clearStencil(Jt),at=Jt)},reset:function(){Z=!1,qe=null,Ge=null,ke=null,Le=null,Re=null,it=null,wt=null,at=null}}}const f=new i,p=new r,m=new l,_=new WeakMap,g=new WeakMap;let b={},v={},E=new WeakMap,A=[],D=null,P=!1,T=null,M=null,X=null,H=null,q=null,J=null,G=null,W=new Kt(0,0,0),fe=0,O=!1,N=null,j=null,te=null,oe=null,Se=null;const ye=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const ie=o.getParameter(o.VERSION);ie.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=$>=1):ie.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=$>=2);let we=null,De={};const V=o.getParameter(o.SCISSOR_BOX),pe=o.getParameter(o.VIEWPORT),Ue=new Dn().fromArray(V),Fe=new Dn().fromArray(pe);function et(Z,qe,Ge,ke){const Le=new Uint8Array(4),Re=o.createTexture();o.bindTexture(Z,Re),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<Ge;it++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(qe,0,o.RGBA,1,1,ke,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(qe+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Re}const he={};he[o.TEXTURE_2D]=et(o.TEXTURE_2D,o.TEXTURE_2D,1),he[o.TEXTURE_CUBE_MAP]=et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[o.TEXTURE_2D_ARRAY]=et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),he[o.TEXTURE_3D]=et(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),ve(o.DEPTH_TEST),p.setFunc(Lo),Be(!1),tt(vx),ve(o.CULL_FACE),Me(Ja);function ve(Z){b[Z]!==!0&&(o.enable(Z),b[Z]=!0)}function Xe(Z){b[Z]!==!1&&(o.disable(Z),b[Z]=!1)}function st(Z,qe){return v[Z]!==qe?(o.bindFramebuffer(Z,qe),v[Z]=qe,Z===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=qe),Z===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=qe),!0):!1}function ft(Z,qe){let Ge=A,ke=!1;if(Z){Ge=E.get(qe),Ge===void 0&&(Ge=[],E.set(qe,Ge));const Le=Z.textures;if(Ge.length!==Le.length||Ge[0]!==o.COLOR_ATTACHMENT0){for(let Re=0,it=Le.length;Re<it;Re++)Ge[Re]=o.COLOR_ATTACHMENT0+Re;Ge.length=Le.length,ke=!0}}else Ge[0]!==o.BACK&&(Ge[0]=o.BACK,ke=!0);ke&&o.drawBuffers(Ge)}function Et(Z){return D!==Z?(o.useProgram(Z),D=Z,!0):!1}const rn={[_s]:o.FUNC_ADD,[Iy]:o.FUNC_SUBTRACT,[Hy]:o.FUNC_REVERSE_SUBTRACT};rn[Vy]=o.MIN,rn[Gy]=o.MAX;const Lt={[ky]:o.ZERO,[Xy]:o.ONE,[Wy]:o.SRC_COLOR,[rp]:o.SRC_ALPHA,[Qy]:o.SRC_ALPHA_SATURATE,[Zy]:o.DST_COLOR,[Yy]:o.DST_ALPHA,[qy]:o.ONE_MINUS_SRC_COLOR,[sp]:o.ONE_MINUS_SRC_ALPHA,[Ky]:o.ONE_MINUS_DST_COLOR,[jy]:o.ONE_MINUS_DST_ALPHA,[Jy]:o.CONSTANT_COLOR,[$y]:o.ONE_MINUS_CONSTANT_COLOR,[eS]:o.CONSTANT_ALPHA,[tS]:o.ONE_MINUS_CONSTANT_ALPHA};function Me(Z,qe,Ge,ke,Le,Re,it,wt,at,Jt){if(Z===Ja){P===!0&&(Xe(o.BLEND),P=!1);return}if(P===!1&&(ve(o.BLEND),P=!0),Z!==By){if(Z!==T||Jt!==O){if((M!==_s||q!==_s)&&(o.blendEquation(o.FUNC_ADD),M=_s,q=_s),Jt)switch(Z){case Do:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yx:o.blendFunc(o.ONE,o.ONE);break;case Sx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case bx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Cn("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Do:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Sx:Cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bx:Cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Cn("WebGLState: Invalid blending: ",Z);break}X=null,H=null,J=null,G=null,W.set(0,0,0),fe=0,T=Z,O=Jt}return}Le=Le||qe,Re=Re||Ge,it=it||ke,(qe!==M||Le!==q)&&(o.blendEquationSeparate(rn[qe],rn[Le]),M=qe,q=Le),(Ge!==X||ke!==H||Re!==J||it!==G)&&(o.blendFuncSeparate(Lt[Ge],Lt[ke],Lt[Re],Lt[it]),X=Ge,H=ke,J=Re,G=it),(wt.equals(W)===!1||at!==fe)&&(o.blendColor(wt.r,wt.g,wt.b,at),W.copy(wt),fe=at),T=Z,O=!1}function F(Z,qe){Z.side===ga?Xe(o.CULL_FACE):ve(o.CULL_FACE);let Ge=Z.side===Mi;qe&&(Ge=!Ge),Be(Ge),Z.blending===Do&&Z.transparent===!1?Me(Ja):Me(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),p.setFunc(Z.depthFunc),p.setTest(Z.depthTest),p.setMask(Z.depthWrite),f.setMask(Z.colorWrite);const ke=Z.stencilWrite;m.setTest(ke),ke&&(m.setMask(Z.stencilWriteMask),m.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),m.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),We(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Xe(o.SAMPLE_ALPHA_TO_COVERAGE)}function Be(Z){N!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),N=Z)}function tt(Z){Z!==Py?(ve(o.CULL_FACE),Z!==j&&(Z===vx?o.cullFace(o.BACK):Z===Fy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Xe(o.CULL_FACE),j=Z}function xt(Z){Z!==te&&(B&&o.lineWidth(Z),te=Z)}function We(Z,qe,Ge){Z?(ve(o.POLYGON_OFFSET_FILL),(oe!==qe||Se!==Ge)&&(o.polygonOffset(qe,Ge),oe=qe,Se=Ge)):Xe(o.POLYGON_OFFSET_FILL)}function Bt(Z){Z?ve(o.SCISSOR_TEST):Xe(o.SCISSOR_TEST)}function He(Z){Z===void 0&&(Z=o.TEXTURE0+ye-1),we!==Z&&(o.activeTexture(Z),we=Z)}function dt(Z,qe,Ge){Ge===void 0&&(we===null?Ge=o.TEXTURE0+ye-1:Ge=we);let ke=De[Ge];ke===void 0&&(ke={type:void 0,texture:void 0},De[Ge]=ke),(ke.type!==Z||ke.texture!==qe)&&(we!==Ge&&(o.activeTexture(Ge),we=Ge),o.bindTexture(Z,qe||he[Z]),ke.type=Z,ke.texture=qe)}function I(){const Z=De[we];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function se(){try{o.compressedTexImage3D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function Ee(){try{o.texSubImage2D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function Ae(){try{o.texSubImage3D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function ae(){try{o.compressedTexSubImage2D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function je(){try{o.texStorage2D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function vt(){try{o.texStorage3D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function Ve(){try{o.texImage2D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function Ne(){try{o.texImage3D(...arguments)}catch(Z){Z("WebGLState:",Z)}}function Pe(Z){Ue.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),Ue.copy(Z))}function lt(Z){Fe.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),Fe.copy(Z))}function ct(Z,qe){let Ge=g.get(qe);Ge===void 0&&(Ge=new WeakMap,g.set(qe,Ge));let ke=Ge.get(Z);ke===void 0&&(ke=o.getUniformBlockIndex(qe,Z.name),Ge.set(Z,ke))}function Ze(Z,qe){const ke=g.get(qe).get(Z);_.get(qe)!==ke&&(o.uniformBlockBinding(qe,ke,Z.__bindingPointIndex),_.set(qe,ke))}function Mt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),p.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),b={},we=null,De={},v={},E=new WeakMap,A=[],D=null,P=!1,T=null,M=null,X=null,H=null,q=null,J=null,G=null,W=new Kt(0,0,0),fe=0,O=!1,N=null,j=null,te=null,oe=null,Se=null,Ue.set(0,0,o.canvas.width,o.canvas.height),Fe.set(0,0,o.canvas.width,o.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:ve,disable:Xe,bindFramebuffer:st,drawBuffers:ft,useProgram:Et,setBlending:Me,setMaterial:F,setFlipSided:Be,setCullFace:tt,setLineWidth:xt,setPolygonOffset:We,setScissorTest:Bt,activeTexture:He,bindTexture:dt,unbindTexture:I,compressedTexImage2D:R,compressedTexImage3D:se,texImage2D:Ve,texImage3D:Ne,updateUBOMapping:ct,uniformBlockBinding:Ze,texStorage2D:je,texStorage3D:vt,texSubImage2D:Ee,texSubImage3D:Ae,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ye,scissor:Pe,viewport:lt,reset:Mt}}function V3(o,e,i,r,l,f,p){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Nt,b=new WeakMap;let v;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(I,R){return A?new OffscreenCanvas(I,R):Yu("canvas")}function P(I,R,se){let Ee=1;const Ae=dt(I);if((Ae.width>se||Ae.height>se)&&(Ee=se/Math.max(Ae.width,Ae.height)),Ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ae=Math.floor(Ee*Ae.width),Ye=Math.floor(Ee*Ae.height);v===void 0&&(v=D(ae,Ye));const je=R?D(ae,Ye):v;return je.width=ae,je.height=Ye,je.getContext("2d").drawImage(I,0,0,ae,Ye),Ct("WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+ae+"x"+Ye+")."),je}else return"data"in I&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),I;return I}function T(I){return I.generateMipmaps}function M(I){o.generateMipmap(I)}function X(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function H(I,R,se,Ee,Ae=!1){if(I!==null){if(o[I]!==void 0)return o[I];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=R;if(R===o.RED&&(se===o.FLOAT&&(ae=o.R32F),se===o.HALF_FLOAT&&(ae=o.R16F),se===o.UNSIGNED_BYTE&&(ae=o.R8)),R===o.RED_INTEGER&&(se===o.UNSIGNED_BYTE&&(ae=o.R8UI),se===o.UNSIGNED_SHORT&&(ae=o.R16UI),se===o.UNSIGNED_INT&&(ae=o.R32UI),se===o.BYTE&&(ae=o.R8I),se===o.SHORT&&(ae=o.R16I),se===o.INT&&(ae=o.R32I)),R===o.RG&&(se===o.FLOAT&&(ae=o.RG32F),se===o.HALF_FLOAT&&(ae=o.RG16F),se===o.UNSIGNED_BYTE&&(ae=o.RG8)),R===o.RG_INTEGER&&(se===o.UNSIGNED_BYTE&&(ae=o.RG8UI),se===o.UNSIGNED_SHORT&&(ae=o.RG16UI),se===o.UNSIGNED_INT&&(ae=o.RG32UI),se===o.BYTE&&(ae=o.RG8I),se===o.SHORT&&(ae=o.RG16I),se===o.INT&&(ae=o.RG32I)),R===o.RGB_INTEGER&&(se===o.UNSIGNED_BYTE&&(ae=o.RGB8UI),se===o.UNSIGNED_SHORT&&(ae=o.RGB16UI),se===o.UNSIGNED_INT&&(ae=o.RGB32UI),se===o.BYTE&&(ae=o.RGB8I),se===o.SHORT&&(ae=o.RGB16I),se===o.INT&&(ae=o.RGB32I)),R===o.RGBA_INTEGER&&(se===o.UNSIGNED_BYTE&&(ae=o.RGBA8UI),se===o.UNSIGNED_SHORT&&(ae=o.RGBA16UI),se===o.UNSIGNED_INT&&(ae=o.RGBA32UI),se===o.BYTE&&(ae=o.RGBA8I),se===o.SHORT&&(ae=o.RGBA16I),se===o.INT&&(ae=o.RGBA32I)),R===o.RGB&&(se===o.UNSIGNED_INT_5_9_9_9_REV&&(ae=o.RGB9_E5),se===o.UNSIGNED_INT_10F_11F_11F_REV&&(ae=o.R11F_G11F_B10F)),R===o.RGBA){const Ye=Ae?Wu:nn.getTransfer(Ee);se===o.FLOAT&&(ae=o.RGBA32F),se===o.HALF_FLOAT&&(ae=o.RGBA16F),se===o.UNSIGNED_BYTE&&(ae=Ye===pn?o.SRGB8_ALPHA8:o.RGBA8),se===o.UNSIGNED_SHORT_4_4_4_4&&(ae=o.RGBA4),se===o.UNSIGNED_SHORT_5_5_5_1&&(ae=o.RGB5_A1)}return(ae===o.R16F||ae===o.R32F||ae===o.RG16F||ae===o.RG32F||ae===o.RGBA16F||ae===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function q(I,R){let se;return I?R===null||R===Ss||R===Yl?se=o.DEPTH24_STENCIL8:R===Qa?se=o.DEPTH32F_STENCIL8:R===ql&&(se=o.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ss||R===Yl?se=o.DEPTH_COMPONENT24:R===Qa?se=o.DEPTH_COMPONENT32F:R===ql&&(se=o.DEPTH_COMPONENT16),se}function J(I,R){return T(I)===!0||I.isFramebufferTexture&&I.minFilter!==Li&&I.minFilter!==qi?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function G(I){const R=I.target;R.removeEventListener("dispose",G),fe(R),R.isVideoTexture&&b.delete(R)}function W(I){const R=I.target;R.removeEventListener("dispose",W),N(R)}function fe(I){const R=r.get(I);if(R.__webglInit===void 0)return;const se=I.source,Ee=E.get(se);if(Ee){const Ae=Ee[R.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&O(I),Object.keys(Ee).length===0&&E.delete(se)}r.remove(I)}function O(I){const R=r.get(I);o.deleteTexture(R.__webglTexture);const se=I.source,Ee=E.get(se);delete Ee[R.__cacheKey],p.memory.textures--}function N(I){const R=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(R.__webglFramebuffer[Ee]))for(let Ae=0;Ae<R.__webglFramebuffer[Ee].length;Ae++)o.deleteFramebuffer(R.__webglFramebuffer[Ee][Ae]);else o.deleteFramebuffer(R.__webglFramebuffer[Ee]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[Ee])}else{if(Array.isArray(R.__webglFramebuffer))for(let Ee=0;Ee<R.__webglFramebuffer.length;Ee++)o.deleteFramebuffer(R.__webglFramebuffer[Ee]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Ee=0;Ee<R.__webglColorRenderbuffer.length;Ee++)R.__webglColorRenderbuffer[Ee]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[Ee]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const se=I.textures;for(let Ee=0,Ae=se.length;Ee<Ae;Ee++){const ae=r.get(se[Ee]);ae.__webglTexture&&(o.deleteTexture(ae.__webglTexture),p.memory.textures--),r.remove(se[Ee])}r.remove(I)}let j=0;function te(){j=0}function oe(){const I=j;return I>=l.maxTextures&&Ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),j+=1,I}function Se(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function ye(I,R){const se=r.get(I);if(I.isVideoTexture&&Bt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&se.__version!==I.version){const Ee=I.image;if(Ee===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{he(se,I,R);return}}else I.isExternalTexture&&(se.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,se.__webglTexture,o.TEXTURE0+R)}function B(I,R){const se=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&se.__version!==I.version){he(se,I,R);return}else I.isExternalTexture&&(se.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,se.__webglTexture,o.TEXTURE0+R)}function $(I,R){const se=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&se.__version!==I.version){he(se,I,R);return}i.bindTexture(o.TEXTURE_3D,se.__webglTexture,o.TEXTURE0+R)}function ie(I,R){const se=r.get(I);if(I.version>0&&se.__version!==I.version){ve(se,I,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,se.__webglTexture,o.TEXTURE0+R)}const we={[gp]:o.REPEAT,[Ka]:o.CLAMP_TO_EDGE,[xp]:o.MIRRORED_REPEAT},De={[Li]:o.NEAREST,[fS]:o.NEAREST_MIPMAP_NEAREST,[gu]:o.NEAREST_MIPMAP_LINEAR,[qi]:o.LINEAR,[Ed]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},V={[mS]:o.NEVER,[SS]:o.ALWAYS,[gS]:o.LESS,[I_]:o.LEQUAL,[xS]:o.EQUAL,[yS]:o.GEQUAL,[_S]:o.GREATER,[vS]:o.NOTEQUAL};function pe(I,R){if(R.type===Qa&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===qi||R.magFilter===Ed||R.magFilter===gu||R.magFilter===ys||R.minFilter===qi||R.minFilter===Ed||R.minFilter===gu||R.minFilter===ys)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,we[R.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,we[R.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,we[R.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,De[R.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,De[R.minFilter]),R.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,V[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Li||R.minFilter!==gu&&R.minFilter!==ys||R.type===Qa&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function Ue(I,R){let se=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",G));const Ee=R.source;let Ae=E.get(Ee);Ae===void 0&&(Ae={},E.set(Ee,Ae));const ae=Se(R);if(ae!==I.__cacheKey){Ae[ae]===void 0&&(Ae[ae]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,se=!0),Ae[ae].usedTimes++;const Ye=Ae[I.__cacheKey];Ye!==void 0&&(Ae[I.__cacheKey].usedTimes--,Ye.usedTimes===0&&O(R)),I.__cacheKey=ae,I.__webglTexture=Ae[ae].texture}return se}function Fe(I,R,se){return Math.floor(Math.floor(I/se)/R)}function et(I,R,se,Ee){const ae=I.updateRanges;if(ae.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,se,Ee,R.data);else{ae.sort((Ne,Pe)=>Ne.start-Pe.start);let Ye=0;for(let Ne=1;Ne<ae.length;Ne++){const Pe=ae[Ye],lt=ae[Ne],ct=Pe.start+Pe.count,Ze=Fe(lt.start,R.width,4),Mt=Fe(Pe.start,R.width,4);lt.start<=ct+1&&Ze===Mt&&Fe(lt.start+lt.count-1,R.width,4)===Ze?Pe.count=Math.max(Pe.count,lt.start+lt.count-Pe.start):(++Ye,ae[Ye]=lt)}ae.length=Ye+1;const je=o.getParameter(o.UNPACK_ROW_LENGTH),vt=o.getParameter(o.UNPACK_SKIP_PIXELS),Ve=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Ne=0,Pe=ae.length;Ne<Pe;Ne++){const lt=ae[Ne],ct=Math.floor(lt.start/4),Ze=Math.ceil(lt.count/4),Mt=ct%R.width,Z=Math.floor(ct/R.width),qe=Ze,Ge=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(o.TEXTURE_2D,0,Mt,Z,qe,Ge,se,Ee,R.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,je),o.pixelStorei(o.UNPACK_SKIP_PIXELS,vt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ve)}}function he(I,R,se){let Ee=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Ee=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Ee=o.TEXTURE_3D);const Ae=Ue(I,R),ae=R.source;i.bindTexture(Ee,I.__webglTexture,o.TEXTURE0+se);const Ye=r.get(ae);if(ae.version!==Ye.__version||Ae===!0){i.activeTexture(o.TEXTURE0+se);const je=nn.getPrimaries(nn.workingColorSpace),vt=R.colorSpace===Br?null:nn.getPrimaries(R.colorSpace),Ve=R.colorSpace===Br||je===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Ne=P(R.image,!1,l.maxTextureSize);Ne=He(R,Ne);const Pe=f.convert(R.format,R.colorSpace),lt=f.convert(R.type);let ct=H(R.internalFormat,Pe,lt,R.colorSpace,R.isVideoTexture);pe(Ee,R);let Ze;const Mt=R.mipmaps,Z=R.isVideoTexture!==!0,qe=Ye.__version===void 0||Ae===!0,Ge=ae.dataReady,ke=J(R,Ne);if(R.isDepthTexture)ct=q(R.format===Zl,R.type),qe&&(Z?i.texStorage2D(o.TEXTURE_2D,1,ct,Ne.width,Ne.height):i.texImage2D(o.TEXTURE_2D,0,ct,Ne.width,Ne.height,0,Pe,lt,null));else if(R.isDataTexture)if(Mt.length>0){Z&&qe&&i.texStorage2D(o.TEXTURE_2D,ke,ct,Mt[0].width,Mt[0].height);for(let Le=0,Re=Mt.length;Le<Re;Le++)Ze=Mt[Le],Z?Ge&&i.texSubImage2D(o.TEXTURE_2D,Le,0,0,Ze.width,Ze.height,Pe,lt,Ze.data):i.texImage2D(o.TEXTURE_2D,Le,ct,Ze.width,Ze.height,0,Pe,lt,Ze.data);R.generateMipmaps=!1}else Z?(qe&&i.texStorage2D(o.TEXTURE_2D,ke,ct,Ne.width,Ne.height),Ge&&et(R,Ne,Pe,lt)):i.texImage2D(o.TEXTURE_2D,0,ct,Ne.width,Ne.height,0,Pe,lt,Ne.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Z&&qe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ke,ct,Mt[0].width,Mt[0].height,Ne.depth);for(let Le=0,Re=Mt.length;Le<Re;Le++)if(Ze=Mt[Le],R.format!==sa)if(Pe!==null)if(Z){if(Ge)if(R.layerUpdates.size>0){const it=e_(Ze.width,Ze.height,R.format,R.type);for(const wt of R.layerUpdates){const at=Ze.data.subarray(wt*it/Ze.data.BYTES_PER_ELEMENT,(wt+1)*it/Ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Le,0,0,wt,Ze.width,Ze.height,1,Pe,at)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Le,0,0,0,Ze.width,Ze.height,Ne.depth,Pe,Ze.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Le,ct,Ze.width,Ze.height,Ne.depth,0,Ze.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Ge&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Le,0,0,0,Ze.width,Ze.height,Ne.depth,Pe,lt,Ze.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Le,ct,Ze.width,Ze.height,Ne.depth,0,Pe,lt,Ze.data)}else{Z&&qe&&i.texStorage2D(o.TEXTURE_2D,ke,ct,Mt[0].width,Mt[0].height);for(let Le=0,Re=Mt.length;Le<Re;Le++)Ze=Mt[Le],R.format!==sa?Pe!==null?Z?Ge&&i.compressedTexSubImage2D(o.TEXTURE_2D,Le,0,0,Ze.width,Ze.height,Pe,Ze.data):i.compressedTexImage2D(o.TEXTURE_2D,Le,ct,Ze.width,Ze.height,0,Ze.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Ge&&i.texSubImage2D(o.TEXTURE_2D,Le,0,0,Ze.width,Ze.height,Pe,lt,Ze.data):i.texImage2D(o.TEXTURE_2D,Le,ct,Ze.width,Ze.height,0,Pe,lt,Ze.data)}else if(R.isDataArrayTexture)if(Z){if(qe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ke,ct,Ne.width,Ne.height,Ne.depth),Ge)if(R.layerUpdates.size>0){const Le=e_(Ne.width,Ne.height,R.format,R.type);for(const Re of R.layerUpdates){const it=Ne.data.subarray(Re*Le/Ne.data.BYTES_PER_ELEMENT,(Re+1)*Le/Ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Re,Ne.width,Ne.height,1,Pe,lt,it)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,Pe,lt,Ne.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ct,Ne.width,Ne.height,Ne.depth,0,Pe,lt,Ne.data);else if(R.isData3DTexture)Z?(qe&&i.texStorage3D(o.TEXTURE_3D,ke,ct,Ne.width,Ne.height,Ne.depth),Ge&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,Pe,lt,Ne.data)):i.texImage3D(o.TEXTURE_3D,0,ct,Ne.width,Ne.height,Ne.depth,0,Pe,lt,Ne.data);else if(R.isFramebufferTexture){if(qe)if(Z)i.texStorage2D(o.TEXTURE_2D,ke,ct,Ne.width,Ne.height);else{let Le=Ne.width,Re=Ne.height;for(let it=0;it<ke;it++)i.texImage2D(o.TEXTURE_2D,it,ct,Le,Re,0,Pe,lt,null),Le>>=1,Re>>=1}}else if(Mt.length>0){if(Z&&qe){const Le=dt(Mt[0]);i.texStorage2D(o.TEXTURE_2D,ke,ct,Le.width,Le.height)}for(let Le=0,Re=Mt.length;Le<Re;Le++)Ze=Mt[Le],Z?Ge&&i.texSubImage2D(o.TEXTURE_2D,Le,0,0,Pe,lt,Ze):i.texImage2D(o.TEXTURE_2D,Le,ct,Pe,lt,Ze);R.generateMipmaps=!1}else if(Z){if(qe){const Le=dt(Ne);i.texStorage2D(o.TEXTURE_2D,ke,ct,Le.width,Le.height)}Ge&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,lt,Ne)}else i.texImage2D(o.TEXTURE_2D,0,ct,Pe,lt,Ne);T(R)&&M(Ee),Ye.__version=ae.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ve(I,R,se){if(R.image.length!==6)return;const Ee=Ue(I,R),Ae=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+se);const ae=r.get(Ae);if(Ae.version!==ae.__version||Ee===!0){i.activeTexture(o.TEXTURE0+se);const Ye=nn.getPrimaries(nn.workingColorSpace),je=R.colorSpace===Br?null:nn.getPrimaries(R.colorSpace),vt=R.colorSpace===Br||Ye===je?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Ve=R.isCompressedTexture||R.image[0].isCompressedTexture,Ne=R.image[0]&&R.image[0].isDataTexture,Pe=[];for(let Re=0;Re<6;Re++)!Ve&&!Ne?Pe[Re]=P(R.image[Re],!0,l.maxCubemapSize):Pe[Re]=Ne?R.image[Re].image:R.image[Re],Pe[Re]=He(R,Pe[Re]);const lt=Pe[0],ct=f.convert(R.format,R.colorSpace),Ze=f.convert(R.type),Mt=H(R.internalFormat,ct,Ze,R.colorSpace),Z=R.isVideoTexture!==!0,qe=ae.__version===void 0||Ee===!0,Ge=Ae.dataReady;let ke=J(R,lt);pe(o.TEXTURE_CUBE_MAP,R);let Le;if(Ve){Z&&qe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ke,Mt,lt.width,lt.height);for(let Re=0;Re<6;Re++){Le=Pe[Re].mipmaps;for(let it=0;it<Le.length;it++){const wt=Le[it];R.format!==sa?ct!==null?Z?Ge&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it,0,0,wt.width,wt.height,ct,wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it,Mt,wt.width,wt.height,0,wt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it,0,0,wt.width,wt.height,ct,Ze,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it,Mt,wt.width,wt.height,0,ct,Ze,wt.data)}}}else{if(Le=R.mipmaps,Z&&qe){Le.length>0&&ke++;const Re=dt(Pe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ke,Mt,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Ne){Z?Ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Pe[Re].width,Pe[Re].height,ct,Ze,Pe[Re].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Mt,Pe[Re].width,Pe[Re].height,0,ct,Ze,Pe[Re].data);for(let it=0;it<Le.length;it++){const at=Le[it].image[Re].image;Z?Ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it+1,0,0,at.width,at.height,ct,Ze,at.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it+1,Mt,at.width,at.height,0,ct,Ze,at.data)}}else{Z?Ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ct,Ze,Pe[Re]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Mt,ct,Ze,Pe[Re]);for(let it=0;it<Le.length;it++){const wt=Le[it];Z?Ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it+1,0,0,ct,Ze,wt.image[Re]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it+1,Mt,ct,Ze,wt.image[Re])}}}T(R)&&M(o.TEXTURE_CUBE_MAP),ae.__version=Ae.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Xe(I,R,se,Ee,Ae,ae){const Ye=f.convert(se.format,se.colorSpace),je=f.convert(se.type),vt=H(se.internalFormat,Ye,je,se.colorSpace),Ve=r.get(R),Ne=r.get(se);if(Ne.__renderTarget=R,!Ve.__hasExternalTextures){const Pe=Math.max(1,R.width>>ae),lt=Math.max(1,R.height>>ae);Ae===o.TEXTURE_3D||Ae===o.TEXTURE_2D_ARRAY?i.texImage3D(Ae,ae,vt,Pe,lt,R.depth,0,Ye,je,null):i.texImage2D(Ae,ae,vt,Pe,lt,0,Ye,je,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),We(R)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,Ae,Ne.__webglTexture,0,xt(R)):(Ae===o.TEXTURE_2D||Ae>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Ee,Ae,Ne.__webglTexture,ae),i.bindFramebuffer(o.FRAMEBUFFER,null)}function st(I,R,se){if(o.bindRenderbuffer(o.RENDERBUFFER,I),R.depthBuffer){const Ee=R.depthTexture,Ae=Ee&&Ee.isDepthTexture?Ee.type:null,ae=q(R.stencilBuffer,Ae),Ye=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=xt(R);We(R)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,ae,R.width,R.height):se?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,ae,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ae,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,I)}else{const Ee=R.textures;for(let Ae=0;Ae<Ee.length;Ae++){const ae=Ee[Ae],Ye=f.convert(ae.format,ae.colorSpace),je=f.convert(ae.type),vt=H(ae.internalFormat,Ye,je,ae.colorSpace),Ve=xt(R);se&&We(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ve,vt,R.width,R.height):We(R)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ve,vt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,vt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ft(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(R.depthTexture);Ee.__renderTarget=R,(!Ee.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ye(R.depthTexture,0);const Ae=Ee.__webglTexture,ae=xt(R);if(R.depthTexture.format===jl)We(R)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ae,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ae,0);else if(R.depthTexture.format===Zl)We(R)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ae,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function Et(I){const R=r.get(I),se=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const Ee=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Ee){const Ae=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Ee.removeEventListener("dispose",Ae)};Ee.addEventListener("dispose",Ae),R.__depthDisposeCallback=Ae}R.__boundDepthTexture=Ee}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");const Ee=I.texture.mipmaps;Ee&&Ee.length>0?ft(R.__webglFramebuffer[0],I):ft(R.__webglFramebuffer,I)}else if(se){R.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[Ee]),R.__webglDepthbuffer[Ee]===void 0)R.__webglDepthbuffer[Ee]=o.createRenderbuffer(),st(R.__webglDepthbuffer[Ee],I,!1);else{const Ae=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer[Ee];o.bindRenderbuffer(o.RENDERBUFFER,ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ae,o.RENDERBUFFER,ae)}}else{const Ee=I.texture.mipmaps;if(Ee&&Ee.length>0?i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),st(R.__webglDepthbuffer,I,!1);else{const Ae=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ae,o.RENDERBUFFER,ae)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function rn(I,R,se){const Ee=r.get(I);R!==void 0&&Xe(Ee.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),se!==void 0&&Et(I)}function Lt(I){const R=I.texture,se=r.get(I),Ee=r.get(R);I.addEventListener("dispose",W);const Ae=I.textures,ae=I.isWebGLCubeRenderTarget===!0,Ye=Ae.length>1;if(Ye||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=o.createTexture()),Ee.__version=R.version,p.memory.textures++),ae){se.__webglFramebuffer=[];for(let je=0;je<6;je++)if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer[je]=[];for(let vt=0;vt<R.mipmaps.length;vt++)se.__webglFramebuffer[je][vt]=o.createFramebuffer()}else se.__webglFramebuffer[je]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer=[];for(let je=0;je<R.mipmaps.length;je++)se.__webglFramebuffer[je]=o.createFramebuffer()}else se.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let je=0,vt=Ae.length;je<vt;je++){const Ve=r.get(Ae[je]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=o.createTexture(),p.memory.textures++)}if(I.samples>0&&We(I)===!1){se.__webglMultisampledFramebuffer=o.createFramebuffer(),se.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let je=0;je<Ae.length;je++){const vt=Ae[je];se.__webglColorRenderbuffer[je]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,se.__webglColorRenderbuffer[je]);const Ve=f.convert(vt.format,vt.colorSpace),Ne=f.convert(vt.type),Pe=H(vt.internalFormat,Ve,Ne,vt.colorSpace,I.isXRRenderTarget===!0),lt=xt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,Pe,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,se.__webglColorRenderbuffer[je])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(se.__webglDepthRenderbuffer=o.createRenderbuffer(),st(se.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ae){i.bindTexture(o.TEXTURE_CUBE_MAP,Ee.__webglTexture),pe(o.TEXTURE_CUBE_MAP,R);for(let je=0;je<6;je++)if(R.mipmaps&&R.mipmaps.length>0)for(let vt=0;vt<R.mipmaps.length;vt++)Xe(se.__webglFramebuffer[je][vt],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+je,vt);else Xe(se.__webglFramebuffer[je],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+je,0);T(R)&&M(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let je=0,vt=Ae.length;je<vt;je++){const Ve=Ae[je],Ne=r.get(Ve);let Pe=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Ne.__webglTexture),pe(Pe,Ve),Xe(se.__webglFramebuffer,I,Ve,o.COLOR_ATTACHMENT0+je,Pe,0),T(Ve)&&M(Pe)}i.unbindTexture()}else{let je=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(je=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(je,Ee.__webglTexture),pe(je,R),R.mipmaps&&R.mipmaps.length>0)for(let vt=0;vt<R.mipmaps.length;vt++)Xe(se.__webglFramebuffer[vt],I,R,o.COLOR_ATTACHMENT0,je,vt);else Xe(se.__webglFramebuffer,I,R,o.COLOR_ATTACHMENT0,je,0);T(R)&&M(je),i.unbindTexture()}I.depthBuffer&&Et(I)}function Me(I){const R=I.textures;for(let se=0,Ee=R.length;se<Ee;se++){const Ae=R[se];if(T(Ae)){const ae=X(I),Ye=r.get(Ae).__webglTexture;i.bindTexture(ae,Ye),M(ae),i.unbindTexture()}}}const F=[],Be=[];function tt(I){if(I.samples>0){if(We(I)===!1){const R=I.textures,se=I.width,Ee=I.height;let Ae=o.COLOR_BUFFER_BIT;const ae=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=r.get(I),je=R.length>1;if(je)for(let Ve=0;Ve<R.length;Ve++)i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const vt=I.texture.mipmaps;vt&&vt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ve=0;Ve<R.length;Ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Ae|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Ae|=o.STENCIL_BUFFER_BIT)),je){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ve]);const Ne=r.get(R[Ve]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ne,0)}o.blitFramebuffer(0,0,se,Ee,0,0,se,Ee,Ae,o.NEAREST),_===!0&&(F.length=0,Be.length=0,F.push(o.COLOR_ATTACHMENT0+Ve),I.depthBuffer&&I.resolveDepthBuffer===!1&&(F.push(ae),Be.push(ae),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Be)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),je)for(let Ve=0;Ve<R.length;Ve++){i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ve]);const Ne=r.get(R[Ve]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,Ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&_){const R=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function xt(I){return Math.min(l.maxSamples,I.samples)}function We(I){const R=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Bt(I){const R=p.render.frame;b.get(I)!==R&&(b.set(I,R),I.update())}function He(I,R){const se=I.colorSpace,Ee=I.format,Ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||se!==Po&&se!==Br&&(nn.getTransfer(se)===pn?(Ee!==sa||Ae!==va)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Cn("WebGLTextures: Unsupported texture color space:",se)),R}function dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(g.width=I.naturalWidth||I.width,g.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(g.width=I.displayWidth,g.height=I.displayHeight):(g.width=I.width,g.height=I.height),g}this.allocateTextureUnit=oe,this.resetTextureUnits=te,this.setTexture2D=ye,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=rn,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=We}function G3(o,e){function i(r,l=Br){let f;const p=nn.getTransfer(l);if(r===va)return o.UNSIGNED_BYTE;if(r===Jp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return o.UNSIGNED_SHORT_5_5_5_1;if(r===N_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===O_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===U_)return o.BYTE;if(r===L_)return o.SHORT;if(r===ql)return o.UNSIGNED_SHORT;if(r===Qp)return o.INT;if(r===Ss)return o.UNSIGNED_INT;if(r===Qa)return o.FLOAT;if(r===zo)return o.HALF_FLOAT;if(r===P_)return o.ALPHA;if(r===F_)return o.RGB;if(r===sa)return o.RGBA;if(r===jl)return o.DEPTH_COMPONENT;if(r===Zl)return o.DEPTH_STENCIL;if(r===z_)return o.RED;if(r===em)return o.RED_INTEGER;if(r===tm)return o.RG;if(r===nm)return o.RG_INTEGER;if(r===im)return o.RGBA_INTEGER;if(r===Iu||r===Hu||r===Vu||r===Gu)if(p===pn)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Iu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Iu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_p||r===vp||r===yp||r===Sp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===_p)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bp||r===Mp||r===Ep)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===bp||r===Mp)return p===pn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Ep)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tp||r===Ap||r===wp||r===Rp||r===Cp||r===Dp||r===Up||r===Lp||r===Np||r===Op||r===Pp||r===Fp||r===zp||r===Bp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Tp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ap)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Up)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Np)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Op)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bp)return p===pn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ip||r===Hp||r===Vp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Ip)return p===pn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gp||r===kp||r===Xp||r===Wp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Gp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===kp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const k3=`
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

}`;class W3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new er({vertexShader:k3,fragmentShader:X3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yi(new $u(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q3 extends Es{constructor(e,i){super();const r=this;let l=null,f=1,p=null,m="local-floor",_=1,g=null,b=null,v=null,E=null,A=null,D=null;const P=typeof XRWebGLBinding<"u",T=new W3,M={},X=i.getContextAttributes();let H=null,q=null;const J=[],G=[],W=new Nt;let fe=null;const O=new Wi;O.viewport=new Dn;const N=new Wi;N.viewport=new Dn;const j=[O,N],te=new lb;let oe=null,Se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let ve=J[he];return ve===void 0&&(ve=new qd,J[he]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(he){let ve=J[he];return ve===void 0&&(ve=new qd,J[he]=ve),ve.getGripSpace()},this.getHand=function(he){let ve=J[he];return ve===void 0&&(ve=new qd,J[he]=ve),ve.getHandSpace()};function ye(he){const ve=G.indexOf(he.inputSource);if(ve===-1)return;const Xe=J[ve];Xe!==void 0&&(Xe.update(he.inputSource,he.frame,g||p),Xe.dispatchEvent({type:he.type,data:he.inputSource}))}function B(){l.removeEventListener("select",ye),l.removeEventListener("selectstart",ye),l.removeEventListener("selectend",ye),l.removeEventListener("squeeze",ye),l.removeEventListener("squeezestart",ye),l.removeEventListener("squeezeend",ye),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",$);for(let he=0;he<J.length;he++){const ve=G[he];ve!==null&&(G[he]=null,J[he].disconnect(ve))}oe=null,Se=null,T.reset();for(const he in M)delete M[he];e.setRenderTarget(H),A=null,E=null,v=null,l=null,q=null,et.stop(),r.isPresenting=!1,e.setPixelRatio(fe),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){f=he,r.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){m=he,r.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||p},this.setReferenceSpace=function(he){g=he},this.getBaseLayer=function(){return E!==null?E:A},this.getBinding=function(){return v===null&&P&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return D},this.getSession=function(){return l},this.setSession=async function(he){if(l=he,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",ye),l.addEventListener("selectstart",ye),l.addEventListener("selectend",ye),l.addEventListener("squeeze",ye),l.addEventListener("squeezestart",ye),l.addEventListener("squeezeend",ye),l.addEventListener("end",B),l.addEventListener("inputsourceschange",$),X.xrCompatible!==!0&&await i.makeXRCompatible(),fe=e.getPixelRatio(),e.getSize(W),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Xe=null,st=null,ft=null;X.depth&&(ft=X.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Xe=X.stencil?Zl:jl,st=X.stencil?Yl:Ss);const Et={colorFormat:i.RGBA8,depthFormat:ft,scaleFactor:f};v=this.getBinding(),E=v.createProjectionLayer(Et),l.updateRenderState({layers:[E]}),e.setPixelRatio(1),e.setSize(E.textureWidth,E.textureHeight,!1),q=new Ms(E.textureWidth,E.textureHeight,{format:sa,type:va,depthTexture:new K_(E.textureWidth,E.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Xe),stencilBuffer:X.stencil,colorSpace:e.outputColorSpace,samples:X.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const Xe={antialias:X.antialias,alpha:!0,depth:X.depth,stencil:X.stencil,framebufferScaleFactor:f};A=new XRWebGLLayer(l,i,Xe),l.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),q=new Ms(A.framebufferWidth,A.framebufferHeight,{format:sa,type:va,colorSpace:e.outputColorSpace,stencilBuffer:X.stencil,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1})}q.isXRRenderTarget=!0,this.setFoveation(_),g=null,p=await l.requestReferenceSpace(m),et.setContext(l),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function $(he){for(let ve=0;ve<he.removed.length;ve++){const Xe=he.removed[ve],st=G.indexOf(Xe);st>=0&&(G[st]=null,J[st].disconnect(Xe))}for(let ve=0;ve<he.added.length;ve++){const Xe=he.added[ve];let st=G.indexOf(Xe);if(st===-1){for(let Et=0;Et<J.length;Et++)if(Et>=G.length){G.push(Xe),st=Et;break}else if(G[Et]===null){G[Et]=Xe,st=Et;break}if(st===-1)break}const ft=J[st];ft&&ft.connect(Xe)}}const ie=new me,we=new me;function De(he,ve,Xe){ie.setFromMatrixPosition(ve.matrixWorld),we.setFromMatrixPosition(Xe.matrixWorld);const st=ie.distanceTo(we),ft=ve.projectionMatrix.elements,Et=Xe.projectionMatrix.elements,rn=ft[14]/(ft[10]-1),Lt=ft[14]/(ft[10]+1),Me=(ft[9]+1)/ft[5],F=(ft[9]-1)/ft[5],Be=(ft[8]-1)/ft[0],tt=(Et[8]+1)/Et[0],xt=rn*Be,We=rn*tt,Bt=st/(-Be+tt),He=Bt*-Be;if(ve.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(He),he.translateZ(Bt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),ft[10]===-1)he.projectionMatrix.copy(ve.projectionMatrix),he.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const dt=rn+Bt,I=Lt+Bt,R=xt-He,se=We+(st-He),Ee=Me*Lt/I*dt,Ae=F*Lt/I*dt;he.projectionMatrix.makePerspective(R,se,Ee,Ae,dt,I),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function V(he,ve){ve===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(ve.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(l===null)return;let ve=he.near,Xe=he.far;T.texture!==null&&(T.depthNear>0&&(ve=T.depthNear),T.depthFar>0&&(Xe=T.depthFar)),te.near=N.near=O.near=ve,te.far=N.far=O.far=Xe,(oe!==te.near||Se!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),oe=te.near,Se=te.far),te.layers.mask=he.layers.mask|6,O.layers.mask=te.layers.mask&3,N.layers.mask=te.layers.mask&5;const st=he.parent,ft=te.cameras;V(te,st);for(let Et=0;Et<ft.length;Et++)V(ft[Et],st);ft.length===2?De(te,O,N):te.projectionMatrix.copy(O.projectionMatrix),pe(he,te,st)};function pe(he,ve,Xe){Xe===null?he.matrix.copy(ve.matrixWorld):(he.matrix.copy(Xe.matrixWorld),he.matrix.invert(),he.matrix.multiply(ve.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(ve.projectionMatrix),he.projectionMatrixInverse.copy(ve.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=qp*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(E===null&&A===null))return _},this.setFoveation=function(he){_=he,E!==null&&(E.fixedFoveation=he),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=he)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(te)},this.getCameraTexture=function(he){return M[he]};let Ue=null;function Fe(he,ve){if(b=ve.getViewerPose(g||p),D=ve,b!==null){const Xe=b.views;A!==null&&(e.setRenderTargetFramebuffer(q,A.framebuffer),e.setRenderTarget(q));let st=!1;Xe.length!==te.cameras.length&&(te.cameras.length=0,st=!0);for(let Lt=0;Lt<Xe.length;Lt++){const Me=Xe[Lt];let F=null;if(A!==null)F=A.getViewport(Me);else{const tt=v.getViewSubImage(E,Me);F=tt.viewport,Lt===0&&(e.setRenderTargetTextures(q,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(q))}let Be=j[Lt];Be===void 0&&(Be=new Wi,Be.layers.enable(Lt),Be.viewport=new Dn,j[Lt]=Be),Be.matrix.fromArray(Me.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Me.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(F.x,F.y,F.width,F.height),Lt===0&&(te.matrix.copy(Be.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),st===!0&&te.cameras.push(Be)}const ft=l.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&P){v=r.getBinding();const Lt=v.getDepthInformation(Xe[0]);Lt&&Lt.isValid&&Lt.texture&&T.init(Lt,l.renderState)}if(ft&&ft.includes("camera-access")&&P){e.state.unbindTexture(),v=r.getBinding();for(let Lt=0;Lt<Xe.length;Lt++){const Me=Xe[Lt].camera;if(Me){let F=M[Me];F||(F=new Q_,M[Me]=F);const Be=v.getCameraImage(Me);F.sourceTexture=Be}}}}for(let Xe=0;Xe<J.length;Xe++){const st=G[Xe],ft=J[Xe];st!==null&&ft!==void 0&&ft.update(st,ve,g||p)}Ue&&Ue(he,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),D=null}const et=new ev;et.setAnimationLoop(Fe),this.setAnimationLoop=function(he){Ue=he},this.dispose=function(){}}}const xs=new ya,Y3=new Mn;function j3(o,e){function i(T,M){T.matrixAutoUpdate===!0&&T.updateMatrix(),M.value.copy(T.matrix)}function r(T,M){M.color.getRGB(T.fogColor.value,q_(o)),M.isFog?(T.fogNear.value=M.near,T.fogFar.value=M.far):M.isFogExp2&&(T.fogDensity.value=M.density)}function l(T,M,X,H,q){M.isMeshBasicMaterial||M.isMeshLambertMaterial?f(T,M):M.isMeshToonMaterial?(f(T,M),v(T,M)):M.isMeshPhongMaterial?(f(T,M),b(T,M)):M.isMeshStandardMaterial?(f(T,M),E(T,M),M.isMeshPhysicalMaterial&&A(T,M,q)):M.isMeshMatcapMaterial?(f(T,M),D(T,M)):M.isMeshDepthMaterial?f(T,M):M.isMeshDistanceMaterial?(f(T,M),P(T,M)):M.isMeshNormalMaterial?f(T,M):M.isLineBasicMaterial?(p(T,M),M.isLineDashedMaterial&&m(T,M)):M.isPointsMaterial?_(T,M,X,H):M.isSpriteMaterial?g(T,M):M.isShadowMaterial?(T.color.value.copy(M.color),T.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function f(T,M){T.opacity.value=M.opacity,M.color&&T.diffuse.value.copy(M.color),M.emissive&&T.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.bumpMap&&(T.bumpMap.value=M.bumpMap,i(M.bumpMap,T.bumpMapTransform),T.bumpScale.value=M.bumpScale,M.side===Mi&&(T.bumpScale.value*=-1)),M.normalMap&&(T.normalMap.value=M.normalMap,i(M.normalMap,T.normalMapTransform),T.normalScale.value.copy(M.normalScale),M.side===Mi&&T.normalScale.value.negate()),M.displacementMap&&(T.displacementMap.value=M.displacementMap,i(M.displacementMap,T.displacementMapTransform),T.displacementScale.value=M.displacementScale,T.displacementBias.value=M.displacementBias),M.emissiveMap&&(T.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,T.emissiveMapTransform)),M.specularMap&&(T.specularMap.value=M.specularMap,i(M.specularMap,T.specularMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest);const X=e.get(M),H=X.envMap,q=X.envMapRotation;H&&(T.envMap.value=H,xs.copy(q),xs.x*=-1,xs.y*=-1,xs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),T.envMapRotation.value.setFromMatrix4(Y3.makeRotationFromEuler(xs)),T.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=M.reflectivity,T.ior.value=M.ior,T.refractionRatio.value=M.refractionRatio),M.lightMap&&(T.lightMap.value=M.lightMap,T.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,T.lightMapTransform)),M.aoMap&&(T.aoMap.value=M.aoMap,T.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,T.aoMapTransform))}function p(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform))}function m(T,M){T.dashSize.value=M.dashSize,T.totalSize.value=M.dashSize+M.gapSize,T.scale.value=M.scale}function _(T,M,X,H){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.size.value=M.size*X,T.scale.value=H*.5,M.map&&(T.map.value=M.map,i(M.map,T.uvTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function g(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.rotation.value=M.rotation,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function b(T,M){T.specular.value.copy(M.specular),T.shininess.value=Math.max(M.shininess,1e-4)}function v(T,M){M.gradientMap&&(T.gradientMap.value=M.gradientMap)}function E(T,M){T.metalness.value=M.metalness,M.metalnessMap&&(T.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,T.metalnessMapTransform)),T.roughness.value=M.roughness,M.roughnessMap&&(T.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,T.roughnessMapTransform)),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)}function A(T,M,X){T.ior.value=M.ior,M.sheen>0&&(T.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),T.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(T.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,T.sheenColorMapTransform)),M.sheenRoughnessMap&&(T.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,T.sheenRoughnessMapTransform))),M.clearcoat>0&&(T.clearcoat.value=M.clearcoat,T.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(T.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,T.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(T.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Mi&&T.clearcoatNormalScale.value.negate())),M.dispersion>0&&(T.dispersion.value=M.dispersion),M.iridescence>0&&(T.iridescence.value=M.iridescence,T.iridescenceIOR.value=M.iridescenceIOR,T.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(T.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,T.iridescenceMapTransform)),M.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),M.transmission>0&&(T.transmission.value=M.transmission,T.transmissionSamplerMap.value=X.texture,T.transmissionSamplerSize.value.set(X.width,X.height),M.transmissionMap&&(T.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,T.transmissionMapTransform)),T.thickness.value=M.thickness,M.thicknessMap&&(T.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=M.attenuationDistance,T.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(T.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(T.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=M.specularIntensity,T.specularColor.value.copy(M.specularColor),M.specularColorMap&&(T.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,T.specularColorMapTransform)),M.specularIntensityMap&&(T.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,T.specularIntensityMapTransform))}function D(T,M){M.matcap&&(T.matcap.value=M.matcap)}function P(T,M){const X=e.get(M).light;T.referencePosition.value.setFromMatrixPosition(X.matrixWorld),T.nearDistance.value=X.shadow.camera.near,T.farDistance.value=X.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Z3(o,e,i,r){let l={},f={},p=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(X,H){const q=H.program;r.uniformBlockBinding(X,q)}function g(X,H){let q=l[X.id];q===void 0&&(D(X),q=b(X),l[X.id]=q,X.addEventListener("dispose",T));const J=H.program;r.updateUBOMapping(X,J);const G=e.render.frame;f[X.id]!==G&&(E(X),f[X.id]=G)}function b(X){const H=v();X.__bindingPointIndex=H;const q=o.createBuffer(),J=X.__size,G=X.usage;return o.bindBuffer(o.UNIFORM_BUFFER,q),o.bufferData(o.UNIFORM_BUFFER,J,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,H,q),q}function v(){for(let X=0;X<m;X++)if(p.indexOf(X)===-1)return p.push(X),X;return Cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(X){const H=l[X.id],q=X.uniforms,J=X.__cache;o.bindBuffer(o.UNIFORM_BUFFER,H);for(let G=0,W=q.length;G<W;G++){const fe=Array.isArray(q[G])?q[G]:[q[G]];for(let O=0,N=fe.length;O<N;O++){const j=fe[O];if(A(j,G,O,J)===!0){const te=j.__offset,oe=Array.isArray(j.value)?j.value:[j.value];let Se=0;for(let ye=0;ye<oe.length;ye++){const B=oe[ye],$=P(B);typeof B=="number"||typeof B=="boolean"?(j.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,te+Se,j.__data)):B.isMatrix3?(j.__data[0]=B.elements[0],j.__data[1]=B.elements[1],j.__data[2]=B.elements[2],j.__data[3]=0,j.__data[4]=B.elements[3],j.__data[5]=B.elements[4],j.__data[6]=B.elements[5],j.__data[7]=0,j.__data[8]=B.elements[6],j.__data[9]=B.elements[7],j.__data[10]=B.elements[8],j.__data[11]=0):(B.toArray(j.__data,Se),Se+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,te,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function A(X,H,q,J){const G=X.value,W=H+"_"+q;if(J[W]===void 0)return typeof G=="number"||typeof G=="boolean"?J[W]=G:J[W]=G.clone(),!0;{const fe=J[W];if(typeof G=="number"||typeof G=="boolean"){if(fe!==G)return J[W]=G,!0}else if(fe.equals(G)===!1)return fe.copy(G),!0}return!1}function D(X){const H=X.uniforms;let q=0;const J=16;for(let W=0,fe=H.length;W<fe;W++){const O=Array.isArray(H[W])?H[W]:[H[W]];for(let N=0,j=O.length;N<j;N++){const te=O[N],oe=Array.isArray(te.value)?te.value:[te.value];for(let Se=0,ye=oe.length;Se<ye;Se++){const B=oe[Se],$=P(B),ie=q%J,we=ie%$.boundary,De=ie+we;q+=we,De!==0&&J-De<$.storage&&(q+=J-De),te.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=q,q+=$.storage}}}const G=q%J;return G>0&&(q+=J-G),X.__size=q,X.__cache={},this}function P(X){const H={boundary:0,storage:0};return typeof X=="number"||typeof X=="boolean"?(H.boundary=4,H.storage=4):X.isVector2?(H.boundary=8,H.storage=8):X.isVector3||X.isColor?(H.boundary=16,H.storage=12):X.isVector4?(H.boundary=16,H.storage=16):X.isMatrix3?(H.boundary=48,H.storage=48):X.isMatrix4?(H.boundary=64,H.storage=64):X.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ct("WebGLRenderer: Unsupported uniform value type.",X),H}function T(X){const H=X.target;H.removeEventListener("dispose",T);const q=p.indexOf(H.__bindingPointIndex);p.splice(q,1),o.deleteBuffer(l[H.id]),delete l[H.id],delete f[H.id]}function M(){for(const X in l)o.deleteBuffer(l[X]);p=[],l={},f={}}return{bind:_,update:g,dispose:M}}const K3=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ja=null;function Q3(){return ja===null&&(ja=new QS(K3,32,32,tm,zo),ja.minFilter=qi,ja.magFilter=qi,ja.wrapS=Ka,ja.wrapT=Ka,ja.generateMipmaps=!1,ja.needsUpdate=!0),ja}class J3{constructor(e={}){const{canvas:i=bS(),context:r=null,depth:l=!0,stencil:f=!1,alpha:p=!1,antialias:m=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:E=!1}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=p;const D=new Set([im,nm,em]),P=new Set([va,Ss,ql,Yl,Jp,$p]),T=new Uint32Array(4),M=new Int32Array(4);let X=null,H=null;const q=[],J=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let W=!1;this._outputColorSpace=Xi;let fe=0,O=0,N=null,j=-1,te=null;const oe=new Dn,Se=new Dn;let ye=null;const B=new Kt(0);let $=0,ie=i.width,we=i.height,De=1,V=null,pe=null;const Ue=new Dn(0,0,ie,we),Fe=new Dn(0,0,ie,we);let et=!1;const he=new sm;let ve=!1,Xe=!1;const st=new Mn,ft=new me,Et=new Dn,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Me(){return N===null?De:1}let F=r;function Be(L,ee){return i.getContext(L,ee)}try{const L={alpha:!0,depth:l,stencil:f,antialias:m,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:b,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kp}`),i.addEventListener("webglcontextlost",Le,!1),i.addEventListener("webglcontextrestored",Re,!1),i.addEventListener("webglcontextcreationerror",it,!1),F===null){const ee="webgl2";if(F=Be(ee,L),F===null)throw Be(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw L("WebGLRenderer: "+L.message),L}let tt,xt,We,Bt,He,dt,I,R,se,Ee,Ae,ae,Ye,je,vt,Ve,Ne,Pe,lt,ct,Ze,Mt,Z,qe;function Ge(){tt=new s1(F),tt.init(),Mt=new G3(F,tt),xt=new QE(F,tt,e,Mt),We=new H3(F,tt),xt.reversedDepthBuffer&&E&&We.buffers.depth.setReversed(!0),Bt=new c1(F),He=new w3,dt=new V3(F,tt,We,He,xt,Mt,Bt),I=new $E(G),R=new r1(G),se=new db(F),Z=new ZE(F,se),Ee=new o1(F,se,Bt,Z),Ae=new f1(F,Ee,se,Bt),lt=new u1(F,xt,dt),Ve=new JE(He),ae=new A3(G,I,R,tt,xt,Z,Ve),Ye=new j3(G,He),je=new C3,vt=new P3(tt),Pe=new jE(G,I,R,We,Ae,A,_),Ne=new B3(G,Ae,xt),qe=new Z3(F,Bt,xt,We),ct=new KE(F,tt,Bt),Ze=new l1(F,tt,Bt),Bt.programs=ae.programs,G.capabilities=xt,G.extensions=tt,G.properties=He,G.renderLists=je,G.shadowMap=Ne,G.state=We,G.info=Bt}Ge();const ke=new q3(G,F);this.xr=ke,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const L=tt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=tt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(L){L!==void 0&&(De=L,this.setSize(ie,we,!1))},this.getSize=function(L){return L.set(ie,we)},this.setSize=function(L,ee,ge=!0){if(ke.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=L,we=ee,i.width=Math.floor(L*De),i.height=Math.floor(ee*De),ge===!0&&(i.style.width=L+"px",i.style.height=ee+"px"),this.setViewport(0,0,L,ee)},this.getDrawingBufferSize=function(L){return L.set(ie*De,we*De).floor()},this.setDrawingBufferSize=function(L,ee,ge){ie=L,we=ee,De=ge,i.width=Math.floor(L*ge),i.height=Math.floor(ee*ge),this.setViewport(0,0,L,ee)},this.getCurrentViewport=function(L){return L.copy(oe)},this.getViewport=function(L){return L.copy(Ue)},this.setViewport=function(L,ee,ge,le){L.isVector4?Ue.set(L.x,L.y,L.z,L.w):Ue.set(L,ee,ge,le),We.viewport(oe.copy(Ue).multiplyScalar(De).round())},this.getScissor=function(L){return L.copy(Fe)},this.setScissor=function(L,ee,ge,le){L.isVector4?Fe.set(L.x,L.y,L.z,L.w):Fe.set(L,ee,ge,le),We.scissor(Se.copy(Fe).multiplyScalar(De).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(L){We.setScissorTest(et=L)},this.setOpaqueSort=function(L){V=L},this.setTransparentSort=function(L){pe=L},this.getClearColor=function(L){return L.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(L=!0,ee=!0,ge=!0){let le=0;if(L){let re=!1;if(N!==null){const Ie=N.texture.format;re=D.has(Ie)}if(re){const Ie=N.texture.type,ze=P.has(Ie),Qe=Pe.getClearColor(),Je=Pe.getClearAlpha(),yt=Qe.r,bt=Qe.g,rt=Qe.b;ze?(T[0]=yt,T[1]=bt,T[2]=rt,T[3]=Je,F.clearBufferuiv(F.COLOR,0,T)):(M[0]=yt,M[1]=bt,M[2]=rt,M[3]=Je,F.clearBufferiv(F.COLOR,0,M))}else le|=F.COLOR_BUFFER_BIT}ee&&(le|=F.DEPTH_BUFFER_BIT),ge&&(le|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Le,!1),i.removeEventListener("webglcontextrestored",Re,!1),i.removeEventListener("webglcontextcreationerror",it,!1),Pe.dispose(),je.dispose(),vt.dispose(),He.dispose(),I.dispose(),R.dispose(),Ae.dispose(),Z.dispose(),qe.dispose(),ae.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Gr),ke.removeEventListener("sessionend",kr),ci.stop()};function Le(L){L.preventDefault(),wx("WebGLRenderer: Context Lost."),W=!0}function Re(){wx("WebGLRenderer: Context Restored."),W=!1;const L=Bt.autoReset,ee=Ne.enabled,ge=Ne.autoUpdate,le=Ne.needsUpdate,re=Ne.type;Ge(),Bt.autoReset=L,Ne.enabled=ee,Ne.autoUpdate=ge,Ne.needsUpdate=le,Ne.type=re}function it(L){Cn("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function wt(L){const ee=L.target;ee.removeEventListener("dispose",wt),at(ee)}function at(L){Jt(L),He.remove(L)}function Jt(L){const ee=He.get(L).programs;ee!==void 0&&(ee.forEach(function(ge){ae.releaseProgram(ge)}),L.isShaderMaterial&&ae.releaseShaderCache(L))}this.renderBufferDirect=function(L,ee,ge,le,re,Ie){ee===null&&(ee=rn);const ze=re.isMesh&&re.matrixWorld.determinant()<0,Qe=Vo(L,ee,ge,le,re);We.setMaterial(le,ze);let Je=ge.index,yt=1;if(le.wireframe===!0){if(Je=Ee.getWireframeAttribute(ge),Je===void 0)return;yt=2}const bt=ge.drawRange,rt=ge.attributes.position;let Dt=bt.start*yt,Yt=(bt.start+bt.count)*yt;Ie!==null&&(Dt=Math.max(Dt,Ie.start*yt),Yt=Math.min(Yt,(Ie.start+Ie.count)*yt)),Je!==null?(Dt=Math.max(Dt,0),Yt=Math.min(Yt,Je.count)):rt!=null&&(Dt=Math.max(Dt,0),Yt=Math.min(Yt,rt.count));const $t=Yt-Dt;if($t<0||$t===1/0)return;Z.setup(re,le,Qe,ge,Je);let kt,It=ct;if(Je!==null&&(kt=se.get(Je),It=Ze,It.setIndex(kt)),re.isMesh)le.wireframe===!0?(We.setLineWidth(le.wireframeLinewidth*Me()),It.setMode(F.LINES)):It.setMode(F.TRIANGLES);else if(re.isLine){let pt=le.linewidth;pt===void 0&&(pt=1),We.setLineWidth(pt*Me()),re.isLineSegments?It.setMode(F.LINES):re.isLineLoop?It.setMode(F.LINE_LOOP):It.setMode(F.LINE_STRIP)}else re.isPoints?It.setMode(F.POINTS):re.isSprite&&It.setMode(F.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)Kl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))It.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const pt=re._multiDrawStarts,sn=re._multiDrawCounts,Vt=re._multiDrawCount,cn=Je?se.get(Je).bytesPerElement:1,Oi=He.get(le).currentProgram.getUniforms();for(let un=0;un<Vt;un++)Oi.setValue(F,"_gl_DrawID",un),It.render(pt[un]/cn,sn[un])}else if(re.isInstancedMesh)It.renderInstances(Dt,$t,re.count);else if(ge.isInstancedBufferGeometry){const pt=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,sn=Math.min(ge.instanceCount,pt);It.renderInstances(Dt,$t,sn)}else It.render(Dt,$t)};function Yn(L,ee,ge){L.transparent===!0&&L.side===ga&&L.forceSinglePass===!1?(L.side=Mi,L.needsUpdate=!0,yn(L,ee,ge),L.side=Vr,L.needsUpdate=!0,yn(L,ee,ge),L.side=ga):yn(L,ee,ge)}this.compile=function(L,ee,ge=null){ge===null&&(ge=L),H=vt.get(ge),H.init(ee),J.push(H),ge.traverseVisible(function(re){re.isLight&&re.layers.test(ee.layers)&&(H.pushLight(re),re.castShadow&&H.pushShadow(re))}),L!==ge&&L.traverseVisible(function(re){re.isLight&&re.layers.test(ee.layers)&&(H.pushLight(re),re.castShadow&&H.pushShadow(re))}),H.setupLights();const le=new Set;return L.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let ze=0;ze<Ie.length;ze++){const Qe=Ie[ze];Yn(Qe,ge,re),le.add(Qe)}else Yn(Ie,ge,re),le.add(Ie)}),H=J.pop(),le},this.compileAsync=function(L,ee,ge=null){const le=this.compile(L,ee,ge);return new Promise(re=>{function Ie(){if(le.forEach(function(ze){He.get(ze).currentProgram.isReady()&&le.delete(ze)}),le.size===0){re(L);return}setTimeout(Ie,10)}tt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let li=null;function Ts(L){li&&li(L)}function Gr(){ci.stop()}function kr(){ci.start()}const ci=new ev;ci.setAnimationLoop(Ts),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(L){li=L,ke.setAnimationLoop(L),L===null?ci.stop():ci.start()},ke.addEventListener("sessionstart",Gr),ke.addEventListener("sessionend",kr),this.render=function(L,ee){if(ee!==void 0&&ee.isCamera!==!0){Cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(ee),ee=ke.getCamera()),L.isScene===!0&&L.onBeforeRender(G,L,ee,N),H=vt.get(L,J.length),H.init(ee),J.push(H),st.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),he.setFromProjectionMatrix(st,xa,ee.reversedDepth),Xe=this.localClippingEnabled,ve=Ve.init(this.clippingPlanes,Xe),X=je.get(L,q.length),X.init(),q.push(X),ke.enabled===!0&&ke.isPresenting===!0){const Ie=G.xr.getDepthSensingMesh();Ie!==null&&w(Ie,ee,-1/0,G.sortObjects)}w(L,ee,0,G.sortObjects),X.finish(),G.sortObjects===!0&&X.sort(V,pe),Lt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Lt&&Pe.addToRenderList(X,L),this.info.render.frame++,ve===!0&&Ve.beginShadows();const ge=H.state.shadowsArray;Ne.render(ge,L,ee),ve===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=X.opaque,re=X.transmissive;if(H.setupLights(),ee.isArrayCamera){const Ie=ee.cameras;if(re.length>0)for(let ze=0,Qe=Ie.length;ze<Qe;ze++){const Je=Ie[ze];Gt(le,re,L,Je)}Lt&&Pe.render(L);for(let ze=0,Qe=Ie.length;ze<Qe;ze++){const Je=Ie[ze];Sa(X,L,Je,Je.viewport)}}else re.length>0&&Gt(le,re,L,ee),Lt&&Pe.render(L),Sa(X,L,ee);N!==null&&O===0&&(dt.updateMultisampleRenderTarget(N),dt.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(G,L,ee),Z.resetDefaultState(),j=-1,te=null,J.pop(),J.length>0?(H=J[J.length-1],ve===!0&&Ve.setGlobalState(G.clippingPlanes,H.state.camera)):H=null,q.pop(),q.length>0?X=q[q.length-1]:X=null};function w(L,ee,ge,le){if(L.visible===!1)return;if(L.layers.test(ee.layers)){if(L.isGroup)ge=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ee);else if(L.isLight)H.pushLight(L),L.castShadow&&H.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||he.intersectsSprite(L)){le&&Et.setFromMatrixPosition(L.matrixWorld).applyMatrix4(st);const ze=Ae.update(L),Qe=L.material;Qe.visible&&X.push(L,ze,Qe,ge,Et.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||he.intersectsObject(L))){const ze=Ae.update(L),Qe=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Et.copy(L.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Et.copy(ze.boundingSphere.center)),Et.applyMatrix4(L.matrixWorld).applyMatrix4(st)),Array.isArray(Qe)){const Je=ze.groups;for(let yt=0,bt=Je.length;yt<bt;yt++){const rt=Je[yt],Dt=Qe[rt.materialIndex];Dt&&Dt.visible&&X.push(L,ze,Dt,ge,Et.z,rt)}}else Qe.visible&&X.push(L,ze,Qe,ge,Et.z,null)}}const Ie=L.children;for(let ze=0,Qe=Ie.length;ze<Qe;ze++)w(Ie[ze],ee,ge,le)}function Sa(L,ee,ge,le){const{opaque:re,transmissive:Ie,transparent:ze}=L;H.setupLightsView(ge),ve===!0&&Ve.setGlobalState(G.clippingPlanes,ge),le&&We.viewport(oe.copy(le)),re.length>0&&ui(re,ee,ge),Ie.length>0&&ui(Ie,ee,ge),ze.length>0&&ui(ze,ee,ge),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Gt(L,ee,ge,le){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;H.state.transmissionRenderTarget[le.id]===void 0&&(H.state.transmissionRenderTarget[le.id]=new Ms(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?zo:va,minFilter:ys,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nn.workingColorSpace}));const Ie=H.state.transmissionRenderTarget[le.id],ze=le.viewport||oe;Ie.setSize(ze.z*G.transmissionResolutionScale,ze.w*G.transmissionResolutionScale);const Qe=G.getRenderTarget(),Je=G.getActiveCubeFace(),yt=G.getActiveMipmapLevel();G.setRenderTarget(Ie),G.getClearColor(B),$=G.getClearAlpha(),$<1&&G.setClearColor(16777215,.5),G.clear(),Lt&&Pe.render(ge);const bt=G.toneMapping;G.toneMapping=Hr;const rt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),H.setupLightsView(le),ve===!0&&Ve.setGlobalState(G.clippingPlanes,le),ui(L,ge,le),dt.updateMultisampleRenderTarget(Ie),dt.updateRenderTargetMipmap(Ie),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Yt=0,$t=ee.length;Yt<$t;Yt++){const kt=ee[Yt],{object:It,geometry:pt,material:sn,group:Vt}=kt;if(sn.side===ga&&It.layers.test(le.layers)){const cn=sn.side;sn.side=Mi,sn.needsUpdate=!0,En(It,ge,le,pt,sn,Vt),sn.side=cn,sn.needsUpdate=!0,Dt=!0}}Dt===!0&&(dt.updateMultisampleRenderTarget(Ie),dt.updateRenderTargetMipmap(Ie))}G.setRenderTarget(Qe,Je,yt),G.setClearColor(B,$),rt!==void 0&&(le.viewport=rt),G.toneMapping=bt}function ui(L,ee,ge){const le=ee.isScene===!0?ee.overrideMaterial:null;for(let re=0,Ie=L.length;re<Ie;re++){const ze=L[re],{object:Qe,geometry:Je,group:yt}=ze;let bt=ze.material;bt.allowOverride===!0&&le!==null&&(bt=le),Qe.layers.test(ge.layers)&&En(Qe,ee,ge,Je,bt,yt)}}function En(L,ee,ge,le,re,Ie){L.onBeforeRender(G,ee,ge,le,re,Ie),L.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(G,ee,ge,le,L,Ie),re.transparent===!0&&re.side===ga&&re.forceSinglePass===!1?(re.side=Mi,re.needsUpdate=!0,G.renderBufferDirect(ge,ee,le,re,L,Ie),re.side=Vr,re.needsUpdate=!0,G.renderBufferDirect(ge,ee,le,re,L,Ie),re.side=ga):G.renderBufferDirect(ge,ee,le,re,L,Ie),L.onAfterRender(G,ee,ge,le,re,Ie)}function yn(L,ee,ge){ee.isScene!==!0&&(ee=rn);const le=He.get(L),re=H.state.lights,Ie=H.state.shadowsArray,ze=re.state.version,Qe=ae.getParameters(L,re.state,Ie,ee,ge),Je=ae.getProgramCacheKey(Qe);let yt=le.programs;le.environment=L.isMeshStandardMaterial?ee.environment:null,le.fog=ee.fog,le.envMap=(L.isMeshStandardMaterial?R:I).get(L.envMap||le.environment),le.envMapRotation=le.environment!==null&&L.envMap===null?ee.environmentRotation:L.envMapRotation,yt===void 0&&(L.addEventListener("dispose",wt),yt=new Map,le.programs=yt);let bt=yt.get(Je);if(bt!==void 0){if(le.currentProgram===bt&&le.lightsStateVersion===ze)return tr(L,Qe),bt}else Qe.uniforms=ae.getUniforms(L),L.onBeforeCompile(Qe,G),bt=ae.acquireProgram(Qe,Je),yt.set(Je,bt),le.uniforms=Qe.uniforms;const rt=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=Ve.uniform),tr(L,Qe),le.needsLights=As(L),le.lightsStateVersion=ze,le.needsLights&&(rt.ambientLightColor.value=re.state.ambient,rt.lightProbe.value=re.state.probe,rt.directionalLights.value=re.state.directional,rt.directionalLightShadows.value=re.state.directionalShadow,rt.spotLights.value=re.state.spot,rt.spotLightShadows.value=re.state.spotShadow,rt.rectAreaLights.value=re.state.rectArea,rt.ltc_1.value=re.state.rectAreaLTC1,rt.ltc_2.value=re.state.rectAreaLTC2,rt.pointLights.value=re.state.point,rt.pointLightShadows.value=re.state.pointShadow,rt.hemisphereLights.value=re.state.hemi,rt.directionalShadowMap.value=re.state.directionalShadowMap,rt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,rt.spotShadowMap.value=re.state.spotShadowMap,rt.spotLightMatrix.value=re.state.spotLightMatrix,rt.spotLightMap.value=re.state.spotLightMap,rt.pointShadowMap.value=re.state.pointShadowMap,rt.pointShadowMatrix.value=re.state.pointShadowMatrix),le.currentProgram=bt,le.uniformsList=null,bt}function ni(L){if(L.uniformsList===null){const ee=L.currentProgram.getUniforms();L.uniformsList=Xu.seqWithValue(ee.seq,L.uniforms)}return L.uniformsList}function tr(L,ee){const ge=He.get(L);ge.outputColorSpace=ee.outputColorSpace,ge.batching=ee.batching,ge.batchingColor=ee.batchingColor,ge.instancing=ee.instancing,ge.instancingColor=ee.instancingColor,ge.instancingMorph=ee.instancingMorph,ge.skinning=ee.skinning,ge.morphTargets=ee.morphTargets,ge.morphNormals=ee.morphNormals,ge.morphColors=ee.morphColors,ge.morphTargetsCount=ee.morphTargetsCount,ge.numClippingPlanes=ee.numClippingPlanes,ge.numIntersection=ee.numClipIntersection,ge.vertexAlphas=ee.vertexAlphas,ge.vertexTangents=ee.vertexTangents,ge.toneMapping=ee.toneMapping}function Vo(L,ee,ge,le,re){ee.isScene!==!0&&(ee=rn),dt.resetTextureUnits();const Ie=ee.fog,ze=le.isMeshStandardMaterial?ee.environment:null,Qe=N===null?G.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Po,Je=(le.isMeshStandardMaterial?R:I).get(le.envMap||ze),yt=le.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,bt=!!ge.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),rt=!!ge.morphAttributes.position,Dt=!!ge.morphAttributes.normal,Yt=!!ge.morphAttributes.color;let $t=Hr;le.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&($t=G.toneMapping);const kt=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,It=kt!==void 0?kt.length:0,pt=He.get(le),sn=H.state.lights;if(ve===!0&&(Xe===!0||L!==te)){const Pn=L===te&&le.id===j;Ve.setState(le,L,Pn)}let Vt=!1;le.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==sn.state.version||pt.outputColorSpace!==Qe||re.isBatchedMesh&&pt.batching===!1||!re.isBatchedMesh&&pt.batching===!0||re.isBatchedMesh&&pt.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&pt.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&pt.instancing===!1||!re.isInstancedMesh&&pt.instancing===!0||re.isSkinnedMesh&&pt.skinning===!1||!re.isSkinnedMesh&&pt.skinning===!0||re.isInstancedMesh&&pt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&pt.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&pt.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&pt.instancingMorph===!1&&re.morphTexture!==null||pt.envMap!==Je||le.fog===!0&&pt.fog!==Ie||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Ve.numPlanes||pt.numIntersection!==Ve.numIntersection)||pt.vertexAlphas!==yt||pt.vertexTangents!==bt||pt.morphTargets!==rt||pt.morphNormals!==Dt||pt.morphColors!==Yt||pt.toneMapping!==$t||pt.morphTargetsCount!==It)&&(Vt=!0):(Vt=!0,pt.__version=le.version);let cn=pt.currentProgram;Vt===!0&&(cn=yn(le,ee,re));let Oi=!1,un=!1,ji=!1;const Rt=cn.getUniforms(),Tn=pt.uniforms;if(We.useProgram(cn.program)&&(Oi=!0,un=!0,ji=!0),le.id!==j&&(j=le.id,un=!0),Oi||te!==L){We.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Rt.setValue(F,"projectionMatrix",L.projectionMatrix),Rt.setValue(F,"viewMatrix",L.matrixWorldInverse);const Gn=Rt.map.cameraPosition;Gn!==void 0&&Gn.setValue(F,ft.setFromMatrixPosition(L.matrixWorld)),xt.logarithmicDepthBuffer&&Rt.setValue(F,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Rt.setValue(F,"isOrthographic",L.isOrthographicCamera===!0),te!==L&&(te=L,un=!0,ji=!0)}if(re.isSkinnedMesh){Rt.setOptional(F,re,"bindMatrix"),Rt.setOptional(F,re,"bindMatrixInverse");const Pn=re.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Rt.setValue(F,"boneTexture",Pn.boneTexture,dt))}re.isBatchedMesh&&(Rt.setOptional(F,re,"batchingTexture"),Rt.setValue(F,"batchingTexture",re._matricesTexture,dt),Rt.setOptional(F,re,"batchingIdTexture"),Rt.setValue(F,"batchingIdTexture",re._indirectTexture,dt),Rt.setOptional(F,re,"batchingColorTexture"),re._colorsTexture!==null&&Rt.setValue(F,"batchingColorTexture",re._colorsTexture,dt));const Un=ge.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&lt.update(re,ge,cn),(un||pt.receiveShadow!==re.receiveShadow)&&(pt.receiveShadow=re.receiveShadow,Rt.setValue(F,"receiveShadow",re.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Tn.envMap.value=Je,Tn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&ee.environment!==null&&(Tn.envMapIntensity.value=ee.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=Q3()),un&&(Rt.setValue(F,"toneMappingExposure",G.toneMappingExposure),pt.needsLights&&Go(Tn,ji),Ie&&le.fog===!0&&Ye.refreshFogUniforms(Tn,Ie),Ye.refreshMaterialUniforms(Tn,le,De,we,H.state.transmissionRenderTarget[L.id]),Xu.upload(F,ni(pt),Tn,dt)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Xu.upload(F,ni(pt),Tn,dt),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Rt.setValue(F,"center",re.center),Rt.setValue(F,"modelViewMatrix",re.modelViewMatrix),Rt.setValue(F,"normalMatrix",re.normalMatrix),Rt.setValue(F,"modelMatrix",re.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Pn=le.uniformsGroups;for(let Gn=0,Pi=Pn.length;Gn<Pi;Gn++){const mi=Pn[Gn];qe.update(mi,cn),qe.bind(mi,cn)}}return cn}function Go(L,ee){L.ambientLightColor.needsUpdate=ee,L.lightProbe.needsUpdate=ee,L.directionalLights.needsUpdate=ee,L.directionalLightShadows.needsUpdate=ee,L.pointLights.needsUpdate=ee,L.pointLightShadows.needsUpdate=ee,L.spotLights.needsUpdate=ee,L.spotLightShadows.needsUpdate=ee,L.rectAreaLights.needsUpdate=ee,L.hemisphereLights.needsUpdate=ee}function As(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,ee,ge){const le=He.get(L);le.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),He.get(L.texture).__webglTexture=ee,He.get(L.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ge,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,ee){const ge=He.get(L);ge.__webglFramebuffer=ee,ge.__useDefaultFramebuffer=ee===void 0};const ba=F.createFramebuffer();this.setRenderTarget=function(L,ee=0,ge=0){N=L,fe=ee,O=ge;let le=!0,re=null,Ie=!1,ze=!1;if(L){const Je=He.get(L);if(Je.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(F.FRAMEBUFFER,null),le=!1;else if(Je.__webglFramebuffer===void 0)dt.setupRenderTarget(L);else if(Je.__hasExternalTextures)dt.rebindTextures(L,He.get(L.texture).__webglTexture,He.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const rt=L.depthTexture;if(Je.__boundDepthTexture!==rt){if(rt!==null&&He.has(rt)&&(L.width!==rt.image.width||L.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(L)}}const yt=L.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ze=!0);const bt=He.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(bt[ee])?re=bt[ee][ge]:re=bt[ee],Ie=!0):L.samples>0&&dt.useMultisampledRTT(L)===!1?re=He.get(L).__webglMultisampledFramebuffer:Array.isArray(bt)?re=bt[ge]:re=bt,oe.copy(L.viewport),Se.copy(L.scissor),ye=L.scissorTest}else oe.copy(Ue).multiplyScalar(De).floor(),Se.copy(Fe).multiplyScalar(De).floor(),ye=et;if(ge!==0&&(re=ba),We.bindFramebuffer(F.FRAMEBUFFER,re)&&le&&We.drawBuffers(L,re),We.viewport(oe),We.scissor(Se),We.setScissorTest(ye),Ie){const Je=He.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Je.__webglTexture,ge)}else if(ze){const Je=ee;for(let yt=0;yt<L.textures.length;yt++){const bt=He.get(L.textures[yt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,bt.__webglTexture,ge,Je)}}else if(L!==null&&ge!==0){const Je=He.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Je.__webglTexture,ge)}j=-1},this.readRenderTargetPixels=function(L,ee,ge,le,re,Ie,ze,Qe=0){if(!(L&&L.isWebGLRenderTarget)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=He.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(Je=Je[ze]),Je){We.bindFramebuffer(F.FRAMEBUFFER,Je);try{const yt=L.textures[Qe],bt=yt.format,rt=yt.type;if(!xt.textureFormatReadable(bt)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(rt)){Cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=L.width-le&&ge>=0&&ge<=L.height-re&&(L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Qe),F.readPixels(ee,ge,le,re,Mt.convert(bt),Mt.convert(rt),Ie))}finally{const yt=N!==null?He.get(N).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(L,ee,ge,le,re,Ie,ze,Qe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=He.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(Je=Je[ze]),Je)if(ee>=0&&ee<=L.width-le&&ge>=0&&ge<=L.height-re){We.bindFramebuffer(F.FRAMEBUFFER,Je);const yt=L.textures[Qe],bt=yt.format,rt=yt.type;if(!xt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Dt),F.bufferData(F.PIXEL_PACK_BUFFER,Ie.byteLength,F.STREAM_READ),L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Qe),F.readPixels(ee,ge,le,re,Mt.convert(bt),Mt.convert(rt),0);const Yt=N!==null?He.get(N).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,Yt);const $t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await MS(F,$t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ie),F.deleteBuffer(Dt),F.deleteSync($t),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,ee=null,ge=0){const le=Math.pow(2,-ge),re=Math.floor(L.image.width*le),Ie=Math.floor(L.image.height*le),ze=ee!==null?ee.x:0,Qe=ee!==null?ee.y:0;dt.setTexture2D(L,0),F.copyTexSubImage2D(F.TEXTURE_2D,ge,0,0,ze,Qe,re,Ie),We.unbindTexture()};const Xr=F.createFramebuffer(),la=F.createFramebuffer();this.copyTextureToTexture=function(L,ee,ge=null,le=null,re=0,Ie=null){Ie===null&&(re!==0?(Kl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=re,re=0):Ie=0);let ze,Qe,Je,yt,bt,rt,Dt,Yt,$t;const kt=L.isCompressedTexture?L.mipmaps[Ie]:L.image;if(ge!==null)ze=ge.max.x-ge.min.x,Qe=ge.max.y-ge.min.y,Je=ge.isBox3?ge.max.z-ge.min.z:1,yt=ge.min.x,bt=ge.min.y,rt=ge.isBox3?ge.min.z:0;else{const Un=Math.pow(2,-re);ze=Math.floor(kt.width*Un),Qe=Math.floor(kt.height*Un),L.isDataArrayTexture?Je=kt.depth:L.isData3DTexture?Je=Math.floor(kt.depth*Un):Je=1,yt=0,bt=0,rt=0}le!==null?(Dt=le.x,Yt=le.y,$t=le.z):(Dt=0,Yt=0,$t=0);const It=Mt.convert(ee.format),pt=Mt.convert(ee.type);let sn;ee.isData3DTexture?(dt.setTexture3D(ee,0),sn=F.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(dt.setTexture2DArray(ee,0),sn=F.TEXTURE_2D_ARRAY):(dt.setTexture2D(ee,0),sn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ee.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ee.unpackAlignment);const Vt=F.getParameter(F.UNPACK_ROW_LENGTH),cn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Oi=F.getParameter(F.UNPACK_SKIP_PIXELS),un=F.getParameter(F.UNPACK_SKIP_ROWS),ji=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,kt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,kt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,bt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rt);const Rt=L.isDataArrayTexture||L.isData3DTexture,Tn=ee.isDataArrayTexture||ee.isData3DTexture;if(L.isDepthTexture){const Un=He.get(L),Pn=He.get(ee),Gn=He.get(Un.__renderTarget),Pi=He.get(Pn.__renderTarget);We.bindFramebuffer(F.READ_FRAMEBUFFER,Gn.__webglFramebuffer),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let mi=0;mi<Je;mi++)Rt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(L).__webglTexture,re,rt+mi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(ee).__webglTexture,Ie,$t+mi)),F.blitFramebuffer(yt,bt,ze,Qe,Dt,Yt,ze,Qe,F.DEPTH_BUFFER_BIT,F.NEAREST);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(re!==0||L.isRenderTargetTexture||He.has(L)){const Un=He.get(L),Pn=He.get(ee);We.bindFramebuffer(F.READ_FRAMEBUFFER,Xr),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,la);for(let Gn=0;Gn<Je;Gn++)Rt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,re,rt+Gn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,re),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pn.__webglTexture,Ie,$t+Gn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pn.__webglTexture,Ie),re!==0?F.blitFramebuffer(yt,bt,ze,Qe,Dt,Yt,ze,Qe,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(sn,Ie,Dt,Yt,$t+Gn,yt,bt,ze,Qe):F.copyTexSubImage2D(sn,Ie,Dt,Yt,yt,bt,ze,Qe);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?L.isDataTexture||L.isData3DTexture?F.texSubImage3D(sn,Ie,Dt,Yt,$t,ze,Qe,Je,It,pt,kt.data):ee.isCompressedArrayTexture?F.compressedTexSubImage3D(sn,Ie,Dt,Yt,$t,ze,Qe,Je,It,kt.data):F.texSubImage3D(sn,Ie,Dt,Yt,$t,ze,Qe,Je,It,pt,kt):L.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ie,Dt,Yt,ze,Qe,It,pt,kt.data):L.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ie,Dt,Yt,kt.width,kt.height,It,kt.data):F.texSubImage2D(F.TEXTURE_2D,Ie,Dt,Yt,ze,Qe,It,pt,kt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,cn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Oi),F.pixelStorei(F.UNPACK_SKIP_ROWS,un),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ji),Ie===0&&ee.generateMipmaps&&F.generateMipmap(sn),We.unbindTexture()},this.initRenderTarget=function(L){He.get(L).__webglFramebuffer===void 0&&dt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?dt.setTextureCube(L,0):L.isData3DTexture?dt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?dt.setTexture2DArray(L,0):dt.setTexture2D(L,0),We.unbindTexture()},this.resetState=function(){fe=0,O=0,N=null,We.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=nn._getDrawingBufferColorSpace(e),i.unpackColorSpace=nn._getUnpackColorSpace()}}const E_={type:"change"},om={type:"start"},rv={type:"end"},Bu=new Ju,T_=new zr,$3=Math.cos(70*TS.DEG2RAD),Xn=new me,bi=2*Math.PI,mn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tp=1e-6;class eT extends fb{constructor(e,i=null){super(e,i),this.state=mn.NONE,this.target=new me,this.cursor=new me,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Co.ROTATE,MIDDLE:Co.DOLLY,RIGHT:Co.PAN},this.touches={ONE:Ro.ROTATE,TWO:Ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new me,this._lastQuaternion=new bs,this._lastTargetPosition=new me,this._quat=new bs().setFromUnitVectors(e.up,new me(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $x,this._sphericalDelta=new $x,this._scale=1,this._panOffset=new me,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new me,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nT.bind(this),this._onPointerDown=tT.bind(this),this._onPointerUp=iT.bind(this),this._onContextMenu=uT.bind(this),this._onMouseWheel=sT.bind(this),this._onKeyDown=oT.bind(this),this._onTouchStart=lT.bind(this),this._onTouchMove=cT.bind(this),this._onMouseDown=aT.bind(this),this._onMouseMove=rT.bind(this),this._interceptControlDown=fT.bind(this),this._interceptControlUp=hT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(E_),this.update(),this.state=mn.NONE}update(e=null){const i=this.object.position;Xn.copy(i).sub(this.target),Xn.applyQuaternion(this._quat),this._spherical.setFromVector3(Xn),this.autoRotate&&this.state===mn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=bi:r>Math.PI&&(r-=bi),l<-Math.PI?l+=bi:l>Math.PI&&(l-=bi),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const p=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=p!=this._spherical.radius}if(Xn.setFromSpherical(this._spherical),Xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let p=null;if(this.object.isPerspectiveCamera){const m=Xn.length();p=this._clampDistance(m*this._scale);const _=m-p;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),f=!!_}else if(this.object.isOrthographicCamera){const m=new me(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=_!==this.object.zoom;const g=new me(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(m),this.object.updateMatrixWorld(),p=Xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;p!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(p).add(this.object.position):(Bu.origin.copy(this.object.position),Bu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bu.direction))<$3?this.object.lookAt(this.target):(T_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bu.intersectPlane(T_,this.target))))}else if(this.object.isOrthographicCamera){const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),p!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>tp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tp||this._lastTargetPosition.distanceToSquared(this.target)>tp?(this.dispatchEvent(E_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bi/60*this.autoRotateSpeed*e:bi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Xn.setFromMatrixColumn(i,0),Xn.multiplyScalar(-e),this._panOffset.add(Xn)}_panUp(e,i){this.screenSpacePanning===!0?Xn.setFromMatrixColumn(i,1):(Xn.setFromMatrixColumn(i,0),Xn.crossVectors(this.object.up,Xn)),Xn.multiplyScalar(e),this._panOffset.add(Xn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Xn.copy(l).sub(this.target);let f=Xn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,p=r.width,m=r.height;this._mouse.x=l/p*2-1,this._mouse.y=-(f/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/i.clientHeight),this._rotateUp(bi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/i.clientHeight),this._rotateUp(bi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const p=(e.pageX+i.x)*.5,m=(e.pageY+i.y)*.5;this._updateZoomParameters(p,m)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Nt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function tT(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function nT(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function iT(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rv),this.state=mn.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function aT(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=mn.DOLLY;break;case Co.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=mn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=mn.ROTATE}break;case Co.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=mn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=mn.PAN}break;default:this.state=mn.NONE}this.state!==mn.NONE&&this.dispatchEvent(om)}function rT(o){switch(this.state){case mn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case mn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case mn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function sT(o){this.enabled===!1||this.enableZoom===!1||this.state!==mn.NONE||(o.preventDefault(),this.dispatchEvent(om),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(rv))}function oT(o){this.enabled!==!1&&this._handleKeyDown(o)}function lT(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=mn.TOUCH_ROTATE;break;case Ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=mn.TOUCH_PAN;break;default:this.state=mn.NONE}break;case 2:switch(this.touches.TWO){case Ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=mn.TOUCH_DOLLY_PAN;break;case Ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=mn.TOUCH_DOLLY_ROTATE;break;default:this.state=mn.NONE}break;default:this.state=mn.NONE}this.state!==mn.NONE&&this.dispatchEvent(om)}function cT(o){switch(this._trackPointer(o),this.state){case mn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case mn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case mn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case mn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=mn.NONE}}function uT(o){this.enabled!==!1&&o.preventDefault()}function fT(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hT(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var np={exports:{}};const dT={},pT=Object.freeze(Object.defineProperty({__proto__:null,default:dT},Symbol.toStringTag,{value:"Module"})),ip=Ey(pT);var A_;function mT(){return A_||(A_=1,(function(o,e){var i=(()=>{var r=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(r=r||__filename),(function(l={}){var f,p=l,m,_,g=new Promise((c,d)=>{m=c,_=d}),b=typeof window=="object",v=typeof importScripts=="function",E=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",A=Object.assign({},p),D="./this.program",P=(c,d)=>{throw d},T="";function M(c){return p.locateFile?p.locateFile(c,T):T+c}var X,H;if(E){var q=ip,J=ip;T=__dirname+"/",H=c=>{c=We(c)?new URL(c):J.normalize(c);var d=q.readFileSync(c);return d},X=(c,d=!0)=>(c=We(c)?new URL(c):J.normalize(c),new Promise((x,S)=>{q.readFile(c,d?void 0:"utf8",(C,z)=>{C?S(C):x(d?z.buffer:z)})})),!p.thisProgram&&process.argv.length>1&&(D=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),P=(c,d)=>{throw process.exitCode=c,d}}else(b||v)&&(v?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),r&&(T=r),T.startsWith("blob:")?T="":T=T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),v&&(H=c=>{var d=new XMLHttpRequest;return d.open("GET",c,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),X=c=>We(c)?new Promise((d,x)=>{var S=new XMLHttpRequest;S.open("GET",c,!0),S.responseType="arraybuffer",S.onload=()=>{if(S.status==200||S.status==0&&S.response){d(S.response);return}x(S.status)},S.onerror=x,S.send(null)}):fetch(c,{credentials:"same-origin"}).then(d=>d.ok?d.arrayBuffer():Promise.reject(new Error(d.status+" : "+d.url))));var G=p.print||console.log.bind(console),W=p.printErr||console.error.bind(console);Object.assign(p,A),A=null,p.arguments&&p.arguments,p.thisProgram&&(D=p.thisProgram);var fe=p.wasmBinary,O,N=!1;function j(c,d){c||Be(d)}var te,oe,Se,ye,B,$,ie,we;function De(){var c=O.buffer;p.HEAP8=te=new Int8Array(c),p.HEAP16=Se=new Int16Array(c),p.HEAPU8=oe=new Uint8Array(c),p.HEAPU16=ye=new Uint16Array(c),p.HEAP32=B=new Int32Array(c),p.HEAPU32=$=new Uint32Array(c),p.HEAPF32=ie=new Float32Array(c),p.HEAPF64=we=new Float64Array(c)}var V=[],pe=[],Ue=[],Fe=!1;function et(){var c=p.preRun;c&&(typeof c=="function"&&(c=[c]),c.forEach(Xe)),vt(V)}function he(){Fe=!0,!p.noFSInit&&!w.initialized&&w.init(),w.ignorePermissions=!1,vt(pe)}function ve(){var c=p.postRun;c&&(typeof c=="function"&&(c=[c]),c.forEach(ft)),vt(Ue)}function Xe(c){V.unshift(c)}function st(c){pe.unshift(c)}function ft(c){Ue.unshift(c)}var Et=0,rn=null;function Lt(c){return c}function Me(c){Et++,p.monitorRunDependencies?.(Et)}function F(c){if(Et--,p.monitorRunDependencies?.(Et),Et==0&&rn){var d=rn;rn=null,d()}}function Be(c){p.onAbort?.(c),c="Aborted("+c+")",W(c),N=!0,c+=". Build with -sASSERTIONS for more info.",Fe&&sr();var d=new WebAssembly.RuntimeError(c);throw _(d),d}var tt="data:application/octet-stream;base64,",xt=c=>c.startsWith(tt),We=c=>c.startsWith("file://");function Bt(){var c="occt-import-js.wasm";return xt(c)?c:M(c)}var He;function dt(c){if(c==He&&fe)return new Uint8Array(fe);if(H)return H(c);throw"both async and sync fetching of the wasm failed"}function I(c){return fe?Promise.resolve().then(()=>dt(c)):X(c).then(d=>new Uint8Array(d),()=>dt(c))}function R(c,d,x){return I(c).then(S=>WebAssembly.instantiate(S,d)).then(x,S=>{W(`failed to asynchronously prepare wasm: ${S}`),Be(S)})}function se(c,d,x,S){return!c&&typeof WebAssembly.instantiateStreaming=="function"&&!xt(d)&&!We(d)&&!E&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(C=>{var z=WebAssembly.instantiateStreaming(C,x);return z.then(S,function(k){return W(`wasm streaming compile failed: ${k}`),W("falling back to ArrayBuffer instantiation"),R(d,x,S)})}):R(d,x,S)}function Ee(){return{a:xc}}function Ae(){var c=Ee();function d(S,C){return Fn=S.exports,O=Fn._,De(),Yo=Fn.ba,st(Fn.$),F(),Fn}Me();function x(S){d(S.instance)}if(p.instantiateWasm)try{return p.instantiateWasm(c,d)}catch(S){W(`Module.instantiateWasm callback failed with error: ${S}`),_(S)}return He??=Bt(),se(fe,He,c,x).catch(_),{}}var ae,Ye;function je(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var vt=c=>{c.forEach(d=>d(p))};p.noExitRuntime;var Ve={isAbs:c=>c.charAt(0)==="/",splitPath:c=>{var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return d.exec(c).slice(1)},normalizeArray:(c,d)=>{for(var x=0,S=c.length-1;S>=0;S--){var C=c[S];C==="."?c.splice(S,1):C===".."?(c.splice(S,1),x++):x&&(c.splice(S,1),x--)}if(d)for(;x;x--)c.unshift("..");return c},normalize:c=>{var d=Ve.isAbs(c),x=c.substr(-1)==="/";return c=Ve.normalizeArray(c.split("/").filter(S=>!!S),!d).join("/"),!c&&!d&&(c="."),c&&x&&(c+="/"),(d?"/":"")+c},dirname:c=>{var d=Ve.splitPath(c),x=d[0],S=d[1];return!x&&!S?".":(S&&(S=S.substr(0,S.length-1)),x+S)},basename:c=>{if(c==="/")return"/";c=Ve.normalize(c),c=c.replace(/\/$/,"");var d=c.lastIndexOf("/");return d===-1?c:c.substr(d+1)},join:(...c)=>Ve.normalize(c.join("/")),join2:(c,d)=>Ve.normalize(c+"/"+d)},Ne=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return S=>crypto.getRandomValues(S);if(E)try{var c=ip,d=c.randomFillSync;if(d)return S=>c.randomFillSync(S);var x=c.randomBytes;return S=>(S.set(x(S.byteLength)),S)}catch{}Be("initRandomDevice")},Pe=c=>(Pe=Ne())(c),lt={resolve:(...c)=>{for(var d="",x=!1,S=c.length-1;S>=-1&&!x;S--){var C=S>=0?c[S]:w.cwd();if(typeof C!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!C)return"";d=C+"/"+d,x=Ve.isAbs(C)}return d=Ve.normalizeArray(d.split("/").filter(z=>!!z),!x).join("/"),(x?"/":"")+d||"."},relative:(c,d)=>{c=lt.resolve(c).substr(1),d=lt.resolve(d).substr(1);function x(Oe){for(var Ke=0;Ke<Oe.length&&Oe[Ke]==="";Ke++);for(var ot=Oe.length-1;ot>=0&&Oe[ot]==="";ot--);return Ke>ot?[]:Oe.slice(Ke,ot-Ke+1)}for(var S=x(c.split("/")),C=x(d.split("/")),z=Math.min(S.length,C.length),k=z,K=0;K<z;K++)if(S[K]!==C[K]){k=K;break}for(var xe=[],K=k;K<S.length;K++)xe.push("..");return xe=xe.concat(C.slice(k)),xe.join("/")}},ct=typeof TextDecoder<"u"?new TextDecoder:void 0,Ze=(c,d=0,x=NaN)=>{for(var S=d+x,C=d;c[C]&&!(C>=S);)++C;if(C-d>16&&c.buffer&&ct)return ct.decode(c.subarray(d,C));for(var z="";d<C;){var k=c[d++];if(!(k&128)){z+=String.fromCharCode(k);continue}var K=c[d++]&63;if((k&224)==192){z+=String.fromCharCode((k&31)<<6|K);continue}var xe=c[d++]&63;if((k&240)==224?k=(k&15)<<12|K<<6|xe:k=(k&7)<<18|K<<12|xe<<6|c[d++]&63,k<65536)z+=String.fromCharCode(k);else{var Oe=k-65536;z+=String.fromCharCode(55296|Oe>>10,56320|Oe&1023)}}return z},Mt=[],Z=c=>{for(var d=0,x=0;x<c.length;++x){var S=c.charCodeAt(x);S<=127?d++:S<=2047?d+=2:S>=55296&&S<=57343?(d+=4,++x):d+=3}return d},qe=(c,d,x,S)=>{if(!(S>0))return 0;for(var C=x,z=x+S-1,k=0;k<c.length;++k){var K=c.charCodeAt(k);if(K>=55296&&K<=57343){var xe=c.charCodeAt(++k);K=65536+((K&1023)<<10)|xe&1023}if(K<=127){if(x>=z)break;d[x++]=K}else if(K<=2047){if(x+1>=z)break;d[x++]=192|K>>6,d[x++]=128|K&63}else if(K<=65535){if(x+2>=z)break;d[x++]=224|K>>12,d[x++]=128|K>>6&63,d[x++]=128|K&63}else{if(x+3>=z)break;d[x++]=240|K>>18,d[x++]=128|K>>12&63,d[x++]=128|K>>6&63,d[x++]=128|K&63}}return d[x]=0,x-C};function Ge(c,d,x){var S=Z(c)+1,C=new Array(S),z=qe(c,C,0,C.length);return C.length=z,C}var ke=()=>{if(!Mt.length){var c=null;if(E){var d=256,x=Buffer.alloc(d),S=0,C=process.stdin.fd;try{S=q.readSync(C,x,0,d)}catch(z){if(z.toString().includes("EOF"))S=0;else throw z}S>0&&(c=x.slice(0,S).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(c=window.prompt("Input: "),c!==null&&(c+=`
`));if(!c)return null;Mt=Ge(c)}return Mt.shift()},Le={ttys:[],init(){},shutdown(){},register(c,d){Le.ttys[c]={input:[],output:[],ops:d},w.registerDevice(c,Le.stream_ops)},stream_ops:{open(c){var d=Le.ttys[c.node.rdev];if(!d)throw new w.ErrnoError(43);c.tty=d,c.seekable=!1},close(c){c.tty.ops.fsync(c.tty)},fsync(c){c.tty.ops.fsync(c.tty)},read(c,d,x,S,C){if(!c.tty||!c.tty.ops.get_char)throw new w.ErrnoError(60);for(var z=0,k=0;k<S;k++){var K;try{K=c.tty.ops.get_char(c.tty)}catch{throw new w.ErrnoError(29)}if(K===void 0&&z===0)throw new w.ErrnoError(6);if(K==null)break;z++,d[x+k]=K}return z&&(c.node.timestamp=Date.now()),z},write(c,d,x,S,C){if(!c.tty||!c.tty.ops.put_char)throw new w.ErrnoError(60);try{for(var z=0;z<S;z++)c.tty.ops.put_char(c.tty,d[x+z])}catch{throw new w.ErrnoError(29)}return S&&(c.node.timestamp=Date.now()),z}},default_tty_ops:{get_char(c){return ke()},put_char(c,d){d===null||d===10?(G(Ze(c.output)),c.output=[]):d!=0&&c.output.push(d)},fsync(c){c.output&&c.output.length>0&&(G(Ze(c.output)),c.output=[])},ioctl_tcgets(c){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(c,d,x){return 0},ioctl_tiocgwinsz(c){return[24,80]}},default_tty1_ops:{put_char(c,d){d===null||d===10?(W(Ze(c.output)),c.output=[]):d!=0&&c.output.push(d)},fsync(c){c.output&&c.output.length>0&&(W(Ze(c.output)),c.output=[])}}},Re=(c,d)=>{oe.fill(0,c,c+d)},it=(c,d)=>Math.ceil(c/d)*d,wt=c=>{c=it(c,65536);var d=Vs(65536,c);return d&&Re(d,c),d},at={ops_table:null,mount(c){return at.createNode(null,"/",16895,0)},createNode(c,d,x,S){if(w.isBlkdev(x)||w.isFIFO(x))throw new w.ErrnoError(63);at.ops_table||={dir:{node:{getattr:at.node_ops.getattr,setattr:at.node_ops.setattr,lookup:at.node_ops.lookup,mknod:at.node_ops.mknod,rename:at.node_ops.rename,unlink:at.node_ops.unlink,rmdir:at.node_ops.rmdir,readdir:at.node_ops.readdir,symlink:at.node_ops.symlink},stream:{llseek:at.stream_ops.llseek}},file:{node:{getattr:at.node_ops.getattr,setattr:at.node_ops.setattr},stream:{llseek:at.stream_ops.llseek,read:at.stream_ops.read,write:at.stream_ops.write,allocate:at.stream_ops.allocate,mmap:at.stream_ops.mmap,msync:at.stream_ops.msync}},link:{node:{getattr:at.node_ops.getattr,setattr:at.node_ops.setattr,readlink:at.node_ops.readlink},stream:{}},chrdev:{node:{getattr:at.node_ops.getattr,setattr:at.node_ops.setattr},stream:w.chrdev_stream_ops}};var C=w.createNode(c,d,x,S);return w.isDir(C.mode)?(C.node_ops=at.ops_table.dir.node,C.stream_ops=at.ops_table.dir.stream,C.contents={}):w.isFile(C.mode)?(C.node_ops=at.ops_table.file.node,C.stream_ops=at.ops_table.file.stream,C.usedBytes=0,C.contents=null):w.isLink(C.mode)?(C.node_ops=at.ops_table.link.node,C.stream_ops=at.ops_table.link.stream):w.isChrdev(C.mode)&&(C.node_ops=at.ops_table.chrdev.node,C.stream_ops=at.ops_table.chrdev.stream),C.timestamp=Date.now(),c&&(c.contents[d]=C,c.timestamp=C.timestamp),C},getFileDataAsTypedArray(c){return c.contents?c.contents.subarray?c.contents.subarray(0,c.usedBytes):new Uint8Array(c.contents):new Uint8Array(0)},expandFileStorage(c,d){var x=c.contents?c.contents.length:0;if(!(x>=d)){var S=1024*1024;d=Math.max(d,x*(x<S?2:1.125)>>>0),x!=0&&(d=Math.max(d,256));var C=c.contents;c.contents=new Uint8Array(d),c.usedBytes>0&&c.contents.set(C.subarray(0,c.usedBytes),0)}},resizeFileStorage(c,d){if(c.usedBytes!=d)if(d==0)c.contents=null,c.usedBytes=0;else{var x=c.contents;c.contents=new Uint8Array(d),x&&c.contents.set(x.subarray(0,Math.min(d,c.usedBytes))),c.usedBytes=d}},node_ops:{getattr(c){var d={};return d.dev=w.isChrdev(c.mode)?c.id:1,d.ino=c.id,d.mode=c.mode,d.nlink=1,d.uid=0,d.gid=0,d.rdev=c.rdev,w.isDir(c.mode)?d.size=4096:w.isFile(c.mode)?d.size=c.usedBytes:w.isLink(c.mode)?d.size=c.link.length:d.size=0,d.atime=new Date(c.timestamp),d.mtime=new Date(c.timestamp),d.ctime=new Date(c.timestamp),d.blksize=4096,d.blocks=Math.ceil(d.size/d.blksize),d},setattr(c,d){d.mode!==void 0&&(c.mode=d.mode),d.timestamp!==void 0&&(c.timestamp=d.timestamp),d.size!==void 0&&at.resizeFileStorage(c,d.size)},lookup(c,d){throw w.genericErrors[44]},mknod(c,d,x,S){return at.createNode(c,d,x,S)},rename(c,d,x){if(w.isDir(c.mode)){var S;try{S=w.lookupNode(d,x)}catch{}if(S)for(var C in S.contents)throw new w.ErrnoError(55)}delete c.parent.contents[c.name],c.parent.timestamp=Date.now(),c.name=x,d.contents[x]=c,d.timestamp=c.parent.timestamp},unlink(c,d){delete c.contents[d],c.timestamp=Date.now()},rmdir(c,d){var x=w.lookupNode(c,d);for(var S in x.contents)throw new w.ErrnoError(55);delete c.contents[d],c.timestamp=Date.now()},readdir(c){var d=[".",".."];for(var x of Object.keys(c.contents))d.push(x);return d},symlink(c,d,x){var S=at.createNode(c,d,41471,0);return S.link=x,S},readlink(c){if(!w.isLink(c.mode))throw new w.ErrnoError(28);return c.link}},stream_ops:{read(c,d,x,S,C){var z=c.node.contents;if(C>=c.node.usedBytes)return 0;var k=Math.min(c.node.usedBytes-C,S);if(k>8&&z.subarray)d.set(z.subarray(C,C+k),x);else for(var K=0;K<k;K++)d[x+K]=z[C+K];return k},write(c,d,x,S,C,z){if(d.buffer===te.buffer&&(z=!1),!S)return 0;var k=c.node;if(k.timestamp=Date.now(),d.subarray&&(!k.contents||k.contents.subarray)){if(z)return k.contents=d.subarray(x,x+S),k.usedBytes=S,S;if(k.usedBytes===0&&C===0)return k.contents=d.slice(x,x+S),k.usedBytes=S,S;if(C+S<=k.usedBytes)return k.contents.set(d.subarray(x,x+S),C),S}if(at.expandFileStorage(k,C+S),k.contents.subarray&&d.subarray)k.contents.set(d.subarray(x,x+S),C);else for(var K=0;K<S;K++)k.contents[C+K]=d[x+K];return k.usedBytes=Math.max(k.usedBytes,C+S),S},llseek(c,d,x){var S=d;if(x===1?S+=c.position:x===2&&w.isFile(c.node.mode)&&(S+=c.node.usedBytes),S<0)throw new w.ErrnoError(28);return S},allocate(c,d,x){at.expandFileStorage(c.node,d+x),c.node.usedBytes=Math.max(c.node.usedBytes,d+x)},mmap(c,d,x,S,C){if(!w.isFile(c.node.mode))throw new w.ErrnoError(43);var z,k,K=c.node.contents;if(!(C&2)&&K&&K.buffer===te.buffer)k=!1,z=K.byteOffset;else{if(k=!0,z=wt(d),!z)throw new w.ErrnoError(48);K&&((x>0||x+d<K.length)&&(K.subarray?K=K.subarray(x,x+d):K=Array.prototype.slice.call(K,x,x+d)),te.set(K,z))}return{ptr:z,allocated:k}},msync(c,d,x,S,C){return at.stream_ops.write(c,d,0,S,x,!1),0}}},Jt=(c,d,x,S)=>{var C=`al ${c}`;X(c).then(z=>{d(new Uint8Array(z)),C&&F()},z=>{if(x)x();else throw`Loading data file "${c}" failed.`}),C&&Me()},Yn=(c,d,x,S,C,z)=>{w.createDataFile(c,d,x,S,C,z)},li=p.preloadPlugins||[],Ts=(c,d,x,S)=>{typeof Browser<"u"&&Browser.init();var C=!1;return li.forEach(z=>{C||z.canHandle(d)&&(z.handle(c,d,x,S),C=!0)}),C},Gr=(c,d,x,S,C,z,k,K,xe,Oe)=>{var Ke=d?lt.resolve(Ve.join2(c,d)):c;function ot(mt){function nt(Tt){Oe?.(),K||Yn(c,d,Tt,S,C,xe),z?.(),F()}Ts(mt,Ke,nt,()=>{k?.(),F()})||nt(mt)}Me(),typeof x=="string"?Jt(x,ot,k):ot(x)},kr=c=>{var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},x=d[c];if(typeof x>"u")throw new Error(`Unknown file open mode: ${c}`);return x},ci=(c,d)=>{var x=0;return c&&(x|=365),d&&(x|=146),x},w={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(c){this.name="ErrnoError",this.errno=c}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(c){this.node=c}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(c){this.shared.flags=c}get position(){return this.shared.position}set position(c){this.shared.position=c}},FSNode:class{constructor(c,d,x,S){c||(c=this),this.parent=c,this.mount=c.mount,this.mounted=null,this.id=w.nextInode++,this.name=d,this.mode=x,this.node_ops={},this.stream_ops={},this.rdev=S,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(c){c?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(c){c?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return w.isDir(this.mode)}get isDevice(){return w.isChrdev(this.mode)}},lookupPath(c,d={}){if(c=lt.resolve(c),!c)return{path:"",node:null};var x={follow_mount:!0,recurse_count:0};if(d=Object.assign(x,d),d.recurse_count>8)throw new w.ErrnoError(32);for(var S=c.split("/").filter(ot=>!!ot),C=w.root,z="/",k=0;k<S.length;k++){var K=k===S.length-1;if(K&&d.parent)break;if(C=w.lookupNode(C,S[k]),z=Ve.join2(z,S[k]),w.isMountpoint(C)&&(!K||K&&d.follow_mount)&&(C=C.mounted.root),!K||d.follow)for(var xe=0;w.isLink(C.mode);){var Oe=w.readlink(z);z=lt.resolve(Ve.dirname(z),Oe);var Ke=w.lookupPath(z,{recurse_count:d.recurse_count+1});if(C=Ke.node,xe++>40)throw new w.ErrnoError(32)}}return{path:z,node:C}},getPath(c){for(var d;;){if(w.isRoot(c)){var x=c.mount.mountpoint;return d?x[x.length-1]!=="/"?`${x}/${d}`:x+d:x}d=d?`${c.name}/${d}`:c.name,c=c.parent}},hashName(c,d){for(var x=0,S=0;S<d.length;S++)x=(x<<5)-x+d.charCodeAt(S)|0;return(c+x>>>0)%w.nameTable.length},hashAddNode(c){var d=w.hashName(c.parent.id,c.name);c.name_next=w.nameTable[d],w.nameTable[d]=c},hashRemoveNode(c){var d=w.hashName(c.parent.id,c.name);if(w.nameTable[d]===c)w.nameTable[d]=c.name_next;else for(var x=w.nameTable[d];x;){if(x.name_next===c){x.name_next=c.name_next;break}x=x.name_next}},lookupNode(c,d){var x=w.mayLookup(c);if(x)throw new w.ErrnoError(x);for(var S=w.hashName(c.id,d),C=w.nameTable[S];C;C=C.name_next){var z=C.name;if(C.parent.id===c.id&&z===d)return C}return w.lookup(c,d)},createNode(c,d,x,S){var C=new w.FSNode(c,d,x,S);return w.hashAddNode(C),C},destroyNode(c){w.hashRemoveNode(c)},isRoot(c){return c===c.parent},isMountpoint(c){return!!c.mounted},isFile(c){return(c&61440)===32768},isDir(c){return(c&61440)===16384},isLink(c){return(c&61440)===40960},isChrdev(c){return(c&61440)===8192},isBlkdev(c){return(c&61440)===24576},isFIFO(c){return(c&61440)===4096},isSocket(c){return(c&49152)===49152},flagsToPermissionString(c){var d=["r","w","rw"][c&3];return c&512&&(d+="w"),d},nodePermissions(c,d){return w.ignorePermissions?0:d.includes("r")&&!(c.mode&292)||d.includes("w")&&!(c.mode&146)||d.includes("x")&&!(c.mode&73)?2:0},mayLookup(c){if(!w.isDir(c.mode))return 54;var d=w.nodePermissions(c,"x");return d||(c.node_ops.lookup?0:2)},mayCreate(c,d){try{var x=w.lookupNode(c,d);return 20}catch{}return w.nodePermissions(c,"wx")},mayDelete(c,d,x){var S;try{S=w.lookupNode(c,d)}catch(z){return z.errno}var C=w.nodePermissions(c,"wx");if(C)return C;if(x){if(!w.isDir(S.mode))return 54;if(w.isRoot(S)||w.getPath(S)===w.cwd())return 10}else if(w.isDir(S.mode))return 31;return 0},mayOpen(c,d){return c?w.isLink(c.mode)?32:w.isDir(c.mode)&&(w.flagsToPermissionString(d)!=="r"||d&512)?31:w.nodePermissions(c,w.flagsToPermissionString(d)):44},MAX_OPEN_FDS:4096,nextfd(){for(var c=0;c<=w.MAX_OPEN_FDS;c++)if(!w.streams[c])return c;throw new w.ErrnoError(33)},getStreamChecked(c){var d=w.getStream(c);if(!d)throw new w.ErrnoError(8);return d},getStream:c=>w.streams[c],createStream(c,d=-1){return c=Object.assign(new w.FSStream,c),d==-1&&(d=w.nextfd()),c.fd=d,w.streams[d]=c,c},closeStream(c){w.streams[c]=null},dupStream(c,d=-1){var x=w.createStream(c,d);return x.stream_ops?.dup?.(x),x},chrdev_stream_ops:{open(c){var d=w.getDevice(c.node.rdev);c.stream_ops=d.stream_ops,c.stream_ops.open?.(c)},llseek(){throw new w.ErrnoError(70)}},major:c=>c>>8,minor:c=>c&255,makedev:(c,d)=>c<<8|d,registerDevice(c,d){w.devices[c]={stream_ops:d}},getDevice:c=>w.devices[c],getMounts(c){for(var d=[],x=[c];x.length;){var S=x.pop();d.push(S),x.push(...S.mounts)}return d},syncfs(c,d){typeof c=="function"&&(d=c,c=!1),w.syncFSRequests++,w.syncFSRequests>1&&W(`warning: ${w.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var x=w.getMounts(w.root.mount),S=0;function C(k){return w.syncFSRequests--,d(k)}function z(k){if(k)return z.errored?void 0:(z.errored=!0,C(k));++S>=x.length&&C(null)}x.forEach(k=>{if(!k.type.syncfs)return z(null);k.type.syncfs(k,c,z)})},mount(c,d,x){var S=x==="/",C=!x,z;if(S&&w.root)throw new w.ErrnoError(10);if(!S&&!C){var k=w.lookupPath(x,{follow_mount:!1});if(x=k.path,z=k.node,w.isMountpoint(z))throw new w.ErrnoError(10);if(!w.isDir(z.mode))throw new w.ErrnoError(54)}var K={type:c,opts:d,mountpoint:x,mounts:[]},xe=c.mount(K);return xe.mount=K,K.root=xe,S?w.root=xe:z&&(z.mounted=K,z.mount&&z.mount.mounts.push(K)),xe},unmount(c){var d=w.lookupPath(c,{follow_mount:!1});if(!w.isMountpoint(d.node))throw new w.ErrnoError(28);var x=d.node,S=x.mounted,C=w.getMounts(S);Object.keys(w.nameTable).forEach(k=>{for(var K=w.nameTable[k];K;){var xe=K.name_next;C.includes(K.mount)&&w.destroyNode(K),K=xe}}),x.mounted=null;var z=x.mount.mounts.indexOf(S);x.mount.mounts.splice(z,1)},lookup(c,d){return c.node_ops.lookup(c,d)},mknod(c,d,x){var S=w.lookupPath(c,{parent:!0}),C=S.node,z=Ve.basename(c);if(!z||z==="."||z==="..")throw new w.ErrnoError(28);var k=w.mayCreate(C,z);if(k)throw new w.ErrnoError(k);if(!C.node_ops.mknod)throw new w.ErrnoError(63);return C.node_ops.mknod(C,z,d,x)},create(c,d){return d=d!==void 0?d:438,d&=4095,d|=32768,w.mknod(c,d,0)},mkdir(c,d){return d=d!==void 0?d:511,d&=1023,d|=16384,w.mknod(c,d,0)},mkdirTree(c,d){for(var x=c.split("/"),S="",C=0;C<x.length;++C)if(x[C]){S+="/"+x[C];try{w.mkdir(S,d)}catch(z){if(z.errno!=20)throw z}}},mkdev(c,d,x){return typeof x>"u"&&(x=d,d=438),d|=8192,w.mknod(c,d,x)},symlink(c,d){if(!lt.resolve(c))throw new w.ErrnoError(44);var x=w.lookupPath(d,{parent:!0}),S=x.node;if(!S)throw new w.ErrnoError(44);var C=Ve.basename(d),z=w.mayCreate(S,C);if(z)throw new w.ErrnoError(z);if(!S.node_ops.symlink)throw new w.ErrnoError(63);return S.node_ops.symlink(S,C,c)},rename(c,d){var x=Ve.dirname(c),S=Ve.dirname(d),C=Ve.basename(c),z=Ve.basename(d),k,K,xe;if(k=w.lookupPath(c,{parent:!0}),K=k.node,k=w.lookupPath(d,{parent:!0}),xe=k.node,!K||!xe)throw new w.ErrnoError(44);if(K.mount!==xe.mount)throw new w.ErrnoError(75);var Oe=w.lookupNode(K,C),Ke=lt.relative(c,S);if(Ke.charAt(0)!==".")throw new w.ErrnoError(28);if(Ke=lt.relative(d,x),Ke.charAt(0)!==".")throw new w.ErrnoError(55);var ot;try{ot=w.lookupNode(xe,z)}catch{}if(Oe!==ot){var mt=w.isDir(Oe.mode),nt=w.mayDelete(K,C,mt);if(nt)throw new w.ErrnoError(nt);if(nt=ot?w.mayDelete(xe,z,mt):w.mayCreate(xe,z),nt)throw new w.ErrnoError(nt);if(!K.node_ops.rename)throw new w.ErrnoError(63);if(w.isMountpoint(Oe)||ot&&w.isMountpoint(ot))throw new w.ErrnoError(10);if(xe!==K&&(nt=w.nodePermissions(K,"w"),nt))throw new w.ErrnoError(nt);w.hashRemoveNode(Oe);try{K.node_ops.rename(Oe,xe,z),Oe.parent=xe}catch(Tt){throw Tt}finally{w.hashAddNode(Oe)}}},rmdir(c){var d=w.lookupPath(c,{parent:!0}),x=d.node,S=Ve.basename(c),C=w.lookupNode(x,S),z=w.mayDelete(x,S,!0);if(z)throw new w.ErrnoError(z);if(!x.node_ops.rmdir)throw new w.ErrnoError(63);if(w.isMountpoint(C))throw new w.ErrnoError(10);x.node_ops.rmdir(x,S),w.destroyNode(C)},readdir(c){var d=w.lookupPath(c,{follow:!0}),x=d.node;if(!x.node_ops.readdir)throw new w.ErrnoError(54);return x.node_ops.readdir(x)},unlink(c){var d=w.lookupPath(c,{parent:!0}),x=d.node;if(!x)throw new w.ErrnoError(44);var S=Ve.basename(c),C=w.lookupNode(x,S),z=w.mayDelete(x,S,!1);if(z)throw new w.ErrnoError(z);if(!x.node_ops.unlink)throw new w.ErrnoError(63);if(w.isMountpoint(C))throw new w.ErrnoError(10);x.node_ops.unlink(x,S),w.destroyNode(C)},readlink(c){var d=w.lookupPath(c),x=d.node;if(!x)throw new w.ErrnoError(44);if(!x.node_ops.readlink)throw new w.ErrnoError(28);return lt.resolve(w.getPath(x.parent),x.node_ops.readlink(x))},stat(c,d){var x=w.lookupPath(c,{follow:!d}),S=x.node;if(!S)throw new w.ErrnoError(44);if(!S.node_ops.getattr)throw new w.ErrnoError(63);return S.node_ops.getattr(S)},lstat(c){return w.stat(c,!0)},chmod(c,d,x){var S;if(typeof c=="string"){var C=w.lookupPath(c,{follow:!x});S=C.node}else S=c;if(!S.node_ops.setattr)throw new w.ErrnoError(63);S.node_ops.setattr(S,{mode:d&4095|S.mode&-4096,timestamp:Date.now()})},lchmod(c,d){w.chmod(c,d,!0)},fchmod(c,d){var x=w.getStreamChecked(c);w.chmod(x.node,d)},chown(c,d,x,S){var C;if(typeof c=="string"){var z=w.lookupPath(c,{follow:!S});C=z.node}else C=c;if(!C.node_ops.setattr)throw new w.ErrnoError(63);C.node_ops.setattr(C,{timestamp:Date.now()})},lchown(c,d,x){w.chown(c,d,x,!0)},fchown(c,d,x){var S=w.getStreamChecked(c);w.chown(S.node,d,x)},truncate(c,d){if(d<0)throw new w.ErrnoError(28);var x;if(typeof c=="string"){var S=w.lookupPath(c,{follow:!0});x=S.node}else x=c;if(!x.node_ops.setattr)throw new w.ErrnoError(63);if(w.isDir(x.mode))throw new w.ErrnoError(31);if(!w.isFile(x.mode))throw new w.ErrnoError(28);var C=w.nodePermissions(x,"w");if(C)throw new w.ErrnoError(C);x.node_ops.setattr(x,{size:d,timestamp:Date.now()})},ftruncate(c,d){var x=w.getStreamChecked(c);if((x.flags&2097155)===0)throw new w.ErrnoError(28);w.truncate(x.node,d)},utime(c,d,x){var S=w.lookupPath(c,{follow:!0}),C=S.node;C.node_ops.setattr(C,{timestamp:Math.max(d,x)})},open(c,d,x){if(c==="")throw new w.ErrnoError(44);d=typeof d=="string"?kr(d):d,d&64?(x=typeof x>"u"?438:x,x=x&4095|32768):x=0;var S;if(typeof c=="object")S=c;else{c=Ve.normalize(c);try{var C=w.lookupPath(c,{follow:!(d&131072)});S=C.node}catch{}}var z=!1;if(d&64)if(S){if(d&128)throw new w.ErrnoError(20)}else S=w.mknod(c,x,0),z=!0;if(!S)throw new w.ErrnoError(44);if(w.isChrdev(S.mode)&&(d&=-513),d&65536&&!w.isDir(S.mode))throw new w.ErrnoError(54);if(!z){var k=w.mayOpen(S,d);if(k)throw new w.ErrnoError(k)}d&512&&!z&&w.truncate(S,0),d&=-131713;var K=w.createStream({node:S,path:w.getPath(S),flags:d,seekable:!0,position:0,stream_ops:S.stream_ops,ungotten:[],error:!1});return K.stream_ops.open&&K.stream_ops.open(K),p.logReadFiles&&!(d&1)&&(c in w.readFiles||(w.readFiles[c]=1)),K},close(c){if(w.isClosed(c))throw new w.ErrnoError(8);c.getdents&&(c.getdents=null);try{c.stream_ops.close&&c.stream_ops.close(c)}catch(d){throw d}finally{w.closeStream(c.fd)}c.fd=null},isClosed(c){return c.fd===null},llseek(c,d,x){if(w.isClosed(c))throw new w.ErrnoError(8);if(!c.seekable||!c.stream_ops.llseek)throw new w.ErrnoError(70);if(x!=0&&x!=1&&x!=2)throw new w.ErrnoError(28);return c.position=c.stream_ops.llseek(c,d,x),c.ungotten=[],c.position},read(c,d,x,S,C){if(S<0||C<0)throw new w.ErrnoError(28);if(w.isClosed(c))throw new w.ErrnoError(8);if((c.flags&2097155)===1)throw new w.ErrnoError(8);if(w.isDir(c.node.mode))throw new w.ErrnoError(31);if(!c.stream_ops.read)throw new w.ErrnoError(28);var z=typeof C<"u";if(!z)C=c.position;else if(!c.seekable)throw new w.ErrnoError(70);var k=c.stream_ops.read(c,d,x,S,C);return z||(c.position+=k),k},write(c,d,x,S,C,z){if(S<0||C<0)throw new w.ErrnoError(28);if(w.isClosed(c))throw new w.ErrnoError(8);if((c.flags&2097155)===0)throw new w.ErrnoError(8);if(w.isDir(c.node.mode))throw new w.ErrnoError(31);if(!c.stream_ops.write)throw new w.ErrnoError(28);c.seekable&&c.flags&1024&&w.llseek(c,0,2);var k=typeof C<"u";if(!k)C=c.position;else if(!c.seekable)throw new w.ErrnoError(70);var K=c.stream_ops.write(c,d,x,S,C,z);return k||(c.position+=K),K},allocate(c,d,x){if(w.isClosed(c))throw new w.ErrnoError(8);if(d<0||x<=0)throw new w.ErrnoError(28);if((c.flags&2097155)===0)throw new w.ErrnoError(8);if(!w.isFile(c.node.mode)&&!w.isDir(c.node.mode))throw new w.ErrnoError(43);if(!c.stream_ops.allocate)throw new w.ErrnoError(138);c.stream_ops.allocate(c,d,x)},mmap(c,d,x,S,C){if((S&2)!==0&&(C&2)===0&&(c.flags&2097155)!==2)throw new w.ErrnoError(2);if((c.flags&2097155)===1)throw new w.ErrnoError(2);if(!c.stream_ops.mmap)throw new w.ErrnoError(43);if(!d)throw new w.ErrnoError(28);return c.stream_ops.mmap(c,d,x,S,C)},msync(c,d,x,S,C){return c.stream_ops.msync?c.stream_ops.msync(c,d,x,S,C):0},ioctl(c,d,x){if(!c.stream_ops.ioctl)throw new w.ErrnoError(59);return c.stream_ops.ioctl(c,d,x)},readFile(c,d={}){if(d.flags=d.flags||0,d.encoding=d.encoding||"binary",d.encoding!=="utf8"&&d.encoding!=="binary")throw new Error(`Invalid encoding type "${d.encoding}"`);var x,S=w.open(c,d.flags),C=w.stat(c),z=C.size,k=new Uint8Array(z);return w.read(S,k,0,z,0),d.encoding==="utf8"?x=Ze(k):d.encoding==="binary"&&(x=k),w.close(S),x},writeFile(c,d,x={}){x.flags=x.flags||577;var S=w.open(c,x.flags,x.mode);if(typeof d=="string"){var C=new Uint8Array(Z(d)+1),z=qe(d,C,0,C.length);w.write(S,C,0,z,void 0,x.canOwn)}else if(ArrayBuffer.isView(d))w.write(S,d,0,d.byteLength,void 0,x.canOwn);else throw new Error("Unsupported data type");w.close(S)},cwd:()=>w.currentPath,chdir(c){var d=w.lookupPath(c,{follow:!0});if(d.node===null)throw new w.ErrnoError(44);if(!w.isDir(d.node.mode))throw new w.ErrnoError(54);var x=w.nodePermissions(d.node,"x");if(x)throw new w.ErrnoError(x);w.currentPath=d.path},createDefaultDirectories(){w.mkdir("/tmp"),w.mkdir("/home"),w.mkdir("/home/web_user")},createDefaultDevices(){w.mkdir("/dev"),w.registerDevice(w.makedev(1,3),{read:()=>0,write:(S,C,z,k,K)=>k}),w.mkdev("/dev/null",w.makedev(1,3)),Le.register(w.makedev(5,0),Le.default_tty_ops),Le.register(w.makedev(6,0),Le.default_tty1_ops),w.mkdev("/dev/tty",w.makedev(5,0)),w.mkdev("/dev/tty1",w.makedev(6,0));var c=new Uint8Array(1024),d=0,x=()=>(d===0&&(d=Pe(c).byteLength),c[--d]);w.createDevice("/dev","random",x),w.createDevice("/dev","urandom",x),w.mkdir("/dev/shm"),w.mkdir("/dev/shm/tmp")},createSpecialDirectories(){w.mkdir("/proc");var c=w.mkdir("/proc/self");w.mkdir("/proc/self/fd"),w.mount({mount(){var d=w.createNode(c,"fd",16895,73);return d.node_ops={lookup(x,S){var C=+S,z=w.getStreamChecked(C),k={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>z.path}};return k.parent=k,k}},d}},{},"/proc/self/fd")},createStandardStreams(c,d,x){c?w.createDevice("/dev","stdin",c):w.symlink("/dev/tty","/dev/stdin"),d?w.createDevice("/dev","stdout",null,d):w.symlink("/dev/tty","/dev/stdout"),x?w.createDevice("/dev","stderr",null,x):w.symlink("/dev/tty1","/dev/stderr"),w.open("/dev/stdin",0),w.open("/dev/stdout",1),w.open("/dev/stderr",1)},staticInit(){[44].forEach(c=>{w.genericErrors[c]=new w.ErrnoError(c),w.genericErrors[c].stack="<generic error, no stack>"}),w.nameTable=new Array(4096),w.mount(at,{},"/"),w.createDefaultDirectories(),w.createDefaultDevices(),w.createSpecialDirectories(),w.filesystems={MEMFS:at}},init(c,d,x){w.initialized=!0,c??=p.stdin,d??=p.stdout,x??=p.stderr,w.createStandardStreams(c,d,x)},quit(){w.initialized=!1;for(var c=0;c<w.streams.length;c++){var d=w.streams[c];d&&w.close(d)}},findObject(c,d){var x=w.analyzePath(c,d);return x.exists?x.object:null},analyzePath(c,d){try{var x=w.lookupPath(c,{follow:!d});c=x.path}catch{}var S={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var x=w.lookupPath(c,{parent:!0});S.parentExists=!0,S.parentPath=x.path,S.parentObject=x.node,S.name=Ve.basename(c),x=w.lookupPath(c,{follow:!d}),S.exists=!0,S.path=x.path,S.object=x.node,S.name=x.node.name,S.isRoot=x.path==="/"}catch(C){S.error=C.errno}return S},createPath(c,d,x,S){c=typeof c=="string"?c:w.getPath(c);for(var C=d.split("/").reverse();C.length;){var z=C.pop();if(z){var k=Ve.join2(c,z);try{w.mkdir(k)}catch{}c=k}}return k},createFile(c,d,x,S,C){var z=Ve.join2(typeof c=="string"?c:w.getPath(c),d),k=ci(S,C);return w.create(z,k)},createDataFile(c,d,x,S,C,z){var k=d;c&&(c=typeof c=="string"?c:w.getPath(c),k=d?Ve.join2(c,d):c);var K=ci(S,C),xe=w.create(k,K);if(x){if(typeof x=="string"){for(var Oe=new Array(x.length),Ke=0,ot=x.length;Ke<ot;++Ke)Oe[Ke]=x.charCodeAt(Ke);x=Oe}w.chmod(xe,K|146);var mt=w.open(xe,577);w.write(mt,x,0,x.length,0,z),w.close(mt),w.chmod(xe,K)}},createDevice(c,d,x,S){var C=Ve.join2(typeof c=="string"?c:w.getPath(c),d),z=ci(!!x,!!S);w.createDevice.major??=64;var k=w.makedev(w.createDevice.major++,0);return w.registerDevice(k,{open(K){K.seekable=!1},close(K){S?.buffer?.length&&S(10)},read(K,xe,Oe,Ke,ot){for(var mt=0,nt=0;nt<Ke;nt++){var Tt;try{Tt=x()}catch{throw new w.ErrnoError(29)}if(Tt===void 0&&mt===0)throw new w.ErrnoError(6);if(Tt==null)break;mt++,xe[Oe+nt]=Tt}return mt&&(K.node.timestamp=Date.now()),mt},write(K,xe,Oe,Ke,ot){for(var mt=0;mt<Ke;mt++)try{S(xe[Oe+mt])}catch{throw new w.ErrnoError(29)}return Ke&&(K.node.timestamp=Date.now()),mt}}),w.mkdev(C,z,k)},forceLoadFile(c){if(c.isDevice||c.isFolder||c.link||c.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{c.contents=H(c.url),c.usedBytes=c.contents.length}catch{throw new w.ErrnoError(29)}},createLazyFile(c,d,x,S,C){class z{constructor(){this.lengthKnown=!1,this.chunks=[]}get(nt){if(!(nt>this.length-1||nt<0)){var Tt=nt%this.chunkSize,Ot=nt/this.chunkSize|0;return this.getter(Ot)[Tt]}}setDataGetter(nt){this.getter=nt}cacheLength(){var nt=new XMLHttpRequest;if(nt.open("HEAD",x,!1),nt.send(null),!(nt.status>=200&&nt.status<300||nt.status===304))throw new Error("Couldn't load "+x+". Status: "+nt.status);var Tt=Number(nt.getResponseHeader("Content-length")),Ot,bn=(Ot=nt.getResponseHeader("Accept-Ranges"))&&Ot==="bytes",xn=(Ot=nt.getResponseHeader("Content-Encoding"))&&Ot==="gzip",ii=1024*1024;bn||(ii=Tt);var ai=(jn,wa)=>{if(jn>wa)throw new Error("invalid range ("+jn+", "+wa+") or no bytes requested!");if(wa>Tt-1)throw new Error("only "+Tt+" bytes available! programmer error!");var An=new XMLHttpRequest;if(An.open("GET",x,!1),Tt!==ii&&An.setRequestHeader("Range","bytes="+jn+"-"+wa),An.responseType="arraybuffer",An.overrideMimeType&&An.overrideMimeType("text/plain; charset=x-user-defined"),An.send(null),!(An.status>=200&&An.status<300||An.status===304))throw new Error("Couldn't load "+x+". Status: "+An.status);return An.response!==void 0?new Uint8Array(An.response||[]):Ge(An.responseText||"")},Aa=this;Aa.setDataGetter(jn=>{var wa=jn*ii,An=(jn+1)*ii-1;if(An=Math.min(An,Tt-1),typeof Aa.chunks[jn]>"u"&&(Aa.chunks[jn]=ai(wa,An)),typeof Aa.chunks[jn]>"u")throw new Error("doXHR failed!");return Aa.chunks[jn]}),(xn||!Tt)&&(ii=Tt=1,Tt=this.getter(0).length,ii=Tt,G("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Tt,this._chunkSize=ii,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!v)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var k=new z,K={isDevice:!1,contents:k}}else var K={isDevice:!1,url:x};var xe=w.createFile(c,d,K,S,C);K.contents?xe.contents=K.contents:K.url&&(xe.contents=null,xe.url=K.url),Object.defineProperties(xe,{usedBytes:{get:function(){return this.contents.length}}});var Oe={},Ke=Object.keys(xe.stream_ops);Ke.forEach(mt=>{var nt=xe.stream_ops[mt];Oe[mt]=(...Tt)=>(w.forceLoadFile(xe),nt(...Tt))});function ot(mt,nt,Tt,Ot,bn){var xn=mt.node.contents;if(bn>=xn.length)return 0;var ii=Math.min(xn.length-bn,Ot);if(xn.slice)for(var ai=0;ai<ii;ai++)nt[Tt+ai]=xn[bn+ai];else for(var ai=0;ai<ii;ai++)nt[Tt+ai]=xn.get(bn+ai);return ii}return Oe.read=(mt,nt,Tt,Ot,bn)=>(w.forceLoadFile(xe),ot(mt,nt,Tt,Ot,bn)),Oe.mmap=(mt,nt,Tt,Ot,bn)=>{w.forceLoadFile(xe);var xn=wt(nt);if(!xn)throw new w.ErrnoError(48);return ot(mt,te,xn,nt,Tt),{ptr:xn,allocated:!0}},xe.stream_ops=Oe,xe}},Sa=(c,d)=>c?Ze(oe,c,d):"",Gt={DEFAULT_POLLMASK:5,calculateAt(c,d,x){if(Ve.isAbs(d))return d;var S;if(c===-100)S=w.cwd();else{var C=Gt.getStreamFromFD(c);S=C.path}if(d.length==0){if(!x)throw new w.ErrnoError(44);return S}return Ve.join2(S,d)},doStat(c,d,x){var S=c(d);B[x>>2]=S.dev,B[x+4>>2]=S.mode,$[x+8>>2]=S.nlink,B[x+12>>2]=S.uid,B[x+16>>2]=S.gid,B[x+20>>2]=S.rdev,Ye=[S.size>>>0,(ae=S.size,+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],B[x+24>>2]=Ye[0],B[x+28>>2]=Ye[1],B[x+32>>2]=4096,B[x+36>>2]=S.blocks;var C=S.atime.getTime(),z=S.mtime.getTime(),k=S.ctime.getTime();return Ye=[Math.floor(C/1e3)>>>0,(ae=Math.floor(C/1e3),+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],B[x+40>>2]=Ye[0],B[x+44>>2]=Ye[1],$[x+48>>2]=C%1e3*1e3*1e3,Ye=[Math.floor(z/1e3)>>>0,(ae=Math.floor(z/1e3),+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],B[x+56>>2]=Ye[0],B[x+60>>2]=Ye[1],$[x+64>>2]=z%1e3*1e3*1e3,Ye=[Math.floor(k/1e3)>>>0,(ae=Math.floor(k/1e3),+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],B[x+72>>2]=Ye[0],B[x+76>>2]=Ye[1],$[x+80>>2]=k%1e3*1e3*1e3,Ye=[S.ino>>>0,(ae=S.ino,+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],B[x+88>>2]=Ye[0],B[x+92>>2]=Ye[1],0},doMsync(c,d,x,S,C){if(!w.isFile(d.node.mode))throw new w.ErrnoError(43);if(S&2)return 0;var z=oe.slice(c,c+x);w.msync(d,z,C,x,S)},getStreamFromFD(c){var d=w.getStreamChecked(c);return d},varargs:void 0,getStr(c){var d=Sa(c);return d}};function ui(c,d){try{return c=Gt.getStr(c),w.chmod(c,d),0}catch(x){if(typeof w>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function En(c,d,x,S){try{if(d=Gt.getStr(d),d=Gt.calculateAt(c,d),x&-8)return-28;var C=w.lookupPath(d,{follow:!0}),z=C.node;if(!z)return-44;var k="";return x&4&&(k+="r"),x&2&&(k+="w"),x&1&&(k+="x"),k&&w.nodePermissions(z,k)?-2:0}catch(K){if(typeof w>"u"||K.name!=="ErrnoError")throw K;return-K.errno}}function yn(){var c=B[+Gt.varargs>>2];return Gt.varargs+=4,c}var ni=yn;function tr(c,d,x){Gt.varargs=x;try{var S=Gt.getStreamFromFD(c);switch(d){case 0:{var C=yn();if(C<0)return-28;for(;w.streams[C];)C++;var z;return z=w.dupStream(S,C),z.fd}case 1:case 2:return 0;case 3:return S.flags;case 4:{var C=yn();return S.flags|=C,0}case 12:{var C=ni(),k=0;return Se[C+k>>1]=2,0}case 13:case 14:return 0}return-28}catch(K){if(typeof w>"u"||K.name!=="ErrnoError")throw K;return-K.errno}}function Vo(c,d){try{var x=Gt.getStreamFromFD(c);return Gt.doStat(w.stat,x.path,d)}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Go(c,d,x){Gt.varargs=x;try{var S=Gt.getStreamFromFD(c);switch(d){case 21509:return S.tty?0:-59;case 21505:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tcgets){var C=S.tty.ops.ioctl_tcgets(S),z=ni();B[z>>2]=C.c_iflag||0,B[z+4>>2]=C.c_oflag||0,B[z+8>>2]=C.c_cflag||0,B[z+12>>2]=C.c_lflag||0;for(var k=0;k<32;k++)te[z+k+17]=C.c_cc[k]||0;return 0}return 0}case 21510:case 21511:case 21512:return S.tty?0:-59;case 21506:case 21507:case 21508:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tcsets){for(var z=ni(),K=B[z>>2],xe=B[z+4>>2],Oe=B[z+8>>2],Ke=B[z+12>>2],ot=[],k=0;k<32;k++)ot.push(te[z+k+17]);return S.tty.ops.ioctl_tcsets(S.tty,d,{c_iflag:K,c_oflag:xe,c_cflag:Oe,c_lflag:Ke,c_cc:ot})}return 0}case 21519:{if(!S.tty)return-59;var z=ni();return B[z>>2]=0,0}case 21520:return S.tty?-28:-59;case 21531:{var z=ni();return w.ioctl(S,d,z)}case 21523:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tiocgwinsz){var mt=S.tty.ops.ioctl_tiocgwinsz(S.tty),z=ni();Se[z>>1]=mt[0],Se[z+2>>1]=mt[1]}return 0}case 21524:return S.tty?0:-59;case 21515:return S.tty?0:-59;default:return-28}}catch(nt){if(typeof w>"u"||nt.name!=="ErrnoError")throw nt;return-nt.errno}}function As(c,d){try{return c=Gt.getStr(c),Gt.doStat(w.lstat,c,d)}catch(x){if(typeof w>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function ba(c,d,x,S){try{d=Gt.getStr(d);var C=S&256,z=S&4096;return S=S&-6401,d=Gt.calculateAt(c,d,z),Gt.doStat(C?w.lstat:w.stat,d,x)}catch(k){if(typeof w>"u"||k.name!=="ErrnoError")throw k;return-k.errno}}function Xr(c,d,x,S){Gt.varargs=S;try{d=Gt.getStr(d),d=Gt.calculateAt(c,d);var C=S?yn():0;return w.open(d,x,C).fd}catch(z){if(typeof w>"u"||z.name!=="ErrnoError")throw z;return-z.errno}}function la(c){try{return c=Gt.getStr(c),w.rmdir(c),0}catch(d){if(typeof w>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function L(c,d){try{return c=Gt.getStr(c),Gt.doStat(w.stat,c,d)}catch(x){if(typeof w>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function ee(c,d,x){try{return d=Gt.getStr(d),d=Gt.calculateAt(c,d),x===0?w.unlink(d):x===512?w.rmdir(d):Be("Invalid flags passed to unlinkat"),0}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}var ge=()=>{Be("")},le=(c,d,x,S,C)=>{},re=()=>{for(var c=new Array(256),d=0;d<256;++d)c[d]=String.fromCharCode(d);Ie=c},Ie,ze=c=>{for(var d="",x=c;oe[x];)d+=Ie[oe[x++]];return d},Qe={},Je={},yt={},bt,rt=c=>{throw new bt(c)},Dt,Yt=c=>{throw new Dt(c)},$t=(c,d,x)=>{c.forEach(K=>yt[K]=d);function S(K){var xe=x(K);xe.length!==c.length&&Yt("Mismatched type converter count");for(var Oe=0;Oe<c.length;++Oe)It(c[Oe],xe[Oe])}var C=new Array(d.length),z=[],k=0;d.forEach((K,xe)=>{Je.hasOwnProperty(K)?C[xe]=Je[K]:(z.push(K),Qe.hasOwnProperty(K)||(Qe[K]=[]),Qe[K].push(()=>{C[xe]=Je[K],++k,k===z.length&&S(C)}))}),z.length===0&&S(C)};function kt(c,d,x={}){var S=d.name;if(c||rt(`type "${S}" must have a positive integer typeid pointer`),Je.hasOwnProperty(c)){if(x.ignoreDuplicateRegistrations)return;rt(`Cannot register type '${S}' twice`)}if(Je[c]=d,delete yt[c],Qe.hasOwnProperty(c)){var C=Qe[c];delete Qe[c],C.forEach(z=>z())}}function It(c,d,x={}){return kt(c,d,x)}var pt=8,sn=(c,d,x,S)=>{d=ze(d),It(c,{name:d,fromWireType:function(C){return!!C},toWireType:function(C,z){return z?x:S},argPackAdvance:pt,readValueFromPointer:function(C){return this.fromWireType(oe[C])},destructorFunction:null})},Vt=[],cn=[],Oi=c=>{c>9&&--cn[c+1]===0&&(cn[c]=void 0,Vt.push(c))},un=()=>cn.length/2-5-Vt.length,ji=()=>{cn.push(0,1,void 0,1,null,1,!0,1,!1,1),p.count_emval_handles=un},Rt={toValue:c=>(c||rt("Cannot use deleted val. handle = "+c),cn[c]),toHandle:c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const d=Vt.pop()||cn.length;return cn[d]=c,cn[d+1]=1,d}}}};function Tn(c){return this.fromWireType($[c>>2])}var Un={name:"emscripten::val",fromWireType:c=>{var d=Rt.toValue(c);return Oi(c),d},toWireType:(c,d)=>Rt.toHandle(d),argPackAdvance:pt,readValueFromPointer:Tn,destructorFunction:null},Pn=c=>It(c,Un),Gn=(c,d)=>{switch(d){case 4:return function(x){return this.fromWireType(ie[x>>2])};case 8:return function(x){return this.fromWireType(we[x>>3])};default:throw new TypeError(`invalid float width (${d}): ${c}`)}},Pi=(c,d,x)=>{d=ze(d),It(c,{name:d,fromWireType:S=>S,toWireType:(S,C)=>C,argPackAdvance:pt,readValueFromPointer:Gn(d,x),destructorFunction:null})},mi=(c,d)=>Object.defineProperty(d,"name",{value:c}),ko=c=>{for(;c.length;){var d=c.pop(),x=c.pop();x(d)}};function Xo(c){for(var d=1;d<c.length;++d)if(c[d]!==null&&c[d].destructorFunction===void 0)return!0;return!1}function ws(c,d){if(!(c instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof c} which is not a function`);var x=mi(c.name||"unknownFunctionName",function(){});x.prototype=c.prototype;var S=new x,C=c.apply(S,d);return C instanceof Object?C:S}function nf(c,d,x,S){for(var C=Xo(c),z=c.length-2,k=[],K=["fn"],xe=0;xe<z;++xe)k.push(`arg${xe}`),K.push(`arg${xe}Wired`);k=k.join(","),K=K.join(",");var Oe=`return function (${k}) {
`;C&&(Oe+=`var destructors = [];
`);for(var Ke=C?"destructors":"null",ot=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],xe=0;xe<z;++xe)Oe+=`var arg${xe}Wired = argType${xe}['toWireType'](${Ke}, arg${xe});
`,ot.push(`argType${xe}`);if(Oe+=(x||S?"var rv = ":"")+`invoker(${K});
`,C)Oe+=`runDestructors(destructors);
`;else for(var xe=2;xe<c.length;++xe){var mt=xe===1?"thisWired":"arg"+(xe-2)+"Wired";c[xe].destructorFunction!==null&&(Oe+=`${mt}_dtor(${mt});
`,ot.push(`${mt}_dtor`))}return x&&(Oe+=`var ret = retType['fromWireType'](rv);
return ret;
`),Oe+=`}
`,[ot,Oe]}function af(c,d,x,S,C,z){var k=d.length;k<2&&rt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var K=d[1]!==null&&x!==null,xe=Xo(d),Oe=d[0].name!=="void",Ke=[c,rt,S,C,ko,d[0],d[1]],ot=0;ot<k-2;++ot)Ke.push(d[ot+2]);if(!xe)for(var ot=2;ot<d.length;++ot)d[ot].destructorFunction!==null&&Ke.push(d[ot].destructorFunction);let[mt,nt]=nf(d,K,Oe,z);mt.push(nt);var Tt=ws(Function,mt)(...Ke);return mi(c,Tt)}var Rs=(c,d,x)=>{if(c[d].overloadTable===void 0){var S=c[d];c[d]=function(...C){return c[d].overloadTable.hasOwnProperty(C.length)||rt(`Function '${x}' called with an invalid number of arguments (${C.length}) - expects one of (${c[d].overloadTable})!`),c[d].overloadTable[C.length].apply(this,C)},c[d].overloadTable=[],c[d].overloadTable[S.argCount]=S}},Zi=(c,d,x)=>{p.hasOwnProperty(c)?((x===void 0||p[c].overloadTable!==void 0&&p[c].overloadTable[x]!==void 0)&&rt(`Cannot register public name '${c}' twice`),Rs(p,c,c),p.hasOwnProperty(x)&&rt(`Cannot register multiple overloads of a function with the same number of arguments (${x})!`),p[c].overloadTable[x]=d):(p[c]=d,x!==void 0&&(p[c].numArguments=x))},Wo=(c,d)=>{for(var x=[],S=0;S<c;S++)x.push($[d+S*4>>2]);return x},qo=(c,d,x)=>{p.hasOwnProperty(c)||Yt("Replacing nonexistent public symbol"),p[c].overloadTable!==void 0&&x!==void 0?p[c].overloadTable[x]=d:(p[c]=d,p[c].argCount=x)},nr=(c,d,x)=>{c=c.replace(/p/g,"i");var S=p["dynCall_"+c];return S(d,...x)},Ki=[],Yo,Cs=c=>{var d=Ki[c];return d||(c>=Ki.length&&(Ki.length=c+1),Ki[c]=d=Yo.get(c)),d},$l=(c,d,x=[])=>{if(c.includes("j"))return nr(c,d,x);var S=Cs(d)(...x);return S},Wr=(c,d)=>(...x)=>$l(c,d,x),Qi=(c,d)=>{c=ze(c);function x(){return c.includes("j")?Wr(c,d):Cs(d)}var S=x();return typeof S!="function"&&rt(`unknown function pointer with signature ${c}: ${d}`),S},jo=(c,d)=>{var x=mi(d,function(S){this.name=d,this.message=S;var C=new Error(S).stack;C!==void 0&&(this.stack=this.toString()+`
`+C.replace(/^Error(:[^\n]*)?\n/,""))});return x.prototype=Object.create(c.prototype),x.prototype.constructor=x,x.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},x},ir,Ji=c=>{var d=tl(c),x=ze(d);return $i(d),x},Zo=(c,d)=>{var x=[],S={};function C(z){if(!S[z]&&!Je[z]){if(yt[z]){yt[z].forEach(C);return}x.push(z),S[z]=!0}}throw d.forEach(C),new ir(`${c}: `+x.map(Ji).join([", "]))},Ds=c=>{c=c.trim();const d=c.indexOf("(");return d!==-1?c.substr(0,d):c},ec=(c,d,x,S,C,z,k,K)=>{var xe=Wo(d,x);c=ze(c),c=Ds(c),C=Qi(S,C),Zi(c,function(){Zo(`Cannot call ${c} due to unbound types`,xe)},d-1),$t([],xe,Oe=>{var Ke=[Oe[0],null].concat(Oe.slice(1));return qo(c,af(c,Ke,null,C,z,k),d-1),[]})},Us=(c,d,x)=>{switch(d){case 1:return x?S=>te[S]:S=>oe[S];case 2:return x?S=>Se[S>>1]:S=>ye[S>>1];case 4:return x?S=>B[S>>2]:S=>$[S>>2];default:throw new TypeError(`invalid integer width (${d}): ${c}`)}},Ls=(c,d,x,S,C)=>{d=ze(d);var z=Ke=>Ke;if(S===0){var k=32-8*x;z=Ke=>Ke<<k>>>k}var K=d.includes("unsigned"),xe=(Ke,ot)=>{},Oe;K?Oe=function(Ke,ot){return xe(ot,this.name),ot>>>0}:Oe=function(Ke,ot){return xe(ot,this.name),ot},It(c,{name:d,fromWireType:z,toWireType:Oe,argPackAdvance:pt,readValueFromPointer:Us(d,x,S!==0),destructorFunction:null})},tc=(c,d,x)=>{var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],C=S[d];function z(k){var K=$[k>>2],xe=$[k+4>>2];return new C(te.buffer,xe,K)}x=ze(x),It(c,{name:x,fromWireType:z,argPackAdvance:pt,readValueFromPointer:z},{ignoreDuplicateRegistrations:!0})},Ln=(c,d,x)=>qe(c,oe,d,x),Ma=(c,d)=>{d=ze(d);var x=d==="std::string";It(c,{name:d,fromWireType(S){var C=$[S>>2],z=S+4,k;if(x)for(var K=z,xe=0;xe<=C;++xe){var Oe=z+xe;if(xe==C||oe[Oe]==0){var Ke=Oe-K,ot=Sa(K,Ke);k===void 0?k=ot:(k+="\0",k+=ot),K=Oe+1}}else{for(var mt=new Array(C),xe=0;xe<C;++xe)mt[xe]=String.fromCharCode(oe[z+xe]);k=mt.join("")}return $i(S),k},toWireType(S,C){C instanceof ArrayBuffer&&(C=new Uint8Array(C));var z,k=typeof C=="string";k||C instanceof Uint8Array||C instanceof Uint8ClampedArray||C instanceof Int8Array||rt("Cannot pass non-string to std::string"),x&&k?z=Z(C):z=C.length;var K=$r(4+z+1),xe=K+4;if($[K>>2]=z,x&&k)Ln(C,xe,z+1);else if(k)for(var Oe=0;Oe<z;++Oe){var Ke=C.charCodeAt(Oe);Ke>255&&($i(xe),rt("String has UTF-16 code units that do not fit in 8 bits")),oe[xe+Oe]=Ke}else for(var Oe=0;Oe<z;++Oe)oe[xe+Oe]=C[Oe];return S!==null&&S.push($i,K),K},argPackAdvance:pt,readValueFromPointer:Tn,destructorFunction(S){$i(S)}})},qr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Yr=(c,d)=>{for(var x=c,S=x>>1,C=S+d/2;!(S>=C)&&ye[S];)++S;if(x=S<<1,x-c>32&&qr)return qr.decode(oe.subarray(c,x));for(var z="",k=0;!(k>=d/2);++k){var K=Se[c+k*2>>1];if(K==0)break;z+=String.fromCharCode(K)}return z},rf=(c,d,x)=>{if(x??=2147483647,x<2)return 0;x-=2;for(var S=d,C=x<c.length*2?x/2:c.length,z=0;z<C;++z){var k=c.charCodeAt(z);Se[d>>1]=k,d+=2}return Se[d>>1]=0,d-S},Ko=c=>c.length*2,Qo=(c,d)=>{for(var x=0,S="";!(x>=d/4);){var C=B[c+x*4>>2];if(C==0)break;if(++x,C>=65536){var z=C-65536;S+=String.fromCharCode(55296|z>>10,56320|z&1023)}else S+=String.fromCharCode(C)}return S},jr=(c,d,x)=>{if(x??=2147483647,x<4)return 0;for(var S=d,C=S+x-4,z=0;z<c.length;++z){var k=c.charCodeAt(z);if(k>=55296&&k<=57343){var K=c.charCodeAt(++z);k=65536+((k&1023)<<10)|K&1023}if(B[d>>2]=k,d+=4,d+4>C)break}return B[d>>2]=0,d-S},Ns=c=>{for(var d=0,x=0;x<c.length;++x){var S=c.charCodeAt(x);S>=55296&&S<=57343&&++x,d+=4}return d},nc=(c,d,x)=>{x=ze(x);var S,C,z,k;d===2?(S=Yr,C=rf,k=Ko,z=K=>ye[K>>1]):d===4&&(S=Qo,C=jr,k=Ns,z=K=>$[K>>2]),It(c,{name:x,fromWireType:K=>{for(var xe=$[K>>2],Oe,Ke=K+4,ot=0;ot<=xe;++ot){var mt=K+4+ot*d;if(ot==xe||z(mt)==0){var nt=mt-Ke,Tt=S(Ke,nt);Oe===void 0?Oe=Tt:(Oe+="\0",Oe+=Tt),Ke=mt+d}}return $i(K),Oe},toWireType:(K,xe)=>{typeof xe!="string"&&rt(`Cannot pass non-string to C++ string type ${x}`);var Oe=k(xe),Ke=$r(4+Oe+d);return $[Ke>>2]=Oe/d,C(xe,Ke+4,Oe+d),K!==null&&K.push($i,Ke),Ke},argPackAdvance:pt,readValueFromPointer:Tn,destructorFunction(K){$i(K)}})},sf=(c,d)=>{d=ze(d),It(c,{isVoid:!0,name:d,argPackAdvance:0,fromWireType:()=>{},toWireType:(x,S)=>{}})},of=1,lf=()=>of,Os=c=>{for(var d=c.split("."),x=0;x<4;x++){var S=Number(d[x]);if(isNaN(S))return null;d[x]=S}return(d[0]|d[1]<<8|d[2]<<16|d[3]<<24)>>>0},Ps=c=>parseInt(c),cf=c=>{var d,x,S,C,z=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,k=[];if(!z.test(c))return null;if(c==="::")return[0,0,0,0,0,0,0,0];for(c.startsWith("::")?c=c.replace("::","Z:"):c=c.replace("::",":Z:"),c.indexOf(".")>0?(c=c.replace(new RegExp("[.]","g"),":"),d=c.split(":"),d[d.length-4]=Ps(d[d.length-4])+Ps(d[d.length-3])*256,d[d.length-3]=Ps(d[d.length-2])+Ps(d[d.length-1])*256,d=d.slice(0,d.length-2)):d=c.split(":"),S=0,C=0,x=0;x<d.length;x++)if(typeof d[x]=="string")if(d[x]==="Z"){for(C=0;C<8-d.length+1;C++)k[x+C]=0;S=C-1}else k[x+S]=Ta(parseInt(d[x],16));else k[x+S]=d[x];return[k[1]<<16|k[0],k[3]<<16|k[2],k[5]<<16|k[4],k[7]<<16|k[6]]},ca={address_map:{id:1,addrs:{},names:{}},lookup_name(c){var d=Os(c);if(d!==null||(d=cf(c),d!==null))return c;var x;if(ca.address_map.addrs[c])x=ca.address_map.addrs[c];else{var S=ca.address_map.id++;j(S<65535,"exceeded max address mappings of 65535"),x="172.29."+(S&255)+"."+(S&65280),ca.address_map.names[x]=c,ca.address_map.addrs[c]=x}return x},lookup_addr(c){return ca.address_map.names[c]?ca.address_map.names[c]:null}},uf=c=>{var d=Sa(c);return Os(ca.lookup_name(d))},ff=(c,d,x)=>oe.copyWithin(c,d,d+x),Fs=(c,d)=>{var x=Je[c];return x===void 0&&rt(`${d} has unknown type ${Ji(c)}`),x},ic=(c,d,x)=>{var S=[],C=c.toWireType(S,x);return S.length&&($[d>>2]=Rt.toHandle(S)),C},hf=(c,d,x)=>(c=Rt.toValue(c),d=Fs(d,"emval::as"),ic(d,x,c)),df={},Jo=c=>{var d=df[c];return d===void 0?ze(c):d},Zr=[],pf=(c,d,x,S,C)=>(c=Zr[c],d=Rt.toValue(d),x=Jo(x),c(d,d[x],S,C)),ac=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),mf=c=>c===0?Rt.toHandle(ac()):(c=Jo(c),Rt.toHandle(ac()[c])),rc=c=>{var d=Zr.length;return Zr.push(c),d},gf=(c,d)=>{for(var x=new Array(c),S=0;S<c;++S)x[S]=Fs($[d+S*4>>2],"parameter "+S);return x},xf=(c,d,x)=>{var S=gf(c,d),C=S.shift();c--;var z=`return function (obj, func, destructorsRef, args) {
`,k=0,K=[];x===0&&K.push("obj");for(var xe=["retType"],Oe=[C],Ke=0;Ke<c;++Ke)K.push("arg"+Ke),xe.push("argType"+Ke),Oe.push(S[Ke]),z+=`  var arg${Ke} = argType${Ke}.readValueFromPointer(args${k?"+"+k:""});
`,k+=S[Ke].argPackAdvance;var ot=x===1?"new func":"func.call";z+=`  var rv = ${ot}(${K.join(", ")});
`,C.isVoid||(xe.push("emval_returnValue"),Oe.push(ic),z+=`  return emval_returnValue(retType, destructorsRef, rv);
`),z+=`};
`,xe.push(z);var mt=ws(Function,xe)(...Oe),nt=`methodCaller<(${S.map(Tt=>Tt.name).join(", ")}) => ${C.name}>`;return rc(mi(nt,mt))},_f=(c,d)=>(c=Rt.toValue(c),d=Rt.toValue(d),Rt.toHandle(c[d])),vf=c=>{c>9&&(cn[c+1]+=1)},yf=()=>Rt.toHandle([]),Sf=c=>Rt.toHandle(Jo(c)),bf=()=>Rt.toHandle({}),Mf=c=>{var d=Rt.toValue(c);ko(d),Oi(c)},Ef=(c,d,x)=>{c=Rt.toValue(c),d=Rt.toValue(d),x=Rt.toValue(x),c[d]=x},$o=(c,d)=>{c=Fs(c,"_emval_take_value");var x=c.readValueFromPointer(d);return Rt.toHandle(x)},Kr=c=>c%4===0&&(c%100!==0||c%400===0),Tf=[0,31,60,91,121,152,182,213,244,274,305,335],sc=[0,31,59,90,120,151,181,212,243,273,304,334],oc=c=>{var d=Kr(c.getFullYear()),x=d?Tf:sc,S=x[c.getMonth()]+c.getDate()-1;return S},zs=(c,d)=>d+2097152>>>0<4194305-!!c?(c>>>0)+d*4294967296:NaN;function lc(c,d,x){var S=zs(c,d),C=new Date(S*1e3);B[x>>2]=C.getSeconds(),B[x+4>>2]=C.getMinutes(),B[x+8>>2]=C.getHours(),B[x+12>>2]=C.getDate(),B[x+16>>2]=C.getMonth(),B[x+20>>2]=C.getFullYear()-1900,B[x+24>>2]=C.getDay();var z=oc(C)|0;B[x+28>>2]=z,B[x+36>>2]=-(C.getTimezoneOffset()*60);var k=new Date(C.getFullYear(),0,1),K=new Date(C.getFullYear(),6,1).getTimezoneOffset(),xe=k.getTimezoneOffset(),Oe=(K!=xe&&C.getTimezoneOffset()==Math.min(xe,K))|0;B[x+32>>2]=Oe}function cc(c,d,x,S,C,z,k){var K=zs(z,k);try{var xe=Gt.getStreamFromFD(C);x&2&&Gt.doMsync(c,xe,d,S,K)}catch(Oe){if(typeof w>"u"||Oe.name!=="ErrnoError")throw Oe;return-Oe.errno}}var ar=(c,d,x,S)=>{var C=new Date().getFullYear(),z=new Date(C,0,1),k=new Date(C,6,1),K=z.getTimezoneOffset(),xe=k.getTimezoneOffset(),Oe=Math.max(K,xe);$[c>>2]=Oe*60,B[d>>2]=+(K!=xe);var Ke=nt=>{var Tt=nt>=0?"-":"+",Ot=Math.abs(nt),bn=String(Math.floor(Ot/60)).padStart(2,"0"),xn=String(Ot%60).padStart(2,"0");return`UTC${Tt}${bn}${xn}`},ot=Ke(K),mt=Ke(xe);xe<K?(Ln(ot,x,17),Ln(mt,S,17)):(Ln(ot,S,17),Ln(mt,x,17))},Af=()=>Date.now();function wf(){return new Error().stack.toString()}var Bs=c=>{Bs.shown||={},Bs.shown[c]||(Bs.shown[c]=1,E&&(c="warning: "+c),W(c))};function uc(c){var d=wf(),x=d.lastIndexOf("_emscripten_log"),S=d.lastIndexOf("_emscripten_get_callstack"),C=d.indexOf(`
`,Math.max(x,S))+1;d=d.slice(C),c&8&&typeof emscripten_source_map>"u"&&(Bs('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),c^=8,c|=16);var z=d.split(`
`);d="";var k=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),K=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),xe=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Oe in z){var Ke=z[Oe],ot="",mt="",nt=0,Tt=0,Ot=xe.exec(Ke);if(Ot&&Ot.length==5)ot=Ot[1],mt=Ot[2],nt=Ot[3],Tt=Ot[4];else if(Ot=k.exec(Ke)||K.exec(Ke),Ot&&Ot.length>=4)ot=Ot[1],mt=Ot[2],nt=Ot[3],Tt=Ot[4]|0;else{d+=Ke+`
`;continue}var bn=!1;if(c&8){var xn=emscripten_source_map.originalPositionFor({line:nt,column:Tt});bn=xn?.source,bn&&(c&64&&(xn.source=xn.source.substring(xn.source.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=`    at ${ot} (${xn.source}:${xn.line}:${xn.column})
`)}(c&16||!bn)&&(c&64&&(mt=mt.substring(mt.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=(bn?`     = ${ot}`:`    at ${ot}`)+` (${mt}:${nt}:${Tt})
`)}return d=d.replace(/\s+$/,""),d}function fc(c,d,x){var S=uc(c);if(!d||x<=0)return Z(S)+1;var C=Ln(S,d,x);return C+1}var rr=()=>2147483648,Qr=()=>rr(),Rf=c=>{var d=O.buffer,x=(c-d.byteLength+65535)/65536|0;try{return O.grow(x),De(),1}catch{}},Is=c=>{var d=oe.length;c>>>=0;var x=rr();if(c>x)return!1;for(var S=1;S<=4;S*=2){var C=d*(1+.2/S);C=Math.min(C,c+100663296);var z=Math.min(x,it(Math.max(c,C),65536)),k=Rf(z);if(k)return!0}return!1},Hs={},hc=()=>D||"./this.program",Ea=()=>{if(!Ea.strings){var c=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:c,_:hc()};for(var x in Hs)Hs[x]===void 0?delete d[x]:d[x]=Hs[x];var S=[];for(var x in d)S.push(`${x}=${d[x]}`);Ea.strings=S}return Ea.strings},el=(c,d)=>{for(var x=0;x<c.length;++x)te[d++]=c.charCodeAt(x);te[d]=0},dc=(c,d)=>{var x=0;return Ea().forEach((S,C)=>{var z=d+x;$[c+C*4>>2]=z,el(S,z),x+=S.length+1}),0},pc=(c,d)=>{var x=Ea();$[c>>2]=x.length;var S=0;return x.forEach(C=>S+=C.length+1),$[d>>2]=S,0},mc=c=>{P(c,new je(c))},Cf=(c,d)=>{mc(c)},Df=Cf;function Uf(c){try{var d=Gt.getStreamFromFD(c);return w.close(d),0}catch(x){if(typeof w>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var Lf=(c,d,x,S)=>{for(var C=0,z=0;z<x;z++){var k=$[d>>2],K=$[d+4>>2];d+=8;var xe=w.read(c,te,k,K,S);if(xe<0)return-1;if(C+=xe,xe<K)break}return C};function Nf(c,d,x,S){try{var C=Gt.getStreamFromFD(c),z=Lf(C,d,x);return $[S>>2]=z,0}catch(k){if(typeof w>"u"||k.name!=="ErrnoError")throw k;return k.errno}}function fi(c,d,x,S,C){var z=zs(d,x);try{if(isNaN(z))return 61;var k=Gt.getStreamFromFD(c);return w.llseek(k,z,S),Ye=[k.position>>>0,(ae=k.position,+Math.abs(ae)>=1?ae>0?+Math.floor(ae/4294967296)>>>0:~~+Math.ceil((ae-+(~~ae>>>0))/4294967296)>>>0:0)],B[C>>2]=Ye[0],B[C+4>>2]=Ye[1],k.getdents&&z===0&&S===0&&(k.getdents=null),0}catch(K){if(typeof w>"u"||K.name!=="ErrnoError")throw K;return K.errno}}var Jr=(c,d,x,S)=>{for(var C=0,z=0;z<x;z++){var k=$[d>>2],K=$[d+4>>2];d+=8;var xe=w.write(c,te,k,K,S);if(xe<0)return-1;if(C+=xe,xe<K)break}return C};function gc(c,d,x,S){try{var C=Gt.getStreamFromFD(c),z=Jr(C,d,x);return $[S>>2]=z,0}catch(k){if(typeof w>"u"||k.name!=="ErrnoError")throw k;return k.errno}}w.createPreloadedFile=Gr,w.staticInit(),re(),bt=p.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},Dt=p.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},ji(),ir=p.UnboundTypeError=jo(Error,"UnboundTypeError");var xc={M:ui,N:En,h:tr,I:Vo,Q:Go,F:As,G:ba,j:Xr,B:la,H:L,C:ee,A:ge,w:le,V:sn,U:Pn,n:Pi,f:ec,b:Ls,a:tc,m:Ma,i:nc,W:sf,J:lf,x:uf,L:ff,e:hf,q:pf,T:Oi,u:mf,p:xf,k:_f,Y:vf,X:yf,r:Sf,Z:bf,o:Mf,c:Ef,d:$o,t:lc,s:cc,O:ar,K:Af,R:fc,z:Qr,y:Is,D:dc,E:pc,S:Df,g:Uf,P:Nf,v:fi,l:gc},Fn=Ae(),tl=c=>(tl=Fn.aa)(c),$r=c=>($r=Fn.ca)(c),$i=c=>($i=Fn.da)(c),Ta=c=>(Ta=Fn.ea)(c),Vs=(c,d)=>(Vs=Fn.fa)(c,d),sr=()=>(sr=Fn.ga)();p.dynCall_viijii=(c,d,x,S,C,z,k)=>(p.dynCall_viijii=Fn.ha)(c,d,x,S,C,z,k),p.dynCall_viiiiji=(c,d,x,S,C,z,k,K)=>(p.dynCall_viiiiji=Fn.ia)(c,d,x,S,C,z,k,K),p.dynCall_jiji=(c,d,x,S,C)=>(p.dynCall_jiji=Fn.ja)(c,d,x,S,C),p.dynCall_iiiiij=(c,d,x,S,C,z,k)=>(p.dynCall_iiiiij=Fn.ka)(c,d,x,S,C,z,k),p.dynCall_iiiiijj=(c,d,x,S,C,z,k,K,xe)=>(p.dynCall_iiiiijj=Fn.la)(c,d,x,S,C,z,k,K,xe),p.dynCall_iiiiiijj=(c,d,x,S,C,z,k,K,xe,Oe)=>(p.dynCall_iiiiiijj=Fn.ma)(c,d,x,S,C,z,k,K,xe,Oe);var or,nl;rn=function c(){or||ua(),or||(rn=c)};function ua(){if(Et>0||!nl&&(nl=1,et(),Et>0))return;function c(){or||(or=1,p.calledRun=1,!N&&(he(),m(p),p.onRuntimeInitialized?.(),ve()))}p.setStatus?(p.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>p.setStatus(""),1),c()},1)):c()}if(p.preInit)for(typeof p.preInit=="function"&&(p.preInit=[p.preInit]);p.preInit.length>0;)p.preInit.pop()();return ua(),f=g,f})})();o.exports=i})(np)),np.exports}var gT=mT();const xT=My(gT),_T="/step-3d-viewer/assets/occt-import-js-BhHfLpto.wasm";let ap=null;const vT={linearUnit:"millimeter",linearDeflectionType:"bounding_box_ratio",linearDeflection:.003,angularDeflection:.4};function w_(){return ap||(ap=xT({locateFile:()=>_T})),ap}const yT="Перетащите .step/.stp файл в область просмотра или воспользуйтесь панелью управления.",ST="Загружаем движок OpenCascade...";function bT(){const o=ht.useRef(null),e=ht.useRef(null),i=ht.useRef(null),r=ht.useRef(null),l=ht.useRef(null),f=ht.useRef(null),p=ht.useRef(0),m=ht.useRef(null),_=ht.useRef(new cb),g=ht.useRef(new Nt),b=ht.useRef(null),v=ht.useRef(null),E=-1e-4,[A,D]=ht.useState(ST),[P,T]=ht.useState(null),[M,X]=ht.useState(!1),[H,q]=ht.useState(!1),[J,G]=ht.useState(!1),[W,fe]=ht.useState(!1),[O,N]=ht.useState("#ffad0d"),[j,te]=ht.useState(null),oe=ht.useCallback(Me=>{const F=b.current;if(F&&F.material instanceof Fr){const Be=F.userData.baseEmissiveHex;typeof Be=="number"&&F.material.emissive.setHex(Be)}Me&&Me.material instanceof Fr?(Me.userData.baseEmissiveHex===void 0&&(Me.userData.baseEmissiveHex=Me.material.emissive.getHex()),Me.material.emissive.setHex(2964090),b.current=Me,te(Me.name||"Без имени"),typeof Me.userData.paintColorHex=="string"&&N(Me.userData.paintColorHex)):(b.current=null,te(null))},[N]),Se=ht.useCallback(Me=>{const F=m.current;F&&F.traverse(Be=>{Be instanceof Yi&&Me(Be)})},[]),ye=ht.useCallback((Me,F)=>{const Be=e.current,tt=r.current,xt=m.current;if(!Be||!tt||!xt)return null;const We=Be.domElement.getBoundingClientRect();g.current.x=(Me-We.left)/We.width*2-1,g.current.y=-((F-We.top)/We.height)*2+1,_.current.setFromCamera(g.current,tt);const He=_.current.intersectObjects(xt.children,!0).find(dt=>dt.object instanceof Yi&&dt.object.visible&&!dt.object.userData?.extinguished);return He?He.object:null},[]),B=ht.useCallback((Me,F)=>{const Be=ye(Me,F);return oe(Be),!!Be},[ye,oe]);ht.useEffect(()=>{let Me=!0;return w_().then(()=>{Me&&(fe(!0),D(yT))}).catch(F=>{console.error(F),Me&&(T("Не удалось загрузить движок OpenCascade"),D("Попробуйте обновить страницу"))}),()=>{Me=!1}},[]),ht.useEffect(()=>{if(!o.current)return;const Me=new KS;Me.background=new Kt("#06070f"),i.current=Me;const F=new J3({antialias:!0,alpha:!0});F.setPixelRatio(window.devicePixelRatio),e.current=F;const Be=new Wi(45,1,.1,2e3);Be.position.set(4,4,4),r.current=Be;const tt=new eT(Be,F.domElement);tt.enableDamping=!0,tt.dampingFactor=.08,l.current=tt;const xt=new ob(16777215,.6),We=new Kx(16777215,.85);We.position.set(5,10,4);const Bt=new Kx(16777215,.45);Bt.position.set(-4,-6,-5),Me.add(xt,We,Bt);const He=new ub(60,60,3093826,1842985);He.position.y=E,(Array.isArray(He.material)?He.material:[He.material]).forEach(Ae=>{Ae.transparent=!0,Ae.opacity=.4,Ae.depthWrite=!1}),He.visible=!0,v.current=He,Me.add(He);const I=o.current;I.appendChild(F.domElement);const R=Ae=>{if(Ae.button===2)return;const ae=ye(Ae.clientX,Ae.clientY);oe(ae)},se=()=>{if(!I||!r.current)return;const{clientWidth:Ae,clientHeight:ae}=I;F.setSize(Ae,ae);const Ye=r.current;Ye.aspect=Ae/Math.max(ae,1),Ye.updateProjectionMatrix()};se(),window.addEventListener("resize",se),F.domElement.addEventListener("pointerdown",R);const Ee=()=>{tt.update(),F.render(Me,Be),f.current=requestAnimationFrame(Ee)};return Ee(),()=>{window.removeEventListener("resize",se),F.domElement.removeEventListener("pointerdown",R),f.current&&cancelAnimationFrame(f.current),tt.dispose(),F.dispose(),v.current&&i.current?.children.includes(v.current)&&i.current.remove(v.current),v.current=null,I.contains(F.domElement)&&I.removeChild(F.domElement)}},[oe,ye]);const $=ht.useCallback(()=>{!i.current||!m.current||(i.current.remove(m.current),m.current.traverse(Me=>{Me instanceof Yi&&(Me.geometry.dispose(),Array.isArray(Me.material)?Me.material.forEach(F=>F.dispose()):Me.material.dispose())}),m.current=null,v.current&&(v.current.visible=!0,v.current.position.y=E),oe(null))},[oe]),ie=ht.useCallback(Me=>{const F=r.current,Be=l.current;if(!F||!Be)return;Me.updateMatrixWorld(!0);const tt=new Bo().setFromObject(Me),xt=tt.getSize(new me),We=tt.getCenter(new me);Me.position.sub(We);const Bt=Math.max(xt.x,xt.y,xt.z),He=Bt===0?5:Bt*1.6,dt=new me(1.5,1,1.2).normalize();F.position.copy(dt.multiplyScalar(He)),F.near=Math.max(He/200,.01),F.far=He*20,F.updateProjectionMatrix(),Be.target.set(0,0,0),Be.update()},[]),we=ht.useCallback(Me=>{if(!i.current)return;$();const F=new Xl;Me.meshes.forEach((Be,tt)=>{const xt=new oa,We=Be.attributes.position?.array??[];xt.setAttribute("position",new Ni(We,3));const Bt=Be.attributes.normal?.array;Bt?.length?xt.setAttribute("normal",new Ni(Bt,3)):xt.computeVertexNormals(),Be.index?.array?.length&&xt.setIndex(Be.index.array);const He=Be.color??Be.brep_faces?.find(Ee=>Ee.color)?.color??[.82,.86,.92],dt=new Kt(He[0],He[1],He[2]),I=new Fr({color:dt,metalness:.15,roughness:.35,side:ga}),R=`#${dt.getHexString()}`,se=new Yi(xt,I);se.name=Be.name??`Mesh-${tt+1}`,se.userData.originalColorHex=R,se.userData.paintColorHex=R,F.add(se)}),i.current.add(F),m.current=F,G(!0),ie(F),v.current&&(v.current.visible=!1),oe(null)},[$,ie,oe]),De=ht.useCallback(()=>{const Me=b.current;return!Me||!(Me.material instanceof Fr)?!1:(Me.material.color.set(O),Me.material.needsUpdate=!0,Me.userData.paintColorHex=O,!0)},[O]),V=ht.useCallback(Me=>{const F=b.current;return!F||!(F.material instanceof Fr)?!1:(F.material.color.set(Me),F.material.needsUpdate=!0,F.userData.paintColorHex=Me,N(Me),!0)},[]),pe=ht.useCallback(()=>{const Me=b.current;if(!Me||!(Me.material instanceof Fr))return!1;const F=Me.userData.originalColorHex||"#d5dde8";return Me.material.color.set(F),Me.material.needsUpdate=!0,Me.userData.paintColorHex=F,!0},[]),Ue=ht.useCallback(()=>{const Me=[];return Se(F=>{if(!(F.material instanceof Fr))return;const Be=typeof F.userData.paintColorHex=="string"?F.userData.paintColorHex:`#${F.material.color.getHexString()}`;Me.push({name:F.name||"",color:Be,visible:F.visible})}),Me.length?{version:1,generatedAt:new Date().toISOString(),meshes:Me}:null},[Se]),Fe=ht.useCallback(Me=>{if(!Me||Me.version!==1)return!1;const F=new Map,Be=[];return Se(tt=>{Be.push(tt);const xt=tt.name||"__noname__";F.has(xt)||F.set(xt,[]),F.get(xt).push(tt)}),Be.length?(Me.meshes.forEach((tt,xt)=>{const We=tt.name||"__noname__";let He=F.get(We)?.shift();if(He||(He=Be[xt]),!He||!(He.material instanceof Fr))return;const dt=tt.color||"#d5dde8";He.material.color.set(dt),He.material.needsUpdate=!0,He.userData.paintColorHex=dt,He.visible=tt.visible!==!1}),(!b.current||!b.current.visible)&&oe(null),!0):!1},[Se,oe]),et=ht.useCallback(()=>{const Me=b.current;return Me?(Me.visible=!1,Me.userData.extinguished=!0,oe(null),!0):!1},[oe]),he=ht.useCallback(async(Me,F)=>{X(!0),T(null),D(`Импортируем ${F}...`);try{const Be=await w_(),tt=new Uint8Array(Me),xt=Be.ReadStepFile(tt,vT);if(!xt?.success||!xt.meshes?.length)throw new Error("OCCT вернул пустой результат");we(xt),D(`Готово: ${F} (${xt.meshes.length} объектов)`)}catch(Be){console.error(Be),G(!1),v.current&&(v.current.visible=!0,v.current.position.y=E);const tt=Be instanceof Error?Be.message:"Неизвестная ошибка при импорте файла";T(tt),D("Импорт не удался")}finally{X(!1)}},[we]),ve=ht.useCallback(async Me=>{const F=await Me.arrayBuffer();await he(F,Me.name)},[he]),Xe=ht.useCallback(async Me=>{const F=Me.target.files?.[0];F&&await ve(F),Me.target.value=""},[ve]),st=ht.useCallback(async(Me,F="пример",Be)=>{D(`Загружаем ${F}...`),T(null);try{const tt=await fetch(Me);if(!tt.ok)throw new Error("Не удалось получить пример");const xt=await tt.arrayBuffer();await he(xt,Be??`${F}.step`)}catch(tt){console.error(tt),T(tt instanceof Error?tt.message:"Ошибка загрузки примера"),D("Попробуйте другой файл")}},[he]),ft=ht.useCallback(async Me=>{Me.preventDefault(),p.current=0,q(!1);const F=Me.dataTransfer.files?.[0];F&&await ve(F)},[ve]),Et=ht.useCallback(Me=>{Me.preventDefault(),Me.dataTransfer.dropEffect="copy"},[]),rn=ht.useCallback(Me=>{Me.preventDefault(),p.current+=1,q(!0)},[]),Lt=ht.useCallback(Me=>{Me.preventDefault(),p.current=Math.max(p.current-1,0),p.current===0&&q(!1)},[]);return{canvasHostRef:o,status:A,error:P,isLoading:M,occtReady:W,hasModel:J,isDragActive:H,controlsDisabled:!W||M,handleDragEnter:rn,handleDragLeave:Lt,handleDragOver:Et,handleDrop:ft,handleFileInput:Xe,loadSample:st,selectionColor:O,setSelectionColor:N,selectedMeshName:j,applyColorToSelection:De,applyColorToSelectionWithValue:V,resetSelectionColor:pe,extinguishSelection:et,selectMeshAtScreenPosition:B,serializeSceneState:Ue,applySceneState:Fe}}function MT({canvasRef:o,hasModel:e,isDragActive:i,isLoading:r,isPanelOpen:l,panelId:f,onContextMenu:p,onTouchStart:m,onTouchMove:_,onTouchEnd:g,onDragEnter:b,onDragLeave:v,onDragOver:E,onDrop:A,onTogglePanel:D,children:P}){return _t.jsxs("section",{className:`viewer ${i?"viewer--active":""}`,onContextMenu:p,onTouchStart:m,onTouchMove:_,onTouchEnd:g,onDragEnter:b,onDragOver:E,onDragLeave:v,onDrop:A,children:[_t.jsx("div",{ref:o,className:"viewer__canvas"}),!e&&_t.jsxs("div",{className:"viewer__placeholder",children:[_t.jsx("p",{children:"Сюда можно перетащить .step/.stp файл."}),_t.jsx("p",{className:"muted",children:"Либо воспользуйтесь панелью управления."})]}),i&&_t.jsx("div",{className:"viewer__drop-hint",children:"Отпустите файл, чтобы начать импорт"}),r&&_t.jsxs("div",{className:"viewer__loading","aria-live":"polite",children:[_t.jsx("div",{className:"viewer__loading-spinner"}),_t.jsx("p",{children:"Импортируем модель..."})]}),!l&&_t.jsx("button",{type:"button",className:"panel-toggle","aria-expanded":!1,"aria-controls":f,onClick:D,children:"Меню"}),P]})}function ET({samples:o,disabled:e,onSelect:i}){return _t.jsxs("section",{className:"sample-library","aria-label":"Библиотека примеров",children:[_t.jsxs("div",{className:"sample-library__header",children:[_t.jsx("p",{className:"section-label",children:"Библиотека примеров"}),_t.jsx("span",{className:"sample-library__count",children:o.length})]}),_t.jsxs("div",{className:"sample-library__list",children:[o.length===0&&_t.jsxs("span",{className:"sample-library__empty",children:["Добавьте .step/.stp файлы в папку ",_t.jsx("code",{children:"public/models"})]}),o.map(r=>_t.jsxs("button",{type:"button",className:"sample-card",onClick:()=>i(r),disabled:e,title:`Открыть ${r.fileName}`,children:[_t.jsx("span",{className:"sample-card__label",children:r.label}),_t.jsx("span",{className:"sample-card__meta",children:r.fileName})]},r.fileName))]})]})}function TT({className:o,ariaHidden:e,error:i,isLoading:r,controlsDisabled:l,onFileChange:f,onHidePanel:p,selectionColor:m,onSelectionColorChange:_,selectedMeshName:g,onApplyColor:b,onResetColor:v,onSaveSceneState:E,onLoadSceneState:A,sceneStateDisabled:D,samples:P,onSampleSelect:T,children:M}){const X=ht.useRef(null),H=q=>{const J=q.target.files?.[0];J&&A(J),q.target.value=""};return _t.jsxs("aside",{id:"control-panel",className:o,"aria-hidden":e,children:[_t.jsx("button",{type:"button",className:"panel-close",onClick:p,"aria-label":"Скрыть меню",children:_t.jsx("span",{"aria-hidden":"true",children:"←"})}),_t.jsxs("div",{className:"panel__header",children:[_t.jsx("p",{className:"eyebrow",children:"WebAssembly + three.js"}),_t.jsx("h1",{children:"STEP 3D Viewer"}),_t.jsx("p",{className:"subtitle",children:"Просмотр .step/.stp файлов прямо в браузере: загрузите свой файл или воспользуйтесь готовым примером."})]}),_t.jsxs("div",{className:"controls",children:[_t.jsxs("label",{className:"file-input","data-disabled":l,children:[_t.jsx("input",{type:"file",accept:".step,.stp,model/step,application/step",onChange:f,disabled:l}),_t.jsx("span",{children:"Выбрать .step файл"})]}),r&&_t.jsx("div",{className:"loader","aria-live":"polite"})]}),_t.jsx(ET,{samples:P,disabled:l,onSelect:T}),i&&_t.jsx("div",{className:"error-banner",children:i}),_t.jsxs("div",{className:"color-controls",children:[_t.jsxs("div",{className:"color-input",children:[_t.jsx("label",{htmlFor:"color-picker",children:"Цвет"}),_t.jsx("input",{id:"color-picker",type:"color",value:m,onChange:_,"aria-label":"Выбор цвета для выделения"})]}),_t.jsxs("div",{className:"selection-info",children:[_t.jsx("span",{className:"selection-label",children:g?`Выбрано: ${g}`:"Ничего не выбрано"}),_t.jsxs("div",{className:"selection-actions",children:[_t.jsx("button",{type:"button",className:"secondary",onClick:b,disabled:!g,children:"Применить цвет"}),_t.jsx("button",{type:"button",className:"ghost",onClick:v,disabled:!g,children:"Сбросить"})]})]})]}),_t.jsxs("div",{className:"scene-state-actions",children:[_t.jsx("p",{className:"section-label",children:"Изменения"}),_t.jsxs("div",{className:"scene-state-actions__buttons",children:[_t.jsx("button",{type:"button",className:"secondary",onClick:E,disabled:D,children:"Сохранить"}),_t.jsx("button",{type:"button",className:"ghost",onClick:()=>X.current?.click(),disabled:D,children:"Загрузить"})]}),_t.jsx("input",{ref:X,type:"file",accept:"application/json",onChange:H,style:{display:"none"}})]}),M]})}function AT({x:o,y:e,onExtinguish:i,onChangeColor:r,currentColor:l}){const f=p=>{p.stopPropagation()};return _t.jsxs("div",{className:"context-menu",style:{top:`${e}px`,left:`${o}px`},role:"menu",onClick:f,onPointerDown:f,children:[_t.jsxs("div",{className:"context-menu__group",children:[_t.jsx("p",{className:"context-menu__label",children:"Цвет выделения"}),_t.jsx("input",{type:"color","aria-label":"Выбрать цвет выделенного тела",value:l,onChange:p=>r(p.target.value)})]}),_t.jsx("button",{type:"button",role:"menuitem",onClick:i,children:"Погасить выделенное тело"})]})}const wT=[{fileName:"ins100.stp",url:"/step-3d-viewer/models/ins100.stp"},{fileName:"masterpact-lv864962.stp",url:"/step-3d-viewer/models/masterpact-lv864962.stp"},{fileName:"nsx-lv432956.stp",url:"/step-3d-viewer/models/nsx-lv432956.stp"}],RT=o=>o.replace(/\.(step|stp)$/i,"").replace(/[-_]+/g," "),CT=wT.map(({fileName:o,url:e})=>({label:RT(o),fileName:o,url:e})).sort((o,e)=>o.label.localeCompare(e.label,"ru"));function DT(){const o=bT(),{selectMeshAtScreenPosition:e,selectedMeshName:i,serializeSceneState:r,applySceneState:l,hasModel:f}=o,[p,m]=ht.useState(!1),[_,g]=ht.useState(!1),[b,v]=ht.useState(null),E=ht.useRef(null),A=ht.useRef(null);ht.useEffect(()=>{const O=window.matchMedia("(max-width: 768px)"),N=te=>{g(te),te&&m(!1)};N(O.matches);const j=te=>{N(te.matches),te.matches&&m(!1)};return O.addEventListener?O.addEventListener("change",j):O.addListener(j),()=>{O.removeEventListener?O.removeEventListener("change",j):O.removeListener(j)}},[]);const D=ht.useMemo(()=>["control-panel",_?"control-panel--mobile":"",p?"control-panel--open":"control-panel--collapsed"].filter(Boolean).join(" "),[_,p]),P="control-panel",T=ht.useCallback(()=>{const O=r();if(!O){alert("Нет модели для сохранения.");return}const N=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),j=URL.createObjectURL(N),te=document.createElement("a");te.href=j,te.download=`step-viewer-state-${new Date().toISOString().replace(/[:.]/g,"-")}.json`,te.click(),URL.revokeObjectURL(j)},[r]),M=ht.useCallback(async O=>{try{const N=await O.text(),j=JSON.parse(N);l(j)||alert("Не удалось применить сохранённое состояние.")}catch(N){console.error(N),alert("Не удалось прочитать файл состояния.")}},[l]),X=ht.useCallback(()=>{E.current!==null&&(window.clearTimeout(E.current),E.current=null)},[]),H=ht.useCallback((O,N)=>!e(O,N)&&!i?(v(null),!1):(v({x:O,y:N}),!0),[e,i]),q=ht.useCallback(O=>{O.preventDefault(),O.stopPropagation(),H(O.clientX,O.clientY)},[H]),J=ht.useCallback(O=>{if(O.touches.length!==1){X();return}const N=O.touches[0];A.current={x:N.clientX,y:N.clientY},X(),E.current=window.setTimeout(()=>{const j=A.current;j&&(H(j.x,j.y),X())},550)},[X,H]),G=ht.useCallback(O=>{if(!A.current)return;const N=O.touches[0],j=N.clientX-A.current.x,te=N.clientY-A.current.y;Math.hypot(j,te)>15&&X()},[X]),W=ht.useCallback(()=>{X(),A.current=null},[X]);ht.useEffect(()=>{if(!b)return;const O=j=>{j.button!==0&&j.pointerType!=="touch"||v(null)},N=()=>v(null);return window.addEventListener("pointerdown",O),window.addEventListener("resize",N),()=>{window.removeEventListener("pointerdown",O),window.removeEventListener("resize",N)}},[b]),ht.useEffect(()=>()=>{X()},[X]),ht.useEffect(()=>{i||v(null)},[i]);const fe=()=>{o.extinguishSelection(),v(null)};return _t.jsx("div",{className:"app","data-panel-open":p,"data-mobile-layout":_,children:_t.jsxs(MT,{canvasRef:o.canvasHostRef,hasModel:o.hasModel,isDragActive:o.isDragActive,isLoading:o.isLoading,isPanelOpen:p,panelId:P,onContextMenu:q,onTouchStart:J,onTouchMove:G,onTouchEnd:W,onDragEnter:o.handleDragEnter,onDragLeave:o.handleDragLeave,onDragOver:o.handleDragOver,onDrop:o.handleDrop,onTogglePanel:()=>m(!0),children:[_t.jsx(TT,{className:D,ariaHidden:!p,error:o.error,isLoading:o.isLoading,controlsDisabled:o.controlsDisabled,onFileChange:o.handleFileInput,onHidePanel:()=>m(!1),selectionColor:o.selectionColor,onSelectionColorChange:O=>o.setSelectionColor(O.target.value),selectedMeshName:o.selectedMeshName,onApplyColor:o.applyColorToSelection,onResetColor:o.resetSelectionColor,onSaveSceneState:T,onLoadSceneState:M,sceneStateDisabled:!f,samples:CT,onSampleSelect:O=>o.loadSample(O.url,O.label,O.fileName)}),b&&_t.jsx(AT,{x:b.x,y:b.y,onExtinguish:fe,onChangeColor:O=>o.applyColorToSelectionWithValue(O),currentColor:o.selectionColor})]})})}Oy.createRoot(document.getElementById("root")).render(_t.jsx(ht.StrictMode,{children:_t.jsx(DT,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/step-3d-viewer/sw.js").catch(e=>{console.error("Service worker registration failed:",e)})});
