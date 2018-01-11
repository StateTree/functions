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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ODIzNDA1MzUxMDRhYWE1YzYyNyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9ucyIsImVudHJpZXMiLCJmcmFtZUVudHJpZXMiLCJleGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCIsInByb3RvdHlwZSIsImV4ZWN1dGVUcmlnZ2VyZXIiLCJjb250ZXh0IiwiZnVuYyIsInRyaWdnZXJlckNhbGxiYWNrIiwiX2V4ZWN1dGVUcmlnZ2VyZXIiLCJ0aWNrZXIiLCJjYWxsIiwiZXhlY3V0ZSIsImFkZExpc3RlbmVyIiwiZXhlY3V0ZUxhdGVySW5OZXh0VGljayIsInByaW9yaXR5IiwibGlzdGVuZXJDYWxsYmFjayIsImVudHJ5IiwidGlja2VyQ2FsbGJhY2siLCJsaXN0ZW5lcnNFeGVjdXRpb25Db21wbGV0ZWQiLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJjYWxsYmFjayIsImkiLCJmcmFtZUVudHJ5IiwibGlzdGVuZXIiLCJkaXNwb3NlIiwidGlja2VyRW50cnkiLCJkaXNwb3NlRG9uZU5vdGlmaWVyIiwibGVuZ3RoIiwidHJpZ2dlckxpc3RlbmVycyIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIsIkVudHJ5IiwiaW1tZWRpYXRlRnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZnVuY3Rpb25zIiwiZnJhbWVGdW5jdGlvbiIsImZyYW1lRnVuY3Rp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LENBQVkscUJBQVosRUFBbUNDLFVBQVV0Qyw2QkFBN0M7QUFDSDs7QUFFRCxTQUFTd0MsbUJBQVQsR0FBOEI7QUFDMUJKLFlBQVFDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0MsVUFBVXRDLDZCQUFwRDtBQUNIOztBQUVELFNBQVN5QyxhQUFULEdBQXdCO0FBQ3ZCTCxZQUFRQyxHQUFSLENBQVksdUJBQVosRUFBcUNDLFVBQVV0Qyw2QkFBL0M7QUFDQTs7QUFFRCxJQUFNc0MsWUFBWSxrQkFBY0csYUFBZCxDQUFsQjtBQUNBSCxVQUFVNUIsV0FBVixDQUFzQmdDLE1BQXRCLEVBQTZCRixtQkFBN0IsRUFBa0QsSUFBbEQsRUFBd0QsQ0FBeEQ7QUFDQUYsVUFBVTVCLFdBQVYsQ0FBc0JnQyxNQUF0QixFQUE2QkgsYUFBN0IsRUFBNEMsSUFBNUM7QUFDQUQsVUFBVTVCLFdBQVYsQ0FBc0JnQyxNQUF0QixFQUE2QlAsaUJBQTdCOztBQUVBQyxRQUFRQyxHQUFSLENBQVksV0FBWjs7QUFFQUMsVUFBVVgsZ0JBQVY7O0FBRUE7QUFDQVcsVUFBVXBCLGNBQVYsQ0FBeUJ3QixNQUF6QixFQUFnQ0YsbUJBQWhDLEVBQXFERixVQUFVWCxnQkFBVixDQUEyQmdCLElBQTNCLENBQWdDTCxTQUFoQyxDQUFyRDtBQUNBRixRQUFRQyxHQUFSLENBQVksdUJBQVo7O0FBRUE7QUFDQUMsVUFBVXBCLGNBQVYsQ0FBeUJ3QixNQUF6QixFQUFnQ1AsaUJBQWhDO0FBQ0FDLFFBQVFDLEdBQVIsQ0FBWSwyQkFBWjs7QUFFQUQsUUFBUUMsR0FBUixDQUFZLFdBQVo7QUFDQUMsVUFBVVgsZ0JBQVYsRyIsImZpbGUiOiJkZW1vL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZ1bmN0aW9uc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU4MjM0MDUzNTEwNGFhYTVjNjI3IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyB0b0RvOiBzdXBwb3J0IGJvdGggY2FsbGJhY2sgYW5kIHByb21pc2VcbnZhciBUaWNrRW50cnkgPVxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIuXG4gKi9cbmZ1bmN0aW9uIFRpY2tFbnRyeShjb250ZXh0LCBsaXN0ZW5lcikge1xuXHR2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cdHZhciBwcmlvcml0eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcblxuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja0VudHJ5KTtcblxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHR0aGlzLmV4ZWN1dGlvbkNvdW50ID0gMDtcbn07XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gVGlja0VudHJ5O1xuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xuXHR0aGlzLmV4ZWN1dGlvbkNvdW50ID0gTmFOO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xuXHRfTWFuYWdlcjIuZGVmYXVsdC5hZGQodGhpcyk7XG59O1xuXG5UaWNrRW50cnkuSElHSCA9IDA7XG5UaWNrRW50cnkuTk9STUFMID0gMTtcblRpY2tFbnRyeS5MT1cgPSAyO1xuXG5UaWNrRW50cnkuYWxsb3dlZFRpY2tDb3VudCA9IDEwMDtcblRpY2tFbnRyeS5kZWJ1ZyA9IGZhbHNlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UaWNrRW50cnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX1RpY2tFbnRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaWNrRW50cnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfVGlja0VudHJ5Mi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UaWNrRW50cnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX1RpY2tFbnRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaWNrRW50cnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSAwOyAvLyBmb3IgV2luZG93cyBFbnZcblxuLy9bMC1ISUdILCAxLU5PUk1BTCwgMi1MT1ddXG52YXIgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGxdO1xudmFyIHdhaXRFbnRyaWVzID0gbnVsbDtcblxudmFyIHRpY2tDb3VudCA9IDA7XG52YXIgaXNFeGVjdXRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gb25UaWNrKCkge1xuXHR0aWNrQ291bnQrKztcblx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcpIHtcblx0XHRjb25zb2xlLmxvZyhcIlRpY2sgY291bnQ6IFwiLCB0aWNrQ291bnQpO1xuXHR9XG5cdGlmICh0aWNrQ291bnQgPCBfVGlja0VudHJ5Mi5kZWZhdWx0LmFsbG93ZWRUaWNrQ291bnQpIHtcblx0XHRleGVjdXRlUHJpb3JpdHlFbnRyaWVzKCk7XG5cdFx0bW92ZVdhaXRpbmdFbnRyaWVzRm9yRXhlY3V0aW9uKCk7XG5cdFx0aWYgKGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkpIHtcblx0XHRcdHN0b3AoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKFwiQW5pbWF0aW9uIGZyYW1lIGxvb3AgZXhlY3V0ZWQgdG8gaXRzIHNldCBsaW1pdDogXCIsIF9UaWNrRW50cnkyLmRlZmF1bHQuYWxsb3dlZFRpY2tDb3VudCk7XG5cdFx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRW50cmllczogXCIsIHByaW9yaXR5RW50cmllc1swXSwgcHJpb3JpdHlFbnRyaWVzWzFdLCBwcmlvcml0eUVudHJpZXNbMl0sIHdhaXRFbnRyaWVzKTtcblx0XHR9XG5cdFx0cmVzZXQoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG5cdHRpY2tDb3VudCA9IDA7XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG5cdHRpY2tNYW5hZ2VyLnN0b3AoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG5cdHN0b3AoKTtcblx0cHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGxdO1xuXHR3YWl0RW50cmllcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIG1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbigpIHtcblx0dmFyIGVudHJpZXNDb3VudCA9IHdhaXRFbnRyaWVzID8gd2FpdEVudHJpZXMubGVuZ3RoIDogMDtcblx0aWYgKHdhaXRFbnRyaWVzICYmIGVudHJpZXNDb3VudCA+IDApIHtcblx0XHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZW50cmllc0NvdW50OyBpbmRleCsrKSB7XG5cdFx0XHR2YXIgdGlja0VudHJ5ID0gd2FpdEVudHJpZXNbaW5kZXhdO1xuXHRcdFx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5O1xuXG5cdFx0XHRpZiAoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pIHtcblx0XHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0XHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0XHR9XG5cdH1cblx0d2FpdEVudHJpZXMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlUHJpb3JpdHlFbnRyaWVzKCkge1xuXHRpc0V4ZWN1dGluZyA9IHRydWU7XG5cdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZiAodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKTtcblx0XHRcdC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG5cdFx0XHRwcmlvcml0eUVudHJpZXNbaW5kZXhdID0gbnVsbDtcblx0XHR9XG5cdH1cblx0aXNFeGVjdXRpbmcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKSB7XG5cdC8vIGltcG9ydGFudCB0byB1c2UgZm9yLWxvb3Bcblx0Ly8gdGlja0VudHJpZXMgZ3Jvd3MgZHluYW1pY2FsbHkgYnkgb25lIG9mIGl0cyBlbnRyeVxuXHQvLyBmb3IgZXhhbXBsZTogbGV0IHNheSB3ZSBoYXZlIG9uZSBlbnRyeSwgYW5kIGV4ZWN1dGluZyB0aGF0IGVudHJ5IG1pZ2h0IGFkZHMgYW5vdGhlciBlbnRyeVxuXHQvLyB3aXRoIG1hcCBmdW5jdGlvbiB3ZSBjYW50IGV4ZWN1dGUgZHluYW1pY2FsbHkgZ3Jvd2luZyBlbnRyaWVzLlxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyeSA9IHRpY2tFbnRyaWVzW2ldO1xuXHRcdHRpY2tFbnRyeS5saXN0ZW5lci5jYWxsKHRpY2tFbnRyeS5jb250ZXh0IHx8IHRpY2tFbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRpZiAodGlja0VudHJ5LmNhbGxiYWNrKSB7XG5cdFx0XHR0aWNrRW50cnkuY2FsbGJhY2suY2FsbCh0aWNrRW50cnkuY2FsbGJhY2tbJ3RoaXMnXSk7XG5cdFx0fVxuXHRcdHRpY2tFbnRyeS5leGVjdXRpb25Db3VudCsrO1xuXHRcdGlmIChfVGlja0VudHJ5Mi5kZWZhdWx0LmRlYnVnICYmIHRpY2tFbnRyeS5leGVjdXRpb25Db3VudCA+IDEpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXhlY3V0ZWQgbW9yZSB0aGFuIG9uY2U6IFwiLCB0aWNrRW50cnkpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpIHtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpIHtcblx0dmFyIHNob3VsZENvbnRpbnVlID0gb25UaWNrKCk7XG5cdGlmIChzaG91bGRDb250aW51ZSkge1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn1cblxudmFyIFRpY2tNYW5hZ2VyID0gZnVuY3Rpb24gVGlja01hbmFnZXIoKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrTWFuYWdlcik7XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHRpZiAoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSkge1xuXHRcdHRoaXMuc3RhcnQoKTtcblx0fVxuXHRpZiAoaXNFeGVjdXRpbmcpIHtcblx0XHRjb25zb2xlLmxvZyhcIkFkZGVkIHRvIFdhaXQgZW50cmllc1wiKTtcblx0XHRpZiAoIXdhaXRFbnRyaWVzKSB7XG5cdFx0XHR3YWl0RW50cmllcyA9IFtdO1xuXHRcdH1cblx0XHR3YWl0RW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5O1xuXG5cdFx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdFx0fVxuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHR9XG59O1xuXG4vLyBUb2RvOiBTdXBwb3J0IGZvciBOb2RlSlMgXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxudmFyIHRpY2tNYW5hZ2VyID0gbmV3IFRpY2tNYW5hZ2VyKCk7XG5cbi8vIHNpbmdsZXRvbkluc3RhbmFjZVxuZXhwb3J0cy5kZWZhdWx0ID0gdGlja01hbmFnZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQm1OelZsTWpRM1pHSTNZekJrWkdNNU56azVaQ0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VkdsamEwVnVkSEo1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVWFXTnJSVzUwY25raUxDSmpiMjUwWlhoMElpd2liR2x6ZEdWdVpYSWlMQ0pqWVd4c1ltRmpheUlzSW5CeWFXOXlhWFI1SWl3aVpYaGxZM1YwYVc5dVEyOTFiblFpTENKd2NtOTBiM1I1Y0dVaUxDSmthWE53YjNObElpd2lUbUZPSWl3aVpYaGxZM1YwWlNJc0ltRmtaQ0lzSWtoSlIwZ2lMQ0pPVDFKTlFVd2lMQ0pNVDFjaUxDSmhiR3h2ZDJWa1ZHbGphME52ZFc1MElpd2laR1ZpZFdjaUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNJc0luQnlhVzl5YVhSNVJXNTBjbWxsY3lJc0luZGhhWFJGYm5SeWFXVnpJaXdpZEdsamEwTnZkVzUwSWl3aWFYTkZlR1ZqZFhScGJtY2lMQ0p2YmxScFkyc2lMQ0pqYjI1emIyeGxJaXdpYkc5bklpd2laWGhsWTNWMFpWQnlhVzl5YVhSNVJXNTBjbWxsY3lJc0ltMXZkbVZYWVdsMGFXNW5SVzUwY21sbGMwWnZja1Y0WldOMWRHbHZiaUlzSW1GeVpWQnlhVzl5YVhSNVJXNTBjbWxsYzBWdGNIUjVJaXdpYzNSdmNDSXNJbmRoY200aUxDSnlaWE5sZENJc0luUnBZMnROWVc1aFoyVnlJaXdpWlc1MGNtbGxjME52ZFc1MElpd2liR1Z1WjNSb0lpd2lhVzVrWlhnaUxDSjBhV05yUlc1MGNua2lMQ0owYVdOclJXNTBjbWxsY3lJc0luQjFjMmdpTENKbGVHVmpkWFJsVkdsamEwVnVkSEpwWlhNaUxDSnBJaXdpWTJGc2JDSXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05ySWl3aWMyaHZkV3hrUTI5dWRHbHVkV1VpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0pVYVdOclRXRnVZV2RsY2lJc0luTjBZWEowSWl3aVkyRnVZMlZzUVc1cGJXRjBhVzl1Um5KaGJXVWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRE4wUkJPenM3T3pzN096dEJRVVZCTzBsQlEzRkNRU3hUTzBGQlJYQkNPenM3TzBGQlNVRXNiVUpCUVZsRExFOUJRVm9zUlVGQmNVSkRMRkZCUVhKQ0xFVkJRMEU3UVVGQlFTeExRVVFyUWtNc1VVRkRMMElzZFVWQlJEQkRMRWxCUXpGRE8wRkJRVUVzUzBGRVowUkRMRkZCUTJoRUxIVkZRVVF5UkN4RFFVTXpSRHM3UVVGQlFUczdRVUZEUXl4TlFVRkxTQ3hQUVVGTUxFZEJRV1ZCTEU5QlFXWTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBKQkxGRkJRV2hDTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFrRXNVVUZCYUVJN1FVRkRRU3hOUVVGTFF5eGpRVUZNTEVkQlFYTkNMRU5CUVhSQ08wRkJRMEVzUXpzN1FVRkpSanM3YTBKQmFrSnhRa3dzVXp0QlFXMUNja0pCTEZWQlFWVk5MRk5CUVZZc1EwRkJiMEpETEU5QlFYQkNMRWRCUVRoQ0xGbEJRVlU3UVVGRGRrTXNUVUZCUzA0c1QwRkJUQ3hIUVVGbExFbEJRV1k3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ0xFbEJRV2hDTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hOUVVGTFF5eGpRVUZNTEVkQlFYTkNSeXhIUVVGMFFqdEJRVU5CTEVOQlRrUTdPMEZCVVVGU0xGVkJRVlZOTEZOQlFWWXNRMEZCYjBKSExFOUJRWEJDTEVkQlFUaENMRmxCUVZVN1FVRkRka01zYlVKQlFWRkRMRWRCUVZJc1EwRkJXU3hKUVVGYU8wRkJRMEVzUTBGR1JEczdRVUZMUVZZc1ZVRkJWVmNzU1VGQlZpeEhRVUZwUWl4RFFVRnFRanRCUVVOQldDeFZRVUZWV1N4TlFVRldMRWRCUVcxQ0xFTkJRVzVDTzBGQlEwRmFMRlZCUVZWaExFZEJRVllzUjBGQlowSXNRMEZCYUVJN08wRkJSVUZpTEZWQlFWVmpMR2RDUVVGV0xFZEJRVFpDTEVkQlFUZENPMEZCUTBGa0xGVkJRVlZsTEV0QlFWWXNSMEZCYTBJc1MwRkJiRUlzUXpzN096czdPenM3T3pzN096dEJRM2hEUVRzN096czdPenM3T3pzN096czdPenM3T3p0QlEwRkJPenM3T3pzN096dEJRVU5CTEVsQlFVbERMREJDUVVFd1FpeERRVUU1UWl4RExFTkJRV2RET3p0QlFVVm9RenRCUVVOQkxFbEJRVWxETEd0Q1FVRnJRaXhEUVVGRExFbEJRVVFzUlVGQlR5eEpRVUZRTEVWQlFXRXNTVUZCWWl4RFFVRjBRanRCUVVOQkxFbEJRVWxETEdOQlFXTXNTVUZCYkVJN08wRkJSVUVzU1VGQlNVTXNXVUZCV1N4RFFVRm9RanRCUVVOQkxFbEJRVWxETEdOQlFXTXNTMEZCYkVJN08wRkJSVUVzVTBGQlUwTXNUVUZCVkN4SFFVRnBRanRCUVVOb1FrWTdRVUZEUVN4TFFVRkhMRzlDUVVGVlNpeExRVUZpTEVWQlFXMUNPMEZCUTJ4Q1R5eFZRVUZSUXl4SFFVRlNMRU5CUVZrc1kwRkJXaXhGUVVFMFFrb3NVMEZCTlVJN1FVRkRRVHRCUVVORUxFdEJRVWRCTEZsQlFWa3NiMEpCUVZWTUxHZENRVUY2UWl4RlFVRXdRenRCUVVONlExVTdRVUZEUVVNN1FVRkRRU3hOUVVGSFF5eDVRa0ZCU0N4RlFVRTJRanRCUVVNMVFrTTdRVUZEUVN4VlFVRlBMRXRCUVZBN1FVRkRRVHRCUVVORUxFVkJVRVFzVFVGUFR6dEJRVU5PVEN4VlFVRlJUU3hKUVVGU0xFTkJRV0VzYTBSQlFXSXNSVUZCYVVVc2IwSkJRVlZrTEdkQ1FVRXpSVHRCUVVOQkxFMUJRVWNzYjBKQlFWVkRMRXRCUVdJc1JVRkJiVUk3UVVGRGJFSlBMRmRCUVZGRExFZEJRVklzUTBGQldTeFhRVUZhTEVWQlFYbENUaXhuUWtGQlowSXNRMEZCYUVJc1EwRkJla0lzUlVGQk5FTkJMR2RDUVVGblFpeERRVUZvUWl4RFFVRTFReXhGUVVFclJFRXNaMEpCUVdkQ0xFTkJRV2hDTEVOQlFTOUVMRVZCUVd0R1F5eFhRVUZzUmp0QlFVTkJPMEZCUTBSWE8wRkJRMEVzVTBGQlR5eExRVUZRTzBGQlEwRTdRVUZEUkN4UlFVRlBMRWxCUVZBN1FVRkZRVHM3UVVGSFJDeFRRVUZUUml4SlFVRlVMRWRCUVdVN1FVRkRaRklzWVVGQldTeERRVUZhTzBGQlEwRkRMR1ZCUVdNc1MwRkJaRHRCUVVOQlZTeGhRVUZaU0N4SlFVRmFPMEZCUTBFN08wRkJSVVFzVTBGQlUwVXNTMEZCVkN4SFFVRm5RanRCUVVObVJqdEJRVU5CVml4dFFrRkJhMElzUTBGQlF5eEpRVUZFTEVWQlFVOHNTVUZCVUN4RlFVRmhMRWxCUVdJc1EwRkJiRUk3UVVGRFFVTXNaVUZCWXl4SlFVRmtPMEZCUTBFN08wRkJSMFFzVTBGQlUwOHNPRUpCUVZRc1IwRkJlVU03UVVGRGVFTXNTMEZCVFUwc1pVRkJaV0lzWTBGQlpVRXNXVUZCV1dNc1RVRkJNMElzUjBGQmIwTXNRMEZCZWtRN1FVRkRRU3hMUVVGSFpDeGxRVUZsWVN4bFFVRmxMRU5CUVdwRExFVkJRVzlETzBGQlEyNURMRTlCUVVrc1NVRkJTVVVzVVVGQlVTeERRVUZvUWl4RlFVRnZRa0VzVVVGQlVVWXNXVUZCTlVJc1JVRkJNRU5GTEU5QlFURkRMRVZCUVd0RU8wRkJRMnBFTEU5QlFVbERMRmxCUVZsb1FpeFpRVUZaWlN4TFFVRmFMRU5CUVdoQ08wRkJSR2xFTEU5QlJYcEROMElzVVVGR2VVTXNSMEZGTlVJNFFpeFRRVVkwUWl4RFFVVjZRemxDTEZGQlJubERPenRCUVVkcVJDeFBRVUZITEVOQlFVTmhMR2RDUVVGblFtSXNVVUZCYUVJc1EwRkJTaXhGUVVFNFFqdEJRVU0zUW1Fc2IwSkJRV2RDWWl4UlFVRm9RaXhKUVVFMFFpeEZRVUUxUWp0QlFVTkJPMEZCUTBRc1QwRkJUU3RDTEdOQlFXTnNRaXhuUWtGQlowSmlMRkZCUVdoQ0xFTkJRWEJDTzBGQlEwRXJRaXhsUVVGWlF5eEpRVUZhTEVOQlFXbENSaXhUUVVGcVFqdEJRVU5CTzBGQlEwUTdRVUZEUkdoQ0xHVkJRV01zU1VGQlpEdEJRVU5CT3p0QlFVVkVMRk5CUVZOTkxITkNRVUZVTEVkQlFXbERPMEZCUTJoRFNpeGxRVUZqTEVsQlFXUTdRVUZEUVN4TlFVRkpMRWxCUVVsaExGRkJRVkVzUTBGQmFFSXNSVUZCYjBKQkxGRkJRVkZvUWl4blFrRkJaMEpsTEUxQlFUVkRMRVZCUVc5RVF5eFBRVUZ3UkN4RlFVRTBSRHRCUVVNelJDeE5RVUZKUlN4alFVRmpiRUlzWjBKQlFXZENaMElzUzBGQmFFSXNRMEZCYkVJN1FVRkRRU3hOUVVGSFJTeGxRVUZsUVN4WlFVRlpTQ3hOUVVGYUxFZEJRWEZDTEVOQlFYWkRMRVZCUVRCRE8wRkJRM3BEU3l4elFrRkJiVUpHTEZkQlFXNUNPMEZCUTBFN1FVRkRRV3hDTEcxQ1FVRm5RbWRDTEV0QlFXaENMRWxCUVhsQ0xFbEJRWHBDTzBGQlEwRTdRVUZEUkR0QlFVTkVZaXhsUVVGakxFdEJRV1E3UVVGRFFUczdRVUZGUkN4VFFVRlRhVUlzYTBKQlFWUXNRMEZCTkVKR0xGZEJRVFZDTEVWQlFYZERPMEZCUTNaRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU1N4SlFVRkpSeXhKUVVGSkxFTkJRVm9zUlVGQlpVRXNTVUZCU1Vnc1dVRkJXVWdzVFVGQkwwSXNSVUZCZFVOTkxFZEJRWFpETEVWQlFUSkRPMEZCUXpGRExFMUJRVTFLTEZsQlFWbERMRmxCUVZsSExFTkJRVm9zUTBGQmJFSTdRVUZEUVVvc1dVRkJWV2hETEZGQlFWWXNRMEZCYlVKeFF5eEpRVUZ1UWl4RFFVRjNRa3dzVlVGQlZXcERMRTlCUVZZc1NVRkJjVUpwUXl4VlFVRlZhRU1zVVVGQlZpeERRVUZ0UWl4TlFVRnVRaXhEUVVFM1F6dEJRVU5CTEUxQlFVbG5ReXhWUVVGVkwwSXNVVUZCWkN4RlFVRjNRanRCUVVOMlFpdENMR0ZCUVZVdlFpeFJRVUZXTEVOQlFXMUNiME1zU1VGQmJrSXNRMEZCZDBKTUxGVkJRVlV2UWl4UlFVRldMRU5CUVcxQ0xFMUJRVzVDTEVOQlFYaENPMEZCUTBFN1FVRkRSQ3RDTEZsQlFWVTNRaXhqUVVGV08wRkJRMEVzVFVGQlJ5eHZRa0ZCVlZVc1MwRkJWaXhKUVVGdFFtMUNMRlZCUVZVM1FpeGpRVUZXTEVkQlFUSkNMRU5CUVdwRUxFVkJRVzFFTzBGQlEyeEVhVUlzVjBGQlVVTXNSMEZCVWl4RFFVRlpMREpDUVVGYUxFVkJRWGxEVnl4VFFVRjZRenRCUVVOQk8wRkJRMFE3UVVGRFJEczdRVUZGUkN4VFFVRlRVaXgxUWtGQlZDeEhRVUZyUXp0QlFVTnFReXhOUVVGSkxFbEJRVWxQTEZGQlFWRXNRMEZCYUVJc1JVRkJiMEpCTEZGQlFWRm9RaXhuUWtGQlowSmxMRTFCUVRWRExFVkJRVzlFUXl4UFFVRndSQ3hGUVVFMFJEdEJRVU16UkN4TlFVRkpSU3hqUVVGamJFSXNaMEpCUVdkQ1owSXNTMEZCYUVJc1EwRkJiRUk3UVVGRFFTeE5RVUZIUlN4bFFVRmxRU3haUVVGWlNDeE5RVUZhTEVkQlFYRkNMRU5CUVhaRExFVkJRVEJETzBGQlEzcERMRlZCUVU4c1MwRkJVRHRCUVVOQk8wRkJRMFE3UVVGRFJDeFJRVUZQTEVsQlFWQTdRVUZEUVRzN1FVRkZSQ3hUUVVGVFVTdzJRa0ZCVkN4SFFVRjNRenRCUVVOMlF5eExRVUZOUXl4cFFrRkJhVUp3UWl4UlFVRjJRanRCUVVOQkxFdEJRVWR2UWl4alFVRklMRVZCUVd0Q08wRkJRMnBDZWtJc05FSkJRVEJDTUVJc1QwRkJUME1zY1VKQlFWQXNRMEZCTmtKSUxEWkNRVUUzUWl4RFFVRXhRanRCUVVOQk8wRkJRMFE3TzBsQlJVdEpMRmNzUjBGRFRDeDFRa0ZCWVR0QlFVRkJPMEZCUTFvc1F6czdRVUZIUmtFc1dVRkJXWFJETEZOQlFWb3NRMEZCYzBKSkxFZEJRWFJDTEVkQlFUUkNMRlZCUVZWM1FpeFRRVUZXTEVWQlFYRkNPMEZCUTJoRUxFdEJRVWRTTEhsQ1FVRklMRVZCUVRaQ08wRkJRelZDTEU5QlFVdHRRaXhMUVVGTU8wRkJRMEU3UVVGRFJDeExRVUZIZWtJc1YwRkJTQ3hGUVVGbE8wRkJRMlJGTEZWQlFWRkRMRWRCUVZJc1EwRkJXU3gxUWtGQldqdEJRVU5CTEUxQlFVY3NRMEZCUTB3c1YwRkJTaXhGUVVGblFqdEJRVU5tUVN4cFFrRkJZeXhGUVVGa08wRkJRMEU3UVVGRFJFRXNZMEZCV1d0Q0xFbEJRVm9zUTBGQmFVSkdMRk5CUVdwQ08wRkJRMEVzUlVGT1JDeE5RVTFQTzBGQlFVRXNUVUZEUlRsQ0xGRkJSRVlzUjBGRFpUaENMRk5CUkdZc1EwRkRSVGxDTEZGQlJFWTdPMEZCUlU0c1RVRkJSeXhEUVVGRFlTeG5Ra0ZCWjBKaUxGRkJRV2hDTEVOQlFVb3NSVUZCT0VJN1FVRkROMEpoTEcxQ1FVRm5RbUlzVVVGQmFFSXNTVUZCTkVJc1JVRkJOVUk3UVVGRFFUdEJRVU5FTEUxQlFVMHJRaXhqUVVGamJFSXNaMEpCUVdkQ1lpeFJRVUZvUWl4RFFVRndRanRCUVVOQkswSXNZMEZCV1VNc1NVRkJXaXhEUVVGcFFrWXNVMEZCYWtJN1FVRkRRVHRCUVVWRUxFTkJia0pFT3p0QlFYTkNRVHRCUVVOQlZTeFpRVUZaZEVNc1UwRkJXaXhEUVVGelFuVkRMRXRCUVhSQ0xFZEJRVGhDTEZsQlFWazdRVUZEZWtNc1MwRkJSMGdzVFVGQlNDeEZRVUZWTzBGQlExUTdRVUZEUVRGQ0xEUkNRVUV3UWpCQ0xFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ1NDdzJRa0ZCTjBJc1EwRkJNVUk3UVVGRFFUdEJRVU5FTEVOQlRFUTdPMEZCVVVGSkxGbEJRVmwwUXl4VFFVRmFMRU5CUVhOQ2NVSXNTVUZCZEVJc1IwRkJOa0lzV1VGQldUdEJRVU40UXl4TFFVRkhaU3hOUVVGSUxFVkJRVlU3UVVGRFZFRXNVMEZCVDBrc2IwSkJRVkFzUTBGQk5FSTVRaXgxUWtGQk5VSTdRVUZEUVR0QlFVTkVMRU5CU2tRN08wRkJUVUVzU1VGQlRXTXNZMEZCWXl4SlFVRkpZeXhYUVVGS0xFVkJRWEJDT3p0QlFVVkJPMnRDUVVObFpDeFhJaXdpWm1sc1pTSTZJbXhwWWk5MGFXTnJaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGNJblJwWTJ0bGNsd2lMQ0JiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSjBhV05yWlhKY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aWRHbGphMlZ5WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvS1NCN1hHNXlaWFIxY200Z1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2UxeHVJRngwWEhSY2RGeDBZMjl1Wm1sbmRYSmhZbXhsT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJjZEdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z1hIUmNkRngwWEhSblpYUTZJR2RsZEhSbGNseHVJRngwWEhSY2RIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SURFcE8xeHVYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2WW05dmRITjBjbUZ3SUdZM05XVXlORGRrWWpkak1HUmtZemszT1Rsa0lpd2lhVzF3YjNKMElHMWhibUZuWlhJZ1puSnZiU0FuTGk5TllXNWhaMlZ5Snp0Y2JseHVMeThnZEc5RWJ6b2djM1Z3Y0c5eWRDQmliM1JvSUdOaGJHeGlZV05ySUdGdVpDQndjbTl0YVhObFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJVYVdOclJXNTBjbmxjYm50Y2JseDBMeW9xWEc1Y2RDQXFJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQmpiMjUwWlhoMElDMGdWR2hsSUZ3aWRHaHBjMXdpSUdGeVozVnRaVzUwSUdadmNpQjBhR1VnYkdsemRHVnVaWElnWm5WdVkzUnBiMjR1WEc1Y2RDQXFJRUJ3WVhKaGJTQjdablZ1WTNScGIyNTlJR3hwYzNSbGJtVnlMbHh1WEhRZ0tpOWNibHgwWTI5dWMzUnlkV04wYjNJb1kyOXVkR1Y0ZEN3Z2JHbHpkR1Z1WlhJc0lHTmhiR3hpWVdOcklEMGdiblZzYkN3Z2NISnBiM0pwZEhrZ1BTQXdLVnh1WEhSN1hHNWNkRngwZEdocGN5NWpiMjUwWlhoMElEMGdZMjl1ZEdWNGREdGNibHgwWEhSMGFHbHpMbXhwYzNSbGJtVnlJRDBnYkdsemRHVnVaWEk3WEc1Y2RGeDBkR2hwY3k1allXeHNZbUZqYXlBOUlHTmhiR3hpWVdOck8xeHVYSFJjZEhSb2FYTXVjSEpwYjNKcGRIa2dQU0J3Y21sdmNtbDBlVHRjYmx4MFhIUjBhR2x6TG1WNFpXTjFkR2x2YmtOdmRXNTBJRDBnTUR0Y2JseDBmVnh1WEc1OVhHNWNiaThxTFMwdExTQlFkV0pzYVdOOFVISnZkRzkwZVhCbElFMWxkR2h2WkhNZ0xTMHRLaTljYmx4dVZHbGphMFZ1ZEhKNUxuQnliM1J2ZEhsd1pTNWthWE53YjNObElEMGdablZ1WTNScGIyNG9LWHRjYmx4MGRHaHBjeTVqYjI1MFpYaDBJRDBnYm5Wc2JEdGNibHgwZEdocGN5NXNhWE4wWlc1bGNpQTlJRzUxYkd3N1hHNWNkSFJvYVhNdVkyRnNiR0poWTJzZ1BTQnVkV3hzTzF4dVhIUjBhR2x6TG5CeWFXOXlhWFI1SUQwZ2JuVnNiRHRjYmx4MGRHaHBjeTVsZUdWamRYUnBiMjVEYjNWdWRDQTlJRTVoVGp0Y2JuMDdYRzVjYmxScFkydEZiblJ5ZVM1d2NtOTBiM1I1Y0dVdVpYaGxZM1YwWlNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEcxaGJtRm5aWEl1WVdSa0tIUm9hWE1wTzF4dWZUdGNibHh1WEc1VWFXTnJSVzUwY25rdVNFbEhTQ0E5SURBN1hHNVVhV05yUlc1MGNua3VUazlTVFVGTUlEMGdNVHRjYmxScFkydEZiblJ5ZVM1TVQxY2dQU0F5TzF4dVhHNVVhV05yUlc1MGNua3VZV3hzYjNkbFpGUnBZMnREYjNWdWRDQTlJREV3TUR0Y2JsUnBZMnRGYm5SeWVTNWtaV0oxWnlBOUlHWmhiSE5sTzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwxUnBZMnRGYm5SeWVTNXFjeUlzSW1sdGNHOXlkQ0JVYVdOclpYSWdabkp2YlNBbkxpOVVhV05yUlc1MGNua25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JVYVdOclpYSTdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKcGJYQnZjblFnVkdsamEwVnVkSEo1SUdaeWIyMGdKeTR2VkdsamEwVnVkSEo1Snp0Y2JteGxkQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDQTlJREE3THk4Z1ptOXlJRmRwYm1SdmQzTWdSVzUyWEc1Y2JpOHZXekF0U0VsSFNDd2dNUzFPVDFKTlFVd3NJREl0VEU5WFhWeHViR1YwSUhCeWFXOXlhWFI1Ulc1MGNtbGxjeUE5SUZ0dWRXeHNMQ0J1ZFd4c0xDQnVkV3hzWFR0Y2JteGxkQ0IzWVdsMFJXNTBjbWxsY3lBOUlHNTFiR3c3WEc1Y2JteGxkQ0IwYVdOclEyOTFiblFnUFNBd08xeHViR1YwSUdselJYaGxZM1YwYVc1bklEMGdabUZzYzJVN1hHNWNibVoxYm1OMGFXOXVJRzl1VkdsamF5Z3BlMXh1WEhSMGFXTnJRMjkxYm5Rckt6dGNibHgwYVdZb1ZHbGphMFZ1ZEhKNUxtUmxZblZuS1h0Y2JseDBYSFJqYjI1emIyeGxMbXh2WnloY0lsUnBZMnNnWTI5MWJuUTZJRndpTENCMGFXTnJRMjkxYm5RcE8xeHVYSFI5WEc1Y2RHbG1LSFJwWTJ0RGIzVnVkQ0E4SUZScFkydEZiblJ5ZVM1aGJHeHZkMlZrVkdsamEwTnZkVzUwS1h0Y2JseDBYSFJsZUdWamRYUmxVSEpwYjNKcGRIbEZiblJ5YVdWektDazdYRzVjZEZ4MGJXOTJaVmRoYVhScGJtZEZiblJ5YVdWelJtOXlSWGhsWTNWMGFXOXVLQ2s3WEc1Y2RGeDBhV1lvWVhKbFVISnBiM0pwZEhsRmJuUnlhV1Z6Ulcxd2RIa29LU2w3WEc1Y2RGeDBYSFJ6ZEc5d0tDazdYRzVjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEc1Y2RGeDBmVnh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkR052Ym5OdmJHVXVkMkZ5YmloY0lrRnVhVzFoZEdsdmJpQm1jbUZ0WlNCc2IyOXdJR1Y0WldOMWRHVmtJSFJ2SUdsMGN5QnpaWFFnYkdsdGFYUTZJRndpTENCVWFXTnJSVzUwY25rdVlXeHNiM2RsWkZScFkydERiM1Z1ZENrN1hHNWNkRngwYVdZb1ZHbGphMFZ1ZEhKNUxtUmxZblZuS1h0Y2JseDBYSFJjZEdOdmJuTnZiR1V1Ykc5bktGd2lSVzUwY21sbGN6b2dYQ0lzSUhCeWFXOXlhWFI1Ulc1MGNtbGxjMXN3WFN4d2NtbHZjbWwwZVVWdWRISnBaWE5iTVYwc2NISnBiM0pwZEhsRmJuUnlhV1Z6V3pKZExIZGhhWFJGYm5SeWFXVnpLVHRjYmx4MFhIUjlYRzVjZEZ4MGNtVnpaWFFvS1R0Y2JseDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkSDFjYmx4MGNtVjBkWEp1SUhSeWRXVTdYRzVjYm4xY2JseHVYRzVtZFc1amRHbHZiaUJ6ZEc5d0tDbDdYRzVjZEhScFkydERiM1Z1ZENBOUlEQTdYRzVjZEdselJYaGxZM1YwYVc1bklEMGdabUZzYzJVN1hHNWNkSFJwWTJ0TllXNWhaMlZ5TG5OMGIzQW9LVHRjYm4xY2JseHVablZ1WTNScGIyNGdjbVZ6WlhRb0tYdGNibHgwYzNSdmNDZ3BPMXh1WEhSd2NtbHZjbWwwZVVWdWRISnBaWE1nUFNCYmJuVnNiQ3dnYm5Wc2JDd2diblZzYkYwN1hHNWNkSGRoYVhSRmJuUnlhV1Z6SUQwZ2JuVnNiRHRjYm4xY2JseHVYRzVtZFc1amRHbHZiaUJ0YjNabFYyRnBkR2x1WjBWdWRISnBaWE5HYjNKRmVHVmpkWFJwYjI0b0tYdGNibHgwWTI5dWMzUWdaVzUwY21sbGMwTnZkVzUwSUQwZ2QyRnBkRVZ1ZEhKcFpYTWdQeUFnZDJGcGRFVnVkSEpwWlhNdWJHVnVaM1JvSURvZ01EdGNibHgwYVdZb2QyRnBkRVZ1ZEhKcFpYTWdKaVlnWlc1MGNtbGxjME52ZFc1MElENGdNQ2tnZTF4dVhIUmNkR1p2Y2loc1pYUWdhVzVrWlhnZ1BTQXdJRHNnYVc1a1pYZ2dQQ0JsYm5SeWFXVnpRMjkxYm5RN0lHbHVaR1Y0S3lzcGUxeHVYSFJjZEZ4MGJHVjBJSFJwWTJ0RmJuUnllU0E5SUhkaGFYUkZiblJ5YVdWelcybHVaR1Y0WFR0Y2JseDBYSFJjZEdOdmJuTjBJSHNnY0hKcGIzSnBkSGtnZlNBOUlIUnBZMnRGYm5SeWVUdGNibHgwWEhSY2RHbG1LQ0Z3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRLWHRjYmx4MFhIUmNkRngwY0hKcGIzSnBkSGxGYm5SeWFXVnpXM0J5YVc5eWFYUjVYU0E5SUZ0ZE8xeHVYSFJjZEZ4MGZWeHVYSFJjZEZ4MFkyOXVjM1FnZEdsamEwVnVkSEpwWlhNZ1BTQndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZE8xeHVYSFJjZEZ4MGRHbGphMFZ1ZEhKcFpYTXVjSFZ6YUNoMGFXTnJSVzUwY25rcE8xeHVYSFJjZEgxY2JseDBmVnh1WEhSM1lXbDBSVzUwY21sbGN5QTlJRzUxYkd3N1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdWNFpXTjFkR1ZRY21sdmNtbDBlVVZ1ZEhKcFpYTW9LWHRjYmx4MGFYTkZlR1ZqZFhScGJtY2dQU0IwY25WbE8xeHVYSFJtYjNJb2JHVjBJR2x1WkdWNElEMGdNQ0E3SUdsdVpHVjRJRHdnY0hKcGIzSnBkSGxGYm5SeWFXVnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5bDdYRzVjZEZ4MGJHVjBJSFJwWTJ0RmJuUnlhV1Z6SUQwZ2NISnBiM0pwZEhsRmJuUnlhV1Z6VzJsdVpHVjRYVHRjYmx4MFhIUnBaaWgwYVdOclJXNTBjbWxsY3lBbUppQjBhV05yUlc1MGNtbGxjeTVzWlc1bmRHZ2dQaUF3S1NCN1hHNWNkRngwWEhSbGVHVmpkWFJsVkdsamEwVnVkSEpwWlhNb2RHbGphMFZ1ZEhKcFpYTXBPMXh1WEhSY2RGeDBMeTlEYkdWaGNpQjBhR1Z0SUc5dVkyVWdaWGhsWTNWMFpXUmNibHgwWEhSY2RIQnlhVzl5YVhSNVJXNTBjbWxsYzF0cGJtUmxlRjBnUFNCdWRXeHNPMXh1WEhSY2RIMWNibHgwZlZ4dVhIUnBjMFY0WldOMWRHbHVaeUE5SUdaaGJITmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmxlR1ZqZFhSbFZHbGphMFZ1ZEhKcFpYTW9kR2xqYTBWdWRISnBaWE1wZTF4dVhIUXZMeUJwYlhCdmNuUmhiblFnZEc4Z2RYTmxJR1p2Y2kxc2IyOXdYRzVjZEM4dklIUnBZMnRGYm5SeWFXVnpJR2R5YjNkeklHUjVibUZ0YVdOaGJHeDVJR0o1SUc5dVpTQnZaaUJwZEhNZ1pXNTBjbmxjYmx4MEx5OGdabTl5SUdWNFlXMXdiR1U2SUd4bGRDQnpZWGtnZDJVZ2FHRjJaU0J2Ym1VZ1pXNTBjbmtzSUdGdVpDQmxlR1ZqZFhScGJtY2dkR2hoZENCbGJuUnllU0J0YVdkb2RDQmhaR1J6SUdGdWIzUm9aWElnWlc1MGNubGNibHgwTHk4Z2QybDBhQ0J0WVhBZ1puVnVZM1JwYjI0Z2QyVWdZMkZ1ZENCbGVHVmpkWFJsSUdSNWJtRnRhV05oYkd4NUlHZHliM2RwYm1jZ1pXNTBjbWxsY3k1Y2JseDBabTl5S0d4bGRDQnBJRDBnTURzZ2FTQThJSFJwWTJ0RmJuUnlhV1Z6TG14bGJtZDBhRHNnYVNzcktYdGNibHgwWEhSamIyNXpkQ0IwYVdOclJXNTBjbmtnUFNCMGFXTnJSVzUwY21sbGMxdHBYVHRjYmx4MFhIUjBhV05yUlc1MGNua3ViR2x6ZEdWdVpYSXVZMkZzYkNoMGFXTnJSVzUwY25rdVkyOXVkR1Y0ZENCOGZDQjBhV05yUlc1MGNua3ViR2x6ZEdWdVpYSmJKM1JvYVhNblhTazdYRzVjZEZ4MGFXWWdLSFJwWTJ0RmJuUnllUzVqWVd4c1ltRmpheWtnZTF4dVhIUmNkRngwZEdsamEwVnVkSEo1TG1OaGJHeGlZV05yTG1OaGJHd29kR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJXeWQwYUdsekoxMHBPMXh1WEhSY2RIMWNibHgwWEhSMGFXTnJSVzUwY25rdVpYaGxZM1YwYVc5dVEyOTFiblFyS3p0Y2JseDBYSFJwWmloVWFXTnJSVzUwY25rdVpHVmlkV2NnSmlZZ2RHbGphMFZ1ZEhKNUxtVjRaV04xZEdsdmJrTnZkVzUwSUQ0Z01TbDdYRzVjZEZ4MFhIUmpiMjV6YjJ4bExteHZaeWhjSWtWNFpXTjFkR1ZrSUcxdmNtVWdkR2hoYmlCdmJtTmxPaUJjSWl3Z2RHbGphMFZ1ZEhKNUtUdGNibHgwWEhSOVhHNWNkSDFjYm4xY2JseHVablZ1WTNScGIyNGdZWEpsVUhKcGIzSnBkSGxGYm5SeWFXVnpSVzF3ZEhrb0tYdGNibHgwWm05eUtHeGxkQ0JwYm1SbGVDQTlJREFnT3lCcGJtUmxlQ0E4SUhCeWFXOXlhWFI1Ulc1MGNtbGxjeTVzWlc1bmRHZzdJR2x1WkdWNEt5c3BlMXh1WEhSY2RHeGxkQ0IwYVdOclJXNTBjbWxsY3lBOUlIQnlhVzl5YVhSNVJXNTBjbWxsYzF0cGJtUmxlRjA3WEc1Y2RGeDBhV1lvZEdsamEwVnVkSEpwWlhNZ0ppWWdkR2xqYTBWdWRISnBaWE11YkdWdVozUm9JRDRnTUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RISmxkSFZ5YmlCMGNuVmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWdwZTF4dVhIUmpiMjV6ZENCemFHOTFiR1JEYjI1MGFXNTFaU0E5SUc5dVZHbGpheWdwTzF4dVhIUnBaaWh6YUc5MWJHUkRiMjUwYVc1MVpTbDdYRzVjZEZ4MGNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FnUFNCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVU5oYkd4aVlXTnJLVHRjYmx4MGZWeHVmVnh1WEc1amJHRnpjeUJVYVdOclRXRnVZV2RsY2lCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0NsN1hHNWNkSDFjYm4xY2JseHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1Ga1pDQTlJR1oxYm1OMGFXOXVJQ2gwYVdOclJXNTBjbmtwSUh0Y2JseDBhV1lvWVhKbFVISnBiM0pwZEhsRmJuUnlhV1Z6Ulcxd2RIa29LU2w3WEc1Y2RGeDBkR2hwY3k1emRHRnlkQ2dwWEc1Y2RIMWNibHgwYVdZb2FYTkZlR1ZqZFhScGJtY3BlMXh1WEhSY2RHTnZibk52YkdVdWJHOW5LRndpUVdSa1pXUWdkRzhnVjJGcGRDQmxiblJ5YVdWelhDSXBPMXh1WEhSY2RHbG1LQ0YzWVdsMFJXNTBjbWxsY3lsN1hHNWNkRngwWEhSM1lXbDBSVzUwY21sbGN5QTlJRnRkTzF4dVhIUmNkSDFjYmx4MFhIUjNZV2wwUlc1MGNtbGxjeTV3ZFhOb0tIUnBZMnRGYm5SeWVTazdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBZMjl1YzNRZ2V5QndjbWx2Y21sMGVTQjlJRDBnZEdsamEwVnVkSEo1TzF4dVhIUmNkR2xtS0NGd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkS1h0Y2JseDBYSFJjZEhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjBnUFNCYlhUdGNibHgwWEhSOVhHNWNkRngwWTI5dWMzUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkTzF4dVhIUmNkSFJwWTJ0RmJuUnlhV1Z6TG5CMWMyZ29kR2xqYTBWdWRISjVLVHRjYmx4MGZWeHVYRzU5TzF4dVhHNWNiaTh2SUZSdlpHODZJRk4xY0hCdmNuUWdabTl5SUU1dlpHVktVeUJjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNXpkR0Z5ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGFXWW9kMmx1Wkc5M0tYdGNibHgwWEhRdkx5QjNhV3hzSUhKbFkyVnBkbVZ6SUhScGJXVnpkR0Z0Y0NCaGN5QmhjbWQxYldWdWRGeHVYSFJjZEhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5azdYRzVjZEgxY2JuMDdYRzVjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbk4wYjNBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RHbG1LSGRwYm1SdmR5bDdYRzVjZEZ4MGQybHVaRzkzTG1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrS1R0Y2JseDBmVnh1ZlR0Y2JseHVZMjl1YzNRZ2RHbGphMDFoYm1GblpYSWdQU0J1WlhjZ1ZHbGphMDFoYm1GblpYSW9LVHRjYmx4dUx5OGdjMmx1WjJ4bGRHOXVTVzV6ZEdGdVlXTmxYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjBhV05yVFdGdVlXZGxjanRjYmx4dVhHNWNibHh1WEc1Y2JseHVYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMDFoYm1GblpYSXVhbk1pWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gMDtcbiAgICB9XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IHJlc3BvbnNpYmxlIGZvciBpbml0aWF0aW5nIHRyaWdnZXJcbi8vIGlmIGNhbGxlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgbWFrZSBhIHN5bmNlZCBlZmZlY3Qgb2YgZXhlY3V0aW9uXG5GdW5jdGlvbnMucHJvdG90eXBlLmV4ZWN1dGVUcmlnZ2VyZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCB0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdGNvbnN0IF9leGVjdXRlVHJpZ2dlcmVyID0gKCk9Pntcblx0XHRsZXQgdGlja2VyO1xuXHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0ZnVuYy5jYWxsKGNvbnRleHQpO1xuXHRcdFx0aWYodHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0XHR0cmlnZ2VyZXJDYWxsYmFjayAmJiB0cmlnZ2VyZXJDYWxsYmFjaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgdHJpZ2dlcmVyQ2FsbGJhY2ssIG51bGwsIDMpO1xuXHRcdFx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCBfZXhlY3V0ZVRyaWdnZXJlciwgdHJpZ2dlcmVyQ2FsbGJhY2ssIDMpO1xuXHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHR9XG5cdH07XG5cdF9leGVjdXRlVHJpZ2dlcmVyKCk7XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCwgZnVuYywgZXhlY3V0ZUxhdGVySW5OZXh0VGljayA9IGZhbHNlLCBwcmlvcml0eSA9IDAsIGxpc3RlbmVyQ2FsbGJhY2sgPSBudWxsKXtcbiAgICBsZXQgZW50cnk7XG4gICAgaWYgKGV4ZWN1dGVMYXRlckluTmV4dFRpY2spe1xuXG5cdCAgICAgY29uc3QgdGlja2VyQ2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IC0gMTtcblx0XHQgICAgaWYobGlzdGVuZXJDYWxsYmFjayl7XG5cdFx0XHQgICAgbGlzdGVuZXJDYWxsYmFjay5jYWxsKGxpc3RlbmVyQ2FsbGJhY2tbJ3RoaXMnXSlcblx0XHQgICAgfVxuXHRcdCAgICBpZiggdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHQgICAgdGhpcy5saXN0ZW5lcnNFeGVjdXRpb25Db21wbGV0ZWQoKTtcblx0XHQgICAgfVxuXHQgICAgfTtcbiAgICAgICAgY29uc3QgdGlja2VyID0gbmV3IFRpY2tlcihjb250ZXh0LCBmdW5jLCB0aWNrZXJDYWxsYmFjaywgcHJpb3JpdHkpO1xuXHQgICAgZW50cnkgPSBuZXcgRW50cnkodGlja2VyLCB0aWNrZXIuZXhlY3V0ZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzLnB1c2goZW50cnkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoY29udGV4dCwgZnVuYyk7XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICB9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLmxpc3RlbmVyc0V4ZWN1dGlvbkNvbXBsZXRlZCA9IGZ1bmN0aW9uKCl7XG5cbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsZnVuYywgY2FsbGJhY2sgPSBudWxsKXtcblx0bGV0IGVudHJ5LCBpO1xuXHRjb25zdCB7ZnJhbWVFbnRyaWVzLCBlbnRyaWVzfSA9IHRoaXM7XG5cblx0Zm9yKGkgPSAwOyBpIDwgZnJhbWVFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0ICAgIGNvbnN0IGZyYW1lRW50cnkgPSAgZnJhbWVFbnRyaWVzW2ldO1xuXHRcdGVudHJ5ID0gZnJhbWVFbnRyeS5jb250ZXh0O1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdGZyYW1lRW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0fSBlbHNlIHsgLy8gZnJhbWUgdHJpZ2dlciBMaXN0ZW5lcnMgYXJlIHN0aWxsIHJ1bm5pbmdcblx0XHRcdFx0bGV0IHRpY2tlckVudHJ5O1xuXHRcdFx0XHRjb25zdCBkaXNwb3NlRG9uZU5vdGlmaWVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH0gZWxzZXtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0ZW50cnkgPSBlbnRyaWVzW2ldO1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0ZW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudHJpZ2dlckxpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZW50cmllc0luZGV4VG9EaXNwb3NlID0gW107XG5cblx0dGhpcy5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcbiAgICAgICAgaWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG4gICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcbiAgICB9LCB0aGlzKTtcblxuXG5cdGlmKHRoaXMuZnJhbWVFbnRyaWVzLmxlbmd0aCA+IDApe1xuXHRcdHRoaXMuZnJhbWVFbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcblx0XHRcdGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCArIDE7XG5cdFx0XHRcdGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG5cdFx0XHR0aGlzLmZyYW1lRW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcblx0XHR9LCB0aGlzKVxuXHR9IGVsc2Uge1xuXHRcdHRoaXMubGlzdGVuZXJzRXhlY3V0aW9uQ29tcGxldGVkKCk7XG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2Z1bmN0aW9ucy5qcyIsImltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZ1bmMpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuYztcbiAgICB9XG59XG5cbi8vIE1ldGhvZCBhdmFpbGFibGUgb25seSBvbiBFbnRyeSBpbnN0YW5jZSBub3QgaW4gQ2xhc3NcbkVudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCl7XG4gICAgaWYodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgVGlja2VyKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVyID0gbnVsbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZW50cnkuanMiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gXCIuLy4uL2xpYlwiO1xuXG5mdW5jdGlvbiBpbW1lZGlhdGVGdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBJbW1lZGlhdGUgRnVuY3Rpb25cIik7XG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gZnJhbWVGdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBGcmFtZSBGdW5jdGlvblwiLCBmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5mdW5jdGlvbiBmcmFtZUZ1bmN0aW9uU2Vjb25kKCl7XG4gICAgY29uc29sZS5sb2coXCJJIGFtIEZyYW1lIEZ1bmN0aW9uIFNlY29uZFwiLCBmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5lcnNEb25lKCl7XG5cdGNvbnNvbGUubG9nKFwiQWxsIEZ1bmN0aW9uIGV4ZWN1dGVkXCIsIGZ1bmN0aW9ucy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCk7XG59XG5cbmNvbnN0IGZ1bmN0aW9ucyA9IG5ldyBGdW5jdGlvbnMobGlzdGVuZXJzRG9uZSk7XG5mdW5jdGlvbnMuYWRkTGlzdGVuZXIod2luZG93LGZyYW1lRnVuY3Rpb25TZWNvbmQsIHRydWUsIDEpO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uLCB0cnVlICk7XG5mdW5jdGlvbnMuYWRkTGlzdGVuZXIod2luZG93LGltbWVkaWF0ZUZ1bmN0aW9uKTtcblxuY29uc29sZS5sb2coXCJ0cmlnZ2VyIDFcIik7XG5cbmZ1bmN0aW9ucy50cmlnZ2VyTGlzdGVuZXJzKCk7XG5cbi8vIDIgZW50cmllc1xuZnVuY3Rpb25zLnJlbW92ZUxpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uU2Vjb25kLCBmdW5jdGlvbnMudHJpZ2dlckxpc3RlbmVycy5iaW5kKGZ1bmN0aW9ucykpO1xuY29uc29sZS5sb2coXCJSZW1vdmUgZnJhbWUgZnVuY3Rpb25cIik7XG5cbi8vIDNyZCBlbnRyeVxuZnVuY3Rpb25zLnJlbW92ZUxpc3RlbmVyKHdpbmRvdyxpbW1lZGlhdGVGdW5jdGlvbik7XG5jb25zb2xlLmxvZyhcIlJlbW92ZSBJbW1lZGlhdGUgZnVuY3Rpb25cIik7XG5cbmNvbnNvbGUubG9nKFwidHJpZ2dlciAyXCIpO1xuZnVuY3Rpb25zLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9