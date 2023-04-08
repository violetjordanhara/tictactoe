const gameboard = (() => {
    const board = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
    return{ board }
})();

const player = (playerNumber, markType) => {
    const placeMark = () => {
        let row = prompt(`player ${playerNumber}, which row`);
        let col = prompt(`player ${playerNumber}, which column`);
        gameboard.board[row][col] = `${markType}`
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
