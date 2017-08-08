$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Woof</li>");
  });

  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Woof</li>");
    $("ul#cat").prepend("<li>Meow</li>");
  });
});
