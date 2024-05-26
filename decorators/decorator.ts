function balanceAnalysis(target: any, propertyKey: any, descriptor: any) {}

class AccountA {
  accountNumber: number;
  owner: string;
  balance: number;

  constructor(accountNumber: number, owner: string, balance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
  }

  @balanceAnalysis
  accountBalance(): string {
    return `Your balance is: ${this.balance}`;
  }
}
