const onlyNumb = /^[0-9]+$/;

let firstNumb = prompt('ENTER FIRST NUMB');
while (!(firstNumb.match(onlyNumb))) {
    firstNumb = prompt('ENTER FIST NUMB correctly');
}

let secondNumb = prompt('ENTER SECOND NUMB');
while (!(firstNumb.match(onlyNumb))) {
    secondNumb = prompt('ENTER SECOND NUMB correctly');
}

let operation = prompt('ENTER operation "+ - * /"');
while (!(operation == '+' || operation == '-' || operation == '*' || operation == '/')) {
    operation = prompt('ENTER operation correctly "+ - * /"');
}

function mathOperation(a, b, c) {
    if (c == '+') {
        alert(a + ' + ' + b + ' = ' + (a + b));
    }
    else if (c == '-') {
        alert(a + ' - ' + b + ' = ' + (a - b));
    }
    else if (c == '*') {
        alert(a + ' * ' + b + ' = ' + (a * b));
    }
    else  {
        alert(a + ' / ' + b + ' = ' + (a / b));
    }
}

mathOperation(firstNumb, secondNumb, operation);
