let button = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let list = [];
let equal = false;
function lastIsEqual() {
  if (equal) {
    screen.textContent = "";
    equal = false;
  }
}

function isDefined() {
  let content = screen.textContent;
  let result = eval(content);
  screen.textContent = "";
  screen.appendChild(document.createTextNode(result));
}
button.forEach((e) =>
  e.addEventListener("click", (e) => {
    let node = document.createTextNode(e.target.dataset.value);
    lastIsEqual();
    // not push = in the list

    if (e.target.dataset.value === "=") {
      equal = true;
      //if the last input is operator do nothing
      if (!isNaN(list[list.length - 1]) && !isNaN(list[0])) {
        isDefined();
      } else {
        screen.textContent = "undefined";
      }
    } else if (e.target.dataset.value === "C") {
      screen.textContent = "";
      list = [];
    } else {
      list.push(e.target.dataset.value);
      screen.appendChild(node);
    }
  })
);
