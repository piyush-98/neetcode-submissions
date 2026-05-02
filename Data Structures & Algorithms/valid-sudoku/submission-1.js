class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boardMap=new Map();
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(board[i][j]==='.'){
                    continue;
                }
                if(boardMap.has(board[i][j])){
                    const indicesArr=boardMap.get(board[i][j]);
                    const squareNo=Math.floor(i/3)*3+Math.floor(j/3);
                    for(let position of indicesArr){
                        const sameRowOrCol=(i==position[0])||(j===position[1])
                        const sameBox=squareNo===position[2];
                        if(sameRowOrCol||sameBox){
                            return false
                        }
                    }
                    indicesArr.push([i,j,squareNo]);
                    boardMap.set(board[i][j],indicesArr)
                }
                else{
                    const arr=Array();
                    const squareNo=Math.floor(i/3)*3+Math.floor(j/3)
                    arr.push([i,j,squareNo])
                    boardMap.set(board[i][j],arr)
                }
            }
        }
        return true;
    }
}
