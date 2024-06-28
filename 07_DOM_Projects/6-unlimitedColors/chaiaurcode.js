/**
 * Selects the start and stop buttons from the HTML document.
 */
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

/**
 * Generates a random hex color code.
 *
 * @returns {string} A random hex color code, e.g. "#43A047".
 */
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * Stores the interval ID for the color changing interval.
 */
let intervalId;

/**
 * Starts changing the background color of the document every 1 second.
 */
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  /**
   * Changes the background color of the document to a random color.
   */
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

/**
 * Stops changing the background color of the document.
 */
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

/**
 * Adds event listeners to the start and stop buttons.
 */
start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
