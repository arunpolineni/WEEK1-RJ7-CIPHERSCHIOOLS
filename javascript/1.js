const myNam = "Arun";
console.log(myNam);
// const myNam = "ram"; causes error redeclaring a const not allowed

const myNam2 = [];
console.log(myNam2);
myNam2.push("ram");
console.log(myNam2); 

// const myNam2 = "ram" same as line num 3
// myNam2 = ["ram"]; reassignment is also not ALLOWED
//  updating deleting  values in array id allowed

let myNam3 = "Krishna";
console.log(myNam3); 
myNam3 = 5;// reassing is allowed redeclaring not allowed 
console.log(myNam3); 
// let myNam3 = 5; not allowed

// when it comes to var we can redeclare and reassign a variable
// var variables are globally scope let and const are block scope
{
  var num =5;// global scope

}
console.log(num); 


// string interpolation 
let firName = "Arun";
let laName = "polineni";
console.log(firName+" "+laName);

// let fullName = firName+" "+laName;  this waste some memory so string interpolation used
// console.log(fullName);

let fullName = `${firName} ${laName}`;
console.log(fullName);

//default params

// function addTwoNumbers(num1,num2) {
//   return num1+num2;
// }
// console.log(addTwoNumbers(1,2));

// // arrow function
//  let addTwoNums= (num1,num2) =>{
//   return num1+num2
//  }

//  let addTwoNums= (num1,num2) => num1+num2;//other way
// console.log(addTwoNums(1,2));


// let addTwoNums = (num1,num2) =>{
//   console.log(num1);
//   console.log(num2);
//   return num1+num2;
// }
// console.log(addTwoNums(1,)); //if only one fun arg is passed noerror will come for the second paramenter it will shoiw as undefined and return as NAN-not a number


let addTwoNums = (num1,num2=5) => {
  console.log(num1);
  console.log(num2);
  return num1+num2;
}
 console.log(addTwoNums(1,));
console.log(addTwoNums(1,3));
// in this case if 2 args are passed those values will be taken other wise if one ang passed num2 will take as 5


// rest and spread operATOR - are applicable in arrays and objects

let array = [5,10,15,20,25];
// spread operator
// spread - ...
 console.log(...array); //breaking the boundary and taking all elements out

 let newArray = [array];// this will copy an array newArray and array point to the same location

 // deep cloning copying the same array exactly
   //let newArray = [...array];

//if u want to copy use spread opreator 
//  let newArray = [...array,30,35,40];
// console.log( newArray);


// rest - ...

// let  maxOfTwoNum = ( num1,num2) => {
//   console.log(num1 );
//   console.log(num2 );
//   }
// maxOfTwoNum(1,2)

// let  maxOfTwoNum = (...numbers) => {
// console.log(numbers);
// }
//maxOfTwoNum(1,2,3,4,5,6,7); rest operator used to access multiple arguments in order to use single variables

// let maxOfTwoNum =(...numbers) =>{
//   let maximum = Number.MIN_VALUE;
//   for(let number of numbers){
//     maximum = Math.max(maximum,number);
//   }
//   return maximum;
// }
// console.log(maxOfTwoNum(1,2,3,4,5,6,7));

// SPREAD OPERATOR FOR OBJECT

let obj ={
  name1:"Arun",
  age : 20,
  address:{ 
  city:"ongole",//obj inside object
  state :"Andhra"
  }
}
// let obj2 = {...obj};//copying an object to obj2 entire onject it will become exact clone

// let obj2 = obj;// then we are copying only reference 
// let obj2 = {...obj,country:"India"};
// console.log(obj2);

// let obj2 = {...obj,name:"kumar"};
// console.log(obj2); // in this case name will be overridden

let obj2 = {...obj};
obj2.address.city = "newyork";
console.log(obj2);

console.log(obj);//in case of obj also its printing newyork its called shallow cloning
// all the higher order key value pairs will be copied but address will contain reference to the object //like pass by reference
 
//if we want deep cloning 
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.address.city = "newyork";
console.log(obj2);




