


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