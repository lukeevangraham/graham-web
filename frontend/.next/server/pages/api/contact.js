module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nfunction handler(req, res) {\n  res.status(200).json({\n    status: 200\n  });\n\n  async function main() {\n    let transporter = nodemailer.createTransport({\n      host: \"mail.gandi.net\",\n      port: \"465\",\n      secure: \"true\",\n      auth: {\n        user: process.env.EMAIL,\n        pass: process.env.EMAIL_PASS\n      }\n    });\n    let info = await transporter.sendMail({\n      from: '\"Graham Web Works\" <donotreply@grahamwebdesign.com>',\n      to: \"luke.evan.graham@gmail.com\",\n      subject: \"Message from grahamwebworks.com\",\n      text: `${req.body.name} (${req.body.email}, ${req.body.phone}) just sent this message via www.grahamwebworks.com:\n        \n        ${req.body.body}`\n    });\n    transporter.verify(function (error, success) {\n      error ? console.log(error) : console.log(\"Server is ready to take our messages\", success);\n    });\n  }\n\n  main().catch(console.error);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJtYWluIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJpbmZvIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsImJvZHkiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInZlcmlmeSIsImVycm9yIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLE1BQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUExQjs7QUFFZSxTQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDeENBLEtBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVELFVBQU0sRUFBRTtBQUFWLEdBQXJCOztBQUVBLGlCQUFlRSxJQUFmLEdBQXNCO0FBQ3BCLFFBQUlDLFdBQVcsR0FBR1IsVUFBVSxDQUFDUyxlQUFYLENBQTJCO0FBQzNDQyxVQUFJLEVBQUUsZ0JBRHFDO0FBRTNDQyxVQUFJLEVBQUUsS0FGcUM7QUFHM0NDLFlBQU0sRUFBRSxNQUhtQztBQUkzQ0MsVUFBSSxFQUFFO0FBQ0pDLFlBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBRGQ7QUFFSkMsWUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGZDtBQUpxQyxLQUEzQixDQUFsQjtBQVVBLFFBQUlDLElBQUksR0FBRyxNQUFNWixXQUFXLENBQUNhLFFBQVosQ0FBcUI7QUFDcENDLFVBQUksRUFBRSxxREFEOEI7QUFFcENDLFFBQUUsRUFBRSw0QkFGZ0M7QUFHcENDLGFBQU8sRUFBRSxpQ0FIMkI7QUFJcENDLFVBQUksRUFBRyxHQUFFdEIsR0FBRyxDQUFDdUIsSUFBSixDQUFTQyxJQUFLLEtBQUl4QixHQUFHLENBQUN1QixJQUFKLENBQVNFLEtBQU0sS0FBSXpCLEdBQUcsQ0FBQ3VCLElBQUosQ0FBU0csS0FBTTtBQUNuRTtBQUNBLFVBQVUxQixHQUFHLENBQUN1QixJQUFKLENBQVNBLElBQUs7QUFOa0IsS0FBckIsQ0FBakI7QUFTQWxCLGVBQVcsQ0FBQ3NCLE1BQVosQ0FBbUIsVUFBVUMsS0FBVixFQUFpQkMsT0FBakIsRUFBMEI7QUFDM0NELFdBQUssR0FDREUsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVosQ0FEQyxHQUVERSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWixFQUFvREYsT0FBcEQsQ0FGSjtBQUdELEtBSkQ7QUFLRDs7QUFFRHpCLE1BQUksR0FBRzRCLEtBQVAsQ0FBYUYsT0FBTyxDQUFDRixLQUFyQjtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub2RlbWFpbGVyID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IDIwMCB9KTtcblxuICBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICAgIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIGhvc3Q6IFwibWFpbC5nYW5kaS5uZXRcIixcbiAgICAgIHBvcnQ6IFwiNDY1XCIsXG4gICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTCxcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBsZXQgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgIGZyb206ICdcIkdyYWhhbSBXZWIgV29ya3NcIiA8ZG9ub3RyZXBseUBncmFoYW13ZWJkZXNpZ24uY29tPicsXG4gICAgICB0bzogXCJsdWtlLmV2YW4uZ3JhaGFtQGdtYWlsLmNvbVwiLFxuICAgICAgc3ViamVjdDogXCJNZXNzYWdlIGZyb20gZ3JhaGFtd2Vid29ya3MuY29tXCIsXG4gICAgICB0ZXh0OiBgJHtyZXEuYm9keS5uYW1lfSAoJHtyZXEuYm9keS5lbWFpbH0sICR7cmVxLmJvZHkucGhvbmV9KSBqdXN0IHNlbnQgdGhpcyBtZXNzYWdlIHZpYSB3d3cuZ3JhaGFtd2Vid29ya3MuY29tOlxuICAgICAgICBcbiAgICAgICAgJHtyZXEuYm9keS5ib2R5fWAsXG4gICAgfSk7XG5cbiAgICB0cmFuc3BvcnRlci52ZXJpZnkoZnVuY3Rpb24gKGVycm9yLCBzdWNjZXNzKSB7XG4gICAgICBlcnJvclxuICAgICAgICA/IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICA6IGNvbnNvbGUubG9nKFwiU2VydmVyIGlzIHJlYWR5IHRvIHRha2Ugb3VyIG1lc3NhZ2VzXCIsIHN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFpbigpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCI/M2Q1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlbWFpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nodemailer\n");

/***/ })

/******/ });