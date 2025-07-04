// // ***********************************************
let number=+prompt("Enter the number");
if(number% 2===0){
    console.log("It is a even number");
    
}else{
    console.log("It is a odd number");
}

// //*****************************************************
let NUM =+prompt("Enter the number ");
if(NUM >0){
    console.log(" It is a positive number");
    
}else{
    console.log("It is a negtive number");

}

// //*****************************************************
let marks =+prompt("Enter your maths marks");
if (marks>90) {
    console.log("Excellent");
    
}else if (marks>75) {
    console.log("Good");
    
}else if (marks>50) {
    console.log("Average");
    
}else{
    console.log("Poor");
    
}

// // ******************************************************
let Age=+prompt("Enter your Age");
if(Age>=18){
    console.log("You are eligible for the vote");
    
}else{
    console.log("You are  not eligible for the vote");

}
// //****************************************************
let num1=+prompt("Enter the number");
if (num1/5) {
    console.log("It is divisible by 5");
    
}else{
    console.log("It is  not divisible by 5");
    
}
// ***************************************************
let character = prompt("Enter your Alphabat");
if (character.match(/[aeiou]/)) {
    console.log("It is a vowel"); 
}else{
    console.log("It is a consonant");

}
// *******************************************************
let a=10;
b=5;
if(a>b){
    console.log(a+" is greater than "+b);
    
}
// ******************************************************
const S="Hello World!";
if(S.length > 5){
    console.log("It has more than 5 characters");
    
}

// *******************************************************
const password= +prompt("Enter your password");
if (password.length < 8) {
    console.log("Password is too short. It should be at least 8 characters ");
}else{
   console.log("Password is strong");
    
}
// // *****************************************************
let UserAge=+prompt("Enter your Age");
if(UserAge>=60){
    console.log("You can get discount");
    
}else{
    console.log("You can't get discount");
}
// ****************************************************
let A= prompt("Enter a character");
if (A.match(/[A-Z]/)) {
    console.log("It is upper case"); 
}else{
    console.log("It is lowwer case");
    
}

//***************************************************
let email= prompt("Enter your email");
if (email.includes("@")) {
    console.log("Valid Email"); 
}else{
    console.log("Invalid Email");
    
}


// ******************************************************
 let Day = prompt("Enter your Day");
if (Day==="Saturday"||Day==="Sunday") {
    console.log("It is a Weekend"); 
}else{
    console.log("It is a Week Day");
}