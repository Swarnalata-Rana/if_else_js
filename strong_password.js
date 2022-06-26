let num=require("readline-sync")
let strongPassword=num.question("enter no:-")
if  (strongPassword.length>=6 && strongPassword.length<=12){
    if(strongPassword>"A" && strongPassword<"Z" || strongPassword>"a" && strongPassword<"z" || strongPassword>0 && strongPassword<9 || strongPassword=="@" && strongPassword=="#"){
        console.log("strong password")
    }
    else{
        console.log("not strong password")
    }

}
else{
    console.log("invalid")
}