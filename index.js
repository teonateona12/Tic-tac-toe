"strict mode";

//select elements
const main = document.getElementById("main");
const clickO = document.getElementById("o-click");
const clickX = document.getElementById("x-click");
const buttons = document.querySelector(".buttons");
const header = document.querySelector(".header");
const soloDiv = document.querySelector(".solo-div");
const btnAll = document.querySelectorAll(".btn1");
const winnerWindow = document.querySelector(".winner");
const takeRound = document.querySelector(".take-round");
const textWin = document.querySelector(".you-won");
const xScore = document.querySelector(".x-score");
const tieScore = document.querySelector(".ties-score");
const oScore = document.querySelector(".o-score");
const btnTwo = document.querySelector(".btn-two");
const btnOne = document.querySelector(".btn-one");
const turn = document.querySelector(".turn-btn");
const blur = document.querySelector(".test");
const head = document.querySelector(".head");
const restartWindow = document.querySelector(".winner-two");
const xoBtns = document.querySelectorAll(".not-active");
const xBtn = document.getElementById("x-btn");
const oBtn = document.getElementById("o-btn");

//Functions
let currentPlayer = "x";
turn.textContent = "X TURN";
let buttonTrue = true;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let valx = [];
let valo = [];

const playGame = (button) => {
  if (currentPlayer == "x") {
    xBtnFunction(button);
    currentPlayer = "o";
  } else if (currentPlayer == "o") {
    valo.push(+button.value);
    button.disabled = true;
    turn.textContent = "X TURN";
    button.textContent = "O";
    currentPlayer = "x";
    button.classList.add("o");
  }
};
const xBtnFunction = (button) => {
  button.textContent = "X";
  button.classList.add("x");
  button.classList.remove("o");
  button.disabled = true;
  turn.textContent = "O TURN";
  valx.push(+button.value);
};

//check winner two player, X is choosen
const checkWinner = (x) => {
  winningCombinations.forEach((tru) => {
    if (tru.every((winningVal) => x.includes(winningVal))) {
      winnerWindow.style.display = "flex";
      document.body.style.backgroundColor = "#000000";
      if (currentPlayer == "o") {
        xIsWinner();
        buttonTrue = false;
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      } else if (currentPlayer == "x") {
        oIsWinner();
        buttonTrue = false;
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      }
    }
  });
};

//check winner two player, X is choosen
const checkWinnerTwo = (x) => {
  winningCombinations.forEach((tru) => {
    if (tru.every((winningVal) => x.includes(winningVal))) {
      winnerWindow.style.display = "flex";
      document.body.style.backgroundColor = "#000000";
      if (currentPlayer == "o") {
        xIsWinnerTwo();
        buttonTrue = false;
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      } else if (currentPlayer == "x") {
        oIsWinnerTwo();
        buttonTrue = false;
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      }
    }
  });
};

//check winner two player, X is choosen, play with computer
const checkWinnerComputer = (x) => {
  winningCombinations.forEach((tru) => {
    if (tru.every((winningVal) => x.includes(winningVal))) {
      winnerWindow.style.display = "flex";
      document.body.style.backgroundColor = "#000000";
      if (currentPlayer == "o") {
        xIsWinnerComputer();
        buttonTrue = false;
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      } else if (currentPlayer == "x") {
        oIsWinnerComputer();
        buttonTrue = false;
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      }
    }
  });
};

//check winner two player, X is choosen, play with computer
const checkWinnerComputerTwo = (x) => {
  winningCombinations.forEach((tru) => {
    if (tru.every((winningVal) => x.includes(winningVal))) {
      winnerWindow.style.display = "flex";
      document.body.style.backgroundColor = "#000000";
      if (currentPlayer == "o") {
        xIsWinnerTwoComputer();
        buttonTrue = false;
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      } else if (currentPlayer == "x") {
        oIsWinnerTwoComputer();
        buttonTrue = false;
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      }
    }
  });
};
let finalXScore = 0;
let finalOScore = 0;
let finalTScore = 0;

//round tied function
const roundTied = () => {
  if (
    btnAll[0].textContent !== "" &&
    btnAll[1].textContent !== "" &&
    btnAll[2].textContent !== "" &&
    btnAll[3].textContent !== "" &&
    btnAll[4].textContent !== "" &&
    btnAll[5].textContent !== "" &&
    btnAll[6].textContent !== "" &&
    btnAll[7].textContent !== "" &&
    btnAll[8].textContent !== ""
  ) {
    blurFunction();
    winnerWindow.style.display = "block";
    takeRound.textContent = "ROUND TIED";
    takeRound.style.color = "#A8BFC9";
    tieScore.textContent = finalTScore + 1;
    finalTScore = +tieScore.textContent;
    textWin.textContent = "";
  }
};

const oWin = () => {
  takeRound.style.color = "#F2B137";
  oScore.textContent = finalOScore + 1;
  finalOScore = +oScore.textContent;
};
const xWin = () => {
  takeRound.style.color = "#31c3bd";
  xScore.textContent = finalXScore + 1;
  finalXScore = +xScore.textContent;
};
//if X is winner then X start the game
const xIsWinner = () => {
  blurFunction();
  takeRound.textContent = `X TAKES THE ROUND`;
  textWin.textContent = "PLAYER 1 WINS!";
  xWin();
};

//if O is winner then X start the game
const oIsWinner = () => {
  blurFunction();
  takeRound.textContent = `O TAKES THE ROUND`;
  oWin();
  textWin.textContent = "PLAYER 2 WINS!";
};

//if X is winner then O start the game
const xIsWinnerTwo = () => {
  blurFunction();
  takeRound.textContent = `X TAKES THE ROUND`;
  textWin.textContent = "PLAYER 2 WINS!";
  xWin();
};

//if O is winner then O start the game
const oIsWinnerTwo = () => {
  blurFunction();
  takeRound.textContent = `O TAKES THE ROUND`;
  textWin.textContent = "PLAYER 1 WINS!";
  oWin();
};

//play with computer
//if X is winner then X start the game
const xIsWinnerComputer = () => {
  blurFunction();
  takeRound.textContent = `X TAKES THE ROUND`;
  textWin.textContent = "YOU WON!";
  xWin();
};

//if O is winner then X start the game
const oIsWinnerComputer = () => {
  blurFunction();
  takeRound.textContent = `O TAKES THE ROUND`;
  textWin.textContent = "OH NO, YOU LOST...";
  oWin();
};

//if X is winner then O start the game
const xIsWinnerTwoComputer = () => {
  blurFunction();
  takeRound.textContent = `X TAKES THE ROUND`;
  textWin.textContent = "OH NO, YOU LOST...";
  xWin();
};

//if O is winner then O start the game
const oIsWinnerTwoComputer = () => {
  blurFunction();
  takeRound.textContent = `O TAKES THE ROUND`;
  textWin.textContent = "YOU WON!";
  oWin();
};

//quit function
const quitFunction = () => {
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  nextRound();
};

//next round
const nextRound = () => {
  removeBlur();
  buttonTrue = true;
  winnerWindow.style.display = "none";
  turn.textContent = "X TURN";
  valo = [];
  valx = [];
  document.body.style.backgroundColor = "#1A2A33";
  currentPlayer = "x";
  styleNextRound();
};

//style for next round
const styleNextRound = () => {
  btnAll.forEach((button) => {
    button.textContent = "";
    button.disabled = false;
    button.style.backgroundColor = "#1F3641";
    button.addEventListener("click", () => {
      if (button.textContent == "X") {
        button.style.color = "#31c3bd";
      } else {
        button.style.color = "#f2b137";
      }
    });
  });
};

//restart button
const restart = () => {
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  blurFunction();
  restartWindow.style.display = "block";
  document.body.style.backgroundColor = "#000000";
  btnAll.forEach((button) => {
    button.style.backgroundColor = "#1A2A33";
  });
};

//blur function
const blurFunction = () => {
  head.classList.add("blur");
  blur.style.display = "block";
};

//delete blur function
const removeBlur = () => {
  head.classList.remove("blur");
  blur.style.display = "none";
};

// yes restart
const yesRestart = () => {
  removeBlur();
  soloDiv.classList.remove("blur");
  nextRound();
  restartWindow.style.display = "none";
  btnAll.forEach((button) => {
    button.style.backgroundColor = "#1F3641";
  });
};

//no restart
const noRestart = () => {
  removeBlur();
  soloDiv.classList.remove("blur");
  restartWindow.style.display = "none";
  document.body.style.backgroundColor = "#1a2a33";
  btnAll.forEach((button) => {
    button.style.backgroundColor = "#1F3641";
  });
};

//active and not active function
const active = (active, notActive) => {
  notActive.classList.remove("active");
  notActive.classList.add("not-active");
  active.classList.remove("not-active");
  active.classList.add("active");
};

//hide main element
const hideElement = () => {
  main.style.display = "none";
  buttons.style.display = "none";
  header.style.display = "none";
  soloDiv.classList.remove("solo-div");
  soloDiv.style.display = "block";
  btnAll.forEach((button) => {
    button.style.backgroundColor = "#1F3641";
    button.textContent = "";
    tieScore.textContent = 0;
    oScore.textContent = 0;
    xScore.textContent = 0;
  });
};

//button two click, two player
const functionForXTwoPlayer = () => {
  btnTwo.addEventListener("click", () => {
    hideElement();
    btnAll.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        playGame(button);
        checkWinner(valo);
        checkWinner(valx);
        roundTied();
      });
    });
  });
};

//button two click, two player
const functionForXTwoPlayerOne = () => {
  btnTwo.addEventListener("click", () => {
    hideElement();
    btnAll.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        playGame(button);
        checkWinnerTwo(valo);
        checkWinnerTwo(valx);
        roundTied();
      });
    });
  });
};

xoBtns.forEach((xoBtn) => {
  xoBtn.addEventListener("click", () => {
    if (xoBtn.value == "1") {
      active(xBtn, oBtn);
      functionForXTwoPlayer();
      functionForXPlayer();
    } else if (xoBtn.value == "2") {
      functionForXTwoPlayerOne();
      functionForXPlayerOne();
      active(oBtn, xBtn);
    }
  });
});

//when x is playing with computer, X is choosen
const functionForXPlayer = () => {
  btnOne.addEventListener("click", () => {
    hideElement();
    btnAll.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        if (buttonTrue) {
          styleForX(button);
          checkWinnerComputer(valx);
          currentPlayer = "x";
          console.log(currentPlayer);
        }
        if (buttonTrue) {
          sTyleForO(arr[0], button);
          checkWinnerComputer(valo);
          currentPlayer = "o";
          console.log(currentPlayer);
        }
        roundTied();
      });
    });
  });
};

//when x is playing with computer, O is choosen
const functionForXPlayerOne = () => {
  btnOne.addEventListener("click", () => {
    hideElement();
    btnAll.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        if (buttonTrue) {
          styleForX(button);
          checkWinnerComputerTwo(valx);
          currentPlayer = "x";
        }
        if (buttonTrue) {
          sTyleForO(arr[0], button);
          checkWinnerComputerTwo(valo);
          currentPlayer = "o";
        }
        roundTied();
      });
    });
  });
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const styleForX = (button) => {
  const index = arr.indexOf(+button.value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  xBtnFunction(button);
};

const sTyleForO = (value, button) => {
  valo.push(+btnAll[value].value);
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  turn.textContent = "X TURN";
  btnAll[value].classList.remove("x");
  button.disabled = true;
  btnAll[value].textContent = "O";
  btnAll[value].classList.add("o");
};
