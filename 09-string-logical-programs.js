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
WordCount("I am passionate software developer");






console.log("===========10  =====");
function duplicate(params) {
let mainOp={};
 for (let index = 0; index < params.length; index++) {
    const elements = params.charAt(index);
    let count=0;
    for (let j =0; j < params.length;j++) {
  let char= params.charAt(j)
        if(char==elements){
            count++;
        }
    }
    if(count>1){
        mainOp[elements]=count;
    }

 }
for (const key in mainOp) {
   
        const result = mainOp[key];
        console.log(`${key}-${result}`);
        
    }
}
    
duplicate("Banana");
duplicate("Apple");
duplicate("Software Developer");

console.log("=====11) check string is palindrom====");
function isPalindrome(n1) {
    let newResult = n1.split("").reverse().join("");
    if (n1 == newResult) {
        return true;
    }
    else {
        return false;
    }

}
let stringShow1 = isPalindrome("madam");
console.log(`String "madam" ispalindrom:${stringShow1}`);

let stringShow2 = isPalindrome("banana");
console.log(`String "banana" ispalindrom:${stringShow2}`);
let stringShow3 = isPalindrome("radar");
console.log(`String "radar" ispalindrom:${stringShow3}`);
let stringShow4 = isPalindrome("civil");
console.log(`String "civil" ispalindrom:${stringShow4}`);
let stringShow5 = isPalindrome("noon");
console.log(`String "noon" ispalindrom:${stringShow5}`);
let stringShow6 = isPalindrome("stats");
console.log(`String "starts" ispalindrom:${stringShow6}`);



console.log("=========12)  is Anagram========");
function isAnagram(str1, params2) {
    let result2 = str1.split("").sort().join("");
    let result3 = params2.split("").sort().join("");
    if (result2 == result3) {
        return true;
    }
    return false;
}
let resultShow1 = isAnagram("listen", "silent");
console.log(`String "listen","silent" are Anagram :${resultShow1}`);

let resultShow2 = isAnagram("heart", "earth");
console.log(`String "heart","earth" are Anagram :${resultShow2}`);
let resultShow3 = isAnagram("debit card", "credit card");
console.log(`String "debit card","credit card" are Anagram :${resultShow3}`);



console.log("===13)Remove character from string=======");
function remove(str1) {
    
    
 let newstr1= str1.split("");
 let newArray= newstr1.splice(4,1,);

 let result=newstr1.join("");
 console.log(result);
 
 
 
}
remove("Java@script");
remove("softyware");
remove("code mind")

console.log("==14===============");
function reverserWord(s1) {
    let WordCount = s1.split("").reverse().join("");
    return WordCount;

}

let result7 = reverserWord("Arise!Awake! and stop not until the goal is reached");
console.log(result7);

let result8 = reverserWord("Learn with us,Job with us");
console.log(result8);



console.log("====15) Swapping String============");
function swapWords() {
    let wordOne = "Angular";
    let wordTwo = "React";
    [wordOne, wordTwo] = [wordTwo, wordOne]
    console.log(`After swapping`);
    console.log(`WordOne is :${wordOne}`);
    console.log(`WordOne is :${wordTwo}`);

}
swapWords();

console.log("=====16) count spaces=============");
function spaceCount(key) {
    console.log(key);
    let counter = 0;
    for (let index = 0; index < key.length; index++) {

        let keyChar = key.charAt(index);
        if (keyChar == " ") {
            counter++;
        }

    }
    return counter;
}
let spaceCount1 = spaceCount("Revision is the mother of success");
console.log(`total Spaces are:${spaceCount1}`);

let spaceCount2 = spaceCount("JavaScript is the language of internet world");
console.log(`total Spaces are:${spaceCount2}`);


console.log("========18)Program to count consonants")
function consonantsCount(args) {

    let count = 0;
    for (let index = 0; index < args.length; index++) {
        let char = args.charAt(index).toLowerCase();
        if (char >= 'a' && char <= 'z' && !'aeiou'.includes(char))
            count++;
    }
    return count;
}
let resultCount1 = consonantsCount("JavaScript");
console.log(`Number of consonents is:${resultCount1}`);

let resultCount2 = consonantsCount("HTML and CSS");
console.log(`Number of consonents is:${resultCount2}`);

let resultCount3 = consonantsCount("Language of Internet");
console.log(`Number of consonents is:${resultCount3}`);

let resultCount4 = consonantsCount("I am UI Developer");
console.log(`Number of consonents is:${resultCount4}`);

let resultCount5 = consonantsCount("Do or Die");
console.log(`Number of consonents is:${resultCount5}`);


console.log();
