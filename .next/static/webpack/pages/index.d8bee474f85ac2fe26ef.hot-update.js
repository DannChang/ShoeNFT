/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/store */ \"./src/helpers/store.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_dom_instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dom/instructions */ \"./src/components/dom/instructions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/danielchang/Documents/GitHub/bd-dev/src/pages/index.jsx\",\n    _this = undefined;\n\n\n // Step 5 - delete Instructions components\n\n // Step 2 - update Box components\n\nvar Box = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"src_components_canvas_Box_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/canvas/Box */ \"./src/components/canvas/Box.jsx\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/canvas/Box */ \"./src/components/canvas/Box.jsx\")];\n    },\n    modules: [\"index.jsx -> \" + '@/components/canvas/Box']\n  }\n});\n_c2 = Box;\n\nvar Page = function Page(_ref) {\n  var title = _ref.title;\n  _helpers_store__WEBPACK_IMPORTED_MODULE_1__.default.setState({\n    title: title\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n      r3f: true,\n      route: \"/box\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dom_instructions__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c3 = Page;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Box$dynamic\");\n$RefreshReg$(_c2, \"Box\");\n$RefreshReg$(_c3, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbIkJveCIsImR5bmFtaWMiLCJzc3IiLCJQYWdlIiwidGl0bGUiLCJ1c2VTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUdBOztBQUNBLElBQU1BLEdBQUcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sNExBQU47QUFBQSxDQUFELEVBQTBDO0FBQzNEQyxLQUFHLEVBQUUsS0FEc0Q7QUFBQTtBQUFBO0FBQUEsa0NBQTVCLGdFQUE0QjtBQUFBO0FBQUEsZ0NBQTVCLHlCQUE0QjtBQUFBO0FBQUEsQ0FBMUMsQ0FBbkI7TUFBTUYsRzs7QUFJTixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzFCQyw4REFBQSxDQUFrQjtBQUFFRCxTQUFLLEVBQUxBO0FBQUYsR0FBbEI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLEdBQUQ7QUFBSyxTQUFHLE1BQVI7QUFBUyxXQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQSxrQkFERjtBQU9ELENBVEQ7O01BQU1ELEk7O0FBV04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3JlIGZyb20gJ0AvaGVscGVycy9zdG9yZSdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbi8vIFN0ZXAgNSAtIGRlbGV0ZSBJbnN0cnVjdGlvbnMgY29tcG9uZW50c1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICdAL2NvbXBvbmVudHMvZG9tL2luc3RydWN0aW9ucydcblxuLy8gU3RlcCAyIC0gdXBkYXRlIEJveCBjb21wb25lbnRzXG5jb25zdCBCb3ggPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQC9jb21wb25lbnRzL2NhbnZhcy9Cb3gnKSwge1xuICBzc3I6IGZhbHNlLFxufSlcblxuY29uc3QgUGFnZSA9ICh7IHRpdGxlIH0pID0+IHtcbiAgdXNlU3RvcmUuc2V0U3RhdGUoeyB0aXRsZSB9KVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IHIzZiByb3V0ZT0nL2JveCcgLz5cbiAgICAgIHsvKiBTdGVwIDUgLSBkZWxldGUgSW5zdHJ1Y3Rpb25zIGNvbXBvbmVudHMgKi99XG4gICAgICA8SW5zdHJ1Y3Rpb25zIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlOiAnSW5kZXgnLFxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});