!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).DataToData={})}(this,(function(t){"use strict";function e(t,n){if(!n)return null;if("string"==typeof n){const o=n.split("."),f=t[o[0]];if(1===o.length){if(f)return function(t){return"object"!=typeof t?t:JSON.parse(JSON.stringify(t))}(f)}else if(f&&"object"==typeof f){return e(f,o.splice(1).join("."))}}return null}t.dataToData=function t(n,o){if(!n||!o)return null;if("object"!=typeof n)return null;if("object"!=typeof o)return null;const f={};for(const i in o){const r=o[i];"string"==typeof r&&(f[i]=e(n,r));const c=Object.prototype.toString.call(r);if("[object Object]"===c&&(f[i]=t(n,r)),"[object Array]"===c){const t=r[0],o=r[1],c=e(n,t);f[i]=c.map((t=>o(t)))}}return Object.keys(f).length>0?f:null}}));