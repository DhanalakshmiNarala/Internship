const fizzBuzz = (startRange, endRange) => {
    let result = [];
    for(let num = startRange; num <= endRange; num++) {
        result.push(getText(num));
    }
    return result;
}

const getText = (num) => {
    if(num % 3 == 0 && num % 5 == 0)
        return 'Fizz Buzz';
    if(num % 3 == 0)
        return 'Fizz';
    if(num % 5 == 0)
        return 'Buzz';
    return num;
}

module.exports = fizzBuzz;