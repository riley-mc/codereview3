// Business Logic
function roboSwap(num)  {
  const numAray = [];

}














//User Interface Logic

$(document).ready(function()  {
  $("form#text").submit(function() {
    event.preventDefault();

    let num = $("input#num").val();
    let result = roboSwap(num);

    $("output").append(results);

  });
});











