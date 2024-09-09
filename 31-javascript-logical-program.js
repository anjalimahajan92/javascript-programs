console.log("==1)Write a javascript program to calculate sum of two numbers ");
function add(a, b) {
    return a + b;
}
let result = add(2, 4);
console.log(`addition is :${result}`);

console.log("===2)program to find maximum number in array");
Array = [10, 5, 20, 50, 70];
let newArray = Array.sort((n1, n2) => {
    return n1 > n2 ? 1 : -1;
});
console.log(newArray);
let maxNum = newArray.splice(4);
console.log(maxNum);

console.log("=====3)program to check given string is palindrome======");
function checkPalindrome(params) {
    let newString = params.split("").reverse().join("");
    if (newString == params) {
        return true;
    }
    else {
        return false;
    }

}
let newResult = checkPalindrome("abcabc");
console.log(newResult);
let newResult2 = checkPalindrome("madam");
console.log(newResult2);

console.log("===4)write a program for reverse given string===");
function reverseString(params) {
    let result = params.split("").reverse().join("");
    console.log(result);

}
reverseString("javascript");
reverseString("Hello world");

console.log("====5)write a program that takes new array that takes even numbers====");
function even(params) {
    console.log(params);
    let arraySecond = [];
    for (const element of params) {
        if (element % 2 == 0) {
            arraySecond.push(element);
        }


    }
    console.log(arraySecond);

}
even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



console.log("========6)Write a program to find fatorial of a number=====================");
function calculateFactorial(number) {
  
    let result = 1;

    
    for (let i = 1; i <= number; i++) {
        result *= i; 
    }

    
    return result;
}


let numAssign= 5; 
console.log(`The factorial of ${numAssign} is ${calculateFactorial(numAssign)}`);

console.log("======7)Program to check given number is prime or not======");




function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;

        }

    }
    return true;
}
let newResult4=isPrime([3, 9, 7, 6, 19, 29, 53]);
console.log(newResult4);

console.log("===8)program to generate fibonacci series======");
   
function generateFibonacci(n) {
    
    let fibSeries = [];

    
    let a = 0, b = 1;

    
    for (let i = 0; i < n; i++) {
        fibSeries.push(a); 
        let next = a + b;  
        a = b;             
        b = next;         
    }

    return fibSeries; 
}


let terms = 10;
console.log(`Fibonacci series with ${terms} terms: ${generateFibonacci(terms).join(', ')}`);