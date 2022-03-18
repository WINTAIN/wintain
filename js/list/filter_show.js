export default initFilterShow;


const filterSwitch = document.querySelector("#filter_switch");
const filter = document.querySelector('#filter');
const filterChevron = document.querySelector("#filter_switch img");

function switchFilter(){
    filterChevron.classList.toggle("active");
    filter.classList.toggle("active");
}

function initFilterShow(){
    filterSwitch.addEventListener("click", switchFilter);
}