const onlyLetters = /^[A-Za-z]+$/;
const onlyNumb = /^[0-9]+$/;

let userName = prompt('Enter name');
while (!(userName.match(onlyLetters))) {
    userName = prompt('Enter name correctly');
}

let userAge = prompt('Enter age');
while (!(userAge.match(onlyNumb))) {
    userAge = prompt('Enter age correctly');
}

if (userAge < 18) {
    alert('You are not allowed to visit this website');
}
else if (18 <= userAge && userAge <= 22) {

    let userAnswer = confirm('R u sure ?');

    if (userAnswer==true) {
        alert('Welcome, ' + userName);
    }
    else {
        alert('You are not allowed to visit this website');
    }
}
else {
    alert('Welcome, ' + userName);
}