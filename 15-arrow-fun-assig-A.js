console.log("============1================");
 let show=()=>{
    console.log("Good Morning,Today is Monday");
    
}
show();


console.log("==========2=================");

let multiply = (n1, n2,n3=1)=>{
    let result = n1*n2*n3;
    return result;
}
let mul = multiply(5, 5,2);
console.log(`Multiplication is: ${mul}`);
let mul2 = multiply(10,4);
console.log(mul2);


console.log("==============3=================");
let addition=(n1,n2,n3,n4,n5) =>{
  let result  = n1+n2+n3+n4+n5;
  return result;
}
let add1=addition(100,100,200,349,756);
console.log(`Addition is:${add1}`);

let add2=addition(" I am"," learning"," ES6"," features"," in depth");
console.log(`Addition or concatenation of string is:${add2}`);