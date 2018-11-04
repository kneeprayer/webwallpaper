import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "949089e76a6e4f32459b0eba9d5d6942cd157e0ba9402b84eb82a5ed26fd39f7",
  secret: "6ce448655789bc6494d9f40bf493ec341763951fa686fc4c8c8e67d207ca4faf",
  callbackUrl: "https://kneeprayer.github.io/webwallpaper/"
});

const body = document.querySelector("body"),
  locationContainer = document.querySelector(".js-location span");

function loadBackground() {
  const savedImage = localStorage.getItem("bg");
  if (savedImage === null) {
    getBackground();
  } else {
    const parsedImage = JSON.parse(savedImage);
    const today = new Date();
    if (today > parsedImage.expiresOn) {
      getBackground();
    } else {
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("${
        parsedImage.url
      }")`;
      locationContainer.innerHTML = `${parsedImage.name}, ${
        parsedImage.city
      }, ${parsedImage.country}`;
    }
  }
  return;
}

function saveBackground(imageUrl, city, country, name) {
  const savedImage = localStorage.getItem("bg");
  if (savedImage !== null) {
    localStorage.removeItem("bg");
  }
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const imageObject = {
    url: imageUrl,
    expiresOn: expirationDate,
    city,
    country,
    name
  };
  localStorage.setItem("bg", JSON.stringify(imageObject));
  loadBackground();
  return;
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
    });
}

function initApp() {
  loadBackground();
  return;
}

initApp();
