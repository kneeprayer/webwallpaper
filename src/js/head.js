const appleIcon57X57 = require("../html/apple-icon-57x57.png");
const appleIcon60X60 = require("../html/apple-icon-60x60.png");
const appleIcon72X72 = require("../html/apple-icon-72x72.png");
const appleIcon76X76 = require("../html/apple-icon-72x72.png");
const appleIcon114X114 = require("../html/apple-icon-114x114.png");
const appleIcon120X120 = require("../html/apple-icon-120x120.png");
const appleIcon144X144 = require("../html/apple-icon-144x144.png");
const appleIcon152X152 = require("../html/apple-icon-152x152.png");
const appleIcon180X180 = require("../html/apple-icon-180x180.png");
const appleIcon192X192 = require("../html/android-icon-192x192.png");
const favicon16X16 = require("../html/favicon-16x16.png");
const favicon32X32 = require("../html/favicon-32x32.png");
const favicon96X96 = require("../html/favicon-96x96.png");
const manifest = require("../html/manifest.json");

const innerHtml =
  `
    <link rel="apple-touch-icon" sizes="57x57" href="` +
  appleIcon57X57 +
  `">
    <link rel="apple-touch-icon" sizes="60x60" href="` +
  appleIcon60X60 +
  `">
    <link rel="apple-touch-icon" sizes="72x72" href="` +
  appleIcon72X72 +
  `">
    <link rel="apple-touch-icon" sizes="76x76" href="` +
  appleIcon76X76 +
  `">
    <link rel="apple-touch-icon" sizes="114x114" href="` +
  appleIcon114X114 +
  `">
    <link rel="apple-touch-icon" sizes="120x120" href="` +
  appleIcon120X120 +
  `">
    <link rel="apple-touch-icon" sizes="144x144" href="` +
  appleIcon144X144 +
  `">
    <link rel="apple-touch-icon" sizes="152x152" href="` +
  appleIcon152X152 +
  `">
    <link rel="apple-touch-icon" sizes="180x180" href="` +
  appleIcon180X180 +
  `">
    <link rel="icon" type="image/png" sizes="192x192" href="` +
  appleIcon192X192 +
  `">
    <link rel="icon" type="image/png" sizes="16x16" href="` +
  favicon16X16 +
  `">
    <link rel="icon" type="image/png" sizes="32x32" href="` +
  favicon32X32 +
  `">
    <link rel="icon" type="image/png" sizes="96x96" href="` +
  favicon96X96 +
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
