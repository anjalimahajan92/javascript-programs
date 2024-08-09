var interviewCheck = function (gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
        console.log(`congrates ${candidateName} you are eligible for TCS interview`);


    } else {
        console.log(`Unfortunately ${candidateName} you are not eligible for TCS interview`);
    }


}
interviewCheck(80, 86, 90, "Anjali");
interviewCheck(70, 65, 55, "jenny");
interviewCheck(60, 79, 88, "Monali"); 