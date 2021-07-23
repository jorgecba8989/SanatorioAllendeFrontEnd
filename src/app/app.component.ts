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
    this.board = new Board(5, 5);
  }

  startTimer() {
    this.interval = setInterval(() => {
        this.time++;
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
