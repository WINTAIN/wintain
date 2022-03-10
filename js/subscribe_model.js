const subscribeModels = document.querySelectorAll(".subscribe_model");

for (var i=0; i<subscribeModels.length; i++){
    subscribeModels[i].addEventListener("touchstart", activateSubscribeModel);
    subscribeModels[i].addEventListener("touchend", iactivateSubscribeModel);
}

function activateSubscribeModel(e){
    console.log('activate');
    e.currentTarget.querySelector(".subscribe_model_month_num").classList.add('subscribe_model_act');
    e.currentTarget.querySelector(".subscribe_model_button").classList.add('subscribe_model_act');
}

function iactivateSubscribeModel(e){
    console.log('inactivate');
    e.currentTarget.querySelector(".subscribe_model_month_num").classList.remove('subscribe_model_act');
    e.currentTarget.querySelector(".subscribe_model_button").classList.remove('subscribe_model_act');
}

