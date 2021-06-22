// Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    var returnValue = "";
    console.log("BEFORE IF 1: i " + i + "name " + name + " prop " + prop);
    if (name === contacts[i].firstName) {
      console.log("IF 1: " + i + "name " + name + " prop " + prop + " value " + contacts[i][prop]);
      if (contacts[i].hasOwnProperty(prop)) {
        console.log("IF 2: " + i + "name " + name + " prop " + prop + " return " + contacts[i][prop]);
        returnValue = contacts[i][prop];
        break;
      } else {
        console.log("No Prop: " + i + "name " + name + " prop " + prop);
        returnValue = "No such property";
        break;
      }
    } else {
      console.log("IF 3: " + i + "name " + name + " prop " + prop);
      returnValue = "No such contact";
    }

  }
  console.log(" return " + returnValue);
  return returnValue;
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
/*
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
  return  [startNum];
} else if (startNum < endNum) {
  var countArray = rangeOfNumbers(startNum, endNum-1);
      countArray.push(endNum);

  }
  return countArray;


};

Use Recursion to Create a Countdown
In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
The value [1, 2, 3, 4, 5] will be displayed in the console.

// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
}
}
/*
// Only change code above this line

At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
*/
/*Use the Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
  }

  checkEqual(1, 2);
//multiple conditional operators
  function checkSign(num) {
    return (num > 0) ? "positive"
      : (num < 0) ? "negative"
      : "zero";
  }

  checkSign(10);


/*Use the parseInt Function with a Radix
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);
And here's an example:

var a = parseInt("11", 2);
The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3

function convertToInteger(str) {
  return parseInt(str, 2);
  }

  convertToInteger("10011");


function convertToInteger(str) {
  return parseInt(str);

}

convertToInteger("56");

/*
Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min


function randomRange(myMin, myMax) {
  // Only change code below this line
  var myNum = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  if(myNum >= myMin && myNum <= myMax) {
      return myNum;

  }
  // Only change code above this line
}

function randomWholeNum() {

  // Only change code below this line
var randomWholeNum;
randomWholeNum  = Math.floor(Math.random() *10);
if(randomWholeNum  >=0 && randomWholeNum  < 10) {
  return randomWholeNum ;
  }
}

/* Random numbers are useful for creating random behavior.
JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive).
Thus Math.random() can return a 0 but never return a 1.
Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes,
so we can return the value of the Math.random() function.
function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
// Only change code below this line

for(var i = 0; i < contacts.length; i++) {
if(contacts[i].firstName === name) {
  if(contacts[i].hasOwnProperty(prop) === true) {
   return contacts[i][prop];
      } else if(contacts[i].hasOwnProperty(prop) !== true) {
  return "No such property";
      }
  }
}
return "No such contact";



// Only change code above this line
}

lookUpProfile("Akira", "likes");




function sum(arr, n) {
  // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do  {
  myArray.push(i);
  i++;
} while (i < 5);

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  product *= arr[i][j];
  console.log(product);
  }
}
console.log(product);
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for(var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// counting backwards
var myArray = [];

// Only change code below this line
for (var i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}
// odd numbers in array
var myArray = [];

// Only change code below this line
for (var i = 1; i <= 9; i += 2) {
  myArray.push(i);
}
var myArray = [];

// Only change code below this line

for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}

var myArray = [];

// Only change code below this line
var i = 5;
while(i >= 0) {
  myArray.push(i)
  i--;
}


// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop != "tracks" &&  value != "")  {
     records[id][prop] = value;
  } else if(prop == "tracks" && records[id].hasOwnProperty([prop]) == false) {
   records[id][prop] = [value];
  } else if(prop == "tracks" && value != "") {
    records[id][prop].push(value);
  } else if(value == "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


/*
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1];
//nested objects access to properties
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

//Object
var myMusic = [
  {   "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
          "gold": true,
   },
    {
      "artist": "Kalinka",
      "title": "When u try your best but you dont suceed",
      "release_year": 1991,
      "formats": [
        "Diskettelul",
        "8T",
        "LP"
      ],
          "gold": true,
  }

  ];

//Cheking if the property of an objects exists .hasOwnProperty(propname) returns true/false

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
  // Only change code above this line
}

function phoneticLookup(val) {
  var result = "";

 var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
    " " : "undefined",

  };
  result = lookup[val];

  return result;
}

phoneticLookup("charlie");

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
};

//Adding an property to an object
myDog.bark = "woof";

//Delete an property from an object
delete myDog.legs;

/*
The second way to access the properties of an object is bracket notation ([]).
If the property of the object you are trying to access has a space in its name,
you will need to use bracket notation.
accessing objekt properties .notation var gimme = testObj.prop1;
*/
/*
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