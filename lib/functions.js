(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("functions", [], factory);
	else if(typeof exports === 'object')
		exports["functions"] = factory();
	else
		root["functions"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ticker", [], factory);
	else if(typeof exports === 'object')
		exports["ticker"] = factory();
	else
		root["ticker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TickEntry = __webpack_require__(1);

var _TickEntry2 = _interopRequireDefault(_TickEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TickEntry2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Manager = __webpack_require__(2);

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TickEntry =
/**
 * @param {object} context - The "this" argument for the listener function.
 * @param {function} listener.
 */
function TickEntry(context, listener) {
	_classCallCheck(this, TickEntry);

	this.context = context;
	this.listener = listener;
};

/*---- Public|Prototype Methods ---*/

exports.default = TickEntry;
TickEntry.prototype.dispose = function () {
	this.context = null;
	this.listener = null;
};

TickEntry.prototype.execute = function () {
	_Manager2.default.add(this, false);
};

TickEntry.prototype.executeLast = function () {
	_Manager2.default.add(this, true);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestAnimationFrameId = NaN;
var tickEntries = null;
var callLastEntries = null;

function onTick() {
	if (tickEntries && tickEntries.length > 0) {
		tickEntries.map(function (tickEntry) {
			tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);
		});

		//Clear them once executed
		tickEntries = null;
	}

	if (callLastEntries && callLastEntries.length > 0) {
		callLastEntries.map(function (tickEntry) {
			tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);
		});

		//Clear them once executed
		callLastEntries = null;
	}
}

function requestAnimationFrameCallback() {
	onTick();
	requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
}

var TickManager = function TickManager() {
	_classCallCheck(this, TickManager);

	requestAnimationFrameId = 0; // for Windows Env
	this.start();
};

TickManager.prototype.add = function (tickEntry, callLast) {
	if (callLast) {
		if (!callLastEntries) {
			callLastEntries = [];
		}
		callLastEntries.push(tickEntry); // todo: Stack or Queue
	} else {
		if (!tickEntries) {
			tickEntries = [];
		}
		tickEntries.push(tickEntry); // todo: Stack or Queue
	}
};

// Todo: Support for NodeJS 
TickManager.prototype.start = function () {
	if (window) {
		// will receives timestamp as argument
		//todo: Learn:  the purpose of timestamp
		requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
	}
};

TickManager.prototype.stop = function () {
	if (window) {
		window.cancelAnimationFrame(requestAnimationFrameId);
	}
};

var singletonInstance = new TickManager();

exports.default = singletonInstance;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZjVlY2IyM2ZiNjhiOGYxZTc4ZCIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJwcm90b3R5cGUiLCJkaXNwb3NlIiwiZXhlY3V0ZSIsImFkZCIsImV4ZWN1dGVMYXN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJOYU4iLCJ0aWNrRW50cmllcyIsImNhbGxMYXN0RW50cmllcyIsIm9uVGljayIsImxlbmd0aCIsIm1hcCIsInRpY2tFbnRyeSIsImNhbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlRpY2tNYW5hZ2VyIiwic3RhcnQiLCJjYWxsTGFzdCIsInB1c2giLCJzdG9wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzaW5nbGV0b25JbnN0YW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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QUNELENBSkQ7O0FBTUEsSUFBTWtCLG9CQUFvQixJQUFJTixXQUFKLEVBQTFCOztrQkFFZU0saUIiLCJmaWxlIjoibGliL3RpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlja2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGY1ZWNiMjNmYjY4YjhmMWU3OGQiLCJpbXBvcnQgVGlja2VyIGZyb20gJy4vVGlja0VudHJ5JztcblxuZXhwb3J0IGRlZmF1bHQgVGlja2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9NYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja0VudHJ5XG57XG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIGxpc3RlbmVyKVxuXHR7XG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0XHR0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cdH1cblxufVxuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24oKXtcblx0bWFuYWdlci5hZGQodGhpcyxmYWxzZSk7XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGVMYXN0ID0gZnVuY3Rpb24oKXtcbiAgICBtYW5hZ2VyLmFkZCh0aGlzLHRydWUpO1xufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvVGlja0VudHJ5LmpzIiwiXG5sZXQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSBOYU47XG5sZXQgdGlja0VudHJpZXMgPSBudWxsO1xubGV0IGNhbGxMYXN0RW50cmllcyA9IG51bGw7XG5cblxuZnVuY3Rpb24gb25UaWNrKCl7XG5cdGlmKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGlja0VudHJpZXMubWFwKCAodGlja0VudHJ5ICk9PiB7XG5cdFx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0fSk7XG5cblx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuICAgICAgICB0aWNrRW50cmllcyA9IG51bGw7XG5cdH1cblxuICAgIGlmKGNhbGxMYXN0RW50cmllcyAmJiBjYWxsTGFzdEVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjYWxsTGFzdEVudHJpZXMubWFwKCAodGlja0VudHJ5ICk9PiB7XG4gICAgICAgICAgICB0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG4gICAgICAgIGNhbGxMYXN0RW50cmllcyA9IG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpe1xuXHRvblRpY2soKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcbn1cblxuY2xhc3MgVGlja01hbmFnZXIge1xuXHRjb25zdHJ1Y3Rvcigpe1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cdH1cbn1cblxuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSwgY2FsbExhc3QpIHtcblx0aWYgKGNhbGxMYXN0KSB7XG4gICAgICAgIGlmKCFjYWxsTGFzdEVudHJpZXMpe1xuICAgICAgICAgICAgY2FsbExhc3RFbnRyaWVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY2FsbExhc3RFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcblx0fSBlbHNlIHtcbiAgICAgICAgaWYoIXRpY2tFbnRyaWVzKXtcbiAgICAgICAgICAgIHRpY2tFbnRyaWVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpOyAvLyB0b2RvOiBTdGFjayBvciBRdWV1ZVxuXHR9XG5cbn07XG5cblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuY29uc3Qgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uSW5zdGFuY2U7XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9NYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = __webpack_require__(2);

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _functions2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _entry = __webpack_require__(3);

var _entry2 = _interopRequireDefault(_entry);

var _ticker = __webpack_require__(0);

var _ticker2 = _interopRequireDefault(_ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Functions = function Functions() {
    _classCallCheck(this, Functions);

    this.entries = [];
    this.frameEntries = [];
};

exports.default = Functions;


Functions.prototype.add = function (context, func, executeLaterInNextAnimationFrame, callLast) {
    var entry = void 0;
    if (executeLaterInNextAnimationFrame) {
        var ticker = new _ticker2.default(context, func);
        if (callLast) {
            entry = new _entry2.default(ticker, ticker.executeLast);
        } else {
            entry = new _entry2.default(ticker, ticker.execute);
        }
        this.frameEntries.push(entry);
    } else {
        entry = new _entry2.default(context, func);
        this.entries.push(entry);
    }
    return entry.dispose;
};

Functions.prototype.trigger = function () {
    var entriesIndexToDispose = [];

    this.entries.forEach(function (entry, index) {
        if (entry.func) {
            entry.func.apply(entry.context || entry.func['this']);
        } else {
            entriesIndexToDispose.push(index);
        }
    });

    entriesIndexToDispose.forEach(function (entryIndex) {
        this.entries.splice(entryIndex, 1);
    });

    this.frameEntries.forEach(function (entry, index) {
        if (entry.func) {
            entry.func.apply(entry.context || entry.func['this']);
        } else {
            entriesIndexToDispose.push(index);
        }
    });
    entriesIndexToDispose.forEach(function (entryIndex) {
        this.frameEntries.splice(entryIndex, 1);
    });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ticker = __webpack_require__(0);

var _ticker2 = _interopRequireDefault(_ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entry = function Entry(context, func) {
    _classCallCheck(this, Entry);

    this.context = context;
    this.func = func;
};

exports.default = Entry;


Entry.prototype.dispose = function () {
    if (this.context instanceof _ticker2.default) {
        this.context.dispose();
    }
    this.context = null;
    this.func = null;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwZTE4N2Q1YzM0MTZkMTMyOGEzNCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJlbnRyaWVzIiwiZnJhbWVFbnRyaWVzIiwicHJvdG90eXBlIiwiYWRkIiwiY29udGV4dCIsImZ1bmMiLCJleGVjdXRlTGF0ZXJJbk5leHRBbmltYXRpb25GcmFtZSIsImNhbGxMYXN0IiwiZW50cnkiLCJ0aWNrZXIiLCJleGVjdXRlTGFzdCIsImV4ZWN1dGUiLCJwdXNoIiwiZGlzcG9zZSIsInRyaWdnZXIiLCJlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJhcHBseSIsImVudHJ5SW5kZXgiLCJzcGxpY2UiLCJFbnRyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7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QUZEO0FBSUgsQ0ExQkQsQzs7Ozs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7SUFFcUJFLEssR0FDakIsZUFBWWpCLE9BQVosRUFBcUJDLElBQXJCLEVBQTBCO0FBQUE7O0FBQ3RCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNILEM7O2tCQUpnQmdCLEs7OztBQU9yQkEsTUFBTW5CLFNBQU4sQ0FBZ0JXLE9BQWhCLEdBQTBCLFlBQVc7QUFDakMsUUFBRyxLQUFLVCxPQUFMLDRCQUFILEVBQWtDO0FBQzlCLGFBQUtBLE9BQUwsQ0FBYVMsT0FBYjtBQUNIO0FBQ0QsU0FBS1QsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNILENBTkQsQyIsImZpbGUiOiJsaWIvZnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW5jdGlvbnNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZTE4N2Q1YzM0MTZkMTMyOGEzNCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlja2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGlja0VudHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9UaWNrRW50cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGlja0VudHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RpY2tFbnRyeTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbn07XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gVGlja0VudHJ5O1xuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcblx0X01hbmFnZXIyLmRlZmF1bHQuYWRkKHRoaXMsIGZhbHNlKTtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZUxhc3QgPSBmdW5jdGlvbiAoKSB7XG5cdF9NYW5hZ2VyMi5kZWZhdWx0LmFkZCh0aGlzLCB0cnVlKTtcbn07XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSBOYU47XG52YXIgdGlja0VudHJpZXMgPSBudWxsO1xudmFyIGNhbGxMYXN0RW50cmllcyA9IG51bGw7XG5cbmZ1bmN0aW9uIG9uVGljaygpIHtcblx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHR0aWNrRW50cmllcy5tYXAoZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHRcdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdH0pO1xuXG5cdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHR0aWNrRW50cmllcyA9IG51bGw7XG5cdH1cblxuXHRpZiAoY2FsbExhc3RFbnRyaWVzICYmIGNhbGxMYXN0RW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0Y2FsbExhc3RFbnRyaWVzLm1hcChmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdFx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0fSk7XG5cblx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdGNhbGxMYXN0RW50cmllcyA9IG51bGw7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG52YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXHR0aGlzLnN0YXJ0KCk7XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSwgY2FsbExhc3QpIHtcblx0aWYgKGNhbGxMYXN0KSB7XG5cdFx0aWYgKCFjYWxsTGFzdEVudHJpZXMpIHtcblx0XHRcdGNhbGxMYXN0RW50cmllcyA9IFtdO1xuXHRcdH1cblx0XHRjYWxsTGFzdEVudHJpZXMucHVzaCh0aWNrRW50cnkpOyAvLyB0b2RvOiBTdGFjayBvciBRdWV1ZVxuXHR9IGVsc2Uge1xuXHRcdGlmICghdGlja0VudHJpZXMpIHtcblx0XHRcdHRpY2tFbnRyaWVzID0gW107XG5cdFx0fVxuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcblx0fVxufTtcblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0Ly8gd2lsbCByZWNlaXZlcyB0aW1lc3RhbXAgYXMgYXJndW1lbnRcblx0XHQvL3RvZG86IExlYXJuOiAgdGhlIHB1cnBvc2Ugb2YgdGltZXN0YW1wXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG52YXIgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2luZ2xldG9uSW5zdGFuY2U7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTBaalZsWTJJeU0yWmlOamhpT0dZeFpUYzRaQ0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDFScFkydEZiblJ5ZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVWFXTnJSVzUwY25raUxDSmpiMjUwWlhoMElpd2liR2x6ZEdWdVpYSWlMQ0p3Y205MGIzUjVjR1VpTENKa2FYTndiM05sSWl3aVpYaGxZM1YwWlNJc0ltRmtaQ0lzSW1WNFpXTjFkR1ZNWVhOMElpd2ljbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRaUxDSk9ZVTRpTENKMGFXTnJSVzUwY21sbGN5SXNJbU5oYkd4TVlYTjBSVzUwY21sbGN5SXNJbTl1VkdsamF5SXNJbXhsYm1kMGFDSXNJbTFoY0NJc0luUnBZMnRGYm5SeWVTSXNJbU5oYkd3aUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheUlzSW5kcGJtUnZkeUlzSW5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTSXNJbFJwWTJ0TllXNWhaMlZ5SWl3aWMzUmhjblFpTENKallXeHNUR0Z6ZENJc0luQjFjMmdpTENKemRHOXdJaXdpWTJGdVkyVnNRVzVwYldGMGFXOXVSbkpoYldVaUxDSnphVzVuYkdWMGIyNUpibk4wWVc1alpTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenM3UVVNM1JFRTdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CUVRzN096czdPenM3U1VGRmNVSkJMRk03UVVGRmNFSTdPenM3UVVGSlFTeHRRa0ZCV1VNc1QwRkJXaXhGUVVGeFFrTXNVVUZCY2tJc1JVRkRRVHRCUVVGQk96dEJRVU5ETEUxQlFVdEVMRTlCUVV3c1IwRkJaVUVzVDBGQlpqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBFc1F6czdRVUZKUmpzN2EwSkJaSEZDUml4VE8wRkJaMEp5UWtFc1ZVRkJWVWNzVTBGQlZpeERRVUZ2UWtNc1QwRkJjRUlzUjBGQk9FSXNXVUZCVlR0QlFVTjJReXhOUVVGTFNDeFBRVUZNTEVkQlFXVXNTVUZCWmp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hEUVVoRU96dEJRVXRCUml4VlFVRlZSeXhUUVVGV0xFTkJRVzlDUlN4UFFVRndRaXhIUVVFNFFpeFpRVUZWTzBGQlEzWkRMRzFDUVVGUlF5eEhRVUZTTEVOQlFWa3NTVUZCV2l4RlFVRnBRaXhMUVVGcVFqdEJRVU5CTEVOQlJrUTdPMEZCU1VGT0xGVkJRVlZITEZOQlFWWXNRMEZCYjBKSkxGZEJRWEJDTEVkQlFXdERMRmxCUVZVN1FVRkRlRU1zYlVKQlFWRkVMRWRCUVZJc1EwRkJXU3hKUVVGYUxFVkJRV2xDTEVsQlFXcENPMEZCUTBnc1EwRkdSQ3hET3pzN096czdPenM3T3pzN096czdRVU14UWtFc1NVRkJTVVVzTUVKQlFUQkNReXhIUVVFNVFqdEJRVU5CTEVsQlFVbERMR05CUVdNc1NVRkJiRUk3UVVGRFFTeEpRVUZKUXl4clFrRkJhMElzU1VGQmRFSTdPMEZCUjBFc1UwRkJVME1zVFVGQlZDeEhRVUZwUWp0QlFVTm9RaXhMUVVGSFJpeGxRVUZsUVN4WlFVRlpSeXhOUVVGYUxFZEJRWEZDTEVOQlFYWkRMRVZCUVRCRE8wRkJRMjVEU0N4alFVRlpTU3hIUVVGYUxFTkJRV2xDTEZWQlFVTkRMRk5CUVVRc1JVRkJaVHRCUVVOeVEwRXNZVUZCVldJc1VVRkJWaXhEUVVGdFFtTXNTVUZCYmtJc1EwRkJkMEpFTEZWQlFWVmtMRTlCUVZZc1NVRkJjVUpqTEZWQlFWVmlMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCTjBNN1FVRkRRU3hIUVVaTE96dEJRVWxPTzBGQlEwMVJMR2RDUVVGakxFbEJRV1E3UVVGRFRqczdRVUZGUlN4TFFVRkhReXh0UWtGQmJVSkJMR2RDUVVGblFrVXNUVUZCYUVJc1IwRkJlVUlzUTBGQkwwTXNSVUZCYTBRN1FVRkRPVU5HTEd0Q1FVRm5Ra2NzUjBGQmFFSXNRMEZCY1VJc1ZVRkJRME1zVTBGQlJDeEZRVUZsTzBGQlEyaERRU3hoUVVGVllpeFJRVUZXTEVOQlFXMUNZeXhKUVVGdVFpeERRVUYzUWtRc1ZVRkJWV1FzVDBGQlZpeEpRVUZ4UW1Nc1ZVRkJWV0lzVVVGQlZpeERRVUZ0UWl4TlFVRnVRaXhEUVVFM1F6dEJRVU5JTEVkQlJrUTdPMEZCU1VFN1FVRkRRVk1zYjBKQlFXdENMRWxCUVd4Q08wRkJRMGc3UVVGRFNqczdRVUZGUkN4VFFVRlRUU3cyUWtGQlZDeEhRVUYzUXp0QlFVTjJRMHc3UVVGRFFVb3NNa0pCUVRCQ1ZTeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrWXNOa0pCUVRkQ0xFTkJRVEZDTzBGQlEwRTdPMGxCUlV0SExGY3NSMEZEVEN4MVFrRkJZVHRCUVVGQk96dEJRVU5PV2l3eVFrRkJNRUlzUTBGQk1VSXNRMEZFVFN4RFFVTjFRanRCUVVNM1FpeE5RVUZMWVN4TFFVRk1PMEZCUTA0c1F6czdRVUZKUmtRc1dVRkJXV3BDTEZOQlFWb3NRMEZCYzBKSExFZEJRWFJDTEVkQlFUUkNMRlZCUVZWVExGTkJRVllzUlVGQmNVSlBMRkZCUVhKQ0xFVkJRU3RDTzBGQlF6RkVMRXRCUVVsQkxGRkJRVW9zUlVGQll6dEJRVU5RTEUxQlFVY3NRMEZCUTFnc1pVRkJTaXhGUVVGdlFqdEJRVU5vUWtFc2NVSkJRV3RDTEVWQlFXeENPMEZCUTBnN1FVRkRSRUVzYTBKQlFXZENXU3hKUVVGb1FpeERRVUZ4UWxJc1UwRkJja0lzUlVGS1R5eERRVWt3UWp0QlFVTjJReXhGUVV4RUxFMUJTMDg3UVVGRFFTeE5RVUZITEVOQlFVTk1MRmRCUVVvc1JVRkJaMEk3UVVGRFdrRXNhVUpCUVdNc1JVRkJaRHRCUVVOSU8wRkJRMFJCTEdOQlFWbGhMRWxCUVZvc1EwRkJhVUpTTEZOQlFXcENMRVZCU2tFc1EwRkpOa0k3UVVGRGJrTTdRVUZGUkN4RFFXSkVPenRCUVdkQ1FUdEJRVU5CU3l4WlFVRlpha0lzVTBGQldpeERRVUZ6UW10Q0xFdEJRWFJDTEVkQlFUaENMRmxCUVZrN1FVRkRla01zUzBGQlIwZ3NUVUZCU0N4RlFVRlZPMEZCUTFRN1FVRkRRVHRCUVVOQlZpdzBRa0ZCTUVKVkxFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ1JpdzJRa0ZCTjBJc1EwRkJNVUk3UVVGRFFUdEJRVU5FTEVOQlRrUTdPMEZCVTBGSExGbEJRVmxxUWl4VFFVRmFMRU5CUVhOQ2NVSXNTVUZCZEVJc1IwRkJOa0lzV1VGQldUdEJRVU40UXl4TFFVRkhUaXhOUVVGSUxFVkJRVlU3UVVGRFZFRXNVMEZCVDA4c2IwSkJRVkFzUTBGQk5FSnFRaXgxUWtGQk5VSTdRVUZEUVR0QlFVTkVMRU5CU2tRN08wRkJUVUVzU1VGQlRXdENMRzlDUVVGdlFpeEpRVUZKVGl4WFFVRktMRVZCUVRGQ096dHJRa0ZGWlUwc2FVSWlMQ0ptYVd4bElqb2liR2xpTDNScFkydGxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGd2lkR2xqYTJWeVhDSXNJRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0luUnBZMnRsY2x3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKMGFXTnJaWEpjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzU5S1NoMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlCY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN1hHNGdYSFJjZEZ4MFhIUmpiMjVtYVdkMWNtRmliR1U2SUdaaGJITmxMRnh1SUZ4MFhIUmNkRngwWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3hjYmlCY2RGeDBYSFJjZEdkbGREb2daMlYwZEdWeVhHNGdYSFJjZEZ4MGZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnTkdZMVpXTmlNak5tWWpZNFlqaG1NV1UzT0dRaUxDSnBiWEJ2Y25RZ1ZHbGphMlZ5SUdaeWIyMGdKeTR2VkdsamEwVnVkSEo1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1ZHbGphMlZ5TzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwybHVaR1Y0TG1weklpd2lhVzF3YjNKMElHMWhibUZuWlhJZ1puSnZiU0FuTGk5TllXNWhaMlZ5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVkdsamEwVnVkSEo1WEc1N1hHNWNkQzhxS2x4dVhIUWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdZMjl1ZEdWNGRDQXRJRlJvWlNCY0luUm9hWE5jSWlCaGNtZDFiV1Z1ZENCbWIzSWdkR2hsSUd4cGMzUmxibVZ5SUdaMWJtTjBhVzl1TGx4dVhIUWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVmU0JzYVhOMFpXNWxjaTVjYmx4MElDb3ZYRzVjZEdOdmJuTjBjblZqZEc5eUtHTnZiblJsZUhRc0lHeHBjM1JsYm1WeUtWeHVYSFI3WEc1Y2RGeDBkR2hwY3k1amIyNTBaWGgwSUQwZ1kyOXVkR1Y0ZER0Y2JseDBYSFIwYUdsekxteHBjM1JsYm1WeUlEMGdiR2x6ZEdWdVpYSTdYRzVjZEgxY2JseHVmVnh1WEc0dktpMHRMUzBnVUhWaWJHbGpmRkJ5YjNSdmRIbHdaU0JOWlhSb2IyUnpJQzB0TFNvdlhHNWNibFJwWTJ0RmJuUnllUzV3Y205MGIzUjVjR1V1WkdsemNHOXpaU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkSFJvYVhNdVkyOXVkR1Y0ZENBOUlHNTFiR3c3WEc1Y2RIUm9hWE11YkdsemRHVnVaWElnUFNCdWRXeHNPMXh1ZlR0Y2JseHVWR2xqYTBWdWRISjVMbkJ5YjNSdmRIbHdaUzVsZUdWamRYUmxJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBiV0Z1WVdkbGNpNWhaR1FvZEdocGN5eG1ZV3h6WlNrN1hHNTlPMXh1WEc1VWFXTnJSVzUwY25rdWNISnZkRzkwZVhCbExtVjRaV04xZEdWTVlYTjBJRDBnWm5WdVkzUnBiMjRvS1h0Y2JpQWdJQ0J0WVc1aFoyVnlMbUZrWkNoMGFHbHpMSFJ5ZFdVcE8xeHVmVHRjYmx4dVhHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZWR2xqYTBWdWRISjVMbXB6SWl3aVhHNXNaWFFnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUWdQU0JPWVU0N1hHNXNaWFFnZEdsamEwVnVkSEpwWlhNZ1BTQnVkV3hzTzF4dWJHVjBJR05oYkd4TVlYTjBSVzUwY21sbGN5QTlJRzUxYkd3N1hHNWNibHh1Wm5WdVkzUnBiMjRnYjI1VWFXTnJLQ2w3WEc1Y2RHbG1LSFJwWTJ0RmJuUnlhV1Z6SUNZbUlIUnBZMnRGYm5SeWFXVnpMbXhsYm1kMGFDQStJREFwSUh0Y2JpQWdJQ0FnSUNBZ2RHbGphMFZ1ZEhKcFpYTXViV0Z3S0NBb2RHbGphMFZ1ZEhKNUlDazlQaUI3WEc1Y2RGeDBYSFIwYVdOclJXNTBjbmt1YkdsemRHVnVaWEl1WTJGc2JDaDBhV05yUlc1MGNua3VZMjl1ZEdWNGRDQjhmQ0IwYVdOclJXNTBjbmt1YkdsemRHVnVaWEpiSjNSb2FYTW5YU2s3WEc1Y2RGeDBmU2s3WEc1Y2JseDBYSFF2TDBOc1pXRnlJSFJvWlcwZ2IyNWpaU0JsZUdWamRYUmxaRnh1SUNBZ0lDQWdJQ0IwYVdOclJXNTBjbWxsY3lBOUlHNTFiR3c3WEc1Y2RIMWNibHh1SUNBZ0lHbG1LR05oYkd4TVlYTjBSVzUwY21sbGN5QW1KaUJqWVd4c1RHRnpkRVZ1ZEhKcFpYTXViR1Z1WjNSb0lENGdNQ2tnZTF4dUlDQWdJQ0FnSUNCallXeHNUR0Z6ZEVWdWRISnBaWE11YldGd0tDQW9kR2xqYTBWdWRISjVJQ2s5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYVdOclJXNTBjbmt1YkdsemRHVnVaWEl1WTJGc2JDaDBhV05yUlc1MGNua3VZMjl1ZEdWNGRDQjhmQ0IwYVdOclJXNTBjbmt1YkdsemRHVnVaWEpiSjNSb2FYTW5YU2s3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJQzh2UTJ4bFlYSWdkR2hsYlNCdmJtTmxJR1Y0WldOMWRHVmtYRzRnSUNBZ0lDQWdJR05oYkd4TVlYTjBSVzUwY21sbGN5QTlJRzUxYkd3N1hHNGdJQ0FnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlncGUxeHVYSFJ2YmxScFkyc29LVHRjYmx4MGNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FnUFNCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVU5oYkd4aVlXTnJLVHRjYm4xY2JseHVZMnhoYzNNZ1ZHbGphMDFoYm1GblpYSWdlMXh1WEhSamIyNXpkSEoxWTNSdmNpZ3BlMXh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDQTlJREE3SUM4dklHWnZjaUJYYVc1a2IzZHpJRVZ1ZGx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMEtDazdYRzVjZEgxY2JuMWNibHh1WEc1VWFXTnJUV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVZV1JrSUQwZ1puVnVZM1JwYjI0Z0tIUnBZMnRGYm5SeWVTd2dZMkZzYkV4aGMzUXBJSHRjYmx4MGFXWWdLR05oYkd4TVlYTjBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUtDRmpZV3hzVEdGemRFVnVkSEpwWlhNcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGc2JFeGhjM1JGYm5SeWFXVnpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZMkZzYkV4aGMzUkZiblJ5YVdWekxuQjFjMmdvZEdsamEwVnVkSEo1S1RzZ0x5OGdkRzlrYnpvZ1UzUmhZMnNnYjNJZ1VYVmxkV1ZjYmx4MGZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJwWTJ0RmJuUnlhV1Z6S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJwWTJ0RmJuUnlhV1Z6SUQwZ1cxMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZEdsamEwVnVkSEpwWlhNdWNIVnphQ2gwYVdOclJXNTBjbmtwT3lBdkx5QjBiMlJ2T2lCVGRHRmpheUJ2Y2lCUmRXVjFaVnh1WEhSOVhHNWNibjA3WEc1Y2JseHVMeThnVkc5a2J6b2dVM1Z3Y0c5eWRDQm1iM0lnVG05a1pVcFRJRnh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExuTjBZWEowSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhScFppaDNhVzVrYjNjcGUxeHVYSFJjZEM4dklIZHBiR3dnY21WalpXbDJaWE1nZEdsdFpYTjBZVzF3SUdGeklHRnlaM1Z0Wlc1MFhHNWNkRngwTHk5MGIyUnZPaUJNWldGeWJqb2dJSFJvWlNCd2RYSndiM05sSUc5bUlIUnBiV1Z6ZEdGdGNGeHVYSFJjZEhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5azdYRzVjZEgxY2JuMDdYRzVjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbk4wYjNBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RHbG1LSGRwYm1SdmR5bDdYRzVjZEZ4MGQybHVaRzkzTG1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrS1R0Y2JseDBmVnh1ZlR0Y2JseHVZMjl1YzNRZ2MybHVaMnhsZEc5dVNXNXpkR0Z1WTJVZ1BTQnVaWGNnVkdsamEwMWhibUZuWlhJb0tUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdjMmx1WjJ4bGRHOXVTVzV6ZEdGdVkyVTdYRzVjYmx4dVhHNWNibHh1WEc1Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOU5ZVzVoWjJWeUxtcHpJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcyA9IFtdO1xuICAgIH1cbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGV4ZWN1dGVMYXRlckluTmV4dEFuaW1hdGlvbkZyYW1lLCBjYWxsTGFzdCl7XG4gICAgbGV0IGVudHJ5O1xuICAgIGlmIChleGVjdXRlTGF0ZXJJbk5leHRBbmltYXRpb25GcmFtZSl7XG4gICAgICAgIGNvbnN0IHRpY2tlciA9IG5ldyBUaWNrZXIoY29udGV4dCxmdW5jKTtcbiAgICAgICAgaWYoY2FsbExhc3QpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gbmV3IEVudHJ5KHRpY2tlciwgdGlja2VyLmV4ZWN1dGVMYXN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZW50cnkgPSBuZXcgRW50cnkodGlja2VyLCB0aWNrZXIuZXhlY3V0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMucHVzaChlbnRyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyeSA9IG5ldyBFbnRyeShjb250ZXh0LCBmdW5jKTtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbiAgICByZXR1cm4gZW50cnkuZGlzcG9zZTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZW50cmllc0luZGV4VG9EaXNwb3NlID0gW107XG5cbiAgICB0aGlzLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuICAgICAgICBpZiAoZW50cnkuZnVuYykge1xuICAgICAgICAgICAgZW50cnkuZnVuYy5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5LmZ1bmNbJ3RoaXMnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuICAgICAgICB0aGlzLmVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZyYW1lRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG4gICAgICAgIGlmIChlbnRyeS5mdW5jKSB7XG4gICAgICAgICAgICBlbnRyeS5mdW5jLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkuZnVuY1sndGhpcyddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcbiAgICB9KVxuXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9mdW5jdGlvbnMuanMiLCJpbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmdW5jKXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcbiAgICB9XG59XG5cbkVudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCl7XG4gICAgaWYodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgVGlja2VyKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmZ1bmMgPSBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lbnRyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=