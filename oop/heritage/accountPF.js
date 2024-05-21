"use strict";
class AccountPF extends Account {
    constructor(cpf, owner, balance) {
        super(owner, balance);
        this.pessoaFisica = new AccountPF(11111111111, "Lara Mendes", 10000);
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
            console.log("The withdraw amount has to be greater than 0 and less than or equal to the balance. ");
        }
    }
}
