var voteEligibility = function (age) {
    console.log(age)

    if (age == 0 || age < 0 || age >= 130 || age == null) {
        console.log(`Invalid data`);

    } else {
        console.log(`valid data : ${age}`);
        if (age >= 18) {
            console.log(`The person Eligiable for vote`);

        } else {
            console.log(`The person is not  Eligiable for vote`);
        }
    }





}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);