import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) { }

  getAllCars() {
    return this.http.get('http://used-car-evaluation-service-alb-541600540.ap-south-1.elb.amazonaws.com/cars/TESTTEST');
  }
}
