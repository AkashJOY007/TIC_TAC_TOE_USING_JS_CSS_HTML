export default class Game{
    constructor(){
        console.log("Hello world");
        this.turn = "X";
        this.board = new Array(9).fill(null);
        console.log(this.board);
    }
    nextTurn(){
        if(this.turn=="X")
        {
            this.turn = "O";
        }
        else{
            this.turn = "X";
        }
    }
    makeMove(i){
        if(this.endofGame())
        {
            console.log("We have a Winner!!!!!!!!")
            return;
        }
        if(this.board[i])
        {
            return null;
        }
        this.board[i] = this.turn;
    let winningCobination =  this.findWinningCombination();
    if(winningCobination && this.turn=="X")
    {
    console.log("This is a winning Combination",winningCobination);
    document.querySelector(".winneranounce").innerHTML = "Winner is "+this.turn;
    }
    else if (winningCobination && this.turn == "O") {
        console.log("This is a winning Combination", winningCobination);
        document.querySelector(".winneranounce").innerHTML = "Winner is " + this.turn;
    }
}
    findWinningCombination(){
        const winningcombination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2],
        ]
        for(const combination of winningcombination)
        {
            const[a,b,c] = combination;
           if(this.board[a] && this.board[a]==this.board[b] && this.board[a]==this.board[c])
           {
            return combination;
           }
        }
        return null;
    }
    endofGame()
    {
        let winningcombination = this.findWinningCombination();
        if(winningcombination)
        {
            return true;
        }
        else{
            return false;
        }
    }
}