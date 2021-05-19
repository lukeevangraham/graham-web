webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/Project.js":
/*!****************************************!*\
  !*** ./components/Projects/Project.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Button/Button */ \"./components/UI/Button/Button.js\");\n/* harmony import */ var _Project_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project.module.scss */ \"./components/Projects/Project.module.scss\");\n/* harmony import */ var _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Project_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/Luke/Documents/sites/graham-web/frontend/components/Projects/Project.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Projects = function Projects(_ref) {\n  var projects = _ref.projects;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.projectWrapper,\n      children: projects.map(function (project, index) {\n        var attachedClasses = [_Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.project];\n        index % 2 ? attachedClasses.push(_Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.projectFlipped) : null;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: attachedClasses.join(\" \"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.imageWrapper,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                src: Object(_lib_media__WEBPACK_IMPORTED_MODULE_2__[\"getStrapiMedia\"])(project.image),\n                layout: \"fill\",\n                objectFit: \"contain\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 18,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.projectTextColumn,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n              children: project.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.summary,\n              children: project.summary\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tools,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n                  children: \"Tools: \"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 30,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: project.tools\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _Project_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.links,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                  text: \"Launch site\",\n                  link: project.launchLink,\n                  target: \"_blank\",\n                  color: \"white\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                  text: \"View code\",\n                  link: project.codeLink,\n                  target: \"_blank\",\n                  color: \"white\",\n                  ghost: true\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)]\n        }, project.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0LmpzPzU0YWUiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9qZWN0cyIsImNsYXNzZXMiLCJwcm9qZWN0V3JhcHBlciIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsImF0dGFjaGVkQ2xhc3NlcyIsInB1c2giLCJwcm9qZWN0RmxpcHBlZCIsImpvaW4iLCJpbWFnZVdyYXBwZXIiLCJpbWFnZSIsImdldFN0cmFwaU1lZGlhIiwicHJvamVjdFRleHRDb2x1bW4iLCJ0aXRsZSIsInN1bW1hcnkiLCJ0b29scyIsImxpbmtzIiwibGF1bmNoTGluayIsImNvZGVMaW5rIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsc0JBQ2Y7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVDLDJEQUFPLENBQUNDLGNBQXhCO0FBQUEsZ0JBQ0dGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNoQyxZQUFJQyxlQUFlLEdBQUcsQ0FBQ0wsMkRBQU8sQ0FBQ0csT0FBVCxDQUF0QjtBQUNBQyxhQUFLLEdBQUcsQ0FBUixHQUFZQyxlQUFlLENBQUNDLElBQWhCLENBQXFCTiwyREFBTyxDQUFDTyxjQUE3QixDQUFaLEdBQTJELElBQTNEO0FBRUEsNEJBQ0U7QUFBc0IsbUJBQVMsRUFBRUYsZUFBZSxDQUFDRyxJQUFoQixDQUFxQixHQUFyQixDQUFqQztBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRVIsMkRBQU8sQ0FBQ1MsWUFBeEI7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUVULDJEQUFPLENBQUNVLEtBQXhCO0FBQUEscUNBQ0UscUVBQUMsaURBQUQ7QUFDRSxtQkFBRyxFQUFFQyxpRUFBYyxDQUFDUixPQUFPLENBQUNPLEtBQVQsQ0FEckI7QUFFRSxzQkFBTSxFQUFDLE1BRlQ7QUFHRSx5QkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBVUU7QUFBSyxxQkFBUyxFQUFFViwyREFBTyxDQUFDWSxpQkFBeEI7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVaLDJEQUFPLENBQUNhLEtBQXhCO0FBQUEsd0JBQWdDVixPQUFPLENBQUNVO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUViLDJEQUFPLENBQUNjLE9BQXhCO0FBQUEsd0JBQWtDWCxPQUFPLENBQUNXO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFLLHVCQUFTLEVBQUVkLDJEQUFPLENBQUNlLEtBQXhCO0FBQUEsc0NBQ0U7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFBLDBCQUFNWixPQUFPLENBQUNZO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQVFFO0FBQUsseUJBQVMsRUFBRWYsMkRBQU8sQ0FBQ2dCLEtBQXhCO0FBQUEsd0NBQ0UscUVBQUMseURBQUQ7QUFDRSxzQkFBSSxFQUFFLGFBRFI7QUFFRSxzQkFBSSxFQUFFYixPQUFPLENBQUNjLFVBRmhCO0FBR0Usd0JBQU0sRUFBQyxRQUhUO0FBSUUsdUJBQUssRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFPRSxxRUFBQyx5REFBRDtBQUNFLHNCQUFJLEVBQUUsV0FEUjtBQUVFLHNCQUFJLEVBQUVkLE9BQU8sQ0FBQ2UsUUFGaEI7QUFHRSx3QkFBTSxFQUFDLFFBSFQ7QUFJRSx1QkFBSyxFQUFDLE9BSlI7QUFLRSx1QkFBSztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkY7QUFBQSxXQUFVZixPQUFPLENBQUNnQixFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBeUNELE9BN0NBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBRGU7QUFBQSxDQUFqQjs7S0FBTXJCLFE7QUFzRFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi8uLi9saWIvbWVkaWFcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Byb2plY3QubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoeyBwcm9qZWN0cyB9KSA9PiAoXG4gIDw+XG4gICAgPGgyPlByb2plY3RzPC9oMj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9qZWN0V3JhcHBlcn0+XG4gICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgYXR0YWNoZWRDbGFzc2VzID0gW2NsYXNzZXMucHJvamVjdF07XG4gICAgICAgIGluZGV4ICUgMiA/IGF0dGFjaGVkQ2xhc3Nlcy5wdXNoKGNsYXNzZXMucHJvamVjdEZsaXBwZWQpIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9qZWN0LmlkfSBjbGFzc05hbWU9e2F0dGFjaGVkQ2xhc3Nlcy5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2dldFN0cmFwaU1lZGlhKHByb2plY3QuaW1hZ2UpfVxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJvamVjdFRleHRDb2x1bW59PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9Pntwcm9qZWN0LnN1bW1hcnl9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xzfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ub29sczogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC50b29sc308L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua0xhYmVsfT5cbiAgICAgICAgICAgICAgPHN0cm9uZz5MaW5rczogPC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIkxhdW5jaCBzaXRlXCJ9XG4gICAgICAgICAgICAgICAgICAgIGxpbms9e3Byb2plY3QubGF1bmNoTGlua31cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIlZpZXcgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICBsaW5rPXtwcm9qZWN0LmNvZGVMaW5rfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/Project.js\n");

/***/ })

})