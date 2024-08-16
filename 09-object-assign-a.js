let professor = {
    firstName: "Shreyes",
    lastName: "Mahajan",
    age: 45,
    pin: 425503,
    department: "computer science",
    certificates: ["Hacker Rank Participation", "Certification in IFE course", "Certificates in advance programming"],
    Degrees: {
        Engineering: "CSE",
        PHD: "ADV computing",
    }

}
console.log(professor);
console.log("===================5)=add a new property 14 years new experience===========================");
professor.totalExperience = 14;
console.log(professor);

console.log("===========6)Modifying existing property==========");
professor.age = 50;
console.log(`Age is modify ${professor.age}`);
console.log(professor);


console.log("========7) add Oracal certified on 2nd index====");
professor.certificates.splice(2, 0, "Oracal Certified");
console.log(professor.certificates);

console.log("===========8) log the last element of array=======");

console.log(professor.certificates[3]);

console.log("============9)Traverse the array using for loop=====");

for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key},${element}`);

    }
}

console.log("===========10)log complete Oject on console on for loop=====");
for (const keys in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, keys)) {
        const elements = professor[keys];
        console.log(`${keys},${elements}`);

    }
}