import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-dialogdemo',
  templateUrl: './dialogdemo.component.html',
  styleUrls: ['./dialogdemo.component.css']
})
export class DialogdemoComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  showDialog(){
    this.dialog.open(ConfirmationDialogComponent)
  }

}
