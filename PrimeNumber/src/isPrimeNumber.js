const isPrimeNumber = (num) => {
    for(let i=2; i<num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}

module.exports = isPrimeNumber;