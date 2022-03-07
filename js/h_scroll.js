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

function moveHscrollBar(Hscroll){
    return function (){
        const xMove = Hscroll.basicScrollBarWidth * Hscroll.container.scrollLeft/Hscroll.scrollWidth;
        Hscroll.colorScrollBar.setAttribute("style", `width:${Hscroll.colorScrollBarWidth}px;transform:translateX(${xMove}px);`)
    }
}

function initHscrollBar(Hscroll){
    Hscroll.colorScrollBar.setAttribute("style", `width:${Hscroll.colorScrollBarWidth}px;`)
}

const ArrivalHscrollNode = document.querySelector('#arrival_h_scroll');
const ArrivalHscroll = new Hscroll(ArrivalHscrollNode);

const SubscribeHscrollNode = document.querySelector('#subscribe_h_scroll');
const SubscribeHscroll = new Hscroll(SubscribeHscrollNode);

const MagazineHscrollNode = document.querySelector("#magazine_h_scroll");
const MagazineHscroll = new Hscroll(MagazineHscrollNode);

const ReviewHscrollNode = document.querySelector("#review_h_scroll");
const ReviewHscroll = new Hscroll(ReviewHscrollNode);