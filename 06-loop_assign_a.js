console.log(`======1)count the total number of vowel include small and capital vowel
    for using for loop`);

var greet = "I am very good IT Developer";
vowel = "aeiou";
counter = 0;
for (let index = 0; index < greet.length; index++) {

    var char = greet.charAt(index);
    var result = char.toLowerCase();

    if (vowel.includes(result)) {


        counter++;


    }


}
console.log(`Vowels count is ${counter}`);


console.log(`====2)Write a function to get sum of cube of number from 1 to 5======`);
sum = 0
for (let index = 0; index <= 5; index++) {
    var sum = sum + index * index * index;


}
console.log(`sum of cube is ${sum}`);

console.log(`======3)function to oddPosition charater and do not consider empty spaces`);

var oddPositionChar = function (sentence) {
    console.log(`Given string is :${sentence}`);
    for (let index = 0; index < sentence.length; index++) {
        var char = sentence.charAt(index);
        if (index % 2 == 1 && char != " ") {
            console.log(`charaters at odd position ${index}: ${char}`);

        }
    }




}
oddPositionChar("Hard work always pays back");
oddPositionChar("Soon I will be UI IT champ");