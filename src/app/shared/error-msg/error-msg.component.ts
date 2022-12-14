import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent{
  public error!: string;

  setError(error: string, time: number = 5000){
    this.error = error;
    setTimeout(()=>this.error = "", time);

  }
  
}
