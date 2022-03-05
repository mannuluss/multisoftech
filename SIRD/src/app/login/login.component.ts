import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private http: HttpClient,public routerlink: Router) { }

  ngOnInit(): void {
  }

  sendlogin() {
    console.log(this.formulario)
    this.http.post(environment.apiUrl + "/login", this.formulario.value).subscribe((res: any) => {
      if (res.role == "tecnico") {
        this.routerlink.navigate(["/tecnico"])
      }else{
        this.routerlink.navigate(["/usuario"])
      }
    })
  }

}
