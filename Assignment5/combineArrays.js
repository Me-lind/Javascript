/**
 * Create a function called combineArrays that takes multiple arrays as arguments. 
 * The function should:
1.	Use the spread operator to combine all arrays into one.
2.	Remove duplicate elements from the combined array.
3.	Return the new array with unique elements.

 */
function combineArrays(...arrays) {
    const combinedArray = [].concat(...arrays)

    const uniqueArray = [...new Set(combinedArray)];

    return uniqueArray;
}
//Test case
const arr1 = [1, 2, 3]
const arr2 = [3, 4, 5]
const arr3 = [5, 6, 7]
console.log(combineArrays(arr1, arr2, arr3));