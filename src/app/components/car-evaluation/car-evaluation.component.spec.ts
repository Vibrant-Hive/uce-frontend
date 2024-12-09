import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEvaluationComponent } from './car-evaluation.component';

describe('CarEvaluationComponent', () => {
  let component: CarEvaluationComponent;
  let fixture: ComponentFixture<CarEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
