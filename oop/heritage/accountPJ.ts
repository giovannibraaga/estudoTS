class AccountPJ extends Account {
  cnpj: number;

  constructor(cnpj: number, owner: string, balance: number) {
    super(owner, balance);
    this.cnpj = cnpj;
  }

  pessoaJuridica = new AccountPJ(11111111111111, "Carlos Bernardo", 1000);

  accountBalancePJ(): string {
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
