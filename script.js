const choiceButtons = document.querySelectorAll(".btn-box");
const home = document.querySelector("#home");
const board = document.querySelector("#board");

let player1 = "x";
let mode = "cpu";

const activateChoice = (icon) => {
  if (icon === "x") {
    choiceButtons[0].classList.add("active");
    choiceButtons[1].classList.remove("active");
    let player1 = "x";
  } else {
    choiceButtons[1].classList.add("active");
    choiceButtons[0].classList.remove("active");
    let player1 = "o";
  }
  console.log(player1);
};

const startGame = (modeParam) => {
  home.style.display = "none";
  board.style.display = "flex";
  document.body.style.alignItems = "flex-start";
  mode = modeParam;
  console.log(mode);
};
