let num =[10,20,30,40,50,60];
let sum=0;
for (let i = 0; i < num.length; i++) {
     sum += num[i];  
}
console.log("The sum of all numbers is",sum);
/////////////////////////////////////////////////////////////////////////

let cities=["Karachi" ,"Hydrabad","Islamabad"];
cities.push("Quetta","Faisalabad");
console.log(cities);
// ///////////////////////////////////////////////////////////////////////
let fruits=["Apple", "Banana","Mango","Cherry","Orange"];
fruits.pop("Orange");
console.log(fruits);
// //////////////////////////////////////////////////////////////////////
 let array = [5, 10, 15, 20];
 array.shift(5);
console.log(array);
// ////////////////////////////////////////////////////////////////////////
let languages=["HTML","CSS","JavaScript"];
languages.unshift("Python");
console.log(languages);
// ////////////////////////////////////////////////////////////////////////
// let arr=[1,2,3,4,5];
// let  UserInput=prompt("Enter the numbers");
// let targetNUM =parseInt(UserInput);
// if (arr.includes(targetNUM)) {
//      console.log("The number exists in the array");   
// }else{
//      console.log("The  number does not  exists in the array");   
// }
// ////////////////////////////////////////////////////////////////////  
let Fruits=["Apple", "Banana","Mango","Orange"];
console.log(Fruits.indexOf("Banana"));
// /////////////////////////////////////////////////////////////////////////

let numbers =[10,20,30,40,50,60,];
for (let i = 0; i < numbers.length; i++) {
if(i% 2 ===0){
console.log(i);
}  
}
// //////////////////////////////////////////////////////////////////////
 let alphabet =["a","b","c","d","e"];
  console.log(alphabet.slice(0,3));
  
//  //////////////////////////////////////////////////////////////////////

let Names =["Sana", "Rida","Ayesha","Hania"];
Names.splice(1,2);
console.log(Names);
// //////////////////////////////////////////////////////////////////////

let NUM=[10,12,13,45,60,90,];
let i=1;
let largest=NUM[0];
while (i<NUM.length) {
     if (NUM[i]>largest) {
 }largest=NUM[i];
i++
}
console.log("The largest number is",largest);

// ////////////////////////////////////////////////////////////////////////
const animals= ["cat","dog","elephant","lion"];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].includes("a")) {
        console.log(animals[i]);
    }

}
// ////////////////////////////////////////////////////////////////////////
let colors=["Red","Blue","Green","Orange"];
 colors.splice(1,2,"Purple","Pink")
 console.log(colors);
//  ////////////////////////////////////////////////////////////////////////
let j=1;
do {
     console.log(j);
     j+=2
       
} while (j<=20);

// ///////////////////////////////////////////////////////////////////////
let brand=["Samsung","OnePlus","Xiaomi","Google"]
 brand.push("Oppo");
brand.unshift("Vivo");
console.log(brand);
// //////////////////////////////////////////////////////////////////////
let arr=[100,17,26,136,46,52,61,72,98,190,];
let count=0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>100) {
    
       count++
    }
 
}console.log("Number greater than 100 is",count);
// /////////////////////////////////////////////////////////////////////
let input=["Sana", "Rida","Ayesha","Hania"];
let username=prompt("Enter your name");
if(input.includes(username)){
     console.log("Name Found");  
}else{
     console.log("Not Found");
     
}
// //////////////////////////////////////////////////////////////////
let Array =[0,1,2,3,4];
let even =0;
let odd=0;
for (let i = 0; i < Array.length; i++) {
     if (Array[i]%2===0) {
         even++ 
     }else{
          odd++
     }
     
}console.log(even);
console.log(odd);
// /////////////////////////////////////////////////////////////////

let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let subarr=days.slice(2,6);
console.log(subarr);
// /////////////////////////////////////////////////////////////////
 let number = [10, 20, 30, 40, 50];

number.splice(2, 1, 90);

console.log(number)




