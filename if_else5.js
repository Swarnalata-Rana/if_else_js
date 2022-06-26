let r = require("readline-sync");
var varX=r.questionInt("enter a number");
var vary=r.questionInt("enter a number");
if(varX%vary==0){
   console.log("Divisible");
}
else{
   console.log("Not divisible");
}