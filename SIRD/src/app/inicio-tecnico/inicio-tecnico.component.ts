import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inicio-tecnico',
  templateUrl: './inicio-tecnico.component.html',
  styleUrls: ['./inicio-tecnico.component.css']
})
export class InicioTecnicoComponent implements OnInit {
  User: any = {};
  nuevos: any = [];
  finalizados: any = [];
  asignados: any = [];
  active: any = { nuevos: false, asignados: false, finalizados: false };

  constructor(private http: HttpClient, public routerlink: Router, private data: UserService) {
    this.data.current.subscribe(user => this.User = user);
  }

  ngOnInit(): void {
    this.http.get(environment.apiUrl + `/solicitudes?role=${this.User.role}&id=${this.User.id}`).subscribe((res: any) => {
      console.log(res)
      if (res.length) {
        this.nuevos = [];
        this.nuevos =  res.filter((item: any) => item.estado_solicitud === "pendiente");
        this.asignados = res.filter((item: any) => item.estado_solicitud == "recibido");
        this.finalizados = res.filter((item: any) => item.estado_solicitud == 'finalizado');
      }
    });
  }

  setOpenDetails(property: string) {
    this.active[property] = !this.active[property];
  }

  AceptarNuevos(id: any) {
    console.log(id, "iduser", this.data.GetUser().id)
    var nuevo = this.nuevos.find((item:any) => item.id_solicitud == id)
    this.nuevos = this.nuevos.filter((item:any) => item.id_solicitud != id)
    this.asignados.push(nuevo)
  }

  setState(id:any){
    this.routerlink.navigate(['/tecnico/registro'])
    /*console.log(id, "iduser", this.data.GetUser().id)
    var nuevo = this.asignados.find((item:any) => item.id_solicitud == id)
    this.asignados = this.asignados.filter((item:any) => item.id_solicitud != id)
    this.finalizados.push(nuevo)*/
  }
}
