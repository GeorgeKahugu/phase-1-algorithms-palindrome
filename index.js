function isPalindrome(str) {
  // Write your algorithm here
 str = str.toLowerCase();

 let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  } 
  return true;
}

console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("robot"));  // Output: false


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
