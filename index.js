
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
  
  playsound(randomChosenColour)
}

$(".btn").click(function(){
  var userChoosenColour = $(this).attr("id");
  userClickedPattern.push(userChoosenColour);

  console.log(userClickedPattern);

  playsound(userchoosencolour);
})

function playsound(name){


  var audio = new Audio("sounds/" + name +".mp3");
  audio.play();
}