/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_ymaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/ymaps */ "./src/js/ymaps.js");
/* harmony import */ var _js_feedbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/feedbacks */ "./src/js/feedbacks.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var balloonForm = document.getElementById('form-balloon').innerHTML;


(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
  var map, clusterer, placemarks, coords, updateMap;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          updateMap = function _updateMap(placemarks, map) {
            clusterer.removeAll();

            if (placemarks) {
              var _iterator = _createForOfIteratorHelper(placemarks),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;
                  var placemark = new ymaps.Placemark(item.coords);
                  map.geoObjects.add(placemark);
                  clusterer.add(placemark);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          };

          _context.next = 3;
          return (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.mapInit)();

        case 3:
          map = _context.sent;
          _context.next = 6;
          return (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.clusterInit)(map);

        case 6:
          clusterer = _context.sent;
          placemarks = (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.getPlacemarks)();
          coords = [];
          clusterer.events.add('click', function (e) {
            coords = e.get('target').geometry.getCoordinates();
            var samePlaceMarks = [];
            placemarks.forEach(function (currentMark) {
              if ((0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.arrayCompare)(currentMark.coords, coords)) {
                samePlaceMarks.push(currentMark);
              }
            });
            (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.updateBalloon)(samePlaceMarks);
            (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.openBalloon)(map, coords);
          });
          updateMap(placemarks, map);
          map.events.add('click', function (e) {
            coords = e.get('coords');

            if (!map.balloon.isOpen()) {
              (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.openBalloon)(map, coords);
            } else {
              (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.updateBalloon)();
              map.balloon.close();
            }
          });
          document.addEventListener('click', function (e) {
            if (e.target.id === 'button') {
              e.preventDefault();
              var feedback = (0,_js_feedbacks__WEBPACK_IMPORTED_MODULE_3__.newFeedback)(coords);

              if (feedback) {
                placemarks.push(feedback);
                (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(placemarks);
                updateMap(placemarks, map);
                (0,_js_ymaps__WEBPACK_IMPORTED_MODULE_2__.updateBalloon)();
                map.balloon.close();
              } else {
                map.balloon.close();
              }
            }
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

/***/ }),

/***/ "./src/js/feedbacks.js":
/*!*****************************!*\
  !*** ./src/js/feedbacks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newFeedback": () => (/* binding */ newFeedback)
/* harmony export */ });
function newFeedback(coords) {
  var obj = {};
  var form = document.getElementById('form');

  if (form.elements.name.value) {
    obj.name = form.elements.name.value;
  }

  if (form.elements.place.value) {
    obj.place = form.elements.place.value;
  }

  if (form.elements.feedback.value) {
    obj.feedback = form.elements.feedback.value;
  }

  obj.coords = coords;

  if (obj.name && obj.place && obj.feedback) {
    return obj;
  } else {
    alert('Заполните все поля!');
    return;
  }
}



/***/ }),

/***/ "./src/js/ymaps.js":
/*!*************************!*\
  !*** ./src/js/ymaps.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapInit": () => (/* binding */ mapInit),
/* harmony export */   "openBalloon": () => (/* binding */ openBalloon),
/* harmony export */   "getPlacemarks": () => (/* binding */ getPlacemarks),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage),
/* harmony export */   "updateBalloon": () => (/* binding */ updateBalloon),
/* harmony export */   "clusterInit": () => (/* binding */ clusterInit),
/* harmony export */   "arrayCompare": () => (/* binding */ arrayCompare)
/* harmony export */ });
/* harmony import */ var _feedbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedbacks */ "./src/js/feedbacks.js");
/* harmony import */ var _templates_feedback_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././templates/feedback.hbs */ "./src/templates/feedback.hbs");
/* harmony import */ var _templates_feedback_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_feedback_hbs__WEBPACK_IMPORTED_MODULE_1__);


var myMap;

function mapInit() {
  return new Promise(function (resolve) {
    myMap = ymaps.ready(function () {
      myMap = new ymaps.Map('map', {
        center: [59.91, 30.3],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
      });
      resolve(myMap);
    });
  });
}

function clusterInit(map) {
  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: true,
    groupByCoordinates: true,
    clusterOpenBalloonOnClick: false
  }); // clusterer.add(array);

  map.geoObjects.add(clusterer);
  return clusterer;
}

function openBalloon(map, coords) {
  map.balloon.open(coords, document.getElementById('form-balloon').innerHTML);
  return coords;
}

function getPlacemarks() {
  return JSON.parse(localStorage.data || '[]');
}

function updateStorage(placemarks) {
  localStorage.data = JSON.stringify(placemarks);
  return JSON.parse(localStorage.data);
}

function updateBalloon(samePlaceMarks) {
  if (!myMap.balloon.isOpen()) {
    var ul = document.createElement('ul');
    ul.classList.add('feedbacks');
    document.getElementById('form-balloon').prepend(ul);
    ul.innerHTML = _templates_feedback_hbs__WEBPACK_IMPORTED_MODULE_1___default()({
      samePlaceMarks: samePlaceMarks
    });
  } else {
    if (document.getElementById('form-balloon').firstElementChild) {
      document.getElementById('form-balloon').firstElementChild.remove();
    }
  }
}

function arrayCompare(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false;
  }

  return true;
}



/***/ }),

/***/ "./src/templates/feedback.hbs":
/*!************************************!*\
  !*** ./src/templates/feedback.hbs ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <li class=\"feedbacks_item feedback\">\r\n        <div class=\"feedback__top\">\r\n          <div class=\"feedback__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":48}}}) : helper)))
    + "</div>\r\n          <div class=\"feedback__place\">["
    + alias4(((helper = (helper = lookupProperty(helpers,"place") || (depth0 != null ? lookupProperty(depth0,"place") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"place","hash":{},"data":data,"loc":{"start":{"line":5,"column":40},"end":{"line":5,"column":51}}}) : helper)))
    + "]</div>\r\n        </div>\r\n        <div class=\"feedback__text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"feedback") || (depth0 != null ? lookupProperty(depth0,"feedback") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feedback","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":50}}}) : helper)))
    + "</div>\r\n      </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"samePlaceMarks") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":5},"end":{"line":9,"column":13}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkyandex"] = self["webpackChunkyandex"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-d00e03"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map