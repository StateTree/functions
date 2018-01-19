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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(1);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_lib2.default.stackDebug = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZDU0MWI2ZDdmMzlkYjgzNWQ5YyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9ucyIsImVudHJpZXMiLCJmcmFtZUVudHJpZXMiLCJleGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCIsInByb3RvdHlwZSIsImV4ZWN1dGVUcmlnZ2VyZXIiLCJjb250ZXh0IiwidHJpZ2dlckluaXRpYXRpbmdmdW5jdGlvbiIsInRyaWdnZXJlckNhbGxiYWNrIiwiX2V4ZWN1dGVUcmlnZ2VyZXIiLCJ0aWNrZXIiLCJjYWxsIiwiZXhlY3V0ZSIsImFkZExpc3RlbmVyIiwiZnVuYyIsImV4ZWN1dGVMYXRlckluTmV4dFRpY2siLCJwcmlvcml0eSIsImxpc3RlbmVyQ2FsbGJhY2siLCJzdGFja0RlYnVnIiwiY29uc29sZSIsImxvZyIsImVudHJ5IiwidGlja2VyQ2FsbGJhY2siLCJsaXN0ZW5lcnNEaWRFeGVjdXRlIiwicHVzaCIsImxpc3RlbmVyc1dpbGxFeGVjdXRlIiwicmVtb3ZlTGlzdGVuZXIiLCJjYWxsYmFjayIsImkiLCJmcmFtZUVudHJ5IiwibGlzdGVuZXIiLCJkaXNwb3NlIiwidGlja2VyRW50cnkiLCJkaXNwb3NlRG9uZU5vdGlmaWVyIiwibGVuZ3RoIiwidHJpZ2dlckxpc3RlbmVycyIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIsIkVudHJ5IiwiaW1tZWRpYXRlRnVuY3Rpb24iLCJmdW5jdGlvbnMiLCJmcmFtZUZ1bmN0aW9uIiwiZnJhbWVGdW5jdGlvblNlY29uZCIsImxpc3RlbmVyc0RvbmUiLCJ3aW5kb3ciLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFD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QS9DO0FBQ0E7O0FBRUQsSUFBTXlDLFlBQVksa0JBQWNHLGFBQWQsQ0FBbEI7QUFDQUgsVUFBVS9CLFdBQVYsQ0FBc0JtQyxNQUF0QixFQUE2QkYsbUJBQTdCLEVBQWtELElBQWxELEVBQXdELENBQXhEO0FBQ0FGLFVBQVUvQixXQUFWLENBQXNCbUMsTUFBdEIsRUFBNkJILGFBQTdCLEVBQTRDLElBQTVDO0FBQ0FELFVBQVUvQixXQUFWLENBQXNCbUMsTUFBdEIsRUFBNkJMLGlCQUE3Qjs7QUFFQXhCLFFBQVFDLEdBQVIsQ0FBWSxXQUFaOztBQUVBd0IsVUFBVVQsZ0JBQVY7O0FBRUE7QUFDQVMsVUFBVWxCLGNBQVYsQ0FBeUJzQixNQUF6QixFQUFnQ0YsbUJBQWhDLEVBQXFERixVQUFVVCxnQkFBVixDQUEyQmMsSUFBM0IsQ0FBZ0NMLFNBQWhDLENBQXJEO0FBQ0F6QixRQUFRQyxHQUFSLENBQVksdUJBQVo7O0FBRUE7QUFDQXdCLFVBQVVsQixjQUFWLENBQXlCc0IsTUFBekIsRUFBZ0NMLGlCQUFoQztBQUNBeEIsUUFBUUMsR0FBUixDQUFZLDJCQUFaOztBQUVBRCxRQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBd0IsVUFBVVQsZ0JBQVYsRyIsImZpbGUiOiJkZW1vL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZ1bmN0aW9uc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVkNTQxYjZkN2YzOWRiODM1ZDljIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyB0b0RvOiBzdXBwb3J0IGJvdGggY2FsbGJhY2sgYW5kIHByb21pc2VcbnZhciBUaWNrRW50cnkgPVxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIuXG4gKi9cbmZ1bmN0aW9uIFRpY2tFbnRyeShjb250ZXh0LCBsaXN0ZW5lcikge1xuXHR2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cdHZhciBwcmlvcml0eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcblxuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja0VudHJ5KTtcblxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHR0aGlzLmV4ZWN1dGlvbkNvdW50ID0gMDtcbn07XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gVGlja0VudHJ5O1xuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXHRUaWNrRW50cnkuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tFbnRyeSBkaXNwb3NlOlwiLCB0aGlzKTtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcblx0dGhpcy5leGVjdXRpb25Db3VudCA9IE5hTjtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcblx0VGlja0VudHJ5LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJtYW5hZ2VyLmFkZDogXCIsIHRoaXMpO1xuXHRfTWFuYWdlcjIuZGVmYXVsdC5hZGQodGhpcyk7XG59O1xuXG5UaWNrRW50cnkuSElHSCA9IDA7XG5UaWNrRW50cnkuTk9STUFMID0gMTtcblRpY2tFbnRyeS5MT1cgPSAyO1xuXG5UaWNrRW50cnkuYWxsb3dlZFRpY2tDb3VudCA9IDEwMDtcblRpY2tFbnRyeS5kZWJ1ZyA9IGZhbHNlO1xuVGlja0VudHJ5LnN0YWNrRGVidWcgPSBmYWxzZTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGlja0VudHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9UaWNrRW50cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGlja0VudHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RpY2tFbnRyeTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGlja0VudHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9UaWNrRW50cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGlja0VudHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsgLy8gZm9yIFdpbmRvd3MgRW52XG5cbi8vWzAtSElHSCwgMS1OT1JNQUwsIDItTE9XXVxudmFyIHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsXTtcbnZhciB3YWl0RW50cmllcyA9IG51bGw7XG5cbnZhciB0aWNrQ291bnQgPSAwO1xudmFyIGlzRXhlY3V0aW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIG9uVGljaygpIHtcblx0dGlja0NvdW50Kys7XG5cdGlmIChfVGlja0VudHJ5Mi5kZWZhdWx0LmRlYnVnKSB7XG5cdFx0Y29uc29sZS5sb2coXCJUaWNrIGNvdW50OiBcIiwgdGlja0NvdW50KTtcblx0fVxuXHRpZiAodGlja0NvdW50IDwgX1RpY2tFbnRyeTIuZGVmYXVsdC5hbGxvd2VkVGlja0NvdW50KSB7XG5cdFx0ZXhlY3V0ZVByaW9yaXR5RW50cmllcygpO1xuXHRcdG1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbigpO1xuXHRcdGlmIChhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpKSB7XG5cdFx0XHRzdG9wKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihcIkFuaW1hdGlvbiBmcmFtZSBsb29wIGV4ZWN1dGVkIHRvIGl0cyBzZXQgbGltaXQ6IFwiLCBfVGlja0VudHJ5Mi5kZWZhdWx0LmFsbG93ZWRUaWNrQ291bnQpO1xuXHRcdGlmIChfVGlja0VudHJ5Mi5kZWZhdWx0LmRlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVudHJpZXM6IFwiLCBwcmlvcml0eUVudHJpZXNbMF0sIHByaW9yaXR5RW50cmllc1sxXSwgcHJpb3JpdHlFbnRyaWVzWzJdLCB3YWl0RW50cmllcyk7XG5cdFx0fVxuXHRcdHJlc2V0KCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuXHR0aWNrQ291bnQgPSAwO1xuXHRpc0V4ZWN1dGluZyA9IGZhbHNlO1xuXHR0aWNrTWFuYWdlci5zdG9wKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuXHRzdG9wKCk7XG5cdHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsXTtcblx0d2FpdEVudHJpZXMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKSB7XG5cdHZhciBlbnRyaWVzQ291bnQgPSB3YWl0RW50cmllcyA/IHdhaXRFbnRyaWVzLmxlbmd0aCA6IDA7XG5cdGlmICh3YWl0RW50cmllcyAmJiBlbnRyaWVzQ291bnQgPiAwKSB7XG5cdFx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGVudHJpZXNDb3VudDsgaW5kZXgrKykge1xuXHRcdFx0dmFyIHRpY2tFbnRyeSA9IHdhaXRFbnRyaWVzW2luZGV4XTtcblx0XHRcdHZhciBwcmlvcml0eSA9IHRpY2tFbnRyeS5wcmlvcml0eTtcblxuXHRcdFx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0XHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdFx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdFx0fVxuXHR9XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVByaW9yaXR5RW50cmllcygpIHtcblx0aXNFeGVjdXRpbmcgPSB0cnVlO1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcykge1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrRW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogZXhlY3V0ZVRpY2tFbnRyaWVzIDogZm9yIFwiLCBpLCB0aWNrRW50cnkpO1xuXHRcdHRpY2tFbnRyeS5saXN0ZW5lci5jYWxsKHRpY2tFbnRyeS5jb250ZXh0IHx8IHRpY2tFbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblxuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdFx0dGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50Kys7XG5cdFx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcgJiYgdGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50ID4gMSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJFeGVjdXRlZCBtb3JlIHRoYW4gb25jZTogXCIsIHRpY2tFbnRyeSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkge1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCkge1xuXHR2YXIgc2hvdWxkQ29udGludWUgPSBvblRpY2soKTtcblx0aWYgKHNob3VsZENvbnRpbnVlKSB7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufVxuXG52YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiBcIiwgdGlja0VudHJ5KTtcblx0aWYgKGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkpIHtcblx0XHR0aGlzLnN0YXJ0KCk7XG5cdH1cblx0aWYgKGlzRXhlY3V0aW5nKSB7XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6ICB3YWl0IFwiKTtcblx0XHRpZiAoIXdhaXRFbnRyaWVzKSB7XG5cdFx0XHR3YWl0RW50cmllcyA9IFtdO1xuXHRcdH1cblx0XHR3YWl0RW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5O1xuXG5cdFx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogaW4gXCIgKyBwcmlvcml0eSArIFwiIDogbmV3IEFycmF5XCIpO1xuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdH1cblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogaW4gXCIgKyBwcmlvcml0eSArIFwiIDogcHVzaFwiKTtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fVxufTtcblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0Ly8gd2lsbCByZWNlaXZlcyB0aW1lc3RhbXAgYXMgYXJndW1lbnRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBzdGFydCA6IFwiLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IHN0b3AgOiBcIiwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cbnZhciB0aWNrTWFuYWdlciA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG4vLyBzaW5nbGV0b25JbnN0YW5hY2VcbmV4cG9ydHMuZGVmYXVsdCA9IHRpY2tNYW5hZ2VyO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EzT1RFNE1EZG1ORGszTkRabE9EWmhaalE0TXlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlZHbGphMFZ1ZEhKNUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyeHBZaTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VFdGdVlXZGxjaTVxY3lKZExDSnVZVzFsY3lJNld5SlVhV05yUlc1MGNua2lMQ0pqYjI1MFpYaDBJaXdpYkdsemRHVnVaWElpTENKallXeHNZbUZqYXlJc0luQnlhVzl5YVhSNUlpd2laWGhsWTNWMGFXOXVRMjkxYm5RaUxDSndjbTkwYjNSNWNHVWlMQ0prYVhOd2IzTmxJaXdpYzNSaFkydEVaV0oxWnlJc0ltTnZibk52YkdVaUxDSnNiMmNpTENKT1lVNGlMQ0psZUdWamRYUmxJaXdpWVdSa0lpd2lTRWxIU0NJc0lrNVBVazFCVENJc0lreFBWeUlzSW1Gc2JHOTNaV1JVYVdOclEyOTFiblFpTENKa1pXSjFaeUlzSW5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJaXdpY0hKcGIzSnBkSGxGYm5SeWFXVnpJaXdpZDJGcGRFVnVkSEpwWlhNaUxDSjBhV05yUTI5MWJuUWlMQ0pwYzBWNFpXTjFkR2x1WnlJc0ltOXVWR2xqYXlJc0ltVjRaV04xZEdWUWNtbHZjbWwwZVVWdWRISnBaWE1pTENKdGIzWmxWMkZwZEdsdVowVnVkSEpwWlhOR2IzSkZlR1ZqZFhScGIyNGlMQ0poY21WUWNtbHZjbWwwZVVWdWRISnBaWE5GYlhCMGVTSXNJbk4wYjNBaUxDSjNZWEp1SWl3aWNtVnpaWFFpTENKMGFXTnJUV0Z1WVdkbGNpSXNJbVZ1ZEhKcFpYTkRiM1Z1ZENJc0lteGxibWQwYUNJc0ltbHVaR1Y0SWl3aWRHbGphMFZ1ZEhKNUlpd2lkR2xqYTBWdWRISnBaWE1pTENKd2RYTm9JaXdpWlhobFkzVjBaVlJwWTJ0RmJuUnlhV1Z6SWl3aWFTSXNJbU5oYkd3aUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheUlzSW5Ob2IzVnNaRU52Ym5ScGJuVmxJaXdpZDJsdVpHOTNJaXdpY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElpd2lWR2xqYTAxaGJtRm5aWElpTENKemRHRnlkQ0lzSW1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUXNUenRCUTFaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFEwRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1FVRkRka1FzZVVOQlFXbERMR1ZCUVdVN1FVRkRhRVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc09FUkJRWE5FTEN0RVFVRXJSRHM3UVVGRmNrZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPenRCUXpkRVFUczdPenM3T3pzN1FVRkZRVHRKUVVOeFFrRXNVenRCUVVWd1FqczdPenRCUVVsQkxHMUNRVUZaUXl4UFFVRmFMRVZCUVhGQ1F5eFJRVUZ5UWl4RlFVTkJPMEZCUVVFc1MwRkVLMEpETEZGQlF5OUNMSFZGUVVRd1F5eEpRVU14UXp0QlFVRkJMRXRCUkdkRVF5eFJRVU5vUkN4MVJVRkVNa1FzUTBGRE0wUTdPMEZCUVVFN08wRkJRME1zVFVGQlMwZ3NUMEZCVEN4SFFVRmxRU3hQUVVGbU8wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBKQkxGRkJRV2hDTzBGQlEwRXNUVUZCUzBNc1kwRkJUQ3hIUVVGelFpeERRVUYwUWp0QlFVTkJMRU03TzBGQlNVWTdPMnRDUVdwQ2NVSk1MRk03UVVGdFFuSkNRU3hWUVVGVlRTeFRRVUZXTEVOQlFXOUNReXhQUVVGd1FpeEhRVUU0UWl4WlFVRlZPMEZCUTNaRFVDeFhRVUZWVVN4VlFVRldMRWxCUVhkQ1F5eFJRVUZSUXl4SFFVRlNMRU5CUVZrc2IwSkJRVm9zUlVGQmEwTXNTVUZCYkVNc1EwRkJlRUk3UVVGRFFTeE5RVUZMVkN4UFFVRk1MRWRCUVdVc1NVRkJaanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ0xFbEJRV2hDTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWp0QlFVTkJMRTFCUVV0RExHTkJRVXdzUjBGQmMwSk5MRWRCUVhSQ08wRkJRMEVzUTBGUVJEczdRVUZUUVZnc1ZVRkJWVTBzVTBGQlZpeERRVUZ2UWswc1QwRkJjRUlzUjBGQk9FSXNXVUZCVlR0QlFVTjJRMW9zVjBGQlZWRXNWVUZCVml4SlFVRjNRa01zVVVGQlVVTXNSMEZCVWl4RFFVRlpMR1ZCUVZvc1JVRkJOa0lzU1VGQk4wSXNRMEZCZUVJN1FVRkRRU3h0UWtGQlVVY3NSMEZCVWl4RFFVRlpMRWxCUVZvN1FVRkRRU3hEUVVoRU96dEJRVTFCWWl4VlFVRlZZeXhKUVVGV0xFZEJRV2xDTEVOQlFXcENPMEZCUTBGa0xGVkJRVlZsTEUxQlFWWXNSMEZCYlVJc1EwRkJia0k3UVVGRFFXWXNWVUZCVldkQ0xFZEJRVllzUjBGQlowSXNRMEZCYUVJN08wRkJSVUZvUWl4VlFVRlZhVUlzWjBKQlFWWXNSMEZCTmtJc1IwRkJOMEk3UVVGRFFXcENMRlZCUVZWclFpeExRVUZXTEVkQlFXdENMRXRCUVd4Q08wRkJRMEZzUWl4VlFVRlZVU3hWUVVGV0xFZEJRWFZDTEV0QlFYWkNMRU03T3pzN096czdPenM3T3pzN1FVTXpRMEU3T3pzN096czdPenM3T3pzN096czdPenM3UVVOQlFUczdPenM3T3pzN1FVRkRRU3hKUVVGSlZ5d3dRa0ZCTUVJc1EwRkJPVUlzUXl4RFFVRm5RenM3UVVGRmFFTTdRVUZEUVN4SlFVRkpReXhyUWtGQmEwSXNRMEZCUXl4SlFVRkVMRVZCUVU4c1NVRkJVQ3hGUVVGaExFbEJRV0lzUTBGQmRFSTdRVUZEUVN4SlFVRkpReXhqUVVGakxFbEJRV3hDT3p0QlFVVkJMRWxCUVVsRExGbEJRVmtzUTBGQmFFSTdRVUZEUVN4SlFVRkpReXhqUVVGakxFdEJRV3hDT3p0QlFVVkJMRk5CUVZORExFMUJRVlFzUjBGQmFVSTdRVUZEYUVKR08wRkJRMEVzUzBGQlJ5eHZRa0ZCVlVvc1MwRkJZaXhGUVVGdFFqdEJRVU5zUWxRc1ZVRkJVVU1zUjBGQlVpeERRVUZaTEdOQlFWb3NSVUZCTkVKWkxGTkJRVFZDTzBGQlEwRTdRVUZEUkN4TFFVRkhRU3haUVVGWkxHOUNRVUZWVEN4blFrRkJla0lzUlVGQk1FTTdRVUZEZWtOUk8wRkJRMEZETzBGQlEwRXNUVUZCUjBNc2VVSkJRVWdzUlVGQk5rSTdRVUZETlVKRE8wRkJRMEVzVlVGQlR5eExRVUZRTzBGQlEwRTdRVUZEUkN4RlFWQkVMRTFCVDA4N1FVRkRUbTVDTEZWQlFWRnZRaXhKUVVGU0xFTkJRV0VzYTBSQlFXSXNSVUZCYVVVc2IwSkJRVlZhTEdkQ1FVRXpSVHRCUVVOQkxFMUJRVWNzYjBKQlFWVkRMRXRCUVdJc1JVRkJiVUk3UVVGRGJFSlVMRmRCUVZGRExFZEJRVklzUTBGQldTeFhRVUZhTEVWQlFYbENWU3huUWtGQlowSXNRMEZCYUVJc1EwRkJla0lzUlVGQk5FTkJMR2RDUVVGblFpeERRVUZvUWl4RFFVRTFReXhGUVVFclJFRXNaMEpCUVdkQ0xFTkJRV2hDTEVOQlFTOUVMRVZCUVd0R1F5eFhRVUZzUmp0QlFVTkJPMEZCUTBSVE8wRkJRMEVzVTBGQlR5eExRVUZRTzBGQlEwRTdRVUZEUkN4UlFVRlBMRWxCUVZBN1FVRkZRVHM3UVVGSFJDeFRRVUZUUml4SlFVRlVMRWRCUVdVN1FVRkRaRTRzWVVGQldTeERRVUZhTzBGQlEwRkRMR1ZCUVdNc1MwRkJaRHRCUVVOQlVTeGhRVUZaU0N4SlFVRmFPMEZCUTBFN08wRkJSVVFzVTBGQlUwVXNTMEZCVkN4SFFVRm5RanRCUVVObVJqdEJRVU5CVWl4dFFrRkJhMElzUTBGQlF5eEpRVUZFTEVWQlFVOHNTVUZCVUN4RlFVRmhMRWxCUVdJc1EwRkJiRUk3UVVGRFFVTXNaVUZCWXl4SlFVRmtPMEZCUTBFN08wRkJSMFFzVTBGQlUwc3NPRUpCUVZRc1IwRkJlVU03UVVGRGVFTXNTMEZCVFUwc1pVRkJaVmdzWTBGQlpVRXNXVUZCV1Zrc1RVRkJNMElzUjBGQmIwTXNRMEZCZWtRN1FVRkRRU3hMUVVGSFdpeGxRVUZsVnl4bFFVRmxMRU5CUVdwRExFVkJRVzlETzBGQlEyNURMRTlCUVVrc1NVRkJTVVVzVVVGQlVTeERRVUZvUWl4RlFVRnZRa0VzVVVGQlVVWXNXVUZCTlVJc1JVRkJNRU5GTEU5QlFURkRMRVZCUVd0RU8wRkJRMnBFTEU5QlFVbERMRmxCUVZsa0xGbEJRVmxoTEV0QlFWb3NRMEZCYUVJN1FVRkVhVVFzVDBGRmVrTTVRaXhSUVVaNVF5eEhRVVUxUWl0Q0xGTkJSalJDTEVOQlJYcERMMElzVVVGR2VVTTdPMEZCUjJwRUxFOUJRVWNzUTBGQlEyZENMR2RDUVVGblFtaENMRkZCUVdoQ0xFTkJRVW9zUlVGQk9FSTdRVUZETjBKblFpeHZRa0ZCWjBKb1FpeFJRVUZvUWl4SlFVRTBRaXhGUVVFMVFqdEJRVU5CTzBGQlEwUXNUMEZCVFdkRExHTkJRV05vUWl4blFrRkJaMEpvUWl4UlFVRm9RaXhEUVVGd1FqdEJRVU5CWjBNc1pVRkJXVU1zU1VGQldpeERRVUZwUWtZc1UwRkJha0k3UVVGRFFUdEJRVU5FTzBGQlEwUmtMR1ZCUVdNc1NVRkJaRHRCUVVOQk96dEJRVVZFTEZOQlFWTkpMSE5DUVVGVUxFZEJRV2xETzBGQlEyaERSaXhsUVVGakxFbEJRV1E3UVVGRFFTeE5RVUZKTEVsQlFVbFhMRkZCUVZFc1EwRkJhRUlzUlVGQmIwSkJMRkZCUVZGa0xHZENRVUZuUW1Fc1RVRkJOVU1zUlVGQmIwUkRMRTlCUVhCRUxFVkJRVFJFTzBGQlF6TkVMRTFCUVVsRkxHTkJRV05vUWl4blFrRkJaMEpqTEV0QlFXaENMRU5CUVd4Q08wRkJRMEVzVFVGQlIwVXNaVUZCWlVFc1dVRkJXVWdzVFVGQldpeEhRVUZ4UWl4RFFVRjJReXhGUVVFd1F6dEJRVU42UTBzc2MwSkJRVzFDUml4WFFVRnVRanRCUVVOQk8wRkJRMEZvUWl4dFFrRkJaMEpqTEV0QlFXaENMRWxCUVhsQ0xFbEJRWHBDTzBGQlEwRTdRVUZEUkR0QlFVTkVXQ3hsUVVGakxFdEJRV1E3UVVGRFFUczdRVUZGUkN4VFFVRlRaU3hyUWtGQlZDeERRVUUwUWtZc1YwRkJOVUlzUlVGQmQwTTdRVUZEZGtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZKTEVsQlFVbEhMRWxCUVVrc1EwRkJXaXhGUVVGbFFTeEpRVUZKU0N4WlFVRlpTQ3hOUVVFdlFpeEZRVUYxUTAwc1IwRkJka01zUlVGQk1rTTdRVUZETVVNc1RVRkJUVW9zV1VGQldVTXNXVUZCV1Vjc1EwRkJXaXhEUVVGc1FqdEJRVU5CTEhOQ1FVRlZMMElzVlVGQlZpeEpRVUYzUWtNc1VVRkJVVU1zUjBGQlVpeERRVUZaTEhkRFFVRmFMRVZCUVhWRU5rSXNRMEZCZGtRc1JVRkJNRVJLTEZOQlFURkVMRU5CUVhoQ08wRkJRMEZCTEZsQlFWVnFReXhSUVVGV0xFTkJRVzFDYzBNc1NVRkJia0lzUTBGQmQwSk1MRlZCUVZWc1F5eFBRVUZXTEVsQlFYRkNhME1zVlVGQlZXcERMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCTjBNN08wRkJSVUVzVFVGQlNXbERMRlZCUVZWb1F5eFJRVUZrTEVWQlFYZENPMEZCUTNaQ1owTXNZVUZCVldoRExGRkJRVllzUTBGQmJVSnhReXhKUVVGdVFpeERRVUYzUWt3c1ZVRkJWV2hETEZGQlFWWXNRMEZCYlVJc1RVRkJia0lzUTBGQmVFSTdRVUZEUVR0QlFVTkVaME1zV1VGQlZUbENMR05CUVZZN1FVRkRRU3hOUVVGSExHOUNRVUZWWVN4TFFVRldMRWxCUVcxQ2FVSXNWVUZCVlRsQ0xHTkJRVllzUjBGQk1rSXNRMEZCYWtRc1JVRkJiVVE3UVVGRGJFUkpMRmRCUVZGRExFZEJRVklzUTBGQldTd3lRa0ZCV2l4RlFVRjVRM2xDTEZOQlFYcERPMEZCUTBFN1FVRkRSRHRCUVVORU96dEJRVVZFTEZOQlFWTlNMSFZDUVVGVUxFZEJRV3RETzBGQlEycERMRTFCUVVrc1NVRkJTVThzVVVGQlVTeERRVUZvUWl4RlFVRnZRa0VzVVVGQlVXUXNaMEpCUVdkQ1lTeE5RVUUxUXl4RlFVRnZSRU1zVDBGQmNFUXNSVUZCTkVRN1FVRkRNMFFzVFVGQlNVVXNZMEZCWTJoQ0xHZENRVUZuUW1Nc1MwRkJhRUlzUTBGQmJFSTdRVUZEUVN4TlFVRkhSU3hsUVVGbFFTeFpRVUZaU0N4TlFVRmFMRWRCUVhGQ0xFTkJRWFpETEVWQlFUQkRPMEZCUTNwRExGVkJRVThzUzBGQlVEdEJRVU5CTzBGQlEwUTdRVUZEUkN4UlFVRlBMRWxCUVZBN1FVRkRRVHM3UVVGRlJDeFRRVUZUVVN3MlFrRkJWQ3hIUVVGM1F6dEJRVU4yUXl4TFFVRk5ReXhwUWtGQmFVSnNRaXhSUVVGMlFqdEJRVU5CTEV0QlFVZHJRaXhqUVVGSUxFVkJRV3RDTzBGQlEycENka0lzTkVKQlFUQkNkMElzVDBGQlQwTXNjVUpCUVZBc1EwRkJOa0pJTERaQ1FVRTNRaXhEUVVFeFFqdEJRVU5CTzBGQlEwUTdPMGxCUlV0SkxGY3NSMEZEVEN4MVFrRkJZVHRCUVVGQk8wRkJRMW9zUXpzN1FVRkhSa0VzV1VGQldYWkRMRk5CUVZvc1EwRkJjMEpQTEVkQlFYUkNMRWRCUVRSQ0xGVkJRVlZ6UWl4VFFVRldMRVZCUVhGQ08wRkJRMmhFTEhGQ1FVRlZNMElzVlVGQlZpeEpRVUYzUWtNc1VVRkJVVU1zUjBGQlVpeERRVUZaTEhGQ1FVRmFMRVZCUVc5RGVVSXNVMEZCY0VNc1EwRkJlRUk3UVVGRFFTeExRVUZIVWl4NVFrRkJTQ3hGUVVFMlFqdEJRVU0xUWl4UFFVRkxiVUlzUzBGQlREdEJRVU5CTzBGQlEwUXNTMEZCUjNaQ0xGZEJRVWdzUlVGQlpUdEJRVU5rTEhOQ1FVRlZaaXhWUVVGV0xFbEJRWGRDUXl4UlFVRlJReXhIUVVGU0xFTkJRVmtzTWtKQlFWb3NRMEZCZUVJN1FVRkRRU3hOUVVGSExFTkJRVU5YTEZkQlFVb3NSVUZCWjBJN1FVRkRaa0VzYVVKQlFXTXNSVUZCWkR0QlFVTkJPMEZCUTBSQkxHTkJRVmxuUWl4SlFVRmFMRU5CUVdsQ1JpeFRRVUZxUWp0QlFVTkJMRVZCVGtRc1RVRk5UenRCUVVGQkxFMUJRMFV2UWl4UlFVUkdMRWRCUTJVclFpeFRRVVJtTEVOQlEwVXZRaXhSUVVSR096dEJRVVZPTEUxQlFVY3NRMEZCUTJkQ0xHZENRVUZuUW1oQ0xGRkJRV2hDTEVOQlFVb3NSVUZCT0VJN1FVRkROMElzZFVKQlFWVkpMRlZCUVZZc1NVRkJkMEpETEZGQlFWRkRMRWRCUVZJc1EwRkJXU3d5UWtGQmVVSk9MRkZCUVhwQ0xFZEJRV3RETEdOQlFUbERMRU5CUVhoQ08wRkJRMEZuUWl4dFFrRkJaMEpvUWl4UlFVRm9RaXhKUVVFMFFpeEZRVUUxUWp0QlFVTkJPMEZCUTBRc2MwSkJRVlZKTEZWQlFWWXNTVUZCZDBKRExGRkJRVkZETEVkQlFWSXNRMEZCV1N3eVFrRkJlVUpPTEZGQlFYcENMRWRCUVd0RExGTkJRVGxETEVOQlFYaENPMEZCUTBFc1RVRkJUV2RETEdOQlFXTm9RaXhuUWtGQlowSm9RaXhSUVVGb1FpeERRVUZ3UWp0QlFVTkJaME1zWTBGQldVTXNTVUZCV2l4RFFVRnBRa1lzVTBGQmFrSTdRVUZEUVR0QlFVVkVMRU5CZEVKRU96dEJRWGxDUVR0QlFVTkJWU3haUVVGWmRrTXNVMEZCV2l4RFFVRnpRbmRETEV0QlFYUkNMRWRCUVRoQ0xGbEJRVms3UVVGRGVrTXNTMEZCUjBnc1RVRkJTQ3hGUVVGVk8wRkJRMVE3UVVGRFFYaENMRFJDUVVFd1FuZENMRTlCUVU5RExIRkNRVUZRTEVOQlFUWkNTQ3cyUWtGQk4wSXNRMEZCTVVJN1FVRkRRU3h6UWtGQlZXcERMRlZCUVZZc1NVRkJkMEpETEZGQlFWRkRMRWRCUVZJc1EwRkJXU3gxUWtGQldpeEZRVUZ4UTFNc2RVSkJRWEpETEVOQlFYaENPMEZCUTBFN1FVRkRSQ3hEUVU1RU96dEJRVk5CTUVJc1dVRkJXWFpETEZOQlFWb3NRMEZCYzBKelFpeEpRVUYwUWl4SFFVRTJRaXhaUVVGWk8wRkJRM2hETEV0QlFVZGxMRTFCUVVnc1JVRkJWVHRCUVVOVUxITkNRVUZWYmtNc1ZVRkJWaXhKUVVGM1FrTXNVVUZCVVVNc1IwRkJVaXhEUVVGWkxITkNRVUZhTEVWQlFXOURVeXgxUWtGQmNFTXNRMEZCZUVJN1FVRkRRWGRDTEZOQlFVOUpMRzlDUVVGUUxFTkJRVFJDTlVJc2RVSkJRVFZDTzBGQlEwRTdRVUZEUkN4RFFVeEVPenRCUVU5QkxFbEJRVTFaTEdOQlFXTXNTVUZCU1dNc1YwRkJTaXhGUVVGd1FqczdRVUZGUVR0clFrRkRaV1FzVnlJc0ltWnBiR1VpT2lKc2FXSXZkR2xqYTJWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKMGFXTnJaWEpjSWl3Z1cxMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpZEdsamEyVnlYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJblJwWTJ0bGNsd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJRnh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHRjYmlCY2RGeDBYSFJjZEdOdmJtWnBaM1Z5WVdKc1pUb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFhIUmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJRngwWEhSY2RGeDBaMlYwT2lCblpYUjBaWEpjYmlCY2RGeDBYSFI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXhLVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTNPVEU0TURkbU5EazNORFpsT0RaaFpqUTRNeUlzSW1sdGNHOXlkQ0J0WVc1aFoyVnlJR1p5YjIwZ0p5NHZUV0Z1WVdkbGNpYzdYRzVjYmk4dklIUnZSRzg2SUhOMWNIQnZjblFnWW05MGFDQmpZV3hzWW1GamF5QmhibVFnY0hKdmJXbHpaVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZHbGphMFZ1ZEhKNVhHNTdYRzVjZEM4cUtseHVYSFFnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnWTI5dWRHVjRkQ0F0SUZSb1pTQmNJblJvYVhOY0lpQmhjbWQxYldWdWRDQm1iM0lnZEdobElHeHBjM1JsYm1WeUlHWjFibU4wYVc5dUxseHVYSFFnS2lCQWNHRnlZVzBnZTJaMWJtTjBhVzl1ZlNCc2FYTjBaVzVsY2k1Y2JseDBJQ292WEc1Y2RHTnZibk4wY25WamRHOXlLR052Ym5SbGVIUXNJR3hwYzNSbGJtVnlMQ0JqWVd4c1ltRmpheUE5SUc1MWJHd3NJSEJ5YVc5eWFYUjVJRDBnTUNsY2JseDBlMXh1WEhSY2RIUm9hWE11WTI5dWRHVjRkQ0E5SUdOdmJuUmxlSFE3WEc1Y2RGeDBkR2hwY3k1c2FYTjBaVzVsY2lBOUlHeHBjM1JsYm1WeU8xeHVYSFJjZEhSb2FYTXVZMkZzYkdKaFkyc2dQU0JqWVd4c1ltRmphenRjYmx4MFhIUjBhR2x6TG5CeWFXOXlhWFI1SUQwZ2NISnBiM0pwZEhrN1hHNWNkRngwZEdocGN5NWxlR1ZqZFhScGIyNURiM1Z1ZENBOUlEQTdYRzVjZEgxY2JseHVmVnh1WEc0dktpMHRMUzBnVUhWaWJHbGpmRkJ5YjNSdmRIbHdaU0JOWlhSb2IyUnpJQzB0TFNvdlhHNWNibFJwWTJ0RmJuUnllUzV3Y205MGIzUjVjR1V1WkdsemNHOXpaU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkRlJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUNZbUlHTnZibk52YkdVdWJHOW5LRndpVkdsamEwVnVkSEo1SUdScGMzQnZjMlU2WENJc0lIUm9hWE1wTzF4dVhIUjBhR2x6TG1OdmJuUmxlSFFnUFNCdWRXeHNPMXh1WEhSMGFHbHpMbXhwYzNSbGJtVnlJRDBnYm5Wc2JEdGNibHgwZEdocGN5NWpZV3hzWW1GamF5QTlJRzUxYkd3N1hHNWNkSFJvYVhNdWNISnBiM0pwZEhrZ1BTQnVkV3hzTzF4dVhIUjBhR2x6TG1WNFpXTjFkR2x2YmtOdmRXNTBJRDBnVG1GT08xeHVmVHRjYmx4dVZHbGphMFZ1ZEhKNUxuQnliM1J2ZEhsd1pTNWxlR1ZqZFhSbElEMGdablZ1WTNScGIyNG9LWHRjYmx4MFZHbGphMFZ1ZEhKNUxuTjBZV05yUkdWaWRXY2dKaVlnWTI5dWMyOXNaUzVzYjJjb1hDSnRZVzVoWjJWeUxtRmtaRG9nWENJc0lIUm9hWE1wTzF4dVhIUnRZVzVoWjJWeUxtRmtaQ2gwYUdsektUdGNibjA3WEc1Y2JseHVWR2xqYTBWdWRISjVMa2hKUjBnZ1BTQXdPMXh1VkdsamEwVnVkSEo1TGs1UFVrMUJUQ0E5SURFN1hHNVVhV05yUlc1MGNua3VURTlYSUQwZ01qdGNibHh1VkdsamEwVnVkSEo1TG1Gc2JHOTNaV1JVYVdOclEyOTFiblFnUFNBeE1EQTdYRzVVYVdOclJXNTBjbmt1WkdWaWRXY2dQU0JtWVd4elpUdGNibFJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUQwZ1ptRnNjMlU3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlZHbGphMFZ1ZEhKNUxtcHpJaXdpYVcxd2IzSjBJRlJwWTJ0bGNpQm1jbTl0SUNjdUwxUnBZMnRGYm5SeWVTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRlJwWTJ0bGNqdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlwYm1SbGVDNXFjeUlzSW1sdGNHOXlkQ0JVYVdOclJXNTBjbmtnWm5KdmJTQW5MaTlVYVdOclJXNTBjbmtuTzF4dWJHVjBJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdNRHN2THlCbWIzSWdWMmx1Wkc5M2N5QkZiblpjYmx4dUx5OWJNQzFJU1VkSUxDQXhMVTVQVWsxQlRDd2dNaTFNVDFkZFhHNXNaWFFnY0hKcGIzSnBkSGxGYm5SeWFXVnpJRDBnVzI1MWJHd3NJRzUxYkd3c0lHNTFiR3hkTzF4dWJHVjBJSGRoYVhSRmJuUnlhV1Z6SUQwZ2JuVnNiRHRjYmx4dWJHVjBJSFJwWTJ0RGIzVnVkQ0E5SURBN1hHNXNaWFFnYVhORmVHVmpkWFJwYm1jZ1BTQm1ZV3h6WlR0Y2JseHVablZ1WTNScGIyNGdiMjVVYVdOcktDbDdYRzVjZEhScFkydERiM1Z1ZENzck8xeHVYSFJwWmloVWFXTnJSVzUwY25rdVpHVmlkV2NwZTF4dVhIUmNkR052Ym5OdmJHVXViRzluS0Z3aVZHbGpheUJqYjNWdWREb2dYQ0lzSUhScFkydERiM1Z1ZENrN1hHNWNkSDFjYmx4MGFXWW9kR2xqYTBOdmRXNTBJRHdnVkdsamEwVnVkSEo1TG1Gc2JHOTNaV1JVYVdOclEyOTFiblFwZTF4dVhIUmNkR1Y0WldOMWRHVlFjbWx2Y21sMGVVVnVkSEpwWlhNb0tUdGNibHgwWEhSdGIzWmxWMkZwZEdsdVowVnVkSEpwWlhOR2IzSkZlR1ZqZFhScGIyNG9LVHRjYmx4MFhIUnBaaWhoY21WUWNtbHZjbWwwZVVWdWRISnBaWE5GYlhCMGVTZ3BLWHRjYmx4MFhIUmNkSE4wYjNBb0tUdGNibHgwWEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MFhIUjlYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBZMjl1YzI5c1pTNTNZWEp1S0Z3aVFXNXBiV0YwYVc5dUlHWnlZVzFsSUd4dmIzQWdaWGhsWTNWMFpXUWdkRzhnYVhSeklITmxkQ0JzYVcxcGREb2dYQ0lzSUZScFkydEZiblJ5ZVM1aGJHeHZkMlZrVkdsamEwTnZkVzUwS1R0Y2JseDBYSFJwWmloVWFXTnJSVzUwY25rdVpHVmlkV2NwZTF4dVhIUmNkRngwWTI5dWMyOXNaUzVzYjJjb1hDSkZiblJ5YVdWek9pQmNJaXdnY0hKcGIzSnBkSGxGYm5SeWFXVnpXekJkTEhCeWFXOXlhWFI1Ulc1MGNtbGxjMXN4WFN4d2NtbHZjbWwwZVVWdWRISnBaWE5iTWwwc2QyRnBkRVZ1ZEhKcFpYTXBPMXh1WEhSY2RIMWNibHgwWEhSeVpYTmxkQ2dwTzF4dVhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2JseDBmVnh1WEhSeVpYUjFjbTRnZEhKMVpUdGNibHh1ZlZ4dVhHNWNibVoxYm1OMGFXOXVJSE4wYjNBb0tYdGNibHgwZEdsamEwTnZkVzUwSUQwZ01EdGNibHgwYVhORmVHVmpkWFJwYm1jZ1BTQm1ZV3h6WlR0Y2JseDBkR2xqYTAxaGJtRm5aWEl1YzNSdmNDZ3BPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaWE5sZENncGUxeHVYSFJ6ZEc5d0tDazdYRzVjZEhCeWFXOXlhWFI1Ulc1MGNtbGxjeUE5SUZ0dWRXeHNMQ0J1ZFd4c0xDQnVkV3hzWFR0Y2JseDBkMkZwZEVWdWRISnBaWE1nUFNCdWRXeHNPMXh1ZlZ4dVhHNWNibVoxYm1OMGFXOXVJRzF2ZG1WWFlXbDBhVzVuUlc1MGNtbGxjMFp2Y2tWNFpXTjFkR2x2YmlncGUxeHVYSFJqYjI1emRDQmxiblJ5YVdWelEyOTFiblFnUFNCM1lXbDBSVzUwY21sbGN5QS9JQ0IzWVdsMFJXNTBjbWxsY3k1c1pXNW5kR2dnT2lBd08xeHVYSFJwWmloM1lXbDBSVzUwY21sbGN5QW1KaUJsYm5SeWFXVnpRMjkxYm5RZ1BpQXdLU0I3WEc1Y2RGeDBabTl5S0d4bGRDQnBibVJsZUNBOUlEQWdPeUJwYm1SbGVDQThJR1Z1ZEhKcFpYTkRiM1Z1ZERzZ2FXNWtaWGdyS3lsN1hHNWNkRngwWEhSc1pYUWdkR2xqYTBWdWRISjVJRDBnZDJGcGRFVnVkSEpwWlhOYmFXNWtaWGhkTzF4dVhIUmNkRngwWTI5dWMzUWdleUJ3Y21sdmNtbDBlU0I5SUQwZ2RHbGphMFZ1ZEhKNU8xeHVYSFJjZEZ4MGFXWW9JWEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMHBlMXh1WEhSY2RGeDBYSFJ3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRJRDBnVzEwN1hHNWNkRngwWEhSOVhHNWNkRngwWEhSamIyNXpkQ0IwYVdOclJXNTBjbWxsY3lBOUlIQnlhVzl5YVhSNVJXNTBjbWxsYzF0d2NtbHZjbWwwZVYwN1hHNWNkRngwWEhSMGFXTnJSVzUwY21sbGN5NXdkWE5vS0hScFkydEZiblJ5ZVNrN1hHNWNkRngwZlZ4dVhIUjlYRzVjZEhkaGFYUkZiblJ5YVdWeklEMGdiblZzYkR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWlhobFkzVjBaVkJ5YVc5eWFYUjVSVzUwY21sbGN5Z3BlMXh1WEhScGMwVjRaV04xZEdsdVp5QTlJSFJ5ZFdVN1hHNWNkR1p2Y2loc1pYUWdhVzVrWlhnZ1BTQXdJRHNnYVc1a1pYZ2dQQ0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTXViR1Z1WjNSb095QnBibVJsZUNzcktYdGNibHgwWEhSc1pYUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iYVc1a1pYaGRPMXh1WEhSY2RHbG1LSFJwWTJ0RmJuUnlhV1Z6SUNZbUlIUnBZMnRGYm5SeWFXVnpMbXhsYm1kMGFDQStJREFwSUh0Y2JseDBYSFJjZEdWNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3loMGFXTnJSVzUwY21sbGN5azdYRzVjZEZ4MFhIUXZMME5zWldGeUlIUm9aVzBnYjI1alpTQmxlR1ZqZFhSbFpGeHVYSFJjZEZ4MGNISnBiM0pwZEhsRmJuUnlhV1Z6VzJsdVpHVjRYU0E5SUc1MWJHdzdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RHbHpSWGhsWTNWMGFXNW5JRDBnWm1Gc2MyVTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5aDBhV05yUlc1MGNtbGxjeWw3WEc1Y2RDOHZJR2x0Y0c5eWRHRnVkQ0IwYnlCMWMyVWdabTl5TFd4dmIzQmNibHgwTHk4Z2RHbGphMFZ1ZEhKcFpYTWdaM0p2ZDNNZ1pIbHVZVzFwWTJGc2JIa2dZbmtnYjI1bElHOW1JR2wwY3lCbGJuUnllVnh1WEhRdkx5Qm1iM0lnWlhoaGJYQnNaVG9nYkdWMElITmhlU0IzWlNCb1lYWmxJRzl1WlNCbGJuUnllU3dnWVc1a0lHVjRaV04xZEdsdVp5QjBhR0YwSUdWdWRISjVJRzFwWjJoMElHRmtaSE1nWVc1dmRHaGxjaUJsYm5SeWVWeHVYSFF2THlCM2FYUm9JRzFoY0NCbWRXNWpkR2x2YmlCM1pTQmpZVzUwSUdWNFpXTjFkR1VnWkhsdVlXMXBZMkZzYkhrZ1ozSnZkMmx1WnlCbGJuUnlhV1Z6TGx4dVhIUm1iM0lvYkdWMElHa2dQU0F3T3lCcElEd2dkR2xqYTBWdWRISnBaWE11YkdWdVozUm9PeUJwS3lzcGUxeHVYSFJjZEdOdmJuTjBJSFJwWTJ0RmJuUnllU0E5SUhScFkydEZiblJ5YVdWelcybGRPMXh1WEhSY2RGUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JQ1ltSUdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYTAxaGJtRm5aWEk2SUdWNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3lBNklHWnZjaUJjSWlBc0lHa3NJSFJwWTJ0RmJuUnllU2s3WEc1Y2RGeDBkR2xqYTBWdWRISjVMbXhwYzNSbGJtVnlMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTnZiblJsZUhRZ2ZId2dkR2xqYTBWdWRISjVMbXhwYzNSbGJtVnlXeWQwYUdsekoxMHBPMXh1WEc1Y2RGeDBhV1lnS0hScFkydEZiblJ5ZVM1allXeHNZbUZqYXlrZ2UxeHVYSFJjZEZ4MGRHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOckxtTmhiR3dvZEdsamEwVnVkSEo1TG1OaGJHeGlZV05yV3lkMGFHbHpKMTBwTzF4dVhIUmNkSDFjYmx4MFhIUjBhV05yUlc1MGNua3VaWGhsWTNWMGFXOXVRMjkxYm5Rckt6dGNibHgwWEhScFppaFVhV05yUlc1MGNua3VaR1ZpZFdjZ0ppWWdkR2xqYTBWdWRISjVMbVY0WldOMWRHbHZia052ZFc1MElENGdNU2w3WEc1Y2RGeDBYSFJqYjI1emIyeGxMbXh2WnloY0lrVjRaV04xZEdWa0lHMXZjbVVnZEdoaGJpQnZibU5sT2lCY0lpd2dkR2xqYTBWdWRISjVLVHRjYmx4MFhIUjlYRzVjZEgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWVhKbFVISnBiM0pwZEhsRmJuUnlhV1Z6Ulcxd2RIa29LWHRjYmx4MFptOXlLR3hsZENCcGJtUmxlQ0E5SURBZ095QnBibVJsZUNBOElIQnlhVzl5YVhSNVJXNTBjbWxsY3k1c1pXNW5kR2c3SUdsdVpHVjRLeXNwZTF4dVhIUmNkR3hsZENCMGFXTnJSVzUwY21sbGN5QTlJSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHBibVJsZUYwN1hHNWNkRngwYVdZb2RHbGphMFZ1ZEhKcFpYTWdKaVlnZEdsamEwVnVkSEpwWlhNdWJHVnVaM1JvSUQ0Z01Da2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHWmhiSE5sWEc1Y2RGeDBmVnh1WEhSOVhHNWNkSEpsZEhWeWJpQjBjblZsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlncGUxeHVYSFJqYjI1emRDQnphRzkxYkdSRGIyNTBhVzUxWlNBOUlHOXVWR2xqYXlncE8xeHVYSFJwWmloemFHOTFiR1JEYjI1MGFXNTFaU2w3WEc1Y2RGeDBjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRZ1BTQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05yS1R0Y2JseDBmVnh1ZlZ4dVhHNWpiR0Z6Y3lCVWFXTnJUV0Z1WVdkbGNpQjdYRzVjZEdOdmJuTjBjblZqZEc5eUtDbDdYRzVjZEgxY2JuMWNibHh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExtRmtaQ0E5SUdaMWJtTjBhVzl1SUNoMGFXTnJSVzUwY25rcElIdGNibHgwVkdsamEwVnVkSEo1TG5OMFlXTnJSR1ZpZFdjZ0ppWWdZMjl1YzI5c1pTNXNiMmNvWENKVWFXTnJUV0Z1WVdkbGNqb2dZV1JrSURvZ1hDSWdMQ0IwYVdOclJXNTBjbmtwTzF4dVhIUnBaaWhoY21WUWNtbHZjbWwwZVVWdWRISnBaWE5GYlhCMGVTZ3BLWHRjYmx4MFhIUjBhR2x6TG5OMFlYSjBLQ2xjYmx4MGZWeHVYSFJwWmlocGMwVjRaV04xZEdsdVp5bDdYRzVjZEZ4MFZHbGphMFZ1ZEhKNUxuTjBZV05yUkdWaWRXY2dKaVlnWTI5dWMyOXNaUzVzYjJjb1hDSlVhV05yVFdGdVlXZGxjam9nWVdSa0lEb2dJSGRoYVhRZ1hDSXBPMXh1WEhSY2RHbG1LQ0YzWVdsMFJXNTBjbWxsY3lsN1hHNWNkRngwWEhSM1lXbDBSVzUwY21sbGN5QTlJRnRkTzF4dVhIUmNkSDFjYmx4MFhIUjNZV2wwUlc1MGNtbGxjeTV3ZFhOb0tIUnBZMnRGYm5SeWVTazdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBZMjl1YzNRZ2V5QndjbWx2Y21sMGVTQjlJRDBnZEdsamEwVnVkSEo1TzF4dVhIUmNkR2xtS0NGd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkS1h0Y2JseDBYSFJjZEZScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklDWW1JR052Ym5OdmJHVXViRzluS0Z3aVZHbGphMDFoYm1GblpYSTZJR0ZrWkNBNklHbHVJRndpSzNCeWFXOXlhWFI1SzF3aUlEb2dibVYzSUVGeWNtRjVYQ0lwTzF4dVhIUmNkRngwY0hKcGIzSnBkSGxGYm5SeWFXVnpXM0J5YVc5eWFYUjVYU0E5SUZ0ZE8xeHVYSFJjZEgxY2JseDBYSFJVYVdOclJXNTBjbmt1YzNSaFkydEVaV0oxWnlBbUppQmpiMjV6YjJ4bExteHZaeWhjSWxScFkydE5ZVzVoWjJWeU9pQmhaR1FnT2lCcGJpQmNJaXR3Y21sdmNtbDBlU3RjSWlBNklIQjFjMmhjSWlrN1hHNWNkRngwWTI5dWMzUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkTzF4dVhIUmNkSFJwWTJ0RmJuUnlhV1Z6TG5CMWMyZ29kR2xqYTBWdWRISjVLVHRjYmx4MGZWeHVYRzU5TzF4dVhHNWNiaTh2SUZSdlpHODZJRk4xY0hCdmNuUWdabTl5SUU1dlpHVktVeUJjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNXpkR0Z5ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGFXWW9kMmx1Wkc5M0tYdGNibHgwWEhRdkx5QjNhV3hzSUhKbFkyVnBkbVZ6SUhScGJXVnpkR0Z0Y0NCaGN5QmhjbWQxYldWdWRGeHVYSFJjZEhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5azdYRzVjZEZ4MFZHbGphMFZ1ZEhKNUxuTjBZV05yUkdWaWRXY2dKaVlnWTI5dWMyOXNaUzVzYjJjb1hDSlVhV05yVFdGdVlXZGxjam9nYzNSaGNuUWdPaUJjSWl3Z2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FwTzF4dVhIUjlYRzU5TzF4dVhHNWNibFJwWTJ0TllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1emRHOXdJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJwWmloM2FXNWtiM2NwZTF4dVhIUmNkRlJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUNZbUlHTnZibk52YkdVdWJHOW5LRndpVkdsamEwMWhibUZuWlhJNklITjBiM0FnT2lCY0lpd2djbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRcE8xeHVYSFJjZEhkcGJtUnZkeTVqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ2s3WEc1Y2RIMWNibjA3WEc1Y2JtTnZibk4wSUhScFkydE5ZVzVoWjJWeUlEMGdibVYzSUZScFkydE5ZVzVoWjJWeUtDazdYRzVjYmk4dklITnBibWRzWlhSdmJrbHVjM1JoYm1GalpWeHVaWGh3YjNKMElHUmxabUYxYkhRZ2RHbGphMDFoYm1GblpYSTdYRzVjYmx4dVhHNWNibHh1WEc1Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOU5ZVzVoWjJWeUxtcHpJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gMDtcbiAgICB9XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IHJlc3BvbnNpYmxlIGZvciBpbml0aWF0aW5nIHRyaWdnZXJcbi8vIGlmIGNhbGxlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgbWFrZSBhIHN5bmNlZCBlZmZlY3Qgb2YgZXhlY3V0aW9uXG5GdW5jdGlvbnMucHJvdG90eXBlLmV4ZWN1dGVUcmlnZ2VyZXIgPSBmdW5jdGlvbihjb250ZXh0LCB0cmlnZ2VySW5pdGlhdGluZ2Z1bmN0aW9uLCB0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdGNvbnN0IF9leGVjdXRlVHJpZ2dlcmVyID0gKCk9Pntcblx0XHRsZXQgdGlja2VyO1xuXHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0dHJpZ2dlckluaXRpYXRpbmdmdW5jdGlvbi5jYWxsKGNvbnRleHQpO1xuXHRcdFx0aWYodHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0XHR0cmlnZ2VyZXJDYWxsYmFjayAmJiB0cmlnZ2VyZXJDYWxsYmFjaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgdHJpZ2dlcmVyQ2FsbGJhY2ssIG51bGwsIDIpO1xuXHRcdFx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCBfZXhlY3V0ZVRyaWdnZXJlciwgdHJpZ2dlcmVyQ2FsbGJhY2ssIDIpO1xuXHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHR9XG5cdH07XG5cdF9leGVjdXRlVHJpZ2dlcmVyKCk7XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCwgZnVuYywgZXhlY3V0ZUxhdGVySW5OZXh0VGljayA9IGZhbHNlLCBwcmlvcml0eSA9IDAsIGxpc3RlbmVyQ2FsbGJhY2sgPSBudWxsKXtcblx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBhZGRMaXN0ZW5lcjogXCIsIHRoaXMpO1xuICAgIGxldCBlbnRyeTtcbiAgICBpZiAoZXhlY3V0ZUxhdGVySW5OZXh0VGljayl7XG5cblx0ICAgICBjb25zdCB0aWNrZXJDYWxsYmFjayA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgLSAxO1xuXHRcdCAgICBpZihsaXN0ZW5lckNhbGxiYWNrKXtcblx0XHRcdCAgICBsaXN0ZW5lckNhbGxiYWNrLmNhbGwobGlzdGVuZXJDYWxsYmFja1sndGhpcyddKVxuXHRcdCAgICB9XG5cdFx0ICAgIGlmKCB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGxpc3RlbmVyc0RpZEV4ZWN1dGU6IFwiLCB0aGlzKTtcblx0XHRcdCAgICB0aGlzLmxpc3RlbmVyc0RpZEV4ZWN1dGUoKTtcblx0XHQgICAgfVxuXHQgICAgfTtcbiAgICAgICAgY29uc3QgdGlja2VyID0gbmV3IFRpY2tlcihjb250ZXh0LCBmdW5jLCB0aWNrZXJDYWxsYmFjaywgcHJpb3JpdHkpO1xuXHQgICAgZW50cnkgPSBuZXcgRW50cnkodGlja2VyLCB0aWNrZXIuZXhlY3V0ZSk7XG5cdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGFkZExpc3RlbmVyOiBmcmFtZUVudHJpZXM6IFwiLCBlbnRyeSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzLnB1c2goZW50cnkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoY29udGV4dCwgZnVuYyk7XG5cdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGFkZExpc3RlbmVyOiBlbnRyaWVzOiBcIiwgZW50cnkpO1xuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfVxufTtcblxuXG5GdW5jdGlvbnMucHJvdG90eXBlLmxpc3RlbmVyc1dpbGxFeGVjdXRlID0gZnVuY3Rpb24oKXtcblxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5saXN0ZW5lcnNEaWRFeGVjdXRlID0gZnVuY3Rpb24oKXtcblxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsZnVuYywgY2FsbGJhY2sgPSBudWxsKXtcblx0bGV0IGVudHJ5LCBpO1xuXHRjb25zdCB7ZnJhbWVFbnRyaWVzLCBlbnRyaWVzfSA9IHRoaXM7XG5cblx0Zm9yKGkgPSAwOyBpIDwgZnJhbWVFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0ICAgIGNvbnN0IGZyYW1lRW50cnkgPSAgZnJhbWVFbnRyaWVzW2ldO1xuXHRcdGVudHJ5ID0gZnJhbWVFbnRyeS5jb250ZXh0O1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdGZyYW1lRW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0fSBlbHNlIHsgLy8gZnJhbWUgdHJpZ2dlciBMaXN0ZW5lcnMgYXJlIHN0aWxsIHJ1bm5pbmdcblx0XHRcdFx0bGV0IHRpY2tlckVudHJ5O1xuXHRcdFx0XHRjb25zdCBkaXNwb3NlRG9uZU5vdGlmaWVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH0gZWxzZXtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0ZW50cnkgPSBlbnRyaWVzW2ldO1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0ZW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudHJpZ2dlckxpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG5cdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogbGlzdGVuZXJzV2lsbEV4ZWN1dGU6IFwiLCB0aGlzKTtcbiAgICB0aGlzLmxpc3RlbmVyc1dpbGxFeGVjdXRlKCk7XG5cdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIFwiLCB0aGlzKTtcblx0Y29uc3QgZW50cmllc0luZGV4VG9EaXNwb3NlID0gW107XG5cdHRoaXMuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG4gICAgICAgIGlmIChlbnRyeS5saXN0ZW5lcikge1xuICAgICAgICAgICAgZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuICAgICAgICB0aGlzLmVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG4gICAgfSwgdGhpcyk7XG5cblxuXHRpZih0aGlzLmZyYW1lRW50cmllcy5sZW5ndGggPiAwKXtcblx0XHR0aGlzLmZyYW1lRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG5cdFx0XHRpZiAoZW50cnkubGlzdGVuZXIpIHtcblx0XHRcdFx0dGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgKyAxO1xuXHRcdFx0XHRlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuXHRcdFx0dGhpcy5mcmFtZUVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG5cdFx0fSwgdGhpcylcblx0fSBlbHNlIHtcblx0XHRGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGxpc3RlbmVyc0RpZEV4ZWN1dGU6IFwiLCB0aGlzKTtcblx0XHR0aGlzLmxpc3RlbmVyc0RpZEV4ZWN1dGUoKTtcblx0fVxufTtcblxuRnVuY3Rpb25zLnN0YWNrRGVidWcgPSBmYWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZnVuY3Rpb25zLmpzIiwiaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZnVuYyl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jO1xuICAgIH1cbn1cblxuLy8gTWV0aG9kIGF2YWlsYWJsZSBvbmx5IG9uIEVudHJ5IGluc3RhbmNlIG5vdCBpbiBDbGFzc1xuRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKXtcbiAgICBpZih0aGlzLmNvbnRleHQgaW5zdGFuY2VvZiBUaWNrZXIpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXIgPSBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lbnRyeS5qcyIsImltcG9ydCBGdW5jdGlvbnMgZnJvbSBcIi4vLi4vbGliXCI7XG5GdW5jdGlvbnMuc3RhY2tEZWJ1ZyA9IHRydWU7XG5mdW5jdGlvbiBpbW1lZGlhdGVGdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBJbW1lZGlhdGUgRnVuY3Rpb25cIik7XG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gZnJhbWVGdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBGcmFtZSBGdW5jdGlvblwiLCBmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5mdW5jdGlvbiBmcmFtZUZ1bmN0aW9uU2Vjb25kKCl7XG4gICAgY29uc29sZS5sb2coXCJJIGFtIEZyYW1lIEZ1bmN0aW9uIFNlY29uZFwiLCBmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5lcnNEb25lKCl7XG5cdGNvbnNvbGUubG9nKFwiQWxsIEZ1bmN0aW9uIGV4ZWN1dGVkXCIsIGZ1bmN0aW9ucy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCk7XG59XG5cbmNvbnN0IGZ1bmN0aW9ucyA9IG5ldyBGdW5jdGlvbnMobGlzdGVuZXJzRG9uZSk7XG5mdW5jdGlvbnMuYWRkTGlzdGVuZXIod2luZG93LGZyYW1lRnVuY3Rpb25TZWNvbmQsIHRydWUsIDEpO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uLCB0cnVlICk7XG5mdW5jdGlvbnMuYWRkTGlzdGVuZXIod2luZG93LGltbWVkaWF0ZUZ1bmN0aW9uKTtcblxuY29uc29sZS5sb2coXCJ0cmlnZ2VyIDFcIik7XG5cbmZ1bmN0aW9ucy50cmlnZ2VyTGlzdGVuZXJzKCk7XG5cbi8vIDIgZW50cmllc1xuZnVuY3Rpb25zLnJlbW92ZUxpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uU2Vjb25kLCBmdW5jdGlvbnMudHJpZ2dlckxpc3RlbmVycy5iaW5kKGZ1bmN0aW9ucykpO1xuY29uc29sZS5sb2coXCJSZW1vdmUgZnJhbWUgZnVuY3Rpb25cIik7XG5cbi8vIDNyZCBlbnRyeVxuZnVuY3Rpb25zLnJlbW92ZUxpc3RlbmVyKHdpbmRvdyxpbW1lZGlhdGVGdW5jdGlvbik7XG5jb25zb2xlLmxvZyhcIlJlbW92ZSBJbW1lZGlhdGUgZnVuY3Rpb25cIik7XG5cbmNvbnNvbGUubG9nKFwidHJpZ2dlciAyXCIpO1xuZnVuY3Rpb25zLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9