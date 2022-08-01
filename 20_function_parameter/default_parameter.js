// function exponentsFormula(baseNumber, exponent) {
//     let result = baseNumber ** exponent;
//     console.log(`${baseNumber}^${exponent} = ${result}`);
// }

// exponentsFormula(2);

/* output
2^undefined = NaN
*/

function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

/* output
3^2 = 9
*/