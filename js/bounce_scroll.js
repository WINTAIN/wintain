confirm("CHECK BOUNCE SCROLL");

function bounceScrollAlert(e){
    const div = e.currentTarget;
    if (div.scrollTop < 0) confirm('FUCK!'); // scroll 최상단을 뚫음
    if (div.scrollTop > div.scrollHeight - div.clientHeight) confirm('FUCK!'); // scroll 최상단을 뚫음
}

document.querySelector('main').addEventListener("scroll", bounceScrollAlert);
document.querySelector('.v_scroll_container').addEventListener("scroll", bounceScrollAlert);