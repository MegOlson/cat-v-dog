$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Woof</li>");
  });
  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Woof</li>");
    $("ul#cat").prepend("<li>Meow</li>");
  });
  $("button#cat-friend").click(function(){
    $("button#bye-cat").after('<img src="img/cat2.jpg" alt="A photo of a cat" id="cat2">');
    $("button#cat-friend").toggle();
    $("button#bye-cat").toggle();
  });
  $("button#bye-cat").click(function(){
    $("#cat2").remove();
    $("button#cat-friend").toggle();
    $("button#bye-cat").toggle();
  });
  $("button#dog-friend").click(function(){
    $("button#bye-dog").after('<img src="img/dog2.jpg" alt="A photo of a dog" id="dog2">');
    $("button#dog-friend").toggle();
    $("button#bye-dog").toggle();
  });
  $("button#bye-dog").click(function(){
    $("#dog2").remove();
    $("button#dog-friend").toggle();
    $("button#bye-dog").toggle();
  });
});
