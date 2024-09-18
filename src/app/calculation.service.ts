import { Injectable } from "@angular/core";
import { CalculationData } from "./results/calculation-data.model";
import { AnnualData } from "./annual-data.model";

@Injectable({providedIn: "root"})
export class CalculationService{

    annualData: AnnualData[] = [];

    get getAnnualData() {
        return this.annualData;
    }

    
      calculateInvestmentResults(calculationData: CalculationData) {
        const annualData = [];
        let investmentValue = calculationData.initialInvestment;
      
        for (let i = 0; i < calculationData.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (calculationData.expectedReturn / 100);
          investmentValue += interestEarnedInYear + calculationData.annualInvestment;
          const totalInterest =
            investmentValue - calculationData.annualInvestment * year - calculationData.initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: calculationData.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: calculationData.initialInvestment + calculationData.annualInvestment * year,
          });
        }
        return this.annualData = annualData;
      }
}