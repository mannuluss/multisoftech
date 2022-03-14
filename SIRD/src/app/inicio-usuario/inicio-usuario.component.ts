import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.component.html',
  styleUrls: ['./inicio-usuario.component.css']
})
export class InicioUsuarioComponent implements OnInit {
  User: any = "";
  lista: any = [];
  busquedatext = "";
  //issearch = false;

  constructor(private http: HttpClient, public routerlink: Router, private data: UserService) {
    this.data.current.subscribe(user => this.User = user);
  }

  ngOnInit(): void {
    this.http.get(environment.apiUrl + `/solicitudes?role=${this.User.role}&id=${this.User.id}`).subscribe((res: any) => {
      console.log(res)
      if (res.length)
        this.lista = res;
    });
  }

  btnAgregar() {
    this.routerlink.navigate(["/usuario/registro"])
  }

  Busqueda() {
    /*console.log(this.busquedatext, this.issearch)
    this.issearch = true;*/
  }

  IsHiddenItem(item: any) {
    if (this.busquedatext == "")
      return false;
    return !(item.id_solicitud.toString().includes(this.busquedatext)
      || item.tecnico.toLowerCase().includes(this.busquedatext.toLowerCase())
      || item.estado_solicitud.toString().toLowerCase().includes(this.busquedatext))

  }
}
