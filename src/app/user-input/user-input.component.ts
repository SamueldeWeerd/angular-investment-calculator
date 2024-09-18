import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculationService } from '../calculation.service';
import { CalculationData } from '../results/calculation-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<void>()

  private calculationService = inject(CalculationService);

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';

  onClickedCalculate() {
    const calculationData: CalculationData = {
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    };

    this.calculationService.calculateInvestmentResults(calculationData);
    this.calculate.emit();
    console.log("Submitted!");
  }

}
