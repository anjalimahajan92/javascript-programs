console.log("========1============");
//=======1=======//
function greaterNumber(n1,n2)
{
 var result= n1>=n2? true:false;
 console.log(`Greater number is ${result}`);
 
}
greaterNumber(10,-10);
greaterNumber(800,899);


console.log("=============2============");
//============2============//
function isEvenOrOddNum(num)
{
var result=num%2==0? true:false;
console.log(`Enter number is even ${result}`);

}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(101);
isEvenOrOddNum(0);





console.log("===================3============");
//=========3=======//
function wordLength(word)
{
console.log(word);
    var res=word.length;
    var result=res%2==0?true:false;
    console.log(`The word length is even ${result}`);
    


}
wordLength("JavaScript")
wordLength("Developer")
wordLength("Google")
