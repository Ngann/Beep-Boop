function replaceZero(number) {
  if (number === 0){
    return true;
  }
  return false;
}

function replaceOne(number) {
  if (number === 1){
    return true;
  }
  return false;
}

function divisibleByThree(number){
  var remainder = number % 3
  if (remainder === 0 ) {
    return true;
  }
  return false;
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

function countToNumberInput (number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}
