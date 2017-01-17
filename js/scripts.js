var cards = [" of diamonds", " of hearts", " of spades", " of clubs"]
var numbers = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];

var suitsChoice = 0;


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    // forEach loop
    // numbers.forEach(function(number){
    //   $("ul#result").append("<li>" + number + cards[0] + "</li>")
    // });
    // numbers.forEach(function(number){
    //   $("ul#result").append("<li>" + number + cards[1] + "</li>")
    // });
    // numbers.forEach(function(number){
    //   $("ul#result").append("<li>" + number + cards[2] + "</li>")
    // });
    // numbers.forEach(function(number){
    //   $("ul#result").append("<li>" + number + cards[3] + "</li>")
    // });
    suitsChoice = $("#card-type").val();
    
    if (suitsChoice = "all-suits") {
      for (var index =0; index < cards.length; index++){
        numbers.forEach(function(number){
          $("ul#result").append("<li>" + number + cards[index] + "</li>");
        });
      } else if (suitsChoice = "diamonds") {

      } else if (suitsChoice = "hearts") {

      } else if (suitsChoice = "spades") {

      } else {

      };

    };

  });
});
