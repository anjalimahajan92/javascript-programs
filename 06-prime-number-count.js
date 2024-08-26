


console.log("==================count prime num=========");

let count = 0;
function checkPrime(array) {
    for (const item of array) {
        var result = isPrime(item);
        if (result == true) {
            console.log(`prime no is:${item}`);
            count++;
        }
    }
}

function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;

        }

    }
    return true;
}
checkPrime([3, 9, 7, 6, 19, 29, 53]);

console.log("=====11)space count in string====");

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