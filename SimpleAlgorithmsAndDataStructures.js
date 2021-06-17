/*
Algorithms and Data Structures
The second way to access the properties of an object is bracket notation ([]). 
If the property of the object you are trying to access has a space in its name, 
you will need to use bracket notation.
accessing objekt properties .notation var gimme = testObj.prop1;
*/
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Gimme Montana

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line
console.log(player);
/*
var myDog = {
  // Only change code below this line
  "name": "Doggo",
  "legs": "4",
  "tails": "1",
  "friends": ["John","Ada"]
  
  // Only change code above this line
  };

//card counting
var count = 0;

function cc(card) {

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));

//Returning true/false without if else
function isLess(a, b) {
  
      return a < b;
  }
  
console.log(isLess(10, 15));

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42: 
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  console.log(chainToSwitch(7));

function sequentialSizes(val) {
    var answer = "";
    // Range
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Wrong input."
      
  }
    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(1));

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return "Hole-in-one!";
}  else if (strokes <= par - 2) {
   return "Eagle";
   } else if (strokes == par - 1) {
     return "Birdie";
     } else if (strokes == par) {
       return "Par";
       } else if (strokes == par + 1) {
         return "Bogey";
         } else if (strokes == par + 2) {
           return "Double Bogey";
           } else {
             return "Go Home!";
          }

  // Only change code above this line
}

console.log("Golf Test: " + golfScore(4, 3));

//else
function testElse(val) {
    var result = "";
    // Only change code below this line
  
    if (val > 5) {
  
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

// === Strict Equality Operator NO Type Conversion
//In JavaScript, you can determine the type of a variable or a value with the typeof operator, returns string or number

//strictly equal
function compareEquality(a, b) {
    if (typeof a == typeof b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(compareEquality(10, "10"));
  


//boolean and if-statement
function trueOrFalse(wasThatTrue) {

  if (wasThatTrue == true) {
    return "Yes, that was true";
  }
  return "No, that was false";

  }
  */