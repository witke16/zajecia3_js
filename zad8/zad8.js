// anagram
function sortAlphabet(text) { // source: https://stackoverflow.com/questions/30912663/sort-a-string-alphabetically-using-a-function
    return text.split('').sort().join('');
};
function anagram(val1,val2){

    let length1 = val1.length;
    let length2 = val2.length;
    if (length1 != length2) return false; 

    val1=sortAlphabet(val1);
    val2=sortAlphabet(val2);
   // console.log(val1)
    //console.log(val2)
        return val1 === val2
    // Compare sorted strings
    for (let i = 0; i < length1; i++)
        if (val1[i] != val2[i])
            return false;

    return true;


}

console.log(anagram("silent","listen"))
console.log(anagram("rower","stopa"))