import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  

  title = 'CRUD de lembretes com o Angular';
  @ViewChild(ErrorMsgComponent) errorMsgComponent!: ErrorMsgComponent;
  
  
  ngAfterViewInit() {
    setTimeout(()=> this.errorMsgComponent.setError("Mensagem de erro!"));
  }
    
}
