function fibonacci_num(n) {
            if (n == 0) {
                return 0;
            }
            else if (n == 1) {
                return 1;
            }
            else {
                return fibonacci_num(n - 2) + fibonacci_num(n - 1);
            }
        }
 
 
        let n = 7;
        for (let i = 0; i < n; i++) {
            console.log(fibonacci_num(i) + " ");
        }