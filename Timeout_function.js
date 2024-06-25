//Anonyumous
setTimeout(function(para1, para2){
   console.log(para1 + "," + para2)
},3000, 'Hello', 'Nisar');

//Arrow 
setTimeout((par1, par2) => {
   console.log(par1 + "," + par2)
},4000, 'Hiii', 'soloLab')

// bind
const data = {
   name: "Nisar",
   greet: function(message){
      console.log(message + ", " + this.name + " !" )
   }
}
setTimeout(data.greet.bind(data, "Hello"), 2000)