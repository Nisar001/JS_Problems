function getVowels(str){
   let vowels = "aAeEiIoOuU";
   let countVowels = 0;

   for(let i=0; i<str.length; i++){
      if(vowels.indexOf(str[i]) !== -1){
         countVowels += 1;
      }
   }
   return countVowels;
}

let string = "Gwalior is the historical city. aei";
const ab = getVowels(string)

console.log(`the no. of Vowels in the String "${string}" is ${ab}`)