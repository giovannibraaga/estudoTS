namespace Banco {
  export namespace Investimento {
    export class ContaSalario extends Conta {
      private prego?: string;

      constructor(owner: string, _balance: number) {
        super(owner, _balance);
      }
    }
  }

  let contaSalario1 = new Banco.Investimento.ContaSalario("Giovanni", 1);
  console.log(contaSalario1.accountNumber);
  console.log(contaSalario1);
}
