
export default initVscroll;

function Vscroll(vscroll){
    this.container = vscroll.querySelector(".v_scroll_container");
    this.containerHeight = this.container.getBoundingClientRect().bottom - this.container.getBoundingClientRect().top;
    this.scrollHeight = this.container.scrollHeight;
    this.colorScrollBar = vscroll.querySelector(".v_scroll_color_bar");
    this.basicScrollBar = vscroll.querySelector(".v_scroll_basic_bar");
    this.basicScrollBarHeight = this.basicScrollBar.clientHeight;
    this.colorScrollBarHeight = this.containerHeight * this.basicScrollBarHeight / this.scrollHeight;
    initVscrollBar(this);
    this.container.addEventListener("scroll", moveVscrollBar(this));
}

function setYMove(Vscroll){
    let yMove = Vscroll.basicScrollBarHeight * Vscroll.container.scrollTop/Vscroll.scrollHeight;
    if (yMove>Vscroll.basicScrollBarHeight-Vscroll.colorScrollBarHeight){
        yMove = Vscroll.basicScrollBarHeight-Vscroll.colorScrollBarHeight;
    }else if (yMove<0){
        yMove=0;
    }
    Vscroll.colorScrollBar.setAttribute("style", `height:${Vscroll.colorScrollBarHeight}px;transform:translateY(${yMove}px);`)
}

function moveVscrollBar(Vscroll){
    return function (){
        setTimeout(setYMove(Vscroll),10);
    }
}

function initVscrollBar(Vscroll){
    Vscroll.colorScrollBar.setAttribute("style", `height:${Vscroll.colorScrollBarHeight}px;`)
}


function initVscroll(){
    const allVscrollElements = document.querySelectorAll(".v_scroll");
    let allVscrolls = [];
    for (var i=0; i<allVscrollElements.length; i++){
        allVscrolls.push(new Vscroll(allVscrollElements[i]));
    }
}