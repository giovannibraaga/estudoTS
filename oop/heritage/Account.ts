// public | private | protected
/* There was a security error in the last example, because it was declared as public, so anyone can change the balance amount just calling the "balance" directly */

export abstract class Account {
  // variables
  private readonly _accountNumber: number;
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
