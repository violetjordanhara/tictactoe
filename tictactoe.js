const gameboard = (() => {
    let board = [['o', 'x', 'o'],['x', 'o', 'x'],['o', 'x', 'o']];
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
  };
})();



const player = (playerNumber, markType) => {
    const placeMark = () => {
        //// add event listener to each cell. when each cell is clicked, that player's marktype is given to the cell's relative position in the array
        //the cell that the player clicks updates the player mark to the position in the gameboard
        document.querySelectorAll('.grid-item').forEach(item =>{
        item.addEventListener('click', event => {
        item.innerText = player.markType;
        gameboard.board[item.id.charAt(0)][item.id.charAt(2)]= player.markType
        console.log(gameboard.board)
        })
    })
        console.log(gameboard.board)};
    return { playerNumber, markType, placeMark };
}

const playerOne = player('one', 'x');
const playerTwo = player('two', 'o');

const gameflow = (() =>{
 //make sure each player gets a turn until someone wins
 //how do i prevent overlaps
 let totalNumberOfTurns = 0;
 while (totalNumberOfTurns<9){
 playerOne.placeMark();
 totalNumberOfTurns++;
 console.log(totalNumberOfTurns);
    //winning conditions
    //all of the rows 
    const allEqualX = arr => arr.every( v => v === 'x' )
    if (totalNumberOfTurns == 9){
        console.log('stop game; tie')
        break
    }else if (allEqualX( gameboard.board[0] || gameboard.board[1] || gameboard.board[2]) == true){
        console.log('Player one wins');
        break
        //all of the columns
        //2 diagonals
    }  else if ((gameboard.board[0][0] == gameboard.board[1][0] && gameboard.board[1][0] == gameboard.board[2][0] && gameboard.board[2][0] == 'x')||
            (gameboard.board[0][1] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][1] && gameboard.board[2][1] =='x')||
            (gameboard.board[0][2] == gameboard.board[1][2] && gameboard.board[1][2] == gameboard.board[2][2] && gameboard.board[2][2] =='x')||
            (gameboard.board[0][0] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][2] && gameboard.board[2][2] == 'x')||
            (gameboard.board[0][2] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][0] && gameboard.board[2][0] =='x')){
        console.log('Player one wins');
        break
    }

//playerTwo's turn
    playerTwo.placeMark();
    totalNumberOfTurns++;
    console.log(totalNumberOfTurns);
    const allEqualO = arr => arr.every( v => v === 'o' )
    if (allEqualO( gameboard.board[0] || gameboard.board[1] || gameboard.board[2]) == true){
        console.log('Player two wins');
        break
    }  else if ((gameboard.board[0][0] == gameboard.board[1][0] && gameboard.board[1][0] == gameboard.board[2][0] && gameboard.board[2][0] == 'o')||
            (gameboard.board[0][1] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][1] && gameboard.board[2][1] =='o')||
            (gameboard.board[0][2] == gameboard.board[1][2] && gameboard.board[1][2] == gameboard.board[2][2] && gameboard.board[2][2] =='o')||
            (gameboard.board[0][0] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][2] && gameboard.board[2][2] == 'o')||
            (gameboard.board[0][2] == gameboard.board[1][1] && gameboard.board[1][1] == gameboard.board[2][0] && gameboard.board[2][0] == 'o')){
        console.log('Player two wins');
        break
    }
 }
    }
)();
