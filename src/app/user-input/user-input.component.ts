import { Component, EventEmitter, inject, Inject, Output, signal } from '@angular/core';
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

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('0');
  duration = signal('0');

  onClickedCalculate() {
    const calculationData: CalculationData = {
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    };

    this.calculationService.calculateInvestmentResults(calculationData);
    this.calculate.emit();
    console.log("Submitted!");
  }

}
