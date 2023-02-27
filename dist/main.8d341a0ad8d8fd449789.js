/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/variables.scss":
/*!***********************************!*\
  !*** ./src/assets/variables.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/banner/banner.scss":
/*!*******************************************!*\
  !*** ./src/components/banner/banner.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/infoCard/infoCard.scss":
/*!***********************************************!*\
  !*** ./src/components/infoCard/infoCard.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/logo/logo.scss":
/*!***************************************!*\
  !*** ./src/components/logo/logo.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/priceCard/priceCard.scss":
/*!*************************************************!*\
  !*** ./src/components/priceCard/priceCard.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/assets/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./favicon.ico": "./src/assets/favicon.ico",
	"./icons/facebook.svg": "./src/assets/icons/facebook.svg",
	"./icons/instagram.svg": "./src/assets/icons/instagram.svg",
	"./icons/vk.svg": "./src/assets/icons/vk.svg",
	"./icons/youtube.svg": "./src/assets/icons/youtube.svg",
	"./images/car.png": "./src/assets/images/car.png",
	"./images/chair.png": "./src/assets/images/chair.png",
	"./images/email.png": "./src/assets/images/email.png",
	"./images/goods/chair_1.png": "./src/assets/images/goods/chair_1.png",
	"./images/logo.png": "./src/assets/images/logo.png",
	"./variables.scss": "./src/assets/variables.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/components/banner/banner.js":
/*!*****************************************!*\
  !*** ./src/components/banner/banner.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBanner": () => (/* binding */ createBanner)
/* harmony export */ });
/* harmony import */ var _banner_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.scss */ "./src/components/banner/banner.scss");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.js");



function createBanner({
  root,
  prepend,
  after,
  title,
  text,
  image,
  button,
}) {
  let banner = document.createElement("div");

  banner.classList.add("banner");
  banner.innerHTML = `
    <div class="banner__text">
      <h1>${title}</h1>
      <span>${text}</span>
    </div>
    <div class="banner__image">
      <div>
        <img src="${__webpack_require__("./src/assets sync recursive ^\\.\\/.*$")("./" + image)}" alt="banner image"/>
      </div>
    </div>
  `;

  (0,_button_button__WEBPACK_IMPORTED_MODULE_1__.createButton)({
    root: banner.querySelector(".banner__text"),
    ...button,
  });

  prepend
    ? root.prepend(banner)
    : after
      ? root.after(banner)
      : root.append(banner);
}


/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton)
/* harmony export */ });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/components/button/button.scss");


function createButton({
  root,
  after,
  text,
  type,
  width,
  height,
  click,
}) {
  let button = document.createElement("button");
  let buttonText = document.createElement("span");

  button.classList.add("button");

  width && (button.style.width = `${width}px`);
  height && (button.style.height = `${height}px`);
  button.classList.add(`button_${type}`);

  buttonText.textContent = text;
  button.onclick = click;

  button.append(buttonText);
  after ? after.after(button) : root.append(button);
}


/***/ }),

/***/ "./src/components/infoCard/infoCard.js":
/*!*********************************************!*\
  !*** ./src/components/infoCard/infoCard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInfoCard": () => (/* binding */ createInfoCard)
/* harmony export */ });
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.js");
/* harmony import */ var _infoCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoCard.scss */ "./src/components/infoCard/infoCard.scss");



function createInfoCard({
  root,
  prepend,
  after,
  title,
  text,
  image,
  type,
  button,
}) {
  const infoCard = document.createElement("div");

  infoCard.classList.add("info-card");
  infoCard.innerHTML = `
    <div class="info-card__left">
      <h3 class="info-card__title">${title}</h3>
      <p class="info-card__text">${text}</p>
    </div>
    <div class="info-card__right"></div>
  `;

  switch (type) {
    case "email":
      infoCard.querySelector(".info-card__left").innerHTML += `
        <input type="email" class="info-card__input" placeholder="Введите e-mail">
      `;
      break;
    case "button":
      (0,_button_button__WEBPACK_IMPORTED_MODULE_0__.createButton)({
        root: infoCard.querySelector(".info-card__left"),
        ...button,
      });
  }

  image &&
    (infoCard.querySelector(
      ".info-card__right"
    ).innerHTML += `<img src="${__webpack_require__("./src/assets sync recursive ^\\.\\/.*$")("./" + image)}">`);

  prepend
    ? root.prepend(infoCard)
    : after
      ? root.after(infoCard)
      : root.append(infoCard);
}


/***/ }),

/***/ "./src/components/logo/logo.js":
/*!*************************************!*\
  !*** ./src/components/logo/logo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLogo": () => (/* binding */ createLogo)
/* harmony export */ });
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.scss */ "./src/components/logo/logo.scss");


function createLogo(options) {
  options.root.innerHTML = `
    <div class='logo'>
      <img src="${__webpack_require__("./src/assets sync recursive ^\\.\\/.*$")("./" + options.image)}" alt="logo" />
      <span class="unselectable">${options.text}</span>
    </div>
  `;
}


/***/ }),

/***/ "./src/components/priceCard/priceCard.js":
/*!***********************************************!*\
  !*** ./src/components/priceCard/priceCard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPriceCard": () => (/* binding */ createPriceCard)
/* harmony export */ });
/* harmony import */ var _priceCard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priceCard.scss */ "./src/components/priceCard/priceCard.scss");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.js");



function createPriceCard({root, name, price, image}) {
  const priceCard = document.createElement('div');

  priceCard.classList.add('price-card');
  priceCard.innerHTML = `
    <img src=${__webpack_require__("./src/assets sync recursive ^\\.\\/.*$")("./"+image)} alt=""/>
    <span>${name}</span>
    <span>${price} ₽</span>
  `;

  (0,_button_button__WEBPACK_IMPORTED_MODULE_1__.createButton)({
    root: priceCard,
    type: 'fill',
    text: 'Купить',
    width: 130,
    height: 35,
    click: () => {}
  })

  root.append(priceCard);
}


/***/ }),

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/favicon.a4fbc4f6f6d925dc56cc..ico";

/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/facebook.e7dd325baf7fdb625811..svg";

/***/ }),

/***/ "./src/assets/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/instagram.83e42a0cf6926ebabd4f..svg";

/***/ }),

/***/ "./src/assets/icons/vk.svg":
/*!*********************************!*\
  !*** ./src/assets/icons/vk.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/vk.70edc2665f2754ccec9c..svg";

/***/ }),

/***/ "./src/assets/icons/youtube.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/youtube.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/youtube.1f8b4b8aa45c70067d75..svg";

/***/ }),

/***/ "./src/assets/images/car.png":
/*!***********************************!*\
  !*** ./src/assets/images/car.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/car.315eb5c02c3260d8d61f..png";

/***/ }),

/***/ "./src/assets/images/chair.png":
/*!*************************************!*\
  !*** ./src/assets/images/chair.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/chair.40960e6f5ec9ff8822ab..png";

/***/ }),

/***/ "./src/assets/images/email.png":
/*!*************************************!*\
  !*** ./src/assets/images/email.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/email.c4e0d30f8bf3b41a419c..png";

/***/ }),

/***/ "./src/assets/images/goods/chair_1.png":
/*!*********************************************!*\
  !*** ./src/assets/images/goods/chair_1.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/chair_1.dbf7b8c319d91ff847c6..png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/logo.ff7d23bc55d680fe6745..png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/button */ "./src/components/button/button.js");
/* harmony import */ var _components_logo_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/logo/logo */ "./src/components/logo/logo.js");
/* harmony import */ var _components_banner_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/banner/banner */ "./src/components/banner/banner.js");
/* harmony import */ var _components_priceCard_priceCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/priceCard/priceCard */ "./src/components/priceCard/priceCard.js");
/* harmony import */ var _components_infoCard_infoCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/infoCard/infoCard */ "./src/components/infoCard/infoCard.js");







const header = document.querySelector(".page__header");
const main = document.querySelector(".page__main");
const footer = document.querySelector(".page__footer");
const favicon = document.querySelector("link[rel~='icon']");
const priceList = [
  {
    name: "Парикмахерское кресло «Норм» гидравлическое",
    price: "9 900",
    image: "images/goods/chair_1.png",
  },
  {
    name: "Парикмахерское кресло «Норм» гидравлическое",
    price: "9 900",
    image: "images/goods/chair_1.png",
  },
  {
    name: "Парикмахерское кресло «Норм» гидравлическое",
    price: "9 900",
    image: "images/goods/chair_1.png",
  },
  {
    name: "Парикмахерское кресло «Норм» гидравлическое",
    price: "9 900",
    image: "images/goods/chair_1.png",
  },
];
const socialList = [
  {
    name: "youtube",
    icon: "icons/youtube.svg",
    link: "#",
  },
  {
    name: "vk",
    icon: "icons/vk.svg",
    link: "#",
  },
  {
    name: "facebook",
    icon: "icons/facebook.svg",
    link: "#",
  },
  {
    name: "instagram",
    icon: "icons/instagram.svg",
    link: "#",
  },
];

favicon.href = __webpack_require__(/*! assets/favicon.ico */ "./src/assets/favicon.ico");
main.querySelector(".page__title img").src = __webpack_require__(/*! assets/images/car.png */ "./src/assets/images/car.png");

(0,_components_logo_logo__WEBPACK_IMPORTED_MODULE_2__.createLogo)({
  root: header.querySelector(".page__logo"),
  text: "BEAUTY",
  image: "images/logo.png",
});

document.querySelectorAll('.page__feedback').forEach(element => {
  (0,_components_button_button__WEBPACK_IMPORTED_MODULE_1__.createButton)({
    root: element,
    width: 170,
    type: "transparent",
    text: "Обратный звонок",
    click: () => {},
  })
})


;(0,_components_banner_banner__WEBPACK_IMPORTED_MODULE_3__.createBanner)({
  root: main,
  prepend: true,
  title: "Супер кресло",
  text: "Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее",
  image: "images/chair.png",
  button: {
    text: "Подробнее",
    type: "white",
    width: 170,
    click: () => {},
  },
});

priceList.forEach((item) => {
  (0,_components_priceCard_priceCard__WEBPACK_IMPORTED_MODULE_4__.createPriceCard)({
    root: main.querySelectorAll(".page__cards")[0],
    ...item,
  });
});

(0,_components_infoCard_infoCard__WEBPACK_IMPORTED_MODULE_5__.createInfoCard)({
  root: main.querySelectorAll(".page__wrapper")[1],
  title: "Получайте бонусы и подарки",
  text: "Каждый месяц разыгрываем <br> 10 000 рублей для наших клиентов",
  type: "email",
  image: "images/email.png",
});

(0,_components_infoCard_infoCard__WEBPACK_IMPORTED_MODULE_5__.createInfoCard)({
  root: main.querySelectorAll(".page__wrapper")[1],
  title: "Заходите к нам",
  text: "Более 300 магазинов <br> по всей России",
  type: "button",
  button: {
    type: "white",
    text: "Карта магазинов",
    width: 170,
    height: 35,
    click: () => {},
  },
});

socialList.forEach((item) => {
  const socialLink = document.createElement("a");

  socialLink.href = item.link;
  socialLink.innerHTML = `<img src="${__webpack_require__("./src/assets sync recursive ^\\.\\/.*$")("./" + item.icon)}" />`;

  footer.querySelector(".page__social").append(socialLink);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsOERBQVEsSUFBUyxZQUFZLENBQUMsQ0FBQzs7QUFFckU7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy92YXJpYWJsZXMuc2Nzcz8xMTY4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuc2Nzcz8xMzJiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc2Nzcz83ODVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm9DYXJkL2luZm9DYXJkLnNjc3M/YjkwMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvL2xvZ28uc2Nzcz8zZjA0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByaWNlQ2FyZC9wcmljZUNhcmQuc2Nzcz82YWVmIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzP2E1ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvQ2FyZC9pbmZvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJpY2VDYXJkL3ByaWNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9mYXZpY29uLmljb1wiOiBcIi4vc3JjL2Fzc2V0cy9mYXZpY29uLmljb1wiLFxuXHRcIi4vaWNvbnMvZmFjZWJvb2suc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ljb25zL2ZhY2Vib29rLnN2Z1wiLFxuXHRcIi4vaWNvbnMvaW5zdGFncmFtLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0uc3ZnXCIsXG5cdFwiLi9pY29ucy92ay5zdmdcIjogXCIuL3NyYy9hc3NldHMvaWNvbnMvdmsuc3ZnXCIsXG5cdFwiLi9pY29ucy95b3V0dWJlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pY29ucy95b3V0dWJlLnN2Z1wiLFxuXHRcIi4vaW1hZ2VzL2Nhci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Nhci5wbmdcIixcblx0XCIuL2ltYWdlcy9jaGFpci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NoYWlyLnBuZ1wiLFxuXHRcIi4vaW1hZ2VzL2VtYWlsLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZW1haWwucG5nXCIsXG5cdFwiLi9pbWFnZXMvZ29vZHMvY2hhaXJfMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2dvb2RzL2NoYWlyXzEucG5nXCIsXG5cdFwiLi9pbWFnZXMvbG9nby5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIsXG5cdFwiLi92YXJpYWJsZXMuc2Nzc1wiOiBcIi4vc3JjL2Fzc2V0cy92YXJpYWJsZXMuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgXCIuL2Jhbm5lci5zY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tIFwiLi4vYnV0dG9uL2J1dHRvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFubmVyKHtcbiAgcm9vdCxcbiAgcHJlcGVuZCxcbiAgYWZ0ZXIsXG4gIHRpdGxlLFxuICB0ZXh0LFxuICBpbWFnZSxcbiAgYnV0dG9uLFxufSkge1xuICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lclwiKTtcbiAgYmFubmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiYmFubmVyX190ZXh0XCI+XG4gICAgICA8aDE+JHt0aXRsZX08L2gxPlxuICAgICAgPHNwYW4+JHt0ZXh0fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmFubmVyX19pbWFnZVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIke3JlcXVpcmUoXCJhc3NldHMvXCIgKyBpbWFnZSl9XCIgYWx0PVwiYmFubmVyIGltYWdlXCIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgY3JlYXRlQnV0dG9uKHtcbiAgICByb290OiBiYW5uZXIucXVlcnlTZWxlY3RvcihcIi5iYW5uZXJfX3RleHRcIiksXG4gICAgLi4uYnV0dG9uLFxuICB9KTtcblxuICBwcmVwZW5kXG4gICAgPyByb290LnByZXBlbmQoYmFubmVyKVxuICAgIDogYWZ0ZXJcbiAgICAgID8gcm9vdC5hZnRlcihiYW5uZXIpXG4gICAgICA6IHJvb3QuYXBwZW5kKGJhbm5lcik7XG59XG4iLCJpbXBvcnQgXCIuL2J1dHRvbi5zY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oe1xuICByb290LFxuICBhZnRlcixcbiAgdGV4dCxcbiAgdHlwZSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgY2xpY2ssXG59KSB7XG4gIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuXG4gIHdpZHRoICYmIChidXR0b24uc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGApO1xuICBoZWlnaHQgJiYgKGJ1dHRvbi5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYGJ1dHRvbl8ke3R5cGV9YCk7XG5cbiAgYnV0dG9uVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5vbmNsaWNrID0gY2xpY2s7XG5cbiAgYnV0dG9uLmFwcGVuZChidXR0b25UZXh0KTtcbiAgYWZ0ZXIgPyBhZnRlci5hZnRlcihidXR0b24pIDogcm9vdC5hcHBlbmQoYnV0dG9uKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gXCIuLi9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgXCIuL2luZm9DYXJkLnNjc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluZm9DYXJkKHtcbiAgcm9vdCxcbiAgcHJlcGVuZCxcbiAgYWZ0ZXIsXG4gIHRpdGxlLFxuICB0ZXh0LFxuICBpbWFnZSxcbiAgdHlwZSxcbiAgYnV0dG9uLFxufSkge1xuICBjb25zdCBpbmZvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaW5mb0NhcmQuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZFwiKTtcbiAgaW5mb0NhcmQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJpbmZvLWNhcmRfX2xlZnRcIj5cbiAgICAgIDxoMyBjbGFzcz1cImluZm8tY2FyZF9fdGl0bGVcIj4ke3RpdGxlfTwvaDM+XG4gICAgICA8cCBjbGFzcz1cImluZm8tY2FyZF9fdGV4dFwiPiR7dGV4dH08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm8tY2FyZF9fcmlnaHRcIj48L2Rpdj5cbiAgYDtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiZW1haWxcIjpcbiAgICAgIGluZm9DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby1jYXJkX19sZWZ0XCIpLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImluZm8tY2FyZF9faW5wdXRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1IGUtbWFpbFwiPlxuICAgICAgYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJidXR0b25cIjpcbiAgICAgIGNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIHJvb3Q6IGluZm9DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby1jYXJkX19sZWZ0XCIpLFxuICAgICAgICAuLi5idXR0b24sXG4gICAgICB9KTtcbiAgfVxuXG4gIGltYWdlICYmXG4gICAgKGluZm9DYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5pbmZvLWNhcmRfX3JpZ2h0XCJcbiAgICApLmlubmVySFRNTCArPSBgPGltZyBzcmM9XCIke3JlcXVpcmUoXCJhc3NldHMvXCIgKyBpbWFnZSl9XCI+YCk7XG5cbiAgcHJlcGVuZFxuICAgID8gcm9vdC5wcmVwZW5kKGluZm9DYXJkKVxuICAgIDogYWZ0ZXJcbiAgICAgID8gcm9vdC5hZnRlcihpbmZvQ2FyZClcbiAgICAgIDogcm9vdC5hcHBlbmQoaW5mb0NhcmQpO1xufVxuIiwiaW1wb3J0IFwiLi9sb2dvLnNjc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvZ28ob3B0aW9ucykge1xuICBvcHRpb25zLnJvb3QuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2xvZ28nPlxuICAgICAgPGltZyBzcmM9XCIke3JlcXVpcmUoXCJhc3NldHMvXCIgKyBvcHRpb25zLmltYWdlKX1cIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwidW5zZWxlY3RhYmxlXCI+JHtvcHRpb25zLnRleHR9PC9zcGFuPlxuICAgIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0ICcuL3ByaWNlQ2FyZC5zY3NzJztcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJpY2VDYXJkKHtyb290LCBuYW1lLCBwcmljZSwgaW1hZ2V9KSB7XG4gIGNvbnN0IHByaWNlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHByaWNlQ2FyZC5jbGFzc0xpc3QuYWRkKCdwcmljZS1jYXJkJyk7XG4gIHByaWNlQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9JHtyZXF1aXJlKCdhc3NldHMvJytpbWFnZSl9IGFsdD1cIlwiLz5cbiAgICA8c3Bhbj4ke25hbWV9PC9zcGFuPlxuICAgIDxzcGFuPiR7cHJpY2V9IOKCvTwvc3Bhbj5cbiAgYDtcblxuICBjcmVhdGVCdXR0b24oe1xuICAgIHJvb3Q6IHByaWNlQ2FyZCxcbiAgICB0eXBlOiAnZmlsbCcsXG4gICAgdGV4dDogJ9Ca0YPQv9C40YLRjCcsXG4gICAgd2lkdGg6IDEzMCxcbiAgICBoZWlnaHQ6IDM1LFxuICAgIGNsaWNrOiAoKSA9PiB7fVxuICB9KVxuXG4gIHJvb3QuYXBwZW5kKHByaWNlQ2FyZCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IHsgY3JlYXRlTG9nbyB9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9nby9sb2dvXCI7XG5pbXBvcnQgeyBjcmVhdGVCYW5uZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVByaWNlQ2FyZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJpY2VDYXJkL3ByaWNlQ2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlSW5mb0NhcmQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2luZm9DYXJkL2luZm9DYXJkXCI7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9faGVhZGVyXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbWFpblwiKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fZm9vdGVyXCIpO1xuY29uc3QgZmF2aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbH49J2ljb24nXVwiKTtcbmNvbnN0IHByaWNlTGlzdCA9IFtcbiAge1xuICAgIG5hbWU6IFwi0J/QsNGA0LjQutC80LDRhdC10YDRgdC60L7QtSDQutGA0LXRgdC70L4gwqvQndC+0YDQvMK7INCz0LjQtNGA0LDQstC70LjRh9C10YHQutC+0LVcIixcbiAgICBwcmljZTogXCI5IDkwMFwiLFxuICAgIGltYWdlOiBcImltYWdlcy9nb29kcy9jaGFpcl8xLnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCLQn9Cw0YDQuNC60LzQsNGF0LXRgNGB0LrQvtC1INC60YDQtdGB0LvQviDCq9Cd0L7RgNC8wrsg0LPQuNC00YDQsNCy0LvQuNGH0LXRgdC60L7QtVwiLFxuICAgIHByaWNlOiBcIjkgOTAwXCIsXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL2dvb2RzL2NoYWlyXzEucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcItCf0LDRgNC40LrQvNCw0YXQtdGA0YHQutC+0LUg0LrRgNC10YHQu9C+IMKr0J3QvtGA0LzCuyDQs9C40LTRgNCw0LLQu9C40YfQtdGB0LrQvtC1XCIsXG4gICAgcHJpY2U6IFwiOSA5MDBcIixcbiAgICBpbWFnZTogXCJpbWFnZXMvZ29vZHMvY2hhaXJfMS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwi0J/QsNGA0LjQutC80LDRhdC10YDRgdC60L7QtSDQutGA0LXRgdC70L4gwqvQndC+0YDQvMK7INCz0LjQtNGA0LDQstC70LjRh9C10YHQutC+0LVcIixcbiAgICBwcmljZTogXCI5IDkwMFwiLFxuICAgIGltYWdlOiBcImltYWdlcy9nb29kcy9jaGFpcl8xLnBuZ1wiLFxuICB9LFxuXTtcbmNvbnN0IHNvY2lhbExpc3QgPSBbXG4gIHtcbiAgICBuYW1lOiBcInlvdXR1YmVcIixcbiAgICBpY29uOiBcImljb25zL3lvdXR1YmUuc3ZnXCIsXG4gICAgbGluazogXCIjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInZrXCIsXG4gICAgaWNvbjogXCJpY29ucy92ay5zdmdcIixcbiAgICBsaW5rOiBcIiNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZmFjZWJvb2tcIixcbiAgICBpY29uOiBcImljb25zL2ZhY2Vib29rLnN2Z1wiLFxuICAgIGxpbms6IFwiI1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJpbnN0YWdyYW1cIixcbiAgICBpY29uOiBcImljb25zL2luc3RhZ3JhbS5zdmdcIixcbiAgICBsaW5rOiBcIiNcIixcbiAgfSxcbl07XG5cbmZhdmljb24uaHJlZiA9IHJlcXVpcmUoJ2Fzc2V0cy9mYXZpY29uLmljbycpO1xubWFpbi5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VfX3RpdGxlIGltZ1wiKS5zcmMgPSByZXF1aXJlKFwiYXNzZXRzL2ltYWdlcy9jYXIucG5nXCIpO1xuXG5jcmVhdGVMb2dvKHtcbiAgcm9vdDogaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbG9nb1wiKSxcbiAgdGV4dDogXCJCRUFVVFlcIixcbiAgaW1hZ2U6IFwiaW1hZ2VzL2xvZ28ucG5nXCIsXG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2VfX2ZlZWRiYWNrJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgY3JlYXRlQnV0dG9uKHtcbiAgICByb290OiBlbGVtZW50LFxuICAgIHdpZHRoOiAxNzAsXG4gICAgdHlwZTogXCJ0cmFuc3BhcmVudFwiLFxuICAgIHRleHQ6IFwi0J7QsdGA0LDRgtC90YvQuSDQt9Cy0L7QvdC+0LpcIixcbiAgICBjbGljazogKCkgPT4ge30sXG4gIH0pXG59KVxuXG5cbmNyZWF0ZUJhbm5lcih7XG4gIHJvb3Q6IG1haW4sXG4gIHByZXBlbmQ6IHRydWUsXG4gIHRpdGxlOiBcItCh0YPQv9C10YAg0LrRgNC10YHQu9C+XCIsXG4gIHRleHQ6IFwi0KLQtdC60YHRgiDQsNC60YbQuNC4INCy0YHQtdCz0LTQsCDQvtGC0YDQsNC20LDQtdGCINGB0YPRgtGMLCDQsCDQvdC1INC/0YDQvtGB0YLQviDQsdC+0LvRgtC+0LLQvdGOLCDQv9C+0Y3RgtC+0LzRgyDQstC90LjQvNCw0YLQtdC70YzQvdC10LVcIixcbiAgaW1hZ2U6IFwiaW1hZ2VzL2NoYWlyLnBuZ1wiLFxuICBidXR0b246IHtcbiAgICB0ZXh0OiBcItCf0L7QtNGA0L7QsdC90LXQtVwiLFxuICAgIHR5cGU6IFwid2hpdGVcIixcbiAgICB3aWR0aDogMTcwLFxuICAgIGNsaWNrOiAoKSA9PiB7fSxcbiAgfSxcbn0pO1xuXG5wcmljZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBjcmVhdGVQcmljZUNhcmQoe1xuICAgIHJvb3Q6IG1haW4ucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlX19jYXJkc1wiKVswXSxcbiAgICAuLi5pdGVtLFxuICB9KTtcbn0pO1xuXG5jcmVhdGVJbmZvQ2FyZCh7XG4gIHJvb3Q6IG1haW4ucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlX193cmFwcGVyXCIpWzFdLFxuICB0aXRsZTogXCLQn9C+0LvRg9GH0LDQudGC0LUg0LHQvtC90YPRgdGLINC4INC/0L7QtNCw0YDQutC4XCIsXG4gIHRleHQ6IFwi0JrQsNC20LTRi9C5INC80LXRgdGP0YYg0YDQsNC30YvQs9GA0YvQstCw0LXQvCA8YnI+IDEwIDAwMCDRgNGD0LHQu9C10Lkg0LTQu9GPINC90LDRiNC40YUg0LrQu9C40LXQvdGC0L7QslwiLFxuICB0eXBlOiBcImVtYWlsXCIsXG4gIGltYWdlOiBcImltYWdlcy9lbWFpbC5wbmdcIixcbn0pO1xuXG5jcmVhdGVJbmZvQ2FyZCh7XG4gIHJvb3Q6IG1haW4ucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlX193cmFwcGVyXCIpWzFdLFxuICB0aXRsZTogXCLQl9Cw0YXQvtC00LjRgtC1INC6INC90LDQvFwiLFxuICB0ZXh0OiBcItCR0L7Qu9C10LUgMzAwINC80LDQs9Cw0LfQuNC90L7QsiA8YnI+INC/0L4g0LLRgdC10Lkg0KDQvtGB0YHQuNC4XCIsXG4gIHR5cGU6IFwiYnV0dG9uXCIsXG4gIGJ1dHRvbjoge1xuICAgIHR5cGU6IFwid2hpdGVcIixcbiAgICB0ZXh0OiBcItCa0LDRgNGC0LAg0LzQsNCz0LDQt9C40L3QvtCyXCIsXG4gICAgd2lkdGg6IDE3MCxcbiAgICBoZWlnaHQ6IDM1LFxuICAgIGNsaWNrOiAoKSA9PiB7fSxcbiAgfSxcbn0pO1xuXG5zb2NpYWxMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgY29uc3Qgc29jaWFsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIHNvY2lhbExpbmsuaHJlZiA9IGl0ZW0ubGluaztcbiAgc29jaWFsTGluay5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3JlcXVpcmUoXCJhc3NldHMvXCIgKyBpdGVtLmljb24pfVwiIC8+YDtcblxuICBmb290ZXIucXVlcnlTZWxlY3RvcihcIi5wYWdlX19zb2NpYWxcIikuYXBwZW5kKHNvY2lhbExpbmspO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=