//import { api, message } from "./util";

//console.log(api);
//console.log(message);
// xou can also grouped the all things present in util file as object and import  it, and syntayx for that is  import *as util from "path"

//import * as util from "./util";
//console.log(util);
// I tried it and yes it works

// I can also used the as keyword for allias to renmane the any variable in this file if I am not happy about its name

///----------------------------------------------------------/7777

// so this section is not about react and import and export , but it is about the javascript refresher
// so we will start witha value variable and operator

//console.log("I can used tha value where I needed it");
// but I need variables to store all these types of values like string number bollean null or undefined or object

// you can use varibale to store value because they allow reusabilityand readability

// and please remember there are some rules for identifier , identifier is name you used for your variable
// function or variable name must be depict what it is doing

/*
function createGreeting(userName, message = "How can I help You?") {
  return " Hello I am" + " " + userName + " " + message;
}

const greeting1 = createGreeting("hamza");
console.log(greeting1);
const greeting2 = createGreeting("usama");
console.log(greeting2);*/

// in java script there is another way to declare function and we named that function an arrow function and we mostly use it when we have to work with anyomious function I mean a function that has no name

/*export default (namBa, paigham) => {
  console.log("Hello");
  return namBa, paigham;
};*/

//2) Omitting function body curly braces

/*
If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

Instead of

number => { 
  return number * 3;
}
you could write

number => number * 3;
*/

// if you want to return a javascript object then please do not use just curly braces because it is cinsidered to be function(when curly braceses are started )So, Instead of that you can write it in this way   id=>({name:email}) close it with extra pai of parantheses

//--------------------------------------------------------------------------

// Now as I learned about function , now I should do some practice about objects

//Objects in javascript can be used to group multiple values together

/// you can also create the function inside of object but please remember it would be without the function keyword
/*
const id = {
  name: "Haider",
  email: "haiderAli654@gmail.com",
  greet() {
    console.log("Hello");
    // you can also access the data of that object with this keyword
    console.log(
      "SO" +
        "," +
        " " +
        this.name +
        " " +
        "this is your" +
        " " +
        this.email +
        " " +
        "Email Address"
    );
  },
};

id.greet();
console.log(id.name);

*/

// we can also use the class and construtor for the blue print I hhave learned about it and I als have stored notes for it  i will revise them

//------------------------------------------------------------------------

// after objects another crucial type of value is array in this refresher we will talk about it

// technically arrays are objects but they are special kind of objects

//const hobbies = ["sports", "eating", "drinking"];

//console.log(hobbies[0]);

// there are some utility built in methods which you can use to transform the array

// when I come back after short brake I will look at all these posiible function including ,ap
/*
const newww = hobbies.push("swimming");
console.log(hobbies);

const newa = hobbies.pop();
console.log(newa);
console.log(hobbies);

const ediitedhobbies = hobbies.map((item) => ({ hamzashob: item }));

console.log(ediitedhobbies);

const findinde = hobbies.findIndex((item) => item === "eating");
console.log(findinde);  */

//--------------------------------------------------------

// next we will talk about a javascript feature which is pretty famouse and use a lot that is how to distructure javascript array and java script object

//Traditional way to distructure the array is
/*
const name = ["hamza", "Naseem"];

const firstName = name[0];
const lastName = name[1];
console.log("my first name is", firstName);
console.log("my last name is", lastName); */

// but there is another short way to do these things is

/* const [firstName, lastName] = ["hamza", "naseem"];
console.log("my first name is", firstName);
console.log("my last name is", lastName);  */

// now we have same thing for object to distructure it

/*const user = {
  name: "hamza",
  age: 24,
};

const name = user.name;
const age = user.age;
console.log("my name is ", name);
console.log("my age is ", age);

*/

// if statment is called controlled structure because it controlled which condition is need to be executed

// another crucial control structure is also famouse in js that is for loop, and in this course we will see that we will use for loop with am array

// lets see the for of loop I have learned about all of them  but now I am going to see for of loop

/*const hobbies = ["sport", "reading", "upskilling"];

for (const hobby of hobbies) {
  console.log(hobby);
}*/

// as we know we write react in declarative way so we do not have to worry about dom , react will do  for us, so in react we will not do the DOM things

//const list = document.querySelector("ul");
//list.remove();
// we are not going to do these things in our this course
//----------------------------------------------------

// somethings tha you must know and that things are little bit advanced that you could not pass a funaction as a value to another function
// when you are passing the function as value to another function you have to be carefulll with few things lets discusss about it
/*
function handleTimeout() {
  console.log("Timed out !");
}

const handleTimeout2 = () => {
  console.log("Timed Out again ");
};

setTimeout(handleTimeout, 3000);
setTimeout(handleTimeout2, 5000);
setTimeout(() => {
  console.log("More Time out");
}, 7000);

// and we can also build ouw own custom function and we can pass it another function as  value

function greeter(greetfn) {
  greetfn();
}
greeter(() => console.log("Hello"));

// i just want to discuss this here because I want to tell that it is not limited to pass function as value to another function as it is for build in function like settimeout() */

// you can also write an function inside of function and please be careful with its scope while doing this becasue it similar to same
// and this is the thing that you can not do often in javascript but you are going to do in React a lot

///---------------------------------------------------

// now the last crucial concept for this refresher for React is refrences vs permative values

// dealing with strings number and Boolean you always produce a new string the old one  can not be edited the dat with new enteries is new data not the old one
// in short stings number and boolean all are permative

// this only worki with array and objects

const hobbies = ["cycling ", "swimming "];
const neww = hobbies.push("eating");
console.log(neww);

// here is edited the old array

//while object and arrays are not permative data type, and these are stored by refrences values
