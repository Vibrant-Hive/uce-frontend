import { Component, OnInit, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-car-evaluation',
  standalone: true,
  imports: [TableModule, HttpClientModule, CommonModule],
  providers: [EvaluationService],
  templateUrl: './car-evaluation.component.html',
  styleUrl: './car-evaluation.component.css'
})
export class CarEvaluationComponent implements OnInit {
  cars = signal<any[]>([]);

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit(): void {
    this.loadAllCars();
  }

  // Load all cars with evaluation data
  loadAllCars() {
    this.evaluationService.getAllCars().subscribe(
      (data) => this.cars.set(data),
      (error) => console.error('Error fetching data:', error)
    );
  }
}
