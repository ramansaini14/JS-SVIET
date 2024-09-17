// var second;
// LET VAR CONST 

// CANNOT BE REDECLARED AND INITIALISED WITH SAME NAME IN A SAME BLOCK 
// let first = 10;
// let first = 40;
// const constAnt = "ASB";
// var second = 20;
// console.log(second);
// second = 30;
// console.log(second);

// let a = 50;
// a = a+1; OR
// {
//     let a = 20;
//     a+=1;
//     console.log(a);
//     console.log("I am a block")
// }
// a+=1;
// console.log(a);

// const text = "this is SWIET + ";
// let text2 = "this is ASB";
// text2 = "this is AntSchBlocktech";

// console.log(text + text2);
// console.log('hello');

// let a = 50;
// let b = "this is 50";

// console.log(typeof(a));
// console.log(typeof(b));

// let x = false;
// console.log(typeof(x));

// Objects are some real world Eentities and we always make an object as const 
// const car = {
//     carName : "Alto", 
//     autoStart : true, 
// };
// console.log(car);
// console.log(car.carName);
// console.log(car.autoStart);
// console.log(typeof(car.carName));
// console.log(typeof(car.autoStart));

// let numb = BigInt("354678978654343456776657897656456786588");
// console.log(numb);

// let num = null;
// console.log(num);

// let num2 = undefined;
// console.log(num2);

//Falsey Values And Truthy Values
// FALSEY VALUES 
// 1. NAN
// 2. ""
// 3. Null 
// 4. undefined 
// 5. 0

// Truthy Values 
// 1. true
// 2. 1
// 3. Any Expected output value (6,09,3456789)


// const arr = [1,2,3,4,5];
// console.log(arr[3]);

// const date = new Date();
// console.log(date);

// let add = 10 + false;
// console.log(add);
// console.log(typeof(add));

// let anotherLet;
// console.log(typeof(anotherLet));


// Opertors
// Assignment Opertor


// Addition Opertor

// let add = a+b;
// console.log(add);

// let subt = a-b;
// console.log(subt);

// let mult = a * b;
// console.log(mult);

// let dev = a / b;
// console.log(dev);

// console.log(Math.pow(2,3));
// let a = 10;
// let b = 3;

// let exp = a ** b;
// console.log(exp);

// updatedValue = b+5;
// console.log(updatedValue);

// shorthand

    // b+=5;
    // console.log(b);

// let mod = a % b;
// console.log(mod);

// b -=2;
// console.log(b);

// console.log(b++);
// console.log(++b);

// use it with subtraction also 


// CONPARISON OPERATORS

// let a = 5;
// let b = "5";
// console.log(a == b);

// console.log(a === b);

// console.log(a>b);

// console.log(a>=b);

// console.log(a !== b);


// string Concatination

// console.log("My Number is " + a);

// let variab1 = "My Number is " ;
// console.log(variab1 + a + " This number is good.");

// variab1 += "any";

// console.log(variab1);

// Logical Operators - 
// && And Operator
// || Or operator
// ! Not Operator

// ternary operator

// IF ELSE 
// if (Condition){

// }
// else{

// }

let a = 5;
let b = 5;
// if(b!=a){
//     console.log('A is not equal to 5');
    
// }
// else{
//     console.log('A is equal to 5');
    
// }
(a == b) ?  console.log('A is equal to 5') : console.log('A is not equal to 5');


// NOTE - Logical and comparison operators are used to return a boolean value, whether true or false 

// HOSTING 
// HOISTING 

// SYSTEM INFORMATION 

// DOM 
// let inputBox = document.getElementById('inputBox').value;
// console.log(inputBox);

// Template Literals

let str = `this is a 'string' and variable is `;
console.log(str);
let vari = 10;

// ${...} -- String Interpolation
console.log(`Note - ${str} + ${vari}`);

let str2 = `this is a text
this is wonderful approach`;
console.log(str2);

// Array  
let arr = ["One","Two","Three","Four","Five"];
console.log(arr);

// console.log(arr[3]);

// console.log(arr.length);
// console.log(arr.toString());
// console.log(arr.join(" @ "));
console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())
// Arrays are mutable 
console.log(arr);





