import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public GetUser() {
    return this.DataUser.value;
  }
  private DataUser = new BehaviorSubject({ id: 3, email: "mannulus@gmail.com", role: "usuario", name:"" });
  current = this.DataUser.asObservable();

  change(data: any) {
    this.DataUser.next(data)
  }
  constructor() { }
}
