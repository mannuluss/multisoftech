import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-tecnico',
  templateUrl: './inicio-tecnico.component.html',
  styleUrls: ['./inicio-tecnico.component.css']
})
export class InicioTecnicoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


}
