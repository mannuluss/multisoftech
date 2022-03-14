import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public GetUser() {
    return this.DataUser.value;
  }
  private DataUser = new BehaviorSubject({ id: 1, email: "andresrdz@gmail.com", role: "tecnico", name:"" });
  current = this.DataUser.asObservable();

  change(data: any) {
    this.DataUser.next(data)
  }
  constructor() { }
}
