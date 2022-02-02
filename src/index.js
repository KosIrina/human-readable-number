let ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}

let teens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
}

let tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
}

function toReadableLessThanThreeDigits(number) {

    let result = '';

    if (number < 10) {
        return ones[number];
    }

    if (number in teens) {
        result += teens[number]; 
    } else {
        result += tens[number.toString().charAt(0)];
        if (number.toString().charAt(1) !== '0') {
            result += ' ' + ones[number.toString().charAt(1)];
        }
    }

    return result;
}


module.exports = function toReadable(number) {

    let result = '';

    if (number < 100) {
        result += toReadableLessThanThreeDigits(number);
        return result;
    }

    result += ones[number.toString().charAt(0)] + ' hundred';
    if (number.toString().substring(1) !== '00') {
        result += ' ' + toReadableLessThanThreeDigits(Number(number.toString().substring(1)));
    }

    return result;

}
