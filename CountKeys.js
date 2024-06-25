let emp = {
   name: "Nisar",
   age: 22,
   city: "Gwalior",
   Education: {
      Graduation: "BTech",
      Branch: "CSE",
      Skills:{
         Frontend: true,
         backend: true,
         database: true,
      }
   }
}

const keyArray = Object.keys(emp)

const count = keyArray.length;

console.log("Keys in Array main: " + count)