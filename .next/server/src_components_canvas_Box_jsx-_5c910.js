/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_canvas_Box_jsx-_5c910";
exports.ids = ["src_components_canvas_Box_jsx-_5c910"];
exports.modules = {

/***/ "./src/components/canvas/Box.jsx":
/*!***************************************!*\
  !*** ./src/components/canvas/Box.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/store */ \"./src/helpers/store.js\");\n/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/a11y */ \"@react-three/a11y\");\n/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_a11y__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"@react-three/fiber\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/danielchang/Documents/GitHub/bd-dev/src/components/canvas/Box.jsx\";\n\n\n\n\n\nconst BoxComponent = ({\n  route\n}) => {\n  const router = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_1__.default)(s => s.router); // This reference will give us direct access to the THREE.Mesh object\n\n  const mesh = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(); // Set up state for the hovered and active state\n\n  const {\n    0: hovered,\n    1: setHover\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // Subscribe this component to the render-loop, rotate the mesh every frame\n\n  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)((state, delta) => mesh.current ? mesh.current.rotation.y = mesh.current.rotation.x += 0.01 : null); // Return the view, these are regular Threejs elements expressed in JSX\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_a11y__WEBPACK_IMPORTED_MODULE_2__.A11y, {\n    role: \"link\",\n    href: route,\n    actionCall: () => {\n      router.push(route);\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n      ref: mesh,\n      onPointerOver: event => setHover(true),\n      onPointerOut: event => setHover(false),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n        args: [1, 1, 1]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n        color: hovered ? 'hotpink' : route === '/' ? 'darkgrey' : 'orange'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC10aHJlZS1uZXh0Ly4vc3JjL2NvbXBvbmVudHMvY2FudmFzL0JveC5qc3g/MTA1NiJdLCJuYW1lcyI6WyJCb3hDb21wb25lbnQiLCJyb3V0ZSIsInJvdXRlciIsInVzZVN0b3JlIiwicyIsIm1lc2giLCJ1c2VSZWYiLCJob3ZlcmVkIiwic2V0SG92ZXIiLCJ1c2VTdGF0ZSIsInVzZUZyYW1lIiwic3RhdGUiLCJkZWx0YSIsImN1cnJlbnQiLCJyb3RhdGlvbiIsInkiLCJ4IiwicHVzaCIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUNsQyxRQUFNQyxNQUFNLEdBQUdDLHVEQUFRLENBQUVDLENBQUQsSUFBT0EsQ0FBQyxDQUFDRixNQUFWLENBQXZCLENBRGtDLENBRWxDOztBQUNBLFFBQU1HLElBQUksR0FBR0MsNkNBQU0sRUFBbkIsQ0FIa0MsQ0FJbEM7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXNCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBcEMsQ0FMa0MsQ0FNbEM7O0FBQ0FDLDhEQUFRLENBQUMsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQ1BQLElBQUksQ0FBQ1EsT0FBTCxHQUNLUixJQUFJLENBQUNRLE9BQUwsQ0FBYUMsUUFBYixDQUFzQkMsQ0FBdEIsR0FBMEJWLElBQUksQ0FBQ1EsT0FBTCxDQUFhQyxRQUFiLENBQXNCRSxDQUF0QixJQUEyQixJQUQxRCxHQUVJLElBSEUsQ0FBUixDQVBrQyxDQVlsQzs7QUFDQSxzQkFDRSw4REFBQyxtREFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFFZixLQUZSO0FBR0UsY0FBVSxFQUFFLE1BQU07QUFDaEJDLFlBQU0sQ0FBQ2UsSUFBUCxDQUFZaEIsS0FBWjtBQUNELEtBTEg7QUFBQSwyQkFPRTtBQUNFLFNBQUcsRUFBRUksSUFEUDtBQUVFLG1CQUFhLEVBQUdhLEtBQUQsSUFBV1YsUUFBUSxDQUFDLElBQUQsQ0FGcEM7QUFHRSxrQkFBWSxFQUFHVSxLQUFELElBQVdWLFFBQVEsQ0FBQyxLQUFELENBSG5DO0FBQUEsOEJBS0U7QUFBYSxZQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FO0FBQ0UsYUFBSyxFQUFFRCxPQUFPLEdBQUcsU0FBSCxHQUFlTixLQUFLLEtBQUssR0FBVixHQUFnQixVQUFoQixHQUE2QjtBQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9CRCxDQWpDRDs7QUFrQ0EsK0RBQWVELFlBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYW52YXMvQm94LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdG9yZSBmcm9tICdAL2hlbHBlcnMvc3RvcmUnXG5pbXBvcnQgeyBBMTF5IH0gZnJvbSAnQHJlYWN0LXRocmVlL2ExMXknXG5pbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQm94Q29tcG9uZW50ID0gKHsgcm91dGUgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VTdG9yZSgocykgPT4gcy5yb3V0ZXIpXG4gIC8vIFRoaXMgcmVmZXJlbmNlIHdpbGwgZ2l2ZSB1cyBkaXJlY3QgYWNjZXNzIHRvIHRoZSBUSFJFRS5NZXNoIG9iamVjdFxuICBjb25zdCBtZXNoID0gdXNlUmVmKClcbiAgLy8gU2V0IHVwIHN0YXRlIGZvciB0aGUgaG92ZXJlZCBhbmQgYWN0aXZlIHN0YXRlXG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgLy8gU3Vic2NyaWJlIHRoaXMgY29tcG9uZW50IHRvIHRoZSByZW5kZXItbG9vcCwgcm90YXRlIHRoZSBtZXNoIGV2ZXJ5IGZyYW1lXG4gIHVzZUZyYW1lKChzdGF0ZSwgZGVsdGEpID0+XG4gICAgbWVzaC5jdXJyZW50XG4gICAgICA/IChtZXNoLmN1cnJlbnQucm90YXRpb24ueSA9IG1lc2guY3VycmVudC5yb3RhdGlvbi54ICs9IDAuMDEpXG4gICAgICA6IG51bGxcbiAgKVxuICAvLyBSZXR1cm4gdGhlIHZpZXcsIHRoZXNlIGFyZSByZWd1bGFyIFRocmVlanMgZWxlbWVudHMgZXhwcmVzc2VkIGluIEpTWFxuICByZXR1cm4gKFxuICAgIDxBMTF5XG4gICAgICByb2xlPSdsaW5rJ1xuICAgICAgaHJlZj17cm91dGV9XG4gICAgICBhY3Rpb25DYWxsPXsoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKHJvdXRlKVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8bWVzaFxuICAgICAgICByZWY9e21lc2h9XG4gICAgICAgIG9uUG9pbnRlck92ZXI9eyhldmVudCkgPT4gc2V0SG92ZXIodHJ1ZSl9XG4gICAgICAgIG9uUG9pbnRlck91dD17KGV2ZW50KSA9PiBzZXRIb3ZlcihmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIDxib3hHZW9tZXRyeSBhcmdzPXtbMSwgMSwgMV19IC8+XG4gICAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbFxuICAgICAgICAgIGNvbG9yPXtob3ZlcmVkID8gJ2hvdHBpbmsnIDogcm91dGUgPT09ICcvJyA/ICdkYXJrZ3JleScgOiAnb3JhbmdlJ31cbiAgICAgICAgLz5cbiAgICAgIDwvbWVzaD5cbiAgICA8L0ExMXk+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEJveENvbXBvbmVudFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/canvas/Box.jsx\n");

/***/ })

};
;