/*
Create a function named extractProperties that accepts the following:
•	An array of objects.
•	A list of property names.
The function should:
•	Use the spread operator to create a new array of objects with only the specified properties.
•	Return the new array of objects.
*/
function extractProperties(objects, ...properties){
    return objects.map(obj => {
        return properties.reduce((newObj, prop) => {
            if (obj.hasOwnProperty(prop)) {
                newObj[prop] = obj[prop];
            }
            return newObj;
        }, {});
    });

}
//Test case
const objects = [{a:1, b:2, c:3}, {a:4, b:5, c:6}]
console.log(extractProperties(objects, 'a','c'));