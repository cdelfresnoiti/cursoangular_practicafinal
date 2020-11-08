import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfigComponent } from './components/config/config.component';
import { AgentesComponent } from './components/agentes/agentes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearAgenteComponent } from './components/agentes/crear-agente/crear-agente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfigComponent,
    AgentesComponent,
    ProductosComponent,
    CrearAgenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
