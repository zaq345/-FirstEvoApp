import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.enableStraightOperator();
    this.enableRandomOperator();
  }
  title = 'FirstEvoApp';

  // straight operator
  intervalStraightSubscription$!: Subscription;
  straightArray: number[] = [];

  enableStraightOperator(){
    const intervalStream = interval(2000)
    this.intervalStraightSubscription$ = intervalStream.subscribe({
      next: (value) => {
        this.straightArray.push(value);
      }
    })
  }
  disableStraightOperator(){
    this.intervalStraightSubscription$.unsubscribe();
  }

  // random operator
  intervalRandomSubscription$!: Subscription;
  randomArray: string[] = [];
  
  enableRandomOperator(){
    const intervalStream = interval(2000)
    this.intervalRandomSubscription$ = intervalStream.pipe(
      map((value) => `Random Value: ${Math.floor(Math.random() * 100)}`),
    )
    .subscribe({
      next: (value) => {
        this.randomArray.push(value);
      }
    })
  }
  disableRandomOperator(){
    this.intervalRandomSubscription$.unsubscribe();
  }
}
