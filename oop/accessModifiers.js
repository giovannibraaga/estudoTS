"use strict";
// public | private | protected
/* There was a security error in the last example, because it was declared as public, so anyone can change the balance amount just calling the "balance" directly */
class c {
    // constructor
    constructor(accountNumber, owner, balance, cpf) {
        this.account1 = new c(1, "Giovanni Braga Bernardo", 200.0, 11111111111);
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
        this.cpf = cpf;
    }
    // first method *account balance*
    accountBalance() {
        return `Hey ${this.owner}, your balance is: $ ${this.balance}`;
    }
    // second method *deposit*
    deposit(depositAmount) {
        this.balance + depositAmount;
    }
    // third method *withdraw*
    withdraw(withdrawAmount) {
        this.balance -= withdrawAmount;
    }
}
