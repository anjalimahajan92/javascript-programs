
console.log("===============1================");


const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(array);
let result = array.length;
console.log(result);

console.log("===============2================");

const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
arrayNumbers[0];
arrayNumbers[arrayNumbers.length - 1];
console.log(`First and Last elements in arrayNumbers ${arrayNumbers[0]},${arrayNumbers[arrayNumbers.length - 1]}`);

console.log("===============3================");

const arrayNumbers1 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers1);
console.log(" Log the Third last elements ");
arrayNumbers1[arrayNumbers1.length - 3];
console.log(arrayNumbers1[arrayNumbers1.length - 3]);

console.log("===============4================");


let arrayNumbers2 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("All Even numbers in array are :");
for (const element of arrayNumbers2) {
    if (element % 2 == 0) {

        console.log(element);


    }
}

console.log("===============5================");

let arrayNumbers3 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("All odd numbers in array are :");

for (const elements of arrayNumbers3) {
    if (elements % 2 == 1) {

        console.log(elements);


    }
}

console.log("===============6===============");

let arrayNumbers4 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("The numbers are multiple of 5");
for (const result in arrayNumbers4) {
    if (result % 5 == 0) {
        console.log(result);


    }
}

console.log("===============7================");

let arrayNumbers5 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("Is number 115 availble in arrayNumbers5 ? ");

for (const greet in arrayNumbers5) {
    if (arrayNumbers5.includes(115)) {
        console.log("true");


    }
    else {
        console.log("false");

    }
}


console.log("===============8================");

let arrayNumbers6 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("Is number 23 availble in arrayNumbers6 ? ");
for (const findNumber in arrayNumbers6) {
    if (arrayNumbers6.includes(23)) {
        console.log("True");


    }
    else {
        console.log("False");

    }
}

console.log("===============9================");

let arrayNumbers7 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];


console.log(arrayNumbers7);
const newArray = arrayNumbers7.splice(3, 0, 55, 66);
console.log("Insert number 55,66 at the index 3:");
console.log(arrayNumbers7);

console.log("===============10================");

let arrayNumbers8 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers8);
console.log("Delete 3 elements starting from index4");
const arrayList = arrayNumbers8.splice(4, 3)
console.log(arrayNumbers8);
