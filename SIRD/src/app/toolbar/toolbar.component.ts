import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isShow:boolean = false;
  openbar: boolean = false;
  constructor(private http: HttpClient, public routerlink: Router) { }

  ngOnInit(): void {
  }

  setBarOpen() { this.openbar = !this.openbar; }
  logout() {
    this.openbar = false;
    this.http.post(environment.apiUrl + "/logout", {}).subscribe((res) => {
      console.log(res)
      this.routerlink.navigate(["/"])
    })
  }
}
