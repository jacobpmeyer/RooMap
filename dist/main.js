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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MapRoo.js":
/*!***********************!*\
  !*** ./src/MapRoo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MapRoo {\n  constructor(pageWidth) {\n    this.bg = document.getElementById(\"background\");\n    this.pageWidth = pageWidth;\n  }\n\n  calculate({ offsetX, x }, base) {\n    const val = offsetX - x + base;\n    return val;\n  }\n\n  kaliope(event) {\n    // leftOff is the percentage away from the left the box is times the screen width.\n    let leftOff = this.pageWidth * 0.08;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -85;\n    // coordY is the percentage away from the top the start of the\n    // element is, plus about 5 percent to place it at the bottom of the\n    // screen, as to give the modal room to exist\n    let coordY = 85;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  which(event) {\n    let leftOff = this.pageWidth * 0.32;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -540;\n    let coordY = 85;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  other(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -310;\n    let coordY = 37;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  this(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -248;\n    let coordY = 66;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  mushroom(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -470;\n    let coordY = 60;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  sd(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -360;\n    let coordY = 50;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  who(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -660;\n    let coordY = 60;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  that(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -720;\n    let coordY = 46;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  what(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -830;\n    let coordY = 95;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  snakejake(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -515;\n    let coordY = 43;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapRoo);\n\n// class MapRoo {\n//   constructor(pageWidth) {\n//     this.bg = document.getElementById(\"background\");\n//     this.pageWidth = pageWidth;\n//   }\n\n//   calculate({ offsetX, x }, base) {\n//     const val = (offsetX - x) / 2.5 + base;\n//     return val;\n//   }\n\n//   // leftOff is the percentage away from the left the box is times the screen width.\n//   kaliope(event) {\n//     let leftOff = this.pageWidth * 0.08;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = 200;\n//     let coordY = -20;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     console.log(\"Inside Kaliope\");\n//     return (this.bg.style.transform = `scale(2.5) translate(${val}px, ${coordY}%)`);\n//   }\n\n//   which(event) {\n//     let leftOff = this.pageWidth * 0.32;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = 27;\n//     let coordY = -22;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     return (this.bg.style.transform = `scale(2.5) translate(${val}px, ${coordY}%)`);\n//   }\n\n//   other(event) {\n//     let leftOff = this.pageWidth * 0.21;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = -310;\n//     let coordY = 42;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n//   }\n\n//   what(event) {\n//     let leftOff = this.pageWidth * 0.21;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = -310;\n//     let coordY = 42;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n//   }\n\n//   that(event) {\n//     let leftOff = this.pageWidth * 0.21;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = -310;\n//     let coordY = 42;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n//   }\n\n//   this(event) {\n//     let leftOff = this.pageWidth * 0.21;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = -310;\n//     let coordY = 42;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n//   }\n\n//   who(event) {\n//     let leftOff = this.pageWidth * 0.21;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = -310;\n//     let coordY = 42;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n//   }\n\n//   mushroom(event) {\n//     let leftOff = this.pageWidth * 0.21;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = -310;\n//     let coordY = 42;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n//   }\n\n//   sd(event) {\n//     let leftOff = this.pageWidth * 0.21;\n//     let offsetX = event.offsetX + leftOff;\n//     let coordX = -310;\n//     let coordY = 42;\n//     const val = this.calculate({ offsetX, x: event.x }, coordX);\n//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n//   }\n// }\n// export default MapRoo;\n\n\n//# sourceURL=webpack:///./src/MapRoo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MapRoo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapRoo */ \"./src/MapRoo.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const root = document.getElementById(\"root\");\n  const modal = document.getElementById(\"modal\");\n  const modalOverlay = document.getElementById(\"modal-overlay\");\n  const background = document.getElementById(\"background\");\n  const wrapper = document.getElementById(\"wrapper\");\n  const nav = document.getElementById(\"nav\");\n\n  const closeModal = () => {\n    background.classList.remove(\"zoom\", \"small\");\n    wrapper.classList.remove(\"oh\");\n    modalOverlay.classList.remove(\"modal-overlay\");\n    modal.classList.remove(\"modal\");\n    background.setAttribute(\"style\", \"\");\n    nav.innerHTML = \"Click on a landmark to show info\";\n  };\n\n  const openModal = () => {\n    modalOverlay.classList.add(\"modal-overlay\");\n    modal.classList.add(\"modal\");\n    nav.innerHTML = \"Click anywhere to close and zoom out\";\n  };\n\n  background.addEventListener(\"click\", (e) => {\n    if (e.target.id === \"background\") return console.log(e.offsetX);\n    wrapper.classList.add(\"oh\");\n    background.classList.add(\"small\", \"zoom\");\n    const id = e.target.id;\n    const mapPoint = new _MapRoo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](window.innerHeight);\n    mapPoint[id](e);\n    const om = setTimeout(() => {\n      openModal();\n      console.log(\"inside the timeout\");\n      clearTimeout(om);\n    }, 2000);\n  });\n\n  function zoom(event) {\n    console.log(\"inside zoom\");\n    event.preventDefault();\n    if (event.deltaY < 0) {\n      // Zoom in\n      scale *= event.deltaY * -0.02;\n    } else {\n      // Zoom out\n      scale /= event.deltaY * 0.02;\n    }\n    // Restrict scale\n    scale = Math.min(Math.max(0.125, scale), 4);\n    // Apply scale transform\n    wrapper.style.transform = `scale(${scale})`;\n  }\n  let scale = 1;\n  document.onwheel = zoom;\n\n  modalOverlay.addEventListener(\"click\", closeModal);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });