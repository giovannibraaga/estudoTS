function balanceAnalysis(target: any, propertyKey: any, descriptor: any) {
  console.log("target", target);
  console.log("property key", propertyKey);
  console.log("descriptor", descriptor);
}

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
