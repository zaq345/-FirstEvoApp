import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessPopupComponent } from './success-popup/success-popup.component';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private data: DataService,
    private router: Router,
    private title: Title,
    private snackBar: MatSnackBar
  ) {
    this.title.setTitle("Foodie: Регистрация")
  }
  email: string = '';
  password: string = '';

  answer: any;

  registerUser() {
    this.data.register(this.email, this.password).subscribe({
      next: data => {
        this.answer = data
        if (this.answer.created === true) {
          this.router.navigateByUrl('/')

          this.snackBar.openFromComponent(SuccessPopupComponent, {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: "top",
            panelClass: 'popup'
          });

        }
      }
    })
  }
}
