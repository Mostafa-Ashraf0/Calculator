let button = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let list = [];
let equal = false;
function startNewOperation() {
  if (equal) {
    screen.textContent = "";
    equal = false;
  }
  function isNumber() {
    if (!isNaN(list[list.length - 1]) && !isNaN(list[0])) {
      let content = screen.textContent;
      let result = eval(content);
      screen.textContent = "";
      screen.appendChild(document.createTextNode(result));
    } else {
      screen.textContent = "undefined";
    }
  }
}
button.forEach((e) =>
  e.addEventListener("click", (e) => {
    startNewOperation(equal);
    let node = document.createTextNode(e.target.dataset.value);
    // not push = in the list
    if (e.target.dataset.value !== "=") {
      list.push(e.target.dataset.value);
    }
    if (e.target.dataset.value === "=") {
      equal = true;
      //if the last input is operator do nothing
      isNumber();
    } else if (e.target.dataset.value === "C") {
      screen.textContent = "";
      list = [];
    } else {
      screen.appendChild(node);
    }
  })
);
