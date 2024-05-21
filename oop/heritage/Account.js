"use strict";
// public | private | protected
/* There was a security error in the last example, because it was declared as public, so anyone can change the balance amount just calling the "balance" directly */
class Account {
    // constructor
    constructor(owner, balance) {
        this.account1 = new Account("Giovanni Braga Bernardo", 200.0);
        this.accountNumber = Math.floor(Math.random() * 1000) + 1;
        this.owner = owner;
        this.balance = balance;
    }
    // first method *account balance*
    accountBalance() {
        return this.balance;
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
