import Grid from "./Grid.js";
import Tile from "./Tile.js";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
setupInput();

const setupInput = () => {
  window.addEventListener("keydown", handleInput, { once: true });
};

const handleInput = (e) => {
  switch (e.key) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      setupInput();
      return;
  }
  setupInput();
};

const moveUp = () => {
  slideTiles(grid.cellsByColumn);
};
