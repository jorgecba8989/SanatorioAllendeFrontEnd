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
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('Perdiste :(');
    } else if (result === 'win') {
      alert('Ganaste :)');
    }
  }

  reset() {
    this.board = new Board(5,10);
  }

}
