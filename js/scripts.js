function replaceZero(number) {
    return "Beep";
  }

function replaceOne(number) {
    return "Boop";
  }

function divisibleByThree(number){
  var remainder = number % 3
  if (remainder === 0 ) {
    return true;
  }
  return false;
}

function countToNumberInput (number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}

function runAll(number) {
  var total = [];
  var allArray = countToNumberInput(number);
  for (var i = 0; i <= allArray.length; i++) {
    console.log("run all", allArray[i]);
    total.push(something(allArray[i]));
  }
  return total;
  console.log(total);
}

function something(number){
  if (number === 0) {
    return "beep";
  } else if ( number > 0 && (number%3) === 0){
    return "blah";
  } else if ( number === 1) {
    return "boop";
  } else if (number === 0){
    return "beep";
  } else  {
    return number;
  }
}
