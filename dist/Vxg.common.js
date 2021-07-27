module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@soda/get-current-script/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@soda/get-current-script/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller\n// MIT license\n// source: https://github.com/amiller-gh/currentScript-polyfill\n\n// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505\n\n(function (root, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(typeof self !== 'undefined' ? self : this, function () {\n  function getCurrentScript () {\n    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')\n    // for chrome\n    if (!descriptor && 'currentScript' in document && document.currentScript) {\n      return document.currentScript\n    }\n\n    // for other browsers with native support for currentScript\n    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {\n      return document.currentScript\n    }\n  \n    // IE 8-10 support script readyState\n    // IE 11+ & Firefox support stack trace\n    try {\n      throw new Error();\n    }\n    catch (err) {\n      // Find the second match for the \"at\" string to get file src url from stack.\n      var ieStackRegExp = /.*at [^(]*\\((.*):(.+):(.+)\\)$/ig,\n        ffStackRegExp = /@([^@]*):(\\d+):(\\d+)\\s*$/ig,\n        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),\n        scriptLocation = (stackDetails && stackDetails[1]) || false,\n        line = (stackDetails && stackDetails[2]) || false,\n        currentLocation = document.location.href.replace(document.location.hash, ''),\n        pageSource,\n        inlineScriptSourceRegExp,\n        inlineScriptSource,\n        scripts = document.getElementsByTagName('script'); // Live NodeList collection\n  \n      if (scriptLocation === currentLocation) {\n        pageSource = document.documentElement.outerHTML;\n        inlineScriptSourceRegExp = new RegExp('(?:[^\\\\n]+?\\\\n){0,' + (line - 2) + '}[^<]*<script>([\\\\d\\\\D]*?)<\\\\/script>[\\\\d\\\\D]*', 'i');\n        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();\n      }\n  \n      for (var i = 0; i < scripts.length; i++) {\n        // If ready state is interactive, return the script tag\n        if (scripts[i].readyState === 'interactive') {\n          return scripts[i];\n        }\n  \n        // If src matches, return the script tag\n        if (scripts[i].src === scriptLocation) {\n          return scripts[i];\n        }\n  \n        // If inline source matches, return the script tag\n        if (\n          scriptLocation === currentLocation &&\n          scripts[i].innerHTML &&\n          scripts[i].innerHTML.trim() === inlineScriptSource\n        ) {\n          return scripts[i];\n        }\n      }\n  \n      // If no match, return null\n      return null;\n    }\n  };\n\n  return getCurrentScript\n}));\n\n\n//# sourceURL=webpack://Vxg/./node_modules/@soda/get-current-script/index.js?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPublicPath */ \"./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js\");\n/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~entry */ \"./src/vxg.js\");\n/* empty/unused harmony star reexport */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_entry__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://Vxg/./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// This file is imported into lib/wc client bundles.\n\nif (typeof window !== 'undefined') {\n  var currentScript = window.document.currentScript\n  if (true) {\n    var getCurrentScript = __webpack_require__(/*! @soda/get-current-script */ \"./node_modules/@soda/get-current-script/index.js\")\n    currentScript = getCurrentScript()\n\n    // for backward compatibility, because previously we directly included the polyfill\n    if (!('currentScript' in document)) {\n      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })\n    }\n  }\n\n  var src = currentScript && currentScript.src.match(/(.+\\/)[^/]+\\.js(\\?.*)?$/)\n  if (src) {\n    __webpack_require__.p = src[1] // eslint-disable-line\n  }\n}\n\n// Indicate to webpack that this file can be concatenated\n/* harmony default export */ __webpack_exports__[\"default\"] = (null);\n\n\n//# sourceURL=webpack://Vxg/./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicAdmin.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAdmin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['logo'],\n  data: function data() {\n    return {\n      spec: this.$model.main.app.web\n    };\n  },\n  mounted: function mounted() {\n    console.log('BasicAdmin', !!this.$vuetify);\n  }\n});\n\n//# sourceURL=webpack://Vxg/./src/components/BasicAdmin.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicFoot.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFoot.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {};\n  },\n  created: function created() {\n    console.log('BasicFoot', !!this.$vuetify, !!this.$model);\n  }\n});\n\n//# sourceURL=webpack://Vxg/./src/components/BasicFoot.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicHead.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['logo'],\n  data: function data() {\n    return {\n      search: ''\n    };\n  },\n  mounted: function mounted() {\n    console.log('BasicHead', this);\n  },\n  watch: {\n    search: function search() {\n      this.$store.dispatch('trigger_search', {\n        term: this.search\n      });\n    }\n  },\n  methods: {\n    addItem: function addItem() {\n      this.$store.dispatch('trigger_led_add');\n    }\n  }\n});\n\n//# sourceURL=webpack://Vxg/./src/components/BasicHead.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicLed.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nconsole.log('BASICLED');\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    spec: {\n      type: Object,\n      required: true\n    },\n    param: {\n      type: Object,\n      default: function _default() {}\n    }\n  },\n  data: function data() {\n    return {\n      item: null,\n      readitem: null,\n      show: {\n        table: true,\n        item: false\n      }\n    };\n  },\n  created: function created() {\n    console.log('BasicLed CREATE', 'list_' + this.spec.ent.store_name);\n    this.$store.dispatch('list_' + this.spec.ent.store_name);\n  },\n  watch: {\n    '$store.state.trigger.led.add': function $storeStateTriggerLedAdd() {\n      console.log('LED ADD', this.spec);\n      this.openItem({\n        last: Date.now()\n      });\n    }\n  },\n  computed: {\n    headers: function headers() {\n      var headermap = {};\n      Object.entries(this.spec.ent.primary.field).forEach(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            fn = _ref2[0],\n            fd = _ref2[1];\n\n        return headermap[fn] = {\n          value: fn,\n          text: fd.title,\n          type: fd.type,\n          kind: fd.kind || {}\n        };\n      });\n      var headers = (this.spec.list.layout.order ? this.spec.list.layout.order.split(/\\s*,\\s*/) : Object.keys(this.spec.ent.primary.field)).map(function (fn) {\n        return headermap[fn];\n      }).filter(function (h) {\n        return null != h;\n      });\n      return headers;\n    },\n    items: function items() {\n      var _this = this;\n\n      var items = this.$store.state[this.spec.ent.store_name];\n\n      if ('user-by-role' === this.spec.name) {\n        items = items.filter(function (item) {\n          return _this.param.item.role === item.profile;\n        }); //items = items.filter(item=>'op'===item.profile)\n      }\n\n      return items;\n    },\n    fields: function fields() {\n      try {\n        var fds = [];\n        var fns = this.spec.edit.layout.order.split(/,/);\n\n        var _iterator = _createForOfIteratorHelper(fns),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var fn = _step.value;\n            // TODO: remove when model fixed\n            // TODO: handle virtual/derived fields cleanly\n            var fd = _objectSpread({}, this.spec.ent.primary.field[fn]) || {};\n            fd.name = fn; //fd.size = this.spec.edit.layout.field[fn].size \n\n            fd = _objectSpread(_objectSpread({}, fd), this.spec.edit.layout.field[fn] || {});\n            fds.push(fd);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        return fds;\n      } catch (e) {\n        console.error(e);\n      }\n\n      return [];\n    },\n    showEditToolbar: function showEditToolbar() {\n      var active = this.spec.edit.layout.toolbar.active;\n\n      if (true === active) {\n        return active;\n      } else if (active && active.field) {\n        var show = true;\n\n        for (var _i2 = 0, _Object$entries = Object.entries(active.field); _i2 < _Object$entries.length; _i2++) {\n          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),\n              name = _Object$entries$_i[0],\n              criteria = _Object$entries$_i[1];\n\n          if ('not-empty' === criteria) {\n            show = show && null != this.item[name];\n          } else {\n            show = false;\n          }\n        }\n\n        return show;\n      }\n\n      return false;\n    }\n  },\n  methods: {\n    itemslot: function itemslot(header) {\n      return 'item.' + header.value;\n    },\n    selection: function selection(field) {\n      var kinds = field.kind && Object.entries(field.kind);\n      var selects = kinds ? kinds.map(function (_ref3) {\n        var _ref4 = _slicedToArray(_ref3, 2),\n            n = _ref4[0],\n            d = _ref4[1];\n\n        return {\n          text: d.title,\n          value: n\n        };\n      }) : []; // console.log('selects', field, selects)\n\n      return selects;\n    },\n    customAction: function customAction(action) {\n      this.$store.dispatch(action, this.item);\n    },\n    openItem: function openItem(selitem) {\n      // console.log('OPEN', selitem)\n      if (false === this.spec.edit.active) {\n        return;\n      }\n\n      this.item = selitem;\n      this.readitem = _objectSpread({}, this.item); // TODO: from spec!\n\n      this.readitem.last = this.formatdate(this.item.last);\n      this.show.table = false;\n      this.show.item = true;\n    },\n    saveItem: function saveItem() {\n      this.$store.dispatch('save_' + this.spec.ent.store_name, this.item);\n      this.show.table = true;\n      this.show.item = false;\n    },\n    closeItem: function closeItem() {\n      this.show.table = true;\n      this.show.item = false;\n    },\n    fieldstyle: function fieldstyle(field) {\n      return {\n        'flex-basis': 100 * field.size / 12 + '%'\n      };\n    },\n    formatdate: function formatdate(time) {\n      return new Date(time).toString();\n    },\n    customFilter: function customFilter(value, search, item) {\n      console.log('BasicLed customFilter', value, search, item);\n      return true;\n    }\n  }\n});\n\n//# sourceURL=webpack://Vxg/./src/components/BasicLed.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicMain.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicMain.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    spec: {\n      type: Object,\n      required: true\n    }\n  },\n  data: function data() {\n    return {};\n  },\n  computed: {\n    view_spec: function view_spec() {\n      var viewname = this.$route.meta.view;\n      var spec = this.$model.main.app.web.view[viewname].spec;\n      console.log('VIEW SPEC', spec);\n      return spec;\n    }\n  }\n});\n\n//# sourceURL=webpack://Vxg/./src/components/BasicMain.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicSide.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    spec: {\n      type: Object,\n      required: true\n    },\n    logo: String\n  },\n  data: function data() {\n    return {};\n  },\n  created: function created() {\n    console.log('BasicSide created', this.spec);\n  },\n  computed: {\n    menu: function menu() {\n      var active_item_code = this.$route.meta.view;\n      var spec_items = this.spec.menu.items;\n      var ordered_codes = this.spec.menu.order.split(/\\s*,\\s*/);\n      var ux_items = ordered_codes.reduce(function (a, c) {\n        return a.push(Object.assign({\n          code: c\n        }, spec_items[c])), a;\n      }, []).map(function (item) {\n        item.klass = Object.assign({\n          'vxg-router-link': true\n        });\n        return item;\n      });\n      return ux_items;\n    }\n  }\n});\n\n//# sourceURL=webpack://Vxg/./src/components/BasicSide.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicAdmin.vue?vue&type=template&id=0378fd71&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12fb1e1b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAdmin.vue?vue&type=template&id=0378fd71& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-app\",\n    { attrs: { id: \"app\" } },\n    [\n      _c(\"vxg-basic-head\", {\n        attrs: { spec: _vm.spec.parts.head, logo: _vm.logo }\n      }),\n      _c(\"vxg-basic-side\", {\n        attrs: { spec: _vm.spec.parts.side, logo: _vm.logo }\n      }),\n      _c(\"vxg-basic-main\", { attrs: { spec: _vm.spec.parts.main } })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicAdmin.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2212fb1e1b-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicFoot.vue?vue&type=template&id=d93f7088&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12fb1e1b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFoot.vue?vue&type=template&id=d93f7088& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [_vm._v(\"___\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicFoot.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2212fb1e1b-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicHead.vue?vue&type=template&id=395f002e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12fb1e1b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=template&id=395f002e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-app-bar\",\n    {\n      staticStyle: { height: \"64px\", \"background-color\": \"white\" },\n      attrs: { app: \"\" }\n    },\n    [\n      _c(\n        \"v-btn\",\n        {\n          staticClass: \"vxg-head-btn\",\n          attrs: { tile: \"\" },\n          on: { click: _vm.addItem }\n        },\n        [\n          _c(\"v-icon\", { attrs: { left: \"\", medium: \"\" } }, [\n            _vm._v(\" mdi-map-marker-path \")\n          ]),\n          _vm._v(\" Add Item \")\n        ],\n        1\n      ),\n      _c(\"v-divider\", {\n        staticStyle: { margin: \"0px 16px\" },\n        attrs: { vertical: \"\" }\n      }),\n      _c(\"v-text-field\", {\n        attrs: {\n          flat: \"\",\n          \"hide-details\": \"\",\n          outlined: \"\",\n          dense: \"\",\n          placeholder: \"Search\"\n        },\n        model: {\n          value: _vm.search,\n          callback: function($$v) {\n            _vm.search = $$v\n          },\n          expression: \"search\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicHead.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2212fb1e1b-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicLed.vue?vue&type=template&id=b80dcea6&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12fb1e1b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=template&id=b80dcea6& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm.show.table\n        ? _c(\"v-data-table\", {\n            attrs: {\n              dense: \"\",\n              headers: _vm.headers,\n              items: _vm.items,\n              \"items-per-page\": 25,\n              \"x-custom-filter\": \"customFilter\",\n              \"footer-props\": {\n                itemsPerPageOptions: [25, 50, 75, 100, -1]\n              }\n            },\n            on: { \"click:row\": _vm.openItem },\n            scopedSlots: _vm._u(\n              [\n                _vm._l(_vm.headers, function(header) {\n                  return {\n                    key: _vm.itemslot(header),\n                    fn: function(ref) {\n                      var item = ref.item\n                      return [\n                        _c(\"div\", { key: header.value }, [\n                          \"status\" === header.type\n                            ? _c(\n                                \"span\",\n                                [\n                                  _c(\n                                    \"v-chip\",\n                                    {\n                                      staticStyle: {\n                                        \"font-weight\": \"bold\",\n                                        color: \"white\"\n                                      },\n                                      attrs: {\n                                        small: \"\",\n                                        xclass: \"ma-2\",\n                                        color:\n                                          \"outofdate\" === item[header.value]\n                                            ? \"red\"\n                                            : \"suspended\" === item[header.value]\n                                            ? \"orange\"\n                                            : \"blue\"\n                                      }\n                                    },\n                                    [\n                                      _vm._v(\n                                        \" \" +\n                                          _vm._s(\n                                            (\n                                              header.kind[item[header.value]] ||\n                                              {}\n                                            ).title\n                                          ) +\n                                          \" \"\n                                      )\n                                    ]\n                                  )\n                                ],\n                                1\n                              )\n                            : \"datetime\" === header.type\n                            ? _c(\"span\", [\n                                _vm._v(\n                                  \" \" +\n                                    _vm._s(new Date(item[header.value])) +\n                                    \" \"\n                                )\n                              ])\n                            : _c(\"span\", [_vm._v(_vm._s(item[header.value]))])\n                        ])\n                      ]\n                    }\n                  }\n                })\n              ],\n              null,\n              true\n            )\n          })\n        : _vm._e(),\n      _vm.show.item\n        ? _c(\n            \"div\",\n            [\n              _vm.showEditToolbar\n                ? _c(\n                    \"v-toolbar\",\n                    { attrs: { flat: \"\" } },\n                    [\n                      _c(\n                        \"v-btn\",\n                        {\n                          attrs: { outlined: \"\" },\n                          on: {\n                            click: function($event) {\n                              return _vm.customAction(\"user_reset_password\")\n                            }\n                          }\n                        },\n                        [_vm._v(\"Reset Password\")]\n                      ),\n                      _c(\"v-spacer\")\n                    ],\n                    1\n                  )\n                : _vm._e(),\n              _c(\n                \"div\",\n                {\n                  staticStyle: {\n                    \"box-sizing\": \"border-box\",\n                    display: \"flex\",\n                    \"flex-flow\": \"row wrap\"\n                  }\n                },\n                _vm._l(_vm.fields, function(field, fI) {\n                  return _c(\n                    \"div\",\n                    {\n                      key: fI,\n                      staticClass: \"vxg-form-field\",\n                      style: _vm.fieldstyle(field, fI)\n                    },\n                    [\n                      \"string\" === field.type\n                        ? _c(\"v-text-field\", {\n                            attrs: { label: field.title, outlined: \"\" },\n                            model: {\n                              value: _vm.item[field.name],\n                              callback: function($$v) {\n                                _vm.$set(_vm.item, field.name, $$v)\n                              },\n                              expression: \"item[field.name]\"\n                            }\n                          })\n                        : _vm._e(),\n                      \"status\" === field.type\n                        ? _c(\"v-select\", {\n                            attrs: {\n                              items: _vm.selection(field),\n                              label: field.title,\n                              outlined: \"\",\n                              disabled: field.readonly\n                            },\n                            model: {\n                              value: _vm.item[field.name],\n                              callback: function($$v) {\n                                _vm.$set(_vm.item, field.name, $$v)\n                              },\n                              expression: \"item[field.name]\"\n                            }\n                          })\n                        : _vm._e(),\n                      \"datetime\" === field.type\n                        ? _c(\"v-text-field\", {\n                            attrs: {\n                              label: field.title,\n                              outlined: \"\",\n                              disabled: \"\"\n                            },\n                            model: {\n                              value: _vm.readitem[field.name],\n                              callback: function($$v) {\n                                _vm.$set(_vm.readitem, field.name, $$v)\n                              },\n                              expression: \"readitem[field.name]\"\n                            }\n                          })\n                        : _vm._e(),\n                      \"basicled\" === field.type\n                        ? _c(\"vxg-basic-led\", {\n                            attrs: {\n                              spec: field.spec,\n                              param: { item: _vm.item }\n                            }\n                          })\n                        : _vm._e()\n                    ],\n                    1\n                  )\n                }),\n                0\n              ),\n              _c(\n                \"v-toolbar\",\n                { attrs: { flat: \"\" } },\n                [\n                  _c(\n                    \"v-btn\",\n                    { attrs: { outlined: \"\" }, on: { click: _vm.closeItem } },\n                    [_vm._v(\"Cancel\")]\n                  ),\n                  _c(\"v-spacer\"),\n                  _c(\n                    \"v-btn\",\n                    { attrs: { outlined: \"\" }, on: { click: _vm.saveItem } },\n                    [_vm._v(\"Save\")]\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicLed.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2212fb1e1b-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicMain.vue?vue&type=template&id=7b5fa387&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12fb1e1b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicMain.vue?vue&type=template&id=7b5fa387& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-main\",\n    { attrs: { app: \"\" } },\n    [\n      _c(\n        \"v-container\",\n        {\n          staticStyle: { padding: \"0px\" },\n          attrs: { xclass: \"py-5 px-5\", fluid: \"\" }\n        },\n        [\n          _c(\"router-view\", {\n            tag: \"component\",\n            attrs: { spec: _vm.view_spec }\n          })\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicMain.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2212fb1e1b-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicSide.vue?vue&type=template&id=ee5d07b6&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12fb1e1b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=template&id=ee5d07b6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-navigation-drawer\",\n    { staticClass: \"vxg-side\", attrs: { app: \"\" } },\n    [\n      _c(\n        \"v-sheet\",\n        {\n          staticStyle: {\n            display: \"flex\",\n            \"flex-direction\": \"column\",\n            height: \"100%\"\n          }\n        },\n        [\n          _c(\"div\", {\n            staticStyle: { display: \"inline\" },\n            domProps: { innerHTML: _vm._s(_vm.logo) }\n          }),\n          _vm._l(_vm.menu, function(item) {\n            return [\n              _c(\n                \"router-link\",\n                {\n                  key: item.code,\n                  tag: \"component\",\n                  class: item.klass,\n                  staticStyle: { \"flex-grow\": \"1\" },\n                  attrs: { to: \"/main/\" + item.code }\n                },\n                [\n                  _c(\"v-icon\", [_vm._v(\"mdi-\" + _vm._s(item.icon))]),\n                  _vm._v(\" \" + _vm._s(item.title) + \" \")\n                ],\n                1\n              )\n            ]\n          }),\n          _c(\"div\", { staticStyle: { \"flex-grow\": \"100\" } }),\n          _c(\"v-divider\"),\n          _c(\n            \"a\",\n            { staticClass: \"vxg-router-link\", attrs: { href: \"#/main/asset\" } },\n            [\n              _c(\"i\", {\n                staticClass: \"v-icon notranslate mdi mdi-help theme--light\",\n                attrs: { \"aria-hidden\": \"true\" }\n              }),\n              _vm._v(\" Support \")\n            ]\n          ),\n          _c(\n            \"a\",\n            { staticClass: \"vxg-router-link\", attrs: { href: \"#/main/asset\" } },\n            [\n              _c(\"i\", {\n                staticClass:\n                  \"v-icon notranslate mdi mdi-logout-variant theme--light\",\n                attrs: { \"aria-hidden\": \"true\" }\n              }),\n              _vm._v(\" Sign out \")\n            ]\n          )\n        ],\n        2\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicSide.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2212fb1e1b-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicHead.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack://Vxg/./src/components/BasicHead.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicLed.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack://Vxg/./src/components/BasicLed.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicSide.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack://Vxg/./src/components/BasicSide.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://Vxg/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/runtime/installComponents.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/runtime/installComponents.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nmodule.exports = function installComponents (component, components) {\n  var options = typeof component.exports === 'function'\n    ? component.exports.extendOptions\n    : component.options\n\n  if (typeof component.exports === 'function') {\n    options.components = component.exports.options.components\n  }\n\n  options.components = options.components || {}\n\n  for (var i in components) {\n    options.components[i] = options.components[i] || components[i]\n  }\n}\n\n\n//# sourceURL=webpack://Vxg/./node_modules/vuetify-loader/lib/runtime/installComponents.js?");

/***/ }),

/***/ "./src/components/BasicAdmin.vue":
/*!***************************************!*\
  !*** ./src/components/BasicAdmin.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicAdmin_vue_vue_type_template_id_0378fd71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicAdmin.vue?vue&type=template&id=0378fd71& */ \"./src/components/BasicAdmin.vue?vue&type=template&id=0378fd71&\");\n/* harmony import */ var _BasicAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicAdmin.vue?vue&type=script&lang=js& */ \"./src/components/BasicAdmin.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ \"vuetify/lib/components/VApp\");\n/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BasicAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BasicAdmin_vue_vue_type_template_id_0378fd71___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BasicAdmin_vue_vue_type_template_id_0378fd71___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__[\"VApp\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BasicAdmin.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://Vxg/./src/components/BasicAdmin.vue?");

/***/ }),

/***/ "./src/components/BasicAdmin.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/BasicAdmin.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicAdmin.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicAdmin.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://Vxg/./src/components/BasicAdmin.vue?");

/***/ }),

/***/ "./src/components/BasicAdmin.vue?vue&type=template&id=0378fd71&":
/*!**********************************************************************!*\
  !*** ./src/components/BasicAdmin.vue?vue&type=template&id=0378fd71& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicAdmin_vue_vue_type_template_id_0378fd71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicAdmin.vue?vue&type=template&id=0378fd71& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"12fb1e1b-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicAdmin.vue?vue&type=template&id=0378fd71&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicAdmin_vue_vue_type_template_id_0378fd71___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicAdmin_vue_vue_type_template_id_0378fd71___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicAdmin.vue?");

/***/ }),

/***/ "./src/components/BasicFoot.vue":
/*!**************************************!*\
  !*** ./src/components/BasicFoot.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicFoot_vue_vue_type_template_id_d93f7088___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicFoot.vue?vue&type=template&id=d93f7088& */ \"./src/components/BasicFoot.vue?vue&type=template&id=d93f7088&\");\n/* harmony import */ var _BasicFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicFoot.vue?vue&type=script&lang=js& */ \"./src/components/BasicFoot.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BasicFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BasicFoot_vue_vue_type_template_id_d93f7088___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BasicFoot_vue_vue_type_template_id_d93f7088___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BasicFoot.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://Vxg/./src/components/BasicFoot.vue?");

/***/ }),

/***/ "./src/components/BasicFoot.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/BasicFoot.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicFoot.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicFoot.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://Vxg/./src/components/BasicFoot.vue?");

/***/ }),

/***/ "./src/components/BasicFoot.vue?vue&type=template&id=d93f7088&":
/*!*********************************************************************!*\
  !*** ./src/components/BasicFoot.vue?vue&type=template&id=d93f7088& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicFoot_vue_vue_type_template_id_d93f7088___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicFoot.vue?vue&type=template&id=d93f7088& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"12fb1e1b-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicFoot.vue?vue&type=template&id=d93f7088&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicFoot_vue_vue_type_template_id_d93f7088___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicFoot_vue_vue_type_template_id_d93f7088___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicFoot.vue?");

/***/ }),

/***/ "./src/components/BasicHead.vue":
/*!**************************************!*\
  !*** ./src/components/BasicHead.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicHead_vue_vue_type_template_id_395f002e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicHead.vue?vue&type=template&id=395f002e& */ \"./src/components/BasicHead.vue?vue&type=template&id=395f002e&\");\n/* harmony import */ var _BasicHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicHead.vue?vue&type=script&lang=js& */ \"./src/components/BasicHead.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicHead.vue?vue&type=style&index=0&lang=scss& */ \"./src/components/BasicHead.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ \"vuetify/lib/components/VAppBar\");\n/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ \"vuetify/lib/components/VBtn\");\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ \"vuetify/lib/components/VDivider\");\n/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ \"vuetify/lib/components/VIcon\");\n/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ \"vuetify/lib/components/VTextField\");\n/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _BasicHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BasicHead_vue_vue_type_template_id_395f002e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BasicHead_vue_vue_type_template_id_395f002e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__[\"VAppBar\"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"VBtn\"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__[\"VDivider\"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__[\"VIcon\"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__[\"VTextField\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BasicHead.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://Vxg/./src/components/BasicHead.vue?");

/***/ }),

/***/ "./src/components/BasicHead.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/BasicHead.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicHead.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicHead.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://Vxg/./src/components/BasicHead.vue?");

/***/ }),

/***/ "./src/components/BasicHead.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./src/components/BasicHead.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicHead.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicHead.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicHead.vue?");

/***/ }),

/***/ "./src/components/BasicHead.vue?vue&type=template&id=395f002e&":
/*!*********************************************************************!*\
  !*** ./src/components/BasicHead.vue?vue&type=template&id=395f002e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_template_id_395f002e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicHead.vue?vue&type=template&id=395f002e& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"12fb1e1b-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicHead.vue?vue&type=template&id=395f002e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_template_id_395f002e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_template_id_395f002e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicHead.vue?");

/***/ }),

/***/ "./src/components/BasicLed.vue":
/*!*************************************!*\
  !*** ./src/components/BasicLed.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicLed_vue_vue_type_template_id_b80dcea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicLed.vue?vue&type=template&id=b80dcea6& */ \"./src/components/BasicLed.vue?vue&type=template&id=b80dcea6&\");\n/* harmony import */ var _BasicLed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicLed.vue?vue&type=script&lang=js& */ \"./src/components/BasicLed.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicLed.vue?vue&type=style&index=0&lang=scss& */ \"./src/components/BasicLed.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ \"vuetify/lib/components/VBtn\");\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ \"vuetify/lib/components/VChip\");\n/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ \"vuetify/lib/components/VDataTable\");\n/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ \"vuetify/lib/components/VSelect\");\n/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"vuetify/lib/components/VGrid\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ \"vuetify/lib/components/VTextField\");\n/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ \"vuetify/lib/components/VToolbar\");\n/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _BasicLed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BasicLed_vue_vue_type_template_id_b80dcea6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BasicLed_vue_vue_type_template_id_b80dcea6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__[\"VBtn\"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__[\"VChip\"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__[\"VDataTable\"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__[\"VSelect\"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__[\"VSpacer\"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__[\"VTextField\"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__[\"VToolbar\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BasicLed.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://Vxg/./src/components/BasicLed.vue?");

/***/ }),

/***/ "./src/components/BasicLed.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/BasicLed.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicLed.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicLed.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://Vxg/./src/components/BasicLed.vue?");

/***/ }),

/***/ "./src/components/BasicLed.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************!*\
  !*** ./src/components/BasicLed.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicLed.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicLed.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicLed.vue?");

/***/ }),

/***/ "./src/components/BasicLed.vue?vue&type=template&id=b80dcea6&":
/*!********************************************************************!*\
  !*** ./src/components/BasicLed.vue?vue&type=template&id=b80dcea6& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_template_id_b80dcea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicLed.vue?vue&type=template&id=b80dcea6& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"12fb1e1b-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicLed.vue?vue&type=template&id=b80dcea6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_template_id_b80dcea6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_template_id_b80dcea6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicLed.vue?");

/***/ }),

/***/ "./src/components/BasicMain.vue":
/*!**************************************!*\
  !*** ./src/components/BasicMain.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicMain_vue_vue_type_template_id_7b5fa387___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicMain.vue?vue&type=template&id=7b5fa387& */ \"./src/components/BasicMain.vue?vue&type=template&id=7b5fa387&\");\n/* harmony import */ var _BasicMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicMain.vue?vue&type=script&lang=js& */ \"./src/components/BasicMain.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"vuetify/lib/components/VGrid\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VMain */ \"vuetify/lib/components/VMain\");\n/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BasicMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BasicMain_vue_vue_type_template_id_7b5fa387___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BasicMain_vue_vue_type_template_id_7b5fa387___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__[\"VContainer\"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_5__[\"VMain\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BasicMain.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://Vxg/./src/components/BasicMain.vue?");

/***/ }),

/***/ "./src/components/BasicMain.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/BasicMain.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicMain.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicMain.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://Vxg/./src/components/BasicMain.vue?");

/***/ }),

/***/ "./src/components/BasicMain.vue?vue&type=template&id=7b5fa387&":
/*!*********************************************************************!*\
  !*** ./src/components/BasicMain.vue?vue&type=template&id=7b5fa387& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicMain_vue_vue_type_template_id_7b5fa387___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicMain.vue?vue&type=template&id=7b5fa387& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"12fb1e1b-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicMain.vue?vue&type=template&id=7b5fa387&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicMain_vue_vue_type_template_id_7b5fa387___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicMain_vue_vue_type_template_id_7b5fa387___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicMain.vue?");

/***/ }),

/***/ "./src/components/BasicSide.vue":
/*!**************************************!*\
  !*** ./src/components/BasicSide.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicSide_vue_vue_type_template_id_ee5d07b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicSide.vue?vue&type=template&id=ee5d07b6& */ \"./src/components/BasicSide.vue?vue&type=template&id=ee5d07b6&\");\n/* harmony import */ var _BasicSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicSide.vue?vue&type=script&lang=js& */ \"./src/components/BasicSide.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicSide.vue?vue&type=style&index=0&lang=scss& */ \"./src/components/BasicSide.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ \"vuetify/lib/components/VDivider\");\n/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ \"vuetify/lib/components/VIcon\");\n/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ \"vuetify/lib/components/VNavigationDrawer\");\n/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ \"vuetify/lib/components/VSheet\");\n/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _BasicSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BasicSide_vue_vue_type_template_id_ee5d07b6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BasicSide_vue_vue_type_template_id_ee5d07b6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__[\"VDivider\"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__[\"VIcon\"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_7__[\"VNavigationDrawer\"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_8__[\"VSheet\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BasicSide.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://Vxg/./src/components/BasicSide.vue?");

/***/ }),

/***/ "./src/components/BasicSide.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/BasicSide.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicSide.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicSide.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://Vxg/./src/components/BasicSide.vue?");

/***/ }),

/***/ "./src/components/BasicSide.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./src/components/BasicSide.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicSide.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicSide.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicSide.vue?");

/***/ }),

/***/ "./src/components/BasicSide.vue?vue&type=template&id=ee5d07b6&":
/*!*********************************************************************!*\
  !*** ./src/components/BasicSide.vue?vue&type=template&id=ee5d07b6& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_template_id_ee5d07b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"12fb1e1b-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./BasicSide.vue?vue&type=template&id=ee5d07b6& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"12fb1e1b-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BasicSide.vue?vue&type=template&id=ee5d07b6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_template_id_ee5d07b6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12fb1e1b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_template_id_ee5d07b6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://Vxg/./src/components/BasicSide.vue?");

/***/ }),

/***/ "./src/vxg.js":
/*!********************!*\
  !*** ./src/vxg.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vxg_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vxg.scss */ \"./src/vxg.scss\");\n/* harmony import */ var _vxg_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vxg_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BasicAdmin_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BasicAdmin.vue */ \"./src/components/BasicAdmin.vue\");\n/* harmony import */ var _components_BasicHead_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BasicHead.vue */ \"./src/components/BasicHead.vue\");\n/* harmony import */ var _components_BasicFoot_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BasicFoot.vue */ \"./src/components/BasicFoot.vue\");\n/* harmony import */ var _components_BasicMain_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BasicMain.vue */ \"./src/components/BasicMain.vue\");\n/* harmony import */ var _components_BasicSide_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BasicSide.vue */ \"./src/components/BasicSide.vue\");\n/* harmony import */ var _components_BasicLed_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BasicLed.vue */ \"./src/components/BasicLed.vue\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar config_defaults = {};\n\nvar Vxg = /*#__PURE__*/function () {\n  function Vxg(config) {\n    _classCallCheck(this, Vxg);\n\n    this.cmp = {};\n    this.config(config);\n  }\n\n  _createClass(Vxg, [{\n    key: \"config\",\n    value: function config(custom_config) {\n      // TODO: deep, validation\n      Object.assign(this.config, config_defaults, custom_config || {});\n    }\n  }, {\n    key: \"install\",\n    value: function install(Vue, options) {\n      var _this = this;\n\n      var co = {\n        VxgBasicAdmin: _components_BasicAdmin_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        VxgBasicHead: _components_BasicHead_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        VxgBasicFoot: _components_BasicFoot_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        VxgBasicMain: _components_BasicMain_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        VxgBasicSide: _components_BasicSide_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        VxgBasicLed: _components_BasicLed_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n      };\n      Object.keys(co).forEach(function (name) {\n        Vue.component(name, co[name]);\n        _this.cmp[name] = co[name];\n      });\n      Vue.prototype.$vxg = this;\n      window.vxg = this;\n    }\n  }]);\n\n  return Vxg;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vxg);\n\n//# sourceURL=webpack://Vxg/./src/vxg.js?");

/***/ }),

/***/ "./src/vxg.scss":
/*!**********************!*\
  !*** ./src/vxg.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack://Vxg/./src/vxg.scss?");

/***/ }),

/***/ "vuetify/lib/components/VApp":
/*!**********************************************!*\
  !*** external "vuetify/lib/components/VApp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VApp\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VApp%22?");

/***/ }),

/***/ "vuetify/lib/components/VAppBar":
/*!*************************************************!*\
  !*** external "vuetify/lib/components/VAppBar" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VAppBar\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VAppBar%22?");

/***/ }),

/***/ "vuetify/lib/components/VBtn":
/*!**********************************************!*\
  !*** external "vuetify/lib/components/VBtn" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VBtn\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VBtn%22?");

/***/ }),

/***/ "vuetify/lib/components/VChip":
/*!***********************************************!*\
  !*** external "vuetify/lib/components/VChip" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VChip\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VChip%22?");

/***/ }),

/***/ "vuetify/lib/components/VDataTable":
/*!****************************************************!*\
  !*** external "vuetify/lib/components/VDataTable" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VDataTable\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VDataTable%22?");

/***/ }),

/***/ "vuetify/lib/components/VDivider":
/*!**************************************************!*\
  !*** external "vuetify/lib/components/VDivider" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VDivider\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VDivider%22?");

/***/ }),

/***/ "vuetify/lib/components/VGrid":
/*!***********************************************!*\
  !*** external "vuetify/lib/components/VGrid" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VGrid\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VGrid%22?");

/***/ }),

/***/ "vuetify/lib/components/VIcon":
/*!***********************************************!*\
  !*** external "vuetify/lib/components/VIcon" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VIcon\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VIcon%22?");

/***/ }),

/***/ "vuetify/lib/components/VMain":
/*!***********************************************!*\
  !*** external "vuetify/lib/components/VMain" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VMain\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VMain%22?");

/***/ }),

/***/ "vuetify/lib/components/VNavigationDrawer":
/*!***********************************************************!*\
  !*** external "vuetify/lib/components/VNavigationDrawer" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VNavigationDrawer\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VNavigationDrawer%22?");

/***/ }),

/***/ "vuetify/lib/components/VSelect":
/*!*************************************************!*\
  !*** external "vuetify/lib/components/VSelect" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VSelect\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VSelect%22?");

/***/ }),

/***/ "vuetify/lib/components/VSheet":
/*!************************************************!*\
  !*** external "vuetify/lib/components/VSheet" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VSheet\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VSheet%22?");

/***/ }),

/***/ "vuetify/lib/components/VTextField":
/*!****************************************************!*\
  !*** external "vuetify/lib/components/VTextField" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VTextField\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VTextField%22?");

/***/ }),

/***/ "vuetify/lib/components/VToolbar":
/*!**************************************************!*\
  !*** external "vuetify/lib/components/VToolbar" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuetify/lib/components/VToolbar\");\n\n//# sourceURL=webpack://Vxg/external_%22vuetify/lib/components/VToolbar%22?");

/***/ })

/******/ });