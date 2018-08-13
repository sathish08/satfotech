import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd  } from '@angular/router';
import { EventServiceService } from './providers/event-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData:any;
  showLoader:boolean = false;
  constructor(private router:Router,public cevent: EventServiceService){
  	 //localStorage.removeItem('userToken');
  	this.userData = localStorage.getItem('userToken');

  	/*events.subscribe('user:login', (userName,profileImg) => {
    console.log('event triggered');
      this.userLoginName = userName;
      this.userImg = profileImg;
    });*/
  }

  ngOnInit() {
    this.cevent.change.subscribe(userToken => {
      this.userData = userToken;
      console.log(userToken);
    });
  }

  ngAfterViewInit() {
    this.router.events
        .subscribe((event) => {
            if(event instanceof NavigationStart) {
                this.showLoader = true;
                console.log('loader '+this.showLoader);
            }
            else if (
                event instanceof NavigationEnd || 
                event instanceof NavigationCancel
                ) {
                this.showLoader = false;
                console.log('loader '+this.showLoader);
            }
        });
    }

  logout(){
  	localStorage.removeItem('userToken');
    this.cevent.setUserToken(null);
  	this.router.navigate(['/login']);
  }

}
