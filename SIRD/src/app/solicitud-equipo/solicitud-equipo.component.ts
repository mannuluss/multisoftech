import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-equipo',
  templateUrl: './solicitud-equipo.component.html',
  styleUrls: ['./solicitud-equipo.component.css']
})
export class SolicitudEquipoComponent implements OnInit {

  public m1:boolean = true;
  public m2:boolean = false;
  public m3:boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.router.navigate(["/usuario"]);
  }

  siguiente1(){
     this.m1 = false;
     this.m2 = true;
  }

  atras1(){
    this.m1 = true;
    this.m2 = false;
  }

  siguiente2(){
    this.m2 = false;
    this.m3 = true;
  }

  atras2(){
    this.m2 = true;
    this.m3 = false;
  }
}
