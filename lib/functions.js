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
		window.cancelAnimationFrame(requestAnimationFrameId);
	}
};

var tickManager = new TickManager();

// singletonInstanace
exports.default = tickManager;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmNzVlMjQ3ZGI3YzBkZGM5Nzk5ZCIsIndlYnBhY2s6Ly8vLi9saWIvVGlja0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwiZXhlY3V0aW9uQ291bnQiLCJwcm90b3R5cGUiLCJkaXNwb3NlIiwiTmFOIiwiZXhlY3V0ZSIsImFkZCIsIkhJR0giLCJOT1JNQUwiLCJMT1ciLCJhbGxvd2VkVGlja0NvdW50IiwiZGVidWciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCIsInByaW9yaXR5RW50cmllcyIsIndhaXRFbnRyaWVzIiwidGlja0NvdW50IiwiaXNFeGVjdXRpbmciLCJvblRpY2siLCJjb25zb2xlIiwibG9nIiwiZXhlY3V0ZVByaW9yaXR5RW50cmllcyIsIm1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbiIsImFyZVByaW9yaXR5RW50cmllc0VtcHR5Iiwic3RvcCIsIndhcm4iLCJyZXNldCIsInRpY2tNYW5hZ2VyIiwiZW50cmllc0NvdW50IiwibGVuZ3RoIiwiaW5kZXgiLCJ0aWNrRW50cnkiLCJ0aWNrRW50cmllcyIsInB1c2giLCJleGVjdXRlVGlja0VudHJpZXMiLCJpIiwiY2FsbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrIiwic2hvdWxkQ29udGludWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJUaWNrTWFuYWdlciIsInN0YXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEtBQUdSLHlCQUFILEVBQTZCO0FBQzVCLE9BQUttQixLQUFMO0FBQ0E7QUFDRCxLQUFHekIsV0FBSCxFQUFlO0FBQ2RFLFVBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLE1BQUcsQ0FBQ0wsV0FBSixFQUFnQjtBQUNmQSxpQkFBYyxFQUFkO0FBQ0E7QUFDREEsY0FBWWtCLElBQVosQ0FBaUJGLFNBQWpCO0FBQ0EsRUFORCxNQU1PO0FBQUEsTUFDRTlCLFFBREYsR0FDZThCLFNBRGYsQ0FDRTlCLFFBREY7O0FBRU4sTUFBRyxDQUFDYSxnQkFBZ0JiLFFBQWhCLENBQUosRUFBOEI7QUFDN0JhLG1CQUFnQmIsUUFBaEIsSUFBNEIsRUFBNUI7QUFDQTtBQUNELE1BQU0rQixjQUFjbEIsZ0JBQWdCYixRQUFoQixDQUFwQjtBQUNBK0IsY0FBWUMsSUFBWixDQUFpQkYsU0FBakI7QUFDQTtBQUVELENBbkJEOztBQXNCQTtBQUNBVSxZQUFZdEMsU0FBWixDQUFzQnVDLEtBQXRCLEdBQThCLFlBQVk7QUFDekMsS0FBR0gsTUFBSCxFQUFVO0FBQ1Q7QUFDQTFCLDRCQUEwQjBCLE9BQU9DLHFCQUFQLENBQTZCSCw2QkFBN0IsQ0FBMUI7QUFDQTtBQUNELENBTEQ7O0FBUUFJLFlBQVl0QyxTQUFaLENBQXNCcUIsSUFBdEIsR0FBNkIsWUFBWTtBQUN4QyxLQUFHZSxNQUFILEVBQVU7QUFDVEEsU0FBT0ksb0JBQVAsQ0FBNEI5Qix1QkFBNUI7QUFDQTtBQUNELENBSkQ7O0FBTUEsSUFBTWMsY0FBYyxJQUFJYyxXQUFKLEVBQXBCOztBQUVBO2tCQUNlZCxXIiwiZmlsZSI6ImxpYi90aWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY3NWUyNDdkYjdjMGRkYzk3OTlkIiwiaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9NYW5hZ2VyJztcblxuLy8gdG9Ebzogc3VwcG9ydCBib3RoIGNhbGxiYWNrIGFuZCBwcm9taXNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrRW50cnlcbntcblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29udGV4dCwgbGlzdGVuZXIsIGNhbGxiYWNrID0gbnVsbCwgcHJpb3JpdHkgPSAwKVxuXHR7XG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0XHR0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cdFx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLmV4ZWN1dGlvbkNvdW50ID0gMDtcblx0fVxuXG59XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKXtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcblx0dGhpcy5leGVjdXRpb25Db3VudCA9IE5hTjtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cdG1hbmFnZXIuYWRkKHRoaXMpO1xufTtcblxuXG5UaWNrRW50cnkuSElHSCA9IDA7XG5UaWNrRW50cnkuTk9STUFMID0gMTtcblRpY2tFbnRyeS5MT1cgPSAyO1xuXG5UaWNrRW50cnkuYWxsb3dlZFRpY2tDb3VudCA9IDEwMDtcblRpY2tFbnRyeS5kZWJ1ZyA9IGZhbHNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL1RpY2tFbnRyeS5qcyIsImltcG9ydCBUaWNrZXIgZnJvbSAnLi9UaWNrRW50cnknO1xuXG5leHBvcnQgZGVmYXVsdCBUaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgVGlja0VudHJ5IGZyb20gJy4vVGlja0VudHJ5JztcbmxldCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7Ly8gZm9yIFdpbmRvd3MgRW52XG5cbi8vWzAtSElHSCwgMS1OT1JNQUwsIDItTE9XXVxubGV0IHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsXTtcbmxldCB3YWl0RW50cmllcyA9IG51bGw7XG5cbmxldCB0aWNrQ291bnQgPSAwO1xubGV0IGlzRXhlY3V0aW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIG9uVGljaygpe1xuXHR0aWNrQ291bnQrKztcblx0aWYoVGlja0VudHJ5LmRlYnVnKXtcblx0XHRjb25zb2xlLmxvZyhcIlRpY2sgY291bnQ6IFwiLCB0aWNrQ291bnQpO1xuXHR9XG5cdGlmKHRpY2tDb3VudCA8IFRpY2tFbnRyeS5hbGxvd2VkVGlja0NvdW50KXtcblx0XHRleGVjdXRlUHJpb3JpdHlFbnRyaWVzKCk7XG5cdFx0bW92ZVdhaXRpbmdFbnRyaWVzRm9yRXhlY3V0aW9uKCk7XG5cdFx0aWYoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSl7XG5cdFx0XHRzdG9wKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihcIkFuaW1hdGlvbiBmcmFtZSBsb29wIGV4ZWN1dGVkIHRvIGl0cyBzZXQgbGltaXQ6IFwiLCBUaWNrRW50cnkuYWxsb3dlZFRpY2tDb3VudCk7XG5cdFx0aWYoVGlja0VudHJ5LmRlYnVnKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiRW50cmllczogXCIsIHByaW9yaXR5RW50cmllc1swXSxwcmlvcml0eUVudHJpZXNbMV0scHJpb3JpdHlFbnRyaWVzWzJdLHdhaXRFbnRyaWVzKTtcblx0XHR9XG5cdFx0cmVzZXQoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG5cbn1cblxuXG5mdW5jdGlvbiBzdG9wKCl7XG5cdHRpY2tDb3VudCA9IDA7XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG5cdHRpY2tNYW5hZ2VyLnN0b3AoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKXtcblx0c3RvcCgpO1xuXHRwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuXG5mdW5jdGlvbiBtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKXtcblx0Y29uc3QgZW50cmllc0NvdW50ID0gd2FpdEVudHJpZXMgPyAgd2FpdEVudHJpZXMubGVuZ3RoIDogMDtcblx0aWYod2FpdEVudHJpZXMgJiYgZW50cmllc0NvdW50ID4gMCkge1xuXHRcdGZvcihsZXQgaW5kZXggPSAwIDsgaW5kZXggPCBlbnRyaWVzQ291bnQ7IGluZGV4Kyspe1xuXHRcdFx0bGV0IHRpY2tFbnRyeSA9IHdhaXRFbnRyaWVzW2luZGV4XTtcblx0XHRcdGNvbnN0IHsgcHJpb3JpdHkgfSA9IHRpY2tFbnRyeTtcblx0XHRcdGlmKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKXtcblx0XHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHRcdH1cblx0fVxuXHR3YWl0RW50cmllcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKXtcblx0aXNFeGVjdXRpbmcgPSB0cnVlO1xuXHRmb3IobGV0IGluZGV4ID0gMCA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKyl7XG5cdFx0bGV0IHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZih0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxuXHRpc0V4ZWN1dGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpe1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yKGxldCBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRjb25zdCB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0XHR0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQrKztcblx0XHRpZihUaWNrRW50cnkuZGVidWcgJiYgdGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50ID4gMSl7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkV4ZWN1dGVkIG1vcmUgdGhhbiBvbmNlOiBcIiwgdGlja0VudHJ5KTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKXtcblx0Zm9yKGxldCBpbmRleCA9IDAgOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4Kyspe1xuXHRcdGxldCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpe1xuXHRjb25zdCBzaG91bGRDb250aW51ZSA9IG9uVGljaygpO1xuXHRpZihzaG91bGRDb250aW51ZSl7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufVxuXG5jbGFzcyBUaWNrTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdH1cbn1cblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0aWYoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSl7XG5cdFx0dGhpcy5zdGFydCgpXG5cdH1cblx0aWYoaXNFeGVjdXRpbmcpe1xuXHRcdGNvbnNvbGUubG9nKFwiQWRkZWQgdG8gV2FpdCBlbnRyaWVzXCIpO1xuXHRcdGlmKCF3YWl0RW50cmllcyl7XG5cdFx0XHR3YWl0RW50cmllcyA9IFtdO1xuXHRcdH1cblx0XHR3YWl0RW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgeyBwcmlvcml0eSB9ID0gdGlja0VudHJ5O1xuXHRcdGlmKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKXtcblx0XHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHR9XG5cdFx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fVxuXG59O1xuXG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYod2luZG93KXtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuY29uc3QgdGlja01hbmFnZXIgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuLy8gc2luZ2xldG9uSW5zdGFuYWNlXG5leHBvcnQgZGVmYXVsdCB0aWNrTWFuYWdlcjtcblxuXG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL01hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9

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
				_this2.listenersExecutionCompleted();
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

Functions.prototype.listenersExecutionCompleted = function () {};

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
		this.listenersExecutionCompleted();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ODIzNDA1MzUxMDRhYWE1YzYyNyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJlbnRyaWVzIiwiZnJhbWVFbnRyaWVzIiwiZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQiLCJwcm90b3R5cGUiLCJleGVjdXRlVHJpZ2dlcmVyIiwiY29udGV4dCIsImZ1bmMiLCJ0cmlnZ2VyZXJDYWxsYmFjayIsIl9leGVjdXRlVHJpZ2dlcmVyIiwidGlja2VyIiwiY2FsbCIsImV4ZWN1dGUiLCJhZGRMaXN0ZW5lciIsImV4ZWN1dGVMYXRlckluTmV4dFRpY2siLCJwcmlvcml0eSIsImxpc3RlbmVyQ2FsbGJhY2siLCJlbnRyeSIsInRpY2tlckNhbGxiYWNrIiwibGlzdGVuZXJzRXhlY3V0aW9uQ29tcGxldGVkIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwiY2FsbGJhY2siLCJpIiwiZnJhbWVFbnRyeSIsImxpc3RlbmVyIiwiZGlzcG9zZSIsInRpY2tlckVudHJ5IiwiZGlzcG9zZURvbmVOb3RpZmllciIsImxlbmd0aCIsInRyaWdnZXJMaXN0ZW5lcnMiLCJlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJhcHBseSIsImVudHJ5SW5kZXgiLCJzcGxpY2UiLCJFbnRyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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LE1BQWYsQ0FBdEM7QUFDQSxJQUhELE1BR087QUFDTk0sMEJBQXNCWCxJQUF0QixDQUEyQmEsS0FBM0I7QUFDQTtBQUNELEdBUEQsRUFPRyxJQVBIO0FBUUFGLHdCQUFzQkMsT0FBdEIsQ0FBOEIsVUFBU0csVUFBVCxFQUFvQjtBQUNqRCxRQUFLakMsWUFBTCxDQUFrQmtDLE1BQWxCLENBQXlCRCxVQUF6QixFQUFvQyxDQUFwQztBQUNBLEdBRkQsRUFFRyxJQUZIO0FBR0EsRUFaRCxNQVlPO0FBQ04sT0FBS2hCLDJCQUFMO0FBQ0E7QUFDRCxDQTlCRCxDOzs7Ozs7Ozs7Ozs7O0FDakdBOzs7Ozs7OztJQUVxQmtCLEssR0FDakIsZUFBWS9CLE9BQVosRUFBcUJDLElBQXJCLEVBQTBCO0FBQUE7O0FBQ3RCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUttQixRQUFMLEdBQWdCbEIsSUFBaEI7QUFDSCxDOztBQUdMOzs7a0JBUHFCOEIsSztBQVFyQkEsTUFBTWpDLFNBQU4sQ0FBZ0JzQixPQUFoQixHQUEwQixZQUFXO0FBQ2pDLFFBQUcsS0FBS3BCLE9BQUwsNEJBQUgsRUFBa0M7QUFDOUIsYUFBS0EsT0FBTCxDQUFhb0IsT0FBYjtBQUNIO0FBQ0QsU0FBS3BCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS21CLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxDQU5ELEMiLCJmaWxlIjoibGliL2Z1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTgyMzQwNTM1MTA0YWFhNWM2MjciLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSAwO1xufTtcblxuLyotLS0tIFB1YmxpY3xQcm90b3R5cGUgTWV0aG9kcyAtLS0qL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUaWNrRW50cnk7XG5UaWNrRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSBOYU47XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG5cdF9NYW5hZ2VyMi5kZWZhdWx0LmFkZCh0aGlzKTtcbn07XG5cblRpY2tFbnRyeS5ISUdIID0gMDtcblRpY2tFbnRyeS5OT1JNQUwgPSAxO1xuVGlja0VudHJ5LkxPVyA9IDI7XG5cblRpY2tFbnRyeS5hbGxvd2VkVGlja0NvdW50ID0gMTAwO1xuVGlja0VudHJ5LmRlYnVnID0gZmFsc2U7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXG4vL1swLUhJR0gsIDEtTk9STUFMLCAyLUxPV11cbnZhciBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG52YXIgd2FpdEVudHJpZXMgPSBudWxsO1xuXG52YXIgdGlja0NvdW50ID0gMDtcbnZhciBpc0V4ZWN1dGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBvblRpY2soKSB7XG5cdHRpY2tDb3VudCsrO1xuXHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1Zykge1xuXHRcdGNvbnNvbGUubG9nKFwiVGljayBjb3VudDogXCIsIHRpY2tDb3VudCk7XG5cdH1cblx0aWYgKHRpY2tDb3VudCA8IF9UaWNrRW50cnkyLmRlZmF1bHQuYWxsb3dlZFRpY2tDb3VudCkge1xuXHRcdGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKTtcblx0XHRtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKTtcblx0XHRpZiAoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSkge1xuXHRcdFx0c3RvcCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oXCJBbmltYXRpb24gZnJhbWUgbG9vcCBleGVjdXRlZCB0byBpdHMgc2V0IGxpbWl0OiBcIiwgX1RpY2tFbnRyeTIuZGVmYXVsdC5hbGxvd2VkVGlja0NvdW50KTtcblx0XHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJFbnRyaWVzOiBcIiwgcHJpb3JpdHlFbnRyaWVzWzBdLCBwcmlvcml0eUVudHJpZXNbMV0sIHByaW9yaXR5RW50cmllc1syXSwgd2FpdEVudHJpZXMpO1xuXHRcdH1cblx0XHRyZXNldCgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc3RvcCgpIHtcblx0dGlja0NvdW50ID0gMDtcblx0aXNFeGVjdXRpbmcgPSBmYWxzZTtcblx0dGlja01hbmFnZXIuc3RvcCgpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcblx0c3RvcCgpO1xuXHRwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gbW92ZVdhaXRpbmdFbnRyaWVzRm9yRXhlY3V0aW9uKCkge1xuXHR2YXIgZW50cmllc0NvdW50ID0gd2FpdEVudHJpZXMgPyB3YWl0RW50cmllcy5sZW5ndGggOiAwO1xuXHRpZiAod2FpdEVudHJpZXMgJiYgZW50cmllc0NvdW50ID4gMCkge1xuXHRcdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBlbnRyaWVzQ291bnQ7IGluZGV4KyspIHtcblx0XHRcdHZhciB0aWNrRW50cnkgPSB3YWl0RW50cmllc1tpbmRleF07XG5cdFx0XHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0XHRcdGlmICghcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSkge1xuXHRcdFx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHRcdH1cblx0fVxuXHR3YWl0RW50cmllcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKSB7XG5cdGlzRXhlY3V0aW5nID0gdHJ1ZTtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxuXHRpc0V4ZWN1dGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdFx0dGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50Kys7XG5cdFx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcgJiYgdGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50ID4gMSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJFeGVjdXRlZCBtb3JlIHRoYW4gb25jZTogXCIsIHRpY2tFbnRyeSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkge1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCkge1xuXHR2YXIgc2hvdWxkQ29udGludWUgPSBvblRpY2soKTtcblx0aWYgKHNob3VsZENvbnRpbnVlKSB7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufVxuXG52YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdGlmIChhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpKSB7XG5cdFx0dGhpcy5zdGFydCgpO1xuXHR9XG5cdGlmIChpc0V4ZWN1dGluZykge1xuXHRcdGNvbnNvbGUubG9nKFwiQWRkZWQgdG8gV2FpdCBlbnRyaWVzXCIpO1xuXHRcdGlmICghd2FpdEVudHJpZXMpIHtcblx0XHRcdHdhaXRFbnRyaWVzID0gW107XG5cdFx0fVxuXHRcdHdhaXRFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fSBlbHNlIHtcblx0XHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0XHRpZiAoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pIHtcblx0XHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHR9XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH1cbn07XG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG52YXIgdGlja01hbmFnZXIgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuLy8gc2luZ2xldG9uSW5zdGFuYWNlXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrTWFuYWdlcjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NCbU56VmxNalEzWkdJM1l6QmtaR001TnprNVpDSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZWR2xqYTBWdWRISjVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlRXRnVZV2RsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpVYVdOclJXNTBjbmtpTENKamIyNTBaWGgwSWl3aWJHbHpkR1Z1WlhJaUxDSmpZV3hzWW1GamF5SXNJbkJ5YVc5eWFYUjVJaXdpWlhobFkzVjBhVzl1UTI5MWJuUWlMQ0p3Y205MGIzUjVjR1VpTENKa2FYTndiM05sSWl3aVRtRk9JaXdpWlhobFkzVjBaU0lzSW1Ga1pDSXNJa2hKUjBnaUxDSk9UMUpOUVV3aUxDSk1UMWNpTENKaGJHeHZkMlZrVkdsamEwTnZkVzUwSWl3aVpHVmlkV2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ0lzSW5CeWFXOXlhWFI1Ulc1MGNtbGxjeUlzSW5kaGFYUkZiblJ5YVdWeklpd2lkR2xqYTBOdmRXNTBJaXdpYVhORmVHVmpkWFJwYm1jaUxDSnZibFJwWTJzaUxDSmpiMjV6YjJ4bElpd2liRzluSWl3aVpYaGxZM1YwWlZCeWFXOXlhWFI1Ulc1MGNtbGxjeUlzSW0xdmRtVlhZV2wwYVc1blJXNTBjbWxsYzBadmNrVjRaV04xZEdsdmJpSXNJbUZ5WlZCeWFXOXlhWFI1Ulc1MGNtbGxjMFZ0Y0hSNUlpd2ljM1J2Y0NJc0luZGhjbTRpTENKeVpYTmxkQ0lzSW5ScFkydE5ZVzVoWjJWeUlpd2laVzUwY21sbGMwTnZkVzUwSWl3aWJHVnVaM1JvSWl3aWFXNWtaWGdpTENKMGFXTnJSVzUwY25raUxDSjBhV05yUlc1MGNtbGxjeUlzSW5CMWMyZ2lMQ0psZUdWamRYUmxWR2xqYTBWdWRISnBaWE1pTENKcElpd2lZMkZzYkNJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVU5oYkd4aVlXTnJJaXdpYzJodmRXeGtRMjl1ZEdsdWRXVWlMQ0ozYVc1a2IzY2lMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVaUxDSlVhV05yVFdGdVlXZGxjaUlzSW5OMFlYSjBJaXdpWTJGdVkyVnNRVzVwYldGMGFXOXVSbkpoYldVaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096czdPenM3T3pzN096czdPMEZETjBSQk96czdPenM3T3p0QlFVVkJPMGxCUTNGQ1FTeFRPMEZCUlhCQ096czdPMEZCU1VFc2JVSkJRVmxETEU5QlFWb3NSVUZCY1VKRExGRkJRWEpDTEVWQlEwRTdRVUZCUVN4TFFVUXJRa01zVVVGREwwSXNkVVZCUkRCRExFbEJRekZETzBGQlFVRXNTMEZFWjBSRExGRkJRMmhFTEhWRlFVUXlSQ3hEUVVNelJEczdRVUZCUVRzN1FVRkRReXhOUVVGTFNDeFBRVUZNTEVkQlFXVkJMRTlCUVdZN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWtFc1VVRkJhRUk3UVVGRFFTeE5RVUZMUXl4alFVRk1MRWRCUVhOQ0xFTkJRWFJDTzBGQlEwRXNRenM3UVVGSlJqczdhMEpCYWtKeFFrd3NVenRCUVcxQ2NrSkJMRlZCUVZWTkxGTkJRVllzUTBGQmIwSkRMRTlCUVhCQ0xFZEJRVGhDTEZsQlFWVTdRVUZEZGtNc1RVRkJTMDRzVDBGQlRDeEhRVUZsTEVsQlFXWTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWl4SlFVRm9RanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeE5RVUZMUXl4alFVRk1MRWRCUVhOQ1J5eEhRVUYwUWp0QlFVTkJMRU5CVGtRN08wRkJVVUZTTEZWQlFWVk5MRk5CUVZZc1EwRkJiMEpITEU5QlFYQkNMRWRCUVRoQ0xGbEJRVlU3UVVGRGRrTXNiVUpCUVZGRExFZEJRVklzUTBGQldTeEpRVUZhTzBGQlEwRXNRMEZHUkRzN1FVRkxRVllzVlVGQlZWY3NTVUZCVml4SFFVRnBRaXhEUVVGcVFqdEJRVU5CV0N4VlFVRlZXU3hOUVVGV0xFZEJRVzFDTEVOQlFXNUNPMEZCUTBGYUxGVkJRVlZoTEVkQlFWWXNSMEZCWjBJc1EwRkJhRUk3TzBGQlJVRmlMRlZCUVZWakxHZENRVUZXTEVkQlFUWkNMRWRCUVRkQ08wRkJRMEZrTEZWQlFWVmxMRXRCUVZZc1IwRkJhMElzUzBGQmJFSXNRenM3T3pzN096czdPenM3T3p0QlEzaERRVHM3T3pzN096czdPenM3T3pzN096czdPenRCUTBGQk96czdPenM3T3p0QlFVTkJMRWxCUVVsRExEQkNRVUV3UWl4RFFVRTVRaXhETEVOQlFXZERPenRCUVVWb1F6dEJRVU5CTEVsQlFVbERMR3RDUVVGclFpeERRVUZETEVsQlFVUXNSVUZCVHl4SlFVRlFMRVZCUVdFc1NVRkJZaXhEUVVGMFFqdEJRVU5CTEVsQlFVbERMR05CUVdNc1NVRkJiRUk3TzBGQlJVRXNTVUZCU1VNc1dVRkJXU3hEUVVGb1FqdEJRVU5CTEVsQlFVbERMR05CUVdNc1MwRkJiRUk3TzBGQlJVRXNVMEZCVTBNc1RVRkJWQ3hIUVVGcFFqdEJRVU5vUWtZN1FVRkRRU3hMUVVGSExHOUNRVUZWU2l4TFFVRmlMRVZCUVcxQ08wRkJRMnhDVHl4VlFVRlJReXhIUVVGU0xFTkJRVmtzWTBGQldpeEZRVUUwUWtvc1UwRkJOVUk3UVVGRFFUdEJRVU5FTEV0QlFVZEJMRmxCUVZrc2IwSkJRVlZNTEdkQ1FVRjZRaXhGUVVFd1F6dEJRVU42UTFVN1FVRkRRVU03UVVGRFFTeE5RVUZIUXl4NVFrRkJTQ3hGUVVFMlFqdEJRVU0xUWtNN1FVRkRRU3hWUVVGUExFdEJRVkE3UVVGRFFUdEJRVU5FTEVWQlVFUXNUVUZQVHp0QlFVTk9UQ3hWUVVGUlRTeEpRVUZTTEVOQlFXRXNhMFJCUVdJc1JVRkJhVVVzYjBKQlFWVmtMR2RDUVVFelJUdEJRVU5CTEUxQlFVY3NiMEpCUVZWRExFdEJRV0lzUlVGQmJVSTdRVUZEYkVKUExGZEJRVkZETEVkQlFWSXNRMEZCV1N4WFFVRmFMRVZCUVhsQ1RpeG5Ra0ZCWjBJc1EwRkJhRUlzUTBGQmVrSXNSVUZCTkVOQkxHZENRVUZuUWl4RFFVRm9RaXhEUVVFMVF5eEZRVUVyUkVFc1owSkJRV2RDTEVOQlFXaENMRU5CUVM5RUxFVkJRV3RHUXl4WFFVRnNSanRCUVVOQk8wRkJRMFJYTzBGQlEwRXNVMEZCVHl4TFFVRlFPMEZCUTBFN1FVRkRSQ3hSUVVGUExFbEJRVkE3UVVGRlFUczdRVUZIUkN4VFFVRlRSaXhKUVVGVUxFZEJRV1U3UVVGRFpGSXNZVUZCV1N4RFFVRmFPMEZCUTBGRExHVkJRV01zUzBGQlpEdEJRVU5CVlN4aFFVRlpTQ3hKUVVGYU8wRkJRMEU3TzBGQlJVUXNVMEZCVTBVc1MwRkJWQ3hIUVVGblFqdEJRVU5tUmp0QlFVTkJWaXh0UWtGQmEwSXNRMEZCUXl4SlFVRkVMRVZCUVU4c1NVRkJVQ3hGUVVGaExFbEJRV0lzUTBGQmJFSTdRVUZEUVVNc1pVRkJZeXhKUVVGa08wRkJRMEU3TzBGQlIwUXNVMEZCVTA4c09FSkJRVlFzUjBGQmVVTTdRVUZEZUVNc1MwRkJUVTBzWlVGQlpXSXNZMEZCWlVFc1dVRkJXV01zVFVGQk0wSXNSMEZCYjBNc1EwRkJla1E3UVVGRFFTeExRVUZIWkN4bFFVRmxZU3hsUVVGbExFTkJRV3BETEVWQlFXOURPMEZCUTI1RExFOUJRVWtzU1VGQlNVVXNVVUZCVVN4RFFVRm9RaXhGUVVGdlFrRXNVVUZCVVVZc1dVRkJOVUlzUlVGQk1FTkZMRTlCUVRGRExFVkJRV3RFTzBGQlEycEVMRTlCUVVsRExGbEJRVmxvUWl4WlFVRlpaU3hMUVVGYUxFTkJRV2hDTzBGQlJHbEVMRTlCUlhwRE4wSXNVVUZHZVVNc1IwRkZOVUk0UWl4VFFVWTBRaXhEUVVWNlF6bENMRkZCUm5sRE96dEJRVWRxUkN4UFFVRkhMRU5CUVVOaExHZENRVUZuUW1Jc1VVRkJhRUlzUTBGQlNpeEZRVUU0UWp0QlFVTTNRbUVzYjBKQlFXZENZaXhSUVVGb1FpeEpRVUUwUWl4RlFVRTFRanRCUVVOQk8wRkJRMFFzVDBGQlRTdENMR05CUVdOc1FpeG5Ra0ZCWjBKaUxGRkJRV2hDTEVOQlFYQkNPMEZCUTBFclFpeGxRVUZaUXl4SlFVRmFMRU5CUVdsQ1JpeFRRVUZxUWp0QlFVTkJPMEZCUTBRN1FVRkRSR2hDTEdWQlFXTXNTVUZCWkR0QlFVTkJPenRCUVVWRUxGTkJRVk5OTEhOQ1FVRlVMRWRCUVdsRE8wRkJRMmhEU2l4bFFVRmpMRWxCUVdRN1FVRkRRU3hOUVVGSkxFbEJRVWxoTEZGQlFWRXNRMEZCYUVJc1JVRkJiMEpCTEZGQlFWRm9RaXhuUWtGQlowSmxMRTFCUVRWRExFVkJRVzlFUXl4UFFVRndSQ3hGUVVFMFJEdEJRVU16UkN4TlFVRkpSU3hqUVVGamJFSXNaMEpCUVdkQ1owSXNTMEZCYUVJc1EwRkJiRUk3UVVGRFFTeE5RVUZIUlN4bFFVRmxRU3haUVVGWlNDeE5RVUZhTEVkQlFYRkNMRU5CUVhaRExFVkJRVEJETzBGQlEzcERTeXh6UWtGQmJVSkdMRmRCUVc1Q08wRkJRMEU3UVVGRFFXeENMRzFDUVVGblFtZENMRXRCUVdoQ0xFbEJRWGxDTEVsQlFYcENPMEZCUTBFN1FVRkRSRHRCUVVORVlpeGxRVUZqTEV0QlFXUTdRVUZEUVRzN1FVRkZSQ3hUUVVGVGFVSXNhMEpCUVZRc1EwRkJORUpHTEZkQlFUVkNMRVZCUVhkRE8wRkJRM1pETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTU3hKUVVGSlJ5eEpRVUZKTEVOQlFWb3NSVUZCWlVFc1NVRkJTVWdzV1VGQldVZ3NUVUZCTDBJc1JVRkJkVU5OTEVkQlFYWkRMRVZCUVRKRE8wRkJRekZETEUxQlFVMUtMRmxCUVZsRExGbEJRVmxITEVOQlFWb3NRMEZCYkVJN1FVRkRRVW9zV1VGQlZXaERMRkZCUVZZc1EwRkJiVUp4UXl4SlFVRnVRaXhEUVVGM1Frd3NWVUZCVldwRExFOUJRVllzU1VGQmNVSnBReXhWUVVGVmFFTXNVVUZCVml4RFFVRnRRaXhOUVVGdVFpeERRVUUzUXp0QlFVTkJMRTFCUVVsblF5eFZRVUZWTDBJc1VVRkJaQ3hGUVVGM1FqdEJRVU4yUWl0Q0xHRkJRVlV2UWl4UlFVRldMRU5CUVcxQ2IwTXNTVUZCYmtJc1EwRkJkMEpNTEZWQlFWVXZRaXhSUVVGV0xFTkJRVzFDTEUxQlFXNUNMRU5CUVhoQ08wRkJRMEU3UVVGRFJDdENMRmxCUVZVM1FpeGpRVUZXTzBGQlEwRXNUVUZCUnl4dlFrRkJWVlVzUzBGQlZpeEpRVUZ0UW0xQ0xGVkJRVlUzUWl4alFVRldMRWRCUVRKQ0xFTkJRV3BFTEVWQlFXMUVPMEZCUTJ4RWFVSXNWMEZCVVVNc1IwRkJVaXhEUVVGWkxESkNRVUZhTEVWQlFYbERWeXhUUVVGNlF6dEJRVU5CTzBGQlEwUTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFVpeDFRa0ZCVkN4SFFVRnJRenRCUVVOcVF5eE5RVUZKTEVsQlFVbFBMRkZCUVZFc1EwRkJhRUlzUlVGQmIwSkJMRkZCUVZGb1FpeG5Ra0ZCWjBKbExFMUJRVFZETEVWQlFXOUVReXhQUVVGd1JDeEZRVUUwUkR0QlFVTXpSQ3hOUVVGSlJTeGpRVUZqYkVJc1owSkJRV2RDWjBJc1MwRkJhRUlzUTBGQmJFSTdRVUZEUVN4TlFVRkhSU3hsUVVGbFFTeFpRVUZaU0N4TlFVRmFMRWRCUVhGQ0xFTkJRWFpETEVWQlFUQkRPMEZCUTNwRExGVkJRVThzUzBGQlVEdEJRVU5CTzBGQlEwUTdRVUZEUkN4UlFVRlBMRWxCUVZBN1FVRkRRVHM3UVVGRlJDeFRRVUZUVVN3MlFrRkJWQ3hIUVVGM1F6dEJRVU4yUXl4TFFVRk5ReXhwUWtGQmFVSndRaXhSUVVGMlFqdEJRVU5CTEV0QlFVZHZRaXhqUVVGSUxFVkJRV3RDTzBGQlEycENla0lzTkVKQlFUQkNNRUlzVDBGQlQwTXNjVUpCUVZBc1EwRkJOa0pJTERaQ1FVRTNRaXhEUVVFeFFqdEJRVU5CTzBGQlEwUTdPMGxCUlV0SkxGY3NSMEZEVEN4MVFrRkJZVHRCUVVGQk8wRkJRMW9zUXpzN1FVRkhSa0VzV1VGQldYUkRMRk5CUVZvc1EwRkJjMEpKTEVkQlFYUkNMRWRCUVRSQ0xGVkJRVlYzUWl4VFFVRldMRVZCUVhGQ08wRkJRMmhFTEV0QlFVZFNMSGxDUVVGSUxFVkJRVFpDTzBGQlF6VkNMRTlCUVV0dFFpeExRVUZNTzBGQlEwRTdRVUZEUkN4TFFVRkhla0lzVjBGQlNDeEZRVUZsTzBGQlEyUkZMRlZCUVZGRExFZEJRVklzUTBGQldTeDFRa0ZCV2p0QlFVTkJMRTFCUVVjc1EwRkJRMHdzVjBGQlNpeEZRVUZuUWp0QlFVTm1RU3hwUWtGQll5eEZRVUZrTzBGQlEwRTdRVUZEUkVFc1kwRkJXV3RDTEVsQlFWb3NRMEZCYVVKR0xGTkJRV3BDTzBGQlEwRXNSVUZPUkN4TlFVMVBPMEZCUVVFc1RVRkRSVGxDTEZGQlJFWXNSMEZEWlRoQ0xGTkJSR1lzUTBGRFJUbENMRkZCUkVZN08wRkJSVTRzVFVGQlJ5eERRVUZEWVN4blFrRkJaMEppTEZGQlFXaENMRU5CUVVvc1JVRkJPRUk3UVVGRE4wSmhMRzFDUVVGblFtSXNVVUZCYUVJc1NVRkJORUlzUlVGQk5VSTdRVUZEUVR0QlFVTkVMRTFCUVUwclFpeGpRVUZqYkVJc1owSkJRV2RDWWl4UlFVRm9RaXhEUVVGd1FqdEJRVU5CSzBJc1kwRkJXVU1zU1VGQldpeERRVUZwUWtZc1UwRkJha0k3UVVGRFFUdEJRVVZFTEVOQmJrSkVPenRCUVhOQ1FUdEJRVU5CVlN4WlFVRlpkRU1zVTBGQldpeERRVUZ6UW5WRExFdEJRWFJDTEVkQlFUaENMRmxCUVZrN1FVRkRla01zUzBGQlIwZ3NUVUZCU0N4RlFVRlZPMEZCUTFRN1FVRkRRVEZDTERSQ1FVRXdRakJDTEU5QlFVOURMSEZDUVVGUUxFTkJRVFpDU0N3MlFrRkJOMElzUTBGQk1VSTdRVUZEUVR0QlFVTkVMRU5CVEVRN08wRkJVVUZKTEZsQlFWbDBReXhUUVVGYUxFTkJRWE5DY1VJc1NVRkJkRUlzUjBGQk5rSXNXVUZCV1R0QlFVTjRReXhMUVVGSFpTeE5RVUZJTEVWQlFWVTdRVUZEVkVFc1UwRkJUMGtzYjBKQlFWQXNRMEZCTkVJNVFpeDFRa0ZCTlVJN1FVRkRRVHRCUVVORUxFTkJTa1E3TzBGQlRVRXNTVUZCVFdNc1kwRkJZeXhKUVVGSll5eFhRVUZLTEVWQlFYQkNPenRCUVVWQk8ydENRVU5sWkN4WElpd2labWxzWlNJNklteHBZaTkwYVdOclpYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoY0luUnBZMnRsY2x3aUxDQmJYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKMGFXTnJaWEpjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpZEdsamEyVnlYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9LU0I3WEc1eVpYUjFjbTRnWEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZTF4dUlGeDBYSFJjZEZ4MFkyOXVabWxuZFhKaFlteGxPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmNkR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnWEhSY2RGeDBYSFJuWlhRNklHZGxkSFJsY2x4dUlGeDBYSFJjZEgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJREVwTzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJR1kzTldVeU5EZGtZamRqTUdSa1l6azNPVGxrSWl3aWFXMXdiM0owSUcxaGJtRm5aWElnWm5KdmJTQW5MaTlOWVc1aFoyVnlKenRjYmx4dUx5OGdkRzlFYnpvZ2MzVndjRzl5ZENCaWIzUm9JR05oYkd4aVlXTnJJR0Z1WkNCd2NtOXRhWE5sWEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlVhV05yUlc1MGNubGNibnRjYmx4MEx5b3FYRzVjZENBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCamIyNTBaWGgwSUMwZ1ZHaGxJRndpZEdocGMxd2lJR0Z5WjNWdFpXNTBJR1p2Y2lCMGFHVWdiR2x6ZEdWdVpYSWdablZ1WTNScGIyNHVYRzVjZENBcUlFQndZWEpoYlNCN1puVnVZM1JwYjI1OUlHeHBjM1JsYm1WeUxseHVYSFFnS2k5Y2JseDBZMjl1YzNSeWRXTjBiM0lvWTI5dWRHVjRkQ3dnYkdsemRHVnVaWElzSUdOaGJHeGlZV05ySUQwZ2JuVnNiQ3dnY0hKcGIzSnBkSGtnUFNBd0tWeHVYSFI3WEc1Y2RGeDBkR2hwY3k1amIyNTBaWGgwSUQwZ1kyOXVkR1Y0ZER0Y2JseDBYSFIwYUdsekxteHBjM1JsYm1WeUlEMGdiR2x6ZEdWdVpYSTdYRzVjZEZ4MGRHaHBjeTVqWVd4c1ltRmpheUE5SUdOaGJHeGlZV05yTzF4dVhIUmNkSFJvYVhNdWNISnBiM0pwZEhrZ1BTQndjbWx2Y21sMGVUdGNibHgwWEhSMGFHbHpMbVY0WldOMWRHbHZia052ZFc1MElEMGdNRHRjYmx4MGZWeHVYRzU5WEc1Y2JpOHFMUzB0TFNCUWRXSnNhV044VUhKdmRHOTBlWEJsSUUxbGRHaHZaSE1nTFMwdEtpOWNibHh1VkdsamEwVnVkSEo1TG5CeWIzUnZkSGx3WlM1a2FYTndiM05sSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwZEdocGN5NWpiMjUwWlhoMElEMGdiblZzYkR0Y2JseDBkR2hwY3k1c2FYTjBaVzVsY2lBOUlHNTFiR3c3WEc1Y2RIUm9hWE11WTJGc2JHSmhZMnNnUFNCdWRXeHNPMXh1WEhSMGFHbHpMbkJ5YVc5eWFYUjVJRDBnYm5Wc2JEdGNibHgwZEdocGN5NWxlR1ZqZFhScGIyNURiM1Z1ZENBOUlFNWhUanRjYm4wN1hHNWNibFJwWTJ0RmJuUnllUzV3Y205MGIzUjVjR1V1WlhobFkzVjBaU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkRzFoYm1GblpYSXVZV1JrS0hSb2FYTXBPMXh1ZlR0Y2JseHVYRzVVYVdOclJXNTBjbmt1U0VsSFNDQTlJREE3WEc1VWFXTnJSVzUwY25rdVRrOVNUVUZNSUQwZ01UdGNibFJwWTJ0RmJuUnllUzVNVDFjZ1BTQXlPMXh1WEc1VWFXTnJSVzUwY25rdVlXeHNiM2RsWkZScFkydERiM1Z1ZENBOUlERXdNRHRjYmxScFkydEZiblJ5ZVM1a1pXSjFaeUE5SUdaaGJITmxPMXh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDFScFkydEZiblJ5ZVM1cWN5SXNJbWx0Y0c5eWRDQlVhV05yWlhJZ1puSnZiU0FuTGk5VWFXTnJSVzUwY25rbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlVhV05yWlhJN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZhVzVrWlhndWFuTWlMQ0pwYlhCdmNuUWdWR2xqYTBWdWRISjVJR1p5YjIwZ0p5NHZWR2xqYTBWdWRISjVKenRjYm14bGRDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNBOUlEQTdMeThnWm05eUlGZHBibVJ2ZDNNZ1JXNTJYRzVjYmk4dld6QXRTRWxIU0N3Z01TMU9UMUpOUVV3c0lESXRURTlYWFZ4dWJHVjBJSEJ5YVc5eWFYUjVSVzUwY21sbGN5QTlJRnR1ZFd4c0xDQnVkV3hzTENCdWRXeHNYVHRjYm14bGRDQjNZV2wwUlc1MGNtbGxjeUE5SUc1MWJHdzdYRzVjYm14bGRDQjBhV05yUTI5MWJuUWdQU0F3TzF4dWJHVjBJR2x6UlhobFkzVjBhVzVuSUQwZ1ptRnNjMlU3WEc1Y2JtWjFibU4wYVc5dUlHOXVWR2xqYXlncGUxeHVYSFIwYVdOclEyOTFiblFyS3p0Y2JseDBhV1lvVkdsamEwVnVkSEo1TG1SbFluVm5LWHRjYmx4MFhIUmpiMjV6YjJ4bExteHZaeWhjSWxScFkyc2dZMjkxYm5RNklGd2lMQ0IwYVdOclEyOTFiblFwTzF4dVhIUjlYRzVjZEdsbUtIUnBZMnREYjNWdWRDQThJRlJwWTJ0RmJuUnllUzVoYkd4dmQyVmtWR2xqYTBOdmRXNTBLWHRjYmx4MFhIUmxlR1ZqZFhSbFVISnBiM0pwZEhsRmJuUnlhV1Z6S0NrN1hHNWNkRngwYlc5MlpWZGhhWFJwYm1kRmJuUnlhV1Z6Um05eVJYaGxZM1YwYVc5dUtDazdYRzVjZEZ4MGFXWW9ZWEpsVUhKcGIzSnBkSGxGYm5SeWFXVnpSVzF3ZEhrb0tTbDdYRzVjZEZ4MFhIUnpkRzl3S0NrN1hHNWNkRngwWEhSeVpYUjFjbTRnWm1Gc2MyVTdYRzVjZEZ4MGZWeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RHTnZibk52YkdVdWQyRnliaWhjSWtGdWFXMWhkR2x2YmlCbWNtRnRaU0JzYjI5d0lHVjRaV04xZEdWa0lIUnZJR2wwY3lCelpYUWdiR2x0YVhRNklGd2lMQ0JVYVdOclJXNTBjbmt1WVd4c2IzZGxaRlJwWTJ0RGIzVnVkQ2s3WEc1Y2RGeDBhV1lvVkdsamEwVnVkSEo1TG1SbFluVm5LWHRjYmx4MFhIUmNkR052Ym5OdmJHVXViRzluS0Z3aVJXNTBjbWxsY3pvZ1hDSXNJSEJ5YVc5eWFYUjVSVzUwY21sbGMxc3dYU3h3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJNVjBzY0hKcGIzSnBkSGxGYm5SeWFXVnpXekpkTEhkaGFYUkZiblJ5YVdWektUdGNibHgwWEhSOVhHNWNkRngwY21WelpYUW9LVHRjYmx4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEc1Y2RIMWNibHgwY21WMGRYSnVJSFJ5ZFdVN1hHNWNibjFjYmx4dVhHNW1kVzVqZEdsdmJpQnpkRzl3S0NsN1hHNWNkSFJwWTJ0RGIzVnVkQ0E5SURBN1hHNWNkR2x6UlhobFkzVjBhVzVuSUQwZ1ptRnNjMlU3WEc1Y2RIUnBZMnROWVc1aFoyVnlMbk4wYjNBb0tUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2NtVnpaWFFvS1h0Y2JseDBjM1J2Y0NncE8xeHVYSFJ3Y21sdmNtbDBlVVZ1ZEhKcFpYTWdQU0JiYm5Wc2JDd2diblZzYkN3Z2JuVnNiRjA3WEc1Y2RIZGhhWFJGYm5SeWFXVnpJRDBnYm5Wc2JEdGNibjFjYmx4dVhHNW1kVzVqZEdsdmJpQnRiM1psVjJGcGRHbHVaMFZ1ZEhKcFpYTkdiM0pGZUdWamRYUnBiMjRvS1h0Y2JseDBZMjl1YzNRZ1pXNTBjbWxsYzBOdmRXNTBJRDBnZDJGcGRFVnVkSEpwWlhNZ1B5QWdkMkZwZEVWdWRISnBaWE11YkdWdVozUm9JRG9nTUR0Y2JseDBhV1lvZDJGcGRFVnVkSEpwWlhNZ0ppWWdaVzUwY21sbGMwTnZkVzUwSUQ0Z01Da2dlMXh1WEhSY2RHWnZjaWhzWlhRZ2FXNWtaWGdnUFNBd0lEc2dhVzVrWlhnZ1BDQmxiblJ5YVdWelEyOTFiblE3SUdsdVpHVjRLeXNwZTF4dVhIUmNkRngwYkdWMElIUnBZMnRGYm5SeWVTQTlJSGRoYVhSRmJuUnlhV1Z6VzJsdVpHVjRYVHRjYmx4MFhIUmNkR052Ym5OMElIc2djSEpwYjNKcGRIa2dmU0E5SUhScFkydEZiblJ5ZVR0Y2JseDBYSFJjZEdsbUtDRndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZEtYdGNibHgwWEhSY2RGeDBjSEpwYjNKcGRIbEZiblJ5YVdWelczQnlhVzl5YVhSNVhTQTlJRnRkTzF4dVhIUmNkRngwZlZ4dVhIUmNkRngwWTI5dWMzUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkTzF4dVhIUmNkRngwZEdsamEwVnVkSEpwWlhNdWNIVnphQ2gwYVdOclJXNTBjbmtwTzF4dVhIUmNkSDFjYmx4MGZWeHVYSFIzWVdsMFJXNTBjbWxsY3lBOUlHNTFiR3c3WEc1OVhHNWNibVoxYm1OMGFXOXVJR1Y0WldOMWRHVlFjbWx2Y21sMGVVVnVkSEpwWlhNb0tYdGNibHgwYVhORmVHVmpkWFJwYm1jZ1BTQjBjblZsTzF4dVhIUm1iM0lvYkdWMElHbHVaR1Y0SUQwZ01DQTdJR2x1WkdWNElEd2djSEpwYjNKcGRIbEZiblJ5YVdWekxteGxibWQwYURzZ2FXNWtaWGdyS3lsN1hHNWNkRngwYkdWMElIUnBZMnRGYm5SeWFXVnpJRDBnY0hKcGIzSnBkSGxGYm5SeWFXVnpXMmx1WkdWNFhUdGNibHgwWEhScFppaDBhV05yUlc1MGNtbGxjeUFtSmlCMGFXTnJSVzUwY21sbGN5NXNaVzVuZEdnZ1BpQXdLU0I3WEc1Y2RGeDBYSFJsZUdWamRYUmxWR2xqYTBWdWRISnBaWE1vZEdsamEwVnVkSEpwWlhNcE8xeHVYSFJjZEZ4MEx5OURiR1ZoY2lCMGFHVnRJRzl1WTJVZ1pYaGxZM1YwWldSY2JseDBYSFJjZEhCeWFXOXlhWFI1Ulc1MGNtbGxjMXRwYm1SbGVGMGdQU0J1ZFd4c08xeHVYSFJjZEgxY2JseDBmVnh1WEhScGMwVjRaV04xZEdsdVp5QTlJR1poYkhObE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCbGVHVmpkWFJsVkdsamEwVnVkSEpwWlhNb2RHbGphMFZ1ZEhKcFpYTXBlMXh1WEhRdkx5QnBiWEJ2Y25SaGJuUWdkRzhnZFhObElHWnZjaTFzYjI5d1hHNWNkQzh2SUhScFkydEZiblJ5YVdWeklHZHliM2R6SUdSNWJtRnRhV05oYkd4NUlHSjVJRzl1WlNCdlppQnBkSE1nWlc1MGNubGNibHgwTHk4Z1ptOXlJR1Y0WVcxd2JHVTZJR3hsZENCellYa2dkMlVnYUdGMlpTQnZibVVnWlc1MGNua3NJR0Z1WkNCbGVHVmpkWFJwYm1jZ2RHaGhkQ0JsYm5SeWVTQnRhV2RvZENCaFpHUnpJR0Z1YjNSb1pYSWdaVzUwY25sY2JseDBMeThnZDJsMGFDQnRZWEFnWm5WdVkzUnBiMjRnZDJVZ1kyRnVkQ0JsZUdWamRYUmxJR1I1Ym1GdGFXTmhiR3g1SUdkeWIzZHBibWNnWlc1MGNtbGxjeTVjYmx4MFptOXlLR3hsZENCcElEMGdNRHNnYVNBOElIUnBZMnRGYm5SeWFXVnpMbXhsYm1kMGFEc2dhU3NyS1h0Y2JseDBYSFJqYjI1emRDQjBhV05yUlc1MGNua2dQU0IwYVdOclJXNTBjbWxsYzF0cFhUdGNibHgwWEhSMGFXTnJSVzUwY25rdWJHbHpkR1Z1WlhJdVkyRnNiQ2gwYVdOclJXNTBjbmt1WTI5dWRHVjRkQ0I4ZkNCMGFXTnJSVzUwY25rdWJHbHpkR1Z1WlhKYkozUm9hWE1uWFNrN1hHNWNkRngwYVdZZ0tIUnBZMnRGYm5SeWVTNWpZV3hzWW1GamF5a2dlMXh1WEhSY2RGeDBkR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcld5ZDBhR2x6SjEwcE8xeHVYSFJjZEgxY2JseDBYSFIwYVdOclJXNTBjbmt1WlhobFkzVjBhVzl1UTI5MWJuUXJLenRjYmx4MFhIUnBaaWhVYVdOclJXNTBjbmt1WkdWaWRXY2dKaVlnZEdsamEwVnVkSEo1TG1WNFpXTjFkR2x2YmtOdmRXNTBJRDRnTVNsN1hHNWNkRngwWEhSamIyNXpiMnhsTG14dlp5aGNJa1Y0WldOMWRHVmtJRzF2Y21VZ2RHaGhiaUJ2Ym1ObE9pQmNJaXdnZEdsamEwVnVkSEo1S1R0Y2JseDBYSFI5WEc1Y2RIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1lYSmxVSEpwYjNKcGRIbEZiblJ5YVdWelJXMXdkSGtvS1h0Y2JseDBabTl5S0d4bGRDQnBibVJsZUNBOUlEQWdPeUJwYm1SbGVDQThJSEJ5YVc5eWFYUjVSVzUwY21sbGN5NXNaVzVuZEdnN0lHbHVaR1Y0S3lzcGUxeHVYSFJjZEd4bGRDQjBhV05yUlc1MGNtbGxjeUE5SUhCeWFXOXlhWFI1Ulc1MGNtbGxjMXRwYm1SbGVGMDdYRzVjZEZ4MGFXWW9kR2xqYTBWdWRISnBaWE1nSmlZZ2RHbGphMFZ1ZEhKcFpYTXViR1Z1WjNSb0lENGdNQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJR1poYkhObFhHNWNkRngwZlZ4dVhIUjlYRzVjZEhKbGRIVnliaUIwY25WbE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5Z3BlMXh1WEhSamIyNXpkQ0J6YUc5MWJHUkRiMjUwYVc1MVpTQTlJRzl1VkdsamF5Z3BPMXh1WEhScFppaHphRzkxYkdSRGIyNTBhVzUxWlNsN1hHNWNkRngwY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUWdQU0IzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0hKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVTmhiR3hpWVdOcktUdGNibHgwZlZ4dWZWeHVYRzVqYkdGemN5QlVhV05yVFdGdVlXZGxjaUI3WEc1Y2RHTnZibk4wY25WamRHOXlLQ2w3WEc1Y2RIMWNibjFjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbUZrWkNBOUlHWjFibU4wYVc5dUlDaDBhV05yUlc1MGNua3BJSHRjYmx4MGFXWW9ZWEpsVUhKcGIzSnBkSGxGYm5SeWFXVnpSVzF3ZEhrb0tTbDdYRzVjZEZ4MGRHaHBjeTV6ZEdGeWRDZ3BYRzVjZEgxY2JseDBhV1lvYVhORmVHVmpkWFJwYm1jcGUxeHVYSFJjZEdOdmJuTnZiR1V1Ykc5bktGd2lRV1JrWldRZ2RHOGdWMkZwZENCbGJuUnlhV1Z6WENJcE8xeHVYSFJjZEdsbUtDRjNZV2wwUlc1MGNtbGxjeWw3WEc1Y2RGeDBYSFIzWVdsMFJXNTBjbWxsY3lBOUlGdGRPMXh1WEhSY2RIMWNibHgwWEhSM1lXbDBSVzUwY21sbGN5NXdkWE5vS0hScFkydEZiblJ5ZVNrN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MFkyOXVjM1FnZXlCd2NtbHZjbWwwZVNCOUlEMGdkR2xqYTBWdWRISjVPMXh1WEhSY2RHbG1LQ0Z3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRLWHRjYmx4MFhIUmNkSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMGdQU0JiWFR0Y2JseDBYSFI5WEc1Y2RGeDBZMjl1YzNRZ2RHbGphMFZ1ZEhKcFpYTWdQU0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRPMXh1WEhSY2RIUnBZMnRGYm5SeWFXVnpMbkIxYzJnb2RHbGphMFZ1ZEhKNUtUdGNibHgwZlZ4dVhHNTlPMXh1WEc1Y2JpOHZJRlJ2Wkc4NklGTjFjSEJ2Y25RZ1ptOXlJRTV2WkdWS1V5QmNibFJwWTJ0TllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1emRHRnlkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwYVdZb2QybHVaRzkzS1h0Y2JseDBYSFF2THlCM2FXeHNJSEpsWTJWcGRtVnpJSFJwYldWemRHRnRjQ0JoY3lCaGNtZDFiV1Z1ZEZ4dVhIUmNkSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2h5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlrN1hHNWNkSDFjYm4wN1hHNWNibHh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExuTjBiM0FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEdsbUtIZHBibVJ2ZHlsN1hHNWNkRngwZDJsdVpHOTNMbU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsS0hKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtLVHRjYmx4MGZWeHVmVHRjYmx4dVkyOXVjM1FnZEdsamEwMWhibUZuWlhJZ1BTQnVaWGNnVkdsamEwMWhibUZuWlhJb0tUdGNibHh1THk4Z2MybHVaMnhsZEc5dVNXNXpkR0Z1WVdObFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCMGFXTnJUV0Z1WVdkbGNqdGNibHh1WEc1Y2JseHVYRzVjYmx4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwwMWhibUZuWlhJdWFuTWlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBFbnRyeSBmcm9tICcuL2VudHJ5JztcbmltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSAwO1xuICAgIH1cbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgcmVzcG9uc2libGUgZm9yIGluaXRpYXRpbmcgdHJpZ2dlclxuLy8gaWYgY2FsbGVkIHVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBtYWtlIGEgc3luY2VkIGVmZmVjdCBvZiBleGVjdXRpb25cbkZ1bmN0aW9ucy5wcm90b3R5cGUuZXhlY3V0ZVRyaWdnZXJlciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIHRyaWdnZXJlckNhbGxiYWNrKXtcblx0Y29uc3QgX2V4ZWN1dGVUcmlnZ2VyZXIgPSAoKT0+e1xuXHRcdGxldCB0aWNrZXI7XG5cdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRmdW5jLmNhbGwoY29udGV4dCk7XG5cdFx0XHRpZih0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdFx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRcdHRyaWdnZXJlckNhbGxiYWNrICYmIHRyaWdnZXJlckNhbGxiYWNrKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCB0cmlnZ2VyZXJDYWxsYmFjaywgbnVsbCwgMyk7XG5cdFx0XHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIF9leGVjdXRlVHJpZ2dlcmVyLCB0cmlnZ2VyZXJDYWxsYmFjaywgMyk7XG5cdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdH1cblx0fTtcblx0X2V4ZWN1dGVUcmlnZ2VyZXIoKTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCBleGVjdXRlTGF0ZXJJbk5leHRUaWNrID0gZmFsc2UsIHByaW9yaXR5ID0gMCwgbGlzdGVuZXJDYWxsYmFjayA9IG51bGwpe1xuICAgIGxldCBlbnRyeTtcbiAgICBpZiAoZXhlY3V0ZUxhdGVySW5OZXh0VGljayl7XG5cblx0ICAgICBjb25zdCB0aWNrZXJDYWxsYmFjayA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgLSAxO1xuXHRcdCAgICBpZihsaXN0ZW5lckNhbGxiYWNrKXtcblx0XHRcdCAgICBsaXN0ZW5lckNhbGxiYWNrLmNhbGwobGlzdGVuZXJDYWxsYmFja1sndGhpcyddKVxuXHRcdCAgICB9XG5cdFx0ICAgIGlmKCB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdCAgICB0aGlzLmxpc3RlbmVyc0V4ZWN1dGlvbkNvbXBsZXRlZCgpO1xuXHRcdCAgICB9XG5cdCAgICB9O1xuICAgICAgICBjb25zdCB0aWNrZXIgPSBuZXcgVGlja2VyKGNvbnRleHQsIGZ1bmMsIHRpY2tlckNhbGxiYWNrLCBwcmlvcml0eSk7XG5cdCAgICBlbnRyeSA9IG5ldyBFbnRyeSh0aWNrZXIsIHRpY2tlci5leGVjdXRlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMucHVzaChlbnRyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyeSA9IG5ldyBFbnRyeShjb250ZXh0LCBmdW5jKTtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUubGlzdGVuZXJzRXhlY3V0aW9uQ29tcGxldGVkID0gZnVuY3Rpb24oKXtcblxufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCxmdW5jLCBjYWxsYmFjayA9IG51bGwpe1xuXHRsZXQgZW50cnksIGk7XG5cdGNvbnN0IHtmcmFtZUVudHJpZXMsIGVudHJpZXN9ID0gdGhpcztcblxuXHRmb3IoaSA9IDA7IGkgPCBmcmFtZUVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHQgICAgY29uc3QgZnJhbWVFbnRyeSA9ICBmcmFtZUVudHJpZXNbaV07XG5cdFx0ZW50cnkgPSBmcmFtZUVudHJ5LmNvbnRleHQ7XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0ZnJhbWVFbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHR9IGVsc2UgeyAvLyBmcmFtZSB0cmlnZ2VyIExpc3RlbmVycyBhcmUgc3RpbGwgcnVubmluZ1xuXHRcdFx0XHRsZXQgdGlja2VyRW50cnk7XG5cdFx0XHRcdGNvbnN0IGRpc3Bvc2VEb25lTm90aWZpZXIgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fSBlbHNle1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRmb3IoaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRlbnRyeSA9IGVudHJpZXNbaV07XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRlbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS50cmlnZ2VyTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UgPSBbXTtcblxuXHR0aGlzLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuICAgICAgICBpZiAoZW50cnkubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuICAgIH0sIHRoaXMpO1xuXG5cblx0aWYodGhpcy5mcmFtZUVudHJpZXMubGVuZ3RoID4gMCl7XG5cdFx0dGhpcy5mcmFtZUVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuXHRcdFx0aWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ICsgMTtcblx0XHRcdFx0ZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdHRoaXMuZnJhbWVFbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuXHRcdH0sIHRoaXMpXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5saXN0ZW5lcnNFeGVjdXRpb25Db21wbGV0ZWQoKTtcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZnVuY3Rpb25zLmpzIiwiaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZnVuYyl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jO1xuICAgIH1cbn1cblxuLy8gTWV0aG9kIGF2YWlsYWJsZSBvbmx5IG9uIEVudHJ5IGluc3RhbmNlIG5vdCBpbiBDbGFzc1xuRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKXtcbiAgICBpZih0aGlzLmNvbnRleHQgaW5zdGFuY2VvZiBUaWNrZXIpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXIgPSBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lbnRyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=