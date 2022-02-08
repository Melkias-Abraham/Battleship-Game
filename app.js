document.addEventListener("DOMContentLoaded", () => {

  
  const userGrid = document.querySelector(".grid-user");
  const computerGrid = document.querySelector(".grid-computer");
  const displayGrid = document.querySelector(".grid-display");
  const ships = document.querySelectorAll(".ship");
  const destroyer = document.querySelector(".destroyer-container");
  const submarine = document.querySelector(".submarine-container");
  const crusier = document.querySelector(".crusier-container");
  const battleship = document.querySelector(".battleshiper-container");
  const carrier = document.querySelector(".carrier-container");

  
  const startButton = document.querySelector('#start')
  const rotateButton = document.querySelector('#rotate')
  const turnDisplay = document.querySelector('#whose-turn')
  const infoDisplay = document.querySelector('#game-info')
  
  // Creating the board
  const userSquare = [];
  const computerSquare = [];
  const width = 10

  function createBoard(grid, squares, width) {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      square.dataset.id = i
      grid.appendChild(square)
      squares.push(square)
    }
  }

  createBoard(userGrid, userSquare);
  createBoard(computerGrid, computerSquare);
});
