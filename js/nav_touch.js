
const navProduct = document.querySelector("#nav_product");
const navTitles = document.querySelectorAll(".nav_main_elem_t");
const navMenus = document.querySelectorAll(".nav_main_elem_m");
const navMenuLines = document.querySelectorAll(".nav_main_elem_m_l");

navProduct.addEventListener("click", handleNavProduct)
navMenus[0].addEventListener("click", handleBlue);
navMenus[0].addEventListener("click", handleNewInLine);
navMenus[1].addEventListener("click", handleBlue);
navMenus[1].addEventListener("click", handleCurtainLine);

function handleNavProduct(){
    const gCircle = document.querySelector("#nav_product .g_circle");
    gCircle.classList.toggle('inv_g_circle');
    navMenus[0].classList.toggle("vis_nav_product_new_in");
    navMenus[1].classList.toggle("vis_nav_product_curtain");
}

for(var i=0; i<navTitles.length; i++){
    navTitles[i].addEventListener("click", handleBlue);
}

function handleBlue(e){
    e.currentTarget.classList.toggle('blue_text');
}

function handleNewInLine(){
    navMenuLines[0].classList.toggle("nav_new_in_line_active")
}

function handleCurtainLine(){
    navMenuLines[1].classList.toggle("nav_curtain_line_active")
}
