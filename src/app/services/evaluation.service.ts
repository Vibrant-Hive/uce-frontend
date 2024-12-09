import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  private apiUrl = 'http://used-car-evaluation-service-alb-541600540.ap-south-1.elb.amazonaws.com'; //ALB url

  constructor(private http: HttpClient) {}

  // Fetch car evaluation data by VIN
  getCarEvaluation(vin: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${vin}`);
  }

  getAllCars(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/evaluation`);
  }
}
