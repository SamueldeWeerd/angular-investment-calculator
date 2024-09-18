import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResultsComponent } from './results/results.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { AnnualData } from './annual-data.model';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, ResultsComponent, PlaceholderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  calculatedResult : boolean; 

  private calculationService = inject(CalculationService);

  // Declare annualData as an array of AnnualData
  annualData: AnnualData[] = [];

  constructor() {
    // Fetch the annualData from the service once calculations are completed
    this.calculatedResult = false;
  }

  onCalculateResult() {
    this.annualData = this.calculationService.getAnnualData;
    this.calculatedResult = true;
  }

}
