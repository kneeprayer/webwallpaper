const apple_icon_57_57 = require("../html/apple-icon-57x57.png");
const apple_icon_60_60 = require("../html/apple-icon-60x60.png");
const apple_icon_72_72 = require("../html/apple-icon-72x72.png");
const apple_icon_76_76 = require("../html/apple-icon-72x72.png");
const apple_icon_114_114 = require("../html/apple-icon-114x114.png");
const apple_icon_120_120 = require("../html/apple-icon-120x120.png");
const apple_icon_144_144 = require("../html/apple-icon-144x144.png");
const apple_icon_152_152 = require("../html/apple-icon-152x152.png");
const apple_icon_180_180 = require("../html/apple-icon-180x180.png");
const apple_icon_192_192 = require("../html/android-icon-192x192.png");
const favicon_16_16 = require("../html/favicon-16x16.png");
const favicon_32_32 = require("../html/favicon-32x32.png");
const favicon_96_96 = require("../html/favicon-96x96.png");
const ms_icon_144_144 = require("../html/ms-icon-144x144.png");
const manifest = require("../html/manifest.json");

var innerHtml =
  `
    <link rel="apple-touch-icon" sizes="57x57" href="` +
  apple_icon_57_57 +
  `">
    <link rel="apple-touch-icon" sizes="60x60" href="` +
  apple_icon_60_60 +
  `">
    <link rel="apple-touch-icon" sizes="72x72" href="` +
  apple_icon_72_72 +
  `">
    <link rel="apple-touch-icon" sizes="76x76" href="` +
  apple_icon_76_76 +
  `">
    <link rel="apple-touch-icon" sizes="114x114" href="` +
  apple_icon_114_114 +
  `">
    <link rel="apple-touch-icon" sizes="120x120" href="` +
  apple_icon_120_120 +
  `">
    <link rel="apple-touch-icon" sizes="144x144" href="` +
  apple_icon_144_144 +
  `">
    <link rel="apple-touch-icon" sizes="152x152" href="` +
  apple_icon_152_152 +
  `">
    <link rel="apple-touch-icon" sizes="180x180" href="` +
  apple_icon_180_180 +
  `">
    <link rel="icon" type="image/png" sizes="192x192" href="` +
  apple_icon_192_192 +
  `">
    <link rel="icon" type="image/png" sizes="16x16" href="` +
  favicon_16_16 +
  `">
    <link rel="icon" type="image/png" sizes="32x32" href="` +
  favicon_32_32 +
  `">
    <link rel="icon" type="image/png" sizes="96x96" href="` +
  favicon_96_96 +
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
