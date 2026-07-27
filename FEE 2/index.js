console.log("Hello World");

// let ,var ,const
// var a=1;
// var a=5;
// console.log(a);   //function scoped and can be reassigned,redeclared

// function s(){
//     var b=10;
// }
// console.log(b);

// if(true){
//     var c=15;
// }
// console.log(c);   // function scoped not block scoped

// let a=10;
// // let a=11;  cant be redeclared 
// a=11        // but can be reassigned
// console.log(a);

// if(true){
//     let d=10;
// }
// console.log(d);      // let is block soped only

// const a=5   // not reassign,not redeclared, but block scoped

// console.log(a);         // undefined because of hoisting and var is global scoped 
// var a=5;
// console.log(a);             // 5

// console.log(a);          //ReferenceError: Cannot access 'a' before initialization
// let a=5;
// console.log(a); 

// console.log(sum(5,6));
// const sum=function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,6));

// function sum(){
//     return arguments[0]+arguments[1];
// }
// console.log(5,6);


// const sum=(a,b)=> a+b;
// console.log(sum(5,6));

// let arr=[1,2,3,4,"niket"];
    // console.log(arr.at(-1));
    // console.log(arr.unshift(7))

    let arr=[1,2,3,4,9];
   console.log(arr.sort((a,b)=>a-b));
    console.log(arr.sort((a,b)=>b-a));






