function orbit(arr) {
    const [b, h, x, y] = arr;
    const board = [];
    const size = Math.max(b, h);
    for (let i = 0; i < b; i++) {
        let line = [];
        line.length = h;
        line.fill(0);
        board.push(line);
    }
    board[x][y] = 1;
    for (let i = 1; i <= size; i++) {
        if ((x+i)<b){
            board[x+i].fill(i+1);
        }
        if ((x-i)>=0){
           board[x-i].fill(i+1);
        }
        if ((y+i)<h){
            for (let j =0;j<b;j++){
                board[j][y+i]=(i+1);}}
        if ((y-i)>=0){
            for (let k =0;k<b;k++){
                board[k][y-i]=(i+1);
            }
        }
    }
    for (let line of board){
        console.log(line.join(" "));
    }
}