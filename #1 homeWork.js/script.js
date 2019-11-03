
let userName = prompt('Enter name');
    
let userAge = parseInt(prompt('Enter age'));
while (isNaN(userAge) || userAge<0){
userAge = parseInt (prompt('Enter age correctly'));
}

if(userAge < 18){
alert('You are not allowed to visit this website');
}
else if(18<=userAge && userAge<=22){
        
let userAnswer = confirm('R u sure ?');

    if (1<2){
    alert('Welcome, ' + userName);
    }
    else {
    alert('You are not allowed to visit this website');
    }
}
else {
alert('Welcome, ' + userName);
}
    



