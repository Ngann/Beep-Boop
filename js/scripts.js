function countToNumberInput (number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}

function BeepBoop(number) {
  var total = [];
  var allArray = countToNumberInput(number);
  for (var i = 0; i <= allArray.length; i++) {
    total.push(something(allArray[i-1]));
  }
  return total;
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
