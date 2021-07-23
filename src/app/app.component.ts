import { Component, ViewChild } from '@angular/core';
import { Board } from './game/board';
import { Cell } from './game/cell';
import { ClockComponent } from './clock/clock.component';
import { MensajesService } from './services/mensajes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Buscaminas';
  board!: Board;
  @ViewChild(ClockComponent) c: ClockComponent | undefined;


  constructor( private msj: MensajesService ) {
    this.reset()
  }

  

  checkCell(cell: Cell) {
    if(this.c?.time == 0){
      this.c?.startTimer()
    }
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      this.c?.pauseTimer();
      this.msj.mensajePerdiste("Perdiste :(", "Vuelve a jugar");
    } else if (result === 'win') {
      this.c?.pauseTimer();
      this.msj.mensajeGanaste("Ganaste!!! Felicitaciones :)", "Eres un ganador");
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
    this.c?.pauseTimer();
    this.c?.resetTimer(); 
  }

}
