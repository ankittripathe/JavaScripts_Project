// Select elements
let storeInput = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

// Variable to store the current expression
let currentDisplay = "";

buttons.forEach((eachBtn) => {
  eachBtn.addEventListener("click", (evt) => {
    // console.log(evt.target.innerHTML);
    // storing (evt.target.innerHTML) to new varibale for better understanding
    const buttonText = evt.target.innerHTML;
    if (buttonText === "AC") {
      // clear All
      currentDisplay = "";
      storeInput.value = currentDisplay;
    } else if (buttonText === "DEL") {
      // Remove the last character
      currentDisplay = currentDisplay.slice(0, -1);
      storeInput.value = currentDisplay;
    } else if (buttonText === "=") {
      try {
        // Evaluate the expression
        currentDisplay = eval(currentDisplay);
        storeInput.value = currentDisplay;
      } catch (err) {
        currentDisplay = "Error"; // Handle invalid expressions
        storeInput.value = currentDisplay;
      }
    } else {
      // Append the button's text to the expression
      currentDisplay += buttonText; // currentDisplay = currentDisplay + buttonText;
      storeInput.value = currentDisplay;
    }
    // console.log(currentDisplay);
  });
});






/* Documentation
  (1) Select the Elements by using getElemetById or querySelectorAll.
  (2) Create a varibale to Display Output => CurrentDisplay.
  (3) Apply forEach loop in the buttons 
  (4) Apply addEventListner in Each of the button => (eachBtn) you can give any name inside it like value, elements for Better underStanding I give (eachBtn)
  (5) Now we can print in console browser to see the target Element => console.log(evt.target.innerHTML)
  (6) storing (evt.target.innerHTML) to new varibale for better understanding.
  (7) Now using if(){}, else{} we can check the target Elements or output
  (8) if (buttonText === "AC") this condition occur then we have to change the currentDisplay = '' empty string.
  And finally to show the output we have to select storeInput.value = currentDisplay;
  (9) if (buttonText === "DEL") then  currentDisplay = currentDisplay.slice(0, -1); delete one Elemet
  (10) if (buttonText === "=") this => then we have to use js eval() function for showing output means evulate krega. There will be the possibility of error so we can put this in try () , catch() block 
  (11) Append the button's text to the expression for others
*/