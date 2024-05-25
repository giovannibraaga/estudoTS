"use strict";
function genericFunction(value) {
    return value;
}
console.log(genericFunction(1));
console.log(genericFunction("maximum"));
console.log(genericFunction(true));
// genericFunction<number>()
// genericFunction<string>()
// genericFunction<boolean>()
function newGenericFunction(args1, args2, args3) {
    return args3;
}
console.log(newGenericFunction(18, "Giovanni", false));
