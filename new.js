function stringHandsOn()
{

    var strn=`Hey  you are doing   good,keep it up`;
    console.log(strn);
    console.log(strn.length);
    var strn= "  Hey  you are doing   good,keep it up        ";
    var strnLength = strn.length;
    console.log("Before string trim length is: ", strnLength);
    
    var strnAfterTrim =strn.trim();
    var strnAfterTrimLength= strnAfterTrim.length;
    console.log("After string trim length is: ", strnAfterTrimLength);
    console.log(strnAfterTrim);
    
    console.log("Total number of spaces are- ",strnLength- strnAfterTrimLength);
   var charAt0 =strnAfterTrim.charAt(0);
    console.log(`The first charter is ${charAt0}`);   
var 
    





}stringHandsOn();