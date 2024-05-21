class a {
  // variables
  accountNumber: number;
  owner: string;
  balance: number;

  // constructor
  constructor(accountNumber: number, owner: string, balance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
  }
}

const account1 = new a(1, "Giovanni Braga Bernardo", 200);
