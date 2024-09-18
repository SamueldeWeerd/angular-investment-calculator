import { Component, inject, Input } from '@angular/core';
import { CalculationService } from '../calculation.service';
import { AnnualData } from '../annual-data.model';
import { CalculationData } from './calculation-data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

@Input({required: true}) annualData!: AnnualData[];

}
