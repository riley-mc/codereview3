// Business Logic
var numBarResults = function(number) {
  var result = [];

  for (index = 0; index <= number; index++){
    result.push(" " + index);
    var string = index.toString();

    if (string.includes("3")){
      result.splice(index, 1, "Will you be my neighbor?")
    } else if (string.includes("2")){
      result.splice(index, 1 ," Boop!")
    } else if (string.includes("1")){
      result.splice(index, 1, " Beep!")
    
    
    }
  }
return result;
}


// User Interface Logic
$(document).ready(function() {
  $("form#numBar").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var result = numBarResults(number);
    $("#output").text(result);
    $("#result").show();
  });
});