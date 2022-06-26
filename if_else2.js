let a=require("readline-sync")
let leap=a.questionInt("enter a no")
if (leap%4==0 && leap%100!=0 || leap%400==0){
    console.log("leap year")
}
else if(leap%4!=0 && leap%100==0 || leap%400!=0){
    console.log("not leap year")
}