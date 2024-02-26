let paragraph;
let input;

(function () {
  paragraph = document.getElementById("text");
  input = document.querySelector("input");
  const button = document.getElementById("start");
  button.addEventListener("click", getInput);
})();

function getInput() {
  let step = input.value;
  step = +step;

  if (step <= 0 || isNaN(step)) {
    paragraph.textContent = "Не правильно введений час";
  } else if (step > 6000) {
    paragraph.textContent = "Введіть меншу кількість хвилин";
  } else {
    time(step);
  }
}

function time(step) {
  let hour;
  let minute;

  hour = Math.floor(step / 60);
  minute = Math.round((step / 60 - hour) * 60);
  paragraph.textContent = `${hour} годин та ${minute} хвилин`;
}
