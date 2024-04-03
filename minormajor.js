// Problem 2:
// Write a JavaScript program that assigns a value to a variable representing age. 
// If the age is less than 18, print "You are minor"; otherwise, print "You are an 
// adult".

var Age = parseInt(prompt("Enter your age"))
if(Age<18){
    console.log("You are a children because your age is : " +Age)
}
else if(Age>=18 && Age<=60){
    console.log("You are minor in age beacuse your age is : " +Age)
}
else{
    console.log("You are a senior citizen because your age is : " +Age)
}