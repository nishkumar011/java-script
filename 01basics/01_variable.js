const accountId = 144553
let accountEmail = "nishkumar011@gmail.com"
var accountPassword = "12345"
let accountCity = "Indore"
let accountState;
//accountId = 2 not allowed
accountEmail = "hc@hc.com"
accountPassword = "2135546"
accountCity = "Jaipur"
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional 
*/
console.table([accountState ,accountEmail , accountId , accountPassword , accountCity]);