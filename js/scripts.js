function replaceZero(number) {
  if (number === 0){
    return "Beep";
  }
  return false;
}

function replaceOne(number) {
  if (number === 1){
    return "Boop"
  }
  return false;
}

function divisibleByThree(number){
  var remainder = number % 3
  if (remainder === 0 && number === !0 ) {
    return true;
  }
  return false;
}

function countToNumber (number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}

function changeNumber (number) {
  var replaceNumber = [];
  var numbers = countToNumber(number);
  numbers.forEach(function(number){
    replaceNumber.push("test");
  });
  return replaceNumber;
}

//do we know our methods?
function testThis (number) {
  var numberInput = number;
  var numberSearchOne = numberInput.replace('1', 'beep');
  var numberSearchZero = numberSearchOne.replace('0', 'boop');
  var numberArray = numberSearchZero.split();
  var numberJoin = numberArray.join('+');
  return numberJoin;
}

//find all number in an array divisible by 3
// all number in an array divisible by three will say Hey!
function allNumberDivisibleByThree (number){
  var allArray = [];
  for (var i = 0; i <= number; i++) {
    if (divisibleByThree(number)) {
      // allArray.push("sayHey");
      return "sayHey" ;
    } else if (number === 0) {
      return "beep" ;
    } else if (number === 1) {
      return "boop"
    } else {
      return i;
    }
    // allArray.push(i);
  }
  // return allArray;
  debugger;
  console.log(divisibleByThree);
  // console.log(allArray);
}

function testOne(number){
  if (divisibleByThree(number)) {
    // allArray.push("sayHey");
    return "sayHey" ;
  } else if ( number === 1 ) {
    return "beep" ;
  } else if (number === 0) {
    return "boop"
  } else {
    return number;
  }
}
