function countToNumberInput (number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}

function numberToOutput(number){
  if (number === 0) {
    return "beep";
  } else if ( number > 0 && (number%3) === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that";
  } else if ( number === 1) {
    return "boop";
  } else if (number === 0){
    return "beep";
  } else  {
    return number;
  }
}

function BeepBoop(number) {
  var total = [];
  var allArray = countToNumberInput(number);
  for (var i = 0; i <= allArray.length-1; i++) {
    total.push(numberToOutput(allArray[i]));
  }
  return total;
}
