//NOTE - Step 1: Setting up game board

// initialising a 3x3 game board (empty spots are represented by numbers 1 through 9)
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

// the board is represented as an array with numbers 1 through 9. each number corresponds to a position on the grid.

// function to print the board
function printBoard() {
    console.log(`
     ${board[0]} | ${board[1]} | ${board[2]}
    ---+---+---
     ${board[3]} | ${board[4]} | ${board[5]}
    ---+---+---
     ${board[6]} | ${board[7]} | ${board[8]}
    `);
}

// printBoard() function displays the board on the console

//  1 | 2 | 3
// ---+---+---
//  4 | 5 | 6
// ---+---+---
//  7 | 8 | 9

// print example board
printBoard()

//NOTE - Step 2: Programming player move
