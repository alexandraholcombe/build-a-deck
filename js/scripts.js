var cards = [" of diamonds", " of hearts", " of spades", " of clubs"]
var numbers = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];

var suitsChoice = 0;


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    //This declares suitsChoice
    suitsChoice = $("#card-type").val();

    //This starts the if statement
    if (suitsChoice === "all-suits") {
      for (var index =0; index < cards.length; index++){
        numbers.forEach(function(number){
          $("ul#result").append("<li>" + number + cards[index] + "</li>");
        });
      };
    } else if (suitsChoice === "diamonds") {
      numbers.forEach(function(number){
        $("ul#result").append("<li>" + number + cards[0] + "</li>")
      });
    } else if (suitsChoice === "hearts") {
      numbers.forEach(function(number){
        $("ul#result").append("<li>" + number + cards[1] + "</li>")
      });
    } else if (suitsChoice === "spades") {
      numbers.forEach(function(number){
        $("ul#result").append("<li>" + number + cards[2] + "</li>")
      });
    } else {
      numbers.forEach(function(number){
        $("ul#result").append("<li>" + number + cards[3] + "</li>")

        console.log(cards[3]);
      });
    };
  });
});
