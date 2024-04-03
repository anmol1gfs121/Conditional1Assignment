// Problem 1:
// Write a JavaScript program that compares two variables and prints the larger 
// one.

let a,b
a=parseInt(prompt("Enter first number : "))
b=parseInt(prompt("Enter second number : "))
if(a>b){
    console.log(a+" is greater ")
}
else if(a==b){
    console.log(a+" and " +b+ " is equal ")
}
else{
    console.log(b+" is greater ")
}