import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  musicArtists = ['FIZICA', 'Fun Mode', 'Radio Tapok', 'Тони Раут', 'Plamenev', 'GroTTesque']
  date = new Date();
  num = 13;
}
