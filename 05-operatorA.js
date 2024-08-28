console.log("=========================1====================");

function squareOfWordLength(sentence)
{
 console.log(`Given sentence is :${sentence}`);
var result =sentence.split("  ");
var len=result.length;
var Square=len *len;
return Square;
}
var result=squareOfWordLength("JavaScript");
 console.log(` Square of word length is: ${result}`);

var result=squareOfWordLength("Google  Chrome");
 console.log(` Square of word length is: ${result}`);
 
var result=squareOfWordLength("Web  Developer  Smart");
 console.log(` Square of word length is:${result}`);

// ======2======//
console.log("=========================2====================");
function showDivision()
{
var greet=" I  am  Angular  Developer";
 console.log(greet);
var greetlength=greet.length;
 console.log(`The string length is :${greetlength}`);


var Aftersplit =greet.split(" ");

var Aftersplitresult =Aftersplit.length;
 
var result=greetlength/Aftersplitresult;

 return result;
}
var result=showDivision();
console.log(`The result after division is :${result}`);


//============3============//
console.log("=============3==============");


function showMultiplication()
{
var greet=" I  am  Angular  Developer";

     console.log(greet);

 var greetlength=greet.length;

  console.log(`The string length is ${greetlength}`);


 var Aftersplit =greet.split(" ");

 var Aftersplitlength =Aftersplit.length;
 
var result=greetlength * Aftersplitlength;

 return result;
}
 var result=showMultiplication();
console.log(`The result after multiplication is ${result}`);


