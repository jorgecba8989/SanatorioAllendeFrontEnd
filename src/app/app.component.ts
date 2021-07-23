import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Buscaminas';
  time: number = 0;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
        this.time++;
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
