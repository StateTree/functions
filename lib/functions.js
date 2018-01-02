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
	    callback = tickEntry.callback;

	if (!priorityEntries[priority]) {
		priorityEntries[priority] = [];
		var _tickEntries = priorityEntries[priority];
		_tickEntries.push(tickEntry);
		return;
	}
	var tickEntries = priorityEntries[priority];
	if (isAddedAlready(tickEntry, tickEntries)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwZWM5MDlmZDFjZmUzMTlmZjU1NSIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwicHJvdG90eXBlIiwiZGlzcG9zZSIsImV4ZWN1dGUiLCJhZGQiLCJnZXRNYXhQcmlvcml0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwiTmFOIiwicHJpb3JpdHlFbnRyaWVzIiwib25UaWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJ0aWNrRW50cmllcyIsImV4ZWN1dGVUaWNrRW50cmllcyIsImkiLCJ0aWNrRW50cnkiLCJjYWxsIiwiaXNBZGRlZEFscmVhZHkiLCJlbnRyeSIsInJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiVGlja01hbmFnZXIiLCJzdGFydCIsInB1c2giLCJzdG9wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzaW5nbGV0b25JbnN0YW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFQTtJQUNxQkEsUztBQUVwQjs7OztBQUlBLG1CQUFZQyxPQUFaLEVBQXFCQyxRQUFyQixFQUNBO0FBQUEsS0FEK0JDLFFBQy9CLHVFQUQwQyxJQUMxQztBQUFBLEtBRGdEQyxRQUNoRCx1RUFEMkQsQ0FDM0Q7O0FBQUE7O0FBQ0MsTUFBS0gsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsTUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxNQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE1BQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsQzs7QUFJRjs7a0JBaEJxQkosUztBQWtCckJBLFVBQVVLLFNBQVYsQ0FBb0JDLE9BQXBCLEdBQThCLFlBQVU7QUFDdkMsTUFBS0wsT0FBTCxHQUFlLElBQWY7QUFDQSxNQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsTUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLE1BQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxDQUxEOztBQU9BSixVQUFVSyxTQUFWLENBQW9CRSxPQUFwQixHQUE4QixZQUFVO0FBQ3ZDLG1CQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLENBRkQ7O0FBSUFSLFVBQVVLLFNBQVYsQ0FBb0JJLGNBQXBCLEdBQXFDLFlBQVU7QUFDOUMsUUFBTyxrQkFBUUEsY0FBUixFQUFQO0FBQ0EsQ0FGRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsSUFBSUMsMEJBQTBCQyxHQUE5QjtBQUNBLElBQU1DLGtCQUFrQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUF4Qjs7QUFFQSxTQUFTQyxNQUFULEdBQWlCO0FBQ2hCLE1BQUksSUFBSUMsUUFBUSxDQUFoQixFQUFvQkEsUUFBUUYsZ0JBQWdCRyxNQUE1QyxFQUFvREQsT0FBcEQsRUFBNEQ7QUFDM0QsTUFBSUUsY0FBY0osZ0JBQWdCRSxLQUFoQixDQUFsQjtBQUNBLE1BQUdFLGVBQWVBLFlBQVlELE1BQVosR0FBcUIsQ0FBdkMsRUFBMEM7QUFDekNFLHNCQUFtQkQsV0FBbkI7QUFDQTtBQUNBSixtQkFBZ0JFLEtBQWhCLElBQXlCLElBQXpCO0FBQ0E7QUFDRDtBQUNEOztBQUVELFNBQVNHLGtCQUFULENBQTRCRCxXQUE1QixFQUF3QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUksSUFBSUUsSUFBSSxDQUFaLEVBQWVBLElBQUlGLFlBQVlELE1BQS9CLEVBQXVDRyxHQUF2QyxFQUEyQztBQUMxQyxNQUFNQyxZQUFZSCxZQUFZRSxDQUFaLENBQWxCO0FBQ0FDLFlBQVVqQixRQUFWLENBQW1Ca0IsSUFBbkIsQ0FBd0JELFVBQVVsQixPQUFWLElBQXFCa0IsVUFBVWpCLFFBQVYsQ0FBbUIsTUFBbkIsQ0FBN0M7QUFDQSxNQUFJaUIsVUFBVWhCLFFBQWQsRUFBd0I7QUFDdkJnQixhQUFVaEIsUUFBVixDQUFtQmlCLElBQW5CLENBQXdCRCxVQUFVaEIsUUFBVixDQUFtQixNQUFuQixDQUF4QjtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxTQUFTa0IsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEJOLFdBQTlCLEVBQTBDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSSxJQUFJRSxJQUFJLENBQVosRUFBZUEsSUFBSUYsWUFBWUQsTUFBL0IsRUFBdUNHLEdBQXZDLEVBQTJDO0FBQzFDLE1BQU1DLFlBQVlILFlBQVlFLENBQVosQ0FBbEI7QUFDQSxNQUFHSSxNQUFNckIsT0FBTixLQUFrQmtCLFVBQVVsQixPQUE1QixJQUF1Q3FCLE1BQU1wQixRQUFOLEtBQW1CaUIsVUFBVWpCLFFBQXZFLEVBQWdGO0FBQy9FLFVBQU8sSUFBUDtBQUNBO0FBQ0Q7QUFDRCxRQUFPLEtBQVA7QUFDQTs7QUFFRCxTQUFTcUIsNkJBQVQsR0FBd0M7QUFDdkNWO0FBQ0FILDJCQUEwQmMsT0FBT0MscUJBQVAsQ0FBNkJGLDZCQUE3QixDQUExQjtBQUNBOztJQUVLRyxXLEdBQ0wsdUJBQWE7QUFBQTs7QUFDTmhCLDJCQUEwQixDQUExQixDQURNLENBQ3VCO0FBQzdCLE1BQUtpQixLQUFMO0FBQ04sQzs7QUFJRkQsWUFBWXJCLFNBQVosQ0FBc0JHLEdBQXRCLEdBQTRCLFVBQVVXLFNBQVYsRUFBcUI7QUFBQSxLQUN4Q2YsUUFEd0MsR0FDakJlLFNBRGlCLENBQ3hDZixRQUR3QztBQUFBLEtBQzlCRCxRQUQ4QixHQUNqQmdCLFNBRGlCLENBQzlCaEIsUUFEOEI7O0FBRWhELEtBQUcsQ0FBQ1MsZ0JBQWdCUixRQUFoQixDQUFKLEVBQThCO0FBQzdCUSxrQkFBZ0JSLFFBQWhCLElBQTRCLEVBQTVCO0FBQ0EsTUFBTVksZUFBY0osZ0JBQWdCUixRQUFoQixDQUFwQjtBQUNBWSxlQUFZWSxJQUFaLENBQWlCVCxTQUFqQjtBQUNBO0FBQ0E7QUFDRCxLQUFNSCxjQUFjSixnQkFBZ0JSLFFBQWhCLENBQXBCO0FBQ0EsS0FBR2lCLGVBQWVGLFNBQWYsRUFBeUJILFdBQXpCLENBQUgsRUFBeUM7QUFDeENiLGNBQVlBLFNBQVMsSUFBVCxDQUFaO0FBQ0EsRUFGRCxNQUVPO0FBQ05hLGNBQVlZLElBQVosQ0FBaUJULFNBQWpCO0FBQ0E7QUFDRCxDQWREOztBQWlCQTtBQUNBTyxZQUFZckIsU0FBWixDQUFzQnNCLEtBQXRCLEdBQThCLFlBQVk7QUFDekMsS0FBR0gsTUFBSCxFQUFVO0FBQ1Q7QUFDQTtBQUNBZCw0QkFBMEJjLE9BQU9DLHFCQUFQLENBQTZCRiw2QkFBN0IsQ0FBMUI7QUFDQTtBQUNELENBTkQ7O0FBU0FHLFlBQVlyQixTQUFaLENBQXNCd0IsSUFBdEIsR0FBNkIsWUFBWTtBQUN4QyxLQUFHTCxNQUFILEVBQVU7QUFDVEEsU0FBT00sb0JBQVAsQ0FBNEJwQix1QkFBNUI7QUFDQTtBQUNELENBSkQ7O0FBTUFnQixZQUFZckIsU0FBWixDQUFzQkksY0FBdEIsR0FBdUMsWUFBWTtBQUNsRCxRQUFPRyxnQkFBZ0JHLE1BQWhCLEdBQXlCLENBQWhDO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNZ0Isb0JBQW9CLElBQUlMLFdBQUosRUFBMUI7O2tCQUVlSyxpQiIsImZpbGUiOiJsaWIvdGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZWM5MDlmZDFjZmUzMTlmZjU1NSIsImltcG9ydCBUaWNrZXIgZnJvbSAnLi9UaWNrRW50cnknO1xuXG5leHBvcnQgZGVmYXVsdCBUaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgbWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xuXG4vLyB0b0RvOiBzdXBwb3J0IGJvdGggY2FsbGJhY2sgYW5kIHByb21pc2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tFbnRyeVxue1xuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgXCJ0aGlzXCIgYXJndW1lbnQgZm9yIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBsaXN0ZW5lciwgY2FsbGJhY2sgPSBudWxsLCBwcmlvcml0eSA9IDApXG5cdHtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHR9XG5cbn1cblxuLyotLS0tIFB1YmxpY3xQcm90b3R5cGUgTWV0aG9kcyAtLS0qL1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24oKXtcblx0bWFuYWdlci5hZGQodGhpcyk7XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24oKXtcblx0cmV0dXJuIG1hbmFnZXIuZ2V0TWF4UHJpb3JpdHkoKTtcbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL1RpY2tFbnRyeS5qcyIsIlxubGV0IHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gTmFOO1xuY29uc3QgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuXG5mdW5jdGlvbiBvblRpY2soKXtcblx0Zm9yKGxldCBpbmRleCA9IDAgOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4Kyspe1xuXHRcdGxldCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKTtcblx0XHRcdC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG5cdFx0XHRwcmlvcml0eUVudHJpZXNbaW5kZXhdID0gbnVsbDtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKXtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvcihsZXQgaSA9IDA7IGkgPCB0aWNrRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0Y29uc3QgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNBZGRlZEFscmVhZHkoZW50cnksdGlja0VudHJpZXMpe1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yKGxldCBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRjb25zdCB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSB0aWNrRW50cnkuY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gdGlja0VudHJ5Lmxpc3RlbmVyKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCl7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG5jbGFzcyBUaWNrTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsgLy8gZm9yIFdpbmRvd3MgRW52XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblx0fVxufVxuXG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdGNvbnN0IHsgcHJpb3JpdHksIGNhbGxiYWNrIH0gPSB0aWNrRW50cnk7XG5cdGlmKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKXtcblx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdFx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRpZihpc0FkZGVkQWxyZWFkeSh0aWNrRW50cnksdGlja0VudHJpZXMpKXtcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcblx0fSBlbHNlIHtcblx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH1cbn07XG5cblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG59O1xuXG5jb25zdCBzaW5nbGV0b25JbnN0YW5jZSA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25JbnN0YW5jZTtcblxuXG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL01hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYzMwNjU2MmVmZmVjZTlkNDUzYyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJ0cmlnZ2VyRG9uZU5vdGlmaWVyIiwiZW50cmllcyIsImZyYW1lRW50cmllcyIsImV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IiwicHJvdG90eXBlIiwic2V0VHJpZ2dlckRvbmVOb3RpZmllciIsInJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIiLCJleGVjdXRlVHJpZ2dlcmVyIiwiY29udGV4dCIsImZ1bmMiLCJ0cmlnZ2VyZXJDYWxsYmFjayIsIl9leGVjdXRlVHJpZ2dlcmVyIiwidHJpZ2dlcmVkQWdhaW4iLCJ0aWNrZXIiLCJjYWxsIiwiZXhlY3V0ZSIsImFkZExpc3RlbmVyIiwiZXhlY3V0ZUxhdGVySW5OZXh0VGljayIsInByaW9yaXR5IiwibGlzdGVuZXJDYWxsYmFjayIsImVudHJ5IiwidGlja2VyQ2FsbGJhY2siLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJjYWxsYmFjayIsImkiLCJmcmFtZUVudHJ5IiwibGlzdGVuZXIiLCJkaXNwb3NlIiwidGlja2VyRW50cnkiLCJkaXNwb3NlRG9uZU5vdGlmaWVyIiwibGVuZ3RoIiwidHJpZ2dlckxpc3RlbmVycyIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIsIkVudHJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TUFBTVosT0FBTixJQUFpQlksTUFBTU8sUUFBTixDQUFlLE1BQWYsQ0FBdEM7QUFDQSxJQUhELE1BR087QUFDTk0sMEJBQXNCWCxJQUF0QixDQUEyQmEsS0FBM0I7QUFDQTtBQUNELEdBUEQsRUFPRyxJQVBIO0FBUUFGLHdCQUFzQkMsT0FBdEIsQ0FBOEIsVUFBU0csVUFBVCxFQUFvQjtBQUNqRCxRQUFLbkMsWUFBTCxDQUFrQm9DLE1BQWxCLENBQXlCRCxVQUF6QixFQUFvQyxDQUFwQztBQUNBLEdBRkQsRUFFRyxJQUZIO0FBR0EsRUFaRCxNQVlPO0FBQ04sT0FBS3JDLG1CQUFMLElBQTRCLEtBQUtBLG1CQUFMLEVBQTVCO0FBQ0E7QUFDRCxDQTlCRCxDOzs7Ozs7Ozs7Ozs7O0FDdEdBOzs7Ozs7OztJQUVxQnVDLEssR0FDakIsZUFBWS9CLE9BQVosRUFBcUJDLElBQXJCLEVBQTBCO0FBQUE7O0FBQ3RCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUttQixRQUFMLEdBQWdCbEIsSUFBaEI7QUFDSCxDOztBQUdMOzs7a0JBUHFCOEIsSztBQVFyQkEsTUFBTW5DLFNBQU4sQ0FBZ0J3QixPQUFoQixHQUEwQixZQUFXO0FBQ2pDLFFBQUcsS0FBS3BCLE9BQUwsNEJBQUgsRUFBa0M7QUFDOUIsYUFBS0EsT0FBTCxDQUFhb0IsT0FBYjtBQUNIO0FBQ0QsU0FBS3BCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS21CLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxDQU5ELEMiLCJmaWxlIjoibGliL2Z1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmMzMDY1NjJlZmZlY2U5ZDQ1M2MiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59O1xuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRpY2tFbnRyeTtcblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcblx0X01hbmFnZXIyLmRlZmF1bHQuYWRkKHRoaXMpO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIF9NYW5hZ2VyMi5kZWZhdWx0LmdldE1heFByaW9yaXR5KCk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gTmFOO1xudmFyIHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcblxuZnVuY3Rpb24gb25UaWNrKCkge1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcykge1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrRW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBpc0FkZGVkQWxyZWFkeShlbnRyeSwgdGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0aWYgKGVudHJ5LmNvbnRleHQgPT09IHRpY2tFbnRyeS5jb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSB0aWNrRW50cnkubGlzdGVuZXIpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCkge1xuXHRvblRpY2soKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcbn1cblxudmFyIFRpY2tNYW5hZ2VyID0gZnVuY3Rpb24gVGlja01hbmFnZXIoKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrTWFuYWdlcik7XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSAwOyAvLyBmb3IgV2luZG93cyBFbnZcblx0dGhpcy5zdGFydCgpO1xufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5LFxuXHQgICAgY2FsbGJhY2sgPSB0aWNrRW50cnkuY2FsbGJhY2s7XG5cblx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdHZhciBfdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdF90aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdGlmIChpc0FkZGVkQWxyZWFkeSh0aWNrRW50cnksIHRpY2tFbnRyaWVzKSkge1xuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fVxufTtcblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0Ly8gd2lsbCByZWNlaXZlcyB0aW1lc3RhbXAgYXMgYXJndW1lbnRcblx0XHQvL3RvZG86IExlYXJuOiAgdGhlIHB1cnBvc2Ugb2YgdGltZXN0YW1wXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuZ2V0TWF4UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBwcmlvcml0eUVudHJpZXMubGVuZ3RoIC0gMTtcbn07XG5cbnZhciBzaW5nbGV0b25JbnN0YW5jZSA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaW5nbGV0b25JbnN0YW5jZTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBd1pXTTVNRGxtWkRGalptVXpNVGxtWmpVMU5TSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMVJwWTJ0RmJuUnllUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlRXRnVZV2RsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpVYVdOclJXNTBjbmtpTENKamIyNTBaWGgwSWl3aWJHbHpkR1Z1WlhJaUxDSmpZV3hzWW1GamF5SXNJbkJ5YVc5eWFYUjVJaXdpY0hKdmRHOTBlWEJsSWl3aVpHbHpjRzl6WlNJc0ltVjRaV04xZEdVaUxDSmhaR1FpTENKblpYUk5ZWGhRY21sdmNtbDBlU0lzSW5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJaXdpVG1GT0lpd2ljSEpwYjNKcGRIbEZiblJ5YVdWeklpd2liMjVVYVdOcklpd2lhVzVrWlhnaUxDSnNaVzVuZEdnaUxDSjBhV05yUlc1MGNtbGxjeUlzSW1WNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3lJc0lta2lMQ0owYVdOclJXNTBjbmtpTENKallXeHNJaXdpYVhOQlpHUmxaRUZzY21WaFpIa2lMQ0psYm5SeWVTSXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05ySWl3aWQybHVaRzkzSWl3aWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJaXdpVkdsamEwMWhibUZuWlhJaUxDSnpkR0Z5ZENJc0luQjFjMmdpTENKemRHOXdJaXdpWTJGdVkyVnNRVzVwYldGMGFXOXVSbkpoYldVaUxDSnphVzVuYkdWMGIyNUpibk4wWVc1alpTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenM3UVVNM1JFRTdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CUVRzN096czdPenM3UVVGRlFUdEpRVU54UWtFc1V6dEJRVVZ3UWpzN096dEJRVWxCTEcxQ1FVRlpReXhQUVVGYUxFVkJRWEZDUXl4UlFVRnlRaXhGUVVOQk8wRkJRVUVzUzBGRUswSkRMRkZCUXk5Q0xIVkZRVVF3UXl4SlFVTXhRenRCUVVGQkxFdEJSR2RFUXl4UlFVTm9SQ3gxUlVGRU1rUXNRMEZETTBRN08wRkJRVUU3TzBGQlEwTXNUVUZCUzBnc1QwRkJUQ3hIUVVGbFFTeFBRVUZtTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFrRXNVVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBFc1F6czdRVUZKUmpzN2EwSkJhRUp4UWtvc1V6dEJRV3RDY2tKQkxGVkJRVlZMTEZOQlFWWXNRMEZCYjBKRExFOUJRWEJDTEVkQlFUaENMRmxCUVZVN1FVRkRka01zVFVGQlMwd3NUMEZCVEN4SFFVRmxMRWxCUVdZN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENMRWxCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMElzU1VGQmFFSTdRVUZEUVN4RFFVeEVPenRCUVU5QlNpeFZRVUZWU3l4VFFVRldMRU5CUVc5Q1JTeFBRVUZ3UWl4SFFVRTRRaXhaUVVGVk8wRkJRM1pETEcxQ1FVRlJReXhIUVVGU0xFTkJRVmtzU1VGQldqdEJRVU5CTEVOQlJrUTdPMEZCU1VGU0xGVkJRVlZMTEZOQlFWWXNRMEZCYjBKSkxHTkJRWEJDTEVkQlFYRkRMRmxCUVZVN1FVRkRPVU1zVVVGQlR5eHJRa0ZCVVVFc1kwRkJVaXhGUVVGUU8wRkJRMEVzUTBGR1JDeERPenM3T3pzN096czdPenM3T3pzN1FVTXZRa0VzU1VGQlNVTXNNRUpCUVRCQ1F5eEhRVUU1UWp0QlFVTkJMRWxCUVUxRExHdENRVUZyUWl4RFFVRkRMRWxCUVVRc1JVRkJUeXhKUVVGUUxFVkJRV0VzU1VGQllpeEZRVUZ0UWl4SlFVRnVRaXhEUVVGNFFqczdRVUZGUVN4VFFVRlRReXhOUVVGVUxFZEJRV2xDTzBGQlEyaENMRTFCUVVrc1NVRkJTVU1zVVVGQlVTeERRVUZvUWl4RlFVRnZRa0VzVVVGQlVVWXNaMEpCUVdkQ1J5eE5RVUUxUXl4RlFVRnZSRVFzVDBGQmNFUXNSVUZCTkVRN1FVRkRNMFFzVFVGQlNVVXNZMEZCWTBvc1owSkJRV2RDUlN4TFFVRm9RaXhEUVVGc1FqdEJRVU5CTEUxQlFVZEZMR1ZCUVdWQkxGbEJRVmxFTEUxQlFWb3NSMEZCY1VJc1EwRkJka01zUlVGQk1FTTdRVUZEZWtORkxITkNRVUZ0UWtRc1YwRkJia0k3UVVGRFFUdEJRVU5CU2l4dFFrRkJaMEpGTEV0QlFXaENMRWxCUVhsQ0xFbEJRWHBDTzBGQlEwRTdRVUZEUkR0QlFVTkVPenRCUVVWRUxGTkJRVk5ITEd0Q1FVRlVMRU5CUVRSQ1JDeFhRVUUxUWl4RlFVRjNRenRCUVVOMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVVrc1NVRkJTVVVzU1VGQlNTeERRVUZhTEVWQlFXVkJMRWxCUVVsR0xGbEJRVmxFTEUxQlFTOUNMRVZCUVhWRFJ5eEhRVUYyUXl4RlFVRXlRenRCUVVNeFF5eE5RVUZOUXl4WlFVRlpTQ3haUVVGWlJTeERRVUZhTEVOQlFXeENPMEZCUTBGRExGbEJRVlZxUWl4UlFVRldMRU5CUVcxQ2EwSXNTVUZCYmtJc1EwRkJkMEpFTEZWQlFWVnNRaXhQUVVGV0xFbEJRWEZDYTBJc1ZVRkJWV3BDTEZGQlFWWXNRMEZCYlVJc1RVRkJia0lzUTBGQk4wTTdRVUZEUVN4TlFVRkphVUlzVlVGQlZXaENMRkZCUVdRc1JVRkJkMEk3UVVGRGRrSm5RaXhoUVVGVmFFSXNVVUZCVml4RFFVRnRRbWxDTEVsQlFXNUNMRU5CUVhkQ1JDeFZRVUZWYUVJc1VVRkJWaXhEUVVGdFFpeE5RVUZ1UWl4RFFVRjRRanRCUVVOQk8wRkJRMFE3UVVGRFJEczdRVUZGUkN4VFFVRlRhMElzWTBGQlZDeERRVUYzUWtNc1MwRkJlRUlzUlVGQk9FSk9MRmRCUVRsQ0xFVkJRVEJETzBGQlEzcERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlNTeEpRVUZKUlN4SlFVRkpMRU5CUVZvc1JVRkJaVUVzU1VGQlNVWXNXVUZCV1VRc1RVRkJMMElzUlVGQmRVTkhMRWRCUVhaRExFVkJRVEpETzBGQlF6RkRMRTFCUVUxRExGbEJRVmxJTEZsQlFWbEZMRU5CUVZvc1EwRkJiRUk3UVVGRFFTeE5RVUZIU1N4TlFVRk5ja0lzVDBGQlRpeExRVUZyUW10Q0xGVkJRVlZzUWl4UFFVRTFRaXhKUVVGMVEzRkNMRTFCUVUxd1FpeFJRVUZPTEV0QlFXMUNhVUlzVlVGQlZXcENMRkZCUVhaRkxFVkJRV2RHTzBGQlF5OUZMRlZCUVU4c1NVRkJVRHRCUVVOQk8wRkJRMFE3UVVGRFJDeFJRVUZQTEV0QlFWQTdRVUZEUVRzN1FVRkZSQ3hUUVVGVGNVSXNOa0pCUVZRc1IwRkJkME03UVVGRGRrTldPMEZCUTBGSUxESkNRVUV3UW1Nc1QwRkJUME1zY1VKQlFWQXNRMEZCTmtKR0xEWkNRVUUzUWl4RFFVRXhRanRCUVVOQk96dEpRVVZMUnl4WExFZEJRMHdzZFVKQlFXRTdRVUZCUVRzN1FVRkRUbWhDTERKQ1FVRXdRaXhEUVVFeFFpeERRVVJOTEVOQlEzVkNPMEZCUXpkQ0xFMUJRVXRwUWl4TFFVRk1PMEZCUTA0c1F6czdRVUZKUmtRc1dVRkJXWEpDTEZOQlFWb3NRMEZCYzBKSExFZEJRWFJDTEVkQlFUUkNMRlZCUVZWWExGTkJRVllzUlVGQmNVSTdRVUZCUVN4TFFVTjRRMllzVVVGRWQwTXNSMEZEYWtKbExGTkJSR2xDTEVOQlEzaERaaXhSUVVSM1F6dEJRVUZCTEV0QlF6bENSQ3hSUVVRNFFpeEhRVU5xUW1kQ0xGTkJSR2xDTEVOQlF6bENhRUlzVVVGRU9FSTdPMEZCUldoRUxFdEJRVWNzUTBGQlExTXNaMEpCUVdkQ1VpeFJRVUZvUWl4RFFVRktMRVZCUVRoQ08wRkJRemRDVVN4clFrRkJaMEpTTEZGQlFXaENMRWxCUVRSQ0xFVkJRVFZDTzBGQlEwRXNUVUZCVFZrc1pVRkJZMG9zWjBKQlFXZENVaXhSUVVGb1FpeERRVUZ3UWp0QlFVTkJXU3hsUVVGWldTeEpRVUZhTEVOQlFXbENWQ3hUUVVGcVFqdEJRVU5CTzBGQlEwRTdRVUZEUkN4TFFVRk5TQ3hqUVVGalNpeG5Ra0ZCWjBKU0xGRkJRV2hDTEVOQlFYQkNPMEZCUTBFc1MwRkJSMmxDTEdWQlFXVkdMRk5CUVdZc1JVRkJlVUpJTEZkQlFYcENMRU5CUVVnc1JVRkJlVU03UVVGRGVFTmlMR05CUVZsQkxGTkJRVk1zU1VGQlZDeERRVUZhTzBGQlEwRXNSVUZHUkN4TlFVVlBPMEZCUTA1aExHTkJRVmxaTEVsQlFWb3NRMEZCYVVKVUxGTkJRV3BDTzBGQlEwRTdRVUZEUkN4RFFXUkVPenRCUVdsQ1FUdEJRVU5CVHl4WlFVRlpja0lzVTBGQldpeERRVUZ6UW5OQ0xFdEJRWFJDTEVkQlFUaENMRmxCUVZrN1FVRkRla01zUzBGQlIwZ3NUVUZCU0N4RlFVRlZPMEZCUTFRN1FVRkRRVHRCUVVOQlpDdzBRa0ZCTUVKakxFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ1JpdzJRa0ZCTjBJc1EwRkJNVUk3UVVGRFFUdEJRVU5FTEVOQlRrUTdPMEZCVTBGSExGbEJRVmx5UWl4VFFVRmFMRU5CUVhOQ2QwSXNTVUZCZEVJc1IwRkJOa0lzV1VGQldUdEJRVU40UXl4TFFVRkhUQ3hOUVVGSUxFVkJRVlU3UVVGRFZFRXNVMEZCVDAwc2IwSkJRVkFzUTBGQk5FSndRaXgxUWtGQk5VSTdRVUZEUVR0QlFVTkVMRU5CU2tRN08wRkJUVUZuUWl4WlFVRlpja0lzVTBGQldpeERRVUZ6UWtrc1kwRkJkRUlzUjBGQmRVTXNXVUZCV1R0QlFVTnNSQ3hSUVVGUFJ5eG5Ra0ZCWjBKSExFMUJRV2hDTEVkQlFYbENMRU5CUVdoRE8wRkJRMEVzUTBGR1JEczdRVUZKUVN4SlFVRk5aMElzYjBKQlFXOUNMRWxCUVVsTUxGZEJRVW9zUlVGQk1VSTdPMnRDUVVWbFN5eHBRaUlzSW1acGJHVWlPaUpzYVdJdmRHbGphMlZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0owYVdOclpYSmNJaXdnVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lkR2xqYTJWeVhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0luUnBZMnRsY2x3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlGeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBd0tUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NBd1pXTTVNRGxtWkRGalptVXpNVGxtWmpVMU5TSXNJbWx0Y0c5eWRDQlVhV05yWlhJZ1puSnZiU0FuTGk5VWFXTnJSVzUwY25rbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlVhV05yWlhJN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZhVzVrWlhndWFuTWlMQ0pwYlhCdmNuUWdiV0Z1WVdkbGNpQm1jbTl0SUNjdUwwMWhibUZuWlhJbk8xeHVYRzR2THlCMGIwUnZPaUJ6ZFhCd2IzSjBJR0p2ZEdnZ1kyRnNiR0poWTJzZ1lXNWtJSEJ5YjIxcGMyVmNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZScFkydEZiblJ5ZVZ4dWUxeHVYSFF2S2lwY2JseDBJQ29nUUhCaGNtRnRJSHR2WW1wbFkzUjlJR052Ym5SbGVIUWdMU0JVYUdVZ1hDSjBhR2x6WENJZ1lYSm5kVzFsYm5RZ1ptOXlJSFJvWlNCc2FYTjBaVzVsY2lCbWRXNWpkR2x2Ymk1Y2JseDBJQ29nUUhCaGNtRnRJSHRtZFc1amRHbHZibjBnYkdsemRHVnVaWEl1WEc1Y2RDQXFMMXh1WEhSamIyNXpkSEoxWTNSdmNpaGpiMjUwWlhoMExDQnNhWE4wWlc1bGNpd2dZMkZzYkdKaFkyc2dQU0J1ZFd4c0xDQndjbWx2Y21sMGVTQTlJREFwWEc1Y2RIdGNibHgwWEhSMGFHbHpMbU52Ym5SbGVIUWdQU0JqYjI1MFpYaDBPMXh1WEhSY2RIUm9hWE11YkdsemRHVnVaWElnUFNCc2FYTjBaVzVsY2p0Y2JseDBYSFIwYUdsekxtTmhiR3hpWVdOcklEMGdZMkZzYkdKaFkyczdYRzVjZEZ4MGRHaHBjeTV3Y21sdmNtbDBlU0E5SUhCeWFXOXlhWFI1TzF4dVhIUjlYRzVjYm4xY2JseHVMeW90TFMwdElGQjFZbXhwWTN4UWNtOTBiM1I1Y0dVZ1RXVjBhRzlrY3lBdExTMHFMMXh1WEc1VWFXTnJSVzUwY25rdWNISnZkRzkwZVhCbExtUnBjM0J2YzJVZ1BTQm1kVzVqZEdsdmJpZ3BlMXh1WEhSMGFHbHpMbU52Ym5SbGVIUWdQU0J1ZFd4c08xeHVYSFIwYUdsekxteHBjM1JsYm1WeUlEMGdiblZzYkR0Y2JseDBkR2hwY3k1allXeHNZbUZqYXlBOUlHNTFiR3c3WEc1Y2RIUm9hWE11Y0hKcGIzSnBkSGtnUFNCdWRXeHNPMXh1ZlR0Y2JseHVWR2xqYTBWdWRISjVMbkJ5YjNSdmRIbHdaUzVsZUdWamRYUmxJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBiV0Z1WVdkbGNpNWhaR1FvZEdocGN5azdYRzU5TzF4dVhHNVVhV05yUlc1MGNua3VjSEp2ZEc5MGVYQmxMbWRsZEUxaGVGQnlhVzl5YVhSNUlEMGdablZ1WTNScGIyNG9LWHRjYmx4MGNtVjBkWEp1SUcxaGJtRm5aWEl1WjJWMFRXRjRVSEpwYjNKcGRIa29LVHRjYm4wN1hHNWNibHh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDFScFkydEZiblJ5ZVM1cWN5SXNJbHh1YkdWMElISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSUQwZ1RtRk9PMXh1WTI5dWMzUWdjSEpwYjNKcGRIbEZiblJ5YVdWeklEMGdXMjUxYkd3c0lHNTFiR3dzSUc1MWJHd3NJRzUxYkd4ZE8xeHVYRzVtZFc1amRHbHZiaUJ2YmxScFkyc29LWHRjYmx4MFptOXlLR3hsZENCcGJtUmxlQ0E5SURBZ095QnBibVJsZUNBOElIQnlhVzl5YVhSNVJXNTBjbWxsY3k1c1pXNW5kR2c3SUdsdVpHVjRLeXNwZTF4dVhIUmNkR3hsZENCMGFXTnJSVzUwY21sbGN5QTlJSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHBibVJsZUYwN1hHNWNkRngwYVdZb2RHbGphMFZ1ZEhKcFpYTWdKaVlnZEdsamEwVnVkSEpwWlhNdWJHVnVaM1JvSUQ0Z01Da2dlMXh1WEhSY2RGeDBaWGhsWTNWMFpWUnBZMnRGYm5SeWFXVnpLSFJwWTJ0RmJuUnlhV1Z6S1R0Y2JseDBYSFJjZEM4dlEyeGxZWElnZEdobGJTQnZibU5sSUdWNFpXTjFkR1ZrWEc1Y2RGeDBYSFJ3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJhVzVrWlhoZElEMGdiblZzYkR0Y2JseDBYSFI5WEc1Y2RIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1pYaGxZM1YwWlZScFkydEZiblJ5YVdWektIUnBZMnRGYm5SeWFXVnpLWHRjYmx4MEx5OGdhVzF3YjNKMFlXNTBJSFJ2SUhWelpTQm1iM0l0Ykc5dmNGeHVYSFF2THlCMGFXTnJSVzUwY21sbGN5Qm5jbTkzY3lCa2VXNWhiV2xqWVd4c2VTQmllU0J2Ym1VZ2IyWWdhWFJ6SUdWdWRISjVYRzVjZEM4dklHWnZjaUJsZUdGdGNHeGxPaUJzWlhRZ2MyRjVJSGRsSUdoaGRtVWdiMjVsSUdWdWRISjVMQ0JoYm1RZ1pYaGxZM1YwYVc1bklIUm9ZWFFnWlc1MGNua2diV2xuYUhRZ1lXUmtjeUJoYm05MGFHVnlJR1Z1ZEhKNVhHNWNkQzh2SUhkcGRHZ2diV0Z3SUdaMWJtTjBhVzl1SUhkbElHTmhiblFnWlhobFkzVjBaU0JrZVc1aGJXbGpZV3hzZVNCbmNtOTNhVzVuSUdWdWRISnBaWE11WEc1Y2RHWnZjaWhzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhV05yUlc1MGNtbGxjeTVzWlc1bmRHZzdJR2tyS3lsN1hHNWNkRngwWTI5dWMzUWdkR2xqYTBWdWRISjVJRDBnZEdsamEwVnVkSEpwWlhOYmFWMDdYRzVjZEZ4MGRHbGphMFZ1ZEhKNUxteHBjM1JsYm1WeUxtTmhiR3dvZEdsamEwVnVkSEo1TG1OdmJuUmxlSFFnZkh3Z2RHbGphMFZ1ZEhKNUxteHBjM1JsYm1WeVd5ZDBhR2x6SjEwcE8xeHVYSFJjZEdsbUlDaDBhV05yUlc1MGNua3VZMkZzYkdKaFkyc3BJSHRjYmx4MFhIUmNkSFJwWTJ0RmJuUnllUzVqWVd4c1ltRmpheTVqWVd4c0tIUnBZMnRGYm5SeWVTNWpZV3hzWW1GamExc25kR2hwY3lkZEtUdGNibHgwWEhSOVhHNWNkSDFjYm4xY2JseHVablZ1WTNScGIyNGdhWE5CWkdSbFpFRnNjbVZoWkhrb1pXNTBjbmtzZEdsamEwVnVkSEpwWlhNcGUxeHVYSFF2THlCcGJYQnZjblJoYm5RZ2RHOGdkWE5sSUdadmNpMXNiMjl3WEc1Y2RDOHZJSFJwWTJ0RmJuUnlhV1Z6SUdkeWIzZHpJR1I1Ym1GdGFXTmhiR3g1SUdKNUlHOXVaU0J2WmlCcGRITWdaVzUwY25sY2JseDBMeThnWm05eUlHVjRZVzF3YkdVNklHeGxkQ0J6WVhrZ2QyVWdhR0YyWlNCdmJtVWdaVzUwY25rc0lHRnVaQ0JsZUdWamRYUnBibWNnZEdoaGRDQmxiblJ5ZVNCdGFXZG9kQ0JoWkdSeklHRnViM1JvWlhJZ1pXNTBjbmxjYmx4MEx5OGdkMmwwYUNCdFlYQWdablZ1WTNScGIyNGdkMlVnWTJGdWRDQmxlR1ZqZFhSbElHUjVibUZ0YVdOaGJHeDVJR2R5YjNkcGJtY2daVzUwY21sbGN5NWNibHgwWm05eUtHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhScFkydEZiblJ5YVdWekxteGxibWQwYURzZ2FTc3JLWHRjYmx4MFhIUmpiMjV6ZENCMGFXTnJSVzUwY25rZ1BTQjBhV05yUlc1MGNtbGxjMXRwWFR0Y2JseDBYSFJwWmlobGJuUnllUzVqYjI1MFpYaDBJRDA5UFNCMGFXTnJSVzUwY25rdVkyOXVkR1Y0ZENBbUppQmxiblJ5ZVM1c2FYTjBaVzVsY2lBOVBUMGdkR2xqYTBWdWRISjVMbXhwYzNSbGJtVnlLWHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBjblZsTzF4dVhIUmNkSDFjYmx4MGZWeHVYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVTmhiR3hpWVdOcktDbDdYRzVjZEc5dVZHbGpheWdwTzF4dVhIUnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNBOUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9jbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsUTJGc2JHSmhZMnNwTzF4dWZWeHVYRzVqYkdGemN5QlVhV05yVFdGdVlXZGxjaUI3WEc1Y2RHTnZibk4wY25WamRHOXlLQ2w3WEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnTURzZ0x5OGdabTl5SUZkcGJtUnZkM01nUlc1MlhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUW9LVHRjYmx4MGZWeHVmVnh1WEc1Y2JsUnBZMnROWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVoWkdRZ1BTQm1kVzVqZEdsdmJpQW9kR2xqYTBWdWRISjVLU0I3WEc1Y2RHTnZibk4wSUhzZ2NISnBiM0pwZEhrc0lHTmhiR3hpWVdOcklIMGdQU0IwYVdOclJXNTBjbms3WEc1Y2RHbG1LQ0Z3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRLWHRjYmx4MFhIUndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZElEMGdXMTA3WEc1Y2RGeDBZMjl1YzNRZ2RHbGphMFZ1ZEhKcFpYTWdQU0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRPMXh1WEhSY2RIUnBZMnRGYm5SeWFXVnpMbkIxYzJnb2RHbGphMFZ1ZEhKNUtUdGNibHgwWEhSeVpYUjFjbTQ3WEc1Y2RIMWNibHgwWTI5dWMzUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkTzF4dVhIUnBaaWhwYzBGa1pHVmtRV3h5WldGa2VTaDBhV05yUlc1MGNua3NkR2xqYTBWdWRISnBaWE1wS1h0Y2JseDBYSFJqWVd4c1ltRmpheUFtSmlCallXeHNZbUZqYXloMGNuVmxLVHRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFIwYVdOclJXNTBjbWxsY3k1d2RYTm9LSFJwWTJ0RmJuUnllU2s3WEc1Y2RIMWNibjA3WEc1Y2JseHVMeThnVkc5a2J6b2dVM1Z3Y0c5eWRDQm1iM0lnVG05a1pVcFRJRnh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExuTjBZWEowSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhScFppaDNhVzVrYjNjcGUxeHVYSFJjZEM4dklIZHBiR3dnY21WalpXbDJaWE1nZEdsdFpYTjBZVzF3SUdGeklHRnlaM1Z0Wlc1MFhHNWNkRngwTHk5MGIyUnZPaUJNWldGeWJqb2dJSFJvWlNCd2RYSndiM05sSUc5bUlIUnBiV1Z6ZEdGdGNGeHVYSFJjZEhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5azdYRzVjZEgxY2JuMDdYRzVjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbk4wYjNBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RHbG1LSGRwYm1SdmR5bDdYRzVjZEZ4MGQybHVaRzkzTG1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrS1R0Y2JseDBmVnh1ZlR0Y2JseHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1kbGRFMWhlRkJ5YVc5eWFYUjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJ5WlhSMWNtNGdjSEpwYjNKcGRIbEZiblJ5YVdWekxteGxibWQwYUNBdElERTdYRzU5TzF4dVhHNWpiMjV6ZENCemFXNW5iR1YwYjI1SmJuTjBZVzVqWlNBOUlHNWxkeUJVYVdOclRXRnVZV2RsY2lncE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnphVzVuYkdWMGIyNUpibk4wWVc1alpUdGNibHh1WEc1Y2JseHVYRzVjYmx4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwwMWhibUZuWlhJdWFuTWlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBFbnRyeSBmcm9tICcuL2VudHJ5JztcbmltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcih0cmlnZ2VyRG9uZU5vdGlmaWVyKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gdHJpZ2dlckRvbmVOb3RpZmllcjtcbiAgICB9XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuc2V0VHJpZ2dlckRvbmVOb3RpZmllciA9IGZ1bmN0aW9uKHRyaWdnZXJEb25lTm90aWZpZXIpe1xuXHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSB0cmlnZ2VyRG9uZU5vdGlmaWVyO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSBudWxsO1xufVxuXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCByZXNwb25zaWJsZSBmb3IgaW5pdGlhdGluZyB0cmlnZ2VyXG4vLyBpZiBjYWxsZWQgdXNpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIG1ha2UgYSBzeW5jZWQgZWZmZWN0IG9mIGV4ZWN1dGlvblxuRnVuY3Rpb25zLnByb3RvdHlwZS5leGVjdXRlVHJpZ2dlcmVyID0gZnVuY3Rpb24oY29udGV4dCwgZnVuYywgdHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRjb25zdCBfZXhlY3V0ZVRyaWdnZXJlciA9ICh0cmlnZ2VyZWRBZ2FpbiA9IGZhbHNlKT0+e1xuXHRcdGxldCB0aWNrZXI7XG5cdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRmdW5jLmNhbGwoY29udGV4dCk7XG5cdFx0XHRpZih0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdFx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRcdHRyaWdnZXJlckNhbGxiYWNrICYmIHRyaWdnZXJlckNhbGxiYWNrKHRyaWdnZXJlZEFnYWluKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIHRyaWdnZXJlckNhbGxiYWNrLCBudWxsLCAzKTtcblx0XHRcdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgX2V4ZWN1dGVUcmlnZ2VyZXIsIHRyaWdnZXJlckNhbGxiYWNrLCAzKTtcblx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0fVxuXHR9O1xuXHRfZXhlY3V0ZVRyaWdnZXJlcigpO1xufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIGV4ZWN1dGVMYXRlckluTmV4dFRpY2sgPSBmYWxzZSwgcHJpb3JpdHkgPSAwLCBsaXN0ZW5lckNhbGxiYWNrID0gbnVsbCl7XG4gICAgbGV0IGVudHJ5O1xuICAgIGlmIChleGVjdXRlTGF0ZXJJbk5leHRUaWNrKXtcblxuXHQgICAgIGNvbnN0IHRpY2tlckNhbGxiYWNrID0gKHRyaWdnZXJlZEFnYWluID0gZmFsc2UpID0+IHtcblx0XHQgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgLSAxO1xuXHRcdCAgICBpZihsaXN0ZW5lckNhbGxiYWNrKXtcblx0XHRcdCAgICBsaXN0ZW5lckNhbGxiYWNrLmNhbGwobGlzdGVuZXJDYWxsYmFja1sndGhpcyddLCB0cmlnZ2VyZWRBZ2Fpbilcblx0XHQgICAgfVxuXHRcdCAgICBpZiggdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHQgICAgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyICYmICB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIoKTtcblx0XHQgICAgfVxuXHQgICAgfTtcbiAgICAgICAgY29uc3QgdGlja2VyID0gbmV3IFRpY2tlcihjb250ZXh0LCBmdW5jLCB0aWNrZXJDYWxsYmFjaywgcHJpb3JpdHkpO1xuXHQgICAgZW50cnkgPSBuZXcgRW50cnkodGlja2VyLCB0aWNrZXIuZXhlY3V0ZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzLnB1c2goZW50cnkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoY29udGV4dCwgZnVuYyk7XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICB9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCxmdW5jLCBjYWxsYmFjayA9IG51bGwpe1xuXHRsZXQgZW50cnksIGk7XG5cdGNvbnN0IHtmcmFtZUVudHJpZXMsIGVudHJpZXN9ID0gdGhpcztcblxuXHRmb3IoaSA9IDA7IGkgPCBmcmFtZUVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHQgICAgY29uc3QgZnJhbWVFbnRyeSA9ICBmcmFtZUVudHJpZXNbaV07XG5cdFx0ZW50cnkgPSBmcmFtZUVudHJ5LmNvbnRleHQ7XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0ZnJhbWVFbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHR9IGVsc2UgeyAvLyBmcmFtZSB0cmlnZ2VyIExpc3RlbmVycyBhcmUgc3RpbGwgcnVubmluZ1xuXHRcdFx0XHRsZXQgdGlja2VyRW50cnk7XG5cdFx0XHRcdGNvbnN0IGRpc3Bvc2VEb25lTm90aWZpZXIgPSAodHJpZ2dlcmVkQWdhaW4gPSBmYWxzZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh0cmlnZ2VyZWRBZ2Fpbik7XG5cdFx0XHRcdFx0fSBlbHNle1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRmb3IoaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRlbnRyeSA9IGVudHJpZXNbaV07XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRlbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS50cmlnZ2VyTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UgPSBbXTtcblxuXHR0aGlzLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuICAgICAgICBpZiAoZW50cnkubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuICAgIH0sIHRoaXMpO1xuXG5cblx0aWYodGhpcy5mcmFtZUVudHJpZXMubGVuZ3RoID4gMCl7XG5cdFx0dGhpcy5mcmFtZUVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuXHRcdFx0aWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ICsgMTtcblx0XHRcdFx0ZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdHRoaXMuZnJhbWVFbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuXHRcdH0sIHRoaXMpXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyICYmIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllcigpO1xuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9mdW5jdGlvbnMuanMiLCJpbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmdW5jKXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmM7XG4gICAgfVxufVxuXG4vLyBNZXRob2QgYXZhaWxhYmxlIG9ubHkgb24gRW50cnkgaW5zdGFuY2Ugbm90IGluIENsYXNzXG5FbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpe1xuICAgIGlmKHRoaXMuY29udGV4dCBpbnN0YW5jZW9mIFRpY2tlcil7XG4gICAgICAgIHRoaXMuY29udGV4dC5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5saXN0ZW5lciA9IG51bGw7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2VudHJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==