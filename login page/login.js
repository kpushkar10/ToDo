// var n = document.getElementById("userName");
// console.log(n);
var registeredUserNames = Array()
function storeValues() {
    var x = document.getElementById("registerUserName").value;
    registeredUserNames.push(x);
}
console.log(registeredUserNames);