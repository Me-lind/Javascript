function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function countPalindromes(str) {
    const palindromes = new Set();  // Use a Set to store unique palindromes

    // Generate all possible substrings
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.slice(i, j);  // Extract substring from i to j

            // Check if the current substring is a palindrome
            if (isPalindrome(substring)) {
                palindromes.add(substring);  // Add the palindrome to the Set
            }
        }
    }

    return palindromes.size;  // Return the count of unique palindromes
}

// Test cases
console.log(countPalindromes('ababa')); // Example output: 5 (a, b, aba, bab, ababa.)
console.log(countPalindromes('racecar')); // Example output: 7 (a, c, e, r, racecar, )
console.log(countPalindromes('aabb')); // Example output: 4 (a, b, aa, bb, aba)
console.log(countPalindromes('a')); // Example output: 1 (a)
console.log(countPalindromes('abc')); // Example output: 3 (a, b, c)
