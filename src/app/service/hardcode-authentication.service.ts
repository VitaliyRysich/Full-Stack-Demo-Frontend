import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  auth(username, password) {
    if(username === 'vitalii' && password === 'dummy') {
      return true;
    }
    return false;
  }
}
