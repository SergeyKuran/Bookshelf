!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("hYjmn",(function(e,o){var r=n("bpxeT"),a=n("2TvXO"),c=n("jpRhc"),s=n("lysXN"),u={ul:document.querySelector(".js-all-books")},i="https://books-backend.p.goit.global/books/top-books?";function l(){return(l=t(r)(t(a).mark((function e(){var n,o;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.getRequest)("".concat(i));case 2:n=t.sent,o=n.map((function(t){var e=t.list_name,n=t.books;return'\n      <li class="category-top-books">\n        <h3 class="category-top-books__title">'.concat(e,'</h3>\n        <ul class="category-top-books__list">').concat((0,s.createItemMarkup)(n),'</ul>\n        <button class="action-button category-top-books__action-button" data-categoryName="').concat(e,'">See more</button>\n      </li>')})).join(""),u.ul.classList.remove("category__list"),u.ul.innerHTML=o;case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}!function(){l.apply(this,arguments)}()})),n.register("jpRhc",(function(o,r){e(o.exports,"getRequest",(function(){return u}));var a=n("bpxeT"),c=n("2TvXO"),s=n("dIxxU");function u(t){return i.apply(this,arguments)}function i(){return(i=t(a)(t(c).mark((function e(n){var o,r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.default.get("".concat(n));case 3:return o=t.sent,t.next=6,o.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}})),n.register("lysXN",(function(t,n){function o(t){return t.map((function(t){var e=t.author,n=t.book_image,o=t.title,r=t._id;return'\n  <li class="category__book" data-id="'.concat(r,'">\n    <img class="category__img" src="').concat(n,'" alt="').concat(o,'" width="180">\n    <h2 class="category__title">').concat(o,'</h2>\n    <h3 class="category__subtitle">').concat(e,"</h3>\n  </li>\n  ")})).join("")}e(t.exports,"createItemMarkup",(function(){return o}))}))}();
//# sourceMappingURL=topBooks.23e0927f.js.map
