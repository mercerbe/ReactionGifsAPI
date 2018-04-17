//Share buttons
$(".button").click(function(){
  $(".social.twitter").toggleClass("clicked");
  $(".social.facebook").toggleClass("clicked");
 $(".social.google").toggleClass("clicked");
  $(".social.youtube").toggleClass("clicked");
})



//Global Variables
var reactionArray = ["mad", "crazy", "confused", "sad", "lol", "thumbs up", "eye rolls", "high-fives",
                      "yes", "excited", "surprised", "facepalm", "applause", "smh", "mic drop", "meh", "fml"];
reactionArray.sort();

//AJAX
function displayGif() {
  var offset = 0;
  var gif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=5VKuOF0tbf4Bnf3mmbSIE3LFAcRdBlld&limit=10&offset=" + offset;
  $.ajax({
    url: queryURL,
    type: 'GET',
  })
  .done(function(gif) {
    $("#jumbo").backstretch("assets/images/horse.jpeg");
    console.log(gif);
    //show gif paused
    var results = gif.data;
    for (var i = 0; i < results.length; i++) {
    var showGif = $("<div class='gifDiv'>");
    var rating = $("<p class='rating'>");
    rating.text("rating: " + results[i].rating);
    var gifImage = $("<img class='gifs animate still btn'>");
    gifImage.attr({"src":results[i].images.fixed_height_still.url, "still":results[i].images.fixed_height_still.url, "animate":results[i].images.fixed_height.url});
    showGif.append(rating);
    showGif.append(gifImage);
    $(".gifContainer").prepend(showGif);
    //show gif moving/paused
    $(gifImage).on("click", function() {
      if($(this).hasClass("animate")){
      $(this).attr("src", $(this).attr('animate'));
      $(this).removeClass('animate');
    } else {
      $(this).attr("src", $(this).attr('still'));
      $(this).addClass('animate');
    }
    })
  }

  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

//Clear Gifs Button
  $(".clearGifs").on("click", function() {
    $(".gifContainer").empty();
    $(window).scrollTop(0);
  });

};

//Show Buttons
function displayButtons () {
  $("#reactionButtons").empty();
  $("#jumbo").backstretch("assets/images/horse.jpeg");
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
  console.log(gif);
  reactionArray.push(gif);
  reactionArray.sort();
  $("#searchGif").val('');
  displayButtons();

});

//Call functions on button clicks
$(document).on("click", ".reactionBtns", displayGif);
displayButtons();
