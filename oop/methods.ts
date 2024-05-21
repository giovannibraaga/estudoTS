class b {
  // variables
  accountNumber: number;
  owner: string;
  balance: number;
  cpf: number;

  // constructor
  constructor(
    accountNumber: number,
    owner: string,
    balance: number,
    cpf: number
  ) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
    this.cpf = cpf;
  }

  account1 = new b(1, "Giovanni Braga Bernardo", 200.0, 11111111111);

  // first method *account balance*
  accountBalance(): string {
    return `Hey ${this.owner}, your balance is: $ ${this.balance}`;
  }

  // second method *deposit*
  deposit(depositAmount: number): void {
    this.balance + depositAmount;
  }

  // third method *withdraw*
  withdraw(withdrawAmount: number): void {
    this.balance -= withdrawAmount;
  }
}
