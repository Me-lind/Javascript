function areAnagrams(str1,str2){
    
    const normalize =(str) => str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    const normalizedstr1= normalize(str1)
    const normalizedstr2= normalize(str2)

    const sortedStr1 = normalizedstr1.split('').sort().join('');
    const sortedStr2 = normalizedstr2.split('').sort().join('');

    return sortedStr1 === sortedStr2

}
console.log(areAnagrams('Listen','Silent')); //true
console.log(areAnagrams('Hello', 'World')); //false
console.log(areAnagrams('The classroom', 'School Master'))