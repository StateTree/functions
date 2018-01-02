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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1MmVhNTg4MmI5MGUzMGVhNzhmYSIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwicmVjdXJzaW9uQ291bnQiLCJwcm90b3R5cGUiLCJkaXNwb3NlIiwiZXhlY3V0ZSIsImFkZCIsImNhbGwiLCJ0aWNrRW50cnkiLCJnZXRNYXhQcmlvcml0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwiTmFOIiwicHJpb3JpdHlFbnRyaWVzIiwib25UaWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJ0aWNrRW50cmllcyIsImV4ZWN1dGVUaWNrRW50cmllcyIsImkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlRpY2tNYW5hZ2VyIiwic3RhcnQiLCJwdXNoIiwic3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2luZ2xldG9uSW5zdGFuY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FB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S0csVyxHQUNMLHVCQUFhO0FBQUE7O0FBQ05aLDJCQUEwQixDQUExQixDQURNLENBQ3VCO0FBQzdCLE1BQUthLEtBQUw7QUFDTixDOztBQUlGRCxZQUFZbkIsU0FBWixDQUFzQkcsR0FBdEIsR0FBNEIsVUFBVUUsU0FBVixFQUFxQjtBQUFBLEtBQ3hDUCxRQUR3QyxHQUMzQk8sU0FEMkIsQ0FDeENQLFFBRHdDOztBQUVoRCxLQUFHLENBQUNXLGdCQUFnQlgsUUFBaEIsQ0FBSixFQUE4QjtBQUM3Qlcsa0JBQWdCWCxRQUFoQixJQUE0QixFQUE1QjtBQUNBO0FBQ0QsS0FBTWUsY0FBY0osZ0JBQWdCWCxRQUFoQixDQUFwQjtBQUNBZSxhQUFZUSxJQUFaLENBQWlCaEIsU0FBakIsRUFOZ0QsQ0FNbkI7QUFDN0IsQ0FQRDs7QUFVQTtBQUNBYyxZQUFZbkIsU0FBWixDQUFzQm9CLEtBQXRCLEdBQThCLFlBQVk7QUFDekMsS0FBR0gsTUFBSCxFQUFVO0FBQ1Q7QUFDQTtBQUNBViw0QkFBMEJVLE9BQU9DLHFCQUFQLENBQTZCRiw2QkFBN0IsQ0FBMUI7QUFDQTtBQUNELENBTkQ7O0FBU0FHLFlBQVluQixTQUFaLENBQXNCc0IsSUFBdEIsR0FBNkIsWUFBWTtBQUN4QyxLQUFHTCxNQUFILEVBQVU7QUFDVEEsU0FBT00sb0JBQVAsQ0FBNEJoQix1QkFBNUI7QUFDQTtBQUNELENBSkQ7O0FBTUFZLFlBQVluQixTQUFaLENBQXNCTSxjQUF0QixHQUF1QyxZQUFZO0FBQ2xELFFBQU9HLGdCQUFnQkcsTUFBaEIsR0FBeUIsQ0FBaEM7QUFDQSxDQUZEOztBQUlBLElBQU1ZLG9CQUFvQixJQUFJTCxXQUFKLEVBQTFCOztrQkFFZUssaUIiLCJmaWxlIjoibGliL3RpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlja2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTJlYTU4ODJiOTBlMzBlYTc4ZmEiLCJpbXBvcnQgVGlja2VyIGZyb20gJy4vVGlja0VudHJ5JztcblxuZXhwb3J0IGRlZmF1bHQgVGlja2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9NYW5hZ2VyJztcblxuLy8gdG9Ebzogc3VwcG9ydCBib3RoIGNhbGxiYWNrIGFuZCBwcm9taXNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrRW50cnlcbntcblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29udGV4dCwgbGlzdGVuZXIsIGNhbGxiYWNrID0gbnVsbCwgcHJpb3JpdHkgPSAwKVxuXHR7XG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0XHR0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cdFx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLnJlY3Vyc2lvbkNvdW50ID0gMDsgLy8gcmVxdWlyZWQgdG8gc3RvcCBjYWxsaW5nIHRoZSBzYW1lIGZ1bmN0aW9uIGluIHJlY3Vyc2l2ZSBjYWxsXG5cdH1cblxufVxuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLnJlY3Vyc2lvbkNvdW50ID09PSAwKXtcblx0XHRtYW5hZ2VyLmFkZCh0aGlzKTtcblx0fSBlbHNlIHtcblx0XHRpZiAodGhpcy5jYWxsYmFjaykge1xuXHRcdFx0dGhpcy5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddLCB0cnVlKTtcblx0XHR9XG5cdH1cbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZ2V0TWF4UHJpb3JpdHkgPSBmdW5jdGlvbigpe1xuXHRyZXR1cm4gbWFuYWdlci5nZXRNYXhQcmlvcml0eSgpO1xufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvVGlja0VudHJ5LmpzIiwiXG5sZXQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSBOYU47XG5jb25zdCBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbmZ1bmN0aW9uIG9uVGljaygpe1xuXHRmb3IobGV0IGluZGV4ID0gMCA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKyl7XG5cdFx0bGV0IHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZih0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpe1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yKGxldCBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRjb25zdCB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHR0aWNrRW50cnkucmVjdXJzaW9uQ291bnQrKztcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0dGlja0VudHJ5LnJlY3Vyc2lvbkNvdW50LS07XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpe1xuXHRvblRpY2soKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcbn1cblxuY2xhc3MgVGlja01hbmFnZXIge1xuXHRjb25zdHJ1Y3Rvcigpe1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cdH1cbn1cblxuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHRjb25zdCB7IHByaW9yaXR5IH0gPSB0aWNrRW50cnk7XG5cdGlmKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKXtcblx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdH1cblx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7IC8vIHRvZG86IFN0YWNrIG9yIFF1ZXVlXG59O1xuXG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYod2luZG93KXtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdC8vdG9kbzogTGVhcm46ICB0aGUgcHVycG9zZSBvZiB0aW1lc3RhbXBcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHR9XG59O1xuXG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHByaW9yaXR5RW50cmllcy5sZW5ndGggLSAxO1xufTtcblxuY29uc3Qgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uSW5zdGFuY2U7XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9NYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

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
		var triggeredAgain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMzhjZjhhYjY0YjRmZjI4YmQ4ZCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJ0cmlnZ2VyRG9uZU5vdGlmaWVyIiwiZW50cmllcyIsImZyYW1lRW50cmllcyIsImV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IiwicHJvdG90eXBlIiwic2V0VHJpZ2dlckRvbmVOb3RpZmllciIsInJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIiLCJleGVjdXRlVHJpZ2dlcmVyIiwiY29udGV4dCIsImZ1bmMiLCJ0cmlnZ2VyZXJDYWxsYmFjayIsIl9leGVjdXRlVHJpZ2dlcmVyIiwidHJpZ2dlcmVkQWdhaW4iLCJ0aWNrZXIiLCJjYWxsIiwiZXhlY3V0ZSIsImFkZExpc3RlbmVyIiwiZXhlY3V0ZUxhdGVySW5OZXh0VGljayIsInByaW9yaXR5IiwibGlzdGVuZXJDYWxsYmFjayIsImVudHJ5IiwidGlja2VyQ2FsbGJhY2siLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJjYWxsYmFjayIsImkiLCJmcmFtZUVudHJ5IiwibGlzdGVuZXIiLCJkaXNwb3NlIiwidGlja2VyRW50cnkiLCJkaXNwb3NlRG9uZU5vdGlmaWVyIiwibGVuZ3RoIiwidHJpZ2dlckxpc3RlbmVycyIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIsIkVudHJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDTk0sMEJBQXNCWCxJQUF0QixDQUEyQmEsS0FBM0I7QUFDQTtBQUNELEdBUEQsRUFPRyxJQVBIO0FBUUFGLHdCQUFzQkMsT0FBdEIsQ0FBOEIsVUFBU0csVUFBVCxFQUFvQjtBQUNqRCxRQUFLbkMsWUFBTCxDQUFrQm9DLE1BQWxCLENBQXlCRCxVQUF6QixFQUFvQyxDQUFwQztBQUNBLEdBRkQsRUFFRyxJQUZIO0FBR0EsRUFaRCxNQVlPO0FBQ04sT0FBS3JDLG1CQUFMLElBQTRCLEtBQUtBLG1CQUFMLEVBQTVCO0FBQ0E7QUFDRCxDQTlCRCxDOzs7Ozs7Ozs7Ozs7O0FDdEdBOzs7Ozs7OztJQUVxQnVDLEssR0FDakIsZUFBWS9CLE9BQVosRUFBcUJDLElBQXJCLEVBQTBCO0FBQUE7O0FBQ3RCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUttQixRQUFMLEdBQWdCbEIsSUFBaEI7QUFDSCxDOztBQUdMOzs7a0JBUHFCOEIsSztBQVFyQkEsTUFBTW5DLFNBQU4sQ0FBZ0J3QixPQUFoQixHQUEwQixZQUFXO0FBQ2pDLFFBQUcsS0FBS3BCLE9BQUwsNEJBQUgsRUFBa0M7QUFDOUIsYUFBS0EsT0FBTCxDQUFhb0IsT0FBYjtBQUNIO0FBQ0QsU0FBS3BCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS21CLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxDQU5ELEMiLCJmaWxlIjoibGliL2Z1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjM4Y2Y4YWI2NGI0ZmYyOGJkOGQiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdHRoaXMucmVjdXJzaW9uQ291bnQgPSAwOyAvLyByZXF1aXJlZCB0byBzdG9wIGNhbGxpbmcgdGhlIHNhbWUgZnVuY3Rpb24gaW4gcmVjdXJzaXZlIGNhbGxcbn07XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gVGlja0VudHJ5O1xuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5yZWN1cnNpb25Db3VudCA9PT0gMCkge1xuXHRcdF9NYW5hZ2VyMi5kZWZhdWx0LmFkZCh0aGlzKTtcblx0fSBlbHNlIHtcblx0XHRpZiAodGhpcy5jYWxsYmFjaykge1xuXHRcdFx0dGhpcy5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddLCB0cnVlKTtcblx0XHR9XG5cdH1cbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZ2V0TWF4UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBfTWFuYWdlcjIuZGVmYXVsdC5nZXRNYXhQcmlvcml0eSgpO1xufTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IE5hTjtcbnZhciBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbmZ1bmN0aW9uIG9uVGljaygpIHtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0dGlja0VudHJ5LnJlY3Vyc2lvbkNvdW50Kys7XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdHRpY2tFbnRyeS5yZWN1cnNpb25Db3VudC0tO1xuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG52YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXHR0aGlzLnN0YXJ0KCk7XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHR9XG5cdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcbn07XG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG59O1xuXG52YXIgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2luZ2xldG9uSW5zdGFuY2U7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTFNbVZoTlRnNE1tSTVNR1V6TUdWaE56aG1ZU0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDFScFkydEZiblJ5ZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVWFXTnJSVzUwY25raUxDSmpiMjUwWlhoMElpd2liR2x6ZEdWdVpYSWlMQ0pqWVd4c1ltRmpheUlzSW5CeWFXOXlhWFI1SWl3aWNtVmpkWEp6YVc5dVEyOTFiblFpTENKd2NtOTBiM1I1Y0dVaUxDSmthWE53YjNObElpd2laWGhsWTNWMFpTSXNJbUZrWkNJc0ltTmhiR3dpTENKMGFXTnJSVzUwY25raUxDSm5aWFJOWVhoUWNtbHZjbWwwZVNJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSWl3aVRtRk9JaXdpY0hKcGIzSnBkSGxGYm5SeWFXVnpJaXdpYjI1VWFXTnJJaXdpYVc1a1pYZ2lMQ0pzWlc1bmRHZ2lMQ0owYVdOclJXNTBjbWxsY3lJc0ltVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5SXNJbWtpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5SXNJbmRwYm1SdmR5SXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNJc0lsUnBZMnROWVc1aFoyVnlJaXdpYzNSaGNuUWlMQ0p3ZFhOb0lpd2ljM1J2Y0NJc0ltTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJaXdpYzJsdVoyeGxkRzl1U1c1emRHRnVZMlVpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3T3pzN096czdPenM3T3pzN08wRkROMFJCT3pzN096czdPenM3T3pzN096czdPenM3TzBGRFFVRTdPenM3T3pzN08wRkJSVUU3U1VGRGNVSkJMRk03UVVGRmNFSTdPenM3UVVGSlFTeHRRa0ZCV1VNc1QwRkJXaXhGUVVGeFFrTXNVVUZCY2tJc1JVRkRRVHRCUVVGQkxFdEJSQ3RDUXl4UlFVTXZRaXgxUlVGRU1FTXNTVUZETVVNN1FVRkJRU3hMUVVSblJFTXNVVUZEYUVRc2RVVkJSREpFTEVOQlF6TkVPenRCUVVGQk96dEJRVU5ETEUxQlFVdElMRTlCUVV3c1IwRkJaVUVzVDBGQlpqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWtFc1VVRkJhRUk3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ1FTeFJRVUZvUWp0QlFVTkJMRTFCUVV0RExHTkJRVXdzUjBGQmMwSXNRMEZCZEVJc1EwRk1SQ3hEUVVzd1FqdEJRVU42UWl4RE96dEJRVWxHT3p0clFrRnFRbkZDVEN4VE8wRkJiVUp5UWtFc1ZVRkJWVTBzVTBGQlZpeERRVUZ2UWtNc1QwRkJjRUlzUjBGQk9FSXNXVUZCVlR0QlFVTjJReXhOUVVGTFRpeFBRVUZNTEVkQlFXVXNTVUZCWmp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENMRWxCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEVOQlRFUTdPMEZCVDBGS0xGVkJRVlZOTEZOQlFWWXNRMEZCYjBKRkxFOUJRWEJDTEVkQlFUaENMRmxCUVZVN1FVRkRka01zUzBGQlJ5eExRVUZMU0N4alFVRk1MRXRCUVhkQ0xFTkJRVE5DTEVWQlFUWkNPMEZCUXpWQ0xHOUNRVUZSU1N4SFFVRlNMRU5CUVZrc1NVRkJXanRCUVVOQkxFVkJSa1FzVFVGRlR6dEJRVU5PTEUxQlFVa3NTMEZCUzA0c1VVRkJWQ3hGUVVGdFFqdEJRVU5zUWl4UlFVRkxRU3hSUVVGTUxFTkJRV05QTEVsQlFXUXNRMEZCYlVKRExGVkJRVlZTTEZGQlFWWXNRMEZCYlVJc1RVRkJia0lzUTBGQmJrSXNSVUZCSzBNc1NVRkJMME03UVVGRFFUdEJRVU5FTzBGQlEwUXNRMEZTUkRzN1FVRlZRVWdzVlVGQlZVMHNVMEZCVml4RFFVRnZRazBzWTBGQmNFSXNSMEZCY1VNc1dVRkJWVHRCUVVNNVF5eFJRVUZQTEd0Q1FVRlJRU3hqUVVGU0xFVkJRVkE3UVVGRFFTeERRVVpFTEVNN096czdPenM3T3pzN096czdPenRCUTNSRFFTeEpRVUZKUXl3d1FrRkJNRUpETEVkQlFUbENPMEZCUTBFc1NVRkJUVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJSQ3hGUVVGUExFbEJRVkFzUlVGQllTeEpRVUZpTEVWQlFXMUNMRWxCUVc1Q0xFTkJRWGhDT3p0QlFVVkJMRk5CUVZORExFMUJRVlFzUjBGQmFVSTdRVUZEYUVJc1RVRkJTU3hKUVVGSlF5eFJRVUZSTEVOQlFXaENMRVZCUVc5Q1FTeFJRVUZSUml4blFrRkJaMEpITEUxQlFUVkRMRVZCUVc5RVJDeFBRVUZ3UkN4RlFVRTBSRHRCUVVNelJDeE5RVUZKUlN4alFVRmpTaXhuUWtGQlowSkZMRXRCUVdoQ0xFTkJRV3hDTzBGQlEwRXNUVUZCUjBVc1pVRkJaVUVzV1VGQldVUXNUVUZCV2l4SFFVRnhRaXhEUVVGMlF5eEZRVUV3UXp0QlFVTjZRMFVzYzBKQlFXMUNSQ3hYUVVGdVFqdEJRVU5CTzBGQlEwRktMRzFDUVVGblFrVXNTMEZCYUVJc1NVRkJlVUlzU1VGQmVrSTdRVUZEUVR0QlFVTkVPMEZCUTBRN08wRkJSVVFzVTBGQlUwY3NhMEpCUVZRc1EwRkJORUpFTEZkQlFUVkNMRVZCUVhkRE8wRkJRM1pETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTU3hKUVVGSlJTeEpRVUZKTEVOQlFWb3NSVUZCWlVFc1NVRkJTVVlzV1VGQldVUXNUVUZCTDBJc1JVRkJkVU5ITEVkQlFYWkRMRVZCUVRKRE8wRkJRekZETEUxQlFVMVdMRmxCUVZsUkxGbEJRVmxGTEVOQlFWb3NRMEZCYkVJN1FVRkRRVllzV1VGQlZVNHNZMEZCVmp0QlFVTkJUU3haUVVGVlZDeFJRVUZXTEVOQlFXMUNVU3hKUVVGdVFpeERRVUYzUWtNc1ZVRkJWVllzVDBGQlZpeEpRVUZ4UWxVc1ZVRkJWVlFzVVVGQlZpeERRVUZ0UWl4TlFVRnVRaXhEUVVFM1F6dEJRVU5CVXl4WlFVRlZUaXhqUVVGV08wRkJRMEVzVFVGQlNVMHNWVUZCVlZJc1VVRkJaQ3hGUVVGM1FqdEJRVU4yUWxFc1lVRkJWVklzVVVGQlZpeERRVUZ0UWs4c1NVRkJia0lzUTBGQmQwSkRMRlZCUVZWU0xGRkJRVllzUTBGQmJVSXNUVUZCYmtJc1EwRkJlRUk3UVVGRFFUdEJRVU5FTzBGQlEwUTdPMEZCUlVRc1UwRkJVMjFDTERaQ1FVRlVMRWRCUVhkRE8wRkJRM1pEVGp0QlFVTkJTQ3d5UWtGQk1FSlZMRTlCUVU5RExIRkNRVUZRTEVOQlFUWkNSaXcyUWtGQk4wSXNRMEZCTVVJN1FVRkRRVHM3U1VGRlMwY3NWeXhIUVVOTUxIVkNRVUZoTzBGQlFVRTdPMEZCUTA1YUxESkNRVUV3UWl4RFFVRXhRaXhEUVVSTkxFTkJRM1ZDTzBGQlF6ZENMRTFCUVV0aExFdEJRVXc3UVVGRFRpeERPenRCUVVsR1JDeFpRVUZaYmtJc1UwRkJXaXhEUVVGelFrY3NSMEZCZEVJc1IwRkJORUlzVlVGQlZVVXNVMEZCVml4RlFVRnhRanRCUVVGQkxFdEJRM2hEVUN4UlFVUjNReXhIUVVNelFrOHNVMEZFTWtJc1EwRkRlRU5RTEZGQlJIZERPenRCUVVWb1JDeExRVUZITEVOQlFVTlhMR2RDUVVGblFsZ3NVVUZCYUVJc1EwRkJTaXhGUVVFNFFqdEJRVU0zUWxjc2EwSkJRV2RDV0N4UlFVRm9RaXhKUVVFMFFpeEZRVUUxUWp0QlFVTkJPMEZCUTBRc1MwRkJUV1VzWTBGQlkwb3NaMEpCUVdkQ1dDeFJRVUZvUWl4RFFVRndRanRCUVVOQlpTeGhRVUZaVVN4SlFVRmFMRU5CUVdsQ2FFSXNVMEZCYWtJc1JVRk9aMFFzUTBGTmJrSTdRVUZETjBJc1EwRlFSRHM3UVVGVlFUdEJRVU5CWXl4WlFVRlpia0lzVTBGQldpeERRVUZ6UW05Q0xFdEJRWFJDTEVkQlFUaENMRmxCUVZrN1FVRkRla01zUzBGQlIwZ3NUVUZCU0N4RlFVRlZPMEZCUTFRN1FVRkRRVHRCUVVOQlZpdzBRa0ZCTUVKVkxFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ1JpdzJRa0ZCTjBJc1EwRkJNVUk3UVVGRFFUdEJRVU5FTEVOQlRrUTdPMEZCVTBGSExGbEJRVmx1UWl4VFFVRmFMRU5CUVhOQ2MwSXNTVUZCZEVJc1IwRkJOa0lzV1VGQldUdEJRVU40UXl4TFFVRkhUQ3hOUVVGSUxFVkJRVlU3UVVGRFZFRXNVMEZCVDAwc2IwSkJRVkFzUTBGQk5FSm9RaXgxUWtGQk5VSTdRVUZEUVR0QlFVTkVMRU5CU2tRN08wRkJUVUZaTEZsQlFWbHVRaXhUUVVGYUxFTkJRWE5DVFN4alFVRjBRaXhIUVVGMVF5eFpRVUZaTzBGQlEyeEVMRkZCUVU5SExHZENRVUZuUWtjc1RVRkJhRUlzUjBGQmVVSXNRMEZCYUVNN1FVRkRRU3hEUVVaRU96dEJRVWxCTEVsQlFVMVpMRzlDUVVGdlFpeEpRVUZKVEN4WFFVRktMRVZCUVRGQ096dHJRa0ZGWlVzc2FVSWlMQ0ptYVd4bElqb2liR2xpTDNScFkydGxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGd2lkR2xqYTJWeVhDSXNJRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0luUnBZMnRsY2x3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKMGFXTnJaWEpjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzU5S1NoMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlCY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN1hHNGdYSFJjZEZ4MFhIUmpiMjVtYVdkMWNtRmliR1U2SUdaaGJITmxMRnh1SUZ4MFhIUmNkRngwWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3hjYmlCY2RGeDBYSFJjZEdkbGREb2daMlYwZEdWeVhHNGdYSFJjZEZ4MGZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnTlRKbFlUVTRPREppT1RCbE16QmxZVGM0Wm1FaUxDSnBiWEJ2Y25RZ1ZHbGphMlZ5SUdaeWIyMGdKeTR2VkdsamEwVnVkSEo1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1ZHbGphMlZ5TzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwybHVaR1Y0TG1weklpd2lhVzF3YjNKMElHMWhibUZuWlhJZ1puSnZiU0FuTGk5TllXNWhaMlZ5Snp0Y2JseHVMeThnZEc5RWJ6b2djM1Z3Y0c5eWRDQmliM1JvSUdOaGJHeGlZV05ySUdGdVpDQndjbTl0YVhObFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJVYVdOclJXNTBjbmxjYm50Y2JseDBMeW9xWEc1Y2RDQXFJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQmpiMjUwWlhoMElDMGdWR2hsSUZ3aWRHaHBjMXdpSUdGeVozVnRaVzUwSUdadmNpQjBhR1VnYkdsemRHVnVaWElnWm5WdVkzUnBiMjR1WEc1Y2RDQXFJRUJ3WVhKaGJTQjdablZ1WTNScGIyNTlJR3hwYzNSbGJtVnlMbHh1WEhRZ0tpOWNibHgwWTI5dWMzUnlkV04wYjNJb1kyOXVkR1Y0ZEN3Z2JHbHpkR1Z1WlhJc0lHTmhiR3hpWVdOcklEMGdiblZzYkN3Z2NISnBiM0pwZEhrZ1BTQXdLVnh1WEhSN1hHNWNkRngwZEdocGN5NWpiMjUwWlhoMElEMGdZMjl1ZEdWNGREdGNibHgwWEhSMGFHbHpMbXhwYzNSbGJtVnlJRDBnYkdsemRHVnVaWEk3WEc1Y2RGeDBkR2hwY3k1allXeHNZbUZqYXlBOUlHTmhiR3hpWVdOck8xeHVYSFJjZEhSb2FYTXVjSEpwYjNKcGRIa2dQU0J3Y21sdmNtbDBlVHRjYmx4MFhIUjBhR2x6TG5KbFkzVnljMmx2YmtOdmRXNTBJRDBnTURzZ0x5OGdjbVZ4ZFdseVpXUWdkRzhnYzNSdmNDQmpZV3hzYVc1bklIUm9aU0J6WVcxbElHWjFibU4wYVc5dUlHbHVJSEpsWTNWeWMybDJaU0JqWVd4c1hHNWNkSDFjYmx4dWZWeHVYRzR2S2kwdExTMGdVSFZpYkdsamZGQnliM1J2ZEhsd1pTQk5aWFJvYjJSeklDMHRMU292WEc1Y2JsUnBZMnRGYm5SeWVTNXdjbTkwYjNSNWNHVXVaR2x6Y0c5elpTQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RIUm9hWE11WTI5dWRHVjRkQ0E5SUc1MWJHdzdYRzVjZEhSb2FYTXViR2x6ZEdWdVpYSWdQU0J1ZFd4c08xeHVYSFIwYUdsekxtTmhiR3hpWVdOcklEMGdiblZzYkR0Y2JseDBkR2hwY3k1d2NtbHZjbWwwZVNBOUlHNTFiR3c3WEc1OU8xeHVYRzVVYVdOclJXNTBjbmt1Y0hKdmRHOTBlWEJsTG1WNFpXTjFkR1VnUFNCbWRXNWpkR2x2YmlncGUxeHVYSFJwWmloMGFHbHpMbkpsWTNWeWMybHZia052ZFc1MElEMDlQU0F3S1h0Y2JseDBYSFJ0WVc1aFoyVnlMbUZrWkNoMGFHbHpLVHRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFJwWmlBb2RHaHBjeTVqWVd4c1ltRmpheWtnZTF4dVhIUmNkRngwZEdocGN5NWpZV3hzWW1GamF5NWpZV3hzS0hScFkydEZiblJ5ZVM1allXeHNZbUZqYTFzbmRHaHBjeWRkTENCMGNuVmxLVHRjYmx4MFhIUjlYRzVjZEgxY2JuMDdYRzVjYmxScFkydEZiblJ5ZVM1d2NtOTBiM1I1Y0dVdVoyVjBUV0Y0VUhKcGIzSnBkSGtnUFNCbWRXNWpkR2x2YmlncGUxeHVYSFJ5WlhSMWNtNGdiV0Z1WVdkbGNpNW5aWFJOWVhoUWNtbHZjbWwwZVNncE8xeHVmVHRjYmx4dVhHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZWR2xqYTBWdWRISjVMbXB6SWl3aVhHNXNaWFFnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUWdQU0JPWVU0N1hHNWpiMjV6ZENCd2NtbHZjbWwwZVVWdWRISnBaWE1nUFNCYmJuVnNiQ3dnYm5Wc2JDd2diblZzYkN3Z2JuVnNiRjA3WEc1Y2JtWjFibU4wYVc5dUlHOXVWR2xqYXlncGUxeHVYSFJtYjNJb2JHVjBJR2x1WkdWNElEMGdNQ0E3SUdsdVpHVjRJRHdnY0hKcGIzSnBkSGxGYm5SeWFXVnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5bDdYRzVjZEZ4MGJHVjBJSFJwWTJ0RmJuUnlhV1Z6SUQwZ2NISnBiM0pwZEhsRmJuUnlhV1Z6VzJsdVpHVjRYVHRjYmx4MFhIUnBaaWgwYVdOclJXNTBjbWxsY3lBbUppQjBhV05yUlc1MGNtbGxjeTVzWlc1bmRHZ2dQaUF3S1NCN1hHNWNkRngwWEhSbGVHVmpkWFJsVkdsamEwVnVkSEpwWlhNb2RHbGphMFZ1ZEhKcFpYTXBPMXh1WEhSY2RGeDBMeTlEYkdWaGNpQjBhR1Z0SUc5dVkyVWdaWGhsWTNWMFpXUmNibHgwWEhSY2RIQnlhVzl5YVhSNVJXNTBjbWxsYzF0cGJtUmxlRjBnUFNCdWRXeHNPMXh1WEhSY2RIMWNibHgwZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJsZUdWamRYUmxWR2xqYTBWdWRISnBaWE1vZEdsamEwVnVkSEpwWlhNcGUxeHVYSFF2THlCcGJYQnZjblJoYm5RZ2RHOGdkWE5sSUdadmNpMXNiMjl3WEc1Y2RDOHZJSFJwWTJ0RmJuUnlhV1Z6SUdkeWIzZHpJR1I1Ym1GdGFXTmhiR3g1SUdKNUlHOXVaU0J2WmlCcGRITWdaVzUwY25sY2JseDBMeThnWm05eUlHVjRZVzF3YkdVNklHeGxkQ0J6WVhrZ2QyVWdhR0YyWlNCdmJtVWdaVzUwY25rc0lHRnVaQ0JsZUdWamRYUnBibWNnZEdoaGRDQmxiblJ5ZVNCdGFXZG9kQ0JoWkdSeklHRnViM1JvWlhJZ1pXNTBjbmxjYmx4MEx5OGdkMmwwYUNCdFlYQWdablZ1WTNScGIyNGdkMlVnWTJGdWRDQmxlR1ZqZFhSbElHUjVibUZ0YVdOaGJHeDVJR2R5YjNkcGJtY2daVzUwY21sbGN5NWNibHgwWm05eUtHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhScFkydEZiblJ5YVdWekxteGxibWQwYURzZ2FTc3JLWHRjYmx4MFhIUmpiMjV6ZENCMGFXTnJSVzUwY25rZ1BTQjBhV05yUlc1MGNtbGxjMXRwWFR0Y2JseDBYSFIwYVdOclJXNTBjbmt1Y21WamRYSnphVzl1UTI5MWJuUXJLenRjYmx4MFhIUjBhV05yUlc1MGNua3ViR2x6ZEdWdVpYSXVZMkZzYkNoMGFXTnJSVzUwY25rdVkyOXVkR1Y0ZENCOGZDQjBhV05yUlc1MGNua3ViR2x6ZEdWdVpYSmJKM1JvYVhNblhTazdYRzVjZEZ4MGRHbGphMFZ1ZEhKNUxuSmxZM1Z5YzJsdmJrTnZkVzUwTFMwN1hHNWNkRngwYVdZZ0tIUnBZMnRGYm5SeWVTNWpZV3hzWW1GamF5a2dlMXh1WEhSY2RGeDBkR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcld5ZDBhR2x6SjEwcE8xeHVYSFJjZEgxY2JseDBmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWdwZTF4dVhIUnZibFJwWTJzb0tUdGNibHgwY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUWdQU0IzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0hKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVTmhiR3hpWVdOcktUdGNibjFjYmx4dVkyeGhjM01nVkdsamEwMWhibUZuWlhJZ2UxeHVYSFJqYjI1emRISjFZM1J2Y2lncGUxeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNBOUlEQTdJQzh2SUdadmNpQlhhVzVrYjNkeklFVnVkbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowS0NrN1hHNWNkSDFjYm4xY2JseHVYRzVVYVdOclRXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdVlXUmtJRDBnWm5WdVkzUnBiMjRnS0hScFkydEZiblJ5ZVNrZ2UxeHVYSFJqYjI1emRDQjdJSEJ5YVc5eWFYUjVJSDBnUFNCMGFXTnJSVzUwY25rN1hHNWNkR2xtS0NGd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkS1h0Y2JseDBYSFJ3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRJRDBnVzEwN1hHNWNkSDFjYmx4MFkyOXVjM1FnZEdsamEwVnVkSEpwWlhNZ1BTQndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZE8xeHVYSFIwYVdOclJXNTBjbWxsY3k1d2RYTm9LSFJwWTJ0RmJuUnllU2s3SUM4dklIUnZaRzg2SUZOMFlXTnJJRzl5SUZGMVpYVmxYRzU5TzF4dVhHNWNiaTh2SUZSdlpHODZJRk4xY0hCdmNuUWdabTl5SUU1dlpHVktVeUJjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNXpkR0Z5ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGFXWW9kMmx1Wkc5M0tYdGNibHgwWEhRdkx5QjNhV3hzSUhKbFkyVnBkbVZ6SUhScGJXVnpkR0Z0Y0NCaGN5QmhjbWQxYldWdWRGeHVYSFJjZEM4dmRHOWtiem9nVEdWaGNtNDZJQ0IwYUdVZ2NIVnljRzl6WlNCdlppQjBhVzFsYzNSaGJYQmNibHgwWEhSeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ0E5SUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxRMkZzYkdKaFkyc3BPMXh1WEhSOVhHNTlPMXh1WEc1Y2JsUnBZMnROWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzV6ZEc5d0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUnBaaWgzYVc1a2IzY3BlMXh1WEhSY2RIZHBibVJ2ZHk1allXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTaHlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNrN1hHNWNkSDFjYm4wN1hHNWNibFJwWTJ0TllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1blpYUk5ZWGhRY21sdmNtbDBlU0E5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwY21WMGRYSnVJSEJ5YVc5eWFYUjVSVzUwY21sbGN5NXNaVzVuZEdnZ0xTQXhPMXh1ZlR0Y2JseHVZMjl1YzNRZ2MybHVaMnhsZEc5dVNXNXpkR0Z1WTJVZ1BTQnVaWGNnVkdsamEwMWhibUZuWlhJb0tUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdjMmx1WjJ4bGRHOXVTVzV6ZEdGdVkyVTdYRzVjYmx4dVhHNWNibHh1WEc1Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOU5ZVzVoWjJWeUxtcHpJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IodHJpZ2dlckRvbmVOb3RpZmllcikge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciA9IHRyaWdnZXJEb25lTm90aWZpZXI7XG4gICAgfVxufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnNldFRyaWdnZXJEb25lTm90aWZpZXIgPSBmdW5jdGlvbih0cmlnZ2VyRG9uZU5vdGlmaWVyKXtcblx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gdHJpZ2dlckRvbmVOb3RpZmllcjtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVUcmlnZ2VyRG9uZU5vdGlmaWVyID0gZnVuY3Rpb24oKXtcblx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gbnVsbDtcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgcmVzcG9uc2libGUgZm9yIGluaXRpYXRpbmcgdHJpZ2dlclxuLy8gaWYgY2FsbGVkIHVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBtYWtlIGEgc3luY2VkIGVmZmVjdCBvZiBleGVjdXRpb25cbkZ1bmN0aW9ucy5wcm90b3R5cGUuZXhlY3V0ZVRyaWdnZXJlciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIHRyaWdnZXJlckNhbGxiYWNrKXtcblx0Y29uc3QgX2V4ZWN1dGVUcmlnZ2VyZXIgPSAodHJpZ2dlcmVkQWdhaW4gPSBmYWxzZSk9Pntcblx0XHRsZXQgdGlja2VyO1xuXHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0ZnVuYy5jYWxsKGNvbnRleHQpO1xuXHRcdFx0aWYodHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0XHR0cmlnZ2VyZXJDYWxsYmFjayAmJiB0cmlnZ2VyZXJDYWxsYmFjayh0cmlnZ2VyZWRBZ2Fpbik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCB0cmlnZ2VyZXJDYWxsYmFjaywgbnVsbCwgMyk7XG5cdFx0XHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIF9leGVjdXRlVHJpZ2dlcmVyLCB0cmlnZ2VyZXJDYWxsYmFjaywgMyk7XG5cdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdH1cblx0fTtcblx0X2V4ZWN1dGVUcmlnZ2VyZXIoKTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCBleGVjdXRlTGF0ZXJJbk5leHRUaWNrID0gZmFsc2UsIHByaW9yaXR5ID0gMCwgbGlzdGVuZXJDYWxsYmFjayA9IG51bGwpe1xuICAgIGxldCBlbnRyeTtcbiAgICBpZiAoZXhlY3V0ZUxhdGVySW5OZXh0VGljayl7XG5cblx0ICAgICBjb25zdCB0aWNrZXJDYWxsYmFjayA9ICh0cmlnZ2VyZWRBZ2FpbiA9IGZhbHNlKSA9PiB7XG5cdFx0ICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IC0gMTtcblx0XHQgICAgaWYobGlzdGVuZXJDYWxsYmFjayl7XG5cdFx0XHQgICAgbGlzdGVuZXJDYWxsYmFjay5jYWxsKGxpc3RlbmVyQ2FsbGJhY2tbJ3RoaXMnXSwgdHJpZ2dlcmVkQWdhaW4pXG5cdFx0ICAgIH1cblx0XHQgICAgaWYoIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0ICAgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciAmJiAgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyKCk7XG5cdFx0ICAgIH1cblx0ICAgIH07XG4gICAgICAgIGNvbnN0IHRpY2tlciA9IG5ldyBUaWNrZXIoY29udGV4dCwgZnVuYywgdGlja2VyQ2FsbGJhY2ssIHByaW9yaXR5KTtcblx0ICAgIGVudHJ5ID0gbmV3IEVudHJ5KHRpY2tlciwgdGlja2VyLmV4ZWN1dGUpO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcy5wdXNoKGVudHJ5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJ5ID0gbmV3IEVudHJ5KGNvbnRleHQsIGZ1bmMpO1xuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsZnVuYywgY2FsbGJhY2sgPSBudWxsKXtcblx0bGV0IGVudHJ5LCBpO1xuXHRjb25zdCB7ZnJhbWVFbnRyaWVzLCBlbnRyaWVzfSA9IHRoaXM7XG5cblx0Zm9yKGkgPSAwOyBpIDwgZnJhbWVFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0ICAgIGNvbnN0IGZyYW1lRW50cnkgPSAgZnJhbWVFbnRyaWVzW2ldO1xuXHRcdGVudHJ5ID0gZnJhbWVFbnRyeS5jb250ZXh0O1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdGZyYW1lRW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0fSBlbHNlIHsgLy8gZnJhbWUgdHJpZ2dlciBMaXN0ZW5lcnMgYXJlIHN0aWxsIHJ1bm5pbmdcblx0XHRcdFx0bGV0IHRpY2tlckVudHJ5O1xuXHRcdFx0XHRjb25zdCBkaXNwb3NlRG9uZU5vdGlmaWVyID0gKHRyaWdnZXJlZEFnYWluID0gZmFsc2UpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2sodHJpZ2dlcmVkQWdhaW4pO1xuXHRcdFx0XHRcdH0gZWxzZXtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0ZW50cnkgPSBlbnRyaWVzW2ldO1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0ZW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudHJpZ2dlckxpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZW50cmllc0luZGV4VG9EaXNwb3NlID0gW107XG5cblx0dGhpcy5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcbiAgICAgICAgaWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG4gICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcbiAgICB9LCB0aGlzKTtcblxuXG5cdGlmKHRoaXMuZnJhbWVFbnRyaWVzLmxlbmd0aCA+IDApe1xuXHRcdHRoaXMuZnJhbWVFbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcblx0XHRcdGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCArIDE7XG5cdFx0XHRcdGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG5cdFx0XHR0aGlzLmZyYW1lRW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcblx0XHR9LCB0aGlzKVxuXHR9IGVsc2Uge1xuXHRcdHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciAmJiB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIoKTtcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZnVuY3Rpb25zLmpzIiwiaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZnVuYyl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jO1xuICAgIH1cbn1cblxuLy8gTWV0aG9kIGF2YWlsYWJsZSBvbmx5IG9uIEVudHJ5IGluc3RhbmNlIG5vdCBpbiBDbGFzc1xuRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKXtcbiAgICBpZih0aGlzLmNvbnRleHQgaW5zdGFuY2VvZiBUaWNrZXIpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXIgPSBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lbnRyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=