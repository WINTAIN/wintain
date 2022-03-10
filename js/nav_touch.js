
const navProduct = document.querySelector("#nav_product");
const navMainHidingElem = document.querySelector(".nav_main_hiding_elem");
const navTitles = document.querySelectorAll(".nav_main_elem_t");
const navMenus = document.querySelectorAll(".nav_main_elem_m");

let isNavProductOpen = false;

function handleNavProduct(){
    const gCircle = document.querySelector("#nav_product .g_circle");
    gCircle.classList.toggle('inv_g_circle');
    navMenus[0].classList.toggle("vis_nav_product_new_in");
    navMenus[1].classList.toggle("vis_nav_product_curtain");
}

for(var i=1; i<navTitles.length; i++){
    navTitles[i].addEventListener("click", handleNormalBlue);
}

for(var i=0; i<navMenus.length; i++){
    navMenus[i].addEventListener("click", handleMenuLine);
}

navProduct.addEventListener("click", handleNavProduct);

function handleNormalBlue(e){
    closeNavProduct();
    for(var i=1; i<navTitles.length; i++){
        navTitles[i].querySelector(".b_circle").classList.add('b_circle_inactive');
    }

    e.currentTarget.querySelector(".b_circle").classList.toggle('b_circle_inactive');
}

function closeNavTitles(){
    for(var i=1; i<navTitles.length; i++){
        navTitles[i].querySelector(".b_circle").classList.remove('b_circle_inactive');
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


function handleMenuLine(e){
    console.log("hello");
    e.currentTarget.querySelector(".nav_main_elem_m_l").classList.toggle("nav_main_elem_m_l_active");

}
