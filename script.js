var a=Number(prompt("Enter a year"))
if(a%100==0){
if(a%400==0){
    console.log("Leap year")
}
}
else if(a%4==0){
    console.log("leap year");
}
else{
    console.log("not a leap year")
}
