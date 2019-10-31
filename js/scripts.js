
var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var result = '';

function convert(number) {

  for (var i = 0; i < romanNumerals.length; i++) {
   while (number >= arabicNumerals[i]) {
     result += romanNumerals[i];
     number -= arabicNumerals[i];
   }
 }
 return result;
}

// console.log(convert(50));

$(document).ready(function() {
  $("form#conversionForm").submit(function(event) {
    event.preventDefault();
    var conversion = convert($("input#userInput").val());
    // $("userInput").text(result);
    $("#conversionResult").text(conversion);
    $("#result").show();
  });
});
