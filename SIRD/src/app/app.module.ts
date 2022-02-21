import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';
import { InicioTecnicoComponent } from './inicio-tecnico/inicio-tecnico.component';
import { RegistroEquipoComponent } from './registro-equipo/registro-equipo.component';
import { SolicitudEquipoComponent } from './solicitud-equipo/solicitud-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioUsuarioComponent,
    InicioTecnicoComponent,
    RegistroEquipoComponent,
    SolicitudEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
