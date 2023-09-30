import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

  constructor(
    private dataService: DataService
  ) { }
  
  getBtn1Function() {
    return this.dataService.getBtn1().subscribe({
      next: (data) => {
        console.log(data);
      }
    });
  }

  getBtn2Function() {
    return this.dataService.getBtn2().subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

  post3Function() {
    return this.dataService.postBtn3().subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }
  
  getBtn4Function() {
    return this.dataService.getBtn4().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getBtn5Function() {
    return this.dataService.getBtn5().subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

  deleteBtn6Function() {
    return this.dataService.deleteBtn6().subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }
}
