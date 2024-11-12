import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userActive: User | undefined = undefined

  constructor() { }

  get user() {
    return this.userActive;
  }

  setUser(user: User | undefined){
      this.userActive = user;
  }
}
