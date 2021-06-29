export default class GameView{
    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombination();
        console.log("this is a board ",game.board);
    for(let i = 0;i<game.board.length;i++)
    {
        const tile = document.querySelector(`.board-tile[data-index='${i}']`);
        tile.textContent = game.board[i];
        tile.classList.remove("tile-winner");
        let titleType = game.board[i]=='X'? "tile-x":"tile-o";
        tile.innerHTML = `<span class = "${titleType}">${game.board[i]?game.board[i]:""
        }</span>`
    if(winningCombination && winningCombination.includes(i))
    {
        tile.classList.add("tile-winner");
    }
    }
}
    updateTurn(game)
    {
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");
        playerX.classList.remove('active');
        playerO.classList.remove('active');
        if(game.turn=='X')
        {
            playerX.classList.add('active');
        }
        else{
            playerO.classList.add('active');
        }
    }
 
}