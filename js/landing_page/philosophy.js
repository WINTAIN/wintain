export default initPhilo;

const philoArea = document.querySelector('#area4');
const philos = document.querySelectorAll(".philo");
const philoShowTime = 300;

let philoShowing = false

function checkWatchPhilo(){
    if (!philoShowing && philoArea.getBoundingClientRect().top < 100){
        philoShowing=true
        showPhilos();
    }
}

function showPhilos(){
    for(var i=0;i<philos.length;i++){
        setTimeout( makeVisiblePhilo(philos[i]),i*philoShowTime);
    }
}

function makeVisiblePhilo(philo){
    return function (){
        philo.classList.add("vis_philo");
    }
}

function initPhilo(){
    window.addEventListener('scroll', checkWatchPhilo)   
}