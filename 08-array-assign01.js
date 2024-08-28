const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("=============1=============");

console.log(fruits);
fruits[0];
let result = fruits[fruits.length - 1];
console.log(`The first element is : ${fruits[0]} and last elements is :${result}`);

console.log("=============2================");

const fruitOne = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruitOne);
fruitOne.unshift("papaya");
console.log(`Inserting  element Papaya At the begining:`);
console.log(fruitOne);

console.log("=============3================");

const fruitTwo = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruitTwo);
fruitTwo.splice(3, 1);
console.log(` After remove "Mango" from array, Array is:`);
console.log(fruitTwo);

console.log("=============4================");

const fruitThree = ["Banana", "Orange", "Apple", "Water Melon"];
console.log(fruitThree);
console.log(` Insert element "Pineapple" at the last position:`);
fruitThree.push("Pineapple");
console.log(fruitThree);


console.log("=============5================");

const fruitFour = ["papaya", "Banana", "Orange", "Apple",  "Water Melon", "pineapple"];
console.log(fruitFour);
console.log(`Insert an element-'Dragon Fruit before "Water Melon"`);
fruitFour.splice(5, 0, "Dragon");
console.log(fruitFour);

console.log("=============6================");

const fruitFive = ["papaya", "Banana", "Orange", "Apple", "Water Melon", "pineapple"];
console.log(fruitFive);
console.log(`Relpace an element "Orange" with "Kiwi"`);
fruitFive.splice(2, 1, "Kiwi");
console.log(fruitFive);

console.log("=============7================");

let fruitSix = ["papaya", "Banana", "Kiwi", "Apple", "Water Melon", "pineapple"];
console.log(fruitSix);
console.log(`Log the elements starting from index 1 to 4`);
let sliceElement = fruitSix.slice(1, 5);
console.log(sliceElement);



console.log("=============8================");

let fruitSeven = ["papaya", "Banana", "Kiwi", "Apple", "Water Melon", "pineapple"];
console.log(fruitSeven);
console.log(`Only select Last 3 elements and log on console.Use the length property`);
let fruitAdd = fruitSeven[fruitSeven.length - 3];
console.log(fruitAdd);







