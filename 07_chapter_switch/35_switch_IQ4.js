let score = 85;
// no break in each case
switch(true) {
    case (score >= 95):
        console.log("Top performer");
        break;
    case (score >= 85): 
        console.log("Excellent");
        break;
    case (score >= 75): 
        console.log("Good Work");
        break;
    default:
        console.log("Unstisfactory");
        break;
}