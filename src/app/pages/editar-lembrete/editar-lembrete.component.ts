import { Component, OnInit, ViewChild } from '@angular/core';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent implements OnInit {
  public lembrete: Lembrete;
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getLembrete(this.activatedRoute.snapshot.params['id']);
  }

  getLembrete(id: number){
    this.lembreteService.getLembrete(id)
    .subscribe(
      (lembrete: Lembrete)=>{this.lembrete = lembrete;},
      ()=>{this.errorMsgComponent.setError('Falha ao buscar lembrete.');}
    );
  }

  atualizaLembrete(lembrete: Lembrete){
    this.lembreteService.atualizaLembrete(lembrete)
    .subscribe(
      ()=>{ this.router.navigateByUrl('/');},
      ()=>{this.errorMsgComponent.setError('Falha ao atualizar lembrete.');}
    );
  }

}
