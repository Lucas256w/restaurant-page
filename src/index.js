import loadPage from "./website";
import makeHome from "./home";
import makeMenu from "./menu";
import makeContact from "./contact";

loadPage()
makeHome()


const main = document.querySelector('main');
const homeTab = document.querySelector('#home-btn')
const menuTab = document.querySelector('#menu-btn')
const contactTab = document.querySelector('#contact-btn')

homeTab.addEventListener('click', ()=>{
    main.innerHTML = '';
    makeHome()
})

menuTab.addEventListener('click', ()=>{
    main.innerHTML = '';
    makeMenu()
})

contactTab.addEventListener('click', ()=>{
    main.innerHTML = '';
    makeContact()
})
    

