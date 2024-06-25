let details = [
   {name: "Nisar", age: 20},
   {name: "Arun", age: 16},
   {name: "Gaurav", age: 52},
   {name: "Sabir", age: 45},
]

details.sort((a, b) =>(
   a.age > b.age ? 1 : b.age > a.age ? -1 : 0
))
console.log(details)