const transparentLayer = document.querySelector("#transparent_layer");
const hamb_menu = document.querySelector("#hamburger");
const nav = document.querySelector('nav');
const X_1 = document.querySelector("#d45");
const X_2 = document.querySelector("#d-45");


hamb_menu.addEventListener("click", turnOnNav);
X_1.addEventListener("click", turnOffNav);
X_2.addEventListener("click", turnOffNav);

function turnOnNav(){
    transparentLayer.classList.remove("inactive_transparent_layer");
    nav.classList.remove("inactive_nav");
    transparentLayer.setAttribute("style", "");
}

function turnOffNav(){
    transparentLayer.classList.add("inactive_transparent_layer");
    setTimeout(hideTransparentLayer,1000);
    nav.classList.add("inactive_nav");
}

function hideTransparentLayer(){
    transparentLayer.setAttribute("style", "z-index:-1;");
}

