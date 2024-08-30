console.log("====1) check palindrom =======");


function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    return true;
  }

  return false;
}
let result1 = isPalindrome("madam");
console.log(`string "madam" is palindrom :${result1}`);
let result2 = isPalindrome("dad");
console.log(`string "dad" is palindrom :${result2}`);
let result3 = isPalindrome("civil");
console.log(`string "civil" is palindrom :${result3}`);

console.log("  =========2) check Anagram==");


function checkAnagram(str1, str2) {
  let str3 = str1.toLowerCase();
  let str4 = str2.toLowerCase();
  let result1 = str3.split("").sort().join("");
  let result2 = str4.split("").sort().join("");

  if (result1 == result2) {
    return true;
  }
  return false;
}
let result = checkAnagram("Silent", "Listen");
console.log(`string "Silent,Listen" is Anagram:${result}`);

let result4 = checkAnagram("Hello", "World");
console.log(`string "Hello,World" is Anagram:${result4}`);

let result5 = checkAnagram("Such", "much");
console.log(`string "Such,much" is Anagram:${result5}`);
 