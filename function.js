let num=[1, 2, 3, 4, 5 ];
let double=num.map((val) =>{
    return val*val;
});
console.log(double);
// ///////////////////////////////////

let nums=[0, 1 ,2, 3 ,4 ,5 ,6, 7, 8, 9];
let even=nums.filter((val)=>{
  return val % 2===0;
})
console.log(even);
// /////////////////////////////////

let number=[1 ,2, 3 ,4 ,5 ,6, 7, 8, 9];
let sum=number.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(sum);
// //////////////////////////////////
let NUM=[12, 13, 45, 59, 56, 27,50];
let input =NUM.find(Greater);
function Greater(num) {
    return num>50;
}
console.log(input);
// ////////////////////////////////
const Numbers = [3, 5, 8, 12];

const Positive = Numbers.every(num => num > 0);

console.log("All numbers are positive:", Positive);
// ///////////////////////////////////////////////////////////
const numb = [3, -2, 7, 10];

const Negative = numb.some(num => num < 0);

console.log("Contains negative number:", Negative)
// ///////////////////////////////

let elements=[10, 20, 30, 40, 50];
 elements.forEach((val)=>{
    console.log(val);
    
})
// /////////////////////////////////
let string=["ayesha","sana", "rida"];
let update=string.map((val)=>{
    return val.toUpperCase()
});
console.log(update);
// ////////////////////////////////////////////
let Nums=[0, 1 ,2, 3 ,4 ,5 ,6, 7, 8, 9];
let NewNum=nums.filter((val)=>{
  return val > 4;
})
console.log(NewNum);
// //////////////////////////////////////////
for (let i = 1; i <= 10; i++) {
console.log(i);

} 
//////////////////////////////////////////////////
let i=1;
do {
    console.log("5 x"+" "+i+" = "+i*5);
    i++
} while (i<=10);
// ////////////////////////////////////////////
let Number=[0,1, 2, 3,4, 5, 6, 7];
let odd=0;
for (const findodd of Number) {
    if (findodd % 2 !=0) {
     odd++;   
    }
}
console.log(odd);
// ////////////////////////////////////////////
 let str ="Welcome";
 let reversed="";
 
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);
// ////////////////////////////////////////////////
let Sum = 0;

for (let i = 1; i <= 100; i++) {
  Sum += i;
}

console.log("Sum from 1 to 100:", sum);
// /////////////////////////////////////////////////////
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break; 
    }
  }

  if (isPrime) {
    console.log(num);
  }

}
// /////////////////////////////////
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// ////////////////////////////////////////

for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
 }
 ///////////////////////////////////////////
 for (let i = 0; i < 6; i++) {
  let row = "";
  for (let j = 0; j < 6 - i; j++) {
    row += j + " ";
  }
  console.log(row);
}
// /////////////////////////////////////////////
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}