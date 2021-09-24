function spiralMatrix(rows, columns) {
    let matrix = [];
    let currNum = 1;
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }
    const size = rows * columns;
    let x = 0;
    let y = 0;
    matrix[y][x] = 1;
    while (matrix.flat(1).length < size) {
        if (y==rows-1 || matrix[y+1][x]!=undefined){
            while(x>0 && matrix[y][x-1]==undefined){
                x--;
                currNum++;
                matrix[y][x] = currNum;
            }
        }
        if(x==0 || matrix[y][x-1]!=undefined){
            while(y>0 && matrix[y-1][x]==undefined){
                y--;
                currNum++;
                matrix[y][x] = currNum;
            }
        }
        while (x < columns-1 && matrix[y][x+1]==undefined) {
            x++;
            currNum++;
            matrix[y][x] = currNum;
        }
        while (y<rows-1 && matrix[y+1][x]==undefined){
            y++;
            currNum++;
            matrix[y][x] = currNum;
        }
    }
    for (let line of matrix){
        console.log(line.join(" "));
    }
}
