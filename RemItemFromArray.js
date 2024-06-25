let arr = [0,15,45,11,21,4,512,1,54,5,12,1,54]

console.log(arr)

const index = 5

for(let i=0; i<=arr.length; i++){
   if(i==index){
      delete arr[i]
   }
}
console.log(arr)