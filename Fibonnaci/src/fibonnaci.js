const fibonnaciNumbers = (rangeStart, rangeEnd)=> {
    let result = [];
    for(let i=rangeStart; i<=rangeEnd; i++)
        result.push(nthFibonnaciNumber(i));
    return result;
}

const nthFibonnaciNumber = (n)=> {
    if(n == 1 || n == 2)
        return 1;
    return nthFibonnaciNumber(n - 1) + nthFibonnaciNumber(n - 2);
}


module.exports = fibonnaciNumbers;