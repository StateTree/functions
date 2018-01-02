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

	_classCallCheck(this, TickEntry);

	this.context = context;
	this.listener = listener;
	this.callback = callback;
	this.priority = priority;
	this.recursionCount = 0; // required to stop calling the same function in recursive call
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
	if (this.recursionCount === 0) {
		_Manager2.default.add(this);
	} else {
		if (this.callback) {
			this.callback.call(tickEntry.callback['this'], true);
		}
	}
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
		tickEntry.recursionCount++;
		tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);
		tickEntry.recursionCount--;
		if (tickEntry.callback) {
			tickEntry.callback.call(tickEntry.callback['this']);
		}
	}
}

function executeTickEntries(tickEntries) {
	tickEntries.map(function (tickEntry, index) {
		tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);
		if (tickEntry.callback) {
			tickEntry.callback.call(tickEntry.callback['this']);
		}
	});
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
	tickEntries.push(tickEntry); // todo: Stack or Queue
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ODkwZTdhOWUzMDdjZWI3OWNlMSIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwicmVjdXJzaW9uQ291bnQiLCJwcm90b3R5cGUiLCJkaXNwb3NlIiwiZXhlY3V0ZSIsImFkZCIsImNhbGwiLCJ0aWNrRW50cnkiLCJnZXRNYXhQcmlvcml0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwiTmFOIiwicHJpb3JpdHlFbnRyaWVzIiwib25UaWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJ0aWNrRW50cmllcyIsImV4ZWN1dGVUaWNrRW50cmllcyIsImkiLCJtYXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlRpY2tNYW5hZ2VyIiwic3RhcnQiLCJwdXNoIiwic3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2luZ2xldG9uSW5zdGFuY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztB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QUFNQWEsWUFBWXBCLFNBQVosQ0FBc0JNLGNBQXRCLEdBQXVDLFlBQVk7QUFDbEQsUUFBT0csZ0JBQWdCRyxNQUFoQixHQUF5QixDQUFoQztBQUNBLENBRkQ7O0FBSUEsSUFBTWEsb0JBQW9CLElBQUlMLFdBQUosRUFBMUI7O2tCQUVlSyxpQiIsImZpbGUiOiJsaWIvdGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ODkwZTdhOWUzMDdjZWI3OWNlMSIsImltcG9ydCBUaWNrZXIgZnJvbSAnLi9UaWNrRW50cnknO1xuXG5leHBvcnQgZGVmYXVsdCBUaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgbWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xuXG4vLyB0b0RvOiBzdXBwb3J0IGJvdGggY2FsbGJhY2sgYW5kIHByb21pc2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tFbnRyeVxue1xuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgXCJ0aGlzXCIgYXJndW1lbnQgZm9yIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBsaXN0ZW5lciwgY2FsbGJhY2sgPSBudWxsLCBwcmlvcml0eSA9IDApXG5cdHtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdHRoaXMucmVjdXJzaW9uQ291bnQgPSAwOyAvLyByZXF1aXJlZCB0byBzdG9wIGNhbGxpbmcgdGhlIHNhbWUgZnVuY3Rpb24gaW4gcmVjdXJzaXZlIGNhbGxcblx0fVxuXG59XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKXtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMucmVjdXJzaW9uQ291bnQgPT09IDApe1xuXHRcdG1hbmFnZXIuYWRkKHRoaXMpO1xuXHR9IGVsc2Uge1xuXHRcdGlmICh0aGlzLmNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10sIHRydWUpO1xuXHRcdH1cblx0fVxufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBtYW5hZ2VyLmdldE1heFByaW9yaXR5KCk7XG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9UaWNrRW50cnkuanMiLCJcbmxldCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IE5hTjtcbmNvbnN0IHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcblxuZnVuY3Rpb24gb25UaWNrKCl7XG5cdGZvcihsZXQgaW5kZXggPSAwIDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKXtcblx0XHRsZXQgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyl7XG5cdC8vIGltcG9ydGFudCB0byB1c2UgZm9yLWxvb3Bcblx0Ly8gdGlja0VudHJpZXMgZ3Jvd3MgZHluYW1pY2FsbHkgYnkgb25lIG9mIGl0cyBlbnRyeVxuXHQvLyBmb3IgZXhhbXBsZTogbGV0IHNheSB3ZSBoYXZlIG9uZSBlbnRyeSwgYW5kIGV4ZWN1dGluZyB0aGF0IGVudHJ5IG1pZ2h0IGFkZHMgYW5vdGhlciBlbnRyeVxuXHQvLyB3aXRoIG1hcCBmdW5jdGlvbiB3ZSBjYW50IGV4ZWN1dGUgZHluYW1pY2FsbHkgZ3Jvd2luZyBlbnRyaWVzLlxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGNvbnN0IHRpY2tFbnRyeSA9IHRpY2tFbnRyaWVzW2ldO1xuXHRcdHRpY2tFbnRyeS5yZWN1cnNpb25Db3VudCsrO1xuXHRcdHRpY2tFbnRyeS5saXN0ZW5lci5jYWxsKHRpY2tFbnRyeS5jb250ZXh0IHx8IHRpY2tFbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHR0aWNrRW50cnkucmVjdXJzaW9uQ291bnQtLTtcblx0XHRpZiAodGlja0VudHJ5LmNhbGxiYWNrKSB7XG5cdFx0XHR0aWNrRW50cnkuY2FsbGJhY2suY2FsbCh0aWNrRW50cnkuY2FsbGJhY2tbJ3RoaXMnXSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyl7XG5cdHRpY2tFbnRyaWVzLm1hcCggKHRpY2tFbnRyeSAsIGluZGV4ICk9PiB7XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpe1xuXHRvblRpY2soKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcbn1cblxuY2xhc3MgVGlja01hbmFnZXIge1xuXHRjb25zdHJ1Y3Rvcigpe1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cdH1cbn1cblxuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHRjb25zdCB7IHByaW9yaXR5IH0gPSB0aWNrRW50cnk7XG5cdGlmKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKXtcblx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdH1cblx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7IC8vIHRvZG86IFN0YWNrIG9yIFF1ZXVlXG59O1xuXG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYod2luZG93KXtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdC8vdG9kbzogTGVhcm46ICB0aGUgcHVycG9zZSBvZiB0aW1lc3RhbXBcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHR9XG59O1xuXG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHByaW9yaXR5RW50cmllcy5sZW5ndGggLSAxO1xufTtcblxuY29uc3Qgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uSW5zdGFuY2U7XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9NYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

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

	var _executeTriggerer = function _executeTriggerer(triggeredAgain) {
		var ticker = void 0;
		if (_this.executingLaterInNextTickCount === 0) {
			func.call(context);
			if (triggererCallback) {
				if (_this.executingLaterInNextTickCount === 0) {
					triggererCallback && triggererCallback(triggeredAgain);
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

		var tickerCallback = function tickerCallback(triggeredAgain) {
			_this2.executingLaterInNextTickCount = _this2.executingLaterInNextTickCount - 1;
			if (listenerCallback) {
				listenerCallback.call(listenerCallback['this'], triggeredAgain);
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
				var disposeDoneNotifier = function disposeDoneNotifier(triggeredAgain) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZDM1NGJkZjRmZGUxMzQ1OGU5MyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9ucyIsInRyaWdnZXJEb25lTm90aWZpZXIiLCJlbnRyaWVzIiwiZnJhbWVFbnRyaWVzIiwiZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQiLCJwcm90b3R5cGUiLCJzZXRUcmlnZ2VyRG9uZU5vdGlmaWVyIiwicmVtb3ZlVHJpZ2dlckRvbmVOb3RpZmllciIsImV4ZWN1dGVUcmlnZ2VyZXIiLCJjb250ZXh0IiwiZnVuYyIsInRyaWdnZXJlckNhbGxiYWNrIiwiX2V4ZWN1dGVUcmlnZ2VyZXIiLCJ0cmlnZ2VyZWRBZ2FpbiIsInRpY2tlciIsImNhbGwiLCJleGVjdXRlIiwiYWRkTGlzdGVuZXIiLCJleGVjdXRlTGF0ZXJJbk5leHRUaWNrIiwicHJpb3JpdHkiLCJsaXN0ZW5lckNhbGxiYWNrIiwiZW50cnkiLCJ0aWNrZXJDYWxsYmFjayIsInB1c2giLCJyZW1vdmVMaXN0ZW5lciIsImNhbGxiYWNrIiwiaSIsImZyYW1lRW50cnkiLCJsaXN0ZW5lciIsImRpc3Bvc2UiLCJ0aWNrZXJFbnRyeSIsImRpc3Bvc2VEb25lTm90aWZpZXIiLCJsZW5ndGgiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwiZW50cmllc0luZGV4VG9EaXNwb3NlIiwiZm9yRWFjaCIsImluZGV4IiwiYXBwbHkiLCJlbnRyeUluZGV4Iiwic3BsaWNlIiwiRW50cnkiLCJpbW1lZGlhdGVGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJmdW5jdGlvbnMiLCJmcmFtZUZ1bmN0aW9uIiwiZnJhbWVGdW5jdGlvblNlY29uZCIsImxpc3RlbmVyc0RvbmUiLCJ3aW5kb3ciLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFD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QW1DQyxVQUFVeEMsNkJBQTdDO0FBQ0g7O0FBRUQsU0FBUzBDLG1CQUFULEdBQThCO0FBQzFCSixZQUFRQyxHQUFSLENBQVksNEJBQVosRUFBMENDLFVBQVV4Qyw2QkFBcEQ7QUFDSDs7QUFFRCxTQUFTMkMsYUFBVCxHQUF3QjtBQUN2QkwsWUFBUUMsR0FBUixDQUFZLHVCQUFaLEVBQXFDQyxVQUFVeEMsNkJBQS9DO0FBQ0E7O0FBRUQsSUFBTXdDLFlBQVksa0JBQWNHLGFBQWQsQ0FBbEI7QUFDQUgsVUFBVTNCLFdBQVYsQ0FBc0IrQixNQUF0QixFQUE2QkYsbUJBQTdCLEVBQWtELElBQWxELEVBQXdELENBQXhEO0FBQ0FGLFVBQVUzQixXQUFWLENBQXNCK0IsTUFBdEIsRUFBNkJILGFBQTdCLEVBQTRDLElBQTVDO0FBQ0FELFVBQVUzQixXQUFWLENBQXNCK0IsTUFBdEIsRUFBNkJQLGlCQUE3Qjs7QUFFQUMsUUFBUUMsR0FBUixDQUFZLFdBQVo7O0FBRUFDLFVBQVVYLGdCQUFWO0FBQ0E7QUFDQVcsVUFBVXBCLGNBQVYsQ0FBeUJ3QixNQUF6QixFQUFnQ0YsbUJBQWhDLEVBQXFERixVQUFVWCxnQkFBVixDQUEyQmdCLElBQTNCLENBQWdDTCxTQUFoQyxDQUFyRDtBQUNBRixRQUFRQyxHQUFSLENBQVksdUJBQVo7QUFDQTtBQUNBQyxVQUFVcEIsY0FBVixDQUF5QndCLE1BQXpCLEVBQWdDUCxpQkFBaEM7QUFDQUMsUUFBUUMsR0FBUixDQUFZLDJCQUFaOztBQUVBRCxRQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBQyxVQUFVWCxnQkFBVixHIiwiZmlsZSI6ImRlbW8vZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWQzNTRiZGY0ZmRlMTM0NThlOTMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdHRoaXMucmVjdXJzaW9uQ291bnQgPSAwOyAvLyByZXF1aXJlZCB0byBzdG9wIGNhbGxpbmcgdGhlIHNhbWUgZnVuY3Rpb24gaW4gcmVjdXJzaXZlIGNhbGxcbn07XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gVGlja0VudHJ5O1xuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5yZWN1cnNpb25Db3VudCA9PT0gMCkge1xuXHRcdF9NYW5hZ2VyMi5kZWZhdWx0LmFkZCh0aGlzKTtcblx0fSBlbHNlIHtcblx0XHRpZiAodGhpcy5jYWxsYmFjaykge1xuXHRcdFx0dGhpcy5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddLCB0cnVlKTtcblx0XHR9XG5cdH1cbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZ2V0TWF4UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBfTWFuYWdlcjIuZGVmYXVsdC5nZXRNYXhQcmlvcml0eSgpO1xufTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IE5hTjtcbnZhciBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbmZ1bmN0aW9uIG9uVGljaygpIHtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0dGlja0VudHJ5LnJlY3Vyc2lvbkNvdW50Kys7XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdHRpY2tFbnRyeS5yZWN1cnNpb25Db3VudC0tO1xuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKSB7XG5cdHRpY2tFbnRyaWVzLm1hcChmdW5jdGlvbiAodGlja0VudHJ5LCBpbmRleCkge1xuXHRcdHRpY2tFbnRyeS5saXN0ZW5lci5jYWxsKHRpY2tFbnRyeS5jb250ZXh0IHx8IHRpY2tFbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRpZiAodGlja0VudHJ5LmNhbGxiYWNrKSB7XG5cdFx0XHR0aWNrRW50cnkuY2FsbGJhY2suY2FsbCh0aWNrRW50cnkuY2FsbGJhY2tbJ3RoaXMnXSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG52YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXHR0aGlzLnN0YXJ0KCk7XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHR9XG5cdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcbn07XG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG59O1xuXG52YXIgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2luZ2xldG9uSW5zdGFuY2U7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTJPRGt3WlRkaE9XVXpNRGRqWldJM09XTmxNU0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDFScFkydEZiblJ5ZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVWFXTnJSVzUwY25raUxDSmpiMjUwWlhoMElpd2liR2x6ZEdWdVpYSWlMQ0pqWVd4c1ltRmpheUlzSW5CeWFXOXlhWFI1SWl3aWNtVmpkWEp6YVc5dVEyOTFiblFpTENKd2NtOTBiM1I1Y0dVaUxDSmthWE53YjNObElpd2laWGhsWTNWMFpTSXNJbUZrWkNJc0ltTmhiR3dpTENKMGFXTnJSVzUwY25raUxDSm5aWFJOWVhoUWNtbHZjbWwwZVNJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSWl3aVRtRk9JaXdpY0hKcGIzSnBkSGxGYm5SeWFXVnpJaXdpYjI1VWFXTnJJaXdpYVc1a1pYZ2lMQ0pzWlc1bmRHZ2lMQ0owYVdOclJXNTBjbWxsY3lJc0ltVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5SXNJbWtpTENKdFlYQWlMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlJc0luZHBibVJ2ZHlJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0lzSWxScFkydE5ZVzVoWjJWeUlpd2ljM1JoY25RaUxDSndkWE5vSWl3aWMzUnZjQ0lzSW1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElpd2ljMmx1WjJ4bGRHOXVTVzV6ZEdGdVkyVWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRE4wUkJPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUVVFN096czdPenM3TzBGQlJVRTdTVUZEY1VKQkxGTTdRVUZGY0VJN096czdRVUZKUVN4dFFrRkJXVU1zVDBGQldpeEZRVUZ4UWtNc1VVRkJja0lzUlVGRFFUdEJRVUZCTEV0QlJDdENReXhSUVVNdlFpeDFSVUZFTUVNc1NVRkRNVU03UVVGQlFTeExRVVJuUkVNc1VVRkRhRVFzZFVWQlJESkVMRU5CUXpORU96dEJRVUZCT3p0QlFVTkRMRTFCUVV0SUxFOUJRVXdzUjBGQlpVRXNUMEZCWmp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSkJMRkZCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOQkxFMUJRVXRETEdOQlFVd3NSMEZCYzBJc1EwRkJkRUlzUTBGTVJDeERRVXN3UWp0QlFVTjZRaXhET3p0QlFVbEdPenRyUWtGcVFuRkNUQ3hUTzBGQmJVSnlRa0VzVlVGQlZVMHNVMEZCVml4RFFVRnZRa01zVDBGQmNFSXNSMEZCT0VJc1dVRkJWVHRCUVVOMlF5eE5RVUZMVGl4UFFVRk1MRWRCUVdVc1NVRkJaanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ0xFbEJRV2hDTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWp0QlFVTkJMRU5CVEVRN08wRkJUMEZLTEZWQlFWVk5MRk5CUVZZc1EwRkJiMEpGTEU5QlFYQkNMRWRCUVRoQ0xGbEJRVlU3UVVGRGRrTXNTMEZCUnl4TFFVRkxTQ3hqUVVGTUxFdEJRWGRDTEVOQlFUTkNMRVZCUVRaQ08wRkJRelZDTEc5Q1FVRlJTU3hIUVVGU0xFTkJRVmtzU1VGQldqdEJRVU5CTEVWQlJrUXNUVUZGVHp0QlFVTk9MRTFCUVVrc1MwRkJTMDRzVVVGQlZDeEZRVUZ0UWp0QlFVTnNRaXhSUVVGTFFTeFJRVUZNTEVOQlFXTlBMRWxCUVdRc1EwRkJiVUpETEZWQlFWVlNMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCYmtJc1JVRkJLME1zU1VGQkwwTTdRVUZEUVR0QlFVTkVPMEZCUTBRc1EwRlNSRHM3UVVGVlFVZ3NWVUZCVlUwc1UwRkJWaXhEUVVGdlFrMHNZMEZCY0VJc1IwRkJjVU1zV1VGQlZUdEJRVU01UXl4UlFVRlBMR3RDUVVGUlFTeGpRVUZTTEVWQlFWQTdRVUZEUVN4RFFVWkVMRU03T3pzN096czdPenM3T3pzN096dEJRM1JEUVN4SlFVRkpReXd3UWtGQk1FSkRMRWRCUVRsQ08wRkJRMEVzU1VGQlRVTXNhMEpCUVd0Q0xFTkJRVU1zU1VGQlJDeEZRVUZQTEVsQlFWQXNSVUZCWVN4SlFVRmlMRVZCUVcxQ0xFbEJRVzVDTEVOQlFYaENPenRCUVVWQkxGTkJRVk5ETEUxQlFWUXNSMEZCYVVJN1FVRkRhRUlzVFVGQlNTeEpRVUZKUXl4UlFVRlJMRU5CUVdoQ0xFVkJRVzlDUVN4UlFVRlJSaXhuUWtGQlowSkhMRTFCUVRWRExFVkJRVzlFUkN4UFFVRndSQ3hGUVVFMFJEdEJRVU16UkN4TlFVRkpSU3hqUVVGalNpeG5Ra0ZCWjBKRkxFdEJRV2hDTEVOQlFXeENPMEZCUTBFc1RVRkJSMFVzWlVGQlpVRXNXVUZCV1VRc1RVRkJXaXhIUVVGeFFpeERRVUYyUXl4RlFVRXdRenRCUVVONlEwVXNjMEpCUVcxQ1JDeFhRVUZ1UWp0QlFVTkJPMEZCUTBGS0xHMUNRVUZuUWtVc1MwRkJhRUlzU1VGQmVVSXNTVUZCZWtJN1FVRkRRVHRCUVVORU8wRkJRMFE3TzBGQlJVUXNVMEZCVTBjc2EwSkJRVlFzUTBGQk5FSkVMRmRCUVRWQ0xFVkJRWGRETzBGQlEzWkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlNTeEpRVUZKUlN4SlFVRkpMRU5CUVZvc1JVRkJaVUVzU1VGQlNVWXNXVUZCV1VRc1RVRkJMMElzUlVGQmRVTkhMRWRCUVhaRExFVkJRVEpETzBGQlF6RkRMRTFCUVUxV0xGbEJRVmxSTEZsQlFWbEZMRU5CUVZvc1EwRkJiRUk3UVVGRFFWWXNXVUZCVlU0c1kwRkJWanRCUVVOQlRTeFpRVUZWVkN4UlFVRldMRU5CUVcxQ1VTeEpRVUZ1UWl4RFFVRjNRa01zVlVGQlZWWXNUMEZCVml4SlFVRnhRbFVzVlVGQlZWUXNVVUZCVml4RFFVRnRRaXhOUVVGdVFpeERRVUUzUXp0QlFVTkJVeXhaUVVGVlRpeGpRVUZXTzBGQlEwRXNUVUZCU1Uwc1ZVRkJWVklzVVVGQlpDeEZRVUYzUWp0QlFVTjJRbEVzWVVGQlZWSXNVVUZCVml4RFFVRnRRazhzU1VGQmJrSXNRMEZCZDBKRExGVkJRVlZTTEZGQlFWWXNRMEZCYlVJc1RVRkJia0lzUTBGQmVFSTdRVUZEUVR0QlFVTkVPMEZCUTBRN08wRkJSVVFzVTBGQlUybENMR3RDUVVGVUxFTkJRVFJDUkN4WFFVRTFRaXhGUVVGM1F6dEJRVU4yUTBFc1lVRkJXVWNzUjBGQldpeERRVUZwUWl4VlFVRkRXQ3hUUVVGRUxFVkJRV0ZOTEV0QlFXSXNSVUZCZFVJN1FVRkRka05PTEZsQlFWVlVMRkZCUVZZc1EwRkJiVUpSTEVsQlFXNUNMRU5CUVhkQ1F5eFZRVUZWVml4UFFVRldMRWxCUVhGQ1ZTeFZRVUZWVkN4UlFVRldMRU5CUVcxQ0xFMUJRVzVDTEVOQlFUZERPMEZCUTBFc1RVRkJTVk1zVlVGQlZWSXNVVUZCWkN4RlFVRjNRanRCUVVOMlFsRXNZVUZCVlZJc1VVRkJWaXhEUVVGdFFrOHNTVUZCYmtJc1EwRkJkMEpETEZWQlFWVlNMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCZUVJN1FVRkRRVHRCUVVORUxFVkJURVE3UVVGTlFUczdRVUZGUkN4VFFVRlRiMElzTmtKQlFWUXNSMEZCZDBNN1FVRkRka05RTzBGQlEwRklMREpDUVVFd1FsY3NUMEZCVDBNc2NVSkJRVkFzUTBGQk5rSkdMRFpDUVVFM1FpeERRVUV4UWp0QlFVTkJPenRKUVVWTFJ5eFhMRWRCUTB3c2RVSkJRV0U3UVVGQlFUczdRVUZEVG1Jc01rSkJRVEJDTEVOQlFURkNMRU5CUkUwc1EwRkRkVUk3UVVGRE4wSXNUVUZCUzJNc1MwRkJURHRCUVVOT0xFTTdPMEZCU1VaRUxGbEJRVmx3UWl4VFFVRmFMRU5CUVhOQ1J5eEhRVUYwUWl4SFFVRTBRaXhWUVVGVlJTeFRRVUZXTEVWQlFYRkNPMEZCUVVFc1MwRkRlRU5RTEZGQlJIZERMRWRCUXpOQ1R5eFRRVVF5UWl4RFFVTjRRMUFzVVVGRWQwTTdPMEZCUldoRUxFdEJRVWNzUTBGQlExY3NaMEpCUVdkQ1dDeFJRVUZvUWl4RFFVRktMRVZCUVRoQ08wRkJRemRDVnl4clFrRkJaMEpZTEZGQlFXaENMRWxCUVRSQ0xFVkJRVFZDTzBGQlEwRTdRVUZEUkN4TFFVRk5aU3hqUVVGalNpeG5Ra0ZCWjBKWUxGRkJRV2hDTEVOQlFYQkNPMEZCUTBGbExHRkJRVmxUTEVsQlFWb3NRMEZCYVVKcVFpeFRRVUZxUWl4RlFVNW5SQ3hEUVUxdVFqdEJRVU0zUWl4RFFWQkVPenRCUVZWQk8wRkJRMEZsTEZsQlFWbHdRaXhUUVVGYUxFTkJRWE5DY1VJc1MwRkJkRUlzUjBGQk9FSXNXVUZCV1R0QlFVTjZReXhMUVVGSFNDeE5RVUZJTEVWQlFWVTdRVUZEVkR0QlFVTkJPMEZCUTBGWUxEUkNRVUV3UWxjc1QwRkJUME1zY1VKQlFWQXNRMEZCTmtKR0xEWkNRVUUzUWl4RFFVRXhRanRCUVVOQk8wRkJRMFFzUTBGT1JEczdRVUZUUVVjc1dVRkJXWEJDTEZOQlFWb3NRMEZCYzBKMVFpeEpRVUYwUWl4SFFVRTJRaXhaUVVGWk8wRkJRM2hETEV0QlFVZE1MRTFCUVVnc1JVRkJWVHRCUVVOVVFTeFRRVUZQVFN4dlFrRkJVQ3hEUVVFMFFtcENMSFZDUVVFMVFqdEJRVU5CTzBGQlEwUXNRMEZLUkRzN1FVRk5RV0VzV1VGQldYQkNMRk5CUVZvc1EwRkJjMEpOTEdOQlFYUkNMRWRCUVhWRExGbEJRVms3UVVGRGJFUXNVVUZCVDBjc1owSkJRV2RDUnl4TlFVRm9RaXhIUVVGNVFpeERRVUZvUXp0QlFVTkJMRU5CUmtRN08wRkJTVUVzU1VGQlRXRXNiMEpCUVc5Q0xFbEJRVWxNTEZkQlFVb3NSVUZCTVVJN08ydENRVVZsU3l4cFFpSXNJbVpwYkdVaU9pSnNhV0l2ZEdsamEyVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1hDSjBhV05yWlhKY0lpd2dXMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aWRHbGphMlZ5WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSW5ScFkydGxjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F3S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EyT0Rrd1pUZGhPV1V6TURkalpXSTNPV05sTVNJc0ltbHRjRzl5ZENCVWFXTnJaWElnWm5KdmJTQW5MaTlVYVdOclJXNTBjbmtuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVWFXTnJaWEk3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSnBiWEJ2Y25RZ2JXRnVZV2RsY2lCbWNtOXRJQ2N1TDAxaGJtRm5aWEluTzF4dVhHNHZMeUIwYjBSdk9pQnpkWEJ3YjNKMElHSnZkR2dnWTJGc2JHSmhZMnNnWVc1a0lIQnliMjFwYzJWY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRlJwWTJ0RmJuUnllVnh1ZTF4dVhIUXZLaXBjYmx4MElDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlHTnZiblJsZUhRZ0xTQlVhR1VnWENKMGFHbHpYQ0lnWVhKbmRXMWxiblFnWm05eUlIUm9aU0JzYVhOMFpXNWxjaUJtZFc1amRHbHZiaTVjYmx4MElDb2dRSEJoY21GdElIdG1kVzVqZEdsdmJuMGdiR2x6ZEdWdVpYSXVYRzVjZENBcUwxeHVYSFJqYjI1emRISjFZM1J2Y2loamIyNTBaWGgwTENCc2FYTjBaVzVsY2l3Z1kyRnNiR0poWTJzZ1BTQnVkV3hzTENCd2NtbHZjbWwwZVNBOUlEQXBYRzVjZEh0Y2JseDBYSFIwYUdsekxtTnZiblJsZUhRZ1BTQmpiMjUwWlhoME8xeHVYSFJjZEhSb2FYTXViR2x6ZEdWdVpYSWdQU0JzYVhOMFpXNWxjanRjYmx4MFhIUjBhR2x6TG1OaGJHeGlZV05ySUQwZ1kyRnNiR0poWTJzN1hHNWNkRngwZEdocGN5NXdjbWx2Y21sMGVTQTlJSEJ5YVc5eWFYUjVPMXh1WEhSY2RIUm9hWE11Y21WamRYSnphVzl1UTI5MWJuUWdQU0F3T3lBdkx5QnlaWEYxYVhKbFpDQjBieUJ6ZEc5d0lHTmhiR3hwYm1jZ2RHaGxJSE5oYldVZ1puVnVZM1JwYjI0Z2FXNGdjbVZqZFhKemFYWmxJR05oYkd4Y2JseDBmVnh1WEc1OVhHNWNiaThxTFMwdExTQlFkV0pzYVdOOFVISnZkRzkwZVhCbElFMWxkR2h2WkhNZ0xTMHRLaTljYmx4dVZHbGphMFZ1ZEhKNUxuQnliM1J2ZEhsd1pTNWthWE53YjNObElEMGdablZ1WTNScGIyNG9LWHRjYmx4MGRHaHBjeTVqYjI1MFpYaDBJRDBnYm5Wc2JEdGNibHgwZEdocGN5NXNhWE4wWlc1bGNpQTlJRzUxYkd3N1hHNWNkSFJvYVhNdVkyRnNiR0poWTJzZ1BTQnVkV3hzTzF4dVhIUjBhR2x6TG5CeWFXOXlhWFI1SUQwZ2JuVnNiRHRjYm4wN1hHNWNibFJwWTJ0RmJuUnllUzV3Y205MGIzUjVjR1V1WlhobFkzVjBaU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkR2xtS0hSb2FYTXVjbVZqZFhKemFXOXVRMjkxYm5RZ1BUMDlJREFwZTF4dVhIUmNkRzFoYm1GblpYSXVZV1JrS0hSb2FYTXBPMXh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkR2xtSUNoMGFHbHpMbU5oYkd4aVlXTnJLU0I3WEc1Y2RGeDBYSFIwYUdsekxtTmhiR3hpWVdOckxtTmhiR3dvZEdsamEwVnVkSEo1TG1OaGJHeGlZV05yV3lkMGFHbHpKMTBzSUhSeWRXVXBPMXh1WEhSY2RIMWNibHgwZlZ4dWZUdGNibHh1VkdsamEwVnVkSEo1TG5CeWIzUnZkSGx3WlM1blpYUk5ZWGhRY21sdmNtbDBlU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkSEpsZEhWeWJpQnRZVzVoWjJWeUxtZGxkRTFoZUZCeWFXOXlhWFI1S0NrN1hHNTlPMXh1WEc1Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOVVhV05yUlc1MGNua3Vhbk1pTENKY2JteGxkQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDQTlJRTVoVGp0Y2JtTnZibk4wSUhCeWFXOXlhWFI1Ulc1MGNtbGxjeUE5SUZ0dWRXeHNMQ0J1ZFd4c0xDQnVkV3hzTENCdWRXeHNYVHRjYmx4dVpuVnVZM1JwYjI0Z2IyNVVhV05yS0NsN1hHNWNkR1p2Y2loc1pYUWdhVzVrWlhnZ1BTQXdJRHNnYVc1a1pYZ2dQQ0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTXViR1Z1WjNSb095QnBibVJsZUNzcktYdGNibHgwWEhSc1pYUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iYVc1a1pYaGRPMXh1WEhSY2RHbG1LSFJwWTJ0RmJuUnlhV1Z6SUNZbUlIUnBZMnRGYm5SeWFXVnpMbXhsYm1kMGFDQStJREFwSUh0Y2JseDBYSFJjZEdWNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3loMGFXTnJSVzUwY21sbGN5azdYRzVjZEZ4MFhIUXZMME5zWldGeUlIUm9aVzBnYjI1alpTQmxlR1ZqZFhSbFpGeHVYSFJjZEZ4MGNISnBiM0pwZEhsRmJuUnlhV1Z6VzJsdVpHVjRYU0E5SUc1MWJHdzdYRzVjZEZ4MGZWeHVYSFI5WEc1OVhHNWNibVoxYm1OMGFXOXVJR1Y0WldOMWRHVlVhV05yUlc1MGNtbGxjeWgwYVdOclJXNTBjbWxsY3lsN1hHNWNkQzh2SUdsdGNHOXlkR0Z1ZENCMGJ5QjFjMlVnWm05eUxXeHZiM0JjYmx4MEx5OGdkR2xqYTBWdWRISnBaWE1nWjNKdmQzTWdaSGx1WVcxcFkyRnNiSGtnWW5rZ2IyNWxJRzltSUdsMGN5QmxiblJ5ZVZ4dVhIUXZMeUJtYjNJZ1pYaGhiWEJzWlRvZ2JHVjBJSE5oZVNCM1pTQm9ZWFpsSUc5dVpTQmxiblJ5ZVN3Z1lXNWtJR1Y0WldOMWRHbHVaeUIwYUdGMElHVnVkSEo1SUcxcFoyaDBJR0ZrWkhNZ1lXNXZkR2hsY2lCbGJuUnllVnh1WEhRdkx5QjNhWFJvSUcxaGNDQm1kVzVqZEdsdmJpQjNaU0JqWVc1MElHVjRaV04xZEdVZ1pIbHVZVzFwWTJGc2JIa2daM0p2ZDJsdVp5QmxiblJ5YVdWekxseHVYSFJtYjNJb2JHVjBJR2tnUFNBd095QnBJRHdnZEdsamEwVnVkSEpwWlhNdWJHVnVaM1JvT3lCcEt5c3BlMXh1WEhSY2RHTnZibk4wSUhScFkydEZiblJ5ZVNBOUlIUnBZMnRGYm5SeWFXVnpXMmxkTzF4dVhIUmNkSFJwWTJ0RmJuUnllUzV5WldOMWNuTnBiMjVEYjNWdWRDc3JPMXh1WEhSY2RIUnBZMnRGYm5SeWVTNXNhWE4wWlc1bGNpNWpZV3hzS0hScFkydEZiblJ5ZVM1amIyNTBaWGgwSUh4OElIUnBZMnRGYm5SeWVTNXNhWE4wWlc1bGNsc25kR2hwY3lkZEtUdGNibHgwWEhSMGFXTnJSVzUwY25rdWNtVmpkWEp6YVc5dVEyOTFiblF0TFR0Y2JseDBYSFJwWmlBb2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcktTQjdYRzVjZEZ4MFhIUjBhV05yUlc1MGNua3VZMkZzYkdKaFkyc3VZMkZzYkNoMGFXTnJSVzUwY25rdVkyRnNiR0poWTJ0YkozUm9hWE1uWFNrN1hHNWNkRngwZlZ4dVhIUjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5aDBhV05yUlc1MGNtbGxjeWw3WEc1Y2RIUnBZMnRGYm5SeWFXVnpMbTFoY0NnZ0tIUnBZMnRGYm5SeWVTQXNJR2x1WkdWNElDazlQaUI3WEc1Y2RGeDBkR2xqYTBWdWRISjVMbXhwYzNSbGJtVnlMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTnZiblJsZUhRZ2ZId2dkR2xqYTBWdWRISjVMbXhwYzNSbGJtVnlXeWQwYUdsekoxMHBPMXh1WEhSY2RHbG1JQ2gwYVdOclJXNTBjbmt1WTJGc2JHSmhZMnNwSUh0Y2JseDBYSFJjZEhScFkydEZiblJ5ZVM1allXeHNZbUZqYXk1allXeHNLSFJwWTJ0RmJuUnllUzVqWVd4c1ltRmphMXNuZEdocGN5ZGRLVHRjYmx4MFhIUjlYRzVjZEgwcE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5Z3BlMXh1WEhSdmJsUnBZMnNvS1R0Y2JseDBjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRZ1BTQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05yS1R0Y2JuMWNibHh1WTJ4aGMzTWdWR2xqYTAxaGJtRm5aWElnZTF4dVhIUmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ0E5SURBN0lDOHZJR1p2Y2lCWGFXNWtiM2R6SUVWdWRseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBLQ2s3WEc1Y2RIMWNibjFjYmx4dVhHNVVhV05yVFdGdVlXZGxjaTV3Y205MGIzUjVjR1V1WVdSa0lEMGdablZ1WTNScGIyNGdLSFJwWTJ0RmJuUnllU2tnZTF4dVhIUmpiMjV6ZENCN0lIQnlhVzl5YVhSNUlIMGdQU0IwYVdOclJXNTBjbms3WEc1Y2RHbG1LQ0Z3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRLWHRjYmx4MFhIUndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZElEMGdXMTA3WEc1Y2RIMWNibHgwWTI5dWMzUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkTzF4dVhIUjBhV05yUlc1MGNtbGxjeTV3ZFhOb0tIUnBZMnRGYm5SeWVTazdJQzh2SUhSdlpHODZJRk4wWVdOcklHOXlJRkYxWlhWbFhHNTlPMXh1WEc1Y2JpOHZJRlJ2Wkc4NklGTjFjSEJ2Y25RZ1ptOXlJRTV2WkdWS1V5QmNibFJwWTJ0TllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1emRHRnlkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwYVdZb2QybHVaRzkzS1h0Y2JseDBYSFF2THlCM2FXeHNJSEpsWTJWcGRtVnpJSFJwYldWemRHRnRjQ0JoY3lCaGNtZDFiV1Z1ZEZ4dVhIUmNkQzh2ZEc5a2J6b2dUR1ZoY200NklDQjBhR1VnY0hWeWNHOXpaU0J2WmlCMGFXMWxjM1JoYlhCY2JseDBYSFJ5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDQTlJSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFEyRnNiR0poWTJzcE8xeHVYSFI5WEc1OU8xeHVYRzVjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNXpkRzl3SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhScFppaDNhVzVrYjNjcGUxeHVYSFJjZEhkcGJtUnZkeTVqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ2s3WEc1Y2RIMWNibjA3WEc1Y2JsUnBZMnROWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVuWlhSTllYaFFjbWx2Y21sMGVTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBjbVYwZFhKdUlIQnlhVzl5YVhSNVJXNTBjbWxsY3k1c1pXNW5kR2dnTFNBeE8xeHVmVHRjYmx4dVkyOXVjM1FnYzJsdVoyeGxkRzl1U1c1emRHRnVZMlVnUFNCdVpYY2dWR2xqYTAxaGJtRm5aWElvS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2MybHVaMnhsZEc5dVNXNXpkR0Z1WTJVN1hHNWNibHh1WEc1Y2JseHVYRzVjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5TllXNWhaMlZ5TG1weklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBFbnRyeSBmcm9tICcuL2VudHJ5JztcbmltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcih0cmlnZ2VyRG9uZU5vdGlmaWVyKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gdHJpZ2dlckRvbmVOb3RpZmllcjtcbiAgICB9XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuc2V0VHJpZ2dlckRvbmVOb3RpZmllciA9IGZ1bmN0aW9uKHRyaWdnZXJEb25lTm90aWZpZXIpe1xuXHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSB0cmlnZ2VyRG9uZU5vdGlmaWVyO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSBudWxsO1xufVxuXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCByZXNwb25zaWJsZSBmb3IgaW5pdGlhdGluZyB0cmlnZ2VyXG4vLyBpZiBjYWxsZWQgdXNpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIG1ha2UgYSBzeW5jZWQgZWZmZWN0IG9mIGV4ZWN1dGlvblxuRnVuY3Rpb25zLnByb3RvdHlwZS5leGVjdXRlVHJpZ2dlcmVyID0gZnVuY3Rpb24oY29udGV4dCwgZnVuYywgdHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRjb25zdCBfZXhlY3V0ZVRyaWdnZXJlciA9ICh0cmlnZ2VyZWRBZ2Fpbik9Pntcblx0XHRsZXQgdGlja2VyO1xuXHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0ZnVuYy5jYWxsKGNvbnRleHQpO1xuXHRcdFx0aWYodHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0XHR0cmlnZ2VyZXJDYWxsYmFjayAmJiB0cmlnZ2VyZXJDYWxsYmFjayh0cmlnZ2VyZWRBZ2Fpbik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCB0cmlnZ2VyZXJDYWxsYmFjaywgbnVsbCwgMyk7XG5cdFx0XHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIF9leGVjdXRlVHJpZ2dlcmVyLCB0cmlnZ2VyZXJDYWxsYmFjaywgMyk7XG5cdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdH1cblx0fTtcblx0X2V4ZWN1dGVUcmlnZ2VyZXIoKTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCBleGVjdXRlTGF0ZXJJbk5leHRUaWNrID0gZmFsc2UsIHByaW9yaXR5ID0gMCwgbGlzdGVuZXJDYWxsYmFjayA9IG51bGwpe1xuICAgIGxldCBlbnRyeTtcbiAgICBpZiAoZXhlY3V0ZUxhdGVySW5OZXh0VGljayl7XG5cblx0ICAgICBjb25zdCB0aWNrZXJDYWxsYmFjayA9ICh0cmlnZ2VyZWRBZ2FpbikgPT4ge1xuXHRcdCAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCAtIDE7XG5cdFx0ICAgIGlmKGxpc3RlbmVyQ2FsbGJhY2spe1xuXHRcdFx0ICAgIGxpc3RlbmVyQ2FsbGJhY2suY2FsbChsaXN0ZW5lckNhbGxiYWNrWyd0aGlzJ10sIHRyaWdnZXJlZEFnYWluKVxuXHRcdCAgICB9XG5cdFx0ICAgIGlmKCB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdCAgICB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgJiYgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllcigpO1xuXHRcdCAgICB9XG5cdCAgICB9O1xuICAgICAgICBjb25zdCB0aWNrZXIgPSBuZXcgVGlja2VyKGNvbnRleHQsIGZ1bmMsIHRpY2tlckNhbGxiYWNrLCBwcmlvcml0eSk7XG5cdCAgICBlbnRyeSA9IG5ldyBFbnRyeSh0aWNrZXIsIHRpY2tlci5leGVjdXRlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMucHVzaChlbnRyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyeSA9IG5ldyBFbnRyeShjb250ZXh0LCBmdW5jKTtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGNhbGxiYWNrID0gbnVsbCl7XG5cdGxldCBlbnRyeSwgaTtcblx0Y29uc3Qge2ZyYW1lRW50cmllcywgZW50cmllc30gPSB0aGlzO1xuXG5cdGZvcihpID0gMDsgaSA8IGZyYW1lRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdCAgICBjb25zdCBmcmFtZUVudHJ5ID0gIGZyYW1lRW50cmllc1tpXTtcblx0XHRlbnRyeSA9IGZyYW1lRW50cnkuY29udGV4dDtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRmcmFtZUVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdH0gZWxzZSB7IC8vIGZyYW1lIHRyaWdnZXIgTGlzdGVuZXJzIGFyZSBzdGlsbCBydW5uaW5nXG5cdFx0XHRcdGxldCB0aWNrZXJFbnRyeTtcblx0XHRcdFx0Y29uc3QgZGlzcG9zZURvbmVOb3RpZmllciA9ICh0cmlnZ2VyZWRBZ2FpbikgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh0cmlnZ2VyZWRBZ2Fpbik7XG5cdFx0XHRcdFx0fSBlbHNle1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRmb3IoaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRlbnRyeSA9IGVudHJpZXNbaV07XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRlbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS50cmlnZ2VyTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UgPSBbXTtcblxuXHR0aGlzLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuICAgICAgICBpZiAoZW50cnkubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuICAgIH0sIHRoaXMpO1xuXG5cblx0aWYodGhpcy5mcmFtZUVudHJpZXMubGVuZ3RoID4gMCl7XG5cdFx0dGhpcy5mcmFtZUVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuXHRcdFx0aWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ICsgMTtcblx0XHRcdFx0ZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdHRoaXMuZnJhbWVFbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuXHRcdH0sIHRoaXMpXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyICYmIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllcigpO1xuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9mdW5jdGlvbnMuanMiLCJpbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmdW5jKXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmM7XG4gICAgfVxufVxuXG4vLyBNZXRob2QgYXZhaWxhYmxlIG9ubHkgb24gRW50cnkgaW5zdGFuY2Ugbm90IGluIENsYXNzXG5FbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpe1xuICAgIGlmKHRoaXMuY29udGV4dCBpbnN0YW5jZW9mIFRpY2tlcil7XG4gICAgICAgIHRoaXMuY29udGV4dC5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5saXN0ZW5lciA9IG51bGw7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2VudHJ5LmpzIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tIFwiLi8uLi9saWJcIjtcblxuZnVuY3Rpb24gaW1tZWRpYXRlRnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcIkkgYW0gSW1tZWRpYXRlIEZ1bmN0aW9uXCIpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9ucy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGZyYW1lRnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcIkkgYW0gRnJhbWUgRnVuY3Rpb25cIiwgZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gZnJhbWVGdW5jdGlvblNlY29uZCgpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBGcmFtZSBGdW5jdGlvbiBTZWNvbmRcIiwgZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuZXJzRG9uZSgpe1xuXHRjb25zb2xlLmxvZyhcIkFsbCBGdW5jdGlvbiBleGVjdXRlZFwiLCBmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xufVxuXG5jb25zdCBmdW5jdGlvbnMgPSBuZXcgRnVuY3Rpb25zKGxpc3RlbmVyc0RvbmUpO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uU2Vjb25kLCB0cnVlLCAxKTtcbmZ1bmN0aW9ucy5hZGRMaXN0ZW5lcih3aW5kb3csZnJhbWVGdW5jdGlvbiwgdHJ1ZSApO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxpbW1lZGlhdGVGdW5jdGlvbik7XG5cbmNvbnNvbGUubG9nKFwidHJpZ2dlciAxXCIpO1xuXG5mdW5jdGlvbnMudHJpZ2dlckxpc3RlbmVycygpO1xuLy8gMiBlbnRyaWVzXG5mdW5jdGlvbnMucmVtb3ZlTGlzdGVuZXIod2luZG93LGZyYW1lRnVuY3Rpb25TZWNvbmQsIGZ1bmN0aW9ucy50cmlnZ2VyTGlzdGVuZXJzLmJpbmQoZnVuY3Rpb25zKSk7XG5jb25zb2xlLmxvZyhcIlJlbW92ZSBmcmFtZSBmdW5jdGlvblwiKTtcbi8vIDNyZCBlbnRyeVxuZnVuY3Rpb25zLnJlbW92ZUxpc3RlbmVyKHdpbmRvdyxpbW1lZGlhdGVGdW5jdGlvbik7XG5jb25zb2xlLmxvZyhcIlJlbW92ZSBJbW1lZGlhdGUgZnVuY3Rpb25cIik7XG5cbmNvbnNvbGUubG9nKFwidHJpZ2dlciAyXCIpO1xuZnVuY3Rpb25zLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9