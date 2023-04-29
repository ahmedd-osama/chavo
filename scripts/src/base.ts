// utilities
const select = (el:any, all = false) => {
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
/**
 * Easy event listener function
 */
const on = (type:any, selector:any, listener:any, all = false) => {
  if (all) {
    select(selector, all).forEach((e:any) => e.addEventListener(type, listener))
  } else {
    select(selector, all).addEventListener(type, listener)
  }
}
// header 
const navToggle = () => {
  document.querySelector('#navigation-toggler-btn')?.click();
};
document.querySelectorAll('header a.nav-link:not(.dropdown-toggle), header a.dropdown-item').forEach((el)=>{el.addEventListener('click', ()=>window.innerWidth<992?navToggle():'')})
// section titles 
const sectionTitles = document.querySelectorAll('.section-title, .section-title-right, .section-title-left');
console.log(sectionTitles)

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry:any) => {
    if (entry.isIntersecting ) {
      entry.target.classList.contains('show')? '': entry.target.classList.add('show');
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