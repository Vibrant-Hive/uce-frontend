import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-all-cars',
  standalone: true,
  imports: [HttpClientModule],
  providers: [RegistrationService],
  templateUrl: './list-all-cars.component.html',
  styleUrl: './list-all-cars.component.css'
})
export class ListAllCarsComponent implements OnInit{

  constructor(private registrationService: RegistrationService){}

  ngOnInit(){
    this.registrationService.getAllCars().subscribe(response => {
      alert(response);
    })
  }

}
