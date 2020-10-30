// Business Logic
function roboSwap(num)  {
  const numArray = [];

  for (let i = 0; i <= num; i++) {
  }

 


Describe: roboSwap()
Test: "It should return an aray with a 5 if the number 5 is input"
Expect: (roboSwap(5).toEqual([5])
















//User Interface Logic

$(document).ready(function()  {
  $("form#userInput").submit(function() {
    event.preventDefault();

    let num = $("input#num").val();
    let result = roboSwap(num);

    // $("output").append(results);

  });
});