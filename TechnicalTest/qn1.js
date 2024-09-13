/*Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/


var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
let keys = Object.keys(student);

let keysString = keys.join(',');

console.log(keys)
console.log(keysString)