import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) { }

  getAllCars() {
    return this.http.get('http://user-registration-container-80-tcp.avengers:8081/cars/TESTTEST');
  }
}
