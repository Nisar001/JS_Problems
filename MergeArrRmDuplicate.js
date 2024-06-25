let ar1 = [1, 5, 3];
let ar2 = [4, 5, 8];
let newAr = ar1.concat(ar2.
    filter((item) => ar1.indexOf(item) < 0));
console.log(newAr);