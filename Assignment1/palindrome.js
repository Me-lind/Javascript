function isPalindrome(str){
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('')
    return normalizedStr === reversedStr;
}
console.log(isPalindrome('A man, a plan, a canal, Panama')); //true
console.log(isPalindrome('Was it a car or a cat I saw?')); // true
console.log(isPalindrome('Hello, World!')); //false