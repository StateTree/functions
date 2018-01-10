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
	this.context = null;
	this.listener = null;
	this.callback = null;
	this.priority = null;
	this.executionCount = NaN;
};

TickEntry.prototype.execute = function () {
	_Manager2.default.add(this);
};

TickEntry.HIGH = 0;
TickEntry.NORMAL = 1;
TickEntry.LOW = 2;

TickEntry.allowedTickCount = 100;
TickEntry.debug = false;

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
	console.log(tickCount);
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
	if (arePriorityEntriesEmpty()) {
		this.start();
	}
	if (isExecuting) {
		console.log("Added to Wait entries");
		if (!waitEntries) {
			waitEntries = [];
		}
		waitEntries.push(tickEntry);
	} else {
		var priority = tickEntry.priority;

		if (!priorityEntries[priority]) {
			priorityEntries[priority] = [];
		}
		var tickEntries = priorityEntries[priority];
		tickEntries.push(tickEntry);
	}
};

// Todo: Support for NodeJS 
TickManager.prototype.start = function () {
	if (window) {
		// will receives timestamp as argument
		requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
	}
};

TickManager.prototype.stop = function () {
	if (window) {
		console.log('cancelAnimationFrame', requestAnimationFrameId);
	}
};

var tickManager = new TickManager();

// singletonInstanace
exports.default = tickManager;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZjY3NTVlNTI1NzEwYjYyMDYwZCIsIndlYnBhY2s6Ly8vLi9saWIvVGlja0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwiZXhlY3V0aW9uQ291bnQiLCJwcm90b3R5cGUiLCJkaXNwb3NlIiwiTmFOIiwiZXhlY3V0ZSIsImFkZCIsIkhJR0giLCJOT1JNQUwiLCJMT1ciLCJhbGxvd2VkVGlja0NvdW50IiwiZGVidWciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsInByaW9yaXR5RW50cmllcyIsIndhaXRFbnRyaWVzIiwidGlja0NvdW50IiwiaXNFeGVjdXRpbmciLCJvblRpY2siLCJjb25zb2xlIiwibG9nIiwiZXhlY3V0ZVByaW9yaXR5RW50cmllcyIsIm1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbiIsImFyZVByaW9yaXR5RW50cmllc0VtcHR5Iiwic3RvcCIsIndhcm4iLCJyZXNldCIsInRpY2tNYW5hZ2VyIiwiZW50cmllc0NvdW50IiwibGVuZ3RoIiwiaW5kZXgiLCJ0aWNrRW50cnkiLCJ0aWNrRW50cmllcyIsInB1c2giLCJleGVjdXRlVGlja0VudHJpZXMiLCJpIiwiY2FsbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrIiwic2hvdWxkQ29udGludWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJUaWNrTWFuYWdlciIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FB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LFVBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLE1BQUcsQ0FBQ0wsV0FBSixFQUFnQjtBQUNmQSxpQkFBYyxFQUFkO0FBQ0E7QUFDREEsY0FBWWtCLElBQVosQ0FBaUJGLFNBQWpCO0FBQ0EsRUFORCxNQU1PO0FBQUEsTUFDRTlCLFFBREYsR0FDZThCLFNBRGYsQ0FDRTlCLFFBREY7O0FBRU4sTUFBRyxDQUFDYSxnQkFBZ0JiLFFBQWhCLENBQUosRUFBOEI7QUFDN0JhLG1CQUFnQmIsUUFBaEIsSUFBNEIsRUFBNUI7QUFDQTtBQUNELE1BQU0rQixjQUFjbEIsZ0JBQWdCYixRQUFoQixDQUFwQjtBQUNBK0IsY0FBWUMsSUFBWixDQUFpQkYsU0FBakI7QUFDQTtBQUVELENBbkJEOztBQXNCQTtBQUNBVSxZQUFZdEMsU0FBWixDQUFzQnVDLEtBQXRCLEdBQThCLFlBQVk7QUFDekMsS0FBR0gsTUFBSCxFQUFVO0FBQ1Q7QUFDQTFCLDRCQUEwQjBCLE9BQU9DLHFCQUFQLENBQTZCSCw2QkFBN0IsQ0FBMUI7QUFDQTtBQUNELENBTEQ7O0FBUUFJLFlBQVl0QyxTQUFaLENBQXNCcUIsSUFBdEIsR0FBNkIsWUFBWTtBQUN4QyxLQUFHZSxNQUFILEVBQVU7QUFDVHBCLFVBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ1AsdUJBQXBDO0FBQ0E7QUFDRCxDQUpEOztBQU1BLElBQU1jLGNBQWMsSUFBSWMsV0FBSixFQUFwQjs7QUFFQTtrQkFDZWQsVyIsImZpbGUiOiJsaWIvdGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZjY3NTVlNTI1NzEwYjYyMDYwZCIsImltcG9ydCBtYW5hZ2VyIGZyb20gJy4vTWFuYWdlcic7XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja0VudHJ5XG57XG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIGxpc3RlbmVyLCBjYWxsYmFjayA9IG51bGwsIHByaW9yaXR5ID0gMClcblx0e1xuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5leGVjdXRpb25Db3VudCA9IDA7XG5cdH1cblxufVxuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSBOYU47XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbigpe1xuXHRtYW5hZ2VyLmFkZCh0aGlzKTtcbn07XG5cblxuVGlja0VudHJ5LkhJR0ggPSAwO1xuVGlja0VudHJ5Lk5PUk1BTCA9IDE7XG5UaWNrRW50cnkuTE9XID0gMjtcblxuVGlja0VudHJ5LmFsbG93ZWRUaWNrQ291bnQgPSAxMDA7XG5UaWNrRW50cnkuZGVidWcgPSBmYWxzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9UaWNrRW50cnkuanMiLCJpbXBvcnQgVGlja2VyIGZyb20gJy4vVGlja0VudHJ5JztcblxuZXhwb3J0IGRlZmF1bHQgVGlja2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IFRpY2tFbnRyeSBmcm9tICcuL1RpY2tFbnRyeSc7XG5sZXQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSAwOy8vIGZvciBXaW5kb3dzIEVudlxuXG4vL1swLUhJR0gsIDEtTk9STUFMLCAyLUxPV11cbmxldCBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG5sZXQgd2FpdEVudHJpZXMgPSBudWxsO1xuXG5sZXQgdGlja0NvdW50ID0gMDtcbmxldCBpc0V4ZWN1dGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBvblRpY2soKXtcblx0dGlja0NvdW50Kys7XG5cdGNvbnNvbGUubG9nKHRpY2tDb3VudCk7XG5cdGlmKHRpY2tDb3VudCA8IFRpY2tFbnRyeS5hbGxvd2VkVGlja0NvdW50KXtcblx0XHRleGVjdXRlUHJpb3JpdHlFbnRyaWVzKCk7XG5cdFx0bW92ZVdhaXRpbmdFbnRyaWVzRm9yRXhlY3V0aW9uKCk7XG5cdFx0aWYoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSl7XG5cdFx0XHRzdG9wKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihcIkFuaW1hdGlvbiBmcmFtZSBsb29wIGV4ZWN1dGVkIHRvIGl0cyBzZXQgbGltaXQ6IFwiLCBUaWNrRW50cnkuYWxsb3dlZFRpY2tDb3VudCk7XG5cdFx0aWYoVGlja0VudHJ5LmRlYnVnKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiRW50cmllczogXCIsIHByaW9yaXR5RW50cmllc1swXSxwcmlvcml0eUVudHJpZXNbMV0scHJpb3JpdHlFbnRyaWVzWzJdLHdhaXRFbnRyaWVzKTtcblx0XHR9XG5cdFx0cmVzZXQoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG5cbn1cblxuXG5mdW5jdGlvbiBzdG9wKCl7XG5cdHRpY2tDb3VudCA9IDA7XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG5cdHRpY2tNYW5hZ2VyLnN0b3AoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKXtcblx0c3RvcCgpO1xuXHRwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuXG5mdW5jdGlvbiBtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKXtcblx0Y29uc3QgZW50cmllc0NvdW50ID0gd2FpdEVudHJpZXMgPyAgd2FpdEVudHJpZXMubGVuZ3RoIDogMDtcblx0aWYod2FpdEVudHJpZXMgJiYgZW50cmllc0NvdW50ID4gMCkge1xuXHRcdGZvcihsZXQgaW5kZXggPSAwIDsgaW5kZXggPCBlbnRyaWVzQ291bnQ7IGluZGV4Kyspe1xuXHRcdFx0bGV0IHRpY2tFbnRyeSA9IHdhaXRFbnRyaWVzW2luZGV4XTtcblx0XHRcdGNvbnN0IHsgcHJpb3JpdHkgfSA9IHRpY2tFbnRyeTtcblx0XHRcdGlmKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKXtcblx0XHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHRcdH1cblx0fVxuXHR3YWl0RW50cmllcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKXtcblx0aXNFeGVjdXRpbmcgPSB0cnVlO1xuXHRmb3IobGV0IGluZGV4ID0gMCA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKyl7XG5cdFx0bGV0IHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZih0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxuXHRpc0V4ZWN1dGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpe1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yKGxldCBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRjb25zdCB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0XHR0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQrKztcblx0XHRpZihUaWNrRW50cnkuZGVidWcgJiYgdGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50ID4gMSl7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkV4ZWN1dGVkIG1vcmUgdGhhbiBvbmNlOiBcIiwgdGlja0VudHJ5KTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKXtcblx0Zm9yKGxldCBpbmRleCA9IDAgOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4Kyspe1xuXHRcdGxldCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpe1xuXHRjb25zdCBzaG91bGRDb250aW51ZSA9IG9uVGljaygpO1xuXHRpZihzaG91bGRDb250aW51ZSl7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufVxuXG5jbGFzcyBUaWNrTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdH1cbn1cblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0aWYoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSl7XG5cdFx0dGhpcy5zdGFydCgpXG5cdH1cblx0aWYoaXNFeGVjdXRpbmcpe1xuXHRcdGNvbnNvbGUubG9nKFwiQWRkZWQgdG8gV2FpdCBlbnRyaWVzXCIpO1xuXHRcdGlmKCF3YWl0RW50cmllcyl7XG5cdFx0XHR3YWl0RW50cmllcyA9IFtdO1xuXHRcdH1cblx0XHR3YWl0RW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgeyBwcmlvcml0eSB9ID0gdGlja0VudHJ5O1xuXHRcdGlmKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKXtcblx0XHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHR9XG5cdFx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fVxuXG59O1xuXG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYod2luZG93KXtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0Y29uc29sZS5sb2coJ2NhbmNlbEFuaW1hdGlvbkZyYW1lJywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG5jb25zdCB0aWNrTWFuYWdlciA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG4vLyBzaW5nbGV0b25JbnN0YW5hY2VcbmV4cG9ydCBkZWZhdWx0IHRpY2tNYW5hZ2VyO1xuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTWFuYWdlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0MDNmOTUxMzQ1N2MwNDE0NGFhYyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9ucyIsInRyaWdnZXJEb25lTm90aWZpZXIiLCJlbnRyaWVzIiwiZnJhbWVFbnRyaWVzIiwiZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQiLCJwcm90b3R5cGUiLCJzZXRUcmlnZ2VyRG9uZU5vdGlmaWVyIiwicmVtb3ZlVHJpZ2dlckRvbmVOb3RpZmllciIsImV4ZWN1dGVUcmlnZ2VyZXIiLCJjb250ZXh0IiwiZnVuYyIsInRyaWdnZXJlckNhbGxiYWNrIiwiX2V4ZWN1dGVUcmlnZ2VyZXIiLCJ0aWNrZXIiLCJjYWxsIiwiZXhlY3V0ZSIsImFkZExpc3RlbmVyIiwiZXhlY3V0ZUxhdGVySW5OZXh0VGljayIsInByaW9yaXR5IiwibGlzdGVuZXJDYWxsYmFjayIsImVudHJ5IiwidGlja2VyQ2FsbGJhY2siLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJjYWxsYmFjayIsImkiLCJmcmFtZUVudHJ5IiwibGlzdGVuZXIiLCJkaXNwb3NlIiwidGlja2VyRW50cnkiLCJkaXNwb3NlRG9uZU5vdGlmaWVyIiwibGVuZ3RoIiwidHJpZ2dlckxpc3RlbmVycyIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIsIkVudHJ5IiwiaW1tZWRpYXRlRnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZnVuY3Rpb25zIiwiZnJhbWVGdW5jdGlvbiIsImZyYW1lRnVuY3Rpb25TZWNvbmQiLCJsaXN0ZW5lcnNEb25lIiwid2luZG93IiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNB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R0FBUixDQUFZLDJCQUFaOztBQUVBRCxRQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBQyxVQUFVWCxnQkFBVixHIiwiZmlsZSI6ImRlbW8vZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDAzZjk1MTM0NTdjMDQxNDRhYWMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSAwO1xufTtcblxuLyotLS0tIFB1YmxpY3xQcm90b3R5cGUgTWV0aG9kcyAtLS0qL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUaWNrRW50cnk7XG5UaWNrRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSBOYU47XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG5cdF9NYW5hZ2VyMi5kZWZhdWx0LmFkZCh0aGlzKTtcbn07XG5cblRpY2tFbnRyeS5ISUdIID0gMDtcblRpY2tFbnRyeS5OT1JNQUwgPSAxO1xuVGlja0VudHJ5LkxPVyA9IDI7XG5cblRpY2tFbnRyeS5hbGxvd2VkVGlja0NvdW50ID0gMTAwO1xuVGlja0VudHJ5LmRlYnVnID0gZmFsc2U7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXG4vL1swLUhJR0gsIDEtTk9STUFMLCAyLUxPV11cbnZhciBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG52YXIgd2FpdEVudHJpZXMgPSBudWxsO1xuXG52YXIgdGlja0NvdW50ID0gMDtcbnZhciBpc0V4ZWN1dGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBvblRpY2soKSB7XG5cdHRpY2tDb3VudCsrO1xuXHRjb25zb2xlLmxvZyh0aWNrQ291bnQpO1xuXHRpZiAodGlja0NvdW50IDwgX1RpY2tFbnRyeTIuZGVmYXVsdC5hbGxvd2VkVGlja0NvdW50KSB7XG5cdFx0ZXhlY3V0ZVByaW9yaXR5RW50cmllcygpO1xuXHRcdG1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbigpO1xuXHRcdGlmIChhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpKSB7XG5cdFx0XHRzdG9wKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihcIkFuaW1hdGlvbiBmcmFtZSBsb29wIGV4ZWN1dGVkIHRvIGl0cyBzZXQgbGltaXQ6IFwiLCBfVGlja0VudHJ5Mi5kZWZhdWx0LmFsbG93ZWRUaWNrQ291bnQpO1xuXHRcdGlmIChfVGlja0VudHJ5Mi5kZWZhdWx0LmRlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVudHJpZXM6IFwiLCBwcmlvcml0eUVudHJpZXNbMF0sIHByaW9yaXR5RW50cmllc1sxXSwgcHJpb3JpdHlFbnRyaWVzWzJdLCB3YWl0RW50cmllcyk7XG5cdFx0fVxuXHRcdHJlc2V0KCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuXHR0aWNrQ291bnQgPSAwO1xuXHRpc0V4ZWN1dGluZyA9IGZhbHNlO1xuXHR0aWNrTWFuYWdlci5zdG9wKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuXHRzdG9wKCk7XG5cdHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsXTtcblx0d2FpdEVudHJpZXMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKSB7XG5cdHZhciBlbnRyaWVzQ291bnQgPSB3YWl0RW50cmllcyA/IHdhaXRFbnRyaWVzLmxlbmd0aCA6IDA7XG5cdGlmICh3YWl0RW50cmllcyAmJiBlbnRyaWVzQ291bnQgPiAwKSB7XG5cdFx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGVudHJpZXNDb3VudDsgaW5kZXgrKykge1xuXHRcdFx0dmFyIHRpY2tFbnRyeSA9IHdhaXRFbnRyaWVzW2luZGV4XTtcblx0XHRcdHZhciBwcmlvcml0eSA9IHRpY2tFbnRyeS5wcmlvcml0eTtcblxuXHRcdFx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0XHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdFx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdFx0fVxuXHR9XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVByaW9yaXR5RW50cmllcygpIHtcblx0aXNFeGVjdXRpbmcgPSB0cnVlO1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcykge1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrRW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0XHR0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQrKztcblx0XHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1ZyAmJiB0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQgPiAxKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkV4ZWN1dGVkIG1vcmUgdGhhbiBvbmNlOiBcIiwgdGlja0VudHJ5KTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSB7XG5cdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZiAodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdHZhciBzaG91bGRDb250aW51ZSA9IG9uVGljaygpO1xuXHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHR9XG59XG5cbnZhciBUaWNrTWFuYWdlciA9IGZ1bmN0aW9uIFRpY2tNYW5hZ2VyKCkge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja01hbmFnZXIpO1xufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0aWYgKGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkpIHtcblx0XHR0aGlzLnN0YXJ0KCk7XG5cdH1cblx0aWYgKGlzRXhlY3V0aW5nKSB7XG5cdFx0Y29uc29sZS5sb2coXCJBZGRlZCB0byBXYWl0IGVudHJpZXNcIik7XG5cdFx0aWYgKCF3YWl0RW50cmllcykge1xuXHRcdFx0d2FpdEVudHJpZXMgPSBbXTtcblx0XHR9XG5cdFx0d2FpdEVudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBwcmlvcml0eSA9IHRpY2tFbnRyeS5wcmlvcml0eTtcblxuXHRcdGlmICghcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSkge1xuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdH1cblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fVxufTtcblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0Ly8gd2lsbCByZWNlaXZlcyB0aW1lc3RhbXAgYXMgYXJndW1lbnRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHR9XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdGNvbnNvbGUubG9nKCdjYW5jZWxBbmltYXRpb25GcmFtZScsIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxudmFyIHRpY2tNYW5hZ2VyID0gbmV3IFRpY2tNYW5hZ2VyKCk7XG5cbi8vIHNpbmdsZXRvbkluc3RhbmFjZVxuZXhwb3J0cy5kZWZhdWx0ID0gdGlja01hbmFnZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQmlaalkzTlRWbE5USTFOekV3WWpZeU1EWXdaQ0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VkdsamEwVnVkSEo1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVWFXTnJSVzUwY25raUxDSmpiMjUwWlhoMElpd2liR2x6ZEdWdVpYSWlMQ0pqWVd4c1ltRmpheUlzSW5CeWFXOXlhWFI1SWl3aVpYaGxZM1YwYVc5dVEyOTFiblFpTENKd2NtOTBiM1I1Y0dVaUxDSmthWE53YjNObElpd2lUbUZPSWl3aVpYaGxZM1YwWlNJc0ltRmtaQ0lzSWtoSlIwZ2lMQ0pPVDFKTlFVd2lMQ0pNVDFjaUxDSmhiR3h2ZDJWa1ZHbGphME52ZFc1MElpd2laR1ZpZFdjaUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNJc0luQnlhVzl5YVhSNVJXNTBjbWxsY3lJc0luZGhhWFJGYm5SeWFXVnpJaXdpZEdsamEwTnZkVzUwSWl3aWFYTkZlR1ZqZFhScGJtY2lMQ0p2YmxScFkyc2lMQ0pqYjI1emIyeGxJaXdpYkc5bklpd2laWGhsWTNWMFpWQnlhVzl5YVhSNVJXNTBjbWxsY3lJc0ltMXZkbVZYWVdsMGFXNW5SVzUwY21sbGMwWnZja1Y0WldOMWRHbHZiaUlzSW1GeVpWQnlhVzl5YVhSNVJXNTBjbWxsYzBWdGNIUjVJaXdpYzNSdmNDSXNJbmRoY200aUxDSnlaWE5sZENJc0luUnBZMnROWVc1aFoyVnlJaXdpWlc1MGNtbGxjME52ZFc1MElpd2liR1Z1WjNSb0lpd2lhVzVrWlhnaUxDSjBhV05yUlc1MGNua2lMQ0owYVdOclJXNTBjbWxsY3lJc0luQjFjMmdpTENKbGVHVmpkWFJsVkdsamEwVnVkSEpwWlhNaUxDSnBJaXdpWTJGc2JDSXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05ySWl3aWMyaHZkV3hrUTI5dWRHbHVkV1VpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0pVYVdOclRXRnVZV2RsY2lJc0luTjBZWEowSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRc1R6dEJRMVpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096dEJRemRFUVRzN096czdPenM3UVVGRlFUdEpRVU54UWtFc1V6dEJRVVZ3UWpzN096dEJRVWxCTEcxQ1FVRlpReXhQUVVGYUxFVkJRWEZDUXl4UlFVRnlRaXhGUVVOQk8wRkJRVUVzUzBGRUswSkRMRkZCUXk5Q0xIVkZRVVF3UXl4SlFVTXhRenRCUVVGQkxFdEJSR2RFUXl4UlFVTm9SQ3gxUlVGRU1rUXNRMEZETTBRN08wRkJRVUU3TzBGQlEwTXNUVUZCUzBnc1QwRkJUQ3hIUVVGbFFTeFBRVUZtTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFrRXNVVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBFc1RVRkJTME1zWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxFTTdPMEZCU1VZN08ydENRV3BDY1VKTUxGTTdRVUZ0UW5KQ1FTeFZRVUZWVFN4VFFVRldMRU5CUVc5Q1F5eFBRVUZ3UWl4SFFVRTRRaXhaUVVGVk8wRkJRM1pETEUxQlFVdE9MRTlCUVV3c1IwRkJaU3hKUVVGbU8wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMElzU1VGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBFc1RVRkJTME1zWTBGQlRDeEhRVUZ6UWtjc1IwRkJkRUk3UVVGRFFTeERRVTVFT3p0QlFWRkJVaXhWUVVGVlRTeFRRVUZXTEVOQlFXOUNSeXhQUVVGd1FpeEhRVUU0UWl4WlFVRlZPMEZCUTNaRExHMUNRVUZSUXl4SFFVRlNMRU5CUVZrc1NVRkJXanRCUVVOQkxFTkJSa1E3TzBGQlMwRldMRlZCUVZWWExFbEJRVllzUjBGQmFVSXNRMEZCYWtJN1FVRkRRVmdzVlVGQlZWa3NUVUZCVml4SFFVRnRRaXhEUVVGdVFqdEJRVU5CV2l4VlFVRlZZU3hIUVVGV0xFZEJRV2RDTEVOQlFXaENPenRCUVVWQllpeFZRVUZWWXl4blFrRkJWaXhIUVVFMlFpeEhRVUUzUWp0QlFVTkJaQ3hWUVVGVlpTeExRVUZXTEVkQlFXdENMRXRCUVd4Q0xFTTdPenM3T3pzN096czdPenM3UVVONFEwRTdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CUVRzN096czdPenM3UVVGRFFTeEpRVUZKUXl3d1FrRkJNRUlzUTBGQk9VSXNReXhEUVVGblF6czdRVUZGYUVNN1FVRkRRU3hKUVVGSlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGRUxFVkJRVThzU1VGQlVDeEZRVUZoTEVsQlFXSXNRMEZCZEVJN1FVRkRRU3hKUVVGSlF5eGpRVUZqTEVsQlFXeENPenRCUVVWQkxFbEJRVWxETEZsQlFWa3NRMEZCYUVJN1FVRkRRU3hKUVVGSlF5eGpRVUZqTEV0QlFXeENPenRCUVVWQkxGTkJRVk5ETEUxQlFWUXNSMEZCYVVJN1FVRkRhRUpHTzBGQlEwRkhMRk5CUVZGRExFZEJRVklzUTBGQldVb3NVMEZCV2p0QlFVTkJMRXRCUVVkQkxGbEJRVmtzYjBKQlFWVk1MR2RDUVVGNlFpeEZRVUV3UXp0QlFVTjZRMVU3UVVGRFFVTTdRVUZEUVN4TlFVRkhReXg1UWtGQlNDeEZRVUUyUWp0QlFVTTFRa003UVVGRFFTeFZRVUZQTEV0QlFWQTdRVUZEUVR0QlFVTkVMRVZCVUVRc1RVRlBUenRCUVVOT1RDeFZRVUZSVFN4SlFVRlNMRU5CUVdFc2EwUkJRV0lzUlVGQmFVVXNiMEpCUVZWa0xHZENRVUV6UlR0QlFVTkJMRTFCUVVjc2IwSkJRVlZETEV0QlFXSXNSVUZCYlVJN1FVRkRiRUpQTEZkQlFWRkRMRWRCUVZJc1EwRkJXU3hYUVVGYUxFVkJRWGxDVGl4blFrRkJaMElzUTBGQmFFSXNRMEZCZWtJc1JVRkJORU5CTEdkQ1FVRm5RaXhEUVVGb1FpeERRVUUxUXl4RlFVRXJSRUVzWjBKQlFXZENMRU5CUVdoQ0xFTkJRUzlFTEVWQlFXdEdReXhYUVVGc1JqdEJRVU5CTzBGQlEwUlhPMEZCUTBFc1UwRkJUeXhMUVVGUU8wRkJRMEU3UVVGRFJDeFJRVUZQTEVsQlFWQTdRVUZGUVRzN1FVRkhSQ3hUUVVGVFJpeEpRVUZVTEVkQlFXVTdRVUZEWkZJc1lVRkJXU3hEUVVGYU8wRkJRMEZETEdWQlFXTXNTMEZCWkR0QlFVTkJWU3hoUVVGWlNDeEpRVUZhTzBGQlEwRTdPMEZCUlVRc1UwRkJVMFVzUzBGQlZDeEhRVUZuUWp0QlFVTm1SanRCUVVOQlZpeHRRa0ZCYTBJc1EwRkJReXhKUVVGRUxFVkJRVThzU1VGQlVDeEZRVUZoTEVsQlFXSXNRMEZCYkVJN1FVRkRRVU1zWlVGQll5eEpRVUZrTzBGQlEwRTdPMEZCUjBRc1UwRkJVMDhzT0VKQlFWUXNSMEZCZVVNN1FVRkRlRU1zUzBGQlRVMHNaVUZCWldJc1kwRkJaVUVzV1VGQldXTXNUVUZCTTBJc1IwRkJiME1zUTBGQmVrUTdRVUZEUVN4TFFVRkhaQ3hsUVVGbFlTeGxRVUZsTEVOQlFXcERMRVZCUVc5RE8wRkJRMjVETEU5QlFVa3NTVUZCU1VVc1VVRkJVU3hEUVVGb1FpeEZRVUZ2UWtFc1VVRkJVVVlzV1VGQk5VSXNSVUZCTUVORkxFOUJRVEZETEVWQlFXdEVPMEZCUTJwRUxFOUJRVWxETEZsQlFWbG9RaXhaUVVGWlpTeExRVUZhTEVOQlFXaENPMEZCUkdsRUxFOUJSWHBETjBJc1VVRkdlVU1zUjBGRk5VSTRRaXhUUVVZMFFpeERRVVY2UXpsQ0xGRkJSbmxET3p0QlFVZHFSQ3hQUVVGSExFTkJRVU5oTEdkQ1FVRm5RbUlzVVVGQmFFSXNRMEZCU2l4RlFVRTRRanRCUVVNM1FtRXNiMEpCUVdkQ1lpeFJRVUZvUWl4SlFVRTBRaXhGUVVFMVFqdEJRVU5CTzBGQlEwUXNUMEZCVFN0Q0xHTkJRV05zUWl4blFrRkJaMEppTEZGQlFXaENMRU5CUVhCQ08wRkJRMEVyUWl4bFFVRlpReXhKUVVGYUxFTkJRV2xDUml4VFFVRnFRanRCUVVOQk8wRkJRMFE3UVVGRFJHaENMR1ZCUVdNc1NVRkJaRHRCUVVOQk96dEJRVVZFTEZOQlFWTk5MSE5DUVVGVUxFZEJRV2xETzBGQlEyaERTaXhsUVVGakxFbEJRV1E3UVVGRFFTeE5RVUZKTEVsQlFVbGhMRkZCUVZFc1EwRkJhRUlzUlVGQmIwSkJMRkZCUVZGb1FpeG5Ra0ZCWjBKbExFMUJRVFZETEVWQlFXOUVReXhQUVVGd1JDeEZRVUUwUkR0QlFVTXpSQ3hOUVVGSlJTeGpRVUZqYkVJc1owSkJRV2RDWjBJc1MwRkJhRUlzUTBGQmJFSTdRVUZEUVN4TlFVRkhSU3hsUVVGbFFTeFpRVUZaU0N4TlFVRmFMRWRCUVhGQ0xFTkJRWFpETEVWQlFUQkRPMEZCUTNwRFN5eHpRa0ZCYlVKR0xGZEJRVzVDTzBGQlEwRTdRVUZEUVd4Q0xHMUNRVUZuUW1kQ0xFdEJRV2hDTEVsQlFYbENMRWxCUVhwQ08wRkJRMEU3UVVGRFJEdEJRVU5FWWl4bFFVRmpMRXRCUVdRN1FVRkRRVHM3UVVGRlJDeFRRVUZUYVVJc2EwSkJRVlFzUTBGQk5FSkdMRmRCUVRWQ0xFVkJRWGRETzBGQlEzWkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlNTeEpRVUZKUnl4SlFVRkpMRU5CUVZvc1JVRkJaVUVzU1VGQlNVZ3NXVUZCV1Vnc1RVRkJMMElzUlVGQmRVTk5MRWRCUVhaRExFVkJRVEpETzBGQlF6RkRMRTFCUVUxS0xGbEJRVmxETEZsQlFWbEhMRU5CUVZvc1EwRkJiRUk3UVVGRFFVb3NXVUZCVldoRExGRkJRVllzUTBGQmJVSnhReXhKUVVGdVFpeERRVUYzUWt3c1ZVRkJWV3BETEU5QlFWWXNTVUZCY1VKcFF5eFZRVUZWYUVNc1VVRkJWaXhEUVVGdFFpeE5RVUZ1UWl4RFFVRTNRenRCUVVOQkxFMUJRVWxuUXl4VlFVRlZMMElzVVVGQlpDeEZRVUYzUWp0QlFVTjJRaXRDTEdGQlFWVXZRaXhSUVVGV0xFTkJRVzFDYjBNc1NVRkJia0lzUTBGQmQwSk1MRlZCUVZVdlFpeFJRVUZXTEVOQlFXMUNMRTFCUVc1Q0xFTkJRWGhDTzBGQlEwRTdRVUZEUkN0Q0xGbEJRVlUzUWl4alFVRldPMEZCUTBFc1RVRkJSeXh2UWtGQlZWVXNTMEZCVml4SlFVRnRRbTFDTEZWQlFWVTNRaXhqUVVGV0xFZEJRVEpDTEVOQlFXcEVMRVZCUVcxRU8wRkJRMnhFYVVJc1YwRkJVVU1zUjBGQlVpeERRVUZaTERKQ1FVRmFMRVZCUVhsRFZ5eFRRVUY2UXp0QlFVTkJPMEZCUTBRN1FVRkRSRHM3UVVGRlJDeFRRVUZUVWl4MVFrRkJWQ3hIUVVGclF6dEJRVU5xUXl4TlFVRkpMRWxCUVVsUExGRkJRVkVzUTBGQmFFSXNSVUZCYjBKQkxGRkJRVkZvUWl4blFrRkJaMEpsTEUxQlFUVkRMRVZCUVc5RVF5eFBRVUZ3UkN4RlFVRTBSRHRCUVVNelJDeE5RVUZKUlN4alFVRmpiRUlzWjBKQlFXZENaMElzUzBGQmFFSXNRMEZCYkVJN1FVRkRRU3hOUVVGSFJTeGxRVUZsUVN4WlFVRlpTQ3hOUVVGYUxFZEJRWEZDTEVOQlFYWkRMRVZCUVRCRE8wRkJRM3BETEZWQlFVOHNTMEZCVUR0QlFVTkJPMEZCUTBRN1FVRkRSQ3hSUVVGUExFbEJRVkE3UVVGRFFUczdRVUZGUkN4VFFVRlRVU3cyUWtGQlZDeEhRVUYzUXp0QlFVTjJReXhMUVVGTlF5eHBRa0ZCYVVKd1FpeFJRVUYyUWp0QlFVTkJMRXRCUVVkdlFpeGpRVUZJTEVWQlFXdENPMEZCUTJwQ2VrSXNORUpCUVRCQ01FSXNUMEZCVDBNc2NVSkJRVkFzUTBGQk5rSklMRFpDUVVFM1FpeERRVUV4UWp0QlFVTkJPMEZCUTBRN08wbEJSVXRKTEZjc1IwRkRUQ3gxUWtGQllUdEJRVUZCTzBGQlExb3NRenM3UVVGSFJrRXNXVUZCV1hSRExGTkJRVm9zUTBGQmMwSkpMRWRCUVhSQ0xFZEJRVFJDTEZWQlFWVjNRaXhUUVVGV0xFVkJRWEZDTzBGQlEyaEVMRXRCUVVkU0xIbENRVUZJTEVWQlFUWkNPMEZCUXpWQ0xFOUJRVXR0UWl4TFFVRk1PMEZCUTBFN1FVRkRSQ3hMUVVGSGVrSXNWMEZCU0N4RlFVRmxPMEZCUTJSRkxGVkJRVkZETEVkQlFWSXNRMEZCV1N4MVFrRkJXanRCUVVOQkxFMUJRVWNzUTBGQlEwd3NWMEZCU2l4RlFVRm5RanRCUVVObVFTeHBRa0ZCWXl4RlFVRmtPMEZCUTBFN1FVRkRSRUVzWTBGQldXdENMRWxCUVZvc1EwRkJhVUpHTEZOQlFXcENPMEZCUTBFc1JVRk9SQ3hOUVUxUE8wRkJRVUVzVFVGRFJUbENMRkZCUkVZc1IwRkRaVGhDTEZOQlJHWXNRMEZEUlRsQ0xGRkJSRVk3TzBGQlJVNHNUVUZCUnl4RFFVRkRZU3huUWtGQlowSmlMRkZCUVdoQ0xFTkJRVW9zUlVGQk9FSTdRVUZETjBKaExHMUNRVUZuUW1Jc1VVRkJhRUlzU1VGQk5FSXNSVUZCTlVJN1FVRkRRVHRCUVVORUxFMUJRVTByUWl4alFVRmpiRUlzWjBKQlFXZENZaXhSUVVGb1FpeERRVUZ3UWp0QlFVTkJLMElzWTBGQldVTXNTVUZCV2l4RFFVRnBRa1lzVTBGQmFrSTdRVUZEUVR0QlFVVkVMRU5CYmtKRU96dEJRWE5DUVR0QlFVTkJWU3haUVVGWmRFTXNVMEZCV2l4RFFVRnpRblZETEV0QlFYUkNMRWRCUVRoQ0xGbEJRVms3UVVGRGVrTXNTMEZCUjBnc1RVRkJTQ3hGUVVGVk8wRkJRMVE3UVVGRFFURkNMRFJDUVVFd1FqQkNMRTlCUVU5RExIRkNRVUZRTEVOQlFUWkNTQ3cyUWtGQk4wSXNRMEZCTVVJN1FVRkRRVHRCUVVORUxFTkJURVE3TzBGQlVVRkpMRmxCUVZsMFF5eFRRVUZhTEVOQlFYTkNjVUlzU1VGQmRFSXNSMEZCTmtJc1dVRkJXVHRCUVVONFF5eExRVUZIWlN4TlFVRklMRVZCUVZVN1FVRkRWSEJDTEZWQlFWRkRMRWRCUVZJc1EwRkJXU3h6UWtGQldpeEZRVUZ2UTFBc2RVSkJRWEJETzBGQlEwRTdRVUZEUkN4RFFVcEVPenRCUVUxQkxFbEJRVTFqTEdOQlFXTXNTVUZCU1dNc1YwRkJTaXhGUVVGd1FqczdRVUZGUVR0clFrRkRaV1FzVnlJc0ltWnBiR1VpT2lKc2FXSXZkR2xqYTJWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKMGFXTnJaWEpjSWl3Z1cxMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpZEdsamEyVnlYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJblJwWTJ0bGNsd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJRnh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHRjYmlCY2RGeDBYSFJjZEdOdmJtWnBaM1Z5WVdKc1pUb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFhIUmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJRngwWEhSY2RGeDBaMlYwT2lCblpYUjBaWEpjYmlCY2RGeDBYSFI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXhLVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQmlaalkzTlRWbE5USTFOekV3WWpZeU1EWXdaQ0lzSW1sdGNHOXlkQ0J0WVc1aFoyVnlJR1p5YjIwZ0p5NHZUV0Z1WVdkbGNpYzdYRzVjYmk4dklIUnZSRzg2SUhOMWNIQnZjblFnWW05MGFDQmpZV3hzWW1GamF5QmhibVFnY0hKdmJXbHpaVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZHbGphMFZ1ZEhKNVhHNTdYRzVjZEM4cUtseHVYSFFnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnWTI5dWRHVjRkQ0F0SUZSb1pTQmNJblJvYVhOY0lpQmhjbWQxYldWdWRDQm1iM0lnZEdobElHeHBjM1JsYm1WeUlHWjFibU4wYVc5dUxseHVYSFFnS2lCQWNHRnlZVzBnZTJaMWJtTjBhVzl1ZlNCc2FYTjBaVzVsY2k1Y2JseDBJQ292WEc1Y2RHTnZibk4wY25WamRHOXlLR052Ym5SbGVIUXNJR3hwYzNSbGJtVnlMQ0JqWVd4c1ltRmpheUE5SUc1MWJHd3NJSEJ5YVc5eWFYUjVJRDBnTUNsY2JseDBlMXh1WEhSY2RIUm9hWE11WTI5dWRHVjRkQ0E5SUdOdmJuUmxlSFE3WEc1Y2RGeDBkR2hwY3k1c2FYTjBaVzVsY2lBOUlHeHBjM1JsYm1WeU8xeHVYSFJjZEhSb2FYTXVZMkZzYkdKaFkyc2dQU0JqWVd4c1ltRmphenRjYmx4MFhIUjBhR2x6TG5CeWFXOXlhWFI1SUQwZ2NISnBiM0pwZEhrN1hHNWNkRngwZEdocGN5NWxlR1ZqZFhScGIyNURiM1Z1ZENBOUlEQTdYRzVjZEgxY2JseHVmVnh1WEc0dktpMHRMUzBnVUhWaWJHbGpmRkJ5YjNSdmRIbHdaU0JOWlhSb2IyUnpJQzB0TFNvdlhHNWNibFJwWTJ0RmJuUnllUzV3Y205MGIzUjVjR1V1WkdsemNHOXpaU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkSFJvYVhNdVkyOXVkR1Y0ZENBOUlHNTFiR3c3WEc1Y2RIUm9hWE11YkdsemRHVnVaWElnUFNCdWRXeHNPMXh1WEhSMGFHbHpMbU5oYkd4aVlXTnJJRDBnYm5Wc2JEdGNibHgwZEdocGN5NXdjbWx2Y21sMGVTQTlJRzUxYkd3N1hHNWNkSFJvYVhNdVpYaGxZM1YwYVc5dVEyOTFiblFnUFNCT1lVNDdYRzU5TzF4dVhHNVVhV05yUlc1MGNua3VjSEp2ZEc5MGVYQmxMbVY0WldOMWRHVWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUnRZVzVoWjJWeUxtRmtaQ2gwYUdsektUdGNibjA3WEc1Y2JseHVWR2xqYTBWdWRISjVMa2hKUjBnZ1BTQXdPMXh1VkdsamEwVnVkSEo1TGs1UFVrMUJUQ0E5SURFN1hHNVVhV05yUlc1MGNua3VURTlYSUQwZ01qdGNibHh1VkdsamEwVnVkSEo1TG1Gc2JHOTNaV1JVYVdOclEyOTFiblFnUFNBeE1EQTdYRzVVYVdOclJXNTBjbmt1WkdWaWRXY2dQU0JtWVd4elpUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlVYVdOclJXNTBjbmt1YW5NaUxDSnBiWEJ2Y25RZ1ZHbGphMlZ5SUdaeWIyMGdKeTR2VkdsamEwVnVkSEo1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1ZHbGphMlZ5TzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwybHVaR1Y0TG1weklpd2lhVzF3YjNKMElGUnBZMnRGYm5SeWVTQm1jbTl0SUNjdUwxUnBZMnRGYm5SeWVTYzdYRzVzWlhRZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FnUFNBd095OHZJR1p2Y2lCWGFXNWtiM2R6SUVWdWRseHVYRzR2TDFzd0xVaEpSMGdzSURFdFRrOVNUVUZNTENBeUxVeFBWMTFjYm14bGRDQndjbWx2Y21sMGVVVnVkSEpwWlhNZ1BTQmJiblZzYkN3Z2JuVnNiQ3dnYm5Wc2JGMDdYRzVzWlhRZ2QyRnBkRVZ1ZEhKcFpYTWdQU0J1ZFd4c08xeHVYRzVzWlhRZ2RHbGphME52ZFc1MElEMGdNRHRjYm14bGRDQnBjMFY0WldOMWRHbHVaeUE5SUdaaGJITmxPMXh1WEc1bWRXNWpkR2x2YmlCdmJsUnBZMnNvS1h0Y2JseDBkR2xqYTBOdmRXNTBLeXM3WEc1Y2RHTnZibk52YkdVdWJHOW5LSFJwWTJ0RGIzVnVkQ2s3WEc1Y2RHbG1LSFJwWTJ0RGIzVnVkQ0E4SUZScFkydEZiblJ5ZVM1aGJHeHZkMlZrVkdsamEwTnZkVzUwS1h0Y2JseDBYSFJsZUdWamRYUmxVSEpwYjNKcGRIbEZiblJ5YVdWektDazdYRzVjZEZ4MGJXOTJaVmRoYVhScGJtZEZiblJ5YVdWelJtOXlSWGhsWTNWMGFXOXVLQ2s3WEc1Y2RGeDBhV1lvWVhKbFVISnBiM0pwZEhsRmJuUnlhV1Z6Ulcxd2RIa29LU2w3WEc1Y2RGeDBYSFJ6ZEc5d0tDazdYRzVjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEc1Y2RGeDBmVnh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkR052Ym5OdmJHVXVkMkZ5YmloY0lrRnVhVzFoZEdsdmJpQm1jbUZ0WlNCc2IyOXdJR1Y0WldOMWRHVmtJSFJ2SUdsMGN5QnpaWFFnYkdsdGFYUTZJRndpTENCVWFXTnJSVzUwY25rdVlXeHNiM2RsWkZScFkydERiM1Z1ZENrN1hHNWNkRngwYVdZb1ZHbGphMFZ1ZEhKNUxtUmxZblZuS1h0Y2JseDBYSFJjZEdOdmJuTnZiR1V1Ykc5bktGd2lSVzUwY21sbGN6b2dYQ0lzSUhCeWFXOXlhWFI1Ulc1MGNtbGxjMXN3WFN4d2NtbHZjbWwwZVVWdWRISnBaWE5iTVYwc2NISnBiM0pwZEhsRmJuUnlhV1Z6V3pKZExIZGhhWFJGYm5SeWFXVnpLVHRjYmx4MFhIUjlYRzVjZEZ4MGNtVnpaWFFvS1R0Y2JseDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkSDFjYmx4MGNtVjBkWEp1SUhSeWRXVTdYRzVjYm4xY2JseHVYRzVtZFc1amRHbHZiaUJ6ZEc5d0tDbDdYRzVjZEhScFkydERiM1Z1ZENBOUlEQTdYRzVjZEdselJYaGxZM1YwYVc1bklEMGdabUZzYzJVN1hHNWNkSFJwWTJ0TllXNWhaMlZ5TG5OMGIzQW9LVHRjYm4xY2JseHVablZ1WTNScGIyNGdjbVZ6WlhRb0tYdGNibHgwYzNSdmNDZ3BPMXh1WEhSd2NtbHZjbWwwZVVWdWRISnBaWE1nUFNCYmJuVnNiQ3dnYm5Wc2JDd2diblZzYkYwN1hHNWNkSGRoYVhSRmJuUnlhV1Z6SUQwZ2JuVnNiRHRjYm4xY2JseHVYRzVtZFc1amRHbHZiaUJ0YjNabFYyRnBkR2x1WjBWdWRISnBaWE5HYjNKRmVHVmpkWFJwYjI0b0tYdGNibHgwWTI5dWMzUWdaVzUwY21sbGMwTnZkVzUwSUQwZ2QyRnBkRVZ1ZEhKcFpYTWdQeUFnZDJGcGRFVnVkSEpwWlhNdWJHVnVaM1JvSURvZ01EdGNibHgwYVdZb2QyRnBkRVZ1ZEhKcFpYTWdKaVlnWlc1MGNtbGxjME52ZFc1MElENGdNQ2tnZTF4dVhIUmNkR1p2Y2loc1pYUWdhVzVrWlhnZ1BTQXdJRHNnYVc1a1pYZ2dQQ0JsYm5SeWFXVnpRMjkxYm5RN0lHbHVaR1Y0S3lzcGUxeHVYSFJjZEZ4MGJHVjBJSFJwWTJ0RmJuUnllU0E5SUhkaGFYUkZiblJ5YVdWelcybHVaR1Y0WFR0Y2JseDBYSFJjZEdOdmJuTjBJSHNnY0hKcGIzSnBkSGtnZlNBOUlIUnBZMnRGYm5SeWVUdGNibHgwWEhSY2RHbG1LQ0Z3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRLWHRjYmx4MFhIUmNkRngwY0hKcGIzSnBkSGxGYm5SeWFXVnpXM0J5YVc5eWFYUjVYU0E5SUZ0ZE8xeHVYSFJjZEZ4MGZWeHVYSFJjZEZ4MFkyOXVjM1FnZEdsamEwVnVkSEpwWlhNZ1BTQndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZE8xeHVYSFJjZEZ4MGRHbGphMFZ1ZEhKcFpYTXVjSFZ6YUNoMGFXTnJSVzUwY25rcE8xeHVYSFJjZEgxY2JseDBmVnh1WEhSM1lXbDBSVzUwY21sbGN5QTlJRzUxYkd3N1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdWNFpXTjFkR1ZRY21sdmNtbDBlVVZ1ZEhKcFpYTW9LWHRjYmx4MGFYTkZlR1ZqZFhScGJtY2dQU0IwY25WbE8xeHVYSFJtYjNJb2JHVjBJR2x1WkdWNElEMGdNQ0E3SUdsdVpHVjRJRHdnY0hKcGIzSnBkSGxGYm5SeWFXVnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5bDdYRzVjZEZ4MGJHVjBJSFJwWTJ0RmJuUnlhV1Z6SUQwZ2NISnBiM0pwZEhsRmJuUnlhV1Z6VzJsdVpHVjRYVHRjYmx4MFhIUnBaaWgwYVdOclJXNTBjbWxsY3lBbUppQjBhV05yUlc1MGNtbGxjeTVzWlc1bmRHZ2dQaUF3S1NCN1hHNWNkRngwWEhSbGVHVmpkWFJsVkdsamEwVnVkSEpwWlhNb2RHbGphMFZ1ZEhKcFpYTXBPMXh1WEhSY2RGeDBMeTlEYkdWaGNpQjBhR1Z0SUc5dVkyVWdaWGhsWTNWMFpXUmNibHgwWEhSY2RIQnlhVzl5YVhSNVJXNTBjbWxsYzF0cGJtUmxlRjBnUFNCdWRXeHNPMXh1WEhSY2RIMWNibHgwZlZ4dVhIUnBjMFY0WldOMWRHbHVaeUE5SUdaaGJITmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmxlR1ZqZFhSbFZHbGphMFZ1ZEhKcFpYTW9kR2xqYTBWdWRISnBaWE1wZTF4dVhIUXZMeUJwYlhCdmNuUmhiblFnZEc4Z2RYTmxJR1p2Y2kxc2IyOXdYRzVjZEM4dklIUnBZMnRGYm5SeWFXVnpJR2R5YjNkeklHUjVibUZ0YVdOaGJHeDVJR0o1SUc5dVpTQnZaaUJwZEhNZ1pXNTBjbmxjYmx4MEx5OGdabTl5SUdWNFlXMXdiR1U2SUd4bGRDQnpZWGtnZDJVZ2FHRjJaU0J2Ym1VZ1pXNTBjbmtzSUdGdVpDQmxlR1ZqZFhScGJtY2dkR2hoZENCbGJuUnllU0J0YVdkb2RDQmhaR1J6SUdGdWIzUm9aWElnWlc1MGNubGNibHgwTHk4Z2QybDBhQ0J0WVhBZ1puVnVZM1JwYjI0Z2QyVWdZMkZ1ZENCbGVHVmpkWFJsSUdSNWJtRnRhV05oYkd4NUlHZHliM2RwYm1jZ1pXNTBjbWxsY3k1Y2JseDBabTl5S0d4bGRDQnBJRDBnTURzZ2FTQThJSFJwWTJ0RmJuUnlhV1Z6TG14bGJtZDBhRHNnYVNzcktYdGNibHgwWEhSamIyNXpkQ0IwYVdOclJXNTBjbmtnUFNCMGFXTnJSVzUwY21sbGMxdHBYVHRjYmx4MFhIUjBhV05yUlc1MGNua3ViR2x6ZEdWdVpYSXVZMkZzYkNoMGFXTnJSVzUwY25rdVkyOXVkR1Y0ZENCOGZDQjBhV05yUlc1MGNua3ViR2x6ZEdWdVpYSmJKM1JvYVhNblhTazdYRzVjZEZ4MGFXWWdLSFJwWTJ0RmJuUnllUzVqWVd4c1ltRmpheWtnZTF4dVhIUmNkRngwZEdsamEwVnVkSEo1TG1OaGJHeGlZV05yTG1OaGJHd29kR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJXeWQwYUdsekoxMHBPMXh1WEhSY2RIMWNibHgwWEhSMGFXTnJSVzUwY25rdVpYaGxZM1YwYVc5dVEyOTFiblFyS3p0Y2JseDBYSFJwWmloVWFXTnJSVzUwY25rdVpHVmlkV2NnSmlZZ2RHbGphMFZ1ZEhKNUxtVjRaV04xZEdsdmJrTnZkVzUwSUQ0Z01TbDdYRzVjZEZ4MFhIUmpiMjV6YjJ4bExteHZaeWhjSWtWNFpXTjFkR1ZrSUcxdmNtVWdkR2hoYmlCdmJtTmxPaUJjSWl3Z2RHbGphMFZ1ZEhKNUtUdGNibHgwWEhSOVhHNWNkSDFjYm4xY2JseHVablZ1WTNScGIyNGdZWEpsVUhKcGIzSnBkSGxGYm5SeWFXVnpSVzF3ZEhrb0tYdGNibHgwWm05eUtHeGxkQ0JwYm1SbGVDQTlJREFnT3lCcGJtUmxlQ0E4SUhCeWFXOXlhWFI1Ulc1MGNtbGxjeTVzWlc1bmRHZzdJR2x1WkdWNEt5c3BlMXh1WEhSY2RHeGxkQ0IwYVdOclJXNTBjbWxsY3lBOUlIQnlhVzl5YVhSNVJXNTBjbWxsYzF0cGJtUmxlRjA3WEc1Y2RGeDBhV1lvZEdsamEwVnVkSEpwWlhNZ0ppWWdkR2xqYTBWdWRISnBaWE11YkdWdVozUm9JRDRnTUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RISmxkSFZ5YmlCMGNuVmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWdwZTF4dVhIUmpiMjV6ZENCemFHOTFiR1JEYjI1MGFXNTFaU0E5SUc5dVZHbGpheWdwTzF4dVhIUnBaaWh6YUc5MWJHUkRiMjUwYVc1MVpTbDdYRzVjZEZ4MGNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FnUFNCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVU5oYkd4aVlXTnJLVHRjYmx4MGZWeHVmVnh1WEc1amJHRnpjeUJVYVdOclRXRnVZV2RsY2lCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0NsN1hHNWNkSDFjYm4xY2JseHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1Ga1pDQTlJR1oxYm1OMGFXOXVJQ2gwYVdOclJXNTBjbmtwSUh0Y2JseDBhV1lvWVhKbFVISnBiM0pwZEhsRmJuUnlhV1Z6Ulcxd2RIa29LU2w3WEc1Y2RGeDBkR2hwY3k1emRHRnlkQ2dwWEc1Y2RIMWNibHgwYVdZb2FYTkZlR1ZqZFhScGJtY3BlMXh1WEhSY2RHTnZibk52YkdVdWJHOW5LRndpUVdSa1pXUWdkRzhnVjJGcGRDQmxiblJ5YVdWelhDSXBPMXh1WEhSY2RHbG1LQ0YzWVdsMFJXNTBjbWxsY3lsN1hHNWNkRngwWEhSM1lXbDBSVzUwY21sbGN5QTlJRnRkTzF4dVhIUmNkSDFjYmx4MFhIUjNZV2wwUlc1MGNtbGxjeTV3ZFhOb0tIUnBZMnRGYm5SeWVTazdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBZMjl1YzNRZ2V5QndjbWx2Y21sMGVTQjlJRDBnZEdsamEwVnVkSEo1TzF4dVhIUmNkR2xtS0NGd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkS1h0Y2JseDBYSFJjZEhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjBnUFNCYlhUdGNibHgwWEhSOVhHNWNkRngwWTI5dWMzUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkTzF4dVhIUmNkSFJwWTJ0RmJuUnlhV1Z6TG5CMWMyZ29kR2xqYTBWdWRISjVLVHRjYmx4MGZWeHVYRzU5TzF4dVhHNWNiaTh2SUZSdlpHODZJRk4xY0hCdmNuUWdabTl5SUU1dlpHVktVeUJjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNXpkR0Z5ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGFXWW9kMmx1Wkc5M0tYdGNibHgwWEhRdkx5QjNhV3hzSUhKbFkyVnBkbVZ6SUhScGJXVnpkR0Z0Y0NCaGN5QmhjbWQxYldWdWRGeHVYSFJjZEhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5azdYRzVjZEgxY2JuMDdYRzVjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbk4wYjNBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RHbG1LSGRwYm1SdmR5bDdYRzVjZEZ4MFkyOXVjMjlzWlM1c2IyY29KMk5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSnl3Z2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FwTzF4dVhIUjlYRzU5TzF4dVhHNWpiMjV6ZENCMGFXTnJUV0Z1WVdkbGNpQTlJRzVsZHlCVWFXTnJUV0Z1WVdkbGNpZ3BPMXh1WEc0dkx5QnphVzVuYkdWMGIyNUpibk4wWVc1aFkyVmNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnBZMnROWVc1aFoyVnlPMXh1WEc1Y2JseHVYRzVjYmx4dVhHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IodHJpZ2dlckRvbmVOb3RpZmllcikge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciA9IHRyaWdnZXJEb25lTm90aWZpZXI7XG4gICAgfVxufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnNldFRyaWdnZXJEb25lTm90aWZpZXIgPSBmdW5jdGlvbih0cmlnZ2VyRG9uZU5vdGlmaWVyKXtcblx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gdHJpZ2dlckRvbmVOb3RpZmllcjtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVUcmlnZ2VyRG9uZU5vdGlmaWVyID0gZnVuY3Rpb24oKXtcblx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gbnVsbDtcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgcmVzcG9uc2libGUgZm9yIGluaXRpYXRpbmcgdHJpZ2dlclxuLy8gaWYgY2FsbGVkIHVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBtYWtlIGEgc3luY2VkIGVmZmVjdCBvZiBleGVjdXRpb25cbkZ1bmN0aW9ucy5wcm90b3R5cGUuZXhlY3V0ZVRyaWdnZXJlciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIHRyaWdnZXJlckNhbGxiYWNrKXtcblx0Y29uc3QgX2V4ZWN1dGVUcmlnZ2VyZXIgPSAoKT0+e1xuXHRcdGxldCB0aWNrZXI7XG5cdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRmdW5jLmNhbGwoY29udGV4dCk7XG5cdFx0XHRpZih0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdFx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRcdHRyaWdnZXJlckNhbGxiYWNrICYmIHRyaWdnZXJlckNhbGxiYWNrKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCB0cmlnZ2VyZXJDYWxsYmFjaywgbnVsbCwgMyk7XG5cdFx0XHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIF9leGVjdXRlVHJpZ2dlcmVyLCB0cmlnZ2VyZXJDYWxsYmFjaywgMyk7XG5cdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdH1cblx0fTtcblx0X2V4ZWN1dGVUcmlnZ2VyZXIoKTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCBleGVjdXRlTGF0ZXJJbk5leHRUaWNrID0gZmFsc2UsIHByaW9yaXR5ID0gMCwgbGlzdGVuZXJDYWxsYmFjayA9IG51bGwpe1xuICAgIGxldCBlbnRyeTtcbiAgICBpZiAoZXhlY3V0ZUxhdGVySW5OZXh0VGljayl7XG5cblx0ICAgICBjb25zdCB0aWNrZXJDYWxsYmFjayA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgLSAxO1xuXHRcdCAgICBpZihsaXN0ZW5lckNhbGxiYWNrKXtcblx0XHRcdCAgICBsaXN0ZW5lckNhbGxiYWNrLmNhbGwobGlzdGVuZXJDYWxsYmFja1sndGhpcyddKVxuXHRcdCAgICB9XG5cdFx0ICAgIGlmKCB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdCAgICB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgJiYgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllcigpO1xuXHRcdCAgICB9XG5cdCAgICB9O1xuICAgICAgICBjb25zdCB0aWNrZXIgPSBuZXcgVGlja2VyKGNvbnRleHQsIGZ1bmMsIHRpY2tlckNhbGxiYWNrLCBwcmlvcml0eSk7XG5cdCAgICBlbnRyeSA9IG5ldyBFbnRyeSh0aWNrZXIsIHRpY2tlci5leGVjdXRlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMucHVzaChlbnRyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyeSA9IG5ldyBFbnRyeShjb250ZXh0LCBmdW5jKTtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGNhbGxiYWNrID0gbnVsbCl7XG5cdGxldCBlbnRyeSwgaTtcblx0Y29uc3Qge2ZyYW1lRW50cmllcywgZW50cmllc30gPSB0aGlzO1xuXG5cdGZvcihpID0gMDsgaSA8IGZyYW1lRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdCAgICBjb25zdCBmcmFtZUVudHJ5ID0gIGZyYW1lRW50cmllc1tpXTtcblx0XHRlbnRyeSA9IGZyYW1lRW50cnkuY29udGV4dDtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRmcmFtZUVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdH0gZWxzZSB7IC8vIGZyYW1lIHRyaWdnZXIgTGlzdGVuZXJzIGFyZSBzdGlsbCBydW5uaW5nXG5cdFx0XHRcdGxldCB0aWNrZXJFbnRyeTtcblx0XHRcdFx0Y29uc3QgZGlzcG9zZURvbmVOb3RpZmllciA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdFx0XHR9IGVsc2V7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGZvcihpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGVudHJ5ID0gZW50cmllc1tpXTtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnRyaWdnZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGVudHJpZXNJbmRleFRvRGlzcG9zZSA9IFtdO1xuXG5cdHRoaXMuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG4gICAgICAgIGlmIChlbnRyeS5saXN0ZW5lcikge1xuICAgICAgICAgICAgZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuICAgICAgICB0aGlzLmVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG4gICAgfSwgdGhpcyk7XG5cblxuXHRpZih0aGlzLmZyYW1lRW50cmllcy5sZW5ndGggPiAwKXtcblx0XHR0aGlzLmZyYW1lRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG5cdFx0XHRpZiAoZW50cnkubGlzdGVuZXIpIHtcblx0XHRcdFx0dGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgKyAxO1xuXHRcdFx0XHRlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuXHRcdFx0dGhpcy5mcmFtZUVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG5cdFx0fSwgdGhpcylcblx0fSBlbHNlIHtcblx0XHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgJiYgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyKCk7XG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2Z1bmN0aW9ucy5qcyIsImltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZ1bmMpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuYztcbiAgICB9XG59XG5cbi8vIE1ldGhvZCBhdmFpbGFibGUgb25seSBvbiBFbnRyeSBpbnN0YW5jZSBub3QgaW4gQ2xhc3NcbkVudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCl7XG4gICAgaWYodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgVGlja2VyKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVyID0gbnVsbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZW50cnkuanMiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gXCIuLy4uL2xpYlwiO1xuXG5mdW5jdGlvbiBpbW1lZGlhdGVGdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBJbW1lZGlhdGUgRnVuY3Rpb25cIik7XG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gZnJhbWVGdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBGcmFtZSBGdW5jdGlvblwiLCBmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5mdW5jdGlvbiBmcmFtZUZ1bmN0aW9uU2Vjb25kKCl7XG4gICAgY29uc29sZS5sb2coXCJJIGFtIEZyYW1lIEZ1bmN0aW9uIFNlY29uZFwiLCBmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5lcnNEb25lKCl7XG5cdGNvbnNvbGUubG9nKFwiQWxsIEZ1bmN0aW9uIGV4ZWN1dGVkXCIsIGZ1bmN0aW9ucy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCk7XG59XG5cbmNvbnN0IGZ1bmN0aW9ucyA9IG5ldyBGdW5jdGlvbnMobGlzdGVuZXJzRG9uZSk7XG5mdW5jdGlvbnMuYWRkTGlzdGVuZXIod2luZG93LGZyYW1lRnVuY3Rpb25TZWNvbmQsIHRydWUsIDEpO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uLCB0cnVlICk7XG5mdW5jdGlvbnMuYWRkTGlzdGVuZXIod2luZG93LGltbWVkaWF0ZUZ1bmN0aW9uKTtcblxuY29uc29sZS5sb2coXCJ0cmlnZ2VyIDFcIik7XG5cbmZ1bmN0aW9ucy50cmlnZ2VyTGlzdGVuZXJzKCk7XG5cbi8vIDIgZW50cmllc1xuZnVuY3Rpb25zLnJlbW92ZUxpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uU2Vjb25kLCBmdW5jdGlvbnMudHJpZ2dlckxpc3RlbmVycy5iaW5kKGZ1bmN0aW9ucykpO1xuY29uc29sZS5sb2coXCJSZW1vdmUgZnJhbWUgZnVuY3Rpb25cIik7XG5cbi8vIDNyZCBlbnRyeVxuZnVuY3Rpb25zLnJlbW92ZUxpc3RlbmVyKHdpbmRvdyxpbW1lZGlhdGVGdW5jdGlvbik7XG5jb25zb2xlLmxvZyhcIlJlbW92ZSBJbW1lZGlhdGUgZnVuY3Rpb25cIik7XG5cbmNvbnNvbGUubG9nKFwidHJpZ2dlciAyXCIpO1xuZnVuY3Rpb25zLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9