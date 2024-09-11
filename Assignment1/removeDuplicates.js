function removeDuplicates(str){
    const uniqueChars = [...new Set(str)];

    return uniqueChars.join('');

}
//test cases
console.log(removeDuplicates('programming'));
console.log(removeDuplicates('hello world'));
console.log(removeDuplicates('aaaaa'));
console.log(removeDuplicates('abcd'));
console.log(removeDuplicates('aabbcc'))