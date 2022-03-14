import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  //@Output() getUserEvent = new EventEmitter<any>();

  constructor(private http: HttpClient,public routerlink: Router, private data: UserService) { }

  ngOnInit(): void {
  }

  sendlogin() {
    //console.log(this.formulario.value , environment.apiUrl)
    this.http.post(environment.apiUrl + "/login", this.formulario.value).subscribe((res: any) => {
      console.log(res);
      if (res == false || res == null || res?.msj)
        return alert(res.msj);
      
      this.data.change(res);
      if (res.role == "tecnico") {
        this.routerlink.navigate(["/tecnico"])
      }else{
        this.routerlink.navigate(["/usuario"])
      }
    })
  }

}
