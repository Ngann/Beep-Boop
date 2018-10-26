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

//findZeroInInput
var re = /0\d/
function findZeroInInput(number){
  var numberToString = number.toString()
  var placeZero = numberToString.match(re);
  return placeZero;
}
//
