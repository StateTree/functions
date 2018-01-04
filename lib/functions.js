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

// toDo: support both callback and promise
var TickEntry =
/**
 * @param {object} context - The "this" argument for the listener function.
 * @param {function} listener.
 */
function TickEntry(context, listener) {
	var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	_classCallCheck(this, TickEntry);

	this.context = context;
	this.listener = listener;
	this.callback = callback;
	this.priority = priority;
};

/*---- Public|Prototype Methods ---*/

exports.default = TickEntry;
TickEntry.prototype.dispose = function () {
	this.context = null;
	this.listener = null;
	this.callback = null;
	this.priority = null;
};

TickEntry.prototype.execute = function () {
	_Manager2.default.add(this);
};

TickEntry.prototype.getMaxPriority = function () {
	return _Manager2.default.getMaxPriority();
};

TickEntry.HIGH = 0;
TickEntry.NORMAL = 1;
TickEntry.LOW = 2;
TickEntry.WAIT = 3;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestAnimationFrameId = NaN;
//[0-HIGH, 1-NORMAL, 2-LOW, 3-WAIT]
var priorityEntries = [null, null, null, null];

function onTick() {
	for (var index = 0; index < priorityEntries.length; index++) {
		var tickEntries = priorityEntries[index];
		if (tickEntries && tickEntries.length > 0) {
			executeTickEntries(tickEntries);
			//Clear them once executed
			priorityEntries[index] = null;
		}
	}
}

function executeTickEntries(tickEntries) {
	// important to use for-loop
	// tickEntries grows dynamically by one of its entry
	// for example: let say we have one entry, and executing that entry might adds another entry
	// with map function we cant execute dynamically growing entries.
	for (var i = 0; i < tickEntries.length; i++) {
		var tickEntry = tickEntries[i];
		tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);
		if (tickEntry.callback) {
			tickEntry.callback.call(tickEntry.callback['this']);
		}
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

TickManager.prototype.add = function (tickEntry) {
	var priority = tickEntry.priority;

	if (!priorityEntries[priority]) {
		priorityEntries[priority] = [];
	}
	var tickEntries = priorityEntries[priority];
	tickEntries.push(tickEntry);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MWMwYTBjZTE1Nzk1ZDUwNjI5YSIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwicHJvdG90eXBlIiwiZGlzcG9zZSIsImV4ZWN1dGUiLCJhZGQiLCJnZXRNYXhQcmlvcml0eSIsIkhJR0giLCJOT1JNQUwiLCJMT1ciLCJXQUlUIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQiLCJOYU4iLCJwcmlvcml0eUVudHJpZXMiLCJvblRpY2siLCJpbmRleCIsImxlbmd0aCIsInRpY2tFbnRyaWVzIiwiZXhlY3V0ZVRpY2tFbnRyaWVzIiwiaSIsInRpY2tFbnRyeSIsImNhbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlRpY2tNYW5hZ2VyIiwic3RhcnQiLCJwdXNoIiwic3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2luZ2xldG9uSW5zdGFuY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtB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QXNCRyxHQUF0QixHQUE0QixVQUFVZSxTQUFWLEVBQXFCO0FBQUEsS0FDeENuQixRQUR3QyxHQUMzQm1CLFNBRDJCLENBQ3hDbkIsUUFEd0M7O0FBRWhELEtBQUcsQ0FBQ1ksZ0JBQWdCWixRQUFoQixDQUFKLEVBQThCO0FBQzdCWSxrQkFBZ0JaLFFBQWhCLElBQTRCLEVBQTVCO0FBQ0E7QUFDRCxLQUFNZ0IsY0FBY0osZ0JBQWdCWixRQUFoQixDQUFwQjtBQUNBZ0IsYUFBWVUsSUFBWixDQUFpQlAsU0FBakI7QUFDQSxDQVBEOztBQVVBO0FBQ0FLLFlBQVl2QixTQUFaLENBQXNCd0IsS0FBdEIsR0FBOEIsWUFBWTtBQUN6QyxLQUFHSCxNQUFILEVBQVU7QUFDVDtBQUNBO0FBQ0FaLDRCQUEwQlksT0FBT0MscUJBQVAsQ0FBNkJGLDZCQUE3QixDQUExQjtBQUNBO0FBQ0QsQ0FORDs7QUFTQUcsWUFBWXZCLFNBQVosQ0FBc0IwQixJQUF0QixHQUE2QixZQUFZO0FBQ3hDLEtBQUdMLE1BQUgsRUFBVTtBQUNUQSxTQUFPTSxvQkFBUCxDQUE0QmxCLHVCQUE1QjtBQUNBO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNbUIsb0JBQW9CLElBQUlMLFdBQUosRUFBMUI7O2tCQUVlSyxpQiIsImZpbGUiOiJsaWIvdGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MWMwYTBjZTE1Nzk1ZDUwNjI5YSIsImltcG9ydCBUaWNrZXIgZnJvbSAnLi9UaWNrRW50cnknO1xuXG5leHBvcnQgZGVmYXVsdCBUaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgbWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xuXG4vLyB0b0RvOiBzdXBwb3J0IGJvdGggY2FsbGJhY2sgYW5kIHByb21pc2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tFbnRyeVxue1xuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgXCJ0aGlzXCIgYXJndW1lbnQgZm9yIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBsaXN0ZW5lciwgY2FsbGJhY2sgPSBudWxsLCBwcmlvcml0eSA9IDApXG5cdHtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHR9XG5cbn1cblxuLyotLS0tIFB1YmxpY3xQcm90b3R5cGUgTWV0aG9kcyAtLS0qL1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24oKXtcblx0bWFuYWdlci5hZGQodGhpcyk7XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24oKXtcblx0cmV0dXJuIG1hbmFnZXIuZ2V0TWF4UHJpb3JpdHkoKTtcbn07XG5cblxuVGlja0VudHJ5LkhJR0ggPSAwO1xuVGlja0VudHJ5Lk5PUk1BTCA9IDE7XG5UaWNrRW50cnkuTE9XID0gMjtcblRpY2tFbnRyeS5XQUlUID0gMztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9UaWNrRW50cnkuanMiLCJcbmxldCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IE5hTjtcbi8vWzAtSElHSCwgMS1OT1JNQUwsIDItTE9XLCAzLVdBSVRdXG5jb25zdCBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbmZ1bmN0aW9uIG9uVGljaygpe1xuXHRmb3IobGV0IGluZGV4ID0gMCA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKyl7XG5cdFx0bGV0IHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZih0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpe1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yKGxldCBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRjb25zdCB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0fVxufVxuXG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCl7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG5jbGFzcyBUaWNrTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsgLy8gZm9yIFdpbmRvd3MgRW52XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblx0fVxufVxuXG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdGNvbnN0IHsgcHJpb3JpdHkgfSA9IHRpY2tFbnRyeTtcblx0aWYoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pe1xuXHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0fVxuXHRjb25zdCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcbn07XG5cblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuY29uc3Qgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uSW5zdGFuY2U7XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9NYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _entry = __webpack_require__(3);

var _entry2 = _interopRequireDefault(_entry);

var _ticker = __webpack_require__(0);

var _ticker2 = _interopRequireDefault(_ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Functions = function Functions(triggerDoneNotifier) {
	_classCallCheck(this, Functions);

	this.entries = [];
	this.frameEntries = [];
	this.executingLaterInNextTickCount = 0;
	this.triggerDoneNotifier = triggerDoneNotifier;
};

exports.default = Functions;


Functions.prototype.setTriggerDoneNotifier = function (triggerDoneNotifier) {
	this.triggerDoneNotifier = triggerDoneNotifier;
};

Functions.prototype.removeTriggerDoneNotifier = function () {
	this.triggerDoneNotifier = null;
};

// the function that responsible for initiating trigger
// if called using this function will make a synced effect of execution
Functions.prototype.executeTriggerer = function (context, func, triggererCallback) {
	var _this = this;

	var _executeTriggerer = function _executeTriggerer() {
		var ticker = void 0;
		if (_this.executingLaterInNextTickCount === 0) {
			func.call(context);
			if (triggererCallback) {
				if (_this.executingLaterInNextTickCount === 0) {
					triggererCallback && triggererCallback();
				} else {
					ticker = new _ticker2.default(_this, triggererCallback, null, 3);
					ticker.execute();
				}
			}
		} else {
			ticker = new _ticker2.default(_this, _executeTriggerer, triggererCallback, 3);
			ticker.execute();
		}
	};
	_executeTriggerer();
};

Functions.prototype.addListener = function (context, func) {
	var executeLaterInNextTick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	var _this2 = this;

	var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	var listenerCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

	var entry = void 0;
	if (executeLaterInNextTick) {

		var tickerCallback = function tickerCallback() {
			_this2.executingLaterInNextTickCount = _this2.executingLaterInNextTickCount - 1;
			if (listenerCallback) {
				listenerCallback.call(listenerCallback['this']);
			}
			if (_this2.executingLaterInNextTickCount === 0) {
				_this2.triggerDoneNotifier && _this2.triggerDoneNotifier();
			}
		};
		var ticker = new _ticker2.default(context, func, tickerCallback, priority);
		entry = new _entry2.default(ticker, ticker.execute);
		this.frameEntries.push(entry);
	} else {
		entry = new _entry2.default(context, func);
		this.entries.push(entry);
	}
};

Functions.prototype.removeListener = function (context, func) {
	var _this3 = this;

	var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	var entry = void 0,
	    i = void 0;
	var frameEntries = this.frameEntries,
	    entries = this.entries;

	var _loop = function _loop() {
		var frameEntry = frameEntries[i];
		entry = frameEntry.context;
		if (entry.context === context && entry.listener === func) {
			if (_this3.executingLaterInNextTickCount === 0) {
				frameEntry.dispose();
			} else {
				// frame trigger Listeners are still running
				var tickerEntry = void 0;
				var disposeDoneNotifier = function disposeDoneNotifier() {
					if (_this3.executingLaterInNextTickCount === 0) {
						callback && callback();
					} else {
						tickerEntry = new _ticker2.default(frameEntry, frameEntry.dispose, disposeDoneNotifier, 3);
						tickerEntry.execute();
					}
				};
				tickerEntry = new _ticker2.default(frameEntry, frameEntry.dispose, disposeDoneNotifier, 3);
				tickerEntry.execute();
			}
			return {
				v: void 0
			};
		}
	};

	for (i = 0; i < frameEntries.length; i++) {
		var _ret = _loop();

		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	}

	for (i = 0; i < entries.length; i++) {
		entry = entries[i];
		if (entry.context === context && entry.listener === func) {
			entry.dispose();
			callback && callback();
			return;
		}
	}
};

Functions.prototype.triggerListeners = function () {
	var entriesIndexToDispose = [];

	this.entries.forEach(function (entry, index) {
		if (entry.listener) {
			entry.listener.apply(entry.context || entry.listener['this']);
		} else {
			entriesIndexToDispose.push(index);
		}
	});
	entriesIndexToDispose.forEach(function (entryIndex) {
		this.entries.splice(entryIndex, 1);
	}, this);

	if (this.frameEntries.length > 0) {
		this.frameEntries.forEach(function (entry, index) {
			if (entry.listener) {
				this.executingLaterInNextTickCount = this.executingLaterInNextTickCount + 1;
				entry.listener.apply(entry.context || entry.listener['this']);
			} else {
				entriesIndexToDispose.push(index);
			}
		}, this);
		entriesIndexToDispose.forEach(function (entryIndex) {
			this.frameEntries.splice(entryIndex, 1);
		}, this);
	} else {
		this.triggerDoneNotifier && this.triggerDoneNotifier();
	}
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
    this.listener = func;
};

// Method available only on Entry instance not in Class


exports.default = Entry;
Entry.prototype.dispose = function () {
    if (this.context instanceof _ticker2.default) {
        this.context.dispose();
    }
    this.context = null;
    this.listener = null;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NzYwNDRhY2E2Y2I1YWI4OWI5YyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJ0cmlnZ2VyRG9uZU5vdGlmaWVyIiwiZW50cmllcyIsImZyYW1lRW50cmllcyIsImV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IiwicHJvdG90eXBlIiwic2V0VHJpZ2dlckRvbmVOb3RpZmllciIsInJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIiLCJleGVjdXRlVHJpZ2dlcmVyIiwiY29udGV4dCIsImZ1bmMiLCJ0cmlnZ2VyZXJDYWxsYmFjayIsIl9leGVjdXRlVHJpZ2dlcmVyIiwidGlja2VyIiwiY2FsbCIsImV4ZWN1dGUiLCJhZGRMaXN0ZW5lciIsImV4ZWN1dGVMYXRlckluTmV4dFRpY2siLCJwcmlvcml0eSIsImxpc3RlbmVyQ2FsbGJhY2siLCJlbnRyeSIsInRpY2tlckNhbGxiYWNrIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwiY2FsbGJhY2siLCJpIiwiZnJhbWVFbnRyeSIsImxpc3RlbmVyIiwiZGlzcG9zZSIsInRpY2tlckVudHJ5IiwiZGlzcG9zZURvbmVOb3RpZmllciIsImxlbmd0aCIsInRyaWdnZXJMaXN0ZW5lcnMiLCJlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJhcHBseSIsImVudHJ5SW5kZXgiLCJzcGxpY2UiLCJFbnRyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LG1CQUFMLElBQTRCLEtBQUtBLG1CQUFMLEVBQTVCO0FBQ0E7QUFDRCxDQTlCRCxDOzs7Ozs7Ozs7Ozs7O0FDdEdBOzs7Ozs7OztJQUVxQnNDLEssR0FDakIsZUFBWTlCLE9BQVosRUFBcUJDLElBQXJCLEVBQTBCO0FBQUE7O0FBQ3RCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtrQixRQUFMLEdBQWdCakIsSUFBaEI7QUFDSCxDOztBQUdMOzs7a0JBUHFCNkIsSztBQVFyQkEsTUFBTWxDLFNBQU4sQ0FBZ0J1QixPQUFoQixHQUEwQixZQUFXO0FBQ2pDLFFBQUcsS0FBS25CLE9BQUwsNEJBQUgsRUFBa0M7QUFDOUIsYUFBS0EsT0FBTCxDQUFhbUIsT0FBYjtBQUNIO0FBQ0QsU0FBS25CLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS2tCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxDQU5ELEMiLCJmaWxlIjoibGliL2Z1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDc2MDQ0YWNhNmNiNWFiODliOWMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59O1xuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRpY2tFbnRyeTtcblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcblx0X01hbmFnZXIyLmRlZmF1bHQuYWRkKHRoaXMpO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIF9NYW5hZ2VyMi5kZWZhdWx0LmdldE1heFByaW9yaXR5KCk7XG59O1xuXG5UaWNrRW50cnkuSElHSCA9IDA7XG5UaWNrRW50cnkuTk9STUFMID0gMTtcblRpY2tFbnRyeS5MT1cgPSAyO1xuVGlja0VudHJ5LldBSVQgPSAzO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gTmFOO1xuLy9bMC1ISUdILCAxLU5PUk1BTCwgMi1MT1csIDMtV0FJVF1cbnZhciBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbmZ1bmN0aW9uIG9uVGljaygpIHtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG52YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXHR0aGlzLnN0YXJ0KCk7XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHR9XG5cdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcbn07XG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxudmFyIHNpbmdsZXRvbkluc3RhbmNlID0gbmV3IFRpY2tNYW5hZ2VyKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNpbmdsZXRvbkluc3RhbmNlO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0E0TVdNd1lUQmpaVEUxTnprMVpEVXdOakk1WVNJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwxUnBZMnRGYm5SeWVTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VFdGdVlXZGxjaTVxY3lKZExDSnVZVzFsY3lJNld5SlVhV05yUlc1MGNua2lMQ0pqYjI1MFpYaDBJaXdpYkdsemRHVnVaWElpTENKallXeHNZbUZqYXlJc0luQnlhVzl5YVhSNUlpd2ljSEp2ZEc5MGVYQmxJaXdpWkdsemNHOXpaU0lzSW1WNFpXTjFkR1VpTENKaFpHUWlMQ0puWlhSTllYaFFjbWx2Y21sMGVTSXNJa2hKUjBnaUxDSk9UMUpOUVV3aUxDSk1UMWNpTENKWFFVbFVJaXdpY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUWlMQ0pPWVU0aUxDSndjbWx2Y21sMGVVVnVkSEpwWlhNaUxDSnZibFJwWTJzaUxDSnBibVJsZUNJc0lteGxibWQwYUNJc0luUnBZMnRGYm5SeWFXVnpJaXdpWlhobFkzVjBaVlJwWTJ0RmJuUnlhV1Z6SWl3aWFTSXNJblJwWTJ0RmJuUnllU0lzSW1OaGJHd2lMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlJc0luZHBibVJ2ZHlJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0lzSWxScFkydE5ZVzVoWjJWeUlpd2ljM1JoY25RaUxDSndkWE5vSWl3aWMzUnZjQ0lzSW1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElpd2ljMmx1WjJ4bGRHOXVTVzV6ZEdGdVkyVWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRE4wUkJPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUVVFN096czdPenM3TzBGQlJVRTdTVUZEY1VKQkxGTTdRVUZGY0VJN096czdRVUZKUVN4dFFrRkJXVU1zVDBGQldpeEZRVUZ4UWtNc1VVRkJja0lzUlVGRFFUdEJRVUZCTEV0QlJDdENReXhSUVVNdlFpeDFSVUZFTUVNc1NVRkRNVU03UVVGQlFTeExRVVJuUkVNc1VVRkRhRVFzZFVWQlJESkVMRU5CUXpORU96dEJRVUZCT3p0QlFVTkRMRTFCUVV0SUxFOUJRVXdzUjBGQlpVRXNUMEZCWmp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSkJMRkZCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOQkxFTTdPMEZCU1VZN08ydENRV2hDY1VKS0xGTTdRVUZyUW5KQ1FTeFZRVUZWU3l4VFFVRldMRU5CUVc5Q1F5eFBRVUZ3UWl4SFFVRTRRaXhaUVVGVk8wRkJRM1pETEUxQlFVdE1MRTlCUVV3c1IwRkJaU3hKUVVGbU8wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMElzU1VGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBFc1EwRk1SRHM3UVVGUFFVb3NWVUZCVlVzc1UwRkJWaXhEUVVGdlFrVXNUMEZCY0VJc1IwRkJPRUlzV1VGQlZUdEJRVU4yUXl4dFFrRkJVVU1zUjBGQlVpeERRVUZaTEVsQlFWbzdRVUZEUVN4RFFVWkVPenRCUVVsQlVpeFZRVUZWU3l4VFFVRldMRU5CUVc5Q1NTeGpRVUZ3UWl4SFFVRnhReXhaUVVGVk8wRkJRemxETEZGQlFVOHNhMEpCUVZGQkxHTkJRVklzUlVGQlVEdEJRVU5CTEVOQlJrUTdPMEZCUzBGVUxGVkJRVlZWTEVsQlFWWXNSMEZCYVVJc1EwRkJha0k3UVVGRFFWWXNWVUZCVlZjc1RVRkJWaXhIUVVGdFFpeERRVUZ1UWp0QlFVTkJXQ3hWUVVGVldTeEhRVUZXTEVkQlFXZENMRU5CUVdoQ08wRkJRMEZhTEZWQlFWVmhMRWxCUVZZc1IwRkJhVUlzUTBGQmFrSXNRenM3T3pzN096czdPenM3T3pzN08wRkRka05CTEVsQlFVbERMREJDUVVFd1FrTXNSMEZCT1VJN1FVRkRRVHRCUVVOQkxFbEJRVTFETEd0Q1FVRnJRaXhEUVVGRExFbEJRVVFzUlVGQlR5eEpRVUZRTEVWQlFXRXNTVUZCWWl4RlFVRnRRaXhKUVVGdVFpeERRVUY0UWpzN1FVRkZRU3hUUVVGVFF5eE5RVUZVTEVkQlFXbENPMEZCUTJoQ0xFMUJRVWtzU1VGQlNVTXNVVUZCVVN4RFFVRm9RaXhGUVVGdlFrRXNVVUZCVVVZc1owSkJRV2RDUnl4TlFVRTFReXhGUVVGdlJFUXNUMEZCY0VRc1JVRkJORVE3UVVGRE0wUXNUVUZCU1VVc1kwRkJZMG9zWjBKQlFXZENSU3hMUVVGb1FpeERRVUZzUWp0QlFVTkJMRTFCUVVkRkxHVkJRV1ZCTEZsQlFWbEVMRTFCUVZvc1IwRkJjVUlzUTBGQmRrTXNSVUZCTUVNN1FVRkRla05GTEhOQ1FVRnRRa1FzVjBGQmJrSTdRVUZEUVR0QlFVTkJTaXh0UWtGQlowSkZMRXRCUVdoQ0xFbEJRWGxDTEVsQlFYcENPMEZCUTBFN1FVRkRSRHRCUVVORU96dEJRVVZFTEZOQlFWTkhMR3RDUVVGVUxFTkJRVFJDUkN4WFFVRTFRaXhGUVVGM1F6dEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVWtzU1VGQlNVVXNTVUZCU1N4RFFVRmFMRVZCUVdWQkxFbEJRVWxHTEZsQlFWbEVMRTFCUVM5Q0xFVkJRWFZEUnl4SFFVRjJReXhGUVVFeVF6dEJRVU14UXl4TlFVRk5ReXhaUVVGWlNDeFpRVUZaUlN4RFFVRmFMRU5CUVd4Q08wRkJRMEZETEZsQlFWVnlRaXhSUVVGV0xFTkJRVzFDYzBJc1NVRkJia0lzUTBGQmQwSkVMRlZCUVZWMFFpeFBRVUZXTEVsQlFYRkNjMElzVlVGQlZYSkNMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCTjBNN1FVRkRRU3hOUVVGSmNVSXNWVUZCVlhCQ0xGRkJRV1FzUlVGQmQwSTdRVUZEZGtKdlFpeGhRVUZWY0VJc1VVRkJWaXhEUVVGdFFuRkNMRWxCUVc1Q0xFTkJRWGRDUkN4VlFVRlZjRUlzVVVGQlZpeERRVUZ0UWl4TlFVRnVRaXhEUVVGNFFqdEJRVU5CTzBGQlEwUTdRVUZEUkRzN1FVRkhSQ3hUUVVGVGMwSXNOa0pCUVZRc1IwRkJkME03UVVGRGRrTlNPMEZCUTBGSUxESkNRVUV3UWxrc1QwRkJUME1zY1VKQlFWQXNRMEZCTmtKR0xEWkNRVUUzUWl4RFFVRXhRanRCUVVOQk96dEpRVVZMUnl4WExFZEJRMHdzZFVKQlFXRTdRVUZCUVRzN1FVRkRUbVFzTWtKQlFUQkNMRU5CUVRGQ0xFTkJSRTBzUTBGRGRVSTdRVUZETjBJc1RVRkJTMlVzUzBGQlREdEJRVU5PTEVNN08wRkJTVVpFTEZsQlFWbDJRaXhUUVVGYUxFTkJRWE5DUnl4SFFVRjBRaXhIUVVFMFFpeFZRVUZWWlN4VFFVRldMRVZCUVhGQ08wRkJRVUVzUzBGRGVFTnVRaXhSUVVSM1F5eEhRVU16UW0xQ0xGTkJSREpDTEVOQlEzaERia0lzVVVGRWQwTTdPMEZCUldoRUxFdEJRVWNzUTBGQlExa3NaMEpCUVdkQ1dpeFJRVUZvUWl4RFFVRktMRVZCUVRoQ08wRkJRemRDV1N4clFrRkJaMEphTEZGQlFXaENMRWxCUVRSQ0xFVkJRVFZDTzBGQlEwRTdRVUZEUkN4TFFVRk5aMElzWTBGQlkwb3NaMEpCUVdkQ1dpeFJRVUZvUWl4RFFVRndRanRCUVVOQlowSXNZVUZCV1ZVc1NVRkJXaXhEUVVGcFFsQXNVMEZCYWtJN1FVRkRRU3hEUVZCRU96dEJRVlZCTzBGQlEwRkxMRmxCUVZsMlFpeFRRVUZhTEVOQlFYTkNkMElzUzBGQmRFSXNSMEZCT0VJc1dVRkJXVHRCUVVONlF5eExRVUZIU0N4TlFVRklMRVZCUVZVN1FVRkRWRHRCUVVOQk8wRkJRMEZhTERSQ1FVRXdRbGtzVDBGQlQwTXNjVUpCUVZBc1EwRkJOa0pHTERaQ1FVRTNRaXhEUVVFeFFqdEJRVU5CTzBGQlEwUXNRMEZPUkRzN1FVRlRRVWNzV1VGQldYWkNMRk5CUVZvc1EwRkJjMEl3UWl4SlFVRjBRaXhIUVVFMlFpeFpRVUZaTzBGQlEzaERMRXRCUVVkTUxFMUJRVWdzUlVGQlZUdEJRVU5VUVN4VFFVRlBUU3h2UWtGQlVDeERRVUUwUW14Q0xIVkNRVUUxUWp0QlFVTkJPMEZCUTBRc1EwRktSRHM3UVVGTlFTeEpRVUZOYlVJc2IwSkJRVzlDTEVsQlFVbE1MRmRCUVVvc1JVRkJNVUk3TzJ0Q1FVVmxTeXhwUWlJc0ltWnBiR1VpT2lKc2FXSXZkR2xqYTJWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKMGFXTnJaWEpjSWl3Z1cxMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpZEdsamEyVnlYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJblJwWTJ0bGNsd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJRnh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHRjYmlCY2RGeDBYSFJjZEdOdmJtWnBaM1Z5WVdKc1pUb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFhIUmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJRngwWEhSY2RGeDBaMlYwT2lCblpYUjBaWEpjYmlCY2RGeDBYSFI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXdLVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTRNV013WVRCalpURTFOemsxWkRVd05qSTVZU0lzSW1sdGNHOXlkQ0JVYVdOclpYSWdabkp2YlNBbkxpOVVhV05yUlc1MGNua25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JVYVdOclpYSTdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKcGJYQnZjblFnYldGdVlXZGxjaUJtY205dElDY3VMMDFoYm1GblpYSW5PMXh1WEc0dkx5QjBiMFJ2T2lCemRYQndiM0owSUdKdmRHZ2dZMkZzYkdKaFkyc2dZVzVrSUhCeWIyMXBjMlZjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGUnBZMnRGYm5SeWVWeHVlMXh1WEhRdktpcGNibHgwSUNvZ1FIQmhjbUZ0SUh0dlltcGxZM1I5SUdOdmJuUmxlSFFnTFNCVWFHVWdYQ0owYUdselhDSWdZWEpuZFcxbGJuUWdabTl5SUhSb1pTQnNhWE4wWlc1bGNpQm1kVzVqZEdsdmJpNWNibHgwSUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2Ym4wZ2JHbHpkR1Z1WlhJdVhHNWNkQ0FxTDF4dVhIUmpiMjV6ZEhKMVkzUnZjaWhqYjI1MFpYaDBMQ0JzYVhOMFpXNWxjaXdnWTJGc2JHSmhZMnNnUFNCdWRXeHNMQ0J3Y21sdmNtbDBlU0E5SURBcFhHNWNkSHRjYmx4MFhIUjBhR2x6TG1OdmJuUmxlSFFnUFNCamIyNTBaWGgwTzF4dVhIUmNkSFJvYVhNdWJHbHpkR1Z1WlhJZ1BTQnNhWE4wWlc1bGNqdGNibHgwWEhSMGFHbHpMbU5oYkd4aVlXTnJJRDBnWTJGc2JHSmhZMnM3WEc1Y2RGeDBkR2hwY3k1d2NtbHZjbWwwZVNBOUlIQnlhVzl5YVhSNU8xeHVYSFI5WEc1Y2JuMWNibHh1THlvdExTMHRJRkIxWW14cFkzeFFjbTkwYjNSNWNHVWdUV1YwYUc5a2N5QXRMUzBxTDF4dVhHNVVhV05yUlc1MGNua3VjSEp2ZEc5MGVYQmxMbVJwYzNCdmMyVWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUjBhR2x6TG1OdmJuUmxlSFFnUFNCdWRXeHNPMXh1WEhSMGFHbHpMbXhwYzNSbGJtVnlJRDBnYm5Wc2JEdGNibHgwZEdocGN5NWpZV3hzWW1GamF5QTlJRzUxYkd3N1hHNWNkSFJvYVhNdWNISnBiM0pwZEhrZ1BTQnVkV3hzTzF4dWZUdGNibHh1VkdsamEwVnVkSEo1TG5CeWIzUnZkSGx3WlM1bGVHVmpkWFJsSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwYldGdVlXZGxjaTVoWkdRb2RHaHBjeWs3WEc1OU8xeHVYRzVVYVdOclJXNTBjbmt1Y0hKdmRHOTBlWEJsTG1kbGRFMWhlRkJ5YVc5eWFYUjVJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBjbVYwZFhKdUlHMWhibUZuWlhJdVoyVjBUV0Y0VUhKcGIzSnBkSGtvS1R0Y2JuMDdYRzVjYmx4dVZHbGphMFZ1ZEhKNUxraEpSMGdnUFNBd08xeHVWR2xqYTBWdWRISjVMazVQVWsxQlRDQTlJREU3WEc1VWFXTnJSVzUwY25rdVRFOVhJRDBnTWp0Y2JsUnBZMnRGYm5SeWVTNVhRVWxVSUQwZ016dGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlVYVdOclJXNTBjbmt1YW5NaUxDSmNibXhsZENCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ0E5SUU1aFRqdGNiaTh2V3pBdFNFbEhTQ3dnTVMxT1QxSk5RVXdzSURJdFRFOVhMQ0F6TFZkQlNWUmRYRzVqYjI1emRDQndjbWx2Y21sMGVVVnVkSEpwWlhNZ1BTQmJiblZzYkN3Z2JuVnNiQ3dnYm5Wc2JDd2diblZzYkYwN1hHNWNibVoxYm1OMGFXOXVJRzl1VkdsamF5Z3BlMXh1WEhSbWIzSW9iR1YwSUdsdVpHVjRJRDBnTUNBN0lHbHVaR1Y0SUR3Z2NISnBiM0pwZEhsRmJuUnlhV1Z6TG14bGJtZDBhRHNnYVc1a1pYZ3JLeWw3WEc1Y2RGeDBiR1YwSUhScFkydEZiblJ5YVdWeklEMGdjSEpwYjNKcGRIbEZiblJ5YVdWelcybHVaR1Y0WFR0Y2JseDBYSFJwWmloMGFXTnJSVzUwY21sbGN5QW1KaUIwYVdOclJXNTBjbWxsY3k1c1pXNW5kR2dnUGlBd0tTQjdYRzVjZEZ4MFhIUmxlR1ZqZFhSbFZHbGphMFZ1ZEhKcFpYTW9kR2xqYTBWdWRISnBaWE1wTzF4dVhIUmNkRngwTHk5RGJHVmhjaUIwYUdWdElHOXVZMlVnWlhobFkzVjBaV1JjYmx4MFhIUmNkSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHBibVJsZUYwZ1BTQnVkV3hzTzF4dVhIUmNkSDFjYmx4MGZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCbGVHVmpkWFJsVkdsamEwVnVkSEpwWlhNb2RHbGphMFZ1ZEhKcFpYTXBlMXh1WEhRdkx5QnBiWEJ2Y25SaGJuUWdkRzhnZFhObElHWnZjaTFzYjI5d1hHNWNkQzh2SUhScFkydEZiblJ5YVdWeklHZHliM2R6SUdSNWJtRnRhV05oYkd4NUlHSjVJRzl1WlNCdlppQnBkSE1nWlc1MGNubGNibHgwTHk4Z1ptOXlJR1Y0WVcxd2JHVTZJR3hsZENCellYa2dkMlVnYUdGMlpTQnZibVVnWlc1MGNua3NJR0Z1WkNCbGVHVmpkWFJwYm1jZ2RHaGhkQ0JsYm5SeWVTQnRhV2RvZENCaFpHUnpJR0Z1YjNSb1pYSWdaVzUwY25sY2JseDBMeThnZDJsMGFDQnRZWEFnWm5WdVkzUnBiMjRnZDJVZ1kyRnVkQ0JsZUdWamRYUmxJR1I1Ym1GdGFXTmhiR3g1SUdkeWIzZHBibWNnWlc1MGNtbGxjeTVjYmx4MFptOXlLR3hsZENCcElEMGdNRHNnYVNBOElIUnBZMnRGYm5SeWFXVnpMbXhsYm1kMGFEc2dhU3NyS1h0Y2JseDBYSFJqYjI1emRDQjBhV05yUlc1MGNua2dQU0IwYVdOclJXNTBjbWxsYzF0cFhUdGNibHgwWEhSMGFXTnJSVzUwY25rdWJHbHpkR1Z1WlhJdVkyRnNiQ2gwYVdOclJXNTBjbmt1WTI5dWRHVjRkQ0I4ZkNCMGFXTnJSVzUwY25rdWJHbHpkR1Z1WlhKYkozUm9hWE1uWFNrN1hHNWNkRngwYVdZZ0tIUnBZMnRGYm5SeWVTNWpZV3hzWW1GamF5a2dlMXh1WEhSY2RGeDBkR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcld5ZDBhR2x6SjEwcE8xeHVYSFJjZEgxY2JseDBmVnh1ZlZ4dVhHNWNibVoxYm1OMGFXOXVJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05yS0NsN1hHNWNkRzl1VkdsamF5Z3BPMXh1WEhSeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ0E5SUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxRMkZzYkdKaFkyc3BPMXh1ZlZ4dVhHNWpiR0Z6Y3lCVWFXTnJUV0Z1WVdkbGNpQjdYRzVjZEdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdNRHNnTHk4Z1ptOXlJRmRwYm1SdmQzTWdSVzUyWEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25Rb0tUdGNibHgwZlZ4dWZWeHVYRzVjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNWhaR1FnUFNCbWRXNWpkR2x2YmlBb2RHbGphMFZ1ZEhKNUtTQjdYRzVjZEdOdmJuTjBJSHNnY0hKcGIzSnBkSGtnZlNBOUlIUnBZMnRGYm5SeWVUdGNibHgwYVdZb0lYQnlhVzl5YVhSNVJXNTBjbWxsYzF0d2NtbHZjbWwwZVYwcGUxeHVYSFJjZEhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjBnUFNCYlhUdGNibHgwZlZ4dVhIUmpiMjV6ZENCMGFXTnJSVzUwY21sbGN5QTlJSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMDdYRzVjZEhScFkydEZiblJ5YVdWekxuQjFjMmdvZEdsamEwVnVkSEo1S1R0Y2JuMDdYRzVjYmx4dUx5OGdWRzlrYnpvZ1UzVndjRzl5ZENCbWIzSWdUbTlrWlVwVElGeHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG5OMFlYSjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJwWmloM2FXNWtiM2NwZTF4dVhIUmNkQzh2SUhkcGJHd2djbVZqWldsMlpYTWdkR2x0WlhOMFlXMXdJR0Z6SUdGeVozVnRaVzUwWEc1Y2RGeDBMeTkwYjJSdk9pQk1aV0Z5YmpvZ0lIUm9aU0J3ZFhKd2IzTmxJRzltSUhScGJXVnpkR0Z0Y0Z4dVhIUmNkSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2h5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlrN1hHNWNkSDFjYm4wN1hHNWNibHh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExuTjBiM0FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEdsbUtIZHBibVJ2ZHlsN1hHNWNkRngwZDJsdVpHOTNMbU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsS0hKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtLVHRjYmx4MGZWeHVmVHRjYmx4dVkyOXVjM1FnYzJsdVoyeGxkRzl1U1c1emRHRnVZMlVnUFNCdVpYY2dWR2xqYTAxaGJtRm5aWElvS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2MybHVaMnhsZEc5dVNXNXpkR0Z1WTJVN1hHNWNibHh1WEc1Y2JseHVYRzVjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5TllXNWhaMlZ5TG1weklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBFbnRyeSBmcm9tICcuL2VudHJ5JztcbmltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcih0cmlnZ2VyRG9uZU5vdGlmaWVyKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gdHJpZ2dlckRvbmVOb3RpZmllcjtcbiAgICB9XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuc2V0VHJpZ2dlckRvbmVOb3RpZmllciA9IGZ1bmN0aW9uKHRyaWdnZXJEb25lTm90aWZpZXIpe1xuXHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSB0cmlnZ2VyRG9uZU5vdGlmaWVyO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSBudWxsO1xufVxuXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCByZXNwb25zaWJsZSBmb3IgaW5pdGlhdGluZyB0cmlnZ2VyXG4vLyBpZiBjYWxsZWQgdXNpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIG1ha2UgYSBzeW5jZWQgZWZmZWN0IG9mIGV4ZWN1dGlvblxuRnVuY3Rpb25zLnByb3RvdHlwZS5leGVjdXRlVHJpZ2dlcmVyID0gZnVuY3Rpb24oY29udGV4dCwgZnVuYywgdHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRjb25zdCBfZXhlY3V0ZVRyaWdnZXJlciA9ICgpPT57XG5cdFx0bGV0IHRpY2tlcjtcblx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdGZ1bmMuY2FsbChjb250ZXh0KTtcblx0XHRcdGlmKHRyaWdnZXJlckNhbGxiYWNrKXtcblx0XHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdFx0dHJpZ2dlcmVyQ2FsbGJhY2sgJiYgdHJpZ2dlcmVyQ2FsbGJhY2soKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIHRyaWdnZXJlckNhbGxiYWNrLCBudWxsLCAzKTtcblx0XHRcdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgX2V4ZWN1dGVUcmlnZ2VyZXIsIHRyaWdnZXJlckNhbGxiYWNrLCAzKTtcblx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0fVxuXHR9O1xuXHRfZXhlY3V0ZVRyaWdnZXJlcigpO1xufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIGV4ZWN1dGVMYXRlckluTmV4dFRpY2sgPSBmYWxzZSwgcHJpb3JpdHkgPSAwLCBsaXN0ZW5lckNhbGxiYWNrID0gbnVsbCl7XG4gICAgbGV0IGVudHJ5O1xuICAgIGlmIChleGVjdXRlTGF0ZXJJbk5leHRUaWNrKXtcblxuXHQgICAgIGNvbnN0IHRpY2tlckNhbGxiYWNrID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCAtIDE7XG5cdFx0ICAgIGlmKGxpc3RlbmVyQ2FsbGJhY2spe1xuXHRcdFx0ICAgIGxpc3RlbmVyQ2FsbGJhY2suY2FsbChsaXN0ZW5lckNhbGxiYWNrWyd0aGlzJ10pXG5cdFx0ICAgIH1cblx0XHQgICAgaWYoIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0ICAgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciAmJiAgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyKCk7XG5cdFx0ICAgIH1cblx0ICAgIH07XG4gICAgICAgIGNvbnN0IHRpY2tlciA9IG5ldyBUaWNrZXIoY29udGV4dCwgZnVuYywgdGlja2VyQ2FsbGJhY2ssIHByaW9yaXR5KTtcblx0ICAgIGVudHJ5ID0gbmV3IEVudHJ5KHRpY2tlciwgdGlja2VyLmV4ZWN1dGUpO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcy5wdXNoKGVudHJ5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJ5ID0gbmV3IEVudHJ5KGNvbnRleHQsIGZ1bmMpO1xuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsZnVuYywgY2FsbGJhY2sgPSBudWxsKXtcblx0bGV0IGVudHJ5LCBpO1xuXHRjb25zdCB7ZnJhbWVFbnRyaWVzLCBlbnRyaWVzfSA9IHRoaXM7XG5cblx0Zm9yKGkgPSAwOyBpIDwgZnJhbWVFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0ICAgIGNvbnN0IGZyYW1lRW50cnkgPSAgZnJhbWVFbnRyaWVzW2ldO1xuXHRcdGVudHJ5ID0gZnJhbWVFbnRyeS5jb250ZXh0O1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdGZyYW1lRW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0fSBlbHNlIHsgLy8gZnJhbWUgdHJpZ2dlciBMaXN0ZW5lcnMgYXJlIHN0aWxsIHJ1bm5pbmdcblx0XHRcdFx0bGV0IHRpY2tlckVudHJ5O1xuXHRcdFx0XHRjb25zdCBkaXNwb3NlRG9uZU5vdGlmaWVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH0gZWxzZXtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0ZW50cnkgPSBlbnRyaWVzW2ldO1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0ZW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudHJpZ2dlckxpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZW50cmllc0luZGV4VG9EaXNwb3NlID0gW107XG5cblx0dGhpcy5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcbiAgICAgICAgaWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG4gICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcbiAgICB9LCB0aGlzKTtcblxuXG5cdGlmKHRoaXMuZnJhbWVFbnRyaWVzLmxlbmd0aCA+IDApe1xuXHRcdHRoaXMuZnJhbWVFbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcblx0XHRcdGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCArIDE7XG5cdFx0XHRcdGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG5cdFx0XHR0aGlzLmZyYW1lRW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcblx0XHR9LCB0aGlzKVxuXHR9IGVsc2Uge1xuXHRcdHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciAmJiB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIoKTtcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZnVuY3Rpb25zLmpzIiwiaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZnVuYyl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jO1xuICAgIH1cbn1cblxuLy8gTWV0aG9kIGF2YWlsYWJsZSBvbmx5IG9uIEVudHJ5IGluc3RhbmNlIG5vdCBpbiBDbGFzc1xuRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKXtcbiAgICBpZih0aGlzLmNvbnRleHQgaW5zdGFuY2VvZiBUaWNrZXIpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXIgPSBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lbnRyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=