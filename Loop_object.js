const object = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50}

Object.keys(object).forEach(key => {
   const value = object[key]
   console.log(`Key is ${key} and Value is ${value}`)
})