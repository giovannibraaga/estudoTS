"use strict";
class Accounts {
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
