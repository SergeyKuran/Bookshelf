!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;o.register("hYjmn",(function(n,r){var a;a=n.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),t(n.exports,"default",(function(){return v}));var c=o("bpxeT"),s=o("2TvXO"),i=o("jpRhc"),u=o("lljKj"),l=o("7JdID"),p={ul:document.querySelector(".js-all-books"),sectionCategory:document.querySelector(".category > .container")},d="https://books-backend.p.goit.global/books/top-books?",f=!0;function g(){return b.apply(this,arguments)}function b(){return(b=e(c)(e(s).mark((function t(){var o,n,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new(0,l.Loader)(p.sectionCategory,"loader-container"),e.prev=1,o.show(),e.next=5,(0,i.getRequest)("".concat(d));case 5:n=e.sent,r=n.map(u.topBooksContainerMarcup).join(""),p.ul.classList.remove("category__list"),p.ul.innerHTML=r,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.prev=14,f&&(y.hide(),f=!1),o.hide(),e.finish(14);case 18:case"end":return e.stop()}}),t,null,[[1,11,14,18]])})))).apply(this,arguments)}var y=new(0,l.Loader)(document.querySelector("header"),"preloader-page");g();var v=g})),o.register("jpRhc",(function(n,r){t(n.exports,"getRequest",(function(){return i}));var a=o("bpxeT"),c=o("2TvXO"),s=o("dIxxU");function i(e){return u.apply(this,arguments)}function u(){return(u=e(a)(e(c).mark((function t(o){var n,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.get("".concat(o));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}})),o.register("lljKj",(function(e,n){t(e.exports,"topBooksContainerMarcup",(function(){return a}));var r=o("bBZkx"),a=function(e,t){var o=e.list_name,n=e.books;return'\n<li class="category-top-books">\n  <h2 class="category-top-books__title">'.concat(o,'</h2>\n  <ul class="category-top-books__list">').concat(function(e){return e.map((function(e){return(0,r.bookItemMarcup)(e)})).join("")}(n),'</ul>\n  <button class="action-button category-top-books__action-button js-action-button" data-categoryName="').concat(o,'">See more</button>\n</li>')}})),o.register("bBZkx",(function(e,o){t(e.exports,"bookItemMarcup",(function(){return n}));var n=function(e){var t=e.author,o=e.book_image,n=e.title,r=e._id;return'\n  <li class="category__book js-book" data-id="'.concat(r,'">\n    <div class="category__image-box js-book" data-id="').concat(r,'">\n      <img class="category__img" src="').concat(o,'" alt="').concat(n,'" loading="lazy">\n      <p class="category__image-overlay">Quick view</p>\n    </div>\n    <h2 class="category__title">').concat(n,'</h2>\n    <h3 class="category__subtitle">').concat(t,"</h3>\n  </li>")}}))}();
//# sourceMappingURL=topBooks.887212c8.js.map
