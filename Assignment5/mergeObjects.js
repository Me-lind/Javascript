/**
 * Create a function called mergeObjects that accepts an indefinite number of objects. 
 * The function should:
1.	Use the spread operator to merge all objects into one.
2.	Ensure that if multiple objects contain the same key, the last object's value for that key should be used.
3.	Return the merged object.

 */
function mergeObjects(...objs) {
    // const mergedObject = {...objs}
    const mergedObject = Object.assign({}, ...objs)
    return mergedObject
}

//Test cases
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }
console.log(mergeObjects(obj1, obj2));
