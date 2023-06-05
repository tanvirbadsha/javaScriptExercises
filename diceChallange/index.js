// random dice generator
var dice1 = Math.floor((Math.random()* 6)+1);
var dice2 = Math.floor((Math.random()* 6)+1);
console.log(dice1, dice2);
var player1 = document.querySelector(".img1").src = `./images/dice${dice1}.png`;
var palyer2 = document.querySelector(".img2").src = `./images/dice${dice2}.png`;

if(dice1 > dice2){
    title = document.querySelector(".container h1").innerHTML = "Player 1 wins!";
}else if(dice2 > dice1){
    title = document.querySelector(".container h1").innerHTML = "Player 2 wins!";
}else{
    title = document.querySelector(".container h1").innerHTML = "Draw!!";
}
