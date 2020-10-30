// Business Logic
function roboSwap(num, name) {
  const numArray = [];
  for (let index = 0; index <= num; i++)  {
    let check = index.toString();

    if (check.includes(3))  {
      numArray.push("Won't you be my neighbor" + "?")
    } else if (check.includes(2)){
      numArray.push("Boop")
    } else if (check.includes(1)){
      numArray.push("Beep")
    } else {
      numArray.push(index)
    }

      }
return numArray
    }
  



// User Interface Logic

$(document).ready(function()  {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var results = userInputResults(number);
    $("#number").val (" "); // Might not need.
    $("#container").text(results);
    $("results").show();

  });
});




// let num = $("input#num").val();
// let result = roboSwap(num);







// var userInputResults = function(number) {
//   var result = [];
//   //var string = index.toString();
//   for (index = 0; index <= number; index++) {
//     result.push(" " + index);
//     var string = index.toString();

//     if (string.includes("3")){
//     result.splice(index, 1, "Will you be my neighbor?")
//   } else if (string.includes("2")){
//     result.splice(index, 1, "Boop")
//   } else if (string.includes("1")){
//     result.splice(index, 1, "Beep")
//   }
// }
//   return result;
// }
    

