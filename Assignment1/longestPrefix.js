function longestCommonPrefix(array){
    if(array.length === 0) return '';

    let prefix = array[0];

    for(let i=1; i<array.length; i++){
        while(array[i].indexOf(prefix) !==0){
            prefix = prefix.slice(0,prefix.length -1);
            if (prefix==='')return'';
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));     // ""
console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])); // "inters"
console.log(longestCommonPrefix(['apple', 'ape', 'april'])); // "ap"
console.log(longestCommonPrefix(['prefix', 'prefixes', 'preform'])); // "pre"
