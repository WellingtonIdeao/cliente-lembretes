import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';
import { ListaLembreteComponent } from './pages/lista-lembrete/lista-lembrete.component';
import { FormLembreteComponent } from './shared/form-lembrete/form-lembrete.component';
import { CriarLembreteComponent } from './pages/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './pages/editar-lembrete/editar-lembrete.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaLembreteComponent,
    FormLembreteComponent,
    CriarLembreteComponent,
    EditarLembreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
