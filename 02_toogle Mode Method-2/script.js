let holeBody = document.querySelector("body");
const modebtn = document.querySelector("button");
let currentMode = "light";

modebtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    holeBody.classList.add("dark");
    holeBody.classList.remove("light");
  } else {
    currentMode = "light";
    holeBody.classList.add("light");
    holeBody.classList.remove("dark");
  }
  console.log("currentMode =", currentMode);
});
