function power(x, n) {

    return (x === 1) ? x: (x * power(x, n-1));
}

function CountToZero(n) {
    if(n < 0)  {
        return n;
    }
    else {
        console.log(n);
        CountToZero(n -1)
    }
}

CountToZero(12)