
function suma(num1, num2) {
    return num1 + num2;
}

function calculate(num1, num2, operaction) {
    return operaction(num1, num2);
}

console.log(calculate(3, 5, suma));
