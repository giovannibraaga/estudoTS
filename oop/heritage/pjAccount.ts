import { Account } from "./Account";

class AccountPJ extends Account {
  cnpj: number;

  constructor(cnpj: number, owner: string, _balance: number) {
    super(owner, _balance);
    this.cnpj = cnpj;
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
}
const pj = new AccountPJ(11111111111111, "Carlos Bernardo", 1000);
console.log(pj.accountNumber);
