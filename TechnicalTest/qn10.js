/*
Write a JavaScript function to retrieve all the values of an object's properties.
*/
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

function getAllValues(obj) {
    return Object.values(obj);
}

console.log(getAllValues(student));

