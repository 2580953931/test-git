const tasks = [
  "Create a feature branch.",
  "Make a focused commit.",
  "Push and open a pull request.",
  "Review, update, and merge."
];

let currentTask = 0;

const statusText = document.querySelector("#status");
const advanceButton = document.querySelector("#advance");

advanceButton.addEventListener("click", () => {
  currentTask = (currentTask + 1) % tasks.length;
  statusText.textContent = tasks[currentTask];
});

