const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", (evt) => {
    // console.log(evt);
    // console.log(evt.target);
    if (evt.target.id === "orange") {
      body.style.backgroundColor = evt.target.id;
    }

    if (evt.target.id === "white") {
      body.style.backgroundColor = evt.target.id;
    }

    if (evt.target.id === "blue") {
      body.style.backgroundColor = evt.target.id;
    }

    if (evt.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }

    if (evt.target.id === "lightgreen") {
      body.style.backgroundColor = evt.target.id;
    }

    if (evt.target.id === "salmon") {
      body.style.backgroundColor = evt.target.id;
    }
  });
});
