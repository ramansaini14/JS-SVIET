// function func1();
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

// let a = 5;
// let b = 5;
// if(b!=a){
//     console.log('A is not equal to 5');
    
// }
// else{
//     console.log('A is equal to 5');
    
// }
// (a == b) ?  console.log('A is equal to 5') : console.log('A is not equal to 5');


// NOTE - Logical and comparison operators are used to return a boolean value, whether true or false 

// HOSTING 
// HOISTING 

// SYSTEM INFORMATION 

// DOM 
// let inputBox = document.getElementById('inputBox').value;
// console.log(inputBox);

// Template Literals

// let str = `this is a 'string' and variable is `;
// console.log(str);
// let vari = 10;

// ${...} -- String Interpolation
// console.log(`Note - ${str} + ${vari}`);

// let str2 = `this is a text
// this is wonderful approach`;
// console.log(str2);

// Array  
// console.log(arr);

// console.log(arr[3]);

// console.log(arr.length);
// console.log(arr.toString());
// console.log(arr.join(" @ "));
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())
// Arrays are mutable 
// console.log(arr);

// let arr = ["One","Two","Three","Four","Five"];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push("ANOTHER ELEMENT"));
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.unshift("FromLeft"));
// console.log(arr);

// console.log(delete arr[2]);
// console.log(arr);

// arr[2] = "Empteed";
// console.log(arr);

// let arr2 = ["SomeEEle", "AnotherEle"];
// console.log(arr2);
// let arr3 = ["SomeEEleMent1", "AnotherEleMent1"];
// console.log(arr3);

// let joinedArr = arr2.concat(arr,arr3,"Sumit"); //"Sumit"
// console.log(joinedArr);

// Array of Arrays -- nested array
//Array That i Have
// let arrJagg = [
//     [1,2],
//     [3,4,5],
//     [6]
// ];
// console.log(arrJagg);
//Expectations
// let arrjagg2 = [1,2,3,4,5,6];
// console.log(arrJagg.flat());

// let arr = ["One","Two","Three","Four","Five"];
// console.log(arr.splice(3,0,"Hey"));
// console.log(arr.slice(2,4));

// console.log(arr);


//Old Approach to make a funtion in JS
// func1();

// function func1(){
//     console.log('Hey This is a function .. ');
// }

//ARROW FUNCTION
// const funcArrow = () => {
//     console.log('Hey This is a function .. ');
// }
// funcArrow();


// COnditional Statements 
// if (condition)
// {
        //if code block
// }

// else {
        //else code block 
// }

// const calculator = () => {
//     let a = document.getElementById("checker").value;

    // console.log(a);
    
//     if(a>=5)
//     {
//         document.getElementById("resultDisplayer").innerHTML = "A is Greater or equal to 5";
        
//     }
//     else {
//         document.getElementById("resultDisplayer").innerHTML = "A is less than 5";
//     }

// }

// Create a range bar and display its values on your visualViewport.
// function ranged(){
//     let rangeVari = document.getElementById("rangeVal").value;
//     document.getElementById("storageRange").innerHTML = rangeVari;

// }

// If Else 

// If -- one condition -- Example --  Do you drink coffee? 

// Answer  -- Yes or a No 

// true or false 
// const time = new Date().getHours();
// let greet;
// if (time>=10 && time<=12)
// {
//     greet = "Good Morning";
// }
// else if(time>=13 && time<=16){
//     greet="Good Afternoon";
// }

// else{
//     greet="Good Night";
// }

// document.getElementById("dateOutput").innerHTML = greet;

//Loops

// for (Initialisation, condition, increment/decrement){
    //code

// }

// Initialisation
// while (condition) {
        //code
        // increment/decrement
// }

// do while 
// Initialisation
// do{
    // code 
    // increment/decrement
// }while(Condition);

// let a = 1;
// while(a<=10){
//     console.log(a);
//     a++;
// }

// a=1;
// do{
//     console.log(a);
//     a++;
// }while(a<=10);

// continue and break
// for (a=1; a<=10; a++){
    // console.log(a);
//     if(a === 3){
//         continue;
//     }    
//     myContent = "The Num is" + a;
//     console.log(myContent)
// }


// console.log(arr[4]);

// for(i=0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }
    
// let arr = [2,2,2,2,2];
// arr.forEach(thisFunc)

// console.log(arr);

// function thisFunc(i, j , arr){
//     arr[j] = i*5;
// }

// function ab(a, str){
//     console.log(a + str)
// }

// ab(2, "Name");