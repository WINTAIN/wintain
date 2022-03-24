function SlidingComponent(switchButton, switchButtonImg, component) {
  this.switchButton = switchButton;
  this.switchButtonImg = switchButtonImg;
  this.component = component;

  this.switchButton;

  setSlidingComponenet(this);
}

function setSlidingComponenet(SlidingComponent) {
  SlidingComponent.initialOpen = SlidingComponent.component.dataset.initialOpen;
  const switchButton = SlidingComponent.switchButton;
  const switchButtonImg = SlidingComponent.switchButtonImg;
  switchButton.addEventListener("click", function () {
    SlidingComponent.component.classList.toggle("active");
    if (SlidingComponent.component.contains("active")) {
      switchButtonImg.src = switchButton.dataset.activeImgSrc;
    } else {
      switchButtonImg.src = switchButton.dataset.inactiveImgSrc;
    }
  });
}

const allSlidingComponents = document.querySelectorAll(".sliding_component");
