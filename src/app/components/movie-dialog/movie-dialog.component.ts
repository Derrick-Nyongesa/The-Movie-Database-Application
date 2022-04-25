import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MovieDialogComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit(): void {}
}
