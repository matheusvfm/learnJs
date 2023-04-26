// variáveis
var player = "X";
var gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// elementos da tabela, definido como var para poder usar no escopo global do código
var cell00 = document.getElementById("cell00");
var cell01 = document.getElementById("cell01");
var cell02 = document.getElementById("cell02");
var cell10 = document.getElementById("cell10");
var cell11 = document.getElementById("cell11");
var cell12 = document.getElementById("cell12");
var cell20 = document.getElementById("cell20");
var cell21 = document.getElementById("cell21");
var cell22 = document.getElementById("cell22");

// funções
function updateBoard(row, col) {
  gameBoard[row][col] = player;
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
} //acho que tem algo errado aqui

// verificar como renderizar
function renderBoard() {
  cell00 = gameBoard[0][0];
  cell01 = gameBoard[0][1];
  cell02 = gameBoard[0][2];
  cell10 = gameBoard[1][0];
  cell11 = gameBoard[1][1];
  cell12 = gameBoard[1][2];
  cell20 = gameBoard[2][0];
  cell21 = gameBoard[2][1];
  cell22 = gameBoard[2][2];
}

function resetBoard() {
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  player = "X";
  renderBoard();
}

//verificção geral para não precisar verificar símbolo a símbolo. Utiliza o === para validar type também.
//Será que preciso de um if else no geral da função? if ... true, if ... return false.
function checkWin() {
  // verificar linhas
  for (var row = 0; row < 3; row++) {
    if (
      gameBoard[row][0] === gameBoard[row][1] &&
      gameBoard[row][1] === gameBoard[row][2] &&
      gameBoard[row][0] !== ""
    ) {
      return true;
    }
  }
  // verificar colunas
  for (var col = 0; col < 3; col++) {
    if (
      gameBoard[0][col] === gameBoard[1][col] &&
      gameBoard[1][col] === gameBoard[2][col] &&
      gameBoard[0][col] !== ""
    ) {
      return true;
    }
  }
  // verificar diagonais
  if (
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2] &&
    gameBoard[0][0] !== ""
  ) {
    return true;
  }
  if (
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0] &&
    gameBoard[0][2] !== ""
  ) {
    return true;
  }
  return false;
}

function handleClick(event) {
  var cell = event.target; //não estou familiarizado com essa propriedade
  if (gameBoard[row][col] === "" && !checkWin()) {
    updateBoard(row, col);
    renderBoard();
    if (checkWin()) {
      alert("O jogador " + player + " venceu!");
    }
  }
}

// eventos
cell00.addEventListener("click", handleClick);
cell01.addEventListener("click", handleClick);
cell02.addEventListener("click", handleClick);
cell10.addEventListener("click", handleClick);
cell11.addEventListener("click", handleClick);
cell12.addEventListener("click", handleClick);
cell20.addEventListener("click", handleClick);
cell21.addEventListener("click", handleClick);
cell22.addEventListener("click", handleClick);

var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetBoard);

// renderizar o jogo inicialmente
renderBoard();
