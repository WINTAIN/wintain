const stamp = document.querySelector("#stamp");
const blockImg = document.querySelector("#first_img");

const stampWidth = stamp.getBoundingClientRect().right - stamp.getBoundingClientRect().left;
const stampHeight = stamp.getBoundingClientRect().bottom - stamp.getBoundingClientRect().top;

const leftMax = blockImg.getBoundingClientRect().right - blockImg.getBoundingClientRect().left - stampWidth;
const topMax = blockImg.getBoundingClientRect().bottom - blockImg.getBoundingClientRect().top - stampHeight;

const stampMovingTime = window.getComputedStyle(stamp,null).transitionDuration[0];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  }

let stampLeft = leftMax;  
let stampTop = getRandomInt(0,topMax);

function findCurrentEdge(){
    if (stampLeft==0){
        return "left"
    }else if (stampLeft==leftMax){
        return "right";
    }else if (stampTop==topMax){
        return "bottom";
    }else if (stampTop==0){
        return "top";
    }
}

const direction = ["left", "right", "top", "bottom"];

function setCoord(){
    const currentEdge = findCurrentEdge();
    const randomEdge = getRandomEdge(currentEdge)
    setEdge(randomEdge);
    setTransition();
}

function getRandomEdge(except){
    const randomDirectionArray = direction.filter( x => x != except);
    return randomDirectionArray[getRandomInt(0,2)];
}

function setEdge(edge){
    switch(edge){
        case "left":
            stampLeft = 0;
            stampTop = getRandomInt(0,topMax);
            break;
        case "right":
            stampLeft = leftMax;
            stampTop = getRandomInt(0,topMax);
            break;
        case "top":
            stampLeft = getRandomInt(0,leftMax);
            stampTop = 0;
            break;
        case "bottom":
            stampLeft = getRandomInt(0,leftMax);
            stampTop = topMax;
            break;
    }
}

function setTransition(){

    stamp.setAttribute('style', `left:${stampLeft}px; top:${stampTop}px`)
}

setCoord();
setInterval(setCoord,stampMovingTime*1000);