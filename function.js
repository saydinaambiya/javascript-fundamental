// reguler function
function sum(a, b) {
    return a + b;
}

function pengurangan(a, b) {
    return a - b;
}

function perkalian(a, b) {
    return a * b;
}

function pembagian(a, b) {
    return a / b;
}

function sisabagi(a, b) {
    return a % b;
}

const result = sisabagi(14, 2);
// console.info(result);

// anonymous function
const add = function (a, b) { // anonymous if dont have variable
    return a + b;
}
// expression function

const addExp = function (a, b) {
    return a + b;
}
// aarow function

const addArrow = (a, b) => a + b;
// console.info(addArrow(1, 2));
// iife(intermediate invoke function expression) function
(function (a, b) {
    console.info(a + b);
})(1, 2);

const addAr = ((a, b) => a + b)(1, 2);
console.log(addAr);
(() => {
    console.log("hello enigma")
})();
((nama) => {
    console.log(`Hello ${nama}`)
})('Enigma');