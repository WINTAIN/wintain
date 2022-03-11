const logo = document.querySelector('#logo');
const home = document.querySelector('#home');
const homeNumber = document.querySelector('#home_number');
const mainContainer = document.querySelector("#main-container");
const logoRatio = 242/47;
let logoWidth = 242;

function getLogoHeight(){
    return logoWidth/logoRatio;
}

function setLogoSize(){
    if (mainContainer.scrollTop >= 0 && mainContainer.scrollTop <= 19){
        logoWidth = (47-mainContainer.scrollTop) * logoRatio;
        home.className="inv_home";
        homeNumber.className="inv_home";
    }else if (mainContainer.scrollTop < 0){
        logoWidth=242;
    }
    else{
        logoWidth=144;
        home.className="vis_home";
        homeNumber.className="vis_home";
    }
    logo.setAttribute("style", `width:${logoWidth}px; height:${getLogoHeight()}px;`)
}

mainContainer.addEventListener("scroll", scrollHeaderEventHandler )

function scrollHeaderEventHandler(){
    console.log()
    setLogoSize();
}





