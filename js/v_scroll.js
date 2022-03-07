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

function moveVscrollBar(Vscroll){
    return function (){
        const yMove = Vscroll.basicScrollBarHeight * Vscroll.container.scrollTop/Vscroll.scrollHeight;
        Vscroll.colorScrollBar.setAttribute("style", `height:${Vscroll.colorScrollBarHeight}px;transform:translateY(${yMove}px);`)
    }
}

function initVscrollBar(Vscroll){
    Vscroll.colorScrollBar.setAttribute("style", `height:${Vscroll.colorScrollBarHeight}px;`)
}

const VScrollMonth3Node = document.querySelector("#v_scroll_month3");
const VScrollMonth3 = new Vscroll(VScrollMonth3Node);

const VScrollMonth6Node = document.querySelector("#v_scroll_month6");
const VScrollMonth6 = new Vscroll(VScrollMonth6Node);