function isArmstr(num) {
    const digits = num.toString().split('');
    const order = digits.length;
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);
 
    if (sum === num) {
        console.log(
            num + " is an Armstrong Number");
    }
    else {
        console.log
            (num + " is not an Armstrong Number");
    }
}
 
isArmstr(9474);
isArmstr(520);