let str = "Nisar Khan is the Student of CSE"

let encode = window.btoa(str)
console.log(encode)

let decode = window.atob(encode)
console.log(decode)