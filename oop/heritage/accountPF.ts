class AccountPF extends Account {
  cpf: number;

  constructor(cpf: number, owner: string, balance: number) {
    super(owner, balance);
    this.cpf = cpf;
  }

  pessoaFisica = new AccountPF(11111111111, "Lara Mendes", 10000);

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
