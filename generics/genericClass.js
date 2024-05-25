"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class genericClass {
    constructor() {
        this._arr = [];
    }
    addValue(item) {
        this._arr.push(item);
    }
    returnValue() {
        return this._arr;
    }
    removeItem(Item) {
        let index = this._arr.indexOf(Item);
        if (index > -1)
            this._arr.splice(index, 1);
    }
}
let genericClass1 = new genericClass();
genericClass1.addValue(4);
console.log(genericClass1.returnValue());
let genericClass2 = new genericClass();
genericClass2.addValue("Giovanni");
console.log(genericClass2.returnValue());
let genericClass3 = new genericClass();
genericClass3.addValue(1);
genericClass3.addValue(2);
genericClass3.addValue(3);
console.log(genericClass3.returnValue());
genericClass3.removeItem(1);
console.log(genericClass3.returnValue());
