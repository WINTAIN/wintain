const allSubscribeTitles = document.querySelectorAll(".subscribe_title");
const allSubscribeLinks = document.querySelectorAll(".subscribe_link");

const minusSrc = "https://wintainstorage.s3.ap-northeast-2.amazonaws.com/uploads/icons/minus.svg"
const plusSrc = "https://wintainstorage.s3.ap-northeast-2.amazonaws.com/uploads/icons/plus.svg"

function handleSubscribeTitle(e){
    const subscribeContent = e.currentTarget.parentElement.querySelector(".subscribe_content");
    subscribeContent.classList.toggle("active");
    const img = e.currentTarget.querySelector("img");
    if (img.src==minusSrc){
        img.src = plusSrc;
    }else{
        img.src = minusSrc;
    }
}

function touchStartSubscribeLink(e){
    e.currentTarget.classList.add("active");
}

function touchEndSubscribeLink(e){
    e.currentTarget.classList.remove("active");
    const newLink = e.currentTarget.getAttribute("href");
    location.href = newLink;
}

for (var i=0; i<allSubscribeTitles.length; i++){
    allSubscribeTitles[i].addEventListener("click", handleSubscribeTitle);
}

for (var i=0; i<allSubscribeLinks.length; i++){
    allSubscribeLinks[i].addEventListener("mousedown", touchStartSubscribeLink);
    allSubscribeLinks[i].addEventListener("touchstart", touchStartSubscribeLink);
    allSubscribeLinks[i].addEventListener("mouseup", touchEndSubscribeLink);
    allSubscribeLinks[i].addEventListener("touchend", touchEndSubscribeLink);
}