export default initFilter;

function changeOnOffSrc(src) {
  if (src.indexOf("_on") != -1) {
    return src.replace("_on", "_off");
  } else {
    return src.replace("_off", "_on");
  }
}

const sorts = [];
const colors = [];
const seasons = [];
const fabrics = [];

const allCheckElems = document.querySelectorAll(".filter_elem");
const allSortChecks = document.querySelectorAll(".sort_check");
const allFabricChecks = document.querySelectorAll(".fabric_check");
const allSeasonChecks = document.querySelectorAll(".season_check");
const allColorElems = document.querySelectorAll(".filter_color");

const checkingAllSeason = document.querySelector("#all_season");
let checkedAllSeason = false;

function checkImgChange(e) {
  const checkImg = e.currentTarget.querySelector("img");
  checkImg.src = changeOnOffSrc(checkImg.src);
}

function handleColorCheck(e) {
  const checkImg = e.currentTarget.querySelector("img");
  checkImg.src = changeOnOffSrc(checkImg.src);

  const color = e.currentTarget.dataset.color;
  const index = colors.findIndex(function (elem) {
    return elem == color;
  });
  if (index == -1) {
    colors.push(color);
  } else {
    colors.splice(index, 1);
  }
  console.log(colors);
}

function handleFabricCheck(e) {
  const fabric = e.currentTarget.dataset.fabric;
  const index = fabrics.findIndex(function (elem) {
    return elem == fabric;
  });
  if (index == -1) {
    fabrics.push(fabric);
  } else {
    fabrics.splice(index, 1);
  }
  console.log(fabrics);
}

function handleSeasonCheck(e) {
  const season = e.currentTarget.dataset.season;
  const index = seasons.findIndex(function (elem) {
    return elem == season;
  });
  if (index == -1) {
    seasons.push(season);
  } else {
    seasons.splice(index, 1);
  }
  console.log(seasons);
}

function handleSortCheck(e) {
  const sort = e.currentTarget.dataset.sort;
  const index = sorts.findIndex(function (elem) {
    return elem == sort;
  });
  if (index == -1) {
    sorts.push(sort);
  } else {
    sorts.splice(index, 1);
  }
  console.log(sorts);
}

function handleCheckAllSeason(e) {
  if (checkedAllSeason) {
    // Now Uncheck All!
    uncheckAllSeason();
  } else {
    checkAllSeason();
  }
  console.log(seasons);
  checkedAllSeason = !checkedAllSeason;
}

function uncheckAllSeason() {
  for (var i = 0; i < allSeasonChecks.length; i++) {
    const season = allSeasonChecks[i].dataset.season;
    const checkImg = allSeasonChecks[i].querySelector("img");
    const index = seasons.findIndex(function (elem) {
      return elem == season;
    });
    if (index != -1) {
      checkImg.src = changeOnOffSrc(checkImg.src);
    }
  }
  seasons.splice(0);
}

function checkAllSeason() {
  for (var i = 0; i < allSeasonChecks.length; i++) {
    const season = allSeasonChecks[i].dataset.season;
    const checkImg = allSeasonChecks[i].querySelector("img");
    const index = seasons.findIndex(function (elem) {
      return elem == season;
    });
    if (index == -1) {
      checkImg.src = changeOnOffSrc(checkImg.src);
      seasons.push(season);
    }
  }
}

function initFilter() {
  for (var i = 0; i < allCheckElems.length; i++) {
    allCheckElems[i].addEventListener("click", checkImgChange);
  }
  for (var i = 0; i < allColorElems.length; i++) {
    allColorElems[i].addEventListener("click", handleColorCheck);
  }
  for (var i = 0; i < allSortChecks.length; i++) {
    allSortChecks[i].addEventListener("click", handleSortCheck);
  }
  for (var i = 0; i < allFabricChecks.length; i++) {
    allFabricChecks[i].addEventListener("click", handleFabricCheck);
  }
  for (var i = 0; i < allSeasonChecks.length; i++) {
    allSeasonChecks[i].addEventListener("click", handleSeasonCheck);
  }
  checkingAllSeason.addEventListener("click", handleCheckAllSeason);
}
