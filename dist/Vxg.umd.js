(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vuetify/lib/components/VForm"), require("vuetify/lib/components/VMain"), require("vuetify/lib/components/VIcon"), require("vuetify/lib/components/VGrid"), require("vuetify/lib/components/VTextField"), require("vuetify/lib/components/VChip"), require("vuetify/lib/components/VApp"), require("vuetify/lib/components/VBtn"), require("vuetify/lib/components/VNavigationDrawer"), require("vuetify/lib/components/VSheet"), require("vuetify/lib/components/VDataTable"), require("vuetify/lib/components/VCard"), require("vuetify/lib/components/VSelect"), require("vuetify/lib/components/VAppBar"), require("vuetify/lib/components/VToolbar"), require("vuetify/lib/components/VDivider"));
	else if(typeof define === 'function' && define.amd)
		define(["vuetify/lib/components/VForm", "vuetify/lib/components/VMain", "vuetify/lib/components/VIcon", "vuetify/lib/components/VGrid", "vuetify/lib/components/VTextField", "vuetify/lib/components/VChip", "vuetify/lib/components/VApp", "vuetify/lib/components/VBtn", "vuetify/lib/components/VNavigationDrawer", "vuetify/lib/components/VSheet", "vuetify/lib/components/VDataTable", "vuetify/lib/components/VCard", "vuetify/lib/components/VSelect", "vuetify/lib/components/VAppBar", "vuetify/lib/components/VToolbar", "vuetify/lib/components/VDivider"], factory);
	else if(typeof exports === 'object')
		exports["Vxg"] = factory(require("vuetify/lib/components/VForm"), require("vuetify/lib/components/VMain"), require("vuetify/lib/components/VIcon"), require("vuetify/lib/components/VGrid"), require("vuetify/lib/components/VTextField"), require("vuetify/lib/components/VChip"), require("vuetify/lib/components/VApp"), require("vuetify/lib/components/VBtn"), require("vuetify/lib/components/VNavigationDrawer"), require("vuetify/lib/components/VSheet"), require("vuetify/lib/components/VDataTable"), require("vuetify/lib/components/VCard"), require("vuetify/lib/components/VSelect"), require("vuetify/lib/components/VAppBar"), require("vuetify/lib/components/VToolbar"), require("vuetify/lib/components/VDivider"));
	else
		root["Vxg"] = factory(root["vuetify/lib/components/VForm"], root["vuetify/lib/components/VMain"], root["vuetify/lib/components/VIcon"], root["vuetify/lib/components/VGrid"], root["vuetify/lib/components/VTextField"], root["vuetify/lib/components/VChip"], root["vuetify/lib/components/VApp"], root["vuetify/lib/components/VBtn"], root["vuetify/lib/components/VNavigationDrawer"], root["vuetify/lib/components/VSheet"], root["vuetify/lib/components/VDataTable"], root["vuetify/lib/components/VCard"], root["vuetify/lib/components/VSelect"], root["vuetify/lib/components/VAppBar"], root["vuetify/lib/components/VToolbar"], root["vuetify/lib/components/VDivider"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__1b42__, __WEBPACK_EXTERNAL_MODULE__1faa__, __WEBPACK_EXTERNAL_MODULE__354e__, __WEBPACK_EXTERNAL_MODULE__5f3c__, __WEBPACK_EXTERNAL_MODULE__6881__, __WEBPACK_EXTERNAL_MODULE__6b38__, __WEBPACK_EXTERNAL_MODULE__7013__, __WEBPACK_EXTERNAL_MODULE__863d__, __WEBPACK_EXTERNAL_MODULE__8ece__, __WEBPACK_EXTERNAL_MODULE__8fd1__, __WEBPACK_EXTERNAL_MODULE_b1bf__, __WEBPACK_EXTERNAL_MODULE_b7cf__, __WEBPACK_EXTERNAL_MODULE_bfa4__, __WEBPACK_EXTERNAL_MODULE_d7c8__, __WEBPACK_EXTERNAL_MODULE_e34a__, __WEBPACK_EXTERNAL_MODULE_ffda__) {
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

/***/ "1b42":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1b42__;

/***/ }),

/***/ "1faa":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1faa__;

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

/***/ "b7cf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_b7cf__;

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

// EXTERNAL MODULE: ./node_modules/@jsonic/jsonic-next/jsonic.min.js
var jsonic_min = __webpack_require__("fe20");
var jsonic_min_default = /*#__PURE__*/__webpack_require__.n(jsonic_min);

// EXTERNAL MODULE: ./src/vxg.scss
var vxg = __webpack_require__("f17e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09b99265-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAdmin.vue?vue&type=template&id=20bd7023&
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09b99265-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=template&id=11b2b29e&
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09b99265-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFoot.vue?vue&type=template&id=585b97d2&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09b99265-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicMain.vue?vue&type=template&id=74737eb8&
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09b99265-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=template&id=453e3d5c&
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09b99265-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=template&id=1eea2cb4&
var BasicLedvue_type_template_id_1eea2cb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.allow('list'))?_c('div',[(_vm.show.table)?_c('v-data-table',{attrs:{"dense":"","headers":_vm.headers,"items":_vm.items,"items-per-page":25,"x-custom-filter":"customFilter","footer-props":{
                   itemsPerPageOptions:[25,50,75,100,-1]
                   },"sort-by":_vm.sortBy,"sort-desc":_vm.sortDesc,"search":_vm.search},on:{"click:row":_vm.openItem,"update:sortBy":function($event){_vm.sortBy=$event},"update:sort-by":function($event){_vm.sortBy=$event},"update:sortDesc":function($event){_vm.sortDesc=$event},"update:sort-desc":function($event){_vm.sortDesc=$event}},scopedSlots:_vm._u([_vm._l((_vm.headers),function(header){return {key:_vm.itemslot(header),fn:function(ref){
                   var item = ref.item;
return [_c('div',{key:header.value},[('status'===header.type)?_c('span',[_c('v-chip',{staticStyle:{"font-weight":"bold","color":"white"},attrs:{"small":"","xclass":"ma-2","color":'outofdate'===item[header.value]?'red':'suspended'===item[header.value]?'orange':'blue'}},[_vm._v(" "+_vm._s((header.kind[item[header.value]]||{}).title)+" ")])],1):('datetime'===header.type)?_c('span',[_vm._v(" "+_vm._s(new Date(item[header.value]))+" ")]):_c('span',[_vm._v(_vm._s(item[header.value]))])])]}}})],null,true)}):_vm._e(),(_vm.show.item)?_c('div',[(_vm.showEditToolbar)?_c('v-toolbar',{attrs:{"flat":""}},[_c('v-btn',{attrs:{"outlined":""},on:{"click":function($event){return _vm.customAction('user_reset_password')}}},[_vm._v("Reset Password")]),_c('v-spacer')],1):_vm._e(),_c('div',{staticStyle:{"box-sizing":"border-box","display":"flex","flex-flow":"row wrap"}},_vm._l((_vm.fields),function(field,fI){return _c('div',{key:fI,staticClass:"vxg-form-field",style:(_vm.fieldstyle(field,fI))},[('string'===field.type)?_c('v-text-field',{attrs:{"label":field.title,"outlined":"","disabled":field.readonly || !_vm.allow('edit'),"rules":field.rules},model:{value:(_vm.item[field.name]),callback:function ($$v) {_vm.$set(_vm.item, field.name, $$v)},expression:"item[field.name]"}}):_vm._e(),('status'===field.type)?_c('vxg-basic-field-pick',{attrs:{"field":field,"param":{item:_vm.item}}}):_vm._e(),('datetime'===field.type)?_c('v-text-field',{attrs:{"label":field.title,"outlined":"","disabled":""},model:{value:(_vm.readitem[field.name]),callback:function ($$v) {_vm.$set(_vm.readitem, field.name, $$v)},expression:"readitem[field.name]"}}):_vm._e(),('basicled'===field.type)?_c('vxg-basic-led',{attrs:{"spec":field.spec,"param":{item:_vm.item}}}):_vm._e(),('changes'===field.type)?_c('div',{staticClass:"changes"},[_c('h3',[_vm._v("Changes")]),_c('table',{attrs:{"border":"0","cellpadding":"0","cellspacing":"0"}},[_vm._m(0,true),_vm._l((_vm.changes(_vm.item.changes)),function(change){return _c('tr',{key:change.field},[_c('td',[_vm._v(_vm._s(change.field))]),_c('td',[_vm._v(_vm._s(change.old))]),_c('td',[_vm._v(_vm._s(change.new))])])})],2)]):_vm._e()],1)}),0),_c('v-toolbar',{attrs:{"flat":""}},[_c('v-btn',{attrs:{"outlined":""},on:{"click":_vm.closeItem}},[_vm._v("Cancel")]),_c('v-spacer'),(_vm.allow('edit'))?_c('v-btn',{attrs:{"outlined":""},on:{"click":_vm.saveItem}},[_vm._v("Save")]):_vm._e()],1)],1):_vm._e()],1):_vm._e()}
var BasicLedvue_type_template_id_1eea2cb4_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',[_vm._v("Field")]),_c('th',[_vm._v("Old")]),_c('th',[_vm._v("New")])])}]


// CONCATENATED MODULE: ./src/components/BasicLed.vue?vue&type=template&id=1eea2cb4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
//
//
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
      sortDesc: true,
      search: ''
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
    '$store.state.trigger.search.term': function $storeStateTriggerSearchTerm(term) {
      this.search = term;
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
            fd.custom = fd.custom || {};
            fd.custom.allow = fd.custom.allow || this.allow.bind(this);
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

// EXTERNAL MODULE: external "vuetify/lib/components/VToolbar"
var VToolbar_ = __webpack_require__("e34a");

// CONCATENATED MODULE: ./src/components/BasicLed.vue






/* normalize component */

var BasicLed_component = normalizeComponent(
  components_BasicLedvue_type_script_lang_js_,
  BasicLedvue_type_template_id_1eea2cb4_render,
  BasicLedvue_type_template_id_1eea2cb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicLed = (BasicLed_component.exports);

/* vuetify-loader */







installComponents_default()(BasicLed_component, {VBtn: VBtn_["VBtn"],VChip: VChip_["VChip"],VDataTable: VDataTable_["VDataTable"],VSpacer: VGrid_["VSpacer"],VTextField: VTextField_["VTextField"],VToolbar: VToolbar_["VToolbar"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09b99265-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFieldPick.vue?vue&type=template&id=f6dac43a&
var BasicFieldPickvue_type_template_id_f6dac43a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-select',{attrs:{"items":_vm.pick(_vm.field),"label":_vm.field.title,"outlined":"","disabled":_vm.field.readonly || !_vm.allow('edit')},model:{value:(_vm.item[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.item, _vm.field.name, $$v)},expression:"item[field.name]"}})}
var BasicFieldPickvue_type_template_id_f6dac43a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicFieldPick.vue?vue&type=template&id=f6dac43a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFieldPick.vue?vue&type=script&lang=js&
function BasicFieldPickvue_type_script_lang_js_slicedToArray(arr, i) { return BasicFieldPickvue_type_script_lang_js_arrayWithHoles(arr) || BasicFieldPickvue_type_script_lang_js_iterableToArrayLimit(arr, i) || BasicFieldPickvue_type_script_lang_js_unsupportedIterableToArray(arr, i) || BasicFieldPickvue_type_script_lang_js_nonIterableRest(); }

function BasicFieldPickvue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function BasicFieldPickvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BasicFieldPickvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BasicFieldPickvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function BasicFieldPickvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BasicFieldPickvue_type_script_lang_js_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function BasicFieldPickvue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicFieldPickvue_type_script_lang_js_ = ({
  props: {
    field: {
      type: Object,
      required: true
    },
    param: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {};
  },
  created: function created() {
    var custom = this.custom = this.field.custom || {};

    custom.allow = custom.allow || function () {
      return true;
    };
  },
  computed: {
    item: function item() {
      return this.param.item;
    }
  },
  methods: {
    pick: function pick(field) {
      var kinds = field.kind && Object.entries(field.kind) || [];
      var picks = kinds.filter(this.makeFieldFilter(field)).map(function (_ref) {
        var _ref2 = BasicFieldPickvue_type_script_lang_js_slicedToArray(_ref, 2),
            n = _ref2[0],
            d = _ref2[1];

        return {
          text: d.title,
          value: n
        };
      });
      return picks;
    },
    makeFieldFilter: function makeFieldFilter(field) {
      var custom = this.custom;
      var filter = custom.field && custom.field[field.name] && custom.field[field.name].filter;
      return filter || function () {
        return true;
      };
    },
    allow: function allow() {
      var _this$custom;

      return (_this$custom = this.custom).allow.apply(_this$custom, arguments);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicFieldPick.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicFieldPickvue_type_script_lang_js_ = (BasicFieldPickvue_type_script_lang_js_); 
// EXTERNAL MODULE: external "vuetify/lib/components/VSelect"
var VSelect_ = __webpack_require__("bfa4");

// CONCATENATED MODULE: ./src/components/BasicFieldPick.vue





/* normalize component */

var BasicFieldPick_component = normalizeComponent(
  components_BasicFieldPickvue_type_script_lang_js_,
  BasicFieldPickvue_type_template_id_f6dac43a_render,
  BasicFieldPickvue_type_template_id_f6dac43a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicFieldPick = (BasicFieldPick_component.exports);

/* vuetify-loader */


installComponents_default()(BasicFieldPick_component, {VSelect: VSelect_["VSelect"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09b99265-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAuth.vue?vue&type=template&id=6154b0e6&
var BasicAuthvue_type_template_id_6154b0e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.user)?_vm._t("default"):_c('v-container',[_c('v-row',[_c('v-col'),_c('v-col',[_c('v-card',{attrs:{"xstyle":"max-width:40vw"}},[_c('v-card-title',[_vm._v("Sign In")]),_c('v-form',{ref:"form",attrs:{"lazy-validation":""},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-card-text',[_c('v-text-field',{attrs:{"rules":_vm.emailRules,"label":"Email","required":"","outlined":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_c('v-text-field',{attrs:{"rules":_vm.passwordRules,"label":"Password","required":"","type":"password","outlined":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),('empty'!=_vm.state)?_c('v-card-text',[_vm._v(" "+_vm._s(_vm.stateMessage[_vm.state])+" ")]):_vm._e(),_c('v-card-actions',[_c('v-spacer'),_c('v-btn',{attrs:{"disabled":!_vm.valid},on:{"click":_vm.signin}},[_vm._v(" Sign In ")])],1)],1)],1)],1),_c('v-col')],1)],1)],2)}
var BasicAuthvue_type_template_id_6154b0e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicAuth.vue?vue&type=template&id=6154b0e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAuth.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicAuthvue_type_script_lang_js_ = ({
  props: {
    user: Object
  },
  data: function data() {
    return {
      state: 'empty',
      valid: false,
      email: '',
      password: '',
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }],
      passwordRules: [function (v) {
        return !!v || 'Password is required';
      }],
      stateMessage: {
        signin: 'Signing in...',
        fail: 'Signin details are incorrect. Please try again.'
      }
    };
  },
  created: function created() {},
  computed: {},
  methods: {
    signin: function signin() {
      var _this = this;

      this.state = 'signin';
      this.$store.dispatch('signin_user', {
        email: this.email,
        password: this.password
      }).then(function (_ref) {
        var ok = _ref.ok;

        if (!ok) {
          _this.state = 'fail';
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicAuth.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicAuthvue_type_script_lang_js_ = (BasicAuthvue_type_script_lang_js_); 
// EXTERNAL MODULE: external "vuetify/lib/components/VCard"
var VCard_ = __webpack_require__("b7cf");

// EXTERNAL MODULE: external "vuetify/lib/components/VForm"
var VForm_ = __webpack_require__("1b42");

// CONCATENATED MODULE: ./src/components/BasicAuth.vue





/* normalize component */

var BasicAuth_component = normalizeComponent(
  components_BasicAuthvue_type_script_lang_js_,
  BasicAuthvue_type_template_id_6154b0e6_render,
  BasicAuthvue_type_template_id_6154b0e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicAuth = (BasicAuth_component.exports);

/* vuetify-loader */












installComponents_default()(BasicAuth_component, {VBtn: VBtn_["VBtn"],VCard: VCard_["VCard"],VCardActions: VCard_["VCardActions"],VCardText: VCard_["VCardText"],VCardTitle: VCard_["VCardTitle"],VCol: VGrid_["VCol"],VContainer: VGrid_["VContainer"],VForm: VForm_["VForm"],VRow: VGrid_["VRow"],VSpacer: VGrid_["VSpacer"],VTextField: VTextField_["VTextField"]})

// CONCATENATED MODULE: ./src/vxg.js
function vxg_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function vxg_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? vxg_ownKeys(Object(source), !0).forEach(function (key) { vxg_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : vxg_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function vxg_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function vxg_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = vxg_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function vxg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return vxg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vxg_arrayLikeToArray(o, minLen); }

function vxg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }












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
          this.match.allow.add(entry, {
            allow: true
          });
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
        VxgBasicLed: BasicLed,
        VxgBasicFieldPick: BasicFieldPick,
        VxgBasicAuth: BasicAuth
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

/***/ "fe20":
/***/ (function(module, exports, __webpack_require__) {

!function(e){if(true)module.exports=e();else {}}((function(){var e=function(e){var t;return function(n){return t||e(t={exports:{},parent:n},t.exports),t.exports}},t=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.values=t.keys=t.omap=t.str=t.prop=t.normalt=t.parserwrap=t.trimstk=t.tokenize=t.srcfmt=t.snip=t.regexp=t.mesc=t.makelog=t.isarr=t.filterRules=t.extract=t.escre=t.errinject=t.errdesc=t.entries=t.defprop=t.deep=t.configure=t.clone=t.clean=t.charset=t.badlex=t.assign=t.S=t.JsonicError=void 0;const i=n({}),s=e=>null==e?[]:Object.keys(e);t.keys=s,t.values=e=>null==e?[]:Object.values(e),t.entries=e=>null==e?[]:Object.entries(e);const l=(e,...t)=>Object.assign(null==e?{}:e,...t);t.assign=l,t.isarr=e=>Array.isArray(e);const o=Object.defineProperty;t.defprop=o;const a=(e,t)=>Object.entries(e||{}).reduce((e,n)=>{let r=t?t(n):n;void 0===r[0]?delete e[n[0]]:e[r[0]]=r[1];let i=2;for(;void 0!==r[i];)e[r[i]]=r[i+1],i+=2;return e},{});t.omap=a;const c={object:"object",string:"string",function:"function",unexpected:"unexpected",map:"map",list:"list",elem:"elem",pair:"pair",val:"val",node:"node",no_re_flags:r.EMPTY,unprintable:"unprintable",invalid_ascii:"invalid_ascii",invalid_unicode:"invalid_unicode",invalid_lex_state:"invalid_lex_state",unterminated_string:"unterminated_string",unterminated_comment:"unterminated_comment",lex:"lex",parse:"parse",error:"error",none:"none",imp_map:"imp,map",imp_list:"imp,list",imp_null:"imp,null",end:"end",open:"open",close:"close",rule:"rule",stack:"stack",nUll:"null",name:"name",make:"make"};t.S=c;class u extends SyntaxError{constructor(e,t,n,r,i){let s=x(e,t=h({},t),n,r,i);super(s.message),l(this,s),g(this)}toJSON(){return{...this,__error:!0,name:this.name,message:this.message,stack:this.stack}}}function p(e,t,n){let i=t.t,s=i[e];return null==s&&r.STRING===typeof e&&(i[s=t.tI++]=e,i[e]=s,i[e.substring(1)]=s,null!=n&&l(n.token,t.t)),s}function d(e,...t){return new RegExp(t.map(e=>e.esc?m(e.toString()):e).join(r.EMPTY),null==e?"":e)}function m(e){return null==e?"":e.replace(/[-\\|\]{}()[^$+*?.!=]/g,"\\$&").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\n/g,"\\n")}function h(e,...t){let n=c.function===typeof e,r=null!=e&&(c.object===typeof e||n);for(let i of t){let t=c.function===typeof i,s=null!=i&&(c.object===typeof i||t);if(r&&s&&!t&&Array.isArray(e)===Array.isArray(i))for(let n in i)e[n]=h(e[n],i[n]);else e=void 0===i?e:t?i:s?h(Array.isArray(i)?[]:{},i):i,n=c.function===typeof e,r=null!=e&&(c.object===typeof e||n)}return e}function f(e,t,n,r,i,s){let l={code:t,details:n,token:r,rule:i,ctx:s};return null==e?"":e.replace(/\$([\w_]+)/g,(e,t)=>{let o=JSON.stringify(null!=l[t]?l[t]:null!=n[t]?n[t]:s.meta&&null!=s.meta[t]?s.meta[t]:null!=r[t]?r[t]:null!=i[t]?i[t]:null!=s.opts[t]?s.opts[t]:null!=s.cfg[t]?s.cfg[t]:null!=s[t]?s[t]:"$"+t);return null==o?"":o})}function g(e){e.stack&&(e.stack=e.stack.split("\n").filter(e=>!e.includes("jsonic/jsonic")).map(e=>e.replace(/    at /,"at ")).join("\n"))}function k(e,t,n){let i=0<n.sI?n.sI:0,s=0<n.rI?n.rI:1,l=0<n.cI?n.cI:1,o=null==n.src?r.EMPTY:n.src,a=e.substring(Math.max(0,i-333),i).split("\n"),c=e.substring(i,i+333).split("\n"),u=2+(r.EMPTY+(s+2)).length,p=s<3?1:s-2,d=e=>"\x1b[34m"+(r.EMPTY+p++).padStart(u," ")+" | \x1b[0m"+(null==e?r.EMPTY:e),m=a.length;return[2<m?d(a[m-3]):null,1<m?d(a[m-2]):null,d(a[m-1]+c[0])," ".repeat(u)+"   "+" ".repeat(l-1)+"\x1b[31m"+"^".repeat(o.length||1)+" "+t+"\x1b[0m",d(c[1]),d(c[2])].filter(e=>null!=e).join("\n")}function x(e,t,n,r,i){try{let s=i.cfg,l=i.meta,o=f(s.error[e]||s.error.unknown,e,t,n,r,i);c.function===typeof s.hint&&(s.hint={...s.hint(),...s.hint});let a=["\x1b[31m[jsonic/"+e+"]:\x1b[0m "+o,"  \x1b[34m--\x3e\x1b[0m "+(l&&l.fileName||"<no-file>")+":"+n.rI+":"+n.cI,k(i.src(),o,n),"",f((s.hint[e]||s.hint.unknown||"").trim().split("\n").map(e=>"  "+e).join("\n"),e,t,n,r,i),"","  \x1b[2mhttps://jsonic.senecajs.org\x1b[0m","  \x1b[2m--internal: rule="+r.name+"~"+r.state+"; token="+p(n.tin,i.cfg)+(null==n.why?"":"~"+n.why)+"; plugins="+i.plgn().map(e=>e.name).join(",")+"--\x1b[0m\n"].join("\n"),u={internal:{token:n,ctx:i}};return u={...Object.create(u),message:a,code:e,details:t,meta:l,fileName:l?l.fileName:void 0,lineNumber:n.rI,columnNumber:n.cI}}catch(s){return console.log(s),{}}}function v(e){return"function"==typeof e.debug.print.src?e.debug.print.src:(t,n)=>null==t?r.EMPTY:(n=JSON.stringify(t)).substring(0,e.debug.maxlen)+(e.debug.maxlen<n.length?"...":r.EMPTY)}function b(e,t=44){let n;try{n="object"==typeof e?JSON.stringify(e):""+e}catch(r){n=""+e}return y(t<n.length?n.substring(0,t-3)+"...":n,t)}function y(e,t=5){return void 0===e?"":(""+e).substring(0,t).replace(/[\r\n\t]/g,".")}function I(...e){return null==e?{}:e.filter(e=>!1!==e).map(e=>"object"==typeof e?s(e).join(r.EMPTY):e).join(r.EMPTY).split(r.EMPTY).reduce((e,t)=>(e[t]=t.charCodeAt(0),e),{})}function E(e){for(let t in e)null==e[t]&&delete e[t];return e}t.JsonicError=u,t.configure=function(e,t,n){var r,i,o,c,u,h,f,g,k,x,v,b,y,S,M,O,T,j,P,C,N,w,_,R,A,L,Y,F,U,$,J,B,z,Z,D,K,V;const W=t||{};W.t=W.t||{},W.tI=W.tI||1;const G=e=>p(e,W);!1!==n.grammar$&&(G("#BD"),G("#ZZ"),G("#UK"),G("#AA"),G("#SP"),G("#LN"),G("#CM"),G("#NR"),G("#ST"),G("#TX"),G("#VL")),W.fixed={lex:!!(null===(r=n.fixed)||void 0===r?void 0:r.lex),token:n.fixed?a(E(n.fixed.token),([e,t])=>[t,p(e,W)]):{},ref:void 0},W.fixed.ref=a(W.fixed.token,([e,t])=>[e,t]),W.fixed.ref=Object.assign(W.fixed.ref,a(W.fixed.ref,([e,t])=>[t,e])),W.tokenSet={ignore:Object.fromEntries(((null===(i=n.tokenSet)||void 0===i?void 0:i.ignore)||[]).map(e=>[G(e),!0]))},W.space={lex:!!(null===(o=n.space)||void 0===o?void 0:o.lex),chars:I(null===(c=n.space)||void 0===c?void 0:c.chars)},W.line={lex:!!(null===(u=n.line)||void 0===u?void 0:u.lex),chars:I(null===(h=n.line)||void 0===h?void 0:h.chars),rowChars:I(null===(f=n.line)||void 0===f?void 0:f.rowChars)},W.text={lex:!!(null===(g=n.text)||void 0===g?void 0:g.lex),modify:((null===(k=W.text)||void 0===k?void 0:k.modify)||[]).concat(([null===(x=n.text)||void 0===x?void 0:x.modify]||false).flat()).filter(e=>null!=e)},W.number={lex:!!(null===(v=n.number)||void 0===v?void 0:v.lex),hex:!!(null===(b=n.number)||void 0===b?void 0:b.hex),oct:!!(null===(y=n.number)||void 0===y?void 0:y.oct),bin:!!(null===(S=n.number)||void 0===S?void 0:S.bin),sep:null!=(null===(M=n.number)||void 0===M?void 0:M.sep)&&""!==n.number.sep,sepChar:null===(O=n.number)||void 0===O?void 0:O.sep},W.value={lex:!!(null===(T=n.value)||void 0===T?void 0:T.lex),map:(null===(j=n.value)||void 0===j?void 0:j.map)||{}},W.rule={start:null==(null===(P=n.rule)||void 0===P?void 0:P.start)?"val":n.rule.start,maxmul:null==(null===(C=n.rule)||void 0===C?void 0:C.maxmul)?3:n.rule.maxmul,finish:!!(null===(N=n.rule)||void 0===N?void 0:N.finish),include:(null===(w=n.rule)||void 0===w?void 0:w.include)?n.rule.include.split(/\s*,+\s*/).filter(e=>""!==e):[],exclude:(null===(_=n.rule)||void 0===_?void 0:_.exclude)?n.rule.exclude.split(/\s*,+\s*/).filter(e=>""!==e):[]},W.map={extend:!!(null===(R=n.map)||void 0===R?void 0:R.extend),merge:null===(A=n.map)||void 0===A?void 0:A.merge};let H=Object.keys(W.fixed.token).sort((e,t)=>t.length-e.length).map(e=>m(e)).join("|"),q=(null===(L=n.comment)||void 0===L?void 0:L.lex)?(n.comment.marker||[]).filter(e=>e.lex).map(e=>m(e.start)).join("|"):"",X=["([",m(s(I(W.space.lex&&W.space.chars,W.line.lex&&W.line.chars)).join("")),"]",("string"==typeof n.ender?n.ender.split(""):Array.isArray(n.ender)?n.ender:[]).map(e=>"|"+m(e)).join(""),""===H?"":"|",H,""===q?"":"|",q,"|$)"];return W.rePart={fixed:H,ender:X,commentStart:q},W.re={ender:d(null,...X),rowChars:d(null,m(null===(Y=n.line)||void 0===Y?void 0:Y.rowChars)),columns:d(null,"["+m(null===(F=n.line)||void 0===F?void 0:F.chars)+"]","(.*)$")},W.lex={empty:!!(null===(U=n.lex)||void 0===U?void 0:U.empty),match:(null===($=n.lex)||void 0===$?void 0:$.match)?n.lex.match.map(e=>e(W,n)):[]},W.debug={get_console:(null===(J=n.debug)||void 0===J?void 0:J.get_console)||(()=>console),maxlen:null==(null===(B=n.debug)||void 0===B?void 0:B.maxlen)?99:n.debug.maxlen,print:{config:!!(null===(Z=null===(z=n.debug)||void 0===z?void 0:z.print)||void 0===Z?void 0:Z.config),src:null===(K=null===(D=n.debug)||void 0===D?void 0:D.print)||void 0===K?void 0:K.src}},W.error=n.error||{},W.hint=n.hint||{},(null===(V=n.config)||void 0===V?void 0:V.modify)&&s(n.config.modify).forEach(e=>n.config.modify[e](W,n)),W.debug.print.config&&W.debug.get_console().dir(W,{depth:null}),l(e.options,n),l(e.token,W.t),l(e.fixed,W.fixed.ref),W},t.tokenize=p,t.mesc=function(e,t){return(t=new String(e)).esc=!0,t},t.regexp=d,t.escre=m,t.deep=h,t.errinject=f,t.trimstk=g,t.extract=k,t.errdesc=x,t.badlex=function(e,t,n){let r=r=>{let i=e.next(r);if(t===i.tin){let e={};throw null!=i.use&&(e.use=i.use),new u(i.why||c.unexpected,e,i,r,n)}return i};return r.src=e.src,r},t.makelog=function(e,t){if(t)if("number"==typeof t.log){let n=!1,r=t.log;-1===r&&(r=1,n=!0),e.log=(...t)=>{if(n){let n=t.filter(e=>c.object!=typeof e).map(e=>c.function==typeof e?e.name:e).join("\t");e.cfg.debug.get_console().log(n)}else e.cfg.debug.get_console().dir(t,{depth:r})}}else"function"==typeof t.log&&(e.log=t.log);return e.log},t.srcfmt=v,t.str=b,t.snip=y,t.clone=function(e){return h(Object.create(Object.getPrototypeOf(e)),e)},t.charset=I,t.clean=E,t.filterRules=function(e,t){let n=["open","close"];for(let r of n)e.def[r]=e.def[r].map(e=>(e.g="string"==typeof e.g?(e.g||"").split(/\s*,+\s*/):e.g||[],e)).filter(e=>t.rule.include.reduce((t,n)=>t||null!=e.g&&-1!==e.g.indexOf(n),0===t.rule.include.length)).filter(e=>t.rule.exclude.reduce((t,n)=>t&&(null==e.g||-1===e.g.indexOf(n)),!0));return e},t.normalt=function(e){if(null!=e.c){let t=e.c.n,n=e.c.d;null==t&&null==n||(e.c=function(e){let r=!0;if(null!=t)for(let n in t)r=r&&(null==e.n[n]||e.n[n]<=(null==t[n]?0:t[n]));return null!=n&&(r=r&&e.d<=n),r},null!=t&&(e.c.n=t),null!=n&&(e.c.d=n))}if(r.STRING===typeof e.g&&(e.g=e.g.split(/\s*,\s*/)),e.s&&0!==e.s.length){const t=e=>e.flat().filter(e=>"number"==typeof e),n=(e,t)=>e.filter(e=>31*t<=e&&e<31*(t+1)),r=(e,t)=>e.reduce((e,n)=>1<<n-(31*t+1)|e,0),i=t([e.s[0]]),s=t([e.s[1]]),l=e;l.S0=0<i.length?new Array(Math.max(...i.map(e=>1+e/31|0))).fill(null).map((e,t)=>t).map(e=>r(n(i,e),e)):null,l.S1=0<s.length?new Array(Math.max(...s.map(e=>1+e/31|0))).fill(null).map((e,t)=>t).map(e=>r(n(s,e),e)):null}else e.s=null;return e},t.prop=function(e,t,n){let r=e;try{let r,i=t.split(".");for(let t=0;t<i.length;t++)r=i[t],t<i.length-1&&(e=e[r]=e[r]||{});return void 0!==n&&(e[r]=n),e[r]}catch(i){throw new Error("Cannot "+(void 0===n?"get":"set")+" path "+t+" on object: "+b(r)+(void 0===n?"":" to value: "+b(n,22)))}},t.parserwrap=function(e){return{start:function(t,n,s,l){try{return e.start(t,n,s,l)}catch(o){if("SyntaxError"===o.name){let e=0,l=0,a=0,c=r.EMPTY,d=o.message.match(/^Unexpected token (.) .*position\s+(\d+)/i);if(d){c=d[1],e=parseInt(d[2]),l=t.substring(0,e).replace(/[^\n]/g,r.EMPTY).length;let n=e-1;for(;-1<n&&"\n"!==t.charAt(n);)n--;a=Math.max(t.substring(n,e).length,0)}let m=o.token||(0,i.makeToken)("#UK",p("#UK",n.internal().config),void 0,c,(0,i.makePoint)(c.length,e,o.lineNumber||l,o.columnNumber||a));throw new u(o.code||"json",o.details||{msg:o.message},m,{},o.ctx||{uI:-1,opts:n.options,cfg:n.internal().config,token:m,meta:s,src:()=>t,root:()=>{},plgn:()=>n.internal().plugins,rule:{name:"no-rule"},xs:-1,v2:m,v1:m,t0:m,t1:m,tC:-1,rs:[],rsI:0,next:()=>m,rsm:{},n:{},log:s?s.log:void 0,F:v(n.internal().config),use:{},NORULE:{name:"no-rule"},NOTOKEN:{name:"no-token"}})}throw o}}}}})),n=e((function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.makeTextMatcher=n.makeNumberMatcher=n.makeCommentMatcher=n.makeStringMatcher=n.makeLineMatcher=n.makeSpaceMatcher=n.makeFixedMatcher=n.makeToken=n.makePoint=n.makeLex=n.makeNoToken=void 0;const i=t({});class s{constructor(e,t,n,r){this.len=-1,this.sI=0,this.rI=1,this.cI=1,this.token=[],this.len=e,null!=t&&(this.sI=t),null!=n&&(this.rI=n),null!=r&&(this.cI=r)}toString(){return"Point["+[this.sI+"/"+this.len,this.rI,this.cI]+(0<this.token.length?" "+this.token:"")+"]"}[r.INSPECT](){return this.toString()}}const l=(...e)=>new s(...e);n.makePoint=l;class o{constructor(e,t,n,i,s,l,o){this.isToken=!0,this.name=r.EMPTY,this.tin=-1,this.val=void 0,this.src=r.EMPTY,this.sI=-1,this.rI=-1,this.cI=-1,this.len=-1,this.name=e,this.tin=t,this.src=i,this.val=n,this.sI=s.sI,this.rI=s.rI,this.cI=s.cI,this.use=l,this.why=o,this.len=null==i?0:i.length}resolveVal(e,t){return"function"==typeof this.val?this.val(e,t):this.val}bad(e,t){return this.err=e,null!=t&&(this.use=(0,i.deep)(this.use||{},t)),this}toString(){return"Token["+this.name+"="+this.tin+" "+(0,i.snip)(this.src)+(void 0===this.val||"#ST"===this.name||"#TX"===this.name?"":"="+(0,i.snip)(this.val))+" "+[this.sI,this.rI,this.cI]+(null==this.use?"":" "+(0,i.snip)(""+JSON.stringify(this.use).replace(/"/g,""),22))+(null==this.err?"":" "+this.err)+(null==this.why?"":" "+(0,i.snip)(""+this.why,22))+"]"}[r.INSPECT](){return this.toString()}}const a=(...e)=>new o(...e);function c(e,t,n){let r=e.pnt,i=t;if(e.cfg.fixed.lex&&null!=n&&0<n.length){let s=void 0,l=e.cfg.fixed.token[n];null!=l&&(s=e.token(l,void 0,n,r)),null!=s&&(r.sI+=s.src.length,r.cI+=s.src.length,null==t?i=s:r.token.push(s))}return i}n.makeToken=a,n.makeNoToken=()=>a("",-1,void 0,r.EMPTY,l(-1)),n.makeFixedMatcher=(e,t)=>{let n=(0,i.regexp)(null,"^(",e.rePart.fixed,")");return function(t){let r=e.fixed;if(!r.lex)return;let i=t.pnt,s=t.src.substring(i.sI).match(n);if(s){let e=s[1],n=e.length;if(0<n){let s=void 0,l=r.token[e];return null!=l&&(s=t.token(l,void 0,e,i),i.sI+=n,i.cI+=n),s}}}},n.makeCommentMatcher=(e,t)=>{let n=t.comment;e.comment={lex:!!n&&!!n.lex,marker:((null==n?void 0:n.marker)||[]).map(e=>({start:e.start,end:e.end,line:!!e.line,lex:!!e.lex}))};let r=e.comment.lex?e.comment.marker.filter(e=>e.lex&&e.line):[],s=e.comment.lex?e.comment.marker.filter(e=>e.lex&&!e.line):[];return function(t){if(!e.comment.lex)return;let n=t.pnt,l=t.src.substring(n.sI),o=n.rI,a=n.cI;for(let i of r)if(l.startsWith(i.start)){let r=l.length,s=i.start.length;for(a+=i.start.length;s<r&&!e.line.chars[l[s]];)a++,s++;let o=l.substring(0,s),c=t.token("#CM",void 0,o,n);return n.sI+=o.length,n.cI=a,c}for(let r of s)if(l.startsWith(r.start)){let s=l.length,c=r.start.length,u=r.end;for(a+=r.start.length;c<s&&!l.substring(c).startsWith(u);)e.line.rowChars[l[c]]&&(o++,a=0),a++,c++;if(l.substring(c).startsWith(u)){a+=u.length;let e=l.substring(0,c+u.length),r=t.token("#CM",void 0,e,n);return n.sI+=e.length,n.rI=o,n.cI=a,r}return t.bad(i.S.unterminated_comment,n.sI,n.sI+9*r.start.length)}}},n.makeTextMatcher=(e,t)=>{let n=(0,i.regexp)(e.line.lex?null:"s","^(.*?)",...e.rePart.ender);return function(r){let i=e.text,s=r.pnt,l=r.src.substring(s.sI),o=e.value.map,a=l.match(n);if(a){let n=a[1],l=a[2],u=void 0;if(null!=n){let t=n.length;if(0<t){let l=void 0;e.value.lex&&void 0!==(l=o[n])?(u=r.token("#VL",l.val,n,s),s.sI+=t,s.cI+=t):i.lex&&(u=r.token("#TX",n,n,s),s.sI+=t,s.cI+=t)}}if(u&&(u=c(r,u,l)),u&&0<e.text.modify.length){const n=e.text.modify;for(let i=0;i<n.length;i++)u.val=n[i](u.val,r,e,t)}return u}}},n.makeNumberMatcher=(e,t)=>{let n=e.number,r=(0,i.regexp)(null,["^([-+]?(0(",[n.hex?"x[0-9a-fA-F_]+":null,n.oct?"o[0-7_]+":null,n.bin?"b[01_]+":null].filter(e=>null!=e).join("|"),")|[.0-9]+([0-9_]*[0-9])?)","(\\.[0-9]?([0-9_]*[0-9])?)?","([eE][-+]?[0-9]+([0-9_]*[0-9])?)?"].join("").replace(/_/g,n.sep?(0,i.escre)(n.sepChar):""),")",...e.rePart.ender),s=n.sep?(0,i.regexp)("g",(0,i.escre)(n.sepChar)):void 0;return function(t){if(!(n=e.number).lex)return;let i=t.pnt,l=t.src.substring(i.sI),o=e.value.map,a=l.match(r);if(a){let n=a[1],r=a[9],l=void 0;if(null!=n){let r=n.length;if(0<r){let a=void 0;if(e.value.lex&&void 0!==(a=o[n]))l=t.token("#VL",a.val,n,i);else{let e=s?n.replace(s,""):n,o=+e;if(isNaN(o)){let t=e[0];"-"!==t&&"+"!==t||(o=("-"===t?-1:1)*+e.substring(1))}isNaN(o)||(l=t.token("#NR",o,n,i),i.sI+=r,i.cI+=r)}}}return l=c(t,l,r)}}},n.makeStringMatcher=(e,t)=>{let n=t.string||{};return e.string=e.string||{},e.string=(0,i.deep)(e.string,{lex:!!(null==n?void 0:n.lex),quoteMap:(0,i.charset)(n.chars),multiChars:(0,i.charset)(n.multiChars),escMap:(0,i.clean)({...n.escape}),escChar:n.escapeChar,escCharCode:null==n.escapeChar?void 0:n.escapeChar.charCodeAt(0),allowUnknown:!!n.allowUnknown,replaceCodeMap:(0,i.omap)((0,i.clean)({...n.replace}),([e,t])=>[e.charCodeAt(0),t]),hasReplace:!1}),e.string.hasReplace=0<(0,i.keys)(e.string.replaceCodeMap).length,function(t){let n=e.string;if(!n.lex)return;let{quoteMap:s,escMap:l,escChar:o,escCharCode:a,multiChars:c,allowUnknown:u,replaceCodeMap:p,hasReplace:d}=n,{pnt:m,src:h}=t,{sI:f,rI:g,cI:k}=m,x=h.length;if(s[h[f]]){const n=h[f],s=f,v=g,b=c[n];++f,++k;let y,I=[];for(;f<x;f++){k++;let r=h[f];if(y=void 0,n===r){f++;break}if(o===r){k++;let e=l[h[++f]];if(null!=e)I.push(e);else if("x"===h[f]){f++;let e=parseInt(h.substring(f,f+2),16);if(isNaN(e))return f-=2,k-=2,m.sI=f,m.cI=k,t.bad(i.S.invalid_ascii,f,f+4);let n=String.fromCharCode(e);I.push(n),f+=1,k+=2}else if("u"===h[f]){let e="{"===h[++f]?(f++,1):0,n=e?6:4,r=parseInt(h.substring(f,f+n),16);if(isNaN(r))return f=f-2-e,k-=2,m.sI=f,m.cI=k,t.bad(i.S.invalid_unicode,f,f+n+2+2*e);let s=String.fromCodePoint(r);I.push(s),f+=n-1+e,k+=n+e}else{if(!u)return m.sI=f,m.cI=k-1,t.bad(i.S.unexpected,f,f+1);I.push(h[f])}}else if(d&&void 0!==(y=p[h.charCodeAt(f)]))I.push(y),k++;else{let r=f,s=n.charCodeAt(0),l=h.charCodeAt(f);for(;(!d||void 0===(y=p[l]))&&f<x&&32<=l&&s!==l&&a!==l;)l=h.charCodeAt(++f),k++;if(k--,void 0===y&&l<32){if(!b||!e.line.chars[h[f]])return m.sI=f,m.cI=k,t.bad(i.S.unprintable,f,f+1);e.line.rowChars[h[f]]&&(m.rI=++g),k=1,I.push(h.substring(r,f+1))}else I.push(h.substring(r,f)),f--}}if(h[f-1]!==n||m.sI===f-1)return m.rI=v,t.bad(i.S.unterminated_string,s,f);const E=t.token("#ST",I.join(r.EMPTY),h.substring(m.sI,f),m);return m.sI=f,m.rI=g,m.cI=k,E}}},n.makeLineMatcher=(e,t)=>function(t){if(!e.line.lex)return;let{chars:n,rowChars:r}=e.line,{pnt:i,src:s}=t,{sI:l,rI:o}=i;for(;n[s[l]];)o+=r[s[l]]?1:0,l++;if(i.sI<l){let e=s.substring(i.sI,l);const n=t.token("#LN",void 0,e,i);return i.sI+=e.length,i.rI=o,i.cI=1,n}},n.makeSpaceMatcher=(e,t)=>function(t){if(!e.space.lex)return;let{chars:n}=e.space,{pnt:r,src:i}=t,{sI:s,cI:l}=r;for(;n[i[s]];)s++,l++;if(r.sI<s){let e=i.substring(r.sI,s);const n=t.token("#SP",void 0,e,r);return r.sI+=e.length,r.cI=l,n}};class u{constructor(e){this.src=r.EMPTY,this.ctx={},this.cfg={},this.pnt=l(-1),this.ctx=e,this.src=e.src(),this.cfg=e.cfg,this.pnt=l(this.src.length)}token(e,t,n,r,s,l){let o,c;return"string"==typeof e?(c=e,o=(0,i.tokenize)(c,this.cfg)):(o=e,c=(0,i.tokenize)(e,this.cfg)),a(c,o,t,n,r||this.pnt,s,l)}next(e){let t,n=this.pnt;if(n.end)t=n.end;else if(0<n.token.length)t=n.token.shift();else if(n.len<=n.sI)n.end=this.token("#ZZ",void 0,"",n),t=n.end;else{for(let n of this.cfg.lex.match)if(t=n(this,e))break;t=t||this.token("#BD",void 0,this.src[n.sI],n,void 0,"unexpected")}return this.ctx.log&&this.ctx.log(i.S.lex,(0,i.tokenize)(t.tin,this.cfg),this.ctx.F(t.src),n.sI,n.rI+":"+n.cI),t}tokenize(e){return(0,i.tokenize)(e,this.cfg)}bad(e,t,n){return this.token("#BD",void 0,0<=t&&t<=n?this.src.substring(t,n):this.src[this.pnt.sI],void 0,void 0,e)}}n.makeLex=(...e)=>new u(...e)})),r={};Object.defineProperty(r,"__esModule",{value:!0}),r.STRING=r.INSPECT=r.EMPTY=r.AFTER=r.BEFORE=r.CLOSE=r.OPEN=void 0,r.OPEN="o",r.CLOSE="c",r.BEFORE="b",r.AFTER="a",r.EMPTY="",r.INSPECT=Symbol.for("nodejs.util.inspect.custom"),r.STRING="string";var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.defaults=void 0;const s=n({}),l={tag:"-",fixed:{lex:!0,token:{"#OB":"{","#CB":"}","#OS":"[","#CS":"]","#CL":":","#CA":","}},tokenSet:{ignore:["#SP","#LN","#CM"]},space:{lex:!0,chars:" \t"},line:{lex:!0,chars:"\r\n",rowChars:"\n"},text:{lex:!0},number:{lex:!0,hex:!0,oct:!0,bin:!0,sep:"_"},comment:{lex:!0,marker:[{line:!0,start:"#",lex:!0},{line:!0,start:"//",lex:!0},{line:!1,start:"/*",end:"*/",lex:!0}]},string:{lex:!0,chars:"'\"`",multiChars:"`",escapeChar:"\\",escape:{b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v",'"':'"',"'":"'","`":"`","\\":"\\","/":"/"},allowUnknown:!0},map:{extend:!0,merge:void 0},value:{lex:!0,map:{true:{val:!0},false:{val:!1},null:{val:null}}},ender:[],plugin:{},debug:{get_console:()=>console,maxlen:99,print:{config:!1,src:void 0}},error:{unknown:"unknown error: $code",unexpected:"unexpected character(s): $src",invalid_unicode:"invalid unicode escape: $src",invalid_ascii:"invalid ascii escape: $src",unprintable:"unprintable character: $src",unterminated_string:"unterminated string: $src",unterminated_comment:"unterminated comment: $src",unknown_rule:"unknown rule: $rulename"},hint:function(e=((e,t="replace")=>e[t](/[A-Z]/g,e=>" "+e.toLowerCase())[t](/[~%][a-z]/g,e=>("~"==e[0]?" ":"")+e[1].toUpperCase())),t="~sinceTheErrorIsUnknown,ThisIsProbablyABugInsideJsonic\nitself,OrAPlugin.~pleaseConsiderPostingAGithubIssue -Thanks!\n\n~code: $code,~details: \n$details|~theCharacter(s) $srcWereNotExpectedAtThisPointAsTheyDoNot\nmatchTheExpectedSyntax,EvenUnderTheRelaxedJsonicRules.~ifIt\nisNotObviouslyWrong,TheActualSyntaxErrorMayBeElsewhere.~try\ncommentingOutLargerAreasAroundThisPointUntilYouGetNoErrors,\nthenRemoveTheCommentsInSmallSectionsUntilYouFindThe\noffendingSyntax.~n%o%t%e:~alsoCheckIfAnyPluginsYouAreUsing\nexpectDifferentSyntaxInThisCase.|~theEscapeSequence $srcDoesNotEncodeAValidUnicodeCodePoint\nnumber.~youMayNeedToValidateYourStringDataManuallyUsingTest\ncodeToSeeHow~javaScriptWillInterpretIt.~alsoConsiderThatYour\ndataMayHaveBecomeCorrupted,OrTheEscapeSequenceHasNotBeen\ngeneratedCorrectly.|~theEscapeSequence $srcDoesNotEncodeAValid~a%s%c%i%iCharacter.~you\nmayNeedToValidateYourStringDataManuallyUsingTestCodeToSee\nhow~javaScriptWillInterpretIt.~alsoConsiderThatYourDataMay\nhaveBecomeCorrupted,OrTheEscapeSequenceHasNotBeenGenerated\ncorrectly.|~stringValuesCannotContainUnprintableCharacters (characterCodes\nbelow 32).~theCharacter $srcIsUnprintable.~youMayNeedToRemove\ntheseCharactersFromYourSourceData.~alsoCheckThatItHasNot\nbecomeCorrupted.|~thisStringHasNoEndQuote.|~thisCommentIsNeverClosed.|~noRuleNamed $rulenameIsDefined.~thisIsProbablyAnErrorInThe\ngrammarOfAPlugin.".split("|")){return"unknown|unexpected|invalid_unicode|invalid_ascii|unprintable|unterminated_string|unterminated_comment|unknown_rule".split("|").reduce((n,r,i)=>(n[r]=e(t[i]),n),{})},lex:{match:[s.makeFixedMatcher,s.makeSpaceMatcher,s.makeLineMatcher,s.makeStringMatcher,s.makeCommentMatcher,s.makeNumberMatcher,s.makeTextMatcher],empty:!0},rule:{start:"val",finish:!0,maxmul:3,include:"",exclude:""},config:{modify:{}},parser:{start:void 0}};i.defaults=l;var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.Parser=o.makeRuleSpec=o.makeRule=void 0;const a=t({}),c=n({});class u{constructor(e,t,n){this.id=-1,this.name=r.EMPTY,this.node=null,this.state=r.OPEN,this.n={},this.d=-1,this.use={},this.bo=!1,this.ao=!1,this.bc=!1,this.ac=!1,this.os=0,this.cs=0,this.id=t.uI++,this.name=e.name,this.spec=e,this.child=t.NORULE,this.parent=t.NORULE,this.prev=t.NORULE,this.o0=t.NOTOKEN,this.o1=t.NOTOKEN,this.c0=t.NOTOKEN,this.c1=t.NOTOKEN,this.node=n,this.d=t.rsI,this.bo=null!=e.def.bo,this.ao=null!=e.def.ao,this.bc=null!=e.def.bc,this.ac=null!=e.def.ac}process(e){return this.spec.process(this,e,this.state)}}const p=(...e)=>new u(...e);o.makeRule=p;class d{constructor(){this.p=r.EMPTY,this.r=r.EMPTY,this.b=0}}const m=(...e)=>new d(...e),h=m(),f=m();class g{constructor(e,t){this.name=r.EMPTY,this.cfg=e,this.def=t||{},this.def.open=(this.def.open||[]).filter(e=>null!=e),this.def.close=(this.def.close||[]).filter(e=>null!=e);for(let n of[...this.def.open,...this.def.close])(0,a.normalt)(n)}tin(e){return(0,a.tokenize)(e,this.cfg)}add(e,t,n){let r=(null==n?void 0:n.last)?"push":"unshift",i=((0,a.isarr)(t)?t:[t]).filter(e=>null!=e).map(e=>(0,a.normalt)(e));return this.def["o"===e?"open":"close"][r](...i),(0,a.filterRules)(this,this.cfg),this}open(e,t){return this.add("o",e,t)}close(e,t){return this.add("c",e,t)}action(e,t,n){return this.def[e+t]=n,this}bo(e){return this.action(r.BEFORE,r.OPEN,e)}ao(e){return this.action(r.AFTER,r.OPEN,e)}bc(e){return this.action(r.BEFORE,r.CLOSE,e)}ac(e){return this.action(r.AFTER,r.CLOSE,e)}clear(){return this.def={open:[],close:[]},this}process(e,t,n){let i=r.EMPTY,s=t.F,l="o"===n,o=l?e:t.NORULE,c=this.def,u=l?c.open:c.close,d=l?e.bo&&c.bo:e.bc&&c.bc,m=d&&d.call(this,e,t);if(m&&m.isToken&&null!=m.err)return this.bad(m,e,t,{is_open:l});let h=0<u.length?this.parse_alts(l,u,e,t):f;if(h.h&&(h=h.h(e,t,h,o)||h,i+="H"),h.e)return this.bad(h.e,e,t,{is_open:l});if(h.n)for(let r in h.n)e.n[r]=0===h.n[r]?0:(null==e.n[r]?0:e.n[r])+h.n[r];if(h.u&&(e.use=Object.assign(e.use,h.u)),h.a){i+="A";let n=h.a.call(this,e,t,h);if(n&&n.isToken&&n.err)return this.bad(n,e,t,{is_open:l})}if(h.p){t.rs[t.rsI++]=e;let n=t.rsm[h.p];if(!n)return this.bad(this.unknownRule(t.t0,h.p),e,t,{is_open:l});(o=e.child=p(n,t,e.node)).parent=e,o.n={...e.n},i+="@p:"+h.p}else if(h.r){let n=t.rsm[h.r];if(!n)return this.bad(this.unknownRule(t.t0,h.r),e,t,{is_open:l});(o=p(n,t,e.node)).parent=e.parent,o.prev=e,o.n={...e.n},i+="@r:"+h.r}else l||(o=t.rs[--t.rsI]||t.NORULE),i+="Z";let g=l?e.ao&&c.ao:e.ac&&c.ac,k=g&&g.call(this,e,t,h,o);if(k&&k.isToken&&null!=k.err)return this.bad(k,e,t,{is_open:l});o.why=i,t.log&&t.log("node  "+e.state.toUpperCase(),e.prev.id+"/"+e.parent.id+"/"+e.child.id,e.name+"~"+e.id,"w="+i,"n:"+(0,a.entries)(e.n).filter(e=>e[1]).map(e=>e[0]+"="+e[1]).join(";"),"u:"+(0,a.entries)(e.use).map(e=>e[0]+"="+e[1]).join(";"),"<"+s(e.node)+">");let x=0,v=e[l?"os":"cs"]-(h.b||0);for(;x++<v;)t.next();return r.OPEN===e.state&&(e.state=r.CLOSE),o}parse_alts(e,t,n,i){let s=h;s.b=0,s.p=r.EMPTY,s.r=r.EMPTY,s.n=void 0,s.h=void 0,s.a=void 0,s.u=void 0,s.e=void 0;let l,o=null,c=0,u=i.cfg.t,p=1<<u.AA-1,d=t.length;for(c=0;c<d;c++){o=t[c];let r=i.t0.tin,a=!1,u=!1;if(l=!0,o.S0&&(a=!0,(l=o.S0[r/31|0]&(1<<r%31-1|p))&&(u=null!=o.S1,o.S1))){u=!0;let e=i.t1.tin;l=o.S1[e/31|0]&(1<<e%31-1|p)}if(e?(n.o0=a?i.t0:i.NOTOKEN,n.o1=u?i.t1:i.NOTOKEN,n.os=(a?1:0)+(u?1:0)):(n.c0=a?i.t0:i.NOTOKEN,n.c1=u?i.t1:i.NOTOKEN,n.cs=(a?1:0)+(u?1:0)),l&&o.c&&(l=l&&o.c(n,i,s)),l)break;o=null}l||u.ZZ===i.t0.tin||(s.e=i.t0),o&&(s.n=null!=o.n?o.n:s.n,s.h=null!=o.h?o.h:s.h,s.a=null!=o.a?o.a:s.a,s.u=null!=o.u?o.u:s.u,s.g=null!=o.g?o.g:s.g,s.e=o.e&&o.e(n,i,s)||void 0,s.p=null!=o.p?"string"==typeof o.p?o.p:o.p(n,i,s):s.p,s.r=null!=o.r?"string"==typeof o.r?o.r:o.r(n,i,s):s.r,s.b=null!=o.b?"number"==typeof o.b?o.b:o.b(n,i,s):s.b);let m=c<t.length;return i.log&&i.log("parse "+n.state.toUpperCase(),n.prev.id+"/"+n.parent.id+"/"+n.child.id,n.name+"~"+n.id,m?"alt="+c:"no-alt",m&&s.g?"g:"+s.g+" ":"",(m&&s.p?"p:"+s.p+" ":"")+(m&&s.r?"r:"+s.r+" ":"")+(m&&s.b?"b:"+s.b+" ":""),(r.OPEN===n.state?[n.o0,n.o1].slice(0,n.os):[n.c0,n.c1].slice(0,n.cs)).map(e=>e.name+"="+i.F(e.src)).join(" "),"c:"+(o&&o.c?l:r.EMPTY),"n:"+(0,a.entries)(s.n).map(e=>e[0]+"="+e[1]).join(";"),"u:"+(0,a.entries)(s.u).map(e=>e[0]+"="+e[1]).join(";"),c<t.length&&o.s?"["+o.s.map(e=>Array.isArray(e)?e.map(e=>u[e]).join("|"):u[e]).join(" ")+"]":"[]",s),s}bad(e,t,n,r){throw new a.JsonicError(e.err||a.S.unexpected,{...e.use,state:r.is_open?a.S.open:a.S.close},e,t,n)}unknownRule(e,t){return e.err="unknown_rule",e.use=e.use||{},e.use.rulename=t,e}}const k=(...e)=>new g(...e);o.makeRuleSpec=k;class x{constructor(e,t){this.rsm={},this.options=e,this.cfg=t}rule(e,t){if(null==e)return this.rsm;let n=this.rsm[e];if(null===t)delete this.rsm[e];else if(void 0!==t){n=this.rsm[e]=this.rsm[e]||k(this.cfg,{}),(n=this.rsm[e]=t(this.rsm[e],this.rsm)||this.rsm[e]).name=e;for(let e of[...n.def.open,...n.def.close])(0,a.normalt)(e);return}return n}start(e,t,n,i){let s,l=(0,c.makeToken)("#ZZ",(0,a.tokenize)("#ZZ",this.cfg),void 0,r.EMPTY,(0,c.makePoint)(-1)),o=(0,c.makeNoToken)(),u={uI:0,opts:this.options,cfg:this.cfg,meta:n||{},src:()=>e,root:()=>s.node,plgn:()=>t.internal().plugins,rule:{},xs:-1,v2:l,v1:l,t0:l,t1:l,tC:-2,next:b,rs:[],rsI:0,rsm:this.rsm,log:void 0,F:(0,a.srcfmt)(this.cfg),use:{},NOTOKEN:o,NORULE:{}};u=(0,a.deep)(u,i);let d=(e=>p(k(e.cfg,{}),e))(u);if(u.NORULE=d,u.rule=d,(0,a.makelog)(u,n),""===e){if(this.cfg.lex.empty)return;throw new a.JsonicError(a.S.unexpected,{src:e},u.t0,d,u)}let m=e=>(0,a.tokenize)(e,this.cfg),h=(0,a.badlex)((0,c.makeLex)(u),(0,a.tokenize)("#BD",this.cfg),u),f=this.rsm[this.cfg.rule.start];if(null==f)return;let g=p(f,u);s=g;let x=2*(0,a.keys)(this.rsm).length*h.src.length*2*u.cfg.rule.maxmul,v=u.cfg.tokenSet.ignore;function b(){let e;u.v2=u.v1,u.v1=u.t0,u.t0=u.t1;do{e=h(g),u.tC++}while(v[e.tin]);return u.t1=e,u.t0}b(),b();let y=0;for(;d!==g&&y<x;)u.log&&u.log("\nstack","<<"+u.F(s.node)+">>",u.rs.slice(0,u.rsI).map(e=>e.name+"~"+e.id).join("/"),u.rs.slice(0,u.rsI).map(e=>"<"+u.F(e.node)+">").join(" "),g,u,"\n"),u.log&&u.log("rule  "+g.state.toUpperCase(),g.prev.id+"/"+g.parent.id+"/"+g.child.id,g.name+"~"+g.id,"["+u.F(u.t0.src)+" "+u.F(u.t1.src)+"]","n:"+(0,a.entries)(g.n).filter(e=>e[1]).map(e=>e[0]+"="+e[1]).join(";"),"u:"+(0,a.entries)(g.use).map(e=>e[0]+"="+e[1]).join(";"),"["+m(u.t0.tin)+" "+m(u.t1.tin)+"]",g,u),u.rule=g,g=g.process(u),y++;if((0,a.tokenize)("#ZZ",this.cfg)!==u.t0.tin)throw new a.JsonicError(a.S.unexpected,{},u.t0,d,u);return u.root()}clone(e,t){let n=new x(e,t);return n.rsm=Object.keys(this.rsm).reduce((e,t)=>(e[t]=(0,a.filterRules)(this.rsm[t],this.cfg),e),{}),n}}o.Parser=x;var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.grammar=void 0,v.grammar=function(e){const t=e.token.OB,n=e.token.CB,r=e.token.OS,i=e.token.CS,s=e.token.CL,l=e.token.CA,o=e.token.TX,a=e.token.NR,c=e.token.ST,u=e.token.VL,p=e.token.ZZ,d=[o,a,c,u],m=e.util.deep,h=(e,t)=>{if(!t.cfg.rule.finish)return t.t0.src="END_OF_SOURCE",t.t0};e.rule("val",e=>{e.bo(e=>e.node=void 0).open([{s:[t],p:"map",b:1,g:"map,json"},{s:[r],p:"list",b:1,g:"list,json"},{s:[d,s],p:"map",b:2,n:{pk:1},g:"pair,json"},{s:[d],g:"val,json"},{s:[[n,i]],b:1,g:"val,imp,null"},{s:[l],c:{n:{il:0}},p:"list",b:1,g:"list,imp"},{s:[l],b:1,g:"list,val,imp,null"}]).close([{s:[p],g:"end"},{s:[[n,i]],b:1,g:"val,json,close"},{s:[l],c:{n:{il:0,pk:0}},n:{il:1},r:"elem",a:e=>e.node=[e.node],g:"list,val,imp,comma"},{c:{n:{il:0,pk:0}},n:{il:1},r:"elem",a:e=>e.node=[e.node],g:"list,val,imp,space",b:1},{b:1,g:"val,json,more"}]).bc((e,t)=>{e.node=void 0===e.node?void 0===e.child.node?0===e.os?void 0:e.o0.resolveVal(e,t):e.child.node:e.node})}),e.rule("map",e=>{e.bo(e=>{e.n.il=1+(e.n.il?e.n.il:0),e.n.im=1+(e.n.im?e.n.im:0),e.node={}}).open([{s:[t,n],g:"map,json"},{s:[t],p:"pair",n:{pk:0},g:"map,json,pair"},{s:[d,s],p:"pair",b:2,g:"pair,list,val,imp"}])}),e.rule("list",e=>{e.bo(e=>{e.n.il=1+(e.n.il?e.n.il:0),e.n.pk=1+(e.n.pk?e.n.pk:0),e.n.im=1+(e.n.im?e.n.im:0),e.node=[]}).open([{s:[r,i],g:"list,json"},{s:[r],p:"elem",g:"list,json,elem"},{s:[l],p:"elem",b:1,g:"list,elem,val,imp"},{p:"elem",g:"list,elem"}])}),e.rule("pair",e=>{e.open([{s:[d,s],p:"val",u:{key:!0},g:"map,pair,key,json"},{s:[l],g:"map,pair,comma"}]).bc((e,t)=>{if(e.use.key){const n=e.o0,r=c===n.tin||o===n.tin?n.val:n.src;let i=e.child.node;const s=e.node[r];i=void 0===i?null:i,e.node[r]=null==s?i:t.cfg.map.merge?t.cfg.map.merge(s,i):t.cfg.map.extend?m(s,i):i}}).close([{s:[n],c:{n:{pk:0}},g:"map,pair,json"},{s:[l,n],c:{n:{pk:0}},g:"map,pair,comma"},{s:[l],c:{n:{pk:0}},r:"pair",g:"map,pair,json"},{s:[l],c:{n:{im:1}},r:"pair",g:"map,pair,json"},{s:[d],c:{n:{pk:0}},r:"pair",b:1,g:"map,pair,imp"},{s:[d],c:{n:{im:1}},r:"pair",b:1,g:"map,pair,imp"},{s:[[n,l,...d]],b:1,g:"map,pair,imp,path"},{s:[i],b:1,g:"list,pair,imp"},{s:[p],e:h,g:"map,pair,json"}])}),e.rule("elem",e=>{e.open([{s:[l,l],b:2,a:e=>e.node.push(null),g:"list,elem,imp,null"},{s:[l],a:e=>e.node.push(null),g:"list,elem,imp,null"},{p:"val",g:"list,elem,val,json"}]).bc(e=>{void 0!==e.child.node&&e.node.push(e.child.node)}).close([{s:[l,i],g:"list,elem,comma"},{s:[l],r:"elem",g:"list,elem,json"},{s:[[...d,t,r]],r:"elem",b:1,g:"list,elem,imp"},{s:[i],g:"list,elem,json"},{s:[p],e:h,g:"list,elem,json"}])})};var b={exports:{}};Object.defineProperty(b.exports,"__esModule",{value:!0}),b.exports.AFTER=b.exports.BEFORE=b.exports.CLOSE=b.exports.OPEN=b.exports.makeTextMatcher=b.exports.makeNumberMatcher=b.exports.makeCommentMatcher=b.exports.makeStringMatcher=b.exports.makeLineMatcher=b.exports.makeSpaceMatcher=b.exports.makeFixedMatcher=b.exports.makeLex=b.exports.makeRuleSpec=b.exports.makeRule=b.exports.makePoint=b.exports.makeToken=b.exports.make=b.exports.util=b.exports.Parser=b.exports.JsonicError=b.exports.Jsonic=void 0,Object.defineProperty(b.exports,"OPEN",{enumerable:!0,get:function(){return r.OPEN}}),Object.defineProperty(b.exports,"CLOSE",{enumerable:!0,get:function(){return r.CLOSE}}),Object.defineProperty(b.exports,"BEFORE",{enumerable:!0,get:function(){return r.BEFORE}}),Object.defineProperty(b.exports,"AFTER",{enumerable:!0,get:function(){return r.AFTER}});const y=t({});Object.defineProperty(b.exports,"JsonicError",{enumerable:!0,get:function(){return y.JsonicError}});const I=n({});Object.defineProperty(b.exports,"makePoint",{enumerable:!0,get:function(){return I.makePoint}}),Object.defineProperty(b.exports,"makeToken",{enumerable:!0,get:function(){return I.makeToken}}),Object.defineProperty(b.exports,"makeLex",{enumerable:!0,get:function(){return I.makeLex}}),Object.defineProperty(b.exports,"makeFixedMatcher",{enumerable:!0,get:function(){return I.makeFixedMatcher}}),Object.defineProperty(b.exports,"makeSpaceMatcher",{enumerable:!0,get:function(){return I.makeSpaceMatcher}}),Object.defineProperty(b.exports,"makeLineMatcher",{enumerable:!0,get:function(){return I.makeLineMatcher}}),Object.defineProperty(b.exports,"makeStringMatcher",{enumerable:!0,get:function(){return I.makeStringMatcher}}),Object.defineProperty(b.exports,"makeCommentMatcher",{enumerable:!0,get:function(){return I.makeCommentMatcher}}),Object.defineProperty(b.exports,"makeNumberMatcher",{enumerable:!0,get:function(){return I.makeNumberMatcher}}),Object.defineProperty(b.exports,"makeTextMatcher",{enumerable:!0,get:function(){return I.makeTextMatcher}}),Object.defineProperty(b.exports,"makeRule",{enumerable:!0,get:function(){return o.makeRule}}),Object.defineProperty(b.exports,"makeRuleSpec",{enumerable:!0,get:function(){return o.makeRuleSpec}}),Object.defineProperty(b.exports,"Parser",{enumerable:!0,get:function(){return o.Parser}});const E={tokenize:y.tokenize,srcfmt:y.srcfmt,deep:y.deep,clone:y.clone,charset:y.charset,trimstk:y.trimstk,makelog:y.makelog,badlex:y.badlex,extract:y.extract,errinject:y.errinject,errdesc:y.errdesc,configure:y.configure,parserwrap:y.parserwrap,mesc:y.mesc,escre:y.escre,regexp:y.regexp,prop:y.prop,str:y.str,omap:y.omap,keys:y.keys,values:y.values,entries:y.entries};function S(e,t){let n={parser:{},config:{},plugins:[],mark:Math.random()},r=(0,y.deep)({},t?{...t.options}:!1===(null==e?void 0:e.defaults$)?{}:i.defaults,e||{}),s=function(e,t,n){var r;if(y.S.string===typeof e){let i=s.internal();return((null===(r=l.parser)||void 0===r?void 0:r.start)?(0,y.parserwrap)(l.parser):i.parser).start(e,s,t,n)}return e},l=e=>{if(null!=e&&y.S.object===typeof e){(0,y.deep)(r,e),(0,y.configure)(s,n.config,r);let t=s.internal().parser;n.parser=t.clone(r,n.config)}return{...s.options}},a={token:e=>(0,y.tokenize)(e,n.config,s),fixed:e=>n.config.fixed.ref[e],options:(0,y.deep)(l,r),parse:s,use:function(e,t){const n=e.name.toLowerCase(),r=(0,y.deep)({},e.defaults||{},t||{});s.options({plugin:{[n]:r}});let i=s.options.plugin[n];return s.internal().plugins.push(e),e(s,i)||s},rule:(e,t)=>s.internal().parser.rule(e,t)||s,lex:e=>{let t=r.lex.match;t.unshift(e),s.options({lex:{match:t}})},make:e=>S(e,s),empty:e=>S({defaults$:!1,grammar$:!1,...e||{}}),id:"Jsonic/"+Date.now()+"/"+(""+Math.random()).substring(2,8).padEnd(6,"0")+(null==l.tag?"":"/"+l.tag),toString:()=>a.id,util:E};if((0,y.defprop)(a.make,y.S.name,{value:y.S.make}),(0,y.assign)(s,a),(0,y.defprop)(s,"internal",{value:()=>n}),t){for(let n in t)void 0===s[n]&&(s[n]=t[n]);s.parent=t;let e=t.internal();n.config=(0,y.deep)({},e.config),(0,y.configure)(s,n.config,r),(0,y.assign)(s.token,n.config.t),n.plugins=[...e.plugins],n.parser=e.parser.clone(r,n.config)}else n.config=(0,y.configure)(s,void 0,r),n.plugins=[],n.parser=new o.Parser(r,n.config),!1!==r.grammar$&&(0,v.grammar)(s);return s}b.exports.util=E,b.exports.make=S;let M=void 0,O=M=S();return b.exports.Jsonic=O,delete M.options,delete M.use,delete M.rule,delete M.lex,delete M.token,delete M.fixed,M.Jsonic=M,M.JsonicError=y.JsonicError,M.Parser=o.Parser,M.makeLex=I.makeLex,M.makeToken=I.makeToken,M.makePoint=I.makePoint,M.makeRule=o.makeRule,M.makeRuleSpec=o.makeRuleSpec,M.makeFixedMatcher=I.makeFixedMatcher,M.makeSpaceMatcher=I.makeSpaceMatcher,M.makeLineMatcher=I.makeLineMatcher,M.makeStringMatcher=I.makeStringMatcher,M.makeCommentMatcher=I.makeCommentMatcher,M.makeNumberMatcher=I.makeNumberMatcher,M.makeTextMatcher=I.makeTextMatcher,M.util=E,M.make=S,b.exports.default=O,b.exports=b.exports.Jsonic,b=b.exports}));

/***/ }),

/***/ "ffda":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ffda__;

/***/ })

/******/ });
});
//# sourceMappingURL=Vxg.umd.js.map