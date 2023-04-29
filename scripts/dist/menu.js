"use strict";
// menu page
let breakfastItems = [
    { imgUrl: '10', name: 'Chavo’s double', description: 'our mega breakfast double sandwich. made with fresh ingredients and vegetables to achieve its unique taste  ', price: '$15.55' },
    { imgUrl: '3', name: 'shrimp de-oleve', description: 'our special pancakes made with organic products to get a healthy tasty pancakes', price: '$14.00' },
    { imgUrl: '11', name: 'meat special ', description: 'for people wanting a light and easy to digest meal on breakfast. simple bread and western cheese.', price: '$5.60' },
    { imgUrl: '13', name: 'tomato & veggies', description: 'our french backed bread made by our expert chiefs with light sweet toppings. comes in a packet of 15 pieces.', price: '$15.55' },
    { imgUrl: '14', name: 'Mix Cheese Pizza ', description: 'For the beef lovers, we made this pizza for you. Extra juicy cheese on top of a thin layer of bread with extra topings', price: '$22.55' },
    { imgUrl: '10', name: 'Chavo’s double', description: 'our mega breakfast double sandwich. made with fresh ingredients and vegetables to achieve its unique taste  ', price: '$15.55' },
    { imgUrl: '3', name: 'shrimp de-oleve', description: 'our special pancakes made with organic products to get a healthy tasty pancakes', price: '$14.00' },
    { imgUrl: '11', name: 'meat special ', description: 'for people wanting a light and easy to digest meal on breakfast. simple bread and western cheese.', price: '$5.60' },
    { imgUrl: '13', name: 'tomato & veggies', description: 'our french backed bread made by our expert chiefs with light sweet toppings. comes in a packet of 15 pieces.', price: '$15.55' },
    { imgUrl: '14', name: 'Mix Cheese Pizza ', description: 'For the beef lovers, we made this pizza for you. Extra juicy cheese on top of a thin layer of bread with extra topings', price: '$22.55' },
];
let lunchItems = [
    { imgUrl: '3', name: 'Chavo’s double', description: 'A tasty beef double hamburger with cheese and extra fries. served with a compo drink and a large size desert from the desert menu.', price: '$15.55' },
    { imgUrl: '6', name: 'shrimp de-oleve ', description: 'See food tasty shrimp plate with tomato sauce and vegetables. served fresh and hot', price: '$44.00' },
    { imgUrl: '8', name: 'meat special ', description: 'A tasty meat slices served with style. with extra side sauces and side plates. The meat is juicy and cocked rare/medium/well.', price: '$65.00' },
    { imgUrl: '9', name: 'tomato & veggies', description: 'For all our vegetarian customers we made you Tomato and veggies salad plate in the menu. All the components are clean and fresh. ', price: '$15.55' },
    { imgUrl: '17', name: 'Mix Cheese Pizza ', description: 'For the pizza lovers, we made this pizza for you. Extra creamy cheese on top of a thin layer of bread with extra topings', price: '$22.55' },
    { imgUrl: '3', name: 'Chavo’s double', description: 'A tasty beef double hamburger with cheese and extra fries. served with a compo drink and a large size desert from the desert menu.', price: '$15.55' },
    { imgUrl: '6', name: 'shrimp de-oleve ', description: 'See food tasty shrimp plate with tomato sauce and vegetables. served fresh and hot', price: '$44.00' },
    { imgUrl: '8', name: 'meat special ', description: 'A tasty meat slices served with style. with extra side sauces and side plates. The meat is juicy and cocked rare/medium/well.', price: '$65.00' },
    { imgUrl: '9', name: 'tomato & veggies', description: 'For all our vegetarian customers we made you Tomato and veggies salad plate in the menu. All the components are clean and fresh. ', price: '$15.55' },
    { imgUrl: '17', name: 'Mix Cheese Pizza ', description: 'For the pizza lovers, we made this pizza for you. Extra creamy cheese on top of a thin layer of bread with extra topings', price: '$22.55' },
];
let dinnerItems = [
    { imgUrl: '10', name: 'Chavo’s double', description: 'our mega breakfast double sandwich. made with fresh ingredients and vegetables to achieve its unique taste  ', price: '$15.55' },
    { imgUrl: '3', name: 'shrimp de-oleve', description: 'our special pancakes made with organic products to get a healthy tasty pancakes', price: '$14.00' },
    { imgUrl: '11', name: 'meat special ', description: 'for people wanting a light and easy to digest meal on breakfast. simple bread and western cheese.', price: '$5.60' },
    { imgUrl: '13', name: 'tomato & veggies', description: 'our french backed bread made by our expert chiefs with light sweet toppings. comes in a packet of 15 pieces.', price: '$15.55' },
    { imgUrl: '14', name: 'Mix Cheese Pizza ', description: 'For the beef lovers, we made this pizza for you. Extra juicy cheese on top of a thin layer of bread with extra topings', price: '$22.55' },
    { imgUrl: '10', name: 'Chavo’s double', description: 'our mega breakfast double sandwich. made with fresh ingredients and vegetables to achieve its unique taste  ', price: '$15.55' },
    { imgUrl: '3', name: 'shrimp de-oleve', description: 'our special pancakes made with organic products to get a healthy tasty pancakes', price: '$14.00' },
    { imgUrl: '11', name: 'meat special ', description: 'for people wanting a light and easy to digest meal on breakfast. simple bread and western cheese.', price: '$5.60' },
    { imgUrl: '13', name: 'tomato & veggies', description: 'our french backed bread made by our expert chiefs with light sweet toppings. comes in a packet of 15 pieces.', price: '$15.55' },
    { imgUrl: '14', name: 'Mix Cheese Pizza ', description: 'For the beef lovers, we made this pizza for you. Extra juicy cheese on top of a thin layer of bread with extra topings', price: '$22.55' },
];
let drinksItems = [
    { imgUrl: '20', name: 'fresh juice', description: 'Different Juice cocktails made by fresh fruits.  ', price: '$5.55' },
    { imgUrl: '18', name: 'smoothies ', description: 'our special smoothies collection with different flavours', price: '$4.00' },
    { imgUrl: '2', name: 'mega drink ', description: 'for people wanting a light and easy to digest meal on breakfast. simple bread and western cheese.', price: '$5.60' },
    { imgUrl: '21', name: 'Iced milk&tea', description: 'Iced cold tea with the addition of milk to get an unmatched refreshing cup of juice.', price: '$5.55' },
    { imgUrl: '0', name: 'special mega', description: 'Special juice mixes with different flavors and sizes', price: '$3.55' },
    { imgUrl: '20', name: 'fresh juice', description: 'Different Juice cocktails made by fresh fruits.  ', price: '$5.55' },
    { imgUrl: '18', name: 'smoothies ', description: 'our special smoothies collection with different flavours', price: '$4.00' },
    { imgUrl: '2', name: 'mega drink ', description: 'for people wanting a light and easy to digest meal on breakfast. simple bread and western cheese.', price: '$5.60' },
    { imgUrl: '21', name: 'Iced milk&tea', description: 'Iced cold tea with the addition of milk to get an unmatched refreshing cup of juice.', price: '$5.55' },
    { imgUrl: '0', name: 'special mega', description: 'Special juice mixes with different flavors and sizes', price: '$3.55' },
];
let specialsItems = [
    { imgUrl: '7', name: 'Donuts& aked ', description: 'special donuts and backed items with different flavors', price: '$5.55' },
    { imgUrl: '3', name: 'shrimp de-oleve', description: 'our special pancakes made with organic products to get a healthy tasty pancakes', price: '$14.00' },
    { imgUrl: '16', name: 'mega choco cake ', description: 'Fluffy chocolate mega cheese cake. made with expert hands and extra toppings ', price: '$5.60' },
    { imgUrl: '19', name: 'Chovo’s cup cake ', description: 'Chavo’s special cup cakes with different flavors and toppings ', price: '$4.00' },
];
let dessertsItems = [
    { imgUrl: '7', name: 'Donuts& aked ', description: 'special donuts and backed items with different flavors', price: '$5.55' },
    { imgUrl: '19', name: 'Chovo’s cup cake ', description: 'Chavo’s special cup cakes with different flavors and toppings ', price: '$4.00' },
    { imgUrl: '16', name: 'mega choco cake ', description: 'Fluffy chocolate mega cheese cake. made with expert hands and extra toppings ', price: '$5.60' },
    { imgUrl: '5', name: 'choco smoothie', description: 'Iced cold tea with the addition of milk to get an unmatched refreshing cup of juice.', price: '$5.55' },
    { imgUrl: '15', name: 'Ice cream', description: 'discover our different ice cream flavors from our collection', price: '$3.55' },
    { imgUrl: '7', name: 'Donuts& aked ', description: 'special donuts and backed items with different flavors', price: '$5.55' },
    { imgUrl: '19', name: 'Chovo’s cup cake ', description: 'Chavo’s special cup cakes with different flavors and toppings ', price: '$4.00' },
    { imgUrl: '16', name: 'mega choco cake ', description: 'Fluffy chocolate mega cheese cake. made with expert hands and extra toppings ', price: '$5.60' },
    { imgUrl: '5', name: 'choco smoothie', description: 'Iced cold tea with the addition of milk to get an unmatched refreshing cup of juice.', price: '$5.55' },
    { imgUrl: '15', name: 'Ice cream', description: 'discover our different ice cream flavors from our collection', price: '$3.55' },
];
let imgPrefex = '../images/meals/';
let imgExtension = '.webp';
const menuAppend = (itemsArray, imgPrefex, imgExtension, galleryName, containerSelector) => {
    let elementsContainer = [];
    let counter = 0;
    itemsArray.forEach((item) => {
        let url = imgPrefex + item.imgUrl + imgExtension;
        let name = item.name;
        let description = item.description;
        let price = item.price;
        let newElement = document.createElement('div');
        newElement.classList.add('menu-item');
        newElement.setAttribute('data-item-id', galleryName + counter.toString());
        newElement.innerHTML = `
      <i class="fa-regular fa-heart favorite-btn"></i>
      <a href="${url}" class="d-block menu-item-link glightbox3"  data-gallery="${galleryName}">
        <div class="img-wrapper-center w-100 border-radius-default " style="height: 160px;">
          <img src="${url}" alt="menu item image">
          <p class="text-light text-uppercase">${name}</p>
        </div>
      </a>
      <p>
      ${description}
      </p>
      <p class="mt-auto pt-2 fw-600 fs-5">
      ${price}
      </p>
    `;
        elementsContainer.push(newElement);
        counter++;
    });
    elementsContainer === null || elementsContainer === void 0 ? void 0 : elementsContainer.forEach((el) => {
        document.querySelector(containerSelector).appendChild(el);
    });
};
menuAppend(breakfastItems, imgPrefex, imgExtension, "breakfast", '#breakfast');
menuAppend(lunchItems, imgPrefex, imgExtension, "lunch", '#lunch');
menuAppend(dinnerItems, imgPrefex, imgExtension, "dinner", '#dinner');
menuAppend(specialsItems, imgPrefex, imgExtension, "specials", '#specials');
menuAppend(dessertsItems, imgPrefex, imgExtension, "desserts", '#desserts');
menuAppend(drinksItems, imgPrefex, imgExtension, "drinks", '#drinks');
let menuFavBtns = () => { return Array.from(document.querySelectorAll('.favorite-btn')); };
let allItems = () => { return Array.from(document.querySelectorAll('div:not(#favorites) .menu-item')); };
const toggleFavItem = (id) => {
    var _a, _b, _c, _d, _e;
    let currentFavIds = [];
    let favMenu = () => { return document.querySelector('#favorites'); };
    Array.from(document.querySelectorAll('#favorites .menu-item')).forEach(item => { currentFavIds.push(item.getAttribute('data-item-id')); });
    if (currentFavIds.includes(id)) {
        (_a = document.querySelector(`#favorites div[data-item-id = "${id}"]`)) === null || _a === void 0 ? void 0 : _a.remove();
    }
    else {
        let cloneElement = (_b = document.querySelector(`[data-item-id = "${id}"]`)) === null || _b === void 0 ? void 0 : _b.cloneNode(true);
        (_c = favMenu()) === null || _c === void 0 ? void 0 : _c.appendChild(cloneElement);
        (_e = (_d = favMenu()) === null || _d === void 0 ? void 0 : _d.querySelector(`[data-item-id = "${id}"] .favorite-btn`)) === null || _e === void 0 ? void 0 : _e.addEventListener('click', (e) => {
            // updating the glopal style for every element with the same ID 
            Array.from(document.querySelectorAll(`[data-item-id = "${id}"]`)).forEach((item) => {
                let itemFavBtn = item.querySelector('.favorite-btn');
                itemFavBtn.classList.toggle('text-danger');
                itemFavBtn.classList.toggle('fa-solid');
                itemFavBtn.classList.toggle('fa-regular');
            });
            e.currentTarget.parentElement.remove();
        });
    }
};
const initFavSelection = (list) => {
    list.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('text-danger');
            e.currentTarget.classList.toggle('fa-solid');
            e.currentTarget.classList.toggle('fa-regular');
            let id = e.currentTarget.parentElement.getAttribute('data-item-id');
            toggleFavItem(id);
        });
    });
};
initFavSelection(menuFavBtns());
