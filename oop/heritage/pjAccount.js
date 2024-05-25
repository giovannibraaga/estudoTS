"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("./Account");
class AccountPJ extends Account_1.Account /*implements taxes*/ {
    constructor(cnpj, owner, _balance) {
        super(owner, _balance);
        this.cnpj = cnpj;
        this._taxes = 0;
    }
    accountBalancePJ() {
        return `Hey ${this.owner}! Your balance is: $ ${this.accountBalance()}`;
    }
    withdrawPJ(withdrawAmount) {
        if (withdrawAmount > 0 && withdrawAmount <= this.accountBalance()) {
            this.withdraw(withdrawAmount);
        }
        else {
            console.log("The withdraw amount has to be greater than 0 and less than or equal to the balance. ");
        }
    }
}
const pj = new AccountPJ(11111111111111, "Carlos Bernardo", 1000);
console.log(pj.accountNumber);
