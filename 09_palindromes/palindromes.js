function palindromes(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the string and compare
    return cleanStr === cleanStr.split('').reverse().join('');
}



// Do not edit below this line
module.exports = palindromes;