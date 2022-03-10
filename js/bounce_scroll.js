function bounceScrollAlert(e){
    const div = e.currentTarget;
{ // 일반적인 스크롤 방향일 때
    if (div.scrollTop < 0) alert('FUCK!'); // scroll 최상단을 뚫음
    if (div.scrollTop > div.scrollHeight - div.clientHeight) alert('FUCK!'); // scroll 최상단을 뚫음
}

document.body.addEventListener("scroll", bounceScrollAlert);