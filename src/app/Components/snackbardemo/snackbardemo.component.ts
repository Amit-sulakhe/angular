import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbardemo',
  templateUrl: './snackbardemo.component.html',
  styleUrls: ['./snackbardemo.component.css'],
})
export class SnackbardemoComponent implements OnInit {
  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }
}
