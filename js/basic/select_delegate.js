export default initSelectDelegate;

function SelectDelegate(select) {
  this.select = select;
  this.name = select.name;
  this.directInput = false;
  this.delegateSelectContainer = setSelectDelegate(this);
  this.activeHeight = getActiveHeight(this.delegateSelectContainer);
}

function getActiveHeight(delegateSelectContainer) {
  let height = 0;
  for (var i = 0; i < delegateSelectContainer.children.length; i++) {
    height += delegateSelectContainer.children[i].clientHeight;
  }
  return height;
}

function setSelectDelegate(SelectDelegate) {
  const delegateSelectContainer = document.createElement("div");
  delegateSelectContainer.classList = SelectDelegate.select.classList;
  const delegateSelect = document.createDocumentFragment();
  for (var i = 0; i < SelectDelegate.select.options.length; i++) {
    const option = SelectDelegate.select.options[i];
    const optionNumber = i;
    const delegateOption = document.createElement("div");
    delegateOption.classList = option.classList;
    delegateOption.innerHTML = option.innerHTML;
    if (option.disabled) {
      const span = document.createElement("span");
      span.innerHTML = option.innerHTML;
      const chevron = document.createElement("img");
      chevron.src = SelectDelegate.select.dataset.chevron;
      delegateOption.innerHTML = "";
      delegateOption.appendChild(span);
      delegateOption.appendChild(chevron);
      delegateOption.addEventListener("click", handleOptionDisabled(SelectDelegate));
    } else {
      delegateOption.addEventListener("click", handleOptionEnabled(SelectDelegate, optionNumber, option));
    }
    delegateSelect.appendChild(delegateOption);
  }
  delegateSelectContainer.appendChild(delegateSelect);
  SelectDelegate.select.style.cssText = "display:none;";
  SelectDelegate.select.parentElement.insertBefore(delegateSelectContainer, SelectDelegate.select);
  return delegateSelectContainer;
}

function handleOptionDisabled(SelectDelegate) {
  return function () {
    switchSelectDelegate(SelectDelegate);
  };
}

function handleOptionEnabled(SelectDelegate, optionNumber, option) {
  return function () {
    SelectDelegate.delegateSelectContainer.children[0].children[0].innerHTML = option.innerHTML;
    SelectDelegate.select.selectedIndex = optionNumber;
    closeSelectDelegate(SelectDelegate);
    if (option.value == "input" && !SelectDelegate.directInput) {
      SelectDelegate.directInput = true;
      appendDirectInput(SelectDelegate, option);
      disableDelegation(SelectDelegate);
    } else if (option.value != "input" && SelectDelegate.directInput) {
      SelectDelegate.directInput = false;
      enableDelegation(SelectDelegate);
      removeDirectInput(SelectDelegate);
    }
    console.log(option.value, SelectDelegate.directInput);
  };
}

function appendDirectInput(SelectDelegate, option) {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.name = SelectDelegate.name;
  input.placeholder = option.innerHTML;
  input.classList.add(option.dataset.inputclass);
  SelectDelegate.select.parentElement.appendChild(input);
}

function disableDelegation(SelectDelegate) {
  SelectDelegate.select.name = "";
}

function enableDelegation(SelectDelegate) {
  SelectDelegate.select.name = SelectDelegate.name;
}

function removeDirectInput(SelectDelegate) {
  const name = SelectDelegate.name;
  document.querySelector(`input[name="${name}"]`).remove();
}

function switchSelectDelegate(SelectDelegate) {
  if (SelectDelegate.delegateSelectContainer.classList.contains("open")) {
    closeSelectDelegate(SelectDelegate);
  } else {
    openSelectDelegate(SelectDelegate);
  }
}

function closeSelectDelegate(SelectDelegate) {
  SelectDelegate.delegateSelectContainer.classList.remove("open");
  SelectDelegate.delegateSelectContainer.style.cssText = "";
}
function openSelectDelegate(SelectDelegate) {
  SelectDelegate.delegateSelectContainer.classList.add("open");
  SelectDelegate.delegateSelectContainer.style.cssText = `max-height:${SelectDelegate.activeHeight}px;`;
}

const allSelects = document.querySelectorAll("select");
const allSelectDelegates = [];

function initSelectDelegate() {
  for (var i = 0; i < allSelects.length; i++) {
    allSelectDelegates.push(new SelectDelegate(allSelects[i]));
  }
}
