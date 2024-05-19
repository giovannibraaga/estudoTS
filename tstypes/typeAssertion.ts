function typeAssertion(anyCode: any) {
  let numberCode: number = <number>anyCode;
  return numberCode * 10;
}

typeAssertion(2);
