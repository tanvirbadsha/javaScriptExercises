var onWall = 99;
var remainingBottle = 98;
var i =0;
function beer(){
    if(i == 99){
        console.log(` No more bottles of beer on the wall, no more bottles of beer.`);
        onWall--;
        console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
        remainingBottle--;
    }else{
        console.log(` ${onWall} bottles of beer on the wall, ${onWall} bottles of beer.`);
        onWall--;
        console.log(`Take one down and pass it around, ${remainingBottle} bottles of beer on the wall.`)
        remainingBottle--;
    }
}
 
while(i < 100){
    beer();
    i++;
}