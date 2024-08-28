const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollNumbers);

console.log("=======1) =Reverse array=========");
let arrayRollno=arrayRollNumbers.reverse();
console.log(arrayRollno);

console.log("=======2)=Use sort method without any custom logic");
let arrayRollno2=arrayRollNumbers.sort();
console.log(arrayRollno2);

console.log("======3) sort array in assending order using custom logic");
let arrayRoll3=  arrayRollNumbers.sort((n1,n2)=>{
     return n1>n2?1:-1;
        

  });
  console.log(arrayRoll3);
  
console.log("=======4) Find the greatest number from the array====");

let arrayRoll5=  arrayRollNumbers.sort((n1,n2)=>{
    return  n1>n2?1:-1;
       

 });
 console.log(arrayRoll5);
let result= arrayRoll5[arrayRoll5.length-1];
 console.log(`Greater number in array :${result}`);


  console.log(" ===========5 Find the smallest number from the array===========");
  let smallNumber=  arrayRoll5[0];
 console.log(`Smallest no in array: ${smallNumber}`);
 

 console.log(" =========6 remove duplicate frm array===========");

 console.log(arrayRollNumbers);
 console.log("After remove duplicates in array ,array is:");
  let newArray=  [...new Set(arrayRollNumbers)];
 console.log(newArray);
 