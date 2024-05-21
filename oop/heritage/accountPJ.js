"use strict";
class AccountPJ extends Account {
    constructor(cnpj, owner, balance) {
        super(owner, balance);
        this.pessoaJuridica = new AccountPJ(11111111111111, "Carlos Bernardo", 1000);
        this.cnpj = cnpj;
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
