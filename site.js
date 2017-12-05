$("#circle").click(function(){
  $("p").html("Hey! Get off!");
});

$(".square").click(function(){
  $(this).css("background", "blue");
});

$(".square").hover(function(){
  $(".square").css("width", "400px");
});
