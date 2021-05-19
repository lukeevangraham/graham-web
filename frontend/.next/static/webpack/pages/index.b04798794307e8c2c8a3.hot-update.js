webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/Project/Project.js":
/*!************************************************!*\
  !*** ./components/Projects/Project/Project.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-waypoint */ \"./node_modules/react-waypoint/es/index.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/Button/Button */ \"./components/UI/Button/Button.js\");\n/* harmony import */ var _Project_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Project.module.scss */ \"./components/Projects/Project/Project.module.scss\");\n/* harmony import */ var _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Project_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/Luke/Documents/sites/graham-web/frontend/components/Projects/Project/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Project = function Project(_ref) {\n  _s();\n\n  var project = _ref.project,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      animateProject = _useState[0],\n      setAnimateProject = _useState[1];\n\n  var attachedClasses = [_Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.project];\n  index % 2 ? attachedClasses.push(_Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.projectFlipped) : null;\n  console.log(\"PRO\", project);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: attachedClasses.join(\" \"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: project.launchLink,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: [_Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imageWrapper, animateProject].join(\" \"),\n        target: \"_blank\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_waypoint__WEBPACK_IMPORTED_MODULE_4__[\"Waypoint\"], {\n          onEnter: function onEnter() {\n            return setAnimateProject(\"animate__animated animate__fadeInUp\");\n          },\n          topOffset: \"500px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            src: Object(_lib_media__WEBPACK_IMPORTED_MODULE_5__[\"getStrapiMedia\"])(project.image),\n            layout: \"fill\",\n            objectFit: \"contain\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.projectTextColumn,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.title,\n        children: project.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.summary,\n        children: project.summary\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tools,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"Tools: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: project.tools\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.links,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            text: \"Launch site\",\n            link: project.launchLink,\n            target: \"_blank\",\n            color: \"white\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            text: \"View code\",\n            link: project.codeLink,\n            target: \"_blank\",\n            color: \"white\",\n            ghost: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, project.id, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Project, \"I4M/J4xPQX5OF1sTRgKXEVQVf8g=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0L1Byb2plY3QuanM/ZjM4NyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwicHJvamVjdCIsImluZGV4IiwidXNlU3RhdGUiLCJhbmltYXRlUHJvamVjdCIsInNldEFuaW1hdGVQcm9qZWN0IiwiYXR0YWNoZWRDbGFzc2VzIiwiY2xhc3NlcyIsInB1c2giLCJwcm9qZWN0RmxpcHBlZCIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwibGF1bmNoTGluayIsImltYWdlV3JhcHBlciIsImltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJwcm9qZWN0VGV4dENvbHVtbiIsInRpdGxlIiwic3VtbWFyeSIsInRvb2xzIiwibGlua3MiLCJjb2RlTGluayIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUMvQkMsY0FEK0I7QUFBQSxNQUNmQyxpQkFEZTs7QUFHdEMsTUFBSUMsZUFBZSxHQUFHLENBQUNDLDJEQUFPLENBQUNOLE9BQVQsQ0FBdEI7QUFDQUMsT0FBSyxHQUFHLENBQVIsR0FBWUksZUFBZSxDQUFDRSxJQUFoQixDQUFxQkQsMkRBQU8sQ0FBQ0UsY0FBN0IsQ0FBWixHQUEyRCxJQUEzRDtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CVixPQUFuQjtBQUVBLHNCQUNFO0FBQXNCLGFBQVMsRUFBRUssZUFBZSxDQUFDTSxJQUFoQixDQUFxQixHQUFyQixDQUFqQztBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFWCxPQUFPLENBQUNZLFVBQXBCO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFFLENBQUNOLDJEQUFPLENBQUNPLFlBQVQsRUFBdUJWLGNBQXZCLEVBQXVDUSxJQUF2QyxDQUE0QyxHQUE1QyxDQURiO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFBQSxnQ0FJRSxxRUFBQyx1REFBRDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFDUFAsaUJBQWlCLENBQUMscUNBQUQsQ0FEVjtBQUFBLFdBRFg7QUFJRSxtQkFBUyxFQUFFO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVVFO0FBQUssbUJBQVMsRUFBRUUsMkRBQU8sQ0FBQ1EsS0FBeEI7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsRUFBRUMsaUVBQWMsQ0FBQ2YsT0FBTyxDQUFDYyxLQUFULENBRHJCO0FBRUUsa0JBQU0sRUFBQyxNQUZUO0FBR0UscUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXFCRTtBQUFLLGVBQVMsRUFBRVIsMkRBQU8sQ0FBQ1UsaUJBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFViwyREFBTyxDQUFDVyxLQUF4QjtBQUFBLGtCQUFnQ2pCLE9BQU8sQ0FBQ2lCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBRVgsMkRBQU8sQ0FBQ1ksT0FBeEI7QUFBQSxrQkFBa0NsQixPQUFPLENBQUNrQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUVaLDJEQUFPLENBQUNhLEtBQXhCO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFBLG9CQUFNbkIsT0FBTyxDQUFDbUI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBUUU7QUFBSyxtQkFBUyxFQUFFYiwyREFBTyxDQUFDYyxLQUF4QjtBQUFBLGtDQUNFLHFFQUFDLHlEQUFEO0FBQ0UsZ0JBQUksRUFBRSxhQURSO0FBRUUsZ0JBQUksRUFBRXBCLE9BQU8sQ0FBQ1ksVUFGaEI7QUFHRSxrQkFBTSxFQUFDLFFBSFQ7QUFJRSxpQkFBSyxFQUFDO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FLHFFQUFDLHlEQUFEO0FBQ0UsZ0JBQUksRUFBRSxXQURSO0FBRUUsZ0JBQUksRUFBRVosT0FBTyxDQUFDcUIsUUFGaEI7QUFHRSxrQkFBTSxFQUFDLFFBSFQ7QUFJRSxpQkFBSyxFQUFDLE9BSlI7QUFLRSxpQkFBSztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRjtBQUFBLEtBQVVyQixPQUFPLENBQUNzQixFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvREQsQ0E1REQ7O0dBQU12QixPOztLQUFBQSxPO0FBOERTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdC9Qcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgV2F5cG9pbnQgfSBmcm9tIFwicmVhY3Qtd2F5cG9pbnRcIjtcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9tZWRpYVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vVUkvQnV0dG9uL0J1dHRvblwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qcm9qZWN0Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFByb2plY3QgPSAoeyBwcm9qZWN0LCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IFthbmltYXRlUHJvamVjdCwgc2V0QW5pbWF0ZVByb2plY3RdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgbGV0IGF0dGFjaGVkQ2xhc3NlcyA9IFtjbGFzc2VzLnByb2plY3RdO1xuICBpbmRleCAlIDIgPyBhdHRhY2hlZENsYXNzZXMucHVzaChjbGFzc2VzLnByb2plY3RGbGlwcGVkKSA6IG51bGw7XG5cbiAgY29uc29sZS5sb2coXCJQUk9cIiwgcHJvamVjdCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17cHJvamVjdC5pZH0gY2xhc3NOYW1lPXthdHRhY2hlZENsYXNzZXMuam9pbihcIiBcIil9PlxuICAgICAgPExpbmsgaHJlZj17cHJvamVjdC5sYXVuY2hMaW5rfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9e1tjbGFzc2VzLmltYWdlV3JhcHBlciwgYW5pbWF0ZVByb2plY3RdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8V2F5cG9pbnRcbiAgICAgICAgICAgIG9uRW50ZXI9eygpID0+XG4gICAgICAgICAgICAgIHNldEFuaW1hdGVQcm9qZWN0KFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluVXBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvcE9mZnNldD17XCI1MDBweFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17Z2V0U3RyYXBpTWVkaWEocHJvamVjdC5pbWFnZSl9XG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2plY3RUZXh0Q29sdW1ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pntwcm9qZWN0LnRpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT57cHJvamVjdC5zdW1tYXJ5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sc30+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdHJvbmc+VG9vbHM6IDwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3Byb2plY3QudG9vbHN9PC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtMYWJlbH0+XG4gICAgICAgICAgICAgIDxzdHJvbmc+TGlua3M6IDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdGV4dD17XCJMYXVuY2ggc2l0ZVwifVxuICAgICAgICAgICAgICBsaW5rPXtwcm9qZWN0LmxhdW5jaExpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdGV4dD17XCJWaWV3IGNvZGVcIn1cbiAgICAgICAgICAgICAgbGluaz17cHJvamVjdC5jb2RlTGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/Project/Project.js\n");

/***/ })

})