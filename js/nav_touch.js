export default initNavTouch;

const navProduct = document.querySelector("#nav_product");
const navMainHidingElem = document.querySelector(".nav_main_hiding_elem");
const navTitles = document.querySelectorAll(".nav_main_elem_t");
const navMenus = document.querySelectorAll(".nav_main_elem_m");

let isNavProductOpen = false;

function handleNormalBlue(e){
    closeNavProduct();
    closeNavTitles();
    e.currentTarget.querySelector(".b_circle").classList.toggle('b_circle_inactive');
}

function closeNavTitles(){
    for(var i=1; i<navTitles.length; i++){
        navTitles[i].querySelector(".b_circle").classList.add('b_circle_inactive');
    }
}

function openNavProduct(){
    closeNavTitles();
    navProduct.querySelector(".b_circle").classList.remove('b_circle_inactive');
    navMainHidingElem.classList.remove("inv_elem");
    isNavProductOpen = true;
}

function closeNavProduct(){
    navProduct.querySelector(".b_circle").classList.add('b_circle_inactive');
    navMainHidingElem.classList.add("inv_elem");
    isNavProductOpen = false;
}

function handleNavProduct(){
    isNavProductOpen ? closeNavProduct() : openNavProduct();
}


function touchEndMenu(e){
    e.currentTarget.querySelector(".nav_main_elem_m_line").classList.remove("nav_main_elem_m_line_active");
    const newLink = e.currentTarget.getAttribute("href");
    location.href = newLink;
}

function touchStartMenu(e){
    e.currentTarget.querySelector(".nav_main_elem_m_line").classList.add("nav_main_elem_m_line_active");
}

function initNavTouch(){
    for(var i=1; i<navTitles.length; i++){
        navTitles[i].addEventListener("click", handleNormalBlue);
    }
    for(var i=0; i<navMenus.length; i++){
        navMenus[i].addEventListener("touchstart", touchStartMenu);
        navMenus[i].addEventListener("mousedown", touchStartMenu);
        navMenus[i].addEventListener("touchend", touchEndMenu);
        navMenus[i].addEventListener("mouseup", touchEndMenu);
    }
    navProduct.addEventListener("click", handleNavProduct);
}