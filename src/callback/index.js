// Callback:

function suma(num1, num2) {
    return num1 + num2;
}

function calculate(num1, num2, operaction) {
    return operaction(num1, num2);
}

console.log(calculate(3, 5, suma));

// another example:

function my_date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 5000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

my_date(printDate);

