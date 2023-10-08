import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

  constructor(public data: DataService) { }

  changeRole(){
    if(this.data.role === 'admin') {
      this.data.role = 'user'
    } else {
      this.data.role = 'admin'
    }
  }
  
}
