function findRoots(a, b, c) { 
   
    // quadratic, but linear 
    if (a == 0) { 
        console.log("Invalid"); 
        return; 
    } 
  
    let d = b * b - 4 * a * c; 
    let sqrt_val = Math.sqrt(Math.abs(d)); 
  
    if (d > 0) { 
        console.log('Roots are real and different'); 
  
        console.log( 
            (-b + sqrt_val) / (2 * a) + " and " + 
            (-b - sqrt_val) / (2 * a) 
        ); 
    } 
    else if (d == 0) { 
        console.log('Roots are real and same'); 
  
        console.log(-b / (2 * a) + " and " + 
            -b / (2 * a)); 
    } 
  
    // d < 0 
    else { 
        console.log('Roots are complex'); 
  
        console.log(-b / (2 * a) + " + i" + 
            sqrt_val / (2 * a) + " and " + 
            -b / (2 * a) + " - i" + sqrt_val) / (2 * a); 
    } 
} 
  
let a = 5, b = -2, c = 7; 
  
 
findRoots(a, b, c);