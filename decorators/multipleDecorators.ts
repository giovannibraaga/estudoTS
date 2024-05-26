function accountAnalysiss(accountType: string) {
  return (_target: any) => {
    console.log(`${accountType} - ${_target}`);
  };
}

function logs(ctor: any) {}
function ruleValidation(ctor: any) {}

@logs
@ruleValidation
@accountAnalysiss("PJ")
class AccountF {}
