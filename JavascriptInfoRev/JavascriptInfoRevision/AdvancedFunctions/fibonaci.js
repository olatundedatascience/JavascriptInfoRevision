function iFactorial(n) {
    let result = 1;

    for(var i=n;i>0;i--) {
        if(i == n) {
            result = n;
            continue;
        }
        else {
            let k = n - i;
        result *= k;
        }
        
    }

    return result;
}

function Factorial(n) {
    if(n == 1) {
        return n;
    }
    else {
        return n * Factorial(n - 1)
    }
}


function ipower(x, n) {
    let result = 1;
    for(var i=0;i<n;i++) {
        result *= x;
    }

    return result;
}

function power(x, n) {
    if(n ==1) {
        return x;
    }
    else {
        return x * power(x, n -1)
    }
}
console.log(Factorial(3));