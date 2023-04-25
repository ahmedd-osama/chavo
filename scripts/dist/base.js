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
