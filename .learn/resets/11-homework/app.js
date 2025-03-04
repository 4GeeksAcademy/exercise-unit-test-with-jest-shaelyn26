const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}

const fromDollarToYen = function(valueInYen) {
    let valueInDollar = valueInYen * 156.5;

    return valueInDollar;
}

const fromYenToPound = function(valueInPound) {
    let valueInYen = valueInPound * 0.87;

    return valueInYen;
}



module.exports = { sum, fromEuroToDollar }
