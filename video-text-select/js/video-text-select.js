/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_ts_app_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ts/app.ts */ \"./src/ts/app.ts\");\n/* harmony import */ var _src_ts_app_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_ts_app_ts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_sass_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/sass/app.scss */ \"./src/sass/app.scss\");\n/* harmony import */ var _src_sass_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_sass_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/app.scss?");

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./source/components/components.ts */ \"./src/ts/source/components/components.ts\");\n__webpack_require__(/*! ./source/dev.ts */ \"./src/ts/source/dev.ts\");\n\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/source/components/components.ts":
/*!************************************************!*\
  !*** ./src/ts/source/components/components.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./video-text-select/video-text-select-define.ts */ \"./src/ts/source/components/video-text-select/video-text-select-define.ts\");\n\n\n//# sourceURL=webpack:///./src/ts/source/components/components.ts?");

/***/ }),

/***/ "./src/ts/source/components/video-text-select/video-text-select-core.ts":
/*!******************************************************************************!*\
  !*** ./src/ts/source/components/video-text-select/video-text-select-core.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction setVideo(video) {\n    var videoEl = document.createElement('video');\n    var sourcesChildren = [];\n    videoEl.autoplay = video.autoplay;\n    // videoEl.controls = video.controls;\n    videoEl.height = parseInt(video.height);\n    // videoEl.loop = video.loop;\n    videoEl.muted = video.muted;\n    // videoEl.poster = video.poster;\n    videoEl.preload = video.preload;\n    // videoEl.src = video.source;\n    videoEl.width = parseInt(video.width);\n    // Get source children of video-text-select and append them to the video element.\n    for (var _i = 0, _a = video.children; _i < _a.length; _i++) {\n        var child = _a[_i];\n        if (child.tagName == 'SOURCE') {\n            sourcesChildren.push(child);\n        }\n    }\n    for (var _b = 0, sourcesChildren_1 = sourcesChildren; _b < sourcesChildren_1.length; _b++) {\n        var sourceChild = sourcesChildren_1[_b];\n        videoEl.appendChild(sourceChild);\n    }\n    video.appendChild(videoEl);\n    // Dummy load data and based on it set the video text.\n    loadJSON('./data/text.json', function (vtsData) {\n        setVideoText(video, vtsData);\n    });\n}\nexports.setVideo = setVideo;\n/**\n * Utility function to load dummy data\n * which will be received from the server.\n *\n * @param path {string}\n * @param callback {Function}\n */\nfunction loadJSON(path, callback) {\n    var xobj = new XMLHttpRequest();\n    xobj.overrideMimeType(\"application/json\");\n    xobj.open('GET', path, true);\n    xobj.onreadystatechange = function () {\n        if (xobj.readyState == 4 && xobj.status == 200) {\n            callback(JSON.parse(xobj.responseText));\n        }\n    };\n    xobj.send(null);\n}\nfunction setVideoText(video, vtsData) {\n    // console.log('autoplay', video.autoplay);\n    // console.log('controls', video.controls);\n    // console.log('height', video.height);\n    // console.log('loop', video.loop);\n    // console.log('muted', video.muted);\n    // console.log('poster', video.poster);\n    // console.log('pregenerate', video.pregenerate);\n    // console.log('preload', video.preload);\n    // console.log('source', video.source);\n    // console.log('sources', video.sources);\n    // console.log('width', video.width);\n    var videoEl = video.getElementsByTagName('video')[0];\n    // console.log(video);\n    // console.log(videoEl);\n    video.id = vtsData.id;\n    var videoText = document.createElement('div');\n    vtsData.videoText.map(function (videoTextEl) {\n        var div = document.createElement('div');\n        div.innerText = videoTextEl.textContent;\n        videoText.appendChild(div);\n        // console.log(videoTextEl.id);\n    });\n    video.appendChild(videoText);\n    // console.log('vtsData', vtsData);\n}\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-text-select/video-text-select-core.ts?");

/***/ }),

/***/ "./src/ts/source/components/video-text-select/video-text-select-define.ts":
/*!********************************************************************************!*\
  !*** ./src/ts/source/components/video-text-select/video-text-select-define.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar video_text_select_core_1 = __webpack_require__(/*! ./video-text-select-core */ \"./src/ts/source/components/video-text-select/video-text-select-core.ts\");\nvar HTMLVideoTextSelectElement = /** @class */ (function (_super) {\n    __extends(HTMLVideoTextSelectElement, _super);\n    function HTMLVideoTextSelectElement() {\n        var _this = _super.call(this) || this;\n        _this._autoplay = false;\n        _this._controls = true;\n        _this._loop = false;\n        _this._muted = false;\n        _this._pregenerate = false;\n        _this.autoplay = (_this.getAttribute('autoplay') === 'true' ||\n            _this.getAttribute('autoplay') === '') ? true : false;\n        _this.controls = (_this.getAttribute('controls') === 'true' ||\n            _this.getAttribute('controls') === '' ||\n            _this.getAttribute('controls') === null) ? true : false;\n        _this.height = _this.getAttribute('height');\n        _this.loop = (_this.getAttribute('loop') === 'true' ||\n            _this.getAttribute('loop') === '') ? true : false;\n        _this.muted = (_this.getAttribute('muted') === 'true' ||\n            _this.getAttribute('muted') === '') ? true : false;\n        _this.poster = _this.getAttribute('poster');\n        _this.pregenerate = (_this.getAttribute('pregenerate') === 'true' ||\n            _this.getAttribute('pregenerate') === '') ? true : false;\n        _this.preload = _this.getAttribute('preload');\n        _this.source = _this.getAttribute('src') || _this.getAttribute('source');\n        _this.sources = _this.getAttribute('sources').split(' ');\n        _this.width = _this.getAttribute('width');\n        video_text_select_core_1.setVideo(_this);\n        return _this;\n    }\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"autoplay\", {\n        // --- Autoplay ---\n        get: function () {\n            return this._autoplay;\n        },\n        set: function (newAutoplay) {\n            this._autoplay = newAutoplay;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"controls\", {\n        // --- Controls ---\n        get: function () {\n            return this._controls;\n        },\n        set: function (newControls) {\n            this._controls = newControls;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"height\", {\n        // --- Height ---\n        get: function () {\n            return this._height;\n        },\n        set: function (newHeight) {\n            this._height = newHeight;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"loop\", {\n        // --- Loop ---\n        get: function () {\n            return this._loop;\n        },\n        set: function (newLoop) {\n            this._loop = newLoop;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"muted\", {\n        // --- Muted ---\n        get: function () {\n            return this._muted;\n        },\n        set: function (newMuted) {\n            this._muted = newMuted;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"poster\", {\n        // --- Poster ---\n        get: function () {\n            return this._poster;\n        },\n        set: function (newPoster) {\n            this._poster = newPoster;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"pregenerate\", {\n        // --- Pregenerate ---\n        get: function () {\n            return this._pregenerate;\n        },\n        set: function (newPregenerate) {\n            this._pregenerate = newPregenerate;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"preload\", {\n        // --- Preload ---\n        get: function () {\n            return this._preload;\n        },\n        set: function (newPreload) {\n            this._preload = newPreload;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"source\", {\n        // --- Source ---\n        get: function () {\n            return this._source;\n        },\n        set: function (newSource) {\n            this._source = newSource;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"sources\", {\n        // --- Sources ---\n        get: function () {\n            return this._sources;\n        },\n        set: function (newSources) {\n            this._sources = newSources;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(HTMLVideoTextSelectElement.prototype, \"width\", {\n        // --- Width ---\n        get: function () {\n            return this._width;\n        },\n        set: function (newWidth) {\n            this._width = newWidth;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return HTMLVideoTextSelectElement;\n}(HTMLElement));\nexports.HTMLVideoTextSelectElement = HTMLVideoTextSelectElement;\ncustomElements.define('video-text-select', HTMLVideoTextSelectElement);\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-text-select/video-text-select-define.ts?");

/***/ }),

/***/ "./src/ts/source/dev.ts":
/*!******************************!*\
  !*** ./src/ts/source/dev.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Video is sent to vts.deview.plurid.com\n *\n * An object is generated (./data/text.json)\n * and received\n *\n * The received text is 'typeset' in the video-text-select container\n * As the video is playing the appropiate text is set to display block\n * (from display none) while keeping the text color transparent.\n *\n */\n\n\n//# sourceURL=webpack:///./src/ts/source/dev.ts?");

/***/ })

/******/ });