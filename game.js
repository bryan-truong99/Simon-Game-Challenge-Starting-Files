var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//An event listener for when the user clicks on a button and records the button
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);
});

//Plays the specified sound, takes name parameter
function playSound(name) {
  var audio = new Audio("/sounds" + name +".mp3");
  audio.play();
}

//Randomly selects the next color to be chosen
function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

//Animates the color that is pressed on
function animatePress(currentColor) {
  $(currentColor).addClass(".pressed");

  setTimeout(function(){
    $(currentColor).removeClass(".pressed");
  }, 300);
}
