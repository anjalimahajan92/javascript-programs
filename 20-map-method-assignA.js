const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("===========1 add 10 into each element===============");
let newArray = [];
let sum = 10;
const array = arrayNumbers.map((element) => {
    return element + 10;
});
console.log(array);

console.log("=======2 find cube of each array element========");
let cubeArray = arrayNumbers.map((element) => {
    return element * element * element;
});
console.log(cubeArray);

console.log("======3 add the index value add the corresponding array element=======================");
let add = arrayNumbers.map((element, index) => {
    return element + index;


});
console.log(add);
