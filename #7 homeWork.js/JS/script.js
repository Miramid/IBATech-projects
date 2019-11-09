
let arr1 = ['Miramid.s', 'JS_hw', ["#7", "advanced"], 'Baku', 'IBA Tech Academy', '2019'];

function showArr(anyArr) {
    let ul = document.createElement('ul');

    anyArr.map(item => {
        if (typeof (item) == "object") {
            let ul2 = document.createElement('ul');
            item.map(element => {
                let li = document.createElement('li');
                li.textContent = element;
                ul2.appendChild(li);
                ul.appendChild(ul2);
            });
        }
        else {
            let li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        }
    });

    document.body.querySelector('script').before(ul);
}

showArr(arr1);


let a = 10000;
let b = 10;
let p_tag = document.createElement('p');
document.body.querySelector('script').before(p_tag);


while (a >= 0) {
    setTimeout(() => {
        p_tag.innerHTML = b--;
        if (p_tag.textContent == 0) {
            document.body.innerHTML= '';
        }
    }, a);
    a = a - 1000;
}