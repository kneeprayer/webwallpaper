const appleIcon57 = require("../html/apple-icon-57x57.png");
const appleIcon60 = require("../html/apple-icon-60x60.png");
const appleIcon72 = require("../html/apple-icon-72x72.png");
const appleIcon76 = require("../html/apple-icon-72x72.png");
const appleIcon114 = require("../html/apple-icon-114x114.png");
const appleIcon120 = require("../html/apple-icon-120x120.png");
const appleIcon144 = require("../html/apple-icon-144x144.png");
const appleIcon152 = require("../html/apple-icon-152x152.png");
const appleIcon180 = require("../html/apple-icon-180x180.png");
const appleIcon192 = require("../html/android-icon-192x192.png");
const favicon16 = require("../html/favicon-16x16.png");
const favicon32 = require("../html/favicon-32x32.png");
const favicon96 = require("../html/favicon-96x96.png");
const manifest = require("../html/manifest.json");

const innerHtml =
  `
    <link rel="apple-touch-icon" sizes="57x57" href="` +
  appleIcon57 +
  `">
    <link rel="apple-touch-icon" sizes="60x60" href="` +
  appleIcon60 +
  `">
    <link rel="apple-touch-icon" sizes="72x72" href="` +
  appleIcon72 +
  `">
    <link rel="apple-touch-icon" sizes="76x76" href="` +
  appleIcon76 +
  `">
    <link rel="apple-touch-icon" sizes="114x114" href="` +
  appleIcon114 +
  `">
    <link rel="apple-touch-icon" sizes="120x120" href="` +
  appleIcon120 +
  `">
    <link rel="apple-touch-icon" sizes="144x144" href="` +
  appleIcon144 +
  `">
    <link rel="apple-touch-icon" sizes="152x152" href="` +
  appleIcon152 +
  `">
    <link rel="apple-touch-icon" sizes="180x180" href="` +
  appleIcon180 +
  `">
    <link rel="icon" type="image/png" sizes="192x192" href="` +
  appleIcon192 +
  `">
    <link rel="icon" type="image/png" sizes="16x16" href="` +
  favicon16 +
  `">
    <link rel="icon" type="image/png" sizes="32x32" href="` +
  favicon32 +
  `">
    <link rel="icon" type="image/png" sizes="96x96" href="` +
  favicon96 +
  `">
    <link rel="manifest" href="` +
  manifest +
  `">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="manifest">
    <meta name="theme-color" content="#ffffff">
`;

document
  .getElementsByTagName("head")[0]
  .insertAdjacentHTML("beforeend", innerHtml);
