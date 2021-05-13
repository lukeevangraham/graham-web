webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/Project.js":
/*!****************************************!*\
  !*** ./components/Projects/Project.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var _Project_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.module.scss */ \"./components/Projects/Project.module.scss\");\n/* harmony import */ var _Project_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Project_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/Luke/Documents/sites/graham-web/frontend/components/Projects/Project.js\",\n    _this = undefined;\n\n\n\n\n\nvar Projects = function Projects(_ref) {\n  var projects = _ref.projects;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, _this), projects.map(function (project) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.project,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            src: Object(_lib_media__WEBPACK_IMPORTED_MODULE_2__[\"getStrapiMedia\"])(project.image),\n            layout: \"fill\",\n            objectFit: \"contain\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: project.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 9\n        }, _this), project.title]\n      }, project.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, _this);\n    })]\n  }, void 0, true);\n};\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0LmpzPzU0YWUiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJjbGFzc2VzIiwiaW1hZ2UiLCJnZXRTdHJhcGlNZWRpYSIsInRpdGxlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsc0JBQ2Y7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSwwQkFDWjtBQUFzQixpQkFBUyxFQUFFQywyREFBTyxDQUFDRCxPQUF6QztBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUMsMkRBQU8sQ0FBQ0MsS0FBeEI7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUFPLGVBQUcsRUFBRUMsaUVBQWMsQ0FBQ0gsT0FBTyxDQUFDRSxLQUFULENBQTFCO0FBQTJDLGtCQUFNLEVBQUMsTUFBbEQ7QUFBeUQscUJBQVMsRUFBQztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssbUJBQVMsRUFBRUYsT0FBTyxDQUFDSTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLEVBS0dKLE9BQU8sQ0FBQ0ksS0FMWDtBQUFBLFNBQVVKLE9BQU8sQ0FBQ0ssRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYixDQUZIO0FBQUEsa0JBRGU7QUFBQSxDQUFqQjs7S0FBTVIsUTtBQWVTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vbGliL21lZGlhXCJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Byb2plY3QubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoeyBwcm9qZWN0cyB9KSA9PiAoXG4gIDw+XG4gICAgPGgyPlByb2plY3RzPC9oMj5cbiAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICA8ZGl2IGtleT17cHJvamVjdC5pZH0gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2plY3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPEltYWdlIHNyYz17Z2V0U3RyYXBpTWVkaWEocHJvamVjdC5pbWFnZSl9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9qZWN0LnRpdGxlfT48L2Rpdj5cbiAgICAgICAge3Byb2plY3QudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICApKX1cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/Project.js\n");

/***/ })

})