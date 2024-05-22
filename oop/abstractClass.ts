abstract class Account {
  // variables
  private _accountNumber: number;
  owner: string;
  private _balance: number;

  // constructor
  constructor(owner: string, balance: number) {
    this._accountNumber = Math.floor(Math.random() * 1000) + 1;
    this.owner = owner;
    this._balance = balance;
  }

  get accountNumber(): number {
    return this._accountNumber;
  }

  // first method *account balance*
  protected accountBalance(): number {
    return this._balance;
  }

  // second method *deposit*
  protected deposit(depositAmount: number): void {
    this._balance + depositAmount;
  }

  // third method *withdraw*
  protected withdraw(withdrawAmount: number): void {
    this._balance -= withdrawAmount;
  }
}

// const firstAccount = new Account('Giovanni', 200)
// will be just a model class. You can't instance a new account from this one, you'll get an error if you try
