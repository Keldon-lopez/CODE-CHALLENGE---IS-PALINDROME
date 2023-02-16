// Write your code below
const isPalindrom = (word) => {
   let reversed = word.split("").reverse().join("");
   if (word === reversed) {
    return true;
   } else {
    return false
   }
}

console.log(isPalindrom("Racecar"));