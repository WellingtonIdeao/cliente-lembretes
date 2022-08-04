import { Component, ViewChild } from '@angular/core';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent{
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService, private router: Router) { }

  addLembrete(lembrete: Lembrete){
    this.lembreteService.addLembrete(lembrete)
    .subscribe(
      ()=>{ this.router.navigateByUrl('/');},
      ()=>{this.errorMsgComponent.setError('Falha ao adicionar lembrete.');}
    );
  }
}
