!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("hYjmn",(function(r,o){var u;u=r.exports,Object.defineProperty(u,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",(function(){return b}));var a=n("bpxeT"),c=n("2TvXO"),s=n("jpRhc"),i=n("lljKj"),l={ul:document.querySelector(".js-all-books")},p="https://books-backend.p.goit.global/books/top-books?";function f(){return d.apply(this,arguments)}function d(){return(d=e(a)(e(c).mark((function t(){var n,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getRequest)("".concat(p));case 3:n=e.sent,r=n.map(i.topBooksContainerMarcup).join(""),l.ul.classList.remove("category__list"),l.ul.innerHTML=r,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),t,null,[[0,9,12,14]])})))).apply(this,arguments)}f();var b=f})),n.register("jpRhc",(function(r,o){t(r.exports,"getRequest",(function(){return s}));var u=n("bpxeT"),a=n("2TvXO"),c=n("dIxxU");function s(e){return i.apply(this,arguments)}function i(){return(i=e(u)(e(a).mark((function t(n){var r,o;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.default.get("".concat(n));case 2:return r=e.sent,e.next=5,r.data;case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}}))}();
//# sourceMappingURL=topBooks.543359dd.js.map
