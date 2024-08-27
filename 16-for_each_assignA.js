const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("==========1=============");
arrayNumbers.forEach((element, index) => {
    console.log(`Element is:${element}, index is:${index}`);
}
);

console.log("============2 find positive number and log on console===============");
arrayNumbers.forEach((element) => {
    if (element > 0)
        console.log(element);

});

console.log("==================3 negative numbers find========================");

let newArray = [];
arrayNumbers.forEach((element) => {
    if (element < 0)
        newArray.push(element);
});
console.log(newArray);

console.log("===================4 Even number find====================");
arrayNumbers.forEach((element) => {
    if (element % 2 == 0)
        console.log(`Even numbers are ${element}`);

});

console.log("==================5 find sum of arraynumbers======");

let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum + element;
});
console.log(sum);

arrayNumbers.forEach((element, index) => {
    if (index % 2 == 0)
        console.log(`Even index array values are: ${element}`);

});