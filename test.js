//Concatenating Strings with Plus Operator
var ourStr = "I come first. " + "I come second ";
ourStr += " That\'s nice.";
//Nesting nasty multi-dimensional Arrays
var myArrayNest = [["Dog", 12], ["Cat",3]];
var animalWeight = myArrayNest[1];
//Appending Array data to the end via .push() function
myArrayNest.push(["Catdog",5]);
//Removing the last element of an array via .pop() function
var popItOff = myArrayNest.pop();
//Removing the first element of an array via .shift() function
var cutZero = myArrayNest.shift();