function verifyType(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }

  return fail("This method doesnt accept this type!");
}

function fail(message: string): never {
  throw new Error(message);
}

verifyType("String test");
verifyType(10);

// will throw an error ->
// let active = true;
// verifyType(active);

// functions without return

function Update(): never {
  while (true) {
    console.log("Updating processes!");
  }
}
