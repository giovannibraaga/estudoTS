"use strict";
let conditions = false;
{
    console.log("Loading...");
}
while (conditions)
    ;
// it will "load" just one time, and then when it goes to the 'while' it will stop, because 'conditions' is false.
