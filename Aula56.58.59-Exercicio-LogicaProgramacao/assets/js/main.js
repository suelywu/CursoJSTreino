// Operador ternario
function biggerNumber (num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}

// Arrow function
const ePaisagem2 = (largura, altura) => largura > altura ? true : false;

// FizzBuzz
function fizzBuzz(num) {
    if (typeof num !== "number") return num;
    if (num%3 === 0 && num%5 === 0) return "FizzBuzz";
    if (num%3 === 0) return "Fizz";
    if (num%5 === 0) return "Buzz";
    return num;
}

console.log('a', fizzBuzz('a'));
console.log('1', fizzBuzz('1'));
for (let i = 0; i<=100; i++) {
    console.log(i, fizzBuzz(i));
}