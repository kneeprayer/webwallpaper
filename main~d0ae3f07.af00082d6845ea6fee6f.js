(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(362);


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/***/ (function(module, exports) {

document.getElementById("app").innerHTML = `
    <div class="slideBackground"></div>
    <header class="js-header">
        <div class="welcome">
            <div class="js-name name"></div>
        </div>
        <div class="head-center">
            <form class="todo-form">
                <input class="todo-input" placeholder="오늘 해야 할 일은?" type="text" aria-label="todo"/>
            </form>
        </div>
        <div class="js-weather weather">
            <span class="weather__text"></span>
        </div>
    </header>
    <section class="center-box">
        <div class="todo-box">
            <div class="todo-section" id="todo">
                <ul class="js-list">해야할 일</ul>
            </div>
            <div class="todo-section" id="doing">
                <ul class="js-list">진행중</ul>
            </div>
            <div class="todo-section" id="done">
                <ul class="js-list">완료</ul>
            </div>
        </div>
    </section>

    <div class="js-location location">
        <span class="location__text"></span>
    </div>
    <div class="js-clock clock">
        <p id="clock">00:00:00</p>
    </div>
    <div class="slideLeft"></div>
    <div class="slideRight"></div>
`;

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

const clock = document.getElementById("clock");
let viewClockMode = JSON.parse(window.localStorage.getItem("clock"));

function getTimeHangul() {
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

  if (now.getMinutes() !== 0) {
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

  if (now.getSeconds() !== 0) {
    time += " 초<br>";
  } else {
    time += "<br>";
  }

  clock.innerHTML = time;
}

function getTimeNumber() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.innerHTML = `
    ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}
  `;
}

function getTime() {
  if (!viewClockMode) {
    viewClockMode = "Hangul";
    clock.classList.add("clock__hangul");
    window.localStorage.setItem("clock", JSON.stringify(viewClockMode));
  }

  if (viewClockMode === "Number") {
    clock.classList.remove("clock__hangul");
    getTimeNumber();
  } else {
    clock.classList.add("clock__hangul");
    getTimeHangul();
  }
}

function toggleClock() {
  if (viewClockMode === "Number") {
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
}

clock.addEventListener("click", toggleClock);
init();

/***/ }),

/***/ 360:
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
  window.localStorage.setItem("username", value);
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
  const name = window.localStorage.getItem("username");

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

/***/ 361:
/***/ (function(module, exports) {

const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
let toDos = [];
let dragged;

function persistToDos() {
  const stringToDo = JSON.stringify(toDos);
  window.localStorage.setItem("toDos", stringToDo); // eslint-disable-line no-unused-vars
}

function saveToDo(index, text, status) {
  const toDo = {
    index: index,
    value: text,
    status: status
  };
  toDos.push(toDo);
  persistToDos();
}

function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoIndex = li.id;
  ul.removeChild(li);
  toDos = toDos.filter(function (toDo) {
    return toDo.index !== parseInt(toDoIndex);
  });
  persistToDos();
}

function addToDo(index, text, status) {
  const toDo = document.createElement("li");
  toDo.className = "toDo";

  if (index === null) {
    if (toDos.length === 0) {
      index = 1;
    } else {
      index = toDos[toDos.length - 1].index + 1;
    }
  }

  toDo.id = index;
  toDo.setAttribute("draggable", "true");
  toDo.setAttribute("aria-grabbed", "false");
  toDo.setAttribute("tabindex", index);
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = " ❎ ";
  deleteBtn.className = "toDo__button";
  deleteBtn.addEventListener("click", handleDelete);
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(label);
  toDo.appendChild(deleteBtn);
  const todoList = document.querySelector("#todo .js-list");
  const doingList = document.querySelector("#doing  .js-list");
  const doneList = document.querySelector("#done  .js-list");
  if (status === "todo") todoList.appendChild(toDo);
  if (status === "doing") doingList.appendChild(toDo);
  if (status === "done") doneList.appendChild(toDo);
  saveToDo(index, text, status);
}

function moveToDo(dragged, dropped) {
  if (dropped.querySelector(".js-list") !== null) {
    let index = 0;
    let toDoValue = null;

    for (let i = 0; i < toDos.length; i++) {
      if (parseInt(toDos[i].index) === parseInt(dragged.id)) {
        toDoValue = {
          index: toDos[i].index,
          value: dragged.querySelector("label").innerHTML,
          status: dropped.id
        };
        index = i;
      }
    }

    toDos.splice(index, 1, toDoValue);
    persistToDos();
    dragged.parentNode.removeChild(dragged);
    dropped.querySelector("ul.js-list").appendChild(dragged);
  }
}

function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addToDo(null, value, "todo");
}

function loadToDos() {
  const loadedToDos = window.localStorage.getItem("toDos");

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      return addToDo(toDo.index, toDo.value, toDo.status);
    });
  }
}

function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);
/* events fired on the draggable target */

document.addEventListener("drag", function () {}, false);
document.addEventListener("dragstart", function (event) {
  // store a ref. on the dragged elem
  dragged = event.target; // make it half transparent

  event.target.style.opacity = 0.5;
}, false);
document.addEventListener("dragend", function (event) {
  // reset the transparency
  event.target.style.opacity = 1;
}, false);
/* events fired on the drop targets */

document.addEventListener("dragover", function (event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);
document.addEventListener("dragenter", function (dropped) {
  // highlight potential drop target when the draggable element enters it
  if (dropped.target.className === "todo-section") {
    dropped.target.style.opacity = 0.5;
  } else if (dropped.target.parentNode.className === "todo-section") {
    dropped.target.parentNode.style.opacity = 0.5;
  } else if (dropped.target.parentNode.parentNode.className === "todo-section") {
    dropped.target.parentNode.parentNode.style.opacity = 0.5;
  }
}, false);
document.addEventListener("dragleave", function (dropped) {
  // reset background of potential drop target when the draggable element leaves it
  if (dropped.target.className === "todo-section") {
    dropped.target.style.opacity = 1;
  } else if (dropped.target.parentNode.className === "todo-section") {
    dropped.target.parentNode.style.opacity = 1;
  } else if (dropped.target.parentNode.parentNode.className === "todo-section") {
    dropped.target.parentNode.parentNode.style.opacity = 1;
  }
}, false);
document.addEventListener("drop", function (dropped) {
  // prevent default action (open as link for some elements)
  dropped.preventDefault(); // move dragged elem to the selected drop target

  if (dropped.target.className === "todo-section") {
    dropped.target.style.opacity = 1;
    moveToDo(dragged, dropped.target);
  } else if (dropped.target.parentNode.className === "todo-section") {
    dropped.target.parentNode.style.opacity = 1;
    moveToDo(dragged, dropped.target.parentNode);
  } else if (dropped.target.parentNode.parentNode.className === "todo-section") {
    dropped.target.parentNode.style.opacity = 1;
    moveToDo(dragged, dropped.target.parentNode.parentNode);
  }
}, false);
init();

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/css/styles.css
var styles = __webpack_require__(333);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(334);

// EXTERNAL MODULE: ./src/css/header.css
var header = __webpack_require__(335);

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

// EXTERNAL MODULE: ./src/css/bg.css
var bg = __webpack_require__(341);

// EXTERNAL MODULE: ./src/js/body.js
var body = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/unsplash-js/lib/unsplash.js
var unsplash = __webpack_require__(91);
var unsplash_default = /*#__PURE__*/__webpack_require__.n(unsplash);

// CONCATENATED MODULE: ./src/js/bg.js

const slideBackground = document.querySelector(".slideBackground");
const slideLeft = document.querySelector(".slideLeft");
const slideRight = document.querySelector(".slideRight");
const locationContainer = document.querySelector(".js-location span");
const spinner = document.querySelector(".spinner"); // eslint-disable-next-line no-unused-vars

let dragStartX = null;
let bg_unsplash = null;
let unsplashApiErrorCount = 0;
window.localStorage.setItem("bgIndex", "0");

function unsplashApiOverMaximumCallLimits() {
  saveBackground("https://images.unsplash.com/photo-1467654513564-17c5e87d8f20?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwOTIzfQ", "Patras", "Greece", "Patras");
  saveBackground("https://images.unsplash.com/photo-1543491434-cf5cd3f7da64?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwOTIzfQ", "Tokyo", "Japan", "The city of houses");
  saveBackground("https://images.unsplash.com/photo-1494906084264-f315becbf75e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwOTIzfQ", "Fruita", "United States", "Colorado National Monument");
  saveBackground("https://images.unsplash.com/photo-1547078353-be807bdb3f8e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwOTIzfQ", "Toronto", "Canada", "7473 Eglinton Ave E, Toronto, ON M3C, Canada");
  saveBackground("https://images.unsplash.com/photo-1542029432708-e3f7968a4620?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwOTIzfQ", "Bournemouth", "United Kingdom", "Boscombe Promenade, Bournemouth BH5 1BN, UK");
  unsplashApiErrorCount = 0;
}

function sleep(waitMsec) {
  const startMsec = new Date();

  while (new Date() - startMsec < waitMsec);
}

function initUnsplash() {
  let savedUnsplash = window.localStorage.getItem("unsplashInfo");

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

  const parsedUnsplash = JSON.parse(savedUnsplash).unsplash;
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
    const parsedImage = JSON.parse(savedImage).myImages;
    const today = new Date();

    if (typeof parsedImage !== "undefined" && today > new Date(parsedImage[0].expiresOn)) {
      removeBackgroundImage();
      getBackground();
    } else if (unsplashApiErrorCount >= 5) {
      unsplashApiOverMaximumCallLimits();
      loadBackground();
    } else if (typeof parsedImage === "undefined" || parsedImage.length < 5) {
      sleep(1000);
      getBackground();
    } else if (slideBackground.getElementsByClassName("slideBackground__img").length <= 5) {
      let i = 0;
      parsedImage.forEach(e => {
        const img = document.createElement("div");
        img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("${e.url}")`;
        img.setAttribute("id", `bg${i}`);
        img.classList.add("slideBackground__img");

        if (i === 0) {
          img.classList.add("visible");
        } else {
          img.classList.add("invisible");
        }

        slideBackground.appendChild(img);
        ++i;
      });
      locationContainer.innerHTML = `${parsedImage[0].name}, ${parsedImage[0].city}, ${parsedImage[0].country}`;
    }
  }
}

function removeBackgroundImage() {
  const savedImage = window.localStorage.getItem("bg");
  const myImageArray = JSON.parse(savedImage).myImages;
  myImageArray.shift();
  window.localStorage.setItem("bg", JSON.stringify({
    myImages: myImageArray
  }));
}

function rotateBackgroundImage() {
  let bgIndex = Number(window.localStorage.getItem("bgIndex"));
  const savedImage = window.localStorage.getItem("bg");
  const myImageArray = JSON.parse(savedImage).myImages;
  let currentBG = document.getElementById(`bg${bgIndex}`);
  currentBG.classList.remove("visible");
  currentBG.classList.add("invisible");
  bgIndex++;

  if (bgIndex >= myImageArray.length) {
    bgIndex = 0;
  }

  currentBG = document.getElementById(`bg${bgIndex}`);
  currentBG.classList.remove("invisible");
  currentBG.classList.add("visible");
  window.localStorage.setItem("bgIndex", bgIndex.toString());
}

function reverseRotateBackgroundImage() {
  let bgIndex = Number(window.localStorage.getItem("bgIndex"));
  const savedImage = window.localStorage.getItem("bg");
  const myImageArray = JSON.parse(savedImage).myImages;
  let currentBG = document.getElementById(`bg${bgIndex}`);
  currentBG.classList.remove("visible");
  currentBG.classList.add("invisible");
  bgIndex--;

  if (bgIndex < 0) {
    bgIndex = myImageArray.length - 1;
  }

  currentBG = document.getElementById(`bg${bgIndex}`);
  currentBG.classList.remove("invisible");
  currentBG.classList.add("visible");
  window.localStorage.setItem("bgIndex", bgIndex.toString());
}

function saveBackground(imageUrl, city, country, name) {
  const savedImage = window.localStorage.getItem("bg");
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 8);
  let myImageArray;
  let parsedImage;

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
      loadBackground();
    } else {
      getBackground();
    }
  }).catch(error => {
    unsplashApiErrorCount++;
    console.log(error);
  });
}

function initApp() {
  initUnsplash();
  loadBackground();
}

window.addEventListener("load", function () {
  sleep(5000);
  spinner.classList.add("loaderTurnOff");
  setInterval(rotateBackgroundImage, 10000);
});
slideLeft.addEventListener("click", rotateBackgroundImage);
slideRight.addEventListener("click", reverseRotateBackgroundImage);
slideBackground.addEventListener("drag", () => {}, false);
slideBackground.addEventListener("dragstart", function (event) {
  dragStartX = event.screenX;
  console.log("start : dragStartX");
}, false);
slideBackground.addEventListener("dragend", function (event) {
  const dragEndX = event.screenX;
  console.log("start : dragStartX");
  console.log(dragEndX);
}, false);
initApp();
// EXTERNAL MODULE: ./src/js/clock.js
var js_clock = __webpack_require__(358);

// EXTERNAL MODULE: ./node_modules/isomorphic-fetch/fetch-npm-browserify.js
var fetch_npm_browserify = __webpack_require__(129);
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
var greeting = __webpack_require__(360);

// EXTERNAL MODULE: ./src/js/todo.js
var js_todo = __webpack_require__(361);

// CONCATENATED MODULE: ./src/js/app.js
















/***/ })

},[[130,1,2,4,3]]]);