
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;
var level1 = 0;

$(document).keypress(function(){
  if (!started) {
    $("#level-title").text("Level "+level)
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userChoosenColour = $(this).attr("id");
  userClickedPattern.push(userChoosenColour);

  playSound(userChoosenColour);
  animatePress(userChoosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart\nyou scored: "+level1);

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}




function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).delay(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour)
}


function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed")
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed")
  },100)
}

function playSound(name){
  var audio = new Audio("sounds/" + name +".mp3");
  audio.play();
}


function startOver() {
  level1 = level;
  level = 0;
  gamePattern = [];
  started = false;
}