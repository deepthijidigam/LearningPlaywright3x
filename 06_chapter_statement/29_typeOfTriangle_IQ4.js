let side1 = 10;
let side2 = 10;
let side3 = 10;

if(side1 === side2 && side1 === side3) {
    console.log("Equilateral");
}
else if (side1 === side2 || side1 === side3 || side2 === side3)
     {
    console.log("Isosceles");
}
else 
    console.log("Scalen");