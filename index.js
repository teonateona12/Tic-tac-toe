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
    button.textContent = "X";
    button.classList.add("x");
    currentPlayer = "o";
    turn.textContent = "O TURN";
    button.classList.remove("o");
    valx.push(+button.value);
    button.disabled = true;
  } else if (currentPlayer == "o") {
    button.disabled = true;
    turn.textContent = "X TURN";
    button.textContent = "O";
    currentPlayer = "x";
    valo.push(+button.value);
    button.classList.add("o");
  }
};

//checkin winner
const checkWinner = (x) => {
  winningCombinations.forEach((tru) => {
    // console.log(valx, "X");
    // console.log(valo, "O");
    // console.log(tru, "combinations");
    if (tru.every((winningVal) => x.includes(winningVal))) {
      winnerWindow.style.display = "flex";
      document.body.style.backgroundColor = "#000000";
      if (currentPlayer == "o") {
        xIsWinner();
        // arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        // console.log("X win");
      } else if (currentPlayer == "x") {
        oIsWinner();
        // console.log("O win");
        // arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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

//if X is winner
const xIsWinner = () => {
  blurFunction();
  takeRound.textContent = `X TAKES THE ROUND`;
  takeRound.style.color = "#31c3bd";
  textWin.textContent = "PLAYER 2 WINS!";
  xScore.textContent = finalXScore + 1;
  finalXScore = +xScore.textContent;
};

//if O is winner
const oIsWinner = () => {
  blurFunction();
  takeRound.textContent = `O TAKES THE ROUND`;
  takeRound.style.color = "#F2B137";
  textWin.textContent = "PLAYER 1 WINS!";
  oScore.textContent = finalOScore + 1;
  finalOScore = +oScore.textContent;
};

//quit function
const quitFunction = () => {
  soloDiv.style.display = "none";
  main.style.display = "flex";
  buttons.style.display = "block";
  header.style.display = "flex";
  finalOScore.textContent = 0;
  finalXScore.textContent = 0;
  finalOScore = 0;
  finalXScore = 0;
  nextRound();
};

//next round
const nextRound = () => {
  removeBlur();

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

// play game with computer
xoBtns.forEach((xoBtn) => {
  xoBtn.addEventListener("click", () => {
    if (xoBtn.value == "1") {
      active(xBtn, oBtn);
      functionForXTwoPlayer();
      functionForXPlayer();
    } else if (xoBtn.value == "2") {
      functionForXTwoPlayer();
      active(oBtn, xBtn);
    }
  });
});

//when x is playing with computer
const functionForXPlayer = () => {
  btnOne.addEventListener("click", () => {
    hideElement();
    btnAll.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Not working yet")
        // play(button);
        // checkWinner(valo);
        // checkWinner(valx);
        // roundTied();
      });
    });
  });
};

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// const play = (button) => {
//   // let randomNumber = Math.floor(Math.random() * 8);
//   styleForX(button);
//   sTyleForO(arr[0], button);
// };

// const styleForX = (button) => {
//   const index = arr.indexOf(+button.value);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
//   button.classList.add("x");
//   button.textContent = "X";
//   turn.textContent = "O TURN";
//   valx.push(+button.value);
//   button.disabled = true;
//   currentPlayer == "x";
// };

// const sTyleForO = (value, button) => {
//   valo.push(+btnAll[value].value);
//   const index = arr.indexOf(value);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
//   currentPlayer == "o";
//   button.disabled = true;
//   setTimeout(() => {
//     btnAll[value].textContent = "O";
//     btnAll[value].classList.add("o");
   
//   }, 300);
// };
