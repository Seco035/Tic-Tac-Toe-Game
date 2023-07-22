

let nextPlayerMark = "X",
cells = document.querySelectorAll(".cell"),
board = ["", "", "", "", "", "", "", "", ""];
turnInfo = document.querySelector(".turnInfo")

cells.forEach(cell => {
    cell.addEventListener("click", function(){
        const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);

        if (board[cellIndex] === "") {
            cell.innerHTML = nextPlayerMark;
            board[cellIndex] = nextPlayerMark;
            nextPlayerMark = nextPlayerMark == "X" ? "O" : "X";

            if (checkWin()) {
                alert(`${nextPlayerMark} Wins!`);
                resetBoard();
            }
            else if (checkDraw()){
                alert("It's a tie!")
                resetBoard()
            }
            turnInfo.innerHTML= `Next Player : ${nextPlayerMark}` 
        }
    });
});
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            nextPlayerMark = board[a];
            return true;
        }
        return false;
    });
}

function checkDraw(){
    return board.every(cell => cell != "")
}

function resetBoard(){
    nextPlayerMark = "X";
    cells.forEach(cell => {
        cell.innerHTML = "";
    });
    board = ["", "", "", "", "", "", "", "", ""];
    turnInfo.innerHTML="Next Player: X"
}

document.querySelector("button").addEventListener("click",function(){
    resetBoard()
})