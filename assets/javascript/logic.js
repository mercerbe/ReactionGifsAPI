//Share buttons
$(".button").click(function(){
  $(".social.twitter").toggleClass("clicked");
  $(".social.facebook").toggleClass("clicked");
 $(".social.google").toggleClass("clicked");
  $(".social.youtube").toggleClass("clicked");
})

$("#jumbo").backstretch("assets/images/horse.jpeg");

//Global Variables
var reactionArray = ["mad", "crazy", "confused", "sad", "lol", "happy", "thumbs up", "eye rolls", "high-fives",
                      "yes", "excited", "surprised", "facepalm", "applause", "hello", "smh", "mic drop", "meh"];
var reactionImages = "";

//Show Array Buttons
function displayButtons () {
  $("#reactionButtons").empty();
  $("#reactionInput").val("");
  for (var i = 0; i < reactionArray.length; i++) {
    var buttons = $("<button class='btn btn-dark reactionBtns'>");
    buttons.addClass('reaction_btn');
    buttons.attr("reactionName", reactionArray[i]);
    buttons.text(reactionArray[i]);
    $("#reactionButtons").append(buttons);
    $("#reactionButtons").append(" ");
  }
};


$(document).ready(function() {
  displayButtons();
});
