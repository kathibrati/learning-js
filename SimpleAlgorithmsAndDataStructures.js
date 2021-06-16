//Algorithms and Data Structures


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