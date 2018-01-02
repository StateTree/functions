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
	var ignoreIfAdded = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	_classCallCheck(this, TickEntry);

	this.context = context;
	this.listener = listener;
	this.callback = callback;
	this.priority = priority;
	this.ignoreIfAdded = ignoreIfAdded;
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestAnimationFrameId = NaN;
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

function isAddedAlready(entry, tickEntries) {
	// important to use for-loop
	// tickEntries grows dynamically by one of its entry
	// for example: let say we have one entry, and executing that entry might adds another entry
	// with map function we cant execute dynamically growing entries.
	for (var i = 0; i < tickEntries.length; i++) {
		var tickEntry = tickEntries[i];
		if (entry.context === tickEntry.context && entry.listener === tickEntry.listener) {
			return true;
		}
	}
	return false;
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
	var priority = tickEntry.priority,
	    callback = tickEntry.callback,
	    ignoreIfAdded = tickEntry.ignoreIfAdded;

	if (!priorityEntries[priority]) {
		priorityEntries[priority] = [];
		var _tickEntries = priorityEntries[priority];
		_tickEntries.push(tickEntry);
		return;
	}
	var tickEntries = priorityEntries[priority];
	if (ignoreIfAdded && isAddedAlready(tickEntry, tickEntries)) {
		callback && callback(true);
	} else {
		tickEntries.push(tickEntry);
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

TickManager.prototype.getMaxPriority = function () {
	return priorityEntries.length - 1;
};

var singletonInstance = new TickManager();

exports.default = singletonInstance;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlOGQwY2NkODg2ZWQ2YzU3OTFmYyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwiaWdub3JlSWZBZGRlZCIsInByb3RvdHlwZSIsImRpc3Bvc2UiLCJleGVjdXRlIiwiYWRkIiwiZ2V0TWF4UHJpb3JpdHkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsIk5hTiIsInByaW9yaXR5RW50cmllcyIsIm9uVGljayIsImluZGV4IiwibGVuZ3RoIiwidGlja0VudHJpZXMiLCJleGVjdXRlVGlja0VudHJpZXMiLCJpIiwidGlja0VudHJ5IiwiY2FsbCIsImlzQWRkZWRBbHJlYWR5IiwiZW50cnkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlRpY2tNYW5hZ2VyIiwic3RhcnQiLCJwdXNoIiwic3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2luZ2xldG9uSW5zdGFuY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LENBTkQ7O0FBU0FHLFlBQVlyQixTQUFaLENBQXNCd0IsSUFBdEIsR0FBNkIsWUFBWTtBQUN4QyxLQUFHTCxNQUFILEVBQVU7QUFDVEEsU0FBT00sb0JBQVAsQ0FBNEJwQix1QkFBNUI7QUFDQTtBQUNELENBSkQ7O0FBTUFnQixZQUFZckIsU0FBWixDQUFzQkksY0FBdEIsR0FBdUMsWUFBWTtBQUNsRCxRQUFPRyxnQkFBZ0JHLE1BQWhCLEdBQXlCLENBQWhDO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNZ0Isb0JBQW9CLElBQUlMLFdBQUosRUFBMUI7O2tCQUVlSyxpQiIsImZpbGUiOiJsaWIvdGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOGQwY2NkODg2ZWQ2YzU3OTFmYyIsImltcG9ydCBUaWNrZXIgZnJvbSAnLi9UaWNrRW50cnknO1xuXG5leHBvcnQgZGVmYXVsdCBUaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgbWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xuXG4vLyB0b0RvOiBzdXBwb3J0IGJvdGggY2FsbGJhY2sgYW5kIHByb21pc2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tFbnRyeVxue1xuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgXCJ0aGlzXCIgYXJndW1lbnQgZm9yIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBsaXN0ZW5lciwgY2FsbGJhY2sgPSBudWxsLCBwcmlvcml0eSA9IDAsIGlnbm9yZUlmQWRkZWQgPSBmYWxzZSlcblx0e1xuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5pZ25vcmVJZkFkZGVkID0gaWdub3JlSWZBZGRlZDtcblx0fVxuXG59XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKXtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cdG1hbmFnZXIuYWRkKHRoaXMpO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBtYW5hZ2VyLmdldE1heFByaW9yaXR5KCk7XG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9UaWNrRW50cnkuanMiLCJcbmxldCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IE5hTjtcbmNvbnN0IHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcblxuZnVuY3Rpb24gb25UaWNrKCl7XG5cdGZvcihsZXQgaW5kZXggPSAwIDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKXtcblx0XHRsZXQgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyl7XG5cdC8vIGltcG9ydGFudCB0byB1c2UgZm9yLWxvb3Bcblx0Ly8gdGlja0VudHJpZXMgZ3Jvd3MgZHluYW1pY2FsbHkgYnkgb25lIG9mIGl0cyBlbnRyeVxuXHQvLyBmb3IgZXhhbXBsZTogbGV0IHNheSB3ZSBoYXZlIG9uZSBlbnRyeSwgYW5kIGV4ZWN1dGluZyB0aGF0IGVudHJ5IG1pZ2h0IGFkZHMgYW5vdGhlciBlbnRyeVxuXHQvLyB3aXRoIG1hcCBmdW5jdGlvbiB3ZSBjYW50IGV4ZWN1dGUgZHluYW1pY2FsbHkgZ3Jvd2luZyBlbnRyaWVzLlxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGNvbnN0IHRpY2tFbnRyeSA9IHRpY2tFbnRyaWVzW2ldO1xuXHRcdHRpY2tFbnRyeS5saXN0ZW5lci5jYWxsKHRpY2tFbnRyeS5jb250ZXh0IHx8IHRpY2tFbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRpZiAodGlja0VudHJ5LmNhbGxiYWNrKSB7XG5cdFx0XHR0aWNrRW50cnkuY2FsbGJhY2suY2FsbCh0aWNrRW50cnkuY2FsbGJhY2tbJ3RoaXMnXSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGlzQWRkZWRBbHJlYWR5KGVudHJ5LHRpY2tFbnRyaWVzKXtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvcihsZXQgaSA9IDA7IGkgPCB0aWNrRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0Y29uc3QgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gdGlja0VudHJ5LmNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IHRpY2tFbnRyeS5saXN0ZW5lcil7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpe1xuXHRvblRpY2soKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcbn1cblxuY2xhc3MgVGlja01hbmFnZXIge1xuXHRjb25zdHJ1Y3Rvcigpe1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cdH1cbn1cblxuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHRjb25zdCB7IHByaW9yaXR5LCBjYWxsYmFjaywgaWdub3JlSWZBZGRlZCB9ID0gdGlja0VudHJ5O1xuXHRpZighcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSl7XG5cdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdGNvbnN0IHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0aWYoaWdub3JlSWZBZGRlZCAmJiBpc0FkZGVkQWxyZWFkeSh0aWNrRW50cnksdGlja0VudHJpZXMpKXtcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcblx0fSBlbHNlIHtcblx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH1cbn07XG5cblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG59O1xuXG5jb25zdCBzaW5nbGV0b25JbnN0YW5jZSA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25JbnN0YW5jZTtcblxuXG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL01hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9

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

	var ignoreIfAdded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	var _executeTriggerer = function _executeTriggerer() {
		var triggeredAgain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		var ticker = void 0;
		if (_this.executingLaterInNextTickCount === 0) {
			func.call(context);
			if (triggererCallback) {
				if (_this.executingLaterInNextTickCount === 0) {
					triggererCallback && triggererCallback(triggeredAgain);
				} else {
					ticker = new _ticker2.default(_this, triggererCallback, null, 3, ignoreIfAdded);
					ticker.execute();
				}
			}
		} else {
			ticker = new _ticker2.default(_this, _executeTriggerer, triggererCallback, 3, ignoreIfAdded);
			ticker.execute();
		}
	};
	_executeTriggerer();
};

Functions.prototype.addListener = function (context, func) {
	var executeLaterInNextTick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	var _this2 = this;

	var listenerCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	var ignoreIfAdded = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

	var entry = void 0;
	if (executeLaterInNextTick) {

		var tickerCallback = function tickerCallback() {
			var triggeredAgain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			_this2.executingLaterInNextTickCount = _this2.executingLaterInNextTickCount - 1;
			if (listenerCallback) {
				listenerCallback.call(listenerCallback['this'], triggeredAgain);
			}
			if (_this2.executingLaterInNextTickCount === 0) {
				_this2.triggerDoneNotifier && _this2.triggerDoneNotifier();
			}
		};
		var ticker = new _ticker2.default(context, func, tickerCallback, priority, ignoreIfAdded);
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
					var triggeredAgain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

					if (_this3.executingLaterInNextTickCount === 0) {
						callback && callback(triggeredAgain);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNGZiODkwNzA5ZWE4NWQxZmUyYiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJ0cmlnZ2VyRG9uZU5vdGlmaWVyIiwiZW50cmllcyIsImZyYW1lRW50cmllcyIsImV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IiwicHJvdG90eXBlIiwic2V0VHJpZ2dlckRvbmVOb3RpZmllciIsInJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIiLCJleGVjdXRlVHJpZ2dlcmVyIiwiY29udGV4dCIsImZ1bmMiLCJ0cmlnZ2VyZXJDYWxsYmFjayIsImlnbm9yZUlmQWRkZWQiLCJfZXhlY3V0ZVRyaWdnZXJlciIsInRyaWdnZXJlZEFnYWluIiwidGlja2VyIiwiY2FsbCIsImV4ZWN1dGUiLCJhZGRMaXN0ZW5lciIsImV4ZWN1dGVMYXRlckluTmV4dFRpY2siLCJwcmlvcml0eSIsImxpc3RlbmVyQ2FsbGJhY2siLCJlbnRyeSIsInRpY2tlckNhbGxiYWNrIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwiY2FsbGJhY2siLCJpIiwiZnJhbWVFbnRyeSIsImxpc3RlbmVyIiwiZGlzcG9zZSIsInRpY2tlckVudHJ5IiwiZGlzcG9zZURvbmVOb3RpZmllciIsImxlbmd0aCIsInRyaWdnZXJMaXN0ZW5lcnMiLCJlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJhcHBseSIsImVudHJ5SW5kZXgiLCJzcGxpY2UiLCJFbnRyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNB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QUFnQmUsS0FBaEIsRUFBc0I7QUFDL0MsT0FBSWYsTUFBTU8sUUFBVixFQUFvQjtBQUNuQixTQUFLekIsNkJBQUwsR0FBcUMsS0FBS0EsNkJBQUwsR0FBcUMsQ0FBMUU7QUFDQWtCLFVBQU1PLFFBQU4sQ0FBZVMsS0FBZixDQUFxQmhCLE1BQU1iLE9BQU4sSUFBaUJhLE1BQU1PLFFBQU4sQ0FBZSxNQUFmLENBQXRDO0FBQ0EsSUFIRCxNQUdPO0FBQ05NLDBCQUFzQlgsSUFBdEIsQ0FBMkJhLEtBQTNCO0FBQ0E7QUFDRCxHQVBELEVBT0csSUFQSDtBQVFBRix3QkFBc0JDLE9BQXRCLENBQThCLFVBQVNHLFVBQVQsRUFBb0I7QUFDakQsUUFBS3BDLFlBQUwsQ0FBa0JxQyxNQUFsQixDQUF5QkQsVUFBekIsRUFBb0MsQ0FBcEM7QUFDQSxHQUZELEVBRUcsSUFGSDtBQUdBLEVBWkQsTUFZTztBQUNOLE9BQUt0QyxtQkFBTCxJQUE0QixLQUFLQSxtQkFBTCxFQUE1QjtBQUNBO0FBQ0QsQ0E5QkQsQzs7Ozs7Ozs7Ozs7OztBQ3RHQTs7Ozs7Ozs7SUFFcUJ3QyxLLEdBQ2pCLGVBQVloQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEwQjtBQUFBOztBQUN0QixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLb0IsUUFBTCxHQUFnQm5CLElBQWhCO0FBQ0gsQzs7QUFHTDs7O2tCQVBxQitCLEs7QUFRckJBLE1BQU1wQyxTQUFOLENBQWdCeUIsT0FBaEIsR0FBMEIsWUFBVztBQUNqQyxRQUFHLEtBQUtyQixPQUFMLDRCQUFILEVBQWtDO0FBQzlCLGFBQUtBLE9BQUwsQ0FBYXFCLE9BQWI7QUFDSDtBQUNELFNBQUtyQixPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtvQixRQUFMLEdBQWdCLElBQWhCO0FBQ0gsQ0FORCxDIiwiZmlsZSI6ImxpYi9mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZ1bmN0aW9uc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI0ZmI4OTA3MDllYTg1ZDFmZTJiIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UaWNrRW50cnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX1RpY2tFbnRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaWNrRW50cnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfVGlja0VudHJ5Mi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyB0b0RvOiBzdXBwb3J0IGJvdGggY2FsbGJhY2sgYW5kIHByb21pc2VcbnZhciBUaWNrRW50cnkgPVxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIuXG4gKi9cbmZ1bmN0aW9uIFRpY2tFbnRyeShjb250ZXh0LCBsaXN0ZW5lcikge1xuXHR2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cdHZhciBwcmlvcml0eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcblx0dmFyIGlnbm9yZUlmQWRkZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdHRoaXMuaWdub3JlSWZBZGRlZCA9IGlnbm9yZUlmQWRkZWQ7XG59O1xuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRpY2tFbnRyeTtcblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcblx0X01hbmFnZXIyLmRlZmF1bHQuYWRkKHRoaXMpO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIF9NYW5hZ2VyMi5kZWZhdWx0LmdldE1heFByaW9yaXR5KCk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gTmFOO1xudmFyIHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcblxuZnVuY3Rpb24gb25UaWNrKCkge1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcykge1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrRW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBpc0FkZGVkQWxyZWFkeShlbnRyeSwgdGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0aWYgKGVudHJ5LmNvbnRleHQgPT09IHRpY2tFbnRyeS5jb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSB0aWNrRW50cnkubGlzdGVuZXIpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCkge1xuXHRvblRpY2soKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcbn1cblxudmFyIFRpY2tNYW5hZ2VyID0gZnVuY3Rpb24gVGlja01hbmFnZXIoKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrTWFuYWdlcik7XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSAwOyAvLyBmb3IgV2luZG93cyBFbnZcblx0dGhpcy5zdGFydCgpO1xufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5LFxuXHQgICAgY2FsbGJhY2sgPSB0aWNrRW50cnkuY2FsbGJhY2ssXG5cdCAgICBpZ25vcmVJZkFkZGVkID0gdGlja0VudHJ5Lmlnbm9yZUlmQWRkZWQ7XG5cblx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdHZhciBfdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdF90aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdGlmIChpZ25vcmVJZkFkZGVkICYmIGlzQWRkZWRBbHJlYWR5KHRpY2tFbnRyeSwgdGlja0VudHJpZXMpKSB7XG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHR9XG59O1xuXG4vLyBUb2RvOiBTdXBwb3J0IGZvciBOb2RlSlMgXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdC8vdG9kbzogTGVhcm46ICB0aGUgcHVycG9zZSBvZiB0aW1lc3RhbXBcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHR9XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHByaW9yaXR5RW50cmllcy5sZW5ndGggLSAxO1xufTtcblxudmFyIHNpbmdsZXRvbkluc3RhbmNlID0gbmV3IFRpY2tNYW5hZ2VyKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNpbmdsZXRvbkluc3RhbmNlO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0JsT0dRd1kyTmtPRGcyWldRMll6VTNPVEZtWXlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwxUnBZMnRGYm5SeWVTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VFdGdVlXZGxjaTVxY3lKZExDSnVZVzFsY3lJNld5SlVhV05yUlc1MGNua2lMQ0pqYjI1MFpYaDBJaXdpYkdsemRHVnVaWElpTENKallXeHNZbUZqYXlJc0luQnlhVzl5YVhSNUlpd2lhV2R1YjNKbFNXWkJaR1JsWkNJc0luQnliM1J2ZEhsd1pTSXNJbVJwYzNCdmMyVWlMQ0psZUdWamRYUmxJaXdpWVdSa0lpd2laMlYwVFdGNFVISnBiM0pwZEhraUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNJc0lrNWhUaUlzSW5CeWFXOXlhWFI1Ulc1MGNtbGxjeUlzSW05dVZHbGpheUlzSW1sdVpHVjRJaXdpYkdWdVozUm9JaXdpZEdsamEwVnVkSEpwWlhNaUxDSmxlR1ZqZFhSbFZHbGphMFZ1ZEhKcFpYTWlMQ0pwSWl3aWRHbGphMFZ1ZEhKNUlpd2lZMkZzYkNJc0ltbHpRV1JrWldSQmJISmxZV1I1SWl3aVpXNTBjbmtpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5SXNJbmRwYm1SdmR5SXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNJc0lsUnBZMnROWVc1aFoyVnlJaXdpYzNSaGNuUWlMQ0p3ZFhOb0lpd2ljM1J2Y0NJc0ltTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJaXdpYzJsdVoyeGxkRzl1U1c1emRHRnVZMlVpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3T3pzN096czdPenM3T3pzN08wRkROMFJCT3pzN096czdPenM3T3pzN096czdPenM3TzBGRFFVRTdPenM3T3pzN08wRkJSVUU3U1VGRGNVSkJMRk03UVVGRmNFSTdPenM3UVVGSlFTeHRRa0ZCV1VNc1QwRkJXaXhGUVVGeFFrTXNVVUZCY2tJc1JVRkRRVHRCUVVGQkxFdEJSQ3RDUXl4UlFVTXZRaXgxUlVGRU1FTXNTVUZETVVNN1FVRkJRU3hMUVVSblJFTXNVVUZEYUVRc2RVVkJSREpFTEVOQlF6TkVPMEZCUVVFc1MwRkVPRVJETEdGQlF6bEVMSFZGUVVRNFJTeExRVU01UlRzN1FVRkJRVHM3UVVGRFF5eE5RVUZMU2l4UFFVRk1MRWRCUVdWQkxFOUJRV1k3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ1FTeFJRVUZvUWp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSkJMRkZCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEUVN4TlFVRkxReXhoUVVGTUxFZEJRWEZDUVN4aFFVRnlRanRCUVVOQkxFTTdPMEZCU1VZN08ydENRV3BDY1VKTUxGTTdRVUZ0UW5KQ1FTeFZRVUZWVFN4VFFVRldMRU5CUVc5Q1F5eFBRVUZ3UWl4SFFVRTRRaXhaUVVGVk8wRkJRM1pETEUxQlFVdE9MRTlCUVV3c1IwRkJaU3hKUVVGbU8wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMElzU1VGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBFc1EwRk1SRHM3UVVGUFFVb3NWVUZCVlUwc1UwRkJWaXhEUVVGdlFrVXNUMEZCY0VJc1IwRkJPRUlzV1VGQlZUdEJRVU4yUXl4dFFrRkJVVU1zUjBGQlVpeERRVUZaTEVsQlFWbzdRVUZEUVN4RFFVWkVPenRCUVVsQlZDeFZRVUZWVFN4VFFVRldMRU5CUVc5Q1NTeGpRVUZ3UWl4SFFVRnhReXhaUVVGVk8wRkJRemxETEZGQlFVOHNhMEpCUVZGQkxHTkJRVklzUlVGQlVEdEJRVU5CTEVOQlJrUXNRenM3T3pzN096czdPenM3T3pzN08wRkRhRU5CTEVsQlFVbERMREJDUVVFd1FrTXNSMEZCT1VJN1FVRkRRU3hKUVVGTlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGRUxFVkJRVThzU1VGQlVDeEZRVUZoTEVsQlFXSXNSVUZCYlVJc1NVRkJia0lzUTBGQmVFSTdPMEZCUlVFc1UwRkJVME1zVFVGQlZDeEhRVUZwUWp0QlFVTm9RaXhOUVVGSkxFbEJRVWxETEZGQlFWRXNRMEZCYUVJc1JVRkJiMEpCTEZGQlFWRkdMR2RDUVVGblFrY3NUVUZCTlVNc1JVRkJiMFJFTEU5QlFYQkVMRVZCUVRSRU8wRkJRek5FTEUxQlFVbEZMR05CUVdOS0xHZENRVUZuUWtVc1MwRkJhRUlzUTBGQmJFSTdRVUZEUVN4TlFVRkhSU3hsUVVGbFFTeFpRVUZaUkN4TlFVRmFMRWRCUVhGQ0xFTkJRWFpETEVWQlFUQkRPMEZCUTNwRFJTeHpRa0ZCYlVKRUxGZEJRVzVDTzBGQlEwRTdRVUZEUVVvc2JVSkJRV2RDUlN4TFFVRm9RaXhKUVVGNVFpeEpRVUY2UWp0QlFVTkJPMEZCUTBRN1FVRkRSRHM3UVVGRlJDeFRRVUZUUnl4clFrRkJWQ3hEUVVFMFFrUXNWMEZCTlVJc1JVRkJkME03UVVGRGRrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGSkxFbEJRVWxGTEVsQlFVa3NRMEZCV2l4RlFVRmxRU3hKUVVGSlJpeFpRVUZaUkN4TlFVRXZRaXhGUVVGMVEwY3NSMEZCZGtNc1JVRkJNa003UVVGRE1VTXNUVUZCVFVNc1dVRkJXVWdzV1VGQldVVXNRMEZCV2l4RFFVRnNRanRCUVVOQlF5eFpRVUZWYkVJc1VVRkJWaXhEUVVGdFFtMUNMRWxCUVc1Q0xFTkJRWGRDUkN4VlFVRlZia0lzVDBGQlZpeEpRVUZ4UW0xQ0xGVkJRVlZzUWl4UlFVRldMRU5CUVcxQ0xFMUJRVzVDTEVOQlFUZERPMEZCUTBFc1RVRkJTV3RDTEZWQlFWVnFRaXhSUVVGa0xFVkJRWGRDTzBGQlEzWkNhVUlzWVVGQlZXcENMRkZCUVZZc1EwRkJiVUpyUWl4SlFVRnVRaXhEUVVGM1FrUXNWVUZCVldwQ0xGRkJRVllzUTBGQmJVSXNUVUZCYmtJc1EwRkJlRUk3UVVGRFFUdEJRVU5FTzBGQlEwUTdPMEZCUlVRc1UwRkJVMjFDTEdOQlFWUXNRMEZCZDBKRExFdEJRWGhDTEVWQlFUaENUaXhYUVVFNVFpeEZRVUV3UXp0QlFVTjZRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVa3NTVUZCU1VVc1NVRkJTU3hEUVVGYUxFVkJRV1ZCTEVsQlFVbEdMRmxCUVZsRUxFMUJRUzlDTEVWQlFYVkRSeXhIUVVGMlF5eEZRVUV5UXp0QlFVTXhReXhOUVVGTlF5eFpRVUZaU0N4WlFVRlpSU3hEUVVGYUxFTkJRV3hDTzBGQlEwRXNUVUZCUjBrc1RVRkJUWFJDTEU5QlFVNHNTMEZCYTBKdFFpeFZRVUZWYmtJc1QwRkJOVUlzU1VGQmRVTnpRaXhOUVVGTmNrSXNVVUZCVGl4TFFVRnRRbXRDTEZWQlFWVnNRaXhSUVVGMlJTeEZRVUZuUmp0QlFVTXZSU3hWUVVGUExFbEJRVkE3UVVGRFFUdEJRVU5FTzBGQlEwUXNVVUZCVHl4TFFVRlFPMEZCUTBFN08wRkJSVVFzVTBGQlUzTkNMRFpDUVVGVUxFZEJRWGRETzBGQlEzWkRWanRCUVVOQlNDd3lRa0ZCTUVKakxFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ1JpdzJRa0ZCTjBJc1EwRkJNVUk3UVVGRFFUczdTVUZGUzBjc1Z5eEhRVU5NTEhWQ1FVRmhPMEZCUVVFN08wRkJRMDVvUWl3eVFrRkJNRUlzUTBGQk1VSXNRMEZFVFN4RFFVTjFRanRCUVVNM1FpeE5RVUZMYVVJc1MwRkJURHRCUVVOT0xFTTdPMEZCU1VaRUxGbEJRVmx5UWl4VFFVRmFMRU5CUVhOQ1J5eEhRVUYwUWl4SFFVRTBRaXhWUVVGVlZ5eFRRVUZXTEVWQlFYRkNPMEZCUVVFc1MwRkRlRU5vUWl4UlFVUjNReXhIUVVOR1owSXNVMEZFUlN4RFFVTjRRMmhDTEZGQlJIZERPMEZCUVVFc1MwRkRPVUpFTEZGQlJEaENMRWRCUTBacFFpeFRRVVJGTEVOQlF6bENha0lzVVVGRU9FSTdRVUZCUVN4TFFVTndRa1VzWVVGRWIwSXNSMEZEUm1Vc1UwRkVSU3hEUVVOd1FtWXNZVUZFYjBJN08wRkJSV2hFTEV0QlFVY3NRMEZCUTFFc1owSkJRV2RDVkN4UlFVRm9RaXhEUVVGS0xFVkJRVGhDTzBGQlF6ZENVeXhyUWtGQlowSlVMRkZCUVdoQ0xFbEJRVFJDTEVWQlFUVkNPMEZCUTBFc1RVRkJUV0VzWlVGQlkwb3NaMEpCUVdkQ1ZDeFJRVUZvUWl4RFFVRndRanRCUVVOQllTeGxRVUZaV1N4SlFVRmFMRU5CUVdsQ1ZDeFRRVUZxUWp0QlFVTkJPMEZCUTBFN1FVRkRSQ3hMUVVGTlNDeGpRVUZqU2l4blFrRkJaMEpVTEZGQlFXaENMRU5CUVhCQ08wRkJRMEVzUzBGQlIwTXNhVUpCUVdsQ2FVSXNaVUZCWlVZc1UwRkJaaXhGUVVGNVFrZ3NWMEZCZWtJc1EwRkJjRUlzUlVGQk1FUTdRVUZEZWtSa0xHTkJRVmxCTEZOQlFWTXNTVUZCVkN4RFFVRmFPMEZCUTBFc1JVRkdSQ3hOUVVWUE8wRkJRMDVqTEdOQlFWbFpMRWxCUVZvc1EwRkJhVUpVTEZOQlFXcENPMEZCUTBFN1FVRkRSQ3hEUVdSRU96dEJRV2xDUVR0QlFVTkJUeXhaUVVGWmNrSXNVMEZCV2l4RFFVRnpRbk5DTEV0QlFYUkNMRWRCUVRoQ0xGbEJRVms3UVVGRGVrTXNTMEZCUjBnc1RVRkJTQ3hGUVVGVk8wRkJRMVE3UVVGRFFUdEJRVU5CWkN3MFFrRkJNRUpqTEU5QlFVOURMSEZDUVVGUUxFTkJRVFpDUml3MlFrRkJOMElzUTBGQk1VSTdRVUZEUVR0QlFVTkVMRU5CVGtRN08wRkJVMEZITEZsQlFWbHlRaXhUUVVGYUxFTkJRWE5DZDBJc1NVRkJkRUlzUjBGQk5rSXNXVUZCV1R0QlFVTjRReXhMUVVGSFRDeE5RVUZJTEVWQlFWVTdRVUZEVkVFc1UwRkJUMDBzYjBKQlFWQXNRMEZCTkVKd1FpeDFRa0ZCTlVJN1FVRkRRVHRCUVVORUxFTkJTa1E3TzBGQlRVRm5RaXhaUVVGWmNrSXNVMEZCV2l4RFFVRnpRa2tzWTBGQmRFSXNSMEZCZFVNc1dVRkJXVHRCUVVOc1JDeFJRVUZQUnl4blFrRkJaMEpITEUxQlFXaENMRWRCUVhsQ0xFTkJRV2hETzBGQlEwRXNRMEZHUkRzN1FVRkpRU3hKUVVGTlowSXNiMEpCUVc5Q0xFbEJRVWxNTEZkQlFVb3NSVUZCTVVJN08ydENRVVZsU3l4cFFpSXNJbVpwYkdVaU9pSnNhV0l2ZEdsamEyVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1hDSjBhV05yWlhKY0lpd2dXMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aWRHbGphMlZ5WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSW5ScFkydGxjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F3S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0JsT0dRd1kyTmtPRGcyWldRMll6VTNPVEZtWXlJc0ltbHRjRzl5ZENCVWFXTnJaWElnWm5KdmJTQW5MaTlVYVdOclJXNTBjbmtuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVWFXTnJaWEk3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSnBiWEJ2Y25RZ2JXRnVZV2RsY2lCbWNtOXRJQ2N1TDAxaGJtRm5aWEluTzF4dVhHNHZMeUIwYjBSdk9pQnpkWEJ3YjNKMElHSnZkR2dnWTJGc2JHSmhZMnNnWVc1a0lIQnliMjFwYzJWY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRlJwWTJ0RmJuUnllVnh1ZTF4dVhIUXZLaXBjYmx4MElDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlHTnZiblJsZUhRZ0xTQlVhR1VnWENKMGFHbHpYQ0lnWVhKbmRXMWxiblFnWm05eUlIUm9aU0JzYVhOMFpXNWxjaUJtZFc1amRHbHZiaTVjYmx4MElDb2dRSEJoY21GdElIdG1kVzVqZEdsdmJuMGdiR2x6ZEdWdVpYSXVYRzVjZENBcUwxeHVYSFJqYjI1emRISjFZM1J2Y2loamIyNTBaWGgwTENCc2FYTjBaVzVsY2l3Z1kyRnNiR0poWTJzZ1BTQnVkV3hzTENCd2NtbHZjbWwwZVNBOUlEQXNJR2xuYm05eVpVbG1RV1JrWldRZ1BTQm1ZV3h6WlNsY2JseDBlMXh1WEhSY2RIUm9hWE11WTI5dWRHVjRkQ0E5SUdOdmJuUmxlSFE3WEc1Y2RGeDBkR2hwY3k1c2FYTjBaVzVsY2lBOUlHeHBjM1JsYm1WeU8xeHVYSFJjZEhSb2FYTXVZMkZzYkdKaFkyc2dQU0JqWVd4c1ltRmphenRjYmx4MFhIUjBhR2x6TG5CeWFXOXlhWFI1SUQwZ2NISnBiM0pwZEhrN1hHNWNkRngwZEdocGN5NXBaMjV2Y21WSlprRmtaR1ZrSUQwZ2FXZHViM0psU1daQlpHUmxaRHRjYmx4MGZWeHVYRzU5WEc1Y2JpOHFMUzB0TFNCUWRXSnNhV044VUhKdmRHOTBlWEJsSUUxbGRHaHZaSE1nTFMwdEtpOWNibHh1VkdsamEwVnVkSEo1TG5CeWIzUnZkSGx3WlM1a2FYTndiM05sSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwZEdocGN5NWpiMjUwWlhoMElEMGdiblZzYkR0Y2JseDBkR2hwY3k1c2FYTjBaVzVsY2lBOUlHNTFiR3c3WEc1Y2RIUm9hWE11WTJGc2JHSmhZMnNnUFNCdWRXeHNPMXh1WEhSMGFHbHpMbkJ5YVc5eWFYUjVJRDBnYm5Wc2JEdGNibjA3WEc1Y2JsUnBZMnRGYm5SeWVTNXdjbTkwYjNSNWNHVXVaWGhsWTNWMFpTQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RHMWhibUZuWlhJdVlXUmtLSFJvYVhNcE8xeHVmVHRjYmx4dVZHbGphMFZ1ZEhKNUxuQnliM1J2ZEhsd1pTNW5aWFJOWVhoUWNtbHZjbWwwZVNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEhKbGRIVnliaUJ0WVc1aFoyVnlMbWRsZEUxaGVGQnlhVzl5YVhSNUtDazdYRzU5TzF4dVhHNWNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlVYVdOclJXNTBjbmt1YW5NaUxDSmNibXhsZENCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ0E5SUU1aFRqdGNibU52Ym5OMElIQnlhVzl5YVhSNVJXNTBjbWxsY3lBOUlGdHVkV3hzTENCdWRXeHNMQ0J1ZFd4c0xDQnVkV3hzWFR0Y2JseHVablZ1WTNScGIyNGdiMjVVYVdOcktDbDdYRzVjZEdadmNpaHNaWFFnYVc1a1pYZ2dQU0F3SURzZ2FXNWtaWGdnUENCd2NtbHZjbWwwZVVWdWRISnBaWE11YkdWdVozUm9PeUJwYm1SbGVDc3JLWHRjYmx4MFhIUnNaWFFnZEdsamEwVnVkSEpwWlhNZ1BTQndjbWx2Y21sMGVVVnVkSEpwWlhOYmFXNWtaWGhkTzF4dVhIUmNkR2xtS0hScFkydEZiblJ5YVdWeklDWW1JSFJwWTJ0RmJuUnlhV1Z6TG14bGJtZDBhQ0ErSURBcElIdGNibHgwWEhSY2RHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5aDBhV05yUlc1MGNtbGxjeWs3WEc1Y2RGeDBYSFF2TDBOc1pXRnlJSFJvWlcwZ2IyNWpaU0JsZUdWamRYUmxaRnh1WEhSY2RGeDBjSEpwYjNKcGRIbEZiblJ5YVdWelcybHVaR1Y0WFNBOUlHNTFiR3c3WEc1Y2RGeDBmVnh1WEhSOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdWNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3loMGFXTnJSVzUwY21sbGN5bDdYRzVjZEM4dklHbHRjRzl5ZEdGdWRDQjBieUIxYzJVZ1ptOXlMV3h2YjNCY2JseDBMeThnZEdsamEwVnVkSEpwWlhNZ1ozSnZkM01nWkhsdVlXMXBZMkZzYkhrZ1lua2diMjVsSUc5bUlHbDBjeUJsYm5SeWVWeHVYSFF2THlCbWIzSWdaWGhoYlhCc1pUb2diR1YwSUhOaGVTQjNaU0JvWVhabElHOXVaU0JsYm5SeWVTd2dZVzVrSUdWNFpXTjFkR2x1WnlCMGFHRjBJR1Z1ZEhKNUlHMXBaMmgwSUdGa1pITWdZVzV2ZEdobGNpQmxiblJ5ZVZ4dVhIUXZMeUIzYVhSb0lHMWhjQ0JtZFc1amRHbHZiaUIzWlNCallXNTBJR1Y0WldOMWRHVWdaSGx1WVcxcFkyRnNiSGtnWjNKdmQybHVaeUJsYm5SeWFXVnpMbHh1WEhSbWIzSW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHbGphMFZ1ZEhKcFpYTXViR1Z1WjNSb095QnBLeXNwZTF4dVhIUmNkR052Ym5OMElIUnBZMnRGYm5SeWVTQTlJSFJwWTJ0RmJuUnlhV1Z6VzJsZE8xeHVYSFJjZEhScFkydEZiblJ5ZVM1c2FYTjBaVzVsY2k1allXeHNLSFJwWTJ0RmJuUnllUzVqYjI1MFpYaDBJSHg4SUhScFkydEZiblJ5ZVM1c2FYTjBaVzVsY2xzbmRHaHBjeWRkS1R0Y2JseDBYSFJwWmlBb2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcktTQjdYRzVjZEZ4MFhIUjBhV05yUlc1MGNua3VZMkZzYkdKaFkyc3VZMkZzYkNoMGFXTnJSVzUwY25rdVkyRnNiR0poWTJ0YkozUm9hWE1uWFNrN1hHNWNkRngwZlZ4dVhIUjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHbHpRV1JrWldSQmJISmxZV1I1S0dWdWRISjVMSFJwWTJ0RmJuUnlhV1Z6S1h0Y2JseDBMeThnYVcxd2IzSjBZVzUwSUhSdklIVnpaU0JtYjNJdGJHOXZjRnh1WEhRdkx5QjBhV05yUlc1MGNtbGxjeUJuY205M2N5QmtlVzVoYldsallXeHNlU0JpZVNCdmJtVWdiMllnYVhSeklHVnVkSEo1WEc1Y2RDOHZJR1p2Y2lCbGVHRnRjR3hsT2lCc1pYUWdjMkY1SUhkbElHaGhkbVVnYjI1bElHVnVkSEo1TENCaGJtUWdaWGhsWTNWMGFXNW5JSFJvWVhRZ1pXNTBjbmtnYldsbmFIUWdZV1JrY3lCaGJtOTBhR1Z5SUdWdWRISjVYRzVjZEM4dklIZHBkR2dnYldGd0lHWjFibU4wYVc5dUlIZGxJR05oYm5RZ1pYaGxZM1YwWlNCa2VXNWhiV2xqWVd4c2VTQm5jbTkzYVc1bklHVnVkSEpwWlhNdVhHNWNkR1p2Y2loc1pYUWdhU0E5SURBN0lHa2dQQ0IwYVdOclJXNTBjbWxsY3k1c1pXNW5kR2c3SUdrckt5bDdYRzVjZEZ4MFkyOXVjM1FnZEdsamEwVnVkSEo1SUQwZ2RHbGphMFZ1ZEhKcFpYTmJhVjA3WEc1Y2RGeDBhV1lvWlc1MGNua3VZMjl1ZEdWNGRDQTlQVDBnZEdsamEwVnVkSEo1TG1OdmJuUmxlSFFnSmlZZ1pXNTBjbmt1YkdsemRHVnVaWElnUFQwOUlIUnBZMnRGYm5SeWVTNXNhWE4wWlc1bGNpbDdYRzVjZEZ4MFhIUnlaWFIxY200Z2RISjFaVHRjYmx4MFhIUjlYRzVjZEgxY2JseDBjbVYwZFhKdUlHWmhiSE5sTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlncGUxeHVYSFJ2YmxScFkyc29LVHRjYmx4MGNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FnUFNCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVU5oYkd4aVlXTnJLVHRjYm4xY2JseHVZMnhoYzNNZ1ZHbGphMDFoYm1GblpYSWdlMXh1WEhSamIyNXpkSEoxWTNSdmNpZ3BlMXh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDQTlJREE3SUM4dklHWnZjaUJYYVc1a2IzZHpJRVZ1ZGx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMEtDazdYRzVjZEgxY2JuMWNibHh1WEc1VWFXTnJUV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVZV1JrSUQwZ1puVnVZM1JwYjI0Z0tIUnBZMnRGYm5SeWVTa2dlMXh1WEhSamIyNXpkQ0I3SUhCeWFXOXlhWFI1TENCallXeHNZbUZqYXl3Z2FXZHViM0psU1daQlpHUmxaQ0I5SUQwZ2RHbGphMFZ1ZEhKNU8xeHVYSFJwWmlnaGNISnBiM0pwZEhsRmJuUnlhV1Z6VzNCeWFXOXlhWFI1WFNsN1hHNWNkRngwY0hKcGIzSnBkSGxGYm5SeWFXVnpXM0J5YVc5eWFYUjVYU0E5SUZ0ZE8xeHVYSFJjZEdOdmJuTjBJSFJwWTJ0RmJuUnlhV1Z6SUQwZ2NISnBiM0pwZEhsRmJuUnlhV1Z6VzNCeWFXOXlhWFI1WFR0Y2JseDBYSFIwYVdOclJXNTBjbWxsY3k1d2RYTm9LSFJwWTJ0RmJuUnllU2s3WEc1Y2RGeDBjbVYwZFhKdU8xeHVYSFI5WEc1Y2RHTnZibk4wSUhScFkydEZiblJ5YVdWeklEMGdjSEpwYjNKcGRIbEZiblJ5YVdWelczQnlhVzl5YVhSNVhUdGNibHgwYVdZb2FXZHViM0psU1daQlpHUmxaQ0FtSmlCcGMwRmtaR1ZrUVd4eVpXRmtlU2gwYVdOclJXNTBjbmtzZEdsamEwVnVkSEpwWlhNcEtYdGNibHgwWEhSallXeHNZbUZqYXlBbUppQmpZV3hzWW1GamF5aDBjblZsS1R0Y2JseDBmU0JsYkhObElIdGNibHgwWEhSMGFXTnJSVzUwY21sbGN5NXdkWE5vS0hScFkydEZiblJ5ZVNrN1hHNWNkSDFjYm4wN1hHNWNibHh1THk4Z1ZHOWtiem9nVTNWd2NHOXlkQ0JtYjNJZ1RtOWtaVXBUSUZ4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbk4wWVhKMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUnBaaWgzYVc1a2IzY3BlMXh1WEhSY2RDOHZJSGRwYkd3Z2NtVmpaV2wyWlhNZ2RHbHRaWE4wWVcxd0lHRnpJR0Z5WjNWdFpXNTBYRzVjZEZ4MEx5OTBiMlJ2T2lCTVpXRnliam9nSUhSb1pTQndkWEp3YjNObElHOW1JSFJwYldWemRHRnRjRnh1WEhSY2RISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSUQwZ2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTaHlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWs3WEc1Y2RIMWNibjA3WEc1Y2JseHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG5OMGIzQWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkR2xtS0hkcGJtUnZkeWw3WEc1Y2RGeDBkMmx1Wkc5M0xtTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxLSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0tUdGNibHgwZlZ4dWZUdGNibHh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExtZGxkRTFoZUZCeWFXOXlhWFI1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSeVpYUjFjbTRnY0hKcGIzSnBkSGxGYm5SeWFXVnpMbXhsYm1kMGFDQXRJREU3WEc1OU8xeHVYRzVqYjI1emRDQnphVzVuYkdWMGIyNUpibk4wWVc1alpTQTlJRzVsZHlCVWFXTnJUV0Z1WVdkbGNpZ3BPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0J6YVc1bmJHVjBiMjVKYm5OMFlXNWpaVHRjYmx4dVhHNWNibHh1WEc1Y2JseHVYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMDFoYm1GblpYSXVhbk1pWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IodHJpZ2dlckRvbmVOb3RpZmllcikge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciA9IHRyaWdnZXJEb25lTm90aWZpZXI7XG4gICAgfVxufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnNldFRyaWdnZXJEb25lTm90aWZpZXIgPSBmdW5jdGlvbih0cmlnZ2VyRG9uZU5vdGlmaWVyKXtcblx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gdHJpZ2dlckRvbmVOb3RpZmllcjtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVUcmlnZ2VyRG9uZU5vdGlmaWVyID0gZnVuY3Rpb24oKXtcblx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gbnVsbDtcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgcmVzcG9uc2libGUgZm9yIGluaXRpYXRpbmcgdHJpZ2dlclxuLy8gaWYgY2FsbGVkIHVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBtYWtlIGEgc3luY2VkIGVmZmVjdCBvZiBleGVjdXRpb25cbkZ1bmN0aW9ucy5wcm90b3R5cGUuZXhlY3V0ZVRyaWdnZXJlciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIHRyaWdnZXJlckNhbGxiYWNrLCBpZ25vcmVJZkFkZGVkID0gZmFsc2Upe1xuXHRjb25zdCBfZXhlY3V0ZVRyaWdnZXJlciA9ICh0cmlnZ2VyZWRBZ2FpbiA9IGZhbHNlKT0+e1xuXHRcdGxldCB0aWNrZXI7XG5cdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRmdW5jLmNhbGwoY29udGV4dCk7XG5cdFx0XHRpZih0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdFx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRcdHRyaWdnZXJlckNhbGxiYWNrICYmIHRyaWdnZXJlckNhbGxiYWNrKHRyaWdnZXJlZEFnYWluKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIHRyaWdnZXJlckNhbGxiYWNrLCBudWxsLCAzLCBpZ25vcmVJZkFkZGVkKTtcblx0XHRcdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgX2V4ZWN1dGVUcmlnZ2VyZXIsIHRyaWdnZXJlckNhbGxiYWNrLCAzLCBpZ25vcmVJZkFkZGVkKTtcblx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0fVxuXHR9O1xuXHRfZXhlY3V0ZVRyaWdnZXJlcigpO1xufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIGV4ZWN1dGVMYXRlckluTmV4dFRpY2sgPSBmYWxzZSwgcHJpb3JpdHkgPSAwLCBsaXN0ZW5lckNhbGxiYWNrID0gbnVsbCwgaWdub3JlSWZBZGRlZCA9IGZhbHNlKXtcbiAgICBsZXQgZW50cnk7XG4gICAgaWYgKGV4ZWN1dGVMYXRlckluTmV4dFRpY2spe1xuXG5cdCAgICAgY29uc3QgdGlja2VyQ2FsbGJhY2sgPSAodHJpZ2dlcmVkQWdhaW4gPSBmYWxzZSkgPT4ge1xuXHRcdCAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCAtIDE7XG5cdFx0ICAgIGlmKGxpc3RlbmVyQ2FsbGJhY2spe1xuXHRcdFx0ICAgIGxpc3RlbmVyQ2FsbGJhY2suY2FsbChsaXN0ZW5lckNhbGxiYWNrWyd0aGlzJ10sIHRyaWdnZXJlZEFnYWluKVxuXHRcdCAgICB9XG5cdFx0ICAgIGlmKCB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdCAgICB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgJiYgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllcigpO1xuXHRcdCAgICB9XG5cdCAgICB9O1xuICAgICAgICBjb25zdCB0aWNrZXIgPSBuZXcgVGlja2VyKGNvbnRleHQsIGZ1bmMsIHRpY2tlckNhbGxiYWNrLCBwcmlvcml0eSwgaWdub3JlSWZBZGRlZCk7XG5cdCAgICBlbnRyeSA9IG5ldyBFbnRyeSh0aWNrZXIsIHRpY2tlci5leGVjdXRlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMucHVzaChlbnRyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyeSA9IG5ldyBFbnRyeShjb250ZXh0LCBmdW5jKTtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGNhbGxiYWNrID0gbnVsbCl7XG5cdGxldCBlbnRyeSwgaTtcblx0Y29uc3Qge2ZyYW1lRW50cmllcywgZW50cmllc30gPSB0aGlzO1xuXG5cdGZvcihpID0gMDsgaSA8IGZyYW1lRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdCAgICBjb25zdCBmcmFtZUVudHJ5ID0gIGZyYW1lRW50cmllc1tpXTtcblx0XHRlbnRyeSA9IGZyYW1lRW50cnkuY29udGV4dDtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRmcmFtZUVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdH0gZWxzZSB7IC8vIGZyYW1lIHRyaWdnZXIgTGlzdGVuZXJzIGFyZSBzdGlsbCBydW5uaW5nXG5cdFx0XHRcdGxldCB0aWNrZXJFbnRyeTtcblx0XHRcdFx0Y29uc3QgZGlzcG9zZURvbmVOb3RpZmllciA9ICh0cmlnZ2VyZWRBZ2FpbiA9IGZhbHNlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHRyaWdnZXJlZEFnYWluKTtcblx0XHRcdFx0XHR9IGVsc2V7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGZvcihpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGVudHJ5ID0gZW50cmllc1tpXTtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnRyaWdnZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGVudHJpZXNJbmRleFRvRGlzcG9zZSA9IFtdO1xuXG5cdHRoaXMuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG4gICAgICAgIGlmIChlbnRyeS5saXN0ZW5lcikge1xuICAgICAgICAgICAgZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuICAgICAgICB0aGlzLmVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG4gICAgfSwgdGhpcyk7XG5cblxuXHRpZih0aGlzLmZyYW1lRW50cmllcy5sZW5ndGggPiAwKXtcblx0XHR0aGlzLmZyYW1lRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG5cdFx0XHRpZiAoZW50cnkubGlzdGVuZXIpIHtcblx0XHRcdFx0dGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgKyAxO1xuXHRcdFx0XHRlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuXHRcdFx0dGhpcy5mcmFtZUVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG5cdFx0fSwgdGhpcylcblx0fSBlbHNlIHtcblx0XHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgJiYgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyKCk7XG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2Z1bmN0aW9ucy5qcyIsImltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZ1bmMpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuYztcbiAgICB9XG59XG5cbi8vIE1ldGhvZCBhdmFpbGFibGUgb25seSBvbiBFbnRyeSBpbnN0YW5jZSBub3QgaW4gQ2xhc3NcbkVudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCl7XG4gICAgaWYodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgVGlja2VyKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVyID0gbnVsbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZW50cnkuanMiXSwic291cmNlUm9vdCI6IiJ9