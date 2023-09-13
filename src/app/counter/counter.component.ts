import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  num = 0;
  add() {
    this.num++;
  }
  sub() {
    this.num--;
  }
}
