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

function iCountToZero(n){
    for(var i=0;i<=n;i++) {
        console.log(n-i)
    }
}

iCountToZero(12)