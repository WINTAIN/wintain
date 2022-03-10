confirm("CHECK BOUNCE SCROLL");

function bounceScrollAlert(e){
    const div = e.currentTarget;
    if (div.scrollTop < 0) confirm('FUCK!'); // scroll 최상단을 뚫음
    if (div.scrollTop > div.scrollHeight - div.clientHeight) confirm('FUCK!'); // scroll 최상단을 뚫음
}

document.body.addEventListener("scroll", bounceScrollAlert);