function e(e,r,t,o){Object.defineProperty(e,r,{get:t,set:o,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},r.parcelRequired7c6=n),n.register("kyEFX",(function(r,t){var o,n;e(r.exports,"register",(function(){return o}),(function(e){return o=e})),e(r.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};o=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},n=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),n.register("i44AL",(function(r,t){e(r.exports,"changeCurrentPageOnHomePage",(function(){return s})),e(r.exports,"changeCurrentPageOnShoppingList",(function(){return c}));const o=document.querySelector(".js-link-home"),n=document.querySelector(".js-link-shoppingList"),i=document.querySelector(".js-link-home-mobile"),a=document.querySelector(".js-link-shoppingList-mobile");function s(){o.classList.add("current-page"),n.classList.remove("current-page"),i.classList.add("current-page"),a.classList.remove("current-page")}function c(){o.classList.remove("current-page"),n.classList.add("current-page"),i.classList.remove("current-page"),a.classList.add("current-page")}})),n.register("2wbaf",(function(r,t){e(r.exports,"setTheme",(function(){return s})),e(r.exports,"activateThemeSwitch",(function(){return a}));const o="isDark",n="js-theme-switch",i=document.querySelector(".js-theme-switch");function a(e,r){if(e.target.classList.contains(n)){e.target;!function(e){i.checked&&(localStorage.setItem(o,"true"),s(e));i.checked||(localStorage.removeItem(o),s(e))}(r)}}function s(e){localStorage.getItem(o)?(e.setAttribute("page-theme","dark"),i.checked=!0):(e.setAttribute("page-theme","light"),i.checked=!1)}})),n.register("fQD9h",(function(r,t){e(r.exports,"bookItemMarcup",(function(){return o}));const o=({author:e,book_image:r,title:t,_id:o})=>`\n  <li class="category__book js-book" data-id="${o}">\n    <div class="category__image-box js-book" data-id="${o}">\n      <img class="category__img" src="${r}" alt="${t}" loading="lazy">\n      <p class="category__image-overlay">Quick view</p>\n    </div>\n    <h2 class="category__title">${t}</h2>\n    <h3 class="category__subtitle">${e}</h3>\n  </li>`})),n.register("lguax",(function(e,r){e.exports=Promise.all([import("./"+n("kyEFX").resolve("8pA2j")),import("./"+n("kyEFX").resolve("1DOpE"))]).then((()=>n("7StVb")))})),n.register("WIta3",(function(e,r){e.exports=import("./"+n("kyEFX").resolve("8pA2j")).then((()=>n("6g8WH")))})),n.register("7tQip",(function(e,r){e.exports=Promise.all([import("./"+n("kyEFX").resolve("8pA2j")),import("./"+n("kyEFX").resolve("1DOpE")),import("./"+n("kyEFX").resolve("bYATN")),import("./"+n("kyEFX").resolve("drC0I")),import("./"+n("kyEFX").resolve("j7OjE"))]).then((()=>n("k75O6")))})),n.register("6DqiF",(function(e,r){e.exports=Promise.all([n("7jkLd")(new URL(n("kyEFX").resolve("i3zQN"),import.meta.url).toString()),import("./"+n("kyEFX").resolve("eKVZd"))]).then((()=>n("dTazW")))})),n.register("7jkLd",(function(e,r){var t=n("boLNp");e.exports=t((function(e){return new Promise((function(r,t){var o=document.getElementsByTagName("link");if([].concat(o).some((function(r){return r.href===e&&r.rel.indexOf("stylesheet")>-1})))r();else{var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onerror=function(e){n.onerror=n.onload=null,n.remove(),t(e)},n.onload=function(){n.onerror=n.onload=null,r()},document.getElementsByTagName("head")[0].appendChild(n)}}))}))})),n.register("boLNp",(function(e,r){var t={},o={},n={};function i(e){switch(e){case"preload":return o;case"prefetch":return n;default:return t}}e.exports=function(e,r){return function(t){var o=i(r);return o[t]?o[t]:o[t]=e.apply(null,arguments).catch((function(e){throw delete o[t],e}))}}})),n.register("iKeE3",(function(e,r){e.exports=Promise.all([import("./"+n("kyEFX").resolve("bYATN")),import("./"+n("kyEFX").resolve("35OVj"))]).then((()=>n("100X1")))})),n.register("4lVqH",(function(e,r){e.exports=import("./"+n("kyEFX").resolve("iLVod")).then((()=>n("2qRC4")))})),n.register("iMJqV",(function(e,r){e.exports=import("./"+n("kyEFX").resolve("fgY5k")).then((()=>n("kJ3qw")))})),n.register("4SBrm",(function(e,r){e.exports=Promise.all([import("./"+n("kyEFX").resolve("8pA2j")),import("./"+n("kyEFX").resolve("1DOpE")),import("./"+n("kyEFX").resolve("bYATN")),import("./"+n("kyEFX").resolve("drC0I"))]).then((()=>n("7jOSx")))})),n.register("70xXB",(function(e,r){e.exports=import("./"+n("kyEFX").resolve("a8O9y")).then((()=>n("2ix2C")))})),n.register("9DKIo",(function(e,r){e.exports=import("./"+n("kyEFX").resolve("ekj2r")).then((()=>n("bAkNG")))})),n("kyEFX").register(JSON.parse('{"5ZPII":"index.dd69771d.js","1DOpE":"loaderClass.bde24761.js","8pA2j":"loaderMarcup.2f6f3cc8.js","j7OjE":"category.86bf3a6d.js","drC0I":"topBooks.07d470d5.js","bYATN":"popupModal.09ca23e9.js","eKVZd":"support.b52628ca.js","di2OM":"savethechildren.afa9e55b.png","jqVVd":"savethechildren2x.688b6dc7.png","kK2ri":"projecthope.6b951dc9.png","eAeWc":"projecthope2x.ee6ab1e6.png","jXDEX":"united24.7e58352b.png","jfGQz":"united242x.d41967f5.png","fqBwc":"internationalmedicalcorps.38e7f653.png","1DXds":"internationalmedicalcorps2x.2c438457.png","aQuDG":"medicinssansfrontieres.9cc61963.png","bPEMk":"medicinssansfrontieres2x.33a97fc1.png","je544":"razom.61fc7ccd.png","2qbm9":"razom2x.49347143.png","fY9Yw":"actionagainsthunger.2a8c3c0d.png","1ieau":"actionagainsthunger2x.68b93551.png","58Wpn":"worldvision.544fa60d.png","be6ea":"worldvision2x.01220224.png","anmW3":"serhiyprytulacharityfoundation.69cae55e.png","gAyIp":"serhiyprytulacharityfoundation2x.b3afcdef.png","i3zQN":"support.f0fe09a9.css","35OVj":"popupModal.851699a7.js","1StS0":"amazon1x.b8fa90cb.png","igOR5":"amazon2x.edefe29e.png","cLJUC":"apple1x.5a9f17e3.png","38YEC":"apple2x.54474d7d.png","iYgR8":"bookshop1x.91914384.png","kLMPf":"bookshop2x.fbbde057.png","d81E4":"icon-x-close.a3e5df78.svg","iLVod":"scrollup.9678ef43.js","fgY5k":"burgerMenu.34ef81d1.js","a8O9y":"firebase.ece4c28b.js","ekj2r":"form.48787bf5.js"}'));var i=n("i44AL"),a=n("2wbaf");n("fQD9h");n("lguax"),n("WIta3"),n("7tQip"),n("6DqiF"),n("iKeE3"),n("4lVqH"),n("iMJqV"),n("4SBrm"),n("iMJqV"),Promise.resolve(n("i44AL")),n("4SBrm"),Promise.resolve(n("2wbaf")),n("70xXB"),n("9DKIo");const s=document.querySelector("html");(0,a.setTheme)(s),s.addEventListener("click",(e=>{(0,a.activateThemeSwitch)(e,s)}));document.querySelector(".js-all-books");(0,i.changeCurrentPageOnHomePage)();
//# sourceMappingURL=index.dd69771d.js.map
