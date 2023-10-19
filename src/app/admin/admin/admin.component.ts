import { Component } from '@angular/core';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  btnUsers: boolean = true;
  btnRecipes: boolean = false;

  changeActiveBtn(btn: string) {
    if (btn === 'btnUsers'){
      this.btnUsers = true
      this.btnRecipes = false
    } else {
      this.btnUsers = false
      this.btnRecipes = true
    }
  }

}
