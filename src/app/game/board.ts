import { Cell } from './cell';

const PEERS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

export class Board {
    cells: Cell[][] = [];

    remainingCells = 0;
    mineCount = 0;

    constructor(size: number, mines: number) {
        for (let y = 0; y < size; y++) {
            this.cells[y] = [];
            for (let x = 0; x < size; x++) {
                this.cells[y][x] = new Cell(y, x);
            }
        }

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
              let adjacentMines = 0;
              for (const peer of PEERS) {
                if ( this.cells[y + peer[0]] && this.cells[y + peer[0]][x + peer[1]] && this.cells[y + peer[0]][x + peer[1]].mine) {
                  adjacentMines++;
                }
              }
              this.cells[y][x].proximityMines = adjacentMines;
              if (this.cells[y][x].mine) { this.mineCount++;}
            }
          }
          this.remainingCells = size * size - this.mineCount;
        }
      
        getRandomCell(): Cell {
          const y = Math.floor(Math.random() * this.cells.length);
          const x = Math.floor(Math.random() * this.cells[y].length);
          return this.cells[y][x];
        }
}  