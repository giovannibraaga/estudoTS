// public | private | protected
/* There was a security error in the last example, because it was declared as public, so anyone can change the balance amount just calling the "balance" directly */

class Account {
  // variables
  private accountNumber: number;
  owner: string;
  private balance: number;

  // constructor
  constructor(owner: string, balance: number) {
    this.accountNumber = Math.floor(Math.random() * 1000) + 1;
    this.owner = owner;
    this.balance = balance;
  }

  account1 = new Account("Giovanni Braga Bernardo", 200.0);

  // first method *account balance*
  protected accountBalance(): number {
    return this.balance;
  }

  // second method *deposit*
  protected deposit(depositAmount: number): void {
    this.balance + depositAmount;
  }

  // third method *withdraw*
  protected withdraw(withdrawAmount: number): void {
    this.balance -= withdrawAmount;
  }
}
