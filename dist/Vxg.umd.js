(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vuetify/lib/components/VMain"), require("vuetify/lib/components/VIcon"), require("vuetify/lib/components/VGrid"), require("vuetify/lib/components/VTextField"), require("vuetify/lib/components/VChip"), require("vuetify/lib/components/VApp"), require("vuetify/lib/components/VBtn"), require("vuetify/lib/components/VNavigationDrawer"), require("vuetify/lib/components/VSheet"), require("vuetify/lib/components/VDataTable"), require("vuetify/lib/components/VSelect"), require("vuetify/lib/components/VAppBar"), require("vuetify/lib/components/VToolbar"), require("vuetify/lib/components/VDivider"));
	else if(typeof define === 'function' && define.amd)
		define(["vuetify/lib/components/VMain", "vuetify/lib/components/VIcon", "vuetify/lib/components/VGrid", "vuetify/lib/components/VTextField", "vuetify/lib/components/VChip", "vuetify/lib/components/VApp", "vuetify/lib/components/VBtn", "vuetify/lib/components/VNavigationDrawer", "vuetify/lib/components/VSheet", "vuetify/lib/components/VDataTable", "vuetify/lib/components/VSelect", "vuetify/lib/components/VAppBar", "vuetify/lib/components/VToolbar", "vuetify/lib/components/VDivider"], factory);
	else if(typeof exports === 'object')
		exports["Vxg"] = factory(require("vuetify/lib/components/VMain"), require("vuetify/lib/components/VIcon"), require("vuetify/lib/components/VGrid"), require("vuetify/lib/components/VTextField"), require("vuetify/lib/components/VChip"), require("vuetify/lib/components/VApp"), require("vuetify/lib/components/VBtn"), require("vuetify/lib/components/VNavigationDrawer"), require("vuetify/lib/components/VSheet"), require("vuetify/lib/components/VDataTable"), require("vuetify/lib/components/VSelect"), require("vuetify/lib/components/VAppBar"), require("vuetify/lib/components/VToolbar"), require("vuetify/lib/components/VDivider"));
	else
		root["Vxg"] = factory(root["vuetify/lib/components/VMain"], root["vuetify/lib/components/VIcon"], root["vuetify/lib/components/VGrid"], root["vuetify/lib/components/VTextField"], root["vuetify/lib/components/VChip"], root["vuetify/lib/components/VApp"], root["vuetify/lib/components/VBtn"], root["vuetify/lib/components/VNavigationDrawer"], root["vuetify/lib/components/VSheet"], root["vuetify/lib/components/VDataTable"], root["vuetify/lib/components/VSelect"], root["vuetify/lib/components/VAppBar"], root["vuetify/lib/components/VToolbar"], root["vuetify/lib/components/VDivider"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__1faa__, __WEBPACK_EXTERNAL_MODULE__354e__, __WEBPACK_EXTERNAL_MODULE__5f3c__, __WEBPACK_EXTERNAL_MODULE__6881__, __WEBPACK_EXTERNAL_MODULE__6b38__, __WEBPACK_EXTERNAL_MODULE__7013__, __WEBPACK_EXTERNAL_MODULE__863d__, __WEBPACK_EXTERNAL_MODULE__8ece__, __WEBPACK_EXTERNAL_MODULE__8fd1__, __WEBPACK_EXTERNAL_MODULE_b1bf__, __WEBPACK_EXTERNAL_MODULE_bfa4__, __WEBPACK_EXTERNAL_MODULE_d7c8__, __WEBPACK_EXTERNAL_MODULE_e34a__, __WEBPACK_EXTERNAL_MODULE_ffda__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "062a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1faa":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1faa__;

/***/ }),

/***/ "2eac":
/***/ (function(module, exports, __webpack_require__) {

!function(e){if(true)module.exports=e();else {}}((function(){var e={exports:{}};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.make=e.exports.util=e.exports.Alt=e.exports.RuleSpec=e.exports.Rule=e.exports.Parser=e.exports.Lexer=e.exports.JsonicError=e.exports.Jsonic=void 0;const t=Object.keys,n=Object.entries,r=Object.assign,s=Object.defineProperty,l="object",i="string",o="function",c="unexpected",a="map",u="list",p="elem",h="pair",d="val",m="node",f="",g="unprintable",b="invalid_ascii",x="invalid_unicode",v="invalid_lex_state",k="unterminated",y="lex",w="parse",C="block_indent_",S="error",A="none",N="END_OF_SOURCE",j="imp,map",_="imp,list",I="imp,null",T="end",E="open",L="close",O="rule",P="stack",R="null",M="name",$="make";class U extends SyntaxError{constructor(e,t,n,s,l){let i=pe(e,t=K({},t),n,s,l);super(i.message),r(this,i),ne(this)}toJSON(){return{...this,__error:!0,name:this.name,message:this.message,stack:this.stack}}}e.exports.JsonicError=U;class B{constructor(e){this.match={},z("@LTP",e),z("@LTX",e),z("@LCS",e),z("@LML",e),this.end={tin:z("#ZZ",e),loc:0,len:0,row:0,col:0,val:void 0,src:void 0}}start(e){const n=e.opts,r=e.cnfg;let s=e=>z(e,r),l=e=>z(e,r),i=e.F,a=s("@LTP"),u=s("@LTX"),p=s("@LCS"),h=s("@LML"),d=s("#ZZ"),m=s("#SP"),w=s("#CM"),S=s("#NR"),A=s("#ST"),N=s("#TX"),j=s("#VL"),_=s("#LN"),I={tin:d,loc:0,row:0,col:0,len:0,val:void 0,src:void 0},T=0,E=0,L=0,O=a,P=null,R=e.src(),M=R.length,$=null!=e.log?(...t)=>e.log(y,l(I.tin),i(I.src),T,E+":"+L,l(O),{...I},...t):void 0,U=(t,n,r,s)=>this.bad(e,$,t,I,T,n,E,L,r,r,s),B=t=>{let n=this.match[O];if(null!=n)for(let r of n){let n=r({sI:T,rI:E,cI:L,src:R,token:I,ctx:e,rule:t,bad:U});if(n)return T=n.sI?n.sI:T,E=n.rI?n.rI:E,L=n.cI?n.cI:L,O=null==n.state?O:n.state,P=null==n.state_param?P:n.state_param,$&&$(I,r),I}},D=function(s){I.len=0,I.val=void 0,I.src=void 0,I.row=E,I.use=void 0;let l={},i=0,y=[];e:for(;T<M;){let d=R[T];if(I.loc=T,I.col=L,e.xs=O,a!==O){if(u===O){if(B(s))return I;i=T;let e=R.substring(T).match(r.re.te);if(e){let t=e[0].length;i+=t,L+=t}return I.len=i-T,I.tin=N,I.val=R.substring(T,i),I.src=I.val,T=i,O=a,$&&$(I),I}if(p===O){if(B(s))return I;for(i=T;i<M&&!l[R[i]];)i++,L++;return I.val+=R.substring(T,i),I.src=I.val,I.len=I.val.length,T=i,O=a,$&&$(I),I}if(h===O){if(B(s))return I;i=T;let e=1,l=P[0],o=P[1],c=P[2],u=!!P[3],p="",h=0,d=l.length,m=o.length;if(u){let e=T-1;for(;-1<e&&r.m.SP[R[e]];)e--;0<(h=T-e-1)&&(p=t(r.m.SP)[0].repeat(h))}for(i+=l.length;i<M&&0<e;)o[0]===R[i]&&o===R.substring(i,i+m)?(i+=m,L+=m,e--):c&&l[0]===R[i]&&l===R.substring(i,i+d)?(i+=d,L+=m,e++):(n.line.row===R[i]?(E++,L=0):L++,i++);if(I.val=R.substring(T,i),I.src=I.val,I.len=I.val.length,u){I.val=I.val.substring(d,I.val.length-m),null==r.re.block_prefix&&(r.re.block_prefix=ie(f,"^[",le(n.token["#SP"]),"]*(",n.line.sep,")")),I.val=I.val.replace(r.re.block_prefix,""),null==r.re.block_suffix&&(r.re.block_suffix=ie(f,n.line.sep,"[",le(n.token["#SP"]),"]*$")),I.val=I.val.replace(r.re.block_suffix,"");let e=r.re[C+p]=r.re[C+p]||ie("g","^(",le(p),")|((",n.line.sep,")",le(p),")");I.val=I.val.replace(e,"$3")}return T=i,O=a,$&&$(I),I}return U(v,T,R[T],{state:O})}if(B(s))return I;if(n.space.lex&&r.m.SP[d]){for(I.tin=m,L++,i=T+1;r.m.SP[R[i]];)L++,i++;return I.len=i-T,I.val=R.substring(T,i),I.src=I.val,T=i,$&&$(I),I}if(n.line.lex&&r.m.LN[d]){for(I.tin=_,i=T,L=0;r.m.LN[R[i]];)E+=n.line.row===R[i]?1:0,i++;return I.len=i-T,I.val=R.substring(T,i),I.src=I.val,T=i,$&&$(I),I}if(n.number.lex&&r.m.NR[d]){let e=R.substring(T).match(r.re.nm);if(null!=e){let t=e[0];if(i=T+t.length,null==R[i]||r.cs.vend[R[i]]){let e=+(r.re.ns?t.replace(r.re.ns,""):t);if(!isNaN(e))return I.tin=S,I.src=t,I.val=e,I.len=t.length,T+=I.len,L+=I.len,$&&$(I),I}}}if(null!=r.sm[d])return I.tin=r.sm[d],I.len=1,I.src=d,T++,L++,$&&$(I),I;if(n.block.lex&&r.cs.bs[d]){let e=R.substring(T,T+r.bmx);for(let t of r.bmk)if(e.startsWith(t)){I.tin=A,O=h,P=[t,n.block.marker[t],null,!0];continue e}}if(n.string.lex&&r.m.ST[d]){I.tin=A,L++;let e=r.cs.mln[d];y=[];let t="";for(i=T+1;i<M;i++)if(L++,d===(t=R[i])){if(!n.string.escapedouble||d!==R[i+1]){i++;break}y.push(R[i]),i++}else if("\\"===t){i++,L++;let e=r.esc[R[i]];if(null!=e)y.push(e);else if("x"===R[i]){i++;let e=parseInt(R.substring(i,i+2),16);if(isNaN(e))return T=i-2,L-=2,U(b,i+2,R.substring(i-2,i+2));let t=String.fromCharCode(e);y.push(t),i+=1,L+=2}else if("u"===R[i]){let e="{"===R[++i]?(i++,1):0,t=e?6:4,n=parseInt(R.substring(i,i+t),16);if(isNaN(n))return T=i-2-e,L-=2,U(x,i+t+1,R.substring(i-2-e,i+t+e));let r=String.fromCodePoint(n);y.push(r),i+=t-1+e,L+=t+e}else y.push(R[i])}else{let s=i,l=d.charCodeAt(0),o="\\".charCodeAt(0),c=R.charCodeAt(i);for(;i<M&&32<=c&&l!==c&&o!==c;)c=R.charCodeAt(++i),L++;if(L--,t=R[i],c<32){if(!e||!r.m.LN[t])return U(g,i,"char-code="+R[i].charCodeAt(0));t===n.line.row&&(E++,L=0),y.push(R.substring(s,i+1))}else y.push(R.substring(s,i)),i--}return d!==t?U(k,i,y.join("")):(I.val=y.join(""),I.src=R.substring(T,i),I.len=i-T,T=i,$&&$(I),I)}if(n.comment.lex&&r.cs.cs[d]){let e=R.substring(T,T+r.cmx);for(let t of r.cmk)if(e.startsWith(t)){if(!0!==r.cm[t]){I.tin=w,I.val="",O=h,P=[t,r.cm[t],n.comment.balance];continue e}break}I.tin=w,I.val="",O=p,l=r.m.LN}else{if(n.value.lex&&r.vs[d]){i=T;do{i++}while(null!=R[i]&&!r.cs.vend[R[i]]);let t=R.substring(T,i),n=r.vm[t];if(void 0!==(n=o===typeof n?n({sI:T,rI:E,cI:L,src:R,token:I,ctx:e,rule:s,bad:U}):n))return I.tin=j,I.val=n,I.src=t,I.len=i-T,L+=I.len,T=i,$&&$(I),I}if(!n.text.lex)return U(c,T,R[T]);O=u}}return I.tin=d,I.loc=M,I.col=L,$&&$(I),I};return D.src=R,D}bad(e,t,n,r,s,l,i,o,c,a,u){return r.why=n,r.tin=z("#BD",e.cnfg),r.loc=s,r.row=i,r.col=o,r.len=l-s,r.val=c,r.src=a,r.use=u,t&&t(z(r.tin,e.cnfg),e.F(r.src),s,i+":"+o,{...r},S,n),r}lex(e,t){if(null==e)return this.match;let n=this.match[e];return null!=t?(null==n&&(n=this.match[e]=[]),n.push(t)):null===t&&(n=this.match[e],delete this.match[e]),n}clone(e){let t=new B(e);return K(t.match,this.match),t}}var D;e.exports.Lexer=B,function(e){e[e.open=0]="open",e[e.close=1]="close"}(D||(D={}));class F{constructor(e,t,n){this.id=t.uI++,this.name=e.name,this.spec=e,this.node=n,this.state=D.open,this.child=J,this.open=[],this.close=[],this.n={},this.use={},this.bo=!1!==e.bo,this.ao=!1!==e.ao,this.bc=!1!==e.bc,this.ac=!1!==e.ac}process(e){return this.spec.process(this,e,this.state)}}e.exports.Rule=F;const J={name:A,state:0};class Z{constructor(){this.m=[],this.p="",this.r="",this.b=0}}e.exports.Alt=Z;const V=new Z,Y=new Z;class W{constructor(e){function t(e){let t=null!=e.c&&e.c.n;t&&(e.c=e=>{let n=!0;for(let r in t)n=n&&(null==e.n[r]||e.n[r]<=t[r]);return n}),i===typeof e.g&&(e.g=e.g.split(/\s*,\s*/))}this.name="-",this.bo=!0,this.ao=!0,this.bc=!0,this.ac=!0,this.def=e||{},this.def.open=this.def.open||[],this.def.close=this.def.close||[];for(let n of[...this.def.open,...this.def.close])t(n)}process(e,t,n){let r,s="",l=t.F,i=n===D.open,o=i?e:J,a=this.def,u=i?a.open:a.close,p=i?e.bo&&a.bo:e.bc&&a.bc;if(p&&(r=p.call(this,e,t))){if(r.err)throw new U(r.err,{...r,state:i?E:L},t.t0,e,t);e.node=r.node||e.node}let h=r&&r.alt?{...Y,...r.alt}:0<u.length?this.parse_alts(u,e,t):Y;if(h.h&&(h=h.h(e,t,h,o)||h,s+="H"),i?e.open=h.m:e.close=h.m,h.e)throw new U(c,{...h.e.use,state:i?E:L},h.e,e,t);if(h.n)for(let c in h.n)e.n[c]=0===h.n[c]?0:(null==e.n[c]?0:e.n[c])+h.n[c],e.n[c]=0<e.n[c]?e.n[c]:0;h.u&&(e.use=Object.assign(e.use,h.u)),h.a&&(s+="A",h.a.call(this,e,t,h,o)),h.p?(t.rs.push(e),(o=e.child=new F(t.rsm[h.p],t,e.node)).parent=e,o.n={...e.n},s+="U"):h.r?((o=new F(t.rsm[h.r],t,e.node)).parent=e.parent,o.prev=e,o.n={...e.n},s+="R"):(i||(o=t.rs.pop()||J),s+="Z");let d=i?e.ao&&a.ao:e.ac&&a.ac;if(d){let n=d.call(this,e,t,h,o);if(n){if(n.err)throw t.t0.why=s,new U(n.err,{...n,state:i?E:L},t.t0,e,t);o=n.next||o}}o.why=s,t.log&&t.log(m,e.name+"~"+e.id,D[e.state],"w="+s,l(e.node));let f=0,g=h.m.length-(h.b||0);for(;f++<g;)t.next();return D.open===e.state&&(e.state=D.close),o}parse_alts(e,t,r){let s,l=V;l.m=[],l.b=0,l.p="",l.r="",l.n=void 0,l.h=void 0,l.a=void 0,l.u=void 0,l.e=void 0;let i,o=0,c=r.cnfg.t,a=e.length;for(o=0;o<a&&(i=!1,null==(s=e[o]).s||0===s.s.length?i=!0:(s.s[0]===r.t0.tin||s.s[0]===c.AA||Array.isArray(s.s[0])&&s.s[0].includes(r.t0.tin))&&(1===s.s.length?(l.m=[r.t0],i=!0):(s.s[1]===r.t1.tin||s.s[1]===c.AA||Array.isArray(s.s[1])&&s.s[1].includes(r.t1.tin))&&(l.m=[r.t0,r.t1],i=!0)),!(i=(i=i&&(!s.c||s.c(t,r,l)))&&(null==s.d||s.d===r.rs.length)));o++)s=null;return null==s&&c.ZZ!==r.t0.tin&&(l.e=r.t0),null!=s&&(l.e=s.e&&s.e(t,r,l)||void 0,l.b=s.b?s.b:l.b,l.p=s.p?s.p:l.p,l.r=s.r?s.r:l.r,l.n=s.n?s.n:l.n,l.h=s.h?s.h:l.h,l.a=s.a?s.a:l.a,l.u=s.u?s.u:l.u),r.log&&r.log(w,t.name+"~"+t.id,D[t.state],o<e.length?"alt="+o:"no-alt",o<e.length&&s.s?"["+s.s.map(e=>c[e]).join(" ")+"]":"[]",r.tC,"p="+(l.p||""),"r="+(l.r||""),"b="+(l.b||""),l.m.map(e=>c[e.tin]).join(" "),r.F(l.m.map(e=>e.src)),"c:"+(s&&s.c?i:""),"n:"+n(t.n).join(";"),"u:"+n(t.use).join(";"),l),l}}e.exports.RuleSpec=W;class H{constructor(e,t){this.rsm={},this.options=e,this.config=t}init(){let e=this.config.t,n=e.OB,r=e.CB,s=e.OS,l=e.CS,i=e.CL,o=e.CA,c=e.TX,m=e.NR,f=e.ST,g=e.VL,b=e.AA,x=e.ZZ,v=(e,t)=>{if(!this.options.rule.finish)return t.t0.src=N,t.t0},k={val:{open:[{s:[n,o],p:a,n:{im:0},g:j},{s:[n],p:a,n:{im:0}},{s:[s],p:u},{s:[o],d:0,p:u,b:1,g:_},{s:[o],b:1,g:_},{s:[[c,m,f,g],i],p:a,b:2,n:{im:1},g:j},{s:[[c,m,f,g]]},{s:[r],b:1,g:I},{s:[l],b:1,g:I}],close:[{s:[o],d:0,r:p,a:e=>e.node=[e.node],g:_},{c:(e,t,n)=>(c===t.t0.tin||m===t.t0.tin||f===t.t0.tin||g===t.t0.tin)&&0===t.rs.length,r:p,a:e=>e.node=[e.node],g:_},{s:[b],b:1}],bc:e=>{e.node=void 0===e.child.node?null==e.open[0]?void 0:e.open[0].val:e.child.node}},map:{bo:()=>({node:{}}),open:[{s:[r]},{p:h}],close:[]},list:{bo:()=>({node:[]}),open:[{s:[l]},{p:p}],close:[]},pair:{open:[{s:[[c,m,f,g],i],p:d,u:{key:!0}},{s:[r],b:1}],close:[{s:[r]},{s:[o],c:{n:{im:1}},r:h},{s:[o],b:1},{s:[[c,m,f,g],i],c:{n:{im:1}},r:h,b:2},{s:[[c,m,f,g],i],b:2},{s:[l],b:1},{s:[x],e:v,g:T}],bc:(e,t)=>{if(e.use.key){let n=e.open[0],r=f===n.tin?n.val:n.src,s=e.child.node,l=e.node[r];void 0===s&&i===t.v1.tin&&(s=null),e.node[r]=null==l?s:t.opts.map.merge?t.opts.map.merge(l,s):t.opts.map.extend?K(l,s):s}}},elem:{open:[{s:[n],p:a,n:{im:0}},{s:[s],p:u},{s:[o,o],b:2,g:R,a:e=>e.node.push(null)},{s:[o],g:R,a:e=>e.node.push(null)},{p:d,n:{im:1}}],close:[{s:[o,l]},{s:[o],r:p},{s:[l]},{s:[n],p:a,n:{im:0}},{s:[s],p:u},{s:[[c,m,f,g]],r:p,b:1},{s:[x],e:v,g:T}],bc:e=>{void 0!==e.child.node&&e.node.push(e.child.node)}}};this.rsm=t(k).reduce((e,t)=>(e[t]=new W(k[t]),e[t].name=t,e),{})}rule(e,t){if(null==e)return this.rsm;let n=this.rsm[e];return null===t?delete this.rsm[e]:void 0!==t&&((n=this.rsm[e]=t(this.rsm[e],this.rsm)||this.rsm[e]).name=e),n}start(e,n,r,s,l){let i,o={uI:1,opts:this.options,cnfg:this.config,meta:s||{},src:()=>n,root:()=>i.node,plgn:()=>r.internal().plugins,rule:J,xs:-1,v2:e.end,v1:e.end,t0:e.end,t1:e.end,tC:-2,next:m,rs:[],rsm:this.rsm,log:s&&s.log||void 0,F:q(this.config),use:{}};null!=l&&(o=K(o,l)),re(o);let a=e=>z(e,this.config),u=se(e.start(o),z("#BD",this.config),o),p=this.rsm[this.options.rule.start];if(null==p)return;let h=new F(p,o);i=h;let d=2*t(this.rsm).length*u.src.length*2*this.options.rule.maxmul;function m(){let e;o.v2=o.v1,o.v1=o.t0,o.t0=o.t1;do{e=u(h),o.tC++}while(o.cnfg.ts.IGNORE[e.tin]);return o.t1={...e},o.t0}m(),m();let f=0;for(;J!==h&&f<d;)o.log&&o.log(O,h.name+"~"+h.id,D[h.state],o.rs.length,o.tC,"["+a(o.t0.tin)+" "+a(o.t1.tin)+"]","["+o.F(o.t0.src)+" "+o.F(o.t1.src)+"]",h,o),o.rule=h,h=h.process(o),o.log&&o.log(P,o.rs.length,o.rs.map(e=>e.name+"~"+e.id).join("/"),h,o),f++;if(z("#ZZ",this.config)!==o.t0.tin)throw new U(c,{},o.t0,J,o);return i.node}clone(e,t){let n=new H(e,t);return n.rsm=Object.keys(this.rsm).reduce((e,t)=>(e[t]=Q(this.rsm[t]),e),{}),n}}e.exports.Parser=H;let G={tokenize:z,srcfmt:q,deep:K,clone:Q,charset:ee,longest:te,marr:function(e,t){return e.length===t.length&&e.reduce((e,n,r)=>e&&n===t[r],!0)},trimstk:ne,makelog:re,badlex:se,extract:ae,errinject:ce,errdesc:pe,configure:he,parserwrap:ue,regexp:ie,mesc:le,ender:oe};function X(e,t){let n,o,c,a,u=K({},t?{...t.options}:{tag:"-",line:{lex:!0,row:"\n",sep:"\r*\n"},comment:{lex:!0,balance:!0,marker:{"#":!0,"//":!0,"/*":"*/"}},space:{lex:!0},number:{lex:!0,hex:!0,oct:!0,bin:!0,digital:"-1023456789._xoeEaAbBcCdDfF+",sep:"_"},block:{lex:!0,marker:{"'''":"'''"}},string:{lex:!0,escape:{b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},multiline:"`",escapedouble:!1},text:{lex:!0},map:{extend:!0,merge:void 0},value:{lex:!0,src:{null:null,true:!0,false:!1}},plugin:{},debug:{get_console:()=>console,maxlen:99,print:{config:!1}},error:{unknown:"unknown error: $code",unexpected:"unexpected character(s): $src",invalid_unicode:"invalid unicode escape: $src",invalid_ascii:"invalid ascii escape: $src",unprintable:"unprintable character: $src",unterminated:"unterminated string: $src"},hint:de,token:{"#OB":{c:"{"},"#CB":{c:"}"},"#OS":{c:"["},"#CS":{c:"]"},"#CL":{c:":"},"#CA":{c:","},"#SP":" \t","#LN":"\n\r","#NR":"-0123456789+","#ST":"\"'`","#TX":!0,"#VL":!0,"#CM":!0,"#BD":!0,"#ZZ":!0,"#UK":!0,"#AA":!0,"#IGNORE":{s:"#SP,#LN,#CM"}},rule:{start:d,finish:!0,maxmul:3},config:{modify:{}},parser:{start:void 0}},e||{}),p=function(e,t,n){if(i===typeof e){let r=p.internal();return(h.parser.start?ue(h.parser):r.parser).start(r.lexer,e,p,t,n)}return e},h=e=>{if(null!=e&&l===typeof e){he(c,K(u,e));for(let e in u)p.options[e]=u[e];r(p.token,c.t)}return{...p.options}},m={token:function(e){return z(e,c,p)},options:K(h,u),parse:p,use:function(e,t){return p.options({plugin:{[e.name]:t||{}}}),p.internal().plugins.push(e),e(p)||p},rule:function(e,t){return p.internal().parser.rule(e,t)},lex:function(e,t){return p.internal().lexer.lex(e,t)},make:function(e){return X(e,p)},id:"Jsonic/"+Date.now()+"/"+(""+Math.random()).substring(2,8).padEnd(6,"0")+"/"+h.tag,toString:function(){return this.id}};if(s(m.make,M,{value:$}),t){for(let n in t)p[n]=t[n];p.parent=t;let e=t.internal();he(c=K({},e.config),u),r(p.token,c.t),a=[...e.plugins],n=e.lexer.clone(c),o=e.parser.clone(u,c)}else he(c={tI:1,t:{}},u),a=[],n=new B(c),(o=new H(u,c)).init();return r(p,m),r(p.token,c.t),s(p,"internal",{value:function(){return{lexer:n,parser:o,config:c,plugins:a}}}),p}function q(e){return(t,n)=>null==t?"":(n=JSON.stringify(t)).substring(0,e.d.maxlen)+(e.d.maxlen<n.length?"...":"")}function z(e,t,n){let s=t.t,l=s[e];return null==l&&i===typeof e&&(s[l=t.tI++]=e,s[e]=l,s[e.substring(1)]=l,null!=n&&r(n.token,t.t)),l}function K(e,...t){let n=o===typeof e,r=null!=e&&(l===typeof e||n);for(let s of t){let t=o===typeof s,i=null!=s&&(l===typeof s||t);if(r&&i&&!t&&Array.isArray(e)===Array.isArray(s))for(let n in s)e[n]=K(e[n],s[n]);else e=void 0===s?e:t?s:i?K(Array.isArray(s)?[]:{},s):s,n=o===typeof e,r=null!=e&&(l===typeof e||n)}return e}function Q(e){return K(Object.create(Object.getPrototypeOf(e)),e)}function ee(...e){return e.filter(e=>!1!==e).map(e=>"object"==typeof e?t(e).join(""):e).join("").split("").reduce((e,t)=>(e[t]=t.charCodeAt(0),e),{})}function te(e){return e.reduce((e,t)=>e<t.length?t.length:e,0)}function ne(e){e.stack&&(e.stack=e.stack.split("\n").filter(e=>!e.includes("jsonic/jsonic")).map(e=>e.replace(/    at /,"at ")).join("\n"))}function re(e){if("number"==typeof e.log){let t=!1,n=e.log;-1===n&&(n=1,t=!0),e.log=(...r)=>{if(t){let t=r.filter(e=>l!=typeof e).map(e=>o==typeof e?e.name:e).join("\t");e.opts.debug.get_console().log(t)}else e.opts.debug.get_console().dir(r,{depth:n})}}return e.log}function se(e,t,n){let r=r=>{let s=e(r);if(t===s.tin){let e={};throw null!=s.use&&(e.use=s.use),new U(s.why||c,e,s,r,n)}return s};return r.src=e.src,r}function le(e,t){return(t=new String(e)).esc=!0,t}function ie(e,...t){return new RegExp(t.map(e=>e.esc?e.replace(/[-\\|\]{}()[^$+*?.!=]/g,"\\$&"):e).join(""),e)}function oe(e,r,s){let l=t(t(r).reduce((e,t)=>(e[t[0]]=1,e),{...e})).join(""),i=n(t(r).filter(e=>1<e.length&&(!s||!s[e[0]])).reduce((e,t)=>((e[t[0]]=e[t[0]]||[]).push(t.substring(1)),e),{})).reduce((e,t)=>(e.push([t[0],t[1].map(e=>ie("",le(e)).source).join("|")]),e),[]).map(e=>["|(",le(e[0]),"(?!(",e[1],")))"]).flat(1);return ie(f,"^(([^",le(l),"]+)",...i,")+")}function ce(e,t,n,r,s,l){return e.replace(/\$([\w_]+)/g,(e,i)=>JSON.stringify("code"===i?t:n[i]||(l.meta?l.meta[i]:void 0)||r[i]||s[i]||l[i]||l.opts[i]||l.cnfg[i]||"$"+i))}function ae(e,t,n){let r=0<n.loc?n.loc:0,s=0<n.row?n.row:0,l=0<n.col?n.col:0,i=null==n.src?"":n.src,o=e.substring(Math.max(0,r-333),r).split("\n"),c=e.substring(r,r+333).split("\n"),a=2+(""+(s+2)).length,u=s<2?0:s-2,p=e=>"\x1b[34m"+(""+u++).padStart(a," ")+" | \x1b[0m"+(null==e?"":e),h=o.length;return[2<h?p(o[h-3]):null,1<h?p(o[h-2]):null,p(o[h-1]+c[0])," ".repeat(a)+"   "+" ".repeat(l)+"\x1b[31m"+"^".repeat(i.length||1)+" "+t+"\x1b[0m",p(c[1]),p(c[2])].filter(e=>null!=e).join("\n")}function ue(e){return{start:function(t,n,r,s,l){try{return e.start(t,n,r,s,l)}catch(i){if("SyntaxError"===i.name){let e=0,t=0,l=0,o="",c=i.message.match(/^Unexpected token (.) .*position\s+(\d+)/i);if(c){o=c[1],e=parseInt(c[2]),t=n.substring(0,e).replace(/[^\n]/g,"").length;let r=e-1;for(;-1<r&&"\n"!==n.charAt(r);)r--;l=Math.max(n.substring(r,e).length,0)}let a=i.token||{tin:r.token.UK,loc:e,len:o.length,row:i.lineNumber||t,col:i.columnNumber||l,val:void 0,src:o};throw new U(i.code||"json",i.details||{msg:i.message},a,{},i.ctx||{uI:-1,opts:r.options,cnfg:{t:{}},token:a,meta:s,src:()=>n,root:()=>{},plgn:()=>r.internal().plugins,rule:J,xs:-1,v2:a,v1:a,t0:a,t1:a,tC:-1,rs:[],next:()=>a,rsm:{},n:{},log:s?s.log:void 0,F:q(r.internal().config),use:{}})}throw i}}}}function pe(e,t,n,r,s){n={...n};let l=s.opts,i=s.meta,c=ce(l.error[e]||l.error.unknown,e,t,n,r,s);o===typeof l.hint&&(l.hint={...l.hint(),...l.hint});let a=["\x1b[31m[jsonic/"+e+"]:\x1b[0m "+c,"  \x1b[34m--\x3e\x1b[0m "+(i&&i.fileName||"<no-file>")+":"+n.row+":"+n.col,ae(s.src(),c,n),ce((l.hint[e]||l.hint.unknown).replace(/^([^ ])/," $1").split("\n").map((e,t)=>(0===t?" ":"  ")+e).join("\n"),e,t,n,r,s),"  \x1b[2mhttps://jsonic.richardrodger.com\x1b[0m","  \x1b[2m--internal: rule="+r.name+"~"+D[r.state]+"; token="+s.cnfg.t[n.tin]+(null==n.why?"":"~"+n.why)+"; plugins="+s.plgn().map(e=>e.name).join(",")+"--\x1b[0m\n"].join("\n"),u={internal:{token:n,ctx:s}};return{...Object.create(u),message:a,code:e,details:t,meta:i,fileName:i?i.fileName:void 0,lineNumber:n.row,columnNumber:n.col}}function he(e,n){let r=t(n.token);r.forEach(t=>z(t,e));let s=r.filter(e=>null!=n.token[e].c);e.sm=s.reduce((t,r)=>(t[n.token[r].c]=e.t[r],t),{});let l=r.filter(e=>i===typeof n.token[e]);e.m=l.reduce((t,r)=>(t[r.substring(1)]=n.token[r].split("").reduce((t,n)=>(t[n]=e.t[r],t),{}),t),{});let o=r.filter(e=>null!=n.token[e].s);if(e.ts=o.reduce((t,r)=>(t[r.substring(1)]=n.token[r].s.split(",").reduce((t,n)=>(t[e.t[n]]=n,t),{}),t),{}),e.vm=n.value.src,e.vs=t(n.value.src).reduce((e,t)=>(e[t[0]]=!0,e),{}),e.cs={},e.esc=t(n.string.escape).reduce((e,t)=>(e[t]=n.string.escape[t],e),{}),e.cs.cs={},e.cmk=[],n.comment.lex){e.cm=n.comment.marker;let r=t(e.cm);r.forEach(t=>{1===t.length?e.cs.cs[t]=t.charCodeAt(0):(e.cs.cs[t[0]]=t.charCodeAt(0),e.cmk.push(t))}),e.cmx=te(r)}e.sc=t(e.sm).join(""),e.cs.dig=ee(n.number.digital),e.cs.mln=ee(n.string.multiline),e.cs.vend=ee(n.space.lex&&e.m.SP,n.line.lex&&e.m.LN,e.sc,n.comment.lex&&e.cs.cs,n.block.lex&&e.cs.bs),e.cs.bs={},e.bmk=[];let c=t(n.block.marker);c.forEach(t=>{e.cs.bs[t[0]]=t.charCodeAt(0),e.bmk.push(t)}),e.bmx=te(c);let a=null!=n.number.sep?new RegExp(n.number.sep,"g"):null;e.re={ns:a,te:oe(ee(n.space.lex&&e.m.SP,n.line.lex&&e.m.LN,e.sc,n.comment.lex&&e.cs.cs,n.block.lex&&e.cs.bs),{...n.comment.lex?e.cm:{},...n.block.lex?n.block.marker:{}},e.sm),nm:new RegExp(["^[-+]?(0(",[n.number.hex?"x[0-9a-fA-F_]+":null,n.number.oct?"o[0-7_]+":null,n.number.bin?"b[01_]+":null].filter(e=>null!=e).join("|"),")|[0-9]+([0-9_]*[0-9])?)","(\\.[0-9]+([0-9_]*[0-9])?)?","([eE][-+]?[0-9]+([0-9_]*[0-9])?)?"].filter(e=>e.replace(/_/g,null==a?"":n.number.sep)).join(""))},e.d=n.debug,t(n.config.modify).forEach(t=>n.config.modify[t](e,n)),n.debug.print.config&&n.debug.get_console().dir(e,{depth:null})}function de(e=((e,t="replace")=>e[t](/[A-Z]/g,e=>" "+e.toLowerCase())[t](/[~%][a-z]/g,e=>("~"==e[0]?" ":"")+e[1].toUpperCase())),t="~sinceTheErrorIsUnknown,ThisIsProbablyABugInsideJsonic\nitself,OrAPlugin.~pleaseConsiderPostingAGithubIssue -Thanks!|~theCharacter(s) $srcWereNotExpectedAtThisPointAsTheyDoNot\nmatchTheExpectedSyntax,EvenUnderTheRelaxedJsonicRules.~ifIt\nisNotObviouslyWrong,TheActualSyntaxErrorMayBeElsewhere.~try\ncommentingOutLargerAreasAroundThisPointUntilYouGetNoErrors,\nthenRemoveTheCommentsInSmallSectionsUntilYouFindThe\noffendingSyntax.~n%o%t%e:~alsoCheckIfAnyPluginsYouAreUsing\nexpectDifferentSyntaxInThisCase.|~theEscapeSequence $srcDoesNotEncodeAValidUnicodeCodePoint\nnumber.~youMayNeedToValidateYourStringDataManuallyUsingTest\ncodeToSeeHow~javaScriptWillInterpretIt.~alsoConsiderThatYour\ndataMayHaveBecomeCorrupted,OrTheEscapeSequenceHasNotBeen\ngeneratedCorrectly.|~theEscapeSequence $srcDoesNotEncodeAValid~a%s%c%i%iCharacter.~you\nmayNeedToValidateYourStringDataManuallyUsingTestCodeToSee\nhow~javaScriptWillInterpretIt.~alsoConsiderThatYourDataMay\nhaveBecomeCorrupted,OrTheEscapeSequenceHasNotBeenGenerated\ncorrectly.|~stringValuesCannotContainUnprintableCharacters (characterCodes\nbelow 32).~theCharacter $srcIsUnprintable.~youMayNeedToRemove\ntheseCharactersFromYourSourceData.~alsoCheckThatItHasNot\nbecomeCorrupted.|~stringValuesCannotBeMissingTheirFinalQuoteCharacter,Which\nshouldMatchTheirInitialQuoteCharacter.".split("|")){return"unknown|unexpected|invalid_unicode|invalid_ascii|unprintable|unterminated".split("|").reduce((n,r,s)=>(n[r]=e(t[s]),n),{})}e.exports.util=G,e.exports.make=X;let me=X();e.exports.Jsonic=me;let fe=me;return delete fe.options,delete fe.use,delete fe.rule,delete fe.lex,delete fe.token,me.Jsonic=me,me.JsonicError=U,me.Lexer=B,me.Parser=H,me.Rule=F,me.RuleSpec=W,me.Alt=Z,me.util=G,me.make=X,e.exports.default=me,e.exports=e.exports.Jsonic,e=e.exports}));

/***/ }),

/***/ "354e":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__354e__;

/***/ }),

/***/ "5f3c":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5f3c__;

/***/ }),

/***/ "61de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("062a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6544":
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),

/***/ "6881":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6881__;

/***/ }),

/***/ "6b38":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6b38__;

/***/ }),

/***/ "7013":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7013__;

/***/ }),

/***/ "75f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "863d":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__863d__;

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8ece":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8ece__;

/***/ }),

/***/ "8fd1":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8fd1__;

/***/ }),

/***/ "9443":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("75f0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b1bf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_b1bf__;

/***/ }),

/***/ "be21":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bfa4":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_bfa4__;

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "d7c8":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d7c8__;

/***/ }),

/***/ "d88c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("be21");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e34a":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_e34a__;

/***/ }),

/***/ "f17e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f62b":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e){if(true)module.exports=e();else {}}((function(){var e={exports:{}};(function(t){(function(){!function(n){"object"==typeof e.exports?e.exports=n():("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:this).Gex=n()}((function(){var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.Gex=void 0;class t{constructor(e){this.desc="",this.gexmap={},(Array.isArray(e)?e:[e]).forEach(e=>{this.gexmap[e]=this.re(this.clean(e))})}dodgy(e){return null==e||Number.isNaN(e)}clean(e){let t=""+e;return this.dodgy(e)?"":t}match(e){e=""+e;let t=!1,n=Object.keys(this.gexmap);for(let r=0;r<n.length&&!t;r++)t=!!this.gexmap[n[r]].exec(e);return t}on(e){if(null==e)return null;let t=typeof e;if("string"===t||"number"===t||"boolean"===t||e instanceof Date||e instanceof RegExp)return this.match(e)?e:null;if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++)!this.dodgy(e[n])&&this.match(e[n])&&t.push(e[n]);return t}{let t={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&this.match(n)&&(t[n]=e[n]);return t}}esc(e){let t=this.clean(e);return(t=t.replace(/\*/g,"**")).replace(/\?/g,"*?")}escregexp(e){return e?(""+e).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):""}re(e){if(""===e||e)return e="^"+(e=(e=(e=(e=(e=this.escregexp(e)).replace(/\\\*/g,"[\\s\\S]*")).replace(/\\\?/g,"[\\s\\S]")).replace(/\[\\s\\S\]\*\[\\s\\S\]\*/g,"\\*")).replace(/\[\\s\\S\]\*\[\\s\\S\]/g,"\\?"))+"$",new RegExp(e);{let e=Object.keys(this.gexmap);return 1==e.length?this.gexmap[e[0]]:{...this.gexmap}}}toString(){let e=this.desc;return""!=e?e:this.desc="Gex["+Object.keys(this.gexmap)+"]"}inspect(){return this.toString()}}return e.Gex=function(e){return new t(e)},e}))}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),e=e.exports;var t,n,r,i,s,l,o,u,a,f={},h=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(f,"__esModule",{value:!0}),f.IntervalMatcher=f.GexMatcher=void 0,f.GexMatcher=class{constructor(){}make(t,n){if("string"==typeof n&&n.match(/[*?]/)){let t=e.Gex(n);return{kind:"gex",match:e=>null!=t.on(e),fix:n,meta:{},same(e){return null!=e&&e.kind===this.kind&&e.fix===this.fix}}}}scan(e,t){let n=e.filter(e=>"*"===e.fix).length>0;return{complete:n,sound:n,gaps:[],overs:[],why:"no-star"}}};const p=new RegExp(["^/s*","(=*[<>/(/[]?=*)?/s*([-+0-9a-fA-FeEoOxX]+(/.([0-9a-fA-FeEoOxX]+))?)([/)/]]?)(/s*(,|&+|/|+|/./.)/s*(=*[<>]?=*)/s*([-+.0-9a-fA-FeEoOxX]+)/s*([/)/]]?))?/s*$"].join("").replace(/\//g,"\\"));class c{constructor(){this.kind="interval",t.set(this,(e,t)=>function(n){return e(n)&&t(n)}),n.set(this,(e,t)=>function(n){return e(n)||t(n)}),r.set(this,e=>function(e){return!1}),i.set(this,e=>function(e){return!1}),s.set(this,e=>function(t){return t>e}),l.set(this,e=>function(t){return t>=e}),o.set(this,e=>function(t){return t<e}),u.set(this,e=>function(t){return t<=e}),a.set(this,e=>function(t){return t===e})}make(e,f){if("string"==typeof f&&f.match(/[=<>.[()\]]/)){let e=f.match(p),d={jo:"and",o0:"err",n0:NaN,o1:"err",n1:NaN},g=e=>!1;if(null!=e){let p=c.normop(e[1])||c.normop(e[5]),m=c.normop(e[8])||c.normop(e[10]),v=h(this,"="===p?a:"<"===p||")"===p?o:"<="===p||"]"===p?u:">"===p||"("===p?s:">="===p||"["===p?l:i),k=Number(e[2]),y=null==e[9]?NaN:Number(e[9]),x=e[7],N=null==x?h(this,n):"&"===x.substring(0,1)||","===x.substring(0,1)?h(this,t):h(this,n);".."===x&&(N=h(this,t),v=h(this,i)===v?h(this,l):v,m=""===m?"<=":m);let w=h(this,null==m?r:"="===m?a:"<"===m||")"===m?o:"<="===m||"]"===m?u:">"===m?s:">="===m?l:i);if(k===y&&("="===p&&null!=m?(y=NaN,w=h(this,r),v=m.includes("<")?h(this,u):m.includes(">")?h(this,l):m.includes("=")?h(this,a):h(this,i)):"="===m&&null!=p&&(y=NaN,w=h(this,r),v=p.includes("<")?h(this,u):p.includes(">")?h(this,l):h(this,i))),h(this,i)!==v&&h(this,r)===w&&(h(this,o)===v||h(this,u)===v?(w=v,y=k,v=h(this,l),k=Number.NEGATIVE_INFINITY,N=h(this,t)):h(this,s)!==v&&h(this,l)!==v||(w=h(this,u),y=Number.POSITIVE_INFINITY,N=h(this,t))),!isNaN(y)&&y<k){let e=w,t=y;y=k,k=t,".."!==x&&(w=v,v=e)}let b=v(k),O=w(y),j=N(b,O);return{kind:"interval",fix:f,meta:d={jo:j.name,o0:b.name,n0:k,o1:O.name,n1:y},match:g=e=>{let t=!1,n=parseFloat(e);return isNaN(n)||(t=j(n)),t},same(e){return null!=e&&e.kind===this.kind&&e.meta.jo===this.meta.jo&&e.meta.o0===this.meta.o0&&e.meta.n0===this.meta.n0&&e.meta.o1===this.meta.o1&&e.meta.n1===this.meta.n1}}}}}scan(e,t){let n={complete:!1,sound:!1,gaps:[],overs:[],lower:null,upper:null},r=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,s=this.half_intervals(e);s.reduce((e,t)=>{let n="eq"===t.o,i="lt"===t.o,s="lte"===t.o,l="gt"===t.o,o="gte"===t.o,u=t.n;if(null==e.lower){let i={n:r,o:"gte"};e.lower=i,e.upper=t,r==u&&o||(l||o?e.gaps.push([i,{n:u,o:l?"lte":"lt",m:0}]):n&&e.gaps.push([i,{n:u,o:"lte",m:1}]))}else{let r="eq"===e.upper.o,a="lt"===e.upper.o,f="lte"===e.upper.o,h=(e.upper.o,e.upper.o,e.upper.n),p=e.upper;u===h?a&&(o||n)||(f||r)&&l||(r||a||f)&&e.gaps.push([{n:h,o:r||f?"gt":"gte",m:2,d:{u:p,h:t}},{n:u,o:n||o?"lt":"lte",m:3}]):h<u?i||s||(r||a||f)&&e.gaps.push([{n:h,o:r||f?"gt":"gte",m:4},{n:u,o:n||o?"lt":"lte",m:5}]):e.overs.push([{n:u,o:n||o?"gte":"gt",m:10},{n:h,o:r||f?"lte":"lt",m:11}]),e.upper=t}return e},n);let l=0<s.length&&s[s.length-1];return l&&i!==l.n&&"gt"!==l.o&&"gte"!==l.o&&n.gaps.push([{n:l.n,o:"eq"===l.o||"lte"===l.o?"gt":"gte",m:6},{n:i,o:"lte",m:7}]),n.complete=0===n.gaps.length,n.sound=0===n.overs.length,n}half_intervals(e){let t=[];for(let r of e)t.push([{n:r.meta.n0,o:r.meta.o0},{n:r.meta.n1,o:r.meta.o1}]);var n=["lt","lte","eq","gte","gt"];return t.map(e=>[isNaN(e[0].n)||null==e[0].n?null:e[0],isNaN(e[1].n)||null==e[1].n?null:e[1]].filter(e=>null!=e)).sort((e,t)=>{if(e[0].n<t[0].n)return-1;if(t[0].n<e[0].n)return 1;var r=n.indexOf(e[0].o),i=n.indexOf(t[0].o);if(r<i)return-1;if(i<r)return 1;if(e[1].n<t[1].n)return-1;if(t[1].n<e[1].n)return 1;var s=n.indexOf(e[1].o),l=n.indexOf(t[1].o);return s<l?-1:l<s?1:0}).reduce((e,t)=>e.concat(...t),[])}}f.IntervalMatcher=c,t=new WeakMap,n=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,l=new WeakMap,o=new WeakMap,u=new WeakMap,a=new WeakMap,c.normop=e=>null==e?null:((e.match(/([<>\(\)\[\]])/)||[])[1]||"")+((e.match(/(=)/)||[])[1]||"");var d={};function g(t){var n={},r={};let i=[];return(t=t||{}).gex&&i.push(new f.GexMatcher),t.interval&&i.push(new f.IntervalMatcher),n.top=function(){return r},n.add=function(e,s){e={...e};var l="function"==typeof t?t.call(n,e,s):null,o=Object.keys(e).filter(t=>null!=e[t]).sort();o.forEach((function(t){e[t]=String(e[t])}));for(var u,a=r,f=0;f<o.length;f++){var h=o[f],p=e[h];let t=i.reduce((e,t)=>e||t.make(h,p),void 0);if((u=a.v)&&h==a.k)if(t){var c=(g=a.g=a.g||{})[h]=g[h]||[];a=(t=c.find(e=>e.same(t))||(c.push(t),t)).keymap||(t.keymap={})}else a=u[p]||(u[p]={});else if(a.k)if(h<a.k){var d=a.s;g=a.g,a.s={k:a.k,v:a.v},d&&(a.s.s=d),g&&(a.s.g=g),a.g&&(a.g={}),a.k=h,a.v={},t?(c=(g=a.g=a.g||{})[h]=g[h]||[],a=(t=c.find(e=>e.same(t))||(c.push(t),t)).keymap||(t.keymap={})):a=a.v[p]={}}else a=a.s||(a.s={}),f--;else if(a.k=h,a.v={},t){var g;c=(g=a.g=a.g||{})[h]=g[h]||[];a=(t=c.find(e=>e.same(t))||(c.push(t),t)).keymap||(t.keymap={})}else a=a.v[p]={}}return void 0!==s&&a&&(a.d=s,l&&(a.f="function"==typeof l?l:l.find,a.r="function"==typeof l.remove?l.remove:void 0)),n},n.findexact=function(e){return n.find(e,!0)},n.find=function(e,t,i){if(null==e)return null;var s=r,l=void 0===r.d?null:r.d,o=r.f,u=null,a=[],f={},h=Object.keys(e).length,p=[];void 0!==r.d&&p.push(r.d);do{if(u=s.k,s.v){var c=e[u],d=s.v[c];if(!d&&s.g&&s.g[u])for(var g=s.g[u],m=0;m<g.length;m++)if(g[m].match(c)){d=g[m].keymap;break}d?(f[u]=!0,s.s&&a.push(s.s),l=void 0===d.d?t?null:l:d.d,i&&void 0!==d.d&&p.push(d.d),o=d.f,s=d):s=s.s}else s=null;null==s&&0<a.length&&(null==l||i&&!t)&&(s=a.pop())}while(s);return t?Object.keys(f).length!==h&&(l=null):null==l&&void 0!==r.d&&(l=r.d),o&&(l=o.call(n,e,l)),i?p:l},n.remove=function(e){var t,n=r,i=null,s=[];do{if(t=n.k,n.v||n.g){if(n.v){var l=n.v[e[t]];l&&s.push({km:n,v:e[t]})}if(null==l&&n.g){let r=n.g[t]||[];for(let i=0;i<r.length;i++)if(r[i].fix===e[t]){s.push({km:n,v:e[t],mv:r[i]}),l=r[i].keymap;break}}l?(i=l.d,n=l):n=n.s}else n=null}while(n);if(void 0!==i){var o=s[s.length-1];if(o&&o.km&&o.km.v){var u=o.km.v[o.v]||o.mv&&o.mv.keymap;!u||u.r&&!u.r(e,u.d)||delete u.d}}},n.list=function(t,n){t=t||{};var i=[];return r.d&&i.push({match:{},data:r.d,find:r.f}),function r(i,s,l,o){if(i.v){var u,a=i.k,f=e.Gex(t?null==t[a]?n?null:"*":t[a]:"*"),h={...s},p={...l};for(var c in i.v)if(c===t[a]||!n&&null==t[a]||f.on(c)){var d={...h};d[a]=c;var g={...p};delete g[a],u=i.v[c],0===Object.keys(g).length&&u&&u.d&&o.push({match:d,data:u.d,find:u.f}),u&&null!=u.v&&r(u,{...d},{...g},o)}(u=i.s)&&r(u,{...h},{...p},o)}}(r,{},{...t},i),i},n.toString=function(e,t){var n=!0===e||!!t,i="function"==typeof e?e:function(e){return"function"==typeof e?"<"+e.name+">":"<"+e+">"};function s(e,t){for(var n=0;n<t;n++)e.push(" ")}var l=[],o=[];return function e(t,n,r,o){var u;if(void 0!==t.d&&(n.push(" "+i(t.d)),l.push(o.join(", ")+" -> "+i(t.d))),t.k&&(n.push("\n"),s(n,r),n.push(t.k+":")),(t.v||t.s||t.g)&&r++,t.v)for(var a=Object.keys(t.v).sort(),f=0;f<a.length;f++){var h=a[f];n.push("\n"),s(n,r),n.push(h+" ->"),(u=o.slice()).push(t.k+"="+h),e(t.v[h],n,r+1,u)}if(t.g)for(a=Object.keys(t.g).sort(),f=0;f<a.length;f++)for(var p=t.g[a[f]],c=0;c<p.length;c++){var d=p[c];n.push("\n"),s(n,r),n.push(d.fix+" ~>"),(u=o.slice()).push(t.k+"~"+d.fix),e(d.keymap,n,r+1,u)}t.s&&(n.push("\n"),s(n,r),n.push("|"),u=o.slice(),e(t.s,n,r+1,u))}(r,o,0,[]),n?o.join(""):l.join("\n")},n.inspect=n.toString,n.toJSON=function(e){return JSON.stringify(r,(function(e,t){return"function"==typeof t?"[Function]":t}),e)},n}return Object.defineProperty(d,"__esModule",{value:!0}),d=function(e){return new g(e)}}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/patrun/dist/patrun.min.js
var patrun_min = __webpack_require__("f62b");
var patrun_min_default = /*#__PURE__*/__webpack_require__.n(patrun_min);

// EXTERNAL MODULE: ./node_modules/jsonic/jsonic.min.js
var jsonic_min = __webpack_require__("2eac");
var jsonic_min_default = /*#__PURE__*/__webpack_require__.n(jsonic_min);

// EXTERNAL MODULE: ./src/vxg.scss
var vxg = __webpack_require__("f17e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61b73aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAdmin.vue?vue&type=template&id=20bd7023&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"app"}},[_c('vxg-basic-head',{attrs:{"spec":_vm.spec.parts.head,"logo":_vm.logo},on:{"action":function($event){return _vm.action('BasicHead', $event)}}}),(_vm.showSide)?_c('vxg-basic-side',{attrs:{"spec":_vm.spec.parts.side,"logo":_vm.logo},on:{"action":function($event){return _vm.action('BasicSide', $event)}}}):_vm._e(),_c('vxg-basic-main',{attrs:{"spec":_vm.spec.parts.main}}),_c('vxg-basic-foot',{attrs:{"spec":_vm.spec.parts.foot}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicAdmin.vue?vue&type=template&id=20bd7023&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAdmin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicAdminvue_type_script_lang_js_ = ({
  props: ['logo'],
  data: function data() {
    return {
      spec: this.$model.main.app.web
    };
  },
  created: function created() {},
  computed: {
    showSide: function showSide() {
      return this.$store.state.vxg.cmp.BasicSide.show;
    }
  },
  methods: {
    action: function action(part, ev) {
      this.$emit('action', {
        part: part,
        event: ev
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicAdmin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicAdminvue_type_script_lang_js_ = (BasicAdminvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: external "vuetify/lib/components/VApp"
var VApp_ = __webpack_require__("7013");

// CONCATENATED MODULE: ./src/components/BasicAdmin.vue





/* normalize component */

var component = normalizeComponent(
  components_BasicAdminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicAdmin = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VApp: VApp_["VApp"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61b73aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=template&id=11b2b29e&
var BasicHeadvue_type_template_id_11b2b29e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app-bar',{staticStyle:{"height":"64px","background-color":"white"},attrs:{"app":""}},[(!_vm.drawerOpen && _vm.tool.expandSide.active)?_c('v-icon',{staticStyle:{"display":"inline-block"},attrs:{"large":"","light":""},on:{"click":_vm.openDrawer}},[_vm._v("mdi-chevron-right")]):_vm._e(),(!_vm.drawerOpen && _vm.tool.expandSide.active)?_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}}):_vm._e(),(_vm.show('add') && _vm.tool.add.active)?_c('v-btn',{staticClass:"vxg-head-btn",attrs:{"tile":""},on:{"click":_vm.addItem}},[_c('v-icon',{attrs:{"left":"","medium":""}},[_vm._v(" mdi-map-marker-path ")]),_vm._v(" Add "+_vm._s(_vm.itemName)+" ")],1):_vm._e(),(_vm.show('add') && _vm.tool.add.active)?_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}}):_vm._e(),(_vm.tool.search.active && _vm.show('search'))?_c('v-text-field',{attrs:{"flat":"","hide-details":"","outlined":"","dense":"","placeholder":"Search"},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}}):_vm._e(),(_vm.tool.avatar.active || _vm.tool.expandMain.active)?_c('v-spacer'):_vm._e(),(_vm.tool.avatar.active)?_c('v-icon',{staticStyle:{"display":"inline-block"},attrs:{"large":"","light":""},on:{"click":function($event){return _vm.action('avatar')}}},[_vm._v("mdi-account")]):_vm._e(),(!_vm.detailOpen && _vm.tool.expandMain.active)?_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}}):_vm._e(),(!_vm.detailOpen && _vm.tool.expandMain.active)?_c('v-icon',{staticStyle:{"display":"inline-block"},attrs:{"large":"","light":""},on:{"click":_vm.closeDetail}},[_vm._v("mdi-chevron-left")]):_vm._e()],1)}
var BasicHeadvue_type_template_id_11b2b29e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicHead.vue?vue&type=template&id=11b2b29e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicHeadvue_type_script_lang_js_ = ({
  props: ['logo'],
  data: function data() {
    return {
      search: ''
    };
  },
  mounted: function mounted() {},
  watch: {
    search: function search() {
      this.$store.dispatch('trigger_search', {
        term: this.search
      });
    },
    '$store.vxg.cmp.BasicHead.allow.add': {
      handler: function handler() {
        this.$forceUpdate();
      }
    }
  },
  computed: {
    drawerOpen: function drawerOpen() {
      return this.$store.state.vxg.cmp.BasicSide.show;
    },
    detailOpen: function detailOpen() {
      return !this.$store.state.vxg.cmp.BasicMain.show;
    },
    itemName: function itemName() {
      return this.$store.state.vxg.ent.meta.name;
    },
    tool: function tool() {
      // TODO: better if main.app.web.parts.head was provided directly
      var tool = this.$model.main.app.web.parts.head.tool;
      return tool;
    }
  },
  methods: {
    addItem: function addItem() {
      this.$store.dispatch('trigger_led_add');
    },
    show: function show(action) {
      return this.allow(action) && this.$store.state.vxg.cmp.BasicHead.show[action];
    },
    allow: function allow(action) {
      if ('add' === action) {
        return this.$store.state.vxg.cmp.BasicHead.allow.add;
      }

      return true;
    },
    openDrawer: function openDrawer() {
      this.$store.dispatch('set_cmp_flags', {
        name: 'BasicSide',
        flags: {
          show: true
        }
      });
    },
    closeDetail: function closeDetail() {
      this.$store.dispatch('set_cmp_flags', {
        name: 'BasicMain',
        flags: {
          show: false
        }
      });
    },
    action: function action(name) {
      this.$emit('action', name);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicHead.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicHeadvue_type_script_lang_js_ = (BasicHeadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BasicHead.vue?vue&type=style&index=0&lang=scss&
var BasicHeadvue_type_style_index_0_lang_scss_ = __webpack_require__("9443");

// EXTERNAL MODULE: external "vuetify/lib/components/VAppBar"
var VAppBar_ = __webpack_require__("d7c8");

// EXTERNAL MODULE: external "vuetify/lib/components/VBtn"
var VBtn_ = __webpack_require__("863d");

// EXTERNAL MODULE: external "vuetify/lib/components/VDivider"
var VDivider_ = __webpack_require__("ffda");

// EXTERNAL MODULE: external "vuetify/lib/components/VIcon"
var VIcon_ = __webpack_require__("354e");

// EXTERNAL MODULE: external "vuetify/lib/components/VGrid"
var VGrid_ = __webpack_require__("5f3c");

// EXTERNAL MODULE: external "vuetify/lib/components/VTextField"
var VTextField_ = __webpack_require__("6881");

// CONCATENATED MODULE: ./src/components/BasicHead.vue






/* normalize component */

var BasicHead_component = normalizeComponent(
  components_BasicHeadvue_type_script_lang_js_,
  BasicHeadvue_type_template_id_11b2b29e_render,
  BasicHeadvue_type_template_id_11b2b29e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicHead = (BasicHead_component.exports);

/* vuetify-loader */







installComponents_default()(BasicHead_component, {VAppBar: VAppBar_["VAppBar"],VBtn: VBtn_["VBtn"],VDivider: VDivider_["VDivider"],VIcon: VIcon_["VIcon"],VSpacer: VGrid_["VSpacer"],VTextField: VTextField_["VTextField"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61b73aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFoot.vue?vue&type=template&id=585b97d2&
var BasicFootvue_type_template_id_585b97d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("___")])}
var BasicFootvue_type_template_id_585b97d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicFoot.vue?vue&type=template&id=585b97d2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFoot.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BasicFootvue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./src/components/BasicFoot.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicFootvue_type_script_lang_js_ = (BasicFootvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BasicFoot.vue





/* normalize component */

var BasicFoot_component = normalizeComponent(
  components_BasicFootvue_type_script_lang_js_,
  BasicFootvue_type_template_id_585b97d2_render,
  BasicFootvue_type_template_id_585b97d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicFoot = (BasicFoot_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61b73aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicMain.vue?vue&type=template&id=74737eb8&
var BasicMainvue_type_template_id_74737eb8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-main',{attrs:{"app":""}},[_c('v-container',{staticStyle:{"padding":"0px"},attrs:{"fluid":""}},[_c('router-view',{tag:"component",attrs:{"spec":_vm.view_spec}})],1)],1)}
var BasicMainvue_type_template_id_74737eb8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicMain.vue?vue&type=template&id=74737eb8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicMainvue_type_script_lang_js_ = ({
  props: {
    spec: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    view_spec: function view_spec() {
      var viewname = this.$route.meta.view || this.$model.main.app.web.defaults.view;
      var spec = this.$model.main.app.web.view[viewname].spec;
      return spec;
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicMainvue_type_script_lang_js_ = (BasicMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: external "vuetify/lib/components/VMain"
var VMain_ = __webpack_require__("1faa");

// CONCATENATED MODULE: ./src/components/BasicMain.vue





/* normalize component */

var BasicMain_component = normalizeComponent(
  components_BasicMainvue_type_script_lang_js_,
  BasicMainvue_type_template_id_74737eb8_render,
  BasicMainvue_type_template_id_74737eb8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicMain = (BasicMain_component.exports);

/* vuetify-loader */



installComponents_default()(BasicMain_component, {VContainer: VGrid_["VContainer"],VMain: VMain_["VMain"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61b73aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=template&id=453e3d5c&
var BasicSidevue_type_template_id_453e3d5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-navigation-drawer',{staticClass:"vxg-side",style:(_vm.drawerStyle),attrs:{"app":""}},[_c('v-sheet',{staticStyle:{"display":"flex","flex-direction":"column","height":"100%"}},[_c('div',{staticStyle:{"display":"flex","justify-content":"space-between"}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.logo)}}),_c('v-icon',{staticStyle:{"width":"48px"},attrs:{"large":"","dark":""},on:{"click":_vm.closeDrawer}},[_vm._v("mdi-chevron-left")])],1),_vm._l((_vm.menu),function(item){return [(_vm.allow(item))?_c('router-link',{key:item.code,tag:"component",class:item.klass,staticStyle:{"flex-grow":"1"},attrs:{"to":'/'+item.code}},[_c('v-icon',[_vm._v("mdi-"+_vm._s(item.icon))]),_vm._v(" "+_vm._s(item.title)+" ")],1):_vm._e()]}),_c('div',{staticStyle:{"flex-grow":"100"}}),_c('v-divider'),_c('a',{staticClass:"vxg-router-link",attrs:{"xhref":"#/main/asset"},on:{"click":function($event){return _vm.action('support')}}},[_c('i',{staticClass:"v-icon notranslate mdi mdi-help theme--light",attrs:{"aria-hidden":"true"}}),_vm._v(" Support ")]),_c('a',{staticClass:"vxg-router-link",attrs:{"xhref":"#/main/asset"},on:{"click":function($event){return _vm.action('signout')}}},[_c('i',{staticClass:"v-icon notranslate mdi mdi-logout-variant theme--light",attrs:{"aria-hidden":"true"}}),_vm._v(" Sign out ")])],2)],1)}
var BasicSidevue_type_template_id_453e3d5c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicSide.vue?vue&type=template&id=453e3d5c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicSidevue_type_script_lang_js_ = ({
  props: {
    spec: {
      type: Object,
      required: true
    },
    logo: String
  },
  data: function data() {
    return {
      open: true
    };
  },
  created: function created() {},
  computed: {
    menu: function menu() {
      var active_item_code = this.$route.meta.view;
      var spec_items = this.spec.menu.items;
      var ordered_codes = this.spec.menu.order.split(/\s*,\s*/);
      var ux_items = ordered_codes.reduce(function (a, c) {
        return a.push(Object.assign({
          code: c
        }, spec_items[c])), a;
      }, []).map(function (item) {
        item.klass = Object.assign({
          'vxg-router-link': true
        });
        return item;
      });
      return ux_items;
    },
    drawerStyle: function drawerStyle() {
      return {};
    }
  },
  methods: {
    allow: function allow(item) {
      var out = item && item.allow ? this.$vxg.allow(item.allow) : true;
      return out;
    },
    openDrawer: function openDrawer() {
      this.$store.dispatch('set_cmp_flags', {
        name: 'BasicSide',
        flags: {
          show: true
        }
      });
    },
    closeDrawer: function closeDrawer() {
      this.$store.dispatch('set_cmp_flags', {
        name: 'BasicSide',
        flags: {
          show: false
        }
      });
    },
    action: function action(name) {
      this.$emit('action', name);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicSide.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicSidevue_type_script_lang_js_ = (BasicSidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BasicSide.vue?vue&type=style&index=0&lang=scss&
var BasicSidevue_type_style_index_0_lang_scss_ = __webpack_require__("d88c");

// EXTERNAL MODULE: external "vuetify/lib/components/VNavigationDrawer"
var VNavigationDrawer_ = __webpack_require__("8ece");

// EXTERNAL MODULE: external "vuetify/lib/components/VSheet"
var VSheet_ = __webpack_require__("8fd1");

// CONCATENATED MODULE: ./src/components/BasicSide.vue






/* normalize component */

var BasicSide_component = normalizeComponent(
  components_BasicSidevue_type_script_lang_js_,
  BasicSidevue_type_template_id_453e3d5c_render,
  BasicSidevue_type_template_id_453e3d5c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicSide = (BasicSide_component.exports);

/* vuetify-loader */





installComponents_default()(BasicSide_component, {VDivider: VDivider_["VDivider"],VIcon: VIcon_["VIcon"],VNavigationDrawer: VNavigationDrawer_["VNavigationDrawer"],VSheet: VSheet_["VSheet"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61b73aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=template&id=502511ca&
var BasicLedvue_type_template_id_502511ca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.allow('list'))?_c('div',[(_vm.show.table)?_c('v-data-table',{attrs:{"dense":"","headers":_vm.headers,"items":_vm.items,"items-per-page":25,"x-custom-filter":"customFilter","footer-props":{
                   itemsPerPageOptions:[25,50,75,100,-1]
                   },"sort-by":_vm.sortBy,"sort-desc":_vm.sortDesc},on:{"click:row":_vm.openItem,"update:sortBy":function($event){_vm.sortBy=$event},"update:sort-by":function($event){_vm.sortBy=$event},"update:sortDesc":function($event){_vm.sortDesc=$event},"update:sort-desc":function($event){_vm.sortDesc=$event}},scopedSlots:_vm._u([_vm._l((_vm.headers),function(header){return {key:_vm.itemslot(header),fn:function(ref){
                   var item = ref.item;
return [_c('div',{key:header.value},[('status'===header.type)?_c('span',[_c('v-chip',{staticStyle:{"font-weight":"bold","color":"white"},attrs:{"small":"","xclass":"ma-2","color":'outofdate'===item[header.value]?'red':'suspended'===item[header.value]?'orange':'blue'}},[_vm._v(" "+_vm._s((header.kind[item[header.value]]||{}).title)+" ")])],1):('datetime'===header.type)?_c('span',[_vm._v(" "+_vm._s(new Date(item[header.value]))+" ")]):_c('span',[_vm._v(_vm._s(item[header.value]))])])]}}})],null,true)}):_vm._e(),(_vm.show.item)?_c('div',[(_vm.showEditToolbar)?_c('v-toolbar',{attrs:{"flat":""}},[_c('v-btn',{attrs:{"outlined":""},on:{"click":function($event){return _vm.customAction('user_reset_password')}}},[_vm._v("Reset Password")]),_c('v-spacer')],1):_vm._e(),_c('div',{staticStyle:{"box-sizing":"border-box","display":"flex","flex-flow":"row wrap"}},_vm._l((_vm.fields),function(field,fI){return _c('div',{key:fI,staticClass:"vxg-form-field",style:(_vm.fieldstyle(field,fI))},[('string'===field.type)?_c('v-text-field',{attrs:{"label":field.title,"outlined":"","disabled":field.readonly || !_vm.allow('edit')},model:{value:(_vm.item[field.name]),callback:function ($$v) {_vm.$set(_vm.item, field.name, $$v)},expression:"item[field.name]"}}):_vm._e(),('status'===field.type)?_c('v-select',{attrs:{"items":_vm.selection(field),"label":field.title,"outlined":"","disabled":field.readonly || !_vm.allow('edit')},model:{value:(_vm.item[field.name]),callback:function ($$v) {_vm.$set(_vm.item, field.name, $$v)},expression:"item[field.name]"}}):_vm._e(),('datetime'===field.type)?_c('v-text-field',{attrs:{"label":field.title,"outlined":"","disabled":""},model:{value:(_vm.readitem[field.name]),callback:function ($$v) {_vm.$set(_vm.readitem, field.name, $$v)},expression:"readitem[field.name]"}}):_vm._e(),('basicled'===field.type)?_c('vxg-basic-led',{attrs:{"spec":field.spec,"param":{item:_vm.item}}}):_vm._e(),('changes'===field.type)?_c('div',{staticClass:"changes"},[_c('h3',[_vm._v("Changes")]),_c('table',{attrs:{"border":"0","cellpadding":"0","cellspacing":"0"}},[_vm._m(0,true),_vm._l((_vm.changes(_vm.item.changes)),function(change){return _c('tr',{key:change.field},[_c('td',[_vm._v(_vm._s(change.field))]),_c('td',[_vm._v(_vm._s(change.old))]),_c('td',[_vm._v(_vm._s(change.new))])])})],2)]):_vm._e()],1)}),0),_c('v-toolbar',{attrs:{"flat":""}},[_c('v-btn',{attrs:{"outlined":""},on:{"click":_vm.closeItem}},[_vm._v("Cancel")]),_c('v-spacer'),(_vm.allow('edit'))?_c('v-btn',{attrs:{"outlined":""},on:{"click":_vm.saveItem}},[_vm._v("Save")]):_vm._e()],1)],1):_vm._e()],1):_vm._e()}
var BasicLedvue_type_template_id_502511ca_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',[_vm._v("Field")]),_c('th',[_vm._v("Old")]),_c('th',[_vm._v("New")])])}]


// CONCATENATED MODULE: ./src/components/BasicLed.vue?vue&type=template&id=502511ca&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicLedvue_type_script_lang_js_ = ({
  props: {
    spec: {
      type: Object,
      required: true
    },
    param: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      item: null,
      readitem: null,
      show: {
        table: true,
        item: false
      },
      sortBy: 'when',
      sortDesc: true
    };
  },
  created: function created() {
    this.$store.dispatch('list_' + this.spec.ent.store_name);
  },
  watch: {
    '$store.state.trigger.led.add': function $storeStateTriggerLedAdd() {
      this.openItem({
        last: Date.now()
      });
    },
    '$route': {
      immediate: true,
      handler: function handler() {
        var _this$spec$search;

        this.$store.dispatch('set_cmp_flags', {
          name: 'BasicHead',
          flags: {
            show: {
              add: this.spec.edit.active,
              search: (_this$spec$search = this.spec.search) === null || _this$spec$search === void 0 ? void 0 : _this$spec$search.active
            },
            allow: {
              add: this.allow('edit')
            }
          }
        });
        this.$store.dispatch('set_ent_meta', {
          name: this.spec.ent.primary.name || 'Item'
        });
      }
    }
  },
  computed: {
    headers: function headers() {
      var headermap = {};
      Object.entries(this.spec.ent.primary.field).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            fn = _ref2[0],
            fd = _ref2[1];

        return headermap[fn] = {
          value: fn,
          text: fd.title,
          type: fd.type,
          kind: fd.kind || {}
        };
      });
      var headers = (this.spec.list.layout.order ? this.spec.list.layout.order.split(/\s*,\s*/) : Object.keys(this.spec.ent.primary.field)).map(function (fn) {
        return headermap[fn];
      }).filter(function (h) {
        return null != h;
      });
      return headers;
    },
    items: function items() {
      var _this = this;

      var items = this.$store.state[this.spec.ent.store_name]; // TODO: generalize

      if ('user-by-role' === this.spec.name) {
        items = items.filter(function (item) {
          return _this.param.item.role === item.profile;
        }); //items = items.filter(item=>'op'===item.profile)
      }

      return items;
    },
    fields: function fields() {
      try {
        var fds = [];
        var fns = this.spec.edit.layout.order.split(/,/);

        var _iterator = _createForOfIteratorHelper(fns),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var fn = _step.value;
            // TODO: remove when model fixed
            // TODO: handle virtual/derived fields cleanly
            var fd = _objectSpread({}, this.spec.ent.primary.field[fn]) || {};
            fd.name = fn; //fd.size = this.spec.edit.layout.field[fn].size 

            fd = _objectSpread(_objectSpread({}, fd), this.spec.edit.layout.field[fn] || {});
            fds.push(fd);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return fds;
      } catch (e) {// console.error(e)
      }

      return [];
    },
    showEditToolbar: function showEditToolbar() {
      if (this.allow('edit')) {
        var active = this.spec.edit.layout.toolbar.active;

        if (true === active) {
          return active;
        } else if (active && active.field) {
          var show = true;

          for (var _i2 = 0, _Object$entries = Object.entries(active.field); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                name = _Object$entries$_i[0],
                criteria = _Object$entries$_i[1];

            if ('not-empty' === criteria) {
              show = show && null != this.item[name];
            } else {
              show = false;
            }
          }

          return show;
        }
      }

      return false;
    }
  },
  methods: {
    itemslot: function itemslot(header) {
      return 'item.' + header.value;
    },
    selection: function selection(field) {
      var kinds = field.kind && Object.entries(field.kind);
      var selects = kinds ? kinds.map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            n = _ref4[0],
            d = _ref4[1];

        return {
          text: d.title,
          value: n
        };
      }) : [];
      return selects;
    },
    customAction: function customAction(action) {
      this.$store.dispatch(action, this.item);
    },
    openItem: function openItem(selitem) {
      if (false === this.spec.edit.active) {
        // || !this.allow('edit')) {
        return;
      }

      this.item = selitem;
      this.readitem = _objectSpread({}, this.item); // TODO: from spec!

      this.readitem.last = this.formatdate(this.item.last);
      this.readitem.when = this.formatdate(this.item.when);
      this.show.table = false;
      this.show.item = true;
    },
    saveItem: function saveItem() {
      this.$store.dispatch('save_' + this.spec.ent.store_name, this.item);
      this.show.table = true;
      this.show.item = false;
    },
    closeItem: function closeItem() {
      this.show.table = true;
      this.show.item = false;
    },
    fieldstyle: function fieldstyle(field) {
      return {
        'flex-basis': 100 * field.size / 12 + '%'
      };
    },
    formatdate: function formatdate(time) {
      return new Date(time).toString();
    },
    customFilter: function customFilter(value, search, item) {
      return true;
    },
    allow: function allow(action) {
      var out = true;
      var match = this.spec[action] && this.spec[action].allow;

      if (match) {
        out = this.$vxg.allow(match);
      }

      return out;
    },
    changes: function changes(cmjson) {
      var cm = null == cmjson ? {} : JSON.parse(cmjson);
      return Object.keys(cm).filter(function (k) {
        return 'audit' != k;
      }).reduce(function (a, c) {
        return a.push({
          field: c,
          old: cm[c][0],
          new: cm[c][1]
        }), a;
      }, []);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicLed.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicLedvue_type_script_lang_js_ = (BasicLedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BasicLed.vue?vue&type=style&index=0&lang=scss&
var BasicLedvue_type_style_index_0_lang_scss_ = __webpack_require__("61de");

// EXTERNAL MODULE: external "vuetify/lib/components/VChip"
var VChip_ = __webpack_require__("6b38");

// EXTERNAL MODULE: external "vuetify/lib/components/VDataTable"
var VDataTable_ = __webpack_require__("b1bf");

// EXTERNAL MODULE: external "vuetify/lib/components/VSelect"
var VSelect_ = __webpack_require__("bfa4");

// EXTERNAL MODULE: external "vuetify/lib/components/VToolbar"
var VToolbar_ = __webpack_require__("e34a");

// CONCATENATED MODULE: ./src/components/BasicLed.vue






/* normalize component */

var BasicLed_component = normalizeComponent(
  components_BasicLedvue_type_script_lang_js_,
  BasicLedvue_type_template_id_502511ca_render,
  BasicLedvue_type_template_id_502511ca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicLed = (BasicLed_component.exports);

/* vuetify-loader */








installComponents_default()(BasicLed_component, {VBtn: VBtn_["VBtn"],VChip: VChip_["VChip"],VDataTable: VDataTable_["VDataTable"],VSelect: VSelect_["VSelect"],VSpacer: VGrid_["VSpacer"],VTextField: VTextField_["VTextField"],VToolbar: VToolbar_["VToolbar"]})

// CONCATENATED MODULE: ./src/vxg.js
function vxg_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function vxg_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vxg_ownKeys(Object(source), true).forEach(function (key) { vxg_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vxg_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function vxg_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function vxg_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = vxg_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function vxg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return vxg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vxg_arrayLikeToArray(o, minLen); }

function vxg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var config_defaults = {};
var util = {};

var vxg_Vxg = /*#__PURE__*/function () {
  function Vxg(config) {
    _classCallCheck(this, Vxg);

    this.match = {
      allow: new patrun_min_default.a({
        gex: true
      })
    };
    this.cmp = {};
    this.config(config);
    this.util = util;
  }

  _createClass(Vxg, [{
    key: "config",
    value: function config(custom_config) {
      // TODO: deep, validation
      Object.assign(this.config, config_defaults, custom_config || {});
      this.config.allow = this.config.allow || {};

      this.config.allow.modify = this.config.allow.modify || function (x) {
        return x;
      };

      this.config.allow.match = this.config.allow.match || [];

      var _iterator = vxg_createForOfIteratorHelper(this.config.allow.match),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          // if(entry.match) {
          this.match.allow.add(entry, {
            allow: true
          }); // }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "allow",
    value: function allow(match) {
      var mm = jsonic_min_default()(match); // TODO: handle Aontu array workaround

      var ms = Array.isArray(match) ? match : Object.keys(mm).map(function (x) {
        return mm[x];
      });
      var found = null;

      var _iterator2 = vxg_createForOfIteratorHelper(ms),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var m = _step2.value;
          var pat = this.config.allow.modify(vxg_objectSpread({}, m || {}));
          found = this.match.allow.find(pat);

          if (found) {
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return found ? !!found.allow : false;
    }
  }, {
    key: "install",
    value: function install(Vue, options) {
      var _this = this;

      var co = {
        VxgBasicAdmin: BasicAdmin,
        VxgBasicHead: BasicHead,
        VxgBasicFoot: BasicFoot,
        VxgBasicMain: BasicMain,
        VxgBasicSide: BasicSide,
        VxgBasicLed: BasicLed
      };
      Object.keys(co).forEach(function (name) {
        Vue.component(name, co[name]);
        _this.cmp[name] = co[name];
      });
      Vue.prototype.$vxg = this;
      window.vxg = this;
    }
  }]);

  return Vxg;
}();

/* harmony default export */ var src_vxg = (vxg_Vxg);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_vxg);



/***/ }),

/***/ "ffda":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ffda__;

/***/ })

/******/ });
});
//# sourceMappingURL=Vxg.umd.js.map