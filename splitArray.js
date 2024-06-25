const chunks = 5

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr1 = arr.slice(0, chunks)
let arr2 = arr.slice(chunks, chunks + arr.length)

console.log(`array1 is ${arr1} and Array2 is ${arr2}`)