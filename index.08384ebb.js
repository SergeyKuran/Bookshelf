!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("6TbEw",(function(t,r){e(t.exports,"changeCurrentPageOnHomePage",(function(){return i})),e(t.exports,"changeCurrentPageOnShoppingList",(function(){return s}));var n=document.querySelector(".js-link-home"),o=document.querySelector(".js-link-shoppingList"),a=document.querySelector(".js-link-home-mobile"),c=document.querySelector(".js-link-shoppingList-mobile");function i(){n.classList.add("current-page"),o.classList.remove("current-page"),a.classList.add("current-page"),c.classList.remove("current-page")}function s(){n.classList.remove("current-page"),o.classList.add("current-page"),a.classList.remove("current-page"),c.classList.add("current-page")}})),o.register("gGcLX",(function(t,r){e(t.exports,"setTheme",(function(){return i})),e(t.exports,"activateThemeSwitch",(function(){return c}));var n="isDark",o="js-theme-switch",a=document.querySelector(".".concat(o));function c(e,t){if(e.target.classList.contains(o)){e.target;!function(e){a.checked&&(localStorage.setItem(n,"true"),i(e));a.checked||(localStorage.removeItem(n),i(e))}(t)}}function i(e){localStorage.getItem(n)?(e.setAttribute("data-page-theme","dark"),a.checked=!0):(e.setAttribute("data-page-theme","light"),a.checked=!1)}})),o.register("lljKj",(function(t,r){e(t.exports,"topBooksContainerMarcup",(function(){return a}));var n=o("bBZkx"),a=function(e,t){var r=e.list_name,o=e.books;return'\n<li class="category-top-books">\n  <h2 class="category-top-books__title">'.concat(r,'</h2>\n  <ul class="category-top-books__list">').concat(function(e){return e.map((function(e){return(0,n.bookItemMarcup)(e)})).join("")}(o),'</ul>\n  <button class="action-button category-top-books__action-button js-action-button" data-categoryName="').concat(r,'">See more</button>\n</li>')}})),o.register("bBZkx",(function(t,r){e(t.exports,"bookItemMarcup",(function(){return n}));var n=function(e){var t=e.author,r=e.book_image,n=e.title,o=e._id;return'\n  <li class="category__book js-book" data-id="'.concat(o,'">\n    <div class="category__image-box js-book" data-id="').concat(o,'">\n      <img class="category__img" src="').concat(r,'" alt="').concat(n,'" loading="lazy">\n      <p class="category__image-overlay">Quick view</p>\n    </div>\n    <h2 class="category__title">').concat(n,'</h2>\n    <h3 class="category__subtitle">').concat(t,"</h3>\n  </li>")}})),o.register("kLeTz",(function(e,t){e.exports=Promise.all([o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("7w9FN")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9aqhR"))]).then((function(){return o("7JdID")}))})),o.register("4WKyX",(function(e,t){"use strict";var r=o("2prpb");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("script");if([].concat(n).some((function(t){return t.src===e})))t();else{var o=document.createElement("link");o.href=e,o.rel="preload",o.as="script",document.head.appendChild(o);var a=document.createElement("script");a.async=!0,a.type="text/javascript",a.charset="utf-8",a.src=e,a.onerror=function(t){var n=new TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));a.onerror=a.onload=null,a.remove(),r(n)},a.onload=function(){a.onerror=a.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(a)}}))}))})),o.register("2prpb",(function(e,t){"use strict";var r={},n={},o={};function a(e){switch(e){case"preload":return n;case"prefetch":return o;default:return r}}e.exports=function(e,t){return function(r){var n=a(t);return n[r]?n[r]:n[r]=e.apply(null,arguments).catch((function(e){throw delete n[r],e}))}}})),o.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),o.register("cvckf",(function(e,t){e.exports=o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("7w9FN")).then((function(){return o("8Aq4J")}))})),o.register("2txU9",(function(e,t){e.exports=Promise.all([o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("7w9FN")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9aqhR")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("bO6qu")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("4vXc8")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("ag8fm")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("fJaRM"))]).then((function(){return o("2lqIk")}))})),o.register("H0dbO",(function(e,t){e.exports=Promise.all([o("5FrBL")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("i3zQN")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("eDtMv"))]).then((function(){return o("xpKCW")}))})),o.register("5FrBL",(function(e,t){"use strict";var r=o("2prpb");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("link");if([].concat(n).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),r(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("d9ANz",(function(e,t){e.exports=Promise.all([o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("bO6qu")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("4vXc8")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("6XpB3"))]).then((function(){return o("5uR6A")}))})),o.register("2i2GJ",(function(e,t){e.exports=o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("66ZFd")).then((function(){return o("7ZZgP")}))})),o.register("9SnOd",(function(e,t){e.exports=o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("fi3LA")).then((function(){return o("gM4a7")}))})),o.register("9VFcu",(function(e,t){e.exports=Promise.all([o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("7w9FN")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9aqhR")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("bO6qu")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("4vXc8")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("ag8fm"))]).then((function(){return o("hYjmn")}))})),o.register("itouX",(function(e,t){e.exports=Promise.all([o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("4vXc8")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9rEUE"))]).then((function(){return o("iNWLi")}))})),o.register("mEavQ",(function(e,t){e.exports=o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("gOzgl")).then((function(){return o("eLZ82")}))})),o.register("4aYaQ",(function(e,t){e.exports=Promise.all([o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("4vXc8")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9rEUE")),o("4WKyX")(o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("2CKmR"))]).then((function(){return o("c1NcR")}))})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.08384ebb.js","9aqhR":"loaderClass.4dca5313.js","7w9FN":"loaderMarcup.8d88b273.js","fJaRM":"category.0a01dfd6.js","ag8fm":"topBooks.a6d81374.js","bO6qu":"popupModal.6c33d1ed.js","4vXc8":"popupModal.79e7f075.js","eDtMv":"support.ad1724f7.js","kPMTf":"savethechildren.afa9e55b.png","lWQrY":"savethechildren2x.688b6dc7.png","9bJh5":"projecthope.6b951dc9.png","dnJ9O":"projecthope2x.ee6ab1e6.png","7PqWD":"united24.7e58352b.png","gLfU2":"united242x.d41967f5.png","bDEKz":"internationalmedicalcorps.38e7f653.png","h3rcd":"internationalmedicalcorps2x.2c438457.png","6PsTP":"medicinssansfrontieres.9cc61963.png","e8Kfc":"medicinssansfrontieres2x.33a97fc1.png","fB4Oq":"razom.61fc7ccd.png","bTbqa":"razom2x.49347143.png","9vVWc":"actionagainsthunger.2a8c3c0d.png","bbTus":"actionagainsthunger2x.68b93551.png","95CMb":"worldvision.544fa60d.png","jPv5b":"worldvision2x.01220224.png","kKuAN":"serhiyprytulacharityfoundation.69cae55e.png","1S0jP":"serhiyprytulacharityfoundation2x.b3afcdef.png","i3zQN":"support.f0fe09a9.css","6XpB3":"popupModal.4100bffa.js","85TVO":"amazon1x.b8fa90cb.png","l4LHY":"amazon2x.edefe29e.png","1W9xN":"apple1x.5a9f17e3.png","bRKWQ":"apple2x.54474d7d.png","3Kvit":"bookshop1x.91914384.png","2bgCQ":"bookshop2x.fbbde057.png","c4Fq2":"icon-x-close.a3e5df78.svg","66ZFd":"scrollup.ec80e087.js","fi3LA":"burgerMenu.3c0429cd.js","9rEUE":"firebase.0e307cfd.js","gOzgl":"form.e44f5057.js","2CKmR":"autorithation.29458194.js"}'));var a=o("6TbEw"),c=o("gGcLX");o("lljKj");o("kLeTz"),o("cvckf"),o("2txU9"),o("H0dbO"),o("d9ANz"),o("2i2GJ"),o("9SnOd"),o("9VFcu"),o("9SnOd"),Promise.resolve(o("6TbEw")),o("9VFcu"),Promise.resolve(o("gGcLX")),o("itouX"),o("mEavQ"),o("4aYaQ");var i=document.querySelector("body");(0,c.setTheme)(i),i.addEventListener("click",(function(e){(0,c.activateThemeSwitch)(e,i)}));document.querySelector(".js-all-books");(0,a.changeCurrentPageOnHomePage)()}();
//# sourceMappingURL=index.08384ebb.js.map