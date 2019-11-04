
let name = prompt('enter name');
let surname = prompt('enter surname');

function createNewUser(a, b) {
    return {
        name: a,
        surname: b,
        getLogin: function () {
            return (a.charAt(0).concat(b)).toLowerCase();
        }
    }
}
console.log(createNewUser(name, surname));
console.log(createNewUser(name, surname).getLogin());
