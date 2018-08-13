import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<AlertComponent>) {}

  	onNoClick(): void {
	    this.dialogRef.close();
  	}

  	ngOnInit() {
		console.log('alert initialized');
	}

}
