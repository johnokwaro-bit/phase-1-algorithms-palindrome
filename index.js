function isPalindrome(word) {
  // Write your algorithm here
  //define a regular expression
  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
 // remove punctuation and convert to lower case.
 word = word.replace(regex, '').toLowerCase();
 // Compare the string with it's reversed version in a if-statement.
 if (word === word.split('').reverse().join('')){
  return true;
 }
 else 
 return false;

}

/* 
  Add your pseudocode here
//define a regular expression contatining non-alphanumeric
//remove non-alphanumeric characters
//convert to lower case
//compare string with its reversed in a if-statement



/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
