function NumberCheck (number){
   return Math.sign(number)
}

let num1 = 7
let num2 = -85
let num3 = 0

console.log(NumberCheck(num1))
console.log(NumberCheck(num2))
console.log(NumberCheck(num3))

// -1 indicates negetive number
// 1 indicates positive number
// 0 indicates zero number
