import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCarsComponent } from './list-all-cars.component';

describe('ListAllCarsComponent', () => {
  let component: ListAllCarsComponent;
  let fixture: ComponentFixture<ListAllCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
