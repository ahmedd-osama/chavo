"use strict";
// utilities
const select = (el, all = false) => {
    if (all) {
        return [...document.querySelectorAll(el)];
    }
    else {
        return document.querySelector(el);
    }
};
/**
 * Easy event listener function
 */
const on = (type, selector, listener, all = false) => {
    if (all) {
        select(selector, all).forEach((e) => e.addEventListener(type, listener));
    }
    else {
        select(selector, all).addEventListener(type, listener);
    }
};
// header 
const navToggle = () => {
    var _a;
    (_a = document.querySelector('#navigation-toggler-btn')) === null || _a === void 0 ? void 0 : _a.click();
};
document.querySelectorAll('header a.nav-link:not(.dropdown-toggle), header a.dropdown-item').forEach((el) => { el.addEventListener('click', () => window.innerWidth < 992 ? navToggle() : ''); });
// section titles 
const sectionTitles = document.querySelectorAll('.section-title, .section-title-right, .section-title-left');
console.log(sectionTitles);
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.contains('show') ? '' : entry.target.classList.add('show');
        }
    });
});
sectionTitles.forEach(title => {
    observer.observe(title);
});
// AOS library
AOS.init({
    once: true
});
