function countToNumberInput (number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}

 function checkForOne(number) {
   var string = number.toString();
   var one = string.includes("1");
   return one;

 }

 function checkForZero(number) {
   var string = number.toString();
   var one = string.includes("0");
   return one;

 }

 function numberToOutput(number){
   if ( number > 0 && (number%3) === 0) {
     return "I'm sorry, Dave. I'm afraid I can't do that";
   } else if (checkForOne(number) === true) {
     return "Boop";
   } else if (checkForZero(number) === true) {
     return "Beep";
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

 $(document).ready(function() {
   $("#input").submit(function(event){
     event.preventDefault();
     var numberInput = $("#numberIn").val();
     $("#output").text(BeepBoop(numberInput));
   });
 });
