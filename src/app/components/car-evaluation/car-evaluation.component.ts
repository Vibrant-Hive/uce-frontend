import { Component, OnInit, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EvaluationService } from '../../services/evaluation.service';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-car-evaluation',
  standalone: true,
  imports: [TableModule, HttpClientModule, CommonModule, TooltipModule],
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
      (data) => this.cars.set(data.concat(data)),
      (error) => console.error('Error fetching data:', error)
    );
  }

  columnSources = [
    { column: 'VIN', source: 'Car Registration Service' },
    { column: 'For Sale', source: 'Car Registration Service' },
    { column: 'Purchase Recommendation', source: 'Used Car Evaluation Service' },
    { column: 'Engine Health', source: 'IoT Service' },
    { column: 'Mileage (km)', source: 'IoT Service' },
    { column: 'Battery Status (%)', source: 'IoT Service' },
    { column: 'Tire Condition (%)', source: 'IoT Service' },
  ];
}
