interface Z {
  x(): string;
}

class A implements Z {
  x(): string {
    throw new Error("Method not implemented.");
  }
}

class B implements Z {
  x(): string {
    throw new Error("Method not implemented.");
  }
}

class C implements Z {
  x(): string {
    throw new Error("Method not implemented.");
  }
}

class D implements Z {
  x(): string {
    throw new Error("Method not implemented.");
  }
}

function exInstanceof(parametro: Z) {
  if (parametro instanceof A) {
    console.log("Sou a classe A");
  } else if (parametro instanceof B) {
    console.log("Sou a classe B");
  } else if (parametro instanceof C) {
    console.log("Sou a classe C");
  } else if (parametro instanceof D) {
    console.log("Sou a classe D");
  }
}
exInstanceof(new C());
