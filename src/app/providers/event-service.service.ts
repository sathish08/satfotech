import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  userToken:string;

  @Output() change: EventEmitter<string> = new EventEmitter();

  setUserToken(tokenData){
    this.userToken = tokenData
    this.change.emit(this.userToken);
  }

  removeUserToken(){
  	localStorage.removeItem('userToken');
  	return null;
  }

  

}
