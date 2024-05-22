"use strict";
// public | private | protected
/* There was a security error in the last example, because it was declared as public, so anyone can change the balance amount just calling the "balance" directly */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    // constructor
    constructor(owner, balance) {
        this._accountNumber = Math.floor(Math.random() * 1000) + 1;
        this.owner = owner;
        this._balance = balance;
    }
    get accountNumber() {
        return this._accountNumber;
    }
    // first method *account balance*
    accountBalance() {
        return this._balance;
    }
    // second method *deposit*
    deposit(depositAmount) {
        this._balance + depositAmount;
    }
    // third method *withdraw*
    withdraw(withdrawAmount) {
        this._balance -= withdrawAmount;
    }
}
exports.Account = Account;
