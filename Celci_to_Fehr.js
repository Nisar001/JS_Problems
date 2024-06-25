function CelToFer (celsius){
   return celsius * 9/5 + 32
}

function FerToCel (fahrenheit){
   return (fahrenheit - 32) * 5/9
}

let a = 55  // celsius to fer.

console.log(CelToFer(a))

let b = 130 //fer to cel

console.log(FerToCel(b))