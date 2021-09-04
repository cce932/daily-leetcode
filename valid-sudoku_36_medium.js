var isValidSudoku = function(board) {
  let record = []

  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      const current = board[i][j]
      if (current !== ".") {
        record.push(`row-${i}:${current}`)
        record.push(`col-${j}:${current}`)
        record.push(`grid-${Math.floor(i/3)}-${Math.floor(j/3)}:${current}`)
      }
    }
  }

  return record.length === (new Set(record)).size
}