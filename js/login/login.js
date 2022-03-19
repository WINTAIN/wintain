function changeOnOffSrc(src){
    if (src.indexOf('_on') != -1){
        return src.replace("_on", "_off");
    }else{
        return src.replace("_off", "_on");
    }
}

const loginStore = document.querySelector(".login_store");
const loginStoreCheck = loginStore.querySelector("img");

function handleLoginStoreCheck(){
    loginStoreCheck.src = changeOnOffSrc(loginStoreCheck.src);
}

loginStoreCheck.addEventListener("click", handleLoginStoreCheck);