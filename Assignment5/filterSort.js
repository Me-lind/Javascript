/*
Create a function called filterAndSort that takes an indefinite number of arguments.
The first argument should be a filter function, and the remaining arguments should be numbers. 
The function should:
1.	Use the rest operator to capture all arguments except the first one.
2.	Filter the numbers using the provided filter function.
3.	Sort the filtered numbers in ascending order.
4.	Return the sorted array of numbers.
*/
function filterAndSort(filterFn, ...numbers){
    const filteredNumbers = numbers.filter(filterFn);

    const sortedNumbers = filteredNumbers.sort((a, b) => a - b);
    
    return sortedNumbers;

}
//Test cases
const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven, 5, 3, 8, 6, 2));