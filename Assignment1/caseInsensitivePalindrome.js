function isCaseInsensitivePalindrome(str){

    const normalizedStr = str.toLowerCase();

    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}
//Test cases
console.log(isCaseInsensitivePalindrome('Aba')); // true
console.log(isCaseInsensitivePalindrome('Racecar')); // true
console.log(isCaseInsensitivePalindrome('Palindrome')); // false
console.log(isCaseInsensitivePalindrome('Madam')); // true
console.log(isCaseInsensitivePalindrome('Hello')); // false
