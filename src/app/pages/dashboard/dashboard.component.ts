import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../providers/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, public userservice:UserService) { 
  		console.log("dashboard component loaded constructor");
  }

  ngOnInit() {
  	console.log("dashboard component loaded oninit");
  	/*let reqData = {feedimage:"",feedname:"sreenivasan",feeddesc:"asdasdas",feedlink:"http:/localhost",feedenrollment:"asdasd",feedinstitution:"asdasdasd",feedtags:"asdasdasd",feedtype:"0",event_date:"date",event__end_date:"date"};*/
  	let reqData = {};
  	this.userservice.requestData("get-all-feed",reqData).subscribe((responseData:any)=>{
			console.log(responseData);
	},
  	(error)=>{
  		console.log(error);
  	});
  }

}
