webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/Project/Project.js":
/*!************************************************!*\
  !*** ./components/Projects/Project/Project.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-waypoint */ \"./node_modules/react-waypoint/es/index.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/Button/Button */ \"./components/UI/Button/Button.js\");\n/* harmony import */ var _Project_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Project.module.scss */ \"./components/Projects/Project/Project.module.scss\");\n/* harmony import */ var _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Project_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/Luke/Documents/sites/graham-web/frontend/components/Projects/Project/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Project = function Project(_ref) {\n  _s();\n\n  var project = _ref.project,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      animateProject = _useState[0],\n      setAnimateProject = _useState[1];\n\n  var attachedClasses = [_Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.project];\n  index % 2 ? attachedClasses.push(_Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.projectFlipped) : null;\n  console.log(\"PRO\", project);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: attachedClasses.join(\" \"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: project.launchLink,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: [_Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imageWrapper, animateProject].join(\" \"),\n        target: \"_blank\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_waypoint__WEBPACK_IMPORTED_MODULE_4__[\"Waypoint\"], {\n          onEnter: function onEnter() {\n            return setAnimateProject(\"animate__animated animate__fadeInUp\");\n          },\n          bottomOffset: \"-500px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            src: Object(_lib_media__WEBPACK_IMPORTED_MODULE_5__[\"getStrapiMedia\"])(project.image),\n            layout: \"fill\",\n            objectFit: \"contain\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.projectTextColumn,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.title,\n        children: project.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.summary,\n        children: project.summary\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tools,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"Tools: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: project.tools\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.links,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            text: \"Launch site\",\n            link: project.launchLink,\n            target: \"_blank\",\n            color: \"white\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            text: \"View code\",\n            link: project.codeLink,\n            target: \"_blank\",\n            color: \"white\",\n            ghost: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, project.id, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Project, \"I4M/J4xPQX5OF1sTRgKXEVQVf8g=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0L1Byb2plY3QuanM/ZjM4NyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwicHJvamVjdCIsImluZGV4IiwidXNlU3RhdGUiLCJhbmltYXRlUHJvamVjdCIsInNldEFuaW1hdGVQcm9qZWN0IiwiYXR0YWNoZWRDbGFzc2VzIiwiY2xhc3NlcyIsInB1c2giLCJwcm9qZWN0RmxpcHBlZCIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwibGF1bmNoTGluayIsImltYWdlV3JhcHBlciIsImltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJwcm9qZWN0VGV4dENvbHVtbiIsInRpdGxlIiwic3VtbWFyeSIsInRvb2xzIiwibGlua3MiLCJjb2RlTGluayIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUMvQkMsY0FEK0I7QUFBQSxNQUNmQyxpQkFEZTs7QUFHdEMsTUFBSUMsZUFBZSxHQUFHLENBQUNDLDJEQUFPLENBQUNOLE9BQVQsQ0FBdEI7QUFDQUMsT0FBSyxHQUFHLENBQVIsR0FBWUksZUFBZSxDQUFDRSxJQUFoQixDQUFxQkQsMkRBQU8sQ0FBQ0UsY0FBN0IsQ0FBWixHQUEyRCxJQUEzRDtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CVixPQUFuQjtBQUVBLHNCQUNFO0FBQXNCLGFBQVMsRUFBRUssZUFBZSxDQUFDTSxJQUFoQixDQUFxQixHQUFyQixDQUFqQztBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFWCxPQUFPLENBQUNZLFVBQXBCO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFFLENBQUNOLDJEQUFPLENBQUNPLFlBQVQsRUFBdUJWLGNBQXZCLEVBQXVDUSxJQUF2QyxDQUE0QyxHQUE1QyxDQURiO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFBQSxnQ0FJRSxxRUFBQyx1REFBRDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFDUFAsaUJBQWlCLENBQUMscUNBQUQsQ0FEVjtBQUFBLFdBRFg7QUFJRSxzQkFBWSxFQUFFO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFVRTtBQUFLLG1CQUFTLEVBQUVFLDJEQUFPLENBQUNRLEtBQXhCO0FBQUEsaUNBQ0UscUVBQUMsaURBQUQ7QUFDRSxlQUFHLEVBQUVDLGlFQUFjLENBQUNmLE9BQU8sQ0FBQ2MsS0FBVCxDQURyQjtBQUVFLGtCQUFNLEVBQUMsTUFGVDtBQUdFLHFCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFxQkU7QUFBSyxlQUFTLEVBQUVSLDJEQUFPLENBQUNVLGlCQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRVYsMkRBQU8sQ0FBQ1csS0FBeEI7QUFBQSxrQkFBZ0NqQixPQUFPLENBQUNpQjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVYLDJEQUFPLENBQUNZLE9BQXhCO0FBQUEsa0JBQWtDbEIsT0FBTyxDQUFDa0I7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFFWiwyREFBTyxDQUFDYSxLQUF4QjtBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQSxvQkFBTW5CLE9BQU8sQ0FBQ21CO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVFFO0FBQUssbUJBQVMsRUFBRWIsMkRBQU8sQ0FBQ2MsS0FBeEI7QUFBQSxrQ0FDRSxxRUFBQyx5REFBRDtBQUNFLGdCQUFJLEVBQUUsYUFEUjtBQUVFLGdCQUFJLEVBQUVwQixPQUFPLENBQUNZLFVBRmhCO0FBR0Usa0JBQU0sRUFBQyxRQUhUO0FBSUUsaUJBQUssRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRSxxRUFBQyx5REFBRDtBQUNFLGdCQUFJLEVBQUUsV0FEUjtBQUVFLGdCQUFJLEVBQUVaLE9BQU8sQ0FBQ3FCLFFBRmhCO0FBR0Usa0JBQU0sRUFBQyxRQUhUO0FBSUUsaUJBQUssRUFBQyxPQUpSO0FBS0UsaUJBQUs7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFBQSxLQUFVckIsT0FBTyxDQUFDc0IsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0RELENBNUREOztHQUFNdkIsTzs7S0FBQUEsTztBQThEU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QvUHJvamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFdheXBvaW50IH0gZnJvbSBcInJlYWN0LXdheXBvaW50XCI7XG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi8uLi8uLi9saWIvbWVkaWFcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL1VJL0J1dHRvbi9CdXR0b25cIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUHJvamVjdC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBQcm9qZWN0ID0gKHsgcHJvamVjdCwgaW5kZXggfSkgPT4ge1xuICBjb25zdCBbYW5pbWF0ZVByb2plY3QsIHNldEFuaW1hdGVQcm9qZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGxldCBhdHRhY2hlZENsYXNzZXMgPSBbY2xhc3Nlcy5wcm9qZWN0XTtcbiAgaW5kZXggJSAyID8gYXR0YWNoZWRDbGFzc2VzLnB1c2goY2xhc3Nlcy5wcm9qZWN0RmxpcHBlZCkgOiBudWxsO1xuXG4gIGNvbnNvbGUubG9nKFwiUFJPXCIsIHByb2plY3QpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e3Byb2plY3QuaWR9IGNsYXNzTmFtZT17YXR0YWNoZWRDbGFzc2VzLmpvaW4oXCIgXCIpfT5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2plY3QubGF1bmNoTGlua30+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtbY2xhc3Nlcy5pbWFnZVdyYXBwZXIsIGFuaW1hdGVQcm9qZWN0XS5qb2luKFwiIFwiKX1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPFdheXBvaW50XG4gICAgICAgICAgICBvbkVudGVyPXsoKSA9PlxuICAgICAgICAgICAgICBzZXRBbmltYXRlUHJvamVjdChcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblVwXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib3R0b21PZmZzZXQ9e1wiLTUwMHB4XCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtnZXRTdHJhcGlNZWRpYShwcm9qZWN0LmltYWdlKX1cbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJvamVjdFRleHRDb2x1bW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9Pntwcm9qZWN0LnN1bW1hcnl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xzfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN0cm9uZz5Ub29sczogPC9zdHJvbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvamVjdC50b29sc308L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua0xhYmVsfT5cbiAgICAgICAgICAgICAgPHN0cm9uZz5MaW5rczogPC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0ZXh0PXtcIkxhdW5jaCBzaXRlXCJ9XG4gICAgICAgICAgICAgIGxpbms9e3Byb2plY3QubGF1bmNoTGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0ZXh0PXtcIlZpZXcgY29kZVwifVxuICAgICAgICAgICAgICBsaW5rPXtwcm9qZWN0LmNvZGVMaW5rfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects/Project/Project.js\n");

/***/ })

})