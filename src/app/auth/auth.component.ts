import { Store } from '@ngxs/store';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { AuthUpdate } from '../store/model/auth.model';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PopupErrorComponent } from '../popup-error/popup-error.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(
    private data: DataService,
    private store: Store,
    private router: Router,
    private title: Title,
    private snackBar: MatSnackBar
  ) {
    this.title.setTitle("Foodie: Вход")
  }
  login: string = '';
  password: string = '';

  loginUser() {
    this.data.login(this.login, this.password).subscribe({
      next: data => {
        console.log(data)
        const authObject: any = data
        this.store.dispatch(new AuthUpdate({
          access_token: authObject.access_token,
          role: authObject.role,
          username: authObject.username,
          id: authObject.id,
          fullname: authObject.fullname,
          image: authObject.image
        }))
        this.router.navigateByUrl('/')
      },
      error: error => {
        console.log(error)
        this.snackBar.openFromComponent(PopupErrorComponent, {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: "top",
          panelClass: 'popup'
        });

      }
    })
  }
}
