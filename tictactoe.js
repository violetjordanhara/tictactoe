const gameboard = (() => {
    const board = [['', '', ''],['', '', ''],['', '', '']];
    return{ board }
})();

const gameondom = (() =>{
    //generate the game in DOM
    const createboard = () => {
    const container = document.getElementById("gameboard");
    container.replaceChildren();

    container.style.setProperty('--grid-rows', 3);
    container.style.setProperty('--grid-cols', 3);
    //create cells 
    for (let i = 0 ; i < 3 ; i++){
       for (let j = 0; j < 3; j++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.innerText = gameboard.board[i][j];
        cell.id = `${i}-${j}`;
       }

  
    document.querySelectorAll('.grid-item').forEach(item =>{
    item.addEventListener("click", function(e){
        gameflow.gotClickedWhere(e.target.id)
        })
    })
  };
};
return { createboard }

})();
gameondom.createboard();

const restart = (() => {
    let restartbutton = document.getElementById("restart");
    restartbutton.addEventListener("click", function(){
        gameboard.board = [['', '', ''],['', '', ''],['', '', '']];
        gameondom.createboard();
})})();



const player = (playerNumber, markType, name) => {
    return { playerNumber, markType, name};
}

const playerOne = player('one', 'x', prompt("what is the name of the first player?"));
const playerTwo = player('two', 'o', prompt("what is the name of the second player?"));

const gameflow = (() => {
    let listofplayers = [playerOne, playerTwo]
    let currentPlayer = playerOne;
    let turncounter= 0;

    const gotClickedWhere = (id) => {
        if(gameboard.board[id.charAt(0)][id.charAt(2)] == ''){
            gameboard.board[id.charAt(0)][id.charAt(2)]= currentPlayer.markType;
            document.getElementById(`${id.charAt(0)}-${id.charAt(2)}`).innerHTML = currentPlayer.markType;

            turncounter ++;

            checkWin();
            changeCurrentPlayer();
            
        }
    }

    const changeCurrentPlayer = () => {
        if(currentPlayer == playerOne){
            currentPlayer = playerTwo;
            document.getElementById("announcement").innerHTML= `It is ${currentPlayer.name}'s turn`
        }else{
            currentPlayer = playerOne;
            document.getElementById("announcement").innerHTML= `It is ${currentPlayer.name}'s turn`
        }
    }

    const checkWin = () => {
        if (turncounter == 9){
        console.log('stop game; tie');
        document.getElementById("announcement").innerHTML = "Game tied."
        }else if ((gameboard.board[0][0] == gameboard.board[0][1] && gameboard.board[0][1] == gameboard.board[0][2] && gameboard.board[0][2] == currentPlayer.markType)||
                (gameboard.board[1][0] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[1][2] && gameboard.board[1][2] == currentPlayer.markType)||
                (gameboard.board[2][0] == gameboard.board[2][1] && gameboard.board[2][1] == gameboard.board[2][2] && gameboard.board[2][2] == currentPlayer.markType)){
                console.log(`Player ${currentPlayer.playerNumber} wins, congratulations!`);
                document.getElementById("announcement").innerHTML = `${currentPlayer.name} wins`
        }else if ((gameboard.board[0][0] == gameboard.board[1][0] && gameboard.board[1][0] == gameboard.board[2][0] && gameboard.board[2][0] == currentPlayer.markType)||
            (gameboard.board[0][1] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][1] && gameboard.board[2][1] == currentPlayer.markType)||
            (gameboard.board[0][2] == gameboard.board[1][2] && gameboard.board[1][2] == gameboard.board[2][2] && gameboard.board[2][2] == currentPlayer.markType)||
            (gameboard.board[0][0] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][2] && gameboard.board[2][2] == currentPlayer.markType)||
            (gameboard.board[0][2] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][0] && gameboard.board[2][0] == currentPlayer.markType)){
                console.log(`Player ${currentPlayer.playerNumber} wins`);
                document.getElementById("announcement").innerHTML = `${currentPlayer.name} wins, congratulations!`
            }
    }
    return {gotClickedWhere, changeCurrentPlayer, checkWin}
})();