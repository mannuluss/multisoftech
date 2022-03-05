import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';
import { InicioTecnicoComponent } from './inicio-tecnico/inicio-tecnico.component';
import { RegistroEquipoComponent } from './registro-equipo/registro-equipo.component';
import { SolicitudEquipoComponent } from './solicitud-equipo/solicitud-equipo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioUsuarioComponent,
    InicioTecnicoComponent,
    RegistroEquipoComponent,
    SolicitudEquipoComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
