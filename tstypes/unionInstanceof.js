"use strict";
class A {
    x() {
        throw new Error("Method not implemented.");
    }
}
class B {
    x() {
        throw new Error("Method not implemented.");
    }
}
class C {
    x() {
        throw new Error("Method not implemented.");
    }
}
class D {
    x() {
        throw new Error("Method not implemented.");
    }
}
function exInstanceof(parametro) {
    if (parametro instanceof A) {
        console.log("Sou a classe A");
    }
    else if (parametro instanceof B) {
        console.log("Sou a classe B");
    }
    else if (parametro instanceof C) {
        console.log("Sou a classe C");
    }
    else if (parametro instanceof D) {
        console.log("Sou a classe D");
    }
}
exInstanceof(new C());
