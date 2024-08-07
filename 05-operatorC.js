function  interviewCheck(gradScore,hscScore,sscScore,candidateName)
{
    var result = gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ?
        `congrates ${candidateName} you are eligible for interview` :
        `${candidateName} are not eligible for interview`;
    console.log(result);
    


}
interviewCheck(80,86,90,"anajali");
interviewCheck(70,65,55,"Monali");
interviewCheck(60,79,88,"sonali");