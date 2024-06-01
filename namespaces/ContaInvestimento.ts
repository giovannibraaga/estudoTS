namespace Banco {
  export namespace Investimento {
    export class ContaInvestimento extends Conta {}
  }

  let ContaInvestimentos1 = new Banco.Investimento.ContaInvestimento(
    "Giovanni",
    10
  );
  console.log(ContaInvestimentos1.accountNumber);
}
