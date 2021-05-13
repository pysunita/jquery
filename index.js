// $(document).ready(function() {
//   $("h1").css("color","red");
// });

$("h1").addClass("big-title margin-50");
$("button")

$("button").click(function(){
  $("h1").css("color","purple");
});

// $("input").keypress(function(event) {
//   console.log(event.key);
// });

$(document).keypress(function(event) {
  $("h1").text(event.key);
});


$("h1").on("click",function(){
$("h1").css("color", "green")
});
