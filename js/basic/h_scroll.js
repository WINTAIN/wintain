export default initHscroll;

function Hscroll(hscroll){
    this.container = hscroll.querySelector(".h_scroll_container");
    this.containerWidth = this.container.getBoundingClientRect().right - this.container.getBoundingClientRect().left;
    this.scrollWidth = this.container.scrollWidth;
    this.colorScrollBar = hscroll.querySelector(".h_scroll_color_bar");
    this.basicScrollBar = hscroll.querySelector(".h_scroll_basic_bar");
    this.basicScrollBarWidth = this.basicScrollBar.clientWidth;
    this.colorScrollBarWidth = this.containerWidth * this.basicScrollBarWidth / this.scrollWidth;
    initHscrollBar(this);
    this.container.addEventListener("scroll", moveHscrollBar(this));
}


function setXMove(Hscroll){
    let xMove = Hscroll.basicScrollBarWidth * Hscroll.container.scrollLeft/Hscroll.scrollWidth;
    if (xMove > Hscroll.basicScrollBarWidth-Hscroll.colorScrollBarWidth){
        xMove = Hscroll.basicScrollBarWidth-Hscroll.colorScrollBarWidth;
    }else if (xMove < 0){
        xMove = 0;
    }
    Hscroll.colorScrollBar.setAttribute("style", `width:${Hscroll.colorScrollBarWidth}px;transform:translateX(${xMove}px);`)
}

function moveHscrollBar(Hscroll){
    return function () {//Because Of Scroll
        setTimeout(setXMove(Hscroll),10);
    };
}

function initHscrollBar(Hscroll){
    Hscroll.colorScrollBar.setAttribute("style", `width:${Hscroll.colorScrollBarWidth}px;`)
}

function initHscroll(){
    const allHscrollElements = document.querySelectorAll(".h_scroll");
    let allHscrolls = [];
    for (var i=0; i<allHscrollElements.length; i++){
        allHscrolls.push(new Hscroll(allHscrollElements[i]));
    }
}