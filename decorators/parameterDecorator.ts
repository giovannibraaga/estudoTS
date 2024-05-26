function balance() {
  return (target: any, propertyKey: string, parameterIndex: number) => {
    console.log("target", target);
    console.log("property key", propertyKey);
    console.log("parameter index", parameterIndex);
  };
}

class AccountC {
  private readonly _accountNumber: number;
  owner: string;
  balance: number;

  constructor(owner: string, balance: number) {
    this._accountNumber = Math.floor(Math.random() * 1000) + 1;
    this.owner = owner;
    this.balance = balance;
  }

  get accountNumber(): number {
    return this._accountNumber;
  }

  deposit(@balance() balance: number): void {
    this.balance + balance;
  }
}
