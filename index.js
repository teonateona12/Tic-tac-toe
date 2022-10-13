"strict mode";

//select elements
const main = document.getElementById("main");
const clickO = document.getElementById("o-click");
const clickX = document.getElementById("x-click");
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");
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
const turn = document.querySelector(".turn-btn");
//const yesRestart = document.querySelector(".yes-restart");
//const noRestart = document.querySelector(".no-restart");
const restartWindow = document.querySelector(".winner-two");

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

btnAll.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button);
    checkWinner(valo);
    checkWinner(valx);
    roundTied();
  });
});

let valx = [];
let valo = [];

const playGame = (button) => {
  if (currentPlayer == "x") {
    button.textContent = "x";
    button.classList.add("x");
    currentPlayer = "o";
    turn.textContent = "O TURN";
    valx.push(+button.value);
  } else if (currentPlayer == "o") {
    turn.textContent = "X TURN";
    button.textContent = "o";
    currentPlayer = "x";
    valo.push(+button.value);
    button.classList.add("o");
  }
};

//checkin winner
const checkWinner = (x) => {
 
  winningCombinations.forEach((tru) => {
    if (tru.every((winningVal) => x.includes(winningVal))) {
      winnerWindow.style.display = "flex";
      document.body.style.backgroundColor = "#000000";
      if (currentPlayer == "o") {
        soloDiv.classList.add('blur')
        xIsWinner();
      } else {
        soloDiv.classList.add('blur')
        oIsWinner();
      }
    }
  });
  return false;
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
  takeRound.textContent = `X TAKES THE ROUND`;
  takeRound.style.color = "#31c3bd";
  textWin.textContent = "PLAYER 2 WINS!";

  xScore.textContent = finalXScore + 1;
  finalXScore = +xScore.textContent;
  btnAll.forEach((button) => {
    if (button.textContent == "x") {
      button.style.backgroundColor = "#31C3BD";
      button.style.color = "#000000";
    }
  });
};

//if O is winner
const oIsWinner = () => {
  takeRound.textContent = `O TAKES THE ROUND`;
  takeRound.style.color = "#F2B137";
  textWin.textContent = "PLAYER 1 WINS!";
  oScore.textContent = finalOScore + 1;
  finalOScore = +oScore.textContent;
  btnAll.forEach((button) => {
    if (button.textContent == "o") {
      button.style.backgroundColor = "#f2b137";
      button.style.color = "#000000";
    }
  });
};

const quitFunction = () => {
  document.body.style.backgroundColor = "#1a2a33";
  turn.textContent = "X TURN";
  soloDiv.style.display = "none";
  main.style.display = "flex";
  buttons.style.display = "block";
  header.style.display = "flex";
  winnerWindow.style.display = "none";
  finalOScore.textContent = 0;
  finalXScore.textContent = 0;
  valx = [];
  valo = [];

  btnAll.forEach((button) => {
    soloDiv.classList.remove('blur')
    button.style.backgroundColor = "#1F3641";
    button.textContent = "";
    valo = [];
    valx = [];
    button.style.backgroundColor = "#1F3641";
    document.body.style.backgroundColor = "#1A2A33";

    currentPlayer = "x";
    finalOScore = 0;
    finalXScore = 0;
    button.addEventListener("click", () => {
      if (button.textContent == "x") {
        button.style.color = "#31c3bd";
      } else {
        button.style.color = "#f2b137";
      }
    });
  });
};

const nextRound = () => {
  winnerWindow.style.display = "none";
  soloDiv.classList.remove('blur')
  turn.textContent = "X TURN";
  btnAll.forEach((button) => {
    button.style.backgroundColor = "#1F3641";
    button.textContent = "";
    valo = [];
    valx = [];
    button.style.backgroundColor = "#1F3641";
    document.body.style.backgroundColor = "#1A2A33";

    currentPlayer = "x";
    button.addEventListener("click", () => {
      if (button.textContent == "x") {
        button.style.color = "#31c3bd";
      } else {
        button.style.color = "#f2b137";
      }
    });
  });
};

//restart button
const restart = () => {
  restartWindow.style.display = "block";
  document.body.style.backgroundColor = "#000000";
  soloDiv.classList.add("blur");
  btnAll.forEach((button) => {
    button.style.backgroundColor = "#1A2A33";
  });
};

// yes restart
const yesRestart = () => {
  soloDiv.classList.remove("blur");
  nextRound();
  restartWindow.style.display = "none";
  btnAll.forEach((button) => {
    button.style.backgroundColor = "#1F3641";
  });
};

const noRestart = () => {
  soloDiv.classList.remove("blur");
  restartWindow.style.display = "none";
  document.body.style.backgroundColor = "#1a2a33";
  btnAll.forEach((button) => {
    button.style.backgroundColor = "#1F3641";
  });
};

//button two click
btnTwo.addEventListener("click", () => {
  hideElement();
});

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
