function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


var random_num = 0;
var totalScore = 0;
var winCounter = 0;
var lossCounter = 0;
//var crystals = [];
/*for (var i=0; i<crystals.length; i++){
  crystals[i]= randomIntFromInterval(1,12);
  console.log("Random num for crystal " + i + " is " + crystals[i]);
}*/
var redval = 0;
var greenval = 0;
var blueval = 0;
var yellowval = 0;

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
  //return totalScore;
}

function checkTotal(val) {
  totalScore += val;
  $("#tscore").html(totalScore);
  if (totalScore === random_num) {
    console.log("You Won");
    winCounter++;
    $("#tscoreWin").html(winCounter);
     $("#mesg").html('<h2>You Won!</h2>');
    resetGame();
  }
  else if (totalScore > random_num) {
    console.log("You Lost");
    //$("#tscoreLost").append("You Lost!");
    lossCounter++;
    $("#tscoreLost").html(lossCounter);
     $("#mesg").html('<h2>You Lost!</h2>');
    resetGame();
  }
}

$("#red").on('click',function(){
  //var cvalue = randomIntFromInterval(1,12);
 checkTotal(redval);
  //totalScore += redval; 
  //scoreCounter++;
  
  //console.log("Total Score: ",totalScore);
  //$("#tscore").html(totalScore);
});

$("#green").on('click',function(){
  //var cvalue = randomIntFromInterval(1,12);
 checkTotal(greenval);
  //totalScore += greenval; 
  //scoreCounter++;
  
  //console.log("Total Score: ",totalScore);
  //$("#tscore").html(totalScore);
});
$("#blue").on('click',function(){
  //var cvalue = randomIntFromInterval(1,12);
 checkTotal(blueval);
  //totalScore += blueval; 
  //scoreCounter++;
  
  //console.log("Total Score: ",totalScore);
  //$("#tscore").html(totalScore);
});
$("#yellow").on('click',function(){
  //var cvalue = randomIntFromInterval(1,12);
 checkTotal(yellowval);
  //totalScore += yellowval; 
  //scoreCounter++;
  
  //console.log("Total Score: ",totalScore);
// $("#tscore").html(totalScore);
});

resetGame();
//console.log("total: ",totalScore);


