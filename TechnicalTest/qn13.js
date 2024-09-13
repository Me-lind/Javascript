/*
Write a JavaScript function to check whether an object contains a given property.
*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}
console.log(hasProperty(student, 'name'))
console.log(hasProperty(student, 'address'))