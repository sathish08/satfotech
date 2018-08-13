import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventServiceService } from '../providers/event-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(public router:Router,public cevent: EventServiceService) { }

  	intercept(req: HttpRequest<any>, next: HttpHandler):any{
		/*if(req.headers.get('no-Auth') == "true"){
			return next.handle(req.clone());
		}

		if(localStorage.getItem('userToken') != null) {
			const clonedReq = req.clone({
				headers: req.headers.set("Authorization", "Bearer "+localStorage.getItem('userToken'))
			});
			return next.handle(clonedReq).pipe(catchError
			(err =>{
				if(err.status === 401){
					this.router.navigate('/login');
				}
			}));

			const error = err.error.message || err.statusText;
			return throwError(error);
		}
		else
		{
			this.router.navigate('/login');
		}*/


		/*const request = req.clone({
			headers: req.headers.set("Authorization", "Bearer "+localStorage.getItem('userToken'))
		});*/

		const request = req.clone({
			headers: req.headers.set("Authorization", "Bearer zdWIiOjEsImlzcyI6Imh")
		});

		 return next.handle(request).pipe(catchError(err => {
            if (err.status === 500) {
            	console.log('500 error');
            	this.cevent.removeUserToken();
            	this.router.navigate(['/login']);
            	
                // auto logout if 401 response returned from api
                //this.authenticationService.logout();
                //location.reload(true);
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
  	}

}
