console.log("6)how to get item of javascript object  i)Using object keys method");
var car = {
    "make": "Toyoto",
    "model": "camry",
    "year": 2020,
    "color": "blue"
};
var key = Object.keys(car);
var lastkey = key[key.length - 1];
console.log("last property using key", lastkey, car[lastkey]);

console.log("ii)How to get last item in javascript object using object entries method");
var car = {
    "make": "Toyoto",
    "model": "camry",
    "year": 2020,
    "color": "blue"
};
var entries = Object.entries(car);
var lastEntries = entries[entries.length - 1];
console.log("Last property using key", lastEntries[0], lastEntries[1]);

console.log("7)How to use array that include and check and object against a property of an object");
var student = [
    {
        "id": 1,
        "name": "John Doe",
        "grad": "A"
    },
    {
        "id": 2,
        "name": "John smith",
        "grad": "B"
    },
    {
        "id": 3,
        "name": "Samuel Green",
        "grad": "C"
    },
];
function checkStudentExists(id) {
    return student.filter(student => student.id === id).length > 0;

}
console.log(checkStudentExists(2));
console.log(checkStudentExists(4));

console.log("8)How to add an object to an array in Javascript");
var fruits = ['apple', 'banana', 'orange'];
var newFruit = {
    "name": "Grape",
    "color": "purple"
};
fruits.push(newFruit);
console.log(fruits);

console.log("9)How to remove  duplicates from array of object using javascript");
var student = [
    { "id": 1, "name": "John Doe" },
    { "id": 2, "name": "Johne smith" },
    { "id": 1, "name": "John Doe" },
    { "id": 3, "name": "Samuel green" },
    { "id": 2, "name": "Johne smith" }
];
function removeDuplicates(arr) {
    return arr.filter((student, index, self) =>
        index === self.findIndex((t) => (
            t.id === student.id && t.name === student.name
        ))
    );

}
var uniqueStudent = removeDuplicates(student);
console.table(uniqueStudent);

console.log("10)How to get subset of javascript object properties");
var person = {
    "FirstName": "John",
    "LastName": "Doe",
    "age": 30,
    "city": "new york",
    "country": "USA"
};
var { FirstName, LastName } = person;
console.log(FirstName, LastName);
 