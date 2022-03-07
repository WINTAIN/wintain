const logo = document.querySelector('#logo');
const hamb = document.querySelector("#hamburger");
const home = document.querySelector('#home');
const homeNumber = document.querySelector('#home_number');

const logoRatio = 242/47;
let logoWidth = 242;

function getLogoHeight(){
    return logoWidth/logoRatio;
}

function setLogoSize(){
    if (window.scrollY <= 19){
        logoWidth = (47-window.scrollY) * logoRatio;
        hamb.className="long_hamb";
        home.className="inv_home";
        homeNumber.className="inv_home";
    }else{
        logoWidth=144;
        hamb.className="short_hamb"
        home.className="vis_home";
        homeNumber.className="vis_home";
    }
    logo.setAttribute("style", `width:${logoWidth}px; height:${getLogoHeight()}px;`)
}

window.addEventListener("scroll", scrollHeaderEventHandler )

function scrollHeaderEventHandler(){
    console.log()
    setLogoSize();
}





