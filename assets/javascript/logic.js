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
                      "yes", "excited", "surprised", "facepalm", "applause", "hello", "smh", "mic drop", "meh", "party", "gross", "fml"];
reactionArray.sort();
var reactionImages = "";

//AJAX
function displayGif() {
  var gif = $(this).attr("data-name")
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=5VKuOF0tbf4Bnf3mmbSIE3LFAcRdBlld&limit=10";

  $.ajax({
    url: queryURL,
    type: 'GET',
  })
  .done(function(response) {
    console.log(response);
    //show gif
    var results = response.data;
    for (var i = 0; i < results.length; i++) {


    var showGif = $("<div>");
    var p = $("<p>");
    p.text = (results[i].rating);
    var gifImage = $("<img>");
    gifImage.attr("src", results[i].image.fixed_height.url);
    showGif.append(p);
    showGif.append(gifImage);
    $(".gifContainer").prepend(showGif);
  }
    //show gif paused
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}

//Show Buttons
function displayButtons () {
  $("#reactionButtons").empty();
  for (var i = 0; i < reactionArray.length; i++) {
    var buttons = $("<button class='btn btn-dark reactionBtns'>");
    buttons.attr("data-name", reactionArray[i]);
    buttons.text(reactionArray[i]);
    $("#reactionButtons").append(buttons);
  }
};

//Search Button Click
$(".addGif").on("click", function(event) {
  event.preventDefault();
  var gif = $("#searchGif").val().trim();
  reactionArray.push(gif);
  reactionArray.sort();
  displayButtons();
  displayGif();
});


$(document).on("click", ".reactionBtns", displayGif);
displayButtons();
