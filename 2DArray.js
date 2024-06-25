let arr = [];
let row = 4;
let col = 4;
let h = 0

for(let i=0; i<row; i++){
   arr[i] = []
   for(let j=0; j<col; i++){
      arr[i][j] = h++
   }
}

console.log(arr)