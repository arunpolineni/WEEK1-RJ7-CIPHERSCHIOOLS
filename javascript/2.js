// .map()
//  let array=[1,2,3,4,5];
// let newArray =[];
// for (let i = 0; i < array.length; i++) {
//  newArray[i]=array[i]*array[i];
  
// }
// console.log(newArray); // here we are iterating from left to right by increamenting index 1 and computing the operation  and storing at the same index  this is same as .map() method

// let array=[1,2,3,4,5,6];
// function funFormap(element) {
//   return element*element;
// }
// let newArray = array.map(funFormap);
// console.log(newArray);
// // in js a fun is also js object

//let funFormap = (element) => element*element;

// let newArray = array.map((element) => element*element);
// console.log(newArray);
// in js a fun is also js object




// forEach();
// let array=[1,2,3,4,5,7];
// array.forEach((element,index) => {
//   console.log(element);
// });// forEach return typeis void doesnt return anything 

// let array=[1,2,4,5,7];
// array.forEach((elemnt,index) =>{
//   elemnt*=elemnt;
//   console.log(elemnt);
// });
// console.log(array);//it dont modify the array and foreach doed not return anything

// map will return an array but forEach wont return


// // .filter()

// let array =[10,20,30,40,50];
// // cheak num >20 and dont know the number of elements in array
// // array.filter((element) => {
// // return element>20
// // });

// let newArray = array.filter((element) => element>20);
// console.log(newArray);

// let array=[1,4,6,2,7];
// let temp=array.find((element)=>{
//   return element >3;
// });
// console.log(temp); //retrun only an element ...


//sorting
// let array=[10,30,60,20,40,111]
// let sortedArray=array.sort();
// console.log(sortedArray);// sort all of these according to string values --in lexographical order

// let array=[10,30,60,20,40,111]
// let sortedArray=array.sort((el1,el2)=>{
// el1=Number(el1);
// el2=Number(el2);
// });
// console.log(sortedArray);//comparative function


//object destructuring

let details ={
  name:"Arun",
  age:21,
  address :{
    state:"andhra",
country:"india",
passport:{
  passportnum:"Akncncnv"
  }
}
};

// console.log(details.address.passport.passportnum);
// let passportnum=details.address.passport.passportnum;
// console.log(passportnum);

// let myname = details.name;
// console.log(myname);

// let {name:myName,age} = details;
// console.log(myName ,age);//object destructuring


//array matching
//by cheaking reference if both pointing to same reference ,running for loop cheaking every element and ch8eaking element length
// object matching
let obj = {
  name:"arun"
}
let obj1 = {
  name:"arun"
}

function areEqual(obj,obj2){
  if(obj==obj1){
    return true;
  }
  if(Object.keys(obj).length!=Object.keys(obj1).length){
    return false;
  }
  for(let key of Object.keys(obj)){
    if(typeof obj1[key] =="undefined"){
      return false;
    }
    if(obj1[key]!= obj[key]){
      return false;
    }
  }
  return true;
}
console.log(areEqual(obj,obj1));



//map and set 
let map = new Map
map.set(1,"Ak");
map.set(2,"kumar");
console.log(map);

let set = new Set();
set.add(1);
set.add(3);
set.delete(3)
console.log(set);


// class
class Animal{
  legcount;
  sound;
  color;
  constructor(legcount,sound,color){//we can haveonly one constructor in the class in js
    this.legcount=legcount;
    this.sound=sound;
    this.color=color;
   
  }
  showAnimal(){
    console.log(`the animal has ${this.legcount} legs`);
  }
}

let animal = new Animal(4,"meow","grey");
console.log(animal);
animal.showAnimal();

