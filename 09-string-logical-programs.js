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
