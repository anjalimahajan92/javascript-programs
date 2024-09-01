console.log("=====1)Print present number in array====================");


let array = [1, 2, 3, 4, 5, 6];
console.log(array);

console.log("==2)=to print sum of all elements in array========");
let arrayTwo = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let index = 0; index < arrayTwo.length; index++) {
    const element = arrayTwo[index];
    sum = sum + element;
}
console.log(`Sum of array element ${sum}`);



console.log("===4) program to sort element in ascending order===");
let arrayFour = [4, 8, 5, 3, 2, 7, 1, 9, 3];
console.log(arrayFour);
console.log("After sorting array is:");

let arrayFournew = arrayFour.sort((n1, n2) => {
    return n1 > n2 ? 1 : -1;
});
console.log(arrayFournew);


console.log("=====5)Program to sort element in descending order ");
let arrayFive = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let arrayFivenew = arrayFive.sort((e1, e2) => {
    return e1 > e2 ? -1 : 1;
});
console.log(arrayFivenew);


console.log(("=======6)Program to find third largest number in array======"));
let arraysix = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let arraySixs = arraysix.sort((n1, n2) => {
    return n1 > n2 ? -1 : 1
});
console.log(arraySixs);

console.log(arraySixs[2]);


console.log(("=======7)Program to find Second largest number in array"));
let arrayseven = [4, 8, 5, 3, 2, 7, 1, 9, 3];


let arraySevens = arrayseven.sort((n1, n2) => {
    return n1 > n2 ? -1 : 1
});
console.log(arraySevens);
console.log(arraySevens[1]);

console.log("=========8) find largest number in array==============");
let arrayEigth = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let arrayEigths = arrayEigth.sort((n1, n2) => {
    return n1 > n2 ? -1 : 1
});
console.log(arrayEigth);
console.log(arrayEigths[0]);


console.log("=====9)program to find second Smallest number==========");
let arrayNine = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let arrayNines = arrayNine.sort((n1, n2) => {
    return n1 > n2 ? 1 : -1;
});
console.log(arrayNines);
console.log(arrayNines[1]);

console.log("======10 program to find Smallest number===============");
let arrayTen = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let arrayTens = arrayTen.sort((n1, n2) => {
    return n1 > n2 ? 1 : -1;
});
console.log(arrayTens);
console.log(arrayTens[0]);


console.log("========11)Program to remove duplicates elements in array========");
let arrayEleven = [4, 8, 5, 3, 2, 7, 1, 9, 3];
console.log(arrayEleven);
console.log("After removing duplicates in array is:");
let arrayElevens = [...new Set(arrayEleven)];
console.log(arrayElevens);

console.log("=====12 program to print even and odd number in array===========");
function evenoddNumbers(arr) {
    let oddNumbers = [];
    let evenNumbers = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            evenNumbers.push(arr[index]);

        }
        else {
            oddNumbers.push(arr[index]);
        }

    }
    console.log(evenNumbers);
    console.log(oddNumbers);


}
let arrayTwel = [4, 8, 5, 3, 2, 7, 1, 9, 3];
console.log(arrayTwel);
console.log(" Even and odd numbers in array");
evenoddNumbers(arrayTwel);


console.log("===13) Program to copy all elements from one array to another array");

let arrayThirteen = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let newArray = [...arrayThirteen];
console.log(newArray);


console.log("=====14) program to find frequency of each element in array=======");

let arrayFourteen = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let frequency = {};
for (let index = 0; index < arrayFourteen.length; index++) {
    const element = array[index];
    if (frequency[element]) {
        frequency[element]++;
    }
    else {
        frequency[element] = 1;
    }
}
console.log(frequency);


console.log("=====15)Program to left rotate element of an array============");
let arrayFifteen = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let arrayFifteens = arrayFifteen.slice(1);
arrayFifteens.push(10);
console.log(arrayFifteens);


console.log("========17) program to print elements of an array=====");
let arraySeventeen = [4, 8, 5, 3, 2, 7, 1, 9, 3];
let arraySeventeens = arraySeventeen.filter((element) => {
    return element
});
console.log(arraySeventeens);


console.log("=====18)program to print element of an array in reverse order");
let arrayEigthteen = [4, 8, 5, 3, 2, 7, 1, 9, 3];

for (let index = 8; index > 0; index--) {
    let element = arrayEigthteen[index];
    console.log(element);


}


console.log("==19)Program to print element of an array in even position=");

let arrayNineteen = [4, 8, 5, 3, 2, 7, 1, 9, 3];
for (let index = 0; index < arrayNineteen.length; index++) {
    if (index % 2 == 0) {
        console.log(`Element in even position are:${arrayNineteen[index]}`);

    }

}

console.log("==20)Program to print element of an array in odd position");
let arrayTwenty = [4, 8, 5, 3, 2, 7, 1, 9, 3];
for (let index = 0; index < arrayNineteen.length; index++) {
    if (index % 2 == 1) {
        console.log(`Element in odd position are:${arrayNineteen[index]}`);

    }

}

