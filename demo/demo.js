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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(1);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function immediateFunction() {
    console.log("I am Immediate Function");
    console.log(functions.executingLaterInNextTickCount);
}

function frameFunction() {
    console.log("I am Frame Function", functions.executingLaterInNextTickCount);
}

function frameFunctionSecond() {
    console.log("I am Frame Function Second", functions.executingLaterInNextTickCount);
}

function listenersDone() {
    console.log("All Function executed", functions.executingLaterInNextTickCount);
}

var functions = new _lib2.default(listenersDone);
functions.addListener(window, frameFunctionSecond, true, 1);
functions.addListener(window, frameFunction, true);
functions.addListener(window, immediateFunction);

console.log("trigger 1");

functions.triggerListeners();

// 2 entries
functions.removeListener(window, frameFunctionSecond, functions.triggerListeners.bind(functions));
console.log("Remove frame function");

// 3rd entry
functions.removeListener(window, immediateFunction);
console.log("Remove Immediate function");

console.log("trigger 2");
functions.triggerListeners();

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNGZiODkwNzA5ZWE4NWQxZmUyYiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9ucyIsInRyaWdnZXJEb25lTm90aWZpZXIiLCJlbnRyaWVzIiwiZnJhbWVFbnRyaWVzIiwiZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQiLCJwcm90b3R5cGUiLCJzZXRUcmlnZ2VyRG9uZU5vdGlmaWVyIiwicmVtb3ZlVHJpZ2dlckRvbmVOb3RpZmllciIsImV4ZWN1dGVUcmlnZ2VyZXIiLCJjb250ZXh0IiwiZnVuYyIsInRyaWdnZXJlckNhbGxiYWNrIiwiaWdub3JlSWZBZGRlZCIsIl9leGVjdXRlVHJpZ2dlcmVyIiwidHJpZ2dlcmVkQWdhaW4iLCJ0aWNrZXIiLCJjYWxsIiwiZXhlY3V0ZSIsImFkZExpc3RlbmVyIiwiZXhlY3V0ZUxhdGVySW5OZXh0VGljayIsInByaW9yaXR5IiwibGlzdGVuZXJDYWxsYmFjayIsImVudHJ5IiwidGlja2VyQ2FsbGJhY2siLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJjYWxsYmFjayIsImkiLCJmcmFtZUVudHJ5IiwibGlzdGVuZXIiLCJkaXNwb3NlIiwidGlja2VyRW50cnkiLCJkaXNwb3NlRG9uZU5vdGlmaWVyIiwibGVuZ3RoIiwidHJpZ2dlckxpc3RlbmVycyIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIsIkVudHJ5IiwiaW1tZWRpYXRlRnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZnVuY3Rpb25zIiwiZnJhbWVGdW5jdGlvbiIsImZyYW1lRnVuY3Rpb25TZWNvbmQiLCJsaXN0ZW5lcnNEb25lIiwid2luZG93IiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4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LEciLCJmaWxlIjoiZGVtby9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW5jdGlvbnNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNGZiODkwNzA5ZWE4NWQxZmUyYiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlja2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGlja0VudHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9UaWNrRW50cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGlja0VudHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RpY2tFbnRyeTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gdG9Ebzogc3VwcG9ydCBib3RoIGNhbGxiYWNrIGFuZCBwcm9taXNlXG52YXIgVGlja0VudHJ5ID1cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgXCJ0aGlzXCIgYXJndW1lbnQgZm9yIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyLlxuICovXG5mdW5jdGlvbiBUaWNrRW50cnkoY29udGV4dCwgbGlzdGVuZXIpIHtcblx0dmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXHR2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG5cdHZhciBpZ25vcmVJZkFkZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcblxuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja0VudHJ5KTtcblxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHR0aGlzLmlnbm9yZUlmQWRkZWQgPSBpZ25vcmVJZkFkZGVkO1xufTtcblxuLyotLS0tIFB1YmxpY3xQcm90b3R5cGUgTWV0aG9kcyAtLS0qL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUaWNrRW50cnk7XG5UaWNrRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG5cdF9NYW5hZ2VyMi5kZWZhdWx0LmFkZCh0aGlzKTtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZ2V0TWF4UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBfTWFuYWdlcjIuZGVmYXVsdC5nZXRNYXhQcmlvcml0eSgpO1xufTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IE5hTjtcbnZhciBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbmZ1bmN0aW9uIG9uVGljaygpIHtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNBZGRlZEFscmVhZHkoZW50cnksIHRpY2tFbnRyaWVzKSB7XG5cdC8vIGltcG9ydGFudCB0byB1c2UgZm9yLWxvb3Bcblx0Ly8gdGlja0VudHJpZXMgZ3Jvd3MgZHluYW1pY2FsbHkgYnkgb25lIG9mIGl0cyBlbnRyeVxuXHQvLyBmb3IgZXhhbXBsZTogbGV0IHNheSB3ZSBoYXZlIG9uZSBlbnRyeSwgYW5kIGV4ZWN1dGluZyB0aGF0IGVudHJ5IG1pZ2h0IGFkZHMgYW5vdGhlciBlbnRyeVxuXHQvLyB3aXRoIG1hcCBmdW5jdGlvbiB3ZSBjYW50IGV4ZWN1dGUgZHluYW1pY2FsbHkgZ3Jvd2luZyBlbnRyaWVzLlxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyeSA9IHRpY2tFbnRyaWVzW2ldO1xuXHRcdGlmIChlbnRyeS5jb250ZXh0ID09PSB0aWNrRW50cnkuY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gdGlja0VudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpIHtcblx0b25UaWNrKCk7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG59XG5cbnZhciBUaWNrTWFuYWdlciA9IGZ1bmN0aW9uIFRpY2tNYW5hZ2VyKCkge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja01hbmFnZXIpO1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsgLy8gZm9yIFdpbmRvd3MgRW52XG5cdHRoaXMuc3RhcnQoKTtcbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdHZhciBwcmlvcml0eSA9IHRpY2tFbnRyeS5wcmlvcml0eSxcblx0ICAgIGNhbGxiYWNrID0gdGlja0VudHJ5LmNhbGxiYWNrLFxuXHQgICAgaWdub3JlSWZBZGRlZCA9IHRpY2tFbnRyeS5pZ25vcmVJZkFkZGVkO1xuXG5cdGlmICghcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSkge1xuXHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHR2YXIgX3RpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0XHRfdGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRpZiAoaWdub3JlSWZBZGRlZCAmJiBpc0FkZGVkQWxyZWFkeSh0aWNrRW50cnksIHRpY2tFbnRyaWVzKSkge1xuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fVxufTtcblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0Ly8gd2lsbCByZWNlaXZlcyB0aW1lc3RhbXAgYXMgYXJndW1lbnRcblx0XHQvL3RvZG86IExlYXJuOiAgdGhlIHB1cnBvc2Ugb2YgdGltZXN0YW1wXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuZ2V0TWF4UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBwcmlvcml0eUVudHJpZXMubGVuZ3RoIC0gMTtcbn07XG5cbnZhciBzaW5nbGV0b25JbnN0YW5jZSA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaW5nbGV0b25JbnN0YW5jZTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NCbE9HUXdZMk5rT0RnMlpXUTJZelUzT1RGbVl5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMVJwWTJ0RmJuUnllUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlRXRnVZV2RsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpVYVdOclJXNTBjbmtpTENKamIyNTBaWGgwSWl3aWJHbHpkR1Z1WlhJaUxDSmpZV3hzWW1GamF5SXNJbkJ5YVc5eWFYUjVJaXdpYVdkdWIzSmxTV1pCWkdSbFpDSXNJbkJ5YjNSdmRIbHdaU0lzSW1ScGMzQnZjMlVpTENKbGVHVmpkWFJsSWl3aVlXUmtJaXdpWjJWMFRXRjRVSEpwYjNKcGRIa2lMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDSXNJazVoVGlJc0luQnlhVzl5YVhSNVJXNTBjbWxsY3lJc0ltOXVWR2xqYXlJc0ltbHVaR1Y0SWl3aWJHVnVaM1JvSWl3aWRHbGphMFZ1ZEhKcFpYTWlMQ0psZUdWamRYUmxWR2xqYTBWdWRISnBaWE1pTENKcElpd2lkR2xqYTBWdWRISjVJaXdpWTJGc2JDSXNJbWx6UVdSa1pXUkJiSEpsWVdSNUlpd2laVzUwY25raUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheUlzSW5kcGJtUnZkeUlzSW5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTSXNJbFJwWTJ0TllXNWhaMlZ5SWl3aWMzUmhjblFpTENKd2RYTm9JaXdpYzNSdmNDSXNJbU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSWl3aWMybHVaMnhsZEc5dVNXNXpkR0Z1WTJVaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096czdPenM3T3pzN096czdPMEZETjBSQk96czdPenM3T3pzN096czdPenM3T3pzN08wRkRRVUU3T3pzN096czdPMEZCUlVFN1NVRkRjVUpCTEZNN1FVRkZjRUk3T3pzN1FVRkpRU3h0UWtGQldVTXNUMEZCV2l4RlFVRnhRa01zVVVGQmNrSXNSVUZEUVR0QlFVRkJMRXRCUkN0Q1F5eFJRVU12UWl4MVJVRkVNRU1zU1VGRE1VTTdRVUZCUVN4TFFVUm5SRU1zVVVGRGFFUXNkVVZCUkRKRUxFTkJRek5FTzBGQlFVRXNTMEZFT0VSRExHRkJRemxFTEhWRlFVUTRSU3hMUVVNNVJUczdRVUZCUVRzN1FVRkRReXhOUVVGTFNpeFBRVUZNTEVkQlFXVkJMRTlCUVdZN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWtFc1VVRkJhRUk3UVVGRFFTeE5RVUZMUXl4aFFVRk1MRWRCUVhGQ1FTeGhRVUZ5UWp0QlFVTkJMRU03TzBGQlNVWTdPMnRDUVdwQ2NVSk1MRk03UVVGdFFuSkNRU3hWUVVGVlRTeFRRVUZXTEVOQlFXOUNReXhQUVVGd1FpeEhRVUU0UWl4WlFVRlZPMEZCUTNaRExFMUJRVXRPTEU5QlFVd3NSMEZCWlN4SlFVRm1PMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWl4SlFVRm9RanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ0xFbEJRV2hDTzBGQlEwRXNRMEZNUkRzN1FVRlBRVW9zVlVGQlZVMHNVMEZCVml4RFFVRnZRa1VzVDBGQmNFSXNSMEZCT0VJc1dVRkJWVHRCUVVOMlF5eHRRa0ZCVVVNc1IwRkJVaXhEUVVGWkxFbEJRVm83UVVGRFFTeERRVVpFT3p0QlFVbEJWQ3hWUVVGVlRTeFRRVUZXTEVOQlFXOUNTU3hqUVVGd1FpeEhRVUZ4UXl4WlFVRlZPMEZCUXpsRExGRkJRVThzYTBKQlFWRkJMR05CUVZJc1JVRkJVRHRCUVVOQkxFTkJSa1FzUXpzN096czdPenM3T3pzN096czdPMEZEYUVOQkxFbEJRVWxETERCQ1FVRXdRa01zUjBGQk9VSTdRVUZEUVN4SlFVRk5ReXhyUWtGQmEwSXNRMEZCUXl4SlFVRkVMRVZCUVU4c1NVRkJVQ3hGUVVGaExFbEJRV0lzUlVGQmJVSXNTVUZCYmtJc1EwRkJlRUk3TzBGQlJVRXNVMEZCVTBNc1RVRkJWQ3hIUVVGcFFqdEJRVU5vUWl4TlFVRkpMRWxCUVVsRExGRkJRVkVzUTBGQmFFSXNSVUZCYjBKQkxGRkJRVkZHTEdkQ1FVRm5Ra2NzVFVGQk5VTXNSVUZCYjBSRUxFOUJRWEJFTEVWQlFUUkVPMEZCUXpORUxFMUJRVWxGTEdOQlFXTktMR2RDUVVGblFrVXNTMEZCYUVJc1EwRkJiRUk3UVVGRFFTeE5RVUZIUlN4bFFVRmxRU3haUVVGWlJDeE5RVUZhTEVkQlFYRkNMRU5CUVhaRExFVkJRVEJETzBGQlEzcERSU3h6UWtGQmJVSkVMRmRCUVc1Q08wRkJRMEU3UVVGRFFVb3NiVUpCUVdkQ1JTeExRVUZvUWl4SlFVRjVRaXhKUVVGNlFqdEJRVU5CTzBGQlEwUTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFJ5eHJRa0ZCVkN4RFFVRTBRa1FzVjBGQk5VSXNSVUZCZDBNN1FVRkRka003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkpMRWxCUVVsRkxFbEJRVWtzUTBGQldpeEZRVUZsUVN4SlFVRkpSaXhaUVVGWlJDeE5RVUV2UWl4RlFVRjFRMGNzUjBGQmRrTXNSVUZCTWtNN1FVRkRNVU1zVFVGQlRVTXNXVUZCV1Vnc1dVRkJXVVVzUTBGQldpeERRVUZzUWp0QlFVTkJReXhaUVVGVmJFSXNVVUZCVml4RFFVRnRRbTFDTEVsQlFXNUNMRU5CUVhkQ1JDeFZRVUZWYmtJc1QwRkJWaXhKUVVGeFFtMUNMRlZCUVZWc1FpeFJRVUZXTEVOQlFXMUNMRTFCUVc1Q0xFTkJRVGRETzBGQlEwRXNUVUZCU1d0Q0xGVkJRVlZxUWl4UlFVRmtMRVZCUVhkQ08wRkJRM1pDYVVJc1lVRkJWV3BDTEZGQlFWWXNRMEZCYlVKclFpeEpRVUZ1UWl4RFFVRjNRa1FzVlVGQlZXcENMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCZUVJN1FVRkRRVHRCUVVORU8wRkJRMFE3TzBGQlJVUXNVMEZCVTIxQ0xHTkJRVlFzUTBGQmQwSkRMRXRCUVhoQ0xFVkJRVGhDVGl4WFFVRTVRaXhGUVVFd1F6dEJRVU42UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVWtzU1VGQlNVVXNTVUZCU1N4RFFVRmFMRVZCUVdWQkxFbEJRVWxHTEZsQlFWbEVMRTFCUVM5Q0xFVkJRWFZEUnl4SFFVRjJReXhGUVVFeVF6dEJRVU14UXl4TlFVRk5ReXhaUVVGWlNDeFpRVUZaUlN4RFFVRmFMRU5CUVd4Q08wRkJRMEVzVFVGQlIwa3NUVUZCVFhSQ0xFOUJRVTRzUzBGQmEwSnRRaXhWUVVGVmJrSXNUMEZCTlVJc1NVRkJkVU56UWl4TlFVRk5ja0lzVVVGQlRpeExRVUZ0UW10Q0xGVkJRVlZzUWl4UlFVRjJSU3hGUVVGblJqdEJRVU12UlN4VlFVRlBMRWxCUVZBN1FVRkRRVHRCUVVORU8wRkJRMFFzVVVGQlR5eExRVUZRTzBGQlEwRTdPMEZCUlVRc1UwRkJVM05DTERaQ1FVRlVMRWRCUVhkRE8wRkJRM1pEVmp0QlFVTkJTQ3d5UWtGQk1FSmpMRTlCUVU5RExIRkNRVUZRTEVOQlFUWkNSaXcyUWtGQk4wSXNRMEZCTVVJN1FVRkRRVHM3U1VGRlMwY3NWeXhIUVVOTUxIVkNRVUZoTzBGQlFVRTdPMEZCUTA1b1Fpd3lRa0ZCTUVJc1EwRkJNVUlzUTBGRVRTeERRVU4xUWp0QlFVTTNRaXhOUVVGTGFVSXNTMEZCVER0QlFVTk9MRU03TzBGQlNVWkVMRmxCUVZseVFpeFRRVUZhTEVOQlFYTkNSeXhIUVVGMFFpeEhRVUUwUWl4VlFVRlZWeXhUUVVGV0xFVkJRWEZDTzBGQlFVRXNTMEZEZUVOb1FpeFJRVVIzUXl4SFFVTkdaMElzVTBGRVJTeERRVU40UTJoQ0xGRkJSSGRETzBGQlFVRXNTMEZET1VKRUxGRkJSRGhDTEVkQlEwWnBRaXhUUVVSRkxFTkJRemxDYWtJc1VVRkVPRUk3UVVGQlFTeExRVU53UWtVc1lVRkViMElzUjBGRFJtVXNVMEZFUlN4RFFVTndRbVlzWVVGRWIwSTdPMEZCUldoRUxFdEJRVWNzUTBGQlExRXNaMEpCUVdkQ1ZDeFJRVUZvUWl4RFFVRktMRVZCUVRoQ08wRkJRemRDVXl4clFrRkJaMEpVTEZGQlFXaENMRWxCUVRSQ0xFVkJRVFZDTzBGQlEwRXNUVUZCVFdFc1pVRkJZMG9zWjBKQlFXZENWQ3hSUVVGb1FpeERRVUZ3UWp0QlFVTkJZU3hsUVVGWldTeEpRVUZhTEVOQlFXbENWQ3hUUVVGcVFqdEJRVU5CTzBGQlEwRTdRVUZEUkN4TFFVRk5TQ3hqUVVGalNpeG5Ra0ZCWjBKVUxGRkJRV2hDTEVOQlFYQkNPMEZCUTBFc1MwRkJSME1zYVVKQlFXbENhVUlzWlVGQlpVWXNVMEZCWml4RlFVRjVRa2dzVjBGQmVrSXNRMEZCY0VJc1JVRkJNRVE3UVVGRGVrUmtMR05CUVZsQkxGTkJRVk1zU1VGQlZDeERRVUZhTzBGQlEwRXNSVUZHUkN4TlFVVlBPMEZCUTA1akxHTkJRVmxaTEVsQlFWb3NRMEZCYVVKVUxGTkJRV3BDTzBGQlEwRTdRVUZEUkN4RFFXUkVPenRCUVdsQ1FUdEJRVU5CVHl4WlFVRlpja0lzVTBGQldpeERRVUZ6UW5OQ0xFdEJRWFJDTEVkQlFUaENMRmxCUVZrN1FVRkRla01zUzBGQlIwZ3NUVUZCU0N4RlFVRlZPMEZCUTFRN1FVRkRRVHRCUVVOQlpDdzBRa0ZCTUVKakxFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ1JpdzJRa0ZCTjBJc1EwRkJNVUk3UVVGRFFUdEJRVU5FTEVOQlRrUTdPMEZCVTBGSExGbEJRVmx5UWl4VFFVRmFMRU5CUVhOQ2QwSXNTVUZCZEVJc1IwRkJOa0lzV1VGQldUdEJRVU40UXl4TFFVRkhUQ3hOUVVGSUxFVkJRVlU3UVVGRFZFRXNVMEZCVDAwc2IwSkJRVkFzUTBGQk5FSndRaXgxUWtGQk5VSTdRVUZEUVR0QlFVTkVMRU5CU2tRN08wRkJUVUZuUWl4WlFVRlpja0lzVTBGQldpeERRVUZ6UWtrc1kwRkJkRUlzUjBGQmRVTXNXVUZCV1R0QlFVTnNSQ3hSUVVGUFJ5eG5Ra0ZCWjBKSExFMUJRV2hDTEVkQlFYbENMRU5CUVdoRE8wRkJRMEVzUTBGR1JEczdRVUZKUVN4SlFVRk5aMElzYjBKQlFXOUNMRWxCUVVsTUxGZEJRVW9zUlVGQk1VSTdPMnRDUVVWbFN5eHBRaUlzSW1acGJHVWlPaUpzYVdJdmRHbGphMlZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0owYVdOclpYSmNJaXdnVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lkR2xqYTJWeVhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0luUnBZMnRsY2x3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlGeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBd0tUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NCbE9HUXdZMk5rT0RnMlpXUTJZelUzT1RGbVl5SXNJbWx0Y0c5eWRDQlVhV05yWlhJZ1puSnZiU0FuTGk5VWFXTnJSVzUwY25rbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlVhV05yWlhJN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZhVzVrWlhndWFuTWlMQ0pwYlhCdmNuUWdiV0Z1WVdkbGNpQm1jbTl0SUNjdUwwMWhibUZuWlhJbk8xeHVYRzR2THlCMGIwUnZPaUJ6ZFhCd2IzSjBJR0p2ZEdnZ1kyRnNiR0poWTJzZ1lXNWtJSEJ5YjIxcGMyVmNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZScFkydEZiblJ5ZVZ4dWUxeHVYSFF2S2lwY2JseDBJQ29nUUhCaGNtRnRJSHR2WW1wbFkzUjlJR052Ym5SbGVIUWdMU0JVYUdVZ1hDSjBhR2x6WENJZ1lYSm5kVzFsYm5RZ1ptOXlJSFJvWlNCc2FYTjBaVzVsY2lCbWRXNWpkR2x2Ymk1Y2JseDBJQ29nUUhCaGNtRnRJSHRtZFc1amRHbHZibjBnYkdsemRHVnVaWEl1WEc1Y2RDQXFMMXh1WEhSamIyNXpkSEoxWTNSdmNpaGpiMjUwWlhoMExDQnNhWE4wWlc1bGNpd2dZMkZzYkdKaFkyc2dQU0J1ZFd4c0xDQndjbWx2Y21sMGVTQTlJREFzSUdsbmJtOXlaVWxtUVdSa1pXUWdQU0JtWVd4elpTbGNibHgwZTF4dVhIUmNkSFJvYVhNdVkyOXVkR1Y0ZENBOUlHTnZiblJsZUhRN1hHNWNkRngwZEdocGN5NXNhWE4wWlc1bGNpQTlJR3hwYzNSbGJtVnlPMXh1WEhSY2RIUm9hWE11WTJGc2JHSmhZMnNnUFNCallXeHNZbUZqYXp0Y2JseDBYSFIwYUdsekxuQnlhVzl5YVhSNUlEMGdjSEpwYjNKcGRIazdYRzVjZEZ4MGRHaHBjeTVwWjI1dmNtVkpaa0ZrWkdWa0lEMGdhV2R1YjNKbFNXWkJaR1JsWkR0Y2JseDBmVnh1WEc1OVhHNWNiaThxTFMwdExTQlFkV0pzYVdOOFVISnZkRzkwZVhCbElFMWxkR2h2WkhNZ0xTMHRLaTljYmx4dVZHbGphMFZ1ZEhKNUxuQnliM1J2ZEhsd1pTNWthWE53YjNObElEMGdablZ1WTNScGIyNG9LWHRjYmx4MGRHaHBjeTVqYjI1MFpYaDBJRDBnYm5Wc2JEdGNibHgwZEdocGN5NXNhWE4wWlc1bGNpQTlJRzUxYkd3N1hHNWNkSFJvYVhNdVkyRnNiR0poWTJzZ1BTQnVkV3hzTzF4dVhIUjBhR2x6TG5CeWFXOXlhWFI1SUQwZ2JuVnNiRHRjYm4wN1hHNWNibFJwWTJ0RmJuUnllUzV3Y205MGIzUjVjR1V1WlhobFkzVjBaU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkRzFoYm1GblpYSXVZV1JrS0hSb2FYTXBPMXh1ZlR0Y2JseHVWR2xqYTBWdWRISjVMbkJ5YjNSdmRIbHdaUzVuWlhSTllYaFFjbWx2Y21sMGVTQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RISmxkSFZ5YmlCdFlXNWhaMlZ5TG1kbGRFMWhlRkJ5YVc5eWFYUjVLQ2s3WEc1OU8xeHVYRzVjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5VWFXTnJSVzUwY25rdWFuTWlMQ0pjYm14bGRDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNBOUlFNWhUanRjYm1OdmJuTjBJSEJ5YVc5eWFYUjVSVzUwY21sbGN5QTlJRnR1ZFd4c0xDQnVkV3hzTENCdWRXeHNMQ0J1ZFd4c1hUdGNibHh1Wm5WdVkzUnBiMjRnYjI1VWFXTnJLQ2w3WEc1Y2RHWnZjaWhzWlhRZ2FXNWtaWGdnUFNBd0lEc2dhVzVrWlhnZ1BDQndjbWx2Y21sMGVVVnVkSEpwWlhNdWJHVnVaM1JvT3lCcGJtUmxlQ3NyS1h0Y2JseDBYSFJzWlhRZ2RHbGphMFZ1ZEhKcFpYTWdQU0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJhVzVrWlhoZE8xeHVYSFJjZEdsbUtIUnBZMnRGYm5SeWFXVnpJQ1ltSUhScFkydEZiblJ5YVdWekxteGxibWQwYUNBK0lEQXBJSHRjYmx4MFhIUmNkR1Y0WldOMWRHVlVhV05yUlc1MGNtbGxjeWgwYVdOclJXNTBjbWxsY3lrN1hHNWNkRngwWEhRdkwwTnNaV0Z5SUhSb1pXMGdiMjVqWlNCbGVHVmpkWFJsWkZ4dVhIUmNkRngwY0hKcGIzSnBkSGxGYm5SeWFXVnpXMmx1WkdWNFhTQTlJRzUxYkd3N1hHNWNkRngwZlZ4dVhIUjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5aDBhV05yUlc1MGNtbGxjeWw3WEc1Y2RDOHZJR2x0Y0c5eWRHRnVkQ0IwYnlCMWMyVWdabTl5TFd4dmIzQmNibHgwTHk4Z2RHbGphMFZ1ZEhKcFpYTWdaM0p2ZDNNZ1pIbHVZVzFwWTJGc2JIa2dZbmtnYjI1bElHOW1JR2wwY3lCbGJuUnllVnh1WEhRdkx5Qm1iM0lnWlhoaGJYQnNaVG9nYkdWMElITmhlU0IzWlNCb1lYWmxJRzl1WlNCbGJuUnllU3dnWVc1a0lHVjRaV04xZEdsdVp5QjBhR0YwSUdWdWRISjVJRzFwWjJoMElHRmtaSE1nWVc1dmRHaGxjaUJsYm5SeWVWeHVYSFF2THlCM2FYUm9JRzFoY0NCbWRXNWpkR2x2YmlCM1pTQmpZVzUwSUdWNFpXTjFkR1VnWkhsdVlXMXBZMkZzYkhrZ1ozSnZkMmx1WnlCbGJuUnlhV1Z6TGx4dVhIUm1iM0lvYkdWMElHa2dQU0F3T3lCcElEd2dkR2xqYTBWdWRISnBaWE11YkdWdVozUm9PeUJwS3lzcGUxeHVYSFJjZEdOdmJuTjBJSFJwWTJ0RmJuUnllU0E5SUhScFkydEZiblJ5YVdWelcybGRPMXh1WEhSY2RIUnBZMnRGYm5SeWVTNXNhWE4wWlc1bGNpNWpZV3hzS0hScFkydEZiblJ5ZVM1amIyNTBaWGgwSUh4OElIUnBZMnRGYm5SeWVTNXNhWE4wWlc1bGNsc25kR2hwY3lkZEtUdGNibHgwWEhScFppQW9kR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJLU0I3WEc1Y2RGeDBYSFIwYVdOclJXNTBjbmt1WTJGc2JHSmhZMnN1WTJGc2JDaDBhV05yUlc1MGNua3VZMkZzYkdKaFkydGJKM1JvYVhNblhTazdYRzVjZEZ4MGZWeHVYSFI5WEc1OVhHNWNibVoxYm1OMGFXOXVJR2x6UVdSa1pXUkJiSEpsWVdSNUtHVnVkSEo1TEhScFkydEZiblJ5YVdWektYdGNibHgwTHk4Z2FXMXdiM0owWVc1MElIUnZJSFZ6WlNCbWIzSXRiRzl2Y0Z4dVhIUXZMeUIwYVdOclJXNTBjbWxsY3lCbmNtOTNjeUJrZVc1aGJXbGpZV3hzZVNCaWVTQnZibVVnYjJZZ2FYUnpJR1Z1ZEhKNVhHNWNkQzh2SUdadmNpQmxlR0Z0Y0d4bE9pQnNaWFFnYzJGNUlIZGxJR2hoZG1VZ2IyNWxJR1Z1ZEhKNUxDQmhibVFnWlhobFkzVjBhVzVuSUhSb1lYUWdaVzUwY25rZ2JXbG5hSFFnWVdSa2N5QmhibTkwYUdWeUlHVnVkSEo1WEc1Y2RDOHZJSGRwZEdnZ2JXRndJR1oxYm1OMGFXOXVJSGRsSUdOaGJuUWdaWGhsWTNWMFpTQmtlVzVoYldsallXeHNlU0JuY205M2FXNW5JR1Z1ZEhKcFpYTXVYRzVjZEdadmNpaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFXTnJSVzUwY21sbGN5NXNaVzVuZEdnN0lHa3JLeWw3WEc1Y2RGeDBZMjl1YzNRZ2RHbGphMFZ1ZEhKNUlEMGdkR2xqYTBWdWRISnBaWE5iYVYwN1hHNWNkRngwYVdZb1pXNTBjbmt1WTI5dWRHVjRkQ0E5UFQwZ2RHbGphMFZ1ZEhKNUxtTnZiblJsZUhRZ0ppWWdaVzUwY25rdWJHbHpkR1Z1WlhJZ1BUMDlJSFJwWTJ0RmJuUnllUzVzYVhOMFpXNWxjaWw3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdkSEoxWlR0Y2JseDBYSFI5WEc1Y2RIMWNibHgwY21WMGRYSnVJR1poYkhObE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5Z3BlMXh1WEhSdmJsUnBZMnNvS1R0Y2JseDBjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRZ1BTQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05yS1R0Y2JuMWNibHh1WTJ4aGMzTWdWR2xqYTAxaGJtRm5aWElnZTF4dVhIUmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ0E5SURBN0lDOHZJR1p2Y2lCWGFXNWtiM2R6SUVWdWRseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBLQ2s3WEc1Y2RIMWNibjFjYmx4dVhHNVVhV05yVFdGdVlXZGxjaTV3Y205MGIzUjVjR1V1WVdSa0lEMGdablZ1WTNScGIyNGdLSFJwWTJ0RmJuUnllU2tnZTF4dVhIUmpiMjV6ZENCN0lIQnlhVzl5YVhSNUxDQmpZV3hzWW1GamF5d2dhV2R1YjNKbFNXWkJaR1JsWkNCOUlEMGdkR2xqYTBWdWRISjVPMXh1WEhScFppZ2hjSEpwYjNKcGRIbEZiblJ5YVdWelczQnlhVzl5YVhSNVhTbDdYRzVjZEZ4MGNISnBiM0pwZEhsRmJuUnlhV1Z6VzNCeWFXOXlhWFI1WFNBOUlGdGRPMXh1WEhSY2RHTnZibk4wSUhScFkydEZiblJ5YVdWeklEMGdjSEpwYjNKcGRIbEZiblJ5YVdWelczQnlhVzl5YVhSNVhUdGNibHgwWEhSMGFXTnJSVzUwY21sbGN5NXdkWE5vS0hScFkydEZiblJ5ZVNrN1hHNWNkRngwY21WMGRYSnVPMXh1WEhSOVhHNWNkR052Ym5OMElIUnBZMnRGYm5SeWFXVnpJRDBnY0hKcGIzSnBkSGxGYm5SeWFXVnpXM0J5YVc5eWFYUjVYVHRjYmx4MGFXWW9hV2R1YjNKbFNXWkJaR1JsWkNBbUppQnBjMEZrWkdWa1FXeHlaV0ZrZVNoMGFXTnJSVzUwY25rc2RHbGphMFZ1ZEhKcFpYTXBLWHRjYmx4MFhIUmpZV3hzWW1GamF5QW1KaUJqWVd4c1ltRmpheWgwY25WbEtUdGNibHgwZlNCbGJITmxJSHRjYmx4MFhIUjBhV05yUlc1MGNtbGxjeTV3ZFhOb0tIUnBZMnRGYm5SeWVTazdYRzVjZEgxY2JuMDdYRzVjYmx4dUx5OGdWRzlrYnpvZ1UzVndjRzl5ZENCbWIzSWdUbTlrWlVwVElGeHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG5OMFlYSjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJwWmloM2FXNWtiM2NwZTF4dVhIUmNkQzh2SUhkcGJHd2djbVZqWldsMlpYTWdkR2x0WlhOMFlXMXdJR0Z6SUdGeVozVnRaVzUwWEc1Y2RGeDBMeTkwYjJSdk9pQk1aV0Z5YmpvZ0lIUm9aU0J3ZFhKd2IzTmxJRzltSUhScGJXVnpkR0Z0Y0Z4dVhIUmNkSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2h5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlrN1hHNWNkSDFjYm4wN1hHNWNibHh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExuTjBiM0FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEdsbUtIZHBibVJ2ZHlsN1hHNWNkRngwZDJsdVpHOTNMbU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsS0hKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtLVHRjYmx4MGZWeHVmVHRjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbWRsZEUxaGVGQnlhVzl5YVhSNUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUnlaWFIxY200Z2NISnBiM0pwZEhsRmJuUnlhV1Z6TG14bGJtZDBhQ0F0SURFN1hHNTlPMXh1WEc1amIyNXpkQ0J6YVc1bmJHVjBiMjVKYm5OMFlXNWpaU0E5SUc1bGR5QlVhV05yVFdGdVlXZGxjaWdwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCemFXNW5iR1YwYjI1SmJuTjBZVzVqWlR0Y2JseHVYRzVjYmx4dVhHNWNibHh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDAxaGJtRm5aWEl1YW5NaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aWNrZXIvbGliL3RpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBGdW5jdGlvbnMgZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IEVudHJ5IGZyb20gJy4vZW50cnknO1xuaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKHRyaWdnZXJEb25lTm90aWZpZXIpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSB0cmlnZ2VyRG9uZU5vdGlmaWVyO1xuICAgIH1cbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5zZXRUcmlnZ2VyRG9uZU5vdGlmaWVyID0gZnVuY3Rpb24odHJpZ2dlckRvbmVOb3RpZmllcil7XG5cdHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciA9IHRyaWdnZXJEb25lTm90aWZpZXI7XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlVHJpZ2dlckRvbmVOb3RpZmllciA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciA9IG51bGw7XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IHJlc3BvbnNpYmxlIGZvciBpbml0aWF0aW5nIHRyaWdnZXJcbi8vIGlmIGNhbGxlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgbWFrZSBhIHN5bmNlZCBlZmZlY3Qgb2YgZXhlY3V0aW9uXG5GdW5jdGlvbnMucHJvdG90eXBlLmV4ZWN1dGVUcmlnZ2VyZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCB0cmlnZ2VyZXJDYWxsYmFjaywgaWdub3JlSWZBZGRlZCA9IGZhbHNlKXtcblx0Y29uc3QgX2V4ZWN1dGVUcmlnZ2VyZXIgPSAodHJpZ2dlcmVkQWdhaW4gPSBmYWxzZSk9Pntcblx0XHRsZXQgdGlja2VyO1xuXHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0ZnVuYy5jYWxsKGNvbnRleHQpO1xuXHRcdFx0aWYodHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0XHR0cmlnZ2VyZXJDYWxsYmFjayAmJiB0cmlnZ2VyZXJDYWxsYmFjayh0cmlnZ2VyZWRBZ2Fpbik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCB0cmlnZ2VyZXJDYWxsYmFjaywgbnVsbCwgMywgaWdub3JlSWZBZGRlZCk7XG5cdFx0XHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIF9leGVjdXRlVHJpZ2dlcmVyLCB0cmlnZ2VyZXJDYWxsYmFjaywgMywgaWdub3JlSWZBZGRlZCk7XG5cdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdH1cblx0fTtcblx0X2V4ZWN1dGVUcmlnZ2VyZXIoKTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCBleGVjdXRlTGF0ZXJJbk5leHRUaWNrID0gZmFsc2UsIHByaW9yaXR5ID0gMCwgbGlzdGVuZXJDYWxsYmFjayA9IG51bGwsIGlnbm9yZUlmQWRkZWQgPSBmYWxzZSl7XG4gICAgbGV0IGVudHJ5O1xuICAgIGlmIChleGVjdXRlTGF0ZXJJbk5leHRUaWNrKXtcblxuXHQgICAgIGNvbnN0IHRpY2tlckNhbGxiYWNrID0gKHRyaWdnZXJlZEFnYWluID0gZmFsc2UpID0+IHtcblx0XHQgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgLSAxO1xuXHRcdCAgICBpZihsaXN0ZW5lckNhbGxiYWNrKXtcblx0XHRcdCAgICBsaXN0ZW5lckNhbGxiYWNrLmNhbGwobGlzdGVuZXJDYWxsYmFja1sndGhpcyddLCB0cmlnZ2VyZWRBZ2Fpbilcblx0XHQgICAgfVxuXHRcdCAgICBpZiggdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHQgICAgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyICYmICB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIoKTtcblx0XHQgICAgfVxuXHQgICAgfTtcbiAgICAgICAgY29uc3QgdGlja2VyID0gbmV3IFRpY2tlcihjb250ZXh0LCBmdW5jLCB0aWNrZXJDYWxsYmFjaywgcHJpb3JpdHksIGlnbm9yZUlmQWRkZWQpO1xuXHQgICAgZW50cnkgPSBuZXcgRW50cnkodGlja2VyLCB0aWNrZXIuZXhlY3V0ZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzLnB1c2goZW50cnkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoY29udGV4dCwgZnVuYyk7XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICB9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCxmdW5jLCBjYWxsYmFjayA9IG51bGwpe1xuXHRsZXQgZW50cnksIGk7XG5cdGNvbnN0IHtmcmFtZUVudHJpZXMsIGVudHJpZXN9ID0gdGhpcztcblxuXHRmb3IoaSA9IDA7IGkgPCBmcmFtZUVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHQgICAgY29uc3QgZnJhbWVFbnRyeSA9ICBmcmFtZUVudHJpZXNbaV07XG5cdFx0ZW50cnkgPSBmcmFtZUVudHJ5LmNvbnRleHQ7XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0ZnJhbWVFbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHR9IGVsc2UgeyAvLyBmcmFtZSB0cmlnZ2VyIExpc3RlbmVycyBhcmUgc3RpbGwgcnVubmluZ1xuXHRcdFx0XHRsZXQgdGlja2VyRW50cnk7XG5cdFx0XHRcdGNvbnN0IGRpc3Bvc2VEb25lTm90aWZpZXIgPSAodHJpZ2dlcmVkQWdhaW4gPSBmYWxzZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh0cmlnZ2VyZWRBZ2Fpbik7XG5cdFx0XHRcdFx0fSBlbHNle1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRmb3IoaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRlbnRyeSA9IGVudHJpZXNbaV07XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRlbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS50cmlnZ2VyTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UgPSBbXTtcblxuXHR0aGlzLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuICAgICAgICBpZiAoZW50cnkubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuICAgIH0sIHRoaXMpO1xuXG5cblx0aWYodGhpcy5mcmFtZUVudHJpZXMubGVuZ3RoID4gMCl7XG5cdFx0dGhpcy5mcmFtZUVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuXHRcdFx0aWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ICsgMTtcblx0XHRcdFx0ZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdHRoaXMuZnJhbWVFbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuXHRcdH0sIHRoaXMpXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyICYmIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllcigpO1xuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9mdW5jdGlvbnMuanMiLCJpbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmdW5jKXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmM7XG4gICAgfVxufVxuXG4vLyBNZXRob2QgYXZhaWxhYmxlIG9ubHkgb24gRW50cnkgaW5zdGFuY2Ugbm90IGluIENsYXNzXG5FbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpe1xuICAgIGlmKHRoaXMuY29udGV4dCBpbnN0YW5jZW9mIFRpY2tlcil7XG4gICAgICAgIHRoaXMuY29udGV4dC5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5saXN0ZW5lciA9IG51bGw7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2VudHJ5LmpzIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tIFwiLi8uLi9saWJcIjtcblxuZnVuY3Rpb24gaW1tZWRpYXRlRnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcIkkgYW0gSW1tZWRpYXRlIEZ1bmN0aW9uXCIpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9ucy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGZyYW1lRnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcIkkgYW0gRnJhbWUgRnVuY3Rpb25cIiwgZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gZnJhbWVGdW5jdGlvblNlY29uZCgpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBGcmFtZSBGdW5jdGlvbiBTZWNvbmRcIiwgZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuZXJzRG9uZSgpe1xuXHRjb25zb2xlLmxvZyhcIkFsbCBGdW5jdGlvbiBleGVjdXRlZFwiLCBmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5jb25zdCBmdW5jdGlvbnMgPSBuZXcgRnVuY3Rpb25zKGxpc3RlbmVyc0RvbmUpO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uU2Vjb25kLCB0cnVlLCAxKTtcbmZ1bmN0aW9ucy5hZGRMaXN0ZW5lcih3aW5kb3csZnJhbWVGdW5jdGlvbiwgdHJ1ZSApO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxpbW1lZGlhdGVGdW5jdGlvbik7XG5cbmNvbnNvbGUubG9nKFwidHJpZ2dlciAxXCIpO1xuXG5mdW5jdGlvbnMudHJpZ2dlckxpc3RlbmVycygpO1xuXG4vLyAyIGVudHJpZXNcbmZ1bmN0aW9ucy5yZW1vdmVMaXN0ZW5lcih3aW5kb3csZnJhbWVGdW5jdGlvblNlY29uZCwgZnVuY3Rpb25zLnRyaWdnZXJMaXN0ZW5lcnMuYmluZChmdW5jdGlvbnMpKTtcbmNvbnNvbGUubG9nKFwiUmVtb3ZlIGZyYW1lIGZ1bmN0aW9uXCIpO1xuXG4vLyAzcmQgZW50cnlcbmZ1bmN0aW9ucy5yZW1vdmVMaXN0ZW5lcih3aW5kb3csaW1tZWRpYXRlRnVuY3Rpb24pO1xuY29uc29sZS5sb2coXCJSZW1vdmUgSW1tZWRpYXRlIGZ1bmN0aW9uXCIpO1xuXG5jb25zb2xlLmxvZyhcInRyaWdnZXIgMlwiKTtcbmZ1bmN0aW9ucy50cmlnZ2VyTGlzdGVuZXJzKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==