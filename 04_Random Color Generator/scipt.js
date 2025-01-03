/* Notes: 
  (1) The value 16777215 in decimal corresponds to 0xFFFFFF in hexadecimal, which is the highest possible  color code for a web color.
  (2) toString(16) => inside 16 stand for Hex
  (3) string Interpolation =>  const randomCode = `#${randomNumber.toString(16)}`;
  (4) window.onload = getColor()   // this will also work when page load or refresh 
*/

let holeBody = document.querySelector("body");
let heading2 = document.getElementById("color-code");
let btn = document.getElementById("btn");

const getColor = () => {
  let randomNumber = Math.round(Math.random() * 16777215);
  let randomCode = "#" + randomNumber.toString(16)
  holeBody.style.backgroundColor = randomCode;
  heading2.textContent = randomCode; // Display color code
  navigator.clipboard.writeText(randomCode); // Copy to clipboard
};

// Add click event listener
btn.addEventListener("click", getColor);

// Correctly assign the getColor function to window.onload
window.onload = getColor;
