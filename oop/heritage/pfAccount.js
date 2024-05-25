"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("./Account");
class AccountPF extends Account_1.Account /*implements taxes*/ {
    constructor(cpf, owner, _balance) {
        super(owner, _balance);
        this.cpf = cpf;
    }
    accountBalancePF() {
        return `Hey ${this.owner}! Your balance is: $ ${this.accountBalance()}`;
    }
    withdrawPF(withdrawAmount) {
        if (withdrawAmount > 0 && withdrawAmount <= this.accountBalance()) {
            this.withdraw(withdrawAmount);
        }
        else {
            console.log("The withdraw amount has to be greater than 0 and less than or equal to the balance.");
        }
    }
}
const pf = new AccountPF(11111111111, "Lara Mendes", 10000);
console.log(pf.accountNumber);
