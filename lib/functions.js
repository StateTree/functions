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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMDFhYjYzNDc1M2FhZmRjM2ViNCIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwicHJvdG90eXBlIiwiZGlzcG9zZSIsImV4ZWN1dGUiLCJhZGQiLCJnZXRNYXhQcmlvcml0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwiTmFOIiwicHJpb3JpdHlFbnRyaWVzIiwib25UaWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJ0aWNrRW50cmllcyIsImV4ZWN1dGVUaWNrRW50cmllcyIsIm1hcCIsInRpY2tFbnRyeSIsImNhbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlRpY2tNYW5hZ2VyIiwic3RhcnQiLCJwdXNoIiwic3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2luZ2xldG9uSW5zdGFuY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1D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aUJQLFNBQWpCLEVBTmdELENBTW5CO0FBQzdCLENBUEQ7O0FBVUE7QUFDQUssWUFBWW5CLFNBQVosQ0FBc0JvQixLQUF0QixHQUE4QixZQUFZO0FBQ3pDLEtBQUdILE1BQUgsRUFBVTtBQUNUO0FBQ0E7QUFDQVosNEJBQTBCWSxPQUFPQyxxQkFBUCxDQUE2QkYsNkJBQTdCLENBQTFCO0FBQ0E7QUFDRCxDQU5EOztBQVNBRyxZQUFZbkIsU0FBWixDQUFzQnNCLElBQXRCLEdBQTZCLFlBQVk7QUFDeEMsS0FBR0wsTUFBSCxFQUFVO0FBQ1RBLFNBQU9NLG9CQUFQLENBQTRCbEIsdUJBQTVCO0FBQ0E7QUFDRCxDQUpEOztBQU1BYyxZQUFZbkIsU0FBWixDQUFzQkksY0FBdEIsR0FBdUMsWUFBWTtBQUNsRCxRQUFPRyxnQkFBZ0JHLE1BQWhCLEdBQXlCLENBQWhDO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNYyxvQkFBb0IsSUFBSUwsV0FBSixFQUExQjs7a0JBRWVLLGlCIiwiZmlsZSI6ImxpYi90aWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIwMWFiNjM0NzUzYWFmZGMzZWI0IiwiaW1wb3J0IFRpY2tlciBmcm9tICcuL1RpY2tFbnRyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBtYW5hZ2VyIGZyb20gJy4vTWFuYWdlcic7XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja0VudHJ5XG57XG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIGxpc3RlbmVyLCBjYWxsYmFjayA9IG51bGwsIHByaW9yaXR5ID0gMClcblx0e1xuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdH1cblxufVxuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbigpe1xuXHRtYW5hZ2VyLmFkZCh0aGlzKTtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZ2V0TWF4UHJpb3JpdHkgPSBmdW5jdGlvbigpe1xuXHRyZXR1cm4gbWFuYWdlci5nZXRNYXhQcmlvcml0eSgpO1xufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvVGlja0VudHJ5LmpzIiwiXG5sZXQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSBOYU47XG5sZXQgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuXG5mdW5jdGlvbiBvblRpY2soKXtcblx0Zm9yKGxldCBpbmRleCA9IDAgOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4Kyspe1xuXHRcdGxldCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKTtcblx0XHRcdC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG5cdFx0XHRwcmlvcml0eUVudHJpZXNbaW5kZXhdID0gbnVsbDtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKXtcblx0dGlja0VudHJpZXMubWFwKCAodGlja0VudHJ5ICwgaW5kZXggKT0+IHtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCl7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG5jbGFzcyBUaWNrTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsgLy8gZm9yIFdpbmRvd3MgRW52XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblx0fVxufVxuXG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdGNvbnN0IHsgcHJpb3JpdHkgfSA9IHRpY2tFbnRyeTtcblx0aWYoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pe1xuXHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0fVxuXHRjb25zdCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcbn07XG5cblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG59O1xuXG5jb25zdCBzaW5nbGV0b25JbnN0YW5jZSA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25JbnN0YW5jZTtcblxuXG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL01hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9

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

var Functions = function Functions(triggerDoneNotifier, frameTriggerDoneNotifier) {
	_classCallCheck(this, Functions);

	this.entries = [];
	this.frameEntries = [];
	this.executingLaterInNextTickCount = 0;
	this.triggerDoneNotifier = triggerDoneNotifier;
	this.frameTriggerDoneNotifier = frameTriggerDoneNotifier;
};

exports.default = Functions;


Functions.prototype.setTriggerDoneNotifier = function (triggerDoneNotifier, frameTriggerDoneNotifier) {
	this.triggerDoneNotifier = triggerDoneNotifier;
	this.frameTriggerDoneNotifier = frameTriggerDoneNotifier;
};

Functions.prototype.removeTriggerDoneNotifier = function (triggerDoneNotifier, frameTriggerDoneNotifier) {
	this.triggerDoneNotifier = null;
	this.frameTriggerDoneNotifier = null;
};

Functions.prototype.addListener = function (context, func) {
	var executeLaterInNextTick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	var _this = this;

	var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

	var entry = void 0;
	if (executeLaterInNextTick) {

		var tickerCallback = function tickerCallback() {
			_this.executingLaterInNextTickCount = _this.executingLaterInNextTickCount - 1;
			if (callback) {
				callback.call(callback['this']);
			}
			if (_this.executingLaterInNextTickCount === 0) {
				_this.frameTriggerDoneNotifier && _this.frameTriggerDoneNotifier();
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
	var _this2 = this;

	var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	var entry = void 0,
	    i = void 0;
	var frameEntries = this.frameEntries,
	    entries = this.entries;

	var _loop = function _loop() {
		var frameEntry = frameEntries[i];
		entry = frameEntry.context;
		if (entry.context === context && entry.listener === func) {
			if (_this2.executingLaterInNextTickCount === 0) {
				frameEntry.dispose();
			} else {
				// frame trigger Listeners are still running
				var tickerEntry = void 0;
				var disposeDoneNotifier = function disposeDoneNotifier() {
					if (_this2.executingLaterInNextTickCount === 0) {
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
	this.triggerDoneNotifier && this.triggerDoneNotifier();

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
		this.frameTriggerDoneNotifier && this.frameTriggerDoneNotifier();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwYTkzZGJmNGNlZDg3ODQyN2I2ZSIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJ0cmlnZ2VyRG9uZU5vdGlmaWVyIiwiZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyIiwiZW50cmllcyIsImZyYW1lRW50cmllcyIsImV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IiwicHJvdG90eXBlIiwic2V0VHJpZ2dlckRvbmVOb3RpZmllciIsInJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIiLCJhZGRMaXN0ZW5lciIsImNvbnRleHQiLCJmdW5jIiwiZXhlY3V0ZUxhdGVySW5OZXh0VGljayIsInByaW9yaXR5IiwiY2FsbGJhY2siLCJlbnRyeSIsInRpY2tlckNhbGxiYWNrIiwiY2FsbCIsInRpY2tlciIsImV4ZWN1dGUiLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJpIiwiZnJhbWVFbnRyeSIsImxpc3RlbmVyIiwiZGlzcG9zZSIsInRpY2tlckVudHJ5IiwiZGlzcG9zZURvbmVOb3RpZmllciIsImxlbmd0aCIsInRyaWdnZXJMaXN0ZW5lcnMiLCJlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UiLCJmb3JFYWNoIiwiaW5kZXgiLCJhcHBseSIsImVudHJ5SW5kZXgiLCJzcGxpY2UiLCJFbnRyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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VW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGE5M2RiZjRjZWQ4Nzg0MjdiNmUiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59O1xuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRpY2tFbnRyeTtcblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcblx0X01hbmFnZXIyLmRlZmF1bHQuYWRkKHRoaXMpO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIF9NYW5hZ2VyMi5kZWZhdWx0LmdldE1heFByaW9yaXR5KCk7XG59O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gTmFOO1xudmFyIHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcblxuZnVuY3Rpb24gb25UaWNrKCkge1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcykge1xuXHR0aWNrRW50cmllcy5tYXAoZnVuY3Rpb24gKHRpY2tFbnRyeSwgaW5kZXgpIHtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCkge1xuXHRvblRpY2soKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcbn1cblxudmFyIFRpY2tNYW5hZ2VyID0gZnVuY3Rpb24gVGlja01hbmFnZXIoKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrTWFuYWdlcik7XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSAwOyAvLyBmb3IgV2luZG93cyBFbnZcblx0dGhpcy5zdGFydCgpO1xufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5O1xuXG5cdGlmICghcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSkge1xuXHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0fVxuXHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7IC8vIHRvZG86IFN0YWNrIG9yIFF1ZXVlXG59O1xuXG4vLyBUb2RvOiBTdXBwb3J0IGZvciBOb2RlSlMgXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdC8vdG9kbzogTGVhcm46ICB0aGUgcHVycG9zZSBvZiB0aW1lc3RhbXBcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHR9XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHByaW9yaXR5RW50cmllcy5sZW5ndGggLSAxO1xufTtcblxudmFyIHNpbmdsZXRvbkluc3RhbmNlID0gbmV3IFRpY2tNYW5hZ2VyKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNpbmdsZXRvbkluc3RhbmNlO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0JpTURGaFlqWXpORGMxTTJGaFptUmpNMlZpTkNJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwxUnBZMnRGYm5SeWVTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VFdGdVlXZGxjaTVxY3lKZExDSnVZVzFsY3lJNld5SlVhV05yUlc1MGNua2lMQ0pqYjI1MFpYaDBJaXdpYkdsemRHVnVaWElpTENKallXeHNZbUZqYXlJc0luQnlhVzl5YVhSNUlpd2ljSEp2ZEc5MGVYQmxJaXdpWkdsemNHOXpaU0lzSW1WNFpXTjFkR1VpTENKaFpHUWlMQ0puWlhSTllYaFFjbWx2Y21sMGVTSXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lpd2lUbUZPSWl3aWNISnBiM0pwZEhsRmJuUnlhV1Z6SWl3aWIyNVVhV05ySWl3aWFXNWtaWGdpTENKc1pXNW5kR2dpTENKMGFXTnJSVzUwY21sbGN5SXNJbVY0WldOMWRHVlVhV05yUlc1MGNtbGxjeUlzSW0xaGNDSXNJblJwWTJ0RmJuUnllU0lzSW1OaGJHd2lMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlJc0luZHBibVJ2ZHlJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0lzSWxScFkydE5ZVzVoWjJWeUlpd2ljM1JoY25RaUxDSndkWE5vSWl3aWMzUnZjQ0lzSW1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElpd2ljMmx1WjJ4bGRHOXVTVzV6ZEdGdVkyVWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRE4wUkJPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUVVFN096czdPenM3TzBGQlJVRTdTVUZEY1VKQkxGTTdRVUZGY0VJN096czdRVUZKUVN4dFFrRkJXVU1zVDBGQldpeEZRVUZ4UWtNc1VVRkJja0lzUlVGRFFUdEJRVUZCTEV0QlJDdENReXhSUVVNdlFpeDFSVUZFTUVNc1NVRkRNVU03UVVGQlFTeExRVVJuUkVNc1VVRkRhRVFzZFVWQlJESkVMRU5CUXpORU96dEJRVUZCT3p0QlFVTkRMRTFCUVV0SUxFOUJRVXdzUjBGQlpVRXNUMEZCWmp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSkJMRkZCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOQkxFTTdPMEZCU1VZN08ydENRV2hDY1VKS0xGTTdRVUZyUW5KQ1FTeFZRVUZWU3l4VFFVRldMRU5CUVc5Q1F5eFBRVUZ3UWl4SFFVRTRRaXhaUVVGVk8wRkJRM1pETEUxQlFVdE1MRTlCUVV3c1IwRkJaU3hKUVVGbU8wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMElzU1VGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBFc1EwRk1SRHM3UVVGUFFVb3NWVUZCVlVzc1UwRkJWaXhEUVVGdlFrVXNUMEZCY0VJc1IwRkJPRUlzV1VGQlZUdEJRVU4yUXl4dFFrRkJVVU1zUjBGQlVpeERRVUZaTEVsQlFWbzdRVUZEUVN4RFFVWkVPenRCUVVsQlVpeFZRVUZWU3l4VFFVRldMRU5CUVc5Q1NTeGpRVUZ3UWl4SFFVRnhReXhaUVVGVk8wRkJRemxETEZGQlFVOHNhMEpCUVZGQkxHTkJRVklzUlVGQlVEdEJRVU5CTEVOQlJrUXNRenM3T3pzN096czdPenM3T3pzN08wRkRMMEpCTEVsQlFVbERMREJDUVVFd1FrTXNSMEZCT1VJN1FVRkRRU3hKUVVGSlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGRUxFVkJRVThzU1VGQlVDeEZRVUZoTEVsQlFXSXNSVUZCYlVJc1NVRkJia0lzUTBGQmRFSTdPMEZCUlVFc1UwRkJVME1zVFVGQlZDeEhRVUZwUWp0QlFVTm9RaXhOUVVGSkxFbEJRVWxETEZGQlFWRXNRMEZCYUVJc1JVRkJiMEpCTEZGQlFWRkdMR2RDUVVGblFrY3NUVUZCTlVNc1JVRkJiMFJFTEU5QlFYQkVMRVZCUVRSRU8wRkJRek5FTEUxQlFVbEZMR05CUVdOS0xHZENRVUZuUWtVc1MwRkJhRUlzUTBGQmJFSTdRVUZEUVN4TlFVRkhSU3hsUVVGbFFTeFpRVUZaUkN4TlFVRmFMRWRCUVhGQ0xFTkJRWFpETEVWQlFUQkRPMEZCUTNwRFJTeHpRa0ZCYlVKRUxGZEJRVzVDTzBGQlEwRTdRVUZEUVVvc2JVSkJRV2RDUlN4TFFVRm9RaXhKUVVGNVFpeEpRVUY2UWp0QlFVTkJPMEZCUTBRN1FVRkRSRHM3UVVGRlJDeFRRVUZUUnl4clFrRkJWQ3hEUVVFMFFrUXNWMEZCTlVJc1JVRkJkME03UVVGRGRrTkJMR0ZCUVZsRkxFZEJRVm9zUTBGQmFVSXNWVUZCUTBNc1UwRkJSQ3hGUVVGaFRDeExRVUZpTEVWQlFYVkNPMEZCUTNaRFN5eFpRVUZWYWtJc1VVRkJWaXhEUVVGdFFtdENMRWxCUVc1Q0xFTkJRWGRDUkN4VlFVRlZiRUlzVDBGQlZpeEpRVUZ4UW10Q0xGVkJRVlZxUWl4UlFVRldMRU5CUVcxQ0xFMUJRVzVDTEVOQlFUZERPMEZCUTBFc1RVRkJTV2xDTEZWQlFWVm9RaXhSUVVGa0xFVkJRWGRDTzBGQlEzWkNaMElzWVVGQlZXaENMRkZCUVZZc1EwRkJiVUpwUWl4SlFVRnVRaXhEUVVGM1FrUXNWVUZCVldoQ0xGRkJRVllzUTBGQmJVSXNUVUZCYmtJc1EwRkJlRUk3UVVGRFFUdEJRVU5FTEVWQlRFUTdRVUZOUVRzN1FVRkZSQ3hUUVVGVGEwSXNOa0pCUVZRc1IwRkJkME03UVVGRGRrTlNPMEZCUTBGSUxESkNRVUV3UWxrc1QwRkJUME1zY1VKQlFWQXNRMEZCTmtKR0xEWkNRVUUzUWl4RFFVRXhRanRCUVVOQk96dEpRVVZMUnl4WExFZEJRMHdzZFVKQlFXRTdRVUZCUVRzN1FVRkRUbVFzTWtKQlFUQkNMRU5CUVRGQ0xFTkJSRTBzUTBGRGRVSTdRVUZETjBJc1RVRkJTMlVzUzBGQlREdEJRVU5PTEVNN08wRkJTVVpFTEZsQlFWbHVRaXhUUVVGYUxFTkJRWE5DUnl4SFFVRjBRaXhIUVVFMFFpeFZRVUZWVnl4VFFVRldMRVZCUVhGQ08wRkJRVUVzUzBGRGVFTm1MRkZCUkhkRExFZEJRek5DWlN4VFFVUXlRaXhEUVVONFEyWXNVVUZFZDBNN08wRkJSV2hFTEV0QlFVY3NRMEZCUTFFc1owSkJRV2RDVWl4UlFVRm9RaXhEUVVGS0xFVkJRVGhDTzBGQlF6ZENVU3hyUWtGQlowSlNMRkZCUVdoQ0xFbEJRVFJDTEVWQlFUVkNPMEZCUTBFN1FVRkRSQ3hMUVVGTldTeGpRVUZqU2l4blFrRkJaMEpTTEZGQlFXaENMRU5CUVhCQ08wRkJRMEZaTEdGQlFWbFZMRWxCUVZvc1EwRkJhVUpRTEZOQlFXcENMRVZCVG1kRUxFTkJUVzVDTzBGQlF6ZENMRU5CVUVRN08wRkJWVUU3UVVGRFFVc3NXVUZCV1c1Q0xGTkJRVm9zUTBGQmMwSnZRaXhMUVVGMFFpeEhRVUU0UWl4WlFVRlpPMEZCUTNwRExFdEJRVWRJTEUxQlFVZ3NSVUZCVlR0QlFVTlVPMEZCUTBFN1FVRkRRVm9zTkVKQlFUQkNXU3hQUVVGUFF5eHhRa0ZCVUN4RFFVRTJRa1lzTmtKQlFUZENMRU5CUVRGQ08wRkJRMEU3UVVGRFJDeERRVTVFT3p0QlFWTkJSeXhaUVVGWmJrSXNVMEZCV2l4RFFVRnpRbk5DTEVsQlFYUkNMRWRCUVRaQ0xGbEJRVms3UVVGRGVFTXNTMEZCUjB3c1RVRkJTQ3hGUVVGVk8wRkJRMVJCTEZOQlFVOU5MRzlDUVVGUUxFTkJRVFJDYkVJc2RVSkJRVFZDTzBGQlEwRTdRVUZEUkN4RFFVcEVPenRCUVUxQll5eFpRVUZaYmtJc1UwRkJXaXhEUVVGelFra3NZMEZCZEVJc1IwRkJkVU1zV1VGQldUdEJRVU5zUkN4UlFVRlBSeXhuUWtGQlowSkhMRTFCUVdoQ0xFZEJRWGxDTEVOQlFXaERPMEZCUTBFc1EwRkdSRHM3UVVGSlFTeEpRVUZOWXl4dlFrRkJiMElzU1VGQlNVd3NWMEZCU2l4RlFVRXhRanM3YTBKQlJXVkxMR2xDSWl3aVptbHNaU0k2SW14cFlpOTBhV05yWlhJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hjSW5ScFkydGxjbHdpTENCYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0owYVdOclpYSmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2lkR2xqYTJWeVhDSmRJRDBnWm1GamRHOXllU2dwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b0tTQjdYRzV5WlhSMWNtNGdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dlMXh1SUZ4MFhIUmNkRngwWTI5dVptbG5kWEpoWW14bE9pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFhIUm5aWFE2SUdkbGRIUmxjbHh1SUZ4MFhIUmNkSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEQXBPMXh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lHSXdNV0ZpTmpNME56VXpZV0ZtWkdNelpXSTBJaXdpYVcxd2IzSjBJRlJwWTJ0bGNpQm1jbTl0SUNjdUwxUnBZMnRGYm5SeWVTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRlJwWTJ0bGNqdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlwYm1SbGVDNXFjeUlzSW1sdGNHOXlkQ0J0WVc1aFoyVnlJR1p5YjIwZ0p5NHZUV0Z1WVdkbGNpYzdYRzVjYmk4dklIUnZSRzg2SUhOMWNIQnZjblFnWW05MGFDQmpZV3hzWW1GamF5QmhibVFnY0hKdmJXbHpaVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZHbGphMFZ1ZEhKNVhHNTdYRzVjZEM4cUtseHVYSFFnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnWTI5dWRHVjRkQ0F0SUZSb1pTQmNJblJvYVhOY0lpQmhjbWQxYldWdWRDQm1iM0lnZEdobElHeHBjM1JsYm1WeUlHWjFibU4wYVc5dUxseHVYSFFnS2lCQWNHRnlZVzBnZTJaMWJtTjBhVzl1ZlNCc2FYTjBaVzVsY2k1Y2JseDBJQ292WEc1Y2RHTnZibk4wY25WamRHOXlLR052Ym5SbGVIUXNJR3hwYzNSbGJtVnlMQ0JqWVd4c1ltRmpheUE5SUc1MWJHd3NJSEJ5YVc5eWFYUjVJRDBnTUNsY2JseDBlMXh1WEhSY2RIUm9hWE11WTI5dWRHVjRkQ0E5SUdOdmJuUmxlSFE3WEc1Y2RGeDBkR2hwY3k1c2FYTjBaVzVsY2lBOUlHeHBjM1JsYm1WeU8xeHVYSFJjZEhSb2FYTXVZMkZzYkdKaFkyc2dQU0JqWVd4c1ltRmphenRjYmx4MFhIUjBhR2x6TG5CeWFXOXlhWFI1SUQwZ2NISnBiM0pwZEhrN1hHNWNkSDFjYmx4dWZWeHVYRzR2S2kwdExTMGdVSFZpYkdsamZGQnliM1J2ZEhsd1pTQk5aWFJvYjJSeklDMHRMU292WEc1Y2JsUnBZMnRGYm5SeWVTNXdjbTkwYjNSNWNHVXVaR2x6Y0c5elpTQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RIUm9hWE11WTI5dWRHVjRkQ0E5SUc1MWJHdzdYRzVjZEhSb2FYTXViR2x6ZEdWdVpYSWdQU0J1ZFd4c08xeHVYSFIwYUdsekxtTmhiR3hpWVdOcklEMGdiblZzYkR0Y2JseDBkR2hwY3k1d2NtbHZjbWwwZVNBOUlHNTFiR3c3WEc1OU8xeHVYRzVVYVdOclJXNTBjbmt1Y0hKdmRHOTBlWEJsTG1WNFpXTjFkR1VnUFNCbWRXNWpkR2x2YmlncGUxeHVYSFJ0WVc1aFoyVnlMbUZrWkNoMGFHbHpLVHRjYm4wN1hHNWNibFJwWTJ0RmJuUnllUzV3Y205MGIzUjVjR1V1WjJWMFRXRjRVSEpwYjNKcGRIa2dQU0JtZFc1amRHbHZiaWdwZTF4dVhIUnlaWFIxY200Z2JXRnVZV2RsY2k1blpYUk5ZWGhRY21sdmNtbDBlU2dwTzF4dWZUdGNibHh1WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlZHbGphMFZ1ZEhKNUxtcHpJaXdpWEc1c1pYUWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRZ1BTQk9ZVTQ3WEc1c1pYUWdjSEpwYjNKcGRIbEZiblJ5YVdWeklEMGdXMjUxYkd3c0lHNTFiR3dzSUc1MWJHd3NJRzUxYkd4ZE8xeHVYRzVtZFc1amRHbHZiaUJ2YmxScFkyc29LWHRjYmx4MFptOXlLR3hsZENCcGJtUmxlQ0E5SURBZ095QnBibVJsZUNBOElIQnlhVzl5YVhSNVJXNTBjbWxsY3k1c1pXNW5kR2c3SUdsdVpHVjRLeXNwZTF4dVhIUmNkR3hsZENCMGFXTnJSVzUwY21sbGN5QTlJSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHBibVJsZUYwN1hHNWNkRngwYVdZb2RHbGphMFZ1ZEhKcFpYTWdKaVlnZEdsamEwVnVkSEpwWlhNdWJHVnVaM1JvSUQ0Z01Da2dlMXh1WEhSY2RGeDBaWGhsWTNWMFpWUnBZMnRGYm5SeWFXVnpLSFJwWTJ0RmJuUnlhV1Z6S1R0Y2JseDBYSFJjZEM4dlEyeGxZWElnZEdobGJTQnZibU5sSUdWNFpXTjFkR1ZrWEc1Y2RGeDBYSFJ3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJhVzVrWlhoZElEMGdiblZzYkR0Y2JseDBYSFI5WEc1Y2RIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1pYaGxZM1YwWlZScFkydEZiblJ5YVdWektIUnBZMnRGYm5SeWFXVnpLWHRjYmx4MGRHbGphMFZ1ZEhKcFpYTXViV0Z3S0NBb2RHbGphMFZ1ZEhKNUlDd2dhVzVrWlhnZ0tUMCtJSHRjYmx4MFhIUjBhV05yUlc1MGNua3ViR2x6ZEdWdVpYSXVZMkZzYkNoMGFXTnJSVzUwY25rdVkyOXVkR1Y0ZENCOGZDQjBhV05yUlc1MGNua3ViR2x6ZEdWdVpYSmJKM1JvYVhNblhTazdYRzVjZEZ4MGFXWWdLSFJwWTJ0RmJuUnllUzVqWVd4c1ltRmpheWtnZTF4dVhIUmNkRngwZEdsamEwVnVkSEo1TG1OaGJHeGlZV05yTG1OaGJHd29kR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJXeWQwYUdsekoxMHBPMXh1WEhSY2RIMWNibHgwZlNrN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVTmhiR3hpWVdOcktDbDdYRzVjZEc5dVZHbGpheWdwTzF4dVhIUnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNBOUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9jbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsUTJGc2JHSmhZMnNwTzF4dWZWeHVYRzVqYkdGemN5QlVhV05yVFdGdVlXZGxjaUI3WEc1Y2RHTnZibk4wY25WamRHOXlLQ2w3WEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnTURzZ0x5OGdabTl5SUZkcGJtUnZkM01nUlc1MlhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUW9LVHRjYmx4MGZWeHVmVnh1WEc1Y2JsUnBZMnROWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVoWkdRZ1BTQm1kVzVqZEdsdmJpQW9kR2xqYTBWdWRISjVLU0I3WEc1Y2RHTnZibk4wSUhzZ2NISnBiM0pwZEhrZ2ZTQTlJSFJwWTJ0RmJuUnllVHRjYmx4MGFXWW9JWEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMHBlMXh1WEhSY2RIQnlhVzl5YVhSNVJXNTBjbWxsYzF0d2NtbHZjbWwwZVYwZ1BTQmJYVHRjYmx4MGZWeHVYSFJqYjI1emRDQjBhV05yUlc1MGNtbGxjeUE5SUhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjA3WEc1Y2RIUnBZMnRGYm5SeWFXVnpMbkIxYzJnb2RHbGphMFZ1ZEhKNUtUc2dMeThnZEc5a2J6b2dVM1JoWTJzZ2IzSWdVWFZsZFdWY2JuMDdYRzVjYmx4dUx5OGdWRzlrYnpvZ1UzVndjRzl5ZENCbWIzSWdUbTlrWlVwVElGeHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG5OMFlYSjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJwWmloM2FXNWtiM2NwZTF4dVhIUmNkQzh2SUhkcGJHd2djbVZqWldsMlpYTWdkR2x0WlhOMFlXMXdJR0Z6SUdGeVozVnRaVzUwWEc1Y2RGeDBMeTkwYjJSdk9pQk1aV0Z5YmpvZ0lIUm9aU0J3ZFhKd2IzTmxJRzltSUhScGJXVnpkR0Z0Y0Z4dVhIUmNkSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2h5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlrN1hHNWNkSDFjYm4wN1hHNWNibHh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExuTjBiM0FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEdsbUtIZHBibVJ2ZHlsN1hHNWNkRngwZDJsdVpHOTNMbU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsS0hKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtLVHRjYmx4MGZWeHVmVHRjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbWRsZEUxaGVGQnlhVzl5YVhSNUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUnlaWFIxY200Z2NISnBiM0pwZEhsRmJuUnlhV1Z6TG14bGJtZDBhQ0F0SURFN1hHNTlPMXh1WEc1amIyNXpkQ0J6YVc1bmJHVjBiMjVKYm5OMFlXNWpaU0E5SUc1bGR5QlVhV05yVFdGdVlXZGxjaWdwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCemFXNW5iR1YwYjI1SmJuTjBZVzVqWlR0Y2JseHVYRzVjYmx4dVhHNWNibHh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDAxaGJtRm5aWEl1YW5NaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aWNrZXIvbGliL3RpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBGdW5jdGlvbnMgZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IEVudHJ5IGZyb20gJy4vZW50cnknO1xuaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKHRyaWdnZXJEb25lTm90aWZpZXIsIGZyYW1lVHJpZ2dlckRvbmVOb3RpZmllcikge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciA9IHRyaWdnZXJEb25lTm90aWZpZXI7XG4gICAgICAgIHRoaXMuZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyID0gZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyO1xuICAgIH1cbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5zZXRUcmlnZ2VyRG9uZU5vdGlmaWVyID0gZnVuY3Rpb24odHJpZ2dlckRvbmVOb3RpZmllciwgZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyKXtcblx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyID0gdHJpZ2dlckRvbmVOb3RpZmllcjtcblx0dGhpcy5mcmFtZVRyaWdnZXJEb25lTm90aWZpZXIgPSBmcmFtZVRyaWdnZXJEb25lTm90aWZpZXI7XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlVHJpZ2dlckRvbmVOb3RpZmllciA9IGZ1bmN0aW9uKHRyaWdnZXJEb25lTm90aWZpZXIsIGZyYW1lVHJpZ2dlckRvbmVOb3RpZmllcil7XG5cdHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciA9IG51bGw7XG5cdHRoaXMuZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyID0gbnVsbDtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIGV4ZWN1dGVMYXRlckluTmV4dFRpY2sgPSBmYWxzZSwgcHJpb3JpdHkgPSAwLCBjYWxsYmFjayA9IG51bGwpe1xuICAgIGxldCBlbnRyeTtcbiAgICBpZiAoZXhlY3V0ZUxhdGVySW5OZXh0VGljayl7XG5cblx0ICAgICBjb25zdCB0aWNrZXJDYWxsYmFjayA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgLSAxO1xuXHRcdCAgICBpZihjYWxsYmFjayl7XG5cdFx0ICAgIFx0Y2FsbGJhY2suY2FsbChjYWxsYmFja1sndGhpcyddKVxuXHRcdCAgICB9XG5cdFx0ICAgIGlmKCB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdCAgICB0aGlzLmZyYW1lVHJpZ2dlckRvbmVOb3RpZmllciAmJiAgdGhpcy5mcmFtZVRyaWdnZXJEb25lTm90aWZpZXIoKTtcblx0XHQgICAgfVxuXHQgICAgfTtcbiAgICAgICAgY29uc3QgdGlja2VyID0gbmV3IFRpY2tlcihjb250ZXh0LCBmdW5jLCB0aWNrZXJDYWxsYmFjaywgcHJpb3JpdHkpO1xuXHQgICAgZW50cnkgPSBuZXcgRW50cnkodGlja2VyLCB0aWNrZXIuZXhlY3V0ZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzLnB1c2goZW50cnkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoY29udGV4dCwgZnVuYyk7XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICB9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCxmdW5jLCBjYWxsYmFjayA9IG51bGwpe1xuXHRsZXQgZW50cnksIGk7XG5cdGNvbnN0IHtmcmFtZUVudHJpZXMsIGVudHJpZXN9ID0gdGhpcztcblxuXHRmb3IoaSA9IDA7IGkgPCBmcmFtZUVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHQgICAgY29uc3QgZnJhbWVFbnRyeSA9ICBmcmFtZUVudHJpZXNbaV07XG5cdFx0ZW50cnkgPSBmcmFtZUVudHJ5LmNvbnRleHQ7XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0ZnJhbWVFbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHR9IGVsc2UgeyAvLyBmcmFtZSB0cmlnZ2VyIExpc3RlbmVycyBhcmUgc3RpbGwgcnVubmluZ1xuXHRcdFx0XHRsZXQgdGlja2VyRW50cnk7XG5cdFx0XHRcdGNvbnN0IGRpc3Bvc2VEb25lTm90aWZpZXIgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fSBlbHNle1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRmb3IoaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRlbnRyeSA9IGVudHJpZXNbaV07XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRlbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS50cmlnZ2VyTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UgPSBbXTtcblxuXHR0aGlzLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuICAgICAgICBpZiAoZW50cnkubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuICAgIH0sIHRoaXMpO1xuXHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgJiYgdGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyKCk7XG5cblx0aWYodGhpcy5mcmFtZUVudHJpZXMubGVuZ3RoID4gMCl7XG5cdFx0dGhpcy5mcmFtZUVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuXHRcdFx0aWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ICsgMTtcblx0XHRcdFx0ZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdHRoaXMuZnJhbWVFbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuXHRcdH0sIHRoaXMpXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5mcmFtZVRyaWdnZXJEb25lTm90aWZpZXIgJiYgdGhpcy5mcmFtZVRyaWdnZXJEb25lTm90aWZpZXIoKTtcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZnVuY3Rpb25zLmpzIiwiaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZnVuYyl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jO1xuICAgIH1cbn1cblxuRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKXtcbiAgICBpZih0aGlzLmNvbnRleHQgaW5zdGFuY2VvZiBUaWNrZXIpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXIgPSBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lbnRyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=