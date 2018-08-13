import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	rootUrl:string = 'http://webappstorm.com/collfair2/public/api/'
  	constructor(private http:HttpClient) { }

	userLogin(credentials:any){
		var reqHeader = new HttpHeaders({ 'no-Auth': 'True' });
		return this.http.post(this.rootUrl+'login',credentials,{ headers: reqHeader });
	}

}
