while (true) {
    let intNumb_1 = parseInt(prompt('Enter fist number'));
    while (isNaN(intNumb_1)) {
        intNumb_1 = parseInt(prompt('Enter first number correctly'));
    }
    let intNumb_2 = parseInt(prompt('Enter second number'));
    while (isNaN(intNumb_2)) {
        intNumb_2 = parseInt(prompt('Enter second number correctly'));
    }
    
    if (intNumb_2>intNumb_1){
        let arr=[];
        for(let i= intNumb_1 ; i<=intNumb_2;i++ ){
            if (i%5==0){
                arr.push(i);
            }
        }
        if (arr.length==0){
            alert ('Sorry, no numbers');
        }
        else {
            alert (arr);
        }
        break;
    }
    else {
        alert ('Second number must be bigger than first');
    }
}




