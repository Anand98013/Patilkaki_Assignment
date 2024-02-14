// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Countdown Timer
  const timerDisplay = document.getElementById("timer");
  let timeLeft = 600;

  function countdown() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    timerDisplay.textContent = `${minutes}:${seconds}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Time's up!";
    }
  }

  countdown();
  const timer = setInterval(countdown, 1000);

  // Slide-Up Form
  setTimeout(function () {
    document.querySelector(".slide-up-form").style.display = "block";
  }, 15000); // 1 minute delay

  // Form Submission
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Display alert message
      alert("Form submitted successfully!");
    });
});

let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".slider img");
let count = 0;

function nextSlide() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  slider.style.transform = `translateX(${-count * 100}%)`;
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
