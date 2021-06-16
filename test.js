
//functions without return statement will return undefined when called
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}
addThree();
addFive();

function timesFive(num){
    return num*5;
  }

// Overriding var
var outerWear = "T-Shirt";

function myOutfit() {

var outerWear = "sweater";

  return outerWear;
}

myOutfit();

//local scope
function myLocalScope() {

  var localScope = "I am fine and seen in here";
    console.log('inside myLocalScope', localScope);
  }
  myLocalScope();
  // ReferenceError: localScope is not defined
  console.log('outside myLocalScope', localScope);

//Global Scope
var myGlobal = 10;

function fun1() {
//without var it declared as global lul
oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//functions yay
function reusableFunction () {
    console.log("Hi World");
    }
    reusableFunction();

//Add Elements in front of the array via .unshift()
myArrayNest.unshift(["Dogo",10]);

//Removing the first element of an array via .shift() function
var cutZero = myArrayNest.shift();

//Removing the last element of an array via .pop() function
var popItOff = myArrayNest.pop();

//Nesting nasty multi-dimensional Arrays
var myArrayNest = [["Dog", 12], ["Cat",3]];
var animalWeight = myArrayNest[1];

//Appending Array data to the end via .push() function
myArrayNest.push(["Catdog",5]);

//Concatenating Strings with Plus Operator
var ourStr = "I come first. " + "I come second ";
ourStr += " That\'s nice.";