/*
Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]
*/
function subsetOfString(str) {
    let subsets = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            subsets.push(str.slice(i, j));
        }
    }

    return subsets;
}

console.log(subsetOfString("dog"));
// Expected Output: ["d", "do", "dog", "o", "og", "g"]