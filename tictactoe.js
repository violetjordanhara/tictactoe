const gameboard = (() => {
    const board = [['', '', ''],['', '', ''],['', '', '']];
    return{ board }
})();

const gameondom = (() =>{
    //generate the game in DOM :)
    const container = document.getElementById("gameboard");

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
})();



const player = (playerNumber, markType) => {
    return { playerNumber, markType};
}

const playerOne = player('one', 'x');
const playerTwo = player('two', 'o');

const gameflow = (() => {
    let listofplayers = [playerOne, playerTwo]
    let currentPlayer = playerOne;
    let turncounter= 0;

    const gotClickedWhere = (id) => {
        if(gameboard.board[id.charAt(0)][id.charAt(2)] == ''){
            gameboard.board[id.charAt(0)][id.charAt(2)]= currentPlayer.markType;
            document.getElementById(`${id.charAt(0)}-${id.charAt(2)}`).innerHTML = currentPlayer.markType;

            turncounter ++;

            changeCurrentPlayer();
            checkWin();
        }
    }

    const changeCurrentPlayer = () => {
        if(currentPlayer == playerOne){
            currentPlayer = playerTwo;
        }else{
            currentPlayer = playerOne;
        }
    }

    const checkWin = () => {
        const allEqualX = arr => arr.every( v => v === player.markType );

        if (turncounter == 9){
        console.log('stop game; tie');
        }else if (allEqualX( gameboard.board[0] || gameboard.board[1] || gameboard.board[2]) == true){
        console.log(`${currentPlayer} wins`);
        }else if ((gameboard.board[0][0] == gameboard.board[1][0] && gameboard.board[1][0] == gameboard.board[2][0] && gameboard.board[2][0] == currentPlayer.markType)||
            (gameboard.board[0][1] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][1] && gameboard.board[2][1] == currentPlayer.markType)||
            (gameboard.board[0][2] == gameboard.board[1][2] && gameboard.board[1][2] == gameboard.board[2][2] && gameboard.board[2][2] == currentPlayer.markType)||
            (gameboard.board[0][0] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][2] && gameboard.board[2][2] == currentPlayer.markType)||
            (gameboard.board[0][2] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][0] && gameboard.board[2][0] == currentPlayer.markType)){
        console.log(`${playerNumber} wins`);
        }
    }
    return {gotClickedWhere, changeCurrentPlayer, checkWin}
})();