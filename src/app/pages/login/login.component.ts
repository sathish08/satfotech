import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EventServiceService } from '../../providers/event-service.service';
import { UserService } from '../../providers/user-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertComponent } from '../../dialogbox/alert/alert.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/css/util.css', '../../../assets/css/main.css']
})
export class LoginComponent implements OnInit {

  	formData : FormGroup;
  	showLoader:boolean = false;
  	constructor(public formBuilder: FormBuilder,private router:Router,private http:HttpClient,public cevent: EventServiceService, public userservice:UserService, public dialog: MatDialog) { 
  		this.formData = formBuilder.group({
	      email : ['', Validators.required],
	      password : ['', Validators.required]
	    });
  	}

  	authenticateUser(){
  		this.userservice.userLogin(this.formData.value).subscribe((responseData:any)=>{
  			if(responseData.status == 1){
	  			localStorage.setItem('userToken', responseData.body.token);
	  			this.cevent.setUserToken(responseData.body.token);
	  			this.router.navigate(['/dashboard']);
	  		}
	  		else{
	  			console.log('authentication failed');
	  			this.openDialog();
	  		}
	  		
  			this.showLoader = false;
		},
	  	(error)=>{
	  		console.log(error);
  			this.showLoader = false;
	  		
	  	});
  	}

  	FormSubmitted(credentials){
  		this.showLoader = true;
		let headeroption = new HttpHeaders();
		headeroption.append('Content-Type', 'application/x-www-urlencoded' );
	  	let reqHeader = {headers:headeroption};
	  	this.http.post('http://webappstorm.com/collfair2/public/api/login',this.formData.value,reqHeader).subscribe((responseData:any)=>{
	  		console.log(responseData);
	  		if(responseData.status == 1){
	  			localStorage.setItem('userToken', responseData.body.token);
	  			this.cevent.setUserToken(responseData.body.token);
	  			this.router.navigate(['/dashboard']);
	  		}
	  		else{
	  			console.log('authentication failed');
	  			this.openDialog();
	  		}
	  		
  			this.showLoader = false;
	  		
	  	},
	  	(error)=>{
	  		console.log(error);
  			this.showLoader = false;
	  		
	  	})
  	}

  	openDialog(): void {
	    console.log('dialogRef');
	    const dialogRef = this.dialog.open(AlertComponent, {
	      hasBackdrop: true,
	    });

	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');
	    });
	}

	ngOnInit() {
		this.cevent.setUserToken(null);
	}

}
