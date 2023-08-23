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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::after, *::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  /* outline: 1px solid red */\r\n  user-select: none;\r\n}\r\n\r\n:root {\r\n  --primary-dark: #222;\r\n  --secondary-gray: #ddd;\r\n  --tertiary-gray: #eee;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template: min-content 9fr / 1.5fr 5fr;\r\n  min-height: 100vh;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 6rem;\r\n}\r\n\r\nh2 {\r\n  background: var(--primary-dark);\r\n  color: white;\r\n  text-align: center;\r\n  font-size: 4rem;\r\n  border: 10px inset white;\r\n}\r\n\r\nh3 {\r\n  background: white;\r\n  text-align: center;\r\n  font-size: 1.8rem;\r\n  padding: 3px;\r\n  color: var(--primary-dark);\r\n  border: inset 8px white;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.8rem;\r\n  background: var(--primary-dark);\r\n  color: white;\r\n}\r\n\r\nnav {\r\n  background-color: var(--primary-dark);\r\n  grid-column: 1 / 3;\r\n  color: white;\r\n}\r\n\r\naside {\r\n  background-color: white;\r\n  grid-column: 1 / 2;\r\n  grid-row: 2/ 3;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  font-family: system-ui;\r\n  border: 12px ridge white;\r\n}\r\n\r\n.new-project-input {\r\n  color: white;\r\n  text-align: center;\r\n  appearance: none;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  border: none;\r\n  padding: 10px;\r\n  background-color: var(--primary-dark);\r\n}\r\n\r\n.new-project-input::placeholder,\r\n#new-todo-input::placeholder {\r\n  color: rgba(255, 255, 255, 0.15);\r\n  font-weight: bold;\r\n}\r\n\r\nul {\r\n  text-align: center;\r\n  display: grid;\r\n  list-style: none;\r\n}\r\n\r\n.aside-element-text,\r\n.project-aside-element {\r\n  position: relative;\r\n  border: 1px solid white;\r\n  cursor: pointer;\r\n  background: var(--primary-dark);\r\n  color: white;\r\n}\r\n\r\n.aside-element-text {\r\n  padding: 10px;\r\n}\r\n\r\n.project-aside-element p {\r\n  padding: 10px;\r\n}\r\n\r\n.aside-element-text:hover,\r\n.project-aside-element:hover {\r\n  background-color: #474747;\r\n}\r\n\r\nsection {\r\n  border: 17px white ridge;\r\n  background-color: #eee;\r\n}\r\n\r\n.todo-section {\r\n  display: grid;\r\n  justify-items: center;\r\n  grid-template-rows: repeat(auto-fill, min-content);\r\n  padding: 10px;\r\n  gap: 10px;\r\n}\r\n\r\n.todo-list-element {\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 4px;\r\n}\r\n\r\n.todo-list-element li {\r\n  color: white;\r\n  background-color: var(--primary-dark);\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.todo-element {\r\n  color: white;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 50%;\r\n  font-weight: 900;\r\n  background: var(--primary-dark);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 3px rgba(0,0,0,40%);\r\n  cursor: pointer;\r\n  gap: 5px;\r\n}\r\n\r\n.todo-element * {\r\n  padding: 10px;\r\n}\r\n\r\n.todo-element p {\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  width: 50%;\r\n}\r\n\r\n.todo-element p:hover {\r\n  box-shadow: 0 0 1px white;\r\n  background-color: rgb(53,53,53);\r\n}\r\n\r\n.new-todo-button {\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: white;\r\n  background: var(--primary-dark);\r\n  padding: 5px;\r\n  border: 1px outset white;\r\n  font-weight: bold;\r\n  box-shadow: 0 3px 1px black;\r\n}\r\n\r\n.new-todo-button:active {\r\n  top: 2px;\r\n  box-shadow: 0 1px 0 black;\r\n}\r\n\r\n.todo-input {\r\n  color: white;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  appearance: none;\r\n  background: var(--primary-dark);\r\n  border: none;\r\n  width: 50%;\r\n  font-weight: bold;\r\n  box-shadow: 0 0 1px white;\r\n  outline: none;\r\n}\r\n\r\n#new-todo-input {\r\n  text-align: center;\r\n  color: white;\r\n  padding: 10px;\r\n  width: 50%;\r\n  font-weight: 900;\r\n  background: var(--primary-dark);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 3px rgba(0,0,0,40%);\r\n  cursor: pointer;\r\n}\r\n\r\n.date-input {\r\n  text-align: center;\r\n  width: 50%;\r\n  color: white;\r\n  background-color: var(--primary-dark);\r\n  border: 1px white;\r\n  box-shadow: 0 0 1px white;\r\n  color-scheme: dark;\r\n  outline: none;\r\n}\r\n\r\n.delete-todo-button {\r\n  cursor: pointer;\r\n  appearance: none;\r\n  color: red;\r\n  background-color: white;\r\n  border-radius: 0 10px 10px 0;\r\n  border: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.delete-project-button {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 1%;\r\n  right: 1%;\r\n}\r\n\r\n.delete-project-button:hover {\r\n  color: indianred;\r\n}\r\n\r\n.project-card {\r\n  background-color: white;\r\n  width: 50%;\r\n  text-align: center;\r\n  box-shadow: 0 0 1px black;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\r\n\r\nconst today = document.querySelector(\".timed-option\");\r\n\r\ntoday.addEventListener(\"click\", renderTodayTodos);\r\n\r\nfunction renderTodayTodos(event) {\r\n  if (event.target.nodeName === \"P\") {\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"getTodayTodos\", event.target.innerText);\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/date-module-render/today-module.js?");

/***/ }),

/***/ "./src/date-module-render/today-render.js":
/*!************************************************!*\
  !*** ./src/date-module-render/today-render.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\r\n\r\n\r\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"renderTodayTodos\", renderDom);\r\n\r\nconst title = document.querySelector(\"h2\");\r\nconst todoSection = document.querySelector(\".todo-section\");\r\n\r\nfunction renderDom(renderObject) {\r\n  const projectList = renderObject.projectsList;\r\n  title.innerText = renderObject.text;\r\n  todoSection.innerHTML = \"\";\r\n  if (projectList !== null) {\r\n    const projectCardFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"projectCardFactory\");\r\n    projectList.forEach(project => {\r\n      const projectCard = projectCardFactory.build(project)\r\n      todoSection.append(projectCard)\r\n    })\r\n  }\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/date-module-render/today-render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_aside_view_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/aside-view-controller.js */ \"./src/view/aside-view-controller.js\");\n/* harmony import */ var _others_pub_sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./others/pub-sub.js */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _project_project_database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project-database.js */ \"./src/project/project-database.js\");\n/* harmony import */ var _project_project_element_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project-element-factory.js */ \"./src/project/project-element-factory.js\");\n/* harmony import */ var _view_project_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/project-render.js */ \"./src/view/project-render.js\");\n/* harmony import */ var _date_module_render_today_module_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-module-render/today-module.js */ \"./src/date-module-render/today-module.js\");\n/* harmony import */ var _date_module_render_today_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-module-render/today-render.js */ \"./src/date-module-render/today-render.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_others_pub_sub_js__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"duplicateProject\", function(projectName) {\r\n  alert(`Project ${projectName} already exist`);\r\n})\r\n\r\n;(0,_others_pub_sub_js__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"emptyProjectName\", function() {\r\n  alert(`Project name is empty`);\r\n})\r\n\r\n;(0,_view_aside_view_controller_js__WEBPACK_IMPORTED_MODULE_0__.displayNewProjectButton)()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/others/dateManager.js":
/*!***********************************!*\
  !*** ./src/others/dateManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dateManager: () => (/* binding */ dateManager)\n/* harmony export */ });\n\r\n\r\nclass dateManager {\r\n  constructor() {\r\n    this.today = new Date();\r\n  }\r\n\r\n  getTodayDate() {\r\n    const year = this.today.getFullYear();\r\n    const month = this.today.getMonth() + 1\r\n    const formattedMonth = (month < 10)? `0${month}`: month;\r\n    const day = this.today.getDate();\r\n    return `${day}-${formattedMonth}-${year}`\r\n  }\r\n\r\n  giveFormat(date, format) {\r\n    let dateFormatted = format;\r\n    const dateArray = date.split(\"-\")\r\n    dateFormatted = dateFormatted.replace(\"d\", dateArray[0]);\r\n    dateFormatted = dateFormatted.replace(\"m\", dateArray[1]);\r\n    dateFormatted = dateFormatted.replace(\"y\", dateArray[2]);\r\n    return dateFormatted;\r\n  }\r\n\r\n  getDateWith(dateWithoutFormat) {\r\n    const formatDate = dateWithoutFormat.split(\"-\").reverse().join(\"-\");\r\n    return new Date(formatDate);\r\n  }\r\n\r\n  getFirstDayWeek() {\r\n    const month = this.today.getMonth() + 1;\r\n    const year = this.today.getFullYear();\r\n    const first = this.today.getDate() - this.today.getDay() + 1;\r\n    return `${first}-${month}-${year}`\r\n  }\r\n\r\n  getLastDayWeek() {\r\n    const month = this.today.getMonth() + 1;\r\n    const year = this.today.getFullYear();\r\n    const first = this.today.getDate() - this.today.getDay() + 1;\r\n    const last = first + 6;\r\n    return `${last}-${month}-${year}`\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/others/dateManager.js?");

/***/ }),

/***/ "./src/others/pub-sub.js":
/*!*******************************!*\
  !*** ./src/others/pub-sub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emit: () => (/* binding */ emit),\n/* harmony export */   subscribe: () => (/* binding */ subscribe)\n/* harmony export */ });\n\r\n\r\nconst events = {}\r\n\r\nfunction subscribe(eventName, handler) {\r\n  events[eventName] = events[eventName] || [];\r\n  events[eventName].push(handler);\r\n}\r\n\r\nfunction emit(eventName, data) {\r\n  events[eventName].forEach(handler => handler(data))\r\n}\n\n//# sourceURL=webpack://todo-list/./src/others/pub-sub.js?");

/***/ }),

/***/ "./src/others/service-locator.js":
/*!***************************************!*\
  !*** ./src/others/service-locator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getService: () => (/* binding */ getService)\n/* harmony export */ });\n/* harmony import */ var _project_new_project_button_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/new-project-button-element.js */ \"./src/project/new-project-button-element.js\");\n/* harmony import */ var _todo_todo_factory_todo_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/todo-factory/todo-factory */ \"./src/todo/todo-factory/todo-factory.js\");\n/* harmony import */ var _todo_todo_factory_new_todo_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todo-factory/new-todo-factory */ \"./src/todo/todo-factory/new-todo-factory.js\");\n/* harmony import */ var _todo_new_todo_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo/new-todo-button */ \"./src/todo/new-todo-button.js\");\n/* harmony import */ var _project_current_project_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project/current-project-name */ \"./src/project/current-project-name.js\");\n/* harmony import */ var _dateManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dateManager */ \"./src/others/dateManager.js\");\n/* harmony import */ var _project_project_element_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project/project-element-factory */ \"./src/project/project-element-factory.js\");\n/* harmony import */ var _project_project_card_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project/project-card-factory */ \"./src/project/project-card-factory.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst services = {};\r\n\r\nfunction newService(name, service) {\r\n  services[name] = service;\r\n}\r\n\r\nfunction getService(name) {\r\n  return services[name];\r\n}\r\n\r\nnewService(\"projectElementFactory\", new _project_project_element_factory__WEBPACK_IMPORTED_MODULE_6__.ProjectElementFactory());\r\nnewService(\"dateManager\", new _dateManager__WEBPACK_IMPORTED_MODULE_5__.dateManager());\r\nnewService(\"getProjectName\", _project_current_project_name__WEBPACK_IMPORTED_MODULE_4__.getProjectName);\r\nnewService(\"newTodoButton\", new _todo_new_todo_button__WEBPACK_IMPORTED_MODULE_3__.NewTodoButton());\r\nnewService(\"todoFactory\", new _todo_todo_factory_todo_factory__WEBPACK_IMPORTED_MODULE_1__.todoFactory());\r\nnewService(\"newTodoFactory\", new _todo_todo_factory_new_todo_factory__WEBPACK_IMPORTED_MODULE_2__.NewTodoFactory());\r\nnewService(\"newProjectButton\", _project_new_project_button_element_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButtonElement);\r\nnewService(\"projectCardFactory\", new _project_project_card_factory__WEBPACK_IMPORTED_MODULE_7__.ProjectCardFactory());\n\n//# sourceURL=webpack://todo-list/./src/others/service-locator.js?");

/***/ }),

/***/ "./src/project/current-project-name.js":
/*!*********************************************!*\
  !*** ./src/project/current-project-name.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProjectName: () => (/* binding */ getProjectName)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\r\n\r\n\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"projectChanged\", setProjectName);\r\n\r\nlet currentProjectName = null\r\n\r\nfunction setProjectName(name) {\r\n  currentProjectName = name;\r\n}\r\n\r\nfunction getProjectName() {\r\n  return currentProjectName;\r\n}\n\n//# sourceURL=webpack://todo-list/./src/project/current-project-name.js?");

/***/ }),

/***/ "./src/project/new-project-button-element.js":
/*!***************************************************!*\
  !*** ./src/project/new-project-button-element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newProjectButtonElement: () => (/* binding */ newProjectButtonElement)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub.js */ \"./src/others/pub-sub.js\");\n\r\n\r\n\r\n\r\n;(0,_others_pub_sub_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"newProject\", changeInputToButton)\r\n\r\nconst newProjectInputElement = generateInputElement();\r\nconst newProjectParagraphElement = generatePElement();\r\nconst newProjectButtonElement = generateNewProjectButton() ;\r\n\r\nfunction changeInputToButton() {\r\n  newProjectButtonElement.replaceChild(newProjectParagraphElement, newProjectInputElement);\r\n}\r\n\r\nfunction generatePElement() {\r\n  const pElement = document.createElement(\"div\");\r\n  pElement.innerText = \"＋\";\r\n  pElement.classList.add(\"aside-element-text\");\r\n  pElement.addEventListener(\"click\", replaceButton)\r\n  return pElement;\r\n}\r\n\r\nfunction generateNewProjectButton() {\r\n  const liElement = document.createElement(\"li\");\r\n  liElement.append(newProjectParagraphElement);\r\n  return liElement;\r\n}\r\n\r\nfunction replaceButton(event) {\r\n  event.target.parentElement.replaceChild(newProjectInputElement, event.target);\r\n  newProjectInputElement.value = \"\";\r\n  newProjectInputElement.focus();\r\n}\r\n\r\nfunction generateInputElement() {\r\n  const newProjectInput =  document.createElement(\"input\");\r\n  newProjectInput.classList.add(\"new-project-input\");\r\n  newProjectInput.placeholder = \"Project Name\"\r\n  newProjectInput.addEventListener(\"keyup\", checkKeyPressed);\r\n  return newProjectInput;\r\n}\r\n\r\nfunction checkKeyPressed(event) {\r\n  const keyPressed = event.key;\r\n  if (keyPressed === \"Enter\") {\r\n    const projectName = event.target.value;\r\n    (0,_others_pub_sub_js__WEBPACK_IMPORTED_MODULE_0__.emit)(\"checkNewProject\", projectName);\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/project/new-project-button-element.js?");

/***/ }),

/***/ "./src/project/project-card-factory.js":
/*!*********************************************!*\
  !*** ./src/project/project-card-factory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectCardFactory: () => (/* binding */ ProjectCardFactory)\n/* harmony export */ });\n\r\n\r\nclass ProjectCardFactory {\r\n  build(project) {\r\n    const container = document.createElement(\"div\");\r\n    const projectNameElement = this.#createProjectTitle(project.name);\r\n    const todosElements = this.#createTodos(project.todoList);\r\n\r\n    container.classList.add(\"project-card\")\r\n    container.append(projectNameElement);\r\n    container.append(todosElements);\r\n    return container;\r\n  }\r\n\r\n  #createProjectTitle(project) {\r\n    const titleObject = document.createElement(\"h4\");\r\n    titleObject.innerText = project;\r\n    return titleObject;\r\n  }\r\n\r\n  #createTodos(todoList) {\r\n    const container = document.createElement(\"ul\");\r\n    container.classList.add(\"todo-list-element\");\r\n    todoList.forEach(todo => {\r\n      const todoElement = this.#createTodo(todo.name)\r\n      container.append(todoElement);\r\n    })\r\n    return container;\r\n  }\r\n\r\n  #createTodo(todoName) {\r\n    const todoElement = document.createElement(\"li\");\r\n    todoElement.innerText = todoName;\r\n    return todoElement;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/project/project-card-factory.js?");

/***/ }),

/***/ "./src/project/project-class.js":
/*!**************************************!*\
  !*** ./src/project/project-class.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n\r\n\r\n\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.todoList = []\r\n  }\r\n\r\n  checkName(projectName) {\r\n    return this.name === projectName;\r\n  }\r\n\r\n  updateTodo(todoObject) {\r\n    const todo = this.getTodo(todoObject.oldTodoName);\r\n    this.updateExitedTodo(todo, todoObject)\r\n  }\r\n\r\n  getTodo(todoName) {\r\n    return this.todoList.find(todoElement => todoElement.name === todoName);\r\n  }\r\n\r\n  createNewTodo(todoName) {\r\n    const dateManager = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"dateManager\");\r\n    const todayDate = dateManager.getTodayDate();\r\n    this.todoList.push({\r\n      name: todoName,\r\n      date: todayDate,\r\n      between: function (initialDate, endDate) {\r\n        const initialTime = dateManager.getDateWith(initialDate).getTime()\r\n        const endDateTime = dateManager.getDateWith(endDate).getTime();\r\n        const todoDateTime = dateManager.getDateWith(this.date).getTime();\r\n        return initialTime <= todoDateTime && todoDateTime <= endDateTime;\r\n      }\r\n    })\r\n  }\r\n\r\n  updateExitedTodo(todo, todoObject) {\r\n    todo.name = todoObject.newTodoName;\r\n  }\r\n\r\n  changeTodoDate(todoName, newTodoDate) {\r\n    const todo = this.getTodo(todoName);\r\n    todo.date = newTodoDate;\r\n  }\r\n\r\n  removeTodo(todoName) {\r\n    const position = this.todoList.findIndex(todo => todo.name === todoName);\r\n    this.todoList.splice(position, 1);\r\n  }\r\n\r\n  filterTodos(beginningDate, endDate) {\r\n    return {\r\n      name: this.name,\r\n      todoList: this.todoList.filter(todo => todo.between(beginningDate, endDate))\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/project/project-class.js?");

/***/ }),

/***/ "./src/project/project-database.js":
/*!*****************************************!*\
  !*** ./src/project/project-database.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-class */ \"./src/project/project-class.js\");\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n\r\n\r\n\r\n\r\nconst projects = []\r\n\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"checkNewProject\", checkNewProject)\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"projectChanged\", emitProjectTodos)\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"todoChange\", updateTodo)\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"newTodo\", checkNewTodo)\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"updateDate\", updateTodoDate)\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"removeTodo\", removeTodo)\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"deleteProject\", deleteProject)\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"getTodayTodos\", todayTodos);\r\n\r\nconst dateFilter = {\r\n  Today: function () {\r\n    const dateManager = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_2__.getService)(\"dateManager\");\r\n    const todayDate = dateManager.getTodayDate();\r\n    return this.getProject(todayDate, todayDate);\r\n  },\r\n\r\n  Week: function () {\r\n    const dateManager = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_2__.getService)(\"dateManager\");\r\n    const firstDayOfTheWeek = dateManager.getFirstDayWeek();\r\n    const lastDayOfTheWeek = dateManager.getLastDayWeek()\r\n    return this.getProject(firstDayOfTheWeek, lastDayOfTheWeek);\r\n  },\r\n\r\n  getProject: function (beginningDate, endDate) {\r\n    const projectList = projects.map(project => project.filterTodos(beginningDate, endDate));\r\n    return projectList.filter(project => project.todoList.length > 0);\r\n  }\r\n}\r\n\r\nfunction todayTodos(text) {\r\n  const projectsList = dateFilter[text]();\r\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderTodayTodos\", {text, projectsList});\r\n}\r\n\r\nfunction checkNewProject(projectName) {\r\n  if (checkEmptyName(projectName)) {\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"emptyProjectName\", null);\r\n  } else if (checkDuplicateProject(projectName)) {\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"duplicateProject\", projectName);\r\n  } else {\r\n    createNewProject(projectName);\r\n    renderProjects(\"newProject\");\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", projectName);\r\n  }\r\n}\r\n\r\nfunction renderProjects(eventType) {\r\n  const projectsNames = projects.map(project => project.name);\r\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(eventType, projectsNames);\r\n}\r\n\r\nfunction checkEmptyName(projectName) {\r\n  return projectName.length === 0;\r\n}\r\n\r\nfunction checkDuplicateProject(projectName) {\r\n  const allProjectNames = projects.map(project => project.name);\r\n  return allProjectNames.includes(projectName);\r\n}\r\n\r\nfunction createNewProject(projectName) {\r\n  const newProject = new _project_class__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);\r\n  projects.push(newProject)\r\n}\r\n\r\nfunction emitProjectTodos(projectName) {\r\n  const project = getProject(projectName);\r\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderTodos\", project.todoList);\r\n}\r\n\r\nfunction updateTodo(todoObject) {\r\n  const project = getProject(todoObject.project);\r\n  const todoInProject = project.getTodo(todoObject.newTodoName)\r\n  if (todoInProject === undefined) {\r\n    project.updateTodo(todoObject);\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", todoObject.project);\r\n  } else {\r\n    alert(\"Todo Already Exits\");\r\n  }\r\n\r\n}\r\n\r\nfunction checkNewTodo(newTodoObject) {\r\n  const projectName = newTodoObject.project;\r\n  const todoName = newTodoObject.todo;\r\n  const project = getProject(projectName);\r\n  const projectTodo = project.getTodo(todoName);\r\n  if (projectTodo === undefined) {\r\n    createNewTodo(project, todoName)\r\n  } else {\r\n    alert(\"Todo Already Exits\")\r\n  }\r\n}\r\n\r\nfunction createNewTodo(project, todoName) {\r\n  project.createNewTodo(todoName);\r\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", project.name);\r\n}\r\n\r\nfunction updateTodoDate(todoObject) {\r\n  const project = getProject(todoObject.project)\r\n  project.changeTodoDate(todoObject.todo, todoObject.date)\r\n  ;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", todoObject.project);\r\n}\r\n\r\nfunction removeTodo(projectObject) {\r\n  const projectName = projectObject.project;\r\n  const project = getProject(projectName)\r\n  project.removeTodo(projectObject.todo);\r\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", projectName);\r\n}\r\n\r\nfunction deleteProject(projectName) {\r\n  const position = projects.findIndex(project => project.name === projectName);\r\n  projects.splice(position, 1);\r\n  renderProjects(\"projectsUpdated\");\r\n  const firstProject = projects[0];\r\n  if (firstProject === undefined) {\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderTodayTodos\", {text:\"Today\", projectsList:null});\r\n  } else {\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"renderProject\", firstProject.name);\r\n  }\r\n}\r\n\r\nfunction getProject(projectName) {\r\n  return projects.find(project => project.checkName(projectName));\r\n}\n\n//# sourceURL=webpack://todo-list/./src/project/project-database.js?");

/***/ }),

/***/ "./src/project/project-element-factory.js":
/*!************************************************!*\
  !*** ./src/project/project-element-factory.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectElementFactory: () => (/* binding */ ProjectElementFactory)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\r\n\r\n\r\n\r\nclass ProjectElementFactory {\r\n  build(projectName) {\r\n    const liElement = document.createElement(\"li\");\r\n    const pElement = this.#generateProjectName(projectName);\r\n    const deleteButton = this.#createDeleteButton(projectName);\r\n\r\n    liElement.classList.add(\"project-aside-element\");\r\n    liElement.append(pElement);\r\n    liElement.append(deleteButton);\r\n    return liElement;\r\n  }\r\n\r\n  #generateProjectName(projectName) {\r\n    const pElement = document.createElement(\"p\");\r\n    pElement.innerText = projectName;\r\n    return pElement;\r\n  }\r\n\r\n  #createDeleteButton(projectName) {\r\n    const deleteButton = document.createElement(\"span\");\r\n    deleteButton.addEventListener(\"click\", this.#deleteProject(projectName));\r\n    deleteButton.innerText = \"x\";\r\n    deleteButton.classList.add(\"delete-project-button\");\r\n    return deleteButton;\r\n  }\r\n\r\n  #deleteProject(projectName) {\r\n    return function() {\r\n      (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"deleteProject\", projectName)\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/project/project-element-factory.js?");

/***/ }),

/***/ "./src/todo/new-todo-button.js":
/*!*************************************!*\
  !*** ./src/todo/new-todo-button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NewTodoButton: () => (/* binding */ NewTodoButton)\n/* harmony export */ });\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n\r\n\r\n\r\n\r\nclass NewTodoButton {\r\n  build(projectName) {\r\n    this.newTodoButton = this.#getNewTodoButton(projectName);\r\n    return this.newTodoButton;\r\n  }\r\n\r\n  #getNewTodoButton(projectName) {\r\n    const newTodoButton = document.createElement(\"button\");\r\n    newTodoButton.innerText = \"＋\";\r\n    newTodoButton.classList.add(\"new-todo-button\");\r\n    newTodoButton.addEventListener(\"mouseup\", this.#changeButton(projectName, this));\r\n    return newTodoButton;\r\n  }\r\n\r\n  #changeButton(projectName, todoObject) {\r\n    return function (event) {\r\n      const parentElement = event.target.parentElement;\r\n      const newTodoInput = todoObject.#generateTodoBoilerPlate(projectName);\r\n      parentElement.replaceChild(newTodoInput, todoObject.newTodoButton);\r\n    }\r\n  }\r\n\r\n  #generateTodoBoilerPlate(projectName) {\r\n    const newTodoFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"newTodoFactory\");\r\n    return newTodoFactory.build(projectName);\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/new-todo-button.js?");

/***/ }),

/***/ "./src/todo/todo-factory/new-todo-factory.js":
/*!***************************************************!*\
  !*** ./src/todo/todo-factory/new-todo-factory.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NewTodoFactory: () => (/* binding */ NewTodoFactory)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../others/pub-sub */ \"./src/others/pub-sub.js\");\n\r\n\r\n\r\n\r\nclass NewTodoFactory {\r\n  build(projectName) {\r\n    const inputElement = document.createElement(\"input\");\r\n    inputElement.id = \"new-todo-input\";\r\n    inputElement.placeholder = \"Todo Name\"\r\n    inputElement.addEventListener(\"keyup\", this.#createNewTodo(projectName));\r\n    return inputElement;\r\n  }\r\n\r\n  #createNewTodo(projectName) {\r\n    return function (event) {\r\n      const keyPressed = event.key;\r\n      const todoName = event.target.value;\r\n      if (keyPressed === \"Enter\") {\r\n        (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"newTodo\", {project: projectName, todo: todoName});\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todo-factory/new-todo-factory.js?");

/***/ }),

/***/ "./src/todo/todo-factory/todo-date-factory.js":
/*!****************************************************!*\
  !*** ./src/todo/todo-factory/todo-date-factory.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoDateFactory: () => (/* binding */ TodoDateFactory)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../others/pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../others/service-locator */ \"./src/others/service-locator.js\");\n\r\n\r\n\r\n\r\n\r\nclass TodoDateFactory {\r\n  constructor() {\r\n    this.dateFormatter = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_1__.getService)(\"dateManager\");\r\n  }\r\n\r\n  generateTodoDate(date) {\r\n    const todoDateContainer = document.createElement(\"p\");\r\n    todoDateContainer.innerText = this.dateFormatter.giveFormat(date, \"d-m-y\");\r\n    todoDateContainer.addEventListener(\"click\", this.#changeToInput(this));\r\n    return todoDateContainer;\r\n  }\r\n\r\n  #changeToInput(classObject) {\r\n    return function () {\r\n      const date = this.innerText;\r\n      const formattedDate = classObject.dateFormatter.giveFormat(date, \"y-m-d\");\r\n      const todoInput = classObject.#generateTodoInput(formattedDate);\r\n      this.parentElement.replaceChild(todoInput, this);\r\n      todoInput.focus();\r\n    }\r\n  }\r\n\r\n  #generateTodoInput(date) {\r\n    const inputElement = document.createElement(\"input\");\r\n    inputElement.classList.add(\"date-input\");\r\n    inputElement.addEventListener(\"focusout\", this.#updateTodo)\r\n    inputElement.type = \"date\";\r\n    inputElement.value = date;\r\n    return inputElement;\r\n  }\r\n\r\n  #updateTodo(event) {\r\n    const projectElement = event.target.parentElement.firstChild\r\n    const todoName = projectElement.innerText || projectElement.value;\r\n    const todoDate = event.target.value.split(\"-\").reverse().join(\"-\");\r\n    const projectName = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_1__.getService)(\"getProjectName\")();\r\n    const updateTodoObject = {project:projectName, todo:todoName, date:todoDate};\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"updateDate\", updateTodoObject);\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todo-factory/todo-date-factory.js?");

/***/ }),

/***/ "./src/todo/todo-factory/todo-factory.js":
/*!***********************************************!*\
  !*** ./src/todo/todo-factory/todo-factory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoFactory: () => (/* binding */ todoFactory)\n/* harmony export */ });\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../others/pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _todo_date_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-date-factory */ \"./src/todo/todo-factory/todo-date-factory.js\");\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../others/service-locator */ \"./src/others/service-locator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass todoFactory {\r\n\r\n  constructor() {\r\n    this.todoDateFactory = new _todo_date_factory__WEBPACK_IMPORTED_MODULE_1__.TodoDateFactory();\r\n  }\r\n\r\n  build(todoObject) {\r\n    const todoContainer = this.#generateContainer();\r\n    const todoName = this.#generateTodoName(todoObject.name);\r\n    const todoDate = this.todoDateFactory.generateTodoDate(todoObject.date);\r\n    const deleteTodoButton = this.#generateDeleteTodoButton();\r\n\r\n    todoContainer.append(todoName);\r\n    todoContainer.append(todoDate);\r\n    todoContainer.append(deleteTodoButton);\r\n    return todoContainer;\r\n  }\r\n\r\n  #generateDeleteTodoButton() {\r\n    const deleteTodoButton = document.createElement(\"button\");\r\n    deleteTodoButton.innerText = \"x\";\r\n    deleteTodoButton.classList.add(\"delete-todo-button\");\r\n    deleteTodoButton.addEventListener(\"click\", this.#removeTodo);\r\n    return deleteTodoButton;\r\n  }\r\n\r\n  #removeTodo(event) {\r\n    const todoElement = event.target.parentElement.firstChild\r\n    const todo = todoElement.innerText\r\n    const project = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_2__.getService)(\"getProjectName\")();\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"removeTodo\", {project,todo})\r\n  }\r\n\r\n  #generateTodoName(name) {\r\n    const todoNameContainer = document.createElement(\"p\");\r\n    todoNameContainer.innerText = name;\r\n    todoNameContainer.classList.add(\"todo-name\");\r\n    todoNameContainer.addEventListener(\"click\", this.#changeToInput.bind(this));\r\n    return todoNameContainer;\r\n  }\r\n\r\n  #changeToInput(event) {\r\n    const todoName = event.target.innerText;\r\n    const todoInput = this.#generateTodoInput(todoName);\r\n    todoInput.placeholder = \"New Todo Name\"\r\n    event.target.parentElement.replaceChild(todoInput, event.target);\r\n    todoInput.focus();\r\n  }\r\n\r\n  #generateContainer() {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"todo-element\");\r\n    return container;\r\n  }\r\n\r\n  setProjectName(projectName) {\r\n    this.projectName = projectName;\r\n  }\r\n\r\n  #generateTodoInput(inputContent) {\r\n    const todoInput = document.createElement(\"input\");\r\n    todoInput.value = inputContent;\r\n    todoInput.classList.add(\"todo-input\");\r\n    todoInput.addEventListener(\r\n      \"keydown\",\r\n      this.#createNewTodo.bind({todoObject:this, inputValue:inputContent})\r\n    );\r\n    return todoInput;\r\n  }\r\n\r\n  #createNewTodo(event) {\r\n    const keyPressed = event.key;\r\n    if (keyPressed === \"Enter\") {\r\n      const todoName = event.target.value;\r\n      (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\r\n        \"todoChange\",\r\n        {project: this.todoObject.projectName, oldTodoName:this.inputValue, newTodoName:todoName}\r\n      )\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todo-factory/todo-factory.js?");

/***/ }),

/***/ "./src/view/aside-view-controller.js":
/*!*******************************************!*\
  !*** ./src/view/aside-view-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayNewProjectButton: () => (/* binding */ displayNewProjectButton)\n/* harmony export */ });\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n\r\n\r\n\r\n\r\n\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"newProject\", displayNewProject)\r\n;(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"projectsUpdated\", displayNewProject);\r\n\r\nconst newProjectButtonElement = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"newProjectButton\");\r\nconst projectListDomElement = document.querySelector(\".project-list\");\r\nconst projectElementFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_0__.getService)(\"projectElementFactory\");\r\n\r\nprojectListDomElement.addEventListener(\"click\", renderProject);\r\n\r\nfunction displayNewProjectButton() {\r\n  projectListDomElement.append(newProjectButtonElement);\r\n}\r\n\r\nfunction displayNewProject(projects) {\r\n  projectListDomElement.innerHTML = \"\";\r\n  projects.forEach(project => {\r\n    const projectElement = projectElementFactory.build(project);\r\n    projectListDomElement.append(projectElement);\r\n  })\r\n  displayNewProjectButton();\r\n}\r\n\r\nfunction renderProject(event) {\r\n  if (event.target.nodeName === \"P\") {\r\n    const projectName = event.target.innerText;\r\n    (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_1__.emit)(\"renderProject\", projectName);\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/view/aside-view-controller.js?");

/***/ }),

/***/ "./src/view/project-render.js":
/*!************************************!*\
  !*** ./src/view/project-render.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _others_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/pub-sub */ \"./src/others/pub-sub.js\");\n/* harmony import */ var _others_service_locator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/service-locator */ \"./src/others/service-locator.js\");\n\r\n\r\n\r\nconst title = document.querySelector(\"h2\");\r\nconst todoSection = document.querySelector(\".todo-section\");\r\nconst todoFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_1__.getService)(\"todoFactory\");\r\n\r\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"renderProject\", renderTitle);\r\n(0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"renderTodos\", renderTodos);\r\n\r\nfunction renderTitle(projectName) {\r\n  todoFactory.setProjectName(projectName);\r\n  title.innerText = projectName;\r\n  (0,_others_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"projectChanged\", projectName);\r\n}\r\n\r\nfunction renderTodos(todoList) {\r\n  const projectName = title.innerText;\r\n  const newTodoButtonFactory = (0,_others_service_locator__WEBPACK_IMPORTED_MODULE_1__.getService)(\"newTodoButton\");\r\n  const newTodoButton = newTodoButtonFactory.build(projectName);\r\n  todoSection.innerHTML = \"\";\r\n  todoList.forEach(todo => {\r\n    const todoElement = todoFactory.build(todo)\r\n    todoSection.append(todoElement)\r\n  })\r\n  todoSection.append(newTodoButton);\r\n}\n\n//# sourceURL=webpack://todo-list/./src/view/project-render.js?");

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