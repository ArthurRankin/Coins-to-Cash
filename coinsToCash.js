//console.log("test");

const piggybank = {
    quarters: 4124,
    nickels: 226,
    dimes: 67,
    pennies: 46
};
console.log(piggybank);

function convertCoinsToCash(quarter, nickle, dime, pennie) {
    var howMuchCash = (quarter * .25) + (nickle * .05) + (dime * .10) + (pennie * .01);
    return howMuchCash;
}

console.log("You have", "$" + convertCoinsToCash(piggybank.quarters, piggybank.nickels, piggybank.dimes, piggybank.pennies), "in cash");