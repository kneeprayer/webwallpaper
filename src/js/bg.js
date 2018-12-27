import Unsplash, { toJson } from "unsplash-js";
const slideBackground = document.querySelector(".slideBackground");
const slideLeft = document.querySelector(".slideLeft");
const slideRight = document.querySelector(".slideRight");
const locationContainer = document.querySelector(".js-location span");
const spinner = document.querySelector(".spinner");
// eslint-disable-next-line no-unused-vars
let dragStartX = null;
let unsplash = null;
var bgIndex = 0;

function sleep(waitMsec) {
  var startMsec = new Date();
  while (new Date() - startMsec < waitMsec);
}

function initUnsplash() {
  var savedUnsplash = window.localStorage.getItem("unsplashInfo");
  if (savedUnsplash === null) {
    window.localStorage.setItem(
      "unsplashInfo",
      JSON.stringify({
        unsplash: {
          applicationId:
            "949089e76a6e4f32459b0eba9d5d6942cd157e0ba9402b84eb82a5ed26fd39f7",
          secret:
            "6ce448655789bc6494d9f40bf493ec341763951fa686fc4c8c8e67d207ca4faf",
          callbackUrl: "https://kneeprayer.github.io/webwallpaper/"
        }
      })
    );
    savedUnsplash = window.localStorage.getItem("unsplashInfo");
  }
  var parsedUnsplash = JSON.parse(savedUnsplash).unsplash;
  unsplash = new Unsplash({
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
    if (
      typeof parsedImage !== "undefined" &&
      today > new Date(parsedImage[0].expiresOn)
    ) {
      removeBackgroundImage();
      getBackground();
    } else if (typeof parsedImage === "undefined" || parsedImage.length < 5) {
      getBackground();
      sleep(1000);
    } else if (
      slideBackground.getElementsByClassName("slideBackground__img").length <= 5
    ) {
      var i = 0;
      parsedImage.forEach(e => {
        var img = document.createElement("div");
        img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("${
          e.url
        }")`;
        img.setAttribute("id", `bg${i}`);
        img.classList.add("slideBackground__img");
        if (i == 0) {
          img.classList.add("visible");
        } else {
          img.classList.add("invisible");
        }
        slideBackground.appendChild(img);
        ++i;
      });
    }
    locationContainer.innerHTML = `${parsedImage[0].name}, ${
      parsedImage[0].city
    }, ${parsedImage[0].country}`;
  }
}

function removeBackgroundImage() {
  var savedImage = window.localStorage.getItem("bg");
  var myImageArray = JSON.parse(savedImage).myImages;
  myImageArray.shift();
  window.localStorage.setItem("bg", JSON.stringify({ myImages: myImageArray }));
}

function rotateBackgroundImage() {
  var savedImage = window.localStorage.getItem("bg");
  var myImageArray = JSON.parse(savedImage).myImages;
  var currentBG = document.getElementById(`bg${bgIndex}`);
  currentBG.classList.remove("visible");
  currentBG.classList.add("invisible");
  bgIndex++;
  if (bgIndex >= myImageArray.length) {
    bgIndex = 0;
  }
  currentBG = document.getElementById(`bg${bgIndex}`);
  currentBG.classList.remove("invisible");
  currentBG.classList.add("visible");
}

function reverseRotateBackgroundImage() {
  var savedImage = window.localStorage.getItem("bg");
  var myImageArray = JSON.parse(savedImage).myImages;
  var currentBG = document.getElementById(`bg${bgIndex}`);
  currentBG.classList.remove("visible");
  currentBG.classList.add("invisible");
  bgIndex--;
  if (bgIndex < 0) {
    bgIndex = myImageArray.length - 1;
  }
  currentBG = document.getElementById(`bg${bgIndex}`);
  currentBG.classList.remove("invisible");
  currentBG.classList.add("visible");
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
  unsplash.photos
    .getRandomPhoto({ query: "landscape", orientation: "landscape" })
    .then(toJson)
    .then(json => {
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
    })
    .catch(error => {
      console.log(error);
    });
}

function initApp() {
  initUnsplash();
  loadBackground();
}

window.addEventListener("load", function() {
  sleep(5000);
  spinner.classList.add("loaderTurnOff");
  setInterval(rotateBackgroundImage, 10000);
});

slideLeft.addEventListener("click", rotateBackgroundImage);
slideRight.addEventListener("click", reverseRotateBackgroundImage);
slideBackground.addEventListener("drag", () => {}, false);
slideBackground.addEventListener(
  "dragstart",
  function(event) {
    dragStartX = event.screenX;
    console.log("start : dragStartX");
  },
  false
);

slideBackground.addEventListener(
  "dragend",
  function(event) {
    var dragEndX = event.screenX;
    console.log("start : dragStartX");
    console.log(dragEndX);
  },
  false
);

initApp();
