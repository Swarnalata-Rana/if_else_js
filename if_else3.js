let a= require("readline-sync");
var number=a.questionInt("enter a number");
if(number%5==0 && number%15==0){
   console.log("Divisible by both");
}else{
   console.log("Not divisible by both");
}