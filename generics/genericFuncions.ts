function genericFunction<T>(value: T): T {
  return value;
}

console.log(genericFunction<number>(1));
console.log(genericFunction<string>("maximum"));
console.log(genericFunction<boolean>(true));

// genericFunction<number>()
// genericFunction<string>()
// genericFunction<boolean>()

function newGenericFunction<T, U, V>(args1: T, args2: U, args3: V): V {
    return args3
}

console.log(newGenericFunction<number, string, boolean>(18,"Giovanni", false));

