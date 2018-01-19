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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
	this.executionCount = 0;
};

/*---- Public|Prototype Methods ---*/

exports.default = TickEntry;
TickEntry.prototype.dispose = function () {
	TickEntry.stackDebug && console.log("TickEntry dispose:", this);
	this.context = null;
	this.listener = null;
	this.callback = null;
	this.priority = null;
	this.executionCount = NaN;
};

TickEntry.prototype.execute = function () {
	TickEntry.stackDebug && console.log("manager.add: ", this);
	_Manager2.default.add(this);
};

TickEntry.HIGH = 0;
TickEntry.NORMAL = 1;
TickEntry.LOW = 2;

TickEntry.allowedTickCount = 100;
TickEntry.debug = false;
TickEntry.stackDebug = false;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TickEntry = __webpack_require__(0);

var _TickEntry2 = _interopRequireDefault(_TickEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TickEntry2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TickEntry = __webpack_require__(0);

var _TickEntry2 = _interopRequireDefault(_TickEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestAnimationFrameId = 0; // for Windows Env

//[0-HIGH, 1-NORMAL, 2-LOW]
var priorityEntries = [null, null, null];
var waitEntries = null;

var tickCount = 0;
var isExecuting = false;

function onTick() {
	tickCount++;
	if (_TickEntry2.default.debug) {
		console.log("Tick count: ", tickCount);
	}
	if (tickCount < _TickEntry2.default.allowedTickCount) {
		executePriorityEntries();
		moveWaitingEntriesForExecution();
		if (arePriorityEntriesEmpty()) {
			stop();
			return false;
		}
	} else {
		console.warn("Animation frame loop executed to its set limit: ", _TickEntry2.default.allowedTickCount);
		if (_TickEntry2.default.debug) {
			console.log("Entries: ", priorityEntries[0], priorityEntries[1], priorityEntries[2], waitEntries);
		}
		reset();
		return false;
	}
	return true;
}

function stop() {
	tickCount = 0;
	isExecuting = false;
	tickManager.stop();
}

function reset() {
	stop();
	priorityEntries = [null, null, null];
	waitEntries = null;
}

function moveWaitingEntriesForExecution() {
	var entriesCount = waitEntries ? waitEntries.length : 0;
	if (waitEntries && entriesCount > 0) {
		for (var index = 0; index < entriesCount; index++) {
			var tickEntry = waitEntries[index];
			var priority = tickEntry.priority;

			if (!priorityEntries[priority]) {
				priorityEntries[priority] = [];
			}
			var tickEntries = priorityEntries[priority];
			tickEntries.push(tickEntry);
		}
	}
	waitEntries = null;
}

function executePriorityEntries() {
	isExecuting = true;
	for (var index = 0; index < priorityEntries.length; index++) {
		var tickEntries = priorityEntries[index];
		if (tickEntries && tickEntries.length > 0) {
			executeTickEntries(tickEntries);
			//Clear them once executed
			priorityEntries[index] = null;
		}
	}
	isExecuting = false;
}

function executeTickEntries(tickEntries) {
	// important to use for-loop
	// tickEntries grows dynamically by one of its entry
	// for example: let say we have one entry, and executing that entry might adds another entry
	// with map function we cant execute dynamically growing entries.
	for (var i = 0; i < tickEntries.length; i++) {
		var tickEntry = tickEntries[i];
		_TickEntry2.default.stackDebug && console.log("TickManager: executeTickEntries : for ", i, tickEntry);
		tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);

		if (tickEntry.callback) {
			tickEntry.callback.call(tickEntry.callback['this']);
		}
		tickEntry.executionCount++;
		if (_TickEntry2.default.debug && tickEntry.executionCount > 1) {
			console.log("Executed more than once: ", tickEntry);
		}
	}
}

function arePriorityEntriesEmpty() {
	for (var index = 0; index < priorityEntries.length; index++) {
		var tickEntries = priorityEntries[index];
		if (tickEntries && tickEntries.length > 0) {
			return false;
		}
	}
	return true;
}

function requestAnimationFrameCallback() {
	var shouldContinue = onTick();
	if (shouldContinue) {
		requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
	}
}

var TickManager = function TickManager() {
	_classCallCheck(this, TickManager);
};

TickManager.prototype.add = function (tickEntry) {
	_TickEntry2.default.stackDebug && console.log("TickManager: add : ", tickEntry);
	if (arePriorityEntriesEmpty()) {
		this.start();
	}
	if (isExecuting) {
		_TickEntry2.default.stackDebug && console.log("TickManager: add :  wait ");
		if (!waitEntries) {
			waitEntries = [];
		}
		waitEntries.push(tickEntry);
	} else {
		var priority = tickEntry.priority;

		if (!priorityEntries[priority]) {
			_TickEntry2.default.stackDebug && console.log("TickManager: add : in " + priority + " : new Array");
			priorityEntries[priority] = [];
		}
		_TickEntry2.default.stackDebug && console.log("TickManager: add : in " + priority + " : push");
		var tickEntries = priorityEntries[priority];
		tickEntries.push(tickEntry);
	}
};

// Todo: Support for NodeJS 
TickManager.prototype.start = function () {
	if (window) {
		// will receives timestamp as argument
		requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
		_TickEntry2.default.stackDebug && console.log("TickManager: start : ", requestAnimationFrameId);
	}
};

TickManager.prototype.stop = function () {
	if (window) {
		_TickEntry2.default.stackDebug && console.log("TickManager: stop : ", requestAnimationFrameId);
		window.cancelAnimationFrame(requestAnimationFrameId);
	}
};

var tickManager = new TickManager();

// singletonInstanace
exports.default = tickManager;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3OTE4MDdmNDk3NDZlODZhZjQ4MyIsIndlYnBhY2s6Ly8vLi9saWIvVGlja0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwiZXhlY3V0aW9uQ291bnQiLCJwcm90b3R5cGUiLCJkaXNwb3NlIiwic3RhY2tEZWJ1ZyIsImNvbnNvbGUiLCJsb2ciLCJOYU4iLCJleGVjdXRlIiwiYWRkIiwiSElHSCIsIk5PUk1BTCIsIkxPVyIsImFsbG93ZWRUaWNrQ291bnQiLCJkZWJ1ZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwicHJpb3JpdHlFbnRyaWVzIiwid2FpdEVudHJpZXMiLCJ0aWNrQ291bnQiLCJpc0V4ZWN1dGluZyIsIm9uVGljayIsImV4ZWN1dGVQcmlvcml0eUVudHJpZXMiLCJtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24iLCJhcmVQcmlvcml0eUVudHJpZXNFbXB0eSIsInN0b3AiLCJ3YXJuIiwicmVzZXQiLCJ0aWNrTWFuYWdlciIsImVudHJpZXNDb3VudCIsImxlbmd0aCIsImluZGV4IiwidGlja0VudHJ5IiwidGlja0VudHJpZXMiLCJwdXNoIiwiZXhlY3V0ZVRpY2tFbnRyaWVzIiwiaSIsImNhbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayIsInNob3VsZENvbnRpbnVlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiVGlja01hbmFnZXIiLCJzdGFydCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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VSxZQUFZdkMsU0FBWixDQUFzQndDLEtBQXRCLEdBQThCLFlBQVk7QUFDekMsS0FBR0gsTUFBSCxFQUFVO0FBQ1Q7QUFDQXhCLDRCQUEwQndCLE9BQU9DLHFCQUFQLENBQTZCSCw2QkFBN0IsQ0FBMUI7QUFDQSxzQkFBVWpDLFVBQVYsSUFBd0JDLFFBQVFDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ1MsdUJBQXJDLENBQXhCO0FBQ0E7QUFDRCxDQU5EOztBQVNBMEIsWUFBWXZDLFNBQVosQ0FBc0JzQixJQUF0QixHQUE2QixZQUFZO0FBQ3hDLEtBQUdlLE1BQUgsRUFBVTtBQUNULHNCQUFVbkMsVUFBVixJQUF3QkMsUUFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DUyx1QkFBcEMsQ0FBeEI7QUFDQXdCLFNBQU9JLG9CQUFQLENBQTRCNUIsdUJBQTVCO0FBQ0E7QUFDRCxDQUxEOztBQU9BLElBQU1ZLGNBQWMsSUFBSWMsV0FBSixFQUFwQjs7QUFFQTtrQkFDZWQsVyIsImZpbGUiOiJsaWIvdGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3OTE4MDdmNDk3NDZlODZhZjQ4MyIsImltcG9ydCBtYW5hZ2VyIGZyb20gJy4vTWFuYWdlcic7XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja0VudHJ5XG57XG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIGxpc3RlbmVyLCBjYWxsYmFjayA9IG51bGwsIHByaW9yaXR5ID0gMClcblx0e1xuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5leGVjdXRpb25Db3VudCA9IDA7XG5cdH1cblxufVxuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCl7XG5cdFRpY2tFbnRyeS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja0VudHJ5IGRpc3Bvc2U6XCIsIHRoaXMpO1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xuXHR0aGlzLmV4ZWN1dGlvbkNvdW50ID0gTmFOO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24oKXtcblx0VGlja0VudHJ5LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJtYW5hZ2VyLmFkZDogXCIsIHRoaXMpO1xuXHRtYW5hZ2VyLmFkZCh0aGlzKTtcbn07XG5cblxuVGlja0VudHJ5LkhJR0ggPSAwO1xuVGlja0VudHJ5Lk5PUk1BTCA9IDE7XG5UaWNrRW50cnkuTE9XID0gMjtcblxuVGlja0VudHJ5LmFsbG93ZWRUaWNrQ291bnQgPSAxMDA7XG5UaWNrRW50cnkuZGVidWcgPSBmYWxzZTtcblRpY2tFbnRyeS5zdGFja0RlYnVnID0gZmFsc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvVGlja0VudHJ5LmpzIiwiaW1wb3J0IFRpY2tlciBmcm9tICcuL1RpY2tFbnRyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBUaWNrRW50cnkgZnJvbSAnLi9UaWNrRW50cnknO1xubGV0IHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsvLyBmb3IgV2luZG93cyBFbnZcblxuLy9bMC1ISUdILCAxLU5PUk1BTCwgMi1MT1ddXG5sZXQgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGxdO1xubGV0IHdhaXRFbnRyaWVzID0gbnVsbDtcblxubGV0IHRpY2tDb3VudCA9IDA7XG5sZXQgaXNFeGVjdXRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gb25UaWNrKCl7XG5cdHRpY2tDb3VudCsrO1xuXHRpZihUaWNrRW50cnkuZGVidWcpe1xuXHRcdGNvbnNvbGUubG9nKFwiVGljayBjb3VudDogXCIsIHRpY2tDb3VudCk7XG5cdH1cblx0aWYodGlja0NvdW50IDwgVGlja0VudHJ5LmFsbG93ZWRUaWNrQ291bnQpe1xuXHRcdGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKTtcblx0XHRtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKTtcblx0XHRpZihhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpKXtcblx0XHRcdHN0b3AoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKFwiQW5pbWF0aW9uIGZyYW1lIGxvb3AgZXhlY3V0ZWQgdG8gaXRzIHNldCBsaW1pdDogXCIsIFRpY2tFbnRyeS5hbGxvd2VkVGlja0NvdW50KTtcblx0XHRpZihUaWNrRW50cnkuZGVidWcpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJFbnRyaWVzOiBcIiwgcHJpb3JpdHlFbnRyaWVzWzBdLHByaW9yaXR5RW50cmllc1sxXSxwcmlvcml0eUVudHJpZXNbMl0sd2FpdEVudHJpZXMpO1xuXHRcdH1cblx0XHRyZXNldCgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcblxufVxuXG5cbmZ1bmN0aW9uIHN0b3AoKXtcblx0dGlja0NvdW50ID0gMDtcblx0aXNFeGVjdXRpbmcgPSBmYWxzZTtcblx0dGlja01hbmFnZXIuc3RvcCgpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpe1xuXHRzdG9wKCk7XG5cdHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsXTtcblx0d2FpdEVudHJpZXMgPSBudWxsO1xufVxuXG5cbmZ1bmN0aW9uIG1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbigpe1xuXHRjb25zdCBlbnRyaWVzQ291bnQgPSB3YWl0RW50cmllcyA/ICB3YWl0RW50cmllcy5sZW5ndGggOiAwO1xuXHRpZih3YWl0RW50cmllcyAmJiBlbnRyaWVzQ291bnQgPiAwKSB7XG5cdFx0Zm9yKGxldCBpbmRleCA9IDAgOyBpbmRleCA8IGVudHJpZXNDb3VudDsgaW5kZXgrKyl7XG5cdFx0XHRsZXQgdGlja0VudHJ5ID0gd2FpdEVudHJpZXNbaW5kZXhdO1xuXHRcdFx0Y29uc3QgeyBwcmlvcml0eSB9ID0gdGlja0VudHJ5O1xuXHRcdFx0aWYoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pe1xuXHRcdFx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdFx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdFx0fVxuXHR9XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVByaW9yaXR5RW50cmllcygpe1xuXHRpc0V4ZWN1dGluZyA9IHRydWU7XG5cdGZvcihsZXQgaW5kZXggPSAwIDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKXtcblx0XHRsZXQgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyl7XG5cdC8vIGltcG9ydGFudCB0byB1c2UgZm9yLWxvb3Bcblx0Ly8gdGlja0VudHJpZXMgZ3Jvd3MgZHluYW1pY2FsbHkgYnkgb25lIG9mIGl0cyBlbnRyeVxuXHQvLyBmb3IgZXhhbXBsZTogbGV0IHNheSB3ZSBoYXZlIG9uZSBlbnRyeSwgYW5kIGV4ZWN1dGluZyB0aGF0IGVudHJ5IG1pZ2h0IGFkZHMgYW5vdGhlciBlbnRyeVxuXHQvLyB3aXRoIG1hcCBmdW5jdGlvbiB3ZSBjYW50IGV4ZWN1dGUgZHluYW1pY2FsbHkgZ3Jvd2luZyBlbnRyaWVzLlxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGNvbnN0IHRpY2tFbnRyeSA9IHRpY2tFbnRyaWVzW2ldO1xuXHRcdFRpY2tFbnRyeS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGV4ZWN1dGVUaWNrRW50cmllcyA6IGZvciBcIiAsIGksIHRpY2tFbnRyeSk7XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0XHR0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQrKztcblx0XHRpZihUaWNrRW50cnkuZGVidWcgJiYgdGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50ID4gMSl7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkV4ZWN1dGVkIG1vcmUgdGhhbiBvbmNlOiBcIiwgdGlja0VudHJ5KTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKXtcblx0Zm9yKGxldCBpbmRleCA9IDAgOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4Kyspe1xuXHRcdGxldCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpe1xuXHRjb25zdCBzaG91bGRDb250aW51ZSA9IG9uVGljaygpO1xuXHRpZihzaG91bGRDb250aW51ZSl7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufVxuXG5jbGFzcyBUaWNrTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdH1cbn1cblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0VGlja0VudHJ5LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogXCIgLCB0aWNrRW50cnkpO1xuXHRpZihhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpKXtcblx0XHR0aGlzLnN0YXJ0KClcblx0fVxuXHRpZihpc0V4ZWN1dGluZyl7XG5cdFx0VGlja0VudHJ5LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogIHdhaXQgXCIpO1xuXHRcdGlmKCF3YWl0RW50cmllcyl7XG5cdFx0XHR3YWl0RW50cmllcyA9IFtdO1xuXHRcdH1cblx0XHR3YWl0RW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgeyBwcmlvcml0eSB9ID0gdGlja0VudHJ5O1xuXHRcdGlmKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKXtcblx0XHRcdFRpY2tFbnRyeS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6IGluIFwiK3ByaW9yaXR5K1wiIDogbmV3IEFycmF5XCIpO1xuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdH1cblx0XHRUaWNrRW50cnkuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiBpbiBcIitwcmlvcml0eStcIiA6IHB1c2hcIik7XG5cdFx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fVxuXG59O1xuXG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYod2luZG93KXtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdFx0VGlja0VudHJ5LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogc3RhcnQgOiBcIiwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdFRpY2tFbnRyeS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IHN0b3AgOiBcIiwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cbmNvbnN0IHRpY2tNYW5hZ2VyID0gbmV3IFRpY2tNYW5hZ2VyKCk7XG5cbi8vIHNpbmdsZXRvbkluc3RhbmFjZVxuZXhwb3J0IGRlZmF1bHQgdGlja01hbmFnZXI7XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9NYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

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

var Functions = function Functions() {
	_classCallCheck(this, Functions);

	this.entries = [];
	this.frameEntries = [];
	this.executingLaterInNextTickCount = 0;
};

// the function that responsible for initiating trigger
// if called using this function will make a synced effect of execution


exports.default = Functions;
Functions.prototype.executeTriggerer = function (context, triggerInitiatingfunction, triggererCallback) {
	var _this = this;

	var _executeTriggerer = function _executeTriggerer() {
		var ticker = void 0;
		if (_this.executingLaterInNextTickCount === 0) {
			triggerInitiatingfunction.call(context);
			if (triggererCallback) {
				if (_this.executingLaterInNextTickCount === 0) {
					triggererCallback && triggererCallback();
				} else {
					ticker = new _ticker2.default(_this, triggererCallback, null, 2);
					ticker.execute();
				}
			}
		} else {
			ticker = new _ticker2.default(_this, _executeTriggerer, triggererCallback, 2);
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

	Functions.stackDebug && console.log("Functions: triggerListeners : addListener: ", this);
	var entry = void 0;
	if (executeLaterInNextTick) {

		var tickerCallback = function tickerCallback() {
			_this2.executingLaterInNextTickCount = _this2.executingLaterInNextTickCount - 1;
			if (listenerCallback) {
				listenerCallback.call(listenerCallback['this']);
			}
			if (_this2.executingLaterInNextTickCount === 0) {
				Functions.stackDebug && console.log("Functions: triggerListeners : listenersDidExecute: ", _this2);
				_this2.listenersDidExecute();
			}
		};
		var ticker = new _ticker2.default(context, func, tickerCallback, priority);
		entry = new _entry2.default(ticker, ticker.execute);
		Functions.stackDebug && console.log("Functions: triggerListeners : addListener: frameEntries: ", entry);
		this.frameEntries.push(entry);
	} else {
		entry = new _entry2.default(context, func);
		Functions.stackDebug && console.log("Functions: triggerListeners : addListener: entries: ", entry);
		this.entries.push(entry);
	}
};

Functions.prototype.listenersWillExecute = function () {};

Functions.prototype.shouldListenersExecute = function () {
	Functions.stackDebug && console.log("Functions: triggerListeners : shouldListenersExecute: ", true, this);
	return true;
};

Functions.prototype.listenersDidExecute = function () {};

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
	var shouldTrigger = this.shouldListenersExecute();
	if (shouldTrigger) {
		Functions.stackDebug && console.log("Functions: triggerListeners : listenersWillExecute: ", this);
		this.listenersWillExecute();
		Functions.stackDebug && console.log("Functions: triggerListeners ", this);
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
			Functions.stackDebug && console.log("Functions: triggerListeners : listenersDidExecute: ", this);
			this.listenersDidExecute();
		}
	}
};

Functions.stackDebug = false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhYjljYzI1MDlkYjFlM2FiMWQ2MCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJlbnRyaWVzIiwiZnJhbWVFbnRyaWVzIiwiZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQiLCJwcm90b3R5cGUiLCJleGVjdXRlVHJpZ2dlcmVyIiwiY29udGV4dCIsInRyaWdnZXJJbml0aWF0aW5nZnVuY3Rpb24iLCJ0cmlnZ2VyZXJDYWxsYmFjayIsIl9leGVjdXRlVHJpZ2dlcmVyIiwidGlja2VyIiwiY2FsbCIsImV4ZWN1dGUiLCJhZGRMaXN0ZW5lciIsImZ1bmMiLCJleGVjdXRlTGF0ZXJJbk5leHRUaWNrIiwicHJpb3JpdHkiLCJsaXN0ZW5lckNhbGxiYWNrIiwic3RhY2tEZWJ1ZyIsImNvbnNvbGUiLCJsb2ciLCJlbnRyeSIsInRpY2tlckNhbGxiYWNrIiwibGlzdGVuZXJzRGlkRXhlY3V0ZSIsInB1c2giLCJsaXN0ZW5lcnNXaWxsRXhlY3V0ZSIsInNob3VsZExpc3RlbmVyc0V4ZWN1dGUiLCJyZW1vdmVMaXN0ZW5lciIsImNhbGxiYWNrIiwiaSIsImZyYW1lRW50cnkiLCJsaXN0ZW5lciIsImRpc3Bvc2UiLCJ0aWNrZXJFbnRyeSIsImRpc3Bvc2VEb25lTm90aWZpZXIiLCJsZW5ndGgiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwic2hvdWxkVHJpZ2dlciIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIs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QTNCO0FBQ0E7QUFDRCxJQVBELEVBT0csSUFQSDtBQVFBRix5QkFBc0JDLE9BQXRCLENBQThCLFVBQVNHLFVBQVQsRUFBb0I7QUFDakQsU0FBS3hDLFlBQUwsQ0FBa0J5QyxNQUFsQixDQUF5QkQsVUFBekIsRUFBb0MsQ0FBcEM7QUFDQSxJQUZELEVBRUcsSUFGSDtBQUdBLEdBWkQsTUFZTztBQUNOMUMsYUFBVWtCLFVBQVYsSUFBd0JDLFFBQVFDLEdBQVIsQ0FBWSxxREFBWixFQUFtRSxJQUFuRSxDQUF4QjtBQUNBLFFBQUtHLG1CQUFMO0FBQ0E7QUFDRDtBQUVELENBckNEOztBQXVDQXZCLFVBQVVrQixVQUFWLEdBQXVCLEtBQXZCLEM7Ozs7Ozs7Ozs7Ozs7QUN0SkE7Ozs7Ozs7O0lBRXFCMEIsSyxHQUNqQixlQUFZdEMsT0FBWixFQUFxQlEsSUFBckIsRUFBMEI7QUFBQTs7QUFDdEIsU0FBS1IsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS3lCLFFBQUwsR0FBZ0JqQixJQUFoQjtBQUNILEM7O0FBR0w7OztrQkFQcUI4QixLO0FBUXJCQSxNQUFNeEMsU0FBTixDQUFnQjRCLE9BQWhCLEdBQTBCLFlBQVc7QUFDakMsUUFBRyxLQUFLMUIsT0FBTCw0QkFBSCxFQUFrQztBQUM5QixhQUFLQSxPQUFMLENBQWEwQixPQUFiO0FBQ0g7QUFDRCxTQUFLMUIsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLeUIsUUFBTCxHQUFnQixJQUFoQjtBQUNILENBTkQsQyIsImZpbGUiOiJsaWIvZnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW5jdGlvbnNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhYjljYzI1MDlkYjFlM2FiMWQ2MCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlja2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gdG9Ebzogc3VwcG9ydCBib3RoIGNhbGxiYWNrIGFuZCBwcm9taXNlXG52YXIgVGlja0VudHJ5ID1cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgXCJ0aGlzXCIgYXJndW1lbnQgZm9yIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyLlxuICovXG5mdW5jdGlvbiBUaWNrRW50cnkoY29udGV4dCwgbGlzdGVuZXIpIHtcblx0dmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXHR2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG5cblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tFbnRyeSk7XG5cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0dGhpcy5leGVjdXRpb25Db3VudCA9IDA7XG59O1xuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRpY2tFbnRyeTtcblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0VGlja0VudHJ5LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrRW50cnkgZGlzcG9zZTpcIiwgdGhpcyk7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSBOYU47XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG5cdFRpY2tFbnRyeS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwibWFuYWdlci5hZGQ6IFwiLCB0aGlzKTtcblx0X01hbmFnZXIyLmRlZmF1bHQuYWRkKHRoaXMpO1xufTtcblxuVGlja0VudHJ5LkhJR0ggPSAwO1xuVGlja0VudHJ5Lk5PUk1BTCA9IDE7XG5UaWNrRW50cnkuTE9XID0gMjtcblxuVGlja0VudHJ5LmFsbG93ZWRUaWNrQ291bnQgPSAxMDA7XG5UaWNrRW50cnkuZGVidWcgPSBmYWxzZTtcblRpY2tFbnRyeS5zdGFja0RlYnVnID0gZmFsc2U7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXG4vL1swLUhJR0gsIDEtTk9STUFMLCAyLUxPV11cbnZhciBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG52YXIgd2FpdEVudHJpZXMgPSBudWxsO1xuXG52YXIgdGlja0NvdW50ID0gMDtcbnZhciBpc0V4ZWN1dGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBvblRpY2soKSB7XG5cdHRpY2tDb3VudCsrO1xuXHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1Zykge1xuXHRcdGNvbnNvbGUubG9nKFwiVGljayBjb3VudDogXCIsIHRpY2tDb3VudCk7XG5cdH1cblx0aWYgKHRpY2tDb3VudCA8IF9UaWNrRW50cnkyLmRlZmF1bHQuYWxsb3dlZFRpY2tDb3VudCkge1xuXHRcdGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKTtcblx0XHRtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKTtcblx0XHRpZiAoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSkge1xuXHRcdFx0c3RvcCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oXCJBbmltYXRpb24gZnJhbWUgbG9vcCBleGVjdXRlZCB0byBpdHMgc2V0IGxpbWl0OiBcIiwgX1RpY2tFbnRyeTIuZGVmYXVsdC5hbGxvd2VkVGlja0NvdW50KTtcblx0XHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJFbnRyaWVzOiBcIiwgcHJpb3JpdHlFbnRyaWVzWzBdLCBwcmlvcml0eUVudHJpZXNbMV0sIHByaW9yaXR5RW50cmllc1syXSwgd2FpdEVudHJpZXMpO1xuXHRcdH1cblx0XHRyZXNldCgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc3RvcCgpIHtcblx0dGlja0NvdW50ID0gMDtcblx0aXNFeGVjdXRpbmcgPSBmYWxzZTtcblx0dGlja01hbmFnZXIuc3RvcCgpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcblx0c3RvcCgpO1xuXHRwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gbW92ZVdhaXRpbmdFbnRyaWVzRm9yRXhlY3V0aW9uKCkge1xuXHR2YXIgZW50cmllc0NvdW50ID0gd2FpdEVudHJpZXMgPyB3YWl0RW50cmllcy5sZW5ndGggOiAwO1xuXHRpZiAod2FpdEVudHJpZXMgJiYgZW50cmllc0NvdW50ID4gMCkge1xuXHRcdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBlbnRyaWVzQ291bnQ7IGluZGV4KyspIHtcblx0XHRcdHZhciB0aWNrRW50cnkgPSB3YWl0RW50cmllc1tpbmRleF07XG5cdFx0XHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0XHRcdGlmICghcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSkge1xuXHRcdFx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHRcdH1cblx0fVxuXHR3YWl0RW50cmllcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKSB7XG5cdGlzRXhlY3V0aW5nID0gdHJ1ZTtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxuXHRpc0V4ZWN1dGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGV4ZWN1dGVUaWNrRW50cmllcyA6IGZvciBcIiwgaSwgdGlja0VudHJ5KTtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cblx0XHRpZiAodGlja0VudHJ5LmNhbGxiYWNrKSB7XG5cdFx0XHR0aWNrRW50cnkuY2FsbGJhY2suY2FsbCh0aWNrRW50cnkuY2FsbGJhY2tbJ3RoaXMnXSk7XG5cdFx0fVxuXHRcdHRpY2tFbnRyeS5leGVjdXRpb25Db3VudCsrO1xuXHRcdGlmIChfVGlja0VudHJ5Mi5kZWZhdWx0LmRlYnVnICYmIHRpY2tFbnRyeS5leGVjdXRpb25Db3VudCA+IDEpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXhlY3V0ZWQgbW9yZSB0aGFuIG9uY2U6IFwiLCB0aWNrRW50cnkpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpIHtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpIHtcblx0dmFyIHNob3VsZENvbnRpbnVlID0gb25UaWNrKCk7XG5cdGlmIChzaG91bGRDb250aW51ZSkge1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn1cblxudmFyIFRpY2tNYW5hZ2VyID0gZnVuY3Rpb24gVGlja01hbmFnZXIoKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrTWFuYWdlcik7XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogXCIsIHRpY2tFbnRyeSk7XG5cdGlmIChhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpKSB7XG5cdFx0dGhpcy5zdGFydCgpO1xuXHR9XG5cdGlmIChpc0V4ZWN1dGluZykge1xuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiAgd2FpdCBcIik7XG5cdFx0aWYgKCF3YWl0RW50cmllcykge1xuXHRcdFx0d2FpdEVudHJpZXMgPSBbXTtcblx0XHR9XG5cdFx0d2FpdEVudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBwcmlvcml0eSA9IHRpY2tFbnRyeS5wcmlvcml0eTtcblxuXHRcdGlmICghcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSkge1xuXHRcdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6IGluIFwiICsgcHJpb3JpdHkgKyBcIiA6IG5ldyBBcnJheVwiKTtcblx0XHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHR9XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6IGluIFwiICsgcHJpb3JpdHkgKyBcIiA6IHB1c2hcIik7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH1cbn07XG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogc3RhcnQgOiBcIiwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBzdG9wIDogXCIsIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG52YXIgdGlja01hbmFnZXIgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuLy8gc2luZ2xldG9uSW5zdGFuYWNlXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrTWFuYWdlcjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBM09URTRNRGRtTkRrM05EWmxPRFpoWmpRNE15SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZWR2xqYTBWdWRISjVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlRXRnVZV2RsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpVYVdOclJXNTBjbmtpTENKamIyNTBaWGgwSWl3aWJHbHpkR1Z1WlhJaUxDSmpZV3hzWW1GamF5SXNJbkJ5YVc5eWFYUjVJaXdpWlhobFkzVjBhVzl1UTI5MWJuUWlMQ0p3Y205MGIzUjVjR1VpTENKa2FYTndiM05sSWl3aWMzUmhZMnRFWldKMVp5SXNJbU52Ym5OdmJHVWlMQ0pzYjJjaUxDSk9ZVTRpTENKbGVHVmpkWFJsSWl3aVlXUmtJaXdpU0VsSFNDSXNJazVQVWsxQlRDSXNJa3hQVnlJc0ltRnNiRzkzWldSVWFXTnJRMjkxYm5RaUxDSmtaV0oxWnlJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSWl3aWNISnBiM0pwZEhsRmJuUnlhV1Z6SWl3aWQyRnBkRVZ1ZEhKcFpYTWlMQ0owYVdOclEyOTFiblFpTENKcGMwVjRaV04xZEdsdVp5SXNJbTl1VkdsamF5SXNJbVY0WldOMWRHVlFjbWx2Y21sMGVVVnVkSEpwWlhNaUxDSnRiM1psVjJGcGRHbHVaMFZ1ZEhKcFpYTkdiM0pGZUdWamRYUnBiMjRpTENKaGNtVlFjbWx2Y21sMGVVVnVkSEpwWlhORmJYQjBlU0lzSW5OMGIzQWlMQ0ozWVhKdUlpd2ljbVZ6WlhRaUxDSjBhV05yVFdGdVlXZGxjaUlzSW1WdWRISnBaWE5EYjNWdWRDSXNJbXhsYm1kMGFDSXNJbWx1WkdWNElpd2lkR2xqYTBWdWRISjVJaXdpZEdsamEwVnVkSEpwWlhNaUxDSndkWE5vSWl3aVpYaGxZM1YwWlZScFkydEZiblJ5YVdWeklpd2lhU0lzSW1OaGJHd2lMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlJc0luTm9iM1ZzWkVOdmJuUnBiblZsSWl3aWQybHVaRzkzSWl3aWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJaXdpVkdsamEwMWhibUZuWlhJaUxDSnpkR0Z5ZENJc0ltTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCTWtJc01FSkJRVEJDTEVWQlFVVTdRVUZEZGtRc2VVTkJRV2xETEdWQlFXVTdRVUZEYUVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNPRVJCUVhORUxDdEVRVUVyUkRzN1FVRkZja2c3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3T3p0QlF6ZEVRVHM3T3pzN096czdRVUZGUVR0SlFVTnhRa0VzVXp0QlFVVndRanM3T3p0QlFVbEJMRzFDUVVGWlF5eFBRVUZhTEVWQlFYRkNReXhSUVVGeVFpeEZRVU5CTzBGQlFVRXNTMEZFSzBKRExGRkJReTlDTEhWRlFVUXdReXhKUVVNeFF6dEJRVUZCTEV0QlJHZEVReXhSUVVOb1JDeDFSVUZFTWtRc1EwRkRNMFE3TzBGQlFVRTdPMEZCUTBNc1RVRkJTMGdzVDBGQlRDeEhRVUZsUVN4UFFVRm1PMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWtFc1VVRkJhRUk3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ1FTeFJRVUZvUWp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSkJMRkZCUVdoQ08wRkJRMEVzVFVGQlMwTXNZMEZCVEN4SFFVRnpRaXhEUVVGMFFqdEJRVU5CTEVNN08wRkJTVVk3TzJ0Q1FXcENjVUpNTEZNN1FVRnRRbkpDUVN4VlFVRlZUU3hUUVVGV0xFTkJRVzlDUXl4UFFVRndRaXhIUVVFNFFpeFpRVUZWTzBGQlEzWkRVQ3hYUVVGVlVTeFZRVUZXTEVsQlFYZENReXhSUVVGUlF5eEhRVUZTTEVOQlFWa3NiMEpCUVZvc1JVRkJhME1zU1VGQmJFTXNRMEZCZUVJN1FVRkRRU3hOUVVGTFZDeFBRVUZNTEVkQlFXVXNTVUZCWmp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENMRWxCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEUxQlFVdERMR05CUVV3c1IwRkJjMEpOTEVkQlFYUkNPMEZCUTBFc1EwRlFSRHM3UVVGVFFWZ3NWVUZCVlUwc1UwRkJWaXhEUVVGdlFrMHNUMEZCY0VJc1IwRkJPRUlzV1VGQlZUdEJRVU4yUTFvc1YwRkJWVkVzVlVGQlZpeEpRVUYzUWtNc1VVRkJVVU1zUjBGQlVpeERRVUZaTEdWQlFWb3NSVUZCTmtJc1NVRkJOMElzUTBGQmVFSTdRVUZEUVN4dFFrRkJVVWNzUjBGQlVpeERRVUZaTEVsQlFWbzdRVUZEUVN4RFFVaEVPenRCUVUxQllpeFZRVUZWWXl4SlFVRldMRWRCUVdsQ0xFTkJRV3BDTzBGQlEwRmtMRlZCUVZWbExFMUJRVllzUjBGQmJVSXNRMEZCYmtJN1FVRkRRV1lzVlVGQlZXZENMRWRCUVZZc1IwRkJaMElzUTBGQmFFSTdPMEZCUlVGb1FpeFZRVUZWYVVJc1owSkJRVllzUjBGQk5rSXNSMEZCTjBJN1FVRkRRV3BDTEZWQlFWVnJRaXhMUVVGV0xFZEJRV3RDTEV0QlFXeENPMEZCUTBGc1FpeFZRVUZWVVN4VlFVRldMRWRCUVhWQ0xFdEJRWFpDTEVNN096czdPenM3T3pzN096czdRVU16UTBFN096czdPenM3T3pzN096czdPenM3T3pzN1FVTkJRVHM3T3pzN096czdRVUZEUVN4SlFVRkpWeXd3UWtGQk1FSXNRMEZCT1VJc1F5eERRVUZuUXpzN1FVRkZhRU03UVVGRFFTeEpRVUZKUXl4clFrRkJhMElzUTBGQlF5eEpRVUZFTEVWQlFVOHNTVUZCVUN4RlFVRmhMRWxCUVdJc1EwRkJkRUk3UVVGRFFTeEpRVUZKUXl4alFVRmpMRWxCUVd4Q096dEJRVVZCTEVsQlFVbERMRmxCUVZrc1EwRkJhRUk3UVVGRFFTeEpRVUZKUXl4alFVRmpMRXRCUVd4Q096dEJRVVZCTEZOQlFWTkRMRTFCUVZRc1IwRkJhVUk3UVVGRGFFSkdPMEZCUTBFc1MwRkJSeXh2UWtGQlZVb3NTMEZCWWl4RlFVRnRRanRCUVVOc1FsUXNWVUZCVVVNc1IwRkJVaXhEUVVGWkxHTkJRVm9zUlVGQk5FSlpMRk5CUVRWQ08wRkJRMEU3UVVGRFJDeExRVUZIUVN4WlFVRlpMRzlDUVVGVlRDeG5Ra0ZCZWtJc1JVRkJNRU03UVVGRGVrTlJPMEZCUTBGRE8wRkJRMEVzVFVGQlIwTXNlVUpCUVVnc1JVRkJOa0k3UVVGRE5VSkRPMEZCUTBFc1ZVRkJUeXhMUVVGUU8wRkJRMEU3UVVGRFJDeEZRVkJFTEUxQlQwODdRVUZEVG01Q0xGVkJRVkZ2UWl4SlFVRlNMRU5CUVdFc2EwUkJRV0lzUlVGQmFVVXNiMEpCUVZWYUxHZENRVUV6UlR0QlFVTkJMRTFCUVVjc2IwSkJRVlZETEV0QlFXSXNSVUZCYlVJN1FVRkRiRUpVTEZkQlFWRkRMRWRCUVZJc1EwRkJXU3hYUVVGYUxFVkJRWGxDVlN4blFrRkJaMElzUTBGQmFFSXNRMEZCZWtJc1JVRkJORU5CTEdkQ1FVRm5RaXhEUVVGb1FpeERRVUUxUXl4RlFVRXJSRUVzWjBKQlFXZENMRU5CUVdoQ0xFTkJRUzlFTEVWQlFXdEdReXhYUVVGc1JqdEJRVU5CTzBGQlEwUlRPMEZCUTBFc1UwRkJUeXhMUVVGUU8wRkJRMEU3UVVGRFJDeFJRVUZQTEVsQlFWQTdRVUZGUVRzN1FVRkhSQ3hUUVVGVFJpeEpRVUZVTEVkQlFXVTdRVUZEWkU0c1lVRkJXU3hEUVVGYU8wRkJRMEZETEdWQlFXTXNTMEZCWkR0QlFVTkJVU3hoUVVGWlNDeEpRVUZhTzBGQlEwRTdPMEZCUlVRc1UwRkJVMFVzUzBGQlZDeEhRVUZuUWp0QlFVTm1SanRCUVVOQlVpeHRRa0ZCYTBJc1EwRkJReXhKUVVGRUxFVkJRVThzU1VGQlVDeEZRVUZoTEVsQlFXSXNRMEZCYkVJN1FVRkRRVU1zWlVGQll5eEpRVUZrTzBGQlEwRTdPMEZCUjBRc1UwRkJVMHNzT0VKQlFWUXNSMEZCZVVNN1FVRkRlRU1zUzBGQlRVMHNaVUZCWlZnc1kwRkJaVUVzV1VGQldWa3NUVUZCTTBJc1IwRkJiME1zUTBGQmVrUTdRVUZEUVN4TFFVRkhXaXhsUVVGbFZ5eGxRVUZsTEVOQlFXcERMRVZCUVc5RE8wRkJRMjVETEU5QlFVa3NTVUZCU1VVc1VVRkJVU3hEUVVGb1FpeEZRVUZ2UWtFc1VVRkJVVVlzV1VGQk5VSXNSVUZCTUVORkxFOUJRVEZETEVWQlFXdEVPMEZCUTJwRUxFOUJRVWxETEZsQlFWbGtMRmxCUVZsaExFdEJRVm9zUTBGQmFFSTdRVUZFYVVRc1QwRkZla001UWl4UlFVWjVReXhIUVVVMVFpdENMRk5CUmpSQ0xFTkJSWHBETDBJc1VVRkdlVU03TzBGQlIycEVMRTlCUVVjc1EwRkJRMmRDTEdkQ1FVRm5RbWhDTEZGQlFXaENMRU5CUVVvc1JVRkJPRUk3UVVGRE4wSm5RaXh2UWtGQlowSm9RaXhSUVVGb1FpeEpRVUUwUWl4RlFVRTFRanRCUVVOQk8wRkJRMFFzVDBGQlRXZERMR05CUVdOb1FpeG5Ra0ZCWjBKb1FpeFJRVUZvUWl4RFFVRndRanRCUVVOQlowTXNaVUZCV1VNc1NVRkJXaXhEUVVGcFFrWXNVMEZCYWtJN1FVRkRRVHRCUVVORU8wRkJRMFJrTEdWQlFXTXNTVUZCWkR0QlFVTkJPenRCUVVWRUxGTkJRVk5KTEhOQ1FVRlVMRWRCUVdsRE8wRkJRMmhEUml4bFFVRmpMRWxCUVdRN1FVRkRRU3hOUVVGSkxFbEJRVWxYTEZGQlFWRXNRMEZCYUVJc1JVRkJiMEpCTEZGQlFWRmtMR2RDUVVGblFtRXNUVUZCTlVNc1JVRkJiMFJETEU5QlFYQkVMRVZCUVRSRU8wRkJRek5FTEUxQlFVbEZMR05CUVdOb1FpeG5Ra0ZCWjBKakxFdEJRV2hDTEVOQlFXeENPMEZCUTBFc1RVRkJSMFVzWlVGQlpVRXNXVUZCV1Vnc1RVRkJXaXhIUVVGeFFpeERRVUYyUXl4RlFVRXdRenRCUVVONlEwc3NjMEpCUVcxQ1JpeFhRVUZ1UWp0QlFVTkJPMEZCUTBGb1FpeHRRa0ZCWjBKakxFdEJRV2hDTEVsQlFYbENMRWxCUVhwQ08wRkJRMEU3UVVGRFJEdEJRVU5FV0N4bFFVRmpMRXRCUVdRN1FVRkRRVHM3UVVGRlJDeFRRVUZUWlN4clFrRkJWQ3hEUVVFMFFrWXNWMEZCTlVJc1JVRkJkME03UVVGRGRrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGSkxFbEJRVWxITEVsQlFVa3NRMEZCV2l4RlFVRmxRU3hKUVVGSlNDeFpRVUZaU0N4TlFVRXZRaXhGUVVGMVEwMHNSMEZCZGtNc1JVRkJNa003UVVGRE1VTXNUVUZCVFVvc1dVRkJXVU1zV1VGQldVY3NRMEZCV2l4RFFVRnNRanRCUVVOQkxITkNRVUZWTDBJc1ZVRkJWaXhKUVVGM1FrTXNVVUZCVVVNc1IwRkJVaXhEUVVGWkxIZERRVUZhTEVWQlFYVkVOa0lzUTBGQmRrUXNSVUZCTUVSS0xGTkJRVEZFTEVOQlFYaENPMEZCUTBGQkxGbEJRVlZxUXl4UlFVRldMRU5CUVcxQ2MwTXNTVUZCYmtJc1EwRkJkMEpNTEZWQlFWVnNReXhQUVVGV0xFbEJRWEZDYTBNc1ZVRkJWV3BETEZGQlFWWXNRMEZCYlVJc1RVRkJia0lzUTBGQk4wTTdPMEZCUlVFc1RVRkJTV2xETEZWQlFWVm9ReXhSUVVGa0xFVkJRWGRDTzBGQlEzWkNaME1zWVVGQlZXaERMRkZCUVZZc1EwRkJiVUp4UXl4SlFVRnVRaXhEUVVGM1Frd3NWVUZCVldoRExGRkJRVllzUTBGQmJVSXNUVUZCYmtJc1EwRkJlRUk3UVVGRFFUdEJRVU5FWjBNc1dVRkJWVGxDTEdOQlFWWTdRVUZEUVN4TlFVRkhMRzlDUVVGVllTeExRVUZXTEVsQlFXMUNhVUlzVlVGQlZUbENMR05CUVZZc1IwRkJNa0lzUTBGQmFrUXNSVUZCYlVRN1FVRkRiRVJKTEZkQlFWRkRMRWRCUVZJc1EwRkJXU3d5UWtGQldpeEZRVUY1UTNsQ0xGTkJRWHBETzBGQlEwRTdRVUZEUkR0QlFVTkVPenRCUVVWRUxGTkJRVk5TTEhWQ1FVRlVMRWRCUVd0RE8wRkJRMnBETEUxQlFVa3NTVUZCU1U4c1VVRkJVU3hEUVVGb1FpeEZRVUZ2UWtFc1VVRkJVV1FzWjBKQlFXZENZU3hOUVVFMVF5eEZRVUZ2UkVNc1QwRkJjRVFzUlVGQk5FUTdRVUZETTBRc1RVRkJTVVVzWTBGQlkyaENMR2RDUVVGblFtTXNTMEZCYUVJc1EwRkJiRUk3UVVGRFFTeE5RVUZIUlN4bFFVRmxRU3haUVVGWlNDeE5RVUZhTEVkQlFYRkNMRU5CUVhaRExFVkJRVEJETzBGQlEzcERMRlZCUVU4c1MwRkJVRHRCUVVOQk8wRkJRMFE3UVVGRFJDeFJRVUZQTEVsQlFWQTdRVUZEUVRzN1FVRkZSQ3hUUVVGVFVTdzJRa0ZCVkN4SFFVRjNRenRCUVVOMlF5eExRVUZOUXl4cFFrRkJhVUpzUWl4UlFVRjJRanRCUVVOQkxFdEJRVWRyUWl4alFVRklMRVZCUVd0Q08wRkJRMnBDZGtJc05FSkJRVEJDZDBJc1QwRkJUME1zY1VKQlFWQXNRMEZCTmtKSUxEWkNRVUUzUWl4RFFVRXhRanRCUVVOQk8wRkJRMFE3TzBsQlJVdEpMRmNzUjBGRFRDeDFRa0ZCWVR0QlFVRkJPMEZCUTFvc1F6czdRVUZIUmtFc1dVRkJXWFpETEZOQlFWb3NRMEZCYzBKUExFZEJRWFJDTEVkQlFUUkNMRlZCUVZWelFpeFRRVUZXTEVWQlFYRkNPMEZCUTJoRUxIRkNRVUZWTTBJc1ZVRkJWaXhKUVVGM1FrTXNVVUZCVVVNc1IwRkJVaXhEUVVGWkxIRkNRVUZhTEVWQlFXOURlVUlzVTBGQmNFTXNRMEZCZUVJN1FVRkRRU3hMUVVGSFVpeDVRa0ZCU0N4RlFVRTJRanRCUVVNMVFpeFBRVUZMYlVJc1MwRkJURHRCUVVOQk8wRkJRMFFzUzBGQlIzWkNMRmRCUVVnc1JVRkJaVHRCUVVOa0xITkNRVUZWWml4VlFVRldMRWxCUVhkQ1F5eFJRVUZSUXl4SFFVRlNMRU5CUVZrc01rSkJRVm9zUTBGQmVFSTdRVUZEUVN4TlFVRkhMRU5CUVVOWExGZEJRVW9zUlVGQlowSTdRVUZEWmtFc2FVSkJRV01zUlVGQlpEdEJRVU5CTzBGQlEwUkJMR05CUVZsblFpeEpRVUZhTEVOQlFXbENSaXhUUVVGcVFqdEJRVU5CTEVWQlRrUXNUVUZOVHp0QlFVRkJMRTFCUTBVdlFpeFJRVVJHTEVkQlEyVXJRaXhUUVVSbUxFTkJRMFV2UWl4UlFVUkdPenRCUVVWT0xFMUJRVWNzUTBGQlEyZENMR2RDUVVGblFtaENMRkZCUVdoQ0xFTkJRVW9zUlVGQk9FSTdRVUZETjBJc2RVSkJRVlZKTEZWQlFWWXNTVUZCZDBKRExGRkJRVkZETEVkQlFWSXNRMEZCV1N3eVFrRkJlVUpPTEZGQlFYcENMRWRCUVd0RExHTkJRVGxETEVOQlFYaENPMEZCUTBGblFpeHRRa0ZCWjBKb1FpeFJRVUZvUWl4SlFVRTBRaXhGUVVFMVFqdEJRVU5CTzBGQlEwUXNjMEpCUVZWSkxGVkJRVllzU1VGQmQwSkRMRkZCUVZGRExFZEJRVklzUTBGQldTd3lRa0ZCZVVKT0xGRkJRWHBDTEVkQlFXdERMRk5CUVRsRExFTkJRWGhDTzBGQlEwRXNUVUZCVFdkRExHTkJRV05vUWl4blFrRkJaMEpvUWl4UlFVRm9RaXhEUVVGd1FqdEJRVU5CWjBNc1kwRkJXVU1zU1VGQldpeERRVUZwUWtZc1UwRkJha0k3UVVGRFFUdEJRVVZFTEVOQmRFSkVPenRCUVhsQ1FUdEJRVU5CVlN4WlFVRlpka01zVTBGQldpeERRVUZ6UW5kRExFdEJRWFJDTEVkQlFUaENMRmxCUVZrN1FVRkRla01zUzBGQlIwZ3NUVUZCU0N4RlFVRlZPMEZCUTFRN1FVRkRRWGhDTERSQ1FVRXdRbmRDTEU5QlFVOURMSEZDUVVGUUxFTkJRVFpDU0N3MlFrRkJOMElzUTBGQk1VSTdRVUZEUVN4elFrRkJWV3BETEZWQlFWWXNTVUZCZDBKRExGRkJRVkZETEVkQlFWSXNRMEZCV1N4MVFrRkJXaXhGUVVGeFExTXNkVUpCUVhKRExFTkJRWGhDTzBGQlEwRTdRVUZEUkN4RFFVNUVPenRCUVZOQk1FSXNXVUZCV1haRExGTkJRVm9zUTBGQmMwSnpRaXhKUVVGMFFpeEhRVUUyUWl4WlFVRlpPMEZCUTNoRExFdEJRVWRsTEUxQlFVZ3NSVUZCVlR0QlFVTlVMSE5DUVVGVmJrTXNWVUZCVml4SlFVRjNRa01zVVVGQlVVTXNSMEZCVWl4RFFVRlpMSE5DUVVGYUxFVkJRVzlEVXl4MVFrRkJjRU1zUTBGQmVFSTdRVUZEUVhkQ0xGTkJRVTlKTEc5Q1FVRlFMRU5CUVRSQ05VSXNkVUpCUVRWQ08wRkJRMEU3UVVGRFJDeERRVXhFT3p0QlFVOUJMRWxCUVUxWkxHTkJRV01zU1VGQlNXTXNWMEZCU2l4RlFVRndRanM3UVVGRlFUdHJRa0ZEWldRc1Z5SXNJbVpwYkdVaU9pSnNhV0l2ZEdsamEyVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1hDSjBhV05yWlhKY0lpd2dXMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aWRHbGphMlZ5WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSW5ScFkydGxjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F4S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EzT1RFNE1EZG1ORGszTkRabE9EWmhaalE0TXlJc0ltbHRjRzl5ZENCdFlXNWhaMlZ5SUdaeWIyMGdKeTR2VFdGdVlXZGxjaWM3WEc1Y2JpOHZJSFJ2Ukc4NklITjFjSEJ2Y25RZ1ltOTBhQ0JqWVd4c1ltRmpheUJoYm1RZ2NISnZiV2x6WlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWR2xqYTBWdWRISjVYRzU3WEc1Y2RDOHFLbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UyOWlhbVZqZEgwZ1kyOXVkR1Y0ZENBdElGUm9aU0JjSW5Sb2FYTmNJaUJoY21kMWJXVnVkQ0JtYjNJZ2RHaGxJR3hwYzNSbGJtVnlJR1oxYm1OMGFXOXVMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UyWjFibU4wYVc5dWZTQnNhWE4wWlc1bGNpNWNibHgwSUNvdlhHNWNkR052Ym5OMGNuVmpkRzl5S0dOdmJuUmxlSFFzSUd4cGMzUmxibVZ5TENCallXeHNZbUZqYXlBOUlHNTFiR3dzSUhCeWFXOXlhWFI1SUQwZ01DbGNibHgwZTF4dVhIUmNkSFJvYVhNdVkyOXVkR1Y0ZENBOUlHTnZiblJsZUhRN1hHNWNkRngwZEdocGN5NXNhWE4wWlc1bGNpQTlJR3hwYzNSbGJtVnlPMXh1WEhSY2RIUm9hWE11WTJGc2JHSmhZMnNnUFNCallXeHNZbUZqYXp0Y2JseDBYSFIwYUdsekxuQnlhVzl5YVhSNUlEMGdjSEpwYjNKcGRIazdYRzVjZEZ4MGRHaHBjeTVsZUdWamRYUnBiMjVEYjNWdWRDQTlJREE3WEc1Y2RIMWNibHh1ZlZ4dVhHNHZLaTB0TFMwZ1VIVmliR2xqZkZCeWIzUnZkSGx3WlNCTlpYUm9iMlJ6SUMwdExTb3ZYRzVjYmxScFkydEZiblJ5ZVM1d2NtOTBiM1I1Y0dVdVpHbHpjRzl6WlNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEZScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklDWW1JR052Ym5OdmJHVXViRzluS0Z3aVZHbGphMFZ1ZEhKNUlHUnBjM0J2YzJVNlhDSXNJSFJvYVhNcE8xeHVYSFIwYUdsekxtTnZiblJsZUhRZ1BTQnVkV3hzTzF4dVhIUjBhR2x6TG14cGMzUmxibVZ5SUQwZ2JuVnNiRHRjYmx4MGRHaHBjeTVqWVd4c1ltRmpheUE5SUc1MWJHdzdYRzVjZEhSb2FYTXVjSEpwYjNKcGRIa2dQU0J1ZFd4c08xeHVYSFIwYUdsekxtVjRaV04xZEdsdmJrTnZkVzUwSUQwZ1RtRk9PMXh1ZlR0Y2JseHVWR2xqYTBWdWRISjVMbkJ5YjNSdmRIbHdaUzVsZUdWamRYUmxJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBWR2xqYTBWdWRISjVMbk4wWVdOclJHVmlkV2NnSmlZZ1kyOXVjMjlzWlM1c2IyY29YQ0p0WVc1aFoyVnlMbUZrWkRvZ1hDSXNJSFJvYVhNcE8xeHVYSFJ0WVc1aFoyVnlMbUZrWkNoMGFHbHpLVHRjYm4wN1hHNWNibHh1VkdsamEwVnVkSEo1TGtoSlIwZ2dQU0F3TzF4dVZHbGphMFZ1ZEhKNUxrNVBVazFCVENBOUlERTdYRzVVYVdOclJXNTBjbmt1VEU5WElEMGdNanRjYmx4dVZHbGphMFZ1ZEhKNUxtRnNiRzkzWldSVWFXTnJRMjkxYm5RZ1BTQXhNREE3WEc1VWFXTnJSVzUwY25rdVpHVmlkV2NnUFNCbVlXeHpaVHRjYmxScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklEMGdabUZzYzJVN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZWR2xqYTBWdWRISjVMbXB6SWl3aWFXMXdiM0owSUZScFkydGxjaUJtY205dElDY3VMMVJwWTJ0RmJuUnllU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZScFkydGxjanRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5cGJtUmxlQzVxY3lJc0ltbHRjRzl5ZENCVWFXTnJSVzUwY25rZ1puSnZiU0FuTGk5VWFXTnJSVzUwY25rbk8xeHViR1YwSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnTURzdkx5Qm1iM0lnVjJsdVpHOTNjeUJGYm5aY2JseHVMeTliTUMxSVNVZElMQ0F4TFU1UFVrMUJUQ3dnTWkxTVQxZGRYRzVzWlhRZ2NISnBiM0pwZEhsRmJuUnlhV1Z6SUQwZ1cyNTFiR3dzSUc1MWJHd3NJRzUxYkd4ZE8xeHViR1YwSUhkaGFYUkZiblJ5YVdWeklEMGdiblZzYkR0Y2JseHViR1YwSUhScFkydERiM1Z1ZENBOUlEQTdYRzVzWlhRZ2FYTkZlR1ZqZFhScGJtY2dQU0JtWVd4elpUdGNibHh1Wm5WdVkzUnBiMjRnYjI1VWFXTnJLQ2w3WEc1Y2RIUnBZMnREYjNWdWRDc3JPMXh1WEhScFppaFVhV05yUlc1MGNua3VaR1ZpZFdjcGUxeHVYSFJjZEdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYXlCamIzVnVkRG9nWENJc0lIUnBZMnREYjNWdWRDazdYRzVjZEgxY2JseDBhV1lvZEdsamEwTnZkVzUwSUR3Z1ZHbGphMFZ1ZEhKNUxtRnNiRzkzWldSVWFXTnJRMjkxYm5RcGUxeHVYSFJjZEdWNFpXTjFkR1ZRY21sdmNtbDBlVVZ1ZEhKcFpYTW9LVHRjYmx4MFhIUnRiM1psVjJGcGRHbHVaMFZ1ZEhKcFpYTkdiM0pGZUdWamRYUnBiMjRvS1R0Y2JseDBYSFJwWmloaGNtVlFjbWx2Y21sMGVVVnVkSEpwWlhORmJYQjBlU2dwS1h0Y2JseDBYSFJjZEhOMGIzQW9LVHRjYmx4MFhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2JseDBYSFI5WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwWTI5dWMyOXNaUzUzWVhKdUtGd2lRVzVwYldGMGFXOXVJR1p5WVcxbElHeHZiM0FnWlhobFkzVjBaV1FnZEc4Z2FYUnpJSE5sZENCc2FXMXBkRG9nWENJc0lGUnBZMnRGYm5SeWVTNWhiR3h2ZDJWa1ZHbGphME52ZFc1MEtUdGNibHgwWEhScFppaFVhV05yUlc1MGNua3VaR1ZpZFdjcGUxeHVYSFJjZEZ4MFkyOXVjMjlzWlM1c2IyY29YQ0pGYm5SeWFXVnpPaUJjSWl3Z2NISnBiM0pwZEhsRmJuUnlhV1Z6V3pCZExIQnlhVzl5YVhSNVJXNTBjbWxsYzFzeFhTeHdjbWx2Y21sMGVVVnVkSEpwWlhOYk1sMHNkMkZwZEVWdWRISnBaWE1wTzF4dVhIUmNkSDFjYmx4MFhIUnlaWE5sZENncE8xeHVYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwZlZ4dVhIUnlaWFIxY200Z2RISjFaVHRjYmx4dWZWeHVYRzVjYm1aMWJtTjBhVzl1SUhOMGIzQW9LWHRjYmx4MGRHbGphME52ZFc1MElEMGdNRHRjYmx4MGFYTkZlR1ZqZFhScGJtY2dQU0JtWVd4elpUdGNibHgwZEdsamEwMWhibUZuWlhJdWMzUnZjQ2dwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlhObGRDZ3BlMXh1WEhSemRHOXdLQ2s3WEc1Y2RIQnlhVzl5YVhSNVJXNTBjbWxsY3lBOUlGdHVkV3hzTENCdWRXeHNMQ0J1ZFd4c1hUdGNibHgwZDJGcGRFVnVkSEpwWlhNZ1BTQnVkV3hzTzF4dWZWeHVYRzVjYm1aMWJtTjBhVzl1SUcxdmRtVlhZV2wwYVc1blJXNTBjbWxsYzBadmNrVjRaV04xZEdsdmJpZ3BlMXh1WEhSamIyNXpkQ0JsYm5SeWFXVnpRMjkxYm5RZ1BTQjNZV2wwUlc1MGNtbGxjeUEvSUNCM1lXbDBSVzUwY21sbGN5NXNaVzVuZEdnZ09pQXdPMXh1WEhScFppaDNZV2wwUlc1MGNtbGxjeUFtSmlCbGJuUnlhV1Z6UTI5MWJuUWdQaUF3S1NCN1hHNWNkRngwWm05eUtHeGxkQ0JwYm1SbGVDQTlJREFnT3lCcGJtUmxlQ0E4SUdWdWRISnBaWE5EYjNWdWREc2dhVzVrWlhnckt5bDdYRzVjZEZ4MFhIUnNaWFFnZEdsamEwVnVkSEo1SUQwZ2QyRnBkRVZ1ZEhKcFpYTmJhVzVrWlhoZE8xeHVYSFJjZEZ4MFkyOXVjM1FnZXlCd2NtbHZjbWwwZVNCOUlEMGdkR2xqYTBWdWRISjVPMXh1WEhSY2RGeDBhV1lvSVhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjBwZTF4dVhIUmNkRngwWEhSd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkSUQwZ1cxMDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUmpiMjV6ZENCMGFXTnJSVzUwY21sbGN5QTlJSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMDdYRzVjZEZ4MFhIUjBhV05yUlc1MGNtbGxjeTV3ZFhOb0tIUnBZMnRGYm5SeWVTazdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RIZGhhWFJGYm5SeWFXVnpJRDBnYm5Wc2JEdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1pYaGxZM1YwWlZCeWFXOXlhWFI1Ulc1MGNtbGxjeWdwZTF4dVhIUnBjMFY0WldOMWRHbHVaeUE5SUhSeWRXVTdYRzVjZEdadmNpaHNaWFFnYVc1a1pYZ2dQU0F3SURzZ2FXNWtaWGdnUENCd2NtbHZjbWwwZVVWdWRISnBaWE11YkdWdVozUm9PeUJwYm1SbGVDc3JLWHRjYmx4MFhIUnNaWFFnZEdsamEwVnVkSEpwWlhNZ1BTQndjbWx2Y21sMGVVVnVkSEpwWlhOYmFXNWtaWGhkTzF4dVhIUmNkR2xtS0hScFkydEZiblJ5YVdWeklDWW1JSFJwWTJ0RmJuUnlhV1Z6TG14bGJtZDBhQ0ErSURBcElIdGNibHgwWEhSY2RHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5aDBhV05yUlc1MGNtbGxjeWs3WEc1Y2RGeDBYSFF2TDBOc1pXRnlJSFJvWlcwZ2IyNWpaU0JsZUdWamRYUmxaRnh1WEhSY2RGeDBjSEpwYjNKcGRIbEZiblJ5YVdWelcybHVaR1Y0WFNBOUlHNTFiR3c3WEc1Y2RGeDBmVnh1WEhSOVhHNWNkR2x6UlhobFkzVjBhVzVuSUQwZ1ptRnNjMlU3WEc1OVhHNWNibVoxYm1OMGFXOXVJR1Y0WldOMWRHVlVhV05yUlc1MGNtbGxjeWgwYVdOclJXNTBjbWxsY3lsN1hHNWNkQzh2SUdsdGNHOXlkR0Z1ZENCMGJ5QjFjMlVnWm05eUxXeHZiM0JjYmx4MEx5OGdkR2xqYTBWdWRISnBaWE1nWjNKdmQzTWdaSGx1WVcxcFkyRnNiSGtnWW5rZ2IyNWxJRzltSUdsMGN5QmxiblJ5ZVZ4dVhIUXZMeUJtYjNJZ1pYaGhiWEJzWlRvZ2JHVjBJSE5oZVNCM1pTQm9ZWFpsSUc5dVpTQmxiblJ5ZVN3Z1lXNWtJR1Y0WldOMWRHbHVaeUIwYUdGMElHVnVkSEo1SUcxcFoyaDBJR0ZrWkhNZ1lXNXZkR2hsY2lCbGJuUnllVnh1WEhRdkx5QjNhWFJvSUcxaGNDQm1kVzVqZEdsdmJpQjNaU0JqWVc1MElHVjRaV04xZEdVZ1pIbHVZVzFwWTJGc2JIa2daM0p2ZDJsdVp5QmxiblJ5YVdWekxseHVYSFJtYjNJb2JHVjBJR2tnUFNBd095QnBJRHdnZEdsamEwVnVkSEpwWlhNdWJHVnVaM1JvT3lCcEt5c3BlMXh1WEhSY2RHTnZibk4wSUhScFkydEZiblJ5ZVNBOUlIUnBZMnRGYm5SeWFXVnpXMmxkTzF4dVhIUmNkRlJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUNZbUlHTnZibk52YkdVdWJHOW5LRndpVkdsamEwMWhibUZuWlhJNklHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5QTZJR1p2Y2lCY0lpQXNJR2tzSUhScFkydEZiblJ5ZVNrN1hHNWNkRngwZEdsamEwVnVkSEo1TG14cGMzUmxibVZ5TG1OaGJHd29kR2xqYTBWdWRISjVMbU52Ym5SbGVIUWdmSHdnZEdsamEwVnVkSEo1TG14cGMzUmxibVZ5V3lkMGFHbHpKMTBwTzF4dVhHNWNkRngwYVdZZ0tIUnBZMnRGYm5SeWVTNWpZV3hzWW1GamF5a2dlMXh1WEhSY2RGeDBkR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcld5ZDBhR2x6SjEwcE8xeHVYSFJjZEgxY2JseDBYSFIwYVdOclJXNTBjbmt1WlhobFkzVjBhVzl1UTI5MWJuUXJLenRjYmx4MFhIUnBaaWhVYVdOclJXNTBjbmt1WkdWaWRXY2dKaVlnZEdsamEwVnVkSEo1TG1WNFpXTjFkR2x2YmtOdmRXNTBJRDRnTVNsN1hHNWNkRngwWEhSamIyNXpiMnhsTG14dlp5aGNJa1Y0WldOMWRHVmtJRzF2Y21VZ2RHaGhiaUJ2Ym1ObE9pQmNJaXdnZEdsamEwVnVkSEo1S1R0Y2JseDBYSFI5WEc1Y2RIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1lYSmxVSEpwYjNKcGRIbEZiblJ5YVdWelJXMXdkSGtvS1h0Y2JseDBabTl5S0d4bGRDQnBibVJsZUNBOUlEQWdPeUJwYm1SbGVDQThJSEJ5YVc5eWFYUjVSVzUwY21sbGN5NXNaVzVuZEdnN0lHbHVaR1Y0S3lzcGUxeHVYSFJjZEd4bGRDQjBhV05yUlc1MGNtbGxjeUE5SUhCeWFXOXlhWFI1Ulc1MGNtbGxjMXRwYm1SbGVGMDdYRzVjZEZ4MGFXWW9kR2xqYTBWdWRISnBaWE1nSmlZZ2RHbGphMFZ1ZEhKcFpYTXViR1Z1WjNSb0lENGdNQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJR1poYkhObFhHNWNkRngwZlZ4dVhIUjlYRzVjZEhKbGRIVnliaUIwY25WbE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5Z3BlMXh1WEhSamIyNXpkQ0J6YUc5MWJHUkRiMjUwYVc1MVpTQTlJRzl1VkdsamF5Z3BPMXh1WEhScFppaHphRzkxYkdSRGIyNTBhVzUxWlNsN1hHNWNkRngwY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUWdQU0IzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0hKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVTmhiR3hpWVdOcktUdGNibHgwZlZ4dWZWeHVYRzVqYkdGemN5QlVhV05yVFdGdVlXZGxjaUI3WEc1Y2RHTnZibk4wY25WamRHOXlLQ2w3WEc1Y2RIMWNibjFjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbUZrWkNBOUlHWjFibU4wYVc5dUlDaDBhV05yUlc1MGNua3BJSHRjYmx4MFZHbGphMFZ1ZEhKNUxuTjBZV05yUkdWaWRXY2dKaVlnWTI5dWMyOXNaUzVzYjJjb1hDSlVhV05yVFdGdVlXZGxjam9nWVdSa0lEb2dYQ0lnTENCMGFXTnJSVzUwY25rcE8xeHVYSFJwWmloaGNtVlFjbWx2Y21sMGVVVnVkSEpwWlhORmJYQjBlU2dwS1h0Y2JseDBYSFIwYUdsekxuTjBZWEowS0NsY2JseDBmVnh1WEhScFppaHBjMFY0WldOMWRHbHVaeWw3WEc1Y2RGeDBWR2xqYTBWdWRISjVMbk4wWVdOclJHVmlkV2NnSmlZZ1kyOXVjMjlzWlM1c2IyY29YQ0pVYVdOclRXRnVZV2RsY2pvZ1lXUmtJRG9nSUhkaGFYUWdYQ0lwTzF4dVhIUmNkR2xtS0NGM1lXbDBSVzUwY21sbGN5bDdYRzVjZEZ4MFhIUjNZV2wwUlc1MGNtbGxjeUE5SUZ0ZE8xeHVYSFJjZEgxY2JseDBYSFIzWVdsMFJXNTBjbWxsY3k1d2RYTm9LSFJwWTJ0RmJuUnllU2s3WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwWTI5dWMzUWdleUJ3Y21sdmNtbDBlU0I5SUQwZ2RHbGphMFZ1ZEhKNU8xeHVYSFJjZEdsbUtDRndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZEtYdGNibHgwWEhSY2RGUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JQ1ltSUdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYTAxaGJtRm5aWEk2SUdGa1pDQTZJR2x1SUZ3aUszQnlhVzl5YVhSNUsxd2lJRG9nYm1WM0lFRnljbUY1WENJcE8xeHVYSFJjZEZ4MGNISnBiM0pwZEhsRmJuUnlhV1Z6VzNCeWFXOXlhWFI1WFNBOUlGdGRPMXh1WEhSY2RIMWNibHgwWEhSVWFXTnJSVzUwY25rdWMzUmhZMnRFWldKMVp5QW1KaUJqYjI1emIyeGxMbXh2WnloY0lsUnBZMnROWVc1aFoyVnlPaUJoWkdRZ09pQnBiaUJjSWl0d2NtbHZjbWwwZVN0Y0lpQTZJSEIxYzJoY0lpazdYRzVjZEZ4MFkyOXVjM1FnZEdsamEwVnVkSEpwWlhNZ1BTQndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZE8xeHVYSFJjZEhScFkydEZiblJ5YVdWekxuQjFjMmdvZEdsamEwVnVkSEo1S1R0Y2JseDBmVnh1WEc1OU8xeHVYRzVjYmk4dklGUnZaRzg2SUZOMWNIQnZjblFnWm05eUlFNXZaR1ZLVXlCY2JsUnBZMnROWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzV6ZEdGeWRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBhV1lvZDJsdVpHOTNLWHRjYmx4MFhIUXZMeUIzYVd4c0lISmxZMlZwZG1WeklIUnBiV1Z6ZEdGdGNDQmhjeUJoY21kMWJXVnVkRnh1WEhSY2RISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSUQwZ2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTaHlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWs3WEc1Y2RGeDBWR2xqYTBWdWRISjVMbk4wWVdOclJHVmlkV2NnSmlZZ1kyOXVjMjlzWlM1c2IyY29YQ0pVYVdOclRXRnVZV2RsY2pvZ2MzUmhjblFnT2lCY0lpd2djbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRcE8xeHVYSFI5WEc1OU8xeHVYRzVjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNXpkRzl3SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhScFppaDNhVzVrYjNjcGUxeHVYSFJjZEZScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklDWW1JR052Ym5OdmJHVXViRzluS0Z3aVZHbGphMDFoYm1GblpYSTZJSE4wYjNBZ09pQmNJaXdnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUXBPMXh1WEhSY2RIZHBibVJ2ZHk1allXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTaHlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNrN1hHNWNkSDFjYm4wN1hHNWNibU52Ym5OMElIUnBZMnROWVc1aFoyVnlJRDBnYm1WM0lGUnBZMnROWVc1aFoyVnlLQ2s3WEc1Y2JpOHZJSE5wYm1kc1pYUnZia2x1YzNSaGJtRmpaVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkR2xqYTAxaGJtRm5aWEk3WEc1Y2JseHVYRzVjYmx4dVhHNWNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlOWVc1aFoyVnlMbXB6SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aWNrZXIvbGliL3RpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBGdW5jdGlvbnMgZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IEVudHJ5IGZyb20gJy4vZW50cnknO1xuaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IDA7XG4gICAgfVxufVxuXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCByZXNwb25zaWJsZSBmb3IgaW5pdGlhdGluZyB0cmlnZ2VyXG4vLyBpZiBjYWxsZWQgdXNpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIG1ha2UgYSBzeW5jZWQgZWZmZWN0IG9mIGV4ZWN1dGlvblxuRnVuY3Rpb25zLnByb3RvdHlwZS5leGVjdXRlVHJpZ2dlcmVyID0gZnVuY3Rpb24oY29udGV4dCwgdHJpZ2dlckluaXRpYXRpbmdmdW5jdGlvbiwgdHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRjb25zdCBfZXhlY3V0ZVRyaWdnZXJlciA9ICgpPT57XG5cdFx0bGV0IHRpY2tlcjtcblx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdHRyaWdnZXJJbml0aWF0aW5nZnVuY3Rpb24uY2FsbChjb250ZXh0KTtcblx0XHRcdGlmKHRyaWdnZXJlckNhbGxiYWNrKXtcblx0XHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdFx0dHJpZ2dlcmVyQ2FsbGJhY2sgJiYgdHJpZ2dlcmVyQ2FsbGJhY2soKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIHRyaWdnZXJlckNhbGxiYWNrLCBudWxsLCAyKTtcblx0XHRcdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgX2V4ZWN1dGVUcmlnZ2VyZXIsIHRyaWdnZXJlckNhbGxiYWNrLCAyKTtcblx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0fVxuXHR9O1xuXHRfZXhlY3V0ZVRyaWdnZXJlcigpO1xufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIGV4ZWN1dGVMYXRlckluTmV4dFRpY2sgPSBmYWxzZSwgcHJpb3JpdHkgPSAwLCBsaXN0ZW5lckNhbGxiYWNrID0gbnVsbCl7XG5cdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogYWRkTGlzdGVuZXI6IFwiLCB0aGlzKTtcbiAgICBsZXQgZW50cnk7XG4gICAgaWYgKGV4ZWN1dGVMYXRlckluTmV4dFRpY2spe1xuXG5cdCAgICAgY29uc3QgdGlja2VyQ2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IC0gMTtcblx0XHQgICAgaWYobGlzdGVuZXJDYWxsYmFjayl7XG5cdFx0XHQgICAgbGlzdGVuZXJDYWxsYmFjay5jYWxsKGxpc3RlbmVyQ2FsbGJhY2tbJ3RoaXMnXSlcblx0XHQgICAgfVxuXHRcdCAgICBpZiggdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHQgICAgRnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBsaXN0ZW5lcnNEaWRFeGVjdXRlOiBcIiwgdGhpcyk7XG5cdFx0XHQgICAgdGhpcy5saXN0ZW5lcnNEaWRFeGVjdXRlKCk7XG5cdFx0ICAgIH1cblx0ICAgIH07XG4gICAgICAgIGNvbnN0IHRpY2tlciA9IG5ldyBUaWNrZXIoY29udGV4dCwgZnVuYywgdGlja2VyQ2FsbGJhY2ssIHByaW9yaXR5KTtcblx0ICAgIGVudHJ5ID0gbmV3IEVudHJ5KHRpY2tlciwgdGlja2VyLmV4ZWN1dGUpO1xuXHQgICAgRnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBhZGRMaXN0ZW5lcjogZnJhbWVFbnRyaWVzOiBcIiwgZW50cnkpO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcy5wdXNoKGVudHJ5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJ5ID0gbmV3IEVudHJ5KGNvbnRleHQsIGZ1bmMpO1xuXHQgICAgRnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBhZGRMaXN0ZW5lcjogZW50cmllczogXCIsIGVudHJ5KTtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbn07XG5cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5saXN0ZW5lcnNXaWxsRXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuc2hvdWxkTGlzdGVuZXJzRXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogc2hvdWxkTGlzdGVuZXJzRXhlY3V0ZTogXCIsIHRydWUsIHRoaXMpO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUubGlzdGVuZXJzRGlkRXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGNhbGxiYWNrID0gbnVsbCl7XG5cdGxldCBlbnRyeSwgaTtcblx0Y29uc3Qge2ZyYW1lRW50cmllcywgZW50cmllc30gPSB0aGlzO1xuXG5cdGZvcihpID0gMDsgaSA8IGZyYW1lRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdCAgICBjb25zdCBmcmFtZUVudHJ5ID0gIGZyYW1lRW50cmllc1tpXTtcblx0XHRlbnRyeSA9IGZyYW1lRW50cnkuY29udGV4dDtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRmcmFtZUVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdH0gZWxzZSB7IC8vIGZyYW1lIHRyaWdnZXIgTGlzdGVuZXJzIGFyZSBzdGlsbCBydW5uaW5nXG5cdFx0XHRcdGxldCB0aWNrZXJFbnRyeTtcblx0XHRcdFx0Y29uc3QgZGlzcG9zZURvbmVOb3RpZmllciA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdFx0XHR9IGVsc2V7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGZvcihpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGVudHJ5ID0gZW50cmllc1tpXTtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnRyaWdnZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuXHRjb25zdCBzaG91bGRUcmlnZ2VyID0gdGhpcy5zaG91bGRMaXN0ZW5lcnNFeGVjdXRlKCk7XG5cdGlmKHNob3VsZFRyaWdnZXIpe1xuXHRcdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogbGlzdGVuZXJzV2lsbEV4ZWN1dGU6IFwiLCB0aGlzKTtcblx0XHR0aGlzLmxpc3RlbmVyc1dpbGxFeGVjdXRlKCk7XG5cdFx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgXCIsIHRoaXMpO1xuXHRcdGNvbnN0IGVudHJpZXNJbmRleFRvRGlzcG9zZSA9IFtdO1xuXHRcdHRoaXMuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG5cdFx0XHRpZiAoZW50cnkubGlzdGVuZXIpIHtcblx0XHRcdFx0ZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdHRoaXMuZW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcblx0XHR9LCB0aGlzKTtcblxuXG5cdFx0aWYodGhpcy5mcmFtZUVudHJpZXMubGVuZ3RoID4gMCl7XG5cdFx0XHR0aGlzLmZyYW1lRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG5cdFx0XHRcdGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHRcdFx0XHRcdHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ICsgMTtcblx0XHRcdFx0XHRlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdFx0dGhpcy5mcmFtZUVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGxpc3RlbmVyc0RpZEV4ZWN1dGU6IFwiLCB0aGlzKTtcblx0XHRcdHRoaXMubGlzdGVuZXJzRGlkRXhlY3V0ZSgpO1xuXHRcdH1cblx0fVxuXG59O1xuXG5GdW5jdGlvbnMuc3RhY2tEZWJ1ZyA9IGZhbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9mdW5jdGlvbnMuanMiLCJpbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmdW5jKXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmM7XG4gICAgfVxufVxuXG4vLyBNZXRob2QgYXZhaWxhYmxlIG9ubHkgb24gRW50cnkgaW5zdGFuY2Ugbm90IGluIENsYXNzXG5FbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpe1xuICAgIGlmKHRoaXMuY29udGV4dCBpbnN0YW5jZW9mIFRpY2tlcil7XG4gICAgICAgIHRoaXMuY29udGV4dC5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5saXN0ZW5lciA9IG51bGw7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2VudHJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==