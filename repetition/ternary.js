"use strict";
// validate 2 account types
let accountType = "admin";
console.log(accountType == "superuser" ? "It's a Super User!" : "It's an Admin!");
// validating 3 or more account types...
console.log(accountType == "superuser"
    ? "It's a Super User!"
    : accountType == "admin"
        ? "It's an Admin!"
        : "Common User.");
