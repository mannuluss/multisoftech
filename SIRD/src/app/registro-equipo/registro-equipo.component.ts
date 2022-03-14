import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-equipo',
  templateUrl: './registro-equipo.component.html',
  styleUrls: ['./registro-equipo.component.css']
})
export class RegistroEquipoComponent implements OnInit {

  formulario = new FormGroup({
    title: new FormControl(),
    specs: new FormControl(),
    final: new FormControl(),
  })

  constructor(private http: HttpClient, public routerlink: Router){}

  ngOnInit(): void {
  }

  Send(){
    this.routerlink.navigate(["/tecnico"])
  }

}

