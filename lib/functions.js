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

			var _Manager = __webpack_require__(2);

			var _Manager2 = _interopRequireDefault(_Manager);

exports.default = _TickEntry2.default;

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

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Manager = __webpack_require__(2);

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
				// with function we cant execute dynamically growing entries.
				for (var i = 0; i < tickEntries.length; i++) {
					var tickEntry = tickEntries[i];
					tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYzdlMzk0MTVhYWEyNjc1NmRjNyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwicHJvdG90eXBlIiwiZGlzcG9zZSIsImV4ZWN1dGUiLCJhZGQiLCJnZXRNYXhQcmlvcml0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwiTmFOIiwicHJpb3JpdHlFbnRyaWVzIiwib25UaWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJ0aWNrRW50cmllcyIsImV4ZWN1dGVUaWNrRW50cmllcyIsImkiLCJ0aWNrRW50cnkiLCJjYWxsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2siLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJUaWNrTWFuYWdlciIsInN0YXJ0IiwicHVzaCIsInN0b3AiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNpbmdsZXRvbkluc3RhbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FB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NUI7QUFDQTtBQUNELEtBQU1ZLGNBQWNKLGdCQUFnQlIsUUFBaEIsQ0FBcEI7QUFDQVksYUFBWVUsSUFBWixDQUFpQlAsU0FBakIsRUFOZ0QsQ0FNbkI7QUFDN0IsQ0FQRDs7QUFVQTtBQUNBSyxZQUFZbkIsU0FBWixDQUFzQm9CLEtBQXRCLEdBQThCLFlBQVk7QUFDekMsS0FBR0gsTUFBSCxFQUFVO0FBQ1Q7QUFDQTtBQUNBWiw0QkFBMEJZLE9BQU9DLHFCQUFQLENBQTZCRiw2QkFBN0IsQ0FBMUI7QUFDQTtBQUNELENBTkQ7O0FBU0FHLFlBQVluQixTQUFaLENBQXNCc0IsSUFBdEIsR0FBNkIsWUFBWTtBQUN4QyxLQUFHTCxNQUFILEVBQVU7QUFDVEEsU0FBT00sb0JBQVAsQ0FBNEJsQix1QkFBNUI7QUFDQTtBQUNELENBSkQ7O0FBTUFjLFlBQVluQixTQUFaLENBQXNCSSxjQUF0QixHQUF1QyxZQUFZO0FBQ2xELFFBQU9HLGdCQUFnQkcsTUFBaEIsR0FBeUIsQ0FBaEM7QUFDQSxDQUZEOztBQUlBLElBQU1jLG9CQUFvQixJQUFJTCxXQUFKLEVBQTFCOztrQkFFZUssaUIiLCJmaWxlIjoibGliL3RpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlja2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWM3ZTM5NDE1YWFhMjY3NTZkYzciLCJpbXBvcnQgVGlja2VyIGZyb20gJy4vVGlja0VudHJ5JztcblxuZXhwb3J0IGRlZmF1bHQgVGlja2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9NYW5hZ2VyJztcblxuLy8gdG9Ebzogc3VwcG9ydCBib3RoIGNhbGxiYWNrIGFuZCBwcm9taXNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrRW50cnlcbntcblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29udGV4dCwgbGlzdGVuZXIsIGNhbGxiYWNrID0gbnVsbCwgcHJpb3JpdHkgPSAwKVxuXHR7XG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0XHR0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cdFx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0fVxuXG59XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKXtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cdG1hbmFnZXIuYWRkKHRoaXMpO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBtYW5hZ2VyLmdldE1heFByaW9yaXR5KCk7XG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9UaWNrRW50cnkuanMiLCJcbmxldCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IE5hTjtcbmxldCBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbmZ1bmN0aW9uIG9uVGljaygpe1xuXHRmb3IobGV0IGluZGV4ID0gMCA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKyl7XG5cdFx0bGV0IHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZih0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpe1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBmdW5jdGlvbiB3ZSBjYW50IGV4ZWN1dGUgZHluYW1pY2FsbHkgZ3Jvd2luZyBlbnRyaWVzLlxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGNvbnN0IHRpY2tFbnRyeSA9IHRpY2tFbnRyaWVzW2ldO1xuXHRcdHRpY2tFbnRyeS5saXN0ZW5lci5jYWxsKHRpY2tFbnRyeS5jb250ZXh0IHx8IHRpY2tFbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRpZiAodGlja0VudHJ5LmNhbGxiYWNrKSB7XG5cdFx0XHR0aWNrRW50cnkuY2FsbGJhY2suY2FsbCh0aWNrRW50cnkuY2FsbGJhY2tbJ3RoaXMnXSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCl7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG5jbGFzcyBUaWNrTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsgLy8gZm9yIFdpbmRvd3MgRW52XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblx0fVxufVxuXG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdGNvbnN0IHsgcHJpb3JpdHkgfSA9IHRpY2tFbnRyeTtcblx0aWYoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pe1xuXHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0fVxuXHRjb25zdCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcbn07XG5cblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG59O1xuXG5jb25zdCBzaW5nbGV0b25JbnN0YW5jZSA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25JbnN0YW5jZTtcblxuXG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL01hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9

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

// the function that responsible for initiating trigger
// if called using this function will make a synced effect of execution
Functions.prototype.executeTriggerer = function (context, func) {
	if (this.executingLaterInNextTickCount === 0) {
		func.call(context);
	} else {
		var ticker = new _ticker2.default(this, this.executeTriggerer, null, 3);
		ticker.execute();
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZjEyNjE2MWRlN2QwYjEwN2NiZiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbnMiLCJ0cmlnZ2VyRG9uZU5vdGlmaWVyIiwiZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyIiwiZW50cmllcyIsImZyYW1lRW50cmllcyIsImV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IiwicHJvdG90eXBlIiwic2V0VHJpZ2dlckRvbmVOb3RpZmllciIsInJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIiLCJleGVjdXRlVHJpZ2dlcmVyIiwiY29udGV4dCIsImZ1bmMiLCJjYWxsIiwidGlja2VyIiwiZXhlY3V0ZSIsImFkZExpc3RlbmVyIiwiZXhlY3V0ZUxhdGVySW5OZXh0VGljayIsInByaW9yaXR5IiwiY2FsbGJhY2siLCJlbnRyeSIsInRpY2tlckNhbGxiYWNrIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwiaSIsImZyYW1lRW50cnkiLCJsaXN0ZW5lciIsImRpc3Bvc2UiLCJ0aWNrZXJFbnRyeSIsImRpc3Bvc2VEb25lTm90aWZpZXIiLCJsZW5ndGgiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwiZW50cmllc0luZGV4VG9EaXNwb3NlIiwiZm9yRWFjaCIsImluZGV4IiwiYXBwbHkiLCJlbnRyeUluZGV4Iiwic3BsaWNlIiwiRW50cnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtB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QUE7O0FBQ3RCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtlLFFBQUwsR0FBZ0JkLElBQWhCO0FBQ0gsQzs7QUFHTDs7O2tCQVBxQjBCLEs7QUFRckJBLE1BQU0vQixTQUFOLENBQWdCb0IsT0FBaEIsR0FBMEIsWUFBVztBQUNqQyxRQUFHLEtBQUtoQixPQUFMLDRCQUFILEVBQWtDO0FBQzlCLGFBQUtBLE9BQUwsQ0FBYWdCLE9BQWI7QUFDSDtBQUNELFNBQUtoQixPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtlLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxDQU5ELEMiLCJmaWxlIjoibGliL2Z1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWYxMjYxNjFkZTdkMGIxMDdjYmYiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5cdHJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG5cdFx0LyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG5cdFx0LyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXHRcdC8qKioqKiovXG5cdFx0LyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuXHRcdC8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHRcdFx0LyoqKioqKi9cblx0XHRcdC8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0XHRcdC8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHQvKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblx0XHRcdFx0LyoqKioqKi8gXHRcdH1cblx0XHRcdC8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRcdFx0LyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcblx0XHRcdFx0LyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG5cdFx0XHRcdC8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuXHRcdFx0XHQvKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuXHRcdFx0XHQvKioqKioqLyBcdFx0fTtcblx0XHRcdC8qKioqKiovXG5cdFx0XHQvKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdFx0XHQvKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHQvKioqKioqL1xuXHRcdFx0LyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0XHRcdC8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cdFx0XHQvKioqKioqL1xuXHRcdFx0LyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdFx0XHQvKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuXHRcdFx0LyoqKioqKi8gXHR9XG5cdFx0LyoqKioqKi9cblx0XHQvKioqKioqL1xuXHRcdC8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcblx0XHQvKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cdFx0LyoqKioqKi9cblx0XHQvKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5cdFx0LyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXHRcdC8qKioqKiovXG5cdFx0LyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcblx0XHQvKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuXHRcdFx0LyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcblx0XHRcdFx0LyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcblx0XHRcdFx0XHQvKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0LyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdC8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcblx0XHRcdFx0XHQvKioqKioqLyBcdFx0XHR9KTtcblx0XHRcdFx0LyoqKioqKi8gXHRcdH1cblx0XHRcdC8qKioqKiovIFx0fTtcblx0XHQvKioqKioqL1xuXHRcdC8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcblx0XHQvKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRcdFx0LyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdFx0XHQvKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdFx0XHQvKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRcdFx0LyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcblx0XHRcdC8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuXHRcdFx0LyoqKioqKi8gXHR9O1xuXHRcdC8qKioqKiovXG5cdFx0LyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcblx0XHQvKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblx0XHQvKioqKioqL1xuXHRcdC8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cblx0XHQvKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cdFx0LyoqKioqKi9cblx0XHQvKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHRcdC8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cdFx0LyoqKioqKi8gfSlcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0LyoqKioqKi8gKFtcblx0XHQvKiAwICovXG5cdFx0LyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFx0XHRcInVzZSBzdHJpY3RcIjtcblxuXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHRcdFx0dmFsdWU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0XHRcdHZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cblx0XHRcdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblx0XHRcdGV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cblx0XHRcdC8qKiovIH0pLFxuXHRcdC8qIDEgKi9cblx0XHQvKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XHRcdFwidXNlIHN0cmljdFwiO1xuXG5cblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdFx0XHR2YWx1ZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBfTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0XHRcdHZhciBfTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NYW5hZ2VyKTtcblxuXHRcdFx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHRcdFx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gdG9Ebzogc3VwcG9ydCBib3RoIGNhbGxiYWNrIGFuZCBwcm9taXNlXG5cdFx0XHR2YXIgVGlja0VudHJ5ID1cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0XHRmdW5jdGlvbiBUaWNrRW50cnkoY29udGV4dCwgbGlzdGVuZXIpIHtcblx0XHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cdFx0XHRcdFx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdFx0XHRcdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tFbnRyeSk7XG5cblx0XHRcdFx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRcdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0XHRcdFx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0XHRcdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdFx0XHR9O1xuXG5cdFx0XHQvKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cblx0XHRcdGV4cG9ydHMuZGVmYXVsdCA9IFRpY2tFbnRyeTtcblx0XHRcdFRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcblx0XHRcdH07XG5cblx0XHRcdFRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X01hbmFnZXIyLmRlZmF1bHQuYWRkKHRoaXMpO1xuXHRcdFx0fTtcblxuXHRcdFx0VGlja0VudHJ5LnByb3RvdHlwZS5nZXRNYXhQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIF9NYW5hZ2VyMi5kZWZhdWx0LmdldE1heFByaW9yaXR5KCk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvKioqLyB9KSxcblx0XHQvKiAyICovXG5cdFx0LyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFx0XHRcInVzZSBzdHJpY3RcIjtcblxuXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHRcdFx0dmFsdWU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdFx0XHR2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSBOYU47XG5cdFx0XHR2YXIgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuXG5cdFx0XHRmdW5jdGlvbiBvblRpY2soKSB7XG5cdFx0XHRcdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRcdFx0XHRpZiAodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0ZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKTtcblx0XHRcdFx0XHRcdC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG5cdFx0XHRcdFx0XHRwcmlvcml0eUVudHJpZXNbaW5kZXhdID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKSB7XG5cdFx0XHRcdC8vIGltcG9ydGFudCB0byB1c2UgZm9yLWxvb3Bcblx0XHRcdFx0Ly8gdGlja0VudHJpZXMgZ3Jvd3MgZHluYW1pY2FsbHkgYnkgb25lIG9mIGl0cyBlbnRyeVxuXHRcdFx0XHQvLyBmb3IgZXhhbXBsZTogbGV0IHNheSB3ZSBoYXZlIG9uZSBlbnRyeSwgYW5kIGV4ZWN1dGluZyB0aGF0IGVudHJ5IG1pZ2h0IGFkZHMgYW5vdGhlciBlbnRyeVxuXHRcdFx0XHQvLyB3aXRoIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0XHRcdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdFx0XHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdFx0XHRcdG9uVGljaygpO1xuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0XHRcdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcblxuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXHRcdFx0XHR0aGlzLnN0YXJ0KCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRUaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHRcdFx0XHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0XHRcdFx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0XHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdFx0XHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcblx0XHRcdH07XG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblx0XHRcdFRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHdpbmRvdykge1xuXHRcdFx0XHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0XHRcdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdFRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAod2luZG93KSB7XG5cdFx0XHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0VGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuXHRcdFx0ZXhwb3J0cy5kZWZhdWx0ID0gc2luZ2xldG9uSW5zdGFuY2U7XG5cblx0XHRcdC8qKiovIH0pXG5cdFx0LyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0JsWXpkbE16azBNVFZoWVdFeU5qYzFObVJqTnlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwxUnBZMnRGYm5SeWVTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VFdGdVlXZGxjaTVxY3lKZExDSnVZVzFsY3lJNld5SlVhV05yUlc1MGNua2lMQ0pqYjI1MFpYaDBJaXdpYkdsemRHVnVaWElpTENKallXeHNZbUZqYXlJc0luQnlhVzl5YVhSNUlpd2ljSEp2ZEc5MGVYQmxJaXdpWkdsemNHOXpaU0lzSW1WNFpXTjFkR1VpTENKaFpHUWlMQ0puWlhSTllYaFFjbWx2Y21sMGVTSXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lpd2lUbUZPSWl3aWNISnBiM0pwZEhsRmJuUnlhV1Z6SWl3aWIyNVVhV05ySWl3aWFXNWtaWGdpTENKc1pXNW5kR2dpTENKMGFXTnJSVzUwY21sbGN5SXNJbVY0WldOMWRHVlVhV05yUlc1MGNtbGxjeUlzSW1raUxDSjBhV05yUlc1MGNua2lMQ0pqWVd4c0lpd2ljbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsUTJGc2JHSmhZMnNpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0pVYVdOclRXRnVZV2RsY2lJc0luTjBZWEowSWl3aWNIVnphQ0lzSW5OMGIzQWlMQ0pqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNJc0luTnBibWRzWlhSdmJrbHVjM1JoYm1ObElsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUXNUenRCUTFaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFEwRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1FVRkRka1FzZVVOQlFXbERMR1ZCUVdVN1FVRkRhRVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc09FUkJRWE5FTEN0RVFVRXJSRHM3UVVGRmNrZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPenRCUXpkRVFUczdPenM3T3pzN096czdPenM3T3pzN096dEJRMEZCT3pzN096czdPenRCUVVWQk8wbEJRM0ZDUVN4VE8wRkJSWEJDT3pzN08wRkJTVUVzYlVKQlFWbERMRTlCUVZvc1JVRkJjVUpETEZGQlFYSkNMRVZCUTBFN1FVRkJRU3hMUVVRclFrTXNVVUZETDBJc2RVVkJSREJETEVsQlF6RkRPMEZCUVVFc1MwRkVaMFJETEZGQlEyaEVMSFZGUVVReVJDeERRVU16UkRzN1FVRkJRVHM3UVVGRFF5eE5RVUZMU0N4UFFVRk1MRWRCUVdWQkxFOUJRV1k3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ1FTeFJRVUZvUWp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSkJMRkZCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEUVN4RE96dEJRVWxHT3p0clFrRm9RbkZDU2l4VE8wRkJhMEp5UWtFc1ZVRkJWVXNzVTBGQlZpeERRVUZ2UWtNc1QwRkJjRUlzUjBGQk9FSXNXVUZCVlR0QlFVTjJReXhOUVVGTFRDeFBRVUZNTEVkQlFXVXNTVUZCWmp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENMRWxCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEVOQlRFUTdPMEZCVDBGS0xGVkJRVlZMTEZOQlFWWXNRMEZCYjBKRkxFOUJRWEJDTEVkQlFUaENMRmxCUVZVN1FVRkRka01zYlVKQlFWRkRMRWRCUVZJc1EwRkJXU3hKUVVGYU8wRkJRMEVzUTBGR1JEczdRVUZKUVZJc1ZVRkJWVXNzVTBGQlZpeERRVUZ2UWtrc1kwRkJjRUlzUjBGQmNVTXNXVUZCVlR0QlFVTTVReXhSUVVGUExHdENRVUZSUVN4alFVRlNMRVZCUVZBN1FVRkRRU3hEUVVaRUxFTTdPenM3T3pzN096czdPenM3T3p0QlF5OUNRU3hKUVVGSlF5d3dRa0ZCTUVKRExFZEJRVGxDTzBGQlEwRXNTVUZCU1VNc2EwSkJRV3RDTEVOQlFVTXNTVUZCUkN4RlFVRlBMRWxCUVZBc1JVRkJZU3hKUVVGaUxFVkJRVzFDTEVsQlFXNUNMRU5CUVhSQ096dEJRVVZCTEZOQlFWTkRMRTFCUVZRc1IwRkJhVUk3UVVGRGFFSXNUVUZCU1N4SlFVRkpReXhSUVVGUkxFTkJRV2hDTEVWQlFXOUNRU3hSUVVGUlJpeG5Ra0ZCWjBKSExFMUJRVFZETEVWQlFXOUVSQ3hQUVVGd1JDeEZRVUUwUkR0QlFVTXpSQ3hOUVVGSlJTeGpRVUZqU2l4blFrRkJaMEpGTEV0QlFXaENMRU5CUVd4Q08wRkJRMEVzVFVGQlIwVXNaVUZCWlVFc1dVRkJXVVFzVFVGQldpeEhRVUZ4UWl4RFFVRjJReXhGUVVFd1F6dEJRVU42UTBVc2MwSkJRVzFDUkN4WFFVRnVRanRCUVVOQk8wRkJRMEZLTEcxQ1FVRm5Ra1VzUzBGQmFFSXNTVUZCZVVJc1NVRkJla0k3UVVGRFFUdEJRVU5FTzBGQlEwUTdPMEZCUlVRc1UwRkJVMGNzYTBKQlFWUXNRMEZCTkVKRUxGZEJRVFZDTEVWQlFYZERPMEZCUTNaRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU1N4SlFVRkpSU3hKUVVGSkxFTkJRVm9zUlVGQlpVRXNTVUZCU1VZc1dVRkJXVVFzVFVGQkwwSXNSVUZCZFVOSExFZEJRWFpETEVWQlFUSkRPMEZCUXpGRExFMUJRVTFETEZsQlFWbElMRmxCUVZsRkxFTkJRVm9zUTBGQmJFSTdRVUZEUVVNc1dVRkJWV3BDTEZGQlFWWXNRMEZCYlVKclFpeEpRVUZ1UWl4RFFVRjNRa1FzVlVGQlZXeENMRTlCUVZZc1NVRkJjVUpyUWl4VlFVRlZha0lzVVVGQlZpeERRVUZ0UWl4TlFVRnVRaXhEUVVFM1F6dEJRVU5CTEUxQlFVbHBRaXhWUVVGVmFFSXNVVUZCWkN4RlFVRjNRanRCUVVOMlFtZENMR0ZCUVZWb1FpeFJRVUZXTEVOQlFXMUNhVUlzU1VGQmJrSXNRMEZCZDBKRUxGVkJRVlZvUWl4UlFVRldMRU5CUVcxQ0xFMUJRVzVDTEVOQlFYaENPMEZCUTBFN1FVRkRSRHRCUVVORU96dEJRVVZFTEZOQlFWTnJRaXcyUWtGQlZDeEhRVUYzUXp0QlFVTjJRMUk3UVVGRFFVZ3NNa0pCUVRCQ1dTeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrWXNOa0pCUVRkQ0xFTkJRVEZDTzBGQlEwRTdPMGxCUlV0SExGY3NSMEZEVEN4MVFrRkJZVHRCUVVGQk96dEJRVU5PWkN3eVFrRkJNRUlzUTBGQk1VSXNRMEZFVFN4RFFVTjFRanRCUVVNM1FpeE5RVUZMWlN4TFFVRk1PMEZCUTA0c1F6czdRVUZKUmtRc1dVRkJXVzVDTEZOQlFWb3NRMEZCYzBKSExFZEJRWFJDTEVkQlFUUkNMRlZCUVZWWExGTkJRVllzUlVGQmNVSTdRVUZCUVN4TFFVTjRRMllzVVVGRWQwTXNSMEZETTBKbExGTkJSREpDTEVOQlEzaERaaXhSUVVSM1F6czdRVUZGYUVRc1MwRkJSeXhEUVVGRFVTeG5Ra0ZCWjBKU0xGRkJRV2hDTEVOQlFVb3NSVUZCT0VJN1FVRkROMEpSTEd0Q1FVRm5RbElzVVVGQmFFSXNTVUZCTkVJc1JVRkJOVUk3UVVGRFFUdEJRVU5FTEV0QlFVMVpMR05CUVdOS0xHZENRVUZuUWxJc1VVRkJhRUlzUTBGQmNFSTdRVUZEUVZrc1lVRkJXVlVzU1VGQldpeERRVUZwUWxBc1UwRkJha0lzUlVGT1owUXNRMEZOYmtJN1FVRkROMElzUTBGUVJEczdRVUZWUVR0QlFVTkJTeXhaUVVGWmJrSXNVMEZCV2l4RFFVRnpRbTlDTEV0QlFYUkNMRWRCUVRoQ0xGbEJRVms3UVVGRGVrTXNTMEZCUjBnc1RVRkJTQ3hGUVVGVk8wRkJRMVE3UVVGRFFUdEJRVU5CV2l3MFFrRkJNRUpaTEU5QlFVOURMSEZDUVVGUUxFTkJRVFpDUml3MlFrRkJOMElzUTBGQk1VSTdRVUZEUVR0QlFVTkVMRU5CVGtRN08wRkJVMEZITEZsQlFWbHVRaXhUUVVGYUxFTkJRWE5DYzBJc1NVRkJkRUlzUjBGQk5rSXNXVUZCV1R0QlFVTjRReXhMUVVGSFRDeE5RVUZJTEVWQlFWVTdRVUZEVkVFc1UwRkJUMDBzYjBKQlFWQXNRMEZCTkVKc1FpeDFRa0ZCTlVJN1FVRkRRVHRCUVVORUxFTkJTa1E3TzBGQlRVRmpMRmxCUVZsdVFpeFRRVUZhTEVOQlFYTkNTU3hqUVVGMFFpeEhRVUYxUXl4WlFVRlpPMEZCUTJ4RUxGRkJRVTlITEdkQ1FVRm5Ra2NzVFVGQmFFSXNSMEZCZVVJc1EwRkJhRU03UVVGRFFTeERRVVpFT3p0QlFVbEJMRWxCUVUxakxHOUNRVUZ2UWl4SlFVRkpUQ3hYUVVGS0xFVkJRVEZDT3p0clFrRkZaVXNzYVVJaUxDSm1hV3hsSWpvaWJHbGlMM1JwWTJ0bGNpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z3aWRHbGphMlZ5WENJc0lGdGRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwWlhod2IzSjBjMXRjSW5ScFkydGxjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0owYVdOclpYSmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNTlLU2gwYUdsekxDQm1kVzVqZEdsdmJpZ3BJSHRjYm5KbGRIVnliaUJjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3WEc0Z1hIUmNkRngwWEhSamIyNW1hV2QxY21GaWJHVTZJR1poYkhObExGeHVJRngwWEhSY2RGeDBaVzUxYldWeVlXSnNaVG9nZEhKMVpTeGNiaUJjZEZ4MFhIUmNkR2RsZERvZ1oyVjBkR1Z5WEc0Z1hIUmNkRngwZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OWliMjkwYzNSeVlYQWdaV00zWlRNNU5ERTFZV0ZoTWpZM05UWmtZemNpTENKcGJYQnZjblFnVkdsamEyVnlJR1p5YjIwZ0p5NHZWR2xqYTBWdWRISjVKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVkdsamEyVnlPMXh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJsdVpHVjRMbXB6SWl3aWFXMXdiM0owSUcxaGJtRm5aWElnWm5KdmJTQW5MaTlOWVc1aFoyVnlKenRjYmx4dUx5OGdkRzlFYnpvZ2MzVndjRzl5ZENCaWIzUm9JR05oYkd4aVlXTnJJR0Z1WkNCd2NtOXRhWE5sWEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlVhV05yUlc1MGNubGNibnRjYmx4MEx5b3FYRzVjZENBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCamIyNTBaWGgwSUMwZ1ZHaGxJRndpZEdocGMxd2lJR0Z5WjNWdFpXNTBJR1p2Y2lCMGFHVWdiR2x6ZEdWdVpYSWdablZ1WTNScGIyNHVYRzVjZENBcUlFQndZWEpoYlNCN1puVnVZM1JwYjI1OUlHeHBjM1JsYm1WeUxseHVYSFFnS2k5Y2JseDBZMjl1YzNSeWRXTjBiM0lvWTI5dWRHVjRkQ3dnYkdsemRHVnVaWElzSUdOaGJHeGlZV05ySUQwZ2JuVnNiQ3dnY0hKcGIzSnBkSGtnUFNBd0tWeHVYSFI3WEc1Y2RGeDBkR2hwY3k1amIyNTBaWGgwSUQwZ1kyOXVkR1Y0ZER0Y2JseDBYSFIwYUdsekxteHBjM1JsYm1WeUlEMGdiR2x6ZEdWdVpYSTdYRzVjZEZ4MGRHaHBjeTVqWVd4c1ltRmpheUE5SUdOaGJHeGlZV05yTzF4dVhIUmNkSFJvYVhNdWNISnBiM0pwZEhrZ1BTQndjbWx2Y21sMGVUdGNibHgwZlZ4dVhHNTlYRzVjYmk4cUxTMHRMU0JRZFdKc2FXTjhVSEp2ZEc5MGVYQmxJRTFsZEdodlpITWdMUzB0S2k5Y2JseHVWR2xqYTBWdWRISjVMbkJ5YjNSdmRIbHdaUzVrYVhOd2IzTmxJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBkR2hwY3k1amIyNTBaWGgwSUQwZ2JuVnNiRHRjYmx4MGRHaHBjeTVzYVhOMFpXNWxjaUE5SUc1MWJHdzdYRzVjZEhSb2FYTXVZMkZzYkdKaFkyc2dQU0J1ZFd4c08xeHVYSFIwYUdsekxuQnlhVzl5YVhSNUlEMGdiblZzYkR0Y2JuMDdYRzVjYmxScFkydEZiblJ5ZVM1d2NtOTBiM1I1Y0dVdVpYaGxZM1YwWlNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEcxaGJtRm5aWEl1WVdSa0tIUm9hWE1wTzF4dWZUdGNibHh1VkdsamEwVnVkSEo1TG5CeWIzUnZkSGx3WlM1blpYUk5ZWGhRY21sdmNtbDBlU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkSEpsZEhWeWJpQnRZVzVoWjJWeUxtZGxkRTFoZUZCeWFXOXlhWFI1S0NrN1hHNTlPMXh1WEc1Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOVVhV05yUlc1MGNua3Vhbk1pTENKY2JteGxkQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDQTlJRTVoVGp0Y2JteGxkQ0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTWdQU0JiYm5Wc2JDd2diblZzYkN3Z2JuVnNiQ3dnYm5Wc2JGMDdYRzVjYm1aMWJtTjBhVzl1SUc5dVZHbGpheWdwZTF4dVhIUm1iM0lvYkdWMElHbHVaR1Y0SUQwZ01DQTdJR2x1WkdWNElEd2djSEpwYjNKcGRIbEZiblJ5YVdWekxteGxibWQwYURzZ2FXNWtaWGdyS3lsN1hHNWNkRngwYkdWMElIUnBZMnRGYm5SeWFXVnpJRDBnY0hKcGIzSnBkSGxGYm5SeWFXVnpXMmx1WkdWNFhUdGNibHgwWEhScFppaDBhV05yUlc1MGNtbGxjeUFtSmlCMGFXTnJSVzUwY21sbGN5NXNaVzVuZEdnZ1BpQXdLU0I3WEc1Y2RGeDBYSFJsZUdWamRYUmxWR2xqYTBWdWRISnBaWE1vZEdsamEwVnVkSEpwWlhNcE8xeHVYSFJjZEZ4MEx5OURiR1ZoY2lCMGFHVnRJRzl1WTJVZ1pYaGxZM1YwWldSY2JseDBYSFJjZEhCeWFXOXlhWFI1Ulc1MGNtbGxjMXRwYm1SbGVGMGdQU0J1ZFd4c08xeHVYSFJjZEgxY2JseDBmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmxlR1ZqZFhSbFZHbGphMFZ1ZEhKcFpYTW9kR2xqYTBWdWRISnBaWE1wZTF4dVhIUXZMeUJwYlhCdmNuUmhiblFnZEc4Z2RYTmxJR1p2Y2kxc2IyOXdYRzVjZEM4dklIUnBZMnRGYm5SeWFXVnpJR2R5YjNkeklHUjVibUZ0YVdOaGJHeDVJR0o1SUc5dVpTQnZaaUJwZEhNZ1pXNTBjbmxjYmx4MEx5OGdabTl5SUdWNFlXMXdiR1U2SUd4bGRDQnpZWGtnZDJVZ2FHRjJaU0J2Ym1VZ1pXNTBjbmtzSUdGdVpDQmxlR1ZqZFhScGJtY2dkR2hoZENCbGJuUnllU0J0YVdkb2RDQmhaR1J6SUdGdWIzUm9aWElnWlc1MGNubGNibHgwTHk4Z2QybDBhQ0JtZFc1amRHbHZiaUIzWlNCallXNTBJR1Y0WldOMWRHVWdaSGx1WVcxcFkyRnNiSGtnWjNKdmQybHVaeUJsYm5SeWFXVnpMbHh1WEhSbWIzSW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHbGphMFZ1ZEhKcFpYTXViR1Z1WjNSb095QnBLeXNwZTF4dVhIUmNkR052Ym5OMElIUnBZMnRGYm5SeWVTQTlJSFJwWTJ0RmJuUnlhV1Z6VzJsZE8xeHVYSFJjZEhScFkydEZiblJ5ZVM1c2FYTjBaVzVsY2k1allXeHNLSFJwWTJ0RmJuUnllUzVqYjI1MFpYaDBJSHg4SUhScFkydEZiblJ5ZVM1c2FYTjBaVzVsY2xzbmRHaHBjeWRkS1R0Y2JseDBYSFJwWmlBb2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcktTQjdYRzVjZEZ4MFhIUjBhV05yUlc1MGNua3VZMkZzYkdKaFkyc3VZMkZzYkNoMGFXTnJSVzUwY25rdVkyRnNiR0poWTJ0YkozUm9hWE1uWFNrN1hHNWNkRngwZlZ4dVhIUjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVU5oYkd4aVlXTnJLQ2w3WEc1Y2RHOXVWR2xqYXlncE8xeHVYSFJ5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDQTlJSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFEyRnNiR0poWTJzcE8xeHVmVnh1WEc1amJHRnpjeUJVYVdOclRXRnVZV2RsY2lCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0NsN1hHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSUQwZ01Ec2dMeThnWm05eUlGZHBibVJ2ZDNNZ1JXNTJYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblFvS1R0Y2JseDBmVnh1ZlZ4dVhHNWNibFJwWTJ0TllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1aFpHUWdQU0JtZFc1amRHbHZiaUFvZEdsamEwVnVkSEo1S1NCN1hHNWNkR052Ym5OMElIc2djSEpwYjNKcGRIa2dmU0E5SUhScFkydEZiblJ5ZVR0Y2JseDBhV1lvSVhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjBwZTF4dVhIUmNkSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMGdQU0JiWFR0Y2JseDBmVnh1WEhSamIyNXpkQ0IwYVdOclJXNTBjbWxsY3lBOUlIQnlhVzl5YVhSNVJXNTBjbWxsYzF0d2NtbHZjbWwwZVYwN1hHNWNkSFJwWTJ0RmJuUnlhV1Z6TG5CMWMyZ29kR2xqYTBWdWRISjVLVHNnTHk4Z2RHOWtiem9nVTNSaFkyc2diM0lnVVhWbGRXVmNibjA3WEc1Y2JseHVMeThnVkc5a2J6b2dVM1Z3Y0c5eWRDQm1iM0lnVG05a1pVcFRJRnh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExuTjBZWEowSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhScFppaDNhVzVrYjNjcGUxeHVYSFJjZEM4dklIZHBiR3dnY21WalpXbDJaWE1nZEdsdFpYTjBZVzF3SUdGeklHRnlaM1Z0Wlc1MFhHNWNkRngwTHk5MGIyUnZPaUJNWldGeWJqb2dJSFJvWlNCd2RYSndiM05sSUc5bUlIUnBiV1Z6ZEdGdGNGeHVYSFJjZEhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5azdYRzVjZEgxY2JuMDdYRzVjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbk4wYjNBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RHbG1LSGRwYm1SdmR5bDdYRzVjZEZ4MGQybHVaRzkzTG1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrS1R0Y2JseDBmVnh1ZlR0Y2JseHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1kbGRFMWhlRkJ5YVc5eWFYUjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJ5WlhSMWNtNGdjSEpwYjNKcGRIbEZiblJ5YVdWekxteGxibWQwYUNBdElERTdYRzU5TzF4dVhHNWpiMjV6ZENCemFXNW5iR1YwYjI1SmJuTjBZVzVqWlNBOUlHNWxkeUJVYVdOclRXRnVZV2RsY2lncE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnphVzVuYkdWMGIyNUpibk4wWVc1alpUdGNibHh1WEc1Y2JseHVYRzVjYmx4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwwMWhibUZuWlhJdWFuTWlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBFbnRyeSBmcm9tICcuL2VudHJ5JztcbmltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcih0cmlnZ2VyRG9uZU5vdGlmaWVyLCBmcmFtZVRyaWdnZXJEb25lTm90aWZpZXIpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSB0cmlnZ2VyRG9uZU5vdGlmaWVyO1xuICAgICAgICB0aGlzLmZyYW1lVHJpZ2dlckRvbmVOb3RpZmllciA9IGZyYW1lVHJpZ2dlckRvbmVOb3RpZmllcjtcbiAgICB9XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuc2V0VHJpZ2dlckRvbmVOb3RpZmllciA9IGZ1bmN0aW9uKHRyaWdnZXJEb25lTm90aWZpZXIsIGZyYW1lVHJpZ2dlckRvbmVOb3RpZmllcil7XG5cdHRoaXMudHJpZ2dlckRvbmVOb3RpZmllciA9IHRyaWdnZXJEb25lTm90aWZpZXI7XG5cdHRoaXMuZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyID0gZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZVRyaWdnZXJEb25lTm90aWZpZXIgPSBmdW5jdGlvbih0cmlnZ2VyRG9uZU5vdGlmaWVyLCBmcmFtZVRyaWdnZXJEb25lTm90aWZpZXIpe1xuXHR0aGlzLnRyaWdnZXJEb25lTm90aWZpZXIgPSBudWxsO1xuXHR0aGlzLmZyYW1lVHJpZ2dlckRvbmVOb3RpZmllciA9IG51bGw7XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IHJlc3BvbnNpYmxlIGZvciBpbml0aWF0aW5nIHRyaWdnZXJcbi8vIGlmIGNhbGxlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgbWFrZSBhIHN5bmNlZCBlZmZlY3Qgb2YgZXhlY3V0aW9uXG5GdW5jdGlvbnMucHJvdG90eXBlLmV4ZWN1dGVUcmlnZ2VyZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jKXtcblx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0ZnVuYy5jYWxsKGNvbnRleHQpXG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgdGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCB0aGlzLmV4ZWN1dGVUcmlnZ2VyZXIsIG51bGwsIDMpO1xuXHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCBleGVjdXRlTGF0ZXJJbk5leHRUaWNrID0gZmFsc2UsIHByaW9yaXR5ID0gMCwgY2FsbGJhY2sgPSBudWxsKXtcbiAgICBsZXQgZW50cnk7XG4gICAgaWYgKGV4ZWN1dGVMYXRlckluTmV4dFRpY2spe1xuXG5cdCAgICAgY29uc3QgdGlja2VyQ2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IC0gMTtcblx0XHQgICAgaWYoY2FsbGJhY2spe1xuXHRcdCAgICBcdGNhbGxiYWNrLmNhbGwoY2FsbGJhY2tbJ3RoaXMnXSlcblx0XHQgICAgfVxuXHRcdCAgICBpZiggdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHQgICAgdGhpcy5mcmFtZVRyaWdnZXJEb25lTm90aWZpZXIgJiYgIHRoaXMuZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyKCk7XG5cdFx0ICAgIH1cblx0ICAgIH07XG4gICAgICAgIGNvbnN0IHRpY2tlciA9IG5ldyBUaWNrZXIoY29udGV4dCwgZnVuYywgdGlja2VyQ2FsbGJhY2ssIHByaW9yaXR5KTtcblx0ICAgIGVudHJ5ID0gbmV3IEVudHJ5KHRpY2tlciwgdGlja2VyLmV4ZWN1dGUpO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcy5wdXNoKGVudHJ5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJ5ID0gbmV3IEVudHJ5KGNvbnRleHQsIGZ1bmMpO1xuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsZnVuYywgY2FsbGJhY2sgPSBudWxsKXtcblx0bGV0IGVudHJ5LCBpO1xuXHRjb25zdCB7ZnJhbWVFbnRyaWVzLCBlbnRyaWVzfSA9IHRoaXM7XG5cblx0Zm9yKGkgPSAwOyBpIDwgZnJhbWVFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0ICAgIGNvbnN0IGZyYW1lRW50cnkgPSAgZnJhbWVFbnRyaWVzW2ldO1xuXHRcdGVudHJ5ID0gZnJhbWVFbnRyeS5jb250ZXh0O1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdGZyYW1lRW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0fSBlbHNlIHsgLy8gZnJhbWUgdHJpZ2dlciBMaXN0ZW5lcnMgYXJlIHN0aWxsIHJ1bm5pbmdcblx0XHRcdFx0bGV0IHRpY2tlckVudHJ5O1xuXHRcdFx0XHRjb25zdCBkaXNwb3NlRG9uZU5vdGlmaWVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH0gZWxzZXtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0ZW50cnkgPSBlbnRyaWVzW2ldO1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0ZW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudHJpZ2dlckxpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZW50cmllc0luZGV4VG9EaXNwb3NlID0gW107XG5cblx0dGhpcy5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcbiAgICAgICAgaWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG4gICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcbiAgICB9LCB0aGlzKTtcblx0dGhpcy50cmlnZ2VyRG9uZU5vdGlmaWVyICYmIHRoaXMudHJpZ2dlckRvbmVOb3RpZmllcigpO1xuXG5cdGlmKHRoaXMuZnJhbWVFbnRyaWVzLmxlbmd0aCA+IDApe1xuXHRcdHRoaXMuZnJhbWVFbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcblx0XHRcdGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCArIDE7XG5cdFx0XHRcdGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG5cdFx0XHR0aGlzLmZyYW1lRW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcblx0XHR9LCB0aGlzKVxuXHR9IGVsc2Uge1xuXHRcdHRoaXMuZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyICYmIHRoaXMuZnJhbWVUcmlnZ2VyRG9uZU5vdGlmaWVyKCk7XG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2Z1bmN0aW9ucy5qcyIsImltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZ1bmMpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuYztcbiAgICB9XG59XG5cbi8vIE1ldGhvZCBhdmFpbGFibGUgb25seSBvbiBFbnRyeSBpbnN0YW5jZSBub3QgaW4gQ2xhc3NcbkVudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCl7XG4gICAgaWYodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgVGlja2VyKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVyID0gbnVsbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZW50cnkuanMiXSwic291cmNlUm9vdCI6IiJ9