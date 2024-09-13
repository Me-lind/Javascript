/*
Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
*/
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
function swapKeysAndValues(obj) {
    let swapped = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            swapped[obj[key]] = key;
        }
    }
    return swapped;
}

console.log(swapKeysAndValues(student));
