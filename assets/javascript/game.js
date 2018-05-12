
$(document).ready(function() {

//create a random number between 19-120 in col3
var randNum = Math.floor(Math.random() * 101 + 19)
$("#col3").text(randNum);

//assign a random number to red, blue, yellow, and green between 1-12
var redCrystal = Math.floor(Math.random() * 11 + 1)
var yellowCrystal = Math.floor(Math.random() * 11 +1)
var greenCrystal = Math.floor(Math.random() * 11 + 1)
var blueCrystal = Math.floor(Math.random() * 11 + 1)

var userTotal = 0;
var wins = 0;
var losses = 0;

//when crystal buttons are pressed, add together in col6
//track wins and losses in col4
$("#numWins").text(wins);
$("#numLosses").text(losses);

//if col3 is equaled or exceeded, win or lose and reset
function reset() {
    randNum = Mat.floor(Math.random() * 101 + 19);
    console.log(randNum);
    $("#col3").text(randNum);
    redCrystal = Math.floor(Math.random() * 11 + 1);
    yellowCrystal = Math.floor(Math.random() * 11 + 1);
    greenCrystal = Math.floor(Math.random() * 11 + 1);
    blueCrystal = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("#col6").text(userTotal);
}
//adds wins to col4
function won() {
    alert("Winner!");
    wins++;
    $("#numWins").text(wins);
    reset();
}
//adds losses to col4
function lost() {
    alert("Loser!");
    losses++;
    $("#numLosses").text(losses);
    reset()
}
//assign new numbers to crystal buttons
//click button functions
$("#red").on("click", function(){
    userTotal = userTotal + redCrystal;
    console.log(userTotal);
    $("#col6").text(userTotal);
    if(userTotal == randNum){
        won();
    }
    else if(userTotal > randNum){
        lost();
    }
})
$("#yellow").on("click", function(){
    userTotal = userTotal + yellowCrystal;
    console.log(userTotal);
    $("#col6").text(userTotal);
    if(userTotal == randNum){
        won();
    }
    else if(userTotal > randNum){
        lost();
    }
})
$("#green").on("click", function(){
    userTotal = userTotal + greenCrystal;
    console.log(userTotal);
    $("#col6").text(userTotal);
    if(userTotal == randNum){
        won();
    }
    else if(userTotal > randNum){
        lost();
    }
})
$("#blue").on("click", function(){
    userTotal = userTotal + blueCrystal;
    console.log(userTotal);
    $("#col6").text(userTotal);
    if(userTotal == randNum){
        won();
    }
    else if(userTotal > randNum){
        lost();
    }
})

})