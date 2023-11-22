import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  cities: string[] = ['Hyderabad', 'Delhi', 'Mumbai','Kolkata','Pune','Bangalore','Chennai','Lucknow']; // Replace with your actual city names
  classes: string[]=['Sleeper(SL)','First Class(FC)','Second Class(2S)','AC First Class (1A)','AC 2 Tier (2A)','AC 3 Tier (3A)','AC 3 Economy (3E)'];
  quotas:string[]=['General','Tatkal','Ladies','Lower Berth/ Sr. Citizen','Premium Tatkal','Duty Pass','Person with disability'];
  selectedquota:string;
  selectedClass:string;
  selectedQuota:string;
  selectedSource: string;
  selectedDestination: string;
  showSelectedInfo: boolean = false;
  destinationOptions: string[];
  selectedDate: string;
  today: string; // Property to hold the current date
  
 

  constructor() {
    // Set the initial options for the destination dropdown
    this.destinationOptions = this.cities.slice();
    this.today = new Date().toISOString().split('T')[0];
  }
 
  onSourceChange() {
    // Update destination options based on the selected source
    this.destinationOptions = this.cities.filter(city => city !== this.selectedSource);
    this.selectedDestination = null; // Reset the destination when the source changes
  }
 
  onSubmit() {
 
      this.showSelectedInfo = true;

  }
}
