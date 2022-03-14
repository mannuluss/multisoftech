import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-solicitud-equipo',
  templateUrl: './solicitud-equipo.component.html',
  styleUrls: ['./solicitud-equipo.component.css']
})
export class SolicitudEquipoComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    date: new FormControl(),
    imagen: new FormControl(),
    specs: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    tel: new FormControl(),
    dir: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),
    nserie: new FormControl(),
    specsDis: new FormControl()
  });
  page1 = true;
  page2 = false;
  page3 = false;

  constructor(private http: HttpClient, public routerlink: Router, private data: UserService) { }

  ngOnInit(): void {
    var values = this.formulario.value;
    //values.date = new Date()
    values.email = this.data.GetUser().email;
    values.name = this.data.GetUser().name;
    this.formulario.setValue(values)
  }

  NextPage(step: number) {
    console.log(this.formulario)
    this.page1 = step == 1
    this.page2 = step == 2
    this.page3 = step == 3
  }

  SendData() {
    console.log("send data", this.formulario.value)
    var values = this.formulario.value;
    var disp = {
      nserie: values.nserie,
      idcliente: this.data.GetUser().id,
      specs: values.spcesDis,
      tipo_device: values.modelo,
      ref: "GENERIC",
      maker: values.marca,
    }
    //1. se crea el dispostivo
    this.http.post(environment.apiUrl + '/createDispositivo', disp).subscribe((res: any) => {
      console.log("dispositvo",res)
      var iddisp = res.id;
      var detalle = {
        idDispositivo: iddisp,
        desc: values.specs,
        idAccion: 3
      }
      //2. se sube el detalle
      this.http.post(environment.apiUrl + '/createDetalle', detalle).subscribe((res: any) => {
        console.log("detalle",res)
        var solicitud = {
          idcliente: this.data.GetUser().id,
          iddetalle: res.id
        }
        //3. se crea la solicitud
        this.http.post(environment.apiUrl + '/createSolicitud', solicitud).subscribe((res: any) => {
          console.log("solicitud",res)
          this.routerlink.navigate(['/usuario'])
        })
      })
    })
  }
  /*
  <!-- Created By CodingNepal -->
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});
prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
  */

}
