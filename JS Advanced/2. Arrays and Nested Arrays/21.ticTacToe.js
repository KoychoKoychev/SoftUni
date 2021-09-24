function ticTackToe(arr) {
    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]]
    let i = 0;
    let currentPlayer = "X";
    let flag = true;
    while (flag) {
        let [x, y] = arr[i].split(" ").map(Number);
        if (board[x][y] == false) {
            board[x][y] = currentPlayer;
            for (let i = 0;i<3;i++){
                if (board[i].filter(x=>x!=currentPlayer).length == 0){
                    console.log("Player "+currentPlayer+" wins!");
                    flag = false;
                }
                if ((board[0][i]==currentPlayer && board[1][i]==currentPlayer && board[2][i]==currentPlayer)){
                    console.log("Player "+currentPlayer+" wins!");
                    flag = false;
                }
            }
            if ((board[0][0]==currentPlayer && board[1][1]==currentPlayer && board[2][2]==currentPlayer)){
                console.log("Player "+currentPlayer+" wins!");
                break;
            }
            if ((board[0][2]==currentPlayer && board[1][1]==currentPlayer && board[2][0]==currentPlayer)){
                console.log("Player "+currentPlayer+" wins!");
                break;
            }
            if (currentPlayer == "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        } else {
            console.log("This place is already taken. Please choose another!");
        }
        if (!board.flat(1).includes(false)){
            console.log("The game ended! Nobody wins :(");
            break;
        }
        i++;
    }
    for (let el of board){
        console.log(el.join("\t"));
    }
}