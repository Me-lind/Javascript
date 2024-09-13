/*
Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

function objectToKeyValuePairs(obj) {
    return Object.entries(obj);
}

console.log(objectToKeyValuePairs(student));
