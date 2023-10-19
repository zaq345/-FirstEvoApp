import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sub-popup',
  templateUrl: './sub-popup.component.html',
  styleUrls: ['./sub-popup.component.css']
})
export class SubPopupComponent {
  snackBarRef = inject(MatSnackBarRef);
}
