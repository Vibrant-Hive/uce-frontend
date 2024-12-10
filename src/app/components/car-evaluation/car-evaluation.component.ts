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
  iotServiceUp: any;
  carRegServiceUp: any;
  uceServiceUp: any;
  loaded: any = false;

  constructor(private evaluationService: EvaluationService) { }

  ngOnInit(): void {
    this.loadAllCars();
  }

  // Load all cars with evaluation data
  loadAllCars() {
    this.evaluationService.getAllCars().subscribe(
      (data) => { this.cars.set(data); this.uceServiceUp = true; this.iotServiceUp = data.some(item => item.wearAndTearData); this.loaded = true; this.carRegServiceUp = data.length > 0 },
      (error) => { console.error('Error fetching data:', error); this.loaded = true; this.uceServiceUp = false }
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
