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
  if (remainder === 0) {
    return "this is divisible by 3!"
  }
  return false;
}

function countToNumber (number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
  // console.log(numbArray);
}

function changeNumber (number) {
  var replaceNumber = [];
  var numbers = countToNumber(number);
  numbers.forEach(function(number){
    replaceNumber.push("test");
  });
  return replaceNumber;
}
