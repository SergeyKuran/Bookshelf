!function(){function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},r.parcelRequired7c6=o),o.register("iE7OH",(function(r,n){var t,o;e(r.exports,"register",(function(){return t}),(function(e){return t=e})),e(r.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)a[r[n]]=e[r[n]]},o=function(e){var r=a[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),o.register("gGcLX",(function(r,n){e(r.exports,"setTheme",(function(){return i})),e(r.exports,"activateThemeSwitch",(function(){return c}));var t="isDark",o="js-theme-switch",a=document.querySelector(".".concat(o));function c(e,r){if(e.target.classList.contains(o)){e.target;!function(e){a.checked&&(localStorage.setItem(t,"true"),i(e));a.checked||(localStorage.removeItem(t),i(e))}(r)}}function i(e){localStorage.getItem(t)?(e.setAttribute("page-theme","dark"),a.checked=!0):(e.setAttribute("page-theme","light"),a.checked=!1)}})),o.register("bgY8A",(function(e,r){e.exports=Promise.all([o("5FrBL")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("i3zQN")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("eDtMv"))]).then((function(){return o("xpKCW")}))})),o.register("5FrBL",(function(e,r){"use strict";var n=o("2prpb");e.exports=n((function(e){return new Promise((function(r,n){var t=document.getElementsByTagName("link");if([].concat(t).some((function(r){return r.href===e&&r.rel.indexOf("stylesheet")>-1})))r();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),n(e)},o.onload=function(){o.onerror=o.onload=null,r()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("2prpb",(function(e,r){"use strict";var n={},t={},o={};function a(e){switch(e){case"preload":return t;case"prefetch":return o;default:return n}}e.exports=function(e,r){return function(n){var t=a(r);return t[n]?t[n]:t[n]=e.apply(null,arguments).catch((function(e){throw delete t[n],e}))}}})),o.register("aNJCr",(function(r,n){var t;e(r.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var r=o[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=r),r}})),o.register("4WKyX",(function(e,r){"use strict";var n=o("2prpb");e.exports=n((function(e){return new Promise((function(r,n){var t=document.getElementsByTagName("script");if([].concat(t).some((function(r){return r.src===e})))r();else{var o=document.createElement("link");o.href=e,o.rel="preload",o.as="script",document.head.appendChild(o);var a=document.createElement("script");a.async=!0,a.type="text/javascript",a.charset="utf-8",a.src=e,a.onerror=function(r){var t=new TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(r.message));a.onerror=a.onload=null,a.remove(),n(t)},a.onload=function(){a.onerror=a.onload=null,r()},document.getElementsByTagName("head")[0].appendChild(a)}}))}))})),o.register("lEsMN",(function(e,r){e.exports=Promise.all([o("5FrBL")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("4SJ1l")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("faF4R")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("7CwvE")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("iAYH4"))]).then((function(){return o("aqJoK")}))})),o.register("8W6Py",(function(e,r){e.exports=Promise.all([o("5FrBL")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("4SJ1l")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("faF4R")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("7CwvE"))]).then((function(){return o("jcFG7")}))})),o.register("41jT1",(function(e,r){e.exports=o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("fi3LA")).then((function(){return o("gM4a7")}))})),o.register("kT1h6",(function(e,r){e.exports=o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("bgyUe")).then((function(){return o("6TbEw")}))})),o("iE7OH").register(JSON.parse('{"heHZr":"shopping-list.d42cddf4.js","eDtMv":"support.ad1724f7.js","kPMTf":"savethechildren.afa9e55b.png","lWQrY":"savethechildren2x.688b6dc7.png","9bJh5":"projecthope.6b951dc9.png","dnJ9O":"projecthope2x.ee6ab1e6.png","7PqWD":"united24.7e58352b.png","gLfU2":"united242x.d41967f5.png","bDEKz":"internationalmedicalcorps.38e7f653.png","h3rcd":"internationalmedicalcorps2x.2c438457.png","6PsTP":"medicinssansfrontieres.9cc61963.png","e8Kfc":"medicinssansfrontieres2x.33a97fc1.png","fB4Oq":"razom.61fc7ccd.png","bTbqa":"razom2x.49347143.png","9vVWc":"actionagainsthunger.2a8c3c0d.png","bbTus":"actionagainsthunger2x.68b93551.png","95CMb":"worldvision.544fa60d.png","jPv5b":"worldvision2x.01220224.png","kKuAN":"serhiyprytulacharityfoundation.69cae55e.png","1S0jP":"serhiyprytulacharityfoundation2x.b3afcdef.png","i3zQN":"support.f0fe09a9.css","iAYH4":"shoplist.ebe1827f.js","4SJ1l":"shoplist.9895f7af.css","7CwvE":"pagination.d0a87ec1.js","ee16w":"sprite.ad506413.svg","85TVO":"amazon1x.b8fa90cb.png","l4LHY":"amazon2x.edefe29e.png","1W9xN":"apple1x.5a9f17e3.png","bRKWQ":"apple2x.54474d7d.png","3Kvit":"bookshop1x.91914384.png","2bgCQ":"bookshop2x.fbbde057.png","faF4R":"category.feb9a34a.js","fi3LA":"burgerMenu.1e1bef3d.js","bgyUe":"currentPage.58c9daba.js"}'));var a=o("gGcLX");o("bgY8A"),o("lEsMN"),o("8W6Py"),o("41jT1"),o("kT1h6"),Promise.resolve(o("gGcLX"));var c=document.querySelector("html");(0,a.setTheme)(c),c.addEventListener("click",(function(e){(0,a.activateThemeSwitch)(e,c)}))}();
//# sourceMappingURL=shopping-list.d42cddf4.js.map