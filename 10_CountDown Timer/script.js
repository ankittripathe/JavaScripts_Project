//! last date of Event
const endDate = new Date("4-Janc-2025 20:00:00").getTime();

//! start date
const startDate = new Date().getTime();

//! Function to update the countdown timer
function updateTimer() {
  const currentDate = new Date().getTime();
  const distancePending = endDate - currentDate;

  //! Time constants
  const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
  const oneHour = 60 * 60 * 1000; // Milliseconds in an hour
  const oneMinute = 60 * 1000; // Milliseconds in a minute
  const oneSecond = 1000; // Milliseconds in a second

  //! Calculate remaining time
  const daysRemain = Math.floor(distancePending / oneDay);
  const hrsRemain = Math.floor((distancePending % oneDay) / oneHour);
  const minsRemain = Math.floor((distancePending % oneHour) / oneMinute);
  const secRemain = Math.floor((distancePending % oneMinute) / oneSecond);

  //! Update UI
  document.getElementById("days").innerHTML = `${daysRemain}`;
  document.getElementById("hours").innerHTML = `${hrsRemain}`;
  document.getElementById("minutes").innerHTML = `${minsRemain}`;
  document.getElementById("seconds").innerHTML = `${secRemain}`;

  //! calculate Percentage
  const distanceCovered = currentDate - startDate;
  const totalDistance = endDate - startDate;
  const percentageDistance = (distanceCovered / totalDistance) * 100;
  // console.log(percentageDistance);

  //! set progress bar
  document.getElementById("progress-bar").style.width =
    percentageDistance + "%";

  //! Check if the countdown has finished
  if (distancePending <= 0) {
    clearInterval(countdownInterval); // Stop the countdown
    const countDown = document.getElementById("countdown");
    countDown.innerHTML = "<b>Event Expired</b>";
    countDown.style.fontSize = "30px";
    document.getElementById("progress-bar").style.width = "100%";
    alert("Time-Out");
  }
}

// Start the countdown
const countdownInterval = setInterval(updateTimer, 1000);
