// function sum(a,b){
//     return a+b;
// }
// sum(2,3);
// console.log(sum(2,3));


// console.log(a(2,3));        //not hoisted
// const a=function(a,b){
//     return a+b;
// }


// const a=(a,b)=>a+b+1;
// console.log(a(2,3));

// const a=()=>({a:1,b:2})
// console.log(a());

// function sum(){
//     console.log(arguments);
// }
// sum(2,3);

// const sum=(...number)=>{
//     console.log(number);
// }
// sum(1,2,3,4,5,6,7,8,9);

// a=[1,2,3,4,5,6];           // 1 2 3 4 5 6
// console.log(...a);

// console.log(Math.max(2,3));

// const b=[...a,7,8,9];
// console.log(b);         //spread [  1, 2, 3, 4, 5,  6, 7, 8, 9]


// function a(b){              //higher order function as a is taking function b as parameter they can return a function also
//     //b();
//     return b;
// }
// function b(){            // callback function-that is passed in another function as parameter
//     console.log("heloo");
// }
// a(b);
// const c=a(b);
// c();


// lexical scope when inner function access outer function variables
// function outer(){
//     const a=3;              // or var a=3;
//     function inner(){
//         console.log(a)
//     }
//     inner();
// }
// outer();


// function f(a=4){
//     console.log(a);
// }
// f(6);   // default parameter only works when argument is not given;

// function outer(){
//     var a=3;
//     return function inner(){
//         a++;
//         console.log(a);
//     }

// }
// const f=outer();
// f();                    //closure- when outer function remembers the inner functions even after execution;
// f();


// a=[1,2,3,4,5];
// const b= new Array(2,3,7,8,9);          // new creates object and allocates dynamic memory;
// console.log(b);

// console.log(b.at(-1));          //last element

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// console.log();

// for(item in a){             //returns index in js
//     console.log(item);
// }


// a.forEach((item)=>{
//     console.log(item);
// })


//object
// const student={
//     name:"Riddhi Aggarwal",
//     age:19,
//     address:"Nabha",
//     greet:function(){
//         console.log("helloo");
//     },
//     greet:()=>{             //arrow funct doesnt have this
//         console.log(this.name);
//     }
// }

// console.log(student.name);
// console.log(student["name"]);

// const person=new Object()
// person.name="Riddhi";
// person.age=19;
// console.log(person);
// console.log(person.greet);



// const a={
//     name:"Aman",
//     city:"patiala"
// }
// console.log(Object.keys(a));
// console.log(Object.entries(a))
// Object.keys(a).forEach((item)=>console.log(a[item]));
// Object.keys(a).forEach((_,index)=>console.log(index));

// const{name,city}=a;         //destructuring
// console.log(name);


//DOM(DCUMENTOBJECT MODEL)...............................................

