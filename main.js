/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function makeContact() {
    const main = document.querySelector('main');

    const contactContainer = document.createElement('div')
    contactContainer.id = 'contact-container'

    main.appendChild(contactContainer);

    const contactTitle = document.createElement('div')
    contactTitle.id = 'contact-title'
    contactTitle.textContent = 'Visit us or call us today'

    const formAndImageContainer = document.createElement('div');
    formAndImageContainer.id = 'form-and-image-container';

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(formAndImageContainer);

    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';

    const imageContainer = document.createElement('img')
    imageContainer.src = './images/meats.webp';
    imageContainer.id = 'meats'

    formAndImageContainer.appendChild(formContainer);
    formAndImageContainer.appendChild(imageContainer);

    const formTitle = document.createElement('div');
    formTitle.id = 'form-title'
    formTitle.textContent = 'Opening Hours'

    const hoursContainer = document.createElement('div');
    hoursContainer.id = 'hours-container';

    const hoursOne = document.createElement('div');
    const hoursTwo = document.createElement('div');
    const hoursThree = document.createElement('div');
    hoursOne.className = 'hours';
    hoursTwo.className = 'hours';
    hoursThree.className = 'hours';
    hoursOne.textContent = 'Tues - Thurs: 9am - 5pm';
    hoursTwo.textContent = 'Fri: 9am - 7pm/Sat: 8am - 4pm';
    hoursThree.textContent = 'Sun - Mon: Closed';

    hoursContainer.appendChild(formTitle);
    hoursContainer.appendChild(hoursOne);
    hoursContainer.appendChild(hoursTwo);
    hoursContainer.appendChild(hoursThree);


    formContainer.appendChild(hoursContainer);


    const form = document.createElement('form')

    formContainer.append(form)

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.placeholder = 'Name'

    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.placeholder = 'Email'

    const messageInput = document.createElement('textarea')
    messageInput.placeholder = 'Message'

    const submitBtn = document.createElement('button')
    submitBtn.id = 'submit-button';
    submitBtn.textContent = 'Submit'

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(submitBtn);

    return main
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeHome() {
    const main = document.querySelector('main')

    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'home-page-container';

    // Create the welcome text div
    const welcomeText = document.createElement('div');
    welcomeText.id = 'welcome-text';
    welcomeText.textContent = 'Your Meats Cooked to ';

    // Create the span element with inline style
    const spanElement = document.createElement('span');
    spanElement.style.color = '#DA2029';
    spanElement.textContent = 'Perfection';

    // Append the span element to the welcome text div
    welcomeText.appendChild(spanElement);

    // Create the image element
    const homePageImage = document.createElement('img');
    homePageImage.src = './images/homePageImg.jpg';
    homePageImage.id = 'home-page-image';

    // Append the welcome text and image elements to the main container
    homePageContainer.appendChild(welcomeText);
    homePageContainer.appendChild(homePageImage);

    // Append the main container to the main
    main.appendChild(homePageContainer);


    return main
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MenuItem {
    constructor(section, item, description, imageSrc) {
        this.section = section;
        this.item = item;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}

const menuItems = [
    new MenuItem('beef', 'Ribeye', 'Savor the exceptional quality of our Ribeye, sourced from the finest grass-fed cattle, known for its rich flavor and tenderness. A true testament to quality and taste.', './images/ribeye.jpg'),
    new MenuItem('beef', 'Filet Mignon', 'Discover our Filet Mignon, an exquisite cut from the finest grass-fed cattle, celebrated for its exceptional tenderness and flavor.', './images/filet.jpg'),
    new MenuItem('beef', 'T-Bone', 'Indulge in our T-Bone, a combination of tender filet mignon and flavorful New York strip, sourced from top-quality, grass-fed beef.', './images/tbone.jpeg'),
    new MenuItem('beef', 'Tomahawk', 'Feast upon our Tomahawk steak, a bold, bone-in masterpiece. This impressive cut, sourced from premium, well-marbled beef, promises an unforgettable dining experience.', './images/tomahawk.jpg'),

    new  MenuItem('pork', 'Pork Belly', 'Savor our Pork Belly, a culinary delight. This succulent cut, prepared to perfection, delivers an explosion of flavor.', './images/porkbelly.jpg'),
    new  MenuItem('pork', 'Pork Sausage', 'Delight in our Pork Sausage, a savory treat. Crafted with care, these sausages burst with flavor and bring comfort to your plate.', './images/sausage.jpeg'),
    new  MenuItem('pork', 'Pork Chop', "Enjoy our Pork Chop, a delectable delight. Sourced from the finest cuts of pork, it's a flavorful experience worth savoring.", './images/porkchop.jpg'),

    new MenuItem('chicken', 'Chicken Breast', "Savor our Chicken Breast, a lean and tender choice. Expertly prepared, it embodies simplicity and succulence for a satisfying dining experience.", './images/chickenBreast.jpeg'),
    new MenuItem('chicken', 'Chicken Legs', "Indulge in our Chicken Legs, flavorful and juicy choice. Exquisitely cooked, it's a succulent delight for your palate.", './images/chickenLeg.jpeg'),
    new MenuItem('chicken', 'Chicken Wings', "Delight in our Chicken Wings, a crowd-pleasing favorite. These crispy and saucy wings are a finger-licking feast for the senses.", './images/chickenWings.jpeg')
]

function makeMenu() {
    const main = document.querySelector('main');

    const menuContent = document.createElement('div');
    menuContent.id = 'menu-content';
    main.appendChild(menuContent)

    const beefSection = document.createElement('div');
    const porkSection = document.createElement('div');
    const chickenSection = document.createElement('div');
    beefSection.className = 'menu-section'
    porkSection.className = 'menu-section'
    chickenSection.className = 'menu-section'

    menuContent.append(beefSection)
    menuContent.append(porkSection)
    menuContent.append(chickenSection)

    const beefTitle = document.createElement('div')
    const porkTitle = document.createElement('div')
    const chickenTitle = document.createElement('div')
    beefTitle.textContent = 'Beef'
    porkTitle.textContent = 'Pork'
    chickenTitle.textContent = 'Chicken'
    beefTitle.className = 'menu-subtitle'
    porkTitle.className = 'menu-subtitle'
    chickenTitle.className = 'menu-subtitle'

    beefSection.appendChild(beefTitle)
    porkSection.appendChild(porkTitle)
    chickenSection.appendChild(chickenTitle)

    const beefOptions = document.createElement('div')
    const porkOptions = document.createElement('div')
    const chickenOptions = document.createElement('div')
    beefOptions.id = 'beef-options'
    porkOptions.id = 'pork-options'
    chickenOptions.id = 'chicken-options'
    beefOptions.className = 'options'
    porkOptions.className = 'options'
    chickenOptions.className = 'options'

    beefSection.appendChild(beefOptions)
    porkSection.appendChild(porkOptions)
    chickenSection.appendChild(chickenOptions)


    menuItems.forEach((menuItem) =>{
        const card = document.createElement('div')
        card.className = 'card'

        const image = document.createElement('img')
        image.src = menuItem.imageSrc
        image.className = 'item-pic'

        const descriptionContainer = document.createElement('div')
        descriptionContainer.className = 'description-container'

        card.appendChild(image)
        card.appendChild(descriptionContainer)

        const itemName = document.createElement('div')
        itemName.className = 'item-name'
        itemName.textContent = menuItem.item

        const description = document.createElement('div')
        description.className = 'description'
        description.textContent = menuItem.description

        descriptionContainer.appendChild(itemName)
        descriptionContainer.appendChild(description)
        
        if (menuItem.section == 'beef'){
            beefOptions.appendChild(card)
        } else if (menuItem.section == 'pork'){
            porkOptions.appendChild(card)
        } else if (menuItem.section == 'chicken'){
            chickenOptions.appendChild(card)
        }
    });

    return main
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Button {

}

function makeHeader() {
    const header = document.createElement("header");

    const headerContainer = document.createElement('div')
    headerContainer.setAttribute('id', 'header-container')

    const btnContainer = document.createElement('div')
    btnContainer.setAttribute('id', 'button-container');

    const btnOne = document.createElement('button')
    const btnTwo = document.createElement('button')
    const btnThree = document.createElement('button')

    const title = document.createElement('div')

    title.setAttribute('id', 'resturant-name')

    btnOne.setAttribute('id', 'home-btn');
    btnTwo.setAttribute('id', 'menu-btn');
    btnThree.setAttribute('id', 'contact-btn');

    btnOne.setAttribute('class', 'nav-button')
    btnTwo.setAttribute('class', 'nav-button')
    btnThree.setAttribute('class', 'nav-button')

    title.textContent = 'The Gourmet Grille'

    btnOne.textContent = 'Home'
    btnTwo.textContent = 'Menu'
    btnThree.textContent = 'Contact'

    btnContainer.appendChild(btnOne);
    btnContainer.appendChild(btnTwo);
    btnContainer.appendChild(btnThree);

    headerContainer.appendChild(title);
    headerContainer.appendChild(btnContainer)

    header.appendChild(headerContainer);

    return header
}

function makeMain() {
    const main = document.createElement('main')
    return main;
}

function makeFooter() {
    const footer = document.createElement('footer');

    footer.textContent = 'Made by Jiahao Huamani'
    return footer
}

function loadPage() {
    const content = document.querySelector('#content')
    content.appendChild(makeHeader())
    content.appendChild(makeMain())
    content.appendChild(makeFooter())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()


const main = document.querySelector('main');
const homeTab = document.querySelector('#home-btn')
const menuTab = document.querySelector('#menu-btn')
const contactTab = document.querySelector('#contact-btn')

homeTab.addEventListener('click', ()=>{
    main.innerHTML = '';
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

menuTab.addEventListener('click', ()=>{
    main.innerHTML = '';
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
})

contactTabTab.addEventListener('click', ()=>{
    main.innerHTML = '';
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
})
    


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNsRmY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDbkN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7OztBQUlBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzlHZjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7OztVQ2xFZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ0g7QUFDQTtBQUNNOztBQUVwQyxvREFBUTtBQUNSLGtEQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG9EQUFXO0FBQ2YsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gbWFrZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RDb250YWluZXIuaWQgPSAnY29udGFjdC1jb250YWluZXInXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0VGl0bGUuaWQgPSAnY29udGFjdC10aXRsZSdcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnVmlzaXQgdXMgb3IgY2FsbCB1cyB0b2RheSdcblxuICAgIGNvbnN0IGZvcm1BbmRJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1BbmRJbWFnZUNvbnRhaW5lci5pZCA9ICdmb3JtLWFuZC1pbWFnZS1jb250YWluZXInO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUFuZEltYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmlkID0gJ2Zvcm0tY29udGFpbmVyJztcblxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWFnZUNvbnRhaW5lci5zcmMgPSAnLi9pbWFnZXMvbWVhdHMud2VicCc7XG4gICAgaW1hZ2VDb250YWluZXIuaWQgPSAnbWVhdHMnXG5cbiAgICBmb3JtQW5kSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgZm9ybUFuZEltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1UaXRsZS5pZCA9ICdmb3JtLXRpdGxlJ1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdPcGVuaW5nIEhvdXJzJ1xuXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc0NvbnRhaW5lci5pZCA9ICdob3Vycy1jb250YWluZXInO1xuXG4gICAgY29uc3QgaG91cnNPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob3Vyc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvdXJzVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc09uZS5jbGFzc05hbWUgPSAnaG91cnMnO1xuICAgIGhvdXJzVHdvLmNsYXNzTmFtZSA9ICdob3Vycyc7XG4gICAgaG91cnNUaHJlZS5jbGFzc05hbWUgPSAnaG91cnMnO1xuICAgIGhvdXJzT25lLnRleHRDb250ZW50ID0gJ1R1ZXMgLSBUaHVyczogOWFtIC0gNXBtJztcbiAgICBob3Vyc1R3by50ZXh0Q29udGVudCA9ICdGcmk6IDlhbSAtIDdwbS9TYXQ6IDhhbSAtIDRwbSc7XG4gICAgaG91cnNUaHJlZS50ZXh0Q29udGVudCA9ICdTdW4gLSBNb246IENsb3NlZCc7XG5cbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzT25lKTtcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc1R3byk7XG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNUaHJlZSk7XG5cblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpO1xuXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtKVxuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUnXG5cbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCdcbiAgICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ0VtYWlsJ1xuXG4gICAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIG1lc3NhZ2VJbnB1dC5wbGFjZWhvbGRlciA9ICdNZXNzYWdlJ1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uaWQgPSAnc3VibWl0LWJ1dHRvbic7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29udGFjdCIsImZ1bmN0aW9uIG1ha2VIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcblxuICAgIGNvbnN0IGhvbWVQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuaWQgPSAnaG9tZS1wYWdlLWNvbnRhaW5lcic7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHdlbGNvbWUgdGV4dCBkaXZcbiAgICBjb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWVUZXh0LmlkID0gJ3dlbGNvbWUtdGV4dCc7XG4gICAgd2VsY29tZVRleHQudGV4dENvbnRlbnQgPSAnWW91ciBNZWF0cyBDb29rZWQgdG8gJztcblxuICAgIC8vIENyZWF0ZSB0aGUgc3BhbiBlbGVtZW50IHdpdGggaW5saW5lIHN0eWxlXG4gICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhbkVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0RBMjAyOSc7XG4gICAgc3BhbkVsZW1lbnQudGV4dENvbnRlbnQgPSAnUGVyZmVjdGlvbic7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHNwYW4gZWxlbWVudCB0byB0aGUgd2VsY29tZSB0ZXh0IGRpdlxuICAgIHdlbGNvbWVUZXh0LmFwcGVuZENoaWxkKHNwYW5FbGVtZW50KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW1hZ2UgZWxlbWVudFxuICAgIGNvbnN0IGhvbWVQYWdlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lUGFnZUltYWdlLnNyYyA9ICcuL2ltYWdlcy9ob21lUGFnZUltZy5qcGcnO1xuICAgIGhvbWVQYWdlSW1hZ2UuaWQgPSAnaG9tZS1wYWdlLWltYWdlJztcblxuICAgIC8vIEFwcGVuZCB0aGUgd2VsY29tZSB0ZXh0IGFuZCBpbWFnZSBlbGVtZW50cyB0byB0aGUgbWFpbiBjb250YWluZXJcbiAgICBob21lUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lVGV4dCk7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VJbWFnZSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIG1haW4gY29udGFpbmVyIHRvIHRoZSBtYWluXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lUGFnZUNvbnRhaW5lcik7XG5cblxuICAgIHJldHVybiBtYWluXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VIb21lXG4iLCJjbGFzcyBNZW51SXRlbSB7XG4gICAgY29uc3RydWN0b3Ioc2VjdGlvbiwgaXRlbSwgZGVzY3JpcHRpb24sIGltYWdlU3JjKSB7XG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IHNlY3Rpb247XG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pbWFnZVNyYyA9IGltYWdlU3JjO1xuICAgIH1cbn1cblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIG5ldyBNZW51SXRlbSgnYmVlZicsICdSaWJleWUnLCAnU2F2b3IgdGhlIGV4Y2VwdGlvbmFsIHF1YWxpdHkgb2Ygb3VyIFJpYmV5ZSwgc291cmNlZCBmcm9tIHRoZSBmaW5lc3QgZ3Jhc3MtZmVkIGNhdHRsZSwga25vd24gZm9yIGl0cyByaWNoIGZsYXZvciBhbmQgdGVuZGVybmVzcy4gQSB0cnVlIHRlc3RhbWVudCB0byBxdWFsaXR5IGFuZCB0YXN0ZS4nLCAnLi9pbWFnZXMvcmliZXllLmpwZycpLFxuICAgIG5ldyBNZW51SXRlbSgnYmVlZicsICdGaWxldCBNaWdub24nLCAnRGlzY292ZXIgb3VyIEZpbGV0IE1pZ25vbiwgYW4gZXhxdWlzaXRlIGN1dCBmcm9tIHRoZSBmaW5lc3QgZ3Jhc3MtZmVkIGNhdHRsZSwgY2VsZWJyYXRlZCBmb3IgaXRzIGV4Y2VwdGlvbmFsIHRlbmRlcm5lc3MgYW5kIGZsYXZvci4nLCAnLi9pbWFnZXMvZmlsZXQuanBnJyksXG4gICAgbmV3IE1lbnVJdGVtKCdiZWVmJywgJ1QtQm9uZScsICdJbmR1bGdlIGluIG91ciBULUJvbmUsIGEgY29tYmluYXRpb24gb2YgdGVuZGVyIGZpbGV0IG1pZ25vbiBhbmQgZmxhdm9yZnVsIE5ldyBZb3JrIHN0cmlwLCBzb3VyY2VkIGZyb20gdG9wLXF1YWxpdHksIGdyYXNzLWZlZCBiZWVmLicsICcuL2ltYWdlcy90Ym9uZS5qcGVnJyksXG4gICAgbmV3IE1lbnVJdGVtKCdiZWVmJywgJ1RvbWFoYXdrJywgJ0ZlYXN0IHVwb24gb3VyIFRvbWFoYXdrIHN0ZWFrLCBhIGJvbGQsIGJvbmUtaW4gbWFzdGVycGllY2UuIFRoaXMgaW1wcmVzc2l2ZSBjdXQsIHNvdXJjZWQgZnJvbSBwcmVtaXVtLCB3ZWxsLW1hcmJsZWQgYmVlZiwgcHJvbWlzZXMgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4nLCAnLi9pbWFnZXMvdG9tYWhhd2suanBnJyksXG5cbiAgICBuZXcgIE1lbnVJdGVtKCdwb3JrJywgJ1BvcmsgQmVsbHknLCAnU2F2b3Igb3VyIFBvcmsgQmVsbHksIGEgY3VsaW5hcnkgZGVsaWdodC4gVGhpcyBzdWNjdWxlbnQgY3V0LCBwcmVwYXJlZCB0byBwZXJmZWN0aW9uLCBkZWxpdmVycyBhbiBleHBsb3Npb24gb2YgZmxhdm9yLicsICcuL2ltYWdlcy9wb3JrYmVsbHkuanBnJyksXG4gICAgbmV3ICBNZW51SXRlbSgncG9yaycsICdQb3JrIFNhdXNhZ2UnLCAnRGVsaWdodCBpbiBvdXIgUG9yayBTYXVzYWdlLCBhIHNhdm9yeSB0cmVhdC4gQ3JhZnRlZCB3aXRoIGNhcmUsIHRoZXNlIHNhdXNhZ2VzIGJ1cnN0IHdpdGggZmxhdm9yIGFuZCBicmluZyBjb21mb3J0IHRvIHlvdXIgcGxhdGUuJywgJy4vaW1hZ2VzL3NhdXNhZ2UuanBlZycpLFxuICAgIG5ldyAgTWVudUl0ZW0oJ3BvcmsnLCAnUG9yayBDaG9wJywgXCJFbmpveSBvdXIgUG9yayBDaG9wLCBhIGRlbGVjdGFibGUgZGVsaWdodC4gU291cmNlZCBmcm9tIHRoZSBmaW5lc3QgY3V0cyBvZiBwb3JrLCBpdCdzIGEgZmxhdm9yZnVsIGV4cGVyaWVuY2Ugd29ydGggc2F2b3JpbmcuXCIsICcuL2ltYWdlcy9wb3JrY2hvcC5qcGcnKSxcblxuICAgIG5ldyBNZW51SXRlbSgnY2hpY2tlbicsICdDaGlja2VuIEJyZWFzdCcsIFwiU2F2b3Igb3VyIENoaWNrZW4gQnJlYXN0LCBhIGxlYW4gYW5kIHRlbmRlciBjaG9pY2UuIEV4cGVydGx5IHByZXBhcmVkLCBpdCBlbWJvZGllcyBzaW1wbGljaXR5IGFuZCBzdWNjdWxlbmNlIGZvciBhIHNhdGlzZnlpbmcgZGluaW5nIGV4cGVyaWVuY2UuXCIsICcuL2ltYWdlcy9jaGlja2VuQnJlYXN0LmpwZWcnKSxcbiAgICBuZXcgTWVudUl0ZW0oJ2NoaWNrZW4nLCAnQ2hpY2tlbiBMZWdzJywgXCJJbmR1bGdlIGluIG91ciBDaGlja2VuIExlZ3MsIGZsYXZvcmZ1bCBhbmQganVpY3kgY2hvaWNlLiBFeHF1aXNpdGVseSBjb29rZWQsIGl0J3MgYSBzdWNjdWxlbnQgZGVsaWdodCBmb3IgeW91ciBwYWxhdGUuXCIsICcuL2ltYWdlcy9jaGlja2VuTGVnLmpwZWcnKSxcbiAgICBuZXcgTWVudUl0ZW0oJ2NoaWNrZW4nLCAnQ2hpY2tlbiBXaW5ncycsIFwiRGVsaWdodCBpbiBvdXIgQ2hpY2tlbiBXaW5ncywgYSBjcm93ZC1wbGVhc2luZyBmYXZvcml0ZS4gVGhlc2UgY3Jpc3B5IGFuZCBzYXVjeSB3aW5ncyBhcmUgYSBmaW5nZXItbGlja2luZyBmZWFzdCBmb3IgdGhlIHNlbnNlcy5cIiwgJy4vaW1hZ2VzL2NoaWNrZW5XaW5ncy5qcGVnJylcbl1cblxuZnVuY3Rpb24gbWFrZU1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRlbnQuaWQgPSAnbWVudS1jb250ZW50JztcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KVxuXG4gICAgY29uc3QgYmVlZlNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwb3JrU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWNrZW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmVlZlNlY3Rpb24uY2xhc3NOYW1lID0gJ21lbnUtc2VjdGlvbidcbiAgICBwb3JrU2VjdGlvbi5jbGFzc05hbWUgPSAnbWVudS1zZWN0aW9uJ1xuICAgIGNoaWNrZW5TZWN0aW9uLmNsYXNzTmFtZSA9ICdtZW51LXNlY3Rpb24nXG5cbiAgICBtZW51Q29udGVudC5hcHBlbmQoYmVlZlNlY3Rpb24pXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kKHBvcmtTZWN0aW9uKVxuICAgIG1lbnVDb250ZW50LmFwcGVuZChjaGlja2VuU2VjdGlvbilcblxuICAgIGNvbnN0IGJlZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcG9ya1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjaGlja2VuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJlZWZUaXRsZS50ZXh0Q29udGVudCA9ICdCZWVmJ1xuICAgIHBvcmtUaXRsZS50ZXh0Q29udGVudCA9ICdQb3JrJ1xuICAgIGNoaWNrZW5UaXRsZS50ZXh0Q29udGVudCA9ICdDaGlja2VuJ1xuICAgIGJlZWZUaXRsZS5jbGFzc05hbWUgPSAnbWVudS1zdWJ0aXRsZSdcbiAgICBwb3JrVGl0bGUuY2xhc3NOYW1lID0gJ21lbnUtc3VidGl0bGUnXG4gICAgY2hpY2tlblRpdGxlLmNsYXNzTmFtZSA9ICdtZW51LXN1YnRpdGxlJ1xuXG4gICAgYmVlZlNlY3Rpb24uYXBwZW5kQ2hpbGQoYmVlZlRpdGxlKVxuICAgIHBvcmtTZWN0aW9uLmFwcGVuZENoaWxkKHBvcmtUaXRsZSlcbiAgICBjaGlja2VuU2VjdGlvbi5hcHBlbmRDaGlsZChjaGlja2VuVGl0bGUpXG5cbiAgICBjb25zdCBiZWVmT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcG9ya09wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNoaWNrZW5PcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBiZWVmT3B0aW9ucy5pZCA9ICdiZWVmLW9wdGlvbnMnXG4gICAgcG9ya09wdGlvbnMuaWQgPSAncG9yay1vcHRpb25zJ1xuICAgIGNoaWNrZW5PcHRpb25zLmlkID0gJ2NoaWNrZW4tb3B0aW9ucydcbiAgICBiZWVmT3B0aW9ucy5jbGFzc05hbWUgPSAnb3B0aW9ucydcbiAgICBwb3JrT3B0aW9ucy5jbGFzc05hbWUgPSAnb3B0aW9ucydcbiAgICBjaGlja2VuT3B0aW9ucy5jbGFzc05hbWUgPSAnb3B0aW9ucydcblxuICAgIGJlZWZTZWN0aW9uLmFwcGVuZENoaWxkKGJlZWZPcHRpb25zKVxuICAgIHBvcmtTZWN0aW9uLmFwcGVuZENoaWxkKHBvcmtPcHRpb25zKVxuICAgIGNoaWNrZW5TZWN0aW9uLmFwcGVuZENoaWxkKGNoaWNrZW5PcHRpb25zKVxuXG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+e1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCdcblxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGltYWdlLnNyYyA9IG1lbnVJdGVtLmltYWdlU3JjXG4gICAgICAgIGltYWdlLmNsYXNzTmFtZSA9ICdpdGVtLXBpYydcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbi1jb250YWluZXInXG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcilcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTmFtZSA9ICdpdGVtLW5hbWUnXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbWVudUl0ZW0uaXRlbVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG1lbnVJdGVtLmRlc2NyaXB0aW9uXG5cbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpXG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICBcbiAgICAgICAgaWYgKG1lbnVJdGVtLnNlY3Rpb24gPT0gJ2JlZWYnKXtcbiAgICAgICAgICAgIGJlZWZPcHRpb25zLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgIH0gZWxzZSBpZiAobWVudUl0ZW0uc2VjdGlvbiA9PSAncG9yaycpe1xuICAgICAgICAgICAgcG9ya09wdGlvbnMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgfSBlbHNlIGlmIChtZW51SXRlbS5zZWN0aW9uID09ICdjaGlja2VuJyl7XG4gICAgICAgICAgICBjaGlja2VuT3B0aW9ucy5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbWFrZU1lbnUiLCJjbGFzcyBCdXR0b24ge1xuXG59XG5cbmZ1bmN0aW9uIG1ha2VIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLWNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGJ0bk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgYnRuVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBidG5UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3R1cmFudC1uYW1lJylcblxuICAgIGJ0bk9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtYnRuJyk7XG4gICAgYnRuVHdvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgICBidG5UaHJlZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtYnRuJyk7XG5cbiAgICBidG5PbmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtYnV0dG9uJylcbiAgICBidG5Ud28uc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtYnV0dG9uJylcbiAgICBidG5UaHJlZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1idXR0b24nKVxuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIEdvdXJtZXQgR3JpbGxlJ1xuXG4gICAgYnRuT25lLnRleHRDb250ZW50ID0gJ0hvbWUnXG4gICAgYnRuVHdvLnRleHRDb250ZW50ID0gJ01lbnUnXG4gICAgYnRuVGhyZWUudGV4dENvbnRlbnQgPSAnQ29udGFjdCdcblxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5PbmUpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Ud28pO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5UaHJlZSk7XG5cbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZnVuY3Rpb24gbWFrZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ01hZGUgYnkgSmlhaGFvIEh1YW1hbmknXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUhlYWRlcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZU1haW4oKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VGb290ZXIoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2UiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5pbXBvcnQgbWFrZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IG1ha2VNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBtYWtlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmxvYWRQYWdlKClcbm1ha2VIb21lKClcblxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ0bicpXG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJylcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1idG4nKVxuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1ha2VIb21lKClcbn0pXG5cbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFrZU1lbnUoKVxufSlcblxuY29udGFjdFRhYlRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWtlQ29udGFjdCgpXG59KVxuICAgIFxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=