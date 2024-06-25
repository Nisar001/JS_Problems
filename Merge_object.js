let obj1 = {
   name: "Nisar",
   age: 22,
}

let obj2 = {
   course: "BTech",
   city: "Gwalior",
}

let obj = Object.assign(obj1, obj2)

for(var key of Object.keys(obj)){
   console.log(key + "-" + obj[key])
}