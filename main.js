/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::after, *::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 1px solid red */\n  user-select: none;\n}\n\n:root {\n  --primary-dark: #222;\n  --secondary-gray: #ddd;\n  --tertiary-gray: #eee;\n}\n\nbody {\n  display: grid;\n  grid-template: min-content 9fr / 1.5fr 5fr;\n  min-height: 100vh;\n}\n\nh1 {\n  text-align: center;\n  font-size: 6rem;\n}\n\nh2 {\n  background: var(--primary-dark);\n  color: white;\n  text-align: center;\n  font-size: 4rem;\n  border: 10px inset white;\n}\n\nh3 {\n  background: white;\n  text-align: center;\n  font-size: 1.8rem;\n  padding: 3px;\n  color: var(--primary-dark);\n  border: inset 8px white;\n}\n\nh4 {\n  font-size: 1.8rem;\n  background: var(--primary-dark);\n  color: white;\n}\n\nnav {\n  background-color: var(--primary-dark);\n  grid-column: 1 / 3;\n  color: white;\n}\n\naside {\n  background-color: white;\n  grid-column: 1 / 2;\n  grid-row: 2/ 3;\n  font-weight: bold;\n  font-size: 1rem;\n  font-family: system-ui;\n  border: 12px ridge white;\n}\n\n.new-project-input {\n  color: white;\n  text-align: center;\n  appearance: none;\n  width: 100%;\n  font-size: 1rem;\n  font-weight: bold;\n  border: none;\n  padding: 10px;\n  background-color: var(--primary-dark);\n}\n\n.new-project-input::placeholder,\n#new-todo-input::placeholder {\n  color: rgba(255, 255, 255, 0.15);\n  font-weight: bold;\n}\n\nul {\n  text-align: center;\n  display: grid;\n  list-style: none;\n}\n\n.aside-element-text,\n.project-aside-element {\n  position: relative;\n  border: 1px solid white;\n  cursor: pointer;\n  background: var(--primary-dark);\n  color: white;\n}\n\n.aside-element-text {\n  padding: 10px;\n}\n\n.project-aside-element p {\n  padding: 10px;\n}\n\n.aside-element-text:hover,\n.project-aside-element:hover {\n  background-color: #474747;\n}\n\nsection {\n  border: 17px white ridge;\n  background-color: #eee;\n}\n\n.todo-section {\n  display: grid;\n  justify-items: center;\n  grid-template-rows: repeat(auto-fill, min-content);\n  padding: 10px;\n  gap: 10px;\n}\n\n.todo-list-element {\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.todo-list-element li {\n  color: white;\n  background-color: var(--primary-dark);\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.todo-element {\n  color: white;\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n  font-weight: 900;\n  background: var(--primary-dark);\n  border-radius: 10px;\n  box-shadow: 0 0 3px rgba(0,0,0,40%);\n  cursor: pointer;\n  gap: 5px;\n}\n\n.todo-element * {\n  padding: 10px;\n}\n\n.todo-element p {\n  text-align: center;\n  border-radius: 10px;\n  width: 50%;\n}\n\n.todo-element p:hover {\n  box-shadow: 0 0 1px white;\n  background-color: rgb(53,53,53);\n}\n\n.new-todo-button {\n  cursor: pointer;\n  position: relative;\n  color: white;\n  background: var(--primary-dark);\n  padding: 5px;\n  border: 1px outset white;\n  font-weight: bold;\n  box-shadow: 0 3px 1px black;\n}\n\n.new-todo-button:active {\n  top: 2px;\n  box-shadow: 0 1px 0 black;\n}\n\n.todo-input {\n  color: white;\n  text-align: center;\n  border-radius: 10px;\n  appearance: none;\n  background: var(--primary-dark);\n  border: none;\n  width: 50%;\n  font-weight: bold;\n  box-shadow: 0 0 1px white;\n  outline: none;\n}\n\n#new-todo-input {\n  text-align: center;\n  color: white;\n  padding: 10px;\n  width: 50%;\n  font-weight: 900;\n  background: var(--primary-dark);\n  border-radius: 10px;\n  box-shadow: 0 0 3px rgba(0,0,0,40%);\n  cursor: pointer;\n}\n\n.date-input {\n  text-align: center;\n  width: 50%;\n  color: white;\n  background-color: var(--primary-dark);\n  border: 1px white;\n  box-shadow: 0 0 1px white;\n  color-scheme: dark;\n  outline: none;\n}\n\n.delete-todo-button {\n  cursor: pointer;\n  appearance: none;\n  color: red;\n  background-color: white;\n  border-radius: 0 10px 10px 0;\n  border: none;\n  font-weight: bold;\n}\n\n.delete-project-button {\n  cursor: pointer;\n  position: absolute;\n  top: 1%;\n  right: 1%;\n}\n\n.delete-project-button:hover {\n  color: indianred;\n}\n\n.project-card {\n  font-weight: bold;\n  background-color: white;\n  width: 50%;\n  text-align: center;\n  box-shadow: 0 0 1px black;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/date-module-render/today-module.js":
/*!************************************************!*\
  !*** ./src/date-module-render/today-module.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\n\nconst today = document.querySelector(\".timed-option\");\n\ntoday.addEventListener(\"click\", renderTodayTodos);\n\nfunction renderTodayTodos(event) {\n  if (event.target.nodeName === \"P\") {\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"getTodayTodos\", event.target.innerText);\n  }\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/date-module-render/today-module.js?");

/***/ }),

/***/ "./src/date-module-render/today-render.js":
/*!************************************************!*\
  !*** ./src/date-module-render/today-render.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\n\n\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"renderTodayTodos\", renderDom);\n\nconst title = document.querySelector(\"h2\");\nconst todoSection = document.querySelector(\".todo-section\");\n\nfunction renderDom(renderObject) {\n  const projectList = renderObject.projectsList;\n  title.innerText = renderObject.text;\n  todoSection.innerHTML = \"\";\n  if (projectList !== null) {\n    const projectCardFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"projectCardFactory\");\n    projectList.forEach(project => {\n      const projectCard = projectCardFactory.build(project)\n      todoSection.append(projectCard)\n    })\n  }\n\n\n\n}\n\n//# sourceURL=webpack://todo-list/./src/date-module-render/today-render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_aside_view_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/aside-view-controller.js */ \"./src/view/aside-view-controller.js\");\n/* harmony import */ var _others_pub_sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./others/pub-sub.js */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _project_project_database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project-database.js */ \"./src/project/project-database.js\");\n/* harmony import */ var _project_project_element_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project-element-factory.js */ \"./src/project/project-element-factory.js\");\n/* harmony import */ var _view_project_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/project-render.js */ \"./src/view/project-render.js\");\n/* harmony import */ var _date_module_render_today_module_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-module-render/today-module.js */ \"./src/date-module-render/today-module.js\");\n/* harmony import */ var _others_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./others/local-storage */ \"./src/others/local-storage.js\");\n/* harmony import */ var _date_module_render_today_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-module-render/today-render.js */ \"./src/date-module-render/today-render.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_others_pub_sub_js__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"duplicateProject\", function(projectName) {\n  alert(`Project ${projectName} already exist`);\n})\n\n;(0,_others_pub_sub_js__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"emptyProjectName\", function() {\n  alert(`Project name is empty`);\n})\n\n;(0,_others_local_storage__WEBPACK_IMPORTED_MODULE_6__.loadProjects)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/others/dateManager.js":
/*!***********************************!*\
  !*** ./src/others/dateManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dateManager: () => (/* binding */ dateManager)\n/* harmony export */ });\n\n\nclass dateManager {\n  constructor() {\n    this.today = new Date();\n  }\n\n  getDayOfMoths() {\n    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n  }\n\n  getTodayDate() {\n    const year = this.today.getFullYear();\n    const month = this.today.getMonth() + 1\n    const formattedMonth = (month < 10)? `0${month}`: month;\n    const day = this.today.getDate();\n    return `${day}-${formattedMonth}-${year}`\n  }\n\n  giveFormat(date, format) {\n    let dateFormatted = format;\n    const dateArray = date.split(\"-\")\n    dateFormatted = dateFormatted.replace(\"d\", dateArray[0]);\n    dateFormatted = dateFormatted.replace(\"m\", dateArray[1]);\n    dateFormatted = dateFormatted.replace(\"y\", dateArray[2]);\n    return dateFormatted;\n  }\n\n  getDateWith(dateWithoutFormat) {\n    const formatDate = dateWithoutFormat.split(\"-\").reverse().join(\"-\");\n    return new Date(formatDate);\n  }\n\n  getFirstDayWeek() {\n    const month = this.today.getMonth() + 1;\n    const year = this.today.getFullYear();\n    const first = this.today.getDate() - this.today.getDay() + 1;\n    return `${first}-${month}-${year}`\n  }\n\n  getLastDayWeek() {\n    let month = this.today.getMonth() + 1;\n    const year = this.today.getFullYear();\n    const todayDay = this.today.getDate();\n    const first = todayDay - this.today.getDay() + 1;\n\n    const dayOfMonths = this.getDayOfMoths();\n    const daysOfThisMonth = dayOfMonths[month];\n    const day = (todayDay + 6) % daysOfThisMonth;\n\n    if (day < todayDay) {\n      month++;\n    }\n\n    return `${day}-${month}-${year}`\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/others/dateManager.js?");

/***/ }),

/***/ "./src/others/local-storage.js":
/*!*************************************!*\
  !*** ./src/others/local-storage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects)\n/* harmony export */ });\n/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _project_project_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/project-class */ \"./src/project/project-class.js\");\n/* harmony import */ var _todo_todo_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todo-class */ \"./src/todo/todo-class.js\");\n\n\n\n\n\n\n;(0,_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"saveProjects\", saveProjects)\n\nfunction loadProjects() {\n  if (localStorage.length !== 0) {\n    const projectObjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const projects = projectObjects.map(project => {\n      return new _project_project_class__WEBPACK_IMPORTED_MODULE_1__.Project(project.name, project.todoList.map(todo => new _todo_todo_class__WEBPACK_IMPORTED_MODULE_2__.Todo(todo.name)))\n    });\n    (0,_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"loadProjects\", projects);\n  } else {\n    (0,_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"displayNewProjectButton\", null);\n  }\n}\n\nfunction saveProjects(projectList) {\n  const serializedProjects = JSON.stringify(projectList);\n  localStorage.setItem(\"projects\", serializedProjects);\n}\n\n//# sourceURL=webpack://todo-list/./src/others/local-storage.js?");

/***/ }),

/***/ "./src/others/pub-sub.js":
/*!*******************************!*\
  !*** ./src/others/pub-sub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emit: () => (/* binding */ emit),\n/* harmony export */   subscribe: () => (/* binding */ subscribe)\n/* harmony export */ });\n\n\nconst events = {}\n\nfunction subscribe(eventName, handler) {\n  events[eventName] = events[eventName] || [];\n  events[eventName].push(handler);\n}\n\nfunction emit(eventName, data) {\n  events[eventName].forEach(handler => handler(data))\n}\n\n//# sourceURL=webpack://todo-list/./src/others/pub-sub.js?");

/***/ }),

/***/ "./src/others/service-locator.js":
/*!***************************************!*\
  !*** ./src/others/service-locator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getService: () => (/* binding */ getService)\n/* harmony export */ });\n/* harmony import */ var _project_new_project_button_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/new-project-button-element.js */ \"./src/project/new-project-button-element.js\");\n/* harmony import */ var _todo_todo_factory_todo_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/todo-factory/todo-factory */ \"./src/todo/todo-factory/todo-factory.js\");\n/* harmony import */ var _todo_todo_factory_new_todo_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todo-factory/new-todo-factory */ \"./src/todo/todo-factory/new-todo-factory.js\");\n/* harmony import */ var _todo_new_todo_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo/new-todo-button */ \"./src/todo/new-todo-button.js\");\n/* harmony import */ var _project_current_project_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project/current-project-name */ \"./src/project/current-project-name.js\");\n/* harmony import */ var _dateManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dateManager */ \"./src/others/dateManager.js\");\n/* harmony import */ var _project_project_element_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project/project-element-factory */ \"./src/project/project-element-factory.js\");\n/* harmony import */ var _project_project_card_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project/project-card-factory */ \"./src/project/project-card-factory.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst services = {};\n\nfunction newService(name, service) {\n  services[name] = service;\n}\n\nfunction getService(name) {\n  return services[name];\n}\n\nnewService(\"projectElementFactory\", new _project_project_element_factory__WEBPACK_IMPORTED_MODULE_6__.ProjectElementFactory());\nnewService(\"dateManager\", new _dateManager__WEBPACK_IMPORTED_MODULE_5__.dateManager());\nnewService(\"getProjectName\", _project_current_project_name__WEBPACK_IMPORTED_MODULE_4__.getProjectName);\nnewService(\"newTodoButton\", new _todo_new_todo_button__WEBPACK_IMPORTED_MODULE_3__.NewTodoButton());\nnewService(\"todoFactory\", new _todo_todo_factory_todo_factory__WEBPACK_IMPORTED_MODULE_1__.todoFactory());\nnewService(\"newTodoFactory\", new _todo_todo_factory_new_todo_factory__WEBPACK_IMPORTED_MODULE_2__.NewTodoFactory());\nnewService(\"newProjectButton\", _project_new_project_button_element_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButtonElement);\nnewService(\"projectCardFactory\", new _project_project_card_factory__WEBPACK_IMPORTED_MODULE_7__.ProjectCardFactory());\n\n//# sourceURL=webpack://todo-list/./src/others/service-locator.js?");

/***/ }),

/***/ "./src/project/current-project-name.js":
/*!*********************************************!*\
  !*** ./src/project/current-project-name.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProjectName: () => (/* binding */ getProjectName)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\n\n\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"projectChanged\", setProjectName);\n\nlet currentProjectName = null\n\nfunction setProjectName(name) {\n  currentProjectName = name;\n}\n\nfunction getProjectName() {\n  return currentProjectName;\n}\n\n//# sourceURL=webpack://todo-list/./src/project/current-project-name.js?");

/***/ }),

/***/ "./src/project/new-project-button-element.js":
/*!***************************************************!*\
  !*** ./src/project/new-project-button-element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newProjectButtonElement: () => (/* binding */ newProjectButtonElement)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub.js */ \"./src/others/pub-sub.js\");\n\n\n\n\n;(0,_others_pub_sub_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"newProject\", changeInputToButton)\n\nconst newProjectInputElement = generateInputElement();\nconst newProjectParagraphElement = generatePElement();\nconst newProjectButtonElement = generateNewProjectButton() ;\n\nfunction changeInputToButton() {\n  newProjectButtonElement.replaceChild(newProjectParagraphElement, newProjectInputElement);\n}\n\nfunction generatePElement() {\n  const pElement = document.createElement(\"div\");\n  pElement.innerText = \"＋\";\n  pElement.classList.add(\"aside-element-text\");\n  pElement.addEventListener(\"click\", replaceButton)\n  return pElement;\n}\n\nfunction generateNewProjectButton() {\n  const liElement = document.createElement(\"li\");\n  liElement.append(newProjectParagraphElement);\n  return liElement;\n}\n\nfunction replaceButton(event) {\n  event.target.parentElement.replaceChild(newProjectInputElement, event.target);\n  newProjectInputElement.value = \"\";\n  newProjectInputElement.focus();\n}\n\nfunction generateInputElement() {\n  const newProjectInput =  document.createElement(\"input\");\n  newProjectInput.classList.add(\"new-project-input\");\n  newProjectInput.placeholder = \"Project Name\"\n  newProjectInput.addEventListener(\"keyup\", checkKeyPressed);\n  return newProjectInput;\n}\n\nfunction checkKeyPressed(event) {\n  const keyPressed = event.key;\n  if (keyPressed === \"Enter\") {\n    const projectName = event.target.value;\n    (0,_others_pub_sub_js__WEBPACK_IMPORTED_MODULE_0__.emit)(\"checkNewProject\", projectName);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/project/new-project-button-element.js?");

/***/ }),

/***/ "./src/project/project-card-factory.js":
/*!*********************************************!*\
  !*** ./src/project/project-card-factory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectCardFactory: () => (/* binding */ ProjectCardFactory)\n/* harmony export */ });\n\n\nclass ProjectCardFactory {\n  build(project) {\n    const container = document.createElement(\"div\");\n    const projectNameElement = this.#createProjectTitle(project.name);\n    const todosElements = this.#createTodos(project.todoList);\n\n    container.classList.add(\"project-card\")\n    container.append(projectNameElement);\n    container.append(todosElements);\n    return container;\n  }\n\n  #createProjectTitle(project) {\n    const titleObject = document.createElement(\"h4\");\n    titleObject.innerText = project;\n    return titleObject;\n  }\n\n  #createTodos(todoList) {\n    const container = document.createElement(\"ul\");\n    container.classList.add(\"todo-list-element\");\n    todoList.forEach(todo => {\n      const todoElement = this.#createTodo(todo.name)\n      container.append(todoElement);\n    })\n    return container;\n  }\n\n  #createTodo(todoName) {\n    const todoElement = document.createElement(\"li\");\n    todoElement.innerText = todoName;\n    return todoElement;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/project/project-card-factory.js?");

/***/ }),

/***/ "./src/project/project-class.js":
/*!**************************************!*\
  !*** ./src/project/project-class.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n/* harmony import */ var _todo_todo_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/todo-class */ \"./src/todo/todo-class.js\");\n\n\n\n\n\nclass Project {\n  constructor(name, todoList) {\n    this.name = name;\n    this.todoList = todoList\n  }\n\n  checkName(projectName) {\n    return this.name === projectName;\n  }\n\n  updateTodo(todoObject) {\n    const todo = this.getTodo(todoObject.oldTodoName);\n    this.updateExitedTodo(todo, todoObject)\n  }\n\n  getTodo(todoName) {\n    return this.todoList.find(todoElement => todoElement.name === todoName);\n  }\n\n  createNewTodo(todoName) {\n    this.todoList.push(new _todo_todo_class__WEBPACK_IMPORTED_MODULE_1__.Todo(todoName))\n  }\n\n  updateExitedTodo(todo, todoObject) {\n    todo.name = todoObject.newTodoName;\n  }\n\n  changeTodoDate(todoName, newTodoDate) {\n    const todo = this.getTodo(todoName);\n    todo.date = newTodoDate;\n  }\n\n  removeTodo(todoName) {\n    const position = this.todoList.findIndex(todo => todo.name === todoName);\n    this.todoList.splice(position, 1);\n  }\n\n  filterTodos(beginningDate, endDate) {\n    return {\n      name: this.name,\n      todoList: this.todoList.filter(todo => todo.between(beginningDate, endDate))\n    }\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/project/project-class.js?");

/***/ }),

/***/ "./src/project/project-database.js":
/*!*****************************************!*\
  !*** ./src/project/project-database.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-class */ \"./src/project/project-class.js\");\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n/* harmony import */ var _others_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/local-storage */ \"./src/others/local-storage.js\");\n\n\n\n\n\nlet projects = []\n\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"checkNewProject\", checkNewProject)\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"projectChanged\", emitProjectTodos)\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"todoChange\", updateTodo)\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"newTodo\", checkNewTodo)\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"updateDate\", updateTodoDate)\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"removeTodo\", removeTodo)\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"deleteProject\", deleteProject)\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"getTodayTodos\", todayTodos);\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"loadProjects\", updateProjects)\n\nconst dateFilter = {\n  Today: function() {\n    const dateManager = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_2__.getService)(\"dateManager\");\n    const todayDate = dateManager.getTodayDate();\n    return this.getProject(todayDate, todayDate);\n  },\n\n  Week: function() {\n    const dateManager = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_2__.getService)(\"dateManager\");\n    const firstDayOfTheWeek = dateManager.getFirstDayWeek();\n    const lastDayOfTheWeek = dateManager.getLastDayWeek()\n    return this.getProject(firstDayOfTheWeek, lastDayOfTheWeek);\n  },\n\n  getProject: function(beginningDate, endDate) {\n    const projectList = projects.map(project => project.filterTodos(beginningDate, endDate));\n    return projectList.filter(project => project.todoList.length > 0);\n  }\n}\n\nfunction todayTodos(text) {\n  const projectsList = dateFilter[text]();\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderTodayTodos\", {text, projectsList});\n}\n\nfunction checkNewProject(projectName) {\n  if (checkEmptyName(projectName)) {\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"emptyProjectName\", null);\n  } else if (checkDuplicateProject(projectName)) {\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"duplicateProject\", projectName);\n  } else {\n    createNewProject(projectName);\n    renderProjects(\"newProject\");\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", projectName);\n  }\n}\n\nfunction renderProjects(eventType) {\n  const projectsNames = projects.map(project => project.name);\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(eventType, projectsNames);\n}\n\nfunction checkEmptyName(projectName) {\n  return projectName.length === 0;\n}\n\nfunction checkDuplicateProject(projectName) {\n  const allProjectNames = projects.map(project => project.name);\n  return allProjectNames.includes(projectName);\n}\n\nfunction createNewProject(projectName) {\n  const newProject = new _project_class__WEBPACK_IMPORTED_MODULE_1__.Project(projectName, []);\n  projects.push(newProject)\n  ;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"saveProjects\", projects);\n}\n\nfunction emitProjectTodos(projectName) {\n  const project = getProject(projectName);\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderTodos\", project.todoList);\n}\n\nfunction updateTodo(todoObject) {\n  const project = getProject(todoObject.project);\n  const todoInProject = project.getTodo(todoObject.newTodoName)\n  if (todoInProject === undefined) {\n    project.updateTodo(todoObject);\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", todoObject.project);\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"saveProjects\", projects);\n  } else {\n    alert(\"Todo Already Exits\");\n  }\n\n}\n\nfunction checkNewTodo(newTodoObject) {\n  const projectName = newTodoObject.project;\n  const todoName = newTodoObject.todo;\n  const project = getProject(projectName);\n  const projectTodo = project.getTodo(todoName);\n  if (projectTodo === undefined) {\n    createNewTodo(project, todoName)\n    ;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"saveProjects\", projects);\n  } else {\n    alert(\"Todo Already Exits\")\n  }\n}\n\nfunction createNewTodo(project, todoName) {\n  project.createNewTodo(todoName);\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", project.name);\n}\n\nfunction updateTodoDate(todoObject) {\n  const project = getProject(todoObject.project)\n  project.changeTodoDate(todoObject.todo, todoObject.date)\n  ;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", todoObject.project);\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"saveProjects\", projects);\n}\n\nfunction removeTodo(projectObject) {\n  const projectName = projectObject.project;\n  const project = getProject(projectName)\n  project.removeTodo(projectObject.todo);\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", projectName);\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"saveProjects\", projects);\n}\n\nfunction deleteProject(projectName) {\n  const position = projects.findIndex(project => project.name === projectName);\n  projects.splice(position, 1);\n  renderProjects(\"projectsUpdated\");\n  const firstProject = projects[0];\n  if (firstProject === undefined) {\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderTodayTodos\", {text:\"Today\", projectsList:null});\n  } else {\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", firstProject.name);\n  }\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"saveProjects\", projects);\n}\n\nfunction getProject(projectName) {\n  return projects.find(project => project.checkName(projectName));\n}\n\nfunction updateProjects(projectList) {\n  projects = projectList;\n  renderProjects(\"projectsUpdated\");\n}\n\n//# sourceURL=webpack://todo-list/./src/project/project-database.js?");

/***/ }),

/***/ "./src/project/project-element-factory.js":
/*!************************************************!*\
  !*** ./src/project/project-element-factory.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectElementFactory: () => (/* binding */ ProjectElementFactory)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\n\n\n\nclass ProjectElementFactory {\n  build(projectName) {\n    const liElement = document.createElement(\"li\");\n    const pElement = this.#generateProjectName(projectName);\n    const deleteButton = this.#createDeleteButton(projectName);\n\n    liElement.classList.add(\"project-aside-element\");\n    liElement.append(pElement);\n    liElement.append(deleteButton);\n    return liElement;\n  }\n\n  #generateProjectName(projectName) {\n    const pElement = document.createElement(\"p\");\n    pElement.innerText = projectName;\n    return pElement;\n  }\n\n  #createDeleteButton(projectName) {\n    const deleteButton = document.createElement(\"span\");\n    deleteButton.addEventListener(\"click\", this.#deleteProject(projectName));\n    deleteButton.innerText = \"x\";\n    deleteButton.classList.add(\"delete-project-button\");\n    return deleteButton;\n  }\n\n  #deleteProject(projectName) {\n    return function() {\n      (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"deleteProject\", projectName)\n    }\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/project/project-element-factory.js?");

/***/ }),

/***/ "./src/todo/new-todo-button.js":
/*!*************************************!*\
  !*** ./src/todo/new-todo-button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NewTodoButton: () => (/* binding */ NewTodoButton)\n/* harmony export */ });\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n\n\n\n\nclass NewTodoButton {\n  build(projectName) {\n    this.newTodoButton = this.#getNewTodoButton(projectName);\n    return this.newTodoButton;\n  }\n\n  #getNewTodoButton(projectName) {\n    const newTodoButton = document.createElement(\"button\");\n    newTodoButton.innerText = \"＋\";\n    newTodoButton.classList.add(\"new-todo-button\");\n    newTodoButton.addEventListener(\"mouseup\", this.#changeButton(projectName, this));\n    return newTodoButton;\n  }\n\n  #changeButton(projectName, todoObject) {\n    return function (event) {\n      const parentElement = event.target.parentElement;\n      const newTodoInput = todoObject.#generateTodoBoilerPlate(projectName);\n      parentElement.replaceChild(newTodoInput, todoObject.newTodoButton);\n    }\n  }\n\n  #generateTodoBoilerPlate(projectName) {\n    const newTodoFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"newTodoFactory\");\n    return newTodoFactory.build(projectName);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/new-todo-button.js?");

/***/ }),

/***/ "./src/todo/todo-class.js":
/*!********************************!*\
  !*** ./src/todo/todo-class.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n\n\n\n\nclass Todo {\n  constructor(name) {\n    this.name = name;\n    this.date = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"dateManager\").getTodayDate();\n  }\n\n  between(initialDate, endDate) {\n    const dateManager = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"dateManager\");\n    const initialTime = dateManager.getDateWith(initialDate).getTime()\n    const endDateTime = dateManager.getDateWith(endDate).getTime();\n    const todoDateTime = dateManager.getDateWith(this.date).getTime();\n    return initialTime <= todoDateTime && todoDateTime <= endDateTime;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todo-class.js?");

/***/ }),

/***/ "./src/todo/todo-factory/new-todo-factory.js":
/*!***************************************************!*\
  !*** ./src/todo/todo-factory/new-todo-factory.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NewTodoFactory: () => (/* binding */ NewTodoFactory)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../others/pub-sub */ \"./src/others/pub-sub.js\");\n\n\n\n\nclass NewTodoFactory {\n  build(projectName) {\n    const inputElement = document.createElement(\"input\");\n    inputElement.id = \"new-todo-input\";\n    inputElement.placeholder = \"Todo Name\"\n    inputElement.addEventListener(\"keyup\", this.#createNewTodo(projectName));\n    return inputElement;\n  }\n\n  #createNewTodo(projectName) {\n    return function (event) {\n      const keyPressed = event.key;\n      const todoName = event.target.value;\n      if (keyPressed === \"Enter\") {\n        (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"newTodo\", {project: projectName, todo: todoName});\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todo-factory/new-todo-factory.js?");

/***/ }),

/***/ "./src/todo/todo-factory/todo-date-factory.js":
/*!****************************************************!*\
  !*** ./src/todo/todo-factory/todo-date-factory.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoDateFactory: () => (/* binding */ TodoDateFactory)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../others/pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../others/service-locator */ \"./src/others/service-locator.js\");\n\n\n\n\n\nclass TodoDateFactory {\n  constructor() {\n    this.dateFormatter = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_1__.getService)(\"dateManager\");\n  }\n\n  generateTodoDate(date) {\n    const todoDateContainer = document.createElement(\"p\");\n    todoDateContainer.innerText = this.dateFormatter.giveFormat(date, \"d-m-y\");\n    todoDateContainer.addEventListener(\"click\", this.#changeToInput(this));\n    return todoDateContainer;\n  }\n\n  #changeToInput(classObject) {\n    return function () {\n      const date = this.innerText;\n      const formattedDate = classObject.dateFormatter.giveFormat(date, \"y-m-d\");\n      const todoInput = classObject.#generateTodoInput(formattedDate);\n      this.parentElement.replaceChild(todoInput, this);\n      todoInput.focus();\n    }\n  }\n\n  #generateTodoInput(date) {\n    const inputElement = document.createElement(\"input\");\n    inputElement.classList.add(\"date-input\");\n    inputElement.addEventListener(\"focusout\", this.#updateTodo)\n    inputElement.type = \"date\";\n    inputElement.value = date;\n    return inputElement;\n  }\n\n  #updateTodo(event) {\n    const projectElement = event.target.parentElement.firstChild\n    const todoName = projectElement.innerText || projectElement.value;\n    const todoDate = event.target.value.split(\"-\").reverse().join(\"-\");\n    const projectName = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_1__.getService)(\"getProjectName\")();\n    const updateTodoObject = {project:projectName, todo:todoName, date:todoDate};\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"updateDate\", updateTodoObject);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todo-factory/todo-date-factory.js?");

/***/ }),

/***/ "./src/todo/todo-factory/todo-factory.js":
/*!***********************************************!*\
  !*** ./src/todo/todo-factory/todo-factory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoFactory: () => (/* binding */ todoFactory)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../others/pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _todo_date_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-date-factory */ \"./src/todo/todo-factory/todo-date-factory.js\");\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../others/service-locator */ \"./src/others/service-locator.js\");\n\n\n\n\n\n\nclass todoFactory {\n\n  constructor() {\n    this.todoDateFactory = new _todo_date_factory__WEBPACK_IMPORTED_MODULE_1__.TodoDateFactory();\n  }\n\n  build(todoObject) {\n    const todoContainer = this.#generateContainer();\n    const todoName = this.#generateTodoName(todoObject.name);\n    const todoDate = this.todoDateFactory.generateTodoDate(todoObject.date);\n    const deleteTodoButton = this.#generateDeleteTodoButton();\n\n    todoContainer.append(todoName);\n    todoContainer.append(todoDate);\n    todoContainer.append(deleteTodoButton);\n    return todoContainer;\n  }\n\n  #generateDeleteTodoButton() {\n    const deleteTodoButton = document.createElement(\"button\");\n    deleteTodoButton.innerText = \"x\";\n    deleteTodoButton.classList.add(\"delete-todo-button\");\n    deleteTodoButton.addEventListener(\"click\", this.#removeTodo);\n    return deleteTodoButton;\n  }\n\n  #removeTodo(event) {\n    const todoElement = event.target.parentElement.firstChild\n    const todo = todoElement.innerText\n    const project = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_2__.getService)(\"getProjectName\")();\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"removeTodo\", {project,todo})\n  }\n\n  #generateTodoName(name) {\n    const todoNameContainer = document.createElement(\"p\");\n    todoNameContainer.innerText = name;\n    todoNameContainer.classList.add(\"todo-name\");\n    todoNameContainer.addEventListener(\"click\", this.#changeToInput.bind(this));\n    return todoNameContainer;\n  }\n\n  #changeToInput(event) {\n    const todoName = event.target.innerText;\n    const todoInput = this.#generateTodoInput(todoName);\n    todoInput.placeholder = \"New Todo Name\"\n    event.target.parentElement.replaceChild(todoInput, event.target);\n    todoInput.focus();\n  }\n\n  #generateContainer() {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"todo-element\");\n    return container;\n  }\n\n  setProjectName(projectName) {\n    this.projectName = projectName;\n  }\n\n  #generateTodoInput(inputContent) {\n    const todoInput = document.createElement(\"input\");\n    todoInput.value = inputContent;\n    todoInput.classList.add(\"todo-input\");\n    todoInput.addEventListener(\n      \"keydown\",\n      this.#createNewTodo.bind({todoObject:this, inputValue:inputContent})\n    );\n    return todoInput;\n  }\n\n  #createNewTodo(event) {\n    const keyPressed = event.key;\n    if (keyPressed === \"Enter\") {\n      const todoName = event.target.value;\n      (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\n        \"todoChange\",\n        {project: this.todoObject.projectName, oldTodoName:this.inputValue, newTodoName:todoName}\n      )\n    }\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todo-factory/todo-factory.js?");

/***/ }),

/***/ "./src/view/aside-view-controller.js":
/*!*******************************************!*\
  !*** ./src/view/aside-view-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\n\n\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"newProject\", displayNewProject)\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"projectsUpdated\", displayNewProject);\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"displayNewProjectButton\", appendNewProjectButton)\n\nconst newProjectButtonElement = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"newProjectButton\");\nconst projectListDomElement = document.querySelector(\".project-list\");\nconst projectElementFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"projectElementFactory\");\n\nprojectListDomElement.addEventListener(\"click\", renderProject);\n\nfunction appendNewProjectButton() {\n  projectListDomElement.append(newProjectButtonElement);\n}\n\nfunction displayNewProject(projects) {\n  projectListDomElement.innerHTML = \"\";\n  projects.forEach(project => {\n    const projectElement = projectElementFactory.build(project);\n    projectListDomElement.append(projectElement);\n  })\n  appendNewProjectButton();\n}\n\nfunction renderProject(event) {\n  if (event.target.nodeName === \"P\") {\n    const projectName = event.target.innerText;\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.emit)(\"renderProject\", projectName);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/view/aside-view-controller.js?");

/***/ }),

/***/ "./src/view/project-render.js":
/*!************************************!*\
  !*** ./src/view/project-render.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n\n\n\nconst title = document.querySelector(\"h2\");\nconst todoSection = document.querySelector(\".todo-section\");\nconst todoFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_1__.getService)(\"todoFactory\");\n\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"renderProject\", renderTitle);\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"renderTodos\", renderTodos);\n\nfunction renderTitle(projectName) {\n  todoFactory.setProjectName(projectName);\n  title.innerText = projectName;\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"projectChanged\", projectName);\n}\n\nfunction renderTodos(todoList) {\n  const projectName = title.innerText;\n  const newTodoButtonFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_1__.getService)(\"newTodoButton\");\n  const newTodoButton = newTodoButtonFactory.build(projectName);\n  todoSection.innerHTML = \"\";\n  todoList.forEach(todo => {\n    const todoElement = todoFactory.build(todo)\n    todoSection.append(todoElement)\n  })\n  todoSection.append(newTodoButton);\n}\n\n//# sourceURL=webpack://todo-list/./src/view/project-render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;