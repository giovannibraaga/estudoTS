function validateOwner(target: any, propertyKey: any) {}

class AccountB {
  accountNumber: number;
  @validateOwner
  owner: string;
  balance: number;

  constructor(accountNumber: number, owner: string, balance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
  }

  accountBalance(): string {
    return `Your balance is: ${this.balance}`;
  }
}
