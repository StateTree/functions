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
	this.connector = null; // connector is responsible for sequencing functions
	this.enableConnector = true;
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

Functions.prototype.listenersDidExecute = function () {
	this.enableConnector && this.connector && this.connector();
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

Functions.prototype.setConnector = function (connector) {
	this.connector = connector;
};

Functions.prototype.removeConnector = function () {
	this.connector = null;
};

Functions.prototype.linkConnector = function () {
	this.enableConnector = true;
};

Functions.prototype.unLinkConnector = function () {
	this.enableConnector = false;
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(1);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_lib2.default.stackDebug = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1Mjk4Y2VkMTUxZWY0ZDgxZTFhMCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9ucyIsImVudHJpZXMiLCJmcmFtZUVudHJpZXMiLCJleGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCIsImNvbm5lY3RvciIsImVuYWJsZUNvbm5lY3RvciIsInByb3RvdHlwZSIsImV4ZWN1dGVUcmlnZ2VyZXIiLCJjb250ZXh0IiwidHJpZ2dlckluaXRpYXRpbmdmdW5jdGlvbiIsInRyaWdnZXJlckNhbGxiYWNrIiwiX2V4ZWN1dGVUcmlnZ2VyZXIiLCJ0aWNrZXIiLCJjYWxsIiwiZXhlY3V0ZSIsImFkZExpc3RlbmVyIiwiZnVuYyIsImV4ZWN1dGVMYXRlckluTmV4dFRpY2siLCJwcmlvcml0eSIsImxpc3RlbmVyQ2FsbGJhY2siLCJzdGFja0RlYnVnIiwiY29uc29sZSIsImxvZyIsImVudHJ5IiwidGlja2VyQ2FsbGJhY2siLCJsaXN0ZW5lcnNEaWRFeGVjdXRlIiwicHVzaCIsImxpc3RlbmVyc1dpbGxFeGVjdXRlIiwic2hvdWxkTGlzdGVuZXJzRXhlY3V0ZSIsInJlbW92ZUxpc3RlbmVyIiwiY2FsbGJhY2siLCJpIiwiZnJhbWVFbnRyeSIsImxpc3RlbmVyIiwiZGlzcG9zZSIsInRpY2tlckVudHJ5IiwiZGlzcG9zZURvbmVOb3RpZmllciIsImxlbmd0aCIsInNldENvbm5lY3RvciIsInJlbW92ZUNvbm5lY3RvciIsImxpbmtDb25uZWN0b3IiLCJ1bkxpbmtDb25uZWN0b3IiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwic2hvdWxkVHJpZ2dlciIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIsIkVudHJ5IiwiaW1tZWRpYXRlRnVuY3Rpb24iLCJmdW5jdGlvbnMiLCJmcmFtZUZ1bmN0aW9uIiwiZnJhbWVGdW5jdGlvblNlY29uZCIsImxpc3RlbmVyc0RvbmUiLCJ3aW5kb3ciLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QXRCLEVBQTZCRixtQkFBN0IsRUFBa0QsSUFBbEQsRUFBd0QsQ0FBeEQ7QUFDQUYsVUFBVXJDLFdBQVYsQ0FBc0J5QyxNQUF0QixFQUE2QkgsYUFBN0IsRUFBNEMsSUFBNUM7QUFDQUQsVUFBVXJDLFdBQVYsQ0FBc0J5QyxNQUF0QixFQUE2QkwsaUJBQTdCOztBQUVBOUIsUUFBUUMsR0FBUixDQUFZLFdBQVo7O0FBRUE4QixVQUFVVixnQkFBVjs7QUFFQTtBQUNBVSxVQUFVdkIsY0FBVixDQUF5QjJCLE1BQXpCLEVBQWdDRixtQkFBaEMsRUFBcURGLFVBQVVWLGdCQUFWLENBQTJCZSxJQUEzQixDQUFnQ0wsU0FBaEMsQ0FBckQ7QUFDQS9CLFFBQVFDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQTtBQUNBOEIsVUFBVXZCLGNBQVYsQ0FBeUIyQixNQUF6QixFQUFnQ0wsaUJBQWhDO0FBQ0E5QixRQUFRQyxHQUFSLENBQVksMkJBQVo7O0FBRUFELFFBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0E4QixVQUFVVixnQkFBVixHIiwiZmlsZSI6ImRlbW8vZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTI5OGNlZDE1MWVmNGQ4MWUxYTAiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSAwO1xufTtcblxuLyotLS0tIFB1YmxpY3xQcm90b3R5cGUgTWV0aG9kcyAtLS0qL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUaWNrRW50cnk7XG5UaWNrRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cdFRpY2tFbnRyeS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja0VudHJ5IGRpc3Bvc2U6XCIsIHRoaXMpO1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xuXHR0aGlzLmV4ZWN1dGlvbkNvdW50ID0gTmFOO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xuXHRUaWNrRW50cnkuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIm1hbmFnZXIuYWRkOiBcIiwgdGhpcyk7XG5cdF9NYW5hZ2VyMi5kZWZhdWx0LmFkZCh0aGlzKTtcbn07XG5cblRpY2tFbnRyeS5ISUdIID0gMDtcblRpY2tFbnRyeS5OT1JNQUwgPSAxO1xuVGlja0VudHJ5LkxPVyA9IDI7XG5cblRpY2tFbnRyeS5hbGxvd2VkVGlja0NvdW50ID0gMTAwO1xuVGlja0VudHJ5LmRlYnVnID0gZmFsc2U7XG5UaWNrRW50cnkuc3RhY2tEZWJ1ZyA9IGZhbHNlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UaWNrRW50cnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX1RpY2tFbnRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaWNrRW50cnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfVGlja0VudHJ5Mi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UaWNrRW50cnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX1RpY2tFbnRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaWNrRW50cnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSAwOyAvLyBmb3IgV2luZG93cyBFbnZcblxuLy9bMC1ISUdILCAxLU5PUk1BTCwgMi1MT1ddXG52YXIgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGxdO1xudmFyIHdhaXRFbnRyaWVzID0gbnVsbDtcblxudmFyIHRpY2tDb3VudCA9IDA7XG52YXIgaXNFeGVjdXRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gb25UaWNrKCkge1xuXHR0aWNrQ291bnQrKztcblx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcpIHtcblx0XHRjb25zb2xlLmxvZyhcIlRpY2sgY291bnQ6IFwiLCB0aWNrQ291bnQpO1xuXHR9XG5cdGlmICh0aWNrQ291bnQgPCBfVGlja0VudHJ5Mi5kZWZhdWx0LmFsbG93ZWRUaWNrQ291bnQpIHtcblx0XHRleGVjdXRlUHJpb3JpdHlFbnRyaWVzKCk7XG5cdFx0bW92ZVdhaXRpbmdFbnRyaWVzRm9yRXhlY3V0aW9uKCk7XG5cdFx0aWYgKGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkpIHtcblx0XHRcdHN0b3AoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKFwiQW5pbWF0aW9uIGZyYW1lIGxvb3AgZXhlY3V0ZWQgdG8gaXRzIHNldCBsaW1pdDogXCIsIF9UaWNrRW50cnkyLmRlZmF1bHQuYWxsb3dlZFRpY2tDb3VudCk7XG5cdFx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRW50cmllczogXCIsIHByaW9yaXR5RW50cmllc1swXSwgcHJpb3JpdHlFbnRyaWVzWzFdLCBwcmlvcml0eUVudHJpZXNbMl0sIHdhaXRFbnRyaWVzKTtcblx0XHR9XG5cdFx0cmVzZXQoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG5cdHRpY2tDb3VudCA9IDA7XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG5cdHRpY2tNYW5hZ2VyLnN0b3AoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG5cdHN0b3AoKTtcblx0cHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGxdO1xuXHR3YWl0RW50cmllcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIG1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbigpIHtcblx0dmFyIGVudHJpZXNDb3VudCA9IHdhaXRFbnRyaWVzID8gd2FpdEVudHJpZXMubGVuZ3RoIDogMDtcblx0aWYgKHdhaXRFbnRyaWVzICYmIGVudHJpZXNDb3VudCA+IDApIHtcblx0XHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZW50cmllc0NvdW50OyBpbmRleCsrKSB7XG5cdFx0XHR2YXIgdGlja0VudHJ5ID0gd2FpdEVudHJpZXNbaW5kZXhdO1xuXHRcdFx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5O1xuXG5cdFx0XHRpZiAoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pIHtcblx0XHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0XHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0XHR9XG5cdH1cblx0d2FpdEVudHJpZXMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlUHJpb3JpdHlFbnRyaWVzKCkge1xuXHRpc0V4ZWN1dGluZyA9IHRydWU7XG5cdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZiAodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKTtcblx0XHRcdC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG5cdFx0XHRwcmlvcml0eUVudHJpZXNbaW5kZXhdID0gbnVsbDtcblx0XHR9XG5cdH1cblx0aXNFeGVjdXRpbmcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKSB7XG5cdC8vIGltcG9ydGFudCB0byB1c2UgZm9yLWxvb3Bcblx0Ly8gdGlja0VudHJpZXMgZ3Jvd3MgZHluYW1pY2FsbHkgYnkgb25lIG9mIGl0cyBlbnRyeVxuXHQvLyBmb3IgZXhhbXBsZTogbGV0IHNheSB3ZSBoYXZlIG9uZSBlbnRyeSwgYW5kIGV4ZWN1dGluZyB0aGF0IGVudHJ5IG1pZ2h0IGFkZHMgYW5vdGhlciBlbnRyeVxuXHQvLyB3aXRoIG1hcCBmdW5jdGlvbiB3ZSBjYW50IGV4ZWN1dGUgZHluYW1pY2FsbHkgZ3Jvd2luZyBlbnRyaWVzLlxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyeSA9IHRpY2tFbnRyaWVzW2ldO1xuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBleGVjdXRlVGlja0VudHJpZXMgOiBmb3IgXCIsIGksIHRpY2tFbnRyeSk7XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0XHR0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQrKztcblx0XHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1ZyAmJiB0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQgPiAxKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkV4ZWN1dGVkIG1vcmUgdGhhbiBvbmNlOiBcIiwgdGlja0VudHJ5KTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSB7XG5cdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZiAodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdHZhciBzaG91bGRDb250aW51ZSA9IG9uVGljaygpO1xuXHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHR9XG59XG5cbnZhciBUaWNrTWFuYWdlciA9IGZ1bmN0aW9uIFRpY2tNYW5hZ2VyKCkge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja01hbmFnZXIpO1xufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6IFwiLCB0aWNrRW50cnkpO1xuXHRpZiAoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSkge1xuXHRcdHRoaXMuc3RhcnQoKTtcblx0fVxuXHRpZiAoaXNFeGVjdXRpbmcpIHtcblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogIHdhaXQgXCIpO1xuXHRcdGlmICghd2FpdEVudHJpZXMpIHtcblx0XHRcdHdhaXRFbnRyaWVzID0gW107XG5cdFx0fVxuXHRcdHdhaXRFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fSBlbHNlIHtcblx0XHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0XHRpZiAoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pIHtcblx0XHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiBpbiBcIiArIHByaW9yaXR5ICsgXCIgOiBuZXcgQXJyYXlcIik7XG5cdFx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdFx0fVxuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiBpbiBcIiArIHByaW9yaXR5ICsgXCIgOiBwdXNoXCIpO1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHR9XG59O1xuXG4vLyBUb2RvOiBTdXBwb3J0IGZvciBOb2RlSlMgXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IHN0YXJ0IDogXCIsIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogc3RvcCA6IFwiLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxudmFyIHRpY2tNYW5hZ2VyID0gbmV3IFRpY2tNYW5hZ2VyKCk7XG5cbi8vIHNpbmdsZXRvbkluc3RhbmFjZVxuZXhwb3J0cy5kZWZhdWx0ID0gdGlja01hbmFnZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTNPVEU0TURkbU5EazNORFpsT0RaaFpqUTRNeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VkdsamEwVnVkSEo1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVWFXTnJSVzUwY25raUxDSmpiMjUwWlhoMElpd2liR2x6ZEdWdVpYSWlMQ0pqWVd4c1ltRmpheUlzSW5CeWFXOXlhWFI1SWl3aVpYaGxZM1YwYVc5dVEyOTFiblFpTENKd2NtOTBiM1I1Y0dVaUxDSmthWE53YjNObElpd2ljM1JoWTJ0RVpXSjFaeUlzSW1OdmJuTnZiR1VpTENKc2IyY2lMQ0pPWVU0aUxDSmxlR1ZqZFhSbElpd2lZV1JrSWl3aVNFbEhTQ0lzSWs1UFVrMUJUQ0lzSWt4UFZ5SXNJbUZzYkc5M1pXUlVhV05yUTI5MWJuUWlMQ0prWldKMVp5SXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lpd2ljSEpwYjNKcGRIbEZiblJ5YVdWeklpd2lkMkZwZEVWdWRISnBaWE1pTENKMGFXTnJRMjkxYm5RaUxDSnBjMFY0WldOMWRHbHVaeUlzSW05dVZHbGpheUlzSW1WNFpXTjFkR1ZRY21sdmNtbDBlVVZ1ZEhKcFpYTWlMQ0p0YjNabFYyRnBkR2x1WjBWdWRISnBaWE5HYjNKRmVHVmpkWFJwYjI0aUxDSmhjbVZRY21sdmNtbDBlVVZ1ZEhKcFpYTkZiWEIwZVNJc0luTjBiM0FpTENKM1lYSnVJaXdpY21WelpYUWlMQ0owYVdOclRXRnVZV2RsY2lJc0ltVnVkSEpwWlhORGIzVnVkQ0lzSW14bGJtZDBhQ0lzSW1sdVpHVjRJaXdpZEdsamEwVnVkSEo1SWl3aWRHbGphMFZ1ZEhKcFpYTWlMQ0p3ZFhOb0lpd2laWGhsWTNWMFpWUnBZMnRGYm5SeWFXVnpJaXdpYVNJc0ltTmhiR3dpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5SXNJbk5vYjNWc1pFTnZiblJwYm5WbElpd2lkMmx1Wkc5M0lpd2ljbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSWl3aVZHbGphMDFoYm1GblpYSWlMQ0p6ZEdGeWRDSXNJbU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRc1R6dEJRMVpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096dEJRemRFUVRzN096czdPenM3UVVGRlFUdEpRVU54UWtFc1V6dEJRVVZ3UWpzN096dEJRVWxCTEcxQ1FVRlpReXhQUVVGYUxFVkJRWEZDUXl4UlFVRnlRaXhGUVVOQk8wRkJRVUVzUzBGRUswSkRMRkZCUXk5Q0xIVkZRVVF3UXl4SlFVTXhRenRCUVVGQkxFdEJSR2RFUXl4UlFVTm9SQ3gxUlVGRU1rUXNRMEZETTBRN08wRkJRVUU3TzBGQlEwTXNUVUZCUzBnc1QwRkJUQ3hIUVVGbFFTeFBRVUZtTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFrRXNVVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBFc1RVRkJTME1zWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxFTTdPMEZCU1VZN08ydENRV3BDY1VKTUxGTTdRVUZ0UW5KQ1FTeFZRVUZWVFN4VFFVRldMRU5CUVc5Q1F5eFBRVUZ3UWl4SFFVRTRRaXhaUVVGVk8wRkJRM1pEVUN4WFFVRlZVU3hWUVVGV0xFbEJRWGRDUXl4UlFVRlJReXhIUVVGU0xFTkJRVmtzYjBKQlFWb3NSVUZCYTBNc1NVRkJiRU1zUTBGQmVFSTdRVUZEUVN4TlFVRkxWQ3hQUVVGTUxFZEJRV1VzU1VGQlpqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMElzU1VGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWl4SlFVRm9RanRCUVVOQkxFMUJRVXRETEdOQlFVd3NSMEZCYzBKTkxFZEJRWFJDTzBGQlEwRXNRMEZRUkRzN1FVRlRRVmdzVlVGQlZVMHNVMEZCVml4RFFVRnZRazBzVDBGQmNFSXNSMEZCT0VJc1dVRkJWVHRCUVVOMlExb3NWMEZCVlZFc1ZVRkJWaXhKUVVGM1FrTXNVVUZCVVVNc1IwRkJVaXhEUVVGWkxHVkJRVm9zUlVGQk5rSXNTVUZCTjBJc1EwRkJlRUk3UVVGRFFTeHRRa0ZCVVVjc1IwRkJVaXhEUVVGWkxFbEJRVm83UVVGRFFTeERRVWhFT3p0QlFVMUJZaXhWUVVGVll5eEpRVUZXTEVkQlFXbENMRU5CUVdwQ08wRkJRMEZrTEZWQlFWVmxMRTFCUVZZc1IwRkJiVUlzUTBGQmJrSTdRVUZEUVdZc1ZVRkJWV2RDTEVkQlFWWXNSMEZCWjBJc1EwRkJhRUk3TzBGQlJVRm9RaXhWUVVGVmFVSXNaMEpCUVZZc1IwRkJOa0lzUjBGQk4wSTdRVUZEUVdwQ0xGVkJRVlZyUWl4TFFVRldMRWRCUVd0Q0xFdEJRV3hDTzBGQlEwRnNRaXhWUVVGVlVTeFZRVUZXTEVkQlFYVkNMRXRCUVhaQ0xFTTdPenM3T3pzN096czdPenM3UVVNelEwRTdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CUVRzN096czdPenM3UVVGRFFTeEpRVUZKVnl3d1FrRkJNRUlzUTBGQk9VSXNReXhEUVVGblF6czdRVUZGYUVNN1FVRkRRU3hKUVVGSlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGRUxFVkJRVThzU1VGQlVDeEZRVUZoTEVsQlFXSXNRMEZCZEVJN1FVRkRRU3hKUVVGSlF5eGpRVUZqTEVsQlFXeENPenRCUVVWQkxFbEJRVWxETEZsQlFWa3NRMEZCYUVJN1FVRkRRU3hKUVVGSlF5eGpRVUZqTEV0QlFXeENPenRCUVVWQkxGTkJRVk5ETEUxQlFWUXNSMEZCYVVJN1FVRkRhRUpHTzBGQlEwRXNTMEZCUnl4dlFrRkJWVW9zUzBGQllpeEZRVUZ0UWp0QlFVTnNRbFFzVlVGQlVVTXNSMEZCVWl4RFFVRlpMR05CUVZvc1JVRkJORUpaTEZOQlFUVkNPMEZCUTBFN1FVRkRSQ3hMUVVGSFFTeFpRVUZaTEc5Q1FVRlZUQ3huUWtGQmVrSXNSVUZCTUVNN1FVRkRla05STzBGQlEwRkRPMEZCUTBFc1RVRkJSME1zZVVKQlFVZ3NSVUZCTmtJN1FVRkROVUpETzBGQlEwRXNWVUZCVHl4TFFVRlFPMEZCUTBFN1FVRkRSQ3hGUVZCRUxFMUJUMDg3UVVGRFRtNUNMRlZCUVZGdlFpeEpRVUZTTEVOQlFXRXNhMFJCUVdJc1JVRkJhVVVzYjBKQlFWVmFMR2RDUVVFelJUdEJRVU5CTEUxQlFVY3NiMEpCUVZWRExFdEJRV0lzUlVGQmJVSTdRVUZEYkVKVUxGZEJRVkZETEVkQlFWSXNRMEZCV1N4WFFVRmFMRVZCUVhsQ1ZTeG5Ra0ZCWjBJc1EwRkJhRUlzUTBGQmVrSXNSVUZCTkVOQkxHZENRVUZuUWl4RFFVRm9RaXhEUVVFMVF5eEZRVUVyUkVFc1owSkJRV2RDTEVOQlFXaENMRU5CUVM5RUxFVkJRV3RHUXl4WFFVRnNSanRCUVVOQk8wRkJRMFJUTzBGQlEwRXNVMEZCVHl4TFFVRlFPMEZCUTBFN1FVRkRSQ3hSUVVGUExFbEJRVkE3UVVGRlFUczdRVUZIUkN4VFFVRlRSaXhKUVVGVUxFZEJRV1U3UVVGRFpFNHNZVUZCV1N4RFFVRmFPMEZCUTBGRExHVkJRV01zUzBGQlpEdEJRVU5CVVN4aFFVRlpTQ3hKUVVGYU8wRkJRMEU3TzBGQlJVUXNVMEZCVTBVc1MwRkJWQ3hIUVVGblFqdEJRVU5tUmp0QlFVTkJVaXh0UWtGQmEwSXNRMEZCUXl4SlFVRkVMRVZCUVU4c1NVRkJVQ3hGUVVGaExFbEJRV0lzUTBGQmJFSTdRVUZEUVVNc1pVRkJZeXhKUVVGa08wRkJRMEU3TzBGQlIwUXNVMEZCVTBzc09FSkJRVlFzUjBGQmVVTTdRVUZEZUVNc1MwRkJUVTBzWlVGQlpWZ3NZMEZCWlVFc1dVRkJXVmtzVFVGQk0wSXNSMEZCYjBNc1EwRkJla1E3UVVGRFFTeExRVUZIV2l4bFFVRmxWeXhsUVVGbExFTkJRV3BETEVWQlFXOURPMEZCUTI1RExFOUJRVWtzU1VGQlNVVXNVVUZCVVN4RFFVRm9RaXhGUVVGdlFrRXNVVUZCVVVZc1dVRkJOVUlzUlVGQk1FTkZMRTlCUVRGRExFVkJRV3RFTzBGQlEycEVMRTlCUVVsRExGbEJRVmxrTEZsQlFWbGhMRXRCUVZvc1EwRkJhRUk3UVVGRWFVUXNUMEZGZWtNNVFpeFJRVVo1UXl4SFFVVTFRaXRDTEZOQlJqUkNMRU5CUlhwREwwSXNVVUZHZVVNN08wRkJSMnBFTEU5QlFVY3NRMEZCUTJkQ0xHZENRVUZuUW1oQ0xGRkJRV2hDTEVOQlFVb3NSVUZCT0VJN1FVRkROMEpuUWl4dlFrRkJaMEpvUWl4UlFVRm9RaXhKUVVFMFFpeEZRVUUxUWp0QlFVTkJPMEZCUTBRc1QwRkJUV2RETEdOQlFXTm9RaXhuUWtGQlowSm9RaXhSUVVGb1FpeERRVUZ3UWp0QlFVTkJaME1zWlVGQldVTXNTVUZCV2l4RFFVRnBRa1lzVTBGQmFrSTdRVUZEUVR0QlFVTkVPMEZCUTBSa0xHVkJRV01zU1VGQlpEdEJRVU5CT3p0QlFVVkVMRk5CUVZOSkxITkNRVUZVTEVkQlFXbERPMEZCUTJoRFJpeGxRVUZqTEVsQlFXUTdRVUZEUVN4TlFVRkpMRWxCUVVsWExGRkJRVkVzUTBGQmFFSXNSVUZCYjBKQkxGRkJRVkZrTEdkQ1FVRm5RbUVzVFVGQk5VTXNSVUZCYjBSRExFOUJRWEJFTEVWQlFUUkVPMEZCUXpORUxFMUJRVWxGTEdOQlFXTm9RaXhuUWtGQlowSmpMRXRCUVdoQ0xFTkJRV3hDTzBGQlEwRXNUVUZCUjBVc1pVRkJaVUVzV1VGQldVZ3NUVUZCV2l4SFFVRnhRaXhEUVVGMlF5eEZRVUV3UXp0QlFVTjZRMHNzYzBKQlFXMUNSaXhYUVVGdVFqdEJRVU5CTzBGQlEwRm9RaXh0UWtGQlowSmpMRXRCUVdoQ0xFbEJRWGxDTEVsQlFYcENPMEZCUTBFN1FVRkRSRHRCUVVORVdDeGxRVUZqTEV0QlFXUTdRVUZEUVRzN1FVRkZSQ3hUUVVGVFpTeHJRa0ZCVkN4RFFVRTBRa1lzVjBGQk5VSXNSVUZCZDBNN1FVRkRka003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkpMRWxCUVVsSExFbEJRVWtzUTBGQldpeEZRVUZsUVN4SlFVRkpTQ3haUVVGWlNDeE5RVUV2UWl4RlFVRjFRMDBzUjBGQmRrTXNSVUZCTWtNN1FVRkRNVU1zVFVGQlRVb3NXVUZCV1VNc1dVRkJXVWNzUTBGQldpeERRVUZzUWp0QlFVTkJMSE5DUVVGVkwwSXNWVUZCVml4SlFVRjNRa01zVVVGQlVVTXNSMEZCVWl4RFFVRlpMSGREUVVGYUxFVkJRWFZFTmtJc1EwRkJka1FzUlVGQk1FUktMRk5CUVRGRUxFTkJRWGhDTzBGQlEwRkJMRmxCUVZWcVF5eFJRVUZXTEVOQlFXMUNjME1zU1VGQmJrSXNRMEZCZDBKTUxGVkJRVlZzUXl4UFFVRldMRWxCUVhGQ2EwTXNWVUZCVldwRExGRkJRVllzUTBGQmJVSXNUVUZCYmtJc1EwRkJOME03TzBGQlJVRXNUVUZCU1dsRExGVkJRVlZvUXl4UlFVRmtMRVZCUVhkQ08wRkJRM1pDWjBNc1lVRkJWV2hETEZGQlFWWXNRMEZCYlVKeFF5eEpRVUZ1UWl4RFFVRjNRa3dzVlVGQlZXaERMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCZUVJN1FVRkRRVHRCUVVORVowTXNXVUZCVlRsQ0xHTkJRVlk3UVVGRFFTeE5RVUZITEc5Q1FVRlZZU3hMUVVGV0xFbEJRVzFDYVVJc1ZVRkJWVGxDTEdOQlFWWXNSMEZCTWtJc1EwRkJha1FzUlVGQmJVUTdRVUZEYkVSSkxGZEJRVkZETEVkQlFWSXNRMEZCV1N3eVFrRkJXaXhGUVVGNVEzbENMRk5CUVhwRE8wRkJRMEU3UVVGRFJEdEJRVU5FT3p0QlFVVkVMRk5CUVZOU0xIVkNRVUZVTEVkQlFXdERPMEZCUTJwRExFMUJRVWtzU1VGQlNVOHNVVUZCVVN4RFFVRm9RaXhGUVVGdlFrRXNVVUZCVVdRc1owSkJRV2RDWVN4TlFVRTFReXhGUVVGdlJFTXNUMEZCY0VRc1JVRkJORVE3UVVGRE0wUXNUVUZCU1VVc1kwRkJZMmhDTEdkQ1FVRm5RbU1zUzBGQmFFSXNRMEZCYkVJN1FVRkRRU3hOUVVGSFJTeGxRVUZsUVN4WlFVRlpTQ3hOUVVGYUxFZEJRWEZDTEVOQlFYWkRMRVZCUVRCRE8wRkJRM3BETEZWQlFVOHNTMEZCVUR0QlFVTkJPMEZCUTBRN1FVRkRSQ3hSUVVGUExFbEJRVkE3UVVGRFFUczdRVUZGUkN4VFFVRlRVU3cyUWtGQlZDeEhRVUYzUXp0QlFVTjJReXhMUVVGTlF5eHBRa0ZCYVVKc1FpeFJRVUYyUWp0QlFVTkJMRXRCUVVkclFpeGpRVUZJTEVWQlFXdENPMEZCUTJwQ2RrSXNORUpCUVRCQ2QwSXNUMEZCVDBNc2NVSkJRVkFzUTBGQk5rSklMRFpDUVVFM1FpeERRVUV4UWp0QlFVTkJPMEZCUTBRN08wbEJSVXRKTEZjc1IwRkRUQ3gxUWtGQllUdEJRVUZCTzBGQlExb3NRenM3UVVGSFJrRXNXVUZCV1haRExGTkJRVm9zUTBGQmMwSlBMRWRCUVhSQ0xFZEJRVFJDTEZWQlFWVnpRaXhUUVVGV0xFVkJRWEZDTzBGQlEyaEVMSEZDUVVGVk0wSXNWVUZCVml4SlFVRjNRa01zVVVGQlVVTXNSMEZCVWl4RFFVRlpMSEZDUVVGYUxFVkJRVzlEZVVJc1UwRkJjRU1zUTBGQmVFSTdRVUZEUVN4TFFVRkhVaXg1UWtGQlNDeEZRVUUyUWp0QlFVTTFRaXhQUVVGTGJVSXNTMEZCVER0QlFVTkJPMEZCUTBRc1MwRkJSM1pDTEZkQlFVZ3NSVUZCWlR0QlFVTmtMSE5DUVVGVlppeFZRVUZXTEVsQlFYZENReXhSUVVGUlF5eEhRVUZTTEVOQlFWa3NNa0pCUVZvc1EwRkJlRUk3UVVGRFFTeE5RVUZITEVOQlFVTlhMRmRCUVVvc1JVRkJaMEk3UVVGRFprRXNhVUpCUVdNc1JVRkJaRHRCUVVOQk8wRkJRMFJCTEdOQlFWbG5RaXhKUVVGYUxFTkJRV2xDUml4VFFVRnFRanRCUVVOQkxFVkJUa1FzVFVGTlR6dEJRVUZCTEUxQlEwVXZRaXhSUVVSR0xFZEJRMlVyUWl4VFFVUm1MRU5CUTBVdlFpeFJRVVJHT3p0QlFVVk9MRTFCUVVjc1EwRkJRMmRDTEdkQ1FVRm5RbWhDTEZGQlFXaENMRU5CUVVvc1JVRkJPRUk3UVVGRE4wSXNkVUpCUVZWSkxGVkJRVllzU1VGQmQwSkRMRkZCUVZGRExFZEJRVklzUTBGQldTd3lRa0ZCZVVKT0xGRkJRWHBDTEVkQlFXdERMR05CUVRsRExFTkJRWGhDTzBGQlEwRm5RaXh0UWtGQlowSm9RaXhSUVVGb1FpeEpRVUUwUWl4RlFVRTFRanRCUVVOQk8wRkJRMFFzYzBKQlFWVkpMRlZCUVZZc1NVRkJkMEpETEZGQlFWRkRMRWRCUVZJc1EwRkJXU3d5UWtGQmVVSk9MRkZCUVhwQ0xFZEJRV3RETEZOQlFUbERMRU5CUVhoQ08wRkJRMEVzVFVGQlRXZERMR05CUVdOb1FpeG5Ra0ZCWjBKb1FpeFJRVUZvUWl4RFFVRndRanRCUVVOQlowTXNZMEZCV1VNc1NVRkJXaXhEUVVGcFFrWXNVMEZCYWtJN1FVRkRRVHRCUVVWRUxFTkJkRUpFT3p0QlFYbENRVHRCUVVOQlZTeFpRVUZaZGtNc1UwRkJXaXhEUVVGelFuZERMRXRCUVhSQ0xFZEJRVGhDTEZsQlFWazdRVUZEZWtNc1MwRkJSMGdzVFVGQlNDeEZRVUZWTzBGQlExUTdRVUZEUVhoQ0xEUkNRVUV3UW5kQ0xFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ1NDdzJRa0ZCTjBJc1EwRkJNVUk3UVVGRFFTeHpRa0ZCVldwRExGVkJRVllzU1VGQmQwSkRMRkZCUVZGRExFZEJRVklzUTBGQldTeDFRa0ZCV2l4RlFVRnhRMU1zZFVKQlFYSkRMRU5CUVhoQ08wRkJRMEU3UVVGRFJDeERRVTVFT3p0QlFWTkJNRUlzV1VGQldYWkRMRk5CUVZvc1EwRkJjMEp6UWl4SlFVRjBRaXhIUVVFMlFpeFpRVUZaTzBGQlEzaERMRXRCUVVkbExFMUJRVWdzUlVGQlZUdEJRVU5VTEhOQ1FVRlZia01zVlVGQlZpeEpRVUYzUWtNc1VVRkJVVU1zUjBGQlVpeERRVUZaTEhOQ1FVRmFMRVZCUVc5RFV5eDFRa0ZCY0VNc1EwRkJlRUk3UVVGRFFYZENMRk5CUVU5SkxHOUNRVUZRTEVOQlFUUkNOVUlzZFVKQlFUVkNPMEZCUTBFN1FVRkRSQ3hEUVV4RU96dEJRVTlCTEVsQlFVMVpMR05CUVdNc1NVRkJTV01zVjBGQlNpeEZRVUZ3UWpzN1FVRkZRVHRyUWtGRFpXUXNWeUlzSW1acGJHVWlPaUpzYVdJdmRHbGphMlZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0owYVdOclpYSmNJaXdnVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lkR2xqYTJWeVhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0luUnBZMnRsY2x3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlGeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBeEtUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NBM09URTRNRGRtTkRrM05EWmxPRFpoWmpRNE15SXNJbWx0Y0c5eWRDQnRZVzVoWjJWeUlHWnliMjBnSnk0dlRXRnVZV2RsY2ljN1hHNWNiaTh2SUhSdlJHODZJSE4xY0hCdmNuUWdZbTkwYUNCallXeHNZbUZqYXlCaGJtUWdjSEp2YldselpWeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVkdsamEwVnVkSEo1WEc1N1hHNWNkQzhxS2x4dVhIUWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdZMjl1ZEdWNGRDQXRJRlJvWlNCY0luUm9hWE5jSWlCaGNtZDFiV1Z1ZENCbWIzSWdkR2hsSUd4cGMzUmxibVZ5SUdaMWJtTjBhVzl1TGx4dVhIUWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVmU0JzYVhOMFpXNWxjaTVjYmx4MElDb3ZYRzVjZEdOdmJuTjBjblZqZEc5eUtHTnZiblJsZUhRc0lHeHBjM1JsYm1WeUxDQmpZV3hzWW1GamF5QTlJRzUxYkd3c0lIQnlhVzl5YVhSNUlEMGdNQ2xjYmx4MGUxeHVYSFJjZEhSb2FYTXVZMjl1ZEdWNGRDQTlJR052Ym5SbGVIUTdYRzVjZEZ4MGRHaHBjeTVzYVhOMFpXNWxjaUE5SUd4cGMzUmxibVZ5TzF4dVhIUmNkSFJvYVhNdVkyRnNiR0poWTJzZ1BTQmpZV3hzWW1GamF6dGNibHgwWEhSMGFHbHpMbkJ5YVc5eWFYUjVJRDBnY0hKcGIzSnBkSGs3WEc1Y2RGeDBkR2hwY3k1bGVHVmpkWFJwYjI1RGIzVnVkQ0E5SURBN1hHNWNkSDFjYmx4dWZWeHVYRzR2S2kwdExTMGdVSFZpYkdsamZGQnliM1J2ZEhsd1pTQk5aWFJvYjJSeklDMHRMU292WEc1Y2JsUnBZMnRGYm5SeWVTNXdjbTkwYjNSNWNHVXVaR2x6Y0c5elpTQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RGUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JQ1ltSUdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYTBWdWRISjVJR1JwYzNCdmMyVTZYQ0lzSUhSb2FYTXBPMXh1WEhSMGFHbHpMbU52Ym5SbGVIUWdQU0J1ZFd4c08xeHVYSFIwYUdsekxteHBjM1JsYm1WeUlEMGdiblZzYkR0Y2JseDBkR2hwY3k1allXeHNZbUZqYXlBOUlHNTFiR3c3WEc1Y2RIUm9hWE11Y0hKcGIzSnBkSGtnUFNCdWRXeHNPMXh1WEhSMGFHbHpMbVY0WldOMWRHbHZia052ZFc1MElEMGdUbUZPTzF4dWZUdGNibHh1VkdsamEwVnVkSEo1TG5CeWIzUnZkSGx3WlM1bGVHVmpkWFJsSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwVkdsamEwVnVkSEo1TG5OMFlXTnJSR1ZpZFdjZ0ppWWdZMjl1YzI5c1pTNXNiMmNvWENKdFlXNWhaMlZ5TG1Ga1pEb2dYQ0lzSUhSb2FYTXBPMXh1WEhSdFlXNWhaMlZ5TG1Ga1pDaDBhR2x6S1R0Y2JuMDdYRzVjYmx4dVZHbGphMFZ1ZEhKNUxraEpSMGdnUFNBd08xeHVWR2xqYTBWdWRISjVMazVQVWsxQlRDQTlJREU3WEc1VWFXTnJSVzUwY25rdVRFOVhJRDBnTWp0Y2JseHVWR2xqYTBWdWRISjVMbUZzYkc5M1pXUlVhV05yUTI5MWJuUWdQU0F4TURBN1hHNVVhV05yUlc1MGNua3VaR1ZpZFdjZ1BTQm1ZV3h6WlR0Y2JsUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JRDBnWm1Gc2MyVTdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2VkdsamEwVnVkSEo1TG1weklpd2lhVzF3YjNKMElGUnBZMnRsY2lCbWNtOXRJQ2N1TDFScFkydEZiblJ5ZVNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGUnBZMnRsY2p0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbWx0Y0c5eWRDQlVhV05yUlc1MGNua2dabkp2YlNBbkxpOVVhV05yUlc1MGNua25PMXh1YkdWMElISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSUQwZ01Ec3ZMeUJtYjNJZ1YybHVaRzkzY3lCRmJuWmNibHh1THk5Yk1DMUlTVWRJTENBeExVNVBVazFCVEN3Z01pMU1UMWRkWEc1c1pYUWdjSEpwYjNKcGRIbEZiblJ5YVdWeklEMGdXMjUxYkd3c0lHNTFiR3dzSUc1MWJHeGRPMXh1YkdWMElIZGhhWFJGYm5SeWFXVnpJRDBnYm5Wc2JEdGNibHh1YkdWMElIUnBZMnREYjNWdWRDQTlJREE3WEc1c1pYUWdhWE5GZUdWamRYUnBibWNnUFNCbVlXeHpaVHRjYmx4dVpuVnVZM1JwYjI0Z2IyNVVhV05yS0NsN1hHNWNkSFJwWTJ0RGIzVnVkQ3NyTzF4dVhIUnBaaWhVYVdOclJXNTBjbmt1WkdWaWRXY3BlMXh1WEhSY2RHTnZibk52YkdVdWJHOW5LRndpVkdsamF5QmpiM1Z1ZERvZ1hDSXNJSFJwWTJ0RGIzVnVkQ2s3WEc1Y2RIMWNibHgwYVdZb2RHbGphME52ZFc1MElEd2dWR2xqYTBWdWRISjVMbUZzYkc5M1pXUlVhV05yUTI5MWJuUXBlMXh1WEhSY2RHVjRaV04xZEdWUWNtbHZjbWwwZVVWdWRISnBaWE1vS1R0Y2JseDBYSFJ0YjNabFYyRnBkR2x1WjBWdWRISnBaWE5HYjNKRmVHVmpkWFJwYjI0b0tUdGNibHgwWEhScFppaGhjbVZRY21sdmNtbDBlVVZ1ZEhKcFpYTkZiWEIwZVNncEtYdGNibHgwWEhSY2RITjBiM0FvS1R0Y2JseDBYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwWEhSOVhHNWNkSDBnWld4elpTQjdYRzVjZEZ4MFkyOXVjMjlzWlM1M1lYSnVLRndpUVc1cGJXRjBhVzl1SUdaeVlXMWxJR3h2YjNBZ1pYaGxZM1YwWldRZ2RHOGdhWFJ6SUhObGRDQnNhVzFwZERvZ1hDSXNJRlJwWTJ0RmJuUnllUzVoYkd4dmQyVmtWR2xqYTBOdmRXNTBLVHRjYmx4MFhIUnBaaWhVYVdOclJXNTBjbmt1WkdWaWRXY3BlMXh1WEhSY2RGeDBZMjl1YzI5c1pTNXNiMmNvWENKRmJuUnlhV1Z6T2lCY0lpd2djSEpwYjNKcGRIbEZiblJ5YVdWeld6QmRMSEJ5YVc5eWFYUjVSVzUwY21sbGMxc3hYU3h3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJNbDBzZDJGcGRFVnVkSEpwWlhNcE8xeHVYSFJjZEgxY2JseDBYSFJ5WlhObGRDZ3BPMXh1WEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MGZWeHVYSFJ5WlhSMWNtNGdkSEoxWlR0Y2JseHVmVnh1WEc1Y2JtWjFibU4wYVc5dUlITjBiM0FvS1h0Y2JseDBkR2xqYTBOdmRXNTBJRDBnTUR0Y2JseDBhWE5GZUdWamRYUnBibWNnUFNCbVlXeHpaVHRjYmx4MGRHbGphMDFoYm1GblpYSXVjM1J2Y0NncE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYTmxkQ2dwZTF4dVhIUnpkRzl3S0NrN1hHNWNkSEJ5YVc5eWFYUjVSVzUwY21sbGN5QTlJRnR1ZFd4c0xDQnVkV3hzTENCdWRXeHNYVHRjYmx4MGQyRnBkRVZ1ZEhKcFpYTWdQU0J1ZFd4c08xeHVmVnh1WEc1Y2JtWjFibU4wYVc5dUlHMXZkbVZYWVdsMGFXNW5SVzUwY21sbGMwWnZja1Y0WldOMWRHbHZiaWdwZTF4dVhIUmpiMjV6ZENCbGJuUnlhV1Z6UTI5MWJuUWdQU0IzWVdsMFJXNTBjbWxsY3lBL0lDQjNZV2wwUlc1MGNtbGxjeTVzWlc1bmRHZ2dPaUF3TzF4dVhIUnBaaWgzWVdsMFJXNTBjbWxsY3lBbUppQmxiblJ5YVdWelEyOTFiblFnUGlBd0tTQjdYRzVjZEZ4MFptOXlLR3hsZENCcGJtUmxlQ0E5SURBZ095QnBibVJsZUNBOElHVnVkSEpwWlhORGIzVnVkRHNnYVc1a1pYZ3JLeWw3WEc1Y2RGeDBYSFJzWlhRZ2RHbGphMFZ1ZEhKNUlEMGdkMkZwZEVWdWRISnBaWE5iYVc1a1pYaGRPMXh1WEhSY2RGeDBZMjl1YzNRZ2V5QndjbWx2Y21sMGVTQjlJRDBnZEdsamEwVnVkSEo1TzF4dVhIUmNkRngwYVdZb0lYQnlhVzl5YVhSNVJXNTBjbWxsYzF0d2NtbHZjbWwwZVYwcGUxeHVYSFJjZEZ4MFhIUndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZElEMGdXMTA3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBYSFJqYjI1emRDQjBhV05yUlc1MGNtbGxjeUE5SUhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjA3WEc1Y2RGeDBYSFIwYVdOclJXNTBjbWxsY3k1d2RYTm9LSFJwWTJ0RmJuUnllU2s3WEc1Y2RGeDBmVnh1WEhSOVhHNWNkSGRoYVhSRmJuUnlhV1Z6SUQwZ2JuVnNiRHRjYm4xY2JseHVablZ1WTNScGIyNGdaWGhsWTNWMFpWQnlhVzl5YVhSNVJXNTBjbWxsY3lncGUxeHVYSFJwYzBWNFpXTjFkR2x1WnlBOUlIUnlkV1U3WEc1Y2RHWnZjaWhzWlhRZ2FXNWtaWGdnUFNBd0lEc2dhVzVrWlhnZ1BDQndjbWx2Y21sMGVVVnVkSEpwWlhNdWJHVnVaM1JvT3lCcGJtUmxlQ3NyS1h0Y2JseDBYSFJzWlhRZ2RHbGphMFZ1ZEhKcFpYTWdQU0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJhVzVrWlhoZE8xeHVYSFJjZEdsbUtIUnBZMnRGYm5SeWFXVnpJQ1ltSUhScFkydEZiblJ5YVdWekxteGxibWQwYUNBK0lEQXBJSHRjYmx4MFhIUmNkR1Y0WldOMWRHVlVhV05yUlc1MGNtbGxjeWgwYVdOclJXNTBjbWxsY3lrN1hHNWNkRngwWEhRdkwwTnNaV0Z5SUhSb1pXMGdiMjVqWlNCbGVHVmpkWFJsWkZ4dVhIUmNkRngwY0hKcGIzSnBkSGxGYm5SeWFXVnpXMmx1WkdWNFhTQTlJRzUxYkd3N1hHNWNkRngwZlZ4dVhIUjlYRzVjZEdselJYaGxZM1YwYVc1bklEMGdabUZzYzJVN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdWNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3loMGFXTnJSVzUwY21sbGN5bDdYRzVjZEM4dklHbHRjRzl5ZEdGdWRDQjBieUIxYzJVZ1ptOXlMV3h2YjNCY2JseDBMeThnZEdsamEwVnVkSEpwWlhNZ1ozSnZkM01nWkhsdVlXMXBZMkZzYkhrZ1lua2diMjVsSUc5bUlHbDBjeUJsYm5SeWVWeHVYSFF2THlCbWIzSWdaWGhoYlhCc1pUb2diR1YwSUhOaGVTQjNaU0JvWVhabElHOXVaU0JsYm5SeWVTd2dZVzVrSUdWNFpXTjFkR2x1WnlCMGFHRjBJR1Z1ZEhKNUlHMXBaMmgwSUdGa1pITWdZVzV2ZEdobGNpQmxiblJ5ZVZ4dVhIUXZMeUIzYVhSb0lHMWhjQ0JtZFc1amRHbHZiaUIzWlNCallXNTBJR1Y0WldOMWRHVWdaSGx1WVcxcFkyRnNiSGtnWjNKdmQybHVaeUJsYm5SeWFXVnpMbHh1WEhSbWIzSW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHbGphMFZ1ZEhKcFpYTXViR1Z1WjNSb095QnBLeXNwZTF4dVhIUmNkR052Ym5OMElIUnBZMnRGYm5SeWVTQTlJSFJwWTJ0RmJuUnlhV1Z6VzJsZE8xeHVYSFJjZEZScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklDWW1JR052Ym5OdmJHVXViRzluS0Z3aVZHbGphMDFoYm1GblpYSTZJR1Y0WldOMWRHVlVhV05yUlc1MGNtbGxjeUE2SUdadmNpQmNJaUFzSUdrc0lIUnBZMnRGYm5SeWVTazdYRzVjZEZ4MGRHbGphMFZ1ZEhKNUxteHBjM1JsYm1WeUxtTmhiR3dvZEdsamEwVnVkSEo1TG1OdmJuUmxlSFFnZkh3Z2RHbGphMFZ1ZEhKNUxteHBjM1JsYm1WeVd5ZDBhR2x6SjEwcE8xeHVYRzVjZEZ4MGFXWWdLSFJwWTJ0RmJuUnllUzVqWVd4c1ltRmpheWtnZTF4dVhIUmNkRngwZEdsamEwVnVkSEo1TG1OaGJHeGlZV05yTG1OaGJHd29kR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJXeWQwYUdsekoxMHBPMXh1WEhSY2RIMWNibHgwWEhSMGFXTnJSVzUwY25rdVpYaGxZM1YwYVc5dVEyOTFiblFyS3p0Y2JseDBYSFJwWmloVWFXTnJSVzUwY25rdVpHVmlkV2NnSmlZZ2RHbGphMFZ1ZEhKNUxtVjRaV04xZEdsdmJrTnZkVzUwSUQ0Z01TbDdYRzVjZEZ4MFhIUmpiMjV6YjJ4bExteHZaeWhjSWtWNFpXTjFkR1ZrSUcxdmNtVWdkR2hoYmlCdmJtTmxPaUJjSWl3Z2RHbGphMFZ1ZEhKNUtUdGNibHgwWEhSOVhHNWNkSDFjYm4xY2JseHVablZ1WTNScGIyNGdZWEpsVUhKcGIzSnBkSGxGYm5SeWFXVnpSVzF3ZEhrb0tYdGNibHgwWm05eUtHeGxkQ0JwYm1SbGVDQTlJREFnT3lCcGJtUmxlQ0E4SUhCeWFXOXlhWFI1Ulc1MGNtbGxjeTVzWlc1bmRHZzdJR2x1WkdWNEt5c3BlMXh1WEhSY2RHeGxkQ0IwYVdOclJXNTBjbWxsY3lBOUlIQnlhVzl5YVhSNVJXNTBjbWxsYzF0cGJtUmxlRjA3WEc1Y2RGeDBhV1lvZEdsamEwVnVkSEpwWlhNZ0ppWWdkR2xqYTBWdWRISnBaWE11YkdWdVozUm9JRDRnTUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RISmxkSFZ5YmlCMGNuVmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWdwZTF4dVhIUmpiMjV6ZENCemFHOTFiR1JEYjI1MGFXNTFaU0E5SUc5dVZHbGpheWdwTzF4dVhIUnBaaWh6YUc5MWJHUkRiMjUwYVc1MVpTbDdYRzVjZEZ4MGNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FnUFNCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVU5oYkd4aVlXTnJLVHRjYmx4MGZWeHVmVnh1WEc1amJHRnpjeUJVYVdOclRXRnVZV2RsY2lCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0NsN1hHNWNkSDFjYm4xY2JseHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1Ga1pDQTlJR1oxYm1OMGFXOXVJQ2gwYVdOclJXNTBjbmtwSUh0Y2JseDBWR2xqYTBWdWRISjVMbk4wWVdOclJHVmlkV2NnSmlZZ1kyOXVjMjlzWlM1c2IyY29YQ0pVYVdOclRXRnVZV2RsY2pvZ1lXUmtJRG9nWENJZ0xDQjBhV05yUlc1MGNua3BPMXh1WEhScFppaGhjbVZRY21sdmNtbDBlVVZ1ZEhKcFpYTkZiWEIwZVNncEtYdGNibHgwWEhSMGFHbHpMbk4wWVhKMEtDbGNibHgwZlZ4dVhIUnBaaWhwYzBWNFpXTjFkR2x1WnlsN1hHNWNkRngwVkdsamEwVnVkSEo1TG5OMFlXTnJSR1ZpZFdjZ0ppWWdZMjl1YzI5c1pTNXNiMmNvWENKVWFXTnJUV0Z1WVdkbGNqb2dZV1JrSURvZ0lIZGhhWFFnWENJcE8xeHVYSFJjZEdsbUtDRjNZV2wwUlc1MGNtbGxjeWw3WEc1Y2RGeDBYSFIzWVdsMFJXNTBjbWxsY3lBOUlGdGRPMXh1WEhSY2RIMWNibHgwWEhSM1lXbDBSVzUwY21sbGN5NXdkWE5vS0hScFkydEZiblJ5ZVNrN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MFkyOXVjM1FnZXlCd2NtbHZjbWwwZVNCOUlEMGdkR2xqYTBWdWRISjVPMXh1WEhSY2RHbG1LQ0Z3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRLWHRjYmx4MFhIUmNkRlJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUNZbUlHTnZibk52YkdVdWJHOW5LRndpVkdsamEwMWhibUZuWlhJNklHRmtaQ0E2SUdsdUlGd2lLM0J5YVc5eWFYUjVLMXdpSURvZ2JtVjNJRUZ5Y21GNVhDSXBPMXh1WEhSY2RGeDBjSEpwYjNKcGRIbEZiblJ5YVdWelczQnlhVzl5YVhSNVhTQTlJRnRkTzF4dVhIUmNkSDFjYmx4MFhIUlVhV05yUlc1MGNua3VjM1JoWTJ0RVpXSjFaeUFtSmlCamIyNXpiMnhsTG14dlp5aGNJbFJwWTJ0TllXNWhaMlZ5T2lCaFpHUWdPaUJwYmlCY0lpdHdjbWx2Y21sMGVTdGNJaUE2SUhCMWMyaGNJaWs3WEc1Y2RGeDBZMjl1YzNRZ2RHbGphMFZ1ZEhKcFpYTWdQU0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRPMXh1WEhSY2RIUnBZMnRGYm5SeWFXVnpMbkIxYzJnb2RHbGphMFZ1ZEhKNUtUdGNibHgwZlZ4dVhHNTlPMXh1WEc1Y2JpOHZJRlJ2Wkc4NklGTjFjSEJ2Y25RZ1ptOXlJRTV2WkdWS1V5QmNibFJwWTJ0TllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1emRHRnlkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwYVdZb2QybHVaRzkzS1h0Y2JseDBYSFF2THlCM2FXeHNJSEpsWTJWcGRtVnpJSFJwYldWemRHRnRjQ0JoY3lCaGNtZDFiV1Z1ZEZ4dVhIUmNkSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2h5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlrN1hHNWNkRngwVkdsamEwVnVkSEo1TG5OMFlXTnJSR1ZpZFdjZ0ppWWdZMjl1YzI5c1pTNXNiMmNvWENKVWFXTnJUV0Z1WVdkbGNqb2djM1JoY25RZ09pQmNJaXdnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUXBPMXh1WEhSOVhHNTlPMXh1WEc1Y2JsUnBZMnROWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzV6ZEc5d0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUnBaaWgzYVc1a2IzY3BlMXh1WEhSY2RGUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JQ1ltSUdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYTAxaGJtRm5aWEk2SUhOMGIzQWdPaUJjSWl3Z2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FwTzF4dVhIUmNkSGRwYm1SdmR5NWpZVzVqWld4QmJtbHRZWFJwYjI1R2NtRnRaU2h5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDazdYRzVjZEgxY2JuMDdYRzVjYm1OdmJuTjBJSFJwWTJ0TllXNWhaMlZ5SUQwZ2JtVjNJRlJwWTJ0TllXNWhaMlZ5S0NrN1hHNWNiaTh2SUhOcGJtZHNaWFJ2YmtsdWMzUmhibUZqWlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnZEdsamEwMWhibUZuWlhJN1hHNWNibHh1WEc1Y2JseHVYRzVjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5TllXNWhaMlZ5TG1weklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBFbnRyeSBmcm9tICcuL2VudHJ5JztcbmltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG51bGw7IC8vIGNvbm5lY3RvciBpcyByZXNwb25zaWJsZSBmb3Igc2VxdWVuY2luZyBmdW5jdGlvbnNcblx0ICAgIHRoaXMuZW5hYmxlQ29ubmVjdG9yID0gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IHJlc3BvbnNpYmxlIGZvciBpbml0aWF0aW5nIHRyaWdnZXJcbi8vIGlmIGNhbGxlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgbWFrZSBhIHN5bmNlZCBlZmZlY3Qgb2YgZXhlY3V0aW9uXG5GdW5jdGlvbnMucHJvdG90eXBlLmV4ZWN1dGVUcmlnZ2VyZXIgPSBmdW5jdGlvbihjb250ZXh0LCB0cmlnZ2VySW5pdGlhdGluZ2Z1bmN0aW9uLCB0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdGNvbnN0IF9leGVjdXRlVHJpZ2dlcmVyID0gKCk9Pntcblx0XHRsZXQgdGlja2VyO1xuXHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0dHJpZ2dlckluaXRpYXRpbmdmdW5jdGlvbi5jYWxsKGNvbnRleHQpO1xuXHRcdFx0aWYodHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0XHR0cmlnZ2VyZXJDYWxsYmFjayAmJiB0cmlnZ2VyZXJDYWxsYmFjaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgdHJpZ2dlcmVyQ2FsbGJhY2ssIG51bGwsIDIpO1xuXHRcdFx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCBfZXhlY3V0ZVRyaWdnZXJlciwgdHJpZ2dlcmVyQ2FsbGJhY2ssIDIpO1xuXHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHR9XG5cdH07XG5cdF9leGVjdXRlVHJpZ2dlcmVyKCk7XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCwgZnVuYywgZXhlY3V0ZUxhdGVySW5OZXh0VGljayA9IGZhbHNlLCBwcmlvcml0eSA9IDAsIGxpc3RlbmVyQ2FsbGJhY2sgPSBudWxsKXtcblx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBhZGRMaXN0ZW5lcjogXCIsIHRoaXMpO1xuICAgIGxldCBlbnRyeTtcbiAgICBpZiAoZXhlY3V0ZUxhdGVySW5OZXh0VGljayl7XG5cblx0ICAgICBjb25zdCB0aWNrZXJDYWxsYmFjayA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgLSAxO1xuXHRcdCAgICBpZihsaXN0ZW5lckNhbGxiYWNrKXtcblx0XHRcdCAgICBsaXN0ZW5lckNhbGxiYWNrLmNhbGwobGlzdGVuZXJDYWxsYmFja1sndGhpcyddKVxuXHRcdCAgICB9XG5cdFx0ICAgIGlmKCB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGxpc3RlbmVyc0RpZEV4ZWN1dGU6IFwiLCB0aGlzKTtcblx0XHRcdCAgICB0aGlzLmxpc3RlbmVyc0RpZEV4ZWN1dGUoKTtcblx0XHQgICAgfVxuXHQgICAgfTtcbiAgICAgICAgY29uc3QgdGlja2VyID0gbmV3IFRpY2tlcihjb250ZXh0LCBmdW5jLCB0aWNrZXJDYWxsYmFjaywgcHJpb3JpdHkpO1xuXHQgICAgZW50cnkgPSBuZXcgRW50cnkodGlja2VyLCB0aWNrZXIuZXhlY3V0ZSk7XG5cdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGFkZExpc3RlbmVyOiBmcmFtZUVudHJpZXM6IFwiLCBlbnRyeSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzLnB1c2goZW50cnkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoY29udGV4dCwgZnVuYyk7XG5cdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGFkZExpc3RlbmVyOiBlbnRyaWVzOiBcIiwgZW50cnkpO1xuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfVxufTtcblxuXG5GdW5jdGlvbnMucHJvdG90eXBlLmxpc3RlbmVyc1dpbGxFeGVjdXRlID0gZnVuY3Rpb24oKXtcblxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5zaG91bGRMaXN0ZW5lcnNFeGVjdXRlID0gZnVuY3Rpb24oKXtcblx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBzaG91bGRMaXN0ZW5lcnNFeGVjdXRlOiBcIiwgdHJ1ZSwgdGhpcyk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5saXN0ZW5lcnNEaWRFeGVjdXRlID0gZnVuY3Rpb24oKXtcblx0dGhpcy5lbmFibGVDb25uZWN0b3IgJiYgdGhpcy5jb25uZWN0b3IgJiYgdGhpcy5jb25uZWN0b3IoKTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGNhbGxiYWNrID0gbnVsbCl7XG5cdGxldCBlbnRyeSwgaTtcblx0Y29uc3Qge2ZyYW1lRW50cmllcywgZW50cmllc30gPSB0aGlzO1xuXG5cdGZvcihpID0gMDsgaSA8IGZyYW1lRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdCAgICBjb25zdCBmcmFtZUVudHJ5ID0gIGZyYW1lRW50cmllc1tpXTtcblx0XHRlbnRyeSA9IGZyYW1lRW50cnkuY29udGV4dDtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRmcmFtZUVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdH0gZWxzZSB7IC8vIGZyYW1lIHRyaWdnZXIgTGlzdGVuZXJzIGFyZSBzdGlsbCBydW5uaW5nXG5cdFx0XHRcdGxldCB0aWNrZXJFbnRyeTtcblx0XHRcdFx0Y29uc3QgZGlzcG9zZURvbmVOb3RpZmllciA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdFx0XHR9IGVsc2V7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGZvcihpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGVudHJ5ID0gZW50cmllc1tpXTtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnNldENvbm5lY3RvciA9IGZ1bmN0aW9uKGNvbm5lY3Rvcil7XG5cdHRoaXMuY29ubmVjdG9yID0gY29ubmVjdG9yO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZUNvbm5lY3RvciA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29ubmVjdG9yID0gbnVsbDtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5saW5rQ29ubmVjdG9yID0gZnVuY3Rpb24oKXtcblx0dGhpcy5lbmFibGVDb25uZWN0b3IgPSB0cnVlO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnVuTGlua0Nvbm5lY3RvciA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuZW5hYmxlQ29ubmVjdG9yID0gZmFsc2U7XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudHJpZ2dlckxpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG5cdGNvbnN0IHNob3VsZFRyaWdnZXIgPSB0aGlzLnNob3VsZExpc3RlbmVyc0V4ZWN1dGUoKTtcblx0aWYoc2hvdWxkVHJpZ2dlcil7XG5cdFx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBsaXN0ZW5lcnNXaWxsRXhlY3V0ZTogXCIsIHRoaXMpO1xuXHRcdHRoaXMubGlzdGVuZXJzV2lsbEV4ZWN1dGUoKTtcblx0XHRGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyBcIiwgdGhpcyk7XG5cdFx0Y29uc3QgZW50cmllc0luZGV4VG9EaXNwb3NlID0gW107XG5cdFx0dGhpcy5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcblx0XHRcdGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHRcdFx0XHRlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuXHRcdFx0dGhpcy5lbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuXHRcdH0sIHRoaXMpO1xuXG5cblx0XHRpZih0aGlzLmZyYW1lRW50cmllcy5sZW5ndGggPiAwKXtcblx0XHRcdHRoaXMuZnJhbWVFbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcblx0XHRcdFx0aWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRcdFx0dGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgKyAxO1xuXHRcdFx0XHRcdGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuXHRcdFx0XHR0aGlzLmZyYW1lRW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcblx0XHRcdH0sIHRoaXMpXG5cdFx0fSBlbHNlIHtcblx0XHRcdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogbGlzdGVuZXJzRGlkRXhlY3V0ZTogXCIsIHRoaXMpO1xuXHRcdFx0dGhpcy5saXN0ZW5lcnNEaWRFeGVjdXRlKCk7XG5cdFx0fVxuXHR9XG5cbn07XG5cbkZ1bmN0aW9ucy5zdGFja0RlYnVnID0gZmFsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2Z1bmN0aW9ucy5qcyIsImltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZ1bmMpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuYztcbiAgICB9XG59XG5cbi8vIE1ldGhvZCBhdmFpbGFibGUgb25seSBvbiBFbnRyeSBpbnN0YW5jZSBub3QgaW4gQ2xhc3NcbkVudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCl7XG4gICAgaWYodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgVGlja2VyKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVyID0gbnVsbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZW50cnkuanMiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gXCIuLy4uL2xpYlwiO1xuRnVuY3Rpb25zLnN0YWNrRGVidWcgPSBmYWxzZTtcbmZ1bmN0aW9uIGltbWVkaWF0ZUZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coXCJJIGFtIEltbWVkaWF0ZSBGdW5jdGlvblwiKTtcbiAgICBjb25zb2xlLmxvZyhmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5mdW5jdGlvbiBmcmFtZUZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coXCJJIGFtIEZyYW1lIEZ1bmN0aW9uXCIsIGZ1bmN0aW9ucy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGZyYW1lRnVuY3Rpb25TZWNvbmQoKXtcbiAgICBjb25zb2xlLmxvZyhcIkkgYW0gRnJhbWUgRnVuY3Rpb24gU2Vjb25kXCIsIGZ1bmN0aW9ucy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlbmVyc0RvbmUoKXtcblx0Y29uc29sZS5sb2coXCJBbGwgRnVuY3Rpb24gZXhlY3V0ZWRcIiwgZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuY29uc3QgZnVuY3Rpb25zID0gbmV3IEZ1bmN0aW9ucyhsaXN0ZW5lcnNEb25lKTtcbmZ1bmN0aW9ucy5hZGRMaXN0ZW5lcih3aW5kb3csZnJhbWVGdW5jdGlvblNlY29uZCwgdHJ1ZSwgMSk7XG5mdW5jdGlvbnMuYWRkTGlzdGVuZXIod2luZG93LGZyYW1lRnVuY3Rpb24sIHRydWUgKTtcbmZ1bmN0aW9ucy5hZGRMaXN0ZW5lcih3aW5kb3csaW1tZWRpYXRlRnVuY3Rpb24pO1xuXG5jb25zb2xlLmxvZyhcInRyaWdnZXIgMVwiKTtcblxuZnVuY3Rpb25zLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblxuLy8gMiBlbnRyaWVzXG5mdW5jdGlvbnMucmVtb3ZlTGlzdGVuZXIod2luZG93LGZyYW1lRnVuY3Rpb25TZWNvbmQsIGZ1bmN0aW9ucy50cmlnZ2VyTGlzdGVuZXJzLmJpbmQoZnVuY3Rpb25zKSk7XG5jb25zb2xlLmxvZyhcIlJlbW92ZSBmcmFtZSBmdW5jdGlvblwiKTtcblxuLy8gM3JkIGVudHJ5XG5mdW5jdGlvbnMucmVtb3ZlTGlzdGVuZXIod2luZG93LGltbWVkaWF0ZUZ1bmN0aW9uKTtcbmNvbnNvbGUubG9nKFwiUmVtb3ZlIEltbWVkaWF0ZSBmdW5jdGlvblwiKTtcblxuY29uc29sZS5sb2coXCJ0cmlnZ2VyIDJcIik7XG5mdW5jdGlvbnMudHJpZ2dlckxpc3RlbmVycygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=