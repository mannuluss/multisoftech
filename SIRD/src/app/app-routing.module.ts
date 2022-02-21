import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';
import { SolicitudEquipoComponent } from './solicitud-equipo/solicitud-equipo.component';
import { InicioTecnicoComponent } from './inicio-tecnico/inicio-tecnico.component';
import { RegistroEquipoComponent } from './registro-equipo/registro-equipo.component';//tecnico

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "usuario", component: InicioUsuarioComponent },
  { path: "usuario/registro", component: SolicitudEquipoComponent },
  { path: "tecnico", component: InicioTecnicoComponent },
  { path: "tecnico/registro", component: RegistroEquipoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
