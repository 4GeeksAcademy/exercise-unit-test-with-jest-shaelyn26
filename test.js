const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function () {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146.26 yen", function (){
    const { fromDollarToYen } = require('./app.js');

    const dollar = fromDollarToYen(1);

    const expected = (1 / 1.07) * 156.5;

    expect(fromDollarToYen(1)).toBe(expected);
})

test("One Yen should be .005 pounds", function(){
    const { fromYenToPound } = require('./app.js');

    const Yen = fromYenToPound(1);

    const expected = (1 / 156.5) * .87;

    expect(fromYenToPound(1)).toBe(expected);
})