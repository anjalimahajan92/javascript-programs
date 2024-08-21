console.log("======WAP to find the length or total number of character of strings==================================");
const str1 = "Hello World";
console.log(str1);
let stringLength = str1.length;
console.log(`str1 length is:${stringLength}`);

const str2 = "JavaScript is the language of internet";
console.log(str2);
let strLength2 = str2.length;
console.log(`str2 length is:${strLength2}`);


console.log("==2)=WAP to print or log the last character of the given string=======================")
function getLastCharacter(str) {
    console.log(str);
    let strChar = str.charAt(str.length - 1);
    console.log(`Last charater of given string is :${strChar}`);


}
getLastCharacter("Hey my friend,Programming Language");
getLastCharacter("I am learning Logical programs");
getLastCharacter("Angular");


console.log("=======3)WAP to print or log the first character of given string========");
function lastCharacter(sentence) {
    console.log(`String is:${sentence}`);
    let sentenceCharater = sentence.charAt(0);
    console.log(`The first charater of  given string is ${sentenceCharater}`);

}
lastCharacter("React");
lastCharacter("Elon Musk");
lastCharacter("Apple founder is stew job");


console.log("=======4)WAP to check given string contains word UI or not=======");
function stringCheck(parameter) {
    console.log(`string is:${parameter}`);

    if (parameter.includes("UI")) {
        console.log(` string contain "UI" `);
    } else {
        console.log(`string does not contain "UI"`);
    }
}
stringCheck("React-UI Developer");
stringCheck("UI developer");
stringCheck("Frontend and Backend Technologies");


console.log("====5)WAP to How do you split a string into an array of substrings?");
function subString(params) {
    console.log(`Substring is ${params}`);
    let splitString = params.split(",");
    console.log(splitString);
}
subString("apple,orange,banana");
subString("Stew,Bill,Jenny,Elon");

console.log(" 6 A)Reverse string:Recommended to ues define the function");

function reverseString(parameter) {
    console.log(`string is: ${parameter}`);
    let newSplit = parameter.split("").reverse().join("");
    console.log(newSplit);

}
reverseString("Software");
reverseString("UI Developer");



console.log(" 6 B)Reverse string without using predefined methods");

function show(str) {
    let reverseString=" ";
    for (let index =str.length-1; index >=0 ; index--) {
        reverseString  =reverseString+str[index];
          
    }
return  reverseString;
}
let result=show("Web Developer");
console.log(result);

let resultNew=show("Billon Dollar");
console.log(resultNew);

let resultShow=show("Java");
console.log(resultShow);


console.log(` 7) Program to count character "a"":Define a function charCount() with one arguments
    and call this function by passing below strings one by one.This function must return the char count.
    Note:Count the both small case "a" or capital case "A" character`);


    function  charCount(str) {
        console.log(`String is ${str}`);
        let count=0;
      for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (str[index]=='a'|| str[index]=='A') {
            count++;
        }
      }
      return count;
}
  let result1= charCount("JavaScript");
   console.log(`count the Character 'a' and 'A' in string is:${result1}`);
   
let string2= charCount("Do or Die");
    console.log(`count the Character 'a' and 'A' in string is:${string2}`);
 let str3   =charCount("Learn with us,Job with us");
    console.log(`count the Character 'a' and 'A' in string is:${str3}`);
  let str4=  charCount("Empowering Dreams,Guaranteeing futures");
    console.log(`count the Character 'a' and 'A' in string is:${str4}`);
 let str5  = charCount("Anny,My favorite fruit is Apple");
    console.log(`count the Character 'a' and 'A' in string is:${str5}`);


 console.log("==8)program to count vowel=========================================");


const vowel = "aeiou";
function vowelCount(para) {
    let count = 0;
    for (let index = 0; index < para.length; index++) {
        let getCharacter = para.charAt(index);

        if (vowel.includes(getCharacter)) {
            count++;

        }
    }
    return count;
}
const resultCount = vowelCount("JavaScript");
console.log(`vowle count is:${resultCount}`);
const result2 = vowelCount("HTML and CSS");
console.log(`vowle count is:${result2}`);
const result3 = vowelCount("Language of Internet")
console.log(`vowle count is:${result3}`);
const result4 = vowelCount("I am UI Developer");
console.log(`vowle count is:${result4}`);
const result5 = vowelCount("Do or Die")
console.log(`vowle count is:${result5}`);


console.log("==9)program to find length of word=================================================");


function WordCount(word) {
  let wordSplit = word.split(" ");
let wordLength = wordSplit.length;
console.log(`word of the length is ${wordLength}`);

}
WordCount("JavaScript The language of Internet");
WordCount("Enhance your learning journey with Exclusive Add-ons");
WordCount("Beyound frameworks,Beyound imagination");
WordCount("I am passionate software developer")