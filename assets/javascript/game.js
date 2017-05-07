//function that generates random values between 2 numbers
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//declaring variables for random num, total score, win and loss counts
var random_num = 0;
var totalScore = 0;
var winCounter = 0;
var lossCounter = 0;

//declaring & initializing each crystal value
var redval = 0;
var greenval = 0;
var blueval = 0;
var yellowval = 0;

//function that resets the game when total score matches  or exceeds the random number 
function resetGame() {
  totalScore = 0;
  random_num = randomIntFromInterval(19,120);
  redval= randomIntFromInterval(1,12);
  greenval= randomIntFromInterval(1,12);
  blueval= randomIntFromInterval(1,12);
  yellowval= randomIntFromInterval(1,12);
  console.log("im called");
  console.log("total score is ", totalScore);
  $("#rnum").html(random_num);
  $("#tscore").html(totalScore);
  console.log("Comp generated random num is: ",random_num);
}

//adds totalScore to the crystal value passed, and checks whether it is equal to or greater than random number and displays corresponding message
function checkTotal(val) {
  totalScore += val;
  $("#tscore").html(totalScore);
  if (totalScore === random_num) {
  	console.log("You Won");
  	winCounter++;
  	$("#tscoreWin").html(winCounter);
  	$("#mesg").html('You Won!');
  	resetGame();
  }
  else if (totalScore > random_num) {
    console.log("You Lost");
    lossCounter++;
    $("#tscoreLost").html(lossCounter);
    $("#mesg").html('You Lost!');
    resetGame();
  }
}

//on red crystal click
$("#red").on('click',function(){
 checkTotal(redval);
});

//on green crystal click
$("#green").on('click',function(){
 checkTotal(greenval);
});

//on blue crystal click
$("#blue").on('click',function(){
 checkTotal(blueval);
});

//on yellow crystal click
$("#yellow").on('click',function(){
 checkTotal(yellowval);
});

//after all the variables and functions are defined resetGame is called, and whenever totalScore >= random number called again
resetGame();



