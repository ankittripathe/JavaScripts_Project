const showClock = document.getElementById("clock");

function currentTime() {
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  showClock.innerHTML = date.toLocaleTimeString();
}
setInterval(currentTime, 1000); // AsynSchronous JavaScripts
