const holeBody = document.querySelector("body");
const btn = document.querySelector("button");
let currentMode = 'light'

btn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    holeBody.style.backgroundColor = "black";
    holeBody.style.color = "white";
  } else {
    currentMode = "light";
    holeBody.style.backgroundColor = "white";
    holeBody.style.color = "black";
  }
  console.log("currentMode =", currentMode);
});
