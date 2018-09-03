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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./video-text-select/video-text-select-define.ts */ \"./src/ts/source/components/video-text-select/video-text-select-define.ts\");\n__webpack_require__(/*! ./video-text/video-text-define.ts */ \"./src/ts/source/components/video-text/video-text-define.ts\");\n__webpack_require__(/*! ./video-select/video-select-define.ts */ \"./src/ts/source/components/video-select/video-select-define.ts\");\n__webpack_require__(/*! ./video-text-select-controls/video-text-select-controls-define.ts */ \"./src/ts/source/components/video-text-select-controls/video-text-select-controls-define.ts\");\n\n\n//# sourceURL=webpack:///./src/ts/source/components/components.ts?");

/***/ }),

/***/ "./src/ts/source/components/video-select/video-select-core.ts":
/*!********************************************************************!*\
  !*** ./src/ts/source/components/video-select/video-select-core.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction setVideoSelect(video) {\n}\nexports.setVideoSelect = setVideoSelect;\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-select/video-select-core.ts?");

/***/ }),

/***/ "./src/ts/source/components/video-select/video-select-define.ts":
/*!**********************************************************************!*\
  !*** ./src/ts/source/components/video-select/video-select-define.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar video_select_core_1 = __webpack_require__(/*! ./video-select-core */ \"./src/ts/source/components/video-select/video-select-core.ts\");\nvar HTMLVideoSelectElement = /** @class */ (function (_super) {\n    __extends(HTMLVideoSelectElement, _super);\n    function HTMLVideoSelectElement() {\n        var _this = _super.call(this) || this;\n        video_select_core_1.setVideoSelect(_this);\n        return _this;\n    }\n    return HTMLVideoSelectElement;\n}(HTMLElement));\nexports.HTMLVideoSelectElement = HTMLVideoSelectElement;\ncustomElements.define('video-select', HTMLVideoSelectElement);\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-select/video-select-define.ts?");

/***/ }),

/***/ "./src/ts/source/components/video-text-select-controls/video-text-select-controls-core.ts":
/*!************************************************************************************************!*\
  !*** ./src/ts/source/components/video-text-select-controls/video-text-select-controls-core.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction setVideoControls(videoControls) {\n    var videoControlsContent = \"\\n        <div class=\\\"video-text-select-controls-timebar-container\\\">\\n            <div class=\\\"video-text-select-controls-timebar-current-ball\\\"></div>\\n            <div class=\\\"video-text-select-controls-timebar-current\\\"></div>\\n            <div class=\\\"video-text-select-controls-timebar-time\\\"></div>\\n        </div>\\n\\n        <div class=\\\"video-text-select-controls-container\\\">\\n            <div class=\\\"video-text-select-controls-button video-text-select-controls-play\\\">&#9654;</div>\\n\\n            <div class=\\\"video-text-select-controls-time\\\">\\n                <span class=\\\"video-text-select-controls-time-current-hours\\\"></span><span class=\\\"video-text-select-controls-time-current-minutes\\\"></span><span class=\\\"video-text-select-controls-time-current-seconds\\\"></span> /\\n                <span class=\\\"video-text-select-controls-time-end-hours\\\"></span><span class=\\\"video-text-select-controls-time-end-minutes\\\"></span><span class=\\\"video-text-select-controls-time-end-seconds\\\"></span>\\n            </div>\\n\\n            <div class=\\\"video-text-select-controls-button video-text-select-controls-volume\\\">\\n                <?xml version=\\\"1.0\\\" encoding=\\\"iso-8859-1\\\"?>\\n                <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\n                <!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\">\\n                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" version=\\\"1.1\\\" id=\\\"Capa_1\\\" x=\\\"0px\\\" y=\\\"0px\\\" width=\\\"512px\\\" height=\\\"512px\\\" viewBox=\\\"0 0 93.038 93.038\\\" style=\\\"enable-background:new 0 0 93.038 93.038;\\\" xml:space=\\\"preserve\\\">\\n                    <g>\\n                        <path d=\\\"M46.547,75.521c0,1.639-0.947,3.128-2.429,3.823c-0.573,0.271-1.187,0.402-1.797,0.402c-0.966,0-1.923-0.332-2.696-0.973   l-23.098-19.14H4.225C1.892,59.635,0,57.742,0,55.409V38.576c0-2.334,1.892-4.226,4.225-4.226h12.303l23.098-19.14   c1.262-1.046,3.012-1.269,4.493-0.569c1.481,0.695,2.429,2.185,2.429,3.823L46.547,75.521L46.547,75.521z M62.784,68.919   c-0.103,0.007-0.202,0.011-0.304,0.011c-1.116,0-2.192-0.441-2.987-1.237l-0.565-0.567c-1.482-1.479-1.656-3.822-0.408-5.504   c3.164-4.266,4.834-9.323,4.834-14.628c0-5.706-1.896-11.058-5.484-15.478c-1.366-1.68-1.24-4.12,0.291-5.65l0.564-0.565   c0.844-0.844,1.975-1.304,3.199-1.231c1.192,0.06,2.305,0.621,3.061,1.545c4.977,6.09,7.606,13.484,7.606,21.38   c0,7.354-2.325,14.354-6.725,20.24C65.131,68.216,64.007,68.832,62.784,68.919z M80.252,81.976   c-0.764,0.903-1.869,1.445-3.052,1.495c-0.058,0.002-0.117,0.004-0.177,0.004c-1.119,0-2.193-0.442-2.988-1.237l-0.555-0.555   c-1.551-1.55-1.656-4.029-0.246-5.707c6.814-8.104,10.568-18.396,10.568-28.982c0-11.011-4.019-21.611-11.314-29.847   c-1.479-1.672-1.404-4.203,0.17-5.783l0.554-0.555c0.822-0.826,1.89-1.281,3.115-1.242c1.163,0.033,2.263,0.547,3.036,1.417   c8.818,9.928,13.675,22.718,13.675,36.01C93.04,59.783,88.499,72.207,80.252,81.976z\\\" fill=\\\"#FFFFFF\\\"/>\\n                    </g>\\n                </svg>\\n            </div>\\n\\n            <div class=\\\"video-text-select-controls-button video-text-select-controls-fullscreen\\\">\\n                <?xml version=\\\"1.0\\\" encoding=\\\"iso-8859-1\\\"?>\\n                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\n                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" version=\\\"1.1\\\" id=\\\"Layer_1\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 460.644 460.644\\\" style=\\\"enable-background:new 0 0 460.644 460.644;\\\" xml:space=\\\"preserve\\\" width=\\\"512px\\\" height=\\\"512px\\\">\\n                    <g>\\n                        <g>\\n                            <g>\\n                                <path d=\\\"M73.432,90.125v279.211c0,9.693,7.857,17.55,17.55,17.55h279.21c9.693,0,17.55-7.857,17.55-17.55V90.125     c0-9.693-7.857-17.55-17.55-17.55H90.982C81.289,72.575,73.432,80.432,73.432,90.125z\\\" fill=\\\"#FFFFFF\\\"/>\\n                                <path d=\\\"M7.534,154.704c2.422,1.448,5.091,2.144,7.729,2.144c3.904,0,7.74-1.523,10.61-4.394l1.656-1.656     c10.182-10.183,15.903-23.993,15.903-38.393v-69.83h69.831c14.4,0,28.211-5.72,38.393-15.903     c3.404-3.404,5.216-8.196,4.511-12.958C155.039,6.1,148.604,0.81,141.305,0.81H15.266c-8.284,0-15,6.716-15,15v125.654     C0.266,146.829,2.929,151.951,7.534,154.704z\\\" fill=\\\"#FFFFFF\\\"/>\\n                                <path d=\\\"M150.206,432.789c-10.182-10.183-23.993-15.904-38.393-15.904H43.432v-68.381c0-14.401-5.721-28.211-15.903-38.394     l-1.627-1.627c-3.896-3.896-9.587-5.627-14.895-4.149C4.426,306.165,0,312.117,0,318.794v126.038c0,8.284,6.716,15,15,15h125.619     c5.51,0,10.759-2.801,13.468-7.599c3.358-5.948,2.278-13.286-2.443-18.007L150.206,432.789z\\\" fill=\\\"#FFFFFF\\\"/>\\n                                <path d=\\\"M445.644,0.81H320.025c-5.51,0-10.759,2.801-13.468,7.599c-3.358,5.948-2.278,13.286,2.443,18.007l0.255,0.255     c10.183,10.183,23.993,15.903,38.393,15.903h70.095v70.094c0,14.4,5.72,28.211,15.903,38.393l1.392,1.392     c2.87,2.87,6.706,4.394,10.609,4.394c2.644,0,5.32-0.698,7.744-2.153c4.598-2.759,7.253-7.881,7.253-13.243V15.81     C460.644,7.527,453.928,0.81,445.644,0.81z\\\" fill=\\\"#FFFFFF\\\"/>\\n                                <path d=\\\"M453.653,306.279c-6.083-3.988-13.926-3.047-18.881,1.91l-1.127,1.127c-10.183,10.183-15.903,23.993-15.903,38.393     v69.177h-69.177c-14.4,0-28.211,5.721-38.394,15.903l-1.143,1.143c-3.896,3.896-5.627,9.589-4.149,14.898     c1.832,6.58,7.784,11.004,14.46,11.004h126.038c8.284,0,15-6.716,15-15V319.159C460.378,314.024,457.948,309.094,453.653,306.279     z\\\" fill=\\\"#FFFFFF\\\"/>\\n                            </g>\\n                        </g>\\n                    </g>\\n                </svg>\\n            </div>\\n\\n            <div class=\\\"video-text-select-controls-button video-text-select-controls-settings\\\">\\n                <?xml version=\\\"1.0\\\" encoding=\\\"iso-8859-1\\\"?>\\n                <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\n                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" version=\\\"1.1\\\" id=\\\"Capa_1\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 268.765 268.765\\\" style=\\\"enable-background:new 0 0 268.765 268.765;\\\" xml:space=\\\"preserve\\\" width=\\\"512px\\\" height=\\\"512px\\\">\\n                    <g id=\\\"Settings\\\">\\n                        <g>\\n                            <path style=\\\"fill-rule:evenodd;clip-rule:evenodd;\\\" d=\\\"M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z\\\" fill=\\\"#FFFFFF\\\"/>\\n                        </g>\\n                    </g>\\n                </svg>\\n            </div>\\n        </div>\\n    \";\n    videoControls.innerHTML = videoControlsContent;\n}\nexports.setVideoControls = setVideoControls;\nfunction setButtons(videoControls) {\n    var vst = videoControls.parentElement;\n    var video = vst.getElementsByTagName('video')[0];\n    video.addEventListener('loadedmetadata', function () {\n        setEndTime(videoControls, video.duration);\n    });\n    video.addEventListener('timeupdate', function () {\n        setCurrentTime(videoControls, video.currentTime, video.duration);\n    });\n}\nexports.setButtons = setButtons;\nfunction setEndTime(videoControls, duration) {\n    // duration = 1005654;\n    var videoCurrentHours = videoControls.getElementsByClassName('video-text-select-controls-time-current-hours')[0];\n    var videoCurrentMinutes = videoControls.getElementsByClassName('video-text-select-controls-time-current-minutes')[0];\n    var videoCurrentSeconds = videoControls.getElementsByClassName('video-text-select-controls-time-current-seconds')[0];\n    var videoEndHours = videoControls.getElementsByClassName('video-text-select-controls-time-end-hours')[0];\n    var videoEndMinutes = videoControls.getElementsByClassName('video-text-select-controls-time-end-minutes')[0];\n    var videoEndSeconds = videoControls.getElementsByClassName('video-text-select-controls-time-end-seconds')[0];\n    var hours = Math.floor(duration / 3600);\n    var minutes = Math.floor((duration - hours * 3600) / 60);\n    var seconds = Math.floor(duration - hours * 3600 - minutes * 60);\n    if (hours != 0) {\n        videoEndHours.innerHTML = hours + \":\";\n        if (hours < 10) {\n            videoCurrentHours.innerHTML = '0:';\n        }\n        else if (hours < 100) {\n            videoCurrentHours.innerHTML = '00:';\n        }\n        else {\n            videoCurrentHours.innerHTML = '000:';\n        }\n    }\n    videoEndMinutes.innerHTML = minutes + \":\";\n    if (minutes < 10) {\n        videoCurrentMinutes.innerHTML = '0:';\n    }\n    else {\n        videoCurrentMinutes.innerHTML = '00:';\n    }\n    videoEndSeconds.innerHTML = \"\" + seconds;\n    if (seconds < 10) {\n        videoCurrentSeconds.innerHTML = '0';\n    }\n    else {\n        videoCurrentSeconds.innerHTML = '00';\n    }\n}\nfunction setCurrentTime(videoControls, currentTime, duration) {\n    var videoCurrentHours = videoControls.getElementsByClassName('video-text-select-controls-time-current-hours')[0];\n    var videoCurrentMinutes = videoControls.getElementsByClassName('video-text-select-controls-time-current-minutes')[0];\n    var videoCurrentSeconds = videoControls.getElementsByClassName('video-text-select-controls-time-current-seconds')[0];\n    var hours = Math.floor(currentTime / 3600);\n    var minutes = Math.floor((currentTime - hours * 3600) / 60);\n    var seconds = Math.floor(currentTime - hours * 3600 - minutes * 60);\n    var durationHours = Math.floor(duration / 3600);\n    var durationMinutes = Math.floor((duration - durationHours * 3600) / 60);\n    var durationSeconds = Math.floor(duration - durationHours * 3600 - durationMinutes * 60);\n    if (hours != 0) {\n        videoCurrentHours.innerHTML = hours + \":\";\n    }\n    if (minutes < 10) {\n        if (durationMinutes < 10) {\n            videoCurrentMinutes.innerHTML = minutes + \":\";\n        }\n        else {\n            videoCurrentMinutes.innerHTML = \"0\" + minutes + \":\";\n        }\n    }\n    else {\n        videoCurrentMinutes.innerHTML = minutes + \":\";\n    }\n    if (seconds < 10) {\n        if (durationSeconds < 10) {\n            videoCurrentSeconds.innerHTML = \"\" + seconds;\n        }\n        videoCurrentSeconds.innerHTML = \"0\" + seconds;\n    }\n    else {\n        videoCurrentSeconds.innerHTML = \"\" + seconds;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-text-select-controls/video-text-select-controls-core.ts?");

/***/ }),

/***/ "./src/ts/source/components/video-text-select-controls/video-text-select-controls-define.ts":
/*!**************************************************************************************************!*\
  !*** ./src/ts/source/components/video-text-select-controls/video-text-select-controls-define.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar video_text_select_controls_core_1 = __webpack_require__(/*! ./video-text-select-controls-core */ \"./src/ts/source/components/video-text-select-controls/video-text-select-controls-core.ts\");\nvar HTMLVideoTextSelectControlsElement = /** @class */ (function (_super) {\n    __extends(HTMLVideoTextSelectControlsElement, _super);\n    function HTMLVideoTextSelectControlsElement() {\n        var _this = _super.call(this) || this;\n        video_text_select_controls_core_1.setVideoControls(_this);\n        video_text_select_controls_core_1.setButtons(_this);\n        return _this;\n    }\n    return HTMLVideoTextSelectControlsElement;\n}(HTMLElement));\nexports.HTMLVideoTextSelectControlsElement = HTMLVideoTextSelectControlsElement;\ncustomElements.define('video-text-select-controls', HTMLVideoTextSelectControlsElement);\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-text-select-controls/video-text-select-controls-define.ts?");

/***/ }),

/***/ "./src/ts/source/components/video-text-select/video-text-select-core.ts":
/*!******************************************************************************!*\
  !*** ./src/ts/source/components/video-text-select/video-text-select-core.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction setVideo(vts) {\n    // Create video element.\n    var videoEl = document.createElement('video');\n    var sourcesChildren = [];\n    // Set video attributes.\n    videoEl.autoplay = vts.autoplay;\n    // videoEl.controls = vts.controls;\n    // videoEl.height = parseInt(vts.height);\n    // videoEl.loop = vts.loop;\n    videoEl.muted = vts.muted;\n    // videoEl.poster = vts.poster;\n    videoEl.preload = vts.preload;\n    videoEl.src = vts.source;\n    // videoEl.width = parseInt(vts.width);\n    // Get source children of video-text-select and append them to the video element.\n    for (var _i = 0, _a = vts.children; _i < _a.length; _i++) {\n        var child = _a[_i];\n        if (child.tagName == 'SOURCE') {\n            sourcesChildren.push(child);\n        }\n    }\n    for (var _b = 0, sourcesChildren_1 = sourcesChildren; _b < sourcesChildren_1.length; _b++) {\n        var sourceChild = sourcesChildren_1[_b];\n        videoEl.appendChild(sourceChild);\n    }\n    // Add video element to video text select element\n    vts.appendChild(videoEl);\n    // Set controls.\n    var controls = document.createElement('video-text-select-controls');\n    vts.appendChild(controls);\n    // If text has been generated, load it from database\n    // or get it from server and set it in page.\n    // If text has not been generated, add event listener to generate button.\n    // To generate:\n    // 1. send video to server\n    // 2. receive text data\n    // 3. store text data or store only the video id for further retrieval\n    // In future:\n    // Allow the user to change the text select\n    // and/or the text characteristics (placement, size, font, etc)\n    // and send that feedback to server\n    // for a better calibration of text-video.\n    // Dummy load data and based on it set the video text.\n    loadJSON('./data/text.json', function (vtsData) {\n        setVideoText(vts, vtsData);\n    });\n}\nexports.setVideo = setVideo;\nfunction setVideoText(video, vtsData) {\n    // console.log('autoplay', video.autoplay);\n    // console.log('controls', video.controls);\n    // console.log('height', video.height);\n    // console.log('loop', video.loop);\n    // console.log('muted', video.muted);\n    // console.log('poster', video.poster);\n    // console.log('pregenerate', video.pregenerate);\n    // console.log('preload', video.preload);\n    // console.log('source', video.source);\n    // console.log('sources', video.sources);\n    // console.log('width', video.width);\n    var videoEl = video.getElementsByTagName('video')[0];\n    video.id = vtsData.id;\n    var videoText = document.createElement('video-text');\n    vtsData.videoText.map(function (videoTextEl) {\n        var videoSelect = document.createElement('video-select');\n        videoSelect.innerHTML = escapeHTML(videoTextEl.textContent);\n        videoSelect.id = videoTextEl.id;\n        videoEl.addEventListener(\"loadedmetadata\", function () {\n            var width = videoEl.videoWidth;\n            var height = videoEl.videoHeight;\n            var ratioHW = height / width;\n            var ratioWH = width / height;\n            // console.log('width', width);\n            // console.log('height', height);\n            // console.log('ratioHW', ratioHW);\n            // console.log('ratioWH', ratioWH);\n            // console.log('duration', videoEl.duration);\n            return {\n                width: width,\n                height: height,\n                ratioHW: ratioHW,\n                ratioWH: ratioWH\n            };\n        }, false);\n        var videoBounding = videoEl.getBoundingClientRect();\n        var videoWidth = videoBounding.width;\n        // let videoWidth = videoEl.offsetWidth;\n        // let videoHeight = videoEl.offsetHeight;\n        // let videoHeight = videoEl.videoHeight;\n        // let videoWidth = videoEl.videoWidth;\n        var videoHeight = videoBounding.height;\n        // console.log('width', videoWidth);\n        // console.log('height', videoHeight);\n        // console.log(videoBounding);\n        // values are good for 995px width page\n        videoSelect.style.fontFamily = videoTextEl.fontFamily;\n        videoSelect.style.fontSize = videoTextEl.fontSize + 'px';\n        videoSelect.style.letterSpacing = videoTextEl.letterSpacing + 'px';\n        videoSelect.style.lineHeight = videoTextEl.lineHeight + 'px';\n        videoSelect.style.wordSpacing = videoTextEl.wordSpacing + 'px';\n        videoSelect.style.left = videoTextEl.xCoord + 'px';\n        videoSelect.style.top = videoTextEl.yCoord + 'px';\n        videoText.appendChild(videoSelect);\n    });\n    video.appendChild(videoText);\n    // Get aspect ratio of the video in a promise\n    // Get rendered width, calculate height of the video\n    // For each text in the video text select object,\n    // adjust the positioning, size, etc of the text\n    // based on the ratio between current width (height)\n    // and video resolution width (height).\n    // Set text on page\n    // Listen for page resize and repeat\n}\n/**\n * Utility function to escape HTML entities from a given string.\n *\n * @param unsafe {string}\n */\nfunction escapeHTML(unsafe) {\n    return unsafe\n        .replace(/&/g, \"&amp;\")\n        .replace(/</g, \"&lt;\")\n        .replace(/>/g, \"&gt;\")\n        .replace(/\"/g, \"&quot;\")\n        .replace(/'/g, \"&#039;\");\n}\n/**\n * Utility function to load dummy data\n * which will be received from the server.\n *\n * @param path {string}\n * @param callback {Function}\n */\nfunction loadJSON(path, callback) {\n    var xobj = new XMLHttpRequest();\n    xobj.overrideMimeType(\"application/json\");\n    xobj.open('GET', path, true);\n    xobj.onreadystatechange = function () {\n        if (xobj.readyState == 4 && xobj.status == 200) {\n            callback(JSON.parse(xobj.responseText));\n        }\n    };\n    xobj.send(null);\n}\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-text-select/video-text-select-core.ts?");

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

/***/ "./src/ts/source/components/video-text/video-text-core.ts":
/*!****************************************************************!*\
  !*** ./src/ts/source/components/video-text/video-text-core.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction setVideoText(video) {\n}\nexports.setVideoText = setVideoText;\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-text/video-text-core.ts?");

/***/ }),

/***/ "./src/ts/source/components/video-text/video-text-define.ts":
/*!******************************************************************!*\
  !*** ./src/ts/source/components/video-text/video-text-define.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar video_text_core_1 = __webpack_require__(/*! ./video-text-core */ \"./src/ts/source/components/video-text/video-text-core.ts\");\nvar HTMLVideoTextElement = /** @class */ (function (_super) {\n    __extends(HTMLVideoTextElement, _super);\n    function HTMLVideoTextElement() {\n        var _this = _super.call(this) || this;\n        video_text_core_1.setVideoText(_this);\n        return _this;\n    }\n    return HTMLVideoTextElement;\n}(HTMLElement));\nexports.HTMLVideoTextElement = HTMLVideoTextElement;\ncustomElements.define('video-text', HTMLVideoTextElement);\n\n\n//# sourceURL=webpack:///./src/ts/source/components/video-text/video-text-define.ts?");

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