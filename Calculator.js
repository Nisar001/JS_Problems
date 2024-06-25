function add (a, b){
   return a + b
}
function sub (a, b){
   return a - b
}
function mul (a, b){
   return a * b
}
function divide (a, b){
   return a / b
}
function mod (a, b){
   return a % b
}

num1 = 10 
num2 = 30

console.log("Addition of " + num1 + " & " + num2 + " is " + add(num1, num2))
console.log("Subtraction of " + num1 + " & " + num2 + " is " + sub(num1, num2))
console.log("Multiplication of " + num1 + " & " + num2 + " is " + mul(num1, num2))
console.log("Division of " + num1 + " & " + num2 + " is " + divide(num1, num2))
console.log("Modulus of " + num1 + " & " + num2 + " is " + mod(num1, num2))