import { Component } from '@angular/core';
import { Board } from './game/board';
import { Cell } from './game/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Buscaminas';
  time: number = 0;
  interval: any;
  board!: Board;


  constructor( ) {
    this.reset()
  }

  startTimer() {
    this.interval = setInterval(() => {
        this.time++;
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  checkCell(cell: Cell) {
    if(this.time == 0){
      this.startTimer();
    }
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      this.pauseTimer();
      alert('Perdiste :(');
    } else if (result === 'win') {
      this.pauseTimer();
      alert('Ganaste :)');
    }
  }

  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reset() {
    this.board = new Board(5,10);
    this.pauseTimer();
    this.time = 0
  }

}
