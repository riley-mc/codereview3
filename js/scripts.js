// Business Logic
function roboSwap(num, word)  {
  const numArray = [];

  for (let i = 0; i <= num; i++) {
    let check = i.toString();

    if(check.includes(1)) {
      numArray.push("Won't you be my neighbor?")
    }

    }
  }

 










//User Interface Logic

$(document).ready(function()  {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var result = roboSwap(number);
    // $("#number").val (" "); Might not need
    $("#container").text(results);
    $("results").show();

    let num = $("input#num").val();
    let result = roboSwap(num);

    // $("output").append(results);

  });
});