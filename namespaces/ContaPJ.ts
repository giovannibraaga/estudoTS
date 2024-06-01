namespace Banco {
  class ContaPJ extends Conta {
    cnpj: number;
    private _taxes?: number;

    constructor(cnpj: number, owner: string, _balance: number) {
      super(owner, _balance);
      this.cnpj = cnpj;
      this._taxes = 0;
    }

    accountBalancePJ(): any {
      return `Hey ${this.owner}! Your balance is: $ ${this.accountBalance()}`;
    }

    withdrawPJ(withdrawAmount: number) {
      if (withdrawAmount > 0 && withdrawAmount <= this.accountBalance()) {
        this.withdraw(withdrawAmount);
      } else {
        console.log(
          "The withdraw amount has to be greater than 0 and less than or equal to the balance. "
        );
      }
    }

    // TaxesCalc(taxesCalc: number) {
    //   if (taxesCalc > 0 && taxesCalc < 2259.21) {
    //     console.log("You don't have to pay taxes.");
    //   } else if (taxesCalc >= 2259.21 && taxesCalc <= 2826.65) {
    //     this._taxes = taxesCalc * 0.075;
    //     console.log(`Your tax amount is: ${this._taxes}`);
    //   } else if (taxesCalc > 2826.65 && taxesCalc <= 3751.05) {
    //     this._taxes = taxesCalc * 0.15;
    //     console.log(`Your tax amount is: ${this._taxes}`);
    //   } else if (taxesCalc > 3751.05 && taxesCalc <= 4664.68) {
    //     this._taxes = taxesCalc * 0.225;
    //     console.log(`Your tax amount is: ${this._taxes}`);
    //   } else if (taxesCalc > 4664.68) {
    //     this._taxes = taxesCalc * 0.275;
    //     console.log(`Your tax amount is: ${this._taxes}`);
    //   } else {
    //     console.log("Invalid input.");
    //   }
    // }
  }
  const pj = new ContaPJ(11111111111111, "Carlos Bernardo", 1000);
  console.log(pj.accountNumber);
}
