/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([131,2,4,1,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "602ea1a448fe2bc93709ef9c78da9e55.png";

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
module.exports = __webpack_require__(376);


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

const apple_icon_57_57 = __webpack_require__(343);

const apple_icon_60_60 = __webpack_require__(344);

const apple_icon_72_72 = __webpack_require__(126);

const apple_icon_76_76 = __webpack_require__(126);

const apple_icon_114_114 = __webpack_require__(345);

const apple_icon_120_120 = __webpack_require__(346);

const apple_icon_144_144 = __webpack_require__(347);

const apple_icon_152_152 = __webpack_require__(348);

const apple_icon_180_180 = __webpack_require__(349);

const apple_icon_192_192 = __webpack_require__(350);

const favicon_16_16 = __webpack_require__(351);

const favicon_32_32 = __webpack_require__(352);

const favicon_96_96 = __webpack_require__(353);

const ms_icon_144_144 = __webpack_require__(354);

const manifest = __webpack_require__(355);

var innerHtml = `
    <link rel="apple-touch-icon" sizes="57x57" href="` + apple_icon_57_57 + `">
    <link rel="apple-touch-icon" sizes="60x60" href="` + apple_icon_60_60 + `">
    <link rel="apple-touch-icon" sizes="72x72" href="` + apple_icon_72_72 + `">
    <link rel="apple-touch-icon" sizes="76x76" href="` + apple_icon_76_76 + `">
    <link rel="apple-touch-icon" sizes="114x114" href="` + apple_icon_114_114 + `">
    <link rel="apple-touch-icon" sizes="120x120" href="` + apple_icon_120_120 + `">
    <link rel="apple-touch-icon" sizes="144x144" href="` + apple_icon_144_144 + `">
    <link rel="apple-touch-icon" sizes="152x152" href="` + apple_icon_152_152 + `">
    <link rel="apple-touch-icon" sizes="180x180" href="` + apple_icon_180_180 + `">
    <link rel="icon" type="image/png" sizes="192x192" href="` + apple_icon_192_192 + `">
    <link rel="icon" type="image/png" sizes="16x16" href="` + favicon_16_16 + `">
    <link rel="icon" type="image/png" sizes="32x32" href="` + favicon_32_32 + `">
    <link rel="icon" type="image/png" sizes="96x96" href="` + favicon_96_96 + `">
    <link rel="manifest" href="` + manifest + `">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="manifest">
    <meta name="theme-color" content="#ffffff">
`;
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", innerHtml);

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "245db91b2b6a119816f10e48e455a760.png";

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f36ca233dcbaa21621a9b02c1471ae6.png";

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f43235f532648237571183d3daf076f3.png";

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "280b4d0a396bc52fa3147152af50e6d7.png";

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1f769998eb7dbcdfbee3f972eb50f3f7.png";

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0542ef827d62c48cf01511efd2e2eb00.png";

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "23159d2ccd00855611c16c1725b4f574.png";

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "58fdda486d3f41268b1da856787107dc.png";

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d54416a23e17125bb610de36533b6acf.png";

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f820826bccb9d04a6fbeb7a8c109a0d6.png";

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7cb90db60464f38ddee0c80905a9e480.png";

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1f769998eb7dbcdfbee3f972eb50f3f7.png";

/***/ }),

/***/ 355:
/***/ (function(module) {

module.exports = {"name":"App","icons":[{"src":"/android-icon-36x36.png","sizes":"36x36","type":"image/png","density":"0.75"},{"src":"/android-icon-48x48.png","sizes":"48x48","type":"image/png","density":"1.0"},{"src":"/android-icon-72x72.png","sizes":"72x72","type":"image/png","density":"1.5"},{"src":"/android-icon-96x96.png","sizes":"96x96","type":"image/png","density":"2.0"},{"src":"/android-icon-144x144.png","sizes":"144x144","type":"image/png","density":"3.0"},{"src":"/android-icon-192x192.png","sizes":"192x192","type":"image/png","density":"4.0"}]};

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

document.getElementById("app").innerHTML = `
    <div class="slideBackground"></div>
    <div class="welcome">
        <div class="js-name name"></div>
    </div>
    <section class="center">
        <div>
            <form class="js-to-do to-do">
                <input class="js-add-to-do to-do__add-to-do" placeholder="오늘 해야 할 일은?" type="text" aria-label="todo"/>
            </form>
            <ul class="js-list list"></ul>
        </div>
    </section>

    <div class="js-location location">
        <span class="location__text"></span>
    </div>

    <div class="js-weather weather">
        <span class="weather__text"></span>
    </div>

    <div class="js-clock clock">
        <h3 class="clock__text clock__hangul">00:00:00</h3>
    </div>

    <div class="slideLeft"></div>
    <div class="slideRight"></div>
`;

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

const clock = document.querySelector(".js-clock .clock__text");
var viewClockMode = JSON.parse(window.localStorage.getItem("clock"));

function getTimeHangul(hours, minutes, seconds) {
  const now = new Date();
  let time;

  switch (parseInt(now.getHours() / 12)) {
    case 0:
      time = "오전";
      break;

    case 1:
      time = "오후";
      break;
  }

  switch (now.getHours() % 12) {
    case 0:
      time += " 영";
      break;

    case 1:
      time += " 한";
      break;

    case 2:
      time += " 두";
      break;

    case 3:
      time += " 세";
      break;

    case 4:
      time += " 네";
      break;

    case 5:
      time += " 다섯";
      break;

    case 6:
      time += " 여섯";
      break;

    case 7:
      time += " 일곱";
      break;

    case 8:
      time += " 여덟";
      break;

    case 9:
      time += " 아홉";
      break;

    case 10:
      time += " 열";
      break;

    case 11:
      time += " 열한";
      break;

    case 12:
      time += " 열두";
      break;
  }

  time += " 시<br>";

  switch (parseInt(now.getMinutes() / 10)) {
    case 1:
      time += " 십";
      break;

    case 2:
      time += " 이 십";
      break;

    case 3:
      time += " 삼 십";
      break;

    case 4:
      time += " 사 십";
      break;

    case 5:
      time += " 오 십";
      break;

    case 6:
      time += " 육 십";
  }

  switch (now.getMinutes() % 10) {
    case 1:
      time += " 일";
      break;

    case 2:
      time += " 이";
      break;

    case 3:
      time += " 삼";
      break;

    case 4:
      time += " 사";
      break;

    case 5:
      time += " 오";
      break;

    case 6:
      time += " 육";
      break;

    case 7:
      time += " 칠";
      break;

    case 8:
      time += " 팔";
      break;

    case 9:
      time += " 구";
  }

  if (now.getMinutes() != 0) {
    time += " 분<br>";
  } else {
    time += "<br>";
  }

  switch (parseInt(now.getSeconds() / 10)) {
    case 1:
      time += " 십";
      break;

    case 2:
      time += " 이 십";
      break;

    case 3:
      time += " 삼 십";
      break;

    case 4:
      time += " 사 십";
      break;

    case 5:
      time += " 오 십";
      break;

    case 6:
      time += " 육 십";
  }

  switch (now.getSeconds() % 10) {
    case 1:
      time += " 일";
      break;

    case 2:
      time += " 이";
      break;

    case 3:
      time += " 삼";
      break;

    case 4:
      time += " 사";
      break;

    case 5:
      time += " 오";
      break;

    case 6:
      time += " 육";
      break;

    case 7:
      time += " 칠";
      break;

    case 8:
      time += " 팔";
      break;

    case 9:
      time += " 구";
  }

  if (now.getSeconds() != 0) {
    time += " 초<br>";
  } else {
    time += "<br>";
  }

  clock.innerHTML = time;
  return;
}

function getTimeNumber() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = `
    ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}
  `;
  clock.innerHTML = time;
  return;
}

function getTime() {
  if (!viewClockMode) {
    viewClockMode = "Hangul";
    clock.classList.add("clock__hangul");
    window.localStorage.setItem("clock", JSON.stringify(viewClockMode));
  }

  if (viewClockMode == "Number") {
    clock.classList.remove("clock__hangul");
    getTimeNumber();
  } else {
    clock.classList.add("clock__hangul");
    getTimeHangul();
  }
}

function toggleClock() {
  if (viewClockMode == "Number") {
    viewClockMode = "Hangul";
    clock.classList.add("clock__hangul");
  } else {
    viewClockMode = "Number";
    clock.classList.remove("clock__hangul");
  }

  window.localStorage.setItem("clock", JSON.stringify(viewClockMode));
  getTime();
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

clock.addEventListener("click", toggleClock);
init();

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

const nameContainer = document.querySelector(".js-name");

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `${name}님 안녕하세요`;
  nameContainer.appendChild(title);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  paintName(value);
}

function paintInput() {
  const input = document.createElement("input");
  input.setAttribute("aria-label", "name");
  input.placeholder = "이름을 넣어 주세요";
  input.type = "text";
  input.className = "name__input";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function loadName() {
  const name = localStorage.getItem("username");

  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function init() {
  loadName();
}

init();

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

const form = document.querySelector(".js-to-do"),
      input = document.querySelector(".js-add-to-do"),
      list = document.querySelector(".js-list");
let toDos = [];

function persistToDos() {
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem("toDos", stringToDo);
}

function saveToDo(text) {
  const toDoObject = {
    id: toDos.length + 1,
    value: text
  };
  toDos.push(toDoObject);
  persistToDos();
}

function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  toDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(toDoId);
  });
  persistToDos();
}

function addToDo(text) {
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  toDo.id = toDos.length + 1;
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "toDo__button";
  deleteBtn.addEventListener("click", handleDelete);
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(deleteBtn);
  toDo.appendChild(label);
  list.appendChild(toDo);
  saveToDo(text);
}

function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addToDo(value);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      addToDo(toDo.value);
    });
  }

  return;
}

function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);
init();

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/css/styles.css
var styles = __webpack_require__(334);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(335);

// EXTERNAL MODULE: ./src/css/location.css
var css_location = __webpack_require__(336);

// EXTERNAL MODULE: ./src/css/clock.css
var clock = __webpack_require__(337);

// EXTERNAL MODULE: ./src/css/weather.css
var weather = __webpack_require__(338);

// EXTERNAL MODULE: ./src/css/welcome.css
var welcome = __webpack_require__(339);

// EXTERNAL MODULE: ./src/css/todo.css
var todo = __webpack_require__(340);

// EXTERNAL MODULE: ./src/css/slide.css
var slide = __webpack_require__(341);

// EXTERNAL MODULE: ./src/js/head.js
var head = __webpack_require__(342);

// EXTERNAL MODULE: ./src/js/body.js
var body = __webpack_require__(356);

// EXTERNAL MODULE: ./node_modules/unsplash-js/lib/unsplash.js
var unsplash = __webpack_require__(91);
var unsplash_default = /*#__PURE__*/__webpack_require__.n(unsplash);

// CONCATENATED MODULE: ./src/js/bg.js

const slideBackground = document.querySelector(".slideBackground");
const slideLeft = document.querySelector(".slideLeft");
const slideRight = document.querySelector(".slideRight");
const locationContainer = document.querySelector(".js-location span"); // eslint-disable-next-line no-unused-vars

let dragStartX = null;
let bg_unsplash = null;

function sleep(waitMsec) {
  var startMsec = new Date();

  while (new Date() - startMsec < waitMsec);
}

function initUnsplash() {
  var savedUnsplash = window.localStorage.getItem("unsplashInfo");

  if (savedUnsplash === null) {
    window.localStorage.setItem("unsplashInfo", JSON.stringify({
      unsplash: {
        applicationId: "949089e76a6e4f32459b0eba9d5d6942cd157e0ba9402b84eb82a5ed26fd39f7",
        secret: "6ce448655789bc6494d9f40bf493ec341763951fa686fc4c8c8e67d207ca4faf",
        callbackUrl: "https://kneeprayer.github.io/webwallpaper/"
      }
    }));
    savedUnsplash = window.localStorage.getItem("unsplashInfo");
  }

  var parsedUnsplash = JSON.parse(savedUnsplash).unsplash;
  bg_unsplash = new unsplash_default.a({
    applicationId: parsedUnsplash.applicationId,
    secret: parsedUnsplash.secret,
    callbackUrl: parsedUnsplash.callbackUrl
  });
}

function loadBackground() {
  const savedImage = window.localStorage.getItem("bg");

  if (savedImage === null) {
    getBackground();
  } else {
    var parsedImage = JSON.parse(savedImage).myImages;
    var today = new Date();

    if (typeof parsedImage !== "undefined" && today > new Date(parsedImage[0].expiresOn)) {
      removeBackgroundImage();
      getBackground();
    } else if (typeof parsedImage === "undefined" || parsedImage.length < 5) {
      getBackground();
      sleep(1000);
    } else {
      slideBackground.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("${parsedImage[0].url}")`;
      locationContainer.innerHTML = `${parsedImage[0].name}, ${parsedImage[0].city}, ${parsedImage[0].country}`;
    }
  }
}

function removeBackgroundImage() {
  var savedImage = window.localStorage.getItem("bg");
  var myImageArray = JSON.parse(savedImage).myImages;
  myImageArray.shift();
  window.localStorage.setItem("bg", JSON.stringify({
    myImages: myImageArray
  }));
}

function rotateBackgroundImage() {
  var savedImage = window.localStorage.getItem("bg");
  var myImageArray = JSON.parse(savedImage).myImages;
  myImageArray.unshift(myImageArray.pop());
  window.localStorage.setItem("bg", JSON.stringify({
    myImages: myImageArray
  }));
  loadBackground();
}

function reverseRotateBackgroundImage() {
  var savedImage = window.localStorage.getItem("bg");
  var myImageArray = JSON.parse(savedImage).myImages;
  myImageArray.push(myImageArray.shift());
  window.localStorage.setItem("bg", JSON.stringify({
    myImages: myImageArray
  }));
  loadBackground();
}

function saveBackground(imageUrl, city, country, name) {
  var savedImage = window.localStorage.getItem("bg");
  var expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 8);
  var myImageArray;
  var parsedImage;

  if (savedImage == null) {
    myImageArray = [];
  } else {
    parsedImage = JSON.parse(savedImage);
    myImageArray = parsedImage.myImages;
  }

  myImageArray.push({
    expiresOn: expirationDate,
    url: imageUrl,
    city: city,
    country: country,
    name: name
  });
  parsedImage = {
    myImages: myImageArray
  };
  window.localStorage.setItem("bg", JSON.stringify(parsedImage));
  loadBackground();
}

function getBackground() {
  bg_unsplash.photos.getRandomPhoto({
    query: "landscape",
    orientation: "landscape"
  }).then(unsplash["toJson"]).then(json => {
    const image = json;

    if (image.urls && image.urls.full && image.location) {
      const fullUrl = image.urls.full;
      const location = image.location;
      const city = location.city;
      const country = location.country;
      const name = location.name;
      saveBackground(fullUrl, city, country, name);
    } else {
      getBackground();
    }
  }).catch(error => {
    console.log(error);
  });
}

function initApp() {
  initUnsplash();
  loadBackground();
  setInterval(rotateBackgroundImage, 60000);
}

slideLeft.addEventListener("click", rotateBackgroundImage);
slideRight.addEventListener("click", reverseRotateBackgroundImage);
slideBackground.addEventListener("drag", () => {}, false);
slideBackground.addEventListener("dragstart", function (event) {
  dragStartX = event.screenX;
  console.log("start : dragStartX");
}, false);
slideBackground.addEventListener("dragend", function (event) {
  var dragEndX = event.screenX;
  console.log("start : dragStartX");
  console.log(dragEndX);
}, false);
initApp();
// EXTERNAL MODULE: ./src/js/clock.js
var js_clock = __webpack_require__(372);

// EXTERNAL MODULE: ./node_modules/isomorphic-fetch/fetch-npm-browserify.js
var fetch_npm_browserify = __webpack_require__(130);
var fetch_npm_browserify_default = /*#__PURE__*/__webpack_require__.n(fetch_npm_browserify);

// CONCATENATED MODULE: ./src/js/weather.js

const API_KEY = "d64dc2934e936b8ea61c3f017d08693c";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";
const weather_weather = document.querySelector(".js-weather .weather__text");

function getWeather(coords) {
  fetch_npm_browserify_default()(`${WEATHER_API}lat=${coords.lat}&lon=${coords.lng}&appid=${API_KEY}&units=metric`).then(response => response.json()).then(json => {
    const name = json.name;
    const temperature = json.main.temp;
    weather_weather.innerHTML = `${Math.floor(temperature)}° @ ${name}`;
  });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng
  };
  window.localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}

function handleGeoFailure() {
  console.log("no location");
}

function loadWeather() {
  const currentCoords = window.localStorage.getItem("coords");

  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
  } else {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailure);
  }
}

function init() {
  loadWeather();
}

init();
// EXTERNAL MODULE: ./src/js/greeting.js
var greeting = __webpack_require__(374);

// EXTERNAL MODULE: ./src/js/todo.js
var js_todo = __webpack_require__(375);

// CONCATENATED MODULE: ./src/js/app.js
















/***/ })

/******/ });