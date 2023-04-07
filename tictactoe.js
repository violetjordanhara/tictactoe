const gameboard = (() => {
    const board = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
    return{ board }
})();

const player = (playerNumber, markType) => {
    const placeMark = () => {
        let row = prompt('which row');
        let col = prompt('which column');
        gameboard.board[row][col] = `${markType}`
        console.log(gameboard.board)};
    return { playerNumber, markType, placeMark };
}

const playerOne = player('one', 'x');
const playerTwo = player('two', 'o');
/*
const gameflow = (() =>{
 
    }
})
*/