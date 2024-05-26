function accountAnalysis(accountType: any) {
  return (_target: any) => {
    console.log(`${accountType} - ${_target}`);
  };
}

@accountAnalysis("PJ")
class AccountE {}
