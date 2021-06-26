console.log("Hallo Winc Academy Studenten");


//Hey kiddo
const yourAge = function (number) {
    if (number >= 18) {
        return true;
    }
    return false;
};

const checkingYourAge = function (number) {
    const ageCheck = yourAge(number);
    if (ageCheck === true) {
        return "Hello there"
    } else {
    return "Hey kiddo"
    } 
};

console.log(checkingYourAge(26));
console.log(checkingYourAge(15));
console.log(checkingYourAge(100));


//VAT calculations exercise 1
const calcVAT1 = function (number) {
    return number * 0.21;
}

const calcTotalPrice = function (number) {
    return number + calcVAT1(number);
}

console.log('Total Price:', calcTotalPrice(100));
console.log('Total Price:', calcTotalPrice(200));
console.log('Total Price:', calcTotalPrice(1100));


//VAT calculations exercise 2
const calcVAT2 = function (number) {
    return number - (number / 1.21);
}

const calcBoth= function (number) {
    const tax = calcVAT2(number);
    const basePrice = number - tax;
    const both = [basePrice,tax];
    return both;
}

console.log('Base Price & VAT:', calcBoth(121));
console.log('Base Price & VAT:', calcBoth(242));
console.log('Base Price & VAT:', calcBoth(1210));
console.log('Base Price & VAT:', calcBoth(1331));

