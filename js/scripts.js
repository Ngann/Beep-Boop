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
// function countToNumber (number) {
//   var numArray = [];
//   for (var i = 0; i <= number; i++) {
//   } if (numArray === 0) {
//     numArray.push("Beep")
//   } else if (numArray === 1) {
//     numArray.push("Boop")
//   } else {
//     numArray.push(i)
//   }  // numArray.push(i);
//   return numArray.join();
//   console.log(numbArray);
// }

function joinNumber(number){
  var placeholder = number.join('');
}

// run the number through count to number loop and search for index positions for 0 and 1
// or
//return the input which converts specs and join together

// //findZeroInInput
// var re = /0\d/
// function findZeroInInput(number){
//   var numberToString = number.toString()
//   var placeZero = numberToString.match(re);
//   return placeZero;
// }
// //
