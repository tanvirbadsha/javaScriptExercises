var name1 = "tanvir badsha"
var name2 = "Tohaiba Afrin"

function loveCalc(name1 , name2){
    var randomNum = Math.random();
    var score = (randomNum * name1.length) + 1;
    score = Math.floor(score) * 10;
    return score;
}

console.log(loveCalc(name1, name2));