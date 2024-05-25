import { genericInterface } from "./genericInterface";

class genericClass<T> implements genericInterface<T> {
  private _arr: Array<T> = [];

  addValue(item: T) {
    this._arr.push(item);
  }

  returnValue() {
    return this._arr;
  }

  removeItem(Item: T) {
    let index = this._arr.indexOf(Item);
    if (index > -1) this._arr.splice(index, 1);
  }
}

let genericClass1 = new genericClass<number>();
genericClass1.addValue(4);
console.log(genericClass1.returnValue());

let genericClass2 = new genericClass<string>();
genericClass2.addValue("Giovanni");
console.log(genericClass2.returnValue());

let genericClass3 = new genericClass<number>();
genericClass3.addValue(1);
genericClass3.addValue(2);
genericClass3.addValue(3);
console.log(genericClass3.returnValue());
genericClass3.removeItem(1);
console.log(genericClass3.returnValue());
