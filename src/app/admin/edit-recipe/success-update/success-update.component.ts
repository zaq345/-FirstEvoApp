import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-update',
  templateUrl: './success-update.component.html',
  styleUrls: ['./success-update.component.css']
})
export class SuccessUpdateComponent {
  snackBarRef = inject(MatSnackBarRef);
}
