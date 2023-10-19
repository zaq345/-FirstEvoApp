import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-recipe-dialog',
  templateUrl: './delete-recipe-dialog.component.html',
  styleUrls: ['./delete-recipe-dialog.component.css']
})
export class DeleteRecipeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteRecipeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
  ) {}
  handleShare() {
    // Вызовите функцию в родительском компоненте, передав необходимые данные
    // this.dialogRef.close(data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
