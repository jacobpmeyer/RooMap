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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MapText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapText */ \"./src/MapText.js\");\n\n\nclass MapRoo {\n  constructor(pageWidth, name) {\n    this.bg = document.getElementById(\"background\");\n    this.pageWidth = pageWidth;\n    this.img = document.getElementById(\"location-img\");\n    this.title = document.getElementById(\"info-title\");\n    this.landmarks = document.getElementById(\"info-landmarks\");\n    this.content = document.getElementById(\"info-content\");\n    this.title.innerText = _MapText__WEBPACK_IMPORTED_MODULE_0__[name].title;\n    this.landmarks.innerText = _MapText__WEBPACK_IMPORTED_MODULE_0__[name].landmarks;\n    this.content.innerText = _MapText__WEBPACK_IMPORTED_MODULE_0__[name].content;\n  }\n\n  calculate({ offsetX, x }, base) {\n    const val = offsetX - x + base;\n    return val;\n  }\n\n  kaliope(event) {\n    // leftOff is the percentage away from the left the box is times the screen width.\n    let leftOff = this.pageWidth * 0.08;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -85;\n    // coordY is the percentage away from the top the start of the\n    // element is, plus about 5 percent to place it at the bottom of the\n    // screen, as to give the modal room to exist\n    let coordY = 85;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/kaliope.jpg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  which(event) {\n    let leftOff = this.pageWidth * 0.32;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -540;\n    let coordY = 85;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/which_stage.jpeg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  other(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -310;\n    let coordY = 37;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/other1.jpg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  thisStage(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -248;\n    let coordY = 66;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/this.jpeg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  mushroom(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -470;\n    let coordY = 60;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/mush2.jpg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  sd(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -360;\n    let coordY = 50;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/discolineup.jpg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  who(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -660;\n    let coordY = 60;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/who.jpeg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  that(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -720;\n    let coordY = 46;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/that.jpeg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  what(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -830;\n    let coordY = 95;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/what.jpg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n\n  snakejake(event) {\n    let leftOff = this.pageWidth * 0.21;\n    let offsetX = event.offsetX + leftOff;\n    let coordX = -515;\n    let coordY = 43;\n    const val = this.calculate({ offsetX, x: event.x }, coordX);\n    this.img.src =\n      \"https://github.com/jacobpmeyer/RooMap/blob/master/images/snakejake.jpg?raw=true\";\n    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapRoo);\n\n\n//# sourceURL=webpack:///./src/MapRoo.js?");

/***/ }),

/***/ "./src/MapText.js":
/*!************************!*\
  !*** ./src/MapText.js ***!
  \************************/
/*! exports provided: kaliope, which, other, what, that, thisStage, who, mushroom, sd, snakejake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kaliope\", function() { return kaliope; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"which\", function() { return which; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"other\", function() { return other; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"what\", function() { return what; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"that\", function() { return that; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thisStage\", function() { return thisStage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"who\", function() { return who; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mushroom\", function() { return mushroom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sd\", function() { return sd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakejake\", function() { return snakejake; });\nconst kaliope = {\n  title: \"Kaliope\",\n  landmarks:\n    \"Between This Tent and Which Stage, where the comedy tent used to be\",\n  content:\n    \"This is your best bet for sunrise sets. Surprise DJ sets are not uncommon\",\n};\n\nconst which = {\n  title: \"Which Stage\",\n  landmarks: \"Through Squarch, left at the Broo'rs Festival\",\n  content:\n    \"The second largest stage, expect to see some big names here in between acts at What Stage\",\n};\n\nconst other = {\n  title: \"The Other\",\n  landmarks:\n    \"Go to the water tower. If you can't see the water tower, follow the pixies\",\n  content:\n    \"Only 2 years out of being the third tent, The Other has evolved into a stage devoted to EDM\",\n};\n\nconst what = {\n  title: \"What Stage\",\n  landmarks: \"Through Squarch, then just keep walking forward\",\n  content:\n    \"This is the largest stage where the headliners play each night and the closer on sunday. Use the buddy system\",\n};\n\nconst that = {\n  title: \"That Tent\",\n  landmarks:\n    \"Directly between the two entrances. Easier to get to through tower side\",\n  content:\n    \"The larger of the two tents, That Tent usually has a more chilled out lineup\",\n};\n\nconst thisStage = {\n  title: \"This Tent\",\n  landmarks: \"Between The Other and Kaliope\",\n  content:\n    \"This Tent is a great place to see some great undercard acts in a very intimate setting\",\n};\n\nconst who = {\n  title: \"Who\",\n  landmarks: \"Very close to the Broo'rs Festival and Dave's Mini-Doughnuts\",\n  content:\n    \"The smallest stage by a mile, The Who stage is a great place to find unknowns and chill while you eat and drink\",\n};\n\nconst mushroom = {\n  title: \"Mushroom Fountain\",\n  landmarks: \"Near The Broo'rs Fest and the giant Hamageddon sculpture\",\n  content:\n    \"Woke up and it was summer in Tennessee? Thow on your swimsuit and have yourself a cool down\",\n};\n\nconst sd = {\n  title: \"Silent Disco\",\n  landmarks: \"Near The Other and the food trucks\",\n  content:\n    \"The Silent Disco is a tent where you don headphones(provided) and dance to music that only you and the others in the tent can hear\",\n};\n\nconst snakejake = {\n  title: \"Snake and Jake's Chritmas Barn\",\n  landmarks: \"Through the Water Tower entrance and staight for a few seconds\",\n  content:\n    \"Snake and Jake's is a fun little place to sit down and have a drink. Foam parties are common\",\n};\n\n\n//# sourceURL=webpack:///./src/MapText.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MapRoo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapRoo */ \"./src/MapRoo.js\");\n/* harmony import */ var _MapText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapText */ \"./src/MapText.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const root = document.getElementById(\"root\");\n  const imgModal = document.getElementById(\"img-modal\");\n  const infoModal = document.getElementById(\"info-modal\");\n  const modalOverlay = document.getElementById(\"modal-overlay\");\n  const background = document.getElementById(\"background\");\n  const wrapper = document.getElementById(\"wrapper\");\n  const nav = document.getElementById(\"nav\");\n  const img = document.getElementById(\"location-img\");\n\n  const closeModal = () => {\n    background.classList.remove(\"zoom\", \"small\");\n    wrapper.classList.remove(\"oh\");\n    modalOverlay.classList.remove(\"modal-overlay\");\n    imgModal.classList.remove(\"img-modal\");\n    infoModal.classList.remove(\"info-modal\");\n    background.setAttribute(\"style\", \"\");\n    nav.innerHTML = \"Click on a landmark to show info\";\n  };\n\n  const openModal = () => {\n    modalOverlay.classList.add(\"modal-overlay\");\n    infoModal.classList.add(\"info-modal\");\n    const om = setTimeout(() => {\n      imgModal.classList.add(\"img-modal\");\n      clearTimeout(om);\n    }, 2000);\n    nav.innerHTML = \"Click anywhere to close and zoom out\";\n  };\n\n  background.addEventListener(\"click\", (e) => {\n    if (e.target.id === \"background\") return console.log(e.offsetX);\n    wrapper.classList.add(\"oh\");\n    background.classList.add(\"small\", \"zoom\");\n    const id = e.target.id;\n    const mapPoint = new _MapRoo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](window.innerHeight, id);\n    mapPoint[id](e);\n    openModal();\n  });\n\n  function zoom(event) {\n    console.log(\"inside zoom\");\n    event.preventDefault();\n    if (event.deltaY < 0) {\n      // Zoom in\n      scale *= event.deltaY * -0.02;\n    } else {\n      // Zoom out\n      scale /= event.deltaY * 0.02;\n    }\n    // Restrict scale\n    scale = Math.min(Math.max(0.125, scale), 4);\n    // Apply scale transform\n    img.style.transform = `scale(${scale})`;\n  }\n  let scale = 1;\n  img.onwheel = zoom;\n\n  modalOverlay.addEventListener(\"click\", closeModal);\n\n  window.name = _MapText__WEBPACK_IMPORTED_MODULE_1__[\"kaliope\"];\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });