let fixHamburgerCase=false;

function test() {
    if (!confirm("햄버거를 고정시킬까요? (확인: 네, 취소: 아니오)")) {
        alert("전체 네비게이션이 슬라이드 됩니다.");
        fixHamburgerCase = false;
    } else {
        alert("햄버거를 제외한 네이게이션이 슬라이드 됩니다. 시간관계로 햄버거메뉴가 작아지는 것과 되돌아오는 기능은 만들지 않았습니다.");

    }
}

// test();

const transparentLayer = document.querySelector("#transparent_layer");
const hamb_menu = document.querySelector("#hamburger");
const nav = document.querySelector('nav');
const X_1 = document.querySelector("#d45");
const X_2 = document.querySelector("#d-45");


const fixedHamburger = document.querySelector("#fixed_hamburger");


/******************fixHamburgerCase False****************/

if (!fixHamburgerCase){
    hamb_menu.addEventListener("click", turnOnNav1);
    X_1.addEventListener("click", turnOffNav1);
    X_2.addEventListener("click", turnOffNav1);
    transparentLayer.addEventListener("click", turnOffNav1);
}

function turnOnNav1(){
    transparentLayer.classList.remove("inactive_transparent_layer");
    nav.classList.remove("inactive_nav");
    transparentLayer.setAttribute("style", "");
}

function turnOffNav1(){
    transparentLayer.classList.add("inactive_transparent_layer");
    setTimeout(hideTransparentLayer,1000);
    nav.classList.add("inactive_nav");
}

function hideTransparentLayer(){
    transparentLayer.setAttribute("style", "z-index:-1;");
}

/******************fixHamburgerCase True****************/
if (fixHamburgerCase){
    hamb_menu.style="display:none";
    fixedHamburger.style="";
    X_1.style="display:none;"
    X_2.style="display:none;"

    hamb_menu.addEventListener("click", turnOnNav1);
    X_1.addEventListener("click", turnOffNav1);
    X_2.addEventListener("click", turnOffNav1);
    fixedHamburger.addEventListener('click', turnOnNav2);
}


const topBread = document.querySelector("#top_bread");
const patty = document.querySelector("#patty");
const bottomBread = document.querySelector("#bottom_bread");

function turnOnNav2(){
    topBread.classList.add('one_line')
    patty.classList.add('one_line')
    bottomBread.classList.add('one_line')
    setTimeout(makeX, 500);
    nav.classList.remove("inactive_nav");
    transparentLayer.setAttribute("style", "");
}



function makeX(){
    topBread.classList.add('X_1')
    patty.classList.add('X_2')
    bottomBread.classList.add('X_2')
}
