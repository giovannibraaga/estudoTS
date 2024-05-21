// for greater validations

let accountTypes = "admin";

switch (accountTypes) {
  case "superuser":
    console.log("It's a Super User!");
    break;
  case "manager":
    console.log("It's a Manager!");
    break;
  case "admin":
    console.log("It's an Admin!");
  case "common-user":
    console.log("It's a Common User!");
    break;
  default:
    console.log("That's not an account type.");
    break;
}
