const accountId = 545466
let accountEmail = "dawoodamin.dev@gmail.com"
var accountPassward = "12345"
 accountCity = "thana"

// accountId = 2     not allowed
accountEmail = "dawwod.0767@hjk"
accountPassward = 5432
accountCity = "swat"


/*
prefer not use var because of issue
in block scope and functional scope

*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassward,accountCity])
