import { Component } from '@angular/core';
import  Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

  notiflixTest() {
    Notiflix.Notify.info('Notiflix works');
  }
}
