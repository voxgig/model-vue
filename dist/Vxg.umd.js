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

// EXTERNAL MODULE: ./src/vxg.scss
var vxg = __webpack_require__("f17e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"00eff171-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAdmin.vue?vue&type=template&id=65e529e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"app"}},[_c('vxg-basic-head',{attrs:{"spec":_vm.spec.parts.head,"logo":_vm.logo}}),_c('vxg-basic-side',{attrs:{"spec":_vm.spec.parts.side,"logo":_vm.logo}}),_c('vxg-basic-main',{attrs:{"spec":_vm.spec.parts.main}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicAdmin.vue?vue&type=template&id=65e529e1&

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
/* harmony default export */ var BasicAdminvue_type_script_lang_js_ = ({
  props: ['logo'],
  data: function data() {
    return {
      spec: this.$model.main.app.web
    };
  },
  mounted: function mounted() {
    console.log('BasicAdmin', !!this.$vuetify);
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"00eff171-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=template&id=f30dab72&
var BasicHeadvue_type_template_id_f30dab72_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app-bar',{staticStyle:{"height":"64px","background-color":"white"},attrs:{"app":""}},[_c('v-btn',{staticClass:"vxg-head-btn",attrs:{"tile":""}},[_c('v-icon',{attrs:{"left":"","medium":""}},[_vm._v(" mdi-map-marker-path ")]),_vm._v(" Add Asset ")],1),_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}})],1)}
var BasicHeadvue_type_template_id_f30dab72_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicHead.vue?vue&type=template&id=f30dab72&

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
/* harmony default export */ var BasicHeadvue_type_script_lang_js_ = ({
  props: ['logo'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    console.log('BasicHead', this);
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

// CONCATENATED MODULE: ./src/components/BasicHead.vue






/* normalize component */

var BasicHead_component = normalizeComponent(
  components_BasicHeadvue_type_script_lang_js_,
  BasicHeadvue_type_template_id_f30dab72_render,
  BasicHeadvue_type_template_id_f30dab72_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicHead = (BasicHead_component.exports);

/* vuetify-loader */





installComponents_default()(BasicHead_component, {VAppBar: VAppBar_["VAppBar"],VBtn: VBtn_["VBtn"],VDivider: VDivider_["VDivider"],VIcon: VIcon_["VIcon"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"00eff171-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFoot.vue?vue&type=template&id=20c93938&
var BasicFootvue_type_template_id_20c93938_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("___")])}
var BasicFootvue_type_template_id_20c93938_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicFoot.vue?vue&type=template&id=20c93938&

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
  created: function created() {
    console.log('BasicFoot', !!this.$vuetify, !!this.$model);
  }
});
// CONCATENATED MODULE: ./src/components/BasicFoot.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicFootvue_type_script_lang_js_ = (BasicFootvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BasicFoot.vue





/* normalize component */

var BasicFoot_component = normalizeComponent(
  components_BasicFootvue_type_script_lang_js_,
  BasicFootvue_type_template_id_20c93938_render,
  BasicFootvue_type_template_id_20c93938_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicFoot = (BasicFoot_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"00eff171-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicMain.vue?vue&type=template&id=6bccdb36&
var BasicMainvue_type_template_id_6bccdb36_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-main',{attrs:{"app":""}},[_c('v-container',{staticStyle:{"padding":"0px"},attrs:{"xclass":"py-5 px-5","fluid":""}},[_c('router-view',{tag:"component",attrs:{"spec":_vm.view_spec}})],1)],1)}
var BasicMainvue_type_template_id_6bccdb36_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicMain.vue?vue&type=template&id=6bccdb36&

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
      var viewname = this.$route.meta.view;
      var spec = this.$model.main.app.web.view[viewname].spec;
      console.log('VIEW SPEC', spec);
      return spec;
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicMainvue_type_script_lang_js_ = (BasicMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: external "vuetify/lib/components/VGrid"
var VGrid_ = __webpack_require__("5f3c");

// EXTERNAL MODULE: external "vuetify/lib/components/VMain"
var VMain_ = __webpack_require__("1faa");

// CONCATENATED MODULE: ./src/components/BasicMain.vue





/* normalize component */

var BasicMain_component = normalizeComponent(
  components_BasicMainvue_type_script_lang_js_,
  BasicMainvue_type_template_id_6bccdb36_render,
  BasicMainvue_type_template_id_6bccdb36_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicMain = (BasicMain_component.exports);

/* vuetify-loader */



installComponents_default()(BasicMain_component, {VContainer: VGrid_["VContainer"],VMain: VMain_["VMain"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"00eff171-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=template&id=7d849f44&
var BasicSidevue_type_template_id_7d849f44_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-navigation-drawer',{staticClass:"vxg-side",attrs:{"app":""}},[_c('v-sheet',{staticStyle:{"display":"flex","flex-direction":"column","height":"100%"}},[_c('div',{staticStyle:{"display":"inline"},domProps:{"innerHTML":_vm._s(_vm.logo)}}),_vm._l((_vm.menu),function(item){return [_c('router-link',{key:item.code,tag:"component",class:item.klass,staticStyle:{"flex-grow":"1"},attrs:{"to":'/main/'+item.code}},[_c('v-icon',[_vm._v("mdi-"+_vm._s(item.icon))]),_vm._v(" "+_vm._s(item.title)+" ")],1)]}),_c('div',{staticStyle:{"flex-grow":"100"}}),_c('v-divider'),_c('a',{staticClass:"vxg-router-link",attrs:{"href":"#/main/asset"}},[_c('i',{staticClass:"v-icon notranslate mdi mdi-help theme--light",attrs:{"aria-hidden":"true"}}),_vm._v(" Support ")]),_c('a',{staticClass:"vxg-router-link",attrs:{"href":"#/main/asset"}},[_c('i',{staticClass:"v-icon notranslate mdi mdi-logout-variant theme--light",attrs:{"aria-hidden":"true"}}),_vm._v(" Sign out ")])],2)],1)}
var BasicSidevue_type_template_id_7d849f44_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicSide.vue?vue&type=template&id=7d849f44&

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

/*
<div
          :key="item.code"
          class="pqs-nav-menu">
          <v-icon>mdi-{{ item.icon }}</v-icon> {{ item.title }}
        </div>

*/
/* harmony default export */ var BasicSidevue_type_script_lang_js_ = ({
  props: {
    spec: {
      type: Object,
      required: true
    },
    logo: String
  },
  data: function data() {
    return {};
  },
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
  BasicSidevue_type_template_id_7d849f44_render,
  BasicSidevue_type_template_id_7d849f44_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicSide = (BasicSide_component.exports);

/* vuetify-loader */





installComponents_default()(BasicSide_component, {VDivider: VDivider_["VDivider"],VIcon: VIcon_["VIcon"],VNavigationDrawer: VNavigationDrawer_["VNavigationDrawer"],VSheet: VSheet_["VSheet"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"00eff171-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=template&id=5e25c82f&
var BasicLedvue_type_template_id_5e25c82f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.show.table)?_c('v-data-table',{attrs:{"headers":_vm.headers,"items":_vm.items,"items-per-page":25,"dense":"","footer-props":{
                   itemsPerPageOptions:[25,50,75,100,-1]
                   }},on:{"click:row":_vm.openItem},scopedSlots:_vm._u([_vm._l((_vm.headers),function(header){return {key:_vm.itemslot(header),fn:function(ref){
                   var item = ref.item;
return [_c('div',{key:header.value},[('status'===header.type)?_c('span',[_c('v-chip',{staticStyle:{"font-weight":"bold","color":"white"},attrs:{"small":"","xclass":"ma-2","color":'outofdate'===item[header.value]?'red':'suspended'===item[header.value]?'orange':'blue'}},[_vm._v(" "+_vm._s(header.kind[item[header.value]].title)+" ")])],1):('datetime'===header.type)?_c('span',[_vm._v(" "+_vm._s(new Date(item[header.value]))+" ")]):_c('span',[_vm._v(_vm._s(item[header.value]))])])]}}})],null,true)}):_vm._e(),(_vm.show.item)?_c('div',[_c('div',{staticStyle:{"box-sizing":"border-box","display":"flex","flex-flow":"row wrap"}},_vm._l((_vm.fields),function(field,fI){return _c('div',{key:fI,staticClass:"vxg-form-field",style:(_vm.fieldstyle(field,fI))},[('string'===field.type)?_c('v-text-field',{attrs:{"label":field.title,"outlined":""},model:{value:(_vm.item[field.name]),callback:function ($$v) {_vm.$set(_vm.item, field.name, $$v)},expression:"item[field.name]"}}):_vm._e(),('status'===field.type)?_c('v-select',{attrs:{"items":_vm.selection(field),"label":field.title,"outlined":""},model:{value:(_vm.item[field.name]),callback:function ($$v) {_vm.$set(_vm.item, field.name, $$v)},expression:"item[field.name]"}}):_vm._e()],1)}),0),_c('v-toolbar',{attrs:{"flat":""}},[_c('v-btn',{attrs:{"outlined":""},on:{"click":_vm.closeItem}},[_vm._v("Cancel")]),_c('v-spacer'),_c('v-btn',{attrs:{"outlined":""},on:{"click":_vm.closeItem}},[_vm._v("Save")])],1)],1):_vm._e()],1)}
var BasicLedvue_type_template_id_5e25c82f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicLed.vue?vue&type=template&id=5e25c82f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
/* harmony default export */ var BasicLedvue_type_script_lang_js_ = ({
  props: {
    spec: {
      type: Object,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      item: null,
      show: {
        table: true,
        item: false
      }
    };
  },
  computed: {
    headers: function headers() {
      return Object.entries(this.spec.ent.primary.field).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            fn = _ref2[0],
            fd = _ref2[1];

        return {
          value: fn,
          text: fd.title,
          type: fd.type,
          kind: fd.kind || {}
        };
      });
    },
    items: function items() {
      return this.rows;
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
            var fd = _objectSpread({}, this.spec.ent.primary.field[fn]);

            fd.name = fn;
            fd.size = this.spec.edit.layout.field[fn].size;
            fds.push(fd);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return fds;
      } catch (e) {
        console.log(e);
      }

      return [];
    }
  },
  methods: {
    itemslot: function itemslot(header) {
      return 'item.' + header.value;
    },
    selection: function selection(field) {
      var selects = Object.entries(field.kind).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            n = _ref4[0],
            d = _ref4[1];

        return {
          text: d.title,
          value: n
        };
      });
      console.log('selects', field, selects);
      return selects;
    },
    openItem: function openItem(selitem) {
      console.log('OPEN', selitem);

      if (false === this.spec.edit.active) {
        return;
      }

      this.item = selitem;
      this.show.table = false;
      this.show.item = true;
    },
    closeItem: function closeItem() {
      this.show.table = true;
      this.show.item = false;
    },
    fieldstyle: function fieldstyle(field) {
      return {
        'flex-basis': 100 * field.size / 12 + '%'
      };
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

// EXTERNAL MODULE: external "vuetify/lib/components/VTextField"
var VTextField_ = __webpack_require__("6881");

// EXTERNAL MODULE: external "vuetify/lib/components/VToolbar"
var VToolbar_ = __webpack_require__("e34a");

// CONCATENATED MODULE: ./src/components/BasicLed.vue






/* normalize component */

var BasicLed_component = normalizeComponent(
  components_BasicLedvue_type_script_lang_js_,
  BasicLedvue_type_template_id_5e25c82f_render,
  BasicLedvue_type_template_id_5e25c82f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicLed = (BasicLed_component.exports);

/* vuetify-loader */








installComponents_default()(BasicLed_component, {VBtn: VBtn_["VBtn"],VChip: VChip_["VChip"],VDataTable: VDataTable_["VDataTable"],VSelect: VSelect_["VSelect"],VSpacer: VGrid_["VSpacer"],VTextField: VTextField_["VTextField"],VToolbar: VToolbar_["VToolbar"]})

// CONCATENATED MODULE: ./src/vxg.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var config_defaults = {};

var vxg_Vxg = /*#__PURE__*/function () {
  function Vxg(config) {
    _classCallCheck(this, Vxg);

    this.cmp = {};
    this.config(config);
  }

  _createClass(Vxg, [{
    key: "config",
    value: function config(custom_config) {
      // TODO: deep, validation
      Object.assign(this.config, config_defaults, custom_config || {});
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