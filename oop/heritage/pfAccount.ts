import { Account } from "./Account";

class AccountPF extends Account {
  cpf: number;

  constructor(cpf: number, owner: string, _balance: number) {
    super(owner, _balance);
    this.cpf = cpf;
  }

  accountBalancePF(): string {
    return `Hey ${this.owner}! Your balance is: $ ${this.accountBalance()}`;
  }

  withdrawPF(withdrawAmount: number) {
    if (withdrawAmount > 0 && withdrawAmount <= this.accountBalance()) {
      this.withdraw(withdrawAmount);
    } else {
      console.log(
        "The withdraw amount has to be greater than 0 and less than or equal to the balance. "
      );
    }
  }
}

const pf = new AccountPF(11111111111, "Lara Mendes", 10000);
console.log(pf.accountNumber);
