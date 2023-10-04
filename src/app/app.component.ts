import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  todo: object = {};

  constructor(private dataService: DataService) { }

  getThroughInterceptor() {
    this.dataService.getTodos().subscribe({
      next: (data) => {
        console.log(data);
        this.todo = data;
      }
    })
  }
}
