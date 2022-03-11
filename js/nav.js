const transparentLayer = document.querySelector("#transparent_layer");
const nav = document.querySelector('nav');
const switchHamb = document.querySelector("#fixed_hamburger");

let navSwitch = true;


switchHamb.addEventListener("click", handleSwitch);

const topBread = document.querySelector("#top_bread");
const patty = document.querySelector("#patty");
const bottomBread = document.querySelector("#bottom_bread");

const hambTransitionTime = parseFloat(window.getComputedStyle(topBread,null).transitionDuration.split(" ")[0].slice(0, -2))*1000;

transparentLayer.addEventListener("click", inactivateNav);

function handleSwitch(){
    if (navSwitch){
        activateNav();
    }else{
        inactivateNav();
    }
}

function activateNav(){
    nav.classList.remove("inactive_nav");
    makeOneLine();
    setTimeout(makeX, hambTransitionTime);
    transparentLayer.classList.remove("inactive_transparent_layer");
    navSwitch=false;
}

function inactivateNav() {
    nav.classList.add("inactive_nav");
    makeOneLine();
    setTimeout(makeThreeLine, hambTransitionTime);
    transparentLayer.classList.add("inactive_transparent_layer");
    navSwitch=true;
}


function makeOneLine(){
    topBread.classList.remove('X_1')
    patty.classList.remove('X_2')
    bottomBread.classList.remove('X_2')
    topBread.classList.add('one_line')
    patty.classList.add('one_line')
    bottomBread.classList.add('one_line')
}

function makeThreeLine(){
    topBread.classList.remove('one_line')
    patty.classList.remove('one_line')
    bottomBread.classList.remove('one_line')
    topBread.classList.remove('X_1')
    patty.classList.remove('X_2')
    bottomBread.classList.remove('X_2')
}

function makeX(){
    topBread.classList.remove('one_line')
    patty.classList.remove('one_line')
    bottomBread.classList.remove('one_line')
    topBread.classList.add('X_1')
    patty.classList.add('X_2')
    bottomBread.classList.add('X_2')
}
