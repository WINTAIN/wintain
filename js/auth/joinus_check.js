export default initCheck;

const allCheckLines = document.querySelectorAll(".check_line");
const allAccept = document.querySelector("#all_accept");

let allAgree = false;

function changeOnOffSrc(src) {
  if (src.indexOf("_on") != -1) {
    return src.replace("_on", "_off");
  } else {
    return src.replace("_off", "_on");
  }
}

function handleCheckLineClick(e) {
  const checkCircle = e.currentTarget.querySelector("img");
  checkCircle.src = changeOnOffSrc(checkCircle.src);
}

function check(checkLine) {
  const checkCircle = checkLine.querySelector("img");
  if (checkCircle.src.indexOf("_off") != -1) {
    checkCircle.src = checkCircle.src.replace("_off", "_on");
  }
}

function uncheck(checkLine) {
  const checkCircle = checkLine.querySelector("img");
  if (checkCircle.src.indexOf("_on") != -1) {
    checkCircle.src = checkCircle.src.replace("_on", "_off");
  }
}

function handleAllAccept(e) {
  if (allAgree) {
    for (var i = 1; i < allCheckLines.length; i++) {
      uncheck(allCheckLines[i]);
    }
  } else {
    for (var i = 1; i < allCheckLines.length; i++) {
      check(allCheckLines[i]);
    }
  }
  allAgree = !allAgree;
}

function initCheck() {
  allAccept.addEventListener("click", handleAllAccept);
  for (var i = 0; i < allCheckLines.length; i++) {
    allCheckLines[i].addEventListener("click", handleCheckLineClick);
  }
}
