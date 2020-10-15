'use strict';
window.addEventListener("DOMContentLoaded", () => {
    
    //menu
    
    const humb = document.querySelector(".menu__humburger"),
        menuWrapper = document.querySelector(".menu__wrapper");
    humb.addEventListener('click', () => {
        if (humb.classList.contains("menu__humburger_active")) {
            humb.classList.remove("menu__humburger_active");
            closeMenu();
        }else{humb.classList.add("menu__humburger_active");
        openMenu();}
        
    });
    function openMenu() {
        menuWrapper.style.left = '0';
    }
    function closeMenu() {
        menuWrapper.style.left = '-100%';
    }
});