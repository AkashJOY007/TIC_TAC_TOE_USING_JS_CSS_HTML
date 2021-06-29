import Game from "./Game.js"
import GameView from "./GameView.js"
let game = new Game();
let gameview = new GameView();
let tiles = document.querySelectorAll(".board-tile");
document.querySelector(".restart").addEventListener("click",()=>{
    console.log("New Game");
    onRestart();
})
tiles.forEach((tile) =>{
    tile.addEventListener("click",()=>{
        ontileClicked(tile.dataset.index)
        }
    )
})
function ontileClicked(i){
    // do something
    game.makeMove(i);
    // makemove
    // update board
    // changeTurn
    gameview.updateBoard(game); 
   
    if(game.findWinningCombination())
    {
        document.querySelector(".restart").innerHTML = "restart";
        return;
    }
    else{
        game.nextTurn();
    }
}
function onRestart()
{
    game = new Game();
    document.querySelector(".restart").innerHTML = "lets play the game";
    gameview.updateBoard(game);
   
    document.querySelector(".winneranounce").innerHTML = "Whose is the Winner?";
}
gameview.updateBoard(game);