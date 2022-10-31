/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    res = {}
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                if (!helper(res, board[i][j]))
                    return false
            }
        }
        res = {}
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[j][i] != '.') {
                if (!helper(res, board[j][i]))
                    return false
            }
        }
        res = {}
    }
    let iBase, iOffset, jOffset = 0, r, c;
    for (let i = 0; i < 9; i++) {
        if (i % 3 == 0)
            iBase = i
        iOffset = -1
        
        for (let j = 0; j < 9; j++) {
            if (j % 3 == 0)
                iOffset += 1
            r = iBase + iOffset
            c = j % 3 + jOffset
            if (board[r][c] != '.') {
                if (!helper(res, board[r][c]))
                    return false
            }
        }
        jOffset += 3
        jOffset %= 9
        res = {}
    }
    return true
};

function helper(res, chr) {
    res[chr] = res[chr] > 0? res[chr] + 1 : 1
    if (res[chr] > 1)
        return false
    return true
}
